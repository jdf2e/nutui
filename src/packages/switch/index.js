import Switch from './switch.vue';
import './switch.scss';

Switch.install = function (Vue) {
    Vue.component(Switch.name, Switch);
};

export default Switch;
