"use client";

import Link from "next/link";
import { useLocale } from "@/hooks/useLocale";
import { withLocale } from "@/lib/i18n";

export default function HeroV2() {
  const locale = useLocale();
  return (
    <section className="bg-white pt-[120px] pb-[40px]">
      <div className="max-w-[1080px] mx-auto px-8">

        {/* Back link */}
        <div style={{ marginBottom: "40px" }}>
          <Link
            href={withLocale(locale, "/")}
            style={{ fontSize: "14px", color: "#9CA3AF", textDecoration: "none" }}
            className="hover:opacity-70 transition-opacity"
          >
            ← Overview
          </Link>
        </div>

        {/* Section label */}
        <p style={{ fontSize: "11px", letterSpacing: "0.12em", color: "#9CA3AF", textTransform: "uppercase", marginBottom: "20px" }}>
          How We Work
        </p>

        {/* Headline */}
        <h1 style={{ fontSize: "clamp(52px, 5.5vw, 62px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.01em", color: "#111827", maxWidth: "640px", marginBottom: "20px" }}>
          The system is structured<br />
          and controlled as one.
        </h1>

        {/* Supporting line */}
        <p style={{ fontSize: "17px", color: "#6B7280", lineHeight: 1.6, maxWidth: "360px", marginTop: "12px" }}>
          Not services. A controlled system.
        </p>

        {/* Section break — divider */}
        <div style={{ marginTop: "80px", height: "1px", background: "rgba(229, 231, 235, 0.6)" }} />

      </div>
    </section>
  );
}
