import fs from 'fs-extra';
import { logger } from 'rslog';
import { CONFIG_DIR, PKG_DIR } from '../common/constant.js';
import type { ConfigJson, Target } from '../common/types.js';
import { getPath } from '../common/index.js';

const config: ConfigJson = await fs.readJSON(CONFIG_DIR);
const packageConfig = await fs.readJSON(PKG_DIR);

export const genDeps = async (target?: Target) => {
  if (!target) {
    logger.error('缺少 nutui or nutui-taro 参数！');
    return;
  }

  // 获取依赖关系
  const styleMap = new Map();
  const tasks = [];
  let outputFileEntry = ``;
  let components: any[] = [];
  // import Locale from './packages/locale';\n
  config.nav.forEach((item) => {
    item.packages.forEach((element) => {
      styleMap.set(element.name, {
        name: element.name
      });
      if (target === 'nutui-taro' && element.taro === false) return; // 排除无 Taro 版组件
      // gen entry
      if (element.exclude != true) {
        let outputMjs = '';
        if (element.type == 'methods' && target == 'nutui') {
          outputMjs = `import _${element.name} from '../_es/${element.name}.js';
import { show${element.name} } from '../_es/${element.name}.js';
const treeshaking = (t) => t;
const ${element.name} = treeshaking(_${element.name});
export { ${element.name}, show${element.name} };`;
        } else {
          outputMjs = `import _${element.name} from '../_es/${element.name}.js';
const treeshaking = (t) => t;
const ${element.name} = treeshaking(_${element.name});
export { ${element.name} };`;
        }
        tasks.push(fs.outputFile(getPath(`dist/packages/${element.name}/index.mjs`), outputMjs, 'utf8'));
        let folderName = element.name.toLowerCase();
        outputFileEntry += `export * from "./packages/${folderName}/index.mjs";\n`;
        components.push(element.name);
      }
    });
  });
  outputFileEntry += components
    .map((name) => `import { ${name} } from "./packages/${name.toLowerCase()}/index.mjs";`)
    .join('\n');
  outputFileEntry += `\nexport { Locale } from "./packages/locale/lang";
export function install(app) {
  const packages = [${components.join(',')}];
  packages.forEach((item) => {
    if (item.install) {
      app.use(item);
    } else if (item.name) {
      app.component(item.name, item);
    }
  });
}
export const version = '${packageConfig.version}';
export default {
  install,
  version
};`;

  tasks.push(fs.outputFile(getPath(`dist/nutui.es.js`), outputFileEntry, 'utf8'));

  styleMap.forEach((value, key) => {
    const name = key.toLowerCase();
    // gen style
    const outputStyleMjs = `import '../../../styles/reset.css';\nimport '../index.scss';\n`;
    const outputStyleCssMjs = `import '../../../styles/reset.css';\nimport '../index.css';\n`;
    tasks.push(fs.outputFile(getPath(`dist/packages/${name}/style/index.mjs`), outputStyleMjs, 'utf8'));
    tasks.push(fs.outputFile(getPath(`dist/packages/${name}/style/css.mjs`), outputStyleCssMjs, 'utf8'));
  });

  Promise.all(tasks).then(() => {
    logger.success('gen-deps success!');
  });
};
