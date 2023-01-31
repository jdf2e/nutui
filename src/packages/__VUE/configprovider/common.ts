import { isObject } from '@/packages/utils/util';
import { h, PropType, VNode } from 'vue';

export const component = {
  props: {
    theme: { type: String, default: '' },
    tag: { type: String as PropType<keyof HTMLElementTagNameMap>, default: 'div' },
    classPrefix: { type: String, default: 'nut-icon' },
    fontClassName: { type: String, default: 'nutui-iconfont' }
  },
  setup(props: any, { slots }: any) {
    // 覆盖默认插槽的属性
    const overDefaultSlotProp = (vnodes: VNode[]) => {
      if (!vnodes) {
        return;
      }
      vnodes.forEach((vnode: VNode) => {
        let type = vnode.type;
        type = (type as any).name || type;
        if (!vnode.props) {
          vnode.props = {};
        }
        if (type == 'nut-icon') {
          vnode.props['fontClassName'] = vnode.props['font-class-name'] || props.fontClassName;
          vnode.props['classPrefix'] = vnode.props['class-prefix'] || props.classPrefix;
        }

        if (Array.isArray(vnode.children) && vnode.children?.length) {
          overDefaultSlotProp(vnode.children as VNode[]);
        } else if (isObject(vnode.children) && Object.keys(vnode.children)) {
          let children = vnode.children as any;
          for (const key in children) {
            if (key === '_') {
              break;
            }

            const childrenVNode = children[key]?.();
            overDefaultSlotProp(childrenVNode);
            children[key] = () => childrenVNode;
          }
        }
      });
    };

    return () => {
      const defaultSlots = slots.default?.();
      overDefaultSlotProp(defaultSlots);
      return h(
        props.tag,
        {
          class: `nut-theme-${props.theme}`
        },
        defaultSlots
      );
    };
  }
};
