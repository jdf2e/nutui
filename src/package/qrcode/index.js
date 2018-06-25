import QRCode from './src/qrcode.vue';

QRCode.install = function(Vue) {
  Vue.component(QRCode.name, QRCode);
};

export default QRCode