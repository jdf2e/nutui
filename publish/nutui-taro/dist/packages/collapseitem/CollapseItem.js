import { ref, inject, computed, onMounted, watch, openBlock, createElementBlock, normalizeClass, createElementVNode, renderSlot, createTextVNode, toDisplayString, createCommentVNode, normalizeStyle, createBlock, resolveDynamicComponent } from "vue";
import { DownArrow } from "@nutui/icons-vue-taro";
import { c as createComponent } from "../component-TCzwHGVq.js";
import { r as renderIcon } from "../renderIcon--EgZu5_5.js";
import Taro from "@tarojs/taro";
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
  setup(props, { slots }) {
    const wrapperRef = ref(null);
    const refRandomId = Math.random().toString(36).slice(-8);
    const target = `#nut-collapse__item-${refRandomId}`;
    const currentHeight = ref("auto");
    const inAnimation = ref(false);
    const timeoutId = ref("");
    const parent = inject(COLLAPSE_KEY);
    const classes = computed(() => {
      const prefixCls = "nut-collapse-item";
      return {
        [prefixCls]: true,
        [prefixCls + "__border"]: props.border
      };
    });
    onMounted(() => {
      setTimeout(() => {
        getRect(target).then((res) => {
          if (res == null ? void 0 : res.height) {
            currentHeight.value = `${res.height}px`;
          }
        });
      }, 100);
    });
    watch(
      () => {
        var _a;
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      },
      () => {
        setTimeout(() => {
          getRect(target).then((res) => {
            if (res == null ? void 0 : res.height) {
              currentHeight.value = `${res.height}px`;
            }
          });
        }, 200);
      }
    );
    const getRect = (selector) => {
      return new Promise((resolve) => {
        Taro.createSelectorQuery().select(selector).boundingClientRect().exec((rect = []) => {
          resolve(rect[0]);
        });
      });
    };
    const expanded = computed(() => {
      if (parent) {
        return parent.isExpanded(props.name);
      }
      return false;
    });
    const wrapperHeight = ref(expanded.value ? "auto" : "0px");
    const handleClick = () => {
      if (!inAnimation.value) {
        parent && parent.updateVal(props.name);
      }
    };
    const toggle = (open) => {
      if (timeoutId.value) {
        clearTimeout(timeoutId.value);
        timeoutId.value = "";
      }
      const start = open ? "0px" : currentHeight.value;
      const end = open ? currentHeight.value : "0px";
      inAnimation.value = true;
      wrapperHeight.value = start;
      setTimeout(() => {
        wrapperHeight.value = end;
        inAnimation.value = false;
        if (open) {
          timeoutId.value = setTimeout(() => {
            wrapperHeight.value = "auto";
          }, 300);
        }
      }, 100);
    };
    watch(expanded, toggle);
    return {
      refRandomId,
      classes,
      renderIcon,
      wrapperRef,
      handleClick,
      wrapperHeight,
      expanded
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
const _hoisted_9 = ["id"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: normalizeClass(_ctx.classes)
  }, [
    createElementVNode("view", {
      class: normalizeClass(["nut-collapse-item__title", { "nut-collapse-item__title--disabled": _ctx.disabled }]),
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
    }, [
      createElementVNode("view", _hoisted_1, [
        createElementVNode("view", _hoisted_2, [
          _ctx.$slots.title ? renderSlot(_ctx.$slots, "title", { key: 0 }) : (openBlock(), createElementBlock("view", {
            key: 1,
            class: "nut-collapse-item__title-mtitle",
            innerHTML: _ctx.title
          }, null, 8, _hoisted_3)),
          createTextVNode(),
          _ctx.label ? (openBlock(), createElementBlock("view", _hoisted_4, toDisplayString(_ctx.label), 1)) : createCommentVNode("", true)
        ])
      ]),
      createTextVNode(),
      _ctx.$slots.value ? (openBlock(), createElementBlock("view", _hoisted_5, [
        renderSlot(_ctx.$slots, "value")
      ])) : (openBlock(), createElementBlock("view", {
        key: 1,
        class: "nut-collapse-item__title-sub",
        innerHTML: _ctx.value
      }, null, 8, _hoisted_6)),
      createTextVNode(),
      createElementVNode("view", {
        class: normalizeClass(["nut-collapse-item__title-icon", { "nut-collapse-item__title-icon--expanded": _ctx.expanded }]),
        style: normalizeStyle({ transform: "rotate(" + (_ctx.expanded ? _ctx.rotate : 0) + "deg)" })
      }, [
        _ctx.$slots.icon ? renderSlot(_ctx.$slots, "icon", { key: 0 }) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.renderIcon(_ctx.icon)), { key: 1 }))
      ], 6)
    ], 2),
    createTextVNode(),
    _ctx.$slots.extra ? (openBlock(), createElementBlock("view", _hoisted_7, [
      createElementVNode("div", _hoisted_8, [
        renderSlot(_ctx.$slots, "extra")
      ])
    ])) : createCommentVNode("", true),
    createTextVNode(),
    createElementVNode("view", {
      ref: "wrapperRef",
      class: "nut-collapse__item-wrapper",
      style: normalizeStyle({
        willChange: "height",
        height: _ctx.wrapperHeight
      })
    }, [
      createElementVNode("view", {
        id: `nut-collapse__item-${_ctx.refRandomId}`,
        class: "nut-collapse__item-wrapper__content"
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 8, _hoisted_9)
    ], 4)
  ], 2);
}
const index_taro = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index_taro as default
};
