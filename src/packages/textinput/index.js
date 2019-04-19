import TextInput from './textinput.vue';
import './textinput.scss';

TextInput.install = function(Vue) {
  Vue.component(TextInput.name, TextInput);
};

export default TextInput