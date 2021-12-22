import { h } from 'vue';
export default {
  setup(props: any) {
    return () => h(`view`, {}, props.slots());
  },
  props: {
    slots: Object
  }
};
