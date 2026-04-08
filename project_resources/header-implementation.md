# Header implementation — specification

This document describes the **fixed global header** used across the Partners site: layout, spacing, typography sizes, contrast behavior, and source files. Values match the current codebase unless noted.

---

## Overview

| Piece | Role | File(s) |
|-------|------|---------|
| Logo | Standalone link to main domain (`https://www.dataofis.az`) | `components/DataOfisLogo.tsx`, `components/Header.tsx` |
| Nav trigger | Opens full-screen navigation overlay | `components/Header.tsx`, `components/NavigationOverlay.tsx` |
| Language switcher | Locale links (EN / AZ / RU) | `components/LanguageSwitcher.tsx`, `components/Header.tsx` |
| Grid alignment | Horizontal inset from page shell | `app/globals.css` (`--nav-chip-left`, `--nav-chip-right`, `--page-x`) |

The header is **not** inside a max-width container; it uses **CSS variables** so the left and right edges align with the same horizontal rhythm as `SectionWrapper` (`px-5` / `px-10`).

---

## Layout (single horizontal row)

### Left cluster

- **Position:** `position: fixed`
- **Top:** `48px`
- **Left:** `var(--nav-chip-left)`
- **Display:** `flex`, `align-items: center`
- **Gap between logo and nav trigger:** `40px` (`gap-[40px]`)

### Right cluster (language)

- **Position:** `position: fixed`
- **Top:** `48px`
- **Right:** `var(--nav-chip-right)`
- **Wrapper:** `<nav aria-label="Language">`

### Stacking

- **z-index:** `z-50` (Tailwind `50`) for both fixed blocks.
- Navigation overlay uses a higher z-index when open (`NavigationOverlay`).

---

## Page horizontal alignment (`globals.css`)

These variables define where the header sits relative to the viewport and the **1280px** content column.

| Token | Default | `@media (min-width: 768px)` | `@media (min-width: 1024px)` |
|-------|---------|-----------------------------|------------------------------|
| `--page-x` | `1.25rem` (20px) | `2.5rem` (40px) | unchanged |
| `--nav-chip-left` | `calc((100vw - min(1280px, 100vw)) / 2 + var(--page-x))` | same formula | **`var(--page-x)`** |
| `--nav-chip-right` | same as left | same | **`var(--page-x)`** |

**Interpretation**

- **&lt; 1024px:** On wide viewports, chips align to the **inner edge** of a centered 1280px column plus `--page-x`.
- **≥ 1024px:** Chips use **`--page-x` only** (viewport gutter: 20px mobile, 40px from 768px up).

---

## Logo — sizes and assets

**Component:** `DataOfisLogo`  
**Usage in header:** `className="h-[28px] w-[140px]"`

| Property | Value |
|----------|--------|
| **Rendered box width** | `140px` |
| **Rendered box height** | `28px` |
| **Implementation** | Outer `<span class="relative block overflow-hidden">` + `next/image` with `fill` |
| **Object fit** | `object-cover object-center` (crops square PNG assets to the slot) |
| **`sizes` (Image)** | `(min-width: 768px) 220px, 180px` (hint for responsive srcset) |

### Asset swap (dark vs light sections)

| Background context | Asset file |
|--------------------|------------|
| Dark / navy (detected) | `project_resources/dark.png` |
| Light / white (detected) | `project_resources/white.png` |

**Prop:** `onDarkSection: boolean` — driven by `Header` scroll/resize logic.

### Logo link wrapper

- **Element:** `<a href="https://www.dataofis.az">`
- **Classes:** `block shrink-0 opacity-100 hover:opacity-85 [transition:none]`
- **Accessibility:** `aria-label="Go to dataofis.az"`

**Note:** Logo dimensions are **the same on all breakpoints** in the current implementation (no `md:` / `sm:` size overrides on the header logo).

---

## Navigation trigger — sizes and typography

**Element:** `<button type="button">`  
**Purpose:** Opens overlay (`setNavOpen(true)`).

