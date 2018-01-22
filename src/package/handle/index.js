/**
 * 用于处理对象数组
 * 大多是项目中遇到的一些关于数据处理的问题
 * 大部分是关于js一些没法处理对象的补充
 * 或者有些是为了方便自己的记忆
 */
import Vue from 'vue';
class _D {
    //传入参数
    constructor(parma) {
        this.data = parma
    }
    //返回本身
    show() {
        return this.data;
    }
    /**
     * [数组或对象循环]
     * @param  {[type]}   param    [description]
     * @param  {Function} callback [description]
     * @return {[callback]}            [index]序列
     * el一个—_D的实例
     */
    each(callback) {
        let data = this.data;
        if (data.constructor === Array) {
            for (let i = 0, index; index = data[i]; i++) {
                callback(i, index);
            }
        } else {
            for (let index in data) {
                callback(index, data[index])
            }
        };
        return this;
    }
    /**
     * [isJson 用来判断是不是json 对象或者json 的字符串]
     * @return {Boolean} [description]
     */
    isJson() {
        let obj = this.data;
        let isjson = false;
        if (typeof(obj) == "object") {
            isjson = (Object.prototype.toString.call(obj).toLowerCase() == "[object object]") &&
                (!obj.length);
        }
        if (typeof(obj) == "string") {
            try {
                JSON.parse(obj);
                isjson = true;
            } catch (e) {
                console.log(e);
                isjson = false;
            }
        }

        return isjson;
    }
    /**
     * [min 返回最小值]
     * @return {[value]} [最小值]
     */
    min() {
        let that = this;
        return Math.min.apply(this, that.data);
    }
    /**
     * [max 返回最大值]
     * @return {[value]} [最小值]
     */
    max() {
        let that = this;
        return Math.max.apply(this, that.data);
    }
    /**
     * [sortMin 数组排列从小到大]
     * @return {[type]} [description]
     */
    arySortMin() {
        return this.data.sort((x, y) => { return x - y });
    }
    /**
     * [sortMax 数组排序从大到小]
     * @return {[type]} [description]
     */
    arySortMax() {
        return this.data.sort((x, y) => { return y - x });
    }
    /**
     * [objSortmin json数组对象关键字从小到大排序]
     * @param  {[type]} key [关键字]
     * @return {[type]}     [description]
     */
    objSortMin(key) {
        let that = this;
        let tempAry = [];
        let objKey = key;
        //使用方法
        return that.data.sort((object1, object2) => {
            return object1[objKey] - object2[objKey]
        });
    }
    /**
     * [objSortMax json数组对象关键字从大到小排序]
     * @param  {[type]} key [关键字]
     * @return {[type]}     [description]
     */
    objSortMax(key) {
        let that = this;
        let tempAry = [];
        let objKey = key;
        //使用方法
        return that.data.sort((object1, object2) => {
            return object2[objKey] - object1[objKey]
        });
    }
    /**
     * [cutRepeat 数组去重]
     * @return {[type]} [description]
     */
    arycutRepeat() {
        let that = this;
        let res = [];
        let tempJson = {};
        if (new Set()) {
            return [...new Set(that.data)]
        } else {
            that.each((index, value) => {
                if (!tempJson[value]) {
                    tempJson[value] = 1;
                    res.push(value);
                }
            })
        };

        return res;
    }
    /**
     * [objCutRepeat json数组对象根据指定属性名去重]
     * @return {[type]} [description]
     */
    objCutRepeat(key) {
        let that = this;
        let data = that.data;
        let res = [];
        let tempJson = {};
        that.each((index, value) => {
            if (!tempJson[value[key]]) {
                tempJson[value[key]] = 1;
                res.push(value)
            }
        })
        return res;
    }
    /**
     * [findArray 在数组中找到指定的对象所在数组的属性 ]
     * @param  {[type]} ary [数组]
     * @param  {[type]} val [需要找到对象]
     * @return {[obj]}     [index对象所在数组的位置，对象本身]
     */
    find(val) {
        let thisIndex, thisObj;
        let that = this;
        let data = that.data;
        that.each((index, value) => {
            if (typeof value === "number" || typeof value === "string") {
                if (value === val) {
                    thisIndex = index;
                    thisObj = value;
                }
                return false;
            } else {
                let ojbIndex = index;
                let el = new _D(value);
                let ojbValue = value;
                el.each((index, value) => {
                    if (value === val) {
                        thisIndex = ojbIndex;
                        thisObj = ojbValue;
                    }
                    return false;
                });

            }
        });
        if (typeof thisObj === "number" || typeof thisObj === "string") {
            return {
                index: thisIndex,
                value: thisObj
            }
        } else {
            return {
                index: thisIndex,
                obj: thisObj
            }
        }

    }
    /**
     * [like 模糊查询]
     * @param  {[type]} key   [查询属性名]
     * @param  {[type]} value [接受值]
     * @param  {[type]} replaceStr     [如何设置可以替换匹配的字符]
     * @param   type [true返回对象，不写返回数组]
     */
    like(objs) {
    	let options = {
    		value:objs.value,
    		key:objs.key,
    		replaceStr:objs.replaceStr,
    		type:objs.type
    	}
    	let regkey = options.key;
    	let regValue = options.value;
    	let that = this;
    	let reseult = [];
    	that.each((index,value) =>{    		
    			let regexp = new RegExp(regValue,'g');
    			if( typeof value === "string" ||typeof value === "number" ) {
    				if(regexp.test(value)) {
    					if(options.replaceStr){
    						value = value.replace(regexp,replaceStr);
    					}
	    				reseult.push(value)
	    			} 
    			}else {
    				if(regexp.test(value[regkey])) {
    					let temppoit =null;
    					if(options.replaceStr) {
    					 temppoit = value[regkey].replace(regexp,options.replaceStr);
    					}
    					let values = temppoit || value[regkey];
                        if(options.type){
                            reseult.push(value)
                        }else {
                            reseult.push(values)
                        }	    				
	    			}  
    			}
    			  		
    	});
    	return reseult;
    }
    /**
     * [clone 对象的克隆]
     * @return {[type]} [description]
     */
    clone() {
        let obj = this.data;
        if (null == obj || "object" != typeof obj) {
            return obj;
        };
        if (obj instanceof Date) {
            var copy = new Date();
            copy.setTime(obj.getTime());
            return copy;
        };
        if (obj instanceof Array) {
            var copy = [];
            for (let i = 0, len = obj.length; i < len; ++i) {
                copy[i] = obj[i];
            }
            return copy;
        };
        if (obj instanceof Object) {
            var copy = {};
            for (var attr in obj) {
                if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
            }
            return copy;
        };
    }
    /**
     * 数组a和数组b，数组b需要根据数组a的值去对应     * 
     * 数组随机选元素
     * 有去掉接口中未定义的数据
     */
};

let D_ = (value) => {
	return new _D(value);
};
Vue.filter('nut_handle', function (value,options) {	
	let name = options.name;
	let option = options.option;
	let res = D_(value);
	if(name){
		if(option){
			return res[name](option);
		}
		return res[name]();
	}	
  	
})
export default D_;



