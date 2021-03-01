import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Markdown from 'vite-plugin-md';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/devServer': {
        target: 'http://nutui-server.jd.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/devServer/, '')
      }
    }
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }]
  },
  css: {
    preprocessorOptions: {
      scss: {
        // example : additionalData: `@import "./src/design/styles/variables";`
        // dont need include file extend .scss
        additionalData: `@import "@/styles/variables.scss";@import "@/sites/assets/styles/variables.scss";`
      }
    }
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    Markdown()
  ],
  build: {
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      // external: ['vue'],
      // output: {
      //   // Provide global variables to use in the UMD build
      //   // for externalized deps
      //   globals: {
      //     vue: 'Vue'
      //   }
      // }
    },
    lib: {
      entry: 'src/nutui.ts',
      name: 'nutui'
    }
  }
});
