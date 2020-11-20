// 创建模板

const inquirer = require('inquirer');
// import {  ROOT_PACKAGE_PATH } from '../util/dic';
//const conf = require(ROOT_PACKAGE_PATH('src/config.json'));
//import {a} from "./a.js"
// import  {nav}  from '../src/config.js';
// import { from } from 'core-js/fn/array';
const path = require('path');
const fs = require('fs');
// const copy = require('copy');
//const createPkgDeclare = require('./createPkgDeclare');
// const t = require('@babel/types');
// const { parse } = require('@babel/parser');
// const { default: traverse } = require('@babel/traverse');
// const { default: generate } = require('@babel/generator');

var newCpt = {
  version: '1.0.0',
  name: '',
  type: '',
  chnName: '',
  desc: '',
  sort: '',
  showDemo: true,
  author: '',
  star: undefined
};
function init() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: '组件英文名(每个单词的首字母都大写，如TextBox)：',
        validate(value) {
          //   let repeat = false;
          //   for (var i = 0; i < nav.length; i++) {
          //     for (var j = 0; j < nav[i].packages.length; j++) {
          //       if (nav[i].packages[j].name === value) {
          //         repeat = true;
          //       }
          //     }
          //   }

          //   if (repeat) {
          //     return '该组件名已存在！';
          //   }
          const pass = value && value.match(/^[A-Z]/);
          if (pass) {
            return true;
          }
          return '不能为空，且每个单词的首字母都要大写，如TextBox';
        }
      },
      {
        type: 'input',
        name: 'chnName',
        message: '组件中文名(十个字以内)：',
        validate(value) {
          const pass = value && value.length <= 10;
          if (pass) {
            return true;
          }
          return '不能为空，且不能超过十个字符';
        }
      },
      {
        type: 'input',
        name: 'desc',
        message: '组件描述(五十个字以内)：'
      },
      {
        type: 'rawlist',
        name: 'type',
        message: '请选择组件类型(输入编号)：目前只支持组建模板',
        choices: ['component', 'filter', 'directive', 'method'],
        validate(value) {
          const pass = value && /^[1-4]$/.test(value);
          if (pass) {
            return true;
          }
          return '输入有误！请输入选项前编号';
        }
      },
      //   {
      //     type: 'rawlist',
      //     name: 'sort',
      //     message: '请选择组件分类(输入编号)：',
      //     // choices: sorts,
      //     validate(value) {
      //       const pass = /^[1-7]$/.test(value);
      //       if (pass) {
      //         return true;
      //       }
      //       return '输入有误！请输入选项前编号';
      //     }
      //   },
      //   {
      //     type: 'confirm',
      //     name: 'showDemo',
      //     message: '是否需要DEMO页面?',
      //     default: true
      //   },
      //   {
      //     type: 'confirm',
      //     name: 'showTest',
      //     message: '是否需要单元测试页面?',
      //     default: true
      //   },
      {
        type: 'input',
        name: 'author',
        message: '组件作者(可署化名):'
      }
    ])
    .then(function(answers) {
      // answers.sort = String(sorts.indexOf(answers.sort));
      newCpt = Object.assign(newCpt, answers);
      createNew();
    });
}
function createIndexJs() {
  const nameLc = newCpt.name.toLowerCase();
  const destPath = path.join('src/packages/' + nameLc);
  if (!fs.existsSync(destPath)) {
    fs.mkdirSync(destPath);
  }
  // copy(path.join(__dirname, './__template__/**.*'), destPath, function (err: any, file: any) {
  // 	if (err) {
  // 		console.log('拷贝__template__目录失败！');
  // 	}
  // 	createNew();
  // });

  if (newCpt.type == 'method') return;
  return new Promise((resolve, reject) => {
    //         let content = `import ${newCpt.name} from './src/${nameLc}.vue';
    // ${newCpt.name}.install = function(Vue) {
    //   Vue.${newCpt.type}(${newCpt.name}.name, ${newCpt.name});
    // };
    // export default ${newCpt.name}`;
    //         let content2 = `${newCpt.name}.install = function(Vue) {
    // Vue.${newCpt.type}(${newCpt.name}.name, ${newCpt.name});
    // };
    // export default ${newCpt.name}`;

    // const dirPath = path.join(__dirname, `../src/packages/${nameLc}/`);

    // const filePath = path.join(dirPath, `index.js`);
    // if (!fs.existsSync(dirPath)) {
    // 	fs.mkdirSync(filePath);
    // }
    // if (newCpt.type == 'filter' || newCpt.type == 'directive'){
    //     content = content2;
    // }
    // fs.writeFile(filePath,  content, (err) => {
    //     if (err) throw err;
    resolve(`生成index.js文件成功`);
    // });
  });
}

