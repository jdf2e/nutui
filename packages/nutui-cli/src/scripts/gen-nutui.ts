import fs from 'fs-extra';
import { logger } from 'rslog';
import { CONFIG_DIR, PKG_DIR } from '../common/constant.js';
import type { ConfigJson, Target } from '../common/types.js';
import { getPath } from '../common/index.js';

const config: ConfigJson = await fs.readJSON(CONFIG_DIR);
const packageConfig = await fs.readJSON(PKG_DIR);

const getTaro = (target?: Target, taro?: boolean) => {
  return target === 'taro' ? taro == true : true;
};

export const genNutUI = async (target?: Target) => {
  let importStr = `import { App } from 'vue';
import Locale from './locale';\n`;
  let importScssStr = `\n`;
  const packages: any[] = [];
  const methods: any = [];

  config.nav.map((item) => {
    item.packages.forEach((element) => {
      let { name, type, exclude, taro } = element;
      if (getTaro(target, taro) == false) return;
      const filePath = getPath(`src/packages/__VUE/${name.toLowerCase()}/index.taro.vue`);
      if (name !== 'Icon') {
        importStr += `import ${name} from './__VUE/${name.toLowerCase()}/index${
          target === 'taro' && fs.existsSync(filePath) ? '.taro' : ''
        }.vue';\n`;
      }
      if (type === 'methods' && target !== 'taro') {
        importStr += `import { show${name} } from './__VUE/${name.toLowerCase()}/index';\n`;
        methods.push(`show${name}`);
      }
      importScssStr += `import './__VUE/${name.toLowerCase()}/index.scss';\n`;
      if (exclude != true) {
        packages.push(name);
      }
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
export { install, version, Locale, ${packages.join(',')}${target === 'taro' ? '' : `, ${methods.join(',')}`}};
export default { install, version${target === 'taro' ? `, Locale` : ''} };`;

  fs.outputFile(getPath(`src/packages/nutui${target === 'taro' ? '.taro' : ''}.vue.build.ts`), fileStrBuild, 'utf8');

  let fileStrDev = `${importStr}
  ${installFunction}
  ${importScssStr}${
    target === 'taro'
      ? ''
      : `
export const testComponents = { ${packages.join(',')}};`
  }
export { install, Locale, ${packages.join(',')}${target === 'taro' ? '' : `, ${methods.join(',')}`}  };
export default { install, version:'${packageConfig.version}'${target === 'taro' ? `, Locale` : ''} };`;
  fs.outputFile(getPath(`src/packages/nutui${target === 'taro' ? '.taro' : ''}.vue.ts`), fileStrDev, 'utf8');

  logger.success(`nutui${target === 'taro' ? '-taro' : ''} success`);
};
