import Codebox from './src/codebox.vue';

Codebox.install = function(Vue) {
  Vue.component(Codebox.name, Codebox);
};

export default Codebox;
