#!/usr/bin/env sh
# Usage: ./set-ca.sh <contract address>   Writes config.js, rebuilds, commits, pushes (Vercel auto-deploys).
set -e
cd "$(dirname "$0")"
CA="$1"
case "$CA" in ""|*[!A-Za-z0-9]*) echo "bad CA: letters and digits only"; exit 1;; esac
cat > config.js <<EOC
/* leaked site config. Paste the token contract address (CA) here when the coin goes live.
   Empty = the banner shows "coming soon" and the copy button stays off. */
window.SITE = {
  ca: "$CA"
};
EOC
./build.sh >/dev/null
git add config.js index.html
git commit -qm "Set CA $CA" 
git push -q origin main
echo "pushed $(date +%H:%M:%S)"
