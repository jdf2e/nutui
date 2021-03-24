import Collapse from './collapse.vue';
import './collapse.scss';

Collapse.install = function(Vue) {
  Vue.component(Collapse.name, Collapse);
};

export default Collapse;
