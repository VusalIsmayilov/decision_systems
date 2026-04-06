# DATAOFIS PARTNERS — UI/UX DESIGN SPECIFICATION
## Complete Implementation Guide for Claude Code

---

## PROJECT OVERVIEW

**Brand:** DataOfis Partners  
**Stack:** Next.js + React + TypeScript  
**Pages:** Home, How We Work, Services, Industries, Insights, About, Executive Data Review  
**Design System:** BCG-style Structured Intelligence (see design guideline)  
**Content:** All content is LOCKED — do not modify any text from the content files  

---

## 1. GLOBAL DESIGN SYSTEM

### 1.1 Typography

**Font:** Inter (Google Fonts) — loaded via `next/font/google`

| Role | Size (desktop) | Size (mobile) | Weight | Line-height | Letter-spacing |
|---|---|---|---|---|---|
| Hero headline | 56px | 32px | 700 | 1.08 | -0.03em |
| Section headline | 36px | 24px | 700 | 1.15 | -0.02em |
| Section subhead | 20px | 16px | 600 | 1.4 | -0.01em |
| Body | 17px | 15px | 400 | 1.65 | 0 |
| Body emphasis | 17px | 15px | 600 | 1.65 | 0 |
| Label / overline | 12px | 11px | 600 | 1.3 | 0.08em |
| CTA button text | 15px | 14px | 600 | 1 | 0.02em |
| Nav link | 14px | 14px | 500 | 1 | 0.01em |

**Rules:**
- All text is broken into atomic units — one idea per visual line where possible
- No continuous text blocks longer than 4 lines on desktop
- Max line length: 640px for body text
- Hero headlines max 800px wide
- Use `text-balance` on headlines where supported

### 1.2 Color System

```
/* CSS Variables — define in globals.css */
:root {
  /* Backgrounds */
  --bg-navy: #0A1628;
  --bg-white: #FFFFFF;
  --bg-gray: #F4F5F7;

  /* Typography on navy */
  --text-on-navy-primary: #FFFFFF;
  --text-on-navy-secondary: rgba(255, 255, 255, 0.55);
  --text-on-navy-accent: #6B9FFF;

  /* Typography on white/gray */
  --text-on-light-primary: #0A1628;
  --text-on-light-secondary: #5A6478;
  --text-on-light-accent: #2B5CE6;

  /* Functional */
  --accent: #2B5CE6;
  --accent-hover: #1E4AC4;
  --divider-on-navy: rgba(255, 255, 255, 0.1);
  --divider-on-light: rgba(10, 22, 40, 0.08);
  --border-subtle: rgba(10, 22, 40, 0.06);
}
```

**Background assignment rules (per design guideline):**
- **Navy (`--bg-navy`):** Hero sections, high-weight structural sections, CTA sections
- **White (`--bg-white`):** Primary content, decomposition sections, body-heavy sections
- **Gray (`--bg-gray`):** ONLY used when white-to-white transitions reduce clarity — acts as separator, not feature

### 1.3 Spacing Scale

```
--space-xs: 4px;
--space-sm: 8px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 40px;
--space-2xl: 64px;
--space-3xl: 96px;
--space-4xl: 140px;
```

**Section vertical padding:** `--space-4xl` top and bottom (140px desktop, 80px mobile)  
**Between atomic text units within a section:** `--space-md` to `--space-lg`  
**Between conceptual groups within a section:** `--space-xl` to `--space-2xl`  

### 1.4 Layout Constraints

- **Max content width:** 1280px, centered
- **Wide-screen layout by default** — content uses full width with asymmetric margins
- **Container padding:** 40px horizontal (desktop), 20px (mobile)
- **No default template layout** — each section has its own spatial logic derived from its thinking model

### 1.5 Navigation (Reuse Existing)

The navigation component already exists in the project. Do NOT rebuild it.  
Ensure all pages link correctly:
- Home: `/`
- How We Work: `/how-we-work`
- Services: `/services`
- Industries: `/industries`
- Insights: `/insights`
- About: `/about`
- Executive Data Review: `/executive-data-review`

### 1.6 Interaction Rules

