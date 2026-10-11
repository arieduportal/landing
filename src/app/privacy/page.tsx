import Link from "next/link";
import {
  LuArrowUpRight,
  LuChevronDown,
  LuMail,
  LuShieldCheck,
} from "react-icons/lu";
import {
  PageContainer,
  PageHeading,
  PageNavigation,
} from "../components/pagePrimitives";

export const metadata = {
  title: "Privacy Policy | Axiolot Hub",
  description:
    "Read Axiolot Hub's privacy policy, including information collection, data use, security, sharing, retention, cookies, and contact details.",
};

const contents = [
  {
    id: "information-we-collect",
    title: "Information We Collect",
  },
  {
    id: "how-we-use-your-information",
    title: "How We Use Your Information",
  },
  {
    id: "data-security",
    title: "Data Security",
  },
  {
    id: "sharing-your-information",
    title: "Sharing Your Information",
  },
  {
    id: "your-data-protection-rights",
    title: "Your Data Protection Rights",
  },
  {
    id: "cookies-and-tracking-technologies",
    title: "Cookies and Tracking Technologies",
  },
  {
    id: "data-retention",
    title: "Data Retention",
  },
  {
    id: "international-data-transfers",
    title: "International Data Transfers",
  },
  {
    id: "children-s-privacy",
    title: "Children’s Privacy",
  },
  {
    id: "changes-to-this-privacy-policy",
    title: "Changes to This Privacy Policy",
  },
  {
    id: "contact-us",
    title: "Contact Us",
  },
];

function PolicyContents() {
  return (
    <nav aria-label="Privacy policy sections" className="space-y-1">
      {contents.map((item, index) => (
        <a
          key={item.id}
          href={"#" + item.id}
          className="flex items-start gap-3 rounded-2xl px-3 py-2.5 text-xs leading-5 text-hub-text transition-colors hover:bg-hub-tint hover:text-hub-accent-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-royal-lilac focus-visible:outline-offset-2 motion-reduce:transition-none"
        >
          <span className="w-4 shrink-0 text-[10px] text-hub-muted">
            {String(index + 1).padStart(2, "0")}
          </span>
          {item.title}
        </a>
      ))}
    </nav>
  );
}

