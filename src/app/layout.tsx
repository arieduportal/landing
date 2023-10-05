import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script';
import { Providers } from "./providers";
import Tracker from "@/app/components/tracker"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'School Information Management System | arieducationportal.com',
  description: 'Streamline academic data organization, track student proformance, manage grades, attendence, and examination results effortlessly',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script strategy="afterInteractive" id="tracker_id">
          {`
          window.TRACK_ID = "AE_1B267-619C4-812CC46E-E281";
        `}
        </Script>
        <main id="_next">
          <Providers>
            {children}
          </Providers>
          <Tracker />
        </main>
      </body>
    </html>
  )
}
