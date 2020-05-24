import Drag from './drag.vue';
import './drag.scss';

Drag.install = function (Vue) {
  Vue.component(Drag.name, Drag);
};

export default Drag;
