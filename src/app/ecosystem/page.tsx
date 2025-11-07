import Link from "next/link"

export const metadata = {
    title: 'The Axiolot Hub Ecosystem | Axiolot Hub',
}

export default function Ecosystem() {
    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-2xl md:max-w-4xl lg:max-w-6xl sm:mx-auto">
                <div data-wow-delay="0.2s" className="absolute wow slideInUp inset-0 bg-gradient-to-r from-royal-lilac to-rasin-black shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div data-wow-delay="0.6s" className="relative wow bounceInUp px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md md:max-w-xl lg:max-w-2xl mx-auto">
                        <h1 className="text-2xl font-bold text-gray-900">🌐 The Axiolot Hub Ecosystem</h1>
                        <p className="mt-4 text-gray-600">
                            Welcome to the <strong>Axiolot Hub Ecosystem</strong> — a unified platform designed to simplify and modernize how schools operate, manage results, handle payments, and analyze student performance.
                        </p>
                        <p className="mt-4 text-gray-600">
                            From classrooms to administration, Axiolot Hub provides every digital tool your school needs — all connected through a single, intelligent system.
                        </p>

                        <h2 className="mt-6 text-lg font-semibold text-gray-900">🏫 What Is Axiolot Hub?</h2>
                        <p className="mt-2 text-gray-600">
                            <strong>Axiolot Hub</strong> is an <strong>education management ecosystem</strong> built to help schools automate results, analyze student data, publish updates, and process payments seamlessly. It combines technology, analytics, and administration tools to empower schools of all sizes to go fully digital.
                        </p>
                        <p className="mt-2 text-gray-600">
                            Our mission is simple — to give schools <strong>clarity, automation, and insight</strong> through a connected ecosystem that covers every core academic and administrative function.
                        </p>

                        <h2 className="mt-6 text-lg font-semibold text-gray-900">⚙️ How the Ecosystem Works</h2>
                        <p className="mt-2 text-gray-600">
                            Each part of Axiolot Hub is designed for a specific need within the school system — from grading to payments — yet they all connect effortlessly under one brand and one account.
                        </p>
                        <p className="mt-2 text-gray-600">
                            Here's a breakdown of the ecosystem:
                        </p>

                        <h3 className="mt-6 text-base font-semibold text-gray-900">🎓 1. Portal – Student & Result Management</h3>
                        <p className="mt-2 text-gray-600">
                            <strong>Domain:</strong> <a href="https://portal.axiolot.com.ng" className="text-blue-600 hover:underline">portal.axiolot.com.ng</a>
                        </p>
                        <p className="mt-2 text-gray-600">
                            The <strong>Axiolot Portal</strong> is the heart of the ecosystem — where administrators and teachers manage everything academic.
                        </p>
                        <p className="mt-2 text-gray-600">
                            It handles:
                        </p>
                        <ul className="list-disc ml-5 mt-2 text-gray-600">
                            <li>Student registration and record keeping</li>
                            <li>Automated result computation</li>
                            <li>Performance tracking and analytics</li>
                            <li>Secure data access for students and parents</li>
                        </ul>
                        <p className="mt-2 text-gray-600">
                            ✅ <em>Purpose:</em> Simplify the grading process, reduce human errors, and give schools real-time access to accurate performance reports.
                        </p>

                        <h3 className="mt-6 text-base font-semibold text-gray-900">📰 2. Sites – School Content & Event Management</h3>
                        <p className="mt-2 text-gray-600">
                            <strong>Domain:</strong> <a href="https://sites.axiolot.com.ng" className="text-blue-600 hover:underline">sites.axiolot.com.ng</a>
                        </p>
                        <p className="mt-2 text-gray-600">
                            The <strong>Axiolot Sites</strong> platform lets schools build, update, and maintain their digital presence without any technical setup.
                        </p>
                        <p className="mt-2 text-gray-600">
                            It helps schools:
                        </p>
                        <ul className="list-disc ml-5 mt-2 text-gray-600">
                            <li>Publish announcements and articles</li>
                            <li>Manage event dates and calendars</li>
                            <li>Upload images and media</li>
                            <li>Create custom pages for news and updates</li>
                        </ul>
                        <p className="mt-2 text-gray-600">
                            ✅ <em>Purpose:</em> Help schools engage with parents, students, and communities through rich, accessible content.
                        </p>

                        <h3 className="mt-6 text-base font-semibold text-gray-900">📊 3. Analytics – Performance & Traffic Insights</h3>
                        <p className="mt-2 text-gray-600">
                            <strong>Domain:</strong> <a href="https://analytics.axiolot.com.ng" className="text-blue-600 hover:underline">analytics.axiolot.com.ng</a>
                        </p>
                        <p className="mt-2 text-gray-600">
                            <strong>Axiolot Analytics</strong> gives administrators visibility into both <strong>academic trends</strong> and <strong>platform usage</strong>.
                        </p>
                        <p className="mt-2 text-gray-600">
                            It provides:
                        </p>
                        <ul className="list-disc ml-5 mt-2 text-gray-600">
                            <li>Student performance dashboards</li>
                            <li>Trend analysis per subject or class</li>
                            <li>Site visit and traffic analytics</li>
                            <li>Visual insights for better school planning</li>
                        </ul>
                        <p className="mt-2 text-gray-600">
                            ✅ <em>Purpose:</em> Transform raw school data into actionable intelligence.
                        </p>

                        <h3 className="mt-6 text-base font-semibold text-gray-900">💳 4. Pay – School Fees & Payroll System</h3>
                        <p className="mt-2 text-gray-600">
                            <strong>Domain:</strong> <a href="https://e-pay.axiolot.com.ng" className="text-blue-600 hover:underline">pay.axiolot.com.ng</a>
                        </p>
                        <p className="mt-2 text-gray-600">
                            <strong>Axiolot Pay</strong> is the secure financial module of the ecosystem. It makes handling money within schools fast, traceable, and stress-free.
                        </p>
                        <p className="mt-2 text-gray-600">
                            It manages:
                        </p>
                        <ul className="list-disc ml-5 mt-2 text-gray-600">
                            <li>Student fee collection and verification</li>
                            <li>Staff salary processing and tracking</li>
                            <li>Payment records and receipts</li>
                            <li>Custom pricing setup by administrators</li>
                        </ul>
                        <p className="mt-2 text-gray-600">
                            ✅ <em>Purpose:</em> Ensure transparency, security, and efficiency in school financial operations.
                        </p>

                        <h3 className="mt-6 text-base font-semibold text-gray-900">🗂️ 5. CDN – Secure File & Media Storage</h3>
                        <p className="mt-2 text-gray-600">
                            <strong>Domain:</strong> <a href="https://static.axiolot.com.ng" className="text-blue-600 hover:underline">cdn.axiolot.com.ng</a>
                        </p>
                        <p className="mt-2 text-gray-600">
                            The <strong>Axiolot CDN</strong> powers all file storage and delivery across the ecosystem.
                        </p>
                        <p className="mt-2 text-gray-600">
                            It stores:
                        </p>
                        <ul className="list-disc ml-5 mt-2 text-gray-600">
                            <li>Student images</li>
                            <li>Generated report files</li>
                            <li>PDFs, results, and other school documents</li>
                        </ul>
                        <p className="mt-2 text-gray-600">
                            ✅ <em>Purpose:</em> Provide fast, reliable access to school media and records anywhere, anytime.
                        </p>

                        <h2 className="mt-6 text-lg font-semibold text-gray-900">🧠 Why Choose Axiolot Hub</h2>
                        <ul className="list-disc ml-5 mt-2 text-gray-600">
                            <li>✅ <strong>Unified Experience:</strong> Every subdomain connects into one seamless ecosystem.</li>
                            <li>🔒 <strong>Secure Data Handling:</strong> Student and payment data are encrypted and protected.</li>
                            <li>📈 <strong>Analytics-Driven Decisions:</strong> From grades to finances, everything is measurable.</li>
                            <li>⚡ <strong>Modern Interface:</strong> Built for speed, clarity, and usability.</li>
                            <li>🌍 <strong>Scalable for Any Institution:</strong> Works for primary, secondary, or tertiary schools.</li>
                        </ul>

                        <h2 className="mt-6 text-lg font-semibold text-gray-900">🔗 Integration Across All Systems</h2>
                        <p className="mt-2 text-gray-600">
                            Each module communicates through secure APIs and shared authentication, ensuring:
                        </p>
                        <ul className="list-disc ml-5 mt-2 text-gray-600">
                            <li>One account works across all subdomains</li>
                            <li>Consistent design and data flow</li>
                            <li>Cross-module features (e.g., grades → analytics → pay)</li>
                        </ul>
                        <p className="mt-2 text-gray-600">
                            This makes Axiolot Hub not just a tool, but a <strong>complete ecosystem</strong> built around data intelligence, automation, and school success.
                        </p>

                        <h2 className="mt-6 text-lg font-semibold text-gray-900">🏁 Conclusion</h2>
                        <p className="mt-2 text-gray-600">
                            <strong>Axiolot Hub</strong> is redefining education management across Africa by combining administration, analytics, payments, and communication in one ecosystem.
                        </p>
                        <p className="mt-2 text-gray-600">
                            Whether you're a school owner, teacher, or IT administrator, Axiolot Hub gives you everything you need to <strong>manage smarter and grow faster</strong>.
                        </p>

                        <h2 className="mt-6 text-lg font-semibold text-gray-900">📍 Learn More</h2>
                        <ul className="list-disc ml-5 mt-2 text-gray-600">
                            <li>🌐 <Link href="/" className="text-blue-600 hover:underline">Visit Axiolot Hub Main Site</Link></li>
                            <li>📘 <Link href="https://portal.axiolot.com.ng" target="_blank" className="text-blue-600 hover:underline">Explore the Portal</Link></li>
                            <li>💰 <Link href="https://e-pay.axiolot.com.ng" target="_blank" className="text-blue-600 hover:underline">Use Axiolot Pay</Link></li>
                            <li>📊 <Link href="https://analytics.axiolot.com.ng" target="_blank" className="text-blue-600 hover:underline">Check Analytics</Link></li>
                            <li>📰 <Link href="https://sites.axiolot.com.ng" target="_blank" className="text-blue-600 hover:underline">Publish Content</Link></li>
                            <li>📰 <Link href="https://demo.axiolot.com.ng" target="_blank" className="text-blue-600 hover:underline">Demo Student Portal</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}