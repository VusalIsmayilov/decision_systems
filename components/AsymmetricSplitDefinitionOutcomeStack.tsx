import Link from 'next/link';
import SectionWrapper from '@/components/SectionWrapper';
import { type ReactNode } from 'react';

type AsymmetricSplitDefinitionOutcomeStackProps = {
  id?: string;
  heading: ReactNode;
  lead: string;
  label?: string;
  items: string[];
  outcome: string[];
  cta?: {
    label: string;
    href: string;
  };
};

export default function AsymmetricSplitDefinitionOutcomeStack({
  id = 'asymmetric-split-definition-outcome-stack',
  heading,
  lead,
  label = 'You receive:',
  items,
  outcome,
  cta,
}: AsymmetricSplitDefinitionOutcomeStackProps) {
  return (
    <SectionWrapper bg="white" id={id}>
      <div className="mx-auto w-full max-w-[1040px]">
        <div className="max-w-[720px]">
          <h2 className="text-[30px] font-bold leading-[1.1] tracking-[-0.02em] text-[#0A1628] max-sm:text-[24px]">
            {heading}
          </h2>
        </div>

        <div className="mt-8 border-t border-[rgba(10,22,40,0.06)]" />

        <div className="mt-8 grid grid-cols-1 gap-y-12 md:grid-cols-[34fr_66fr] md:gap-x-14">
          <div className="max-w-[280px]">
            <p className="text-[17px] font-semibold leading-[1.5] text-[#0A1628] max-sm:text-[16px]">
              {lead}
            </p>
          </div>

          <div className="min-w-0">
            <div className="max-w-[600px]">
              <p className="text-[14px] font-medium leading-[1.45] text-[#8A94A6] max-sm:text-[13px]">
                {label}
              </p>

              <div className="mt-5 space-y-5">
                {items.map((item, index) => (
                  <p
                    key={item}
                    className={
                      index === items.length - 1
                        ? 'text-[16px] font-semibold leading-[1.52] text-[#0A1628] max-sm:text-[15px]'
                        : 'text-[16px] leading-[1.52] text-[#5A6478] max-sm:text-[15px]'
                    }
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-10 max-w-[520px] space-y-2">
              {outcome.map((line, index) => (
                <p
                  key={line}
                  className={
                    index === 0
                      ? 'text-[17px] font-semibold leading-[1.5] text-[#0A1628] max-sm:text-[16px]'
                      : 'text-[16px] leading-[1.55] text-[#5A6478] max-sm:text-[15px]'
                  }
                >
                  {line}
                </p>
              ))}
            </div>

            {cta && (
              <div className="mt-10">
                <Link
                  href={cta.href}
                  className="inline-flex min-h-11 items-center text-[15px] font-semibold leading-[1.45] tracking-tight text-[#0A1628] underline-offset-4 transition-colors duration-150 hover:underline max-sm:text-[14px]"
                >
                  {cta.label}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}