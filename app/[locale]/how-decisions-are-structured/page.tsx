import SectionWrapper from '@/components/SectionWrapper';

const CURRENT_STATE_PROMPTS = [
  'What triggers the decision',
  'What inputs are used',
  'How logic is applied',
  'Who actually decides',
  'What action follows',
  'Whether outcomes are tracked',
] as const;

const STRUCTURAL_PAIRS = [
  { left: 'intended process', right: 'actual behavior' },
  { left: 'available data', right: 'decision inputs' },
  { left: 'discussion', right: 'decision logic' },
] as const;

const GAP_ITEMS = [
  'where decisions diverge',
  'where logic changes',
  'where ownership is unclear',
  'where outcomes are not connected back to decisions',
] as const;

const MUST_UNDERSTAND = [
  'which recurring decisions matter',
  'how they currently function',
  'where structure is missing',
] as const;

const CONSTRAINT_LINES = [
  'This cannot be derived from reports, process documentation, or internal alignment sessions.',
  'The decision structure is distributed across teams, systems, and individual judgment,',
  'and is not visible without a structured assessment.',
  'Internal teams work within the same implicit structure they are trying to evaluate,',
  'which makes gaps difficult to isolate objectively.',
] as const;

const WITHOUT_DIAGNOSTIC = [
  'structural gaps remain hidden',
  'interventions target symptoms, not causes',
  'redesign efforts reinforce existing inconsistency',
] as const;

