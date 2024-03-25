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
import { getCurrentInstance, reactive, computed, openBlock, createElementBlock, withDirectives, createElementVNode, normalizeStyle, renderSlot, vShow, createTextVNode, normalizeClass, toDisplayString, defineComponent, createVNode, normalizeProps, guardReactiveProps, withCtx, createCommentVNode, createBlock, resolveDynamicComponent, unref } from "vue";
import { r as renderIcon } from "../renderIcon-BfOvhG7i.js";
import { u as useParent } from "../useParent-D6DiuxZZ.js";
import { T as TABBAR_KEY } from "../types-MuhxzCWc.js";
import { c as createComponent } from "../component-DQf3CENX.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
import { w as withInstall } from "../with-install-Ch3FF0uS.js";
function useRouter() {
  const proxy = getCurrentInstance().proxy;
  return proxy.$router || null;
}
const { create } = createComponent("badge");
const _sfc_main$1 = create({
  props: {
    value: {
      type: [String, Number]
    },
    max: {
      type: Number,
      default: 1e4
    },
    dot: {
      type: Boolean,
      default: false
    },
    bubble: {
      type: Boolean,
      default: false
    },
    hidden: {
      type: Boolean,
      default: false
    },
    top: {
      type: String,
      default: "0"
    },
    right: {
      type: String,
      default: "0"
    },
    zIndex: {
      type: Number,
      default: 9
    },
    color: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    const state = reactive({});
    const stl = computed(() => {
      return {
        top: `${props.top}px`,
        right: `${props.right}px`,
        zIndex: props.zIndex,
        background: props.color
      };
    });
    const content = computed(() => {
      if (props.dot)
        return;
      const value = props.value;
      const max = props.max;
      if (typeof value === "number" && typeof max === "number") {
        return max < value ? `${max}+` : value;
      }
      return value;
    });
    return {
      state,
      stl,
      content
    };
  }
});
const _hoisted_1$1 = { class: "nut-badge" };
const _hoisted_2$1 = ["textContent"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", _hoisted_1$1, [
    withDirectives(createElementVNode("view", {
      class: "nut-badge__icon",
      style: normalizeStyle(_ctx.stl)
    }, [
      renderSlot(_ctx.$slots, "icon")
    ], 4), [
      [vShow, !_ctx.hidden && !_ctx.dot && _ctx.$slots.icon]
    ]),
    createTextVNode(),
    renderSlot(_ctx.$slots, "default"),
    createTextVNode(),
    withDirectives(createElementVNode("view", {
      class: normalizeClass(["nut-badge__content nut-badge__content--sup", { "nut-badge__content--dot": _ctx.dot, "nut-badge__content--bubble": !_ctx.dot && _ctx.bubble }]),
      style: normalizeStyle(_ctx.stl),
      textContent: toDisplayString(_ctx.content)
    }, null, 14, _hoisted_2$1), [
      [vShow, !_ctx.hidden && (_ctx.content || _ctx.dot)]
    ])
  ]);
}
const NutBadge = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
const _hoisted_1 = { class: "nut-tabbar-item_icon-box" };
const _hoisted_2 = {
  key: 0,
  class: "nut-tabbar-item_icon-box_icon"
};
const _hoisted_3 = { key: 1 };
const _hoisted_4 = { key: 0 };
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, {
  name: "NutTabbarItem"
}), {
  __name: "tabbar-item.taro",
  props: {
    tabTitle: { default: "" },
    name: {},
    icon: {},
    href: { default: "" },
    to: {}
  },
  setup(__props) {
    const props = __props;
    const router = useRouter();
    const { parent, index } = useParent(TABBAR_KEY);
    const active = computed(() => {
      var _a;
      return ((_a = props.name) != null ? _a : index.value) === parent.activeIndex.value;
    });
    const activeColor = computed(() => active.value ? parent.props.activeColor : parent.props.unactiveColor);
    const change = () => {
      var _a, _b, _c;
      const key = (_a = props.name) != null ? _a : index.value;
      parent.changeIndex(index.value, key);
      if ((_b = parent.children[index.value]) == null ? void 0 : _b.href) {
        window.location.href = parent.children[index.value].href;
        return;
      }
      if ((_c = parent.children[index.value]) == null ? void 0 : _c.to) {
        const to = parent.children[index.value].to;
        if (to && router) {
          router.push(to);
        } else {
          location.replace(to);
        }
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["nut-tabbar-item", { "nut-tabbar-item__icon--unactive": !active.value }]),
        style: normalizeStyle({
          color: activeColor.value
        }),
        onClick: change
      }, [
        createVNode(NutBadge, normalizeProps(guardReactiveProps(_ctx.$attrs)), {
          default: withCtx(() => [
            createElementVNode("view", _hoisted_1, [
              _ctx.$slots.icon ? (openBlock(), createElementBlock("div", _hoisted_2, [
                renderSlot(_ctx.$slots, "icon", { active: active.value })
              ])) : createCommentVNode("", true),
              createTextVNode(),
              _ctx.icon && !_ctx.$slots.icon ? (openBlock(), createElementBlock("view", _hoisted_3, [
                (openBlock(), createBlock(resolveDynamicComponent(unref(renderIcon)(_ctx.icon)), { class: "nut-popover-item-img" }))
              ])) : createCommentVNode("", true),
              createTextVNode(),
              createElementVNode("view", {
                class: normalizeClass(["nut-tabbar-item_icon-box_nav-word", { "nut-tabbar-item_icon-box_big-word": !_ctx.icon && !_ctx.$slots.icon }])
              }, [
                renderSlot(_ctx.$slots, "default", {}, () => [
                  _ctx.tabTitle ? (openBlock(), createElementBlock("view", _hoisted_4, toDisplayString(_ctx.tabTitle), 1)) : createCommentVNode("", true)
                ])
              ], 2)
            ])
          ]),
          _: 3
        }, 16)
      ], 6);
    };
  }
}));
withInstall(_sfc_main);
export {
  _sfc_main as TabbarItem,
  _sfc_main as default
};
