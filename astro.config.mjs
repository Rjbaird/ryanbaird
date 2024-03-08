import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://bairrya-blog.netlify.app",
  integrations: [tailwind(), svelte(), mdx()],
  prefetch: {
    prefetchAll: true,
  },
});
