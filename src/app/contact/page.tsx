import Link from "next/link";
import {
  LuArrowUpRight,
  LuClock3,
  LuMail,
  LuMapPin,
  LuPhone,
} from "react-icons/lu";
import {
  RiFacebookFill,
  RiLinkedinLine,
  RiTwitterXLine,
  RiWhatsappLine,
} from "react-icons/ri";
import ContactForm from "../components/contactForm";
import {
  PageContainer,
  PageHeading,
  PageNavigation,
} from "../components/pagePrimitives";
import { demoUrl } from "../components/landingData";

export const metadata = {
  title:
    "Contact Us | Axiolot Hub - Your Trusted Partner In Technology Solutions For Schools",
  description:
    "Talk to Axiolot Hub about school management, product support, and getting your institution connected. Contact our team in Enugu, Nigeria.",
};

export default function Contact() {
  return (
    <div className="bg-white font-satoshi text-rasin-black antialiased">
      <PageNavigation current="contact" />
      <section
        className="bg-[#fafafd] py-14 md:py-20"
        aria-labelledby="page-heading"
      >
        <PageContainer className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <PageHeading
              eyebrow="LET'S GET IN TOUCH"
              title={
                <>
                  Let&apos;s talk about
                  <br />
                  <span className="text-royal-lilac">your school.</span>
                </>
              }
              description="Choosing a platform, getting support, or sharing an idea? Tell us what's on your mind. We're here to help you find a clearer way forward."
            />
            <div className="mt-9 space-y-6 border-t border-hub-border pt-7">
              {[
                {
                  icon: LuMail,
                  label: "Email our team",
                  text: "support@axiolot.com.ng",
                  href: "mailto:support@axiolot.com.ng",
                },
                {
                  icon: LuPhone,
                  label: "Give us a call",
                  text: "+234 70 7318 4665",
                  href: "tel:+2347073184665",
                },
                {
                  icon: RiWhatsappLine,
                  label: "Start a WhatsApp conversation",
                  text: "+234 70 8131 7077",
                  href: "https://wa.me/+2347081317077",
                },
              ].map((channel) => (
                <div key={channel.label} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-hub-border bg-white text-hub-accent-strong">
                    <channel.icon
                      className="h-[18px] w-[18px]"
                      aria-hidden="true"
                    />
                  </span>
                  <div>
                    <p className="text-[11px] text-hub-muted">
                      {channel.label}
                    </p>
                    <a
                      href={channel.href}
                      className="mt-1 inline-block break-all text-sm font-medium text-rasin-black hover:text-hub-accent-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-royal-lilac focus-visible:outline-offset-4"
                    >
                      {channel.text}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-9 rounded-2xl border border-hub-border bg-white p-5">
              <p className="text-sm font-bold">
                Want to see the platform first?
              </p>
              <p className="mt-2 text-xs leading-6 text-hub-text">
                Take a look around the demo before choosing the tools for your
                school.
              </p>
              <a
                href={demoUrl}
                className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-hub-accent-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-royal-lilac focus-visible:outline-offset-4"
              >
                Explore the demo{" "}
                <LuArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
          <ContactForm />
        </PageContainer>
      </section>
      <section
        className="border-y border-hub-border py-14 md:py-16"
        aria-label="Office information"
      >
        <PageContainer className="grid gap-10 md:grid-cols-[1.2fr_1fr_0.8fr] md:gap-14">
          <div>
            <LuMapPin
              className="mb-5 h-6 w-6 text-hub-accent-strong"
              aria-hidden="true"
            />
            <h2 className="text-xl font-bold tracking-[-0.4px]">
              Find us in Enugu.
            </h2>
            <address className="mt-4 text-sm not-italic leading-7 text-hub-text">
              Axiolot Hub
              <br />
              Block 4, Opp. St. Faith Schools,
              <br />
              Ebony Paint Road, Enugu State, Nigeria.
              <br />
              Postal code: 400012
            </address>
            <a
              href="https://maps.app.goo.gl/QYmH3ZuJpraisbTJA"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-hub-accent-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-royal-lilac focus-visible:outline-offset-4"
            >
              View on Google Maps{" "}
              <LuArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <div>
            <LuClock3
              className="mb-5 h-6 w-6 text-hub-accent-strong"
              aria-hidden="true"
            />
            <h2 className="text-xl font-bold tracking-[-0.4px]">
              When we&apos;re here.
            </h2>
            <dl className="mt-4 space-y-3 text-xs leading-6">
              <div>
                <dt className="font-medium">Monday–Friday</dt>
                <dd className="text-hub-text">9:00 am–5:00 pm WAT</dd>
              </div>
              <div>
                <dt className="font-medium">Saturday</dt>
                <dd className="text-hub-text">10:00 am–2:00 pm WAT</dd>
              </div>
              <div>
                <dt className="font-medium">Sunday</dt>
                <dd className="text-hub-text">Closed</dd>
              </div>
            </dl>
          </div>
          <div>
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[1.5px] text-hub-accent-strong">
              KEEP IN TOUCH
            </p>
            <h2 className="text-xl font-bold tracking-[-0.4px]">
              Follow along.
            </h2>
            <p className="mt-4 text-sm leading-7 text-hub-text">
              News, product updates, and ideas for your school community.
            </p>
            <div className="mt-5 flex gap-2">
              {[
                {
                  name: "X / Twitter",
                  href: "https://twitter.com/axiolothub",
                  icon: RiTwitterXLine,
                },
                {
                  name: "Facebook",
                  href: "https://facebook.com/axiolothub",
                  icon: RiFacebookFill,
                },
                {
                  name: "LinkedIn",
                  href: "https://linkedin.com/company/axiolothub",
                  icon: RiLinkedinLine,
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-hub-border text-hub-text transition-colors hover:border-royal-lilac hover:text-hub-accent-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-royal-lilac focus-visible:outline-offset-4 motion-reduce:transition-none"
                >
                  <social.icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
            <Link
              href="/blog"
              className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-hub-accent-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-royal-lilac focus-visible:outline-offset-4"
            >
              Read the journal{" "}
              <LuArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </PageContainer>
      </section>
    </div>
  );
}
