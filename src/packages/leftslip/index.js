import LeftSlip from "./leftslip.vue";
import "./leftslip.scss";

LeftSlip.install = function(Vue) {
  Vue.component(LeftSlip.name, LeftSlip);
};

export default LeftSlip;
