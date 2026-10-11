import type { ReactNode } from "react";
import Link from "next/link";
import { LuArrowRight, LuArrowUpRight, LuChevronRight } from "react-icons/lu";
import { demoUrl } from "./landingData";

export function PageContainer({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={
        "mx-auto w-[calc(100%_-_64px)] max-w-[1240px] max-[1199px]:w-[calc(100%_-_48px)] max-[699px]:w-[calc(100%_-_40px)] max-[379px]:w-[calc(100%_-_32px)] " +
        className
      }
    >
      {children}
    </div>
  );
}

export function PageNavigation({
  current,
}: {
  current: "ecosystem" | "about" | "blog" | "contact" | "privacy";
}) {
  const links = [
    { name: "Ecosystem", href: "/ecosystem", key: "ecosystem" },
    { name: "About us", href: "/about", key: "about" },
    { name: "Journal", href: "/blog", key: "blog" },
    { name: "Contact", href: "/contact", key: "contact" },
    { name: "Privacy", href: "/privacy", key: "privacy" },
  ];
  return (
    <div className="border-b border-hub-border bg-white">
      <PageContainer className="flex min-h-[60px] flex-wrap items-center justify-between gap-x-6 gap-y-3 py-4 max-[599px]:justify-start">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs text-hub-muted hover:text-hub-accent-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-royal-lilac focus-visible:outline-offset-4"
        >
          Home <LuChevronRight className="h-3 w-3" aria-hidden="true" />
        </Link>
        <nav
          aria-label="Explore Axiolot"
          className="flex flex-wrap items-center gap-x-6 gap-y-3 max-[599px]:gap-x-4"
        >
          {links.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              aria-current={current === link.key ? "page" : undefined}
              className={
                "text-xs font-medium transition-colors motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-royal-lilac focus-visible:outline-offset-4 " +
                (current === link.key
                  ? "text-hub-accent-strong"
                  : "text-hub-muted hover:text-rasin-black")
              }
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </PageContainer>
    </div>
  );
}

export function PageHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
}) {
  return (
    <div>
      <p className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[1.8px] text-hub-accent-strong">
        <span className="h-0.5 w-6 bg-royal-lilac" />
        {eyebrow}
      </p>
      <h1
        id="page-heading"
        className="text-4xl font-bold leading-[1.12] tracking-[-1.5px] text-rasin-black sm:text-5xl xl:text-[56px] xl:tracking-[-2px]"
      >
        {title}
      </h1>
      <p className="mt-6 max-w-xl text-base leading-[1.85] text-hub-text sm:text-[17px]">
        {description}
      </p>
    </div>
  );
}

export function PageCta({
  title = "Bring your school together.",
  description = "Explore the tools, find your fit, and take the next step with Axiolot Hub.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section
      className="bg-white py-14 md:py-20"
      aria-label="Get started with Axiolot"
    >
      <PageContainer>
        <div className="grid gap-8 rounded-2xl bg-rasin-black p-7 text-white sm:p-10 md:grid-cols-[1.5fr_1fr] md:items-center lg:p-14">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[1.8px] text-hub-tint">
              A CLEARER WAY TO WORK
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-1px] lg:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-200">
              {description}
            </p>
          </div>
          <div className="flex flex-col items-start gap-5 md:items-center">
            <a
              href={demoUrl}
              className="inline-flex min-h-[48px] items-center justify-center gap-5 rounded-2xl bg-white px-6 py-3 text-sm font-bold text-rasin-black transition-colors hover:bg-hub-tint focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4 motion-reduce:transition-none"
            >
              Explore the demo{" "}
              <LuArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 text-sm font-medium text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4"
            >
              Talk to our team{" "}
              <LuArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
