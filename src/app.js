import 'babel-polyfill';
import Vue from 'vue';
import App from './app.vue';
import router from './router.js';
import NutUI from './nutui.js';
import codeBox from './package/codebox/index.js';
import docHeader from './package/docheader/index.js';
import VueQriously from 'vue-qriously';
import Conf from '../config.json';
import share from './asset/js/share.min.js';

Vue.prototype.NUTCONF = Conf;

NutUI.install(Vue);
//二维码生成
Vue.use(VueQriously);

Vue.component('nut-codebox', codeBox);
Vue.component('nut-docheader', docHeader);

Vue.directive('highlight',function (el) {
    hljs.highlightBlock(el)
});

const app = new Vue({
  router,
  render: h => h(App),
}).$mount('#app');



var shareOption = {
  iconUrl: 'http://nutui.jd.com/asset/img/share.png',
  url: location.href,
  title: "NutUI - 基于Vue2.0的移动端开源组件库",
  desc: '一套拥有电商基因的基于Vue2.0的轻量级移动端开源组件库'
};
function printJoinUsInfo() {
var joinUsHtml =  `我不知道你来自哪里？亦不知道你将去何方？
但当你打开这个页面之时，我知道，
一定是代码的缘分将你我拉近！

金鳞岂是池中物，一遇风云便化龙。
少年！我看你骨骼惊奇，一定是敲代码的奇才！
加入我们，加入JDC-前端开发部！你，必将改变亿万人民的生活！

欢迎点击 http://jdc.jd.com ， 或者关注公众号“全栈探索”来了解我们，
还犹豫什么？欢迎将简历投至： yfzhoutao@jd.com  (请注明来自console)
我们在这里等你哦！`
    if (window.console && console.log && navigator.userAgent.toLowerCase().match(/chrome\/([\d.]+)/)) {
        joinUsHtml = joinUsHtml.replace(/%c/g, '');
        joinUsHtml = '%c' + joinUsHtml;
        var weightSize = 'color: #e2231a; font-family: "Microsoft Yahei"';
        console.log(joinUsHtml, weightSize);
        //var normalSize = 'color: #666; font-family: "Microsoft Yahei"';
        //console.log(joinUsHtml, normalSize, weightSize, normalSize, weightSize, normalSize, weightSize);
    }
}
printJoinUsInfo();
try {
  /*初始化分享*/
  window.share.shareInit(shareOption);
} catch (e) {
  console.log(e);
}