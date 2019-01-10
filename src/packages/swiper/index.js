import Swiper from './swiper.vue';
import './swiper.scss';

Swiper.install = function(Vue){
    Vue.component(Swiper.name,Swiper);
};

export default Swiper;