// 创建模板

const inquirer = require('inquirer');
// import {  ROOT_PACKAGE_PATH } from '../util/dic';
//const conf = require(ROOT_PACKAGE_PATH('src/config.json'));
import { nav } from '../src/config.ts';
// const path = require('path');
// const fs = require('fs');
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
        validate(value: any) {
          let repeat = false;
          for (var i = 0; i < nav.length; i++) {
            for (var j = 0; j < nav[i].packages.length; j++) {
              if (nav[i].packages[j].name === value) {
                repeat = true;
              }
            }
          }

          if (repeat) {
            return '该组件名已存在！';
          }
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
        validate(value: any) {
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
        message: '请选择组件类型(输入编号)：',
        choices: ['component', 'filter', 'directive', 'method'],
        validate(value: any) {
          const pass = value && /^[1-4]$/.test(value);
          if (pass) {
            return true;
          }
          return '输入有误！请输入选项前编号';
        }
      },
      {
        type: 'rawlist',
        name: 'sort',
        message: '请选择组件分类(输入编号)：',
        choices: sorts,
        validate(value: any) {
          const pass = /^[1-7]$/.test(value);
          if (pass) {
            return true;
          }
          return '输入有误！请输入选项前编号';
        }
      },
      {
        type: 'confirm',
        name: 'showDemo',
        message: '是否需要DEMO页面?',
        default: true
      },
      {
        type: 'confirm',
        name: 'showTest',
        message: '是否需要单元测试页面?',
        default: true
      },
      {
        type: 'input',
        name: 'author',
        message: '组件作者(可署化名):'
      }
    ])
    .then(function(answers: any) {
      // answers.sort = String(sorts.indexOf(answers.sort));
      // newCpt = Object.assign(newCpt, answers);
      console.log(answers);
      //createDir();
    });
}

export default async function createComponent() {
  init();
}
