import SectionWrapper from '@/components/SectionWrapper';
import { type ReactNode } from 'react';

type CausalThreeZoneProps = {
  id?: string;
  heading: ReactNode;
  premise: string[];
  mechanism: string[];
  implicationStrong: string[];
  implicationSoft: string[];
};

export default function CausalThreeZone({
  id = 'causal-three-zone',
  heading,
  premise,
  mechanism,
  implicationStrong,
  implicationSoft,
}: CausalThreeZoneProps) {
  return (
    <SectionWrapper bg="gray" id={id}>
      <div className="mx-auto w-full max-w-[1040px]">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[25fr_50fr_25fr] lg:gap-x-10 lg:gap-y-0 xl:gap-x-14">
          <div className="max-w-[280px] min-w-0 break-words text-[15px] font-normal leading-[1.55] text-[#647089] max-sm:max-w-none max-sm:text-[14px]">
            <h2 className="text-[22px] font-bold leading-[1.32] tracking-[-0.015em] text-[#0A1628] max-sm:text-[19px]">
              {heading}
            </h2>
            <div className="mt-6 space-y-1.5">
              {premise.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>

          <div className="border-t border-[rgba(10,22,40,0.04)] pt-12 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10 xl:pl-12">
            <div className="max-w-[560px] space-y-5 text-[18px] font-semibold leading-[1.58] text-[#0A1628] max-sm:text-[16px]">
              {mechanism.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>

          <div className="border-t border-[rgba(10,22,40,0.04)] pt-12 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10 xl:pl-12">
            <div className="max-w-[280px] min-w-0 break-words text-[15px] font-normal leading-[1.58] text-[#5A6478] max-sm:max-w-none max-sm:text-[14px]">
              <div className="space-y-1 text-[#0A1628]">
                {implicationStrong.map((line) => (
                  <p key={line} className="font-semibold leading-[1.55]">
                    {line}
                  </p>
                ))}
              </div>
              <div className="mt-8 space-y-1">
                {implicationSoft.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
