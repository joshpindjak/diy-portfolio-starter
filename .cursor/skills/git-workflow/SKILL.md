---
name: git-workflow
description: >-
  Everyday Git for the portfolio: status/add/commit/push, commit before big
  agent tasks, checkpoints vs Git, safe undo, and branches after launch. Use
  when the user asks about Git, commits, branches, undo, or checkpoints.
---

# Git Workflow

Everyday Git for the portfolio workshop. Vercel setup lives in the **deploy** skill.

## The everyday loop

```bash
git status             # What changed? Which branch am I on?
git diff               # Exact lines changed
git add .              # Stage changes
git commit -m "..."    # Save with a clear message
git push               # Send to GitHub (Vercel deploys)
```

Keep commits small. One change, one commit, a message that says what changed.

## Commit before handing the agent a big task

Cursor checkpoints undo the agent's changes for the current session. They are not version control.

- Checkpoints are temporary and cleaned up after the session.
- They only track what the agent changed, not hand-typed edits.
- Git is the permanent history.

Habit: `git status`, then commit (or stash) before a large agent request.

## Safe undo

```bash
git restore --staged <file>   # Unstage a file (keep the edits)
git restore <file>            # Discard edits to a file (no undo — warn first)
```

Only discard working-tree changes when the user explicitly asks, and warn that it cannot be undone.

## History

```bash
git log --oneline --graph
```

## Branches (after the site is live)

During the workshop day, pushing to `main` is expected. After launch, use branches so experiments do not break production.

```bash
git switch main
git pull origin main
git switch -c my-feature
# ...edit, add, commit...
git push -u origin my-feature
```

Vercel gives the branch a preview URL. When happy, merge into `main` on GitHub, then `git switch main` and `git pull origin main`.

Golden rule: always `git switch main` and `git pull` before starting a new branch.

## Rules for the agent

- Never update git config, force-push, or skip hooks unless the user explicitly asks.
- Only commit when the user asks you to commit.
- Only push when the user asks you to push.
- Never commit secrets or `.env` files.
- On workshop day, do not insist on a branch for routine pushes to `main`.
- After the site is live, suggest a branch for larger changes.
