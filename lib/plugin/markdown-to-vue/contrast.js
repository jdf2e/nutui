const path = require('path');
const fs = require('fs');
let { hashElement } = require('folder-hash');
/**
 * 文件对比
 * entry {string} 要对比的文件路径
 * include {array} 要对比的文件格式 以数组形式
 */
class contrast {
	constructor(options) {
		this.entry = options.entry;
		this.include = options.include || ['*.md'];
		this.fileHash = null;
		this.oldHash = null;
		this.differentHash = null;
		this.outPath = path.join(
			'./cache',
			options.entry
				.split(path.sep)
				.pop()
				.replace(/(\.md|\.js)/, '') + '.cache'
		);
	}
	run() {
		let _that = this;
		return new Promise((reslove, reject) => {
			_that.start().then((res) => {
				this.getCache().then(
					(out) => {
						_that.compare();
						_that.record();
						reslove(_that.differentHash);
					},
					(err) => {
						reslove(_that.fileHash);
						_that.record();
					}
				);
			});
		});
	}
	start() {
		let _that = this;
		return new Promise((reslove, reject) => {
			hashElement(_that.entry, {
				folders: { exclude: ['.*', 'node_modules', 'test_coverage', '__test__', 'img', 'svg'] },
				files: { include: _that.include },
				matchBasename: true,
			}).then((res) => {
				//获取当前hash
				_that.fileHash = _that.arraydownGrade(res);
				if (_that.fileHash) {
					reslove(_that.fileHash);
				} else {
					reject('err');
				}
			});
		});
	}
	arraydownGrade(ay) {
		let arys = {};
		let paths = '';
		function downGrade(data) {
			if (data.children && data.children.constructor == Array) {
				paths = data.name;
				data.children.map((item) => {
					downGrade(item);
				});
			} else {
				let key = data.name.replace(/(\.md|\.js)/, '');
				if (key == 'doc') {
					arys[paths] = data.hash;
				} else {
					arys[key] = data.hash;
				}
			}
		}
		downGrade(ay);
		return arys;
	}
	/**
	 * 获取本地hash记录
	 */
	getCache() {
		let _that = this;
		return new Promise((reslove, reject) => {
			fs.readFile(this.outPath, 'utf8', (err, data) => {
				if (!err) {
					_that.oldHash = JSON.parse(data);
					reslove();
				} else {
					console.error('There are no cached files in your locality');
					reject();
				}
			});
		});
	}
	compare() {
		let fileHash = this.fileHash;
		let oldHash = this.oldHash;
		let differenthash = {};
		for (let newkey in fileHash) {
			if (oldHash[newkey]) {
				if (oldHash[newkey] != fileHash[newkey]) {
					differenthash[newkey] = fileHash[newkey];
				}
			} else {
				differenthash[newkey] = fileHash[newkey];
			}
		}
		this.differentHash = differenthash;
	}
	record() {
		let _that = this;
		this.ishasOutFile('./cache').then((res) => {
			fs.writeFile(_that.outPath, JSON.stringify(_that.fileHash), 'utf8', (err, res) => {});
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
}
module.exports = contrast;
