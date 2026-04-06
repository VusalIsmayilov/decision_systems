export type InsightTopicBodySection = {
  title: string;
  content: string;
};

export type InsightTopic = {
  slug: string;
  title: string;
  excerpt: string;
  supportingText?: string;
  relatedInsights?: Array<{
    title: string;
    slug: string;
  }>;
  body: {
    sections: InsightTopicBodySection[];
  };
};

export type InsightLayerId =
  | 'insights-layer-executive'
  | 'insights-layer-operating'
  | 'insights-layer-transformation'
  | 'insights-layer-architecture'
  | 'insights-entry-observed-issue'
  | 'insights-entry-situation';

export const INSIGHTS_TOPIC_OWNERSHIP_DECISIONS_FORM: InsightTopic = {
  slug: 'ownership-decisions-form',
  title: 'Ownership determines how decisions form',
  excerpt: 'Decision formation follows ownership structure, not declared direction.',
  body: {
    sections: [
      {
        title: 'Situation',
        content:
          'A system exists with defined direction and distributed decision activity. Ownership over the decision system is not singular.',
      },
      {
        title: 'Symptom',
        content:
          'Decisions form inconsistently across functions. Alignment between decisions does not hold.',
      },
      {
        title: 'Misinterpretation',
        content:
          'Inconsistency is attributed to execution gaps or lack of coordination. Direction is assumed to define how decisions form.',
      },
      {
        title: 'Mechanism',
        content:
          'Ownership defines the control point of the system. When ownership is distributed, multiple control points form in parallel. Each control point generates its own decision logic within the system structure.',
      },
      {
        title: 'Consequence',
        content:
          'Decision formation fragments into parallel structures. System-level alignment cannot exist under distributed ownership.',
      },
    ],
  },
};

export const INSIGHTS_TOPIC_DECISION_AUTHORITY_DIVERGENCE: InsightTopic = {
  slug: 'decision-authority-without-system-ownership-creates-divergence',
  title: 'Decision authority without system ownership creates divergence',
  excerpt: 'Decision authority without ownership fragments control across the system.',
  body: {
    sections: [
      {
        title: 'Situation',
        content:
          'Decision authority is assigned across functions. System ownership over decision formation is not established.',
      },
      {
        title: 'Symptom',
        content:
          'Decisions diverge across functions. Outcomes do not align within the system.',
      },
      {
        title: 'Misinterpretation',
        content:
          'Divergence is attributed to misalignment between functions. Authority distribution is assumed to ensure decision consistency.',
      },
      {
        title: 'Mechanism',
        content:
          'Decision authority enables decisions to be made. System ownership defines how decisions form and align. When authority exists without ownership, decisions are produced without a controlling system structure.',
      },
      {
        title: 'Consequence',
        content:
          'Decision logic fragments across authority points. System-level control does not exist, and divergence becomes structural.',
      },
    ],
  },
};

export const INSIGHTS_TOPIC_DIRECTION_WITHOUT_ENFORCEMENT: InsightTopic = {
  slug: 'direction-without-enforcement-does-not-hold',
  title: 'Direction without enforcement does not hold',
  excerpt: 'Direction without control does not persist within the system.',
  body: {
    sections: [
      {
        title: 'Situation',
        content:
          'Direction is defined at the system level. Enforcement through control mechanisms is not established.',
      },
      {
        title: 'Symptom',
        content:
          'Decisions and execution drift from defined direction. Alignment across the system does not sustain.',
      },
      {
        title: 'Misinterpretation',
        content:
          'Drift is attributed to weak execution or lack of discipline. Direction is assumed to be sufficient to guide the system.',
      },
      {
        title: 'Mechanism',
        content:
          'Direction defines intent. Control enforces how the system operates. Without control, direction does not constrain decision formation, and parallel structures operate independently of defined direction.',
      },
      {
        title: 'Consequence',
        content:
          'Direction loses effect within the system. Decision formation detaches from defined intent, and alignment collapses.',
      },
    ],
  },
};

export const INSIGHTS_TOPIC_PRIORITIES_SHIFT_WITHOUT_CONTROL: InsightTopic = {
  slug: 'priorities-shift-without-control',
  title: 'Priorities shift without control',
  excerpt: 'Without control, priorities do not remain stable within the system.',
  body: {
    sections: [
      {
        title: 'Situation',
        content:
          'Priorities are defined within the system. Control over decision formation is not established.',
      },
      {
        title: 'Symptom',
        content:
          'Priorities change across functions and over time. Decisions do not consistently reflect defined priorities.',
      },
      {
        title: 'Misinterpretation',
        content:
          'Priority shifts are attributed to changing conditions or new information. Reprioritization is assumed to be necessary for system responsiveness.',
      },
      {
        title: 'Mechanism',
        content:
          'Priorities require control to persist within the system. Without control, each part of the system applies its own decision logic, redefining priorities within its local structure.',
      },
      {
        title: 'Consequence',
        content:
          'Priority definition does not hold at the system level. Decision formation fragments, and stable prioritization cannot exist.',
      },
    ],
  },
};

export const INSIGHTS_TOPIC_LEADERSHIP_ALIGNMENT_SHARED_SYSTEM: InsightTopic = {
  slug: 'leadership-alignment-fails-without-a-shared-system',
  title: 'Leadership alignment fails without a shared system',
  excerpt: 'Without a shared system, leadership operates through parallel decision structures.',
  body: {
    sections: [
      {
        title: 'Situation',
        content:
          'Leadership operates across functions with defined direction. A shared system for decision formation is not established.',
      },
      {
        title: 'Symptom',
        content:
          'Leadership decisions do not align across the system. Outcomes diverge despite common direction.',
      },
      {
        title: 'Misinterpretation',
        content:
          'Misalignment is attributed to communication gaps or differing perspectives. Alignment is assumed to depend on coordination between leaders.',
      },
      {
        title: 'Mechanism',
        content:
          'A shared system defines how decisions form and align under a single control structure. Without a shared system, each leadership position operates within its own structure, generating independent decision logic.',
      },
      {
        title: 'Consequence',
        content:
          'Leadership operates through parallel decision structures. System-level alignment cannot be achieved.',
      },
    ],
  },
};

export const INSIGHTS_TOPIC_DECISION_INCONSISTENCY_LEADERSHIP_STRUCTURE: InsightTopic = {
  slug: 'decision-inconsistency-is-a-leadership-structure-issue',
  title: 'Decision inconsistency is a leadership structure issue',
  excerpt: 'Decision inconsistency originates from leadership structure, not execution variability.',
  body: {
    sections: [
      {
        title: 'Situation',
        content:
          'A system operates with defined leadership roles and active decision processes. Ownership and control over the decision system are not unified.',
      },
      {
        title: 'Symptom',
        content:
          'Decisions are inconsistent across the system. Similar conditions produce different outcomes.',
      },
      {
        title: 'Misinterpretation',
        content:
          'Inconsistency is attributed to execution variability or data differences. Stability is assumed to depend on improving execution quality.',
      },
      {
        title: 'Mechanism',
        content:
          'Leadership structure defines ownership and control of the decision system. When ownership is fragmented, multiple structures form, each producing independent decision logic.',
      },
      {
        title: 'Consequence',
        content:
          'Decision inconsistency persists as a structural condition. System-level consistency cannot exist under fragmented leadership structure.',
      },
    ],
  },
};

export const INSIGHTS_TOPIC_GOVERNANCE_WITHOUT_ENFORCEMENT_PRESSURE: InsightTopic = {
  slug: 'governance-without-enforcement-does-not-hold-under-pressure',
  title: 'Governance without enforcement does not hold under pressure',
  excerpt: 'Governance does not sustain decision control without enforceable ownership.',
  body: {
    sections: [
      {
        title: 'Situation',
        content:
          'Governance structures are defined within the system without ownership of enforcement over control.',
      },
      {
        title: 'Symptom',
        content:
          'Decisions diverge under pressure while governance structures remain unchanged.',
      },
      {
        title: 'Misinterpretation',
        content:
          'Governance is treated as sufficient to control decision formation.',
      },
      {
        title: 'Mechanism',
        content:
          'Absence of ownership over enforcement prevents governance from operating as a controlling mechanism, allowing decision structures to form outside defined control under pressure.',
      },
      {
        title: 'Consequence',
        content:
          'Governance loses authority and the system operates with uncontrolled decision inconsistency under pressure.',
      },
    ],
  },
};

