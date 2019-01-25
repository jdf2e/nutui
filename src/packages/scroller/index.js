import Scroller from './scroller.vue';
import './scroller.scss';

Scroller.install = function(Vue) {
  Vue.component(Scroller.name, Scroller);
};

export default Scroller