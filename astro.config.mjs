import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify/functions";
import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "server",
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
  adapter: netlify(),
  site: "https://example.com",
  integrations: [mdx(), sitemap(), tailwind(), solidJs(), image()],
  markdown: {
    drafts: true,
  },
});
