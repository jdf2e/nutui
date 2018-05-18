import {
  webpSupport
} from '../../util/util.js';

function webp(url) {
  if (url && !/\.webp$/.test(url) && webpSupport()) {
    return url + '.webp';
  } else {
    return url;
  }
}

webp.install = function (Vue) {
  Vue.filter(webp.name, webp);
};

export default webp