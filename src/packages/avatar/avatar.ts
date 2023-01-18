import { NutComponent } from '../../common/component.ts'

NutComponent({
  props: {
    size: {
      type: String,
      value: 'normal'
    },
    shape: {
      type: String,
      value: 'round'
    },
    bgColor: {
      type: String,
      value: '#eee'
    },
    bgIcon: {
      type: String,
      value:"https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
      },
    bgImage: {
      type: String,
      value: 'https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png'
    }
  },
  computed: {
    styles() {
      return {
        backgroundImage: this.bgImage ? `url(${this.bgImage})` : null,
        backgroundColor: `${this.bgColor}`
      };
    },
    iconStyles() {
      return this.bgIcon ? { backgroundImage: `url(${this.bgIcon})` } : null;
    },
    isShowText() {
      return this.$slots.default;
    }
  },
  data() {
    return {};
  },
  methods: {
    activeAvatar() {
      this.$emit('active-avatar', event);
    }
  }
});
