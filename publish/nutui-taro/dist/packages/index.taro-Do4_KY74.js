import { toRefs, inject, ref, computed, openBlock, createElementBlock, normalizeStyle, normalizeClass, renderSlot } from "vue";
import { c as createComponent } from "./component-DQf3CENX.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const AVATAR_KEY = Symbol("nut-avatar");
const { create } = createComponent("avatar");
const _sfc_main = create({
  props: {
    size: {
      type: [String, Number],
      default: "normal"
    },
    shape: {
      type: String,
      default: "round"
    },
    bgColor: {
      type: String,
      default: "#eee"
    },
    color: {
      type: String,
      default: "#666"
    }
  },
  setup(props) {
    const { size, shape, bgColor, color } = toRefs(props);
    const sizeValue = ["large", "normal", "small"];
    const avatarGroup = inject(AVATAR_KEY, null);
    const avatarRef = ref(null);
    const classes = computed(() => {
      var _a, _b;
      const prefixCls = "nut-avatar";
      return {
        [prefixCls]: true,
        [`nut-avatar-${size.value || ((_a = avatarGroup == null ? void 0 : avatarGroup.props) == null ? void 0 : _a.size) || "normal"}`]: true,
        [`nut-avatar-${shape.value || ((_b = avatarGroup == null ? void 0 : avatarGroup.props) == null ? void 0 : _b.shape) || "round"}`]: true
      };
    });
    const styles = computed(() => {
      var _a, _b;
      return {
        width: size.value in sizeValue ? "" : `${size.value}px`,
        height: size.value in sizeValue ? "" : `${size.value}px`,
        backgroundColor: `${bgColor.value}`,
        color: `${color.value}`,
        marginLeft: ((_a = avatarGroup == null ? void 0 : avatarGroup.props) == null ? void 0 : _a.span) ? `${(_b = avatarGroup == null ? void 0 : avatarGroup.props) == null ? void 0 : _b.span}px` : ""
      };
    });
    return {
      classes,
      styles,
      avatarRef
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    ref: "avatarRef",
    style: normalizeStyle(_ctx.styles),
    class: normalizeClass(_ctx.classes)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 6);
}
const NutAvatar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  AVATAR_KEY as A,
  NutAvatar as N
};
