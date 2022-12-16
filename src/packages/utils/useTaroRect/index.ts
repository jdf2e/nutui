/**
  获取元素的大小及其相对于视口的位置，等价于 Element.getBoundingClientRect。
  width 宽度	number
  height 高度	number
  top	顶部与视图窗口左上角的距离	number
  left	左侧与视图窗口左上角的距离	number
  right	右侧与视图窗口左上角的距离	number
  bottom	底部与视图窗口左上角的距离	number
 */

import { Ref, unref } from 'vue';
function isWindow(val: unknown): val is Window {
  return val === window;
}
export const useTaroRect = (elementRef: (Element | Window | any) | Ref<Element | Window | any>, Taro: any): any => {
  let element = unref(elementRef);

  return new Promise((resolve) => {
    if (Taro.getEnv() === 'WEB') {
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

      resolve({
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: 0,
        height: 0
      });
    } else {
      const query = Taro.createSelectorQuery();
      let el = (element as any).id ? (element as any).id : (element as any);
      query.select(`#${el}`) && query.select(`#${el}`).boundingClientRect();
      query.exec(function (res: any) {
        resolve(res[0]);
      });
    }
  });
};
