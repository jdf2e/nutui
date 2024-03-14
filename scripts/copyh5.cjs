const targetBaseUrl = `${process.cwd()}/site_docs`;
const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');
const replaceFile = (file) => {
  fs.readFile(file, 'utf8', function(err, data) {
    if (err) throw err;
  
    // 修改文件内容
    data = data.replace(/> demo: ([-0-9a-z .]*)[\n|\r\n]/g, (_match, $1) => {
      const [left, right] = $1.split(' ');
      const target = path.resolve('src/packages/__VUE/', left, 'demo', `${right}.vue`);
      let code = '';
      try {
        code = fs.readFileSync(target, 'utf-8').trim();
      } catch (err) {
        code =
          '[script] copy:h5 File not found: ' + target;
        console.warn(code);
      }
      return code ? `:::demo

\`\`\`vue
${code}
\`\`\`

:::\n` : '';
    });
  
    fs.writeFile(file, data, function(err) {
      if (err) throw err;
    });
  });
}
const copyFile = (from, to) => {
  fse
    .copy(from, to)
    .then(() => {
      console.log('success!>', to);
      replaceFile(to);
    })
    .catch((err) => {
      console.error(err);
    });
};
const removeFile = async (url) => {
  return new Promise((res, rej) => {
    fse.remove(url, (err) => {
      if (err) {
        throw err;
      }
      res(true);
    });
  });
};

const copy = async () => {
  let configPath = `src/config.json`;
  let configPkgPath = `package.json`;
  let nutuiDocsConfigPath = `${targetBaseUrl}/config.json`;

  // 判断 site_docs 文件是否存在根路径中
  const existsRoot = await fse.pathExists(targetBaseUrl);

  if (existsRoot) await removeFile(targetBaseUrl);
  // 复制所有组件
  const fromConfig = await fse.readJson(configPath);
  fromConfig.nav.forEach(({ packages }) => {
    packages.forEach((item) => {
      if (item.show !== false) {
        let cmpName = item.name.toLowerCase();
        let docpath = `src/packages/__VUE/${cmpName}/doc.md`;
        let docEnPath = `src/packages/__VUE/${cmpName}/doc.en-US.md`;
        fse.readFile(docpath, (err, data) => {
          if (!err) {
            copyFile(docpath, `${targetBaseUrl}/docs/${cmpName}/doc.md`);
          }
        });
        fse.readFile(docEnPath, (err, data) => {
          if (!err) {
            copyFile(docEnPath, `${targetBaseUrl}/docs/${cmpName}/doc.en-US.md`);
          }
        });
      }
    });
  });

  // 复制 config.json
  const fromPkgConfig = await fse.readJson(configPkgPath);

  const obj = {
    version: '',
    nav: [],
    docs: []
  };
  fse.outputJSON(nutuiDocsConfigPath, obj, () => {
    const docsConfig = fse.readJson(nutuiDocsConfigPath);
    docsConfig.version = fromPkgConfig.version;
    docsConfig.nav = fromConfig.nav;
    docsConfig.docs = fromConfig.docs;
    // docsConfig.demoUrl = 'https://nutui.jd.com/3x/demo.html#';
    docsConfig.demoUrl = 'https://nutui.jd.com/h5/vue/4x/demo.html#';
    fse
      .writeJson(nutuiDocsConfigPath, docsConfig, {
        spaces: 2
      })
      .then(() => {
        console.log(`${fromPkgConfig.version} success!`);
      });
  });
};
copy();
