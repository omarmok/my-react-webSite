// import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Nav from './Nav'
import Footer from './Footer'

const Layouts = ({ children, fontClass = '' }) => {
    const router = useRouter();
    
    // Get page-specific title and description based on current route
    const getPageMeta = () => {
        const baseUrl = 'https://omarmokhtar.com'; // Replace with your actual domain
        const siteName = 'Omar Mokhtar';
        
        switch(router.pathname) {
            case '/':
                return {
                    title: 'Omar Mokhtar - UX Design Lead | 17+ Years Experience',
                    description: 'Omar Mokhtar is a UX Design Lead with 17+ years of experience in digital experiences, mobile interfaces, and web dashboards. Google Professional UX Certified.',
                    keywords: 'UX Designer, UI Designer, User Experience, Mobile Design, Web Dashboards, Saudi Arabia, Government Projects',
                    canonical: baseUrl,
                    ogImage: `${baseUrl}/images/omar.png`,
                    structuredData: {
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "Omar Mokhtar",
                        "jobTitle": "UX Design Lead",
                        "description": "UX Design Lead with 17+ years of experience in digital experiences, mobile interfaces, and web dashboards",
                        "url": baseUrl,
                        "image": `${baseUrl}/images/omar.png`,
                        "sameAs": [
                            "https://www.linkedin.com/in/omarmokhtar22/",
                            "https://www.behance.net/Omar_Mokhtar",
                            "https://github.com/omarmok"
                        ],
                        "worksFor": {
                            "@type": "Organization",
                            "name": "Confidential Government"
                        },
                        "hasCredential": {
                            "@type": "EducationalOccupationalCredential",
                            "name": "Google Professional UX Certificate"
                        }
                    }
                };
            case '/About':
                return {
                    title: 'Experience & Career - Omar Mokhtar | UX Design Lead',
                    description: 'Professional experience and career journey of Omar Mokhtar, UX Design Lead. View certifications, skills, and 17+ years of design expertise.',
                    keywords: 'UX Designer Experience, Career Journey, Design Certifications, UI/UX Skills, Professional Portfolio',
                    canonical: `${baseUrl}/About`,
                    ogImage: `${baseUrl}/images/omar.png`
                };
            case '/Blog':
                return {
                    title: 'UI/UX Design Blog - Omar Mokhtar | Design Insights & Tips',
                    description: 'Latest insights and thoughts on UI/UX design, web development, and user experience. Expert articles on design thinking, empathy, and SVG optimization.',
                    keywords: 'UX Design Blog, UI/UX Articles, Design Thinking, User Experience Tips, SVG Optimization, Design Empathy',
                    canonical: `${baseUrl}/Blog`,
                    ogImage: `${baseUrl}/images/blog-hero.jpg`
                };
            case '/Projects':
                return {
                    title: 'UX/UI Design Portfolio - Omar Mokhtar | Case Studies & Projects',
                    description: 'Portfolio of UI/UX design projects and case studies by Omar Mokhtar. Government projects, web applications, and mobile interfaces.',
                    keywords: 'UX Portfolio, UI Design Projects, Case Studies, Government Projects, Web Applications, Mobile Design',
                    canonical: `${baseUrl}/Projects`,
                    ogImage: `${baseUrl}/images/projects-hero.jpg`
                };
            case '/ContactForm':
                return {
                    title: 'Contact Omar Mokhtar | UX Design Lead | Get In Touch',
                    description: 'Get in touch with Omar Mokhtar, UX Design Lead for collaboration, consultation, and design inquiries. Available for freelance and project work.',
                    keywords: 'Contact UX Designer, Design Consultation, Freelance UX Designer, Design Services, Collaboration',
                    canonical: `${baseUrl}/ContactForm`,
                    ogImage: `${baseUrl}/images/omar.png`
                };
            default:
                return {
                    title: 'Omar Mokhtar - UX Design Lead',
                    description: 'UI/UX Designer with 17+ years of experience in digital experiences and mobile interfaces',
                    keywords: 'UX Designer, UI Designer, User Experience',
                    canonical: baseUrl,
                    ogImage: `${baseUrl}/images/omar.png`
                };
        }
    };

    const { title, description, keywords, canonical, ogImage, structuredData } = getPageMeta();
    
    return(
      <div className={`wrapper ${fontClass}`}>
        <Head>
          {/* Basic Meta Tags */}
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
          <meta name="googlebot" content="index, follow" />
          
          {/* Canonical URL */}
          <link rel="canonical" href={canonical} />
          
          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
          
          {/* Open Graph Meta Tags */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={ogImage} />
          <meta property="og:url" content={canonical} />
          <meta property="og:site_name" content="Omar Mokhtar" />
          <meta property="og:locale" content="en_US" />
          
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={ogImage} />
          
          {/* Additional SEO Meta Tags */}
          <meta name="author" content="Omar Mokhtar" />
          <meta name="publisher" content="Omar Mokhtar" />
          <meta name="copyright" content="Omar Mokhtar" />
          <meta name="language" content="English" />
          <meta name="geo.region" content="SA" />
          <meta name="geo.country" content="Saudi Arabia" />
          
          {/* Performance & Security */}
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          {/* Structured Data */}
          {structuredData && (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
          )}
          
          {/* Additional Structured Data for Website */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Omar Mokhtar",
                "description": "UX Design Lead Portfolio and Blog",
                "url": "https://omarmokhtar.com",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://omarmokhtar.com/Blog?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              })
            }}
          />
        </Head>
        <Nav />
        {children} 
        <Footer />
        <Analytics />
        </div>
    )
}
export default Layouts
