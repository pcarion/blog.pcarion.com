// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://pcarion.com',
  integrations: [mdx(), sitemap(), react(), icon()],

  vite: {
    plugins: [tailwindcss()],
  },
});