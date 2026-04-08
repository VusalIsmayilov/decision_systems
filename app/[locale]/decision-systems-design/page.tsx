import SectionWrapper from '@/components/SectionWrapper';

const EIGHT_ELEMENTS = [
  {
    n: 1,
    title: 'Decision',
    desc: 'The specific question being resolved, clearly bounded',
  },
  {
    n: 2,
    title: 'Trigger',
    desc: 'The condition that initiates the decision',
  },
  {
    n: 3,
    title: 'Inputs',
    desc: 'The exact information used for evaluation',
  },
  {
    n: 4,
    title: 'Logic',
    desc: 'The rules used to interpret inputs and reach a conclusion',
  },
  {
    n: 5,
    title: 'Ownership',
    desc: 'The single role accountable for the decision',
  },
  {
    n: 6,
    title: 'Workflow',
    desc: 'The sequence from trigger to execution',
  },
  {
    n: 7,
    title: 'Action',
    desc: 'The predefined response following the decision',
  },
  {
    n: 8,
    title: 'Feedback',
    desc: 'The mechanism for tracking outcomes and refining the decision',
  },
] as const;

const ALIGNED_STEPS = [
  'the same situation leads to the same decision',
  'the same decision leads to the same action',
  'outcomes can be explained and improved',
] as const;

export default async function DecisionSystemsDesignPage({
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
            Decision System Design
          </p>
          <div className="grid min-w-0 grid-cols-1 items-start gap-12 md:grid-cols-[2fr_3fr] md:gap-x-10 md:gap-y-0 lg:gap-x-12 xl:gap-x-20">
            <div className="order-2 flex min-w-0 max-w-[420px] flex-col gap-6 text-[15px] font-normal leading-[1.5] text-[rgba(194,209,232,0.68)] max-sm:text-[14px] md:order-1 md:translate-y-[2%] md:pt-1">
              <p>A recurring business decision can be defined as a system.</p>
              <p>
                When its structure is specified, it produces consistent outcomes under the same conditions.
              </p>
            </div>
            <div className="order-1 flex min-w-0 w-full flex-col items-start md:order-2 md:translate-y-[2%]">
              <h1 className="text-balance break-words text-[56px] font-bold leading-[1.03] tracking-[-0.03em] text-white max-md:text-[42px] max-sm:text-[32px]">
                A decision becomes reliable when its structure is explicit
              </h1>
              <div className="mt-8 max-w-[520px] text-[16px] font-normal leading-[1.5] text-[rgba(194,209,232,0.82)] max-sm:mt-6 max-sm:text-[15px]">
                <p>Specification turns recurring judgment into a repeatable system.</p>
                <p className="mt-5">Each element must be explicit for the decision to behave consistently.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper bg="white" id="structure">
        <div className="mx-auto w-full max-w-[1040px]">
          <p className="mb-6 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(90,100,120,0.68)]">
            Structure
          </p>
          <h2 className="max-w-[720px] text-[30px] font-bold leading-[1.12] tracking-[-0.015em] text-[#0A1628] max-sm:text-[24px]">
            A decision system is defined through eight elements
          </h2>
          <p className="mb-6 mt-6 max-w-[560px] text-[16px] font-normal leading-[1.55] text-[#5A6478] max-sm:text-[15px]">
            Each element is distinct. Together, they define how the decision operates.
          </p>
          <p className="mb-6 mt-9 border-t border-[rgba(10,22,40,0.08)] pt-9 text-[11px] font-medium uppercase leading-[1.3] tracking-[0.14em] text-[rgba(90,100,120,0.55)] lg:mt-10 lg:pt-10">
            Elements
          </p>
          <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 sm:gap-y-10 sm:gap-x-14 lg:max-w-[720px] lg:gap-y-12">
            {EIGHT_ELEMENTS.map((el) => (
              <div key={el.n}>
                <p className="mb-2.5 text-[11px] font-medium uppercase leading-[1] tracking-[0.18em] text-[rgba(10,22,40,0.35)]">
                  {String(el.n).padStart(2, '0')}
                </p>
                <p className="text-[19px] font-medium leading-[1.25] text-[#0A1628] sm:text-[20px]">
                  {el.title}
                </p>
                <p className="mt-2 text-[15px] font-normal leading-[1.5] text-[#5A6478] max-sm:text-[14px]">
                  {el.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper bg="gray" id="system-behavior" className="!pb-24 md:!pb-28">
        <p className="mb-8 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(90,100,120,0.72)]">
          System behavior
        </p>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-x-10 lg:gap-y-0 xl:gap-x-14">
          <div className="flex max-w-[300px] flex-col gap-6 text-[16px] font-normal leading-[1.55] text-[#5A6478] max-sm:max-w-none max-sm:text-[15px] lg:max-w-[300px]">
            <p>The structure determines how the decision behaves in operation—not how it is described on paper.</p>
          </div>
          <div className="border-t border-[rgba(0,0,0,0.06)] pt-12 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10 xl:pl-12">
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[rgba(90,100,120,0.55)]">
              When all elements are specified and aligned:
            </p>
            <div className="mt-8 flex max-w-[520px] flex-col gap-6 text-[17px] font-medium leading-[1.55] text-[#0A1628] max-sm:gap-5 max-sm:text-[16px]">
              {ALIGNED_STEPS.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
          <div className="flex max-w-[300px] flex-col gap-8 border-t border-[rgba(0,0,0,0.06)] pt-12 text-[15px] font-normal leading-[1.58] text-[#5A6478] max-sm:max-w-none max-sm:text-[14px] lg:col-span-1 lg:max-w-[300px] lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10 xl:pl-12">
            <p className="font-semibold leading-[1.55] text-[#0A1628]">
              When any element is implicit, variation enters the system.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
