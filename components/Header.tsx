"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
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

function relativeLuminance(r: number, g: number, b: number): number {
  const toLinear = (v: number) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };
  const R = toLinear(r);
  const G = toLinear(g);
  const B = toLinear(b);
  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
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

export default function Header({ locale }: { locale: Locale }) {
  const [navOpen, setNavOpen] = useState(false);
  const [onDarkSection, setOnDarkSection] = useState(true);
  const previousDarkRef = useRef(true);
  const handleClose = useCallback(() => setNavOpen(false), []);

  useEffect(() => {
    let rafId = 0;
    const detectContrast = () => {
      const y = 62;
      const xPoints = [Math.max(20, window.innerWidth * 0.14), window.innerWidth * 0.5, window.innerWidth * 0.86];
      const luminances: number[] = [];
      for (const x of xPoints) {
        const el = document.elementFromPoint(Math.floor(x), y);
        const rgb = findOpaqueBackground(el);
        if (!rgb) continue;
        luminances.push(relativeLuminance(rgb[0], rgb[1], rgb[2]));
      }
      if (luminances.length === 0) return;
      const avg = luminances.reduce((a, b) => a + b, 0) / luminances.length;
      let next = previousDarkRef.current;
      if (avg <= 0.45) next = true;
      else if (avg >= 0.55) next = false;
      previousDarkRef.current = next;
      setOnDarkSection(next);
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
    ? "text-[rgba(255,255,255,0.92)] hover:text-white"
    : "text-[rgba(10,22,40,0.92)] hover:text-[rgba(10,22,40,1)]";

  return (
    <>
      <div
        className="fixed z-50"
        style={{
          top: "48px",
          left: "var(--nav-chip-left)",
        }}
      >
        <div className="flex items-center gap-[40px]">
          <a
            href="https://www.dataofis.az"
            className="inline-flex h-[28px] w-[140px] items-center transition-opacity duration-150 hover:opacity-85"
            aria-label="DataOfis main site"
          >
            <Image
              src={onDarkSection ? "/dark.png" : "/white.png"}
              alt="DataOfis"
              width={140}
              height={28}
              className="h-[28px] w-[140px] object-cover object-center"
              priority
            />
          </a>
          <button
            onClick={() => setNavOpen(true)}
            aria-label="Open navigation"
            aria-expanded={navOpen}
            className={`inline-flex min-h-11 items-center gap-2 px-2 py-2 transition-all duration-150 ease-out ${navTone}`}
          >
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
            <span className="select-none text-[16px] font-semibold leading-none tracking-tight">
              Decision Systems
            </span>
          </button>
        </div>
      </div>

      <div
        className="fixed z-50"
        style={{
          top: "48px",
          right: "var(--nav-chip-right)",
        }}
      >
        <nav aria-label="Language">
          <LanguageSwitcher variant="header" onDarkSection={onDarkSection} />
        </nav>
      </div>

      <NavigationOverlay locale={locale} isOpen={navOpen} onClose={handleClose} />
    </>
  );
}