export const INSIGHTS_TOPIC_DISTRIBUTED_OWNERSHIP_ACCOUNTABILITY: InsightTopic = {
  slug: 'distributed-ownership-prevents-accountability',
  title: 'Distributed ownership prevents accountability',
  excerpt: 'Accountability does not form when ownership is distributed across the system.',
  body: {
    sections: [
      {
        title: 'Situation',
        content:
          'Ownership of decisions and system control is distributed across multiple functions without a single controlling point.',
      },
      {
        title: 'Symptom',
        content:
          'Decisions are made without clear accountability while outcomes cannot be attributed to any single owner.',
      },
      {
        title: 'Misinterpretation',
        content:
          'Distribution of ownership is treated as shared responsibility that ensures accountability.',
      },
      {
        title: 'Mechanism',
        content:
          'Distributed ownership fragments control of the system, preventing a single structure from governing decision formation, which removes the conditions required for accountability to exist.',
      },
      {
        title: 'Consequence',
        content:
          'Accountability does not form and the system operates without enforceable responsibility for decisions.',
      },
    ],
  },
};

export const INSIGHTS_TOPIC_CONTROL_MECHANISMS_OWNERSHIP_UNCLEAR: InsightTopic = {
  slug: 'control-mechanisms-fail-when-ownership-is-unclear',
  title: 'Control mechanisms fail when ownership is unclear',
  excerpt: 'Control mechanisms cannot operate without defined ownership of the system.',
  body: {
    sections: [
      {
        title: 'Situation',
        content:
          'Control mechanisms are established within the system without clearly defined ownership over their operation.',
      },
      {
        title: 'Symptom',
        content:
          'Decisions bypass control mechanisms while system behavior becomes inconsistent.',
      },
      {
        title: 'Misinterpretation',
        content:
          'Control mechanisms are treated as self-operating structures independent of ownership.',
      },
      {
        title: 'Mechanism',
        content:
          'Absence of ownership over control prevents mechanisms from governing decision formation, allowing parallel system behavior outside defined control structures.',
      },
      {
        title: 'Consequence',
        content:
          'Control mechanisms lose effectiveness and the system operates without consistent decision control.',
      },
    ],
  },
};

export const INSIGHTS_TOPIC_DECISION_REPORTING_SYSTEMS_SEPARATE: InsightTopic = {
  slug: 'decision-systems-and-reporting-systems-operate-separately',
  title: 'Decision systems and reporting systems operate separately',
  excerpt: 'Separation between decision and reporting systems breaks control of the system.',
  body: {
    sections: [
      {
        title: 'Situation',
        content:
          'Decision formation and reporting operate as separate structures within the system without unified ownership.',
      },
      {
        title: 'Symptom',
        content:
          'Decisions diverge from reported outcomes while reporting does not influence decision behavior.',
      },
      {
        title: 'Misinterpretation',
        content:
          'Reporting is treated as a control mechanism over decisions.',
      },
      {
        title: 'Mechanism',
        content:
          'Separation of ownership between decision and reporting systems prevents control from governing decision formation, allowing decisions to operate independently from reported system state.',
      },
      {
        title: 'Consequence',
        content:
          'The system loses alignment between decisions and outcomes and operates without controlled decision feedback.',
      },
    ],
  },
};

export const INSIGHTS_TOPIC_FORMAL_STRUCTURES_DECISIONS_MADE: InsightTopic = {
  slug: 'formal-structures-do-not-determine-how-decisions-are-made',
  title: 'Formal structures do not determine how decisions are made',
  excerpt: 'Formal structure does not define decision formation without system control.',
  body: {
    sections: [
      {
        title: 'Situation',
        content:
          'Formal structures define roles and responsibilities within the system without ownership of decision control.',
      },
      {
        title: 'Symptom',
        content:
          'Decisions form outside formal structures while system behavior diverges from defined roles.',
      },
      {
        title: 'Misinterpretation',
        content:
          'Formal structure is treated as the mechanism that governs decision formation.',
      },
      {
        title: 'Mechanism',
        content:
          'Absence of ownership over control separates formal structure from the decision system, allowing decisions to form through parallel mechanisms not governed by defined roles.',
      },
      {
        title: 'Consequence',
        content:
          'Decisions are not determined by formal structure and the system operates through uncontrolled decision formation.',
      },
    ],
  },
};

export const INSIGHTS_TOPIC_CONTROL_NOT_ENFORCEABLE_ACROSS_FUNCTIONS: InsightTopic = {
  slug: 'control-is-not-enforceable-across-functions',
  title: 'Control is not enforceable across functions',
  excerpt: 'Control does not extend across functions without unified system ownership.',
  body: {
    sections: [
      {
        title: 'Situation',
        content:
          'Control mechanisms exist within functions without unified ownership of the system across functions.',
      },
      {
        title: 'Symptom',
        content:
          'Decisions diverge between functions while control is applied inconsistently.',
      },
      {
        title: 'Misinterpretation',
        content:
          'Control within individual functions is treated as system-level control.',
      },
      {
        title: 'Mechanism',
        content:
          'Absence of unified ownership prevents control from operating across the system, allowing each function to maintain separate decision structures outside a single controlling mechanism.',
      },
      {
        title: 'Consequence',
        content:
          'Control remains fragmented across functions and the system does not operate under consistent decision control.',
      },
    ],
  },
};

export const INSIGHTS_TOPIC_EXECUTION_WITHOUT_ALIGNMENT: InsightTopic = {
  slug: 'execution-without-alignment-does-not-converge',
  title: 'Execution without alignment does not converge',
  excerpt: 'Execution does not converge without alignment within the system.',
  body: {
    sections: [
      {
        title: 'Situation',
        content:
          'Execution progresses across the system without alignment of decisions under a unified structure.',
      },
      {
        title: 'Symptom',
        content:
          'Execution outputs diverge while coordination increases without convergence.',
      },
      {
        title: 'Misinterpretation',
        content:
          'Execution activity is treated as progress toward a shared outcome.',
      },
      {
        title: 'Mechanism',
        content:
          'Absence of alignment in the decision system prevents control from governing execution, allowing parallel decision paths to drive execution in different directions.',
      },
      {
        title: 'Consequence',
        content:
          'Execution does not converge and the system produces fragmented outcomes.',
      },
    ],
  },
};

export const INSIGHTS_TOPIC_INITIATIVES_WITHOUT_COORDINATION: InsightTopic = {
  slug: 'initiatives-progress-without-system-coordination',
  title: 'Initiatives progress without system coordination',
  excerpt: 'Initiatives advance without coordination when the system lacks unified control.',
  body: {
    sections: [
      {
        title: 'Situation',
        content:
          'Multiple initiatives operate within the system without coordinated control under shared ownership.',
      },
      {
        title: 'Symptom',
        content:
          'Initiatives progress independently while decision alignment is absent across the system.',
      },
      {
        title: 'Misinterpretation',
        content:
          'Progress of individual initiatives is treated as system-level coordination.',
      },
      {
        title: 'Mechanism',
        content:
          'Absence of ownership over system coordination prevents control from aligning decisions across initiatives, allowing each initiative to operate under separate decision logic.',
      },
      {
        title: 'Consequence',
        content:
          'The system advances without coordination and produces fragmented execution outcomes.',
      },
    ],
  },
};

