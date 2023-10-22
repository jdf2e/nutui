import fs from 'fs-extra';
import { logger } from 'rslog';
import { CONFIG_DIR, DIST_DIR, PKG_DIR, VUE_DIR } from '../common/constant.js';
import { getPath } from '../common/index.js';
import MarkdownIt from 'markdown-it';
import type { ConfigJson } from '../common/types.js';
import { join } from 'node:path';
import Token from 'markdown-it/lib/token.js';

const basePath = VUE_DIR;
const componentDirs = fs.readdirSync(basePath, 'utf8');
const config = await fs.readJSON(PKG_DIR);
const cfg: ConfigJson = await fs.readJSON(CONFIG_DIR);
const TYPE_IDENTIFY_OPEN = 'tbody_open';
const TYPE_IDENTIFY_CLOSE = 'tbody_close';
const TR_TYPE_IDENTIFY_OPEN = 'tr_open';
const TR_TYPE_IDENTIFY_CLOSE = 'tr_close';
let packages: any[] = [];

const kebabCase = (str: string) => {
  str = str.replace(str.charAt(0), str.charAt(0).toLocaleLowerCase());
  return str.replace(/([a-z])([A-Z])/g, (_, p1, p2) => p1 + '-' + p2.toLowerCase());
};

const getCompName = (name: string) => {
  if (!packages.length) {
    cfg.nav.forEach((item) => {
      packages = packages.concat(item.packages);
    });
  }
  const packageName = packages.find((item) => item.name.toLowerCase() === name.toLowerCase());
  return packageName.name;
};

const getSubSources = (sources: Token[]) => {
  let sourcesMap = [];
  const startIndex = sources.findIndex((source: { type: string }) => source.type === TYPE_IDENTIFY_OPEN);
  const endIndex = sources.findIndex((source: { type: string }) => source.type === TYPE_IDENTIFY_CLOSE);
  sources = sources.slice(startIndex, endIndex + 1);
  while (sources.filter((source: { type: string }) => source.type === TR_TYPE_IDENTIFY_OPEN).length) {
    let trStartIndex = sources.findIndex((source: { type: string }) => source.type === TR_TYPE_IDENTIFY_OPEN);
    let trEndIndex = sources.findIndex((source: { type: string }) => source.type === TR_TYPE_IDENTIFY_CLOSE);
    sourcesMap.push(sources.slice(trStartIndex, trEndIndex + 1));
    sources.splice(trStartIndex, trEndIndex - trStartIndex + 1);
  }
  return sourcesMap;
};

const genaratorWebTypes = (type?: 'taro') => {
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
      let absolutePath = join(`${basePath}/${componentDir}`, `doc.md`);
      if (type === 'taro') {
        absolutePath = join(`${basePath}/${componentDir}`, `doc.taro.md`);
      }
      let attributes = [];
      if (!fs.existsSync(absolutePath)) continue;
      const data = fs.readFileSync(absolutePath, 'utf8');
      const md = new MarkdownIt();
      let sources = md.parse(data, {});
      let sourcesMap = getSubSources(sources);
      for (let sourceMap of sourcesMap) {
        const inlineItem = sourceMap.filter((source: { type: string }) => source.type === 'inline').length
          ? sourceMap.filter((source: { type: string }) => source.type === 'inline')
          : [];
        const propItem = inlineItem.length ? `${inlineItem[0]?.content?.replace(/`.*?`/g, '')}` : '';
        const infoItem = inlineItem.length ? `${inlineItem[1]?.content}` : '';
        const typeItem = inlineItem.length ? `${inlineItem[2]?.content?.toLowerCase()}` : '';
        const defaultItem = inlineItem.length ? `${inlineItem[3]?.content}` : '';
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
      (typesData.contributions.html.tags as any[]).push({
        name: `nut-${compoName}`,
        slots: [],
        events: [],
        attributes: attributes.slice()
      });
    }
  }

  return typesData;
};

export const createAttributes = async (type?: 'taro') => {
  const typesData = genaratorWebTypes(type);
  let innerText = `${JSON.stringify(typesData, null, 2)}`;
  const distPath = DIST_DIR;
  const componentWebTypespPath = getPath('dist/smartips/web-types.json');
  if (!fs.existsSync(join(distPath + '/smartips'))) {
    fs.mkdirSync(join(distPath + '/smartips'));
  }
  fs.writeFileSync(componentWebTypespPath, innerText);
  logger.success('create-attributes success');
};
