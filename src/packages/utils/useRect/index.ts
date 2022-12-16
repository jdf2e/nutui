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

export interface rect {
  top: number;
  left: number;
  right: number;
  bottom: number;
  width: number;
  height: number;
}

export const useRect = (elementRef: (Element | Window) | Ref<Element | Window | undefined>) => {
  const element = unref(elementRef);

  if (isWindow(element)) {
    const width = element.innerWidth;
    const height = element.innerHeight;

    return {
      top: 0,
      left: 0,
      right: width,
      bottom: height,
      width,
      height
    };
  }

  if (element && element.getBoundingClientRect) {
    return element.getBoundingClientRect();
  }

  return {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: 0,
    height: 0
  };
};
