const Utils = {
  /**
   * 是否为闫年
   * @return {Boolse} true|false
   */
  isLeapYear: function(y: number) {
    return (y % 4 == 0 && y % 100 != 0) || y % 400 == 0;
  },

  /**
   * 返回星期数
   * @return {Number}
   */
  getWhatDay: function(year, month, day) {
    const date = new Date(year + '/' + month + '/' + day);
    const index = date.getDay();
    const dayNames = [
      '星期日',
      '星期一',
      '星期二',
      '星期三',
      '星期四',
      '星期五',
      '星期六'
    ];
    return dayNames[index];
  },

  /**
   * 返回星期数
   * @return {Number}
   */
  getMonthPreDay: function(year, month) {
    const date = new Date(year + '/' + month + '/01');
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
    return [
      0,
      31,
      this.isLeapYear(year) ? 29 : 28,
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31
    ][month];
  },

  /**
   * 补齐数字位数
   * @return {string}
   */
  getNumTwoBit: function(n) {
    n = Number(n);
    return (n > 9 ? '' : '0') + n;
  },

  /**
   * 日期对象转成字符串
   * @return {string}
   */
  date2Str: function(date, split?: string) {
    if (typeof date == 'string') return date;
    split = split || '-';
    const y = date.getFullYear();
    const m = this.getNumTwoBit(date.getMonth() + 1);
    const d = this.getNumTwoBit(date.getDate());
    return [y, m, d].join(split);
  },

  /**
   * 返回日期格式字符串
   * @param {Number} 0返回今天的日期、1返回明天的日期，2返回后天得日期，依次类推
   * @return {string} '2014-12-31'
   */
  getDay: function(i) {
    i = i || 0;
    let date = new Date();
    const diff = i * (1000 * 60 * 60 * 24);
    date = new Date(date.getTime() + diff);
    return this.date2Str(date);
  },

  /**
   * 时间戳转换为日期格式
   * @return {String}
   */
  timestampToDate: function(timestamp) {
    const date = new Date(timestamp);
    return (
      date.getFullYear() +
      '-' +
      this.getNumTwoBit(date.getMonth() + 1) +
      '-' +
      this.getNumTwoBit(date.getDate())
    );
  },

  /**
   * 时间比较
   * @return {Boolean}
   */
  compareDate: function(date1, date2) {
    const startTime = new Date(date1.replace('-', '/').replace('-', '/'));
    const endTime = new Date(date2.replace('-', '/').replace('-', '/'));
    if (startTime >= endTime) {
      return false;
    }
    return true;
  },
  /**
   * 时间比较
   * @return {Boolean}
   */
  compareDateArr: function(date1, date2) {
    const startTime = new Date();
    startTime.setFullYear(date1[0], date1[1], date1[2]);
    startTime.setHours(date1[3], date1[4]);
    const endTime = new Date();
    endTime.setFullYear(date2[0], date2[1], date2[2]);
    endTime.setHours(date2[3], date2[4]);
    if (startTime >= endTime) {
      return false;
    }
    return true;
  },
  /**
   * 时间是否相等
   * @return {Boolean}
   */
  isEqual: function(date1, date2) {
    const startTime = new Date(date1).getTime();
    const endTime = new Date(date2).getTime();
    if (startTime == endTime) {
      return true;
    }
    return false;
  }
};

export default Utils;
