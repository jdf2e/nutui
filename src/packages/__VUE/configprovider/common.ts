import { h, PropType, provide } from 'vue';
export const component = {
  props: {
    theme: { type: String, default: '' },
    tag: { type: String as PropType<keyof HTMLElementTagNameMap>, default: 'div' },
    classPrefix: { type: String, default: 'nut-icon' },
    fontClassName: { type: String, default: 'nutui-iconfont' }
  },
  setup(props: any, { slots }: any) {
    provide('nut-config-provider', props);
    return () => {
      return h(
        props.tag,
        {
          class: `nut-config-provider nut-theme-${props.theme}`
        },
        slots.default?.()
      );
    };
  }
};
