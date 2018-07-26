import CountUp from './src/countup.vue';

CountUp.install = function(Vue) {
  Vue.component(CountUp.name, CountUp);
};

export default CountUp