import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	output: 'static', // hybrid, server, static = pre-rendered
	prefetch: true,
	integrations: [mdx(), sitemap()],
});
