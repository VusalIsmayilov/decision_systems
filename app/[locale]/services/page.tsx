import Link from 'next/link';
import SectionWrapper from '@/components/SectionWrapper';
import { withLocale, type Locale } from '@/lib/i18n';

export const metadata = {
  title: 'Services',
};

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: loc } = await params;
  const locale = loc as Locale;
  const L = (path: string) => withLocale(locale, path);
  return (
    <>
      {/* Section 1: Hero — Definition + Contrast — Navy (compressed) */}
      <SectionWrapper
        bg="navy"
        className="!py-0 !pt-24 !pb-20 max-sm:!pt-12 max-sm:!pb-10 max-md:!pt-20 max-md:!pb-16 lg:!pt-[150px] lg:!pb-[130px]"
      >
        <div className="mx-auto w-full max-w-[1040px]">
          <p className="mb-8 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(194,209,232,0.66)]">
            Services
          </p>

          <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.85fr)] md:gap-x-12 md:gap-y-0 lg:gap-x-14">
            {/* LEFT 30% — contrast */}
            <div className="max-w-[320px]">
              <p className="text-[15px] max-sm:text-[14px] leading-[1.65] text-[rgba(194,209,232,0.72)]">
                The data and AI function
              </p>
            </div>

            {/* RIGHT 70% — primary + processing */}
            <div className="md:border-l md:border-[rgba(255,255,255,0.12)] md:pl-10 lg:pl-12">
              <h1 className="max-w-[660px] text-[46px] font-bold leading-[1.03] tracking-[-0.03em] text-white max-md:text-[38px] max-sm:text-[31px]">
                <span className="block">A single system.</span>
                <span className="block">Not separate efforts.</span>
              </h1>

            </div>
          </div>

          {/* EXIT / TRANSITION — bottom-right */}
          <div className="mt-12 flex justify-end border-t border-[rgba(255,255,255,0.12)] pt-10">
            <p className="max-w-[720px] text-right text-[19px] max-sm:text-[16px] font-semibold leading-[1.45] text-white">
              When it is not, control does not hold.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 2: Scope Statement — Definition — White */}
      <SectionWrapper
        bg="white"
        className="border-t border-[rgba(10,22,40,0.08)]"
      >
        <div className="mx-auto w-full max-w-[1100px]">
          <p className="mb-8 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(90,100,120,0.68)]">
            Scope Statement
          </p>

          <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] md:gap-x-14 md:gap-y-0 lg:gap-x-16">
            {/* LEFT — anchored dominant definition */}
            <div className="max-w-[430px]">
              <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.015em] text-[#0A1628] max-sm:text-[24px]">
                The data and AI function operates as a complete system composed of direction, structure, and execution.
              </h2>
            </div>

            {/* RIGHT — contrast + reinforcement */}
            <div className="md:border-l md:border-[rgba(10,22,40,0.08)] md:pl-10 lg:pl-12">
              <p className="max-w-[640px] text-[17px] max-sm:text-[15px] font-medium leading-[1.55] text-[#0A1628]">
                When these components operate separately, the function fragments—definition, operation, and outcomes diverge.
              </p>
              <p className="mt-9 max-w-[700px] text-[16px] max-sm:text-[15px] leading-[1.6] text-[rgba(10,22,40,0.72)]">
                Control exists only when direction, structure, and execution operate together under a single model, with no gap between how the function is defined, how it operates, and what it produces.
              </p>
            </div>
          </div>

          {/* EXIT / TRANSITION — dual anchors */}
          <div className="mt-12 grid grid-cols-1 gap-8 border-t border-[rgba(10,22,40,0.08)] pt-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] md:gap-x-14 md:gap-y-0 lg:gap-x-16">
            <p className="max-w-[420px] text-[16px] max-sm:text-[15px] font-semibold leading-[1.55] text-[#0A1628]">
              Control exists only when direction, structure, and execution operate together under a{' '}
              <Link
                href={L('/')}
                className="text-[#2B5CE6] transition-colors hover:text-[#1E4AC4] underline-offset-2 hover:underline"
              >
                single model
              </Link>
            </p>
            <p className="max-w-[620px] text-[18px] max-sm:text-[16px] font-semibold leading-[1.45] text-[#0A1628] md:justify-self-end md:text-right">
              In that state, the system holds as a coherent whole—aligned, consistent, and under control.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 3: Intervention Domains — Introduction — Structure — Gray */}
      <SectionWrapper
        bg="gray"
        className="border-t border-[rgba(10,22,40,0.08)]"
      >
        <div className="mx-auto w-full max-w-[1100px]">
          <p className="mb-8 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(90,100,120,0.68)]">
            Intervention Domains
          </p>

          {/* ENTRY — anchored block */}
          <h2 className="max-w-[660px] text-[30px] font-bold leading-[1.12] tracking-[-0.015em] text-[#0A1628] max-sm:text-[24px]">
            Control of the data and AI function is established through coordinated intervention across defined system layers.
          </h2>

          {/* LEFT LOWER condition + RIGHT structured system grid */}
          <div className="mt-10 grid grid-cols-1 items-start gap-10 border-t border-[rgba(10,22,40,0.08)] pt-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.35fr)] md:gap-x-14 md:gap-y-0 lg:gap-x-16">
            {/* LEFT LOWER — counter-condition */}
            <div className="max-w-[360px] md:pt-16">
              <p className="text-[16px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.72)]">
                When these layers operate in isolation, control does not hold—even if each part is well defined.
              </p>
            </div>

            {/* RIGHT — system composition */}
            <div className="md:border-l md:border-[rgba(10,22,40,0.08)] md:pl-10 lg:pl-12">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-10 md:gap-y-10">
                <div className="md:col-span-2 max-w-[680px]">
                  <p className="text-[17px] max-sm:text-[15px] font-medium leading-[1.55] text-[#0A1628]">
                    Direction, structure, execution, and architecture (supporting) operate together as one system.
                  </p>
                </div>
                <div className="md:col-span-2 max-w-[680px]">
                  <p className="text-[16px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.72)]">
                    Each layer represents a distinct component of control, and all are interdependent.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* EXIT — convergence statement */}
          <div className="mt-12 flex justify-end border-t border-[rgba(10,22,40,0.08)] pt-10">
            <p className="max-w-[620px] text-right text-[18px] max-sm:text-[16px] font-semibold leading-[1.45] text-[#0A1628]">
              Control is not established within a single layer. It is established only when these layers operate together, under a unified system.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 4: Direction (Executive / Leadership) — Definition — White */}
      <SectionWrapper
        id="direction"
        bg="white"
        className="border-t border-[rgba(10,22,40,0.08)]"
      >
        <div className="mx-auto w-full max-w-[1100px]">
          <p className="text-[54px] font-light leading-[0.95] tracking-[-0.02em] text-[rgba(10,22,40,0.13)] md:text-[56px]">
            01
          </p>
          <p className="mb-8 mt-1 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(90,100,120,0.68)]">
            Direction (Executive / Leadership)
          </p>

          <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] md:gap-x-14 md:gap-y-0 lg:gap-x-16">
            {/* LEFT — anchored dominant + lower reinforcement */}
            <div className="max-w-[430px]">
              <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.015em] text-[#0A1628] max-sm:text-[24px]">
                Control begins with ownership of direction at the executive level.
              </h2>

              <p className="mt-12 text-[16px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.72)]">
                Direction is explicitly owned, with defined priorities and a clear sequence of what must be achieved.
              </p>
            </div>

            {/* RIGHT — consequence + definition */}
            <div className="md:border-l md:border-[rgba(10,22,40,0.08)] md:pl-10 lg:pl-12">
              <p className="max-w-[640px] text-[17px] max-sm:text-[15px] font-medium leading-[1.55] text-[#0A1628]">
                Without explicit ownership, priorities shift and decisions lose a stable reference point.
              </p>
              <p className="mt-9 max-w-[700px] text-[16px] max-sm:text-[15px] leading-[1.6] text-[rgba(10,22,40,0.72)]">
                This layer defines what decisions matter, how priorities are set, and who holds accountability for the function as a whole.
              </p>
            </div>
          </div>

          {/* EXIT / TRANSITION — bottom-right forward condition */}
          <div className="mt-12 flex justify-end border-t border-[rgba(10,22,40,0.08)] pt-10">
            <p className="max-w-[620px] text-right text-[18px] max-sm:text-[16px] font-semibold leading-[1.45] text-[#0A1628]">
              It establishes a single, stable direction under which decisions are formed and sustained.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 5: Structure (Operating Model / Control) — Structure — Gray */}
      <SectionWrapper
        id="organization"
        bg="gray"
        className="border-t border-[rgba(10,22,40,0.08)]"
      >
        <div className="mx-auto w-full max-w-[1100px]">
          <p className="text-[54px] font-light leading-[0.95] tracking-[-0.02em] text-[rgba(10,22,40,0.13)] md:text-[56px]">
            02
          </p>
          <p className="mb-8 mt-1 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(90,100,120,0.68)]">
            Structure (Operating Model / Control)
          </p>

          <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[minmax(0,0.92fr)_minmax(0,1.4fr)] md:gap-x-14 md:gap-y-0 lg:gap-x-16">
            {/* LEFT — index anchor + lower counter-condition */}
            <div className="max-w-[380px]">
              <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.015em] text-[#0A1628] max-sm:text-[24px]">
                Control is established through a defined structure.
              </h2>

              <div className="mt-10 border-t border-[rgba(10,22,40,0.08)] pt-8">
                <p className="text-[16px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.72)]">
                  Without it, ownership diffuses and decisions follow local logic rather than system control.
                </p>
              </div>
            </div>

            {/* RIGHT — structured narrative blocks */}
            <div className="md:border-l md:border-[rgba(10,22,40,0.08)] md:pl-10 lg:pl-12">
              <div className="flex max-w-[700px] flex-col gap-8">
                <p className="text-[17px] max-sm:text-[15px] font-medium leading-[1.55] text-[#0A1628]">
                  This layer defines governance, ownership structures, and decision rights.
                </p>

                <p className="text-[16px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.72)]">
                  It specifies how system components interact, how responsibility is assigned, and how control is enforced.
                </p>
              </div>
            </div>
          </div>

          {/* EXIT — bottom-right consolidation */}
          <div className="mt-12 flex justify-end border-t border-[rgba(10,22,40,0.08)] pt-10">
            <p className="max-w-[640px] text-right text-[18px] max-sm:text-[16px] font-semibold leading-[1.45] text-[#0A1628]">
              Structure holds the system together—ensuring decisions and interactions operate under consistent control, not variation.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 6: Execution (Transformation / Execution) — Situational — White */}
      <SectionWrapper
        id="execution"
        bg="white"
        className="border-t border-[rgba(10,22,40,0.08)]"
      >
        <div className="mx-auto w-full max-w-[1100px]">
          <p className="text-[54px] font-light leading-[0.95] tracking-[-0.02em] text-[rgba(10,22,40,0.13)] md:text-[56px]">
            03
          </p>
          <p className="mb-8 mt-1 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(90,100,120,0.68)]">
            Execution (Transformation / Execution)
          </p>

          <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.5fr)] md:gap-x-14 md:gap-y-0 lg:gap-x-16">
            {/* LEFT — narrow trigger field */}
            <div className="max-w-[320px]">
              <p className="text-[17px] max-sm:text-[15px] font-medium leading-[1.55] text-[#0A1628]">
                Execution operates as ongoing activity across initiatives, where delivery is already in motion.
              </p>
            </div>

            {/* RIGHT — execution dynamics (dominant) */}
            <div className="md:border-l md:border-[rgba(10,22,40,0.08)] md:pl-10 lg:pl-12">
              <div className="flex max-w-[700px] flex-col gap-8">
                <p className="text-[17px] max-sm:text-[15px] font-medium leading-[1.55] text-[#0A1628]">
                  Without alignment to direction and structure, progress continues—but does not converge.
                </p>

                <p className="text-[16px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.72)]">
                  Multiple efforts advance in parallel across teams, timelines, and dependencies.
                </p>

                <p className="text-[16px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.72)]">
                  Execution requires consistent interaction across all moving parts and coordination across teams and workstreams.
                </p>
              </div>
            </div>
          </div>

          {/* EXIT — bottom-right consolidation */}
          <div className="mt-12 flex justify-end border-t border-[rgba(10,22,40,0.08)] pt-10">
            <p className="max-w-[640px] text-right text-[18px] max-sm:text-[16px] font-semibold leading-[1.45] text-[#0A1628]">
              When aligned, execution operates as a coordinated system—where activity translates into consistent outcomes.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 7: Architecture (Supporting) — Causality — Navy */}
      <SectionWrapper
        id="architecture"
        bg="navy"
        className="border-t border-[rgba(255,255,255,0.08)]"
      >
        <div className="mx-auto w-full max-w-[1100px]">
          <p className="text-[54px] font-light leading-[0.95] tracking-[-0.02em] text-[rgba(255,255,255,0.11)] md:text-[56px]">
            04
          </p>
          <p className="mb-8 mt-1 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(194,209,232,0.66)]">
            Architecture (Supporting)
          </p>

          <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.35fr)_minmax(0,0.9fr)] md:gap-x-12 md:gap-y-0 lg:gap-x-14">
            {/* LEFT — premise + failure condition */}
            <div className="max-w-[360px]">
              <p className="text-[20px] max-sm:text-[18px] font-semibold leading-[1.35] text-white">
                Control depends on how the system is structured technically.
              </p>

              <p className="mt-10 text-[15px] max-sm:text-[14px] leading-[1.65] text-[rgba(194,209,232,0.72)]">
                When data flows and dependencies are not aligned, control cannot be sustained—even if direction and structure are defined.
              </p>
            </div>

            {/* CENTER — dominant mechanism */}
            <div className="md:border-l md:border-[rgba(255,255,255,0.12)] md:pl-10 lg:pl-12">
              <div className="flex max-w-[700px] flex-col gap-8">
                <p className="text-[21px] max-sm:text-[18px] font-semibold leading-[1.35] text-white">
                  Data flows, system integration, and technical dependencies determine whether the function operates as a coherent system.
                </p>

                <p className="text-[15px] max-sm:text-[14px] leading-[1.65] text-[rgba(194,209,232,0.72)]">
                  This layer supports direction, structure, and execution by enabling consistent interaction across them.
                </p>
              </div>
            </div>

            {/* RIGHT — outcome */}
            <div className="md:border-l md:border-[rgba(255,255,255,0.12)] md:pl-10 lg:pl-12">
              <p className="text-[17px] max-sm:text-[15px] font-semibold leading-[1.55] text-white">
                Architecture determines whether control holds in practice—or breaks under complexity.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
