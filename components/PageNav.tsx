"use client";

import Link from "next/link";
import { useLocale } from "@/hooks/useLocale";
import { withLocale } from "@/lib/i18n";

interface PageNavProps {
  next?: { label: string; href: string };
}

export default function PageNav({ next }: PageNavProps) {
  const locale = useLocale();
  return (
    <section className="py-10 md:py-12 border-t border-[rgba(10,22,40,0.07)]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-start gap-4 px-5 md:flex-row md:items-center md:justify-between md:px-10">
        <Link
          href={withLocale(locale, "/")}
          className="text-sm font-medium text-[rgba(10,22,40,0.45)] hover:text-[rgba(10,22,40,0.78)] transition-colors"
        >
          ← Return to overview
        </Link>
        {next && (
          <Link
            href={withLocale(locale, next.href)}
            className="text-sm font-medium text-[rgba(10,22,40,0.45)] hover:text-[rgba(10,22,40,0.78)] transition-colors"
          >
            {next.label} →
          </Link>
        )}
      </div>
    </section>
  );
}
