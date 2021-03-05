const package = require('../package.json');
const config = require('../src/config.json');
const path = require('path');
const fs = require('fs');
let importStr = '';
const packages = [];
config.nav.map(item => {
  item.packages.forEach(element => {
    let { name, show } = element;
    if (show) {
      importStr += `import ${name} from './packages/${name.toLowerCase()}/index.vue';\n`;
      packages.push(name);
    }
  });
});
let installFunction = `
  function install(app: any) {
    const packages = [${packages.join(',')}];
    packages.forEach((item:any) => {
      if (item.install) {
        app.use(item);
      } else if (item.name) {
        app.component(item.name, item);
      }
    });
  }
  `;
let fileStr = `
  ${importStr}
  ${installFunction}
export { ${packages.join(',')}  };
export default { install, version:'${package.version}'};`;
fs.writeFile(
  path.resolve(__dirname, '../src/nutui.ts'),
  fileStr,
  'utf8',
  error => {
    // logger.success(`${package_config_path} 文件写入成功`);
  }
);