export const INSIGHTS_TOPIC_DELIVERY_DIVERGES_TEAMS_TIMELINES: InsightTopic = {
  slug: 'delivery-diverges-across-teams-and-timelines',
  title: 'Delivery diverges across teams and timelines',
  excerpt: 'Delivery does not align across teams and timelines without system control.',
  body: {
    sections: [
      {
        title: 'Situation',
        content:
          'Delivery is executed across teams and timelines without unified ownership of control within the system.',
      },
      {
        title: 'Symptom',
        content:
          'Delivery outputs diverge while timelines shift without alignment.',
      },
      {
        title: 'Misinterpretation',
        content:
          'Delivery progress across teams is treated as coordinated execution.',
      },
      {
        title: 'Mechanism',
        content:
          'Absence of ownership over control allows each team to operate under separate decision structures, preventing alignment of delivery across timelines within a single system.',
      },
      {
        title: 'Consequence',
        content:
          'Delivery diverges across teams and timelines and the system does not produce consistent execution outcomes.',
      },
    ],
  },
};

export const INSIGHTS_TOPIC_EXECUTION_EXPOSES_STRUCTURAL_INCONSISTENCY: InsightTopic = {
  slug: 'execution-exposes-structural-inconsistency',
  title: 'Execution exposes structural inconsistency',
  excerpt: 'Execution reveals inconsistency when the system lacks unified control.',
  body: {
    sections: [
      {
        title: 'Situation',
        content:
          'Execution operates within the system where ownership and control are not unified across structure.',
      },
      {
        title: 'Symptom',
        content:
          'Execution outputs conflict while decision consistency does not hold under operational pressure.',
      },
      {
        title: 'Misinterpretation',
        content:
          'Execution issues are treated as isolated delivery problems.',
      },
      {
        title: 'Mechanism',
        content:
          'Absence of ownership over system control allows inconsistent decision structures to operate, which execution makes visible as outputs are produced across the system.',
      },
      {
        title: 'Consequence',
        content:
          'Structural inconsistency becomes explicit and the system cannot sustain controlled execution.',
      },
    ],
  },
};

export const INSIGHTS_TOPIC_TRANSFORMATION_CONTROL_LAYER_INTEGRITY: InsightTopic = {
  slug: 'transformation-fails-without-control-layer-integrity',
  title: 'Transformation fails without control layer integrity',
  excerpt:
    'Transformation cannot sustain without integrity of the control layer within the system.',
  body: {
    sections: [
      {
        title: 'Situation',
        content:
          'Transformation is initiated within the system where control layer ownership is not clearly defined.',
      },
      {
        title: 'Symptom',
        content:
          'Transformation activity progresses while decision consistency does not hold across the system.',
      },
      {
        title: 'Misinterpretation',
        content:
          'Transformation is treated as execution of initiatives independent of control.',
      },
      {
        title: 'Mechanism',
        content:
          'Absence of ownership over the control layer prevents the system from governing decision formation, allowing transformation activities to operate without aligned control structures.',
      },
      {
        title: 'Consequence',
        content:
          'Transformation fails to establish system-level change and the system remains fragmented.',
      },
    ],
  },
};

export const INSIGHTS_TOPIC_AI_INITIATIVES_DEFINED_OWNERSHIP: InsightTopic = {
  slug: 'ai-initiatives-stall-without-defined-ownership',
  title: 'AI initiatives stall without defined ownership',
  excerpt: 'AI initiatives do not progress without ownership of the system.',
  body: {
    sections: [
      {
        title: 'Situation',
        content:
          'AI initiatives are introduced into the system without defined ownership over decision and control.',
      },
      {
        title: 'Symptom',
        content:
          'AI initiatives do not progress while decision integration into the system remains absent.',
      },
      {
        title: 'Misinterpretation',
        content:
          'AI capability is treated as sufficient for system integration.',
      },
      {
        title: 'Mechanism',
        content:
          'Absence of ownership over decision control prevents AI from operating within the system, leaving initiatives without a governing structure for decision formation and execution alignment.',
      },
      {
        title: 'Consequence',
        content:
          'AI initiatives stall and the system does not incorporate AI into controlled decision processes.',
      },
    ],
  },
};

export const INSIGHTS_TOPIC_DATA_FRAGMENTATION_SYSTEM_COHERENCE: InsightTopic = {
  slug: 'data-fragmentation-breaks-system-coherence',
  title: 'Data fragmentation breaks system coherence',
  excerpt: 'Data fragmentation prevents the system from operating as a coherent whole.',
  body: {
    sections: [
      {
        title: 'Situation',
        content:
          'Data is distributed across multiple structures without unified ownership of the system.',
      },
      {
        title: 'Symptom',
        content:
          'Decisions diverge while data produces inconsistent outputs across the system.',
      },
      {
        title: 'Misinterpretation',
        content:
          'Data availability is treated as sufficient for decision consistency.',
      },
      {
        title: 'Mechanism',
        content:
          'Absence of ownership over data control allows fragmented structures to operate independently, preventing the system from forming a unified decision logic.',
      },
      {
        title: 'Consequence',
        content:
          'System coherence does not form and decision consistency cannot be sustained.',
      },
    ],
  },
};

export const INSIGHTS_TOPIC_DATA_FLOWS_DECISION_CONSISTENCY: InsightTopic = {
  slug: 'data-flows-determine-decision-consistency',
  title: 'Data flows determine decision consistency',
  excerpt: 'Decision consistency is defined by how data flows operate within the system.',
  body: {
    sections: [
      {
        title: 'Situation',
        content:
          'Data flows operate within the system without unified ownership of control.',
      },
      {
        title: 'Symptom',
        content:
          'Decisions vary across the system despite access to the same data.',
      },
      {
        title: 'Misinterpretation',
        content:
          'Shared data is treated as the basis for consistent decisions.',
      },
      {
        title: 'Mechanism',
        content:
          'Absence of ownership over data flow control allows data to move through separate structures, producing multiple decision paths within the system.',
      },
      {
        title: 'Consequence',
        content:
          'Decision consistency does not form and the system operates with divergent decision outcomes.',
      },
    ],
  },
};

export const INSIGHTS_TOPIC_INTEGRATION_WITHOUT_ALIGNMENT_FRAGMENTATION: InsightTopic = {
  slug: 'integration-without-alignment-reinforces-fragmentation',
  title: 'Integration without alignment reinforces fragmentation',
  excerpt:
    'Integration does not create system coherence without alignment of decisions and control.',
  body: {
    sections: [
      {
        title: 'Situation',
        content:
          'Systems are integrated within the system without alignment of decision control under unified ownership.',
      },
      {
        title: 'Symptom',
        content:
          'Integrated systems produce conflicting outputs while decision consistency does not hold.',
      },
      {
        title: 'Misinterpretation',
        content:
          'Integration is treated as sufficient to establish system coherence.',
      },
      {
        title: 'Mechanism',
        content:
          'Absence of alignment in the decision system allows integrated structures to operate under separate control, reinforcing parallel decision logic across the system.',
      },
      {
        title: 'Consequence',
        content:
          'Fragmentation is reinforced and the system does not achieve coherent decision control.',
      },
    ],
  },
};

export const INSIGHTS_TOPIC_DIVERGENT_INTERPRETATION_SHARED_DATA: InsightTopic = {
  slug: 'divergent-interpretation-of-shared-data',
  title: 'Divergent interpretation of shared data',
  excerpt: 'Shared data does not ensure consistent decisions without system control.',
  body: {
    sections: [
      {
        title: 'Situation',
        content:
          'Shared data is available across the system without unified ownership of decision control.',
      },
      {
        title: 'Symptom',
        content:
          'Decisions differ across functions while the same data is used.',
      },
      {
        title: 'Misinterpretation',
        content:
          'Shared data is treated as a mechanism for decision consistency.',
      },
      {
        title: 'Mechanism',
        content:
          'Absence of ownership over decision control allows each function to apply separate decision structures to the same data, producing divergent interpretations within the system.',
      },
      {
        title: 'Consequence',
        content:
          'Decision consistency does not form and the system operates with conflicting decision outcomes.',
      },
    ],
  },
};

