import SectionWrapper from '@/components/SectionWrapper';
import { type ReactNode } from 'react';

type DefinitionBreakdownProps = {
  id?: string;
  bg?: 'white' | 'gray';
  heading: ReactNode;
  leftLines: string[];
  definitionLead: string;
  definitionItems: string[];
  conclusion: string[];
};

export default function DefinitionBreakdown({
  id = 'definition-breakdown',
  bg = 'white',
  heading,
  leftLines,
  definitionLead,
  definitionItems,
  conclusion,
}: DefinitionBreakdownProps) {
  return (
    <SectionWrapper bg={bg} id={id}>
      <div className="mx-auto w-full max-w-[1040px]">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[35fr_65fr] md:gap-x-12 md:gap-y-0 lg:gap-x-14">
          <div className="max-w-[300px] text-[15px] font-normal leading-[1.55] text-[#5A6478] max-sm:max-w-none max-sm:text-[14px]">
            <h2 className="text-[22px] font-bold leading-[1.32] tracking-[-0.015em] text-[#0A1628] max-sm:text-[19px]">
              {heading}
            </h2>
            <div className="mt-6 space-y-1.5">
              {leftLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>

          <div className="min-w-0">
            <p className="text-[17px] font-medium leading-[1.55] text-[#0A1628] max-sm:text-[16px]">{definitionLead}</p>
            <div className="mt-5 space-y-3 text-[16px] font-normal leading-[1.52] text-[#5A6478] max-sm:text-[15px]">
              {definitionItems.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            <div className="mt-8 max-w-[640px] text-[15px] font-medium leading-[1.5] text-[#0A1628] max-sm:text-[14px]">
              {conclusion.map((line, index) => (
                <p key={line} className={index > 0 ? 'mt-5' : ''}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
