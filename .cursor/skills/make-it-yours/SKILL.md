---
name: make-it-yours
description: >-
  Restyle the whole site via design tokens and base element styles (Loop 6).
  Use when the user wants their own look, says warmer/tighter/darker, picks
  fonts or colours, or asks to customise tokens.css / global.css.
---

# Make It Yours (Loop 6)

Restyle the whole site by changing tokens and base element styles, not by editing every page. The attendee is the client. Investigate their taste, then encode it in the design system.

## Change tokens, not components

All visual direction goes through `src/styles/tokens.css`.

- Swap or regenerate the accent scale (Radix custom colours work well: https://www.radix-ui.com/colors/custom). Step 9 is the solid accent; 10 hover; 11 accessible accent text.
- Optionally replace the neutral scale for a warmer, cooler, or tinted gray.
- Point semantic tokens at the new base values: `--color-accent`, `--color-link`, `--color-bg`, `--font-body`, `--font-heading`, `--radius`, spacing, type sizes.
- Do not chase "warmer", "tighter", or "darker" by restyling individual components. One token edit should move the whole site.

## Taste checklist

Work through these with the attendee; encode answers as tokens:

1. **Who is this for?** B2B, consumer, illustration-led, etc. That shapes restraint vs expression.
2. **Fonts.** At most two families (or one used well). Set `--font-sans` / `--font-serif` / `--font-mono`, then point `--font-body` and `--font-heading` at them. System fonts are fine; webfonts go in the base layer with a comment.
3. **Colour.** Accent scale; optional contrast colour for inline code; whether links use accent or contrast; light, dark, or a toggle (a toggle needs a small island — ask first).
4. **Shape.** `--radius` at 0 (square), soft (`--radius-2` / `--radius-3`), or pill-like. Small choice, big tone.
5. **Spacing and width.** Adjust semantic spacing and `--content-width` so the layout feels considered.

## Style base elements

After tokens feel right, extend `src/styles/global.css` so Markdown and MDX inherit a consistent voice:

- Headings and hierarchy (`h1`–`h3` at least)
- Links
- Paragraphs (usually inherit from body)
- Lists, blockquotes
- Inline `code` and fenced code blocks if they write

Still use semantic tokens only. Personality components (callouts, scrollers) belong in the **mdx-components** skill.

## Motion

Go light. Heavy animate-in effects read like a default template. A little motion can feel lovely; do not add libraries or scroll theatres unless asked.

## Rules for the agent

- Restyle via tokens and global base styles first.
- Never hard-code hex, px, rem, or font names into pages or components.
- Ask before adding a theme-toggle island or new dependencies.
- Keep the palette and type scale tight. Restraint reads as designed.
- Follow the design-tokens rule for the two-layer system.
