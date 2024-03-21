import { c as createComponent } from "../component-DQf3CENX.js";
import { resolveComponent, openBlock, createElementBlock, createElementVNode, createTextVNode, toDisplayString, renderSlot, createVNode, createCommentVNode, withCtx } from "vue";
import { Price as _sfc_main$1 } from "../price/Price.js";
import { Tag as _sfc_main$2 } from "../tag/Tag.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
const { create } = createComponent("card");
const _sfc_main = create({
  components: {
    NutPrice: _sfc_main$1,
    NutTag: _sfc_main$2
  },
  props: {
    imgUrl: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    price: {
      type: String,
      default: ""
    },
    vipPrice: {
      type: String,
      default: ""
    },
    shopDesc: {
      type: String,
      default: ""
    },
    delivery: {
      type: String,
      default: ""
    },
    shopName: {
      type: String,
      default: ""
    },
    isNeedPrice: {
      type: Boolean,
      default: true
    }
  }
});
const _hoisted_1 = { class: "nut-card" };
const _hoisted_2 = { class: "nut-card__left" };
const _hoisted_3 = ["src"];
const _hoisted_4 = { class: "nut-card__right" };
const _hoisted_5 = { class: "nut-card__right__title" };
const _hoisted_6 = {
  key: 0,
  class: "nut-card__right__price"
};
const _hoisted_7 = { class: "nut-card__right__other" };
const _hoisted_8 = { class: "nut-card__right__shop" };
const _hoisted_9 = { class: "nut-card__right__shop__name" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_nut_price = resolveComponent("nut-price");
  const _component_nut_tag = resolveComponent("nut-tag");
  return openBlock(), createElementBlock("view", _hoisted_1, [
    createElementVNode("div", _hoisted_2, [
      createElementVNode("img", {
        src: _ctx.imgUrl,
        alt: ""
      }, null, 8, _hoisted_3)
    ]),
    createTextVNode(),
    createElementVNode("div", _hoisted_4, [
      createElementVNode("div", _hoisted_5, toDisplayString(_ctx.title), 1),
      createTextVNode(),
      renderSlot(_ctx.$slots, "prolist"),
      createTextVNode(),
      _ctx.isNeedPrice ? (openBlock(), createElementBlock("div", _hoisted_6, [
        renderSlot(_ctx.$slots, "price", {}, () => [
          createVNode(_component_nut_price, { price: _ctx.price }, null, 8, ["price"])
        ]),
        createTextVNode(),
        renderSlot(_ctx.$slots, "origin", {}, () => [
          createVNode(_component_nut_price, {
            class: "nut-card__right__price__origin",
            price: _ctx.vipPrice
          }, null, 8, ["price"])
        ])
      ])) : createCommentVNode("", true),
      createTextVNode(),
      createElementVNode("div", _hoisted_7, [
        renderSlot(_ctx.$slots, "shop-tag", {}, () => [
          createVNode(_component_nut_tag, { type: "danger" }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.shopDesc), 1)
            ]),
            _: 1
          }),
          createTextVNode(),
          createVNode(_component_nut_tag, { plain: "" }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.delivery), 1)
            ]),
            _: 1
          })
        ])
      ]),
      createTextVNode(),
      createElementVNode("div", _hoisted_8, [
        createElementVNode("div", _hoisted_9, toDisplayString(_ctx.shopName), 1),
        createTextVNode(),
        renderSlot(_ctx.$slots, "footer")
      ])
    ])
  ]);
}
const index_taro = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index_taro as default
};
