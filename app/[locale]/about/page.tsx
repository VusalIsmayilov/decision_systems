import AsymmetricSplit from '@/components/AsymmetricSplit';
import CausalChain from '@/components/CausalChain';
import DefinitionBreakdown from '@/components/DefinitionBreakdown';
import HeroAsymmetricSplit from '@/components/HeroAsymmetricSplit';
import { withLocale, type Locale } from '@/lib/i18n';

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
      <HeroAsymmetricSplit
        id="hero"
        headline="About"
        groupA={[
          'This work is focused on one problem: how recurring business decisions operate, why they drift, and how they can be defined as systems.',
        ]}
        groupB={[]}
        groupC={[]}
        cta={{
          label: 'Request Decision Diagnostic',
          href: L('/decision-diagnostic/intake'),
        }}
      />

      <AsymmetricSplit
        id="why-this-work-exists"
        heading="Why this work exists"
        leftLines={[]}
        rightIntro={[
          'Organizations invest heavily in data, reporting, process, governance, and increasingly AI. Yet recurring decisions still produce variable outcomes under the same conditions.',
        ]}
        rightBody={['That gap is where this work exists.']}
        rightConclusion={[
          'The issue is often not capability in the broad sense. It is that the decision layer itself has not been made explicit. Until the operating structure of recurring decisions is visible and defined, inconsistency continues to reappear through different tools, teams, and cycles.',
        ]}
      />

      <DefinitionBreakdown
        id="what-the-focus-is"
        bg="gray"
        heading="What the focus is"
        leftLines={[]}
        definitionLead="The focus is not generic advisory work."
        definitionItems={[
          'It is not broad digital transformation.',
          'It is not a general analytics offering.',
        ]}
        conclusion={[
          'The focus is structural decision work: identifying how recurring decisions actually operate, where variability enters, and how those decisions can be defined as systems.',
          'That focus sits at the point where data, operations, governance, workflow, and ownership meet business action.',
        ]}
      />

      <CausalChain
        id="why-this-perspective-is-credible"
        heading="Why this perspective is credible"
        intro={[
          'This perspective is grounded in repeated exposure to the same pattern across operating environments:',
        ]}
        evidence={[
          'the same decision produces different outcomes',
          'shared data does not create shared action',
          'ownership changes by context',
          'decisions restart every cycle instead of operating through structure',
        ]}
        transition="In these conditions, inconsistency is not an occasional management problem. It is a structural one."
        conclusion="The work therefore focuses on making recurring decisions explicit enough to assess, redesign, and govern."
      />
    </>
  );
}
