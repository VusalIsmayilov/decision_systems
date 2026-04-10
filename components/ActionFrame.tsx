import Link from 'next/link';
import { type ReactNode } from 'react';

type ActionFrameProps = {
  id?: string;

  // small orientation label (optional)
  label?: string;

  // main action headline
  headline: ReactNode;

  // short supporting context (1–3 lines max)
  supportLines?: string[];

  cta?: {
    label: string;
    href: string;
  };
};

export default function ActionFrame({
  id = 'action-frame',
  label,
  headline,
  supportLines = [],
  cta,
}: ActionFrameProps) {
  return (
    <section
      id={id}
      className="w-full bg-[#0A1628] scroll-mt-[var(--header-offset)]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-10 pt-[var(--header-offset)] pb-24 max-md:px-5 max-md:pb-16 lg:pt-32 xl:pt-[8.5rem]">

        {/* LABEL */}
        {label && (
          <div className="mb-8">
            <p className="text-[12px] tracking-[0.12em] uppercase text-[rgba(194,209,232,0.6)]">
              {label}
            </p>
          </div>
        )}

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-[55fr_45fr] gap-y-10 md:gap-x-10 lg:gap-x-14">

          {/* LEFT — HEADLINE */}
          <div className="max-w-[560px]">
            <h1 className="text-[56px] font-bold leading-[1.02] tracking-[-0.03em] text-white max-md:text-[42px] max-sm:text-[32px]">
              {headline}
            </h1>
          </div>

          {/* RIGHT — CONTEXT + CTA */}
          <div className="max-w-[520px] md:ml-auto">

            {supportLines.length > 0 && (
              <div className="space-y-3 text-[17px] leading-[1.56] max-sm:text-[16px]">
                {supportLines.map((line, i) => (
                  <p
                    key={line}
                    className={
                      i === 0
                        ? 'text-white/90 font-medium'
                        : 'text-[rgba(194,209,232,0.82)]'
                    }
                  >
                    {line}
                  </p>
                ))}
              </div>
            )}

            {cta && (
              <div className="mt-10">
                <Link
                  href={cta.href}
                  className="inline-flex items-center text-[16px] font-semibold text-white underline underline-offset-4 hover:text-white/90"
                >
                  {cta.label}
                </Link>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}