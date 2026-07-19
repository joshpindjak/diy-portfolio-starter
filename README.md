# Portfolio Starter

This is where you begin in the Build and Ship Your Portfolio workshop. It's a nearly empty website with one page that says "Hello world" and a ready-made set of design choices (colours, fonts, and spacing) already wired in. Over the day you turn it into your own portfolio.

There's very little here, on purpose. You build the rest yourself, because building it is what lets you change it later without fear.

## Before you start

You need two free tools on your computer first:

- **Node**, which runs the website on your laptop.
- **Git**, which saves your work.

The workshop setup guide walks you through installing both. Do that first.

## Set it up (once)

Open this folder in your terminal and run:

```bash
npm install
```

This downloads the pieces the project needs. You only do this once.

## Run it

```bash
npm run dev
```

This starts the site on your own computer. The terminal prints a web address, usually http://localhost:4321. Open that in your browser to see the page.

Leave this running while you work. Every time you save a file, the page updates by itself. To stop it, click the terminal and press Control + C.

## Where things are

- `src/pages` — your pages. Start with `index.astro`, the home page.
- `src/styles/tokens.css` — your design choices in one place: colours, fonts, spacing. You'll meet this in Activity 1.
- `src/styles/global.css` — a small baseline of styles to build on.
- `src/components` — reusable pieces like a navigation bar or footer. It doesn't exist yet; you'll create it later on.
- `content-source` — a drop folder for content you're moving in from another site (a CSV export, old posts, images). Not published; you unpack it into `src/content`.

## Everything else

The full plan for the day lives in the lesson plan. Go back to it any time you forget a step.
