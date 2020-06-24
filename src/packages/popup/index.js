import Popup from "./popup.vue";
import "./popup.scss";
import { getProps} from "./overlay/overlay-manager";
import { overlayProps } from './overlay/overlay.vue';
Popup.install = function(Vue) {
  Vue.component(Popup.name, Popup);
};

export default Popup;
export {overlayProps, getProps};
