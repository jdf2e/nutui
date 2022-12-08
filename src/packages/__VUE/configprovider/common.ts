import { h, PropType } from 'vue';
export const component = {
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
    console.log(mapThemeVarsToCSSVars(props.themeVars));

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
};
