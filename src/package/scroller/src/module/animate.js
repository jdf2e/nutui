
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       || 
          window.webkitRequestAnimationFrame || 
          window.mozRequestAnimationFrame    || 
          window.oRequestAnimationFrame      || 
          window.msRequestAnimationFrame     || 
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

export default content => {

  let global = window;

  let docStyle = document.documentElement.style;

  let engine;
  if (global.opera && Object.prototype.toString.call(opera) === '[object Opera]') {
    engine = 'presto';
  } else if ('MozAppearance' in docStyle) {
    engine = 'gecko';
  } else if ('WebkitAppearance' in docStyle) {
    engine = 'webkit';
  } else if (typeof navigator.cpuClass === 'string') {
    engine = 'trident';
  }

  let vendorPrefix = {
    trident: 'ms',
    gecko: 'Moz',
    webkit: 'Webkit',
    presto: 'O'
  }[engine];

  return (end, start) => {
    if (typeof start === 'undefined') {
      content.style[vendorPrefix + 'Transform'] = 'translate3d(0, ' + end + 'px, 0)'
      return
    }
    let _end = end
    let _start = start
    let dis 
    let tar 
    let step
    let _move = () => {
      dis = _end - _start
      step = dis / 10
      tar = _start + step
      _start = tar
      if (Math.abs(dis - step) < 1) {
        content.style.WebkitTransform = 'translate3d(0, ' + end + 'px, 0)'
        return
      }
      content.style.WebkitTransform = 'translate3d(0, ' + tar + 'px, 0)'
      window.requestAnimFrame(_move)
    }
    window.requestAnimFrame(_move)
  }
}

