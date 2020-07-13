import Hammer from 'hammerjs';

const gestures = ['tap', 'pan', 'pinch', 'press', 'rotate', 'swipe'];
const subGestures = [
  'panstart',
  'panend',
  'panmove',
  'pancancel',
  'pinchstart',
  'pinchmove',
  'pinchend',
  'pinchcancel',
  'pinchin',
  'pinchout',
  'pressup',
  'rotatestart',
  'rotatemove',
  'rotateend',
  'rotatecancel'
];
const directions = ['up', 'down', 'left', 'right', 'horizontal', 'vertical', 'all'];
function verifyDirection(options) {
  var dir = options.direction;
  if (typeof dir === 'string') {
    var hammerDirection = 'DIRECTION_' + dir.toUpperCase();
    if (directions.indexOf(dir) > -1 && Hammer.hasOwnProperty(hammerDirection)) {
      options.direction = Hammer[hammerDirection];
    } else {
      console.warn('[vue-hammer] invalid direction: ' + dir);
    }
  }
}
function handleDirection(event, direction) {
  let dirArray = new Set();
  const relations = {
    horizontal: ['left', 'right'],
    vertical: ['up', 'down'],
    all: ['left', 'right', 'up', 'down']
  };
  direction.forEach(dir => {
    dir = dir.toLowerCase();
    if (relations[dir]) {
      dirArray = new Set([...dirArray, ...relations[dir]]);
    } else {
      dirArray.add(dir);
    }
  });

  if (dirArray.size === 0) {
    return event;
  }
  dirArray = [...dirArray].map(dir => {
    return event + dir;
  });
  return dirArray.join(' ');
}

function update(el, binding) {
  const mc = el.hammer;
  const event = binding.arg;
  const dirType = subGestures.find(subGes => subGes === event) ? event : handleDirection(event, el.storage[event].direction);
  // 删除已绑定的事件
  if (mc.handler) {
    mc.off(dirType, mc.handler);
  }
  if (typeof binding.value !== 'function') {
    mc.handler = null;
    console.warn(binding.arg + '请传入function类型');
  } else {
    mc.on(dirType, (mc.handler = binding.value));
  }
}
const Gesture = {
  name: 'gesture',
  bind: (el, binding) => {
    if (!el.hammer) {
      // 是否已初始化
      el.hammer = new Hammer.Manager(el, { inputClass: Hammer.TouchMouseInput });
      el.hammer.domEvents = true;
    }

    const elType = binding.arg; // pan panleft ...
    const mc = el.hammer;
    const direction = binding.modifiers; // 方向: {right: true}

    el.storage = el.storage || {}; // 记录所有事件及其方向
    el.storage[elType] = el.storage[elType] || {};
    el.storage[elType].direction = el.storage[elType].direction || [];

    // 存储传入的方向到对应事件下
    Object.keys(direction).forEach(keyName => {
      if (!el.storage[elType].direction.includes(keyName)) {
        el.storage[elType].direction.push(keyName);
      }
    });

    let recognizerType = gestures.find(gesture => gesture === elType); // 验证传入的事件合法性
    if (!recognizerType) {
      return;
    }
    let recognizer = mc.get(recognizerType); // 获取识别器实例
    if (!recognizer) {
      // 创建构造器
      recognizer = new Hammer[recognizerType.charAt(0).toUpperCase() + recognizerType.slice(1)]();
      // 同时识别多个手势
      recognizer.recognizeWith(mc.recognizers);
      // 向管理器添加新的识别器实例。
      mc.add(recognizer);
    }

    // 有方向传入时默认取第一个进行设置
    if (el.storage[recognizerType].direction.length >= 1) {
      let options = {
        direction: el.storage[recognizerType].direction[0]
      };
      verifyDirection(options);
      recognizer.set(options);
    }
  },
  inserted: (el, binding) => {
    update(el, binding);
  },
  componentUpdated: (el, binding) => {
    update(el, binding);
  },
  unbind: (el, binding) => {
    const mc = el.hammer;
    const event = binding.arg;
    const dirType = subGestures.find(subGes => subGes === event) ? event : handleDirection(event, el.storage[event].direction);
    if (mc.handler) {
      el.hammer.off(dirType, mc.handler);
    }
    let eventkeys = Object.keys(el.hammer.handlers);
    let isDestroy = true;
    eventkeys.forEach(element => {
      if (mc.handlers[element].length > 0) {
        isDestroy = false;
      }
    });
    if (isDestroy) {
      el.hammer.destroy();
      el.hammer = null;
    }
  }
};

export default Gesture;
