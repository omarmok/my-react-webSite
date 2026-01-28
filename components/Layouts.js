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
  const { dictionary } = useTranslation();
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
  } = pageMeta;

  return (
    <div className={`wrapper ${fontClass}`}>
      <a href="#main-content" className="skip-link">Skip to main content</a>
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
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
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
        <meta property="og:locale" content={ogLocale ?? "en_US"} />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Omar Mokhtar" />
        <meta name="publisher" content="Omar Mokhtar" />
        <meta name="copyright" content="Omar Mokhtar" />
        <meta name="language" content={metaLanguage ?? "English"} />
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
              name: "Omar Mokhtar",
              description: "UX Design Lead Portfolio and Blog",
              url: "https://omarmokhtar.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://omarmokhtar.com/Blog?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </Head>
      <Nav onToggleLanguage={onToggleLanguage} />
      <div id="main-content" role="main">
        {children}
      </div>
      <Footer />
      <Analytics />
    </div>
  );
};
export default Layouts;
