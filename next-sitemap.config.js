/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://omarmokhtar.com',
  generateRobotsTxt: false,
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 7000,
  autoLastmod: true,
  exclude: [
    '/design-system',
    '/PS-Design',
    '/PS-Design/*',
    '/PS-Design/**',
    '/api/*',
    '/About',
    '/Projects',
    '/CaseStudy',
    '/Blog',
    '/ContactForm',
  ],
  transform: async (config, path) => {
    const priorities = {
      '/': 1.0,
      '/about': 0.9,
      '/certifications': 0.9,
      '/projects': 0.9,
      '/casestudy': 0.9,
      '/ux-lead': 0.9,
      '/designops': 0.9,
      '/government-ux': 0.9,
      '/blog': 0.8,
      '/contact': 0.7,
    };
    const frequencies = {
      '/': 'weekly',
      '/blog': 'weekly',
      '/certifications': 'monthly',
    };
    return {
      loc: path,
      changefreq: frequencies[path] ?? config.changefreq,
      priority: priorities[path] ?? config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};

module.exports = config;
