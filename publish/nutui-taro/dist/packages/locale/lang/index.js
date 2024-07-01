var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { reactive, ref } from "vue";
import Lang from "./zh-CN.js";
import Lang$1 from "./en-US.js";
const isObject = (val) => val !== null && typeof val === "object";
const deepMerge = (target, newObj) => {
  Object.keys(newObj).forEach((key) => {
    const targetValue = target[key];
    const newObjValue = newObj[key];
    if (isObject(targetValue) && isObject(newObjValue)) {
      deepMerge(targetValue, newObjValue);
    } else {
      target[key] = newObjValue;
    }
  });
  return target;
};
const langs = reactive({
  "zh-CN": new Lang(),
  "en-US": new Lang$1()
});
class Locale {
  static languages() {
    return langs[this.currentLang.value];
  }
  static use(lang, newLanguages) {
    if (newLanguages) {
      langs[lang] = new newLanguages();
    }
    this.currentLang.value = lang;
  }
  static merge(lang, newLanguages) {
    if (newLanguages) {
      if (langs[lang]) {
        deepMerge(langs[lang], newLanguages);
      } else {
        this.use(lang, newLanguages);
      }
    }
  }
}
__publicField(Locale, "currentLang", ref("zh-CN"));
export {
  Locale,
  Locale as default
};
