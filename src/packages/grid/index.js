import Row from '../gridrow/gridrow.vue';
import Col from '../gridcol/gridcol.vue';
import './grid.scss';

Row.install = function(Vue) {
  Vue.component(Row.name, Row);
};
Col.install = function(Vue) {
  Vue.component(Col.name, Col);
};

export {Row, Col};