- **Scroll animations:** Subtle fade-in + slight upward translate (12px) on section enter. Use `IntersectionObserver`. Duration 600ms, ease `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Stagger:** When a section has multiple atomic units (e.g., principle stack), stagger entry by 80ms per item.
- **Hover on links/buttons:** Background color shift, 200ms ease. No scale transforms.
- **No parallax, no immersive scroll effects, no competing animations.**
- **CTA button:** Solid `--accent` background, white text. On hover: `--accent-hover`. Padding: 16px 32px. Border-radius: 0 (sharp corners — consulting aesthetic).

### 1.7 Footer

Simple, structural footer. Navy background.  
Contains: firm name, copyright year, navigation links repeated, contact email placeholder.  
No social media icons. No newsletter signup. No decorative elements.

---

## 2. SPATIAL PATTERN LIBRARY

Each section maps to ONE thinking model and ONE spatial pattern per the design guideline mapping:

| Thinking Model | Spatial Pattern | CSS Approach |
|---|---|---|
| **Definition (Positioning)** | Asymmetric Split (30/70 or 40/60) | Grid `grid-template-columns: 1fr 2fr` or `2fr 3fr`. Label/overline on narrow side, content on wide side. |
| **Recognition (Symptoms)** | Principle Stack (Declarative) | Vertical stack, each line isolated. Large `--space-xl` gap between items. Each line is a standalone `<p>`. |
| **Causality (Why)** | 3-Zone Causal Chain | Grid `grid-template-columns: 1fr 1.5fr 1fr`. Center zone visually dominant (larger type or heavier weight). |
| **Structure (System Presence)** | Indexed Narrative | Grid `grid-template-columns: 200px 1fr`. Left: static index labels. Right: flowing content. |
| **Situational (Triggers)** | Framed Core + Peripheral | Central statement large, surrounding items smaller/lighter. Can use absolute positioning or grid with spanning. |
| **Evidence** | Compression Block | Narrow column (max 560px), strong vertical rhythm, each evidence line separated. |
| **Framing** | Asymmetric Split (inverted) | Content-heavy side left (70%), framing label right (30%). |
| **Action (CTA)** | Isolated Block | Centered, contained. Navy background. Single element. Maximum whitespace. |
| **Sequence** | Linear Progression | Horizontal on desktop (flex-row), vertical on mobile. Items connected by subtle line or arrow. |
| **Contrast** | Asymmetric Split | Left: "wrong" state (lighter, secondary color). Right: "correct" state (heavier, primary). |

**Rule enforcement:**
- No two consecutive sections may use the same spatial pattern
- If two consecutive sections share a pattern, the second must use a visual variant (different background, inverted orientation)

---

## 3. SHARED COMPONENTS

### 3.1 `SectionWrapper`

```typescript
// components/SectionWrapper.tsx
interface SectionWrapperProps {
  bg: 'navy' | 'white' | 'gray';
  children: React.ReactNode;
  className?: string;
  id?: string;
}
```
- Applies background color, section padding, scroll-animation trigger
- All page sections are wrapped in this

### 3.2 `AtomicText`

```typescript
// components/AtomicText.tsx
interface AtomicTextProps {
  lines: string[];
  variant: 'stack' | 'flow' | 'emphasis';
  gap?: 'sm' | 'md' | 'lg' | 'xl';
}
```
- Renders text as isolated atomic units
- `stack`: each line is a separate `<p>` with vertical gap
- `flow`: lines combined into paragraph with line breaks
- `emphasis`: first line larger/bolder, rest standard

### 3.3 `SectionLabel`

```typescript
// components/SectionLabel.tsx
// Overline label used in asymmetric splits and indexed layouts
interface SectionLabelProps {
  text: string;
  theme: 'light' | 'dark';
}
```
- 12px uppercase, letter-spaced, secondary color
- Positioned in the narrow column of asymmetric layouts

### 3.4 `CTAButton`

```typescript
// components/CTAButton.tsx
interface CTAButtonProps {
  text: string;
  href: string;
}
```
- Sharp corners (border-radius: 0)
- `--accent` background, white text
- Padding: 16px 32px
- Links to `/executive-data-review` or `#contact` as appropriate

### 3.5 `DomainCard`

```typescript
// components/DomainCard.tsx
// Used in Services and Insights for domain breakdowns
interface DomainCardProps {
  label: string;
  content: string[];
  index: number;
}
```
- Left-aligned index number (large, light)
- Label as subhead
- Content lines as atomic text

### 3.6 `CausalChain`

```typescript
// components/CausalChain.tsx
interface CausalChainProps {
  premise: string[];
  mechanism: string[];
  consequence: string[];
}
```
- 3-zone grid layout
- Center zone has slightly larger text and heavier weight
- Subtle vertical dividers between zones on desktop

### 3.7 `AsymmetricSplit`

```typescript
// components/AsymmetricSplit.tsx
interface AsymmetricSplitProps {
  label: string;
  content: React.ReactNode;
  ratio?: '30-70' | '40-60';
  reverse?: boolean;
  theme: 'light' | 'dark';
}
```

### 3.8 `PrincipleStack`

```typescript
// components/PrincipleStack.tsx
interface PrincipleStackProps {
  lines: string[];
  theme: 'light' | 'dark';
}
```
- Each line is a standalone declaration
- Large vertical gap (`--space-xl`) between items
- Thin horizontal divider (optional, using `--divider-*`) between each

---

## 4. PAGE-BY-PAGE SPECIFICATIONS

---

### 4.1 HOME PAGE (`/`)

**File:** `app/page.tsx`  
**Content source:** `0_DRAFT_Home_page_content.md`  
**Total sections:** 10  

#### Section 1: Hero
- **Pattern:** Definition + Contrast → Asymmetric Split
- **Background:** Navy
- **Layout:** 40/60 split. Left: section label "DataOfis Partners". Right: headline + subtext + CTA.
- **Content (LOCKED):**
  - Headline: "Your data system is not under control."
  - Subtext: "Most organizations operate in a fragmented state — where ownership is unclear, direction is inconsistent, and control is missing."
  - CTA: "Schedule Executive Data Review" → button linking to `/executive-data-review`
- **Typography:** Headline at hero size (56px). Subtext at body (17px), secondary color on navy. CTA button below subtext with `--space-xl` margin-top.
- **Note:** Headline occupies the right 60%, left 40% is mostly negative space with only the small firm label anchored top-left of that zone.

#### Section 2: Executive Problem Patterns
- **Pattern:** Recognition → Principle Stack (Declarative)
- **Background:** White
- **Layout:** Vertical stack, left-aligned within a max-width of 720px, offset left (not centered).
- **Content (LOCKED):**
  - "Different teams bring different numbers to the same meeting."
  - "Reports are produced, but decisions do not change."
  - "Priorities shift from week to week without clear direction."
  - "Ownership is unclear across the data system."
  - "The same questions are asked again and again."
- **Typography:** Each line as body emphasis (17px/600), separated by `--space-xl`. Optional thin divider between each.
- **Section label:** "What We See" — overline positioned above the stack.

