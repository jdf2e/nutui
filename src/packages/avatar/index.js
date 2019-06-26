import Avatar from './avatar.vue';
import './avatar.scss';

Avatar.install = function(Vue) {
  Vue.component(Avatar.name, Avatar);
};

export default Avatar