import Taro from "@tarojs/taro";
import { unref } from "vue";
function isWindow(val) {
  return typeof window !== "undefined" && val === window;
}
const useTaroRectById = (id) => {
  return new Promise((resolve, reject) => {
    if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
      const t = document ? document.querySelector(`#${id}`) : "";
      if (t) {
        resolve(t == null ? void 0 : t.getBoundingClientRect());
      }
      reject();
    } else {
      const query = Taro.createSelectorQuery();
      query.select(`#${id}`).boundingClientRect().exec(function(rect) {
        if (rect[0]) {
          resolve(rect[0]);
        } else {
          reject();
        }
      });
    }
  });
};
const useTaroRect = (elementRef) => {
  let element = unref(elementRef);
  return new Promise((resolve, reject) => {
    if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
      if (element && element.$el) {
        element = element.$el;
      }
      if (isWindow(element)) {
        const width = element.innerWidth;
        const height = element.innerHeight;
        resolve({
          top: 0,
          left: 0,
          right: width,
          bottom: height,
          width,
          height
        });
      }
      if (element && element.getBoundingClientRect) {
        resolve(element.getBoundingClientRect());
      }
      reject();
    } else {
      const query = Taro.createSelectorQuery();
      const id = element == null ? void 0 : element.id;
      if (id) {
        query.select(`#${id}`).boundingClientRect().exec(function(rect) {
          if (rect[0]) {
            resolve(rect[0]);
          } else {
            reject();
          }
        });
      } else {
        reject();
      }
    }
  });
};
export {
  useTaroRectById as a,
  useTaroRect as u
};
