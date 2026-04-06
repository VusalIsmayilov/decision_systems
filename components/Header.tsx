"use client";

import { useState, useCallback } from "react";
import NavigationOverlay from "./NavigationOverlay";
import LanguageSwitcher from "./LanguageSwitcher";
import type { Locale } from "@/lib/i18n";

export default function Header({ locale }: { locale: Locale }) {
  const [navOpen, setNavOpen] = useState(false);
  const handleClose = useCallback(() => setNavOpen(false), []);

  return (
    <>
      {/*
       * Fixed nav trigger — `top` 48px by design. `left` is `--nav-chip-left`
       * (column-aligned below lg; lg+ matches `--page-x` viewport gutter).
       * Language switcher mirrors placement on the right via `--nav-chip-right`.
       */}
      <div
        className="fixed z-50"
        style={{
          top: "48px",
          left: "var(--nav-chip-left)",
        }}
      >
        <button
          onClick={() => setNavOpen(true)}
          aria-label="Open navigation"
          aria-expanded={navOpen}
          className="flex min-h-11 items-center gap-2 px-[14px] py-2.5 text-[rgba(10,22,40,0.82)] border border-[rgba(10,22,40,0.24)] bg-[rgba(255,255,255,0.9)] hover:text-[rgba(10,22,40,0.95)] hover:border-[rgba(10,22,40,0.34)] hover:bg-[rgba(255,255,255,0.98)] transition-colors duration-150"
          style={{ borderRadius: 0 }}
        >
          <svg
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
          <span
            className="tracking-tight select-none"
            style={{ fontSize: "12px", fontWeight: 400 }}
          >
            DataOfis Partners
          </span>
        </button>
      </div>

      <div
        className="fixed z-50"
        style={{
          top: "48px",
          right: "var(--nav-chip-right)",
        }}
      >
        <nav aria-label="Language">
          <LanguageSwitcher variant="header" />
        </nav>
      </div>

      <NavigationOverlay locale={locale} isOpen={navOpen} onClose={handleClose} />
    </>
  );
}
