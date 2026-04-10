import SectionWrapper from '@/components/SectionWrapper';
import { type ReactNode } from 'react';

type ParallelAxesDeterminationGapProps = {
  id?: string;

  // Top framing
  headingLeft: ReactNode;
  headingRight: string;

  // Axes (columns)
  axes: {
    title: string;
    description: string;
  }[];

  // Supporting line (e.g. process / governance)
  supportingLine?: string;

  // Gap definition
  gapLead: string;
  gapItems: string[];

  // Conclusion
  conclusion: string;
};

export default function ParallelAxesDeterminationGap({
  id = 'parallel-axes-determination-gap',

  headingLeft,
  headingRight,

  axes,

  supportingLine,

  gapLead,
  gapItems,

  conclusion,
}: ParallelAxesDeterminationGapProps) {
  return (
    <SectionWrapper bg="gray" id={id}>
      <div className="mx-auto w-full max-w-[1040px]">

        {/* TOP FRAME */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[55fr_45fr] md:gap-x-12">
          <div className="max-w-[520px]">
            <h2 className="text-[28px] font-bold leading-[1.15] tracking-[-0.02em] text-[#0A1628] max-sm:text-[24px]">
              {headingLeft}
            </h2>
          </div>

          <div className="max-w-[420px] md:pt-1">
            <p className="text-[16px] font-medium leading-[1.55] text-[#5A6478] max-sm:text-[15px]">
              {headingRight}
            </p>
          </div>
        </div>

        {/* AXES */}
        <div className="mt-12 border-t border-[rgba(10,22,40,0.06)] pt-10">
          <div className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-10">
            {axes.map((axis) => (
              <div key={axis.title}>
                <p className="text-[15px] font-semibold leading-[1.4] text-[#0A1628]">
                  {axis.title}
                </p>
                <p className="mt-2 text-[15px] leading-[1.5] text-[#7A8699]">
                  {axis.description}
                </p>
              </div>
            ))}
          </div>

          {supportingLine && (
            <div className="mt-8 max-w-[720px]">
              <p className="text-[15px] leading-[1.55] text-[#5A6478]">
                {supportingLine}
              </p>
            </div>
          )}
        </div>

        {/* GAP */}
        <div className="mt-12 border-t border-[rgba(10,22,40,0.06)] pt-10">
          <div className="max-w-[720px]">
            <p className="text-[15px] font-medium leading-[1.5] text-[#5A6478]">
              {gapLead}
            </p>

            <div className="mt-6 space-y-2 text-[15px] leading-[1.55] text-[#7A8699]">
              {gapItems.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
        </div>

        {/* CONCLUSION */}
        <div className="mt-12 border-t border-[rgba(10,22,40,0.06)] pt-10">
          <p className="max-w-[820px] text-[16px] font-medium leading-[1.55] text-[#0A1628]">
            {conclusion}
          </p>
        </div>

      </div>
    </SectionWrapper>
  );
}