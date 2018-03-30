import DatePicker from './src/datepicker.vue';

DatePicker.install = function(Vue) {
  Vue.component(DatePicker.name, DatePicker);
};

export default DatePicker