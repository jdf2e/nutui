import Magic from './magic.vue';
import './magic.scss';

Magic.install = function(Vue) {
  Vue.component(Magic.name, Magic);
};

export default Magic;
