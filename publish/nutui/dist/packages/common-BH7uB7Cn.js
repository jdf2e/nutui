import { computed } from "vue";
import { u as useParent } from "./useParent-D6DiuxZZ.js";
const FORM_KEY = Symbol("nut-form");
const FORM_DISABLED_KEY = Symbol("nut-form-disabled");
const FORM_TIP_KEY = Symbol("nut-form-tip");
const useFormDisabled = (disabled) => {
  const { parent } = useParent(FORM_DISABLED_KEY);
  return computed(() => {
    var _a;
    return disabled.value || ((_a = parent == null ? void 0 : parent.props) == null ? void 0 : _a.disabled) || false;
  });
};
export {
  FORM_TIP_KEY as F,
  FORM_KEY as a,
  FORM_DISABLED_KEY as b,
  useFormDisabled as u
};
