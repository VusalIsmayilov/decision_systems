import HeroPrincipleStack from '@/components/HeroPrincipleStack';
import ParallelAxesDeterminationGap from '@/components/ParallelAxesDeterminationGap';
import ParallelLinearSequence from '@/components/ParallelLinearSequence';
import SystemDefinitionGridReframe from '@/components/SystemDefinitionGridReframe';
import { withLocale, type Locale } from '@/lib/i18n';

export default async function DecisionSystemsPage({
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
        headline="The problem is not only the data. The problem is that the decision is undefined."
        supportLines={[
          'When recurring decisions are not structurally defined, they are rebuilt each time they occur.',
          'That is why the same business conditions keep producing different outcomes.',
        ]}
        cta={{
          label: 'Define the Decision Structure',
          href: L('/decision-systems-design'),
        }}
      />

      <ParallelLinearSequence
        id="mechanism-of-failure"
        heading="Recurring decisions are reconstructed every time"
        introTop={[
          'Most organizations do not run recurring decisions as stable systems. They run them as repeated events.',
          'Each time the decision appears, people rebuild it in the moment:',
        ]}
        leftSequence={[
          'the trigger is interpreted again',
          'inputs are selected again',
          'logic is debated again',
        ]}
        rightSequence={[
          'ownership shifts again',
          'workflow changes again',
          'action depends on context again',
        ]}
        conclusionLead="That repeated reconstruction is the source of inconsistency."
        conclusionBody={[
          'The organization is not failing to think. It is failing to operate the same decision through the same structure each time.',
        ]}
      />

      <ParallelAxesDeterminationGap
        id="why-existing-efforts-fail"
        headingLeft="What data, process, governance, and dashboards do not define"
        headingRight="But none of these, on their own, define how a recurring decision works."
        axes={[
          { title: 'Data', description: 'provides inputs.' },
          { title: 'Dashboards', description: 'provide visibility.' },
          { title: 'Reports', description: 'provide explanation.' },
          { title: 'Process', description: 'provides steps.' },
          { title: 'Governance', description: 'provides accountability boundaries.' },
        ]}
        gapLead="They do not fully determine:"
        gapItems={[
          'what precise decision question is being resolved',
          'what triggers the decision',
          'which inputs count',
          'how those inputs are evaluated',
          'who decides',
          'what action follows',
          'how results are fed back into the next cycle',
        ]}
        conclusion="That is why organizations can improve data quality, redesign reports, strengthen governance, and still watch the same decision drift. These layers matter. They are not the decision structure itself."
      />

      <SystemDefinitionGridReframe
        id="reframe"
        heading="Decision systems turn interpretation into structure"
        intro={[
          'A decision system is not a theory. It is the defined operating structure of a recurring business decision.',
          'It makes explicit what is usually left implicit:',
        ]}
        leftItems={['when the decision starts', 'what information is used', 'how evaluation happens']}
        rightItems={['who owns the decision', 'how action is executed', 'how outcomes are tracked']}
        reframeLead="This is the shift that matters."
        reframeNegatives={['Not from low-tech to high-tech.', 'Not from dashboard to AI.']}
        reframePositive="But from repeated interpretation to repeatable decision structure."
        reframeConclusion={[
          'That is why decision systems are the missing layer between data capability and consistent business action.',
        ]}
      />
    </>
  );
}
