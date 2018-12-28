import ImagePicker from './imagepicker.vue';
import './imagepicker.scss';

ImagePicker.install = function(Vue) {
  Vue.component(ImagePicker.name, ImagePicker);
};

export default ImagePicker