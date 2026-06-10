import { Html, Head, Main, NextScript } from "next/document";
import { ibmPlexSansArabic } from "../src/fonts";

const themeInitScript = `
  (function () {
    var storageKey = 'site_theme';
    var lightTheme = 'light';
    var darkTheme = 'dark';
    var metaLight = '#f2f3f5';
    var metaDark = '#0b0b0f';

    try {
      var storedTheme = window.localStorage.getItem(storageKey);
      var theme = storedTheme === darkTheme || storedTheme === lightTheme
        ? storedTheme
        : lightTheme;

      var root = document.documentElement;
      root.dataset.theme = theme;
      root.style.colorScheme = theme;

      var themeMeta = document.querySelector('meta[name="theme-color"]');
      if (themeMeta) {
        themeMeta.setAttribute('content', theme === darkTheme ? metaDark : metaLight);
      }
    } catch (error) {
      document.documentElement.dataset.theme = lightTheme;
      document.documentElement.style.colorScheme = lightTheme;
    }
  })();
`;

export default function Document() {
  return (
    <Html
      lang="en"
      className={ibmPlexSansArabic.variable}
      data-scroll-behavior="smooth">
      <Head>
        <meta name="color-scheme" content="light dark" />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </Head>
      <body className={ibmPlexSansArabic.className}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
