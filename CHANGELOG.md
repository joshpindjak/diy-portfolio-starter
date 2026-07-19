# Changelog

All notable changes to this starter are recorded here. The newest version is at
the top. Version numbers follow [semantic versioning](https://semver.org):
given `MAJOR.MINOR.PATCH`, a patch is a fix, a minor adds something without
breaking what exists, and a major changes things in a way that could break.

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
