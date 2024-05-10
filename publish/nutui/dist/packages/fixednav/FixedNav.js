import { computed, ref, resolveComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, createBlock, createCommentVNode, renderSlot, createElementVNode, Fragment, renderList, toDisplayString, createVNode } from "vue";
import { Left } from "@nutui/icons-vue";
import { Overlay as _sfc_main$1 } from "../overlay/Overlay.js";
import { c as createComponent } from "../component-DQf3CENX.js";
import { u as useLocale } from "../index-CFigyH92.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
const { create } = createComponent("fixed-nav");
const cN = "NutFixedNav";
const _sfc_main = create({
  components: {
    NutOverlay: _sfc_main$1,
    Left
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    overlay: {
      type: Boolean,
      default: true
    },
    navList: {
      default: () => [],
      type: Array
    },
    activeColor: {
      default: "",
      type: String
    },
    activeText: {
      default: "",
      type: String
    },
    unActiveText: {
      default: "",
      type: String
    },
    position: {
      default: () => {
        return {
          top: "auto",
          bottom: "auto"
        };
      },
      type: Object
    },
    type: {
      default: "right",
      type: String
    }
  },
  emits: ["update:visible", "selected"],
  setup(props, { emit }) {
    const translate = useLocale(cN);
    const classes = computed(() => {
      const prefixCls = "nut-fixed-nav";
      return {
        [prefixCls]: true,
        active: props.visible,
        [props.type]: true
      };
    });
    const current = ref(-1);
    const updateValue = (value = !props.visible) => {
      emit("update:visible", value);
    };
    const selected = (item, event) => {
      emit("selected", {
        item,
        event
      });
      current.value = item.id;
    };
    return { classes, updateValue, selected, translate, current };
  }
});
const _hoisted_1 = { class: "nut-fixed-nav__list" };
const _hoisted_2 = ["onClick"];
const _hoisted_3 = ["src"];
const _hoisted_4 = { class: "span" };
const _hoisted_5 = {
  key: 0,
  class: "b"
};
const _hoisted_6 = { class: "text" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_nut_overlay = resolveComponent("nut-overlay");
  const _component_Left = resolveComponent("Left");
  return openBlock(), createElementBlock("view", {
    class: normalizeClass(_ctx.classes),
    style: normalizeStyle(_ctx.position)
  }, [
    _ctx.overlay ? (openBlock(), createBlock(_component_nut_overlay, {
      key: 0,
      visible: _ctx.visible,
      "z-index": 200,
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.updateValue(false))
    }, null, 8, ["visible"])) : createCommentVNode("", true),
    renderSlot(_ctx.$slots, "list", {}, () => [
      createElementVNode("view", _hoisted_1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.navList, (item, index2) => {
          return openBlock(), createElementBlock("view", {
            key: item.id || index2,
            class: normalizeClass(["nut-fixed-nav__list-item", { active: item.id == _ctx.current }]),
            onClick: ($event) => _ctx.selected(item, $event)
          }, [
            createElementVNode("img", {
              src: item.icon
            }, null, 8, _hoisted_3),
            createElementVNode("view", _hoisted_4, toDisplayString(item.text), 1),
            item.num ? (openBlock(), createElementBlock("view", _hoisted_5, toDisplayString(item.num), 1)) : createCommentVNode("", true)
          ], 10, _hoisted_2);
        }), 128))
      ])
    ]),
    createElementVNode("div", {
      class: "nut-fixed-nav__btn",
      onClick: _cache[1] || (_cache[1] = ($event) => _ctx.updateValue())
    }, [
      renderSlot(_ctx.$slots, "btn", {}, () => [
        createVNode(_component_Left, { color: "#fff" }),
        createElementVNode("view", _hoisted_6, toDisplayString(_ctx.visible ? _ctx.activeText || _ctx.translate("activeText") : _ctx.unActiveText || _ctx.translate("unActiveText")), 1)
      ])
    ])
  ], 6);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index as default
};