#### Section 3: Why Current Efforts Fail
- **Pattern:** Causality → 3-Zone Causal Chain
- **Background:** Gray (separator between two white sections)
- **Layout:** 3-column grid. Left zone (premise): first line. Center zone (mechanism): middle two lines. Right zone (consequence): last line.
- **Content (LOCKED):**
  - "Data initiatives are launched without a clear decision context."
  - "Ownership is fragmented across teams, with no single point of control."
  - "Reporting activity is disconnected from how decisions are actually made."
  - "The system evolves continuously, but without a unifying direction or control"
- **Distribution:** Line 1 → left. Lines 2-3 → center (dominant). Line 4 → right.
- **Section label:** "Why Efforts Fail" — overline above the grid.
- **Mobile:** Stacks vertically, center zone first (reordered for emphasis).

#### Section 4: Firm Definition
- **Pattern:** Definition → Asymmetric Split
- **Background:** Navy
- **Layout:** 30/70. Left: section label "DataOfis Partners". Right: content.
- **Content (LOCKED):**
  - "DataOfis Partners operates as an embedded data leadership layer with full ownership of the data system."
  - "This model establishes clear direction and control, ensuring decisions are consistent across the organization."
- **Typography:** First line as section headline (36px/700). Second line as body (17px), secondary color.

#### Section 5: Operating Model (Reference)
- **Pattern:** Structure → Indexed Narrative
- **Background:** White
- **Layout:** 200px left index + content right. Index shows "Operating Model". Content is the text + a link.
- **Content (LOCKED):**
  - "Work is organized through a structured operating model designed to maintain consistent control across the data function."
  - "See How We Work." → link to `/how-we-work`
- **"See How We Work"** rendered as an inline text link with `--accent` color and subtle underline on hover.

#### Section 6: Intervention Domains (Overview)
- **Pattern:** Structure → Parallel Axes (4 equal columns)
- **Background:** White (continuation — use subtle top border to separate from section 5)
- **Layout:** 4-column grid, each column equal width. Each domain is one column.
- **Content (LOCKED):**
  - "Direction"
  - "Architecture and design"
  - "Organization and control"
  - "Execution and adoption"
- **Typography:** Each domain as subhead (20px/600). Minimal — just the words, generously spaced. Optional: thin left border on each column for visual structure.
- **Section label:** "Domains" — overline above the grid.
- **Mobile:** 2x2 grid.

#### Section 7: Engagement Triggers
- **Pattern:** Situational → Framed Core + Peripheral
- **Background:** Gray
- **Layout:** Central frame contains the trigger list. Section label above.
- **Content (LOCKED):**
  - "A major transformation is about to begin."
  - "A significant data or AI investment is being planned."
  - "Multiple vendors are involved, increasing coordination complexity."
  - "Delivery is under direct scrutiny from leadership."
  - "Leadership changes reset priorities and direction."
- **Typography:** Each trigger as body (17px/400), separated by `--space-lg`. Entire block constrained to max 600px, offset slightly left of center for asymmetry.
- **Section label:** "When This Matters" — overline.

#### Section 8: Credibility
- **Pattern:** Evidence → Compression Block
- **Background:** White
- **Layout:** Narrow column (max 520px), left-aligned (not centered).
- **Content (LOCKED):**
  - "Experience across large-scale data and AI transformations."
  - "Delivery in complex, multi-team and cross-functional environments."
  - "Direct exposure to senior leadership and decision-critical contexts."
- **Typography:** Each line as body (17px/400), `--space-lg` gap. No section headline — just the overline label.
- **Section label:** "Experience" — overline.

#### Section 9: Conversion Framing
- **Pattern:** Framing → Asymmetric Split (inverted: 70/30)
- **Background:** Navy
- **Layout:** 70/30. Left: content. Right: label.
- **Content (LOCKED):**
  - "The Executive Data Review is a focused session to assess your current data system and level of decision control."
  - "It is a structured, senior-level conversation — not a sales call."
- **Typography:** First line as subhead (20px/600) on navy. Second line as body, secondary text on navy.
- **Right column label:** "Entry Point" — overline, vertically centered in column.

#### Section 10: CTA
- **Pattern:** Action → Isolated Block
- **Background:** Navy (continuation from section 9, or a darker shade if needed — use same navy but with extra vertical padding)
- **Layout:** Centered. Single CTA button.
- **Content (LOCKED):**
  - "Schedule Executive Data Review" → CTAButton component
- **Extra top/bottom padding:** `--space-4xl` * 1.5 (210px) to create breathing room.
- **No label, no subtext, no decoration.**

---

### 4.2 HOW WE WORK PAGE (`/how-we-work`)

**File:** `app/how-we-work/page.tsx`  
**Content source:** `0_DRAFT_How_We_Work_page_content.md`  
**Total sections:** 9 (content provides no explicit Hero — section 1 "Model Definition" serves as Hero)

#### Section 1: Model Definition (Hero)
- **Pattern:** Definition → Asymmetric Split
- **Background:** Navy
- **Layout:** 40/60. Left: page title "How We Work" as overline + firm name. Right: content.
- **Content (LOCKED):**
  - "We do not operate through fragmented advisory, governance, or delivery efforts."
  - "We take ownership of the data and AI function as a single system—where direction, structure, and execution operate under unified control."
  - "This is not coordination."
  - "It is full-system ownership."
  - "When these elements are separated, fragmentation persists."
  - "When unified, the system becomes consistent, accountable, and reliable."
  - "The engagement is defined by control of the system—not by projects or services."
