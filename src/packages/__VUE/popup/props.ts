import type { PropType } from 'vue'
import type { PopupCloseIconPosition, PopupPosition } from './types'

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
    default: true
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: true
  },
  position: {
    type: String as PropType<PopupPosition>,
    default: 'center'
  },
  transition: {
    type: String,
    default: ''
  },
  style: {
    type: Object,
    default: () => ({})
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
    type: String as PropType<PopupCloseIconPosition>,
    default: 'top-right'
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
  },
  overlayClass: {
    type: String,
    default: ''
  },
  overlayStyle: {
    type: Object,
    default: () => ({})
  }
}
