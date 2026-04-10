import ConstraintStack from '@/components/ConstraintStack';
import FragmentedGrid from '@/components/FragmentedGrid';
import HeroPrincipleStack from '@/components/HeroPrincipleStack';
import IndexedStepSequence from '@/components/IndexedStepSequence';
import { withLocale, type Locale } from '@/lib/i18n';

export default async function HowDecisionsAreStructuredPage({
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
        headline="A decision is defined by how it actually operates, not by how people describe it"
        supportLines={[
          'To redesign a recurring decision, you first have to see how it functions today: what triggers it, what inputs are used, where logic shifts, who decides, and where action breaks.',
        ]}
        cta={{
          label: 'See What Changes When Structure Is Defined',
          href: L('/decision-systems-in-practice'),
        }}
      />

      <IndexedStepSequence
        id="current-state"
        steps={[
          {
            index: '01',
            label: 'Observe',
            title: 'Start from observed behavior, not stated intent',
            lead: [
              'Organizations often have process documentation, reporting layers, meeting routines, governance roles, and strong internal opinions about how decisions are supposed to happen.',
              'That is not the same as how they actually happen.',
            ],
          },
          {
            index: '02',
            label: 'Examine',
            lead: ['Current-state decision structure becomes visible only when you examine live behavior:'],
            items: [
              'what actually triggers the decision',
              'which inputs are really used',
              'how logic is applied in practice',
              'who actually decides',
              'which workflow is followed',
              'what action is taken',
              'whether outcomes are ever connected back to the decision',
            ],
          },
          {
            index: '03',
            label: 'Separate',
            conclusion: ['This is the difference between intended design and operating reality.'],
          },
        ]}
      />

      <FragmentedGrid
        id="structural-clarity"
        heading={<>Variability enters where structure is implicit</>}
        introRight="Once the current decision is mapped, the points of variability stop being hidden."
        items={[
          { text: 'triggers are inconsistent', column: 'left', width: 'wide' },
          { text: 'logic is interpreted differently', column: 'right', width: 'wide' },

          { text: 'inputs change by team or individual', column: 'left', indent: 'sm', width: 'wide' },
          { text: 'ownership is unclear or shared informally', column: 'right', width: 'wide' },

          { text: 'workflow changes depending on urgency or preference', column: 'left', width: 'wide' },
          { text: 'action is not predefined', column: 'right', indent: 'sm', width: 'wide' },

          {
            text: 'outcomes are not tracked back to the decision',
            column: 'left',
            indent: 'sm',
            offsetY: 'sm',
            width: 'wide',
          },
        ]}
        conclusionStrong="This is where decision inconsistency actually enters."
        conclusionSoft="Not as a vague organizational problem, but as specific structural instability inside a recurring decision."
      />

      <ConstraintStack
        id="gap-identification"
        heading="Why diagnostic is required before redesign"
        introRight="A recurring decision cannot be redesigned responsibly until its current structure is understood."
        lead="Without that baseline:"
        constraints={[
          'structural gaps stay hidden',
          'teams argue about symptoms instead of causes',
          'redesign targets the wrong layer',
          'technology or process changes get applied to an undefined decision',
          'inconsistency is reinforced rather than removed',
        ]}
        bottomBody={[
          'The diagnostic is required because the current decision structure is distributed across people, systems, data, routines, and judgment.',
          'It is rarely documented as one visible system.',
        ]}
        conclusion="Before anything is improved, it must first be externalized and assessed clearly."
      />
    </>
  );
}
