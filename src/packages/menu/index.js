import Menu from './menu.vue';
import './menu.scss';

Menu.install = function(Vue) {
  Vue.component(Menu.name, Menu);
};

export default Menu