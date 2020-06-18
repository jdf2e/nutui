import CountUp from './countup.vue';
import './countup.scss';

CountUp.install = function(Vue) {
  Vue.component(CountUp.name, CountUp);
};

export default CountUp