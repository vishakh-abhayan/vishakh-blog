// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://vishakh-abhayan.github.io',
  base: '/vishakh-blog',
  integrations: [sitemap()],
  vite: {
    server: {
      allowedHosts: ['.shares.zrok.io'],
    },
  },
});
