const config = require('../src/config.json');
const path = require('path');
const fs = require('fs-extra');
let importStr = ``;
const packages = [];
config.nav.map((item) => {
  item.packages.forEach((element) => {
    let { name } = element;
    importStr += `import ${name} from './__VUE/${name.toLowerCase()}';\n`;

    packages.push(name);
  });
});
let installFunction = `
export { ${packages.join(',')} };`;
let fileStr = importStr + installFunction;
fs.outputFileSync(path.resolve(__dirname, '../dist/types/nutui.d.ts'), fileStr, 'utf8');
fs.outputFileSync(
  path.resolve(__dirname, '../dist/types/index.d.ts'),
  `import * as NutUI from './nutui';
export default NutUI;
export * from './nutui';`,
  'utf8'
);
