import Stepper from './stepper.vue';
import './stepper.scss';

Stepper.install = function(Vue) {
  Vue.component(Stepper.name, Stepper);
};

export default Stepper