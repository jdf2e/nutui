import { unref } from "vue";
function isWindow(val) {
  return typeof window !== "undefined" && val === window;
}
const useRect = (elementRef) => {
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
export {
  useRect as u
};
