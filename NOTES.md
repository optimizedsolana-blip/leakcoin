# Decisions log

## 2026-10-26: Confidential redesign + launch prep
- Logo: redrew the user's manila-folder + red CONFIDENTIAL stamp reference as an original SVG (`logo.svg`, `favicon.svg`)
  instead of shipping the reference photo, which looked like a stock image. Small icon swaps the word for a red bar so it reads at 16px.
- Palette cut to paper (#f4f1e8), black ink, one red (#c8102e). Manila only in the logo and the tab on hot cards.
  Fonts: Anton (headlines, stamps) + Courier Prime (typewriter body).
- Status stamps: Confirmed/Debunked in red, Developing/Rumor in black ink, to keep two colors.
- Tip form removed: it never sent anything, so it now says "Tip line opening soon". Needs a backend or a form service before it comes back.
- Topic chips limited to the top 12 with a "+N more" toggle; the full list (58) was too noisy.
- Canonical/OG URLs use https://www.justleaked.fun (the apex redirects there per Vercel's default).
- Traffic: static files on Vercel's CDN, no server code or database, so launch spikes are served from the edge.
  JS/CSS cache 60s + stale-while-revalidate a day; images a day. Security headers in vercel.json.
- PNGs (og.png, icons) are rendered from `brand/src/*.svg` with `sips` (system Impact / Courier New fonts).
