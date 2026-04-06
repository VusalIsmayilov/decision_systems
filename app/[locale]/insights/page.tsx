import Link from 'next/link';
import InsightTopicDetail from '@/components/InsightTopicDetail';
import SectionWrapper from '@/components/SectionWrapper';
import { withLocale, type Locale } from '@/lib/i18n';
import {
  INSIGHTS_TOPIC_OBSERVED_GOVERNANCE_WITHOUT_CONTROL,
  INSIGHTS_TOPIC_OBSERVED_AI_OUTSIDE_SYSTEM,
  INSIGHTS_TOPIC_OBSERVED_DATA_FRAGMENTATION,
  INSIGHTS_TOPIC_OBSERVED_DECISION_INCONSISTENCY,
  INSIGHTS_TOPIC_OBSERVED_DIVERGENT_INTERPRETATION,
  INSIGHTS_TOPIC_OBSERVED_LOSS_OF_PRIORITIZATION,
  INSIGHTS_TOPIC_OBSERVED_REPORTING_DECISION_GAP,
  INSIGHTS_TOPIC_CONTROL_NOT_ENFORCEABLE_ACROSS_FUNCTIONS,
  INSIGHTS_TOPIC_CONTROL_MECHANISMS_OWNERSHIP_UNCLEAR,
  INSIGHTS_TOPIC_AI_FRAGMENTED_DECISION_SYSTEM,
  INSIGHTS_TOPIC_DECISION_CONSISTENCY_SHARED_DATA,
  INSIGHTS_TOPIC_PARALLEL_SYSTEMS_STRUCTURALLY_CONFLICTING_OUTCOMES,
  INSIGHTS_TOPIC_DATA_FLOWS_DECISION_CONSISTENCY,
  INSIGHTS_TOPIC_DATA_FRAGMENTATION_SYSTEM_COHERENCE,
  INSIGHTS_TOPIC_DIVERGENT_INTERPRETATION_SHARED_DATA,
  INSIGHTS_TOPIC_INTEGRATION_WITHOUT_ALIGNMENT_FRAGMENTATION,
  INSIGHTS_TOPIC_PARALLEL_SYSTEMS_CONFLICTING_OUTPUTS,
  INSIGHTS_TOPIC_TECHNICAL_STRUCTURE_SYSTEM_CONTROL,
  INSIGHTS_TOPIC_DECISION_REPORTING_SYSTEMS_SEPARATE,
  INSIGHTS_TOPIC_DELIVERY_DIVERGES_TEAMS_TIMELINES,
  INSIGHTS_TOPIC_EXECUTION_EXPOSES_STRUCTURAL_INCONSISTENCY,
  INSIGHTS_TOPIC_EXECUTION_WITHOUT_ALIGNMENT,
  INSIGHTS_TOPIC_INITIATIVES_WITHOUT_COORDINATION,
  INSIGHTS_TOPIC_AI_INITIATIVES_DEFINED_OWNERSHIP,
  INSIGHTS_TOPIC_TRANSFORMATION_CONTROL_LAYER_INTEGRITY,
  INSIGHTS_TOPIC_FORMAL_STRUCTURES_DECISIONS_MADE,
  INSIGHTS_TOPICS_BY_SLUG,
  INSIGHTS_TOPIC_DECISION_AUTHORITY_DIVERGENCE,
  INSIGHTS_TOPIC_DECISION_INCONSISTENCY_LEADERSHIP_STRUCTURE,
  INSIGHTS_TOPIC_DISTRIBUTED_OWNERSHIP_ACCOUNTABILITY,
  INSIGHTS_TOPIC_DIRECTION_WITHOUT_ENFORCEMENT,
  INSIGHTS_TOPIC_GOVERNANCE_WITHOUT_ENFORCEMENT_PRESSURE,
  INSIGHTS_TOPIC_LEADERSHIP_ALIGNMENT_SHARED_SYSTEM,
  INSIGHTS_TOPIC_PRIORITIES_SHIFT_WITHOUT_CONTROL,
  INSIGHTS_TOPIC_OWNERSHIP_DECISIONS_FORM,
  INSIGHTS_TOPIC_SITUATION_SCALING_EXPOSES_INCONSISTENCY,
  INSIGHTS_TOPIC_SITUATION_AI_INITIATIVES_STALL,
  INSIGHTS_TOPIC_SITUATION_CONFLICTING_REPORTS_INCREASE,
  INSIGHTS_TOPIC_SITUATION_LEADERSHIP_MISALIGNMENT_APPEARS,
  INSIGHTS_TOPIC_SITUATION_EXTERNAL_PRESSURE_REVEALS_GAPS,
  INSIGHTS_TOPIC_SITUATION_DECISION_PRESSURE_EXPOSES_LACK_OF_CONTROL,
} from '@/lib/insights-topic-data';

export const metadata = {
  title: 'Insights',
};

// Ensure query-string driven rendering works (no static optimization)
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const SYSTEM_LAYERS = [
  { id: 'insights-layer-executive', title: 'Executive / Leadership' },
  { id: 'insights-layer-operating', title: 'Operating Model / Control' },
  { id: 'insights-layer-transformation', title: 'Transformation / Execution' },
  { id: 'insights-layer-architecture', title: 'Architecture (Supporting)' },
] as const;

