# Starter Repo Build Spec

This is the brief for building the workshop starter repo. Hand it to the Cursor agent, or work through it yourself. The goal is a repo that runs, shows a "Hello world" page, and ships a complete two-layer design system, with no components and no page layouts, because the students build those.

Keep it barebones. Every piece a student doesn't need on arrival is a piece that can confuse them. The design system is the one thing that must be complete and correct, because the whole day maps to it.

---

## What this repo is

A near-blank Astro project used as the starting point for a one-day workshop where designers build and ship their own portfolio site. Attendees will click "Use this template" on GitHub to get their own copy.

## What to build, and what not to

**Build:**

- A working Astro project that runs with `npm install` then `npm run dev`.
- A complete design token system in `src/styles/tokens.css`, with a base layer and a semantic layer.
- A minimal global stylesheet in `src/styles/global.css` that wires the body to the semantic tokens and nothing more.
- A single `src/pages/index.astro` page that says "Hello world" and imports the global styles.
- The four skill files in `.cursor/rules/`, so the agent follows the conventions during the workshop.
- A `README.md` with setup steps.
- The `.gitignore` that Astro generates (must exclude `node_modules` and `dist`).

**Do not build:**

- No components. `src/components/` should be empty or absent. Students build nav, footer, cards, and everything else.
- No page layouts. No `src/layouts/`. Students build the layout in the afternoon.
- No extra pages. Just `index.astro`.
- No content collections yet. Students set up `src/content/` and its schema during the workshop.
- No fonts bundled. Reference system fonts in the tokens by default, with a comment showing where a student would add their own.
- No UI framework (no React, Vue, Svelte). Plain Astro and CSS is all this needs.

---

## Step 1: scaffold the Astro project

Create a minimal Astro project. When prompted, choose the empty or minimal template, TypeScript optional, and install dependencies.

```bash
npm create astro@latest -- --template minimal
```

Strip it back to a single `index.astro` if the template adds more. Confirm `npm run dev` serves a page.

## Step 2: the design token system

Create `src/styles/tokens.css` with two clearly separated layers. This is the heart of the repo. Comment it well, because students read it in Activity 1 to understand the concept.

The **base layer** holds raw values: a neutral 12-step scale, an accent 12-step scale, a raw size scale, radii, and font families. The **semantic layer** maps those raw values to named jobs. Components must only ever use the semantic layer.

```css
/* =========================================================
   BASE LAYER
   Raw values. Your unlabelled palette.
   Do not reference these directly in components.
   ========================================================= */
:root {
  /* Neutral scale (1 = lightest, 12 = darkest).
     Regenerate your own at radix-ui.com/colors */
  --gray-1: #fcfcfc;
  --gray-2: #f9f9f9;
  --gray-3: #f0f0f0;
  --gray-4: #e8e8e8;
  --gray-5: #e0e0e0;
  --gray-6: #d9d9d9;
  --gray-7: #cecece;
  --gray-8: #bbbbbb;
  --gray-9: #8d8d8d;
  --gray-10: #808080;
  --gray-11: #646464;
  --gray-12: #202020;

  /* Accent scale. Swap these for your own colour in Loop 6.
     Step 9 is the solid accent, 10 its hover, 11 accessible text. */
  --accent-1: #fbfdff;
  --accent-2: #f4faff;
  --accent-3: #e6f4fe;
  --accent-4: #d5efff;
  --accent-5: #c2e5ff;
  --accent-6: #acd8fc;
  --accent-7: #8ec8f6;
  --accent-8: #5eb1ef;
  --accent-9: #0090ff;
  --accent-10: #0588f0;
  --accent-11: #0d74ce;
  --accent-12: #113264;

  /* Raw size scale, used for spacing and layout */
  --size-1: 0.25rem;
  --size-2: 0.5rem;
  --size-3: 1rem;
  --size-4: 1.5rem;
  --size-5: 2.5rem;
  --size-6: 4rem;
  --size-7: 6rem;

  /* Raw radii */
  --radius-1: 0.25rem;
  --radius-2: 0.5rem;
  --radius-3: 0.8rem;

  /* Font families. System fonts by default so nothing has to load.
     Add your own webfont here later, then point --font-sans at it. */
  --font-sans: system-ui, -apple-system, sans-serif;
  --font-serif: Georgia, 'Times New Roman', serif;
  --font-mono: ui-monospace, 'SF Mono', Menlo, monospace;

  /* Raw type scale (1 = smallest, 5 = largest) */
  --font-size-1: 0.875rem;
  --font-size-2: 1rem;
  --font-size-3: 1.25rem;
  --font-size-4: 1.75rem;
  --font-size-5: 2.5rem;
}

/* =========================================================
   SEMANTIC LAYER
   Raw values given a job. This is what components use.
   Change these in Loop 6 and the whole site follows.
   ========================================================= */
:root {
  /* Colour */
  --color-bg: var(--gray-1);
  --color-surface: var(--gray-2);
  --color-border: var(--gray-6);
  --color-text: var(--gray-12);
  --color-text-muted: var(--gray-11);
  --color-accent: var(--accent-9);
  --color-accent-hover: var(--accent-10);
  --color-link: var(--color-accent);

  /* Type */
  --font-body: var(--font-sans);
  --font-heading: var(--font-sans);
  --font-code: var(--font-mono);

  /* Type sizes. These are what components and pages use. */
  --text-sm: var(--font-size-1);
  --text-base: var(--font-size-2);
  --text-lg: var(--font-size-3);
  --text-xl: var(--font-size-4);
  --text-2xl: var(--font-size-5);

  /* Spacing */
  --space-xs: var(--size-1);
  --space-sm: var(--size-2);
  --space-md: var(--size-3);
  --space-lg: var(--size-4);
  --space-xl: var(--size-5);
  --space-2xl: var(--size-6);

  /* Radius */
  --radius: var(--radius-2);

  /* Content width */
  --content-width: 42rem;
}
```