- **Typography:** First two lines at section headline size (36px then 20px). "This is not coordination." and "It is full-system ownership." rendered as emphasis pair (contrast pattern within definition). Remaining lines as body, secondary.

#### Section 2: Engagement Logic
- **Pattern:** Causality → 3-Zone Causal Chain
- **Background:** White
- **Layout:** 3-zone grid.
- **Content (LOCKED):**
  - Zone 1 (Premise): "The system operates on a fixed logic." / "Direction is defined first." / "Structure is established to support it." / "Execution operates within that structure."
  - Zone 2 (Mechanism — dominant): "Execution without direction disperses effort without outcome." / "Execution without structure creates inconsistency and loss of control."
  - Zone 3 (Consequence): "Control exists only when this order is maintained." / "This is not a preference." / "It is the condition required for the system to function." / "All work follows this logic—without exception."
- **Section label:** "Engagement Logic"

#### Section 3: Phase Breakdown
- **Pattern:** Sequence → Linear Progression
- **Background:** Gray
- **Layout:** Horizontal progression on desktop (flex-row), items connected by a thin horizontal line or arrow. Vertical on mobile.
- **Content (LOCKED):**
  - Step 1: "Direction is made explicit."
  - Step 2: "Structure is established to support it."
  - Step 3: "Execution operates within that structure."
  - Step 4: "The system then stabilizes into consistent operation."
- **Framing text above:** "The system is established through a defined progression."
- **Framing text below:** "Each phase builds on the previous one. No phase stands alone. Control is established progressively—until the system operates as one."
- **Section label:** "Phases"
- **Each step:** Rendered as a card-like block (no background fill, just text + step number). Numbers in large light type (48px, `--text-on-light-secondary`).

#### Section 4: Roles
- **Pattern:** Structure → Indexed Narrative
- **Background:** White
- **Layout:** Left index (200px) with label "Ownership Layers". Right: content.
- **Content (LOCKED):**
  - "The system operates through clearly defined ownership layers."
  - "Each layer has a distinct responsibility."
  - "No overlap. No ambiguity."
  - "Ownership is structured to ensure coordination across direction, structure, execution, and system design."
  - "Together, these ownership layers ensure the system operates as a single coordinated system under control."
- **"No overlap. No ambiguity."** rendered as emphasis (600 weight) — it is a principle-like declaration within the structure.

#### Section 5: Control Model
- **Pattern:** Causality → 3-Zone Causal Chain
- **Background:** Navy
- **Note:** Section 2 also uses Causality/3-Zone but they are separated by two other sections (3 and 4), which is acceptable.
- **Content (LOCKED):**
  - Zone 1: "Control is established through ownership and enforced through structure."
  - Zone 2 (dominant): "When ownership is unclear, decisions drift." / "When structure is weak, execution diverges."
  - Zone 3: "Control ensures direction is carried through into execution without distortion." / "It is not an overlay." / "It is how the system operates."
- **Section label:** "Control Model"

#### Section 6: Independence
- **Pattern:** Causality → Asymmetric Split (variant to avoid 3 consecutive causal chains)
- **Background:** White
- **Layout:** 30/70. Left: label "Independence". Right: content as atomic text.
- **Content (LOCKED):**
  - "Control requires independence."
  - "When those responsible for delivery influence direction or structure, control is compromised."
  - "Decisions shift toward delivery convenience rather than system integrity."
  - "Independence separates ownership from execution."
  - "This preserves objectivity, protects structure, and ensures the system operates under control—not influence."
- **First line:** rendered at subhead size (20px/600). Remaining at body.

#### Section 7: Engagement Formats
- **Pattern:** Structure → Parallel Axes (3 columns)
- **Background:** Gray
- **Layout:** Intro text spanning full width, then 3-column grid below.
- **Content (LOCKED):**
  - Intro: "The model remains constant." / "The level of involvement adapts."
  - Column 1: "It can be embedded as leadership."
  - Column 2: "It can operate as oversight across initiatives."
  - Column 3: "It can focus on targeted intervention where control is required."
  - Closing (full width below grid): "The format changes based on the situation." / "The system does not." / "Ownership, structure, and execution remain aligned under the same model."
- **Section label:** "Formats"
- **Each column:** Label-style (subhead size), no description needed — the text IS the description.

#### Section 8: Engagement Paths
- **Pattern:** Situational → Framed Core + Peripheral
- **Background:** White
- **Layout:** Central framed block with three entry paths, converging visually.
- **Content (LOCKED):**
  - "Organizations enter from different starting points."
  - "Entry occurs through a direction gap, a control gap, or an execution alignment gap."
  - "The entry point differs."
  - "The destination does not."
  - "All paths converge into a single controlled system."
- **Visual treatment:** The three gaps ("direction gap", "control gap", "execution alignment gap") can be highlighted as inline emphasis or as three small tags/labels above the main text.
- **"All paths converge into a single controlled system."** — rendered as emphasis (20px/600), bottom of section.

#### Section 9: CTA
- **Pattern:** Action → Isolated Block
- **Background:** Navy
- **Content (LOCKED):** "Schedule Executive Data Review" → CTAButton
- **Same treatment as Home CTA.**

---

### 4.3 SERVICES PAGE (`/services`)

**File:** `app/services/page.tsx`  
**Content source:** `0_DRAFT_Services_page_content.md`  
**Total sections:** 6 (no explicit Hero — Section 1 "Scope Statement" serves as Hero)

