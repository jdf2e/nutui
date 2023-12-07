import { computed, openBlock, createElementBlock, normalizeClass, createCommentVNode, createElementVNode, toDisplayString } from "vue";
import { c as createComponent } from "../component-TCzwHGVq.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-yVxbj29m.js";
const { componentName, create } = createComponent("price");
const _sfc_main = create({
  props: {
    price: {
      type: [Number, String],
      default: 0
    },
    needSymbol: {
      type: Boolean,
      default: true
    },
    symbol: {
      type: String,
      default: "&yen;"
    },
    decimalDigits: {
      type: Number,
      default: 2
    },
    thousands: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: "before"
    },
    size: {
      type: String,
      default: "normal"
    },
    strikeThrough: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const classes = computed(() => {
      return {
        [componentName]: true,
        [`${componentName}--strike`]: props.strikeThrough
      };
    });
    const showSymbol = computed(() => {
      const symbol = props.needSymbol ? props.symbol : "";
      return symbol;
    });
    const checkPoint = (price) => {
      return String(price).indexOf(".") > 0;
    };
    const formatThousands = (num) => {
      if (Number(num) == 0) {
        num = 0;
      }
      if (checkPoint(num)) {
        num = Number(num).toFixed(props.decimalDigits);
        num = typeof num.split(".") === "string" ? num.split(".") : num.split(".")[0];
      } else {
        num = num.toString();
      }
      if (props.thousands) {
        return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
      } else {
        return num;
      }
    };
    const formatDecimal = (decimalNum) => {
      if (Number(decimalNum) == 0) {
        decimalNum = 0;
      }
      if (checkPoint(decimalNum)) {
        decimalNum = Number(decimalNum).toFixed(props.decimalDigits);
        decimalNum = typeof decimalNum.split(".") === "string" ? 0 : decimalNum.split(".")[1] ? decimalNum.split(".")[1] : 0;
      } else {
        decimalNum = 0;
      }
      const result = "0." + decimalNum;
      const resultFixed = Number(result).toFixed(props.decimalDigits);
      return String(resultFixed).substring(2, resultFixed.length);
    };
    return {
      classes,
      showSymbol,
      checkPoint,
      formatThousands,
      formatDecimal
    };
  }
});
const _hoisted_1 = ["innerHTML"];
const _hoisted_2 = ["innerHTML"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: normalizeClass(_ctx.classes)
  }, [
    _ctx.needSymbol && _ctx.position === "before" ? (openBlock(), createElementBlock("view", {
      key: 0,
      class: normalizeClass(["nut-price--symbol", `nut-price--symbol-${_ctx.size}`]),
      innerHTML: _ctx.showSymbol
    }, null, 10, _hoisted_1)) : createCommentVNode("", true),
    createElementVNode("view", {
      class: normalizeClass(`nut-price--${_ctx.size}`)
    }, toDisplayString(_ctx.formatThousands(_ctx.price)), 3),
    _ctx.decimalDigits != 0 ? (openBlock(), createElementBlock("view", {
      key: 1,
      class: normalizeClass(`nut-price--decimal-${_ctx.size}`)
    }, ".", 2)) : createCommentVNode("", true),
    createElementVNode("view", {
      class: normalizeClass(`nut-price--decimal-${_ctx.size}`)
    }, toDisplayString(_ctx.formatDecimal(_ctx.price)), 3),
    _ctx.needSymbol && _ctx.position === "after" ? (openBlock(), createElementBlock("view", {
      key: 2,
      class: normalizeClass(["nut-price--symbol", `nut-price--symbol-${_ctx.size}`]),
      innerHTML: _ctx.showSymbol
    }, null, 10, _hoisted_2)) : createCommentVNode("", true)
  ], 2);
}
const NutPrice = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  NutPrice as default
};
