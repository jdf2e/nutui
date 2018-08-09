import ShortPwd from './src/shortpwd.vue';

ShortPwd.install = function(Vue) {
  Vue.component(ShortPwd.name, ShortPwd);
};

export default ShortPwd;