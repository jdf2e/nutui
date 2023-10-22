import fs from 'fs-extra';
import { logger } from 'rslog';
import { join } from 'node:path';
import { CONFIG_DIR, TSC_TYPE_VUE_DIR, TYPES_DIR } from '../common/constant.js';
import { getPath } from '../common/index.js';
import type { ConfigJson, Target } from '../common/types.js';

const config: ConfigJson = await fs.readJSON(CONFIG_DIR);

const basePath = join(TYPES_DIR, '__VUE');

const fileList: any[] = [];

let packages: any[] = [];

const preContent = `
declare type Install<T> = T & {
  install(app: import('vue').App): void;
};\n`;
const start = 'declare const _default:';
const end = ';\nexport default _default;\n';
const regex = new RegExp(`${start}([\\s\\S]*?)${end}`);

const getCompList = (basePath: string) => {
  const files = fs.readdirSync(basePath);
  files.forEach((filename) => {
    const filedir = join(basePath, filename);
    //根据文件路径获取文件信息，返回一个fs.Stats对象
    const stats = fs.statSync(filedir);
    const isFile = stats.isFile(); //是文件
    const isDir = stats.isDirectory(); //是文件夹
    if (isFile) {
      fileList.push(filedir);
    }
    if (isDir) {
      getCompList(filedir); //递归，如果是文件夹，就继续遍历该文件夹下面的文件
    }
  });
};

const getCompName = (name: string) => {
  if (!packages.length) {
    config.nav.forEach((item) => {
      packages = packages.concat(item.packages);
    });
  }
  const packageName = packages.find((item) => item.name.toLowerCase() === name.toLowerCase());
  return packageName ? packageName.name : '';
};

const getLocale = () => {
  const source = join(TSC_TYPE_VUE_DIR, 'locale');
  const to = getPath('dist/packages/locale');
  fs.cp(source, to, { recursive: true }, (err) => {
    if (err) {
      logger.error(err);
      return;
    }
  });
};

const getResolver = () => {
  const source = join(TSC_TYPE_VUE_DIR, 'resolver');
  const to = getPath('dist/resolver');
  fs.cp(source, to, { recursive: true }, (err) => {
    if (err) {
      logger.error(err);
      return;
    }
  });
  const pkgJsonSource = getPath('src/packages/resolver/package.json');
  const pkgJsonTo = getPath('dist/resolver/package.json');
  fs.cp(pkgJsonSource, pkgJsonTo, (err) => {
    if (err) {
      logger.error(err);
      return;
    }
  });
};

export const genTypes = async (target?: Target) => {
  fs.removeSync(TYPES_DIR);
  fs.cp(TSC_TYPE_VUE_DIR, TYPES_DIR, { recursive: true }, (err) => {
    if (err) {
      logger.error(err);
      return;
    }

    const oldName = join(TYPES_DIR, `nutui${target === 'taro' ? '.taro' : ''}.vue.build.d.ts`);
    const newName = join(TYPES_DIR, 'index.d.ts');

    fs.rename(oldName, newName, (err) => {
      if (err) {
        logger.error(err);
      }
    });

    getCompList(basePath);

    fileList.forEach((item) => {
      const content = fs.readFileSync(item).toLocaleString();
      const inputs = content.match(regex);

      if (inputs && inputs.length) {
        let name = item.substring(0, item.lastIndexOf('/'));
        name = name.substring(name.lastIndexOf('/') + 1);
        const componentName = getCompName(name);
        if (componentName) {
          let remain = `
  declare module 'vue' {
    interface GlobalComponents {
        Nut${componentName}: typeof _default;
    }
  }`;
          let changeContent = content.replace(regex, `${preContent}${start} Install<${inputs[1]}>${end}${remain}`);
          fs.writeFileSync(item, changeContent);
        }
      }
    });

    //国际化处理
    getLocale();

    // resolver 类型文件
    getResolver();

    logger.success('gen-types success');
  });
};
