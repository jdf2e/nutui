const config = require('../src/config.json');
const path = require('path');
const fs = require('fs-extra');
let sassFileStr = ``;
let tasks = [];
config.nav.map((item) => {
  item.packages.forEach((element) => {
    let folderName = element.name.toLowerCase();
    tasks.push(
      fs
        .copy(
          path.resolve(__dirname, `../src/packages/__VUE/${folderName}/index.scss`),
          path.resolve(__dirname, `../dist/packages/${folderName}/index.scss`)
        )
        .then((success) => {
          sassFileStr += `@import '../../packages/${folderName}/index.scss';\n`;
        })
        .catch((error) => {})
    );
  });
});

tasks.push(fs.copy(path.resolve(__dirname, '../src/packages/styles'), path.resolve(__dirname, '../dist/styles')));

Promise.all(tasks).then((res) => {
  let themes = [
    { file: 'default.scss', sourcePath: `@import '../variables.scss';` },
    { file: 'jdt.scss', sourcePath: `@import '../variables-jdt.scss';` },
    { file: 'jdb.scss', sourcePath: `@import '../variables-jdb.scss';` },
    { file: 'jddkh.scss', sourcePath: `@import '../variables-jddkh.scss';` }
  ];

  themes.forEach((item) => {
    fs.outputFile(
      path.resolve(__dirname, `../dist/styles/themes/${item.file}`),
      `${item.sourcePath}
${sassFileStr}`,
      'utf8',
      (error) => {
        // logger.success(`文件写入成功`);
      }
    );
  });
});
