/// <reference types="unlighthouse" />
import { defineConfig } from "unlighthouse";

export default defineConfig({
  cache: false,
  scanner: {
    samples: 2,
    device: "desktop",
    throttle: true,
  },

  ci: {
    budget: {
      accessibility: 90,
      "best-practices": 90,
      performance: 80,
      seo: 90,
    },
  },
});
