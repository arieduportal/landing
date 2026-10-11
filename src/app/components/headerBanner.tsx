import Link from "next/link";
import { LuArrowRight, LuArrowUpRight, LuCheck } from "react-icons/lu";
import ProductPreview from "./productPreview";
import { demoUrl } from "./landingData";
export default function HeaderBanner() {
  return (
    <section
      className="axi-hero pt-[68px] bg-[#fafafd] [&_h1]:text-[clamp(40px,_4.1vw,_57px)] [&_h1]:leading-[1.12] [&_h1]:font-bold [&_h1]:tracking-[-2.4px] [&_h1>span]:text-royal-lilac [&_.axi-actions]:mt-8 min-[1500px]:pt-[85px] max-[1199px]:[&_h1]:text-[45px] max-[1199px]:[&_h1]:tracking-[-1.8px] max-[959px]:pt-11 max-[959px]:[&_h1]:text-[58px] max-[959px]:[&_h1]:tracking-[-2.5px] max-[959px]:[&_.axi-actions]:mt-[25px] max-[699px]:pt-9 max-[699px]:[&_h1]:text-[clamp(36px,_7.9vw,_52px)] max-[699px]:[&_h1]:tracking-[-1.7px] max-[699px]:[&_.axi-actions]:gap-2.5 max-[699px]:[&_.axi-button]:text-[12px] max-[699px]:[&_.axi-button]:gap-3 max-[699px]:[&_.axi-button]:px-4 max-[699px]:[&_.axi-button]:min-h-[46px] max-[379px]:[&_h1]:text-[33px] max-[379px]:[&_h1]:tracking-[-1.5px] max-[379px]:[&_.axi-button]:text-[11px] max-[379px]:[&_.axi-button]:px-3 max-[379px]:[&_.axi-button]:gap-2"
      aria-labelledby="hero-heading"
    >
      <div className="axi-container w-[calc(100%_-_64px)] max-w-[1240px] mx-auto max-[1199px]:w-[calc(100%_-_48px)] max-[699px]:w-[calc(100%_-_40px)] max-[379px]:w-[calc(100%_-_32px)] axi-hero-grid grid grid-cols-[0.94fr_1.16fr] items-center gap-12 pb-[58px] min-[1500px]:pb-[75px] max-[1199px]:gap-[30px] max-[959px]:grid-cols-[1fr] max-[959px]:gap-[35px] max-[959px]:pb-9 max-[699px]:gap-[34px]">
        <div className="axi-hero-copy py-[22px] [&_.axi-eyebrow]:text-[10px] [&_.axi-eyebrow]:tracking-[1.4px] max-[959px]:max-w-[620px] max-[959px]:p-0 max-[699px]:[&_.axi-eyebrow]:text-[8px] max-[699px]:[&_.axi-eyebrow]:tracking-[1.25px] max-[379px]:[&_.axi-eyebrow]:text-[7px] max-[379px]:[&_.axi-eyebrow]:tracking-[1px]">
          <p className="axi-eyebrow flex items-center gap-2.5 text-hub-accent-strong text-[11px] leading-[1.5] font-bold tracking-[1.8px] mb-5 max-[699px]:text-[9px] max-[699px]:tracking-[1.4px] max-[699px]:mb-4">
            <span className="axi-eyebrow-line w-6 h-0.5 bg-royal-lilac" /> THE
            CONNECTED SCHOOL PLATFORM
          </p>
          <h1 id="hero-heading">
            School management.
            <br />
            <span>Everything in view.</span>
          </h1>
          <p className="text-hub-text axi-hero-description max-w-[430px] mt-[26px] text-[17px] leading-[1.85] max-[959px]:max-w-[510px] max-[959px]:mt-5 max-[959px]:text-[16px] max-[699px]:text-[15px] max-[699px]:max-w-[450px] max-[699px]:mt-[19px] max-[699px]:leading-[1.8]">
            Bring academics, attendance, payments, and people together. Axiolot
            Hub gives your school a clearer way to work, every day.
          </p>
          <div className="axi-actions flex flex-wrap gap-3">
            <a
              href={demoUrl}
              className="axi-button inline-flex items-center justify-center gap-[18px] min-h-[48px] [padding:12px_20px] border border-transparent rounded-2xl text-[14px] font-bold leading-[1.5] cursor-pointer [transition:background-color_160ms,_border-color_160ms,_box-shadow_160ms] [&_svg]:w-[17px] [&_svg]:h-[17px] axi-button-primary bg-hub-accent-strong text-white shadow-[0_3px_7px_rgb(108_99_255_/_12%)] hover:bg-hub-accent-hover focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-royal-lilac focus-visible:outline-offset-4 no-underline"
            >
              Explore the demo <LuArrowUpRight aria-hidden="true" />
            </a>
            <Link
              href="/#plan"
              className="axi-button inline-flex items-center justify-center gap-[18px] min-h-[48px] [padding:12px_20px] border rounded-2xl text-[14px] font-bold leading-[1.5] cursor-pointer [transition:background-color_160ms,_border-color_160ms,_box-shadow_160ms] [&_svg]:w-[17px] [&_svg]:h-[17px] axi-button-secondary bg-white border-hub-border text-rasin-black hover:bg-hub-surface hover:border-[#c8c6d4] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-royal-lilac focus-visible:outline-offset-4 no-underline"
            >
              Find your plan <LuArrowRight aria-hidden="true" />
            </Link>
          </div>
          <div className="axi-hero-assurances flex flex-wrap gap-[18px] mt-6 text-hub-text text-[11px] [&>span]:inline-flex [&>span]:items-center [&>span]:gap-[5px] [&_svg]:text-hub-accent-strong [&_svg]:w-[13px] [&_svg]:h-[13px] max-[959px]:mt-[19px] max-[699px]:text-[10px] max-[699px]:gap-4 max-[379px]:gap-[11px] max-[379px]:text-[9px]">
            <span>
              <LuCheck aria-hidden="true" /> Built for your school
            </span>
            <span>
              <LuCheck aria-hidden="true" /> Support from real people
            </span>
          </div>
        </div>
        <div className="axi-hero-product relative min-w-[0px] before:content-[''] before:absolute before:[inset:-40px_0] before:[background:radial-gradient(_ellipse_at_center,_rgb(108_99_255_/_8%),_transparent_70%_)] before:pointer-events-none max-[959px]:max-w-[690px] max-[959px]:w-full">
          <div className="axi-preview-caption relative flex items-center gap-[7px] mb-3 text-[8px] font-bold tracking-[1px] text-hub-text [&>span:last-child]:ml-auto [&>span:last-child]:text-[7px] [&>span:last-child]:text-hub-muted max-[699px]:text-[7px] max-[699px]:tracking-[0.7px] max-[699px]:[&>span:last-child]:text-[6px]">
            <span className="axi-status-dot w-1.5 h-1.5 inline-block bg-royal-lilac rounded-full shrink-0" />{" "}
            ONE SCHOOL. ONE CLEARER PICTURE.
            <span>PRODUCT PREVIEW</span>
          </div>
          <ProductPreview />
          <div className="axi-preview-footnote flex justify-between gap-2 mt-[13px] text-[9px] text-hub-text [&>span:last-child]:text-hub-muted max-[699px]:text-[8px] max-[699px]:[&>span:first-child]:hidden max-[699px]:[&>span:last-child]:mx-auto">
            <span>From the first bell to the final report.</span>
            <span>Illustrative interface · sample data</span>
          </div>
        </div>
      </div>
      <div className="axi-container w-[calc(100%_-_64px)] max-w-[1240px] mx-auto max-[1199px]:w-[calc(100%_-_48px)] max-[699px]:w-[calc(100%_-_40px)] max-[379px]:w-[calc(100%_-_32px)] axi-hero-bottom border-t border-hub-border py-5 flex items-center justify-between gap-6 text-[12px] text-hub-text [&>span]:font-medium [&>div]:flex [&>div]:flex-wrap [&>div]:gap-[26px] [&>div]:text-[11px] [&>div>span+span]:relative [&>div>span+span::before]:content-[''] [&>div>span+span::before]:absolute [&>div>span+span::before]:w-[3px] [&>div>span+span::before]:h-[3px] [&>div>span+span::before]:bg-[#b9b8c4] [&>div>span+span::before]:rounded-full [&>div>span+span::before]:top-[7px] [&>div>span+span::before]:left-[-14px] max-[699px]:flex-col max-[699px]:gap-3 max-[699px]:items-start max-[699px]:py-[18px] max-[699px]:text-[11px] max-[699px]:[&>div]:text-[10px] max-[699px]:[&>div]:gap-6 max-[379px]:[&>div]:text-[9px] max-[379px]:[&>div]:gap-[21px]">
        <span>Less administration. More education.</span>
        <div>
          <span>Administrators</span>
          <span>Teachers</span>
          <span>Parents</span>
          <span>Students</span>
        </div>
      </div>
    </section>
  );
}
