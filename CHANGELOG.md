# Changelog

All notable changes to this starter are recorded here. The newest version is at
the top. Version numbers follow [semantic versioning](https://semver.org):
given `MAJOR.MINOR.PATCH`, a patch is a fix, a minor adds something without
breaking what exists, and a major changes things in a way that could break.

## [0.2.0] - 2026-08-29

Pilot-session and August workshop updates. Agent guidance is reorganised;
the lesson plan matches the 29 August schedule; the repo is a GitHub Template.

### Added

- Six loop-specific Cursor skills in `.cursor/skills/`: `work-section`,
  `make-it-yours`, `mdx-components`, `content-migration`, `deploy`, and
  `git-workflow`.
- A short "starter repo at a glance" section in `.cursorrules` that points at
  the rules and skills tables.
- Empty placeholders for `src/components/`, `src/layouts/`, and `src/content/`
  so the workshop folders are ready before attendees build into them.
- GitHub Template mode so attendees can use "Use this template" instead of
  forking.

### Changed

- Lesson plan rewritten for the pilot and then retimed for the 29 August
  workshop day (9:00 AM – 4:00 PM schedule).
- README and lesson-plan copy tightened for attendees.
- Deploy guidance moved out of always-on `.cursor/rules/` into the
  on-demand `deploy` skill; always-on rules stay on tokens, Astro, and
  content collections.
- `package-lock.json` refreshed to match current dependency versions.

### Removed

- Duplicate skill drafts that lived under `docs/` (tokens, Astro, content,
  deploy).
- `docs/starter-repo-build-spec.md` (internal build notes, not for attendees).

## [0.1.0] - 2026-07-19

Initial release. The starting point used for the first class.

### Added

- A working Astro project that runs with `npm install` then `npm run dev`.
- A two-layer design token system in `src/styles/tokens.css`: raw base values
  and a semantic layer that pages and components use.
- A minimal `src/styles/global.css` that wires the page to the tokens.
- A single `index.astro` "Hello world" page.
- Four agent rules in `.cursor/rules/` (design tokens, Astro conventions,
  content, deploy) and a top-level `.cursorrules` overview.
- A `content-source/` folder for dropping in existing content to migrate.
- An attendee-facing `README.md`.
- A sitemap (`@astrojs/sitemap`) and `public/robots.txt` for search engines.
- `astro check` runs as part of `npm run build` to catch mistakes early.
- An `.env.example` template for future secrets.
- An `.nvmrc` pinning the Node version, so everyone runs the same one.
