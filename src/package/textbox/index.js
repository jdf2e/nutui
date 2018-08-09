import TextBox from './src/textbox.vue';

TextBox.install = function(Vue) {
  Vue.component(TextBox.name, TextBox);
};

export default TextBox