# CTA inventory (site-wide)

Generated from the codebase. **Reference** paths are logical routes (no locale prefix); runtime URLs use `withLocale(locale, path)` → `/{locale}/…` (e.g. `en`, `az`, `ru`).

---

## Summary table

| Page (app route) | Section | CTA title (label) | Reference (href) | Style |
|------------------|---------|-------------------|------------------|--------|
| `/` (home) | Hero — `HeroAsymmetricSplit` | See Why Analytics / AI Still Fails | `/why-analytics-ai-fail` | Hero text link (navy hero, white, underline on hover) |
| `/about` | Hero — `HeroAsymmetricSplit` | Request Decision Diagnostic | `/decision-diagnostic/intake` | Hero text link (navy hero, white, underline on hover) |
| `/why-analytics-ai-fail` | Hero — `HeroPrincipleStack` | See the Structural Cause | `/decision-systems` | Hero text link (navy hero, white, underline on hover) |
| `/decision-systems` | Hero — `HeroPrincipleStack` | See How a Decision Becomes a System | `/decision-systems-design` | Hero text link (navy hero, white, underline on hover) |
| `/decision-systems-design` | Hero — `HeroPrincipleStack` | See How the Structure Works | `/how-decisions-are-structured` | Hero text link (navy hero, white, underline on hover) |
| `/how-decisions-are-structured` | Hero — `HeroPrincipleStack` | See Why Diagnostic Comes First | `/how-decisions-are-structured#current-state` | Hero text link (navy hero, white, underline on hover) |
| `/decision-systems-in-practice` | Hero — `HeroPrincipleStack` | See Why Diagnostic Starts with One Decision | `/decision-systems-in-practice#before` | Hero text link (navy hero, white, underline on hover) |
| `/decision-diagnostic` | Hero — `HeroPrincipleStack` | Start Decision Diagnostic | `/decision-diagnostic/intake` | Hero text link (navy hero, white, underline on hover) |
| `/decision-diagnostic` | What you receive — `AsymmetricSplitDefinitionOutcomeStack` (`id="output"`) | Start Decision Diagnostic | `/decision-diagnostic/intake` | Section text link (white section, dark `#0A1628`, underline on hover) |
| `/decision-diagnostic` | What this is not — `AsymmetricSplitReframe` (`id="what-this-is-not"`) | Request Decision Diagnostic | `/decision-diagnostic/intake` | Section text link (navy `SectionWrapper`, white/92, underline on hover, right-aligned) |
| `/decision-diagnostic/intake` | Hero — `ActionFrame` | *(none — `cta` omitted)* | — | — |
| *(global)* | Header overlay — `NavigationOverlay` (Decision Diagnostic category) | Request a Decision Diagnostic | `/decision-diagnostic/intake` | Primary button (`#2B5CE6` fill, white 14px semibold, square corners) + description line below |
| *(global)* | Footer — `Footer` | → Diagnostic | `/decision-diagnostic/intake` | Primary button (`#2B5CE6` fill, white 13px semibold, square corners) |
| *(global)* | Intake form — `DiagnosticIntakeForm` | Request Decision Diagnostic / Sending… | *(form submit → API, not in-app route)* | Primary button (`#2B5CE6` fill, full width on small screens) |

---

## Style reference (components)

| Style id | Component(s) | Notes |
|----------|----------------|-------|
| **Hero text link (navy hero)** | `HeroAsymmetricSplit`, `HeroPrincipleStack` | `next/link`, `text-white` / `text-white/92`, `font-semibold`, `min-h-11`, `hover:underline` |
| **Section text link (light)** | `AsymmetricSplitDefinitionOutcomeStack` | Dark text `#0A1628`, `hover:underline` |
| **Section text link (navy band)** | `AsymmetricSplitReframe` | `text-white/92`, right-aligned row, `hover:underline` |
| **Nav / overlay primary button** | `NavigationOverlay` | Inline `background: #2B5CE6`, white label, optional muted description (`active.cta` / `cat.cta` in stacked nav) |
| **Footer primary button** | `Footer` | Tailwind `bg-[#2B5CE6]` `hover:bg-[#1E4AC4]`, label `→ Diagnostic` |
| **Form submit** | `DiagnosticIntakeForm` | Same blue fill; submits intake payload |

---

## Source files

| Area | File |
|------|------|
| Home hero | `app/[locale]/page.tsx` |
| About hero | `app/[locale]/about/page.tsx` |
| Other page heroes | `app/[locale]/why-analytics-ai-fail/page.tsx`, `decision-systems/page.tsx`, `decision-systems-design/page.tsx`, `how-decisions-are-structured/page.tsx`, `decision-systems-in-practice/page.tsx`, `decision-diagnostic/page.tsx` |
| Intake hero | `app/[locale]/decision-diagnostic/intake/page.tsx` |
| Navigation CTA data | `components/NavigationOverlay.tsx` (`NAV_CATEGORIES` → `decision-diagnostic.cta`) |
| Footer CTA | `components/Footer.tsx` |
| Form CTA | `components/DiagnosticIntakeForm.tsx` |

---

## Pages without in-page marketing CTAs (in this audit)

- `/insights` — custom hero, no `cta` prop pattern in use.
- `DefinitionCompressionBlock` on Decision Systems Design — no `cta` passed for “What a decision system is”.

---

*End of inventory.*
