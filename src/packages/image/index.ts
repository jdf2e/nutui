import { NutComponent } from './../../common/component.ts'

NutComponent({
  props: {
    color: String,
    shape: {
      type: String,
      value: 'round'
    },
    plain: {
      type: Boolean,
      value: false
    },
    loading: {
      type: Boolean,
      value: false
    },
    disabled: {
      type: Boolean,
      value: false
    },
    type: {
      type: String,
      value: 'default'
    },
    size: {
      type: String,
      value: 'normal'
    },
    block: {
      type: Boolean,
      value: false
    },
    icon: {
      type: String,
      value: ''
    },
    iconClassPrefix: {
      type: String,
      value: 'nut-icon'
    },
    iconFontClassName: {
      type: String,
      value: 'nutui-iconfont'
    }
  },

  methods: {
    handleClick() {
      if (!this.props.loading && !this.props.disabled) {
        this.$emit('click', event);
      }
    },
  },
});
