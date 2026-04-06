"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SectionWrapper from "@/components/SectionWrapper";
import { defaultLocale, isLocale, withLocale, type Locale } from "@/lib/i18n";

export default function NotFoundContent() {
  const pathname = usePathname();
  const seg = pathname.split("/").filter(Boolean)[0];
  const locale: Locale = seg && isLocale(seg) ? seg : defaultLocale;
  const homeHref = withLocale(locale, "/");

  return (
    <>
      {/* 1. Entry — recognition, minimal */}
      <SectionWrapper bg="navy" className="!pt-28 !pb-16 md:!pt-32 md:!pb-20 lg:!pt-36">
        <div className="mx-auto w-full max-w-[1040px]">
          <h1 className="max-w-[760px] text-[46px] font-bold leading-[1.03] tracking-[-0.03em] text-white max-md:text-[38px] max-sm:text-[31px]">
            Page not found
          </h1>
          <p className="mt-8 max-w-[640px] text-[16px] font-normal leading-[1.55] text-[rgba(194,209,232,0.82)] max-sm:mt-6 max-sm:text-[15px]">
            The page you&apos;re trying to access does not exist or is not available.
          </p>
        </div>
      </SectionWrapper>

      {/* 2. System framing — definition, structural tone */}
      <SectionWrapper bg="white" className="border-t border-[rgba(10,22,40,0.08)] !pt-16 !pb-16 md:!pt-20 md:!pb-20">
        <div className="mx-auto w-full max-w-[640px]">
          <h2 className="text-[26px] font-bold leading-[1.22] tracking-[-0.01em] text-[#0A1628] max-sm:text-[21px]">
            Navigation remains available
          </h2>
          <div className="mt-9 border-t border-[rgba(10,22,40,0.08)] pt-9 text-[17px] font-normal leading-[1.55] text-[rgba(69,82,104,0.84)] max-sm:text-[15px]">
            <p>Access the system through defined entry points.</p>
            <p className="mt-5">Continue from the main structure.</p>
          </div>
        </div>
      </SectionWrapper>

      {/* 3. Action — single primary path */}
      <SectionWrapper
        bg="white"
        className="border-t border-[rgba(10,22,40,0.08)] !pt-12 !pb-24 md:!pt-14 md:!pb-28 lg:!pb-32"
      >
        <div className="mx-auto flex w-full max-w-[1040px] justify-end">
          <Link
            href={homeHref}
            className="inline-flex min-h-11 max-w-full items-center justify-center bg-[#234CB8] px-7 py-3 text-center text-[15px] font-bold tracking-[0.02em] text-white transition-colors duration-200 hover:bg-[#1C3E96] max-sm:px-5 max-sm:py-3 max-sm:text-[13px] max-sm:leading-snug"
            style={{ borderRadius: 0 }}
          >
            Return to Home
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
}
