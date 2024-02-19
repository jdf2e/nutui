import { computed, openBlock, createElementBlock, createElementVNode, normalizeStyle, renderSlot, createCommentVNode, createTextVNode, toDisplayString } from "vue";
import { c as createComponent } from "../component-TCzwHGVq.js";
import { p as pxCheck } from "../pxCheck-OnXlN1NC.js";
import { u as useLocale } from "../index-xXrovSQL.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-yVxbj29m.js";
const { create } = createComponent("empty");
const cN = "NutEmpty";
const defaultStatus = {
  empty: "https://static-ftcms.jd.com/p/files/61a9e3183985005b3958672b.png",
  error: "https://ftcms.jd.com/p/files/61a9e33ee7dcdbcc0ce62736.png",
  network: "https://static-ftcms.jd.com/p/files/61a9e31de7dcdbcc0ce62734.png"
};
const _sfc_main = create({
  props: {
    image: {
      type: String,
      default: "empty"
    },
    imageSize: {
      type: [Number, String],
      default: ""
    },
    description: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    const translate = useLocale(cN);
    const style = computed(() => {
      if (props.imageSize) {
        return {
          width: pxCheck(props.imageSize),
          height: pxCheck(props.imageSize)
        };
      }
      return {};
    });
    const src = computed(() => {
      if (props.image.startsWith("https://") || props.image.startsWith("http://") || props.image.startsWith("//")) {
        return props.image;
      } else {
        return defaultStatus[props.image];
      }
    });
    return { src, style, translate };
  }
});
const _hoisted_1 = { class: "nut-empty" };
const _hoisted_2 = ["src"];
const _hoisted_3 = { class: "nut-empty__description" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", _hoisted_1, [
    createElementVNode("view", {
      class: "nut-empty__box",
      style: normalizeStyle(_ctx.style)
    }, [
      renderSlot(_ctx.$slots, "image", {}, () => [
        _ctx.src ? (openBlock(), createElementBlock("img", {
          key: 0,
          class: "nut-empty__box--img",
          src: _ctx.src
        }, null, 8, _hoisted_2)) : createCommentVNode("", true)
      ])
    ], 4),
    createTextVNode(),
    renderSlot(_ctx.$slots, "description", {}, () => [
      createElementVNode("view", _hoisted_3, toDisplayString(_ctx.description || _ctx.translate("noData")), 1)
    ]),
    createTextVNode(),
    renderSlot(_ctx.$slots, "default")
  ]);
}
const index_taro = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index_taro as default
};
