"use client";

import Image from "next/image";

/**
 * Two assets only: dark.png on dark/navy sections, white.png on light sections.
 * Slot is fixed 140×28; object-fit crops square sources without recoloring.
 */
export default function DataOfisLogo({
  onDarkSection,
  className = "",
}: {
  onDarkSection: boolean;
  className?: string;
}) {
  const src = onDarkSection ? "/dark.png" : "/white.png";

  return (
    <span
      className={`relative block h-[28px] w-[140px] shrink-0 overflow-hidden ${className}`}
    >
      <Image
        src={src}
        alt="DataOfis"
        fill
        className="object-cover object-center transition-none"
        sizes="(min-width: 768px) 220px, 180px"
        priority
      />
    </span>
  );
}
