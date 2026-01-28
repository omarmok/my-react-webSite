import { Html, Head, Main, NextScript } from "next/document";
import { ibmPlexSansArabic } from "../src/fonts";

export default function Document() {
  return (
    <Html lang="en" className={ibmPlexSansArabic.variable}>
      <Head>
      </Head>
      <body className={ibmPlexSansArabic.className}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
