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
import { ref, reactive, computed, onMounted, watch, toRefs, resolveComponent, openBlock, createElementBlock, normalizeClass, createVNode, withCtx, Fragment, renderList, createBlock, createTextVNode, toDisplayString, withDirectives, vModelText, createCommentVNode } from "vue";
import { c as createComponent } from "../component-TCzwHGVq.js";
import { Form as _sfc_main$1 } from "../form/Form.js";
import { FormItem as _sfc_main$2 } from "../formitem/FormItem.js";
import { _ as _sfc_main$3 } from "../index.vue_vue_type_script_lang-w2sgcysj.js";
import { _ as _sfc_main$4 } from "../index.vue_vue_type_script_lang-54PRh3YM.js";
import { Button as _sfc_main$5 } from "../button/Button.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-yVxbj29m.js";
const { componentName, create } = createComponent("invoice");
const _sfc_main = create({
  components: {
    NutForm: _sfc_main$1,
    NutFormItem: _sfc_main$2,
    NutRadio: _sfc_main$3,
    NutRadioGroup: _sfc_main$4,
    NutButton: _sfc_main$5
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    formValue: {
      type: Object,
      default: {}
    },
    submit: {
      type: Boolean,
      default: true
    }
  },
  emits: [
    "submit",
    "scrollBottom",
    // will be deprecated
    "onSubmit"
  ],
  setup(props, { emit }) {
    const formRef = ref();
    const list = ref([]);
    const state = reactive({
      // list: []
    });
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });
    onMounted(() => {
      init();
    });
    const init = () => {
      list.value = props.data;
    };
    const submitFun = () => {
      formRef.value.validate().then(({ valid, errors }) => {
        emit("submit", valid, errors);
        emit("onSubmit", valid, errors);
      });
    };
    watch(
      () => props.data,
      () => init(),
      { deep: true }
    );
    return __spreadProps(__spreadValues({}, toRefs(state)), {
      classes,
      formRef,
      list,
      submitFun
    });
  }
});
const _hoisted_1 = ["onUpdate:modelValue", "placeholder"];
const _hoisted_2 = {
  key: 0,
  class: "nut-invoice__submit"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_nut_radio = resolveComponent("nut-radio");
  const _component_nut_radio_group = resolveComponent("nut-radio-group");
  const _component_nut_form_item = resolveComponent("nut-form-item");
  const _component_nut_form = resolveComponent("nut-form");
  const _component_nut_button = resolveComponent("nut-button");
  return openBlock(), createElementBlock("view", {
    class: normalizeClass(_ctx.classes)
  }, [
    createVNode(_component_nut_form, {
      ref: "formRef",
      "model-value": _ctx.formValue
    }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.list, (item, index2) => {
          return openBlock(), createBlock(_component_nut_form_item, {
            key: index2,
            label: item.label,
            required: item.required,
            rules: item.rules,
            prop: item.formItemProp
          }, {
            default: withCtx(() => [
              item.type === "radio" ? (openBlock(), createBlock(_component_nut_radio_group, {
                key: 0,
                modelValue: _ctx.formValue[item.formItemProp],
                "onUpdate:modelValue": ($event) => _ctx.formValue[item.formItemProp] = $event
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(item.radioLabel, (radioItem, radioIndex) => {
                    return openBlock(), createBlock(_component_nut_radio, {
                      key: radioIndex,
                      shape: "button",
                      label: radioItem.label
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(radioItem.label), 1)
                      ]),
                      _: 2
                    }, 1032, ["label"]);
                  }), 128))
                ]),
                _: 2
              }, 1032, ["modelValue", "onUpdate:modelValue"])) : withDirectives((openBlock(), createElementBlock("input", {
                key: 1,
                "onUpdate:modelValue": ($event) => _ctx.formValue[item.formItemProp] = $event,
                class: "nut-input-text",
                placeholder: item.placeholder,
                type: "text"
              }, null, 8, _hoisted_1)), [
                [vModelText, _ctx.formValue[item.formItemProp]]
              ])
            ]),
            _: 2
          }, 1032, ["label", "required", "rules", "prop"]);
        }), 128))
      ]),
      _: 1
    }, 8, ["model-value"]),
    _ctx.submit ? (openBlock(), createElementBlock("div", _hoisted_2, [
      createVNode(_component_nut_button, {
        type: "primary",
        block: "",
        onClick: _ctx.submitFun
      }, {
        default: withCtx(() => [
          createTextVNode("提交审批")
        ]),
        _: 1
      }, 8, ["onClick"])
    ])) : createCommentVNode("", true)
  ], 2);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index as default
};
