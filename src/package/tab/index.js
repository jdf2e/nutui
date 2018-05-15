import Tab from './src/tab.vue';
import TabPanel from './src/tabPanel.vue';
Tab.install = function(Vue) {
  Vue.component(Tab.name, Tab);
};
TabPanel.install = function(Vue) {
  Vue.component(TabPanel.name, TabPanel);
};
export default {
	Tab,
	TabPanel
}