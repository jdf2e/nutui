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
import { defineComponent, computed, reactive, provide, watch, openBlock, createElementBlock, withModifiers, createVNode, unref, withCtx, renderSlot } from "vue";
import { u as useChildren } from "../useChildren-BZ4-J79J.js";
import { g as getPropByPath, f as isPromise } from "../util-DnfK0Qan.js";
import { CellGroup as _sfc_main$1 } from "../cellgroup/CellGroup.js";
import { F as FORM_TIP_KEY, a as FORM_KEY, b as FORM_DISABLED_KEY } from "../common-BH7uB7Cn.js";
import { w as withInstall } from "../with-install-Ch3FF0uS.js";
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, {
  name: "NutForm"
}), {
  __name: "form",
  props: {
    modelValue: { default: () => ({}) },
    rules: { default: () => ({}) },
    disabled: { type: Boolean, default: false },
    labelPosition: { default: "left" },
    starPosition: { default: "left" }
  },
  emits: ["validate"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { children, linkChildren } = useChildren(FORM_KEY);
    linkChildren({ props });
    const { linkChildren: linkChildren2 } = useChildren(FORM_DISABLED_KEY);
    linkChildren2({ props });
    const formErrorTip = computed(() => reactive({}));
    provide(FORM_TIP_KEY, formErrorTip);
    const clearErrorTips = () => {
      Object.keys(formErrorTip.value).forEach((item) => {
        formErrorTip.value[item] = "";
      });
    };
    const reset = () => {
      clearErrorTips();
    };
    watch(
      () => props.modelValue,
      () => {
        clearErrorTips();
      },
      { immediate: true }
    );
    const getTaskFromChildren = () => {
      const task = [];
      children.forEach((item) => {
        task.push({
          prop: item == null ? void 0 : item["prop"],
          rules: (item == null ? void 0 : item["rules"]) || []
        });
      });
      return task;
    };
    const tipMessage = (errorMsg) => {
      if (errorMsg.message) {
        emit("validate", errorMsg);
      }
      formErrorTip.value[errorMsg.prop] = errorMsg.message;
    };
    const checkRule = (item) => __async(this, null, function* () {
      const { rules = [], prop } = item;
      const _Promise = (errorMsg) => {
        return new Promise((resolve, reject) => {
          try {
            tipMessage(errorMsg);
            resolve(errorMsg);
          } catch (error) {
            reject(error);
          }
        });
      };
      if (!prop) {
        console.warn("[NutUI] <FormItem> 使用 rules 校验规则时 , 必须设置 prop 参数");
      }
      const value = getPropByPath(props.modelValue, prop || "");
      tipMessage({ prop, message: "" });
      const formRules = props.rules || {};
      const _rules = [...(formRules == null ? void 0 : formRules[prop]) || [], ...rules];
      while (_rules.length) {
        const rule = _rules.shift();
        const _a = rule, { validator } = _a, ruleWithoutValidator = __objRest(_a, ["validator"]);
        const { required, regex, message } = ruleWithoutValidator;
        const errorMsg = { prop, message: message || "" };
        if (required) {
          if (!value && value !== 0) {
            return _Promise(errorMsg);
          }
        }
        if (regex && !regex.test(String(value))) {
          return _Promise(errorMsg);
        }
        if (validator) {
          const result = validator(value, ruleWithoutValidator);
          if (isPromise(result)) {
            try {
              const value2 = yield result;
              if (value2 === false) {
                return _Promise(errorMsg);
              }
            } catch (error) {
              const validateErrorMsg = { prop, message: error };
              return _Promise(validateErrorMsg);
            }
          } else {
            if (!result) {
              return _Promise(errorMsg);
            }
          }
        }
      }
      return Promise.resolve(true);
    });
    const validate = (customProp = "") => {
      return new Promise((resolve, reject) => {
        try {
          const task = getTaskFromChildren();
          const errors = task.map((item) => {
            if (customProp && customProp !== item.prop) {
              return Promise.resolve(true);
            }
            return checkRule(item);
          });
          Promise.all(errors).then((errorRes) => {
            errorRes = errorRes.filter((item) => item !== true);
            const res = { valid: true, errors: [] };
            if (errorRes.length) {
              res.valid = false;
              res.errors = errorRes;
            }
            resolve(res);
          });
        } catch (error) {
          reject(error);
        }
      });
    };
    const submit = () => {
      validate();
      return false;
    };
    __expose({
      submit,
      reset,
      validate
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("form", {
        class: "nut-form",
        action: "#",
        onSubmit: withModifiers(() => false, ["prevent"])
      }, [
        createVNode(unref(_sfc_main$1), null, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        })
      ], 32);
    };
  }
}));
withInstall(_sfc_main);
export {
  _sfc_main as Form,
  _sfc_main as default
};
