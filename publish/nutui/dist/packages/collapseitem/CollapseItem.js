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
import { defineComponent, ref, inject, computed, watch, openBlock, createElementBlock, normalizeClass, createElementVNode, renderSlot, toDisplayString, createCommentVNode, normalizeStyle, createBlock, resolveDynamicComponent, unref } from "vue";
import { DownArrow } from "@nutui/icons-vue";
import { r as renderIcon } from "../renderIcon-CfE94nuJ.js";
import { C as COLLAPSE_KEY } from "../types-BomhFk3T.js";
import { w as withInstall } from "../with-install-Ch3FF0uS.js";
const _hoisted_1 = { class: "nut-collapse-item__title-main" };
const _hoisted_2 = { class: "nut-collapse-item__title-main-value" };
const _hoisted_3 = ["innerHTML"];
const _hoisted_4 = {
  key: 2,
  class: "nut-collapse-item__title-label"
};
const _hoisted_5 = {
  key: 0,
  class: "nut-collapse-item__title-sub"
};
const _hoisted_6 = ["innerHTML"];
const _hoisted_7 = {
  key: 0,
  class: "nut-collapse__item-extraWrapper"
};
const _hoisted_8 = { class: "nut-collapse__item-extraWrapper__extraRender" };
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, {
  name: "NutCollapseItem"
}), {
  __name: "collapse-item",
  props: {
    title: { default: "" },
    value: { default: "" },
    label: { default: "" },
    disabled: { type: Boolean, default: false },
    name: { default: -1 },
    border: { type: Boolean, default: true },
    icon: { default: () => DownArrow },
    rotate: { default: 180 }
  },
  setup(__props) {
    const props = __props;
    const wrapperRef = ref(null);
    const contentRef = ref(null);
    const parent = inject(COLLAPSE_KEY);
    const classes = computed(() => {
      const prefixCls = "nut-collapse-item";
      return {
        [prefixCls]: true,
        [prefixCls + "__border"]: props.border
      };
    });
    const expanded = computed(() => {
      if (parent) {
        return parent.isExpanded(props.name);
      }
      return false;
    });
    const wrapperHeight = ref(expanded.value ? "auto" : "0px");
    const toggle = () => {
      parent && parent.updateVal(props.name);
    };
    const onTransitionEnd = () => {
      if (expanded.value) {
        wrapperHeight.value = "auto";
      }
    };
    const open = () => {
      wrapperHeight.value = "0px";
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          var _a;
          const height = (_a = contentRef.value) == null ? void 0 : _a.offsetHeight;
          wrapperHeight.value = height ? `${height}px` : "auto";
        });
      });
    };
    const close = () => {
      var _a;
      const height = (_a = contentRef.value) == null ? void 0 : _a.offsetHeight;
      wrapperHeight.value = height ? `${height}px` : "auto";
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          wrapperHeight.value = "0px";
        });
      });
    };
    watch(expanded, (value) => {
      value ? open() : close();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("view", {
        class: normalizeClass(classes.value)
      }, [
        createElementVNode("view", {
          class: normalizeClass(["nut-collapse-item__title", { "nut-collapse-item__title--disabled": _ctx.disabled }]),
          onClick: toggle
        }, [
          createElementVNode("view", _hoisted_1, [
            createElementVNode("view", _hoisted_2, [
              _ctx.$slots.title ? renderSlot(_ctx.$slots, "title", { key: 0 }) : (openBlock(), createElementBlock("view", {
                key: 1,
                class: "nut-collapse-item__title-mtitle",
                innerHTML: _ctx.title
              }, null, 8, _hoisted_3)),
              _ctx.label ? (openBlock(), createElementBlock("view", _hoisted_4, toDisplayString(_ctx.label), 1)) : createCommentVNode("", true)
            ])
          ]),
          _ctx.$slots.value ? (openBlock(), createElementBlock("view", _hoisted_5, [
            renderSlot(_ctx.$slots, "value")
          ])) : (openBlock(), createElementBlock("view", {
            key: 1,
            class: "nut-collapse-item__title-sub",
            innerHTML: _ctx.value
          }, null, 8, _hoisted_6)),
          createElementVNode("view", {
            class: normalizeClass(["nut-collapse-item__title-icon", { "nut-collapse-item__title-icon--expanded": expanded.value }]),
            style: normalizeStyle({ transform: "rotate(" + (expanded.value ? _ctx.rotate : 0) + "deg)" })
          }, [
            _ctx.$slots.icon ? renderSlot(_ctx.$slots, "icon", { key: 0 }) : (openBlock(), createBlock(resolveDynamicComponent(unref(renderIcon)(_ctx.icon)), { key: 1 }))
          ], 6)
        ], 2),
        _ctx.$slots.extra ? (openBlock(), createElementBlock("view", _hoisted_7, [
          createElementVNode("div", _hoisted_8, [
            renderSlot(_ctx.$slots, "extra")
          ])
        ])) : createCommentVNode("", true),
        createElementVNode("view", {
          ref_key: "wrapperRef",
          ref: wrapperRef,
          class: "nut-collapse__item-wrapper",
          style: normalizeStyle({
            willChange: "height",
            height: wrapperHeight.value
          }),
          onTransitionend: onTransitionEnd
        }, [
          createElementVNode("view", {
            ref_key: "contentRef",
            ref: contentRef,
            class: "nut-collapse__item-wrapper__content"
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 512)
        ], 36)
      ], 2);
    };
  }
}));
withInstall(_sfc_main);
export {
  _sfc_main as CollapseItem,
  _sfc_main as default
};
