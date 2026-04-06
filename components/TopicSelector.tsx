"use client";

import Link from "next/link";
import { useLocale } from "@/hooks/useLocale";
import { withLocale } from "@/lib/i18n";

const topics = [
  { label: "Direction", href: "/services#direction" },
  { label: "Structure", href: "/services#organization" },
  { label: "Execution", href: "/services#execution" },
  { label: "Architecture", href: "/services#architecture" },
];

export default function TopicSelector() {
  const locale = useLocale();
  return (
    <div className="mx-auto w-full max-w-[1280px] px-5 md:px-10">
      <div className="flex flex-wrap justify-center gap-4 overflow-x-auto">
        {topics.map((topic) => (
          <Link
            key={topic.href}
            href={withLocale(locale, topic.href)}
            className="inline-flex min-w-0 flex-1 items-center justify-center whitespace-nowrap rounded-full border border-[rgba(10,22,40,0.1)] px-6 py-3 font-medium text-[rgba(10,22,40,0.52)] transition-colors hover:border-[rgba(10,22,40,0.28)] hover:text-navy"
            style={{ fontSize: "20px", minWidth: "165px", maxWidth: "240px" }}
          >
            {topic.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
