import { defineConfig } from 'vite';
import path from 'path';
import config from './package.json';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
const banner = `/*!
* ${config.name} v${config.version} ${new Date()}
* (c) 2022 @jdf2e.
* Released under the MIT License.
*/`;

let input = {
  index: `./src/packages/locale/index`
};
// 动态读取file name
['zh-CN', 'zh-TW', 'en-US', 'id-ID'].map((file) => {
  input[file] = `./src/packages/locale/lang/${file}`;
});
import fs from 'fs-extra';
// 构建index.scss 兼容插件市场按需加载插件
fs.outputFile(path.resolve(__dirname, './dist/packages/locale/index.scss'), ' ', 'utf8', (error) => {});
fs.outputFile(path.resolve(__dirname, './dist/packages/locale/lang/index.scss'), ' ', 'utf8', (error) => {});

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      copyDtsFiles: true,
      cleanVueFileName: true,
      outputDir: path.resolve(__dirname, './dist/packages/'),
      include: path.resolve(__dirname, './src/packages/locale')
    })
  ],
  build: {
    minify: true,
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
        banner,
        dir: path.resolve(__dirname, './dist/packages/locale/lang'),
        entryFileNames: '[name].js',
        plugins: []
      }
    },
    emptyOutDir: false
  }
});
