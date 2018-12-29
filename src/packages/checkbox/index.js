import CheckBox from './checkbox.vue';
import './checkbox.scss';

CheckBox.install = function(Vue) {
  Vue.component(CheckBox.name, CheckBox);
};

export default CheckBox