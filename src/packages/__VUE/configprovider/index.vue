<script lang="ts">
import { createComponent } from '@/packages/utils/create';
import { h, PropType } from 'vue';
const { componentName, create } = createComponent('config-provider');
export default /* @__PURE__ */ create({
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
    const mapThemeVarsToCSSVars = (themeVars: Record<string, string>) => {
      if (!themeVars) return;
      const cssVars: Record<string, string> = {};
      Object.keys(themeVars).forEach((key) => {
        cssVars[`--nut-${kebabCase(key)}`] = themeVars[key];
      });
      return cssVars;
    };
    return () => {
      return h(
        props.tag,
        {
          class: `nut-theme-${props.theme}`,
          style: mapThemeVarsToCSSVars(props.themeVars)
        },
        slots.default?.()
      );
    };
  }
});
</script>
