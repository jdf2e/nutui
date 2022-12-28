const config = require('../src/config.json');
const path = require('path');
const fs = require('fs-extra');

// 获取依赖关系
const styleMap = new Map();
const tasks = [];
let outputFileEntry = ``;
// import Locale from './packages/locale';\n
config.nav.forEach((item) => {
  item.packages.forEach((element) => {
    styleMap.set(element.name, {
      name: element.name,
      children: element.styleDeps
    });
    // gen entry
    if (element.exclude != true) {
      const outputMjs = `import ${element.name} from '../_es/${element.name}.js';\nexport { ${element.name} };`;
      tasks.push(
        fs.outputFile(path.resolve(__dirname, `../dist/packages/${element.name}/index.mjs`), outputMjs, 'utf8', () => {
          // console.log('')
        })
      );

      outputFileEntry += `export * from "./packages/${element.name}/index.mjs";\n`;
    }
  });
});

tasks.push(
  fs.outputFile(path.resolve(__dirname, `../dist/nutui.es.js`), outputFileEntry, 'utf8', () => {
    // console.log('')
  })
);

styleMap.forEach((value) => {
  if (value.children && value.children.length > 0) {
    value.children.forEach((item, index) => {
      value.children[index] = styleMap.get(item);
    });
  }
});

const getAllDeps = (styleObj, key) => {
  const value = styleObj;
  if (value.children?.length === 0) {
    return [value.name];
  } else {
    let deps = [];
    value.children?.forEach((item) => {
      if (key === item.name) {
        console.error('generate-style-deps: 存在循环引用', key);
        return [];
      }
      deps = deps.concat(getAllDeps(item, key));
    });
    deps.unshift(value.name);
    return [...new Set(deps)];
  }
};


styleMap.forEach((value, key) => {
  const name = key.toLowerCase();
  let deps = getAllDeps(value, key);
  deps = deps.filter((component) => {
    return component !== key;
  });
  // gen style
  const outputStyleCJs = `require('./index.scss');\n${deps
    .map((component) => {
      return `require('../${component.toLowerCase()}/index.scss');\n`;
    })
    .join('')}`;
  const outputStyleMjs = `import './index.scss';\n${deps
    .map((component) => {
      return `import '../${component.toLowerCase()}/index.scss';\n`;
    })
    .join('')}`;

  tasks.push(
    fs.outputFile(path.resolve(__dirname, `../dist/packages/${name}/style.cjs`), outputStyleCJs, 'utf8', () => {
      // console.log('')
    })
  );
  tasks.push(
    fs.outputFile(path.resolve(__dirname, `../dist/packages/${name}/style.mjs`), outputStyleMjs, 'utf8', () => {
      // console.log('')
    })
  );
});

Promise.all(tasks);
