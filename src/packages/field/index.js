import Field from './field.vue';
import './field.scss';

Field.install = function(Vue) {
  Vue.component(Field.name, Field);
};

export default Field