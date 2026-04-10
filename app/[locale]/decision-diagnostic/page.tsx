import AsymmetricSplitDefinitionOutcomeStack from '@/components/AsymmetricSplitDefinitionOutcomeStack';
import AsymmetricSplitReframe from '@/components/AsymmetricSplitReframe';
import ConstraintStack from '@/components/ConstraintStack';
import DualPhaseSystemField from '@/components/DualPhaseSystemField';
import HeroPrincipleStack from '@/components/HeroPrincipleStack';
import { withLocale, type Locale } from '@/lib/i18n';

export default async function DecisionDiagnosticPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: loc } = await params;
  const locale = loc as Locale;
  const L = (path: string) => withLocale(locale, path);

  return (
    <>
      <HeroPrincipleStack
        headline="Request Decision Diagnostic"
        supportLines={[
          'If recurring decisions produce inconsistent outcomes, the first step is not redesign, implementation, or another workshop.',
          'The first step is to determine how those decisions actually operate today.',
        ]}
        cta={{
          label: 'Start Decision Diagnostic',
          href: L('/decision-diagnostic/intake'),
        }}
      />

      <DualPhaseSystemField
        id="scope"
        heading="What the diagnostic examines"
        intro="The diagnostic examines how selected recurring decisions function in practice across the eight elements:"
        segments={[
          { rangeLabel: '01–04', items: ['decision', 'trigger', 'inputs', 'logic'] },
          { rangeLabel: '05–08', items: ['ownership', 'workflow', 'action', 'feedback'] },
        ]}
        conclusion={[
          'The focus is not generic strategy.',
          'It is structural assessment of real decision behavior.',
          'Which decisions matter, how they currently operate, and where variability enters.',
        ]}
      />

      <ConstraintStack
        id="why-this-step"
        heading="Why this must happen before redesign"
        introRight="Redesign without a baseline usually reproduces the same inconsistency under a different format."
        lead="Without a diagnostic:"
        constraints={[
          'priorities remain unclear',
          'gaps are misidentified',
          'teams work from assumptions',
          'interventions target symptoms',
          'changes do not hold because the operating structure was never made explicit',
        ]}
        conclusion="The diagnostic creates the baseline required before decision systems design can be done responsibly."
      />

      <AsymmetricSplitDefinitionOutcomeStack
        id="output"
        heading="What you receive"
        lead="The output is a structured baseline, not a general opinion."
        items={[
          'mapped decision structures for selected high-impact decisions',
          'explicit identification of variability points across teams and workflows',
          'structural gap analysis across all eight elements',
          'prioritized set of decisions requiring clearer definition',
          'documented boundaries and ownership points',
          'a defined starting point for redesign',
        ]}
        outcome={[
          'This gives the organization a clear view of how decisions currently run and where structural work must begin.',
        ]}
      />

      <AsymmetricSplitReframe
        id="what-this-is-not"
        heading="What this is not"
        intro="Reduce uncertainty and prevent the wrong expectation."
        negatives={[
          'This is not a discovery call.',
          'It is not a generic workshop.',
          'It is not a broad data strategy discussion.',
          'It is not a vague consultation about analytics or AI.',
        ]}
        definition={[
          'It is a bounded assessment of how recurring decisions currently operate, where structure is missing, and what must be clarified before redesign.',
        ]}
        reinforcement={['That precision is what makes the work useful.']}
        cta={{
          label: 'Start Decision Diagnostic',
          href: L('/decision-diagnostic/intake'),
        }}
      />
    </>
  );
}
