import Coupon from './src/coupon.vue';

Coupon.install = function(Vue) {
  Vue.component(Coupon.name, Coupon);
};

export default Coupon