## Step 3: the minimal global stylesheet

Create `src/styles/global.css`. Keep it truly minimal: a box-sizing reset, sensible margins off, and the body wired to the semantic tokens. Do **not** style headings, links, blockquotes, lists, or code here. Those are the student's job in Loop 6. The point is that a page looks intentional the moment they start, but there's plenty left for them to make their own.

```css
@import './tokens.css';

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
}

body {
  background: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

.container {
  max-width: var(--content-width);
  margin-inline: auto;
  padding: var(--space-xl) var(--space-md);
}
```

## Step 4: the Hello world page

Create `src/pages/index.astro`. It imports the global styles and renders a single greeting inside the container, so the token environment is visibly working.

```astro
---
import '../styles/global.css';
---
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Hello world</title>
  </head>
  <body>
    <main class="container">
      <h1>Hello world</h1>
      <p>This is your starting point. Clear it out and build your About page here.</p>
    </main>
  </body>
</html>
```

## Step 5: the skill files

Create a `.cursor/rules/` folder and add the four skill files from the workshop `skills/` folder: `design-tokens`, `astro-conventions`, `content-collections`, and `deploy`. These make the agent follow the repo's conventions during the workshop, which is what keeps everyone's output consistent and on the tokens.

## Step 6: the README

Create `README.md` aimed at the attendee. Keep it short: what this is, the one-time setup, and how to run it. Point at the full lesson plan for everything else.

```markdown
# Portfolio Starter

The starting point for the Build and Ship Your Portfolio workshop.
A blank Astro project with a two-layer design system and nothing else.
You build the components and pages.

## Run it

```bash
npm install
npm run dev
```

Then open the local address it prints (usually http://localhost:4321).

## Where things live

- `src/pages`: your pages. Start by editing `index.astro`.
- `src/styles/tokens.css`: the design system. Meet it in Activity 1.
- `src/styles/global.css`: a minimal baseline. You'll build on it.
- `src/components`: empty. You'll fill it.

Full walkthrough is in the lesson plan.


## Step 7: verify before you publish

- `npm install` then `npm run dev` serves the Hello world page.
- The page background, text colour, and font all come from tokens (change a semantic token and confirm the page changes).
- `src/components` is empty and there is no `src/layouts`.
- `.gitignore` excludes `node_modules` and `dist`.
- Commit, push to GitHub, and mark the repo as a **template** in its settings so attendees can "Use this template".

---

## A note on the two colour scales

The example accent is a blue, and the neutral is a plain gray. They're deliberately generic. Students replace the accent (and optionally the neutral) with their own in Loop 6 using the Radix custom colour tool. Because everything downstream references the semantic tokens, swapping the scale restyles the whole site. That cascade is the lesson the entire day is built around, so make sure the wiring is correct: semantic tokens point at base tokens, components point at semantic tokens, and nothing hard-codes a raw value.
