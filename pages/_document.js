import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const hotjarId = 1978942;
  const hotjarVersion = 6;
  const enableHotjar = true;

  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@100;200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="preload"
          href="/images/omar.avif"
          as="image"
        />
        <link rel="preload" href="/summary.mp3" as="audio" type="audio/mpeg" />
        {enableHotjar && (
          <script
            id="hotjar-init"
            dangerouslySetInnerHTML={{
              __html: `/* Hotjar Tracking Code for https://omarmokhtar.com/ */(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};h._hjSettings={hjid:${hotjarId},hjsv:${hotjarVersion}};a=o.getElementsByTagName('head')[0];r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r);})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
            }}
          />
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
