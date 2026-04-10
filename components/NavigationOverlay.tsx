"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { stripLocalePrefix, withLocale } from "@/lib/i18n";
import { getNavOverlayChapterId } from "@/lib/siteNav";
import {
  NAV_MENU_CATEGORIES,
  navMenuCenterBlockParagraphs,
  type NavMenuCategory,
} from "@/lib/navMenu";

const MAIN_SITE_URL = "https://www.dataofis.az";

const NAV_CATEGORIES = NAV_MENU_CATEGORIES;

function resolveCtaHref(locale: Locale, href: string): string {
  if (href.startsWith("http://") || href.startsWith("https://")) {
    return href;
  }
  return withLocale(locale, href);
}

// Gap between sub-items: tighter for plain bullet lists, wider when items have descs
function item_gap(cat: NavMenuCategory): string {
  const hasDescs = cat.items?.some((i) => i.desc);
  return hasDescs ? "28px" : "16px";
}

function collectNavPrefetchHrefs(locale: Locale): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  const add = (path: string) => {
    if (path.startsWith("http://") || path.startsWith("https://")) return;
    const href = withLocale(locale, path);
    if (!seen.has(href)) {
      seen.add(href);
      out.push(href);
    }
  };
  for (const cat of NAV_CATEGORIES) {
    add(cat.href);
    cat.items?.forEach((i) => add(i.href));
    if (cat.cta) add(cat.cta.href);
  }
  return out;
}

// ─── Component ────────────────────────────────────────────────────────────────

interface Props {
  locale: Locale;
  isOpen: boolean;
  onClose: () => void;
}

