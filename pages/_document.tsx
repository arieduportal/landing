import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script strategy="lazyOnload" id="tracker_id">
          {`
          window.TRACK_ID = "AE_EF69E-19F66-F7D2F328-0AF1";
        `}
        </Script>
      </body>
    </Html>
  )
}