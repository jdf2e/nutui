import Sroll from './scroll.vue';
import './scroll.scss';

Sroll.install = function (Vue) {
  Vue.component(Sroll.name, Sroll);
};

export default Sroll;
