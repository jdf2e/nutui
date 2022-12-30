import { PropType, CSSProperties } from 'vue';
export const popupProps = {
  visible: {
    type: Boolean,
    default: false
  },
  zIndex: {
    type: [Number, String],
    default: 2000
  },
  duration: {
    type: [Number, String],
    default: 0.3
  },
  lockScroll: {
    type: Boolean,
    default: false
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: true
  },
  position: {
    type: String,
    default: 'center'
  },
  transition: {
    type: String,
    default: ''
  },
  style: {
    type: Object as PropType<CSSProperties>,
    default: {}
  },
  popClass: {
    type: String,
    default: ''
  },
  closeable: {
    type: Boolean,
    default: false
  },
  closeIconPosition: {
    type: String,
    default: 'top-right'
  },
  closeIcon: {
    type: String,
    default: 'close'
  },
  destroyOnClose: {
    type: Boolean,
    default: true
  },
  teleport: {
    type: [String, Element],
    default: 'body'
  },
  overlay: {
    type: Boolean,
    default: true
  },
  round: {
    type: Boolean,
    default: false
  },
  teleportDisable: {
    type: Boolean,
    default: false
  },
  safeAreaInsetBottom: {
    type: Boolean,
    default: false
  }
};
