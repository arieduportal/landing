"use client";
import { useState, useEffect, useRef } from "react";
import BrandLogo from "./brandLogo";
import Link from "next/link";
import { portalLinks } from "./landingData";
import { LuArrowRight, LuArrowUpRight, LuLoader2, LuMail, LuPhone } from "react-icons/lu";
import {
  RiWhatsappLine,
  RiTwitterFill,
  RiInstagramLine,
  RiFacebookFill,
  RiLinkedinLine,
} from "react-icons/ri";
export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [XToken, setXToken] = useState("");
  const messageTimeout = useRef<ReturnType<typeof setTimeout>>();
  const clear = () => {
    clearTimeout(messageTimeout.current);
    messageTimeout.current = setTimeout(() => {
      setMessage("");
      setColor("");
    }, 4000);
  };
  const subscribe = async () => {
    if (email === "") {
      setMessage("Email is required.");
      setColor("text-red-500");
      clear();
      return;
    }
    const trackId =
      typeof window !== "undefined" ? (window as any).TRACK_ID || "" : "";
    setIsLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API}/email/subscribe`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Track-Id": trackId,
            "X-XSRF-TOKEN": XToken,
          },
          body: JSON.stringify({ email, type: "news" }),
          credentials: "include",
        },
      );
      const result = await response.json();
      if (response.ok && response.status) {
        setMessage(String(result.message));
        setColor("text-green-700");
      } else {
        setMessage(String(result.message));
        setColor("text-red-700");
      }
    } catch {
      setMessage("Failed to subscribe. Please try again later.");
      setColor("text-red-700");
    } finally {
      setIsLoading(false);
      clear();
    }
  };
  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/x-token", { signal: controller.signal })
      .then((res) => res.json())
      .then((data) => setXToken(data.token))
      .catch(() => {});
    return () => {
      controller.abort();
      clearTimeout(messageTimeout.current);
    };
  }, []);
  const socials = [
    {
      label: "WhatsApp",
      href: "https://wa.me/+2347081317077",
      icon: RiWhatsappLine,
    },
    {
      label: "Instagram",
      href: "https://instagram.com/axiolothub",
      icon: RiInstagramLine,
    },
    {
      label: "Twitter",
      href: "https://twitter.com/@axiolothub",
      icon: RiTwitterFill,
    },
    {
      label: "Facebook",
      href: "https://facebook.com/axiolothub",
      icon: RiFacebookFill,
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/axiolothub",
      icon: RiLinkedinLine,
    },
  ];
  return (
    <footer className="axi-footer text-rasin-black font-satoshi antialiased [&_svg]:shrink-0 [&_a]:no-underline border-t border-hub-border bg-white pt-[60px] [&_h2]:text-[13px] [&_h2]:font-bold [&_h2]:mb-5 max-[699px]:pt-[42px] max-[699px]:[&_h2]:mb-4">
      <div className="axi-container w-[calc(100%_-_64px)] max-w-[1240px] mx-auto max-[1199px]:w-[calc(100%_-_48px)] max-[699px]:w-[calc(100%_-_40px)] max-[379px]:w-[calc(100%_-_32px)]">
        <div className="axi-footer-grid grid grid-cols-[1.1fr_0.65fr_0.8fr_1.1fr] gap-[45px] pb-[50px] max-[1199px]:gap-[30px] max-[959px]:grid-cols-[1.1fr_1fr] max-[959px]:gap-[40px_55px] max-[699px]:grid-cols-[1fr_1fr] max-[699px]:gap-[35px_25px] max-[699px]:pb-[35px]">
          <div className="axi-footer-brand [&>p]:max-w-[245px] [&>p]:text-hub-text [&>p]:text-[13px] [&>p]:leading-[1.8] [&>p]:mt-5 max-[699px]:[grid-column:1_/_-1] max-[699px]:[&>p]:max-w-[380px]">
            <Link
              href="/"
              className="axi-brand inline-flex items-center gap-1.5 shrink-0 text-rasin-black focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-royal-lilac focus-visible:outline-offset-4 no-underline"
              aria-label="Axiolot Hub home"
            >
              <BrandLogo />
            </Link>
            <p>
              A connected school community.
              <br />A clearer way to manage every day.
            </p>
            <div className="axi-footer-socials flex gap-[9px] mt-[22px] [&_a]:inline-flex [&_a]:items-center [&_a]:justify-center [&_a]:w-[30px] [&_a]:h-[30px] [&_a]:border [&_a]:border-hub-border [&_a]:rounded-2xl [&_a]:text-hub-text [&_a:hover]:text-hub-accent-strong [&_a:hover]:border-royal-lilac [&_svg]:w-3.5 [&_svg]:h-3.5">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-royal-lilac focus-visible:outline-offset-4 no-underline"
                >
                  <social.icon aria-hidden="true" />
                </a>
              ))}
            </div>
            <div className="axi-footer-contact mt-[25px] [&_a]:flex [&_a]:items-center [&_a]:gap-[7px] [&_a]:mt-2.5 [&_a]:text-[11px] [&_a]:text-hub-text [&_svg]:w-[13px] [&_svg]:h-[13px] [&_svg]:text-hub-muted max-[699px]:[&_a]:text-[10px] max-[379px]:[&_a]:text-[9px]">
              <a
                href="mailto:support@axiolot.com.ng"
                className="focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-royal-lilac focus-visible:outline-offset-4 no-underline"
              >
                <LuMail aria-hidden="true" /> support@axiolot.com.ng
              </a>
              <a
                href="tel:+2347073184665"
                className="focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-royal-lilac focus-visible:outline-offset-4 no-underline"
              >
                <LuPhone aria-hidden="true" /> +234 707 318 4665
              </a>
            </div>
          </div>
          <div>
            <h2>Explore</h2>
            <nav
              className="axi-footer-links flex flex-col gap-[13px] [&_a]:text-[12px] [&_a]:text-hub-text [&_a:hover]:text-hub-accent-strong"
              aria-label="Footer navigation"
            >
              <Link
                href="/#service"
                className="focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-royal-lilac focus-visible:outline-offset-4 no-underline"
              >
                The platform
              </Link>
              <Link
                href="/ecosystem"
                className="focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-royal-lilac focus-visible:outline-offset-4 no-underline"
              >
                Our ecosystem
              </Link>
              <Link
                href="/#plan"
                className="focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-royal-lilac focus-visible:outline-offset-4 no-underline"
              >
                Plans
              </Link>
              <Link
                href="/about"
                className="focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-royal-lilac focus-visible:outline-offset-4 no-underline"
              >
                About Axiolot
              </Link>
              <Link
                href="/blog"
                className="focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-royal-lilac focus-visible:outline-offset-4 no-underline"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-royal-lilac focus-visible:outline-offset-4 no-underline"
              >
                Contact us
              </Link>
              <a
                href="https://wa.me/+2347081317077"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-royal-lilac focus-visible:outline-offset-4 no-underline"
              >
                Become an affiliate
              </a>
            </nav>
          </div>
          <div>
            <h2>Your workspace</h2>
            <nav
              className="axi-footer-links flex flex-col gap-[13px] [&_a]:text-[12px] [&_a]:text-hub-text [&_a:hover]:text-hub-accent-strong"
              aria-label="Product portals"
            >
              {portalLinks.map((portal) => (
                <a
                  key={portal.label}
                  href={portal.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-royal-lilac focus-visible:outline-offset-4 no-underline"
                >
                  {portal.label}
                </a>
              ))}
              <Link
                href="/#faq"
                className="focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-royal-lilac focus-visible:outline-offset-4 no-underline"
              >
                Help & FAQs
              </Link>
            </nav>
          </div>
          <div className="axi-footer-newsletter [&>p]:text-[12px] [&>p]:text-hub-text [&>p]:leading-[1.8] max-[699px]:[grid-column:1_/_-1] max-[699px]:max-w-[450px]">
            <h2>Stay in the loop</h2>
            <p>
              Product updates and useful news for your school, straight to your
              inbox.
            </p>
            <form
              className="axi-newsletter-form mt-[15px] [&_label]:block [&_label]:text-[10px] [&_label]:text-hub-text [&_label]:mb-[7px]"
              onSubmit={(event) => {
                event.preventDefault();
                if (!isLoading) void subscribe();
              }}
              aria-busy={isLoading}
            >
              <label htmlFor="newsletter-email">Email address</label>
              <div className="axi-newsletter-input flex items-stretch border border-hub-border rounded-2xl bg-white focus-within:border-royal-lilac [&_input]:w-full [&_input]:min-w-[0px] [&_input]:border-0 [&_input]:[padding:11px_12px] [&_input]:text-[12px] [&_input]:[background:transparent] [&_input]:text-rasin-black [&_input]:outline-offset-[1px] [&_input::placeholder]:text-hub-muted [&_button]:self-center [&_button]:h-8 [&_button]:w-8 [&_button]:mr-[5px] [&_button]:shrink-0 [&_button]:flex [&_button]:items-center [&_button]:justify-center [&_button]:rounded-2xl [&_button]:bg-hub-accent-strong [&_button]:text-white [&_button]:cursor-pointer [&_button:hover]:bg-hub-accent-hover [&_button:disabled]:opacity-[0.6] [&_button:disabled]:cursor-wait [&_button_svg]:w-4 [&_button_svg]:h-4">
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  disabled={isLoading}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@school.edu"
                  aria-describedby="newsletter-message"
                  className="focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-transparent focus-visible:outline-offset-4 h-11"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  aria-label={
                    isLoading
                      ? "Submitting subscription"
                      : "Subscribe to our newsletter"
                  }
                  className="focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-royal-lilac focus-visible:outline-offset-4"
                >
                  {isLoading ? (
                    <LuLoader2
                      className="h-4 w-4 animate-spin motion-reduce:animate-none"
                      aria-hidden="true"
                    />
                  ) : (
                    <LuArrowRight className="h-4 w-4" aria-hidden="true" />
                  )}
                </button>
              </div>
              <p
                id="newsletter-message"
                className={
                  "axi-newsletter-message text-center min-h-[35px] pt-2 text-xs leading-[1.5] " +
                  color
                }
                role="status"
                aria-live="polite"
              >
                {isLoading ? "Submitting…" : message}
              </p>
            </form>
            <p className="axi-office-hours text-hub-muted text-[10px] leading-[1.7] mt-2.5">
              Mon–Fri: 8am–4pm · Sat: 8am–12 noon
              <br />
              Block 4, Opp. St. Faith Schools,
              <br />
              Ebony Paint Road, Enugu State.
            </p>
          </div>
        </div>
        <div className="axi-footer-bottom flex justify-between items-center gap-6 py-[22px] border-t border-hub-border text-hub-muted text-xs [&>div]:flex [&>div]:items-center [&>div]:gap-[22px] max-[699px]:flex-col max-[699px]:gap-[15px] max-[699px]:items-start max-[699px]:py-5 max-[699px]:text-[9px]">
          <p>
            © 2022–{new Date().getFullYear()} Axiolot Hub. All rights reserved.
          </p>
          <div>
            <Link
              href="/privacy"
              className="focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-royal-lilac focus-visible:outline-offset-4 no-underline"
            >
              Privacy policy
            </Link>
            <a
              href="https://status.axiolot.com.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="axi-footer-status inline-flex items-center gap-1.5 [&_.axi-status-dot]:bg-hub-success focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-royal-lilac focus-visible:outline-offset-4 no-underline"
            >
              <span className="axi-status-dot w-1.5 h-1.5 inline-block bg-royal-lilac rounded-full shrink-0" />{" "}
              System status <LuArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
