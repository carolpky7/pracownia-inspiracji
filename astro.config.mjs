// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://pracowniainspiracji.pl', // TODO: docelowa domena do ustalenia (§13.9)
  trailingSlash: 'ignore',
  // Prefetch pages on hover/tap so the next page is ready when the transition finishes
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  // o-mnie/index.html → works on any static host (Render, Cloudflare, Netlify, GitHub Pages)
  build: { format: 'directory' },
});
