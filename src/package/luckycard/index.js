import LuckyCard from './src/luckycard.vue';

LuckyCard.install = function(Vue) {
  Vue.component(LuckyCard.name, LuckyCard);
};

export default LuckyCard