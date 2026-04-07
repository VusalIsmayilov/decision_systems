import SectionWrapper from '@/components/SectionWrapper';
import Link from 'next/link';
import { withLocale, type Locale } from '@/lib/i18n';

const SCOPE_ELEMENTS = [
  { n: 1, label: 'decision definition' },
  { n: 2, label: 'triggers' },
  { n: 3, label: 'inputs' },
  { n: 4, label: 'logic' },
  { n: 5, label: 'ownership' },
  { n: 6, label: 'workflow' },
  { n: 7, label: 'action' },
  { n: 8, label: 'feedback' },
] as const;

const WHY_CONSEQUENCES = [
  'priorities are unclear',
  'gaps are misidentified',
  'changes do not hold',
] as const;

const OUTPUT_DELIVERABLES = [
  'mapped decision structures for selected high-impact decisions',
  'explicit identification of variability points across teams and workflows',
  'breakdown of structural gaps across decision, trigger, inputs, logic, ownership, workflow, action, and feedback',
  'prioritized set of decisions requiring definition',
  'documented decision boundaries and ownership assignments',
  'defined starting point for decision system design',
] as const;

export default async function DecisionDiagnosticPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: loc } = await params;
  const locale = loc as Locale;
  const L = (path: string) => withLocale(locale, path);

  return (
    <>
      <section className="flex scroll-mt-[5.5rem] items-start bg-[#0A1628]" id="hero">
        <div className="mx-auto w-full max-w-[1280px] px-10 pb-24 pt-24 max-md:px-5 max-md:pb-16 max-md:pt-24 max-sm:pt-28 md:pt-28 lg:pb-24 lg:pt-32 xl:pt-[8.5rem]">
          <p className="mb-10 text-[12px] font-semibold uppercase leading-[1.3] tracking-[0.08em] text-[rgba(255,255,255,0.42)] max-sm:mb-9 max-sm:text-[11px]">
            Decision Diagnostic
          </p>
          <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[2fr_3fr] md:gap-x-10 md:gap-y-0 lg:gap-x-12 xl:gap-x-20">
            <div className="order-2 flex max-w-[420px] flex-col gap-6 text-[15px] font-normal leading-[1.5] text-[rgba(194,209,232,0.68)] max-sm:text-[14px] md:order-1 md:translate-y-[2%] md:pt-1">
              <p>If decisions produce inconsistent outcomes, the structure is not fully defined.</p>
              <p>
                The diagnostic identifies how your most important recurring decisions function today and where
                structural gaps exist.
              </p>
            </div>
            <div className="order-1 flex flex-col items-start md:order-2 md:translate-y-[2%]">
              <h1 className="text-balance text-[56px] font-bold leading-[1.03] tracking-[-0.03em] text-white max-md:text-[42px] max-sm:text-[32px]">
                Determine how your decisions actually operate
              </h1>
              <div className="mt-8 max-w-[520px] text-[16px] font-normal leading-[1.5] text-[rgba(194,209,232,0.82)] max-sm:mt-6 max-sm:text-[15px]">
                <p>We map the eight elements against live practice—not slide decks.</p>
                <p className="mt-5">That baseline is required before any redesign can hold.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper bg="white" id="scope">
        <div className="mx-auto w-full max-w-[1040px]">
          <p className="mb-6 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(90,100,120,0.68)]">
            Scope
          </p>
          <h2 className="max-w-[720px] text-[30px] font-bold leading-[1.12] tracking-[-0.015em] text-[#0A1628] max-sm:text-[24px]">
            What is examined
          </h2>
          <p className="mt-6 max-w-[560px] text-[16px] font-normal leading-[1.55] text-[#5A6478] max-sm:text-[15px]">
            Across selected high-impact decisions.
          </p>
          <p className="mb-6 mt-9 border-t border-[rgba(10,22,40,0.08)] pt-9 text-[11px] font-medium uppercase leading-[1.3] tracking-[0.14em] text-[rgba(90,100,120,0.55)] lg:mt-10 lg:pt-10">
            Elements
          </p>
          <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 sm:gap-y-10 sm:gap-x-14 lg:max-w-[720px] lg:gap-y-12">
            {SCOPE_ELEMENTS.map((el) => (
              <div key={el.n}>
                <p className="mb-2.5 text-[11px] font-medium uppercase leading-[1] tracking-[0.18em] text-[rgba(10,22,40,0.35)]">
                  {String(el.n).padStart(2, '0')}
                </p>
                <p className="text-[16px] font-medium capitalize leading-[1.55] text-[#0A1628] max-sm:text-[15px]">
                  {el.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper bg="gray" id="why-this-step">
        <p className="mb-8 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(90,100,120,0.72)]">
          Why this step
        </p>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-x-10 lg:gap-y-0 xl:gap-x-14">
          <div className="flex max-w-[300px] flex-col gap-6 text-[16px] font-normal leading-[1.55] text-[#5A6478] max-sm:max-w-none max-sm:text-[15px] lg:max-w-[300px]">
            <h2 className="text-[22px] font-bold leading-[1.32] tracking-[-0.015em] text-[#0A1628] max-sm:text-[19px]">
              This precedes any redesign or implementation
            </h2>
            <p>Without a clear view of how decisions currently operate,</p>
          </div>
          <div className="border-t border-[rgba(0,0,0,0.06)] pt-12 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10 xl:pl-12">
            <p className="text-[22px] font-bold leading-[1.32] tracking-[-0.015em] text-[#0A1628] max-sm:text-[19px]">
              Change without a baseline reproduces the same drift.
            </p>
            <div className="mt-8 flex max-w-[480px] flex-col gap-6 text-[16px] font-medium leading-[1.55] text-[#18253D] max-sm:gap-5 max-sm:text-[15px]">
              {WHY_CONSEQUENCES.map((line) => (
                <p key={line} className="capitalize">
                  {line}
                </p>
              ))}
            </div>
          </div>
          <div className="flex max-w-[300px] flex-col justify-between gap-8 border-t border-[rgba(0,0,0,0.06)] pt-12 text-[15px] font-normal leading-[1.58] text-[#5A6478] max-sm:max-w-none max-sm:text-[14px] lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10 xl:pl-12">
            <p className="font-semibold leading-[1.55] text-[#0A1628]">
              The diagnostic establishes the baseline.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper bg="white" id="output" className="!pb-24 md:!pb-28">
        <div className="mx-auto w-full max-w-[1040px]">
          <p className="mb-6 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(90,100,120,0.68)]">
            Output
          </p>
          <h2 className="max-w-[720px] text-[30px] font-bold leading-[1.12] tracking-[-0.015em] text-[#0A1628] max-sm:text-[24px]">
            What you receive
          </h2>
          <p className="mb-6 mt-9 border-t border-[rgba(10,22,40,0.08)] pt-9 text-[11px] font-medium uppercase leading-[1.3] tracking-[0.14em] text-[rgba(90,100,120,0.55)] lg:mt-10 lg:pt-10">
            Deliverables
          </p>
          <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 sm:gap-y-10 sm:gap-x-14 lg:max-w-[720px] lg:gap-y-12">
            {OUTPUT_DELIVERABLES.map((line, i) => (
              <div key={line}>
                <p className="mb-2.5 text-[11px] font-medium uppercase leading-[1] tracking-[0.18em] text-[rgba(10,22,40,0.35)]">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <p className="text-[16px] font-medium leading-[1.55] text-[#0A1628] max-sm:text-[15px]">
                  {line}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper bg="navy" className="!py-24 md:!py-28 lg:!py-28 xl:!py-28 2xl:!py-28">
        <div className="mx-auto w-full max-w-[1040px]">
          <h2 className="max-w-[860px] text-[40px] font-bold leading-[1.08] tracking-[-0.02em] text-white max-md:text-[32px] max-sm:text-[26px]">
            <span className="block">Request a Decision Diagnostic</span>
          </h2>
          <div className="mt-10 grid grid-cols-1 items-start gap-10 border-t border-[rgba(255,255,255,0.12)] pt-10 lg:mt-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-x-14 lg:pt-12">
            <div className="max-w-[360px] self-stretch text-[16px] font-normal leading-[1.6] text-[rgba(255,255,255,0.58)] lg:order-2 lg:flex lg:flex-col lg:justify-end">
              <p>Structured assessment of how decisions run today—not a generic workshop.</p>
            </div>
            <div className="max-w-[620px] lg:order-1">
              <p className="text-[17px] font-medium leading-[1.65] text-[rgba(255,255,255,0.8)] max-sm:text-[15px]">
                We focus on the recurring decisions that drive outcomes, map their eight elements, and isolate where
                structure is missing.
              </p>
              <p className="mt-6 text-[17px] font-normal leading-[1.65] text-[rgba(255,255,255,0.65)] max-sm:text-[15px]">
                Use the output as the agreed baseline before design or implementation work begins.
              </p>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-end lg:mt-14">
            <p className="max-w-[560px] text-right text-[17px] font-medium leading-[1.6] text-[rgba(255,255,255,0.9)] max-sm:text-[15px]">
              Complete the structured intake to start the diagnostic.
            </p>
            <div className="mt-10 w-full flex justify-end">
              <Link
                href={L('/decision-diagnostic/intake')}
                className="inline-flex min-h-11 max-w-full items-center justify-center bg-[#2B5CE6] px-10 py-3 text-center text-[15px] font-semibold leading-none tracking-[0.02em] text-white transition-colors duration-200 hover:bg-[#1E4AC4] max-sm:px-5 max-sm:text-[13px] max-sm:leading-snug"
                style={{ borderRadius: 0 }}
              >
                Request a Decision Diagnostic
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
