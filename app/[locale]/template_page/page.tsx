import SectionWrapper from '@/components/SectionWrapper';

export default async function TemplatePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await params;
  return (
    <>
      {/* Split grids: home hero + Services-style heroes use md 2-col; other narrative bands use lg. */}
      {/* Section 1: Hero — Definition + light contrast — Navy */}
      <section className="flex scroll-mt-[5.5rem] items-start bg-[#0A1628]">
        <div className="mx-auto w-full max-w-[1280px] px-10 pb-24 pt-24 max-md:px-5 max-md:pb-16 max-md:pt-24 max-sm:pt-28 md:pt-28 lg:pb-24 lg:pt-32 xl:pt-[8.5rem]">
          <p className="mb-10 text-[12px] font-semibold uppercase leading-[1.3] tracking-[0.08em] text-[rgba(255,255,255,0.42)] max-sm:mb-9 max-sm:text-[11px]">
            DataOfis Decision Systems Design
          </p>

          {/* 40% contrast (left) / 60% dominant (right); mobile: dominant first; md+ matches Services/About hero split */}
          <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[2fr_3fr] md:gap-x-10 md:gap-y-0 lg:gap-x-12 xl:gap-x-20">
            {/* [PROCESSING ZONE — left 40% — tertiary contrast] */}
            <div className="order-2 flex max-w-[420px] flex-col gap-6 text-[15px] font-normal leading-[1.5] text-[rgba(194,209,232,0.68)] max-sm:text-[14px] md:order-1 md:translate-y-[2%] md:pt-1">
              <p>
                Most organizations operate in a fragmented state—where ownership is distributed, direction shifts, and decisions do not form within a single system.
              </p>
              <p>Activity increases, but it does not produce consistent outcomes.</p>
            </div>

            {/* [ENTRY ZONE — right 60% — primary + secondary] */}
            <div className="order-1 flex flex-col items-start md:order-2 md:translate-y-[2%]">
              <h1 className="text-balance text-[56px] font-bold leading-[1.03] tracking-[-0.03em] text-white max-md:text-[42px] max-sm:text-[32px]">
                Your data system is not under control.
              </h1>
              <div className="mt-8 max-w-[520px] text-[16px] font-normal leading-[1.5] text-[rgba(194,209,232,0.82)] max-sm:mt-6 max-sm:text-[15px]">
                <p>Control is not a matter of investment or tools.</p>
                <p className="mt-5">
                  It is a structural position—where ownership is singular, direction is defined, and the system operates as one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Executive Problem Patterns — Recognition — White */}
      <SectionWrapper bg="white">
        <div className="mx-auto w-full max-w-[640px]">
          <p className="mb-8 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(90,100,120,0.68)]">
            What We See
          </p>

          {/* [ENTRY ZONE] */}
          <h2 className="text-[26px] font-bold leading-[1.22] tracking-[-0.01em] text-[#0A1628] max-sm:text-[21px]">
            The same decision produces different outcomes across teams.
          </h2>

          {/* [PROCESSING ZONE — compression + staggered rhythm] */}
          <div className="mt-9 border-t border-[rgba(10,22,40,0.08)] pt-9 text-[17px] font-medium leading-[1.48] text-[rgba(69,82,104,0.84)] max-sm:text-[15px]">
            <p>
              <span className="block">Information is available, but it does not lead to</span>
              <span className="block">consistent decisions.</span>
            </p>
            <p className="mt-7 pl-6 md:mt-8 md:pl-10">
              <span className="block">Priorities shift, without a stable reference point</span>
              <span className="block">to hold them in place.</span>
            </p>
            <p className="mt-7 md:mt-8">
              <span className="block">Ownership exists, but it does not translate into</span>
              <span className="block">coordinated outcomes.</span>
            </p>
            <p className="mt-7 pl-6 md:mt-8 md:pl-10">
              <span className="block">Questions repeat—even when the answers have already</span>
              <span className="block">been produced.</span>
            </p>
          </div>

          {/* [EXIT / TRANSITION — terminal pull, right-weighted] */}
          <div className="mt-9 border-t border-[rgba(10,22,40,0.08)] pt-9 lg:mt-10 lg:pt-10">
            <p className="text-right text-[17px] font-semibold leading-[1.48] text-[#0A1628] max-sm:text-[15px]">
              <span className="block">The system is active, </span>
              <span className="block">but it does not converge.</span>
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 3: Why Current Efforts Fail — Causality — Gray */}
      <SectionWrapper bg="gray">
        <p className="mb-8 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(90,100,120,0.72)]">
          Why Current Efforts Fail
        </p>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-x-10 lg:gap-y-0 xl:gap-x-14">
          {/* ENTRY — left, initiating condition */}
          <div className="flex max-w-[300px] flex-col gap-6 text-[16px] font-normal leading-[1.55] text-[#5A6478] max-sm:max-w-none max-sm:text-[15px] lg:max-w-[300px]">
            <p>Data initiatives continue to expand, but decisions do not become more consistent.</p>
            <p>Reporting activity increases, but it does not translate into decision change.</p>
          </div>

          {/* PROCESSING — center, dominant mechanism */}
          <div className="border-t border-[rgba(0,0,0,0.06)] pt-12 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10 xl:pl-12">
            <p className="text-[22px] font-bold leading-[1.32] tracking-[-0.015em] text-[#0A1628] max-sm:text-[19px]">
              Ownership exists across teams, yet no single direction holds.
            </p>
          </div>

          {/* EXIT — consequence + pull forward */}
          <div className="flex max-w-[300px] flex-col gap-6 border-t border-[rgba(0,0,0,0.06)] pt-12 text-[15px] font-normal leading-[1.58] text-[#5A6478] max-sm:max-w-none max-sm:text-[14px] lg:col-span-1 lg:max-w-[300px] lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10 xl:pl-12">
            <p>
              Effort accumulates across initiatives, systems, and teams—without converging into a controlled outcome.
            </p>
            <p className="font-semibold leading-[1.55] text-[#0A1628]">
              The function operates with visible progress, but without a system that enforces alignment.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 4: Firm Definition — Definition — Navy */}
      <SectionWrapper bg="navy">
        <div className="mx-auto w-full max-w-[1040px]">
          {/* [ENTRY ZONE — compressed core] */}
          <div className="max-w-[920px]">
            <h2 className="text-[40px] font-bold leading-[1.05] tracking-[-0.02em] text-white max-md:text-[32px] max-sm:text-[24px]">
              <span className="block">DataOfis Decision Systems Design defines a distinct category of data leadership:</span>
              <span className="block">ownership of the data and AI function as a system.</span>
            </h2>
          </div>

          {/* [LEFT anchor | RIGHT expansion] — mobile: right (dominant) before left (anchor) */}
          <div className="mt-10 grid grid-cols-1 items-start gap-10 border-t border-[rgba(255,255,255,0.1)] pt-10 lg:mt-12 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-x-14 lg:gap-y-0 lg:pt-12 xl:gap-x-16">
            <div className="order-2 max-w-[280px] text-[15px] font-normal leading-[1.5] text-[rgba(194,209,232,0.62)] max-sm:max-w-none max-sm:text-[14px] lg:order-1 lg:pt-1">
              <p>
                It is established at the system level, where direction, structure, and execution operate as
                one.
              </p>
            </div>
            <div className="order-1 flex max-w-[560px] flex-col gap-7 text-[17px] font-normal leading-[1.55] text-[rgba(194,209,232,0.82)] max-sm:gap-6 max-sm:text-[15px] lg:order-2">
              <p>
                This places the function under a single direction—where decisions are not formed
                independently, but within a defined and controlled structure.
              </p>
              <p>
                Ownership is not distributed across initiatives or vendors.
              </p>
            </div>
          </div>

          {/* [EXIT / TRANSITION — isolated terminal, bottom-right] */}
          <div className="mt-10 border-t border-[rgba(255,255,255,0.1)] pt-10 lg:mt-12 lg:pt-12">
            <p className="ml-auto max-w-[340px] text-right text-[15px] font-medium leading-[1.5] text-[rgba(255,255,255,0.88)] max-sm:max-w-none max-sm:text-[14px]">
              This is not managed at the initiative level.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 5: Operating Model (Reference) — Structure — Gray */}
      <SectionWrapper bg="gray">
        <div className="mx-auto w-full max-w-[1040px]">
          <p className="mb-6 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(90,100,120,0.72)]">
            Operating Model
          </p>

          {/* [ENTRY ZONE — top-left anchor] */}
          <h2 className="max-w-[720px] text-[30px] font-bold leading-[1.12] tracking-[-0.015em] text-[#0A1628] max-sm:text-[24px]">
            Control does not emerge from activity.
          </h2>

          {/* [LEFT contrast | RIGHT dominant] — mobile: right block before left */}
          <div className="mt-9 grid grid-cols-1 items-start gap-10 border-t border-[rgba(10,22,40,0.08)] pt-9 lg:mt-10 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-x-14 lg:gap-y-0 lg:pt-10 xl:gap-x-16">
            <div className="order-2 max-w-[280px] text-[15px] font-normal leading-[1.55] text-[#5A6478] max-sm:max-w-none max-sm:text-[14px] lg:order-1 lg:pt-0.5">
              <p>Without a defined model, effort fragments.</p>
              <p className="mt-6">With it, the system operates under consistent control.</p>
            </div>
            <div className="order-1 flex max-w-[620px] flex-col gap-6 text-[17px] font-medium leading-[1.55] text-[#0A1628] max-sm:gap-5 max-sm:text-[16px] lg:order-2">
              <p>It is maintained through a structured operating model.</p>
              <p>
                <span className="block">This model defines how the data function operates as a system—</span>
                <span className="block">ensuring direction holds, structure is enforced, and execution remains aligned.</span>
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 6: Intervention Domains (Overview) — Structure — White */}
      <SectionWrapper
        bg="white"
        className="border-t border-[rgba(10,22,40,0.08)]"
      >
        <div className="mx-auto w-full max-w-[1040px]">
          <p className="mb-6 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(90,100,120,0.68)]">
            Domains
          </p>

          {/* [ENTRY ZONE] */}
          <h2 className="max-w-[720px] text-[30px] font-bold leading-[1.12] tracking-[-0.015em] text-[#0A1628] max-sm:text-[24px]">
            Control is established across a defined set of domains.
          </h2>

          {/* [GRID | RIGHT RELATIONAL] */}
          <div className="mt-9 grid grid-cols-1 items-start gap-10 border-t border-[rgba(10,22,40,0.08)] pt-9 lg:mt-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.95fr)] lg:gap-x-14 lg:gap-y-0 lg:pt-10 xl:gap-x-16">
            <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 sm:gap-y-10 sm:gap-x-14 lg:max-w-[520px] lg:gap-y-12">
              {(
                [
                  { idx: '01', title: 'Direction' },
                  { idx: '02', title: 'Structure' },
                  { idx: '03', title: 'Execution' },
                  { idx: '04', title: 'Architecture', supporting: true as const },
                ] as const
              ).map((item) => (
                <div key={item.idx}>
                  <p className="mb-2.5 text-[11px] font-medium uppercase leading-[1] tracking-[0.18em] text-[rgba(10,22,40,0.35)]">
                    {item.idx}
                  </p>
                  <p className="text-[19px] font-medium leading-[1.25] text-[#0A1628] sm:text-[20px]">
                    {item.title}
                  </p>
                  {'supporting' in item ? (
                    <p className="mt-1 text-[13px] font-normal leading-[1.35] text-[rgba(10,22,40,0.45)]">
                      (supporting)
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
            <div className="flex h-full flex-col justify-center text-[16px] font-normal leading-[1.55] text-[rgba(10,22,40,0.78)] max-sm:text-[15px]">
              <p>Each domain represents a distinct layer of control.</p>
              <p className="mt-6">
                Together, they determine whether the system operates as one—or fragments across parts.
              </p>
            </div>
          </div>

          {/* [EXIT / TRANSITION — system dependency] */}
          <div className="mt-9 border-t border-[rgba(10,22,40,0.08)] pt-9 text-center lg:mt-10 lg:pt-10">
            <p className="mx-auto max-w-[520px] text-[16px] font-medium leading-[1.5] text-[#0A1628] max-sm:text-[15px]">
              Fragment one domain, and control breaks.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 7: Engagement Triggers — Situational — Gray */}
      <SectionWrapper
        bg="gray"
        className="md:pb-32 lg:pb-[180px]"
      >
        <div className="mx-auto w-full max-w-[1040px]">
          <p className="mb-6 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.12em] text-[rgba(90,100,120,0.66)]">
            Engagement Triggers
          </p>

          {/* [ENTRY ZONE] */}
          <h2 className="max-w-[640px] text-[30px] font-bold leading-[1.12] tracking-[-0.015em] text-[#0F1B30] max-sm:text-[24px]">
            Control becomes critical at specific moments.
          </h2>

          {/* [LEFT CLUSTER | RIGHT CLUSTER] */}
          <div className="mt-9 grid grid-cols-1 items-start gap-10 border-t border-[rgba(10,22,40,0.08)] pt-9 lg:mt-10 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-0 lg:pt-10 xl:gap-x-16">
            <div className="max-w-[480px]">
              <p className="mb-6 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.14em] text-[rgba(90,100,120,0.55)]">
                Transformation / investment
              </p>
              <div className="flex flex-col gap-8 text-[16px] font-medium leading-[1.55] text-[#18253D] max-sm:gap-7 max-sm:text-[15px]">
                <p>
                  A major transformation is about to begin—and direction must hold across all initiatives.
                </p>
                <p>
                  A significant data or AI investment is planned—requiring decisions to align before execution
                  scales.
                </p>
              </div>
            </div>
            <div className="max-w-[480px]">
              <p className="mb-6 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.14em] text-[rgba(90,100,120,0.55)]">
                Complexity / scrutiny
              </p>
              <div className="flex flex-col gap-8 text-[16px] font-medium leading-[1.55] text-[#18253D] max-sm:gap-7 max-sm:text-[15px]">
                <p>
                  Multiple vendors are involved, increasing coordination beyond what fragmented ownership can
                  sustain.
                </p>
                <p>
                  Delivery comes under direct scrutiny—exposing whether outcomes are controlled or incidental.
                </p>
              </div>
            </div>
          </div>

          {/* [EXIT / TRANSITION — bottom-right leadership trigger] */}
          <div className="mt-9 border-t border-[rgba(10,22,40,0.08)] pt-9 lg:mt-10 lg:flex lg:justify-end lg:pt-10">
            <p className="max-w-[400px] text-[16px] font-semibold leading-[1.5] text-[#0F1B30] max-sm:text-[15px] lg:text-right">
              <span className="block">Leadership changes reset direction—</span>
              <span className="block">without a system to carry it through.</span>
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 8: Credibility — Evidence — White */}
      <SectionWrapper bg="white">
        <div className="mx-auto w-full max-w-[1040px]">
          <p className="mb-6 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(90,100,120,0.66)]">
            Credibility
          </p>

          {/* [ENTRY ZONE] */}
          <h2 className="max-w-[720px] text-[30px] font-bold leading-[1.12] tracking-[-0.015em] text-[#0A1628] max-sm:text-[24px]">
            <span className="block max-xl:whitespace-normal xl:whitespace-nowrap">
              Experience is established under conditions where control
            </span>
            <span className="block max-xl:whitespace-normal xl:whitespace-nowrap">
              cannot be assumed.
            </span>
          </h2>

          {/* [LEFT context | RIGHT dominant] — mobile: right block before left */}
          <div className="mt-9 grid grid-cols-1 items-start gap-10 border-t border-[rgba(10,22,40,0.08)] pt-9 lg:mt-10 lg:grid-cols-[minmax(0,300px)_1fr] lg:gap-x-14 lg:gap-y-0 lg:pt-10 xl:gap-x-16">
            <div className="order-2 max-w-[300px] text-[15px] font-normal leading-[1.55] text-[#5A6478] max-sm:max-w-none max-sm:text-[14px] lg:order-1 lg:pt-1">
              <p>
                The model is applied where coordination, consistency, and control must hold under real
                operating pressure—not in isolated initiatives.
              </p>
            </div>
            <div className="order-1 flex max-w-[620px] flex-col gap-7 text-[17px] font-medium leading-[1.55] text-[#0A1628] max-sm:gap-6 max-sm:text-[15px] lg:order-2">
              <p>
                Work conducted across large-scale data and AI transformations—where multiple teams,
                systems, and stakeholders operate simultaneously.
              </p>
              <p>
                Direct exposure to environments where decisions carry organizational consequence and
                alignment cannot be deferred.
              </p>
            </div>
          </div>

          {/* [EXIT / TRANSITION — forward pull, repeated anchor] */}
          <div className="mt-9 border-t border-[rgba(10,22,40,0.08)] pt-9 text-center lg:mt-10 lg:pt-10">
            <p className="mx-auto max-w-[640px] text-[15px] font-medium leading-[1.55] text-[#0A1628] max-sm:text-[14px]">
              This is not designed for isolated initiatives.
            </p>
          </div>

        </div>
      </SectionWrapper>

      {/* Section 9: Conversion Framing — Framing — Navy */}
      {/* Compact navy CTA — vertical padding only here (overrides SectionWrapper scale at all breakpoints). */}
      <SectionWrapper bg="navy" className="!py-24 md:!py-28 lg:!py-28 xl:!py-28 2xl:!py-28">
        <div className="mx-auto w-full max-w-[1040px]">
          {/* [ENTRY ZONE — dominant definition block] */}
          <h2 className="max-w-[860px] text-[40px] max-md:text-[32px] max-sm:text-[26px] font-bold leading-[1.08] tracking-[-0.02em] text-white">
            <span className="block">The Executive Data Review is not a general</span>
            <span className="block">discussion of data.</span>
          </h2>

          {/* [PROCESSING ZONE — right dominant] */}
          <div className="mt-10 grid grid-cols-1 items-start gap-10 border-t border-[rgba(255,255,255,0.12)] pt-10 lg:mt-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-x-14 lg:pt-12">
            {/* Left — what it is not (mobile order: left after right via lg grid column positions) */}
            <div className="max-w-[360px] self-stretch flex flex-col justify-end text-[16px] font-normal leading-[1.6] text-[rgba(255,255,255,0.58)] lg:order-2">
              <p>
                It is not a sales process.
              </p>
            </div>

            {/* Right — what it is (dominant) */}
            <div className="max-w-[620px] lg:order-1">
              <p className="text-[17px] max-sm:text-[15px] font-medium leading-[1.65] text-[rgba(255,255,255,0.8)]">
                It is a focused evaluation of whether your data function operates under control—or continues as a set of
                disconnected efforts.
              </p>
              <p className="mt-6 text-[17px] max-sm:text-[15px] font-normal leading-[1.65] text-[rgba(255,255,255,0.65)]">
                The conversation is structured, direct, and limited to the points that determine how decisions
                form and execute.
              </p>
            </div>
          </div>

          {/* [EXIT / TRANSITION ZONE — bottom-right directional] */}
          <div className="mt-12 flex flex-col items-end lg:mt-14">
            <p className="max-w-[560px] lg:max-w-[520px] text-right text-[17px] max-sm:text-[15px] font-medium leading-[1.6] text-[rgba(255,255,255,0.9)]">
              It is an assessment of how your system actually operates.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
