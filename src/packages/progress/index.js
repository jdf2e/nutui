import Progress from './progress.vue';
import './progress.scss';

Progress.install = function(Vue) {
  Vue.component(Progress.name, Progress);
};

export default Progress