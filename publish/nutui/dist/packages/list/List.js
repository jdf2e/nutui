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
import { ref, reactive, computed, watch, toRefs, openBlock, createElementBlock, normalizeStyle, createElementVNode, Fragment, renderList, renderSlot } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { u as useRect } from "../index-B1qsj2XR.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
var CompareResult = /* @__PURE__ */ ((CompareResult2) => {
  CompareResult2[CompareResult2["eq"] = 1] = "eq";
  CompareResult2[CompareResult2["lt"] = 2] = "lt";
  CompareResult2[CompareResult2["gt"] = 3] = "gt";
  return CompareResult2;
})(CompareResult || {});
function binarySearch(list, value, compareFunc) {
  let start = 0;
  let end = list.length - 1;
  let tempIndex = null;
  while (start <= end) {
    tempIndex = Math.floor((start + end) / 2);
    const midValue = list[tempIndex];
    const compareRes = compareFunc(midValue, value);
    if (compareRes === 1) {
      return tempIndex;
    }
    if (compareRes === 2) {
      start = tempIndex + 1;
    } else if (compareRes === 3) {
      end = tempIndex - 1;
    }
  }
  return tempIndex;
}
const { create } = createComponent("list");
const _sfc_main = create({
  props: {
    listData: {
      type: Array,
      default: () => {
        return [];
      }
    },
    bufferSize: {
      type: Number,
      default: 5
    },
    containerHeight: {
      type: Number
    },
    height: {
      type: Number,
      default: 80
    },
    margin: {
      type: Number,
      default: 10
    }
  },
  emits: ["scrollUp", "scrollDown", "scrollBottom"],
  setup(props, { emit }) {
    const clientHeight = document.documentElement.clientHeight || document.body.clientHeight || 667;
    const list = ref(null);
    const phantom = ref(null);
    const actualContent = ref(null);
    const state = reactive({
      start: 0,
      originStartIndex: 0,
      scrollTop: 0,
      list: props.listData.slice(),
      cachePositions: [],
      phantomHeight: props.height * props.listData.length
    });
    const getContainerHeight = computed(() => {
      if (props.containerHeight) {
        return Math.min(props.containerHeight, clientHeight);
      }
      return clientHeight;
    });
    const visibleCount = computed(() => {
      return Math.ceil(getContainerHeight.value / props.height);
    });
    const end = computed(() => {
      return Math.min(state.originStartIndex + visibleCount.value + props.bufferSize, state.list.length);
    });
    const visibleData = computed(() => {
      return state.list.slice(state.start, end.value);
    });
    const getTransform = () => {
      if (actualContent.value) {
        return `translate3d(0, ${state.start >= 1 ? state.cachePositions[state.start - 1].bottom : 0}px, 0)`;
      }
    };
    const initCachedPosition = () => {
      state.cachePositions = [];
      for (let i = 0; i < state.list.length; ++i) {
        state.cachePositions[i] = {
          index: i,
          height: props.height,
          top: i * props.height,
          bottom: (i + 1) * (props.height + props.margin),
          dValue: 0
        };
      }
    };
    const updateCachedPosition = () => {
      let nodes = actualContent.value.childNodes;
      nodes = Array.from(nodes).filter((node) => node.nodeType === 1);
      const start = nodes[0];
      nodes.forEach((node, index2) => {
        if (!node)
          return;
        const rect = useRect(node);
        const { height: height2 } = rect;
        const oldHeight = state.cachePositions[index2 + state.start].height;
        const dValue = oldHeight - height2;
        if (dValue) {
          state.cachePositions[index2 + state.start].bottom -= dValue;
          state.cachePositions[index2 + state.start].height = height2;
          state.cachePositions[index2 + state.start].dValue = dValue;
        }
      });
      let startIndex = 0;
      if (start) {
        startIndex = state.start;
      }
      const cachedPositionsLen = state.cachePositions.length;
      let cumulativeDiffHeight = state.cachePositions[startIndex].dValue;
      state.cachePositions[startIndex].dValue = 0;
      for (let i = startIndex + 1; i < cachedPositionsLen; ++i) {
        const item = state.cachePositions[i];
        state.cachePositions[i].top = state.cachePositions[i - 1].bottom;
        state.cachePositions[i].bottom = state.cachePositions[i].bottom - cumulativeDiffHeight;
        if (item.dValue !== 0) {
          cumulativeDiffHeight += item.dValue;
          item.dValue = 0;
        }
      }
      const height = state.cachePositions[cachedPositionsLen - 1].bottom;
      state.phantomHeight = height;
    };
    const getStartIndex = (scrollTop = 0) => {
      let idx = binarySearch(
        state.cachePositions,
        scrollTop,
        (currentValue, targetValue) => {
          const currentCompareValue = currentValue.bottom;
          if (currentCompareValue === targetValue) {
            return CompareResult.eq;
          }
          if (currentCompareValue < targetValue) {
            return CompareResult.lt;
          }
          return CompareResult.gt;
        }
      );
      const targetItem = state.cachePositions[idx];
      if (targetItem.bottom < scrollTop) {
        idx += 1;
      }
      return idx;
    };
    const resetAllVirtualParam = () => {
      state.originStartIndex = 0;
      state.start = 0;
      state.scrollTop = 0;
      list.value.scrollTop = 0;
      initCachedPosition();
      state.phantomHeight = props.height * state.list.length;
    };
    const handleScrollEvent = () => {
      var _a;
      const scrollTop = (_a = list.value) == null ? void 0 : _a.scrollTop;
      const { originStartIndex } = state;
      const currentIndex = getStartIndex(scrollTop);
      if (currentIndex !== originStartIndex) {
        state.originStartIndex = currentIndex;
        state.start = Math.max(state.originStartIndex - props.bufferSize, 0);
        if (end.value >= state.list.length - 1) {
          emit("scrollBottom");
        }
      }
      emit(scrollTop > state.scrollTop ? "scrollUp" : "scrollDown", scrollTop);
      state.scrollTop = scrollTop;
    };
    initCachedPosition();
    watch(
      () => props.listData,
      (val) => {
        state.list = val.slice();
        if (state.list.length === val.length) {
          initCachedPosition();
          updateCachedPosition();
        } else {
          resetAllVirtualParam();
          return;
        }
      }
    );
    watch(
      () => state.start,
      () => {
        if (actualContent.value && state.list.length > 0) {
          updateCachedPosition();
        }
      }
    );
    return __spreadProps(__spreadValues({}, toRefs(state)), {
      list,
      phantom,
      actualContent,
      getTransform,
      visibleData,
      getContainerHeight,
      handleScrollEvent
    });
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    ref: "list",
    class: "nut-list",
    style: normalizeStyle({ height: `${_ctx.getContainerHeight}px` }),
    onScrollPassive: _cache[0] || (_cache[0] = (...args) => _ctx.handleScrollEvent && _ctx.handleScrollEvent(...args))
  }, [
    createElementVNode("div", {
      ref: "phantom",
      class: "nut-list-phantom",
      style: normalizeStyle({ height: _ctx.phantomHeight + "px" })
    }, null, 4),
    createElementVNode("div", {
      ref: "actualContent",
      class: "nut-list-container",
      style: normalizeStyle({ transform: _ctx.getTransform() })
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.visibleData, (item, index2) => {
        return openBlock(), createElementBlock("div", {
          key: item,
          class: "nut-list-item"
        }, [
          renderSlot(_ctx.$slots, "default", {
            item,
            index: index2 + _ctx.start
          })
        ]);
      }), 128))
    ], 4)
  ], 36);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index as default
};
