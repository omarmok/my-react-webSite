/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://example.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  autoLastmod: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};

module.exports = config;
