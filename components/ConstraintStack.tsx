import SectionWrapper from '@/components/SectionWrapper';
import { type ReactNode } from 'react';

type ConstraintStackProps = {
  id?: string;
  bg?: 'white' | 'gray';
  heading: ReactNode;
  introRight?: string;
  lead?: string;
  constraints?: string[];
  bottomBody?: string[];
  conclusion: string;
};

export default function ConstraintStack({
  id = 'constraint-stack',
  bg = 'gray',
  heading,
  introRight,
  lead = '',
  constraints = [],
  bottomBody = [],
  conclusion,
}: ConstraintStackProps) {
  const hasLead = Boolean(lead.trim());

  return (
    <SectionWrapper bg={bg} id={id}>
      <div className="mx-auto w-full max-w-[1040px]">
        {/* TOP FRAME */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[58fr_42fr] md:gap-x-12">
          <div className="max-w-[520px]">
            <h2 className="text-[30px] font-bold leading-[1.1] tracking-[-0.02em] text-[#0A1628] max-sm:text-[24px]">
              {heading}
            </h2>
          </div>

          {introRight && (
            <div className="max-w-[330px] md:justify-self-end md:pt-1">
              <p className="text-[15px] leading-[1.55] text-[#6B768A] max-sm:text-[14px]">
                {introRight}
              </p>
            </div>
          )}
        </div>

        {/* DIVIDER */}
        <div className="mt-10 border-t border-[rgba(10,22,40,0.06)]" />

        {/* CONSTRAINT FIELD */}
        <div
          className={`mt-8 grid grid-cols-1 gap-8${hasLead ? ' md:grid-cols-[32fr_68fr] md:gap-x-14' : ''}`}
        >
          {hasLead ? (
            <div className="max-w-[250px]">
              <p className="text-[16px] font-medium leading-[1.52] text-[#0A1628] max-sm:text-[15px]">
                {lead}
              </p>
            </div>
          ) : null}

          <div className="max-w-[680px]">
            <div className="space-y-5">
              {constraints.map((line, index) => {
                const isLast = index === constraints.length - 1;

                return (
                  <p
                    key={line}
                    className={
                      isLast
                        ? 'text-[18px] font-semibold leading-[1.48] text-[#0A1628] max-sm:text-[17px]'
                        : 'text-[17px] leading-[1.52] text-[#0A1628] max-sm:text-[16px]'
                    }
                  >
                    {line}
                  </p>
                );
              })}
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-10 border-t border-[rgba(10,22,40,0.06)]" />

        {/* BOTTOM RESOLUTION */}
        <div className="mt-10 max-w-[640px] md:ml-auto">
          {bottomBody.length > 0 && (
            <div className="space-y-4 text-[16px] leading-[1.58] text-[#6B768A] max-sm:text-[15px]">
              {bottomBody.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          )}

          <p className="mt-7 text-[17px] font-semibold leading-[1.5] text-[#0A1628] max-sm:text-[16px]">
            {conclusion}
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}