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
- `styles.css`: design tokens at the top. Underground leak-board look, dark only: black, phosphor green, red stamps, scanlines, ticker.
  Fonts: Anton (display), JetBrains Mono (body), Special Elite (status stamps).
- `page.html`: page body. `build.sh` wraps it into `index.html`. Re-run `./build.sh` after editing page.html.
- `vercel.json`: static config.

## Status (handed off from a cloud session)
- LIVE: https://leakcoin.vercel.app (Vercel project launchpad20/leakcoin, deployed 2026-10-26 from the Mac mini).
- GitHub repo connected to Vercel: every push to main auto-deploys. This Mac has no GitHub login, so deploy from here with `npx vercel --prod --yes`.
- Done: full site built, 14 seeded real leak entries, pushed to GitHub (main).
- Preview artifact: https://claude.ai/artifact/Pjw1wtxqJkzjoSvdxhoEVX
- Repo is PUBLIC on GitHub.

## Next steps
1. Tip form only shows a confirmation. Wire it to a backend or form service so tips are received.
2. Add more leak entries to data.js.
