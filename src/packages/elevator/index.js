import Elevator from './elevator.vue';
import './elevator.scss';

Elevator.install = function(Vue) {
  Vue.component(Elevator.name, Elevator);
};

export default Elevator