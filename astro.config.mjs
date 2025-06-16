import { defineConfig } from 'astro/config';
import rehypeRaw from 'rehype-raw';
import rehypeExternalLinks from 'rehype-external-links';
import svelte from '@astrojs/svelte';
import expressiveCode from 'astro-expressive-code';
import remarkEmbedTweet from './src/plugins/remarkEmbedTweet.js'
import remarkDirectiveWrapper from './src/plugins/remarkDirectiveWrapper.js'
import remarkAttr from 'remark-attr';
import remarkDirective from 'remark-directive';

export default defineConfig({
  markdown: {
      remarkPlugins: [remarkEmbedTweet],
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