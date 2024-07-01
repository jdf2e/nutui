const TypeOfFun = (value) => {
  if (null === value) {
    return "null";
  }
  const type = typeof value;
  if ("undefined" === type || "string" === type) {
    return type;
  }
  const typeString = toString.call(value);
  switch (typeString) {
    case "[object Array]":
      return "array";
    case "[object Date]":
      return "date";
    case "[object Boolean]":
      return "boolean";
    case "[object Number]":
      return "number";
    case "[object Function]":
      return "function";
    case "[object RegExp]":
      return "regexp";
    case "[object Object]":
      if (void 0 !== value.nodeType) {
        if (3 == value.nodeType) {
          return /\S/.test(value.nodeValue) ? "textnode" : "whitespace";
        } else {
          return "element";
        }
      } else {
        return "object";
      }
    default:
      return "unknow";
  }
};
const isArray = Array.isArray;
const isDate = (val) => val instanceof Date;
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isObject = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
const docu = document;
const body = docu.body;
const getPropByPath = (obj, keyPath) => {
  try {
    return keyPath.split(".").reduce((prev, curr) => prev[curr], obj);
  } catch (error) {
    return "";
  }
};
const floatData = (format, dataOp, mapOps) => {
  const mergeFormat = Object.assign({}, format);
  const mergeMapOps = Object.assign({}, mapOps);
  if (Object.keys(dataOp).length > 0) {
    Object.keys(mergeFormat).forEach((keys) => {
      if (Object.prototype.hasOwnProperty.call(mergeMapOps, keys)) {
        const tof = TypeOfFun(mergeMapOps[keys]);
        if (tof == "function") {
          mergeFormat[keys] = mergeMapOps[keys](dataOp);
        }
        if (tof == "string") {
          mergeFormat[keys] = dataOp[mergeMapOps[keys]];
        }
      } else {
        if (dataOp[keys]) mergeFormat[keys] = dataOp[keys];
      }
    });
    return mergeFormat;
  }
  return format;
};
function myFixed(num, digit = 2) {
  if (Object.is(parseFloat(num), NaN)) {
    return console.log(`传入的值：${num}不是一个数字`);
  }
  num = parseFloat(num);
  return (Math.round((num + Number.EPSILON) * Math.pow(10, digit)) / Math.pow(10, digit)).toFixed(digit);
}
function preventDefault(event, isStopPropagation) {
  if (typeof event.cancelable !== "boolean" || event.cancelable) {
    event.preventDefault();
  }
  if (isStopPropagation) {
    event.stopPropagation();
  }
}
const padZero = (num, length = 2) => {
  num += "";
  while (num.length < length) {
    num = "0" + num;
  }
  return num.toString();
};
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
const getScrollTopRoot = () => {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
};
export {
  TypeOfFun as T,
  isArray as a,
  body as b,
  isDate as c,
  preventDefault as d,
  clamp as e,
  isPromise as f,
  getPropByPath as g,
  isString as h,
  isFunction as i,
  getScrollTopRoot as j,
  isObject as k,
  floatData as l,
  myFixed as m,
  padZero as p
};
