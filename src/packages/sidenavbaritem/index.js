import SideNavBarItem from './sidenavbaritem.vue';
import './sidenavbaritem.scss';

SideNavBarItem.install = function (Vue) {
  Vue.component(SideNavBarItem.name, SideNavBarItem);
};

export default SideNavBarItem;
