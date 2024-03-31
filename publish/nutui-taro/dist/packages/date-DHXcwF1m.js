const Utils = {
  /**
   * 是否为闫年
   * @return {Boolse} true|false
   */
  isLeapYear: function(y) {
    return y % 4 == 0 && y % 100 != 0 || y % 400 == 0;
  },
  /**
   * 返回星期数
   * @return {String}
   */
  getWhatDay: function(year, month, day) {
    const date = /* @__PURE__ */ new Date(year + "/" + month + "/" + day);
    const index = date.getDay();
    const dayNames = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    return dayNames[index];
  },
  /**
   * 返回星期数
   * @return {Number}
   */
  getMonthPreDay: function(year, month) {
    const date = /* @__PURE__ */ new Date(year + "/" + month + "/01");
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
      month = month.split("")[1];
    }
    return [0, 31, this.isLeapYear(Number(year)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
  },
  /**
   * 补齐数字位数
   * @return {string}
   */
  getNumTwoBit: function(n) {
    n = Number(n);
    return (n > 9 ? "" : "0") + n;
  },
  /**
   * 日期对象转成字符串
   * @return {string}
   */
  date2Str: function(date, split) {
    split = split || "-";
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
    let date = /* @__PURE__ */ new Date();
    const diff = i * (1e3 * 60 * 60 * 24);
    date = new Date(date.getTime() + diff);
    return this.date2Str(date);
  },
  /**
   * 时间比较
   * @return {Boolean}
   */
  compareDate: function(date1, date2) {
    const startTime = new Date(date1.replace("-", "/").replace("-", "/"));
    const endTime = new Date(date2.replace("-", "/").replace("-", "/"));
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
  },
  getMonthWeek: function(year, month, date, firstDayOfWeek = 0) {
    const dateNow = new Date(Number(year), parseInt(month) - 1, Number(date));
    let w = dateNow.getDay();
    const d = dateNow.getDate();
    let remainder = 6 - w;
    if (firstDayOfWeek !== 0) {
      w = w == 0 ? 7 : w;
      remainder = 7 - w;
    }
    return Math.ceil((d + remainder) / 7);
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getYearWeek: function(year, month, date, firstDayOfWeek = 0) {
    const dateNow = new Date(Number(year), parseInt(month) - 1, Number(date));
    const dateFirst = new Date(Number(year), 0, 1);
    const dataNumber = Math.round((dateNow.valueOf() - dateFirst.valueOf()) / 864e5);
    return Math.ceil((dataNumber + (dateFirst.getDay() + 1 - 1)) / 7);
  },
  getWeekDate: function(year, month, date, firstDayOfWeek = 0) {
    const dateNow = new Date(Number(year), parseInt(month) - 1, Number(date));
    const nowTime = dateNow.getTime();
    let day = dateNow.getDay();
    if (firstDayOfWeek === 0) {
      const oneDayTime = 24 * 60 * 60 * 1e3;
      const SundayTime = nowTime - day * oneDayTime;
      const SaturdayTime = nowTime + (6 - day) * oneDayTime;
      const sunday = this.date2Str(new Date(SundayTime));
      const saturday = this.date2Str(new Date(SaturdayTime));
      return [sunday, saturday];
    } else {
      day = day == 0 ? 7 : day;
      const oneDayTime = 24 * 60 * 60 * 1e3;
      const MondayTime = nowTime - (day - 1) * oneDayTime;
      const SundayTime = nowTime + (7 - day) * oneDayTime;
      const monday = this.date2Str(new Date(MondayTime));
      const sunday = this.date2Str(new Date(SundayTime));
      return [monday, sunday];
    }
  },
  formatResultDate: function(date) {
    const days = [...date.split("-")];
    days[2] = Utils.getNumTwoBit(Number(days[2]));
    days[3] = `${days[0]}-${days[1]}-${days[2]}`;
    days[4] = Utils.getWhatDay(+days[0], +days[1], +days[2]);
    return days;
  }
};
export {
  Utils as U
};
