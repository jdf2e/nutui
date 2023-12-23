import { ref, inject, computed, watch, openBlock, createElementBlock, normalizeClass, createElementVNode, renderSlot, toDisplayString, createCommentVNode, normalizeStyle, createBlock, resolveDynamicComponent } from "vue";
import { DownArrow } from "@nutui/icons-vue";
import { c as createComponent } from "../component-TCzwHGVq.js";
import { r as renderIcon } from "../renderIcon--EgZu5_5.js";
import { C as COLLAPSE_KEY } from "../types-4IflWeQO.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-yVxbj29m.js";
const { create } = createComponent("collapse-item");
const _sfc_main = create({
  props: {
    title: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: [Number, String],
      default: -1,
      required: true
    },
    border: {
      type: Boolean,
      default: true
    },
    icon: {
      type: Object,
      default: () => DownArrow
    },
    rotate: {
      type: [String, Number],
      default: 180
    }
  },
  setup(props) {
    const wrapperRef = ref(null);
    const contentRef = ref(null);
    const parent = inject(COLLAPSE_KEY);
    const classes = computed(() => {
      const prefixCls = "nut-collapse-item";
      return {
        [prefixCls]: true,
        [prefixCls + "__border"]: props.border
      };
    });
    const expanded = computed(() => {
      if (parent) {
        return parent.isExpanded(props.name);
      }
      return false;
    });
    const wrapperHeight = ref(expanded.value ? "auto" : "0px");
    const toggle = () => {
      parent && parent.updateVal(props.name);
    };
    const onTransitionEnd = () => {
      if (expanded.value) {
        wrapperHeight.value = "auto";
      }
    };
    const open = () => {
      wrapperHeight.value = "0px";
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          var _a;
          const height = (_a = contentRef.value) == null ? void 0 : _a.offsetHeight;
          wrapperHeight.value = height ? `${height}px` : "auto";
        });
      });
    };
    const close = () => {
      var _a;
      const height = (_a = contentRef.value) == null ? void 0 : _a.offsetHeight;
      wrapperHeight.value = height ? `${height}px` : "auto";
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          wrapperHeight.value = "0px";
        });
      });
    };
    watch(expanded, (value) => {
      value ? open() : close();
    });
    return {
      classes,
      renderIcon,
      wrapperRef,
      contentRef,
      open,
      toggle,
      wrapperHeight,
      expanded,
      onTransitionEnd
    };
  }
});
const _hoisted_1 = { class: "nut-collapse-item__title-main" };
const _hoisted_2 = { class: "nut-collapse-item__title-main-value" };
const _hoisted_3 = ["innerHTML"];
const _hoisted_4 = {
  key: 2,
  class: "nut-collapse-item__title-label"
};
const _hoisted_5 = {
  key: 0,
  class: "nut-collapse-item__title-sub"
};
const _hoisted_6 = ["innerHTML"];
const _hoisted_7 = {
  key: 0,
  class: "nut-collapse__item-extraWrapper"
};
const _hoisted_8 = { class: "nut-collapse__item-extraWrapper__extraRender" };
const _hoisted_9 = {
  ref: "contentRef",
  class: "nut-collapse__item-wrapper__content"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: normalizeClass(_ctx.classes)
  }, [
    createElementVNode("view", {
      class: normalizeClass(["nut-collapse-item__title", { "nut-collapse-item__title--disabled": _ctx.disabled }]),
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.toggle && _ctx.toggle(...args))
    }, [
      createElementVNode("view", _hoisted_1, [
        createElementVNode("view", _hoisted_2, [
          _ctx.$slots.title ? renderSlot(_ctx.$slots, "title", { key: 0 }) : (openBlock(), createElementBlock("view", {
            key: 1,
            class: "nut-collapse-item__title-mtitle",
            innerHTML: _ctx.title
          }, null, 8, _hoisted_3)),
          _ctx.label ? (openBlock(), createElementBlock("view", _hoisted_4, toDisplayString(_ctx.label), 1)) : createCommentVNode("", true)
        ])
      ]),
      _ctx.$slots.value ? (openBlock(), createElementBlock("view", _hoisted_5, [
        renderSlot(_ctx.$slots, "value")
      ])) : (openBlock(), createElementBlock("view", {
        key: 1,
        class: "nut-collapse-item__title-sub",
        innerHTML: _ctx.value
      }, null, 8, _hoisted_6)),
      createElementVNode("view", {
        class: normalizeClass(["nut-collapse-item__title-icon", { "nut-collapse-item__title-icon--expanded": _ctx.expanded }]),
        style: normalizeStyle({ transform: "rotate(" + (_ctx.expanded ? _ctx.rotate : 0) + "deg)" })
      }, [
        _ctx.$slots.icon ? renderSlot(_ctx.$slots, "icon", { key: 0 }) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.renderIcon(_ctx.icon)), { key: 1 }))
      ], 6)
    ], 2),
    _ctx.$slots.extra ? (openBlock(), createElementBlock("view", _hoisted_7, [
      createElementVNode("div", _hoisted_8, [
        renderSlot(_ctx.$slots, "extra")
      ])
    ])) : createCommentVNode("", true),
    createElementVNode("view", {
      ref: "wrapperRef",
      class: "nut-collapse__item-wrapper",
      style: normalizeStyle({
        willChange: "height",
        height: _ctx.wrapperHeight
      }),
      onTransitionend: _cache[1] || (_cache[1] = (...args) => _ctx.onTransitionEnd && _ctx.onTransitionEnd(...args))
    }, [
      createElementVNode("view", _hoisted_9, [
        renderSlot(_ctx.$slots, "default")
      ], 512)
    ], 36)
  ], 2);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index as default
};
