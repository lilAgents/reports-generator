import { defineConfig } from 'astro/config';

// Static site. Each report in src/data/reports/*.json is pre-rendered to a page
// at /r/<slug>/ by src/pages/r/[slug].astro. No server, no PDFs.
export default defineConfig({
  site: 'https://reports.example.com',
  trailingSlash: 'ignore',
});
