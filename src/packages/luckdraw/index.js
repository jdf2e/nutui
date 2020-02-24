import LuckDraw from './luckdraw.vue';
import './luckdraw.scss';

LuckDraw.install = function(Vue) {
  Vue.component(LuckDraw.name, LuckDraw);
};

export default LuckDraw