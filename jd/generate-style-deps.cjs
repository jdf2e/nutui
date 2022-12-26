const config = require('../src/config.json');
const path = require('path');
const fs = require('fs-extra');

// 获取依赖关系
const styleMap = new Map();
config.nav.forEach((item) => {
  item.packages.forEach((element) => {
    styleMap.set(element.name, {
      name: element.name,
      children: element.styleDeps
    });
  });
});
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

const tasks = [];
styleMap.forEach((value, key) => {
  const name = key.toLowerCase();
  let deps = getAllDeps(value, key);
  deps = deps.filter((component) => {
    return component !== key;
  });
  const outputJs = `require('./index.scss');\n${deps
    .map((component) => {
      return `require('../${component.toLowerCase()}/index.scss');\n`;
    })
    .join('')}`;
  const outputMjs = `import './index.scss';\n${deps
    .map((component) => {
      return `import '../${component.toLowerCase()}/index.scss';\n`;
    })
    .join('')}`;
  tasks.push(
    fs.outputFile(path.resolve(__dirname, `../dist/packages/${name}/index.js`), outputJs, 'utf8', () => {
      // console.log('')
    })
  );
  tasks.push(
    fs.outputFile(path.resolve(__dirname, `../dist/packages/${name}/index.mjs`), outputMjs, 'utf8', () => {
      // console.log('')
    })
  );
});

Promise.all(tasks);
