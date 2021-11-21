
const securityHeaders = []

module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: ['http://omarmokhtar.com/forjeson/']
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: ' img-src http://omarmokhtar.com',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    
    ]
  },
  
}
