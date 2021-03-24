import Vue from 'vue';

const lang = {
  lang: {
    calendar: {
      loadPrevMonth: 'Load the last month',
      noMoreMonth: 'No earlier month~',
      start: 'Start',
      end: 'End',
      title: 'Select date',
      week: 'Sun,Mon,Tue,Wed,Thu,Fri,Sat',
      monthTitle: '{year}/{month}',
      year: 'year',
      month: 'month',
      day: 'day',
      hour: 'hour',
      minute: 'minute',
      second: 'second',
      morning: 'morning',
      afternoon: 'afternoon'
    },
    menu: {
      resetBtnTxt: 'Reset'
    },
    searchbar: {
      placeText: 'Please enter the content...',
      textInfo: 'Search'
    },
    shortpassword: {
      tip1: 'Enter a digital password',
      tip2: 'Forget password'
    },
    steps: {
      step: 'Step',
      stepDesc: 'Step description'
    },
    uploader: {
      xmlError: 'Sorry, your browser does not support this component!',
      typeError: 'This type of file is not supported',
      limitError: 'File size exceeded the limit'
    },
    okBtnTxt: 'Ok',
    cancelText: 'Cancel',
    cancelBtnTxt: 'Cancel'
  }
};

Vue.config.lang = 'en-US';

export default lang;
