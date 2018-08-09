import LazyComponent from './src/lazycomponent.vue';

LazyComponent.install = function(Vue) {
  Vue.component(LazyComponent.name, LazyComponent);
};

export default LazyComponent