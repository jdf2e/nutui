import Address from './address.vue';
import './address.scss';

Address.install = function (Vue) {
  Vue.component(Address.name, Address);
};

export default Address;
