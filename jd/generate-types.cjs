const config = require('../src/config.json');
const pck = require('./../package.json');
const path = require('path');
const fs = require('fs');

const sourceDir = path.resolve(__dirname, './../tsc/type/src/packages') // 拷贝的源文件夹

const toDir = path.resolve(__dirname, './../dist/types'); // ./../dist

const basePath = path.join(toDir, '__VUE');

const fileList = [];

const getCompList = (basePath) => {
  const files = fs.readdirSync(basePath);
  files.forEach((filename) => {
    const filedir = path.join(basePath, filename);  
    //根据文件路径获取文件信息，返回一个fs.Stats对象
    const stats = fs.statSync(filedir);
    const isFile = stats.isFile();//是文件  
    const isDir = stats.isDirectory();//是文件夹  
    if(isFile){  
      fileList.push(filedir);
    }  
    if(isDir){
      getCompList(filedir);//递归，如果是文件夹，就继续遍历该文件夹下面的文件  
    }
  });
}

fs.cp(sourceDir, toDir, { recursive: true }, (err) => {
  if(err) {
    console.error(err);
    return;
  }

  const oldName = path.join(toDir, 'nutui.vue.build.d.ts');
  const newName = path.join(toDir, 'nutui.d.ts');

  fs.rename(oldName, newName, (err) => {
    if(err) {
      console.error(err);
    }
  })

  getCompList(basePath);

  // fileList.forEach((item) => {
  //   // 获取文件中的内容

  // });
});
