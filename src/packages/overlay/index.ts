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
    overlayStyle: String,
  },

  methods: {
    onClick(){
      this.$emit('click');
    }
  },
});
