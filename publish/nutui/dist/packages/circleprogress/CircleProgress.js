import { computed, openBlock, createElementBlock, normalizeStyle, createElementVNode, Fragment, renderList, renderSlot, toDisplayString } from "vue";
import { c as createComponent } from "../component-TCzwHGVq.js";
import { k as isObject } from "../util-4Jkyw4BJ.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-yVxbj29m.js";
const { create } = createComponent("circle-progress");
const _sfc_main = create({
  props: {
    progress: {
      type: [Number, String],
      defualt: 0
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
      default: ""
    },
    pathColor: {
      type: String,
      default: ""
    },
    clockwise: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const refRandomId = Math.random().toString(36).slice(-8);
    const path = computed(() => {
      const isWise = props.clockwise ? 1 : 0;
      return `M 50 50 m 0 -45 a 45 45 0 1 ${isWise} 0 90 a 45 45 0 1, ${isWise} 0 -90`;
    });
    const hoverColor = computed(() => {
      return isObject(props.color) ? `url(#${refRandomId})` : props.color;
    });
    const hoverStyle = computed(() => {
      let perimeter = 283;
      let offset = perimeter * Number(props.progress) / 100;
      return {
        stroke: isObject(props.color) ? `url(#${refRandomId})` : props.color,
        strokeDasharray: `${offset}px ${perimeter}px`
      };
    });
    const pathStyle = computed(() => {
      return {
        stroke: props.pathColor
      };
    });
    const stop = computed(() => {
      if (!isObject(props.color)) {
        return;
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
    });
    return {
      hoverStyle,
      pathStyle,
      path,
      hoverColor,
      stop,
      refRandomId
    };
  }
});
const _hoisted_1 = { viewBox: "0 0 100 100" };
const _hoisted_2 = ["id"];
const _hoisted_3 = ["offset", "stop-color"];
const _hoisted_4 = ["d", "stroke-width"];
const _hoisted_5 = ["d", "stroke", "stroke-linecap", "stroke-width"];
const _hoisted_6 = { class: "nut-circle-progress__text" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "nut-circle-progress",
    style: normalizeStyle({ height: Number(_ctx.radius) * 2 + "px", width: Number(_ctx.radius) * 2 + "px" })
  }, [
    (openBlock(), createElementBlock("svg", _hoisted_1, [
      createElementVNode("defs", null, [
        createElementVNode("linearGradient", {
          id: _ctx.refRandomId,
          x1: "100%",
          y1: "0%",
          x2: "0%",
          y2: "0%"
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.stop, (item, index2) => {
            return openBlock(), createElementBlock("stop", {
              key: index2,
              offset: item.key,
              "stop-color": item.value
            }, null, 8, _hoisted_3);
          }), 128))
        ], 8, _hoisted_2)
      ]),
      createElementVNode("path", {
        class: "nut-circle-progress__path",
        style: normalizeStyle(_ctx.pathStyle),
        d: _ctx.path,
        fill: "none",
        "stroke-width": _ctx.strokeWidth
      }, " > ", 12, _hoisted_4),
      createElementVNode("path", {
        class: "nut-circle-progress__hover",
        style: normalizeStyle(_ctx.hoverStyle),
        d: _ctx.path,
        fill: "none",
        stroke: _ctx.hoverColor,
        "stroke-linecap": _ctx.strokeLinecap,
        "stroke-width": _ctx.strokeWidth
      }, null, 12, _hoisted_5)
    ])),
    createElementVNode("div", _hoisted_6, [
      renderSlot(_ctx.$slots, "default", {}, () => [
        createElementVNode("div", null, toDisplayString(_ctx.progress) + "%", 1)
      ])
    ])
  ], 4);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index as default
};
