import Image from "next/image";
import {
  LuArrowUpRight,
  LuBookOpen,
  LuGraduationCap,
  LuHeartHandshake,
  LuMail,
  LuMapPin,
  LuShieldCheck,
  LuUsers,
} from "react-icons/lu";
import {
  PageContainer,
  PageCta,
  PageHeading,
  PageNavigation,
} from "../components/pagePrimitives";

export const metadata = {
  title: "About Us | Axiolot Hub",
  description:
    "Meet the people behind Axiolot Hub, an Enugu-based education technology platform helping schools connect academics, administration, payments, and their communities.",
};

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
const partners = [
  { image: "mea.png", name: "MEA" },
  { image: "blossom.png", name: "Blossom International Schools" },
  { image: "louisville.jpg", name: "Louisville" },
  { image: "kbs.jpg", name: "KBS" },
  { image: "grundtvig.png", name: "Grundtvig" },
  { image: "cic.png", name: "College of the Immaculate Conception" },
];

export default function About() {
  return (
    <div className="bg-white font-satoshi text-rasin-black antialiased">
      <PageNavigation current="about" />
      <section
        className="border-b border-hub-border bg-[#fafafd] py-14 md:py-20"
        aria-labelledby="page-heading"
      >
        <PageContainer className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <div>
            <PageHeading
              eyebrow="THE PEOPLE & PURPOSE BEHIND AXIOLOT"
              title={
                <>
                  We build tools for
                  <br />
                  <span className="text-royal-lilac">better school days.</span>
                </>
              }
              description="Axiolot Hub brings school administration and the school community closer together. We make the everyday work of education clearer, more organised, and easier to share."
            />
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 border-t border-hub-border pt-6">
              <div>
                <span className="block text-[10px] uppercase tracking-[1.3px] text-hub-muted">
                  OUR BEGINNING
                </span>
                <span className="mt-2 block text-sm font-medium">
                  Founded in 2022
                </span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-[1.3px] text-hub-muted">
                  OUR HOME
                </span>
                <span className="mt-2 flex items-center gap-1.5 text-sm font-medium">
                  <LuMapPin
                    className="h-3.5 w-3.5 text-hub-accent-strong"
                    aria-hidden="true"
                  />{" "}
                  Enugu, Nigeria
                </span>
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-rasin-black p-7 text-white sm:p-9">
            <p className="text-[10px] font-bold uppercase tracking-[1.7px] text-hub-tint">
              ONE SCHOOL COMMUNITY
            </p>
            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-[-1px]">
              Technology works best
              <br />
              when people come first.
            </h2>
            <div className="mt-8 space-y-5">
              {[
                {
                  icon: LuUsers,
                  title: "Administrators",
                  text: "A clearer view of school operations.",
                },
                {
                  icon: LuBookOpen,
                  title: "Teachers",
                  text: "Less paperwork. More time for students.",
                },
                {
                  icon: LuHeartHandshake,
                  title: "Parents",
                  text: "A closer connection to the school day.",
                },
                {
                  icon: LuGraduationCap,
                  title: "Students",
                  text: "Their progress, easier to understand.",
                },
              ].map((role) => (
                <div
                  key={role.title}
                  className="flex gap-4 border-t border-white/[0.15] pt-5"
                >
                  <role.icon
                    className="mt-1 h-5 w-5 shrink-0 text-hub-tint"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="text-sm font-medium">{role.title}</h3>
                    <p className="mt-1 text-xs leading-6 text-slate-200">
                      {role.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </PageContainer>
      </section>
      <section className="py-16 md:py-24" aria-labelledby="purpose-heading">
        <PageContainer className="grid gap-8 md:grid-cols-[1fr_1.1fr] md:gap-20">
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[1.8px] text-hub-accent-strong">
              OUR PURPOSE
            </p>
            <h2
              id="purpose-heading"
              className="max-w-lg text-3xl font-bold leading-tight tracking-[-1px] md:text-4xl"
            >
              The work behind every school day deserves better tools.
            </h2>
          </div>
          <div className="space-y-5 text-[15px] leading-8 text-hub-text">
            <p>
              A school is much more than its records. It is a community of
              students, families, teachers, and the people who keep everything
              running. Yet so much of their time goes into managing information.
            </p>
            <p>
              We built Axiolot Hub to make that work more manageable. Student
              information, results, attendance, payments, and school
              communication belong in a connected system that people can
              understand and use.
            </p>
            <p>
              Our aim is straightforward: help schools spend less time chasing
              information and more time supporting learning.
            </p>
          </div>
        </PageContainer>
      </section>
      <section
        className="border-y border-hub-border bg-hub-surface py-16 md:py-20"
        aria-labelledby="values-heading"
      >
        <PageContainer>
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[1.8px] text-hub-accent-strong">
            WHAT GUIDES OUR WORK
          </p>
          <h2
            id="values-heading"
            className="text-3xl font-bold tracking-[-1px] md:text-4xl"
          >
            Useful technology. Thoughtful support.
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: LuBookOpen,
                title: "Clarity over complexity",
                text: "School software should make the next step easier to see. We focus on organised records, clear workflows, and information people can use.",
              },
              {
                icon: LuUsers,
                title: "The whole community matters",
                text: "Administrators, teachers, parents, and students have different needs. Our tools give each of them a place in the school experience.",
              },
              {
                icon: LuShieldCheck,
                title: "Support beyond setup",
                text: "Training, technical assistance, and regular updates help schools keep getting value from the platform as their needs develop.",
              },
            ].map((value) => (
              <article
                key={value.title}
                className="border-t border-hub-border pt-6"
              >
                <value.icon
                  className="mb-5 h-6 w-6 text-hub-accent-strong"
                  aria-hidden="true"
                />
                <h3 className="text-lg font-bold tracking-[-0.3px]">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-hub-text">
                  {value.text}
                </p>
              </article>
            ))}
          </div>
        </PageContainer>
      </section>
      <section
        className="py-16 md:py-24"
        id="people"
        aria-labelledby="people-heading"
      >
        <PageContainer>
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[1.8px] text-hub-accent-strong">
                THE PEOPLE BEHIND THE PLATFORM
              </p>
              <h2
                id="people-heading"
                className="text-3xl font-bold tracking-[-1px] md:text-4xl"
              >
                Meet the team.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-hub-text">
              The people building a clearer, more connected school experience.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {team.map((member) => (
              <article key={member.name}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-hub-surface">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_CDN}/image/hub/team/${member.image}`}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1200px) 33vw, 400px"
                    className="object-cover object-[center_25%]"
                  />
                </div>
                <div className="pt-5">
                  <h3 className="text-lg font-bold tracking-[-0.3px]">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-xs text-hub-muted">{member.role}</p>
                  {member.email && (
                    <a
                      href={"mailto:" + member.email}
                      className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-hub-accent-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-royal-lilac focus-visible:outline-offset-4"
                    >
                      <LuMail className="h-3.5 w-3.5" aria-hidden="true" /> Get
                      in touch{" "}
                      <LuArrowUpRight
                        className="h-3.5 w-3.5"
                        aria-hidden="true"
                      />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </PageContainer>
      </section>
      <section
        className="border-y border-hub-border py-10"
        aria-label="Our partner schools"
      >
        <PageContainer>
          <p className="text-center text-[10px] font-bold uppercase tracking-[1.6px] text-hub-muted">
            PARTNERING WITH SCHOOLS THAT PUT EDUCATION FIRST
          </p>
          <div className="mt-8 grid grid-cols-3 items-center justify-items-center gap-x-6 gap-y-8 md:grid-cols-6">
            {partners.map((partner) => (
              <div
                key={partner.image}
                className="flex h-16 items-center justify-center"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_CDN}/image/hub/partners/${partner.image}`}
                  alt={partner.name}
                  width={110}
                  height={64}
                  sizes="110px"
                  className="max-h-14 w-auto max-w-[90px] object-contain md:max-w-[110px]"
                />
              </div>
            ))}
          </div>
        </PageContainer>
      </section>
      <PageCta
        title="Let's build a clearer school day."
        description="See what Axiolot Hub can do for your school. Explore the platform or start a conversation with our team."
      />
    </div>
  );
}
