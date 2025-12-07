/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },

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


    qualities: [70, 75],
  },
};

module.exports = nextConfig;
