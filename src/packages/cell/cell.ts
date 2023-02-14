import { NutComponent } from '../../common/component.ts'

NutComponent({
  props: {
    title: { type: String, value: '' },
    subTitle: { type: String, value: '' },
    desc: { type: String, value: '' },
    descTextAlign: { type: String, value: 'right' },
    isLink: { type: Boolean, value: false },
    to: {type:[String, Object],value:''},
    replace: { type: Boolean, value: false },
    roundRadius: { type: [String, Number], value: '' },
    url: { type: String, value: '' },
    icon: { type: String, value: '' },
    rightIcon: { type: String, value: 'right' },
    center: { type: Boolean, value: false },
    size: { type: String, value: '' }, // large
    useLabelSlot: { type: Boolean, value: false },

  },
  // components: {
  //   'nut-icon': Icon
  // },
  data() {
    return {};
  },
  methods: {
    handleClick() {
      this.$emit('click');
    },
    
  }
});
