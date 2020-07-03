import FixedNav from './fixednav.vue';
import './fixednav.scss';

FixedNav.install = function(Vue) {
  Vue.component(FixedNav.name, FixedNav);
};

export default FixedNav