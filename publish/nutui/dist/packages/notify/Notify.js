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
import { ref, watch, resolveComponent, openBlock, createBlock, withCtx, createElementVNode, normalizeClass, normalizeStyle, renderSlot, createElementBlock, Fragment, createTextVNode, toDisplayString, createVNode, render, onMounted, h } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { N as NutPopup } from "../index-wLaOjIn1.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
const { create } = createComponent("notify");
const _sfc_main = create({
  components: {
    NutPopup
  },
  props: {
    id: String,
    color: {
      type: String,
      default: ""
    },
    msg: {
      type: String,
      default: ""
    },
    duration: {
      type: Number,
      default: 3e3
    },
    className: {
      type: String,
      default: ""
    },
    background: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "danger"
    },
    visible: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: "top"
    },
    teleportDisable: {
      type: Boolean,
      default: true
    },
    onClose: Function,
    onClick: Function,
    unmount: Function
  },
  emits: ["update:visible"],
  setup(props, { emit }) {
    const clickCover = () => {
      props.onClick && props.onClick();
    };
    let timer = null;
    const clearTimer = () => {
      timer && clearTimeout(timer);
      timer = null;
    };
    const hide = () => {
      emit("update:visible", false);
    };
    const isShowPopup = ref(false);
    const unWatch = watch(
      () => props.visible,
      (newVal) => {
        isShowPopup.value = props.visible;
        const DURATION = props.duration;
        if (newVal && DURATION) {
          timer = setTimeout(() => {
            hide();
          }, DURATION);
        }
      },
      { immediate: true }
    );
    const onAfterLeave = () => {
      clearTimer();
      unWatch && unWatch();
      props.unmount && props.unmount(props.id);
      props.onClose && props.onClose();
    };
    return { onAfterLeave, clickCover, isShowPopup };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_nut_popup = resolveComponent("nut-popup");
  return openBlock(), createBlock(_component_nut_popup, {
    visible: _ctx.isShowPopup,
    "onUpdate:visible": _cache[1] || (_cache[1] = ($event) => _ctx.isShowPopup = $event),
    position: _ctx.position,
    overlay: false,
    "teleport-disable": _ctx.teleportDisable
  }, {
    default: withCtx(() => [
      createElementVNode("div", {
        class: normalizeClass(["nut-notify", `nut-notify--${_ctx.type}`, _ctx.className]),
        style: normalizeStyle({ color: _ctx.color, background: _ctx.background }),
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.clickCover && _ctx.clickCover(...args))
      }, [
        _ctx.$slots.default ? renderSlot(_ctx.$slots, "default", { key: 0 }) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createTextVNode(toDisplayString(_ctx.msg), 1)
        ], 64))
      ], 6)
    ]),
    _: 3
  }, 8, ["visible", "position", "teleport-disable"]);
}
const Notify = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const defaultOptions = {
  type: "base",
  visible: true,
  msg: "",
  color: void 0,
  background: void 0,
  duration: 3e3,
  className: "",
  onClose: Function,
  // onClick: null,
  // onOpened: null,
  // textTimer: null,
  teleport: "",
  unmount: new Function()
};
let idsMap = [];
let optsMap = [];
const clearNotify = (id) => {
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
const updateNotify = (opts) => {
  const container = document.getElementById(opts.id);
  if (container) {
    const currentOpt = optsMap.find((item) => item.id === opts.id);
    if (currentOpt) {
      opts = __spreadValues(__spreadValues(__spreadValues({}, defaultOptions), currentOpt), opts);
    } else {
      opts = __spreadValues(__spreadValues({}, defaultOptions), opts);
    }
    const instance = createVNode(Notify, opts);
    render(instance, container);
    return instance.component.data;
  }
};
const mountNotify = (opts) => {
  opts.unmount = clearNotify;
  let _id;
  if (opts.id) {
    _id = opts.id;
    if (idsMap.find((item) => item === opts.id)) {
      return updateNotify(opts);
    }
  } else {
    _id = (/* @__PURE__ */ new Date()).getTime() + "";
  }
  opts = __spreadValues(__spreadValues({}, defaultOptions), opts);
  opts.id = _id;
  idsMap.push(opts.id);
  optsMap.push(opts);
  const root = document.createElement("view");
  root.id = "notify-" + opts.id;
  const Wrapper = {
    setup() {
      opts.teleport = `#notify-${opts.id}`;
      onMounted(() => {
        setTimeout(() => {
          opts.onClose && opts.onClose();
          document.body.removeChild(root);
        }, opts.duration);
      });
      return () => {
        return h(Notify, opts);
      };
    }
  };
  const instance = createVNode(Wrapper);
  document.body.appendChild(root);
  render(instance, root);
};
const errorMsg = (msg) => {
  if (!msg) {
    console.warn("[NutUI Notify]: msg不能为空");
    return;
  }
};
const showNotify = {
  text(msg, obj = {}) {
    errorMsg(msg);
    return mountNotify(__spreadProps(__spreadValues({}, obj), { msg }));
  },
  primary(msg, obj = {}) {
    errorMsg(msg);
    return mountNotify(__spreadProps(__spreadValues({}, obj), { msg, type: "primary" }));
  },
  success(msg, obj = {}) {
    errorMsg(msg);
    return mountNotify(__spreadProps(__spreadValues({}, obj), { msg, type: "success" }));
  },
  danger(msg, obj = {}) {
    errorMsg(msg);
    return mountNotify(__spreadProps(__spreadValues({}, obj), { msg, type: "danger" }));
  },
  warn(msg, obj = {}) {
    errorMsg(msg);
    return mountNotify(__spreadProps(__spreadValues({}, obj), { msg, type: "warning" }));
  },
  hide() {
    clearNotify();
  },
  install(app) {
    app.use(Notify);
  }
};
export {
  Notify as default,
  showNotify
};
