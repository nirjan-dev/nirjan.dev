import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://nirjan.dev",
  trailingSlash: "never",
  integrations: [
    tailwind(),
    mdx(),
    icon(),
    sitemap({
      filter: (page) => {
        return !page.startsWith("https://nirjan.dev/blog/");
      },
    }),
  ],
});
