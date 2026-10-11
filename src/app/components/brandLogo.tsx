import Image from "next/image";

interface BrandLogoProps {
  compact?: boolean;
  priority?: boolean;
}

export default function BrandLogo({
  compact = false,
  priority = false,
}: BrandLogoProps) {
  return (
    <>
      <Image
        src={`${process.env.NEXT_PUBLIC_CDN}/image/Wzcdkj2.png`}
        alt=""
        width={compact ? 24 : 40}
        height={compact ? 24 : 40}
        priority={priority}
        className={
          compact
            ? "h-6 w-6 shrink-0 object-contain"
            : "h-10 w-10 shrink-0 object-contain md:h-12 md:w-12"
        }
      />
      <svg
        aria-hidden="true"
        viewBox="0 0 160 40"
        height="40"
        width="160"
        className={
          compact
            ? "-ml-1 h-6 w-[92px] shrink-0 text-rasin-black"
            : "-ml-2 h-10 w-32 shrink-0 text-rasin-black sm:w-40"
        }
      >
        <text
          x="5"
          y="30"
          fill="none"
          stroke="currentColor"
          fontSize="35"
          rotate="10"
          className="font-satoshi"
        >
          xiolot
        </text>
      </svg>
    </>
  );
}