const OBSERVED_ISSUES = [
  'Decision inconsistency',
  'Data fragmentation',
  'Reporting vs decision gap',
  'Divergent interpretation',
  'Loss of prioritization',
  'AI outside system',
  'Governance without control',
] as const;

const SITUATIONS = [
  'Scaling exposes inconsistency',
  'AI initiatives stall',
  'Conflicting reports increase',
  'Leadership misalignment appears',
  'External pressure reveals gaps',
  'Decision pressure exposes lack of control',
] as const;

/** Primary featured insight (full width) */
const FEATURED_PRIMARY = {
  id: 'featured-3',
  title: 'Governance without enforcement does not hold under pressure',
  preview: 'Governance does not sustain decision control without enforceable ownership.',
} as const;

/** Compressed grid — Block A (2) + Block B (30% column) */
const SELECTED_BLOCK_A = [
  {
    id: 'featured-1',
    title: 'Decision consistency does not emerge from shared data',
  },
  {
    id: 'featured-2',
    title: 'Parallel systems produce structurally conflicting outcomes',
  },
] as const;

const SELECTED_BLOCK_B = {
  id: 'featured-4',
  title: 'AI cannot operate within a fragmented decision system',
} as const;

/** Home rhythm: headings + labels bold, body normal + tight leading, nav links semibold only */
const viewInsightCue =
  'text-[16px] font-semibold leading-[1.45] text-[#2B5CE6] transition-colors group-hover:text-[#1E4AC4] max-sm:text-[15px]';
const sectionKicker =
  'text-[10px] font-bold uppercase leading-[1.3] tracking-[0.11em] text-[#5A6478]';
const bodyTight =
  'text-[17px] font-normal leading-[1.48] text-[#0A1628] max-sm:text-[16px]';
const entryListLink =
  'block min-h-11 py-3 text-left text-[15px] font-normal leading-[1.48] text-[#0A1628] transition-colors hover:text-[#2B5CE6] max-sm:text-[14px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2B5CE6]';
const sectionNavLink =
  'inline-flex min-h-11 items-center text-[16px] font-semibold leading-[1.45] text-[#2B5CE6] transition-colors hover:text-[#1E4AC4] max-sm:text-[15px]';
const OBSERVED_ISSUE_DECISION_INCONSISTENCY = 'Decision inconsistency';
const OBSERVED_ISSUE_DATA_FRAGMENTATION = 'Data fragmentation';
const OBSERVED_ISSUE_REPORTING_DECISION_GAP = 'Reporting vs decision gap';
const OBSERVED_ISSUE_DIVERGENT_INTERPRETATION = 'Divergent interpretation';
const OBSERVED_ISSUE_LOSS_OF_PRIORITIZATION = 'Loss of prioritization';
const OBSERVED_ISSUE_AI_OUTSIDE_SYSTEM = 'AI outside system';
const OBSERVED_ISSUE_GOVERNANCE_WITHOUT_CONTROL = 'Governance without control';
const SITUATION_SCALING_EXPOSES_INCONSISTENCY = 'Scaling exposes inconsistency';
const SITUATION_AI_INITIATIVES_STALL = 'AI initiatives stall';
const SITUATION_CONFLICTING_REPORTS_INCREASE = 'Conflicting reports increase';
const SITUATION_LEADERSHIP_MISALIGNMENT_APPEARS = 'Leadership misalignment appears';
const SITUATION_EXTERNAL_PRESSURE_REVEALS_GAPS = 'External pressure reveals gaps';
const SITUATION_DECISION_PRESSURE_EXPOSES_LACK_OF_CONTROL =
  'Decision pressure exposes lack of control';

const SITUATION_TOPIC_SLUG_BY_LABEL: Record<string, string> = {
  [SITUATION_SCALING_EXPOSES_INCONSISTENCY]:
    INSIGHTS_TOPIC_SITUATION_SCALING_EXPOSES_INCONSISTENCY.slug,
  [SITUATION_AI_INITIATIVES_STALL]: INSIGHTS_TOPIC_SITUATION_AI_INITIATIVES_STALL.slug,
  [SITUATION_CONFLICTING_REPORTS_INCREASE]:
    INSIGHTS_TOPIC_SITUATION_CONFLICTING_REPORTS_INCREASE.slug,
  [SITUATION_LEADERSHIP_MISALIGNMENT_APPEARS]:
    INSIGHTS_TOPIC_SITUATION_LEADERSHIP_MISALIGNMENT_APPEARS.slug,
  [SITUATION_EXTERNAL_PRESSURE_REVEALS_GAPS]:
    INSIGHTS_TOPIC_SITUATION_EXTERNAL_PRESSURE_REVEALS_GAPS.slug,
  [SITUATION_DECISION_PRESSURE_EXPOSES_LACK_OF_CONTROL]:
    INSIGHTS_TOPIC_SITUATION_DECISION_PRESSURE_EXPOSES_LACK_OF_CONTROL.slug,
};

