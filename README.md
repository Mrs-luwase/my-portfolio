# Leiss Uwase | My Portfolio

This is my personal portfolio, built to show what I actually work on: Information systems, data, web dev & design. It is designed and coded from a blank file, plain HTML, CSS, and JavaScript, no template, no framework.

## Why it's built this way

I went with an editor/terminal-inspired feel, a line-number gutter(scale) that tracks how far down the page you are, a hero line that types itself out like a shell prompt, since that's closer to how I actually spend my time than a generic template would be. I could have started from something pre-built, but I wanted to understand everything that ships on the page, down to the small interactions.

## What's in it

- Scrollspy navigation that highlights the section you're currently on
- An editor-style line-number gutter tracking scroll progress
- A one-time terminal typing animation in the hero
- Project screenshot slideshows with dot navigation and autoplay

## Structure

```
index.html      Page markup and content
css/style.css   All styling
js/script.js    Scrollspy, gutter, hero terminal effect, project slideshows
assets/         Photos and project images
docs/           My CV (PDF)
```

## Running it locally

No build step, no dependencies. Open `index.html` directly in a browser, or serve the folder with:

```
npx serve .
```

## Deployment

Hosted on Vercel, connected directly to this GitHub repo, so pushing to main redeploys it automatically. No build step needed since it's static.
 
Live: https://leissuwa-portfolio.vercel.app/

---

This is a working project, not a finished one. I'll keep refining it as I pick up more.