export default function Privacy() {
  return (
    <div className="bg-white font-satoshi text-rasin-black antialiased">
      <PageNavigation current="privacy" />
      <section
        className="border-b border-hub-border bg-[#fafafd] py-12 md:py-16"
        aria-labelledby="page-heading"
      >
        <PageContainer className="flex flex-col justify-between gap-8 md:flex-row md:items-end md:gap-16">
          <PageHeading
            eyebrow="TRUST & TRANSPARENCY"
            title={
              <>
                Privacy policy<span className="text-royal-lilac">.</span>
              </>
            }
            description="How Axiolot Hub collects, uses, and safeguards information across our services."
          />
          <div className="flex max-w-sm items-start gap-4 border-l-2 border-royal-lilac pl-5">
            <LuShieldCheck
              className="mt-1 h-6 w-6 shrink-0 text-hub-accent-strong"
              aria-hidden="true"
            />
            <div>
              <p className="text-sm font-semibold">Have a privacy question?</p>
              <a
                href="mailto:support@axiolot.com.ng"
                className="mt-2 inline-flex items-center gap-2 break-all text-xs text-hub-accent-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-royal-lilac focus-visible:outline-offset-4"
              >
                support@axiolot.com.ng{" "}
                <LuArrowUpRight
                  className="h-3.5 w-3.5 shrink-0"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </PageContainer>
      </section>
      <PageContainer className="py-10 md:py-16">
        <details className="group mb-8 rounded-2xl border border-hub-border bg-hub-surface lg:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-5 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-royal-lilac [&::-webkit-details-marker]:hidden">
            Jump to a section{" "}
            <LuChevronDown
              className="h-4 w-4 transition-transform group-open:rotate-180 motion-reduce:transition-none"
              aria-hidden="true"
            />
          </summary>
          <div className="border-t border-hub-border p-3">
            <PolicyContents />
          </div>
        </details>
        <div className="mx-auto grid max-w-[1120px] gap-12 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-20">
          <aside className="hidden self-start lg:sticky lg:top-28 lg:block">
            <p className="mb-4 px-3 text-[10px] font-bold uppercase tracking-[1.8px] text-hub-muted">
              ON THIS PAGE
            </p>
            <PolicyContents />
            <div className="mt-6 border-t border-hub-border px-3 pt-5">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-semibold text-hub-accent-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-royal-lilac focus-visible:outline-offset-4"
              >
                <LuMail className="h-4 w-4" aria-hidden="true" /> Contact our
                team
              </Link>
            </div>
          </aside>
          <article
            className="min-w-0 max-w-[760px]"
            aria-label="Axiolot Hub privacy policy"
          >
            <div className="mb-8">
              <p className="mb-5 text-[15px] leading-8 text-hub-text">
                At Axiolot Hub, we are committed to protecting the privacy and
                security of our users, including school administrators,
                teachers, students, and parents. This Privacy Policy outlines
                how we collect, use, disclose, and safeguard your personal
                information when you use our school management software
                platform, including our website, mobile applications, and
                related services (collectively, the Services). By using our
                Services, you agree to the practices described in this policy.
              </p>
            </div>
            <div className="space-y-8">
              <section
                id="information-we-collect"
                aria-labelledby="information-we-collect-heading"
                className="scroll-mt-28 border-t border-hub-border pt-8"
              >
                <h2
                  id="information-we-collect-heading"
                  className="mb-5 text-xl font-bold leading-snug tracking-[-0.4px] text-rasin-black sm:text-2xl"
                >
                  1. Information We Collect
                </h2>
                <p className="mb-5 text-[15px] leading-8 text-hub-text">
                  We collect information to provide, maintain, and improve our
                  Services, which are designed to streamline educational
                  institution management. The types of information we collect
                  include:
                </p>
                <ul className="mb-6 list-disc space-y-3 pl-5 text-[15px] leading-8 text-hub-text marker:text-hub-accent-strong">
                  <li className="pl-1">
                    <strong className="font-semibold text-rasin-black">
                      Personal Identification Information:
                    </strong>{" "}
                    Name, email address, phone number, postal address, and other
                    details provided during account creation, payment processes,
                    or communication with our support team.
                  </li>
                  <li className="pl-1">
                    <strong className="font-semibold text-rasin-black">
                      Student and Staff Data:
                    </strong>{" "}
                    Information such as student enrollment details, academic
                    records, attendance, and staff payment details, as required
                    to manage school operations.
                  </li>
                  <li className="pl-1">
                    <strong className="font-semibold text-rasin-black">
                      Usage Data and Cookies:
                    </strong>{" "}
                    Information about how you interact with our Services,
                    including IP addresses, browser type, device information,
                    pages visited, and time spent on our platform. We use
                    cookies and similar technologies to enhance user experience
                    and analyze usage patterns.
                  </li>
                  <li className="pl-1">
                    <strong className="font-semibold text-rasin-black">
                      Information from Third-Party Services:
                    </strong>{" "}
                    Data from integrated third-party services, such as payment
                    processors or analytics providers, to facilitate
                    transactions and performance analysis.
                  </li>
                </ul>
                <p className="mb-5 text-[15px] leading-8 text-hub-text">
                  We collect this information when you provide it directly
                  (e.g., during registration or form submissions), automatically
                  through your use of our Services, or from third parties with
                  your consent.
                </p>
              </section>
              <section
                id="how-we-use-your-information"
                aria-labelledby="how-we-use-your-information-heading"
                className="scroll-mt-28 border-t border-hub-border pt-8"
              >
                <h2
                  id="how-we-use-your-information-heading"
                  className="mb-5 text-xl font-bold leading-snug tracking-[-0.4px] text-rasin-black sm:text-2xl"
                >
                  2. How We Use Your Information
                </h2>
                <p className="mb-5 text-[15px] leading-8 text-hub-text">
                  We use the information we collect to operate, maintain, and
                  enhance our Services for educational institutions. Specific
                  purposes include:
                </p>
                <ul className="mb-6 list-disc space-y-3 pl-5 text-[15px] leading-8 text-hub-text marker:text-hub-accent-strong">
                  <li className="pl-1">
                    Providing and maintaining our Services, including the
                    Academics Portal, e-Payment System, Staff Pay Manager, and
                    Analytics Gateway.
                  </li>
                  <li className="pl-1">
                    Notifying you about updates, changes, or issues related to
                    our Services.
                  </li>
                  <li className="pl-1">
                    Enabling interactive features, such as tracking student
                    progress, managing class schedules, and facilitating
                    communication between administrators, teachers, students,
                    and parents.
                  </li>
                  <li className="pl-1">
                    Providing customer support and responding to inquiries or
                    requests.
                  </li>
                  <li className="pl-1">
                    Analyzing usage data to improve our platform’s
                    functionality, user experience, and performance.
                  </li>
                  <li className="pl-1">
                    Monitoring and ensuring the security of our Services,
                    including detecting and preventing technical issues or
                    fraudulent activities.
                  </li>
                  <li className="pl-1">
                    Complying with legal obligations, such as maintaining
                    accurate financial records for payment transactions.
                  </li>
                </ul>
                <p className="mb-5 text-[15px] leading-8 text-hub-text">
                  For example, the Analytics Gateway uses student and staff data
                  to generate performance reports, helping administrators make
                  data-driven decisions.
                </p>
              </section>
              <section
                id="data-security"
                aria-labelledby="data-security-heading"
                className="scroll-mt-28 border-t border-hub-border pt-8"
              >
                <h2
                  id="data-security-heading"
                  className="mb-5 text-xl font-bold leading-snug tracking-[-0.4px] text-rasin-black sm:text-2xl"
                >
                  3. Data Security
                </h2>
                <p className="mb-5 text-[15px] leading-8 text-hub-text">
                  We implement industry-standard security measures, including
                  encryption, access controls, and secure servers, to protect
                  your personal information. However, no method of transmission
                  over the Internet or electronic storage is completely secure,
                  and we cannot guarantee absolute security. We encourage users
                  to protect their account credentials and report any suspicious
                  activity to us immediately.
                </p>
                <p className="mb-5 text-[15px] leading-8 text-hub-text">
                  Axiolot Hub regularly updates its security protocols to
                  address emerging threats and ensure the safety of sensitive
                  data, such as student records and payment information.
                </p>
              </section>
              <section
                id="sharing-your-information"
                aria-labelledby="sharing-your-information-heading"
                className="scroll-mt-28 border-t border-hub-border pt-8"
              >
                <h2
                  id="sharing-your-information-heading"
                  className="mb-5 text-xl font-bold leading-snug tracking-[-0.4px] text-rasin-black sm:text-2xl"
                >
                  4. Sharing Your Information
                </h2>
                <p className="mb-5 text-[15px] leading-8 text-hub-text">
                  We may share your information with trusted third parties who
                  assist in delivering our Services, such as:
                </p>
                <ul className="mb-6 list-disc space-y-3 pl-5 text-[15px] leading-8 text-hub-text marker:text-hub-accent-strong">
                  <li className="pl-1">
                    <strong className="font-semibold text-rasin-black">
                      Service Providers:
                    </strong>{" "}
                    Third-party vendors who process payments, provide analytics,
                    or offer technical support, with strict contractual
                    obligations to protect your data.
                  </li>
                  <li className="pl-1">
                    <strong className="font-semibold text-rasin-black">
                      Educational Institutions:
                    </strong>{" "}
                    Schools or authorized personnel within your institution may
                    access relevant data (e.g., student records or staff payment
                    details) to perform administrative tasks.
                  </li>
                  <li className="pl-1">
                    <strong className="font-semibold text-rasin-black">
                      Legal Compliance:
                    </strong>{" "}
                    We may disclose information to comply with applicable laws,
                    regulations, or legal processes, such as responding to a
                    court order or government request.
                  </li>
                </ul>
                <p className="mb-5 text-[15px] leading-8 text-hub-text">
                  We do not sell or rent your personal information to third
                  parties for marketing purposes. Any sharing is limited to what
                  is necessary to provide our Services or meet legal
                  requirements.
                </p>
              </section>
              <section
                id="your-data-protection-rights"
                aria-labelledby="your-data-protection-rights-heading"
                className="scroll-mt-28 border-t border-hub-border pt-8"
              >
                <h2
                  id="your-data-protection-rights-heading"
                  className="mb-5 text-xl font-bold leading-snug tracking-[-0.4px] text-rasin-black sm:text-2xl"
                >
                  5. Your Data Protection Rights
                </h2>
                <p className="mb-5 text-[15px] leading-8 text-hub-text">
                  Depending on your location, you may have specific rights
                  regarding your personal data under applicable data protection
                  laws (e.g., GDPR, Nigeria Data Protection Regulation). These
                  rights include:
                </p>
                <ul className="mb-6 list-disc space-y-3 pl-5 text-[15px] leading-8 text-hub-text marker:text-hub-accent-strong">
                  <li className="pl-1">
                    <strong className="font-semibold text-rasin-black">
                      Right to Access:
                    </strong>{" "}
                    Request copies of your personal data held by us.
                  </li>
                  <li className="pl-1">
                    <strong className="font-semibold text-rasin-black">
                      Right to Rectification:
                    </strong>{" "}
                    Request correction of inaccurate or incomplete information.
                  </li>
                  <li className="pl-1">
                    <strong className="font-semibold text-rasin-black">
                      Right to Erasure:
                    </strong>{" "}
                    Request deletion of your personal data, subject to legal or
                    contractual obligations.
                  </li>
                  <li className="pl-1">
                    <strong className="font-semibold text-rasin-black">
                      Right to Restrict Processing:
                    </strong>{" "}
                    Request that we limit the processing of your data under
                    certain conditions.
                  </li>
                  <li className="pl-1">
                    <strong className="font-semibold text-rasin-black">
                      Right to Data Portability:
                    </strong>{" "}
                    Request a copy of your data in a structured, commonly used,
                    and machine-readable format.
                  </li>
                  <li className="pl-1">
                    <strong className="font-semibold text-rasin-black">
                      Right to Object:
                    </strong>{" "}
                    Object to the processing of your data for specific purposes,
                    such as marketing.
                  </li>
                  <li className="pl-1">
                    <strong className="font-semibold text-rasin-black">
                      Right to Withdraw Consent:
                    </strong>{" "}
                    Withdraw consent for data processing where applicable,
                    without affecting the lawfulness of prior processing.
                  </li>
                </ul>
                <p className="mb-5 text-[15px] leading-8 text-hub-text">
                  To exercise these rights, please contact us using the details
                  below. We will respond to your request within the timeframes
                  required by applicable law (typically 30 days).
                </p>
              </section>
              <section
                id="cookies-and-tracking-technologies"
                aria-labelledby="cookies-and-tracking-technologies-heading"
                className="scroll-mt-28 border-t border-hub-border pt-8"
              >
                <h2
                  id="cookies-and-tracking-technologies-heading"
                  className="mb-5 text-xl font-bold leading-snug tracking-[-0.4px] text-rasin-black sm:text-2xl"
                >
                  6. Cookies and Tracking Technologies
                </h2>
                <p className="mb-5 text-[15px] leading-8 text-hub-text">
                  We use cookies and similar technologies to enhance your
                  experience, analyze usage, and deliver personalized content.
                  Cookies are small data files stored on your device. You can
                  manage cookie preferences through your browser settings, but
                  disabling cookies may affect the functionality of our
                  Services.
                </p>
                <p className="mb-5 text-[15px] leading-8 text-hub-text">
                  Necessary cookies are essential for the operation of our
                  platform, while non-necessary cookies (e.g., for analytics or
                  advertising) require your consent. For more details, please
                  review our Cookie Policy on our website.
                </p>
              </section>
              <section
                id="data-retention"
                aria-labelledby="data-retention-heading"
                className="scroll-mt-28 border-t border-hub-border pt-8"
              >
                <h2
                  id="data-retention-heading"
                  className="mb-5 text-xl font-bold leading-snug tracking-[-0.4px] text-rasin-black sm:text-2xl"
                >
                  7. Data Retention
                </h2>
                <p className="mb-5 text-[15px] leading-8 text-hub-text">
                  We retain personal information only for as long as necessary
                  to fulfill the purposes outlined in this policy or as required
                  by law. For example, student records may be retained for the
                  duration of their enrollment, and financial data may be kept
                  to comply with tax regulations. When data is no longer needed,
                  we securely delete or anonymize it.
                </p>
              </section>
              <section
                id="international-data-transfers"
                aria-labelledby="international-data-transfers-heading"
                className="scroll-mt-28 border-t border-hub-border pt-8"
              >
                <h2
                  id="international-data-transfers-heading"
                  className="mb-5 text-xl font-bold leading-snug tracking-[-0.4px] text-rasin-black sm:text-2xl"
                >
                  8. International Data Transfers
                </h2>
                <p className="mb-5 text-[15px] leading-8 text-hub-text">
                  As Axiolot Hub serves educational institutions globally, your
                  data may be transferred to and processed in countries other
                  than your own. We ensure that such transfers comply with
                  applicable data protection laws, using mechanisms like
                  standard contractual clauses to safeguard your information.
                </p>
              </section>
              <section
                id="children-s-privacy"
                aria-labelledby="children-s-privacy-heading"
                className="scroll-mt-28 border-t border-hub-border pt-8"
              >
                <h2
                  id="children-s-privacy-heading"
                  className="mb-5 text-xl font-bold leading-snug tracking-[-0.4px] text-rasin-black sm:text-2xl"
                >
                  9. Children’s Privacy
                </h2>
                <p className="mb-5 text-[15px] leading-8 text-hub-text">
                  We recognize the importance of protecting children`s privacy
                  and comply with applicable laws, including the Children`s
                  Online Privacy Protection Act. Our Services are designed for
                  use by schools, which may involve processing data of students
                  under 13 (or the applicable age in your jurisdiction). We
                  collect and process such data only with the consent of a
                  parent or guardian or as authorized by the educational
                  institution, in compliance with applicable law. Educational
                  institutions are responsible for obtaining necessary parental
                  consents for the collection and use of student data through
                  our Services.
                </p>
              </section>
              <section
                id="changes-to-this-privacy-policy"
                aria-labelledby="changes-to-this-privacy-policy-heading"
                className="scroll-mt-28 border-t border-hub-border pt-8"
              >
                <h2
                  id="changes-to-this-privacy-policy-heading"
                  className="mb-5 text-xl font-bold leading-snug tracking-[-0.4px] text-rasin-black sm:text-2xl"
                >
                  10. Changes to This Privacy Policy
                </h2>
                <p className="mb-5 text-[15px] leading-8 text-hub-text">
                  We may update this Privacy Policy periodically to reflect
                  changes in our practices or legal requirements. We will notify
                  you of significant changes via email or through our platform.
                  The updated policy will be effective upon posting unless
                  otherwise stated.
                </p>
              </section>
              <section
                id="contact-us"
                aria-labelledby="contact-us-heading"
                className="scroll-mt-28 border-t border-hub-border pt-8"
              >
                <h2
                  id="contact-us-heading"
                  className="mb-5 text-xl font-bold leading-snug tracking-[-0.4px] text-rasin-black sm:text-2xl"
                >
                  11. Contact Us
                </h2>
                <p className="mb-5 text-[15px] leading-8 text-hub-text">
                  If you have questions, concerns, or requests regarding this
                  Privacy Policy or our data practices, please contact us at:
                </p>
                <ul className="mb-6 list-disc space-y-3 pl-5 text-[15px] leading-8 text-hub-text marker:text-hub-accent-strong">
                  <li className="pl-1">
                    <strong className="font-semibold text-rasin-black">
                      Email:
                    </strong>{" "}
                    support@axiolot.com.ng
                  </li>
                  <li className="pl-1">
                    <strong className="font-semibold text-rasin-black">
                      Website:
                    </strong>{" "}
                    <Link
                      href="/contact"
                      className="text-hub-accent-strong underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-royal-lilac focus-visible:outline-offset-4"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li className="pl-1">
                    <strong className="font-semibold text-rasin-black">
                      Phone:
                    </strong>{" "}
                    +234 70 7318 4665
                  </li>
                  <li className="pl-1">
                    <strong className="font-semibold text-rasin-black">
                      WhatsApp:
                    </strong>{" "}
                    +234 70 8131 7077
                  </li>
                </ul>
                <p className="mb-5 text-[15px] leading-8 text-hub-text">
                  We are committed to addressing your inquiries promptly and
                  ensuring your trust in our Services.
                </p>
              </section>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-hub-border bg-hub-surface p-5 text-xs">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-semibold text-hub-accent-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-royal-lilac focus-visible:outline-offset-4"
              >
                Contact us about this policy{" "}
                <LuArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href="#page-heading"
                className="rounded-2xl px-2 py-1 text-hub-muted hover:text-rasin-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-royal-lilac focus-visible:outline-offset-2"
              >
                Back to top
              </a>
            </div>
          </article>
        </div>
      </PageContainer>
    </div>
  );
}
