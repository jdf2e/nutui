import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';

let input = {
  index: `./src/packages/locale/index`
};
// 动态读取file name
['zh-CN', 'zh-TW', 'en-US', 'id-ID'].map((file) => {
  input[file] = `./src/packages/locale/lang/${file}`;
});

export default defineConfig({
  plugins: [vue()],
  build: {
    minify: false,
    target: 'es2015',
    lib: {
      entry: '',
      name: 'index',
      // fileName: (format) => format,
      formats: ['es']
    },
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ['vue'],
      input,
      output: {
        dir: path.resolve(__dirname, './dist/packages/locale/lang'),
        entryFileNames: '[name].js',
        plugins: []
      }
    },
    emptyOutDir: false
  }
});
