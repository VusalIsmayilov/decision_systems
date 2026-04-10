import SectionWrapper from '@/components/SectionWrapper';
import { type ReactNode } from 'react';

type ConstraintStackOutcomeProps = {
  id?: string;

  heading: ReactNode;

  // left intro (can be 1+ lines)
  introLeftLines: string[];

  // stack
  items: string[];

  // right bottom block (FULL, no reduction)
  conclusionLines: string[];
};

export default function ConstraintStackOutcome({
  id = 'constraint-stack-outcome',
  heading,
  introLeftLines = [],
  items = [],
  conclusionLines = [],
}: ConstraintStackOutcomeProps) {
  return (
    <SectionWrapper bg="white" id={id}>
      <div className="mx-auto w-full max-w-[1040px]">

        {/* TOP LEFT ONLY */}
        <div className="max-w-[520px]">
          <h2 className="text-[30px] font-bold leading-[1.1] tracking-[-0.02em] text-[#0A1628] max-sm:text-[24px]">
            {heading}
          </h2>

          <div className="mt-5 space-y-2">
            {introLeftLines.map((line, i) => (
              <p
                key={line}
                className={
                  i === 0
                    ? 'text-[16px] leading-[1.55] text-[#5A6478]'
                    : 'text-[16px] leading-[1.55] text-[#7A8699]'
                }
              >
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-10 border-t border-[rgba(10,22,40,0.06)]" />

        {/* STACK */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-[56fr_44fr] md:gap-x-12">
          <div className="max-w-[620px]">
            <div className="space-y-3">
              {items.map((item) => (
                <p
                  key={item}
                  className="text-[16px] leading-[1.55] text-[#0A1628] max-sm:text-[15px]"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* keep empty column for structure */}
          <div />
        </div>

        {/* DIVIDER */}
        <div className="mt-10 border-t border-[rgba(10,22,40,0.06)]" />

        {/* RIGHT BLOCK (FULL CONTENT PRESERVED) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-[56fr_44fr] md:gap-x-12">
          <div />

          <div className="max-w-[420px] space-y-2">
            {conclusionLines.map((line, i) => (
              <p
                key={line}
                className={
                  i === 0
                    ? 'text-[16px] font-semibold leading-[1.5] text-[#0A1628]'
                    : 'text-[16px] leading-[1.55] text-[#5A6478]'
                }
              >
                {line}
              </p>
            ))}
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}