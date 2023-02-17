//import adapter from '@sveltejs/adapter-auto';
//import { vitePreprocess } from '@sveltejs/kit/vite';
import sequence from 'svelte-sequential-preprocessor'
import preprocess from 'svelte-preprocess'
import seqPreprocessor from 'svelte-sequential-preprocessor'
import { preprocessThrelte } from '@threlte/preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	//preprocess: vitePreprocess(),			
	preprocess: sequence([preprocess(), preprocessThrelte()]),
	//kit: {
	//	adapter: adapter()
	//}
};

export default config;
