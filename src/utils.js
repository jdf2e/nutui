

export function getSystemInfoSync() {
  let systemInfo = null
  if (systemInfo == null) {
    systemInfo = wx.getSystemInfoSync();
  }

  return systemInfo;
}

// 模拟 浏览器 requestAnimationFrame
export function requestAnimationFrame(cb) {
    const systemInfo = getSystemInfoSync();
  
    if (systemInfo.platform === 'devtools') {
      return setTimeout(() => {
        cb();
      }, 1000 / 30);
    }
  
    return wx
      .createSelectorQuery()
      .selectViewport()
      .boundingClientRect()
      .exec(() => {
        cb();
      });
  }


export function isObj(x) {
  const type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

