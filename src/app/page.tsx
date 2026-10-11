import Image from "next/image";
import Link from "next/link";
import {
  LuArrowRight,
  LuArrowUpRight,
  LuBarChart3,
  LuBellRing,
  LuBookOpen,
  LuCheck,
  LuClock3,
  LuCreditCard,
  LuGlobe2,
  LuGraduationCap,
  LuHeartHandshake,
  LuMail,
  LuShieldCheck,
  LuUsers,
  LuWallet,
} from "react-icons/lu";
import HeaderBanner from "./components/headerBanner";
import Accordion from "./components/accordion";
import TestimonialSwiper from "./components/TestimonialSwiper";
import { demoUrl } from "./components/landingData";
import faq from "./faq.json";

const partners = [
  { image: "mea.png", name: "MEA" },
  { image: "blossom.png", name: "Blossom International Schools" },
  { image: "louisville.jpg", name: "Louisville" },
  { image: "kbs.jpg", name: "KBS" },
  { image: "grundtvig.png", name: "Grundtvig" },
  { image: "cic.png", name: "College of the Immaculate Conception" },
];
const plans = [
  {
    name: "Basic",
    slug: "basic",
    description: "The essentials for a more organised school.",
    features: [
      "Academics and result management",
      "School website control",
      "Secure school fee payments",
      "24/7 customer support",
    ],
  },
  {
    name: "Proficient",
    slug: "proficient",
    description: "More connected operations for growing schools.",
    features: [
      "Everything in Basic",
      "Search engine optimisation",
      "Staff Pay Manager",
      "Priority customer support",
    ],
  },
  {
    name: "Premier",
    slug: "premier",
    description: "Deeper insights and a dedicated school identity.",
    features: [
      "Everything in Proficient",
      "Analytics Gateway",
      "Dedicated result portal domain",
      "Official school email addresses",
    ],
  },
];
const team = [
  {
    name: "Justin Okechukwu",
    role: "Founder / Software Developer",
    image: "founder.jpg",
    email: "team.justin@axiolot.com.ng",
  },
  {
    name: "Adesola Rose",
    role: "Software Developer",
    image: "rose.jpeg",
    email: "team.rose@axiolot.com.ng",
  },
  {
    name: "Ani Blessing",
    role: "UI Developer",
    image: "cyndi.JPG",
    email: "team.cyndi@axiolot.com.ng",
  },
];
export default function Index() {
  return (
    <div className="axi-landing text-rasin-black font-satoshi antialiased bg-white [&_svg]:shrink-0 [&_section[id]]:scroll-mt-[100px] [&_a]:no-underline">
      <HeaderBanner />

      <section
        className="axi-trust border-b border-hub-border pt-8 pb-[35px] [&_p]:text-center [&_p]:text-[9px] [&_p]:font-bold [&_p]:tracking-[1.7px] [&_p]:text-hub-muted max-[699px]:py-[26px] max-[699px]:[&_p]:text-[8px] max-[699px]:[&_p]:tracking-[1.1px] max-[699px]:[&_p]:max-w-[290px] max-[699px]:[&_p]:mx-auto"
        aria-label="Our partner schools"
      >
        <div className="axi-container w-[calc(100%_-_64px)] max-w-[1240px] mx-auto max-[1199px]:w-[calc(100%_-_48px)] max-[699px]:w-[calc(100%_-_40px)] max-[379px]:w-[calc(100%_-_32px)]">
          <p className="text-hub-text text-[16px] leading-[1.8]">
            PARTNERING WITH SCHOOLS THAT PUT EDUCATION FIRST
          </p>
          <div className="axi-partner-logos grid grid-cols-[repeat(6,_minmax(0,_1fr))] gap-[35px] items-center justify-items-center mt-[25px] [&>div]:w-full [&>div]:h-16 [&>div]:flex [&>div]:items-center [&>div]:justify-center [&_img]:w-auto [&_img]:max-w-[110px] [&_img]:h-auto [&_img]:max-h-14 [&_img]:object-contain max-[699px]:grid-cols-[repeat(3,_minmax(0,_1fr))] max-[699px]:gap-[20px_30px] max-[699px]:mt-6 max-[699px]:[&>div]:h-[53px] max-[699px]:[&_img]:max-w-[85px] max-[699px]:[&_img]:max-h-12">
            {partners.map((partner) => (
              <div key={partner.image}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_CDN}/image/hub/partners/${partner.image}`}
                  alt={partner.name}
                  width={128}
                  height={72}
                  sizes="(max-width: 600px) 80px, 110px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="axi-section py-[100px] max-[959px]:py-[75px] max-[699px]:py-[60px]"
        id="mission"
        aria-labelledby="mission-heading"
      >
        <div className="axi-container w-[calc(100%_-_64px)] max-w-[1240px] mx-auto max-[1199px]:w-[calc(100%_-_48px)] max-[699px]:w-[calc(100%_-_40px)] max-[379px]:w-[calc(100%_-_32px)]">
          <div className="axi-section-heading mb-12 [&>p:last-child]:mt-[18px] max-[699px]:mb-8 max-[699px]:[&>p:last-child]:text-[14px] axi-heading-split grid grid-cols-[1.55fr_1fr] gap-16 items-end [&>p:last-child]:max-w-[390px] [&>p:last-child]:[margin:0_0_3px_auto] max-[1199px]:gap-10 max-[959px]:grid-cols-[1fr] max-[959px]:gap-5 max-[959px]:[&>p:last-child]:m-0 max-[959px]:[&>p:last-child]:max-w-[520px]">
            <div>
              <p className="axi-eyebrow flex items-center gap-2.5 text-hub-accent-strong text-[11px] leading-[1.5] font-bold tracking-[1.8px] mb-5 max-[699px]:text-[9px] max-[699px]:tracking-[1.4px] max-[699px]:mb-4">
                A CONNECTED WAY TO WORK
              </p>
              <h2
                id="mission-heading"
                className="text-[clamp(30px,_3.1vw,_42px)] font-bold leading-[1.18] tracking-[-1.5px] max-[699px]:text-[31px] max-[699px]:tracking-[-1px]"
              >
                Your school has many moving parts.
                <br />
                They should work together.
              </h2>
            </div>
            <p className="text-hub-text text-[16px] leading-[1.8]">
              Give every member of your school community the information and
              tools they need, with less time spent chasing records.
            </p>
          </div>
          <div className="axi-principles grid grid-cols-[repeat(3,_minmax(0,_1fr))] gap-12 max-[959px]:gap-[25px] max-[699px]:grid-cols-[1fr] max-[699px]:gap-[25px]">
            {[
              {
                icon: LuGraduationCap,
                number: "01",
                title: "A clearer picture for administrators",
                text: "Bring student records, school operations, and financial information into focus.",
              },
              {
                icon: LuBookOpen,
                number: "02",
                title: "More time for teaching",
                text: "Simplify result entry, attendance, and reports, so teachers can focus on their students.",
              },
              {
                icon: LuUsers,
                number: "03",
                title: "A closer connection with parents",
                text: "Give families access to academic progress, attendance records, and fee payments.",
              },
            ].map((item) => (
              <div
                className="axi-principle border-t border-hub-border pt-[25px] [&>div]:flex [&>div]:justify-between [&>div]:items-center [&>div]:mb-[23px] [&>div_svg]:w-6 [&>div_svg]:h-6 [&>div_svg]:text-hub-accent-strong [&>div_svg]:[stroke-width:1.5px] [&>div>span]:text-[11px] [&>div>span]:text-hub-muted [&_h3]:text-[19px] [&_h3]:font-bold [&_h3]:leading-[1.4] [&_h3]:tracking-[-0.4px] [&_h3]:max-w-[290px] [&_p]:text-[14px] [&_p]:mt-3 [&_p]:max-w-[325px] max-[959px]:[&_h3]:text-[17px] max-[959px]:[&_p]:text-[13px] max-[699px]:pt-5 max-[699px]:[&>div]:mb-3.5 max-[699px]:[&_h3]:text-[19px] max-[699px]:[&_h3]:max-w-[none] max-[699px]:[&_p]:text-[14px] max-[699px]:[&_p]:max-w-[440px] max-[699px]:[&_p]:mt-2.5"
                key={item.number}
              >
                <div>
                  <item.icon aria-hidden="true" />
                  <span>{item.number}</span>
                </div>
                <h3>{item.title}</h3>
                <p className="text-hub-text text-[16px] leading-[1.8]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="axi-section py-[100px] max-[959px]:py-[75px] max-[699px]:py-[60px] axi-platform-section bg-hub-surface border-y border-hub-border"
        id="service"
        aria-labelledby="platform-heading"
      >
        <div className="axi-container w-[calc(100%_-_64px)] max-w-[1240px] mx-auto max-[1199px]:w-[calc(100%_-_48px)] max-[699px]:w-[calc(100%_-_40px)] max-[379px]:w-[calc(100%_-_32px)]">
          <div className="axi-section-heading mb-12 [&>p:last-child]:max-w-[580px] [&>p:last-child]:mt-[18px] max-[699px]:mb-8 max-[699px]:[&>p:last-child]:text-[14px]">
            <p className="axi-eyebrow flex items-center gap-2.5 text-hub-accent-strong text-[11px] leading-[1.5] font-bold tracking-[1.8px] mb-5 max-[699px]:text-[9px] max-[699px]:tracking-[1.4px] max-[699px]:mb-4">
              THE AXIOLOT PLATFORM
            </p>
            <h2
              id="platform-heading"
              className="text-[clamp(30px,_3.1vw,_42px)] font-bold leading-[1.18] tracking-[-1.5px] max-[699px]:text-[31px] max-[699px]:tracking-[-1px]"
            >
              Built around the real work of school.
            </h2>
            <p className="text-hub-text text-[16px] leading-[1.8]">
              From a student&apos;s first record to their end-of-term report.
              One connected platform, with a place for every task.
            </p>
          </div>
          <div className="axi-academics-showcase grid grid-cols-[1fr_1.08fr] gap-[72px] items-center p-[45px] bg-white border border-hub-border rounded-2xl max-[1199px]:p-8 max-[1199px]:gap-[35px] max-[959px]:gap-[25px] max-[959px]:p-7 max-[699px]:grid-cols-[1fr] max-[699px]:p-[25px] max-[699px]:gap-[30px] max-[379px]:p-5">
            <div className="axi-feature-copy [&>.axi-feature-icon]:mb-[25px] [&_.axi-eyebrow]:text-[10px] [&_.axi-eyebrow]:tracking-[1.5px] [&_.axi-eyebrow]:mb-4 [&>h3]:text-[clamp(27px,_2.6vw,_35px)] [&>h3]:font-bold [&>h3]:leading-[1.2] [&>h3]:tracking-[-1px] [&>p:not(.axi-eyebrow)]:mt-[22px] [&>p:not(.axi-eyebrow)]:text-[15px] max-[959px]:[&>h3]:text-[28px] max-[959px]:[&>p:not(.axi-eyebrow)]:text-[14px] max-[699px]:[&>h3]:text-[30px] max-[699px]:[&>.axi-feature-icon]:mb-5 max-[699px]:[&>p:not(.axi-eyebrow)]:text-[14px]">
              <span className="axi-feature-icon inline-flex justify-center items-center w-10 h-10 rounded-2xl text-hub-accent-strong bg-hub-tint shrink-0 [&_svg]:w-[21px] [&_svg]:h-[21px]">
                <LuBookOpen aria-hidden="true" />
              </span>
              <p className="axi-eyebrow flex items-center gap-2.5 text-hub-accent-strong text-[11px] leading-[1.5] font-bold tracking-[1.8px] mb-5 max-[699px]:text-[9px] max-[699px]:tracking-[1.4px] max-[699px]:mb-4">
                ACADEMICS & STUDENT RECORDS
              </p>
              <h3>
                Every student&apos;s progress.
                <br />
                Always in the picture.
              </h3>
              <p className="text-hub-text text-[16px] leading-[1.8]">
                Keep student information organised, enter results, and generate
                report cards without the spreadsheet shuffle. Give teachers,
                students, and parents a shared view of academic progress.
              </p>
              <ul className="axi-check-list list-none p-0 [margin:24px_0_28px] flex flex-col gap-3 [&_li]:flex [&_li]:items-start [&_li]:gap-2.5 [&_li]:text-[13px] [&_li]:text-hub-text [&_li]:leading-[1.6] [&_svg]:w-[15px] [&_svg]:h-[15px] [&_svg]:mt-[3px] [&_svg]:text-hub-accent-strong max-[959px]:[&_li]:text-[12px]">
                <li>
                  <LuCheck aria-hidden="true" /> Student, class, and subject
                  management
                </li>
                <li>
                  <LuCheck aria-hidden="true" /> Result entry and grade
                  calculation
                </li>
                <li>
                  <LuCheck aria-hidden="true" /> Report cards and academic
                  records
                </li>
                <li>
                  <LuCheck aria-hidden="true" /> Dedicated parent and student
                  portals
                </li>
              </ul>
              <a
                href="https://portal.axiolot.com.ng/"
                target="_blank"
                rel="noopener noreferrer"
                className="axi-text-link inline-flex items-center gap-2.5 text-hub-accent-strong text-[14px] font-bold leading-[1.5] [&_svg]:w-[17px] [&_svg]:h-[17px] [&_svg]:[transition:transform_160ms] [&:hover_svg]:[transform:translate(2px,_-2px)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-royal-lilac focus-visible:outline-offset-4 no-underline"
              >
                Explore the Academics Portal{" "}
                <LuArrowUpRight aria-hidden="true" />
              </a>
            </div>
            <div className="axi-academics-visual min-w-[0px] p-6 rounded-2xl bg-hub-surface max-[1199px]:p-[18px] max-[959px]:p-3 max-[699px]:p-[15px] max-[379px]:p-2.5">
              <div className="axi-record-preview bg-white border border-hub-border rounded-2xl p-6 shadow-hub max-[1199px]:p-[18px] max-[959px]:p-[15px] max-[699px]:p-[18px] max-[379px]:p-[13px]">
                <div className="axi-record-top flex items-center justify-between gap-[15px] [&_h4]:text-[18px] [&_h4]:font-bold [&_h4]:mt-1.5 [&_h4]:tracking-[-0.4px] [&_.axi-preview-status]:text-hub-accent-strong [&_.axi-preview-status]:bg-hub-tint [&_.axi-preview-status]:text-[9px]">
                  <div>
                    <span className="axi-mini-label text-hub-muted text-[10px] font-bold tracking-[1.2px]">
                      ACADEMICS PORTAL
                    </span>
                    <h4>Student results</h4>
                  </div>
                  <span className="axi-preview-status inline-flex items-center [padding:4px_7px] rounded-2xl text-[8px] font-medium leading-[1.4] bg-[#edf5f1] text-hub-success whitespace-nowrap">
                    Second term
                  </span>
                </div>
                <div className="axi-record-student flex items-center gap-3 py-[23px] mt-[18px] mb-0 border-t border-hub-border [&_strong]:block [&_strong]:text-[13px] [&_strong]:font-bold [&_div>span]:block [&_div>span]:text-[10px] [&_div>span]:text-hub-muted [&_div>span]:mt-1 [&>svg]:w-[23px] [&>svg]:h-[23px] [&>svg]:text-hub-muted [&>svg]:ml-auto max-[959px]:[&_div>span]:text-[8px] max-[959px]:[&>svg]:hidden max-[699px]:[&_div>span]:text-[9px] max-[379px]:gap-2 max-[379px]:[&_div>span]:text-[8px]">
                  <span className="axi-student-avatar inline-flex items-center justify-center h-[38px] w-[38px] shrink-0 bg-hub-tint text-hub-accent-strong rounded-2xl text-[11px] font-bold">
                    AO
                  </span>
                  <div>
                    <strong>Amara Okafor</strong>
                    <span>JSS 3 · Student academic record</span>
                  </div>
                  <LuGraduationCap aria-hidden="true" />
                </div>
                <table className="axi-results-table w-full [border-collapse:collapse] text-[11px] [&_thead_th]:bg-hub-surface [&_thead_th]:text-[9px] [&_thead_th]:text-hub-muted [&_thead_th]:[padding:10px_7px] [&_thead_th]:text-left [&_thead_th]:font-medium [&_th:first-child]:pl-2.5 [&_tbody_:is(th,_td)]:[padding:12px_7px] [&_tbody_:is(th,_td)]:border-b [&_tbody_:is(th,_td)]:border-hub-border [&_tbody_th]:text-left [&_tbody_th]:font-medium [&_tbody_td>span:not(.axi-grade)]:text-hub-muted [&_tbody_td>span:not(.axi-grade)]:text-[8px] [&_tbody_td>span:not(.axi-grade)]:ml-0.5 max-[959px]:text-[9px] max-[699px]:text-[10px]">
                  <caption className="sr-only">
                    Illustrative student result record with sample grades
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">Subject</th>
                      <th scope="col">Score</th>
                      <th scope="col">Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Mathematics", "86", "A"],
                      ["English Language", "82", "A"],
                      ["Basic Science", "78", "B"],
                      ["Computer Studies", "91", "A"],
                    ].map(([subject, score, grade]) => (
                      <tr key={subject}>
                        <th scope="row">{subject}</th>
                        <td>
                          {score}
                          <span>/100</span>
                        </td>
                        <td>
                          <span className="axi-grade inline-flex justify-center items-center bg-hub-tint text-hub-accent-strong w-6 h-6 rounded-2xl text-[10px] font-bold">
                            {grade}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="axi-report-summary flex items-center justify-between gap-2 mt-5 text-hub-text text-[9px] [&>span]:flex [&>span]:gap-[5px] [&>span]:items-center [&_svg]:w-[13px] [&_svg]:h-[13px] [&_svg]:text-hub-accent-strong max-[959px]:text-[8px]">
                  <span>
                    <LuCheck aria-hidden="true" /> Results organised. Progress
                    visible.
                  </span>
                  <LuBookOpen aria-hidden="true" />
                </div>
              </div>
              <p className="axi-visual-note text-[10px] text-hub-muted text-center mt-[15px] leading-[1.5]">
                Illustrative interface · sample student and results
              </p>
            </div>
          </div>
          <div className="axi-connected-modules grid grid-cols-[repeat(3,_minmax(0,_1fr))] mt-[45px] [&_article]:[padding:0_35px] [&_article]:flex [&_article]:flex-col [&_article]:items-start [&_article]:border-l [&_article]:border-[#dcdbe5] [&_article:first-child]:border-l-0 [&_article:first-child]:pl-0 [&_article:last-child]:pr-0 [&_article>svg]:w-[23px] [&_article>svg]:h-[23px] [&_article>svg]:text-hub-accent-strong [&_article>svg]:mb-[18px] [&_article>svg]:[stroke-width:1.5px] [&_h3]:text-[19px] [&_h3]:font-bold [&_h3]:tracking-[-0.4px] [&_p]:mt-2.5 [&_p]:mb-[22px] [&_p]:text-[14px] [&_.axi-text-link]:mt-auto [&_.axi-text-link]:text-[12px] max-[959px]:[&_article]:px-6 max-[959px]:[&_h3]:text-[17px] max-[959px]:[&_p]:text-[13px] max-[699px]:grid-cols-[1fr] max-[699px]:mt-[30px] max-[699px]:[&_article]:[padding:25px_0] max-[699px]:[&_article]:border-l-0 max-[699px]:[&_article]:border-b max-[699px]:[&_article]:border-hub-border max-[699px]:[&_article:last-child]:border-b-0 max-[699px]:[&_article:last-child]:pb-0 max-[699px]:[&_h3]:text-[19px] max-[699px]:[&_p]:max-w-[440px] max-[699px]:[&_p]:text-[14px] max-[699px]:[&_p]:mb-[17px] max-[699px]:[&_article>svg]:mb-3.5">
            {[
              {
                icon: LuCreditCard,
                title: "School fees, simplified.",
                text: "Make fee payments convenient for parents and keep financial records organised.",
                label: "e-Payment Portal",
                href: "https://e-pay.axiolot.com.ng",
              },
              {
                icon: LuWallet,
                title: "Take care of your staff.",
                text: "Streamline salary management with timely, accurate staff payment records.",
                label: "Staff Pay Manager",
                href: "https://wa.me/+2347081317077",
              },
              {
                icon: LuGlobe2,
                title: "Your school, online.",
                text: "Manage website content, news, and media from your dedicated school site manager.",
                label: "Site Management",
                href: "https://sites.axiolot.com.ng/",
              },
            ].map((item) => (
              <article key={item.title}>
                <item.icon aria-hidden="true" />
                <h3>{item.title}</h3>
                <p className="text-hub-text text-[16px] leading-[1.8]">
                  {item.text}
                </p>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="axi-text-link inline-flex items-center gap-2.5 text-hub-accent-strong text-[14px] font-bold leading-[1.5] [&_svg]:w-[17px] [&_svg]:h-[17px] [&_svg]:[transition:transform_160ms] [&:hover_svg]:[transform:translate(2px,_-2px)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-royal-lilac focus-visible:outline-offset-4 no-underline"
                >
                  {item.label}
                  <LuArrowUpRight aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="axi-attendance-section bg-rasin-black py-[95px] [&_h2]:text-white [&_.axi-eyebrow]:text-[#b5afff] [&_.axi-feature-copy>p:not(.axi-eyebrow)]:text-[#d0cfdb] [&_.axi-text-link]:text-[#c1bdff] [&_.axi-visual-note]:text-[#bbb9cd] max-[959px]:py-[75px] max-[699px]:py-[60px]"
        aria-labelledby="attendance-heading"
      >
        <div className="axi-container w-[calc(100%_-_64px)] max-w-[1240px] mx-auto max-[1199px]:w-[calc(100%_-_48px)] max-[699px]:w-[calc(100%_-_40px)] max-[379px]:w-[calc(100%_-_32px)] axi-split grid grid-cols-[1fr_1fr] items-center gap-24 max-[1199px]:gap-[50px] max-[959px]:gap-[35px] max-[699px]:grid-cols-[1fr] max-[699px]:gap-9">
          <div className="axi-feature-copy [&>.axi-feature-icon]:mb-[25px] [&_.axi-eyebrow]:text-[10px] [&_.axi-eyebrow]:tracking-[1.5px] [&_.axi-eyebrow]:mb-4 [&>h3]:text-[clamp(27px,_2.6vw,_35px)] [&>h3]:font-bold [&>h3]:leading-[1.2] [&>h3]:tracking-[-1px] [&>p:not(.axi-eyebrow)]:mt-[22px] [&>p:not(.axi-eyebrow)]:text-[15px] max-[959px]:[&>h3]:text-[28px] max-[959px]:[&>p:not(.axi-eyebrow)]:text-[14px] max-[699px]:[&>h3]:text-[30px] max-[699px]:[&>.axi-feature-icon]:mb-5 max-[699px]:[&>p:not(.axi-eyebrow)]:text-[14px]">
            <p className="axi-eyebrow flex items-center gap-2.5 text-hub-accent-strong text-[11px] leading-[1.5] font-bold tracking-[1.8px] mb-5 max-[699px]:text-[9px] max-[699px]:tracking-[1.4px] max-[699px]:mb-4">
              ATTENDANCE & PARENT NOTIFICATIONS
            </p>
            <h2
              id="attendance-heading"
              className="text-[clamp(30px,_3.1vw,_42px)] font-bold leading-[1.18] tracking-[-1.5px] max-[699px]:text-[31px] max-[699px]:tracking-[-1px]"
            >
              The school day starts
              <br />
              with peace of mind.
            </h2>
            <p className="text-hub-text text-[16px] leading-[1.8]">
              Know when students arrive and leave. Keep parents informed with
              instant push and SMS notifications, and give administrators a
              reliable attendance record.
            </p>
            <div className="axi-attendance-details flex flex-col gap-[23px] my-[30px] [&>div]:flex [&>div]:gap-[15px] [&>div>svg]:mt-1 [&>div>svg]:w-5 [&>div>svg]:h-5 [&>div>svg]:text-[#b5afff] [&_h3]:text-white [&_h3]:text-[15px] [&_h3]:font-medium [&_p]:text-[13px] [&_p]:text-[#c3c2d0] [&_p]:mt-1.5 [&_p]:max-w-[365px] max-[699px]:my-[25px] max-[699px]:gap-5 max-[699px]:[&_p]:text-[12px] max-[699px]:[&_p]:max-w-[none]">
              <div>
                <LuBellRing aria-hidden="true" />
                <div>
                  <h3>Keep families informed</h3>
                  <p className="text-hub-text text-[16px] leading-[1.8]">
                    Student clock-in and clock-out notifications go straight to
                    parents.
                  </p>
                </div>
              </div>
              <div>
                <LuClock3 aria-hidden="true" />
                <div>
                  <h3>Make every check-in count</h3>
                  <p className="text-hub-text text-[16px] leading-[1.8]">
                    Record staff arrivals and class attendance, with logs
                    available to administrators.
                  </p>
                </div>
              </div>
            </div>
            <a
              href={demoUrl}
              className="axi-text-link inline-flex items-center gap-2.5 text-hub-accent-strong text-[14px] font-bold leading-[1.5] [&_svg]:w-[17px] [&_svg]:h-[17px] [&_svg]:[transition:transform_160ms] [&:hover_svg]:[transform:translate(2px,_-2px)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-royal-lilac focus-visible:outline-offset-4 no-underline"
            >
              See how it works <LuArrowRight aria-hidden="true" />
            </a>
          </div>
          <div className="axi-attendance-visual">
            <div className="axi-attendance-preview p-[30px] bg-white border border-[rgb(255_255_255_/_20%)] rounded-2xl [&_.axi-preview-card-title_h3]:text-[20px] [&_.axi-preview-card-title_h3]:tracking-[-0.5px] [&_.axi-preview-card-title_h3]:mt-1.5 [&_.axi-preview-card-title>svg]:w-6 [&_.axi-preview-card-title>svg]:h-6 [&_.axi-preview-card-title>svg]:text-hub-accent-strong max-[959px]:p-[22px] max-[959px]:[&_.axi-preview-card-title_h3]:text-[17px] max-[699px]:p-[23px] max-[699px]:[&_.axi-preview-card-title_h3]:text-[19px] max-[379px]:p-[18px]">
              <div className="axi-preview-card-title flex justify-between items-center gap-2.5 [&_h3]:text-[11px] [&_h3]:font-bold [&>svg]:w-[15px] [&>svg]:h-[15px] [&>svg]:text-hub-muted">
                <div>
                  <span className="axi-mini-label text-hub-muted text-[10px] font-bold tracking-[1.2px]">
                    ATTENDANCE LOG
                  </span>
                  <h3>A clear record of the day</h3>
                </div>
                <LuClock3 aria-hidden="true" />
              </div>
              <div className="axi-attendance-date flex justify-between text-[11px] text-hub-muted border-b border-hub-border mt-[25px] pb-[13px]">
                <span>Student activity</span>
                <span>Today</span>
              </div>
              {[
                {
                  initials: "AO",
                  name: "Amara Okafor",
                  detail: "JSS 3 · Clocked in",
                  time: "08:02 AM",
                },
                {
                  initials: "CE",
                  name: "Chidi Eze",
                  detail: "SS 2 · Clocked in",
                  time: "08:06 AM",
                },
                {
                  initials: "NO",
                  name: "Nneka Obi",
                  detail: "JSS 1 · Clocked out",
                  time: "02:35 PM",
                },
              ].map((item) => (
                <div
                  className="axi-attendance-row flex items-center gap-3 py-[17px] border-b border-hub-border [&_strong]:text-[13px] [&_strong]:font-bold [&_strong]:block [&_small]:block [&_small]:text-hub-muted [&_small]:text-[10px] [&_small]:mt-[5px] [&>div:last-child]:ml-auto [&>div:last-child]:text-right [&>div:last-child>span]:text-[10px] [&>div:last-child>span]:font-medium [&>div:last-child_small]:flex [&>div:last-child_small]:justify-end [&>div:last-child_small]:items-center [&>div:last-child_small]:gap-[3px] [&>div:last-child_small]:text-hub-success [&>div:last-child_small]:text-[8px] [&_small_svg]:w-2.5 [&_small_svg]:h-2.5 max-[959px]:gap-2 max-[959px]:[&_.axi-student-avatar]:h-[30px] max-[959px]:[&_.axi-student-avatar]:w-[30px] max-[959px]:[&_.axi-student-avatar]:text-[9px] max-[959px]:[&_strong]:text-[11px] max-[959px]:[&_small]:text-[9px] max-[959px]:[&>div:last-child_small]:text-[7px] max-[699px]:[&_.axi-student-avatar]:w-[35px] max-[699px]:[&_.axi-student-avatar]:h-[35px] max-[699px]:[&_.axi-student-avatar]:text-[10px] max-[699px]:gap-2.5 max-[699px]:[&_strong]:text-[12px] max-[699px]:[&_small]:text-[10px] max-[699px]:[&>div:last-child_small]:text-[8px] max-[379px]:[&_.axi-student-avatar]:w-7 max-[379px]:[&_.axi-student-avatar]:h-7 max-[379px]:[&_.axi-student-avatar]:text-[8px] max-[379px]:gap-[7px] max-[379px]:[&_strong]:text-[11px] max-[379px]:[&_small]:text-[8px] max-[379px]:[&>div:last-child_small]:text-[7px]"
                  key={item.name}
                >
                  <span className="axi-student-avatar inline-flex items-center justify-center h-[38px] w-[38px] shrink-0 bg-hub-tint text-hub-accent-strong rounded-2xl text-[11px] font-bold">
                    {item.initials}
                  </span>
                  <div>
                    <strong>{item.name}</strong>
                    <small>{item.detail}</small>
                  </div>
                  <div>
                    <span>{item.time}</span>
                    <small>
                      <LuCheck aria-hidden="true" /> Parent notified
                    </small>
                  </div>
                </div>
              ))}
              <div className="axi-parent-message mt-[26px] flex gap-[13px] p-[18px] bg-hub-tint border border-[#e2dfff] rounded-2xl [&_.axi-feature-icon]:bg-white [&_.axi-feature-icon]:w-[33px] [&_.axi-feature-icon]:h-[33px] [&_.axi-feature-icon]:rounded-2xl [&_.axi-feature-icon_svg]:w-[17px] [&_.axi-feature-icon_svg]:h-[17px] [&>div]:flex-1 [&>div>div]:flex [&>div>div]:justify-between [&>div>div]:items-center [&>div>div]:gap-2 [&_strong]:text-[11px] [&_div_span]:text-hub-muted [&_div_span]:text-[8px] [&_p]:text-[11px] [&_p]:leading-[1.6] [&_p]:mt-[5px] max-[959px]:p-[13px] max-[959px]:gap-[9px] max-[699px]:p-[15px] max-[699px]:gap-3">
                <span className="axi-feature-icon inline-flex justify-center items-center w-10 h-10 rounded-2xl text-hub-accent-strong bg-hub-tint shrink-0 [&_svg]:w-[21px] [&_svg]:h-[21px]">
                  <LuBellRing aria-hidden="true" />
                </span>
                <div>
                  <div>
                    <strong>Axiolot Hub</strong>
                    <span>just now</span>
                  </div>
                  <p className="text-hub-text text-[16px] leading-[1.8]">
                    Amara has arrived at school.
                    <br />
                    Clock-in recorded at 08:02 AM.
                  </p>
                </div>
              </div>
            </div>
            <p className="axi-visual-note text-[10px] text-hub-muted text-center mt-[15px] leading-[1.5]">
              Illustrative attendance and parent notification
            </p>
          </div>
        </div>
      </section>

      <section
        className="axi-section py-[100px] max-[959px]:py-[75px] max-[699px]:py-[60px]"
        aria-labelledby="analytics-heading"
      >
        <div className="axi-container w-[calc(100%_-_64px)] max-w-[1240px] mx-auto max-[1199px]:w-[calc(100%_-_48px)] max-[699px]:w-[calc(100%_-_40px)] max-[379px]:w-[calc(100%_-_32px)] axi-split grid grid-cols-[1fr_1fr] items-center gap-24 max-[1199px]:gap-[50px] max-[959px]:gap-[35px] max-[699px]:grid-cols-[1fr] max-[699px]:gap-9 axi-analytics-layout max-[699px]:[&>.axi-feature-copy]:[order:-1]">
          <div className="axi-analytics-visual border border-hub-border bg-hub-surface p-[30px] rounded-2xl max-[959px]:p-5 max-[699px]:p-[23px] max-[379px]:p-4">
            <div className="axi-analytics-preview p-[27px] border border-hub-border rounded-2xl bg-white shadow-hub [&_.axi-preview-card-title_h3]:text-[18px] [&_.axi-preview-card-title_h3]:mt-[5px] [&_.axi-preview-card-title_h3]:tracking-[-0.5px] [&_.axi-preview-card-title_svg]:w-[22px] [&_.axi-preview-card-title_svg]:h-[22px] [&_.axi-preview-card-title_svg]:text-hub-accent-strong max-[959px]:p-[21px] max-[699px]:p-[23px] max-[379px]:p-[19px]">
              <div className="axi-preview-card-title flex justify-between items-center gap-2.5 [&_h3]:text-[11px] [&_h3]:font-bold [&>svg]:w-[15px] [&>svg]:h-[15px] [&>svg]:text-hub-muted">
                <div>
                  <span className="axi-mini-label text-hub-muted text-[10px] font-bold tracking-[1.2px]">
                    ANALYTICS GATEWAY
                  </span>
                  <h3>See the bigger picture.</h3>
                </div>
                <LuBarChart3 aria-hidden="true" />
              </div>
              <div className="axi-analytics-stat flex justify-between items-center gap-3 mt-[25px] pb-[22px] border-b border-hub-border [&>div>span]:text-hub-muted [&>div>span]:text-[10px] [&_strong]:block [&_strong]:mt-[5px] [&_strong]:text-[42px] [&_strong]:leading-[1.15] [&_strong]:tracking-[-2px] [&_strong>span]:text-[22px] [&_strong>span]:font-medium [&_strong>span]:text-hub-muted [&_strong>span]:ml-[3px] max-[959px]:flex-wrap max-[699px]:flex-nowrap max-[379px]:[&>.axi-preview-status]:text-[7px]">
                <div>
                  <span>Average academic performance</span>
                  <strong>
                    78.6<span>%</span>
                  </strong>
                </div>
                <span className="axi-preview-status inline-flex items-center [padding:4px_7px] rounded-2xl text-[8px] font-medium leading-[1.4] bg-[#edf5f1] text-hub-success whitespace-nowrap">
                  School overview
                </span>
              </div>
              <div className="axi-performance-rows flex flex-col gap-4 my-[25px] [&>div]:flex [&>div]:items-center [&>div]:gap-4 [&>div]:text-[10px] [&>div>span]:w-[35px] [&>div>span]:shrink-0 [&>div>span]:text-hub-text [&>div>div]:h-3 [&>div>div]:flex-1 [&>div>div]:bg-hub-surface [&>div>div]:[border-radius:2px] [&>div>div]:overflow-hidden [&>div>div>span]:block [&>div>div>span]:h-full [&>div>div>span]:bg-royal-lilac [&>div>div>span]:[border-radius:2px] [&>div:nth-child(2n)>div>span]:bg-[#aaa3ff] [&_strong]:w-8 [&_strong]:text-right [&_strong]:font-medium">
                {[
                  ["JSS 1", 72],
                  ["JSS 2", 81],
                  ["JSS 3", 76],
                  ["SS 1", 84],
                  ["SS 2", 79],
                  ["SS 3", 80],
                ].map(([label, value]) => (
                  <div key={label}>
                    <span>{label}</span>
                    <div>
                      <span style={{ width: value + "%" }} />
                    </div>
                    <strong>{value}%</strong>
                  </div>
                ))}
              </div>
              <div className="axi-analytics-key flex items-center justify-center gap-1.5 pt-1.5 text-hub-muted text-[9px]">
                <span className="axi-status-dot w-1.5 h-1.5 inline-block bg-royal-lilac rounded-full shrink-0" />{" "}
                Academic performance by class
              </div>
            </div>
            <p className="axi-visual-note text-[10px] text-hub-muted text-center mt-[15px] leading-[1.5]">
              Illustrative analytics · sample performance data
            </p>
          </div>
          <div className="axi-feature-copy [&>.axi-feature-icon]:mb-[25px] [&_.axi-eyebrow]:text-[10px] [&_.axi-eyebrow]:tracking-[1.5px] [&_.axi-eyebrow]:mb-4 [&>h3]:text-[clamp(27px,_2.6vw,_35px)] [&>h3]:font-bold [&>h3]:leading-[1.2] [&>h3]:tracking-[-1px] [&>p:not(.axi-eyebrow)]:mt-[22px] [&>p:not(.axi-eyebrow)]:text-[15px] max-[959px]:[&>h3]:text-[28px] max-[959px]:[&>p:not(.axi-eyebrow)]:text-[14px] max-[699px]:[&>h3]:text-[30px] max-[699px]:[&>.axi-feature-icon]:mb-5 max-[699px]:[&>p:not(.axi-eyebrow)]:text-[14px]">
            <p className="axi-eyebrow flex items-center gap-2.5 text-hub-accent-strong text-[11px] leading-[1.5] font-bold tracking-[1.8px] mb-5 max-[699px]:text-[9px] max-[699px]:tracking-[1.4px] max-[699px]:mb-4">
              INSIGHT FOR BETTER DECISIONS
            </p>
            <h2
              id="analytics-heading"
              className="text-[clamp(30px,_3.1vw,_42px)] font-bold leading-[1.18] tracking-[-1.5px] max-[699px]:text-[31px] max-[699px]:tracking-[-1px]"
            >
              Turn school records
              <br />
              into useful answers.
            </h2>
            <p className="text-hub-text text-[16px] leading-[1.8]">
              Understand performance across students, classes, and staff.
              Axiolot&apos;s Analytics Gateway brings your data together to help
              you see patterns and plan with confidence.
            </p>
            <ul className="axi-check-list list-none p-0 [margin:24px_0_28px] flex flex-col gap-3 [&_li]:flex [&_li]:items-start [&_li]:gap-2.5 [&_li]:text-[13px] [&_li]:text-hub-text [&_li]:leading-[1.6] [&_svg]:w-[15px] [&_svg]:h-[15px] [&_svg]:mt-[3px] [&_svg]:text-hub-accent-strong max-[959px]:[&_li]:text-[12px]">
              <li>
                <LuCheck aria-hidden="true" /> Student and staff performance
                insights
              </li>
              <li>
                <LuCheck aria-hidden="true" /> Class summaries and progress
                reports
              </li>
              <li>
                <LuCheck aria-hidden="true" /> Information for school leaders
                and education boards
              </li>
            </ul>
            <a
              href="https://analytics.axiolot.com.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="axi-text-link inline-flex items-center gap-2.5 text-hub-accent-strong text-[14px] font-bold leading-[1.5] [&_svg]:w-[17px] [&_svg]:h-[17px] [&_svg]:[transition:transform_160ms] [&:hover_svg]:[transform:translate(2px,_-2px)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-royal-lilac focus-visible:outline-offset-4 no-underline"
            >
              Explore the Analytics Gateway{" "}
              <LuArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section
        className="axi-testimonials-section py-[75px] bg-[#f8f8fb] border-y border-hub-border max-[699px]:py-[60px]"
        aria-labelledby="testimonials-heading"
      >
        <div className="axi-container w-[calc(100%_-_64px)] max-w-[1240px] mx-auto max-[1199px]:w-[calc(100%_-_48px)] max-[699px]:w-[calc(100%_-_40px)] max-[379px]:w-[calc(100%_-_32px)] axi-testimonial-layout grid grid-cols-[0.8fr_1.2fr] gap-[90px] items-center [&>div:first-child>p:not(.axi-eyebrow)]:max-w-[320px] [&>div:first-child>p:not(.axi-eyebrow)]:mt-[22px] [&>div:first-child>p:not(.axi-eyebrow)]:text-[15px] max-[1199px]:gap-[60px] max-[959px]:gap-[35px] max-[699px]:grid-cols-[1fr] max-[699px]:gap-[35px] max-[699px]:[&>div:first-child>p:not(.axi-eyebrow)]:max-w-[440px] max-[699px]:[&>div:first-child>p:not(.axi-eyebrow)]:text-[14px] max-[699px]:[&>div:first-child>p:not(.axi-eyebrow)]:mt-4">
          <div>
            <p className="axi-eyebrow flex items-center gap-2.5 text-hub-accent-strong text-[11px] leading-[1.5] font-bold tracking-[1.8px] mb-5 max-[699px]:text-[9px] max-[699px]:tracking-[1.4px] max-[699px]:mb-4">
              FROM OUR SCHOOL COMMUNITY
            </p>
            <h2
              id="testimonials-heading"
              className="text-[clamp(30px,_3.1vw,_42px)] font-bold leading-[1.18] tracking-[-1.5px] max-[699px]:text-[31px] max-[699px]:tracking-[-1px]"
            >
              Real people.
              <br />
              Everyday impact.
            </h2>
            <p className="text-hub-text text-[16px] leading-[1.8]">
              School leaders, parents, and students share their experience with
              Axiolot Hub.
            </p>
            <div className="axi-community-note flex items-center gap-2.5 text-[11px] text-hub-muted mt-[30px] [&_svg]:w-5 [&_svg]:h-5 [&_svg]:text-hub-accent-strong max-[699px]:mt-5">
              <LuHeartHandshake aria-hidden="true" />
              <span>Technology with people at its centre.</span>
            </div>
          </div>
          <TestimonialSwiper autoPlayInterval={0} />
        </div>
      </section>

      <section
        className="axi-section py-[100px] max-[959px]:py-[75px] max-[699px]:py-[60px] axi-plans-section"
        id="plan"
        aria-labelledby="plans-heading"
      >
        <div className="axi-container w-[calc(100%_-_64px)] max-w-[1240px] mx-auto max-[1199px]:w-[calc(100%_-_48px)] max-[699px]:w-[calc(100%_-_40px)] max-[379px]:w-[calc(100%_-_32px)]">
          <div className="axi-section-heading mb-12 [&>p:last-child]:mt-[18px] max-[699px]:mb-8 max-[699px]:[&>p:last-child]:text-[14px] axi-heading-split grid grid-cols-[1.55fr_1fr] gap-16 items-end [&>p:last-child]:max-w-[390px] [&>p:last-child]:[margin:0_0_3px_auto] max-[1199px]:gap-10 max-[959px]:grid-cols-[1fr] max-[959px]:gap-5 max-[959px]:[&>p:last-child]:m-0 max-[959px]:[&>p:last-child]:max-w-[520px]">
            <div>
              <p className="axi-eyebrow flex items-center gap-2.5 text-hub-accent-strong text-[11px] leading-[1.5] font-bold tracking-[1.8px] mb-5 max-[699px]:text-[9px] max-[699px]:tracking-[1.4px] max-[699px]:mb-4">
                A PLAN FOR YOUR SCHOOL
              </p>
              <h2
                id="plans-heading"
                className="text-[clamp(30px,_3.1vw,_42px)] font-bold leading-[1.18] tracking-[-1.5px] max-[699px]:text-[31px] max-[699px]:tracking-[-1px]"
              >
                Start with what you need.
                <br />
                Grow with what comes next.
              </h2>
            </div>
            <p className="text-hub-text text-[16px] leading-[1.8]">
              Choose the tools that fit your institution. Our team can help you
              find the right starting point.
            </p>
          </div>
          <div className="axi-plans grid grid-cols-[repeat(3,_minmax(0,_1fr))] gap-5 max-[959px]:gap-3.5 max-[699px]:grid-cols-[1fr] max-[699px]:gap-4">
            {plans.map((plan, index) => (
              <article
                className={
                  "axi-plan p-8 border border-hub-border rounded-2xl [&_h3]:text-[27px] [&_h3]:font-bold [&_h3]:tracking-[-0.8px] [&_h3]:mt-4 [&>.axi-button]:flex [&>.axi-button]:w-full [&>.axi-button]:justify-between [&>.axi-button]:text-[13px] [&_.axi-check-list]:border-t [&_.axi-check-list]:border-hub-border [&_.axi-check-list]:pt-[25px] [&_.axi-check-list]:mb-0 [&_.axi-check-list]:gap-3.5 [&_.axi-check-list_li]:text-[12px] max-[1199px]:p-[25px] max-[959px]:p-[22px] max-[959px]:[&_.axi-mini-label]:text-[8px] max-[699px]:p-[27px] max-[699px]:[&_h3]:text-[27px] max-[699px]:[&_h3]:mt-3 max-[699px]:[&_.axi-mini-label]:text-[9px] " +
                  (index === 1
                    ? "axi-plan-featured border-royal-lilac bg-[#faf9ff] shadow-[inset_0_3px_0_theme(colors.royal-lilac)] [&_.axi-mini-label]:text-hub-accent-strong"
                    : "")
                }
                key={plan.slug}
              >
                <div className="axi-plan-top min-h-[154px] [&_p]:mt-2.5 [&_p]:max-w-[240px] [&_p]:text-[13px] max-[959px]:min-h-[170px] max-[699px]:min-h-[auto] max-[699px]:mb-[25px] max-[699px]:[&_p]:max-w-[none]">
                  <span className="axi-mini-label text-hub-muted text-[10px] font-bold tracking-[1.2px]">
                    {index === 1
                      ? "FOR GROWING SCHOOLS"
                      : index === 0
                        ? "THE ESSENTIALS"
                        : "THE COMPLETE PICTURE"}
                  </span>
                  <h3>{plan.name}</h3>
                  <p className="text-hub-text text-[16px] leading-[1.8]">
                    {plan.description}
                  </p>
                </div>
                <a
                  className={
                    "axi-button inline-flex items-center justify-center gap-[18px] min-h-[48px] [padding:12px_20px] border border-transparent rounded-2xl text-[14px] font-bold leading-[1.5] cursor-pointer [transition:background-color_160ms,_border-color_160ms,_box-shadow_160ms] [&_svg]:w-[17px] [&_svg]:h-[17px] " +
                    (index === 1
                      ? "axi-button-primary bg-hub-accent-strong text-white shadow-[0_3px_7px_rgb(108_99_255_/_12%)] hover:bg-hub-accent-hover"
                      : "axi-button-secondary bg-white border-hub-border text-rasin-black hover:bg-hub-surface hover:border-[#c8c6d4]") +
                    "focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-royal-lilac focus-visible:outline-offset-4 no-underline"
                  }
                  href={
                    `${process.env.NEXT_PUBLIC_API}/onboard/plan/` +
                    plan.slug +
                    "?track-id=AE_1B267-619C4-812CC46E-E281"
                  }
                >
                  Choose {plan.name} <LuArrowRight aria-hidden="true" />
                </a>
                <ul className="axi-check-list list-none p-0 [margin:24px_0_28px] flex flex-col gap-3 [&_li]:flex [&_li]:items-start [&_li]:gap-2.5 [&_li]:text-[13px] [&_li]:text-hub-text [&_li]:leading-[1.6] [&_svg]:w-[15px] [&_svg]:h-[15px] [&_svg]:mt-[3px] [&_svg]:text-hub-accent-strong max-[959px]:[&_li]:text-[12px]">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <LuCheck aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="text-hub-text leading-[1.8] axi-plans-help mt-7 text-center text-[13px] [&_a]:text-hub-accent-strong [&_a]:ml-[7px] [&_a]:inline-flex [&_a]:items-center [&_a]:gap-[5px] [&_a]:font-medium [&_a_svg]:w-3.5 [&_a_svg]:h-3.5 max-[699px]:text-[12px] max-[699px]:mt-6 max-[699px]:[&_a]:ml-0">
            Have a particular requirement?{" "}
            <Link
              href="/contact"
              className="focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-royal-lilac focus-visible:outline-offset-4 no-underline"
            >
              Let&apos;s talk about your school{" "}
              <LuArrowUpRight aria-hidden="true" />
            </Link>
          </p>
        </div>
      </section>

      <section
        className="axi-team-section relative py-[60px] border-y border-hub-border max-[699px]:py-[45px]"
        id="team-section"
        aria-labelledby="team-heading"
      >
        <span
          id="team"
          className="axi-anchor scroll-mt-[100px] absolute top-0"
        />
        <div className="axi-container w-[calc(100%_-_64px)] max-w-[1240px] mx-auto max-[1199px]:w-[calc(100%_-_48px)] max-[699px]:w-[calc(100%_-_40px)] max-[379px]:w-[calc(100%_-_32px)]">
          <div className="axi-team-heading flex justify-between items-end gap-6 mb-8 [&_.axi-eyebrow]:mb-3 [&_h2]:text-[30px] [&_h2]:tracking-[-1px] max-[699px]:flex-col max-[699px]:items-start max-[699px]:gap-[18px] max-[699px]:[&_h2]:text-[28px]">
            <div>
              <p className="axi-eyebrow flex items-center gap-2.5 text-hub-accent-strong text-[11px] leading-[1.5] font-bold tracking-[1.8px] mb-5 max-[699px]:text-[9px] max-[699px]:tracking-[1.4px] max-[699px]:mb-4">
                THE PEOPLE BEHIND THE PLATFORM
              </p>
              <h2
                id="team-heading"
                className="text-[clamp(30px,_3.1vw,_42px)] font-bold leading-[1.18] tracking-[-1.5px] max-[699px]:text-[31px] max-[699px]:tracking-[-1px]"
              >
                Built by people who care.
              </h2>
            </div>
            <Link
              href="/about"
              className="axi-text-link inline-flex items-center gap-2.5 text-hub-accent-strong text-[14px] font-bold leading-[1.5] [&_svg]:w-[17px] [&_svg]:h-[17px] [&_svg]:[transition:transform_160ms] [&:hover_svg]:[transform:translate(2px,_-2px)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-royal-lilac focus-visible:outline-offset-4 no-underline"
            >
              More about Axiolot <LuArrowUpRight aria-hidden="true" />
            </Link>
          </div>
          <div className="axi-team grid grid-cols-[repeat(3,_minmax(0,_1fr))] gap-[30px] [&_article]:flex [&_article]:items-center [&_article]:gap-4 [&_article>img]:w-[72px] [&_article>img]:h-20 [&_article>img]:rounded-2xl [&_article>img]:object-[center_25%] [&_article>img]:shrink-0 [&_h3]:text-[14px] [&_h3]:font-bold [&_p]:text-[10px] [&_p]:mt-1 [&_p]:leading-[1.5] [&_article_a]:inline-flex [&_article_a]:items-center [&_article_a]:gap-[5px] [&_article_a]:mt-2 [&_article_a]:text-hub-accent-strong [&_article_a]:text-[10px] [&_article_a_svg]:w-[11px] [&_article_a_svg]:h-[11px] max-[959px]:gap-5 max-[959px]:[&_article]:gap-2.5 max-[959px]:[&_article>img]:w-[55px] max-[959px]:[&_article>img]:h-[67px] max-[959px]:[&_h3]:text-[12px] max-[959px]:[&_p]:text-[9px] max-[699px]:grid-cols-[1fr] max-[699px]:gap-6 max-[699px]:[&_article]:gap-4 max-[699px]:[&_article>img]:w-16 max-[699px]:[&_article>img]:h-[72px] max-[699px]:[&_h3]:text-[14px] max-[699px]:[&_p]:text-[11px] max-[699px]:[&_article_a]:text-[11px]">
            {team.map((member) => (
              <article key={member.name}>
                <Image
                  src={"/image/hub/team/" + member.image}
                  alt={member.name}
                  width={80}
                  height={80}
                  sizes="80px"
                />
                <div>
                  <h3>{member.name}</h3>
                  <p className="text-hub-text text-[16px] leading-[1.8]">
                    {member.role}
                  </p>
                  {member.email && (
                    <a
                      href={"mailto:" + member.email}
                      aria-label={"Email " + member.name}
                      className="focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-royal-lilac focus-visible:outline-offset-4 no-underline"
                    >
                      <LuMail aria-hidden="true" /> Get in touch
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="axi-section py-[100px] max-[959px]:py-[75px] max-[699px]:py-[60px] axi-faq-section"
        id="faq"
        aria-labelledby="faq-heading"
      >
        <div className="axi-container w-[calc(100%_-_64px)] max-w-[1240px] mx-auto max-[1199px]:w-[calc(100%_-_48px)] max-[699px]:w-[calc(100%_-_40px)] max-[379px]:w-[calc(100%_-_32px)] axi-faq-layout grid grid-cols-[0.85fr_1.4fr] gap-[100px] items-start [&>div:first-child]:sticky [&>div:first-child]:top-[115px] [&>div:first-child>p:not(.axi-eyebrow)]:text-[15px] [&>div:first-child>p:not(.axi-eyebrow)]:mt-[22px] [&>div:first-child>p:not(.axi-eyebrow)]:max-w-[300px] [&_.axi-text-link]:mt-[25px] max-[1199px]:gap-[65px] max-[959px]:gap-[45px] max-[699px]:grid-cols-[1fr] max-[699px]:gap-[30px] max-[699px]:[&>div:first-child]:static max-[699px]:[&>div:first-child>p:not(.axi-eyebrow)]:max-w-[400px] max-[699px]:[&>div:first-child>p:not(.axi-eyebrow)]:text-[14px] max-[699px]:[&>div:first-child>p:not(.axi-eyebrow)]:mt-[18px] max-[699px]:[&_.axi-text-link]:mt-[18px]">
          <div>
            <p className="axi-eyebrow flex items-center gap-2.5 text-hub-accent-strong text-[11px] leading-[1.5] font-bold tracking-[1.8px] mb-5 max-[699px]:text-[9px] max-[699px]:tracking-[1.4px] max-[699px]:mb-4">
              GOOD QUESTIONS. CLEAR ANSWERS.
            </p>
            <h2
              id="faq-heading"
              className="text-[clamp(30px,_3.1vw,_42px)] font-bold leading-[1.18] tracking-[-1.5px] max-[699px]:text-[31px] max-[699px]:tracking-[-1px]"
            >
              Let&apos;s make
              <br />
              things clearer.
            </h2>
            <p className="text-hub-text text-[16px] leading-[1.8]">
              Everything you need to know before bringing Axiolot Hub to your
              school.
            </p>
            <Link
              href="/contact"
              className="axi-text-link inline-flex items-center gap-2.5 text-hub-accent-strong text-[14px] font-bold leading-[1.5] [&_svg]:w-[17px] [&_svg]:h-[17px] [&_svg]:[transition:transform_160ms] [&:hover_svg]:[transform:translate(2px,_-2px)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-royal-lilac focus-visible:outline-offset-4 no-underline"
            >
              Ask our team <LuArrowUpRight aria-hidden="true" />
            </Link>
          </div>
          <div>
            {faq.map((item) => (
              <Accordion key={item.question} title={item.question}>
                <p className="text-hub-text text-[16px] leading-[1.8]">
                  {item.answer.replace(/[\u200B-\u200D\uFEFF]/g, "")}
                </p>
              </Accordion>
            ))}
          </div>
        </div>
      </section>

      <section
        className="axi-final-cta pb-20 max-[699px]:pb-[50px]"
        aria-labelledby="cta-heading"
      >
        <div className="axi-container w-[calc(100%_-_64px)] max-w-[1240px] mx-auto max-[1199px]:w-[calc(100%_-_48px)] max-[699px]:w-[calc(100%_-_40px)] max-[379px]:w-[calc(100%_-_32px)]">
          <div className="axi-cta-inner bg-rasin-black text-white rounded-2xl [padding:58px_60px] grid grid-cols-[1.5fr_1fr] gap-[50px] items-center [&_.axi-eyebrow]:text-[#b5afff] [&_.axi-eyebrow]:text-[10px] [&_.axi-eyebrow]:mb-[18px] [&_h2]:text-[40px] [&_h2]:tracking-[-1.5px] [&_p:not(.axi-eyebrow)]:text-[#d0cfdb] [&_p:not(.axi-eyebrow)]:text-[13px] [&_p:not(.axi-eyebrow)]:mt-5 [&>div:last-child]:flex [&>div:last-child]:flex-col [&>div:last-child]:items-center [&>div:last-child]:gap-5 [&_.axi-button]:min-w-[215px] max-[959px]:p-[45px] max-[959px]:gap-[30px] max-[959px]:[&_h2]:text-[35px] max-[699px]:grid-cols-[1fr] max-[699px]:[padding:35px_28px] max-[699px]:gap-[30px] max-[699px]:[&_h2]:text-[32px] max-[699px]:[&>div:last-child]:items-start max-[699px]:[&>div:last-child]:gap-[17px] max-[699px]:[&_.axi-button]:min-w-[0px] max-[699px]:[&_p:not(.axi-eyebrow)]:mt-[15px] max-[699px]:[&_p:not(.axi-eyebrow)]:text-[12px] max-[379px]:px-[23px]">
            <div>
              <p className="axi-eyebrow flex items-center gap-2.5 text-hub-accent-strong text-[11px] leading-[1.5] font-bold tracking-[1.8px] mb-5 max-[699px]:text-[9px] max-[699px]:tracking-[1.4px] max-[699px]:mb-4">
                YOUR NEXT SCHOOL DAY, SIMPLIFIED.
              </p>
              <h2
                id="cta-heading"
                className="text-[clamp(30px,_3.1vw,_42px)] font-bold leading-[1.18] tracking-[-1.5px] max-[699px]:text-[31px] max-[699px]:tracking-[-1px]"
              >
                Give your school
                <br />a clearer way forward.
              </h2>
              <p className="text-hub-text text-[16px] leading-[1.8]">
                Explore the platform. Find your fit. Let&apos;s get your school
                connected.
              </p>
            </div>
            <div>
              <a
                href={demoUrl}
                className="axi-button inline-flex items-center justify-center gap-[18px] min-h-[48px] [padding:12px_20px] border border-transparent rounded-2xl text-[14px] font-bold leading-[1.5] cursor-pointer [transition:background-color_160ms,_border-color_160ms,_box-shadow_160ms] [&_svg]:w-[17px] [&_svg]:h-[17px] axi-button-white bg-white text-rasin-black hover:bg-hub-tint focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-royal-lilac focus-visible:outline-offset-4 no-underline"
              >
                Explore the demo <LuArrowUpRight aria-hidden="true" />
              </a>
              <Link
                href="/contact"
                className="axi-cta-contact text-white text-[13px] font-medium inline-flex items-center gap-3 [&_svg]:w-[15px] [&_svg]:h-[15px] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-royal-lilac focus-visible:outline-offset-4 no-underline"
              >
                Talk to our team <LuArrowRight aria-hidden="true" />
              </Link>
              <span className="axi-cta-support flex items-center gap-1.5 text-[10px] text-[#d0cfdb] mt-2 [&_svg]:w-[13px] [&_svg]:h-[13px] [&_svg]:text-[#b5afff] max-[699px]:mt-0">
                <LuShieldCheck aria-hidden="true" /> Built for schools. Backed
                by people.
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
