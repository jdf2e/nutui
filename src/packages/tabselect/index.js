import TabSelect from './tabselect.vue';
import './tabselect.scss';

TabSelect.install = function(Vue) {
  Vue.component(TabSelect.name, TabSelect);
};

export default TabSelect