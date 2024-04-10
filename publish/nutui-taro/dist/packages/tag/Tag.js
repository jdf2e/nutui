var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, normalizeStyle, renderSlot, createTextVNode, createBlock, unref, withModifiers, createCommentVNode } from "vue";
import { Close } from "@nutui/icons-vue-taro";
import { w as withInstall } from "../with-install-Ch3FF0uS.js";
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, {
  name: "NutTag"
}), {
  __name: "tag.taro",
  props: {
    color: { default: "" },
    textColor: { default: "" },
    type: { default: "default" },
    plain: { type: Boolean, default: false },
    round: { type: Boolean, default: false },
    mark: { type: Boolean, default: false },
    closeable: { type: Boolean, default: false }
  },
  emits: ["close", "click"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const classes = computed(() => {
      const prefixCls = "nut-tag";
      return {
        [prefixCls]: true,
        [`${prefixCls}--${props.type}`]: props.type,
        [`${prefixCls}--plain`]: props.plain,
        [`${prefixCls}--round`]: props.round,
        [`${prefixCls}--mark`]: props.mark
      };
    });
    const style = computed(() => {
      const style2 = {};
      if (props.textColor) {
        style2.color = props.textColor;
      } else if (props.color && props.plain) {
        style2.color = props.color;
      }
      if (props.plain) {
        style2.background = "#fff";
        style2.borderColor = props.color;
      } else if (props.color) {
        style2.background = props.color;
      }
      return style2;
    });
    const onClose = (event) => {
      emits("close", event);
    };
    const onClick = (event) => {
      emits("click", event);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("view", {
        class: normalizeClass(classes.value),
        style: normalizeStyle(style.value),
        onClick
      }, [
        renderSlot(_ctx.$slots, "default"),
        createTextVNode(),
        _ctx.closeable ? (openBlock(), createBlock(unref(Close), {
          key: 0,
          class: "nut-tag--close",
          size: "12px",
          onClick: withModifiers(onClose, ["stop"])
        })) : createCommentVNode("", true)
      ], 6);
    };
  }
}));
withInstall(_sfc_main);
export {
  _sfc_main as Tag,
  _sfc_main as default
};
