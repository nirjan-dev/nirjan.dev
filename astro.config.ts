import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";
import rehypePrettyCode from "rehype-pretty-code";
import type { Options } from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";

// INFO: docs here: https://rehype-pretty.pages.dev/#installation
const prettyCodeOptions: Options = {
  theme: "houston",
  transformers: [
    transformerCopyButton({
      visibility: "always",
      feedbackDuration: 3_000,
    }),
  ],
};

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
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
  },
});
