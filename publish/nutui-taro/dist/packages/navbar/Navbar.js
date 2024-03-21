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
import { defineComponent, ref, computed, onMounted, openBlock, createElementBlock, normalizeStyle, createElementVNode, unref, normalizeClass, renderSlot, createVNode, createCommentVNode, createTextVNode, toDisplayString } from "vue";
import { Left } from "@nutui/icons-vue-taro";
import { u as useTaroRect } from "../index-m0Wcof-q.js";
import { w as withInstall } from "../with-install-Ch3FF0uS.js";
const _hoisted_1 = ["id"];
const _hoisted_2 = {
  key: 1,
  class: "nut-navbar__text"
};
const _hoisted_3 = { class: "nut-navbar__title" };
const _hoisted_4 = {
  key: 0,
  class: "nut-navbar__text"
};
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, {
  name: "NutNavbar"
}), {
  __name: "navbar.taro",
  props: {
    leftShow: { type: Boolean, default: false },
    title: { default: "" },
    titleIcon: { type: Boolean, default: false },
    leftText: { default: "" },
    desc: { default: "" },
    fixed: { type: Boolean, default: false },
    safeAreaInsetTop: { type: Boolean, default: false },
    border: { type: Boolean, default: false },
    placeholder: { type: Boolean, default: true },
    zIndex: { default: 10 }
  },
  emits: [
    "clickBack",
    "clickTitle",
    "clickIcon",
    "clickRight",
    // will be deprecated
    "onClickBack",
    "onClickTitle",
    "onClickIcon",
    "onClickRight"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const refRandomId = Math.random().toString(36).slice(-8);
    const navHeight = ref("auto");
    const navbarRef = ref(null);
    const classes = computed(() => {
      const prefixCls = "nut-navbar";
      return {
        [prefixCls]: true,
        [`${prefixCls}--border`]: props.border,
        [`${prefixCls}--fixed`]: props.fixed,
        [`${prefixCls}--safe-area-inset-top`]: props.safeAreaInsetTop
      };
    });
    const rootStyle = computed(() => {
      if (props.fixed && props.placeholder) {
        return {
          height: navHeight.value
        };
      }
      return {};
    });
    const getNavHeight = () => {
      useTaroRect(navbarRef).then(
        (rect) => {
          navHeight.value = `${rect.height}px`;
        },
        () => {
        }
      );
    };
    onMounted(() => {
      if (props.fixed && props.placeholder) {
        setTimeout(() => {
          getNavHeight();
        }, 100);
      }
    });
    const handleLeft = () => {
      emit("clickBack");
      emit("onClickBack");
    };
    const handleCenter = () => {
      emit("clickTitle");
      emit("onClickTitle");
    };
    const handleCenterIcon = () => {
      emit("clickIcon");
      emit("onClickIcon");
    };
    const handleRight = () => {
      emit("clickRight");
      emit("onClickRight");
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("view", {
        class: "nut-navbar--placeholder",
        style: normalizeStyle(rootStyle.value)
      }, [
        createElementVNode("view", {
          id: "navbarRef-" + unref(refRandomId),
          ref_key: "navbarRef",
          ref: navbarRef,
          class: normalizeClass(classes.value),
          style: normalizeStyle({ zIndex: _ctx.zIndex })
        }, [
          createElementVNode("view", {
            class: "nut-navbar__left",
            onClick: handleLeft
          }, [
            _ctx.leftShow ? renderSlot(_ctx.$slots, "left-show", { key: 0 }, () => [
              createVNode(unref(Left), {
                height: "12px",
                color: "#979797"
              })
            ]) : createCommentVNode("", true),
            createTextVNode(),
            _ctx.leftText ? (openBlock(), createElementBlock("view", _hoisted_2, toDisplayString(_ctx.leftText), 1)) : createCommentVNode("", true),
            createTextVNode(),
            renderSlot(_ctx.$slots, "left")
          ]),
          createTextVNode(),
          createElementVNode("view", _hoisted_3, [
            _ctx.title ? (openBlock(), createElementBlock("view", {
              key: 0,
              class: "title",
              onClick: handleCenter
            }, toDisplayString(_ctx.title), 1)) : createCommentVNode("", true),
            createTextVNode(),
            _ctx.titleIcon ? (openBlock(), createElementBlock("view", {
              key: 1,
              class: "icon",
              onClick: handleCenterIcon
            }, [
              renderSlot(_ctx.$slots, "title-icon", { onClick: handleCenterIcon })
            ])) : createCommentVNode("", true),
            createTextVNode(),
            renderSlot(_ctx.$slots, "content")
          ]),
          createTextVNode(),
          createElementVNode("view", {
            class: "nut-navbar__right",
            onClick: handleRight
          }, [
            _ctx.desc ? (openBlock(), createElementBlock("view", _hoisted_4, toDisplayString(_ctx.desc), 1)) : createCommentVNode("", true),
            createTextVNode(),
            renderSlot(_ctx.$slots, "right")
          ])
        ], 14, _hoisted_1)
      ], 4);
    };
  }
}));
withInstall(_sfc_main);
export {
  _sfc_main as Navbar,
  _sfc_main as default
};
