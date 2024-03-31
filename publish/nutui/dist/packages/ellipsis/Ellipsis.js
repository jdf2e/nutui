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
import { ref, reactive, watch, onMounted, toRefs, openBlock, createElementBlock, toDisplayString, createCommentVNode, createTextVNode, withModifiers } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
const { create } = createComponent("ellipsis");
const _sfc_main = create({
  props: {
    content: {
      type: String,
      default: ""
    },
    direction: {
      type: String,
      default: "end"
    },
    rows: {
      type: [Number, String],
      default: 1
    },
    expandText: {
      type: String,
      default: ""
    },
    collapseText: {
      type: String,
      default: ""
    },
    symbol: {
      type: String,
      default: "..."
    },
    lineHeight: {
      type: [Number, String],
      default: "20"
    }
  },
  emits: ["click", "change"],
  setup(props, { emit }) {
    const root = ref(null);
    let container = null;
    let maxHeight = 0;
    const ellipsis = ref();
    const state = reactive({
      exceeded: false,
      // 是否超出
      expanded: false
      // 是否折叠
    });
    watch(
      () => props.content,
      (newV, oldVal) => {
        if (newV != oldVal) {
          createContainer();
        }
      }
    );
    onMounted(() => {
      createContainer();
    });
    const createContainer = () => {
      if (!root.value)
        return;
      const originStyle = window.getComputedStyle(root.value);
      container = document.createElement("div");
      const styleNames = Array.prototype.slice.apply(originStyle);
      styleNames.forEach((name) => {
        container.style.setProperty(name, originStyle.getPropertyValue(name));
      });
      container.style.position = "fixed";
      container.style.left = "999999px";
      container.style.top = "999999px";
      container.style.zIndex = "-1000";
      container.style.height = "auto";
      container.style.minHeight = "auto";
      container.style.maxHeight = "auto";
      container.style.textOverflow = "clip";
      container.style.whiteSpace = "normal";
      container.style.webkitLineClamp = "unset";
      container.style.display = "block";
      const lineHeight = pxToNumber(originStyle.lineHeight === "normal" ? props.lineHeight : originStyle.lineHeight);
      maxHeight = Math.floor(
        lineHeight * (Number(props.rows) + 0.5) + pxToNumber(originStyle.paddingTop) + pxToNumber(originStyle.paddingBottom)
      );
      container.innerText = props.content;
      document.body.appendChild(container);
      calcEllipse();
    };
    const calcEllipse = () => {
      if (container.offsetHeight <= maxHeight) {
        state.exceeded = false;
        document.body.removeChild(container);
      } else {
        state.exceeded = true;
        const end = props.content.length;
        const middle = Math.floor((0 + end) / 2);
        const ellipsised = props.direction === "middle" ? tailorMiddle([0, middle], [middle, end]) : tailor(0, end);
        ellipsis.value = ellipsised;
        document.body.removeChild(container);
      }
    };
    const tailor = (left, right) => {
      const actionText = state.expanded ? props.collapseText : props.expandText;
      const end = props.content.length;
      if (right - left <= 1) {
        if (props.direction === "end") {
          return {
            leading: props.content.slice(0, left) + props.symbol
          };
        } else {
          return {
            tailing: props.symbol + props.content.slice(right, end)
          };
        }
      }
      const middle = Math.round((left + right) / 2);
      if (props.direction === "end") {
        container.innerText = props.content.slice(0, middle) + props.symbol + actionText;
      } else {
        container.innerText = actionText + props.symbol + props.content.slice(middle, end);
      }
      if (container.offsetHeight <= maxHeight) {
        if (props.direction === "end") {
          return tailor(middle, right);
        } else {
          return tailor(left, middle);
        }
      } else {
        if (props.direction === "end") {
          return tailor(left, middle);
        } else {
          return tailor(middle, right);
        }
      }
    };
    const tailorMiddle = (leftPart, rightPart) => {
      const actionText = state.expanded ? props.collapseText : props.expandText;
      const end = props.content.length;
      if (leftPart[1] - leftPart[0] <= 1 && rightPart[1] - rightPart[0] <= 1) {
        return {
          leading: props.content.slice(0, leftPart[0]) + props.symbol,
          tailing: props.symbol + props.content.slice(rightPart[1], end)
        };
      }
      const leftPartMiddle = Math.floor((leftPart[0] + leftPart[1]) / 2);
      const rightPartMiddle = Math.ceil((rightPart[0] + rightPart[1]) / 2);
      container.innerText = props.content.slice(0, leftPartMiddle) + props.symbol + actionText + props.symbol + props.content.slice(rightPartMiddle, end);
      if (container.offsetHeight <= maxHeight) {
        return tailorMiddle([leftPartMiddle, leftPart[1]], [rightPart[0], rightPartMiddle]);
      } else {
        return tailorMiddle([leftPart[0], leftPartMiddle], [rightPartMiddle, rightPart[1]]);
      }
    };
    const pxToNumber = (value) => {
      if (!value)
        return 0;
      const match = value.match(/^\d*(\.\d*)?/);
      return match ? Number(match[0]) : 0;
    };
    const clickHandle = (type) => {
      if (type == 1) {
        state.expanded = true;
        emit("change", "expand");
      } else {
        state.expanded = false;
        emit("change", "collapse");
      }
    };
    const handleClick = () => {
      emit("click");
    };
    return __spreadProps(__spreadValues({}, toRefs(state)), { root, ellipsis, clickHandle, handleClick });
  }
});
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { key: 1 };
const _hoisted_3 = { key: 2 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    ref: "root",
    class: "nut-ellipsis",
    onClick: _cache[2] || (_cache[2] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [
    !_ctx.exceeded ? (openBlock(), createElementBlock("view", _hoisted_1, toDisplayString(_ctx.content), 1)) : createCommentVNode("", true),
    _ctx.exceeded && !_ctx.expanded ? (openBlock(), createElementBlock("view", _hoisted_2, [
      createTextVNode(toDisplayString(_ctx.ellipsis && _ctx.ellipsis.leading), 1),
      _ctx.expandText ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: "nut-ellipsis__text",
        onClick: _cache[0] || (_cache[0] = withModifiers(($event) => _ctx.clickHandle(1), ["stop"]))
      }, toDisplayString(_ctx.expandText), 1)) : createCommentVNode("", true),
      createTextVNode(toDisplayString(_ctx.ellipsis && _ctx.ellipsis.tailing), 1)
    ])) : createCommentVNode("", true),
    _ctx.exceeded && _ctx.expanded ? (openBlock(), createElementBlock("view", _hoisted_3, [
      createTextVNode(toDisplayString(_ctx.content) + " ", 1),
      _ctx.expandText ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: "nut-ellipsis__text",
        onClick: _cache[1] || (_cache[1] = withModifiers(($event) => _ctx.clickHandle(2), ["stop"]))
      }, toDisplayString(_ctx.collapseText), 1)) : createCommentVNode("", true)
    ])) : createCommentVNode("", true)
  ], 512);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index as default
};
