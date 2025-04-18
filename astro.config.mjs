import { defineConfig } from 'astro/config';
import rehypeRaw from 'rehype-raw';
import rehypeExternalLinks from 'rehype-external-links';

import svelte from '@astrojs/svelte';

import expressiveCode from 'astro-expressive-code';

export default defineConfig({
  markdown: {
      rehypePlugins: [
          rehypeRaw,
          [
              rehypeExternalLinks,
              {target: '_blank'}
          ]
      ]
  },

  integrations: [svelte(), expressiveCode()],
  output: "static"
});