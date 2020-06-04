import ImagePreview from './imagepreview.vue';
import './imagepreview.scss';

ImagePreview.install = function(Vue) {
  Vue.component(ImagePreview.name, ImagePreview);
};

export default ImagePreview;