export default async function HowDecisionsAreStructuredPage({
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
            Mechanism
          </p>
          <div className="grid min-w-0 grid-cols-1 items-start gap-12 md:grid-cols-[2fr_3fr] md:gap-x-10 md:gap-y-0 lg:gap-x-12 xl:gap-x-20">
            <div className="order-2 flex min-w-0 max-w-[420px] flex-col gap-6 text-[15px] font-normal leading-[1.5] text-[rgba(194,209,232,0.68)] max-sm:text-[14px] md:order-1 md:translate-y-[2%] md:pt-1">
              <p>A decision is not defined by documentation.</p>
              <p>It is defined by how it works in practice.</p>
            </div>
            <div className="order-1 flex min-w-0 w-full flex-col items-start md:order-2 md:translate-y-[2%]">
              <h1 className="text-balance break-words text-[56px] font-bold leading-[1.03] tracking-[-0.03em] text-white max-md:text-[42px] max-sm:text-[32px]">
                Decisions are defined by examining how they actually operate
              </h1>
              <div className="mt-8 max-w-[520px] text-[16px] font-normal leading-[1.5] text-[rgba(194,209,232,0.82)] max-sm:mt-6 max-sm:text-[15px]">
                <p>Structural clarity starts from observed behavior, not from stated intent.</p>
                <p className="mt-5">What matters is what happens when the decision is made repeatedly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper bg="white" id="current-state">
        <div className="mx-auto w-full max-w-[640px]">
          <p className="mb-8 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(90,100,120,0.68)]">
            Current state
          </p>
          <h2 className="text-[26px] font-bold leading-[1.22] tracking-[-0.01em] text-[#0A1628] max-sm:text-[21px]">
            Start from actual behavior
          </h2>
          <p className="mb-6 mt-6 text-[11px] font-medium uppercase leading-[1.3] tracking-[0.14em] text-[rgba(90,100,120,0.55)]">
            Examine:
          </p>
          <div className="mt-9 border-t border-[rgba(10,22,40,0.08)] pt-9 text-[17px] font-medium leading-[1.48] text-[rgba(69,82,104,0.84)] max-sm:text-[15px]">
            {CURRENT_STATE_PROMPTS.map((text, i) => (
              <p
                key={text}
                className={i > 0 ? 'mt-7 pl-6 md:mt-8 md:pl-10' : ''}
              >
                <span className="block capitalize">{text}</span>
              </p>
            ))}
          </div>
          <div className="mt-9 border-t border-[rgba(10,22,40,0.08)] pt-9 lg:mt-10 lg:pt-10">
            <p className="text-right text-[17px] font-semibold leading-[1.48] text-[#0A1628] max-sm:text-[15px]">
              <span className="block">This reveals how the decision operates today.</span>
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper bg="gray" id="structural-clarity">
        <div className="mx-auto w-full max-w-[1040px]">
          <p className="mb-6 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(90,100,120,0.72)]">
            Structural clarity
          </p>
          <h2 className="max-w-[720px] text-[30px] font-bold leading-[1.12] tracking-[-0.015em] text-[#0A1628] max-sm:text-[24px]">
            Make the decision structure visible
          </h2>
          <p className="mt-6 max-w-[560px] text-[16px] font-normal leading-[1.55] text-[#5A6478] max-sm:text-[15px]">
            Each element of the decision is identified and specified.
          </p>
          <div className="mt-9 grid grid-cols-1 items-start gap-10 border-t border-[rgba(10,22,40,0.08)] pt-9 lg:mt-10 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-x-14 lg:gap-y-0 lg:pt-10 xl:gap-x-16">
            <div className="order-2 max-w-[280px] text-[15px] font-normal leading-[1.55] text-[#5A6478] max-sm:max-w-none max-sm:text-[14px] lg:order-1 lg:pt-0.5">
              <p className="text-[11px] font-medium uppercase leading-[1.3] tracking-[0.14em] text-[rgba(90,100,120,0.55)]">
                This separates:
              </p>
              <p className="mt-6">Intended design from what the organization actually runs day to day.</p>
            </div>
            <div className="order-1 flex max-w-[620px] flex-col gap-6 lg:order-2">
              {STRUCTURAL_PAIRS.map((pair) => (
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
        </div>
      </SectionWrapper>

      <SectionWrapper bg="white" id="gap-identification">
        <div className="mx-auto w-full max-w-[1040px]">
          <p className="mb-6 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(90,100,120,0.68)]">
            Gap identification
          </p>
          <h2 className="max-w-[720px] text-[30px] font-bold leading-[1.12] tracking-[-0.015em] text-[#0A1628] max-sm:text-[24px]">
            Variability becomes traceable
          </h2>
          <p className="mt-6 text-[16px] font-normal leading-[1.55] text-[#5A6478] max-sm:text-[15px]">
            Once the structure is visible, it becomes clear:
          </p>
          <p className="mb-6 mt-9 border-t border-[rgba(10,22,40,0.08)] pt-9 text-[11px] font-medium uppercase leading-[1.3] tracking-[0.14em] text-[rgba(90,100,120,0.55)] lg:mt-10 lg:pt-10">
            Where to look
          </p>
          <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 sm:gap-y-10 sm:gap-x-14 lg:max-w-[720px] lg:gap-y-12">
            {GAP_ITEMS.map((text, i) => (
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
          <div className="mt-9 border-t border-[rgba(10,22,40,0.08)] pt-9 text-center lg:mt-10 lg:pt-10">
            <p className="mx-auto max-w-[520px] text-[16px] font-medium leading-[1.5] text-[#0A1628] max-sm:text-[15px]">
              Variability is no longer hidden.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper bg="gray" id="diagnostic-necessity">
        <p className="mb-8 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(90,100,120,0.72)]">
          Diagnostic necessity
        </p>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-x-10 lg:gap-y-0 xl:gap-x-14">
          <div className="flex max-w-[300px] flex-col gap-6 text-[16px] font-normal leading-[1.55] text-[#5A6478] max-sm:max-w-none max-sm:text-[15px] lg:max-w-[300px]">
            <h2 className="text-[22px] font-bold leading-[1.32] tracking-[-0.015em] text-[#0A1628] max-sm:text-[19px]">
              The first step is to determine how decisions currently operate
            </h2>
            <p>Before redesign or implementation,</p>
            <p className="font-semibold text-[#0A1628]">the organization must understand:</p>
            <ul className="list-none space-y-3 text-[15px] font-medium leading-[1.45] text-[#0A1628] max-sm:text-[14px]">
              {MUST_UNDERSTAND.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
          <div className="border-t border-[rgba(0,0,0,0.06)] pt-12 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10 xl:pl-12">
            <div className="space-y-4 text-[14px] font-normal leading-[1.6] text-[#5A6478] max-sm:text-[13px]">
              {CONSTRAINT_LINES.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
          <div className="flex max-w-[300px] flex-col gap-8 border-t border-[rgba(0,0,0,0.06)] pt-12 text-[15px] font-normal leading-[1.58] text-[#5A6478] max-sm:max-w-none max-sm:text-[14px] lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10 xl:pl-12">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[rgba(90,100,120,0.55)]">
                Without a diagnostic:
              </p>
              <ul className="mt-4 list-none space-y-3 text-[15px] font-medium leading-[1.45] text-[#0A1628] max-sm:text-[14px]">
                {WITHOUT_DIAGNOSTIC.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <p className="font-semibold leading-[1.55] text-[#0A1628]">
              The diagnostic establishes a clear, externalized view of how decisions actually operate and creates
              the basis required before any change can hold.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper bg="navy" id="transition" className="!pb-24 md:!pb-28">
        <div className="mx-auto w-full max-w-[1040px]">
          <div className="max-w-[920px]">
            <h2 className="text-[40px] font-bold leading-[1.05] tracking-[-0.02em] text-white max-md:text-[32px] max-sm:text-[24px]">
              <span className="block">From structural visibility to consistent decisions</span>
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-1 items-start gap-10 border-t border-[rgba(255,255,255,0.1)] pt-10 lg:mt-12 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-x-14 lg:gap-y-0 lg:pt-12 xl:gap-x-16">
            <div className="order-2 max-w-[280px] text-[15px] font-normal leading-[1.5] text-[rgba(194,209,232,0.62)] max-sm:max-w-none max-sm:text-[14px] lg:order-1 lg:pt-1">
              <p>Once the structure of a decision is visible and defined,</p>
            </div>
            <div className="order-1 flex max-w-[560px] flex-col gap-7 text-[17px] font-normal leading-[1.55] text-[rgba(194,209,232,0.82)] max-sm:gap-6 max-sm:text-[15px] lg:order-2">
              <p className="font-medium text-[rgba(255,255,255,0.92)]">
                the same conditions can be evaluated the same way across teams.
              </p>
            </div>
          </div>
          <div className="mt-10 border-t border-[rgba(255,255,255,0.1)] pt-10 lg:mt-12 lg:flex lg:flex-col lg:items-end lg:pt-12">
            <p className="max-w-[400px] text-right text-[16px] font-medium leading-[1.5] text-[rgba(255,255,255,0.88)] max-sm:text-[15px] lg:ml-auto">
              This is where consistency begins to emerge in practice.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
