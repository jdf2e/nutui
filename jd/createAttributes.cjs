const path = require('path');
const fs = require('fs');
const MarkdownIt = require('markdown-it')();

const basePath = path.resolve(__dirname, './../src/packages/__VUE');
const componentDirs = fs.readdirSync(basePath, 'utf8');
const config = require('../package.json');
const cfg = require('./../src/config.json');
const TYPE_IDENTIFY_OPEN = 'tbody_open';
const TYPE_IDENTIFY_CLOSE = 'tbody_close';
const TR_TYPE_IDENTIFY_OPEN = 'tr_open';
const TR_TYPE_IDENTIFY_CLOSE = 'tr_close';
const argv = process.argv[2];
let packages = [];

const kebabCase = (str) => {
  str = str.replace(str.charAt(0), str.charAt(0).toLocaleLowerCase());
  return str.replace(/([a-z])([A-Z])/g, (_, p1, p2) => p1 + '-' + p2.toLowerCase());
};

const getCompName = (name) => {
  if(!packages.length) {
    cfg.nav.forEach((item, index) => {
      packages = packages.concat(item.packages);
    });
  }
  const packageName = packages.find((item) => item.name.toLowerCase() === name.toLowerCase());
  return packageName.name
}

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

const genaratorWebTypes = () => {
  let typesData = {
    $schema: 'https://raw.githubusercontent.com/JetBrains/web-types/master/schema/web-types.json',
    framework: 'vue',
    name: 'NutUI',
    version: config.version,
    contributions: {
      html: {
        tags: [],
        attributes: [],
        'types-syntax': 'typescript'
      }
    }
  };

  if (!componentDirs.length) return;

  for (let componentDir of componentDirs) {
    let stat = fs.lstatSync(`${basePath}/${componentDir}`);
    if (stat.isDirectory()) {
      let absolutePath = path.join(`${basePath}/${componentDir}`, `doc.md`);
      if(argv === 'taro') {
        absolutePath = path.join(`${basePath}/${componentDir}`, `doc.taro.md`);
      }
      let attributes = [];
      if (!fs.existsSync(absolutePath)) continue;
      const data = fs.readFileSync(absolutePath, 'utf8');
      let sources = MarkdownIt.parse(data, {});
      let sourcesMap = getSubSources(sources);
      for (let sourceMap of sourcesMap) {
        const inlineItem = sourceMap.filter((source) => source.type === 'inline').length
          ? sourceMap.filter((source) => source.type === 'inline')
          : [];
        const propItem = inlineItem.length ? `${inlineItem[0].content.replace(/`.*?`/g, '')}` : '';
        const infoItem = inlineItem.length ? `${inlineItem[1].content}` : '';
        const typeItem = inlineItem.length ? `${inlineItem[2].content.toLowerCase()}` : '';
        const defaultItem = inlineItem.length ? `${inlineItem[3].content}` : '';
        attributes.push({
          name: propItem,
          default: defaultItem,
          description: infoItem,
          value: {
            type: typeItem,
            kind: 'expression'
          }
        });
      }
      let compoName = kebabCase(getCompName(componentDir));
      typesData.contributions.html.tags.push({
        name: `nut-${compoName}`,
        slots: [],
        events: [],
        attributes: attributes.slice()
      });
    }
  }

  return typesData;
};

const writeWebTypes = () => {
  const typesData = genaratorWebTypes();
  let innerText = `${JSON.stringify(typesData, null, 2)}`;
  const distPath = path.resolve(__dirname, './../dist');
  const componentWebTypespPath = path.resolve(__dirname, './../dist/smartips/web-types.json');
  if (!fs.existsSync(path.join(distPath + '/smartips'))) {
    fs.mkdirSync(path.join(distPath + '/smartips'));
  }
  fs.writeFileSync(componentWebTypespPath, innerText);
};

writeWebTypes();
