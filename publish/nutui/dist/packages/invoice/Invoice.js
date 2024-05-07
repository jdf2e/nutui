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
import { defineComponent, ref, openBlock, createElementBlock, createVNode, unref, withCtx, Fragment, renderList, createBlock, createTextVNode, toDisplayString, createCommentVNode } from "vue";
import { Form as _sfc_main$1 } from "../form/Form.js";
import { FormItem as _sfc_main$2 } from "../formitem/FormItem.js";
import { Radio as _sfc_main$4 } from "../radio/Radio.js";
import { RadioGroup as _sfc_main$3 } from "../radiogroup/RadioGroup.js";
import { Button as _sfc_main$6 } from "../button/Button.js";
import { Input as _sfc_main$5 } from "../input/Input.js";
import { w as withInstall } from "../with-install-Ch3FF0uS.js";
const _hoisted_1 = { class: "nut-invoice" };
const _hoisted_2 = {
  key: 0,
  class: "nut-invoice__submit"
};
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, {
  name: "NutInvoice"
}), {
  __name: "invoice",
  props: {
    data: { default: () => [] },
    formValue: { default: () => {
    } },
    submit: { type: Boolean, default: true }
  },
  emits: ["submit", "scrollBottom"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const formRef = ref();
    const submitFun = () => {
      formRef.value.validate().then(({ valid, errors }) => {
        emit("submit", valid, errors);
      });
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(_sfc_main$1), {
          ref_key: "formRef",
          ref: formRef,
          "model-value": _ctx.formValue
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.data, (item, index) => {
              return openBlock(), createBlock(unref(_sfc_main$2), {
                key: index,
                label: item.label,
                required: item.required,
                rules: item.rules,
                prop: item.formItemProp
              }, {
                default: withCtx(() => [
                  item.type === "radio" ? (openBlock(), createBlock(unref(_sfc_main$3), {
                    key: 0,
                    modelValue: _ctx.formValue[item.formItemProp],
                    "onUpdate:modelValue": ($event) => _ctx.formValue[item.formItemProp] = $event
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(item.radioLabel, (radioItem, radioIndex) => {
                        return openBlock(), createBlock(unref(_sfc_main$4), {
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
                  }, 1032, ["modelValue", "onUpdate:modelValue"])) : (openBlock(), createBlock(unref(_sfc_main$5), {
                    key: 1,
                    modelValue: _ctx.formValue[item.formItemProp],
                    "onUpdate:modelValue": ($event) => _ctx.formValue[item.formItemProp] = $event,
                    class: "nut-input-text",
                    placeholder: item.placeholder,
                    type: "text"
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]))
                ]),
                _: 2
              }, 1032, ["label", "required", "rules", "prop"]);
            }), 128))
          ]),
          _: 1
        }, 8, ["model-value"]),
        _ctx.submit ? (openBlock(), createElementBlock("div", _hoisted_2, [
          createVNode(unref(_sfc_main$6), {
            type: "primary",
            block: "",
            onClick: submitFun
          }, {
            default: withCtx(() => [
              createTextVNode("提交审批")
            ]),
            _: 1
          })
        ])) : createCommentVNode("", true)
      ]);
    };
  }
}));
withInstall(_sfc_main);
export {
  _sfc_main as Invoice,
  _sfc_main as default
};
