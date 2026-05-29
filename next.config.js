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
  experimental: {
    turbopackFileSystemCacheForDev: false,
    turbopackFileSystemCacheForBuild: false,
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
    qualities: [65, 70, 75],
  },
  outputFileTracingRoot: path.join(__dirname),
};

module.exports = nextConfig;
