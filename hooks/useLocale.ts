"use client";

import { usePathname } from "next/navigation";
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n";

export function useLocale(): Locale {
  const pathname = usePathname();
  const seg = pathname.split("/").filter(Boolean)[0];
  return seg && isLocale(seg) ? seg : defaultLocale;
}
