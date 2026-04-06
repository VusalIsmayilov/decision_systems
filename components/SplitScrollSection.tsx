"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useLocale } from "@/hooks/useLocale";
import { withLocale } from "@/lib/i18n";

const domains = [
  { label: "Direction",                href: "/services#direction"    },
  { label: "Structure",                href: "/services#organization" },
  { label: "Execution",                href: "/services#execution"    },
  { label: "Architecture (supporting)", href: "/services#architecture" },
];

export default function SplitScrollSection() {
  const locale = useLocale();
  const containerRef    = useRef<HTMLDivElement>(null);
  const leftRef         = useRef<HTMLDivElement>(null);
  const rightRef        = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  const cardRefs        = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    // Cards pull out from the right one by one — staggered starts
    const cardStarts   = [0.30, 0.46, 0.62, 0.74];
    const cardDuration = 0.18;

    const onScroll = () => {
      const container    = containerRef.current;
      const left         = leftRef.current;
      const right        = rightRef.current;
      const rightContent = rightContentRef.current;
      if (!container || !left || !right) return;

      const rect       = container.getBoundingClientRect();
      const scrollRoom = container.offsetHeight - window.innerHeight;
      if (scrollRoom <= 0) return;

      const progress = Math.max(0, Math.min(1, -rect.top / scrollRoom));

      left.style.width  = `${100 - progress * 50}%`;
      right.style.width = `${progress * 50}%`;

      if (rightContent) {
        rightContent.style.opacity = `${Math.max(0, (progress - 0.15) / 0.25)}`;
      }

      // Cards slide in from the right — translateX 64px → 0
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const p = Math.max(0, Math.min(1, (progress - cardStarts[i]) / cardDuration));
        card.style.opacity   = `${p}`;
        card.style.transform = `translateX(${(1 - p) * 64}px)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={containerRef} style={{ height: "200vh" }} className="relative hidden md:block">
      <div className="sticky top-0 h-screen flex overflow-hidden">

        {/* Left panel — Operating Model (offwhite), no title */}
        <div
          ref={leftRef}
          className="h-full flex-shrink-0 overflow-hidden bg-offwhite"
          style={{ width: "100%" }}
        >
          <div className="h-full flex flex-col justify-center px-12 lg:px-20 xl:px-24">
            <p
              className="text-[rgba(10,22,40,0.72)] leading-relaxed mb-8"
              style={{ fontSize: "clamp(2.4rem, 4.35vw, 4.05rem)", lineHeight: 1.22 }}
            >
              Work is organized through a structured operating model designed to
              maintain consistent control across the data function.
            </p>
            <Link
              href={withLocale(locale, "/services")}
              className="text-sm font-medium text-navy hover:opacity-55 transition-opacity inline-flex items-center gap-1"
            >
              See How We Work →
            </Link>
          </div>
        </div>

        {/* Right panel — Intervention Domains (navy), no title */}
        <div
          ref={rightRef}
          className="h-full flex-shrink-0 overflow-hidden bg-navy"
          style={{ width: "0%" }}
        >
          <div
            ref={rightContentRef}
            className="h-full flex flex-col justify-center px-10 lg:px-14"
            style={{ opacity: 0, minWidth: "400px" }}
          >
            <div className="flex flex-col gap-[60px]">
              {domains.map((domain, i) => (
                <Link
                  key={domain.href}
                  href={withLocale(locale, domain.href)}
                  ref={(el) => { cardRefs.current[i] = el; }}
                  className="bg-offwhite rounded-lg px-6 py-5 hover:bg-white transition-colors block"
                  style={{ opacity: 0, transform: "translateX(64px)" }}
                >
                  <p className="font-semibold text-navy leading-snug" style={{ fontSize: "clamp(0.8rem, 1.45vw, 1.35rem)" }}>
                    {domain.label}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
