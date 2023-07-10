import { h, defineComponent } from 'vue';
export default defineComponent({
  props: {
    slots: {
      type: Array,
      default: () => []
    },
    record: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props: any) {
    return () => h(`view`, {}, props.slots[0] ? props.slots[0](props.record) : props.slots[1](props.record));
  }
});
