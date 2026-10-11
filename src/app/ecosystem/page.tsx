import Link from "next/link";
import {
  LuArrowRight,
  LuArrowUpRight,
  LuBarChart3,
  LuBookOpen,
  LuCheck,
  LuClock3,
  LuCloud,
  LuCreditCard,
  LuGlobe2,
  LuGraduationCap,
  LuLayers,
  LuUsers,
} from "react-icons/lu";
import BrandLogo from "../components/brandLogo";
import {
  PageContainer,
  PageCta,
  PageHeading,
  PageNavigation,
} from "../components/pagePrimitives";
import { demoUrl } from "../components/landingData";

export const metadata = {
  title: "The Axiolot Hub Ecosystem | Axiolot Hub",
  description:
    "Explore Axiolot's connected tools for academics, school websites, payments, attendance, analytics, and school media.",
};

const modules = [
  {
    id: "academics",
    name: "Academics",
    product: "Axiolot Portal",
    icon: LuBookOpen,
    description:
      "A home for student information and academic progress. Give administrators, teachers, students, and parents a clearer view of learning.",
    features: [
      "Student registration and records",
      "Result computation and report cards",
      "Parent and student access",
    ],
    href: "https://portal.axiolot.com.ng",
    domain: "portal.axiolot.com.ng",
  },
  {
    id: "sites",
    name: "School websites",
    product: "Axiolot Sites",
    icon: LuGlobe2,
    description:
      "Keep your school's digital presence up to date. Publish the news, events, and information your community needs to stay connected.",
    features: [
      "Announcements and school articles",
      "Events, calendars, and custom pages",
      "Images and media management",
    ],
    href: "https://sites.axiolot.com.ng",
    domain: "sites.axiolot.com.ng",
  },
  {
    id: "analytics",
    name: "Insights & analytics",
    product: "Axiolot Analytics",
    icon: LuBarChart3,
    description:
      "Bring academic trends and website activity into focus. Turn the records you already maintain into information that supports planning.",
    features: [
      "Student and class performance",
      "Subject trends and progress insights",
      "Website visits and traffic analysis",
    ],
    href: "https://analytics.axiolot.com.ng",
    domain: "analytics.axiolot.com.ng",
  },
  {
    id: "payments",
    name: "Fees & staff payments",
    product: "Axiolot Pay",
    icon: LuCreditCard,
    description:
      "Keep financial administration organised, from school fee collection to salary management, with traceable payment records.",
    features: [
      "Fee collection and verification",
      "Staff salary processing",
      "Payment records and receipts",
    ],
    href: "https://pay.axiolot.com.ng",
    domain: "pay.axiolot.com.ng",
  },
  {
    id: "attendance",
    name: "Attendance",
    product: "Attendance Manager",
    icon: LuClock3,
    description:
      "Record arrivals, departures, and staff attendance. Keep parents informed when their children clock in or out of school.",
    features: [
      "Student clock-in and clock-out",
      "Push and SMS parent notifications",
      "Staff arrival and classroom logs",
    ],
    href: "https://attendance.axiolot.com.ng",
    domain: "attendance.axiolot.com.ng",
  },
  {
    id: "media",
    name: "Files & media",
    product: "Axiolot CDN",
    icon: LuCloud,
    description:
      "The file delivery layer behind the ecosystem. Keep school images, generated reports, and documents available across your tools.",
    features: [
      "Student images and school media",
      "Generated reports and result files",
      "PDFs and school documents",
    ],
    href: process.env.NEXT_PUBLIC_CDN || "https://static.axiolot.com.ng",
    domain: "static.axiolot.com.ng",
  },
];

