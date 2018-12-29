import Gridcol from './gridcol.vue';
import './gridcol.scss';

Gridcol.install = function(Vue) {
  Vue.component(Gridcol.name, Gridcol);
};

export default Gridcol
