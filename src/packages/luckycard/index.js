import LuckyCard from './luckycard.vue';
import './luckycard.scss';

LuckyCard.install = function(Vue) {
  Vue.component(LuckyCard.name, LuckyCard);
};

export default LuckyCard