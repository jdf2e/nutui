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

export const useTaroRect = (
  elementRef: (Element | Window) | Ref<Element | Window | undefined>,
  Taro: any
): any => {
  const element = unref(elementRef);

  return new Promise((resolve) => {
    const query = Taro.createSelectorQuery();
    query.select(`#${(element as any).id}`).boundingClientRect();
    query.exec(function (res: any) {
      resolve(res[0]);
    });
  });
};
