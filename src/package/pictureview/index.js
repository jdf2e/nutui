import PictureView from './src/pictureview.vue';

PictureView.install = function(Vue) {
  Vue.component(PictureView.name, PictureView);
};

export default PictureView