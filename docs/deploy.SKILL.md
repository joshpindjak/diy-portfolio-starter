# Deploy Workflow

This site lives on GitHub and deploys automatically to Vercel. Push to the repo, and Vercel builds and ships the site. This file is the reference for getting that set up and using it.

## The flow, once it's set up

1. Make a change locally in Cursor.
2. Commit the change to Git.
3. Push to GitHub.
4. Vercel sees the push, builds the site, and deploys it.
5. The live URL updates automatically.

That is the whole loop. Edit, commit, push, live.

## First-time setup

This is the most technical part of the day. Do it first, carefully, and confirm each person gets a live URL before moving on.

**1. Get the project into GitHub.**
- In the workshop, attendees start from a template repo. They click "Use this template" on GitHub to create their own copy, then clone it. Git and the GitHub remote are already wired up, so no `git init` or `git remote add` is needed.
- (Only if starting a project from scratch outside the workshop: initialize Git, create a new GitHub repository, connect the local project, and push.)

**2. Connect GitHub to Vercel.**
- Sign in to Vercel with GitHub.
- Import the repository.
- Vercel auto-detects Astro. Accept the defaults.
- Deploy. Vercel gives back a live `.vercel.app` URL.

**3. Confirm the loop works.**
- Change one visible thing in the project.
- Commit, push.
- Watch Vercel rebuild and the live URL update.

Once that round trip works, the attendee owns a deployable site.

## Branches and staging

- The `main` branch is production. Pushes to `main` update the live site.
- Vercel gives every branch and pull request its own preview URL automatically. This is the staging environment. Work on a branch, get a preview URL, check it, then merge to `main` when happy.
- This lets attendees keep iterating after the workshop without breaking their live site.

## Custom domain

- Add the domain in the Vercel project settings.
- Vercel provides DNS records to set at the domain registrar.
- Set those records at the registrar.
- DNS can take a while to propagate, sometimes minutes, sometimes longer. The domain may not go live during the session. Set this expectation. Point it correctly, then move on.

## Rules for the agent

- Keep commits small and messages clear. One change, one commit, a message that says what changed.
- Never commit secrets or `.env` files. The starter repo's `.gitignore` already excludes them. Keep it that way.
- If a build fails on Vercel, read the build log first. The error is almost always a missing dependency or a typo in a content file's frontmatter.
- Default to working on a branch for anything beyond a tiny change, so the live site stays safe.
