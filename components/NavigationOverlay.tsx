"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { stripLocalePrefix, withLocale } from "@/lib/i18n";

// ─── Data ────────────────────────────────────────────────────────────────────

type NavItem = { label: string; desc: string; href: string };

type NavCategory = {
  id: string;
  label: string;
  descriptor: string;
  href: string;
  statement: string;
  items?: NavItem[];
  cta?: { label: string; desc: string };
};

const NAV_CATEGORIES: NavCategory[] = [
  {
    id: "home",
    label: "Home",
    descriptor: "Control over the data and AI system",
    href: "/",
    statement:
      "Your data system is not under control.\n\nMost organizations operate in a fragmented state—where ownership is distributed and decisions do not form within a single system.\n\nControl is a structural position, not a matter of tools or investment.",
  },
  {
    id: "how-we-work",
    label: "How We Work",
    descriptor: "One system. Not separate efforts.",
    href: "/how-we-work",
    statement:
      "A single system. Not separate efforts.\n\nDirection, structure, and execution operate together under unified control.",
  },
  {
    id: "services",
    label: "Services",
    descriptor: "End-to-end ownership of the data and AI function as one system",
    href: "/services",
    statement:
      "The data and AI function, operated as one system\n\nDirection, structure, and execution operate together under a single model of control.",
  },
  {
    id: "industries",
    label: "Industries",
    descriptor: "Organizations operating at scale where data control is a strategic requirement",
    href: "/industries",
    statement:
      "Fragmented across teams without a single point of control.\n\nThis is not a difference in tools or investment. It is a difference in how the function is owned and run.\n\nThis defines whether the organization operates under control or fragmentation.",
  },
  {
    id: "insights",
    label: "Insights",
    descriptor: "Where control over the data function is defined",
    href: "/insights",
    statement:
      "Control over the data and AI function is a distinct executive position.\n\nThese insights examine the distinction between a controlled system and fragmented activity at the level of ownership and structure.",
  },
  {
    id: "about",
    label: "About",
    descriptor: "A firm defined by the system it enforces",
    href: "/about",
    statement:
      "This firm exists to establish control.\n\nMost organizations do not operate the data and AI function as a controlled system.\n\nThis firm exists because that condition persists.",
  },
  {
    id: "executive-data-review",
    label: "Schedule Review",
    descriptor: "Initiate executive-level assessment",
    href: "/executive-data-review",
    statement:
      "Proceed with a focused executive assessment of whether your data function operates under control.",
    cta: {
      label: "Schedule Executive Data Review",
      desc: "Senior-level engagement. Not a sales call.",
    },
  },
];

// Gap between sub-items: tighter for plain bullet lists, wider when items have descs
function item_gap(cat: NavCategory): string {
  const hasDescs = cat.items?.some((i) => i.desc);
  return hasDescs ? "28px" : "16px";
}

// Pre-select the chapter that matches the current page when overlay opens
function getInitialChapterId(pathname: string): string {
  const p = stripLocalePrefix(pathname);
  if (p.startsWith("/executive-data-review")) return "executive-data-review";
  if (p.startsWith("/how-we-work")) return "how-we-work";
  if (p.startsWith("/services")) return "services";
  if (p.startsWith("/industries")) return "industries";
  if (p.startsWith("/insights")) return "insights";
  if (p.startsWith("/about")) return "about";
  if (p === "/") return "home";
  return "home";
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
      exitTimerRef.current = setTimeout(() => setMounted(false), 290);
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
      const initial = getInitialChapterId(pathname);
      setActiveId(initial);
      setDisplayedId(initial);
      displayedIdRef.current = initial;
      setPhase("idle");
      if (chapterTimerRef.current) clearTimeout(chapterTimerRef.current);
    }
  }, [isOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!mounted) return null;

  const active = NAV_CATEGORIES.find((c) => c.id === displayedId)!;

  return (
    <div
      className={`${overlayClass} fixed inset-0 z-[60] flex flex-col overflow-hidden`}
      style={{ background: "#06101e" }}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation"
    >
      {/* ── Top bar ── */}
      <div className="flex-shrink-0 border-b border-[rgba(255,255,255,0.05)]">
        <div
          className="flex w-full items-center justify-between px-5 md:px-10"
          style={{ height: "72px" }}
        >
          <Link
            href={L("/")}
            onClick={handleClose}
            className="-mx-2 inline-flex min-h-11 items-center px-2 text-base font-semibold tracking-tight text-white transition-opacity hover:opacity-75"
          >
            DataOfis Partners
          </Link>

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
            className="flex shrink-0 flex-col justify-start py-8 md:py-10 md:pb-12"
            style={{ width: "38%" }}
          >
            <nav aria-label="Primary navigation">
              <ul className="flex flex-col" style={{ gap: "40px" }}>
                {NAV_CATEGORIES.map((cat) => {
                  const isActive = cat.id === activeId;
                  return (
                    <li key={cat.id}>
                      <button
                        type="button"
                        onMouseEnter={() => selectChapter(cat.id)}
                        onFocus={() => selectChapter(cat.id)}
                        onClick={() => {
                          if (activeId !== cat.id) {
                            selectChapter(cat.id);
                            return;
                          }
                          handleClose();
                          window.location.href = L(cat.href);
                        }}
                        className="w-full cursor-pointer py-2 text-left"
                      >
                        <span
                          className="block transition-all duration-200"
                          style={{
                            fontSize: "40px",
                            fontWeight: isActive ? 700 : 500,
                            lineHeight: "48px",
                            color: isActive
                              ? "#ffffff"
                              : "rgba(255, 255, 255, 0.58)",
                          }}
                        >
                          {cat.label}
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
                          {cat.descriptor}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>


          {/* Right column — 62% */}
          <div className="flex min-w-0 flex-1 flex-col justify-start py-8 pl-10 md:py-10 md:pb-12 md:pl-14">
            <div className={phase === "exiting" ? "chapter-exit" : "chapter-enter"}>

              {/* Panel title — strong headline */}
              <p
                className="mb-7"
                style={{
                  fontSize: "36px",
                  fontWeight: 700,
                  lineHeight: "44px",
                  color: "#ffffff",
                }}
              >
                {active.label}
              </p>

              {/* Statement — first para anchors the panel */}
              <div className="mb-12" style={{ maxWidth: "560px" }}>
                {active.statement.split("\n\n").map((para, i) => (
                  <p
                    key={i}
                    className={i > 0 ? "mt-5" : ""}
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
                    href={L("/executive-data-review")}
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
                    className="-mx-2 mb-1.5 block px-2 py-2 text-white transition-opacity hover:opacity-75"
                    style={{
                      fontSize: "22px",
                      fontWeight: 700,
                      lineHeight: "30px",
                    }}
                  >
                    {cat.label}
                  </Link>
                  <p
                    className="mb-5"
                    style={{
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.38)",
                      lineHeight: "20px",
                    }}
                  >
                    {cat.descriptor}
                  </p>

                  {cat.items && (
                    <ul className="flex flex-col gap-3">
                      {cat.items.map((item) => (
                        <li key={item.label}>
                          <Link
                            href={L(item.href)}
                            onClick={handleClose}
                            className="-mx-2 block px-2 py-2.5 transition-opacity hover:opacity-80"
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
                        href={L("/executive-data-review")}
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
