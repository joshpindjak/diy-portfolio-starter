---
name: deploy
description: >-
  Deploy the portfolio via GitHub and Vercel: first-time setup, edit-commit-push
  loop, preview branches, custom domains. Use when connecting Vercel, shipping
  live, fixing a failed deploy, or setting a domain.
---

# Deploy Workflow

This site lives on GitHub and deploys automatically to Vercel. Push to the repo, and Vercel builds and ships the site.

## The flow, once it's set up

1. Make a change locally in Cursor.
2. Commit the change to Git.
3. Push to GitHub.
4. Vercel sees the push, builds the site, and deploys it.
5. The live URL updates automatically.

That is the whole loop. Edit, commit, push, live.

## First-time setup

**1. Get the project into GitHub.**

The starter (`joshpindjak/diy-portfolio-starter`) is a GitHub template repository. Attendees click "Use this template" → "Create a new repository" to get their own copy, then clone *that* copy. Git and the remote are wired up correctly from the start, so `git push` works with no extra setup.

If a push is refused with a permission error or `403`, they cloned the starter directly instead of their own copy. Check `git remote -v`: the URL must show their username, not `joshpindjak`. Fix by pointing the folder at a repo they own:

```bash
git remote remove origin
gh repo create my-portfolio --public --source=. --remote=origin --push
```

(Only if starting from scratch with no repo at all: `git init`, commit, then the `gh repo create` command above.)

**2. Connect GitHub to Vercel.**
- Sign in to Vercel with GitHub.
- Import the repository.
- Vercel auto-detects Astro. Accept the defaults.
- Deploy. Vercel gives back a live `.vercel.app` URL.

**3. Confirm the loop works.**
- Change one visible thing, commit, push, watch the live URL update.

## Branches and staging

During the workshop day, push to `main` is fine.

After the site is live (or the attendee asks for safer iteration):

- `main` is production.
- Every branch and pull request gets a Vercel preview URL.
- Work on a branch, check the preview, merge to `main` when happy.

Everyday Git commands live in the **git-workflow** skill.

## Custom domain

- Add the domain in Vercel project settings.
- Set the DNS records Vercel provides at the registrar.
- DNS can take a while. Point it correctly, then move on if it is not live yet.

## Rules for the agent

- Keep commits small and messages clear.
- Never commit secrets or `.env` files.
- If a build fails on Vercel, read the build log first. Usually a missing dependency or a content frontmatter typo.
- During the workshop, pushing to `main` is expected. After launch, prefer a branch for larger changes.