#### Section 1: Scope Statement (Hero)
- **Pattern:** Definition → Asymmetric Split
- **Background:** Navy
- **Layout:** 40/60. Left: "Services" overline. Right: content.
- **Content (LOCKED):**
  - "We take ownership of the data and AI function as a complete system."
  - "Direction, structure, and execution operate together under a single model of control."
  - "This is end-to-end ownership for how the function is defined, how it operates, and how outcomes are delivered."
  - "All components operate as one coherent system, with no gaps in ownership."
  - "The result is a controlled whole, where the data and AI function operates as a unified system."
- **First line:** Hero headline (56px). Lines 2-4 as body. Last line as subhead emphasis.

#### Section 2: Intervention Domains — Introduction
- **Pattern:** Structure → Compression Block
- **Background:** White
- **Layout:** Narrow column (max 600px), left-aligned.
- **Content (LOCKED):**
  - "Control of the data and AI function is established through coordinated intervention across defined domains that operate together as one system."
  - "Each domain represents a distinct layer of control. These layers are interdependent components that align to form a coherent whole."
  - "The domains define how control is established across the system."
- **Section label:** "Intervention Domains"

#### Section 3: Executive / Leadership
- **Pattern:** Definition → Asymmetric Split
- **Background:** White (use top divider line to separate from section 2)
- **Layout:** 30/70 with index "01" on left.
- **Content (LOCKED):**
  - "Control begins with ownership of direction at the executive level."
  - "This domain defines what decisions matter, how priorities are set, and who holds accountability for the data and AI function as a whole."
  - "Direction is explicitly owned, with defined priorities and a clear view of what must be achieved and in what sequence."
  - "Executive ownership ensures that decisions are guided by a single direction."
  - "Direction becomes stable, visible, and accountable across the organization."
- **Left column:** Large "01" number + "Executive / Leadership" label.

#### Section 4: Operating Model / Control
- **Pattern:** Structure → Indexed Narrative
- **Background:** Gray
- **Layout:** Left index "02" + "Operating Model / Control". Right: content.
- **Content (LOCKED):**
  - "Control is established through a defined operating model."
  - "This domain defines governance, ownership structures, and decision rights."
  - "It specifies system interaction, responsibility structures, and vendor control."
  - "The operating model ensures that interactions, responsibilities, and decisions operate under defined control."
  - "The system functions as a coherent whole, with clear ownership and governed interaction across all components."

#### Section 5: Transformation / Execution
- **Pattern:** Situational → Framed Core
- **Background:** White
- **Layout:** Left index "03" + label. Content in framed block right.
- **Content (LOCKED):**
  - "Execution exists as ongoing activity across initiatives, where delivery is already in motion."
  - "Multiple efforts progress in parallel across teams, timelines, and dependencies. Coordination becomes critical as activity increases."
  - "Execution requires alignment across all moving parts and consistent interaction across teams and workstreams."
  - "When alignment is not maintained, execution diverges. When maintained, execution proceeds as a coordinated system."
- **Last line** rendered as emphasis pair (contrast: "diverges" vs "coordinated system").

#### Section 6: Architecture (Supporting)
- **Pattern:** Causality → 3-Zone Causal Chain
- **Background:** Navy
- **Layout:** 3-zone. Left index "04" takes the place of premise zone.
- **Content (LOCKED):**
  - Zone 1: "04 — Architecture" label
  - Zone 2 (dominant): "Control depends on how the system is structured technically." / "Data flows, system integration, and technical dependencies determine whether the function operates as a coherent system."
  - Zone 3: "These elements either enable consistent interaction and sustained control or introduce structural constraints that limit control." / "Architecture determines whether control is sustainable in practice."
- **CTA** at bottom of this section or as a separate isolated section below: "Schedule Executive Data Review" → CTAButton. Navy continuation.

---

### 4.4 INDUSTRIES PAGE (`/industries`)

**File:** `app/industries/page.tsx`  
**Content source:** `0_DRAFT_Industries_page_content.md`  
**Total sections:** 8

#### Section 1: Hero
- **Pattern:** Definition → Asymmetric Split
- **Background:** Navy
- **Layout:** 40/60. Left: "Industries" overline. Right: content.
- **Content (LOCKED):**
  - "Data can operate as a controlled system with clear ownership and coordinated execution—or remain fragmented across teams without a single point of control."
  - "The distinction is not defined by tools or investment, but by whether the function is owned and run as one system or distributed across separate initiatives."
  - "This defines whether the organization operates with control or fragmentation—and positions the data function accordingly."
- **Line 1:** Hero headline (break at "—or remain" to create contrast). Lines 2-3: body, secondary.

#### Section 2: Target Organizations
- **Pattern:** Situational → Framed Core + Peripheral
- **Background:** White
- **Layout:** Content framed centrally, max 700px, offset left.
- **Content (LOCKED):**
  - "You are operating at a level where data is already embedded across the organization."
  - "Multiple systems, teams, and external vendors are in place. Data supports operations and decisions, but ownership of the data function is not unified."
  - "The organization operates at scale—operational, commercial, or regulatory—where data is a core part of how the business runs."
  - "No single role holds end-to-end responsibility for direction, structure, and execution as one system."
  - "Budgets are allocated. Initiatives are active. Expectations are established."
  - "But control of the data system is not unified."
- **"You are operating at..."** — emphasis (20px/600). Last line ("But control...") — emphasis, slightly separated.
- **Section label:** "Your Organization"

#### Section 3: Organizational Conditions
- **Pattern:** Structure → Indexed Narrative
- **Background:** Gray
- **Layout:** Left index "Conditions". Right: content as atomic lines.
- **Content (LOCKED):** 6 lines, each rendered separately.