export default function Ecosystem() {
  return (
    <div className="bg-white font-satoshi text-rasin-black antialiased">
      <PageNavigation current="ecosystem" />
      <section className="border-b border-hub-border bg-[#fafafd] py-14 md:py-20">
        <PageContainer className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <PageHeading
              eyebrow="THE AXIOLOT ECOSYSTEM"
              title={
                <>
                  One school.
                  <br />
                  <span className="text-royal-lilac">
                    Everything connected.
                  </span>
                </>
              }
              description="Academics, people, payments, and your school's digital presence. Purpose-built tools that make more sense together."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#modules"
                className="inline-flex min-h-[48px] items-center gap-5 rounded-2xl bg-hub-accent-strong px-5 py-3 text-sm font-bold text-white hover:bg-hub-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-royal-lilac focus-visible:outline-offset-4"
              >
                Explore the tools{" "}
                <LuArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={demoUrl}
                className="inline-flex min-h-[48px] items-center gap-3 rounded-2xl border border-hub-border bg-white px-5 py-3 text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-royal-lilac focus-visible:outline-offset-4"
              >
                Try the demo{" "}
                <LuArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div
            className="rounded-2xl border border-hub-border bg-white p-5 shadow-hub sm:p-7"
            aria-label="Axiolot's six connected platform areas"
          >
            <div className="flex items-center justify-between border-b border-hub-border pb-5">
              <span className="text-[10px] font-bold uppercase tracking-[1.4px] text-hub-muted">
                YOUR SCHOOL WORKSPACE
              </span>
              <LuLayers
                className="h-5 w-5 text-hub-accent-strong"
                aria-hidden="true"
              />
            </div>
            <div className="flex flex-col items-center border-b border-hub-border py-8">
              <div className="flex items-center gap-1">
                <BrandLogo />
              </div>
              <p className="mt-3 text-xs text-hub-muted">
                A connected view of your school.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-x-5 gap-y-6 pt-7 sm:grid-cols-3">
              {modules.map((module) => (
                <div
                  key={module.id}
                  className="flex flex-col items-center gap-3 text-center"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-hub-tint text-hub-accent-strong">
                    <module.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-[11px] font-medium">{module.name}</span>
                </div>
              ))}
            </div>
            <p className="mt-7 border-t border-hub-border pt-4 text-center text-[10px] text-hub-muted">
              Built around the real work of school.
            </p>
          </div>
        </PageContainer>
      </section>
      <section
        id="modules"
        className="scroll-mt-24 py-16 md:py-24"
        aria-labelledby="modules-heading"
      >
        <PageContainer>
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[1.8px] text-hub-accent-strong">
                FIND THE RIGHT TOOL
              </p>
              <h2
                id="modules-heading"
                className="text-3xl font-bold tracking-[-1px] md:text-4xl"
              >
                One ecosystem. Clear responsibilities.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-hub-text">
              Each workspace has a purpose. Choose the one that fits the task in
              front of you.
            </p>
          </div>
          <div className="border-t border-hub-border">
            {modules.map((module, index) => (
              <article
                key={module.id}
                id={module.id}
                className="grid scroll-mt-24 gap-6 border-b border-hub-border py-9 md:grid-cols-[0.85fr_1.2fr_1fr] md:gap-10 md:py-10"
              >
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <module.icon
                      className="h-6 w-6 text-hub-accent-strong"
                      aria-hidden="true"
                    />
                    <span className="text-[10px] text-hub-muted">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold tracking-[-0.4px]">
                    {module.name}
                  </h3>
                  <p className="mt-1 text-xs text-hub-muted">
                    {module.product}
                  </p>
                </div>
                <div>
                  <p className="text-sm leading-7 text-hub-text">
                    {module.description}
                  </p>
                  <a
                    href={module.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex max-w-full items-center gap-2 break-all text-xs font-bold text-hub-accent-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-royal-lilac focus-visible:outline-offset-4"
                  >
                    {module.domain}
                    <LuArrowUpRight
                      className="h-4 w-4 shrink-0"
                      aria-hidden="true"
                    />
                  </a>
                  {module.id === "payments" && (
                    <a
                      href="https://e-pay.axiolot.com.ng"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 flex items-center gap-2 text-xs text-hub-accent-strong underline underline-offset-4"
                    >
                      Open the e-Payment Portal{" "}
                      <LuArrowUpRight className="h-3 w-3" aria-hidden="true" />
                    </a>
                  )}
                </div>
                <ul className="space-y-3 md:pt-1">
                  {module.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-xs leading-6 text-hub-text"
                    >
                      <LuCheck
                        className="mt-1 h-4 w-4 shrink-0 text-hub-accent-strong"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </PageContainer>
      </section>
      <section
        className="border-y border-hub-border bg-hub-surface py-16 md:py-20"
        aria-labelledby="workflow-heading"
      >
        <PageContainer>
          <div className="max-w-2xl">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[1.8px] text-hub-accent-strong">
              CONNECTED THROUGH THE SCHOOL DAY
            </p>
            <h2
              id="workflow-heading"
              className="text-3xl font-bold leading-tight tracking-[-1px] md:text-4xl"
            >
              Less chasing information.
              <br />
              More working with it.
            </h2>
            <p className="mt-5 text-sm leading-7 text-hub-text">
              The same school community benefits at every step: administrators
              keep records organised, teachers manage learning, and parents stay
              informed.
            </p>
          </div>
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: LuUsers,
                title: "Start with the student",
                text: "Maintain student information, classes, and academic records in the Academics Portal.",
              },
              {
                icon: LuClock3,
                title: "Stay close to the school day",
                text: "Record attendance and let parents know when their children arrive and leave.",
              },
              {
                icon: LuGraduationCap,
                title: "Make progress visible",
                text: "Share results and reports, and use analytics to understand performance.",
              },
            ].map((step, index) => (
              <li key={step.title} className="border-t border-hub-border pt-6">
                <div className="mb-5 flex items-center justify-between">
                  <step.icon
                    className="h-6 w-6 text-hub-accent-strong"
                    aria-hidden="true"
                  />
                  <span className="text-xs text-hub-muted">0{index + 1}</span>
                </div>
                <h3 className="text-lg font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-hub-text">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
          <Link
            href="https://demo.axiolot.com.ng"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-2 text-sm font-bold text-hub-accent-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-royal-lilac focus-visible:outline-offset-4"
          >
            Explore the demo student portal{" "}
            <LuArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </PageContainer>
      </section>
      <PageCta />
    </div>
  );
}