export const INSIGHTS_TOPIC_PARALLEL_SYSTEMS_CONFLICTING_OUTPUTS: InsightTopic = {
  slug: 'parallel-systems-produce-conflicting-outputs',
  title: 'Parallel systems produce conflicting outputs',
  excerpt: 'Parallel systems generate conflicting outputs when control is not unified.',
  body: {
    sections: [
      {
        title: 'Situation',
        content:
          'Multiple systems operate within the environment without unified ownership of control.',
      },
      {
        title: 'Symptom',
        content:
          'Outputs conflict across systems while decisions diverge on the same conditions.',
      },
      {
        title: 'Misinterpretation',
        content:
          'Multiple systems are treated as coordinated components of a single structure.',
      },
      {
        title: 'Mechanism',
        content:
          'Absence of ownership over system control allows parallel systems to operate under separate decision structures, producing independent outputs without alignment.',
      },
      {
        title: 'Consequence',
        content:
          'Conflicting outputs persist and the system does not operate as a single controlled structure.',
      },
    ],
  },
};

export const INSIGHTS_TOPIC_TECHNICAL_STRUCTURE_SYSTEM_CONTROL: InsightTopic = {
  slug: 'technical-structure-does-not-ensure-system-control',
  title: 'Technical structure does not ensure system control',
  excerpt: 'Technical structure does not establish control without ownership of the system.',
  body: {
    sections: [
      {
        title: 'Situation',
        content:
          'Technical structure is implemented within the system without defined ownership of control.',
      },
      {
        title: 'Symptom',
        content:
          'Decisions remain inconsistent while system behavior diverges despite structured architecture.',
      },
      {
        title: 'Misinterpretation',
        content:
          'Technical structure is treated as the mechanism that ensures system control.',
      },
      {
        title: 'Mechanism',
        content:
          'Absence of ownership over control separates technical structure from the decision system, allowing decisions to form outside defined structures.',
      },
      {
        title: 'Consequence',
        content:
          'System control is not established and the system operates through uncontrolled decision formation.',
      },
    ],
  },
};

export const INSIGHTS_TOPIC_OBSERVED_DECISION_INCONSISTENCY: InsightTopic = {
  slug: 'decision-inconsistency',
  title: 'Decision inconsistency',
  excerpt: 'Decisions diverge across teams despite shared data and common objectives.',
  relatedInsights: [
    {
      title: 'Decision inconsistency is a leadership structure issue',
      slug: 'decision-inconsistency-is-a-leadership-structure-issue',
    },
    {
      title: 'Ownership determines how decisions form',
      slug: 'ownership-decisions-form',
    },
    {
      title: 'Decision authority without system ownership creates divergence',
      slug: 'decision-authority-without-system-ownership-creates-divergence',
    },
    {
      title: 'Decision systems and reporting systems operate separately',
      slug: 'decision-systems-and-reporting-systems-operate-separately',
    },
    {
      title: 'Parallel systems produce structurally conflicting outcomes',
      slug: 'parallel-systems-produce-structurally-conflicting-outcomes',
    },
    {
      title: 'Governance without enforcement does not hold under pressure',
      slug: 'governance-without-enforcement-does-not-hold-under-pressure',
    },
  ],
  body: {
    sections: [
      {
        title: 'Definition',
        content:
          'Decisions differ across functions, teams, or levels even when based on the same inputs.',
      },
    ],
  },
};

export const INSIGHTS_TOPIC_OBSERVED_DATA_FRAGMENTATION: InsightTopic = {
  slug: 'data-fragmentation',
  title: 'Data fragmentation',
  excerpt:
    'Data exists across multiple systems without a unified structure, producing inconsistent outputs.',
  relatedInsights: [
    {
      title: 'Data fragmentation breaks system coherence',
      slug: 'data-fragmentation-breaks-system-coherence',
    },
    {
      title: 'Integration without alignment reinforces fragmentation',
      slug: 'integration-without-alignment-reinforces-fragmentation',
    },
    {
      title: 'Data flows determine decision consistency',
      slug: 'data-flows-determine-decision-consistency',
    },
    {
      title: 'Divergent interpretation of shared data',
      slug: 'divergent-interpretation-of-shared-data',
    },
    {
      title: 'Parallel systems produce conflicting outputs',
      slug: 'parallel-systems-produce-conflicting-outputs',
    },
    {
      title: 'Technical structure does not ensure system control',
      slug: 'technical-structure-does-not-ensure-system-control',
    },
  ],
  body: {
    sections: [
      {
        title: 'Definition',
        content:
          'Data is distributed across systems, teams, or tools without a single controlling structure.',
      },
    ],
  },
};

export const INSIGHTS_TOPIC_OBSERVED_REPORTING_DECISION_GAP: InsightTopic = {
  slug: 'reporting-vs-decision-gap',
  title: 'Reporting vs decision gap',
  excerpt: 'Reported data does not translate into consistent or aligned decisions.',
  relatedInsights: [
    {
      title: 'Decision systems and reporting systems operate separately',
      slug: 'decision-systems-and-reporting-systems-operate-separately',
    },
    {
      title: 'Formal structures do not determine how decisions are made',
      slug: 'formal-structures-do-not-determine-how-decisions-are-made',
    },
    {
      title: 'Decision consistency does not emerge from shared data',
      slug: 'decision-consistency-does-not-emerge-from-shared-data',
    },
    {
      title: 'Parallel systems produce structurally conflicting outcomes',
      slug: 'parallel-systems-produce-structurally-conflicting-outcomes',
    },
    {
      title: 'Governance without enforcement does not hold under pressure',
      slug: 'governance-without-enforcement-does-not-hold-under-pressure',
    },
    {
      title: 'Control mechanisms fail when ownership is unclear',
      slug: 'control-mechanisms-fail-when-ownership-is-unclear',
    },
  ],
  body: {
    sections: [
      {
        title: 'Definition',
        content:
          'Reporting outputs are produced, but decisions are formed independently of those outputs.',
      },
    ],
  },
};

export const INSIGHTS_TOPIC_OBSERVED_DIVERGENT_INTERPRETATION: InsightTopic = {
  slug: 'divergent-interpretation',
  title: 'Divergent interpretation',
  excerpt: 'The same data leads to different conclusions across teams or functions.',
  relatedInsights: [
    {
      title: 'Divergent interpretation of shared data',
      slug: 'divergent-interpretation-of-shared-data',
    },
    {
      title: 'Data flows determine decision consistency',
      slug: 'data-flows-determine-decision-consistency',
    },
    {
      title: 'Parallel systems produce conflicting outputs',
      slug: 'parallel-systems-produce-conflicting-outputs',
    },
    {
      title: 'Decision consistency does not emerge from shared data',
      slug: 'decision-consistency-does-not-emerge-from-shared-data',
    },
    {
      title: 'Decision systems and reporting systems operate separately',
      slug: 'decision-systems-and-reporting-systems-operate-separately',
    },
    {
      title: 'Technical structure does not ensure system control',
      slug: 'technical-structure-does-not-ensure-system-control',
    },
  ],
  body: {
    sections: [
      {
        title: 'Definition',
        content:
          'Identical data inputs are interpreted differently, resulting in conflicting conclusions and decisions.',
      },
    ],
  },
};

export const INSIGHTS_TOPIC_OBSERVED_LOSS_OF_PRIORITIZATION: InsightTopic = {
  slug: 'loss-of-prioritization',
  title: 'Loss of prioritization',
  excerpt: 'Priorities shift across teams and time without a stable decision structure.',
  relatedInsights: [
    {
      title: 'Priorities shift without control',
      slug: 'priorities-shift-without-control',
    },
    {
      title: 'Ownership determines how decisions form',
      slug: 'ownership-decisions-form',
    },
    {
      title: 'Decision authority without system ownership creates divergence',
      slug: 'decision-authority-without-system-ownership-creates-divergence',
    },
    {
      title: 'Execution without alignment does not converge',
      slug: 'execution-without-alignment-does-not-converge',
    },
    {
      title: 'Initiatives progress without system coordination',
      slug: 'initiatives-progress-without-system-coordination',
    },
    {
      title: 'Control mechanisms fail when ownership is unclear',
      slug: 'control-mechanisms-fail-when-ownership-is-unclear',
    },
  ],
  body: {
    sections: [
      {
        title: 'Definition',
        content:
          'Priorities are redefined inconsistently, with no single system enforcing what matters and in what order.',
      },
    ],
  },
};

