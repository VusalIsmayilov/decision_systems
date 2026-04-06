"use client";

import Link from "next/link";
import { useLocale } from "@/hooks/useLocale";
import { withLocale } from "@/lib/i18n";

export default function ReturnLink() {
  const locale = useLocale();
  return (
    <Link
      href={withLocale(locale, "/")}
      className="inline-flex items-center gap-1.5 text-sm font-medium tracking-tight text-[rgba(10,22,40,0.40)] hover:text-[rgba(10,22,40,0.72)] transition-colors mb-10"
    >
      ← Overview
    </Link>
  );
}
