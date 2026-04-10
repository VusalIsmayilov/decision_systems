import SectionWrapper from '@/components/SectionWrapper';
import { type ReactNode } from 'react';

type IndexedStep = {
  index: string;
  label: string;
  title?: string;
  lead?: string[];
  items?: string[];
  conclusion?: string[];
};

type IndexedStepSequenceProps = {
  id?: string;
  heading?: ReactNode;
  intro?: string[];
  steps?: IndexedStep[];
};

export default function IndexedStepSequence({
  id = 'indexed-step-sequence',
  heading,
  intro = [],
  steps = [],
}: IndexedStepSequenceProps) {
  return (
    <SectionWrapper bg="gray" id={id}>
      <div className="mx-auto w-full max-w-[1040px]">
        {(heading || intro.length > 0) && (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[120px_1fr] md:gap-x-12">
            <div />
            <div className="max-w-[680px]">
              {heading && (
                <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0A1628] max-sm:text-[24px]">
                  {heading}
                </h2>
              )}

              {intro.length > 0 && (
                <div className={heading ? 'mt-5 space-y-3' : 'space-y-3'}>
                  {intro.map((line, index) => (
                    <p
                      key={line}
                      className={
                        index === intro.length - 1
                          ? 'text-[17px] font-medium leading-[1.55] text-[#0A1628] max-sm:text-[16px]'
                          : 'text-[16px] leading-[1.58] text-[#5A6478] max-sm:text-[15px]'
                      }
                    >
                      {line}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {steps.length > 0 && (
          <div className={heading || intro.length > 0 ? 'mt-10 border-t border-[rgba(10,22,40,0.06)]' : ''}>
            {steps.map((step, stepIndex) => (
              <div
                key={`${step.index}-${step.label}`}
                className={stepIndex > 0 ? 'border-t border-[rgba(10,22,40,0.06)]' : ''}
              >
                <div className="grid grid-cols-1 gap-6 py-10 md:grid-cols-[120px_1fr] md:gap-x-12 md:py-12">
                  <div className="pt-1">
                    <div className="text-[11px] uppercase tracking-[0.18em] text-[#A0A8B5]">
                      <div>{step.index}</div>
                      <div className="mt-1">{step.label}</div>
                    </div>
                  </div>

                  <div className="max-w-[680px]">
                    {step.title && (
                      <h3 className="text-[17px] font-semibold leading-[1.5] text-[#0A1628] max-sm:text-[16px]">
                        {step.title}
                      </h3>
                    )}

                    {step.lead && step.lead.length > 0 && (
                      <div className={step.title ? 'mt-4 space-y-3' : 'space-y-3'}>
                        {step.lead.map((line, index) => {
                          const isLastLead = index === step.lead!.length - 1;
                          const hasItems = Boolean(step.items && step.items.length > 0);

                          return (
                            <p
                              key={line}
                              className={
                                isLastLead && !hasItems
                                  ? 'text-[17px] font-medium leading-[1.55] text-[#0A1628] max-sm:text-[16px]'
                                  : 'text-[16px] leading-[1.58] text-[#5A6478] max-sm:text-[15px]'
                              }
                            >
                              {line}
                            </p>
                          );
                        })}
                      </div>
                    )}

                    {step.items && step.items.length > 0 && (
                      <div className="mt-6 space-y-3">
                        {step.items.map((item) => (
                          <p
                            key={item}
                            className="text-[16px] leading-[1.56] text-[#6A7486] max-sm:text-[15px]"
                          >
                            {item}
                          </p>
                        ))}
                      </div>
                    )}

                    {step.conclusion && step.conclusion.length > 0 && (
                      <div className="mt-8 space-y-3">
                        {step.conclusion.map((line, index) => (
                          <p
                            key={line}
                            className={
                              index === step.conclusion!.length - 1
                                ? 'text-[17px] font-semibold leading-[1.52] text-[#0A1628] max-sm:text-[16px]'
                                : 'text-[16px] leading-[1.58] text-[#5A6478] max-sm:text-[15px]'
                            }
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}