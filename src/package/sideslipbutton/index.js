import SideslipButton from './src/sideslipbutton.vue';

SideslipButton.install = function(Vue) {
  Vue.component(SideslipButton.name, SideslipButton);
};

export default SideslipButton