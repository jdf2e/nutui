import Shortpwd from './src/shortpwd.vue';

Shortpwd.install = function(Vue) {
  Vue.component(Shortpwd.name, Shortpwd);
};

export default Shortpwd;