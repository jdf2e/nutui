import ParallaxScroll from './src/parallaxscroll.vue';

ParallaxScroll.install = function(Vue) {
  Vue.component(ParallaxScroll.name, ParallaxScroll);
};

export default ParallaxScroll