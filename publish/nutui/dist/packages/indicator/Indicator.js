import { computed, openBlock, createElementBlock, normalizeClass, Fragment, renderList, toDisplayString } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { p as padZero } from "../util-6wYEjmEl.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
const { create } = createComponent("indicator");
const _sfc_main = create({
  props: {
    size: {
      type: Number,
      default: 3
    },
    current: {
      type: Number,
      default: 1
    },
    block: {
      type: Boolean,
      default: false
    },
    align: {
      type: String,
      default: "center"
    },
    fillZero: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const classes = computed(() => {
      const prefixCls = "nut-indicator";
      return {
        [prefixCls]: true,
        [`${prefixCls}--block`]: props.block,
        [`${prefixCls}--align__${props.align}`]: props.block && props.align
      };
    });
    return { classes, padZero };
  }
});
const _hoisted_1 = {
  key: 0,
  class: "nut-indicator--number"
};
const _hoisted_2 = {
  key: 1,
  class: "nut-indicator--dot"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: normalizeClass(_ctx.classes)
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.size, (item) => {
      return openBlock(), createElementBlock(Fragment, { key: item }, [
        item === _ctx.current ? (openBlock(), createElementBlock("view", _hoisted_1, toDisplayString(_ctx.fillZero && _ctx.padZero(item) || item), 1)) : (openBlock(), createElementBlock("view", _hoisted_2))
      ], 64);
    }), 128))
  ], 2);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index as default
};
