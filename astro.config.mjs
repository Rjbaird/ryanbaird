import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: "https://bairrya-blog.netlify.app",
  integrations: [tailwind(), svelte(), mdx(), alpinejs()],
  prefetch: {
    prefetchAll: true
  },
  // output: "hybrid",
  // adapter: netlify(),
  redirects: {
    "/admin": "/admin/index.html",
  },
});