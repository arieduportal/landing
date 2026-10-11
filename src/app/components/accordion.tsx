"use client";
import { useId, useState } from "react";
import { LuPlus, LuMinus } from "react-icons/lu";
interface AccordionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}
export default function Accordion({
  title,
  children,
  className = "",
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const id = useId();
  return (
    <div
      className={
        "axi-accordion border-b border-hub-border first:border-t first:border-hub-border [&_h3]:m-0 [&_h3>button]:flex [&_h3>button]:justify-between [&_h3>button]:items-center [&_h3>button]:w-full [&_h3>button]:text-left [&_h3>button]:[padding:21px_0] [&_h3>button]:gap-5 [&_h3>button]:text-rasin-black [&_h3>button]:text-[14px] [&_h3>button]:font-medium [&_h3>button]:leading-[1.6] [&_h3>button]:cursor-pointer [&_button_svg]:h-[17px] [&_button_svg]:w-[17px] [&_button_svg]:text-hub-accent-strong max-[699px]:[&_h3>button]:text-[13px] max-[699px]:[&_h3>button]:py-5 max-[699px]:[&_h3>button]:gap-[15px] " +
        className
      }
    >
      <h3>
        <button
          type="button"
          id={id + "-trigger"}
          aria-expanded={isOpen}
          aria-controls={id + "-content"}
          onClick={() => setIsOpen(!isOpen)}
          className="focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-royal-lilac focus-visible:outline-offset-4"
        >
          {title}
          {isOpen ? (
            <LuMinus aria-hidden="true" />
          ) : (
            <LuPlus aria-hidden="true" />
          )}
        </button>
      </h3>
      <div
        id={id + "-content"}
        aria-labelledby={id + "-trigger"}
        hidden={!isOpen}
        className="axi-accordion-content [padding:0_35px_22px_0] [&_p]:text-[13px] [&_p]:text-hub-text [&_p]:leading-[1.85] max-[699px]:pr-[22px]"
      >
        {children}
      </div>
    </div>
  );
}
