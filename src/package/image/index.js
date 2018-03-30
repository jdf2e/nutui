import image from './src/image.vue';

image.install = function(Vue) {
  Vue.component(image.name, image);
};

export default image;