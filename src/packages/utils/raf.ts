const _window = window as any;
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

export default requestAniFrame();
