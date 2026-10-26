#!/usr/bin/env sh
# Wraps page.html in a full HTML document -> index.html (for hosting anywhere: GitHub Pages, Netlify, Vercel).
cd "$(dirname "$0")"
{
  printf '<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
  sed -n '/<title>/,/href="styles.css">/p' page.html
  printf '</head>\n<body>\n'
  sed '1,/href="styles.css">/d' page.html
  printf '</body>\n</html>\n'
} > index.html
# cache-bust: stamp asset URLs so browsers never mix a new page with old CSS/JS
v=$(date +%s)
sed -i '' -e "s|href=\"styles.css\"|href=\"styles.css?v=$v\"|" -e "s|src=\"data.js\"|src=\"data.js?v=$v\"|" -e "s|src=\"app.js\"|src=\"app.js?v=$v\"|" index.html
echo "built index.html (v=$v)"
