const _window = window as any;

export const inBrowser = typeof window !== 'undefined';

function requestAniFrame() {
  if (typeof _window !== 'undefined') {
    return (
      _window.requestAnimationFrame ||
      _window.webkitRequestAnimationFrame ||
      function (callback: Function) {
        _window.setTimeout(callback, 1000 / 60);
      }
    );
  } else {
    return function (callback: Function) {
      setTimeout(callback, 1000 / 60);
    };
  }
}

export function cancelRaf(id: number) {
  if (inBrowser) {
    cancelAnimationFrame(id);
  } else {
    clearTimeout(id);
  }
}

export default requestAniFrame();
