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
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import { reactive, ref, computed, onMounted, watch, toRefs, resolveComponent, openBlock, createElementBlock, normalizeClass, createCommentVNode, createTextVNode, Fragment, renderList, normalizeStyle, createVNode, withCtx, renderSlot, createElementVNode, toDisplayString } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { a as useTaroRectById } from "../index-m0Wcof-q.js";
import { Close } from "@nutui/icons-vue-taro";
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
      active: 0
    });
    const showPopup = ref([false]);
    let maskRect = [];
    let maskStyles = ref([]);
    const classes = computed(() => {
      const prefixCls = "nut-tour";
      return `${prefixCls}`;
    });
    const maskStyle = (index) => {
      const { offset, maskWidth, maskHeight } = props;
      if (!maskRect[index]) return {};
      const { width, height, left, top } = maskRect[index];
      const center = [left + width / 2, top + height / 2];
      const w = Number(maskWidth ? maskWidth : width);
      const h = Number(maskHeight ? maskHeight : height);
      const styles = {
        width: `${w + +offset[1] * 2}px`,
        height: `${h + +offset[0] * 2}px`,
        top: `${center[1] - h / 2 - +offset[0]}px`,
        left: `${center[0] - w / 2 - +offset[1]}px`
      };
      maskStyles.value[index] = styles;
    };
    const changeStep = (type) => {
      const current = state.active;
      let next = current;
      if (type == "next") {
        next = current + 1;
      } else {
        next = current - 1;
      }
      showPopup.value[current] = false;
      setTimeout(() => {
        showPopup.value[next] = true;
        state.active = next;
      }, 300);
      emit("change", state.active);
    };
    const getRootPosition = () => {
      props.steps.forEach((item, i) => __async(this, null, function* () {
        useTaroRectById(item.target).then(
          (rect) => {
            maskRect[i] = rect;
            maskStyle(i);
          },
          () => {
          }
        );
      }));
    };
    const close = () => {
      state.showTour = false;
      showPopup.value[state.active] = false;
      emit("close", state.active);
      emit("update:modelValue", false);
    };
    const handleClickMask = () => {
      props.closeOnClickOverlay && close();
    };
    onMounted(() => {
      setTimeout(() => {
        getRootPosition();
      }, 500);
    });
    watch(
      () => props.modelValue,
      (val) => {
        if (val) {
          state.active = 0;
          getRootPosition();
        }
        state.showTour = val;
        showPopup.value[state.active] = val;
      }
    );
    const refRandomId = Math.random().toString(36).slice(-8);
    return __spreadProps(__spreadValues({}, toRefs(state)), {
      classes,
      maskStyle,
      changeStep,
      showPopup,
      close,
      handleClickMask,
      maskStyles,
      refRandomId
    });
  }
});
const _hoisted_1 = ["id"];
const _hoisted_2 = {
  key: 0,
  class: "nut-tour-content"
};
const _hoisted_3 = {
  key: 0,
  class: "nut-tour-content-top"
};
const _hoisted_4 = { class: "nut-tour-content-inner" };
const _hoisted_5 = { class: "nut-tour-content-bottom" };
const _hoisted_6 = { class: "nut-tour-content-bottom-init" };
const _hoisted_7 = { class: "nut-tour-content-bottom-operate" };
const _hoisted_8 = {
  key: 1,
  class: "nut-tour-content nut-tour-content-tile"
};
const _hoisted_9 = { class: "nut-tour-content-inner" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Close = resolveComponent("Close");
  const _component_nut_popover = resolveComponent("nut-popover");
  return openBlock(), createElementBlock("view", {
    class: normalizeClass(_ctx.classes)
  }, [
    _ctx.showTour ? (openBlock(), createElementBlock("view", {
      key: 0,
      class: "nut-tour-masked",
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClickMask && _ctx.handleClickMask(...args))
    })) : createCommentVNode("", true),
    createTextVNode(),
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.steps, (step, i) => {
      return openBlock(), createElementBlock("view", {
        key: i,
        style: { "height": "0" }
      }, [
        _ctx.showTour ? (openBlock(), createElementBlock("view", {
          key: 0,
          id: `nut-tour-popid${i}${_ctx.refRandomId}`,
          class: normalizeClass(["nut-tour-mask", [_ctx.mask ? _ctx.showPopup[i] ? "" : "nut-tour-mask-hidden" : "nut-tour-mask-none"]]),
          style: normalizeStyle(_ctx.maskStyles[i])
        }, null, 14, _hoisted_1)) : createCommentVNode("", true),
        createTextVNode(),
        createVNode(_component_nut_popover, {
          visible: _ctx.showPopup[i],
          "onUpdate:visible": ($event) => _ctx.showPopup[i] = $event,
          location: step.location || _ctx.location,
          "target-id": `nut-tour-popid${i}${_ctx.refRandomId}`,
          "bg-color": _ctx.bgColor,
          theme: _ctx.theme,
          "close-on-click-outside": false,
          offset: step.popoverOffset || [0, 12],
          "arrow-offset": step.arrowOffset || 0,
          duration: 0.2
        }, {
          content: withCtx(() => [
            renderSlot(_ctx.$slots, "default", {}, () => [
              _ctx.type == "step" ? (openBlock(), createElementBlock("view", _hoisted_2, [
                _ctx.showTitleBar ? (openBlock(), createElementBlock("view", _hoisted_3, [
                  createElementVNode("view", {
                    onClick: _cache[1] || (_cache[1] = (...args) => _ctx.close && _ctx.close(...args))
                  }, [
                    createVNode(_component_Close, {
                      class: "nut-tour-content-top-close",
                      size: "10px"
                    })
                  ])
                ])) : createCommentVNode("", true),
                createTextVNode(),
                createElementVNode("view", _hoisted_4, toDisplayString(step.content), 1),
                createTextVNode(),
                createElementVNode("view", _hoisted_5, [
                  createElementVNode("view", _hoisted_6, toDisplayString(_ctx.active + 1) + "/" + toDisplayString(_ctx.steps.length), 1),
                  createTextVNode(),
                  createElementVNode("view", _hoisted_7, [
                    renderSlot(_ctx.$slots, "prev-step", {}, () => [
                      _ctx.active != 0 && _ctx.showPrevStep ? (openBlock(), createElementBlock("view", {
                        key: 0,
                        class: "nut-tour-content-bottom-operate-btn",
                        onClick: _cache[2] || (_cache[2] = ($event) => _ctx.changeStep("prev"))
                      }, toDisplayString(_ctx.prevStepTxt), 1)) : createCommentVNode("", true)
                    ]),
                    createTextVNode(),
                    _ctx.steps.length - 1 == _ctx.active ? (openBlock(), createElementBlock("view", {
                      key: 0,
                      class: "nut-tour-content-bottom-operate-btn active",
                      onClick: _cache[3] || (_cache[3] = (...args) => _ctx.close && _ctx.close(...args))
                    }, toDisplayString(_ctx.completeTxt), 1)) : createCommentVNode("", true),
                    createTextVNode(),
                    renderSlot(_ctx.$slots, "next-step", {}, () => [
                      _ctx.steps.length - 1 != _ctx.active ? (openBlock(), createElementBlock("view", {
                        key: 0,
                        class: "nut-tour-content-bottom-operate-btn active",
                        onClick: _cache[4] || (_cache[4] = ($event) => _ctx.changeStep("next"))
                      }, toDisplayString(_ctx.nextStepTxt), 1)) : createCommentVNode("", true)
                    ])
                  ])
                ])
              ])) : createCommentVNode("", true),
              createTextVNode(),
              _ctx.type == "tile" ? (openBlock(), createElementBlock("view", _hoisted_8, [
                createElementVNode("view", _hoisted_9, toDisplayString(step.content), 1)
              ])) : createCommentVNode("", true)
            ])
          ]),
          _: 2
        }, 1032, ["visible", "onUpdate:visible", "location", "target-id", "bg-color", "theme", "offset", "arrow-offset"])
      ]);
    }), 128))
  ], 2);
}
const index_taro = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index_taro as default
};
