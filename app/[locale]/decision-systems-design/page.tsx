import AlignmentOutcome from '@/components/AlignmentOutcome';
import DefinitionCompressionBlock from '@/components/DefinitionCompressionBlock';
import HeroPrincipleStack from '@/components/HeroPrincipleStack';
import IndexedSystemLayout from '@/components/IndexedSystemLayout';
import { withLocale, type Locale } from '@/lib/i18n';

export default async function DecisionSystemsDesignPage({
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
        headline="A recurring business decision can be designed as a system"
        supportLines={[
          'When the structure is explicit, the same conditions can be evaluated the same way, by the right owner, through the same workflow, toward the same action.',
        ]}
        cta={{
          label: 'See How Your Decisions Actually Operate',
          href: L('/how-decisions-are-structured'),
        }}
      />

      <DefinitionCompressionBlock
        id="structure"
        heading="What a decision system is"
        lead="A decision system is the full operating structure behind a recurring decision."
        body={[
          'It does not describe the decision in abstract terms.',
          'It defines how the decision actually runs in the business: what starts it, what information is used, how evaluation happens, who owns it, what action follows, and how outcomes are tracked.',
          'A decision becomes reliable when it stops depending on informal interpretation and starts operating through an explicit structure.',
        ]}
        conclusion="That is what makes it repeatable."
      />

      <IndexedSystemLayout
        id="indexed-elements"
        heading="The eight elements of a decision system"
        intro="Every recurring decision can be defined through eight elements:"
        items={[
          {
            title: 'Decision',
            description:
              'The exact business question being resolved. Not a broad topic, but the specific decision the organization must make repeatedly.',
          },
          {
            title: 'Trigger',
            description:
              'The condition that initiates the decision. A threshold, event, cycle, exception, or change that requires evaluation.',
          },
          {
            title: 'Inputs',
            description:
              'The information used to evaluate the decision. Not all available data, only the data that actually matters to the decision.',
          },
          {
            title: 'Logic',
            description: 'The criteria, rules, thresholds, and reasoning used to move from inputs to conclusion.',
          },
          {
            title: 'Ownership',
            description: 'The role accountable for making the decision. Clear ownership prevents drift and delay.',
          },
          {
            title: 'Workflow',
            description: 'The path from trigger to evaluation to action. How the decision moves operationally.',
          },
          {
            title: 'Action',
            description: 'The defined response that follows the decision. A decision without action remains incomplete.',
          },
          {
            title: 'Feedback',
            description:
              'The way outcomes are tracked so the decision can be assessed, improved, and governed over time.',
          },
        ]}
      />

      <AlignmentOutcome
        id="system-behavior"
        heading="How structure creates repeatability"
        intro="When the eight elements are explicit and aligned, recurring decisions stop drifting."
        columns={[
          {
            lines: [
              'The same trigger activates the same decision.',
              'The same inputs are evaluated through the same logic.',
            ],
          },
          {
            lines: ['The same owner is accountable.', 'The same workflow leads to the same action.'],
          },
          {
            lines: ['The outcome is tracked in a defined way.', 'That is how repeatability is created.'],
            emphasisIndex: 1,
          },
        ]}
        negatives={[
          'Not by hoping teams align. Not by asking for more discipline. Not by adding more dashboards.',
        ]}
        conclusion="Repeatability comes from making the operating structure of the decision explicit. Where one or more elements remain implicit, variation enters the system again."
      />
    </>
  );
}
