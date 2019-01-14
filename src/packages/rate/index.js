import Rate from './rate.vue';
import './rate.scss';

Rate.install = function(Vue) {
  Vue.component(Rate.name, Rate);
};

export default Rate;