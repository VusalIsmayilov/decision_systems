import SectionWrapper from '@/components/SectionWrapper';
import DiagnosticIntakeForm from '@/components/DiagnosticIntakeForm';

const NEXT_STEPS = [
  'We review your decision context.',
  'We confirm scope and fit.',
  'We initiate a focused diagnostic discussion.',
] as const;

const BOUNDARY_LINES = [
  'This is not a generic consultation.',
  'The focus is decision structure.',
  'The output is a defined baseline.',
  'The goal is clarity before any redesign or implementation.',
] as const;

export default async function DecisionDiagnosticIntakePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await params;

  return (
    <>
      <section className="flex scroll-mt-[5.5rem] items-start bg-[#0A1628]" id="hero">
        <div className="mx-auto w-full max-w-[1280px] px-10 pb-24 pt-24 max-md:px-5 max-md:pb-16 max-md:pt-24 max-sm:pt-28 md:pt-28 lg:pb-24 lg:pt-32 xl:pt-[8.5rem]">
          <p className="mb-10 text-[12px] font-semibold uppercase leading-[1.3] tracking-[0.08em] text-[rgba(255,255,255,0.42)] max-sm:mb-9 max-sm:text-[11px]">
            Decision Diagnostic
          </p>
          <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[2fr_3fr] md:gap-x-10 md:gap-y-0 lg:gap-x-12 xl:gap-x-20">
            <div className="order-2 flex max-w-[420px] flex-col gap-6 text-[15px] font-normal leading-[1.5] text-[rgba(194,209,232,0.68)] max-sm:text-[14px] md:order-1 md:translate-y-[2%] md:pt-1">
              <p>You are entering a structured assessment of how your recurring decisions operate today.</p>
            </div>
            <div className="order-1 flex flex-col items-start md:order-2 md:translate-y-[2%]">
              <h1 className="text-balance text-[56px] font-bold leading-[1.03] tracking-[-0.03em] text-white max-md:text-[42px] max-sm:text-[32px]">
                Start Decision Diagnostic
              </h1>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper bg="white" id="requirements">
        <div className="mx-auto w-full max-w-[1040px]">
          <p className="mb-6 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(90,100,120,0.68)]">
            Requirements
          </p>
          <h2 className="max-w-[720px] text-[30px] font-bold leading-[1.12] tracking-[-0.015em] text-[#0A1628] max-sm:text-[24px]">
            What this step requires
          </h2>
          <div className="mt-9 grid grid-cols-1 items-start gap-10 border-t border-[rgba(10,22,40,0.08)] pt-9 lg:mt-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,280px)] lg:gap-x-14 lg:gap-y-0 lg:pt-10 xl:gap-x-16">
            <div className="order-2 flex max-w-[620px] flex-col gap-6 text-[17px] font-medium leading-[1.55] text-[#0A1628] max-sm:gap-5 max-sm:text-[16px] lg:order-1">
              <p>Identify one recurring decision.</p>
              <p>Describe where inconsistency appears.</p>
              <p>Provide context for evaluation.</p>
            </div>
            <div className="order-1 max-w-[280px] text-right lg:order-2 lg:justify-self-end lg:pt-1">
              <p className="text-[15px] font-semibold leading-[1.5] text-[#0A1628] max-sm:text-[14px]">
                This is not a general inquiry.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper bg="gray" id="intake-form">
        <div className="mx-auto w-full max-w-[1040px]">
          <p className="mb-6 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(90,100,120,0.72)]">
            Diagnostic input
          </p>
          <h2 className="max-w-[720px] text-[30px] font-bold leading-[1.12] tracking-[-0.015em] text-[#0A1628] max-sm:text-[24px]">
            Form
          </h2>
          <div className="mt-9 border-t border-[rgba(10,22,40,0.08)] pt-9 lg:mt-10 lg:pt-10">
            <div className="min-w-0 max-w-[720px]">
              <DiagnosticIntakeForm />
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper bg="white" id="what-happens-next" className="border-t border-[rgba(10,22,40,0.08)]">
        <div className="mx-auto w-full max-w-[1040px]">
          <p className="mb-8 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(90,100,120,0.68)]">
            What happens next
          </p>
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-x-10 lg:gap-y-0 xl:gap-x-14">
            <div className="flex max-w-[300px] flex-col gap-6 text-[16px] font-normal leading-[1.55] text-[#5A6478] max-sm:max-w-none max-sm:text-[15px] lg:max-w-[300px]">
              <p className="text-[22px] font-bold leading-[1.32] tracking-[-0.015em] text-[#0A1628] max-sm:text-[19px]">
                {NEXT_STEPS[0]}
              </p>
            </div>
            <div className="border-t border-[rgba(0,0,0,0.06)] pt-12 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10 xl:pl-12">
              <p className="text-[17px] font-medium leading-[1.55] text-[#0A1628] max-sm:text-[16px]">{NEXT_STEPS[1]}</p>
            </div>
            <div className="flex max-w-[300px] flex-col gap-6 border-t border-[rgba(0,0,0,0.06)] pt-12 text-[15px] font-normal leading-[1.58] text-[#5A6478] max-sm:max-w-none max-sm:text-[14px] lg:max-w-[300px] lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10 xl:pl-12">
              <p className="font-semibold leading-[1.55] text-[#0A1628]">{NEXT_STEPS[2]}</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper bg="navy" id="boundary" className="!pb-24 md:!pb-28">
        <div className="mx-auto w-full max-w-[1040px]">
          <p className="mb-6 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(255,255,255,0.42)]">
            Boundary
          </p>
          <div className="max-w-[920px]">
            <h2 className="text-[40px] font-bold leading-[1.05] tracking-[-0.02em] text-white max-md:text-[32px] max-sm:text-[24px]">
              This is not a generic consultation
            </h2>
          </div>
          <div className="mt-10 border-t border-[rgba(255,255,255,0.1)] pt-10 text-[17px] font-normal leading-[1.55] text-[rgba(194,209,232,0.82)] max-sm:text-[15px] lg:mt-12 lg:pt-12">
            {BOUNDARY_LINES.slice(1).map((line) => (
              <p key={line} className="mt-7 first:mt-0 md:mt-8">
                {line}
              </p>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
