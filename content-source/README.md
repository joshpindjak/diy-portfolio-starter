# Content to bring in

This folder is a holding area for content you already have somewhere else and
want to move into the site. Think of it as your inbox during a move: you drop
the boxes here, then unpack them into the right rooms.

It is **not** part of the live site. Nothing in here is published. The real,
published content lives in `src/content/`.

## What to put here

Anything you are migrating from another platform, in whatever form you have it:

- A CSV or spreadsheet exported from Squarespace, Webflow, Notion, or similar.
- A Markdown or text export of old posts or case studies.
- A folder of images from your current site or portfolio.
- Even rough notes and copy pasted into a text file.

Organise it however makes sense to you. For example:

```
content-source/
  squarespace-export.csv
  old-case-studies/
    project-a.md
    project-b.md
  images/
```

## How to use it

1. Drop your files in here.
2. Ask the agent to turn them into site content, for example:
   "Take `content-source/squarespace-export.csv` and create case study entries
   in `src/content/`."
3. The agent reads from here and writes proper content files into
   `src/content/`, matching the site's schema.
4. Check the result on the site, then you can delete what you no longer need
   from this folder.

Once everything is moved over, this folder can sit empty. You can keep it for
the next time you have content to bring in.
