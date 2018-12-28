import Price from './price.vue';
import './price.scss';

Price.install = function(Vue) {
  Vue.component(Price.name, Price);
};

export default Price