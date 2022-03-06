const config = require('../src/config.json');
const path = require('path');
const fs = require('fs-extra');
let fileStr = `@import '../variables.scss';\n`;
let tasks = [];
let sassStyles = '';
config.nav.map((item) => {
  item.packages.forEach((element) => {
    let folderName = element.name.toLowerCase();
    sassStyles += '\n';
    sassStyles += fs.readFileSync(path.resolve(__dirname, `../src/packages/__VUE/${folderName}/index.scss`), 'utf8');
    fileStr += `@import '../../packages/${folderName}/index.scss';\n`;
  });
});

fs.writeFile(path.resolve(__dirname, `../dist/theme/source/styles/sass-styles.scss_source`), sassStyles, 'utf8');

tasks.push(
  fs.copy(path.resolve(__dirname, '../src/packages/styles'), path.resolve(__dirname, '../dist/theme/source/styles'))
);
tasks.push(
  fs.copy(
    path.resolve(__dirname, '../src/packages/styles/variables.scss'),
    path.resolve(__dirname, '../dist/theme/source/styles/variables.scss_source')
  )
);

Promise.all(tasks).then((res) => {
  fs.outputFile(
    path.resolve(__dirname, '../dist/theme/source/styles/themes/default.scss'),
    fileStr,
    'utf8',
    (error) => {
      // logger.success(`文件写入成功`);
    }
  );
});
