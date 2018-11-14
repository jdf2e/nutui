import NavBar from './src/navbar.vue';

NavBar.install = function(Vue) {
  Vue.component(NavBar.name, NavBar);
};

export default NavBar