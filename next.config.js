/** @type {import('next').NextConfig} */
const path = require('path');

const designSystemPassword = process.env.DESIGN_SYSTEM_PASSWORD;
const isDesignSystemPasswordMissing =
  typeof designSystemPassword !== 'string' ||
  designSystemPassword.trim().length === 0;

if (process.env.NODE_ENV !== 'production' && isDesignSystemPasswordMissing) {
  console.warn(
    [
      '[Design System]',
      'DESIGN_SYSTEM_PASSWORD is missing.',
      '',
      'Create or update:',
      '.env.local',
      '',
      'Example:',
      'DESIGN_SYSTEM_PASSWORD=YourPasswordHere',
    ].join('\n'),
  );
}

const nextConfig = {
  allowedDevOrigins: ['127.0.0.1', 'localhost'],
  experimental: {
    turbopackFileSystemCacheForDev: false,
    turbopackFileSystemCacheForBuild: false,
  },
  async headers() {
    return [
      {
        source: '/design-system',
        headers: [
          {
            key: 'X-Robots-Tag',
            value:
              'noindex, nofollow, noarchive, nosnippet, noimageindex, max-snippet:0, max-image-preview:none, max-video-preview:0',
          },
        ],
      },
      {
        source: '/PS-Design/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value:
              'noindex, nofollow, noarchive, nosnippet, noimageindex, max-snippet:0, max-image-preview:none, max-video-preview:0',
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'user-assets.maven.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 's3.eu-north-1.amazonaws.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.adobe.com',
        pathname: '/**',
      },
    ],
    qualities: [65, 70, 75, 80, 85, 90],
  },
  outputFileTracingRoot: path.join(__dirname),
};

module.exports = nextConfig;
