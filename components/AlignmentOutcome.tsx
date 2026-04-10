import SectionWrapper from '@/components/SectionWrapper';
import { type ReactNode } from 'react';

type AlignmentOutcomeColumn = {
  lines: string[];
  emphasisIndex?: number;
};

type AlignmentOutcomeProps = {
  id?: string;
  heading: ReactNode;
  intro: string;
  columns?: AlignmentOutcomeColumn[];
  negatives?: string[];
  conclusion: string;
};

export default function AlignmentOutcome({
  id = 'alignment-outcome',
  heading,
  intro,
  columns = [],
  negatives = [],
  conclusion,
}: AlignmentOutcomeProps) {
  return (
    <SectionWrapper bg="white" id={id}>
      <div className="mx-auto w-full max-w-[1040px]">
        <div className="max-w-[760px]">
          <h2 className="text-[30px] font-bold leading-[1.1] tracking-[-0.02em] text-[#0A1628] max-sm:text-[24px]">
            {heading}
          </h2>

          <p className="mt-4 text-[16px] leading-[1.55] text-[#5A6478] max-sm:text-[15px]">
            {intro}
          </p>
        </div>

        <div className="mt-10 border-t border-[rgba(10,22,40,0.06)]" />

        <div className="mt-10 grid grid-cols-1 gap-y-8 md:grid-cols-[1fr_1fr_0.9fr] md:gap-x-12">
          {columns.map((col, colIndex) => (
            <div key={colIndex} className="max-w-[300px] space-y-4">
              {col.lines.map((line, i) => {
                const isEmphasis = col.emphasisIndex === i;
                const isOutcomeColumn = colIndex === columns.length - 1;

                return (
                  <p
                    key={line}
                    className={
                      isEmphasis
                        ? `text-[16px] font-semibold leading-[1.55] ${
                            isOutcomeColumn ? 'text-[#0A1628]' : 'text-[#1B2433]'
                          }`
                        : `text-[16px] leading-[1.55] ${
                            isOutcomeColumn ? 'text-[#5A6478]' : 'text-[#647089]'
                          }`
                    }
                  >
                    {line}
                  </p>
                );
              })}
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-[rgba(10,22,40,0.06)]" />

        {negatives.length > 0 && (
          <div className="mt-8 max-w-[820px] space-y-2 text-[15px] leading-[1.55] text-[#7A8699]">
            {negatives.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        )}

        <div className="mt-6 max-w-[820px]">
          <p className="text-[16px] leading-[1.6] text-[#0A1628] max-sm:text-[15px]">
            {conclusion}
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}