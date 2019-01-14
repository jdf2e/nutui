import Cell from './cell.vue';
import './cell.scss';

Cell.install = function(Vue) {
  Vue.component(Cell.name, Cell);
};

export default Cell;