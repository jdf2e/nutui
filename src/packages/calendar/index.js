import Calendar from './calendar.vue';
import './calendar.scss';

Calendar.install = function(Vue) {
  Vue.component(Calendar.name, Calendar);
};

export default Calendar