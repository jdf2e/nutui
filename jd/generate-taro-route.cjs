const fse = require('fs-extra');
const config = require('../src/config.json');
const targetBaseUrl = `${process.cwd()}/src`;
const taroConfig = `${targetBaseUrl}/sites/mobile-taro/vue/src/app.config.ts`;

// 创建 config
const createConfig = async () => {
  let configRef = [];

  return new Promise((res, rej) => {
    config.nav.map((item) => {
      let co = {
        root: item.enName,
        pages: []
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

const create = async () => {
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
};

create();
