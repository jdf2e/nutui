import Badge from './badge.vue';
import './badge.scss';

Badge.install = function(Vue) {
  Vue.component(Badge.name, Badge);
};

export default Badge