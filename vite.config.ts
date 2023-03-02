import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from '@zerodevx/svelte-img/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	server: {
		fs: {
		  allow: ['..'],
		},
	},
	plugins: [sveltekit(), imagetools()],
	ssr: {
		noExternal: ['three', 'troika-three-text']
	}
	
});

