import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import fs from 'fs-extra';
import configPkg from './src/config.json';

let input = {};

configPkg.nav.map((item) => {
  item.packages.forEach((element) => {
    let { name, exclude } = element;
    // if (name.toLowerCase().indexOf('calendar') != -1) {
    if (exclude != true) {
      const filePath = path.join(`./src/packages/__VUE/${name.toLowerCase()}/index.taro.vue`);
      input[name] = `./src/packages/__VUE/${name.toLowerCase()}/index${fs.existsSync(filePath) ? '.taro' : ''}.vue`;
    }
    // }
  });
});

export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }]
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => {
            return (
              tag.startsWith('scroll-view') ||
              tag.startsWith('swiper') ||
              tag.startsWith('swiper-item') ||
              tag.startsWith('picker') ||
              tag.startsWith('picker-view') ||
              tag.startsWith('picker-view-column')
            );
          },
          whitespace: 'preserve'
        }
      }
    })
  ],
  build: {
    minify: false,
    lib: {
      entry: '',
      name: 'index',
      // fileName: (format) => format,
      formats: ['es']
    },
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ['vue', 'vue-router', '@tarojs/taro', '@/packages/locale', '@nutui/icons-vue-taro'],
      input,
      output: {
        paths: {
          '@/packages/locale': '../locale/lang'
        },
        dir: path.resolve(__dirname, './dist/packages/_es'),
        entryFileNames: '[name].js',
        plugins: []
      }
    },
    emptyOutDir: false
  }
});
