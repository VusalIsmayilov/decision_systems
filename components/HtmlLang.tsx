"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { isLocale } from "@/lib/i18n";

const htmlLang: Record<string, string> = {
  en: "en",
  az: "az",
  ru: "ru",
};

export default function HtmlLang() {
  const pathname = usePathname();
  const seg = pathname.split("/").filter(Boolean)[0];
  const lang =
    seg && isLocale(seg) ? (htmlLang[seg] ?? seg) : htmlLang.en;

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return null;
}
