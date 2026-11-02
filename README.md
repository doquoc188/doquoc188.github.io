# Do Trong Quoc — Portfolio

Personal portfolio of Do Trong Quoc, AI Engineer (RAG, agents & evaluation), Hanoi.

**Live:** https://doquoc188.github.io

## Stack

React 19 + TypeScript + Vite + Tailwind CSS v4. No UI or animation libraries: reveals, count-ups and the scroll bar are plain CSS, `IntersectionObserver` and small hooks. Deployed to GitHub Pages by `.github/workflows/deploy.yml`.

## Editing content

All text, metrics, links and project data live in [`src/config.ts`](src/config.ts). Edit it and push to `main`; the site redeploys itself.

## Run locally

```bash
npm install
npm run dev      # dev server
npm run build    # type-check + production build into dist/
```

## Notes & TODOs

- **Hero video:** scrubbed by horizontal mouse/touch movement. If the video URL is blocked or slow, a dark animated gradient with grain (`.bg-fallback` in `src/index.css`) stays visible underneath, so the hero never looks broken. The video is external (CloudFront) and is not self-hosted.
- **Reduced motion:** with `prefers-reduced-motion`, scrubbing, reveals and count-ups are disabled.
- **AI Talent Program:** only the program name, VinUni x Vingroup and "Admitted, 2026" are shown. TODO: add start date, details and logos (only if properly licensed) once available. The English name is a translation of the Vietnamese title, not an official one.
- Fonts come from onlinewebfonts.com with Helvetica Neue / Arial fallbacks.
