import SectionWrapper from '@/components/SectionWrapper';

const BEFORE_LINES = [
  'No explicit definition of “at-risk customer” (usage decline vs complaints vs inactivity)',
  'No consistent thresholds for when intervention is required',
  'Intervention triggered inconsistently — some accounts reviewed weekly, others only after escalation',
  'Multiple stakeholders influence the decision without clear accountability',
  'Different teams use different signals (usage metrics, support tickets, account manager judgment)',
  'Actions vary — some customers receive proactive outreach, others receive no intervention',
  'Outcomes are not tracked against the decision',
] as const;

const AFTER_STACK = [
  'Decision defined: which customers require intervention in the current weekly cycle',
  'Trigger activated when usage drops below defined thresholds or risk score exceeds a set level',
  'Standardized input set combining product usage, support activity, and account signals',
  'Explicit logic defines intervention type based on severity and customer segment',
  'Single ownership assigned to a defined role responsible for the decision',
  'Consistent workflow from trigger → evaluation → action',
  'Predefined intervention actions (outreach, escalation, retention offer)',
  'Outcomes tracked against intervention type and timing',
] as const;

const RESULT_LINES = [
  'The same conditions trigger the same decision',
  'Teams act consistently across accounts',
  'Interventions occur earlier and under defined conditions',
  'Outcomes are measurable and comparable across teams',
] as const;

export default async function DecisionSystemsInPracticePage({
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
            Proof
          </p>
          <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[2fr_3fr] md:gap-x-10 md:gap-y-0 lg:gap-x-12 xl:gap-x-20">
            <div className="order-2 flex max-w-[420px] flex-col gap-6 text-[15px] font-normal leading-[1.5] text-[rgba(194,209,232,0.68)] max-sm:text-[14px] md:order-1 md:translate-y-[2%] md:pt-1">
              <p>A recurring decision: when to intervene with an at-risk customer.</p>
              <p>The difference is not data. It is how the decision is structured.</p>
            </div>
            <div className="order-1 flex flex-col items-start md:order-2 md:translate-y-[2%]">
              <h1 className="text-balance text-[56px] font-bold leading-[1.03] tracking-[-0.03em] text-white max-md:text-[42px] max-sm:text-[32px]">
                Customer retention intervention as a defined decision
              </h1>
              <div className="mt-8 max-w-[520px] text-[16px] font-normal leading-[1.5] text-[rgba(194,209,232,0.82)] max-sm:mt-6 max-sm:text-[15px]">
                <p>Same inputs, same thresholds, same ownership—then the system can repeat.</p>
                <p className="mt-5">Without that structure, behavior drifts account by account.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper bg="white" id="before">
        <div className="mx-auto w-full max-w-[640px]">
          <p className="mb-8 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(90,100,120,0.68)]">
            Before
          </p>
          <h2 className="text-[26px] font-bold leading-[1.22] tracking-[-0.01em] text-[#0A1628] max-sm:text-[21px]">
            How the decision operates without structure
          </h2>
          <div className="mt-9 border-t border-[rgba(10,22,40,0.08)] pt-9 text-[17px] font-medium leading-[1.48] text-[rgba(69,82,104,0.84)] max-sm:text-[15px]">
            {BEFORE_LINES.map((line, i) => (
              <p key={line} className={i > 0 ? 'mt-7 pl-6 md:mt-8 md:pl-10' : ''}>
                <span className="block">{line}</span>
              </p>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper bg="gray" id="after">
        <div className="mx-auto w-full max-w-[1040px]">
          <p className="mb-6 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(90,100,120,0.72)]">
            After
          </p>
          <h2 className="max-w-[720px] text-[30px] font-bold leading-[1.12] tracking-[-0.015em] text-[#0A1628] max-sm:text-[24px]">
            The same decision defined as a system
          </h2>
          <p className="mb-6 mt-9 border-t border-[rgba(10,22,40,0.08)] pt-9 text-[11px] font-medium uppercase leading-[1.3] tracking-[0.14em] text-[rgba(90,100,120,0.55)] lg:mt-10 lg:pt-10">
            Defined stack
          </p>
          <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 sm:gap-y-10 sm:gap-x-14 lg:max-w-[720px] lg:gap-y-12">
            {AFTER_STACK.map((line, i) => (
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

      <SectionWrapper bg="white" id="result" className="!pb-24 md:!pb-28">
        <div className="mx-auto w-full max-w-[640px]">
          <p className="mb-8 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(90,100,120,0.68)]">
            Result
          </p>
          <h2 className="text-[26px] font-bold leading-[1.22] tracking-[-0.01em] text-[#0A1628] max-sm:text-[21px]">
            What changes when the decision is structured
          </h2>
          <div className="mt-9 border-t border-[rgba(10,22,40,0.08)] pt-9 text-[17px] font-medium leading-[1.48] text-[rgba(69,82,104,0.84)] max-sm:text-[15px]">
            {RESULT_LINES.map((line, i) => (
              <p key={line} className={i > 0 ? 'mt-7 md:mt-8' : ''}>
                <span className="block">{line}</span>
              </p>
            ))}
          </div>
          <div className="mt-9 border-t border-[rgba(10,22,40,0.08)] pt-9 lg:mt-10 lg:pt-10">
            <p className="text-right text-[17px] font-semibold leading-[1.48] text-[#0A1628] max-sm:text-[15px]">
              <span className="block">Where does your decision</span>
              <span className="block">structure break?</span>
            </p>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
