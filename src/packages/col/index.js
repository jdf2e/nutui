import Col from './col.vue';
import './col.scss';

Col.install = function(Vue) {
    Vue.component(Col.name, Col);
};

export default Col;