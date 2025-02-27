import { defineConfig } from 'astro/config';
import rehypeRaw from 'rehype-raw';
import rehypeExternalLinks from 'rehype-external-links';

import svelte from '@astrojs/svelte';

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

  integrations: [svelte()],
  output: "static"
});