import Pullrefreshloadmore from './pullrefreshloadmore.vue';
import './pullrefreshloadmore.scss';

Pullrefreshloadmore.install = function (Vue) {
  console.log('Pullrefreshloadmore.name', Pullrefreshloadmore.name);
  Vue.component(Pullrefreshloadmore.name, Pullrefreshloadmore);
};

export default Pullrefreshloadmore;
