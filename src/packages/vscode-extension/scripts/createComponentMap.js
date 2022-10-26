const path = require('path');
const fs = require('fs');
const MarkdownIt = require('markdown-it')();

const basePath = path.resolve(__dirname, './../../__VUE');
const componentDirs = fs.readdirSync(basePath, 'utf8');
const TYPE_IDENTIFY_OPEN = 'tbody_open';
const TYPE_IDENTIFY_CLOSE = 'tbody_close';
const TR_TYPE_IDENTIFY_OPEN = 'tr_open';
const TR_TYPE_IDENTIFY_CLOSE = 'tr_close';

const getSubSources = (sources) => {
  const startIndex = sources.findIndex((source) => source.type === TYPE_IDENTIFY_OPEN);
  const endIndex = sources.findIndex((source) => source.type === TYPE_IDENTIFY_CLOSE);
  sources = sources.slice(startIndex, endIndex + 1);
  const trStartIndex = sources.findIndex((source) => source.type === TR_TYPE_IDENTIFY_OPEN);
  const trEndIndex = sources.findIndex((source) => source.type === TR_TYPE_IDENTIFY_CLOSE);
  return sources.slice(trStartIndex, trEndIndex + 1);
};

const genaratorComponentMap = () => {
  let componentMap = {};
  if (!componentDirs.length) return;

  for (let componentDir of componentDirs) {
    let stat = fs.lstatSync(`${basePath}/${componentDir}`);
    if (stat.isDirectory()) {
      const absolutePath = path.join(`${basePath}/${componentDir}`, 'doc.md');
      if (!fs.existsSync(absolutePath)) continue;
      const data = fs.readFileSync(absolutePath, 'utf8');
      let sources = MarkdownIt.parse(data, {});
      sources = getSubSources(sources);
      componentMap[componentDir] = {
        site: `/zh-CN/component/${componentDir}`,
        props: sources.filter((source) => source.type === 'inline').length
          ? [`${sources.filter((source) => source.type === 'inline')[0].content}=''`]
          : ['']
      };
    }
  }

  return componentMap;
};

const writeFileInComponentMap = () => {
  const componentMap = genaratorComponentMap();
  let innerText = `
import { ComponentDesc } from './componentDesc';

export const componentMap: Record<string, ComponentDesc> = ${JSON.stringify(componentMap, null, 2)}
`;

  const componentMapPath = path.resolve(__dirname, './../src/componentMap.ts');

  fs.writeFileSync(componentMapPath, innerText);
};

writeFileInComponentMap();
