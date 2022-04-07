import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import config from './package.json';
import configPkg from './src/config.json';

const banner = `/*!
* ${config.name} v${config.version} ${new Date()}
* (c) 2022 @jdf2e.
* Released under the MIT License.
*/`;

let input = {};

configPkg.nav.map((item) => {
  item.packages.forEach((element) => {
    let { name, type } = element;
    input[name] = `./src/packages/__VUE/${name.toLowerCase()}/index${type === 'methods' ? '.ts' : '.vue'}`;
  });
});

export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }]
  },
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      copyDtsFiles: false,
      cleanVueFileName: true,
      outputDir: path.resolve(__dirname, './dist/types'),
      include: path.resolve(__dirname, './src/packages/__VUE'),
      beforeWriteFile: (filePath: string, content: string) => {
        const fileContent = `import { App } from 'vue';
declare type Install<T> = T & {
  install(app: App): void;
};
`;
        const start = 'declare const _default:';
        const end = ';\nexport default _default;\n';
        const remain = `
declare module 'vue' {
  interface GlobalComponents {
      Nut${Object.keys(input).find(
        (item: string) => item.toLowerCase() === filePath.split('/').slice(-2)[0]
      )}: typeof _default;
  }
}     
      `;
        const inputs = content.match(RegExp(`${start}([\\s\\S]*?)${end}`));
        const changeContent = inputs && inputs.length ? `${start} Install<${inputs[1]}>${end}${remain}` : content;
        return {
          filePath,
          content: fileContent + changeContent
        };
      }
    })
  ],
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
      external: ['vue', 'vue-router'],
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
