const path = require('path');
const fs = require('fs-extra');

const distPath = path.resolve(__dirname, './../dist');

const nutuiPath = path.resolve(
  __dirname,
  './../src/sites/mobile-taro/vue/node_modules/@nutui/nutui/dist'
);

//创建 dist 目录
fs.ensureDirSync(distPath);

// 创建 node_modules 下的 nutui目录
if (
  !fs.existsSync(
    path.resolve(
      __dirname,
      './../src/sites/mobile-taro/vue/node_modules/@nutui'
    )
  )
) {
  console.error('please run yarn or npm first');
  process.exit(-1);
}

//执行拷贝
fs.copy(distPath, nutuiPath, err => {
  if (err) {
    console.err('An error occured while copying the folder.');
  }
  console.log('Copy completed!');
});
