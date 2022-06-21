import { h, PropType } from 'vue';
export const component = {
  props: {
    theme: { type: String, default: '' },
    tag: { type: String as PropType<keyof HTMLElementTagNameMap>, default: 'div' }
  },
  setup(props: any, { slots }: any) {
    return () => {
      return h(
        props.tag,
        {
          class: `nut-theme-${props.theme}`
        },
        slots.default?.()
      );
    };
  }
};
