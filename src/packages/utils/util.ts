import { createApp, reactive, Component } from 'vue';

// 变量类型判断
export const TypeOfFun = (value: any) => {
  if (null === value) {
    return 'null';
  }

  const type = typeof value;
  if ('undefined' === type || 'string' === type) {
    return type;
  }

  const typeString = toString.call(value);
  switch (typeString) {
    case '[object Array]':
      return 'array';
    case '[object Date]':
      return 'date';
    case '[object Boolean]':
      return 'boolean';
    case '[object Number]':
      return 'number';
    case '[object Function]':
      return 'function';
    case '[object RegExp]':
      return 'regexp';
    case '[object Object]':
      if (undefined !== value.nodeType) {
        if (3 == value.nodeType) {
          return /\S/.test(value.nodeValue) ? 'textnode' : 'whitespace';
        } else {
          return 'element';
        }
      } else {
        return 'object';
      }
    default:
      return 'unknow';
  }
};
//
export const objectToString = Object.prototype.toString;
export const toTypeString = (value: unknown): string => objectToString.call(value);

export const toRawType = (value: unknown): string => {
  // extract "RawType" from strings like "[object RawType]"
  return toTypeString(value).slice(8, -1);
};
export const isArray = Array.isArray;
export const isMap = (val: unknown): val is Map<any, any> => toTypeString(val) === '[object Map]';
export const isSet = (val: unknown): val is Set<any> => toTypeString(val) === '[object Set]';

export const isDate = (val: unknown): val is Date => val instanceof Date;
export const isFunction = (val: unknown): val is Function => typeof val === 'function';
export const isString = (val: unknown): val is string => typeof val === 'string';
export const isSymbol = (val: unknown): val is symbol => typeof val === 'symbol';
export const isObject = (val: unknown): val is Record<any, any> => val !== null && typeof val === 'object';

export const isPromise = <T = any>(val: unknown): val is Promise<T> => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};

export const getPropByPath = (obj: any, keyPath: string) => {
  try {
    return keyPath.split('.').reduce((prev, curr) => prev[curr], obj);
  } catch (error) {
    return '';
  }
};

export const floatData = (format: any, dataOp: any, mapOps: any) => {
  let mergeFormat = Object.assign({}, format);
  let mergeMapOps = Object.assign({}, mapOps);

  if (Object.keys(dataOp).length > 0) {
    Object.keys(mergeFormat).forEach((keys) => {
      if (mergeMapOps.hasOwnProperty(keys)) {
        const tof = TypeOfFun(mergeMapOps[keys]);
        if (tof == 'function') {
          mergeFormat[keys] = mergeMapOps[keys](dataOp);
        }

        if (tof == 'string') {
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

export const deepMerge = (target: any, newObj: any) => {
  Object.keys(newObj).forEach((key) => {
    let targetValue = target[key];
    let newObjValue = newObj[key];
    if (isObject(targetValue) && isObject(newObjValue)) {
      deepMerge(targetValue, newObjValue);
    } else {
      target[key] = newObjValue;
    }
  });
  return target;
};

export function myFixed(num: any, digit: number = 2) {
  if (Object.is(parseFloat(num), NaN)) {
    return console.log(`传入的值：${num}不是一个数字`);
  }
  num = parseFloat(num);
  return (Math.round((num + Number.EPSILON) * Math.pow(10, digit)) / Math.pow(10, digit)).toFixed(digit);
}

export function preventDefault(event: Event, isStopPropagation?: boolean) {
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault();
  }

  if (isStopPropagation) {
    event.stopPropagation();
  }
}

export type Interceptor = (...args: any[]) => Promise<boolean> | boolean | undefined | void;

export const funInterceptor = (
  interceptor: Interceptor | undefined,
  {
    args = [],
    done,
    canceled
  }: {
    args?: unknown[];
    done: () => void;
    canceled?: () => void;
  }
) => {
  if (interceptor) {
    const returnVal = interceptor.apply(null, args);

    if (isPromise(returnVal)) {
      returnVal
        .then((value) => {
          if (value) {
            done();
          } else if (canceled) {
            canceled();
          }
        })
        .catch(() => {});
    } else if (returnVal) {
      done();
    } else if (canceled) {
      canceled();
    }
  } else {
    done();
  }
};

export const CreateComponent = (options: any, component: any) => {
  let elWarp: HTMLElement = document.body;
  const teleport = options.teleport as string;
  if (teleport != 'body') {
    if (typeof teleport == 'string') {
      elWarp = document.querySelector(teleport) as HTMLElement;
    } else {
      elWarp = options.teleport as HTMLElement;
    }
  }
  const root = document.createElement('view');
  root.id = `${component.name}-` + new Date().getTime();
  const Wrapper = component.wrapper;
  const instance: Component = createApp(Wrapper);

  const componens = component.components;
  for (let key in componens) {
    instance.component(key, componens[key]);
  }

  elWarp.appendChild(root);

  instance.mount(root);
};
