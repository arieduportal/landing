/* eslint-disable @next/next/no-page-custom-font */
import Script from 'next/script';
import { Providers } from "./providers";
import Tracker from "@/app/components/tracker"
import Footer from './components/footer';
import CookieBanner from './components/cookieBanner';
import Header from './components/header';
import ClientLogRocket from './components/ClientLogRocket';
import Schema from './components/Schema';

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

  const schemas: { id: string; data: Record<string, any> }[] = [
    {
      id: "axiolot-org",
      data: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://axiolot.com.ng/#organization",
        "name": "Axiolot Hub",
        "url": "https://axiolot.com.ng",
        "logo": "https://static.axiolot.com.ng/image/icons/16.png",
        "image": "https://static.axiolot.com.ng/image/header.png",
        "sameAs": [
          "https://portal.axiolot.com.ng",
          "https://sites.axiolot.com.ng",
          "https://analytics.axiolot.com.ng",
          "https://e-pay.axiolot.com.ng",
          "https://demo.axiolot.com.ng",
          "https://x.com/axiolothub",
          "https://linkedin.com/company/axiolothub",
          "https://facebook.com/axiolothub"
        ],
        "description":
          "Axiolot Hub helps schools in Nigeria digitize operations with modules for academics, payments, analytics, site management, and payroll. Transform your school with modern automation today.",
        "founder": {
          "@type": "Person",
          "name": "Arinze Justin",
          "url": "https://axiolot.com.ng/#team"
        },
        "foundingDate": "2022",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "NG",
          "addressLocality": "Enugu",
          "addressRegion": "South East",
          "postalCode": "40012",
          "streetAddress": "Block 4, Opp. St. Faith Schools, Ebony Paint Road, Enugu State."
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Support",
          "email": "support@axiolot.com.ng",
          "telephone": "+2347073184665",
          "areaServed": "NG"
        },
        "subOrganization": [
          { "@type": "Organization", "name": "Axiolot Portal", "url": "https://portal.axiolot.com.ng" },
          { "@type": "Organization", "name": "Axiolot Sites", "url": "https://sites.axiolot.com.ng" },
          { "@type": "Organization", "name": "Axiolot Analytics", "url": "https://analytics.axiolot.com.ng" },
          { "@type": "Organization", "name": "Axiolot Pay", "url": "https://e-pay.axiolot.com.ng" },
          { "@type": "Organization", "name": "Axiolot Demo", "url": "https://demo.axiolot.com.ng" },
          { "@type": "Organization", "name": "Axiolot CDN", "url": "https://static.axiolot.com.ng" }
        ],
        "brand": "Axiolot Hub",
        "knowsAbout": [
          "School Management Systems",
          "Education Technology",
          "Result Processing Software",
          "E-Payment Integration",
          "Analytics for Schools"
        ],
        "author": {
          "@type": "Organization",
          "@id": "https://axiolot.com.ng/#organization"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "NGN",
          "category": "Free trial available",
          "url": "https://axiolot.com.ng/#plan"
        },
        "featureList": [
          "Academics Portal for student results",
          "E-Payment and staff payroll system",
          "Website control and hosting",
          "Analytics dashboard for insights",
          "Parent and teacher communication tools"
        ],
        "keywords": [
          "school management software",
          "result portal",
          "e-payment platform",
          "education technology",
          "analytics dashboard for schools"
        ]
      }
    },

    {
      id: "axiolot-faq",
      data: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is Axiolot Hub?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Axiolot Hub is Nigeria’s most comprehensive school management platform. It helps schools manage academics, results, payments, and staff operations in one digital system."
            }
          },
          {
            "@type": "Question",
            name: "Can Axiolot Hub be customized for any school?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, Axiolot Hub is flexible and customizable. Schools can tailor modules like result management, payroll, and analytics to fit their structure."
            }
          },
          {
            "@type": "Question",
            name: "Is Axiolot Hub suitable for primary and secondary schools?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Absolutely. Axiolot Hub serves both primary and secondary schools, helping them move from manual to digital management."
            }
          },
          {
            "@type": "Question",
            name: "How secure is the Axiolot Hub platform?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Axiolot Hub uses encryption, verified payments, and secure storage to protect all data."
            }
          }
        ]
      }
    },

    {
      id: "axiolot-products",
      data: {
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Axiolot Hub",
        image: "https://static.axiolot.com.ng/image/header.png",
        description:
          "Axiolot Hub is Nigeria’s leading digital school management software — simplifying academics, finance, and analytics for schools of all sizes.",
        brand: {
          "@type": "Organization",
          name: "Axiolot Hub",
          url: "https://axiolot.com.ng"
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "124"
        },
        review: [
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Mrs. Okafor Chinyere" },
            datePublished: "2024-06-12",
            reviewBody:
              "Axiolot Hub transformed how we manage results and fees. Parents and teachers love the simplicity!",
            name: "Reliable and Easy to Use",
            reviewRating: { "@type": "Rating", ratingValue: "5" }
          },
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Mr. Adeyemi Olawale" },
            datePublished: "2024-09-03",
            reviewBody:
              "Excellent tool for digitalizing school operations. The analytics module is brilliant.",
            name: "Powerful Analytics",
            reviewRating: { "@type": "Rating", ratingValue: "4.8" }
          }
        ]
      }
    },
    {
      id: "axiolot-plans",
      data: {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "@id": "https://axiolot.com.ng/#plan",
        name: "Axiolot Hub Plans",
        url: "https://axiolot.com.ng/#plan",
        itemListElement: [
          {
            "@type": "Product",
            position: 1,
            name: "Basic Plan",
            "description": "For small schools just getting started. Includes student result management, attendance tracking, and basic analytics.", "brand": { "@type": "Organization", "name": "Axiolot Hub" },
            image: "https://static.axiolot.com.ng/image/header.png",
            offers: { "@type": "Offer", price: "100000", priceCurrency: "NGN", hasMerchantReturnPolicy: "true", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://axiolot.com.ng/#plan", "category": "Free Trial", "eligibleRegion": { "@type": "Place", "name": "Nigeria" }, image: "https://static.axiolot.com.ng/image/header.png", description: "This plan is suitable for small schools." }
          },
          {
            "@type": "Product",
            position: 2,
            name: "Proficient Plan",
            image: "https://static.axiolot.com.ng/image/header.png",
            description: "For growing schools. Adds staff payroll, e-payments, custom school domains, and parent communication tools.",
            brand: { "@type": "Organization", "name": "Axiolot Hub" },
            offers: { "@type": "Offer", price: "150000", priceCurrency: "NGN", hasMerchantReturnPolicy: "true", availability: "https://schema.org/InStock", image: "https://static.axiolot.com.ng/image/header.png", description: "This plan is suitable for fast growing schools.", "url": "https://axiolot.com.ng/#plan", "priceValidUntil": "2026-12-31", "category": "Subscription", "eligibleRegion": { "@type": "Place", "name": "Nigeria" } }
          },
          {
            "@type": "Product",
            position: 3,
            name: "Premier Plan",
            image: "https://static.axiolot.com.ng/image/header.png",
            description: "For advanced institutions needing full automation. Includes analytics dashboard, data backup, branded portal, and dedicated support.",
            brand: { "@type": "Organization", "name": "Axiolot Hub" },
            offers: { "@type": "Offer", price: "300000", priceCurrency: "NGN", hasMerchantReturnPolicy: "true", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://axiolot.com.ng/#plan", "category": "Subscription", "eligibleRegion": { "@type": "Place", "name": "Nigeria" }, image: "https://static.axiolot.com.ng/image/header.png", description: "This plan is suitable for large schools." }
          }
        ]
      }
    }
  ];

  return (
    <html lang="en" className={`font-satoshi`}>
      <head>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.axiolot.com.ng/" />
        <meta property="og:site_name" content="Axiolot Hub" />
        <meta property="og:title" content="Axiolot Hub - Your Trusted Partner In Technology Solutions For Schools" />
        <meta property="og:description" content="Manage all aspects of your school with ease. Our app includes an Academics Portal for accessing resources, an ePayment Portal for online transactions, an Analytics Portal for data-driven decisions, Site Management tools for website control, and a Staff Payment System for efficient payroll management. Streamline your school operations today!" />
        <meta property="og:image" content="https://static.axiolot.com.ng/image/header.png" />
        <meta property="og:author" content="Axiolot Hub" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:creator" content="@axiolothub" />
        <meta property="twitter:url" content="https://www.axiolot.com.ng/" />
        <meta property="twitter:title" content="Axiolot Hub - Your Trusted Partner In Technology Solutions For Schools" />
        <meta property="twitter:description" content="Manage all aspects of your school with ease. Our app includes an Academics Portal for accessing resources, an ePayment Portal for online transactions, an Analytics Portal for data-driven decisions, Site Management tools for website control, and a Staff Payment System for efficient payroll management. Streamline your school operations today!" />
        <meta property="twitter:image" content="https://static.axiolot.com.ng/image/header.png" />
        <meta property="twitter:author" content="@axiolothub" />

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
        <meta name="keywords" content="Axiolot, Axiolot Hub, School information management, School data analytics, Report card generation, Parent portal, Exam results management, Attendence tracking, Grade management, Academic data organization, Result tracking system, Course registration, school management system, education portal, student analytics, result system, fee payment portal" />
        <meta httpEquiv="XUACompatible" content="ie=edge" />

        <meta name="ai-plugin" content="https://axiolot.com.ng/.well/known/ai-plugin.json" />
        <link rel="ai:manifest" href="https://axiolot.com.ng/.well-known/ai.json" />
        <meta name="ai:domain" content="axiolot.com.ng" />
        <meta name="ai:description" content="Axiolot Hub — School Management AI Integration and Automation System" />
        <meta name="ai:version" content="1.0.0" />
      
        {schemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className="font-satoshi">
        <Schema />
        <ClientLogRocket />
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
        <Script data-cf-beacon='{"token": "1ef3f07ada664a4283b2e27084949346"}' strategy="afterInteractive" src="https://static.cloudflareinsights.com/beacon.min.js" id="cloudflare.analytics" >
        </Script>
      </body>
    </html>
  )
}