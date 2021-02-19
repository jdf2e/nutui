import Vue from 'vue';

const lang = {
  lang: {
    okBtnTxt: '确 定',
    cancelBtnTxt: '取 消',
    calendar: {
      loadPrevMonth: '加载上一个月',
      noMoreMonth: '没有更早月份~',
      start: '开始',
      end: '结束',
      title: '选择日期',
      week: '日,一,二,三,四,五,六',
      monthTitle: '{year}年{month}月',
      year: '年',
      month: '月',
      day: '日',
      hour: '时',
      minute: '分',
      second: '秒',
      morning: '上午',
      afternoon: '下午'
    },
    menu: {
      resetBtnTxt: '重置'
    },
    searchbar: {
      placeText: '请输入内容...',
      textInfo: '搜索'
    },
    shortpassword: {
      tip1: '输入数字密码',
      tip2: '忘记密码'
    },
    steps: {
      step: '步骤',
      stepDesc: '步骤描述'
    },
    uploader: {
      xmlError: '对不起，您的浏览器不支持本组件！',
      typeError: '不支持上传该类型文件',
      limitError: '文件大小超过限制'
    }
  }
};

Vue.config.lang = 'zn-CH';

export default lang;
