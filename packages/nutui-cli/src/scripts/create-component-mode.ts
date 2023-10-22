// 创建模板
import fs from 'fs-extra';
import { join } from 'node:path';
import inquirer from 'inquirer';
import ora, { Ora } from 'ora';
import esprima from 'esprima';
import estraverse from 'estraverse';
import escodegen from 'escodegen';
import demoModel from './demo.js';
import { CONFIG_DIR } from '../common/constant.js';
import type { ConfigJson } from '../common/types.js';

type FilePath = {
  sourcePath: string;
  taroPath: string;
};

const config: ConfigJson = await fs.readJSON(CONFIG_DIR);

const nav = config.nav;

let spinner: Ora;

let componentConfig = {
  version: '3.0.0', //版本
  name: '', //组件名称
  cType: '', //组件属于哪种类型
  cName: '', //组件中文名称
  desc: '', //组件描述
  show: true, //组件是否显示在demo/文档中
  tarodoc: false, //是否显示taro文档
  type: 'component',
  // taro: true, //是否生成.taro.vue文件，因为目前默认组件都会生成，所以，此项目前用不到
  // exportEmpty: true, //表示是否要在生成运行时文件时导出组件模块，目前用不到
  // exportEmptyTaro: true, //表示是否要在生成taro运行文件时导出组件模块，目前用不到
  author: ''
};

const questions = [
  {
    type: 'input',
    name: 'name',
    message: '组件英文名(每个单词的首字母都大写，例如InputNumber)：',
    validate(value: any) {
      value = value.trim();
      if (!value) return '组件名称不能为空';
      if (!/^[A-Z][a-zA-Z]*$/.test(value)) return '组件名称采用驼峰式命名，且首字母大写，如InputNumber';
      for (let i = 0; i < nav.length; i++) {
        const item = nav[i];
        const cItem = item.packages.find((values) => values.name === value);
        if (cItem) return `${value}已存在！`;
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'cName',
    message: '组件中文名(10字以内)：',
    validate(value: any) {
      value = value.trim();
      if (value && value.length <= 10) return true;
      return `组件名称不能为空，并且在10字以内`;
    }
  },
  {
    type: 'input',
    name: 'desc',
    message: '组件描述(50字以内)：',
    validate(value: any) {
      value = value.trim();
      if (value && value.length <= 50) return true;
      return `组件描述不能为空，并且在50字以内`;
    }
  },
  {
    type: 'rawlist',
    name: 'cType',
    message: '请选择组件的分类',
    choices: nav.map((item) => `${item.name}`),
    validate(value: any) {
      value = +value.trim();
      if (value && /\d+$/.test(value) && value <= nav.length) return true;
      return `您的输入有误，请输入编号`;
    }
  },
  {
    type: 'confrim',
    name: 'type',
    message: '组件是否支持函数式调用(y/n)',
    default: 'n'
  },
  {
    type: 'confrim',
    name: 'show',
    message: '组件是否显示在文档和demo中(y/n)，如：SwiperItem则不需要',
    default: 'y'
  },
  {
    type: 'input',
    name: 'author',
    message: '请输入组件作者(可署化名)'
  }
];

const traverseAst = (ast: esprima.Program, componentName: string, componentType?: string) => {
  estraverse.traverse(ast, {
    enter: (node: any) => {
      if (node.type === 'VariableDeclarator' && node.id.name === 'subpackages') {
        node.init.elements.forEach((item: { properties: any[] }) => {
          const itemKey = item.properties.find((value: { key: { value: string } }) => value.key.value === 'root').value
            .value;
          const itemValue = item.properties.find((value: { key: { value: string } }) => value.key.value === 'pages')
            .value.elements;
          const path = `pages/${componentName}/index`;
          if (itemKey === componentType && !itemValue.find((subItem: { value: string }) => subItem.value === path)) {
            itemValue.push({
              type: 'Literal',
              value: path,
              raw: "'pages/'" + componentName + "'/index'"
            });
          }
        });
      }
    }
  });
};

const generateToFile = (ast: esprima.Program, taroConfigPath: string) => {
  const code = escodegen.generate(ast);
  fs.writeFileSync(taroConfigPath, code, 'utf8');
};

const createSource = async (paths: FilePath) => {
  /**生成 vue .taro.vue 文件 */
  const sourcePath = paths.sourcePath;
  const name = sourcePath.substring(sourcePath.lastIndexOf('/') + 1);
  const content = demoModel(name).source;
  const filePath = join(sourcePath, 'index.vue');
  const taroFilePath = join(sourcePath, 'index.taro.vue');
  if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, content);
  if (!fs.existsSync(taroFilePath)) fs.writeFileSync(taroFilePath, content);
};

const createDemo = (paths: FilePath) => {
  /**生成 demo tarodemo taro配置文件 */
  const sourcePath = paths.sourcePath;
  const name = sourcePath.substring(sourcePath.lastIndexOf('/') + 1);
  const taroPath = `${paths.taroPath}/pages/${name}`;
  const demo = demoModel(name).demo;
  const taroDemo = demoModel(name).taroDemo;
  const filePath = join(sourcePath, 'demo.vue');
  const taroFilePath = join(taroPath, 'index.vue');
  const taroConfigPath = join(taroPath, 'index.config.ts');
  if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, demo);
  if (!fs.existsSync(taroFilePath)) fs.writeFileSync(taroFilePath, taroDemo);
  if (!fs.existsSync(taroConfigPath))
    fs.writeFileSync(taroConfigPath, `export default { navigationBarTitleText: '${componentConfig.name}' }`);
};

