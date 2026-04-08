import SectionWrapper from '@/components/SectionWrapper';

const KEY_TOPICS = [
  'Decision inconsistency across teams',
  'Data does not align decisions',
  'Ownership determines outcomes',
  'Logic varies under the same conditions',
  'Reporting does not translate into action',
] as const;

export default async function InsightsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await params;

  return (
    <>
      <section className="flex min-w-0 w-full scroll-mt-[var(--header-offset)] items-start bg-[#0A1628]" id="hero">
        <div className="mx-auto w-full min-w-0 max-w-[1280px] px-10 pb-24 pt-[var(--header-offset)] max-md:px-5 max-md:pb-16 lg:pb-24 lg:pt-32 xl:pt-[8.5rem]">
          <p className="mb-10 text-[12px] font-semibold uppercase leading-[1.3] tracking-[0.08em] text-[rgba(255,255,255,0.42)] max-sm:mb-9 max-sm:text-[11px]">
            Insights
          </p>
          <div className="grid min-w-0 grid-cols-1 items-start gap-12 md:grid-cols-[2fr_3fr] md:gap-x-10 md:gap-y-0 lg:gap-x-12 xl:gap-x-20">
            <div className="order-2 flex min-w-0 max-w-[420px] flex-col gap-6 text-[15px] font-normal leading-[1.5] text-[rgba(194,209,232,0.68)] max-sm:text-[14px] md:order-1 md:translate-y-[2%] md:pt-1">
              <p>Recurring decisions fail in consistent ways.</p>
            </div>
            <div className="order-1 flex min-w-0 w-full flex-col items-start md:order-2 md:translate-y-[2%]">
              <h1 className="text-balance break-words text-[56px] font-bold leading-[1.03] tracking-[-0.03em] text-white max-md:text-[42px] max-sm:text-[32px]">
                Decision systems thinking
              </h1>
              <div className="mt-8 max-w-[520px] text-[16px] font-normal leading-[1.5] text-[rgba(194,209,232,0.82)] max-sm:mt-6 max-sm:text-[15px]">
                <p>These patterns reveal how decisions actually operate.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper bg="white" id="key-topics" className="border-t border-[rgba(10,22,40,0.08)]">
        <div className="mx-auto w-full max-w-[1040px]">
          <p className="mb-6 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(90,100,120,0.68)]">
            Key topics
          </p>
          <h2 className="max-w-[720px] text-[30px] font-bold leading-[1.12] tracking-[-0.015em] text-[#0A1628] max-sm:text-[24px]">
            Structural patterns across decisions
          </h2>

          <div className="mt-9 grid grid-cols-1 items-start gap-10 border-t border-[rgba(10,22,40,0.08)] pt-9 lg:mt-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.95fr)] lg:gap-x-14 lg:gap-y-0 lg:pt-10 xl:gap-x-16">
            <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 sm:gap-y-10 sm:gap-x-14 lg:max-w-[520px] lg:gap-y-12">
              {KEY_TOPICS.slice(0, 4).map((text, i) => (
                <div key={text}>
                  <p className="mb-2.5 text-[11px] font-medium uppercase leading-[1] tracking-[0.18em] text-[rgba(10,22,40,0.35)]">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <p className="text-[16px] font-medium leading-[1.55] text-[#0A1628] max-sm:text-[15px]">{text}</p>
                </div>
              ))}
              <div className="sm:col-span-2 flex justify-center pt-2 sm:pt-4">
                <div className="w-full max-w-[20rem]">
                  <p className="mb-2.5 text-[11px] font-medium uppercase leading-[1] tracking-[0.18em] text-[rgba(10,22,40,0.35)]">
                    05
                  </p>
                  <p className="text-[16px] font-medium leading-[1.55] text-[#0A1628] max-sm:text-[15px]">
                    {KEY_TOPICS[4]}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex h-full flex-col justify-center text-[16px] font-normal leading-[1.55] text-[rgba(10,22,40,0.78)] max-sm:text-[15px]">
              <p>These patterns reveal how decisions actually operate.</p>
            </div>
          </div>

          <div className="mt-9 border-t border-[rgba(10,22,40,0.08)] pt-9 text-center lg:mt-10 lg:pt-10">
            <p className="mx-auto max-w-[520px] text-[16px] font-medium leading-[1.5] text-[#0A1628] max-sm:text-[15px]">
              How is the decision structured?
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper bg="navy" id="direction" className="!pb-24 md:!pb-28">
        <div className="mx-auto w-full max-w-[1040px]">
          <div className="max-w-[920px]">
            <h2 className="text-[40px] font-bold leading-[1.05] tracking-[-0.02em] text-white max-md:text-[32px] max-sm:text-[24px]">
              Each pattern points to one question
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-1 items-start gap-10 border-t border-[rgba(255,255,255,0.1)] pt-10 lg:mt-12 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-x-14 lg:gap-y-0 lg:pt-12 xl:gap-x-16">
            <div className="order-2 max-w-[280px] text-[15px] font-normal leading-[1.5] text-[rgba(194,209,232,0.62)] max-sm:max-w-none max-sm:text-[14px] lg:order-1 lg:pt-1">
              <p>Recurring decisions fail in consistent ways.</p>
            </div>
            <div className="order-1 flex max-w-[560px] flex-col gap-7 text-[17px] font-normal leading-[1.55] text-[rgba(194,209,232,0.82)] max-sm:gap-6 max-sm:text-[15px] lg:order-2">
              <p className="text-[22px] font-bold leading-[1.32] tracking-[-0.015em] text-white max-sm:text-[19px]">
                How is the decision structured?
              </p>
              <p>Understanding this determines whether outcomes can be made consistent.</p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
