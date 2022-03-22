import { defineConfig } from 'vite';
import config from './package.json';

const banner = `/*!
* ${config.name} v${config.version} ${new Date()}
* (c) 2022 @jdf2e.
* Released under the MIT License.
*/`;

export default defineConfig({
  build: {
    minify: true,
    lib: {
      entry: './dist/styles/themes/default.scss',
      formats: ['es'],
      name: 'style',
      fileName: 'style'
    },
    // rollupOptions: {
    //   output: {
    //     banner
    //   }
    // },
    emptyOutDir: false
  }
});
