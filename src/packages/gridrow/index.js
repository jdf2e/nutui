import Gridrow from './gridrow.vue';
import './gridrow.scss';

Gridrow.install = function(Vue) {
  Vue.component(Gridrow.name, Gridrow);
};

export default Gridrow
