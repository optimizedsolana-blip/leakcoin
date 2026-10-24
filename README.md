# leakcoin

Every leak, one place. A static site that tracks things that get out before they're official:
games, AI models, hardware, crypto, entertainment, world news.

## Files
- `page.html` – the page body (also what gets published as the preview artifact)
- `styles.css` – all styling, design tokens at the top
- `app.js` – filtering, search, sort, detail view
- `data.js` – **the content**. Add a leak by adding an object to `LEAKS`.
- `build.sh` – wraps `page.html` into a standalone `index.html` for hosting
- `index.html` – generated; deploy this folder to GitHub Pages / Netlify / Vercel

## Adding a leak
Open `data.js`, copy an existing entry, change the fields. Statuses: `confirmed`, `developing`, `rumor`, `debunked`.
Credibility is 1–5. Heat (0–100) decides what shows in "Hot right now".

## Not wired yet
- The tip form only shows a confirmation. It needs a backend (or a form service) to actually receive tips.
- No accounts, comments or voting. Content is edited in `data.js`.

## Run locally
    ./build.sh && python3 -m http.server 8000
then open http://localhost:8000
