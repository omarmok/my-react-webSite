

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  reactStrictMode: true,

  images: {
    domains: ['i.postimg.cc'],
    unoptimized: true,
  },
};

module.exports = nextConfig;
