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
import { reactive, onMounted, watch, computed, openBlock, createBlock, Transition, withCtx, withDirectives, createElementVNode, normalizeClass, normalizeStyle, createElementBlock, resolveDynamicComponent, createCommentVNode, toDisplayString, vShow, createVNode, render } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { r as renderIcon } from "../renderIcon-CfE94nuJ.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
import { C as CreateComponent } from "../mountComponent-CLi4Nz91.js";
import { Success, Failure, Tips, Loading } from "@nutui/icons-vue";
const { create } = createComponent("toast");
const _sfc_main = create({
  components: {},
  props: {
    id: String,
    msg: String,
    duration: {
      type: Number,
      default: 2e3
    },
    center: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: "text"
    },
    customClass: String,
    bottom: {
      type: String,
      default: "30px"
    },
    size: {
      type: [String, Number],
      default: "base"
    },
    icon: {
      type: Object,
      default: null
    },
    textAlignCenter: {
      type: Boolean,
      default: true
    },
    loadingRotate: {
      type: Boolean,
      default: true
    },
    bgColor: {
      type: String,
      default: ""
    },
    onClose: Function,
    unmount: Function,
    cover: {
      type: Boolean,
      default: false
    },
    coverColor: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: false
    }
  },
  emits: ["close"],
  setup(props, { emit }) {
    let timer;
    const state = reactive({
      mounted: false
    });
    onMounted(() => {
      state.mounted = true;
    });
    const clearTimer = () => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    };
    const hide = () => {
      state.mounted = false;
    };
    const show = () => {
      clearTimer();
      if (props.duration) {
        timer = window.setTimeout(() => {
          hide();
        }, props.duration);
      }
    };
    const clickCover = () => {
      if (props.closeOnClickOverlay) {
        hide();
        emit("close");
      }
    };
    if (props.duration) {
      show();
    }
    watch(
      () => props.duration,
      (val) => {
        if (val) {
          show();
        }
      }
    );
    const hasIcon = computed(() => {
      if (props.type !== "text") {
        return true;
      } else {
        return props.icon !== null;
      }
    });
    const toastBodyClass = computed(() => {
      return [
        "nut-toast",
        { "nut-toast-center": props.center },
        { "nut-toast-has-icon": hasIcon.value },
        { "nut-toast-cover": props.cover },
        { "nut-toast-loading": props.type === "loading" },
        props.customClass,
        "nut-toast-" + props.size
      ];
    });
    const toastIconWrapperClass = computed(() => {
      return ["nut-toast-icon-wrapper", { "nut-toast-icon-no-animation": !props.loadingRotate }];
    });
    const onAfterLeave = () => {
      var _a;
      clearTimer();
      (_a = props.unmount) == null ? void 0 : _a.call(props, props.id);
      props.onClose && props.onClose();
    };
    return {
      state,
      hide,
      clickCover,
      hasIcon,
      toastBodyClass,
      toastIconWrapperClass,
      onAfterLeave,
      renderIcon
    };
  }
});
const _hoisted_1 = {
  key: 1,
  class: "nut-toast-title"
};
const _hoisted_2 = ["innerHTML"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, {
    name: "toast-fade",
    onAfterLeave: _ctx.onAfterLeave
  }, {
    default: withCtx(() => [
      withDirectives(createElementVNode("view", {
        class: normalizeClass(_ctx.toastBodyClass),
        style: normalizeStyle({
          bottom: _ctx.center ? "auto" : _ctx.bottom,
          "background-color": _ctx.coverColor
        }),
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.clickCover && _ctx.clickCover(...args))
      }, [
        createElementVNode("view", {
          class: "nut-toast-inner",
          style: normalizeStyle({
            "text-align": _ctx.textAlignCenter ? "center" : "left",
            "background-color": _ctx.bgColor
          })
        }, [
          _ctx.hasIcon ? (openBlock(), createElementBlock("view", {
            key: 0,
            class: normalizeClass(_ctx.toastIconWrapperClass)
          }, [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.renderIcon(_ctx.icon)), { color: "#ffffff" }))
          ], 2)) : createCommentVNode("", true),
          _ctx.title ? (openBlock(), createElementBlock("div", _hoisted_1, toDisplayString(_ctx.title), 1)) : createCommentVNode("", true),
          createElementVNode("view", {
            class: "nut-toast-text",
            innerHTML: _ctx.msg
          }, null, 8, _hoisted_2)
        ], 4)
      ], 6), [
        [vShow, _ctx.state.mounted]
      ])
    ]),
    _: 1
  }, 8, ["onAfterLeave"]);
}
const Toast = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const defaultOptions = {
  msg: "",
  id: "",
  duration: 2e3,
  // 显示时间(毫秒)
  center: true,
  // 未实现
  type: "text",
  title: "",
  customClass: "",
  bottom: "30px",
  size: "base",
  iconSize: "20",
  icon: null,
  textAlignCenter: true,
  // 未实现
  loadingRotate: true,
  // 未实现
  bgColor: "",
  onClose: null,
  // 未实现
  unmount: null,
  cover: false,
  // 透明遮罩层 // 未实现
  coverColor: "",
  // 未实现
  closeOnClickOverlay: false
  // 未实现
};
let idsMap = [];
let optsMap = [];
const clearToast = (id) => {
  if (id) {
    const container = document.getElementById(id);
    optsMap = optsMap.filter((item) => item.id !== id);
    idsMap = idsMap.filter((item) => item !== id);
    if (container) {
      document.body.removeChild(container);
    }
  } else {
    idsMap.forEach((item) => {
      const container = document.getElementById(item);
      if (container) {
        document.body.removeChild(container);
      }
    });
    optsMap = [];
    idsMap = [];
  }
};
const updateToast = (opts) => {
  const container = document.getElementById(opts.id);
  if (container) {
    const currentOpt = optsMap.find((item) => item.id === opts.id);
    if (currentOpt) {
      opts = __spreadValues(__spreadValues(__spreadValues({}, defaultOptions), currentOpt), opts);
    } else {
      opts = __spreadValues(__spreadValues({}, defaultOptions), opts);
    }
    const instance = createVNode(Toast, opts);
    render(instance, container);
    return showToast;
  }
};
const mountToast = (opts) => {
  opts.unmount = clearToast;
  let _id;
  if (opts.id) {
    _id = opts.id;
    if (idsMap.find((item) => item === opts.id)) {
      return updateToast(opts);
    }
  } else {
    _id = (/* @__PURE__ */ new Date()).getTime() + "";
  }
  opts = __spreadValues(__spreadValues({}, defaultOptions), opts);
  opts.id = _id;
  idsMap.push(opts.id);
  optsMap.push(opts);
  CreateComponent(opts, {
    wrapper: Toast
  });
  return showToast;
};
const errorMsg = (msg) => {
  if (!msg) {
    console.warn("[NutUI Toast]: msg不能为空");
    return;
  }
};
const showToast = {
  text(msg, opts = {}) {
    errorMsg(msg);
    return mountToast(__spreadProps(__spreadValues({}, opts), { type: "text", msg }));
  },
  success(msg, opts = {}) {
    errorMsg(msg);
    return mountToast(__spreadProps(__spreadValues({ icon: Success }, opts), { msg, type: "success" }));
  },
  fail(msg, opts = {}) {
    errorMsg(msg);
    return mountToast(__spreadProps(__spreadValues({ icon: Failure }, opts), { msg, type: "fail" }));
  },
  warn(msg, opts = {}) {
    errorMsg(msg);
    return mountToast(__spreadProps(__spreadValues({ icon: Tips }, opts), { msg, type: "warn" }));
  },
  loading(msg, opts = {}) {
    return mountToast(__spreadProps(__spreadValues({
      icon: Loading
    }, opts), {
      msg,
      type: "loading"
    }));
  },
  hide(id) {
    clearToast(id);
  },
  install(app) {
    app.use(Toast);
  }
};
export {
  Toast as default,
  showToast
};
