/* eslint-disable @next/next/no-page-custom-font */
import Script from 'next/script';
import { Providers } from "./providers";
import Tracker from "@/app/components/tracker"
import Footer from './components/footer';
import CookieBanner from './components/cookieBanner';
import Header from './components/header';

import './globals.css'
import './animate.css'

export const metadata = {
  title: 'Axiolot Hub - Your Trusted Partner In Technology Solutions For Schools',
  description: 'Manage all aspects of your school with ease. Our app includes an Academics Portal for accessing resources, an ePayment Portal for online transactions, an Analytics Portal for data-driven decisions, Site Management tools for website control, and a Staff Payment System for efficient payroll management. Streamline your school operations today!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className={`font-satoshi`}>
      <head>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.axiolot.com.ng/" />
        <meta property="og:site_name" content="Axiolot Hub" />
        <meta property="og:title" content="Axiolot Hub - Your Trusted Partner In Technology Solutions For Schools" />
        <meta property="og:description" content="Manage all aspects of your school with ease. Our app includes an Academics Portal for accessing resources, an ePayment Portal for online transactions, an Analytics Portal for data-driven decisions, Site Management tools for website control, and a Staff Payment System for efficient payroll management. Streamline your school operations today!" />
        <meta property="og:image" content="https://static.axiolot.com.ng/image/icons/120" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:creator" content="@axiolothub" />
        <meta property="twitter:url" content="https://www.axiolot.com.ng/" />
        <meta property="twitter:title" content="Axiolot Hub - Your Trusted Partner In Technology Solutions For Schools" />
        <meta property="twitter:description" content="Manage all aspects of your school with ease. Our app includes an Academics Portal for accessing resources, an ePayment Portal for online transactions, an Analytics Portal for data-driven decisions, Site Management tools for website control, and a Staff Payment System for efficient payroll management. Streamline your school operations today!" />
        <meta property="twitter:image" content="https://static.axiolot.com.ng/image/icons/120" />

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
        <link rel="canonical" href="https://www.axiolot.com.ng/" />
        
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Axiolot Hub" />
        <meta name="theme-color" content="#2f2e41" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#603cba" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="keywords" content="Axiolot, Axiolot Hub, School information management, School data analytics, Report card generation, Parent portal, Exam results management, Attendence tracking, Grade management, Academic data organization, Result tracking system, Course registration" />
        <meta httpEquiv="XUACompatible" content="ie=edge" />
      </head>
      <body className="font-satoshi">
        <Script strategy="afterInteractive" id="track-id">
          {`
          window.TRACK_ID = "AE_1B267-619C4-812CC46E-E281";
        `}
        </Script>
        <Header />
        <main id="_next">
          <Providers>
            {children}
          </Providers>
          <Tracker />
          <CookieBanner />
        </main>
        <Footer />
        <div data-wow-delay="0.6s" className="fixed wow flipInX hidden lg:block transition-all duration-500 hover:scale-[1.1] focus:scale-[0.8] rotate-[270deg] left-0 md:left-4 top-1/2 transform -translate-y-1/2 w-auto z-[1000]">
          <a href="https://api.axiolot.com.ng/onboard/demo?track-id=AE_1B267-619C4-812CC46E-E281" className="underline text-black font-medium text-sm font-inter">Try Demo Account</a>
        </div>
        <Script strategy="lazyOnload" src={`${process.env.NEXT_PUBLIC_CDN}/js/ripple.js`} id="ripple" >
        </Script>
        <Script strategy="afterInteractive" src={process.env.NEXT_PUBLIC_CDN + "/js/wow.min.js"} id="wow" >
        </Script>
        <Script strategy="lazyOnload" src={process.env.NEXT_PUBLIC_CDN + "/js/wow.config.js"} id="wow.config" >
        </Script>
        <Script strategy="lazyOnload" src="https://static.axiolot.com.ng/js/chat-widget" id="chat.widget" >
        </Script>
      </body>
    </html>
  )
}