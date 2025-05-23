import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://axiolot.com.ng/" />
        <meta property="og:title" content="Axiolot Hub - Your Trusted Partner In Technology Solutions For Schools" />
        <meta property="og:description" content="Manage all aspects of your school with ease. Our app includes an Academics Portal for accessing resources, an ePayment Portal for online transactions, an Analytics Portal for data-driven decisions, Site Management tools for website control, and a Staff Payment System for efficient payroll management. Streamline your school operations today!" />
        <meta property="og:image" content="https://static.axiolot.com.ng/image/icons/120.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://axiolot.com.ng/" />
        <meta property="twitter:title" content="Axiolot Hub - Your Trusted Partner In Technology Solutions For Schools" />
        <meta property="twitter:description" content="Manage all aspects of your school with ease. Our app includes an Academics Portal for accessing resources, an ePayment Portal for online transactions, an Analytics Portal for data-driven decisions, Site Management tools for website control, and a Staff Payment System for efficient payroll management. Streamline your school operations today!" />
        <meta property="twitter:image" content="https://static.axiolot.com.ng/image/icons/120.jpg" />

        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://static.axiolot.com.ng" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://static.axiolot.com.ng" />
        <link rel="icon" sizes="16x16" href="https://static.axiolot.com.ng/image/icons/16.png" type="image/png" />
        <link rel="icon" sizes="32x32" href="https://static.axiolot.com.ng/image/icons/32.png" type="image/png" />
        <link rel="icon" sizes="96x96" href="https://static.axiolot.com.ng/image/icons/96.png" type="image/png" />
        <link rel="apple-touch-icon" sizes="167x167" href="https://static.axiolot.com.ng/image/icons/167.png" type="image/png" />
        <link rel="apple-touch-icon" sizes="152x152" href="https://static.axiolot.com.ng/image/icons/152.png" type="image/png" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://static.axiolot.com.ng/image/icons/180.png" type="image/png" />
        <link rel="apple-touch-icon" href="https://static.axiolot.com.ng/image/icons/120.png" type="image/png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto&family=Inter&family=Merriweather&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.cdnfonts.com/css/satoshi"
        />
        <link
          rel="stylesheet"
          href={`${process.env.NEXT_PUBLIC_CDN}/css/wow-animate.css`}
        />

        <link rel="canonical" href="https://axiolot.com.ng/" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Axiolot Hub" />
        <meta name="keywords" content="Axiolot Hub, Axiolot, Hub, " />
        <meta httpEquiv="XUACompatible" content="ie=edge" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}