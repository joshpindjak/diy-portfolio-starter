
# Lesson Plan

> **Workshop hours:** 9:00 AM – 4:00 PM. The order of activities is fixed; times below are the schedule for the day.

**Build and ship your own portfolio site** 
One day, from a blank project to a live site on your own domain, styled with a design system that's actually yours.

This is the full plan for the day and a reference you can keep. Every part of the workshop in order, and every terminal command you'll run, what it does, and when. Come back to it whenever you forget a step. It lives in your project repo and [online](https://github.com/joshpindjak/diy-portfolio-starter).

You don't need to memorise anything.

---

## What you're building, and why this way

Today we'll build a simple portfolio mini-website that you can use as a foundation for your actual portfolio website. We'll be building it with code, not a template. Starting with Astro + design tokens, the final website is deployed via Github and Vercel and linked to your own domain by the end of the day.

You'll start from a near-blank starter repo: a working Astro project with a "Hello world" page, a design system of example tokens already wired up, but nothing else. You build the components and pages yourself. This is deliberately barebones, building the pieces is how you understand them, and how you'll build the confidence to maintain your site and expand it in the future. 

**A word on the technical parts:** Some of today's lesson plan is command line, Git, and actual deployment in Vercel. Product and web design rests on understanding how the thing you're designing is actually built. If you don't know the structure, you design against invisible constraints and hand off work that doesn't survive contact with production. Learning to see past your own toolset is the whole skill.

You're learning a new muscle today, not just a checklist. I'll give you Cursor rules and skills that let the agent handle the fiddly parts, but I'll show you what's underneath them first. Training wheels you can take off, not simply prompting into a black box. You could theoretically use Cursor/AI Agents to do everything for you, but I firmly believe it's important to understand the underlying concepts so you can maintain your site in the future. 

**We'll work in loops:** Every section ends with something real, live, and shareable. You'll have a page on the internet before our midday break today.

---

## Before the day: setup

Please get through this before you arrive. We do a setup check first thing, but every minute installing is a minute not building. If anything won't cooperate, message me ahead of time.

Open your terminal to run these. On **Mac** that's the Terminal app. On **Windows**, use PowerShell (search for it in the Start menu).

### 1. Cursor

Download and install Cursor and sign in with a paid plan. This is the editor and AI agent we use all day. In the future, Cursor is the only thing you would need to pay for in order to maintain your site. So in essence, Cursor is replacing Webflow/Framer/Squarespace, etc. 

### 2. Git

**Mac:** Git usually comes with the developer tools. Check:

```bash
git --version
```

If it prints a version, you're set. If instead a dialog pops up offering to install the "command line developer tools", click Install and let it run. That's Git arriving. Then check again.

**Windows:** Git is not installed by default. Check first:

```powershell
git --version
```

If it's missing, install it:

```powershell
winget install --id Git.Git
```

