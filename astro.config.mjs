import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://bairrya-blog.netlify.app",
  integrations: [tailwind(), svelte(), mdx()]
});