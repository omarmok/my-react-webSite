
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
            value:"default-src 'self'; 'http://omarmokhtar.com'; img-src 'self' *.http://omarmokhtar.com; script-src 'self'",
           
          },
          
        ],
      },
    
    ]
  },
  
}
