import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  server: {
    host: true
  },
  integrations: [tailwind()],
  output: "server",
  adapter: netlify()
});
