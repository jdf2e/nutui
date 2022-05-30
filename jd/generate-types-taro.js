const config = require('../src/config.json');
const package = require('../package.json');
const path = require('path');
const fs = require('fs-extra');
let importStr = `import Locale from '../packages/locale';\n`;
const packages = [];
config.nav.map((item) => {
  item.packages.forEach((element) => {
    let { name } = element;
    const filePath = path.join(`./src/packages/__VUE/${name.toLowerCase()}/index.taro.vue`);
    importStr += `import ${name} from './__VUE/${name.toLowerCase()}/${
      fs.existsSync(filePath) ? 'index.taro.vue' : 'index.vue'
    }';\n`;

    packages.push(name);
  });
});
let installFunction = `
export { Locale,${packages.join(',')} };`;
let fileStr = importStr + installFunction;
fs.outputFileSync(path.resolve(__dirname, '../dist/types/nutui.d.ts'), fileStr, 'utf8');
fs.outputFileSync(
  path.resolve(__dirname, '../dist/types/index.d.ts'),
  `declare namespace _default {
  export { install };
  export { version };
}
export function install(app: any): void;
export const version: '${package.version}';
export default _default;
export * from './nutui';`,
  'utf8'
);
