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
import { reactive, ref, computed, onMounted, watch, toRefs, nextTick, resolveComponent, openBlock, createElementBlock, normalizeClass, withDirectives, createElementVNode, vShow, Fragment, renderList, normalizeStyle, createCommentVNode, createVNode, withCtx, renderSlot, toDisplayString } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { u as useRect } from "../index-B1qsj2XR.js";
import { Close } from "@nutui/icons-vue";
import NutPopover from "../popover/Popover.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
const { create } = createComponent("tour");
const _sfc_main = create({
  components: {
    NutPopover,
    Close
  },
  props: {
    modelValue: { type: Boolean, default: false },
    type: {
      type: String,
      default: "step"
    },
    steps: {
      type: Array,
      default: () => []
    },
    location: {
      type: String,
      default: "bottom"
    },
    current: {
      type: Number,
      default: 0
    },
    nextStepTxt: {
      type: String,
      default: "下一步"
    },
    prevStepTxt: {
      type: String,
      default: "上一步"
    },
    completeTxt: {
      type: String,
      default: "完成"
    },
    mask: {
      type: Boolean,
      default: true
    },
    offset: {
      type: Array,
      default: [8, 10]
    },
    bgColor: {
      type: String,
      default: ""
    },
    theme: {
      type: String,
      default: "light"
    },
    maskWidth: {
      type: [Number, String],
      default: ""
    },
    maskHeight: {
      type: [Number, String],
      default: ""
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    showPrevStep: {
      type: Boolean,
      default: true
    },
    showTitleBar: {
      type: Boolean,
      default: true
    }
  },
  emits: ["update:modelValue", "change", "close"],
  setup(props, { emit }) {
    const state = reactive({
      showTour: props.modelValue,
      showPopup: false,
      active: 0
    });
    const maskRect = ref({});
    const classes = computed(() => {
      const prefixCls = "nut-tour";
      return `${prefixCls}`;
    });
    const maskStyle = computed(() => {
      const { offset, maskWidth, maskHeight } = props;
      const { width, height, left, top } = maskRect.value;
      const center = [left + width / 2, top + height / 2];
      const w = Number(maskWidth ? maskWidth : width);
      const h = Number(maskHeight ? maskHeight : height);
      const styles = {
        width: `${w + +offset[1] * 2}px`,
        height: `${h + +offset[0] * 2}px`,
        top: `${center[1] - h / 2 - +offset[0]}px`,
        left: `${center[0] - w / 2 - +offset[1]}px`
      };
      return styles;
    });
    const changeStep = (type) => {
      if (type == "next") {
        state.active = state.active + 1;
      } else {
        state.active = state.active - 1;
      }
      state.showPopup = false;
      nextTick(() => {
        state.showPopup = true;
        getRootPosition();
      });
      emit("change", state.active);
    };
    const getRootPosition = () => {
      const el = document.querySelector(`#${props.steps[state.active].target}`);
      const rect = useRect(el);
      maskRect.value = rect;
    };
    const close = () => {
      state.showTour = false;
      state.showPopup = false;
      emit("close", state.active);
      emit("update:modelValue", false);
    };
    const handleClickMask = () => {
      props.closeOnClickOverlay && close();
    };
    onMounted(() => {
      state.active = 0;
      getRootPosition();
    });
    watch(
      () => props.modelValue,
      (val) => {
        if (val) {
          getRootPosition();
        }
        state.active = 0;
        state.showTour = val;
        state.showPopup = val;
      }
    );
    return __spreadProps(__spreadValues({}, toRefs(state)), {
      classes,
      maskStyle,
      changeStep,
      close,
      handleClickMask
    });
  }
});
const _hoisted_1 = {
  key: 0,
  class: "nut-tour-content"
};
const _hoisted_2 = {
  key: 0,
  class: "nut-tour-content-top"
};
const _hoisted_3 = { class: "nut-tour-content-inner" };
const _hoisted_4 = { class: "nut-tour-content-bottom" };
const _hoisted_5 = { class: "nut-tour-content-bottom-init" };
const _hoisted_6 = { class: "nut-tour-content-bottom-operate" };
const _hoisted_7 = {
  key: 1,
  class: "nut-tour-content nut-tour-content-tile"
};
const _hoisted_8 = { class: "nut-tour-content-inner" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Close = resolveComponent("Close");
  const _component_nut_popover = resolveComponent("nut-popover");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.classes)
  }, [
    withDirectives(createElementVNode("div", {
      class: "nut-tour-masked",
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClickMask && _ctx.handleClickMask(...args))
    }, null, 512), [
      [vShow, _ctx.showTour]
    ]),
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.steps, (step, i) => {
      return openBlock(), createElementBlock("div", {
        key: i,
        style: { "height": "0" }
      }, [
        i == _ctx.active ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          _ctx.showTour ? (openBlock(), createElementBlock("div", {
            key: 0,
            id: "nut-tour-popid",
            class: normalizeClass(["nut-tour-mask", [_ctx.mask ? "" : "nut-tour-mask-none"]]),
            style: normalizeStyle(_ctx.maskStyle)
          }, null, 6)) : createCommentVNode("", true),
          createVNode(_component_nut_popover, {
            visible: _ctx.showPopup,
            "onUpdate:visible": _cache[5] || (_cache[5] = ($event) => _ctx.showPopup = $event),
            location: step.location || _ctx.location,
            "target-id": "nut-tour-popid",
            "bg-color": _ctx.bgColor,
            theme: _ctx.theme,
            "close-on-click-outside": false,
            offset: step.popoverOffset || [0, 12],
            "arrow-offset": step.arrowOffset || 0
          }, {
            content: withCtx(() => [
              renderSlot(_ctx.$slots, "default", {}, () => [
                _ctx.type == "step" ? (openBlock(), createElementBlock("div", _hoisted_1, [
                  _ctx.showTitleBar ? (openBlock(), createElementBlock("div", _hoisted_2, [
                    createElementVNode("div", {
                      onClick: _cache[1] || (_cache[1] = (...args) => _ctx.close && _ctx.close(...args))
                    }, [
                      createVNode(_component_Close, { class: "nut-tour-content-top-close" })
                    ])
                  ])) : createCommentVNode("", true),
                  createElementVNode("div", _hoisted_3, toDisplayString(step.content), 1),
                  createElementVNode("div", _hoisted_4, [
                    createElementVNode("div", _hoisted_5, toDisplayString(_ctx.active + 1) + "/" + toDisplayString(_ctx.steps.length), 1),
                    createElementVNode("div", _hoisted_6, [
                      renderSlot(_ctx.$slots, "prev-step", {}, () => [
                        _ctx.active != 0 && _ctx.showPrevStep ? (openBlock(), createElementBlock("div", {
                          key: 0,
                          class: "nut-tour-content-bottom-operate-btn",
                          onClick: _cache[2] || (_cache[2] = ($event) => _ctx.changeStep("prev"))
                        }, toDisplayString(_ctx.prevStepTxt), 1)) : createCommentVNode("", true)
                      ]),
                      _ctx.steps.length - 1 == _ctx.active ? (openBlock(), createElementBlock("div", {
                        key: 0,
                        class: "nut-tour-content-bottom-operate-btn active",
                        onClick: _cache[3] || (_cache[3] = (...args) => _ctx.close && _ctx.close(...args))
                      }, toDisplayString(_ctx.completeTxt), 1)) : createCommentVNode("", true),
                      renderSlot(_ctx.$slots, "next-step", {}, () => [
                        _ctx.steps.length - 1 != _ctx.active ? (openBlock(), createElementBlock("div", {
                          key: 0,
                          class: "nut-tour-content-bottom-operate-btn active",
                          onClick: _cache[4] || (_cache[4] = ($event) => _ctx.changeStep("next"))
                        }, toDisplayString(_ctx.nextStepTxt), 1)) : createCommentVNode("", true)
                      ])
                    ])
                  ])
                ])) : createCommentVNode("", true),
                _ctx.type == "tile" ? (openBlock(), createElementBlock("div", _hoisted_7, [
                  createElementVNode("div", _hoisted_8, toDisplayString(step.content), 1)
                ])) : createCommentVNode("", true)
              ])
            ]),
            _: 2
          }, 1032, ["visible", "location", "bg-color", "theme", "offset", "arrow-offset"])
        ], 64)) : createCommentVNode("", true)
      ]);
    }), 128))
  ], 2);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index as default
};
