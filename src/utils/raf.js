function requestAniFrame() {
  if (typeof window !== 'undefined') {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function(callback) {
        window.setTimeout(callback, 1000 / 60);
      }
    );
  } else {
    return function(callback) {
      setTimeout(callback, 1000 / 60);
    };
  }
}

export default requestAniFrame();
