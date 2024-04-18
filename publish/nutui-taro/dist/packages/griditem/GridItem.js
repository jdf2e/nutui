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
import { defineComponent, computed, openBlock, createElementBlock, normalizeStyle, createElementVNode, normalizeClass, renderSlot, createTextVNode, Fragment, toDisplayString } from "vue";
import { u as useParent } from "../useParent-D6DiuxZZ.js";
import { p as pxCheck } from "../pxCheck-DN6FYV6q.js";
import { G as GRID_KEY } from "../types-CJeZIBld.js";
import { w as withInstall } from "../with-install-Ch3FF0uS.js";
const _hoisted_1 = { class: "nut-grid-item__text" };
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, {
  name: "NutGridItem"
}), {
  __name: "grid-item.taro",
  props: {
    text: {}
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const { parent: parentObj, index } = useParent(GRID_KEY);
    const parent = (parentObj == null ? void 0 : parentObj.props) || {};
    const rootStyle = computed(() => {
      const style = {
        flexBasis: `${100 / +parent.columnNum}%`
      };
      if (parent.square) {
        style.paddingTop = `${100 / +parent.columnNum}%`;
      } else if (parent.gutter) {
        style.paddingRight = pxCheck(parent.gutter);
        if (index.value >= +parent.columnNum) {
          style.marginTop = pxCheck(parent.gutter);
        }
      }
      return style;
    });
    const contentClass = computed(() => {
      const prefixCls = `nut-grid-item__content`;
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}--border`]: parent.border,
        [`${prefixCls}--surround`]: parent.border && parent.gutter,
        [`${prefixCls}--center`]: parent.center,
        [`${prefixCls}--square`]: parent.square,
        [`${prefixCls}--reverse`]: parent.reverse,
        [`${prefixCls}--${parent.direction}`]: !!parent.direction,
        [`${prefixCls}--clickable`]: parent.clickable
      };
    });
    const handleClick = (event) => {
      emit("click", event);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("view", {
        class: "nut-grid-item",
        style: normalizeStyle(rootStyle.value),
        onClick: handleClick
      }, [
        createElementVNode("view", {
          class: normalizeClass(contentClass.value)
        }, [
          renderSlot(_ctx.$slots, "default"),
          createTextVNode(),
          createElementVNode("view", _hoisted_1, [
            _ctx.text ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createTextVNode(toDisplayString(_ctx.text), 1)
            ], 64)) : renderSlot(_ctx.$slots, "text", { key: 1 })
          ])
        ], 2)
      ], 4);
    };
  }
}));
withInstall(_sfc_main);
export {
  _sfc_main as GridItem,
  _sfc_main as default
};
