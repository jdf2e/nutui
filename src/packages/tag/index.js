import Tag from './tag.vue';

import './tag.scss';

Tag.install = function (Vue) {
  Vue.component(Tag.name, Tag);
};

export default Tag;
