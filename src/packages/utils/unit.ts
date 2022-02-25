import { ComponentPublicInstance, nextTick } from 'vue';
import { VueWrapper, DOMWrapper } from '@vue/test-utils';

function getTouch(el: Element | Window, x: number, y: number) {
  return {
    identifier: Date.now(),
    target: el,
    pageX: x,
    pageY: y,
    clientX: x,
    clientY: y,
    radiusX: 2.5,
    radiusY: 2.5,
    rotationAngle: 10,
    force: 0.5
  };
}

export function trigger(
  wrapper: VueWrapper<ComponentPublicInstance<any, any, any>> | DOMWrapper<Element> | Element | Window,
  eventName: string,
  x = 0,
  y = 0,
  options: any = {}
) {
  const el = 'element' in wrapper ? wrapper.element : wrapper;
  const touchList = options.touchList || [getTouch(el, x, y)];

  if (options.x || options.y) {
    touchList.push(getTouch(el, options.x, options.y));
  }

  const event = document.createEvent('CustomEvent');
  event.initCustomEvent(eventName, true, true, {});

  Object.assign(event, {
    clientX: x,
    clientY: y,
    touches: touchList,
    targetTouches: touchList,
    changedTouches: touchList
  });

  el.dispatchEvent(event);

  return nextTick();
}
export async function mockScrollTop(value: number) {
  Object.defineProperty(window, 'scrollTop', { value, writable: true });
  trigger(window, 'scroll');
  return nextTick();
}

export function sleep(delay = 0): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}
