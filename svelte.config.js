import preprocess from "svelte-preprocess";
import adapter from '@sveltejs/adapter-static';
import { imagetools } from 'vite-imagetools';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter(),
	},

    preprocess: [preprocess({
        postcss: true
    })],

    vite: {
        plugins: [imagetools({force:true})]
    },
};

export default config;
