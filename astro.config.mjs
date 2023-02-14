import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify/functions";
import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import { remarkReadingTime } from "./remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://bairrya-blog.netlify.app",
  integrations: [tailwind(), mdx({
    remarkPlugins: [remarkReadingTime]
  }), solidJs()],
  adapter: netlify()
});