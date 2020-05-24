import Signature from './signature.vue';
import './signature.scss';

Signature.install = function (Vue) {
  Vue.component(Signature.name, Signature);
};

export default Signature;