export const INSIGHTS_TOPIC_OBSERVED_AI_OUTSIDE_SYSTEM: InsightTopic = {
  slug: 'ai-outside-system',
  title: 'AI outside system',
  excerpt:
    'AI operates independently of the decision system, producing outputs without integration or control.',
  relatedInsights: [
    {
      title: 'AI cannot operate within a fragmented decision system',
      slug: 'ai-cannot-operate-within-a-fragmented-decision-system',
    },
    {
      title: 'AI initiatives stall without defined ownership',
      slug: 'ai-initiatives-stall-without-defined-ownership',
    },
    {
      title: 'Data fragmentation breaks system coherence',
      slug: 'data-fragmentation-breaks-system-coherence',
    },
    {
      title: 'Integration without alignment reinforces fragmentation',
      slug: 'integration-without-alignment-reinforces-fragmentation',
    },
    {
      title: 'Decision systems and reporting systems operate separately',
      slug: 'decision-systems-and-reporting-systems-operate-separately',
    },
    {
      title: 'Control is not enforceable across functions',
      slug: 'control-is-not-enforceable-across-functions',
    },
  ],
  body: {
    sections: [
      {
        title: 'Definition',
        content:
          'AI systems generate outputs that are not embedded within a controlled decision structure or ownership model.',
      },
    ],
  },
};

export const INSIGHTS_TOPIC_OBSERVED_GOVERNANCE_WITHOUT_CONTROL: InsightTopic = {
  slug: 'governance-without-control',
  title: 'Governance without control',
  excerpt:
    'Governance structures exist but do not enforce how decisions are made or executed.',
  relatedInsights: [
    {
      title: 'Governance without enforcement does not hold under pressure',
      slug: 'governance-without-enforcement-does-not-hold-under-pressure',
    },
    {
      title: 'Control mechanisms fail when ownership is unclear',
      slug: 'control-mechanisms-fail-when-ownership-is-unclear',
    },
    {
      title: 'Distributed ownership prevents accountability',
      slug: 'distributed-ownership-prevents-accountability',
    },
    {
      title: 'Formal structures do not determine how decisions are made',
      slug: 'formal-structures-do-not-determine-how-decisions-are-made',
    },
    {
      title: 'Control is not enforceable across functions',
      slug: 'control-is-not-enforceable-across-functions',
    },
    {
      title: 'Decision systems and reporting systems operate separately',
      slug: 'decision-systems-and-reporting-systems-operate-separately',
    },
  ],
  body: {
    sections: [
      {
        title: 'Definition',
        content:
          'Governance is defined formally, but lacks the authority and mechanisms to enforce decision consistency across the system.',
      },
    ],
  },
};

export const INSIGHTS_TOPIC_SITUATION_SCALING_EXPOSES_INCONSISTENCY: InsightTopic = {
  slug: 'scaling-exposes-inconsistency',
  title: 'Scaling exposes inconsistency',
  excerpt:
    'Growth increases decision volume and interdependence, revealing structural inconsistency.',
  relatedInsights: [
    {
      title: 'Governance without enforcement does not hold under pressure',
      slug: 'governance-without-enforcement-does-not-hold-under-pressure',
    },
    {
      title: 'Distributed ownership prevents accountability',
      slug: 'distributed-ownership-prevents-accountability',
    },
    {
      title: 'Execution without alignment does not converge',
      slug: 'execution-without-alignment-does-not-converge',
    },
    {
      title: 'Data fragmentation breaks system coherence',
      slug: 'data-fragmentation-breaks-system-coherence',
    },
    {
      title: 'Decision systems and reporting systems operate separately',
      slug: 'decision-systems-and-reporting-systems-operate-separately',
    },
    {
      title: 'Parallel systems produce structurally conflicting outcomes',
      slug: 'parallel-systems-produce-structurally-conflicting-outcomes',
    },
  ],
  body: {
    sections: [
      {
        title: 'Condition',
        content:
          'As scale increases, the number of decisions and their interdependencies expand, exposing lack of control across the system.',
      },
    ],
  },
};

export const INSIGHTS_TOPIC_SITUATION_AI_INITIATIVES_STALL: InsightTopic = {
  slug: 'ai-initiatives-stall',
  title: 'AI initiatives stall',
  excerpt:
    'AI efforts fail to progress as they are not embedded within a controlled decision system.',
  relatedInsights: [
    {
      title: 'AI initiatives stall without defined ownership',
      slug: 'ai-initiatives-stall-without-defined-ownership',
    },
    {
      title: 'AI cannot operate within a fragmented decision system',
      slug: 'ai-cannot-operate-within-a-fragmented-decision-system',
    },
    {
      title: 'Data fragmentation breaks system coherence',
      slug: 'data-fragmentation-breaks-system-coherence',
    },
    {
      title: 'Integration without alignment reinforces fragmentation',
      slug: 'integration-without-alignment-reinforces-fragmentation',
    },
    {
      title: 'Decision systems and reporting systems operate separately',
      slug: 'decision-systems-and-reporting-systems-operate-separately',
    },
    {
      title: 'Control is not enforceable across functions',
      slug: 'control-is-not-enforceable-across-functions',
    },
  ],
  body: {
    sections: [
      {
        title: 'Condition',
        content:
          'AI initiatives operate without defined ownership, integration into decision processes, or system-level control, preventing sustained progress.',
      },
    ],
  },
};

export const INSIGHTS_TOPIC_SITUATION_CONFLICTING_REPORTS_INCREASE: InsightTopic = {
  slug: 'conflicting-reports-increase',
  title: 'Conflicting reports increase',
  excerpt:
    'Multiple systems produce different outputs for the same metrics, increasing uncertainty.',
  relatedInsights: [
    {
      title: 'Parallel systems produce conflicting outputs',
      slug: 'parallel-systems-produce-conflicting-outputs',
    },
    {
      title: 'Divergent interpretation of shared data',
      slug: 'divergent-interpretation-of-shared-data',
    },
    {
      title: 'Data fragmentation breaks system coherence',
      slug: 'data-fragmentation-breaks-system-coherence',
    },
    {
      title: 'Decision systems and reporting systems operate separately',
      slug: 'decision-systems-and-reporting-systems-operate-separately',
    },
    {
      title: 'Integration without alignment reinforces fragmentation',
      slug: 'integration-without-alignment-reinforces-fragmentation',
    },
    {
      title: 'Decision consistency does not emerge from shared data',
      slug: 'decision-consistency-does-not-emerge-from-shared-data',
    },
  ],
  body: {
    sections: [
      {
        title: 'Condition',
        content:
          'As reporting sources multiply, different systems generate inconsistent outputs for the same data points.',
      },
    ],
  },
};

export const INSIGHTS_TOPIC_SITUATION_LEADERSHIP_MISALIGNMENT_APPEARS: InsightTopic = {
  slug: 'leadership-misalignment-appears',
  title: 'Leadership misalignment appears',
  excerpt:
    'Leadership decisions diverge as no single system enforces direction and priorities.',
  relatedInsights: [
    {
      title: 'Leadership alignment fails without a shared system',
      slug: 'leadership-alignment-fails-without-a-shared-system',
    },
    {
      title: 'Ownership determines how decisions form',
      slug: 'ownership-decisions-form',
    },
    {
      title: 'Decision authority without system ownership creates divergence',
      slug: 'decision-authority-without-system-ownership-creates-divergence',
    },
    {
      title: 'Priorities shift without control',
      slug: 'priorities-shift-without-control',
    },
    {
      title: 'Governance without enforcement does not hold under pressure',
      slug: 'governance-without-enforcement-does-not-hold-under-pressure',
    },
    {
      title: 'Distributed ownership prevents accountability',
      slug: 'distributed-ownership-prevents-accountability',
    },
  ],
  body: {
    sections: [
      {
        title: 'Condition',
        content:
          'As decisions are formed across multiple leaders without shared system ownership, direction and priorities diverge.',
      },
    ],
  },
};

