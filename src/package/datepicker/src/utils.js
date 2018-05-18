let Utils = {
	/**
	 * 是否为闫年
	 * @return {Boolse} true|false
	 */
	isLeapYear: function(y) {
	    return (y % 4 == 0 && y % 100 != 0) || y % 400 == 0;
	},

	/**
	 * 返回星期数
	 * @return {Number}
	 */
	getMonthFirstDay: function(year, month) {
	    let date = new Date(year + '/' + month + '/01');
	    let day = date.getDay();
	    if (day == 0) {
	        day = 7;
	    }
	    return day;
	},

	/**
	 * 返回月份天数
	 * @return {Number}
	 */
	getMonthDays: function(year, month) {
	    if (/^0/.test(month)) {
	        month = month.split('')[1];
	    }
	    return [0, 31, (this.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
	},

	/**
	 * 补齐数字位数
	 * @return {string}
	 */
	getNumTwoBit: function(n) {
	    return (n > 9 ? '' : '0') + n;
	},

	/**
	 * 日期对象转成字符串
	 * @return {string}
	 */
	date2Str: function(date, split) {
	    if (typeof date == 'string') return date;
	    split = split || '-';
	    let y = date.getFullYear();
	    let m = this.getNumTwoBit(date.getMonth() + 1);
	    let d = this.getNumTwoBit(date.getDate());
	    return [y, m, d].join(split);
	},

	/**
	 * 返回日期格式字符串
	 * @param {Number} 0返回今天的日期、1返回明天的日期，2返回后天得日期，依次类推
	 * @return {string} '2014-12-31'
	 */
	getDay: function (i) {
	    i = i || 0;
	    let date = new Date();
	    let diff = i * (1000 * 60 * 60 * 24);
	    date = new Date(date.getTime() + diff);
	    return date2Str(date);
	},

	/**
	 * 时间戳转换为日期格式
	 * @return {String}
	 */
	timestampToDate: function (timestamp) {
	    let date = new Date(timestamp);
	    return date.getFullYear() + '-' + getNumTwoBit((date.getMonth() + 1)) + '-' + getNumTwoBit(date.getDate());
	},

	/**
     * 时间比较
     * @return {Boolean}
     */
    compareDate: function (date1, date2) {
        let startTime = new Date(date1.replace('-', '/').replace('-', '/'));
        let endTime = new Date(date2.replace('-', '/').replace('-', '/'));
        if (startTime >= endTime) {
            return false;
        }
        return true;
    },

    /**
     * 对日期进行排序
     * @return {Boolean}
     */
    sortBy: function (param) {
        return function(o, p) {
            let a;
            let b;
            o = date2Str(o);
            p = date2Str(p);
            if (typeof o === 'string' && typeof p === 'string' && o && p) {
                a = parseInt(o.replace(/-/g, ''), 10);
                b = parseInt(p.replace(/-/g, ''), 10);
                if (a === b) {
                    return 0;
                }

                if (param === 'asc') {
                    if (typeof a === typeof b) {
                        return a < b ? -1 : 1;
                    }
                    return typeof a < typeof b ? -1 : 1;
                } else if (param === 'desc') {
                    if (typeof a === typeof b) {
                        return a < b ? 1 : -1;
                    }
                    return typeof a < typeof b ? 1 : -1;
                }
            } else {
                throw ("error");
            }
        }
    }
};

export default Utils;