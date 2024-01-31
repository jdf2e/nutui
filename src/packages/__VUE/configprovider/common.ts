import { h, computed } from 'vue';

export const component = (tag: string) => {
  return {
    props: {
      theme: { type: String, default: '' },
      themeVars: { type: Object, default: {} },
      tag: { type: String, default: tag }
    },

    setup(props: any, { slots }: any) {
      const hexToRgb = (color: string) => {
        //十六进制颜色值的正则表达式
        const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
        if (!reg.test(color)) return '';
        color = color.toLowerCase();
        // 如果是16进制颜色
        if (color.length === 4) {
          color =
            '#' +
            color
              .slice(1)
              .split('')
              .map((char) => char + char)
              .join('');
        }
        //处理六位的颜色值
        const colors = [];
        for (let i = 1; i < 7; i += 2) {
          colors.push(parseInt('0x' + color.slice(i, i + 2)));
        }
        return colors.join(',');
      };

      const kebabCase = (str: string): string => {
        str = str.replace(str.charAt(0), str.charAt(0).toLocaleLowerCase());
        return str.replace(/([a-z])([A-Z])/g, (_, p1, p2) => p1 + '-' + p2.toLowerCase());
      };

      const mapThemeVarsToCSSVars = (themeVars: Record<string, string>) => {
        if (!themeVars) return;
        const cssVars: Record<string, string> = {};
        const primaryColor = themeVars?.primaryColor;
        // 为了处理一些组件的rgba透明颜色
        if (primaryColor) {
          const primaryColorRgb = hexToRgb(primaryColor);
          cssVars['--nut-address-region-tab-line'] =
            `linear-gradient(90deg, ${primaryColor} 0%, rgba(${primaryColorRgb}, 0.15) 100%)`;
          cssVars['--nut-tabs-horizontal-tab-line-color'] =
            `linear-gradient(90deg, ${primaryColor} 0%, rgba(${primaryColorRgb}, 0.15) 100%)`;
          cssVars['--nut-tabs-vertical-tab-line-color'] =
            `linear-gradient(180deg, ${primaryColor} 0%, rgba(${primaryColorRgb}, 0.15) 100%)`;
        }

        Object.keys(themeVars).forEach((key) => {
          cssVars[`--nut-${kebabCase(key)}`] = themeVars[key];
        });

        return cssVars;
      };

      const themeStyle = computed(() => mapThemeVarsToCSSVars(props.themeVars));

      return () => {
        return h(
          props.tag,
          {
            class: `nut-theme-${props.theme}`,
            style: themeStyle.value
          },
          slots.default?.()
        );
      };
    }
  };
};
