/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
    qualities: [65, 70, 75],
  },
  outputFileTracingRoot: path.join(__dirname),
};

module.exports = nextConfig;
