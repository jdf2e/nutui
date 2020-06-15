import Card from './card.vue';
import './card.scss';

Card.install = function (Vue) {
  Vue.component(Card.name, Card);
};

export default Card;
