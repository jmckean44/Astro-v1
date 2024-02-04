import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';
import netlify from '@astrojs/netlify/functions';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	output: 'hybrid', // hybrid, server, static = pre-rendered pages
	prefetch: true,
	integrations: [mdx(), sitemap(), react()],
	adapter: netlify(),
});
