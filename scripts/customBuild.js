const inquirer = require('inquirer');
const conf = require('../config.json');
const fs = require('fs');
const path = require('path');

inquirer
  .prompt([
    {
      type: 'checkbox',
      message: '请选择需要打包的组件',
      name: 'packages',
      choices: conf.packages,
      validate: function(answer) {
        if (answer.length < 1) {
          return '请至少选择一项.';
        }
        return true;
      }
    }
  ])
  .then(answers => {
      const destPath = path.join(__dirname, '../custom.json');
      const choices = {
          'version':conf.version,
          'packages':[]
      };
      let str = 'let pkg = {};\n';
        answers.packages.map((name)=>{
            conf.packages.map((pkg)=>{
                if(pkg.name==name){
                    choices.packages.push(pkg);
                  const loName = name.toLowerCase();
                  str += "pkg['" + loName + "'] = require('./package/" + loName + "/index.js').default;\n";
                }
            });
        });
        fs.readFile(path.join(__dirname, '../src/nutui-custom-tpl.js'), 'utf8', function (err, data) {
          fs.writeFile(path.join(__dirname, '../src/nutui-custom.js'), str + data, (err) => {
            if (err) throw err;
            console.log(`生成nutui-custom.js文件成功`);
          });
        });

        fs.writeFile(destPath, JSON.stringify(choices, null, 2), (err) => {
            if (err) throw err;
            console.log(`生成配置文件custom.json成功`);
        });
  });