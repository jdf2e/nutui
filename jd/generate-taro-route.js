const fse = require('fs-extra');
const config = require('../src/config.json');
const escodegen = require('escodegen');
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
  const configTemplate = {
    pages: ['pages/index/index'],
    subpackages: '',
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'NutUI',
      navigationBarTextStyle: 'black'
    }
  };

  configTemplate.subpackages = await createConfig();

  fse.writeFileSync(taroConfig, `export default ${JSON.stringify(configTemplate)}`, 'utf8');
};

create();