const createDoc = (paths: FilePath) => {
  /**生成doc,中英文文档 */
  const sourcePath = paths.sourcePath;
  const name = sourcePath.substring(sourcePath.lastIndexOf('/') + 1);
  const doc = demoModel(name).doc;
  const docEN = demoModel(name).docEN;
  const filePath = join(sourcePath, 'doc.md');
  const filePathEN = join(sourcePath, 'doc.en-US.md');
  if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, doc);
  if (!fs.existsSync(filePathEN)) fs.writeFileSync(filePathEN, docEN);
};

const createScss = (paths: FilePath) => {
  /**生成scss文件 */
  const sourcePath = paths.sourcePath;
  const name = sourcePath.substring(sourcePath.lastIndexOf('/') + 1);
  const scss = `.nut-${name} {}`;
  const filePath = join(sourcePath, 'index.scss');
  if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, scss);
};

const createTest = (paths: FilePath) => {
  /**生成测试文件 */
  const sourcePath = paths.sourcePath;
  const name = sourcePath.substring(sourcePath.lastIndexOf('/') + 1);
  const testPath = join(`src/packages/__VUE/${name}/__tests__`);
  if (!fs.existsSync(testPath)) fs.mkdirSync(testPath);
  const testFilePath = join(testPath, `${name}.spec.ts`);
  if (!fs.existsSync(testFilePath)) fs.writeFileSync(testFilePath, `import { mount } from '@vue/test-utils';`);
};

const updateConfig = () => {
  /**更新 config 文件 */
  const componentTypeItem = nav.find((navitem) => navitem.name === componentConfig.cType);
  if (!componentTypeItem?.packages.find((item) => item.name === componentConfig.name)) {
    componentTypeItem?.packages.push(componentConfig);
  }
  const filePath = join(`src/config.json`);
  const tempfile = JSON.stringify(config, null, 2);
  fs.writeFileSync(filePath, tempfile);
};

const createDir = (): FilePath => {
  const componentName = componentConfig.name.toLowerCase();
  const componentType = nav.find((navitem) => navitem?.name === componentConfig.cType)?.enName;
  const sourcePath = join(`src/packages/__VUE/${componentName}`);
  const taroPath = join(`packages/nutui-taro-demo/src/${componentType}`);
  if (!fs.existsSync(sourcePath)) fs.mkdirSync(sourcePath);
  if (!fs.existsSync(taroPath)) fs.mkdirSync(`${taroPath}/pages`);
  if (!fs.existsSync(`${taroPath}/pages/${componentName}`)) fs.mkdirSync(`${taroPath}/pages/${componentName}`);
  const taroConfigPath = join(`packages/nutui-taro-demo/src/app.config.ts`);
  try {
    const taroConfigData = fs.readFileSync(taroConfigPath, 'utf8');
    const ast: esprima.Program = esprima.parseModule(taroConfigData);
    traverseAst(ast, componentName, componentType);
    generateToFile(ast, taroConfigPath);
  } catch (err) {
    console.log(err);
  }

  return {
    sourcePath,
    taroPath
  };
};

const createFile = (filePath: FilePath) => {
  createSource(filePath);
  createDemo(filePath);
  createDoc(filePath);
  createScss(filePath);
  createTest(filePath);
  updateConfig();
  spinner.succeed('组件模板生成完毕，请开始你的表演~');
  process.exit();
};

const create = () => {
  const filePath = createDir();
  createFile(filePath);
};

const init = () => {
  inquirer.prompt(questions).then((answers) => {
    answers.show = answers.show === 'y' ? true : false;
    answers.type = answers.type === 'y' ? 'methods' : 'component';
    componentConfig = Object.assign(componentConfig, answers);
    spinner = ora('正在生成组件模版，请稍后...').start();
    create();
  });
};

export const createComponentMode = async () => {
  init();
};
