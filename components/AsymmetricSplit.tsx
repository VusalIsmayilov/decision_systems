import SectionWrapper from '@/components/SectionWrapper';
import { type ReactNode } from 'react';

type AsymmetricSplitProps = {
  id?: string;
  heading: ReactNode;
  leftLines: string[];
  rightIntro: string[];
  rightBody: string[];
  rightConclusion: string[];
};

export default function AsymmetricSplit({
  id = 'asymmetric-split',
  heading,
  leftLines,
  rightIntro,
  rightBody,
  rightConclusion,
}: AsymmetricSplitProps) {
  return (
    <SectionWrapper bg="white" id={id}>
      <div className="mx-auto w-full max-w-[1040px]">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[30fr_70fr] md:gap-x-12 md:gap-y-0 lg:gap-x-14">
          <div className="max-w-[300px] text-[15px] font-normal leading-[1.55] text-[#5A6478] max-sm:max-w-none max-sm:text-[14px]">
            <h2 className="text-[23px] font-bold leading-[1.3] tracking-[-0.015em] text-[#0A1628] max-sm:text-[19px]">
              {heading}
            </h2>
            <div className="mt-6 space-y-1.5">
              {leftLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>

          <div className="min-w-0 border-t border-[rgba(10,22,40,0.08)] pt-10 md:border-t-0 md:border-l md:border-[rgba(10,22,40,0.08)] md:pl-12 md:pt-0 lg:pl-14">
            <div className="max-w-[620px] space-y-5 text-[17px] font-normal leading-[1.58] text-[#5A6478] max-sm:text-[15px]">
              {rightIntro.map((line) => (
                <p key={line} className="font-medium text-[#0A1628]">
                  {line}
                </p>
              ))}
              {rightBody.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            <div className="mt-5 md:mt-6">
              <div className="max-w-[460px] text-[16px] font-normal leading-[1.55] text-[#5A6478] max-sm:text-[14px]">
                {rightConclusion.map((line, index) => (
                  <p
                    key={line}
                    className={index === rightConclusion.length - 1 ? 'mt-5 font-semibold text-[#0A1628]' : ''}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
