import fse from 'fs-extra';
import fs from 'fs';
const copyFile = (from, to) => {
  fse
    .copy(from, to)
    .then(() => {
      console.log('success!>', to);
    })
    .catch((err) => {
      console.error(err);
    });
};

const copy = async () => {
  let configPath = `src/config.json`;

  // 复制所有组件
  const fromConfig = await fse.readJson(configPath);
  fromConfig.nav.forEach(({ packages }) => {
    packages.forEach((item) => {
      if (item.show) {
        let cmpName = item.name.toLowerCase();
        let docpath = `src/packages/__VUE/${cmpName}/doc.md`;
        let doctaropath = `src/packages/__VUE/${cmpName}/doc.taro.md`;
        fs.access(doctaropath, fs.constants.F_OK, (err) => {
          if (err) {
            fse.readFile(docpath, (err, data) => {
              if (!err) {
                copyFile(docpath, doctaropath);
              }
            });
          }
        });
      }
    });
  });
};

copy();
