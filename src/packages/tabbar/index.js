import TabBar from './tabbar.vue';
import './tabbar.scss';

TabBar.install = function(Vue) {
  Vue.component(TabBar.name, TabBar);
};

export default TabBar;