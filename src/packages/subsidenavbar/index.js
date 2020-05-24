import SubSideNavBar from './subsidenavbar.vue';
import './subsidenavbar.scss';

SubSideNavBar.install = function (Vue) {
  Vue.component(SubSideNavBar.name, SubSideNavBar);
};

export default SubSideNavBar;