| Property | Value | Tailwind / notes |
|----------|--------|------------------|
| **Min height** | `44px` | `min-h-11` (2.75rem) |
| **Horizontal padding** | `8px` | `px-2` |
| **Vertical padding** | `8px` | `py-2` |
| **Gap (icon ↔ label)** | `8px` | `gap-2` |
| **Hamburger icon** | `16 × 16` px | SVG `width="16" height="16"`, `viewBox="0 0 18 18"`, `strokeWidth="1.4"` |
| **Label font size** | `16px` | inline `fontSize: "16px"` |
| **Label font weight** | `600` | inline `fontWeight: 600` |
| **Label text** | `Partners` | — |
| **Letter spacing (label)** | tight | `tracking-tight` |
| **Transition** | color + opacity, 150ms | `transition-[color,opacity] duration-150 ease-out` |
| **Hover** | opacity + full white / full navy text | `hover:opacity-90` + tone-specific `hover:text-*` |

### Nav trigger colors (tone from `onDarkSection`)

| Tone | Text |
|------|------|
| Dark section (`onDarkSection === true`) | `rgba(255,255,255,0.9)`, hover `white` |
| Light section (`onDarkSection === false`) | `rgba(10,22,40,0.9)`, hover `rgba(10,22,40,1)` |

---

## Language switcher (header variant) — sizes and typography

**Component:** `LanguageSwitcher` with `variant="header"` and `onDarkSection`.

### Shell (`getHeaderShell`)

| Property | Value | Tailwind / notes |
|----------|--------|------------------|
| **Min height** | `44px` | `min-h-11` |
| **Horizontal padding** | `8px` | `px-2` |
| **Vertical padding** | `8px` | `py-2` |
| **Gap (segments)** | `6px` | `gap-1.5` |
| **Base font size** | `12px` | `text-[12px]` |
| **Base font weight** | `500` | `font-medium` |
| **Tracking** | tight | `tracking-tight` |
| **User select** | disabled | `select-none` |

### Active locale link

| Property | Value |
|----------|--------|
| **Font weight** | `600` (`font-semibold`) |
| **Dark section** | `text-white` |
| **Light section** | `text-[#0A1628]` |
| **Pointer** | `pointer-events-none` (not clickable when active) |

### Inactive locale links + separators

Uses `transition-[color,opacity] duration-150 ease-out` on links. Separator and inactive colors differ for dark vs light; see `LanguageSwitcher.tsx` (`sep`, `linkInactive`).

---

## Background tone detection (header)

**File:** `components/Header.tsx`  
**State:** `onDarkSection` (boolean)

| Detail | Value |
|--------|--------|
| **Sample Y** | `64` px from top of viewport (`elementFromPoint`) |
| **Sample X** | Three points: ~4% width (min 12px), 50% width, ~96% width (max width−12) |
| **Luminance** | `0.299R + 0.587G + 0.114B` on first opaque `backgroundColor` up the DOM |
| **Hysteresis** | If avg luminance ≤ `0.45` → dark; if ≥ `0.55` → light; else keep previous |
| **Throttle** | `requestAnimationFrame` on `scroll` (passive) and `resize` |

This single flag drives **logo asset**, **nav trigger colors**, and **header language switcher colors**.

---

## Related (not the fixed chip row)

- **`NavigationOverlay`:** Full-screen menu at higher z-index; top bar height `72px`; primary nav uses fluid typography (`clamp` + `dvh`/`vw`). See `components/NavigationOverlay.tsx`.
- **Page scroll offset:** `html { scroll-padding-top: 5.5rem; }` in `globals.css` — offsets in-page anchors from fixed chrome; not part of header pixel sizes but affects perceived alignment with sections.

---

## Quick reference — all fixed header pixel sizes

| Element | Width | Height | Other spacing |
|---------|-------|--------|----------------|
| Logo slot | **140px** | **28px** | — |
| Logo ↔ nav trigger | — | — | **40px** gap |
| Nav trigger min touch target | — | **44px** min | **8px** padding; **8px** icon–label gap |
| Nav icon | **16px** | **16px** | — |
| Nav label | — | **16px** font | weight **600** |
| Language shell | — | **44px** min | **8px** padding; **6px** internal gaps |
| Language text | — | **12px** font | weight **500** (inactive), **600** (active) |
| Fixed top offset (both sides) | — | — | **48px** from top |
| Horizontal inset | — | — | **`--nav-chip-left` / `--nav-chip-right`** (see table above) |

---

## Source files

- `components/Header.tsx`
- `components/DataOfisLogo.tsx`
- `components/LanguageSwitcher.tsx`
- `app/globals.css` (`:root` + media queries for `--page-x` / `--nav-chip-*`)
- `components/NavigationOverlay.tsx` (menu opened from header trigger)
