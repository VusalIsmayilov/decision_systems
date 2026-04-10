"use client";

import { Suspense } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { locales, stripLocalePrefix, withLocale } from "@/lib/i18n";

export type LanguageSwitcherVariant = "footer" | "header";

function LanguageSwitcherFallback({
  variant,
  onDarkSection,
}: {
  variant: LanguageSwitcherVariant;
  onDarkSection: boolean;
}) {
  if (variant === "header") {
    const active = onDarkSection ? "text-white" : "text-[#0A1628]";
    const sep = onDarkSection ? "text-[rgba(255,255,255,0.45)]" : "text-[rgba(10,22,40,0.35)]";
    const inactive = onDarkSection ? "text-[rgba(255,255,255,0.62)]" : "text-[rgba(10,22,40,0.55)]";
    return (
      <div className="flex min-h-11 select-none items-center gap-1.5 px-2 py-2 text-[12px] font-medium tracking-tight" aria-hidden>
        <span className={`font-semibold ${active}`}>EN</span>
        <span className={sep}>/</span>
        <span className={inactive}>AZ</span>
        <span className={sep}>/</span>
        <span className={inactive}>RU</span>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-1.5 text-sm text-[rgba(255,255,255,0.65)]">
      <span className="text-[rgba(255,255,255,0.75)]">EN</span>
      <span aria-hidden>/</span>
      <span>AZ</span>
      <span aria-hidden>/</span>
      <span>RU</span>
    </div>
  );
}

function LanguageSwitcherInner({
  variant,
  onDarkSection,
}: {
  variant: LanguageSwitcherVariant;
  onDarkSection: boolean;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const stripped = stripLocalePrefix(pathname);
  const q = searchParams.toString();
  const pathWithQuery = q ? `${stripped}?${q}` : stripped;

  const sep = variant === "header"
    ? onDarkSection
      ? "text-[rgba(255,255,255,0.45)]"
      : "text-[rgba(10,22,40,0.35)]"
    : "text-[rgba(255,255,255,0.65)]";

  const linkBase =
    variant === "header"
      ? "transition-[color,opacity] duration-150 ease-out"
      : "transition-colors";

  const linkActive =
    variant === "header"
      ? onDarkSection
        ? "text-white font-semibold pointer-events-none"
        : "text-[#0A1628] font-semibold pointer-events-none"
      : "text-[rgba(255,255,255,0.75)] pointer-events-none";

  const linkInactive =
    variant === "header"
      ? onDarkSection
        ? "text-[rgba(255,255,255,0.62)] hover:text-white"
        : "text-[rgba(10,22,40,0.52)] hover:text-[rgba(10,22,40,0.88)]"
      : "text-[rgba(255,255,255,0.55)] hover:text-[rgba(255,255,255,0.9)]";

  const wrapClass =
    variant === "header"
      ? "flex min-h-11 select-none items-center gap-1.5 px-2 py-2 text-[12px] font-medium tracking-tight"
      : "flex items-center gap-1.5 text-sm text-[rgba(255,255,255,0.65)]";

  return (
    <div className={wrapClass}>
      {locales.map((loc, i) => {
        const active = pathname === withLocale(loc, "/") || pathname.startsWith(`/${loc}/`);
        return (
          <span key={loc} className="inline-flex items-center gap-1.5">
            {i > 0 ? <span className={sep} aria-hidden>/</span> : null}
            <Link
              href={withLocale(loc, pathWithQuery === "/" ? "/" : pathWithQuery)}
              className={`${linkBase} ${active ? linkActive : linkInactive} ${
                variant === "header"
                  ? "inline-flex min-h-11 min-w-[2.75rem] items-center justify-center px-1"
                  : ""
              }`}
              hrefLang={loc === "en" ? "en" : loc === "az" ? "az" : "ru"}
              aria-current={active ? "true" : undefined}
            >
              {loc.toUpperCase()}
            </Link>
          </span>
        );
      })}
    </div>
  );
}

export default function LanguageSwitcher({
  variant = "footer",
  onDarkSection = false,
}: {
  variant?: LanguageSwitcherVariant;
  onDarkSection?: boolean;
}) {
  return (
    <Suspense fallback={<LanguageSwitcherFallback variant={variant} onDarkSection={onDarkSection} />}>
      <LanguageSwitcherInner variant={variant} onDarkSection={onDarkSection} />
    </Suspense>
  );
}
