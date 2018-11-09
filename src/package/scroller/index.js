import Scroller from './src/scroller.vue';

Scroller.install = function(Vue) {
  Vue.component(Scroller.name, Scroller);
};

export default Scroller