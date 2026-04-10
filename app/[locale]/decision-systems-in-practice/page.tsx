import AsymmetricSplitDiagnosticField from '@/components/AsymmetricSplitDiagnosticField';
import ConstraintStackOutcomeFocused from '@/components/ConstraintStackOutcomeFocused';
import HeroPrincipleStack from '@/components/HeroPrincipleStack';
import IndexedSystemLayout from '@/components/IndexedSystemLayout';
import { withLocale, type Locale } from '@/lib/i18n';

export default async function DecisionSystemsInPracticePage({
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
        headline="The difference is not more data. The difference is decision structure."
        supportLines={[
          'Take one recurring decision: when to intervene with an at-risk customer.',
          'The same data can produce drift or consistency depending on whether the decision is structured.',
        ]}
        cta={{
          label: 'Fix Decision Inconsistency',
          href: L('/decision-diagnostic'),
        }}
      />

      <AsymmetricSplitDiagnosticField
        id="before"
        heading="Before: the decision operates through interpretation"
        introRight={[
          'Consider a recurring customer-retention decision: which customers require intervention this week.',
          'Without structure, the organization often looks like this:',
        ]}
        rows={[
          {
            left: '"at-risk" means different things to different teams',
            right: 'some rely on usage decline, others on complaints, others on account judgment',
          },
          {
            left: 'intervention thresholds are inconsistent',
            right: 'reviews happen on different cycles',
          },
          {
            left: 'several people influence the decision, but no single owner is accountable',
            right: 'actions vary from proactive outreach to no response at all',
          },
          {
            left: 'outcomes are not tracked against the decision itself',
          },
        ]}
        conclusion="The same decision exists. The same kinds of data exist. The operating structure does not."
      />

      <IndexedSystemLayout
        id="after"
        heading="After: the same decision is defined as a system"
        intro="Now define the same decision through an explicit structure:"
        items={[
          {
            title: 'Decision',
            description:
              'The decision is clear: which customers require intervention in the current cycle.',
          },
          {
            title: 'Trigger',
            description: 'The trigger is defined: usage or risk threshold is crossed.',
          },
          {
            title: 'Inputs',
            description:
              'The input set is standardized: product usage, support activity, account signals.',
          },
          {
            title: 'Logic',
            description: 'The logic is explicit: intervention type depends on severity and segment.',
          },
          {
            title: 'Ownership',
            description: 'Ownership is assigned: one role is accountable.',
          },
          {
            title: 'Workflow',
            description: 'Workflow is consistent: trigger → evaluation → action.',
          },
          {
            title: 'Action',
            description: 'Action is predefined: outreach, escalation, retention offer.',
          },
          {
            title: 'Feedback',
            description: 'Feedback is tracked: intervention timing and result are measured.',
          },
        ]}
        closureStrong="Nothing mystical has been added."
        closureSoft="The same business problem is now operating through a defined system."
      />

      <ConstraintStackOutcomeFocused
        id="result"
        heading="What changes when the decision is structured"
        introLeftLines={['When the decision is structured:']}
        items={[
          'the same conditions trigger the same evaluation',
          'teams act more consistently across accounts',
          'intervention happens earlier and under defined conditions',
          'ownership becomes clear',
          'outcomes become measurable',
          'improvement becomes possible because the decision can be assessed as a system',
        ]}
        conclusionLines={[
          'The difference is not more reporting.',
          'It is not a more impressive dashboard.',
          'It is not the existence of more data alone.',
          'The difference is that the decision now operates in a repeatable way.',
          'That is the point of decision systems design.',
        ]}
      />
    </>
  );
}
