import SectionWrapper from '@/components/SectionWrapper';
import SectionLabel from '@/components/SectionLabel';
import CausalChain from '@/components/CausalChain';
import FramedCore from '@/components/FramedCore';
import Link from 'next/link';
import { withLocale, type Locale } from '@/lib/i18n';

export const metadata = {
  title: 'How We Work',
};

export default async function HowWeWorkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: loc } = await params;
  const locale = loc as Locale;
  const L = (path: string) => withLocale(locale, path);
  return (
    <>
      {/* Section 1: Hero — Definition + Contrast — Navy */}
      <section
        style={{
          background:
            'radial-gradient(circle at 70% 40%, rgba(255,255,255,0.04), transparent 60%), #0B1F33',
        }}
      >
        <div className="mx-auto max-w-[1280px] px-10 py-24 max-md:px-5 max-md:py-20 max-sm:py-12 md:py-28 lg:py-32 xl:py-[100px] 2xl:py-[120px]">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-10 md:gap-16 items-start">
            {/* [ENTRY ZONE — left (dominant) 40%] */}
            <div className="flex flex-col items-start max-w-[520px]">
              <h1 className="text-[56px] max-md:text-[42px] max-sm:text-[34px] font-bold leading-[1.03] tracking-[-0.03em] text-white">
                <span className="block max-xl:whitespace-normal xl:whitespace-nowrap">A single system.</span>
                <span className="block max-xl:whitespace-normal xl:whitespace-nowrap">Not separate efforts.</span>
              </h1>
            </div>

            {/* [PROCESSING ZONE — right contrast + reinforcement 60%] */}
            <div className="flex flex-col items-start max-w-[560px] md:translate-x-[8%]">
              <div className="mt-2 flex flex-col gap-[18px] max-w-[560px]">
                <p className="text-[17px] max-sm:text-[15px] leading-[1.56] text-[rgba(255,255,255,0.82)]">
                  We work through one controlled model in which direction, structure, and execution operate together.
                </p>
                <p className="text-[17px] max-sm:text-[15px] leading-[1.56] text-[rgba(255,255,255,0.70)]">
                  This is not fragmented advisory or parallel delivery.
                </p>
                <p className="text-[17px] max-sm:text-[15px] leading-[1.56] text-[rgba(255,255,255,0.70)]">
                  When the parts are separated, fragmentation remains.
                </p>
                <p className="text-[19px] max-sm:text-[16px] font-semibold leading-[1.56] text-white pt-1">
                  When they operate as one,{' '}
                  <Link
                    href={L('/')}
                    className="text-[#6B9FFF] transition-colors hover:text-white underline-offset-2 hover:underline"
                  >
                    the system
                  </Link>{' '}
                  becomes consistent, accountable, and reliable.
                </p>
              </div>
            </div>
          </div>

          {/* [EXIT / TRANSITION — bottom-right isolated control anchor] */}
          <div className="mt-12 w-full flex justify-end border-t border-[rgba(255,255,255,0.12)] pt-10">
            <p className="max-w-[720px] text-right text-[19px] max-sm:text-[16px] font-semibold leading-[1.45] text-white">
              It is a unified system designed to maintain control.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Model Definition — Definition + Contrast — White */}
      <SectionWrapper
        bg="white"
        className="lg:!py-[100px] 2xl:!py-[100px]"
      >
        <div className="mx-auto w-full max-w-[1100px]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] leading-[1.2] text-[rgba(10,22,40,0.5)] mb-6">
            Model Definition
          </p>

          {/* [ENTRY ZONE — LEFT dominant compressed block] */}
          <div className="grid grid-cols-1 items-start md:grid-cols-[2fr_3fr] gap-x-14 gap-y-10">
            <div className="max-w-[520px]">
              <p className="text-[22px] max-sm:text-[18px] font-semibold leading-[1.25] text-[#0A1628]">
                The engagement operates as a single system—where direction, structure, and execution function under unified control.
              </p>
            </div>

            {/* [PROCESSING ZONE — RIGHT contrast + reinforcement cluster] */}
            <div className="max-w-[620px] flex flex-col gap-6 md:pt-1">
              <p className="text-[16px] max-sm:text-[15px] font-normal leading-[1.55] text-[#0A1628]">
                This is not coordination across separate efforts.
              </p>
              <p className="text-[16px] max-sm:text-[15px] font-normal leading-[1.55] text-[#0A1628]">
                When treated as separate efforts, ownership fragments and control does not hold.
              </p>
              <p className="text-[16px] max-sm:text-[15px] font-normal leading-[1.55] text-[#0A1628]">
                It is a system where all components operate together, in a fixed relationship, to maintain control.
              </p>
            </div>
          </div>

          {/* [EXIT / TRANSITION — BOTTOM-RIGHT outcome compression block] */}
          <div className="mt-10 border-t border-[rgba(10,22,40,0.08)] pt-9 flex justify-end">
            <p className="max-w-[720px] text-right text-[22px] max-sm:text-[18px] font-semibold leading-[1.25] text-[#0A1628]">
              When unified, the system becomes consistent, accountable, and reliable.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 3: Engagement Logic — Causality — Gray */}
      <SectionWrapper
        bg="gray"
        className="lg:!py-[100px] 2xl:!py-[100px]"
      >
        <div className="mx-auto w-full max-w-[1100px]">
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.18em] leading-[1.2] text-[rgba(10,22,40,0.5)]">
            Engagement Logic
          </p>

          {/* [ENTRY / PROCESSING / CONSEQUENCE — left → center → right] */}
          <div className="mt-9 grid grid-cols-1 items-start gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)_minmax(0,1fr)] md:gap-x-12 md:gap-y-0 lg:gap-x-14">
            {/* Entry (left) */}
            <div className="max-w-[360px]">
              <p className="text-[22px] max-sm:text-[20px] font-semibold leading-[1.25] text-[#0A1628]">
                The system operates on a fixed logic.
              </p>
            </div>

            {/* Processing (center, dominant) */}
            <div className="md:border-l md:border-[rgba(0,0,0,0.06)] md:pl-10 lg:pl-12">
              <p className="text-[22px] max-sm:text-[20px] font-semibold leading-[1.25] text-[#0A1628]">
                Direction is defined first.
              </p>
              <p className="mt-6 text-[22px] max-sm:text-[20px] font-semibold leading-[1.25] text-[#0A1628]">
                Without it, structure aligns to shifting priorities.
              </p>

              <div className="mt-8 flex flex-col gap-4">
                <p className="text-[16px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.65)]">
                  Structure is established to support it.
                </p>
                <p className="text-[16px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.65)]">
                  Without structure, execution diverges across teams and initiatives.
                </p>
                <p className="text-[16px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.65)]">
                  Execution operates within that structure.
                </p>
                <p className="text-[16px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.65)]">
                  Without this order, outcomes do not align and consistency does not hold.
                </p>
              </div>
            </div>

            {/* Consequence (right) */}
            <div className="md:border-l md:border-[rgba(0,0,0,0.06)] md:pl-10 lg:pl-12 max-w-[360px]">
              <p className="text-[20px] max-sm:text-[18px] font-semibold leading-[1.35] text-[#0A1628]">
                When the sequence is maintained, the system operates under control.
              </p>
            </div>
          </div>

          {/* [EXIT / TRANSITION — bottom-right outcome resolution] */}
          <div className="mt-12 flex justify-end">
            <div className="max-w-[720px] border-t border-[rgba(0,0,0,0.06)] pt-10">
              <p className="text-[20px] max-sm:text-[18px] font-semibold leading-[1.35] text-[#0A1628]">
                This order is not preference—it defines whether control exists.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 3: Phase Breakdown — Structure (System Presence) — White */}
      <SectionWrapper bg="white">
        <SectionLabel text="Phase Breakdown" theme="light" />

        <div className="mx-auto w-full max-w-[1100px]">
          {/* [ENTRY ZONE — TOP LEFT] */}
          <p className="max-w-[520px] text-[22px] max-sm:text-[18px] font-semibold leading-[1.25] text-[#0A1628]">
            The system is established through a defined progression.
          </p>

          {/* [PROCESSING ZONE — HORIZONTAL 3-STAGE FLOW] */}
          <div className="mt-12 flex flex-col gap-10 md:flex-row md:items-start md:gap-8">
            {/* Stage 1 — Direction */}
            <div className="max-w-[320px]">
              <p className="text-[16px] max-sm:text-[15px] font-semibold leading-[1.35] text-[#0A1628]">
                Direction is made explicit.
              </p>
              <p className="mt-4 text-[16px] max-sm:text-[15px] font-normal leading-[1.45] text-[rgba(10,22,40,0.65)]">
                Without it, what follows does not align.
              </p>
            </div>

            <div className="flex items-center justify-center md:w-8 md:pt-[46px]">
              <span className="text-[34px] leading-none text-[#0A1628] font-semibold">→</span>
            </div>

            {/* Stage 2 — Structure (dominant) */}
            <div className="max-w-[340px] md:-mt-[6px]">
              <p className="text-[18px] max-sm:text-[16px] font-semibold leading-[1.35] text-[#0A1628]">
                Structure is established to support it.
              </p>
              <p className="mt-4 text-[16px] max-sm:text-[15px] font-normal leading-[1.45] text-[rgba(10,22,40,0.65)]">
                Without structure, execution operates without coordination.
              </p>
            </div>

            <div className="flex items-center justify-center md:w-8 md:pt-[46px]">
              <span className="text-[34px] leading-none text-[#0A1628] font-semibold">→</span>
            </div>

            {/* Stage 3 — Execution / Stabilization */}
            <div className="max-w-[320px]">
              <p className="text-[16px] max-sm:text-[15px] font-semibold leading-[1.35] text-[#0A1628]">
                Execution operates within that structure.
              </p>
              <p className="mt-4 text-[16px] max-sm:text-[15px] font-normal leading-[1.45] text-[rgba(10,22,40,0.65)]">
                Separated from it, execution fragments across efforts.
              </p>
            </div>
          </div>

          {/* [EXIT / TRANSITION — BOTTOM RIGHT] */}
          <div className="mt-12 border-t border-[rgba(10,22,40,0.08)] pt-10 flex justify-end">
            <div className="max-w-[720px]">
              <p className="text-[18px] max-sm:text-[16px] font-semibold leading-[1.35] text-[#0A1628]">
                The system then stabilizes into consistent operation.
              </p>
              <p className="mt-4 text-[16px] max-sm:text-[15px] font-semibold leading-[1.45] text-[rgba(10,22,40,0.78)]">
                Each phase builds on the previous one. No phase stands alone.
              </p>
              <p className="mt-4 text-[16px] max-sm:text-[15px] font-normal leading-[1.45] text-[rgba(10,22,40,0.65)]">
                Control is established progressively—until the system operates as one.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 4: Roles — Structure (System Presence) — Gray */}
      <SectionWrapper bg="gray">
        <SectionLabel text="Roles" theme="light" />
        <div className="mx-auto w-full max-w-[1100px]">
          {/* [PROCESSING LAYOUT — LEFT ANCHOR → CENTER STRUCTURE (DOMINANT) → RIGHT CONSEQUENCE] */}
          <div className="mt-10 grid grid-cols-1 items-start gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)_minmax(0,1fr)] md:gap-x-12 md:gap-y-0">
            {/* [LEFT — INDEX / ENTRY] */}
            <div className="max-w-[420px]">
              <p className="text-[22px] max-sm:text-[18px] font-semibold leading-[1.25] text-[#0A1628]">
                The system operates through clearly defined ownership layers.
              </p>
            </div>

            {/* [CENTER — STRUCTURE (DOMINANT)] */}
            <div className="md:border-l md:border-[rgba(10,22,40,0.08)] md:pl-10 lg:pl-12">
              <div className="flex flex-col gap-5">
                <p className="text-[16px] max-sm:text-[15px] font-semibold leading-[1.55] text-[#0A1628]">
                  Each layer has a distinct responsibility.
                </p>
                <p className="text-[16px] max-sm:text-[15px] font-semibold leading-[1.55] text-[#0A1628]">
                  No overlap. No ambiguity.
                </p>
                <p className="text-[16px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.65)]">
                  Ownership is structured to ensure coordination across direction, structure, execution, and system design.
                </p>
              </div>
            </div>

            {/* [RIGHT — CONSEQUENCE] */}
            <div className="md:border-l md:border-[rgba(10,22,40,0.08)] md:pl-10 lg:pl-12">
              <div className="flex flex-col gap-5">
                <p className="text-[16px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.65)]">
                  Where ownership is unclear, coordination breaks and control weakens.
                </p>
                <p className="text-[16px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.65)]">
                  When boundaries blur, decisions compete and the system fragments.
                </p>
              </div>
            </div>
          </div>

          {/* [EXIT / TRANSITION — BOTTOM RIGHT] */}
          <div className="mt-12 flex flex-col items-end md:mt-14">
            <p className="max-w-[560px] md:max-w-[520px] text-right text-[18px] max-sm:text-[16px] font-semibold leading-[1.45] text-[#0A1628]">
              Together, these ownership layers ensure the system operates as a single coordinated system under control.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 5: Control Model — Causality — Navy */}
      <SectionWrapper bg="navy">
        <div className="mx-auto w-full max-w-[1040px]">
          <p className="mb-8 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(194,209,232,0.66)]">
            Control Model
          </p>

          {/* [LEFT — CAUSE] [CENTER — MECHANISM (DOMINANT)] [RIGHT — CONTINUATION] */}
          <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)_minmax(0,1fr)] md:gap-x-12 md:gap-y-0 lg:gap-x-14">
            {/* Left cause */}
            <div className="max-w-[300px]">
              <p className="text-[16px] max-sm:text-[15px] font-semibold leading-[1.6] text-white">
                Control is established through ownership and enforced through structure.
              </p>
              <p className="mt-6 text-[15px] max-sm:text-[14px] leading-[1.65] text-[rgba(194,209,232,0.72)]">
                Without enforcement, ownership becomes nominal and consistency does not hold.
              </p>
            </div>

            {/* Center mechanism */}
            <div className="md:border-l md:border-[rgba(255,255,255,0.12)] md:pl-10 lg:pl-12">
              <p className="text-[22px] max-sm:text-[18px] font-bold leading-[1.32] tracking-[-0.015em] text-white">
                Decisions diverge, and execution follows separate paths.
              </p>
              <p className="mt-6 text-[15px] max-sm:text-[14px] leading-[1.65] text-[rgba(194,209,232,0.72)]">
                Control ensures direction is carried through into execution without distortion.
              </p>
              <p className="mt-6 text-[15px] max-sm:text-[14px] leading-[1.65] text-[rgba(194,209,232,0.72)]">
                Where control is weak, direction is reinterpreted at each layer.
              </p>
            </div>

            {/* Right continuation */}
            <div className="md:border-l md:border-[rgba(255,255,255,0.12)] md:pl-10 lg:pl-12 max-w-[300px]">
              <p className="text-[15px] max-sm:text-[14px] leading-[1.65] text-[rgba(194,209,232,0.72)]">
                It is not an overlay.
              </p>
              <p className="mt-6 text-[16px] max-sm:text-[15px] font-medium leading-[1.65] text-white">
                It defines how the system operates—and whether it remains coherent under pressure.
              </p>
            </div>
          </div>

          {/* [EXIT — OUTCOME] bottom-right reinforced */}
          <div className="mt-12 flex flex-col items-end md:mt-14">
            <p className="max-w-[520px] text-right text-[15px] max-sm:text-[14px] font-medium leading-[1.65] text-white">
              It defines how the system operates—and whether it remains coherent under pressure.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 6: Independence — Causality — White */}
      <SectionWrapper bg="white">
        <div className="mx-auto w-full max-w-[1040px]">
          <p className="mb-6 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(90,100,120,0.72)]">
            Independence
          </p>

          {/* [LEFT — CAUSE] [CENTER — MECHANISM (DOMINANT)] [RIGHT — CONTINUATION] */}
          <div className="mt-9 grid grid-cols-1 items-start gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)_minmax(0,1fr)] md:gap-x-12 md:gap-y-0 lg:gap-x-14">
            {/* Left — cause */}
            <div className="max-w-[360px]">
              <p className="text-[20px] max-sm:text-[18px] font-semibold leading-[1.35] text-[#0A1628]">
                Control requires independence.
              </p>
              <p className="mt-6 text-[16px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.65)]">
                When those responsible for delivery influence direction or structure, control shifts.
              </p>
            </div>

            {/* Center — mechanism */}
            <div className="md:border-l md:border-[rgba(0,0,0,0.06)] md:pl-10 lg:pl-12">
              <p className="text-[22px] max-sm:text-[18px] font-bold leading-[1.32] tracking-[-0.015em] text-[#0A1628]">
                Decisions begin to follow delivery constraints rather than system integrity.
              </p>
              <p className="mt-6 text-[16px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.65)]">
                Direction adapts to what is easier to build.
              </p>
              <p className="mt-6 text-[16px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.65)]">
                Structure adapts to what is already in place.
              </p>
            </div>

            {/* Right — continuation */}
            <div className="md:border-l md:border-[rgba(0,0,0,0.06)] md:pl-10 lg:pl-12 max-w-[360px]">
              <div className="flex flex-col gap-6">
                <p className="text-[16px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.65)]">
                  Independence separates ownership from execution.
                </p>
                <p className="text-[16px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.65)]">
                  Without that separation, control becomes conditional and does not hold.
                </p>
              </div>
            </div>
          </div>

          {/* [EXIT / OUTCOME — bottom-right] */}
          <div className="mt-12 flex flex-col items-end md:mt-14">
            <p className="max-w-[560px] md:max-w-[520px] text-right text-[16px] font-semibold leading-[1.6] text-[#0A1628] max-sm:text-[15px]">
              This preserves objectivity, protects structure, and ensures the system operates under control—not influence.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 7: Engagement Formats — Structure — Gray */}
      <SectionWrapper bg="gray">
        <SectionLabel text="Formats" theme="light" />

        <div className="mx-auto w-full max-w-[1100px]">
          <div className="mt-10 grid grid-cols-1 items-start gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)_minmax(0,1fr)] md:gap-x-12 md:gap-y-0">
            {/* [LEFT — ENTRY] */}
            <div className="max-w-[420px]">
              <p className="text-[17px] max-sm:text-[15px] font-medium leading-[1.65] text-[#0A1628]">
                The model remains constant.
              </p>
              <p className="mt-2 text-[17px] max-sm:text-[15px] leading-[1.65] text-[rgba(10,22,40,0.7)]">
                The level of involvement adapts.
              </p>
            </div>

            {/* [CENTER — FORMATS (DOMINANT GRID)] */}
            <div className="max-w-[680px] md:translate-x-[6px]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8">
                {[
                  { text: 'It can be embedded as leadership.', nudge: 'md:translate-y-0' },
                  { text: 'It can operate as oversight across initiatives.', nudge: 'md:translate-y-[6px]' },
                  {
                    text: 'It can focus on targeted intervention where control is required.',
                    nudge: 'md:translate-y-[10px]',
                  },
                ].map((item, i) => (
                  <div key={item.text} className={`max-w-[260px] pt-3 relative ${item.nudge}`}>
                    {i > 0 && (
                      <span
                        className="hidden md:block absolute -left-6 top-1/2 -translate-y-1/2 w-px h-[60%] bg-[rgba(10,22,40,0.08)]"
                        aria-hidden="true"
                      />
                    )}
                    <p className="text-[17px] max-sm:text-[15px] font-medium leading-[1.35] text-[#0A1628]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* [RIGHT — CONSTRAINT REINFORCEMENT] */}
            <div className="md:border-l md:border-[rgba(10,22,40,0.08)] md:pl-10 lg:pl-12 max-w-[360px]">
              <div className="flex flex-col gap-4">
                <p className="text-[17px] max-sm:text-[15px] leading-[1.65] text-[rgba(10,22,40,0.7)]">
                  When the model is altered to fit the format, control does not hold.
                </p>
                <p className="text-[17px] max-sm:text-[15px] leading-[1.65] text-[rgba(10,22,40,0.7)]">
                  The format changes based on the situation.
                </p>
                <p className="text-[17px] max-sm:text-[15px] font-semibold leading-[1.65] text-[#0A1628]">
                  The system does not.
                </p>
              </div>
            </div>
          </div>

          {/* [EXIT — CONVERGENCE] */}
          <div className="mt-12 flex flex-col items-end md:mt-14">
            <p className="max-w-[720px] text-right text-[18px] max-sm:text-[16px] font-semibold leading-[1.45] text-[#0A1628]">
              Ownership, structure, and execution remain aligned under the same model—regardless of how the engagement is positioned.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 8: Engagement Paths — Situational — White */}
      <SectionWrapper bg="white">
        <div className="mx-auto w-full max-w-[1100px]">
          <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)_minmax(0,1fr)] md:gap-x-12 md:gap-y-0">
            {/* [ENTRY — TOP LEFT] */}
            <div className="max-w-[420px]">
              <p className="text-[22px] max-sm:text-[18px] font-semibold leading-[1.25] text-[#0A1628]">
                Organizations enter from different starting points.
              </p>
            </div>

            {/* [CENTER — ENTRY TRIGGER FIELD (DOMINANT) ] */}
            <div className="max-w-[680px] md:translate-x-[6px]">
              <p className="text-[16px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.85)]">
                Entry occurs through a direction gap, a control gap, or an execution alignment gap.
              </p>

              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 sm:flex-nowrap sm:gap-x-7">
                {['direction gap', 'control gap', 'execution alignment gap'].map((label) => (
                  <span
                    key={label}
                    className="text-[13px] max-sm:text-[12px] font-semibold tracking-[0.18em] text-[#3B5BDB] max-sm:whitespace-normal max-lg:whitespace-normal lg:whitespace-nowrap"
                  >
                    {label}
                  </span>
                ))}
              </div>

              <p className="mt-9 text-[16px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.75)]">
                Left unaddressed, each gap reinforces fragmentation in a different form.
              </p>
            </div>

            {/* [RIGHT — CONVERGENCE SIGNAL] */}
            <div className="md:border-l md:border-[rgba(10,22,40,0.08)] md:pl-10 lg:pl-12 max-w-[360px]">
              <p className="text-[16px] max-sm:text-[15px] font-semibold leading-[1.55] text-[#0A1628]">
                The entry point differs.
              </p>
              <p className="mt-5 text-[16px] max-sm:text-[15px] font-semibold leading-[1.55] text-[#0A1628]">
                The destination does not.
              </p>
            </div>
          </div>

          {/* [EXIT — CONVERGENCE LOCK] */}
          <div className="mt-12 border-t border-[rgba(10,22,40,0.08)] pt-10 flex justify-end">
            <div className="max-w-[720px]">
              <p className="text-[20px] max-sm:text-[18px] font-semibold leading-[1.35] text-[#0A1628]">
                All paths converge into a single controlled system.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 9: CTA — Isolated Block — Navy */}
      <section className="flex items-center justify-center bg-[#0A1628] py-24 max-sm:py-16 max-md:py-24 md:py-32 lg:py-[160px] xl:py-[210px]">
        <div className="flex flex-col items-center md:translate-x-5 md:-translate-y-10">
          <span className="block w-[160px] h-px bg-[rgba(255,255,255,0.15)] mb-5" aria-hidden="true" />
          <p className="text-[20px] max-sm:text-[16px] leading-[1.45] text-center max-w-[580px] text-[#E6EEFF]">
            <span className="block opacity-80 font-medium">If data is a strategic priority,</span>
            <span className="block opacity-100 font-semibold">it requires system-level control.</span>
          </p>
          <Link
            href={L('/executive-data-review')}
            className="group mt-7 inline-flex min-h-11 items-center gap-1 text-[18px] max-sm:text-[16px] font-medium text-[#DCE6FF] underline underline-offset-[6px] decoration-2 decoration-[rgba(255,255,255,0.6)] hover:text-white hover:decoration-[rgba(255,255,255,0.8)]"
          >
            Schedule Executive Data Review <span className="inline-block group-hover:translate-x-1 transition-transform duration-150">→</span>
          </Link>
          <div className="h-10" aria-hidden="true" />
        </div>
      </section>
    </>
  );
}
