"use client";
import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import {
  LuArrowLeft,
  LuArrowRight,
  LuPause,
  LuPlay,
  LuQuote,
} from "react-icons/lu";
interface Testimonial {
  id: number;
  quote: string;
  name: string;
  office: string;
  workPlace: string;
  image: string;
}
interface TestimonialCardSwipeProps {
  testimonials?: Testimonial[];
  autoPlayInterval?: number;
  decorColor?: string;
}
const TestimonialCardSwipe: React.FC<TestimonialCardSwipeProps> = ({
  testimonials = defaultTestimonials,
  autoPlayInterval = 6000,
  decorColor = "#6c63ff",
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const touchStart = useRef<number | null>(null);
  const id = useId();
  useEffect(() => {
    if (
      autoPlayInterval <= 0 ||
      isPaused ||
      isInteracting ||
      testimonials.length < 2
    )
      return;
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const interval = setInterval(() => {
      if (!query.matches && !document.hidden)
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlayInterval, isPaused, isInteracting, testimonials.length]);
  const item = testimonials[currentSlide % testimonials.length];
  if (!item) return null;
  const changeSlide = (direction: number) =>
    setCurrentSlide(
      (prev) => (prev + direction + testimonials.length) % testimonials.length,
    );
  return (
    <div
      className="axi-testimonial min-w-[0px] [&_blockquote]:min-h-[186px] [&_blockquote]:m-0 [&_blockquote>p]:text-rasin-black [&_blockquote>p]:text-[clamp(17px,_1.6vw,_20px)] [&_blockquote>p]:font-medium [&_blockquote>p]:leading-[1.75] [&_blockquote>p]:tracking-[-0.2px] max-[699px]:[&_blockquote>p]:text-[17px] max-[699px]:[&_blockquote]:min-h-[210px]"
      role="region"
      aria-roledescription="carousel"
      aria-label="School community testimonials"
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
      onFocusCapture={() => setIsInteracting(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node))
          setIsInteracting(false);
      }}
      onTouchStart={(event) => {
        touchStart.current = event.touches[0].clientX;
      }}
      onTouchEnd={(event) => {
        if (touchStart.current !== null) {
          const delta = event.changedTouches[0].clientX - touchStart.current;
          if (Math.abs(delta) > 60) changeSlide(delta > 0 ? -1 : 1);
        }
        touchStart.current = null;
      }}
    >
      <LuQuote
        className="axi-quote-icon text-hub-accent-strong w-[30px] h-[30px] mb-5 max-[699px]:mb-[15px]"
        style={{ color: decorColor }}
        aria-hidden="true"
      />
      <div
        id={id}
        aria-live={
          autoPlayInterval <= 0 || isPaused || isInteracting ? "polite" : "off"
        }
        aria-atomic="true"
      >
        <blockquote>
          <p className="text-hub-text text-[16px] leading-[1.8]">
            {item.quote}
          </p>
        </blockquote>
        <div className="axi-testimonial-author flex items-center gap-[13px] mt-[26px] min-h-[72px] [&_img]:w-12 [&_img]:h-12 [&_img]:object-cover [&_img]:rounded-full [&_img]:bg-hub-tint [&_strong]:block [&_strong]:text-[13px] [&_strong]:font-bold [&_span]:block [&_span]:text-hub-text [&_span]:mt-[3px] [&_span]:text-[11px] [&_small]:block [&_small]:text-hub-muted [&_small]:mt-0.5 [&_small]:text-[10px] [&_small]:leading-[1.5]">
          <Image
            src={item.image}
            alt={item.name}
            width={48}
            height={48}
            sizes="48px"
          />
          <div>
            <strong>{item.name}</strong>
            <span>{item.office}</span>
            <small>{item.workPlace}</small>
          </div>
        </div>
      </div>
      <div className="axi-testimonial-controls mt-6 border-t border-hub-border pt-[18px] flex justify-between items-center gap-3">
        <div className="axi-testimonial-dots flex items-center gap-px [&_button]:w-7 [&_button]:h-9 [&_button]:inline-flex [&_button]:justify-center [&_button]:items-center [&_button]:cursor-pointer [&_button::after]:content-[''] [&_button::after]:h-[5px] [&_button::after]:w-[5px] [&_button::after]:rounded-full [&_button::after]:bg-[#c4c2d0] [&_button[aria-current=true]::after]:w-[17px] [&_button[aria-current=true]::after]:bg-royal-lilac [&_button[aria-current=true]::after]:[border-radius:3px]">
          {testimonials.map((entry, index) => (
            <button
              type="button"
              key={entry.id}
              aria-label={"Read testimonial from " + entry.name}
              aria-current={currentSlide % testimonials.length === index}
              aria-controls={id}
              onClick={() => setCurrentSlide(index)}
              className="focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-royal-lilac focus-visible:outline-offset-4"
            />
          ))}
        </div>
        <div className="axi-testimonial-arrows flex gap-2 [&_button]:border [&_button]:border-hub-border [&_button]:w-[38px] [&_button]:h-[38px] [&_button_svg]:w-4 [&_button_svg]:h-4">
          {autoPlayInterval > 0 && (
            <button
              type="button"
              className="axi-icon-button inline-flex justify-center items-center w-11 h-11 rounded-2xl text-rasin-black cursor-pointer hover:bg-hub-surface [&_svg]:w-[23px] [&_svg]:h-[23px] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-royal-lilac focus-visible:outline-offset-4"
              aria-label={isPaused ? "Play testimonials" : "Pause testimonials"}
              onClick={() => setIsPaused(!isPaused)}
            >
              {isPaused ? (
                <LuPlay aria-hidden="true" />
              ) : (
                <LuPause aria-hidden="true" />
              )}
            </button>
          )}
          <button
            type="button"
            className="axi-icon-button inline-flex justify-center items-center w-11 h-11 rounded-2xl text-rasin-black cursor-pointer hover:bg-hub-surface [&_svg]:w-[23px] [&_svg]:h-[23px] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-royal-lilac focus-visible:outline-offset-4"
            aria-label="Previous testimonial"
            aria-controls={id}
            onClick={() => changeSlide(-1)}
          >
            <LuArrowLeft aria-hidden="true" />
          </button>
          <button
            type="button"
            className="axi-icon-button inline-flex justify-center items-center w-11 h-11 rounded-2xl text-rasin-black cursor-pointer hover:bg-hub-surface [&_svg]:w-[23px] [&_svg]:h-[23px] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-royal-lilac focus-visible:outline-offset-4"
            aria-label="Next testimonial"
            aria-controls={id}
            onClick={() => changeSlide(1)}
          >
            <LuArrowRight aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};
const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    image: `${process.env.NEXT_PUBLIC_CDN}/image/hub/hillary.png`,
    name: "Rev. Fr. Dr. Hillary Mgbodilie",
    office: "Chairman, PPSMB",
    workPlace: "Post Primary Schools Management Board, Enugu State, Nigeria",
    quote:
      "During my tenure as the Principal of CIC Enugu, adopting Axiolot Hub transformed our school’s administration. The platform streamlined grading and analytics, ensuring accuracy and transparency in result computation. Fee payment became completely digital, eliminating delays and errors. With Axiolot Hub, we achieved a new level of efficiency and accountability in managing academic and financial records.",
  },
  {
    id: 2,
    image: `${process.env.NEXT_PUBLIC_CDN}/image/hub/person.png`,
    name: "Mr. Ifeanyi Anoike",
    office: "HOD Computer Science",
    workPlace: "University Of Nigeria Nsukka",
    quote:
      "This software has revolutionized our administration. The Academics Portal simplifies result management, enhancing educational outcomes. The Staff Pay Manager ensures accurate, timely salary payments, boosting staff morale. The Analytics Gateway provides invaluable data for strategic decisions. This platform has significantly improved our efficiency and communication.",
  },
  {
    id: 3,
    image: `${process.env.NEXT_PUBLIC_CDN}/image/hub/person.png`,
    name: "Ngwu Fransica",
    office: "Parent",
    workPlace: "Educational Sector",
    quote:
      "As a parent, the Axiolot Hub is a lifesaver. The e-Payment system makes fee transactions effortless and secure. I can track my child's progress easily and stay informed through seamless communication. This portal has made managing my child's education transparent and convenient.",
  },
  {
    id: 4,
    image: `${process.env.NEXT_PUBLIC_CDN}/image/hub/person.png`,
    name: "Agu Michael",
    office: "Student",
    workPlace: "Blossom International Schools",
    quote:
      "The Axiolot Hub has enhanced my learning experience. The Academics Portal helps me track my progress effortlessly, while the user-friendly interface makes accessing information easy. Improved online communication keeps me connected with teachers and peers. This portal supports my academic journey immensely.",
  },
];
export default TestimonialCardSwipe;
