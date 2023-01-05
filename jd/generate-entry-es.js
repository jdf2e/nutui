const config = require('../src/config.json');
const packageConfig = require('../package.json');
const path = require('path');
const fs = require('fs-extra');

// 获取依赖关系
const styleMap = new Map();
const tasks = [];
let outputFileEntry = ``;
let components = [];
// import Locale from './packages/locale';\n
config.nav.forEach((item) => {
  item.packages.forEach((element) => {
    styleMap.set(element.name, {
      name: element.name,
      children: element.styleDeps
    });
    // gen entry
    let outputMjs = `import _${element.name} from '../_es/${element.name}.js';
const treeshaking = (t) => t;
const ${element.name} = treeshaking(_${element.name});
export { ${element.name} };`;

    tasks.push(
      fs.outputFile(path.resolve(__dirname, `../dist/packages/${element.name}/index.mjs`), outputMjs, 'utf8', () => {
        // console.log('')
      })
    );
    let folderName = element.name.toLowerCase();
    outputFileEntry += `export * from "./packages/${folderName}/index.mjs";\n`;
    components.push(element.name);
  });
});
outputFileEntry += components
  .map((name) => `import { ${name} } from "./packages/${name.toLowerCase()}/index.mjs";`)
  .join('\n');
outputFileEntry += `\nimport { Locale } from "./packages/locale/lang";
function install(app) {
  const packages = [${components.join(',')}];
  packages.forEach((item) => {
      if (item.install) {
          app.use(item);
      } else if (item.name) {
          app.component(item.name, item);
      }
  });
}
const version = '${packageConfig.version}';
var stdin_default = {
  install,
  version,
  Locale
};
export {
  stdin_default as default,
  install,
  version,
  Locale
};`;

tasks.push(
  fs.outputFile(path.resolve(__dirname, `../dist/nutui.es.js`), outputFileEntry, 'utf8', () => {
    // console.log('')
  })
);

Promise.all(tasks);
