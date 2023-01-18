import { NutComponent } from './../../common/component.ts'

NutComponent({
  props: {
    contentPosition: {
      type: String,
      value: 'center'
    },
    dashed: {
      type: Boolean,
      value: false
    },
    hairline: {
      type: Boolean,
      value: true
    },
    direction: {
      type: String,
      value: 'horizontal'
    },
    borderColor: {
      type: String,
      value: 'initial'
    },
    useSlot: {
      type: Boolean,
      value: false
    }
  },

  methods: {},
});
