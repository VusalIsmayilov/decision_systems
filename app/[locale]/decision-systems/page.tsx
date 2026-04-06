import SectionWrapper from '@/components/SectionWrapper';

const MECHANISM_ITEMS = [
  'the trigger is unclear',
  'inputs vary',
  'logic is interpreted',
  'ownership shifts',
  'workflow changes',
  'outcomes are not tracked',
] as const;

const CONTRAST_PAIRS = [
  { left: 'Data provides inputs,', right: 'not decisions' },
  { left: 'Dashboards display information,', right: 'not logic' },
  { left: 'Process defines steps,', right: 'not evaluation criteria' },
  {
    left: 'Governance assigns responsibility,',
    right: 'not how decisions are made',
  },
] as const;

export default async function DecisionSystemsPage({
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
            Structural Cause
          </p>
          <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[2fr_3fr] md:gap-x-10 md:gap-y-0 lg:gap-x-12 xl:gap-x-20">
            <div className="order-2 flex max-w-[420px] flex-col gap-6 text-[15px] font-normal leading-[1.5] text-[rgba(194,209,232,0.68)] max-sm:text-[14px] md:order-1 md:translate-y-[2%] md:pt-1">
              <p>
                Organizations operate with data, dashboards, and reporting.
              </p>
              <p>Yet the same decisions continue to produce different outcomes.</p>
            </div>
            <div className="order-1 flex flex-col items-start md:order-2 md:translate-y-[2%]">
              <h1 className="text-balance text-[56px] font-bold leading-[1.03] tracking-[-0.03em] text-white max-md:text-[42px] max-sm:text-[32px]">
                Inconsistency persists because decisions are not structurally defined
              </h1>
              <div className="mt-8 max-w-[520px] text-[16px] font-normal leading-[1.5] text-[rgba(194,209,232,0.82)] max-sm:mt-6 max-sm:text-[15px]">
                <p>The issue is not access to information.</p>
                <p className="mt-5">
                  The issue is that the decision itself has no defined structure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper bg="white" id="mechanism-of-failure">
        <div className="mx-auto w-full max-w-[1040px]">
          <p className="mb-6 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(90,100,120,0.68)]">
            Mechanism of failure
          </p>
          <h2 className="max-w-[720px] text-[30px] font-bold leading-[1.12] tracking-[-0.015em] text-[#0A1628] max-sm:text-[24px]">
            Decisions are reconstructed every time
          </h2>
          <p className="mt-6 max-w-[560px] text-[16px] font-normal leading-[1.55] text-[#5A6478] max-sm:text-[15px]">
            Recurring decisions are treated as events.
          </p>
          <p className="mb-6 mt-9 border-t border-[rgba(10,22,40,0.08)] pt-9 text-[11px] font-medium uppercase leading-[1.3] tracking-[0.14em] text-[rgba(90,100,120,0.55)] lg:mt-10 lg:pt-10">
            Each time they occur:
          </p>
          <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 sm:gap-y-10 sm:gap-x-14 lg:max-w-[720px] lg:gap-y-12">
            {MECHANISM_ITEMS.map((text, i) => (
              <div key={text}>
                <p className="mb-2.5 text-[11px] font-medium uppercase leading-[1] tracking-[0.18em] text-[rgba(10,22,40,0.35)]">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <p className="text-[16px] font-medium capitalize leading-[1.55] text-[#0A1628] max-sm:text-[15px]">
                  {text}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-9 border-t border-[rgba(10,22,40,0.08)] pt-9 lg:mt-10 lg:pt-10">
            <p className="text-right text-[17px] font-semibold leading-[1.48] text-[#0A1628] max-sm:text-[15px]">
              <span className="block">There is no stable structure.</span>
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper bg="gray" id="why-existing-efforts-fail">
        <div className="mx-auto w-full max-w-[1040px]">
          <p className="mb-6 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(90,100,120,0.72)]">
            Why existing efforts fail
          </p>
          <h2 className="max-w-[720px] text-[30px] font-bold leading-[1.12] tracking-[-0.015em] text-[#0A1628] max-sm:text-[24px]">
            Data, reporting, and process do not define decisions
          </h2>
          <div className="mt-9 grid grid-cols-1 items-start gap-10 border-t border-[rgba(10,22,40,0.08)] pt-9 lg:mt-10 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-x-14 lg:gap-y-0 lg:pt-10 xl:gap-x-16">
            <div className="order-2 max-w-[280px] text-[15px] font-normal leading-[1.55] text-[#5A6478] max-sm:max-w-none max-sm:text-[14px] lg:order-1 lg:pt-0.5">
              <p>Each line states what the organization relies on—and what it does not define.</p>
            </div>
            <div className="order-1 flex max-w-[620px] flex-col gap-6 lg:order-2">
              {CONTRAST_PAIRS.map((pair) => (
                <div key={pair.left}>
                  <p className="text-[17px] font-medium leading-[1.55] text-[#0A1628] max-sm:text-[16px]">
                    <span className="text-[rgba(69,82,104,0.84)]">{pair.left}</span>{' '}
                    <span className="text-[rgba(10,22,40,0.45)]">/</span>{' '}
                    <span>{pair.right}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-9 border-t border-[rgba(10,22,40,0.08)] pt-9 lg:mt-10 lg:pt-10">
            <p className="ml-auto max-w-[520px] text-right text-[16px] font-semibold leading-[1.5] text-[#0A1628] max-sm:text-[15px]">
              None of these determine how a decision works.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper bg="navy" id="reframe" className="!pb-24 md:!pb-28">
        <div className="mx-auto w-full max-w-[1040px]">
          <div className="max-w-[920px]">
            <h2 className="text-[40px] font-bold leading-[1.05] tracking-[-0.02em] text-white max-md:text-[32px] max-sm:text-[24px]">
              <span className="block">The problem is not information or discipline.</span>
              <span className="block">The problem is that the decision itself is undefined.</span>
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-1 items-start gap-10 border-t border-[rgba(255,255,255,0.1)] pt-10 lg:mt-12 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-x-14 lg:gap-y-0 lg:pt-12 xl:gap-x-16">
            <div className="order-2 max-w-[280px] text-[15px] font-normal leading-[1.5] text-[rgba(194,209,232,0.62)] max-sm:max-w-none max-sm:text-[14px] lg:order-1 lg:pt-1">
              <p>Until the structure of the decision is explicit, consistent outcomes cannot emerge.</p>
            </div>
            <div className="order-1 flex max-w-[560px] flex-col gap-7 text-[17px] font-normal leading-[1.55] text-[rgba(194,209,232,0.82)] max-sm:gap-6 max-sm:text-[15px] lg:order-2">
              <p>
                The decision layer must be defined before data, process, or governance can hold.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
