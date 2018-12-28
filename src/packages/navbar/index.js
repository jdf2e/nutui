import NavBar from './navbar.vue';
import './navbar.scss';

NavBar.install = function(Vue) {
  Vue.component(NavBar.name, NavBar);
};

export default NavBar