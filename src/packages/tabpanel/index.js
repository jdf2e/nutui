import tabPanel from './tabpanel.vue';
import './tabpanel.scss';

tabPanel.install = function(Vue) {
  Vue.component(tabPanel.name, tabPanel);
};

export default tabPanel