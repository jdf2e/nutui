import Marquee from './src/marquee.vue';

Marquee.install = function(Vue) {
  Vue.component(Marquee.name, Marquee);
};

export default Marquee