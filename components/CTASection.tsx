"use client";

import Link from "next/link";
import { useLocale } from "@/hooks/useLocale";
import { withLocale } from "@/lib/i18n";

const W = "max-w-[1280px] mx-auto px-5 md:px-10";

export default function CTASection() {
  const locale = useLocale();
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className={W}>
        <div className="grid grid-cols-12 gap-x-8">

          {/* Rail — empty, maintains grid */}
          <div className="hidden md:block md:col-span-2" />

          <div className="col-span-12 md:col-span-10">

            {/* Statement */}
            <p className="text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.2] text-neutral-950">
              Control is not established by effort.
            </p>
            <p className="text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.2] text-neutral-400 mt-2 mb-14">
              It is established by system design.
            </p>

            {/* Button — slightly offset from left edge */}
            <div className="md:ml-[8%]">
              <Link
                href={withLocale(locale, "/contact")}
                className="inline-flex items-center px-8 py-4 bg-navy text-white text-sm font-semibold tracking-wide rounded hover:opacity-90 transition-opacity"
              >
                Schedule Executive Data Review
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
