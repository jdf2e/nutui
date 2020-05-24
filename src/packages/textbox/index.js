import TextBox from './textbox.vue';
import './textbox.scss';
TextBox.install = function (Vue) {
  Vue.component(TextBox.name, TextBox);
};

export default TextBox;
