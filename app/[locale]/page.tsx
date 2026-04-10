import HeroAsymmetricSplit from '@/components/HeroAsymmetricSplit';
import CausalThreeZone from '@/components/CausalThreeZone';
import AsymmetricSplit from '@/components/AsymmetricSplit';
import LinearSequence from '@/components/LinearSequence';
import { withLocale, type Locale } from '@/lib/i18n';

export default async function HomePage({
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
        headline="Your dashboards, reports, and AI may be working. Your decisions still are not."
        groupA={[
          'Many organizations already have BI, analytics, reporting, and AI outputs in place. Yet the same business decision keeps producing different actions, different interpretations, and different outcomes.',
        ]}
        groupB={[
          'The same numbers lead to different conclusions.',
          'The same situation gets handled differently across teams.',
          'The outcome depends too much on who is involved.',
        ]}
        groupC={['That is not a reporting issue alone.', 'It is a recurring decision problem.']}
        cta={{
          label: "Understand Why Analytics and AI Still Don't Fix Decisions",
          href: L('/why-analytics-ai-fail'),
        }}
      />

      <LinearSequence
        heading={
          <>
            What this looks like in
            <br />
            practice
          </>
        }
        introTop={[
          "You do not usually experience this problem as 'decision structure.'",
          'You experience it in familiar ways:',
        ]}
        items={[
          'dashboards are reviewed, but action still varies',
          'reports explain performance, but do not determine what happens next',
          'analytics is available, but teams still disagree on response',
          'AI or ML outputs are produced, but are used inconsistently',
          'the same business condition triggers different actions in different parts of the organization',
        ]}
        conclusion={[
          'This is how recurring inconsistency appears in day-to-day operations.',
          'The tools may exist. The decision still does not operate the same way twice.',
        ]}
      />

      <CausalThreeZone
        heading={
          <>
            The same data,
            <br />
            different actions
          </>
        }
        premise={['When the same inputs produce', 'different actions, the issue is no', 'longer isolated. It is recurring.']}
        mechanism={[
          'One team escalates. Another waits.',
          'One manager treats the signal as urgent. Another treats it as noise.',
          'One weekly review leads to intervention. The next one does not.',
        ]}
        implicationStrong={['The variation is not', 'random. It repeats', 'across time, across', 'teams, and across the', 'same conditions.']}
        implicationSoft={['That is the point where', 'dashboards, reports, and', 'models stop being', 'enough to explain what is', 'happening.']}
      />

      <AsymmetricSplit
        heading={
          <>
            This is not just a tooling
            <br />
            problem
          </>
        }
        leftLines={[
          'Organizations often assume the answer is',
          'better reporting, better data quality,',
          'better dashboards, or more advanced AI.',
        ]}
        rightIntro={[
          'But when the same decision keeps drifting under the same conditions, the issue is deeper than visibility.',
        ]}
        rightBody={[
          'Data can support a decision without defining it.',
          'Reports can describe a situation without resolving it.',
          'AI can generate outputs without creating consistent action.',
        ]}
        rightConclusion={[
          'If inconsistency keeps returning, the problem is not that information is absent.',
          'The problem is that the decision itself is not operating through a stable structure.',
        ]}
      />
    </>
  );
}
