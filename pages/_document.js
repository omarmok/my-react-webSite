import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preload"
          href="/images/omar.avif"
          as="image"
        />
        <link rel="preload" href="/summary.mp3" as="audio" type="audio/mpeg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
