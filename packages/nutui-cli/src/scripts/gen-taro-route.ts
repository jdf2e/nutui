import fse from 'fs-extra';
import { logger } from 'rslog';
import { getPath } from '../common/index.js';
import { CONFIG_DIR } from '../common/constant.js';
import type { ConfigJson } from '../common/types';

const config: ConfigJson = await fse.readJson(CONFIG_DIR);
const taroConfig = getPath(`/packages/nutui-taro-demo/src/app.config.ts`);

// 创建 config
const createConfig = async () => {
  let configRef: any[] = [];

  return new Promise((res) => {
    config.nav.map((item) => {
      let co = {
        root: item.enName,
        pages: [] as string[]
      };

      item.packages.map((it) => {
        if (!(it.exportEmpty == false) && it.show) {
          co.pages.push(`pages/${it.name.toLowerCase()}/index`);
        }
      });

      configRef.push(co);
    });

    res(configRef);
  });
};

export const genTaroRoute = async () => {
  const subpackages = await createConfig();

  fse.writeFileSync(
    taroConfig,
    `
const subPackages = ${JSON.stringify(subpackages, null, 2)};\n
export default {
  pages: ['pages/index/index'],
  subPackages,
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'NutUI',
    navigationBarTextStyle: 'black'
  }
}`,
    'utf8'
  );
  logger.success('app.config.ts 创建成功');
};
