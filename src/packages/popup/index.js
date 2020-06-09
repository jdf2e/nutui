import Popup from "./popup.vue";
import "./popup.scss";
import { overlayProps ,getProps} from "./overlay/overlay-manager";

Popup.install = function(Vue) {
  Vue.component(Popup.name, Popup);
};

export default Popup;
export {overlayProps, getProps};
