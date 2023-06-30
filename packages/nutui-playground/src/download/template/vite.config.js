// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import NutUIResolver from '@nutui/nutui/dist/resolver';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 开启 unplugin 插件，自动按需引入 NutUI 组件
    Components({
      resolvers: [NutUIResolver()]
    })
  ],
  // 配置全局样式变量
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@nutui/nutui/dist/styles/variables.scss";`
      }
    }
  }
});
