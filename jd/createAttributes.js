const path = require('path');
const fs = require('fs');
const MarkdownIt = require('markdown-it')();

const basePath = path.resolve(__dirname, './../src/packages/__VUE');
const componentDirs = fs.readdirSync(basePath, 'utf8');
const TYPE_IDENTIFY_OPEN = 'tbody_open';
const TYPE_IDENTIFY_CLOSE = 'tbody_close';
const TR_TYPE_IDENTIFY_OPEN = 'tr_open';
const TR_TYPE_IDENTIFY_CLOSE = 'tr_close';

const getSubSources = (sources) => {
  let sourcesMap = [];
  const startIndex = sources.findIndex((source) => source.type === TYPE_IDENTIFY_OPEN);
  const endIndex = sources.findIndex((source) => source.type === TYPE_IDENTIFY_CLOSE);
  sources = sources.slice(startIndex, endIndex + 1);
  while (sources.filter((source) => source.type === TR_TYPE_IDENTIFY_OPEN).length) {
    let trStartIndex = sources.findIndex((source) => source.type === TR_TYPE_IDENTIFY_OPEN);
    let trEndIndex = sources.findIndex((source) => source.type === TR_TYPE_IDENTIFY_CLOSE);
    sourcesMap.push(sources.slice(trStartIndex, trEndIndex + 1));
    sources.splice(trStartIndex, trEndIndex - trStartIndex + 1);
  }
  return sourcesMap;
};

const genaratorTags = () => {
  let componentTags = {};
  if (!componentDirs.length) return;

  for (let componentDir of componentDirs) {
    let stat = fs.lstatSync(`${basePath}/${componentDir}`);
    if (stat.isDirectory()) {
      const absolutePath = path.join(`${basePath}/${componentDir}`, 'doc.md');
      if (!fs.existsSync(absolutePath)) continue;
      const data = fs.readFileSync(absolutePath, 'utf8');
      let sources = MarkdownIt.parse(data, {});
      let sourcesMap = getSubSources(sources);
      componentTags[`nut-${componentDir}`] = { attributes: [] };
      for (let sourceMap of sourcesMap) {
        let propItem = sourceMap.filter((source) => source.type === 'inline').length
          ? `${sourceMap.filter((source) => source.type === 'inline')[0].content}`
          : '';
        componentTags[`nut-${componentDir}`]['attributes'].push(propItem);
      }
    }
  }

  return componentTags;
};

const genaratorAttributes = () => {
  let componentTags = {};
  if (!componentDirs.length) return;
  for (let componentDir of componentDirs) {
    let stat = fs.lstatSync(`${basePath}/${componentDir}`);
    if (stat.isDirectory()) {
      const absolutePath = path.join(`${basePath}/${componentDir}`, 'doc.md');
      if (!fs.existsSync(absolutePath)) continue;
      const data = fs.readFileSync(absolutePath, 'utf8');
      let sources = MarkdownIt.parse(data, {});
      let sourcesMap = getSubSources(sources);
      for (let sourceMap of sourcesMap) {
        const inlineItem = sourceMap.filter((source) => source.type === 'inline').length
          ? sourceMap.filter((source) => source.type === 'inline')
          : [];
        const propItem = inlineItem.length ? `${inlineItem[0].content}` : '';
        const infoItem = inlineItem.length ? `${inlineItem[1].content}` : '';
        const typeItem = inlineItem.length ? `${inlineItem[2].content.toLowerCase()}` : '';
        const defaultItem = inlineItem.length ? `${inlineItem[3].content}` : '';
        componentTags[`nut-${componentDir}/${propItem}`] = {
          type: `${typeItem}`,
          description: `属性说明：${infoItem}，默认值：${defaultItem}`
        };
      }
    }
  }

  return componentTags;
};

const writeTags = () => {
  const componentTags = genaratorTags();
  let innerText = `${JSON.stringify(componentTags, null, 2)}`;
  const distPath = path.resolve(__dirname, './../dist');
  const componentTagsPath = path.resolve(__dirname, './../dist/smartips/tags.json');
  if (!fs.existsSync(path.join(distPath + '/smartips'))) {
    fs.mkdirSync(path.join(distPath + '/smartips'));
  }

  fs.writeFileSync(componentTagsPath, innerText);
};

const writeAttributes = () => {
  const componentAttributes = genaratorAttributes();
  let innerText = `${JSON.stringify(componentAttributes, null, 2)}`;
  const distPath = path.resolve(__dirname, './../dist');
  const componentAttributespPath = path.resolve(__dirname, './../dist/smartips/attributes.json');
  if (!fs.existsSync(path.join(distPath + '/smartips'))) {
    fs.mkdirSync(path.join(distPath + '/smartips'));
  }
  fs.writeFileSync(componentAttributespPath, innerText);
};

writeTags();
writeAttributes();
