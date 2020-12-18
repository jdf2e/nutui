import NumberKeyboard from './numberkeyboard.vue';
import './numberkeyboard.scss';

NumberKeyboard.install = function(Vue) {
  Vue.component(NumberKeyboard.name, NumberKeyboard);
};

export default NumberKeyboard;
