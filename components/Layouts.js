// import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { useRouter } from "next/router";
import Head from "next/head";
import Nav from "./Nav";
import Footer from "./Footer";
import { useTranslation } from "../src/i18n/useTranslation";
import { translations } from "../src/i18n/translations";

const Layouts = ({ children, fontClass = "", onToggleLanguage = () => {} }) => {
  const router = useRouter();
  const { dictionary, language } = useTranslation();
  const fallbackMeta = translations.en?.meta ?? {};
  const dictionaryMeta = dictionary.meta ?? {};
  const routeMeta =
    dictionaryMeta[router.pathname] ?? dictionaryMeta.default ?? {};
  const fallbackRouteMeta =
    fallbackMeta[router.pathname] ?? fallbackMeta.default ?? {};
  const pageMeta = { ...fallbackRouteMeta, ...routeMeta };

  const {
    title,
    description,
    keywords,
    canonical,
    ogImage,
    ogLocale,
    language: metaLanguage,
    structuredData,
    robots,
    googlebot,
  } = pageMeta;

  const jsonLd = (data) => JSON.stringify(data).replace(/</g, "\\u003c");
  const ogType = ["/blog", "/casestudy"].includes(router.pathname)
    ? "article"
    : "website";

  const breadcrumbData = (() => {
    const isRTL = language === "ar";
    const crumbMap = {
      "/about": isRTL ? "من أنا" : "About",
      "/certifications": isRTL ? "الشهادات المهنية" : "Professional Certifications",
      "/projects": isRTL ? "المشاريع" : "Portfolio",
      "/blog": isRTL ? "المدونة" : "Blog",
      "/recommendations": isRTL ? "التوصيات" : "Recommendations",
      "/casestudy": isRTL ? "دراسة حالة" : "Case Study",
      "/contact": isRTL ? "تواصل" : "Contact",
      "/ux-lead": isRTL ? "قيادة UX" : "UX Leadership",
      "/designops": isRTL ? "عمليات التصميم" : "DesignOps Governance",
      "/government-ux": isRTL ? "تجربة المستخدم الحكومية" : "Government UX",
    };
    if (!crumbMap[router.pathname]) return null;
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: isRTL ? "الرئيسية" : "Home",
          item: "https://omarmokhtar.com",
        },
        { "@type": "ListItem", position: 2, name: crumbMap[router.pathname], item: canonical },
      ],
    };
  })();

  const supplementalStructuredData = (() => {
    const personRef = {
      "@type": "Person",
      name: "Omar Mokhtar",
      alternateName: ["Omar Mokhtar", "Omar M. Mokhtar", "عمر مختار"],
      jobTitle: "UX/UI Design Lead",
      description:
        "UX Design Lead with 19+ years of experience in government digital transformation, enterprise UX, and design systems across Saudi Arabia",
      url: "https://omarmokhtar.com",
      image: "https://omarmokhtar.com/images/omar.png",
      hasOccupation: [
        {
          "@type": "Occupation",
          name: "UX/UI Design Lead",
        },
        {
          "@type": "Occupation",
          name: "Design Systems Specialist",
        },
        {
          "@type": "Occupation",
          name: "DesignOps Practitioner",
        },
        {
          "@type": "Occupation",
          name: "Government UX Specialist",
        },
      ],
      nationality: { "@type": "Country", name: "Saudi Arabia" },
      address: {
        "@type": "PostalAddress",
        addressCountry: "SA",
        addressRegion: "Saudi Arabia",
      },
      knowsAbout: [
        "UX Design",
        "User Experience Design",
        "UI Design",
        "DesignOps",
        "Design Systems",
        "Government Digital Transformation",
        "Accessibility Design",
        "Enterprise UX",
        "Front-End Development",
        "Figma",
        "User Research",
        "WCAG Accessibility",
      ],
      knowsLanguage: ["Arabic", "English"],
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        name: "Google UX Design Professional Certificate",
        credentialCategory: "Professional Certificate",
        recognizedBy: { "@type": "Organization", name: "Google" },
      },
      sameAs: [
        "https://www.linkedin.com/in/omarmokhtar22/",
        "https://www.behance.net/Omar_Mokhtar",
        "https://github.com/omarmok",
      ],
      worksFor: {
        "@type": "Organization",
        name: "Government of Saudi Arabia",
        address: { "@type": "PostalAddress", addressCountry: "SA" },
      },
    };

    if (router.pathname === "/about") {
      return {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        name: title,
        description,
        url: canonical,
        mainEntity: personRef,
      };
    }

    if (router.pathname === "/projects") {
      return {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: title,
        description,
        url: canonical,
        author: personRef,
        about: [
          "UX Leadership",
          "DesignOps",
          "Design Systems",
          "Front-End Implementation",
          "Enterprise Platforms",
          "Government Digital Products",
        ],
      };
    }

    if (router.pathname === "/blog") {
      return {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: title,
        description,
        url: canonical,
        author: personRef,
      };
    }

    if (router.pathname === "/casestudy") {
      return {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        url: canonical,
        author: personRef,
      };
    }

    if (router.pathname === "/contact") {
      return {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: title,
        description,
        url: canonical,
      };
    }

    if (router.pathname === "/recommendations") {
      return {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: title,
        description,
        url: canonical,
        author: personRef,
      };
    }

    const servicePageMap = {
      "/ux-lead": "UX Leadership",
      "/designops": "DesignOps Governance",
      "/government-ux": "Government UX",
    };
    if (servicePageMap[router.pathname]) {
      return {
        "@context": "https://schema.org",
        "@type": "Service",
        name: servicePageMap[router.pathname],
        description,
        url: canonical,
        provider: personRef,
        areaServed: { "@type": "Country", name: "Saudi Arabia" },
      };
    }

    return null;
  })();

  return (
    <div className={`wrapper ${fontClass}`}>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Head>
        {/* Basic Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        />
        <meta
          name="robots"
          content={
            robots ??
            "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
          }
        />
        <meta name="googlebot" content={googlebot ?? "index, follow"} />

        {/* Canonical URL */}
        <link rel="canonical" href={canonical} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content={ogType} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={title} />
        <meta property="og:url" content={canonical} />
        <meta property="og:site_name" content="Omar Mokhtar" />
        <meta property="og:locale" content={ogLocale ?? "en_US"} />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@OmarMokhtar" />
        <meta name="twitter:creator" content="@OmarMokhtar" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:image:alt" content={title} />

        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Omar Mokhtar" />
        <meta name="publisher" content="Omar Mokhtar" />
        <meta name="copyright" content="Omar Mokhtar" />
        <meta name="language" content={metaLanguage ?? "English"} />
        <meta name="geo.region" content="SA" />
        <meta name="geo.country" content="Saudi Arabia" />
        <meta name="geo.placename" content="Saudi Arabia" />
        <meta name="theme-color" content="#0f172a" />

        {/* Performance & Security */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Structured Data */}
        {structuredData && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }}
          />
        )}

        {supplementalStructuredData && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: jsonLd(supplementalStructuredData),
            }}
          />
        )}

        {breadcrumbData && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbData) }}
          />
        )}

        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLd({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Omar Mokhtar — UX Design Lead Saudi Arabia",
              description:
                "Portfolio and expertise showcase of Omar Mokhtar, UX Design Lead and DesignOps specialist with 19+ years across Saudi Arabia's government, enterprise, and education sectors.",
              url: "https://omarmokhtar.com",
              inLanguage: ["en", "ar"],
              about: [
                "UX/UI Design Lead",
                "UX Leadership",
                "Design Systems",
                "DesignOps",
                "Government UX",
                "Product Design",
                "Saudi Arabia",
              ],
              author: {
                "@type": "Person",
                name: "Omar Mokhtar",
                url: "https://omarmokhtar.com",
              },
              publisher: {
                "@type": "Organization",
                name: "Omar Mokhtar",
                url: "https://omarmokhtar.com",
                logo: {
                  "@type": "ImageObject",
                  url: "https://omarmokhtar.com/images/mylogo.png",
                },
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLd({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Omar Mokhtar",
              url: "https://omarmokhtar.com",
              logo: "https://omarmokhtar.com/images/mylogo.png",
              sameAs: [
                "https://www.linkedin.com/in/omarmokhtar22/",
                "https://www.behance.net/Omar_Mokhtar",
                "https://github.com/omarmok",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLd({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Omar Mokhtar UX Leadership Services",
              url: "https://omarmokhtar.com",
              provider: {
                "@type": "Person",
                name: "Omar Mokhtar",
                url: "https://omarmokhtar.com",
              },
              areaServed: ["Saudi Arabia", "GCC"],
              serviceType: [
                "Government UX",
                "Design Systems",
                "DesignOps",
                "UX Leadership",
                "Design-to-Code",
              ],
              availableLanguage: ["Arabic", "English"],
            }),
          }}
        />
      </Head>
      <Nav onToggleLanguage={onToggleLanguage} />
      <main id="main-content">
        {children}
      </main>
      <Footer />
      <Analytics />
    </div>
  );
};
export default Layouts;
