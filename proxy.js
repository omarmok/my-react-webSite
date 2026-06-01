import { NextResponse } from 'next/server';

const MAX_BODY_SIZE = 1 * 1024 * 1024; // 1 MB to block large abusive payloads
const RATE_LIMIT_WINDOW = 60 * 1000; // 60 seconds
const RATE_LIMIT_MAX = 120; // requests per window per IP

const rateLimitStore = globalThis.__nextRateLimitStore || new Map();
globalThis.__nextRateLimitStore = rateLimitStore;

const getClientIp = (request) => {
  if (typeof request.ip === 'string' && request.ip) {
    return request.ip;
  }
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  const cf = request.headers.get('cf-connecting-ip');
  if (cf) {
    return cf;
  }
  const realIp = request.headers.get('x-real-ip');
  if (realIp) {
    return realIp;
  }
  return 'unknown';
};

const cleanup = (now) => {
  if (rateLimitStore.size < 2000) {
    return;
  }
  const expiryThreshold = now - RATE_LIMIT_WINDOW * 2;
  for (const [ip, data] of rateLimitStore) {
    if (data.start < expiryThreshold) {
      rateLimitStore.delete(ip);
    }
  }
  if (rateLimitStore.size > 5000) {
    rateLimitStore.clear();
  }
};

const isDesignSystemPath = (pathname) =>
  pathname.startsWith('/PS-Design/');

const LEGACY_PATH_REDIRECTS = new Map([
  ['/About', '/about'],
  ['/Certifications', '/certifications'],
  ['/Projects', '/projects'],
  ['/CaseStudy', '/casestudy'],
  ['/Blog', '/blog'],
  ['/Contact', '/contact'],
  ['/ContactForm', '/contact'],
]);

export function proxy(request) {
  const { pathname } = request.nextUrl;

  // Preserve legacy mixed-case URLs with permanent redirects to lowercase canonical paths.
  const canonicalPath = LEGACY_PATH_REDIRECTS.get(pathname);
  if (canonicalPath) {
    const targetUrl = new URL(request.url);
    targetUrl.pathname = canonicalPath;
    return NextResponse.redirect(targetUrl, 308);
  }

  // Guard the design system documentation behind an httpOnly cookie check.
  // The cookie is set server-side by /api/design-system-login — never by client JS.
  if (isDesignSystemPath(pathname)) {
    const accessCookie = request.cookies.get('design_system_access');
    if (accessCookie?.value !== 'true') {
      return NextResponse.redirect(new URL('/design-system', request.url));
    }
    return NextResponse.next();
  }

  // Apply request-size and rate limits only to Next.js image optimization.
  if (pathname !== '/_next/image') {
    return NextResponse.next();
  }

  // Rate limiting for image optimization endpoint
  const contentLength = Number(request.headers.get('content-length') ?? '0');
  if (contentLength > MAX_BODY_SIZE) {
    return new NextResponse('Payload too large', { status: 413 });
  }

  const ip = getClientIp(request);
  if (ip === 'unknown') {
    return NextResponse.next();
  }
  const now = Date.now();
  const entry = rateLimitStore.get(ip) ?? { count: 0, start: now };

  if (now - entry.start > RATE_LIMIT_WINDOW) {
    entry.count = 0;
    entry.start = now;
  }

  entry.count += 1;
  rateLimitStore.set(ip, entry);

  if (entry.count > RATE_LIMIT_MAX) {
    return new NextResponse('Too many requests', {
      status: 429,
      headers: { 'Retry-After': '60' },
    });
  }

  cleanup(now);
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/:path*',
  ],
};
