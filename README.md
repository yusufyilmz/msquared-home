# M Squared Home – Elegant + shadcn Starter

An elegant, quiet-luxury Next.js 15 starter for a small-batch home decor brand, using shadcn-style UI primitives.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Biome for linting & formatting
- shadcn-style UI components (Button, Input, Textarea, Card)

## Getting started

```bash
npm install
npm run dev
```

## Copy & configuration

All titles, texts, and URLs live in:

- `config/siteCopy.ts` – site metadata, hero copy, featured pieces, Instagram handle, CTA labels

Themes live in:

- `config/themes.ts`

To switch the global visual style, change:

```ts
export const activeThemeId: ThemeId = "warmLuxury";
```

to one of:

- `"cozyMinimal"`
- `"warmLuxury"` (default, elegant)
- `"earthyArtisan"`
- `"scandinavianClean"`

The selected theme is injected as CSS variables at the `<body>` level, so the entire site updates from a single config.

## Images & Instagram

For now, the layout uses Unsplash placeholders that match a neutral, elegant decor vibe.

Replace them with:

- Exported stills from the Instagram account, or
- Self-hosted images on a CDN / public storage

Look for comments in:

- `components/hero-section.tsx`
- `components/featured-products-section.tsx`
- `components/about-preview-section.tsx`
- `components/social-proof-section.tsx`

## Linting & formatting

Use Biome:

```bash
npm run lint
npm run format
```

Rules are configured in `biome.json`.

## Next steps

- Wire `/products` to real product data (JSON, CMS, or your builder)
- Add `/products/[slug]` for detail pages
- Replace placeholder imagery with M Squared Home assets
- Tune copy in `siteCopy.ts` to match the final brand voice
