import { ref, openBlock, createElementBlock, createElementVNode, Fragment, renderList, normalizeClass, toDisplayString, createCommentVNode, renderSlot } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
const { create } = createComponent("category");
const _sfc_main = create({
  props: {
    // 分类模式
    type: {
      type: String,
      default: "classify"
    },
    // 左侧导航栏
    category: {
      type: Array,
      default: []
    }
  },
  setup(props, { emit }) {
    const checkIndex = ref(0);
    const categoryLeft = ref(false);
    const getChildList = (index2) => {
      checkIndex.value = index2;
      emit("change", index2);
    };
    return {
      getChildList,
      checkIndex,
      categoryLeft
    };
  }
});
const _hoisted_1 = { class: "nut-category" };
const _hoisted_2 = { class: "nut-category__cateList" };
const _hoisted_3 = { key: 0 };
const _hoisted_4 = ["onClick"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("div", _hoisted_2, [
      _ctx.type == "classify" || _ctx.type == "text" ? (openBlock(), createElementBlock("div", _hoisted_3, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.category, (item, index2) => {
          return openBlock(), createElementBlock("div", {
            key: index2,
            class: "nut-category__cateListLeft"
          }, [
            createElementVNode("div", {
              class: normalizeClass([_ctx.checkIndex == index2 ? "nut-category__cateListItemChecked" : "nut-category__cateListItem"]),
              onClick: ($event) => _ctx.getChildList(index2)
            }, toDisplayString(item.catName), 11, _hoisted_4)
          ]);
        }), 128))
      ])) : createCommentVNode("", true),
      renderSlot(_ctx.$slots, "default")
    ])
  ]);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index as default
};
