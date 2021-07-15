import Magic from './magic.vue';
import Cube from './Cube/index.vue';
import CubeItem from './Cube/CubeItem.vue';
import './magic.scss';

Magic.install = function(Vue) {
  Vue.component(Magic.name, Magic);
  Vue.component('Cube', Cube);
  Vue.component('CubeItem', CubeItem);
};

export default Magic;