Then **close and reopen PowerShell** and run `git --version` again. (`winget` is built into Windows 10 and 11, so there's nothing to install first.)

### 3. Node

Node runs your site on your laptop. Check whether you have it:

```bash
node --version
```

If it prints `v18` or higher, you're done. If it says "command not found", install it.

**Everyone, the simple way:** go to [nodejs.org](https://nodejs.org), download the **LTS** version, run the installer, accept the defaults. Close and reopen your terminal, then run `node --version` to confirm.

**Or from the terminal.** Mac: `brew install node` (see Homebrew below). Windows: `winget install OpenJS.NodeJS.LTS`.

### 4. Homebrew (Mac only)

Homebrew installs other tools from the terminal. **It does not come with macOS**, so you'll likely need to install it. Check:

```bash
brew --version
```

If it says "command not found", paste this single line into your terminal and press enter:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

It takes a few minutes and will ask for your Mac password. When it finishes it usually prints two extra commands under a heading like "Next steps". **Run those two lines.** They're what makes `brew` available in your terminal. Then confirm with `brew --version`.

*Windows users: skip this. You have `winget` already.*

### 5. GitHub CLI

This lets your terminal talk to GitHub without wrestling with passwords. Check:

```bash
gh --version
```

If it's missing:

- **Mac:** `brew install gh`
- **Windows:** `winget install --id GitHub.cli`

Close and reopen your terminal, then confirm with `gh --version`.

### 6. Accounts

- A **[GitHub account](https://github.com)** (free). This is where your code lives. As we work, we'll be "committing" (aka saving) your updates to a repo that you own. Think of these commits as checkpoints in a video game where you can save your progress.
- A **[Vercel account](https://vercel.com)** (free). Sign up *with* your GitHub account so both are linked together. This is what puts your site online. The Hobby/free plan on Vercel is quite generous 

### 7. Bring your raw material

- **Your content.** Copy, images, case study material, your work history. Rough is fine.
- **Your taste.** A moodboard, a few sites you love, a favourite accent colour. Come with opinions. We go deep on this after lunch.
- **Laptop and charger.**

> **Stuck on any of this?** Don't burn your evening on it. Message me, and if it's still broken on the day, we'll fix it in the first half hour.

---

## How the day flows

| Time          | Loop                                    | You'll finish with                    |
| ------------- | --------------------------------------- | ------------------------------------- |
| 9:00 – 9:25   | Setup check                             | A working machine                     |
| 9:25 – 10:05  | Get the starter running                 | The project on your laptop            |
| 10:05 – 10:25 | **Activity 1:** Meet your design system | The tokens that will drive everything |
| 10:25 – 11:20 | **Activity 2:** Build your About page   | A page you designed, on the tokens    |
| 11:20 – 11:50 | **Loop 3:** Ship it                     | That page live on the internet        |
| 11:50 – 12:00 | Debrief                                 | Why one page doesn't scale            |
| 12:00 – 13:00 | Lunch                                   |                                       |
| 13:00 – 13:40 | **Loop 4:** Into components             | Reusable nav, footer, and a layout    |
| 13:40 – 14:40 | **Loop 5:** Content and work            | A homepage and a case study template  |
| 14:40 – 14:50 | Break                                   |                                       |
| 14:50 – 15:30 | **Loop 6:** Make it yours               | Your own design system                |
| 15:30 – 16:00 | **Loop 7:** Ship and share              | A live site on your domain            |

---

# Morning

## 9:00 – 9:25: Setup check

Hello and welcome! Let's make sure your machine works before we start building.

1. Start by opening the Cursor desktop app
2. Click Open Project
3. Create a new folder on your computer anywhere you'd like
4. In the top menu → Terminal → New Terminal

Tell Git who you are. Every save gets tagged with your name and email. You usually just have to do this once per computer. In the terminal, run these two commands with your name and email address replaced:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Next, sign in to GitHub from the terminal. GitHub doesn't take passwords in the terminal anymore, so the CLI opens a browser, you click Authorize, and you're in.

```bash
gh auth login
```

Choose GitHub.com, HTTPS, and authenticate through the browser when prompted.

## 9:25 – 10:05: Starter project + Cursor setup

There are two halves to this: first you make your **own copy of the starter on GitHub**, then you bring that copy **down to your laptop**. Both matter, and in that order.

### Step 1: Make your own copy on GitHub (in the browser)

Go to **[joshpindjak/diy-portfolio-starter](https://github.com/joshpindjak/diy-portfolio-starter)** and click the green **"Use this template"** button → **Create a new repository**.

- **Name it** whatever you like: `my-portfolio`, `portfolio`, `jane-website`.
- Leave it **Public** (Vercel's free plan is happiest this way, and it costs you nothing).
- Click **Create repository**.

You now have your own repo, on your own GitHub account, with all the starter files in it. This is where your site will live online, and what Vercel will read from later this morning.

> **Why "Use this template" and not "Fork"?** A fork is for contributing changes *back* to someone else's project. A template is for starting your own thing from a known-good beginning. You want the second one — this is your site now, not a copy of mine.

### Step 2: Bring your copy down to your laptop

On **your new repo** page, click the green **Code** button and copy the HTTPS URL. It should look like `https://github.com/your-username/my-portfolio.git`.

In Cursor's welcome screen, click **Clone repo** → **Clone from URL**, and paste **your** URL. Cursor asks where to save it — pick a folder you'll remember (`Documents/Coding` is fine) — and it opens the project for you.

Then open the terminal in Cursor (**Terminal → New Terminal**) and get the site running:

```bash
npm install
npm run dev
```

1. `npm install` downloads what the project needs. Once per project.
2. `npm run dev` runs the site locally at an address like `http://localhost:4321`. Open it, see "Hello world", and leave it running all day. It updates as you edit.

### Step 3: Check you're wired up to your own repo

One quick command, and it's worth understanding what it tells you:

```bash
git remote -v
```

`origin` is just a nickname for "the GitHub repo this folder talks to". You should see **your** username in that URL. If you do, you're set for the whole day: your saves have somewhere to go, and Vercel will find them.

> **If you see `joshpindjak` instead**, you've cloned my starter rather than your own copy. Easy fix — this points your folder at a fresh repo of your own and pushes everything up:
>
> ```bash
> git remote remove origin
> gh repo create my-portfolio --public --source=. --remote=origin --push
> ```
>
> Run `git remote -v` again to confirm your username now shows. (`gh` is the GitHub CLI you installed before today, which is why this works without a browser.)

When you want to work on your website in the future, open the project in Cursor and simply run `npm run dev` so you can see the local version in your browser. Think of this as your local testing ground while you're working on your project before pushing to prod (live to the public).

### The two ways to work in Cursor

We will use two main methods of working in Cursor:

**1. The editor and terminal:** You read the code, make the edits, run the commands. Use it when you want to know exactly what's happening, which is most of the time when you're learning. There's also an Agent panel which you can use to chat/describe things and it writes code for you across your project. 

**2. The Agent window:** This is a simplified view of Cursor which acts more as a chat interface. You describe what you want and it writes and edits code across files. Its best feature is **checkpoints**: automatic snapshots taken before the agent changes anything, so if it goes off the rails you can restore back to a point in the conversation and try again. Use it for generating, exploring, and anything you'd rather not type by hand.

Three things about checkpoints that matter, straight from Cursor's docs:

- **Checkpoints are not version control:** They're temporary, cleaned up after your session.
- **They only track the agent's changes:** Any manual code edits that you make aren't captured in the "checkpoints" feature of Cursor.
- **Git is the permanent history.**

So they're a scratch-space undo button, not a substitute for saving your work. Good habit: commit to Git *before* you hand the agent a big task. Then if the checkpoint restore misbehaves, you still have a clean point to return to. This is exactly why we learn Git today rather than trusting the tool to remember for us.

Your starter repo also includes **Cursor rules and skills**: instructions the agent reads so it produces consistent, token-based code instead of generic slop. Always-on rules live in `.cursor/rules/` (tokens, Astro, content). Loop-specific skills live in `.cursor/skills/` (work section, migration, make it yours, and more). I'll show you what they are doing so they never feel like magic.

## 10:05 – 10:25: Activity 1: Meet your design system

Before you build anything, let's look at the design system that's going to drive it. This will feel familiar, because it's the same idea as variables and styles in Figma.

Open `src/styles/tokens.css`. It's preloaded with some boilerplate CSS variables will be used when building your site. There are two main "layers" primitive vs. semantic:

**The primitive layer** is your raw values. A 12-step colour scale, raw sizes, font families. Think of it as your unlabelled palette in Figma before you've decided what anything is for.

```css
:root {
  /* base: raw values */
  --gray-1: #fcfcfc;
  --gray-12: #202020;
  --accent-9: #0090ff;
  --font-sans: system-ui, -apple-system, sans-serif;
  --size-3: 1rem;
  --font-size-2: 1rem;
}
```

**The semantic layer** gives those raw values a job. Not "gray 12", but "this is the text colour". Not "size 3", but "this is medium spacing". This is the layer your components will actually use.

```css
:root {
  /* semantic: values with meaning */
  --color-text: var(--gray-12);
  --color-bg: var(--gray-1);
  --color-accent: var(--accent-9);
  --font-body: var(--font-sans);
  --text-base: var(--font-size-2);
  --space-md: var(--size-3);
}
```

**The one rule that makes this work:** components reference the semantic layer, never the raw base values. Exactly like binding a Figma component to a variable instead of pasting a raw hex. Do that, and changing one token restyles the whole site at once.

Here's the good news for right now: the starter already has sensible example tokens. **You don't need to touch them yet.** Build on them as they are. This afternoon, in Loop 6, you'll swap in your own colours, fonts, and spacing, and watch everything you've built update in one move. That moment is the whole reason we set it up this way. For now, just know the system is there, and that everything you build should point at it.

Before we move on, feel free to drop in your favorite color as `--accent-9` and later on, you'll start to see that color when we add in more components, hyperlinks, etc.

## 10:25 – 11:20: Activity 2: Build your About page

Time to make something, and to see the design system working. We're building one page: **your "About Me" page, a simplified, digital version of your resume.** We'll give it a proper home page and move this to `/about` later this afternoon.

Open `src/pages/index.astro`, clear out the "Hello world", and build your About page right there in that one file. Think about the content you are using here, and then how you might want to design it. This page usually contains: Who you are, what you've worked on, how to reach you. 

Use the Cursor Agent, try things, have fun with it. Try asking the agent to create a page grid, contact form (doesn't need to work yet), or a table/list showing your previous work experience. If you have existing Figma designs, you can simply upload a screenshot of a section or component and ask it to code it up. You can also integrate with the Figma MCP but I haven't found it to be 100% perfect anyway. While usually this page is a one-off set of components, it's good to begin thinking in systems, as in, are there components you could build once and use multiple times? 

The one thing that matters: **style it with the tokens, not with raw values.** Reach for `var(--color-text)` and `var(--space-md)`, not a hand-typed hex or pixel value. The design-tokens rule in `.cursor/rules/` keeps the agent honest about this, so if you're prompting, it'll follow the rule. This is what makes your page "part of the system": when you change the tokens later, this page comes along for free.

Don't over-polish. We rebuild this properly after lunch. Save as you go:

```bash
git status              # What have I changed?
git add .               # Stage the changes (pack the box)
git commit -m "Build my about page"   # Save them (seal and label the box)
```

## 11:20 – 11:50: Loop 3: Ship it

Now we put your page on the internet, where anyone can see it.

**Push your work to GitHub:**

You made your repo this morning, so sending your About page up is one command:

```bash
git push
```

That's it. Your code now lives in two places: your laptop and your GitHub. Refresh your repo page in the browser and you'll see your About page files sitting there.

> **If `git push` is refused** (a message about permission or a `403`), your folder is pointing at my starter instead of your own copy. Check with `git remote -v`, and if you see `joshpindjak`, run the fix from Step 3 this morning:
>
> ```bash
> git remote remove origin
> gh repo create my-portfolio --public --source=. --remote=origin --push
> ```

**Connect to Vercel:** This next part happens in the browser:

1. Log in to Vercel. Click "Add New Project" or go here: [https://vercel.com/new](vercel.com/new)
2. Import the repo you created. If your Vercel account is already linked with your Github, Vercel should see the repo you have already created. If you don't see the repo, Vercel needs to be linked with your Github account in Settings (just needs to be done once).
3. Vercel recognises it's an Astro project and fills in the settings for you. You don't need to change anything here unless you are doing a different kind of project/more complex, etc.
4. Accept the defaults and deploy. Within a minute you get a live URL ending in `.vercel.app`.

**Here's the loop that brings everything together:** Because Vercel watches your GitHub, the moment you `git push` it rebuilds and updates your live site. There's no deploy command. You push, and it's live 30-60s later.

Try it now: change one thing (copywriting, change a color, add a photo) on your About page and run it again:

```bash
git add .
git commit -m "Tweak my about page"
git push
```

Watch it go live. That's the whole game: **edit, add, commit, push.** You'll do this every time you want to update your website. You _can_ also have the agent do this for you, but I recommend understanding what's happening before you automate it.

**Share your URL:** Everyone drops their link. This is the first of several. See what other people made from the same starting point.

> **If you have a domain**, we can point a staging subdomain at this, like `v2.yourdomain.com`, so you preview the new site while your old one stays up. Domains involve DNS, which can be slow. We'll set it up and it'll arrive when it arrives.

> **Stuck?** This is the fiddliest stretch of the day, and it's almost always sign-in or permissions. Flag me. Nobody moves on until everyone's live.

## 11:50 – 12:00: Debrief: why one page doesn't scale

Look at what you've got: one page, styled on your tokens, live on the internet. Now imagine adding twelve case studies. Where does the navigation live? What happens when you change your footer? Do you really want to paste it into thirteen files?

That's the problem components solve, and it's what we do first thing after lunch.

Two commands worth knowing while you think about it:

```bash
git diff                    # Show the exact lines I've changed
git log --oneline --graph   # A clean visual history of my saves
```

---

# Lunch (12:00 – 13:00)

Step away from the screen, grab a bite to eat. If there's something you didn't want to ask in front of the group, feel free to DM and I'll get you sorted.

---

# Afternoon

## 13:00 – 13:40: Loop 4: Components

Now the payoff for building that page by hand. We take your one page and pull the shared parts out, and the reason becomes obvious the moment you do it.

**How an Astro project is laid out:**

- **`src/pages`**: one file per page. `index.astro` is your homepage.
- **`src/components`**: reusable pieces of UI. Empty right now. You're about to fill it.
- **`src/layouts`**: shared page shells (the HTML document frame). Empty right now.
- **`src/content`**: where your work and writing will live, as content files.
- **`src/styles`**: your design tokens, which you already met.

### What a layout actually is

Open your About page for a second. It isn't only the words about you. It's a full HTML document: the `<html>` and `<head>`, the page title and metadata, the import for your CSS, then the `<body>` with your content inside.

That outer shell is the same on every page you'll add. If you copy-paste it into twelve files, you'll update the title pattern or the CSS import twelve times. A **layout** is that shared shell in one place.

In Astro, a **layout** typically holds:

- The `<html>`, `<head>`, and `<body>`
- Shared metadata (charset, viewport, a default title pattern)
- The global CSS import
- A **slot** — a hole in the middle where each page drops its own content
- Often the site chrome that should appear on every page (navigation and footer)

After you have a layout, a page becomes thin: “use this layout, and here’s what goes in the middle.” That’s the mental model. Components (nav, footer, buttons) are the reusable *pieces*. The layout is the reusable *document frame* that assembles them.

You'll start with one layout for the whole site. Later, when you build case studies, you can add a second layout if that content needs a different frame, for example more width, no marketing chrome, or a different header. Same idea, different shell. We get to that in the next loop; today one solid base layout is enough.

### Pull shared UI into components

Lets use the Cursor agent to begin dropping reusable elements into their own components that can be reused across multiple pages very easily.

**Navigation and footer:** Take them out of the page and into `src/components/Nav.astro` and `src/components/Footer.astro`. Put those components into your layout so every page gets them automatically.

Then change something in the navigation once and watch it update everywhere. This is a huge time saver and helps you build better consistency across large websites. 

**Mini activity: a Button component:** Before you move on, make one small component you'll reuse a lot — something like a primary link-button for “View project”, “Get in touch”, or “Read more”. Put it in `src/components/Button.astro`, style it with tokens, and use it in a couple of places on the page. Props keep it flexible (text label, href, maybe a primary/secondary/tertiary styling, do you want to include an optional icon?). This is the same idea as Nav and Footer, just smaller: build once, use everywhere, restyle via tokens later.

Two ideas to remember here: **components** mean building a thing once and reusing it, and a **layout** means every page shares one document shell so you aren't rewriting `<head>` by hand. A portfolio is mostly **static** — built once and served fast — which is exactly what you want.

Once you're done adding your Components, push it to prod:

```bash
git add .
git commit -m "Add layout, nav, footer, and button components"
git push
```

## 13:40 – 14:40: Loop 5: Content and Projects

Now the site gets real. You're going to stop pasting project details into pages by hand, and set up a small **content system** for your work instead.

### Your projects as a content collection

Think of this as a lightweight CMS that lives in your repo — no second website to log into, no monthly fee. Astro calls it a **content collection**.

Here's the idea:

- Each project or case study is a **file** in `src/content/projects/` (Markdown or MDX).
- Every file starts with the same set of fields at the top (title, summary, year, and so on). That list of fields is the **schema**, defined once in `src/content/config.ts`.
- Your pages **ask the collection** for projects and render them. Add a new case study later? Drop in a new file. The homepage grid and the case study template pick it up automatically.

That's the whole win: content in one place, layout reused, nothing hard-coded into twelve different pages.

**Set this up first**, before you polish the homepage. Ask the agent to scaffold the projects collection and schema. The always-on **content collections** rule steers that. For the pages and grid on top, point it at the **work-section** skill (for example: “Follow the work-section skill and set up my projects collection, homepage grid, and case study template”).

**How a case study is structured:** Agree your fields up front so every entry matches:

- **Title** of the project
- **Summary:** One SEO-friendly line about what you did
- **Role** (what you contributed)
- **Year** or date
- **Client** (optional)
- **Tags** or category (optional). Lets you sort and filter, and powers “Related projects”
- **Cover** image (Recommended, it's used in the grid itself as well as when posting on Social Media as an opengraph image)
- **Featured** (optional). Controls what shows on the homepage grid, in the instance that you have more projects than what you want to appearon the homepage. This is set to a True/False value. 
- Anything else you know you'll need — add it to the schema once, then use it in every file. This is completely customizable for your needs.

When you later want a new field on every project, you change the schema in one place and update the files. The agent can set up a clean config for all of this.

### Bring your content in

From Framer, Webflow, Squarespace, a custom site, or plain text and markdown. Drop exports and drafts into the `content-source/` folder, then ask the agent to migrate them into proper collection files. Use the **content-migration** skill for that. We're rebuilding cleanly, not running a one-click export.

Images go in `public/` (for example `/images/...`) and get referenced from your project files. `content-source/` itself is never published.

### Build the pages on top of the collection

**Work grid:** Most portfolios show a grid or list of projects. It lives on the homepage, and you can reuse the same card at the bottom of a case study for “Related projects.”

**Pages:**

- **Home:** A line or two about you, and your work grid (usually the `featured` projects). Your About content moves off the home page now and gets its own place.
- **About:** The page you already built. Give it its own route at `/about`.
- **Case study / project template:** One reusable page that lays out any project from the collection. Build it once and every future case study is just a new content file. **This is the most valuable thing you'll make today.** It still sits inside a layout (your base layout is fine to start; if case studies need a different frame later, that's a second layout, not a rewrite of every project).
- **Optional: One page for some personality:** This could be `/now` page showing what you're working on, or a Writing/Blog section. A blog is essentially a second Collection that reuses the same pattern: each blog post gets its own markdown file loaded into a template. 
- **Don't forget about responsiveness**. All page layouts should follow a logical, modern, responsive layout methodology using a few simple media queries. For example, at viewports smaller than 991px, you can collapse layouts down to 1 column so everything fits nicely. Other components and page layouts can be adjusted for responsiveness at your discretion. Simply make your browser window smaller and ensure everything looks ok. Afterwards, load your vercel URL on your phone to ensure the scale/sizing is to your liking. Not quite right? Take a screenshot and feed it back into the agent and articulate what you'd like changed. 

> **A few notes about responsiveness:** 
> To avoid getting stuck in the weeds, I like to maintain 2 core screen sizes: (1) Standard desktop/laptop size, which affects all screens, and (2) 991 and below. All styling and CSS you do on desktop affects all screen sizes, and then you add special styling (using Media Queries) which affects smaller screens. 
> 
> When writing code with AI, the agents are usually pretty good at baking in responsive principles by default, but it's always good to check. For example, usually when you ask an AI to build you a 4 column grid, it will also include a Media Query to change it to 1 column on mobile. 

**Share again:** Everyone push and drop their URL.

```bash
git add .
git commit -m "Add projects collection, work grid, and case study template"
git push
```

## 14:40 – 14:50: Break

## 14:50 – 15:30: Loop 6: Make it yours

The moment we set everything up for. Until now your site has worn the example tokens. Now you make it yours, and because every component references the semantic tokens, changing them changes the whole site at once. Change is cheap. That's the entire point.

This part is a little philosophical. Designers usually work to someone else's brief. Now, **you are the client.** The real work is investigating your own taste and deciding how you want your work to meet the world.

**Start with who you are:** Product design? B2B SaaS? Fintech? A graphic designer who illustrates? Corporate vibe, or a bit of whimsy? All of the above? Your answer shapes everything below.

**Fonts:** Your typefaces and a sizing scale that holds together. Pair at most two, or use one well. Mixing many gets messy fast. Grab something off of Google fonts so it's and ready to go. Drop the embed code into a new Agent window and ask it to set up your typography according to the new fonts you chose.

**Colour:**
- Your **accent colour.** Pick a favourite and build a 12-step scale from it ([radix-ui.com/colors/custom](https://www.radix-ui.com/colors/custom) is great for this). Most sites use the accent sparingly: links, active states, a little branding. Or don't. Fully monochromatic is a strong look in its own right. Own it.
- A **contrast colour**, optionally, for things like inline `code`. Decide whether links use the accent or the contrast.
- **Light or dark mode?** Something custom in between? Is it-configurable with a toggle?
- You can hide some colour in the user's text-highlight color. In fact, this is a great way to inject a little bit of personality into your site. Another task for another agent (this is defined at the root level so it's easily customizable going forward).

**Shape:** Square buttons (0 radius), soft corners (~0.8rem), or full pills. A small choice that sets the tone for your website.

**Spacing and layout:** How you arrange things carries as much feel as colour does. Grids or not, space between elements, margins around content and between sections. Get this consistent and the site reads as considered. Don't forget a max-width for text areas in case studies so your type doesn't stretch across the screen.

**Style your base elements** so your case studies and writing are consistent without extra work: paragraphs (inheriting from body), headings and their hierarchy, links, blockquotes, lists, inline `code`, and code blocks if you need them.

**Add a little personality:** A couple of small components go far:

- A **callout.** Give it props so it holds plain text in a post, or a large metric number showing a result in a case study.
- A **scroller**, a 2px bar of moving text across the top of the screen to indicate scroll progres, if that's your thing.
- Whatever else makes it yours. Think outside of the box and adapt it to your content/storytelling within each of your projects. Have fun.

**Two notes:** Go light on motion and animate-in effects; heavy motion reads like a default template. Used sparingly it can feel lovely. And if you've already designed in Figma, there are plugins that export your Figma variables, which you can bring straight in and add them to your design system.

Change a token, watch the whole site move. Then save:

```bash
git add .
git commit -m "Set my own design tokens"
git push
```

## 15:30 – 16:00: Loop 7: Ship and share

**Final deploy.** You know it by now:

```bash
git add .
git commit -m "Final polish before launch"
git push
```

**Custom domain:** Add it in your Vercel project settings. Vercel gives you DNS records to set wherever you bought the domain. Domains take a while to fully switch over, so don't worry if it isn't live the moment we finish.

**Share-around:** Everyone drops their live URL into the chat or Figjam. See what everyone else created, get inspired!

---

## After today: keeping your site safe while you tinker

You'll want to keep changing things without risking your live site. That's what **branches** are for. A branch is a parallel copy where you can experiment freely while `main`, your live site, stays untouched.

I'll demo this at the end rather than have you do it live, because it's the one thing that really takes practice. Here it is for when you need it:

```bash
git switch -c new-section       # Create a branch and move onto it
# ...make your changes, add and commit as usual...
git push -u origin new-section  # Push it to GitHub the first time (-u links it up)
```

Vercel gives every branch its own preview URL automatically, so you see your changes online without touching your real site. When you're happy, merge the branch into `main` on GitHub, then update your laptop:

```bash
git switch main        # Back to your main branch
git pull origin main   # Download the merged changes
```

The golden rule that saves the most grief: **always `git switch main` and `git pull` before starting a new branch.**

You own everything: the code, the content, the site, deployed under your own accounts.

The deal, as thanks for being in this first free cohort: share your finished site with me, and write a short, honest testimonial. If something didn't work, tell me that too. Your feedback is how this gets better.

---

## Command cheat sheet

### One-time setup

```bash
git --version                                   # Check Git (Mac: prompts install if missing)
node --version                                  # Check Node
gh --version                                    # Check the GitHub CLI
brew --version                                  # Check Homebrew (Mac only)

git config --global user.name "Your Name"       # Tag your saves with your name
git config --global user.email "you@email.com"  # And your email
gh auth login                                    # Sign in to GitHub from the terminal
```

### Getting the starter

In the browser first: **Use this template** on the starter repo → **Create a new repository**. That makes your own copy under your account.

Then clone **your** repo (Cursor's **Clone repo** button, or the terminal):

```bash
git clone https://github.com/your-username/my-portfolio.git
cd my-portfolio        # Move into the project folder
git remote -v          # Confirm origin shows YOUR username
npm install            # Download what the project needs (once)
npm run dev            # Run the site locally while you work
```

Cloned the wrong repo by mistake? Point it at a new repo of your own:

```bash
git remote remove origin   # Forget the starter repo
gh repo create my-portfolio --public --source=. --remote=origin --push
                           # Create YOUR repo, link it, push — one command
```

### The everyday loop

```bash
git status             # What have I changed? What branch am I on?
git diff               # Show me the exact lines I changed
git add .              # Stage all changes (pack the box)
git commit -m "..."    # Save with a message (seal and label the box)
git push               # Send to GitHub (Vercel deploys automatically)
```

### Branches, for later

```bash
git switch -c my-feature       # Create a branch and switch to it
git push -u origin my-feature  # Push a new branch the first time
git switch main                # Back to main
git pull origin main           # Update your laptop from GitHub
```

### History

```bash
git log --oneline --graph      # A clean, visual history of your saves
```

### The undo panic buttons

The first is safe. The second throws away unsaved changes, so use it carefully.

```bash
git restore --staged <file>    # Unstage a file (take it back out of the box)
git restore <file>             # Discard your changes to a file (no undo)
```

Remember: Cursor's checkpoints undo the *agent's* changes, temporarily. Git is your real history. Commit before handing the agent anything big.

---

## Appendix: starting a project from scratch (for later)

Today you started from the [diy-portfolio-starter](https://github.com/joshpindjak/diy-portfolio-starter) template, which is the fast way. To spin up a brand new Astro project from nothing:

```bash
npm create astro@latest
cd my-new-project
```

Turn the folder into a Git repo and make your first save:

```bash
git init                        # Make this folder a Git repo
git add .                       # Stage everything
git commit -m "Initial setup"   # Save it
git branch -M main              # Name the main branch "main"
```

Create an empty repo on GitHub, connect your project to it, and push:

```bash
git remote add origin https://github.com/your-username/my-new-project.git
git push -u origin main
```

`git remote add origin` links your folder to the GitHub repo. `git push -u origin main` sends your code up and links the two, so from then on you just type `git push`.

Then connect the repo to Vercel in the browser as we did today, and you're back in the same loop.

That's the whole thing. Everything else is repeating that loop on ideas you care about.