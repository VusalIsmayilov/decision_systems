import { type ReactNode } from 'react';

type PromptFrameProps = {
  id?: string;

  // small label (optional)
  label?: string;

  // main cognitive trigger
  headline: ReactNode;

  // optional supporting lines (kept minimal, no structure)
  supportLines?: string[];
};

export default function PromptFrame({
  id = 'prompt-frame',
  label,
  headline,
  supportLines = [],
}: PromptFrameProps) {
  return (
    <section
      id={id}
      className="w-full bg-[#0A1628] scroll-mt-[var(--header-offset)]"
    >
      <div className="mx-auto w-full max-w-[1040px] px-10 pt-[var(--header-offset)] pb-24 max-md:px-5 max-md:pb-16 lg:pt-28">

        {/* LABEL */}
        {label && (
          <div className="mb-6">
            <p className="text-[12px] tracking-[0.12em] uppercase text-[rgba(194,209,232,0.6)]">
              {label}
            </p>
          </div>
        )}

        {/* HEADLINE */}
        <div className="max-w-[720px]">
          <h2 className="text-[40px] font-bold leading-[1.1] tracking-[-0.02em] text-white max-md:text-[32px] max-sm:text-[26px]">
            {headline}
          </h2>
        </div>

        {/* DIVIDER */}
        <div className="mt-8 border-t border-[rgba(255,255,255,0.08)]" />

        {/* SUPPORT (optional, no hierarchy) */}
        {supportLines.length > 0 && (
          <div className="mt-8 max-w-[640px] space-y-4 text-[16px] leading-[1.55] text-[rgba(194,209,232,0.78)] max-sm:text-[15px]">
            {supportLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}