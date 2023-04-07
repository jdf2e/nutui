import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path';
const resolve = path.resolve;
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/packages/styles/variables.scss";@import "@/sites/assets/styles/variables.scss";`
      }
    }
  },
  plugins: [
    vue({
      include: [/\.vue$/]
    }),
    vueJsx()
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['src/packages/__VUE/**/*.(test|spec).(ts|tsx)'],
    reporters: ['default', 'html']
  }
});
