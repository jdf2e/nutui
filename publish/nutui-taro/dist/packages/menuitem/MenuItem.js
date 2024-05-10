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
import { reactive, computed, resolveComponent, withDirectives, openBlock, createElementBlock, normalizeStyle, createElementVNode, vShow, createTextVNode, createVNode, mergeProps, withCtx, Fragment, renderList, normalizeClass, renderSlot, createCommentVNode, toDisplayString } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { N as NutPopup } from "../index.taro-V9Ta96_T.js";
import { Check } from "@nutui/icons-vue-taro";
import { _ as _sfc_main$1 } from "../index.taro.vue_vue_type_script_setup_true_lang-JJ7hr71Y.js";
import { u as useParent } from "../useParent-D6DiuxZZ.js";
import { M as MENU_KEY } from "../types-CkPfROfI.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
const { create } = createComponent("menu-item");
const _sfc_main = create({
  props: {
    title: String,
    options: {
      type: Array,
      default: []
    },
    disabled: {
      type: Boolean,
      default: false
    },
    modelValue: null,
    cols: {
      type: Number,
      default: 1
    },
    activeTitleClass: String,
    inactiveTitleClass: String
  },
  components: {
    Check,
    NutPopup,
    NutScrollView: _sfc_main$1
  },
  emits: ["update:modelValue", "change"],
  setup(props, { emit }) {
    const state = reactive({
      showPopup: false,
      showWrapper: false
    });
    const { parent } = useParent(MENU_KEY);
    const style = computed(() => {
      return parent.props.direction === "down" ? { top: parent.offset.value + "px" } : { bottom: parent.offset.value + "px" };
    });
    const placeholderElementStyle = computed(() => {
      const heightStyle = { height: parent.offset.value + "px" };
      if (parent.props.direction === "down") {
        return __spreadProps(__spreadValues({}, heightStyle), { top: "0px" });
      } else {
        return __spreadProps(__spreadValues({}, heightStyle), { bottom: "0px" });
      }
    });
    const toggle = (show = !state.showPopup) => {
      if (show === state.showPopup) {
        return;
      }
      state.showPopup = show;
      if (show) {
        state.showWrapper = true;
      }
    };
    const renderTitle = () => {
      var _a;
      if (props.title) {
        return props.title;
      }
      const match = (_a = props.options) == null ? void 0 : _a.find((option) => option.value === props.modelValue);
      return match ? match.text : "";
    };
    const onClick = (option) => {
      state.showPopup = false;
      if (option.value !== props.modelValue) {
        emit("update:modelValue", option.value);
        emit("change", option.value);
      }
    };
    const handleClose = () => {
      state.showWrapper = false;
    };
    const handleClickOutside = () => {
      state.showPopup = false;
    };
    return {
      style,
      placeholderElementStyle,
      renderTitle,
      state,
      parent,
      toggle,
      onClick,
      handleClose,
      handleClickOutside
    };
  }
});
const _hoisted_1 = ["catch-move"];
const _hoisted_2 = { class: "nut-menu-item__content" };
const _hoisted_3 = ["onClick"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Check = resolveComponent("Check");
  const _component_nut_scroll_view = resolveComponent("nut-scroll-view");
  const _component_nut_popup = resolveComponent("nut-popup");
  return withDirectives((openBlock(), createElementBlock("view", {
    class: "nut-menu-item",
    style: normalizeStyle(_ctx.style)
  }, [
    withDirectives(createElementVNode("view", {
      class: "nut-menu-item-placeholder-element",
      style: normalizeStyle(_ctx.placeholderElementStyle),
      "catch-move": _ctx.parent.props.lockScroll,
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClickOutside && _ctx.handleClickOutside(...args))
    }, null, 12, _hoisted_1), [
      [vShow, _ctx.state.showPopup]
    ]),
    createTextVNode(),
    createVNode(_component_nut_popup, mergeProps(_ctx.$attrs, {
      visible: _ctx.state.showPopup,
      "onUpdate:visible": _cache[1] || (_cache[1] = ($event) => _ctx.state.showPopup = $event),
      style: { position: "absolute" },
      "overlay-style": { position: "absolute" },
      position: _ctx.parent.props.direction === "down" ? "top" : "bottom",
      duration: _ctx.parent.props.duration,
      "destroy-on-close": false,
      overlay: _ctx.parent.props.overlay,
      "lock-scroll": _ctx.parent.props.lockScroll,
      "close-on-click-overlay": _ctx.parent.props.closeOnClickOverlay,
      "catch-move": _ctx.parent.props.lockScroll,
      onClosed: _ctx.handleClose
    }), {
      default: withCtx(() => [
        createVNode(_component_nut_scroll_view, { "scroll-y": true }, {
          default: withCtx(() => [
            createElementVNode("view", _hoisted_2, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.options, (option, index) => {
                return openBlock(), createElementBlock("view", {
                  key: index,
                  class: normalizeClass(["nut-menu-item__option", [{ active: option.value === _ctx.modelValue }]]),
                  style: normalizeStyle({ "flex-basis": 100 / _ctx.cols + "%" }),
                  onClick: ($event) => _ctx.onClick(option)
                }, [
                  option.value === _ctx.modelValue ? (openBlock(), createElementBlock("span", {
                    key: 0,
                    class: normalizeClass(["nut-menu-item__span", [option.value === _ctx.modelValue ? _ctx.activeTitleClass : _ctx.inactiveTitleClass]])
                  }, [
                    renderSlot(_ctx.$slots, "icon", {}, () => [
                      createVNode(_component_Check, mergeProps({ ref_for: true }, _ctx.$attrs, {
                        color: _ctx.parent.props.activeColor
                      }), null, 16, ["color"])
                    ])
                  ], 2)) : createCommentVNode("", true),
                  createTextVNode(),
                  createElementVNode("view", {
                    class: normalizeClass([option.value === _ctx.modelValue ? _ctx.activeTitleClass : _ctx.inactiveTitleClass]),
                    style: normalizeStyle({ color: option.value === _ctx.modelValue ? _ctx.parent.props.activeColor : "" })
                  }, toDisplayString(option.text), 7)
                ], 14, _hoisted_3);
              }), 128)),
              createTextVNode(),
              renderSlot(_ctx.$slots, "default")
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["visible", "position", "duration", "overlay", "lock-scroll", "close-on-click-overlay", "catch-move", "onClosed"])
  ], 4)), [
    [vShow, _ctx.state.showWrapper]
  ]);
}
const index_taro = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index_taro as default
};
