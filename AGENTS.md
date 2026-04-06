<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Layout & responsive (site product rules)

- **Content shell:** `max-w-[1280px] mx-auto` with horizontal padding **`px-10 max-md:px-5`** (same as **`px-5 md:px-10`**). Do not introduce **`max-w-[1440px]`** or **`px-6 lg:px-8`** for primary page columns; keep one gutter story with `SectionWrapper` and `Footer`.
- **Hero grid breakpoints:** **`/`** home hero, **Services**, **About**, and **Industries** heroes use a **two-column grid from `md`**. Other **home** narrative bands (Firm definition, Domains shell, etc.) mostly split at **`lg`**. **How We Work** hero also uses **`md`** two columns.
- **Fixed nav chip:** `Header` uses `left: var(--nav-chip-left)`. In **`globals.css`**, from **`lg` (1024px)+** `--nav-chip-left` equals **`--page-x`** (viewport gutter, 2.5rem from the left edge). Below **`lg`**, a **calc** aligns the chip to the inner edge of a centered **1280px** column when the viewport is wider than 1280px. Ultra-wide desktop: chip is **not** aligned to the text column by design.
- **`SectionWrapper` vertical scale:** default section padding tops out at **`2xl:py-[120px]`** (not 140px) so very large viewports stay a bit denser; pages can still override with `className` when a band must stay compact.
