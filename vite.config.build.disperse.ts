import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import config from './package.json';

const banner = `/*!
* ${config.name} v${config.version} ${new Date()}
* (c) 2021 @jdf2e.
* Released under the MIT License.
*/`;

export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }]
  },
  css: {
    preprocessorOptions: {
      scss: {
        // example : additionalData: `@import "./src/design/styles/variables";`
        // dont need include file extend .scss
        additionalData: `@import "@/packages/styles/variables.scss";@import "@/sites/assets/styles/variables.scss";`
      }
    }
  },
  plugins: [vue()],
  build: {
    minify: false,
    lib: {
      entry: '',
      name: 'index',
      fileName: (format) => 'index',
      formats: ['es']
    },
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ['vue', 'vue-router', 'pinyin'],

      input: [
        './src/packages/__VUE/price/index.vue',
        './src/packages/__VUE/cell/index.vue'
      ],
      output: {
        dir: path.resolve(__dirname, './dist/packages/')
        // entryFileNames: '[name].js',
        // file: path.resolve(__dirname, './dist/packages/price/index.js'),
      }
      //  [
      //   {
      //     // dir: path.resolve(__dirname, './dist/packages/'),
      //     // file: path.resolve(__dirname, './dist/packages/price/index.js'),
      //     // banner,
      //     // format: 'es'
      //   }
      // ]
    },
    emptyOutDir: true
  }
});
