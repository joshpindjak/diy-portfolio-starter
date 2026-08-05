---
name: content-migration
description: >-
  Migrate portfolio content from Framer, Webflow, Squarespace, or exports into
  Astro content collections via content-source/. Use when the user drops
  exports, old posts, CSVs, or images to rebuild as src/content entries.
---

# Content Migration (Loop 5)

When the attendee is rebuilding a portfolio from Framer, Webflow, Squarespace, a custom site, or loose notes, migrate into Astro content collections. Do not paste old CMS data into page components.

## Staging folder

Drop exports and source material into the top-level `content-source/` folder.

```
content-source/
  projects.csv          # or .md, .json, copied drafts
  images/               # raw images from the old site
  notes.md
```

`content-source/` is a staging area only. It is never published. Do not link to it from pages. Keep it in `.gitignore` if the exports are large or private; otherwise leave it local and unreferenced.

## Workflow

1. **Read the source.** Open whatever they dropped in `content-source/`. Skim fields and structure before writing anything.
2. **Map to the schema.** Match source fields to the projects schema in `src/content/config.ts` (title, summary, role, year, optional client, tags, cover, featured). If a useful field is missing from the schema, add it there first, then use it.
3. **Write collection entries.** Create one `.md` or `.mdx` file per project under `src/content/projects/`. Put narrative body content below the frontmatter. Clean up export junk (CMS ids, empty meta, leftover shortcodes).
4. **Move images to `public/`.** Copy usable images into `public/images/` (or similar). Reference them from the site root, like `/images/tabba-cover.png`. Do not import from `content-source/` in the built site.
5. **Wire pages to the collection.** Homepage featured grid and the work template should query `getCollection`, not hard-coded arrays. See the **work-section** skill.

## Rules for the agent

- Prefer rebuilding cleanly over a perfect one-to-one export. Rough copy is fine; structure matters more.
- One project, one content file. No mega-files of every case study.
- Ask before deleting anything in `content-source/`.
- Do not invent a CMS or add a content plugin unless the user asks.
- Style with design tokens. Follow the design-tokens and content-collections rules.
