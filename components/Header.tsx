"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import DataOfisLogo from "./DataOfisLogo";
import NavigationOverlay from "./NavigationOverlay";
import LanguageSwitcher from "./LanguageSwitcher";
import type { Locale } from "@/lib/i18n";

function parseRgb(color: string): [number, number, number, number] | null {
  const m = color.match(
    /rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)(?:\s*,\s*([\d.]+))?\s*\)/i
  );
  if (!m) return null;
  return [
    Number(m[1]),
    Number(m[2]),
    Number(m[3]),
    m[4] === undefined ? 1 : Number(m[4]),
  ];
}

/** ITU-R BT.601 luma on 0–255 RGB, normalized to 0–1 (matches header-implementation.md). */
function normalizedLuma(r: number, g: number, b: number): number {
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
}

function findOpaqueBackground(el: Element | null): [number, number, number] | null {
  let current: Element | null = el;
  while (current && current instanceof HTMLElement) {
    const parsed = parseRgb(getComputedStyle(current).backgroundColor);
    if (parsed) {
      const [r, g, b, a] = parsed;
      if (a > 0.03) return [r, g, b];
    }
    current = current.parentElement;
  }
  return null;
}

/** Y coordinate just below fixed header so elementFromPoint hits page content, not transparent header layers. */
function contrastSampleY(): number {
  const h = window.innerHeight;
  if (h < 48) return Math.floor(h / 2);
  const stacked = window.matchMedia("(max-width: 767px)").matches;
  // Matches Header: top 48px + (mobile: logo 28 + gap-3 12 + row ~44) or (md+: one ~44px row)
  const chromeBottom = stacked ? 48 + 28 + 12 + 44 : 48 + 44;
  const y = chromeBottom + 18;
  return Math.min(Math.max(y, 0), h - 4);
}

export default function Header({ locale }: { locale: Locale }) {
  const [navOpen, setNavOpen] = useState(false);
  const [onDarkSection, setOnDarkSection] = useState(true);
  const previousDarkRef = useRef(true);
  const handleClose = useCallback(() => setNavOpen(false), []);

  useEffect(() => {
    let rafId = 0;
    const detectContrast = () => {
      const y = contrastSampleY();
      const w = window.innerWidth;
      const xPoints = [
        Math.max(12, Math.floor(w * 0.04)),
        Math.floor(w * 0.5),
        Math.min(w - 12, Math.floor(w * 0.96)),
      ];
      const luminances: number[] = [];
      for (const x of xPoints) {
        const el = document.elementFromPoint(x, y);
        const rgb = findOpaqueBackground(el);
        if (!rgb) continue;
        luminances.push(normalizedLuma(rgb[0], rgb[1], rgb[2]));
      }
      if (luminances.length === 0) return;
      const avg = luminances.reduce((a, b) => a + b, 0) / luminances.length;
      let next = previousDarkRef.current;
      if (avg <= 0.45) next = true;
      else if (avg >= 0.55) next = false;
      previousDarkRef.current = next;
      setOnDarkSection((prev) => (prev === next ? prev : next));
    };
    const schedule = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(detectContrast);
    };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  const navTone = onDarkSection
    ? "text-[rgba(255,255,255,0.9)] hover:text-white hover:opacity-90"
    : "text-[rgba(10,22,40,0.9)] hover:text-[rgba(10,22,40,1)] hover:opacity-90";

  return (
    <>
      <div className="fixed z-50 left-[var(--nav-chip-left)] right-[var(--nav-chip-right)] top-[48px]">
        {/*
          One DOM tree: mobile = logo full width, then nav + language on one row.
          md+ = single line: logo | gap | nav | flex spacer | language.
        */}
        <div className="grid min-w-0 w-full grid-cols-[minmax(0,1fr)_auto] grid-rows-[auto_auto] gap-x-3 gap-y-3 md:grid-cols-[auto_auto_1fr_auto] md:grid-rows-1 md:items-center md:gap-x-0 md:gap-y-0">
          <a
            href="https://www.dataofis.az"
            className="col-span-2 block w-fit shrink-0 justify-self-start opacity-100 transition-none hover:opacity-85 md:col-span-1 md:mr-[40px]"
            aria-label="Go to dataofis.az"
          >
            <DataOfisLogo onDarkSection={onDarkSection} />
          </a>
          <button
            type="button"
            onClick={() => setNavOpen(true)}
            aria-label="Open navigation"
            aria-expanded={navOpen}
            className={`col-start-1 row-start-2 inline-flex min-h-11 min-w-0 max-w-full justify-self-start px-2 py-2 transition-[color,opacity] duration-150 ease-out md:col-start-2 md:row-start-1 ${navTone}`}
            style={{ fontSize: "16px", fontWeight: 600 }}
          >
            <span className="inline-flex min-w-0 items-center gap-2">
              <svg
                className="shrink-0"
                width="16"
                height="16"
                viewBox="0 0 18 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              >
                <path d="M1 3h16M1 9h16M1 15h16" />
              </svg>
              <span className="min-w-0 select-none truncate tracking-tight">Decision Systems</span>
            </span>
          </button>
          <nav
            aria-label="Language"
            className="col-start-2 row-start-2 min-w-0 shrink-0 justify-self-end md:col-start-4 md:row-start-1 md:justify-self-end"
          >
            <LanguageSwitcher variant="header" onDarkSection={onDarkSection} />
          </nav>
        </div>
      </div>

      <NavigationOverlay locale={locale} isOpen={navOpen} onClose={handleClose} />
    </>
  );
}
