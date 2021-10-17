import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import config from './package.json';
import configPkg from './src/config.json';

const banner = `/*!
* ${config.name} v${config.version} ${new Date()}
* (c) 2021 @jdf2e.
* Released under the MIT License.
*/`;

let input = {};

configPkg.nav.map((item) => {
  item.packages.forEach((element) => {
    let { name, show, taro, type, exportEmpty, exportEmptyTaro } = element;
    if (taro && (show || exportEmpty)) {
      input[name] = `./src/packages/__VUE/${name.toLowerCase()}/index${
        exportEmpty && !exportEmptyTaro ? '.vue' : '.taro.vue'
      }`;
    }
  });
});

export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }]
  },
  plugins: [vue()],
  build: {
    minify: false,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    lib: {
      entry: '',
      name: 'index',
      // fileName: (format) => format,
      formats: ['es']
    },
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ['vue', 'vue-router', '@tarojs/taro'],
      input,
      output: {
        banner,
        dir: path.resolve(__dirname, './dist/packages/_es'),
        entryFileNames: '[name].js'
      }
    },
    emptyOutDir: false
  }
});
