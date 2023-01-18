import { NutComponent } from './../../common/component.ts'

NutComponent({
  props: {
    name: { type: String, value: '' },
    size: { type: [String, Number], value: '' },
    classPrefix: { type: String, value: 'nut-icon' },
    fontClassName: { type: String, value: 'nutui-iconfont' },
    color: { type: String, value: '' },
    tag: { type: String , value: 'i' }
  },

  data() {
    return {
      icon: null
    };
  },
  watch: {
    url(val) {
      this.icon = val;
    }
  },
  methods: {
    handleClick (event: Event) {
      this.$emit('click', event);
    },

    isImage () {
      return this.props.name ? this.props.name.indexOf('/') !== -1 : false;
    }
  }
});
