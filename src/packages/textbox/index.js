import TextBox from './textbox.vue';
import './textbox.scss';


console.log(TextBox.name)
TextBox.install = function(Vue) {
    Vue.component(TextBox.name, TextBox);
};

export default TextBox
