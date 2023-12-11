import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import config from './package.json';
import autoprefixer from 'autoprefixer';
import Inspect from 'vite-plugin-inspect';
import { markdown } from '@nutui/vite-plugins';
const resolve = path.resolve;
// https://vitejs.dev/config/
export default defineConfig({
  base: '/h5/vue/4x/',
  server: {
    port: 2023,
    host: '0.0.0.0',
    proxy: {
      '/devServer': {
        target: 'https://nutui.jd.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/devServer/, '')
      },
      '/devTheme': {
        target: 'https://nutui.jd.com/theme/source',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/devTheme/, '')
      }
    }
  },
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }]
  },
  css: {
    preprocessorOptions: {
      scss: {
        // example : additionalData: `@import "./src/design/styles/variables";`
        // dont need include file extend .scss
        additionalData: `@import "@/packages/styles/variables.scss";@import "@/sites/assets/styles/variables.scss";`
      }
    },
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ['> 0.5%', 'last 2 versions', 'ie > 11', 'iOS >= 10', 'Android >= 5']
        })
      ]
    }
  },
  plugins: [
    Inspect(),
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    markdown({
      docRoot: path.resolve(__dirname, './src/packages/__VUE'),
      docTaroRoot: path.resolve(__dirname, './packages/nutui-taro-demo/src')
    })
  ],
  build: {
    target: 'es2015',
    outDir: './dist/h5/vue/4x/',
    // assetsDir: config.version,
    cssCodeSplit: false,
    cssTarget: ['chrome61'],
    rollupOptions: {
      input: {
        // doc: resolve(__dirname, 'index.html'),
        mobile: resolve(__dirname, 'demo.html')
      },
      output: {
        entryFileNames: `demo-${config.version}/[name].js`,
        chunkFileNames: `demo-${config.version}/[name].js`,
        assetFileNames: `demo-${config.version}/[name].[ext]`,
        plugins: []
      }
    }
  }
});
