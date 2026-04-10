import SectionWrapper from '@/components/SectionWrapper';
import { type ReactNode } from 'react';

type SystemDefinitionGridReframeProps = {
  id?: string;
  heading: ReactNode;
  intro: string[];
  leftItems?: string[];
  rightItems?: string[];
  reframeLead: string;
  reframeNegatives?: string[];
  reframePositive: string;
  reframeConclusion: string[];
};

export default function SystemDefinitionGridReframe({
  id = 'system-definition-grid-reframe',
  heading,
  intro,
  leftItems = [],
  rightItems = [],
  reframeLead,
  reframeNegatives = [],
  reframePositive,
  reframeConclusion,
}: SystemDefinitionGridReframeProps) {
  return (
    <SectionWrapper bg="navy" id={id}>
      <div className="mx-auto w-full max-w-[1040px]">
        <div className="max-w-[760px]">
          <h2 className="text-[30px] font-bold leading-[1.1] tracking-[-0.02em] text-white max-sm:text-[24px]">
            {heading}
          </h2>

          <div className="mt-5 space-y-2">
            {intro.map((line, index) => (
              <p
                key={line}
                className={
                  index === 0
                    ? 'text-[17px] leading-[1.55] text-[rgba(194,209,232,0.82)] max-sm:text-[16px]'
                    : 'text-[17px] font-medium leading-[1.55] text-[rgba(255,255,255,0.88)] max-sm:text-[16px]'
                }
              >
                {line}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-[rgba(255,255,255,0.08)] pt-10">
          <div className="grid grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-x-24">
            <div className="space-y-5">
              {leftItems.map((item) => (
                <p
                  key={item}
                  className="text-[16px] font-semibold leading-[1.5] text-[rgba(255,255,255,0.9)] max-sm:text-[15px]"
                >
                  {item}
                </p>
              ))}
            </div>

            <div className="space-y-5">
              {rightItems.map((item) => (
                <p
                  key={item}
                  className="text-[16px] font-semibold leading-[1.5] text-[rgba(255,255,255,0.9)] max-sm:text-[15px]"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[rgba(255,255,255,0.08)] pt-10">
          <div className="max-w-[760px]">
            <p className="text-[17px] font-semibold leading-[1.5] text-white max-sm:text-[16px]">
              {reframeLead}
            </p>

            <div className="mt-5 space-y-3 text-[16px] leading-[1.55] text-[rgba(194,209,232,0.72)] max-sm:text-[15px]">
              {reframeNegatives.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            <p className="mt-5 text-[16px] font-semibold leading-[1.55] text-white max-sm:text-[15px]">
              {reframePositive}
            </p>

            <div className="mt-5 space-y-2 text-[16px] leading-[1.55] text-[rgba(194,209,232,0.82)] max-sm:text-[15px]">
              {reframeConclusion.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}