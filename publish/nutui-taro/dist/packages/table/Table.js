var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { defineComponent, h, reactive, watch, toRefs, resolveComponent, openBlock, createElementBlock, createElementVNode, normalizeClass, Fragment, renderList, normalizeStyle, createTextVNode, toDisplayString, renderSlot, createBlock, createCommentVNode } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { DownArrow } from "@nutui/icons-vue-taro";
import { u as useLocale } from "../index-IxPZmHlb.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
const RenderColumn = defineComponent({
  props: {
    slots: {
      type: Array,
      default: () => []
    },
    record: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    return () => h(`view`, {}, props.slots[0] ? props.slots[0](props.record) : props.slots[1](props.record));
  }
});
const { create } = createComponent("table");
const cN = "NutTable";
const _sfc_main = create({
  components: {
    RenderColumn,
    DownArrow
  },
  props: {
    bordered: {
      type: Boolean,
      default: true
    },
    columns: {
      type: Array,
      default: () => []
    },
    data: {
      type: Object,
      default: () => ({})
    },
    summary: {
      type: Function,
      default: null
    },
    striped: {
      type: Boolean,
      default: false
    }
  },
  emits: ["sorter"],
  setup(props, { emit }) {
    const translate = useLocale(cN);
    const state = reactive({
      curData: props.data
    });
    const cellClasses = (item) => {
      return {
        "nut-table__main__head__tr--border": props.bordered,
        [`nut-table__main__head__tr--align${item.align ? item.align : ""}`]: true
      };
    };
    const stylehead = (item) => {
      return item.stylehead ? item.stylehead : "";
    };
    const stylecolumn = (item) => {
      return item.stylecolumn ? item.stylecolumn : "";
    };
    const getColumnItem = (value) => {
      return props.columns.filter((item) => item.key === value)[0];
    };
    const getColumnItemStyle = (value) => {
      const style = props.columns.filter((item) => item.key === value);
      return style[0].stylecolumn ? style[0].stylecolumn : "";
    };
    const handleSorterClick = (item) => {
      if (item.sorter) {
        emit("sorter", item);
        state.curData = typeof item.sorter === "function" ? state.curData.sort(item.sorter) : item.sorter === "default" ? state.curData.sort() : state.curData;
      }
    };
    const sortDataItem = () => {
      return props.columns.map((columns) => {
        return [columns.key, columns.render];
      });
    };
    watch(
      () => props.data,
      (val) => {
        state.curData = val.slice();
      }
    );
    return __spreadProps(__spreadValues({}, toRefs(state)), {
      cellClasses,
      getColumnItem,
      getColumnItemStyle,
      handleSorterClick,
      sortDataItem,
      translate,
      stylehead,
      stylecolumn
    });
  }
});
const _hoisted_1 = { class: "nut-table" };
const _hoisted_2 = { class: "nut-table__main__head" };
const _hoisted_3 = { class: "nut-table__main__head__tr" };
const _hoisted_4 = ["onClick"];
const _hoisted_5 = { class: "nut-table__main__body" };
const _hoisted_6 = { key: 1 };
const _hoisted_7 = {
  key: 0,
  class: "nut-table__nodata"
};
const _hoisted_8 = {
  key: 0,
  class: "nut-table__nodata__text"
};
const _hoisted_9 = {
  key: 1,
  class: "nut-table__summary"
};
const _hoisted_10 = ["innerHTML"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DownArrow = resolveComponent("DownArrow");
  const _component_RenderColumn = resolveComponent("RenderColumn");
  return openBlock(), createElementBlock("view", _hoisted_1, [
    createElementVNode("view", {
      class: normalizeClass(["nut-table__main", { "nut-table__main--striped": _ctx.striped }])
    }, [
      createElementVNode("view", _hoisted_2, [
        createElementVNode("view", _hoisted_3, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.columns, (item) => {
            return openBlock(), createElementBlock("span", {
              key: item.key,
              class: normalizeClass(["nut-table__main__head__tr__th", _ctx.cellClasses(item)]),
              style: normalizeStyle(item.stylehead),
              onClick: ($event) => _ctx.handleSorterClick(item)
            }, [
              createTextVNode(toDisplayString(item.title) + " ", 1),
              renderSlot(_ctx.$slots, "icon"),
              createTextVNode(),
              !_ctx.$slots.icon && item.sorter ? (openBlock(), createBlock(_component_DownArrow, {
                key: 0,
                size: "12px"
              })) : createCommentVNode("", true)
            ], 14, _hoisted_4);
          }), 128))
        ])
      ]),
      createTextVNode(),
      createElementVNode("view", _hoisted_5, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.curData, (item) => {
          return openBlock(), createElementBlock("view", {
            key: item,
            class: "nut-table__main__body__tr"
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.sortDataItem(), ([value, render]) => {
              return openBlock(), createElementBlock("span", {
                key: value,
                class: normalizeClass(["nut-table__main__body__tr__td", _ctx.cellClasses(_ctx.getColumnItem(value))]),
                style: normalizeStyle(_ctx.getColumnItemStyle(value))
              }, [
                typeof item[value] === "function" || typeof render === "function" ? (openBlock(), createBlock(_component_RenderColumn, {
                  key: 0,
                  slots: [render, item[value]],
                  record: item
                }, null, 8, ["slots", "record"])) : (openBlock(), createElementBlock("view", _hoisted_6, toDisplayString(item[value]), 1))
              ], 6);
            }), 128))
          ]);
        }), 128))
      ])
    ], 2),
    createTextVNode(),
    !_ctx.curData.length ? (openBlock(), createElementBlock("view", _hoisted_7, [
      createElementVNode("div", {
        class: normalizeClass(["nut-table__nodata", { "nut-table__nodata--border": _ctx.bordered }])
      }, [
        renderSlot(_ctx.$slots, "nodata"),
        createTextVNode(),
        !_ctx.$slots.nodata ? (openBlock(), createElementBlock("div", _hoisted_8, toDisplayString(_ctx.translate("noData")), 1)) : createCommentVNode("", true)
      ], 2)
    ])) : createCommentVNode("", true),
    createTextVNode(),
    _ctx.summary ? (openBlock(), createElementBlock("view", _hoisted_9, [
      createElementVNode("span", {
        class: "nut-table__summary__text",
        innerHTML: _ctx.summary().value
      }, null, 8, _hoisted_10)
    ])) : createCommentVNode("", true)
  ]);
}
const index_taro = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index_taro as default
};
