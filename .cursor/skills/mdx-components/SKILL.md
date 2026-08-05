---
name: mdx-components
description: >-
  Small MDX components for case studies (Callout, optional Scroller). Use when
  adding personality asides, metrics, or moving text bars in Loop 6 or in MDX
  content.
---

# MDX Components (Loop 6)

Small reusable pieces for case studies and writing. Use them inside MDX so authors can drop in callouts and other personality without hand-styling each page.

## When to add these

Only when the attendee asks for personality components or needs structured asides in a case study. Do not invent a large component library. Two or three well-made pieces go far.

## Callout

A flexible aside for a tip, quote, or a large metric in a case study.

Suggested API:

```astro
---
interface Props {
  title?: string;
  metric?: string; // large number or short result, e.g. "40%"
}
const { title, metric } = Astro.props;
---
<aside class="callout">
  {metric && <p class="callout__metric">{metric}</p>}
  {title && <p class="callout__title">{title}</p>}
  <div class="callout__body">
    <slot />
  </div>
</aside>
```

Style with semantic tokens only (`--color-surface`, `--color-border`, `--space-*`, `--text-*`, `--radius`). No raw hex or px.

In MDX:

```mdx
<Callout metric="40%" title="Faster onboarding">
  Teams reached first value in under a week.
</Callout>
```

## Scroller (optional)

A bar of moving text across the top, only if the attendee wants that look. Keep it one small component, prefer CSS animation over a JS library, and respect `prefers-reduced-motion`.

## Wiring MDX

Register components where the project already configures MDX (for example passing components into the MDX renderer on the work template, or an `mdx` components map). Import from `src/components/`. Prefer plain `.astro` components; do not add React for a callout.

## Rules for the agent

- Keep components small and optional. Ask before adding more than Callout (and Scroller if requested).
- Props over one-off variants. One Callout that handles text and metrics beats three near-duplicate components.
- Tokens only. Follow the design-tokens rule.
- Go light on motion. See the **make-it-yours** skill.
- Content stays in the MDX file; the component only presents it.
