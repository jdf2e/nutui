const config = require('../src/config.json');
const path = require('path');
const fs = require('fs-extra');
let fileStr = `@import './styles/variables.scss';\n`;

config.nav.map(item => {
  item.packages.forEach(element => {
    let folderName = element.name.toLowerCase();
    fileStr += `@import './packages/${folderName}/index.scss';\n`;
    fs.copy(
      path.resolve(__dirname, `../src/packages/${folderName}/index.scss`),
      path.resolve(__dirname, `../dist/packages/${folderName}/index.scss`)
    );
  });
});
const filterFunc = (src, dest) => {
  // your logic here
  // it will be copied if return true
  return !src.includes('font');
};
fs.copy(
  path.resolve(__dirname, '../src/styles'),
  path.resolve(__dirname, '../dist/styles'),
  { filter: filterFunc },
  err => {
    if (err) return console.error(err);
    // console.log('success!')
  }
);
fs.outputFile(
  path.resolve(__dirname, '../dist/themes.scss'),
  fileStr,
  'utf8',
  error => {
    // logger.success(`文件写入成功`);
  }
);
