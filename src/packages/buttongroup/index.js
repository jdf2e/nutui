import ButtonGroup from './buttongroup.vue';
import './buttongroup.scss';

ButtonGroup.install = function(Vue) {
  Vue.component(ButtonGroup.name, ButtonGroup);
};

export default ButtonGroup