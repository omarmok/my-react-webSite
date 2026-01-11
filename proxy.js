import { NextResponse } from 'next/server';

const MAX_BODY_SIZE = 1 * 1024 * 1024; // 1 MB to block large abusive payloads
const RATE_LIMIT_WINDOW = 60 * 1000; // 60 seconds
const RATE_LIMIT_MAX = 120; // requests per window per IP

const rateLimitStore = globalThis.__nextRateLimitStore || new Map();
globalThis.__nextRateLimitStore = rateLimitStore;

const getClientIp = (request) => {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  const cf = request.headers.get('cf-connecting-ip');
  if (cf) {
    return cf;
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

export function proxy(request) {
  const contentLength = Number(request.headers.get('content-length') ?? '0');
  if (contentLength > MAX_BODY_SIZE) {
    return new NextResponse('Payload too large', { status: 413 });
  }

  const ip = getClientIp(request);
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
  matcher: ['/((?!_next/static|favicon.ico).*)'],
};
