import Taro from "@tarojs/taro";
import { ref, computed, watch, openBlock, createElementBlock, normalizeStyle, createElementVNode, createTextVNode, renderSlot, toDisplayString } from "vue";
import { c as createComponent } from "../component-TCzwHGVq.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-yVxbj29m.js";
const { create } = createComponent("circle-progress");
const _sfc_main = create({
  props: {
    progress: {
      type: [Number, String],
      default: 0
    },
    strokeWidth: {
      type: [Number, String],
      default: 5
    },
    radius: {
      type: [Number, String],
      default: 50
    },
    strokeLinecap: {
      type: String,
      default: "round"
    },
    color: {
      type: [String, Object],
      default: "#FF673E"
    },
    pathColor: {
      type: String,
      default: "#d9d9d9"
    },
    clockwise: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const isIos = Taro.getSystemInfoSync().platform === "ios";
    const currentRate = ref(props.progress);
    const refRandomId = Math.random().toString(36).slice(-8);
    const isObject = (val) => val !== null && typeof val === "object";
    const transColor = (color) => {
      return color && color.replace("#", "%23");
    };
    const stop = () => {
      if (!isObject(props.color)) {
        return [];
      }
      let color = props.color;
      const colorArr = Object.keys(color).sort((a, b) => parseFloat(a) - parseFloat(b));
      let stopArr = [];
      colorArr.map((item) => {
        let obj = {
          key: "",
          value: ""
        };
        obj.key = item;
        obj.value = color[item];
        stopArr.push(obj);
      });
      return stopArr;
    };
    const style = computed(() => {
      let { strokeWidth } = props;
      let stopArr = stop();
      let stopDom = [];
      if (stopArr) {
        stopArr.map((item) => {
          let obj = "";
          obj = `%3Cstop offset='${item.key}' stop-color='${transColor(item.value)}'/%3E`;
          stopDom.push(obj);
        });
      }
      let perimeter = 283;
      let progress = +currentRate.value;
      let offset = perimeter * Number(format(parseFloat(progress.toFixed(1)))) / 100;
      const isWise = props.clockwise ? 1 : 0;
      const color = isObject(props.color) ? `url(%23${refRandomId})` : transColor(props.color);
      let d = `M 50 50 m 0 -45 a 45 45 0 1 ${isWise} 0 90 a 45 45 0 1, ${isWise} 0 -90`;
      const pa = `%3Cdefs%3E%3ClinearGradient id='${refRandomId}' x1='100%25' y1='0%25' x2='0%25' y2='0%25'%3E${stopDom}%3C/linearGradient%3E%3C/defs%3E`;
      const path = `%3Cpath d='${d}' stroke-width='${strokeWidth}' stroke='${transColor(
        props.pathColor
      )}' fill='none'/%3E`;
      const path1 = `%3Cpath d='${d}' stroke-width='${strokeWidth}' stroke-dasharray='${offset},${perimeter}' stroke-linecap='round' stroke='${color}' fill='none'/%3E`;
      return {
        background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100'  xmlns='http://www.w3.org/2000/svg'%3E${pa}${path}${path1}%3C/svg%3E")`,
        width: "100%",
        height: "100%",
        transition: `${isIos ? "" : "background-image .3s ease 0s, "}stroke .3s ease 0s`
      };
    });
    const format = (progress) => Math.min(Math.max(+progress, 0), 100);
    watch(
      () => props.progress,
      (value) => {
        currentRate.value = Math.min(Math.max(+value, 0), 100);
      }
    );
    return {
      style,
      currentRate,
      refRandomId,
      stop
    };
  }
});
const _hoisted_1 = { class: "nut-circle-progress__text" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: "nut-circle-progress",
    style: normalizeStyle({ height: Number(_ctx.radius) * 2 + "px", width: Number(_ctx.radius) * 2 + "px" })
  }, [
    createElementVNode("div", {
      style: normalizeStyle(_ctx.style)
    }, null, 4),
    createTextVNode(),
    createElementVNode("div", _hoisted_1, [
      renderSlot(_ctx.$slots, "default", {}, () => [
        createElementVNode("span", null, toDisplayString(_ctx.progress) + "%", 1)
      ])
    ])
  ], 4);
}
const index_taro = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index_taro as default
};