export const INSIGHTS_TOPIC_SITUATION_EXTERNAL_PRESSURE_REVEALS_GAPS: InsightTopic = {
  slug: 'external-pressure-reveals-gaps',
  title: 'External pressure reveals gaps',
  excerpt:
    'External demands expose weaknesses in control, coordination, and decision consistency.',
  relatedInsights: [
    {
      title: 'Governance without enforcement does not hold under pressure',
      slug: 'governance-without-enforcement-does-not-hold-under-pressure',
    },
    {
      title: 'Control mechanisms fail when ownership is unclear',
      slug: 'control-mechanisms-fail-when-ownership-is-unclear',
    },
    {
      title: 'Execution without alignment does not converge',
      slug: 'execution-without-alignment-does-not-converge',
    },
    {
      title: 'Distributed ownership prevents accountability',
      slug: 'distributed-ownership-prevents-accountability',
    },
    {
      title: 'Decision systems and reporting systems operate separately',
      slug: 'decision-systems-and-reporting-systems-operate-separately',
    },
    {
      title: 'Parallel systems produce structurally conflicting outcomes',
      slug: 'parallel-systems-produce-structurally-conflicting-outcomes',
    },
  ],
  body: {
    sections: [
      {
        title: 'Condition',
        content:
          'Under external pressure, the system is required to respond with speed and consistency, exposing gaps in ownership, control, and alignment.',
      },
    ],
  },
};

export const INSIGHTS_TOPIC_SITUATION_DECISION_PRESSURE_EXPOSES_LACK_OF_CONTROL: InsightTopic = {
  slug: 'decision-pressure-exposes-lack-of-control',
  title: 'Decision pressure exposes lack of control',
  excerpt:
    'Increased decision demand reveals absence of a controlling system and consistent ownership.',
  relatedInsights: [
    {
      title: 'Governance without enforcement does not hold under pressure',
      slug: 'governance-without-enforcement-does-not-hold-under-pressure',
    },
    {
      title: 'Control mechanisms fail when ownership is unclear',
      slug: 'control-mechanisms-fail-when-ownership-is-unclear',
    },
    {
      title: 'Decision consistency does not emerge from shared data',
      slug: 'decision-consistency-does-not-emerge-from-shared-data',
    },
    {
      title: 'Decision authority without system ownership creates divergence',
      slug: 'decision-authority-without-system-ownership-creates-divergence',
    },
    {
      title: 'Execution without alignment does not converge',
      slug: 'execution-without-alignment-does-not-converge',
    },
    {
      title: 'Distributed ownership prevents accountability',
      slug: 'distributed-ownership-prevents-accountability',
    },
  ],
  body: {
    sections: [
      {
        title: 'Condition',
        content:
          'As decision frequency and urgency increase, the system fails to produce consistent outputs due to lack of enforced ownership and control.',
      },
    ],
  },
};

export const INSIGHTS_TOPIC_DECISION_CONSISTENCY_SHARED_DATA: InsightTopic = {
  slug: 'decision-consistency-does-not-emerge-from-shared-data',
  title: 'Decision consistency does not emerge from shared data',
  excerpt: 'Shared data does not produce decision consistency without system control.',
  body: {
    sections: [
      {
        title: 'Situation',
        content:
          'Shared data is available across the system without unified ownership of decision control.',
      },
      {
        title: 'Symptom',
        content:
          'Decisions differ across the system while the same data is used.',
      },
      {
        title: 'Misinterpretation',
        content:
          'Shared data is treated as the mechanism that ensures decision consistency.',
      },
      {
        title: 'Mechanism',
        content:
          'Absence of ownership over decision control allows multiple decision structures to interpret shared data independently within the system.',
      },
      {
        title: 'Consequence',
        content:
          'Decision consistency does not form and the system produces divergent decision outcomes.',
      },
    ],
  },
};

export const INSIGHTS_TOPIC_PARALLEL_SYSTEMS_STRUCTURALLY_CONFLICTING_OUTCOMES: InsightTopic = {
  slug: 'parallel-systems-produce-structurally-conflicting-outcomes',
  title: 'Parallel systems produce structurally conflicting outcomes',
  excerpt:
    'Parallel systems generate conflicting outcomes when control is not unified under ownership.',
  body: {
    sections: [
      {
        title: 'Situation',
        content:
          'Multiple systems operate within the system without unified ownership of control.',
      },
      {
        title: 'Symptom',
        content:
          'Outcomes conflict across systems while decisions diverge under the same conditions.',
      },
      {
        title: 'Misinterpretation',
        content:
          'Parallel systems are treated as coordinated components of a single structure.',
      },
      {
        title: 'Mechanism',
        content:
          'Absence of ownership over system control allows each system to operate under separate decision structures, producing structurally independent outcomes.',
      },
      {
        title: 'Consequence',
        content:
          'Outcomes remain conflicting and the system does not operate as a single controlled structure.',
      },
    ],
  },
};

export const INSIGHTS_TOPIC_AI_FRAGMENTED_DECISION_SYSTEM: InsightTopic = {
  slug: 'ai-cannot-operate-within-a-fragmented-decision-system',
  title: 'AI cannot operate within a fragmented decision system',
  excerpt: 'AI does not operate without control within a unified decision system.',
  body: {
    sections: [
      {
        title: 'Situation',
        content:
          'AI is introduced into the system where decision control is fragmented across structures without unified ownership.',
      },
      {
        title: 'Symptom',
        content:
          'AI outputs do not integrate into decisions while system behavior remains inconsistent.',
      },
      {
        title: 'Misinterpretation',
        content:
          'AI capability is treated as sufficient to operate within the system.',
      },
      {
        title: 'Mechanism',
        content:
          'Absence of ownership over decision control prevents AI from aligning with a single decision structure, leaving AI outputs outside the controlled system.',
      },
      {
        title: 'Consequence',
        content:
          'AI does not operate within the decision system and remains disconnected from decision formation.',
      },
    ],
  },
};

