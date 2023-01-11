import { h, PropType, defineComponent } from 'vue';
export default defineComponent({
  setup(props: any) {
    return () => h(`view`, {}, props.slots[0] ? props.slots[0](props.record) : props.slots[1](props.record));
  },
  props: {
    slots: Array as PropType<Array<Function | undefined>>,
    record: Object
  }
});
