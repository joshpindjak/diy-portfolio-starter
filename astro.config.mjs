// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Change this to your live web address once you have one.
  // The sitemap and any canonical links are built from it.
  site: 'https://your-domain.com',
  integrations: [sitemap()],
});
