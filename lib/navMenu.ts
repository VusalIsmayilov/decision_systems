/**
 * Full-screen navigation menu content: primary title, subline, and center-panel copy.
 * Used by NavigationOverlay.
 */

export type NavMenuSubItem = {
  label: string;
  desc: string;
  href: string;
};

export type NavMenuCategory = {
  id: string;
  /** Primary menu title (left rail + panel headline). */
  title: string;
  /** Descriptor under the title in the left rail. */
  subline: string;
  href: string;
  /**
   * Center panel copy: non-empty strings are lines within a paragraph; an empty string `""`
   * starts a new paragraph (same as a blank line between blocks).
   */
  centerBlock: readonly string[];
  items?: NavMenuSubItem[];
  cta?: { label: string; href: string; desc?: string };
};

/** Turn `centerBlock` lines into paragraph strings (split on `""`). */
export function navMenuCenterBlockParagraphs(lines: readonly string[]): string[] {
  const paragraphs: string[] = [];
  let buf: string[] = [];
  const flush = () => {
    if (buf.length === 0) return;
    paragraphs.push(buf.join('\n'));
    buf = [];
  };
  for (const line of lines) {
    if (line === '') {
      flush();
    } else {
      buf.push(line);
    }
  }
  flush();
  return paragraphs;
}

export const NAV_MENU_CATEGORIES: NavMenuCategory[] = [
  {
    id: 'home',
    href: '/',
    title: 'Decision Problem',
    subline: 'Recognition — recurring decision failure',
    centerBlock: [
      'Your dashboards, reports, and AI may be working.',
      'Your decisions still are not.',
      '',
      'The same numbers lead to different conclusions.',
      'The same situation gets handled differently across teams.',
      'The outcome depends too much on who is involved.',
      '',
      'This is not a reporting issue alone.',
      'It is a recurring decision problem.',
    ],
  },
  {
    id: 'why-analytics-ai-fail',
    href: '/why-analytics-ai-fail',
    title: 'Why Analytics / AI Fail',
    subline: 'Bridge — tool failure to decision failure',
    centerBlock: [
      'Analytics, dashboards, and AI provide inputs, visibility, and signals.',
      '',
      'They do not determine how recurring decisions are made, owned, and repeated.',
      '',
      'The missing layer is the decision itself:',
      'its structure.',
    ],
  },
  {
    id: 'decision-systems',
    href: '/decision-systems',
    title: 'Decision Systems',
    subline: 'Reframing — structural cause',
    centerBlock: [
      'The problem is not only the data.',
      '',
      'The problem is that the decision is undefined.',
      '',
      'When recurring decisions are not structurally defined,',
      'they are rebuilt each time they occur.',
      '',
      'That is why the same business conditions',
      'keep producing different outcomes.',
    ],
  },
  {
    id: 'decision-systems-design',
    href: '/decision-systems-design',
    title: 'Decision Systems Design',
    subline: 'Definition — decision as system',
    centerBlock: [
      'A recurring business decision can be designed as a system.',
      '',
      'Its structure becomes explicit through:',
      'decision, trigger, inputs, logic, ownership, workflow, action, feedback.',
      '',
      'When these are defined,',
      'the same conditions can be evaluated the same way.',
    ],
  },
  {
    id: 'how-decisions-are-structured',
    href: '/how-decisions-are-structured',
    title: 'How Decisions Are Structured',
    subline: 'Mechanism — current-state visibility',
    centerBlock: [
      'A decision is defined by how it actually operates,',
      'not by how people describe it.',
      '',
      'To see the structure,',
      'you examine what triggers it,',
      'what inputs are used,',
      'how logic shifts,',
      'who decides,',
      'and where action breaks.',
      '',
      'That is where variability becomes visible.',
    ],
  },
  {
    id: 'decision-systems-in-practice',
    href: '/decision-systems-in-practice',
    title: 'Decision Systems in Practice',
    subline: 'Proof — structure changes outcomes',
    centerBlock: [
      'The difference is not more data.',
      '',
      'The difference is decision structure.',
      '',
      'The same decision can operate through interpretation,',
      'or through an explicit system.',
      '',
      'When the structure is defined,',
      'the same conditions can lead to consistent action.',
    ],
  },
  {
    id: 'decision-diagnostic',
    href: '/decision-diagnostic',
    title: 'Decision Diagnostic',
    subline: 'Conversion — structured assessment',
    centerBlock: [
      'If recurring decisions produce inconsistent outcomes,',
      'the first step is to determine how they actually operate today.',
      '',
      'The diagnostic examines:',
      'decision',
      'trigger',
      'inputs',
      'logic',
      'ownership',
      'workflow',
      'action',
      'feedback',
      '',
      'This creates the baseline required before redesign.',
    ],
    cta: {
      label: 'Request Decision Diagnostic',
      href: '/decision-diagnostic/intake',
    },
  },
  {
    id: 'about',
    href: '/about',
    title: 'About',
    subline: 'Authority — specialized focus',
    centerBlock: [
      'This work is focused on one problem:',
      'how recurring business decisions operate,',
      'why they drift,',
      'and how they can be defined as systems.',
      '',
      'The focus is not generic advisory work.',
      'It is structural decision work.',
    ],
  },
];
