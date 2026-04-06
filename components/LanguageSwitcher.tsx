"use client";

import { Suspense } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { locales, stripLocalePrefix, withLocale } from "@/lib/i18n";

export type LanguageSwitcherVariant = "footer" | "header";

const headerShell =
  "flex min-h-11 items-center gap-1.5 border border-[rgba(10,22,40,0.24)] bg-[rgba(255,255,255,0.9)] px-[14px] py-2.5 text-[12px] font-normal tracking-tight text-[rgba(10,22,40,0.82)] shadow-none";

function LanguageSwitcherFallback({ variant }: { variant: LanguageSwitcherVariant }) {
  if (variant === "header") {
    return (
      <div className={headerShell} style={{ borderRadius: 0 }} aria-hidden>
        <span className="text-[rgba(10,22,40,0.82)]">EN</span>
        <span className="text-[rgba(10,22,40,0.35)]">/</span>
        <span className="text-[rgba(10,22,40,0.45)]">AZ</span>
        <span className="text-[rgba(10,22,40,0.35)]">/</span>
        <span className="text-[rgba(10,22,40,0.45)]">RU</span>
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

function LanguageSwitcherInner({ variant }: { variant: LanguageSwitcherVariant }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const stripped = stripLocalePrefix(pathname);
  const q = searchParams.toString();
  const pathWithQuery = q ? `${stripped}?${q}` : stripped;

  const sep =
    variant === "header"
      ? "text-[rgba(10,22,40,0.35)]"
      : "text-[rgba(255,255,255,0.65)]";

  const linkBase =
    variant === "header"
      ? "transition-colors duration-150"
      : "transition-colors";

  const linkActive =
    variant === "header"
      ? "text-[rgba(10,22,40,0.95)] font-medium pointer-events-none"
      : "text-[rgba(255,255,255,0.75)] pointer-events-none";

  const linkInactive =
    variant === "header"
      ? "text-[rgba(10,22,40,0.52)] hover:text-[rgba(10,22,40,0.88)]"
      : "text-[rgba(255,255,255,0.55)] hover:text-[rgba(255,255,255,0.9)]";

  const wrapClass =
    variant === "header"
      ? `${headerShell} select-none`
      : "flex items-center gap-1.5 text-sm text-[rgba(255,255,255,0.65)]";

  return (
    <div className={wrapClass} style={variant === "header" ? { borderRadius: 0 } : undefined}>
      {locales.map((loc, i) => {
        const active = pathname === withLocale(loc, "/") || pathname.startsWith(`/${loc}/`);
        return (
          <span key={loc} className="inline-flex items-center gap-1.5">
            {i > 0 ? <span className={sep} aria-hidden>/</span> : null}
            <Link
              href={withLocale(loc, pathWithQuery === "/" ? "/" : pathWithQuery)}
              className={`${linkBase} ${active ? linkActive : linkInactive}`}
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
}: {
  variant?: LanguageSwitcherVariant;
}) {
  return (
    <Suspense fallback={<LanguageSwitcherFallback variant={variant} />}>
      <LanguageSwitcherInner variant={variant} />
    </Suspense>
  );
}
