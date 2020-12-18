import CollapseItem from './collapseitem.vue';
import './collapseitem.scss';

CollapseItem.install = function(Vue) {
  Vue.component(CollapseItem.name, CollapseItem);
};

export default CollapseItem;
