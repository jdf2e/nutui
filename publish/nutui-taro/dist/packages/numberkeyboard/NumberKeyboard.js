import { ref, computed, watch, resolveComponent, openBlock, createBlock, withCtx, createElementVNode, createElementBlock, toDisplayString, createTextVNode, createCommentVNode, Fragment, renderList, normalizeClass } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { N as NutPopup } from "../index.taro-V9Ta96_T.js";
import { u as useLocale } from "../index-5sMqqUcW.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
const { create } = createComponent("number-keyboard");
const cN = "NutNumberKeyboard";
const _sfc_main = create({
  components: {
    NutPopup
  },
  props: {
    confirmText: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    visible: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "default"
    },
    customKey: {
      type: Array,
      default: () => []
    },
    modelValue: {
      type: String,
      default: ""
    },
    maxlength: {
      type: [Number, String],
      default: 6
    },
    randomKeys: {
      type: Boolean,
      default: false
    },
    overlay: {
      type: Boolean,
      default: false
    },
    popClass: {
      type: String,
      default: ""
    },
    lockScroll: {
      type: Boolean,
      default: true
    }
  },
  emits: ["input", "delete", "close", "confirm", "update:modelValue", "update:visible"],
  setup(props, { emit }) {
    const translate = useLocale(cN);
    const clickKeyIndex = ref(void 0);
    const show = ref(props.visible);
    const root = ref();
    function defaultKey() {
      const { customKey } = props;
      let object = {
        id: "lock",
        type: "lock"
      };
      let customKeys = Array.isArray(customKey) ? customKey : [customKey];
      if (customKeys.length === 1) {
        object = {
          id: customKeys[0],
          type: "custom"
        };
      }
      return [...getBasicKeys(), object, { id: 0, type: "number" }, { id: "delete", type: "delete" }];
    }
    function getBasicKeys() {
      const keys = [];
      for (let i = 1; i <= 9; i++) {
        keys.push({ id: i, type: "number" });
      }
      if (props.randomKeys) {
        return keys.sort(() => Math.random() > 0.5 ? 1 : -1);
      }
      return keys;
    }
    function genCustomKeys() {
      const keys = getBasicKeys();
      const { customKey } = props;
      let customKeys = Array.isArray(customKey) ? customKey : [customKey];
      if (customKeys.length > 2) {
        customKeys = [customKeys[0], customKeys[1]];
      }
      if (customKeys.length == 2 && props.title && props.type != "rightColumn") {
        customKeys = [customKeys[0]];
      }
      if (customKeys.length === 1) {
        if (props.title && props.type != "rightColumn") {
          keys.push({ id: customKeys[0], type: "custom" }, { id: 0, type: "number" }, { id: "delete", type: "delete" });
        } else {
          keys.push({ id: 0, type: "number" }, { id: customKeys[0], type: "custom" });
        }
      } else if (customKeys.length === 2) {
        keys.push(
          { id: customKeys[0], type: "custom" },
          { id: 0, type: "number" },
          { id: customKeys[1], type: "custom" }
        );
      }
      return keys;
    }
    const keysList = computed(() => {
      if (props.type == "rightColumn" || props.title != "") {
        return genCustomKeys();
      }
      return defaultKey();
    });
    watch(
      () => props.visible,
      (value) => {
        show.value = value;
      }
    );
    function onTouchstart(item, event) {
      event.stopPropagation();
      clickKeyIndex.value = item.id;
      if (item.type == "number" || item.type == "custom") {
        emit("input", item.id);
        if (props.modelValue.length < Number(props.maxlength)) {
          emit("update:modelValue", props.modelValue + item.id);
        }
      }
      if (item.type == "lock") {
        closeBoard();
      }
      if (item.type == "delete") {
        emit("delete");
        emit("update:modelValue", props.modelValue.slice(0, props.modelValue.length - 1));
      }
    }
    function onTouchMove(event) {
      event.stopPropagation();
    }
    function onTouchEnd() {
      clickKeyIndex.value = void 0;
    }
    function closeBoard() {
      emit("update:visible", false);
      emit("close");
    }
    const confirm = () => {
      emit("confirm");
    };
    return {
      clickKeyIndex,
      defaultKey,
      closeBoard,
      confirm,
      onTouchEnd,
      onTouchMove,
      onTouchstart,
      keysList,
      genCustomKeys,
      getBasicKeys,
      root,
      show,
      translate
    };
  }
});
const _hoisted_1 = {
  ref: "root",
  class: "nut-number-keyboard"
};
const _hoisted_2 = {
  key: 0,
  class: "nut-number-keyboard__header"
};
const _hoisted_3 = { class: "nut-number-keyboard__title" };
const _hoisted_4 = { class: "nut-number-keyboard__body" };
const _hoisted_5 = { class: "nut-number-keyboard__keys" };
const _hoisted_6 = ["onTouchstart"];
const _hoisted_7 = {
  key: 1,
  src: "https://img11.360buyimg.com/imagetools/jfs/t1/146371/38/8485/738/5f606425Eca239740/14f4b4f5f20d8a68.png"
};
const _hoisted_8 = {
  key: 2,
  src: "https://img11.360buyimg.com/imagetools/jfs/t1/129395/8/12735/2030/5f61ac37E70cab338/fb477dc11f46056c.png"
};
const _hoisted_9 = {
  key: 0,
  class: "nut-number-keyboard__sidebar"
};
const _hoisted_10 = { class: "nut-key__wrapper" };
const _hoisted_11 = /* @__PURE__ */ createElementVNode("img", { src: "https://img11.360buyimg.com/imagetools/jfs/t1/129395/8/12735/2030/5f61ac37E70cab338/fb477dc11f46056c.png" }, null, -1);
const _hoisted_12 = [
  _hoisted_11
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_nut_popup = resolveComponent("nut-popup");
  return openBlock(), createBlock(_component_nut_popup, {
    visible: _ctx.show,
    "onUpdate:visible": _cache[7] || (_cache[7] = ($event) => _ctx.show = $event),
    position: "bottom",
    "pop-class": _ctx.popClass,
    overlay: _ctx.overlay,
    "overlay-class": "nut-number-keyboard-overlay",
    "lock-scroll": _ctx.lockScroll,
    "catch-move": _ctx.lockScroll,
    onClickOverlay: _cache[8] || (_cache[8] = ($event) => _ctx.closeBoard())
  }, {
    default: withCtx(() => [
      createElementVNode("div", _hoisted_1, [
        _ctx.title ? (openBlock(), createElementBlock("div", _hoisted_2, [
          createElementVNode("h3", _hoisted_3, toDisplayString(_ctx.title), 1),
          createTextVNode(),
          _ctx.type == "default" ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: "nut-number-keyboard__close",
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.closeBoard())
          }, toDisplayString(_ctx.translate("done")), 1)) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        createTextVNode(),
        createElementVNode("div", _hoisted_4, [
          createElementVNode("div", _hoisted_5, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.keysList, (item) => {
              return openBlock(), createElementBlock("div", {
                key: "key" + item.id,
                class: normalizeClass([
                  "nut-key__wrapper",
                  {
                    "nut-key__wrapper--wider": item.id == 0 && _ctx.type == "rightColumn" && Array.isArray(_ctx.customKey) && _ctx.customKey.length == 1
                  }
                ])
              }, [
                createElementVNode("div", {
                  class: normalizeClass([
                    "nut-key",
                    { "nut-key--active": item.id == _ctx.clickKeyIndex },
                    { "nut-key--lock": item.type == "lock" },
                    { "nut-key--delete": item.type == "delete" }
                  ]),
                  onTouchstart: (event) => _ctx.onTouchstart(item, event),
                  onTouchmove: _cache[1] || (_cache[1] = (event) => _ctx.onTouchMove(event)),
                  onTouchend: _cache[2] || (_cache[2] = (...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args))
                }, [
                  item.type == "number" || item.type == "custom" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    createTextVNode(toDisplayString(item.id), 1)
                  ], 64)) : createCommentVNode("", true),
                  createTextVNode(),
                  item.type == "lock" ? (openBlock(), createElementBlock("img", _hoisted_7)) : createCommentVNode("", true),
                  createTextVNode(),
                  item.type == "delete" ? (openBlock(), createElementBlock("img", _hoisted_8)) : createCommentVNode("", true)
                ], 42, _hoisted_6)
              ], 2);
            }), 128))
          ]),
          createTextVNode(),
          _ctx.type == "rightColumn" ? (openBlock(), createElementBlock("div", _hoisted_9, [
            createElementVNode("div", _hoisted_10, [
              createElementVNode("div", {
                class: normalizeClass(["nut-key", { active: _ctx.clickKeyIndex == "delete" }]),
                onTouchstart: _cache[3] || (_cache[3] = (event) => _ctx.onTouchstart({ id: "delete", type: "delete" }, event)),
                onTouchmove: _cache[4] || (_cache[4] = (event) => _ctx.onTouchMove(event)),
                onTouchend: _cache[5] || (_cache[5] = (...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args))
              }, _hoisted_12, 34)
            ]),
            createTextVNode(),
            createElementVNode("div", {
              class: "nut-key__wrapper nut-key__wrapper--finish",
              onClick: _cache[6] || (_cache[6] = (...args) => _ctx.confirm && _ctx.confirm(...args))
            }, [
              createElementVNode("div", {
                class: normalizeClass(["nut-key", "nut-key--finish ", { activeFinsh: _ctx.clickKeyIndex == "finish" }])
              }, toDisplayString(_ctx.confirmText || _ctx.translate("done")), 3)
            ])
          ])) : createCommentVNode("", true)
        ])
      ], 512)
    ]),
    _: 1
  }, 8, ["visible", "pop-class", "overlay", "lock-scroll", "catch-move"]);
}
const index_taro = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index_taro as default
};
