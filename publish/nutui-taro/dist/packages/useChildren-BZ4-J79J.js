var __defProp = Object.defineProperty;
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
import { reactive, provide } from "vue";
const useChildren = (key) => {
  const publicChildren = reactive([]);
  const internalChildren = reactive([]);
  const linkChildren = (value) => {
    const link = (child) => {
      if (child.proxy) {
        internalChildren.push(child);
        publicChildren.push(child.proxy);
      }
    };
    const unlink = (child) => {
      if (child.proxy) {
        const internalIndex = internalChildren.indexOf(child);
        if (internalIndex > -1) {
          internalChildren.splice(internalIndex, 1);
        }
        const publicIndex = publicChildren.indexOf(child.proxy);
        if (internalIndex > -1) {
          publicChildren.splice(publicIndex, 1);
        }
      }
    };
    provide(key, __spreadValues({
      unlink,
      link,
      children: publicChildren,
      internalChildren
    }, value));
  };
  return {
    children: publicChildren,
    linkChildren
  };
};
export {
  useChildren as u
};
