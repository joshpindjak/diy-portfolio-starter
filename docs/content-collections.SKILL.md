# Content Collections

This site stores its content as files, using Astro Content Collections. Project case studies, and any other structured content, live as Markdown or MDX files with typed frontmatter. This keeps content separate from layout and easy to edit.

## Why files, not a CMS

For a single-author portfolio, file-based content is the right default. It is fast, version-controlled in Git, has no second service to log into, and the content travels with the repo. A hosted CMS is only worth it if the attendee specifically wants a no-code editing UI later. Default to content collections.

## Structure

Content lives in `src/content/`, organized by collection.

```
src/content/
  projects/
    tabba.mdx
    safeops.mdx
    apteo.mdx
```

Each collection has a schema defined in `src/content/config.ts` that types the frontmatter. This catches mistakes at build time and keeps every entry consistent.

```ts
import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    role: z.string(),
    year: z.number(),
    cover: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { projects };
```

## A project entry

```mdx
---
title: Tabba
summary: A browser extension that turns the new tab into a focus suite.
role: Design and build
year: 2025
cover: /images/tabba-cover.png
featured: true
---

The body of the case study goes here, written in Markdown.
Add images, headings, and sections as needed.
```

## Rules for the agent

- New case studies are new files in the relevant collection. Do not hard-code project data into pages.
- Pages query the collection and render entries through components. The work template page takes a single entry and lays it out. The homepage queries featured entries and renders cards.
- Keep the frontmatter schema consistent. If a new field is needed, add it to the schema in `config.ts` so every entry stays typed.
- Use the schema to drive the UI. For example, `featured: true` controls what shows on the homepage.
- Reference design tokens for all styling. See `design-tokens.SKILL.md`.

## The work template

The most valuable page in the site is the reusable work template: one page layout that renders any project entry. Build it once, and every future case study is just a new content file. The attendee should leave with this working, because it is the thing they reuse forever.
