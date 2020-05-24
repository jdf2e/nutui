import SideNavBar from './sidenavbar.vue';
import './sidenavbar.scss';
import Subsidenavbar from '../subsidenavbar/subsidenavbar.vue';
import Sidenavbaritem from '../sidenavbaritem/sidenavbaritem.vue';
import Icon from '../icon/icon.vue';
SideNavBar.install = function (Vue) {
  Vue.component(SideNavBar.name, SideNavBar);
  Vue.component(Subsidenavbar.name, Subsidenavbar);
  Vue.component(Sidenavbaritem.name, Sidenavbaritem);
  Vue.component(Icon.name, Icon);
};
export default SideNavBar;