const ALL_BY_LAYER = [
  {
    id: 'insights-layer-executive',
    title: 'Executive / Leadership',
    bullets: [
      'Ownership determines how decisions form',
      'Decision authority without system ownership creates divergence',
      'Direction without enforcement does not hold',
      'Priorities shift without control',
      'Leadership alignment fails without a shared system',
      'Decision inconsistency is a leadership structure issue',
    ],
  },
  {
    id: 'insights-layer-operating',
    title: 'Operating Model / Control',
    bullets: [
      'Governance without enforcement does not hold under pressure',
      'Distributed ownership prevents accountability',
      'Control mechanisms fail when ownership is unclear',
      'Decision systems and reporting systems operate separately',
      'Formal structures do not determine how decisions are made',
      'Control is not enforceable across functions',
    ],
  },
  {
    id: 'insights-layer-transformation',
    title: 'Transformation / Execution',
    bullets: [
      'Execution without alignment does not converge',
      'Initiatives progress without system coordination',
      'Delivery diverges across teams and timelines',
      'Execution exposes structural inconsistency',
      'Transformation fails without control layer integrity',
      'AI initiatives stall without defined ownership',
    ],
  },
  {
    id: 'insights-layer-architecture',
    title: 'Architecture (Supporting)',
    bullets: [
      'Data fragmentation breaks system coherence',
      'Data flows determine decision consistency',
      'Integration without alignment reinforces fragmentation',
      'Divergent interpretation of shared data',
      'Parallel systems produce conflicting outputs',
      'Technical structure does not ensure system control',
    ],
  },
] as const;

const ALL_INSIGHTS_PRIMARY = ALL_BY_LAYER[0];
const ALL_INSIGHTS_OPERATING = ALL_BY_LAYER[1];
const ALL_INSIGHTS_TRANSFORMATION = ALL_BY_LAYER[2];
const ALL_INSIGHTS_ARCHITECTURE = ALL_BY_LAYER[3];
const EXECUTIVE_DECISION_AUTHORITY_TOPIC_TITLE =
  'Decision authority without system ownership creates divergence';
const EXECUTIVE_DIRECTION_WITHOUT_ENFORCEMENT_TOPIC_TITLE =
  'Direction without enforcement does not hold';
const EXECUTIVE_PRIORITIES_SHIFT_TOPIC_TITLE = 'Priorities shift without control';
const EXECUTIVE_LEADERSHIP_ALIGNMENT_TOPIC_TITLE =
  'Leadership alignment fails without a shared system';
const EXECUTIVE_DECISION_INCONSISTENCY_TOPIC_TITLE =
  'Decision inconsistency is a leadership structure issue';
const OPERATING_GOVERNANCE_ENFORCEMENT_TOPIC_TITLE =
  'Governance without enforcement does not hold under pressure';
const OPERATING_DISTRIBUTED_OWNERSHIP_TOPIC_TITLE =
  'Distributed ownership prevents accountability';
const OPERATING_CONTROL_MECHANISMS_TOPIC_TITLE =
  'Control mechanisms fail when ownership is unclear';
const OPERATING_DECISION_REPORTING_SEPARATE_TOPIC_TITLE =
  'Decision systems and reporting systems operate separately';
const OPERATING_FORMAL_STRUCTURES_TOPIC_TITLE =
  'Formal structures do not determine how decisions are made';
const OPERATING_CONTROL_NOT_ENFORCEABLE_TOPIC_TITLE =
  'Control is not enforceable across functions';
const TRANSFORMATION_EXECUTION_WITHOUT_ALIGNMENT_TOPIC_TITLE =
  'Execution without alignment does not converge';
const TRANSFORMATION_INITIATIVES_WITHOUT_COORDINATION_TOPIC_TITLE =
  'Initiatives progress without system coordination';
const TRANSFORMATION_DELIVERY_DIVERGES_TOPIC_TITLE =
  'Delivery diverges across teams and timelines';
const TRANSFORMATION_EXECUTION_EXPOSES_INCONSISTENCY_TOPIC_TITLE =
  'Execution exposes structural inconsistency';
const TRANSFORMATION_CONTROL_LAYER_INTEGRITY_TOPIC_TITLE =
  'Transformation fails without control layer integrity';
const TRANSFORMATION_AI_INITIATIVES_TOPIC_TITLE =
  'AI initiatives stall without defined ownership';
const ARCHITECTURE_DATA_FRAGMENTATION_TOPIC_TITLE =
  'Data fragmentation breaks system coherence';
const SELECTED_DECISION_CONSISTENCY_TOPIC_TITLE =
  'Decision consistency does not emerge from shared data';
const SELECTED_PARALLEL_SYSTEMS_TOPIC_TITLE =
  'Parallel systems produce structurally conflicting outcomes';
const SELECTED_AI_FRAGMENTED_SYSTEM_TOPIC_TITLE =
  'AI cannot operate within a fragmented decision system';
const ARCHITECTURE_DATA_FLOWS_TOPIC_TITLE =
  'Data flows determine decision consistency';
const ARCHITECTURE_INTEGRATION_WITHOUT_ALIGNMENT_TOPIC_TITLE =
  'Integration without alignment reinforces fragmentation';
const ARCHITECTURE_DIVERGENT_INTERPRETATION_TOPIC_TITLE =
  'Divergent interpretation of shared data';
const ARCHITECTURE_PARALLEL_SYSTEMS_TOPIC_TITLE =
  'Parallel systems produce conflicting outputs';
