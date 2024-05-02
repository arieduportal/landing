/* eslint-disable @next/next/no-page-custom-font */
import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script';
import { Providers } from "./providers";
import Tracker from "@/app/components/tracker"
import Footer from './components/footer';
import CookieBanner from './components/cookieBanner';
import Header from './components/header';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'School Information Management System | arieducationportal.com',
  description: 'Manage all aspects of your school with ease. Our app includes an Academics Portal for accessing resources, an ePayment Portal for online transactions, an Analytics Portal for data-driven decisions, Site Management tools for website control, and a Staff Payment System for efficient payroll management. Streamline your school operations today!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.className} font-inter`}>
      <head>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://static.arieducationportal.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://static.arieducationportal.com" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" sizes="16x16" href="https://static.arieducationportal.com/image/icons/16.png" type="image/png" />
        <link rel="icon" sizes="32x32" href="https://static.arieducationportal.com/image/icons/32.png" type="image/png" />
        <link rel="icon" sizes="96x96" href="https://static.arieducationportal.com/image/icons/96.png" type="image/png" />
        <link rel="apple-touch-icon" sizes="167x167" href="https://static.arieducationportal.com/image/icons/167.png" type="image/png" />
        <link rel="apple-touch-icon" sizes="152x152" href="https://static.arieducationportal.com/image/icons/152.png" type="image/png" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://static.arieducationportal.com/image/icons/180.png" type="image/png" />
        <link rel="apple-touch-icon" href="https://static.arieducationportal.com/image/icons/120.png" type="image/png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto&family=Inter&display=swap"
        />
      </head>
      <body className={inter.className}>
        <Script strategy="afterInteractive" id="tracker_id">
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
      </body>
    </html>
  )
}