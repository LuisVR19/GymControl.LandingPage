# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # dev server (Turbopack)
npm run build    # production build — run this to verify no TS/compile errors
npm run lint     # ESLint
```

No test suite exists in this project.

## Stack

- **Next.js 16.2.6** (App Router) + **React 19.2.4** + **TypeScript**
- **Tailwind CSS v4** (PostCSS plugin) — imported in `globals.css` but used only for the CSS reset and responsive utility classes; layout is done with inline styles
- **Google Fonts** loaded via `next/font` in `app/layout.tsx`: Inter (`--font-ui`), Inter Tight (`--font-display`), JetBrains Mono (`--font-mono`)

## Architecture

Single-page marketing site. The page (`app/page.tsx`) composes ~12 section components in order.

### Content layer

All copy, labels, numbers, and data live in **`app/data/content.json`**. Components import this file directly — never hardcode strings into JSX.

### Styling system

Two complementary layers:

1. **CSS custom properties** in `app/globals.css` `:root` — colors (`--accent`, `--page-bg`, `--ink-*`, `--cream*`, `--line*`) and font stacks. Use `var(--name)` everywhere; never use raw hex values.

2. **Inline styles** — all layout, spacing, typography, and visual properties are expressed as inline `style={{...}}` objects in each component. This is intentional and consistent; do not switch components to Tailwind classes.

### Responsive strategy

Responsive overrides live in the `/* RESPONSIVE */` section at the bottom of `globals.css`. The pattern is:

```css
@media (max-width: 768px) {
  .some-class { grid-template-columns: 1fr !important; }
}
```

The `!important` is required to override inline styles. To make an element responsive:
1. Add a `className` to the element (e.g. `className="price-grid"`)
2. Add the override in `globals.css` under the responsive section

The mobile breakpoint is **768px**. Desktop styles live entirely in inline `style={{}}` props.

### Client components

Mark a component `"use client"` only when it uses browser APIs or React hooks (`useState`, `useEffect`). Currently: `Nav`, `Hero`, `FAQ`, `Footer`. Server components (no directive) cannot use hooks.

### Icons

SVG icons are in `app/components/icons/`. Named exports from `app/components/icons/index.tsx`. Add new icons there following the same `({ size = 20 }: { size?: number })` signature pattern.

### Phone/browser mockups

`PhoneMockup` (`app/components/PhoneMockup.tsx`) renders a styled phone shell; pass content as `children`. `ProductoMocks.tsx` contains `PhoneFrame`, `BrowserFrame`, `ClientAppMock`, and `OwnerAppMock` for the Producto section's more detailed mockups. Mockup content is purely presentational — it mirrors the data in `content.json` but is hardcoded for visual fidelity.
