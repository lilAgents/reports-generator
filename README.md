# Reports

An open-source template for **auto-generated, interactive audit reports** served at `/r/<slug>`. Built with Astro, deploys to Netlify in one click, and never touches a PDF. Every report is just a shareable link.

This is a clean starter template, not a client system. Fork it, brand it, and wire your own audit data into it.

## How it works

- Each report is a plain JSON file in `src/data/reports/`.
- At build time, `src/pages/r/[slug].astro` turns every `<slug>.json` into a static page at `/r/<slug>`.
- The report UI (`src/layouts/ReportLayout.astro`) renders an overall score ring, collapsible section findings, and an action plan, with a light/dark toggle. No client-side framework.
- `netlify.toml` marks `/r/*` as `noindex` so share links stay out of search results.

## Add a report

1. Copy `src/data/reports/demo.json` to `src/data/reports/acme-co.json`.
2. Edit the fields (see the shape below).
3. `npm run build` and deploy. The report is live at `/r/acme-co`.

For anonymized share links, name the file with a random slug (for example `9f3a1c72.json`) instead of the client name.

### Report shape

```json
{
  "domain": "example.com",
  "title": "AI Search & SEO Audit",
  "generatedAt": "2026-07-08",
  "score": 78,
  "summary": "One or two sentences of context.",
  "sections": [
    { "title": "Section name", "score": 71, "findings": ["Finding one.", "Finding two."] }
  ],
  "actions": ["Do this first.", "Then this."]
}
```

`score` is 0 to 100. The ring and section badges color themselves: green at 80+, amber at 60+, red below.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output to dist/
npm run preview
```

## Deploy

Push to GitHub and connect the repo to Netlify (build command `npm run build`, publish directory `dist`), or drag `dist/` into Netlify. Point a domain at it and your reports live at `yourdomain.com/r/<slug>`.

## License

MIT. See [LICENSE](./LICENSE).
