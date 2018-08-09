import Price from './src/price.vue';

Price.install = function(Vue) {
  Vue.component(Price.name, Price);
};

export default Price