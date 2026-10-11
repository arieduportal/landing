import {
  PageContainer,
  PageHeading,
  PageNavigation,
} from "../components/pagePrimitives";
import BlogFeed from "../components/blogFeed";

export const metadata = {
  title:
    "Blog | Axiolot Hub - Your Trusted Partner In Technology Solutions For Schools",
  description:
    "Read the Axiolot Journal for education technology insights, school management ideas, and updates from the Axiolot community.",
};

export default function Blog() {
  return (
    <div className="bg-white font-satoshi text-rasin-black antialiased">
      <PageNavigation current="blog" />
      <section
        className="border-b border-hub-border bg-[#fafafd] py-14 md:py-16"
        aria-labelledby="page-heading"
      >
        <PageContainer className="flex flex-col justify-between gap-8 md:flex-row md:items-end md:gap-16">
          <PageHeading
            eyebrow="THE AXIOLOT JOURNAL"
            title={
              <>
                Ideas for better
                <br />
                <span className="text-royal-lilac">school days.</span>
              </>
            }
            description="Practical ideas, product updates, and perspectives on education technology. A place to learn, reflect, and stay connected."
          />
          <div className="border-l-2 border-royal-lilac pl-5 text-xs leading-7 text-hub-muted md:mb-2 md:max-w-[210px]">
            <span className="block font-medium text-rasin-black">
              For the school community.
            </span>
            Education. Technology.
            <br />
            The everyday work in between.
          </div>
        </PageContainer>
      </section>
      <BlogFeed />
    </div>
  );
}
