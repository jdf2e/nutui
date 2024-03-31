import { ref, watch, resolveComponent, openBlock, createElementBlock, createElementVNode, toDisplayString, createTextVNode, Fragment, renderList, normalizeClass, withDirectives, vModelText, createVNode } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { InputNumber as _sfc_main$1 } from "../inputnumber/InputNumber.js";
import { u as useLocale } from "../index-5sMqqUcW.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
const { create } = createComponent("ecard");
const cN = "NutEcard";
const _sfc_main = create({
  components: {
    NutInputNumber: _sfc_main$1
  },
  props: {
    chooseText: {
      type: String,
      default: ""
    },
    otherValueText: {
      type: String,
      default: ""
    },
    dataList: {
      type: Array,
      default: () => []
    },
    cardAmountMin: {
      type: Number,
      default: 1
    },
    cardAmountMax: {
      type: Number,
      default: 9999
    },
    cardBuyMin: {
      type: Number,
      default: 1
    },
    cardBuyMax: {
      type: Number,
      default: 9999
    },
    modelValue: {
      type: [Number, String],
      default: 0
    },
    placeholder: {
      type: String,
      default: ""
    },
    suffix: {
      type: String,
      default: "¥"
    }
  },
  emits: ["inputChange", "changeStep", "inputClick", "change", "update:modelValue"],
  setup(props, { emit }) {
    const translate = useLocale(cN);
    const currentIndex = ref(null);
    const currentValue = ref(null);
    const inputValue = ref();
    const stepValue = ref(props.cardAmountMin);
    const money = ref(props.modelValue);
    const handleClick = (item, index) => {
      currentIndex.value = index;
      inputValue.value = "";
      stepValue.value = props.cardAmountMin;
      currentValue.value = item.price;
      emit("change", item);
    };
    const change = (event) => {
      let input = event.target;
      let val = input.value.replace(/[^\d]/g, "");
      inputValue.value = val;
      currentValue.value = val;
      if (Number(val) > props.cardAmountMax) {
        inputValue.value = props.cardAmountMax;
        currentValue.value = props.cardAmountMax;
      }
      if (Number(val) < props.cardAmountMin) {
        inputValue.value = props.cardAmountMin;
        currentValue.value = props.cardAmountMin;
      }
      emit("inputChange", Number(inputValue.value));
    };
    const inputClick = () => {
      currentIndex.value = "input";
      stepValue.value = props.cardAmountMin;
      emit("update:modelValue", 0);
      emit("inputClick");
    };
    const changeStep = (value) => {
      stepValue.value = value;
      emit("changeStep", stepValue.value, currentValue.value);
    };
    watch(
      () => props.modelValue,
      (value) => {
        money.value = value;
      }
    );
    return {
      handleClick,
      changeStep,
      change,
      inputClick,
      stepValue,
      currentIndex,
      inputValue,
      money,
      translate
    };
  }
});
const _hoisted_1 = { class: "nut-ecard" };
const _hoisted_2 = { class: "nut-ecard__title" };
const _hoisted_3 = { class: "nut-ecard__list" };
const _hoisted_4 = ["onClick"];
const _hoisted_5 = { class: "nut-ecard__list__input--con" };
const _hoisted_6 = ["placeholder"];
const _hoisted_7 = { class: "nut-ecard__list__step" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_nut_input_number = resolveComponent("nut-input-number");
  return openBlock(), createElementBlock("view", _hoisted_1, [
    createElementVNode("view", _hoisted_2, toDisplayString(_ctx.chooseText || _ctx.translate("chooseText")), 1),
    createTextVNode(),
    createElementVNode("view", _hoisted_3, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.dataList, (item, index) => {
        return openBlock(), createElementBlock("view", {
          key: index,
          class: normalizeClass(["nut-ecard__list__item", _ctx.currentIndex == index ? "active" : ""]),
          onClick: ($event) => _ctx.handleClick(item, index)
        }, toDisplayString(item.price), 11, _hoisted_4);
      }), 128)),
      createTextVNode(),
      createElementVNode("view", {
        class: normalizeClass(["nut-ecard__list__input", _ctx.currentIndex == "input" ? "active" : ""]),
        onClick: _cache[2] || (_cache[2] = (...args) => _ctx.inputClick && _ctx.inputClick(...args))
      }, [
        createElementVNode("view", null, toDisplayString(_ctx.otherValueText || _ctx.translate("otherValueText")), 1),
        createTextVNode(),
        createElementVNode("view", _hoisted_5, [
          withDirectives(createElementVNode("input", {
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.inputValue = $event),
            type: "text",
            class: "nut-ecard-input",
            placeholder: _ctx.placeholder || _ctx.translate("placeholder"),
            onInput: _cache[1] || (_cache[1] = (...args) => _ctx.change && _ctx.change(...args))
          }, null, 40, _hoisted_6), [
            [vModelText, _ctx.inputValue]
          ]),
          createTextVNode(" " + toDisplayString(_ctx.suffix), 1)
        ])
      ], 2),
      createTextVNode(),
      createElementVNode("view", _hoisted_7, [
        createElementVNode("view", null, toDisplayString(_ctx.suffix) + toDisplayString(_ctx.money), 1),
        createTextVNode(),
        createVNode(_component_nut_input_number, {
          modelValue: _ctx.stepValue,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.stepValue = $event),
          min: _ctx.cardBuyMin,
          max: _ctx.cardBuyMax,
          onChange: _ctx.changeStep
        }, null, 8, ["modelValue", "min", "max", "onChange"])
      ])
    ])
  ]);
}
const index_taro = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index_taro as default
};
