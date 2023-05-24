import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Best Information And Result Management System In Nigeria | arieducationportal.com',
  description: 'Best Information And Result Management System In Nigeria',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script strategy="beforeInteractive" id="tracker_id">
          {`
          window.TRACK_ID = "AE_EF69E-19F66-F7D2F328-0AF1";
        `}
        </Script>
        <main id="_next">
          {children}
        </main>
        <Script src="/js/track.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
