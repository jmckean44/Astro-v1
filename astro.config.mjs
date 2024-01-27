import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
	output: 'hybrid', // hybrid, server, static = pre-rendered pages
	prefetch: true,
	integrations: [mdx(), sitemap()],
	adapter: netlify(),
});