#### Section 4: Typical Symptoms
- **Pattern:** Recognition → Principle Stack
- **Background:** White
- **Layout:** Vertical stack, left-aligned, max 720px.
- **Content (LOCKED):** 7 lines, each separated by `--space-xl`.
- **Section label:** "Typical Symptoms"
- **Each line:** thin bottom divider.

#### Section 5: Priority Sectors
- **Pattern:** Situational → Compression Block
- **Background:** Navy
- **Layout:** Narrow column (max 560px).
- **Content (LOCKED):**
  - Intro line + sector list (extract: "financial services, telecommunications, retail and e-commerce, energy and utilities, and logistics and supply chain") → render sectors as individual labels/tags in a horizontal wrap layout below the intro text.
  - Closing lines as body below.
- **Section label:** "Priority Sectors"
- **Sector tags:** border: 1px solid `--divider-on-navy`, padding 8px 16px, inline-flex, gap 8px.

#### Section 6: Fit Criteria
- **Pattern:** Situational → Principle Stack (variant)
- **Background:** White
- **Layout:** Vertical stack with check-mark-like leading indicators (use an em-dash "—" prefix, not actual icons).
- **Content (LOCKED):** 6 lines.
- **Section label:** "Fit Criteria"

#### Section 7: Non-Fit Criteria
- **Pattern:** Situational → Principle Stack (contrasting treatment)
- **Background:** Gray
- **Layout:** Same vertical stack but visually lighter — secondary text color, no dividers.
- **Content (LOCKED):** 6 lines.
- **Section label:** "Non-Fit"

#### Section 8: CTA
- **Pattern:** Action → Isolated Block
- **Background:** Navy
- **Content (LOCKED):** "Establish control of the data system through a structured executive engagement."
- **Render** the text as subhead, with CTAButton "Schedule Executive Data Review" below.

---

### 4.5 INSIGHTS PAGE (`/insights`)

**File:** `app/insights/page.tsx`  
**Content source:** `0_DRAFT_Insights_page_content.md`  
**Total sections:** 8

#### Section 1: Hero
- **Pattern:** Definition → Asymmetric Split
- **Background:** Navy
- **Layout:** 40/60. Left: "Insights" overline. Right: content.
- **Content (LOCKED):**
  - "Control over the data and AI function is a distinct executive position."
  - "In a controlled state, ownership is singular, the system operates as an integrated whole, and decisions are formed within a defined structure."
  - "In a fragmented state, ownership is distributed, the system operates as disconnected parts, and decisions form without consistent control."
  - "This distinction is structural."
  - "It determines whether the function operates as a controlled system or as fragmented activity."
  - "These insights examine that distinction at the level of executive ownership and system integrity."
- **Line 1:** Hero headline. Lines 2-3: Contrast pair (could use subtle left border color differentiation — blue accent for "controlled", no accent for "fragmented"). Lines 4-6: body.

#### Section 2: Domains
- **Pattern:** Structure → Parallel Axes (4 columns)
- **Background:** White
- **Layout:** Intro text full width, then 4-column grid.
- **Content (LOCKED):**
  - Intro: "Insights are structured by system layers through which control over the data and AI function is established."
  - Column 1: "Executive / Leadership — defines direction, priorities, and ownership"
  - Column 2: "Operating Model / Control — establishes structure and enforces control"
  - Column 3: "Transformation / Execution — ensures execution aligns with defined structure"
  - Column 4: "Architecture (Supporting) — supports system operation at the technical level"
  - Closing: "These domains are separate by design. Together, they form the structure through which control is established."
- **Each column:** Domain name as subhead (20px/600), description as body below.
- **Section label:** "Domains"
- **Mobile:** 2-column or stacked.

#### Section 3: Article System
- **Pattern:** Sequence → Linear Progression
- **Background:** Gray
- **Layout:** Horizontal chain on desktop.
- **Content (LOCKED):**
  - Intro: "Each insight follows a fixed analytical structure."
  - Sequence: "Situation → Symptom → Misinterpretation → Mechanism → Consequence"
  - Closing: "This sequence is applied consistently across all content..." / "There are no variations." / "The system defines how each insight is constructed."
- **Sequence rendered as:** 5 connected blocks in a horizontal row, connected by arrows (`→`). Each block contains one word. Blocks are not cards — just text with spacing.
- **Section label:** "Article System"

#### Section 4: Core Topics
- **Pattern:** Recognition → Principle Stack
- **Background:** White
- **Layout:** Vertical stack, max 720px.
- **Content (LOCKED):** 7 lines.
- **Section label:** "Core Topics"

#### Section 5: System Mechanisms
- **Pattern:** Causality → 3-Zone Causal Chain
- **Background:** Navy
- **Content (LOCKED):** 5 lines distributed across 3 zones.
- **Section label:** "Mechanisms"

#### Section 6: Situational Triggers
- **Pattern:** Situational → Framed Core
- **Background:** White
- **Content (LOCKED):** 6 lines.
- **Section label:** "When Issues Surface"

#### Section 7: Reading Paths
- **Pattern:** Structure → Parallel Axes (3 columns)
- **Background:** Gray
- **Layout:** Intro text, then 3 columns.
- **Content (LOCKED):**
  - "By system layer"
  - "By symptom"
  - "By situation"
- **Each path:** Rendered as a label with subtle interactive hint (could be future link targets). For now, static text.
- **Closing:** "Each path provides structured access without prioritization or bias. Navigation is defined by the system."

