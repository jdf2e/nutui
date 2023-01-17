<script lang="ts">
import { createComponent } from '@/packages/utils/create';
import { h, PropType, VNode } from 'vue';
import { isObject } from '@/packages/utils/util';
const { componentName, create } = createComponent('config-provider');
export default create({
  props: {
    theme: { type: String, default: '' },
    themeVars: { type: Object, default: () => {} },
    tag: { type: String as PropType<keyof HTMLElementTagNameMap>, default: 'div' }
  },
  setup(props: any, { slots }: any) {
    const kebabCase = (str: string): string => {
      str = str.replace(str.charAt(0), str.charAt(0).toLocaleLowerCase());
      return str.replace(/([a-z])([A-Z])/g, (_, p1, p2) => p1 + '-' + p2.toLowerCase());
    };
    const colorRgb = (str: string) => {
      if (!str) return;
      var sColor = str.toLowerCase();
      //十六进制颜色值的正则表达式
      var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
      // 如果是16进制颜色
      if (sColor && reg.test(sColor)) {
        if (sColor.length === 4) {
          var sColorNew = '#';
          for (var i = 1; i < 4; i += 1) {
            sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
          }
          sColor = sColorNew;
        }
        //处理六位的颜色值
        var sColorChange = [];
        for (var i = 1; i < 7; i += 2) {
          sColorChange.push(parseInt('0x' + sColor.slice(i, i + 2)));
        }
        return sColorChange.join(',');
      }
      return null;
    };

    const mapThemeVarsToCSSVars = (themeVars: Record<string, string>) => {
      if (!themeVars) return;
      const cssVars: Record<string, string> = {};
      const primaryColor = props?.themeVars?.primaryColor;
      // 为了处理一些组件的rgba透明颜色
      if (primaryColor) {
        cssVars[`--nut-address-region-tab-line`] = `linear-gradient(90deg, ${primaryColor} 0%, rgba(${colorRgb(
          primaryColor
        )},0.15) 100%) `;
        cssVars[`--nut-tabs-horizontal-tab-line-color`] = `linear-gradient(90deg, ${primaryColor} 0%, rgba(${colorRgb(
          primaryColor
        )},0.15)100%)`;
        cssVars[`--nut-tabs-vertical-tab-line-color`] = `linear-gradient(180deg, ${primaryColor} 0%, rgba(${colorRgb(
          primaryColor
        )},0.15) 100%) `;
      }
      Object.keys(themeVars).forEach((key) => {
        cssVars[`--nut-${kebabCase(key)}`] = themeVars[key];
      });

      return cssVars;
    };

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
          class: `nut-theme-${props.theme}`,
          style: mapThemeVarsToCSSVars(props.themeVars)
        },
        defaultSlots
      );
    };
  }
});
</script>
