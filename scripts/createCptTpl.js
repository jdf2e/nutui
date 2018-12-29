const conf = require('../src/config.json');
const readline = require('readline');
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const copy = require('copy');

let sorts = [...conf.sorts];

let newCpt = {
    version: '1.0.0'
};

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: '组件英文名(每个单词的首字母都大写，如TextBox)：',
            validate(value) {
                const repeat = conf.packages.find(item => {
                    return item.name === value;
                })
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
            message: '请选择组件类型(输入编号)：',
            choices: ['component', 'filter', 'directive', 'method'],
            validate(value) {
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
            validate(value) {
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
            type: 'input',
            name: 'author',
            message: '组件作者(可署化名):'
        }
    ]).then(answers => {
        answers.sort = String(sorts.indexOf(answers.sort));
        newCpt = Object.assign(newCpt, answers);
        createDir();
    });
}

function createIndexJs() {
    if (newCpt.type == 'method') return;
    return new Promise((resolve, reject) => {
        const nameLc = newCpt.name.toLowerCase();
        let content = `import ${newCpt.name} from './${nameLc}.vue';
import './${nameLc}.scss';

${newCpt.name}.install = function(Vue) {
  Vue.${newCpt.type}(${newCpt.name}.name, ${newCpt.name});
};

export default ${newCpt.name}`;
        let content2 = `${newCpt.name}.install = function(Vue) {
Vue.${newCpt.type}(${newCpt.name}.name, ${newCpt.name});
};

export default ${newCpt.name}`;

        const dirPath = path.join(__dirname, `../src/packages/${nameLc}/`);
        const filePath = path.join(dirPath, `index.js`);
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath);
        }
        if (newCpt.type == 'filter' || newCpt.type == 'directive') {
            content = content2;
        }
        fs.writeFile(filePath, content, (err) => {
            if (err) throw err;
            resolve(`生成index.js文件成功`);
        });
    });
}

function createVue() {
    return new Promise((resolve, reject) => {
        const nameLc = newCpt.name.toLowerCase();
        let content = `<template>
    <div class="nut-${nameLc}"></div>
</template>
<script>
export default {
    name:'nut-${nameLc}',
    props: {
    },
    data() {
        return {};
    },
    methods: {
    }
}
</script>`;
        const dirPath = path.join(__dirname, `../src/packages/${nameLc}/`);
        const filePath = path.join(dirPath, `${nameLc}.vue`);
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath);
        }
        fs.writeFile(filePath, content, (err) => {
            if (err) throw err;
            resolve(`生成${newCpt.name}.vue文件成功`);
        });
    });
}

function createScss() {
    return new Promise((resolve, reject) => {
        const nameLc = newCpt.name.toLowerCase();
        let content = `.nut-${nameLc}{

}`;
        const dirPath = path.join(__dirname, `../src/packages/${nameLc}/`);
        const filePath = path.join(dirPath, `${nameLc}.scss`);
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath);
        }
        fs.writeFile(filePath, content, (err) => {
            if (err) throw err;
            resolve(`生成${newCpt.name}.scss文件成功`);
        });
    });
}

function createDir() {
    const nameLc = newCpt.name.toLowerCase();
    const destPath = path.join(__dirname, '../src/packages/' + nameLc + '/');
    if (!fs.existsSync(destPath)) {
        fs.mkdirSync(destPath);
    }
    copy(path.join(__dirname, './__template__/**.*'), destPath, function (err, file) {
        if (err) {
            console.log('创建文件夹出错！');
        }
        createNew();
    });
}

function addToPackageJson() {
    return new Promise((resolve, reject) => {
        conf.packages.push(newCpt);
        const dirPath = path.join(__dirname, `../src/`);
        const filePath = path.join(dirPath, `config.json`);
        fs.writeFile(filePath, JSON.stringify(conf, null, 2), (err) => {
            if (err) throw err;
            resolve(`修改config.json文件成功`);
        });
    });
}

function createNew() {
    createIndexJs().then(() => {
        if (newCpt.type == 'component' || newCpt.type == 'method') {
            return createVue();
        } else {
            return;
        }
    }).then(() => {
        return createScss();
    }).then(() => {
        return addToPackageJson();
    }).then(() => {
        console.log('组件模板生成完毕，请开始你的表演~');
        process.exit();
    });
}

init();