export const INSIGHTS_TOPICS_BY_SLUG: Record<string, InsightTopic> = {
  [INSIGHTS_TOPIC_OWNERSHIP_DECISIONS_FORM.slug]: INSIGHTS_TOPIC_OWNERSHIP_DECISIONS_FORM,
  [INSIGHTS_TOPIC_DECISION_AUTHORITY_DIVERGENCE.slug]:
    INSIGHTS_TOPIC_DECISION_AUTHORITY_DIVERGENCE,
  [INSIGHTS_TOPIC_DIRECTION_WITHOUT_ENFORCEMENT.slug]:
    INSIGHTS_TOPIC_DIRECTION_WITHOUT_ENFORCEMENT,
  [INSIGHTS_TOPIC_PRIORITIES_SHIFT_WITHOUT_CONTROL.slug]:
    INSIGHTS_TOPIC_PRIORITIES_SHIFT_WITHOUT_CONTROL,
  [INSIGHTS_TOPIC_LEADERSHIP_ALIGNMENT_SHARED_SYSTEM.slug]:
    INSIGHTS_TOPIC_LEADERSHIP_ALIGNMENT_SHARED_SYSTEM,
  [INSIGHTS_TOPIC_DECISION_INCONSISTENCY_LEADERSHIP_STRUCTURE.slug]:
    INSIGHTS_TOPIC_DECISION_INCONSISTENCY_LEADERSHIP_STRUCTURE,
  [INSIGHTS_TOPIC_GOVERNANCE_WITHOUT_ENFORCEMENT_PRESSURE.slug]:
    INSIGHTS_TOPIC_GOVERNANCE_WITHOUT_ENFORCEMENT_PRESSURE,
  [INSIGHTS_TOPIC_DISTRIBUTED_OWNERSHIP_ACCOUNTABILITY.slug]:
    INSIGHTS_TOPIC_DISTRIBUTED_OWNERSHIP_ACCOUNTABILITY,
  [INSIGHTS_TOPIC_CONTROL_MECHANISMS_OWNERSHIP_UNCLEAR.slug]:
    INSIGHTS_TOPIC_CONTROL_MECHANISMS_OWNERSHIP_UNCLEAR,
  [INSIGHTS_TOPIC_DECISION_REPORTING_SYSTEMS_SEPARATE.slug]:
    INSIGHTS_TOPIC_DECISION_REPORTING_SYSTEMS_SEPARATE,
  [INSIGHTS_TOPIC_FORMAL_STRUCTURES_DECISIONS_MADE.slug]:
    INSIGHTS_TOPIC_FORMAL_STRUCTURES_DECISIONS_MADE,
  [INSIGHTS_TOPIC_CONTROL_NOT_ENFORCEABLE_ACROSS_FUNCTIONS.slug]:
    INSIGHTS_TOPIC_CONTROL_NOT_ENFORCEABLE_ACROSS_FUNCTIONS,
  [INSIGHTS_TOPIC_EXECUTION_WITHOUT_ALIGNMENT.slug]:
    INSIGHTS_TOPIC_EXECUTION_WITHOUT_ALIGNMENT,
  [INSIGHTS_TOPIC_INITIATIVES_WITHOUT_COORDINATION.slug]:
    INSIGHTS_TOPIC_INITIATIVES_WITHOUT_COORDINATION,
  [INSIGHTS_TOPIC_DELIVERY_DIVERGES_TEAMS_TIMELINES.slug]:
    INSIGHTS_TOPIC_DELIVERY_DIVERGES_TEAMS_TIMELINES,
  [INSIGHTS_TOPIC_EXECUTION_EXPOSES_STRUCTURAL_INCONSISTENCY.slug]:
    INSIGHTS_TOPIC_EXECUTION_EXPOSES_STRUCTURAL_INCONSISTENCY,
  [INSIGHTS_TOPIC_TRANSFORMATION_CONTROL_LAYER_INTEGRITY.slug]:
    INSIGHTS_TOPIC_TRANSFORMATION_CONTROL_LAYER_INTEGRITY,
  [INSIGHTS_TOPIC_AI_INITIATIVES_DEFINED_OWNERSHIP.slug]:
    INSIGHTS_TOPIC_AI_INITIATIVES_DEFINED_OWNERSHIP,
  [INSIGHTS_TOPIC_DATA_FRAGMENTATION_SYSTEM_COHERENCE.slug]:
    INSIGHTS_TOPIC_DATA_FRAGMENTATION_SYSTEM_COHERENCE,
  [INSIGHTS_TOPIC_DATA_FLOWS_DECISION_CONSISTENCY.slug]:
    INSIGHTS_TOPIC_DATA_FLOWS_DECISION_CONSISTENCY,
  [INSIGHTS_TOPIC_INTEGRATION_WITHOUT_ALIGNMENT_FRAGMENTATION.slug]:
    INSIGHTS_TOPIC_INTEGRATION_WITHOUT_ALIGNMENT_FRAGMENTATION,
  [INSIGHTS_TOPIC_DIVERGENT_INTERPRETATION_SHARED_DATA.slug]:
    INSIGHTS_TOPIC_DIVERGENT_INTERPRETATION_SHARED_DATA,
  [INSIGHTS_TOPIC_PARALLEL_SYSTEMS_CONFLICTING_OUTPUTS.slug]:
    INSIGHTS_TOPIC_PARALLEL_SYSTEMS_CONFLICTING_OUTPUTS,
  [INSIGHTS_TOPIC_TECHNICAL_STRUCTURE_SYSTEM_CONTROL.slug]:
    INSIGHTS_TOPIC_TECHNICAL_STRUCTURE_SYSTEM_CONTROL,
  [INSIGHTS_TOPIC_DECISION_CONSISTENCY_SHARED_DATA.slug]:
    INSIGHTS_TOPIC_DECISION_CONSISTENCY_SHARED_DATA,
  [INSIGHTS_TOPIC_PARALLEL_SYSTEMS_STRUCTURALLY_CONFLICTING_OUTCOMES.slug]:
    INSIGHTS_TOPIC_PARALLEL_SYSTEMS_STRUCTURALLY_CONFLICTING_OUTCOMES,
  [INSIGHTS_TOPIC_AI_FRAGMENTED_DECISION_SYSTEM.slug]:
    INSIGHTS_TOPIC_AI_FRAGMENTED_DECISION_SYSTEM,
  [INSIGHTS_TOPIC_OBSERVED_DECISION_INCONSISTENCY.slug]:
    INSIGHTS_TOPIC_OBSERVED_DECISION_INCONSISTENCY,
  [INSIGHTS_TOPIC_OBSERVED_DATA_FRAGMENTATION.slug]:
    INSIGHTS_TOPIC_OBSERVED_DATA_FRAGMENTATION,
  [INSIGHTS_TOPIC_OBSERVED_REPORTING_DECISION_GAP.slug]:
    INSIGHTS_TOPIC_OBSERVED_REPORTING_DECISION_GAP,
  [INSIGHTS_TOPIC_OBSERVED_DIVERGENT_INTERPRETATION.slug]:
    INSIGHTS_TOPIC_OBSERVED_DIVERGENT_INTERPRETATION,
  [INSIGHTS_TOPIC_OBSERVED_LOSS_OF_PRIORITIZATION.slug]:
    INSIGHTS_TOPIC_OBSERVED_LOSS_OF_PRIORITIZATION,
  [INSIGHTS_TOPIC_OBSERVED_AI_OUTSIDE_SYSTEM.slug]:
    INSIGHTS_TOPIC_OBSERVED_AI_OUTSIDE_SYSTEM,
  [INSIGHTS_TOPIC_OBSERVED_GOVERNANCE_WITHOUT_CONTROL.slug]:
    INSIGHTS_TOPIC_OBSERVED_GOVERNANCE_WITHOUT_CONTROL,
  [INSIGHTS_TOPIC_SITUATION_SCALING_EXPOSES_INCONSISTENCY.slug]:
    INSIGHTS_TOPIC_SITUATION_SCALING_EXPOSES_INCONSISTENCY,
  [INSIGHTS_TOPIC_SITUATION_AI_INITIATIVES_STALL.slug]:
    INSIGHTS_TOPIC_SITUATION_AI_INITIATIVES_STALL,
  [INSIGHTS_TOPIC_SITUATION_CONFLICTING_REPORTS_INCREASE.slug]:
    INSIGHTS_TOPIC_SITUATION_CONFLICTING_REPORTS_INCREASE,
  [INSIGHTS_TOPIC_SITUATION_LEADERSHIP_MISALIGNMENT_APPEARS.slug]:
    INSIGHTS_TOPIC_SITUATION_LEADERSHIP_MISALIGNMENT_APPEARS,
  [INSIGHTS_TOPIC_SITUATION_EXTERNAL_PRESSURE_REVEALS_GAPS.slug]:
    INSIGHTS_TOPIC_SITUATION_EXTERNAL_PRESSURE_REVEALS_GAPS,
  [INSIGHTS_TOPIC_SITUATION_DECISION_PRESSURE_EXPOSES_LACK_OF_CONTROL.slug]:
    INSIGHTS_TOPIC_SITUATION_DECISION_PRESSURE_EXPOSES_LACK_OF_CONTROL,
};

export const EXECUTIVE_TOPIC_SEQUENCE: readonly string[] = [
  INSIGHTS_TOPIC_OWNERSHIP_DECISIONS_FORM.slug,
  INSIGHTS_TOPIC_DECISION_AUTHORITY_DIVERGENCE.slug,
  INSIGHTS_TOPIC_DIRECTION_WITHOUT_ENFORCEMENT.slug,
  INSIGHTS_TOPIC_PRIORITIES_SHIFT_WITHOUT_CONTROL.slug,
  INSIGHTS_TOPIC_LEADERSHIP_ALIGNMENT_SHARED_SYSTEM.slug,
  INSIGHTS_TOPIC_DECISION_INCONSISTENCY_LEADERSHIP_STRUCTURE.slug,
] as const;