export default function NavigationOverlay({ locale, isOpen, onClose }: Props) {
  // activeId: left nav highlight (updates instantly on hover)
  // displayedId: right panel content (updates after exit animation)
  const [activeId, setActiveId] = useState<string>(NAV_CATEGORIES[0].id);
  const [displayedId, setDisplayedId] = useState<string>(NAV_CATEGORIES[0].id);
  const [phase, setPhase] = useState<"idle" | "exiting">("idle");
  const [mounted, setMounted] = useState(false);
  const [overlayClass, setOverlayClass] = useState("nav-overlay-enter");

  const pathname = usePathname();
  const router = useRouter();
  const L = (path: string) => withLocale(locale, path);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const exitTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const chapterTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const displayedIdRef = useRef(NAV_CATEGORIES[0].id);

  const handleClose = useCallback(() => onClose(), [onClose]);

  // Chapter transition: left nav highlights instantly, right panel transitions
  const selectChapter = useCallback((id: string) => {
    setActiveId(id);
    if (id === displayedIdRef.current) return;
    displayedIdRef.current = id;
    setPhase("exiting");
    if (chapterTimerRef.current) clearTimeout(chapterTimerRef.current);
    chapterTimerRef.current = setTimeout(() => {
      setDisplayedId(id);
      setPhase("idle");
    }, 200);
  }, []);

  // Mount/exit lifecycle — keeps component alive during exit animation
  useEffect(() => {
    if (isOpen) {
      if (exitTimerRef.current) clearTimeout(exitTimerRef.current);
      setMounted(true);
      setOverlayClass("nav-overlay-enter");
    } else if (mounted) {
      setOverlayClass("nav-overlay-exit");
      exitTimerRef.current = setTimeout(() => setMounted(false), 220);
    }
    return () => {
      if (exitTimerRef.current) clearTimeout(exitTimerRef.current);
    };
  }, [isOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    handleClose();
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, handleClose]);

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => closeButtonRef.current?.focus());
    } else {
      document.body.style.overflow = "";
      previousFocusRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Pre-select the chapter matching the current page when overlay opens
  useEffect(() => {
    if (isOpen) {
      const initial = getNavOverlayChapterId(stripLocalePrefix(pathname));
      setActiveId(initial);
      setDisplayedId(initial);
      displayedIdRef.current = initial;
      setPhase("idle");
      if (chapterTimerRef.current) clearTimeout(chapterTimerRef.current);
    }
  }, [isOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!isOpen) return;
    for (const href of collectNavPrefetchHrefs(locale)) {
      router.prefetch(href);
    }
  }, [isOpen, locale, router]);

  if (!mounted) return null;

  const active = NAV_CATEGORIES.find((c) => c.id === displayedId)!;

  return (
    <div
      className={`${overlayClass} fixed inset-0 z-[60] flex flex-col overflow-hidden`}
      style={{ background: "#06101e" }}
      role="dialog"
      aria-modal="true"
      aria-label="DataOfis Decision Systems Design navigation"
    >
      {/* ── Top bar ── */}
      <div className="flex-shrink-0 border-b border-[rgba(255,255,255,0.05)]">
        <div
          className="flex w-full items-center justify-between px-5 md:px-10"
          style={{ height: "72px" }}
        >
          <a
            href={MAIN_SITE_URL}
            onClick={handleClose}
            className="-mx-2 inline-flex min-h-11 min-w-0 max-w-[min(100%,calc(100vw-5rem))] items-center break-words px-2 pr-3 text-left text-base font-bold leading-snug tracking-tight text-white transition-opacity hover:opacity-75 sm:max-w-[min(100%,520px)] sm:text-lg"
          >
            DataOfis (← main page)
          </a>

          <button
            ref={closeButtonRef}
            onClick={handleClose}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center text-[rgba(255,255,255,0.32)] transition-colors hover:text-[rgba(255,255,255,0.75)]"
            aria-label="Close navigation"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M4 4l12 12M16 4L4 16" />
            </svg>
          </button>
        </div>
      </div>

      {/* ── Content area ──
          min-h-0: flex child may shrink so overflow-y-auto can scroll (14" laptop + tall nav).
          No h-full on inner row: content height drives scroll, avoids justify-center clipping. */}
      <div className="nav-overlay-content min-h-0 flex-1 overflow-y-auto overscroll-y-contain">

        {/* ── Two-column: md landscape; lg+ only if min-height ≥640px (short portrait tablets keep stacked). ── */}
        <div className="hidden w-full items-start px-5 md:px-10 md:landscape:flex [@media(min-width:1024px)_and_(min-height:640px)]:flex">

          {/* Left column — 38% */}
          <div
            className="flex min-w-0 shrink-0 flex-col justify-start py-8 md:py-10 md:pb-12"
            style={{ width: "38%" }}
          >
            <nav aria-label="Primary navigation">
              <ul className="flex flex-col" style={{ gap: "40px" }}>
                {NAV_CATEGORIES.map((cat) => {
                  const isActive = cat.id === activeId;
                  return (
                    <li key={cat.id}>
                      <Link
                        href={L(cat.href)}
                        onMouseEnter={() => selectChapter(cat.id)}
                        onFocus={() => selectChapter(cat.id)}
                        onClick={handleClose}
                        className="block w-full cursor-pointer py-2 text-left"
                      >
                        <span
                          className="block break-words transition-all duration-200"
                          style={{
                            fontSize: "clamp(28px, 3.2vw, 40px)",
                            fontWeight: isActive ? 700 : 500,
                            lineHeight: "clamp(32px, 3.6vw, 48px)",
                            color: isActive
                              ? "#ffffff"
                              : "rgba(255, 255, 255, 0.58)",
                          }}
                        >
                          {cat.title}
                        </span>
                        <span
                          className="block transition-all duration-200 mt-1.5"
                          style={{
                            fontSize: "13px",
                            fontWeight: 400,
                            lineHeight: "20px",
                            color: isActive
                              ? "rgba(255,255,255,0.45)"
                              : "rgba(255,255,255,0.28)",
                            maxWidth: "88%",
                          }}
                        >
                          {cat.subline}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>


          {/* Right column — 62% */}
          <div className="flex min-w-0 flex-1 flex-col justify-center py-8 pl-6 md:py-10 md:pb-12 md:pl-10 lg:pl-14">
            <div className={phase === "exiting" ? "chapter-exit" : "chapter-enter"}>

              {/* Panel title — strong headline */}
              <p
                className="mb-7 break-words"
                style={{
                  fontSize: "clamp(24px, 2.8vw, 36px)",
                  fontWeight: 700,
                  lineHeight: "clamp(30px, 3.2vw, 44px)",
                  color: "#ffffff",
                }}
              >
                {active.title}
              </p>

              {/* Center block — first para anchors the panel */}
              <div className="mb-12" style={{ maxWidth: "560px" }}>
                {navMenuCenterBlockParagraphs(active.centerBlock).map((para, i) => (
                  <p
                    key={i}
                    className={`whitespace-pre-line ${i > 0 ? "mt-5" : ""}`}
                    style={{
                      fontSize: i === 0 ? "22px" : "17px",
                      fontWeight: i === 0 ? 500 : 400,
                      lineHeight: i === 0 ? "34px" : "28px",
                      color: i === 0
                        ? "rgba(255,255,255,0.90)"
                        : "rgba(255,255,255,0.52)",
                    }}
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Sub-items with descriptions */}
              {active.items && (
                <ul className="flex flex-col" style={{ gap: item_gap(active) }}>
                  {active.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={L(item.href)}
                        onClick={handleClose}
                        className="group/link block py-1.5"
                      >
                        <span
                          className="block transition-colors duration-150 group-hover/link:text-white"
                          style={{
                            fontSize: item.desc ? "17px" : "16px",
                            fontWeight: item.desc ? 600 : 400,
                            lineHeight: "26px",
                            color: item.desc
                              ? "rgba(255,255,255,0.82)"
                              : "rgba(255,255,255,0.62)",
                          }}
                        >
                          {item.label}
                        </span>
                        {item.desc && (
                          <span
                            className="block mt-0.5"
                            style={{
                              fontSize: "14px",
                              fontWeight: 400,
                              lineHeight: "22px",
                              color: "rgba(255,255,255,0.38)",
                            }}
                          >
                            {item.desc}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}

              {/* CTA */}
              {active.cta && (
                <div className="mt-8">
                  <Link
                    href={resolveCtaHref(locale, active.cta.href)}
                    onClick={handleClose}
                    className="inline-flex min-h-11 items-center px-6 py-4 transition-colors duration-200 hover:opacity-90"
                    style={{
                      background: "#2B5CE6",
                      color: "#ffffff",
                      fontSize: "14px",
                      fontWeight: 600,
                      letterSpacing: "0.02em",
                      borderRadius: 0,
                    }}
                  >
                    {active.cta.label}
                  </Link>
                  {active.cta.desc ? (
                    <p
                      className="mt-3"
                      style={{
                        fontSize: "13px",
                        color: "rgba(255,255,255,0.32)",
                        lineHeight: "20px",
                      }}
                    >
                      {active.cta.desc}
                    </p>
                  ) : null}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ── Stacked: default; hidden md landscape or lg+tall (two-col above). ── */}
        <div className="px-5 py-10 md:px-10 md:landscape:hidden [@media(min-width:1024px)_and_(min-height:640px)]:hidden">
          <nav aria-label="Primary navigation">
            <ul className="flex flex-col gap-10">
              {NAV_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={L(cat.href)}
                    onClick={handleClose}
                    className="-mx-2 mb-1.5 flex min-h-11 items-center break-words px-2 py-3 text-white transition-opacity hover:opacity-75"
                    style={{
                      fontSize: "22px",
                      fontWeight: 700,
                      lineHeight: "30px",
                    }}
                  >
                    {cat.title}
                  </Link>
                  <p
                    className="mb-5"
                    style={{
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.38)",
                      lineHeight: "20px",
                    }}
                  >
                    {cat.subline}
                  </p>

                  {cat.items && (
                    <ul className="flex flex-col gap-3">
                      {cat.items.map((item) => (
                        <li key={item.label}>
                          <Link
                            href={L(item.href)}
                            onClick={handleClose}
                            className="-mx-2 flex min-h-11 min-w-0 items-start px-2 py-3 transition-opacity hover:opacity-80"
                          >
                            <span
                              className="block"
                              style={{
                                fontSize: item.desc ? "15px" : "14px",
                                fontWeight: item.desc ? 600 : 400,
                                lineHeight: "24px",
                                color: item.desc
                                  ? "rgba(255,255,255,0.75)"
                                  : "rgba(255,255,255,0.58)",
                              }}
                            >
                              {item.label}
                            </span>
                            {item.desc && (
                              <span
                                className="block mt-0.5"
                                style={{
                                  fontSize: "13px",
                                  fontWeight: 400,
                                  lineHeight: "20px",
                                  color: "rgba(255,255,255,0.35)",
                                }}
                              >
                                {item.desc}
                              </span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}

                  {cat.cta && (
                    <div className="mt-5">
                      <Link
                        href={resolveCtaHref(locale, cat.cta.href)}
                        onClick={handleClose}
                        className="inline-flex min-h-11 items-center px-5 py-3 transition-colors duration-200 hover:opacity-90"
                        style={{
                          background: "#2B5CE6",
                          color: "#ffffff",
                          fontSize: "14px",
                          fontWeight: 600,
                          borderRadius: 0,
                        }}
                      >
                        {cat.cta.label}
                      </Link>
                      {cat.cta.desc ? (
                        <p
                          className="mt-3"
                          style={{
                            fontSize: "13px",
                            color: "rgba(255,255,255,0.32)",
                            lineHeight: "20px",
                          }}
                        >
                          {cat.cta.desc}
                        </p>
                      ) : null}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
