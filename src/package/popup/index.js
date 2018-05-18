import popup from './src/popup.vue';

popup.install = function(Vue) {
  Vue.component(popup.name, popup);
};

export default popup