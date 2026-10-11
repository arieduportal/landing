"use client";
import { useEffect, useRef } from "react";
import BrandLogo from "./brandLogo";
import Link from "next/link";
import { LuArrowRight, LuArrowUpRight, LuChevronDown } from "react-icons/lu";
import MobileNav from "./mobileNav";
import { navigationLinks, portalLinks } from "./landingData";
export default function Header() {
  const loginRef = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    const close = (event: PointerEvent) => {
      if (!loginRef.current?.contains(event.target as Node))
        loginRef.current?.removeAttribute("open");
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && loginRef.current?.open) {
        loginRef.current.removeAttribute("open");
        loginRef.current.querySelector("summary")?.focus();
      }
    };
    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", close);
      document.removeEventListener("keydown", escape);
    };
  }, []);
  return (
    <header
      className="axi-header text-rasin-black font-satoshi antialiased [&_svg]:shrink-0 [&_a]:no-underline sticky top-0 z-[100] bg-white border-b border-hub-border"
      id="header"
    >
      <a
        href="#_next"
        className="axi-skip-link fixed top-2 left-4 [transform:translateY(-150%)] [padding:12px_20px] text-white bg-rasin-black rounded-2xl z-[200] focus:[transform:translateY(0)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-royal-lilac focus-visible:outline-offset-4 no-underline"
      >
        Skip to content
      </a>
      <div className="axi-container w-[calc(100%_-_64px)] max-w-[1240px] mx-auto max-[1199px]:w-[calc(100%_-_48px)] max-[699px]:w-[calc(100%_-_40px)] max-[379px]:w-[calc(100%_-_32px)] axi-header-inner h-[76px] flex justify-between items-center gap-8 max-[1199px]:gap-5 max-[1079px]:h-[68px] max-[699px]:h-16 max-[699px]:gap-[15px]">
        <Link
          href="/"
          className="axi-brand inline-flex items-center gap-1.5 shrink-0 text-rasin-black focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-royal-lilac focus-visible:outline-offset-4 no-underline"
          aria-label="Axiolot Hub home"
        >
          <BrandLogo priority />
        </Link>
        <nav
          className="axi-desktop-nav flex items-center gap-7 [&>a]:text-[13px] [&>a]:font-medium [&>a]:text-hub-text [&>a]:py-2.5 [&>a]:[transition:color_160ms] [&>a:hover]:text-hub-accent-strong max-[1199px]:gap-5 max-[1079px]:hidden"
          aria-label="Main navigation"
        >
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-royal-lilac focus-visible:outline-offset-4 no-underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="axi-header-actions flex items-center gap-6 max-[1199px]:gap-[18px] max-[1079px]:gap-[18px] max-[699px]:gap-[9px]">
          <details
            className="axi-login relative [&>summary]:flex [&>summary]:items-center [&>summary]:gap-[7px] [&>summary]:py-2.5 [&>summary]:text-[13px] [&>summary]:font-medium [&>summary]:cursor-pointer [&>summary]:list-none [&>summary::-webkit-details-marker]:hidden [&>summary_svg]:w-[13px] [&>summary_svg]:h-[13px] [&>summary_svg]:[transition:transform_160ms] [&[open]>summary_svg]:[transform:rotate(180deg)] max-[699px]:[&>summary]:text-[12px]"
            ref={loginRef}
          >
            <summary className="focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-royal-lilac focus-visible:outline-offset-4">
              Log in <LuChevronDown aria-hidden="true" />
            </summary>
            <div className="axi-login-menu absolute right-0 top-[calc(100%_+_13px)] w-[270px] bg-white p-3 border border-hub-border rounded-2xl shadow-hub [&_p]:text-[9px] [&_p]:tracking-[1.4px] [&_p]:text-hub-muted [&_p]:[padding:8px_10px_12px] [&_a]:flex [&_a]:justify-between [&_a]:items-center [&_a]:gap-2 [&_a]:[padding:12px_10px] [&_a]:rounded-2xl [&_a]:text-[13px] [&_a]:text-rasin-black [&_a:hover]:bg-hub-surface [&_a_svg]:w-[15px] [&_a_svg]:h-[15px] [&_a_svg]:text-hub-muted max-[699px]:right-[-45px]">
              <p>YOUR AXIOLOT WORKSPACE</p>
              {portalLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => loginRef.current?.removeAttribute("open")}
                  className="focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-royal-lilac focus-visible:outline-offset-4 no-underline"
                >
                  {link.label}
                  <LuArrowUpRight aria-hidden="true" />
                </a>
              ))}
            </div>
          </details>
          <Link
            href="/#plan"
            className="axi-button inline-flex items-center justify-center border border-transparent rounded-2xl font-bold leading-[1.5] cursor-pointer [transition:background-color_160ms,_border-color_160ms,_box-shadow_160ms] [&_svg]:w-[17px] [&_svg]:h-[17px] axi-button-primary bg-hub-accent-strong text-white shadow-[0_3px_7px_rgb(108_99_255_/_12%)] hover:bg-hub-accent-hover axi-header-cta min-h-[40px] [padding:9px_15px] gap-3.5 text-[12px] max-[699px]:hidden focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-royal-lilac focus-visible:outline-offset-4 no-underline"
          >
            Get started <LuArrowRight aria-hidden="true" />
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
