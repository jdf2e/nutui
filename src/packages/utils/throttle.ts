/**
 * 防抖
 * @param fn
 * @param delay
 */
export function debounce(fn: Function, delay: number) {
  let timer: null | number = null;

  return function () {
    if (timer) clearTimeout(timer);

    timer = setTimeout(fn, delay);
  };
}

/**
 * 节流
 * @param fn
 * @param delay
 */
export function throttle(fn: Function, delay: number) {
  let timer: number | null = null;
  let startTime = Date.now();

  return function () {
    let now = Date.now();
    let remaining = delay - (now - startTime);
    if (timer) clearTimeout(timer);
    if (remaining <= 0) {
      fn.apply(null, arguments);
      startTime = Date.now();
    } else {
      timer = setTimeout(fn, remaining);
    }
  };
}
