import packageConfig from '../package.json' assert { type: 'json' };
import config from '../src/config.json' assert { type: 'json' };
import { fileURLToPath } from 'url';
import { resolve, dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import { outputFile } from 'fs-extra';
let importStr = `import { App } from 'vue';
import Locale from './locale';\n`;
let importScssStr = `\n`;
const packages = [];
config.nav.map((item) => {
  item.packages.forEach((element) => {
    let { name, type } = element;
    importStr += `import ${name} from './__VUE/${name.toLowerCase()}/index${type === 'methods' ? '' : '.vue'}';\n`;
    importScssStr += `import './__VUE/${name.toLowerCase()}/index.scss';\n`;
    packages.push(name);
  });
});
let installFunction = `function install(app: App) {
  const packages = [${packages.join(',')}];
  packages.forEach((item:any) => {
    if (item.install) {
      app.use(item);
    } else if (item.name) {
      app.component(item.name, item);
    }
  });
}`;
let fileStrBuild = `${importStr}
${installFunction}
const version = '${packageConfig.version}';
export { install, version, Locale, ${packages.join(',')}};
export default { install, version, Locale};`;

outputFile(resolve(__dirname, '../src/packages/nutui.vue.build.ts'), fileStrBuild, 'utf8', (error) => {
  // logger.success(`${package_config_path} 文件写入成功`);
});

let fileStrDev = `${importStr}
${installFunction}
${importScssStr}
export const testComponents = { ${packages.join(',')}};
export { install, Locale, ${packages.join(',')}  };
export default { install, version:'${packageConfig.version}', Locale};`;
outputFile(resolve(__dirname, '../src/packages/nutui.vue.ts'), fileStrDev, 'utf8', (error) => {
  // logger.success(`${package_config_path} 文件写入成功`);
});
