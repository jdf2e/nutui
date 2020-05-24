import TimeLine from './timeline.vue';
import './timeline.scss';

TimeLine.install = function (Vue) {
  Vue.component(TimeLine.name, TimeLine);
};

export default TimeLine;
