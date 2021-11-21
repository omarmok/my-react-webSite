
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
            value:"img-src * data: http://omarmokhtar.com/forjeson/; ",
          },
          
        ],
      },
    
    ]
  },
  
}
