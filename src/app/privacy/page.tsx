import Link from "next/link";

export const metadata = {
    title: 'Privacy Policy | Axiolot Hub',
}

export default function Privacy() {
    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-2xl md:max-w-4xl lg:max-w-6xl sm:mx-auto">
                <div data-wow-delay="0.2s" className="absolute wow slideInUp inset-0 bg-gradient-to-r from-royal-lilac to-rasin-black shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div data-wow-delay="0.6s" className="relative wow bounceInUp px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md md:max-w-xl lg:max-w-2xl mx-auto">
                        <h1 className="text-2xl font-bold text-gray-900">Privacy Policy</h1>
                        <p className="mt-4 text-gray-600">
                            At Axiolot Hub, we are committed to protecting the privacy and security of our users, including school administrators, teachers, students, and parents. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you use our school management software platform, including our website, mobile applications, and related services (collectively, the Services). By using our Services, you agree to the practices described in this policy.
                        </p>

                        <h2 className="mt-6 text-lg font-semibold text-gray-900">1. Information We Collect</h2>
                        <p className="mt-2 text-gray-600">
                            We collect information to provide, maintain, and improve our Services, which are designed to streamline educational institution management. The types of information we collect include:
                        </p>
                        <ul className="list-disc ml-5 mt-2 text-gray-600">
                            <li><strong>Personal Identification Information:</strong> Name, email address, phone number, postal address, and other details provided during account creation, payment processes, or communication with our support team.</li>
                            <li><strong>Student and Staff Data:</strong> Information such as student enrollment details, academic records, attendance, and staff payment details, as required to manage school operations.</li>
                            <li><strong>Usage Data and Cookies:</strong> Information about how you interact with our Services, including IP addresses, browser type, device information, pages visited, and time spent on our platform. We use cookies and similar technologies to enhance user experience and analyze usage patterns.</li>
                            <li><strong>Information from Third-Party Services:</strong> Data from integrated third-party services, such as payment processors or analytics providers, to facilitate transactions and performance analysis.</li>
                        </ul>
                        <p className="mt-2 text-gray-600">
                            We collect this information when you provide it directly (e.g., during registration or form submissions), automatically through your use of our Services, or from third parties with your consent.
                        </p>

                        <h2 className="mt-6 text-lg font-semibold text-gray-900">2. How We Use Your Information</h2>
                        <p className="mt-2 text-gray-600">
                            We use the information we collect to operate, maintain, and enhance our Services for educational institutions. Specific purposes include:
                        </p>
                        <ul className="list-disc ml-5 mt-2 text-gray-600">
                            <li>Providing and maintaining our Services, including the Academics Portal, e-Payment System, Staff Pay Manager, and Analytics Gateway.</li>
                            <li>Notifying you about updates, changes, or issues related to our Services.</li>
                            <li>Enabling interactive features, such as tracking student progress, managing class schedules, and facilitating communication between administrators, teachers, students, and parents.</li>
                            <li>Providing customer support and responding to inquiries or requests.</li>
                            <li>Analyzing usage data to improve our platform’s functionality, user experience, and performance.</li>
                            <li>Monitoring and ensuring the security of our Services, including detecting and preventing technical issues or fraudulent activities.</li>
                            <li>Complying with legal obligations, such as maintaining accurate financial records for payment transactions.</li>
                        </ul>
                        <p className="mt-2 text-gray-600">
                            For example, the Analytics Gateway uses student and staff data to generate performance reports, helping administrators make data-driven decisions.
                        </p>

                        <h2 className="mt-6 text-lg font-semibold text-gray-900">3. Data Security</h2>
                        <p className="mt-2 text-gray-600">
                            We implement industry-standard security measures, including encryption, access controls, and secure servers, to protect your personal information. However, no method of transmission over the Internet or electronic storage is completely secure, and we cannot guarantee absolute security. We encourage users to protect their account credentials and report any suspicious activity to us immediately.
                        </p>
                        <p className="mt-2 text-gray-600">
                            Axiolot Hub regularly updates its security protocols to address emerging threats and ensure the safety of sensitive data, such as student records and payment information.
                        </p>

                        <h2 className="mt-6 text-lg font-semibold text-gray-900">4. Sharing Your Information</h2>
                        <p className="mt-2 text-gray-600">
                            We may share your information with trusted third parties who assist in delivering our Services, such as:
                        </p>
                        <ul className="list-disc ml-5 mt-2 text-gray-600">
                            <li><strong>Service Providers:</strong> Third-party vendors who process payments, provide analytics, or offer technical support, with strict contractual obligations to protect your data.</li>
                            <li><strong>Educational Institutions:</strong> Schools or authorized personnel within your institution may access relevant data (e.g., student records or staff payment details) to perform administrative tasks.</li>
                            <li><strong>Legal Compliance:</strong> We may disclose information to comply with applicable laws, regulations, or legal processes, such as responding to a court order or government request.</li>
                        </ul>
                        <p className="mt-2 text-gray-600">
                            We do not sell or rent your personal information to third parties for marketing purposes. Any sharing is limited to what is necessary to provide our Services or meet legal requirements.
                        </p>

                        <h2 className="mt-6 text-lg font-semibold text-gray-900">5. Your Data Protection Rights</h2>
                        <p className="mt-2 text-gray-600">
                            Depending on your location, you may have specific rights regarding your personal data under applicable data protection laws (e.g., GDPR, Nigeria Data Protection Regulation). These rights include:
                        </p>
                        <ul className="list-disc ml-5 mt-2 text-gray-600">
                            <li><strong>Right to Access:</strong> Request copies of your personal data held by us.</li>
                            <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete information.</li>
                            <li><strong>Right to Erasure:</strong> Request deletion of your personal data, subject to legal or contractual obligations.</li>
                            <li><strong>Right to Restrict Processing:</strong> Request that we limit the processing of your data under certain conditions.</li>
                            <li><strong>Right to Data Portability:</strong> Request a copy of your data in a structured, commonly used, and machine-readable format.</li>
                            <li><strong>Right to Object:</strong> Object to the processing of your data for specific purposes, such as marketing.</li>
                            <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for data processing where applicable, without affecting the lawfulness of prior processing.</li>
                        </ul>
                        <p className="mt-2 text-gray-600">
                            To exercise these rights, please contact us using the details below. We will respond to your request within the timeframes required by applicable law (typically 30 days).
                        </p>

                        <h2 className="mt-6 text-lg font-semibold text-gray-900">6. Cookies and Tracking Technologies</h2>
                        <p className="mt-2 text-gray-600">
                            We use cookies and similar technologies to enhance your experience, analyze usage, and deliver personalized content. Cookies are small data files stored on your device. You can manage cookie preferences through your browser settings, but disabling cookies may affect the functionality of our Services.
                        </p>
                        <p className="mt-2 text-gray-600">
                            Necessary cookies are essential for the operation of our platform, while non-necessary cookies (e.g., for analytics or advertising) require your consent. For more details, please review our Cookie Policy on our website.
                        </p>

                        <h2 className="mt-6 text-lg font-semibold text-gray-900">7. Data Retention</h2>
                        <p className="mt-2 text-gray-600">
                            We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy or as required by law. For example, student records may be retained for the duration of their enrollment, and financial data may be kept to comply with tax regulations. When data is no longer needed, we securely delete or anonymize it.
                        </p>

                        <h2 className="mt-6 text-lg font-semibold text-gray-900">8. International Data Transfers</h2>
                        <p className="mt-2 text-gray-600">
                            As Axiolot Hub serves educational institutions globally, your data may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws, using mechanisms like standard contractual clauses to safeguard your information.
                        </p>

                        <h2 className="mt-6 text-lg font-semibold text-gray-900">9. Children’s Privacy</h2>
                        <p className="mt-2 text-gray-600">
                            We recognize the importance of protecting children`s privacy and comply with applicable laws, including the Children`s Online Privacy Protection Act. Our Services are designed for use by schools, which may involve processing data of students under 13 (or the applicable age in your jurisdiction). We collect and process such data only with the consent of a parent or guardian or as authorized by the educational institution, in compliance with applicable law. Educational institutions are responsible for obtaining necessary parental consents for the collection and use of student data through our Services.
                        </p>

                        <h2 className="mt-6 text-lg font-semibold text-gray-900">10. Changes to This Privacy Policy</h2>
                        <p className="mt-2 text-gray-600">
                            We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of significant changes via email or through our platform. The updated policy will be effective upon posting unless otherwise stated.
                        </p>

                        <h2 className="mt-6 text-lg font-semibold text-gray-900">11. Contact Us</h2>
                        <p className="mt-2 text-gray-600">
                            If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
                        </p>
                        <ul className="list-disc ml-5 mt-2 text-gray-600">
                            <li><strong>Email:</strong> support@axiolot.com.ng</li>
                            <li><strong>Website:</strong> <Link href="/contact" className="text-blue-600 hover:underline">Contact Us</Link></li>
                            <li><strong>Phone:</strong> +234 70 7318 4665</li>
                            <li><strong>WhatsApp:</strong> +234 70 8131 7077</li>
                        </ul>
                        <p className="mt-2 text-gray-600">
                            We are committed to addressing your inquiries promptly and ensuring your trust in our Services.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}