export const OPERATING_TOPIC_SEQUENCE: readonly string[] = [
  INSIGHTS_TOPIC_GOVERNANCE_WITHOUT_ENFORCEMENT_PRESSURE.slug,
  INSIGHTS_TOPIC_DISTRIBUTED_OWNERSHIP_ACCOUNTABILITY.slug,
  INSIGHTS_TOPIC_CONTROL_MECHANISMS_OWNERSHIP_UNCLEAR.slug,
  INSIGHTS_TOPIC_DECISION_REPORTING_SYSTEMS_SEPARATE.slug,
  INSIGHTS_TOPIC_FORMAL_STRUCTURES_DECISIONS_MADE.slug,
  INSIGHTS_TOPIC_CONTROL_NOT_ENFORCEABLE_ACROSS_FUNCTIONS.slug,
] as const;

export const TRANSFORMATION_TOPIC_SEQUENCE: readonly string[] = [
  INSIGHTS_TOPIC_EXECUTION_WITHOUT_ALIGNMENT.slug,
  INSIGHTS_TOPIC_INITIATIVES_WITHOUT_COORDINATION.slug,
  INSIGHTS_TOPIC_DELIVERY_DIVERGES_TEAMS_TIMELINES.slug,
  INSIGHTS_TOPIC_EXECUTION_EXPOSES_STRUCTURAL_INCONSISTENCY.slug,
  INSIGHTS_TOPIC_TRANSFORMATION_CONTROL_LAYER_INTEGRITY.slug,
  INSIGHTS_TOPIC_AI_INITIATIVES_DEFINED_OWNERSHIP.slug,
  INSIGHTS_TOPIC_AI_FRAGMENTED_DECISION_SYSTEM.slug,
] as const;

export const ARCHITECTURE_TOPIC_SEQUENCE: readonly string[] = [
  INSIGHTS_TOPIC_DATA_FRAGMENTATION_SYSTEM_COHERENCE.slug,
  INSIGHTS_TOPIC_DECISION_CONSISTENCY_SHARED_DATA.slug,
  INSIGHTS_TOPIC_PARALLEL_SYSTEMS_STRUCTURALLY_CONFLICTING_OUTCOMES.slug,
  INSIGHTS_TOPIC_DATA_FLOWS_DECISION_CONSISTENCY.slug,
  INSIGHTS_TOPIC_INTEGRATION_WITHOUT_ALIGNMENT_FRAGMENTATION.slug,
  INSIGHTS_TOPIC_DIVERGENT_INTERPRETATION_SHARED_DATA.slug,
  INSIGHTS_TOPIC_PARALLEL_SYSTEMS_CONFLICTING_OUTPUTS.slug,
  INSIGHTS_TOPIC_TECHNICAL_STRUCTURE_SYSTEM_CONTROL.slug,
] as const;

export const OBSERVED_ISSUE_TOPIC_SEQUENCE: readonly string[] = [
  INSIGHTS_TOPIC_OBSERVED_DECISION_INCONSISTENCY.slug,
  INSIGHTS_TOPIC_OBSERVED_DATA_FRAGMENTATION.slug,
  INSIGHTS_TOPIC_OBSERVED_REPORTING_DECISION_GAP.slug,
  INSIGHTS_TOPIC_OBSERVED_DIVERGENT_INTERPRETATION.slug,
  INSIGHTS_TOPIC_OBSERVED_LOSS_OF_PRIORITIZATION.slug,
  INSIGHTS_TOPIC_OBSERVED_AI_OUTSIDE_SYSTEM.slug,
  INSIGHTS_TOPIC_OBSERVED_GOVERNANCE_WITHOUT_CONTROL.slug,
] as const;

export const SITUATION_TOPIC_SEQUENCE: readonly string[] = [
  INSIGHTS_TOPIC_SITUATION_SCALING_EXPOSES_INCONSISTENCY.slug,
  INSIGHTS_TOPIC_SITUATION_AI_INITIATIVES_STALL.slug,
  INSIGHTS_TOPIC_SITUATION_CONFLICTING_REPORTS_INCREASE.slug,
  INSIGHTS_TOPIC_SITUATION_LEADERSHIP_MISALIGNMENT_APPEARS.slug,
  INSIGHTS_TOPIC_SITUATION_EXTERNAL_PRESSURE_REVEALS_GAPS.slug,
  INSIGHTS_TOPIC_SITUATION_DECISION_PRESSURE_EXPOSES_LACK_OF_CONTROL.slug,
] as const;

const LAYER_BY_SLUG: Record<string, InsightLayerId> = {
  ...Object.fromEntries(
    EXECUTIVE_TOPIC_SEQUENCE.map((slug) => [slug, 'insights-layer-executive' as const]),
  ),
  ...Object.fromEntries(
    OPERATING_TOPIC_SEQUENCE.map((slug) => [slug, 'insights-layer-operating' as const]),
  ),
  ...Object.fromEntries(
    TRANSFORMATION_TOPIC_SEQUENCE.map((slug) => [slug, 'insights-layer-transformation' as const]),
  ),
  ...Object.fromEntries(
    ARCHITECTURE_TOPIC_SEQUENCE.map((slug) => [slug, 'insights-layer-architecture' as const]),
  ),
  ...Object.fromEntries(
    OBSERVED_ISSUE_TOPIC_SEQUENCE.map((slug) => [slug, 'insights-entry-observed-issue' as const]),
  ),
  ...Object.fromEntries(
    SITUATION_TOPIC_SEQUENCE.map((slug) => [slug, 'insights-entry-situation' as const]),
  ),
};

const LAYER_META: Record<
  InsightLayerId,
  { title: string; pathLabel: string; anchorHref: string }
> = {
  'insights-layer-executive': {
    title: 'Executive / Leadership',
    pathLabel: 'All Insights → Executive',
    anchorHref: '/insights#insights-layer-executive',
  },
  'insights-layer-operating': {
    title: 'Operating Model / Control',
    pathLabel: 'All Insights → Operating Model / Control',
    anchorHref: '/insights#insights-layer-operating',
  },
  'insights-layer-transformation': {
    title: 'Transformation / Execution',
    pathLabel: 'All Insights → Transformation / Execution',
    anchorHref: '/insights#insights-layer-transformation',
  },
  'insights-layer-architecture': {
    title: 'Architecture (Supporting)',
    pathLabel: 'All Insights → Architecture (Supporting)',
    anchorHref: '/insights#insights-layer-architecture',
  },
  'insights-entry-observed-issue': {
    title: 'Observed issue',
    pathLabel: 'Insights → Entry points / Observed issue',
    anchorHref: '/insights#entry-final-system',
  },
  'insights-entry-situation': {
    title: 'Situation',
    pathLabel: 'Insights → Entry points / Situation',
    anchorHref: '/insights#entry-final-system',
  },
};

export function getTopicOriginBySlug(topicSlug: string) {
  const layerId = LAYER_BY_SLUG[topicSlug];
  return layerId ? LAYER_META[layerId] : LAYER_META['insights-layer-executive'];
}

export function getNextTopic(topicSlug: string): InsightTopic | null {
  const layerId = LAYER_BY_SLUG[topicSlug];
  if (!layerId) return null;

  const sequence =
    layerId === 'insights-layer-operating'
      ? OPERATING_TOPIC_SEQUENCE
      : layerId === 'insights-layer-transformation'
        ? TRANSFORMATION_TOPIC_SEQUENCE
        : layerId === 'insights-layer-architecture'
          ? ARCHITECTURE_TOPIC_SEQUENCE
          : layerId === 'insights-entry-observed-issue'
            ? OBSERVED_ISSUE_TOPIC_SEQUENCE
            : layerId === 'insights-entry-situation'
              ? SITUATION_TOPIC_SEQUENCE
      : EXECUTIVE_TOPIC_SEQUENCE;
  const currentIndex = sequence.indexOf(topicSlug);
  if (currentIndex === -1) return null;

  const nextIndex = currentIndex + 1;
  if (nextIndex >= sequence.length) return null;

  const nextSlug = sequence[nextIndex];
  return INSIGHTS_TOPICS_BY_SLUG[nextSlug] ?? null;
}

