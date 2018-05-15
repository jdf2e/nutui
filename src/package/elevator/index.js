import Elevator from './src/elevator.vue';

Elevator.install = function(Vue) {
  Vue.component(Elevator.name, Elevator);
};

export default Elevator