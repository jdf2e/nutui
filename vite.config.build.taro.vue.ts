import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import config from './package.json';

const banner = `/*!
* ${config.name} v${config.version} ${new Date()}
* (c) 2022 @jdf2e.
* Released under the MIT License.
*/`;
export default defineConfig({
  define: {
    'process.env.TARO_ENV': 'process.env.TARO_ENV'
  },
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
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => {
            return (
              tag.startsWith('swiper') ||
              tag.startsWith('swiper-item') ||
              tag.startsWith('scroll-view') ||
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
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ['vue', 'vue-router', '@tarojs/taro', '@tarojs/components'],
      output: {
        banner,
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        },
        plugins: []
      }
    },
    lib: {
      entry: 'src/packages/nutui.taro.vue.build.ts',
      name: 'nutui',
      fileName: 'nutui',
      formats: ['es', 'umd']
    }
  }
});
