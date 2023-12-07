import { useSlots, computed, resolveComponent, openBlock, createElementBlock, createElementVNode, normalizeClass, normalizeStyle, toDisplayString, createCommentVNode, renderSlot, createVNode } from "vue";
import { Checked } from "@nutui/icons-vue";
import { c as createComponent } from "../component-TCzwHGVq.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-yVxbj29m.js";
const { create } = createComponent("progress");
const _sfc_main = create({
  components: { Checked },
  props: {
    percentage: {
      type: [Number, String],
      default: 0,
      required: true
    },
    size: {
      type: String,
      default: "base"
    },
    status: {
      type: String,
      default: "text"
    },
    strokeWidth: {
      type: [Number, String],
      default: ""
    },
    textInside: {
      type: Boolean,
      default: false
    },
    showText: {
      type: Boolean,
      default: true
    },
    strokeColor: {
      type: String,
      default: ""
    },
    textColor: {
      type: String,
      default: ""
    },
    textBackground: {
      type: String,
      default: ""
    },
    isShowPercentage: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const slotDefault = !!useSlots().default;
    const height = computed(() => {
      if (props.strokeWidth) {
        return props.strokeWidth + "px";
      }
      return void 0;
    });
    const percentage = computed(() => {
      return Number(props.percentage) >= 100 ? 100 : Number(props.percentage);
    });
    const bgStyle = computed(() => {
      return {
        width: percentage.value + "%",
        background: props.strokeColor || ""
      };
    });
    const textStyle = computed(() => {
      return {
        color: props.textColor || ""
      };
    });
    return {
      height,
      percentage,
      bgStyle,
      textStyle,
      slotDefault
    };
  }
});
const _hoisted_1 = { class: "nut-progress" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Checked = resolveComponent("Checked");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("div", {
      class: normalizeClass(["nut-progress-outer", [_ctx.showText && !_ctx.textInside ? "nut-progress-outer-part" : "", _ctx.size ? "nut-progress-" + _ctx.size : ""]]),
      style: normalizeStyle({ height: _ctx.height })
    }, [
      createElementVNode("div", {
        class: normalizeClass(["nut-progress-inner", _ctx.status === "active" ? "nut-active" : ""]),
        style: normalizeStyle(_ctx.bgStyle)
      }, null, 6),
      _ctx.showText && _ctx.textInside && !_ctx.slotDefault ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "nut-progress-text nut-progress-insidetext",
        style: normalizeStyle({
          lineHeight: _ctx.height,
          left: `${_ctx.percentage}%`,
          transform: `translate(-${+_ctx.percentage}%,-50%)`,
          background: _ctx.textBackground || _ctx.strokeColor
        })
      }, [
        createElementVNode("span", {
          style: normalizeStyle(_ctx.textStyle)
        }, toDisplayString(_ctx.percentage) + toDisplayString(_ctx.isShowPercentage ? "%" : ""), 5)
      ], 4)) : createCommentVNode("", true),
      _ctx.showText && _ctx.textInside && _ctx.slotDefault ? (openBlock(), createElementBlock("div", {
        key: 1,
        class: "nut-progress-slot",
        style: normalizeStyle({
          position: `absolute`,
          top: `50%`,
          left: `${_ctx.percentage}%`,
          transform: `translate(-${+_ctx.percentage}%,-50%)`
        })
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 4)) : createCommentVNode("", true)
    ], 6),
    _ctx.showText && !_ctx.textInside ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: "nut-progress-text",
      style: normalizeStyle({ lineHeight: _ctx.height })
    }, [
      _ctx.status === "text" || _ctx.status === "active" ? (openBlock(), createElementBlock("span", {
        key: 0,
        style: normalizeStyle(_ctx.textStyle)
      }, toDisplayString(_ctx.percentage) + toDisplayString(_ctx.isShowPercentage ? "%" : ""), 5)) : _ctx.status === "icon" ? renderSlot(_ctx.$slots, "icon-name", { key: 1 }, () => [
        createVNode(_component_Checked, {
          width: "15px",
          height: "15px",
          color: "#439422"
        })
      ]) : createCommentVNode("", true)
    ], 4)) : createCommentVNode("", true)
  ]);
}
const NutProgress = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  NutProgress as default
};
