import SectionWrapper from '@/components/SectionWrapper';

const PATTERN_LINES = [
  'The same discussion returns in every cycle',
  'Teams align on data, but not on action',
  'One team acts while another delays',
  'Decisions change when ownership changes',
  'Reports explain performance, but do not guide action',
  'No one can describe how the decision is supposed to work',
] as const;

export default async function HomePage({
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
            Decision Consistency
          </p>
          <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[2fr_3fr] md:gap-x-10 md:gap-y-0 lg:gap-x-12 xl:gap-x-20">
            <div className="order-2 flex max-w-[420px] flex-col gap-6 text-[15px] font-normal leading-[1.5] text-[rgba(194,209,232,0.68)] max-sm:text-[14px] md:order-1 md:translate-y-[2%] md:pt-1">
              <p>The same business decision is made repeatedly across your organization.</p>
              <p>Yet each time, it produces a different outcome.</p>
            </div>
            <div className="order-1 flex flex-col items-start md:order-2 md:translate-y-[2%]">
              <h1 className="text-balance text-[56px] font-bold leading-[1.03] tracking-[-0.03em] text-white max-md:text-[42px] max-sm:text-[32px]">
                The same decision should not produce different outcomes.
              </h1>
              <div className="mt-8 max-w-[520px] text-[16px] font-normal leading-[1.5] text-[rgba(194,209,232,0.82)] max-sm:mt-6 max-sm:text-[15px]">
                <p>Different teams interpret the same situation differently.</p>
                <p className="mt-5">The same numbers lead to different actions.</p>
                <p className="mt-5">Decisions depend on who is involved.</p>
                <p className="mt-8 text-right text-[16px] font-semibold leading-[1.45] text-white max-sm:text-[15px]">
                  <span className="block">This is not isolated.</span>
                  <span className="block">It repeats.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper bg="white" id="observable-patterns">
        <div className="mx-auto w-full max-w-[1040px]">
          <p className="mb-6 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(90,100,120,0.68)]">
            Observable patterns
          </p>
          <h2 className="max-w-[720px] text-[30px] font-bold leading-[1.12] tracking-[-0.015em] text-[#0A1628] max-sm:text-[24px]">
            It shows up the same way every time
          </h2>
          <p className="mb-6 mt-9 border-t border-[rgba(10,22,40,0.08)] pt-9 text-[11px] font-medium uppercase leading-[1.3] tracking-[0.14em] text-[rgba(90,100,120,0.55)] lg:mt-10 lg:pt-10">
            Patterns
          </p>
          <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 sm:gap-y-10 sm:gap-x-14 lg:max-w-[720px] lg:gap-y-12">
            {PATTERN_LINES.map((line, i) => (
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
          <div className="mt-9 border-t border-[rgba(10,22,40,0.08)] pt-9 text-center lg:mt-10 lg:pt-10">
            <p className="mx-auto max-w-[520px] text-[16px] font-medium leading-[1.5] text-[#0A1628] max-sm:text-[15px]">
              These patterns are consistent across functions, not local to one team.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper bg="gray" id="implication">
        <p className="mb-8 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(90,100,120,0.72)]">
          Implication
        </p>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-x-10 lg:gap-y-0 xl:gap-x-14">
          <div className="flex max-w-[300px] flex-col gap-6 text-[16px] font-normal leading-[1.55] text-[#5A6478] max-sm:max-w-none max-sm:text-[15px] lg:max-w-[300px]">
            <h2 className="text-[22px] font-bold leading-[1.32] tracking-[-0.015em] text-[#0A1628] max-sm:text-[19px]">
              This is recurring, not incidental
            </h2>
          </div>
          <div className="border-t border-[rgba(0,0,0,0.06)] pt-12 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10 xl:pl-12">
            <p className="text-[17px] font-normal leading-[1.55] text-[#5A6478] max-sm:text-[15px]">
              When the same type of decision produces different outcomes under the same conditions,
            </p>
            <p className="mt-8 text-[22px] font-bold leading-[1.32] tracking-[-0.015em] text-[#0A1628] max-sm:text-[19px]">
              the issue is not isolated variation.
            </p>
          </div>
          <div className="flex max-w-[300px] flex-col gap-6 border-t border-[rgba(0,0,0,0.06)] pt-12 text-[15px] font-normal leading-[1.58] text-[#5A6478] max-sm:max-w-none max-sm:text-[14px] lg:col-span-1 lg:max-w-[300px] lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10 xl:pl-12">
            <p className="font-semibold leading-[1.55] text-[#0A1628]">
              It is a recurring condition.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper bg="navy" id="transition" className="!pb-24 md:!pb-28">
        <div className="mx-auto w-full max-w-[1040px]">
          <div className="max-w-[920px]">
            <h2 className="text-[40px] font-bold leading-[1.05] tracking-[-0.02em] text-white max-md:text-[32px] max-sm:text-[24px]">
              What explains this pattern
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-1 items-start gap-10 border-t border-[rgba(255,255,255,0.1)] pt-10 lg:mt-12 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-x-14 lg:gap-y-0 lg:pt-12 xl:gap-x-16">
            <div className="order-2 max-w-[280px] text-[15px] font-normal leading-[1.5] text-[rgba(194,209,232,0.62)] max-sm:max-w-none max-sm:text-[14px] lg:order-1 lg:pt-1">
              <p>If inconsistency repeats across decisions, teams, and time,</p>
            </div>
            <div className="order-1 flex max-w-[560px] flex-col gap-7 text-[17px] font-normal leading-[1.55] text-[rgba(194,209,232,0.82)] max-sm:gap-6 max-sm:text-[15px] lg:order-2">
              <p className="font-medium text-[rgba(255,255,255,0.92)]">
                what is driving it is not immediately visible.
              </p>
              <p>It is not contained in data, tools, or individual behavior.</p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
