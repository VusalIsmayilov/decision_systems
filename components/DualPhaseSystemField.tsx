import SectionWrapper from '@/components/SectionWrapper';
import { type ReactNode } from 'react';

type Segment = {
  rangeLabel: string;
  items: string[];
};

type ParallelSegmentedSystemProps = {
  id?: string;
  heading: ReactNode;
  intro: string;
  segments: Segment[];
  conclusion: string[];
};

export default function ParallelSegmentedSystem({
  id = 'parallel-segmented-system',
  heading,
  intro,
  segments,
  conclusion,
}: ParallelSegmentedSystemProps) {
  return (
    <SectionWrapper bg="white" id={id}>
      <div className="mx-auto w-full max-w-[1040px]">
        <div className="max-w-[760px]">
          <h2 className="text-[30px] font-bold leading-[1.1] tracking-[-0.02em] text-[#0A1628] max-sm:text-[24px]">
            {heading}
          </h2>

          <p className="mt-4 max-w-[720px] text-[16px] leading-[1.55] text-[#5A6478] max-sm:text-[15px]">
            {intro}
          </p>
        </div>

        <div className="mt-10 border-t border-[rgba(10,22,40,0.06)]" />

        <div className="mt-10 grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-24">
          {segments.map((segment) => (
            <div key={segment.rangeLabel} className="min-w-0">
              <p className="text-[13px] font-medium tracking-[0.08em] text-[#9AA5B1]">
                {segment.rangeLabel}
              </p>

              <div className="mt-5 divide-y divide-[rgba(10,22,40,0.04)]">
                {segment.items.map((item, index) => {
                  const match = segment.rangeLabel.match(/(\d+)\D+(\d+)/);
                  const start = match ? Number(match[1]) : 1;
                  const displayIndex = String(start + index).padStart(2, '0');

                  return (
                    <div
                      key={item}
                      className="grid grid-cols-[56px_1fr] items-start gap-x-6 py-4 max-sm:grid-cols-[48px_1fr]"
                    >
                      <div className="pt-0.5 text-[13px] font-medium tracking-[0.06em] text-[#AAB3BF]">
                        [{displayIndex}]
                      </div>

                      <p className="text-[16px] font-semibold leading-[1.48] text-[#0A1628] max-sm:text-[15px]">
                        {item}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-[rgba(10,22,40,0.06)]" />

        <div className="mt-8 max-w-[420px] md:ml-auto">
          <div className="space-y-2 text-[15px] leading-[1.58] text-[#5A6478] max-sm:text-[14px]">
            {conclusion.map((line, index) => (
              <p
                key={line}
                className={index === 0 ? 'font-medium text-[#0A1628]' : ''}
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