// 创建模板

const inquirer = require('inquirer');
import { ROOT_CLI_PATH, ROOT_PACKAGE_PATH } from '../util/dic';
const conf = require(ROOT_PACKAGE_PATH('src/config.json'));
const path = require('path');
const fs = require('fs');
const copy = require('copy');
//const createPkgDeclare = require('./createPkgDeclare');
const t = require('@babel/types');
const { parse } = require('@babel/parser');
const { default: traverse } = require('@babel/traverse');
const { default: generate } = require('@babel/generator');

const PKGS = 'packages';
const emptyLine = '/*hr*/';
const nutMainFile = ROOT_PACKAGE_PATH('src/nutui.js');
const nutTypings = ROOT_PACKAGE_PATH('types/nutui.d.ts');

let sorts = [...conf.sorts];
var newCpt = {
	version: '1.0.0',
	name: '',
	type: '',
	chnName: '',
	desc: '',
	sort: '',
	showDemo: true,
	author: '',
	star: undefined,
};
function init() {
	inquirer
		.prompt([
			{
				type: 'input',
				name: 'name',
				message: '组件英文名(每个单词的首字母都大写，如TextBox)：',
				validate(value: any) {
					const repeat = conf.packages.find(function (item: any) {
						return item.name === value;
					});
					if (repeat) {
						return '该组件名已存在！';
					}
					const pass = value && value.match(/^[A-Z]/);
					if (pass) {
						return true;
					}
					return '不能为空，且每个单词的首字母都要大写，如TextBox';
				},
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
				},
			},
			{
				type: 'input',
				name: 'desc',
				message: '组件描述(五十个字以内)：',
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
				},
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
				},
			},
			{
				type: 'confirm',
				name: 'showDemo',
				message: '是否需要DEMO页面?',
				default: true,
			},
			{
				type: 'input',
				name: 'author',
				message: '组件作者(可署化名):',
			},
		])
		.then(function (answers: any) {
			answers.sort = String(sorts.indexOf(answers.sort));
			newCpt = Object.assign(newCpt, answers);
			createDir();
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
		const dirPath = path.join(ROOT_PACKAGE_PATH('src/packages/' + nameLc));
		const filePath = path.join(dirPath, `${nameLc}.vue`);
		if (!fs.existsSync(dirPath)) {
			fs.mkdirSync(dirPath);
		}
		fs.writeFile(filePath, content, (err: any) => {
			if (err) throw err;
			resolve(`生成${newCpt.name}.vue文件成功`);
		});
	});
}

