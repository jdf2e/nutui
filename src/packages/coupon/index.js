import Coupon from './coupon.vue';
import './coupon.scss';

Coupon.install = function(Vue) {
  Vue.component(Coupon.name, Coupon);
};

export default Coupon;
