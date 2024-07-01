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
var __restKey = (key) => typeof key === "symbol" ? key : key + "";
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import { computed, ref, watch, resolveComponent, openBlock, createBlock, withCtx, createElementBlock, Fragment, renderList, createElementVNode, normalizeClass, toDisplayString, createCommentVNode, createVNode } from "vue";
import { N as NutPopup, p as popupProps } from "../index-wLaOjIn1.js";
import { c as createComponent } from "../component-DQf3CENX.js";
import { Loading, Checklist } from "@nutui/icons-vue";
import NutTabs from "../tabs/Tabs.js";
import NutTabPane from "../tabpane/TabPane.js";
import { u as useLocale } from "../index-BOB4ytqZ.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
const formatTree = (tree, parent, config) => tree.map((node) => {
  const { value: valueKey = "value", text: textKey = "text", children: childrenKey = "children" } = config;
  const _a = node, { [valueKey]: value, [textKey]: text, [childrenKey]: children } = _a, others = __objRest(_a, [__restKey(valueKey), __restKey(textKey), __restKey(childrenKey)]);
  const newNode = __spreadProps(__spreadValues({
    loading: false
  }, others), {
    level: parent ? (parent && parent.level || 0) + 1 : 0,
    value,
    text,
    children,
    _parent: parent
  });
  if (newNode.children && newNode.children.length) {
    newNode.children = formatTree(newNode.children, newNode, config);
  }
  return newNode;
});
const eachTree = (tree, cb) => {
  let i = 0;
  let node;
  while (node = tree[i++]) {
    if (cb(node) === true) {
      break;
    }
    if (node.children && node.children.length) {
      eachTree(node.children, cb);
    }
  }
};
const defaultConvertConfig = {
  topId: null,
  idKey: "id",
  pidKey: "pid",
  sortKey: ""
};
const convertListToOptions = (list, options) => {
  const mergedOptions = __spreadValues(__spreadValues({}, defaultConvertConfig), options || {});
  const { topId, idKey, pidKey, sortKey } = mergedOptions;
  let result = [];
  let map = {};
  list.forEach((node) => {
    node = __spreadValues({}, node);
    const { [idKey]: id, [pidKey]: pid } = node;
    const children = map[pid] = map[pid] || [];
    if (!result.length && pid === topId) {
      result = children;
    }
    children.push(node);
    node.children = map[id] || (map[id] = []);
  });
  if (sortKey) {
    Object.keys(map).forEach((i) => {
      if (map[i].length > 1) {
        map[i].sort((a, b) => a[sortKey] - b[sortKey]);
      }
    });
  }
  map = null;
  return result;
};
class Tree {
  constructor(nodes, config) {
    __publicField(this, "nodes");
    __publicField(this, "config");
    this.config = __spreadValues({
      value: "value",
      text: "text",
      children: "children"
    }, config || {});
    this.nodes = formatTree(nodes, null, this.config);
  }
  updateChildren(nodes, parent) {
    if (!parent) {
      this.nodes = formatTree(nodes, null, this.config);
    } else {
      parent.children = formatTree(nodes, parent, this.config);
    }
  }
  // for test
  getNodeByValue(value) {
    let foundNode;
    eachTree(this.nodes, (node) => {
      if (node.value === value) {
        foundNode = node;
        return true;
      }
    });
    return foundNode;
  }
  getPathNodesByValue(value) {
    if (!value.length) {
      return [];
    }
    const pathNodes = [];
    let currentNodes = this.nodes;
    while (currentNodes && currentNodes.length) {
      const foundNode = currentNodes.find((node) => node.value === value[node.level]);
      if (!foundNode) {
        break;
      }
      pathNodes.push(foundNode);
      currentNodes = foundNode.children;
    }
    return pathNodes;
  }
  isLeaf(node, lazy) {
    const { leaf, children } = node;
    const hasChildren = Array.isArray(children) && Boolean(children.length);
    return leaf || !hasChildren && !lazy;
  }
  hasChildren(node, lazy) {
    const isLeaf = this.isLeaf(node, lazy);
    if (isLeaf) {
      return false;
    }
    const { children } = node;
    return Array.isArray(children) && Boolean(children.length);
  }
}
const { create: create$1 } = createComponent("cascader-item");
const _sfc_main$1 = create$1({
  components: {
    Loading,
    Checklist,
    NutTabs,
    NutTabPane
  },
  props: {
    visible: Boolean,
    modelValue: Array,
    options: {
      type: Array,
      default: () => []
    },
    lazy: Boolean,
    lazyLoad: Function,
    valueKey: {
      type: String,
      default: "value"
    },
    textKey: {
      type: String,
      default: "text"
    },
    childrenKey: {
      type: String,
      default: "children"
    },
    convertConfig: Object
  },
  emits: ["update:modelValue", "change", "pathChange"],
  setup(props, { emit }) {
    const translate = useLocale();
    const configs = computed(() => ({
      lazy: props.lazy,
      lazyLoad: props.lazyLoad,
      valueKey: props.valueKey,
      textKey: props.textKey,
      childrenKey: props.childrenKey,
      convertConfig: props.convertConfig
    }));
    const tabsCursor = ref(0);
    const initLoading = ref(false);
    const innerValue = ref(props.modelValue);
    const tree = ref(new Tree([], {}));
    const panes = ref([]);
    const isLazy = computed(() => configs.value.lazy && Boolean(configs.value.lazyLoad));
    const lazyLoadMap = /* @__PURE__ */ new Map();
    let currentProcessNode;
    const init = () => __async(this, null, function* () {
      lazyLoadMap.clear();
      panes.value = [];
      tabsCursor.value = 0;
      initLoading.value = false;
      currentProcessNode = null;
      let { options } = props;
      if (configs.value.convertConfig) {
        options = convertListToOptions(options, configs.value.convertConfig);
      }
      tree.value = new Tree(options, {
        value: configs.value.valueKey,
        text: configs.value.textKey,
        children: configs.value.childrenKey
      });
      if (isLazy.value && !tree.value.nodes.length) {
        yield invokeLazyLoad({
          root: true,
          loading: true,
          text: "",
          value: ""
        });
      }
      panes.value = [{ nodes: tree.value.nodes, selectedNode: null }];
      syncValue();
    });
    const syncValue = () => __async(this, null, function* () {
      const currentValue = innerValue.value;
      if (currentValue === void 0 || !tree.value.nodes.length) {
        return;
      }
      if (currentValue.length === 0) {
        tabsCursor.value = 0;
        panes.value = [{ nodes: tree.value.nodes, selectedNode: null }];
        return;
      }
      let needToSync = currentValue;
      if (isLazy.value && Array.isArray(currentValue) && currentValue.length) {
        needToSync = [];
        let parent = tree.value.nodes.find((node) => node.value === currentValue[0]);
        if (parent) {
          needToSync = [parent.value];
          initLoading.value = true;
          const last = yield currentValue.slice(1).reduce((p, value) => __async(this, null, function* () {
            var _a2;
            const parent2 = yield p;
            yield invokeLazyLoad(parent2);
            const node = (_a2 = parent2 == null ? void 0 : parent2.children) == null ? void 0 : _a2.find((item) => item.value === value);
            if (node) {
              needToSync.push(value);
            }
            return Promise.resolve(node);
          }), Promise.resolve(parent));
          yield invokeLazyLoad(last);
          initLoading.value = false;
        }
      }
      if (needToSync.length && currentValue === props.modelValue) {
        const pathNodes = tree.value.getPathNodesByValue(needToSync);
        pathNodes.map((node, index2) => {
          tabsCursor.value = index2;
          methods.handleNode(node, true);
        });
      }
    });
    const invokeLazyLoad = (node) => __async(this, null, function* () {
      if (!node) {
        return;
      }
      if (!configs.value.lazyLoad) {
        node.leaf = true;
        return;
      }
      if (tree.value.isLeaf(node, isLazy.value) || tree.value.hasChildren(node, isLazy.value)) {
        return;
      }
      node.loading = true;
      const parent = node.root ? null : node;
      let lazyLoadPromise = lazyLoadMap.get(node);
      if (!lazyLoadPromise) {
        lazyLoadPromise = new Promise((resolve) => {
          var _a2, _b;
          (_b = (_a2 = configs.value).lazyLoad) == null ? void 0 : _b.call(_a2, node, resolve);
        });
        lazyLoadMap.set(node, lazyLoadPromise);
      }
      const nodes = yield lazyLoadPromise;
      if (Array.isArray(nodes) && nodes.length > 0) {
        tree.value.updateChildren(nodes, parent);
      } else {
        node.leaf = true;
      }
      node.loading = false;
      lazyLoadMap.delete(node);
    });
    const emitChange = (pathNodes) => {
      const emitValue = pathNodes.map((node) => node.value);
      innerValue.value = emitValue;
      emit("change", emitValue, pathNodes);
      emit("update:modelValue", emitValue, pathNodes);
    };
    const methods = {
      // 选中一个节点，静默模式不触发事件
      handleNode(node, silent) {
        return __async(this, null, function* () {
          const { disabled, loading } = node;
          if (!silent && disabled || !panes.value[tabsCursor.value]) {
            return;
          }
          if (tree.value.isLeaf(node, isLazy.value)) {
            node.leaf = true;
            panes.value[tabsCursor.value].selectedNode = node;
            panes.value = panes.value.slice(0, node.level + 1);
            if (!silent) {
              const pathNodes = panes.value.map((pane) => pane.selectedNode);
              emitChange(pathNodes);
              emit("pathChange", pathNodes);
            }
            return;
          }
          if (tree.value.hasChildren(node, isLazy.value)) {
            const level = node.level + 1;
            panes.value[tabsCursor.value].selectedNode = node;
            panes.value = panes.value.slice(0, level);
            panes.value.push({
              nodes: node.children || [],
              selectedNode: null
            });
            tabsCursor.value = level;
            if (!silent) {
              const pathNodes = panes.value.map((pane) => pane.selectedNode);
              emit("pathChange", pathNodes);
            }
            return;
          }
          currentProcessNode = node;
          if (loading) {
            return;
          }
          yield invokeLazyLoad(node);
          if (currentProcessNode === node) {
            panes.value[tabsCursor.value].selectedNode = node;
            methods.handleNode(node, silent);
          }
        });
      },
      handleTabClick(tab) {
        currentProcessNode = null;
        tabsCursor.value = Number(tab.paneKey);
      },
      formatTabTitle(pane) {
        return pane.selectedNode ? pane.selectedNode.text : translate("select");
      },
      isSelected(pane, node) {
        var _a2;
        return ((_a2 = pane == null ? void 0 : pane.selectedNode) == null ? void 0 : _a2.value) === node.value;
      }
    };
    watch(
      [configs, () => props.options],
      () => {
        init();
      },
      {
        deep: true,
        immediate: true
      }
    );
    watch(
      () => props.modelValue,
      (value) => {
        if (value !== innerValue.value) {
          innerValue.value = value;
          syncValue();
        }
      }
    );
    watch(
      () => props.visible,
      (val) => {
        if (val && Array.isArray(innerValue.value) && innerValue.value.length > 0) {
          syncValue();
        }
      }
    );
    return __spreadValues({ panes, initLoading, tabsCursor }, methods);
  }
});
const _hoisted_1$1 = {
  role: "menu",
  class: "nut-cascader-pane"
};
const _hoisted_2 = ["aria-checked", "aria-disabled", "onClick"];
const _hoisted_3 = { class: "nut-cascader-item__title" };
const _hoisted_4 = /* @__PURE__ */ createElementVNode("view", { class: "nut-cascader-pane" }, null, -1);
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Loading = resolveComponent("Loading");
  const _component_Checklist = resolveComponent("Checklist");
  const _component_nut_tab_pane = resolveComponent("nut-tab-pane");
  const _component_nut_tabs = resolveComponent("nut-tabs");
  return openBlock(), createBlock(_component_nut_tabs, {
    modelValue: _ctx.tabsCursor,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.tabsCursor = $event),
    class: "nut-cascader",
    "title-scroll": "",
    onClick: _ctx.handleTabClick
  }, {
    default: withCtx(() => [
      !_ctx.initLoading && _ctx.panes.length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(_ctx.panes, (pane, index2) => {
        return openBlock(), createBlock(_component_nut_tab_pane, {
          key: index2,
          title: _ctx.formatTabTitle(pane)
        }, {
          default: withCtx(() => [
            createElementVNode("view", _hoisted_1$1, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(pane.nodes, (node) => {
                return openBlock(), createElementBlock("view", {
                  key: node.value,
                  class: normalizeClass(["nut-cascader-item", { active: _ctx.isSelected(pane, node), disabled: node.disabled }]),
                  "aria-checked": _ctx.isSelected(pane, node),
                  "aria-disabled": node.disabled || void 0,
                  role: "menuitemradio",
                  onClick: ($event) => _ctx.handleNode(node, false)
                }, [
                  createElementVNode("view", _hoisted_3, toDisplayString(node.text), 1),
                  node.loading ? (openBlock(), createBlock(_component_Loading, {
                    key: 0,
                    class: "nut-cascader-item__icon-loading",
                    name: "loading"
                  })) : (openBlock(), createBlock(_component_Checklist, {
                    key: 1,
                    class: "nut-cascader-item__icon-check",
                    name: "checklist"
                  }))
                ], 10, _hoisted_2);
              }), 128))
            ])
          ]),
          _: 2
        }, 1032, ["title"]);
      }), 128)) : (openBlock(), createBlock(_component_nut_tab_pane, {
        key: 1,
        title: "Loading..."
      }, {
        default: withCtx(() => [
          _hoisted_4
        ]),
        _: 1
      }))
    ]),
    _: 1
  }, 8, ["modelValue", "onClick"]);
}
const NutCascaderItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const { create } = createComponent("cascader");
const _sfc_main = create({
  components: {
    NutCascaderItem,
    NutPopup
  },
  props: __spreadProps(__spreadValues({}, popupProps), {
    modelValue: Array,
    visible: Boolean,
    title: String,
    options: {
      type: Array,
      default: () => []
    },
    lazy: Boolean,
    lazyLoad: Function,
    valueKey: {
      type: String,
      default: "value"
    },
    textKey: {
      type: String,
      default: "text"
    },
    childrenKey: {
      type: String,
      default: "children"
    },
    poppable: {
      type: Boolean,
      default: true
    },
    convertConfig: Object
  }),
  emits: ["update:modelValue", "change", "pathChange", "update:visible"],
  setup(props, { emit }) {
    const innerValue = ref(props.modelValue);
    const innerVisible = computed({
      get() {
        return props.visible;
      },
      set(value) {
        emit("update:visible", value);
      }
    });
    const onChange = (value, pathNodes) => {
      innerValue.value = value;
      innerVisible.value = false;
      emit("change", value, pathNodes);
      emit("update:modelValue", value);
    };
    const onPathChange = (pathNodes) => {
      emit("pathChange", pathNodes);
    };
    watch(
      () => props.modelValue,
      (value) => {
        if (value !== innerValue.value) {
          innerValue.value = value;
        }
      }
    );
    return {
      onChange,
      onPathChange,
      innerValue,
      innerVisible
    };
  }
});
const _hoisted_1 = ["innerHTML"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_nut_cascader_item = resolveComponent("nut-cascader-item");
  const _component_nut_popup = resolveComponent("nut-popup");
  return _ctx.poppable ? (openBlock(), createBlock(_component_nut_popup, {
    key: 0,
    visible: _ctx.innerVisible,
    "onUpdate:visible": _cache[0] || (_cache[0] = ($event) => _ctx.innerVisible = $event),
    position: "bottom",
    "pop-class": "nut-cascader__popup",
    round: "",
    closeable: _ctx.closeable,
    "destroy-on-close": false,
    "close-icon-position": _ctx.closeIconPosition,
    "z-index": _ctx.zIndex
  }, {
    default: withCtx(() => [
      _ctx.title ? (openBlock(), createElementBlock("view", {
        key: 0,
        class: "nut-cascader__bar",
        innerHTML: _ctx.title
      }, null, 8, _hoisted_1)) : createCommentVNode("", true),
      createVNode(_component_nut_cascader_item, {
        "model-value": _ctx.innerValue,
        options: _ctx.options,
        lazy: _ctx.lazy,
        "lazy-load": _ctx.lazyLoad,
        "value-key": _ctx.valueKey,
        "text-key": _ctx.textKey,
        "children-key": _ctx.childrenKey,
        "convert-config": _ctx.convertConfig,
        visible: _ctx.innerVisible,
        onChange: _ctx.onChange,
        onPathChange: _ctx.onPathChange
      }, null, 8, ["model-value", "options", "lazy", "lazy-load", "value-key", "text-key", "children-key", "convert-config", "visible", "onChange", "onPathChange"])
    ]),
    _: 1
  }, 8, ["visible", "closeable", "close-icon-position", "z-index"])) : (openBlock(), createBlock(_component_nut_cascader_item, {
    key: 1,
    "model-value": _ctx.innerValue,
    options: _ctx.options,
    lazy: _ctx.lazy,
    "lazy-load": _ctx.lazyLoad,
    "value-key": _ctx.valueKey,
    "text-key": _ctx.textKey,
    "children-key": _ctx.childrenKey,
    "convert-config": _ctx.convertConfig,
    visible: _ctx.innerVisible,
    onChange: _ctx.onChange,
    onPathChange: _ctx.onPathChange
  }, null, 8, ["model-value", "options", "lazy", "lazy-load", "value-key", "text-key", "children-key", "convert-config", "visible", "onChange", "onPathChange"]));
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index as default
};
