import NineGrid from './ninegrid.vue';
import './ninegrid.scss';

NineGrid.install = function(Vue) {
  Vue.component(NineGrid.name, NineGrid);
};

export default NineGrid;
