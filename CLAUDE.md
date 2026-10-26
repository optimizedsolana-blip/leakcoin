# leakcoin

Every leak, one place. A static site that tracks things that get out before they're official:
GTA VI, Claude, ChatGPT, iPhone, crypto, entertainment, world news.

## Scope
"Leaks" means early reporting, rumors, insider claims and official slips about unreleased things,
the way gaming and tech press cover them. Every entry names its source and carries a credibility
score. The site does not host stolen files, source code, credentials or private personal data.

## How it's built
Plain static site, no framework, no build step needed for Vercel.
- `data.js`: all content. `CATEGORIES` map plus `LEAKS` array. Add a leak = add an object.
  Fields: id, category, topic, status (confirmed|developing|rumor|debunked), credibility 1-5,
  heat 0-100 (drives "Hot right now"), date, headline, summary, details[], sources[], timeline[], tags[].
- `app.js`: rendering, category tabs, search, status and topic filters, sort, detail dialog, tip form.
- `styles.css`: design tokens at the top. Dark-first, light theme via prefers-color-scheme.
  Fonts: Barlow Condensed (display), IBM Plex Sans (body), IBM Plex Mono (labels).
- `page.html`: page body. `build.sh` wraps it into `index.html`. Re-run `./build.sh` after editing page.html.
- `vercel.json`: static config.

## Status (handed off from a cloud session)
- Done: full site built, 14 seeded real leak entries, pushed to GitHub (main).
- Preview artifact: https://claude.ai/artifact/Pjw1wtxqJkzjoSvdxhoEVX
- Repo is PUBLIC on GitHub.

## Next steps
1. Deploy to Vercel: `npx vercel login` then `npx vercel --prod` from this folder
   (or import the repo at vercel.com/new). Link the project to the GitHub repo so pushes auto-deploy.
2. Tip form only shows a confirmation. Wire it to a backend or form service so tips are received.
3. Add more leak entries to data.js.
