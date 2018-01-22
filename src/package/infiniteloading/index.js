import InfiniteLoading from './src/infiniteloading.vue';

InfiniteLoading.install = function(Vue) {
  Vue.component(InfiniteLoading.name, InfiniteLoading);
};

export default InfiniteLoading