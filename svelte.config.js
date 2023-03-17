import adapter from '@sveltejs/adapter-netlify';
import { preprocessThrelte } from '@threlte/preprocess'
import { vitePreprocess } from '@sveltejs/kit/vite';


export default  {
  preprocess:[vitePreprocess({preserve: ['ld+json']}), preprocessThrelte()],
	kit: {
		adapter: adapter({
      edge: false,
      split: false
    })
	}
}
