import { NutComponent } from './../../common/component.ts'

NutComponent({
  props: {
    show: {
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
    overlayClass: {
      type: String,
      default: ''
    },
    lockScroll: {
      type: Boolean,
      default: false
    },
    overlayStyle: Object,
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },

  methods: {
    
  },
});