function createVue() {
  return new Promise((resolve, reject) => {
    const nameLc = newCpt.name.toLowerCase();
    let content = `<template>
		<view :class="classes" @click="handleClick">
		  <view>{{ name }}</view>
		  <view>{{ txt }}</view>
		</view>
	  </template>
	  <script lang="ts">
	  import { toRefs } from 'vue';
	  import { createComponent } from '@/utils/create';
	  const { componentName, create } = createComponent('temp');
	  
	  export default create({
		props: {
		  name: {
			type: String,
			default: ''
		  },
		  txt: {
			type: String,
			default: ''
		  }
		},
		components: {},
		emits: ['click'],
	  
		setup(props, { emit }) {
		  console.log('componentName', componentName);
	  
		  const { name, txt } = toRefs(props);
	  
		  const handleClick = (event: Event) => {
			emit('click', event);
		  };
	  
		  return { name, txt, handleClick };
		}
	  });
	  </script>
	  
	  <style lang="scss">
	  @import 'index.scss';
	  </style>
	  `;
    const dirPath = path.join(__dirname, `../src/packages/${nameLc}/`);
    const filePath = path.join(dirPath, `index.vue`);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(filePath);
    }
    fs.writeFile(filePath, content, err => {
      if (err) throw err;
      resolve(`生成${newCpt.name}.vue文件成功`);
    });
  });
}

function createDemo() {
  return new Promise((resolve, reject) => {
    const nameLc = newCpt.name.toLowerCase();
    let content = `<template>
    <div class="demo-list"></div>
</template>
<script>
export default {
    data() {
        return {};
    },
    methods: {
    }
}
</script>`;
    const dirPath = path.join(__dirname, '../src/packages/' + nameLc);
    const filePath = path.join(dirPath, `demo.vue`);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(filePath);
    }
    fs.writeFile(filePath, content, err => {
      if (err) throw err;
      resolve(`生成demo.vue文件成功`);
    });
  });
}

function addToPackageJson() {
  // return new Promise((resolve, reject) => {
  //     conf.packages.push(newCpt);
  //     const dirPath = path.join(__dirname, `../`);
  //     const filePath = path.join(dirPath, `config.json`);
  //     fs.writeFile(filePath, JSON.stringify(conf, null, 2), (err) => {
  //         if (err) throw err;
  //         resolve(`修改config.json文件成功`);
  //     });
  // });
}
function createScss() {
  return new Promise((resolve, reject) => {
    const nameLc = newCpt.name.toLowerCase();
    let content = `.nut-temp {}`;
    const dirPath = path.join(__dirname, '../src/packages/' + nameLc);
    const filePath = path.join(dirPath, `index.scss`);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(filePath);
    }
    fs.writeFile(filePath, content, err => {
      if (err) throw err;
      resolve(`index.scss文件成功`);
    });
  });
}
function createDoc() {
  return new Promise((resolve, reject) => {
    const nameLc = newCpt.name.toLowerCase();
    let content = `组建使用说明文件`;
    const dirPath = path.join(__dirname, '../src/packages/' + nameLc);
    const filePath = path.join(dirPath, `doc.md`);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(filePath);
    }
    fs.writeFile(filePath, content, err => {
      if (err) throw err;
      resolve(`doc.md文件成功`);
    });
  });
}
function createNew() {
  createIndexJs()
    .then(() => {
      if (newCpt.type == 'component' || newCpt.type == 'method') {
        return createVue();
      } else {
        return;
      }
    })
    .then(() => {
      return createScss();
    })
    .then(() => {
      return createDemo();
    })
    .then(() => {
      return createDoc();
    })
    .then(() => {
      // return addToPackageJson();
    })
    .then(() => {
      console.log('组件模板生成完毕，请开始你的表演~');
      process.exit();
    });
}
function createComponent() {
  init();
}
createComponent();
