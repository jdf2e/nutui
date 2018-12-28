import Rating from './rating.vue';
import './rating.scss';

Rating.install = function(Vue) {
  Vue.component(Rating.name, Rating);
};

export default Rating