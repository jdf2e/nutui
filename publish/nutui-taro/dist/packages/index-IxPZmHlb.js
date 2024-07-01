import locale from "@nutui/nutui-taro/dist/packages/locale/lang";
import { g as getPropByPath, i as isFunction } from "./util-2G3mRQeF.js";
const useLocale = (name = "") => {
  return (keyPath, ...args) => {
    name = name.toLocaleLowerCase();
    const languages = locale.languages();
    let text = keyPath;
    if (name && name.startsWith("nut")) {
      text = `${name.slice(3)}.${keyPath}`;
    }
    const res = getPropByPath(languages, text) || getPropByPath(languages, keyPath);
    return isFunction(res) ? res(...args) : res;
  };
};
export {
  useLocale as u
};
