import { resolveComponent, openBlock, createElementBlock, createElementVNode, createTextVNode, renderSlot, createBlock, createCommentVNode, toDisplayString, ref, watch, onMounted, Fragment, renderList, normalizeClass, createVNode, withCtx, createSlots } from "vue";
import { Price as _sfc_main$5 } from "../price/Price.js";
import { c as createComponent } from "../component-DQf3CENX.js";
import { u as useLocale } from "../index-5sMqqUcW.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
import { InputNumber as _sfc_main$6 } from "../inputnumber/InputNumber.js";
import { N as NutPopup } from "../index.taro-V9Ta96_T.js";
import { _ as _sfc_main$7 } from "../index.taro.vue_vue_type_script_setup_true_lang-JJ7hr71Y.js";
const { create: create$4 } = createComponent("sku-header");
const cN$1 = "NutSkuHeader";
const _sfc_main$4 = create$4({
  props: {
    goods: {
      type: Object,
      default: {}
    }
  },
  components: {
    NutPrice: _sfc_main$5
  },
  setup(props, { slots }) {
    const translate = useLocale(cN$1);
    const getSlots = (name) => slots[name];
    return {
      getSlots,
      translate
    };
  }
});
const _hoisted_1$4 = { class: "nut-sku-header" };
const _hoisted_2$3 = ["src"];
const _hoisted_3$3 = { class: "nut-sku-header-right" };
const _hoisted_4$3 = {
  key: 3,
  class: "nut-sku-header-right-extra"
};
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_nut_price = resolveComponent("nut-price");
  return openBlock(), createElementBlock("view", _hoisted_1$4, [
    createElementVNode("img", {
      class: "nut-sku-header-img",
      src: _ctx.goods.imagePath
    }, null, 8, _hoisted_2$3),
    createTextVNode(),
    createElementVNode("view", _hoisted_3$3, [
      _ctx.getSlots("sku-header-price") ? renderSlot(_ctx.$slots, "sku-header-price", { key: 0 }) : (openBlock(), createBlock(_component_nut_price, {
        key: 1,
        price: _ctx.goods.price,
        "need-symbol": true,
        thousands: false
      }, null, 8, ["price"])),
      createTextVNode(),
      _ctx.getSlots("sku-header-extra") ? renderSlot(_ctx.$slots, "sku-header-extra", { key: 2 }) : createCommentVNode("", true),
      createTextVNode(),
      _ctx.goods.skuId && !_ctx.getSlots("sku-header-extra") ? (openBlock(), createElementBlock("view", _hoisted_4$3, toDisplayString(_ctx.translate("skuId")) + " : " + toDisplayString(_ctx.goods.skuId), 1)) : createCommentVNode("", true)
    ])
  ]);
}
const SkuHeader = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
const { create: create$3 } = createComponent("sku-select");
const _sfc_main$3 = create$3({
  props: {
    sku: {
      type: Array,
      default: () => []
    }
  },
  emits: ["selectSku"],
  setup(props, { emit }) {
    const skuInfo = ref([]);
    watch(
      () => props.sku,
      (value) => {
        skuInfo.value = [].slice.call(value);
      },
      { deep: true }
    );
    onMounted(() => {
      if (props.sku.length > 0) {
        skuInfo.value = [].slice.call(props.sku);
      }
    });
    const changeSaleChild = (attrItem, index, parentItem, parentIndex) => {
      if (attrItem.checkFlag || attrItem.disable) {
        return;
      }
      emit("selectSku", {
        sku: attrItem,
        skuIndex: index,
        parentSku: parentItem,
        parentIndex
      });
    };
    return {
      skuInfo,
      changeSaleChild
    };
  }
});
const _hoisted_1$3 = { class: "nut-sku-select" };
const _hoisted_2$2 = { class: "nut-sku-select-item-title" };
const _hoisted_3$2 = { class: "nut-sku-select-item-skus" };
const _hoisted_4$2 = ["onClick"];
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", _hoisted_1$3, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.skuInfo, (item, index) => {
      return openBlock(), createElementBlock("view", {
        key: item.id,
        class: "nut-sku-select-item"
      }, [
        createElementVNode("view", _hoisted_2$2, toDisplayString(item.name), 1),
        createTextVNode(),
        createElementVNode("view", _hoisted_3$2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(item.list, (itemAttr, itemAttrIndex) => {
            return openBlock(), createElementBlock("view", {
              key: itemAttr.name,
              class: normalizeClass(["nut-sku-select-item-skus-sku", [{ active: !itemAttr.disable && itemAttr.active }, { disable: itemAttr.disable }]]),
              onClick: ($event) => _ctx.changeSaleChild(itemAttr, itemAttrIndex, item, index)
            }, toDisplayString(itemAttr.name), 11, _hoisted_4$2);
          }), 128))
        ])
      ]);
    }), 128))
  ]);
}
const SkuSelect = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
const { create: create$2 } = createComponent("sku-stepper");
const _sfc_main$2 = create$2({
  props: {
    // 购买数量最大值
    stepperMax: {
      type: [Number, String],
      default: 99999
    },
    stepperMin: {
      type: [Number, String],
      default: 1
    },
    // stepper 前文案提示
    stepperExtraText: {
      type: [Function, Boolean],
      default: false
    },
    // 数量选择左侧文案
    stepperTitle: {
      type: String,
      default: "购买数量"
    }
  },
  emits: ["click", "changeSku", "changeStepper", "clickBtnOptions", "overLimit", "reduce", "add"],
  components: {
    NutInputNumber: _sfc_main$6
  },
  setup(props, { emit }) {
    const goodsCount = ref(props.stepperMin);
    onMounted(() => {
      goodsCount.value = props.stepperMin;
    });
    const getExtraText = () => {
      const { stepperExtraText } = props;
      if (stepperExtraText) {
        if (stepperExtraText === true) {
          return "";
        }
        return stepperExtraText == null ? void 0 : stepperExtraText();
      }
    };
    const add = (value) => {
      emit("add", value);
    };
    const reduce = (value) => {
      emit("reduce", value);
    };
    const overlimit = (e, action) => {
      emit("overLimit", {
        action,
        value: parseInt(goodsCount.value + "")
      });
    };
    const changeStepper = (value) => {
      goodsCount.value = value;
      emit("changeStepper", value);
    };
    return {
      goodsCount,
      add,
      reduce,
      overlimit,
      getExtraText,
      changeStepper
    };
  }
});
const _hoisted_1$2 = { class: "nut-sku-stepper" };
const _hoisted_2$1 = { class: "nut-sku-stepper-title" };
const _hoisted_3$1 = ["innerHTML"];
const _hoisted_4$1 = { class: "nut-sku-stepper-count" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_nut_input_number = resolveComponent("nut-input-number");
  return openBlock(), createElementBlock("view", _hoisted_1$2, [
    createElementVNode("view", _hoisted_2$1, toDisplayString(_ctx.stepperTitle), 1),
    createTextVNode(),
    createElementVNode("view", {
      class: "nut-sku-stepper-limit",
      innerHTML: _ctx.getExtraText()
    }, null, 8, _hoisted_3$1),
    createTextVNode(),
    createElementVNode("view", _hoisted_4$1, [
      createVNode(_component_nut_input_number, {
        modelValue: _ctx.goodsCount,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.goodsCount = $event),
        min: _ctx.stepperMin,
        max: _ctx.stepperMax,
        onAdd: _ctx.add,
        onReduce: _ctx.reduce,
        onOverlimit: _ctx.overlimit,
        onChange: _ctx.changeStepper
      }, null, 8, ["modelValue", "min", "max", "onAdd", "onReduce", "onOverlimit", "onChange"])
    ])
  ]);
}
const SkuStepper = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const { create: create$1 } = createComponent("sku-operate");
const _sfc_main$1 = create$1({
  props: {
    // 底部按钮配置  confirm cart  buy
    btnOptions: {
      type: Array,
      default: () => ["confirm"]
    },
    btnExtraText: {
      type: String,
      default: ""
    },
    // 立即购买文案
    buyText: {
      type: String,
      default: "立即购买"
    },
    // 加入购物车文案
    addCartText: {
      type: String,
      default: "加入购物车"
    },
    confirmText: {
      type: String,
      default: "确定"
    }
  },
  emits: ["click", "changeSku", "changeBuyCount", "clickBtnOperate"],
  setup(props, { emit, slots }) {
    const getBtnDesc = (type) => {
      let mapD = {
        confirm: props.confirmText,
        cart: props.addCartText,
        buy: props.buyText
      };
      return mapD[type];
    };
    const getSlots = (name) => slots[name];
    const clickBtnOperate = (btn) => {
      emit("clickBtnOperate", btn);
    };
    return {
      getBtnDesc,
      clickBtnOperate,
      getSlots
    };
  }
});
const _hoisted_1$1 = {
  key: 0,
  class: "nut-sku-operate"
};
const _hoisted_2 = {
  key: 0,
  class: "nut-sku-operate-desc"
};
const _hoisted_3 = {
  key: 1,
  class: "nut-sku-operate-btn"
};
const _hoisted_4 = ["onClick"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.btnOptions.length > 0 ? (openBlock(), createElementBlock("view", _hoisted_1$1, [
    _ctx.btnExtraText ? (openBlock(), createElementBlock("view", _hoisted_2, toDisplayString(_ctx.btnExtraText), 1)) : createCommentVNode("", true),
    createTextVNode(),
    renderSlot(_ctx.$slots, "operate-btn"),
    createTextVNode(),
    !_ctx.getSlots("operate-btn") ? (openBlock(), createElementBlock("view", _hoisted_3, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.btnOptions, (btn, i) => {
        return openBlock(), createElementBlock("view", {
          key: i,
          class: normalizeClass([`nut-sku-operate-btn-${btn}`, "nut-sku-operate-btn-item"]),
          onClick: ($event) => _ctx.clickBtnOperate(btn)
        }, toDisplayString(_ctx.getBtnDesc(btn)), 11, _hoisted_4);
      }), 128))
    ])) : createCommentVNode("", true)
  ])) : createCommentVNode("", true);
}
const SkuOperate = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const { create } = createComponent("sku");
const cN = "NutSku";
const _sfc_main = create({
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    sku: {
      type: Array,
      default: []
    },
    goods: {
      type: Object,
      default: {}
    },
    // stepper 最大值
    stepperMax: {
      type: [Number, String],
      default: 99999
    },
    // stepper 最小值
    stepperMin: {
      type: [Number, String],
      default: 1
    },
    // 底部按钮配置  confirm cart  buy
    btnOptions: {
      type: Array,
      default: () => ["confirm"]
    },
    // 数量选择左侧文案
    stepperTitle: {
      type: String,
      default: ""
    },
    // stepper 前面文案
    stepperExtraText: {
      type: [Function, Boolean],
      default: false
    },
    btnExtraText: {
      type: String,
      default: ""
    },
    // 立即购买文案
    buyText: {
      type: String,
      default: ""
    },
    // 加入购物车文案
    addCartText: {
      type: String,
      default: ""
    },
    // 确定文案
    confirmText: {
      type: String,
      default: ""
    },
    lockScroll: {
      type: Boolean,
      default: true
    }
  },
  emits: [
    "update:visible",
    "selectSku",
    "changeStepper",
    "clickBtnOperate",
    "clickCloseIcon",
    "clickOverlay",
    "close",
    "reduce",
    "add",
    "overLimit"
  ],
  components: {
    SkuHeader,
    SkuSelect,
    SkuStepper,
    SkuOperate,
    NutPopup,
    NutScrollView: _sfc_main$7
  },
  setup(props, { emit, slots }) {
    const translate = useLocale(cN);
    const showPopup = ref(props.visible);
    const goodsCount = ref(props.stepperMin);
    watch(
      () => props.visible,
      (value) => {
        showPopup.value = value;
      }
    );
    watch(
      () => showPopup.value,
      (value) => {
        if (value == false) {
          close();
        }
      }
    );
    const getSlots = (name) => slots[name];
    const selectSku = (skus) => {
      emit("selectSku", skus);
    };
    const changeStepper = (value) => {
      goodsCount.value = value;
      emit("changeStepper", value);
    };
    const add = (value) => {
      emit("add", value);
    };
    const reduce = (value) => {
      emit("reduce", value);
    };
    const stepperOverLimit = (count) => {
      emit("overLimit", count);
    };
    const clickBtnOperate = (btn) => {
      emit("clickBtnOperate", {
        type: btn,
        value: goodsCount.value
      });
    };
    const closePopup = (type) => {
      if (type == "icon") {
        emit("clickCloseIcon");
      }
      if (type == "overlay") {
        emit("clickOverlay");
      }
      if (type == "close") {
        emit("close");
      }
      showPopup.value = false;
    };
    const close = () => {
      emit("update:visible", false);
    };
    return {
      showPopup,
      closePopup,
      selectSku,
      changeStepper,
      stepperOverLimit,
      clickBtnOperate,
      add,
      reduce,
      getSlots,
      translate
    };
  }
});
const _hoisted_1 = { class: "nut-sku" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_sku_header = resolveComponent("sku-header");
  const _component_SkuSelect = resolveComponent("SkuSelect");
  const _component_sku_stepper = resolveComponent("sku-stepper");
  const _component_nut_scroll_view = resolveComponent("nut-scroll-view");
  const _component_sku_operate = resolveComponent("sku-operate");
  const _component_nut_popup = resolveComponent("nut-popup");
  return openBlock(), createBlock(_component_nut_popup, {
    visible: _ctx.showPopup,
    "onUpdate:visible": _cache[0] || (_cache[0] = ($event) => _ctx.showPopup = $event),
    position: "bottom",
    closeable: "",
    round: "",
    style: { "height": "75%" },
    "lock-scroll": _ctx.lockScroll,
    "catch-move": _ctx.lockScroll,
    onClickCloseIcon: _cache[1] || (_cache[1] = ($event) => _ctx.closePopup("icon")),
    onClickOverlay: _cache[2] || (_cache[2] = ($event) => _ctx.closePopup("overlay")),
    onClose: _cache[3] || (_cache[3] = ($event) => _ctx.closePopup("close"))
  }, {
    default: withCtx(() => [
      createElementVNode("view", _hoisted_1, [
        renderSlot(_ctx.$slots, "sku-header"),
        createTextVNode(),
        !_ctx.getSlots("sku-header") ? (openBlock(), createBlock(_component_sku_header, {
          key: 0,
          goods: _ctx.goods
        }, createSlots({ _: 2 }, [
          _ctx.getSlots("sku-header-price") ? {
            name: "sku-header-price",
            fn: withCtx(() => [
              renderSlot(_ctx.$slots, "sku-header-price")
            ]),
            key: "0"
          } : void 0,
          _ctx.getSlots("sku-header-extra") ? {
            name: "sku-header-extra",
            fn: withCtx(() => [
              renderSlot(_ctx.$slots, "sku-header-extra")
            ]),
            key: "1"
          } : void 0
        ]), 1032, ["goods"])) : createCommentVNode("", true),
        createTextVNode(),
        createVNode(_component_nut_scroll_view, {
          class: "nut-sku-content",
          "scroll-y": true
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "sku-select-top"),
            createTextVNode(),
            renderSlot(_ctx.$slots, "sku-select"),
            createTextVNode(),
            !_ctx.getSlots("sku-select") ? (openBlock(), createBlock(_component_SkuSelect, {
              key: 0,
              sku: _ctx.sku,
              onSelectSku: _ctx.selectSku
            }, null, 8, ["sku", "onSelectSku"])) : createCommentVNode("", true),
            createTextVNode(),
            renderSlot(_ctx.$slots, "sku-stepper"),
            createTextVNode(),
            !_ctx.getSlots("sku-stepper") ? (openBlock(), createBlock(_component_sku_stepper, {
              key: 1,
              goods: _ctx.goods,
              "stepper-title": _ctx.stepperTitle || _ctx.translate("buyNumber"),
              "stepper-max": _ctx.stepperMax,
              "stepper-min": _ctx.stepperMin,
              "stepper-extra-text": _ctx.stepperExtraText,
              onAdd: _ctx.add,
              onReduce: _ctx.reduce,
              onChangeStepper: _ctx.changeStepper,
              onOverLimit: _ctx.stepperOverLimit
            }, null, 8, ["goods", "stepper-title", "stepper-max", "stepper-min", "stepper-extra-text", "onAdd", "onReduce", "onChangeStepper", "onOverLimit"])) : createCommentVNode("", true),
            createTextVNode(),
            renderSlot(_ctx.$slots, "sku-stepper-bottom")
          ]),
          _: 3
        }),
        createTextVNode(),
        createVNode(_component_sku_operate, {
          "btn-extra-text": _ctx.btnExtraText,
          "btn-options": _ctx.btnOptions,
          "buy-text": _ctx.buyText || _ctx.translate("buyNow"),
          "add-cart-text": _ctx.addCartText || _ctx.translate("addToCart"),
          "confirm-text": _ctx.confirmText || _ctx.translate("confirm"),
          onClickBtnOperate: _ctx.clickBtnOperate
        }, createSlots({ _: 2 }, [
          _ctx.getSlots("sku-operate") ? {
            name: "operate-btn",
            fn: withCtx(() => [
              renderSlot(_ctx.$slots, "sku-operate")
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["btn-extra-text", "btn-options", "buy-text", "add-cart-text", "confirm-text", "onClickBtnOperate"])
      ])
    ]),
    _: 3
  }, 8, ["visible", "lock-scroll", "catch-move"]);
}
const index_taro = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index_taro as default
};
