import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify/functions";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
    site: "https://bairrya-blog.netlify.app",
    integrations: [tailwind(), mdx(), svelte()],
    // adapter: netlify(),
});
