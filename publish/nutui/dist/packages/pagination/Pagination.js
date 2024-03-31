import { toRefs, computed, watchEffect, openBlock, createElementBlock, createElementVNode, normalizeClass, renderSlot, createTextVNode, toDisplayString, Fragment, renderList, createCommentVNode } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { u as useLocale } from "../index-CFigyH92.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
const { create } = createComponent("pagination");
const cN = "NutPagination";
const _sfc_main = create({
  props: {
    modelValue: {
      type: Number,
      default: 1
    },
    mode: {
      type: String,
      default: "multi"
    },
    prevText: {
      type: String,
      default: ""
    },
    nextText: {
      type: String,
      default: ""
    },
    pageCount: {
      type: [String, Number],
      default: ""
    },
    totalItems: {
      type: [String, Number],
      default: "0"
    },
    itemsPerPage: {
      type: [String, Number],
      default: "10"
    },
    showPageSize: {
      type: [String, Number],
      default: "5"
    },
    forceEllipses: {
      type: Boolean,
      default: false
    }
  },
  components: {},
  emits: ["change", "update:modelValue"],
  setup(props, { emit }) {
    const translate = useLocale(cN);
    const { modelValue, mode, showPageSize, forceEllipses } = toRefs(props);
    const countRef = computed(() => {
      const { pageCount, totalItems, itemsPerPage } = toRefs(props);
      const num = +pageCount.value || Math.ceil(+totalItems.value / +itemsPerPage.value);
      return Math.max(1, num);
    });
    const select = (curPage, isSelect) => {
      if (curPage > countRef.value || curPage < 1)
        return;
      if (curPage != modelValue.value)
        emit("update:modelValue", curPage);
      if (isSelect)
        emit("change", curPage);
    };
    const setPage = (number, text, active = false) => {
      return { number, text, active };
    };
    const pages = computed(() => {
      if (mode.value == "simple")
        return;
      let items = [];
      const pageCount = countRef.value;
      const pageSize = +showPageSize.value;
      let startPage = 1;
      let endPage = pageCount;
      const partialShow = pageCount > pageSize;
      if (partialShow) {
        startPage = Math.max(modelValue.value - Math.floor(pageSize / 2), 1);
        endPage = startPage + +pageSize - 1;
        if (endPage > pageCount) {
          endPage = pageCount;
          startPage = endPage - +pageSize + 1;
        }
      }
      for (var i = startPage; i <= endPage; i++) {
        const page = setPage(i, i, modelValue.value == i);
        items.push(page);
      }
      if (partialShow && pageSize > 0 && forceEllipses.value) {
        if (startPage > 1) {
          const prevPage = setPage(startPage - 1, "...");
          items.unshift(prevPage);
        }
        if (endPage < pageCount) {
          const nextPage = setPage(endPage + 1, "...");
          items.push(nextPage);
        }
      }
      return items;
    });
    watchEffect(() => {
      select(modelValue.value, false);
    });
    return {
      modelValue,
      select,
      countRef,
      mode,
      pages,
      forceEllipses,
      translate
    };
  }
});
const _hoisted_1 = { class: "nut-pagination" };
const _hoisted_2 = {
  key: 0,
  class: "nut-pagination-contain"
};
const _hoisted_3 = ["onClick"];
const _hoisted_4 = {
  key: 1,
  class: "nut-pagination-contain"
};
const _hoisted_5 = { class: "nut-pagination-simple" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", _hoisted_1, [
    createElementVNode("view", {
      class: normalizeClass(["nut-pagination-prev", _ctx.mode == "multi" ? "" : "simple-border", _ctx.modelValue == 1 ? "disabled" : ""]),
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.select(_ctx.modelValue - 1, true))
    }, [
      renderSlot(_ctx.$slots, "prev-text", {}, () => [
        createTextVNode(toDisplayString(_ctx.prevText || _ctx.translate("prev")), 1)
      ])
    ], 2),
    _ctx.mode == "multi" ? (openBlock(), createElementBlock("view", _hoisted_2, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.pages, (item, index2) => {
        return openBlock(), createElementBlock("view", {
          key: index2 + "pagination",
          class: normalizeClass(["nut-pagination-item", item.active ? "active" : ""]),
          onClick: ($event) => _ctx.select(item.number, true)
        }, [
          renderSlot(_ctx.$slots, "page", { item }, () => [
            createTextVNode(toDisplayString(item.text), 1)
          ])
        ], 10, _hoisted_3);
      }), 128))
    ])) : createCommentVNode("", true),
    _ctx.mode == "simple" ? (openBlock(), createElementBlock("view", _hoisted_4, [
      createElementVNode("view", _hoisted_5, toDisplayString(_ctx.modelValue) + "/" + toDisplayString(_ctx.countRef), 1)
    ])) : createCommentVNode("", true),
    createElementVNode("view", {
      class: normalizeClass(["nut-pagination-next", _ctx.modelValue >= _ctx.countRef ? "disabled" : ""]),
      onClick: _cache[1] || (_cache[1] = ($event) => _ctx.select(_ctx.modelValue + 1, true))
    }, [
      renderSlot(_ctx.$slots, "next-text", {}, () => [
        createTextVNode(toDisplayString(_ctx.nextText || _ctx.translate("next")), 1)
      ])
    ], 2)
  ]);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index as default
};