function createDemo() {
	return new Promise((resolve, reject) => {
		const nameLc = newCpt.name.toLowerCase();
		let content = `<template>
    <div class="container"></div>
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
		const dirPath = path.join(ROOT_PACKAGE_PATH('src/packages/' + nameLc));
		const filePath = path.join(dirPath, `demo.vue`);
		if (!fs.existsSync(dirPath)) {
			fs.mkdirSync(dirPath);
		}
		fs.writeFile(filePath, content, (err: any) => {
			if (err) throw err;
			resolve(`生成demo.vue文件成功`);
		});
	});
}

function createDoc() {
	return new Promise((resolve, reject) => {
		const nameLc = newCpt.name.toLowerCase();
		let content = `${nameLc}`;
		const dirPath = path.join(ROOT_PACKAGE_PATH('src/packages/' + nameLc));
		const filePath = path.join(dirPath, `doc.md`);
		if (!fs.existsSync(dirPath)) {
			fs.mkdirSync(dirPath);
		}
		fs.writeFile(filePath, content, (err: any) => {
			if (err) throw err;
			resolve(`生成${newCpt.name}.doc文件成功`);
		});
	});
}

function createScss() {
	return new Promise((resolve, reject) => {
		const nameLc = newCpt.name.toLowerCase();
		let content = `.nut-${nameLc}{

}`;
		const dirPath = path.join(ROOT_PACKAGE_PATH('src/packages/' + nameLc));
		const filePath = path.join(dirPath, `${nameLc}.scss`);
		if (!fs.existsSync(dirPath)) {
			fs.mkdirSync(dirPath);
		}
		fs.writeFile(filePath, content, (err: any) => {
			if (err) throw err;
			resolve(`生成${newCpt.name}.scss文件成功`);
		});
	});
}

function createDir() {
	const nameLc = newCpt.name.toLowerCase();
	const destPath = path.join(ROOT_PACKAGE_PATH('src/packages/' + nameLc));
	if (!fs.existsSync(destPath)) {
		fs.mkdirSync(destPath);
	}
	copy(path.join(__dirname, './__template__/**.*'), destPath, function (err: any, file: any) {
		if (err) {
			console.log('拷贝__template__目录失败！');
		}
		createNew();
	});
}

function addToPackageJson() {
	return new Promise((resolve, reject) => {
		conf.packages.push(newCpt);
		const dirPath = path.join(ROOT_PACKAGE_PATH('src/'));
		const filePath = path.join(dirPath, `config.json`);
		fs.writeFile(filePath, JSON.stringify(conf, null, 2), (err: any) => {
			if (err) throw err;
			resolve(`修改config.json文件成功`);
		});
	});
}
function transformCodes(codes: any, visitor: any) {
	const ast = parse(codes, {
		sourceType: 'module',
	});
	traverse(ast, visitor);
	const { code } = generate(
		ast,
		{
			/* options */
		},
		codes
	);
	return code;
}

function createProp(pkg: any) {
	return t.objectProperty(t.identifier(pkg), t.identifier(pkg));
}

function addPkgDeclare(pkg: string) {
	const codes = fs.readFileSync(nutMainFile).toString();
	const visitor = {
		VariableDeclaration: function (p: any) {
			const { node } = p; //console.log(Object.keys(p.__proto__))
			if (node) {
				const { declarations = [] } = node;
				if (declarations.length) {
					for (const { id, init } of declarations) {
						if (id.name === PKGS && init.properties && init.properties.length) {
							const props = init.properties.filter((key: any) => key.name === pkg);
							if (!props.length) {
								//insertImports.call(p, pkg);
								const lowername = pkg.toLowerCase();
								p.insertBefore(
									t.importDeclaration(
										[t.importDefaultSpecifier(t.identifier(pkg))],
										t.stringLiteral(`./packages/${lowername}/index.js`)
									)
								);
								p.insertBefore(t.importDeclaration([], t.stringLiteral(`./packages/${lowername}/${lowername}.scss`)));
								p.insertBefore(t.stringLiteral(emptyLine));
								//addToExport.call(p, pkg, init);

								init.properties.push(createProp(pkg));
								p.replaceWith(t.variableDeclaration('const', [t.variableDeclarator(t.identifier(PKGS), init)]));
								p.insertAfter(t.stringLiteral(emptyLine));
								p.stop();
								break;
							}
						}
					}
				}
			}
		},
	};

	const code = transformCodes(codes, visitor);
	return code;
}

function createPkgDeclare(pkg: any) {
	const code = addPkgDeclare(pkg);
	fs.writeFileSync(nutMainFile, code.replace(/"\/\*hr\*\/"/g, ''));
	fs.appendFileSync(nutTypings, `export declare class ${pkg} extends UIComponent {}\n`);
}

function createNew() {
	if (newCpt.type == 'method')
		return new Promise(function (resolve, reject) {
			resolve();
		});
	var createIndexJs = new Promise((resolve, reject) => {
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

		const dirPath = path.join(ROOT_PACKAGE_PATH('src/packages/' + nameLc));
		const filePath = path.join(dirPath, `index.js`);
		if (!fs.existsSync(dirPath)) {
			fs.mkdirSync(dirPath);
		}
		if (newCpt.type == 'filter' || newCpt.type == 'directive') {
			content = content2;
		}
		fs.writeFile(filePath, content, (err: any) => {
			if (err) throw err;
			resolve(`生成index.js文件成功`);
		});
	});

	createIndexJs
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
			return addToPackageJson();
		})
		.then(() => {
			createPkgDeclare(newCpt.name);
			console.log('组件模板生成完毕，请开始你的表演~');
			process.exit();
		});
}

export default async function createComponent() {
	init();
}
