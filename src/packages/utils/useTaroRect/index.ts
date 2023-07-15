/**
  获取元素的大小及其相对于视口的位置，等价于 Element.getBoundingClientRect。
  width 宽度	number
  height 高度	number
  top	顶部与视图窗口左上角的距离	number
  left	左侧与视图窗口左上角的距离	number
  right	右侧与视图窗口左上角的距离	number
  bottom	底部与视图窗口左上角的距离	number
 */
import Taro from '@tarojs/taro';
import { Ref, unref } from 'vue';
function isWindow(val: unknown): val is Window {
  return val === window;
}

export interface rectTaro {
  top: number;
  left: number;
  right: number;
  bottom: number;
  width: number;
  height: number;
}

export const useTaroRectById = (id: string) => {
  return new Promise((resolve, reject) => {
    if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
      const t = document ? document.querySelector(`#${id}`) : '';
      if (t) {
        resolve(t?.getBoundingClientRect());
      }
      reject();
    } else {
      const query = Taro.createSelectorQuery();
      query
        .select(`#${id}`)
        .boundingClientRect()
        .exec(function (rect: any) {
          if (rect[0]) {
            resolve(rect[0]);
          } else {
            reject();
          }
        });
    }
  });
};

export const useTaroRect = (elementRef: (Element | Window | any) | Ref<Element | Window | any>): any => {
  // 小程序下需要 el 具有 id 属性才能查询
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
      const id = element?.id;
      if (id) {
        query
          .select(`#${id}`)
          .boundingClientRect()
          .exec(function (rect: any) {
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
