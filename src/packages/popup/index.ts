import { NutComponent } from './../../common/component.ts'

NutComponent({
  props: {
    show: {
      type: Boolean,
      value: false
    },
    zIndex: {
      type: [Number, String],
      value: 2000
    },
    duration: {
      type: [Number, String],
      value: 300
    },
    popStyle: String,
    popClass: {
      type: String,
      value: ''
    },
    round: {
      type: Boolean,
      value: false
    },
    overlay: {
      type: Boolean,
      value: true
    },
    position: {
      type: String,
      value: 'center'
    },
    overlayStyle: String,

    closeable: {
      type: Boolean,
      value: false
    },
    closeIconPosition: {
      type: String,
      value: 'top-right'
    },
    closeIcon: {
      type: String,
      value: 'close'
    },

    // lockScroll:{}
  },

  methods: {
    onClickOverlay(){
      console.log('点击')

      this.$emit('clickOverlay')
    },

    onClickCloseIcon(){
      this.$emit('clickCloseIcon')
    }
  },
});
