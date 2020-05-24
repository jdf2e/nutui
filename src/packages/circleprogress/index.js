import CircleProgress from './circleprogress.vue';
import './circleprogress.scss';

CircleProgress.install = function (Vue) {
  Vue.component(CircleProgress.name, CircleProgress);
};

export default CircleProgress;
