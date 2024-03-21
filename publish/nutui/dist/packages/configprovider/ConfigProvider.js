import { c as createComponent } from "../component-DQf3CENX.js";
import { computed, h } from "vue";
const component = (tag) => {
  return {
    props: {
      theme: { type: String, default: "" },
      themeVars: { type: Object, default: {} },
      tag: { type: String, default: tag }
    },
    setup(props, { slots }) {
      const hexToRgb = (color) => {
        const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
        if (!reg.test(color))
          return "";
        color = color.toLowerCase();
        if (color.length === 4) {
          color = "#" + color.slice(1).split("").map((char) => char + char).join("");
        }
        const colors = [];
        for (let i = 1; i < 7; i += 2) {
          colors.push(parseInt("0x" + color.slice(i, i + 2)));
        }
        return colors.join(",");
      };
      const kebabCase = (str) => {
        str = str.replace(str.charAt(0), str.charAt(0).toLocaleLowerCase());
        return str.replace(/([a-z])([A-Z])/g, (_, p1, p2) => p1 + "-" + p2.toLowerCase());
      };
      const mapThemeVarsToCSSVars = (themeVars) => {
        if (!themeVars)
          return;
        const cssVars = {};
        const primaryColor = themeVars == null ? void 0 : themeVars.primaryColor;
        if (primaryColor) {
          const primaryColorRgb = hexToRgb(primaryColor);
          cssVars["--nut-address-region-tab-line"] = `linear-gradient(90deg, ${primaryColor} 0%, rgba(${primaryColorRgb}, 0.15) 100%)`;
          cssVars["--nut-tabs-horizontal-tab-line-color"] = `linear-gradient(90deg, ${primaryColor} 0%, rgba(${primaryColorRgb}, 0.15) 100%)`;
          cssVars["--nut-tabs-vertical-tab-line-color"] = `linear-gradient(180deg, ${primaryColor} 0%, rgba(${primaryColorRgb}, 0.15) 100%)`;
        }
        Object.keys(themeVars).forEach((key) => {
          cssVars[`--nut-${kebabCase(key)}`] = themeVars[key];
        });
        return cssVars;
      };
      const themeStyle = computed(() => mapThemeVarsToCSSVars(props.themeVars));
      return () => {
        var _a;
        return h(
          props.tag,
          {
            class: `nut-theme-${props.theme}`,
            style: themeStyle.value
          },
          (_a = slots.default) == null ? void 0 : _a.call(slots)
        );
      };
    }
  };
};
const { create } = createComponent("config-provider");
const _sfc_main = create(component("div"));
export {
  _sfc_main as default
};
