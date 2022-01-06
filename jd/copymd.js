const computerBase = '';
const vueBaseUrl = `${computerBase}..`;
const reactBaseUrl = `${computerBase}nutui-react`;
const fse = require('fs-extra');
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
const copy = async (fromGit, type) => {
  let configPath = `src/config.json`;
  let configPkgPath = `package.json`;
  let nutuiDocsConfigPath = `docs/docs_${type}/config.json`;

  const exists = await fse.pathExists(configPath);
  console.log(exists, configPath);
  if (exists) {
    const fromConfig = await fse.readJson(configPath);

    const fromPkgConfig = await fse.readJson(configPkgPath);

    const docsConfig = await fse.readJson(nutuiDocsConfigPath);
    console.log(docsConfig);
    docsConfig.version = fromPkgConfig.version;
    docsConfig.nav = fromConfig.nav;
    docsConfig.docs = fromConfig.docs;
    console.log(fromConfig.docs);

    fse
      .writeJson(nutuiDocsConfigPath, docsConfig, {
        spaces: 2
      })
      .then(() => {
        console.log(`${docsConfig.version} success!`);
      });
    fromConfig.nav.forEach(({ packages }) => {
      packages.forEach((item) => {
        if (item.show) {
          let cmpName = item.name.toLowerCase();
          let docpath = `src/packages/__VUE/${cmpName}/doc.md`;
          if (type == 'react') {
            docpath = `${fromGit}/src/packages/${cmpName}/doc.md`;
          }
          let doctaropath = `src/packages/__VUE/${cmpName}/doc.taro.md`;
          fse.readFile(docpath, (err, data) => {
            if (!err) {
              copyFile(docpath, `docs/docs_${type}/docs/${cmpName}/doc.md`);
            }
          });
          fse.readFile(doctaropath, (err, data) => {
            if (!err) {
              copyFile(doctaropath, `docs/docs_${type}/docs/${cmpName}/doc.taro.md`);
            }
          });
        }
      });
    });
  }
};
// copy(reactBaseUrl, 'react');
copy(vueBaseUrl, 'vue');
