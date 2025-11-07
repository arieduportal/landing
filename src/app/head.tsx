// app/head.tsx
export default function Head() {
    const org = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://axiolot.com.ng/#organization",
        name: "Axiolot Hub",
        url: "https://axiolot.com.ng",
        logo: "https://static.axiolot.com.ng/image/icons/16.png",
        image: "https://static.axiolot.com.ng/image/header.png",
        sameAs: [
            "https://portal.axiolot.com.ng",
            "https://sites.axiolot.com.ng",
            "https://analytics.axiolot.com.ng",
            "https://e-pay.axiolot.com.ng",
            "https://demo.axiolot.com.ng",
            "https://x.com/axiolothub",
            "https://linkedin.com/company/axiolothub",
            "https://facebook.com/axiolothub"
        ],
        description:
            "Axiolot Hub helps schools in Nigeria digitize operations with modules for academics, payments, analytics, site management, and payroll. Transform your school with modern automation today.",
        founder: { "@type": "Person", name: "Arinze Justin", url: "https://axiolot.com.ng/#team" },
        foundingDate: "2022",
        address: {
            "@type": "PostalAddress",
            addressCountry: "NG",
            addressLocality: "Enugu",
            addressRegion: "South East",
            postalCode: "40012",
            streetAddress: "Block 4, Opp. St. Faith Schools, Ebony Paint Road, Enugu State."
        },
        contactPoint: {
            "@type": "ContactPoint",
            contactType: "Customer Support",
            email: "support@axiolot.com.ng",
            telephone: "+2347073184665",
            areaServed: "NG"
        },
        subOrganization: [
            { "@type": "Organization", name: "Axiolot Portal", url: "https://portal.axiolot.com.ng" },
            { "@type": "Organization", name: "Axiolot Sites", url: "https://sites.axiolot.com.ng" },
            { "@type": "Organization", name: "Axiolot Analytics", url: "https://analytics.axiolot.com.ng" },
            { "@type": "Organization", name: "Axiolot Pay", url: "https://e-pay.axiolot.com.ng" },
            { "@type": "Organization", name: "Axiolot Demo", url: "https://demo.axiolot.com.ng" },
            { "@type": "Organization", name: "Axiolot CDN", url: "https://static.axiolot.com.ng" }
        ],
        brand: "Axiolot Hub",
        knowsAbout: [
            "School Management Systems",
            "Education Technology",
            "Result Processing Software",
            "E-Payment Integration",
            "Analytics for Schools"
        ],
        author: { "@type": "Organization", "@id": "https://axiolot.com.ng/#organization" },
        offers: { "@type": "Offer", price: "0", priceCurrency: "NGN", category: "Free trial available", url: "https://axiolot.com.ng/#plan" },
        featureList: [
            "Academics Portal for student results",
            "E-Payment and staff payroll system",
            "Website control and hosting",
            "Analytics dashboard for insights",
            "Parent and teacher communication tools"
        ],
        keywords: [
            "school management software",
            "result portal",
            "e-payment platform",
            "education technology",
            "analytics dashboard for schools"
        ]
    };

    const faq = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            { "@type": "Question", name: "What is Axiolot Hub?", acceptedAnswer: { "@type": "Answer", text: "Axiolot Hub is Nigeria’s most comprehensive school management platform. It helps schools manage academics, results, payments, and staff operations in one digital system." } },
            { "@type": "Question", name: "Can Axiolot Hub be customized for any school?", acceptedAnswer: { "@type": "Answer", text: "Yes, Axiolot Hub is designed to be flexible and customizable. Schools can tailor modules such as result management, staff payroll, and analytics to fit their structure." } },
            { "@type": "Question", name: "Is Axiolot Hub suitable for primary and secondary schools?", acceptedAnswer: { "@type": "Answer", text: "Absolutely. Axiolot Hub serves both primary and secondary institutions, helping them transition from manual record keeping to full digital management." } },
            { "@type": "Question", name: "How secure is the Axiolot Hub platform?", acceptedAnswer: { "@type": "Answer", text: "Axiolot Hub uses encrypted connections, verified payments, and secure cloud storage to protect all student and staff data." } }
        ]
    };

    const plans = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "@id": "https://axiolot.com.ng/#plan",
        name: "Axiolot Hub Plans",
        url: "https://axiolot.com.ng/#plan",
        description: "Flexible pricing plans for schools using Axiolot Hub — choose between Basic, Proficient, and Premier plans depending on your school's needs.",
        itemListElement: [
            {
                "@type": "Product",
                position: 1,
                name: "Basic Plan",
                image: "https://static.axiolot.com.ng/image/header.png",
                description: "For small schools just getting started. Includes student result management, attendance tracking, and basic analytics.",
                brand: { "@type": "Organization", name: "Axiolot Hub" },
                offers: { "@type": "Offer", priceCurrency: "NGN", price: "100000", priceValidUntil: "2026-12-31", availability: "https://schema.org/InStock", url: "https://axiolot.com.ng/#plan", category: "Free Trial", eligibleRegion: { "@type": "Place", name: "Nigeria" } }
            },
            {
                "@type": "Product",
                position: 2,
                name: "Proficient Plan",
                image: "https://static.axiolot.com.ng/image/header.png",
                description: "For growing schools. Adds staff payroll, e-payments, custom school domains, and parent communication tools.",
                brand: { "@type": "Organization", name: "Axiolot Hub" },
                offers: { "@type": "Offer", priceCurrency: "NGN", price: "150000", priceValidUntil: "2026-12-31", availability: "https://schema.org/InStock", url: "https://axiolot.com.ng/#plan", category: "Subscription", eligibleRegion: { "@type": "Place", name: "Nigeria" } }
            },
            {
                "@type": "Product",
                position: 3,
                name: "Premier Plan",
                image: "https://static.axiolot.com.ng/image/header.png",
                description: "For advanced institutions needing full automation. Includes analytics dashboard, data backup, branded portal, and dedicated support.",
                brand: { "@type": "Organization", name: "Axiolot Hub" },
                offers: { "@type": "Offer", priceCurrency: "NGN", price: "300000", priceValidUntil: "2026-12-31", availability: "https://schema.org/InStock", url: "https://axiolot.com.ng/#plan", category: "Enterprise Subscription", eligibleRegion: { "@type": "Place", name: "Nigeria" } }
            }
        ]
    };

    const product = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Axiolot Hub",
        image: "https://static.axiolot.com.ng/image/header.png",
        description: "Axiolot Hub is Nigeria’s leading digital school management software — simplifying academics, finance, and analytics for schools of all sizes.",
        brand: { "@type": "Organization", name: "Axiolot Hub", url: "https://axiolot.com.ng" },
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "124", bestRating: "5", worstRating: "3" },
        review: [
            { "@type": "Review", author: { "@type": "Person", name: "Mrs. Okafor Chinyere" }, datePublished: "2024-06-12", reviewBody: "Axiolot Hub transformed how we manage results and fees. Parents and teachers love the simplicity!", name: "Reliable and Easy to Use", reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" } },
            { "@type": "Review", author: { "@type": "Person", name: "Mr. Adeyemi Olawale" }, datePublished: "2024-09-03", reviewBody: "Excellent tool for digitalizing our school operations. The analytics module is brilliant.", name: "Powerful Analytics", reviewRating: { "@type": "Rating", ratingValue: "4.8", bestRating: "5" } },
            { "@type": "Review", author: { "@type": "Person", name: "Principal Grace Udo" }, datePublished: "2024-10-18", reviewBody: "Setup was smooth and support was very responsive. Highly recommended for Nigerian schools.", name: "Fantastic Support Team", reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" } }
        ]
    };

    const blocks = [org, faq, plans, product];

    return (
        <>
            {blocks.map((b, i) => (
                <script
                    key={i}
                    type="application/ld+json"
                    // server-rendered stringified JSON-LD
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(b) }}
                />
            ))}
        </>
    );
}
