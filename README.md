# Leiss Uwase, Portfolio

Personal portfolio site built for the Web Technology course.

## Structure

```
index.html        Page markup and content
css/style.css      All styling
js/script.js       Scrollspy nav, scroll-reveal, live Kigali clock, ruler progress, CV link handling
assets/            Photos and project images
```

## Before deploying

Replace the placeholder CV link. Open `index.html` and search for `href="#cv"` (it appears three times: nav, hero, and contact). Swap it for your hosted CV URL, for example a Google Drive link with view access or a PDF committed to this repo.

## Running locally

This is a static site with no build step. Open `index.html` directly in a browser, or serve the folder with any static server, for example:

```
npx serve .
```

## Deploying

Push this folder to a GitHub repository, then connect it to GitHub Pages, Vercel, or Netlify. No build configuration is needed since there is no framework or bundler involved.
