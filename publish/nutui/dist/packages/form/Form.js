var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
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
import { c as createComponent } from "../component-TCzwHGVq.js";
import { computed, reactive, provide, watch, resolveComponent, openBlock, createElementBlock, withModifiers, createVNode, withCtx, renderSlot } from "vue";
import { g as getPropByPath, f as isPromise } from "../util-4Jkyw4BJ.js";
import { F as FORM_KEY } from "../types-Ynmct7na.js";
import { u as useChildren } from "../useChildren-GU_NVfD8.js";
import NutCellGroup from "../cellgroup/CellGroup.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-yVxbj29m.js";
const component = (components) => {
  return {
    props: {
      modelValue: {
        type: Object,
        default: () => ({})
      },
      rules: {
        type: Object,
        default: () => ({})
      },
      labelPosition: {
        type: String,
        default: "left"
      },
      starPosition: {
        type: String,
        default: "left"
      }
    },
    components,
    emits: ["validate"],
    setup(props, { emit }) {
      const { children, linkChildren } = useChildren(FORM_KEY);
      linkChildren({ props });
      const formErrorTip = computed(() => reactive({}));
      provide("formErrorTip", formErrorTip);
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
        const { rules, prop } = item;
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
      return { validate, reset, submit, formErrorTip };
    }
  };
};
const { create } = createComponent("form");
const _sfc_main = create(
  component({
    NutCellGroup
  })
);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_nut_cell_group = resolveComponent("nut-cell-group");
  return openBlock(), createElementBlock("form", {
    class: "nut-form",
    action: "#",
    onSubmit: withModifiers(() => false, ["prevent"])
  }, [
    createVNode(_component_nut_cell_group, null, {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "default")
      ]),
      _: 3
    })
  ], 32);
}
const NutForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  NutForm as default
};
