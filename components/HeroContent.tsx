"use client";

import Link from "next/link";
import { useLocale } from "@/hooks/useLocale";
import { withLocale } from "@/lib/i18n";

export default function HeroContent() {
  const locale = useLocale();
  return (
    <div className="mx-auto max-w-[1280px] px-5 md:px-10 text-center">
      {/* Label */}
      <p
        className="font-bold uppercase tracking-[0.14em] mb-6 text-sm"
        style={{ color: "rgba(10,22,40,0.3)" }}
      >
        DataOfis Partners
      </p>

      {/* Headline — Type A: Hero */}
      <h1
        className="font-bold text-navy tracking-tight mb-8 text-6xl lg:text-7xl"
        style={{ lineHeight: 1.05 }}
      >
        Your data system is not under control.
      </h1>

      {/* Supporting text */}
      <p
        className="text-base lg:text-lg max-w-[600px] mx-auto mb-12"
        style={{ color: "rgba(10,22,40,0.62)", lineHeight: "1.68" }}
      >
        Most organizations operate in a fragmented state — where ownership is
        unclear, direction is inconsistent, and control is missing.
      </p>

      {/* CTA */}
      <div>
        <Link
          href={withLocale(locale, "/contact")}
          className="inline-flex items-center px-6 py-3 bg-navy text-white text-sm font-semibold rounded hover:bg-navy-mid transition-colors"
        >
          Schedule Executive Data Review
        </Link>
      </div>
    </div>
  );
}
