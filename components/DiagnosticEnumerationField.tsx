import SectionWrapper from '@/components/SectionWrapper';
import { type ReactNode } from 'react';

type DiagnosticElement = {
  label: string;
};

type EnumeratedDiagnosticFieldProps = {
  id?: string;
  heading: ReactNode;
  intro: string;
  items: DiagnosticElement[];
  conclusion: string[];
};

export default function EnumeratedDiagnosticField({
  id = 'enumerated-diagnostic-field',
  heading,
  intro,
  items,
  conclusion,
}: EnumeratedDiagnosticFieldProps) {
  return (
    <SectionWrapper bg="gray" id={id}>
      <div className="mx-auto w-full max-w-[1040px]">
        <div className="max-w-[760px]">
          <h2 className="text-[30px] font-bold leading-[1.1] tracking-[-0.02em] text-[#0A1628] max-sm:text-[24px]">
            {heading}
          </h2>

          <p className="mt-4 max-w-[720px] text-[16px] leading-[1.55] text-[#5A6478] max-sm:text-[15px]">
            {intro}
          </p>
        </div>

        <div className="mt-10 border-t border-[rgba(10,22,40,0.06)]" />

        <div className="mt-8 max-w-[760px]">
          <div className="divide-y divide-[rgba(10,22,40,0.04)]">
            {items.map((item, index) => {
              const displayIndex = String(index + 1).padStart(2, '0');

              return (
                <div
                  key={item.label}
                  className="grid grid-cols-[64px_1fr] items-start gap-x-12 py-6 max-sm:grid-cols-[56px_1fr] max-sm:gap-x-6 max-sm:py-5"
                >
                  <div className="pt-0.5 text-[13px] font-medium tracking-[0.08em] text-[#A1AAB8]">
                    [{displayIndex}]
                  </div>

                  <div>
                    <p className="text-[16px] font-semibold leading-[1.48] text-[#0A1628] max-sm:text-[15px]">
                      {item.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 border-t border-[rgba(10,22,40,0.06)]" />

        <div className="mt-8 md:ml-auto max-w-[430px]">
          <div className="space-y-2 text-[15px] leading-[1.58] text-[#5A6478] max-sm:text-[14px]">
            {conclusion.map((line, index) => (
              <p
                key={line}
                className={index === 0 ? 'font-medium text-[#5A6478]' : ''}
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}