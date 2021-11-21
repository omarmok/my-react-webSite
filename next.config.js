
const securityHeaders = []

module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: ['https://omarmokhtar.com/forjeson/']
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value:"img-src * 'self' https://omarmokhtar.com; ",
          },
          
        ],
      },
    
    ]
  },
  
}
