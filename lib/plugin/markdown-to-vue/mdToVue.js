const path = require('path');
const fs = require('fs');
const nodeFilelist = require('node-filelist');
let { hashElement } = require('folder-hash');
let marked = require('marked');
let contrast = require('./contrast');
let rimraf = require('rimraf');
let Chokidar = require('chokidar');
if (!marked) {
	console.log('you need npm i marked -D!');
}
class mdVue {
	constructor(options) {
		let defaultSetting = {
			needCode: true,
			isbuild: true,
			hasMarkList: true,
		};
		this.options = Object.assign(defaultSetting, options);
		this.rendererMd = new marked.Renderer();
		this.marked = marked;
		let _that = this;
		this.Articlehead = '';
		this.Articleheadcount = 0;
		this.needHandleFiles = null;
		this.cachePath = path.join('./cache', options.entry.split(path.sep).pop() + '.cache');
		this.codeHandle();
		this.checkSelf().then((res) => {
			// 检查要编译的文件
			let ct = new contrast({
				entry: this.options.entry,
			})
				.run()
				.then((res) => {
					_that.needHandleFiles = res;
					_that.ishasOutFile(_that.options.output).then((res) => {
						_that.star();
						_that.filelisten();
					});
				});
		});
	}
	checkSelf() {
		let _that = this;
		return new Promise((resolve, reject) => {
			new contrast({
				entry: path.join(__dirname, 'mdToVue.js'),
				include: ['*.js'],
			})
				.run()
				.then((res) => {
					if (JSON.stringify(res) != '{}') {
						//有变动清除当前entry缓存,重新渲染
						rimraf(_that.cachePath, (err) => {
							console.log(err);
							resolve();
						});
					} else {
						resolve();
					}
				});
		});
	}
	apply() {}
	filelisten() {
		let _that = this;
		let watcher = Chokidar.watch(_that.options.entry, {
			persistent: true,
			usePolling: true,
		});
		let log = console.dir.bind(console);
		let watchAction = function ({ event, eventPath }) {
			// 这里进行文件更改后的操作
			// fileReadStar(eventPath,(res)=>{
			//     createdFile(param.output + res.mdName + '.vue', res.html, param.needCode)
			// })
			console.log(path.join(__dirname, JSON.stringify(eventPath)));
			if (/\.md$/.test(eventPath)) {
				_that.vueDesWrite(eventPath);
			}
			// "d:\workplace\nutui\docs\international.md"
			// _that.read(eventPath).then(res=>{
			//     _that.headHandle();
			//     _that.markHandle();
			//     let html = _that.marked(res);
			//     _that.write({
			//         outsrc:_that.options.output,
			//         name:fileName + '.vue',
			//         html:html
			//     });
			// })
		};
		watcher
			.on('change', (path) => watchAction({ event: 'change', eventPath: path }))
			.on('unlink', (path) => watchAction({ event: 'remove', eventPath: path }));
	}
	star() {
		let _that = this;
		hashElement(_that.options.entry, {
			folders: { exclude: ['.*', 'node_modules', 'test_coverage'] },
			files: { include: ['*.md'] },
			matchBasename: true,
		}).then((hash) => {
			nodeFilelist.read([_that.options.entry], { ext: 'md' }, (res) => {
				res.map((item, index) => {
					_that.vueDesWrite(item.path);
					// let fileSplits = item.path.split(path.sep);
					// let fileName = fileSplits.pop();
					// if(_that.isDoc(fileName)){
					//         fileName = fileSplits.pop();
					// }else{
					//     fileName = fileName.replace(/\.md/,'');
					// }
					// if(_that.needHandleFiles[fileName]){
					//     // _that.read(item.path).then(res=>{
					//     //     _that.headHandle();
					//     //     _that.markHandle();
					//     //     let html = _that.marked(res);
					//     //     _that.write({
					//     //         outsrc:_that.options.output,
					//     //         name:fileName + '.vue',
					//     //         html:html
					//     //     });
					//     // })
					// }
					// _that.read(item.path).then(res=>{
					//     _that.headHandle();
					//     _that.markHandle();
					//     let html = _that.marked(res);
					//     _that.write({
					//         outsrc:_that.options.output,
					//         name:fileName + '.vue',
					//         html:html
					//     });
					// })
				});
			});
		});
	}
	vueDesWrite(getpath) {
		let _that = this;
		let fileSplits = getpath.split(path.sep);
		let fileName = fileSplits.pop();
		if (_that.isDoc(fileName)) {
			fileName = fileSplits.pop();
		} else {
			fileName = fileName.replace(/\.md/, '');
		}
		if (_that.needHandleFiles[fileName]) {
			// _that.read(item.path).then(res=>{
			//     _that.headHandle();
			//     _that.markHandle();
			//     let html = _that.marked(res);
			//     _that.write({
			//         outsrc:_that.options.output,
			//         name:fileName + '.vue',
			//         html:html
			//     });
			// })
		}
		_that.read(getpath).then((res) => {
			_that.headHandle();
			_that.markHandle();
			let html = _that.marked(res);
			_that.write({
				outsrc: _that.options.output,
				name: fileName + '.vue',
				html: html,
			});
		});
	}
	isDoc(name) {
		return name == 'doc.md' ? true : false;
	}
	read(src) {
		return new Promise((resolve, reject) => {
			fs.readFile(src, 'utf-8', (err, data) => {
				resolve(data);
			});
		});
	}
	write(param) {
		let _that = this;
		return new Promise((resolve, reject) => {
			let outPath = path.join(param.outsrc, param.name);
			let contexts =
				`<template>
                                <div  @click="dsCode">
                                <div v-if="content" class="layer">
                                <pre><span class="close-box" @click="closelayer"></span><div v-html="content"></div></pre>
                                </div>` +
				param.html +
				(_that.options.hasMarkList ? '<ul class="markList">' + _that.Articlehead + '</ul>' : '') +
				`<nut-backtop :right="50" :bottom="50"></nut-backtop>
                                </div>
                            </template><script>import root from '../root.js';
            export default {
                mixins:[root]
            }</script>`;
			_that.Articlehead = '';
			_that.Articleheadcount = 0;
			fs.writeFile(outPath, contexts, 'utf8', (err, res) => {});
		});
	}
	ishasOutFile(outPath) {
		return new Promise((resolve, reject) => {
			fs.stat(outPath, (err, res) => {
				if (err) {
					fs.mkdir(outPath, (err) => {
						if (err) {
							reject(err);
						} else {
							resolve(true);
						}
					});
				} else {
					resolve(true);
				}
			});
		});
	}
	headHandle() {
		let _that = this;
		let options = _that.options;
		_that.rendererMd.heading = function (text, level) {
			let headcode = '<i class="qrcode"><a :href="demourl"><span>请使用手机扫码体验</span><img :src="codeurl" alt=""></a></i>';
			let codeHead = `<h1>` + text + headcode + `</h1>`;
			let normal = `<h` + level + `>` + text + `</h` + level + `>`;
			let Articleheadcounts = null;
			if (level == 2 && _that.options.hasMarkList) {
				Articleheadcounts = _that.Articleheadcount;
				Articleheadcounts++;
				_that.Articleheadcount = Articleheadcounts;
				let headmsg = _that.Articlehead;
				headmsg +=
					`<li @click="leavelchose(` +
					Articleheadcounts +
					`)" :class="levalcur==` +
					Articleheadcounts +
					`?'cur':''"  class="level` +
					Articleheadcounts +
					'"><a href="#head' +
					Articleheadcounts +
					'">' +
					text.substr(0, 10) +
					'</a></li>';
				_that.Articlehead = headmsg;
			}
			let maskIdHead = '<h' + level + " class='visibility' id='head" + Articleheadcounts + "'>" + text + '</h' + level + '>';
			//判断条件
			if (_that.options.hasMarkList && _that.options.needCode) {
				if (level == 1) {
					return codeHead;
				} else if (level == 2) {
					return maskIdHead;
				} else {
					return normal;
				}
			} else if (_that.options.hasMarkList && !_that.options.needCode) {
				if (level != 1) {
					return maskIdHead;
				} else {
					return normal;
				}
			} else if (!_that.options.hasMarkList && _that.options.needCode) {
				if (level == 1) {
					return codeHead;
				} else {
					return normal;
				}
			} else if (!_that.options.hasMarkList && !_that.options.needCode) {
				return normal;
			}
		};
	}
	codeHandle() {
		var that = this;
		this.rendererMd.code = function (code, infostring, escaped) {
			var lang = (infostring || '').match(/\S*/)[0];
			if (this.options.highlight) {
				var out = this.options.highlight(code, lang);
				if (out != null && out !== code) {
					escaped = true;
					code = out;
				}
			}
			if (!lang) {
				return '<pre><code>' + (escaped ? code : escape(code, true)) + '</code></pre>';
			}
			if (lang === 'html') {
				code = code.replace(/@latest/g, '@' + that.options.version);
			}
			return (
				'<hide><pre class="prettyprint"><span class="lang">' +
				lang +
				'</span><div class="code-wrapper"><code class="' +
				this.options.langPrefix +
				escape(lang, true) +
				'">' +
				(escaped ? code : escape(code, true)) +
				'</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>\n'
			);
		};
	}
	markHandle() {
		let _that = this;
		this.marked.setOptions({
			renderer: _that.rendererMd,
			highlight: function (code) {
				return require('highlight.js').highlightAuto(code).value;
			},
			tables: true,
		});
	}
}
module.exports = mdVue;
