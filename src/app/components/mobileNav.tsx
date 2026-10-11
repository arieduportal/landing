"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { LuArrowRight, LuArrowUpRight, LuMenu, LuX } from "react-icons/lu";
import { navigationLinks, portalLinks } from "./landingData";
export default function MobileNav() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const previousOverflow = useRef("");
  const pathname = usePathname();
  const close = () => {
    dialogRef.current?.close();
    document.body.style.overflow = previousOverflow.current;
  };
  useEffect(() => {
    if (dialogRef.current?.open) {
      dialogRef.current.close();
      document.body.style.overflow = previousOverflow.current;
    }
  }, [pathname]);
  useEffect(() => {
    const dialog = dialogRef.current;
    const query = window.matchMedia("(min-width: 1080px)");
    const onResize = () => {
      if (query.matches && dialog?.open) {
        dialog.close();
        document.body.style.overflow = previousOverflow.current;
      }
    };
    query.addEventListener("change", onResize);
    return () => {
      query.removeEventListener("change", onResize);
      if (dialog?.open) document.body.style.overflow = previousOverflow.current;
    };
  }, []);
  return (
    <div className="axi-mobile-nav hidden max-[1079px]:block">
      <button
        type="button"
        className="axi-icon-button inline-flex justify-center items-center w-11 h-11 rounded-2xl text-rasin-black cursor-pointer hover:bg-hub-surface [&_svg]:w-[23px] [&_svg]:h-[23px] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-royal-lilac focus-visible:outline-offset-4"
        ref={triggerRef}
        aria-label="Open navigation"
        aria-haspopup="dialog"
        aria-controls="mobile-navigation"
        onClick={() => {
          previousOverflow.current = document.body.style.overflow;
          dialogRef.current?.showModal();
          document.body.style.overflow = "hidden";
        }}
      >
        <LuMenu aria-hidden="true" />
      </button>
      <dialog
        ref={dialogRef}
        id="mobile-navigation"
        className="axi-mobile-dialog [margin:0_0_0_auto] p-0 w-[min(420px,_100%)] max-w-full h-[100dvh] max-h-[100dvh] bg-white border-0 text-rasin-black backdrop:bg-[rgb(47_46_65_/_45%)]"
        aria-labelledby="mobile-nav-title"
        onClose={() => {
          document.body.style.overflow = previousOverflow.current;
          triggerRef.current?.focus();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
      >
        <div className="axi-mobile-panel [padding:20px_24px_32px] [&_nav]:py-4 [&_nav_a]:flex [&_nav_a]:justify-between [&_nav_a]:items-center [&_nav_a]:[padding:14px_0] [&_nav_a]:text-[20px] [&_nav_a]:font-medium [&_nav_a_svg]:w-[18px] [&_nav_a_svg]:text-hub-muted [&>.axi-button]:w-full">
          <div className="axi-mobile-title flex justify-between items-center gap-3 pb-[22px] border-b border-hub-border text-[16px] font-bold">
            <span id="mobile-nav-title">Explore Axiolot Hub</span>
            <button
              type="button"
              className="axi-icon-button inline-flex justify-center items-center w-11 h-11 rounded-2xl text-rasin-black cursor-pointer hover:bg-hub-surface [&_svg]:w-[23px] [&_svg]:h-[23px] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-royal-lilac focus-visible:outline-offset-4"
              aria-label="Close navigation"
              onClick={close}
            >
              <LuX aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Mobile navigation">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className="focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-royal-lilac focus-visible:outline-offset-4 no-underline"
              >
                {link.label}
                <LuArrowRight aria-hidden="true" />
              </Link>
            ))}
          </nav>
          <div className="axi-mobile-portals [padding:18px_0_24px] border-t border-hub-border [&_p]:text-hub-muted [&_p]:text-[10px] [&_p]:font-bold [&_p]:tracking-[1.2px] [&_p]:mb-3 [&_a]:flex [&_a]:justify-between [&_a]:items-center [&_a]:min-h-[44px] [&_a]:text-[13px] [&_a]:text-hub-text [&_a_svg]:w-[15px] [&_a_svg]:h-[15px]">
            <p>LOG IN TO YOUR WORKSPACE</p>
            {portalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-royal-lilac focus-visible:outline-offset-4 no-underline"
              >
                {link.label}
                <LuArrowUpRight aria-hidden="true" />
              </a>
            ))}
          </div>
          <Link
            href="/#plan"
            className="axi-button inline-flex items-center justify-center gap-[18px] min-h-[48px] [padding:12px_20px] border border-transparent rounded-2xl text-[14px] font-bold leading-[1.5] cursor-pointer [transition:background-color_160ms,_border-color_160ms,_box-shadow_160ms] [&_svg]:w-[17px] [&_svg]:h-[17px] axi-button-primary bg-hub-accent-strong text-white shadow-[0_3px_7px_rgb(108_99_255_/_12%)] hover:bg-hub-accent-hover focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-royal-lilac focus-visible:outline-offset-4 no-underline"
            onClick={close}
          >
            Get started <LuArrowRight aria-hidden="true" />
          </Link>
          <div className="axi-mobile-secondary flex gap-6 mt-6 text-hub-muted text-[12px]">
            <Link
              href="/contact"
              onClick={close}
              className="focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-royal-lilac focus-visible:outline-offset-4 no-underline"
            >
              Contact us
            </Link>
            <Link
              href="/privacy"
              onClick={close}
              className="focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-royal-lilac focus-visible:outline-offset-4 no-underline"
            >
              Privacy policy
            </Link>
          </div>
        </div>
      </dialog>
    </div>
  );
}
