# DIY Portfolio Starter

Welcome to the DIY Portfolio starter project. This is a nearly empty website with one page that says "Hello world" and a ready-made set of design choices (colors, fonts, and spacing) already wired in. It's meant to be customized by you amd over the day you turn it into your own portfolio.

There's very little here, on purpose. You build the rest yourself, because building it is what lets you change it later without fear.

## Before you start

You need two free tools on your computer first:

- **Node**, which runs the website on your laptop.
- **Git**, which saves your work.

The **[Before the day: setup](docs/lesson-plan.md#before-the-day-setup)** section of the lesson plan walks you through installing both (plus Cursor, GitHub, and Vercel). Do that first.

If you do not have this project on your laptop yet: click **Use this template** on GitHub to make your own copy, then clone *that* copy to your laptop. **[Get the starter project](docs/lesson-plan.md#step-1-make-your-own-copy-on-github-in-the-browser)** in the lesson plan walks through both steps.

## Set it up (once)

Open this folder in **Cursor**, then open the built-in terminal (**Terminal → New Terminal**). Run:

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
- `src/styles/tokens.css` — your design choices in one place: colors, fonts, spacing. You'll meet this in Activity 1.
- `src/styles/global.css` — a small baseline of styles to build on.
- `src/components` — reusable pieces like a navigation bar or footer. Empty for now; you'll fill it later.
- `src/layouts` — page shells that wrap your content. Empty for now; you'll add one in the afternoon.
- `src/content` — where case studies and other writing will live. Empty for now.
- `content-source` — a drop folder for content you're moving in from another site (a CSV export, old posts, images). Not published; you unpack it into `src/content`.

## Everything else

The full plan for the day lives in the **[lesson plan](docs/lesson-plan.md)**. Go back to it any time you forget a step.
