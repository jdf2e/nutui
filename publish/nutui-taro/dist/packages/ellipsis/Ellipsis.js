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
import { ref, reactive, computed, onMounted, toRefs, openBlock, createElementBlock, createElementVNode, toDisplayString, createCommentVNode, createTextVNode, withModifiers, normalizeStyle } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { u as useTaroRect } from "../index-m0Wcof-q.js";
import Taro from "@tarojs/taro";
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
    const rootContain = ref(null);
    const symbolContain = ref(null);
    let contantCopy = ref(props.content);
    let maxHeight = 0;
    let lineHeight = 0;
    let originHeight = 0;
    const ellipsis = reactive({});
    const refRandomId = Math.random().toString(36).slice(-8);
    const rootId = ref("root" + refRandomId);
    let widthRef = ref("auto");
    const state = reactive({
      exceeded: false,
      // 是否超出
      expanded: false
      // 是否折叠
    });
    let widthBase = [14, 10, 7, 8.4, 10];
    let symbolTextWidth = widthBase[0] * 0.7921;
    const chineseReg = /^[\u4e00-\u9fa5]+$/;
    const digitReg = /^[0-9]+$/;
    const letterUpperReg = /^[A-Z]+$/;
    const letterLowerReg = /^[a-z]+$/;
    const symbolText = computed(() => {
      if (props.direction == "end" || props.direction == "middle") {
        return `${props.symbol}${props.expandText}`;
      }
      return `${props.symbol}${props.expandText}${props.symbol}`;
    });
    onMounted(() => {
      setTimeout(() => {
        getSymbolInfo();
        getReference();
      }, 100);
    });
    const getSymbolInfo = () => {
      useTaroRect(symbolContain).then(
        (refe) => {
          symbolTextWidth = refe.width ? Math.ceil(refe.width) : Math.ceil(widthBase[0] * 0.7921);
        },
        () => {
        }
      );
    };
    const getReference = () => __async(this, null, function* () {
      const query = Taro.createSelectorQuery();
      query.select(`#${rootId.value}`) && query.select(`#${rootId.value}`).fields(
        {
          computedStyle: ["width", "height", "lineHeight", "paddingTop", "paddingBottom", "fontSize"]
        },
        (res) => {
          lineHeight = pxToNumber(res.lineHeight === "normal" ? props.lineHeight : res.lineHeight);
          maxHeight = Math.floor(
            lineHeight * (Number(props.rows) + 0.5) + pxToNumber(res.paddingTop) + pxToNumber(res.paddingBottom)
          );
          originHeight = pxToNumber(res.height);
          widthRef.value = res.width;
          const bsize = pxToNumber(res.fontSize);
          widthBase = [bsize, bsize * 0.72, bsize * 0.53, bsize * 0.4, bsize * 0.75];
          calcEllipse();
        }
      ).exec();
    });
    const calcEllipse = () => {
      useTaroRect(rootContain).then(
        (refe) => {
          if (refe.height <= maxHeight) {
            state.exceeded = false;
          } else {
            const rowNum = Math.floor(props.content.length / (originHeight / lineHeight - 1));
            if (props.direction === "middle") {
              const end = props.content.length;
              ellipsis.leading = tailorContent(0, rowNum * (Number(props.rows) + 0.5), "end");
              ellipsis.tailing = tailorContent(props.content.length - rowNum * (Number(props.rows) + 0.5), end, "start");
            } else if (props.direction === "end") {
              const end = rowNum * (Number(props.rows) + 0.5);
              ellipsis.leading = tailorContent(0, end);
            } else {
              const start = props.content.length - rowNum * (Number(props.rows) + 0.5) - 5;
              ellipsis.tailing = tailorContent(start, props.content.length);
            }
            assignContent();
            setTimeout(() => {
              verifyEllipsis();
            }, 100);
          }
        },
        () => {
        }
      );
    };
    const verifyEllipsis = () => __async(this, null, function* () {
      useTaroRect(rootContain).then(
        (refe) => {
          var _a, _b;
          if (refe && refe.height && refe.height > maxHeight) {
            if (props.direction == "end") {
              ellipsis.leading = (_a = ellipsis.leading) == null ? void 0 : _a.slice(0, ellipsis.leading.length - 1);
            } else {
              ellipsis.tailing = (_b = ellipsis.tailing) == null ? void 0 : _b.slice(1, ellipsis.tailing.length);
            }
            assignContent();
            setTimeout(() => {
              verifyEllipsis();
            }, 100);
          }
        },
        () => {
        }
      );
    });
    const assignContent = () => {
      contantCopy.value = `${ellipsis.leading || ""}${ellipsis.leading ? props.symbol : ""}${props.expandText || ""}${ellipsis.tailing ? props.symbol : ""}${ellipsis.tailing || ""}`;
    };
    const tailorContent = (left, right, type = "") => {
      const threeDotWidth = symbolTextWidth;
      const direc = props.direction === "middle" && type ? type : props.direction;
      state.exceeded = true;
      let widthPart = -1;
      let start = left;
      let end = right;
      let cutoff = 0;
      let marking = 0;
      if (direc === "end") {
        marking = start;
        cutoff = end;
      } else {
        marking = end;
        cutoff = start;
      }
      let contentWidth = pxToNumber(widthRef.value) * Number(props.rows) - threeDotWidth;
      let contentPartWidth = props.direction === "middle" ? contentWidth / 2 : contentWidth;
      while (widthPart < contentPartWidth) {
        const zi = props.content[marking];
        if (chineseReg.test(zi)) {
          widthPart = Number(widthPart + widthBase[0]);
        } else if (letterUpperReg.test(zi)) {
          widthPart = Number(widthPart + widthBase[1]);
        } else if (letterLowerReg.test(zi)) {
          widthPart = Number(widthPart + widthBase[2]);
        } else if (digitReg.test(zi)) {
          widthPart = Number(widthPart + widthBase[3]);
        } else {
          widthPart = Number(widthPart + widthBase[4]);
        }
        cutoff = marking;
        direc === "end" ? marking++ : marking--;
      }
      if (direc === "end") {
        return props.content.slice(0, cutoff);
      } else {
        return props.content.slice(cutoff, end);
      }
    };
    const pxToNumber = (value) => {
      if (!value) return 0;
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
    return __spreadProps(__spreadValues({}, toRefs(state)), {
      rootId,
      rootContain,
      symbolContain,
      ellipsis,
      contantCopy,
      symbolText,
      clickHandle,
      handleClick,
      refRandomId,
      widthRef
    });
  }
});
const _hoisted_1 = ["id"];
const _hoisted_2 = {
  key: 0,
  class: "nut-ellipsis__wordbreak"
};
const _hoisted_3 = {
  key: 1,
  class: "nut-ellipsis__wordbreak"
};
const _hoisted_4 = { key: 2 };
const _hoisted_5 = ["id"];
const _hoisted_6 = ["id"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", null, [
    createElementVNode("view", {
      id: _ctx.rootId,
      class: "nut-ellipsis ell",
      onClick: _cache[2] || (_cache[2] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
    }, [
      !_ctx.exceeded ? (openBlock(), createElementBlock("view", _hoisted_2, toDisplayString(_ctx.content), 1)) : createCommentVNode("", true),
      createTextVNode(),
      _ctx.exceeded && !_ctx.expanded ? (openBlock(), createElementBlock("view", _hoisted_3, [
        createTextVNode(toDisplayString(_ctx.ellipsis.leading) + toDisplayString(_ctx.ellipsis.leading && _ctx.symbol), 1),
        _ctx.expandText ? (openBlock(), createElementBlock("view", {
          key: 0,
          class: "nut-ellipsis__text",
          onClick: _cache[0] || (_cache[0] = withModifiers(($event) => _ctx.clickHandle(1), ["stop"]))
        }, toDisplayString(_ctx.expandText), 1)) : createCommentVNode("", true),
        createTextVNode(toDisplayString(_ctx.ellipsis.tailing && _ctx.symbol) + toDisplayString(_ctx.ellipsis.tailing), 1)
      ])) : createCommentVNode("", true),
      createTextVNode(),
      _ctx.exceeded && _ctx.expanded ? (openBlock(), createElementBlock("view", _hoisted_4, [
        createTextVNode(toDisplayString(_ctx.content) + " ", 1),
        _ctx.expandText ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: "nut-ellipsis__text",
          onClick: _cache[1] || (_cache[1] = withModifiers(($event) => _ctx.clickHandle(2), ["stop"]))
        }, toDisplayString(_ctx.collapseText), 1)) : createCommentVNode("", true)
      ])) : createCommentVNode("", true)
    ], 8, _hoisted_1),
    createTextVNode(),
    createElementVNode("view", {
      id: "rootContain" + _ctx.refRandomId,
      ref: "rootContain",
      class: "nut-ellipsis__copy",
      style: normalizeStyle({ width: _ctx.widthRef })
    }, [
      createElementVNode("view", null, toDisplayString(_ctx.contantCopy), 1)
    ], 12, _hoisted_5),
    createTextVNode(),
    createElementVNode("view", {
      id: "symbolContain" + _ctx.refRandomId,
      ref: "symbolContain",
      class: "nut-ellipsis__copy",
      style: { "display": "inline" }
    }, toDisplayString(_ctx.symbolText), 9, _hoisted_6)
  ]);
}
const index_taro = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index_taro as default
};
