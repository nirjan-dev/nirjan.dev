/// <reference types="unlighthouse" />
import { defineConfig } from "unlighthouse";

export default defineConfig({
  site: "localhost:4321",
  cache: false,
  scanner: {
    samples: 3,
    device: "desktop",
    throttle: true,
  },

  ci: {
    budget: {
      accessibility: 95,
      "best-practices": 95,
      performance: 85,
      seo: 95,
    },
  },
});
