import Link from 'next/link';
import SectionWrapper from '@/components/SectionWrapper';
import SectionLabel from '@/components/SectionLabel';
import { withLocale, type Locale } from '@/lib/i18n';

export const metadata = {
  title: 'About',
};

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: loc } = await params;
  const locale = loc as Locale;
  const L = (path: string) => withLocale(locale, path);
  return (
    <>
      {/* Section 0: Hero — Definition (Positioning) — Navy */}
      <SectionWrapper bg="navy">
        <div className="mx-auto w-full max-w-[1040px]">
          <p className="mb-8 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(194,209,232,0.66)]">
            About
          </p>

          {/* ENTRY — anchored dominant block */}
          <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:gap-x-12 md:gap-y-0 lg:gap-x-14">
            <div className="max-w-[660px]">
              <h1 className="text-[46px] font-bold leading-[1.03] tracking-[-0.03em] text-white max-md:text-[38px] max-sm:text-[31px]">
                This firm exists to establish control
              </h1>

              <p className="mt-10 text-[16px] max-sm:text-[15px] leading-[1.6] text-[rgba(194,209,232,0.76)]">
                Most organizations do not operate the data and AI function as a controlled system.
              </p>
            </div>

            {/* PROCESSING — compressed contrast */}
            <div className="md:border-l md:border-[rgba(255,255,255,0.12)] md:pl-10 lg:pl-12">
              <div className="max-w-[600px] flex flex-col gap-6">
                <p className="text-[15px] max-sm:text-[14px] leading-[1.65] text-[rgba(194,209,232,0.72)]">
                  Ownership is distributed, responsibility is fragmented, and no single structure holds control.
                </p>
                <p className="text-[15px] max-sm:text-[14px] leading-[1.65] text-[rgba(194,209,232,0.72)]">
                  This firm exists because that condition persists.
                </p>
              </div>
            </div>
          </div>

          {/* EXIT / TRANSITION — resolution + forward tension */}
          <div className="mt-12 border-t border-[rgba(255,255,255,0.12)] pt-10">
            <p className="max-w-[760px] text-[17px] max-sm:text-[15px] leading-[1.55] text-[rgba(194,209,232,0.82)]">
              It establishes the function as a single system under ownership, where direction, structure, and execution operate together.
            </p>
            <p className="mt-6 text-[19px] max-sm:text-[16px] font-semibold leading-[1.45] text-white">
              <Link
                href={L('/')}
                className="text-[#6B9FFF] transition-colors hover:text-white underline-offset-2 hover:underline"
              >
                Control
              </Link>{' '}
              becomes defined, enforced, and sustained.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 1: Why This Firm Exists — Definition (Positioning) — White */}
      <SectionWrapper
        bg="white"
        className="border-t border-[rgba(10,22,40,0.08)]"
      >
        <div className="mx-auto w-full max-w-[1100px]">
          <p className="mb-8 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(90,100,120,0.68)]">
            Why This Firm Exists
          </p>

          {/* ENTRY — anchored left-biased block */}
          <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:gap-x-12 md:gap-y-0 lg:gap-x-14">
            <div className="max-w-[660px]">
              <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.015em] text-[#0A1628] max-sm:text-[24px]">
                This firm exists because that condition persists.
              </h2>
              <p className="mt-8 text-[17px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.78)]">
                Most organizations do not operate the data and AI function as a controlled system.
              </p>
            </div>

            {/* PROCESSING — asymmetrical decomposition */}
            <div className="md:border-l md:border-[rgba(10,22,40,0.08)] md:pl-10 lg:pl-12">
              <div className="max-w-[680px] flex flex-col gap-6">
                <p className="text-[16px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.72)]">
                  Ownership is not defined end-to-end. Responsibility is distributed across functions, vendors, and initiatives.
                </p>
                <p className="text-[16px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.72)]">
                  Direction, structure, and execution all exist—but not as a single system under control.
                </p>
                <p className="text-[16px] max-sm:text-[15px] font-medium leading-[1.55] text-[#0A1628]">
                  Control is therefore absent by design.
                </p>
              </div>
            </div>
          </div>

          {/* EXIT / TRANSITION — forward push */}
          <div className="mt-12 flex justify-end border-t border-[rgba(10,22,40,0.08)] pt-10">
            <div className="max-w-[760px]">
              <p className="text-[17px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.78)] md:text-right">
                As effort increases, coherence does not follow.
              </p>
              <p className="mt-6 text-[18px] max-sm:text-[16px] font-semibold leading-[1.45] text-[#0A1628] md:text-right">
                It exists to establish control as a system-level construct—where the function operates as one, under defined ownership, rather than as fragmented activity across disconnected parts.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 2: Founder — Structure (System Presence) — Gray */}
      <SectionWrapper
        bg="gray"
        className="border-t border-[rgba(10,22,40,0.08)]"
      >
        <div className="mx-auto w-full max-w-[1100px]">
          <p className="mb-8 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(90,100,120,0.68)]">
            Founder
          </p>

          {/* ENTRY — indexed anchor */}
          <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] md:gap-x-14 md:gap-y-0 lg:gap-x-16">
            <div className="max-w-[320px]">
              <p className="text-[14px] max-sm:text-[13px] font-semibold leading-[1.45] text-[rgba(10,22,40,0.62)]">
                Source / Accountability
              </p>
            </div>

            <div className="md:border-l md:border-[rgba(10,22,40,0.08)] md:pl-10 lg:pl-12">
              <p className="max-w-[760px] text-[30px] max-sm:text-[24px] font-bold leading-[1.12] tracking-[-0.015em] text-[#0A1628]">
                The founder is the source of this model and remains accountable for its application.
              </p>
            </div>
          </div>

          {/* PROCESSING — structured system blocks */}
          <div className="mt-12 flex justify-end border-t border-[rgba(10,22,40,0.08)] pt-10">
            <div className="max-w-[760px] flex flex-col gap-6">
              <p className="text-[17px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.78)]">
                The firm is built on a defined model for operating the data and AI function under control.
              </p>
              <p className="text-[16px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.72)]">
                The model originates from repeated identification of the same structural condition: direction, structure, and execution exist, but not under single accountability.
              </p>
              <p className="text-[16px] max-sm:text-[15px] font-medium leading-[1.55] text-[#0A1628]">
                Without ownership of the system as a whole, control does not hold.
              </p>
            </div>
          </div>

          {/* EXIT / TRANSITION — enforcement */}
          <div className="mt-12 flex justify-end border-t border-[rgba(10,22,40,0.08)] pt-10">
            <div className="max-w-[760px]">
              <p className="text-[17px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.78)] md:text-right">
                The role is not advisory.
              </p>
              <p className="mt-6 text-[18px] max-sm:text-[16px] font-semibold leading-[1.45] text-[#0A1628] md:text-right">
                It is to carry and enforce the model as defined—ensuring the function operates as one system under control, without deviation.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 3: Model Origin — Causality (Why) — White */}
      <SectionWrapper
        bg="white"
        className="border-t border-[rgba(10,22,40,0.08)]"
      >
        <div className="mx-auto w-full max-w-[1100px]">
          <p className="mb-8 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(90,100,120,0.68)]">
            Model Origin
          </p>

          <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.3fr)_minmax(0,1fr)] md:gap-x-12 md:gap-y-0 lg:gap-x-14">
            {/* LEFT — premise */}
            <div className="max-w-[380px]">
              <p className="text-[20px] max-sm:text-[18px] font-semibold leading-[1.35] text-[#0A1628]">
                The model exists because the data and AI function is structurally separated.
              </p>
              <p className="mt-6 text-[16px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.72)]">
                Direction, structure, and execution operate as independent components rather than as a single system.
              </p>
            </div>

            {/* CENTER — mechanism (dominant) */}
            <div className="md:border-l md:border-[rgba(10,22,40,0.08)] md:pl-10 lg:pl-12">
              <div className="max-w-[700px] flex flex-col gap-8">
                <p className="text-[21px] max-sm:text-[18px] font-semibold leading-[1.35] text-[#0A1628]">
                  This separation removes system-level accountability.
                </p>
                <p className="text-[17px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.78)]">
                  No single point owns how the function operates as a whole.
                </p>
              </div>
            </div>

            {/* RIGHT — outcome / resolution */}
            <div className="md:border-l md:border-[rgba(10,22,40,0.08)] md:pl-10 lg:pl-12">
              <div className="max-w-[460px] flex flex-col gap-6">
                <p className="text-[16px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.72)]">
                  As a result, control cannot be established across decisions and execution.
                </p>
                <p className="text-[17px] max-sm:text-[15px] font-semibold leading-[1.55] text-[#0A1628]">
                  It integrates direction, structure, and execution into one controlled structure, applied where this separation persists.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 4: Principles — Structure (System Presence) — Navy */}
      <SectionWrapper
        bg="navy"
        className="border-t border-[rgba(255,255,255,0.08)]"
      >
        <div className="mx-auto w-full max-w-[1100px]">
          <p className="mb-8 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(194,209,232,0.66)]">
            Principles
          </p>

          {/* ENTRY — anchored dominant block */}
          <div className="max-w-[760px]">
            <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.015em] text-white max-sm:text-[24px]">
              Control is defined by outcomes, not activity.
            </h2>
            <p className="mt-8 text-[17px] max-sm:text-[15px] leading-[1.55] text-[rgba(194,209,232,0.82)]">
              A single point of accountability owns the function. Without this, control does not hold.
            </p>
          </div>

          {/* PROCESSING — fragmented 2x2 rule grid */}
          <div className="mt-12 grid grid-cols-1 gap-8 border-t border-[rgba(255,255,255,0.12)] pt-10 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-14">
            {[
              'Responsibility is not distributed across functions or vendors. When it is, the system fragments.',
              'Parallel systems are not maintained. They create competing structures and break control.',
              'Execution operates only under defined direction and established control. Work outside this does not form part of the system.',
              'Vendors do not define direction or structure. When they do, control shifts away from the system.',
            ].map((rule) => (
              <div key={rule} className="max-w-[520px]">
                <p className="text-[16px] max-sm:text-[15px] leading-[1.55] text-[rgba(194,209,232,0.76)]">
                  {rule}
                </p>
              </div>
            ))}
          </div>

          {/* EXIT / TRANSITION — enforcement */}
          <div className="mt-12 flex justify-end border-t border-[rgba(255,255,255,0.12)] pt-10">
            <p className="max-w-[620px] text-right text-[18px] max-sm:text-[16px] font-semibold leading-[1.45] text-white">
              These rules are enforced without exception.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 5: Working Expectations — Situational (Triggers) — White */}
      <SectionWrapper
        bg="white"
        className="border-t border-[rgba(10,22,40,0.08)]"
      >
        <div className="mx-auto w-full max-w-[1100px]">
          <p className="mb-8 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(90,100,120,0.68)]">
            Working Expectations
          </p>

          {/* ENTRY — asymmetric split */}
          <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] md:gap-x-12 md:gap-y-0 lg:gap-x-16">
            <div className="max-w-[760px]">
              <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.015em] text-[#0A1628] max-sm:text-[24px]">
                This requires executive assignment of ownership for the data and AI function as a whole. Without this, control cannot be established.
              </h2>
            </div>

            <div className="md:border-l md:border-[rgba(10,22,40,0.08)] md:pl-10 lg:pl-12">
              <p className="max-w-[420px] text-[16px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.72)]">
                This is not compatible with distributed ownership or fragmented execution.
              </p>
            </div>
          </div>

          {/* PROCESSING — split continuation */}
          <div className="mt-12 grid grid-cols-1 gap-10 border-t border-[rgba(10,22,40,0.08)] pt-10 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] md:gap-x-12 md:gap-y-0 lg:gap-x-16">
            <div className="max-w-[760px] flex flex-col gap-8">
              <p className="text-[17px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.78)]">
                This requires restructuring of roles and responsibilities where ownership is distributed. Existing structures do not remain unchanged.
              </p>
              <p className="text-[16px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.72)]">
                This requires stopping or redefining initiatives that do not operate under defined direction and control. Activity without control is not maintained.
              </p>
            </div>

            <div />
          </div>

          {/* EXIT / TRANSITION — binary closure */}
          <div className="mt-12 grid grid-cols-1 gap-8 border-t border-[rgba(10,22,40,0.08)] pt-10 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] md:gap-x-12 md:gap-y-0 lg:gap-x-16">
            <div className="max-w-[760px]">
              <p className="text-[17px] max-sm:text-[15px] leading-[1.55] text-[rgba(10,22,40,0.78)]">
                This requires operating under a single control model. Parallel structures are not sustained.
              </p>
            </div>

            <div className="md:border-l md:border-[rgba(10,22,40,0.08)] md:pl-10 lg:pl-12">
              <p className="max-w-[420px] text-[18px] max-sm:text-[16px] font-semibold leading-[1.45] text-[#0A1628]">
                Organizations not prepared to establish control are not a fit.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
