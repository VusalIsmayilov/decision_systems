"use client";

import Link from "next/link";
import { useLocale } from "@/hooks/useLocale";
import { withLocale } from "@/lib/i18n";

const W = "mx-auto max-w-[1280px] px-5 md:px-10";

export default function CTAV2() {
  const locale = useLocale();
  return (
    <section className="bg-neutral-950 py-28 lg:py-36">
      <div className={W}>
        <div className="grid grid-cols-12 gap-x-8">

          <div className="hidden md:block md:col-span-1" />

          <div className="col-span-12 md:col-span-11">

            <p className="text-4xl lg:text-[52px] font-semibold tracking-tight leading-[1.1] text-white">
              Control is not established by effort.
            </p>
            <p className="text-4xl lg:text-[52px] font-semibold tracking-tight leading-[1.1] text-neutral-600 mt-2 mb-16">
              It is established by system design.
            </p>

            <div className="md:ml-[10%]">
              <Link
                href={withLocale(locale, "/contact")}
                className="inline-flex items-center px-8 py-4 bg-white text-neutral-950 text-sm font-semibold tracking-wide rounded-full hover:opacity-90 transition-opacity"
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
