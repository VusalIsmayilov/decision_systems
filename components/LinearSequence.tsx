import SectionWrapper from '@/components/SectionWrapper';
import { type ReactNode } from 'react';

type LinearSequenceProps = {
  id?: string;
  heading: ReactNode;
  introTop: string[];
  items: string[];
  conclusion: string[];
};

export default function LinearSequence({
  id = 'linear-sequence',
  heading,
  introTop,
  items,
  conclusion,
}: LinearSequenceProps) {
  return (
    <SectionWrapper bg="white" id={id}>
      <div className="mx-auto w-full max-w-[1040px]">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[40fr_60fr] md:gap-x-12 md:gap-y-0 lg:gap-x-14">
          <div className="max-w-[300px] md:max-w-none lg:max-w-[300px] md:pt-1">
            <p className="text-[30px] font-bold leading-[1.12] tracking-[-0.015em] text-[#0A1628] max-sm:text-[24px]">
              {heading}
            </p>
          </div>

          <div className="min-w-0">
            <div className="max-w-[640px]">
              {introTop.map((line, index) => (
                <p
                  key={line}
                  className={`text-[17px] font-medium leading-[1.55] text-[#0A1628] max-sm:text-[16px] ${
                    index > 0 ? 'mt-2' : ''
                  }`}
                >
                  {line}
                </p>
              ))}

              <div className="mt-5 space-y-3 text-[16px] font-normal leading-[1.52] text-[#5A6478] max-sm:text-[15px]">
                {items.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="max-w-[640px] text-[15px] font-medium leading-[1.5] text-[#0A1628] max-sm:text-[14px]">
                {conclusion.map((line, index) => (
                  <span key={line}>
                    {line}
                    {index < conclusion.length - 1 ? ' ' : ''}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
