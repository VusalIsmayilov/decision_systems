import HeroPrincipleStack from "@/components/HeroPrincipleStack";
import DefinitionBreakdown from "@/components/DefinitionBreakdown";
import CausalThreeZone from "@/components/CausalThreeZone";
import AsymmetricSplit from "@/components/AsymmetricSplit";
import FramedCorePeripheralContext from "@/components/FramedCorePeripheralContext";
import { withLocale, type Locale } from "@/lib/i18n";

export default async function WhyAnalyticsAiFailPage({
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
        headline={
          <>
            Analytics, dashboards, and
            <br />
            AI do not create decision
            <br />
            capability by themselves
          </>
        }
        supportLines={[
          "They provide inputs, visibility, and signals.",
          "They do not determine how recurring decisions are made, owned, and repeated.",
        ]}
        cta={{
          label: "Identify the Structural Cause",
          href: L("/decision-systems"),
        }}
      />

      <DefinitionBreakdown
        heading={
          <>
            Dashboards show
            <br />
            information. They do not
            <br />
            decide.
          </>
        }
        leftLines={[
          "A dashboard can surface performance,",
          "risk, variance, or exceptions. That does",
          "not mean it determines what action should",
          "follow.",
        ]}
        definitionLead="A dashboard does not define:"
        definitionItems={[
          "which situation requires a decision",
          "which inputs matter most",
          "what logic should be applied",
          "who is accountable for deciding",
          "what action should follow once the decision is made",
        ]}
        conclusion={[
          "That is why many dashboards become reference points instead of decision mechanisms.",
          "They are reviewed. They are discussed. Yet action still changes depending on the room, the team, or the moment.",
        ]}
      />

      <CausalThreeZone
        id="ai-ml-do-not-become-action"
        heading="AI and ML outputs do not become business action on their own"
        premise={[
          "An AI score, prediction, recommendation, or model output can improve a decision",
          "only when the decision around it is already defined.",
        ]}
        mechanism={[
          "Without that structure:",
          "model outputs are interpreted differently by different users",
          "thresholds change from case to case",
          "ownership is unclear",
          "workflows break between signal and response",
          "action becomes discretionary rather than repeatable",
        ]}
        implicationStrong={["The result is familiar: strong technical work, weak operational adoption."]}
        implicationSoft={[
          "The model exists.",
          "The decision still depends on human reconstruction each time it appears.",
        ]}
      />

      <AsymmetricSplit
        id="more-reports-do-not-remove-inconsistency"
        heading="More reports do not remove inconsistency"
        leftLines={[
          "When outcomes vary, organizations often respond by adding more reporting.",
          "More metrics. More views. More commentary. More review cycles.",
        ]}
        rightIntro={[
          "But inconsistency does not disappear because more information is available.",
          "It disappears only when the organization can answer the same decision question the same way under the same conditions.",
        ]}
        rightBody={[
          "Reports can increase visibility.",
          "They cannot replace decision logic.",
          "They cannot create accountability.",
          "They cannot stabilize action by themselves.",
        ]}
        rightConclusion={[
          "The issue is not lack of reporting.",
          "It is the gap between information and the decision that should convert it into action.",
        ]}
      />

      <FramedCorePeripheralContext
        id="missing-layer-decision-itself"
        introLine="Until that layer is explicit, the organization keeps relying on interpretation."
        transitionLine="And interpretation is where drift enters:"
        signalsLeft={["triggers are applied differently", "inputs change", "logic shifts"]}
        signalsRight={["ownership moves", "workflow fragments", "action becomes inconsistent"]}
        coreHeading="The missing layer is the decision itself"
        coreBody={[
          "Dashboards, analytics, reporting, BI, AI, ML, process, and governance all matter. None of them, on their own, define how a recurring decision should work.",
        ]}
        coreConclusion="That missing layer is the decision structure."
        bottomLines={[
          "This is why analytics and AI can be present while decision quality remains unstable.",
          "The tools are not enough because the decision itself has not been defined as a system.",
        ]}
      />
    </>
  );
}
