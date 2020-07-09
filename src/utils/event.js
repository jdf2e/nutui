export let passiveSupported = false;

try {
  var options = Object.defineProperty({}, 'passive', {
    get: function() {
      passiveSupported = true;
    }
  });

  window.addEventListener('test', null, options);
} catch (err) {}

export function on(target, event, handler, passive = false) {
  target.addEventListener(event, handler, passiveSupported ? { capture: false, passive } : false);
}

export function off(target, event, handler) {
  target.removeEventListener(event, handler);
}
