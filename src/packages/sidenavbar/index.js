import SideNavBar from './sidenavbar.vue';
import './sidenavbar.scss';

SideNavBar.install = function(Vue) {
  Vue.component(SideNavBar.name, SideNavBar);
};

export default SideNavBar