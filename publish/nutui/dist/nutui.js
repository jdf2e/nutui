var ol = Object.defineProperty, ll = Object.defineProperties;
var sl = Object.getOwnPropertyDescriptors;
var Dt = Object.getOwnPropertySymbols;
var wn = Object.prototype.hasOwnProperty, kn = Object.prototype.propertyIsEnumerable;
var pt = Math.pow, Yt = (e, t, n) => t in e ? ol(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Z = (e, t) => {
  for (var n in t || (t = {}))
    wn.call(t, n) && Yt(e, n, t[n]);
  if (Dt)
    for (var n of Dt(t))
      kn.call(t, n) && Yt(e, n, t[n]);
  return e;
}, ce = (e, t) => ll(e, sl(t));
var _t = (e) => typeof e == "symbol" ? e : e + "", jt = (e, t) => {
  var n = {};
  for (var l in e)
    wn.call(e, l) && t.indexOf(l) < 0 && (n[l] = e[l]);
  if (e != null && Dt)
    for (var l of Dt(e))
      t.indexOf(l) < 0 && kn.call(e, l) && (n[l] = e[l]);
  return n;
};
var O = (e, t, n) => (Yt(e, typeof t != "symbol" ? t + "" : t, n), n);
var Ge = (e, t, n) => new Promise((l, o) => {
  var a = (i) => {
    try {
      r(n.next(i));
    } catch (p) {
      o(p);
    }
  }, s = (i) => {
    try {
      r(n.throw(i));
    } catch (p) {
      o(p);
    }
  }, r = (i) => i.done ? l(i.value) : Promise.resolve(i.value).then(a, s);
  r((n = n.apply(e, t)).next());
});
import { reactive as fe, ref as z, defineComponent as Ce, useSlots as at, h as we, openBlock as c, createBlock as J, computed as N, createElementBlock as d, normalizeClass as P, normalizeStyle as A, createElementVNode as g, createTextVNode as he, unref as ye, createCommentVNode as T, renderSlot as _, provide as ze, inject as Ee, getCurrentInstance as Ue, onUnmounted as Xe, createApp as al, resolveComponent as U, Fragment as Q, toDisplayString as E, watchEffect as $t, Transition as xt, withCtx as ne, withDirectives as Ie, withModifiers as _e, vShow as Me, watch as x, toRefs as ge, Teleport as Yn, mergeProps as wt, createVNode as oe, onMounted as be, onBeforeUnmount as en, shallowReactive as rl, markRaw as Cn, isVNode as il, Comment as ul, Text as cl, nextTick as Ne, renderList as ie, normalizeProps as dl, guardReactiveProps as fl, resolveDynamicComponent as Oe, onActivated as Ct, toRef as xe, createSlots as kt, onBeforeMount as jn, readonly as Sn, onDeactivated as St, render as tn, vModelText as pl } from "vue";
class Kn {
}
let ml = class extends Kn {
  constructor() {
    super(...arguments);
    O(this, "save", "保存");
    O(this, "confirm", "确认");
    O(this, "cancel", "取消");
    O(this, "done", "完成");
    O(this, "noData", "暂无数据");
    O(this, "placeholder", "请输入");
    O(this, "select", "请选择");
    O(this, "video", {
      errorTip: "视频加载失败",
      clickRetry: "点击重试"
    });
    O(this, "fixednav", {
      activeText: "收起导航",
      unActiveText: "快速导航"
    });
    O(this, "pagination", {
      prev: "上一页",
      next: "下一页"
    });
    O(this, "calendaritem", {
      weekdays: ["日", "一", "二", "三", "四", "五", "六"],
      end: "结束",
      start: "开始",
      title: "日期选择",
      monthTitle: (n, l) => `${n}年${l}月`,
      today: "今天"
    });
    O(this, "calendarcard", {
      weekdays: ["日", "一", "二", "三", "四", "五", "六"],
      end: "结束",
      start: "开始",
      title: "日期选择",
      monthTitle: (n, l) => `${n}年${l}月`,
      today: "今天"
    });
    O(this, "shortpassword", {
      title: "请输入密码",
      desc: "您使用了虚拟资产，请进行验证",
      tips: "忘记密码"
    });
    O(this, "uploader", {
      ready: "准备完成",
      readyUpload: "准备上传",
      waitingUpload: "等待上传",
      uploading: "上传中",
      success: "上传成功",
      error: "上传失败"
    });
    O(this, "countdown", {
      day: "天",
      hour: "时",
      minute: "分",
      second: "秒"
    });
    O(this, "address", {
      selectRegion: "请选择所在地区",
      deliveryTo: "配送至",
      chooseAnotherAddress: "选择其他地址"
    });
    O(this, "signature", {
      reSign: "重签",
      unSupportTpl: "对不起，当前浏览器不支持Canvas，无法使用本控件！"
    });
    O(this, "ecard", {
      chooseText: "请选择电子卡面值",
      otherValueText: "其他面值",
      placeholder: "请输入1-5000整数"
    });
    O(this, "timeselect", {
      pickupTime: "取件时间"
    });
    O(this, "sku", {
      buyNow: "立即购买",
      buyNumber: "购买数量",
      addToCart: "加入购物车"
    });
    O(this, "skuheader", {
      skuId: "商品编号"
    });
    O(this, "addresslist", {
      addAddress: "新建地址",
      default: "默认"
    });
    O(this, "comment", {
      complaintsText: "我要投诉",
      additionalReview: (n) => `购买${n}天后追评`,
      additionalImages: (n) => `${n}张追评图片`
    });
    O(this, "infiniteloading", {
      loading: "加载中...",
      pullTxt: "松开刷新",
      loadMoreTxt: "哎呀，这里是底部了啦"
    });
    O(this, "datepicker", {
      year: "年",
      month: "月",
      day: "日",
      hour: "时",
      min: "分",
      seconds: "秒"
    });
    O(this, "audiooperate", {
      back: "倒退",
      start: "开始",
      pause: "暂停",
      forward: "快进",
      mute: "静音"
    });
    O(this, "pullrefresh", {
      pulling: "下拉刷新",
      loosing: "释放刷新",
      loading: "加载中...",
      complete: "刷新成功"
    });
  }
};
class hl extends Kn {
  constructor() {
    super(...arguments);
    O(this, "save", "Save");
    O(this, "confirm", "Confirm");
    O(this, "cancel", "Cancel");
    O(this, "done", "Done");
    O(this, "noData", "No Data");
    O(this, "placeholder", "Placeholder");
    O(this, "select", "Select");
    O(this, "video", {
      errorTip: "Error Tip",
      clickRetry: "Click Retry"
    });
    O(this, "fixednav", {
      activeText: "Close Nav",
      unActiveText: "Open Nav"
    });
    O(this, "pagination", {
      prev: "Previous",
      next: "Next"
    });
    O(this, "calendaritem", {
      weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      end: "End",
      start: "Start",
      title: "Calendar",
      monthTitle: (n, l) => `${n}/${l}`,
      today: "Today"
    });
    O(this, "calendarcard", {
      weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      end: "End",
      start: "Start",
      title: "Calendar",
      monthTitle: (n, l) => `${n}/${l}`,
      today: "Today"
    });
    O(this, "shortpassword", {
      title: "Please input a password",
      desc: "Verify",
      tips: "Forget password"
    });
    O(this, "uploader", {
      ready: "Ready",
      readyUpload: "Ready to upload",
      waitingUpload: "Waiting for upload",
      uploading: "Uploading",
      success: "Upload successful",
      error: "Upload failed"
    });
    O(this, "countdown", {
      day: " Day ",
      hour: " Hour ",
      minute: " Minute ",
      second: " Second "
    });
    O(this, "address", {
      selectRegion: "Select Region",
      deliveryTo: "Delivery To",
      chooseAnotherAddress: "Choose Another Address"
    });
    O(this, "signature", {
      reSign: "Re Sign",
      unSupportTpl: "Sorry, the current browser doesn't support canvas, so we can't use this control!"
    });
    O(this, "ecard", {
      chooseText: "Select",
      otherValueText: "Other Value",
      placeholder: "Placeholder"
    });
    O(this, "timeselect", {
      pickupTime: "Pickup Time"
    });
    O(this, "sku", {
      buyNow: "Buy Now",
      buyNumber: "Buy Number",
      addToCart: "Add to Cart"
    });
    O(this, "skuheader", {
      skuId: "Sku Number"
    });
    O(this, "addresslist", {
      addAddress: "Add New Address",
      default: "default"
    });
    O(this, "comment", {
      complaintsText: "I have a complaint",
      additionalReview: (n) => `Review after ${n} days of purchase`,
      additionalImages: (n) => `There are ${n} follow-up comments`
    });
    O(this, "infiniteloading", {
      loading: "Loading...",
      pullTxt: "Loose to refresh",
      loadMoreTxt: "Oops, this is the bottom"
    });
    O(this, "datepicker", {
      year: "Year",
      month: "Month",
      day: "Day",
      hour: "Hour",
      min: "Minute",
      seconds: "Second"
    });
    O(this, "audiooperate", {
      back: "Back",
      start: "Start",
      pause: "Pause",
      forward: "Forward",
      mute: "Mute"
    });
    O(this, "pullrefresh", {
      pulling: "Pull to refresh...",
      loosing: "Loose to refresh...",
      loading: "Loading...",
      complete: "Refresh successfully"
    });
  }
}
const nn = (e, {
  args: t = [],
  done: n,
  canceled: l
}) => {
  if (e) {
    const o = e.apply(null, t);
    Xn(o) ? o.then((a) => {
      a ? n(a) : l && l();
    }).catch(() => {
    }) : o ? n() : l && l();
  } else
    n();
}, Ut = (e) => {
  if (e === null)
    return "null";
  const t = typeof e;
  if (t === "undefined" || t === "string")
    return t;
  switch (toString.call(e)) {
    case "[object Array]":
      return "array";
    case "[object Date]":
      return "date";
    case "[object Boolean]":
      return "boolean";
    case "[object Number]":
      return "number";
    case "[object Function]":
      return "function";
    case "[object RegExp]":
      return "regexp";
    case "[object Object]":
      return e.nodeType !== void 0 ? e.nodeType == 3 ? /\S/.test(e.nodeValue) ? "textnode" : "whitespace" : "element" : "object";
    default:
      return "unknow";
  }
}, Un = Array.isArray, gl = (e) => e instanceof Date, Et = (e) => typeof e == "function", vl = (e) => typeof e == "string", dt = (e) => e !== null && typeof e == "object", Xn = (e) => dt(e) && Et(e.then) && Et(e.catch), yl = document, Tn = yl.body, Xt = (e, t) => {
  try {
    return t.split(".").reduce((n, l) => n[l], e);
  } catch (n) {
    return "";
  }
}, bl = (e, t, n) => {
  let l = Object.assign({}, e), o = Object.assign({}, n);
  return Object.keys(t).length > 0 ? (Object.keys(l).forEach((a) => {
    if (Object.prototype.hasOwnProperty.call(o, a)) {
      const s = Ut(o[a]);
      s == "function" && (l[a] = o[a](t)), s == "string" && (l[a] = t[o[a]]);
    } else
      t[a] && (l[a] = t[a]);
  }), l) : e;
}, qn = (e, t) => (Object.keys(t).forEach((n) => {
  let l = e[n], o = t[n];
  dt(l) && dt(o) ? qn(l, o) : e[n] = o;
}), e);
function $l(e, t = 2) {
  return Object.is(parseFloat(e), NaN) ? console.log(`传入的值：${e}不是一个数字`) : (e = parseFloat(e), (Math.round((e + Number.EPSILON) * Math.pow(10, t)) / Math.pow(10, t)).toFixed(t));
}
function ft(e, t) {
  (typeof e.cancelable != "boolean" || e.cancelable) && e.preventDefault(), t && e.stopPropagation();
}
const Qe = (e, t = 2) => {
  for (e += ""; e.length < t; )
    e = "0" + e;
  return e.toString();
}, Ve = (e, t, n) => Math.min(Math.max(e, t), n), Zn = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, It = fe({
  "zh-CN": new ml(),
  "en-US": new hl()
});
class Gn {
  static languages() {
    return It[this.currentLang.value];
  }
  static use(t, n) {
    n && (It[t] = new n()), this.currentLang.value = t;
  }
  static merge(t, n) {
    n && (It[t] ? qn(It[t], n) : this.use(t, n));
  }
}
O(Gn, "currentLang", z("zh-CN"));
const wl = /* @__PURE__ */ Ce({
  __name: "IconFont",
  props: {
    name: { type: String, default: "" },
    size: { type: [String, Number], default: "" },
    width: { type: [String, Number], default: "" },
    height: { type: [String, Number], default: "" },
    classPrefix: { type: String, default: "nut-icon" },
    fontClassName: { type: String, default: "nutui-iconfont" },
    color: { type: String, default: "" },
    tag: { type: String, default: "i" }
  },
  setup(e) {
    var t;
    const n = e, l = "nut-icon", o = at(), a = () => n.name ? n.name.indexOf("/") !== -1 : !1, s = (f) => {
      if (f)
        return isNaN(Number(f)) ? String(f) : f + "px";
    }, r = a();
    let i = we(
      r ? "img" : n.tag,
      {
        class: r ? `${l}__img` : `${n.fontClassName} ${l} ${n.classPrefix}-${n.name}`,
        style: {
          color: n.color,
          fontSize: s(n.size),
          width: s(n.width || n.size),
          height: s(n.height || n.size)
        },
        src: r ? n.name : ""
      },
      (t = o.default) == null ? void 0 : t.call(o)
    );
    const p = () => i;
    return (f, y) => (c(), J(p));
  }
});
function kl(e) {
  return e.name = "IconFont", e.install = (t) => {
    t.component("IconFont", e);
  }, e;
}
kl(wl);
const F = (e) => Ce({
  props: {
    class: { type: String, default: "" },
    name: { type: String, default: e },
    color: { type: String, default: "" },
    width: { type: [String, Number], default: "" },
    height: { type: [String, Number], default: "" }
  },
  setup(t) {
    const n = (a) => {
      if (a)
        return isNaN(Number(a)) ? String(a) : a + "px";
    }, l = N(() => {
      const a = "nut-icon";
      return {
        [t.class]: t.class,
        [a]: !0,
        [a + "-" + t.name]: t.name
      };
    }), o = N(() => {
      const a = {};
      return a.height = n(t.height), a.width = n(t.width), a.color = t.color, a;
    });
    return { classes: l, style: o };
  }
}), ve = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, o] of t)
    n[l] = o;
  return n;
};
F("add");
F("addfollow");
F("arrow-down");
const Cl = F("arrow-down2"), Sl = /* @__PURE__ */ g("path", {
  d: "M1741.19 227.497a121.654 121.654 0 1 1 127.858 206.812L1292.65 790.27a182.482 182.482 0 0 1-191.727 0L524.646 434.31a121.654 121.654 0 1 1 127.859-206.812l544.403 335.887c181.387-111.8 362.773-223.965 544.282-335.887",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Tl = [
  Sl
];
function Nl(e, t, n, l, o, a) {
  return c(), d("svg", {
    class: P(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 2472 1024",
    role: "presentation"
  }, Tl, 6);
}
const Dl = /* @__PURE__ */ ve(Cl, [["render", Nl]]);
F("arrow-right");
F("arrow-right2");
F("arrow-up");
const _l = F("arrow-up2"), Il = /* @__PURE__ */ g("path", {
  d: "M623.406 815.479A129.722 129.722 0 1 1 487.068 594.95C691.9 468.083 896.73 341.993 1101.691 215.125a194.583 194.583 0 0 1 204.442 0l614.494 379.567a129.722 129.722 0 1 1-136.338 220.657l-580.506-358.292-580.377 358.422",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Bl = [
  Il
];
function Ml(e, t, n, l, o, a) {
  return c(), d("svg", {
    class: P(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 2472 1024",
    role: "presentation"
  }, Bl, 6);
}
const Ll = /* @__PURE__ */ ve(_l, [["render", Ml]]);
F("ask");
F("ask2");
F("cart");
F("cart2");
F("category");
const Pl = F("check-checked"), El = /* @__PURE__ */ g("path", {
  d: "M510.613 2.837C229.793 2.837.032 232.598.032 513.418S229.793 1024 510.613 1024s510.582-229.762 510.582-510.582S794.27 2.837 510.613 2.837zm0 794.238c-156.01 0-283.656-127.646-283.656-283.657s127.645-283.656 283.656-283.656S794.27 357.407 794.27 513.418 666.624 797.075 510.613 797.075z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Al = /* @__PURE__ */ g("path", {
  d: "M382.968 513.418a127.645 127.645 0 1 0 255.29 0 127.645 127.645 0 1 0-255.29 0Z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1);
function zl(e, t, n, l, o, a) {
  return c(), d("svg", {
    class: P(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1032 1024",
    role: "presentation"
  }, [
    El,
    he(","),
    Al
  ], 6);
}
const Nn = /* @__PURE__ */ ve(Pl, [["render", zl]]), Vl = F("check-disabled"), Ol = /* @__PURE__ */ g("path", {
  d: "M506.467 0C227.962 0 .094 227.868.094 506.374s227.868 506.373 506.373 506.373 506.374-227.868 506.374-506.373S787.786 0 506.467 0zm202.55 571.077H306.73c-45.01 0-67.516-22.506-67.516-67.517 0-45.01 22.505-67.516 67.516-67.516h402.286c45.01 0 67.516 22.505 67.516 67.516 0 45.011-22.505 67.517-67.516 67.517z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Hl = [
  Ol
];
function Rl(e, t, n, l, o, a) {
  return c(), d("svg", {
    class: P(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Hl, 6);
}
const Fl = /* @__PURE__ */ ve(Vl, [["render", Rl]]), Wl = F("check-normal"), Yl = /* @__PURE__ */ g("path", {
  d: "M512 1024c-136.533 0-264.533-54.044-361.244-150.756C54.044 776.534 0 648.534 0 512c0-136.533 54.044-264.533 150.756-361.244C247.466 54.044 375.466 0 512 0c136.533 0 264.533 54.044 361.244 150.756C969.956 247.466 1024 375.466 1024 512s-54.044 264.533-150.756 361.244C776.534 969.956 648.534 1024 512 1024zm0-938.667c-113.778 0-221.867 45.511-301.511 125.156S85.333 398.222 85.333 512s45.511 221.867 125.156 301.511S398.222 938.667 512 938.667s221.867-45.511 301.511-125.156S938.667 625.778 938.667 512 893.156 290.133 813.51 210.489 625.778 85.333 512 85.333z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), jl = [
  Yl
];
function Kl(e, t, n, l, o, a) {
  return c(), d("svg", {
    class: P(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, jl, 6);
}
const qt = /* @__PURE__ */ ve(Wl, [["render", Kl]]), Ul = F("Check"), Xl = /* @__PURE__ */ g("path", {
  d: "M998.4 245.029c-219.429 153.6-398.629 332.8-552.229 552.228-40.228 58.514-128 54.857-164.571-3.657-69.486-106.057-149.943-186.514-256-256-51.2-32.914-18.286-113.371 40.229-98.743C182.857 460.8 274.286 508.343 358.4 585.143c157.257-190.172 358.4-340.114 588.8-435.2 62.171-25.6 106.057 58.514 51.2 95.086",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ql = [
  Xl
];
function Zl(e, t, n, l, o, a) {
  return c(), d("svg", {
    class: P(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ql, 6);
}
const Jn = /* @__PURE__ */ ve(Ul, [["render", Zl]]), Gl = F("checked"), Jl = /* @__PURE__ */ g("path", {
  d: "M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0zm281.6 369.778C779.378 381.156 600.178 500.622 472.178 691.2c0 0 0 2.844-2.845 2.844-8.533 5.69-48.355 36.978-88.177-8.533-39.823-51.2-62.578-99.555-142.223-142.222-2.844 0-2.844-2.845-2.844-2.845-8.533-11.377-39.822-56.888 19.911-56.888 45.511 0 91.022 11.377 162.133 73.955 5.69 5.689 14.223 5.689 17.067 0C469.333 517.69 608.711 366.933 768 318.578c0 0 19.911-2.845 31.289 14.222 5.689 11.378 11.378 22.756-5.689 36.978z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ql = [
  Jl
];
function xl(e, t, n, l, o, a) {
  return c(), d("svg", {
    class: P(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ql, 6);
}
const Qn = /* @__PURE__ */ ve(Gl, [["render", xl]]), es = F("checklist"), ts = /* @__PURE__ */ g("path", {
  d: "M159.289 500.622c62.578 0 125.155 17.067 221.867 102.4 8.533 5.69 19.91 5.69 25.6 0 48.355-54.044 238.933-261.689 455.11-329.955 0 0 28.445-5.69 42.667 19.91 8.534 17.067 19.911 34.134-5.689 54.045-22.755 17.067-264.533 179.2-440.888 440.89l-2.845 2.844c-11.378 8.533-68.267 51.2-119.467-14.223-56.888-71.11-85.333-139.377-196.266-196.266-2.845 0-2.845-2.845-5.69-5.69-11.377-11.377-54.044-73.955 25.6-73.955z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ns = [
  ts
];
function os(e, t, n, l, o, a) {
  return c(), d("svg", {
    class: P(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ns, 6);
}
const ls = /* @__PURE__ */ ve(es, [["render", os]]), ss = F("circle-close"), as = /* @__PURE__ */ g("path", {
  d: "M511.492 73.063a438.425 438.425 0 0 1 310.545 748.953 439.16 439.16 0 1 1-621.09-621.073A435.695 435.695 0 0 1 511.492 73.046m0-73.063C267.49.018 57.468 172.408 9.87 411.717-37.713 651.042 90.39 890.658 315.823 984.03c225.45 93.355 485.444 14.472 621.005-188.416 135.543-202.906 108.885-473.293-63.659-645.82A509.645 509.645 0 0 0 511.492.002zm-175.7 635.495 299.673-299.674c12.049-12.049 24.115-12.049 36.164 0l15.496 15.497c12.05 12.066 12.05 24.115 0 36.18L387.47 687.122c-12.066 12.05-24.115 12.05-36.181 0l-15.497-15.496c-12.049-12.066-12.049-24.115 0-36.182zm0-284.177 15.496-15.497c12.066-12.049 24.115-12.049 36.18 0l299.64 299.674c12.05 12.049 12.05 24.098 0 36.164l-15.496 15.496c-12.05 12.05-24.115 12.05-36.182 0L335.808 387.465c-12.049-12.05-12.049-24.098 0-36.164z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), rs = [
  as
];
function is(e, t, n, l, o, a) {
  return c(), d("svg", {
    class: P(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, rs, 6);
}
const on = /* @__PURE__ */ ve(ss, [["render", is]]);
F("clock");
F("close-little");
const us = F("close"), cs = /* @__PURE__ */ g("path", {
  d: "M981.577 1024c-11.703 0-23.406-2.926-32.183-11.703L13.166 76.07c-14.629-17.555-14.629-46.812 0-64.366 17.554-14.629 46.811-14.629 64.365 0L1013.76 947.93c17.554 17.555 17.554 43.886 0 61.44-8.777 11.703-20.48 14.629-32.183 14.629zm-936.228 0c-11.703 0-23.406-2.926-32.183-11.703-17.555-17.554-17.555-43.886 0-61.44L949.394 14.63c17.555-17.555 43.886-17.555 61.44 0 17.555 17.554 17.555 43.885 0 61.44L74.606 1012.297C68.754 1021.074 57.05 1024 45.349 1024z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ds = [
  cs
];
function fs(e, t, n, l, o, a) {
  return c(), d("svg", {
    class: P(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1026 1024",
    role: "presentation"
  }, ds, 6);
}
const zt = /* @__PURE__ */ ve(us, [["render", fs]]), ps = F("comment"), ms = /* @__PURE__ */ g("path", {
  d: "M760.415 876.089H259.793c-132.741 0-242.726-109.985-242.726-242.726V242.726C17.067 109.986 127.052 0 259.793 0h504.414c132.741 0 242.726 109.985 242.726 242.726v394.43c-3.792 132.74-109.985 238.933-246.518 238.933zM259.793 113.778c-72.06 0-128.949 56.889-128.949 128.948v394.43c0 72.059 56.89 128.948 128.949 128.948h504.414c68.267 0 128.949-56.89 128.949-128.948v-394.43c0-72.06-56.89-128.948-128.949-128.948H259.793zm56.888 887.466c-15.17 0-30.34-3.792-41.718-15.17-22.756-22.755-22.756-56.889 0-79.644l109.985-109.986c22.756-22.755 56.889-22.755 79.645 0s22.755 56.89 0 79.645L354.607 986.074c-7.585 7.585-22.755 15.17-37.926 15.17zm193.423-398.222c-45.511 0-91.023-22.755-117.57-56.889-18.964-26.548-15.171-60.681 7.585-79.644 26.548-18.963 60.681-15.17 79.644 7.585 15.17 18.963 45.511 18.963 56.889 0 18.963-22.755 56.889-30.34 79.644-7.585s30.341 56.889 7.585 79.644c-22.755 37.926-68.266 56.89-113.777 56.89z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), hs = [
  ms
];
function gs(e, t, n, l, o, a) {
  return c(), d("svg", {
    class: P(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, hs, 6);
}
const vs = /* @__PURE__ */ ve(ps, [["render", gs]]);
F("date");
const ys = F("del"), bs = /* @__PURE__ */ g("path", {
  d: "M668.444 1024H355.556c-142.223 0-256-113.778-256-256V170.667h824.888V768c0 142.222-113.777 256-256 256zM184.89 256v512c0 93.867 76.8 170.667 170.667 170.667h312.888c93.867 0 170.667-76.8 170.667-170.667V256H184.89zm753.778 0H85.333c-22.755 0-42.666-19.911-42.666-42.667s19.91-42.666 42.666-42.666h853.334c22.755 0 42.666 19.91 42.666 42.666S961.423 256 938.667 256zM625.777 85.333H398.223c-22.755 0-42.666-19.91-42.666-42.666S375.466 0 398.222 0h227.556c22.755 0 42.666 19.911 42.666 42.667s-19.91 42.666-42.666 42.666z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), $s = [
  bs
];
function ws(e, t, n, l, o, a) {
  return c(), d("svg", {
    class: P(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, $s, 6);
}
const xn = /* @__PURE__ */ ve(ys, [["render", ws]]);
F("del2");
F("dongdong");
F("dou-arrow-up");
const ks = F("down-arrow"), Cs = /* @__PURE__ */ g("path", {
  d: "M128 349.867C93.867 332.8 34.133 341.333 8.533 384-8.533 418.133 0 477.867 42.667 503.467 179.2 588.8 315.733 665.6 443.733 750.933c42.667 25.6 93.867 25.6 136.534 0C716.8 665.6 853.333 588.8 981.333 503.467c42.667-25.6 51.2-76.8 25.6-119.467s-76.8-51.2-119.466-25.6C768 435.2 640 512 512 588.8 384 512 256 435.2 128 349.867",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ss = [
  Cs
];
function Ts(e, t, n, l, o, a) {
  return c(), d("svg", {
    class: P(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ss, 6);
}
const eo = /* @__PURE__ */ ve(ks, [["render", Ts]]);
F("download");
F("dshop");
const Ns = F("edit"), Ds = /* @__PURE__ */ g("path", {
  d: "M285.479 992.97H108.606c-27.927 0-55.854-12.412-77.576-31.03C9.31 940.217 0 915.393 0 884.363l3.103-155.152c0-24.824 9.31-46.545 27.927-65.164L626.812 65.164c83.782-83.782 220.315-83.782 307.2 0 83.782 83.781 83.782 223.418 0 307.2l-605.09 601.988c-12.413 12.412-27.928 18.618-43.443 18.618zM781.964 93.09c-31.03 0-65.164 12.413-89.988 37.237L96.194 729.212 93.09 884.364c0 9.309 6.206 15.515 15.515 15.515h161.358l598.884-595.782c49.649-49.649 49.649-127.224 0-173.77l-3.103-3.103c-21.72-21.721-52.751-34.133-83.781-34.133zm-201.946 78.508 65.816-65.847L882.812 342.73l-65.846 65.784zM946.424 992.97H217.212c-24.824 0-46.545-21.722-46.545-46.546s21.72-46.545 46.545-46.545h729.212c24.824 0 46.546 21.721 46.546 46.545s-21.722 46.546-46.546 46.546z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), _s = [
  Ds
];
function Is(e, t, n, l, o, a) {
  return c(), d("svg", {
    class: P(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, _s, 6);
}
const Bs = /* @__PURE__ */ ve(Ns, [["render", Is]]);
F("eye");
const Ms = F("fabulous"), Ls = /* @__PURE__ */ g("path", {
  d: "M584.06 1024H318.577C144.118 1024 0 883.674 0 705.422s140.326-318.578 318.578-318.578v113.778c-113.778 0-204.8 91.022-204.8 204.8s91.022 204.8 204.8 204.8h265.481V1024zm56.888 0h-53.096c-208.593 0-379.26-170.667-379.26-383.052 0-83.437 26.549-163.081 75.852-231.348l3.793-3.793c15.17-22.755 30.34-60.681 45.511-121.363l7.585-34.133c7.586-18.963 15.17-41.718 18.963-68.267C386.844 22.756 470.281 0 519.586 0c117.57 0 178.251 106.193 178.251 212.385v7.585c0 7.586-3.793 18.963-3.793 37.926C876.09 257.896 1024 405.807 1024 587.852v53.096C1024 853.333 853.333 1024 640.948 1024zM519.585 113.778c-30.34 0-41.718 53.096-49.304 87.23-3.792 34.133-11.377 60.68-15.17 83.436l-7.585 34.134c-11.378 45.51-34.133 113.778-60.682 155.496l-7.585 3.793A269.274 269.274 0 0 0 322.37 644.74c0 147.91 121.363 269.274 269.274 269.274h53.097c147.91 0 269.274-121.363 269.274-269.274v-53.097c0-117.57-98.608-216.177-216.178-216.177h-56.889c-18.963-3.793-37.926-15.17-49.304-30.341-11.377-15.17-15.17-37.926-15.17-56.889 7.585-41.718 11.378-64.474 11.378-75.852v-3.792c-3.793 0-3.793-94.815-68.267-94.815z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ps = [
  Ls
];
function Es(e, t, n, l, o, a) {
  return c(), d("svg", {
    class: P(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1061 1024",
    role: "presentation"
  }, Ps, 6);
}
const As = /* @__PURE__ */ ve(Ms, [["render", Es]]), zs = F("failure"), Vs = /* @__PURE__ */ g("path", {
  d: "M512 1024C229.831 1024 0 794.169 0 512S229.831 0 512 0s512 229.831 512 512-229.831 512-512 512zm0-955.733C266.24 68.267 68.267 266.24 68.267 512S266.24 955.733 512 955.733 955.733 757.76 955.733 512 757.76 68.267 512 68.267zm111.502 282.169c13.654-13.654 34.134-13.654 47.787 0 11.378 11.377 13.653 31.857 2.275 45.51l-2.275 2.276-111.502 111.502 111.502 111.503c13.653 13.653 13.653 34.133 0 47.786-13.653 13.654-34.133 13.654-47.787 0L512 557.511 400.498 669.013c-11.378 11.378-31.858 13.654-45.511 2.276l-2.276-2.276c-11.378-11.377-13.653-31.857-2.275-45.51l2.275-2.276 111.502-111.503-111.502-111.502c-13.653-13.653-13.653-34.133 0-47.786s34.133-13.654 47.787 0L512 461.938l111.502-111.502z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Os = [
  Vs
];
function Hs(e, t, n, l, o, a) {
  return c(), d("svg", {
    class: P(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Os, 6);
}
const to = /* @__PURE__ */ ve(zs, [["render", Hs]]);
F("find");
F("follow");
F("footprint");
F("github");
F("heart-fill-n");
F("heart-fill");
F("heart-fill1");
F("heart-fill2");
F("heart-fill3");
F("heart-n");
F("heart");
F("heart1");
F("heart2");
F("home");
F("horizontal-n");
F("horizontal");
const Rs = F("image-error"), Fs = /* @__PURE__ */ g("path", {
  d: "M696.43 465.25c40.61 0 73.53-32.72 73.53-73.09s-32.96-73.08-73.53-73.08-73.54 32.72-73.54 73.08 32.92 73.09 73.54 73.09zM535.74 650.62l-273.61-259.4a56.19 56.19 0 0 0-15.36 11.58l-114 119.63-6-222.77c-.73-26.82 20.84-49.41 47.67-50.14l201.77-5.44 47.34-50-250.43 6.75C119 202.33 76.33 247.17 77.78 301l7.32 271.4 4.5 166.78C91.06 793 136.05 835.47 190.2 834l176-4.75 12-.32 47.34-50 116.18-122.64z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ws = /* @__PURE__ */ g("path", {
  d: "m861.71 214.8-242.83-33.86-55.09 41.46L855 263a49.05 49.05 0 0 1 41.79 55.13l-54.33 389.59-120.87-159.05A59.86 59.86 0 0 0 638.06 537l-44 33.08 65.07 86.15L603.84 698l-79.57 60.1-54.92 41.48 34.17 4.76 270.73 37.76a97.55 97.55 0 0 0 109.88-79.6 22.37 22.37 0 0 0 .65-3.44l60.53-434.16c7.44-53.32-29.95-102.62-83.6-110.1z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1);
function Ys(e, t, n, l, o, a) {
  return c(), d("svg", {
    class: P(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, [
    Fs,
    he(","),
    Ws
  ], 6);
}
const js = /* @__PURE__ */ ve(Rs, [["render", Ys]]), Ks = F("image"), Us = /* @__PURE__ */ g("path", {
  d: "M853.161 892.55H362.595l-209.433-.414a18.5 18.5 0 0 1-1.813-.092c-24.849-2.485-47.825-14.06-64.696-32.595-16.991-18.665-26.35-42.855-26.35-68.112V264.626c0-55.808 45.404-101.211 101.212-101.211H853.16c55.808 0 101.21 45.403 101.21 101.211v225.513c0 .275-.006.552-.018.826-.022.494-1.972 51.723 15.481 85.462 4.717 9.119 1.148 20.335-7.97 25.053-9.117 4.714-20.335 1.15-25.053-7.97-21.3-41.177-19.845-97.643-19.619-103.74V264.627c0-35.307-28.724-64.031-64.03-64.031H161.515c-35.308 0-64.032 28.724-64.032 64.031v526.711c0 32.755 24.321 59.958 56.718 63.62l208.431.412h490.53c35.306 0 64.03-28.725 64.03-64.032l-.382-93.677c-.105-1.75-1.587-19.548-19.55-42.5a9.548 9.548 0 0 1-.147-.19l-21.712-28.489-117.227-155.119c-.416-.55-38.995-50.852-86.272-45.534-38.335 4.315-75.955 45.164-108.79 118.132-17.615 39.141-34.65 68.269-52.082 89.046-17.607 20.986-35.68 33.52-55.251 38.317-43.423 10.638-81.05-18.995-120.887-50.373l-5.057-3.98c-46.555-36.578-68.75-28.224-158.33 59.602-7.33 7.188-19.1 7.071-26.289-.26-7.187-7.33-7.07-19.1.26-26.287 46.659-45.746 77.544-72.727 107.086-84.283 33.358-13.048 64.275-6.267 100.242 21.994l5.093 4.008c33.923 26.72 63.22 49.795 89.029 43.467 25.618-6.279 53.3-42.114 82.28-106.509 39.14-86.976 85.838-134.027 138.797-139.849 68.454-7.515 117.824 57.405 119.892 60.172l117.122 154.98 21.6 28.344c26.277 33.631 27.334 61.639 27.367 64.725l.001.128.384 94.06c.001 55.884-45.4 101.287-101.209 101.287z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Xs = /* @__PURE__ */ g("path", {
  d: "M312.328 446.968c-42.325 0-76.759-34.434-76.759-76.76s34.434-76.759 76.76-76.759 76.759 34.435 76.759 76.76-34.434 76.759-76.76 76.759zm0-116.34c-21.824 0-39.579 17.756-39.579 39.58s17.755 39.58 39.58 39.58 39.579-17.756 39.579-39.58-17.755-39.58-39.58-39.58z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1);
function qs(e, t, n, l, o, a) {
  return c(), d("svg", {
    class: P(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, [
    Us,
    he(","),
    Xs
  ], 6);
}
const Zs = /* @__PURE__ */ ve(Ks, [["render", qs]]);
F("issue");
F("JD");
F("jdl");
F("JIMI40");
const Gs = F("joy-smile"), Js = /* @__PURE__ */ g("path", {
  d: "M2185.74 479.429a117.992 117.992 0 1 0-162.829-170.852c-284.772 271.204-732.314 271.204-1017.087 0A118.05 118.05 0 0 0 842.996 479.43c375.98 358.045 966.705 358.045 1342.744 0",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Qs = [
  Js
];
function xs(e, t, n, l, o, a) {
  return c(), d("svg", {
    class: P(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 3072 1024",
    role: "presentation"
  }, Qs, 6);
}
const ea = /* @__PURE__ */ ve(Gs, [["render", xs]]), ta = F("left"), na = /* @__PURE__ */ g("path", {
  d: "M642.973 1005.542 321.912 587.098a123.278 123.278 0 0 1 0-150.17l321.06-418.443a47.182 47.182 0 0 1 74.83 57.422l-321.088 418.47a28.994 28.994 0 0 0 0 35.3l321.088 418.47a47.155 47.155 0 0 1-74.83 57.395",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), oa = [
  na
];
function la(e, t, n, l, o, a) {
  return c(), d("svg", {
    class: P(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, oa, 6);
}
const ln = /* @__PURE__ */ ve(ta, [["render", la]]), sa = F("link"), aa = /* @__PURE__ */ g("path", {
  d: "M313.034 1004.045c-66.848 0-124.402-24.156-170.798-70.577l-40.854-40.829C54.96 846.218 28.966 783.097 30.83 714.411c3.702-66.85 31.56-131.808 79.819-180.12l137.4-137.373c14.86-14.861 40.855-14.861 55.69 0 14.86 14.861 16.725 38.99 0 55.69l-137.348 137.4a187.47 187.47 0 0 0-55.69 126.24c-1.864 46.422 14.835 89.115 46.396 120.675l40.855 40.855c31.56 31.56 74.253 48.286 120.674 46.421 46.421-1.838 92.843-22.291 126.24-55.69l137.4-137.4c14.862-14.86 40.856-14.86 55.69 0 14.862 14.862 14.862 40.856 0 55.69l-137.4 137.427c-48.285 48.259-113.27 76.117-180.118 79.82a5.645 5.645 0 0 0-7.405 0zm475.294-382.477c-11.133 0-18.563-3.702-27.832-12.997-14.86-14.861-14.86-40.855 0-55.69l115.082-115.108a187.47 187.47 0 0 0 55.716-126.267c1.838-46.395-14.861-89.114-46.421-120.674l-40.855-40.855c-64.985-64.959-176.364-61.257-246.915 9.294L478.266 278.108c-14.835 14.835-40.829 14.835-55.69 0-14.86-14.861-14.86-40.855 0-55.716l118.81-118.81C643.524 1.444 803.163-2.232 899.734 94.287l40.829 40.855c46.421 46.421 72.415 109.541 70.55 178.228-3.702 66.85-31.56 131.807-79.819 180.093L816.186 608.571c-7.43 7.43-18.563 11.133-27.858 12.997zm-332.327-1.864c-11.16 0-18.564-3.702-27.832-12.997-14.888-14.835-14.888-40.829 0-55.69l148.506-148.532c14.861-14.862 40.855-14.862 55.69 0 14.861 14.86 14.861 40.854 0 55.69L483.832 606.706c-7.404 7.43-18.563 11.159-27.831 12.997z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ra = [
  aa
];
function ia(e, t, n, l, o, a) {
  return c(), d("svg", {
    class: P(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ra, 6);
}
const ua = /* @__PURE__ */ ve(sa, [["render", ia]]), ca = F("loading"), da = /* @__PURE__ */ g("path", {
  d: "M784 902.4c9.6 19.2 6.4 41.6-12.8 54.4-19.2 9.6-41.6 3.2-51.2-12.8-9.6-19.2-6.4-41.6 12.8-54.4 16-12.8 38.4-8 51.2 12.8zM550.4 984c0 22.4-16 38.4-38.4 38.4s-38.4-16-38.4-38.4v-24c0-22.4 19.2-38.4 41.6-38.4 19.2 0 35.2 16 38.4 38.4v25.6h-3.2zm-240-43.2c-9.6 19.2-35.2 25.6-54.4 16-19.2-9.6-25.6-35.2-16-51.2l28.8-51.2c9.6-19.2 35.2-25.6 54.4-16s25.6 35.2 12.8 54.4l-25.6 48zM121.6 784c-19.2 9.6-41.6 3.2-54.4-16-9.6-19.2-6.4-41.6 12.8-54.4l76.8-44.8c19.2-9.6 41.6-3.2 54.4 16 9.6 19.2 3.2 41.6-16 54.4L121.6 784zM38.4 552C16 552 0 536 0 513.6s16-38.4 38.4-38.4H160c22.4 0 38.4 19.2 38.4 38.4 0 22.4-16 38.4-38.4 38.4H38.4zm44.8-241.6c-19.2-9.6-25.6-35.2-16-51.2 9.6-19.2 35.2-25.6 54.4-16L256 320c19.2 9.6 25.6 35.2 16 54.4s-35.2 25.6-54.4 16l-134.4-80zm160-185.6 92.8 160c9.6 19.2 35.2 25.6 54.4 12.8s25.6-35.2 12.8-54.4l-92.8-160C297.6 64 275.2 60.8 256 70.4c-16 12.8-22.4 33.6-12.8 54.4zM473.6 40c0-22.4 16-38.4 38.4-38.4s38.4 19.2 38.4 38.4v184c0 22.4-19.2 38.4-38.4 38.4-22.4 0-38.4-19.2-38.4-38.4V40zm240 43.2c9.6-19.2 35.2-25.6 54.4-16 19.2 9.6 25.6 35.2 16 51.2l-92.8 160c-9.6 19.2-35.2 25.6-54.4 16-19.2-9.6-25.6-35.2-12.8-54.4l89.6-156.8zm188.8 160-160 92.8c-19.2 9.6-25.6 35.2-16 54.4 12.8 19.2 35.2 25.6 54.4 12.8l160-92.8c19.2-9.6 25.6-35.2 12.8-54.4-9.6-16-32-25.6-51.2-12.8zM985.6 472c22.4 0 38.4 16 38.4 38.4s-16 38.4-38.4 38.4H800c-22.4 0-38.4-19.2-38.4-38.4 0-22.4 19.2-38.4 38.4-38.4h185.6z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), fa = [
  da
];
function pa(e, t, n, l, o, a) {
  return c(), d("svg", {
    class: P(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, fa, 6);
}
const rt = /* @__PURE__ */ ve(ca, [["render", pa]]), ma = F("loading1"), ha = /* @__PURE__ */ g("path", {
  d: "M520.665 64.564a29.244 29.244 0 0 0-7.071-.894c-16.211 0-29.35 13.14-29.35 29.35 0 15.83 12.538 28.696 28.223 29.293v.073c.375 0 .751-.014 1.127-.014 216.493 0 389.629 173.942 389.629 390.433 0 216.496-173.136 388.827-389.63 388.827s-389.63-172.333-389.63-388.829c0-.27.01-.536.01-.804h-.01c0-16.209-13.141-29.35-29.35-29.35s-29.35 13.139-29.35 29.35c0 .055.007.11.007.164-.001.214-.007.425-.007.64 0 247.609 200.722 448.331 448.33 448.331 247.607 0 448.33-200.722 448.33-448.33-.002-245.242-196.917-444.456-441.258-448.24z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ga = [
  ha
];
function va(e, t, n, l, o, a) {
  return c(), d("svg", {
    class: P(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ga, 6);
}
const ya = /* @__PURE__ */ ve(ma, [["render", va]]), ba = F("location"), $a = /* @__PURE__ */ g("path", {
  d: "M512 971.487C259.938 971.487 52.513 764.062 52.513 512S259.938 52.513 512 52.513 971.487 259.938 971.487 512 764.062 971.487 512 971.487zm0-840.205c-210.051 0-380.718 170.667-380.718 380.718S301.95 892.718 512 892.718 892.718 722.05 892.718 512 722.05 131.282 512 131.282zm0 577.641c-107.651 0-196.923-89.272-196.923-196.923S404.349 315.077 512 315.077 708.923 404.349 708.923 512 619.651 708.923 512 708.923zm0-315.077c-65.641 0-118.154 52.513-118.154 118.154S446.36 630.154 512 630.154 630.154 577.64 630.154 512 577.64 393.846 512 393.846zm0-210.051c-21.005 0-39.385-18.38-39.385-39.385V39.385C472.615 18.379 490.995 0 512 0s39.385 18.38 39.385 39.385V144.41c0 21.005-18.38 39.385-39.385 39.385zM512 1024c-21.005 0-39.385-18.38-39.385-39.385V879.59c0-21.005 18.38-39.385 39.385-39.385s39.385 18.38 39.385 39.385v105.025c0 21.006-18.38 39.385-39.385 39.385zm472.615-472.615H879.59c-21.005 0-39.385-18.38-39.385-39.385s18.38-39.385 39.385-39.385h105.025c21.006 0 39.385 18.38 39.385 39.385s-18.38 39.385-39.385 39.385zm-840.205 0H39.385C18.379 551.385 0 533.005 0 512s18.38-39.385 39.385-39.385H144.41c21.005 0 39.385 18.38 39.385 39.385s-18.38 39.385-39.385 39.385z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), wa = [
  $a
];
function ka(e, t, n, l, o, a) {
  return c(), d("svg", {
    class: P(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, wa, 6);
}
const Ca = /* @__PURE__ */ ve(ba, [["render", ka]]), Sa = F("location2"), Ta = /* @__PURE__ */ g("path", {
  d: "m530.286 1005.714-25.6-10.971c-36.572-14.629-58.515-25.6-73.143-36.572-102.4-84.114-164.572-135.314-193.829-171.885-43.885-51.2-76.8-91.429-106.057-142.629C95.086 577.83 76.8 504.686 76.8 431.543c0-117.029 43.886-226.743 128-307.2C285.257 43.886 394.971 0 512 0s226.743 43.886 310.857 128c84.114 80.457 128 190.171 128 307.2 0 73.143-18.286 146.286-54.857 212.114-25.6 43.886-58.514 91.429-106.057 142.629-29.257 32.914-87.772 84.114-197.486 171.886 0 0-7.314 7.314-18.286 10.971l-43.885 32.914zM497.37 874.057s3.658 3.657 14.629 7.314c3.657-3.657 7.314-3.657 10.971-7.314C621.714 797.257 683.886 742.4 705.83 716.8c40.228-47.543 69.485-87.771 91.428-128 25.6-47.543 40.229-102.4 40.229-157.257 0-87.772-32.915-168.229-95.086-230.4-58.514-58.514-142.629-91.429-230.4-91.429S340.114 142.63 277.943 204.8c-62.172 62.171-95.086 142.629-95.086 230.4 0 54.857 14.629 109.714 40.229 157.257 25.6 43.886 54.857 80.457 95.085 124.343 25.6 29.257 84.115 80.457 179.2 157.257zm18.286-248.686c-102.4 0-182.857-80.457-182.857-182.857s80.457-182.857 182.857-182.857 182.857 80.457 182.857 182.857-80.457 182.857-182.857 182.857zm0-256c-40.228 0-73.143 32.915-73.143 73.143s32.915 73.143 73.143 73.143 73.143-32.914 73.143-73.143-32.914-73.143-73.143-73.143z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Na = [
  Ta
];
function Da(e, t, n, l, o, a) {
  return c(), d("svg", {
    class: P(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Na, 6);
}
const _a = /* @__PURE__ */ ve(Sa, [["render", Da]]);
F("locationg3");
F("lower");
F("marshalling");
const Ia = F("mask-close"), Ba = /* @__PURE__ */ g("path", {
  d: "M512 14.897C238.594 14.897 14.897 238.594 14.897 512S238.594 1009.103 512 1009.103 1009.103 785.406 1009.103 512 785.406 14.897 512 14.897zm207.126 646.234c16.57 16.57 16.57 41.425 0 57.995s-41.425 16.57-57.995 0L512 569.996l-149.13 149.13c-16.57 16.57-41.426 16.57-57.996 0s-16.57-41.425 0-57.995L454.004 512l-149.13-149.13c-16.57-16.57-16.57-41.426 0-57.996s41.425-16.57 57.995 0L512 454.004l149.13-149.13c16.57-16.57 41.426-16.57 57.996 0s16.57 41.425 0 57.995L569.996 512l149.13 149.13z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ma = [
  Ba
];
function La(e, t, n, l, o, a) {
  return c(), d("svg", {
    class: P(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ma, 6);
}
const Pa = /* @__PURE__ */ ve(Ia, [["render", La]]);
F("message");
F("microphone");
const Ea = F("minus"), Aa = /* @__PURE__ */ g("path", {
  d: "M299.52 460.8h409.6c28.16 0 51.2 23.04 51.2 51.2s-23.04 51.2-51.2 51.2h-409.6c-28.16 0-51.2-23.04-51.2-51.2s23.04-51.2 51.2-51.2z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), za = [
  Aa
];
function Va(e, t, n, l, o, a) {
  return c(), d("svg", {
    class: P(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, za, 6);
}
const Oa = /* @__PURE__ */ ve(Ea, [["render", Va]]);
F("more-s");
const Ha = F("more-x"), Ra = /* @__PURE__ */ g("path", {
  d: "M937.115 428.218c-43.442 0-80.679 37.237-80.679 80.679s37.237 80.679 80.68 80.679c43.442 0 80.678-37.237 80.678-80.679s-34.133-80.679-80.679-80.679m-428.218-52.751c-74.473 0-133.43 58.957-133.43 133.43s58.957 133.43 133.43 133.43 133.43-58.957 133.43-133.43-58.957-133.43-133.43-133.43M83.782 428.218c-43.443 0-80.679 37.237-80.679 80.679s34.133 80.679 80.679 80.679 80.679-37.237 80.679-80.679-37.237-80.679-80.68-80.679",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Fa = [
  Ra
];
function Wa(e, t, n, l, o, a) {
  return c(), d("svg", {
    class: P(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Fa, 6);
}
const Ya = /* @__PURE__ */ ve(Ha, [["render", Wa]]);
F("more");
F("my");
F("my2");
const ja = F("notice"), Ka = /* @__PURE__ */ g("path", {
  d: "M940.873 819.2h-85.334V430.933c0-192-153.6-345.6-341.333-345.6s-341.333 153.6-341.333 345.6V819.2H87.539V430.933C87.54 192 279.54 0 514.206 0s426.667 192 426.667 430.933V819.2zM514.633 1024c-68.267 0-132.267-29.867-174.934-85.333-17.066-17.067-12.8-42.667 4.267-59.734 17.067-12.8 46.933-12.8 59.733 8.534 29.867 34.133 68.267 51.2 110.934 51.2s81.066-17.067 106.666-51.2c12.8-17.067 42.667-21.334 59.734-8.534 17.066 12.8 21.333 42.667 8.533 59.734C646.899 994.133 582.899 1024 514.633 1024zm469.333-162.133h-12.8c-294.4-89.6-618.667-89.6-913.067 0-21.333 4.266-46.933-8.534-55.466-29.867-8.534-21.333 4.266-46.933 29.866-51.2 311.467-93.867 652.8-89.6 964.267 0 21.333 8.533 34.133 29.867 29.867 51.2-8.534 21.333-25.6 29.867-42.667 29.867z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ua = [
  Ka
];
function Xa(e, t, n, l, o, a) {
  return c(), d("svg", {
    class: P(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1027 1024",
    role: "presentation"
  }, Ua, 6);
}
const qa = /* @__PURE__ */ ve(ja, [["render", Xa]]);
F("order");
F("people");
const Za = F("photograph"), Ga = /* @__PURE__ */ g("path", {
  d: "M570.514 789.943c-119.954 0-219.428-99.474-219.428-219.429s99.474-219.428 219.428-219.428 219.429 99.474 219.429 219.428-99.474 219.429-219.429 219.429zm0-351.086c-73.143 0-131.657 58.514-131.657 131.657s58.514 131.657 131.657 131.657 131.657-58.514 131.657-131.657-58.514-131.657-131.657-131.657zM877.714 1024h-614.4C117.03 1024 0 906.971 0 760.686V380.343c0-146.286 117.029-263.314 263.314-263.314h32.183c0-2.926 2.926-8.778 2.926-11.703C315.977 43.886 374.49 0 438.857 0h263.314c70.218 0 128.732 49.737 143.36 117.029h32.183c146.286 0 263.315 117.028 263.315 263.314v380.343C1141.029 906.97 1024 1024 877.714 1024zm-614.4-819.2c-96.548 0-175.543 78.994-175.543 175.543v380.343c0 96.548 78.995 175.543 175.543 175.543h614.4c96.549 0 175.543-78.995 175.543-175.543V380.343c0-96.549-78.994-175.543-175.543-175.543H819.2c-32.183 0-58.514-26.331-58.514-58.514S734.354 87.77 702.17 87.77H438.857c-26.331 0-49.737 17.555-55.588 40.96-2.926 5.852-2.926 11.703-2.926 17.555 0 32.183-26.332 58.514-58.514 58.514h-58.515zm-87.771 160.914a73.143 73.143 0 1 0 146.286 0 73.143 73.143 0 1 0-146.286 0Z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ja = [
  Ga
];
function Qa(e, t, n, l, o, a) {
  return c(), d("svg", {
    class: P(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1141 1024",
    role: "presentation"
  }, Ja, 6);
}
const xa = /* @__PURE__ */ ve(Za, [["render", Qa]]);
F("play-circle-fill");
F("play-double-back");
F("play-double-forward");
F("play-start");
F("play-stop");
const er = F("plus"), tr = /* @__PURE__ */ g("path", {
  d: "M345.6 460.8h409.6q51.2 0 51.2 51.2t-51.2 51.2H345.6q-51.2 0-51.2-51.2t51.2-51.2zM550.4 256q51.2 0 51.2 51.2v409.6q0 51.2-51.2 51.2t-51.2-51.2V307.2q0-51.2 51.2-51.2z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), nr = [
  tr
];
function or(e, t, n, l, o, a) {
  return c(), d("svg", {
    class: P(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, nr, 6);
}
const lr = /* @__PURE__ */ ve(er, [["render", or]]);
F("poweroff-circle-fill");
const sr = F("rect-down"), ar = /* @__PURE__ */ g("path", {
  d: "M515.072 778.24c-14.336 0-28.672-5.632-39.936-16.384L69.12 356.864c-22.016-22.016-22.016-57.856 0-79.872s57.856-22.016 79.872 0L515.584 642.56 880.64 275.968c22.016-22.016 57.856-22.016 79.872 0s22.016 57.856 0 79.872L555.008 762.368c-10.752 10.752-25.6 15.872-39.936 15.872z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), rr = [
  ar
];
function ir(e, t, n, l, o, a) {
  return c(), d("svg", {
    class: P(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, rr, 6);
}
const ur = /* @__PURE__ */ ve(sr, [["render", ir]]);
F("rect-left");
F("rect-right");
const cr = F("rect-up"), dr = /* @__PURE__ */ g("path", {
  d: "M920.576 778.24c-14.336 0-28.672-5.632-39.936-16.384L515.072 395.264 148.48 760.832c-22.016 22.016-57.856 22.016-79.872 0s-22.016-57.856 0-79.872l406.528-405.504c22.016-22.016 57.856-22.016 79.872 0l405.504 406.528c22.016 22.016 22.016 57.856 0 79.872-11.264 11.264-25.6 16.384-39.936 16.384z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), fr = [
  dr
];
function pr(e, t, n, l, o, a) {
  return c(), d("svg", {
    class: P(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, fr, 6);
}
const mr = /* @__PURE__ */ ve(cr, [["render", pr]]);
F("refresh");
const hr = F("refresh2"), gr = /* @__PURE__ */ g("path", {
  d: "M771.938 315.077h199.55L958.358 469.99 758.81 364.964c-13.128-7.877-18.38-23.63-10.502-36.759 2.625-7.877 13.128-13.128 23.63-13.128zm-535.63 393.846H44.636L57.764 554.01l191.672 105.026c13.128 7.877 18.38 23.63 10.502 36.759-5.25 7.877-15.753 13.128-23.63 13.128zM509.374 1024C257.313 1024 44.636 845.456 5.251 596.02 0 575.016 15.754 556.637 36.76 551.386c21.005-2.626 42.01 10.502 44.636 31.507 34.133 210.052 215.302 362.339 427.98 362.339 191.671 0 362.338-128.657 417.476-312.452 5.252-21.005 28.882-34.133 49.887-26.256 21.006 5.251 34.134 28.882 26.257 49.887C937.354 871.713 735.179 1024 509.375 1024zm467.364-551.385c-18.379 0-36.759-13.128-39.384-34.133C903.22 231.056 722.05 78.77 509.374 78.77c-191.671 0-362.338 128.657-414.85 312.452-5.252 21.005-28.883 34.133-49.888 26.256-21.005-5.251-34.133-28.882-26.257-49.887C81.395 152.287 283.57 0 509.374 0c252.062 0 464.739 178.544 504.123 427.98 2.626 21.005-10.502 42.01-31.507 44.635h-5.252z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), vr = [
  gr
];
function yr(e, t, n, l, o, a) {
  return c(), d("svg", {
    class: P(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, vr, 6);
}
const br = /* @__PURE__ */ ve(hr, [["render", yr]]), $r = F("retweet"), wr = /* @__PURE__ */ g("path", {
  d: "M136 552h63.6c4.4 0 8-3.6 8-8V288.7h528.6v72.6c0 1.9.6 3.7 1.8 5.2 2.9 3.6 8.1 4.3 11.7 1.4L893 255.4c4.3-5 3.6-10.3 0-13.2L749.7 129.8c-1.5-1.2-3.3-1.8-5.2-1.8-4.6 0-8.4 3.8-8.4 8.4V209H199.7c-39.5 0-71.7 32.2-71.7 71.8V544c0 4.4 3.6 8 8 8zm752-80h-63.6c-4.4 0-8 3.6-8 8v255.3H287.8v-72.6c0-1.9-.6-3.7-1.8-5.2-2.9-3.6-8.1-4.3-11.7-1.4L131 768.6c-4.3 5-3.6 10.3 0 13.2l143.3 112.4c1.5 1.2 3.3 1.8 5.2 1.8 4.6 0 8.4-3.8 8.4-8.4V815h536.6c39.5 0 71.7-32.2 71.7-71.8V480c-.2-4.4-3.8-8-8.2-8z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), kr = [
  wr
];
function Cr(e, t, n, l, o, a) {
  return c(), d("svg", {
    class: P(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, kr, 6);
}
const Sr = /* @__PURE__ */ ve($r, [["render", Cr]]), Tr = F("right"), Nr = /* @__PURE__ */ g("path", {
  d: "M381.262 1005.566c-16.132 21.51-45.708 24.198-67.217 8.066-21.51-16.132-24.198-45.708-8.066-67.217C413.526 806.604 518.384 666.792 625.932 529.67c8.066-10.755 8.066-24.198 0-34.953C518.384 354.906 413.526 215.094 305.979 77.972c-16.132-21.51-10.755-51.085 8.066-67.217C335.555-5.377 365.13 0 381.262 18.82c107.547 142.5 212.405 282.311 319.953 419.434 34.952 43.019 34.952 104.858 0 150.566-107.548 139.811-212.406 279.622-319.953 416.745",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Dr = [
  Nr
];
function _r(e, t, n, l, o, a) {
  return c(), d("svg", {
    class: P(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Dr, 6);
}
const sn = /* @__PURE__ */ ve(Tr, [["render", _r]]);
F("s-follow");
F("scan");
F("scan2");
F("screen-little");
F("search");
F("search2");
const Ir = F("service"), Br = /* @__PURE__ */ g("path", {
  d: "M1024 657.723H905.846v-126.03c0-228.431-177.23-413.54-393.846-413.54s-393.846 185.109-393.846 413.54v126.03H0v-126.03C0 236.307 228.43 0 512 0s512 236.308 512 531.692v126.031zM196.923 866.462C86.646 866.462 0 779.815 0 669.538s86.646-196.923 196.923-196.923 196.923 86.647 196.923 196.923S307.2 866.462 196.923 866.462zm0-275.693c-43.323 0-78.77 35.446-78.77 78.77s35.447 78.769 78.77 78.769 78.77-35.446 78.77-78.77-35.447-78.769-78.77-78.769zm630.154 275.693c-110.277 0-196.923-86.647-196.923-196.924S716.8 472.615 827.077 472.615 1024 559.262 1024 669.538s-86.646 196.924-196.923 196.924zm0-275.693c-43.323 0-78.77 35.446-78.77 78.77s35.447 78.769 78.77 78.769 78.77-35.446 78.77-78.77-35.447-78.769-78.77-78.769zm-149.662 429.293c-23.63 0-47.261-15.754-55.138-43.324-7.877-31.507 7.877-63.015 39.385-74.83 102.4-31.508 189.046-102.4 236.307-196.923 15.754-27.57 51.2-39.385 78.77-23.631s39.384 51.2 23.63 78.77c-63.015 122.091-177.23 216.614-307.2 256-3.938 3.938-11.815 3.938-15.754 3.938z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Mr = [
  Br
];
function Lr(e, t, n, l, o, a) {
  return c(), d("svg", {
    class: P(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Mr, 6);
}
const Pr = /* @__PURE__ */ ve(Ir, [["render", Lr]]);
F("setting");
F("share-n");
F("share");
F("share1");
F("shop");
F("shop3");
const Er = F("star-fill-n"), Ar = /* @__PURE__ */ g("path", {
  d: "M1047.135 361.244 722.87 312.89 577.802 22.756c-2.844-8.534-11.378-14.223-19.911-17.067-19.911-8.533-45.511-2.845-54.045 17.067L358.78 312.889 34.513 358.4c-8.533 0-17.067 5.689-22.755 11.378-17.067 17.066-14.223 42.666 0 56.889l233.244 227.555-54.044 321.422c-2.845 8.534 0 17.067 2.844 25.6 11.378 19.912 34.133 28.445 54.044 17.067L537.98 867.556l290.133 150.755c8.533 2.845 17.067 5.689 25.6 2.845 22.756-2.845 36.978-25.6 34.133-45.512l-54.044-321.422 233.244-227.555c5.69-5.69 11.378-14.223 11.378-22.756 5.69-19.911-8.533-39.822-31.289-42.667z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), zr = [
  Ar
];
function Vr(e, t, n, l, o, a) {
  return c(), d("svg", {
    class: P(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1081 1024",
    role: "presentation"
  }, zr, 6);
}
const Or = /* @__PURE__ */ ve(Er, [["render", Vr]]);
F("star-fill");
F("star-fill1");
F("star-fill2");
F("star-n");
F("star");
F("star1");
F("star11");
F("star2");
const Hr = F("success"), Rr = /* @__PURE__ */ g("path", {
  d: "M762.311 391.396C655.36 466.489 566.613 552.96 491.52 659.91c-20.48 27.307-61.44 27.307-79.644-2.275-34.134-52.338-72.818-91.023-125.156-125.156-25.031-15.929-9.102-54.613 20.48-50.062 56.889 11.378 100.124 34.133 143.36 72.818 77.369-93.298 175.218-166.116 286.72-213.903 27.307-9.102 50.062 31.858 25.031 50.063M512 1024C229.831 1024 0 794.169 0 512S229.831 0 512 0s512 229.831 512 512-229.831 512-512 512zm0-955.733C266.24 68.267 68.267 266.24 68.267 512S266.24 955.733 512 955.733 955.733 757.76 955.733 512 757.76 68.267 512 68.267z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Fr = [
  Rr
];
function Wr(e, t, n, l, o, a) {
  return c(), d("svg", {
    class: P(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Fr, 6);
}
const Yr = /* @__PURE__ */ ve(Hr, [["render", Wr]]), jr = F("tips"), Kr = /* @__PURE__ */ g("path", {
  d: "M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512zm0-938.667c-234.667 0-426.667 192-426.667 426.667s192 426.667 426.667 426.667 426.667-192 426.667-426.667S746.667 85.333 512 85.333zM448 320a64 64 0 1 0 128 0 64 64 0 1 0-128 0Zm-17.067 149.333h51.2c12.8 0 21.334 8.534 21.334 21.334v8.533c0 12.8-8.534 21.333-21.334 21.333h-51.2c-12.8 0-25.6-12.8-25.6-25.6s12.8-25.6 25.6-25.6zm51.2 0H524.8c25.6 0 51.2 21.334 51.2 51.2v8.534L537.6 755.2c0 8.533-8.533 17.067-21.333 17.067H473.6c-25.6 0-51.2-21.334-51.2-51.2v-8.534L460.8 486.4c4.267-8.533 12.8-17.067 21.333-17.067zm8.534 251.734h76.8c12.8 0 25.6 12.8 25.6 25.6s-12.8 25.6-25.6 25.6h-76.8c-12.8 0-21.334-8.534-21.334-21.334v-12.8c4.267-12.8 12.8-17.066 21.334-17.066z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ur = [
  Kr
];
function Xr(e, t, n, l, o, a) {
  return c(), d("svg", {
    class: P(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ur, 6);
}
const no = /* @__PURE__ */ ve(jr, [["render", Xr]]), qr = F("top"), Zr = /* @__PURE__ */ g("path", {
  d: "M136.533 540.444c-11.377 0-25.6-5.688-34.133-17.066-14.222-19.911-11.378-45.511 8.533-59.734L477.867 179.2c19.91-14.222 45.51-11.378 59.733 8.533s11.378 45.511-8.533 59.734L162.133 531.91c-5.689 5.689-14.222 8.533-25.6 8.533zm745.245 0c-8.534 0-17.067-2.844-25.6-8.533L489.244 247.467c-19.91-14.223-22.755-42.667-8.533-59.734 14.222-19.91 42.667-22.755 59.733-8.533l366.934 284.444c19.91 14.223 22.755 42.667 8.533 59.734-8.533 11.378-19.911 17.066-34.133 17.066zM512 1024c-22.756 0-42.667-19.911-42.667-42.667v-768c0-22.755 19.911-42.666 42.667-42.666s42.667 19.91 42.667 42.666v768c0 22.756-19.911 42.667-42.667 42.667zM884.622 85.333h-742.4c-22.755 0-42.666-19.91-42.666-42.666S119.466 0 142.222 0h742.4c22.756 0 42.667 19.911 42.667 42.667s-19.911 42.666-42.667 42.666z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Gr = [
  Zr
];
function Jr(e, t, n, l, o, a) {
  return c(), d("svg", {
    class: P(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Gr, 6);
}
const Qr = /* @__PURE__ */ ve(qr, [["render", Jr]]), xr = F("triangle-down"), ei = /* @__PURE__ */ g("path", {
  d: "m573.056 752 308.8-404.608A76.8 76.8 0 0 0 820.736 224H203.232a76.8 76.8 0 0 0-61.056 123.392L450.976 752a76.8 76.8 0 0 0 122.08 0z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ti = [
  ei
];
function ni(e, t, n, l, o, a) {
  return c(), d("svg", {
    class: P(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ti, 6);
}
const oi = /* @__PURE__ */ ve(xr, [["render", ni]]), li = F("triangle-up"), si = /* @__PURE__ */ g("path", {
  d: "m573.056 272 308.8 404.608A76.8 76.8 0 0 1 820.736 800H203.232a76.8 76.8 0 0 1-61.056-123.392L450.976 272a76.8 76.8 0 0 1 122.08 0z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ai = [
  si
];
function ri(e, t, n, l, o, a) {
  return c(), d("svg", {
    class: P(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ai, 6);
}
const ii = /* @__PURE__ */ ve(li, [["render", ri]]);
F("uploader");
F("voice");
const ui = { class: "nut-button__wrap" }, qe = /* @__PURE__ */ Ce({
  name: "NutButton",
  __name: "button",
  props: {
    color: { default: "" },
    shape: { default: "round" },
    plain: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    type: { default: "default" },
    size: { default: "normal" },
    block: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e, l = t, o = (r) => {
      !n.loading && !n.disabled && l("click", r);
    }, a = N(() => {
      const r = "nut-button";
      return {
        [r]: !0,
        [`${r}--${n.type}`]: n.type,
        [`${r}--${n.size}`]: n.size,
        [`${r}--${n.shape}`]: n.shape,
        [`${r}--plain`]: n.plain,
        [`${r}--block`]: n.block,
        [`${r}--disabled`]: n.disabled,
        [`${r}--loading`]: n.loading
      };
    }), s = N(() => {
      let r = {};
      return n.color && (r = {
        color: n.plain ? n.color : "#fff",
        background: n.plain ? "#fff" : `border-box ${n.color}`
      }, n.color.includes("gradient") ? r.borderColor = "transparent" : r.borderColor = n.color), r;
    });
    return (r, i) => (c(), d("view", {
      class: P(a.value),
      style: A(s.value),
      onClick: o
    }, [
      g("view", ui, [
        r.loading ? (c(), J(ye(rt), {
          key: 0,
          class: "nut-icon-loading"
        })) : T("", !0),
        r.$slots.icon && !r.loading ? _(r.$slots, "icon", { key: 1 }) : T("", !0),
        r.$slots.default ? (c(), d("view", {
          key: 2,
          class: P({ "nut-button__text": r.$slots.icon || r.loading })
        }, [
          _(r.$slots, "default")
        ], 2)) : T("", !0)
      ])
    ], 6));
  }
}), At = (e) => {
  const t = fe([]), n = fe([]);
  return {
    children: t,
    linkChildren: (o) => {
      ze(e, Z({
        unlink: (r) => {
          if (r.proxy) {
            let i = n.indexOf(r);
            i > -1 && n.splice(i, 1);
            let p = t.indexOf(r.proxy);
            i > -1 && t.splice(p, 1);
          }
        },
        link: (r) => {
          r.proxy && (n.push(r), t.push(r.proxy));
        },
        children: t,
        internalChildren: n
      }, o));
    }
  };
}, Vt = (e) => {
  const t = Ee(e, null);
  if (t) {
    const n = Ue(), { link: l, unlink: o, internalChildren: a } = t;
    l(n), Xe(() => {
      o(n);
    });
    const s = N(() => a.indexOf(n));
    return { parent: t, index: s };
  }
  return {
    parent: t,
    index: N(() => -1)
  };
}, Te = (e) => {
  const t = e;
  return t.install = (n) => {
    t.name && n.component(t.name, t);
  }, t;
};
Te(qe);
const ci = (e) => e.replace(/-./g, (t) => t[1].toUpperCase());
function q(e) {
  return {
    componentName: "nut-" + e,
    create: function(n) {
      return n.name = "Nut" + ci("-" + e), n.install = (l) => {
        l.component(n.name, n);
      }, Ce(n);
    }
  };
}
const lt = (e, t) => e ? we(e, t) : "", an = (e, t) => {
  let n = document.body;
  const l = e.teleport || "body";
  l != "body" && (vl(l) ? n = document.querySelector(l) : n = e.teleport);
  const o = document.createElement("view"), a = t.name ? t.name + "-" : "", s = e.id || (/* @__PURE__ */ new Date()).getTime();
  o.id = a + s;
  let r = {};
  Et(t.wrapper) ? r = t.wrapper(n, o) : r = t.wrapper;
  const i = al(r, e), p = t.components;
  return p && p.forEach((f) => {
    i.use(f);
  }), n.appendChild(o), {
    instance: i.mount(o),
    unmount: () => {
      i.unmount(), n.removeChild(o);
    }
  };
};
function rn() {
  return Ue().proxy.$router || null;
}
const Be = (e) => {
  if (e !== void 0)
    return isNaN(Number(e)) ? String(e) : `${e}px`;
}, { componentName: di, create: fi } = q("cell"), pi = fi({
  components: { Right: sn },
  props: {
    title: { type: String, default: "" },
    subTitle: { type: String, default: "" },
    desc: { type: String, default: "" },
    descTextAlign: {
      type: String,
      default: "right"
    },
    isLink: { type: Boolean, default: !1 },
    to: [String, Object],
    replace: { type: Boolean, default: !1 },
    roundRadius: { type: [String, Number], default: "" },
    url: { type: String, default: "" },
    center: { type: Boolean, default: !1 },
    size: {
      type: String,
      default: "normal"
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = N(() => {
      const r = di;
      return {
        [r]: !0,
        [`${r}--clickable`]: e.isLink || e.to,
        [`${r}--center`]: e.center,
        [`${r}--large`]: e.size === "large"
      };
    }), l = rn(), o = N(() => ({
      borderRadius: Be(e.roundRadius)
    })), a = N(() => ({
      textAlign: e.descTextAlign
    }));
    return {
      handleClick: (r) => {
        t("click", r), e.to && l ? l[e.replace ? "replace" : "push"](e.to) : e.url && (e.replace ? location.replace(e.url) : location.href = e.url);
      },
      classes: n,
      baseStyle: o,
      descStyle: a
    };
  }
}), ee = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, o] of t)
    n[l] = o;
  return n;
}, mi = {
  key: 0,
  class: "nut-cell__icon"
}, hi = {
  key: 1,
  class: "nut-cell__title"
}, gi = { class: "title" }, vi = { class: "nut-cell__title-desc" };
function yi(e, t, n, l, o, a) {
  const s = U("Right");
  return c(), d("view", {
    class: P(e.classes),
    style: A(e.baseStyle),
    onClick: t[0] || (t[0] = (...r) => e.handleClick && e.handleClick(...r))
  }, [
    _(e.$slots, "default", {}, () => [
      e.$slots.icon ? (c(), d("view", mi, [
        _(e.$slots, "icon")
      ])) : T("", !0),
      e.title || e.subTitle || e.$slots.title ? (c(), d("view", hi, [
        e.subTitle ? (c(), d(Q, { key: 0 }, [
          _(e.$slots, "title", {}, () => [
            g("view", gi, E(e.title), 1)
          ]),
          g("view", vi, E(e.subTitle), 1)
        ], 64)) : _(e.$slots, "title", { key: 1 }, () => [
          he(E(e.title), 1)
        ])
      ])) : T("", !0),
      e.desc || e.$slots.desc ? (c(), d("view", {
        key: 2,
        class: P(["nut-cell__value", { "nut-cell__value--alone": !e.title && !e.subTitle && !e.$slots.title }]),
        style: A(e.descStyle)
      }, [
        _(e.$slots, "desc", {}, () => [
          he(E(e.desc), 1)
        ])
      ], 6)) : T("", !0),
      _(e.$slots, "link", {}, () => [
        e.isLink || e.to ? (c(), J(s, {
          key: 0,
          class: "nut-cell__link"
        })) : T("", !0)
      ])
    ])
  ], 6);
}
const oo = /* @__PURE__ */ ee(pi, [["render", yi]]), { create: bi } = q("cell-group"), $i = bi({
  props: {
    title: { type: String, default: "" },
    desc: { type: String, default: "" }
  }
}), wi = { class: "nut-cell-group" }, ki = {
  key: 1,
  class: "nut-cell-group__title"
}, Ci = {
  key: 3,
  class: "nut-cell-group__desc"
}, Si = { class: "nut-cell-group__wrap" };
function Ti(e, t, n, l, o, a) {
  return c(), d("view", wi, [
    e.$slots.title ? _(e.$slots, "title", { key: 0 }) : e.title ? (c(), d("view", ki, E(e.title), 1)) : T("", !0),
    e.$slots.desc ? _(e.$slots, "desc", { key: 2 }) : e.desc ? (c(), d("view", Ci, E(e.desc), 1)) : T("", !0),
    g("view", Si, [
      _(e.$slots, "default")
    ])
  ]);
}
const lo = /* @__PURE__ */ ee($i, [["render", Ti]]);
let mt = 0;
const Dn = "nut-overflow-hidden", Ni = (e) => [() => {
  if (e())
    try {
      !mt && Tn.classList.add(Dn), mt++;
    } catch (l) {
      console.warn("[NutUI] <useLockScroll>", l);
    }
}, () => {
  if (e() && mt)
    try {
      mt--, !mt && Tn.classList.remove(Dn);
    } catch (l) {
      console.warn("[NutUI] <unlock>", l);
    }
}], { componentName: Di, create: _i } = q("overlay"), Ii = _i({
  props: {
    visible: {
      type: Boolean,
      default: !1
    },
    zIndex: {
      type: [Number, String],
      default: 2e3
    },
    duration: {
      type: [Number, String],
      default: 0.3
    },
    lockScroll: {
      type: Boolean,
      default: !0
    },
    overlayClass: {
      type: String,
      default: ""
    },
    overlayStyle: {
      type: Object
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["click", "update:visible"],
  setup(e, { emit: t }) {
    const [n, l] = Ni(() => e.lockScroll), o = N(() => ({
      [Di]: !0,
      [e.overlayClass]: !0
    })), a = N(() => Z({
      transitionDuration: `${e.duration}s`,
      zIndex: e.zIndex
    }, e.overlayStyle));
    return $t(() => {
      e.visible ? n() : l();
    }), { classes: o, style: a, onClick: (r) => {
      t("click", r), e.closeOnClickOverlay && t("update:visible", !1);
    } };
  }
});
function Bi(e, t, n, l, o, a) {
  return c(), J(xt, { name: "overlay-fade" }, {
    default: ne(() => [
      Ie(g("view", {
        class: P(e.classes),
        style: A(e.style),
        onClick: t[0] || (t[0] = _e((...s) => e.onClick && e.onClick(...s), ["stop"]))
      }, [
        _(e.$slots, "default")
      ], 6), [
        [Me, e.visible]
      ])
    ]),
    _: 3
  });
}
const Tt = /* @__PURE__ */ ee(Ii, [["render", Bi]]), Nt = {
  visible: {
    type: Boolean,
    default: !1
  },
  zIndex: {
    type: [Number, String],
    default: 2e3
  },
  duration: {
    type: [Number, String],
    default: 0.3
  },
  lockScroll: {
    type: Boolean,
    default: !0
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: !0
  },
  position: {
    type: String,
    default: "center"
  },
  transition: {
    type: String,
    default: ""
  },
  style: {
    type: Object,
    default: () => ({})
  },
  popClass: {
    type: String,
    default: ""
  },
  closeable: {
    type: Boolean,
    default: !1
  },
  closeIconPosition: {
    type: String,
    default: "top-right"
  },
  destroyOnClose: {
    type: Boolean,
    default: !0
  },
  teleport: {
    type: [String, Element],
    default: "body"
  },
  overlay: {
    type: Boolean,
    default: !0
  },
  round: {
    type: Boolean,
    default: !1
  },
  teleportDisable: {
    type: Boolean,
    default: !1
  },
  safeAreaInsetBottom: {
    type: Boolean,
    default: !1
  },
  overlayClass: {
    type: String,
    default: ""
  },
  overlayStyle: {
    type: Object,
    default: () => ({})
  }
}, { componentName: Mi, create: Li } = q("popup"), so = 2e3;
let _n = so;
const Pi = Li({
  components: {
    NutOverlay: Tt,
    Close: zt
  },
  props: Nt,
  emits: ["clickPop", "clickCloseIcon", "open", "close", "opened", "closed", "clickOverlay", "update:visible"],
  setup(e, { emit: t }) {
    let n;
    const l = fe({
      zIndex: e.zIndex,
      showSlot: !0,
      closed: e.closeable
    }), o = N(() => ({
      [Mi]: !0,
      round: e.round,
      [`nut-popup--${e.position}`]: !0,
      [`nut-popup--${e.position}--safebottom`]: e.position === "bottom" && e.safeAreaInsetBottom,
      [e.popClass]: !0
    })), a = N(() => Z({
      zIndex: l.zIndex,
      transitionDuration: `${e.duration}s`
    }, e.style)), s = N(() => e.transition ? e.transition : `nut-popup-slide-${e.position}`), r = () => {
      n || (n = !0, e.zIndex !== so && (_n = Number(e.zIndex)), t("update:visible", !0), l.zIndex = ++_n, e.destroyOnClose && (l.showSlot = !0), t("open"));
    }, i = () => {
      n && (n = !1, t("update:visible", !1), t("close"), e.destroyOnClose && setTimeout(() => {
        l.showSlot = !1;
      }, +e.duration * 1e3));
    }, p = ($) => {
      t("clickPop", $);
    }, f = ($) => {
      $.stopPropagation(), t("clickCloseIcon", $), i();
    }, y = ($) => {
      t("clickOverlay", $), e.closeOnClickOverlay && i();
    }, v = ($) => {
      t("opened", $);
    }, b = ($) => {
      t("closed", $);
    };
    return x(
      () => e.visible,
      () => {
        e.visible && !n && r(), !e.visible && n && i();
      }
    ), $t(() => {
      l.closed = e.closeable;
    }), ce(Z({}, ge(l)), {
      popStyle: a,
      transitionName: s,
      classes: o,
      onClick: p,
      onClickCloseIcon: f,
      onClickOverlay: y,
      onOpened: v,
      onClosed: b
    });
  }
});
function Ei(e, t, n, l, o, a) {
  const s = U("nut-overlay"), r = U("Close");
  return c(), J(Yn, {
    to: e.teleport,
    disabled: !e.teleportDisable
  }, [
    e.overlay ? (c(), J(s, wt({
      key: 0,
      visible: e.visible,
      "close-on-click-overlay": e.closeOnClickOverlay,
      "z-index": e.zIndex,
      "lock-scroll": e.lockScroll,
      duration: e.duration,
      "overlay-class": e.overlayClass,
      "overlay-style": e.overlayStyle
    }, e.$attrs, { onClick: e.onClickOverlay }), null, 16, ["visible", "close-on-click-overlay", "z-index", "lock-scroll", "duration", "overlay-class", "overlay-style", "onClick"])) : T("", !0),
    oe(xt, {
      name: e.transitionName,
      onAfterEnter: e.onOpened,
      onAfterLeave: e.onClosed
    }, {
      default: ne(() => [
        Ie(g("view", {
          class: P(e.classes),
          style: A(e.popStyle),
          onClick: t[1] || (t[1] = (...i) => e.onClick && e.onClick(...i))
        }, [
          e.showSlot ? _(e.$slots, "default", { key: 0 }) : T("", !0),
          e.closed ? (c(), d("view", {
            key: 1,
            class: P(["nut-popup__close-icon", "nut-popup__close-icon--" + e.closeIconPosition]),
            onClick: t[0] || (t[0] = (...i) => e.onClickCloseIcon && e.onClickCloseIcon(...i))
          }, [
            _(e.$slots, "close-icon", {}, () => [
              oe(r, { height: "12px" })
            ])
          ], 2)) : T("", !0)
        ], 6), [
          [Me, e.visible]
        ])
      ]),
      _: 3
    }, 8, ["name", "onAfterEnter", "onAfterLeave"])
  ], 8, ["to", "disabled"]);
}
const Ae = /* @__PURE__ */ ee(Pi, [["render", Ei]]), Ai = (e) => ({
  props: {
    theme: { type: String, default: "" },
    themeVars: { type: Object, default: {} },
    tag: { type: String, default: e }
  },
  setup(t, { slots: n }) {
    const l = (r) => {
      if (!/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(r))
        return "";
      r = r.toLowerCase(), r.length === 4 && (r = "#" + r.slice(1).split("").map((f) => f + f).join(""));
      const p = [];
      for (let f = 1; f < 7; f += 2)
        p.push(parseInt("0x" + r.slice(f, f + 2)));
      return p.join(",");
    }, o = (r) => (r = r.replace(r.charAt(0), r.charAt(0).toLocaleLowerCase()), r.replace(/([a-z])([A-Z])/g, (i, p, f) => p + "-" + f.toLowerCase())), a = (r) => {
      if (!r)
        return;
      const i = {}, p = r == null ? void 0 : r.primaryColor;
      if (p) {
        const f = l(p);
        i["--nut-address-region-tab-line"] = `linear-gradient(90deg, ${p} 0%, rgba(${f}, 0.15) 100%)`, i["--nut-tabs-horizontal-tab-line-color"] = `linear-gradient(90deg, ${p} 0%, rgba(${f}, 0.15) 100%)`, i["--nut-tabs-vertical-tab-line-color"] = `linear-gradient(180deg, ${p} 0%, rgba(${f}, 0.15) 100%)`;
      }
      return Object.keys(r).forEach((f) => {
        i[`--nut-${o(f)}`] = r[f];
      }), i;
    }, s = N(() => a(t.themeVars));
    return () => {
      var r;
      return we(
        t.tag,
        {
          class: `nut-theme-${t.theme}`,
          style: s.value
        },
        (r = n.default) == null ? void 0 : r.call(n)
      );
    };
  }
}), { create: zi } = q("config-provider"), Vi = zi(Ai("div")), { componentName: Oi, create: Hi } = q("image"), Ri = Hi({
  props: {
    src: String,
    fit: {
      type: String,
      default: "fill"
    },
    position: {
      type: String,
      default: "center"
    },
    alt: {
      type: String,
      default: ""
    },
    width: {
      type: String,
      default: "center"
    },
    height: {
      type: String,
      default: ""
    },
    round: {
      type: Boolean,
      default: !1
    },
    radius: [String, Number],
    showError: {
      type: Boolean,
      default: !0
    },
    showLoading: {
      type: Boolean,
      default: !0
    },
    lazyLoad: {
      type: Boolean,
      default: !1
    }
  },
  components: {
    Image: Zs,
    ImageError: js
  },
  emits: ["click", "load", "error"],
  setup(e, { emit: t }) {
    const n = fe({
      loading: !0,
      isError: !1,
      slotLoding: at().loading,
      slotError: at().error
    }), l = N(() => {
      const b = Oi;
      return {
        [b]: !0,
        [`${b}-round`]: e.round
      };
    }), o = z(null), a = z(!1), s = z(null), r = () => {
      const b = {
        threshold: [0],
        rootMargin: "0px"
      };
      o.value = new IntersectionObserver(($) => {
        $.forEach((k) => {
          k.isIntersecting && (a.value = !0, o.value.disconnect());
        });
      }, b), s.value && o.value.observe(s.value);
    };
    be(() => {
      e.lazyLoad && r();
    }), en(() => {
      o.value && o.value.disconnect();
    });
    const i = N(() => {
      let b = {};
      return e.width && (b.width = Be(e.width)), e.height && (b.height = Be(e.height)), e.radius !== void 0 && e.radius !== null && (b.overflow = "hidden", b.borderRadius = Be(e.radius)), b;
    }), p = N(() => ({
      objectFit: e.fit,
      objectPosition: e.position
    }));
    x(
      () => e.src,
      () => {
        n.isError = !1, n.loading = !0;
      }
    );
    const f = () => {
      n.isError = !1, n.loading = !1, t("load");
    }, y = () => {
      n.isError = !0, n.loading = !1, t("error");
    }, v = (b) => {
      t("click", b);
    };
    return ce(Z({}, ge(n)), { imageClick: v, classes: l, styles: p, stylebox: i, error: y, load: f, show: a, imgRef: s });
  }
}), Fi = ["src", "date-src", "alt"], Wi = {
  key: 0,
  class: "nut-img-loading"
}, Yi = {
  key: 1,
  class: "nut-img-error"
};
function ji(e, t, n, l, o, a) {
  const s = U("Image"), r = U("ImageError");
  return c(), d("div", {
    class: P(e.classes),
    style: A(e.stylebox),
    onClick: t[2] || (t[2] = (...i) => e.imageClick && e.imageClick(...i))
  }, [
    g("img", {
      ref: "imgRef",
      class: "nut-img",
      src: e.lazyLoad ? e.show ? e.src : void 0 : e.src,
      "date-src": e.lazyLoad ? e.show ? void 0 : e.src : void 0,
      alt: e.alt,
      style: A(e.styles),
      onLoad: t[0] || (t[0] = (...i) => e.load && e.load(...i)),
      onError: t[1] || (t[1] = (...i) => e.error && e.error(...i))
    }, null, 44, Fi),
    e.loading ? (c(), d("div", Wi, [
      e.slotLoding ? T("", !0) : (c(), J(s, {
        key: 0,
        width: "16px",
        height: "20px",
        name: "image"
      })),
      _(e.$slots, "loading")
    ])) : T("", !0),
    e.isError && !e.loading ? (c(), d("div", Yi, [
      e.slotError ? T("", !0) : (c(), J(r, {
        key: 0,
        width: "16px",
        height: "20px",
        name: "imageError"
      })),
      _(e.$slots, "error")
    ])) : T("", !0)
  ], 6);
}
const Ki = /* @__PURE__ */ ee(Ri, [["render", ji]]), { create: Ui } = q("layout"), ao = Ui({});
Te(ao);
const ro = Symbol("nut-layout"), In = "nut-col", io = /* @__PURE__ */ Ce({
  name: "NutCol",
  __name: "col",
  props: {
    span: { default: 24 },
    offset: { default: 0 }
  },
  setup(e) {
    const t = e, n = Ee(ro), l = N(() => ({
      [In]: !0,
      [In + "-gutter"]: n,
      ["nut-col-" + t.span]: !0,
      ["nut-col-offset-" + t.offset]: !0
    })), o = N(() => ({
      paddingLeft: n / 2 + "px",
      paddingRight: n / 2 + "px"
    }));
    return (a, s) => (c(), d("view", {
      class: P(l.value),
      style: A(o.value)
    }, [
      _(a.$slots, "default")
    ], 6));
  }
});
Te(io);
const Xi = "nut-row", uo = /* @__PURE__ */ Ce({
  name: "NutRow",
  __name: "row",
  props: {
    type: { default: "" },
    gutter: { default: "" },
    justify: { default: "start" },
    align: { default: "flex-start" },
    flexWrap: { default: "nowrap" }
  },
  setup(e) {
    const t = e;
    ze(ro, t.gutter);
    const n = (o, a) => o ? a ? `nut-row-${o}-${a}` : "" : `nut-row-${a}`, l = N(() => [
      Xi,
      n("", t.type),
      n("justify", t.justify),
      n("align", t.align),
      n("flex", t.flexWrap)
    ]);
    return (o, a) => (c(), d("view", {
      class: P(l.value)
    }, [
      _(o.$slots, "default")
    ], 2));
  }
});
Te(uo);
const qi = /scroll|auto|overlay/i, co = window;
function Zi(e) {
  return e.tagName !== "HTML" && e.tagName !== "BODY" && e.nodeType === 1;
}
function Zt(e, t = co) {
  let n = e;
  for (; n && n !== t && Zi(n); ) {
    const { overflowY: l } = window.getComputedStyle(n);
    if (qi.test(l))
      return n;
    n = n.parentNode;
  }
  return t;
}
function fo(e, t = co) {
  const n = z();
  return be(() => {
    e.value && (n.value = Zt(e.value, t));
  }), n;
}
function Gi(e) {
  return typeof window != "undefined" && e === window;
}
const Ye = (e) => {
  const t = ye(e);
  if (Gi(t)) {
    const n = t.innerWidth, l = t.innerHeight;
    return {
      top: 0,
      left: 0,
      right: n,
      bottom: l,
      width: n,
      height: l
    };
  }
  return t && t.getBoundingClientRect ? t.getBoundingClientRect() : {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: 0,
    height: 0
  };
}, { create: Ji } = q("sticky"), Qi = Ji({
  props: {
    position: {
      type: String,
      default: "top"
    },
    top: {
      type: [Number, String],
      default: 0
    },
    bottom: {
      type: [Number, String],
      default: 0
    },
    container: {
      type: Object,
      default: null
    },
    zIndex: {
      type: [Number, String],
      default: 99
    }
  },
  emits: ["change"],
  setup(e, { emit: t }) {
    const n = z(), l = z(), o = fe({
      fixed: !1,
      height: 0,
      width: 0,
      transform: 0
    }), a = N(() => e.position === "top" ? Number(e.top) : Number(e.bottom)), s = N(() => o.fixed ? { height: `${o.height}px` } : {}), r = N(() => o.fixed ? {
      [e.position]: `${a.value}px`,
      height: `${o.height}px`,
      width: `${o.width}px`,
      transform: o.transform ? `translate3d(0, ${o.transform}px, 0)` : void 0,
      position: o.fixed ? "fixed" : void 0,
      zIndex: Number(e.zIndex)
    } : {}), i = () => {
      const p = e.container;
      if (!n.value && !p)
        return;
      const f = Ye(n), y = l.value, v = Ye(y), b = Ye(p);
      o.height = f.height, o.width = f.width;
      const $ = () => {
        let u = !1;
        if (e.position === "top")
          u = p ? a.value > f.top && b.bottom > 0 : a.value > f.top;
        else {
          const h = document.documentElement.clientHeight;
          u = p ? b.bottom > 0 && h - a.value - v.height > b.top : h - a.value < f.bottom;
        }
        return u;
      }, k = () => {
        if (p)
          if (e.position === "top") {
            const u = b.bottom - a.value - v.height;
            return u < 0 ? u : 0;
          } else {
            const u = document.documentElement.clientHeight, h = b.bottom - (u - a.value);
            return h < 0 ? h : 0;
          }
        return 0;
      };
      o.transform = k(), o.fixed = $();
    };
    return x(
      () => o.fixed,
      (p) => {
        t("change", p);
      }
    ), be(() => {
      i(), Zt(n.value).addEventListener("scroll", i, !0);
    }), Xe(() => {
      Zt(n.value).removeEventListener("scroll", i);
    }), { rootRef: n, rootStyle: s, stickyRef: l, stickyStyle: r };
  }
});
function xi(e, t, n, l, o, a) {
  return c(), d("div", {
    ref: "rootRef",
    class: "nut-sticky",
    style: A(e.rootStyle)
  }, [
    g("div", {
      ref: "stickyRef",
      class: "nut-sticky__box",
      style: A(e.stickyStyle)
    }, [
      _(e.$slots, "default")
    ], 4)
  ], 4);
}
const po = /* @__PURE__ */ ee(Qi, [["render", xi]]), mo = /* @__PURE__ */ Ce({
  name: "NutDivider",
  __name: "divider",
  props: {
    contentPosition: { default: "center" },
    dashed: { type: Boolean, default: !1 },
    hairline: { type: Boolean, default: !0 },
    direction: { default: "horizontal" }
  },
  setup(e) {
    const t = e, n = at(), l = N(() => {
      const o = "nut-divider";
      return t.direction === "horizontal" ? {
        [o]: !0,
        [`${o}-center`]: n.default,
        [`${o}-left`]: t.contentPosition === "left",
        [`${o}-right`]: t.contentPosition === "right",
        [`${o}-dashed`]: t.dashed,
        [`${o}-hairline`]: t.hairline
      } : {
        [o]: !0,
        [`${o}-vertical`]: t.direction === "vertical"
      };
    });
    return (o, a) => (c(), d("view", {
      class: P(l.value)
    }, [
      o.direction === "horizontal" ? _(o.$slots, "default", { key: 0 }) : T("", !0)
    ], 2));
  }
});
Te(mo);
function eu(e, t) {
  const n = [], l = (o) => {
    Array.isArray(o) && o.forEach((a) => {
      var s;
      if (il(a)) {
        if (t) {
          if (a.type && a.type.name === t) {
            n.push(a);
            return;
          }
        } else
          n.push(a);
        (s = a.component) != null && s.subTree && l(a.component.subTree.children), a.children && l(a.children);
      }
    });
  };
  return l(e), n;
}
function tu(e, t, n) {
  const l = eu(e.subTree.children, n);
  t.sort((o, a) => l.indexOf(o.vnode) - l.indexOf(a.vnode));
}
function nu(e, t) {
  const n = rl([]), l = Ue(), o = (r) => {
    r.proxy && (n.push(Cn(r)), tu(l, n, t));
  }, a = (r) => {
    n.splice(n.indexOf(Cn(r)), 1);
  }, s = Object.assign;
  return (r) => (ze(
    e,
    s(
      {
        add: o,
        remove: a,
        internalChildren: n
      },
      r
    )
  ), {
    internalChildren: n
  });
}
const { componentName: ou } = q("grid"), ho = Symbol("grid"), lu = {
  // 列数
  columnNum: {
    type: [Number, String],
    default: 4
  },
  // 是否显示边框
  border: {
    type: Boolean,
    default: !0
  },
  // 格子之间间隔距离
  gutter: {
    type: [Number, String],
    default: 0
  },
  // 是否内容居中
  center: {
    type: Boolean,
    default: !0
  },
  // 是否固定正方形
  square: {
    type: Boolean,
    default: !1
  },
  // 内容与文字翻转
  reverse: {
    type: Boolean,
    default: !1
  },
  // 内容排列方向
  direction: {
    type: String
  },
  // 是否开启点击反馈
  clickable: {
    type: Boolean,
    default: !1
  }
}, su = {
  props: lu,
  setup(e, { slots: t }) {
    nu(ho, "NutGridItem")({ props: e });
    const n = N(() => {
      const o = ou;
      return {
        [o]: !0,
        [`${o}--border`]: e.border && !e.gutter
      };
    }), l = N(() => {
      const o = {};
      return e.gutter && (o.paddingLeft = Be(e.gutter)), o;
    });
    return () => {
      var o;
      return we(
        "view",
        {
          class: n.value,
          style: l.value
        },
        (o = t.default) == null ? void 0 : o.call(t)
      );
    };
  }
}, { create: au } = q("grid"), ru = au(su);
function iu(e) {
  const t = Ee(e, null);
  if (t) {
    const n = Ue(), { add: l, remove: o, internalChildren: a } = t;
    l(n), Xe(() => o(n));
    const s = N(() => a.indexOf(n));
    return {
      parent: t,
      index: s
    };
  }
  return {
    parent: null,
    index: z(-1)
  };
}
const { create: uu, componentName: Bn } = q("grid-item"), cu = uu({
  props: {
    text: {
      type: String
    },
    // router
    to: {
      type: [String, Object]
    },
    url: {
      type: String,
      default: ""
    },
    replace: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = iu(ho);
    if (!n.parent)
      return {};
    const l = n.index, o = n.parent.props, a = N(() => ({
      [Bn]: !0
    })), s = N(() => {
      const f = {
        flexBasis: `${100 / +o.columnNum}%`
      };
      return o.square ? f.paddingTop = `${100 / +o.columnNum}%` : o.gutter && (f.paddingRight = Be(o.gutter), l.value >= +o.columnNum && (f.marginTop = Be(o.gutter))), f;
    }), r = N(() => {
      const f = `${Bn}__content`;
      return {
        [`${f}`]: !0,
        [`${f}--border`]: o.border,
        [`${f}--surround`]: o.border && o.gutter,
        [`${f}--center`]: o.center,
        [`${f}--square`]: o.square,
        [`${f}--reverse`]: o.reverse,
        [`${f}--${o.direction}`]: !!o.direction,
        [`${f}--clickable`]: o.clickable || e.to || e.url
      };
    }), i = rn();
    return {
      rootClass: a,
      rootStyle: s,
      contentClass: r,
      handleClick: (f) => {
        t("click", f), e.to && i ? i[e.replace ? "replace" : "push"](e.to) : e.url && (e.replace ? location.replace(e.url) : location.href = e.url);
      }
    };
  }
}), du = { class: "nut-grid-item__text" };
function fu(e, t, n, l, o, a) {
  return c(), d("view", {
    class: P(e.rootClass),
    style: A(e.rootStyle),
    onClick: t[0] || (t[0] = (...s) => e.handleClick && e.handleClick(...s))
  }, [
    g("view", {
      class: P(e.contentClass)
    }, [
      _(e.$slots, "default"),
      g("view", du, [
        e.text ? (c(), d(Q, { key: 0 }, [
          he(E(e.text), 1)
        ], 64)) : _(e.$slots, "text", { key: 1 })
      ])
    ], 2)
  ], 6);
}
const pu = /* @__PURE__ */ ee(cu, [["render", fu]]), { create: mu, componentName: st } = q("space"), hu = mu({
  props: {
    align: String,
    direction: {
      type: String,
      default: "horizontal"
    },
    justify: String,
    wrap: Boolean,
    gutter: [Number, String, Array],
    fill: Boolean
  },
  setup(e, { slots: t }) {
    const n = (f) => typeof f == "number" ? f + "px" : f, l = (f) => {
      const y = {};
      if (!e.gutter)
        return y;
      const v = `${n(Array.isArray(e.gutter) ? e.gutter[0] : e.gutter)}`, b = `${n(Array.isArray(e.gutter) ? e.gutter[1] : e.gutter)}`;
      return f ? e.wrap ? { marginBottom: b } : {} : (e.direction === "horizontal" && (y.marginRight = v), (e.direction === "vertical" || e.wrap) && (y.marginBottom = b), y);
    }, o = (f = []) => {
      const y = [];
      return f.forEach((v) => {
        Array.isArray(v) ? y.push(...v) : v.type === Q ? y.push(...o(v.children)) : y.push(v);
      }), y.filter(
        (v) => {
          var b;
          return !(v && (v.type === ul || v.type === Q && ((b = v.children) == null ? void 0 : b.length) === 0 || v.type === cl && v.children.trim() === ""));
        }
      );
    }, { direction: a, wrap: s, fill: r, justify: i, align: p } = e;
    return () => {
      var v;
      const f = o((v = t.default) == null ? void 0 : v.call(t)), y = () => f.map((b, $) => we(
        "div",
        {
          class: `${st}-item`,
          style: l($ === f.length - 1)
        },
        b
      ));
      return we(
        "div",
        {
          class: [
            st,
            a && `${st}-${a}`,
            p && `${st}-align-${p}`,
            i && `${st}-justify-${i}`,
            s && `${st}-wrap`,
            r && `${st}-fill`
          ]
        },
        y()
      );
    };
  }
}), gu = {
  key: 1,
  class: "nut-navbar__text"
}, vu = { class: "nut-navbar__title" }, yu = {
  key: 0,
  class: "nut-navbar__text"
}, go = /* @__PURE__ */ Ce({
  name: "NutNavbar",
  __name: "navbar",
  props: {
    leftShow: { type: Boolean, default: !1 },
    title: { default: "" },
    titleIcon: { type: Boolean, default: !1 },
    leftText: { default: "" },
    desc: { default: "" },
    fixed: { type: Boolean, default: !1 },
    safeAreaInsetTop: { type: Boolean, default: !1 },
    border: { type: Boolean, default: !1 },
    placeholder: { type: Boolean, default: !0 },
    zIndex: { default: 10 }
  },
  emits: [
    "clickBack",
    "clickTitle",
    "clickIcon",
    "clickRight",
    // will be deprecated
    "onClickBack",
    "onClickTitle",
    "onClickIcon",
    "onClickRight"
  ],
  setup(e, { emit: t }) {
    const n = e, l = t, o = z("auto"), a = z(), s = N(() => {
      const b = "nut-navbar";
      return {
        [b]: !0,
        [`${b}--border`]: n.border,
        [`${b}--fixed`]: n.fixed,
        [`${b}--safe-area-inset-top`]: n.safeAreaInsetTop
      };
    }), r = N(() => n.fixed && n.placeholder ? {
      height: o.value
    } : {}), i = () => {
      if (a.value) {
        const b = a.value.getBoundingClientRect();
        o.value = `${b.height}px`;
      }
    };
    be(() => {
      n.fixed && n.placeholder && Ne(() => {
        i();
      });
    });
    const p = () => {
      l("clickBack"), l("onClickBack");
    }, f = () => {
      l("clickTitle"), l("onClickTitle");
    }, y = () => {
      l("clickIcon"), l("onClickIcon");
    }, v = () => {
      l("clickRight"), l("onClickRight");
    };
    return (b, $) => (c(), d("view", {
      class: "nut-navbar--placeholder",
      style: A(r.value)
    }, [
      g("view", {
        ref_key: "navbarRef",
        ref: a,
        class: P(s.value),
        style: A({ zIndex: b.zIndex })
      }, [
        g("view", {
          class: "nut-navbar__left",
          onClick: p
        }, [
          b.leftShow ? _(b.$slots, "left-show", { key: 0 }, () => [
            oe(ye(ln), {
              height: "12px",
              color: "#979797"
            })
          ]) : T("", !0),
          b.leftText ? (c(), d("view", gu, E(b.leftText), 1)) : T("", !0),
          _(b.$slots, "left")
        ]),
        g("view", vu, [
          b.title ? (c(), d("view", {
            key: 0,
            class: "title",
            onClick: f
          }, E(b.title), 1)) : T("", !0),
          b.titleIcon ? (c(), d("view", {
            key: 1,
            class: "icon",
            onClick: y
          }, [
            _(b.$slots, "title-icon", { onClick: y })
          ])) : T("", !0),
          _(b.$slots, "content")
        ]),
        g("view", {
          class: "nut-navbar__right",
          onClick: v
        }, [
          b.desc ? (c(), d("view", yu, E(b.desc), 1)) : T("", !0),
          _(b.$slots, "right")
        ])
      ], 6)
    ], 4));
  }
});
Te(go);
const Se = (e = "") => (t, ...n) => {
  e = e.toLocaleLowerCase();
  const l = Gn.languages();
  let o = t;
  e && e.startsWith("nut") && (o = `${e.slice(3)}.${t}`);
  const a = Xt(l, o) || Xt(l, t);
  return Et(a) ? a(...n) : a;
}, { create: bu } = q("fixed-nav"), $u = "NutFixedNav", wu = bu({
  components: {
    NutOverlay: Tt,
    Left: ln
  },
  props: {
    visible: {
      type: Boolean,
      default: !1
    },
    overlay: {
      type: Boolean,
      default: !0
    },
    navList: {
      default: () => [],
      type: Array
    },
    activeColor: {
      default: "",
      type: String
    },
    activeText: {
      default: "",
      type: String
    },
    unActiveText: {
      default: "",
      type: String
    },
    position: {
      default: () => ({
        top: "auto",
        bottom: "auto"
      }),
      type: Object
    },
    type: {
      default: "right",
      type: String
    }
  },
  emits: ["update:visible", "selected"],
  setup(e, { emit: t }) {
    const n = Se($u), l = N(() => ({
      ["nut-fixed-nav"]: !0,
      active: e.visible,
      [e.type]: !0
    })), o = z(-1);
    return { classes: l, updateValue: (r = !e.visible) => {
      t("update:visible", r);
    }, selected: (r, i) => {
      t("selected", {
        item: r,
        event: i
      }), o.value = r.id;
    }, translate: n, current: o };
  }
}), ku = { class: "nut-fixed-nav__list" }, Cu = ["onClick"], Su = ["src"], Tu = { class: "span" }, Nu = {
  key: 0,
  class: "b"
}, Du = { class: "text" };
function _u(e, t, n, l, o, a) {
  const s = U("nut-overlay"), r = U("Left");
  return c(), d("view", {
    class: P(e.classes),
    style: A(e.position)
  }, [
    e.overlay ? (c(), J(s, {
      key: 0,
      visible: e.visible,
      "z-index": 200,
      onClick: t[0] || (t[0] = (i) => e.updateValue(!1))
    }, null, 8, ["visible"])) : T("", !0),
    _(e.$slots, "list", {}, () => [
      g("view", ku, [
        (c(!0), d(Q, null, ie(e.navList, (i, p) => (c(), d("view", {
          key: i.id || p,
          class: P(["nut-fixed-nav__list-item", { active: i.id == e.current }]),
          onClick: (f) => e.selected(i, f)
        }, [
          g("img", {
            src: i.icon
          }, null, 8, Su),
          g("view", Tu, E(i.text), 1),
          i.num ? (c(), d("view", Nu, E(i.num), 1)) : T("", !0)
        ], 10, Cu))), 128))
      ])
    ]),
    g("div", {
      class: "nut-fixed-nav__btn",
      onClick: t[1] || (t[1] = (i) => e.updateValue())
    }, [
      _(e.$slots, "btn", {}, () => [
        oe(r, { color: "#fff" }),
        g("view", Du, E(e.visible ? e.activeText || e.translate("activeText") : e.unActiveText || e.translate("unActiveText")), 1)
      ])
    ])
  ], 6);
}
const Iu = /* @__PURE__ */ ee(wu, [["render", _u]]), vo = Symbol("nut-menu"), { componentName: Bu, create: Mu } = q("menu"), Lu = Mu({
  components: {
    RectUp: mr,
    RectDown: ur
  },
  props: {
    activeColor: {
      type: String,
      default: ""
    },
    overlay: {
      type: Boolean,
      default: !0
    },
    lockScroll: {
      type: Boolean,
      default: !0
    },
    duration: {
      type: [Number, String],
      default: 0.3
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: !0
    },
    direction: {
      type: String,
      default: "down"
    },
    scrollFixed: {
      type: [Boolean, String, Number],
      default: !1
    },
    titleClass: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = z(), n = z(0), l = z(!1), { children: o, linkChildren: a } = At(vo), s = N(() => o.some((b) => b.state.showWrapper)), r = N(() => ({
      [Bu]: !0,
      "scroll-fixed": l.value
    })), i = () => {
      if (t.value) {
        const b = Ye(t);
        e.direction === "down" ? n.value = b.bottom : n.value = window.innerHeight - b.top;
      }
    };
    a({ props: e, offset: n });
    const p = (b) => {
      o.forEach(($, k) => {
        k === b ? (i(), $.toggle()) : $.state.showPopup && $.toggle(!1, { immediate: !0 });
      });
    }, f = (b) => Math.max(0, "scrollTop" in b ? b.scrollTop : b.pageYOffset), y = () => {
      const { scrollFixed: b } = e, $ = f(window);
      l.value = $ > (typeof b == "boolean" ? 30 : Number(b));
    }, v = (b) => {
      let $ = "";
      const { titleClass: k } = e;
      return b && ($ += "active"), k && ($ += ` ${k}`), $;
    };
    return be(() => {
      const { scrollFixed: b } = e;
      b && window.addEventListener("scroll", y);
    }), Xe(() => {
      const { scrollFixed: b } = e;
      b && window.removeEventListener("scroll", y);
    }), {
      toggleItem: p,
      children: o,
      opened: s,
      classes: r,
      barRef: t,
      getClasses: v
    };
  }
}), Pu = ["onClick"], Eu = { class: "nut-menu__title-text" }, Au = { class: "nut-menu__title-icon" };
function zu(e, t, n, l, o, a) {
  const s = U("RectUp"), r = U("RectDown");
  return c(), d("view", {
    class: P(e.classes)
  }, [
    g("view", {
      ref: "barRef",
      class: P(["nut-menu__bar", { opened: e.opened }])
    }, [
      (c(!0), d(Q, null, ie(e.children, (i, p) => (c(), d("view", {
        key: p,
        class: P(["nut-menu__item", { disabled: i.disabled, active: i.state.showPopup }]),
        style: A({ color: i.state.showPopup ? e.activeColor : "" }),
        onClick: (f) => !i.disabled && e.toggleItem(p)
      }, [
        g("view", {
          class: P(["nut-menu__title", e.getClasses(i.state.showPopup)])
        }, [
          g("view", Eu, E(i.renderTitle()), 1),
          g("span", Au, [
            _(e.$slots, "icon", {}, () => [
              e.direction === "up" ? (c(), J(s, { key: 0 })) : (c(), J(r, { key: 1 }))
            ])
          ])
        ], 2)
      ], 14, Pu))), 128))
    ], 2),
    _(e.$slots, "default")
  ], 2);
}
const Vu = /* @__PURE__ */ ee(Lu, [["render", zu]]), { create: Ou } = q("menu-item"), Hu = Ou({
  props: {
    title: String,
    options: {
      type: Array,
      default: []
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    modelValue: null,
    cols: {
      type: Number,
      default: 1
    },
    activeTitleClass: String,
    inactiveTitleClass: String
  },
  components: {
    NutPopup: Ae,
    Check: Jn
  },
  emits: ["update:modelValue", "change", "open", "close"],
  setup(e, { emit: t }) {
    const n = fe({
      showPopup: !1,
      showWrapper: !1
    }), { parent: l } = Vt(vo), o = N(() => l.props.direction === "down" ? {
      top: l.offset.value + "px"
    } : {
      bottom: l.offset.value + "px"
    }), a = N(() => {
      const y = { height: l.offset.value + "px" };
      return l.props.direction === "down" ? ce(Z({}, y), { top: "0px" }) : ce(Z({}, y), { bottom: "0px" });
    });
    return {
      style: o,
      placeholderElementStyle: a,
      renderTitle: () => {
        var v;
        if (e.title)
          return e.title;
        const y = (v = e.options) == null ? void 0 : v.find((b) => b.value === e.modelValue);
        return y ? y.text : "";
      },
      state: n,
      parent: l,
      toggle: (y = !n.showPopup) => {
        y !== n.showPopup && (n.showPopup = y, y && (n.showWrapper = !0, t("open")));
      },
      onClick: (y) => {
        n.showPopup = !1, y.value !== e.modelValue && (t("update:modelValue", y.value), t("change", y.value));
      },
      handleClose: () => {
        t("close"), n.showWrapper = !1;
      },
      handleClickOutside: () => {
        n.showPopup = !1, t("close");
      }
    };
  }
}), Ru = { class: "nut-menu-item__content nut-menu-item__overflow" }, Fu = ["onClick"];
function Wu(e, t, n, l, o, a) {
  const s = U("Check"), r = U("nut-popup");
  return Ie((c(), d("view", {
    class: "nut-menu-item",
    style: A(e.style)
  }, [
    Ie(g("div", {
      class: "nut-menu-item-placeholder-element",
      style: A(e.placeholderElementStyle),
      onClick: t[0] || (t[0] = (...i) => e.handleClickOutside && e.handleClickOutside(...i))
    }, null, 4), [
      [Me, e.state.showPopup]
    ]),
    oe(r, wt(e.$attrs, {
      visible: e.state.showPopup,
      "onUpdate:visible": t[1] || (t[1] = (i) => e.state.showPopup = i),
      style: { position: "absolute" },
      "overlay-style": { position: "absolute" },
      position: e.parent.props.direction === "down" ? "top" : "bottom",
      duration: e.parent.props.duration,
      "destroy-on-close": !1,
      overlay: e.parent.props.overlay,
      "lock-scroll": e.parent.props.lockScroll,
      "teleport-disable": !1,
      "close-on-click-overlay": e.parent.props.closeOnClickOverlay,
      onClosed: e.handleClose
    }), {
      default: ne(() => [
        g("view", Ru, [
          (c(!0), d(Q, null, ie(e.options, (i, p) => (c(), d("view", {
            key: p,
            class: P(["nut-menu-item__option", [{ active: i.value === e.modelValue }]]),
            style: A({ "flex-basis": 100 / e.cols + "%" }),
            onClick: (f) => e.onClick(i)
          }, [
            i.value === e.modelValue ? (c(), d("span", {
              key: 0,
              class: P(["nut-menu-item__span", [i.value === e.modelValue ? e.activeTitleClass : e.inactiveTitleClass]])
            }, [
              _(e.$slots, "icon", {}, () => [
                oe(s, wt(e.$attrs, {
                  color: e.parent.props.activeColor
                }), null, 16, ["color"])
              ])
            ], 2)) : T("", !0),
            g("view", {
              class: P([i.value === e.modelValue ? e.activeTitleClass : e.inactiveTitleClass]),
              style: A({ color: i.value === e.modelValue ? e.parent.props.activeColor : "" })
            }, E(i.text), 7)
          ], 14, Fu))), 128)),
          _(e.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["visible", "position", "duration", "overlay", "lock-scroll", "close-on-click-overlay", "onClosed"])
  ], 4)), [
    [Me, e.state.showWrapper]
  ]);
}
const Yu = /* @__PURE__ */ ee(Hu, [["render", Wu]]), yo = Symbol("nut-tabbar"), bo = /* @__PURE__ */ Ce({
  name: "NutTabbar",
  __name: "tabbar",
  props: {
    modelValue: { default: 0 },
    bottom: { type: Boolean, default: !1 },
    unactiveColor: { default: "" },
    activeColor: { default: "" },
    safeAreaInsetBottom: { type: Boolean, default: !1 },
    placeholder: { type: Boolean, default: !1 }
  },
  emits: ["tabSwitch", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, l = t, o = z(), a = z(null), s = z(n.modelValue), r = N(() => ({
      ["nut-tabbar"]: !0,
      "nut-tabbar-bottom": n.bottom,
      "nut-tabbar-safebottom": n.safeAreaInsetBottom
    })), { children: i, linkChildren: p } = At(yo);
    return p({ props: n, activeIndex: s, changeIndex: (v, b) => {
      s.value = b, l("update:modelValue", b), l("tabSwitch", i[v], b);
    } }), x(
      () => n.modelValue,
      (v) => {
        s.value = v;
      }
    ), be(() => {
      n.bottom && n.placeholder && Ne(() => {
        var b;
        const v = (b = a.value) == null ? void 0 : b.getBoundingClientRect().height;
        v && (o.value = v);
      });
    }), (v, b) => (c(), d("div", {
      class: P({ "nut-tabbar__placeholder": v.bottom && v.placeholder }),
      style: A({ height: o.value + "px" })
    }, [
      g("view", {
        ref_key: "nutTabbar",
        ref: a,
        class: P(r.value)
      }, [
        _(v.$slots, "default")
      ], 2)
    ], 6));
  }
});
Te(bo);
const { create: ju } = q("badge"), Ku = ju({
  props: {
    value: {
      type: [String, Number]
    },
    max: {
      type: Number,
      default: 1e4
    },
    dot: {
      type: Boolean,
      default: !1
    },
    bubble: {
      type: Boolean,
      default: !1
    },
    hidden: {
      type: Boolean,
      default: !1
    },
    top: {
      type: String,
      default: "0"
    },
    right: {
      type: String,
      default: "0"
    },
    zIndex: {
      type: Number,
      default: 9
    },
    color: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = fe({}), n = N(() => ({
      top: `${e.top}px`,
      right: `${e.right}px`,
      zIndex: e.zIndex,
      background: e.color
    })), l = N(() => {
      if (e.dot)
        return;
      const o = e.value, a = e.max;
      return typeof o == "number" && typeof a == "number" && a < o ? `${a}+` : o;
    });
    return {
      state: t,
      stl: n,
      content: l
    };
  }
}), Uu = { class: "nut-badge" }, Xu = ["textContent"];
function qu(e, t, n, l, o, a) {
  return c(), d("view", Uu, [
    Ie(g("view", {
      class: "nut-badge__icon",
      style: A(e.stl)
    }, [
      _(e.$slots, "icon")
    ], 4), [
      [Me, !e.hidden && !e.dot && e.$slots.icon]
    ]),
    _(e.$slots, "default"),
    Ie(g("view", {
      class: P(["nut-badge__content nut-badge__content--sup", { "nut-badge__content--dot": e.dot, "nut-badge__content--bubble": !e.dot && e.bubble }]),
      style: A(e.stl),
      textContent: E(e.content)
    }, null, 14, Xu), [
      [Me, !e.hidden && (e.content || e.dot)]
    ])
  ]);
}
const $o = /* @__PURE__ */ ee(Ku, [["render", qu]]), Zu = { class: "nut-tabbar-item_icon-box" }, Gu = {
  key: 0,
  class: "nut-tabbar-item_icon-box_icon"
}, Ju = { key: 1 }, Qu = { key: 0 }, wo = /* @__PURE__ */ Ce({
  name: "NutTabbarItem",
  __name: "tabbar-item",
  props: {
    tabTitle: { default: "" },
    name: {},
    icon: {},
    href: { default: "" },
    to: {}
  },
  setup(e) {
    const t = e, n = rn(), { parent: l, index: o } = Vt(yo), a = N(() => {
      var i;
      return ((i = t.name) != null ? i : o.value) === l.activeIndex.value;
    }), s = N(() => a.value ? l.props.activeColor : l.props.unactiveColor), r = () => {
      var p, f, y;
      const i = (p = t.name) != null ? p : o.value;
      if (l.changeIndex(o.value, i), (f = l.children[o.value]) != null && f.href) {
        window.location.href = l.children[o.value].href;
        return;
      }
      if ((y = l.children[o.value]) != null && y.to) {
        const v = l.children[o.value].to;
        v && n ? n.push(v) : location.replace(v);
      }
    };
    return (i, p) => (c(), d("div", {
      class: P(["nut-tabbar-item", { "nut-tabbar-item__icon--unactive": !a.value }]),
      style: A({
        color: s.value
      }),
      onClick: r
    }, [
      oe($o, dl(fl(i.$attrs)), {
        default: ne(() => [
          g("view", Zu, [
            i.$slots.icon ? (c(), d("div", Gu, [
              _(i.$slots, "icon", { active: a.value })
            ])) : T("", !0),
            i.icon && !i.$slots.icon ? (c(), d("view", Ju, [
              (c(), J(Oe(ye(lt)(i.icon)), { class: "nut-popover-item-img" }))
            ])) : T("", !0),
            g("view", {
              class: P(["nut-tabbar-item_icon-box_nav-word", { "nut-tabbar-item_icon-box_big-word": !i.icon && !i.$slots.icon }])
            }, [
              _(i.$slots, "default", {}, () => [
                i.tabTitle ? (c(), d("view", Qu, E(i.tabTitle), 1)) : T("", !0)
              ])
            ], 2)
          ])
        ]),
        _: 3
      }, 16)
    ], 6));
  }
});
Te(wo);
const { create: xu } = q("elevator"), ec = xu({
  props: {
    height: {
      type: [Number, String],
      default: "200px"
    },
    acceptKey: {
      type: [String],
      default: "title"
    },
    indexList: {
      type: Array,
      default: () => []
    },
    isSticky: {
      type: [Boolean],
      default: !1
    },
    spaceHeight: {
      type: [Number],
      default: 23
    },
    titleHeight: {
      type: [Number],
      default: 35
    }
  },
  emits: ["clickItem", "clickIndex", "change"],
  setup(e, { emit: t, expose: n }) {
    const l = z(null), o = fe({
      anchorIndex: 0,
      codeIndex: 0,
      listHeight: [],
      listGroup: [],
      touchState: {
        y1: 0,
        y2: 0
      },
      scrollStart: !1,
      currentIndex: 0,
      currentData: {},
      currentKey: "",
      scrollY: 0,
      diff: -1,
      fixedTop: 0
    }), a = N(() => l.value.clientHeight), s = (u, h) => u.getAttribute("data-" + h), r = (u) => {
      Ne(() => {
        !o.listGroup.includes(u) && u != null && o.listGroup.push(u);
      });
    }, i = () => {
      let u = 0;
      o.listHeight.push(u);
      for (let h = 0; h < o.listGroup.length; h++) {
        let m = o.listGroup[h];
        u += Math.floor(m.clientHeight), o.listHeight.push(u);
      }
    }, p = (u) => {
      !u && u !== 0 || (u < 0 && (u = 0), u > o.listHeight.length - 2 && (u = o.listHeight.length - 2), o.codeIndex = u, l.value.scrollTo(0, o.listHeight[u]));
    }, f = (u) => {
      o.scrollStart = !0;
      let h = s(u.target, "index"), m = u.touches[0];
      o.touchState.y1 = m.pageY, o.anchorIndex = +h, o.codeIndex = +h, p(+h);
    }, y = (u) => {
      let h = u.touches[0];
      o.touchState.y2 = h.pageY;
      let m = (o.touchState.y2 - o.touchState.y1) / e.spaceHeight | 0;
      o.codeIndex = o.anchorIndex + m, p(o.codeIndex);
    }, v = () => {
      o.scrollStart = !1;
    }, b = (u, h) => {
      t("clickItem", u, h), o.currentData = h, o.currentKey = u;
    }, $ = (u) => {
      t("clickIndex", u);
    }, k = (u) => {
      let m = u.target.scrollTop;
      const w = o.listHeight;
      o.scrollY = m;
      for (let I = 0; I < w.length - 1; I++) {
        let B = w[I], L = w[I + 1];
        if (o.scrollY >= B && o.scrollY < L) {
          o.currentIndex = I, o.diff = L - o.scrollY;
          return;
        }
      }
      o.currentIndex = w.length - 2;
    };
    return be(() => {
      l.value && l.value.addEventListener("scroll", k);
    }), n({
      scrollTo: p
    }), x(
      () => o.listGroup.length,
      () => {
        o.listHeight = [], Ne(i);
      }
    ), x(
      () => o.diff,
      (u) => {
        const h = o.listHeight;
        let m = u > 0 && u < e.titleHeight ? u - e.titleHeight : 0;
        o.scrollY + a.value === h[h.length - 1] && m !== 0 && (m = 0), o.fixedTop !== m && (o.fixedTop = m);
      }
    ), x(
      () => o.currentIndex,
      (u) => {
        t("change", u);
      }
    ), ce(Z({}, ge(o)), {
      clientHeight: a,
      setListGroup: r,
      listview: l,
      touchStart: f,
      touchMove: y,
      touchEnd: v,
      handleClickItem: b,
      handleClickIndex: $
    });
  }
}), tc = { class: "nut-elevator" }, nc = { class: "nut-elevator__list__item__code" }, oc = ["onClick"], lc = ["innerHTML"], sc = { class: "nut-elevator__list__fixed" }, ac = { class: "nut-elevator__list__fixed-title" }, rc = { class: "nut-elevator__bars__inner" }, ic = ["data-index", "onClick"];
function uc(e, t, n, l, o, a) {
  var s, r;
  return c(), d("view", tc, [
    g("view", {
      ref: "listview",
      class: "nut-elevator__list",
      style: A({ height: isNaN(+e.height) ? e.height : `${e.height}px` })
    }, [
      (c(!0), d(Q, null, ie(e.indexList, (i) => (c(), d("view", {
        key: i[e.acceptKey],
        ref_for: !0,
        ref: e.setListGroup,
        class: "nut-elevator__list__item"
      }, [
        g("view", nc, E(i[e.acceptKey]), 1),
        (c(!0), d(Q, null, ie(i.list, (p) => (c(), d("view", {
          key: p.id,
          class: P(["nut-elevator__list__item__name", {
            "nut-elevator__list__item__name--highcolor": e.currentData.id === p.id && e.currentKey === i[e.acceptKey]
          }]),
          onClick: (f) => e.handleClickItem(i[e.acceptKey], p)
        }, [
          e.$slots.default ? _(e.$slots, "default", {
            key: 1,
            item: p
          }) : (c(), d("span", {
            key: 0,
            innerHTML: p.name
          }, null, 8, lc))
        ], 10, oc))), 128))
      ]))), 128))
    ], 4),
    Ie(g("view", sc, [
      g("view", ac, E((r = (s = e.indexList) == null ? void 0 : s[e.currentIndex]) == null ? void 0 : r[e.acceptKey]), 1)
    ], 512), [
      [Me, e.scrollY > 0 && e.isSticky]
    ]),
    e.indexList.length ? Ie((c(), d("view", {
      key: 0,
      class: "nut-elevator__code--current"
    }, E(e.indexList[e.codeIndex][e.acceptKey]), 513)), [
      [Me, e.scrollStart]
    ]) : T("", !0),
    g("view", {
      class: "nut-elevator__bars",
      onTouchstart: t[0] || (t[0] = (...i) => e.touchStart && e.touchStart(...i)),
      onTouchmove: t[1] || (t[1] = _e((...i) => e.touchMove && e.touchMove(...i), ["stop", "prevent"])),
      onTouchend: t[2] || (t[2] = (...i) => e.touchEnd && e.touchEnd(...i))
    }, [
      g("view", rc, [
        (c(!0), d(Q, null, ie(e.indexList, (i, p) => (c(), d("view", {
          key: i[e.acceptKey],
          class: P(["nut-elevator__bars__inner__item", { active: i[e.acceptKey] === e.indexList[e.currentIndex][e.acceptKey] }]),
          "data-index": p,
          onClick: (f) => e.handleClickIndex(i[e.acceptKey])
        }, E(i[e.acceptKey]), 11, ic))), 128))
      ])
    ], 32)
  ]);
}
const ko = /* @__PURE__ */ ee(ec, [["render", uc]]), { create: cc } = q("pagination"), dc = "NutPagination", fc = cc({
  props: {
    modelValue: {
      type: Number,
      default: 1
    },
    mode: {
      type: String,
      default: "multi"
    },
    prevText: {
      type: String,
      default: ""
    },
    nextText: {
      type: String,
      default: ""
    },
    pageCount: {
      type: [String, Number],
      default: ""
    },
    totalItems: {
      type: [String, Number],
      default: "0"
    },
    itemsPerPage: {
      type: [String, Number],
      default: "10"
    },
    showPageSize: {
      type: [String, Number],
      default: "5"
    },
    forceEllipses: {
      type: Boolean,
      default: !1
    }
  },
  components: {},
  emits: ["change", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = Se(dc), { modelValue: l, mode: o, showPageSize: a, forceEllipses: s } = ge(e), r = N(() => {
      const { pageCount: y, totalItems: v, itemsPerPage: b } = ge(e), $ = +y.value || Math.ceil(+v.value / +b.value);
      return Math.max(1, $);
    }), i = (y, v) => {
      y > r.value || y < 1 || (y != l.value && t("update:modelValue", y), v && t("change", y));
    }, p = (y, v, b = !1) => ({ number: y, text: v, active: b }), f = N(() => {
      if (o.value == "simple")
        return;
      let y = [];
      const v = r.value, b = +a.value;
      let $ = 1, k = v;
      const u = v > b;
      u && ($ = Math.max(l.value - Math.floor(b / 2), 1), k = $ + +b - 1, k > v && (k = v, $ = k - +b + 1));
      for (var h = $; h <= k; h++) {
        const m = p(h, h, l.value == h);
        y.push(m);
      }
      if (u && b > 0 && s.value) {
        if ($ > 1) {
          const m = p($ - 1, "...");
          y.unshift(m);
        }
        if (k < v) {
          const m = p(k + 1, "...");
          y.push(m);
        }
      }
      return y;
    });
    return $t(() => {
      i(l.value, !1);
    }), {
      modelValue: l,
      select: i,
      countRef: r,
      mode: o,
      pages: f,
      forceEllipses: s,
      translate: n
    };
  }
}), pc = { class: "nut-pagination" }, mc = {
  key: 0,
  class: "nut-pagination-contain"
}, hc = ["onClick"], gc = {
  key: 1,
  class: "nut-pagination-contain"
}, vc = { class: "nut-pagination-simple" };
function yc(e, t, n, l, o, a) {
  return c(), d("view", pc, [
    g("view", {
      class: P(["nut-pagination-prev", e.mode == "multi" ? "" : "simple-border", e.modelValue == 1 ? "disabled" : ""]),
      onClick: t[0] || (t[0] = (s) => e.select(e.modelValue - 1, !0))
    }, [
      _(e.$slots, "prev-text", {}, () => [
        he(E(e.prevText || e.translate("prev")), 1)
      ])
    ], 2),
    e.mode == "multi" ? (c(), d("view", mc, [
      (c(!0), d(Q, null, ie(e.pages, (s, r) => (c(), d("view", {
        key: r + "pagination",
        class: P(["nut-pagination-item", s.active ? "active" : ""]),
        onClick: (i) => e.select(s.number, !0)
      }, [
        _(e.$slots, "page", { item: s }, () => [
          he(E(s.text), 1)
        ])
      ], 10, hc))), 128))
    ])) : T("", !0),
    e.mode == "simple" ? (c(), d("view", gc, [
      g("view", vc, E(e.modelValue) + "/" + E(e.countRef), 1)
    ])) : T("", !0),
    g("view", {
      class: P(["nut-pagination-next", e.modelValue >= e.countRef ? "disabled" : ""]),
      onClick: t[1] || (t[1] = (s) => e.select(e.modelValue + 1, !0))
    }, [
      _(e.$slots, "next-text", {}, () => [
        he(E(e.nextText || e.translate("next")), 1)
      ])
    ], 2)
  ]);
}
const bc = /* @__PURE__ */ ee(fc, [["render", yc]]), Bt = window, $c = typeof window != "undefined";
function wc() {
  return typeof Bt != "undefined" ? Bt.requestAnimationFrame || Bt.webkitRequestAnimationFrame || function(e) {
    Bt.setTimeout(e, 1e3 / 60);
  } : function(e) {
    setTimeout(e, 1e3 / 60);
  };
}
function kc(e) {
  $c ? cancelAnimationFrame(e) : clearTimeout(e);
}
const Re = wc(), Mn = 10;
function Cc(e, t) {
  return e > t && e > Mn ? "horizontal" : t > e && t > Mn ? "vertical" : "";
}
function et() {
  const e = z(0), t = z(0), n = z(0), l = z(0), o = z(0), a = z(0), s = z(0), r = z(0), i = z(""), p = () => i.value === "vertical", f = () => i.value === "horizontal", y = () => {
    o.value = 0, a.value = 0, s.value = 0, r.value = 0, i.value = "";
  };
  return {
    move: ($) => {
      const k = $.touches[0];
      o.value = k.clientX - e.value, a.value = k.clientY - t.value, n.value = k.clientX, l.value = k.clientY, s.value = Math.abs(o.value), r.value = Math.abs(a.value), i.value || (i.value = Cc(s.value, r.value));
    },
    start: ($) => {
      y(), e.value = $.touches[0].clientX, t.value = $.touches[0].clientY;
    },
    reset: y,
    startX: e,
    startY: t,
    moveX: n,
    moveY: l,
    deltaX: o,
    deltaY: a,
    offsetX: s,
    offsetY: r,
    direction: i,
    isVertical: p,
    isHorizontal: f
  };
}
const Sc = (e, t, n, l) => {
  const o = z(), a = z({ width: 0, height: 0 }), s = () => Ge(void 0, null, function* () {
    var v, b;
    n && n.getEnv() !== n.ENV_TYPE.WEB ? l(o).then(
      ($) => {
        a.value.width = $.width || 0, a.value.height = $.height || 0;
      },
      () => {
      }
    ) : (a.value.width = ((v = o.value) == null ? void 0 : v.clientWidth) || 0, a.value.height = ((b = o.value) == null ? void 0 : b.clientHeight) || 0);
  });
  be(() => {
    setTimeout(() => {
      s();
    }, 100);
  });
  const r = fe({
    offset: 0,
    moving: !1
  }), i = et();
  let p = "";
  const f = (v, b) => {
    var k;
    let $ = v;
    switch (e.direction == "horizontal" ? (p = v > 0 ? "right" : "left", $ = Math.abs($) / a.value.width * 100) : (p = b > 0 ? "bottom" : "top", $ = b, $ = Math.abs($) / ((k = a.value) == null ? void 0 : k.height) * 100), $ > 85 && ($ = 85), p) {
      case "left":
      case "top":
        t.isEnd() && ($ = 0, r.moving = !1);
        break;
      case "right":
      case "bottom":
        $ = -$, t.isBegin() && ($ = 0, r.moving = !1);
        break;
    }
    r.offset = $;
  };
  return { touchMethods: {
    onTouchStart(v) {
      e.swipeable && i.start(v);
    },
    onTouchMove(v) {
      e.swipeable && (i.move(v), r.moving = !0, f(i.deltaX.value, i.deltaY.value), e.direction == "horizontal" && i.isHorizontal() && (v.preventDefault(), v.stopPropagation()), e.direction == "vertical" && i.isVertical() && (v.preventDefault(), v.stopPropagation()));
    },
    onTouchEnd() {
      if (r.moving)
        switch (r.moving = !1, p) {
          case "left":
          case "top":
            r.offset > 35 && t.next();
            break;
          case "right":
          case "bottom":
            r.offset < -35 && t.prev();
            break;
        }
    }
  }, touchState: r, tabsContentRef: o };
};
class Tc {
  constructor() {
    O(this, "title", "");
    O(this, "titleSlot");
    O(this, "paneKey", "");
    O(this, "disabled", !1);
  }
}
const { create: Nc } = q("tabs"), Dc = Nc({
  components: { NutSticky: po, JoySmile: ea },
  props: {
    modelValue: {
      type: [String, Number],
      default: 0
    },
    color: {
      type: String,
      default: ""
    },
    direction: {
      type: String,
      default: "horizontal"
    },
    size: {
      type: String,
      default: "normal"
    },
    type: {
      type: String,
      default: "line"
    },
    titleScroll: {
      type: Boolean,
      default: !1
    },
    ellipsis: {
      type: Boolean,
      default: !0
    },
    swipeable: {
      type: Boolean,
      default: !1
    },
    autoHeight: {
      type: Boolean,
      default: !1
    },
    background: {
      type: String,
      default: ""
    },
    animatedTime: {
      type: [Number, String],
      default: 300
    },
    titleGutter: {
      type: [Number, String],
      default: 0
    },
    sticky: {
      type: Boolean,
      default: !1
    },
    top: {
      type: Number,
      default: 0
    },
    align: {
      type: String,
      default: "center"
    }
  },
  emits: ["update:modelValue", "click", "change"],
  setup(e, { emit: t, slots: n }) {
    const l = z(null);
    let o;
    ze("tabsOpiton", {
      activeKey: N(() => e.modelValue || "0"),
      autoHeight: N(() => e.autoHeight),
      animatedTime: N(() => e.animatedTime)
    });
    const a = z([]), s = (C) => {
      C.forEach((D, V) => {
        var X, le, W, Y, R, te, K, se, ue;
        let j = D.type;
        if (j = j.name || j, j == "NutTabPane") {
          let pe = new Tc();
          if ((X = D.props) != null && X.title || (le = D.props) != null && le["pane-key"] || (W = D.props) != null && W.paneKey) {
            let ke = Ut((Y = D.props) == null ? void 0 : Y["pane-key"]), Le = ke == "number" || ke == "string" ? String((R = D.props) == null ? void 0 : R["pane-key"]) : null, H = Ut((te = D.props) == null ? void 0 : te.paneKey), G = H == "number" || H == "string" ? String((K = D.props) == null ? void 0 : K.paneKey) : null;
            pe.title = (se = D.props) == null ? void 0 : se.title, pe.paneKey = Le || G || String(V), pe.disabled = (ue = D.props) == null ? void 0 : ue.disabled;
          }
          a.value.push(pe);
        } else {
          if (D.children == " ")
            return;
          s(D.children);
        }
      });
    }, r = z(e.modelValue || 0), i = (C) => {
      let D = a.value.findIndex((V) => V.paneKey == C);
      a.value.length == 0 || D == -1 || (r.value = D);
    }, p = N(() => e.titleScroll && e.direction === "vertical"), f = z(), y = z([]), v = (C) => {
      const D = f.value, V = y.value;
      if (!D || !V || !V[r.value])
        return;
      const j = V[r.value];
      let X = 0;
      e.direction === "vertical" ? X = j.offsetTop - D.offsetTop + 10 - (D.offsetHeight - j.offsetHeight) / 2 : X = j.offsetLeft - (D.offsetWidth - j.offsetWidth) / 2, b(D, X, C ? 0 : 0.3, e.direction);
    }, b = (C, D, V, j) => {
      let X = 0;
      const le = j === "horizontal" ? C.scrollLeft : C.scrollTop, W = V === 0 ? 1 : Math.round(V * 1e3 / 16);
      function Y() {
        j === "horizontal" ? C.scrollLeft += (D - le) / W : C.scrollTop += (D - le) / W, ++X < W && Re(Y);
      }
      Y();
    }, $ = (C = ((D) => (D = n.default) == null ? void 0 : D.call(n))()) => {
      a.value = [], C = C == null ? void 0 : C.filter((V) => typeof V.children != "string"), C && C.length && s(C), i(e.modelValue), Ne(() => {
        v();
      });
    }, k = (C) => {
      o = C.fixed;
    };
    x(
      () => {
        var C;
        return (C = n.default) == null ? void 0 : C.call(n);
      },
      (C) => {
        $(C);
      }
    );
    const u = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    x(
      () => e.modelValue,
      (C) => {
        if (i(C), v(), o) {
          let D = Ye(l.value).top + u(), V = Math.ceil(D - e.top);
          window.scrollTo({
            top: V,
            behavior: "smooth"
          });
        }
      }
    ), be($), Ct($);
    const h = {
      isBegin: () => r.value == 0,
      isEnd: () => r.value == a.value.length - 1,
      next: () => {
        r.value += 1;
        const C = a.value[r.value].disabled;
        if (h.isEnd() && C) {
          h.prev();
          return;
        }
        if (C && r.value < a.value.length - 1) {
          h.next();
          return;
        }
        h.updateValue(a.value[r.value]);
      },
      prev: () => {
        r.value -= 1;
        const C = a.value[r.value].disabled;
        if (h.isBegin() && C) {
          h.next();
          return;
        }
        if (C && r.value > 0) {
          h.prev();
          return;
        }
        h.updateValue(a.value[r.value]);
      },
      updateValue: (C) => {
        t("update:modelValue", C.paneKey), t("change", C);
      },
      tabChange: (C, D) => {
        t("click", C), !(C.disabled || r.value == D) && (r.value = D, h.updateValue(C));
      },
      setTabItemRef: (C, D) => {
        y.value[D] = C;
      }
    }, { tabsContentRef: m, touchState: w, touchMethods: I } = Sc(e, h), B = N(() => {
      let C = r.value * 100;
      w.moving && (C += w.offset);
      let D = {
        transform: e.direction == "horizontal" ? `translate3d(-${C}%, 0, 0)` : `translate3d( 0,-${C}%, 0)`,
        transitionDuration: w.moving ? void 0 : `${e.animatedTime}ms`
      };
      return e.animatedTime == 0 && (D = {}), D;
    }), L = N(() => ({
      background: e.background
    })), M = N(() => ({
      color: e.type == "smile" ? e.color : "",
      background: e.type == "line" ? e.color : ""
    })), S = N(() => {
      if (!e.titleGutter)
        return {};
      const C = Be(e.titleGutter);
      return e.direction === "vertical" ? { marginTop: C, marginBottom: C } : { marginLeft: C, marginRight: C };
    });
    return Z(Z({
      navRef: f,
      tabsContentRef: m,
      titles: a,
      contentStyle: B,
      tabsNavStyle: L,
      titleStyle: S,
      tabsActiveStyle: M,
      container: l,
      getScrollY: p,
      onStickyScroll: k
    }, h), I);
  }
}), _c = ["onClick"], Ic = ["onClick"];
function Bc(e, t, n, l, o, a) {
  const s = U("JoySmile"), r = U("nut-sticky");
  return c(), d("view", {
    ref: "container",
    class: P(["nut-tabs", [e.direction]])
  }, [
    e.sticky ? (c(), J(r, {
      key: 0,
      top: e.top,
      container: e.container,
      onScroll: e.onStickyScroll
    }, {
      default: ne(() => [
        g("view", {
          ref: "navRef",
          class: P(["nut-tabs__titles", {
            "nut-tabs__titles-left": e.align === "left",
            [e.type]: e.type,
            scrollable: e.titleScroll,
            [e.size]: e.size
          }]),
          style: A(e.tabsNavStyle)
        }, [
          e.$slots.titles ? _(e.$slots, "titles", { key: 0 }) : (c(!0), d(Q, { key: 1 }, ie(e.titles, (i, p) => (c(), d("view", {
            key: i.paneKey,
            class: P(["nut-tabs__titles-item", {
              "nut-tabs__titles-item-left": e.align === "left",
              active: i.paneKey == e.modelValue,
              disabled: i.disabled
            }]),
            style: A(e.titleStyle),
            onClick: (f) => e.tabChange(i, p)
          }, [
            e.type == "line" ? (c(), d("view", {
              key: 0,
              class: "nut-tabs__titles-item__line",
              style: A(e.tabsActiveStyle)
            }, null, 4)) : T("", !0),
            e.type == "smile" ? (c(), d("view", {
              key: 1,
              class: "nut-tabs__titles-item__smile",
              style: A(e.tabsActiveStyle)
            }, [
              oe(s, { color: e.color }, null, 8, ["color"])
            ], 4)) : T("", !0),
            g("view", {
              class: P(["nut-tabs__titles-item__text", { ellipsis: e.ellipsis }])
            }, E(i.title), 3)
          ], 14, _c))), 128))
        ], 6)
      ]),
      _: 3
    }, 8, ["top", "container", "onScroll"])) : (c(), d("view", {
      key: 1,
      ref: "navRef",
      class: P(["nut-tabs__titles", { "nut-tabs__titles-left": e.align === "left", [e.type]: e.type, scrollable: e.titleScroll, [e.size]: e.size }]),
      style: A(e.tabsNavStyle)
    }, [
      e.$slots.titles ? _(e.$slots, "titles", { key: 0 }) : (c(!0), d(Q, { key: 1 }, ie(e.titles, (i, p) => (c(), d("view", {
        key: i.paneKey,
        ref_for: !0,
        ref: (f) => e.setTabItemRef(f, p),
        class: P(["nut-tabs__titles-item", {
          "nut-tabs__titles-item-left": e.align === "left",
          active: i.paneKey == e.modelValue,
          disabled: i.disabled
        }]),
        style: A(e.titleStyle),
        onClick: (f) => e.tabChange(i, p)
      }, [
        e.type == "line" ? (c(), d("view", {
          key: 0,
          class: "nut-tabs__titles-item__line",
          style: A(e.tabsActiveStyle)
        }, null, 4)) : T("", !0),
        e.type == "smile" ? (c(), d("view", {
          key: 1,
          class: "nut-tabs__titles-item__smile",
          style: A(e.tabsActiveStyle)
        }, [
          oe(s, { color: e.color }, null, 8, ["color"])
        ], 4)) : T("", !0),
        g("view", {
          class: P(["nut-tabs__titles-item__text", { ellipsis: e.ellipsis }])
        }, E(i.title), 3)
      ], 14, Ic))), 128))
    ], 6)),
    g("view", {
      ref: "tabsContentRef",
      class: "nut-tabs__content",
      style: A(e.contentStyle),
      onTouchstart: t[0] || (t[0] = (...i) => e.onTouchStart && e.onTouchStart(...i)),
      onTouchmove: t[1] || (t[1] = (...i) => e.onTouchMove && e.onTouchMove(...i)),
      onTouchend: t[2] || (t[2] = (...i) => e.onTouchEnd && e.onTouchEnd(...i)),
      onTouchcancel: t[3] || (t[3] = (...i) => e.onTouchEnd && e.onTouchEnd(...i))
    }, [
      _(e.$slots, "default")
    ], 36)
  ], 2);
}
const Co = /* @__PURE__ */ ee(Dc, [["render", Bc]]), { create: Mc } = q("tab-pane"), Lc = Mc({
  props: {
    title: {
      type: [String, Number],
      default: ""
    },
    paneKey: {
      type: [String, Number],
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["click"],
  setup(e) {
    const t = Ee("tabsOpiton"), n = N(() => ({
      display: t.animatedTime.value == 0 && e.paneKey != t.activeKey.value ? "none" : void 0
    }));
    return ce(Z({}, t), {
      paneStyle: n
    });
  }
});
function Pc(e, t, n, l, o, a) {
  return c(), d("view", {
    class: P(["nut-tab-pane", { inactive: e.paneKey != e.activeKey && e.autoHeight }]),
    style: A(e.paneStyle)
  }, [
    _(e.$slots, "default")
  ], 6);
}
const So = /* @__PURE__ */ ee(Lc, [["render", Pc]]), { create: Ec } = q("indicator"), Ac = Ec({
  props: {
    size: {
      type: Number,
      default: 3
    },
    current: {
      type: Number,
      default: 1
    },
    block: {
      type: Boolean,
      default: !1
    },
    align: {
      type: String,
      default: "center"
    },
    fillZero: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    return { classes: N(() => {
      const n = "nut-indicator";
      return {
        [n]: !0,
        [`${n}--block`]: e.block,
        [`${n}--align__${e.align}`]: e.block && e.align
      };
    }), padZero: Qe };
  }
}), zc = {
  key: 0,
  class: "nut-indicator--number"
}, Vc = {
  key: 1,
  class: "nut-indicator--dot"
};
function Oc(e, t, n, l, o, a) {
  return c(), d("view", {
    class: P(e.classes)
  }, [
    (c(!0), d(Q, null, ie(e.size, (s) => (c(), d(Q, { key: s }, [
      s === e.current ? (c(), d("view", zc, E(e.fillZero && e.padZero(s) || s), 1)) : (c(), d("view", Vc))
    ], 64))), 128))
  ], 2);
}
const Hc = /* @__PURE__ */ ee(Ac, [["render", Oc]]), { create: Rc } = q("side-navbar"), Fc = Rc({
  props: {
    offset: {
      type: [String, Number],
      default: 15
    }
  },
  setup: (e) => {
    const t = z(null), n = fe({
      count: 1,
      observer: null
    }), l = (a, s = 1) => {
      var r;
      for (let i = 0; i < a.length; i++) {
        let p = a[i];
        (r = p == null ? void 0 : p.children) != null && r[0] && (p.children[0].style.paddingLeft = +e.offset * s + "px", p.className.includes("nut-side-navbar-item") || l(Array.from(p.children[1].children), ++n.count));
      }
      n.count--;
    }, o = () => {
      let a = t.value.childNodes;
      a != null && a.length && (a = Array.from(a).filter((s) => s.nodeType !== 3).map((s) => s), l(a));
    };
    return be(() => {
      o(), n.observer = new MutationObserver(function() {
        n.count = 1, o();
      }), n.observer.observe(t.value, {
        attributes: !1,
        childList: !0,
        characterData: !1,
        subtree: !0
      });
    }), ce(Z({}, ge(n)), {
      list: t
    });
  }
}), Wc = { class: "nut-side-navbar" }, Yc = { class: "nut-side-navbar__content" }, jc = {
  ref: "list",
  class: "nut-side-navbar__content__list"
};
function Kc(e, t, n, l, o, a) {
  return c(), d("view", Wc, [
    g("view", Yc, [
      g("view", jc, [
        _(e.$slots, "default")
      ], 512)
    ])
  ]);
}
const Uc = /* @__PURE__ */ ee(Fc, [["render", Kc]]), { create: Xc } = q("side-navbar-item"), qc = Xc({
  props: {
    title: {
      type: String,
      default: ""
    }
  }
}), Zc = { class: "nut-side-navbar-item" }, Gc = { class: "nut-side-navbar-item__title" };
function Jc(e, t, n, l, o, a) {
  return c(), d("view", Zc, [
    g("span", Gc, E(e.title), 1)
  ]);
}
const Qc = /* @__PURE__ */ ee(qc, [["render", Jc]]), { create: xc } = q("sub-side-navbar"), ed = xc({
  props: {
    title: {
      type: String,
      default: ""
    },
    open: {
      type: Boolean,
      default: !0
    }
  },
  components: { ArrowDown2: Dl, ArrowUp2: Ll },
  emits: ["titleClick"],
  setup: (e, { emit: t }) => {
    const n = fe({
      direction: ""
    }), l = N(() => ({
      height: n.direction ? "0px" : "auto"
    })), o = () => {
      t("titleClick"), n.direction = n.direction ? "" : "up";
    };
    return be(() => {
      n.direction = e.open ? "" : "up";
    }), ce(Z({}, ge(n)), {
      style: l,
      handleClick: o
    });
  }
}), td = { class: "nut-sub-side-navbar" }, nd = { class: "nut-sub-side-navbar__title__text" }, od = { class: "nut-sub-side-navbar__title__icon" };
function ld(e, t, n, l, o, a) {
  const s = U("ArrowDown2"), r = U("ArrowUp2");
  return c(), d("view", td, [
    g("view", {
      class: "nut-sub-side-navbar__title",
      onClick: t[0] || (t[0] = _e((...i) => e.handleClick && e.handleClick(...i), ["stop"]))
    }, [
      g("span", nd, E(e.title), 1),
      g("span", od, [
        e.direction ? (c(), J(r, { key: 1 })) : (c(), J(s, { key: 0 }))
      ])
    ]),
    Ie(g("view", {
      class: P(["nut-sub-side-navbar__list", e.direction ? "nutFadeOut" : "nutFadeIn"]),
      style: A(e.style)
    }, [
      _(e.$slots, "default")
    ], 6), [
      [Me, !e.direction]
    ])
  ]);
}
const sd = /* @__PURE__ */ ee(ed, [["render", ld]]), To = Symbol("nut-form"), No = Symbol("nut-form-disabled"), Ze = (e) => {
  const { parent: t } = Vt(No);
  return N(() => {
    var n;
    return e.value || ((n = t == null ? void 0 : t.props) == null ? void 0 : n.disabled) || !1;
  });
}, { componentName: ad, create: rd } = q("range"), id = rd({
  props: {
    range: {
      type: Boolean,
      default: !1
    },
    disabled: Boolean,
    activeColor: String,
    inactiveColor: String,
    buttonColor: String,
    vertical: {
      type: Boolean,
      default: !1
    },
    marks: {
      type: Object,
      default: {}
    },
    hiddenRange: {
      type: Boolean,
      default: !1
    },
    hiddenTag: {
      type: Boolean,
      default: !1
    },
    min: {
      type: [Number, String],
      default: 0
    },
    max: {
      type: [Number, String],
      default: 100
    },
    step: {
      type: [Number, String],
      default: 1
    },
    modelValue: {
      type: [Number, Array],
      default: 0
    }
  },
  emits: ["change", "dragEnd", "dragStart", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = Ze(xe(e, "disabled")), l = z(0);
    let o, a;
    const s = z(), r = z(), i = et(), p = N(() => {
      const { marks: W, max: Y, min: R } = e;
      return Object.keys(W).map(parseFloat).sort((se, ue) => se - ue).filter((se) => se >= +R && se <= +Y);
    }), f = N(() => Number(e.max) - Number(e.min)), y = N(() => {
      const W = ad;
      return {
        [W]: !0,
        [`${W}-disabled`]: n.value,
        [`${W}-vertical`]: e.vertical,
        [`${W}-show-number`]: !e.hiddenRange
      };
    }), v = N(() => {
      const W = "nut-range-container";
      return {
        [W]: !0,
        [`${W}-vertical`]: e.vertical
      };
    }), b = N(() => ({
      background: e.inactiveColor
    })), $ = N(() => ({
      borderColor: e.buttonColor
    })), k = (W) => !!e.range && Array.isArray(W), u = () => {
      const { modelValue: W, min: Y } = e;
      return k(W) ? `${(W[1] - W[0]) * 100 / f.value}%` : `${(W - Number(Y)) * 100 / f.value}%`;
    }, h = () => {
      const { modelValue: W, min: Y } = e;
      return k(W) ? `${(W[0] - Number(Y)) * 100 / f.value}%` : "0%";
    }, m = N(() => e.vertical ? {
      height: u(),
      top: h(),
      background: e.activeColor,
      transition: r.value ? "none" : void 0
    } : {
      width: u(),
      left: h(),
      background: e.activeColor,
      transition: r.value ? "none" : void 0
    }), w = (W) => {
      const Y = "nut-range-mark", { modelValue: R, max: te, min: K } = e;
      let se = Number(K), ue = Number(te);
      if (e.range) {
        const [ke, Le] = R;
        se = ke, ue = Le;
      } else
        ue = R;
      let pe = W <= +ue && W >= se;
      return {
        [`${Y}-text`]: !0,
        [`${Y}-text-active`]: pe
      };
    }, I = (W) => {
      const { min: Y, vertical: R } = e;
      let te = {
        left: `${(W - Number(Y)) / f.value * 100}%`
      };
      return R && (te = {
        top: `${(W - Number(Y)) / f.value * 100}%`
      }), te;
    }, B = (W) => {
      const { modelValue: Y, max: R, min: te } = e;
      let K = Number(te), se = Number(R);
      if (e.range) {
        const [ke, Le] = Y;
        K = ke, se = Le;
      }
      return {
        background: W <= se && W >= K ? e.activeColor : e.inactiveColor
      };
    }, L = (W) => {
      const { min: Y, max: R, step: te } = e;
      return W = Math.max(+Y, Math.min(W, +R)), Math.round(W / +te) * +te;
    }, M = (W, Y) => JSON.stringify(W) === JSON.stringify(Y), S = (W) => W[0] > W[1] ? W.slice(0).reverse() : W, C = (W, Y) => {
      k(W) ? W = S(W).map(L) : W = L(W), M(W, e.modelValue) || t("update:modelValue", W), Y && !M(W, o) && t("change", W);
    }, D = (W) => {
      if (n.value)
        return;
      const { min: Y, modelValue: R } = e, te = Ye(s);
      let K = W.clientX - te.left, se = te.width;
      e.vertical && (K = W.clientY - te.top, se = te.height);
      const ue = Number(Y) + K / se * f.value;
      if (k(R)) {
        const [pe, ke] = R, Le = (pe + ke) / 2;
        ue <= Le ? C([ue, ke], !0) : C([pe, ue], !0);
      } else
        C(ue, !0);
    }, V = (W) => {
      n.value || (i.start(W), a = e.modelValue, k(a) ? o = a.map(L) : o = L(a), r.value = "start");
    }, j = (W) => {
      if (n.value)
        return;
      r.value === "start" && t("dragStart"), i.move(W), r.value = "draging";
      const Y = Ye(s);
      let R = i.deltaX.value, te = Y.width, K = R / te * f.value;
      e.vertical && (R = i.deltaY.value, te = Y.height, K = R / te * f.value), k(o) ? a[l.value] = o[l.value] + K : a = o + K, C(a);
    }, X = () => {
      n.value || (r.value === "draging" && (C(a, !0), t("dragEnd")), r.value = "");
    }, le = (W) => Un(e.modelValue) && typeof W == "number" ? e.modelValue[W] : Number(e.modelValue);
    return ce(Z({
      root: s,
      classes: y,
      wrapperStyle: b,
      buttonStyle: $,
      onClick: D,
      onTouchStart: V,
      onTouchMove: j,
      onTouchEnd: X
    }, ge(e)), {
      barStyle: m,
      curValue: le,
      buttonIndex: l,
      containerClasses: v,
      markClassName: w,
      marksStyle: I,
      marksList: p,
      tickStyle: B,
      disabled: n
    });
  }
}), ud = {
  key: 0,
  class: "nut-range-min"
}, cd = {
  key: 0,
  class: "nut-range-mark"
}, dd = ["tabindex", "aria-valuemin", "aria-valuenow", "aria-valuemax", "onTouchstart"], fd = {
  key: 0,
  class: "number"
}, pd = ["tabindex", "aria-valuemin", "aria-valuenow", "aria-valuemax"], md = {
  key: 0,
  class: "number"
}, hd = {
  key: 1,
  class: "nut-range-max"
};
function gd(e, t, n, l, o, a) {
  return c(), d("view", {
    class: P(e.containerClasses)
  }, [
    e.hiddenRange ? T("", !0) : (c(), d("view", ud, E(+e.min), 1)),
    g("view", {
      ref: "root",
      style: A(e.wrapperStyle),
      class: P(e.classes),
      onClick: t[9] || (t[9] = _e((...s) => e.onClick && e.onClick(...s), ["stop"]))
    }, [
      e.marksList.length > 0 ? (c(), d("view", cd, [
        (c(!0), d(Q, null, ie(e.marksList, (s) => (c(), d("span", {
          key: s,
          class: P(e.markClassName(s)),
          style: A(e.marksStyle(s))
        }, [
          he(E(s) + " ", 1),
          g("span", {
            class: "nut-range-tick",
            style: A(e.tickStyle(s))
          }, null, 4)
        ], 6))), 128))
      ])) : T("", !0),
      g("view", {
        class: "nut-range-bar",
        style: A(e.barStyle)
      }, [
        e.range ? (c(), d(Q, { key: 0 }, ie([0, 1], (s) => g("view", {
          key: s,
          role: "slider",
          class: P({
            "nut-range-button-wrapper-left": s == 0,
            "nut-range-button-wrapper-right": s == 1
          }),
          tabindex: e.disabled ? -1 : 0,
          "aria-valuemin": +e.min,
          "aria-valuenow": e.curValue(s),
          "aria-valuemax": +e.max,
          "aria-orientation": "horizontal",
          onTouchstart: _e(
            (r) => {
              typeof s == "number" && (e.buttonIndex = s), e.onTouchStart(r);
            },
            ["stop", "prevent"]
          ),
          onTouchmove: t[0] || (t[0] = _e((...r) => e.onTouchMove && e.onTouchMove(...r), ["stop", "prevent"])),
          onTouchend: t[1] || (t[1] = _e((...r) => e.onTouchEnd && e.onTouchEnd(...r), ["stop", "prevent"])),
          onTouchcancel: t[2] || (t[2] = _e((...r) => e.onTouchEnd && e.onTouchEnd(...r), ["stop", "prevent"])),
          onClick: t[3] || (t[3] = (r) => r.stopPropagation())
        }, [
          e.$slots.button ? _(e.$slots, "button", { key: 0 }) : (c(), d("view", {
            key: 1,
            class: "nut-range-button",
            style: A(e.buttonStyle)
          }, [
            e.hiddenTag ? T("", !0) : (c(), d("view", fd, E(e.curValue(s)), 1))
          ], 4))
        ], 42, dd)), 64)) : (c(), d("view", {
          key: 1,
          role: "slider",
          class: "nut-range-button-wrapper",
          tabindex: e.disabled ? -1 : 0,
          "aria-valuemin": +e.min,
          "aria-valuenow": e.curValue(),
          "aria-valuemax": +e.max,
          "aria-orientation": "horizontal",
          onTouchstart: t[4] || (t[4] = _e(
            (s) => {
              e.onTouchStart(s);
            },
            ["stop", "prevent"]
          )),
          onTouchmove: t[5] || (t[5] = _e((...s) => e.onTouchMove && e.onTouchMove(...s), ["stop", "prevent"])),
          onTouchend: t[6] || (t[6] = _e((...s) => e.onTouchEnd && e.onTouchEnd(...s), ["stop", "prevent"])),
          onTouchcancel: t[7] || (t[7] = _e((...s) => e.onTouchEnd && e.onTouchEnd(...s), ["stop", "prevent"])),
          onClick: t[8] || (t[8] = (s) => s.stopPropagation())
        }, [
          e.$slots.button ? _(e.$slots, "button", { key: 0 }) : (c(), d("view", {
            key: 1,
            class: "nut-range-button",
            style: A(e.buttonStyle)
          }, [
            e.hiddenTag ? T("", !0) : (c(), d("view", md, E(e.curValue()), 1))
          ], 4))
        ], 40, pd))
      ], 4)
    ], 6),
    e.hiddenRange ? T("", !0) : (c(), d("view", hd, E(+e.max), 1))
  ], 2);
}
const Do = /* @__PURE__ */ ee(id, [["render", gd]]), { create: vd } = q("searchbar"), yd = "NutSearchbar", bd = vd({
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    inputType: {
      type: String,
      default: "text"
    },
    label: {
      type: String,
      default: ""
    },
    shape: {
      type: String,
      default: "round"
    },
    maxLength: {
      type: [String, Number],
      default: "9999"
    },
    placeholder: {
      type: String,
      default: ""
    },
    clearable: {
      type: Boolean,
      default: !0
    },
    clearIcon: {
      type: Object,
      default: () => on
    },
    background: {
      type: String,
      default: ""
    },
    inputBackground: {
      type: String,
      default: ""
    },
    focusStyle: {
      type: Object,
      default: () => ({})
    },
    autofocus: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    inputAlign: {
      type: String,
      default: "left"
    },
    safeAreaInsetBottom: {
      type: Boolean,
      default: !1
    }
  },
  emits: [
    "change",
    "update:modelValue",
    "blur",
    "focus",
    "clear",
    "search",
    "clickInput",
    "clickLeftIcon",
    "clickRightIcon"
  ],
  setup(e, { emit: t }) {
    const n = Ze(xe(e, "disabled")), l = Se(yd), o = fe({
      active: !1
    }), a = N(() => ({
      background: e.background
    })), s = N(() => ({
      background: e.inputBackground
    })), r = (m) => {
      let I = m.target.value;
      e.maxLength && I.length > Number(e.maxLength) && (I = I.slice(0, Number(e.maxLength))), t("update:modelValue", I, m), t("change", I, m);
    }, i = z({}), p = (m) => {
      let I = m.target.value;
      o.active = !0, i.value = e.focusStyle, t("focus", I, m);
    }, f = (m) => {
      setTimeout(() => {
        o.active = !1;
      }, 0);
      let I = m.target.value;
      e.maxLength && I.length > Number(e.maxLength) && (I = I.slice(0, Number(e.maxLength))), i.value = {}, t("blur", I, m);
    }, y = (m) => {
      t("update:modelValue", "", m), t("change", "", m), t("clear", "");
    }, v = () => {
      t("search", e.modelValue);
    }, b = (m) => {
      t("clickInput", m);
    }, $ = (m) => {
      t("clickLeftIcon", e.modelValue, m);
    }, k = (m) => {
      t("clickRightIcon", e.modelValue, m);
    }, u = N(() => ({
      textAlign: e.inputAlign
    })), h = z(null);
    return be(() => {
      e.autofocus && h.value.focus();
    }), ce(Z({
      renderIcon: lt,
      inputsearch: h
    }, ge(o)), {
      valueChange: r,
      valueFocus: p,
      valueBlur: f,
      handleClear: y,
      handleSubmit: v,
      searchbarStyle: a,
      inputSearchbarStyle: s,
      focusCss: i,
      translate: l,
      clickInput: b,
      leftIconClick: $,
      rightIconClick: k,
      styleSearchbar: u,
      disabled: n
    });
  }
}), $d = {
  key: 0,
  class: "nut-searchbar__search-label"
}, wd = {
  key: 1,
  class: "nut-searchbar__search-icon nut-searchbar__left-search-icon"
}, kd = ["type", "maxlength", "placeholder", "value", "disabled", "readonly"], Cd = {
  key: 1,
  class: "nut-searchbar__search-icon nut-searchbar__iptright-search-icon"
}, Sd = {
  key: 2,
  class: "nut-searchbar__search-icon nut-searchbar__right-search-icon"
};
function Td(e, t, n, l, o, a) {
  return c(), d("view", {
    class: P(["nut-searchbar", { "safe-area-inset-bottom": e.safeAreaInsetBottom }]),
    style: A(e.searchbarStyle)
  }, [
    e.label ? (c(), d("span", $d, E(e.label), 1)) : T("", !0),
    e.$slots.leftout ? (c(), d("view", wd, [
      _(e.$slots, "leftout")
    ])) : T("", !0),
    g("view", {
      class: P(["nut-searchbar__search-input", e.shape]),
      style: A(Z(Z({}, e.inputSearchbarStyle), e.focusCss))
    }, [
      e.$slots.leftin ? (c(), d("view", {
        key: 0,
        class: "nut-searchbar__search-icon nut-searchbar__iptleft-search-icon",
        onClick: t[0] || (t[0] = (...s) => e.leftIconClick && e.leftIconClick(...s))
      }, [
        _(e.$slots, "leftin")
      ])) : T("", !0),
      g("view", {
        class: P(["nut-searchbar__input-inner", e.$slots.rightin && "nut-searchbar__input-inner-absolute"])
      }, [
        g("form", {
          class: "nut-searchbar__input-form",
          action: "#",
          onSubmit: t[5] || (t[5] = _e((...s) => e.handleSubmit && e.handleSubmit(...s), ["prevent"]))
        }, [
          g("input", {
            ref: "inputsearch",
            class: P(["nut-searchbar__input-bar", e.clearable && "nut-searchbar__input-bar_clear"]),
            type: e.inputType,
            maxlength: e.maxLength,
            placeholder: e.placeholder || e.translate("placeholder"),
            value: e.modelValue,
            disabled: e.disabled,
            readonly: e.readonly,
            style: A(e.styleSearchbar),
            onClick: t[1] || (t[1] = (...s) => e.clickInput && e.clickInput(...s)),
            onInput: t[2] || (t[2] = (...s) => e.valueChange && e.valueChange(...s)),
            onFocus: t[3] || (t[3] = (...s) => e.valueFocus && e.valueFocus(...s)),
            onBlur: t[4] || (t[4] = (...s) => e.valueBlur && e.valueBlur(...s))
          }, null, 46, kd)
        ], 32)
      ], 2),
      g("view", {
        class: P(["nut-searchbar__input-inner-icon", e.$slots.rightin && "nut-searchbar__input-inner-icon-absolute"])
      }, [
        e.clearable ? Ie((c(), d("view", {
          key: 0,
          class: "nut-searchbar__search-icon nut-searchbar__input-clear",
          onClick: t[6] || (t[6] = (...s) => e.handleClear && e.handleClear(...s))
        }, [
          e.$slots["clear-icon"] ? _(e.$slots, "clear-icon", { key: 0 }) : (c(), J(Oe(e.renderIcon(e.clearIcon)), { key: 1 }))
        ], 512)), [
          [Me, String(e.modelValue).length > 0]
        ]) : T("", !0),
        e.$slots.rightin ? (c(), d("view", Cd, [
          _(e.$slots, "rightin")
        ])) : T("", !0)
      ], 2)
    ], 6),
    e.$slots.rightout ? (c(), d("view", Sd, [
      _(e.$slots, "rightout")
    ])) : T("", !0)
  ], 6);
}
const Nd = /* @__PURE__ */ ee(bd, [["render", Td]]), Lt = (e, t, n) => e.map((l) => {
  const { value: o = "value", text: a = "text", children: s = "children" } = n, v = l, { [o]: r, [a]: i, [s]: p } = v, f = jt(v, [_t(o), _t(a), _t(s)]), y = ce(Z({
    loading: !1
  }, f), {
    level: t ? (t && t.level || 0) + 1 : 0,
    value: r,
    text: i,
    children: p,
    _parent: t
  });
  return y.children && y.children.length && (y.children = Lt(y.children, y, n)), y;
}), _o = (e, t) => {
  let n = 0, l;
  for (; (l = e[n++]) && t(l) !== !0; )
    l.children && l.children.length && _o(l.children, t);
}, Dd = {
  topId: null,
  idKey: "id",
  pidKey: "pid",
  sortKey: ""
}, _d = (e, t) => {
  const n = Z(Z({}, Dd), t || {}), { topId: l, idKey: o, pidKey: a, sortKey: s } = n;
  let r = [], i = {};
  return e.forEach((p) => {
    p = Z({}, p);
    const { [o]: f, [a]: y } = p, v = i[y] = i[y] || [];
    !r.length && y === l && (r = v), v.push(p), p.children = i[f] || (i[f] = []);
  }), s && Object.keys(i).forEach((p) => {
    i[p].length > 1 && i[p].sort((f, y) => f[s] - y[s]);
  }), i = null, r;
};
class Ln {
  constructor(t, n) {
    O(this, "nodes");
    O(this, "config");
    this.config = Z({
      value: "value",
      text: "text",
      children: "children"
    }, n || {}), this.nodes = Lt(t, null, this.config);
  }
  updateChildren(t, n) {
    n ? n.children = Lt(t, n, this.config) : this.nodes = Lt(t, null, this.config);
  }
  // for test
  getNodeByValue(t) {
    let n;
    return _o(this.nodes, (l) => {
      if (l.value === t)
        return n = l, !0;
    }), n;
  }
  getPathNodesByValue(t) {
    if (!t.length)
      return [];
    const n = [];
    let l = this.nodes;
    for (; l && l.length; ) {
      const o = l.find((a) => a.value === t[a.level]);
      if (!o)
        break;
      n.push(o), l = o.children;
    }
    return n;
  }
  isLeaf(t, n) {
    const { leaf: l, children: o } = t, a = Array.isArray(o) && !!o.length;
    return l || !a && !n;
  }
  hasChildren(t, n) {
    if (this.isLeaf(t, n))
      return !1;
    const { children: o } = t;
    return Array.isArray(o) && !!o.length;
  }
}
const { create: Id } = q("cascader-item"), Bd = Id({
  components: {
    Loading: rt,
    Checklist: ls,
    NutTabs: Co,
    NutTabPane: So
  },
  props: {
    visible: Boolean,
    modelValue: Array,
    options: {
      type: Array,
      default: () => []
    },
    lazy: Boolean,
    lazyLoad: Function,
    valueKey: {
      type: String,
      default: "value"
    },
    textKey: {
      type: String,
      default: "text"
    },
    childrenKey: {
      type: String,
      default: "children"
    },
    convertConfig: Object
  },
  emits: ["update:modelValue", "change", "pathChange"],
  setup(e, { emit: t }) {
    const n = Se(), l = N(() => ({
      lazy: e.lazy,
      lazyLoad: e.lazyLoad,
      valueKey: e.valueKey,
      textKey: e.textKey,
      childrenKey: e.childrenKey,
      convertConfig: e.convertConfig
    })), o = z(0), a = z(!1), s = z(e.modelValue), r = z(new Ln([], {})), i = z([]), p = N(() => l.value.lazy && !!l.value.lazyLoad), f = /* @__PURE__ */ new Map();
    let y;
    const v = () => Ge(this, null, function* () {
      f.clear(), i.value = [], o.value = 0, a.value = !1, y = null;
      let { options: m } = e;
      l.value.convertConfig && (m = _d(m, l.value.convertConfig)), r.value = new Ln(m, {
        value: l.value.valueKey,
        text: l.value.textKey,
        children: l.value.childrenKey
      }), p.value && !r.value.nodes.length && (yield $({
        root: !0,
        loading: !0,
        text: "",
        value: ""
      })), i.value = [{ nodes: r.value.nodes, selectedNode: null }], b();
    }), b = () => Ge(this, null, function* () {
      const m = s.value;
      if (m === void 0 || !r.value.nodes.length)
        return;
      if (m.length === 0) {
        o.value = 0, i.value = [{ nodes: r.value.nodes, selectedNode: null }];
        return;
      }
      let w = m;
      if (p.value && Array.isArray(m) && m.length) {
        w = [];
        let I = r.value.nodes.find((B) => B.value === m[0]);
        if (I) {
          w = [I.value], a.value = !0;
          const B = yield m.slice(1).reduce((L, M) => Ge(this, null, function* () {
            var D;
            const S = yield L;
            yield $(S);
            const C = (D = S == null ? void 0 : S.children) == null ? void 0 : D.find((V) => V.value === M);
            return C && w.push(M), Promise.resolve(C);
          }), Promise.resolve(I));
          yield $(B), a.value = !1;
        }
      }
      w.length && m === e.modelValue && r.value.getPathNodesByValue(w).map((B, L) => {
        o.value = L, u.handleNode(B, !0);
      });
    }), $ = (m) => Ge(this, null, function* () {
      if (!m)
        return;
      if (!l.value.lazyLoad) {
        m.leaf = !0;
        return;
      }
      if (r.value.isLeaf(m, p.value) || r.value.hasChildren(m, p.value))
        return;
      m.loading = !0;
      const w = m.root ? null : m;
      let I = f.get(m);
      I || (I = new Promise((L) => {
        var M, S;
        (S = (M = l.value).lazyLoad) == null || S.call(M, m, L);
      }), f.set(m, I));
      const B = yield I;
      Array.isArray(B) && B.length > 0 ? r.value.updateChildren(B, w) : m.leaf = !0, m.loading = !1, f.delete(m);
    }), k = (m) => {
      const w = m.map((I) => I.value);
      s.value = w, t("change", w, m), t("update:modelValue", w, m);
    }, u = {
      // 选中一个节点，静默模式不触发事件
      handleNode(m, w) {
        return Ge(this, null, function* () {
          const { disabled: I, loading: B } = m;
          if (!(!w && I || !i.value[o.value])) {
            if (r.value.isLeaf(m, p.value)) {
              if (m.leaf = !0, i.value[o.value].selectedNode = m, i.value = i.value.slice(0, m.level + 1), !w) {
                const L = i.value.map((M) => M.selectedNode);
                k(L), t("pathChange", L);
              }
              return;
            }
            if (r.value.hasChildren(m, p.value)) {
              const L = m.level + 1;
              if (i.value[o.value].selectedNode = m, i.value = i.value.slice(0, L), i.value.push({
                nodes: m.children || [],
                selectedNode: null
              }), o.value = L, !w) {
                const M = i.value.map((S) => S.selectedNode);
                t("pathChange", M);
              }
              return;
            }
            y = m, !B && (yield $(m), y === m && (i.value[o.value].selectedNode = m, u.handleNode(m, w)));
          }
        });
      },
      handleTabClick(m) {
        y = null, o.value = Number(m.paneKey);
      },
      formatTabTitle(m) {
        return m.selectedNode ? m.selectedNode.text : n("select");
      },
      isSelected(m, w) {
        var I;
        return ((I = m == null ? void 0 : m.selectedNode) == null ? void 0 : I.value) === w.value;
      }
    };
    return x(
      [l, () => e.options],
      () => {
        v();
      },
      {
        deep: !0,
        immediate: !0
      }
    ), x(
      () => e.modelValue,
      (m) => {
        m !== s.value && (s.value = m, b());
      }
    ), x(
      () => e.visible,
      (m) => {
        m && Array.isArray(s.value) && s.value.length > 0 && b();
      }
    ), Z({ panes: i, initLoading: a, tabsCursor: o }, u);
  }
}), Md = {
  role: "menu",
  class: "nut-cascader-pane"
}, Ld = ["aria-checked", "aria-disabled", "onClick"], Pd = { class: "nut-cascader-item__title" }, Ed = /* @__PURE__ */ g("view", { class: "nut-cascader-pane" }, null, -1);
function Ad(e, t, n, l, o, a) {
  const s = U("Loading"), r = U("Checklist"), i = U("nut-tab-pane"), p = U("nut-tabs");
  return c(), J(p, {
    modelValue: e.tabsCursor,
    "onUpdate:modelValue": t[0] || (t[0] = (f) => e.tabsCursor = f),
    class: "nut-cascader",
    "title-scroll": "",
    onClick: e.handleTabClick
  }, {
    default: ne(() => [
      !e.initLoading && e.panes.length ? (c(!0), d(Q, { key: 0 }, ie(e.panes, (f, y) => (c(), J(i, {
        key: y,
        title: e.formatTabTitle(f)
      }, {
        default: ne(() => [
          g("view", Md, [
            (c(!0), d(Q, null, ie(f.nodes, (v) => (c(), d("view", {
              key: v.value,
              class: P(["nut-cascader-item", { active: e.isSelected(f, v), disabled: v.disabled }]),
              "aria-checked": e.isSelected(f, v),
              "aria-disabled": v.disabled || void 0,
              role: "menuitemradio",
              onClick: (b) => e.handleNode(v, !1)
            }, [
              g("view", Pd, E(v.text), 1),
              v.loading ? (c(), J(s, {
                key: 0,
                class: "nut-cascader-item__icon-loading",
                name: "loading"
              })) : (c(), J(r, {
                key: 1,
                class: "nut-cascader-item__icon-check",
                name: "checklist"
              }))
            ], 10, Ld))), 128))
          ])
        ]),
        _: 2
      }, 1032, ["title"]))), 128)) : (c(), J(i, {
        key: 1,
        title: "Loading..."
      }, {
        default: ne(() => [
          Ed
        ]),
        _: 1
      }))
    ]),
    _: 1
  }, 8, ["modelValue", "onClick"]);
}
const zd = /* @__PURE__ */ ee(Bd, [["render", Ad]]), { create: Vd } = q("cascader"), Od = Vd({
  components: {
    NutCascaderItem: zd,
    NutPopup: Ae
  },
  props: ce(Z({}, Nt), {
    modelValue: Array,
    visible: Boolean,
    title: String,
    options: {
      type: Array,
      default: () => []
    },
    lazy: Boolean,
    lazyLoad: Function,
    valueKey: {
      type: String,
      default: "value"
    },
    textKey: {
      type: String,
      default: "text"
    },
    childrenKey: {
      type: String,
      default: "children"
    },
    poppable: {
      type: Boolean,
      default: !0
    },
    convertConfig: Object
  }),
  emits: ["update:modelValue", "change", "pathChange", "update:visible"],
  setup(e, { emit: t }) {
    const n = z(e.modelValue), l = N({
      get() {
        return e.visible;
      },
      set(s) {
        t("update:visible", s);
      }
    }), o = (s, r) => {
      n.value = s, l.value = !1, t("change", s, r), t("update:modelValue", s);
    }, a = (s) => {
      t("pathChange", s);
    };
    return x(
      () => e.modelValue,
      (s) => {
        s !== n.value && (n.value = s);
      }
    ), {
      onChange: o,
      onPathChange: a,
      innerValue: n,
      innerVisible: l
    };
  }
}), Hd = ["innerHTML"];
function Rd(e, t, n, l, o, a) {
  const s = U("nut-cascader-item"), r = U("nut-popup");
  return e.poppable ? (c(), J(r, {
    key: 0,
    visible: e.innerVisible,
    "onUpdate:visible": t[0] || (t[0] = (i) => e.innerVisible = i),
    position: "bottom",
    "pop-class": "nut-cascader__popup",
    round: "",
    closeable: e.closeable,
    "destroy-on-close": !1,
    "close-icon-position": e.closeIconPosition,
    "z-index": e.zIndex
  }, {
    default: ne(() => [
      e.title ? (c(), d("view", {
        key: 0,
        class: "nut-cascader__bar",
        innerHTML: e.title
      }, null, 8, Hd)) : T("", !0),
      oe(s, {
        "model-value": e.innerValue,
        options: e.options,
        lazy: e.lazy,
        "lazy-load": e.lazyLoad,
        "value-key": e.valueKey,
        "text-key": e.textKey,
        "children-key": e.childrenKey,
        "convert-config": e.convertConfig,
        visible: e.innerVisible,
        onChange: e.onChange,
        onPathChange: e.onPathChange
      }, null, 8, ["model-value", "options", "lazy", "lazy-load", "value-key", "text-key", "children-key", "convert-config", "visible", "onChange", "onPathChange"])
    ]),
    _: 1
  }, 8, ["visible", "closeable", "close-icon-position", "z-index"])) : (c(), J(s, {
    key: 1,
    "model-value": e.innerValue,
    options: e.options,
    lazy: e.lazy,
    "lazy-load": e.lazyLoad,
    "value-key": e.valueKey,
    "text-key": e.textKey,
    "children-key": e.childrenKey,
    "convert-config": e.convertConfig,
    visible: e.innerVisible,
    onChange: e.onChange,
    onPathChange: e.onPathChange
  }, null, 8, ["model-value", "options", "lazy", "lazy-load", "value-key", "text-key", "children-key", "convert-config", "visible", "onChange", "onPathChange"]));
}
const Fd = /* @__PURE__ */ ee(Od, [["render", Rd]]), de = {
  /**
   * 是否为闫年
   * @return {Boolse} true|false
   */
  isLeapYear: function(e) {
    return e % 4 == 0 && e % 100 != 0 || e % 400 == 0;
  },
  /**
   * 返回星期数
   * @return {String}
   */
  getWhatDay: function(e, t, n) {
    const o = (/* @__PURE__ */ new Date(e + "/" + t + "/" + n)).getDay();
    return ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"][o];
  },
  /**
   * 返回星期数
   * @return {Number}
   */
  getMonthPreDay: function(e, t) {
    let l = (/* @__PURE__ */ new Date(e + "/" + t + "/01")).getDay();
    return l == 0 && (l = 7), l;
  },
  /**
   * 返回月份天数
   * @return {Number}
   */
  getMonthDays: function(e, t) {
    return /^0/.test(t) && (t = t.split("")[1]), [0, 31, this.isLeapYear(Number(e)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t];
  },
  /**
   * 补齐数字位数
   * @return {string}
   */
  getNumTwoBit: function(e) {
    return e = Number(e), (e > 9 ? "" : "0") + e;
  },
  /**
   * 日期对象转成字符串
   * @return {string}
   */
  date2Str: function(e, t) {
    t = t || "-";
    const n = e.getFullYear(), l = this.getNumTwoBit(e.getMonth() + 1), o = this.getNumTwoBit(e.getDate());
    return [n, l, o].join(t);
  },
  /**
   * 返回日期格式字符串
   * @param {Number} 0返回今天的日期、1返回明天的日期，2返回后天得日期，依次类推
   * @return {string} '2014-12-31'
   */
  getDay: function(e) {
    e = e || 0;
    let t = /* @__PURE__ */ new Date();
    const n = e * (1e3 * 60 * 60 * 24);
    return t = new Date(t.getTime() + n), this.date2Str(t);
  },
  /**
   * 时间比较
   * @return {Boolean}
   */
  compareDate: function(e, t) {
    const n = new Date(e.replace("-", "/").replace("-", "/")), l = new Date(t.replace("-", "/").replace("-", "/"));
    return !(n >= l);
  },
  /**
   * 时间是否相等
   * @return {Boolean}
   */
  isEqual: function(e, t) {
    const n = new Date(e).getTime(), l = new Date(t).getTime();
    return n == l;
  },
  getMonthWeek: function(e, t, n, l = 0) {
    const o = new Date(Number(e), parseInt(t) - 1, Number(n));
    let a = o.getDay(), s = o.getDate(), r = 6 - a;
    return l !== 0 && (a = a == 0 ? 7 : a, r = 7 - a), Math.ceil((s + r) / 7);
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getYearWeek: function(e, t, n, l = 0) {
    const o = new Date(Number(e), parseInt(t) - 1, Number(n)), a = new Date(Number(e), 0, 1), s = Math.round((o.valueOf() - a.valueOf()) / 864e5);
    return Math.ceil((s + (a.getDay() + 1 - 1)) / 7);
  },
  getWeekDate: function(e, t, n, l = 0) {
    const o = new Date(Number(e), parseInt(t) - 1, Number(n)), a = o.getTime();
    let s = o.getDay();
    if (l === 0) {
      const i = a - s * 864e5, p = a + (6 - s) * 864e5, f = this.date2Str(new Date(i)), y = this.date2Str(new Date(p));
      return [f, y];
    } else {
      s = s == 0 ? 7 : s;
      const r = 24 * 60 * 60 * 1e3, i = a - (s - 1) * r, p = a + (7 - s) * r, f = this.date2Str(new Date(i)), y = this.date2Str(new Date(p));
      return [f, y];
    }
  },
  formatResultDate: function(e) {
    let t = [...e.split("-")];
    return t[2] = de.getNumTwoBit(Number(t[2])), t[3] = `${t[0]}-${t[1]}-${t[2]}`, t[4] = de.getWhatDay(+t[0], +t[1], +t[2]), t;
  }
}, { create: Wd } = q("calendar-item"), Yd = "NutCalendarItem", jd = Wd({
  props: {
    type: {
      type: String,
      default: "one"
    },
    isAutoBackFill: {
      type: Boolean,
      default: !1
    },
    toDateAnimation: {
      type: Boolean,
      default: !0
    },
    poppable: {
      type: Boolean,
      default: !0
    },
    showTitle: {
      type: Boolean,
      default: !0
    },
    showSubTitle: {
      type: Boolean,
      default: !0
    },
    showToday: {
      type: Boolean,
      default: !0
    },
    title: {
      type: String,
      default: ""
    },
    confirmText: {
      type: String,
      default: ""
    },
    startText: {
      type: String,
      default: ""
    },
    endText: {
      type: String,
      default: ""
    },
    defaultValue: {
      type: [String, Array],
      default: ""
    },
    startDate: {
      type: String,
      default: de.getDay(0)
    },
    endDate: {
      type: String,
      default: de.getDay(365)
    },
    firstDayOfWeek: {
      type: Number,
      default: 0
    },
    disabledDate: Function
  },
  emits: ["choose", "update", "close", "select"],
  setup(e, { emit: t, slots: n, expose: l }) {
    const o = Se(Yd), a = o("weekdays").map((H, G) => ({
      day: H,
      weekend: G === 0 || G === 6
    })), s = z([...a.slice(e.firstDayOfWeek, 7), ...a.slice(0, e.firstDayOfWeek)]), r = z(null), i = z(null), p = z(null), f = z(null), y = z(0), v = N(() => u.monthsData.slice(u.defaultRange[0], u.defaultRange[1])), b = N(() => n.btn), $ = N(() => n["top-info"]), k = N(() => n["bottom-info"]), u = fe({
      yearMonthTitle: "",
      defaultRange: [],
      currDate: "",
      propStartDate: "",
      propEndDate: "",
      unLoadPrev: !1,
      touchParams: {
        startY: 0,
        endY: 0,
        startTime: 0,
        endTime: 0,
        lastY: 0,
        lastTime: 0
      },
      transformY: 0,
      translateY: 0,
      scrollDistance: 0,
      defaultData: [],
      chooseData: [],
      monthsData: [],
      dayPrefix: "nut-calendar__day",
      startData: "",
      endData: "",
      isRange: e.type === "range",
      timer: 0,
      currentIndex: 0,
      avgHeight: 0,
      monthsNum: 0
    }), h = (H) => H.split("-"), m = (H) => de.isEqual(u.currDate[0], H), w = (H) => de.isEqual(u.currDate[1], H), I = (H) => {
      var G, ae;
      return ((G = u.currDate) == null ? void 0 : G.length) > 0 ? (ae = u.currDate) == null ? void 0 : ae.some((re) => de.isEqual(re, H)) : !1;
    }, B = (H, G) => G.curData[0] + "-" + G.curData[1] + "-" + de.getNumTwoBit(+H.day), L = (H, G, ae) => {
      const re = [];
      typeof ae == "number" && ((ae + 1 + e.firstDayOfWeek) % 7 === 0 || (ae + e.firstDayOfWeek) % 7 === 0) && re.push("weekend");
      const me = B(H, G), { type: Pe } = e;
      return H.type == "curr" ? de.isEqual(u.currDate, me) || (Pe == "range" || Pe == "week") && (m(me) || w(me)) || Pe == "multiple" && I(me) ? re.push(`${u.dayPrefix}--active`) : u.propStartDate && de.compareDate(me, u.propStartDate) || u.propEndDate && de.compareDate(u.propEndDate, me) || e.disabledDate && e.disabledDate(me) ? re.push(`${u.dayPrefix}--disabled`) : (Pe == "range" || Pe == "week") && Array.isArray(u.currDate) && Object.values(u.currDate).length == 2 && de.compareDate(u.currDate[0], me) && de.compareDate(me, u.currDate[1]) && re.push(`${u.dayPrefix}--choose`) : re.push(`${u.dayPrefix}--disabled`), re;
    }, M = () => {
      const { type: H } = e;
      if (H == "range" && u.chooseData.length == 2 || H != "range") {
        let G = u.chooseData.slice(0);
        if (H == "week") {
          if (u.chooseData.length !== 2)
            return;
          G = {
            weekDate: [C(u.chooseData[0]), C(u.chooseData[1])]
          };
        }
        t("choose", G), e.poppable && t("update");
      }
    }, S = (H, G, ae = !1) => {
      var re, me;
      if (!L(H, G).includes(`${u.dayPrefix}--disabled`)) {
        const { type: Pe } = e;
        let [Fe, je] = G.curData, $e = [...G.curData];
        if ($e[2] = de.getNumTwoBit(Number(H.day)), $e[3] = `${$e[0]}-${$e[1]}-${$e[2]}`, $e[4] = de.getWhatDay(+$e[0], +$e[1], +$e[2]), Pe == "multiple")
          if (((re = u.currDate) == null ? void 0 : re.length) > 0) {
            let De;
            (me = u.currDate) == null || me.forEach((We, He) => {
              We == $e[3] && (De = He);
            }), ae ? u.chooseData.push([...$e]) : De !== void 0 ? (u.currDate.splice(De, 1), u.chooseData.splice(De, 1)) : (u.currDate.push($e[3]), u.chooseData.push([...$e]));
          } else
            u.currDate = [$e[3]], u.chooseData = [[...$e]];
        else if (Pe == "range") {
          let De = Object.values(u.currDate).length;
          De == 2 || De == 0 ? u.currDate = [$e[3]] : de.compareDate(u.currDate[0], $e[3]) ? Array.isArray(u.currDate) && u.currDate.push($e[3]) : Array.isArray(u.currDate) && u.currDate.unshift($e[3]), u.chooseData.length == 2 || !u.chooseData.length ? u.chooseData = [[...$e]] : de.compareDate(u.chooseData[0][3], $e[3]) ? u.chooseData = [...u.chooseData, [...$e]] : u.chooseData = [[...$e], ...u.chooseData];
        } else if (Pe == "week") {
          let De = de.getWeekDate(Fe, je, H.day, e.firstDayOfWeek);
          u.propStartDate && de.compareDate(De[0], u.propStartDate) && De.splice(0, 1, u.propStartDate), u.propEndDate && de.compareDate(u.propEndDate, De[1]) && De.splice(1, 1, u.propEndDate), u.currDate = De, u.chooseData = [de.formatResultDate(De[0]), de.formatResultDate(De[1])];
        } else
          u.currDate = $e[3], u.chooseData = [...$e];
        if (!ae) {
          let De = u.chooseData;
          Pe == "week" && (De = {
            weekDate: [
              C(u.chooseData[0]),
              C(u.chooseData[1])
            ]
          }), t("select", De), (e.isAutoBackFill || !e.poppable) && M();
        }
      }
    }, C = (H) => {
      let [G, ae, re] = H;
      return {
        date: H,
        monthWeekNum: de.getMonthWeek(G, ae, re, e.firstDayOfWeek),
        yearWeekNum: de.getYearWeek(G, ae, re, e.firstDayOfWeek)
      };
    }, D = (H) => {
      const G = H == "prev" ? u.monthsData[0] : u.monthsData[u.monthsData.length - 1];
      let ae = parseInt(G.curData[0]), re = parseInt(G.curData[1].toString().replace(/^0/, ""));
      switch (H) {
        case "prev":
          re == 1 && (ae -= 1), re = re == 1 ? 12 : --re;
          break;
        case "next":
          re == 12 && (ae += 1), re = re == 12 ? 1 : ++re;
          break;
      }
      return [ae + "", de.getNumTwoBit(re), de.getMonthDays(String(ae), String(re)) + ""];
    }, V = (H, G, ae) => {
      let { year: re, month: me } = ae;
      return G == "prev" && H >= 7 && (H -= 7), Array.from(Array(H), (Pe, Fe) => ({
        day: String(Fe + 1),
        type: G,
        year: re,
        month: me
      }));
    }, j = (H, G, ae, re) => {
      H = H - e.firstDayOfWeek;
      let { year: me, month: Pe } = ae;
      return G == "prev" && H >= 7 && (H -= 7), Array.from(Array(re), (je, $e) => ({
        day: String($e + 1),
        type: G,
        year: me,
        month: Pe
      })).slice(re - H);
    }, X = (H, G) => {
      const ae = de.getMonthPreDay(+H[0], +H[1]);
      let re = Number(H[1]) - 1, me = Number(H[0]);
      re <= 0 && (re = 12, me += 1);
      const Pe = de.getMonthDays(String(H[0]), String(H[1])), Fe = de.getMonthDays(me + "", re + ""), je = {
        year: H[0],
        month: H[1]
      }, $e = {
        curData: H,
        title: o("monthTitle", je.year, je.month),
        monthData: [
          ...j(
            ae,
            "prev",
            { month: String(re), year: String(me) },
            Fe
          ),
          ...V(Pe, "curr", je)
        ],
        cssHeight: 0,
        cssScrollHeight: 0
      };
      $e.cssHeight = 39 + ($e.monthData.length > 35 ? 384 : 320);
      let De = 0;
      u.monthsData.length > 0 && (De = u.monthsData[u.monthsData.length - 1].cssScrollHeight + u.monthsData[u.monthsData.length - 1].cssHeight), $e.cssScrollHeight = De, G == "next" ? (!u.endData || !de.compareDate(
        `${u.endData[0]}-${u.endData[1]}-${de.getMonthDays(u.endData[0], u.endData[1])}`,
        `${H[0]}-${H[1]}-${H[2]}`
      )) && u.monthsData.push($e) : !u.startData || !de.compareDate(
        `${H[0]}-${H[1]}-${H[2]}`,
        `${u.startData[0]}-${u.startData[1]}-01`
      ) ? u.monthsData.unshift($e) : u.unLoadPrev = !0;
    }, le = () => {
      let H = e.startDate ? e.startDate : de.getDay(0), G = e.endDate ? e.endDate : de.getDay(365);
      u.propStartDate = H, u.propEndDate = G, u.startData = h(H), u.endData = h(G), (e.defaultValue || Array.isArray(e.defaultValue) && e.defaultValue.length > 0) && (u.currDate = e.type !== "one" ? [...e.defaultValue] : e.defaultValue);
      const ae = {
        year: Number(u.startData[0]),
        month: Number(u.startData[1])
      }, re = {
        year: Number(u.endData[0]),
        month: Number(u.endData[1])
      };
      let me = re.month - ae.month;
      re.year - ae.year > 0 && (me = me + 12 * (re.year - ae.year)), me <= 0 && (me = 1), X(u.startData, "next");
      let Pe = 1;
      do
        X(D("next"), "next");
      while (Pe++ < me);
      if (u.monthsNum = me, e.type == "range" && Array.isArray(u.currDate))
        u.currDate.length > 0 && (H && de.compareDate(u.currDate[0], H) && u.currDate.splice(0, 1, H), G && de.compareDate(G, u.currDate[1]) && u.currDate.splice(1, 1, G), u.defaultData = [...h(u.currDate[0]), ...h(u.currDate[1])]);
      else if (e.type == "multiple" && Array.isArray(u.currDate)) {
        if (u.currDate.length > 0) {
          let We = [], He = {};
          u.currDate.forEach((Ke) => {
            H && !de.compareDate(Ke, H) && G && !de.compareDate(G, Ke) && (Object.hasOwnProperty.call(He, Ke) || (We.push(Ke), He[Ke] = Ke));
          }), u.currDate = [...We], u.defaultData = [...h(We[0])];
        }
      } else if (e.type == "week" && Array.isArray(u.currDate)) {
        if (u.currDate.length > 0) {
          let [We, He, Ke] = h(u.currDate[0]), Wt = de.getWeekDate(We, He, Ke, e.firstDayOfWeek);
          u.currDate = Wt, H && de.compareDate(u.currDate[0], H) && u.currDate.splice(0, 1, H), G && de.compareDate(G, u.currDate[1]) && u.currDate.splice(1, 1, G), u.defaultData = [...h(u.currDate[0]), ...h(u.currDate[1])];
        }
      } else
        u.currDate && (H && de.compareDate(u.currDate, H) ? u.currDate = H : G && !de.compareDate(u.currDate, G) && (u.currDate = G), u.defaultData = [...h(u.currDate)]);
      let Fe = 0, je = 0;
      u.defaultData.length > 0 && u.monthsData.forEach((We, He) => {
        We.title == o("monthTitle", u.defaultData[0], u.defaultData[1]) && (Fe = He), (e.type == "range" || e.type == "week") && We.title == o("monthTitle", u.defaultData[3], u.defaultData[4]) && (je = He);
      }), R(me, Fe), u.currentIndex = Fe, u.yearMonthTitle = u.monthsData[u.currentIndex].title, u.defaultData.length > 0 && (u.isRange ? (S({ day: u.defaultData[2], type: "curr" }, u.monthsData[u.currentIndex], !0), S({ day: u.defaultData[5], type: "curr" }, u.monthsData[je], !0)) : e.type == "week" ? S({ day: u.defaultData[2], type: "curr" }, u.monthsData[u.currentIndex], !0) : e.type == "multiple" ? [...u.currDate].forEach((We) => {
        let He = h(We), Ke = u.currentIndex;
        u.monthsData.forEach((Wt, nl) => {
          Wt.title == o("monthTitle", He[0], He[1]) && (Ke = nl);
        }), S({ day: He[2], type: "curr" }, u.monthsData[Ke], !0);
      }) : S({ day: u.defaultData[2], type: "curr" }, u.monthsData[u.currentIndex], !0));
      let $e = u.monthsData[u.monthsData.length - 1], De = $e.cssHeight + $e.cssScrollHeight;
      Re(() => {
        r != null && r.value && (i != null && i.value) && (f != null && f.value) && (y.value = r.value.clientHeight, i.value.style.height = `${De}px`, r.value.scrollTop = u.monthsData[u.currentIndex].cssScrollHeight);
      }), u.avgHeight = Math.floor(De / (me + 1));
    };
    l({
      scrollToDate: (H) => {
        de.compareDate(H, u.propStartDate) ? H = u.propStartDate : de.compareDate(H, u.propEndDate) || (H = u.propEndDate);
        let G = h(H);
        u.monthsData.forEach((ae, re) => {
          if (ae.title == o("monthTitle", G[0], G[1]) && r.value) {
            let me = u.monthsData[re].cssScrollHeight - r.value.scrollTop;
            if (e.toDateAnimation) {
              let Pe = 0, Fe = setInterval(() => {
                if (Pe++, r.value) {
                  let je = me / 10;
                  r.value.scrollTop = r.value.scrollTop + je;
                }
                Pe >= 10 && (clearInterval(Fe), r.value && (r.value.scrollTop = u.monthsData[re].cssScrollHeight));
              }, 40);
            } else
              r.value.scrollTop = u.monthsData[re].cssScrollHeight;
          }
        });
      },
      initPosition: () => {
        r != null && r.value && (r.value.scrollTop = u.monthsData[u.currentIndex].cssScrollHeight);
      }
    });
    const R = (H, G) => {
      H >= 3 ? G > 0 && G < H ? u.defaultRange = [G - 1, G + 3] : G == 0 ? u.defaultRange = [G, G + 4] : G == H && (u.defaultRange = [G - 2, G + 2]) : u.defaultRange = [0, H + 2];
      let ae = u.monthsData[u.defaultRange[0]].cssScrollHeight;
      u.translateY = ae;
    }, te = (H, G) => (e.type == "range" || e.type == "week") && H.type == "curr" && L(H, G).includes("nut-calendar__day--active"), K = (H, G) => te(H, G) && m(B(H, G)), se = (H, G) => u.currDate.length >= 2 && w(B(H, G)) ? te(H, G) : !1, ue = () => {
      if (u.currDate.length >= 2)
        return de.isEqual(u.currDate[0], u.currDate[1]);
    }, pe = (H) => {
      const G = `${H.year}-${H.month}-${Number(H.day) < 10 ? "0" + H.day : H.day}`;
      return de.isEqual(G, de.date2Str(/* @__PURE__ */ new Date()));
    }, ke = (H) => {
      if (u.monthsData.length <= 1)
        return;
      const G = H.target.scrollTop;
      let ae = Math.floor(G / u.avgHeight);
      if (ae == 0)
        G >= u.monthsData[ae + 1].cssScrollHeight && (ae += 1);
      else if (ae > 0 && ae < u.monthsNum - 1)
        G >= u.monthsData[ae + 1].cssScrollHeight && (ae += 1), G < u.monthsData[ae].cssScrollHeight && (ae -= 1);
      else {
        const re = Math.round(G + y.value);
        re < u.monthsData[ae].cssScrollHeight + u.monthsData[ae].cssHeight && G > u.monthsData[ae - 1].cssScrollHeight && (ae -= 1), ae + 1 <= u.monthsNum && re >= u.monthsData[ae + 1].cssScrollHeight + u.monthsData[ae + 1].cssHeight && (ae += 1), ae >= 1 && G < u.monthsData[ae - 1].cssScrollHeight && (ae -= 1);
      }
      u.currentIndex !== ae && (u.currentIndex = ae, R(u.monthsNum, ae)), u.yearMonthTitle = u.monthsData[ae].title;
    }, Le = () => {
      u.chooseData.splice(0), u.monthsData.splice(0), le();
    };
    return be(() => {
      le();
    }), x(
      () => e.defaultValue,
      (H) => {
        H && e.poppable && Le();
      }
    ), ce(Z(Z({
      weeks: s,
      compConthsData: v,
      showTopBtn: b,
      topInfo: $,
      bottomInfo: k,
      rangeTip: ue,
      mothsViewScroll: ke,
      getClass: L,
      isStartTip: K,
      isEndTip: se,
      chooseDay: S,
      isCurrDay: pe,
      confirm: M,
      months: r
    }, ge(u)), ge(e)), {
      translate: o,
      monthsPanel: i,
      weeksPanel: p,
      viewArea: f
    });
  }
}), Kd = { class: "nut-calendar__header" }, Ud = {
  key: 0,
  class: "nut-calendar__header-title"
}, Xd = {
  key: 1,
  class: "nut-calendar__header-slot"
}, qd = {
  key: 2,
  class: "nut-calendar__header-subtitle"
}, Zd = {
  ref: "weeksPanel",
  class: "nut-calendar__weekdays"
}, Gd = {
  ref: "monthsPanel",
  class: "nut-calendar__panel"
}, Jd = { class: "nut-calendar__month-title" }, Qd = { class: "nut-calendar__days" }, xd = ["onClick"], ef = { class: "nut-calendar__day-value" }, tf = {
  key: 0,
  class: "nut-calendar__day-tips nut-calendar__day-tips--top"
}, nf = {
  key: 1,
  class: "nut-calendar__day-tips nut-calendar__day-tips--bottom"
}, of = {
  key: 2,
  class: "nut-calendar__day-tips--curr"
}, lf = {
  key: 4,
  class: "nut-calendar__day-tip"
}, sf = {
  key: 0,
  class: "nut-calendar__footer"
};
function af(e, t, n, l, o, a) {
  return c(), d("view", {
    class: P(["nut-calendar", {
      "nut-calendar--nopop": !e.poppable,
      "nut-calendar--nofooter": e.isAutoBackFill
    }])
  }, [
    g("view", Kd, [
      e.showTitle ? (c(), d("view", Ud, E(e.title || e.translate("title")), 1)) : T("", !0),
      e.showTopBtn ? (c(), d("view", Xd, [
        _(e.$slots, "btn")
      ])) : T("", !0),
      e.showSubTitle ? (c(), d("view", qd, E(e.yearMonthTitle), 1)) : T("", !0),
      g("view", Zd, [
        (c(!0), d(Q, null, ie(e.weeks, (s, r) => (c(), d("view", {
          key: r,
          class: P(["nut-calendar__weekday", { weekend: s.weekend }])
        }, E(s.day), 3))), 128))
      ], 512)
    ]),
    g("view", {
      ref: "months",
      class: "nut-calendar__content",
      onScroll: t[0] || (t[0] = (...s) => e.mothsViewScroll && e.mothsViewScroll(...s))
    }, [
      g("view", Gd, [
        g("view", {
          ref: "viewArea",
          class: "nut-calendar__body",
          style: A({ transform: `translateY(${e.translateY}px)` })
        }, [
          (c(!0), d(Q, null, ie(e.compConthsData, (s, r) => (c(), d("view", {
            key: r,
            class: "nut-calendar__month"
          }, [
            g("view", Jd, E(s.title), 1),
            g("view", Qd, [
              g("view", {
                class: P(["nut-calendar__days-item", e.type === "range" ? "nut-calendar__days-item--range" : ""])
              }, [
                (c(!0), d(Q, null, ie(s.monthData, (i, p) => (c(), d("view", {
                  key: p,
                  class: P(["nut-calendar__day", e.getClass(i, s, p)]),
                  onClick: (f) => e.chooseDay(i, s)
                }, [
                  g("view", ef, [
                    _(e.$slots, "day", {
                      date: i.type == "curr" ? i : ""
                    }, () => [
                      he(E(i.type == "curr" ? i.day : ""), 1)
                    ])
                  ]),
                  e.topInfo ? (c(), d("view", tf, [
                    _(e.$slots, "top-info", {
                      date: i.type == "curr" ? i : ""
                    })
                  ])) : T("", !0),
                  e.bottomInfo ? (c(), d("view", nf, [
                    _(e.$slots, "bottom-info", {
                      date: i.type == "curr" ? i : ""
                    })
                  ])) : T("", !0),
                  !e.bottomInfo && e.showToday && e.isCurrDay(i) ? (c(), d("view", of, E(e.translate("today")), 1)) : T("", !0),
                  e.isStartTip(i, s) ? (c(), d("view", {
                    key: 3,
                    class: P(["nut-calendar__day-tip", { "nut-calendar__day-tips--top": e.rangeTip() }])
                  }, E(e.startText || e.translate("start")), 3)) : T("", !0),
                  e.isEndTip(i, s) ? (c(), d("view", lf, E(e.endText || e.translate("end")), 1)) : T("", !0)
                ], 10, xd))), 128))
              ], 2)
            ])
          ]))), 128))
        ], 4)
      ], 512)
    ], 544),
    e.poppable && !e.isAutoBackFill ? (c(), d("view", sf, [
      _(e.$slots, "footer-info", { date: e.chooseData }, () => [
        g("view", {
          class: "nut-calendar__confirm",
          onClick: t[1] || (t[1] = (...s) => e.confirm && e.confirm(...s))
        }, E(e.confirmText || e.translate("confirm")), 1)
      ])
    ])) : T("", !0)
  ], 2);
}
const rf = /* @__PURE__ */ ee(jd, [["render", af]]), { create: uf } = q("calendar"), cf = uf({
  components: {
    NutCalendarItem: rf,
    NutPopup: Ae
  },
  props: {
    type: {
      type: String,
      default: "one"
    },
    isAutoBackFill: {
      type: Boolean,
      default: !1
    },
    toDateAnimation: {
      type: Boolean,
      default: !0
    },
    poppable: {
      type: Boolean,
      default: !0
    },
    showTitle: {
      type: Boolean,
      default: !0
    },
    showSubTitle: {
      type: Boolean,
      default: !0
    },
    visible: {
      type: Boolean,
      default: !1
    },
    showToday: {
      type: Boolean,
      default: !0
    },
    title: {
      type: String,
      default: ""
    },
    confirmText: {
      type: String,
      default: ""
    },
    startText: {
      type: String,
      default: ""
    },
    endText: {
      type: String,
      default: ""
    },
    defaultValue: {
      type: [String, Array]
    },
    startDate: {
      type: String,
      default: de.getDay(0)
    },
    endDate: {
      type: String,
      default: de.getDay(365)
    },
    firstDayOfWeek: {
      type: Number,
      default: 0,
      validator: (e) => e >= 0 && e <= 6
    },
    lockScroll: {
      type: Boolean,
      default: !0
    },
    disabledDate: Function
  },
  emits: ["choose", "close", "update:visible", "select"],
  setup(e, { emit: t, slots: n, expose: l }) {
    const o = N({
      get() {
        return e.visible;
      },
      set(w) {
        t("update:visible", w);
      }
    }), a = N(() => n.btn), s = N(() => n["top-info"]), r = N(() => n.day), i = N(() => n["bottom-info"]), p = N(() => n["footer-info"]), f = z(null);
    l({
      scrollToDate: (w) => {
        var I;
        (I = f.value) == null || I.scrollToDate(w);
      },
      initPosition: () => {
        var w;
        (w = f.value) == null || w.initPosition();
      }
    });
    const b = () => {
      t("update:visible", !1);
    }, $ = () => {
      t("close"), t("update:visible", !1);
    };
    return {
      visible: o,
      closePopup: () => {
        $();
      },
      opened: () => {
        var w;
        (w = f.value) == null || w.initPosition();
      },
      update: b,
      close: $,
      select: (w) => {
        t("select", w);
      },
      choose: (w) => {
        $(), t("choose", w);
      },
      calendarRef: f,
      showTopBtn: a,
      topInfo: s,
      dayInfo: r,
      bottomInfo: i,
      footerInfo: p
    };
  }
});
function df(e, t, n, l, o, a) {
  const s = U("nut-calendar-item"), r = U("nut-popup");
  return e.poppable ? (c(), J(r, wt({
    key: 0,
    visible: e.visible,
    "onUpdate:visible": t[0] || (t[0] = (i) => e.visible = i),
    position: "bottom",
    round: "",
    closeable: ""
  }, e.$attrs, {
    style: { height: "85vh" },
    "lock-scroll": e.lockScroll,
    onOpened: e.opened
  }), {
    default: ne(() => [
      oe(s, {
        ref: "calendarRef",
        type: e.type,
        "is-auto-back-fill": e.isAutoBackFill,
        poppable: e.poppable,
        title: e.title,
        "default-value": e.defaultValue,
        "start-date": e.startDate,
        "end-date": e.endDate,
        "confirm-text": e.confirmText,
        "start-text": e.startText,
        "end-text": e.endText,
        "show-today": e.showToday,
        "show-title": e.showTitle,
        "show-sub-title": e.showSubTitle,
        "to-date-animation": e.toDateAnimation,
        "first-day-of-week": e.firstDayOfWeek,
        "disabled-date": e.disabledDate,
        onUpdate: e.update,
        onClose: e.close,
        onChoose: e.choose,
        onSelect: e.select
      }, kt({ _: 2 }, [
        e.showTopBtn ? {
          name: "btn",
          fn: ne(() => [
            _(e.$slots, "btn")
          ]),
          key: "0"
        } : void 0,
        e.dayInfo ? {
          name: "day",
          fn: ne((i) => [
            _(e.$slots, "day", {
              date: i.date
            })
          ]),
          key: "1"
        } : void 0,
        e.topInfo ? {
          name: "top-info",
          fn: ne((i) => [
            _(e.$slots, "top-info", {
              date: i.date
            })
          ]),
          key: "2"
        } : void 0,
        e.bottomInfo ? {
          name: "bottom-info",
          fn: ne((i) => [
            _(e.$slots, "bottom-info", {
              date: i.date
            })
          ]),
          key: "3"
        } : void 0,
        e.footerInfo ? {
          name: "footer-info",
          fn: ne((i) => [
            _(e.$slots, "footer-info", {
              date: i.date
            })
          ]),
          key: "4"
        } : void 0
      ]), 1032, ["type", "is-auto-back-fill", "poppable", "title", "default-value", "start-date", "end-date", "confirm-text", "start-text", "end-text", "show-today", "show-title", "show-sub-title", "to-date-animation", "first-day-of-week", "disabled-date", "onUpdate", "onClose", "onChoose", "onSelect"])
    ]),
    _: 3
  }, 16, ["visible", "lock-scroll", "onOpened"])) : (c(), J(s, {
    key: 1,
    ref: "calendarRef",
    type: e.type,
    "is-auto-back-fill": e.isAutoBackFill,
    poppable: e.poppable,
    title: e.title,
    "confirm-text": e.confirmText,
    "start-text": e.startText,
    "end-text": e.endText,
    "default-value": e.defaultValue,
    "start-date": e.startDate,
    "end-date": e.endDate,
    "show-title": e.showTitle,
    "show-sub-title": e.showSubTitle,
    "to-date-animation": e.toDateAnimation,
    "show-today": e.showToday,
    "first-day-of-week": e.firstDayOfWeek,
    "disabled-date": e.disabledDate,
    onUpdate: e.update,
    onClose: e.close,
    onChoose: e.choose,
    onSelect: e.select
  }, kt({ _: 2 }, [
    e.showTopBtn ? {
      name: "btn",
      fn: ne(() => [
        _(e.$slots, "btn")
      ]),
      key: "0"
    } : void 0,
    e.dayInfo ? {
      name: "day",
      fn: ne((i) => [
        _(e.$slots, "day", {
          date: i.date
        })
      ]),
      key: "1"
    } : void 0,
    e.topInfo ? {
      name: "top-info",
      fn: ne((i) => [
        _(e.$slots, "top-info", {
          date: i.date
        })
      ]),
      key: "2"
    } : void 0,
    e.bottomInfo ? {
      name: "bottom-info",
      fn: ne((i) => [
        _(e.$slots, "bottom-info", {
          date: i.date
        })
      ]),
      key: "3"
    } : void 0
  ]), 1032, ["type", "is-auto-back-fill", "poppable", "title", "confirm-text", "start-text", "end-text", "default-value", "start-date", "end-date", "show-title", "show-sub-title", "to-date-animation", "show-today", "first-day-of-week", "disabled-date", "onUpdate", "onClose", "onChoose", "onSelect"]));
}
const ff = /* @__PURE__ */ ee(cf, [["render", df]]), pf = () => we(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "18",
    viewBox: "0 0 18 18"
  },
  [
    we("path", {
      d: "M6.605 9.49a.771.771 0 0 1 0-.98l3.6-4.372a.771.771 0 0 1 1.19.981L8.2 9l3.197 3.881a.771.771 0 1 1-1.191.98l-3.6-4.37Z"
    })
  ]
), mf = () => we(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "18",
    viewBox: "0 0 18 18"
  },
  [
    we("path", {
      d: "M11.396 9.49a.771.771 0 0 0 0-.98l-3.6-4.372a.771.771 0 0 0-1.191.981L9.8 9l-3.196 3.881a.771.771 0 0 0 1.19.98l3.6-4.37Z"
    })
  ]
), hf = () => we(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "18",
    viewBox: "0 0 18 18"
  },
  [
    we("path", {
      d: "M13.853 4.026a.771.771 0 0 1 .12 1.085L10.864 9l3.11 3.889a.771.771 0 1 1-1.204.963L9.272 9.482a.771.771 0 0 1 0-.964l3.497-4.371a.771.771 0 0 1 1.084-.12Zm-5.245 0a.771.771 0 0 1 .12 1.085L5.617 9l3.111 3.889a.771.771 0 0 1-1.205.963L4.026 9.482a.771.771 0 0 1 0-.964l3.497-4.371a.771.771 0 0 1 1.085-.12Z"
    })
  ]
), gf = () => we(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "18",
    viewBox: "0 0 18 18"
  },
  [
    we("path", {
      d: "M4.147 13.974a.771.771 0 0 1-.12-1.085L7.136 9 4.028 5.11a.771.771 0 1 1 1.204-.963l3.497 4.371a.771.771 0 0 1 0 .964l-3.497 4.371a.771.771 0 0 1-1.084.12Zm5.245 0a.771.771 0 0 1-.12-1.085L12.383 9 9.272 5.11a.771.771 0 1 1 1.205-.963l3.497 4.371a.771.771 0 0 1 0 .964l-3.497 4.371a.771.771 0 0 1-1.085.12Z"
    })
  ]
), ot = (e) => e ? {
  year: e.getFullYear(),
  month: e.getMonth() + 1,
  date: e.getDate()
} : null, Gt = (e) => e ? new Date(e.year, e.month - 1, e.date) : null, Pn = (e) => Array.isArray(e) ? e.map((t) => ot(t)) : e ? [ot(e)] : [], vf = (e) => Array.isArray(e) ? e.map((t) => Gt(t)) : e ? [Gt(e)] : [], yf = (e, t, n) => {
  let l = t - 1, o = e;
  l <= 0 && (l = 12, o -= 1);
  let a = de.getMonthPreDay(e, t);
  a -= n, a >= 7 && (a -= 7);
  const s = de.getMonthDays(`${o}`, `${l}`);
  return Array.from(Array(s), (i, p) => ({
    type: "prev",
    year: o,
    month: l,
    date: p + 1
  })).slice(s - a);
}, bf = (e, t) => {
  const n = de.getMonthDays(`${e}`, `${t}`);
  return Array.from(Array(n), (l, o) => ({
    type: "current",
    year: e,
    month: t,
    date: o + 1
  }));
}, $f = (e, t) => {
  const n = new Date(e.year, e.month - 1, e.date), l = (n.getDay() + 7 - t) % 7;
  return [
    ot(new Date(n.getTime() - 24 * 60 * 60 * 1e3 * l)),
    ot(new Date(n.getTime() + 24 * 60 * 60 * 1e3 * (6 - l)))
  ];
}, wf = (e, t) => {
  const n = e.year, l = e.month, o = [...yf(n, l, t), ...bf(n, l)], a = o.length, s = e.month === 12 ? e.year + 1 : e.year, r = e.month === 12 ? 1 : e.month + 1;
  for (let i = 1; i <= 42 - a; i++)
    o.push({
      type: "next",
      year: s,
      month: r,
      date: i
    });
  return o;
}, nt = (e, t) => {
  if (e && t)
    return e.year === t.year ? e.month === t.month ? e.date - t.date : e.month - t.month : e.year - t.year;
}, it = (e, t) => nt(e, t) === 0, kf = { class: "nut-calendarcard" }, Cf = { class: "nut-calendarcard-header" }, Sf = { class: "nut-calendarcard-header-left" }, Tf = { class: "nut-calendarcard-header-title" }, Nf = { class: "nut-calendarcard-header-right" }, Df = { class: "nut-calendarcard-content" }, _f = { class: "nut-calendarcard-days" }, If = { class: "nut-calendarcard-days" }, Bf = ["onClick"], Mf = { class: "nut-calendarcard-day-top" }, Lf = { class: "nut-calendarcard-day-inner" }, Pf = { class: "nut-calendarcard-day-bottom" }, En = "NutCalendarCard", Io = /* @__PURE__ */ Ce({
  name: En,
  __name: "calendar-card",
  props: {
    type: { default: "single" },
    firstDayOfWeek: { default: 0 },
    modelValue: { default: null },
    startDate: { default: null },
    endDate: { default: null },
    disableDay: { type: Function, default: () => !1 }
  },
  emits: ["update:modelValue", "change", "dayClick", "pageChange"],
  setup(e, { expose: t, emit: n }) {
    const l = e, o = n, a = Se(En), r = z((() => {
      let L = new Date(Date.now());
      const M = l.modelValue;
      return Array.isArray(M) ? M.length && (L = M[0]) : M && (L = M), {
        year: L.getFullYear(),
        month: L.getMonth() + 1
      };
    })()), i = z([]), p = N(() => {
      const L = a("weekdays").map((M, S) => ({
        name: M,
        key: S
      }));
      return [...L.slice(l.firstDayOfWeek, 7), ...L.slice(0, l.firstDayOfWeek)];
    }), f = z(l.modelValue ? Pn(l.modelValue) : []);
    $t(() => {
      const L = l.modelValue ? Pn(l.modelValue) : [];
      f.value = L;
    });
    const y = (L) => {
      if (f.value = L, l.type === "single") {
        const M = Gt(L[0]);
        o("update:modelValue", M), o("change", M);
      } else if (l.type === "multiple" || l.type === "range" || l.type === "week") {
        const M = vf(L);
        o("update:modelValue", M), o("change", M);
      }
    };
    $t(() => {
      const L = wf(r.value, l.firstDayOfWeek);
      i.value = L, o("pageChange", r.value);
    });
    const v = (L) => !!(l.disableDay && l.disableDay(L) || l.startDate && Number(nt(L, ot(l.startDate))) < 0 || l.endDate && Number(nt(L, ot(l.endDate))) > 0), b = (L) => {
      if (l.type === "single" || l.type === "multiple") {
        for (const M in f.value)
          if (it(L, f.value[M]))
            return !0;
      } else if (l.type === "range" && f.value.length === 1 && it(f.value[0], L))
        return !0;
      return !1;
    }, $ = (L) => (l.type === "range" || l.type === "week") && f.value.length === 2 && it(L, f.value[0]), k = (L) => (l.type === "range" || l.type === "week") && f.value.length === 2 && it(L, f.value[1]), u = (L) => {
      if ((l.type === "range" || l.type === "week") && f.value.length === 2) {
        const M = nt(f.value[0], L), S = nt(L, f.value[1]);
        if (M && M < 0 && S && S < 0)
          return !0;
      }
      return !1;
    }, h = (L) => {
      const M = new Date(L.year, L.month - 1, L.date).getDay();
      return M === 0 || M === 6;
    }, m = (L) => {
      if (v(L))
        return ["disabled"];
      const M = [];
      return L.type === "current" && (b(L) && M.push("active"), $(L) && M.push("start"), k(L) && M.push("end"), u(L) && M.push("mid"), h(L) && M.push("weekend")), M;
    }, w = (L, M) => {
      if (l.startDate) {
        const S = nt(
          {
            year: L,
            month: M,
            date: 31
          },
          ot(l.startDate)
        );
        if (S && S < 0)
          return;
      }
      if (l.endDate) {
        const S = nt(
          {
            year: L,
            month: M,
            date: 1
          },
          ot(l.endDate)
        );
        if (S && S > 0)
          return;
      }
      r.value = {
        year: L,
        month: M
      };
    }, I = (L = 1) => {
      const M = r.value.year * 12 + r.value.month;
      let S = (M + L) % 12;
      S === 0 && (S = 12);
      const C = Math.floor((M + L - S) / 12);
      w(C, S);
    }, B = (L) => {
      if (!(L.type === "prev" || L.type === "next" || v(L)))
        switch (o("dayClick", L), l.type) {
          case "single": {
            f.value[0] && it(f.value[0], L) ? y([]) : y([L]);
            break;
          }
          case "multiple": {
            const M = f.value.find((S) => it(S, L));
            y(M ? f.value.filter((S) => S !== M) : [...f.value, L]);
            break;
          }
          case "range": {
            const M = f.value.length;
            if (M === 0 || M === 2)
              y([L]);
            else if (M === 1) {
              const S = nt(f.value[0], L);
              S == null ? y([]) : S < 0 ? y([f.value[0], L]) : y([L, f.value[0]]);
            } else
              console.warn("[NutUI] Calendar range error");
            break;
          }
          case "week": {
            if (f.value.length === 2 || f.value.length === 0) {
              const [M, S] = $f(L, l.firstDayOfWeek);
              y([M, S]);
            } else
              console.warn("[NutUI] Calendar week error");
            break;
          }
          default:
            console.warn("[NutUI] Calendar type error");
        }
    };
    return t({
      jump: I,
      jumpTo: w
    }), (L, M) => Ie((c(), d("div", kf, [
      g("div", Cf, [
        g("div", Sf, [
          g("div", {
            class: "double-left",
            onClick: M[0] || (M[0] = (S) => I(-12))
          }, [
            oe(ye(hf))
          ]),
          g("div", {
            class: "left",
            onClick: M[1] || (M[1] = (S) => I(-1))
          }, [
            oe(ye(pf))
          ])
        ]),
        g("div", Tf, E(ye(a)("monthTitle", r.value.year, r.value.month)), 1),
        g("div", Nf, [
          g("div", {
            class: "right",
            onClick: M[2] || (M[2] = (S) => I(1))
          }, [
            oe(ye(mf))
          ]),
          g("div", {
            class: "double-right",
            onClick: M[3] || (M[3] = (S) => I(12))
          }, [
            oe(ye(gf))
          ])
        ])
      ]),
      g("div", Df, [
        g("div", _f, [
          (c(!0), d(Q, null, ie(p.value, (S) => (c(), d("div", {
            key: S.name,
            class: P(["nut-calendarcard-day header", S.key === 0 || S.key === 6 ? "weekend" : ""])
          }, E(S.name), 3))), 128))
        ]),
        g("div", If, [
          (c(!0), d(Q, null, ie(i.value, (S) => (c(), d("div", {
            key: `${S.year}-${S.month}-${S.date}`,
            class: P(["nut-calendarcard-day", [S.type, ...m(S)]]),
            onClick: (C) => B(S)
          }, [
            g("div", Mf, [
              _(L.$slots, "top", { day: S })
            ]),
            g("div", Lf, [
              _(L.$slots, "default", { day: S }, () => [
                he(E(S.date), 1)
              ])
            ]),
            g("div", Pf, [
              _(L.$slots, "bottom", { day: S })
            ])
          ], 10, Bf))), 128))
        ])
      ])
    ], 512)), [
      [Me, i.value.length > 0]
    ]);
  }
});
Te(Io);
const Bo = Symbol("nut-checkbox"), { create: Ef, componentName: tt } = q("checkbox"), Af = Ef({
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    textPosition: {
      type: String,
      default: "right"
    },
    iconSize: {
      type: [String, Number],
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    indeterminate: {
      type: Boolean,
      default: !1
    },
    shape: {
      type: String,
      default: "round"
      // button
    }
  },
  emits: ["change", "update:modelValue"],
  setup(e, { emit: t, slots: n }) {
    const l = Ze(xe(e, "disabled")), o = Ee(Bo, null), a = fe({
      partialSelect: e.indeterminate
    }), s = N(() => !!o), r = N(() => s.value ? o.value.value.includes(e.label) : e.modelValue), i = N(() => s.value && o.disabled.value ? o.disabled.value : l.value), p = N(() => !!e.modelValue), f = N(() => i.value ? "nut-checkbox__icon--disable" : a.partialSelect ? "nut-checkbox__icon--indeterminate" : r.value ? "nut-checkbox__icon" : "nut-checkbox__icon--unchecked");
    let y = "";
    const v = (h, m) => {
      y = "click", t("update:modelValue", h), t("change", h, m);
    };
    x(
      () => e.modelValue,
      (h) => {
        y == "click" ? y = "" : t("change", h);
      }
    );
    const b = () => {
      const { iconSize: h } = e, m = {
        CheckNormal: n.icon ? n.icon : qt,
        Checked: n.checkedIcon ? n.checkedIcon : Qn,
        CheckDisabled: n.indeterminate ? n.indeterminate : Fl
      }, w = a.partialSelect ? m.CheckDisabled : r.value ? m.Checked : m.CheckNormal, I = Be(h);
      return we(w, {
        width: I,
        height: I,
        size: I,
        class: f.value
      });
    }, $ = () => {
      var h;
      return we(
        "view",
        {
          class: `${tt}__label ${i.value ? `${tt}__label--disabled` : ""}`
        },
        (h = n.default) == null ? void 0 : h.call(n)
      );
    }, k = () => {
      var h;
      return we(
        "view",
        {
          class: `${tt}__button ${r.value && `${tt}__button--active`} ${i.value ? `${tt}__button--disabled` : ""}`
        },
        (h = n.default) == null ? void 0 : h.call(n)
      );
    }, u = () => {
      var h, m;
      if (!i.value) {
        if (p.value && a.partialSelect) {
          a.partialSelect = !1, v(p.value, (h = n.default) == null ? void 0 : h.call(n)[0].children);
          return;
        }
        if (v(!p.value, (m = n.default) == null ? void 0 : m.call(n)[0].children), s.value) {
          const w = o.value.value, I = o.max.value, { label: B } = e, L = w.indexOf(B);
          L > -1 ? w.splice(L, 1) : L <= -1 && (w.length < I || !I) && w.push(B), o.updateValue(w);
        }
      }
    };
    return be(() => {
      s.value && o.link(Ue());
    }), en(() => {
      s.value && o.unlink(Ue());
    }), x(
      () => e.indeterminate,
      (h) => {
        a.partialSelect = h;
      }
    ), () => we(
      "view",
      {
        class: `${tt} ${tt}--${e.shape} ${e.textPosition === "left" ? `${tt}--reverse` : ""}`,
        onClick: u
      },
      [e.shape == "button" ? k() : [b(), $()]]
    );
  }
}), { create: zf, componentName: Vf } = q("checkbox-group"), Of = zf({
  props: {
    modelValue: {
      type: Array,
      default: () => []
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    max: {
      type: Number,
      default: 0
    }
  },
  emits: ["change", "update:modelValue"],
  setup(e, { slots: t, emit: n, expose: l }) {
    const o = fe({
      children: []
    }), a = (f) => {
      f.proxy && o.children.push(f.proxy);
    }, s = (f) => {
      f.proxy && (o.children = o.children.filter((y) => y !== f.proxy));
    }, r = (f) => {
      n("update:modelValue", f), n("change", f);
    }, i = (f) => {
      const y = [];
      f && o.children.forEach((v) => {
        v != null && v.disabled || y.push(v == null ? void 0 : v.label);
      }), n("update:modelValue", y);
    }, p = () => {
      const f = o.children.filter((y) => y != null && y.disabled ? !1 : !e.modelValue.includes(y.label)).map((y) => y.label);
      n("update:modelValue", f);
    };
    return ze(Bo, {
      value: N(() => e.modelValue),
      disabled: N(() => e.disabled),
      max: N(() => e.max),
      updateValue: r,
      link: a,
      unlink: s
    }), x(
      () => e.modelValue,
      (f) => {
        n("change", f);
      }
    ), l({ toggleAll: i, toggleReverse: p }), () => {
      var f;
      return we(
        "view",
        {
          class: Vf
        },
        (f = t.default) == null ? void 0 : f.call(t)
      );
    };
  }
}), Hf = {
  text: "text",
  value: "value",
  children: "children",
  className: "className"
}, Rf = (e, t) => {
  const n = fe({
    formattedColumns: e.columns
  }), l = N(() => Z(Z({}, Hf), e.fieldNames)), o = z([]), a = N(() => {
    const u = l.value;
    return f.value.map((h, m) => {
      const w = h.findIndex((I) => I[u.value] === o.value[m]);
      return w === -1 ? 0 : w;
    });
  }), s = z([]), r = (u) => {
    u && s.value.length < f.value.length && s.value.push(u);
  }, i = N(() => {
    const u = l.value;
    return f.value.map((h, m) => h.find((w) => w[u.value] === o.value[m]) || h[0]);
  }), p = N(() => {
    const u = n.formattedColumns[0], h = l.value;
    if (u) {
      if (Array.isArray(u))
        return "multiple";
      if (h.children in u)
        return "cascade";
    }
    return "single";
  }), f = N(() => {
    let u = [];
    switch (p.value) {
      case "multiple":
        u = n.formattedColumns;
        break;
      case "cascade":
        u = y(n.formattedColumns, o.value ? o.value : []);
        break;
      default:
        u = [n.formattedColumns];
        break;
    }
    return u;
  }), y = (u, h) => {
    const m = [], w = l.value;
    let I = {
      text: "",
      value: "",
      [w.children]: u
    }, B = 0;
    for (; I && I[w.children]; ) {
      const L = I[w.children], M = h[B];
      let S = L.findIndex((C) => C[w.value] === M);
      S === -1 && (S = 0), I = I[w.children][S], B++, m.push(L);
    }
    return m;
  }, v = () => {
    t("cancel", {
      selectedValue: o.value,
      selectedOptions: i.value
    });
  }, b = (u, h) => {
    var w;
    const m = l.value;
    if (h && Object.keys(h).length) {
      if (o.value = o.value ? o.value : [], p.value === "cascade") {
        o.value[u] = (w = h[m.value]) != null ? w : "";
        let I = u, B = h;
        for (; B && B[m.children] && B[m.children][0]; )
          o.value[I + 1] = B[m.children][0][m.value], I++, B = B[m.children][0];
        B && B[m.children] && B[m.children].length === 0 && (o.value = o.value.slice(0, I + 1));
      } else
        o.value[u] = Object.prototype.hasOwnProperty.call(h, m.value) ? h[m.value] : "";
      t("change", {
        columnIndex: u,
        selectedValue: o.value,
        selectedOptions: i.value
      });
    }
  }, $ = () => {
    const u = l.value;
    o.value && !o.value.length && f.value.forEach((h) => {
      o.value.push(h[0][u.value]);
    }), t("confirm", {
      selectedValue: o.value,
      selectedOptions: i.value
    });
  }, k = (u, h) => JSON.stringify(u) === JSON.stringify(h);
  return x(
    () => e.modelValue,
    (u) => {
      k(u, o.value) || (o.value = u);
    },
    { deep: !0, immediate: !0 }
  ), x(
    o,
    (u) => {
      k(u, e.modelValue) || t("update:modelValue", u);
    },
    { deep: !0 }
  ), x(
    () => e.columns,
    (u) => {
      n.formattedColumns = u;
    }
  ), ce(Z({}, ge(n)), {
    columnsType: p,
    columnsList: f,
    columnFieldNames: l,
    cancel: v,
    changeHandler: b,
    confirm: $,
    defaultValues: o,
    defaultIndexes: a,
    pickerColumn: s,
    swipeRef: r,
    selectedOptions: i,
    isSameValue: k
  });
}, { create: Ff } = q("picker-column"), Wf = Ff({
  props: {
    // 当前选中项
    value: [String, Number],
    columnsType: String,
    column: {
      type: Array,
      default: () => []
    },
    // 是否开启3D效果
    threeDimensional: {
      type: Boolean,
      default: !0
    },
    swipeDuration: {
      type: [Number, String],
      default: 1e3
    },
    visibleOptionNum: {
      type: [Number, String],
      default: 7
    },
    optionHeight: {
      type: [Number, String],
      default: 36
    },
    fieldNames: {
      type: Object,
      default: () => ({})
    },
    // 特殊环境判断
    taro: {
      type: Boolean,
      defualt: !1
    }
  },
  emits: ["click", "change"],
  setup(e, { emit: t }) {
    const n = et(), l = fe({
      touchParams: {
        startY: 0,
        endY: 0,
        startTime: 0,
        endTime: 0,
        lastY: 0,
        lastTime: 0
      },
      currIndex: 1,
      transformY: 0,
      scrollDistance: 0,
      rotation: 20
    }), o = z(null), a = z(!1), s = z(0), r = z(0), i = 200, p = 300, f = 15, y = N(() => ({
      transition: `transform ${r.value}ms cubic-bezier(0.17, 0.89, 0.45, 1)`,
      transform: `rotate3d(1, 0, 0, ${s.value})`,
      top: `calc(50% - ${+e.optionHeight / 2}px)`
    })), v = N(() => {
      const { optionHeight: C } = e;
      return {
        transition: `transform ${r.value}ms cubic-bezier(0.17, 0.89, 0.45, 1)`,
        transform: `translate3d(0, ${l.scrollDistance}px, 0)`,
        top: `calc(50% - ${+C / 2}px)`,
        height: `${C}px`
      };
    }), b = (C) => `transform: rotate3d(1, 0, 0, ${-l.rotation * C}deg) translate3d(0px, 0px, 104px)`, $ = N(() => ({
      backgroundSize: `100% ${(+e.visibleOptionNum - 1) * +e.optionHeight / 2}px`
    })), k = (C) => {
      if (n.start(C), a.value && !e.taro) {
        const D = o.value, { transform: V } = window.getComputedStyle(D);
        if (e.threeDimensional) {
          const j = Math.floor(parseInt(s.value) / 360), X = +V.split(", ")[5], le = +V.split(", ")[6] < 0 ? 180 : 0, W = j * 360 + Math.acos(X) / Math.PI * 180 + le;
          l.scrollDistance = -Math.abs((W / l.rotation - 1) * +e.optionHeight);
        } else
          l.scrollDistance = +V.slice(7, V.length - 1).split(", ")[5];
      }
      ft(C, !0), l.touchParams.startY = n.deltaY.value, l.touchParams.startTime = Date.now(), l.transformY = l.scrollDistance;
    }, u = (C) => {
      n.move(C), n.isVertical() && (a.value = !0, ft(C, !0)), l.touchParams.lastY = n.deltaY.value;
      let D = l.touchParams.lastY - l.touchParams.startY;
      B(D);
    }, h = () => {
      l.touchParams.lastY = n.deltaY.value, l.touchParams.lastTime = Date.now();
      let C = l.touchParams.lastY - l.touchParams.startY, D = l.touchParams.lastTime - l.touchParams.startTime;
      if (D <= p && Math.abs(C) > f) {
        const V = m(C, D);
        B(V, "end", +e.swipeDuration);
        return;
      } else
        B(C, "end");
      setTimeout(() => {
        n.reset(), a.value = !1;
      }, 0);
    }, m = (C, D) => (C = Math.abs(C / D) / 3e-3 * (C < 0 ? -1 : 1), C), w = (C) => C >= l.currIndex + 8 || C <= l.currIndex - 8, I = (C = 0, D, V = i, j) => {
      D === "end" ? r.value = V : r.value = 0, s.value = j, l.scrollDistance = C;
    }, B = (C, D, V) => {
      const { optionHeight: j } = e;
      let X = C + l.transformY;
      if (D === "end") {
        X > 0 && (X = 0), X < -(e.column.length - 1) * +j && (X = -(e.column.length - 1) * +j);
        let le = Math.round(X / +j) * +j, W = `${(Math.abs(Math.round(le / +j)) + 1) * l.rotation}deg`;
        I(le, D, V, W), l.currIndex = Math.abs(Math.round(le / +j)) + 1;
      } else {
        let le = 0, W = (-X / +j + 1) * l.rotation;
        const Y = (e.column.length + 1) * l.rotation, R = 0;
        le = Ve(W, R, Y), R < le && le < Y && (I(X, null, void 0, le + "deg"), l.currIndex = Math.abs(Math.round(X / +j)) + 1);
      }
    }, L = () => {
      t("change", e.column[l.currIndex - 1]);
    }, M = (C) => {
      const { column: D } = e;
      let V = D.findIndex((X) => X[e.fieldNames.value] === e.value);
      l.currIndex = V === -1 ? 1 : V + 1;
      let j = V === -1 ? 0 : V * +e.optionHeight;
      C && L(), B(-j);
    }, S = () => {
      a.value = !1, r.value = 0, L();
    };
    return x(
      () => e.column,
      () => {
        e.column && e.column.length > 0 && (l.transformY = 0, M(!1));
      },
      {
        deep: !0
      }
    ), x(
      () => e.value,
      () => {
        l.transformY = 0, M(!1);
      },
      {
        deep: !0
      }
    ), be(() => {
      M(!0);
    }), ce(Z(Z({}, ge(l)), ge(e)), {
      setRollerStyle: b,
      isHidden: w,
      roller: o,
      onTouchStart: k,
      onTouchMove: u,
      onTouchEnd: h,
      touchRollerStyle: y,
      touchTileStyle: v,
      setMove: B,
      stopMomentum: S,
      pxCheck: Be,
      maskStyles: $
    });
  }
});
function Yf(e, t, n, l, o, a) {
  return c(), d("view", {
    class: "nut-picker__list",
    onTouchstart: t[1] || (t[1] = (...s) => e.onTouchStart && e.onTouchStart(...s)),
    onTouchmove: t[2] || (t[2] = (...s) => e.onTouchMove && e.onTouchMove(...s)),
    onTouchend: t[3] || (t[3] = (...s) => e.onTouchEnd && e.onTouchEnd(...s))
  }, [
    g("view", {
      ref: "roller",
      class: "nut-picker-roller",
      style: A(e.threeDimensional ? e.touchRollerStyle : e.touchTileStyle),
      onTransitionend: t[0] || (t[0] = (...s) => e.stopMomentum && e.stopMomentum(...s))
    }, [
      (c(!0), d(Q, null, ie(e.column, (s, r) => {
        var i;
        return c(), d(Q, {
          key: (i = s[e.fieldNames.value]) != null ? i : r
        }, [
          s && s[e.fieldNames.text] && e.threeDimensional ? (c(), d("view", {
            key: 0,
            class: P(["nut-picker-roller-item", {
              "nut-picker-roller-item-hidden": e.isHidden(r + 1),
              [s[e.fieldNames.className]]: s[e.fieldNames.className]
            }]),
            style: A(e.setRollerStyle(r + 1))
          }, E(s[e.fieldNames.text]), 7)) : T("", !0),
          s && s[e.fieldNames.text] && !e.threeDimensional ? (c(), d("view", {
            key: 1,
            class: P(["nut-picker-roller-item-tile", {
              [s[e.fieldNames.className]]: s[e.fieldNames.className]
            }]),
            style: A({ height: e.pxCheck(e.optionHeight), lineHeight: e.pxCheck(e.optionHeight) })
          }, E(s[e.fieldNames.text]), 7)) : T("", !0)
        ], 64);
      }), 128))
    ], 36),
    g("view", {
      class: "nut-picker-roller-mask",
      style: A(e.maskStyles)
    }, null, 4)
  ], 32);
}
const jf = /* @__PURE__ */ ee(Wf, [["render", Yf]]), Kf = {
  modelValue: {
    type: Array,
    default: () => []
  },
  title: {
    type: String,
    default: ""
  },
  cancelText: {
    type: String,
    default: ""
  },
  okText: {
    type: String,
    default: ""
  },
  columns: {
    type: Array,
    default: () => []
  },
  threeDimensional: {
    type: Boolean,
    default: !1
  },
  swipeDuration: {
    type: [Number, String],
    default: 1e3
  },
  showToolbar: {
    type: Boolean,
    default: !0
  },
  visibleOptionNum: {
    type: [Number, String],
    default: 7
  },
  optionHeight: {
    type: [Number, String],
    default: 36
  },
  fieldNames: {
    type: Object,
    default: () => ({})
  }
}, { create: Uf } = q("picker"), Xf = "NutPicker", qf = Uf({
  components: {
    NutPickerColumn: jf
  },
  props: Kf,
  emits: ["cancel", "change", "confirm", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = Se(Xf), { changeHandler: l, confirm: o, defaultValues: a, columnsList: s, columnsType: r, columnFieldNames: i, cancel: p } = Rf(
      e,
      t
    ), f = z([]), y = ($) => {
      $ && f.value.length < s.value.length && f.value.push($);
    }, v = N(() => {
      const $ = {};
      return $.height = `${+e.visibleOptionNum * +e.optionHeight}px`, $["--lineHeight"] = `${+e.optionHeight}px`, $;
    });
    return {
      columnsType: r,
      columnsList: s,
      columnFieldNames: i,
      cancel: p,
      changeHandler: l,
      confirmHandler: () => {
        f.value.length > 0 && f.value.forEach(($) => {
          $.stopMomentum();
        }), o();
      },
      defaultValues: a,
      translate: n,
      pickerColumn: f,
      swipeRef: y,
      columnStyle: v
    };
  }
}), Zf = { class: "nut-picker" }, Gf = {
  key: 0,
  class: "nut-picker__bar"
}, Jf = { class: "nut-picker__title" };
function Qf(e, t, n, l, o, a) {
  const s = U("nut-picker-column");
  return c(), d("div", Zf, [
    e.showToolbar ? (c(), d("view", Gf, [
      g("view", {
        class: "nut-picker__left",
        onClick: t[0] || (t[0] = (...r) => e.cancel && e.cancel(...r))
      }, E(e.cancelText || e.translate("cancel")), 1),
      g("view", Jf, E(e.title), 1),
      g("view", {
        class: "nut-picker__right",
        onClick: t[1] || (t[1] = (...r) => e.confirmHandler && e.confirmHandler(...r))
      }, E(e.okText || e.translate("confirm")), 1)
    ])) : T("", !0),
    _(e.$slots, "top"),
    g("view", {
      class: "nut-picker__column",
      style: A(e.columnStyle)
    }, [
      (c(!0), d(Q, null, ie(e.columnsList, (r, i) => (c(), d("view", {
        key: i,
        class: "nut-picker__columnitem"
      }, [
        oe(s, {
          ref_for: !0,
          ref: e.swipeRef,
          column: r,
          "columns-type": e.columnsType,
          "field-names": e.columnFieldNames,
          value: e.defaultValues && e.defaultValues[i],
          "three-dimensional": e.threeDimensional,
          "swipe-duration": e.swipeDuration,
          "visible-option-num": e.visibleOptionNum,
          "option-height": e.optionHeight,
          onChange: (p) => {
            e.changeHandler(i, p);
          }
        }, null, 8, ["column", "columns-type", "field-names", "value", "three-dimensional", "swipe-duration", "visible-option-num", "option-height", "onChange"])
      ]))), 128))
    ], 4),
    _(e.$slots, "default")
  ]);
}
const Mo = /* @__PURE__ */ ee(qf, [["render", Qf]]), { create: xf } = q("date-picker"), An = (/* @__PURE__ */ new Date()).getFullYear();
function Kt(e) {
  return gl(e) && !isNaN(e.getTime());
}
const ep = {
  day: "日",
  year: "年",
  month: "月",
  hour: "时",
  minute: "分",
  seconds: "秒"
}, tp = xf({
  components: {
    NutPicker: Mo
  },
  props: {
    modelValue: null,
    title: {
      type: String,
      default: ""
    },
    okText: {
      type: String,
      default: ""
    },
    cancelText: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "date"
    },
    isShowChinese: {
      type: Boolean,
      default: !1
    },
    minuteStep: {
      type: Number,
      default: 1
    },
    minDate: {
      type: Date,
      default: () => new Date(An - 10, 0, 1),
      validator: Kt
    },
    maxDate: {
      type: Date,
      default: () => new Date(An + 10, 11, 31),
      validator: Kt
    },
    formatter: {
      type: Function,
      default: null
    },
    // 是否开启3D效果
    threeDimensional: {
      type: Boolean,
      default: !0
    },
    // 惯性滚动 时长
    swipeDuration: {
      type: [Number, String],
      default: 1e3
    },
    filter: Function,
    showToolbar: {
      type: Boolean,
      default: !0
    },
    visibleOptionNum: {
      type: [Number, String],
      default: 7
    },
    optionHeight: {
      type: [Number, String],
      default: 36
    }
  },
  emits: ["click", "cancel", "change", "confirm", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = fe({
      currentDate: /* @__PURE__ */ new Date(),
      title: e.title,
      selectedValue: []
    }), l = (u) => {
      Kt(u) || (u = e.minDate);
      let h = Math.max(u.getTime(), e.minDate.getTime());
      return h = Math.min(h, e.maxDate.getTime()), new Date(h);
    };
    function o(u, h) {
      return 32 - new Date(u, h - 1, 32).getDate();
    }
    const a = (u, h) => {
      const m = u == "min" ? e.minDate : e.maxDate, w = m.getFullYear();
      let I = 1, B = 1, L = 0, M = 0;
      u === "max" && (I = 12, B = o(h.getFullYear(), h.getMonth() + 1), L = 23, M = 59);
      let S = M;
      return h.getFullYear() === w && (I = m.getMonth() + 1, h.getMonth() + 1 === I && (B = m.getDate(), h.getDate() === B && (L = m.getHours(), h.getHours() === L && (M = m.getMinutes(), h.getMinutes() === M && (S = m.getSeconds()))))), {
        [`${u}Year`]: w,
        [`${u}Month`]: I,
        [`${u}Date`]: B,
        [`${u}Hour`]: L,
        [`${u}Minute`]: M,
        [`${u}Seconds`]: S
      };
    }, s = N(() => {
      const { maxYear: u, maxDate: h, maxMonth: m, maxHour: w, maxMinute: I, maxSeconds: B } = a("max", n.currentDate), { minYear: L, minDate: M, minMonth: S, minHour: C, minMinute: D, minSeconds: V } = a("min", n.currentDate);
      return $([
        {
          type: "year",
          range: [L, u]
        },
        {
          type: "month",
          range: [S, m]
        },
        {
          type: "day",
          range: [M, h]
        },
        {
          type: "hour",
          range: [C, w]
        },
        {
          type: "minute",
          range: [D, I]
        },
        {
          type: "seconds",
          range: [V, B]
        }
      ]);
    }), r = N(() => s.value.map((h, m) => f(h.range[0], h.range[1], y(h.type), h.type, m))), i = ({
      columnIndex: u,
      selectedValue: h,
      selectedOptions: m
    }) => {
      let w = [];
      h.forEach((S) => {
        w.push(S);
      }), e.type == "month-day" && w.length < 3 && w.unshift(new Date(n.currentDate || e.minDate || e.maxDate).getFullYear()), e.type == "year-month" && w.length < 3 && w.push(new Date(n.currentDate || e.minDate || e.maxDate).getDate());
      const I = Number(w[0]), B = Number(w[1]) - 1, L = Math.min(Number(w[2]), o(Number(w[0]), Number(w[1])));
      let M = null;
      if (e.type === "date" || e.type === "month-day" || e.type === "year-month")
        M = new Date(I, B, L);
      else if (e.type === "datetime")
        M = new Date(I, B, L, Number(w[3]), Number(w[4]));
      else if (e.type === "datehour")
        M = new Date(I, B, L, Number(w[3]));
      else if (e.type === "hour-minute" || e.type === "time") {
        M = new Date(n.currentDate);
        const S = M.getFullYear(), C = M.getMonth(), D = M.getDate();
        M = new Date(S, C, D, Number(w[0]), Number(w[1]), Number(w[2] || 0));
      }
      n.currentDate = l(M), t("change", { columnIndex: u, selectedValue: h, selectedOptions: m });
    }, p = (u, h) => {
      const { formatter: m, isShowChinese: w } = e;
      let I = null;
      if (m)
        I = m(u, { text: Qe(h, 2), value: Qe(h, 2) });
      else {
        const B = Qe(h, 2), L = w ? ep[u] : "";
        I = { text: B + L, value: B };
      }
      return I;
    }, f = (u, h, m, w, I) => {
      const B = [];
      let L = 0;
      for (; u <= h; )
        B.push(p(w, u)), w === "minute" ? u += e.minuteStep : u++, u <= Number(m) && L++;
      return n.selectedValue[I] = B[L].value, e.filter ? e.filter(w, B) : B;
    }, y = (u) => u === "year" ? n.currentDate.getFullYear() : u === "month" ? n.currentDate.getMonth() + 1 : u === "day" ? n.currentDate.getDate() : u === "hour" ? n.currentDate.getHours() : u === "minute" ? n.currentDate.getMinutes() : u === "seconds" ? n.currentDate.getSeconds() : 0, v = (u) => {
      t("cancel", u);
    }, b = (u) => {
      t("confirm", u);
    }, $ = (u) => {
      switch (e.type) {
        case "date":
          u = u.slice(0, 3);
          break;
        case "datetime":
          u = u.slice(0, 5);
          break;
        case "time":
          u = u.slice(3, 6);
          break;
        case "year-month":
          u = u.slice(0, 2);
          break;
        case "month-day":
          u = u.slice(1, 3);
          break;
        case "datehour":
          u = u.slice(0, 4);
          break;
        case "hour-minute":
          u = u.slice(3, 5);
          break;
      }
      return u;
    }, k = (u) => {
      const h = [
        u.getFullYear(),
        u.getMonth() + 1,
        u.getDate(),
        u.getHours(),
        u.getMinutes(),
        u.getSeconds()
      ];
      return $(h.map((m) => String(m)));
    };
    return jn(() => {
      n.currentDate = l(e.modelValue);
    }), x(
      () => e.modelValue,
      (u) => {
        const h = l(u);
        JSON.stringify(h) === JSON.stringify(n.currentDate) || (n.currentDate = h, n.selectedValue = k(h));
      }
    ), x(
      () => n.currentDate,
      (u) => {
        JSON.stringify(u) === JSON.stringify(e.modelValue) || t("update:modelValue", u);
      }
    ), x(
      () => e.title,
      (u) => {
        n.title = u;
      }
    ), ce(Z({}, ge(n)), {
      changeHandler: i,
      closeHandler: v,
      confirm: b,
      columns: r
    });
  }
});
function np(e, t, n, l, o, a) {
  const s = U("nut-picker");
  return c(), J(s, {
    modelValue: e.selectedValue,
    "onUpdate:modelValue": t[0] || (t[0] = (r) => e.selectedValue = r),
    "ok-text": e.okText,
    "cancel-text": e.cancelText,
    columns: e.columns,
    title: e.title,
    "three-dimensional": e.threeDimensional,
    "swipe-duration": e.swipeDuration,
    "show-toolbar": e.showToolbar,
    "visible-option-num": e.visibleOptionNum,
    "option-height": e.optionHeight,
    onCancel: e.closeHandler,
    onChange: e.changeHandler,
    onConfirm: e.confirm
  }, {
    top: ne(() => [
      _(e.$slots, "top")
    ]),
    default: ne(() => [
      _(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["modelValue", "ok-text", "cancel-text", "columns", "title", "three-dimensional", "swipe-duration", "show-toolbar", "visible-option-num", "option-height", "onCancel", "onChange", "onConfirm"]);
}
const op = /* @__PURE__ */ ee(tp, [["render", np]]), lp = ["min", "max", "disabled", "readonly", "value"], Ot = /* @__PURE__ */ Ce({
  name: "NutInputNumber",
  __name: "input-number",
  props: {
    modelValue: { default: 0 },
    inputWidth: { default: "" },
    buttonSize: { default: "" },
    min: { default: 1 },
    max: { default: 9999 },
    step: { default: 1 },
    decimalPlaces: { default: 0 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change", "blur", "focus", "reduce", "add", "overlimit"],
  setup(e, { emit: t }) {
    const n = e, l = t, o = Ze(xe(n, "disabled")), a = N(() => {
      const u = "nut-input-number";
      return {
        [u]: !0,
        [`${u}--disabled`]: o.value
      };
    }), s = (u) => Number(u).toFixed(Number(n.decimalPlaces)), r = (u) => {
      const h = u.target;
      l("update:modelValue", h.value, u), l("change", h.value, u);
    }, i = (u, h) => {
      let m = s(u);
      l("update:modelValue", m, h), Number(n.modelValue) !== Number(m) && l("change", m, h);
    }, p = (u = Number(n.modelValue)) => u < Number(n.max) && !o.value, f = (u = Number(n.modelValue)) => u > Number(n.min) && !o.value, y = (u) => {
      if (o.value)
        return;
      l("reduce", u);
      let h = Number(n.modelValue) - Number(n.step);
      f() && h >= Number(n.min) ? i(h, u) : (i(Number(n.min), u), l("overlimit", u, "reduce"));
    }, v = (u) => {
      if (o.value)
        return;
      l("add", u);
      let h = Number(n.modelValue) + Number(n.step);
      p() && h <= Number(n.max) ? i(h, u) : (i(Number(n.max), u), l("overlimit", u, "add"));
    }, b = (u) => {
      o.value || n.readonly || l("focus", u);
    }, $ = (u) => {
      if (o.value || n.readonly)
        return;
      const h = u.target;
      let m = Number(h.value);
      m < Number(n.min) ? m = Number(n.min) : m > Number(n.max) && (m = Number(n.max)), i(m, u), l("blur", u);
    }, k = (u) => {
      let h = Number(u);
      return h < Number(n.min) ? h = Number(n.min) : h > Number(n.max) && (h = Number(n.max)), h;
    };
    return x(
      () => [n.max, n.min],
      () => {
        Number(n.min) > Number(n.max) && console.warn("[NutUI] <InputNumber>", "props.max < props.min");
        const u = k(n.modelValue);
        u !== Number(n.modelValue) && i(u, {});
      }
    ), (u, h) => (c(), d("view", {
      class: P(a.value)
    }, [
      g("view", {
        class: P(["nut-input-number__icon nut-input-number__left", { "nut-input-number__icon--disabled": !f() }]),
        onClick: y
      }, [
        _(u.$slots, "left-icon", {}, () => [
          oe(ye(Oa), {
            width: ye(Be)(u.buttonSize),
            height: ye(Be)(u.buttonSize)
          }, null, 8, ["width", "height"])
        ])
      ], 2),
      g("input", {
        type: "number",
        min: u.min,
        max: u.max,
        style: A({ width: ye(Be)(u.inputWidth), height: ye(Be)(u.buttonSize) }),
        disabled: ye(o),
        readonly: u.readonly,
        value: u.modelValue,
        onInput: r,
        onBlur: $,
        onFocus: b
      }, null, 44, lp),
      g("view", {
        class: P(["nut-input-number__icon nut-input-number__right", { "nut-input-number__icon--disabled": !p() }]),
        onClick: v
      }, [
        _(u.$slots, "right-icon", {}, () => [
          oe(ye(lr), {
            width: ye(Be)(u.buttonSize),
            height: ye(Be)(u.buttonSize)
          }, null, 8, ["width", "height"])
        ])
      ], 2)
    ], 2));
  }
});
Te(Ot);
function zn(e, t, n) {
  const l = e.indexOf(t);
  return l === -1 ? e : t === "-" && l !== 0 ? e.slice(0, l) : e.slice(0, l + 1) + e.slice(l).replace(n, "");
}
function sp(e, t = !0, n = !0) {
  t ? e = zn(e, ".", /\./g) : e = e.split(".")[0], n ? e = zn(e, "-", /-/g) : e = e.replace(/-/, "");
  const l = t ? /[^-0-9.]/g : /[^-0-9]/g;
  return e.replace(l, "");
}
function ap(e) {
  return e === "number" ? {
    type: "text",
    inputmode: "decimal"
  } : e === "digit" ? {
    type: "tel",
    inputmode: "numeric"
  } : { type: e };
}
const { componentName: rp, create: ip } = q("input"), up = ip({
  props: {
    type: {
      type: String,
      default: "text"
    },
    modelValue: {
      type: [String, Number],
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    inputAlign: {
      type: String,
      default: "left"
    },
    required: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    maxLength: {
      type: [String, Number],
      default: ""
    },
    clearable: {
      type: Boolean,
      default: !1
    },
    clearSize: {
      type: [String, Number],
      default: "14"
    },
    border: {
      type: Boolean,
      default: !0
    },
    formatTrigger: {
      type: String,
      default: "onChange"
    },
    formatter: {
      type: Function,
      default: null
    },
    showWordLimit: {
      type: Boolean,
      default: !1
    },
    autofocus: {
      type: Boolean,
      default: !1
    },
    confirmType: {
      type: String,
      default: "done"
    },
    error: {
      type: Boolean,
      default: !1
    },
    showClearIcon: {
      type: Boolean,
      default: !1
    },
    class: {
      type: String,
      default: ""
    }
  },
  components: { MaskClose: Pa },
  emits: ["update:modelValue", "blur", "focus", "clear", "keypress", "click", "clickInput", "confirm"],
  expose: ["focus", "blur", "select"],
  setup(e, { emit: t }) {
    const n = Ze(xe(e, "disabled")), l = z(!1), o = z(), a = () => {
      var S;
      return String((S = e.modelValue) != null ? S : "");
    }, s = (S) => we("input", Z({}, ap(S))), r = fe({
      focused: !1,
      validateFailed: !1,
      // 校验失败
      validateMessage: ""
      // 校验信息
    }), i = N(() => {
      const S = rp;
      return {
        [S]: !0,
        [`${S}--disabled`]: n.value,
        [`${S}--required`]: e.required,
        [`${S}--error`]: e.error,
        [`${S}--border`]: e.border,
        [e.class]: !!e.class
      };
    }), p = N(() => ({
      textAlign: e.inputAlign
    })), f = (S) => {
      if (!S.target.composing) {
        let D = S.target.value;
        e.maxLength && D.length > Number(e.maxLength) && (D = D.slice(0, Number(e.maxLength))), y(D);
      }
    }, y = (S, C = "onChange") => {
      var D;
      if (["number", "digit"].includes(e.type)) {
        const V = e.type === "number";
        S = sp(S, V, V);
      }
      e.formatter && C === e.formatTrigger && (S = e.formatter(S)), ((D = o == null ? void 0 : o.value) == null ? void 0 : D.value) !== S && (o.value.value = S), S !== e.modelValue && t("update:modelValue", S);
    }, v = (S) => {
      n.value || e.readonly || (l.value = !0, t("focus", S));
    }, b = (S) => {
      if (n.value || e.readonly)
        return;
      setTimeout(() => {
        l.value = !1;
      }, 200);
      let D = S.target.value;
      e.maxLength && D.length > Number(e.maxLength) && (D = D.slice(0, Number(e.maxLength))), y(a(), "onBlur"), t("blur", S);
    }, $ = (S) => {
      S.stopPropagation(), !n.value && (t("update:modelValue", "", S), t("clear", "", S));
    }, k = () => {
      r.validateFailed && (r.validateFailed = !1, r.validateMessage = "");
    }, u = (S) => {
      n.value || t("clickInput", S);
    }, h = (S) => {
      t("click", S);
    }, m = ({ target: S }) => {
      S.composing = !0;
    }, w = ({ target: S }) => {
      S.composing && (S.composing = !1, S.dispatchEvent(new Event("input")));
    };
    return x(
      () => e.modelValue,
      () => {
        y(a()), k();
      }
    ), be(() => {
      y(a(), e.formatTrigger);
    }), {
      renderInput: s,
      inputRef: o,
      active: l,
      classes: i,
      styles: p,
      disabled: n,
      onInput: f,
      onFocus: v,
      onBlur: b,
      clear: $,
      startComposing: m,
      endComposing: w,
      onClick: h,
      onClickInput: u,
      focus: () => {
        var S;
        (S = o.value) == null || S.focus();
      },
      blur: () => {
        var S;
        (S = o.value) == null || S.blur();
      },
      select: () => {
        var S;
        (S = o.value) == null || S.select();
      },
      onKeyup: (S) => {
        S.key === "Enter" && t("confirm", S);
      },
      getModelValue: a
    };
  }
}), cp = { class: "nut-input-value" }, dp = { class: "nut-input-inner" }, fp = {
  key: 0,
  class: "nut-input-left-box"
}, pp = { class: "nut-input-box" }, mp = {
  key: 0,
  class: "nut-input-word-limit"
}, hp = { class: "nut-input-word-num" }, gp = { class: "nut-input-right-box" };
function vp(e, t, n, l, o, a) {
  const s = U("MaskClose");
  return c(), d("view", {
    class: P(e.classes),
    onClick: t[1] || (t[1] = (...r) => e.onClick && e.onClick(...r))
  }, [
    g("view", cp, [
      g("view", dp, [
        e.$slots.left ? (c(), d("view", fp, [
          _(e.$slots, "left")
        ])) : T("", !0),
        g("view", pp, [
          (c(), J(Oe(e.renderInput(e.type)), {
            ref: "inputRef",
            class: "input-text",
            style: A(e.styles),
            maxlength: e.maxLength,
            placeholder: e.placeholder,
            disabled: e.disabled,
            readonly: e.readonly,
            value: e.modelValue,
            "format-trigger": e.formatTrigger,
            autofocus: e.autofocus,
            enterkeyhint: e.confirmType,
            onInput: e.onInput,
            onFocus: e.onFocus,
            onBlur: e.onBlur,
            onClick: e.onClickInput,
            onChange: e.endComposing,
            onCompositionend: e.endComposing,
            onCompositionstart: e.startComposing,
            onKeyup: e.onKeyup
          }, null, 40, ["style", "maxlength", "placeholder", "disabled", "readonly", "value", "format-trigger", "autofocus", "enterkeyhint", "onInput", "onFocus", "onBlur", "onClick", "onChange", "onCompositionend", "onCompositionstart", "onKeyup"])),
          e.showWordLimit && e.maxLength ? (c(), d("view", mp, [
            g("span", hp, E(e.getModelValue() ? e.getModelValue().length : 0), 1),
            he("/" + E(e.maxLength), 1)
          ])) : T("", !0)
        ]),
        e.clearable && !e.readonly ? Ie((c(), d("view", {
          key: 1,
          class: "nut-input-clear-box",
          onClick: t[0] || (t[0] = (...r) => e.clear && e.clear(...r))
        }, [
          _(e.$slots, "clear", {}, () => [
            oe(s, wt({ class: "nut-input-clear" }, e.$attrs, {
              size: e.clearSize,
              width: e.clearSize,
              height: e.clearSize
            }), null, 16, ["size", "width", "height"])
          ])
        ], 512)), [
          [Me, (e.active || e.showClearIcon) && e.getModelValue().length > 0]
        ]) : T("", !0),
        g("view", gp, [
          _(e.$slots, "right")
        ])
      ])
    ])
  ], 2);
}
const Lo = /* @__PURE__ */ ee(up, [["render", vp]]), Po = Symbol("nut-radio"), { componentName: Je, create: yp } = q("radio"), Eo = yp({
  components: {
    CheckNormal: qt,
    CheckChecked: Nn
  },
  props: {
    disabled: {
      type: Boolean,
      default: !1
    },
    shape: {
      type: String,
      default: "round"
    },
    label: {
      type: [String, Number, Boolean],
      default: ""
    },
    iconSize: {
      type: [String, Number],
      default: ""
    },
    size: {
      type: String,
      default: "normal"
    }
  },
  setup(e, { slots: t }) {
    const n = Ze(xe(e, "disabled")), { size: l } = ge(e);
    let o = Ee(Po, null);
    const a = N(() => o.label.value === e.label), s = N(() => n.value ? "nut-radio__icon--disable" : a.value ? "nut-radio__icon" : "nut-radio__icon--unchecked"), r = () => {
      const { iconSize: v } = e, b = {
        CheckNormal: t.icon ? t.icon : qt,
        Checked: t.checkedIcon ? t.checkedIcon : Nn
      }, $ = a.value ? b.Checked : b.CheckNormal, k = Be(v);
      return we($, {
        width: k,
        height: k,
        class: s.value
      });
    }, i = () => {
      var v;
      return we(
        "view",
        {
          class: `${Je}__label ${n.value ? `${Je}__label--disabled` : ""}`
        },
        (v = t.default) == null ? void 0 : v.call(t)
      );
    }, p = () => {
      var v;
      return we(
        "view",
        {
          class: `${Je}__button ${a.value && `${Je}__button--active`} ${Je}__button--${l.value} ${e.disabled ? `${Je}__button--disabled` : ""}`
        },
        (v = t.default) == null ? void 0 : v.call(t)
      );
    }, f = () => {
      a.value || n.value || o.updateValue(e.label);
    }, y = N(() => o.position.value === "left");
    return () => we(
      "view",
      {
        class: `${Je} ${Je}--${e.shape} ${y.value ? `${Je}--reverse` : ""}`,
        onClick: f
      },
      [e.shape === "button" ? p() : [r(), i()]]
    );
  }
}), { componentName: Vn, create: bp } = q("radio-group"), Ao = bp({
  props: {
    modelValue: {
      type: [Number, String, Boolean],
      default: ""
    },
    direction: {
      type: String,
      default: "vertical"
    },
    textPosition: {
      type: String,
      default: "right"
    }
  },
  emits: ["change", "update:modelValue"],
  setup(e, { emit: t, slots: n }) {
    const l = (o) => t("update:modelValue", o);
    return ze(Po, {
      label: Sn(N(() => e.modelValue)),
      position: Sn(N(() => e.textPosition)),
      updateValue: l
    }), x(
      () => e.modelValue,
      (o) => t("change", o)
    ), () => {
      var o;
      return we(
        "view",
        {
          class: `${Vn} ${Vn}--${e.direction}`
        },
        (o = n.default) == null ? void 0 : o.call(n)
      );
    };
  }
}), $p = ["id"], wp = { class: "nut-rate-item__icon--full" }, kp = {
  key: 0,
  class: "nut-rate-item__icon--half"
}, Cp = {
  key: 1,
  class: "nut-rate-item__icon--half"
}, un = /* @__PURE__ */ Ce({
  name: "NutRate",
  __name: "rate",
  props: {
    count: { default: 5 },
    modelValue: { default: 0 },
    customIcon: { default: () => Or },
    size: {},
    activeColor: { default: "" },
    voidColor: { default: "" },
    readonly: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    allowHalf: { type: Boolean, default: !1 },
    touchable: { type: Boolean, default: !0 },
    spacing: {}
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const n = e, l = t, o = Math.random().toString(36).slice(-8), a = Ze(xe(n, "disabled")), s = z([]), r = (b) => {
      l("update:modelValue", b), l("change", b);
    }, i = (b, $) => {
      if (a.value || n.readonly)
        return;
      let k = 0;
      $ === 1 && n.modelValue === $ ? k = 0 : (k = $, n.allowHalf && b == 2 && (k -= 0.5)), r(k);
    }, p = (b, $, k) => {
      let u = 0;
      for (let h = $.value.length - 1; h >= 0; h--) {
        const m = $.value[h];
        if (b > m.offsetLeft) {
          k ? u = h + (b > m.offsetLeft + m.clientWidth / 2 ? 1 : 0.5) : u = h + 1;
          break;
        }
      }
      return u;
    }, f = et(), y = (b) => {
      !n.touchable || n.readonly || f.start(b);
    }, v = (b) => {
      n.touchable && (f.move(b), f.isHorizontal() && s.value && (b.preventDefault(), r(p(f.moveX.value, s, n.allowHalf))));
    };
    return (b, $) => (c(), d("view", {
      class: "nut-rate",
      onTouchstart: y,
      onTouchmove: v
    }, [
      (c(!0), d(Q, null, ie(Number(b.count), (k) => (c(), d("view", {
        id: "rateRefs-" + ye(o) + k,
        key: k,
        ref_for: !0,
        ref_key: "rateRefs",
        ref: s,
        class: "nut-rate-item",
        style: A(k < Number(b.count) ? { marginRight: ye(Be)(b.spacing) } : {})
      }, [
        g("view", wp, [
          (c(), J(Oe(
            ye(lt)(b.customIcon, {
              width: b.size,
              height: b.size,
              size: b.size,
              color: k <= Number(b.modelValue) ? b.activeColor : b.voidColor
            })
          ), {
            class: P(["nut-rate-item__icon", { "nut-rate-item__icon--disabled": ye(a) || k > Number(b.modelValue) }]),
            onClick: (u) => i(1, k)
          }, null, 8, ["class", "onClick"]))
        ]),
        b.allowHalf && Number(b.modelValue) + 1 > k ? (c(), d("view", kp, [
          (c(), J(Oe(
            ye(lt)(b.customIcon, {
              width: b.size,
              height: b.size,
              size: b.size,
              color: k <= Number(b.modelValue) + 1 ? b.activeColor : b.voidColor
            })
          ), {
            class: "nut-rate-item__icon",
            onClick: (u) => i(2, k)
          }, null, 8, ["onClick"]))
        ])) : b.allowHalf && Number(b.modelValue) + 1 < k ? (c(), d("view", Cp, [
          (c(), J(Oe(ye(lt)(b.customIcon, { width: b.size, height: b.size, size: b.size, color: b.voidColor })), {
            class: "nut-rate-item__icon nut-rate-item__icon--disabled",
            onClick: (u) => i(2, k)
          }, null, 8, ["onClick"]))
        ])) : T("", !0)
      ], 12, $p))), 128))
    ], 32));
  }
});
Te(un);
const { create: Sp } = q("short-password"), Tp = "NutShortPassword", Np = Sp({
  components: {
    NutPopup: Ae,
    Tips: no
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    desc: {
      type: String,
      default: ""
    },
    tips: {
      type: String,
      default: ""
    },
    visible: {
      type: Boolean,
      default: !1
    },
    modelValue: {
      type: String,
      default: ""
    },
    errorMsg: {
      type: String,
      default: ""
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: !0
    },
    length: {
      type: [String, Number],
      //4～6
      default: 6
    },
    lockScroll: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["update:modelValue", "update:visible", "complete", "tips", "close", "focus"],
  setup(e, { emit: t }) {
    const n = Se(Tp), l = z(e.modelValue), o = N(() => i(Number(e.length))), a = z(e.visible), s = (f) => {
      f.stopPropagation(), t("focus");
    };
    x(
      () => e.visible,
      (f) => {
        a.value = f;
      }
    ), x(
      () => e.modelValue,
      (f) => {
        l.value = f, String(f).length === o.value && t("complete", f);
      }
    );
    const r = () => {
      t("update:visible", !1), t("close");
    }, i = (f) => Math.min(Math.max(4, f), 6);
    return {
      comLen: o,
      realInput: l,
      onTouchStart: s,
      range: i,
      close: r,
      onTips: () => {
        t("tips");
      },
      show: a,
      translate: n
    };
  }
}), Dp = { class: "nut-short-password-title" }, _p = { class: "nut-short-password-subtitle" }, Ip = { class: "nut-short-password-wrapper" }, Bp = {
  key: 0,
  class: "nut-short-password__item-icon"
}, Mp = { class: "nut-short-password__message" }, Lp = { class: "nut-short-password--error" }, Pp = {
  key: 0,
  class: "nut-short-password--forget"
};
function Ep(e, t, n, l, o, a) {
  const s = U("tips"), r = U("nut-popup");
  return c(), d("view", null, [
    oe(r, {
      visible: e.show,
      "onUpdate:visible": t[2] || (t[2] = (i) => e.show = i),
      style: {
        padding: "30px 24px 20px 24px",
        borderRadius: "12px",
        textAlign: "center",
        top: "45%"
      },
      closeable: !0,
      "close-on-click-overlay": e.closeOnClickOverlay,
      "teleport-disable": !1,
      "lock-scroll": e.lockScroll,
      onClickCloseIcon: e.close,
      onClickOverlay: e.close
    }, {
      default: ne(() => [
        g("view", Dp, E(e.title || e.translate("title")), 1),
        g("view", _p, E(e.desc || e.translate("desc")), 1),
        g("div", Ip, [
          g("view", {
            class: "nut-short-password__list",
            onTouchstart: t[0] || (t[0] = (...i) => e.onTouchStart && e.onTouchStart(...i))
          }, [
            (c(!0), d(Q, null, ie(new Array(e.comLen), (i, p) => (c(), d("view", {
              key: p,
              class: "nut-short-password__item"
            }, [
              String(e.realInput).length > p ? (c(), d("view", Bp)) : T("", !0)
            ]))), 128))
          ], 32)
        ]),
        g("view", Mp, [
          g("view", Lp, E(e.errorMsg), 1),
          e.tips || e.translate("tips") ? (c(), d("view", Pp, [
            oe(s, {
              class: "icon",
              width: "11px",
              height: "11px"
            }),
            g("view", {
              onClick: t[1] || (t[1] = (...i) => e.onTips && e.onTips(...i))
            }, E(e.tips || e.translate("tips")), 1)
          ])) : T("", !0)
        ])
      ]),
      _: 1
    }, 8, ["visible", "close-on-click-overlay", "lock-scroll", "onClickCloseIcon", "onClickOverlay"])
  ]);
}
const Ap = /* @__PURE__ */ ee(Np, [["render", Ep]]), { create: zp } = q("textarea"), Vp = "NutTextarea", Op = zp({
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    textAlign: {
      type: String,
      default: ""
    },
    limitShow: {
      type: Boolean,
      default: !1
    },
    maxLength: {
      type: [String, Number],
      default: ""
    },
    rows: {
      type: [String, Number],
      default: "2"
    },
    placeholder: {
      type: String,
      default: ""
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    autosize: {
      type: [Boolean, Object],
      default: !1
    },
    autofocus: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "change", "blur", "focus"],
  setup(e, { emit: t }) {
    const n = Ze(xe(e, "disabled")), l = Se(Vp), o = z(), a = N(() => {
      const $ = "nut-textarea";
      return {
        [$]: !0,
        [`${$}--disabled`]: n.value
      };
    });
    be(() => {
      e.modelValue && i(String(e.modelValue)), e.autosize && Ne(r);
    });
    const s = N(() => ({
      textAlign: e.textAlign
      // resize: props.autosize ? 'vertical' : 'none'
    })), r = () => {
      let $ = o.value;
      $.style.height = "auto";
      let k = $.scrollHeight;
      if (typeof e.autosize == "object") {
        const { maxHeight: u, minHeight: h } = e.autosize;
        u !== void 0 && (k = Math.min(k, u)), h !== void 0 && (k = Math.max(k, h));
      }
      k && ($.style.height = k + "px");
    };
    x(
      () => e.modelValue,
      () => {
        e.autosize && Ne(r);
      }
    );
    const i = ($, k) => {
      e.maxLength && $.length > Number(e.maxLength) && ($ = $.substring(0, Number(e.maxLength))), t("update:modelValue", $, k), t("change", $, k);
    };
    return {
      textareaRef: o,
      classes: a,
      styles: s,
      disabled: n,
      change: ($) => {
        if (!$.target.composing) {
          const k = $.target;
          let u = k.value;
          e.maxLength && u.length > Number(e.maxLength) && (u = u.slice(0, Number(e.maxLength))), i(k.value, $);
        }
      },
      focus: ($) => {
        n.value || e.readonly || t("focus", $);
      },
      blur: ($) => {
        if (n.value || e.readonly)
          return;
        let u = $.target.value;
        i(u, $), t("blur", { value: u, event: $ });
      },
      translate: l,
      startComposing: ({ target: $ }) => {
        $.composing = !0;
      },
      endComposing: ({ target: $ }) => {
        $.composing && ($.composing = !1, $.dispatchEvent(new Event("input")));
      }
    };
  }
}), Hp = ["rows", "disabled", "readonly", "value", "maxlength", "placeholder", "autofocus"], Rp = {
  key: 0,
  class: "nut-textarea__limit"
};
function Fp(e, t, n, l, o, a) {
  return c(), d("view", {
    class: P(e.classes)
  }, [
    g("textarea", {
      ref: "textareaRef",
      class: "nut-textarea__textarea",
      style: A(e.styles),
      rows: e.rows,
      disabled: e.disabled,
      readonly: e.readonly,
      value: e.modelValue,
      maxlength: e.maxLength,
      placeholder: e.placeholder || e.translate("placeholder"),
      autofocus: e.autofocus,
      onInput: t[0] || (t[0] = (...s) => e.change && e.change(...s)),
      onBlur: t[1] || (t[1] = (...s) => e.blur && e.blur(...s)),
      onFocus: t[2] || (t[2] = (...s) => e.focus && e.focus(...s)),
      onChange: t[3] || (t[3] = (...s) => e.endComposing && e.endComposing(...s)),
      onCompositionend: t[4] || (t[4] = (...s) => e.endComposing && e.endComposing(...s)),
      onCompositionstart: t[5] || (t[5] = (...s) => e.startComposing && e.startComposing(...s))
    }, null, 44, Hp),
    e.limitShow ? (c(), d("view", Rp, E(e.modelValue ? e.modelValue.length : 0) + "/" + E(e.maxLength), 1)) : T("", !0)
  ], 2);
}
const Wp = /* @__PURE__ */ ee(Op, [["render", Fp]]);
class Yp {
  constructor() {
    O(this, "url", "");
    O(this, "name", "file");
    O(this, "fileType", "image");
    O(this, "formData");
    O(this, "sourceFile");
    O(this, "method", "post");
    O(this, "xhrState", 200);
    O(this, "timeout", 30 * 1e3);
    O(this, "headers", {});
    O(this, "withCredentials", !1);
    O(this, "onStart");
    O(this, "taroFilePath");
    O(this, "onProgress");
    O(this, "onSuccess");
    O(this, "onFailure");
    O(this, "beforeXhrUpload");
  }
}
let jp = class {
  constructor(t) {
    O(this, "options");
    this.options = t;
  }
  upload() {
    var l;
    const t = this.options, n = new XMLHttpRequest();
    if (n.timeout = t.timeout, n.upload) {
      n.upload.addEventListener(
        "progress",
        (o) => {
          var a;
          (a = t.onProgress) == null || a.call(t, o, t);
        },
        !1
      ), n.onreadystatechange = () => {
        var o, a;
        n.readyState === 4 && (n.status == t.xhrState ? (o = t.onSuccess) == null || o.call(t, n.responseText, t) : (a = t.onFailure) == null || a.call(t, n.responseText, t));
      }, n.withCredentials = t.withCredentials, n.open(t.method, t.url, !0);
      for (const [o, a] of Object.entries(t.headers))
        n.setRequestHeader(o, a);
      (l = t.onStart) == null || l.call(t, t), t.beforeXhrUpload ? t.beforeXhrUpload(n, t) : n.send(t.formData);
    } else
      console.warn("浏览器不支持 XMLHttpRequest");
  }
};
class Kp {
  constructor() {
    O(this, "status", "ready");
    O(this, "message", "");
    O(this, "uid", (/* @__PURE__ */ new Date()).getTime().toString());
    O(this, "name");
    O(this, "url");
    O(this, "type");
    O(this, "path");
    O(this, "percentage", 0);
    O(this, "formData", {});
  }
}
const Up = { class: "nut-progress" }, cn = /* @__PURE__ */ Ce({
  name: "NutProgress",
  __name: "progress",
  props: {
    percentage: { default: 0 },
    size: { default: "base" },
    status: { default: "text" },
    strokeWidth: {},
    textInside: { type: Boolean, default: !1 },
    showText: { type: Boolean, default: !0 },
    strokeColor: {},
    textColor: {},
    textBackground: {},
    isShowPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, n = N(() => {
      if (t.strokeWidth)
        return t.strokeWidth + "px";
    }), l = N(() => Number(t.percentage) >= 100 ? 100 : Number(t.percentage)), o = N(() => ({
      width: l.value + "%",
      background: t.strokeColor || ""
    })), a = N(() => ({
      color: t.textColor || ""
    }));
    return (s, r) => (c(), d("div", Up, [
      g("div", {
        class: P(["nut-progress-outer", [s.showText && !s.textInside ? "nut-progress-outer-part" : "", s.size ? "nut-progress-" + s.size : ""]]),
        style: A({ height: n.value })
      }, [
        g("div", {
          class: P(["nut-progress-inner", s.status === "active" ? "nut-active" : ""]),
          style: A(o.value)
        }, null, 6),
        s.showText && s.textInside && !s.$slots.default ? (c(), d("div", {
          key: 0,
          class: "nut-progress-text nut-progress-insidetext",
          style: A({
            lineHeight: n.value,
            left: `${l.value}%`,
            transform: `translate(-${+l.value}%,-50%)`,
            background: s.textBackground || s.strokeColor
          })
        }, [
          g("span", {
            style: A(a.value)
          }, E(l.value) + E(s.isShowPercentage ? "%" : ""), 5)
        ], 4)) : T("", !0),
        s.showText && s.textInside && s.$slots.default ? (c(), d("div", {
          key: 1,
          class: "nut-progress-slot",
          style: A({
            position: "absolute",
            top: "50%",
            left: `${l.value}%`,
            transform: `translate(-${+l.value}%,-50%)`
          })
        }, [
          _(s.$slots, "default")
        ], 4)) : T("", !0)
      ], 6),
      s.showText && !s.textInside ? (c(), d("div", {
        key: 0,
        class: "nut-progress-text",
        style: A({ lineHeight: n.value })
      }, [
        s.status === "text" || s.status === "active" ? (c(), d("span", {
          key: 0,
          style: A(a.value)
        }, E(l.value) + E(s.isShowPercentage ? "%" : ""), 5)) : s.status === "icon" ? _(s.$slots, "icon-name", { key: 1 }, () => [
          oe(ye(Qn), {
            width: "15px",
            height: "15px",
            color: "#439422"
          })
        ]) : T("", !0)
      ], 4)) : T("", !0)
    ]));
  }
});
Te(cn);
const { create: Xp } = q("uploader"), qp = "NutUploader", Zp = Xp({
  components: {
    NutProgress: cn,
    Photograph: xa,
    Failure: to,
    Loading: rt,
    Del: xn,
    Link: ua
  },
  props: {
    name: { type: String, default: "file" },
    url: { type: String, default: "" },
    // defaultFileList: { type: Array, default: () => new Array<FileItem>() },
    timeout: { type: [Number, String], default: 1e3 * 30 },
    fileList: { type: Array, default: () => [] },
    isPreview: { type: Boolean, default: !0 },
    // picture、list
    listType: { type: String, default: "picture" },
    isDeletable: { type: Boolean, default: !0 },
    method: { type: String, default: "post" },
    capture: { type: Boolean, default: !1 },
    maximize: { type: [Number, String], default: Number.MAX_VALUE },
    maximum: { type: [Number, String], default: 1 },
    clearInput: { type: Boolean, default: !0 },
    accept: { type: String, default: "*" },
    headers: { type: Object, default: {} },
    data: { type: Object, default: {} },
    xhrState: { type: [Number, String], default: 200 },
    withCredentials: { type: Boolean, default: !1 },
    multiple: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    autoUpload: { type: Boolean, default: !0 },
    beforeUpload: {
      type: Function,
      default: null
    },
    beforeXhrUpload: {
      type: Function,
      default: null
    },
    beforeDelete: {
      type: Function,
      default: () => !0
    },
    onChange: { type: Function }
  },
  emits: [
    "start",
    "progress",
    "oversize",
    "success",
    "failure",
    "change",
    "delete",
    "update:fileList",
    "fileItemClick"
  ],
  setup(e, { emit: t }) {
    const n = Ze(xe(e, "disabled")), l = Se(qp), o = z(e.fileList), a = z([]);
    x(
      () => e.fileList,
      () => {
        o.value = e.fileList;
      }
    );
    const s = () => {
      let m = {
        class: "nut-uploader__input",
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        name: e.name,
        disabled: n.value
      };
      return e.capture && (m.capture = "camera", m.accept || (m.accept = "image/*")), we("input", m);
    }, r = (m) => {
      m.value = "";
    }, i = (m) => {
      t("fileItemClick", { fileItem: m });
    }, p = (m, w) => {
      const I = new Yp();
      I.url = e.url, I.formData = m.formData, I.timeout = e.timeout * 1, I.method = e.method, I.xhrState = e.xhrState, I.headers = e.headers, I.withCredentials = e.withCredentials, I.beforeXhrUpload = e.beforeXhrUpload;
      try {
        I.sourceFile = m.formData.get(e.name);
      } catch (L) {
        console.warn("[NutUI] <Uploader> formData.get(name)", L);
      }
      I.onStart = (L) => {
        m.status = "ready", m.message = l("readyUpload"), f(w), t("start", L);
      }, I.onProgress = (L, M) => {
        m.status = "uploading", m.message = l("uploading"), m.percentage = (L.loaded / L.total * 100).toFixed(0), t("progress", { event: L, option: M, percentage: m.percentage });
      }, I.onSuccess = (L, M) => {
        m.status = "success", m.message = l("success"), t("success", {
          responseText: L,
          option: M,
          fileItem: m
        }), t("update:fileList", o.value);
      }, I.onFailure = (L, M) => {
        m.status = "error", m.message = l("error"), t("failure", {
          responseText: L,
          option: M,
          fileItem: m
        });
      };
      let B = new jp(I);
      e.autoUpload ? B.upload() : a.value.push(
        new Promise((L) => {
          L(B);
        })
      );
    }, f = (m = -1) => {
      m > -1 ? a.value.splice(m, 1) : (a.value = [], o.value = [], t("update:fileList", o.value));
    }, y = () => {
      Promise.all(a.value).then((m) => {
        m.forEach((w) => w.upload());
      });
    }, v = (m) => {
      m.forEach((w, I) => {
        const B = new FormData();
        for (const [M, S] of Object.entries(e.data))
          B.append(M, S);
        B.append(e.name, w);
        const L = fe(new Kp());
        if (L.name = w.name, L.status = "ready", L.type = w.type, L.formData = B, L.message = l("waitingUpload"), p(L, I), e.isPreview && w.type.includes("image")) {
          const M = new FileReader();
          M.onload = (S) => {
            L.url = S.target.result, o.value.push(L);
          }, M.readAsDataURL(w);
        } else
          o.value.push(L);
      });
    }, b = (m) => {
      const w = e.maximum * 1, I = e.maximize * 1, B = new Array();
      m = m.filter((M) => M.size > I ? (B.push(M), !1) : !0), B.length && t("oversize", B);
      let L = m.length + o.value.length;
      return L > w && m.splice(m.length - (L - w)), m;
    }, $ = (m, w) => {
      o.value.splice(w, 1), t("delete", {
        file: m,
        fileList: o.value,
        index: w
      });
    }, k = (m, w) => {
      n.value || (f(w), nn(e.beforeDelete, {
        args: [m, o.value],
        done: () => $(m, w)
      }));
    }, u = (m) => {
      if (e.disabled || n.value)
        return;
      const w = m.target;
      let { files: I } = w;
      e.beforeUpload ? e.beforeUpload(I).then((B) => h(B)) : h(I), t("change", {
        fileList: o.value,
        event: m
      }), e.clearInput && r(w);
    }, h = (m) => {
      const w = b(new Array().slice.call(m));
      v(w);
    };
    return {
      onChange: u,
      onDelete: k,
      fileList: o,
      fileItemClick: i,
      clearUploadQueue: f,
      submit: y,
      renderInput: s
    };
  }
}), Gp = { class: "nut-uploader" }, Jp = {
  key: 0,
  class: "nut-uploader__slot"
}, Qp = {
  key: 0,
  class: "nut-uploader__preview-img"
}, xp = {
  key: 0,
  class: "nut-uploader__preview__progress"
}, e1 = { class: "nut-uploader__preview__progress__msg" }, t1 = ["onClick"], n1 = ["src", "onClick"], o1 = {
  key: 3,
  class: "nut-uploader__preview-img__file"
}, l1 = ["onClick"], s1 = { class: "file__name_tips" }, a1 = { class: "tips" }, r1 = {
  key: 1,
  class: "nut-uploader__preview-list"
}, i1 = ["onClick"], u1 = { class: "file__name_tips" };
function c1(e, t, n, l, o, a) {
  const s = U("Failure"), r = U("Loading"), i = U("Link"), p = U("Del"), f = U("nut-progress"), y = U("Photograph");
  return c(), d("view", Gp, [
    e.$slots.default ? (c(), d("view", Jp, [
      _(e.$slots, "default"),
      Number(e.maximum) - e.fileList.length ? (c(), J(Oe(e.renderInput), {
        key: 0,
        onChange: e.onChange
      }, null, 40, ["onChange"])) : T("", !0)
    ])) : T("", !0),
    (c(!0), d(Q, null, ie(e.fileList, (v, b) => {
      var $;
      return c(), d("view", {
        key: v.uid,
        class: P(["nut-uploader__preview", [e.listType]])
      }, [
        e.listType == "picture" && !e.$slots.default ? (c(), d("view", Qp, [
          v.status != "success" ? (c(), d("view", xp, [
            v.status != "ready" ? (c(), d(Q, { key: 0 }, [
              v.status == "error" ? (c(), J(s, {
                key: 0,
                color: "#fff"
              })) : (c(), J(r, {
                key: 1,
                name: "loading",
                color: "#fff"
              }))
            ], 64)) : T("", !0),
            g("view", e1, E(v.message), 1)
          ])) : T("", !0),
          e.isDeletable ? (c(), d("view", {
            key: 1,
            class: "close",
            onClick: (k) => e.onDelete(v, b)
          }, [
            _(e.$slots, "delete-icon", {}, () => [
              oe(s)
            ])
          ], 8, t1)) : T("", !0),
          ($ = v == null ? void 0 : v.type) != null && $.includes("image") && v.url ? (c(), d("img", {
            key: 2,
            class: "nut-uploader__preview-img__c",
            src: v.url,
            onClick: (k) => e.fileItemClick(v)
          }, null, 8, n1)) : (c(), d("view", o1, [
            g("view", {
              class: "nut-uploader__preview-img__file__name",
              onClick: (k) => e.fileItemClick(v)
            }, [
              g("view", s1, E(v.name), 1)
            ], 8, l1)
          ])),
          g("view", a1, E(v.name), 1)
        ])) : e.listType == "list" ? (c(), d("view", r1, [
          g("view", {
            class: P(["nut-uploader__preview-img__file__name", [v.status]]),
            onClick: (k) => e.fileItemClick(v)
          }, [
            oe(i, { class: "nut-uploader__preview-img__file__link" }),
            g("view", u1, E(v.name), 1),
            e.isDeletable ? (c(), J(p, {
              key: 0,
              color: "#808080",
              class: "nut-uploader__preview-img__file__del",
              onClick: _e((k) => e.onDelete(v, b), ["stop"])
            }, null, 8, ["onClick"])) : T("", !0)
          ], 10, i1),
          v.status == "uploading" ? (c(), J(f, {
            key: 0,
            size: "small",
            percentage: v.percentage,
            "stroke-color": "linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)",
            "show-text": !1
          }, null, 8, ["percentage"])) : T("", !0)
        ])) : T("", !0)
      ], 2);
    }), 128)),
    e.listType == "picture" && !e.$slots.default && Number(e.maximum) - e.fileList.length ? (c(), d("view", {
      key: 1,
      class: P(["nut-uploader__upload", [e.listType]])
    }, [
      _(e.$slots, "upload-icon", {}, () => [
        oe(y, { color: "#808080" })
      ]),
      (c(), J(Oe(e.renderInput), { onChange: e.onChange }, null, 40, ["onChange"]))
    ], 2)) : T("", !0)
  ]);
}
const d1 = /* @__PURE__ */ ee(Zp, [["render", c1]]), { create: f1 } = q("number-keyboard"), p1 = "NutNumberKeyboard", m1 = f1({
  components: {
    NutPopup: Ae
  },
  props: {
    confirmText: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    visible: {
      type: Boolean,
      default: !1
    },
    type: {
      type: String,
      default: "default"
    },
    customKey: {
      type: Array,
      default: () => []
    },
    modelValue: {
      type: String,
      default: ""
    },
    maxlength: {
      type: [Number, String],
      default: 6
    },
    randomKeys: {
      type: Boolean,
      default: !1
    },
    popClass: {
      type: String,
      default: ""
    },
    lockScroll: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["input", "delete", "close", "blur", "update:modelValue", "update:visible"],
  setup(e, { emit: t }) {
    const n = Se(p1), l = z(void 0), o = z(e.visible), a = z();
    function s() {
      const { customKey: u } = e;
      let h = {
        id: "lock",
        type: "lock"
      }, m = Array.isArray(u) ? u : [u];
      return m.length === 1 && (h = {
        id: m[0],
        type: "custom"
      }), [...r(), h, { id: 0, type: "number" }, { id: "delete", type: "delete" }];
    }
    function r() {
      const u = [];
      for (let h = 1; h <= 9; h++)
        u.push({ id: h, type: "number" });
      return e.randomKeys ? u.sort(() => Math.random() > 0.5 ? 1 : -1) : u;
    }
    function i() {
      const u = r(), { customKey: h } = e;
      let m = Array.isArray(h) ? h : [h];
      return m.length > 2 && (m = [m[0], m[1]]), m.length == 2 && e.title && e.type != "rightColumn" && (m = [m[0]]), m.length === 1 ? e.title && e.type != "rightColumn" ? u.push({ id: m[0], type: "custom" }, { id: 0, type: "number" }, { id: "delete", type: "delete" }) : u.push({ id: 0, type: "number" }, { id: m[0], type: "custom" }) : m.length === 2 && u.push(
        { id: m[0], type: "custom" },
        { id: 0, type: "number" },
        { id: m[1], type: "custom" }
      ), u;
    }
    const p = N(() => e.type == "rightColumn" || e.title != "" ? i() : s()), f = () => {
      e.visible && t("blur");
    }, y = (u) => {
      const h = a.value;
      h && !h.contains(u.target) && f();
    };
    x(
      () => e.visible,
      (u) => {
        o.value = u, u ? window.addEventListener("touchstart", y, !1) : window.removeEventListener("touchstart", y, !1);
      }
    );
    function v(u, h) {
      h.stopPropagation(), l.value = u.id, (u.type == "number" || u.type == "custom") && (t("input", u.id), e.modelValue.length < +e.maxlength && t("update:modelValue", e.modelValue + u.id)), u.type == "lock" && k(), u.type == "delete" && (t("delete"), t("update:modelValue", e.modelValue.slice(0, e.modelValue.length - 1)));
    }
    function b(u) {
      u.stopPropagation();
    }
    function $(u) {
      u.preventDefault(), l.value = void 0;
    }
    function k() {
      t("update:visible", !1), t("close");
    }
    return {
      clickKeyIndex: l,
      defaultKey: s,
      closeBoard: k,
      onTouchEnd: $,
      onTouchMove: b,
      onTouchstart: v,
      keysList: p,
      genCustomKeys: i,
      getBasicKeys: r,
      root: a,
      show: o,
      translate: n
    };
  }
}), h1 = { ref: "root" }, g1 = { class: "nut-number-keyboard" }, v1 = {
  key: 0,
  class: "nut-number-keyboard__header"
}, y1 = { class: "nut-number-keyboard__title" }, b1 = { class: "nut-number-keyboard__body" }, $1 = { class: "nut-number-keyboard__keys" }, w1 = ["onTouchstart"], k1 = {
  key: 1,
  src: "https://img11.360buyimg.com/imagetools/jfs/t1/146371/38/8485/738/5f606425Eca239740/14f4b4f5f20d8a68.png"
}, C1 = {
  key: 2,
  src: "https://img11.360buyimg.com/imagetools/jfs/t1/129395/8/12735/2030/5f61ac37E70cab338/fb477dc11f46056c.png"
}, S1 = {
  key: 0,
  class: "nut-number-keyboard__sidebar"
}, T1 = { class: "nut-key__wrapper" }, N1 = /* @__PURE__ */ g("img", { src: "https://img11.360buyimg.com/imagetools/jfs/t1/129395/8/12735/2030/5f61ac37E70cab338/fb477dc11f46056c.png" }, null, -1), D1 = [
  N1
];
function _1(e, t, n, l, o, a) {
  const s = U("nut-popup");
  return c(), d("div", h1, [
    oe(s, {
      visible: e.show,
      "onUpdate:visible": t[7] || (t[7] = (r) => e.show = r),
      position: "bottom",
      "pop-class": e.popClass,
      overlay: !1,
      "lock-scroll": e.lockScroll,
      "teleport-disable": !1
    }, {
      default: ne(() => [
        g("div", g1, [
          e.title ? (c(), d("div", v1, [
            g("h3", y1, E(e.title), 1),
            e.type == "default" ? (c(), d("span", {
              key: 0,
              class: "nut-number-keyboard__close",
              onClick: t[0] || (t[0] = (r) => e.closeBoard())
            }, E(e.translate("done")), 1)) : T("", !0)
          ])) : T("", !0),
          g("div", b1, [
            g("div", $1, [
              (c(!0), d(Q, null, ie(e.keysList, (r) => (c(), d("div", {
                key: "key" + r.id,
                class: P([
                  "nut-key__wrapper",
                  {
                    "nut-key__wrapper--wider": r.id == 0 && e.type == "rightColumn" && Array.isArray(e.customKey) && e.customKey.length == 1
                  }
                ])
              }, [
                g("div", {
                  class: P([
                    "nut-key",
                    { "nut-key--active": r.id == e.clickKeyIndex },
                    { "nut-key--lock": r.type == "lock" },
                    { "nut-key--delete": r.type == "delete" }
                  ]),
                  onTouchstart: (i) => e.onTouchstart(r, i),
                  onTouchmove: t[1] || (t[1] = (i) => e.onTouchMove(i)),
                  onTouchend: t[2] || (t[2] = (i) => e.onTouchEnd(i))
                }, [
                  r.type == "number" || r.type == "custom" ? (c(), d(Q, { key: 0 }, [
                    he(E(r.id), 1)
                  ], 64)) : T("", !0),
                  r.type == "lock" ? (c(), d("img", k1)) : T("", !0),
                  r.type == "delete" ? (c(), d("img", C1)) : T("", !0)
                ], 42, w1)
              ], 2))), 128))
            ]),
            e.type == "rightColumn" ? (c(), d("div", S1, [
              g("div", T1, [
                g("div", {
                  class: P(["nut-key", { active: e.clickKeyIndex == "delete" }]),
                  onTouchstart: t[3] || (t[3] = (r) => e.onTouchstart({ id: "delete", type: "delete" }, r)),
                  onTouchmove: t[4] || (t[4] = (r) => e.onTouchMove(r)),
                  onTouchend: t[5] || (t[5] = (...r) => e.onTouchEnd && e.onTouchEnd(...r))
                }, D1, 34)
              ]),
              g("div", {
                class: "nut-key__wrapper nut-key__wrapper--finish",
                onClick: t[6] || (t[6] = (r) => e.closeBoard())
              }, [
                g("div", {
                  class: P(["nut-key", "nut-key--finish ", { activeFinsh: e.clickKeyIndex == "finish" }])
                }, E(e.confirmText || e.translate("done")), 3)
              ])
            ])) : T("", !0)
          ])
        ])
      ]),
      _: 1
    }, 8, ["visible", "pop-class", "lock-scroll"])
  ], 512);
}
const I1 = /* @__PURE__ */ ee(m1, [["render", _1]]), dn = /* @__PURE__ */ Ce({
  name: "NutForm",
  __name: "form",
  props: {
    modelValue: { default: () => ({}) },
    rules: { default: () => ({}) },
    disabled: { type: Boolean, default: !1 },
    labelPosition: { default: "left" },
    starPosition: { default: "left" }
  },
  emits: ["validate"],
  setup(e, { expose: t, emit: n }) {
    const l = e, o = n, { children: a, linkChildren: s } = At(To);
    s({ props: l });
    const { linkChildren: r } = At(No);
    r({ props: l });
    const i = N(() => fe({}));
    ze("formErrorTip", i);
    const p = () => {
      Object.keys(i.value).forEach((u) => {
        i.value[u] = "";
      });
    }, f = () => {
      p();
    };
    x(
      () => l.modelValue,
      () => {
        p();
      },
      { immediate: !0 }
    );
    const y = () => {
      const u = [];
      return a.forEach((h) => {
        u.push({
          prop: h == null ? void 0 : h.prop,
          rules: (h == null ? void 0 : h.rules) || []
        });
      }), u;
    }, v = (u) => {
      u.message && o("validate", u), i.value[u.prop] = u.message;
    }, b = (u) => Ge(this, null, function* () {
      const { rules: h = [], prop: m } = u, w = (S) => new Promise((C, D) => {
        try {
          v(S), C(S);
        } catch (V) {
          D(V);
        }
      });
      m || console.warn("[NutUI] <FormItem> 使用 rules 校验规则时 , 必须设置 prop 参数");
      const I = Xt(l.modelValue, m || "");
      v({ prop: m, message: "" });
      const B = l.rules || {}, L = [...(B == null ? void 0 : B[m]) || [], ...h];
      for (; L.length; ) {
        const M = L.shift(), { validator: C } = M, D = jt(M, ["validator"]), { required: V, regex: j, message: X } = D, le = { prop: m, message: X || "" };
        if (V && !I && I !== 0 || j && !j.test(String(I)))
          return w(le);
        if (C) {
          const W = C(I, D);
          if (Xn(W))
            try {
              if ((yield W) === !1)
                return w(le);
            } catch (Y) {
              return w({ prop: m, message: Y });
            }
          else if (!W)
            return w(le);
        }
      }
      return Promise.resolve(!0);
    }), $ = (u = "") => new Promise((h, m) => {
      try {
        const I = y().map((B) => u && u !== B.prop ? Promise.resolve(!0) : b(B));
        Promise.all(I).then((B) => {
          B = B.filter((M) => M !== !0);
          const L = { valid: !0, errors: [] };
          B.length && (L.valid = !1, L.errors = B), h(L);
        });
      } catch (w) {
        m(w);
      }
    });
    return t({
      submit: () => ($(), !1),
      reset: f,
      validate: $
    }), (u, h) => (c(), d("form", {
      class: "nut-form",
      action: "#",
      onSubmit: _e(() => !1, ["prevent"])
    }, [
      oe(lo, null, {
        default: ne(() => [
          _(u.$slots, "default")
        ]),
        _: 3
      })
    ], 32));
  }
});
Te(dn);
const B1 = { class: "nut-cell__value nut-form-item__body" }, fn = /* @__PURE__ */ Ce({
  name: "NutFormItem",
  inheritAttrs: !1,
  __name: "form-item",
  props: {
    prop: { default: "" },
    label: { default: "" },
    rules: { default: () => [] },
    required: { type: Boolean, default: !1 },
    showErrorMessage: { type: Boolean, default: !0 },
    showErrorLine: { type: Boolean, default: !0 },
    labelWidth: {},
    labelAlign: {},
    errorMessageAlign: {},
    bodyAlign: {},
    labelPosition: {},
    starPosition: {}
  },
  setup(e) {
    const t = e, { parent: n } = Vt(To), l = N(() => {
      var v;
      const f = (v = n.props) == null ? void 0 : v.rules;
      let y = !1;
      for (const b in f)
        Object.prototype.hasOwnProperty.call(f, b) && b === t.prop && Array.isArray(f[b]) && (y = f[b].some(($) => $.required));
      return t.required || t.rules.some((b) => b.required) || y;
    }), o = N(() => {
      const f = n.props.labelPosition, y = t.labelPosition ? t.labelPosition : f;
      return y !== "left" ? `nut-form-item__${y}` : "";
    }), a = N(() => {
      const f = n.props.starPosition, y = t.starPosition ? t.starPosition : f;
      return y !== "left" ? `nut-form-item__star-${y}` : "";
    }), s = Ee("formErrorTip"), r = N(() => ({
      width: Be(t.labelWidth),
      textAlign: t.labelAlign
    })), i = N(() => ({
      textAlign: t.bodyAlign
    })), p = N(() => ({
      textAlign: t.errorMessageAlign
    }));
    return (f, y) => (c(), J(oo, {
      class: P(["nut-form-item", [{ error: ye(s)[f.prop], line: f.showErrorLine }, f.$attrs.class, o.value]]),
      style: A(f.$attrs.style)
    }, {
      default: ne(() => [
        f.label || f.$slots.label ? (c(), d("view", {
          key: 0,
          class: P(["nut-cell__title nut-form-item__label", { required: l.value, [a.value]: a.value }]),
          style: A(r.value)
        }, [
          _(f.$slots, "label", {}, () => [
            he(E(f.label), 1)
          ])
        ], 6)) : T("", !0),
        g("view", B1, [
          g("view", {
            class: "nut-form-item__body__slots",
            style: A(i.value)
          }, [
            _(f.$slots, "default")
          ], 4),
          ye(s)[f.prop] && f.showErrorMessage ? (c(), d("view", {
            key: 0,
            class: "nut-form-item__body__tips",
            style: A(p.value)
          }, E(ye(s)[f.prop]), 5)) : T("", !0)
        ])
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
});
Te(fn);
const zo = Symbol("nut-swipe"), pn = /* @__PURE__ */ Ce({
  name: "NutSwipe",
  __name: "swipe",
  props: {
    name: { default: "" },
    touchMoveStopPropagation: { type: Boolean, default: !1 },
    touchMovePreventDefault: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["open", "close", "click"],
  setup(e, { expose: t, emit: n }) {
    const l = e, o = n, a = (C) => {
      var D;
      return ((D = C.value) == null ? void 0 : D.getBoundingClientRect().width) || 0;
    }, s = z(!1), r = z(), i = N(() => a(r)), p = z(), f = N(() => a(p)), y = Ee(zo, null);
    x(
      () => {
        var C;
        return (C = y == null ? void 0 : y.name) == null ? void 0 : C.value;
      },
      (C) => {
        l.name !== C && y && y.lock && h();
      }
    );
    const v = z(!1);
    let b = "", $ = "";
    const k = fe({
      offset: 0,
      moving: !1
    }), u = (C = "") => {
      y && y.update(l.name), v.value = !0, C && (k.offset = C === "left" ? -f.value : i.value), o("open", {
        name: l.name,
        position: b || C
      });
    }, h = () => {
      k.offset = 0, v.value && (v.value = !1, o("close", {
        name: l.name,
        position: b
      }));
    }, m = (C, D, V) => {
      V ? C.stopPropagation() : h(), o("click", D);
    }, w = N(() => ({
      transform: `translate3d(${k.offset}px, 0, 0)`
    })), I = (C) => {
      b = C > 0 ? "right" : "left";
      let D = C;
      switch (b) {
        case "left":
          v.value && $ === b ? D = -f.value : D = Math.abs(C) > f.value ? -f.value : C;
          break;
        case "right":
          v.value && $ === b ? D = i.value : D = Math.abs(C) > i.value ? i.value : C;
          break;
      }
      k.offset = D;
    }, B = et(), L = (C) => {
      l.disabled || B.start(C);
    }, M = (C) => {
      l.disabled || (B.move(C), B.isHorizontal() && (s.value = !0, k.moving = !0, I(B.deltaX.value), l.touchMovePreventDefault && C.preventDefault(), l.touchMoveStopPropagation && C.stopPropagation()));
    }, S = () => {
      if (k.moving) {
        switch (k.moving = !1, $ = b, b) {
          case "left":
            Math.abs(k.offset) <= f.value / 2 ? h() : (k.offset = -f.value, u());
            break;
          case "right":
            Math.abs(k.offset) <= i.value / 2 ? h() : (k.offset = i.value, u());
            break;
        }
        setTimeout(() => {
          s.value = !1;
        }, 0);
      }
    };
    return t({
      open: u,
      close: h
    }), (C, D) => (c(), d("view", {
      class: "nut-swipe",
      style: A(w.value),
      onTouchstart: L,
      onTouchmove: M,
      onTouchend: S,
      onTouchcancel: S
    }, [
      g("view", {
        ref_key: "leftRef",
        ref: r,
        class: "nut-swipe__left",
        onClick: D[0] || (D[0] = (V) => m(V, "left", !0))
      }, [
        _(C.$slots, "left")
      ], 512),
      g("view", {
        class: "nut-swipe__content",
        onClick: D[1] || (D[1] = (V) => m(V, "content", s.value))
      }, [
        _(C.$slots, "default")
      ]),
      g("view", {
        ref_key: "rightRef",
        ref: p,
        class: "nut-swipe__right",
        onClick: D[2] || (D[2] = (V) => m(V, "right", !0))
      }, [
        _(C.$slots, "right")
      ], 512)
    ], 36));
  }
});
Te(pn);
const Vo = /* @__PURE__ */ Ce({
  name: "NutSwipeGroup",
  __name: "swipe-group",
  props: {
    lock: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, n = z(null), l = z("");
    return ze(zo, {
      update: (a) => {
        l.value = a;
      },
      lock: t.lock,
      name: l
    }), (a, s) => (c(), d("div", {
      ref_key: "swipeGroupRef",
      ref: n,
      class: "nut-swipe-group"
    }, [
      _(a.$slots, "default")
    ], 512));
  }
});
Te(Vo);
const { create: M1 } = q("action-sheet"), L1 = M1({
  components: {
    NutPopup: Ae,
    Loading: rt
  },
  props: ce(Z({}, Nt), {
    cancelTxt: {
      type: String,
      default: ""
    },
    optionTag: {
      type: String,
      default: "name"
    },
    optionSubTag: {
      type: String,
      default: "subname"
    },
    chooseTagValue: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "#ee0a24"
    },
    description: {
      type: String,
      default: ""
    },
    menuItems: {
      type: Array,
      default: () => []
    },
    closeAbled: {
      type: Boolean,
      default: !0
    }
  }),
  emits: ["cancel", "close", "choose", "update:visible"],
  setup(e, { emit: t }) {
    return {
      slotDefault: !!at().default,
      isHighlight: (r) => e.chooseTagValue && e.chooseTagValue === r[e.optionTag] ? e.color : "",
      cancelActionSheet: () => {
        t("cancel"), t("update:visible", !1);
      },
      chooseItem: (r, i) => {
        !r.disable && !r.loading && (t("choose", r, i), t("update:visible", !1));
      },
      close: (r) => {
        e.closeAbled && (t("close", r), t("update:visible", !1));
      }
    };
  }
}), P1 = { class: "nut-action-sheet" }, E1 = {
  key: 0,
  class: "nut-action-sheet__title"
}, A1 = { key: 1 }, z1 = {
  key: 0,
  class: "nut-action-sheet__item nut-action-sheet__desc"
}, V1 = {
  key: 1,
  class: "nut-action-sheet__menu"
}, O1 = ["onClick"], H1 = { key: 1 }, R1 = { class: "nut-action-sheet__subdesc" };
function F1(e, t, n, l, o, a) {
  const s = U("Loading"), r = U("nut-popup");
  return c(), J(r, {
    visible: e.visible,
    position: "bottom",
    round: "",
    "close-on-click-overlay": e.closeAbled,
    "lock-scroll": e.lockScroll,
    "z-index": e.zIndex,
    onClickOverlay: e.close
  }, {
    default: ne(() => [
      g("view", P1, [
        e.title ? (c(), d("view", E1, E(e.title), 1)) : T("", !0),
        _(e.$slots, "default"),
        e.slotDefault ? T("", !0) : (c(), d("view", A1, [
          e.description ? (c(), d("view", z1, E(e.description), 1)) : T("", !0),
          e.menuItems.length ? (c(), d("view", V1, [
            (c(!0), d(Q, null, ie(e.menuItems, (i, p) => (c(), d("view", {
              key: p,
              class: P(["nut-action-sheet__item", {
                "nut-action-sheet__item--disabled": i.disable,
                "nut-action-sheet__item--loading": i.loading
              }]),
              style: A({ color: e.isHighlight(i) || i.color }),
              onClick: (f) => e.chooseItem(i, p)
            }, [
              i.loading ? (c(), J(s, { key: 0 })) : (c(), d("view", H1, E(i[e.optionTag]), 1)),
              g("view", R1, E(i[e.optionSubTag]), 1)
            ], 14, O1))), 128))
          ])) : T("", !0),
          e.cancelTxt ? (c(), d("view", {
            key: 2,
            class: "nut-action-sheet__cancel",
            onClick: t[0] || (t[0] = (...i) => e.cancelActionSheet && e.cancelActionSheet(...i))
          }, E(e.cancelTxt), 1)) : T("", !0)
        ]))
      ])
    ]),
    _: 3
  }, 8, ["visible", "close-on-click-overlay", "lock-scroll", "z-index", "onClickOverlay"]);
}
const W1 = /* @__PURE__ */ ee(L1, [["render", F1]]), Oo = /* @__PURE__ */ Ce({
  name: "NutBacktop",
  __name: "backtop",
  props: {
    bottom: { default: 20 },
    right: { default: 10 },
    elId: { default: "body" },
    distance: { default: 200 },
    zIndex: { default: 10 },
    isAnimation: { type: Boolean, default: !0 },
    duration: { default: 1e3 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e, l = t, o = z(!1), a = z(0), s = z(window), r = z(0), i = z(!1), p = N(() => ({
      ["nut-backtop"]: !0,
      show: o.value
    })), f = N(() => ({
      right: `${n.right}px`,
      bottom: `${n.bottom}px`,
      zIndex: n.zIndex
    }));
    function y() {
      s.value instanceof Window ? a.value = s.value.scrollY : a.value = s.value.scrollTop, o.value = a.value >= n.distance;
    }
    function v(m = 0) {
      s.value instanceof Window ? window.scrollTo(0, m) : s.value.scrollTop = m;
    }
    function b() {
      let m = Re(function w() {
        var I = n.duration - Math.max(0, r.value - +/* @__PURE__ */ new Date() + n.duration), B = I * -a.value / n.duration + a.value;
        v(B), m = Re(w), (I == n.duration || B == 0) && kc(m);
      });
    }
    function $() {
      s.value.addEventListener("scroll", y, !1), s.value.addEventListener("resize", y, !1);
    }
    function k() {
      s.value.removeEventListener("scroll", y, !1), s.value.removeEventListener("resize", y, !1);
    }
    function u(m) {
      r.value = +/* @__PURE__ */ new Date(), n.isAnimation && n.duration > 0 ? b() : v(), l("click", m);
    }
    function h() {
      n.elId && document.getElementById(n.elId) && (s.value = document.getElementById(n.elId)), $();
    }
    return be(() => {
      n.distance == 0 && (o.value = !0), h();
    }), Xe(() => {
      k();
    }), Ct(() => {
      i.value && (i.value = !1, h());
    }), St(() => {
      i.value = !0, k();
    }), (m, w) => (c(), d("div", {
      class: P(p.value),
      style: A(f.value),
      onClick: _e(u, ["stop"])
    }, [
      _(m.$slots, "default", {}, () => [
        oe(ye(Qr), {
          width: "19px",
          height: "19px",
          class: "nut-backtop-main"
        })
      ])
    ], 6));
  }
});
Te(Oo);
const { create: Y1 } = q("drag"), j1 = Y1({
  props: {
    attract: {
      type: Boolean,
      default: !1
    },
    direction: {
      type: String,
      default: "all"
    },
    boundary: {
      type: Object,
      default: () => ({
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      })
    }
  },
  setup(e) {
    const t = z(), n = fe({
      keepAlive: !1,
      elWidth: 0,
      elHeight: 0,
      screenWidth: 0,
      screenHeight: 0,
      startTop: 0,
      startLeft: 0,
      nx: 0,
      ny: 0,
      xPum: 0,
      yPum: 0,
      position: { x: 0, y: 0 },
      boundary: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }
    });
    function l() {
      const p = document.documentElement;
      n.elWidth = t.value.offsetWidth, n.elHeight = t.value.offsetHeight, n.screenWidth = p.clientWidth || 375, n.screenHeight = p.clientHeight || 667;
    }
    function o(p) {
      n.boundary.left ? +p.style.left.split("px")[0] > n.boundary.left ? (p.style.left = +p.style.left.split("px")[0] - 10 + "px", Re(() => {
        o(p);
      })) : p.style.left = `${n.boundary.left}px` : +p.style.left.split("px")[0] > 10 ? (p.style.left = +p.style.left.split("px")[0] - 10 + "px", Re(() => {
        o(p);
      })) : p.style.left = "0px";
    }
    function a(p, f) {
      f - parseInt(p.style.left.split("px")[0]) > 10 ? (p.style.left = parseInt(p.style.left.split("px")[0]) + 10 + "px", Re(() => {
        a(p, f);
      })) : p.style.left = f + "px";
    }
    function s(p) {
      p.preventDefault();
      const f = p.currentTarget;
      if (p.targetTouches.length === 1) {
        const y = p.targetTouches[0];
        n.nx = y.clientX - n.position.x, n.ny = y.clientY - n.position.y, n.xPum = n.startLeft + n.nx, n.yPum = n.startTop + n.ny;
        const v = n.screenWidth - n.elWidth - n.boundary.right;
        Math.abs(n.xPum) > v ? n.xPum = v : n.xPum <= n.boundary.left && (n.xPum = n.boundary.left), n.yPum < n.boundary.top ? n.yPum = n.boundary.top : n.yPum > n.screenHeight - n.elHeight - n.boundary.bottom && (n.yPum = n.screenHeight - n.elHeight - n.boundary.bottom), e.direction != "y" && (f.style.left = n.xPum + "px"), e.direction != "x" && (f.style.top = n.yPum + "px");
      }
    }
    function r(p) {
      const f = p.currentTarget;
      let v = p.changedTouches[0].clientX;
      const b = n.screenWidth - n.elWidth - n.boundary.right;
      v > b ? v = b : v < n.boundary.left ? v = n.boundary.left : v = v < n.screenWidth / 2 ? n.boundary.left : b, e.direction != "y" && e.attract && (v < n.screenWidth / 2 ? Re(() => {
        o(f);
      }) : Re(() => {
        a(f, b);
      })), e.direction != "x" && (f.style.top = n.yPum + "px");
    }
    function i(p) {
      const f = p.currentTarget, y = p.touches[0], v = p.targetTouches[0];
      n.startTop = f.offsetTop, n.startLeft = f.offsetLeft, n.position.x = y.clientX, n.position.y = y.clientY, n.nx = v.clientX - n.position.x, n.ny = v.clientY - n.position.y, n.xPum = n.startLeft + n.nx, n.yPum = n.startTop + n.ny;
    }
    return be(() => {
      l(), n.boundary = e.boundary;
    }), Ct(() => {
      n.keepAlive && (n.keepAlive = !1);
    }), St(() => {
      n.keepAlive = !0, t.value.removeEventListener("touchstart", i), t.value.removeEventListener("touchmove", s), t.value.removeEventListener("touchend", r);
    }), {
      myDrag: t,
      touchStart: i,
      touchMove: s,
      touchEnd: r
    };
  }
});
function K1(e, t, n, l, o, a) {
  return c(), d("view", {
    ref: "myDrag",
    class: "nut-drag",
    onTouchstart: t[0] || (t[0] = (s) => e.touchStart(s)),
    onTouchmove: t[1] || (t[1] = (s) => e.touchMove(s)),
    onTouchend: t[2] || (t[2] = (s) => e.touchEnd(s))
  }, [
    _(e.$slots, "default")
  ], 544);
}
const U1 = /* @__PURE__ */ ee(j1, [["render", K1]]), { create: X1 } = q("dialog"), q1 = "NutDialog", Z1 = X1({
  inheritAttrs: !1,
  components: {
    NutPopup: Ae,
    NutButton: qe
  },
  props: ce(Z({}, Nt), {
    closeOnClickOverlay: {
      type: Boolean,
      default: !0
    },
    title: {
      type: String,
      default: ""
    },
    content: {
      type: [String, Object],
      default: ""
    },
    noFooter: {
      type: Boolean,
      default: !1
    },
    noOkBtn: {
      type: Boolean,
      default: !1
    },
    noCancelBtn: {
      type: Boolean,
      default: !1
    },
    cancelText: {
      type: String,
      default: ""
    },
    okText: {
      type: String,
      default: ""
    },
    cancelAutoClose: {
      type: Boolean,
      default: !0
    },
    okAutoClose: {
      type: Boolean,
      default: !0
    },
    textAlign: {
      type: String,
      default: "center"
    },
    closeOnPopstate: {
      type: Boolean,
      default: !1
    },
    footerDirection: {
      type: String,
      default: "horizontal"
      //vertical
    },
    customClass: {
      type: String,
      default: ""
    },
    popStyle: {
      type: Object
    },
    beforeClose: Function
  }),
  emits: ["update", "update:visible", "ok", "cancel", "opened", "closed"],
  setup(e, { emit: t }) {
    const n = Se(q1), l = z(e.visible);
    be(() => {
      e.closeOnPopstate && window.addEventListener("popstate", function() {
        a("page");
      });
    }), x(
      () => e.visible,
      (f) => {
        l.value = f, f && t("opened");
      }
    );
    const o = (f) => {
      t("update", f), t("update:visible", f);
    }, a = (f) => {
      nn(e.beforeClose, {
        args: [f],
        done: () => {
          l.value = !1, o(!1), t("closed");
        }
      });
    }, s = () => {
      t("cancel"), e.cancelAutoClose && (l.value = !1, a("cancel"));
    }, r = () => {
      t("ok"), e.okAutoClose && a("ok");
    }, i = () => {
      e.closeOnClickOverlay && a("");
    }, p = N(() => ({
      textAlign: e.textAlign
    }));
    return {
      closed: a,
      onCancel: s,
      onOk: r,
      showPopup: l,
      onClickOverlay: i,
      contentStyle: p,
      translate: n
    };
  }
}), G1 = {
  key: 0,
  class: "nut-dialog__header"
}, J1 = ["innerHTML"];
function Q1(e, t, n, l, o, a) {
  const s = U("nut-button"), r = U("nut-popup");
  return c(), J(r, {
    visible: e.showPopup,
    "onUpdate:visible": t[0] || (t[0] = (i) => e.showPopup = i),
    teleport: e.teleport,
    "close-on-click-overlay": !1,
    "lock-scroll": e.lockScroll,
    "pop-class": e.popClass,
    "overlay-class": e.overlayClass,
    "overlay-style": e.overlayStyle,
    style: A(e.popStyle),
    round: "",
    "z-index": e.zIndex,
    onClickOverlay: e.onClickOverlay,
    onClickCloseIcon: e.closed
  }, {
    default: ne(() => [
      g("view", {
        class: P(["nut-dialog", e.customClass])
      }, [
        e.$slots.header || e.title ? (c(), d("view", G1, [
          e.$slots.header ? _(e.$slots, "header", { key: 0 }) : (c(), d(Q, { key: 1 }, [
            he(E(e.title), 1)
          ], 64))
        ])) : T("", !0),
        g("view", {
          class: "nut-dialog__content",
          style: A(e.contentStyle)
        }, [
          e.$slots.default ? _(e.$slots, "default", { key: 0 }) : typeof e.content == "string" ? (c(), d("view", {
            key: 1,
            innerHTML: e.content
          }, null, 8, J1)) : (c(), J(Oe(e.content), { key: 2 }))
        ], 4),
        e.noFooter ? T("", !0) : (c(), d("view", {
          key: 1,
          class: P(["nut-dialog__footer", { [e.footerDirection]: e.footerDirection }])
        }, [
          e.$slots.footer ? _(e.$slots, "footer", { key: 0 }) : (c(), d(Q, { key: 1 }, [
            e.noCancelBtn ? T("", !0) : (c(), J(s, {
              key: 0,
              size: "small",
              plain: "",
              type: "primary",
              class: "nut-dialog__footer-cancel",
              onClick: e.onCancel
            }, {
              default: ne(() => [
                he(E(e.cancelText || e.translate("cancel")), 1)
              ]),
              _: 1
            }, 8, ["onClick"])),
            e.noOkBtn ? T("", !0) : (c(), J(s, {
              key: 1,
              size: "small",
              type: "primary",
              class: "nut-dialog__footer-ok",
              onClick: e.onOk
            }, {
              default: ne(() => [
                he(E(e.okText || e.translate("confirm")), 1)
              ]),
              _: 1
            }, 8, ["onClick"]))
          ], 64))
        ], 2))
      ], 2)
    ]),
    _: 3
  }, 8, ["visible", "teleport", "lock-scroll", "pop-class", "overlay-class", "overlay-style", "style", "z-index", "onClickOverlay", "onClickCloseIcon"]);
}
const mn = /* @__PURE__ */ ee(Z1, [["render", Q1]]);
class x1 {
  constructor() {
    O(this, "title", "");
    O(this, "content", "");
    O(this, "cancelText", "");
    O(this, "okText", "");
    O(this, "textAlign", "center");
    O(this, "customClass", "");
    O(this, "overlayStyle", {});
    O(this, "overlayClass", "");
    O(this, "popStyle", {});
    O(this, "popClass", "");
    O(this, "teleport", "body");
    O(this, "id", (/* @__PURE__ */ new Date()).getTime());
    O(this, "footerDirection", "horizontal");
    //使用横纵方向 可选值 horizontal、vertical
    // function
    O(this, "onUpdate");
    O(this, "onOk");
    O(this, "onCancel");
    O(this, "onOpened");
    O(this, "onClosed");
    O(this, "beforeClose");
    O(this, "visible", !0);
    O(this, "noFooter", !1);
    O(this, "noOkBtn", !1);
    O(this, "noCancelBtn", !1);
    O(this, "okBtnDisabled", !1);
    O(this, "closeOnPopstate", !1);
    O(this, "closeOnClickOverlay", !0);
    O(this, "lockScroll", !0);
    O(this, "cancelAutoClose", !0);
    O(this, "okAutoClose", !0);
  }
}
class em {
  constructor(t) {
    O(this, "options", new x1());
    O(this, "instance");
    const n = Object.assign(this.options, t), { unmount: l } = an(n, {
      name: "dialog",
      components: [Ae, qe, Tt],
      wrapper: (o, a) => ({
        setup() {
          return n.onUpdate = (s) => {
            s === !1 && Ne(() => {
              l();
            });
          }, n != null && n.onOpened && (n == null || n.onOpened()), n.teleport = `#${a.id}`, () => we(mn, n);
        }
      })
    });
  }
}
const tm = function(e) {
  return new em(e);
};
tm.install = (e) => {
  e.use(mn);
};
const { create: nm } = q("infinite-loading"), om = "NutInfiniteLoading", lm = nm({
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    hasMore: {
      type: Boolean,
      default: !0
    },
    threshold: {
      type: Number,
      default: 200
    },
    loadTxt: {
      type: String,
      default: ""
    },
    loadMoreTxt: {
      type: String,
      default: ""
    },
    useCapture: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["scrollChange", "loadMore", "update:modelValue"],
  components: {
    Loading: rt
  },
  setup(e, { emit: t, slots: n }) {
    const l = Se(om), o = z(), a = fo(o), s = fe({
      beforeScrollTop: 0,
      isInfiniting: !1,
      y: 0,
      x: 0,
      distance: 0
    }), r = (b) => b ? b.offsetTop + r(b.offsetParent) : 0, i = () => {
      let b = 0, $ = 0, k = "down";
      if (a.value == window) {
        const u = Zn();
        o.value && (b = r(o.value) + o.value.offsetHeight - u - window.innerHeight), $ = u;
      } else {
        const { scrollHeight: u, clientHeight: h, scrollTop: m } = a.value;
        b = u - h - m, $ = m;
      }
      return s.beforeScrollTop > $ ? k = "up" : k = "down", s.beforeScrollTop = $, t("scrollChange", $), b <= e.threshold && k == "down";
    }, p = () => {
      Re(() => {
        if (!i() || !e.hasMore || s.isInfiniting)
          return !1;
        s.isInfiniting = !0, t("update:modelValue", !0), Ne(() => t("loadMore"));
      });
    }, f = () => {
      a.value && a.value.addEventListener("scroll", p, e.useCapture);
    }, y = () => {
      a.value && a.value.removeEventListener("scroll", p, e.useCapture);
    };
    be(() => {
      f();
    }), Xe(() => {
      y();
    });
    const v = z(!1);
    return Ct(() => {
      v.value && (v.value = !1, f());
    }), St(() => {
      v.value = !0, y();
    }), x(
      () => e.modelValue,
      (b) => {
        b || (s.isInfiniting = !1);
      }
    ), ce(Z({
      scroller: o
    }, ge(s)), {
      translate: l,
      slots: n
    });
  }
}), sm = {
  ref: "scroller",
  class: "nut-infinite-loading"
}, am = { class: "nut-infinite__container" }, rm = { class: "nut-infinite__bottom" }, im = {
  key: 0,
  class: "nut-infinite__bottom-box"
}, um = { class: "nut-infinite__bottom-box__text" }, cm = { class: "nut-infinite__bottom-tips" };
function dm(e, t, n, l, o, a) {
  const s = U("Loading");
  return c(), d("view", sm, [
    g("view", am, [
      _(e.$slots, "default")
    ]),
    g("view", rm, [
      e.isInfiniting ? (c(), d("view", im, [
        _(e.$slots, "loading", {}, () => [
          _(e.$slots, "loading-icon", {}, () => [
            oe(s, { class: "nut-icon-loading nut-infinite__bottom-box__img" })
          ]),
          g("view", um, E(e.loadTxt || e.translate("loading")), 1)
        ])
      ])) : e.hasMore ? T("", !0) : _(e.$slots, "finished", { key: 1 }, () => [
        g("view", cm, E(e.loadMoreTxt || e.translate("loadMoreTxt")), 1)
      ])
    ])
  ], 512);
}
const fm = /* @__PURE__ */ ee(lm, [["render", dm]]), { create: pm } = q("pull-refresh"), mm = "NutPullRefresh", hm = pm({
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    pullingTxt: {
      type: String,
      default: ""
    },
    loosingTxt: {
      type: String,
      default: ""
    },
    loadingTxt: {
      type: String,
      default: ""
    },
    completeTxt: {
      type: String,
      default: ""
    },
    headHeight: {
      type: [String, Number],
      default: 50
    },
    pullDistance: {
      type: [String, Number],
      default: 50
    },
    duration: {
      type: [String, Number],
      default: 0.3
    },
    completeDuration: {
      type: Number,
      default: 0
    }
  },
  emits: ["change", "refresh", "update:modelValue"],
  components: { Loading: rt },
  setup(e, { emit: t, slots: n }) {
    const l = Se(mm), o = et(), a = z(), s = fo(a), r = fe({
      isPullRefresh: !1,
      distance: 0,
      status: "normal"
    }), i = N(() => {
      switch (r.status) {
        case "pulling":
          return n.pulling ? "" : e.pullingTxt || l("pulling");
        case "loosing":
          return n.loosing ? "" : e.loosingTxt || l("loosing");
        case "loading":
          return n.loading ? "" : e.loadingTxt || l("loading");
        case "complete":
          return n.complete ? "" : e.completeTxt || l("complete");
      }
      return "";
    }), p = N(() => ({
      transitionDuration: `${e.duration}s`,
      transform: r.distance ? `translate3d(0,${r.distance}px, 0)` : ""
    })), f = N(() => {
      const m = {};
      return e.headHeight != 50 && (m.height = Be(e.headHeight)), m;
    }), y = (m) => {
      const w = +(e.pullDistance || e.headHeight);
      let I = m;
      return m > w && (m < w * 2 ? I = (m + w) / 2 : I = w + m / 4), Math.round(I);
    }, v = (m, w, I) => {
      const B = +(e.pullDistance || e.headHeight);
      r.distance = m, w ? r.status = "loading" : I ? r.status = "complete" : m === 0 ? r.status = "normal" : m < B ? r.status = "pulling" : r.status = "loosing", t("change", { status: r.status, distance: m });
    }, b = () => r.status !== "loading" && r.status !== "complete", $ = () => s.value == window ? Zn() == 0 : s.value && s.value.scrollTop == 0, k = (m) => {
      b() && ($() ? (o.start(m), r.isPullRefresh = !0) : (r.distance = 0, r.isPullRefresh = !1));
    }, u = (m) => {
      if (b()) {
        o.move(m);
        const { deltaY: w } = o;
        o.isVertical() && w.value > 0 && r.isPullRefresh && (m.preventDefault(), v(y(w.value)));
      }
    }, h = () => {
      r.isPullRefresh && b() && o.deltaY.value && (r.status === "loosing" ? (v(+e.headHeight, !0), t("update:modelValue", !0), Ne(() => t("refresh"))) : v(0)), setTimeout(() => {
        o.reset();
      }, 0);
    };
    return x(
      () => e.modelValue,
      (m) => {
        m ? v(+e.headHeight, !0) : (e.completeDuration === 0 && v(0), v(+e.headHeight, !1, !0), setTimeout(() => {
          v(0);
        }, e.completeDuration));
      }
    ), ce(Z({
      scroller: a
    }, ge(r)), {
      touchStart: k,
      touchMove: u,
      touchEnd: h,
      getStyle: p,
      translate: l,
      slots: n,
      getHeightStyle: f,
      getPullStatus: i
    });
  }
}), gm = { class: "nut-pull-refresh-container-topbox-text" };
function vm(e, t, n, l, o, a) {
  const s = U("Loading");
  return c(), d("div", {
    ref: "scroller",
    class: "nut-pull-refresh",
    onTouchstart: t[0] || (t[0] = (...r) => e.touchStart && e.touchStart(...r)),
    onTouchmove: t[1] || (t[1] = (...r) => e.touchMove && e.touchMove(...r)),
    onTouchend: t[2] || (t[2] = (...r) => e.touchEnd && e.touchEnd(...r))
  }, [
    g("div", {
      class: "nut-pull-refresh-container",
      style: A(e.getStyle)
    }, [
      g("div", {
        class: "nut-pull-refresh-container-topbox",
        style: A(e.getHeightStyle)
      }, [
        e.status == "loading" && !e.slots.loading ? (c(), J(s, {
          key: 0,
          class: "nut-icon-loading nut-pull-refresh-container-topbox-icon"
        })) : T("", !0),
        g("div", gm, E(e.getPullStatus), 1),
        e.status == "pulling" ? _(e.$slots, "pulling", { key: 1 }) : T("", !0),
        e.status == "loosing" ? _(e.$slots, "loosing", { key: 2 }) : T("", !0),
        e.status == "loading" ? _(e.$slots, "loading", { key: 3 }) : T("", !0),
        e.status == "complete" ? _(e.$slots, "complete", { key: 4 }) : T("", !0)
      ], 4),
      _(e.$slots, "default")
    ], 4)
  ], 544);
}
const ym = /* @__PURE__ */ ee(hm, [["render", vm]]), { create: bm } = q("notify"), $m = bm({
  components: {
    NutPopup: Ae
  },
  props: {
    id: String,
    color: {
      type: String,
      default: ""
    },
    msg: {
      type: String,
      default: ""
    },
    duration: {
      type: Number,
      default: 3e3
    },
    className: {
      type: String,
      default: ""
    },
    background: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "danger"
    },
    visible: {
      type: Boolean,
      default: !1
    },
    position: {
      type: String,
      default: "top"
    },
    teleportDisable: {
      type: Boolean,
      default: !0
    },
    onClose: Function,
    onClick: Function,
    unmount: Function
  },
  emits: ["update:visible"],
  setup(e, { emit: t }) {
    const n = () => {
      e.onClick && e.onClick();
    };
    let l = null;
    const o = () => {
      l && clearTimeout(l), l = null;
    }, a = () => {
      t("update:visible", !1);
    }, s = z(!1), r = x(
      () => e.visible,
      (p) => {
        s.value = e.visible;
        const f = e.duration;
        p && f && (l = setTimeout(() => {
          a();
        }, f));
      },
      { immediate: !0 }
    );
    return { onAfterLeave: () => {
      o(), r && r(), e.unmount && e.unmount(e.id), e.onClose && e.onClose();
    }, clickCover: n, isShowPopup: s };
  }
});
function wm(e, t, n, l, o, a) {
  const s = U("nut-popup");
  return c(), J(s, {
    visible: e.isShowPopup,
    "onUpdate:visible": t[1] || (t[1] = (r) => e.isShowPopup = r),
    position: e.position,
    overlay: !1,
    "teleport-disable": e.teleportDisable
  }, {
    default: ne(() => [
      g("div", {
        class: P(["nut-notify", `nut-notify--${e.type}`, e.className]),
        style: A({ color: e.color, background: e.background }),
        onClick: t[0] || (t[0] = (...r) => e.clickCover && e.clickCover(...r))
      }, [
        e.$slots.default ? _(e.$slots, "default", { key: 0 }) : (c(), d(Q, { key: 1 }, [
          he(E(e.msg), 1)
        ], 64))
      ], 6)
    ]),
    _: 3
  }, 8, ["visible", "position", "teleport-disable"]);
}
const Ht = /* @__PURE__ */ ee($m, [["render", wm]]), Jt = {
  type: "base",
  visible: !0,
  msg: "",
  color: void 0,
  background: void 0,
  duration: 3e3,
  className: "",
  onClose: Function,
  // onClick: null,
  // onOpened: null,
  // textTimer: null,
  teleport: "",
  unmount: new Function()
};
let ut = [], yt = [];
const Ho = (e) => {
  if (e) {
    const t = document.getElementById(e);
    yt = yt.filter((n) => n.id !== e), ut = ut.filter((n) => n !== e), t && document.body.removeChild(t);
  } else
    ut.forEach((t) => {
      const n = document.getElementById(t);
      n && document.body.removeChild(n);
    }), yt = [], ut = [];
}, km = (e) => {
  const t = document.getElementById(e.id);
  if (t) {
    const n = yt.find((o) => o.id === e.id);
    n ? e = Z(Z(Z({}, Jt), n), e) : e = Z(Z({}, Jt), e);
    const l = oe(Ht, e);
    return tn(l, t), l.component.data;
  }
}, ht = (e) => {
  e.unmount = Ho;
  let t;
  if (e.id) {
    if (t = e.id, ut.find((a) => a === e.id))
      return km(e);
  } else
    t = (/* @__PURE__ */ new Date()).getTime() + "";
  e = Z(Z({}, Jt), e), e.id = t, ut.push(e.id), yt.push(e);
  const n = document.createElement("view");
  n.id = "notify-" + e.id;
  const o = oe({
    setup() {
      return e.teleport = `#notify-${e.id}`, be(() => {
        setTimeout(() => {
          e.onClose && e.onClose(), document.body.removeChild(n);
        }, e.duration);
      }), () => we(Ht, e);
    }
  });
  document.body.appendChild(n), tn(o, n);
}, gt = (e) => {
  if (!e) {
    console.warn("[NutUI Notify]: msg不能为空");
    return;
  }
}, f4 = {
  text(e, t = {}) {
    return gt(e), ht(ce(Z({}, t), { msg: e }));
  },
  primary(e, t = {}) {
    return gt(e), ht(ce(Z({}, t), { msg: e, type: "primary" }));
  },
  success(e, t = {}) {
    return gt(e), ht(ce(Z({}, t), { msg: e, type: "success" }));
  },
  danger(e, t = {}) {
    return gt(e), ht(ce(Z({}, t), { msg: e, type: "danger" }));
  },
  warn(e, t = {}) {
    return gt(e), ht(ce(Z({}, t), { msg: e, type: "warning" }));
  },
  hide() {
    Ho();
  },
  install(e) {
    e.use(Ht);
  }
}, Cm = { class: "nut-switch-button" }, Ro = /* @__PURE__ */ Ce({
  name: "NutSwitch",
  __name: "switch",
  props: {
    modelValue: { type: [String, Number, Boolean], default: !1 },
    disabled: { type: Boolean, default: !1 },
    activeColor: { default: "" },
    inactiveColor: { default: "" },
    activeText: { default: "" },
    inactiveText: { default: "" },
    activeValue: { type: [String, Number, Boolean], default: !0 },
    inactiveValue: { type: [String, Number, Boolean], default: !1 },
    loading: { type: Boolean, default: !1 },
    disable: { type: Boolean, default: !1 }
  },
  emits: ["change", "update:modelValue", "update:loading"],
  setup(e, { emit: t }) {
    const n = e, l = t, o = N(() => n.disabled || n.disable), a = Ze(o), s = N(() => n.modelValue === n.activeValue), r = N(() => {
      const y = "nut-switch";
      return {
        [y]: !0,
        [s.value ? "nut-switch-open" : "nut-switch-close"]: !0,
        [`${y}-disabled`]: a.value,
        [`${y}-base`]: !0
      };
    }), i = N(() => ({
      backgroundColor: s.value ? n.activeColor : n.inactiveColor
    }));
    let p = "";
    const f = (y) => {
      if (n.loading || a.value)
        return;
      const v = s.value ? n.inactiveValue : n.activeValue;
      p = "click", l("update:modelValue", v), l("change", v, y);
    };
    return x(
      () => n.modelValue,
      (y) => {
        p == "click" ? p = "" : l("change", y);
      }
    ), (y, v) => (c(), d("view", {
      class: P(r.value),
      style: A(i.value),
      onClick: f
    }, [
      g("view", Cm, [
        y.loading ? _(y.$slots, "icon", { key: 0 }, () => [
          oe(ye(ya), {
            name: "loading",
            color: y.activeColor
          }, null, 8, ["color"])
        ]) : T("", !0),
        y.activeText ? (c(), d(Q, { key: 1 }, [
          Ie(g("view", { class: "nut-switch-label open" }, E(y.activeText), 513), [
            [Me, s.value]
          ]),
          Ie(g("view", { class: "nut-switch-label close" }, E(y.inactiveText), 513), [
            [Me, !s.value]
          ])
        ], 64)) : T("", !0)
      ])
    ], 6));
  }
});
Te(Ro);
const { create: Sm } = q("toast"), Tm = Sm({
  components: {},
  props: {
    id: String,
    msg: String,
    duration: {
      type: Number,
      default: 2e3
    },
    center: {
      type: Boolean,
      default: !0
    },
    type: {
      type: String,
      default: "text"
    },
    customClass: String,
    bottom: {
      type: String,
      default: "30px"
    },
    size: {
      type: [String, Number],
      default: "base"
    },
    icon: {
      type: Object,
      default: null
    },
    textAlignCenter: {
      type: Boolean,
      default: !0
    },
    loadingRotate: {
      type: Boolean,
      default: !0
    },
    bgColor: {
      type: String,
      default: ""
    },
    onClose: Function,
    unmount: Function,
    cover: {
      type: Boolean,
      default: !1
    },
    coverColor: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    let n;
    const l = fe({
      mounted: !1
    });
    be(() => {
      l.mounted = !0;
    });
    const o = () => {
      n && (clearTimeout(n), n = null);
    }, a = () => {
      l.mounted = !1;
    }, s = () => {
      o(), e.duration && (n = window.setTimeout(() => {
        a();
      }, e.duration));
    }, r = () => {
      e.closeOnClickOverlay && (a(), t("close"));
    };
    e.duration && s(), x(
      () => e.duration,
      (v) => {
        v && s();
      }
    );
    const i = N(() => e.type !== "text" ? !0 : e.icon !== null), p = N(() => [
      "nut-toast",
      { "nut-toast-center": e.center },
      { "nut-toast-has-icon": i.value },
      { "nut-toast-cover": e.cover },
      { "nut-toast-loading": e.type === "loading" },
      e.customClass,
      "nut-toast-" + e.size
    ]), f = N(() => ["nut-toast-icon-wrapper", { "nut-toast-icon-no-animation": !e.loadingRotate }]);
    return {
      state: l,
      hide: a,
      clickCover: r,
      hasIcon: i,
      toastBodyClass: p,
      toastIconWrapperClass: f,
      onAfterLeave: () => {
        var v;
        o(), (v = e.unmount) == null || v.call(e, e.id), e.onClose && e.onClose();
      },
      renderIcon: lt
    };
  }
}), Nm = {
  key: 1,
  class: "nut-toast-title"
}, Dm = ["innerHTML"];
function _m(e, t, n, l, o, a) {
  return c(), J(xt, {
    name: "toast-fade",
    onAfterLeave: e.onAfterLeave
  }, {
    default: ne(() => [
      Ie(g("view", {
        class: P(e.toastBodyClass),
        style: A({
          bottom: e.center ? "auto" : e.bottom,
          "background-color": e.coverColor
        }),
        onClick: t[0] || (t[0] = (...s) => e.clickCover && e.clickCover(...s))
      }, [
        g("view", {
          class: "nut-toast-inner",
          style: A({
            "text-align": e.textAlignCenter ? "center" : "left",
            "background-color": e.bgColor
          })
        }, [
          e.hasIcon ? (c(), d("view", {
            key: 0,
            class: P(e.toastIconWrapperClass)
          }, [
            (c(), J(Oe(e.renderIcon(e.icon)), { color: "#ffffff" }))
          ], 2)) : T("", !0),
          e.title ? (c(), d("div", Nm, E(e.title), 1)) : T("", !0),
          g("view", {
            class: "nut-toast-text",
            innerHTML: e.msg
          }, null, 8, Dm)
        ], 4)
      ], 6), [
        [Me, e.state.mounted]
      ])
    ]),
    _: 1
  }, 8, ["onAfterLeave"]);
}
const Rt = /* @__PURE__ */ ee(Tm, [["render", _m]]), Qt = {
  msg: "",
  id: "",
  duration: 2e3,
  //显示时间(毫秒)
  center: !0,
  // 未实现
  type: "text",
  title: "",
  customClass: "",
  bottom: "30px",
  size: "base",
  iconSize: "20",
  icon: null,
  textAlignCenter: !0,
  // 未实现
  loadingRotate: !0,
  // 未实现
  bgColor: "",
  onClose: null,
  // 未实现
  unmount: null,
  cover: !1,
  //透明遮罩层 // 未实现
  coverColor: "",
  // 未实现
  closeOnClickOverlay: !1
  // 未实现
};
let ct = [], bt = [];
const Fo = (e) => {
  if (e) {
    const t = document.getElementById(e);
    bt = bt.filter((n) => n.id !== e), ct = ct.filter((n) => n !== e), t && document.body.removeChild(t);
  } else
    ct.forEach((t) => {
      const n = document.getElementById(t);
      n && document.body.removeChild(n);
    }), bt = [], ct = [];
}, Im = (e) => {
  const t = document.getElementById(e.id);
  if (t) {
    const n = bt.find((o) => o.id === e.id);
    n ? e = Z(Z(Z({}, Qt), n), e) : e = Z(Z({}, Qt), e);
    const l = oe(Rt, e);
    return tn(l, t), Wo;
  }
}, vt = (e) => {
  e.unmount = Fo;
  let t;
  if (e.id) {
    if (t = e.id, ct.find((n) => n === e.id))
      return Im(e);
  } else
    t = (/* @__PURE__ */ new Date()).getTime() + "";
  return e = Z(Z({}, Qt), e), e.id = t, ct.push(e.id), bt.push(e), an(e, {
    wrapper: Rt
  }), Wo;
}, Mt = (e) => {
  if (!e) {
    console.warn("[NutUI Toast]: msg不能为空");
    return;
  }
}, Wo = {
  text(e, t = {}) {
    return Mt(e), vt(ce(Z({}, t), { type: "text", msg: e }));
  },
  success(e, t = {}) {
    return Mt(e), vt(ce(Z({ icon: Yr }, t), { msg: e, type: "success" }));
  },
  fail(e, t = {}) {
    return Mt(e), vt(ce(Z({ icon: to }, t), { msg: e, type: "fail" }));
  },
  warn(e, t = {}) {
    return Mt(e), vt(ce(Z({ icon: no }, t), { msg: e, type: "warn" }));
  },
  loading(e, t = {}) {
    return vt(ce(Z({
      icon: rt
    }, t), {
      msg: e,
      type: "loading"
    }));
  },
  hide(e) {
    Fo(e);
  },
  install(e) {
    e.use(Rt);
  }
}, { create: Bm } = q("audio"), Mm = Bm({
  props: {
    url: {
      type: String,
      default: ""
    },
    // 静音
    muted: {
      type: Boolean,
      default: !1
    },
    // 自动播放
    autoplay: {
      type: Boolean,
      default: !1
    },
    // 循环播放
    loop: {
      type: Boolean,
      default: !1
    },
    // 是否预加载音频
    preload: {
      type: String,
      default: "auto"
    },
    /* 总时长秒数 */
    second: {
      type: Number,
      default: 0
    },
    // 展示的形式   controls 控制面板   progress 进度条  icon 图标 none 自定义
    type: {
      type: String,
      default: "progress"
    }
  },
  components: {
    Service: Pr,
    NutRange: Do
  },
  emits: ["fastBack", "play", "forward", "ended", "changeProgress", "mute", "canPlay"],
  setup(e, { emit: t, slots: n }) {
    const l = z(null), o = fe({
      currentTime: 0,
      currentDuration: "00:00:00",
      percent: 0,
      duration: "00:00:00",
      second: 0,
      hanMuted: e.muted,
      playing: e.autoplay,
      handPlaying: !1
    });
    be(() => {
      var k = ["webkitVisibilityState", "visibilitychange"];
      try {
        for (let u = 0; u < k.length; u++)
          document.addEventListener(k[u], () => {
            document.hidden ? l.value.pause() : o.playing && setTimeout(() => {
              l.value.play();
            }, 200);
          });
      } catch (u) {
        console.log(u.message);
      }
    });
    const a = (k) => {
      const u = l.value;
      e.autoplay && u && u.paused && u.play(), o.second = u.duration, o.duration = $(u.duration), t("canPlay", k);
    }, s = (k) => {
      o.currentTime = parseInt(k.target.currentTime);
    }, r = () => {
      o.currentTime > 0 && o.currentTime--, l.value.currentTime = o.currentTime, t("fastBack", o.currentTime);
    }, i = () => {
      const k = l.value;
      o.playing ? (k.pause(), o.handPlaying = !1) : (k.play(), o.handPlaying = !0), o.playing = !o.playing, t("play", o.playing);
    }, p = () => {
      o.currentTime++, l.value.currentTime = o.currentTime, t("forward", o.currentTime);
    }, f = (k) => {
      o.currentDuration = $(k), o.percent = k / o.second * 100;
    }, y = () => {
      o.playing = !1, t("ended");
    }, v = (k) => {
      const u = l.value;
      u.currentTime = o.second * k / 100, t("changeProgress", u.currentTime);
    }, b = () => {
      o.hanMuted = !o.hanMuted, t("mute", o.hanMuted);
    }, $ = (k) => {
      if (!k)
        return "00:00:00";
      let u = parseInt(k), h = Math.floor(u / 3600), m = Math.floor((u - h * 3600) / 60), w = u - h * 3600 - m * 60, I = "";
      return I += ("0" + h.toString()).slice(-2) + ":", I += ("0" + m.toString()).slice(-2) + ":", I += ("0" + w.toString()).slice(-2), I;
    };
    return x(
      () => o.currentTime,
      (k) => {
        f(k);
      }
    ), ze("audioParent", {
      children: [],
      props: e,
      audioData: o,
      handleMute: b,
      forward: p,
      fastBack: r,
      changeStatus: i
    }), ce(Z(Z({}, ge(e)), ge(o)), {
      audioRef: l,
      fastBack: r,
      forward: p,
      changeStatus: i,
      progressChange: v,
      audioEnd: y,
      onTimeupdate: s,
      handleMute: b,
      onCanplay: a,
      slots: n
    });
  }
}), Lm = { class: "nut-audio" }, Pm = {
  key: 0,
  class: "nut-audio__progress"
}, Em = { class: "nut-audio__time" }, Am = { class: "nut-audio__bar" }, zm = /* @__PURE__ */ g("div", { class: "nut-audio__button--custom" }, null, -1), Vm = { class: "nut-audio__time" }, Om = {
  key: 1,
  class: "nut-audio__icon"
}, Hm = ["controls", "src", "preload", "autoplay", "loop", "muted"];
function Rm(e, t, n, l, o, a) {
  const s = U("nut-range"), r = U("Service");
  return c(), d("div", Lm, [
    e.type == "progress" ? (c(), d("div", Pm, [
      g("div", Em, E(e.currentDuration), 1),
      g("div", Am, [
        oe(s, {
          modelValue: e.percent,
          "onUpdate:modelValue": t[0] || (t[0] = (i) => e.percent = i),
          "hidden-range": "",
          "inactive-color": "#cccccc",
          "active-color": "#fa2c19",
          onChange: e.progressChange
        }, {
          button: ne(() => [
            zm
          ]),
          _: 1
        }, 8, ["modelValue", "onChange"])
      ]),
      g("div", Vm, E(e.duration), 1)
    ])) : T("", !0),
    e.type == "icon" ? (c(), d("div", Om, [
      g("div", {
        class: P(["nut-audio__icon--box", e.playing ? "nut-audio__icon--play" : "nut-audio__icon--stop"]),
        onClick: t[1] || (t[1] = (...i) => e.changeStatus && e.changeStatus(...i))
      }, [
        e.playing ? (c(), J(r, {
          key: 0,
          class: "nut-icon-am-rotate nut-icon-am-infinite"
        })) : (c(), J(r, { key: 1 }))
      ], 2)
    ])) : T("", !0),
    e.type == "none" ? (c(), d("div", {
      key: 2,
      onClick: t[2] || (t[2] = (...i) => e.changeStatus && e.changeStatus(...i))
    }, [
      _(e.$slots, "default")
    ])) : T("", !0),
    e.type != "none" ? _(e.$slots, "default", { key: 3 }) : T("", !0),
    g("audio", {
      ref: "audioRef",
      class: "audioMain",
      controls: e.type == "controls",
      src: e.url,
      preload: e.preload,
      autoplay: e.autoplay,
      loop: e.loop,
      muted: e.hanMuted,
      onTimeupdate: t[3] || (t[3] = (...i) => e.onTimeupdate && e.onTimeupdate(...i)),
      onCanplay: t[4] || (t[4] = (...i) => e.onCanplay && e.onCanplay(...i)),
      onEnded: t[5] || (t[5] = (...i) => e.audioEnd && e.audioEnd(...i))
    }, null, 40, Hm)
  ]);
}
const Fm = /* @__PURE__ */ ee(Mm, [["render", Rm]]), { create: Wm } = q("audio-operate"), Ym = "NutAudioOperate", jm = Wm({
  props: {
    // 展示的形式   back 倒退   play 开始 or 暂停  forward 快进 mute 静音
    type: {
      type: String,
      default: () => "play"
    }
  },
  components: {
    NutButton: qe
  },
  emits: ["click"],
  setup(e) {
    const t = Se(Ym), n = Ee("audioParent"), l = fe(n), o = z(at().default);
    return ce(Z(Z({}, ge(e)), ge(l)), { customSlot: o, translate: t });
  }
}), Km = { class: "nut-audio-operate" };
function Um(e, t, n, l, o, a) {
  const s = U("nut-button");
  return c(), d("div", Km, [
    e.type == "back" ? (c(), d("div", {
      key: 0,
      class: "nut-audio-operate-item",
      onClick: t[0] || (t[0] = (...r) => e.fastBack && e.fastBack(...r))
    }, [
      e.customSlot ? T("", !0) : (c(), J(s, {
        key: 0,
        type: "primary",
        size: "small"
      }, {
        default: ne(() => [
          he(E(e.translate("back")), 1)
        ]),
        _: 1
      })),
      _(e.$slots, "default")
    ])) : T("", !0),
    e.type == "play" ? (c(), d("div", {
      key: 1,
      class: "nut-audio-operate-item",
      onClick: t[1] || (t[1] = (...r) => e.changeStatus && e.changeStatus(...r))
    }, [
      e.customSlot ? T("", !0) : (c(), J(s, {
        key: 0,
        type: "primary",
        size: "small"
      }, {
        default: ne(() => [
          he(E(e.audioData.playing ? `${e.translate("pause")}` : `${e.translate("start")}`), 1)
        ]),
        _: 1
      })),
      _(e.$slots, "default")
    ])) : T("", !0),
    e.type == "forward" ? (c(), d("div", {
      key: 2,
      class: "nut-audio-operate-item",
      onClick: t[2] || (t[2] = (...r) => e.forward && e.forward(...r))
    }, [
      e.customSlot ? T("", !0) : (c(), J(s, {
        key: 0,
        type: "primary",
        size: "small"
      }, {
        default: ne(() => [
          he("快进")
        ]),
        _: 1
      })),
      _(e.$slots, "default")
    ])) : T("", !0),
    e.type == "mute" ? (c(), d("div", {
      key: 3,
      class: "nut-audio-operate-item",
      onClick: t[3] || (t[3] = (...r) => e.handleMute && e.handleMute(...r))
    }, [
      e.customSlot ? T("", !0) : (c(), J(s, {
        key: 0,
        type: e.audioData.hanMuted ? "default" : "primary",
        size: "small"
      }, {
        default: ne(() => [
          he(E(e.translate("mute")), 1)
        ]),
        _: 1
      }, 8, ["type"])),
      _(e.$slots, "default")
    ])) : T("", !0)
  ]);
}
const Xm = /* @__PURE__ */ ee(jm, [["render", Um]]), Yo = Symbol("nut-avatar"), { create: qm } = q("avatar"), Zm = qm({
  props: {
    size: {
      type: [String, Number],
      default: "normal"
    },
    shape: {
      type: String,
      default: "round"
    },
    bgColor: {
      type: String,
      default: "#eee"
    },
    color: {
      type: String,
      default: "#666"
    }
  },
  setup(e) {
    const { size: t, shape: n, bgColor: l, color: o } = ge(e), a = ["large", "normal", "small"], s = Ee(Yo, null), r = z(null), i = N(() => {
      var y, v;
      return {
        ["nut-avatar"]: !0,
        [`nut-avatar-${t.value || ((y = s == null ? void 0 : s.props) == null ? void 0 : y.size) || "normal"}`]: !0,
        [`nut-avatar-${n.value || ((v = s == null ? void 0 : s.props) == null ? void 0 : v.shape) || "round"}`]: !0
      };
    }), p = N(() => {
      var f, y;
      return {
        width: t.value in a ? "" : `${t.value}px`,
        height: t.value in a ? "" : `${t.value}px`,
        backgroundColor: `${l.value}`,
        color: `${o.value}`,
        marginLeft: (f = s == null ? void 0 : s.props) != null && f.span ? `${(y = s == null ? void 0 : s.props) == null ? void 0 : y.span}px` : ""
      };
    });
    return {
      classes: i,
      styles: p,
      avatarRef: r
    };
  }
});
function Gm(e, t, n, l, o, a) {
  return c(), d("view", {
    ref: "avatarRef",
    style: A(e.styles),
    class: P(e.classes)
  }, [
    _(e.$slots, "default")
  ], 6);
}
const hn = /* @__PURE__ */ ee(Zm, [["render", Gm]]), { create: Jm } = q("avatar-group"), Qm = Jm({
  components: {
    NutAvatar: hn
  },
  props: {
    maxContent: {
      type: String,
      default: ""
    },
    maxCount: {
      type: [Number, String],
      default: ""
    },
    maxBgColor: {
      type: String,
      default: "#eee"
    },
    maxColor: {
      type: String,
      default: "#666"
    },
    size: {
      type: [String, Number],
      default: "normal"
    },
    shape: {
      type: String,
      default: "round"
    },
    span: {
      type: [String, Number],
      default: "-8"
    },
    zIndex: {
      type: String,
      default: "left"
    }
  },
  setup(e) {
    const t = z(null), n = z(99), l = z(), o = N(() => ({
      marginLeft: -1 * Number(e.span) + "px"
    })), a = (r) => {
      let i = 0;
      r && r.$el && (r = r.$el);
      const p = r.children;
      if (e.zIndex === "right")
        for (let f = 0; f < Number(e.maxCount); f++) {
          const y = p[f];
          y.style.zIndex = `${99 - f}`;
        }
      for (let f = Number(e.maxCount); f < p.length; f++) {
        const y = p[f];
        y.className.includes("avater-fold") || (y.style.display = "none", i++);
      }
      n.value = i;
    }, s = (r) => {
      const i = { attributes: !1, childList: !0, subtree: !0 }, p = function(y) {
        let v = !1;
        for (let b of y)
          if (b.type === "childList") {
            v = !0;
            break;
          }
        v && a(r);
      }, f = new MutationObserver(p);
      return f.observe(r, i), f;
    };
    return be(() => {
      e.maxCount && Ne(() => {
        let r = ye(t);
        r && r.$el && (r = r.$el), a(r), l.value = s(r);
      });
    }), Xe(() => {
      var r;
      (r = l.value) == null || r.disconnect();
    }), ze(Yo, {
      props: e,
      avatarGroupRef: t
    }), {
      styles: o,
      foldCount: n,
      avatarGroupRef: t
    };
  }
});
function xm(e, t, n, l, o, a) {
  const s = U("nut-avatar");
  return c(), d("view", {
    ref: "avatarGroupRef",
    class: "nut-avatar-group",
    style: A(e.styles)
  }, [
    _(e.$slots, "default"),
    e.foldCount > 0 ? (c(), J(s, {
      key: 0,
      class: "avater-fold",
      color: e.maxColor,
      "bg-color": e.maxBgColor,
      size: e.size,
      shape: e.shape,
      style: A({ magrinLeft: `${e.span}px` })
    }, {
      default: ne(() => [
        he(E(e.maxContent || e.foldCount), 1)
      ]),
      _: 1
    }, 8, ["color", "bg-color", "size", "shape", "style"])) : T("", !0)
  ], 4);
}
const eh = /* @__PURE__ */ ee(Qm, [["render", xm]]);
var Pt = /* @__PURE__ */ ((e) => (e[e.eq = 1] = "eq", e[e.lt = 2] = "lt", e[e.gt = 3] = "gt", e))(Pt || {});
function th(e, t, n) {
  let l = 0, o = e.length - 1, a = null;
  for (; l <= o; ) {
    a = Math.floor((l + o) / 2);
    const s = e[a], r = n(s, t);
    if (r === 1)
      return a;
    r === 2 ? l = a + 1 : r === 3 && (o = a - 1);
  }
  return a;
}
const { create: nh } = q("list"), oh = nh({
  props: {
    listData: {
      type: Array,
      default: () => []
    },
    bufferSize: {
      type: Number,
      default: 5
    },
    containerHeight: {
      type: Number
    },
    height: {
      type: Number,
      default: 80
    },
    margin: {
      type: Number,
      default: 10
    }
  },
  emits: ["scrollUp", "scrollDown", "scrollBottom"],
  setup(e, { emit: t }) {
    const n = document.documentElement.clientHeight || document.body.clientHeight || 667, l = z(null), o = z(null), a = z(null), s = fe({
      start: 0,
      originStartIndex: 0,
      scrollTop: 0,
      list: e.listData.slice(),
      cachePositions: [],
      phantomHeight: e.height * e.listData.length
    }), r = N(() => e.containerHeight ? Math.min(e.containerHeight, n) : n), i = N(() => Math.ceil(r.value / e.height)), p = N(() => Math.min(s.originStartIndex + i.value + e.bufferSize, s.list.length)), f = N(() => s.list.slice(s.start, p.value)), y = () => {
      if (a.value)
        return `translate3d(0, ${s.start >= 1 ? s.cachePositions[s.start - 1].bottom : 0}px, 0)`;
    }, v = () => {
      s.cachePositions = [];
      for (let h = 0; h < s.list.length; ++h)
        s.cachePositions[h] = {
          index: h,
          height: e.height,
          top: h * e.height,
          bottom: (h + 1) * (e.height + e.margin),
          dValue: 0
        };
    }, b = () => {
      let h = a.value.childNodes;
      h = Array.from(h).filter((M) => M.nodeType === 1);
      const m = h[0];
      h.forEach((M, S) => {
        if (!M)
          return;
        const C = Ye(M), { height: D } = C, j = s.cachePositions[S + s.start].height - D;
        j && (s.cachePositions[S + s.start].bottom -= j, s.cachePositions[S + s.start].height = D, s.cachePositions[S + s.start].dValue = j);
      });
      let w = 0;
      m && (w = s.start);
      const I = s.cachePositions.length;
      let B = s.cachePositions[w].dValue;
      s.cachePositions[w].dValue = 0;
      for (let M = w + 1; M < I; ++M) {
        const S = s.cachePositions[M];
        s.cachePositions[M].top = s.cachePositions[M - 1].bottom, s.cachePositions[M].bottom = s.cachePositions[M].bottom - B, S.dValue !== 0 && (B += S.dValue, S.dValue = 0);
      }
      const L = s.cachePositions[I - 1].bottom;
      s.phantomHeight = L;
    }, $ = (h = 0) => {
      let m = th(
        s.cachePositions,
        h,
        (I, B) => {
          const L = I.bottom;
          return L === B ? Pt.eq : L < B ? Pt.lt : Pt.gt;
        }
      );
      return s.cachePositions[m].bottom < h && (m += 1), m;
    }, k = () => {
      s.originStartIndex = 0, s.start = 0, s.scrollTop = 0, l.value.scrollTop = 0, v(), s.phantomHeight = e.height * s.list.length;
    }, u = () => {
      var I;
      const h = (I = l.value) == null ? void 0 : I.scrollTop, { originStartIndex: m } = s, w = $(h);
      w !== m && (s.originStartIndex = w, s.start = Math.max(s.originStartIndex - e.bufferSize, 0), p.value >= s.list.length - 1 && t("scrollBottom")), t(h > s.scrollTop ? "scrollUp" : "scrollDown", h), s.scrollTop = h;
    };
    return v(), x(
      () => e.listData,
      (h) => {
        if (s.list = h.slice(), s.list.length === h.length)
          v(), b();
        else {
          k();
          return;
        }
      }
    ), x(
      () => s.start,
      () => {
        a.value && s.list.length > 0 && b();
      }
    ), ce(Z({}, ge(s)), {
      list: l,
      phantom: o,
      actualContent: a,
      getTransform: y,
      visibleData: f,
      getContainerHeight: r,
      handleScrollEvent: u
    });
  }
});
function lh(e, t, n, l, o, a) {
  return c(), d("div", {
    ref: "list",
    class: "nut-list",
    style: A({ height: `${e.getContainerHeight}px` }),
    onScrollPassive: t[0] || (t[0] = (...s) => e.handleScrollEvent && e.handleScrollEvent(...s))
  }, [
    g("div", {
      ref: "phantom",
      class: "nut-list-phantom",
      style: A({ height: e.phantomHeight + "px" })
    }, null, 4),
    g("div", {
      ref: "actualContent",
      class: "nut-list-container",
      style: A({ transform: e.getTransform() })
    }, [
      (c(!0), d(Q, null, ie(e.visibleData, (s, r) => (c(), d("div", {
        key: s,
        class: "nut-list-item"
      }, [
        _(e.$slots, "default", {
          item: s,
          index: r + e.start
        })
      ]))), 128))
    ], 4)
  ], 36);
}
const sh = /* @__PURE__ */ ee(oh, [["render", lh]]), ah = { viewBox: "0 0 100 100" }, rh = ["id"], ih = ["offset", "stop-color"], uh = ["d", "stroke-width"], ch = ["d", "stroke", "stroke-linecap", "stroke-width"], dh = { class: "nut-circle-progress__text" }, jo = /* @__PURE__ */ Ce({
  name: "NutCircleProgress",
  __name: "circle-progress",
  props: {
    progress: { default: 0 },
    strokeWidth: { default: 5 },
    radius: { default: 50 },
    strokeLinecap: { default: "round" },
    color: { default: "#fa2c19" },
    pathColor: { default: "#d9d9d9" },
    clockwise: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, n = Math.random().toString(36).slice(-8), l = N(() => {
      const i = t.clockwise ? 1 : 0;
      return `M 50 50 m 0 -45 a 45 45 0 1 ${i} 0 90 a 45 45 0 1, ${i} 0 -90`;
    }), o = N(() => dt(t.color) ? `url(#${n})` : t.color), a = N(() => {
      let i = 283, p = i * Number(t.progress) / 100;
      return {
        stroke: dt(t.color) ? `url(#${n})` : t.color,
        strokeDasharray: `${p}px ${i}px`
      };
    }), s = N(() => ({
      stroke: t.pathColor
    })), r = N(() => {
      if (!dt(t.color))
        return;
      let i = t.color;
      const p = Object.keys(i).sort((y, v) => parseFloat(y) - parseFloat(v));
      let f = [];
      return p.map((y) => {
        let v = {
          key: "",
          value: ""
        };
        v.key = y, v.value = i[y], f.push(v);
      }), f;
    });
    return (i, p) => (c(), d("div", {
      class: "nut-circle-progress",
      style: A({ height: Number(i.radius) * 2 + "px", width: Number(i.radius) * 2 + "px" })
    }, [
      (c(), d("svg", ah, [
        g("defs", null, [
          g("linearGradient", {
            id: ye(n),
            x1: "100%",
            y1: "0%",
            x2: "0%",
            y2: "0%"
          }, [
            (c(!0), d(Q, null, ie(r.value, (f, y) => (c(), d("stop", {
              key: y,
              offset: f.key,
              "stop-color": f.value
            }, null, 8, ih))), 128))
          ], 8, rh)
        ]),
        g("path", {
          class: "nut-circle-progress__path",
          style: A(s.value),
          d: l.value,
          fill: "none",
          "stroke-width": i.strokeWidth
        }, " > ", 12, uh),
        g("path", {
          class: "nut-circle-progress__hover",
          style: A(a.value),
          d: l.value,
          fill: "none",
          stroke: o.value,
          "stroke-linecap": i.strokeLinecap,
          "stroke-width": i.strokeWidth
        }, null, 12, ch)
      ])),
      g("div", dh, [
        _(i.$slots, "default", {}, () => [
          g("div", null, E(i.progress) + "%", 1)
        ])
      ])
    ], 4));
  }
});
Te(jo);
const { create: fh } = q("noticebar"), ph = fh({
  props: {
    direction: {
      type: String,
      default: "across"
    },
    list: {
      type: Array,
      default: () => []
    },
    standTime: {
      type: Number,
      default: 1e3
    },
    complexAm: {
      type: Boolean,
      default: !1
    },
    height: {
      type: Number,
      default: 40
    },
    text: {
      type: String,
      default: ""
    },
    closeMode: {
      type: Boolean,
      default: !1
    },
    wrapable: {
      type: Boolean,
      default: !1
    },
    leftIcon: { type: Boolean, default: !0 },
    color: {
      type: String,
      default: ""
    },
    background: {
      type: String,
      default: ""
    },
    delay: {
      type: [String, Number],
      default: 1
    },
    scrollable: {
      type: Boolean,
      default: null
    },
    speed: {
      type: Number,
      default: 50
    }
  },
  components: {
    ScrollItem: function(e) {
      return e.item.props.style = e.style, e.item.key = e.key, we(e.item);
    },
    Notice: qa,
    CircleClose: on
  },
  emits: ["click", "close", "acrossEnd"],
  setup(e, { emit: t, slots: n }) {
    const l = z(null), o = z(null), a = fe({
      wrapWidth: 0,
      firstRound: !0,
      duration: 0,
      offsetWidth: 0,
      showNoticebar: !0,
      animationClass: "",
      animate: !1,
      scrollList: [],
      distance: 0,
      timer: null,
      keepAlive: !1,
      isCanScroll: null,
      showNotica: !0
    }), s = N(() => a.isCanScroll == null ? e.wrapable : !a.isCanScroll && !e.wrapable), r = N(() => ({
      "nut-noticebar__page-wrap-content": !0,
      "nut-ellipsis": s.value,
      [a.animationClass]: !0
    })), i = N(() => {
      let M = {};
      return e.color && (M.color = e.color), e.background && (M.background = e.background), e.direction == "vertical" && (M.height = `${e.height}px`), M;
    }), p = N(() => ({
      animationDelay: (a.firstRound ? e.delay : 0) + "s",
      animationDuration: a.duration + "s",
      transform: `translateX(${a.firstRound ? 0 : a.wrapWidth + "px"})`
    })), f = N(() => {
      let M = {};
      if (e.complexAm)
        M = {
          transform: `translateY(${a.distance}px)`
        };
      else if (a.animate) {
        let S = ~~(e.height / e.speed / 4);
        M = {
          transition: `all ${S == 0 ? ~~(e.height / e.speed) : S}s`,
          "margin-top": `-${e.height}px`
        };
      }
      return M;
    });
    x(
      () => e.text,
      () => {
        y();
      }
    ), x(
      () => e.list,
      (M) => {
        a.scrollList = [].concat(M);
      }
    );
    const y = () => {
      a.showNoticebar != !1 && setTimeout(() => {
        if (!l.value || !o.value)
          return;
        const M = l.value.getBoundingClientRect().width, S = o.value.getBoundingClientRect().width;
        a.isCanScroll = e.scrollable == null ? S > M : e.scrollable, a.isCanScroll ? (a.wrapWidth = M, a.offsetWidth = S, a.duration = S / e.speed, a.animationClass = "play") : a.animationClass = "";
      }, 0);
    }, v = (M) => {
      t("click", M);
    }, b = (M) => {
      e.closeMode && (a.showNoticebar = !e.closeMode), t("close", M);
    }, $ = (M) => {
      a.firstRound = !1, t("acrossEnd", M), setTimeout(() => {
        a.duration = (a.offsetWidth + a.wrapWidth) / e.speed, a.animationClass = "play-infinite";
      }, 0);
    }, k = () => {
      u(), a.timer = setInterval(u, ~~(e.height / e.speed / 4 * 1e3) + e.standTime);
    }, u = () => {
      a.animate = !0, setTimeout(
        () => {
          a.scrollList.push(a.scrollList[0]), a.scrollList.shift(), a.animate = !1;
        },
        ~~(e.height / e.speed / 4 * 1e3)
      );
    }, h = () => {
      a.timer = setInterval(
        () => {
          let M = 100;
          for (let S = 0; S < M; S++)
            m(S, !(S < M - 1));
        },
        e.standTime + 100 * e.speed
      );
    }, m = (M, S) => {
      setTimeout(() => {
        a.distance -= e.height / 100, S && (a.scrollList.push(a.scrollList[0]), a.scrollList.shift(), a.distance = 0);
      }, M * e.speed);
    }, w = (M) => {
      t("click", M);
    }, I = () => {
      e.closeMode && (a.showNoticebar = !e.closeMode), t("close", a.scrollList[0]);
    };
    be(() => {
      e.direction == "vertical" ? (n.default ? (B(), L()) : a.scrollList = [].concat(e.list), setTimeout(() => {
        e.complexAm ? h() : k();
      }, e.standTime)) : y();
    });
    const B = () => {
      n.default && (a.scrollList = [].concat(n.default()[0].children));
    }, L = () => {
      setTimeout(() => {
        var M = new MutationObserver(() => {
          a.showNotica = !1, setTimeout(() => {
            a.showNotica = !0;
          }), B();
        });
        const S = document.getElementsByClassName("nut-noticebar-custom-item")[0];
        S && M.observe(S, {
          childList: !0,
          subtree: !0
        });
      }, 100);
    };
    return Ct(() => {
      a.keepAlive && (a.keepAlive = !1);
    }), St(() => {
      a.keepAlive = !0, clearInterval(a.timer);
    }), Xe(() => {
      clearInterval(a.timer);
    }), ce(Z({}, ge(a)), {
      isEllipsis: s,
      barStyle: i,
      contentStyle: p,
      horseLampStyle: f,
      wrap: l,
      content: o,
      handleClick: v,
      onClickIcon: b,
      onAnimationEnd: $,
      go: w,
      handleClickIcon: I,
      slots: n,
      pxCheck: Be,
      wrapContentClass: r
    });
  }
}), mh = { class: "nut-noticebar" }, hh = {
  key: 0,
  class: "nut-noticebar__page-lefticon"
}, gh = {
  ref: "wrap",
  class: "nut-noticebar__page-wrap"
}, vh = { class: "showNotica" }, yh = { class: "nut-noticebar-custom-item" }, bh = ["onClick"];
function $h(e, t, n, l, o, a) {
  const s = U("Notice"), r = U("CircleClose"), i = U("ScrollItem");
  return c(), d("view", mh, [
    e.direction == "across" ? Ie((c(), d("view", {
      key: 0,
      class: P(["nut-noticebar__page", {
        "nut-noticebar__page--withicon": e.closeMode,
        "nut-noticebar__page--close": e.closeMode,
        "nut-noticebar__page--wrapable": e.wrapable
      }]),
      style: A(e.barStyle),
      onClick: t[3] || (t[3] = (...p) => e.handleClick && e.handleClick(...p))
    }, [
      e.leftIcon ? (c(), d("view", hh, [
        _(e.$slots, "left-icon", {}, () => [
          oe(s, { size: "16px" })
        ])
      ])) : T("", !0),
      g("view", gh, [
        g("view", {
          ref: "content",
          class: P(e.wrapContentClass),
          style: A(e.contentStyle),
          onAnimationend: t[0] || (t[0] = (...p) => e.onAnimationEnd && e.onAnimationEnd(...p)),
          onWebkitAnimationEnd: t[1] || (t[1] = (...p) => e.onAnimationEnd && e.onAnimationEnd(...p))
        }, [
          _(e.$slots, "default", {}, () => [
            he(E(e.text), 1)
          ])
        ], 38)
      ], 512),
      e.closeMode || e.$slots["right-icon"] ? (c(), d("view", {
        key: 1,
        class: "nut-noticebar__page-righticon",
        onClick: t[2] || (t[2] = _e((...p) => e.onClickIcon && e.onClickIcon(...p), ["stop"]))
      }, [
        e.$slots["right-icon"] ? _(e.$slots, "right-icon", { key: 0 }) : (c(), J(r, { key: 1 }))
      ])) : T("", !0)
    ], 6)), [
      [Me, e.showNoticebar]
    ]) : T("", !0),
    e.scrollList.length > 0 && e.direction == "vertical" && e.showNoticebar ? (c(), d("view", {
      key: 1,
      class: "nut-noticebar__vertical",
      style: A(e.barStyle)
    }, [
      e.slots.default ? (c(), d(Q, { key: 0 }, [
        g("view", {
          class: "nut-noticebar__vertical-list",
          style: A(e.horseLampStyle)
        }, [
          g("div", vh, [
            (c(!0), d(Q, null, ie(e.scrollList, (p, f) => (c(), J(i, {
              key: f,
              style: A({ height: e.height + "px", "line-height": e.height + "px" }),
              item: p
            }, null, 8, ["style", "item"]))), 128))
          ])
        ], 4),
        g("view", yh, [
          _(e.$slots, "default")
        ])
      ], 64)) : (c(), d("ul", {
        key: 1,
        class: "nut-noticebar__vertical-list",
        style: A(e.horseLampStyle)
      }, [
        (c(!0), d(Q, null, ie(e.scrollList, (p, f) => (c(), d("li", {
          key: f,
          class: "nut-noticebar__vertical-item",
          style: A({ height: e.pxCheck(e.height), lineHeight: e.pxCheck(e.height) }),
          onClick: (y) => e.go(p)
        }, E(p), 13, bh))), 128))
      ], 4)),
      g("view", {
        class: "go",
        onClick: t[4] || (t[4] = (p) => !e.slots.rightIcon && e.handleClickIcon())
      }, [
        _(e.$slots, "right-icon", {}, () => [
          e.closeMode ? (c(), J(r, {
            key: 0,
            color: e.color,
            size: "11px"
          }, null, 8, ["color"])) : T("", !0)
        ])
      ])
    ], 4)) : T("", !0)
  ]);
}
const wh = /* @__PURE__ */ ee(ph, [["render", $h]]), kh = { class: "nut-empty" }, Ch = ["src"], Sh = { class: "nut-empty__description" }, On = "NutEmpty", Ko = /* @__PURE__ */ Ce({
  name: On,
  __name: "empty",
  props: {
    image: { default: "empty" },
    imageSize: { default: "" },
    description: { default: "" }
  },
  setup(e) {
    const t = e, n = Se(On), l = {
      empty: "https://static-ftcms.jd.com/p/files/61a9e3183985005b3958672b.png",
      error: "https://ftcms.jd.com/p/files/61a9e33ee7dcdbcc0ce62736.png",
      network: "https://static-ftcms.jd.com/p/files/61a9e31de7dcdbcc0ce62734.png"
    }, o = N(() => t.imageSize ? {
      width: Be(t.imageSize),
      height: Be(t.imageSize)
    } : {}), a = N(() => t.image.startsWith("https://") || t.image.startsWith("http://") || t.image.startsWith("//") ? t.image : l[t.image]), s = N(() => t.description || n("noData"));
    return (r, i) => (c(), d("view", kh, [
      g("view", {
        class: "nut-empty__box",
        style: A(o.value)
      }, [
        _(r.$slots, "image", {}, () => [
          a.value ? (c(), d("img", {
            key: 0,
            class: "nut-empty__box--img",
            src: a.value
          }, null, 8, Ch)) : T("", !0)
        ])
      ], 4),
      _(r.$slots, "description", {}, () => [
        g("view", Sh, E(s.value), 1)
      ]),
      _(r.$slots, "default")
    ]));
  }
});
Te(Ko);
function Hn(e, t) {
  let n = null, l = Date.now();
  return function() {
    let o = Date.now(), a = t - (o - l);
    n && clearTimeout(n), a <= 0 ? (e.apply(null, arguments), l = Date.now()) : n = setTimeout(e, a);
  };
}
const { create: Th } = q("video"), Nh = "NutVideo", Dh = Th({
  props: {
    source: {
      type: Object,
      default: {}
    },
    options: {
      type: Object,
      default: {
        autoplay: !1,
        //是否自动播放
        volume: 0.5,
        poster: "",
        loop: !1,
        controls: !0,
        muted: !1,
        //是否静音
        disabled: !1,
        //禁止操作
        playsinline: !1,
        //行内展示
        touchPlay: !1,
        preload: ""
      },
      required: !0
    },
    model: {
      type: String,
      default: ""
    }
  },
  components: {},
  emits: ["click", "play", "pause", "playend", "time"],
  setup(e, { emit: t, expose: n }) {
    const l = Se(Nh), o = fe({
      videoElm: null,
      initial: !0,
      //控制封面的显示
      showToolbox: !1,
      //控制控制器和标题的显示
      // 视频容器元素
      player: {
        $player: null,
        pos: null
      },
      // progress进度条元素
      progressBar: {
        progressElm: null,
        // 进度条DOM对象
        pos: null
      },
      // video控制显示设置
      videoSet: {
        loaded: 0,
        // 缓存长度
        displayTime: "00:00",
        // 进度时间
        totalTime: "00:00",
        // 总时间
        progress: {
          width: 0,
          // 进度条长度
          current: 0
          // 进度条当前位置
        }
      },
      state: {
        controlShow: !0,
        vol: 0.5,
        //音量
        currentTime: 0,
        //当前时间
        fullScreen: !1,
        playing: !1,
        //是否正在播放
        isLoading: !1,
        isEnd: !1,
        isError: !1,
        isMuted: !1
      },
      showTouchMask: !1
    }), a = z(null), s = N(() => e.options.disabled);
    x(
      () => e.source,
      (V) => {
        V.src && Ne(() => {
          o.videoElm.load();
        });
      },
      { immediate: !0, deep: !0 }
    ), x(
      () => e.options,
      (V) => {
        o.state.isMuted = V ? V.muted : !1;
      },
      { immediate: !0 }
    );
    const r = () => {
      o.videoElm = a.value, e.options.autoplay && setTimeout(() => {
        o.videoElm.play();
      }, 200), e.options.touchPlay && (o.showTouchMask = !0), e.options.playsinline && (o.videoElm.setAttribute("playsinline", e.options.playsinline), o.videoElm.setAttribute("webkit-playsinline", e.options.playsinline), o.videoElm.setAttribute("x5-video-player-type", "h5-page"), o.videoElm.setAttribute("x5-video-player-fullscreen", !1)), k(), o.showToolbox ? i() : (o.videoElm.addEventListener("play", () => {
        o.state.playing = !0, t("play", o.videoElm);
      }), o.videoElm.addEventListener("pause", () => {
        o.state.playing = !1, t("pause", o.videoElm);
      }), o.videoElm.addEventListener("ended", b), o.videoElm.addEventListener("timeupdate", Hn(v, 1e3)));
    }, i = () => {
      const V = a.value, j = a.value.getElementsByClassName("nut-video-controller__progress-value")[0];
      o.player.$player = V, o.progressBar.progressElm = j, o.progressBar.pos = j.getBoundingClientRect(), o.videoSet.progress.width = Math.round(j.getBoundingClientRect().width);
    }, p = () => {
      if (e.options.autoplay && e.options.disabled)
        return o.state.playing = !0, !1;
      if (o.state.playing = !o.state.playing, o.videoElm)
        if (o.state.playing)
          try {
            setTimeout(() => {
              o.videoElm.play();
            }, 200), o.videoElm.addEventListener("progress", () => {
              y();
            }), o.videoElm.addEventListener("timeupdate", Hn(v, 1e3)), o.videoElm.addEventListener("ended", b), t("play", o.videoElm);
          } catch (V) {
            $();
          }
        else
          o.videoElm.pause(), t("pause", o.videoElm);
    }, f = (V) => {
      var j = Math.floor(V / 3600);
      +j < 10 && (j = "0" + j);
      var X = Math.floor(V % 3600 / 60);
      +X < 10 && (X = "0" + X);
      var le = Math.round(V % 3600 % 60);
      +le < 10 && (le = "0" + le);
      var W = "";
      return j != 0 ? W = j + ":" + X + ":" + le : W = X + ":" + le, W;
    }, y = () => {
      o.videoSet.loaded && (o.videoSet.loaded = o.videoElm.buffered.end(0) / o.videoElm.duration * 100);
    }, v = () => {
      const V = o.videoElm.currentTime / o.videoElm.duration;
      o.videoSet.progress.current = Math.round(o.videoSet.progress.width * V), o.videoSet.totalTime = f(o.videoElm.duration), o.videoSet.displayTime = f(o.videoElm.currentTime), t("time", o.videoSet.displayTime, o.videoSet.totalTime);
    }, b = () => {
      o.state.playing = !1, o.state.isEnd = !0, o.videoSet.displayTime = "00:00", o.videoSet.progress.current = 0, o.videoElm.currentTime = 0, t("playend", o.videoElm);
    }, $ = () => {
      o.state.isError = !0;
    }, k = () => {
      o.state.vol = e.options.volume;
    }, u = () => {
      o.state.isMuted = !o.state.isMuted, o.videoElm.muted = o.state.isMuted;
    }, h = () => {
    }, m = (V) => {
      let X = V.targetTouches[0].pageX - o.progressBar.pos.left;
      X <= 0 && (X = 0), X >= o.videoSet.progress.width && (X = o.videoSet.progress.width), o.videoSet.progress.current = X;
      let le = o.videoSet.progress.current / o.videoSet.progress.width;
      o.videoElm.duration && I(le, o.videoElm.duration);
    }, w = (V) => {
      let X = V.changedTouches[0].pageX - o.progressBar.pos.left;
      o.videoSet.progress.current = X;
      let le = X / o.videoSet.progress.width;
      o.videoElm.duration && I(le, o.videoElm.duration);
    }, I = (V, j) => {
      o.videoElm.currentTime = Math.floor(V * j);
    }, B = () => {
      o.state.isError = !1, r();
    }, L = () => {
      o.state.fullScreen ? (o.state.fullScreen = !1, document.webkitCancelFullScreen()) : (o.state.fullScreen = !0, o.videoElm.webkitRequestFullScreen());
    };
    return n({
      play: p,
      pause: () => {
        o.state.playing = !1, o.videoElm.pause(), t("pause", o.videoElm);
      },
      stop: () => {
        b(), o.videoElm.pause();
      },
      muted: () => {
        o.state.isMuted = !0, o.videoElm.muted = !0;
      },
      unmuted: () => {
        o.state.isMuted = !1, o.videoElm.muted = !1;
      }
    }), be(() => {
      r();
    }), ce(Z(Z({
      root: a
    }, ge(e)), ge(o)), {
      handleError: $,
      isDisabled: s,
      play: p,
      handleMuted: u,
      touchSlidSrart: h,
      touchSlidMove: m,
      touchSlidEnd: w,
      retry: B,
      fullScreen: L,
      translate: l
    });
  }
}), _h = {
  ref: "videocon",
  class: "nut-video"
}, Ih = ["muted", "autoplay", "loop", "poster", "controls", "preload"], Bh = ["src", "type"], Mh = { class: "nut-video-controller__now" }, Lh = { class: "nut-video-controller__progress" }, Ph = {
  ref: "progressBar",
  class: "nut-video-controller__progress-value"
}, Eh = /* @__PURE__ */ g("div", { class: "nut-video-controller__ball-move" }, null, -1), Ah = [
  Eh
], zh = {
  ref: "playedBar",
  class: "nut-video-controller__played"
}, Vh = { class: "nut-video-controller__total" }, Oh = { class: "nut-video-error" }, Hh = { class: "nut-video-error-tip" };
function Rh(e, t, n, l, o, a) {
  return c(), d("div", _h, [
    g("video", {
      ref: "root",
      class: "nut-video-player",
      muted: e.options.muted,
      autoplay: e.options.autoplay,
      loop: e.options.loop,
      poster: e.options.poster,
      controls: e.options.controls,
      preload: e.options.preload,
      onError: t[0] || (t[0] = (...s) => e.handleError && e.handleError(...s))
    }, [
      g("source", {
        src: e.source.src,
        type: e.source.type
      }, null, 8, Bh)
    ], 40, Ih),
    e.showToolbox && !e.isDisabled ? (c(), d("div", {
      key: 0,
      ref: "touchMask",
      class: "nut-video-mask",
      onClick: t[1] || (t[1] = (...s) => e.play && e.play(...s))
    }, null, 512)) : T("", !0),
    e.showToolbox && !e.isDisabled ? Ie((c(), d("div", {
      key: 1,
      ref: "palyBtn",
      class: "nut-video-play-btn",
      onClick: t[2] || (t[2] = (...s) => e.play && e.play(...s))
    }, null, 512)), [
      [Me, !e.state.playing]
    ]) : T("", !0),
    Ie(g("div", {
      class: P(["nut-video-controller", { "nut-video-controller--show": !e.state.playing, "nut-video-controller--hide": e.state.playing }])
    }, [
      g("div", {
        class: "nut-video-controller__playbtn",
        onClick: t[3] || (t[3] = (...s) => e.play && e.play(...s))
      }),
      g("div", Mh, E(e.videoSet.displayTime), 1),
      g("div", Lh, [
        g("div", Ph, [
          g("div", {
            class: "buffered",
            style: A({ width: `${e.videoSet.loaded}%` })
          }, null, 4),
          g("div", {
            class: "nut-video-controller__ball",
            style: A({
              transform: `translate3d(${e.videoSet.progress.current}px, -50%, 0)`
            }),
            onTouchmove: t[4] || (t[4] = _e((s) => e.touchSlidMove(s), ["stop", "prevent"])),
            onTouchstart: t[5] || (t[5] = _e((s) => e.touchSlidSrart(), ["stop"])),
            onTouchend: t[6] || (t[6] = _e((s) => e.touchSlidEnd(s), ["stop"]))
          }, Ah, 36),
          g("div", zh, null, 512)
        ], 512)
      ]),
      g("div", Vh, E(e.videoSet.totalTime), 1),
      g("div", {
        class: P(["nut-video-controller__volume", { muted: e.state.isMuted }]),
        onClick: t[7] || (t[7] = (...s) => e.handleMuted && e.handleMuted(...s))
      }, null, 2),
      g("div", {
        class: "nut-video-controller__full",
        onClick: t[8] || (t[8] = (...s) => e.fullScreen && e.fullScreen(...s))
      })
    ], 2), [
      [Me, e.showToolbox && !e.isDisabled]
    ]),
    Ie(g("div", Oh, [
      g("p", Hh, E(e.translate("errorTip")), 1),
      g("p", {
        class: "nut-video-error-retry",
        onClick: t[9] || (t[9] = (...s) => e.retry && e.retry(...s))
      }, E(e.translate("clickRetry")), 1)
    ], 512), [
      [Me, e.state.isError]
    ])
  ], 512);
}
const gn = /* @__PURE__ */ ee(Dh, [["render", Rh]]), Uo = Symbol("nut-steps"), { create: Fh, componentName: Wh } = q("steps"), Yh = Fh({
  props: {
    direction: {
      type: String,
      default: "horizontal"
    },
    current: {
      type: [String, Number],
      default: "0"
    },
    progressDot: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["clickStep"],
  setup(e, { emit: t, slots: n }) {
    const l = fe({
      children: []
    }), o = N(() => {
      const r = Wh;
      return {
        [r]: !0,
        [`${r}-${e.direction}`]: !0,
        [`${r}-dot`]: !!e.progressDot
      };
    });
    return ze(Uo, {
      relation: (r) => {
        r && l.children.push(r);
      },
      state: l,
      props: e,
      onEmit: (r) => {
        t("clickStep", r);
      }
    }), () => {
      var r;
      return we(
        "view",
        {
          class: o.value
        },
        (r = n.default) == null ? void 0 : r.call(n)
      );
    };
  }
}), { create: jh, componentName: Kh } = q("step"), Uh = jh({
  props: {
    title: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    }
  },
  emits: ["clickStep"],
  setup() {
    const { proxy: e } = Ue(), t = Ee(Uo);
    t.relation(e);
    const n = fe({
      dot: t.props.progressDot
    }), l = N(() => t.state.children.indexOf(e) + 1), o = () => {
      const i = l.value;
      return i < +t.props.current ? "finish" : i === +t.props.current ? "process" : "wait";
    }, a = N(() => o()), s = N(() => {
      const i = Kh;
      return {
        [i]: !0,
        [`${i}-${a.value}`]: !0
      };
    }), r = () => {
      t.onEmit(l.value);
    };
    return ce(Z({}, ge(n)), {
      index: l,
      classes: s,
      handleClickStep: r
    });
  }
}), Xh = { class: "nut-step-head" }, qh = /* @__PURE__ */ g("view", { class: "nut-step-line" }, null, -1), Zh = { class: "nut-step-icon-inner" }, Gh = {
  key: 1,
  class: "nut-step-inner"
}, Jh = { class: "nut-step-main" }, Qh = { class: "nut-step-title" }, xh = { key: 0 }, e0 = {
  key: 0,
  class: "nut-step-content"
}, t0 = ["innerHTML"];
function n0(e, t, n, l, o, a) {
  return c(), d("view", {
    class: P(e.classes),
    onClick: t[0] || (t[0] = (...s) => e.handleClickStep && e.handleClickStep(...s))
  }, [
    g("view", Xh, [
      qh,
      g("view", {
        class: P(["nut-step-icon", [e.dot ? "" : "is-icon"]])
      }, [
        g("view", Zh, [
          _(e.$slots, "icon", {}, () => [
            e.dot ? (c(), d(Q, { key: 0 }, [], 64)) : (c(), d("view", Gh, E(e.index), 1))
          ])
        ])
      ], 2)
    ]),
    g("view", Jh, [
      g("view", Qh, [
        e.$slots.title ? T("", !0) : (c(), d("span", xh, E(e.title), 1)),
        _(e.$slots, "title")
      ]),
      e.content || e.$slots.content ? (c(), d("view", e0, [
        e.$slots.content ? T("", !0) : (c(), d("span", {
          key: 0,
          innerHTML: e.content
        }, null, 8, t0)),
        _(e.$slots, "content")
      ])) : T("", !0)
    ])
  ], 2);
}
const o0 = /* @__PURE__ */ ee(Uh, [["render", n0]]), Xo = Symbol("nut-swiper"), { create: l0, componentName: Rn } = q("swiper"), s0 = l0({
  props: {
    width: {
      type: [Number, String]
    },
    height: {
      type: [Number, String]
    },
    direction: {
      type: String,
      default: "horizontal"
      //horizontal and vertical
    },
    paginationVisible: {
      type: Boolean,
      default: !1
    },
    paginationColor: {
      type: String,
      default: "#fff"
    },
    loop: {
      type: Boolean,
      default: !0
    },
    duration: {
      type: [Number, String],
      default: 500
    },
    autoPlay: {
      type: [Number, String],
      default: 0
    },
    initPage: {
      type: [Number, String],
      default: 0
    },
    touchable: {
      type: Boolean,
      default: !0
    },
    isPreventDefault: {
      type: Boolean,
      default: !0
    },
    isStopPropagation: {
      type: Boolean,
      default: !0
    },
    paginationUnselectedColor: {
      type: String,
      default: "#ddd"
    }
  },
  emits: ["change"],
  setup(e, { emit: t, slots: n, expose: l }) {
    const o = z(), a = fe({
      active: 0,
      num: 0,
      rect: null,
      width: 0,
      height: 0,
      moving: !1,
      offset: 0,
      touchTime: 0,
      autoplayTimer: null,
      children: [],
      childrenVNode: [],
      style: {}
    }), s = et(), r = N(() => e.direction === "vertical"), i = N(() => {
      const R = Rn;
      return {
        [`${R}-inner`]: !0,
        [`${R}-vertical`]: r.value
      };
    }), p = N(() => {
      const R = Rn;
      return {
        [`${R}-pagination`]: !0,
        [`${R}-pagination-vertical`]: r.value
      };
    }), f = N(() => r.value ? s.deltaY.value : s.deltaX.value), y = N(() => s.direction.value === e.direction), v = N(() => a.children.length), b = N(() => a[r.value ? "height" : "width"]), $ = N(() => v.value * b.value), k = N(() => a.rect ? (r.value ? a.rect.height : a.rect.width) - b.value * v.value : 0), u = N(() => (a.active + v.value) % v.value), h = () => {
      let R = 0;
      R = a.offset, a.style = {
        transitionDuration: `${a.moving ? 0 : e.duration}ms`,
        transform: `translate${r.value ? "Y" : "X"}(${R}px)`,
        [r.value ? "height" : "width"]: `${b.value * v.value}px`,
        [r.value ? "width" : "height"]: `${r.value ? a.width : a.height}px`
      };
    }, m = (R) => {
      var ue;
      let te = [];
      const K = a.childrenVNode.length;
      let se = (ue = n == null ? void 0 : n.default) == null ? void 0 : ue.call(n);
      if (se = se.filter((pe) => pe.children && Array.isArray(pe.children)), se.forEach((pe) => {
        te = te.concat(pe.children);
      }), !K)
        a.childrenVNode = te.slice(), R.proxy && a.children.push(R.proxy);
      else if (K > te.length)
        a.children = a.children.filter((pe) => R.proxy !== pe);
      else if (K < te.length) {
        for (let pe = 0; pe < K; pe++)
          if (te[pe].key !== a.childrenVNode[pe].key) {
            R.proxy && a.children.splice(pe, 0, R.proxy), R.vnode && a.childrenVNode.splice(pe, 0, R.vnode);
            break;
          }
        K !== te.length && (R.proxy && a.children.push(R.proxy), R.vnode && a.childrenVNode.push(R.vnode));
      } else
        a.childrenVNode = te.slice(), R.proxy && a.children.push(R.proxy);
    }, w = (R, te = 0) => {
      let K = R * b.value;
      e.loop || (K = Math.min(K, -k.value));
      let se = te - K;
      return e.loop || (se = Ve(se, k.value, 0)), se;
    }, I = (R) => {
      const { active: te } = a;
      return R ? e.loop ? Ve(te + R, -1, v.value) : Ve(te + R, 0, v.value - 1) : te;
    }, B = ({ pace: R = 0, offset: te = 0, isEmit: K = !1 }) => {
      if (v.value <= 1)
        return;
      const { active: se } = a, ue = I(R), pe = w(ue, te);
      if (e.loop) {
        if (a.children[0] && pe !== k.value) {
          const ke = pe < k.value;
          a.children[0].setOffset(ke ? $.value : 0);
        }
        if (a.children[v.value - 1] && pe !== 0) {
          const ke = pe > 0;
          a.children[v.value - 1].setOffset(ke ? -$.value : 0);
        }
      }
      a.active = ue, a.offset = pe, K && se !== a.active && t("change", u.value), h();
    }, L = () => {
      a.moving = !0, a.active <= -1 && B({ pace: v.value }), a.active >= v.value && B({ pace: -v.value });
    }, M = () => {
      a.autoplayTimer && clearTimeout(a.autoplayTimer);
    }, S = (R) => {
      L(), s.reset(), Re(() => {
        Re(() => {
          a.moving = !1, B({
            pace: R,
            isEmit: !0
          });
        });
      });
    }, C = () => {
      S(-1);
    }, D = () => {
      S(1);
    }, V = (R) => {
      L(), s.reset(), Re(() => {
        a.moving = !1;
        let te;
        e.loop && v.value === R ? te = a.active === 0 ? 0 : R : te = R % v.value, B({
          pace: te - a.active,
          isEmit: !0
        });
      });
    }, j = () => {
      +e.autoPlay <= 0 || v.value <= 1 || (M(), a.autoplayTimer = setTimeout(() => {
        D(), j();
      }, Number(e.autoPlay)));
    }, X = (R = +e.initPage) => {
      M(), a.rect = o.value.getBoundingClientRect(), R = Math.min(v.value - 1, R), a.width = e.width ? +e.width : a.rect.width, a.height = e.height ? +e.height : a.rect.height, a.active = R, a.offset = w(a.active), a.moving = !0, h(), j();
    }, le = (R) => {
      e.isPreventDefault && R.preventDefault(), e.isStopPropagation && R.stopPropagation(), e.touchable && (s.start(R), a.touchTime = Date.now(), M(), L());
    }, W = (R) => {
      e.touchable && a.moving && (s.move(R), y.value && B({
        offset: f.value
      }));
    }, Y = () => {
      if (!e.touchable || !a.moving)
        return;
      const R = f.value / (Date.now() - a.touchTime);
      if ((Math.abs(R) > 0.3 || Math.abs(f.value) > +(b.value / 2).toFixed(2)) && y.value) {
        let K = 0;
        const se = r.value ? s.offsetY.value : s.offsetX.value;
        e.loop ? K = se > 0 ? f.value > 0 ? -1 : 1 : 0 : K = -Math[f.value > 0 ? "ceil" : "floor"](f.value / b.value), B({
          pace: K,
          isEmit: !0
        });
      } else
        f.value && B({ pace: 0 });
      a.moving = !1, h(), j();
    };
    return ze(Xo, {
      props: e,
      size: b,
      relation: m
    }), l({
      prev: C,
      next: D,
      to: V
    }), St(() => {
      M();
    }), en(() => {
      M();
    }), x(
      () => e.initPage,
      (R) => {
        Ne(() => {
          X(Number(R));
        });
      }
    ), x(
      () => e.height,
      () => {
        Ne(() => {
          X();
        });
      }
    ), x(
      () => a.children.length,
      () => {
        Ne(() => {
          X();
        });
      }
    ), x(
      () => e.autoPlay,
      (R) => {
        +R > 0 ? j() : M();
      }
    ), {
      state: a,
      classesInner: i,
      classesPagination: p,
      container: o,
      activePagination: u,
      onTouchStart: le,
      onTouchMove: W,
      onTouchEnd: Y
    };
  }
});
function a0(e, t, n, l, o, a) {
  return c(), d("view", {
    ref: "container",
    class: "nut-swiper",
    onTouchstart: t[0] || (t[0] = (...s) => e.onTouchStart && e.onTouchStart(...s)),
    onTouchmove: t[1] || (t[1] = (...s) => e.onTouchMove && e.onTouchMove(...s)),
    onTouchend: t[2] || (t[2] = (...s) => e.onTouchEnd && e.onTouchEnd(...s)),
    onTouchcancel: t[3] || (t[3] = (...s) => e.onTouchEnd && e.onTouchEnd(...s))
  }, [
    g("view", {
      class: P(e.classesInner),
      style: A(e.state.style)
    }, [
      _(e.$slots, "default")
    ], 6),
    _(e.$slots, "page"),
    e.paginationVisible && !e.$slots.page ? (c(), d("view", {
      key: 0,
      class: P(e.classesPagination)
    }, [
      (c(!0), d(Q, null, ie(e.state.children.length, (s, r) => (c(), d("i", {
        key: r,
        style: A({
          backgroundColor: e.activePagination === r ? e.paginationColor : e.paginationUnselectedColor
        }),
        class: P({ active: e.activePagination === r })
      }, null, 6))), 128))
    ], 2)) : T("", !0)
  ], 544);
}
const vn = /* @__PURE__ */ ee(s0, [["render", a0]]);
function r0(e) {
  const t = Ue();
  t && Object.assign(t.proxy, e);
}
const { create: i0 } = q("swiper-item"), u0 = i0({
  setup() {
    const e = Ee(Xo);
    e.relation(Ue());
    const t = fe({
      offset: 0
    }), n = N(() => {
      const o = {}, a = e == null ? void 0 : e.props.direction;
      return e != null && e.size.value && (o[a === "horizontal" ? "width" : "height"] = `${e == null ? void 0 : e.size.value}px`), t.offset && (o.transform = `translate${a === "horizontal" ? "X" : "Y"}(${t.offset}px)`), o;
    }), l = (o) => {
      t.offset = o;
    };
    return Xe(() => {
      e.relation(Ue(), "unmount");
    }), r0({ setOffset: l }), {
      style: n
    };
  }
});
function c0(e, t, n, l, o, a) {
  return c(), d("view", {
    class: "nut-swiper-item",
    style: A(e.style)
  }, [
    _(e.$slots, "default")
  ], 4);
}
const yn = /* @__PURE__ */ ee(u0, [["render", c0]]), d0 = ["innerHTML"], f0 = ["innerHTML"], Fn = "nut-price", Ft = /* @__PURE__ */ Ce({
  name: "NutPrice",
  __name: "price",
  props: {
    price: { default: 0 },
    needSymbol: { type: Boolean, default: !0 },
    symbol: { default: "&yen;" },
    decimalDigits: { default: 2 },
    thousands: { type: Boolean, default: !1 },
    position: { default: "before" },
    size: { default: "normal" },
    strikeThrough: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, n = N(() => ({
      [Fn]: !0,
      [`${Fn}--strike`]: t.strikeThrough
    })), l = N(() => t.needSymbol ? t.symbol : ""), o = (r) => String(r).indexOf(".") > 0, a = (r) => (Number(r) == 0 && (r = 0), o(r) ? (r = Number(r).toFixed(t.decimalDigits), r = typeof r.split(".") == "string" ? r.split(".") : r.split(".")[0]) : r = r.toString(), t.thousands ? (r || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,") : r), s = (r) => {
      Number(r) == 0 && (r = 0), o(r) ? (r = Number(r).toFixed(t.decimalDigits), r = typeof r.split(".") == "string" ? 0 : r.split(".")[1] ? r.split(".")[1] : 0) : r = 0;
      const i = "0." + r, p = Number(i).toFixed(t.decimalDigits);
      return String(p).substring(2, p.length);
    };
    return (r, i) => (c(), d("view", {
      class: P(n.value)
    }, [
      r.needSymbol && r.position === "before" ? (c(), d("view", {
        key: 0,
        class: P(["nut-price--symbol", `nut-price--symbol-${r.size}`]),
        innerHTML: l.value
      }, null, 10, d0)) : T("", !0),
      g("view", {
        class: P(`nut-price--${r.size}`)
      }, E(a(r.price)), 3),
      r.decimalDigits != 0 ? (c(), d("view", {
        key: 1,
        class: P(`nut-price--decimal-${r.size}`)
      }, ".", 2)) : T("", !0),
      g("view", {
        class: P(`nut-price--decimal-${r.size}`)
      }, E(s(r.price)), 3),
      r.needSymbol && r.position === "after" ? (c(), d("view", {
        key: 2,
        class: P(["nut-price--symbol", `nut-price--symbol-${r.size}`]),
        innerHTML: l.value
      }, null, 10, f0)) : T("", !0)
    ], 2));
  }
});
Te(Ft);
const qo = {
  show: { type: Boolean, default: !1 },
  initNo: { type: Number, default: 0 },
  showIndex: { type: Boolean, default: !0 },
  minZoom: { type: Number, default: 1 / 3 },
  maxZoom: { type: Number, default: 3 }
}, { create: p0 } = q("image-preview-item"), m0 = p0({
  props: ce(Z({}, qo), {
    image: {
      type: Object,
      default: () => ({})
    },
    video: {
      type: Object,
      default: () => ({})
    },
    rootWidth: {
      type: Number,
      default: 0
    },
    rootHeight: {
      type: Number,
      default: 0
    },
    contentClose: {
      type: Boolean,
      default: !0
    }
  }),
  emits: ["close", "scale"],
  components: {
    NutVideo: gn,
    NutSwiperItem: yn
  },
  setup(e, { emit: t }) {
    const n = fe({
      scale: 1,
      moveX: 0,
      moveY: 0,
      moving: !1,
      zooming: !1,
      imageRatio: 0,
      displayWidth: 0,
      displayHeight: 0
    }), l = et(), o = N(() => {
      const { rootWidth: C, rootHeight: D } = e, V = D / C;
      return n.imageRatio > V;
    }), a = N(() => {
      const C = e.image;
      if (C && C.src) {
        const { scale: D, moveX: V, moveY: j, moving: X, zooming: le } = n, W = {
          transitionDuration: le || X ? "0s" : ".3s"
        };
        if (D !== 1) {
          const Y = V / D, R = j / D;
          W.transform = `scale(${D}, ${D}) translate(${Y}px, ${R}px)`;
        }
        return W;
      }
      return {};
    }), s = N(() => {
      if (n.imageRatio) {
        const { rootWidth: C, rootHeight: D } = e, V = o.value ? D / n.imageRatio : C;
        return Math.max(0, (n.scale * V - C) / 2);
      }
      return 0;
    }), r = N(() => {
      if (n.imageRatio) {
        const { rootWidth: C, rootHeight: D } = e, V = o.value ? D : C * n.imageRatio;
        return Math.max(0, (n.scale * V - D) / 2);
      }
      return 0;
    }), i = (C) => {
      const { naturalWidth: D, naturalHeight: V } = C.target;
      n.imageRatio = V / D;
    }, p = () => {
      f(1), n.moveX = 0, n.moveY = 0;
    }, f = (C) => {
      C = Ve(C, +e.minZoom, +e.maxZoom + 1), C !== n.scale && (n.scale = C, t("scale", {
        scale: C,
        index: e.initNo
      }));
    }, y = () => {
      const C = n.scale > 1 ? 1 : 2;
      f(C), n.moveX = 0, n.moveY = 0;
    }, v = (C) => Math.sqrt(pt(C[0].clientX - C[1].clientX, 2) + pt(C[0].clientY - C[1].clientY, 2));
    let b, $, k, u, h, m, w;
    const I = (C) => {
      const { touches: D } = C, { offsetX: V } = l;
      l.start(C), w = D.length, b = n.moveX, $ = n.moveY, m = Date.now(), n.moving = w === 1 && n.scale !== 1, n.zooming = w === 2 && !V.value, n.zooming && (k = n.scale, u = v(C.touches));
    }, B = (C) => {
      const { touches: D } = C;
      if (l.move(C), (n.moving || n.zooming) && ft(C, !0), n.moving) {
        const { deltaX: V, deltaY: j } = l, X = V.value + b, le = j.value + $;
        n.moveX = Ve(X, -s.value, s.value), n.moveY = Ve(le, -r.value, r.value);
      }
      if (n.zooming && D.length === 2) {
        const V = v(D), j = k * V / u;
        f(j);
      }
    }, L = () => {
      if (w == 1 && e.video && e.video.source || w > 1)
        return;
      const { offsetX: C, offsetY: D } = l, V = Date.now() - m, j = 250, X = 5;
      C.value < X && D.value < X && V < j && (h ? (clearTimeout(h), h = null, y()) : h = setTimeout(() => {
        e.contentClose && t("close"), h = null;
      }, j));
    }, M = (C) => {
      let D = !1;
      (n.moving || n.zooming) && (D = !0, n.moving && b === n.moveX && $ === n.moveY && (D = !1), C.touches.length || (n.zooming && (n.moveX = Ve(n.moveX, -s.value, s.value), n.moveY = Ve(n.moveY, -r.value, r.value), n.zooming = !1), n.moving = !1, b = 0, $ = 0, k = 1, n.scale < 1 && p(), n.scale > e.maxZoom && (n.scale = +e.maxZoom))), ft(C, D), L(), l.reset();
    }, S = () => {
      t("close");
    };
    return x(() => e.initNo, p), x(
      () => e.show,
      (C) => {
        C || p();
      }
    ), ce(Z({}, ge(n)), {
      onTouchStart: I,
      onTouchMove: B,
      onTouchEnd: M,
      getDistance: v,
      imageStyle: a,
      imageLoad: i,
      closeSwiper: S
    });
  }
}), h0 = ["src"];
function g0(e, t, n, l, o, a) {
  const s = U("nut-video"), r = U("nut-swiper-item");
  return c(), J(r, { onClick: e.closeSwiper }, {
    default: ne(() => [
      g("view", {
        style: A(e.imageStyle),
        class: "nut-image-preview-box",
        onTouchstart: t[1] || (t[1] = (...i) => e.onTouchStart && e.onTouchStart(...i)),
        onTouchmove: t[2] || (t[2] = (...i) => e.onTouchMove && e.onTouchMove(...i)),
        onTouchend: t[3] || (t[3] = (...i) => e.onTouchEnd && e.onTouchEnd(...i)),
        onTouchcancel: t[4] || (t[4] = (...i) => e.onTouchEnd && e.onTouchEnd(...i))
      }, [
        e.image && e.image.src ? (c(), d("img", {
          key: 0,
          src: e.image.src,
          class: "nut-image-preview-img",
          onLoad: t[0] || (t[0] = (...i) => e.imageLoad && e.imageLoad(...i))
        }, null, 40, h0)) : T("", !0),
        e.video && e.video.source ? (c(), J(s, {
          key: 1,
          source: e.video.source,
          options: e.video.options
        }, null, 8, ["source", "options"])) : T("", !0)
      ], 36)
    ]),
    _: 1
  }, 8, ["onClick"]);
}
const v0 = /* @__PURE__ */ ee(m0, [["render", g0]]), { create: y0 } = q("image-preview"), b0 = y0({
  props: ce(Z({}, qo), {
    images: { type: Array, default: () => [] },
    videos: { type: Array, default: () => [] },
    contentClose: { type: Boolean, default: !0 },
    paginationVisible: { type: Boolean, default: !1 },
    paginationColor: { type: String, default: "#fff" },
    autoplay: { type: [Number, String], default: 0 },
    teleport: { type: [String, Element], default: "body" },
    teleportDisable: { ype: Boolean, default: !1 },
    closeable: {
      type: Boolean,
      default: !1
    },
    closeIconPosition: {
      type: String,
      default: "top-right"
      // top-right  top-left
    },
    beforeClose: Function,
    isLoop: {
      type: Boolean,
      default: !0
    }
  }),
  emits: ["close", "change"],
  components: {
    ImagePreviewItem: v0,
    CircleClose: on,
    NutPopup: Ae,
    NutSwiper: vn
  },
  setup(e, { emit: t }) {
    const n = z(), l = fe({
      showPop: e.show,
      active: 0,
      rootWidth: 0,
      rootHeight: 0
    }), o = N(() => {
      const f = "nut-image-preview-close";
      return `nut-image-preview-close-icon ${e.closeIconPosition == "top-right" ? `${f}-right` : `${f}-left`}`;
    }), a = N(() => Un(e.videos) ? [].concat(e.videos).concat(e.images) : e.images), s = (f) => {
      f !== l.active && (l.active = f, t("change", l.active));
    }, r = () => {
      nn(e.beforeClose, {
        args: [l.active],
        done: () => i()
      });
    }, i = () => {
      l.showPop = !1, t("close");
    }, p = () => {
      if (n.value) {
        const f = Ye(n.value);
        l.rootHeight = f.height, l.rootWidth = f.width;
      }
    };
    return x(
      () => e.show,
      (f) => {
        l.showPop = f, f && (s(e.initNo), Ne(() => {
          p();
        }));
      }
    ), x(
      () => e.initNo,
      (f) => {
        f != l.active && s(f);
      }
    ), be(() => {
      s(e.initNo);
    }), ce(Z({
      swipeRef: n
    }, ge(l)), {
      onClose: r,
      mergeImages: a,
      setActive: s,
      iconClasses: o
    });
  }
}), $0 = {
  ref: "swipeRef",
  class: "nut-image-preview"
}, w0 = {
  key: 0,
  class: "nut-image-preview-index"
};
function k0(e, t, n, l, o, a) {
  const s = U("image-preview-item"), r = U("nut-swiper"), i = U("CircleClose"), p = U("nut-popup");
  return c(), J(p, {
    visible: e.showPop,
    "onUpdate:visible": t[1] || (t[1] = (f) => e.showPop = f),
    "pop-class": "nut-image-preview-custom-pop",
    "teleport-disable": e.teleportDisable,
    teleport: e.teleport,
    "lock-scroll": "",
    onClosed: e.onClose
  }, {
    default: ne(() => [
      g("view", $0, [
        e.showPop ? (c(), J(r, {
          key: 0,
          "auto-play": e.autoplay,
          class: "nut-image-preview-swiper",
          loop: e.isLoop,
          "is-prevent-default": !1,
          direction: "horizontal",
          "init-page": e.initNo,
          "pagination-visible": e.paginationVisible,
          "pagination-color": e.paginationColor,
          onChange: e.setActive
        }, {
          default: ne(() => [
            (c(!0), d(Q, null, ie(e.mergeImages, (f, y) => (c(), J(s, {
              key: y,
              video: y < e.videos.length ? f : {},
              image: y >= e.videos.length ? f : {},
              "root-height": e.rootHeight,
              "root-width": e.rootWidth,
              show: e.showPop,
              "init-no": e.active + 1,
              "content-close": e.contentClose,
              "max-zoom": e.maxZoom,
              "min-zoom": e.minZoom,
              onClose: e.onClose
            }, null, 8, ["video", "image", "root-height", "root-width", "show", "init-no", "content-close", "max-zoom", "min-zoom", "onClose"]))), 128))
          ]),
          _: 1
        }, 8, ["auto-play", "loop", "init-page", "pagination-visible", "pagination-color", "onChange"])) : T("", !0)
      ], 512),
      e.showIndex ? (c(), d("view", w0, E(e.active + 1) + " / " + E(e.mergeImages.length), 1)) : T("", !0),
      e.closeable ? (c(), d("view", {
        key: 1,
        class: P(e.iconClasses),
        onClick: t[0] || (t[0] = (...f) => e.onClose && e.onClose(...f))
      }, [
        _(e.$slots, "close-icon", {}, () => [
          oe(i, { color: "#ffffff" })
        ])
      ], 2)) : T("", !0)
    ]),
    _: 3
  }, 8, ["visible", "teleport-disable", "teleport", "onClosed"]);
}
const bn = /* @__PURE__ */ ee(b0, [["render", k0]]);
class C0 {
  constructor() {
    O(this, "show", !1);
    O(this, "images", []);
    O(this, "videos", []);
    O(this, "contentClose", !0);
    O(this, "initNo", 0);
    O(this, "paginationVisible", !1);
    O(this, "paginationColor", "");
    O(this, "autoplay", 0);
    O(this, "isWrapTeleport", !1);
    O(this, "showIndex", !0);
    O(this, "closeable", !1);
    O(this, "closeIcon", "circle-close");
    O(this, "closeIconPosition", "top-right");
    O(this, "beforeClose");
    O(this, "maxZoom", 3);
    O(this, "minZoom", 1 / 3);
    O(this, "isLoop", !0);
    O(this, "teleport", "body");
  }
}
class S0 {
  constructor(t) {
    O(this, "options", new C0());
    const n = Object.assign(this.options, t), { unmount: l } = an(n, {
      name: "image-preview",
      components: [Ae, gn, vn, yn, Tt],
      wrapper: () => ({
        setup() {
          return () => (n.onClose = () => {
            n.show = !1, Ne(() => {
              l();
            });
          }, we(bn, n));
        }
      })
    });
  }
}
const T0 = (e) => new S0(e);
T0.install = (e) => {
  e.use(bn);
};
function N0(e) {
  const t = Ue();
  t && Object.assign(t.proxy, e);
}
const { create: D0 } = q("countup"), _0 = D0({
  props: {
    initNum: {
      type: Number,
      default: 0
    },
    endNum: {
      type: Number,
      default: 0
    },
    speed: {
      type: Number,
      default: 1
    },
    toFixed: {
      type: Number,
      default: 0
    },
    during: {
      type: Number,
      default: 1e3
    },
    startFlag: {
      type: Boolean,
      default: !0
    },
    // 数字滚动
    numWidth: {
      type: Number,
      default: 20
    },
    numHeight: {
      type: Number,
      default: 20
    },
    scrolling: {
      type: Boolean,
      default: !1
    },
    // 自定义图片
    customBgImg: {
      type: String,
      default: ""
    },
    customSpacNum: {
      type: Number,
      default: 0
    },
    customChangeNum: {
      type: Number,
      default: 1
    },
    // 抽奖
    type: {
      type: String,
      default: ""
    },
    machineNum: {
      type: Number,
      default: 3
    },
    machinePrizeNum: {
      type: Number,
      default: 0
    },
    machinePrizeLevel: {
      type: Number,
      default: 0
    },
    machineTurnMore: {
      type: Number,
      default: 0
    }
  },
  components: {},
  emits: ["click", "scrollEnd"],
  setup(e, { emit: t }) {
    const n = z(null), l = z([]), o = (S) => {
      S && l.value.push(S);
    }, a = fe({
      valFlag: !1,
      current: 0,
      sortFlag: "add",
      initDigit1: 0,
      initDigit2: 0,
      to0_10: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      to10_0: [0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1],
      timer: null,
      totalCount: 0,
      //正整数
      pointNum: 0,
      //小数位
      numberVal: 0,
      //数字
      num_total_len: 0,
      //数字长度
      relNum: 0,
      //去除小数点
      customNumber: 1,
      prizeLevelTrun: 0,
      prizeY: [],
      prizeYPrev: [],
      // machineTransition: 'none',
      finshMachine: 0,
      notPrize: [],
      typeMachine: ""
    }), { startFlag: s, scrolling: r, customBgImg: i, type: p } = fe(e);
    x(
      () => e.customChangeNum,
      () => {
        y(), u(0);
      }
    ), x(
      () => e.machinePrizeLevel,
      (S) => {
        a.prizeLevelTrun = S;
      }
    ), x(
      () => e.initNum,
      (S) => {
        a.current = S, a.valFlag = !1, f();
      }
    ), x(
      () => e.endNum,
      () => {
        a.current = e.initNum, a.valFlag = !1, f();
      }
    );
    const f = () => {
      if (a.valFlag)
        return !1;
      s && (r || i ? p != "machine" && u() : (k(), setTimeout(() => {
        a.valFlag = !0;
      }, 300)));
    }, y = () => {
      clearInterval(Number(a.timer)), a.timer = null;
    }, v = (S, C, D) => {
      const V = (S.toString().split(".")[1] || "").length, j = (C.toString().split(".")[1] || "").length, X = Math.pow(10, Math.max(V, j));
      return D == "-" ? Number((S * X - C * X).toFixed(0)) / X : Number((S * X + C * X).toFixed(0)) / X;
    }, b = (S) => {
      let { num_total_len: C, pointNum: D, initDigit1: V, initDigit2: j, sortFlag: X } = a, le = X == "add" || X == "equal" ? String(j)[S - (C - D)] : 10 - Number(String(j)[S - (C - D)]), W = X == "add" || X == "equal" ? String(V)[S] : 10 - Number(String(V)[S]), Y = S > C - D - 1 ? -le * 100 + "%" : S <= String(V).length - 1 ? -W * 100 + "%" : 0;
      return Y == "-1000%" && (Y = 0), Y;
    }, $ = (S) => {
      let { num_total_len: C, pointNum: D, initDigit1: V, initDigit2: j } = a, X = String(j)[S - (C - D)];
      return S > C - D - 1 ? X || 0 : S <= String(V).length - 1 ? String(V)[S] : 0;
    }, k = () => {
      let { endNum: S, initNum: C, speed: D, toFixed: V } = e, j = setInterval(() => {
        if (C > S)
          if (Number(a.current) <= S || Number(a.current) <= D)
            a.current = S.toFixed(V), clearInterval(j), t("scrollEnd"), a.valFlag = !1;
          else {
            let X = parseFloat(String(a.current)) - parseFloat(String(D));
            a.current = X.toFixed(V);
          }
        else if (Number(a.current) >= S)
          a.current = S.toFixed(V), clearInterval(j), t("scrollEnd"), a.valFlag = !1;
        else {
          let X = parseFloat(String(a.current)) + parseFloat(String(D));
          a.current = X.toFixed(V);
        }
      }, e.during);
    }, u = (S) => {
      let { initNum: C, endNum: D, toFixed: V, customBgImg: j } = e;
      j && (C = e.customChangeNum);
      let X, le, W, Y;
      C != 0 ? (V != 0 && (C = Number(C.toFixed(V))), String(C).indexOf(".") > -1 ? (X = String(C).split(".")[0].length, le = String(C).split(".")[1].length) : (X = String(C).length, le = 0)) : (X = 1, le = 0), D != 0 ? (V != 0 && (D = Number(D.toFixed(V))), String(D).indexOf(".") > -1 ? (W = String(D).split(".")[0].length, Y = String(D).split(".")[1].length) : (W = String(D).length, Y = 0)) : (W = 1, Y = 0);
      let R = X >= W ? X : W, te = le >= Y ? le : Y;
      a.num_total_len = R + te, a.pointNum = te, C > D ? (a.sortFlag = "reduce", a.to0_10 = [0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], a.totalCount = v(C, D, "-"), a.numberVal = Number(String(C))) : C < D ? (a.sortFlag = "add", a.to0_10 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0], a.totalCount = v(D, C, "-"), a.numberVal = Number(String(D))) : a.sortFlag = "equal";
      var K = 1;
      for (let ue = 0; ue < a.pointNum; ue++)
        K *= 10;
      var se = a.numberVal * K;
      if (a.relNum = se, V != 0 && (a.pointNum = String(a.numberVal).split(".")[1] ? String(a.numberVal).split(".")[1].length : 0, a.num_total_len = String(se).length), String(C).indexOf(".") > -1) {
        let ue = String(C).split(".");
        a.initDigit1 = Number(ue[0]), a.initDigit2 = Number(ue[1]);
      } else
        a.initDigit1 = C, a.initDigit2 = 0;
      r && !j ? Ne(() => {
        if (a.sortFlag == "equal")
          return !1;
        let ue = l.value[a.num_total_len - 1];
        h(ue);
      }) : S !== 0 && I();
    }, h = (S) => {
      y();
      var C = 1;
      a.pointNum != 0 && (C = 1 / Math.pow(10, a.pointNum)), a.timer = setInterval(() => {
        m(S), a.totalCount = v(a.totalCount, C, "-"), a.totalCount <= 0 && (y(), t("scrollEnd"), a.valFlag = !1);
      }, e.during);
    }, m = (S) => {
      let C = S.getAttribute("turn-number"), D;
      if (a.sortFlag == "add" ? D = parseInt(String(C)) + 1 : D = parseInt(String(C)) - 1 >= 0 ? parseInt(String(C)) - 1 : 9, S.setAttribute("turn-number", String(D)), (S.style.transition == "none 0s ease 0s" || D == 1 || !S.style.transition) && (S.style.transition = `all linear ${e.during}ms`), D == 10 || a.sortFlag == "reduce" && D == 0) {
        var V = null;
        S.style.top = `-${a.sortFlag == "add" ? D * 100 : (10 - D) * 100}%`, S.setAttribute("turn-number", "0"), V = setTimeout(() => {
          V && clearTimeout(V), S.style.transition = "none", S.style.top = "0", w(S, D);
        }, 0.975 * e.during);
      } else
        S.style.top = `-${a.sortFlag == "add" ? D * 100 : (10 - D) * 100}%`;
      S.style.top == "-100%" && a.sortFlag == "reduce" && m(S.previousSibling);
    }, w = (S, C) => {
      setTimeout(() => {
        C == 10 && S.previousSibling && m(S.previousSibling);
      }, 200);
    }, I = () => {
      Ne(() => {
        n.value.addEventListener("webkitTransitionEnd", () => {
          t("scrollEnd"), a.valFlag = !1;
        });
      });
    }, B = () => {
      for (a.notPrize = []; a.notPrize.length < 3; ) {
        var S = Math.floor(Math.random() * e.machinePrizeNum + 1);
        a.notPrize.indexOf(S) == -1 && a.notPrize.push(S);
      }
    };
    N0({ machineLuck: () => {
      const S = e.machineTurnMore < 0 ? 0 : e.machineTurnMore;
      let C = e.numHeight * e.machinePrizeNum;
      a.prizeLevelTrun < 0 && B();
      for (let D = 0; D < e.machineNum; D++)
        setTimeout(() => {
          let V = C * (D + 1 + parseFloat(String(S)));
          a.prizeYPrev.length != 0 && (a.prizeY[D] = a.prizeYPrev[D]);
          let j = a.prizeYPrev[D] ? a.prizeYPrev[D] : 0, X = V + j + (e.machinePrizeNum - a.prizeLevelTrun + 1) * e.numHeight + (C - j);
          a.prizeLevelTrun < 0 && (X += e.numHeight * a.notPrize[D]), M(
            D,
            // parseFloat((this.machinePrizeNum-(this.prizeLevelTrun-1))*this.numHeight + turn + local),
            X,
            j
          );
        }, 500 * D);
    } });
    const M = (S, C, D) => {
      let V = setInterval(() => {
        if (D <= C)
          D += 10, a.prizeY[S] = parseFloat(String(D));
        else if (clearInterval(V), V = null, a.finshMachine += 1, a.prizeY[S] = C, a.finshMachine == e.machineNum) {
          let j = e.numHeight * e.machinePrizeNum;
          a.prizeYPrev = [], JSON.parse(JSON.stringify(a.prizeY)).forEach((le) => {
            let W = le;
            for (; W > j; )
              W -= j;
            a.prizeYPrev.push(W);
          }), setTimeout(() => {
            a.finshMachine = 0, a.prizeLevelTrun < 0 ? (t("scrollEnd", !1), a.valFlag = !1) : (t("scrollEnd", !0), a.valFlag = !1);
          }, 130);
        }
      }, 30);
    };
    return be(() => {
      a.current = e.initNum, Ne(() => {
        f();
      });
    }), Xe(() => {
      y(), a.timer = null;
    }), ce(Z(Z({}, ge(a)), ge(fe(e))), {
      runNumberImg: n,
      setRef: o,
      topNumber: b,
      turnNumber: $
    });
  }
}), I0 = { class: "nut-countup" }, B0 = ["turn-number"];
function M0(e, t, n, l, o, a) {
  return c(), d("view", I0, [
    e.customBgImg != "" ? (c(), d(Q, { key: 0 }, [
      e.type == "machine" ? (c(), d("view", {
        key: 0,
        class: "nut-countup__machine",
        style: A({ height: e.numHeight + "px" })
      }, [
        (c(!0), d(Q, null, ie(e.machineNum, (s, r) => (c(), d("view", {
          key: "mImg" + r,
          class: "nut-countup__machine-item",
          style: A({
            width: e.numWidth + "px",
            height: e.numHeight + "px",
            backgroundImage: "url(" + e.customBgImg + ")",
            backgroundPositionY: e.prizeY[r] + "px"
          })
        }, null, 4))), 128))
      ], 4)) : (c(), d("view", {
        key: 1,
        ref: "runNumberImg",
        class: "nut-countup__numberimg",
        style: A({ height: e.numHeight + "px" })
      }, [
        (c(!0), d(Q, null, ie(e.num_total_len, (s, r) => (c(), d("view", {
          key: "cImg" + r,
          class: "nut-countup__numberimg__item",
          style: A({
            width: e.numWidth + "px",
            height: e.numHeight + "px",
            left: e.numWidth * (r > e.num_total_len - e.pointNum - 1 ? r == e.num_total_len - e.pointNum ? r * 1.5 : r * 1.3 : r) + "px",
            backgroundImage: "url(" + e.customBgImg + ")",
            backgroundPositionX: "0",
            backgroundPositionY: -(+String(e.relNum)[r] * e.numHeight + e.customSpacNum * +String(e.relNum)[r]) + "px",
            transition: "all linear " + e.during / 10 + "ms"
          })
        }, null, 4))), 128)),
        e.pointNum > 0 ? (c(), d("view", {
          key: 0,
          class: "nut-countup-pointstyl",
          style: A({
            width: e.numWidth / 2 + "px",
            bottom: 0,
            left: e.numWidth * (e.num_total_len - e.pointNum) * 1.1 + "px",
            fontSize: "30px"
          })
        }, ".", 4)) : T("", !0)
      ], 4))
    ], 64)) : (c(), d(Q, { key: 1 }, [
      e.scrolling ? (c(), d("view", {
        key: 0,
        class: "nut-countup__number",
        style: A({
          width: e.numWidth * e.num_total_len + e.numWidth / 3 + "px",
          height: e.numHeight + "px",
          lineHeight: e.numHeight + "px"
        })
      }, [
        (c(!0), d(Q, null, ie(e.num_total_len, (s, r) => (c(), d("view", {
          ref_for: !0,
          ref: (i) => e.setRef(i),
          key: s,
          class: "nut-countup__number-item",
          style: A({
            top: e.topNumber(r),
            left: e.numWidth * (r > e.num_total_len - e.pointNum - 1 ? r * 1.1 : r) + "px"
          }),
          "turn-number": e.turnNumber(r)
        }, [
          (c(!0), d(Q, null, ie(e.to0_10, (i, p) => (c(), d("view", {
            key: "dote" + p,
            class: "nut-countup__number-item__span",
            style: A({
              width: e.numWidth + "px",
              height: e.numHeight + "px",
              lineHeight: e.numHeight + "px"
            })
          }, E(i), 5))), 128))
        ], 12, B0))), 128)),
        e.pointNum > 0 ? (c(), d("view", {
          key: 0,
          class: "nut-countup-pointstyl",
          style: A({
            width: e.numWidth / 3 + "px",
            height: e.numHeight + "px",
            lineHeight: e.numHeight + "px",
            top: 0,
            left: e.numWidth * (e.num_total_len - e.pointNum) + "px"
          })
        }, ".", 4)) : T("", !0)
      ], 4)) : (c(), d(Q, { key: 1 }, [
        he(E(e.current), 1)
      ], 64))
    ], 64))
  ]);
}
const L0 = /* @__PURE__ */ ee(_0, [["render", M0]]), P0 = (e) => {
  if (!e)
    return Date.now();
  let t = e;
  return t = +t > 0 ? +t : t.toString().replace(/-/g, "/"), new Date(t).getTime();
}, { create: E0 } = q("countdown"), A0 = "NutCountdown", z0 = E0({
  props: {
    modelValue: {
      type: Object,
      default: () => ({})
    },
    paused: {
      default: !1,
      type: Boolean
    },
    startTime: {
      // 可以是服务器当前时间
      type: [Number, String],
      validator(e) {
        return new Date(e).toString().toLowerCase() !== "invalid date";
      }
    },
    endTime: {
      type: [Number, String],
      validator(e) {
        return new Date(e).toString().toLowerCase() !== "invalid date";
      }
    },
    // 是否开启毫秒
    millisecond: {
      default: !1,
      type: Boolean
    },
    // 时间格式化
    format: {
      type: String,
      default: "HH:mm:ss"
    },
    autoStart: {
      type: Boolean,
      default: !0
    },
    // 倒计时时长，单位毫秒
    time: {
      type: [Number, String],
      default: 0
    }
  },
  emits: [
    "input",
    "update:modelValue",
    "end",
    "restart",
    "paused",
    // will be deprecated
    "onEnd",
    "onRestart",
    "onPaused"
  ],
  setup(e, { emit: t, slots: n }) {
    const l = Se(A0), o = fe({
      restTime: 0,
      // 倒计时剩余时间时间
      timer: null,
      counting: !e.paused && e.autoStart,
      // 是否处于倒计时中
      handleEndTime: Date.now(),
      // 最终截止时间
      diffTime: 0
      // 设置了 startTime 时，与 date.now() 的差异
    }), a = N(() => i(o.restTime)), s = () => {
      o.handleEndTime = Number(e.endTime), o.diffTime = Date.now() - P0(e.startTime), o.counting || (o.counting = !0), r();
    }, r = () => {
      window !== void 0 && (o.timer = requestAnimationFrame(() => {
        if (o.counting) {
          const b = Date.now() - o.diffTime, $ = Math.max(o.handleEndTime - b, 0);
          o.restTime = $, $ || (o.counting = !1, y(), t("end"), t("onEnd")), $ > 0 && r();
        }
      }));
    }, i = (b, $) => {
      const k = b;
      let u = {
        d: 0,
        h: 0,
        m: 0,
        s: 0,
        ms: 0
      };
      const h = 1e3, m = 60 * h, w = 60 * m, I = 24 * w;
      return k > 0 && (u.d = k >= h ? Math.floor(k / I) : 0, u.h = Math.floor(k % I / w), u.m = Math.floor(k % w / m), u.s = Math.floor(k % m / h), u.ms = Math.floor(k % h)), $ == "custom" ? u : p(Z({}, u));
    }, p = (b) => {
      let { d: $, h: k, m: u, s: h, ms: m } = b, w = e.format;
      if (w.includes("DD") ? w = w.replace("DD", Qe($)) : k += Number($) * 24, w.includes("HH") ? w = w.replace("HH", Qe(k)) : u += Number(k) * 60, w.includes("mm") ? w = w.replace("mm", Qe(u)) : h += Number(u) * 60, w.includes("ss") ? w = w.replace("ss", Qe(h)) : m += Number(h) * 1e3, w.includes("S")) {
        const I = Qe(m, 3).toString();
        w.includes("SSS") ? w = w.replace("SSS", I) : w.includes("SS") ? w = w.replace("SS", I.slice(0, 2)) : w.includes("S") && (w = w.replace("S", I.slice(0, 1)));
      }
      return w;
    }, f = () => {
      !o.counting && !e.autoStart && (o.counting = !0, o.handleEndTime = Date.now() + Number(o.restTime), r(), t("restart", o.restTime), t("onRestart", o.restTime));
    }, y = () => {
      cancelAnimationFrame(o.timer), o.counting = !1, t("paused", o.restTime), t("onPaused", o.restTime);
    }, v = () => {
      e.autoStart || (y(), o.restTime = Number(e.time));
    };
    return jn(() => {
      e.autoStart ? s() : o.restTime = Number(e.time);
    }), x(
      () => o.restTime,
      (b) => {
        let $ = i(b, "custom");
        t("update:modelValue", $), t("input", $);
      }
    ), x(
      () => e.paused,
      (b, $) => {
        $ ? (o.counting || (o.counting = !0, o.handleEndTime = Date.now() + Number(o.restTime), r()), t("restart", o.restTime), t("onRestart", o.restTime)) : o.counting && y();
      }
    ), x(
      () => e.endTime,
      () => {
        s();
      }
    ), x(
      () => e.startTime,
      () => {
        s();
      }
    ), ce(Z({}, ge(e)), {
      slots: n,
      start: f,
      pause: y,
      renderTime: a,
      translate: l,
      reset: v
    });
  }
}), V0 = { class: "nut-countdown" }, O0 = ["innerHTML"];
function H0(e, t, n, l, o, a) {
  return c(), d("view", V0, [
    e.slots.default ? _(e.$slots, "default", { key: 0 }) : (c(), d("view", {
      key: 1,
      class: "nut-countdown__content",
      innerHTML: e.renderTime
    }, null, 8, O0))
  ]);
}
const R0 = /* @__PURE__ */ ee(z0, [["render", H0]]), $n = /* @__PURE__ */ Ce({
  name: "NutTag",
  __name: "tag",
  props: {
    color: { default: "" },
    textColor: { default: "" },
    type: { default: "default" },
    plain: { type: Boolean, default: !1 },
    round: { type: Boolean, default: !1 },
    mark: { type: Boolean, default: !1 },
    closeable: { type: Boolean, default: !1 }
  },
  emits: ["close", "click"],
  setup(e, { emit: t }) {
    const n = e, l = t, o = N(() => {
      const i = "nut-tag";
      return {
        [i]: !0,
        [`${i}--${n.type}`]: n.type,
        [`${i}--plain`]: n.plain,
        [`${i}--round`]: n.round,
        [`${i}--mark`]: n.mark
      };
    }), a = N(() => {
      const i = {};
      return n.textColor ? i.color = n.textColor : n.color && n.plain && (i.color = n.color), n.plain ? (i.background = "#fff", i.borderColor = n.color) : n.color && (i.background = n.color), i;
    }), s = (i) => {
      l("close", i);
    }, r = (i) => {
      l("click", i);
    };
    return (i, p) => (c(), d("view", {
      class: P(o.value),
      style: A(a.value),
      onClick: r
    }, [
      _(i.$slots, "default"),
      i.closeable ? (c(), J(ye(zt), {
        key: 0,
        class: "nut-tag--close",
        width: "12px",
        height: "12px",
        onClick: _e(s, ["stop"])
      })) : T("", !0)
    ], 6));
  }
});
Te($n);
const { create: F0 } = q("popover"), W0 = F0({
  components: {
    NutPopup: Ae
  },
  props: {
    visible: { type: Boolean, default: !1 },
    list: { type: Array, default: [] },
    theme: { type: String, default: "light" },
    location: { type: String, default: "bottom" },
    offset: { type: Array, default: [0, 12] },
    arrowOffset: { type: Number, default: 0 },
    customClass: { type: String, default: "" },
    showArrow: { type: Boolean, default: !0 },
    duration: { type: [Number, String], default: 0.3 },
    overlay: { type: Boolean, default: !1 },
    overlayClass: { type: String, default: "" },
    overlayStyle: { type: Object },
    closeOnClickOverlay: { type: Boolean, default: !0 },
    closeOnClickAction: { type: Boolean, default: !0 },
    closeOnClickOutside: { type: Boolean, default: !0 },
    targetId: { type: String, default: "" },
    bgColor: { type: String, default: "" }
  },
  emits: ["update", "update:visible", "close", "choose", "open"],
  setup(e, { emit: t }) {
    const n = z(), l = z(), o = z(e.visible), a = z(), s = z({
      width: 0,
      height: 0
    }), r = N(() => {
      const h = "nut-popover-arrow", m = e.location, w = m.split("-")[0];
      return `${h} ${h}-${w} ${h}--${m}`;
    }), i = N(() => {
      const h = {}, { bgColor: m, arrowOffset: w, location: I } = e, B = I.split("-")[0], L = I.split("-")[1], M = 16;
      return m && (h[`border${p(B)}Color`] = m), e.arrowOffset != 0 && (["bottom", "top"].includes(B) && (L || (h.left = `calc(50% + ${w}px)`), L == "start" && (h.left = `${M + w}px`), L == "end" && (h.right = `${M - w}px`)), ["left", "right"].includes(B) && (L || (h.top = `calc(50% - ${w}px)`), L == "start" && (h.top = `${M - w}px`), L == "end" && (h.bottom = `${M + w}px`))), h;
    }), p = (h) => (h = h.toLowerCase(), h = h.replace(/\b\w+\b/g, (m) => m.substring(0, 1).toUpperCase() + m.substring(1)), h), f = N(() => {
      const h = {};
      if (!a.value)
        return {};
      const m = s.value.width, w = s.value.height, { width: I, height: B, left: L, top: M, right: S } = a.value, { location: C, offset: D } = e, V = C == null ? void 0 : C.split("-")[0], j = C == null ? void 0 : C.split("-")[1];
      let X = 0, le = 0;
      if (Array.isArray(D) && (D == null ? void 0 : D.length) === 2 && (X += Number(D[1]), le += Number(D[0])), I) {
        if (["bottom", "top"].includes(V)) {
          const W = V === "bottom" ? B + X : -(w + X);
          h.top = `${M + W}px`, j || (h.left = `${-(m - I) / 2 + L + le}px`), j === "start" && (h.left = `${L + le}px`), j === "end" && (h.left = `${S + le}px`);
        }
        if (["left", "right"].includes(V)) {
          const W = V === "left" ? -(m + X) : I + X;
          h.left = `${L + W}px`, j || (h.top = `${M - w / 2 + B / 2 - 4 + le}px`), j === "start" && (h.top = `${M + le}px`), j === "end" && (h.top = `${M + B + le}px`);
        }
      }
      return h;
    }), y = () => {
      var m, w, I, B;
      const h = Ye(
        e.targetId ? document.querySelector(`#${e.targetId}`) : n.value
      );
      a.value = {
        width: h.width,
        height: h.height,
        left: h.left,
        top: h.top + Math.max(((m = document.documentElement) == null ? void 0 : m.scrollTop) || 0, ((w = document.body) == null ? void 0 : w.scrollTop) || 0),
        right: h.right
      }, s.value = {
        height: (I = l.value) == null ? void 0 : I.clientHeight,
        width: (B = l.value) == null ? void 0 : B.clientWidth
      };
    };
    be(() => {
      setTimeout(() => {
        y();
      }, 300);
    }), x(
      () => e.visible,
      (h) => {
        o.value = h, h ? (window.addEventListener("touchstart", u, !0), Ne(() => {
          y();
        })) : window.removeEventListener("touchstart", u, !0);
      }
    );
    const v = (h) => {
      t("update", h), t("update:visible", h);
    }, b = () => {
      v(!e.visible), t("open");
    }, $ = () => {
      t("update:visible", !1), t("close");
    }, k = (h, m) => {
      !h.disabled && t("choose", h, m), e.closeOnClickAction && $();
    }, u = (h) => {
      const m = n.value, w = l.value;
      let I = m && !m.contains(h.target);
      if (e.targetId) {
        const B = document.querySelector(`#${e.targetId}`);
        I = B && !B.contains(h.target);
      }
      I && w && !w.contains(h.target) && e.closeOnClickOutside && $();
    };
    return {
      showPopup: o,
      openPopover: b,
      popoverArrow: r,
      closePopover: $,
      chooseItem: k,
      popoverRef: n,
      popoverContentRef: l,
      getRootPosition: f,
      popoverArrowStyle: i,
      renderIcon: lt
    };
  }
}), Y0 = {
  ref: "popoverContentRef",
  class: "nut-popover-content-group"
}, j0 = ["onClick"], K0 = { class: "nut-popover-menu-item-name" };
function U0(e, t, n, l, o, a) {
  const s = U("nut-popup");
  return c(), d(Q, null, [
    e.targetId ? T("", !0) : (c(), d("div", {
      key: 0,
      ref: "popoverRef",
      class: "nut-popover-wrapper",
      onClick: t[0] || (t[0] = (...r) => e.openPopover && e.openPopover(...r))
    }, [
      _(e.$slots, "reference")
    ], 512)),
    (c(), J(Yn, { to: "body" }, [
      g("div", {
        class: P(["nut-popover", `nut-popover--${e.theme}`, `${e.customClass}`]),
        style: A(e.getRootPosition)
      }, [
        oe(s, {
          visible: e.showPopup,
          "onUpdate:visible": t[1] || (t[1] = (r) => e.showPopup = r),
          "pop-class": `nut-popover-content nut-popover-content--${e.location}`,
          style: A({ background: e.bgColor }),
          position: "",
          transition: "nut-popover",
          overlay: e.overlay,
          duration: e.duration,
          "overlay-style": e.overlayStyle,
          "overlay-class": e.overlayClass,
          "close-on-click-overlay": e.closeOnClickOverlay
        }, {
          default: ne(() => [
            g("div", Y0, [
              e.showArrow ? (c(), d("div", {
                key: 0,
                class: P(e.popoverArrow),
                style: A(e.popoverArrowStyle)
              }, null, 6)) : T("", !0),
              _(e.$slots, "content"),
              (c(!0), d(Q, null, ie(e.list, (r, i) => (c(), d("div", {
                key: i,
                class: P([r.className, r.disabled && "nut-popover-menu-disabled", "nut-popover-menu-item"]),
                onClick: _e((p) => e.chooseItem(r, i), ["stop"])
              }, [
                r.icon ? (c(), J(Oe(e.renderIcon(r.icon)), {
                  key: 0,
                  class: "nut-popover-item-img"
                })) : T("", !0),
                g("div", K0, E(r.name), 1)
              ], 10, j0))), 128))
            ], 512)
          ]),
          _: 3
        }, 8, ["visible", "pop-class", "style", "overlay", "duration", "overlay-style", "overlay-class", "close-on-click-overlay"])
      ], 6)
    ]))
  ], 64);
}
const Zo = /* @__PURE__ */ ee(W0, [["render", U0]]), { create: X0 } = q("skeleton"), q0 = X0({
  components: {
    NutAvatar: hn
  },
  props: {
    //每行宽度
    width: {
      type: String,
      default: "100px"
    },
    //每行高度
    height: {
      type: String,
      default: "15px"
    },
    //是否显示动画
    animated: {
      type: Boolean,
      default: !1
    },
    //头像
    avatar: {
      type: Boolean,
      default: !1
    },
    //头像形状：正方形/圆形
    avatarShape: {
      type: String,
      default: "round"
    },
    //头像大小
    avatarSize: {
      type: String,
      default: "50px"
    },
    //是否显示骨架屏
    loading: {
      type: Boolean,
      default: !0
    },
    //标题/段落 圆角风格
    round: {
      type: Boolean,
      default: !1
    },
    //显示段落行数
    row: {
      type: String,
      default: "1"
    },
    //是否显示段落标题
    title: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    const { avatarShape: t, round: n, avatarSize: l } = ge(e), o = N(() => {
      const r = "avatarClass";
      return {
        [r]: !0,
        [`${r}--${t.value}`]: t.value
      };
    });
    return {
      avatarShape: t,
      avatarClass: o,
      getBlockClass: (r) => ({
        [r]: !0,
        [`${r}--round`]: n.value
      }),
      getStyle: () => l.value ? {
        width: l.value,
        height: l.value
      } : {
        width: "50px",
        height: "50px"
      }
    };
  }
}), Z0 = { key: 0 }, G0 = {
  key: 1,
  class: "nut-skeleton"
}, J0 = {
  key: 0,
  class: "nut-skeleton-animation"
}, Q0 = { class: "nut-skeleton-content" };
function x0(e, t, n, l, o, a) {
  const s = U("nut-avatar");
  return e.loading ? (c(), d("view", G0, [
    e.animated ? (c(), d("view", J0)) : T("", !0),
    g("view", Q0, [
      e.avatar ? (c(), J(s, {
        key: 0,
        class: P(e.avatarClass),
        shape: e.avatarShape,
        style: A(e.getStyle())
      }, null, 8, ["class", "shape", "style"])) : T("", !0),
      g("view", {
        class: "nut-skeleton-content__line",
        style: A({ width: e.width })
      }, [
        e.title ? (c(), d("view", {
          key: 0,
          class: P(e.getBlockClass("nut-skeleton-blockTitle")),
          style: A({ height: e.height })
        }, null, 6)) : T("", !0),
        (c(!0), d(Q, null, ie(Number(e.row), (r) => (c(), d("view", {
          key: r,
          class: P(e.getBlockClass("nut-skeleton-blockLine")),
          style: A({ height: e.height })
        }, null, 6))), 128))
      ], 4)
    ])
  ])) : (c(), d("view", Z0, [
    _(e.$slots, "default")
  ]));
}
const eg = /* @__PURE__ */ ee(q0, [["render", x0]]), Go = Symbol("nut-collapse"), tg = { class: "nut-collapse" }, Jo = /* @__PURE__ */ Ce({
  name: "NutCollapse",
  __name: "collapse",
  props: {
    modelValue: { default: "" },
    accordion: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const n = e, l = t, o = z(n.modelValue || (n.accordion ? "" : []));
    x(
      () => n.modelValue,
      (i) => {
        o.value = i;
      }
    );
    const a = (i, p, f = !0) => {
      o.value = i, l("update:modelValue", i), l("change", i, p, f);
    };
    return ze(Go, {
      updateVal: (i) => {
        if (n.accordion)
          o.value === i ? a("", i, !1) : a(i, i, !0);
        else if (Array.isArray(o.value))
          if (o.value.includes(i)) {
            const p = o.value.filter((f) => f !== i);
            a(p, i, !1);
          } else {
            const p = o.value.concat([i]);
            a(p, i, !0);
          }
        else
          console.warn("[NutUI] <Collapse> 未开启手风琴模式时 v-model 应为数组");
      },
      isExpanded: (i) => n.accordion ? o.value === i : Array.isArray(o.value) ? o.value.includes(i) : !1
    }), (i, p) => (c(), d("view", tg, [
      _(i.$slots, "default")
    ]));
  }
});
Te(Jo);
const ng = { class: "nut-collapse-item__title-main" }, og = { class: "nut-collapse-item__title-main-value" }, lg = ["innerHTML"], sg = {
  key: 2,
  class: "nut-collapse-item__title-label"
}, ag = {
  key: 0,
  class: "nut-collapse-item__title-sub"
}, rg = ["innerHTML"], ig = {
  key: 0,
  class: "nut-collapse__item-extraWrapper"
}, ug = { class: "nut-collapse__item-extraWrapper__extraRender" }, Qo = /* @__PURE__ */ Ce({
  name: "NutCollapseItem",
  __name: "collapse-item",
  props: {
    title: { default: "" },
    value: { default: "" },
    label: { default: "" },
    disabled: { type: Boolean, default: !1 },
    name: { default: -1 },
    border: { type: Boolean, default: !0 },
    icon: { default: () => eo },
    rotate: { default: 180 }
  },
  setup(e) {
    const t = e, n = z(null), l = z(null), o = Ee(Go), a = N(() => {
      const v = "nut-collapse-item";
      return {
        [v]: !0,
        [v + "__border"]: t.border
      };
    }), s = N(() => o ? o.isExpanded(t.name) : !1), r = z(s.value ? "auto" : "0px"), i = () => {
      o && o.updateVal(t.name);
    }, p = () => {
      s.value && (r.value = "auto");
    }, f = () => {
      r.value = "0px", requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          var b;
          const v = (b = l.value) == null ? void 0 : b.offsetHeight;
          r.value = v ? `${v}px` : "auto";
        });
      });
    }, y = () => {
      var b;
      const v = (b = l.value) == null ? void 0 : b.offsetHeight;
      r.value = v ? `${v}px` : "auto", requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          r.value = "0px";
        });
      });
    };
    return x(s, (v) => {
      v ? f() : y();
    }), (v, b) => (c(), d("view", {
      class: P(a.value)
    }, [
      g("view", {
        class: P(["nut-collapse-item__title", { "nut-collapse-item__title--disabled": v.disabled }]),
        onClick: i
      }, [
        g("view", ng, [
          g("view", og, [
            v.$slots.title ? _(v.$slots, "title", { key: 0 }) : (c(), d("view", {
              key: 1,
              class: "nut-collapse-item__title-mtitle",
              innerHTML: v.title
            }, null, 8, lg)),
            v.label ? (c(), d("view", sg, E(v.label), 1)) : T("", !0)
          ])
        ]),
        v.$slots.value ? (c(), d("view", ag, [
          _(v.$slots, "value")
        ])) : (c(), d("view", {
          key: 1,
          class: "nut-collapse-item__title-sub",
          innerHTML: v.value
        }, null, 8, rg)),
        g("view", {
          class: P(["nut-collapse-item__title-icon", { "nut-collapse-item__title-icon--expanded": s.value }]),
          style: A({ transform: "rotate(" + (s.value ? v.rotate : 0) + "deg)" })
        }, [
          v.$slots.icon ? _(v.$slots, "icon", { key: 0 }) : (c(), J(Oe(ye(lt)(v.icon)), { key: 1 }))
        ], 6)
      ], 2),
      v.$slots.extra ? (c(), d("view", ig, [
        g("div", ug, [
          _(v.$slots, "extra")
        ])
      ])) : T("", !0),
      g("view", {
        ref_key: "wrapperRef",
        ref: n,
        class: "nut-collapse__item-wrapper",
        style: A({
          willChange: "height",
          height: r.value
        }),
        onTransitionend: p
      }, [
        g("view", {
          ref_key: "contentRef",
          ref: l,
          class: "nut-collapse__item-wrapper__content"
        }, [
          _(v.$slots, "default")
        ], 512)
      ], 36)
    ], 2));
  }
});
Te(Qo);
const cg = Ce({
  props: {
    slots: {
      type: Array,
      default: () => []
    },
    record: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    return () => we("view", {}, e.slots[0] ? e.slots[0](e.record) : e.slots[1](e.record));
  }
}), { create: dg } = q("table"), fg = "NutTable", pg = dg({
  components: {
    RenderColumn: cg,
    DownArrow: eo
  },
  props: {
    bordered: {
      type: Boolean,
      default: !0
    },
    columns: {
      type: Array,
      default: () => []
    },
    data: {
      type: Object,
      default: () => ({})
    },
    summary: {
      type: Function,
      default: null
    },
    striped: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["sorter"],
  setup(e, { emit: t }) {
    const n = Se(fg), l = fe({
      curData: e.data
    }), o = (y) => ({
      "nut-table__main__head__tr--border": e.bordered,
      [`nut-table__main__head__tr--align${y.align ? y.align : ""}`]: !0
    }), a = (y) => y.stylehead ? y.stylehead : "", s = (y) => y.stylecolumn ? y.stylecolumn : "", r = (y) => e.columns.filter((v) => v.key === y)[0], i = (y) => {
      const v = e.columns.filter((b) => b.key === y);
      return v[0].stylecolumn ? v[0].stylecolumn : "";
    }, p = (y) => {
      y.sorter && (t("sorter", y), l.curData = typeof y.sorter == "function" ? l.curData.sort(y.sorter) : y.sorter === "default" ? l.curData.sort() : l.curData);
    }, f = () => e.columns.map((y) => [y.key, y.render]);
    return x(
      () => e.data,
      (y) => {
        l.curData = y.slice();
      }
    ), ce(Z({}, ge(l)), {
      cellClasses: o,
      getColumnItem: r,
      getColumnItemStyle: i,
      handleSorterClick: p,
      sortDataItem: f,
      translate: n,
      stylehead: a,
      stylecolumn: s
    });
  }
}), mg = { class: "nut-table" }, hg = { class: "nut-table__main__head" }, gg = { class: "nut-table__main__head__tr" }, vg = ["onClick"], yg = { class: "nut-table__main__body" }, bg = { key: 1 }, $g = {
  key: 0,
  class: "nut-table__nodata"
}, wg = {
  key: 0,
  class: "nut-table__nodata__text"
}, kg = {
  key: 1,
  class: "nut-table__summary"
}, Cg = ["innerHTML"];
function Sg(e, t, n, l, o, a) {
  const s = U("DownArrow"), r = U("RenderColumn");
  return c(), d("view", mg, [
    g("view", {
      class: P(["nut-table__main", { "nut-table__main--striped": e.striped }])
    }, [
      g("view", hg, [
        g("view", gg, [
          (c(!0), d(Q, null, ie(e.columns, (i) => (c(), d("span", {
            key: i.key,
            class: P(["nut-table__main__head__tr__th", e.cellClasses(i)]),
            style: A(i.stylehead),
            onClick: (p) => e.handleSorterClick(i)
          }, [
            he(E(i.title) + " ", 1),
            _(e.$slots, "icon"),
            !e.$slots.icon && i.sorter ? (c(), J(s, {
              key: 0,
              width: "12px",
              height: "12px"
            })) : T("", !0)
          ], 14, vg))), 128))
        ])
      ]),
      g("view", yg, [
        (c(!0), d(Q, null, ie(e.curData, (i) => (c(), d("view", {
          key: i,
          class: "nut-table__main__body__tr"
        }, [
          (c(!0), d(Q, null, ie(e.sortDataItem(), ([p, f]) => (c(), d("span", {
            key: p,
            class: P(["nut-table__main__body__tr__td", e.cellClasses(e.getColumnItem(p))]),
            style: A(e.getColumnItemStyle(p))
          }, [
            typeof i[p] == "function" || typeof f == "function" ? (c(), J(r, {
              key: 0,
              slots: [f, i[p]],
              record: i
            }, null, 8, ["slots", "record"])) : (c(), d("view", bg, E(i[p]), 1))
          ], 6))), 128))
        ]))), 128))
      ])
    ], 2),
    e.curData.length ? T("", !0) : (c(), d("view", $g, [
      g("div", {
        class: P(["nut-table__nodata", { "nut-table__nodata--border": e.bordered }])
      }, [
        _(e.$slots, "nodata"),
        e.$slots.nodata ? T("", !0) : (c(), d("div", wg, E(e.translate("noData")), 1))
      ], 2)
    ])),
    e.summary ? (c(), d("view", kg, [
      g("span", {
        class: "nut-table__summary__text",
        innerHTML: e.summary().value
      }, null, 8, Cg)
    ])) : T("", !0)
  ]);
}
const Tg = /* @__PURE__ */ ee(pg, [["render", Sg]]), Ng = { class: "nut-animate" }, xo = /* @__PURE__ */ Ce({
  name: "NutAnimate",
  __name: "animate",
  props: {
    type: {},
    show: { type: Boolean, default: !1 },
    action: { default: "" },
    loop: { type: Boolean, default: !1 },
    duration: { default: 500 }
  },
  emits: ["click", "animate"],
  setup(e, { emit: t }) {
    const n = e, l = t, o = z(n.action === "initial" || n.show === !0 || n.loop), a = N(() => ({
      "nut-animate__container": !0,
      [`nut-animate-${n.type}`]: o.value,
      loop: n.loop
    })), s = () => {
      o.value = !1, requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          o.value = !0;
        });
      });
    }, r = (i) => {
      n.action === "click" && (s(), l("click", i), l("animate"));
    };
    return x(
      () => n.show,
      (i) => {
        i && (s(), l("animate"));
      }
    ), (i, p) => (c(), d("view", Ng, [
      g("view", {
        class: P(a.value),
        style: A({
          animationDuration: i.duration ? `${i.duration}ms` : void 0
        }),
        onClick: r
      }, [
        _(i.$slots, "default")
      ], 6)
    ]));
  }
});
Te(xo);
const { create: Dg } = q("ellipsis"), _g = Dg({
  props: {
    content: {
      type: String,
      default: ""
    },
    direction: {
      type: String,
      default: "end"
    },
    rows: {
      type: [Number, String],
      default: 1
    },
    expandText: {
      type: String,
      default: ""
    },
    collapseText: {
      type: String,
      default: ""
    },
    symbol: {
      type: String,
      default: "..."
    },
    lineHeight: {
      type: [Number, String],
      default: "20"
    }
  },
  emits: ["click", "change"],
  setup(e, { emit: t }) {
    const n = z(null);
    let l = null, o = 0;
    const a = z(), s = fe({
      exceeded: !1,
      //是否超出
      expanded: !1
      //是否折叠
    });
    x(
      () => e.content,
      ($, k) => {
        $ != k && r();
      }
    ), be(() => {
      r();
    });
    const r = () => {
      if (!n.value)
        return;
      const $ = window.getComputedStyle(n.value);
      l = document.createElement("div"), Array.prototype.slice.apply($).forEach((h) => {
        l.style.setProperty(h, $.getPropertyValue(h));
      }), l.style.position = "fixed", l.style.left = "999999px", l.style.top = "999999px", l.style.zIndex = "-1000", l.style.height = "auto", l.style.minHeight = "auto", l.style.maxHeight = "auto", l.style.textOverflow = "clip", l.style.whiteSpace = "normal", l.style.webkitLineClamp = "unset", l.style.display = "block";
      const u = y($.lineHeight === "normal" ? e.lineHeight : $.lineHeight);
      o = Math.floor(
        u * (Number(e.rows) + 0.5) + y($.paddingTop) + y($.paddingBottom)
      ), l.innerText = e.content, document.body.appendChild(l), i();
    }, i = () => {
      if (l.offsetHeight <= o)
        s.exceeded = !1, document.body.removeChild(l);
      else {
        s.exceeded = !0;
        const $ = e.content.length, k = Math.floor((0 + $) / 2), u = e.direction === "middle" ? f([0, k], [k, $]) : p(0, $);
        a.value = u, document.body.removeChild(l);
      }
    }, p = ($, k) => {
      const u = s.expanded ? e.collapseText : e.expandText, h = e.content.length;
      if (k - $ <= 1)
        return e.direction === "end" ? {
          leading: e.content.slice(0, $) + e.symbol
        } : {
          tailing: e.symbol + e.content.slice(k, h)
        };
      const m = Math.round(($ + k) / 2);
      return e.direction === "end" ? l.innerText = e.content.slice(0, m) + e.symbol + u : l.innerText = u + e.symbol + e.content.slice(m, h), l.offsetHeight <= o ? e.direction === "end" ? p(m, k) : p($, m) : e.direction === "end" ? p($, m) : p(m, k);
    }, f = ($, k) => {
      const u = s.expanded ? e.collapseText : e.expandText, h = e.content.length;
      if ($[1] - $[0] <= 1 && k[1] - k[0] <= 1)
        return {
          leading: e.content.slice(0, $[0]) + e.symbol,
          tailing: e.symbol + e.content.slice(k[1], h)
        };
      const m = Math.floor(($[0] + $[1]) / 2), w = Math.ceil((k[0] + k[1]) / 2);
      return l.innerText = e.content.slice(0, m) + e.symbol + u + e.symbol + e.content.slice(w, h), l.offsetHeight <= o ? f([m, $[1]], [k[0], w]) : f([$[0], m], [w, k[1]]);
    }, y = ($) => {
      if (!$)
        return 0;
      const k = $.match(/^\d*(\.\d*)?/);
      return k ? Number(k[0]) : 0;
    }, v = ($) => {
      $ == 1 ? (s.expanded = !0, t("change", "expand")) : (s.expanded = !1, t("change", "collapse"));
    }, b = () => {
      t("click");
    };
    return ce(Z({}, ge(s)), { root: n, ellipsis: a, clickHandle: v, handleClick: b });
  }
}), Ig = { key: 0 }, Bg = { key: 1 }, Mg = { key: 2 };
function Lg(e, t, n, l, o, a) {
  return c(), d("view", {
    ref: "root",
    class: "nut-ellipsis",
    onClick: t[2] || (t[2] = (...s) => e.handleClick && e.handleClick(...s))
  }, [
    e.exceeded ? T("", !0) : (c(), d("view", Ig, E(e.content), 1)),
    e.exceeded && !e.expanded ? (c(), d("view", Bg, [
      he(E(e.ellipsis && e.ellipsis.leading), 1),
      e.expandText ? (c(), d("span", {
        key: 0,
        class: "nut-ellipsis__text",
        onClick: t[0] || (t[0] = _e((s) => e.clickHandle(1), ["stop"]))
      }, E(e.expandText), 1)) : T("", !0),
      he(E(e.ellipsis && e.ellipsis.tailing), 1)
    ])) : T("", !0),
    e.exceeded && e.expanded ? (c(), d("view", Mg, [
      he(E(e.content) + " ", 1),
      e.expandText ? (c(), d("span", {
        key: 0,
        class: "nut-ellipsis__text",
        onClick: t[1] || (t[1] = _e((s) => e.clickHandle(2), ["stop"]))
      }, E(e.collapseText), 1)) : T("", !0)
    ])) : T("", !0)
  ], 512);
}
const Pg = /* @__PURE__ */ ee(_g, [["render", Lg]]), { componentName: Eg, create: Ag } = q("watermark"), zg = Ag({
  props: {
    name: {
      type: String,
      default: ""
    },
    gapY: {
      type: Number,
      default: 48
    },
    gapX: {
      type: Number,
      default: 24
    },
    zIndex: {
      type: Number,
      default: 2e3
    },
    width: {
      type: Number,
      default: 120
    },
    height: {
      type: Number,
      default: 64
    },
    rotate: {
      type: Number,
      default: -22
    },
    image: {
      type: String,
      default: ""
    },
    imageWidth: {
      type: Number,
      default: 120
    },
    imageHeight: {
      type: Number,
      default: 64
    },
    content: {
      type: [String, Array],
      default: ""
    },
    fontColor: {
      type: String,
      default: "rgba(0,0,0,.15)"
    },
    fontStyle: {
      type: String,
      default: "normal"
    },
    fontFamily: {
      type: String,
      default: "PingFang SC"
    },
    fontWeight: {
      type: String,
      default: "normal"
    },
    fontSize: {
      type: [String, Number],
      default: 14
    },
    fullPage: {
      type: Boolean,
      default: ""
    }
  },
  emits: ["click"],
  setup(e) {
    const t = fe({
      base64Url: ""
    }), {
      zIndex: n,
      gapX: l,
      gapY: o,
      width: a,
      height: s,
      rotate: r,
      image: i,
      imageWidth: p,
      imageHeight: f,
      content: y,
      fontStyle: v,
      fontWeight: b,
      fontColor: $,
      fontSize: k,
      fontFamily: u
    } = e, h = () => {
      const w = document.createElement("canvas"), I = window.devicePixelRatio, B = w.getContext("2d"), L = `${(l + a) * I}px`, M = `${(o + s) * I}px`, S = a * I, C = s * I;
      if (w.setAttribute("width", L), w.setAttribute("height", M), B) {
        if (i) {
          B.translate(S / 2, C / 2), B.rotate(Math.PI / 180 * Number(r));
          const D = new Image();
          D.crossOrigin = "anonymous", D.referrerPolicy = "no-referrer", D.src = i, D.onload = () => {
            B.drawImage(
              D,
              -p * I / 2,
              -f * I / 2,
              p * I,
              f * I
            ), B.restore(), t.base64Url = w.toDataURL();
          };
        } else if (y) {
          B.textBaseline = "middle", B.textAlign = "center", B.translate(S / 2, C / 2), B.rotate(Math.PI / 180 * Number(r));
          const D = Number(k) * I;
          B.font = `${v} normal ${b} ${D}px/${C}px ${u}`, B.fillStyle = $, Array.isArray(y) ? y.map((V, j) => {
            B.fillText(V, 0, (j - 1) * D);
          }) : B.fillText(y, 0, 0), B.restore(), t.base64Url = w.toDataURL();
        }
      } else
        throw new Error("当前环境不支持Canvas");
    };
    h(), x(
      () => [
        n,
        l,
        o,
        a,
        s,
        r,
        i,
        p,
        f,
        y,
        v,
        b,
        $,
        k,
        u
      ],
      () => {
        h();
      }
    );
    const m = N(() => {
      const w = Eg;
      return {
        [w]: !0,
        [`${w}-full-page`]: e.fullPage
      };
    });
    return ce(Z({}, ge(t)), { classes: m });
  }
});
function Vg(e, t, n, l, o, a) {
  return c(), d("view", {
    class: P(e.classes),
    style: A({
      zIndex: e.zIndex,
      backgroundSize: `${e.gapX + e.width}px`,
      backgroundImage: `url('${e.base64Url}')`
    })
  }, null, 6);
}
const Og = /* @__PURE__ */ ee(zg, [["render", Vg]]), Hg = { class: "nut-trend-arrow" }, el = /* @__PURE__ */ Ce({
  name: "NutTrendArrow",
  __name: "trend-arrow",
  props: {
    rate: { default: 0 },
    digits: { default: 2 },
    showSign: { type: Boolean, default: !1 },
    showZero: { type: Boolean, default: !1 },
    arrowLeft: { type: Boolean, default: !1 },
    syncTextColor: { type: Boolean, default: !0 },
    textColor: { default: "#333" },
    riseColor: { default: "#fa2c19" },
    dropColor: { default: "#64b578" }
  },
  setup(e) {
    const t = e, n = N(() => t.rate > 0), l = N(() => {
      const a = Math.abs(t.rate);
      return !t.showZero && t.rate === 0 ? "--" : `${t.showSign && t.rate !== 0 ? n.value ? "+" : "-" : ""}${$l(
        Number(a),
        t.digits
      )}%`;
    }), o = N(() => ({
      color: t.rate === 0 ? t.textColor : t.syncTextColor ? n.value ? t.riseColor : t.dropColor : t.textColor
    }));
    return (a, s) => (c(), d("view", Hg, [
      a.arrowLeft ? T("", !0) : (c(), d("span", {
        key: 0,
        class: "nut-trend-arrow-icon-before nut-trend-arrow-rate",
        style: A(o.value)
      }, E(l.value), 5)),
      Number(a.rate) !== 0 && n.value ? _(a.$slots, "up-icon", { key: 1 }, () => [
        oe(ye(ii), { color: a.riseColor }, null, 8, ["color"])
      ]) : T("", !0),
      Number(a.rate) !== 0 && !n.value ? _(a.$slots, "down-icon", { key: 2 }, () => [
        oe(ye(oi), { color: a.dropColor }, null, 8, ["color"])
      ]) : T("", !0),
      a.arrowLeft ? (c(), d("span", {
        key: 3,
        class: "nut-trend-arrow-icon-after nut-trend-arrow-rate",
        style: A(o.value)
      }, E(l.value), 5)) : T("", !0)
    ]));
  }
});
Te(el);
const { create: Rg } = q("tour"), Fg = Rg({
  components: {
    NutPopover: Zo,
    Close: zt
  },
  props: {
    modelValue: { type: Boolean, default: !1 },
    type: {
      type: String,
      default: "step"
    },
    steps: {
      type: Array,
      default: () => []
    },
    location: {
      type: String,
      default: "bottom"
    },
    current: {
      type: Number,
      default: 0
    },
    nextStepTxt: {
      type: String,
      default: "下一步"
    },
    prevStepTxt: {
      type: String,
      default: "上一步"
    },
    completeTxt: {
      type: String,
      default: "完成"
    },
    mask: {
      type: Boolean,
      default: !0
    },
    offset: {
      type: Array,
      default: [8, 10]
    },
    bgColor: {
      type: String,
      default: ""
    },
    theme: {
      type: String,
      default: "light"
    },
    maskWidth: {
      type: [Number, String],
      default: ""
    },
    maskHeight: {
      type: [Number, String],
      default: ""
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: !0
    },
    showPrevStep: {
      type: Boolean,
      default: !0
    },
    showTitleBar: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["update:modelValue", "change", "close"],
  setup(e, { emit: t }) {
    const n = fe({
      showTour: e.modelValue,
      showPopup: !1,
      active: 0
    }), l = z({}), o = N(() => "nut-tour"), a = N(() => {
      const { offset: f, maskWidth: y, maskHeight: v } = e, { width: b, height: $, left: k, top: u } = l.value, h = [k + b / 2, u + $ / 2], m = Number(y || b), w = Number(v || $);
      return {
        width: `${m + +f[1] * 2}px`,
        height: `${w + +f[0] * 2}px`,
        top: `${h[1] - w / 2 - +f[0]}px`,
        left: `${h[0] - m / 2 - +f[1]}px`
      };
    }), s = (f) => {
      f == "next" ? n.active = n.active + 1 : n.active = n.active - 1, n.showPopup = !1, Ne(() => {
        n.showPopup = !0, r();
      }), t("change", n.active);
    }, r = () => {
      const f = document.querySelector(`#${e.steps[n.active].target}`), y = Ye(f);
      l.value = y;
    }, i = () => {
      n.showTour = !1, n.showPopup = !1, t("close", n.active), t("update:modelValue", !1);
    }, p = () => {
      e.closeOnClickOverlay && i();
    };
    return be(() => {
      n.active = 0, r();
    }), x(
      () => e.modelValue,
      (f) => {
        f && r(), n.active = 0, n.showTour = f, n.showPopup = f;
      }
    ), ce(Z({}, ge(n)), {
      classes: o,
      maskStyle: a,
      changeStep: s,
      close: i,
      handleClickMask: p
    });
  }
}), Wg = {
  key: 0,
  class: "nut-tour-content"
}, Yg = {
  key: 0,
  class: "nut-tour-content-top"
}, jg = { class: "nut-tour-content-inner" }, Kg = { class: "nut-tour-content-bottom" }, Ug = { class: "nut-tour-content-bottom-init" }, Xg = { class: "nut-tour-content-bottom-operate" }, qg = {
  key: 1,
  class: "nut-tour-content nut-tour-content-tile"
}, Zg = { class: "nut-tour-content-inner" };
function Gg(e, t, n, l, o, a) {
  const s = U("Close"), r = U("nut-popover");
  return c(), d("div", {
    class: P(e.classes)
  }, [
    Ie(g("div", {
      class: "nut-tour-masked",
      onClick: t[0] || (t[0] = (...i) => e.handleClickMask && e.handleClickMask(...i))
    }, null, 512), [
      [Me, e.showTour]
    ]),
    (c(!0), d(Q, null, ie(e.steps, (i, p) => (c(), d("div", {
      key: p,
      style: { height: "0" }
    }, [
      p == e.active ? (c(), d(Q, { key: 0 }, [
        e.showTour ? (c(), d("div", {
          key: 0,
          id: "nut-tour-popid",
          class: P(["nut-tour-mask", [e.mask ? "" : "nut-tour-mask-none"]]),
          style: A(e.maskStyle)
        }, null, 6)) : T("", !0),
        oe(r, {
          visible: e.showPopup,
          "onUpdate:visible": t[5] || (t[5] = (f) => e.showPopup = f),
          location: i.location || e.location,
          "target-id": "nut-tour-popid",
          "bg-color": e.bgColor,
          theme: e.theme,
          "close-on-click-outside": !1,
          offset: i.popoverOffset || [0, 12],
          "arrow-offset": i.arrowOffset || 0
        }, {
          content: ne(() => [
            _(e.$slots, "default", {}, () => [
              e.type == "step" ? (c(), d("div", Wg, [
                e.showTitleBar ? (c(), d("div", Yg, [
                  g("div", {
                    onClick: t[1] || (t[1] = (...f) => e.close && e.close(...f))
                  }, [
                    oe(s, { class: "nut-tour-content-top-close" })
                  ])
                ])) : T("", !0),
                g("div", jg, E(i.content), 1),
                g("div", Kg, [
                  g("div", Ug, E(e.active + 1) + "/" + E(e.steps.length), 1),
                  g("div", Xg, [
                    _(e.$slots, "prev-step", {}, () => [
                      e.active != 0 && e.showPrevStep ? (c(), d("div", {
                        key: 0,
                        class: "nut-tour-content-bottom-operate-btn",
                        onClick: t[2] || (t[2] = (f) => e.changeStep("prev"))
                      }, E(e.prevStepTxt), 1)) : T("", !0)
                    ]),
                    e.steps.length - 1 == e.active ? (c(), d("div", {
                      key: 0,
                      class: "nut-tour-content-bottom-operate-btn active",
                      onClick: t[3] || (t[3] = (...f) => e.close && e.close(...f))
                    }, E(e.completeTxt), 1)) : T("", !0),
                    _(e.$slots, "next-step", {}, () => [
                      e.steps.length - 1 != e.active ? (c(), d("div", {
                        key: 0,
                        class: "nut-tour-content-bottom-operate-btn active",
                        onClick: t[4] || (t[4] = (f) => e.changeStep("next"))
                      }, E(e.nextStepTxt), 1)) : T("", !0)
                    ])
                  ])
                ])
              ])) : T("", !0),
              e.type == "tile" ? (c(), d("div", qg, [
                g("div", Zg, E(i.content), 1)
              ])) : T("", !0)
            ])
          ]),
          _: 2
        }, 1032, ["visible", "location", "bg-color", "theme", "offset", "arrow-offset"])
      ], 64)) : T("", !0)
    ]))), 128))
  ], 2);
}
const Jg = /* @__PURE__ */ ee(Fg, [["render", Gg]]), { create: Qg } = q("address"), xg = "NutAddress", ev = Qg({
  components: {
    NutPopup: Ae,
    NutElevator: ko,
    Location: Ca,
    Location2: _a,
    Check: Jn,
    Close: zt,
    Left: ln
  },
  inheritAttrs: !1,
  props: ce(Z({}, Nt), {
    modelValue: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      default: "custom"
    },
    customAddressTitle: {
      type: String,
      default: ""
    },
    province: {
      type: Array,
      default: () => []
    },
    city: {
      type: Array,
      default: () => []
    },
    // 市
    country: {
      type: Array,
      default: () => []
    },
    // 县
    town: {
      type: Array,
      default: () => []
    },
    // 镇
    isShowCustomAddress: {
      type: Boolean,
      default: !0
    },
    existAddress: {
      type: Array,
      default: () => []
    },
    existAddressTitle: {
      type: String,
      default: ""
    },
    customAndExistTitle: {
      type: String,
      default: ""
    },
    height: {
      type: [String, Number],
      default: "200px"
    },
    columnsPlaceholder: {
      type: [String, Array],
      default: ""
    }
  }),
  emits: ["update:visible", "update:modelValue", "type", "change", "selected", "close", "closeMask", "switchModule"],
  setup(e, { emit: t }) {
    const n = Se(xg), l = z(null), o = z(null), a = z(e.visible), s = z(e.type), r = z(0), i = z(0), p = z(["province", "city", "country", "town"]), f = z(null), y = z([0, 0, 0, 0]), v = fe([]), b = N(() => {
      switch (r.value) {
        case 0:
          return e.province;
        case 1:
          return e.city;
        case 2:
          return e.country;
        default:
          return e.town;
      }
    }), $ = (Y) => {
      if (!Array.isArray(Y))
        throw new TypeError("params muse be array.");
      if (!Y.length)
        return [];
      Y.forEach((te) => {
        if (!te.title) {
          console.warn("[NutUI] <Address> 请检查数组选项的 title 值是否有设置 ,title 为必填项 .");
          return;
        }
      });
      const R = [];
      return Y = Y.sort((te, K) => te.title.localeCompare(K.title)), Y.forEach((te) => {
        const K = R.findIndex((se) => se.title === te.title);
        K <= -1 ? R.push({
          title: te.title,
          list: [].concat(te)
        }) : R[K].list.push(te);
      }), R;
    };
    let k = z([]), u = fe({});
    const h = z("self"), m = z(20), w = () => {
      v[0] = e.province || [], v[1] = e.city || [], v[2] = e.country || [], v[3] = e.town || [];
      const Y = e.modelValue, R = Y.length;
      if (R > 0) {
        if (r.value = R - 1, b.value.length == 0) {
          r.value = 0;
          return;
        }
        for (let te = 0; te < R; te++) {
          let K = v[te];
          k.value[te] = K.filter((se) => se.id == Y[te])[0];
        }
        B();
      }
    }, I = (Y, R) => Y && Y.name || r.value < R && Y ? Y.name : e.columnsPlaceholder[R] || n("select"), B = () => {
      S(), Ne(() => {
        const Y = o.value && o.value.getElementsByClassName("active")[0];
        if (Y) {
          const R = Y.offsetLeft;
          m.value = R || 20;
        }
      });
    }, L = (Y) => {
      var K;
      const R = r.value;
      i.value = r.value;
      const te = {
        custom: p.value[R]
      };
      k.value[R] = Y, k.value.splice(R + 1, k.value.length - (R + 1)), te.value = Y, ((K = v[R + 1]) == null ? void 0 : K.length) > 0 ? (r.value = R + 1, B(), te.next = p.value[r.value]) : (V(), t("update:modelValue")), t("change", te);
    }, M = (Y, R) => {
      i.value = r.value, I(Y, R) && (r.value = R, B());
    }, S = () => {
      const Y = f.value, R = i.value, te = y.value[r.value];
      Y != null && Y.scrollTop && (y.value[R] = Y == null ? void 0 : Y.scrollTop), Ne(() => {
        Y == null || Y.scrollTo({
          top: te,
          behavior: "auto"
        });
      });
    }, C = (Y) => {
      const R = e.existAddress;
      let te = {};
      R.forEach((K) => {
        K && K.selectedAddress && (te = K), K.selectedAddress = !1;
      }), Y.selectedAddress = !0, u = Y, t("selected", te, Y, R), V();
    }, D = () => {
      k.value = [], r.value = 0, B();
    }, V = (Y = "self") => {
      h.value = Y == "cross" ? "cross" : "self", a.value = !1;
    }, j = () => {
      h.value = "mask";
    }, X = () => {
      const Y = {
        addressIdStr: "",
        addressStr: "",
        province: k.value[0],
        city: k.value[1],
        country: k.value[2],
        town: k.value[3]
      }, R = {
        data: {},
        type: s.value
      };
      ["custom", "custom2"].includes(s.value) ? ([0, 1, 2, 3].forEach((te) => {
        const K = k.value[te];
        Y.addressIdStr += `${te ? "_" : ""}${K && K.id || 0}`, Y.addressStr += K && K.name || "";
      }), R.data = Y) : R.data = u, D(), h.value == "self" ? t("close", R) : t("closeMask", { closeWay: h }), t("update:visible", !1);
    }, le = () => {
      const Y = s.value;
      s.value = Y == "exist" ? "custom" : "exist", D(), t("switchModule", { type: s.value });
    }, W = (Y, R) => {
      L(R);
    };
    return x(
      () => e.visible,
      (Y) => {
        a.value = Y;
      }
    ), x(
      () => a.value,
      (Y) => {
        Y && w();
      }
    ), ce(Z({
      showPopup: a,
      privateType: s,
      tabIndex: r,
      tabName: p,
      selectedRegion: k,
      switchModule: le,
      closeWay: h,
      close: X,
      getTabName: I,
      nextAreaList: L,
      regionLine: l,
      tabRegion: o,
      lineDistance: m,
      changeRegionTab: M,
      selectedExist: C,
      clickOverlay: j,
      handClose: V,
      handleElevatorItem: W,
      initCustomSelected: w
    }, ge(e)), {
      translate: n,
      regionList: b,
      transformData: $,
      scrollDom: f
    });
  }
}), tv = { class: "nut-address" }, nv = { class: "nut-address__header" }, ov = { class: "nut-address__header__title" }, lv = {
  key: 0,
  class: "nut-address__custom"
}, sv = {
  ref: "tabRegion",
  class: "nut-address__region"
}, av = ["onClick"], rv = {
  key: 0,
  class: "active nut-address__region-item"
}, iv = {
  key: 0,
  class: "nut-address__detail"
}, uv = {
  ref: "scrollDom",
  class: "nut-address__detail-list"
}, cv = ["onClick"], dv = {
  key: 1,
  class: "nut-address__elevator-group"
}, fv = {
  key: 1,
  class: "nut-address__exist"
}, pv = { class: "nut-address__exist-group" }, mv = { class: "nut-address__exist-group-list" }, hv = ["onClick"], gv = { class: "nut-address__exist-item-info" }, vv = {
  key: 0,
  class: "nut-address__exist-item-info-name"
}, yv = {
  key: 1,
  class: "nut-address__exist-item-info-phone"
}, bv = { class: "nut-address__exist-item-info-bottom" }, $v = { class: "nut-address__exist-choose-btn" };
function wv(e, t, n, l, o, a) {
  const s = U("Left"), r = U("Close"), i = U("Check"), p = U("nut-elevator"), f = U("Location2"), y = U("nut-popup");
  return c(), J(y, {
    visible: e.showPopup,
    "onUpdate:visible": t[3] || (t[3] = (v) => e.showPopup = v),
    position: "bottom",
    "lock-scroll": e.lockScroll,
    round: e.round,
    "teleport-disable": e.teleportDisable,
    teleport: e.teleport,
    "z-index": e.zIndex,
    onClose: e.close,
    onClickOverlay: e.clickOverlay,
    onOpen: t[4] || (t[4] = (v) => e.closeWay = "self")
  }, {
    default: ne(() => [
      g("view", tv, [
        g("view", nv, [
          g("view", {
            class: "nut-address__header-back",
            onClick: t[0] || (t[0] = (...v) => e.switchModule && e.switchModule(...v))
          }, [
            _(e.$slots, "back-icon", {}, () => [
              Ie(oe(s, { size: "14px" }, null, 512), [
                [Me, e.type == "exist" && e.privateType == "custom"]
              ])
            ])
          ]),
          g("view", ov, E(e.privateType == "custom" ? e.customAddressTitle || e.translate("selectRegion") : e.existAddressTitle || e.translate("deliveryTo")), 1),
          g("view", {
            class: "nut-address__header-close",
            onClick: t[1] || (t[1] = (v) => e.handClose("cross"))
          }, [
            _(e.$slots, "close-icon", {}, () => [
              oe(r, {
                color: "#cccccc",
                size: "14px"
              })
            ])
          ])
        ]),
        ["custom", "custom2"].includes(e.privateType) ? (c(), d("view", lv, [
          g("view", sv, [
            (c(!0), d(Q, null, ie(e.selectedRegion, (v, b) => (c(), d("view", {
              key: b,
              class: P(["nut-address__region-item", b == e.tabIndex ? "active" : ""]),
              onClick: ($) => e.changeRegionTab(v, b)
            }, [
              g("view", null, E(e.getTabName(v, b)), 1)
            ], 10, av))), 128)),
            e.tabIndex == e.selectedRegion.length ? (c(), d("view", rv, [
              g("view", null, E(e.getTabName(null, e.selectedRegion.length)), 1)
            ])) : T("", !0),
            g("view", {
              ref: "regionLine",
              class: "nut-address__region-line",
              style: A({ left: e.lineDistance + "px" })
            }, null, 4)
          ], 512),
          e.privateType == "custom" ? (c(), d("view", iv, [
            g("ul", uv, [
              (c(!0), d(Q, null, ie(e.regionList, (v, b) => {
                var $, k;
                return c(), d("li", {
                  key: b,
                  class: P(["nut-address__detail-item", (($ = e.selectedRegion[e.tabIndex]) == null ? void 0 : $.id) == v.id ? "active" : ""]),
                  onClick: (u) => e.nextAreaList(v)
                }, [
                  g("div", null, [
                    ((k = e.selectedRegion[e.tabIndex]) == null ? void 0 : k.id) == v.id ? _(e.$slots, "icon", { key: 0 }, () => [
                      oe(i, {
                        class: "nut-address-select-icon",
                        size: "13px"
                      })
                    ]) : T("", !0),
                    he(E(v.name), 1)
                  ])
                ], 10, cv);
              }), 128))
            ], 512)
          ])) : (c(), d("view", dv, [
            oe(p, {
              height: e.height,
              "index-list": e.transformData(e.regionList),
              onClickItem: e.handleElevatorItem
            }, null, 8, ["height", "index-list", "onClickItem"])
          ]))
        ])) : (c(), d("view", fv, [
          g("div", pv, [
            g("ul", mv, [
              (c(!0), d(Q, null, ie(e.existAddress, (v, b) => (c(), d("li", {
                key: b,
                class: P(["nut-address__exist-group-item", v.selectedAddress ? "active" : ""]),
                onClick: ($) => e.selectedExist(v)
              }, [
                v.selectedAddress ? T("", !0) : _(e.$slots, "unselected-icon", { key: 0 }, () => [
                  oe(f, {
                    class: "nut-address-select-icon",
                    size: "13px"
                  })
                ]),
                v.selectedAddress ? _(e.$slots, "icon", { key: 1 }, () => [
                  oe(i, {
                    class: "nut-address-select-icon",
                    size: "13px"
                  })
                ]) : T("", !0),
                g("div", gv, [
                  v.name ? (c(), d("div", vv, E(v.name), 1)) : T("", !0),
                  v.phone ? (c(), d("div", yv, E(v.phone), 1)) : T("", !0),
                  g("div", bv, [
                    g("view", null, E(v.provinceName + v.cityName + v.countyName + v.townName + v.addressDetail), 1)
                  ])
                ])
              ], 10, hv))), 128))
            ])
          ]),
          e.isShowCustomAddress ? (c(), d("div", {
            key: 0,
            class: "nut-address__exist-choose",
            onClick: t[2] || (t[2] = (...v) => e.switchModule && e.switchModule(...v))
          }, [
            g("div", $v, E(e.customAndExistTitle || e.translate("chooseAnotherAddress")), 1)
          ])) : T("", !0)
        ])),
        _(e.$slots, "bottom")
      ])
    ]),
    _: 3
  }, 8, ["visible", "lock-scroll", "round", "teleport-disable", "teleport", "z-index", "onClose", "onClickOverlay"]);
}
const kv = /* @__PURE__ */ ee(ev, [["render", wv]]), { create: Cv } = q("barrage"), Sv = Cv({
  name: "barrage",
  props: {
    danmu: {
      type: Array,
      default: () => []
    },
    frequency: {
      type: Number,
      default: 500
    },
    speeds: {
      type: Number,
      default: 5e3
    },
    rows: {
      type: Number,
      default: 3
    },
    top: {
      type: Number,
      default: 10
    },
    loop: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    const t = (/* @__PURE__ */ new Date()).getTime(), n = !!at().default;
    let l = z(document.createElement("div")), o = z(document.createElement("div")), a = null;
    const s = z(e.danmu), r = z(e.rows), i = z(e.top), p = z(0), f = e.speeds, y = z(0);
    be(() => {
      v(), n && document.addEventListener("visibilitychange", function() {
        document.visibilityState === "hidden" ? ($(), p.value = 0, b("hidden")) : document.visibilityState === "visible" && v();
      });
    }), Xe(() => {
      s.value = [], $();
    });
    const v = () => {
      y.value = l.value.offsetWidth, n && b("init"), setTimeout(() => {
        var m;
        (m = l.value) == null || m.style.setProperty("--move-distance", `-${y.value}px`), u();
      }, 300);
    }, b = (m) => {
      var L;
      const w = document.getElementsByClassName("slotBody" + t);
      let I = ((L = w == null ? void 0 : w[0]) == null ? void 0 : L.children) || [];
      const B = [];
      I && Array.from(I).forEach((M) => {
        m == "init" ? (M.style.opacity = "0", B.push(M)) : (M.classList = "", M.style = {});
      }), m == "init" && (s.value = B);
    }, $ = () => {
      a && (clearTimeout(a), a = null);
    };
    x(
      () => e.danmu,
      (m) => {
        e.danmu.length > 0 && (s.value = [...m]);
      }
    );
    const k = (m) => {
      const w = p.value % s.value.length;
      !e.loop && p.value === s.value.length ? s.value.splice(s.value.length, 0, m) : s.value.splice(w, 0, m);
    }, u = () => {
      $(), a = setTimeout(() => {
        h();
      }, e.frequency);
    }, h = () => {
      var I;
      const m = e.loop ? p.value % s.value.length : p.value;
      let w = document.createElement("view");
      n && typeof s.value[m] == "object" ? (w = s.value[m], (I = w == null ? void 0 : w.classList) == null || I.add("nut-barrage__item")) : (w.innerHTML = s.value[m], w.classList.add("nut-barrage__item"), o.value.appendChild(w)), Ne(() => {
        var L;
        const B = w.offsetHeight;
        if ((L = w == null ? void 0 : w.classList) == null || L.add("move"), w.style.animationDuration = `${f}ms`, w.style.top = m % r.value * (B + i.value) + 20 + "px", w.style.opacity = "1", !n) {
          const M = w.offsetWidth;
          w.style.width = M + 20 + "px";
        }
        w.addEventListener("animationend", () => {
          n ? w.classList.remove("move") : o.value.removeChild(w);
        }), !(!e.loop && p.value >= s.value.length - 1) && (p.value++, p.value >= s.value.length && (p.value = 0), w.removeEventListener("animationend", () => {
        }), u());
      });
    };
    return { classTime: t, danmuList: s, dmBody: l, dmContainer: o, add: k };
  }
}), Tv = {
  ref: "dmBody",
  class: "nut-barrage"
};
function Nv(e, t, n, l, o, a) {
  return c(), d("div", Tv, [
    g("div", {
      ref: "dmContainer",
      class: P(["dmContainer", e.$slots.default && "slotContainer"])
    }, [
      e.$slots.default ? (c(), d("div", {
        key: 0,
        class: P(["slotBody", "slotBody" + e.classTime])
      }, [
        _(e.$slots, "default")
      ], 2)) : T("", !0)
    ], 2)
  ], 512);
}
const Dv = /* @__PURE__ */ ee(Sv, [["render", Nv]]), { create: _v } = q("signature"), Iv = "NutSignature", Bv = _v({
  props: {
    customClass: {
      type: String,
      default: ""
    },
    lineWidth: {
      type: Number,
      default: 2
    },
    strokeStyle: {
      type: String,
      default: () => document.getElementsByTagName("body")[0].className.indexOf("nut-theme-dark") == -1 ? "#000" : "#fff"
    },
    type: {
      type: String,
      default: "png"
    },
    unSupportTpl: {
      type: String,
      default: ""
    }
  },
  components: {
    NutButton: qe
  },
  emits: ["start", "end", "signing", "confirm", "clear"],
  setup(e, { emit: t }) {
    const n = Se(Iv), l = z(null), o = z(null), a = N(() => ({
      ["nut-signature"]: !0,
      [`${e.customClass}`]: e.customClass
    })), s = fe({
      canvasHeight: 0,
      canvasWidth: 0,
      ctx: null,
      isSupportTouch: "ontouchstart" in window,
      events: "ontouchstart" in window ? ["touchstart", "touchmove", "touchend", "touchleave"] : ["mousedown", "mousemove", "mouseup", "mouseleave"]
    }), r = () => {
      let h = document.createElement("canvas");
      return !!(h.getContext && h.getContext("2d"));
    }, i = () => {
      l.value.addEventListener(s.events[0], p, !1);
    }, p = (h) => {
      h.preventDefault(), s.ctx.beginPath(), s.ctx.lineWidth = e.lineWidth, s.ctx.strokeStyle = e.strokeStyle, t("start"), l.value.addEventListener(s.events[1], f, !1), l.value.addEventListener(s.events[2], y, !1), l.value.addEventListener(s.events[3], v, !1);
    }, f = (h) => {
      h.preventDefault();
      let m = s.isSupportTouch ? h.touches[0] : h;
      t("signing", m);
      let w = l.value.getBoundingClientRect(), I = m.clientX - w.left, B = m.clientY - w.top;
      s.ctx.lineTo(I, B), s.ctx.stroke();
    }, y = (h) => {
      h.preventDefault(), t("end"), l.value.removeEventListener(s.events[1], f, !1), l.value.removeEventListener(s.events[2], y, !1);
    }, v = (h) => {
      h.preventDefault(), l.value.removeEventListener(s.events[1], f, !1), l.value.removeEventListener(s.events[2], y, !1);
    }, b = () => {
      l.value.addEventListener(s.events[2], y, !1), s.ctx.clearRect(0, 0, s.canvasWidth, s.canvasHeight), s.ctx.closePath(), t("clear");
    }, $ = () => {
      u(l.value);
    }, k = (h) => {
      if (!h)
        return !0;
      var m = document.createElement("canvas");
      return m.width = h.width, m.height = h.height, (h == null ? void 0 : h.toDataURL()) == m.toDataURL();
    }, u = (h) => {
      let m;
      switch (e.type) {
        case "png":
          m = h.toDataURL("image/png");
          break;
        case "jpg":
          m = h.toDataURL("image/jpeg", 0.8);
          break;
      }
      const w = k(h) ? "请绘制签名" : h, I = k(h) ? "" : m;
      t("confirm", w, I);
    };
    return be(() => {
      r() && (s.ctx = l.value.getContext("2d"), s.canvasWidth = o.value.offsetWidth, s.canvasHeight = o.value.offsetHeight, i());
    }), ce(Z({}, ge(s)), { canvas: l, wrap: o, isCanvasSupported: r, confirm: $, clear: b, classes: a, translate: n });
  }
}), Mv = {
  ref: "wrap",
  class: "nut-signature-inner"
}, Lv = ["height", "width"], Pv = {
  key: 0,
  class: "nut-signature-unsopport"
};
function Ev(e, t, n, l, o, a) {
  const s = U("nut-button");
  return c(), d("div", {
    class: P(e.classes)
  }, [
    g("div", Mv, [
      Ie(g("canvas", {
        ref: "canvas",
        height: e.canvasHeight,
        width: e.canvasWidth
      }, null, 8, Lv), [
        [Me, e.isCanvasSupported()]
      ]),
      e.isCanvasSupported() ? T("", !0) : (c(), d("p", Pv, E(e.unSupportTpl || e.translate("unSupportTpl")), 1))
    ], 512),
    oe(s, {
      class: "nut-signature-btn",
      type: "default",
      onClick: t[0] || (t[0] = (r) => e.clear())
    }, {
      default: ne(() => [
        he(E(e.translate("reSign")), 1)
      ]),
      _: 1
    }),
    oe(s, {
      class: "nut-signature-btn",
      type: "primary",
      onClick: t[1] || (t[1] = (r) => e.confirm())
    }, {
      default: ne(() => [
        he(E(e.translate("confirm")), 1)
      ]),
      _: 1
    })
  ], 2);
}
const Av = /* @__PURE__ */ ee(Bv, [["render", Ev]]), { create: zv } = q("time-select"), Vv = "NutTimeSelect", Ov = zv({
  components: {
    NutPopup: Ae
  },
  props: {
    visible: {
      type: Boolean,
      defalut: !1
    },
    height: {
      type: [String],
      default: "20%"
    },
    title: {
      type: String,
      default: ""
    },
    currentKey: {
      type: [Number, String],
      default: 0
    },
    currentTime: {
      type: Array,
      default: () => []
    },
    lockScroll: {
      type: [Boolean],
      default: !0
    },
    teleportDisable: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:visible", "select"],
  setup: (e, { emit: t }) => {
    const n = Se(Vv), l = N(() => ({
      width: "100%",
      height: e.height
    })), o = N(() => e.currentKey), a = N(() => e.currentTime), s = () => {
      t("update:visible", !1), t("select", a.value);
    };
    return ze("currentKey", o), ze("currentTime", a), {
      popStyle: l,
      close: s,
      translate: n
    };
  }
}), Hv = { class: "nut-time-select" }, Rv = { class: "nut-time-select__title" }, Fv = { class: "nut-time-select__title__fixed" }, Wv = { key: 0 }, Yv = { class: "nut-time-select__content" }, jv = { class: "nut-time-select__content__pannel" }, Kv = { class: "nut-time-select__content__detail" };
function Uv(e, t, n, l, o, a) {
  const s = U("nut-popup");
  return c(), J(s, {
    position: "bottom",
    closeable: "",
    round: "",
    "teleport-disable": e.teleportDisable,
    visible: e.visible,
    style: A(e.popStyle),
    "lock-scroll": e.lockScroll,
    onClickOverlay: e.close,
    onClickCloseIcon: e.close
  }, {
    default: ne(() => [
      g("view", Hv, [
        g("view", Rv, [
          g("view", Fv, [
            e.$slots.title ? _(e.$slots, "title", { key: 1 }) : (c(), d("span", Wv, E(e.title || e.translate("pickupTime")), 1))
          ])
        ]),
        g("view", Yv, [
          g("view", jv, [
            _(e.$slots, "pannel")
          ]),
          g("view", Kv, [
            _(e.$slots, "detail")
          ])
        ])
      ])
    ]),
    _: 3
  }, 8, ["teleport-disable", "visible", "style", "lock-scroll", "onClickOverlay", "onClickCloseIcon"]);
}
const Xv = /* @__PURE__ */ ee(Ov, [["render", Uv]]), { componentName: qv, create: Zv } = q("time-pannel"), Gv = Zv({
  name: "timepannel",
  props: {
    name: {
      type: String,
      default: ""
    },
    pannelKey: {
      type: [Number, String],
      default: 0
    }
  },
  emits: ["change"],
  setup: (e, { emit: t }) => {
    const n = Ee("currentKey"), l = fe({
      currentKey: n
    }), o = N(() => ({
      [qv]: !0,
      "nut-time-pannel--curr": l.currentKey == e.pannelKey
    })), a = (s) => {
      t("change", s);
    };
    return ce(Z({}, ge(l)), {
      classes: o,
      handlePannel: a
    });
  }
});
function Jv(e, t, n, l, o, a) {
  return c(), d("view", {
    class: P(e.classes),
    onClick: t[0] || (t[0] = (s) => e.handlePannel(e.pannelKey))
  }, E(e.name), 3);
}
const Qv = /* @__PURE__ */ ee(Gv, [["render", Jv]]), { create: xv } = q("time-detail"), ey = xv({
  name: "timedetail",
  props: {
    times: {
      type: Array,
      default: () => []
    }
  },
  emits: ["select"],
  setup: (e, { emit: t }) => {
    const n = Ee("currentKey"), l = Ee("currentTime"), o = fe({
      currentKey: n,
      currentTime: l
    }), a = (i) => {
      let p = o.currentTime.find((f) => f.key == o.currentKey);
      if (p)
        return {
          "nut-time-detail__detail__list__item": !0,
          "nut-time-detail__detail__list__item--curr": p.list.filter((f) => f === i).length > 0
        };
    }, s = N(() => e.times.find((i) => i.key == o.currentKey).list), r = (i) => {
      t("select", i);
    };
    return ce(Z({}, ge(o)), {
      getClass: a,
      renderData: s,
      handleTime: r
    });
  }
}), ty = { class: "nut-time-detail" }, ny = { class: "nut-time-detail__detail nut-time-detail__detail--moring" }, oy = { class: "nut-time-detail__detail__list" }, ly = ["onClick"];
function sy(e, t, n, l, o, a) {
  return c(), d("view", ty, [
    g("view", ny, [
      g("view", oy, [
        (c(!0), d(Q, null, ie(e.renderData, (s) => (c(), d("view", {
          key: s,
          class: P(e.getClass(s)),
          onClick: (r) => e.handleTime(s)
        }, E(s), 11, ly))), 128))
      ])
    ])
  ]);
}
const ay = /* @__PURE__ */ ee(ey, [["render", sy]]), { create: ry } = q("sku-header"), iy = "NutSkuHeader", uy = ry({
  props: {
    goods: {
      type: Object,
      default: {}
    }
  },
  components: {
    NutPrice: Ft
  },
  setup(e, { slots: t }) {
    const n = Se(iy);
    return {
      getSlots: (o) => t[o],
      translate: n
    };
  }
}), cy = { class: "nut-sku-header" }, dy = ["src"], fy = { class: "nut-sku-header-right" }, py = {
  key: 3,
  class: "nut-sku-header-right-extra"
};
function my(e, t, n, l, o, a) {
  const s = U("nut-price");
  return c(), d("view", cy, [
    g("img", {
      class: "nut-sku-header-img",
      src: e.goods.imagePath
    }, null, 8, dy),
    g("view", fy, [
      e.getSlots("sku-header-price") ? _(e.$slots, "sku-header-price", { key: 0 }) : (c(), J(s, {
        key: 1,
        price: e.goods.price,
        "need-symbol": !0,
        thousands: !1
      }, null, 8, ["price"])),
      e.getSlots("sku-header-extra") ? _(e.$slots, "sku-header-extra", { key: 2 }) : T("", !0),
      e.goods.skuId && !e.getSlots("sku-header-extra") ? (c(), d("view", py, E(e.translate("skuId")) + " : " + E(e.goods.skuId), 1)) : T("", !0)
    ])
  ]);
}
const hy = /* @__PURE__ */ ee(uy, [["render", my]]), { create: gy } = q("sku-select"), vy = gy({
  props: {
    sku: {
      type: Array,
      default: () => []
    }
  },
  emits: ["selectSku"],
  setup(e, { emit: t }) {
    const n = z([]);
    return x(
      () => e.sku,
      (o) => {
        n.value = [].slice.call(o);
      },
      { deep: !0 }
    ), be(() => {
      e.sku.length > 0 && (n.value = [].slice.call(e.sku));
    }), {
      skuInfo: n,
      changeSaleChild: (o, a, s, r) => {
        o.checkFlag || o.disable || t("selectSku", {
          sku: o,
          skuIndex: a,
          parentSku: s,
          parentIndex: r
        });
      }
    };
  }
}), yy = { class: "nut-sku-select" }, by = { class: "nut-sku-select-item-title" }, $y = { class: "nut-sku-select-item-skus" }, wy = ["onClick"];
function ky(e, t, n, l, o, a) {
  return c(), d("view", yy, [
    (c(!0), d(Q, null, ie(e.skuInfo, (s, r) => (c(), d("view", {
      key: s.id,
      class: "nut-sku-select-item"
    }, [
      g("view", by, E(s.name), 1),
      g("view", $y, [
        (c(!0), d(Q, null, ie(s.list, (i, p) => (c(), d("view", {
          key: i.name,
          class: P(["nut-sku-select-item-skus-sku", [{ active: !i.disable && i.active }, { disable: i.disable }]]),
          onClick: (f) => e.changeSaleChild(i, p, s, r)
        }, E(i.name), 11, wy))), 128))
      ])
    ]))), 128))
  ]);
}
const Cy = /* @__PURE__ */ ee(vy, [["render", ky]]), { create: Sy } = q("sku-stepper"), Ty = Sy({
  props: {
    // 购买数量最大值
    stepperMax: {
      type: [Number, String],
      default: 99999
    },
    stepperMin: {
      type: [Number, String],
      default: 1
    },
    // stepper 前文案提示
    stepperExtraText: {
      type: [Function, Boolean],
      default: !1
    },
    // 数量选择左侧文案
    stepperTitle: {
      type: String,
      default: "购买数量"
    }
  },
  emits: ["click", "changeSku", "changeStepper", "clickBtnOptions", "overLimit", "reduce", "add"],
  components: {
    NutInputNumber: Ot
  },
  setup(e, { emit: t }) {
    const n = z(e.stepperMin);
    return be(() => {
      n.value = e.stepperMin;
    }), {
      goodsCount: n,
      add: (i) => {
        t("add", i);
      },
      reduce: (i) => {
        t("reduce", i);
      },
      overlimit: (i, p) => {
        t("overLimit", {
          action: p,
          value: parseInt(n.value + "")
        });
      },
      getExtraText: () => {
        const { stepperExtraText: i } = e;
        if (i)
          return i === !0 ? "" : i == null ? void 0 : i();
      },
      changeStepper: (i) => {
        n.value = i, t("changeStepper", i);
      }
    };
  }
}), Ny = { class: "nut-sku-stepper" }, Dy = { class: "nut-sku-stepper-title" }, _y = ["innerHTML"], Iy = { class: "nut-sku-stepper-count" };
function By(e, t, n, l, o, a) {
  const s = U("nut-input-number");
  return c(), d("view", Ny, [
    g("view", Dy, E(e.stepperTitle), 1),
    g("view", {
      class: "nut-sku-stepper-limit",
      innerHTML: e.getExtraText()
    }, null, 8, _y),
    g("view", Iy, [
      oe(s, {
        modelValue: e.goodsCount,
        "onUpdate:modelValue": t[0] || (t[0] = (r) => e.goodsCount = r),
        min: e.stepperMin,
        max: e.stepperMax,
        onAdd: e.add,
        onReduce: e.reduce,
        onOverlimit: e.overlimit,
        onChange: e.changeStepper
      }, null, 8, ["modelValue", "min", "max", "onAdd", "onReduce", "onOverlimit", "onChange"])
    ])
  ]);
}
const My = /* @__PURE__ */ ee(Ty, [["render", By]]), { create: Ly } = q("sku-operate"), Py = Ly({
  props: {
    // 底部按钮配置  confirm cart  buy
    btnOptions: {
      type: Array,
      default: () => ["confirm"]
    },
    btnExtraText: {
      type: String,
      default: ""
    },
    // 立即购买文案
    buyText: {
      type: String,
      default: "立即购买"
    },
    // 加入购物车文案
    addCartText: {
      type: String,
      default: "加入购物车"
    },
    confirmText: {
      type: String,
      default: "确定"
    }
  },
  emits: ["click", "changeSku", "changeBuyCount", "clickBtnOperate"],
  setup(e, { emit: t, slots: n }) {
    return {
      getBtnDesc: (s) => ({
        confirm: e.confirmText,
        cart: e.addCartText,
        buy: e.buyText
      })[s],
      clickBtnOperate: (s) => {
        t("clickBtnOperate", s);
      },
      getSlots: (s) => n[s]
    };
  }
}), Ey = {
  key: 0,
  class: "nut-sku-operate"
}, Ay = {
  key: 0,
  class: "nut-sku-operate-desc"
}, zy = {
  key: 1,
  class: "nut-sku-operate-btn"
}, Vy = ["onClick"];
function Oy(e, t, n, l, o, a) {
  return e.btnOptions.length > 0 ? (c(), d("view", Ey, [
    e.btnExtraText ? (c(), d("view", Ay, E(e.btnExtraText), 1)) : T("", !0),
    _(e.$slots, "operate-btn"),
    e.getSlots("operate-btn") ? T("", !0) : (c(), d("view", zy, [
      (c(!0), d(Q, null, ie(e.btnOptions, (s, r) => (c(), d("view", {
        key: r,
        class: P([`nut-sku-operate-btn-${s}`, "nut-sku-operate-btn-item"]),
        onClick: (i) => e.clickBtnOperate(s)
      }, E(e.getBtnDesc(s)), 11, Vy))), 128))
    ]))
  ])) : T("", !0);
}
const Hy = /* @__PURE__ */ ee(Py, [["render", Oy]]), { create: Ry } = q("sku"), Fy = "NutSku", Wy = Ry({
  props: {
    visible: {
      type: Boolean,
      default: !1
    },
    sku: {
      type: Array,
      default: []
    },
    goods: {
      type: Object,
      default: {}
    },
    // stepper 最大值
    stepperMax: {
      type: [Number, String],
      default: 99999
    },
    // stepper 最小值
    stepperMin: {
      type: [Number, String],
      default: 1
    },
    // 底部按钮配置  confirm cart  buy
    btnOptions: {
      type: Array,
      default: () => ["confirm"]
    },
    // 数量选择左侧文案
    stepperTitle: {
      type: String,
      default: ""
    },
    // stepper 前面文案
    stepperExtraText: {
      type: [Function, Boolean],
      default: !1
    },
    btnExtraText: {
      type: String,
      default: ""
    },
    // 立即购买文案
    buyText: {
      type: String,
      default: ""
    },
    // 加入购物车文案
    addCartText: {
      type: String,
      default: ""
    },
    // 确定文案
    confirmText: {
      type: String,
      default: ""
    },
    lockScroll: {
      type: Boolean,
      default: !0
    }
  },
  emits: [
    "update:visible",
    "selectSku",
    "changeStepper",
    "clickBtnOperate",
    "clickCloseIcon",
    "clickOverlay",
    "close",
    "reduce",
    "add",
    "overLimit"
  ],
  components: {
    SkuHeader: hy,
    SkuSelect: Cy,
    SkuStepper: My,
    SkuOperate: Hy,
    NutPopup: Ae
  },
  setup(e, { emit: t, slots: n }) {
    const l = Se(Fy), o = z(e.visible), a = z(e.stepperMin);
    x(
      () => e.visible,
      (k) => {
        o.value = k;
      }
    ), x(
      () => o.value,
      (k) => {
        k == !1 && $();
      }
    );
    const s = (k) => n[k], r = (k) => {
      t("selectSku", k);
    }, i = (k) => {
      a.value = k, t("changeStepper", k);
    }, p = (k) => {
      t("add", k);
    }, f = (k) => {
      t("reduce", k);
    }, y = (k) => {
      t("overLimit", k);
    }, v = (k) => {
      t("clickBtnOperate", {
        type: k,
        value: a.value
      });
    }, b = (k) => {
      k == "icon" && t("clickCloseIcon"), k == "overlay" && t("clickOverlay"), k == "close" && t("close"), o.value = !1;
    }, $ = () => {
      t("update:visible", !1);
    };
    return {
      showPopup: o,
      closePopup: b,
      selectSku: r,
      changeStepper: i,
      stepperOverLimit: y,
      clickBtnOperate: v,
      add: p,
      reduce: f,
      getSlots: s,
      translate: l
    };
  }
}), Yy = { class: "nut-sku" }, jy = { class: "nut-sku-content" };
function Ky(e, t, n, l, o, a) {
  const s = U("sku-header"), r = U("SkuSelect"), i = U("sku-stepper"), p = U("sku-operate"), f = U("nut-popup");
  return c(), J(f, {
    visible: e.showPopup,
    "onUpdate:visible": t[0] || (t[0] = (y) => e.showPopup = y),
    position: "bottom",
    closeable: "",
    round: "",
    style: { height: "75%" },
    "lock-scroll": e.lockScroll,
    "catch-move": e.lockScroll,
    onClickCloseIcon: t[1] || (t[1] = (y) => e.closePopup("icon")),
    onClickOverlay: t[2] || (t[2] = (y) => e.closePopup("overlay")),
    onClose: t[3] || (t[3] = (y) => e.closePopup("close"))
  }, {
    default: ne(() => [
      g("view", Yy, [
        _(e.$slots, "sku-header"),
        e.getSlots("sku-header") ? T("", !0) : (c(), J(s, {
          key: 0,
          goods: e.goods
        }, kt({ _: 2 }, [
          e.getSlots("sku-header-price") ? {
            name: "sku-header-price",
            fn: ne(() => [
              _(e.$slots, "sku-header-price")
            ]),
            key: "0"
          } : void 0,
          e.getSlots("sku-header-extra") ? {
            name: "sku-header-extra",
            fn: ne(() => [
              _(e.$slots, "sku-header-extra")
            ]),
            key: "1"
          } : void 0
        ]), 1032, ["goods"])),
        g("view", jy, [
          _(e.$slots, "sku-select-top"),
          _(e.$slots, "sku-select"),
          e.getSlots("sku-select") ? T("", !0) : (c(), J(r, {
            key: 0,
            sku: e.sku,
            onSelectSku: e.selectSku
          }, null, 8, ["sku", "onSelectSku"])),
          _(e.$slots, "sku-stepper"),
          e.getSlots("sku-stepper") ? T("", !0) : (c(), J(i, {
            key: 1,
            goods: e.goods,
            "stepper-title": e.stepperTitle || e.translate("buyNumber"),
            "stepper-max": e.stepperMax,
            "stepper-min": e.stepperMin,
            "stepper-extra-text": e.stepperExtraText,
            onAdd: e.add,
            onReduce: e.reduce,
            onChangeStepper: e.changeStepper,
            onOverLimit: e.stepperOverLimit
          }, null, 8, ["goods", "stepper-title", "stepper-max", "stepper-min", "stepper-extra-text", "onAdd", "onReduce", "onChangeStepper", "onOverLimit"])),
          _(e.$slots, "sku-stepper-bottom")
        ]),
        oe(p, {
          "btn-extra-text": e.btnExtraText,
          "btn-options": e.btnOptions,
          "buy-text": e.buyText || e.translate("buyNow"),
          "add-cart-text": e.addCartText || e.translate("addToCart"),
          "confirm-text": e.confirmText || e.translate("confirm"),
          onClickBtnOperate: e.clickBtnOperate
        }, kt({ _: 2 }, [
          e.getSlots("sku-operate") ? {
            name: "operate-btn",
            fn: ne(() => [
              _(e.$slots, "sku-operate")
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["btn-extra-text", "btn-options", "buy-text", "add-cart-text", "confirm-text", "onClickBtnOperate"])
      ])
    ]),
    _: 3
  }, 8, ["visible", "lock-scroll", "catch-move"]);
}
const Uy = /* @__PURE__ */ ee(Wy, [["render", Ky]]), { create: Xy } = q("card"), qy = Xy({
  components: {
    NutPrice: Ft,
    NutTag: $n
  },
  props: {
    imgUrl: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    price: {
      type: String,
      default: ""
    },
    vipPrice: {
      type: String,
      default: ""
    },
    shopDesc: {
      type: String,
      default: ""
    },
    delivery: {
      type: String,
      default: ""
    },
    shopName: {
      type: String,
      default: ""
    },
    isNeedPrice: {
      type: Boolean,
      default: !0
    }
  }
}), Zy = { class: "nut-card" }, Gy = { class: "nut-card__left" }, Jy = ["src"], Qy = { class: "nut-card__right" }, xy = { class: "nut-card__right__title" }, e2 = {
  key: 0,
  class: "nut-card__right__price"
}, t2 = { class: "nut-card__right__other" }, n2 = { class: "nut-card__right__shop" }, o2 = { class: "nut-card__right__shop__name" };
function l2(e, t, n, l, o, a) {
  const s = U("nut-price"), r = U("nut-tag");
  return c(), d("div", Zy, [
    g("div", Gy, [
      g("img", {
        src: e.imgUrl,
        alt: ""
      }, null, 8, Jy)
    ]),
    g("div", Qy, [
      g("div", xy, E(e.title), 1),
      _(e.$slots, "prolist"),
      e.isNeedPrice ? (c(), d("div", e2, [
        _(e.$slots, "price", {}, () => [
          oe(s, { price: e.price }, null, 8, ["price"])
        ]),
        _(e.$slots, "origin", {}, () => [
          oe(s, {
            class: "nut-card__right__price__origin",
            price: e.vipPrice
          }, null, 8, ["price"])
        ])
      ])) : T("", !0),
      g("div", t2, [
        _(e.$slots, "shop-tag", {}, () => [
          oe(r, { type: "danger" }, {
            default: ne(() => [
              he(E(e.shopDesc), 1)
            ]),
            _: 1
          }),
          oe(r, { plain: "" }, {
            default: ne(() => [
              he(E(e.delivery), 1)
            ]),
            _: 1
          })
        ])
      ]),
      g("div", n2, [
        g("div", o2, E(e.shopName), 1),
        _(e.$slots, "footer")
      ])
    ])
  ]);
}
const s2 = /* @__PURE__ */ ee(qy, [["render", l2]]), { create: a2 } = q("ecard"), r2 = "NutEcard", i2 = a2({
  components: {
    NutInputNumber: Ot
  },
  props: {
    chooseText: {
      type: String,
      default: ""
    },
    otherValueText: {
      type: String,
      default: ""
    },
    dataList: {
      type: Array,
      default: () => []
    },
    cardAmountMin: {
      type: Number,
      default: 1
    },
    cardAmountMax: {
      type: Number,
      default: 9999
    },
    cardBuyMin: {
      type: Number,
      default: 1
    },
    cardBuyMax: {
      type: Number,
      default: 9999
    },
    modelValue: {
      type: [Number, String],
      default: 0
    },
    placeholder: {
      type: String,
      default: ""
    },
    suffix: {
      type: String,
      default: "¥"
    }
  },
  emits: ["inputChange", "changeStep", "inputClick", "change", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = Se(r2), l = z(null), o = z(null), a = z(""), s = z(e.cardAmountMin), r = z(e.modelValue), i = (v, b) => {
      l.value = b, s.value = e.cardAmountMin, o.value = v.price, t("change", v), t("update:modelValue", v.price);
    }, p = (v) => {
      let $ = v.target.value.replace(/[^\d]/g, "");
      a.value = $, o.value = $, Number($) > e.cardAmountMax && (a.value = e.cardAmountMax, o.value = e.cardAmountMax), Number($) < e.cardAmountMin && (a.value = e.cardAmountMin, o.value = e.cardAmountMin), t("inputChange", Number(a.value)), t("update:modelValue", Number(a.value));
    }, f = () => {
      l.value = "input", s.value = e.cardAmountMin, o.value = a.value, t("update:modelValue", a.value), t("inputClick");
    }, y = (v) => {
      s.value = v, t("changeStep", s.value, o.value);
    };
    return x(
      () => e.modelValue,
      (v) => {
        r.value = v;
      }
    ), {
      handleClick: i,
      changeStep: y,
      change: p,
      inputClick: f,
      stepValue: s,
      currentIndex: l,
      inputValue: a,
      money: r,
      translate: n
    };
  }
}), u2 = { class: "nut-ecard" }, c2 = { class: "nut-ecard__title" }, d2 = { class: "nut-ecard__list" }, f2 = ["onClick"], p2 = { class: "nut-ecard__list__input--con" }, m2 = ["placeholder"], h2 = { class: "nut-ecard__list__step" };
function g2(e, t, n, l, o, a) {
  const s = U("nut-input-number");
  return c(), d("view", u2, [
    g("view", c2, E(e.chooseText || e.translate("chooseText")), 1),
    g("view", d2, [
      (c(!0), d(Q, null, ie(e.dataList, (r, i) => (c(), d("view", {
        key: i,
        class: P(["nut-ecard__list__item", e.currentIndex == i ? "active" : ""]),
        onClick: (p) => e.handleClick(r, i)
      }, E(r.price), 11, f2))), 128)),
      g("view", {
        class: P(["nut-ecard__list__input", e.currentIndex == "input" ? "active" : ""]),
        onClick: t[2] || (t[2] = (...r) => e.inputClick && e.inputClick(...r))
      }, [
        g("view", null, E(e.otherValueText || e.translate("otherValueText")), 1),
        g("view", p2, [
          Ie(g("input", {
            "onUpdate:modelValue": t[0] || (t[0] = (r) => e.inputValue = r),
            class: "nut-ecard__list__input--input",
            type: "text",
            placeholder: e.placeholder || e.translate("placeholder"),
            onInput: t[1] || (t[1] = (...r) => e.change && e.change(...r))
          }, null, 40, m2), [
            [pl, e.inputValue]
          ]),
          he(" " + E(e.suffix), 1)
        ])
      ], 2),
      g("view", h2, [
        g("view", null, E(e.suffix) + E(e.money), 1),
        oe(s, {
          modelValue: e.stepValue,
          "onUpdate:modelValue": t[3] || (t[3] = (r) => e.stepValue = r),
          min: e.cardBuyMin,
          max: e.cardBuyMax,
          onChange: e.changeStep
        }, null, 8, ["modelValue", "min", "max", "onChange"])
      ])
    ])
  ]);
}
const v2 = /* @__PURE__ */ ee(i2, [["render", g2]]), { create: y2 } = q("address-list-item"), b2 = "NutAddressList", $2 = y2({
  components: { Del: xn, Edit: Bs },
  props: {
    item: {
      type: Object,
      default: {}
    }
  },
  emits: ["delIcon", "editIcon", "clickItem"],
  setup(e, { emit: t }) {
    const n = Se(b2);
    return {
      delClick: (s) => {
        t("delIcon", s, e.item), s.stopPropagation();
      },
      editClick: (s) => {
        t("editIcon", s, e.item), s.stopPropagation();
      },
      contentsClick: (s) => {
        t("clickItem", s, e.item), s.stopPropagation();
      },
      translate: n
    };
  }
}), w2 = { class: "nut-address-list-item__info" }, k2 = { class: "nut-address-list-item__info-contact" }, C2 = { class: "nut-address-list-item__info-contact-name" }, S2 = { class: "nut-address-list-item__info-contact-tel" }, T2 = {
  key: 0,
  class: "nut-address-list-item__info-contact-default"
}, N2 = { class: "nut-address-list-item__info-handle" }, D2 = { class: "nut-address-list-item__addr" };
function _2(e, t, n, l, o, a) {
  const s = U("Del"), r = U("Edit");
  return c(), d("div", {
    class: "nut-address-list-item",
    onClick: t[0] || (t[0] = (...i) => e.contentsClick && e.contentsClick(...i))
  }, [
    g("div", w2, [
      g("div", k2, [
        _(e.$slots, "content-top", {}, () => [
          g("div", C2, E(e.item.addressName), 1),
          g("div", S2, E(e.item.phone), 1),
          e.item.defaultAddress ? (c(), d("div", T2, E(e.translate("default")), 1)) : T("", !0)
        ])
      ]),
      g("div", N2, [
        _(e.$slots, "content-icon", {}, () => [
          oe(s, {
            name: "del",
            class: "nut-address-list-item__info-handle-del",
            onClick: e.delClick
          }, null, 8, ["onClick"]),
          oe(r, {
            name: "edit",
            class: "nut-address-list-item__info-handle-edit",
            onClick: e.editClick
          }, null, 8, ["onClick"])
        ])
      ])
    ]),
    g("div", D2, [
      _(e.$slots, "content-addr", {}, () => [
        he(E(e.item.fullAddress), 1)
      ])
    ])
  ]);
}
const Wn = /* @__PURE__ */ ee($2, [["render", _2]]), { create: I2 } = q("address-list-general"), B2 = I2({
  props: {
    item: {
      type: Object,
      default: {}
    },
    longPress: {
      type: Boolean,
      default: !1
    },
    swipeEdition: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["delIcon", "editIcon", "clickItem", "longDown", "longCopy", "longSet", "longDel", "swipeDel"],
  components: {
    ItemContents: Wn,
    NutButton: qe,
    NutSwipe: pn
  },
  setup(e, { emit: t }) {
    const n = () => we(Wn, {
      item: e.item,
      onDelIcon(B) {
        s(B);
      },
      onEditIcon(B) {
        r(B);
      },
      onClickItem(B) {
        i(B);
      }
    });
    let l = null;
    const o = z(!1), a = z(!1), s = (B) => {
      t("delIcon", B, e.item), B.stopPropagation();
    }, r = (B) => {
      t("editIcon", B, e.item), B.stopPropagation();
    }, i = (B) => {
      o.value || (t("clickItem", B, e.item), B.stopPropagation());
    }, p = (B) => {
      t("longDel", B, e.item), B.stopPropagation();
    }, f = (B) => {
      l = 0, a.value = !0, t("longDown", B, e.item);
    };
    return {
      renderCompontent: n,
      showMaskRef: a,
      clickItem: i,
      editClick: r,
      delClick: s,
      delLongClick: p,
      holddownstart: (B) => {
        l = setTimeout(() => {
          f(B);
        }, 300);
      },
      holddownmove: () => {
        clearTimeout(l);
      },
      holddownend: () => {
        clearTimeout(l);
      },
      copyCLick: (B) => {
        t("longCopy", B, e.item), B.stopPropagation();
      },
      hideMaskClick: () => {
        a.value = !1;
      },
      setDefault: (B) => {
        t("longSet", B, e.item), B.stopPropagation();
      },
      maskClick: (B) => {
        l != 0 && (a.value = !1), B.stopPropagation(), B.preventDefault();
      },
      swipeDelClick: (B) => {
        t("swipeDel", B, e.item), B.stopPropagation();
      },
      swipestart: () => {
        o.value = !1;
      },
      swipemove: () => {
        o.value = !0;
      }
    };
  }
}), M2 = {
  key: 0,
  class: "nut-address-list-general"
}, L2 = { class: "nut-address-list-swipe" };
function P2(e, t, n, l, o, a) {
  const s = U("nut-button"), r = U("nut-swipe");
  return e.swipeEdition ? (c(), J(r, { key: 1 }, {
    right: ne(() => [
      _(e.$slots, "swipe-right-btn", {}, () => [
        oe(s, {
          shape: "square",
          style: { height: "100%" },
          type: "danger",
          onClick: e.swipeDelClick
        }, {
          default: ne(() => [
            he("删除")
          ]),
          _: 1
        }, 8, ["onClick"])
      ])
    ]),
    default: ne(() => [
      g("div", L2, [
        (c(), J(Oe(e.renderCompontent()), {
          onTouchmove: e.swipemove,
          onTouchstart: e.swipestart
        }, {
          "content-top": ne(() => [
            _(e.$slots, "content-info")
          ]),
          "content-icon": ne(() => [
            _(e.$slots, "content-icons")
          ]),
          "content-addr": ne(() => [
            _(e.$slots, "content-addrs")
          ]),
          _: 3
        }, 40, ["onTouchmove", "onTouchstart"]))
      ])
    ]),
    _: 3
  })) : (c(), d("div", M2, [
    (c(), J(Oe(e.renderCompontent()), {
      onTouchstart: e.holddownstart,
      onTouchend: e.holddownend,
      onTouchmove: e.holddownmove
    }, {
      "content-top": ne(() => [
        _(e.$slots, "content-info")
      ]),
      "content-icon": ne(() => [
        _(e.$slots, "content-icons")
      ]),
      "content-addr": ne(() => [
        _(e.$slots, "content-addrs")
      ]),
      _: 3
    }, 40, ["onTouchstart", "onTouchend", "onTouchmove"])),
    e.longPress && e.showMaskRef ? (c(), d("div", {
      key: 0,
      class: "nut-address-list-general__mask",
      onClick: t[3] || (t[3] = (...i) => e.maskClick && e.maskClick(...i))
    }, [
      _(e.$slots, "longpress-all", {}, () => [
        g("div", {
          class: "nut-address-list-general__mask-copy",
          onClick: t[0] || (t[0] = (...i) => e.copyCLick && e.copyCLick(...i))
        }, " 复制地址 "),
        g("div", {
          class: "nut-address-list-general__mask-set",
          onClick: t[1] || (t[1] = (...i) => e.setDefault && e.setDefault(...i))
        }, " 设置默认 "),
        g("div", {
          class: "nut-address-list-general__mask-del",
          onClick: t[2] || (t[2] = (...i) => e.delLongClick && e.delLongClick(...i))
        }, " 删除地址 ")
      ])
    ])) : T("", !0),
    e.showMaskRef ? (c(), d("div", {
      key: 1,
      class: "nut-address-list__mask-bottom",
      onClick: t[4] || (t[4] = (...i) => e.hideMaskClick && e.hideMaskClick(...i))
    })) : T("", !0)
  ]));
}
const E2 = /* @__PURE__ */ ee(B2, [["render", P2]]), { create: A2 } = q("address-list"), z2 = "NutAddressList", V2 = A2({
  props: {
    data: {
      type: Array,
      default: []
    },
    longPress: {
      type: Boolean,
      default: !1
    },
    swipeEdition: {
      type: Boolean,
      default: !1
    },
    showBottomButton: {
      type: Boolean,
      default: !0
    },
    dataOptions: {
      type: Object,
      default: {}
    }
  },
  components: {
    GeneralShell: E2,
    NutButton: qe
  },
  emits: ["delIcon", "editIcon", "clickItem", "longCopy", "longSet", "longDel", "swipeDel", "add"],
  setup(e, { emit: t }) {
    const n = Se(z2), l = z([]), o = fe({
      id: 2,
      addressName: "姓名",
      phone: "123****4567",
      defaultAddress: !1,
      fullAddress: "北京市通州区测试测试测试测试测试测试测试测试测试"
    }), a = () => {
      Object.keys(e.dataOptions).length > 0 && (l.value = e.data.map(($) => bl(o, $, e.dataOptions)));
    };
    x(
      () => e.data,
      () => a(),
      { deep: !0 }
    );
    const s = ($, k) => {
      t("delIcon", $, k), $.stopPropagation();
    }, r = ($, k) => {
      t("editIcon", $, k), $.stopPropagation();
    }, i = ($, k) => {
      t("clickItem", $, k), $.stopPropagation();
    }, p = ($, k) => {
      t("longCopy", $, k), $.stopPropagation();
    }, f = ($, k) => {
      t("longSet", $, k), $.stopPropagation();
    }, y = ($, k) => {
      t("longDel", $, k), $.stopPropagation();
    }, v = ($, k) => {
      t("swipeDel", $, k), $.stopPropagation();
    }, b = ($) => {
      t("add", $), $.stopPropagation();
    };
    return be(() => {
      a();
    }), {
      clickDelIcon: s,
      clickEditIcon: r,
      clickContentItem: i,
      clickLongCopy: p,
      clickLongSet: f,
      clickLongDel: y,
      clickSwipeDel: v,
      addAddress: b,
      dataArray: l,
      translate: n
    };
  }
}), O2 = { class: "nut-address-list" };
function H2(e, t, n, l, o, a) {
  const s = U("general-shell"), r = U("nut-button");
  return c(), d("div", O2, [
    (c(!0), d(Q, null, ie(e.dataArray, (i, p) => (c(), J(s, {
      key: p,
      item: i,
      "long-press": e.longPress,
      "swipe-edition": e.swipeEdition,
      onDelIcon: e.clickDelIcon,
      onEditIcon: e.clickEditIcon,
      onClickItem: e.clickContentItem,
      onSwipeDel: e.clickSwipeDel,
      onLongCopy: e.clickLongCopy,
      onLongSet: e.clickLongSet,
      onLongDel: e.clickLongDel
    }, kt({
      "content-info": ne(() => [
        _(e.$slots, "item-infos", { item: i })
      ]),
      "content-icons": ne(() => [
        _(e.$slots, "item-icon", { item: i })
      ]),
      "content-addrs": ne(() => [
        _(e.$slots, "item-addr", { item: i })
      ]),
      _: 2
    }, [
      e.longPress ? {
        name: "longpress-all",
        fn: ne(() => [
          _(e.$slots, "longpress-btns", { item: i })
        ]),
        key: "0"
      } : void 0,
      e.swipeEdition ? {
        name: "swipe-right-btn",
        fn: ne(() => [
          _(e.$slots, "swipe-right", { item: i })
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["item", "long-press", "swipe-edition", "onDelIcon", "onEditIcon", "onClickItem", "onSwipeDel", "onLongCopy", "onLongSet", "onLongDel"]))), 128)),
    e.showBottomButton ? (c(), d("div", {
      key: 0,
      class: "nut-address-list__bottom",
      onClick: t[0] || (t[0] = (...i) => e.addAddress && e.addAddress(...i))
    }, [
      oe(r, {
        block: "",
        type: "danger"
      }, {
        default: ne(() => [
          he(E(e.translate("addAddress")), 1)
        ]),
        _: 1
      })
    ])) : T("", !0)
  ]);
}
const R2 = /* @__PURE__ */ ee(V2, [["render", H2]]), { create: F2 } = q("category"), W2 = F2({
  props: {
    //分类模式
    type: {
      type: String,
      default: "classify"
    },
    //左侧导航栏
    category: {
      type: Array,
      default: []
    }
  },
  setup(e, { emit: t }) {
    const n = z(0), l = z(!1);
    return {
      getChildList: (a) => {
        n.value = a, t("change", a);
      },
      checkIndex: n,
      categoryLeft: l
    };
  }
}), Y2 = { class: "nut-category" }, j2 = { class: "nut-category__cateList" }, K2 = { key: 0 }, U2 = ["onClick"];
function X2(e, t, n, l, o, a) {
  return c(), d("div", Y2, [
    g("div", j2, [
      e.type == "classify" || e.type == "text" ? (c(), d("div", K2, [
        (c(!0), d(Q, null, ie(e.category, (s, r) => (c(), d("div", {
          key: r,
          class: "nut-category__cateListLeft"
        }, [
          g("div", {
            class: P([e.checkIndex == r ? "nut-category__cateListItemChecked" : "nut-category__cateListItem"]),
            onClick: (i) => e.getChildList(r)
          }, E(s.catName), 11, U2)
        ]))), 128))
      ])) : T("", !0),
      _(e.$slots, "default")
    ])
  ]);
}
const q2 = /* @__PURE__ */ ee(W2, [["render", X2]]), { create: Z2 } = q("category-pane"), G2 = Z2({
  props: {
    //分类模式
    type: {
      type: String,
      default: "classify"
    },
    //右侧导航数据
    categoryChild: {
      type: Array,
      default: () => []
    },
    //模式传入自定义数据
    customCategory: {
      type: Array,
      default: () => []
    }
  },
  setup(e, { emit: t }) {
    return {
      onChange: (l) => {
        t("onChange", l);
      }
    };
  }
}), J2 = { class: "nut-category-pane" }, Q2 = {
  key: 0,
  class: "nut-category-pane__cateListRight"
}, x2 = { class: "nut-category-pane__childTitle" }, e3 = {
  key: 0,
  class: "nut-category-pane__childItemList"
}, t3 = ["onClick"], n3 = ["src"], o3 = { class: "nut-category-pane__skuImg" }, l3 = {
  key: 1,
  class: "nut-category-pane__cateListRight"
}, s3 = { class: "nut-category-pane__childTitle" }, a3 = {
  key: 0,
  class: "nut-category-pane__childItemList"
}, r3 = ["onClick"], i3 = { class: "nut-category-pane__skuName" }, u3 = {
  key: 2,
  class: "nut-category-pane__selfItemList"
}, c3 = ["onClick"];
function d3(e, t, n, l, o, a) {
  return c(), d("div", J2, [
    e.type == "classify" ? (c(), d("div", Q2, [
      (c(!0), d(Q, null, ie(e.categoryChild, (s, r) => (c(), d("div", { key: r }, [
        g("div", x2, E(s == null ? void 0 : s.catName), 1),
        (s == null ? void 0 : s.catType) == 1 ? (c(), d("div", e3, [
          (c(!0), d(Q, null, ie(s.childCateList, (i, p) => (c(), d("div", {
            key: p,
            class: "nut-category-pane__childItem",
            onClick: (f) => e.onChange(i)
          }, [
            g("img", {
              class: "nut-category-pane__childImg",
              src: i.backImg
            }, null, 8, n3),
            g("div", o3, E(i == null ? void 0 : i.catName), 1)
          ], 8, t3))), 128))
        ])) : T("", !0)
      ]))), 128))
    ])) : T("", !0),
    e.type == "text" ? (c(), d("div", l3, [
      (c(!0), d(Q, null, ie(e.categoryChild, (s, r) => (c(), d("div", { key: r }, [
        g("div", s3, E(s == null ? void 0 : s.catName), 1),
        (s == null ? void 0 : s.catType) == 1 ? (c(), d("div", a3, [
          (c(!0), d(Q, null, ie(s.childCateList, (i, p) => (c(), d("div", {
            key: p,
            class: "nut-category-pane__childItem",
            onClick: (f) => e.onChange(i)
          }, [
            g("div", i3, E(i == null ? void 0 : i.catName), 1)
          ], 8, r3))), 128))
        ])) : T("", !0)
      ]))), 128))
    ])) : T("", !0),
    e.type == "custom" ? (c(), d("div", u3, [
      (c(!0), d(Q, null, ie(e.customCategory, (s, r) => (c(), d("div", {
        key: r,
        class: "nut-category-pane__skuName",
        onClick: (i) => e.onChange(s)
      }, E(s == null ? void 0 : s.catName), 9, c3))), 128))
    ])) : T("", !0)
  ]);
}
const f3 = /* @__PURE__ */ ee(G2, [["render", d3]]), { create: p3 } = q("comment-header"), m3 = p3({
  components: {
    NutRate: un
  },
  props: {
    type: {
      type: String,
      default: "default"
      // default，complex
    },
    info: {
      type: Object,
      default: () => {
      }
    },
    labels: {
      type: Function,
      default: () => ""
    }
  },
  emits: ["handleClick"],
  setup(e, { emit: t }) {
    return { handleClick: () => {
      t("handleClick");
    } };
  }
}), h3 = { class: "nut-comment-header__user" }, g3 = { class: "nut-comment-header__user-avter" }, v3 = ["src"], y3 = { class: "nut-comment-header__user-score" }, b3 = {
  key: 0,
  class: "nut-comment-header__time"
};
function $3(e, t, n, l, o, a) {
  const s = U("nut-rate");
  return c(), d("view", null, [
    e.info ? (c(), d("view", {
      key: 0,
      class: "nut-comment-header",
      onClick: t[1] || (t[1] = (...r) => e.handleClick && e.handleClick(...r))
    }, [
      g("view", h3, [
        g("view", g3, [
          e.info.avatar ? (c(), d("img", {
            key: 0,
            src: e.info.avatar
          }, null, 8, v3)) : T("", !0)
        ]),
        e.type == "default" ? (c(), d("view", {
          key: 0,
          class: P([`nut-comment-header__user-${e.type}`])
        }, [
          g("view", {
            class: P([`nut-comment-header__user-${e.type}-name`])
          }, [
            g("span", null, E(e.info.nickName), 1),
            _(e.$slots, "labels")
          ], 2),
          g("view", y3, [
            oe(s, {
              modelValue: e.info.score,
              "onUpdate:modelValue": t[0] || (t[0] = (r) => e.info.score = r),
              size: "12",
              spacing: "5",
              readonly: "",
              onChange: e.handleClick
            }, null, 8, ["modelValue", "onChange"])
          ])
        ], 2)) : (c(), d("view", {
          key: 1,
          class: P([`nut-comment-header__user-${e.type}`])
        }, [
          g("span", {
            class: P([`nut-comment-header__user-${e.type}-name`])
          }, E(e.info.nickName), 3),
          _(e.$slots, "labels")
        ], 2))
      ]),
      e.info.time ? (c(), d("view", b3, E(e.info.time), 1)) : T("", !0)
    ])) : T("", !0),
    e.type == "complex" ? (c(), d("view", {
      key: 1,
      class: P([`nut-comment-header__${e.type}-score`])
    }, [
      oe(s, {
        modelValue: e.info.score,
        "onUpdate:modelValue": t[2] || (t[2] = (r) => e.info.score = r),
        size: "12",
        spacing: "3",
        readonly: ""
      }, null, 8, ["modelValue"]),
      g("i", {
        class: P([`nut-comment-header__${e.type}-score-i`])
      }, null, 2),
      g("view", {
        class: P([`nut-comment-header__${e.type}-score-size`])
      }, E(e.info.size), 3)
    ], 2)) : T("", !0)
  ]);
}
const w3 = /* @__PURE__ */ ee(m3, [["render", $3]]), { create: k3 } = q("comment-images"), C3 = k3({
  props: {
    type: {
      type: String,
      default: "one"
      // one multi
    },
    videos: {
      type: Array,
      default: () => []
    },
    images: {
      type: Array,
      default: () => []
    }
  },
  components: { Right: sn },
  emits: ["click", "clickImages"],
  setup(e, { emit: t }) {
    const n = z(!1), l = z(1), o = z([]);
    return x(
      () => [e.videos, e.images],
      (s) => {
        s[0].length > 0 && s[0].forEach((r) => {
          r.type = "video";
        }), o.value = s[0].concat(s[1]);
      },
      { deep: !0 }
    ), be(() => {
      e.videos.length > 0 && e.videos.forEach((s) => {
        s.type = "video";
      }), o.value = e.videos.concat(e.images);
    }), { isShowImage: n, initIndex: l, showImages: (s, r) => {
      const { videos: i, images: p } = e, f = s == "img" ? r - i.length : r;
      t("clickImages", {
        type: s,
        index: f,
        value: s == "img" ? p[f] : i[f]
      });
    }, totalImages: o };
  }
}), S3 = ["onClick"], T3 = ["src"], N3 = /* @__PURE__ */ g("view", { class: "nut-comment-images__play" }, null, -1), D3 = ["onClick"], _3 = ["src"], I3 = {
  key: 0,
  class: "nut-comment-images__mask"
};
function B3(e, t, n, l, o, a) {
  const s = U("Right");
  return c(), d("view", {
    class: P(`nut-comment-images nut-comment-images--${e.type}`)
  }, [
    (c(!0), d(Q, null, ie(e.videos, (r, i) => (c(), d("view", {
      key: r.id,
      class: "nut-comment-images__item nut-comment-images__item--video",
      onClick: (p) => e.showImages("video", i)
    }, [
      g("img", {
        src: r.mainUrl
      }, null, 8, T3),
      N3
    ], 8, S3))), 128)),
    (c(!0), d(Q, null, ie(e.images, (r, i) => (c(), d(Q, {
      key: r.id
    }, [
      e.type == "multi" && e.videos.length + i < 9 || e.type != "multi" ? (c(), d("view", {
        key: 0,
        class: "nut-comment-images__item nut-comment-images__item--imgbox",
        onClick: (p) => e.showImages("img", i + e.videos.length)
      }, [
        g("img", {
          src: r.smallImgUrl ? r.smallImgUrl : r.imgUrl
        }, null, 8, _3),
        e.type == "multi" && e.totalImages.length > 9 && e.videos.length + i > 7 ? (c(), d("view", I3, [
          g("span", null, "共 " + E(e.totalImages.length) + " 张", 1),
          oe(s, { style: { width: "12px" } })
        ])) : T("", !0)
      ], 8, D3)) : T("", !0)
    ], 64))), 128))
  ], 2);
}
const M3 = /* @__PURE__ */ ee(C3, [["render", B3]]), { create: L3 } = q("comment-bottom"), P3 = "NutComment", E3 = L3({
  props: {
    type: {
      type: String,
      default: "base"
      // simple，base，complex
    },
    info: {
      type: Object,
      default: () => ({})
    },
    operation: {
      type: Array,
      default: ["replay", "like", "more"]
    }
  },
  components: { Fabulous: As, Comment: vs, MoreX: Ya },
  emits: ["clickOperate", "handleClick"],
  setup(e, { emit: t }) {
    const n = Se(P3), l = z(!1), o = z([]);
    return be(() => {
      const r = ["replay", "like", "more"];
      e.operation && e.operation.forEach((i) => {
        r.includes(i) && o.value.push(i);
      });
    }), { showPopver: l, operate: (r) => {
      r == "more" && (l.value = !l.value), t("clickOperate", r);
    }, mergeOp: o, handleClick: () => {
      t("handleClick");
    }, translate: n };
  }
}), A3 = { class: "nut-comment-bottom" }, z3 = { key: 0 }, V3 = { class: "nut-comment-bottom__cpx" }, O3 = ["onClick"];
function H3(e, t, n, l, o, a) {
  const s = U("Fabulous"), r = U("Comment"), i = U("MoreX");
  return c(), d("view", A3, [
    g("view", {
      class: "nut-comment-bottom__lable",
      onClick: t[0] || (t[0] = (...p) => e.handleClick && e.handleClick(...p))
    }, [
      e.type != "complex" ? (c(), d("span", z3, E(e.info.size), 1)) : T("", !0)
    ]),
    g("view", V3, [
      (c(!0), d(Q, null, ie(e.mergeOp, (p, f) => (c(), d("view", {
        key: f,
        class: P(["nut-comment-bottom__cpx-item", `nut-comment-bottom__cpx-item--${p}`]),
        onClick: (y) => e.operate(p)
      }, [
        p != "more" ? (c(), d(Q, { key: 0 }, [
          g("span", null, E(e.info[p]), 1),
          p == "like" ? (c(), J(s, { key: 0 })) : (c(), J(r, { key: 1 }))
        ], 64)) : T("", !0),
        p == "more" ? (c(), d(Q, { key: 1 }, [
          oe(i),
          e.showPopver ? (c(), d("view", {
            key: 0,
            class: "nut-comment-bottom__cpx-item-popover",
            onClick: t[1] || (t[1] = (y) => e.operate("popover"))
          }, E(e.translate("complaintsText")), 1)) : T("", !0)
        ], 64)) : T("", !0)
      ], 10, O3))), 128))
    ])
  ]);
}
const R3 = /* @__PURE__ */ ee(E3, [["render", H3]]), { create: F3 } = q("comment"), W3 = "NutComment", Y3 = F3({
  props: {
    headerType: {
      type: String,
      default: "default"
      //头部展示风格 default，complex
    },
    imagesRows: {
      type: String,
      default: "one"
      // 'one'  'multi'
    },
    ellipsis: {
      type: [String, Number, Boolean],
      default: !1
    },
    videos: {
      type: Array,
      default: () => []
    },
    images: {
      type: Array,
      default: () => []
    },
    info: {
      type: Object,
      default: () => ({})
    },
    follow: {
      type: Object,
      default: () => ({})
    },
    labels: {
      type: Function,
      default: () => ""
    },
    operation: {
      type: Array,
      default: ["replay", "like", "more"]
    }
  },
  components: {
    CommentHeader: w3,
    CommentImages: M3,
    CommentBottom: R3,
    Right: sn
  },
  emits: ["click", "clickImages", "clickOperate"],
  setup(e, { emit: t }) {
    const n = Se(W3);
    return { conEllipsis: N(() => e.ellipsis ? e.ellipsis : e.headerType == "complex" ? 6 : 2), clickOperate: (r) => {
      t("clickOperate", r);
    }, handleClick: () => {
      t("click", e.info);
    }, clickImages: (r) => {
      t("clickImages", r);
    }, translate: n };
  }
}), j3 = {
  key: 0,
  class: "nut-comment"
}, K3 = ["innerHTML"], U3 = { class: "nut-comment__follow-title" }, X3 = { class: "nut-comment__follow-com" };
function q3(e, t, n, l, o, a) {
  const s = U("comment-header"), r = U("comment-images"), i = U("Right"), p = U("comment-bottom");
  return e.info && Object.keys(e.info) ? (c(), d("view", j3, [
    oe(s, {
      type: e.headerType,
      info: e.info,
      labels: e.labels,
      onHandleClick: e.handleClick
    }, {
      labels: ne(() => [
        _(e.$slots, "comment-labels")
      ]),
      _: 3
    }, 8, ["type", "info", "labels", "onHandleClick"]),
    _(e.$slots, "feature"),
    g("view", {
      class: "nut-comment__main",
      style: A(`-webkit-line-clamp:${e.conEllipsis}`),
      onClick: t[0] || (t[0] = (...f) => e.handleClick && e.handleClick(...f)),
      innerHTML: e.info.content
    }, null, 12, K3),
    oe(r, {
      images: e.images,
      videos: e.videos,
      type: e.imagesRows,
      onClickImages: e.clickImages
    }, null, 8, ["images", "videos", "type", "onClickImages"]),
    e.follow && e.follow.days > 0 ? (c(), d("view", {
      key: 0,
      class: "nut-comment__follow",
      onClick: t[2] || (t[2] = (...f) => e.handleClick && e.handleClick(...f))
    }, [
      g("view", U3, E(e.translate("additionalReview", e.follow.days)), 1),
      g("view", X3, E(e.follow.content), 1),
      e.follow.images && e.follow.images.length > 0 ? (c(), d("view", {
        key: 0,
        class: "nut-comment__follow-img",
        onClick: t[1] || (t[1] = (f) => e.clickImages(e.follow.images))
      }, [
        he(E(e.translate("additionalImages", e.follow.images.length)) + " ", 1),
        oe(i, { width: "12px" })
      ])) : T("", !0)
    ])) : T("", !0),
    oe(p, {
      type: e.headerType,
      info: e.info,
      operation: e.operation,
      onClickOperate: e.clickOperate,
      onHandleClick: e.handleClick
    }, null, 8, ["type", "info", "operation", "onClickOperate", "onHandleClick"]),
    _(e.$slots, "comment-shop-reply")
  ])) : T("", !0);
}
const Z3 = /* @__PURE__ */ ee(Y3, [["render", q3]]), G3 = { class: "nut-invoice" }, J3 = {
  key: 0,
  class: "nut-invoice__submit"
}, tl = /* @__PURE__ */ Ce({
  name: "NutInvoice",
  __name: "invoice",
  props: {
    data: { default: () => [] },
    formValue: { default: () => {
    } },
    submit: { type: Boolean, default: !0 }
  },
  emits: ["submit", "scrollBottom"],
  setup(e, { emit: t }) {
    const n = t, l = z(), o = () => {
      l.value.validate().then(({ valid: a, errors: s }) => {
        n("submit", a, s);
      });
    };
    return (a, s) => (c(), d("div", G3, [
      oe(ye(dn), {
        ref_key: "formRef",
        ref: l,
        "model-value": a.formValue
      }, {
        default: ne(() => [
          (c(!0), d(Q, null, ie(a.data, (r, i) => (c(), J(ye(fn), {
            key: i,
            label: r.label,
            required: r.required,
            rules: r.rules,
            prop: r.formItemProp
          }, {
            default: ne(() => [
              r.type === "radio" ? (c(), J(Ao, {
                key: 0,
                modelValue: a.formValue[r.formItemProp],
                "onUpdate:modelValue": (p) => a.formValue[r.formItemProp] = p
              }, {
                default: ne(() => [
                  (c(!0), d(Q, null, ie(r.radioLabel, (p, f) => (c(), J(Eo, {
                    key: f,
                    shape: "button",
                    label: p.label
                  }, {
                    default: ne(() => [
                      he(E(p.label), 1)
                    ]),
                    _: 2
                  }, 1032, ["label"]))), 128))
                ]),
                _: 2
              }, 1032, ["modelValue", "onUpdate:modelValue"])) : (c(), J(Lo, {
                key: 1,
                modelValue: a.formValue[r.formItemProp],
                "onUpdate:modelValue": (p) => a.formValue[r.formItemProp] = p,
                class: "nut-input-text",
                placeholder: r.placeholder,
                type: "text"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]))
            ]),
            _: 2
          }, 1032, ["label", "required", "rules", "prop"]))), 128))
        ]),
        _: 1
      }, 8, ["model-value"]),
      a.submit ? (c(), d("div", J3, [
        oe(ye(qe), {
          type: "primary",
          block: "",
          onClick: o
        }, {
          default: ne(() => [
            he("提交审批")
          ]),
          _: 1
        })
      ])) : T("", !0)
    ]));
  }
});
Te(tl);
const { create: Q3 } = q("avatar-cropper"), x3 = Q3({
  components: {
    NutButton: qe,
    Refresh2: br,
    Retweet: Sr
  },
  props: {
    maxZoom: {
      type: Number,
      default: 3
    },
    space: {
      type: Number,
      default: 10
    },
    toolbarPosition: {
      type: String,
      default: "bottom"
    },
    editText: {
      type: String,
      default: "编辑"
    },
    cancelText: {
      type: String,
      default: "取消"
    },
    confirmText: {
      type: String,
      default: "确定"
    },
    shape: {
      type: String,
      default: "square"
    }
  },
  emits: ["confirm", "cancel"],
  setup(e, { emit: t, expose: n }) {
    const l = fe({
      visible: !1,
      defScale: 1,
      scale: 1,
      angle: 0,
      moveX: 0,
      moveY: 0,
      moving: !1,
      zooming: !1,
      displayWidth: 0,
      displayHeight: 0
    }), o = {
      img: new Image(),
      // 规定要使用的图像
      sx: 0,
      // 开始剪切的 x 坐标位置
      sy: 0,
      // 开始剪切的 y 坐标位置
      swidth: 0,
      // 被剪切区域的宽度
      sheight: 0,
      // 被剪切区域的高度
      x: 0,
      // 在画布上x的坐标位置
      y: 0,
      // 在画布上y的坐标位置
      width: 0,
      // 要使用的图像的宽度
      height: 0
      // 要使用的图像的高度
    }, a = z(Z({}, o)), s = z(), r = z(), i = z(), p = window.devicePixelRatio || 1, f = et(), y = N(() => l.angle === 90 || l.angle === 270), v = N(() => {
      const { swidth: K } = a.value, se = K / p + "px";
      return {
        width: se,
        height: se
      };
    }), b = N(() => {
      const { displayWidth: K, scale: se } = l, { swidth: ue, height: pe } = a.value;
      return y.value ? Math.max(0, (pe * se - ue) / 2) : Math.max(0, (K * se - ue) / 2);
    }), $ = N(() => {
      const { displayWidth: K, scale: se } = l, { swidth: ue, height: pe } = a.value;
      return y.value ? Math.max(0, (K * se - ue) / 2) : Math.max(0, (pe * se - ue) / 2);
    }), k = (K) => new Promise((se) => {
      const ue = new FileReader();
      ue.onloadend = (pe) => se(pe.target.result), ue.readAsDataURL(K);
    }), u = (K) => new Promise((se) => {
      const ue = new Image();
      ue.onload = () => se(ue), ue.src = K;
    }), h = () => {
      const { img: K, width: se, height: ue, x: pe, y: ke, swidth: Le } = a.value, { moveX: H, moveY: G, scale: ae } = l, re = r.value;
      if (!re)
        return;
      const me = re.getContext("2d");
      re.width = l.displayWidth, re.height = l.displayHeight, me.clearRect(0, 0, re.width, re.height), me.fillStyle = "#666", me.fillRect(0, 0, re.width, re.height), me.fillStyle = "#000", me.fillRect(e.space * p, (re.height - Le) / 2, Le, Le), me.translate(re.width / 2 + H, re.height / 2 + G), me.rotate(Math.PI / 180 * l.angle), me.scale(ae, ae), me.drawImage(K, pe, ke, se, ue);
    }, m = (K) => {
      const se = Ye(s.value), { width: ue, height: pe } = se, ke = l.displayWidth = ue * p, Le = l.displayHeight = pe * p;
      let H = Z({}, o);
      const { width: G, height: ae } = K;
      H.img = K;
      const re = ae > G, me = re ? G / ae : ae / G;
      H.width = ke, H.height = re ? ke / me : ke * me, H.x = -H.width / 2, H.y = -H.height / 2, H.swidth = ke - e.space * 2 * p, H.sheight = re ? H.swidth / me : H.swidth * me, H.sx = e.space * p, H.sy = (Le - H.swidth) / 2, a.value = H, l.defScale = H.swidth / (re ? H.width : H.height), I();
    }, w = (K) => Ge(this, null, function* () {
      l.visible = !0;
      const se = K.target;
      let { files: ue } = se;
      if (!(ue != null && ue.length))
        return;
      const pe = yield k(ue[0]), ke = yield u(pe);
      m(ke), h();
    }), I = () => {
      B(l.defScale), l.moveX = 0, l.moveY = 0, l.angle = 0;
    }, B = (K) => {
      K = Ve(K, 0.3, +e.maxZoom + 1), K !== l.scale && (l.scale = K);
    }, L = (K) => Math.sqrt(pt(K[0].clientX - K[1].clientX, 2) + pt(K[0].clientY - K[1].clientY, 2));
    let M, S, C, D, V;
    const j = (K) => {
      const { touches: se } = K, { offsetX: ue } = f;
      f.start(K), V = se.length, M = l.moveX, S = l.moveY, l.moving = V === 1, l.zooming = V === 2 && !ue.value, l.zooming && (C = l.scale, D = L(K.touches));
    }, X = (K) => {
      const { touches: se } = K;
      if (f.move(K), (l.moving || l.zooming) && ft(K, !0), l.moving) {
        const { deltaX: ue, deltaY: pe } = f, ke = ue.value * l.scale + M, Le = pe.value * l.scale + S;
        l.moveX = Ve(ke, -b.value, b.value), l.moveY = Ve(Le, -$.value, $.value);
      }
      if (l.zooming && se.length === 2) {
        const ue = L(se), pe = C * ue / D;
        B(pe);
      }
    }, le = (K) => {
      let se = !1;
      (l.moving || l.zooming) && (se = !(l.moving && M === l.moveX && S === l.moveY), K.touches.length || (l.zooming && (l.moveX = Ve(l.moveX, -b.value, b.value), l.moveY = Ve(l.moveY, -$.value, $.value), l.zooming = !1), l.moving = !1, M = 0, S = 0, C = l.defScale, l.scale < l.defScale && I(), l.scale > e.maxZoom && (l.scale = +e.maxZoom))), ft(K, se), f.reset();
    }, W = () => {
      l.angle = 0;
    }, Y = () => {
      if (l.angle === 270) {
        l.angle = 0;
        return;
      }
      l.angle += 90;
    }, R = (K = !0) => {
      l.visible = !1, I(), i.value.value = "", K && t("cancel");
    }, te = () => {
      const K = r.value, { sx: se, sy: ue, swidth: pe } = a.value, ke = pe, Le = pe, H = document.createElement("canvas"), G = H.getContext("2d");
      H.width = ke, H.height = Le, K && G.drawImage(K, se, ue, ke, Le, 0, 0, ke, Le);
      const ae = H.toDataURL("image/png");
      t("confirm", ae), R(!1);
    };
    return x(
      () => l.scale,
      () => {
        h();
      }
    ), x(
      () => l.angle,
      () => {
        Math.abs(l.moveX) > b.value && (l.moveX = b.value), Math.abs(l.moveY) > $.value && (l.moveY = $.value), h();
      }
    ), x(
      () => l.moveX,
      () => {
        h();
      }
    ), x(
      () => l.moveY,
      () => {
        h();
      }
    ), n({
      cancel: R,
      reset: W,
      rotate: Y,
      confirm: te
    }), ce(Z({}, ge(l)), {
      cropperPopupRef: s,
      canvasRef: r,
      inputImageRef: i,
      highlightStyle: v,
      inputImageChange: w,
      reset: W,
      rotate: Y,
      cancel: R,
      confirm: te,
      onTouchStart: j,
      onTouchMove: X,
      onTouchEnd: le
    });
  }
}), e4 = ["data-edit-text"], t4 = {
  ref: "cropperPopupRef",
  class: "nut-cropper-popup"
}, n4 = {
  ref: "canvasRef",
  class: "nut-cropper-popup__canvas"
}, o4 = {
  key: 1,
  class: "flex-sb"
};
function l4(e, t, n, l, o, a) {
  const s = U("nut-button"), r = U("Refresh2"), i = U("Retweet");
  return c(), d(Q, null, [
    g("div", {
      class: P(["nut-avatar-cropper", { round: e.shape === "round" }]),
      "data-edit-text": e.editText
    }, [
      _(e.$slots, "default"),
      g("input", {
        ref: "inputImageRef",
        type: "file",
        accept: "image/*",
        class: "nut-avatar-cropper__input",
        onChange: t[0] || (t[0] = (...p) => e.inputImageChange && e.inputImageChange(...p))
      }, null, 544)
    ], 10, e4),
    Ie(g("div", t4, [
      g("canvas", n4, null, 512),
      g("div", {
        class: "nut-cropper-popup__highlight",
        onTouchstart: t[1] || (t[1] = (...p) => e.onTouchStart && e.onTouchStart(...p)),
        onTouchmove: t[2] || (t[2] = (...p) => e.onTouchMove && e.onTouchMove(...p)),
        onTouchend: t[3] || (t[3] = (...p) => e.onTouchEnd && e.onTouchEnd(...p)),
        onTouchcancel: t[4] || (t[4] = (...p) => e.onTouchEnd && e.onTouchEnd(...p))
      }, [
        g("div", {
          class: P(["highlight", { highlight__round: e.shape === "round" }]),
          style: A(e.highlightStyle)
        }, null, 6)
      ], 32),
      g("div", {
        class: P(["nut-cropper-popup__toolbar", [e.toolbarPosition]])
      }, [
        e.$slots.toolbar ? _(e.$slots, "toolbar", { key: 0 }) : (c(), d("div", o4, [
          g("div", {
            class: "nut-cropper-popup__toolbar-item",
            onClick: t[5] || (t[5] = (p) => e.cancel())
          }, [
            oe(s, { type: "danger" }, {
              default: ne(() => [
                he(E(e.cancelText), 1)
              ]),
              _: 1
            })
          ]),
          g("div", {
            class: "nut-cropper-popup__toolbar-item",
            onClick: t[6] || (t[6] = (...p) => e.reset && e.reset(...p))
          }, [
            oe(r, { color: "#fff" })
          ]),
          g("div", {
            class: "nut-cropper-popup__toolbar-item",
            onClick: t[7] || (t[7] = (...p) => e.rotate && e.rotate(...p))
          }, [
            oe(i, { color: "#fff" })
          ]),
          g("div", {
            class: "nut-cropper-popup__toolbar-item",
            onClick: t[8] || (t[8] = (...p) => e.confirm && e.confirm(...p))
          }, [
            oe(s, { type: "success" }, {
              default: ne(() => [
                he(E(e.confirmText), 1)
              ]),
              _: 1
            })
          ])
        ]))
      ], 2)
    ], 512), [
      [Me, e.visible]
    ])
  ], 64);
}
const s4 = /* @__PURE__ */ ee(x3, [["render", l4]]);
function a4(e) {
  [qe, oo, lo, Tt, Ae, Vi, Ki, ao, io, uo, po, mo, ru, pu, hu, go, Iu, Vu, Yu, bo, wo, ko, bc, Co, So, Hc, Uc, Qc, sd, Do, Nd, Fd, ff, Io, Af, Of, op, Ot, Lo, Eo, Ao, un, Mo, Ap, Wp, d1, I1, dn, fn, pn, Vo, W1, Oo, U1, mn, fm, ym, Ht, Ro, Rt, Fm, Xm, hn, eh, sh, cn, jo, wh, Ko, gn, Yh, o0, vn, yn, Ft, bn, L0, R0, $o, $n, Zo, eg, Jo, Qo, Tg, xo, Pg, Og, el, Jg, kv, Dv, Av, Xv, Qv, ay, Uy, s2, v2, R2, q2, f3, Z3, tl, s4].forEach((n) => {
    n.install ? e.use(n) : n.name && e.component(n.name, n);
  });
}
const r4 = "4.3.3", p4 = { install: a4, version: r4 };
export {
  W1 as ActionSheet,
  kv as Address,
  R2 as AddressList,
  xo as Animate,
  Fm as Audio,
  Xm as AudioOperate,
  hn as Avatar,
  s4 as AvatarCropper,
  eh as AvatarGroup,
  Oo as Backtop,
  $o as Badge,
  Dv as Barrage,
  qe as Button,
  ff as Calendar,
  Io as CalendarCard,
  s2 as Card,
  Fd as Cascader,
  q2 as Category,
  f3 as CategoryPane,
  oo as Cell,
  lo as CellGroup,
  Af as Checkbox,
  Of as CheckboxGroup,
  jo as CircleProgress,
  io as Col,
  Jo as Collapse,
  Qo as CollapseItem,
  Z3 as Comment,
  Vi as ConfigProvider,
  R0 as Countdown,
  L0 as Countup,
  op as DatePicker,
  mn as Dialog,
  mo as Divider,
  U1 as Drag,
  v2 as Ecard,
  ko as Elevator,
  Pg as Ellipsis,
  Ko as Empty,
  Iu as FixedNav,
  dn as Form,
  fn as FormItem,
  ru as Grid,
  pu as GridItem,
  Ki as Image,
  bn as ImagePreview,
  Hc as Indicator,
  fm as InfiniteLoading,
  Lo as Input,
  Ot as InputNumber,
  tl as Invoice,
  ao as Layout,
  sh as List,
  Gn as Locale,
  Vu as Menu,
  Yu as MenuItem,
  go as Navbar,
  wh as Noticebar,
  Ht as Notify,
  I1 as NumberKeyboard,
  Tt as Overlay,
  bc as Pagination,
  Mo as Picker,
  Zo as Popover,
  Ae as Popup,
  Ft as Price,
  cn as Progress,
  ym as PullRefresh,
  Eo as Radio,
  Ao as RadioGroup,
  Do as Range,
  un as Rate,
  uo as Row,
  Nd as Searchbar,
  Ap as ShortPassword,
  Uc as SideNavbar,
  Qc as SideNavbarItem,
  Av as Signature,
  eg as Skeleton,
  Uy as Sku,
  hu as Space,
  o0 as Step,
  Yh as Steps,
  po as Sticky,
  sd as SubSideNavbar,
  pn as Swipe,
  Vo as SwipeGroup,
  vn as Swiper,
  yn as SwiperItem,
  Ro as Switch,
  So as TabPane,
  bo as Tabbar,
  wo as TabbarItem,
  Tg as Table,
  Co as Tabs,
  $n as Tag,
  Wp as Textarea,
  ay as TimeDetail,
  Qv as TimePannel,
  Xv as TimeSelect,
  Rt as Toast,
  Jg as Tour,
  el as TrendArrow,
  d1 as Uploader,
  gn as Video,
  Og as Watermark,
  p4 as default,
  a4 as install,
  tm as showDialog,
  T0 as showImagePreview,
  f4 as showNotify,
  Wo as showToast,
  r4 as version
};
