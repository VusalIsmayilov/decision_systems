import SectionWrapper from '@/components/SectionWrapper';
import Link from 'next/link';
import { type ReactNode } from 'react';

type AsymmetricSplitReframeProps = {
  id?: string;
  heading: ReactNode;
  intro: string;

  // LEFT — negation field
  negatives: string[];

  // RIGHT — definition + reinforcement (FULL, no reduction)
  definition: string[];
  reinforcement?: string[];
  cta?: { label: string; href: string };
};

export default function AsymmetricSplitReframe({
  id = 'asymmetric-split-reframe',
  heading,
  intro,
  negatives,
  definition,
  reinforcement = [],
  cta,
}: AsymmetricSplitReframeProps) {
  return (
    <SectionWrapper bg="navy" id={id}>
      <div className="mx-auto w-full max-w-[1040px]">

        {/* TOP */}
        <div className="max-w-[720px]">
          <h2 className="text-[30px] font-bold leading-[1.1] tracking-[-0.02em] text-white max-sm:text-[24px]">
            {heading}
          </h2>

          <p className="mt-4 max-w-[640px] text-[16px] leading-[1.55] text-[rgba(194,209,232,0.82)] max-sm:text-[15px]">
            {intro}
          </p>
        </div>

        <div className="mt-10 border-t border-[rgba(255,255,255,0.08)]" />

        {/* SPLIT */}
        <div className="mt-10 grid grid-cols-1 gap-y-12 md:grid-cols-[44fr_56fr] md:gap-x-20">

          {/* LEFT — NEGATION STACK */}
          <div className="max-w-[360px] space-y-4">
            {negatives.map((line) => (
              <p
                key={line}
                className="text-[15px] leading-[1.55] text-[rgba(194,209,232,0.65)] max-sm:text-[14px]"
              >
                {line}
              </p>
            ))}
          </div>

          {/* RIGHT — REFRAME */}
          <div className="min-w-0 border-t border-[rgba(255,255,255,0.06)] pt-8 md:border-t-0 md:border-l md:pl-12 md:pt-0">

            <div className="max-w-[520px] space-y-4">
              {definition.map((line, index) => (
                <p
                  key={line}
                  className={
                    index === 0
                      ? 'text-[17px] font-medium leading-[1.55] text-white max-sm:text-[16px]'
                      : 'text-[16px] leading-[1.55] text-[rgba(194,209,232,0.82)] max-sm:text-[15px]'
                  }
                >
                  {line}
                </p>
              ))}
            </div>

            {reinforcement.length > 0 && (
              <div className="mt-6 max-w-[460px] space-y-2">
                {reinforcement.map((line) => (
                  <p
                    key={line}
                    className="text-[16px] font-semibold leading-[1.5] text-white max-sm:text-[15px]"
                  >
                    {line}
                  </p>
                ))}
              </div>
            )}

          </div>
        </div>

        {cta && (
          <div className="mt-12 flex w-full justify-end md:mt-14">
            <Link
              href={cta.href}
              className="inline-flex min-h-11 items-center text-[15px] font-semibold leading-[1.45] tracking-tight text-white/92 underline-offset-4 transition-colors duration-150 hover:text-white hover:underline max-sm:text-[14px]"
            >
              {cta.label}
            </Link>
          </div>
        )}

      </div>
    </SectionWrapper>
  );
}