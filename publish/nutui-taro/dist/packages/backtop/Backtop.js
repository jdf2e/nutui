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
import { reactive, computed, toRefs, resolveComponent, openBlock, createElementBlock, createVNode, normalizeStyle, withCtx, renderSlot, createTextVNode, createElementVNode, normalizeClass, withModifiers } from "vue";
import { _ as _sfc_main$1 } from "../index.taro.vue_vue_type_script_setup_true_lang-SKyMF-aS.js";
import { c as createComponent } from "../component-TCzwHGVq.js";
import { Top } from "@nutui/icons-vue-taro";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-yVxbj29m.js";
import "@tarojs/taro";
const { componentName, create } = createComponent("backtop");
const _sfc_main = create({
  components: {
    Top,
    NutScrollView: _sfc_main$1
  },
  props: {
    height: {
      type: String,
      default: "100vh"
    },
    bottom: {
      type: Number,
      default: 20
    },
    right: {
      type: Number,
      default: 10
    },
    zIndex: {
      type: Number,
      default: 10
    },
    distance: {
      type: Number,
      default: 200
    }
  },
  emits: ["click"],
  setup(props, { emit }) {
    const state = reactive({
      backTop: false,
      scrollTop: 1
    });
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        show: state.backTop
      };
    });
    const style = computed(() => {
      return {
        right: `${props.right}px`,
        bottom: `${props.bottom}px`,
        zIndex: props.zIndex
      };
    });
    const scroll = (e) => {
      state.scrollTop = 2;
      state.backTop = e.detail.scrollTop >= props.distance;
    };
    const click = (e) => {
      state.scrollTop = 1;
      emit("click", e);
    };
    return __spreadProps(__spreadValues({}, toRefs(state)), {
      classes,
      style,
      scroll,
      click
    });
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_nut_scroll_view = resolveComponent("nut-scroll-view");
  const _component_Top = resolveComponent("Top");
  return openBlock(), createElementBlock("view", null, [
    createVNode(_component_nut_scroll_view, {
      "scroll-y": true,
      style: normalizeStyle({ height: _ctx.height }),
      "scroll-top": _ctx.scrollTop,
      "scroll-with-animation": "true",
      onScroll: _ctx.scroll
    }, {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "content")
      ]),
      _: 3
    }, 8, ["style", "scroll-top", "onScroll"]),
    createTextVNode(),
    createElementVNode("view", {
      class: normalizeClass(_ctx.classes),
      style: normalizeStyle(_ctx.style),
      onClick: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.click && _ctx.click(...args), ["stop"]))
    }, [
      renderSlot(_ctx.$slots, "icon", {}, () => [
        createVNode(_component_Top, {
          width: "19px",
          height: "19px",
          class: "nut-backtop-main"
        })
      ])
    ], 6)
  ]);
}
const index_taro = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index_taro as default
};
