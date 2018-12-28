import 'babel-polyfill';
import Vue from 'vue'
import App from './App.vue'
import router from './router';
// import copy from './asset/js/copy';
import copy from 'clipboard';

// import hljs from 'highlight.js/lib/highlight';
// import javascript from 'highlight.js/lib/languages/javascript';
// import css from 'highlight.js/lib/languages/css';
// import html from 'highlight.js/lib/languages/htmlbars';
// import bash from 'highlight.js/lib/languages/bash';
// hljs.registerLanguage('javascript', javascript);
// hljs.registerLanguage('html', html);
// hljs.registerLanguage('css', css);
// hljs.registerLanguage('bash', bash);

import 'highlight.js/styles/github.css';

//import prettify from 'google-code-prettify/src/prettify';
//import  'google-code-prettify/src/prettify.css';
//import  'google-code-prettify/styles/sunburst.css';
import Conf from '../../src/config.json';
 //import qrcode from './qrcode/index.js';
import codes from 'qrcode';
 //import NutUI from '../../src/nutui.js';
//import '../dist/nutui/src/dialog/dialog.css';
//Vue.prototype.hljs = highlight;
Vue.prototype.copy = copy;
Vue.prototype.qrcode = codes;
//dialog.install(Vue);
Vue.config.productionTip = false;

new Vue({
  el: '#doc',
  router,
  components: { App },
  template: '<App/>'
})
Vue.prototype.NUTCONF = Conf;

