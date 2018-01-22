import Timer from './src/timer.vue';

Timer.install = function(Vue) {
  Vue.component(Timer.name, Timer);
};

export default Timer