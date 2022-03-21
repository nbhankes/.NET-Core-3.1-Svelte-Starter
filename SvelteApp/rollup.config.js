import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';

//Explained in further detail in the following tutorial: https://khalidabuhakmeh.com/add-svelte-to-aspnet-core-projects#:~:text=Svelte%20is%20an%20exciting%20option%20for%20ASP.NET%20Core,current%20technology%20stack%20to%20adopt%20an%20all-or-nothing%20approach.?msclkid=4a66d008a8c611eca77808183b4e1668

export default {
    // This `main.js` file we wrote
    input: 'wwwroot/js/site.js',
    output: {
        // The destination for our bundled JavaScript
        file: 'wwwroot/js/build/bundle.js',
        // Our bundle will be an Immediately-Invoked Function Expression
        format: 'iife',
        // The IIFE return value will be assigned into a variable called `app`
        name: 'app',
    },
    plugins: [
        svelte({
            // Tell the svelte plugin where our svelte files are located
            include: 'wwwroot/**/*.svelte',
            emitCss: false,
            compilerOptions: {
                customElement: true
            }
        }),
        // Tell any third-party plugins that we're building for the browser
        resolve({ browser: true }),
    ]
};