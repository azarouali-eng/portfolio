// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
import vercel from '@astrojs/vercel/static';

export default defineConfig({
  output: 'static',
  adapter: vercel(),
});
