/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://omarmokhtar.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  autoLastmod: true,
  exclude: [
    '/design-system',
    '/PS-Design',
    '/PS-Design/*',
    '/PS-Design/**',
    '/api/*',
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/design-system',
          '/PS-Design',
          '/PS-Design/*',
          '/PS-Design/**',
          '/api/*',
        ],
      },
    ],
    additionalSitemaps: ['https://omarmokhtar.com/sitemap.xml'],
  },
};

module.exports = config;
