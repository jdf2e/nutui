import { inject, getCurrentInstance, onUnmounted, computed, ref, openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, renderSlot, createTextVNode, Fragment, toDisplayString } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { p as pxCheck } from "../pxCheck-DN6FYV6q.js";
import { G as GRID_KEY } from "../common-Chr7cC9o.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
function useInject(key) {
  const parent = inject(key, null);
  if (parent) {
    const instance = getCurrentInstance();
    const { add, remove, internalChildren } = parent;
    add(instance);
    onUnmounted(() => remove(instance));
    const index = computed(() => internalChildren.indexOf(instance));
    return {
      parent,
      index
    };
  }
  return {
    parent: null,
    index: ref(-1)
  };
}
const { create, componentName } = createComponent("grid-item");
const _sfc_main = create({
  props: {
    text: {
      type: String
    }
    // router
    // to: {
    //   type: [String, Object]
    // },
    // url: {
    //   type: String,
    //   default: ''
    // },
    // replace: {
    //   type: Boolean,
    //   default: false
    // }
  },
  emits: ["click"],
  setup(props, { emit }) {
    const Parent = useInject(GRID_KEY);
    if (!Parent.parent)
      return {};
    const index = Parent.index;
    const parent = Parent.parent.props;
    const rootClass = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });
    const rootStyle = computed(() => {
      const style = {
        flexBasis: `${100 / +parent.columnNum}%`
      };
      if (parent.square) {
        style.paddingTop = `${100 / +parent.columnNum}%`;
      } else if (parent.gutter) {
        style.paddingRight = pxCheck(parent.gutter);
        if (index.value >= +parent.columnNum) {
          style.marginTop = pxCheck(parent.gutter);
        }
      }
      return style;
    });
    const contentClass = computed(() => {
      const prefixCls = `${componentName}__content`;
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}--border`]: parent.border,
        [`${prefixCls}--surround`]: parent.border && parent.gutter,
        [`${prefixCls}--center`]: parent.center,
        [`${prefixCls}--square`]: parent.square,
        [`${prefixCls}--reverse`]: parent.reverse,
        [`${prefixCls}--${parent.direction}`]: !!parent.direction,
        [`${prefixCls}--clickable`]: parent.clickable
      };
    });
    const handleClick = (event) => {
      emit("click", event);
    };
    return {
      rootClass,
      rootStyle,
      contentClass,
      handleClick
    };
  }
});
const _hoisted_1 = { class: "nut-grid-item__text" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: normalizeClass(_ctx.rootClass),
    style: normalizeStyle(_ctx.rootStyle),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [
    createElementVNode("view", {
      class: normalizeClass(_ctx.contentClass)
    }, [
      renderSlot(_ctx.$slots, "default"),
      createTextVNode(),
      createElementVNode("view", _hoisted_1, [
        _ctx.text ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createTextVNode(toDisplayString(_ctx.text), 1)
        ], 64)) : renderSlot(_ctx.$slots, "text", { key: 1 })
      ])
    ], 2)
  ], 6);
}
const index_taro = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index_taro as default
};
