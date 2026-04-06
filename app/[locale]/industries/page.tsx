import Link from 'next/link';
import SectionWrapper from '@/components/SectionWrapper';
import SectionLabel from '@/components/SectionLabel';
import CTAButton from '@/components/CTAButton';
import { withLocale, type Locale } from '@/lib/i18n';

export const metadata = {
  title: 'Industries',
};

export default async function IndustriesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: loc } = await params;
  const locale = loc as Locale;
  const L = (path: string) => withLocale(locale, path);
  return (
    <>
      {/* Section 1: Hero — Definition (Positioning) — Navy */}
      <SectionWrapper bg="navy">
        <div className="mx-auto w-full max-w-[1040px]">
          <p className="mb-8 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(194,209,232,0.66)]">
            Industries
          </p>

          {/* ENTRY — asymmetric split 40/60 */}
          <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] md:gap-x-12 md:gap-y-0 lg:gap-x-14">
            {/* LEFT — contrast anchor */}
            <div className="max-w-[360px]">
              <p className="text-[15px] max-sm:text-[14px] leading-[1.65] text-[rgba(194,209,232,0.72)]">
                Fragmented across teams without a single point of control.
              </p>
            </div>

            {/* RIGHT — dominant definition block */}
            <div className="md:border-l md:border-[rgba(255,255,255,0.12)] md:pl-10 lg:pl-12">
              <h1 className="max-w-[720px] text-[46px] font-bold leading-[1.03] tracking-[-0.03em] text-white max-md:text-[38px] max-sm:text-[31px]">
                <span className="block">This is not a difference in tools or investment.</span>
                <span className="block">It is a difference in how the function is owned and run.</span>
              </h1>

              <p className="mt-10 max-w-[700px] text-[16px] max-sm:text-[15px] leading-[1.6] text-[rgba(194,209,232,0.76)]">
                When operated as one system, outcomes are stable and decisions hold.
              </p>
            </div>
          </div>

          {/* PROCESSING — compression + reinforcement */}
          {/* EXIT / TRANSITION — isolated control */}
          <div className="mt-12 flex justify-end border-t border-[rgba(255,255,255,0.12)] pt-10">
            <p className="max-w-[760px] text-right text-[19px] max-sm:text-[16px] font-semibold leading-[1.45] text-white">
              This distinction defines whether the data function{' '}
              <Link
                href={L('/')}
                className="text-[#6B9FFF] transition-colors hover:text-white underline-offset-2 hover:underline"
              >
                operates under control
              </Link>{' '}
              or as disconnected activity.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 2: Target Organizations — Situational (Triggers) — White */}
      <SectionWrapper
        bg="white"
        className="border-t border-[rgba(10,22,40,0.08)]"
      >
        <div className="mx-auto w-full max-w-[1100px]">
          <p className="mb-8 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(90,100,120,0.68)]">
            Target Organizations
          </p>

          {/* ENTRY — asymmetric split 60/40 */}
          <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] md:gap-x-14 md:gap-y-0 lg:gap-x-16">
            <div className="max-w-[620px]">
              <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.015em] text-[#0A1628] max-sm:text-[24px]">
                You are operating at a level where data is already embedded across the organization.
              </h2>
            </div>

            <div className="md:border-l md:border-[rgba(10,22,40,0.08)] md:pl-10 lg:pl-12">
              <p className="max-w-[460px] text-[16px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.72)]">
                Multiple systems, teams, and external vendors are in place.
              </p>
              <p className="mt-6 max-w-[520px] text-[16px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.72)]">
                Data supports operations and decisions—but ownership of the function is not unified.
              </p>
            </div>
          </div>

          {/* PROCESSING — 2-block fragmented grid */}
          <div className="mt-12 grid grid-cols-1 gap-8 border-t border-[rgba(10,22,40,0.08)] pt-10 md:grid-cols-2 md:gap-x-12 md:gap-y-0">
            <div className="max-w-[520px]">
              <p className="text-[17px] max-sm:text-[15px] font-medium leading-[1.55] text-[#0A1628]">
                The organization operates at scale, where data is not optional and decisions depend on it.
              </p>
            </div>
            <div className="max-w-[420px] md:justify-self-end">
              <p className="text-[16px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.72)]">
                Budgets are committed.
              </p>
              <p className="mt-3 text-[16px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.72)]">
                Initiatives are active.
              </p>
              <p className="mt-3 text-[16px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.72)]">
                Expectations are set.
              </p>
            </div>
          </div>

          {/* EXIT / TRANSITION — forward push */}
          <div className="mt-12 flex justify-end border-t border-[rgba(10,22,40,0.08)] pt-10">
            <div className="max-w-[720px]">
              <p className="text-[17px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.72)] md:text-right">
                But no single role holds end-to-end responsibility for direction, structure, and execution as one system.
              </p>
              <p className="mt-6 text-[18px] max-sm:text-[16px] font-semibold leading-[1.45] text-[#0A1628] md:text-right">
                The function exists.
              </p>
              <p className="mt-2 text-[18px] max-sm:text-[16px] font-semibold leading-[1.45] text-[#0A1628] md:text-right">
                Control does not.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 3: Organizational Conditions — Structure (System Presence) — Gray */}
      <SectionWrapper
        bg="gray"
        className="border-t border-[rgba(10,22,40,0.08)]"
      >
        <div className="mx-auto w-full max-w-[1100px]">
          <p className="mb-8 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(90,100,120,0.68)]">
            Organizational Conditions
          </p>

          {/* ENTRY — indexed split */}
          <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] md:gap-x-14 md:gap-y-0 lg:gap-x-16">
            <div className="max-w-[360px]">
              <p className="text-[16px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.72)]">
                Data operates across multiple domains without a single control point.
              </p>
            </div>

            <div className="md:border-l md:border-[rgba(10,22,40,0.08)] md:pl-10 lg:pl-12">
              <p className="max-w-[700px] text-[17px] max-sm:text-[15px] font-medium leading-[1.55] text-[#0A1628]">
                Ownership is distributed across business units, IT, and vendors—each accountable within scope, but not for the system as a whole.
              </p>
            </div>
          </div>

          {/* PROCESSING — indexed system rows */}
          <div className="mt-12 border-t border-[rgba(10,22,40,0.08)] pt-10">
            <div className="grid grid-cols-1 gap-8">
              <div className="grid grid-cols-1 gap-3 border-b border-[rgba(10,22,40,0.08)] pb-7 md:grid-cols-[minmax(0,240px)_1fr] md:gap-x-8 md:gap-y-0">
                <p className="text-[14px] max-sm:text-[13px] font-semibold leading-[1.45] text-[rgba(10,22,40,0.62)]">
                  Systems
                </p>
                <p className="text-[16px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.78)]">
                  Systems have been developed over time for different purposes. They coexist, but do not operate as a unified structure.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 border-b border-[rgba(10,22,40,0.08)] pb-7 md:grid-cols-[minmax(0,240px)_1fr] md:gap-x-8 md:gap-y-0">
                <p className="text-[14px] max-sm:text-[13px] font-semibold leading-[1.45] text-[rgba(10,22,40,0.62)]">
                  Governance
                </p>
                <p className="text-[16px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.78)]">
                  Governance frameworks exist formally, but do not determine how data is created, used, or changed in practice.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 md:grid-cols-[minmax(0,240px)_1fr] md:gap-x-8 md:gap-y-0">
                <p className="text-[14px] max-sm:text-[13px] font-semibold leading-[1.45] text-[rgba(10,22,40,0.62)]">
                  Initiatives / Vendors
                </p>
                <p className="text-[16px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.78)]">
                  Initiatives progress in parallel. Vendors contribute within fragmented ownership structures.
                </p>
              </div>
            </div>
          </div>

          {/* EXIT / TRANSITION — forward push */}
          <div className="mt-12 flex justify-end border-t border-[rgba(10,22,40,0.08)] pt-10">
            <p className="max-w-[520px] text-right text-[18px] max-sm:text-[16px] font-semibold leading-[1.45] text-[#0A1628]">
              <span className="block">The system forms through accumulation—</span>
              <span className="block">but not under control.</span>
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 4: Typical Symptoms — Recognition (Symptoms) — White */}
      <SectionWrapper
        bg="white"
        className="border-t border-[rgba(10,22,40,0.08)]"
      >
        <div className="mx-auto w-full max-w-[1100px]">
          <p className="mb-8 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(90,100,120,0.68)]">
            Typical Symptoms
          </p>

          {/* ENTRY — trigger anchor */}
          <h2 className="max-w-[760px] text-[30px] font-bold leading-[1.12] tracking-[-0.015em] text-[#0A1628] max-sm:text-[24px]">
            At scale, the same data produces different decisions across teams.
          </h2>

          {/* PROCESSING — staggered 2-column scan */}
          <div className="mt-12 grid grid-cols-1 gap-10 border-t border-[rgba(10,22,40,0.08)] pt-10 md:grid-cols-2 md:gap-x-12 md:gap-y-0 lg:gap-x-16">
            <div className="max-w-[500px]">
              <p className="text-[16px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.78)]">
                As systems and vendors increase, outcomes become harder to reconcile.
              </p>
              <p className="mt-6 text-[16px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.72)]">
                Alignment requires effort, not structure.
              </p>
            </div>

            <div className="max-w-[560px] md:justify-self-end">
              <p className="text-[16px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.78)]">
                Confidence in outputs varies by context—what holds in one area does not hold in another.
              </p>
              <p className="mt-6 text-[16px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.72)]">
                Execution progresses in parallel, but without a single reference point.
              </p>
            </div>
          </div>

          {/* EXIT / TRANSITION — compressed convergence */}
          <div className="mt-12 flex justify-end border-t border-[rgba(10,22,40,0.08)] pt-10">
            <div className="max-w-[620px]">
              <p className="text-[17px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.78)] md:text-right">
                Priorities shift as interpretations diverge.
              </p>
              <p className="mt-4 text-[18px] max-sm:text-[16px] font-semibold leading-[1.45] text-[#0A1628] md:text-right">
                More visibility does not produce consistency.
              </p>
              <p className="mt-4 text-[17px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.72)] md:text-right">
                It increases the need to interpret before acting.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 5: Priority Sectors — Situational (Triggers) — Navy */}
      <SectionWrapper
        bg="navy"
        className="border-t border-[rgba(255,255,255,0.08)]"
      >
        <div className="mx-auto w-full max-w-[1100px]">
          <p className="mb-8 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(194,209,232,0.66)]">
            Priority Sectors
          </p>

          {/* ENTRY — anchored trigger */}
          <h2 className="max-w-[940px] text-[30px] font-bold leading-[1.12] tracking-[-0.015em] text-white max-sm:text-[24px]">
            These conditions consistently appear in environments where operations are complex, decisions are continuous, and data directly shapes execution.
          </h2>

          {/* PROCESSING — parallel 2x2 grid */}
          <div className="mt-12 grid grid-cols-1 gap-8 border-t border-[rgba(255,255,255,0.12)] pt-10 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-14">
            {[
              'Financial services',
              'Telecommunications',
              'Retail and E-commerce',
              'Energy and Utilities, and Logistics and Supply Chain.',
            ].map((sector) => (
              <div key={sector} className="max-w-[460px]">
                <p className="text-[17px] max-sm:text-[15px] font-medium leading-[1.55] text-[rgba(255,255,255,0.88)]">
                  {sector}
                </p>
              </div>
            ))}
          </div>

          {/* EXIT / TRANSITION — right-weighted compressed block */}
          <div className="mt-12 flex justify-end border-t border-[rgba(255,255,255,0.12)] pt-10">
            <div className="max-w-[760px]">
              <p className="text-[17px] max-sm:text-[15px] leading-[1.55] text-[rgba(194,209,232,0.78)] md:text-right">
                These sectors operate at scale, with high-frequency decision cycles and deep dependency on data across functions.
              </p>
              <p className="mt-6 text-[17px] max-sm:text-[15px] leading-[1.55] text-[rgba(194,209,232,0.78)] md:text-right">
                As complexity increases, fragmentation does not remain contained.
              </p>
              <p className="mt-6 text-[18px] max-sm:text-[16px] font-semibold leading-[1.45] text-white md:text-right">
                It expands across the system—unless control is established centrally.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 6: Fit Criteria — Situational (Triggers) — White */}
      <SectionWrapper
        bg="white"
        className="border-t border-[rgba(10,22,40,0.08)]"
      >
        <div className="mx-auto w-full max-w-[1100px]">
          <p className="mb-8 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(90,100,120,0.68)]">
            Fit Criteria
          </p>

          {/* ENTRY — anchored trigger */}
          <h2 className="max-w-[900px] text-[30px] font-bold leading-[1.12] tracking-[-0.015em] text-[#0A1628] max-sm:text-[24px]">
            Engagement becomes relevant when the need for control is recognized—and acted on.
          </h2>

          {/* PROCESSING — asymmetrical clusters */}
          <div className="mt-12 grid grid-cols-1 gap-10 border-t border-[rgba(10,22,40,0.08)] pt-10 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] md:gap-x-12 md:gap-y-0 lg:gap-x-16">
            <div className="max-w-[620px]">
              <p className="text-[16px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.78)]">
                Executive leadership acknowledges that ownership of the data function is not established end-to-end.
              </p>
              <p className="mt-6 text-[16px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.72)]">
                There is a requirement for decisions to operate consistently across teams, not as local interpretations.
              </p>
            </div>

            <div className="max-w-[520px] md:justify-self-end">
              <p className="text-[16px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.78)]">
                Multiple initiatives require coordination under a single direction.
              </p>
              <p className="mt-6 text-[16px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.72)]">
                Readiness exists to assign centralized ownership with authority over direction, structure, and execution.
              </p>
            </div>
          </div>

          {/* EXIT / TRANSITION — convergence */}
          <div className="mt-12 flex justify-end border-t border-[rgba(10,22,40,0.08)] pt-10">
            <div className="max-w-[620px]">
              <p className="text-[17px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.78)] md:text-right">
                The objective is not to improve parts of the system.
              </p>
              <p className="mt-4 text-[18px] max-sm:text-[16px] font-semibold leading-[1.45] text-[#0A1628] md:text-right">
                It is to operate the function as a controlled whole.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 7: Non-Fit Criteria — Situational (Triggers) — Gray */}
      <SectionWrapper
        bg="gray"
        className="border-t border-[rgba(10,22,40,0.08)]"
      >
        <div className="mx-auto w-full max-w-[1100px]">
          <p className="mb-8 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(90,100,120,0.68)]">
            Non-Fit Criteria
          </p>

          {/* ENTRY — exclusion anchor */}
          <h2 className="max-w-[920px] text-[30px] font-bold leading-[1.12] tracking-[-0.015em] text-[#0A1628] max-sm:text-[24px]">
            Not applicable where system-level control is not required or cannot be established.
          </h2>

          {/* PROCESSING — 2x2 disqualification grid */}
          <div className="mt-12 grid grid-cols-1 gap-8 border-t border-[rgba(10,22,40,0.08)] pt-10 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-14">
            {[
              'This includes requests limited to tooling, delivery, or isolated technical outputs.',
              'Environments where the objective is implementation—not control.',
              'Early-stage or low-complexity contexts without dependency on data as a system.',
              'Situations without executive ownership or mandate for centralized control.',
            ].map((line) => (
              <div key={line} className="max-w-[500px]">
                <p className="text-[16px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.72)]">
                  {line}
                </p>
              </div>
            ))}
          </div>

          {/* EXIT / TRANSITION — hard boundary */}
          <div className="mt-12 flex justify-end border-t border-[rgba(10,22,40,0.08)] pt-10">
            <div className="max-w-[620px]">
              <p className="text-[17px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.78)] md:text-right">
                Advisory-only expectations without structural change.
              </p>
              <p className="mt-4 text-[17px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.78)] md:text-right">
                Where the problem is defined as tools, hiring, or vendor selection—
              </p>
              <p className="mt-4 text-[18px] max-sm:text-[16px] font-semibold leading-[1.45] text-[#0A1628] md:text-right">
                the system remains fragmented.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 8: CTA — Action (Commitment) — Navy */}
      <SectionWrapper
        bg="navy"
        className="border-t border-[rgba(255,255,255,0.08)]"
      >
        <div className="mx-auto w-full max-w-[980px]">
          {/* ENTRY — framed isolation */}
          <div className="max-w-[760px] border border-[rgba(255,255,255,0.14)] px-8 py-8 md:px-10 md:py-9">
            <p className="text-[24px] max-sm:text-[18px] font-semibold leading-[1.3] text-white">
              Establish control of the data system through a structured executive engagement.
            </p>
          </div>

          {/* PROCESSING — offset support */}
          <div className="mt-10 md:ml-24">
            <p className="max-w-[620px] text-[16px] max-sm:text-[15px] leading-[1.6] text-[rgba(194,209,232,0.72)]">
              Move from fragmented activity to a controlled system under single ownership.
            </p>
          </div>

          {/* EXIT / TRANSITION — isolated endpoint */}
          <div className="mt-12 flex flex-col items-end border-t border-[rgba(255,255,255,0.12)] pt-10">
            <div>
              <CTAButton text="Schedule Executive Data Review" href={L('/executive-data-review')} />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
