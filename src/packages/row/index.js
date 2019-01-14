import Row from './row.vue';
import './row.scss';

Row.install = function(Vue) {
    Vue.component(Row.name, Row);
};

export default Row;