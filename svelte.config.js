import adapter from '@sveltejs/adapter-netlify';
import { preprocessThrelte } from '@threlte/preprocess'
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	preprocess:[vitePreprocess({preserve: ['ld+json']}), preprocessThrelte()]
	
};

export default config;
