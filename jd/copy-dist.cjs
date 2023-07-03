#!/usr/bin/env node
let target = process.argv[2];
const packageConfig = require('../package.json');
if (!target) {
  console.error('缺少 nutui or nutui-taro 参数！');
  return;
}
let copyfile = ['dist', 'README.md', 'LICENSE', 'CHANGELOG.md'];
const path = require('path');
const fs = require('fs-extra');
// 清空 dist
fs.emptyDirSync(path.resolve(__dirname, `../publish/${target}/dist`));
copyfile.forEach((filename) => {
  fs.copy(path.resolve(__dirname, `../${filename}`), path.resolve(__dirname, `../publish/${target}/${filename}`)).then(
    (res) => {
      console.log(`publish/${target}/${filename} 写入成功`);
    }
  );
});
const targetPkgPath = path.resolve(__dirname, `../publish/${target}/package.json`);
const targetPkgStr = fs.readFileSync(targetPkgPath);
const targetPkgObj = JSON.parse(targetPkgStr);
targetPkgObj.version = packageConfig.version;
fs.outputFile(targetPkgPath, JSON.stringify(targetPkgObj, null, 2), 'utf8', () => {
  console.log(`${targetPkgPath} 写入成功`);
});
