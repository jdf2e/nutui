import { computed } from "vue";
import { u as useParent } from "./useParent-Cm0ckjcv.js";
const FORM_KEY = Symbol("nut-form");
const FORM_DISABLED_KEY = Symbol("nut-form-disabled");
const useFormDisabled = (disabled) => {
  const { parent } = useParent(FORM_DISABLED_KEY);
  return computed(() => {
    var _a;
    return disabled.value || ((_a = parent == null ? void 0 : parent.props) == null ? void 0 : _a.disabled) || false;
  });
};
export {
  FORM_KEY as F,
  FORM_DISABLED_KEY as a,
  useFormDisabled as u
};
