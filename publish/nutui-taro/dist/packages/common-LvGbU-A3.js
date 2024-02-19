import { computed } from "vue";
import { u as useParent } from "./useParent-KIxqkovs.js";
import { F as FORM_KEY } from "./types-Ynmct7na.js";
const useFormDisabled = (disabled) => {
  const { parent } = useParent(FORM_KEY);
  return computed(() => {
    var _a;
    return disabled.value || ((_a = parent == null ? void 0 : parent.props) == null ? void 0 : _a.disabled) || false;
  });
};
export {
  useFormDisabled as u
};
