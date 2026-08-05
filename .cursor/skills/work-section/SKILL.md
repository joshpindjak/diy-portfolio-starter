---
name: work-section
description: >-
  Build the portfolio work section (Loop 5): homepage work grid, About route,
  reusable case-study template, related projects via tags. Use when scaffolding
  the work/index pages, project cards, getCollection queries, or case study
  templates.
---

# Work Section (Loop 5)

Build the site’s work surface once: a homepage grid, a reusable case-study template, and About moved to its own route. Content comes from the projects collection — never hard-coded arrays in pages.

## Pages to build

1. **Home (`src/pages/index.astro`)** — short intro plus a work grid of featured projects (`featured: true`).
2. **About (`src/pages/about.astro`)** — move the morning About content here.
3. **Case study template** — one dynamic route (for example `src/pages/work/[slug].astro`) that renders any projects entry. **This is the most valuable page of the day.** Build it once; every future case study is a new content file.
4. **Optional** — `/now` or a writing page. If writing needs repeating entries, add a second collection; reuse the same template pattern. See the content-collections rule.

## Components

- **`ProjectCard`** — one project: title, summary, cover, link to the case study. Used on the homepage grid and in “Related projects.”
- Keep cards small. Style with semantic tokens only.

## Data

```ts
import { getCollection } from 'astro:content';

const projects = await getCollection('projects');
const featured = projects.filter((p) => p.data.featured);
```

- Schema and frontmatter live in the content-collections rule (`src/content/config.ts`).
- New project = new file under `src/content/projects/`.
- If a field is missing, add it to the schema first.

## Related projects

On a case study page: query the collection, exclude the current entry, keep entries that share at least one `tag`. Cap at about three. If none match, fall back to other featured projects or omit the section.

## Migrating old content

If the attendee is bringing work from Framer, Webflow, or exports, use the **content-migration** skill and the `content-source/` folder.

## Rules for the agent

- Do not hard-code project data into pages.
- Prefer one work template over one-off case study pages.
- Do not invent a CMS. File-based collections are the default.
- Use the existing site layout once Loop 4 is done (`BaseLayout` with nav/footer). A separate case-study layout is fine later if that content needs a different frame; do not fork a new document shell per project.
- Tokens only for styling.
