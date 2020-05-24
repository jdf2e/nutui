import TimeLineItem from './timelineitem.vue';
import './timelineitem.scss';

TimeLineItem.install = function (Vue) {
  Vue.component(TimeLineItem.name, TimeLineItem);
};

export default TimeLineItem;