const ARCHITECTURE_TECHNICAL_STRUCTURE_TOPIC_TITLE =
  'Technical structure does not ensure system control';

const allInsightItemLinkPrimary =
  'block w-full min-h-11 py-2.5 text-left text-[16px] font-normal leading-[1.48] text-[#0A1628] transition-colors hover:text-[#2B5CE6] max-sm:text-[15px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2B5CE6]';
const allInsightItemLinkSecondary =
  'block w-full min-h-11 py-2.5 text-left text-[15px] font-normal leading-[1.48] text-[#0A1628] transition-colors hover:text-[#2B5CE6] max-sm:text-[14px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2B5CE6]';

export default async function InsightsPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams?: Promise<{ topic?: string | string[] }>;
}) {
  const { locale: loc } = await params;
  const locale = loc as Locale;
  const lp = (path: string) => withLocale(locale, path);
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const activeTopicSlug = Array.isArray(resolvedSearchParams?.topic)
    ? resolvedSearchParams?.topic[0]
    : resolvedSearchParams?.topic;

  if (activeTopicSlug) {
    const topic = INSIGHTS_TOPICS_BY_SLUG[activeTopicSlug];
    if (topic) {
      return <InsightTopicDetail topic={topic} locale={locale} />;
    }
  }

  return (
    <>
      {/* Section 1: Hero — Definition (Positioning) — Navy */}
      <SectionWrapper bg="navy">
        <div className="mx-auto w-full max-w-[1040px]">
          <p className="mb-8 text-[10px] font-bold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(194,209,232,0.88)]">
            Insights
          </p>

          {/* ENTRY — asymmetric split 40/60 */}
          <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] md:gap-x-12 md:gap-y-0 lg:gap-x-14">
            {/* LEFT — contrast anchor */}
            <div className="max-w-[380px]">
              <p className="text-[15px] font-normal max-sm:text-[14px] leading-[1.48] text-[rgba(194,209,232,0.92)]">
                When ownership is singular, the system operates as an integrated whole, and decisions form within a defined structure.
              </p>
              <p className="mt-5 text-[15px] font-normal max-sm:text-[14px] leading-[1.48] text-[rgba(194,209,232,0.92)]">
                When ownership is distributed, the system breaks into disconnected parts, and decisions form without consistent control.
              </p>
            </div>

            {/* RIGHT — dominant anchored block */}
            <div className="md:border-l md:border-[rgba(255,255,255,0.12)] md:pl-10 lg:pl-12">
              <h1 className="max-w-[760px] text-[46px] font-bold leading-[1.03] tracking-[-0.03em] text-white max-md:text-[38px] max-sm:text-[31px]">
                Control over the data and AI function is a distinct executive position.
              </h1>

              {/* PROCESSING — compressed reinforcement */}
              <div className="mt-10 flex max-w-[700px] flex-col gap-3 text-[16px] font-normal max-sm:text-[15px] leading-[1.48] text-[rgba(194,209,232,0.93)]">
                <p>This is not a matter of maturity or scale.</p>
                <p>It is a structural distinction.</p>
                <p>It determines whether the function operates as a controlled system—or remains fragmented activity.</p>
              </div>
            </div>
          </div>

          {/* EXIT / TRANSITION — forward tension */}
          <div className="mt-12 flex justify-end border-t border-[rgba(255,255,255,0.12)] pt-10">
            <p className="max-w-[780px] text-right text-[19px] max-sm:text-[16px] font-bold leading-[1.4] tracking-[-0.01em] text-white">
              These insights examine that distinction at the level of executive ownership and system integrity.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 2: Entry points — Home system: 65/35 split, convergence → Selected insights */}
      <SectionWrapper
        bg="white"
        className="border-t border-[rgba(10,22,40,0.08)]"
        id="entry-final-system"
      >
        <div className="mx-auto w-full max-w-[1040px]">
          <p className={`mb-6 ${sectionKicker}`}>
            Entry points
          </p>

          {/* Control — section scan anchor */}
          <h2 className="max-w-[720px] text-[30px] font-bold leading-[1.12] tracking-[-0.015em] text-[#0A1628] max-sm:text-[24px]">
            Enter the system
          </h2>

          {/* Entry zone (65%) | Processing zone (35%) */}
          <div className="mt-9 grid grid-cols-1 items-start gap-12 border-t border-[rgba(10,22,40,0.08)] pt-9 md:mt-10 md:grid-cols-[minmax(0,13fr)_minmax(0,7fr)] md:gap-x-14 md:gap-y-0 md:pt-10 lg:gap-x-16">
            {/* ENTRY ZONE — primary path */}
            <div className="order-1 min-w-0 md:order-1">
              <p className={`mb-8 ${sectionKicker}`}>
                Start with system layer
              </p>
              <nav aria-label="By system layer" className="flex max-w-[560px] flex-col gap-1">
                {SYSTEM_LAYERS.map((layer) => (
                  <Link
                    key={layer.id}
                    href={`#${layer.id}`}
                    className="block min-h-11 py-3 text-left text-[22px] font-bold leading-[1.32] tracking-[-0.015em] text-[#0A1628] transition-colors hover:text-[#2B5CE6] max-sm:py-3 max-sm:text-[19px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2B5CE6]"
                  >
                    {layer.title}
                  </Link>
                ))}
              </nav>
            </div>

            {/* PROCESSING ZONE — modular groups (Home gray-column divider) */}
            <div className="order-2 flex min-w-0 flex-col gap-12 md:order-2 md:border-l md:border-[rgba(0,0,0,0.06)] md:pl-10 lg:pl-12">
              <div>
                <div className="border-t border-b border-[rgba(10,22,40,0.08)] py-3">
                  <p className={sectionKicker}>
                    Observed issue
                  </p>
                </div>
                <nav aria-label="By observed issue" className="mt-5 flex flex-col gap-0">
                  {OBSERVED_ISSUES.map((issue) => (
                    <Link
                      key={issue}
                      href={
                        issue === OBSERVED_ISSUE_DECISION_INCONSISTENCY
                          ? lp(`/insights?topic=${INSIGHTS_TOPIC_OBSERVED_DECISION_INCONSISTENCY.slug}`)
                          : issue === OBSERVED_ISSUE_DATA_FRAGMENTATION
                            ? lp(`/insights?topic=${INSIGHTS_TOPIC_OBSERVED_DATA_FRAGMENTATION.slug}`)
                            : issue === OBSERVED_ISSUE_REPORTING_DECISION_GAP
                              ? lp(`/insights?topic=${INSIGHTS_TOPIC_OBSERVED_REPORTING_DECISION_GAP.slug}`)
                            : issue === OBSERVED_ISSUE_DIVERGENT_INTERPRETATION
                              ? lp(`/insights?topic=${INSIGHTS_TOPIC_OBSERVED_DIVERGENT_INTERPRETATION.slug}`)
                            : issue === OBSERVED_ISSUE_LOSS_OF_PRIORITIZATION
                              ? lp(`/insights?topic=${INSIGHTS_TOPIC_OBSERVED_LOSS_OF_PRIORITIZATION.slug}`)
                            : issue === OBSERVED_ISSUE_AI_OUTSIDE_SYSTEM
                              ? lp(`/insights?topic=${INSIGHTS_TOPIC_OBSERVED_AI_OUTSIDE_SYSTEM.slug}`)
                            : issue === OBSERVED_ISSUE_GOVERNANCE_WITHOUT_CONTROL
                              ? lp(`/insights?topic=${INSIGHTS_TOPIC_OBSERVED_GOVERNANCE_WITHOUT_CONTROL.slug}`)
                          : '#all-insights-final'
                      }
                      className={entryListLink}
                    >
                      {issue}
                    </Link>
                  ))}
                </nav>
              </div>

              <div>
                <div className="border-t border-b border-[rgba(10,22,40,0.08)] py-3">
                  <p className={sectionKicker}>
                    Situation
                  </p>
                </div>
                <nav aria-label="By situation" className="mt-5 flex flex-col gap-0">
                  {SITUATIONS.map((line) => (
                    <Link
                      key={line}
                      href={
                        SITUATION_TOPIC_SLUG_BY_LABEL[line]
                          ? lp(`/insights?topic=${SITUATION_TOPIC_SLUG_BY_LABEL[line]}`)
                          : '#selected-insights-final'
                      }
                      className={entryListLink}
                    >
                      {line}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Exit / transition — implicit convergence (Home §5 link pattern) */}
          <div className="mt-10 border-t border-[rgba(10,22,40,0.08)] pt-9 md:mt-12 md:flex md:justify-end md:pt-10">
            <Link href="#selected-insights-final" className={sectionNavLink}>
              Selected insights →
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 3: Selected insights — 70/30 evidence block + compressed 2+1 (Home gray system) */}
      <SectionWrapper
        bg="gray"
        className="border-t border-[rgba(10,22,40,0.08)]"
        id="selected-insights-final"
      >
        <div className="mx-auto w-full max-w-[1040px]">
          {/* Inner column: Home-style reading width, left-aligned to match Entry / hero shell */}
          <div className="w-full max-w-[920px]">
            <h2 className={`mb-6 ${sectionKicker}`}>
              Selected insights
            </h2>

          {/* 70% entry + primary | 30% offset block B */}
          <div className="mt-9 grid grid-cols-1 items-start gap-12 border-t border-[rgba(10,22,40,0.08)] pt-9 md:mt-10 md:grid-cols-[minmax(0,7fr)_minmax(0,3fr)] md:gap-x-10 md:gap-y-0 md:pt-10 lg:gap-x-12">
            {/* ENTRY ZONE (~70%) — primary + Block A as one subtle unit */}
            <div className="order-1 min-w-0 border border-[rgba(10,22,40,0.08)] px-5 py-7 md:px-8 md:py-8">
              <Link
                href={lp(`/insights?topic=${INSIGHTS_TOPIC_GOVERNANCE_WITHOUT_ENFORCEMENT_PRESSURE.slug}`)}
                id={FEATURED_PRIMARY.id}
                className="group block max-w-[640px] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2B5CE6]"
              >
                <span className="block text-[32px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0A1628] transition-colors group-hover:text-[#2B5CE6] max-md:text-[28px] max-sm:text-[24px]">
                  {FEATURED_PRIMARY.title}
                </span>
                <span className={`mt-5 block max-sm:mt-4 ${bodyTight}`}>
                  {FEATURED_PRIMARY.preview}
                </span>
                <span className={`mt-6 inline-block ${viewInsightCue}`}>View Insight →</span>
              </Link>

              {/* Block A — tight continuation inside same unit (single rule band) */}
              <div className="mt-6 md:mt-7">
                <div className="border-t border-b border-[rgba(10,22,40,0.08)] py-3 md:py-3.5">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-5 md:gap-x-8">
                    {SELECTED_BLOCK_A.map((item) => {
                      const fallbackHref = lp(`/insights#${item.id}`);
                      const href =
                        item.title === SELECTED_DECISION_CONSISTENCY_TOPIC_TITLE
                          ? lp(`/insights?topic=${INSIGHTS_TOPIC_DECISION_CONSISTENCY_SHARED_DATA.slug}`)
                          : item.title === SELECTED_PARALLEL_SYSTEMS_TOPIC_TITLE
                            ? lp(`/insights?topic=${INSIGHTS_TOPIC_PARALLEL_SYSTEMS_STRUCTURALLY_CONFLICTING_OUTCOMES.slug}`)
                            : fallbackHref;

                      return (
                      <Link
                        key={item.id}
                        href={href}
                        id={item.id}
                        className="group block min-w-0 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2B5CE6]"
                      >
                        <span className="block text-[15px] font-bold leading-[1.38] tracking-[-0.01em] text-[#0A1628] transition-colors group-hover:text-[#2B5CE6] max-sm:text-[14px]">
                          {item.title}
                        </span>
                        <span className={`mt-3.5 inline-block ${viewInsightCue}`}>View Insight →</span>
                      </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* PROCESSING ZONE — Block B (30% column, modular) */}
            <div className="order-2 min-w-0 md:border-l md:border-[rgba(0,0,0,0.06)] md:pl-8 lg:pl-10">
              <Link
                href={
                  SELECTED_BLOCK_B.title === SELECTED_AI_FRAGMENTED_SYSTEM_TOPIC_TITLE
                    ? lp(`/insights?topic=${INSIGHTS_TOPIC_AI_FRAGMENTED_DECISION_SYSTEM.slug}`)
                    : lp(`/insights#${SELECTED_BLOCK_B.id}`)
                }
                id={SELECTED_BLOCK_B.id}
                className="group block text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2B5CE6]"
              >
                <div className="border-t border-b border-[rgba(10,22,40,0.08)] py-4">
                  <span className="block text-[15px] font-bold leading-[1.38] tracking-[-0.01em] text-[#0A1628] transition-colors group-hover:text-[#2B5CE6] max-sm:text-[14px]">
                    {SELECTED_BLOCK_B.title}
                  </span>
                  <span className={`mt-5 inline-block ${viewInsightCue}`}>View Insight →</span>
                </div>
              </Link>
            </div>
          </div>

          {/* Exit — forward into All insights (Home §5 link pattern) */}
          <div className="mt-10 border-t border-[rgba(10,22,40,0.08)] pt-9 md:mt-12 md:flex md:justify-end md:pt-10">
            <Link href="#all-insights-final" className={sectionNavLink}>
              All insights →
            </Link>
          </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 4: All insights — indexed modular grid (2+2), Home white system */}
      <SectionWrapper
        bg="white"
        className="border-t border-[rgba(10,22,40,0.08)]"
        id="all-insights-final"
      >
        <div className="mx-auto w-full max-w-[1040px]">
          <div className="w-full max-w-[920px]">
            <h2 className={`mb-6 ${sectionKicker}`}>
              All insights
            </h2>

          {/* ENTRY — dominant primary layer (top-left block) */}
          <div className="mt-9 border-t border-[rgba(10,22,40,0.08)] pt-9 md:mt-10 md:pt-10">
            <div
              id={ALL_INSIGHTS_PRIMARY.id}
              className="scroll-mt-[5.5rem] max-w-[640px] border border-[rgba(10,22,40,0.08)] px-7 py-8 md:px-9 md:py-10"
            >
              <h3 className="text-[26px] font-bold leading-[1.2] tracking-[-0.015em] text-[#0A1628] max-sm:text-[22px]">
                {ALL_INSIGHTS_PRIMARY.title}
              </h3>
              <nav aria-label={ALL_INSIGHTS_PRIMARY.title} className="mt-5 flex flex-col md:mt-6">
                {ALL_INSIGHTS_PRIMARY.bullets.map((b, i) => {
                  const itemId = `${ALL_INSIGHTS_PRIMARY.id}-item-${i}`;
                  const href = i === 0
                    ? lp(`/insights?topic=${INSIGHTS_TOPIC_OWNERSHIP_DECISIONS_FORM.slug}`)
                    : b === EXECUTIVE_DECISION_AUTHORITY_TOPIC_TITLE
                      ? lp(`/insights?topic=${INSIGHTS_TOPIC_DECISION_AUTHORITY_DIVERGENCE.slug}`)
                      : b === EXECUTIVE_DIRECTION_WITHOUT_ENFORCEMENT_TOPIC_TITLE
                        ? lp(`/insights?topic=${INSIGHTS_TOPIC_DIRECTION_WITHOUT_ENFORCEMENT.slug}`)
                        : b === EXECUTIVE_PRIORITIES_SHIFT_TOPIC_TITLE
                          ? lp(`/insights?topic=${INSIGHTS_TOPIC_PRIORITIES_SHIFT_WITHOUT_CONTROL.slug}`)
                          : b === EXECUTIVE_LEADERSHIP_ALIGNMENT_TOPIC_TITLE
                            ? lp(`/insights?topic=${INSIGHTS_TOPIC_LEADERSHIP_ALIGNMENT_SHARED_SYSTEM.slug}`)
                            : b === EXECUTIVE_DECISION_INCONSISTENCY_TOPIC_TITLE
                              ? lp(`/insights?topic=${INSIGHTS_TOPIC_DECISION_INCONSISTENCY_LEADERSHIP_STRUCTURE.slug}`)
                      : `#${itemId}`;
                  return (
                    <Link
                      key={b}
                      id={itemId}
                      href={href}
                      className={allInsightItemLinkPrimary}
                    >
                      {b}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* PROCESSING — two-column modular row (Operating | Transformation) */}
          <div className="mt-16 border-t border-[rgba(10,22,40,0.12)] pt-12 md:mt-20 md:pt-16">
            <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-x-10 md:gap-y-0 lg:gap-x-12">
              <div id={ALL_INSIGHTS_OPERATING.id} className="scroll-mt-[5.5rem] min-w-0 md:max-w-[400px]">
                <div className="border-t border-b border-[rgba(10,22,40,0.08)] py-2.5">
                  <h3 className="text-[17px] font-bold leading-[1.3] tracking-[-0.01em] text-[#0A1628] max-sm:text-[16px]">
                    {ALL_INSIGHTS_OPERATING.title}
                  </h3>
                </div>
                <nav aria-label={ALL_INSIGHTS_OPERATING.title} className="mt-4 flex flex-col">
                  {ALL_INSIGHTS_OPERATING.bullets.map((b, i) => {
                    const itemId = `${ALL_INSIGHTS_OPERATING.id}-item-${i}`;
                    const href =
                      b === OPERATING_GOVERNANCE_ENFORCEMENT_TOPIC_TITLE
                        ? lp(`/insights?topic=${INSIGHTS_TOPIC_GOVERNANCE_WITHOUT_ENFORCEMENT_PRESSURE.slug}`)
                        : b === OPERATING_DISTRIBUTED_OWNERSHIP_TOPIC_TITLE
                          ? lp(`/insights?topic=${INSIGHTS_TOPIC_DISTRIBUTED_OWNERSHIP_ACCOUNTABILITY.slug}`)
                          : b === OPERATING_CONTROL_MECHANISMS_TOPIC_TITLE
                            ? lp(`/insights?topic=${INSIGHTS_TOPIC_CONTROL_MECHANISMS_OWNERSHIP_UNCLEAR.slug}`)
                            : b === OPERATING_DECISION_REPORTING_SEPARATE_TOPIC_TITLE
                              ? lp(`/insights?topic=${INSIGHTS_TOPIC_DECISION_REPORTING_SYSTEMS_SEPARATE.slug}`)
                              : b === OPERATING_FORMAL_STRUCTURES_TOPIC_TITLE
                                ? lp(`/insights?topic=${INSIGHTS_TOPIC_FORMAL_STRUCTURES_DECISIONS_MADE.slug}`)
                                : b === OPERATING_CONTROL_NOT_ENFORCEABLE_TOPIC_TITLE
                                  ? lp(`/insights?topic=${INSIGHTS_TOPIC_CONTROL_NOT_ENFORCEABLE_ACROSS_FUNCTIONS.slug}`)
                        : `#${itemId}`;
                    return (
                      <Link key={b} id={itemId} href={href} className={allInsightItemLinkSecondary}>
                        {b}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              <div
                id={ALL_INSIGHTS_TRANSFORMATION.id}
                className="scroll-mt-[5.5rem] min-w-0 md:max-w-[400px] md:border-l md:border-[rgba(0,0,0,0.06)] md:pl-8 lg:pl-10"
              >
                <div className="border-t border-b border-[rgba(10,22,40,0.08)] py-2.5">
                  <h3 className="text-[17px] font-bold leading-[1.3] tracking-[-0.01em] text-[#0A1628] max-sm:text-[16px]">
                    {ALL_INSIGHTS_TRANSFORMATION.title}
                  </h3>
                </div>
                <nav aria-label={ALL_INSIGHTS_TRANSFORMATION.title} className="mt-4 flex flex-col">
                  {ALL_INSIGHTS_TRANSFORMATION.bullets.map((b, i) => {
                    const itemId = `${ALL_INSIGHTS_TRANSFORMATION.id}-item-${i}`;
                    const href =
                      b === TRANSFORMATION_EXECUTION_WITHOUT_ALIGNMENT_TOPIC_TITLE
                        ? lp(`/insights?topic=${INSIGHTS_TOPIC_EXECUTION_WITHOUT_ALIGNMENT.slug}`)
                        : b === TRANSFORMATION_INITIATIVES_WITHOUT_COORDINATION_TOPIC_TITLE
                          ? lp(`/insights?topic=${INSIGHTS_TOPIC_INITIATIVES_WITHOUT_COORDINATION.slug}`)
                          : b === TRANSFORMATION_DELIVERY_DIVERGES_TOPIC_TITLE
                            ? lp(`/insights?topic=${INSIGHTS_TOPIC_DELIVERY_DIVERGES_TEAMS_TIMELINES.slug}`)
                            : b === TRANSFORMATION_EXECUTION_EXPOSES_INCONSISTENCY_TOPIC_TITLE
                              ? lp(`/insights?topic=${INSIGHTS_TOPIC_EXECUTION_EXPOSES_STRUCTURAL_INCONSISTENCY.slug}`)
                              : b === TRANSFORMATION_CONTROL_LAYER_INTEGRITY_TOPIC_TITLE
                                ? lp(`/insights?topic=${INSIGHTS_TOPIC_TRANSFORMATION_CONTROL_LAYER_INTEGRITY.slug}`)
                                : b === TRANSFORMATION_AI_INITIATIVES_TOPIC_TITLE
                                  ? lp(`/insights?topic=${INSIGHTS_TOPIC_AI_INITIATIVES_DEFINED_OWNERSHIP.slug}`)
                        : `#${itemId}`;
                    return (
                      <Link key={b} id={itemId} href={href} className={allInsightItemLinkSecondary}>
                        {b}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </div>
          </div>

          {/* FULL-WIDTH — Architecture (Supporting) */}
          <div className="mt-16 border-t border-[rgba(10,22,40,0.12)] pt-12 md:mt-20 md:pt-16">
            <div id={ALL_INSIGHTS_ARCHITECTURE.id} className="scroll-mt-[5.5rem]">
              <div className="border-t border-b border-[rgba(10,22,40,0.08)] py-2.5">
                <h3 className="text-[17px] font-bold leading-[1.3] tracking-[-0.01em] text-[#0A1628] max-sm:text-[16px]">
                  {ALL_INSIGHTS_ARCHITECTURE.title}
                </h3>
              </div>
              <nav aria-label={ALL_INSIGHTS_ARCHITECTURE.title} className="mt-4 flex max-w-[640px] flex-col">
                {ALL_INSIGHTS_ARCHITECTURE.bullets.map((b, i) => {
                  const itemId = `${ALL_INSIGHTS_ARCHITECTURE.id}-item-${i}`;
                  const href =
                    b === ARCHITECTURE_DATA_FRAGMENTATION_TOPIC_TITLE
                      ? lp(`/insights?topic=${INSIGHTS_TOPIC_DATA_FRAGMENTATION_SYSTEM_COHERENCE.slug}`)
                      : b === ARCHITECTURE_DATA_FLOWS_TOPIC_TITLE
                        ? lp(`/insights?topic=${INSIGHTS_TOPIC_DATA_FLOWS_DECISION_CONSISTENCY.slug}`)
                        : b === ARCHITECTURE_INTEGRATION_WITHOUT_ALIGNMENT_TOPIC_TITLE
                          ? lp(`/insights?topic=${INSIGHTS_TOPIC_INTEGRATION_WITHOUT_ALIGNMENT_FRAGMENTATION.slug}`)
                          : b === ARCHITECTURE_DIVERGENT_INTERPRETATION_TOPIC_TITLE
                            ? lp(`/insights?topic=${INSIGHTS_TOPIC_DIVERGENT_INTERPRETATION_SHARED_DATA.slug}`)
                            : b === ARCHITECTURE_PARALLEL_SYSTEMS_TOPIC_TITLE
                              ? lp(`/insights?topic=${INSIGHTS_TOPIC_PARALLEL_SYSTEMS_CONFLICTING_OUTPUTS.slug}`)
                              : b === ARCHITECTURE_TECHNICAL_STRUCTURE_TOPIC_TITLE
                                ? lp(`/insights?topic=${INSIGHTS_TOPIC_TECHNICAL_STRUCTURE_SYSTEM_CONTROL.slug}`)
                      : `#${itemId}`;
                  return (
                    <Link key={b} id={itemId} href={href} className={allInsightItemLinkSecondary}>
                      {b}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 5: CTA — transition line + single action */}
      <SectionWrapper
        bg="navy"
        className="border-t border-[rgba(255,255,255,0.08)] !py-24 md:!py-28 lg:!py-28 xl:!py-28 2xl:!py-28"
      >
        <div className="mx-auto flex w-full max-w-[720px] flex-col items-center px-4 text-center">
          <p className="text-[15px] font-normal leading-[1.48] text-[rgba(255,255,255,0.78)] max-sm:text-[14px]">
            Move from insight to system-level evaluation
          </p>
          <h2 className="mt-6 text-[32px] font-bold leading-[1.12] tracking-[-0.02em] text-white max-sm:text-[26px] md:mt-8 md:text-[40px]">
            <Link
              href={lp('/executive-data-review')}
              className="inline-flex min-h-11 max-w-full items-center justify-center px-2 text-center text-white transition-opacity hover:opacity-90 hover:underline hover:decoration-[#6B9FFF] hover:underline-offset-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6B9FFF] max-sm:text-[15px] max-sm:leading-snug"
            >
              Schedule Executive Data Review
            </Link>
          </h2>
        </div>
      </SectionWrapper>
    </>
  );
}
