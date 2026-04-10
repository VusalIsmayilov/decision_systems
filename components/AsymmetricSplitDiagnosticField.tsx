import SectionWrapper from '@/components/SectionWrapper';
import { type ReactNode } from 'react';

type Row = {
  left: string;
  right?: string;
};

type ParallelDiagnosticFieldProps = {
  id?: string;
  heading: ReactNode;
  introRight?: string[];
  rows: Row[];
  conclusion: string;
};

export default function ParallelDiagnosticField({
  id = 'parallel-diagnostic-field',
  heading,
  introRight = [],
  rows,
  conclusion,
}: ParallelDiagnosticFieldProps) {
  return (
    <SectionWrapper bg="white" id={id}>
      <div className="mx-auto w-full max-w-[1040px]">
        {/* TOP */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[56fr_44fr] md:gap-x-12">
          <div className="max-w-[520px]">
            <h2 className="text-[30px] font-bold leading-[1.1] tracking-[-0.02em] text-[#0A1628] max-sm:text-[24px]">
              {heading}
            </h2>
          </div>

          {introRight.length > 0 && (
            <div className="max-w-[360px] md:justify-self-end md:pt-1">
              <div className="space-y-3 text-[15px] leading-[1.55] text-[#6B768A] max-sm:text-[14px]">
                {introRight.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* DIVIDER */}
        <div className="mt-10 border-t border-[rgba(10,22,40,0.06)]" />

        {/* TRUE PAIRED ROWS */}
        <div className="mt-6">
          <div className="divide-y divide-[rgba(10,22,40,0.04)]">
            {rows.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-[46fr_54fr] md:gap-x-16 py-6 items-start"
              >
                <div className="max-w-[420px]">
                  <p className="text-[16px] leading-[1.55] text-[#0A1628] max-sm:text-[15px]">
                    {row.left}
                  </p>
                </div>

                <div className="max-w-[440px]">
                  {row.right ? (
                    <p className="text-[16px] leading-[1.55] text-[#0A1628] max-sm:text-[15px]">
                      {row.right}
                    </p>
                  ) : (
                    <div className="hidden md:block" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-8 border-t border-[rgba(10,22,40,0.06)]" />

        {/* CONCLUSION */}
        <div className="mt-6 md:ml-auto max-w-[420px]">
          <p className="text-[18px] font-semibold leading-[1.45] text-[#0A1628] max-sm:text-[16px]">
            {conclusion}
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}