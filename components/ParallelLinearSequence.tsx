import SectionWrapper from '@/components/SectionWrapper';
import { type ReactNode } from 'react';

type ParallelLinearSequenceProps = {
  id?: string;
  heading: ReactNode;
  introTop?: string[];
  leftSequence?: string[];
  rightSequence?: string[];
  conclusionLead: string;
  conclusionBody?: string[];
};

export default function ParallelLinearSequence({
  id = 'parallel-linear-sequence',
  heading,
  introTop = [],
  leftSequence = [],
  rightSequence = [],
  conclusionLead,
  conclusionBody = [],
}: ParallelLinearSequenceProps) {
  return (
    <SectionWrapper bg="white" id={id}>
      <div className="mx-auto w-full max-w-[1040px]">
        <div className="max-w-[640px]">
          <h2 className="text-[30px] font-bold leading-[1.1] tracking-[-0.02em] text-[#0A1628] max-sm:text-[24px]">
            {heading}
          </h2>

          <div className="mt-6 space-y-3">
            {introTop.map((line) => (
              <p
                key={line}
                className="text-[17px] font-medium leading-[1.55] text-[#7A8699] max-sm:text-[16px]"
              >
                {line}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-[rgba(10,22,40,0.06)] pt-12">
          <div className="grid grid-cols-1 gap-x-24 gap-y-12 md:grid-cols-2">
            <div className="min-w-0">
              <div className="space-y-5">
                {leftSequence.map((line, index) => (
                  <div key={line}>
                    {index > 0 && (
                      <div className="mb-4 flex items-center">
                        <span className="text-[18px] leading-none text-[#A5AEBC]/60">
                          ↓
                        </span>
                      </div>
                    )}
                    <p className="text-[18px] font-semibold leading-[1.42] text-[#5A6478] max-sm:text-[17px]">
                      {line}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="min-w-0">
              <div className="space-y-5">
                {rightSequence.map((line, index) => (
                  <div key={line}>
                    {index > 0 && (
                      <div className="mb-4 flex items-center">
                        <span className="text-[18px] leading-none text-[#A5AEBC]/60">
                          ↓
                        </span>
                      </div>
                    )}
                    <p className="text-[18px] font-semibold leading-[1.42] text-[#5A6478] max-sm:text-[17px]">
                      {line}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[rgba(10,22,40,0.06)] pt-10">
          <p className="text-[18px] font-semibold leading-[1.48] text-[#0A1628] max-sm:text-[17px]">
            {conclusionLead}
          </p>

          <div className="mt-6 max-w-[760px] space-y-2 text-[16px] leading-[1.56] text-[#7A8699] max-sm:text-[15px]">
            {conclusionBody.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}