#### Section 8: Authority Signal
- **Pattern:** Definition → Compression Block
- **Background:** White
- **Layout:** Narrow column, max 520px.
- **Content (LOCKED):** 6 lines.
- **Section label:** "Authority"

---

### 4.6 ABOUT PAGE (`/about`)

**File:** `app/about/page.tsx`  
**Content source:** `0_DRAFT_About_page_content.md`  
**Total sections:** 5 (no explicit Hero provided — add Hero section)

#### Section 0: Hero (ADDED — template placeholder)
- **Pattern:** Definition → Asymmetric Split
- **Background:** Navy
- **Layout:** 40/60. Left: "About" overline. Right: headline.
- **Content (PLACEHOLDER):**
  - Headline: "A firm defined by the system it enforces."
  - Subtext: (none — let negative space dominate)
- **Note:** This is the only content NOT from the locked files. It serves as a structural placeholder. The client should replace if desired.

#### Section 1: Why This Firm Exists
- **Pattern:** Definition → Asymmetric Split
- **Background:** White
- **Layout:** 30/70. Left: "Existence" label. Right: content.
- **Content (LOCKED):**
  - "Most organizations do not operate the data and AI function as a controlled system."
  - "Ownership is not defined end-to-end. Responsibility is fragmented across functions, vendors, and initiatives. Direction, structure, and execution exist, but not as a single system under control."
  - "This creates a structural condition where control is absent by design."
  - "This firm exists because that condition persists."
  - "It exists to establish control over the data and AI function as one accountable"
- **"This firm exists because that condition persists."** — emphasis (20px/600), separated by extra spacing.

#### Section 2: Founder
- **Pattern:** Structure → Indexed Narrative
- **Background:** Gray
- **Layout:** Left: "Founder" index. Right: content.
- **Content (LOCKED):** 4 lines.

#### Section 3: Model Origin
- **Pattern:** Causality → 3-Zone Causal Chain
- **Background:** White
- **Layout:** 3-zone.
- **Content (LOCKED):**
  - Zone 1: "The model exists because the data and AI function is structurally separated into direction, structure, and execution." / Lines about direction, structure, execution each defined without enforcement/control/alignment.
  - Zone 2 (dominant): "This separation results in the absence of system-level accountability." / "No component is responsible for the function as a whole." / "The model was defined to remove this condition."
  - Zone 3: "It integrates direction, structure, and execution into a single accountable system." / "It is not layered onto existing structures." / "It becomes the controlling mechanism of the function."

#### Section 4: Principles
- **Pattern:** Principle → Principle Stack (Declarative)
- **Background:** Navy
- **Layout:** Vertical stack, each line isolated with large spacing.
- **Content (LOCKED):**
  - "Control is defined by outcomes, not activity."
  - "A single point of accountability owns the function."
  - "Responsibility is not distributed across functions or vendors."
  - "Parallel systems are not maintained."
  - "Execution operates only under defined direction and established control."
  - "Vendors do not define direction or structure."
  - "These rules are enforced without exception."
- **Typography:** Each line at subhead (20px/600), white on navy. Large `--space-xl` gaps. Optional thin white divider at 10% opacity between each.

#### Section 5: Working Expectations
- **Pattern:** Situational → Framed Core
- **Background:** White
- **Layout:** Each "This requires" line as a standalone declaration. "This is not compatible" and "Organizations not prepared" lines separated with extra gap as disqualification boundary.
- **Content (LOCKED):** 6 lines.
- **Section label:** "Working Expectations"

---

### 4.7 EXECUTIVE DATA REVIEW PAGE (`/executive-data-review`)

**File:** `app/executive-data-review/page.tsx`  
**Content source:** `0_DRAFT_Executive_Data_Review_page_content.md`  
**Total sections:** 8

#### Section 1: Hero
- **Pattern:** Recognition → Principle Stack
- **Background:** Navy
- **Layout:** Content left-aligned, max 800px, each line separated.
- **Content (LOCKED):**
  - "Decisions vary across teams, even when based on the same data."
  - "Different stakeholders arrive at conflicting interpretations, and reported outcomes are questioned rather than relied upon."
  - "Activity is visible across initiatives, but it does not align into a single direction."
  - "Data is present across the organization, yet control over how it informs decisions is not established."
  - "A controlled system is visible through consistency, alignment, and trust."
  - "A fragmented state is visible through variation, contradiction, and uncertainty."
- **Last two lines:** Contrast pair — "controlled system" line in accent color (`--text-on-navy-accent`), "fragmented state" line in secondary color.
- **Page title "Executive Data Review"** as overline above the stack.

#### Section 2: Definition
- **Pattern:** Definition → Asymmetric Split
- **Background:** White
- **Layout:** 30/70. Left: "Definition". Right: content.
- **Content (LOCKED):** 4 lines. Line 3 ("This is not an audit, not advisory, and not a technical assessment.") as emphasis — negation pattern.

#### Section 3: Audience
- **Pattern:** Situational → Principle Stack (each "When..." as declaration)
- **Background:** Gray
- **Layout:** Vertical stack.
- **Content (LOCKED):** 6 "When..." lines.
- **Section label:** "When This Is Necessary"
- **Each "When"** rendered as a repeating pattern — the word "When" could be pulled out as a left-anchored overline-style element per line.

#### Section 4: Assessment Scope
- **Pattern:** Structure → Indexed Narrative
- **Background:** White
- **Layout:** Left: "Scope". Right: content.
- **Content (LOCKED):** 4 lines.

