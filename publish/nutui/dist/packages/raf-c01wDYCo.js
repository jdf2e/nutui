const _window = window;
const inBrowser = typeof window !== "undefined";
function requestAniFrame() {
  if (typeof _window !== "undefined") {
    return _window.requestAnimationFrame || _window.webkitRequestAnimationFrame || function(callback) {
      _window.setTimeout(callback, 1e3 / 60);
    };
  } else {
    return function(callback) {
      setTimeout(callback, 1e3 / 60);
    };
  }
}
function cancelRaf(id) {
  if (inBrowser) {
    cancelAnimationFrame(id);
  } else {
    clearTimeout(id);
  }
}
const requestAniFrame$1 = requestAniFrame();
export {
  cancelRaf as c,
  requestAniFrame$1 as r
};
