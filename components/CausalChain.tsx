import SectionWrapper from '@/components/SectionWrapper';
import { type ReactNode } from 'react';

type CausalChainProps = {
  id?: string;
  heading: ReactNode;
  intro?: string[];
  evidence: string[];
  transition?: string;
  conclusion: string;
};

export default function CausalChain({
  id = 'causal-chain',
  heading,
  intro = [],
  evidence = [],
  transition,
  conclusion,
}: CausalChainProps) {
  return (
    <SectionWrapper bg="white" id={id}>
      <div className="mx-auto w-full max-w-[1040px]">
        {/* TOP */}
        <div className="max-w-[640px]">
          <h2 className="text-[30px] font-bold leading-[1.1] tracking-[-0.02em] text-[#0A1628] max-sm:text-[24px]">
            {heading}
          </h2>

          {intro.length > 0 && (
            <div className="mt-5 max-w-[620px] space-y-2">
              {intro.map((line, i) => (
                <p
                  key={line}
                  className={
                    i === 0
                      ? 'text-[16px] leading-[1.55] text-[#6B768A] max-sm:text-[15px]'
                      : 'text-[16px] leading-[1.55] text-[#7A8699] max-sm:text-[15px]'
                  }
                >
                  {line}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* DIVIDER */}
        <div className="mt-10 max-w-[880px] border-t border-[rgba(10,22,40,0.06)]" />

        {/* EVIDENCE */}
        <div className="mt-8 max-w-[760px]">
          <div className="space-y-5">
            {evidence.map((line, index) => {
              const isLast = index === evidence.length - 1;

              return (
                <p
                  key={line}
                  className={
                    isLast
                      ? 'text-[18px] font-semibold leading-[1.48] text-[#0A1628] max-sm:text-[17px]'
                      : 'text-[17px] leading-[1.55] text-[#0A1628] max-sm:text-[16px]'
                  }
                >
                  {line}
                </p>
              );
            })}
          </div>
        </div>

        {/* TRANSITION */}
        {transition && (
          <div className="mt-10 max-w-[760px]">
            <p className="text-[16px] leading-[1.58] text-[#6B768A] max-sm:text-[15px]">
              {transition}
            </p>
          </div>
        )}

        {/* CONCLUSION */}
        <div className="mt-8 max-w-[760px]">
          <p className="text-[18px] font-semibold leading-[1.5] text-[#0A1628] max-sm:text-[17px]">
            {conclusion}
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}