#### Section 5: Outcome
- **Pattern:** Causality → 3-Zone Causal Chain
- **Background:** Navy
- **Content (LOCKED):** 4 lines distributed across zones.
- **Section label:** "Outcome"

#### Section 6: Next Step Paths
- **Pattern:** Contrast → Asymmetric Split
- **Background:** White
- **Layout:** 40/60 split. Left: "Proceed to establish control..." Right: "Or continue operating under known constraints..."
- **Content (LOCKED):**
  - "Following the Review, a clear decision emerges." (intro above the split)
  - Left (heavier): "Proceed to establish control across decisions, data, and execution."
  - Right (lighter): "Or continue operating under known constraints, with fragmentation and inconsistency remaining."
  - "The choice is explicit and consequence-aware." (closing below the split)
- **Left side:** Primary text, `--accent` left border (4px). Right side: secondary text color, no accent.

#### Section 7: Form
- **Pattern:** Structure → Compression Block
- **Background:** Gray
- **Layout:** Narrow column, max 560px.
- **Content (LOCKED):** 4 lines.
- **Section label:** "Engagement Form"

#### Section 8: Direct Contact (CTA)
- **Pattern:** Action → Isolated Block
- **Background:** Navy
- **Content (LOCKED):**
  - "Initiate the Executive Data Review through direct engagement."
  - "Confirm access to executive stakeholders."
  - "Proceed to schedule the Review."
- **Render:** First line as subhead. Second and third as body. CTAButton "Schedule Executive Data Review" below (or "Contact" if a contact form/email is available).

---

## 5. FILE STRUCTURE

```
app/
├── layout.tsx              # Root layout with Inter font, nav, footer
├── globals.css             # CSS variables, base styles, animations
├── page.tsx                # Home page
├── how-we-work/
│   └── page.tsx
├── services/
│   └── page.tsx
├── industries/
│   └── page.tsx
├── insights/
│   └── page.tsx
├── about/
│   └── page.tsx
├── executive-data-review/
│   └── page.tsx
components/
├── SectionWrapper.tsx
├── AtomicText.tsx
├── SectionLabel.tsx
├── CTAButton.tsx
├── AsymmetricSplit.tsx
├── PrincipleStack.tsx
├── CausalChain.tsx
├── IndexedNarrative.tsx
├── LinearProgression.tsx
├── ParallelAxes.tsx
├── CompressionBlock.tsx
├── FramedCore.tsx
├── Footer.tsx
```

## 6. ANIMATION SYSTEM (globals.css)

```css
/* Scroll-triggered fade-in */
.section-animate {
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 600ms cubic-bezier(0.16, 1, 0.3, 1),
              transform 600ms cubic-bezier(0.16, 1, 0.3, 1);
}

.section-animate.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger children */
.stagger-children > * {
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 600ms cubic-bezier(0.16, 1, 0.3, 1),
              transform 600ms cubic-bezier(0.16, 1, 0.3, 1);
}

.stagger-children.visible > *:nth-child(1) { transition-delay: 0ms; opacity: 1; transform: translateY(0); }
.stagger-children.visible > *:nth-child(2) { transition-delay: 80ms; opacity: 1; transform: translateY(0); }
.stagger-children.visible > *:nth-child(3) { transition-delay: 160ms; opacity: 1; transform: translateY(0); }
.stagger-children.visible > *:nth-child(4) { transition-delay: 240ms; opacity: 1; transform: translateY(0); }
.stagger-children.visible > *:nth-child(5) { transition-delay: 320ms; opacity: 1; transform: translateY(0); }
.stagger-children.visible > *:nth-child(6) { transition-delay: 400ms; opacity: 1; transform: translateY(0); }
.stagger-children.visible > *:nth-child(7) { transition-delay: 480ms; opacity: 1; transform: translateY(0); }
```

## 7. INTERSECTION OBSERVER HOOK

```typescript
// hooks/useScrollReveal.ts
import { useEffect, useRef } from 'react';

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
```

## 8. RESPONSIVE BREAKPOINTS

```css
/* Mobile-first approach */
/* sm: 640px */
/* md: 768px */
/* lg: 1024px */
/* xl: 1280px */

/* All asymmetric splits collapse to single column below md */
/* All parallel axes collapse to 2-col below lg, 1-col below sm */
/* 3-zone causal chains stack vertically below md (center zone first) */
/* Linear progressions go vertical below md */
/* Section padding reduces to 80px vertical below md, 48px below sm */
```

## 9. CRITICAL IMPLEMENTATION NOTES

1. **Content is LOCKED.** Do not modify any text from the content markdown files. Render exactly as written.
2. **No consecutive pattern repetition.** If implementing causes two identical spatial patterns to be adjacent, use a visual variant (inverted orientation, different background).
3. **Asymmetry by default.** Never center-align a section's content unless it is the CTA isolated block pattern.
4. **One pattern per section.** Do not mix spatial systems within a single section.
5. **Background rotation:** Navy → White → Gray → Navy is the general rhythm. Never place two navy sections consecutively (the CTA exception: if the previous section is also navy, merge them visually with extra padding instead of a separate section).
6. **Typography does the heavy lifting.** No icons, no illustrations, no decorative SVG. All visual hierarchy comes from type size, weight, spacing, and position.
7. **Navigation already exists** in the project — reuse it. Do not rebuild.
8. **Inter font** loaded via `next/font/google` in `layout.tsx`.
9. **All CTA buttons** link to `/executive-data-review` unless the page IS the EDR page, in which case they link to a contact action (mailto or form anchor).
10. **No gradients, no shadows, no border-radius** (except 0). This is sharp, structural, consulting-grade design.
