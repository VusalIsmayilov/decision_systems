import ActionFrame from '@/components/ActionFrame';
import DiagnosticIntakeForm from '@/components/DiagnosticIntakeForm';
import LinearSequence from '@/components/LinearSequence';
import PromptFrame from '@/components/PromptFrame';
import SectionWrapper from '@/components/SectionWrapper';

export default async function DecisionDiagnosticIntakePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await params;

  return (
    <>
      <ActionFrame
        id="hero"
        headline="Start Decision Diagnostic"
        supportLines={[
          'You are entering a structured assessment of how one recurring decision currently operates in your organization.',
        ]}
      />

      <LinearSequence
        id="requirements"
        heading="What this step requires"
        introTop={[]}
        items={[
          'Identify one recurring decision.',
          'Describe where inconsistency appears.',
          'Provide enough context to evaluate whether diagnostic work is appropriate.',
        ]}
        conclusion={[
          'This is not a general inquiry form.',
          'It is the first step in a structured decision assessment.',
        ]}
      />

      <SectionWrapper bg="gray" id="intake-form">
        <div className="mx-auto w-full max-w-[1040px]">
          <p className="mb-6 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(90,100,120,0.72)]">
            Diagnostic input
          </p>
          <h2 className="max-w-[720px] text-[30px] font-bold leading-[1.12] tracking-[-0.015em] text-[#0A1628] max-sm:text-[24px]">
            Form
          </h2>
          <div className="mt-9 border-t border-[rgba(10,22,40,0.08)] pt-9 lg:mt-10 lg:pt-10">
            <div className="min-w-0 max-w-[720px]">
              <DiagnosticIntakeForm />
            </div>
          </div>
        </div>
      </SectionWrapper>

      <LinearSequence
        id="what-happens-next"
        heading="What happens next"
        introTop={[]}
        items={[
          'We review the decision context you submit.',
          'We assess scope and fit.',
          'If appropriate, we follow up by email to confirm the next step in the diagnostic process.',
        ]}
        conclusion={[]}
      />

      <PromptFrame
        id="boundary"
        headline="Boundary"
        supportLines={[
          'This intake is for recurring decision inconsistency.',
          'It is not for general consulting inquiries.',
          'The focus is decision structure.',
          'The output is a baseline for redesign, not a broad exploratory conversation.',
        ]}
      />
    </>
  );
}
