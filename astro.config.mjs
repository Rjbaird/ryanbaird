import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import netlify from '@astrojs/netlify/functions';
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  site: "https://example.com",
  integrations: [mdx(), sitemap(), tailwind(), solidJs(), image()],
  markdown: {
    drafts: true,
  },
});