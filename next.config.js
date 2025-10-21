/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [{ protocol: 'https', hostname: '*' }],
    deviceSizes: [360, 414, 640, 768, 1024, 1280, 1536],
    imageSizes: [16, 24, 32, 48, 64, 96, 128, 256],
  },
  webpack: (config) => {
    config.watchOptions = { poll: 1000, aggregateTimeout: 300 };
    return config;
  },
  headers: async () => [
    {
      source: '/:path*',
      has: [
        {
          type: 'header',
          key: 'accept',
          value: 'text/html.*',
        },
      ],
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=0, must-revalidate',
        },
      ],
    },
    {
      source: '/:all*(js|css|svg|png|jpg|jpeg|gif|ico|webp|avif|woff|woff2)',
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable"
        },
      ],
    },
  ],
};

module.exports = nextConfig;
