var Xo = Object.defineProperty, qo = Object.defineProperties;
var Zo = Object.getOwnPropertyDescriptors;
var Dt = Object.getOwnPropertySymbols;
var $n = Object.prototype.hasOwnProperty, bn = Object.prototype.propertyIsEnumerable;
var pt = Math.pow, Ft = (e, t, n) => t in e ? Xo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, q = (e, t) => {
  for (var n in t || (t = {}))
    $n.call(t, n) && Ft(e, n, t[n]);
  if (Dt)
    for (var n of Dt(t))
      bn.call(t, n) && Ft(e, n, t[n]);
  return e;
}, de = (e, t) => qo(e, Zo(t));
var _t = (e) => typeof e == "symbol" ? e : e + "", Wt = (e, t) => {
  var n = {};
  for (var l in e)
    $n.call(e, l) && t.indexOf(l) < 0 && (n[l] = e[l]);
  if (e != null && Dt)
    for (var l of Dt(e))
      t.indexOf(l) < 0 && bn.call(e, l) && (n[l] = e[l]);
  return n;
};
var V = (e, t, n) => (Ft(e, typeof t != "symbol" ? t + "" : t, n), n);
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
import { reactive as ce, ref as z, defineComponent as Le, useSlots as at, h as be, openBlock as c, createBlock as ee, computed as D, createElementBlock as f, normalizeClass as L, normalizeStyle as A, createElementVNode as h, createTextVNode as ge, unref as ke, createCommentVNode as N, renderSlot as I, provide as Pe, inject as Ee, getCurrentInstance as je, onUnmounted as Xe, createApp as Go, resolveComponent as W, Fragment as x, toDisplayString as E, watchEffect as bt, Transition as Qt, withCtx as ne, withDirectives as Se, withModifiers as De, vShow as Ie, watch as Q, toRefs as he, Teleport as Rn, mergeProps as wt, createVNode as oe, onMounted as ve, onBeforeUnmount as xt, shallowReactive as Jo, markRaw as wn, isVNode as Qo, Comment as xo, Text as el, nextTick as Te, renderList as ie, normalizeProps as tl, guardReactiveProps as nl, resolveDynamicComponent as Oe, onActivated as Ct, toRef as xe, createSlots as kt, onBeforeMount as Fn, readonly as kn, onDeactivated as St, render as en, vModelText as Wn } from "vue";
class Yn {
}
let ol = class extends Yn {
  constructor() {
    super(...arguments);
    V(this, "save", "保存");
    V(this, "confirm", "确认");
    V(this, "cancel", "取消");
    V(this, "done", "完成");
    V(this, "noData", "暂无数据");
    V(this, "placeholder", "请输入");
    V(this, "select", "请选择");
    V(this, "video", {
      errorTip: "视频加载失败",
      clickRetry: "点击重试"
    });
    V(this, "fixednav", {
      activeText: "收起导航",
      unActiveText: "快速导航"
    });
    V(this, "pagination", {
      prev: "上一页",
      next: "下一页"
    });
    V(this, "calendaritem", {
      weekdays: ["日", "一", "二", "三", "四", "五", "六"],
      end: "结束",
      start: "开始",
      title: "日期选择",
      monthTitle: (n, l) => `${n}年${l}月`,
      today: "今天"
    });
    V(this, "calendarcard", {
      weekdays: ["日", "一", "二", "三", "四", "五", "六"],
      end: "结束",
      start: "开始",
      title: "日期选择",
      monthTitle: (n, l) => `${n}年${l}月`,
      today: "今天"
    });
    V(this, "shortpassword", {
      title: "请输入密码",
      desc: "您使用了虚拟资产，请进行验证",
      tips: "忘记密码"
    });
    V(this, "uploader", {
      ready: "准备完成",
      readyUpload: "准备上传",
      waitingUpload: "等待上传",
      uploading: "上传中",
      success: "上传成功",
      error: "上传失败"
    });
    V(this, "countdown", {
      day: "天",
      hour: "时",
      minute: "分",
      second: "秒"
    });
    V(this, "address", {
      selectRegion: "请选择所在地区",
      deliveryTo: "配送至",
      chooseAnotherAddress: "选择其他地址"
    });
    V(this, "signature", {
      reSign: "重签",
      unSupportTpl: "对不起，当前浏览器不支持Canvas，无法使用本控件！"
    });
    V(this, "ecard", {
      chooseText: "请选择电子卡面值",
      otherValueText: "其他面值",
      placeholder: "请输入1-5000整数"
    });
    V(this, "timeselect", {
      pickupTime: "取件时间"
    });
    V(this, "sku", {
      buyNow: "立即购买",
      buyNumber: "购买数量",
      addToCart: "加入购物车"
    });
    V(this, "skuheader", {
      skuId: "商品编号"
    });
    V(this, "addresslist", {
      addAddress: "新建地址",
      default: "默认"
    });
    V(this, "comment", {
      complaintsText: "我要投诉",
      additionalReview: (n) => `购买${n}天后追评`,
      additionalImages: (n) => `${n}张追评图片`
    });
    V(this, "infiniteloading", {
      loading: "加载中...",
      pullTxt: "松开刷新",
      loadMoreTxt: "哎呀，这里是底部了啦"
    });
    V(this, "datepicker", {
      year: "年",
      month: "月",
      day: "日",
      hour: "时",
      min: "分",
      seconds: "秒"
    });
    V(this, "audiooperate", {
      back: "倒退",
      start: "开始",
      pause: "暂停",
      forward: "快进",
      mute: "静音"
    });
    V(this, "pullrefresh", {
      pulling: "下拉刷新",
      loosing: "释放刷新",
      loading: "加载中...",
      complete: "刷新成功"
    });
  }
};
class ll extends Yn {
  constructor() {
    super(...arguments);
    V(this, "save", "Save");
    V(this, "confirm", "Confirm");
    V(this, "cancel", "Cancel");
    V(this, "done", "Done");
    V(this, "noData", "No Data");
    V(this, "placeholder", "Placeholder");
    V(this, "select", "Select");
    V(this, "video", {
      errorTip: "Error Tip",
      clickRetry: "Click Retry"
    });
    V(this, "fixednav", {
      activeText: "Close Nav",
      unActiveText: "Open Nav"
    });
    V(this, "pagination", {
      prev: "Previous",
      next: "Next"
    });
    V(this, "calendaritem", {
      weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      end: "End",
      start: "Start",
      title: "Calendar",
      monthTitle: (n, l) => `${n}/${l}`,
      today: "Today"
    });
    V(this, "calendarcard", {
      weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      end: "End",
      start: "Start",
      title: "Calendar",
      monthTitle: (n, l) => `${n}/${l}`,
      today: "Today"
    });
    V(this, "shortpassword", {
      title: "Please input a password",
      desc: "Verify",
      tips: "Forget password"
    });
    V(this, "uploader", {
      ready: "Ready",
      readyUpload: "Ready to upload",
      waitingUpload: "Waiting for upload",
      uploading: "Uploading",
      success: "Upload successful",
      error: "Upload failed"
    });
    V(this, "countdown", {
      day: " Day ",
      hour: " Hour ",
      minute: " Minute ",
      second: " Second "
    });
    V(this, "address", {
      selectRegion: "Select Region",
      deliveryTo: "Delivery To",
      chooseAnotherAddress: "Choose Another Address"
    });
    V(this, "signature", {
      reSign: "Re Sign",
      unSupportTpl: "Sorry, the current browser doesn't support canvas, so we can't use this control!"
    });
    V(this, "ecard", {
      chooseText: "Select",
      otherValueText: "Other Value",
      placeholder: "Placeholder"
    });
    V(this, "timeselect", {
      pickupTime: "Pickup Time"
    });
    V(this, "sku", {
      buyNow: "Buy Now",
      buyNumber: "Buy Number",
      addToCart: "Add to Cart"
    });
    V(this, "skuheader", {
      skuId: "Sku Number"
    });
    V(this, "addresslist", {
      addAddress: "Add New Address",
      default: "default"
    });
    V(this, "comment", {
      complaintsText: "I have a complaint",
      additionalReview: (n) => `Review after ${n} days of purchase`,
      additionalImages: (n) => `There are ${n} follow-up comments`
    });
    V(this, "infiniteloading", {
      loading: "Loading...",
      pullTxt: "Loose to refresh",
      loadMoreTxt: "Oops, this is the bottom"
    });
    V(this, "datepicker", {
      year: "Year",
      month: "Month",
      day: "Day",
      hour: "Hour",
      min: "Minute",
      seconds: "Second"
    });
    V(this, "audiooperate", {
      back: "Back",
      start: "Start",
      pause: "Pause",
      forward: "Forward",
      mute: "Mute"
    });
    V(this, "pullrefresh", {
      pulling: "Pull to refresh...",
      loosing: "Loose to refresh...",
      loading: "Loading...",
      complete: "Refresh successfully"
    });
  }
}
const tn = (e, {
  args: t = [],
  done: n,
  canceled: l
}) => {
  if (e) {
    const o = e.apply(null, t);
    Un(o) ? o.then((a) => {
      a ? n(a) : l && l();
    }).catch(() => {
    }) : o ? n() : l && l();
  } else
    n();
}, jt = (e) => {
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
}, jn = Array.isArray, sl = (e) => e instanceof Date, Pt = (e) => typeof e == "function", al = (e) => typeof e == "string", dt = (e) => e !== null && typeof e == "object", Un = (e) => dt(e) && Pt(e.then) && Pt(e.catch), rl = document, Cn = rl.body, Ut = (e, t) => {
  try {
    return t.split(".").reduce((n, l) => n[l], e);
  } catch (n) {
    return "";
  }
}, il = (e, t, n) => {
  let l = Object.assign({}, e), o = Object.assign({}, n);
  return Object.keys(t).length > 0 ? (Object.keys(l).forEach((a) => {
    if (Object.prototype.hasOwnProperty.call(o, a)) {
      const s = jt(o[a]);
      s == "function" && (l[a] = o[a](t)), s == "string" && (l[a] = t[o[a]]);
    } else
      t[a] && (l[a] = t[a]);
  }), l) : e;
}, Kn = (e, t) => (Object.keys(t).forEach((n) => {
  let l = e[n], o = t[n];
  dt(l) && dt(o) ? Kn(l, o) : e[n] = o;
}), e);
function ul(e, t = 2) {
  return Object.is(parseFloat(e), NaN) ? console.log(`传入的值：${e}不是一个数字`) : (e = parseFloat(e), (Math.round((e + Number.EPSILON) * Math.pow(10, t)) / Math.pow(10, t)).toFixed(t));
}
function ft(e, t) {
  (typeof e.cancelable != "boolean" || e.cancelable) && e.preventDefault(), t && e.stopPropagation();
}
const Qe = (e, t = 2) => {
  for (e += ""; e.length < t; )
    e = "0" + e;
  return e.toString();
}, Ve = (e, t, n) => Math.min(Math.max(e, t), n), Xn = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, It = ce({
  "zh-CN": new ol(),
  "en-US": new ll()
});
class qn {
  static languages() {
    return It[this.currentLang.value];
  }
  static use(t, n) {
    n && (It[t] = new n()), this.currentLang.value = t;
  }
  static merge(t, n) {
    n && (It[t] ? Kn(It[t], n) : this.use(t, n));
  }
}
V(qn, "currentLang", z("zh-CN"));
const cl = /* @__PURE__ */ Le({
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
    const n = e, l = "nut-icon", o = at(), a = () => n.name ? n.name.indexOf("/") !== -1 : !1, s = (d) => {
      if (d)
        return isNaN(Number(d)) ? String(d) : d + "px";
    }, r = a();
    let i = be(
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
    return (d, v) => (c(), ee(p));
  }
});
function dl(e) {
  return e.name = "IconFont", e.install = (t) => {
    t.component("IconFont", e);
  }, e;
}
dl(cl);
const F = (e) => Le({
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
    }, l = D(() => {
      const a = "nut-icon";
      return {
        [t.class]: t.class,
        [a]: !0,
        [a + "-" + t.name]: t.name
      };
    }), o = D(() => {
      const a = {};
      return a.height = n(t.height), a.width = n(t.width), a.color = t.color, a;
    });
    return { classes: l, style: o };
  }
}), ye = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, o] of t)
    n[l] = o;
  return n;
};
F("add");
F("addfollow");
F("arrow-down");
const fl = F("arrow-down2"), pl = /* @__PURE__ */ h("path", {
  d: "M1741.19 227.497a121.654 121.654 0 1 1 127.858 206.812L1292.65 790.27a182.482 182.482 0 0 1-191.727 0L524.646 434.31a121.654 121.654 0 1 1 127.859-206.812l544.403 335.887c181.387-111.8 362.773-223.965 544.282-335.887",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ml = [
  pl
];
function hl(e, t, n, l, o, a) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 2472 1024",
    role: "presentation"
  }, ml, 6);
}
const gl = /* @__PURE__ */ ye(fl, [["render", hl]]);
F("arrow-right");
F("arrow-right2");
F("arrow-up");
const yl = F("arrow-up2"), vl = /* @__PURE__ */ h("path", {
  d: "M623.406 815.479A129.722 129.722 0 1 1 487.068 594.95C691.9 468.083 896.73 341.993 1101.691 215.125a194.583 194.583 0 0 1 204.442 0l614.494 379.567a129.722 129.722 0 1 1-136.338 220.657l-580.506-358.292-580.377 358.422",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), $l = [
  vl
];
function bl(e, t, n, l, o, a) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 2472 1024",
    role: "presentation"
  }, $l, 6);
}
const wl = /* @__PURE__ */ ye(yl, [["render", bl]]);
F("ask");
F("ask2");
F("cart");
F("cart2");
F("category");
const kl = F("check-checked"), Cl = /* @__PURE__ */ h("path", {
  d: "M510.613 2.837C229.793 2.837.032 232.598.032 513.418S229.793 1024 510.613 1024s510.582-229.762 510.582-510.582S794.27 2.837 510.613 2.837zm0 794.238c-156.01 0-283.656-127.646-283.656-283.657s127.645-283.656 283.656-283.656S794.27 357.407 794.27 513.418 666.624 797.075 510.613 797.075z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Sl = /* @__PURE__ */ h("path", {
  d: "M382.968 513.418a127.645 127.645 0 1 0 255.29 0 127.645 127.645 0 1 0-255.29 0Z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1);
function Tl(e, t, n, l, o, a) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1032 1024",
    role: "presentation"
  }, [
    Cl,
    ge(","),
    Sl
  ], 6);
}
const Sn = /* @__PURE__ */ ye(kl, [["render", Tl]]), Nl = F("check-disabled"), Dl = /* @__PURE__ */ h("path", {
  d: "M506.467 0C227.962 0 .094 227.868.094 506.374s227.868 506.373 506.373 506.373 506.374-227.868 506.374-506.373S787.786 0 506.467 0zm202.55 571.077H306.73c-45.01 0-67.516-22.506-67.516-67.517 0-45.01 22.505-67.516 67.516-67.516h402.286c45.01 0 67.516 22.505 67.516 67.516 0 45.011-22.505 67.517-67.516 67.517z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), _l = [
  Dl
];
function Il(e, t, n, l, o, a) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, _l, 6);
}
const Bl = /* @__PURE__ */ ye(Nl, [["render", Il]]), Ml = F("check-normal"), Ll = /* @__PURE__ */ h("path", {
  d: "M512 1024c-136.533 0-264.533-54.044-361.244-150.756C54.044 776.534 0 648.534 0 512c0-136.533 54.044-264.533 150.756-361.244C247.466 54.044 375.466 0 512 0c136.533 0 264.533 54.044 361.244 150.756C969.956 247.466 1024 375.466 1024 512s-54.044 264.533-150.756 361.244C776.534 969.956 648.534 1024 512 1024zm0-938.667c-113.778 0-221.867 45.511-301.511 125.156S85.333 398.222 85.333 512s45.511 221.867 125.156 301.511S398.222 938.667 512 938.667s221.867-45.511 301.511-125.156S938.667 625.778 938.667 512 893.156 290.133 813.51 210.489 625.778 85.333 512 85.333z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), El = [
  Ll
];
function Pl(e, t, n, l, o, a) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, El, 6);
}
const Kt = /* @__PURE__ */ ye(Ml, [["render", Pl]]), Al = F("Check"), zl = /* @__PURE__ */ h("path", {
  d: "M998.4 245.029c-219.429 153.6-398.629 332.8-552.229 552.228-40.228 58.514-128 54.857-164.571-3.657-69.486-106.057-149.943-186.514-256-256-51.2-32.914-18.286-113.371 40.229-98.743C182.857 460.8 274.286 508.343 358.4 585.143c157.257-190.172 358.4-340.114 588.8-435.2 62.171-25.6 106.057 58.514 51.2 95.086",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Vl = [
  zl
];
function Ol(e, t, n, l, o, a) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Vl, 6);
}
const Zn = /* @__PURE__ */ ye(Al, [["render", Ol]]), Hl = F("checked"), Rl = /* @__PURE__ */ h("path", {
  d: "M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0zm281.6 369.778C779.378 381.156 600.178 500.622 472.178 691.2c0 0 0 2.844-2.845 2.844-8.533 5.69-48.355 36.978-88.177-8.533-39.823-51.2-62.578-99.555-142.223-142.222-2.844 0-2.844-2.845-2.844-2.845-8.533-11.377-39.822-56.888 19.911-56.888 45.511 0 91.022 11.377 162.133 73.955 5.69 5.689 14.223 5.689 17.067 0C469.333 517.69 608.711 366.933 768 318.578c0 0 19.911-2.845 31.289 14.222 5.689 11.378 11.378 22.756-5.689 36.978z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Fl = [
  Rl
];
function Wl(e, t, n, l, o, a) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Fl, 6);
}
const Gn = /* @__PURE__ */ ye(Hl, [["render", Wl]]), Yl = F("checklist"), jl = /* @__PURE__ */ h("path", {
  d: "M159.289 500.622c62.578 0 125.155 17.067 221.867 102.4 8.533 5.69 19.91 5.69 25.6 0 48.355-54.044 238.933-261.689 455.11-329.955 0 0 28.445-5.69 42.667 19.91 8.534 17.067 19.911 34.134-5.689 54.045-22.755 17.067-264.533 179.2-440.888 440.89l-2.845 2.844c-11.378 8.533-68.267 51.2-119.467-14.223-56.888-71.11-85.333-139.377-196.266-196.266-2.845 0-2.845-2.845-5.69-5.69-11.377-11.377-54.044-73.955 25.6-73.955z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ul = [
  jl
];
function Kl(e, t, n, l, o, a) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ul, 6);
}
const Xl = /* @__PURE__ */ ye(Yl, [["render", Kl]]), ql = F("circle-close"), Zl = /* @__PURE__ */ h("path", {
  d: "M511.492 73.063a438.425 438.425 0 0 1 310.545 748.953 439.16 439.16 0 1 1-621.09-621.073A435.695 435.695 0 0 1 511.492 73.046m0-73.063C267.49.018 57.468 172.408 9.87 411.717-37.713 651.042 90.39 890.658 315.823 984.03c225.45 93.355 485.444 14.472 621.005-188.416 135.543-202.906 108.885-473.293-63.659-645.82A509.645 509.645 0 0 0 511.492.002zm-175.7 635.495 299.673-299.674c12.049-12.049 24.115-12.049 36.164 0l15.496 15.497c12.05 12.066 12.05 24.115 0 36.18L387.47 687.122c-12.066 12.05-24.115 12.05-36.181 0l-15.497-15.496c-12.049-12.066-12.049-24.115 0-36.182zm0-284.177 15.496-15.497c12.066-12.049 24.115-12.049 36.18 0l299.64 299.674c12.05 12.049 12.05 24.098 0 36.164l-15.496 15.496c-12.05 12.05-24.115 12.05-36.182 0L335.808 387.465c-12.049-12.05-12.049-24.098 0-36.164z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Gl = [
  Zl
];
function Jl(e, t, n, l, o, a) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Gl, 6);
}
const nn = /* @__PURE__ */ ye(ql, [["render", Jl]]);
F("clock");
F("close-little");
const Ql = F("close"), xl = /* @__PURE__ */ h("path", {
  d: "M981.577 1024c-11.703 0-23.406-2.926-32.183-11.703L13.166 76.07c-14.629-17.555-14.629-46.812 0-64.366 17.554-14.629 46.811-14.629 64.365 0L1013.76 947.93c17.554 17.555 17.554 43.886 0 61.44-8.777 11.703-20.48 14.629-32.183 14.629zm-936.228 0c-11.703 0-23.406-2.926-32.183-11.703-17.555-17.554-17.555-43.886 0-61.44L949.394 14.63c17.555-17.555 43.886-17.555 61.44 0 17.555 17.554 17.555 43.885 0 61.44L74.606 1012.297C68.754 1021.074 57.05 1024 45.349 1024z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), es = [
  xl
];
function ts(e, t, n, l, o, a) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1026 1024",
    role: "presentation"
  }, es, 6);
}
const At = /* @__PURE__ */ ye(Ql, [["render", ts]]), ns = F("comment"), os = /* @__PURE__ */ h("path", {
  d: "M760.415 876.089H259.793c-132.741 0-242.726-109.985-242.726-242.726V242.726C17.067 109.986 127.052 0 259.793 0h504.414c132.741 0 242.726 109.985 242.726 242.726v394.43c-3.792 132.74-109.985 238.933-246.518 238.933zM259.793 113.778c-72.06 0-128.949 56.889-128.949 128.948v394.43c0 72.059 56.89 128.948 128.949 128.948h504.414c68.267 0 128.949-56.89 128.949-128.948v-394.43c0-72.06-56.89-128.948-128.949-128.948H259.793zm56.888 887.466c-15.17 0-30.34-3.792-41.718-15.17-22.756-22.755-22.756-56.889 0-79.644l109.985-109.986c22.756-22.755 56.889-22.755 79.645 0s22.755 56.89 0 79.645L354.607 986.074c-7.585 7.585-22.755 15.17-37.926 15.17zm193.423-398.222c-45.511 0-91.023-22.755-117.57-56.889-18.964-26.548-15.171-60.681 7.585-79.644 26.548-18.963 60.681-15.17 79.644 7.585 15.17 18.963 45.511 18.963 56.889 0 18.963-22.755 56.889-30.34 79.644-7.585s30.341 56.889 7.585 79.644c-22.755 37.926-68.266 56.89-113.777 56.89z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ls = [
  os
];
function ss(e, t, n, l, o, a) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ls, 6);
}
const as = /* @__PURE__ */ ye(ns, [["render", ss]]);
F("date");
const rs = F("del"), is = /* @__PURE__ */ h("path", {
  d: "M668.444 1024H355.556c-142.223 0-256-113.778-256-256V170.667h824.888V768c0 142.222-113.777 256-256 256zM184.89 256v512c0 93.867 76.8 170.667 170.667 170.667h312.888c93.867 0 170.667-76.8 170.667-170.667V256H184.89zm753.778 0H85.333c-22.755 0-42.666-19.911-42.666-42.667s19.91-42.666 42.666-42.666h853.334c22.755 0 42.666 19.91 42.666 42.666S961.423 256 938.667 256zM625.777 85.333H398.223c-22.755 0-42.666-19.91-42.666-42.666S375.466 0 398.222 0h227.556c22.755 0 42.666 19.911 42.666 42.667s-19.91 42.666-42.666 42.666z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), us = [
  is
];
function cs(e, t, n, l, o, a) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, us, 6);
}
const Jn = /* @__PURE__ */ ye(rs, [["render", cs]]);
F("del2");
F("dongdong");
F("dou-arrow-up");
const ds = F("down-arrow"), fs = /* @__PURE__ */ h("path", {
  d: "M128 349.867C93.867 332.8 34.133 341.333 8.533 384-8.533 418.133 0 477.867 42.667 503.467 179.2 588.8 315.733 665.6 443.733 750.933c42.667 25.6 93.867 25.6 136.534 0C716.8 665.6 853.333 588.8 981.333 503.467c42.667-25.6 51.2-76.8 25.6-119.467s-76.8-51.2-119.466-25.6C768 435.2 640 512 512 588.8 384 512 256 435.2 128 349.867",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ps = [
  fs
];
function ms(e, t, n, l, o, a) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ps, 6);
}
const Qn = /* @__PURE__ */ ye(ds, [["render", ms]]);
F("download");
F("dshop");
const hs = F("edit"), gs = /* @__PURE__ */ h("path", {
  d: "M285.479 992.97H108.606c-27.927 0-55.854-12.412-77.576-31.03C9.31 940.217 0 915.393 0 884.363l3.103-155.152c0-24.824 9.31-46.545 27.927-65.164L626.812 65.164c83.782-83.782 220.315-83.782 307.2 0 83.782 83.781 83.782 223.418 0 307.2l-605.09 601.988c-12.413 12.412-27.928 18.618-43.443 18.618zM781.964 93.09c-31.03 0-65.164 12.413-89.988 37.237L96.194 729.212 93.09 884.364c0 9.309 6.206 15.515 15.515 15.515h161.358l598.884-595.782c49.649-49.649 49.649-127.224 0-173.77l-3.103-3.103c-21.72-21.721-52.751-34.133-83.781-34.133zm-201.946 78.508 65.816-65.847L882.812 342.73l-65.846 65.784zM946.424 992.97H217.212c-24.824 0-46.545-21.722-46.545-46.546s21.72-46.545 46.545-46.545h729.212c24.824 0 46.546 21.721 46.546 46.545s-21.722 46.546-46.546 46.546z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ys = [
  gs
];
function vs(e, t, n, l, o, a) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ys, 6);
}
const $s = /* @__PURE__ */ ye(hs, [["render", vs]]);
F("eye");
const bs = F("fabulous"), ws = /* @__PURE__ */ h("path", {
  d: "M584.06 1024H318.577C144.118 1024 0 883.674 0 705.422s140.326-318.578 318.578-318.578v113.778c-113.778 0-204.8 91.022-204.8 204.8s91.022 204.8 204.8 204.8h265.481V1024zm56.888 0h-53.096c-208.593 0-379.26-170.667-379.26-383.052 0-83.437 26.549-163.081 75.852-231.348l3.793-3.793c15.17-22.755 30.34-60.681 45.511-121.363l7.585-34.133c7.586-18.963 15.17-41.718 18.963-68.267C386.844 22.756 470.281 0 519.586 0c117.57 0 178.251 106.193 178.251 212.385v7.585c0 7.586-3.793 18.963-3.793 37.926C876.09 257.896 1024 405.807 1024 587.852v53.096C1024 853.333 853.333 1024 640.948 1024zM519.585 113.778c-30.34 0-41.718 53.096-49.304 87.23-3.792 34.133-11.377 60.68-15.17 83.436l-7.585 34.134c-11.378 45.51-34.133 113.778-60.682 155.496l-7.585 3.793A269.274 269.274 0 0 0 322.37 644.74c0 147.91 121.363 269.274 269.274 269.274h53.097c147.91 0 269.274-121.363 269.274-269.274v-53.097c0-117.57-98.608-216.177-216.178-216.177h-56.889c-18.963-3.793-37.926-15.17-49.304-30.341-11.377-15.17-15.17-37.926-15.17-56.889 7.585-41.718 11.378-64.474 11.378-75.852v-3.792c-3.793 0-3.793-94.815-68.267-94.815z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ks = [
  ws
];
function Cs(e, t, n, l, o, a) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1061 1024",
    role: "presentation"
  }, ks, 6);
}
const Ss = /* @__PURE__ */ ye(bs, [["render", Cs]]), Ts = F("failure"), Ns = /* @__PURE__ */ h("path", {
  d: "M512 1024C229.831 1024 0 794.169 0 512S229.831 0 512 0s512 229.831 512 512-229.831 512-512 512zm0-955.733C266.24 68.267 68.267 266.24 68.267 512S266.24 955.733 512 955.733 955.733 757.76 955.733 512 757.76 68.267 512 68.267zm111.502 282.169c13.654-13.654 34.134-13.654 47.787 0 11.378 11.377 13.653 31.857 2.275 45.51l-2.275 2.276-111.502 111.502 111.502 111.503c13.653 13.653 13.653 34.133 0 47.786-13.653 13.654-34.133 13.654-47.787 0L512 557.511 400.498 669.013c-11.378 11.378-31.858 13.654-45.511 2.276l-2.276-2.276c-11.378-11.377-13.653-31.857-2.275-45.51l2.275-2.276 111.502-111.503-111.502-111.502c-13.653-13.653-13.653-34.133 0-47.786s34.133-13.654 47.787 0L512 461.938l111.502-111.502z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ds = [
  Ns
];
function _s(e, t, n, l, o, a) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ds, 6);
}
const xn = /* @__PURE__ */ ye(Ts, [["render", _s]]);
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
const Is = F("image-error"), Bs = /* @__PURE__ */ h("path", {
  d: "M696.43 465.25c40.61 0 73.53-32.72 73.53-73.09s-32.96-73.08-73.53-73.08-73.54 32.72-73.54 73.08 32.92 73.09 73.54 73.09zM535.74 650.62l-273.61-259.4a56.19 56.19 0 0 0-15.36 11.58l-114 119.63-6-222.77c-.73-26.82 20.84-49.41 47.67-50.14l201.77-5.44 47.34-50-250.43 6.75C119 202.33 76.33 247.17 77.78 301l7.32 271.4 4.5 166.78C91.06 793 136.05 835.47 190.2 834l176-4.75 12-.32 47.34-50 116.18-122.64z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ms = /* @__PURE__ */ h("path", {
  d: "m861.71 214.8-242.83-33.86-55.09 41.46L855 263a49.05 49.05 0 0 1 41.79 55.13l-54.33 389.59-120.87-159.05A59.86 59.86 0 0 0 638.06 537l-44 33.08 65.07 86.15L603.84 698l-79.57 60.1-54.92 41.48 34.17 4.76 270.73 37.76a97.55 97.55 0 0 0 109.88-79.6 22.37 22.37 0 0 0 .65-3.44l60.53-434.16c7.44-53.32-29.95-102.62-83.6-110.1z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1);
function Ls(e, t, n, l, o, a) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, [
    Bs,
    ge(","),
    Ms
  ], 6);
}
const Es = /* @__PURE__ */ ye(Is, [["render", Ls]]), Ps = F("image"), As = /* @__PURE__ */ h("path", {
  d: "M853.161 892.55H362.595l-209.433-.414a18.5 18.5 0 0 1-1.813-.092c-24.849-2.485-47.825-14.06-64.696-32.595-16.991-18.665-26.35-42.855-26.35-68.112V264.626c0-55.808 45.404-101.211 101.212-101.211H853.16c55.808 0 101.21 45.403 101.21 101.211v225.513c0 .275-.006.552-.018.826-.022.494-1.972 51.723 15.481 85.462 4.717 9.119 1.148 20.335-7.97 25.053-9.117 4.714-20.335 1.15-25.053-7.97-21.3-41.177-19.845-97.643-19.619-103.74V264.627c0-35.307-28.724-64.031-64.03-64.031H161.515c-35.308 0-64.032 28.724-64.032 64.031v526.711c0 32.755 24.321 59.958 56.718 63.62l208.431.412h490.53c35.306 0 64.03-28.725 64.03-64.032l-.382-93.677c-.105-1.75-1.587-19.548-19.55-42.5a9.548 9.548 0 0 1-.147-.19l-21.712-28.489-117.227-155.119c-.416-.55-38.995-50.852-86.272-45.534-38.335 4.315-75.955 45.164-108.79 118.132-17.615 39.141-34.65 68.269-52.082 89.046-17.607 20.986-35.68 33.52-55.251 38.317-43.423 10.638-81.05-18.995-120.887-50.373l-5.057-3.98c-46.555-36.578-68.75-28.224-158.33 59.602-7.33 7.188-19.1 7.071-26.289-.26-7.187-7.33-7.07-19.1.26-26.287 46.659-45.746 77.544-72.727 107.086-84.283 33.358-13.048 64.275-6.267 100.242 21.994l5.093 4.008c33.923 26.72 63.22 49.795 89.029 43.467 25.618-6.279 53.3-42.114 82.28-106.509 39.14-86.976 85.838-134.027 138.797-139.849 68.454-7.515 117.824 57.405 119.892 60.172l117.122 154.98 21.6 28.344c26.277 33.631 27.334 61.639 27.367 64.725l.001.128.384 94.06c.001 55.884-45.4 101.287-101.209 101.287z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), zs = /* @__PURE__ */ h("path", {
  d: "M312.328 446.968c-42.325 0-76.759-34.434-76.759-76.76s34.434-76.759 76.76-76.759 76.759 34.435 76.759 76.76-34.434 76.759-76.76 76.759zm0-116.34c-21.824 0-39.579 17.756-39.579 39.58s17.755 39.58 39.58 39.58 39.579-17.756 39.579-39.58-17.755-39.58-39.58-39.58z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1);
function Vs(e, t, n, l, o, a) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, [
    As,
    ge(","),
    zs
  ], 6);
}
const Os = /* @__PURE__ */ ye(Ps, [["render", Vs]]);
F("issue");
F("JD");
F("jdl");
F("JIMI40");
const Hs = F("joy-smile"), Rs = /* @__PURE__ */ h("path", {
  d: "M2185.74 479.429a117.992 117.992 0 1 0-162.829-170.852c-284.772 271.204-732.314 271.204-1017.087 0A118.05 118.05 0 0 0 842.996 479.43c375.98 358.045 966.705 358.045 1342.744 0",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Fs = [
  Rs
];
function Ws(e, t, n, l, o, a) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 3072 1024",
    role: "presentation"
  }, Fs, 6);
}
const Ys = /* @__PURE__ */ ye(Hs, [["render", Ws]]), js = F("left"), Us = /* @__PURE__ */ h("path", {
  d: "M642.973 1005.542 321.912 587.098a123.278 123.278 0 0 1 0-150.17l321.06-418.443a47.182 47.182 0 0 1 74.83 57.422l-321.088 418.47a28.994 28.994 0 0 0 0 35.3l321.088 418.47a47.155 47.155 0 0 1-74.83 57.395",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ks = [
  Us
];
function Xs(e, t, n, l, o, a) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ks, 6);
}
const on = /* @__PURE__ */ ye(js, [["render", Xs]]), qs = F("link"), Zs = /* @__PURE__ */ h("path", {
  d: "M313.034 1004.045c-66.848 0-124.402-24.156-170.798-70.577l-40.854-40.829C54.96 846.218 28.966 783.097 30.83 714.411c3.702-66.85 31.56-131.808 79.819-180.12l137.4-137.373c14.86-14.861 40.855-14.861 55.69 0 14.86 14.861 16.725 38.99 0 55.69l-137.348 137.4a187.47 187.47 0 0 0-55.69 126.24c-1.864 46.422 14.835 89.115 46.396 120.675l40.855 40.855c31.56 31.56 74.253 48.286 120.674 46.421 46.421-1.838 92.843-22.291 126.24-55.69l137.4-137.4c14.862-14.86 40.856-14.86 55.69 0 14.862 14.862 14.862 40.856 0 55.69l-137.4 137.427c-48.285 48.259-113.27 76.117-180.118 79.82a5.645 5.645 0 0 0-7.405 0zm475.294-382.477c-11.133 0-18.563-3.702-27.832-12.997-14.86-14.861-14.86-40.855 0-55.69l115.082-115.108a187.47 187.47 0 0 0 55.716-126.267c1.838-46.395-14.861-89.114-46.421-120.674l-40.855-40.855c-64.985-64.959-176.364-61.257-246.915 9.294L478.266 278.108c-14.835 14.835-40.829 14.835-55.69 0-14.86-14.861-14.86-40.855 0-55.716l118.81-118.81C643.524 1.444 803.163-2.232 899.734 94.287l40.829 40.855c46.421 46.421 72.415 109.541 70.55 178.228-3.702 66.85-31.56 131.807-79.819 180.093L816.186 608.571c-7.43 7.43-18.563 11.133-27.858 12.997zm-332.327-1.864c-11.16 0-18.564-3.702-27.832-12.997-14.888-14.835-14.888-40.829 0-55.69l148.506-148.532c14.861-14.862 40.855-14.862 55.69 0 14.861 14.86 14.861 40.854 0 55.69L483.832 606.706c-7.404 7.43-18.563 11.159-27.831 12.997z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Gs = [
  Zs
];
function Js(e, t, n, l, o, a) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Gs, 6);
}
const Qs = /* @__PURE__ */ ye(qs, [["render", Js]]), xs = F("loading"), ea = /* @__PURE__ */ h("path", {
  d: "M784 902.4c9.6 19.2 6.4 41.6-12.8 54.4-19.2 9.6-41.6 3.2-51.2-12.8-9.6-19.2-6.4-41.6 12.8-54.4 16-12.8 38.4-8 51.2 12.8zM550.4 984c0 22.4-16 38.4-38.4 38.4s-38.4-16-38.4-38.4v-24c0-22.4 19.2-38.4 41.6-38.4 19.2 0 35.2 16 38.4 38.4v25.6h-3.2zm-240-43.2c-9.6 19.2-35.2 25.6-54.4 16-19.2-9.6-25.6-35.2-16-51.2l28.8-51.2c9.6-19.2 35.2-25.6 54.4-16s25.6 35.2 12.8 54.4l-25.6 48zM121.6 784c-19.2 9.6-41.6 3.2-54.4-16-9.6-19.2-6.4-41.6 12.8-54.4l76.8-44.8c19.2-9.6 41.6-3.2 54.4 16 9.6 19.2 3.2 41.6-16 54.4L121.6 784zM38.4 552C16 552 0 536 0 513.6s16-38.4 38.4-38.4H160c22.4 0 38.4 19.2 38.4 38.4 0 22.4-16 38.4-38.4 38.4H38.4zm44.8-241.6c-19.2-9.6-25.6-35.2-16-51.2 9.6-19.2 35.2-25.6 54.4-16L256 320c19.2 9.6 25.6 35.2 16 54.4s-35.2 25.6-54.4 16l-134.4-80zm160-185.6 92.8 160c9.6 19.2 35.2 25.6 54.4 12.8s25.6-35.2 12.8-54.4l-92.8-160C297.6 64 275.2 60.8 256 70.4c-16 12.8-22.4 33.6-12.8 54.4zM473.6 40c0-22.4 16-38.4 38.4-38.4s38.4 19.2 38.4 38.4v184c0 22.4-19.2 38.4-38.4 38.4-22.4 0-38.4-19.2-38.4-38.4V40zm240 43.2c9.6-19.2 35.2-25.6 54.4-16 19.2 9.6 25.6 35.2 16 51.2l-92.8 160c-9.6 19.2-35.2 25.6-54.4 16-19.2-9.6-25.6-35.2-12.8-54.4l89.6-156.8zm188.8 160-160 92.8c-19.2 9.6-25.6 35.2-16 54.4 12.8 19.2 35.2 25.6 54.4 12.8l160-92.8c19.2-9.6 25.6-35.2 12.8-54.4-9.6-16-32-25.6-51.2-12.8zM985.6 472c22.4 0 38.4 16 38.4 38.4s-16 38.4-38.4 38.4H800c-22.4 0-38.4-19.2-38.4-38.4 0-22.4 19.2-38.4 38.4-38.4h185.6z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ta = [
  ea
];
function na(e, t, n, l, o, a) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ta, 6);
}
const rt = /* @__PURE__ */ ye(xs, [["render", na]]), oa = F("loading1"), la = /* @__PURE__ */ h("path", {
  d: "M520.665 64.564a29.244 29.244 0 0 0-7.071-.894c-16.211 0-29.35 13.14-29.35 29.35 0 15.83 12.538 28.696 28.223 29.293v.073c.375 0 .751-.014 1.127-.014 216.493 0 389.629 173.942 389.629 390.433 0 216.496-173.136 388.827-389.63 388.827s-389.63-172.333-389.63-388.829c0-.27.01-.536.01-.804h-.01c0-16.209-13.141-29.35-29.35-29.35s-29.35 13.139-29.35 29.35c0 .055.007.11.007.164-.001.214-.007.425-.007.64 0 247.609 200.722 448.331 448.33 448.331 247.607 0 448.33-200.722 448.33-448.33-.002-245.242-196.917-444.456-441.258-448.24z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), sa = [
  la
];
function aa(e, t, n, l, o, a) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, sa, 6);
}
const ra = /* @__PURE__ */ ye(oa, [["render", aa]]), ia = F("location"), ua = /* @__PURE__ */ h("path", {
  d: "M512 971.487C259.938 971.487 52.513 764.062 52.513 512S259.938 52.513 512 52.513 971.487 259.938 971.487 512 764.062 971.487 512 971.487zm0-840.205c-210.051 0-380.718 170.667-380.718 380.718S301.95 892.718 512 892.718 892.718 722.05 892.718 512 722.05 131.282 512 131.282zm0 577.641c-107.651 0-196.923-89.272-196.923-196.923S404.349 315.077 512 315.077 708.923 404.349 708.923 512 619.651 708.923 512 708.923zm0-315.077c-65.641 0-118.154 52.513-118.154 118.154S446.36 630.154 512 630.154 630.154 577.64 630.154 512 577.64 393.846 512 393.846zm0-210.051c-21.005 0-39.385-18.38-39.385-39.385V39.385C472.615 18.379 490.995 0 512 0s39.385 18.38 39.385 39.385V144.41c0 21.005-18.38 39.385-39.385 39.385zM512 1024c-21.005 0-39.385-18.38-39.385-39.385V879.59c0-21.005 18.38-39.385 39.385-39.385s39.385 18.38 39.385 39.385v105.025c0 21.006-18.38 39.385-39.385 39.385zm472.615-472.615H879.59c-21.005 0-39.385-18.38-39.385-39.385s18.38-39.385 39.385-39.385h105.025c21.006 0 39.385 18.38 39.385 39.385s-18.38 39.385-39.385 39.385zm-840.205 0H39.385C18.379 551.385 0 533.005 0 512s18.38-39.385 39.385-39.385H144.41c21.005 0 39.385 18.38 39.385 39.385s-18.38 39.385-39.385 39.385z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ca = [
  ua
];
function da(e, t, n, l, o, a) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ca, 6);
}
const fa = /* @__PURE__ */ ye(ia, [["render", da]]), pa = F("location2"), ma = /* @__PURE__ */ h("path", {
  d: "m530.286 1005.714-25.6-10.971c-36.572-14.629-58.515-25.6-73.143-36.572-102.4-84.114-164.572-135.314-193.829-171.885-43.885-51.2-76.8-91.429-106.057-142.629C95.086 577.83 76.8 504.686 76.8 431.543c0-117.029 43.886-226.743 128-307.2C285.257 43.886 394.971 0 512 0s226.743 43.886 310.857 128c84.114 80.457 128 190.171 128 307.2 0 73.143-18.286 146.286-54.857 212.114-25.6 43.886-58.514 91.429-106.057 142.629-29.257 32.914-87.772 84.114-197.486 171.886 0 0-7.314 7.314-18.286 10.971l-43.885 32.914zM497.37 874.057s3.658 3.657 14.629 7.314c3.657-3.657 7.314-3.657 10.971-7.314C621.714 797.257 683.886 742.4 705.83 716.8c40.228-47.543 69.485-87.771 91.428-128 25.6-47.543 40.229-102.4 40.229-157.257 0-87.772-32.915-168.229-95.086-230.4-58.514-58.514-142.629-91.429-230.4-91.429S340.114 142.63 277.943 204.8c-62.172 62.171-95.086 142.629-95.086 230.4 0 54.857 14.629 109.714 40.229 157.257 25.6 43.886 54.857 80.457 95.085 124.343 25.6 29.257 84.115 80.457 179.2 157.257zm18.286-248.686c-102.4 0-182.857-80.457-182.857-182.857s80.457-182.857 182.857-182.857 182.857 80.457 182.857 182.857-80.457 182.857-182.857 182.857zm0-256c-40.228 0-73.143 32.915-73.143 73.143s32.915 73.143 73.143 73.143 73.143-32.914 73.143-73.143-32.914-73.143-73.143-73.143z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ha = [
  ma
];
function ga(e, t, n, l, o, a) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ha, 6);
}
const ya = /* @__PURE__ */ ye(pa, [["render", ga]]);
F("locationg3");
F("lower");
F("marshalling");
const va = F("mask-close"), $a = /* @__PURE__ */ h("path", {
  d: "M512 14.897C238.594 14.897 14.897 238.594 14.897 512S238.594 1009.103 512 1009.103 1009.103 785.406 1009.103 512 785.406 14.897 512 14.897zm207.126 646.234c16.57 16.57 16.57 41.425 0 57.995s-41.425 16.57-57.995 0L512 569.996l-149.13 149.13c-16.57 16.57-41.426 16.57-57.996 0s-16.57-41.425 0-57.995L454.004 512l-149.13-149.13c-16.57-16.57-16.57-41.426 0-57.996s41.425-16.57 57.995 0L512 454.004l149.13-149.13c16.57-16.57 41.426-16.57 57.996 0s16.57 41.425 0 57.995L569.996 512l149.13 149.13z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ba = [
  $a
];
function wa(e, t, n, l, o, a) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ba, 6);
}
const ka = /* @__PURE__ */ ye(va, [["render", wa]]);
F("message");
F("microphone");
const Ca = F("minus"), Sa = /* @__PURE__ */ h("path", {
  d: "M299.52 460.8h409.6c28.16 0 51.2 23.04 51.2 51.2s-23.04 51.2-51.2 51.2h-409.6c-28.16 0-51.2-23.04-51.2-51.2s23.04-51.2 51.2-51.2z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ta = [
  Sa
];
function Na(e, t, n, l, o, a) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ta, 6);
}
const Da = /* @__PURE__ */ ye(Ca, [["render", Na]]);
F("more-s");
const _a = F("more-x"), Ia = /* @__PURE__ */ h("path", {
  d: "M937.115 428.218c-43.442 0-80.679 37.237-80.679 80.679s37.237 80.679 80.68 80.679c43.442 0 80.678-37.237 80.678-80.679s-34.133-80.679-80.679-80.679m-428.218-52.751c-74.473 0-133.43 58.957-133.43 133.43s58.957 133.43 133.43 133.43 133.43-58.957 133.43-133.43-58.957-133.43-133.43-133.43M83.782 428.218c-43.443 0-80.679 37.237-80.679 80.679s34.133 80.679 80.679 80.679 80.679-37.237 80.679-80.679-37.237-80.679-80.68-80.679",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ba = [
  Ia
];
function Ma(e, t, n, l, o, a) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ba, 6);
}
const La = /* @__PURE__ */ ye(_a, [["render", Ma]]);
F("more");
F("my");
F("my2");
const Ea = F("notice"), Pa = /* @__PURE__ */ h("path", {
  d: "M940.873 819.2h-85.334V430.933c0-192-153.6-345.6-341.333-345.6s-341.333 153.6-341.333 345.6V819.2H87.539V430.933C87.54 192 279.54 0 514.206 0s426.667 192 426.667 430.933V819.2zM514.633 1024c-68.267 0-132.267-29.867-174.934-85.333-17.066-17.067-12.8-42.667 4.267-59.734 17.067-12.8 46.933-12.8 59.733 8.534 29.867 34.133 68.267 51.2 110.934 51.2s81.066-17.067 106.666-51.2c12.8-17.067 42.667-21.334 59.734-8.534 17.066 12.8 21.333 42.667 8.533 59.734C646.899 994.133 582.899 1024 514.633 1024zm469.333-162.133h-12.8c-294.4-89.6-618.667-89.6-913.067 0-21.333 4.266-46.933-8.534-55.466-29.867-8.534-21.333 4.266-46.933 29.866-51.2 311.467-93.867 652.8-89.6 964.267 0 21.333 8.533 34.133 29.867 29.867 51.2-8.534 21.333-25.6 29.867-42.667 29.867z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Aa = [
  Pa
];
function za(e, t, n, l, o, a) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1027 1024",
    role: "presentation"
  }, Aa, 6);
}
const Va = /* @__PURE__ */ ye(Ea, [["render", za]]);
F("order");
F("people");
const Oa = F("photograph"), Ha = /* @__PURE__ */ h("path", {
  d: "M570.514 789.943c-119.954 0-219.428-99.474-219.428-219.429s99.474-219.428 219.428-219.428 219.429 99.474 219.429 219.428-99.474 219.429-219.429 219.429zm0-351.086c-73.143 0-131.657 58.514-131.657 131.657s58.514 131.657 131.657 131.657 131.657-58.514 131.657-131.657-58.514-131.657-131.657-131.657zM877.714 1024h-614.4C117.03 1024 0 906.971 0 760.686V380.343c0-146.286 117.029-263.314 263.314-263.314h32.183c0-2.926 2.926-8.778 2.926-11.703C315.977 43.886 374.49 0 438.857 0h263.314c70.218 0 128.732 49.737 143.36 117.029h32.183c146.286 0 263.315 117.028 263.315 263.314v380.343C1141.029 906.97 1024 1024 877.714 1024zm-614.4-819.2c-96.548 0-175.543 78.994-175.543 175.543v380.343c0 96.548 78.995 175.543 175.543 175.543h614.4c96.549 0 175.543-78.995 175.543-175.543V380.343c0-96.549-78.994-175.543-175.543-175.543H819.2c-32.183 0-58.514-26.331-58.514-58.514S734.354 87.77 702.17 87.77H438.857c-26.331 0-49.737 17.555-55.588 40.96-2.926 5.852-2.926 11.703-2.926 17.555 0 32.183-26.332 58.514-58.514 58.514h-58.515zm-87.771 160.914a73.143 73.143 0 1 0 146.286 0 73.143 73.143 0 1 0-146.286 0Z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ra = [
  Ha
];
function Fa(e, t, n, l, o, a) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1141 1024",
    role: "presentation"
  }, Ra, 6);
}
const Wa = /* @__PURE__ */ ye(Oa, [["render", Fa]]);
F("play-circle-fill");
F("play-double-back");
F("play-double-forward");
F("play-start");
F("play-stop");
const Ya = F("plus"), ja = /* @__PURE__ */ h("path", {
  d: "M345.6 460.8h409.6q51.2 0 51.2 51.2t-51.2 51.2H345.6q-51.2 0-51.2-51.2t51.2-51.2zM550.4 256q51.2 0 51.2 51.2v409.6q0 51.2-51.2 51.2t-51.2-51.2V307.2q0-51.2 51.2-51.2z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ua = [
  ja
];
function Ka(e, t, n, l, o, a) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ua, 6);
}
const Xa = /* @__PURE__ */ ye(Ya, [["render", Ka]]);
F("poweroff-circle-fill");
const qa = F("rect-down"), Za = /* @__PURE__ */ h("path", {
  d: "M515.072 778.24c-14.336 0-28.672-5.632-39.936-16.384L69.12 356.864c-22.016-22.016-22.016-57.856 0-79.872s57.856-22.016 79.872 0L515.584 642.56 880.64 275.968c22.016-22.016 57.856-22.016 79.872 0s22.016 57.856 0 79.872L555.008 762.368c-10.752 10.752-25.6 15.872-39.936 15.872z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ga = [
  Za
];
function Ja(e, t, n, l, o, a) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ga, 6);
}
const Qa = /* @__PURE__ */ ye(qa, [["render", Ja]]);
F("rect-left");
F("rect-right");
const xa = F("rect-up"), er = /* @__PURE__ */ h("path", {
  d: "M920.576 778.24c-14.336 0-28.672-5.632-39.936-16.384L515.072 395.264 148.48 760.832c-22.016 22.016-57.856 22.016-79.872 0s-22.016-57.856 0-79.872l406.528-405.504c22.016-22.016 57.856-22.016 79.872 0l405.504 406.528c22.016 22.016 22.016 57.856 0 79.872-11.264 11.264-25.6 16.384-39.936 16.384z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), tr = [
  er
];
function nr(e, t, n, l, o, a) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, tr, 6);
}
const or = /* @__PURE__ */ ye(xa, [["render", nr]]);
F("refresh");
const lr = F("refresh2"), sr = /* @__PURE__ */ h("path", {
  d: "M771.938 315.077h199.55L958.358 469.99 758.81 364.964c-13.128-7.877-18.38-23.63-10.502-36.759 2.625-7.877 13.128-13.128 23.63-13.128zm-535.63 393.846H44.636L57.764 554.01l191.672 105.026c13.128 7.877 18.38 23.63 10.502 36.759-5.25 7.877-15.753 13.128-23.63 13.128zM509.374 1024C257.313 1024 44.636 845.456 5.251 596.02 0 575.016 15.754 556.637 36.76 551.386c21.005-2.626 42.01 10.502 44.636 31.507 34.133 210.052 215.302 362.339 427.98 362.339 191.671 0 362.338-128.657 417.476-312.452 5.252-21.005 28.882-34.133 49.887-26.256 21.006 5.251 34.134 28.882 26.257 49.887C937.354 871.713 735.179 1024 509.375 1024zm467.364-551.385c-18.379 0-36.759-13.128-39.384-34.133C903.22 231.056 722.05 78.77 509.374 78.77c-191.671 0-362.338 128.657-414.85 312.452-5.252 21.005-28.883 34.133-49.888 26.256-21.005-5.251-34.133-28.882-26.257-49.887C81.395 152.287 283.57 0 509.374 0c252.062 0 464.739 178.544 504.123 427.98 2.626 21.005-10.502 42.01-31.507 44.635h-5.252z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ar = [
  sr
];
function rr(e, t, n, l, o, a) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ar, 6);
}
const ir = /* @__PURE__ */ ye(lr, [["render", rr]]), ur = F("retweet"), cr = /* @__PURE__ */ h("path", {
  d: "M136 552h63.6c4.4 0 8-3.6 8-8V288.7h528.6v72.6c0 1.9.6 3.7 1.8 5.2 2.9 3.6 8.1 4.3 11.7 1.4L893 255.4c4.3-5 3.6-10.3 0-13.2L749.7 129.8c-1.5-1.2-3.3-1.8-5.2-1.8-4.6 0-8.4 3.8-8.4 8.4V209H199.7c-39.5 0-71.7 32.2-71.7 71.8V544c0 4.4 3.6 8 8 8zm752-80h-63.6c-4.4 0-8 3.6-8 8v255.3H287.8v-72.6c0-1.9-.6-3.7-1.8-5.2-2.9-3.6-8.1-4.3-11.7-1.4L131 768.6c-4.3 5-3.6 10.3 0 13.2l143.3 112.4c1.5 1.2 3.3 1.8 5.2 1.8 4.6 0 8.4-3.8 8.4-8.4V815h536.6c39.5 0 71.7-32.2 71.7-71.8V480c-.2-4.4-3.8-8-8.2-8z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), dr = [
  cr
];
function fr(e, t, n, l, o, a) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, dr, 6);
}
const pr = /* @__PURE__ */ ye(ur, [["render", fr]]), mr = F("right"), hr = /* @__PURE__ */ h("path", {
  d: "M381.262 1005.566c-16.132 21.51-45.708 24.198-67.217 8.066-21.51-16.132-24.198-45.708-8.066-67.217C413.526 806.604 518.384 666.792 625.932 529.67c8.066-10.755 8.066-24.198 0-34.953C518.384 354.906 413.526 215.094 305.979 77.972c-16.132-21.51-10.755-51.085 8.066-67.217C335.555-5.377 365.13 0 381.262 18.82c107.547 142.5 212.405 282.311 319.953 419.434 34.952 43.019 34.952 104.858 0 150.566-107.548 139.811-212.406 279.622-319.953 416.745",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), gr = [
  hr
];
function yr(e, t, n, l, o, a) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, gr, 6);
}
const ln = /* @__PURE__ */ ye(mr, [["render", yr]]);
F("s-follow");
F("scan");
F("scan2");
F("screen-little");
F("search");
F("search2");
const vr = F("service"), $r = /* @__PURE__ */ h("path", {
  d: "M1024 657.723H905.846v-126.03c0-228.431-177.23-413.54-393.846-413.54s-393.846 185.109-393.846 413.54v126.03H0v-126.03C0 236.307 228.43 0 512 0s512 236.308 512 531.692v126.031zM196.923 866.462C86.646 866.462 0 779.815 0 669.538s86.646-196.923 196.923-196.923 196.923 86.647 196.923 196.923S307.2 866.462 196.923 866.462zm0-275.693c-43.323 0-78.77 35.446-78.77 78.77s35.447 78.769 78.77 78.769 78.77-35.446 78.77-78.77-35.447-78.769-78.77-78.769zm630.154 275.693c-110.277 0-196.923-86.647-196.923-196.924S716.8 472.615 827.077 472.615 1024 559.262 1024 669.538s-86.646 196.924-196.923 196.924zm0-275.693c-43.323 0-78.77 35.446-78.77 78.77s35.447 78.769 78.77 78.769 78.77-35.446 78.77-78.77-35.447-78.769-78.77-78.769zm-149.662 429.293c-23.63 0-47.261-15.754-55.138-43.324-7.877-31.507 7.877-63.015 39.385-74.83 102.4-31.508 189.046-102.4 236.307-196.923 15.754-27.57 51.2-39.385 78.77-23.631s39.384 51.2 23.63 78.77c-63.015 122.091-177.23 216.614-307.2 256-3.938 3.938-11.815 3.938-15.754 3.938z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), br = [
  $r
];
function wr(e, t, n, l, o, a) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, br, 6);
}
const kr = /* @__PURE__ */ ye(vr, [["render", wr]]);
F("setting");
F("share-n");
F("share");
F("share1");
F("shop");
F("shop3");
const Cr = F("star-fill-n"), Sr = /* @__PURE__ */ h("path", {
  d: "M1047.135 361.244 722.87 312.89 577.802 22.756c-2.844-8.534-11.378-14.223-19.911-17.067-19.911-8.533-45.511-2.845-54.045 17.067L358.78 312.889 34.513 358.4c-8.533 0-17.067 5.689-22.755 11.378-17.067 17.066-14.223 42.666 0 56.889l233.244 227.555-54.044 321.422c-2.845 8.534 0 17.067 2.844 25.6 11.378 19.912 34.133 28.445 54.044 17.067L537.98 867.556l290.133 150.755c8.533 2.845 17.067 5.689 25.6 2.845 22.756-2.845 36.978-25.6 34.133-45.512l-54.044-321.422 233.244-227.555c5.69-5.69 11.378-14.223 11.378-22.756 5.69-19.911-8.533-39.822-31.289-42.667z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Tr = [
  Sr
];
function Nr(e, t, n, l, o, a) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1081 1024",
    role: "presentation"
  }, Tr, 6);
}
const Dr = /* @__PURE__ */ ye(Cr, [["render", Nr]]);
F("star-fill");
F("star-fill1");
F("star-fill2");
F("star-n");
F("star");
F("star1");
F("star11");
F("star2");
const _r = F("success"), Ir = /* @__PURE__ */ h("path", {
  d: "M762.311 391.396C655.36 466.489 566.613 552.96 491.52 659.91c-20.48 27.307-61.44 27.307-79.644-2.275-34.134-52.338-72.818-91.023-125.156-125.156-25.031-15.929-9.102-54.613 20.48-50.062 56.889 11.378 100.124 34.133 143.36 72.818 77.369-93.298 175.218-166.116 286.72-213.903 27.307-9.102 50.062 31.858 25.031 50.063M512 1024C229.831 1024 0 794.169 0 512S229.831 0 512 0s512 229.831 512 512-229.831 512-512 512zm0-955.733C266.24 68.267 68.267 266.24 68.267 512S266.24 955.733 512 955.733 955.733 757.76 955.733 512 757.76 68.267 512 68.267z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Br = [
  Ir
];
function Mr(e, t, n, l, o, a) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Br, 6);
}
const Lr = /* @__PURE__ */ ye(_r, [["render", Mr]]), Er = F("tips"), Pr = /* @__PURE__ */ h("path", {
  d: "M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512zm0-938.667c-234.667 0-426.667 192-426.667 426.667s192 426.667 426.667 426.667 426.667-192 426.667-426.667S746.667 85.333 512 85.333zM448 320a64 64 0 1 0 128 0 64 64 0 1 0-128 0Zm-17.067 149.333h51.2c12.8 0 21.334 8.534 21.334 21.334v8.533c0 12.8-8.534 21.333-21.334 21.333h-51.2c-12.8 0-25.6-12.8-25.6-25.6s12.8-25.6 25.6-25.6zm51.2 0H524.8c25.6 0 51.2 21.334 51.2 51.2v8.534L537.6 755.2c0 8.533-8.533 17.067-21.333 17.067H473.6c-25.6 0-51.2-21.334-51.2-51.2v-8.534L460.8 486.4c4.267-8.533 12.8-17.067 21.333-17.067zm8.534 251.734h76.8c12.8 0 25.6 12.8 25.6 25.6s-12.8 25.6-25.6 25.6h-76.8c-12.8 0-21.334-8.534-21.334-21.334v-12.8c4.267-12.8 12.8-17.066 21.334-17.066z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ar = [
  Pr
];
function zr(e, t, n, l, o, a) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ar, 6);
}
const eo = /* @__PURE__ */ ye(Er, [["render", zr]]), Vr = F("top"), Or = /* @__PURE__ */ h("path", {
  d: "M136.533 540.444c-11.377 0-25.6-5.688-34.133-17.066-14.222-19.911-11.378-45.511 8.533-59.734L477.867 179.2c19.91-14.222 45.51-11.378 59.733 8.533s11.378 45.511-8.533 59.734L162.133 531.91c-5.689 5.689-14.222 8.533-25.6 8.533zm745.245 0c-8.534 0-17.067-2.844-25.6-8.533L489.244 247.467c-19.91-14.223-22.755-42.667-8.533-59.734 14.222-19.91 42.667-22.755 59.733-8.533l366.934 284.444c19.91 14.223 22.755 42.667 8.533 59.734-8.533 11.378-19.911 17.066-34.133 17.066zM512 1024c-22.756 0-42.667-19.911-42.667-42.667v-768c0-22.755 19.911-42.666 42.667-42.666s42.667 19.91 42.667 42.666v768c0 22.756-19.911 42.667-42.667 42.667zM884.622 85.333h-742.4c-22.755 0-42.666-19.91-42.666-42.666S119.466 0 142.222 0h742.4c22.756 0 42.667 19.911 42.667 42.667s-19.911 42.666-42.667 42.666z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Hr = [
  Or
];
function Rr(e, t, n, l, o, a) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Hr, 6);
}
const Fr = /* @__PURE__ */ ye(Vr, [["render", Rr]]), Wr = F("triangle-down"), Yr = /* @__PURE__ */ h("path", {
  d: "m573.056 752 308.8-404.608A76.8 76.8 0 0 0 820.736 224H203.232a76.8 76.8 0 0 0-61.056 123.392L450.976 752a76.8 76.8 0 0 0 122.08 0z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), jr = [
  Yr
];
function Ur(e, t, n, l, o, a) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, jr, 6);
}
const Kr = /* @__PURE__ */ ye(Wr, [["render", Ur]]), Xr = F("triangle-up"), qr = /* @__PURE__ */ h("path", {
  d: "m573.056 272 308.8 404.608A76.8 76.8 0 0 1 820.736 800H203.232a76.8 76.8 0 0 1-61.056-123.392L450.976 272a76.8 76.8 0 0 1 122.08 0z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Zr = [
  qr
];
function Gr(e, t, n, l, o, a) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Zr, 6);
}
const Jr = /* @__PURE__ */ ye(Xr, [["render", Gr]]);
F("uploader");
F("voice");
const Qr = { class: "nut-button__wrap" }, qe = /* @__PURE__ */ Le({
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
    }, a = D(() => {
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
    }), s = D(() => {
      let r = {};
      return n.color && (r = {
        color: n.plain ? n.color : "#fff",
        background: n.plain ? "#fff" : `border-box ${n.color}`
      }, n.color.includes("gradient") ? r.borderColor = "transparent" : r.borderColor = n.color), r;
    });
    return (r, i) => (c(), f("view", {
      class: L(a.value),
      style: A(s.value),
      onClick: o
    }, [
      h("view", Qr, [
        r.loading ? (c(), ee(ke(rt), {
          key: 0,
          class: "nut-icon-loading"
        })) : N("", !0),
        r.$slots.icon && !r.loading ? I(r.$slots, "icon", { key: 1 }) : N("", !0),
        r.$slots.default ? (c(), f("view", {
          key: 2,
          class: L({ "nut-button__text": r.$slots.icon || r.loading })
        }, [
          I(r.$slots, "default")
        ], 2)) : N("", !0)
      ])
    ], 6));
  }
}), Xt = (e) => {
  const t = ce([]), n = ce([]);
  return {
    children: t,
    linkChildren: (o) => {
      Pe(e, q({
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
}, sn = (e) => {
  const t = Ee(e, null);
  if (t) {
    const n = je(), { link: l, unlink: o } = t;
    l(n), Xe(() => {
      o(n);
    });
  }
  return { parent: t };
}, Ae = (e) => {
  const t = e;
  return t.install = (n) => {
    t.name && n.component(t.name, t);
  }, t;
};
Ae(qe);
const xr = (e) => e.replace(/-./g, (t) => t[1].toUpperCase());
function U(e) {
  return {
    componentName: "nut-" + e,
    create: function(n) {
      return n.name = "Nut" + xr("-" + e), n.install = (l) => {
        l.component(n.name, n);
      }, Le(n);
    }
  };
}
const lt = (e, t) => e ? be(e, t) : "", an = (e, t) => {
  let n = document.body;
  const l = e.teleport || "body";
  l != "body" && (al(l) ? n = document.querySelector(l) : n = e.teleport);
  const o = document.createElement("view"), a = t.name ? t.name + "-" : "", s = e.id || (/* @__PURE__ */ new Date()).getTime();
  o.id = a + s;
  let r = {};
  Pt(t.wrapper) ? r = t.wrapper(n, o) : r = t.wrapper;
  const i = Go(r, e), p = t.components;
  return p && p.forEach((d) => {
    i.use(d);
  }), n.appendChild(o), {
    instance: i.mount(o),
    unmount: () => {
      i.unmount(), n.removeChild(o);
    }
  };
};
function rn() {
  return je().proxy.$router || null;
}
const _e = (e) => {
  if (e !== void 0)
    return isNaN(Number(e)) ? String(e) : `${e}px`;
}, { componentName: ei, create: ti } = U("cell"), ni = ti({
  components: { Right: ln },
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
    const n = D(() => {
      const r = ei;
      return {
        [r]: !0,
        [`${r}--clickable`]: e.isLink || e.to,
        [`${r}--center`]: e.center,
        [`${r}--large`]: e.size === "large"
      };
    }), l = rn(), o = D(() => ({
      borderRadius: _e(e.roundRadius)
    })), a = D(() => ({
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
}), Z = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, o] of t)
    n[l] = o;
  return n;
}, oi = {
  key: 0,
  class: "nut-cell__icon"
}, li = {
  key: 1,
  class: "nut-cell__title"
}, si = { class: "title" }, ai = { class: "nut-cell__title-desc" };
function ri(e, t, n, l, o, a) {
  const s = W("Right");
  return c(), f("view", {
    class: L(e.classes),
    style: A(e.baseStyle),
    onClick: t[0] || (t[0] = (...r) => e.handleClick && e.handleClick(...r))
  }, [
    I(e.$slots, "default", {}, () => [
      e.$slots.icon ? (c(), f("view", oi, [
        I(e.$slots, "icon")
      ])) : N("", !0),
      e.title || e.subTitle || e.$slots.title ? (c(), f("view", li, [
        e.subTitle ? (c(), f(x, { key: 0 }, [
          I(e.$slots, "title", {}, () => [
            h("view", si, E(e.title), 1)
          ]),
          h("view", ai, E(e.subTitle), 1)
        ], 64)) : I(e.$slots, "title", { key: 1 }, () => [
          ge(E(e.title), 1)
        ])
      ])) : N("", !0),
      e.desc || e.$slots.desc ? (c(), f("view", {
        key: 2,
        class: L(["nut-cell__value", { "nut-cell__value--alone": !e.title && !e.subTitle && !e.$slots.title }]),
        style: A(e.descStyle)
      }, [
        I(e.$slots, "desc", {}, () => [
          ge(E(e.desc), 1)
        ])
      ], 6)) : N("", !0),
      I(e.$slots, "link", {}, () => [
        e.isLink || e.to ? (c(), ee(s, {
          key: 0,
          class: "nut-cell__link"
        })) : N("", !0)
      ])
    ])
  ], 6);
}
const to = /* @__PURE__ */ Z(ni, [["render", ri]]), { create: ii } = U("cell-group"), ui = ii({
  props: {
    title: { type: String, default: "" },
    desc: { type: String, default: "" }
  }
}), ci = { class: "nut-cell-group" }, di = {
  key: 1,
  class: "nut-cell-group__title"
}, fi = {
  key: 3,
  class: "nut-cell-group__desc"
}, pi = { class: "nut-cell-group__wrap" };
function mi(e, t, n, l, o, a) {
  return c(), f("view", ci, [
    e.$slots.title ? I(e.$slots, "title", { key: 0 }) : e.title ? (c(), f("view", di, E(e.title), 1)) : N("", !0),
    e.$slots.desc ? I(e.$slots, "desc", { key: 2 }) : e.desc ? (c(), f("view", fi, E(e.desc), 1)) : N("", !0),
    h("view", pi, [
      I(e.$slots, "default")
    ])
  ]);
}
const no = /* @__PURE__ */ Z(ui, [["render", mi]]);
let mt = 0;
const Tn = "nut-overflow-hidden", hi = (e) => [() => {
  if (e())
    try {
      !mt && Cn.classList.add(Tn), mt++;
    } catch (l) {
      console.warn("[NutUI] <useLockScroll>", l);
    }
}, () => {
  if (e() && mt)
    try {
      mt--, !mt && Cn.classList.remove(Tn);
    } catch (l) {
      console.warn("[NutUI] <unlock>", l);
    }
}], { componentName: gi, create: yi } = U("overlay"), vi = yi({
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
    const [n, l] = hi(() => e.lockScroll), o = D(() => ({
      [gi]: !0,
      [e.overlayClass]: !0
    })), a = D(() => q({
      transitionDuration: `${e.duration}s`,
      zIndex: e.zIndex
    }, e.overlayStyle));
    return bt(() => {
      e.visible ? n() : l();
    }), { classes: o, style: a, onClick: (r) => {
      t("click", r), e.closeOnClickOverlay && t("update:visible", !1);
    } };
  }
});
function $i(e, t, n, l, o, a) {
  return c(), ee(Qt, { name: "overlay-fade" }, {
    default: ne(() => [
      Se(h("view", {
        class: L(e.classes),
        style: A(e.style),
        onClick: t[0] || (t[0] = De((...s) => e.onClick && e.onClick(...s), ["stop"]))
      }, [
        I(e.$slots, "default")
      ], 6), [
        [Ie, e.visible]
      ])
    ]),
    _: 3
  });
}
const Tt = /* @__PURE__ */ Z(vi, [["render", $i]]), Nt = {
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
}, { componentName: bi, create: wi } = U("popup"), oo = 2e3;
let Nn = oo;
const ki = wi({
  components: {
    NutOverlay: Tt,
    Close: At
  },
  props: Nt,
  emits: ["clickPop", "clickCloseIcon", "open", "close", "opened", "closed", "clickOverlay", "update:visible"],
  setup(e, { emit: t }) {
    let n;
    const l = ce({
      zIndex: e.zIndex,
      showSlot: !0,
      closed: e.closeable
    }), o = D(() => ({
      [bi]: !0,
      round: e.round,
      [`nut-popup--${e.position}`]: !0,
      [`nut-popup--${e.position}--safebottom`]: e.position === "bottom" && e.safeAreaInsetBottom,
      [e.popClass]: !0
    })), a = D(() => q({
      zIndex: l.zIndex,
      transitionDuration: `${e.duration}s`
    }, e.style)), s = D(() => e.transition ? e.transition : `nut-popup-slide-${e.position}`), r = () => {
      n || (n = !0, e.zIndex !== oo && (Nn = Number(e.zIndex)), t("update:visible", !0), l.zIndex = ++Nn, e.destroyOnClose && (l.showSlot = !0), t("open"));
    }, i = () => {
      n && (n = !1, t("update:visible", !1), t("close"), e.destroyOnClose && setTimeout(() => {
        l.showSlot = !1;
      }, +e.duration * 1e3));
    }, p = ($) => {
      t("clickPop", $);
    }, d = ($) => {
      $.stopPropagation(), t("clickCloseIcon", $), i();
    }, v = ($) => {
      t("clickOverlay", $), e.closeOnClickOverlay && i();
    }, y = ($) => {
      t("opened", $);
    }, b = ($) => {
      t("closed", $);
    };
    return Q(
      () => e.visible,
      () => {
        e.visible && !n && r(), !e.visible && n && i();
      }
    ), bt(() => {
      l.closed = e.closeable;
    }), de(q({}, he(l)), {
      popStyle: a,
      transitionName: s,
      classes: o,
      onClick: p,
      onClickCloseIcon: d,
      onClickOverlay: v,
      onOpened: y,
      onClosed: b
    });
  }
});
function Ci(e, t, n, l, o, a) {
  const s = W("nut-overlay"), r = W("Close");
  return c(), ee(Rn, {
    to: e.teleport,
    disabled: !e.teleportDisable
  }, [
    e.overlay ? (c(), ee(s, wt({
      key: 0,
      visible: e.visible,
      "close-on-click-overlay": e.closeOnClickOverlay,
      "z-index": e.zIndex,
      "lock-scroll": e.lockScroll,
      duration: e.duration,
      "overlay-class": e.overlayClass,
      "overlay-style": e.overlayStyle
    }, e.$attrs, { onClick: e.onClickOverlay }), null, 16, ["visible", "close-on-click-overlay", "z-index", "lock-scroll", "duration", "overlay-class", "overlay-style", "onClick"])) : N("", !0),
    oe(Qt, {
      name: e.transitionName,
      onAfterEnter: e.onOpened,
      onAfterLeave: e.onClosed
    }, {
      default: ne(() => [
        Se(h("view", {
          class: L(e.classes),
          style: A(e.popStyle),
          onClick: t[1] || (t[1] = (...i) => e.onClick && e.onClick(...i))
        }, [
          e.showSlot ? I(e.$slots, "default", { key: 0 }) : N("", !0),
          e.closed ? (c(), f("view", {
            key: 1,
            class: L(["nut-popup__close-icon", "nut-popup__close-icon--" + e.closeIconPosition]),
            onClick: t[0] || (t[0] = (...i) => e.onClickCloseIcon && e.onClickCloseIcon(...i))
          }, [
            I(e.$slots, "close-icon", {}, () => [
              oe(r, { height: "12px" })
            ])
          ], 2)) : N("", !0)
        ], 6), [
          [Ie, e.visible]
        ])
      ]),
      _: 3
    }, 8, ["name", "onAfterEnter", "onAfterLeave"])
  ], 8, ["to", "disabled"]);
}
const ze = /* @__PURE__ */ Z(ki, [["render", Ci]]), Si = (e) => ({
  props: {
    theme: { type: String, default: "" },
    themeVars: { type: Object, default: {} },
    tag: { type: String, default: e }
  },
  setup(t, { slots: n }) {
    const l = (r) => {
      if (!/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(r))
        return "";
      r = r.toLowerCase(), r.length === 4 && (r = "#" + r.slice(1).split("").map((d) => d + d).join(""));
      const p = [];
      for (let d = 1; d < 7; d += 2)
        p.push(parseInt("0x" + r.slice(d, d + 2)));
      return p.join(",");
    }, o = (r) => (r = r.replace(r.charAt(0), r.charAt(0).toLocaleLowerCase()), r.replace(/([a-z])([A-Z])/g, (i, p, d) => p + "-" + d.toLowerCase())), a = (r) => {
      if (!r)
        return;
      const i = {}, p = r == null ? void 0 : r.primaryColor;
      if (p) {
        const d = l(p);
        i["--nut-address-region-tab-line"] = `linear-gradient(90deg, ${p} 0%, rgba(${d}, 0.15) 100%)`, i["--nut-tabs-horizontal-tab-line-color"] = `linear-gradient(90deg, ${p} 0%, rgba(${d}, 0.15) 100%)`, i["--nut-tabs-vertical-tab-line-color"] = `linear-gradient(180deg, ${p} 0%, rgba(${d}, 0.15) 100%)`;
      }
      return Object.keys(r).forEach((d) => {
        i[`--nut-${o(d)}`] = r[d];
      }), i;
    }, s = D(() => a(t.themeVars));
    return () => {
      var r;
      return be(
        t.tag,
        {
          class: `nut-theme-${t.theme}`,
          style: s.value
        },
        (r = n.default) == null ? void 0 : r.call(n)
      );
    };
  }
}), { create: Ti } = U("config-provider"), Ni = Ti(Si("div")), { componentName: Di, create: _i } = U("image"), Ii = _i({
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
    Image: Os,
    ImageError: Es
  },
  emits: ["click", "load", "error"],
  setup(e, { emit: t }) {
    const n = ce({
      loading: !0,
      isError: !1,
      slotLoding: at().loading,
      slotError: at().error
    }), l = D(() => {
      const b = Di;
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
    ve(() => {
      e.lazyLoad && r();
    }), xt(() => {
      o.value && o.value.disconnect();
    });
    const i = D(() => {
      let b = {};
      return e.width && (b.width = _e(e.width)), e.height && (b.height = _e(e.height)), e.radius !== void 0 && e.radius !== null && (b.overflow = "hidden", b.borderRadius = _e(e.radius)), b;
    }), p = D(() => ({
      objectFit: e.fit,
      objectPosition: e.position
    }));
    Q(
      () => e.src,
      () => {
        n.isError = !1, n.loading = !0;
      }
    );
    const d = () => {
      n.isError = !1, n.loading = !1, t("load");
    }, v = () => {
      n.isError = !0, n.loading = !1, t("error");
    }, y = (b) => {
      t("click", b);
    };
    return de(q({}, he(n)), { imageClick: y, classes: l, styles: p, stylebox: i, error: v, load: d, show: a, imgRef: s });
  }
}), Bi = ["src", "date-src", "alt"], Mi = {
  key: 0,
  class: "nut-img-loading"
}, Li = {
  key: 1,
  class: "nut-img-error"
};
function Ei(e, t, n, l, o, a) {
  const s = W("Image"), r = W("ImageError");
  return c(), f("div", {
    class: L(e.classes),
    style: A(e.stylebox),
    onClick: t[2] || (t[2] = (...i) => e.imageClick && e.imageClick(...i))
  }, [
    h("img", {
      ref: "imgRef",
      class: "nut-img",
      src: e.lazyLoad ? e.show ? e.src : void 0 : e.src,
      "date-src": e.lazyLoad ? e.show ? void 0 : e.src : void 0,
      alt: e.alt,
      style: A(e.styles),
      onLoad: t[0] || (t[0] = (...i) => e.load && e.load(...i)),
      onError: t[1] || (t[1] = (...i) => e.error && e.error(...i))
    }, null, 44, Bi),
    e.loading ? (c(), f("div", Mi, [
      e.slotLoding ? N("", !0) : (c(), ee(s, {
        key: 0,
        width: "16px",
        height: "20px",
        name: "image"
      })),
      I(e.$slots, "loading")
    ])) : N("", !0),
    e.isError && !e.loading ? (c(), f("div", Li, [
      e.slotError ? N("", !0) : (c(), ee(r, {
        key: 0,
        width: "16px",
        height: "20px",
        name: "imageError"
      })),
      I(e.$slots, "error")
    ])) : N("", !0)
  ], 6);
}
const Pi = /* @__PURE__ */ Z(Ii, [["render", Ei]]), { create: Ai } = U("layout"), lo = Ai({});
Ae(lo);
const so = Symbol("nut-layout"), Dn = "nut-col", ao = /* @__PURE__ */ Le({
  name: "NutCol",
  __name: "col",
  props: {
    span: { default: 24 },
    offset: { default: 0 }
  },
  setup(e) {
    const t = e, n = Ee(so), l = D(() => ({
      [Dn]: !0,
      [Dn + "-gutter"]: n,
      ["nut-col-" + t.span]: !0,
      ["nut-col-offset-" + t.offset]: !0
    })), o = D(() => ({
      paddingLeft: n / 2 + "px",
      paddingRight: n / 2 + "px"
    }));
    return (a, s) => (c(), f("view", {
      class: L(l.value),
      style: A(o.value)
    }, [
      I(a.$slots, "default")
    ], 6));
  }
});
Ae(ao);
const zi = "nut-row", ro = /* @__PURE__ */ Le({
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
    Pe(so, t.gutter);
    const n = (o, a) => o ? a ? `nut-row-${o}-${a}` : "" : `nut-row-${a}`, l = D(() => [
      zi,
      n("", t.type),
      n("justify", t.justify),
      n("align", t.align),
      n("flex", t.flexWrap)
    ]);
    return (o, a) => (c(), f("view", {
      class: L(l.value)
    }, [
      I(o.$slots, "default")
    ], 2));
  }
});
Ae(ro);
const Vi = /scroll|auto|overlay/i, io = window;
function Oi(e) {
  return e.tagName !== "HTML" && e.tagName !== "BODY" && e.nodeType === 1;
}
function qt(e, t = io) {
  let n = e;
  for (; n && n !== t && Oi(n); ) {
    const { overflowY: l } = window.getComputedStyle(n);
    if (Vi.test(l))
      return n;
    n = n.parentNode;
  }
  return t;
}
function uo(e, t = io) {
  const n = z();
  return ve(() => {
    e.value && (n.value = qt(e.value, t));
  }), n;
}
function Hi(e) {
  return typeof window != "undefined" && e === window;
}
const Ye = (e) => {
  const t = ke(e);
  if (Hi(t)) {
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
}, { create: Ri } = U("sticky"), Fi = Ri({
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
    const n = z(), l = z(), o = ce({
      fixed: !1,
      height: 0,
      width: 0,
      transform: 0
    }), a = D(() => e.position === "top" ? Number(e.top) : Number(e.bottom)), s = D(() => o.fixed ? { height: `${o.height}px` } : {}), r = D(() => o.fixed ? {
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
      const d = Ye(n), v = l.value, y = Ye(v), b = Ye(p);
      o.height = d.height, o.width = d.width;
      const $ = () => {
        let u = !1;
        if (e.position === "top")
          u = p ? a.value > d.top && b.bottom > 0 : a.value > d.top;
        else {
          const g = document.documentElement.clientHeight;
          u = p ? b.bottom > 0 && g - a.value - y.height > b.top : g - a.value < d.bottom;
        }
        return u;
      }, k = () => {
        if (p)
          if (e.position === "top") {
            const u = b.bottom - a.value - y.height;
            return u < 0 ? u : 0;
          } else {
            const u = document.documentElement.clientHeight, g = b.bottom - (u - a.value);
            return g < 0 ? g : 0;
          }
        return 0;
      };
      o.transform = k(), o.fixed = $();
    };
    return Q(
      () => o.fixed,
      (p) => {
        t("change", p);
      }
    ), ve(() => {
      i(), qt(n.value).addEventListener("scroll", i, !0);
    }), Xe(() => {
      qt(n.value).removeEventListener("scroll", i);
    }), { rootRef: n, rootStyle: s, stickyRef: l, stickyStyle: r };
  }
});
function Wi(e, t, n, l, o, a) {
  return c(), f("div", {
    ref: "rootRef",
    class: "nut-sticky",
    style: A(e.rootStyle)
  }, [
    h("div", {
      ref: "stickyRef",
      class: "nut-sticky__box",
      style: A(e.stickyStyle)
    }, [
      I(e.$slots, "default")
    ], 4)
  ], 4);
}
const co = /* @__PURE__ */ Z(Fi, [["render", Wi]]), fo = /* @__PURE__ */ Le({
  name: "NutDivider",
  __name: "divider",
  props: {
    contentPosition: { default: "center" },
    dashed: { type: Boolean, default: !1 },
    hairline: { type: Boolean, default: !0 },
    direction: { default: "horizontal" }
  },
  setup(e) {
    const t = e, n = at(), l = D(() => {
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
    return (o, a) => (c(), f("view", {
      class: L(l.value)
    }, [
      o.direction === "horizontal" ? I(o.$slots, "default", { key: 0 }) : N("", !0)
    ], 2));
  }
});
Ae(fo);
function Yi(e, t) {
  const n = [], l = (o) => {
    Array.isArray(o) && o.forEach((a) => {
      var s;
      if (Qo(a)) {
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
function ji(e, t, n) {
  const l = Yi(e.subTree.children, n);
  t.sort((o, a) => l.indexOf(o.vnode) - l.indexOf(a.vnode));
}
function Ui(e, t) {
  const n = Jo([]), l = je(), o = (r) => {
    r.proxy && (n.push(wn(r)), ji(l, n, t));
  }, a = (r) => {
    n.splice(n.indexOf(wn(r)), 1);
  }, s = Object.assign;
  return (r) => (Pe(
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
const { componentName: Ki } = U("grid"), po = Symbol("grid"), Xi = {
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
}, qi = {
  props: Xi,
  setup(e, { slots: t }) {
    Ui(po, "NutGridItem")({ props: e });
    const n = D(() => {
      const o = Ki;
      return {
        [o]: !0,
        [`${o}--border`]: e.border && !e.gutter
      };
    }), l = D(() => {
      const o = {};
      return e.gutter && (o.paddingLeft = _e(e.gutter)), o;
    });
    return () => {
      var o;
      return be(
        "view",
        {
          class: n.value,
          style: l.value
        },
        (o = t.default) == null ? void 0 : o.call(t)
      );
    };
  }
}, { create: Zi } = U("grid"), Gi = Zi(qi);
function Ji(e) {
  const t = Ee(e, null);
  if (t) {
    const n = je(), { add: l, remove: o, internalChildren: a } = t;
    l(n), Xe(() => o(n));
    const s = D(() => a.indexOf(n));
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
const { create: Qi, componentName: _n } = U("grid-item"), xi = Qi({
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
    const n = Ji(po);
    if (!n.parent)
      return {};
    const l = n.index, o = n.parent.props, a = D(() => ({
      [_n]: !0
    })), s = D(() => {
      const d = {
        flexBasis: `${100 / +o.columnNum}%`
      };
      return o.square ? d.paddingTop = `${100 / +o.columnNum}%` : o.gutter && (d.paddingRight = _e(o.gutter), l.value >= +o.columnNum && (d.marginTop = _e(o.gutter))), d;
    }), r = D(() => {
      const d = `${_n}__content`;
      return {
        [`${d}`]: !0,
        [`${d}--border`]: o.border,
        [`${d}--surround`]: o.border && o.gutter,
        [`${d}--center`]: o.center,
        [`${d}--square`]: o.square,
        [`${d}--reverse`]: o.reverse,
        [`${d}--${o.direction}`]: !!o.direction,
        [`${d}--clickable`]: o.clickable || e.to || e.url
      };
    }), i = rn();
    return {
      rootClass: a,
      rootStyle: s,
      contentClass: r,
      handleClick: (d) => {
        t("click", d), e.to && i ? i[e.replace ? "replace" : "push"](e.to) : e.url && (e.replace ? location.replace(e.url) : location.href = e.url);
      }
    };
  }
}), eu = { class: "nut-grid-item__text" };
function tu(e, t, n, l, o, a) {
  return c(), f("view", {
    class: L(e.rootClass),
    style: A(e.rootStyle),
    onClick: t[0] || (t[0] = (...s) => e.handleClick && e.handleClick(...s))
  }, [
    h("view", {
      class: L(e.contentClass)
    }, [
      I(e.$slots, "default"),
      h("view", eu, [
        e.text ? (c(), f(x, { key: 0 }, [
          ge(E(e.text), 1)
        ], 64)) : I(e.$slots, "text", { key: 1 })
      ])
    ], 2)
  ], 6);
}
const nu = /* @__PURE__ */ Z(xi, [["render", tu]]), { create: ou, componentName: st } = U("space"), lu = ou({
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
    const n = (d) => typeof d == "number" ? d + "px" : d, l = (d) => {
      const v = {};
      if (!e.gutter)
        return v;
      const y = `${n(Array.isArray(e.gutter) ? e.gutter[0] : e.gutter)}`, b = `${n(Array.isArray(e.gutter) ? e.gutter[1] : e.gutter)}`;
      return d ? e.wrap ? { marginBottom: b } : {} : (e.direction === "horizontal" && (v.marginRight = y), (e.direction === "vertical" || e.wrap) && (v.marginBottom = b), v);
    }, o = (d = []) => {
      const v = [];
      return d.forEach((y) => {
        Array.isArray(y) ? v.push(...y) : y.type === x ? v.push(...o(y.children)) : v.push(y);
      }), v.filter(
        (y) => {
          var b;
          return !(y && (y.type === xo || y.type === x && ((b = y.children) == null ? void 0 : b.length) === 0 || y.type === el && y.children.trim() === ""));
        }
      );
    }, { direction: a, wrap: s, fill: r, justify: i, align: p } = e;
    return () => {
      var y;
      const d = o((y = t.default) == null ? void 0 : y.call(t)), v = () => d.map((b, $) => be(
        "div",
        {
          class: `${st}-item`,
          style: l($ === d.length - 1)
        },
        b
      ));
      return be(
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
        v()
      );
    };
  }
}), { componentName: su, create: au } = U("navbar"), ru = au({
  components: { Left: on },
  props: {
    leftShow: { type: Boolean, default: !1 },
    //左侧  是否显示返回icon
    title: { type: String, default: "" },
    //中间  文字标题
    titleIcon: { type: Boolean, default: !1 },
    //中间
    leftText: { type: String, default: "" },
    //左侧文字
    desc: { type: String, default: "" },
    //右侧   按钮文字
    fixed: {
      type: Boolean,
      default: !1
    },
    safeAreaInsetTop: {
      type: Boolean,
      default: !1
    },
    border: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      // 生成一个等高的占位元素
      type: Boolean,
      default: !0
    },
    zIndex: {
      type: [Number, String],
      default: 10
    }
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
    const { border: n, fixed: l, safeAreaInsetTop: o, placeholder: a } = he(e), s = z("auto"), r = z(), i = D(() => {
      const k = su;
      return {
        [k]: !0,
        [`${k}--border`]: n.value,
        [`${k}--fixed`]: l.value,
        [`${k}--safe-area-inset-top`]: o.value
      };
    }), p = D(() => l.value && a.value ? {
      height: s.value
    } : {}), d = () => {
      if (r.value) {
        const k = r.value.getBoundingClientRect();
        s.value = `${k.height}px`;
      }
    };
    return ve(() => {
      l.value && a.value && Te(() => {
        d();
      });
    }), {
      navbarRef: r,
      rootStyle: p,
      classes: i,
      navHeight: s,
      handleLeft: () => {
        t("clickBack"), t("onClickBack");
      },
      handleCenter: () => {
        t("clickTitle"), t("onClickTitle");
      },
      handleCenterIcon: () => {
        t("clickIcon"), t("onClickIcon");
      },
      handleRight: () => {
        t("clickRight"), t("onClickRight");
      }
    };
  }
}), iu = {
  key: 1,
  class: "nut-navbar__text"
}, uu = { class: "nut-navbar__title" }, cu = {
  key: 0,
  class: "nut-navbar__text"
};
function du(e, t, n, l, o, a) {
  const s = W("Left");
  return c(), f("view", {
    class: "nut-navbar--placeholder",
    style: A(e.rootStyle)
  }, [
    h("view", {
      ref: "navbarRef",
      class: L(e.classes),
      style: A({ zIndex: e.zIndex })
    }, [
      h("view", {
        class: "nut-navbar__left",
        onClick: t[0] || (t[0] = (...r) => e.handleLeft && e.handleLeft(...r))
      }, [
        e.leftShow ? I(e.$slots, "left-show", { key: 0 }, () => [
          oe(s, {
            height: "12px",
            color: "#979797"
          })
        ]) : N("", !0),
        e.leftText ? (c(), f("view", iu, E(e.leftText), 1)) : N("", !0),
        I(e.$slots, "left")
      ]),
      h("view", uu, [
        e.title ? (c(), f("view", {
          key: 0,
          class: "title",
          onClick: t[1] || (t[1] = (...r) => e.handleCenter && e.handleCenter(...r))
        }, E(e.title), 1)) : N("", !0),
        e.titleIcon ? (c(), f("view", {
          key: 1,
          class: "icon",
          onClick: t[3] || (t[3] = (...r) => e.handleCenterIcon && e.handleCenterIcon(...r))
        }, [
          I(e.$slots, "title-icon", {
            onClick: t[2] || (t[2] = (...r) => e.handleCenterIcon && e.handleCenterIcon(...r))
          })
        ])) : N("", !0),
        I(e.$slots, "content")
      ]),
      h("view", {
        class: "nut-navbar__right",
        onClick: t[4] || (t[4] = (...r) => e.handleRight && e.handleRight(...r))
      }, [
        e.desc ? (c(), f("view", cu, E(e.desc), 1)) : N("", !0),
        I(e.$slots, "right")
      ])
    ], 6)
  ], 4);
}
const fu = /* @__PURE__ */ Z(ru, [["render", du]]), Ce = (e = "") => (t, ...n) => {
  e = e.toLocaleLowerCase();
  const l = qn.languages();
  let o = t;
  e && e.startsWith("nut") && (o = `${e.slice(3)}.${t}`);
  const a = Ut(l, o) || Ut(l, t);
  return Pt(a) ? a(...n) : a;
}, { create: pu } = U("fixed-nav"), mu = "NutFixedNav", hu = pu({
  components: {
    NutOverlay: Tt,
    Left: on
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
    const n = Ce(mu), l = D(() => ({
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
}), gu = { class: "nut-fixed-nav__list" }, yu = ["onClick"], vu = ["src"], $u = { class: "span" }, bu = {
  key: 0,
  class: "b"
}, wu = { class: "text" };
function ku(e, t, n, l, o, a) {
  const s = W("nut-overlay"), r = W("Left");
  return c(), f("view", {
    class: L(e.classes),
    style: A(e.position)
  }, [
    e.overlay ? (c(), ee(s, {
      key: 0,
      visible: e.visible,
      "z-index": 200,
      onClick: t[0] || (t[0] = (i) => e.updateValue(!1))
    }, null, 8, ["visible"])) : N("", !0),
    I(e.$slots, "list", {}, () => [
      h("view", gu, [
        (c(!0), f(x, null, ie(e.navList, (i, p) => (c(), f("view", {
          key: i.id || p,
          class: L(["nut-fixed-nav__list-item", { active: i.id == e.current }]),
          onClick: (d) => e.selected(i, d)
        }, [
          h("img", {
            src: i.icon
          }, null, 8, vu),
          h("view", $u, E(i.text), 1),
          i.num ? (c(), f("view", bu, E(i.num), 1)) : N("", !0)
        ], 10, yu))), 128))
      ])
    ]),
    h("div", {
      class: "nut-fixed-nav__btn",
      onClick: t[1] || (t[1] = (i) => e.updateValue())
    }, [
      I(e.$slots, "btn", {}, () => [
        oe(r, { color: "#fff" }),
        h("view", wu, E(e.visible ? e.activeText || e.translate("activeText") : e.unActiveText || e.translate("unActiveText")), 1)
      ])
    ])
  ], 6);
}
const Cu = /* @__PURE__ */ Z(hu, [["render", ku]]), mo = Symbol("nut-menu"), { componentName: Su, create: Tu } = U("menu"), Nu = Tu({
  components: {
    RectUp: or,
    RectDown: Qa
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
    const t = z(), n = z(0), l = z(!1), { children: o, linkChildren: a } = Xt(mo), s = D(() => o.some((b) => b.state.showWrapper)), r = D(() => ({
      [Su]: !0,
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
    }, d = (b) => Math.max(0, "scrollTop" in b ? b.scrollTop : b.pageYOffset), v = () => {
      const { scrollFixed: b } = e, $ = d(window);
      l.value = $ > (typeof b == "boolean" ? 30 : Number(b));
    }, y = (b) => {
      let $ = "";
      const { titleClass: k } = e;
      return b && ($ += "active"), k && ($ += ` ${k}`), $;
    };
    return ve(() => {
      const { scrollFixed: b } = e;
      b && window.addEventListener("scroll", v);
    }), Xe(() => {
      const { scrollFixed: b } = e;
      b && window.removeEventListener("scroll", v);
    }), {
      toggleItem: p,
      children: o,
      opened: s,
      classes: r,
      barRef: t,
      getClasses: y
    };
  }
}), Du = ["onClick"], _u = { class: "nut-menu__title-text" }, Iu = { class: "nut-menu__title-icon" };
function Bu(e, t, n, l, o, a) {
  const s = W("RectUp"), r = W("RectDown");
  return c(), f("view", {
    class: L(e.classes)
  }, [
    h("view", {
      ref: "barRef",
      class: L(["nut-menu__bar", { opened: e.opened }])
    }, [
      (c(!0), f(x, null, ie(e.children, (i, p) => (c(), f("view", {
        key: p,
        class: L(["nut-menu__item", { disabled: i.disabled, active: i.state.showPopup }]),
        style: A({ color: i.state.showPopup ? e.activeColor : "" }),
        onClick: (d) => !i.disabled && e.toggleItem(p)
      }, [
        h("view", {
          class: L(["nut-menu__title", e.getClasses(i.state.showPopup)])
        }, [
          h("view", _u, E(i.renderTitle()), 1),
          h("span", Iu, [
            I(e.$slots, "icon", {}, () => [
              e.direction === "up" ? (c(), ee(s, { key: 0 })) : (c(), ee(r, { key: 1 }))
            ])
          ])
        ], 2)
      ], 14, Du))), 128))
    ], 2),
    I(e.$slots, "default")
  ], 2);
}
const Mu = /* @__PURE__ */ Z(Nu, [["render", Bu]]), { create: Lu } = U("menu-item"), Eu = Lu({
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
    NutPopup: ze,
    Check: Zn
  },
  emits: ["update:modelValue", "change", "open", "close"],
  setup(e, { emit: t }) {
    const n = ce({
      showPopup: !1,
      showWrapper: !1
    }), { parent: l } = sn(mo), o = D(() => l.props.direction === "down" ? {
      top: l.offset.value + "px"
    } : {
      bottom: l.offset.value + "px"
    }), a = D(() => {
      const v = { height: l.offset.value + "px" };
      return l.props.direction === "down" ? de(q({}, v), { top: "0px" }) : de(q({}, v), { bottom: "0px" });
    });
    return {
      style: o,
      placeholderElementStyle: a,
      renderTitle: () => {
        var y;
        if (e.title)
          return e.title;
        const v = (y = e.options) == null ? void 0 : y.find((b) => b.value === e.modelValue);
        return v ? v.text : "";
      },
      state: n,
      parent: l,
      toggle: (v = !n.showPopup) => {
        v !== n.showPopup && (n.showPopup = v, v && (n.showWrapper = !0, t("open")));
      },
      onClick: (v) => {
        n.showPopup = !1, v.value !== e.modelValue && (t("update:modelValue", v.value), t("change", v.value));
      },
      handleClose: () => {
        t("close"), n.showWrapper = !1;
      },
      handleClickOutside: () => {
        n.showPopup = !1, t("close");
      }
    };
  }
}), Pu = { class: "nut-menu-item__content nut-menu-item__overflow" }, Au = ["onClick"];
function zu(e, t, n, l, o, a) {
  const s = W("Check"), r = W("nut-popup");
  return Se((c(), f("view", {
    class: "nut-menu-item",
    style: A(e.style)
  }, [
    Se(h("div", {
      class: "nut-menu-item-placeholder-element",
      style: A(e.placeholderElementStyle),
      onClick: t[0] || (t[0] = (...i) => e.handleClickOutside && e.handleClickOutside(...i))
    }, null, 4), [
      [Ie, e.state.showPopup]
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
        h("view", Pu, [
          (c(!0), f(x, null, ie(e.options, (i, p) => (c(), f("view", {
            key: p,
            class: L(["nut-menu-item__option", [{ active: i.value === e.modelValue }]]),
            style: A({ "flex-basis": 100 / e.cols + "%" }),
            onClick: (d) => e.onClick(i)
          }, [
            i.value === e.modelValue ? (c(), f("span", {
              key: 0,
              class: L(["nut-menu-item__span", [i.value === e.modelValue ? e.activeTitleClass : e.inactiveTitleClass]])
            }, [
              I(e.$slots, "icon", {}, () => [
                oe(s, wt(e.$attrs, {
                  color: e.parent.props.activeColor
                }), null, 16, ["color"])
              ])
            ], 2)) : N("", !0),
            h("view", {
              class: L([i.value === e.modelValue ? e.activeTitleClass : e.inactiveTitleClass]),
              style: A({ color: i.value === e.modelValue ? e.parent.props.activeColor : "" })
            }, E(i.text), 7)
          ], 14, Au))), 128)),
          I(e.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["visible", "position", "duration", "overlay", "lock-scroll", "close-on-click-overlay", "onClosed"])
  ], 4)), [
    [Ie, e.state.showWrapper]
  ]);
}
const Vu = /* @__PURE__ */ Z(Eu, [["render", zu]]), ho = Symbol("nut-tabbar"), { create: Ou } = U("tabbar"), Hu = Ou({
  props: {
    modelValue: {
      type: [Number, String],
      default: 0
    },
    bottom: {
      type: Boolean,
      default: !1
    },
    type: {
      type: String,
      default: "base"
    },
    unactiveColor: {
      type: String,
      default: ""
    },
    activeColor: {
      type: String,
      default: ""
    },
    safeAreaInsetBottom: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["tabSwitch", "update:modelValue"],
  setup(e, { emit: t }) {
    const { bottom: n, placeholder: l } = he(e), o = z(), a = ce({
      val: e.modelValue,
      children: []
    }), s = z(null);
    function r(p, d) {
      t("update:modelValue", d), i.modelValue = d, t("tabSwitch", i.children[p], d);
    }
    const i = ce({
      children: a.children,
      modelValue: a.val,
      unactiveColor: e.unactiveColor,
      activeColor: e.activeColor,
      changeIndex: r
    });
    return Pe(ho, i), Q(
      () => e.modelValue,
      (p) => {
        i.modelValue = p;
      }
    ), ve(() => {
      n.value && l.value && Te(() => {
        var p;
        o.value = (p = s == null ? void 0 : s.value) == null ? void 0 : p.getBoundingClientRect().height;
      });
    }), {
      changeIndex: r,
      nutTabbar: s,
      height: o
    };
  }
});
function Ru(e, t, n, l, o, a) {
  return c(), f("div", {
    class: L({ "nut-tabbar__placeholder": e.bottom && e.placeholder }),
    style: A({ height: e.height + "px" })
  }, [
    h("view", {
      ref: "nutTabbar",
      class: L(["nut-tabbar", { "nut-tabbar-bottom": e.bottom, "nut-tabbar-safebottom": e.safeAreaInsetBottom }])
    }, [
      I(e.$slots, "default")
    ], 2)
  ], 6);
}
const Fu = /* @__PURE__ */ Z(Hu, [["render", Ru]]), { create: Wu } = U("badge"), Yu = Wu({
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
    const t = ce({}), n = D(() => ({
      top: `${e.top}px`,
      right: `${e.right}px`,
      zIndex: e.zIndex,
      background: e.color
    })), l = D(() => {
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
}), ju = { class: "nut-badge" }, Uu = ["textContent"];
function Ku(e, t, n, l, o, a) {
  return c(), f("view", ju, [
    Se(h("view", {
      class: "nut-badge__icon",
      style: A(e.stl)
    }, [
      I(e.$slots, "icon")
    ], 4), [
      [Ie, !e.hidden && !e.dot && e.$slots.icon]
    ]),
    I(e.$slots, "default"),
    Se(h("view", {
      class: L(["nut-badge__content nut-badge__content--sup", { "nut-badge__content--dot": e.dot, "nut-badge__content--bubble": !e.dot && e.bubble }]),
      style: A(e.stl),
      textContent: E(e.content)
    }, null, 14, Uu), [
      [Ie, !e.hidden && (e.content || e.dot)]
    ])
  ]);
}
const go = /* @__PURE__ */ Z(Yu, [["render", Ku]]), { create: Xu } = U("tabbar-item"), qu = Xu({
  components: { NutBadge: go },
  props: {
    tabTitle: {
      // 标签页的标题
      type: String,
      default: ""
    },
    name: {
      type: String
    },
    icon: {
      // 标签页显示的icon
      type: Object
    },
    href: {
      // 标签页的跳转链接
      type: String,
      default: ""
    },
    to: [Object, String]
  },
  setup(e, { slots: t }) {
    const n = (p) => t[p], l = Ee(ho), o = ce({
      unactiveColor: l.unactiveColor,
      // 未选中的颜色
      activeColor: l.activeColor,
      // 选中的颜色
      index: 0
    }), a = rn();
    ((p) => {
      var d;
      if (p.proxy) {
        l.children.push(p.proxy);
        const v = l.children.indexOf(p.proxy);
        o.index = (d = e.name) != null ? d : v;
      }
    })(je());
    const r = D(() => o.index === l.modelValue);
    function i() {
      var y, b, $;
      let p = (y = e.name) != null ? y : o.index, d = null;
      e.name && (d = l.children.findIndex((k) => k.name == p)), l.changeIndex(d != null ? d : p, o.index);
      let v = d != null ? d : p;
      if ((b = l.children[v]) != null && b.href) {
        window.location.href = l.children[v].href;
        return;
      }
      if (($ = l.children[v]) != null && $.to) {
        let k = l.children[v].to;
        k && a ? a.push(k) : location.replace(k);
      }
    }
    return {
      state: o,
      active: r,
      renderIcon: lt,
      isHaveSlot: n,
      change: i
    };
  }
}), Zu = { class: "nut-tabbar-item_icon-box" }, Gu = {
  key: 0,
  class: "nut-tabbar-item_icon-box_icon"
}, Ju = { key: 1 }, Qu = { key: 0 };
function xu(e, t, n, l, o, a) {
  const s = W("nut-badge");
  return c(), f("div", {
    class: L(["nut-tabbar-item", { "nut-tabbar-item__icon--unactive": !e.active }]),
    style: A({
      color: e.active ? e.state.activeColor : e.state.unactiveColor
    }),
    onClick: t[0] || (t[0] = (r) => e.change())
  }, [
    oe(s, tl(nl(e.$attrs)), {
      default: ne(() => [
        h("view", Zu, [
          e.isHaveSlot("icon") ? (c(), f("div", Gu, [
            I(e.$slots, "icon", { active: e.active })
          ])) : N("", !0),
          e.icon && !e.isHaveSlot("icon") ? (c(), f("view", Ju, [
            (c(), ee(Oe(e.renderIcon(e.icon)), { class: "nut-popover-item-img" }))
          ])) : N("", !0),
          h("view", {
            class: L([
              "nut-tabbar-item_icon-box_nav-word",
              { "nut-tabbar-item_icon-box_big-word": !e.icon && !e.isHaveSlot("icon") }
            ])
          }, [
            I(e.$slots, "default", {}, () => [
              e.tabTitle ? (c(), f("view", Qu, E(e.tabTitle), 1)) : N("", !0)
            ])
          ], 2)
        ])
      ]),
      _: 3
    }, 16)
  ], 6);
}
const ec = /* @__PURE__ */ Z(qu, [["render", xu]]), { create: tc } = U("elevator"), nc = tc({
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
    const l = z(null), o = ce({
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
    }), a = D(() => l.value.clientHeight), s = (u, g) => u.getAttribute("data-" + g), r = (u) => {
      Te(() => {
        !o.listGroup.includes(u) && u != null && o.listGroup.push(u);
      });
    }, i = () => {
      let u = 0;
      o.listHeight.push(u);
      for (let g = 0; g < o.listGroup.length; g++) {
        let m = o.listGroup[g];
        u += Math.floor(m.clientHeight), o.listHeight.push(u);
      }
    }, p = (u) => {
      !u && u !== 0 || (u < 0 && (u = 0), u > o.listHeight.length - 2 && (u = o.listHeight.length - 2), o.codeIndex = u, l.value.scrollTo(0, o.listHeight[u]));
    }, d = (u) => {
      o.scrollStart = !0;
      let g = s(u.target, "index"), m = u.touches[0];
      o.touchState.y1 = m.pageY, o.anchorIndex = +g, o.codeIndex = +g, p(+g);
    }, v = (u) => {
      let g = u.touches[0];
      o.touchState.y2 = g.pageY;
      let m = (o.touchState.y2 - o.touchState.y1) / e.spaceHeight | 0;
      o.codeIndex = o.anchorIndex + m, p(o.codeIndex);
    }, y = () => {
      o.scrollStart = !1;
    }, b = (u, g) => {
      t("clickItem", u, g), o.currentData = g, o.currentKey = u;
    }, $ = (u) => {
      t("clickIndex", u);
    }, k = (u) => {
      let m = u.target.scrollTop;
      const w = o.listHeight;
      o.scrollY = m;
      for (let S = 0; S < w.length - 1; S++) {
        let _ = w[S], B = w[S + 1];
        if (o.scrollY >= _ && o.scrollY < B) {
          o.currentIndex = S, o.diff = B - o.scrollY;
          return;
        }
      }
      o.currentIndex = w.length - 2;
    };
    return ve(() => {
      l.value && l.value.addEventListener("scroll", k);
    }), n({
      scrollTo: p
    }), Q(
      () => o.listGroup.length,
      () => {
        o.listHeight = [], Te(i);
      }
    ), Q(
      () => o.diff,
      (u) => {
        const g = o.listHeight;
        let m = u > 0 && u < e.titleHeight ? u - e.titleHeight : 0;
        o.scrollY + a.value === g[g.length - 1] && m !== 0 && (m = 0), o.fixedTop !== m && (o.fixedTop = m);
      }
    ), Q(
      () => o.currentIndex,
      (u) => {
        t("change", u);
      }
    ), de(q({}, he(o)), {
      clientHeight: a,
      setListGroup: r,
      listview: l,
      touchStart: d,
      touchMove: v,
      touchEnd: y,
      handleClickItem: b,
      handleClickIndex: $
    });
  }
}), oc = { class: "nut-elevator" }, lc = { class: "nut-elevator__list__item__code" }, sc = ["onClick"], ac = ["innerHTML"], rc = { class: "nut-elevator__list__fixed" }, ic = { class: "nut-elevator__list__fixed-title" }, uc = { class: "nut-elevator__bars__inner" }, cc = ["data-index", "onClick"];
function dc(e, t, n, l, o, a) {
  var s, r;
  return c(), f("view", oc, [
    h("view", {
      ref: "listview",
      class: "nut-elevator__list",
      style: A({ height: isNaN(+e.height) ? e.height : `${e.height}px` })
    }, [
      (c(!0), f(x, null, ie(e.indexList, (i) => (c(), f("view", {
        key: i[e.acceptKey],
        ref_for: !0,
        ref: e.setListGroup,
        class: "nut-elevator__list__item"
      }, [
        h("view", lc, E(i[e.acceptKey]), 1),
        (c(!0), f(x, null, ie(i.list, (p) => (c(), f("view", {
          key: p.id,
          class: L(["nut-elevator__list__item__name", {
            "nut-elevator__list__item__name--highcolor": e.currentData.id === p.id && e.currentKey === i[e.acceptKey]
          }]),
          onClick: (d) => e.handleClickItem(i[e.acceptKey], p)
        }, [
          e.$slots.default ? I(e.$slots, "default", {
            key: 1,
            item: p
          }) : (c(), f("span", {
            key: 0,
            innerHTML: p.name
          }, null, 8, ac))
        ], 10, sc))), 128))
      ]))), 128))
    ], 4),
    Se(h("view", rc, [
      h("view", ic, E((r = (s = e.indexList) == null ? void 0 : s[e.currentIndex]) == null ? void 0 : r[e.acceptKey]), 1)
    ], 512), [
      [Ie, e.scrollY > 0 && e.isSticky]
    ]),
    e.indexList.length ? Se((c(), f("view", {
      key: 0,
      class: "nut-elevator__code--current"
    }, E(e.indexList[e.codeIndex][e.acceptKey]), 513)), [
      [Ie, e.scrollStart]
    ]) : N("", !0),
    h("view", {
      class: "nut-elevator__bars",
      onTouchstart: t[0] || (t[0] = (...i) => e.touchStart && e.touchStart(...i)),
      onTouchmove: t[1] || (t[1] = De((...i) => e.touchMove && e.touchMove(...i), ["stop", "prevent"])),
      onTouchend: t[2] || (t[2] = (...i) => e.touchEnd && e.touchEnd(...i))
    }, [
      h("view", uc, [
        (c(!0), f(x, null, ie(e.indexList, (i, p) => (c(), f("view", {
          key: i[e.acceptKey],
          class: L(["nut-elevator__bars__inner__item", { active: i[e.acceptKey] === e.indexList[e.currentIndex][e.acceptKey] }]),
          "data-index": p,
          onClick: (d) => e.handleClickIndex(i[e.acceptKey])
        }, E(i[e.acceptKey]), 11, cc))), 128))
      ])
    ], 32)
  ]);
}
const yo = /* @__PURE__ */ Z(nc, [["render", dc]]), { create: fc } = U("pagination"), pc = "NutPagination", mc = fc({
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
    const n = Ce(pc), { modelValue: l, mode: o, showPageSize: a, forceEllipses: s } = he(e), r = D(() => {
      const { pageCount: v, totalItems: y, itemsPerPage: b } = he(e), $ = +v.value || Math.ceil(+y.value / +b.value);
      return Math.max(1, $);
    }), i = (v, y) => {
      v > r.value || v < 1 || (v != l.value && t("update:modelValue", v), y && t("change", v));
    }, p = (v, y, b = !1) => ({ number: v, text: y, active: b }), d = D(() => {
      if (o.value == "simple")
        return;
      let v = [];
      const y = r.value, b = +a.value;
      let $ = 1, k = y;
      const u = y > b;
      u && ($ = Math.max(l.value - Math.floor(b / 2), 1), k = $ + +b - 1, k > y && (k = y, $ = k - +b + 1));
      for (var g = $; g <= k; g++) {
        const m = p(g, g, l.value == g);
        v.push(m);
      }
      if (u && b > 0 && s.value) {
        if ($ > 1) {
          const m = p($ - 1, "...");
          v.unshift(m);
        }
        if (k < y) {
          const m = p(k + 1, "...");
          v.push(m);
        }
      }
      return v;
    });
    return bt(() => {
      i(l.value, !1);
    }), {
      modelValue: l,
      select: i,
      countRef: r,
      mode: o,
      pages: d,
      forceEllipses: s,
      translate: n
    };
  }
}), hc = { class: "nut-pagination" }, gc = {
  key: 0,
  class: "nut-pagination-contain"
}, yc = ["onClick"], vc = {
  key: 1,
  class: "nut-pagination-contain"
}, $c = { class: "nut-pagination-simple" };
function bc(e, t, n, l, o, a) {
  return c(), f("view", hc, [
    h("view", {
      class: L(["nut-pagination-prev", e.mode == "multi" ? "" : "simple-border", e.modelValue == 1 ? "disabled" : ""]),
      onClick: t[0] || (t[0] = (s) => e.select(e.modelValue - 1, !0))
    }, [
      I(e.$slots, "prev-text", {}, () => [
        ge(E(e.prevText || e.translate("prev")), 1)
      ])
    ], 2),
    e.mode == "multi" ? (c(), f("view", gc, [
      (c(!0), f(x, null, ie(e.pages, (s, r) => (c(), f("view", {
        key: r + "pagination",
        class: L(["nut-pagination-item", s.active ? "active" : ""]),
        onClick: (i) => e.select(s.number, !0)
      }, [
        I(e.$slots, "page", { item: s }, () => [
          ge(E(s.text), 1)
        ])
      ], 10, yc))), 128))
    ])) : N("", !0),
    e.mode == "simple" ? (c(), f("view", vc, [
      h("view", $c, E(e.modelValue) + "/" + E(e.countRef), 1)
    ])) : N("", !0),
    h("view", {
      class: L(["nut-pagination-next", e.modelValue >= e.countRef ? "disabled" : ""]),
      onClick: t[1] || (t[1] = (s) => e.select(e.modelValue + 1, !0))
    }, [
      I(e.$slots, "next-text", {}, () => [
        ge(E(e.nextText || e.translate("next")), 1)
      ])
    ], 2)
  ]);
}
const wc = /* @__PURE__ */ Z(mc, [["render", bc]]), Bt = window, kc = typeof window != "undefined";
function Cc() {
  return typeof Bt != "undefined" ? Bt.requestAnimationFrame || Bt.webkitRequestAnimationFrame || function(e) {
    Bt.setTimeout(e, 1e3 / 60);
  } : function(e) {
    setTimeout(e, 1e3 / 60);
  };
}
function Sc(e) {
  kc ? cancelAnimationFrame(e) : clearTimeout(e);
}
const Re = Cc(), In = 10;
function Tc(e, t) {
  return e > t && e > In ? "horizontal" : t > e && t > In ? "vertical" : "";
}
function et() {
  const e = z(0), t = z(0), n = z(0), l = z(0), o = z(0), a = z(0), s = z(0), r = z(0), i = z(""), p = () => i.value === "vertical", d = () => i.value === "horizontal", v = () => {
    o.value = 0, a.value = 0, s.value = 0, r.value = 0, i.value = "";
  };
  return {
    move: ($) => {
      const k = $.touches[0];
      o.value = k.clientX - e.value, a.value = k.clientY - t.value, n.value = k.clientX, l.value = k.clientY, s.value = Math.abs(o.value), r.value = Math.abs(a.value), i.value || (i.value = Tc(s.value, r.value));
    },
    start: ($) => {
      v(), e.value = $.touches[0].clientX, t.value = $.touches[0].clientY;
    },
    reset: v,
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
    isHorizontal: d
  };
}
const Nc = (e, t, n, l) => {
  const o = z(), a = z({ width: 0, height: 0 }), s = () => Ge(void 0, null, function* () {
    var y, b;
    n && n.getEnv() !== n.ENV_TYPE.WEB ? l(o).then(
      ($) => {
        a.value.width = $.width || 0, a.value.height = $.height || 0;
      },
      () => {
      }
    ) : (a.value.width = ((y = o.value) == null ? void 0 : y.clientWidth) || 0, a.value.height = ((b = o.value) == null ? void 0 : b.clientHeight) || 0);
  });
  ve(() => {
    setTimeout(() => {
      s();
    }, 100);
  });
  const r = ce({
    offset: 0,
    moving: !1
  }), i = et();
  let p = "";
  const d = (y, b) => {
    var k;
    let $ = y;
    switch (e.direction == "horizontal" ? (p = y > 0 ? "right" : "left", $ = Math.abs($) / a.value.width * 100) : (p = b > 0 ? "bottom" : "top", $ = b, $ = Math.abs($) / ((k = a.value) == null ? void 0 : k.height) * 100), $ > 85 && ($ = 85), p) {
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
    onTouchStart(y) {
      e.swipeable && i.start(y);
    },
    onTouchMove(y) {
      e.swipeable && (i.move(y), r.moving = !0, d(i.deltaX.value, i.deltaY.value), e.direction == "horizontal" && i.isHorizontal() && (y.preventDefault(), y.stopPropagation()), e.direction == "vertical" && i.isVertical() && (y.preventDefault(), y.stopPropagation()));
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
class Dc {
  constructor() {
    V(this, "title", "");
    V(this, "titleSlot");
    V(this, "paneKey", "");
    V(this, "disabled", !1);
  }
}
const { create: _c } = U("tabs"), Ic = _c({
  components: { NutSticky: co, JoySmile: Ys },
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
    Pe("tabsOpiton", {
      activeKey: D(() => e.modelValue || "0"),
      autoHeight: D(() => e.autoHeight),
      animatedTime: D(() => e.animatedTime)
    });
    const a = z([]), s = (T) => {
      T.forEach((P, O) => {
        var G, le, Y, j, R, te, X, se, ue;
        let K = P.type;
        if (K = K.name || K, K == "NutTabPane") {
          let pe = new Dc();
          if ((G = P.props) != null && G.title || (le = P.props) != null && le["pane-key"] || (Y = P.props) != null && Y.paneKey) {
            let we = jt((j = P.props) == null ? void 0 : j["pane-key"]), Be = we == "number" || we == "string" ? String((R = P.props) == null ? void 0 : R["pane-key"]) : null, H = jt((te = P.props) == null ? void 0 : te.paneKey), J = H == "number" || H == "string" ? String((X = P.props) == null ? void 0 : X.paneKey) : null;
            pe.title = (se = P.props) == null ? void 0 : se.title, pe.paneKey = Be || J || String(O), pe.disabled = (ue = P.props) == null ? void 0 : ue.disabled;
          }
          a.value.push(pe);
        } else {
          if (P.children == " ")
            return;
          s(P.children);
        }
      });
    }, r = z(e.modelValue || 0), i = (T) => {
      let P = a.value.findIndex((O) => O.paneKey == T);
      a.value.length == 0 || P == -1 || (r.value = P);
    }, p = D(() => e.titleScroll && e.direction === "vertical"), d = z(), v = z([]), y = (T) => {
      const P = d.value, O = v.value;
      if (!P || !O || !O[r.value])
        return;
      const K = O[r.value];
      let G = 0;
      e.direction === "vertical" ? G = K.offsetTop - P.offsetTop + 10 - (P.offsetHeight - K.offsetHeight) / 2 : G = K.offsetLeft - (P.offsetWidth - K.offsetWidth) / 2, b(P, G, T ? 0 : 0.3, e.direction);
    }, b = (T, P, O, K) => {
      let G = 0;
      const le = K === "horizontal" ? T.scrollLeft : T.scrollTop, Y = O === 0 ? 1 : Math.round(O * 1e3 / 16);
      function j() {
        K === "horizontal" ? T.scrollLeft += (P - le) / Y : T.scrollTop += (P - le) / Y, ++G < Y && Re(j);
      }
      j();
    }, $ = (T = ((P) => (P = n.default) == null ? void 0 : P.call(n))()) => {
      a.value = [], T = T == null ? void 0 : T.filter((O) => typeof O.children != "string"), T && T.length && s(T), i(e.modelValue), Te(() => {
        y();
      });
    }, k = (T) => {
      o = T.fixed;
    };
    Q(
      () => {
        var T;
        return (T = n.default) == null ? void 0 : T.call(n);
      },
      (T) => {
        $(T);
      }
    );
    const u = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    Q(
      () => e.modelValue,
      (T) => {
        if (i(T), y(), o) {
          let P = Ye(l.value).top + u(), O = Math.ceil(P - e.top);
          window.scrollTo({
            top: O,
            behavior: "smooth"
          });
        }
      }
    ), ve($), Ct($);
    const g = {
      isBegin: () => r.value == 0,
      isEnd: () => r.value == a.value.length - 1,
      next: () => {
        r.value += 1;
        const T = a.value[r.value].disabled;
        if (g.isEnd() && T) {
          g.prev();
          return;
        }
        if (T && r.value < a.value.length - 1) {
          g.next();
          return;
        }
        g.updateValue(a.value[r.value]);
      },
      prev: () => {
        r.value -= 1;
        const T = a.value[r.value].disabled;
        if (g.isBegin() && T) {
          g.next();
          return;
        }
        if (T && r.value > 0) {
          g.prev();
          return;
        }
        g.updateValue(a.value[r.value]);
      },
      updateValue: (T) => {
        t("update:modelValue", T.paneKey), t("change", T);
      },
      tabChange: (T, P) => {
        t("click", T), !(T.disabled || r.value == P) && (r.value = P, g.updateValue(T));
      },
      setTabItemRef: (T, P) => {
        v.value[P] = T;
      }
    }, { tabsContentRef: m, touchState: w, touchMethods: S } = Nc(e, g), _ = D(() => {
      let T = r.value * 100;
      w.moving && (T += w.offset);
      let P = {
        transform: e.direction == "horizontal" ? `translate3d(-${T}%, 0, 0)` : `translate3d( 0,-${T}%, 0)`,
        transitionDuration: w.moving ? void 0 : `${e.animatedTime}ms`
      };
      return e.animatedTime == 0 && (P = {}), P;
    }), B = D(() => ({
      background: e.background
    })), M = D(() => ({
      color: e.type == "smile" ? e.color : "",
      background: e.type == "line" ? e.color : ""
    })), C = D(() => {
      if (!e.titleGutter)
        return {};
      const T = _e(e.titleGutter);
      return e.direction === "vertical" ? { marginTop: T, marginBottom: T } : { marginLeft: T, marginRight: T };
    });
    return q(q({
      navRef: d,
      tabsContentRef: m,
      titles: a,
      contentStyle: _,
      tabsNavStyle: B,
      titleStyle: C,
      tabsActiveStyle: M,
      container: l,
      getScrollY: p,
      onStickyScroll: k
    }, g), S);
  }
}), Bc = ["onClick"], Mc = ["onClick"];
function Lc(e, t, n, l, o, a) {
  const s = W("JoySmile"), r = W("nut-sticky");
  return c(), f("view", {
    ref: "container",
    class: L(["nut-tabs", [e.direction]])
  }, [
    e.sticky ? (c(), ee(r, {
      key: 0,
      top: e.top,
      container: e.container,
      onScroll: e.onStickyScroll
    }, {
      default: ne(() => [
        h("view", {
          ref: "navRef",
          class: L(["nut-tabs__titles", {
            "nut-tabs__titles-left": e.align === "left",
            [e.type]: e.type,
            scrollable: e.titleScroll,
            [e.size]: e.size
          }]),
          style: A(e.tabsNavStyle)
        }, [
          e.$slots.titles ? I(e.$slots, "titles", { key: 0 }) : (c(!0), f(x, { key: 1 }, ie(e.titles, (i, p) => (c(), f("view", {
            key: i.paneKey,
            class: L(["nut-tabs__titles-item", {
              "nut-tabs__titles-item-left": e.align === "left",
              active: i.paneKey == e.modelValue,
              disabled: i.disabled
            }]),
            style: A(e.titleStyle),
            onClick: (d) => e.tabChange(i, p)
          }, [
            e.type == "line" ? (c(), f("view", {
              key: 0,
              class: "nut-tabs__titles-item__line",
              style: A(e.tabsActiveStyle)
            }, null, 4)) : N("", !0),
            e.type == "smile" ? (c(), f("view", {
              key: 1,
              class: "nut-tabs__titles-item__smile",
              style: A(e.tabsActiveStyle)
            }, [
              oe(s, { color: e.color }, null, 8, ["color"])
            ], 4)) : N("", !0),
            h("view", {
              class: L(["nut-tabs__titles-item__text", { ellipsis: e.ellipsis }])
            }, E(i.title), 3)
          ], 14, Bc))), 128))
        ], 6)
      ]),
      _: 3
    }, 8, ["top", "container", "onScroll"])) : (c(), f("view", {
      key: 1,
      ref: "navRef",
      class: L(["nut-tabs__titles", { "nut-tabs__titles-left": e.align === "left", [e.type]: e.type, scrollable: e.titleScroll, [e.size]: e.size }]),
      style: A(e.tabsNavStyle)
    }, [
      e.$slots.titles ? I(e.$slots, "titles", { key: 0 }) : (c(!0), f(x, { key: 1 }, ie(e.titles, (i, p) => (c(), f("view", {
        key: i.paneKey,
        ref_for: !0,
        ref: (d) => e.setTabItemRef(d, p),
        class: L(["nut-tabs__titles-item", {
          "nut-tabs__titles-item-left": e.align === "left",
          active: i.paneKey == e.modelValue,
          disabled: i.disabled
        }]),
        style: A(e.titleStyle),
        onClick: (d) => e.tabChange(i, p)
      }, [
        e.type == "line" ? (c(), f("view", {
          key: 0,
          class: "nut-tabs__titles-item__line",
          style: A(e.tabsActiveStyle)
        }, null, 4)) : N("", !0),
        e.type == "smile" ? (c(), f("view", {
          key: 1,
          class: "nut-tabs__titles-item__smile",
          style: A(e.tabsActiveStyle)
        }, [
          oe(s, { color: e.color }, null, 8, ["color"])
        ], 4)) : N("", !0),
        h("view", {
          class: L(["nut-tabs__titles-item__text", { ellipsis: e.ellipsis }])
        }, E(i.title), 3)
      ], 14, Mc))), 128))
    ], 6)),
    h("view", {
      ref: "tabsContentRef",
      class: "nut-tabs__content",
      style: A(e.contentStyle),
      onTouchstart: t[0] || (t[0] = (...i) => e.onTouchStart && e.onTouchStart(...i)),
      onTouchmove: t[1] || (t[1] = (...i) => e.onTouchMove && e.onTouchMove(...i)),
      onTouchend: t[2] || (t[2] = (...i) => e.onTouchEnd && e.onTouchEnd(...i)),
      onTouchcancel: t[3] || (t[3] = (...i) => e.onTouchEnd && e.onTouchEnd(...i))
    }, [
      I(e.$slots, "default")
    ], 36)
  ], 2);
}
const vo = /* @__PURE__ */ Z(Ic, [["render", Lc]]), { create: Ec } = U("tab-pane"), Pc = Ec({
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
    const t = Ee("tabsOpiton"), n = D(() => ({
      display: t.animatedTime.value == 0 && e.paneKey != t.activeKey.value ? "none" : void 0
    }));
    return de(q({}, t), {
      paneStyle: n
    });
  }
});
function Ac(e, t, n, l, o, a) {
  return c(), f("view", {
    class: L(["nut-tab-pane", { inactive: e.paneKey != e.activeKey && e.autoHeight }]),
    style: A(e.paneStyle)
  }, [
    I(e.$slots, "default")
  ], 6);
}
const $o = /* @__PURE__ */ Z(Pc, [["render", Ac]]), { create: zc } = U("indicator"), Vc = zc({
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
    return { classes: D(() => {
      const n = "nut-indicator";
      return {
        [n]: !0,
        [`${n}--block`]: e.block,
        [`${n}--align__${e.align}`]: e.block && e.align
      };
    }), padZero: Qe };
  }
}), Oc = {
  key: 0,
  class: "nut-indicator--number"
}, Hc = {
  key: 1,
  class: "nut-indicator--dot"
};
function Rc(e, t, n, l, o, a) {
  return c(), f("view", {
    class: L(e.classes)
  }, [
    (c(!0), f(x, null, ie(e.size, (s) => (c(), f(x, { key: s }, [
      s === e.current ? (c(), f("view", Oc, E(e.fillZero && e.padZero(s) || s), 1)) : (c(), f("view", Hc))
    ], 64))), 128))
  ], 2);
}
const Fc = /* @__PURE__ */ Z(Vc, [["render", Rc]]), { create: Wc } = U("side-navbar"), Yc = Wc({
  props: {
    offset: {
      type: [String, Number],
      default: 15
    }
  },
  setup: (e) => {
    const t = z(null), n = ce({
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
    return ve(() => {
      o(), n.observer = new MutationObserver(function() {
        n.count = 1, o();
      }), n.observer.observe(t.value, {
        attributes: !1,
        childList: !0,
        characterData: !1,
        subtree: !0
      });
    }), de(q({}, he(n)), {
      list: t
    });
  }
}), jc = { class: "nut-side-navbar" }, Uc = { class: "nut-side-navbar__content" }, Kc = {
  ref: "list",
  class: "nut-side-navbar__content__list"
};
function Xc(e, t, n, l, o, a) {
  return c(), f("view", jc, [
    h("view", Uc, [
      h("view", Kc, [
        I(e.$slots, "default")
      ], 512)
    ])
  ]);
}
const qc = /* @__PURE__ */ Z(Yc, [["render", Xc]]), { create: Zc } = U("side-navbar-item"), Gc = Zc({
  props: {
    title: {
      type: String,
      default: ""
    }
  }
}), Jc = { class: "nut-side-navbar-item" }, Qc = { class: "nut-side-navbar-item__title" };
function xc(e, t, n, l, o, a) {
  return c(), f("view", Jc, [
    h("span", Qc, E(e.title), 1)
  ]);
}
const ed = /* @__PURE__ */ Z(Gc, [["render", xc]]), { create: td } = U("sub-side-navbar"), nd = td({
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
  components: { ArrowDown2: gl, ArrowUp2: wl },
  emits: ["titleClick"],
  setup: (e, { emit: t }) => {
    const n = ce({
      direction: ""
    }), l = D(() => ({
      height: n.direction ? "0px" : "auto"
    })), o = () => {
      t("titleClick"), n.direction = n.direction ? "" : "up";
    };
    return ve(() => {
      n.direction = e.open ? "" : "up";
    }), de(q({}, he(n)), {
      style: l,
      handleClick: o
    });
  }
}), od = { class: "nut-sub-side-navbar" }, ld = { class: "nut-sub-side-navbar__title__text" }, sd = { class: "nut-sub-side-navbar__title__icon" };
function ad(e, t, n, l, o, a) {
  const s = W("ArrowDown2"), r = W("ArrowUp2");
  return c(), f("view", od, [
    h("view", {
      class: "nut-sub-side-navbar__title",
      onClick: t[0] || (t[0] = De((...i) => e.handleClick && e.handleClick(...i), ["stop"]))
    }, [
      h("span", ld, E(e.title), 1),
      h("span", sd, [
        e.direction ? (c(), ee(r, { key: 1 })) : (c(), ee(s, { key: 0 }))
      ])
    ]),
    Se(h("view", {
      class: L(["nut-sub-side-navbar__list", e.direction ? "nutFadeOut" : "nutFadeIn"]),
      style: A(e.style)
    }, [
      I(e.$slots, "default")
    ], 6), [
      [Ie, !e.direction]
    ])
  ]);
}
const rd = /* @__PURE__ */ Z(nd, [["render", ad]]), bo = Symbol("nut-form"), wo = Symbol("nut-form-disabled"), Ze = (e) => {
  const { parent: t } = sn(wo);
  return D(() => {
    var n;
    return e.value || ((n = t == null ? void 0 : t.props) == null ? void 0 : n.disabled) || !1;
  });
}, { componentName: id, create: ud } = U("range"), cd = ud({
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
    const s = z(), r = z(), i = et(), p = D(() => {
      const { marks: Y, max: j, min: R } = e;
      return Object.keys(Y).map(parseFloat).sort((se, ue) => se - ue).filter((se) => se >= +R && se <= +j);
    }), d = D(() => Number(e.max) - Number(e.min)), v = D(() => {
      const Y = id;
      return {
        [Y]: !0,
        [`${Y}-disabled`]: n.value,
        [`${Y}-vertical`]: e.vertical,
        [`${Y}-show-number`]: !e.hiddenRange
      };
    }), y = D(() => {
      const Y = "nut-range-container";
      return {
        [Y]: !0,
        [`${Y}-vertical`]: e.vertical
      };
    }), b = D(() => ({
      background: e.inactiveColor
    })), $ = D(() => ({
      borderColor: e.buttonColor
    })), k = (Y) => !!e.range && Array.isArray(Y), u = () => {
      const { modelValue: Y, min: j } = e;
      return k(Y) ? `${(Y[1] - Y[0]) * 100 / d.value}%` : `${(Y - Number(j)) * 100 / d.value}%`;
    }, g = () => {
      const { modelValue: Y, min: j } = e;
      return k(Y) ? `${(Y[0] - Number(j)) * 100 / d.value}%` : "0%";
    }, m = D(() => e.vertical ? {
      height: u(),
      top: g(),
      background: e.activeColor,
      transition: r.value ? "none" : void 0
    } : {
      width: u(),
      left: g(),
      background: e.activeColor,
      transition: r.value ? "none" : void 0
    }), w = (Y) => {
      const j = "nut-range-mark", { modelValue: R, max: te, min: X } = e;
      let se = Number(X), ue = Number(te);
      if (e.range) {
        const [we, Be] = R;
        se = we, ue = Be;
      } else
        ue = R;
      let pe = Y <= +ue && Y >= se;
      return {
        [`${j}-text`]: !0,
        [`${j}-text-active`]: pe
      };
    }, S = (Y) => {
      const { min: j, vertical: R } = e;
      let te = {
        left: `${(Y - Number(j)) / d.value * 100}%`
      };
      return R && (te = {
        top: `${(Y - Number(j)) / d.value * 100}%`
      }), te;
    }, _ = (Y) => {
      const { modelValue: j, max: R, min: te } = e;
      let X = Number(te), se = Number(R);
      if (e.range) {
        const [we, Be] = j;
        X = we, se = Be;
      }
      return {
        background: Y <= se && Y >= X ? e.activeColor : e.inactiveColor
      };
    }, B = (Y) => {
      const { min: j, max: R, step: te } = e;
      return Y = Math.max(+j, Math.min(Y, +R)), Math.round(Y / +te) * +te;
    }, M = (Y, j) => JSON.stringify(Y) === JSON.stringify(j), C = (Y) => Y[0] > Y[1] ? Y.slice(0).reverse() : Y, T = (Y, j) => {
      k(Y) ? Y = C(Y).map(B) : Y = B(Y), M(Y, e.modelValue) || t("update:modelValue", Y), j && !M(Y, o) && t("change", Y);
    }, P = (Y) => {
      if (n.value)
        return;
      const { min: j, modelValue: R } = e, te = Ye(s);
      let X = Y.clientX - te.left, se = te.width;
      e.vertical && (X = Y.clientY - te.top, se = te.height);
      const ue = Number(j) + X / se * d.value;
      if (k(R)) {
        const [pe, we] = R, Be = (pe + we) / 2;
        ue <= Be ? T([ue, we], !0) : T([pe, ue], !0);
      } else
        T(ue, !0);
    }, O = (Y) => {
      n.value || (i.start(Y), a = e.modelValue, k(a) ? o = a.map(B) : o = B(a), r.value = "start");
    }, K = (Y) => {
      if (n.value)
        return;
      r.value === "start" && t("dragStart"), i.move(Y), r.value = "draging";
      const j = Ye(s);
      let R = i.deltaX.value, te = j.width, X = R / te * d.value;
      e.vertical && (R = i.deltaY.value, te = j.height, X = R / te * d.value), k(o) ? a[l.value] = o[l.value] + X : a = o + X, T(a);
    }, G = () => {
      n.value || (r.value === "draging" && (T(a, !0), t("dragEnd")), r.value = "");
    }, le = (Y) => jn(e.modelValue) && typeof Y == "number" ? e.modelValue[Y] : Number(e.modelValue);
    return de(q({
      root: s,
      classes: v,
      wrapperStyle: b,
      buttonStyle: $,
      onClick: P,
      onTouchStart: O,
      onTouchMove: K,
      onTouchEnd: G
    }, he(e)), {
      barStyle: m,
      curValue: le,
      buttonIndex: l,
      containerClasses: y,
      markClassName: w,
      marksStyle: S,
      marksList: p,
      tickStyle: _,
      disabled: n
    });
  }
}), dd = {
  key: 0,
  class: "nut-range-min"
}, fd = {
  key: 0,
  class: "nut-range-mark"
}, pd = ["tabindex", "aria-valuemin", "aria-valuenow", "aria-valuemax", "onTouchstart"], md = {
  key: 0,
  class: "number"
}, hd = ["tabindex", "aria-valuemin", "aria-valuenow", "aria-valuemax"], gd = {
  key: 0,
  class: "number"
}, yd = {
  key: 1,
  class: "nut-range-max"
};
function vd(e, t, n, l, o, a) {
  return c(), f("view", {
    class: L(e.containerClasses)
  }, [
    e.hiddenRange ? N("", !0) : (c(), f("view", dd, E(+e.min), 1)),
    h("view", {
      ref: "root",
      style: A(e.wrapperStyle),
      class: L(e.classes),
      onClick: t[9] || (t[9] = De((...s) => e.onClick && e.onClick(...s), ["stop"]))
    }, [
      e.marksList.length > 0 ? (c(), f("view", fd, [
        (c(!0), f(x, null, ie(e.marksList, (s) => (c(), f("span", {
          key: s,
          class: L(e.markClassName(s)),
          style: A(e.marksStyle(s))
        }, [
          ge(E(s) + " ", 1),
          h("span", {
            class: "nut-range-tick",
            style: A(e.tickStyle(s))
          }, null, 4)
        ], 6))), 128))
      ])) : N("", !0),
      h("view", {
        class: "nut-range-bar",
        style: A(e.barStyle)
      }, [
        e.range ? (c(), f(x, { key: 0 }, ie([0, 1], (s) => h("view", {
          key: s,
          role: "slider",
          class: L({
            "nut-range-button-wrapper-left": s == 0,
            "nut-range-button-wrapper-right": s == 1
          }),
          tabindex: e.disabled ? -1 : 0,
          "aria-valuemin": +e.min,
          "aria-valuenow": e.curValue(s),
          "aria-valuemax": +e.max,
          "aria-orientation": "horizontal",
          onTouchstart: De(
            (r) => {
              typeof s == "number" && (e.buttonIndex = s), e.onTouchStart(r);
            },
            ["stop", "prevent"]
          ),
          onTouchmove: t[0] || (t[0] = De((...r) => e.onTouchMove && e.onTouchMove(...r), ["stop", "prevent"])),
          onTouchend: t[1] || (t[1] = De((...r) => e.onTouchEnd && e.onTouchEnd(...r), ["stop", "prevent"])),
          onTouchcancel: t[2] || (t[2] = De((...r) => e.onTouchEnd && e.onTouchEnd(...r), ["stop", "prevent"])),
          onClick: t[3] || (t[3] = (r) => r.stopPropagation())
        }, [
          e.$slots.button ? I(e.$slots, "button", { key: 0 }) : (c(), f("view", {
            key: 1,
            class: "nut-range-button",
            style: A(e.buttonStyle)
          }, [
            e.hiddenTag ? N("", !0) : (c(), f("view", md, E(e.curValue(s)), 1))
          ], 4))
        ], 42, pd)), 64)) : (c(), f("view", {
          key: 1,
          role: "slider",
          class: "nut-range-button-wrapper",
          tabindex: e.disabled ? -1 : 0,
          "aria-valuemin": +e.min,
          "aria-valuenow": e.curValue(),
          "aria-valuemax": +e.max,
          "aria-orientation": "horizontal",
          onTouchstart: t[4] || (t[4] = De(
            (s) => {
              e.onTouchStart(s);
            },
            ["stop", "prevent"]
          )),
          onTouchmove: t[5] || (t[5] = De((...s) => e.onTouchMove && e.onTouchMove(...s), ["stop", "prevent"])),
          onTouchend: t[6] || (t[6] = De((...s) => e.onTouchEnd && e.onTouchEnd(...s), ["stop", "prevent"])),
          onTouchcancel: t[7] || (t[7] = De((...s) => e.onTouchEnd && e.onTouchEnd(...s), ["stop", "prevent"])),
          onClick: t[8] || (t[8] = (s) => s.stopPropagation())
        }, [
          e.$slots.button ? I(e.$slots, "button", { key: 0 }) : (c(), f("view", {
            key: 1,
            class: "nut-range-button",
            style: A(e.buttonStyle)
          }, [
            e.hiddenTag ? N("", !0) : (c(), f("view", gd, E(e.curValue()), 1))
          ], 4))
        ], 40, hd))
      ], 4)
    ], 6),
    e.hiddenRange ? N("", !0) : (c(), f("view", yd, E(+e.max), 1))
  ], 2);
}
const ko = /* @__PURE__ */ Z(cd, [["render", vd]]), { create: $d } = U("searchbar"), bd = "NutSearchbar", wd = $d({
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
      default: () => nn
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
    const n = Ze(xe(e, "disabled")), l = Ce(bd), o = ce({
      active: !1
    }), a = D(() => ({
      background: e.background
    })), s = D(() => ({
      background: e.inputBackground
    })), r = (m) => {
      let S = m.target.value;
      e.maxLength && S.length > Number(e.maxLength) && (S = S.slice(0, Number(e.maxLength))), t("update:modelValue", S, m), t("change", S, m);
    }, i = z({}), p = (m) => {
      let S = m.target.value;
      o.active = !0, i.value = e.focusStyle, t("focus", S, m);
    }, d = (m) => {
      setTimeout(() => {
        o.active = !1;
      }, 0);
      let S = m.target.value;
      e.maxLength && S.length > Number(e.maxLength) && (S = S.slice(0, Number(e.maxLength))), i.value = {}, t("blur", S, m);
    }, v = (m) => {
      t("update:modelValue", "", m), t("change", "", m), t("clear", "");
    }, y = () => {
      t("search", e.modelValue);
    }, b = (m) => {
      t("clickInput", m);
    }, $ = (m) => {
      t("clickLeftIcon", e.modelValue, m);
    }, k = (m) => {
      t("clickRightIcon", e.modelValue, m);
    }, u = D(() => ({
      textAlign: e.inputAlign
    })), g = z(null);
    return ve(() => {
      e.autofocus && g.value.focus();
    }), de(q({
      renderIcon: lt,
      inputsearch: g
    }, he(o)), {
      valueChange: r,
      valueFocus: p,
      valueBlur: d,
      handleClear: v,
      handleSubmit: y,
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
}), kd = {
  key: 0,
  class: "nut-searchbar__search-label"
}, Cd = {
  key: 1,
  class: "nut-searchbar__search-icon nut-searchbar__left-search-icon"
}, Sd = ["type", "maxlength", "placeholder", "value", "disabled", "readonly"], Td = {
  key: 1,
  class: "nut-searchbar__search-icon nut-searchbar__iptright-search-icon"
}, Nd = {
  key: 2,
  class: "nut-searchbar__search-icon nut-searchbar__right-search-icon"
};
function Dd(e, t, n, l, o, a) {
  return c(), f("view", {
    class: L(["nut-searchbar", { "safe-area-inset-bottom": e.safeAreaInsetBottom }]),
    style: A(e.searchbarStyle)
  }, [
    e.label ? (c(), f("span", kd, E(e.label), 1)) : N("", !0),
    e.$slots.leftout ? (c(), f("view", Cd, [
      I(e.$slots, "leftout")
    ])) : N("", !0),
    h("view", {
      class: L(["nut-searchbar__search-input", e.shape]),
      style: A(q(q({}, e.inputSearchbarStyle), e.focusCss))
    }, [
      e.$slots.leftin ? (c(), f("view", {
        key: 0,
        class: "nut-searchbar__search-icon nut-searchbar__iptleft-search-icon",
        onClick: t[0] || (t[0] = (...s) => e.leftIconClick && e.leftIconClick(...s))
      }, [
        I(e.$slots, "leftin")
      ])) : N("", !0),
      h("view", {
        class: L(["nut-searchbar__input-inner", e.$slots.rightin && "nut-searchbar__input-inner-absolute"])
      }, [
        h("form", {
          class: "nut-searchbar__input-form",
          action: "#",
          onSubmit: t[5] || (t[5] = De((...s) => e.handleSubmit && e.handleSubmit(...s), ["prevent"]))
        }, [
          h("input", {
            ref: "inputsearch",
            class: L(["nut-searchbar__input-bar", e.clearable && "nut-searchbar__input-bar_clear"]),
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
          }, null, 46, Sd)
        ], 32)
      ], 2),
      h("view", {
        class: L(["nut-searchbar__input-inner-icon", e.$slots.rightin && "nut-searchbar__input-inner-icon-absolute"])
      }, [
        e.clearable ? Se((c(), f("view", {
          key: 0,
          class: "nut-searchbar__search-icon nut-searchbar__input-clear",
          onClick: t[6] || (t[6] = (...s) => e.handleClear && e.handleClear(...s))
        }, [
          e.$slots["clear-icon"] ? I(e.$slots, "clear-icon", { key: 0 }) : (c(), ee(Oe(e.renderIcon(e.clearIcon)), { key: 1 }))
        ], 512)), [
          [Ie, String(e.modelValue).length > 0]
        ]) : N("", !0),
        e.$slots.rightin ? (c(), f("view", Td, [
          I(e.$slots, "rightin")
        ])) : N("", !0)
      ], 2)
    ], 6),
    e.$slots.rightout ? (c(), f("view", Nd, [
      I(e.$slots, "rightout")
    ])) : N("", !0)
  ], 6);
}
const _d = /* @__PURE__ */ Z(wd, [["render", Dd]]), Lt = (e, t, n) => e.map((l) => {
  const { value: o = "value", text: a = "text", children: s = "children" } = n, y = l, { [o]: r, [a]: i, [s]: p } = y, d = Wt(y, [_t(o), _t(a), _t(s)]), v = de(q({
    loading: !1
  }, d), {
    level: t ? (t && t.level || 0) + 1 : 0,
    value: r,
    text: i,
    children: p,
    _parent: t
  });
  return v.children && v.children.length && (v.children = Lt(v.children, v, n)), v;
}), Co = (e, t) => {
  let n = 0, l;
  for (; (l = e[n++]) && t(l) !== !0; )
    l.children && l.children.length && Co(l.children, t);
}, Id = {
  topId: null,
  idKey: "id",
  pidKey: "pid",
  sortKey: ""
}, Bd = (e, t) => {
  const n = q(q({}, Id), t || {}), { topId: l, idKey: o, pidKey: a, sortKey: s } = n;
  let r = [], i = {};
  return e.forEach((p) => {
    p = q({}, p);
    const { [o]: d, [a]: v } = p, y = i[v] = i[v] || [];
    !r.length && v === l && (r = y), y.push(p), p.children = i[d] || (i[d] = []);
  }), s && Object.keys(i).forEach((p) => {
    i[p].length > 1 && i[p].sort((d, v) => d[s] - v[s]);
  }), i = null, r;
};
class Bn {
  constructor(t, n) {
    V(this, "nodes");
    V(this, "config");
    this.config = q({
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
    return Co(this.nodes, (l) => {
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
const { create: Md } = U("cascader-item"), Ld = Md({
  components: {
    Loading: rt,
    Checklist: Xl,
    NutTabs: vo,
    NutTabPane: $o
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
    const n = Ce(), l = D(() => ({
      lazy: e.lazy,
      lazyLoad: e.lazyLoad,
      valueKey: e.valueKey,
      textKey: e.textKey,
      childrenKey: e.childrenKey,
      convertConfig: e.convertConfig
    })), o = z(0), a = z(!1), s = z(e.modelValue), r = z(new Bn([], {})), i = z([]), p = D(() => l.value.lazy && !!l.value.lazyLoad), d = /* @__PURE__ */ new Map();
    let v;
    const y = () => Ge(this, null, function* () {
      d.clear(), i.value = [], o.value = 0, a.value = !1, v = null;
      let { options: m } = e;
      l.value.convertConfig && (m = Bd(m, l.value.convertConfig)), r.value = new Bn(m, {
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
        let S = r.value.nodes.find((_) => _.value === m[0]);
        if (S) {
          w = [S.value], a.value = !0;
          const _ = yield m.slice(1).reduce((B, M) => Ge(this, null, function* () {
            var P;
            const C = yield B;
            yield $(C);
            const T = (P = C == null ? void 0 : C.children) == null ? void 0 : P.find((O) => O.value === M);
            return T && w.push(M), Promise.resolve(T);
          }), Promise.resolve(S));
          yield $(_), a.value = !1;
        }
      }
      w.length && m === e.modelValue && r.value.getPathNodesByValue(w).map((_, B) => {
        o.value = B, u.handleNode(_, !0);
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
      let S = d.get(m);
      S || (S = new Promise((B) => {
        var M, C;
        (C = (M = l.value).lazyLoad) == null || C.call(M, m, B);
      }), d.set(m, S));
      const _ = yield S;
      Array.isArray(_) && _.length > 0 ? r.value.updateChildren(_, w) : m.leaf = !0, m.loading = !1, d.delete(m);
    }), k = (m) => {
      const w = m.map((S) => S.value);
      s.value = w, t("change", w, m), t("update:modelValue", w, m);
    }, u = {
      // 选中一个节点，静默模式不触发事件
      handleNode(m, w) {
        return Ge(this, null, function* () {
          const { disabled: S, loading: _ } = m;
          if (!(!w && S || !i.value[o.value])) {
            if (r.value.isLeaf(m, p.value)) {
              if (m.leaf = !0, i.value[o.value].selectedNode = m, i.value = i.value.slice(0, m.level + 1), !w) {
                const B = i.value.map((M) => M.selectedNode);
                k(B), t("pathChange", B);
              }
              return;
            }
            if (r.value.hasChildren(m, p.value)) {
              const B = m.level + 1;
              if (i.value[o.value].selectedNode = m, i.value = i.value.slice(0, B), i.value.push({
                nodes: m.children || [],
                selectedNode: null
              }), o.value = B, !w) {
                const M = i.value.map((C) => C.selectedNode);
                t("pathChange", M);
              }
              return;
            }
            v = m, !_ && (yield $(m), v === m && (i.value[o.value].selectedNode = m, u.handleNode(m, w)));
          }
        });
      },
      handleTabClick(m) {
        v = null, o.value = Number(m.paneKey);
      },
      formatTabTitle(m) {
        return m.selectedNode ? m.selectedNode.text : n("select");
      },
      isSelected(m, w) {
        var S;
        return ((S = m == null ? void 0 : m.selectedNode) == null ? void 0 : S.value) === w.value;
      }
    };
    return Q(
      [l, () => e.options],
      () => {
        y();
      },
      {
        deep: !0,
        immediate: !0
      }
    ), Q(
      () => e.modelValue,
      (m) => {
        m !== s.value && (s.value = m, b());
      }
    ), Q(
      () => e.visible,
      (m) => {
        m && Array.isArray(s.value) && s.value.length > 0 && b();
      }
    ), q({ panes: i, initLoading: a, tabsCursor: o }, u);
  }
}), Ed = {
  role: "menu",
  class: "nut-cascader-pane"
}, Pd = ["aria-checked", "aria-disabled", "onClick"], Ad = { class: "nut-cascader-item__title" }, zd = /* @__PURE__ */ h("view", { class: "nut-cascader-pane" }, null, -1);
function Vd(e, t, n, l, o, a) {
  const s = W("Loading"), r = W("Checklist"), i = W("nut-tab-pane"), p = W("nut-tabs");
  return c(), ee(p, {
    modelValue: e.tabsCursor,
    "onUpdate:modelValue": t[0] || (t[0] = (d) => e.tabsCursor = d),
    class: "nut-cascader",
    "title-scroll": "",
    onClick: e.handleTabClick
  }, {
    default: ne(() => [
      !e.initLoading && e.panes.length ? (c(!0), f(x, { key: 0 }, ie(e.panes, (d, v) => (c(), ee(i, {
        key: v,
        title: e.formatTabTitle(d)
      }, {
        default: ne(() => [
          h("view", Ed, [
            (c(!0), f(x, null, ie(d.nodes, (y) => (c(), f("view", {
              key: y.value,
              class: L(["nut-cascader-item", { active: e.isSelected(d, y), disabled: y.disabled }]),
              "aria-checked": e.isSelected(d, y),
              "aria-disabled": y.disabled || void 0,
              role: "menuitemradio",
              onClick: (b) => e.handleNode(y, !1)
            }, [
              h("view", Ad, E(y.text), 1),
              y.loading ? (c(), ee(s, {
                key: 0,
                class: "nut-cascader-item__icon-loading",
                name: "loading"
              })) : (c(), ee(r, {
                key: 1,
                class: "nut-cascader-item__icon-check",
                name: "checklist"
              }))
            ], 10, Pd))), 128))
          ])
        ]),
        _: 2
      }, 1032, ["title"]))), 128)) : (c(), ee(i, {
        key: 1,
        title: "Loading..."
      }, {
        default: ne(() => [
          zd
        ]),
        _: 1
      }))
    ]),
    _: 1
  }, 8, ["modelValue", "onClick"]);
}
const Od = /* @__PURE__ */ Z(Ld, [["render", Vd]]), { create: Hd } = U("cascader"), Rd = Hd({
  components: {
    NutCascaderItem: Od,
    NutPopup: ze
  },
  props: de(q({}, Nt), {
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
    const n = z(e.modelValue), l = D({
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
    return Q(
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
}), Fd = ["innerHTML"];
function Wd(e, t, n, l, o, a) {
  const s = W("nut-cascader-item"), r = W("nut-popup");
  return e.poppable ? (c(), ee(r, {
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
      e.title ? (c(), f("view", {
        key: 0,
        class: "nut-cascader__bar",
        innerHTML: e.title
      }, null, 8, Fd)) : N("", !0),
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
  }, 8, ["visible", "closeable", "close-icon-position", "z-index"])) : (c(), ee(s, {
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
const Yd = /* @__PURE__ */ Z(Rd, [["render", Wd]]), fe = {
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
      const i = a - s * 864e5, p = a + (6 - s) * 864e5, d = this.date2Str(new Date(i)), v = this.date2Str(new Date(p));
      return [d, v];
    } else {
      s = s == 0 ? 7 : s;
      const r = 24 * 60 * 60 * 1e3, i = a - (s - 1) * r, p = a + (7 - s) * r, d = this.date2Str(new Date(i)), v = this.date2Str(new Date(p));
      return [d, v];
    }
  },
  formatResultDate: function(e) {
    let t = [...e.split("-")];
    return t[2] = fe.getNumTwoBit(Number(t[2])), t[3] = `${t[0]}-${t[1]}-${t[2]}`, t[4] = fe.getWhatDay(+t[0], +t[1], +t[2]), t;
  }
}, { create: jd } = U("calendar-item"), Ud = "NutCalendarItem", Kd = jd({
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
      default: fe.getDay(0)
    },
    endDate: {
      type: String,
      default: fe.getDay(365)
    },
    firstDayOfWeek: {
      type: Number,
      default: 0
    },
    disabledDate: Function
  },
  emits: ["choose", "update", "close", "select"],
  setup(e, { emit: t, slots: n, expose: l }) {
    const o = Ce(Ud), a = o("weekdays").map((H, J) => ({
      day: H,
      weekend: J === 0 || J === 6
    })), s = z([...a.slice(e.firstDayOfWeek, 7), ...a.slice(0, e.firstDayOfWeek)]), r = z(null), i = z(null), p = z(null), d = z(null), v = z(0), y = D(() => u.monthsData.slice(u.defaultRange[0], u.defaultRange[1])), b = D(() => n.btn), $ = D(() => n["top-info"]), k = D(() => n["bottom-info"]), u = ce({
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
    }), g = (H) => H.split("-"), m = (H) => fe.isEqual(u.currDate[0], H), w = (H) => fe.isEqual(u.currDate[1], H), S = (H) => {
      var J, ae;
      return ((J = u.currDate) == null ? void 0 : J.length) > 0 ? (ae = u.currDate) == null ? void 0 : ae.some((re) => fe.isEqual(re, H)) : !1;
    }, _ = (H, J) => J.curData[0] + "-" + J.curData[1] + "-" + fe.getNumTwoBit(+H.day), B = (H, J, ae) => {
      const re = [];
      typeof ae == "number" && ((ae + 1 + e.firstDayOfWeek) % 7 === 0 || (ae + e.firstDayOfWeek) % 7 === 0) && re.push("weekend");
      const me = _(H, J), { type: Me } = e;
      return H.type == "curr" ? fe.isEqual(u.currDate, me) || (Me == "range" || Me == "week") && (m(me) || w(me)) || Me == "multiple" && S(me) ? re.push(`${u.dayPrefix}--active`) : u.propStartDate && fe.compareDate(me, u.propStartDate) || u.propEndDate && fe.compareDate(u.propEndDate, me) || e.disabledDate && e.disabledDate(me) ? re.push(`${u.dayPrefix}--disabled`) : (Me == "range" || Me == "week") && Array.isArray(u.currDate) && Object.values(u.currDate).length == 2 && fe.compareDate(u.currDate[0], me) && fe.compareDate(me, u.currDate[1]) && re.push(`${u.dayPrefix}--choose`) : re.push(`${u.dayPrefix}--disabled`), re;
    }, M = () => {
      const { type: H } = e;
      if (H == "range" && u.chooseData.length == 2 || H != "range") {
        let J = u.chooseData.slice(0);
        if (H == "week") {
          if (u.chooseData.length !== 2)
            return;
          J = {
            weekDate: [T(u.chooseData[0]), T(u.chooseData[1])]
          };
        }
        t("choose", J), e.poppable && t("update");
      }
    }, C = (H, J, ae = !1) => {
      var re, me;
      if (!B(H, J).includes(`${u.dayPrefix}--disabled`)) {
        const { type: Me } = e;
        let [Fe, Ue] = J.curData, $e = [...J.curData];
        if ($e[2] = fe.getNumTwoBit(Number(H.day)), $e[3] = `${$e[0]}-${$e[1]}-${$e[2]}`, $e[4] = fe.getWhatDay(+$e[0], +$e[1], +$e[2]), Me == "multiple")
          if (((re = u.currDate) == null ? void 0 : re.length) > 0) {
            let Ne;
            (me = u.currDate) == null || me.forEach((We, He) => {
              We == $e[3] && (Ne = He);
            }), ae ? u.chooseData.push([...$e]) : Ne !== void 0 ? (u.currDate.splice(Ne, 1), u.chooseData.splice(Ne, 1)) : (u.currDate.push($e[3]), u.chooseData.push([...$e]));
          } else
            u.currDate = [$e[3]], u.chooseData = [[...$e]];
        else if (Me == "range") {
          let Ne = Object.values(u.currDate).length;
          Ne == 2 || Ne == 0 ? u.currDate = [$e[3]] : fe.compareDate(u.currDate[0], $e[3]) ? Array.isArray(u.currDate) && u.currDate.push($e[3]) : Array.isArray(u.currDate) && u.currDate.unshift($e[3]), u.chooseData.length == 2 || !u.chooseData.length ? u.chooseData = [[...$e]] : fe.compareDate(u.chooseData[0][3], $e[3]) ? u.chooseData = [...u.chooseData, [...$e]] : u.chooseData = [[...$e], ...u.chooseData];
        } else if (Me == "week") {
          let Ne = fe.getWeekDate(Fe, Ue, H.day, e.firstDayOfWeek);
          u.propStartDate && fe.compareDate(Ne[0], u.propStartDate) && Ne.splice(0, 1, u.propStartDate), u.propEndDate && fe.compareDate(u.propEndDate, Ne[1]) && Ne.splice(1, 1, u.propEndDate), u.currDate = Ne, u.chooseData = [fe.formatResultDate(Ne[0]), fe.formatResultDate(Ne[1])];
        } else
          u.currDate = $e[3], u.chooseData = [...$e];
        if (!ae) {
          let Ne = u.chooseData;
          Me == "week" && (Ne = {
            weekDate: [
              T(u.chooseData[0]),
              T(u.chooseData[1])
            ]
          }), t("select", Ne), (e.isAutoBackFill || !e.poppable) && M();
        }
      }
    }, T = (H) => {
      let [J, ae, re] = H;
      return {
        date: H,
        monthWeekNum: fe.getMonthWeek(J, ae, re, e.firstDayOfWeek),
        yearWeekNum: fe.getYearWeek(J, ae, re, e.firstDayOfWeek)
      };
    }, P = (H) => {
      const J = H == "prev" ? u.monthsData[0] : u.monthsData[u.monthsData.length - 1];
      let ae = parseInt(J.curData[0]), re = parseInt(J.curData[1].toString().replace(/^0/, ""));
      switch (H) {
        case "prev":
          re == 1 && (ae -= 1), re = re == 1 ? 12 : --re;
          break;
        case "next":
          re == 12 && (ae += 1), re = re == 12 ? 1 : ++re;
          break;
      }
      return [ae + "", fe.getNumTwoBit(re), fe.getMonthDays(String(ae), String(re)) + ""];
    }, O = (H, J, ae) => {
      let { year: re, month: me } = ae;
      return J == "prev" && H >= 7 && (H -= 7), Array.from(Array(H), (Me, Fe) => ({
        day: String(Fe + 1),
        type: J,
        year: re,
        month: me
      }));
    }, K = (H, J, ae, re) => {
      H = H - e.firstDayOfWeek;
      let { year: me, month: Me } = ae;
      return J == "prev" && H >= 7 && (H -= 7), Array.from(Array(re), (Ue, $e) => ({
        day: String($e + 1),
        type: J,
        year: me,
        month: Me
      })).slice(re - H);
    }, G = (H, J) => {
      const ae = fe.getMonthPreDay(+H[0], +H[1]);
      let re = Number(H[1]) - 1, me = Number(H[0]);
      re <= 0 && (re = 12, me += 1);
      const Me = fe.getMonthDays(String(H[0]), String(H[1])), Fe = fe.getMonthDays(me + "", re + ""), Ue = {
        year: H[0],
        month: H[1]
      }, $e = {
        curData: H,
        title: o("monthTitle", Ue.year, Ue.month),
        monthData: [
          ...K(
            ae,
            "prev",
            { month: String(re), year: String(me) },
            Fe
          ),
          ...O(Me, "curr", Ue)
        ],
        cssHeight: 0,
        cssScrollHeight: 0
      };
      $e.cssHeight = 39 + ($e.monthData.length > 35 ? 384 : 320);
      let Ne = 0;
      u.monthsData.length > 0 && (Ne = u.monthsData[u.monthsData.length - 1].cssScrollHeight + u.monthsData[u.monthsData.length - 1].cssHeight), $e.cssScrollHeight = Ne, J == "next" ? (!u.endData || !fe.compareDate(
        `${u.endData[0]}-${u.endData[1]}-${fe.getMonthDays(u.endData[0], u.endData[1])}`,
        `${H[0]}-${H[1]}-${H[2]}`
      )) && u.monthsData.push($e) : !u.startData || !fe.compareDate(
        `${H[0]}-${H[1]}-${H[2]}`,
        `${u.startData[0]}-${u.startData[1]}-01`
      ) ? u.monthsData.unshift($e) : u.unLoadPrev = !0;
    }, le = () => {
      let H = e.startDate ? e.startDate : fe.getDay(0), J = e.endDate ? e.endDate : fe.getDay(365);
      u.propStartDate = H, u.propEndDate = J, u.startData = g(H), u.endData = g(J), (e.defaultValue || Array.isArray(e.defaultValue) && e.defaultValue.length > 0) && (u.currDate = e.type !== "one" ? [...e.defaultValue] : e.defaultValue);
      const ae = {
        year: Number(u.startData[0]),
        month: Number(u.startData[1])
      }, re = {
        year: Number(u.endData[0]),
        month: Number(u.endData[1])
      };
      let me = re.month - ae.month;
      re.year - ae.year > 0 && (me = me + 12 * (re.year - ae.year)), me <= 0 && (me = 1), G(u.startData, "next");
      let Me = 1;
      do
        G(P("next"), "next");
      while (Me++ < me);
      if (u.monthsNum = me, e.type == "range" && Array.isArray(u.currDate))
        u.currDate.length > 0 && (H && fe.compareDate(u.currDate[0], H) && u.currDate.splice(0, 1, H), J && fe.compareDate(J, u.currDate[1]) && u.currDate.splice(1, 1, J), u.defaultData = [...g(u.currDate[0]), ...g(u.currDate[1])]);
      else if (e.type == "multiple" && Array.isArray(u.currDate)) {
        if (u.currDate.length > 0) {
          let We = [], He = {};
          u.currDate.forEach((Ke) => {
            H && !fe.compareDate(Ke, H) && J && !fe.compareDate(J, Ke) && (Object.hasOwnProperty.call(He, Ke) || (We.push(Ke), He[Ke] = Ke));
          }), u.currDate = [...We], u.defaultData = [...g(We[0])];
        }
      } else if (e.type == "week" && Array.isArray(u.currDate)) {
        if (u.currDate.length > 0) {
          let [We, He, Ke] = g(u.currDate[0]), Rt = fe.getWeekDate(We, He, Ke, e.firstDayOfWeek);
          u.currDate = Rt, H && fe.compareDate(u.currDate[0], H) && u.currDate.splice(0, 1, H), J && fe.compareDate(J, u.currDate[1]) && u.currDate.splice(1, 1, J), u.defaultData = [...g(u.currDate[0]), ...g(u.currDate[1])];
        }
      } else
        u.currDate && (H && fe.compareDate(u.currDate, H) ? u.currDate = H : J && !fe.compareDate(u.currDate, J) && (u.currDate = J), u.defaultData = [...g(u.currDate)]);
      let Fe = 0, Ue = 0;
      u.defaultData.length > 0 && u.monthsData.forEach((We, He) => {
        We.title == o("monthTitle", u.defaultData[0], u.defaultData[1]) && (Fe = He), (e.type == "range" || e.type == "week") && We.title == o("monthTitle", u.defaultData[3], u.defaultData[4]) && (Ue = He);
      }), R(me, Fe), u.currentIndex = Fe, u.yearMonthTitle = u.monthsData[u.currentIndex].title, u.defaultData.length > 0 && (u.isRange ? (C({ day: u.defaultData[2], type: "curr" }, u.monthsData[u.currentIndex], !0), C({ day: u.defaultData[5], type: "curr" }, u.monthsData[Ue], !0)) : e.type == "week" ? C({ day: u.defaultData[2], type: "curr" }, u.monthsData[u.currentIndex], !0) : e.type == "multiple" ? [...u.currDate].forEach((We) => {
        let He = g(We), Ke = u.currentIndex;
        u.monthsData.forEach((Rt, Ko) => {
          Rt.title == o("monthTitle", He[0], He[1]) && (Ke = Ko);
        }), C({ day: He[2], type: "curr" }, u.monthsData[Ke], !0);
      }) : C({ day: u.defaultData[2], type: "curr" }, u.monthsData[u.currentIndex], !0));
      let $e = u.monthsData[u.monthsData.length - 1], Ne = $e.cssHeight + $e.cssScrollHeight;
      Re(() => {
        r != null && r.value && (i != null && i.value) && (d != null && d.value) && (v.value = r.value.clientHeight, i.value.style.height = `${Ne}px`, r.value.scrollTop = u.monthsData[u.currentIndex].cssScrollHeight);
      }), u.avgHeight = Math.floor(Ne / (me + 1));
    };
    l({
      scrollToDate: (H) => {
        fe.compareDate(H, u.propStartDate) ? H = u.propStartDate : fe.compareDate(H, u.propEndDate) || (H = u.propEndDate);
        let J = g(H);
        u.monthsData.forEach((ae, re) => {
          if (ae.title == o("monthTitle", J[0], J[1]) && r.value) {
            let me = u.monthsData[re].cssScrollHeight - r.value.scrollTop;
            if (e.toDateAnimation) {
              let Me = 0, Fe = setInterval(() => {
                if (Me++, r.value) {
                  let Ue = me / 10;
                  r.value.scrollTop = r.value.scrollTop + Ue;
                }
                Me >= 10 && (clearInterval(Fe), r.value && (r.value.scrollTop = u.monthsData[re].cssScrollHeight));
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
    const R = (H, J) => {
      H >= 3 ? J > 0 && J < H ? u.defaultRange = [J - 1, J + 3] : J == 0 ? u.defaultRange = [J, J + 4] : J == H && (u.defaultRange = [J - 2, J + 2]) : u.defaultRange = [0, H + 2];
      let ae = u.monthsData[u.defaultRange[0]].cssScrollHeight;
      u.translateY = ae;
    }, te = (H, J) => (e.type == "range" || e.type == "week") && H.type == "curr" && B(H, J).includes("nut-calendar__day--active"), X = (H, J) => te(H, J) && m(_(H, J)), se = (H, J) => u.currDate.length >= 2 && w(_(H, J)) ? te(H, J) : !1, ue = () => {
      if (u.currDate.length >= 2)
        return fe.isEqual(u.currDate[0], u.currDate[1]);
    }, pe = (H) => {
      const J = `${H.year}-${H.month}-${Number(H.day) < 10 ? "0" + H.day : H.day}`;
      return fe.isEqual(J, fe.date2Str(/* @__PURE__ */ new Date()));
    }, we = (H) => {
      if (u.monthsData.length <= 1)
        return;
      const J = H.target.scrollTop;
      let ae = Math.floor(J / u.avgHeight);
      if (ae == 0)
        J >= u.monthsData[ae + 1].cssScrollHeight && (ae += 1);
      else if (ae > 0 && ae < u.monthsNum - 1)
        J >= u.monthsData[ae + 1].cssScrollHeight && (ae += 1), J < u.monthsData[ae].cssScrollHeight && (ae -= 1);
      else {
        const re = Math.round(J + v.value);
        re < u.monthsData[ae].cssScrollHeight + u.monthsData[ae].cssHeight && J > u.monthsData[ae - 1].cssScrollHeight && (ae -= 1), ae + 1 <= u.monthsNum && re >= u.monthsData[ae + 1].cssScrollHeight + u.monthsData[ae + 1].cssHeight && (ae += 1), ae >= 1 && J < u.monthsData[ae - 1].cssScrollHeight && (ae -= 1);
      }
      u.currentIndex !== ae && (u.currentIndex = ae, R(u.monthsNum, ae)), u.yearMonthTitle = u.monthsData[ae].title;
    }, Be = () => {
      u.chooseData.splice(0), u.monthsData.splice(0), le();
    };
    return ve(() => {
      le();
    }), Q(
      () => e.defaultValue,
      (H) => {
        H && e.poppable && Be();
      }
    ), de(q(q({
      weeks: s,
      compConthsData: y,
      showTopBtn: b,
      topInfo: $,
      bottomInfo: k,
      rangeTip: ue,
      mothsViewScroll: we,
      getClass: B,
      isStartTip: X,
      isEndTip: se,
      chooseDay: C,
      isCurrDay: pe,
      confirm: M,
      months: r
    }, he(u)), he(e)), {
      translate: o,
      monthsPanel: i,
      weeksPanel: p,
      viewArea: d
    });
  }
}), Xd = { class: "nut-calendar__header" }, qd = {
  key: 0,
  class: "nut-calendar__header-title"
}, Zd = {
  key: 1,
  class: "nut-calendar__header-slot"
}, Gd = {
  key: 2,
  class: "nut-calendar__header-subtitle"
}, Jd = {
  ref: "weeksPanel",
  class: "nut-calendar__weekdays"
}, Qd = {
  ref: "monthsPanel",
  class: "nut-calendar__panel"
}, xd = { class: "nut-calendar__month-title" }, ef = { class: "nut-calendar__days" }, tf = ["onClick"], nf = { class: "nut-calendar__day-value" }, of = {
  key: 0,
  class: "nut-calendar__day-tips nut-calendar__day-tips--top"
}, lf = {
  key: 1,
  class: "nut-calendar__day-tips nut-calendar__day-tips--bottom"
}, sf = {
  key: 2,
  class: "nut-calendar__day-tips--curr"
}, af = {
  key: 4,
  class: "nut-calendar__day-tip"
}, rf = {
  key: 0,
  class: "nut-calendar__footer"
};
function uf(e, t, n, l, o, a) {
  return c(), f("view", {
    class: L(["nut-calendar", {
      "nut-calendar--nopop": !e.poppable,
      "nut-calendar--nofooter": e.isAutoBackFill
    }])
  }, [
    h("view", Xd, [
      e.showTitle ? (c(), f("view", qd, E(e.title || e.translate("title")), 1)) : N("", !0),
      e.showTopBtn ? (c(), f("view", Zd, [
        I(e.$slots, "btn")
      ])) : N("", !0),
      e.showSubTitle ? (c(), f("view", Gd, E(e.yearMonthTitle), 1)) : N("", !0),
      h("view", Jd, [
        (c(!0), f(x, null, ie(e.weeks, (s, r) => (c(), f("view", {
          key: r,
          class: L(["nut-calendar__weekday", { weekend: s.weekend }])
        }, E(s.day), 3))), 128))
      ], 512)
    ]),
    h("view", {
      ref: "months",
      class: "nut-calendar__content",
      onScroll: t[0] || (t[0] = (...s) => e.mothsViewScroll && e.mothsViewScroll(...s))
    }, [
      h("view", Qd, [
        h("view", {
          ref: "viewArea",
          class: "nut-calendar__body",
          style: A({ transform: `translateY(${e.translateY}px)` })
        }, [
          (c(!0), f(x, null, ie(e.compConthsData, (s, r) => (c(), f("view", {
            key: r,
            class: "nut-calendar__month"
          }, [
            h("view", xd, E(s.title), 1),
            h("view", ef, [
              h("view", {
                class: L(["nut-calendar__days-item", e.type === "range" ? "nut-calendar__days-item--range" : ""])
              }, [
                (c(!0), f(x, null, ie(s.monthData, (i, p) => (c(), f("view", {
                  key: p,
                  class: L(["nut-calendar__day", e.getClass(i, s, p)]),
                  onClick: (d) => e.chooseDay(i, s)
                }, [
                  h("view", nf, [
                    I(e.$slots, "day", {
                      date: i.type == "curr" ? i : ""
                    }, () => [
                      ge(E(i.type == "curr" ? i.day : ""), 1)
                    ])
                  ]),
                  e.topInfo ? (c(), f("view", of, [
                    I(e.$slots, "top-info", {
                      date: i.type == "curr" ? i : ""
                    })
                  ])) : N("", !0),
                  e.bottomInfo ? (c(), f("view", lf, [
                    I(e.$slots, "bottom-info", {
                      date: i.type == "curr" ? i : ""
                    })
                  ])) : N("", !0),
                  !e.bottomInfo && e.showToday && e.isCurrDay(i) ? (c(), f("view", sf, E(e.translate("today")), 1)) : N("", !0),
                  e.isStartTip(i, s) ? (c(), f("view", {
                    key: 3,
                    class: L(["nut-calendar__day-tip", { "nut-calendar__day-tips--top": e.rangeTip() }])
                  }, E(e.startText || e.translate("start")), 3)) : N("", !0),
                  e.isEndTip(i, s) ? (c(), f("view", af, E(e.endText || e.translate("end")), 1)) : N("", !0)
                ], 10, tf))), 128))
              ], 2)
            ])
          ]))), 128))
        ], 4)
      ], 512)
    ], 544),
    e.poppable && !e.isAutoBackFill ? (c(), f("view", rf, [
      I(e.$slots, "footer-info", { date: e.chooseData }, () => [
        h("view", {
          class: "nut-calendar__confirm",
          onClick: t[1] || (t[1] = (...s) => e.confirm && e.confirm(...s))
        }, E(e.confirmText || e.translate("confirm")), 1)
      ])
    ])) : N("", !0)
  ], 2);
}
const cf = /* @__PURE__ */ Z(Kd, [["render", uf]]), { create: df } = U("calendar"), ff = df({
  components: {
    NutCalendarItem: cf,
    NutPopup: ze
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
      default: fe.getDay(0)
    },
    endDate: {
      type: String,
      default: fe.getDay(365)
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
    const o = D({
      get() {
        return e.visible;
      },
      set(w) {
        t("update:visible", w);
      }
    }), a = D(() => n.btn), s = D(() => n["top-info"]), r = D(() => n.day), i = D(() => n["bottom-info"]), p = D(() => n["footer-info"]), d = z(null);
    l({
      scrollToDate: (w) => {
        var S;
        (S = d.value) == null || S.scrollToDate(w);
      },
      initPosition: () => {
        var w;
        (w = d.value) == null || w.initPosition();
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
        (w = d.value) == null || w.initPosition();
      },
      update: b,
      close: $,
      select: (w) => {
        t("select", w);
      },
      choose: (w) => {
        $(), t("choose", w);
      },
      calendarRef: d,
      showTopBtn: a,
      topInfo: s,
      dayInfo: r,
      bottomInfo: i,
      footerInfo: p
    };
  }
});
function pf(e, t, n, l, o, a) {
  const s = W("nut-calendar-item"), r = W("nut-popup");
  return e.poppable ? (c(), ee(r, wt({
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
            I(e.$slots, "btn")
          ]),
          key: "0"
        } : void 0,
        e.dayInfo ? {
          name: "day",
          fn: ne((i) => [
            I(e.$slots, "day", {
              date: i.date
            })
          ]),
          key: "1"
        } : void 0,
        e.topInfo ? {
          name: "top-info",
          fn: ne((i) => [
            I(e.$slots, "top-info", {
              date: i.date
            })
          ]),
          key: "2"
        } : void 0,
        e.bottomInfo ? {
          name: "bottom-info",
          fn: ne((i) => [
            I(e.$slots, "bottom-info", {
              date: i.date
            })
          ]),
          key: "3"
        } : void 0,
        e.footerInfo ? {
          name: "footer-info",
          fn: ne((i) => [
            I(e.$slots, "footer-info", {
              date: i.date
            })
          ]),
          key: "4"
        } : void 0
      ]), 1032, ["type", "is-auto-back-fill", "poppable", "title", "default-value", "start-date", "end-date", "confirm-text", "start-text", "end-text", "show-today", "show-title", "show-sub-title", "to-date-animation", "first-day-of-week", "disabled-date", "onUpdate", "onClose", "onChoose", "onSelect"])
    ]),
    _: 3
  }, 16, ["visible", "lock-scroll", "onOpened"])) : (c(), ee(s, {
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
        I(e.$slots, "btn")
      ]),
      key: "0"
    } : void 0,
    e.dayInfo ? {
      name: "day",
      fn: ne((i) => [
        I(e.$slots, "day", {
          date: i.date
        })
      ]),
      key: "1"
    } : void 0,
    e.topInfo ? {
      name: "top-info",
      fn: ne((i) => [
        I(e.$slots, "top-info", {
          date: i.date
        })
      ]),
      key: "2"
    } : void 0,
    e.bottomInfo ? {
      name: "bottom-info",
      fn: ne((i) => [
        I(e.$slots, "bottom-info", {
          date: i.date
        })
      ]),
      key: "3"
    } : void 0
  ]), 1032, ["type", "is-auto-back-fill", "poppable", "title", "confirm-text", "start-text", "end-text", "default-value", "start-date", "end-date", "show-title", "show-sub-title", "to-date-animation", "show-today", "first-day-of-week", "disabled-date", "onUpdate", "onClose", "onChoose", "onSelect"]));
}
const mf = /* @__PURE__ */ Z(ff, [["render", pf]]), hf = () => be(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "18",
    viewBox: "0 0 18 18"
  },
  [
    be("path", {
      d: "M6.605 9.49a.771.771 0 0 1 0-.98l3.6-4.372a.771.771 0 0 1 1.19.981L8.2 9l3.197 3.881a.771.771 0 1 1-1.191.98l-3.6-4.37Z"
    })
  ]
), gf = () => be(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "18",
    viewBox: "0 0 18 18"
  },
  [
    be("path", {
      d: "M11.396 9.49a.771.771 0 0 0 0-.98l-3.6-4.372a.771.771 0 0 0-1.191.981L9.8 9l-3.196 3.881a.771.771 0 0 0 1.19.98l3.6-4.37Z"
    })
  ]
), yf = () => be(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "18",
    viewBox: "0 0 18 18"
  },
  [
    be("path", {
      d: "M13.853 4.026a.771.771 0 0 1 .12 1.085L10.864 9l3.11 3.889a.771.771 0 1 1-1.204.963L9.272 9.482a.771.771 0 0 1 0-.964l3.497-4.371a.771.771 0 0 1 1.084-.12Zm-5.245 0a.771.771 0 0 1 .12 1.085L5.617 9l3.111 3.889a.771.771 0 0 1-1.205.963L4.026 9.482a.771.771 0 0 1 0-.964l3.497-4.371a.771.771 0 0 1 1.085-.12Z"
    })
  ]
), vf = () => be(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "18",
    viewBox: "0 0 18 18"
  },
  [
    be("path", {
      d: "M4.147 13.974a.771.771 0 0 1-.12-1.085L7.136 9 4.028 5.11a.771.771 0 1 1 1.204-.963l3.497 4.371a.771.771 0 0 1 0 .964l-3.497 4.371a.771.771 0 0 1-1.084.12Zm5.245 0a.771.771 0 0 1-.12-1.085L12.383 9 9.272 5.11a.771.771 0 1 1 1.205-.963l3.497 4.371a.771.771 0 0 1 0 .964l-3.497 4.371a.771.771 0 0 1-1.085.12Z"
    })
  ]
), ot = (e) => e ? {
  year: e.getFullYear(),
  month: e.getMonth() + 1,
  date: e.getDate()
} : null, Zt = (e) => e ? new Date(e.year, e.month - 1, e.date) : null, Mn = (e) => Array.isArray(e) ? e.map((t) => ot(t)) : e ? [ot(e)] : [], $f = (e) => Array.isArray(e) ? e.map((t) => Zt(t)) : e ? [Zt(e)] : [], bf = (e, t, n) => {
  let l = t - 1, o = e;
  l <= 0 && (l = 12, o -= 1);
  let a = fe.getMonthPreDay(e, t);
  a -= n, a >= 7 && (a -= 7);
  const s = fe.getMonthDays(`${o}`, `${l}`);
  return Array.from(Array(s), (i, p) => ({
    type: "prev",
    year: o,
    month: l,
    date: p + 1
  })).slice(s - a);
}, wf = (e, t) => {
  const n = fe.getMonthDays(`${e}`, `${t}`);
  return Array.from(Array(n), (l, o) => ({
    type: "current",
    year: e,
    month: t,
    date: o + 1
  }));
}, kf = (e, t) => {
  const n = new Date(e.year, e.month - 1, e.date), l = (n.getDay() + 7 - t) % 7;
  return [
    ot(new Date(n.getTime() - 24 * 60 * 60 * 1e3 * l)),
    ot(new Date(n.getTime() + 24 * 60 * 60 * 1e3 * (6 - l)))
  ];
}, Cf = (e, t) => {
  const n = e.year, l = e.month, o = [...bf(n, l, t), ...wf(n, l)], a = o.length, s = e.month === 12 ? e.year + 1 : e.year, r = e.month === 12 ? 1 : e.month + 1;
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
}, it = (e, t) => nt(e, t) === 0, Sf = { class: "nut-calendarcard" }, Tf = { class: "nut-calendarcard-header" }, Nf = { class: "nut-calendarcard-header-left" }, Df = { class: "nut-calendarcard-header-title" }, _f = { class: "nut-calendarcard-header-right" }, If = { class: "nut-calendarcard-content" }, Bf = { class: "nut-calendarcard-days" }, Mf = { class: "nut-calendarcard-days" }, Lf = ["onClick"], Ef = { class: "nut-calendarcard-day-top" }, Pf = { class: "nut-calendarcard-day-inner" }, Af = { class: "nut-calendarcard-day-bottom" }, Ln = "NutCalendarCard", So = /* @__PURE__ */ Le({
  name: Ln,
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
    const l = e, o = n, a = Ce(Ln), r = z((() => {
      let B = new Date(Date.now());
      const M = l.modelValue;
      return Array.isArray(M) ? M.length && (B = M[0]) : M && (B = M), {
        year: B.getFullYear(),
        month: B.getMonth() + 1
      };
    })()), i = z([]), p = D(() => {
      const B = a("weekdays").map((M, C) => ({
        name: M,
        key: C
      }));
      return [...B.slice(l.firstDayOfWeek, 7), ...B.slice(0, l.firstDayOfWeek)];
    }), d = z(l.modelValue ? Mn(l.modelValue) : []);
    bt(() => {
      const B = l.modelValue ? Mn(l.modelValue) : [];
      d.value = B;
    });
    const v = (B) => {
      if (d.value = B, l.type === "single") {
        const M = Zt(B[0]);
        o("update:modelValue", M), o("change", M);
      } else if (l.type === "multiple" || l.type === "range" || l.type === "week") {
        const M = $f(B);
        o("update:modelValue", M), o("change", M);
      }
    };
    bt(() => {
      const B = Cf(r.value, l.firstDayOfWeek);
      i.value = B, o("pageChange", r.value);
    });
    const y = (B) => !!(l.disableDay && l.disableDay(B) || l.startDate && Number(nt(B, ot(l.startDate))) < 0 || l.endDate && Number(nt(B, ot(l.endDate))) > 0), b = (B) => {
      if (l.type === "single" || l.type === "multiple") {
        for (const M in d.value)
          if (it(B, d.value[M]))
            return !0;
      } else if (l.type === "range" && d.value.length === 1 && it(d.value[0], B))
        return !0;
      return !1;
    }, $ = (B) => (l.type === "range" || l.type === "week") && d.value.length === 2 && it(B, d.value[0]), k = (B) => (l.type === "range" || l.type === "week") && d.value.length === 2 && it(B, d.value[1]), u = (B) => {
      if ((l.type === "range" || l.type === "week") && d.value.length === 2) {
        const M = nt(d.value[0], B), C = nt(B, d.value[1]);
        if (M && M < 0 && C && C < 0)
          return !0;
      }
      return !1;
    }, g = (B) => {
      const M = new Date(B.year, B.month - 1, B.date).getDay();
      return M === 0 || M === 6;
    }, m = (B) => {
      if (y(B))
        return ["disabled"];
      const M = [];
      return B.type === "current" && (b(B) && M.push("active"), $(B) && M.push("start"), k(B) && M.push("end"), u(B) && M.push("mid"), g(B) && M.push("weekend")), M;
    }, w = (B, M) => {
      if (l.startDate) {
        const C = nt(
          {
            year: B,
            month: M,
            date: 31
          },
          ot(l.startDate)
        );
        if (C && C < 0)
          return;
      }
      if (l.endDate) {
        const C = nt(
          {
            year: B,
            month: M,
            date: 1
          },
          ot(l.endDate)
        );
        if (C && C > 0)
          return;
      }
      r.value = {
        year: B,
        month: M
      };
    }, S = (B = 1) => {
      const M = r.value.year * 12 + r.value.month;
      let C = (M + B) % 12;
      C === 0 && (C = 12);
      const T = Math.floor((M + B - C) / 12);
      w(T, C);
    }, _ = (B) => {
      if (!(B.type === "prev" || B.type === "next" || y(B)))
        switch (o("dayClick", B), l.type) {
          case "single": {
            d.value[0] && it(d.value[0], B) ? v([]) : v([B]);
            break;
          }
          case "multiple": {
            const M = d.value.find((C) => it(C, B));
            v(M ? d.value.filter((C) => C !== M) : [...d.value, B]);
            break;
          }
          case "range": {
            const M = d.value.length;
            if (M === 0 || M === 2)
              v([B]);
            else if (M === 1) {
              const C = nt(d.value[0], B);
              C == null ? v([]) : C < 0 ? v([d.value[0], B]) : v([B, d.value[0]]);
            } else
              console.warn("[NutUI] Calendar range error");
            break;
          }
          case "week": {
            if (d.value.length === 2 || d.value.length === 0) {
              const [M, C] = kf(B, l.firstDayOfWeek);
              v([M, C]);
            } else
              console.warn("[NutUI] Calendar week error");
            break;
          }
          default:
            console.warn("[NutUI] Calendar type error");
        }
    };
    return t({
      jump: S,
      jumpTo: w
    }), (B, M) => Se((c(), f("div", Sf, [
      h("div", Tf, [
        h("div", Nf, [
          h("div", {
            class: "double-left",
            onClick: M[0] || (M[0] = (C) => S(-12))
          }, [
            oe(ke(yf))
          ]),
          h("div", {
            class: "left",
            onClick: M[1] || (M[1] = (C) => S(-1))
          }, [
            oe(ke(hf))
          ])
        ]),
        h("div", Df, E(ke(a)("monthTitle", r.value.year, r.value.month)), 1),
        h("div", _f, [
          h("div", {
            class: "right",
            onClick: M[2] || (M[2] = (C) => S(1))
          }, [
            oe(ke(gf))
          ]),
          h("div", {
            class: "double-right",
            onClick: M[3] || (M[3] = (C) => S(12))
          }, [
            oe(ke(vf))
          ])
        ])
      ]),
      h("div", If, [
        h("div", Bf, [
          (c(!0), f(x, null, ie(p.value, (C) => (c(), f("div", {
            key: C.name,
            class: L(["nut-calendarcard-day header", C.key === 0 || C.key === 6 ? "weekend" : ""])
          }, E(C.name), 3))), 128))
        ]),
        h("div", Mf, [
          (c(!0), f(x, null, ie(i.value, (C) => (c(), f("div", {
            key: `${C.year}-${C.month}-${C.date}`,
            class: L(["nut-calendarcard-day", [C.type, ...m(C)]]),
            onClick: (T) => _(C)
          }, [
            h("div", Ef, [
              I(B.$slots, "top", { day: C })
            ]),
            h("div", Pf, [
              I(B.$slots, "default", { day: C }, () => [
                ge(E(C.date), 1)
              ])
            ]),
            h("div", Af, [
              I(B.$slots, "bottom", { day: C })
            ])
          ], 10, Lf))), 128))
        ])
      ])
    ], 512)), [
      [Ie, i.value.length > 0]
    ]);
  }
});
Ae(So);
const To = Symbol("nut-checkbox"), { create: zf, componentName: tt } = U("checkbox"), Vf = zf({
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
    const l = Ze(xe(e, "disabled")), o = Ee(To, null), a = ce({
      partialSelect: e.indeterminate
    }), s = D(() => !!o), r = D(() => s.value ? o.value.value.includes(e.label) : e.modelValue), i = D(() => s.value && o.disabled.value ? o.disabled.value : l.value), p = D(() => !!e.modelValue), d = D(() => i.value ? "nut-checkbox__icon--disable" : a.partialSelect ? "nut-checkbox__icon--indeterminate" : r.value ? "nut-checkbox__icon" : "nut-checkbox__icon--unchecked");
    let v = "";
    const y = (g, m) => {
      v = "click", t("update:modelValue", g), t("change", g, m);
    };
    Q(
      () => e.modelValue,
      (g) => {
        v == "click" ? v = "" : t("change", g);
      }
    );
    const b = () => {
      const { iconSize: g } = e, m = {
        CheckNormal: n.icon ? n.icon : Kt,
        Checked: n.checkedIcon ? n.checkedIcon : Gn,
        CheckDisabled: n.indeterminate ? n.indeterminate : Bl
      }, w = a.partialSelect ? m.CheckDisabled : r.value ? m.Checked : m.CheckNormal, S = _e(g);
      return be(w, {
        width: S,
        height: S,
        size: S,
        class: d.value
      });
    }, $ = () => {
      var g;
      return be(
        "view",
        {
          class: `${tt}__label ${i.value ? `${tt}__label--disabled` : ""}`
        },
        (g = n.default) == null ? void 0 : g.call(n)
      );
    }, k = () => {
      var g;
      return be(
        "view",
        {
          class: `${tt}__button ${r.value && `${tt}__button--active`} ${i.value ? `${tt}__button--disabled` : ""}`
        },
        (g = n.default) == null ? void 0 : g.call(n)
      );
    }, u = () => {
      var g, m;
      if (!i.value) {
        if (p.value && a.partialSelect) {
          a.partialSelect = !1, y(p.value, (g = n.default) == null ? void 0 : g.call(n)[0].children);
          return;
        }
        if (y(!p.value, (m = n.default) == null ? void 0 : m.call(n)[0].children), s.value) {
          const w = o.value.value, S = o.max.value, { label: _ } = e, B = w.indexOf(_);
          B > -1 ? w.splice(B, 1) : B <= -1 && (w.length < S || !S) && w.push(_), o.updateValue(w);
        }
      }
    };
    return ve(() => {
      s.value && o.link(je());
    }), xt(() => {
      s.value && o.unlink(je());
    }), Q(
      () => e.indeterminate,
      (g) => {
        a.partialSelect = g;
      }
    ), () => be(
      "view",
      {
        class: `${tt} ${tt}--${e.shape} ${e.textPosition === "left" ? `${tt}--reverse` : ""}`,
        onClick: u
      },
      [e.shape == "button" ? k() : [b(), $()]]
    );
  }
}), { create: Of, componentName: Hf } = U("checkbox-group"), Rf = Of({
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
    const o = ce({
      children: []
    }), a = (d) => {
      d.proxy && o.children.push(d.proxy);
    }, s = (d) => {
      d.proxy && (o.children = o.children.filter((v) => v !== d.proxy));
    }, r = (d) => {
      n("update:modelValue", d), n("change", d);
    }, i = (d) => {
      const v = [];
      d && o.children.forEach((y) => {
        y != null && y.disabled || v.push(y == null ? void 0 : y.label);
      }), n("update:modelValue", v);
    }, p = () => {
      const d = o.children.filter((v) => v != null && v.disabled ? !1 : !e.modelValue.includes(v.label)).map((v) => v.label);
      n("update:modelValue", d);
    };
    return Pe(To, {
      value: D(() => e.modelValue),
      disabled: D(() => e.disabled),
      max: D(() => e.max),
      updateValue: r,
      link: a,
      unlink: s
    }), Q(
      () => e.modelValue,
      (d) => {
        n("change", d);
      }
    ), l({ toggleAll: i, toggleReverse: p }), () => {
      var d;
      return be(
        "view",
        {
          class: Hf
        },
        (d = t.default) == null ? void 0 : d.call(t)
      );
    };
  }
}), Ff = {
  text: "text",
  value: "value",
  children: "children",
  className: "className"
}, Wf = (e, t) => {
  const n = ce({
    formattedColumns: e.columns
  }), l = D(() => q(q({}, Ff), e.fieldNames)), o = z([]), a = D(() => {
    const u = l.value;
    return d.value.map((g, m) => {
      const w = g.findIndex((S) => S[u.value] === o.value[m]);
      return w === -1 ? 0 : w;
    });
  }), s = z([]), r = (u) => {
    u && s.value.length < d.value.length && s.value.push(u);
  }, i = D(() => {
    const u = l.value;
    return d.value.map((g, m) => g.find((w) => w[u.value] === o.value[m]) || g[0]);
  }), p = D(() => {
    const u = n.formattedColumns[0], g = l.value;
    if (u) {
      if (Array.isArray(u))
        return "multiple";
      if (g.children in u)
        return "cascade";
    }
    return "single";
  }), d = D(() => {
    let u = [];
    switch (p.value) {
      case "multiple":
        u = n.formattedColumns;
        break;
      case "cascade":
        u = v(
          n.formattedColumns,
          o.value ? o.value : []
        );
        break;
      default:
        u = [n.formattedColumns];
        break;
    }
    return u;
  }), v = (u, g) => {
    const m = [], w = l.value;
    let S = {
      text: "",
      value: "",
      [w.children]: u
    }, _ = 0;
    for (; S && S[w.children]; ) {
      const B = S[w.children], M = g[_];
      let C = B.findIndex((T) => T[w.value] === M);
      C === -1 && (C = 0), S = S[w.children][C], _++, m.push(B);
    }
    return m;
  }, y = () => {
    t("cancel", {
      selectedValue: o.value,
      selectedOptions: i.value
    });
  }, b = (u, g) => {
    var w;
    const m = l.value;
    if (g && Object.keys(g).length) {
      if (o.value = o.value ? o.value : [], p.value === "cascade") {
        o.value[u] = (w = g[m.value]) != null ? w : "";
        let S = u, _ = g;
        for (; _ && _[m.children] && _[m.children][0]; )
          o.value[S + 1] = _[m.children][0][m.value], S++, _ = _[m.children][0];
        _ && _[m.children] && _[m.children].length === 0 && (o.value = o.value.slice(0, S + 1));
      } else
        o.value[u] = Object.prototype.hasOwnProperty.call(g, m.value) ? g[m.value] : "";
      t("change", {
        columnIndex: u,
        selectedValue: o.value,
        selectedOptions: i.value
      });
    }
  }, $ = () => {
    const u = l.value;
    o.value && !o.value.length && d.value.forEach((g) => {
      o.value.push(g[0][u.value]);
    }), t("confirm", {
      selectedValue: o.value,
      selectedOptions: i.value
    });
  }, k = (u, g) => JSON.stringify(u) === JSON.stringify(g);
  return Q(
    () => e.modelValue,
    (u) => {
      k(u, o.value) || (o.value = u);
    },
    { deep: !0, immediate: !0 }
  ), Q(
    o,
    (u) => {
      k(u, e.modelValue) || t("update:modelValue", u);
    },
    { deep: !0 }
  ), Q(
    () => e.columns,
    (u) => {
      n.formattedColumns = u;
    }
  ), de(q({}, he(n)), {
    columnsType: p,
    columnsList: d,
    columnFieldNames: l,
    cancel: y,
    changeHandler: b,
    confirm: $,
    defaultValues: o,
    defaultIndexes: a,
    pickerColumn: s,
    swipeRef: r,
    selectedOptions: i,
    isSameValue: k
  });
}, { create: Yf } = U("picker-column"), jf = Yf({
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
    const n = et(), l = ce({
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
    }), o = z(null), a = z(!1), s = z(0), r = z(0), i = 200, p = 300, d = 15, v = D(() => ({
      transition: `transform ${r.value}ms cubic-bezier(0.17, 0.89, 0.45, 1)`,
      transform: `rotate3d(1, 0, 0, ${s.value})`,
      top: `calc(50% - ${+e.optionHeight / 2}px)`
    })), y = D(() => {
      const { optionHeight: T } = e;
      return {
        transition: `transform ${r.value}ms cubic-bezier(0.17, 0.89, 0.45, 1)`,
        transform: `translate3d(0, ${l.scrollDistance}px, 0)`,
        top: `calc(50% - ${+T / 2}px)`,
        height: `${T}px`
      };
    }), b = (T) => `transform: rotate3d(1, 0, 0, ${-l.rotation * T}deg) translate3d(0px, 0px, 104px)`, $ = D(() => ({
      backgroundSize: `100% ${(+e.visibleOptionNum - 1) * +e.optionHeight / 2}px`
    })), k = (T) => {
      if (n.start(T), a.value && !e.taro) {
        const P = o.value, { transform: O } = window.getComputedStyle(P);
        if (e.threeDimensional) {
          const K = Math.floor(parseInt(s.value) / 360), G = +O.split(", ")[5], le = +O.split(", ")[6] < 0 ? 180 : 0, Y = K * 360 + Math.acos(G) / Math.PI * 180 + le;
          l.scrollDistance = -Math.abs((Y / l.rotation - 1) * +e.optionHeight);
        } else
          l.scrollDistance = +O.slice(7, O.length - 1).split(", ")[5];
      }
      ft(T, !0), l.touchParams.startY = n.deltaY.value, l.touchParams.startTime = Date.now(), l.transformY = l.scrollDistance;
    }, u = (T) => {
      n.move(T), n.isVertical() && (a.value = !0, ft(T, !0)), l.touchParams.lastY = n.deltaY.value;
      let P = l.touchParams.lastY - l.touchParams.startY;
      _(P);
    }, g = () => {
      l.touchParams.lastY = n.deltaY.value, l.touchParams.lastTime = Date.now();
      let T = l.touchParams.lastY - l.touchParams.startY, P = l.touchParams.lastTime - l.touchParams.startTime;
      if (P <= p && Math.abs(T) > d) {
        const O = m(T, P);
        _(O, "end", +e.swipeDuration);
        return;
      } else
        _(T, "end");
      setTimeout(() => {
        n.reset(), a.value = !1;
      }, 0);
    }, m = (T, P) => (T = Math.abs(T / P) / 3e-3 * (T < 0 ? -1 : 1), T), w = (T) => T >= l.currIndex + 8 || T <= l.currIndex - 8, S = (T = 0, P, O = i, K) => {
      P === "end" ? r.value = O : r.value = 0, s.value = K, l.scrollDistance = T;
    }, _ = (T, P, O) => {
      const { optionHeight: K } = e;
      let G = T + l.transformY;
      if (P === "end") {
        G > 0 && (G = 0), G < -(e.column.length - 1) * +K && (G = -(e.column.length - 1) * +K);
        let le = Math.round(G / +K) * +K, Y = `${(Math.abs(Math.round(le / +K)) + 1) * l.rotation}deg`;
        S(le, P, O, Y), l.currIndex = Math.abs(Math.round(le / +K)) + 1;
      } else {
        let le = 0, Y = (-G / +K + 1) * l.rotation;
        const j = (e.column.length + 1) * l.rotation, R = 0;
        le = Ve(Y, R, j), R < le && le < j && (S(G, null, void 0, le + "deg"), l.currIndex = Math.abs(Math.round(G / +K)) + 1);
      }
    }, B = () => {
      t("change", e.column[l.currIndex - 1]);
    }, M = (T) => {
      const { column: P } = e;
      let O = P.findIndex((G) => G[e.fieldNames.value] === e.value);
      l.currIndex = O === -1 ? 1 : O + 1;
      let K = O === -1 ? 0 : O * +e.optionHeight;
      T && B(), _(-K);
    }, C = () => {
      a.value = !1, r.value = 0, B();
    };
    return Q(
      () => e.column,
      () => {
        e.column && e.column.length > 0 && (l.transformY = 0, M(!1));
      },
      {
        deep: !0
      }
    ), Q(
      () => e.value,
      () => {
        l.transformY = 0, M(!1);
      },
      {
        deep: !0
      }
    ), ve(() => {
      M(!0);
    }), de(q(q({}, he(l)), he(e)), {
      setRollerStyle: b,
      isHidden: w,
      roller: o,
      onTouchStart: k,
      onTouchMove: u,
      onTouchEnd: g,
      touchRollerStyle: v,
      touchTileStyle: y,
      setMove: _,
      stopMomentum: C,
      pxCheck: _e,
      maskStyles: $
    });
  }
});
function Uf(e, t, n, l, o, a) {
  return c(), f("view", {
    class: "nut-picker__list",
    onTouchstart: t[1] || (t[1] = (...s) => e.onTouchStart && e.onTouchStart(...s)),
    onTouchmove: t[2] || (t[2] = (...s) => e.onTouchMove && e.onTouchMove(...s)),
    onTouchend: t[3] || (t[3] = (...s) => e.onTouchEnd && e.onTouchEnd(...s))
  }, [
    h("view", {
      ref: "roller",
      class: "nut-picker-roller",
      style: A(e.threeDimensional ? e.touchRollerStyle : e.touchTileStyle),
      onTransitionend: t[0] || (t[0] = (...s) => e.stopMomentum && e.stopMomentum(...s))
    }, [
      (c(!0), f(x, null, ie(e.column, (s, r) => {
        var i;
        return c(), f(x, {
          key: (i = s[e.fieldNames.value]) != null ? i : r
        }, [
          s && s[e.fieldNames.text] && e.threeDimensional ? (c(), f("view", {
            key: 0,
            class: L(["nut-picker-roller-item", {
              "nut-picker-roller-item-hidden": e.isHidden(r + 1),
              [s[e.fieldNames.className]]: s[e.fieldNames.className]
            }]),
            style: A(e.setRollerStyle(r + 1))
          }, E(s[e.fieldNames.text]), 7)) : N("", !0),
          s && s[e.fieldNames.text] && !e.threeDimensional ? (c(), f("view", {
            key: 1,
            class: L(["nut-picker-roller-item-tile", {
              [s[e.fieldNames.className]]: s[e.fieldNames.className]
            }]),
            style: A({ height: e.pxCheck(e.optionHeight), lineHeight: e.pxCheck(e.optionHeight) })
          }, E(s[e.fieldNames.text]), 7)) : N("", !0)
        ], 64);
      }), 128))
    ], 36),
    h("view", {
      class: "nut-picker-roller-mask",
      style: A(e.maskStyles)
    }, null, 4)
  ], 32);
}
const Kf = /* @__PURE__ */ Z(jf, [["render", Uf]]), Xf = {
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
}, { create: qf } = U("picker"), Zf = "NutPicker", Gf = qf({
  components: {
    NutPickerColumn: Kf
  },
  props: Xf,
  emits: ["cancel", "change", "confirm", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = Ce(Zf), { changeHandler: l, confirm: o, defaultValues: a, columnsList: s, columnsType: r, columnFieldNames: i, cancel: p } = Wf(
      e,
      t
    ), d = z([]), v = ($) => {
      $ && d.value.length < s.value.length && d.value.push($);
    }, y = D(() => {
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
        d.value.length > 0 && d.value.forEach(($) => {
          $.stopMomentum();
        }), o();
      },
      defaultValues: a,
      translate: n,
      pickerColumn: d,
      swipeRef: v,
      columnStyle: y
    };
  }
}), Jf = { class: "nut-picker" }, Qf = {
  key: 0,
  class: "nut-picker__bar"
}, xf = { class: "nut-picker__title" };
function ep(e, t, n, l, o, a) {
  const s = W("nut-picker-column");
  return c(), f("div", Jf, [
    e.showToolbar ? (c(), f("view", Qf, [
      h("view", {
        class: "nut-picker__left",
        onClick: t[0] || (t[0] = (...r) => e.cancel && e.cancel(...r))
      }, E(e.cancelText || e.translate("cancel")), 1),
      h("view", xf, E(e.title), 1),
      h("view", {
        class: "nut-picker__right",
        onClick: t[1] || (t[1] = (...r) => e.confirmHandler && e.confirmHandler(...r))
      }, E(e.okText || e.translate("confirm")), 1)
    ])) : N("", !0),
    I(e.$slots, "top"),
    h("view", {
      class: "nut-picker__column",
      style: A(e.columnStyle)
    }, [
      (c(!0), f(x, null, ie(e.columnsList, (r, i) => (c(), f("view", {
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
    I(e.$slots, "default")
  ]);
}
const No = /* @__PURE__ */ Z(Gf, [["render", ep]]), { create: tp } = U("date-picker"), En = (/* @__PURE__ */ new Date()).getFullYear();
function Yt(e) {
  return sl(e) && !isNaN(e.getTime());
}
const np = {
  day: "日",
  year: "年",
  month: "月",
  hour: "时",
  minute: "分",
  seconds: "秒"
}, op = tp({
  components: {
    NutPicker: No
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
      default: () => new Date(En - 10, 0, 1),
      validator: Yt
    },
    maxDate: {
      type: Date,
      default: () => new Date(En + 10, 11, 31),
      validator: Yt
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
    const n = ce({
      currentDate: /* @__PURE__ */ new Date(),
      title: e.title,
      selectedValue: []
    }), l = (u) => {
      Yt(u) || (u = e.minDate);
      let g = Math.max(u.getTime(), e.minDate.getTime());
      return g = Math.min(g, e.maxDate.getTime()), new Date(g);
    };
    function o(u, g) {
      return 32 - new Date(u, g - 1, 32).getDate();
    }
    const a = (u, g) => {
      const m = u == "min" ? e.minDate : e.maxDate, w = m.getFullYear();
      let S = 1, _ = 1, B = 0, M = 0;
      u === "max" && (S = 12, _ = o(g.getFullYear(), g.getMonth() + 1), B = 23, M = 59);
      let C = M;
      return g.getFullYear() === w && (S = m.getMonth() + 1, g.getMonth() + 1 === S && (_ = m.getDate(), g.getDate() === _ && (B = m.getHours(), g.getHours() === B && (M = m.getMinutes(), g.getMinutes() === M && (C = m.getSeconds()))))), {
        [`${u}Year`]: w,
        [`${u}Month`]: S,
        [`${u}Date`]: _,
        [`${u}Hour`]: B,
        [`${u}Minute`]: M,
        [`${u}Seconds`]: C
      };
    }, s = D(() => {
      const { maxYear: u, maxDate: g, maxMonth: m, maxHour: w, maxMinute: S, maxSeconds: _ } = a("max", n.currentDate), { minYear: B, minDate: M, minMonth: C, minHour: T, minMinute: P, minSeconds: O } = a("min", n.currentDate);
      return $([
        {
          type: "year",
          range: [B, u]
        },
        {
          type: "month",
          range: [C, m]
        },
        {
          type: "day",
          range: [M, g]
        },
        {
          type: "hour",
          range: [T, w]
        },
        {
          type: "minute",
          range: [P, S]
        },
        {
          type: "seconds",
          range: [O, _]
        }
      ]);
    }), r = D(() => s.value.map((g, m) => d(g.range[0], g.range[1], v(g.type), g.type, m))), i = ({
      columnIndex: u,
      selectedValue: g,
      selectedOptions: m
    }) => {
      let w = [];
      g.forEach((C) => {
        w.push(C);
      }), e.type == "month-day" && w.length < 3 && w.unshift(new Date(n.currentDate || e.minDate || e.maxDate).getFullYear()), e.type == "year-month" && w.length < 3 && w.push(new Date(n.currentDate || e.minDate || e.maxDate).getDate());
      const S = Number(w[0]), _ = Number(w[1]) - 1, B = Math.min(Number(w[2]), o(Number(w[0]), Number(w[1])));
      let M = null;
      if (e.type === "date" || e.type === "month-day" || e.type === "year-month")
        M = new Date(S, _, B);
      else if (e.type === "datetime")
        M = new Date(S, _, B, Number(w[3]), Number(w[4]));
      else if (e.type === "datehour")
        M = new Date(S, _, B, Number(w[3]));
      else if (e.type === "hour-minute" || e.type === "time") {
        M = new Date(n.currentDate);
        const C = M.getFullYear(), T = M.getMonth(), P = M.getDate();
        M = new Date(C, T, P, Number(w[0]), Number(w[1]), Number(w[2] || 0));
      }
      n.currentDate = l(M), t("change", { columnIndex: u, selectedValue: g, selectedOptions: m });
    }, p = (u, g) => {
      const { formatter: m, isShowChinese: w } = e;
      let S = null;
      if (m)
        S = m(u, { text: Qe(g, 2), value: Qe(g, 2) });
      else {
        const _ = Qe(g, 2), B = w ? np[u] : "";
        S = { text: _ + B, value: _ };
      }
      return S;
    }, d = (u, g, m, w, S) => {
      const _ = [];
      let B = 0;
      for (; u <= g; )
        _.push(p(w, u)), w === "minute" ? u += e.minuteStep : u++, u <= Number(m) && B++;
      return n.selectedValue[S] = _[B].value, e.filter ? e.filter(w, _) : _;
    }, v = (u) => u === "year" ? n.currentDate.getFullYear() : u === "month" ? n.currentDate.getMonth() + 1 : u === "day" ? n.currentDate.getDate() : u === "hour" ? n.currentDate.getHours() : u === "minute" ? n.currentDate.getMinutes() : u === "seconds" ? n.currentDate.getSeconds() : 0, y = (u) => {
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
      const g = [
        u.getFullYear(),
        u.getMonth() + 1,
        u.getDate(),
        u.getHours(),
        u.getMinutes(),
        u.getSeconds()
      ];
      return $(g.map((m) => String(m)));
    };
    return Fn(() => {
      n.currentDate = l(e.modelValue);
    }), Q(
      () => e.modelValue,
      (u) => {
        const g = l(u);
        JSON.stringify(g) === JSON.stringify(n.currentDate) || (n.currentDate = g, n.selectedValue = k(g));
      }
    ), Q(
      () => n.currentDate,
      (u) => {
        JSON.stringify(u) === JSON.stringify(e.modelValue) || t("update:modelValue", u);
      }
    ), Q(
      () => e.title,
      (u) => {
        n.title = u;
      }
    ), de(q({}, he(n)), {
      changeHandler: i,
      closeHandler: y,
      confirm: b,
      columns: r
    });
  }
});
function lp(e, t, n, l, o, a) {
  const s = W("nut-picker");
  return c(), ee(s, {
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
      I(e.$slots, "top")
    ]),
    default: ne(() => [
      I(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["modelValue", "ok-text", "cancel-text", "columns", "title", "three-dimensional", "swipe-duration", "show-toolbar", "visible-option-num", "option-height", "onCancel", "onChange", "onConfirm"]);
}
const sp = /* @__PURE__ */ Z(op, [["render", lp]]), ap = ["min", "max", "disabled", "readonly", "value"], zt = /* @__PURE__ */ Le({
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
    const n = e, l = t, o = Ze(xe(n, "disabled")), a = D(() => {
      const u = "nut-input-number";
      return {
        [u]: !0,
        [`${u}--disabled`]: o.value
      };
    }), s = (u) => Number(u).toFixed(Number(n.decimalPlaces)), r = (u) => {
      const g = u.target;
      l("update:modelValue", g.value, u), l("change", g.value, u);
    }, i = (u, g) => {
      let m = s(u);
      l("update:modelValue", m, g), Number(n.modelValue) !== Number(m) && l("change", m, g);
    }, p = (u = Number(n.modelValue)) => u < Number(n.max) && !o.value, d = (u = Number(n.modelValue)) => u > Number(n.min) && !o.value, v = (u) => {
      if (o.value)
        return;
      l("reduce", u);
      let g = Number(n.modelValue) - Number(n.step);
      d() && g >= Number(n.min) ? i(g, u) : (i(Number(n.min), u), l("overlimit", u, "reduce"));
    }, y = (u) => {
      if (o.value)
        return;
      l("add", u);
      let g = Number(n.modelValue) + Number(n.step);
      p() && g <= Number(n.max) ? i(g, u) : (i(Number(n.max), u), l("overlimit", u, "add"));
    }, b = (u) => {
      o.value || n.readonly || l("focus", u);
    }, $ = (u) => {
      if (o.value || n.readonly)
        return;
      const g = u.target;
      let m = Number(g.value);
      m < Number(n.min) ? m = Number(n.min) : m > Number(n.max) && (m = Number(n.max)), i(m, u), l("blur", u);
    }, k = (u) => {
      let g = Number(u);
      return g < Number(n.min) ? g = Number(n.min) : g > Number(n.max) && (g = Number(n.max)), g;
    };
    return Q(
      () => [n.max, n.min],
      () => {
        Number(n.min) > Number(n.max) && console.warn("[NutUI] <InputNumber>", "props.max < props.min");
        const u = k(n.modelValue);
        u !== Number(n.modelValue) && i(u, {});
      }
    ), (u, g) => (c(), f("view", {
      class: L(a.value)
    }, [
      h("view", {
        class: L(["nut-input-number__icon nut-input-number__left", { "nut-input-number__icon--disabled": !d() }]),
        onClick: v
      }, [
        I(u.$slots, "left-icon", {}, () => [
          oe(ke(Da), {
            width: ke(_e)(u.buttonSize),
            height: ke(_e)(u.buttonSize)
          }, null, 8, ["width", "height"])
        ])
      ], 2),
      h("input", {
        type: "number",
        min: u.min,
        max: u.max,
        style: A({ width: ke(_e)(u.inputWidth), height: ke(_e)(u.buttonSize) }),
        disabled: ke(o),
        readonly: u.readonly,
        value: u.modelValue,
        onInput: r,
        onBlur: $,
        onFocus: b
      }, null, 44, ap),
      h("view", {
        class: L(["nut-input-number__icon nut-input-number__right", { "nut-input-number__icon--disabled": !p() }]),
        onClick: y
      }, [
        I(u.$slots, "right-icon", {}, () => [
          oe(ke(Xa), {
            width: ke(_e)(u.buttonSize),
            height: ke(_e)(u.buttonSize)
          }, null, 8, ["width", "height"])
        ])
      ], 2)
    ], 2));
  }
});
Ae(zt);
function Pn(e, t, n) {
  const l = e.indexOf(t);
  return l === -1 ? e : t === "-" && l !== 0 ? e.slice(0, l) : e.slice(0, l + 1) + e.slice(l).replace(n, "");
}
function rp(e, t = !0, n = !0) {
  t ? e = Pn(e, ".", /\./g) : e = e.split(".")[0], n ? e = Pn(e, "-", /-/g) : e = e.replace(/-/, "");
  const l = t ? /[^-0-9.]/g : /[^-0-9]/g;
  return e.replace(l, "");
}
function ip(e) {
  return e === "number" ? {
    type: "text",
    inputmode: "decimal"
  } : e === "digit" ? {
    type: "tel",
    inputmode: "numeric"
  } : { type: e };
}
const { componentName: up, create: cp } = U("input"), dp = cp({
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
  components: { MaskClose: ka },
  emits: ["update:modelValue", "blur", "focus", "clear", "keypress", "click", "clickInput", "confirm"],
  expose: ["focus", "blur", "select"],
  setup(e, { emit: t }) {
    const n = Ze(xe(e, "disabled")), l = z(!1), o = z(), a = () => {
      var C;
      return String((C = e.modelValue) != null ? C : "");
    }, s = (C) => be("input", q({}, ip(C))), r = ce({
      focused: !1,
      validateFailed: !1,
      // 校验失败
      validateMessage: ""
      // 校验信息
    }), i = D(() => {
      const C = up;
      return {
        [C]: !0,
        [`${C}--disabled`]: n.value,
        [`${C}--required`]: e.required,
        [`${C}--error`]: e.error,
        [`${C}--border`]: e.border,
        [e.class]: !!e.class
      };
    }), p = D(() => ({
      textAlign: e.inputAlign
    })), d = (C) => {
      if (!C.target.composing) {
        let P = C.target.value;
        e.maxLength && P.length > Number(e.maxLength) && (P = P.slice(0, Number(e.maxLength))), v(P);
      }
    }, v = (C, T = "onChange") => {
      var P;
      if (["number", "digit"].includes(e.type)) {
        const O = e.type === "number";
        C = rp(C, O, O);
      }
      e.formatter && T === e.formatTrigger && (C = e.formatter(C)), ((P = o == null ? void 0 : o.value) == null ? void 0 : P.value) !== C && (o.value.value = C), C !== e.modelValue && t("update:modelValue", C);
    }, y = (C) => {
      n.value || e.readonly || (l.value = !0, t("focus", C));
    }, b = (C) => {
      if (n.value || e.readonly)
        return;
      setTimeout(() => {
        l.value = !1;
      }, 200);
      let P = C.target.value;
      e.maxLength && P.length > Number(e.maxLength) && (P = P.slice(0, Number(e.maxLength))), v(a(), "onBlur"), t("blur", C);
    }, $ = (C) => {
      C.stopPropagation(), !n.value && (t("update:modelValue", "", C), t("clear", "", C));
    }, k = () => {
      r.validateFailed && (r.validateFailed = !1, r.validateMessage = "");
    }, u = (C) => {
      n.value || t("clickInput", C);
    }, g = (C) => {
      t("click", C);
    }, m = ({ target: C }) => {
      C.composing = !0;
    }, w = ({ target: C }) => {
      C.composing && (C.composing = !1, C.dispatchEvent(new Event("input")));
    };
    return Q(
      () => e.modelValue,
      () => {
        v(a()), k();
      }
    ), ve(() => {
      v(a(), e.formatTrigger);
    }), {
      renderInput: s,
      inputRef: o,
      active: l,
      classes: i,
      styles: p,
      disabled: n,
      onInput: d,
      onFocus: y,
      onBlur: b,
      clear: $,
      startComposing: m,
      endComposing: w,
      onClick: g,
      onClickInput: u,
      focus: () => {
        var C;
        (C = o.value) == null || C.focus();
      },
      blur: () => {
        var C;
        (C = o.value) == null || C.blur();
      },
      select: () => {
        var C;
        (C = o.value) == null || C.select();
      },
      onKeyup: (C) => {
        C.key === "Enter" && t("confirm", C);
      },
      getModelValue: a
    };
  }
}), fp = { class: "nut-input-value" }, pp = { class: "nut-input-inner" }, mp = {
  key: 0,
  class: "nut-input-left-box"
}, hp = { class: "nut-input-box" }, gp = {
  key: 0,
  class: "nut-input-word-limit"
}, yp = { class: "nut-input-word-num" }, vp = { class: "nut-input-right-box" };
function $p(e, t, n, l, o, a) {
  const s = W("MaskClose");
  return c(), f("view", {
    class: L(e.classes),
    onClick: t[1] || (t[1] = (...r) => e.onClick && e.onClick(...r))
  }, [
    h("view", fp, [
      h("view", pp, [
        e.$slots.left ? (c(), f("view", mp, [
          I(e.$slots, "left")
        ])) : N("", !0),
        h("view", hp, [
          (c(), ee(Oe(e.renderInput(e.type)), {
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
          e.showWordLimit && e.maxLength ? (c(), f("view", gp, [
            h("span", yp, E(e.getModelValue() ? e.getModelValue().length : 0), 1),
            ge("/" + E(e.maxLength), 1)
          ])) : N("", !0)
        ]),
        e.clearable && !e.readonly ? Se((c(), f("view", {
          key: 1,
          class: "nut-input-clear-box",
          onClick: t[0] || (t[0] = (...r) => e.clear && e.clear(...r))
        }, [
          I(e.$slots, "clear", {}, () => [
            oe(s, wt({ class: "nut-input-clear" }, e.$attrs, {
              size: e.clearSize,
              width: e.clearSize,
              height: e.clearSize
            }), null, 16, ["size", "width", "height"])
          ])
        ], 512)), [
          [Ie, (e.active || e.showClearIcon) && e.getModelValue().length > 0]
        ]) : N("", !0),
        h("view", vp, [
          I(e.$slots, "right")
        ])
      ])
    ])
  ], 2);
}
const bp = /* @__PURE__ */ Z(dp, [["render", $p]]), Do = Symbol("nut-radio"), { componentName: Je, create: wp } = U("radio"), _o = wp({
  components: {
    CheckNormal: Kt,
    CheckChecked: Sn
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
    const n = Ze(xe(e, "disabled")), { size: l } = he(e);
    let o = Ee(Do, null);
    const a = D(() => o.label.value === e.label), s = D(() => n.value ? "nut-radio__icon--disable" : a.value ? "nut-radio__icon" : "nut-radio__icon--unchecked"), r = () => {
      const { iconSize: y } = e, b = {
        CheckNormal: t.icon ? t.icon : Kt,
        Checked: t.checkedIcon ? t.checkedIcon : Sn
      }, $ = a.value ? b.Checked : b.CheckNormal, k = _e(y);
      return be($, {
        width: k,
        height: k,
        class: s.value
      });
    }, i = () => {
      var y;
      return be(
        "view",
        {
          class: `${Je}__label ${n.value ? `${Je}__label--disabled` : ""}`
        },
        (y = t.default) == null ? void 0 : y.call(t)
      );
    }, p = () => {
      var y;
      return be(
        "view",
        {
          class: `${Je}__button ${a.value && `${Je}__button--active`} ${Je}__button--${l.value} ${e.disabled ? `${Je}__button--disabled` : ""}`
        },
        (y = t.default) == null ? void 0 : y.call(t)
      );
    }, d = () => {
      a.value || n.value || o.updateValue(e.label);
    }, v = D(() => o.position.value === "left");
    return () => be(
      "view",
      {
        class: `${Je} ${Je}--${e.shape} ${v.value ? `${Je}--reverse` : ""}`,
        onClick: d
      },
      [e.shape === "button" ? p() : [r(), i()]]
    );
  }
}), { componentName: An, create: kp } = U("radio-group"), Io = kp({
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
    return Pe(Do, {
      label: kn(D(() => e.modelValue)),
      position: kn(D(() => e.textPosition)),
      updateValue: l
    }), Q(
      () => e.modelValue,
      (o) => t("change", o)
    ), () => {
      var o;
      return be(
        "view",
        {
          class: `${An} ${An}--${e.direction}`
        },
        (o = n.default) == null ? void 0 : o.call(n)
      );
    };
  }
}), Cp = ["id"], Sp = { class: "nut-rate-item__icon--full" }, Tp = {
  key: 0,
  class: "nut-rate-item__icon--half"
}, Np = {
  key: 1,
  class: "nut-rate-item__icon--half"
}, un = /* @__PURE__ */ Le({
  name: "NutRate",
  __name: "rate",
  props: {
    count: { default: 5 },
    modelValue: { default: 0 },
    customIcon: { default: () => Dr },
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
      for (let g = $.value.length - 1; g >= 0; g--) {
        const m = $.value[g];
        if (b > m.offsetLeft) {
          k ? u = g + (b > m.offsetLeft + m.clientWidth / 2 ? 1 : 0.5) : u = g + 1;
          break;
        }
      }
      return u;
    }, d = et(), v = (b) => {
      !n.touchable || n.readonly || d.start(b);
    }, y = (b) => {
      n.touchable && (d.move(b), d.isHorizontal() && s.value && (b.preventDefault(), r(p(d.moveX.value, s, n.allowHalf))));
    };
    return (b, $) => (c(), f("view", {
      class: "nut-rate",
      onTouchstart: v,
      onTouchmove: y
    }, [
      (c(!0), f(x, null, ie(Number(b.count), (k) => (c(), f("view", {
        id: "rateRefs-" + ke(o) + k,
        key: k,
        ref_for: !0,
        ref_key: "rateRefs",
        ref: s,
        class: "nut-rate-item",
        style: A(k < Number(b.count) ? { marginRight: ke(_e)(b.spacing) } : {})
      }, [
        h("view", Sp, [
          (c(), ee(Oe(
            ke(lt)(b.customIcon, {
              width: b.size,
              height: b.size,
              size: b.size,
              color: k <= Number(b.modelValue) ? b.activeColor : b.voidColor
            })
          ), {
            class: L(["nut-rate-item__icon", { "nut-rate-item__icon--disabled": ke(a) || k > Number(b.modelValue) }]),
            onClick: (u) => i(1, k)
          }, null, 8, ["class", "onClick"]))
        ]),
        b.allowHalf && Number(b.modelValue) + 1 > k ? (c(), f("view", Tp, [
          (c(), ee(Oe(
            ke(lt)(b.customIcon, {
              width: b.size,
              height: b.size,
              size: b.size,
              color: k <= Number(b.modelValue) + 1 ? b.activeColor : b.voidColor
            })
          ), {
            class: "nut-rate-item__icon",
            onClick: (u) => i(2, k)
          }, null, 8, ["onClick"]))
        ])) : b.allowHalf && Number(b.modelValue) + 1 < k ? (c(), f("view", Np, [
          (c(), ee(Oe(ke(lt)(b.customIcon, { width: b.size, height: b.size, size: b.size, color: b.voidColor })), {
            class: "nut-rate-item__icon nut-rate-item__icon--disabled",
            onClick: (u) => i(2, k)
          }, null, 8, ["onClick"]))
        ])) : N("", !0)
      ], 12, Cp))), 128))
    ], 32));
  }
});
Ae(un);
const { create: Dp } = U("short-password"), _p = "NutShortPassword", Ip = Dp({
  components: {
    NutPopup: ze,
    Tips: eo
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
    const n = Ce(_p), l = z(e.modelValue), o = D(() => i(Number(e.length))), a = z(e.visible), s = (d) => {
      d.stopPropagation(), t("focus");
    };
    Q(
      () => e.visible,
      (d) => {
        a.value = d;
      }
    ), Q(
      () => e.modelValue,
      (d) => {
        l.value = d, String(d).length === o.value && t("complete", d);
      }
    );
    const r = () => {
      t("update:visible", !1), t("close");
    }, i = (d) => Math.min(Math.max(4, d), 6);
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
}), Bp = { class: "nut-short-password-title" }, Mp = { class: "nut-short-password-subtitle" }, Lp = { class: "nut-short-password-wrapper" }, Ep = {
  key: 0,
  class: "nut-short-password__item-icon"
}, Pp = { class: "nut-short-password__message" }, Ap = { class: "nut-short-password--error" }, zp = {
  key: 0,
  class: "nut-short-password--forget"
};
function Vp(e, t, n, l, o, a) {
  const s = W("tips"), r = W("nut-popup");
  return c(), f("view", null, [
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
        h("view", Bp, E(e.title || e.translate("title")), 1),
        h("view", Mp, E(e.desc || e.translate("desc")), 1),
        h("div", Lp, [
          h("view", {
            class: "nut-short-password__list",
            onTouchstart: t[0] || (t[0] = (...i) => e.onTouchStart && e.onTouchStart(...i))
          }, [
            (c(!0), f(x, null, ie(new Array(e.comLen), (i, p) => (c(), f("view", {
              key: p,
              class: "nut-short-password__item"
            }, [
              String(e.realInput).length > p ? (c(), f("view", Ep)) : N("", !0)
            ]))), 128))
          ], 32)
        ]),
        h("view", Pp, [
          h("view", Ap, E(e.errorMsg), 1),
          e.tips || e.translate("tips") ? (c(), f("view", zp, [
            oe(s, {
              class: "icon",
              width: "11px",
              height: "11px"
            }),
            h("view", {
              onClick: t[1] || (t[1] = (...i) => e.onTips && e.onTips(...i))
            }, E(e.tips || e.translate("tips")), 1)
          ])) : N("", !0)
        ])
      ]),
      _: 1
    }, 8, ["visible", "close-on-click-overlay", "lock-scroll", "onClickCloseIcon", "onClickOverlay"])
  ]);
}
const Op = /* @__PURE__ */ Z(Ip, [["render", Vp]]), { create: Hp } = U("textarea"), Rp = "NutTextarea", Fp = Hp({
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
    const n = Ze(xe(e, "disabled")), l = Ce(Rp), o = z(), a = D(() => {
      const $ = "nut-textarea";
      return {
        [$]: !0,
        [`${$}--disabled`]: n.value
      };
    });
    ve(() => {
      e.modelValue && i(String(e.modelValue)), e.autosize && Te(r);
    });
    const s = D(() => ({
      textAlign: e.textAlign
      // resize: props.autosize ? 'vertical' : 'none'
    })), r = () => {
      let $ = o.value;
      $.style.height = "auto";
      let k = $.scrollHeight;
      if (typeof e.autosize == "object") {
        const { maxHeight: u, minHeight: g } = e.autosize;
        u !== void 0 && (k = Math.min(k, u)), g !== void 0 && (k = Math.max(k, g));
      }
      k && ($.style.height = k + "px");
    };
    Q(
      () => e.modelValue,
      () => {
        e.autosize && Te(r);
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
}), Wp = ["rows", "disabled", "readonly", "value", "maxlength", "placeholder", "autofocus"], Yp = {
  key: 0,
  class: "nut-textarea__limit"
};
function jp(e, t, n, l, o, a) {
  return c(), f("view", {
    class: L(e.classes)
  }, [
    h("textarea", {
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
    }, null, 44, Wp),
    e.limitShow ? (c(), f("view", Yp, E(e.modelValue ? e.modelValue.length : 0) + "/" + E(e.maxLength), 1)) : N("", !0)
  ], 2);
}
const Up = /* @__PURE__ */ Z(Fp, [["render", jp]]);
class Kp {
  constructor() {
    V(this, "url", "");
    V(this, "name", "file");
    V(this, "fileType", "image");
    V(this, "formData");
    V(this, "sourceFile");
    V(this, "method", "post");
    V(this, "xhrState", 200);
    V(this, "timeout", 30 * 1e3);
    V(this, "headers", {});
    V(this, "withCredentials", !1);
    V(this, "onStart");
    V(this, "taroFilePath");
    V(this, "onProgress");
    V(this, "onSuccess");
    V(this, "onFailure");
    V(this, "beforeXhrUpload");
  }
}
let Xp = class {
  constructor(t) {
    V(this, "options");
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
class qp {
  constructor() {
    V(this, "status", "ready");
    V(this, "message", "");
    V(this, "uid", (/* @__PURE__ */ new Date()).getTime().toString());
    V(this, "name");
    V(this, "url");
    V(this, "type");
    V(this, "path");
    V(this, "percentage", 0);
    V(this, "formData", {});
  }
}
const Zp = { class: "nut-progress" }, cn = /* @__PURE__ */ Le({
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
    const t = e, n = D(() => {
      if (t.strokeWidth)
        return t.strokeWidth + "px";
    }), l = D(() => Number(t.percentage) >= 100 ? 100 : Number(t.percentage)), o = D(() => ({
      width: l.value + "%",
      background: t.strokeColor || ""
    })), a = D(() => ({
      color: t.textColor || ""
    }));
    return (s, r) => (c(), f("div", Zp, [
      h("div", {
        class: L(["nut-progress-outer", [s.showText && !s.textInside ? "nut-progress-outer-part" : "", s.size ? "nut-progress-" + s.size : ""]]),
        style: A({ height: n.value })
      }, [
        h("div", {
          class: L(["nut-progress-inner", s.status === "active" ? "nut-active" : ""]),
          style: A(o.value)
        }, null, 6),
        s.showText && s.textInside && !s.$slots.default ? (c(), f("div", {
          key: 0,
          class: "nut-progress-text nut-progress-insidetext",
          style: A({
            lineHeight: n.value,
            left: `${l.value}%`,
            transform: `translate(-${+l.value}%,-50%)`,
            background: s.textBackground || s.strokeColor
          })
        }, [
          h("span", {
            style: A(a.value)
          }, E(l.value) + E(s.isShowPercentage ? "%" : ""), 5)
        ], 4)) : N("", !0),
        s.showText && s.textInside && s.$slots.default ? (c(), f("div", {
          key: 1,
          class: "nut-progress-slot",
          style: A({
            position: "absolute",
            top: "50%",
            left: `${l.value}%`,
            transform: `translate(-${+l.value}%,-50%)`
          })
        }, [
          I(s.$slots, "default")
        ], 4)) : N("", !0)
      ], 6),
      s.showText && !s.textInside ? (c(), f("div", {
        key: 0,
        class: "nut-progress-text",
        style: A({ lineHeight: n.value })
      }, [
        s.status === "text" || s.status === "active" ? (c(), f("span", {
          key: 0,
          style: A(a.value)
        }, E(l.value) + E(s.isShowPercentage ? "%" : ""), 5)) : s.status === "icon" ? I(s.$slots, "icon-name", { key: 1 }, () => [
          oe(ke(Gn), {
            width: "15px",
            height: "15px",
            color: "#439422"
          })
        ]) : N("", !0)
      ], 4)) : N("", !0)
    ]));
  }
});
Ae(cn);
const { create: Gp } = U("uploader"), Jp = "NutUploader", Qp = Gp({
  components: {
    NutProgress: cn,
    Photograph: Wa,
    Failure: xn,
    Loading: rt,
    Del: Jn,
    Link: Qs
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
    const n = Ze(xe(e, "disabled")), l = Ce(Jp), o = z(e.fileList), a = z([]);
    Q(
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
      return e.capture && (m.capture = "camera", m.accept || (m.accept = "image/*")), be("input", m);
    }, r = (m) => {
      m.value = "";
    }, i = (m) => {
      t("fileItemClick", { fileItem: m });
    }, p = (m, w) => {
      const S = new Kp();
      S.url = e.url, S.formData = m.formData, S.timeout = e.timeout * 1, S.method = e.method, S.xhrState = e.xhrState, S.headers = e.headers, S.withCredentials = e.withCredentials, S.beforeXhrUpload = e.beforeXhrUpload;
      try {
        S.sourceFile = m.formData.get(e.name);
      } catch (B) {
        console.warn("[NutUI] <Uploader> formData.get(name)", B);
      }
      S.onStart = (B) => {
        m.status = "ready", m.message = l("readyUpload"), d(w), t("start", B);
      }, S.onProgress = (B, M) => {
        m.status = "uploading", m.message = l("uploading"), m.percentage = (B.loaded / B.total * 100).toFixed(0), t("progress", { event: B, option: M, percentage: m.percentage });
      }, S.onSuccess = (B, M) => {
        m.status = "success", m.message = l("success"), t("success", {
          responseText: B,
          option: M,
          fileItem: m
        }), t("update:fileList", o.value);
      }, S.onFailure = (B, M) => {
        m.status = "error", m.message = l("error"), t("failure", {
          responseText: B,
          option: M,
          fileItem: m
        });
      };
      let _ = new Xp(S);
      e.autoUpload ? _.upload() : a.value.push(
        new Promise((B) => {
          B(_);
        })
      );
    }, d = (m = -1) => {
      m > -1 ? a.value.splice(m, 1) : (a.value = [], o.value = [], t("update:fileList", o.value));
    }, v = () => {
      Promise.all(a.value).then((m) => {
        m.forEach((w) => w.upload());
      });
    }, y = (m) => {
      m.forEach((w, S) => {
        const _ = new FormData();
        for (const [M, C] of Object.entries(e.data))
          _.append(M, C);
        _.append(e.name, w);
        const B = ce(new qp());
        if (B.name = w.name, B.status = "ready", B.type = w.type, B.formData = _, B.message = l("waitingUpload"), p(B, S), e.isPreview && w.type.includes("image")) {
          const M = new FileReader();
          M.onload = (C) => {
            B.url = C.target.result, o.value.push(B);
          }, M.readAsDataURL(w);
        } else
          o.value.push(B);
      });
    }, b = (m) => {
      const w = e.maximum * 1, S = e.maximize * 1, _ = new Array();
      m = m.filter((M) => M.size > S ? (_.push(M), !1) : !0), _.length && t("oversize", _);
      let B = m.length + o.value.length;
      return B > w && m.splice(m.length - (B - w)), m;
    }, $ = (m, w) => {
      o.value.splice(w, 1), t("delete", {
        file: m,
        fileList: o.value,
        index: w
      });
    }, k = (m, w) => {
      n.value || (d(w), tn(e.beforeDelete, {
        args: [m, o.value],
        done: () => $(m, w)
      }));
    }, u = (m) => {
      if (e.disabled || n.value)
        return;
      const w = m.target;
      let { files: S } = w;
      e.beforeUpload ? e.beforeUpload(S).then((_) => g(_)) : g(S), t("change", {
        fileList: o.value,
        event: m
      }), e.clearInput && r(w);
    }, g = (m) => {
      const w = b(new Array().slice.call(m));
      y(w);
    };
    return {
      onChange: u,
      onDelete: k,
      fileList: o,
      fileItemClick: i,
      clearUploadQueue: d,
      submit: v,
      renderInput: s
    };
  }
}), xp = { class: "nut-uploader" }, e1 = {
  key: 0,
  class: "nut-uploader__slot"
}, t1 = {
  key: 0,
  class: "nut-uploader__preview-img"
}, n1 = {
  key: 0,
  class: "nut-uploader__preview__progress"
}, o1 = { class: "nut-uploader__preview__progress__msg" }, l1 = ["onClick"], s1 = ["src", "onClick"], a1 = {
  key: 3,
  class: "nut-uploader__preview-img__file"
}, r1 = ["onClick"], i1 = { class: "file__name_tips" }, u1 = { class: "tips" }, c1 = {
  key: 1,
  class: "nut-uploader__preview-list"
}, d1 = ["onClick"], f1 = { class: "file__name_tips" };
function p1(e, t, n, l, o, a) {
  const s = W("Failure"), r = W("Loading"), i = W("Link"), p = W("Del"), d = W("nut-progress"), v = W("Photograph");
  return c(), f("view", xp, [
    e.$slots.default ? (c(), f("view", e1, [
      I(e.$slots, "default"),
      Number(e.maximum) - e.fileList.length ? (c(), ee(Oe(e.renderInput), {
        key: 0,
        onChange: e.onChange
      }, null, 40, ["onChange"])) : N("", !0)
    ])) : N("", !0),
    (c(!0), f(x, null, ie(e.fileList, (y, b) => {
      var $;
      return c(), f("view", {
        key: y.uid,
        class: L(["nut-uploader__preview", [e.listType]])
      }, [
        e.listType == "picture" && !e.$slots.default ? (c(), f("view", t1, [
          y.status != "success" ? (c(), f("view", n1, [
            y.status != "ready" ? (c(), f(x, { key: 0 }, [
              y.status == "error" ? (c(), ee(s, {
                key: 0,
                color: "#fff"
              })) : (c(), ee(r, {
                key: 1,
                name: "loading",
                color: "#fff"
              }))
            ], 64)) : N("", !0),
            h("view", o1, E(y.message), 1)
          ])) : N("", !0),
          e.isDeletable ? (c(), f("view", {
            key: 1,
            class: "close",
            onClick: (k) => e.onDelete(y, b)
          }, [
            I(e.$slots, "delete-icon", {}, () => [
              oe(s)
            ])
          ], 8, l1)) : N("", !0),
          ($ = y == null ? void 0 : y.type) != null && $.includes("image") && y.url ? (c(), f("img", {
            key: 2,
            class: "nut-uploader__preview-img__c",
            src: y.url,
            onClick: (k) => e.fileItemClick(y)
          }, null, 8, s1)) : (c(), f("view", a1, [
            h("view", {
              class: "nut-uploader__preview-img__file__name",
              onClick: (k) => e.fileItemClick(y)
            }, [
              h("view", i1, E(y.name), 1)
            ], 8, r1)
          ])),
          h("view", u1, E(y.name), 1)
        ])) : e.listType == "list" ? (c(), f("view", c1, [
          h("view", {
            class: L(["nut-uploader__preview-img__file__name", [y.status]]),
            onClick: (k) => e.fileItemClick(y)
          }, [
            oe(i, { class: "nut-uploader__preview-img__file__link" }),
            h("view", f1, E(y.name), 1),
            e.isDeletable ? (c(), ee(p, {
              key: 0,
              color: "#808080",
              class: "nut-uploader__preview-img__file__del",
              onClick: De((k) => e.onDelete(y, b), ["stop"])
            }, null, 8, ["onClick"])) : N("", !0)
          ], 10, d1),
          y.status == "uploading" ? (c(), ee(d, {
            key: 0,
            size: "small",
            percentage: y.percentage,
            "stroke-color": "linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)",
            "show-text": !1
          }, null, 8, ["percentage"])) : N("", !0)
        ])) : N("", !0)
      ], 2);
    }), 128)),
    e.listType == "picture" && !e.$slots.default && Number(e.maximum) - e.fileList.length ? (c(), f("view", {
      key: 1,
      class: L(["nut-uploader__upload", [e.listType]])
    }, [
      I(e.$slots, "upload-icon", {}, () => [
        oe(v, { color: "#808080" })
      ]),
      (c(), ee(Oe(e.renderInput), { onChange: e.onChange }, null, 40, ["onChange"]))
    ], 2)) : N("", !0)
  ]);
}
const m1 = /* @__PURE__ */ Z(Qp, [["render", p1]]), { create: h1 } = U("number-keyboard"), g1 = "NutNumberKeyboard", y1 = h1({
  components: {
    NutPopup: ze
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
    const n = Ce(g1), l = z(void 0), o = z(e.visible), a = z();
    function s() {
      const { customKey: u } = e;
      let g = {
        id: "lock",
        type: "lock"
      }, m = Array.isArray(u) ? u : [u];
      return m.length === 1 && (g = {
        id: m[0],
        type: "custom"
      }), [...r(), g, { id: 0, type: "number" }, { id: "delete", type: "delete" }];
    }
    function r() {
      const u = [];
      for (let g = 1; g <= 9; g++)
        u.push({ id: g, type: "number" });
      return e.randomKeys ? u.sort(() => Math.random() > 0.5 ? 1 : -1) : u;
    }
    function i() {
      const u = r(), { customKey: g } = e;
      let m = Array.isArray(g) ? g : [g];
      return m.length > 2 && (m = [m[0], m[1]]), m.length == 2 && e.title && e.type != "rightColumn" && (m = [m[0]]), m.length === 1 ? e.title && e.type != "rightColumn" ? u.push({ id: m[0], type: "custom" }, { id: 0, type: "number" }, { id: "delete", type: "delete" }) : u.push({ id: 0, type: "number" }, { id: m[0], type: "custom" }) : m.length === 2 && u.push(
        { id: m[0], type: "custom" },
        { id: 0, type: "number" },
        { id: m[1], type: "custom" }
      ), u;
    }
    const p = D(() => e.type == "rightColumn" || e.title != "" ? i() : s()), d = () => {
      e.visible && t("blur");
    }, v = (u) => {
      const g = a.value;
      g && !g.contains(u.target) && d();
    };
    Q(
      () => e.visible,
      (u) => {
        o.value = u, u ? window.addEventListener("touchstart", v, !1) : window.removeEventListener("touchstart", v, !1);
      }
    );
    function y(u, g) {
      g.stopPropagation(), l.value = u.id, (u.type == "number" || u.type == "custom") && (t("input", u.id), e.modelValue.length < +e.maxlength && t("update:modelValue", e.modelValue + u.id)), u.type == "lock" && k(), u.type == "delete" && (t("delete"), t("update:modelValue", e.modelValue.slice(0, e.modelValue.length - 1)));
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
      onTouchstart: y,
      keysList: p,
      genCustomKeys: i,
      getBasicKeys: r,
      root: a,
      show: o,
      translate: n
    };
  }
}), v1 = { ref: "root" }, $1 = { class: "nut-number-keyboard" }, b1 = {
  key: 0,
  class: "nut-number-keyboard__header"
}, w1 = { class: "nut-number-keyboard__title" }, k1 = { class: "nut-number-keyboard__body" }, C1 = { class: "nut-number-keyboard__keys" }, S1 = ["onTouchstart"], T1 = {
  key: 1,
  src: "https://img11.360buyimg.com/imagetools/jfs/t1/146371/38/8485/738/5f606425Eca239740/14f4b4f5f20d8a68.png"
}, N1 = {
  key: 2,
  src: "https://img11.360buyimg.com/imagetools/jfs/t1/129395/8/12735/2030/5f61ac37E70cab338/fb477dc11f46056c.png"
}, D1 = {
  key: 0,
  class: "nut-number-keyboard__sidebar"
}, _1 = { class: "nut-key__wrapper" }, I1 = /* @__PURE__ */ h("img", { src: "https://img11.360buyimg.com/imagetools/jfs/t1/129395/8/12735/2030/5f61ac37E70cab338/fb477dc11f46056c.png" }, null, -1), B1 = [
  I1
];
function M1(e, t, n, l, o, a) {
  const s = W("nut-popup");
  return c(), f("div", v1, [
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
        h("div", $1, [
          e.title ? (c(), f("div", b1, [
            h("h3", w1, E(e.title), 1),
            e.type == "default" ? (c(), f("span", {
              key: 0,
              class: "nut-number-keyboard__close",
              onClick: t[0] || (t[0] = (r) => e.closeBoard())
            }, E(e.translate("done")), 1)) : N("", !0)
          ])) : N("", !0),
          h("div", k1, [
            h("div", C1, [
              (c(!0), f(x, null, ie(e.keysList, (r) => (c(), f("div", {
                key: "key" + r.id,
                class: L([
                  "nut-key__wrapper",
                  {
                    "nut-key__wrapper--wider": r.id == 0 && e.type == "rightColumn" && Array.isArray(e.customKey) && e.customKey.length == 1
                  }
                ])
              }, [
                h("div", {
                  class: L([
                    "nut-key",
                    { "nut-key--active": r.id == e.clickKeyIndex },
                    { "nut-key--lock": r.type == "lock" },
                    { "nut-key--delete": r.type == "delete" }
                  ]),
                  onTouchstart: (i) => e.onTouchstart(r, i),
                  onTouchmove: t[1] || (t[1] = (i) => e.onTouchMove(i)),
                  onTouchend: t[2] || (t[2] = (i) => e.onTouchEnd(i))
                }, [
                  r.type == "number" || r.type == "custom" ? (c(), f(x, { key: 0 }, [
                    ge(E(r.id), 1)
                  ], 64)) : N("", !0),
                  r.type == "lock" ? (c(), f("img", T1)) : N("", !0),
                  r.type == "delete" ? (c(), f("img", N1)) : N("", !0)
                ], 42, S1)
              ], 2))), 128))
            ]),
            e.type == "rightColumn" ? (c(), f("div", D1, [
              h("div", _1, [
                h("div", {
                  class: L(["nut-key", { active: e.clickKeyIndex == "delete" }]),
                  onTouchstart: t[3] || (t[3] = (r) => e.onTouchstart({ id: "delete", type: "delete" }, r)),
                  onTouchmove: t[4] || (t[4] = (r) => e.onTouchMove(r)),
                  onTouchend: t[5] || (t[5] = (...r) => e.onTouchEnd && e.onTouchEnd(...r))
                }, B1, 34)
              ]),
              h("div", {
                class: "nut-key__wrapper nut-key__wrapper--finish",
                onClick: t[6] || (t[6] = (r) => e.closeBoard())
              }, [
                h("div", {
                  class: L(["nut-key", "nut-key--finish ", { activeFinsh: e.clickKeyIndex == "finish" }])
                }, E(e.confirmText || e.translate("done")), 3)
              ])
            ])) : N("", !0)
          ])
        ])
      ]),
      _: 1
    }, 8, ["visible", "pop-class", "lock-scroll"])
  ], 512);
}
const L1 = /* @__PURE__ */ Z(y1, [["render", M1]]), dn = /* @__PURE__ */ Le({
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
    const l = e, o = n, { children: a, linkChildren: s } = Xt(bo);
    s({ props: l });
    const { linkChildren: r } = Xt(wo);
    r({ props: l });
    const i = D(() => ce({}));
    Pe("formErrorTip", i);
    const p = () => {
      Object.keys(i.value).forEach((u) => {
        i.value[u] = "";
      });
    }, d = () => {
      p();
    };
    Q(
      () => l.modelValue,
      () => {
        p();
      },
      { immediate: !0 }
    );
    const v = () => {
      const u = [];
      return a.forEach((g) => {
        u.push({
          prop: g == null ? void 0 : g.prop,
          rules: (g == null ? void 0 : g.rules) || []
        });
      }), u;
    }, y = (u) => {
      u.message && o("validate", u), i.value[u.prop] = u.message;
    }, b = (u) => Ge(this, null, function* () {
      const { rules: g = [], prop: m } = u, w = (C) => new Promise((T, P) => {
        try {
          y(C), T(C);
        } catch (O) {
          P(O);
        }
      });
      m || console.warn("[NutUI] <FormItem> 使用 rules 校验规则时 , 必须设置 prop 参数");
      const S = Ut(l.modelValue, m || "");
      y({ prop: m, message: "" });
      const _ = l.rules || {}, B = [...(_ == null ? void 0 : _[m]) || [], ...g];
      for (; B.length; ) {
        const M = B.shift(), { validator: T } = M, P = Wt(M, ["validator"]), { required: O, regex: K, message: G } = P, le = { prop: m, message: G || "" };
        if (O && !S && S !== 0 || K && !K.test(String(S)))
          return w(le);
        if (T) {
          const Y = T(S, P);
          if (Un(Y))
            try {
              if ((yield Y) === !1)
                return w(le);
            } catch (j) {
              return w({ prop: m, message: j });
            }
          else if (!Y)
            return w(le);
        }
      }
      return Promise.resolve(!0);
    }), $ = (u = "") => new Promise((g, m) => {
      try {
        const S = v().map((_) => u && u !== _.prop ? Promise.resolve(!0) : b(_));
        Promise.all(S).then((_) => {
          _ = _.filter((M) => M !== !0);
          const B = { valid: !0, errors: [] };
          _.length && (B.valid = !1, B.errors = _), g(B);
        });
      } catch (w) {
        m(w);
      }
    });
    return t({
      submit: () => ($(), !1),
      reset: d,
      validate: $
    }), (u, g) => (c(), f("form", {
      class: "nut-form",
      action: "#",
      onSubmit: De(() => !1, ["prevent"])
    }, [
      oe(no, null, {
        default: ne(() => [
          I(u.$slots, "default")
        ]),
        _: 3
      })
    ], 32));
  }
});
Ae(dn);
const E1 = { class: "nut-cell__value nut-form-item__body" }, fn = /* @__PURE__ */ Le({
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
    const t = e, { parent: n } = sn(bo), l = D(() => {
      var y;
      const d = (y = n.props) == null ? void 0 : y.rules;
      let v = !1;
      for (const b in d)
        Object.prototype.hasOwnProperty.call(d, b) && b === t.prop && Array.isArray(d[b]) && (v = d[b].some(($) => $.required));
      return t.required || t.rules.some((b) => b.required) || v;
    }), o = D(() => {
      const d = n.props.labelPosition, v = t.labelPosition ? t.labelPosition : d;
      return v !== "left" ? `nut-form-item__${v}` : "";
    }), a = D(() => {
      const d = n.props.starPosition, v = t.starPosition ? t.starPosition : d;
      return v !== "left" ? `nut-form-item__star-${v}` : "";
    }), s = Ee("formErrorTip"), r = D(() => ({
      width: _e(t.labelWidth),
      textAlign: t.labelAlign
    })), i = D(() => ({
      textAlign: t.bodyAlign
    })), p = D(() => ({
      textAlign: t.errorMessageAlign
    }));
    return (d, v) => (c(), ee(to, {
      class: L(["nut-form-item", [{ error: ke(s)[d.prop], line: d.showErrorLine }, d.$attrs.class, o.value]]),
      style: A(d.$attrs.style)
    }, {
      default: ne(() => [
        d.label || d.$slots.label ? (c(), f("view", {
          key: 0,
          class: L(["nut-cell__title nut-form-item__label", { required: l.value, [a.value]: a.value }]),
          style: A(r.value)
        }, [
          I(d.$slots, "label", {}, () => [
            ge(E(d.label), 1)
          ])
        ], 6)) : N("", !0),
        h("view", E1, [
          h("view", {
            class: "nut-form-item__body__slots",
            style: A(i.value)
          }, [
            I(d.$slots, "default")
          ], 4),
          ke(s)[d.prop] && d.showErrorMessage ? (c(), f("view", {
            key: 0,
            class: "nut-form-item__body__tips",
            style: A(p.value)
          }, E(ke(s)[d.prop]), 5)) : N("", !0)
        ])
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
});
Ae(fn);
const Bo = Symbol("nut-swipe"), { create: P1 } = U("swipe"), A1 = P1({
  props: {
    name: {
      type: String,
      default: ""
    },
    touchMoveStopPropagation: {
      type: Boolean,
      default: !1
    },
    touchMovePreventDefault: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["open", "close", "click"],
  setup(e, { emit: t }) {
    const n = (S) => {
      var _;
      return ((_ = S.value) == null ? void 0 : _.getBoundingClientRect().width) || 0;
    }, l = z(!1), o = z(), a = D(() => n(o)), s = z(), r = D(() => n(s)), i = Ee(Bo, null);
    Q(
      () => {
        var S;
        return (S = i == null ? void 0 : i.name) == null ? void 0 : S.value;
      },
      (S) => {
        e.name !== S && i && i.lock && $();
      }
    );
    const p = z(!1);
    let d = "", v = "";
    const y = ce({
      offset: 0,
      moving: !1
    }), b = (S = "") => {
      i && i.update(e.name), p.value = !0, S && (y.offset = S === "left" ? -r.value : a.value), t("open", {
        name: e.name,
        position: d || S
      });
    }, $ = () => {
      y.offset = 0, p.value && (p.value = !1, t("close", {
        name: e.name,
        position: d
      }));
    }, k = (S, _, B) => {
      B ? S.stopPropagation() : $(), t("click", _);
    }, u = D(() => ({
      transform: `translate3d(${y.offset}px, 0, 0)`
    })), g = (S) => {
      d = S > 0 ? "right" : "left";
      let _ = S;
      switch (d) {
        case "left":
          p.value && v === d ? _ = -r.value : _ = Math.abs(S) > r.value ? -r.value : S;
          break;
        case "right":
          p.value && v === d ? _ = a.value : _ = Math.abs(S) > a.value ? a.value : S;
          break;
      }
      y.offset = _;
    }, m = et();
    return de(q({
      touchStyle: u
    }, {
      onTouchStart(S) {
        e.disabled || m.start(S);
      },
      onTouchMove(S) {
        e.disabled || (m.move(S), m.isHorizontal() && (l.value = !0, y.moving = !0, g(m.deltaX.value), e.touchMovePreventDefault && S.preventDefault(), e.touchMoveStopPropagation && S.stopPropagation()));
      },
      onTouchEnd() {
        if (y.moving) {
          switch (y.moving = !1, v = d, d) {
            case "left":
              Math.abs(y.offset) <= r.value / 2 ? $() : (y.offset = -r.value, b());
              break;
            case "right":
              Math.abs(y.offset) <= a.value / 2 ? $() : (y.offset = a.value, b());
              break;
          }
          setTimeout(() => {
            l.value = !1;
          }, 0);
        }
      }
    }), {
      leftRef: o,
      rightRef: s,
      open: b,
      close: $,
      onClick: k,
      lockClick: l
    });
  }
});
function z1(e, t, n, l, o, a) {
  return c(), f("view", {
    class: "nut-swipe",
    style: A(e.touchStyle),
    onTouchstart: t[3] || (t[3] = (...s) => e.onTouchStart && e.onTouchStart(...s)),
    onTouchmove: t[4] || (t[4] = (...s) => e.onTouchMove && e.onTouchMove(...s)),
    onTouchend: t[5] || (t[5] = (...s) => e.onTouchEnd && e.onTouchEnd(...s)),
    onTouchcancel: t[6] || (t[6] = (...s) => e.onTouchEnd && e.onTouchEnd(...s))
  }, [
    h("view", {
      ref: "leftRef",
      class: "nut-swipe__left",
      onClick: t[0] || (t[0] = (s) => e.onClick(s, "left", !0))
    }, [
      I(e.$slots, "left")
    ], 512),
    h("view", {
      class: "nut-swipe__content",
      onClick: t[1] || (t[1] = (s) => e.onClick(s, "content", e.lockClick))
    }, [
      I(e.$slots, "default")
    ]),
    h("view", {
      ref: "rightRef",
      class: "nut-swipe__right",
      onClick: t[2] || (t[2] = (s) => e.onClick(s, "right", !0))
    }, [
      I(e.$slots, "right")
    ], 512)
  ], 36);
}
const Mo = /* @__PURE__ */ Z(A1, [["render", z1]]), { create: V1 } = U("swipe-group"), O1 = V1({
  props: {
    lock: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = z(null), n = z("");
    return Pe(Bo, {
      update: (o) => {
        n.value = o;
      },
      lock: e.lock,
      name: n
    }), { swipeGroupRef: t };
  }
}), H1 = {
  ref: "swipeGroupRef",
  class: "nut-swipe-group"
};
function R1(e, t, n, l, o, a) {
  return c(), f("div", H1, [
    I(e.$slots, "default")
  ], 512);
}
const F1 = /* @__PURE__ */ Z(O1, [["render", R1]]), { create: W1 } = U("action-sheet"), Y1 = W1({
  components: {
    NutPopup: ze,
    Loading: rt
  },
  props: de(q({}, Nt), {
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
}), j1 = { class: "nut-action-sheet" }, U1 = {
  key: 0,
  class: "nut-action-sheet__title"
}, K1 = { key: 1 }, X1 = {
  key: 0,
  class: "nut-action-sheet__item nut-action-sheet__desc"
}, q1 = {
  key: 1,
  class: "nut-action-sheet__menu"
}, Z1 = ["onClick"], G1 = { key: 1 }, J1 = { class: "nut-action-sheet__subdesc" };
function Q1(e, t, n, l, o, a) {
  const s = W("Loading"), r = W("nut-popup");
  return c(), ee(r, {
    visible: e.visible,
    position: "bottom",
    round: "",
    "close-on-click-overlay": e.closeAbled,
    "lock-scroll": e.lockScroll,
    "z-index": e.zIndex,
    onClickOverlay: e.close
  }, {
    default: ne(() => [
      h("view", j1, [
        e.title ? (c(), f("view", U1, E(e.title), 1)) : N("", !0),
        I(e.$slots, "default"),
        e.slotDefault ? N("", !0) : (c(), f("view", K1, [
          e.description ? (c(), f("view", X1, E(e.description), 1)) : N("", !0),
          e.menuItems.length ? (c(), f("view", q1, [
            (c(!0), f(x, null, ie(e.menuItems, (i, p) => (c(), f("view", {
              key: p,
              class: L(["nut-action-sheet__item", {
                "nut-action-sheet__item--disabled": i.disable,
                "nut-action-sheet__item--loading": i.loading
              }]),
              style: A({ color: e.isHighlight(i) || i.color }),
              onClick: (d) => e.chooseItem(i, p)
            }, [
              i.loading ? (c(), ee(s, { key: 0 })) : (c(), f("view", G1, E(i[e.optionTag]), 1)),
              h("view", J1, E(i[e.optionSubTag]), 1)
            ], 14, Z1))), 128))
          ])) : N("", !0),
          e.cancelTxt ? (c(), f("view", {
            key: 2,
            class: "nut-action-sheet__cancel",
            onClick: t[0] || (t[0] = (...i) => e.cancelActionSheet && e.cancelActionSheet(...i))
          }, E(e.cancelTxt), 1)) : N("", !0)
        ]))
      ])
    ]),
    _: 3
  }, 8, ["visible", "close-on-click-overlay", "lock-scroll", "z-index", "onClickOverlay"]);
}
const x1 = /* @__PURE__ */ Z(Y1, [["render", Q1]]), { componentName: em, create: tm } = U("backtop"), nm = tm({
  components: {
    Top: Fr
  },
  props: {
    bottom: {
      type: Number,
      default: 20
    },
    right: {
      type: Number,
      default: 10
    },
    elId: {
      type: [String],
      default: "body"
    },
    distance: {
      type: Number,
      default: 200
    },
    zIndex: {
      type: Number,
      default: 10
    },
    isAnimation: {
      type: Boolean,
      default: !0
    },
    duration: {
      type: Number,
      default: 1e3
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = ce({
      backTop: !1,
      scrollTop: 0,
      scrollEl: window,
      startTime: 0,
      keepAlive: !1
    }), l = D(() => ({
      [em]: !0,
      show: n.backTop
    })), o = D(() => ({
      right: `${e.right}px`,
      bottom: `${e.bottom}px`,
      zIndex: e.zIndex
    }));
    function a() {
      n.scrollEl instanceof Window ? n.scrollTop = n.scrollEl.pageYOffset : n.scrollTop = n.scrollEl.scrollTop, n.backTop = n.scrollTop >= e.distance;
    }
    function s(y = 0) {
      n.scrollEl instanceof Window ? window.scrollTo(0, y) : n.scrollEl.scrollTop = y;
    }
    function r() {
      let y = Re(function b() {
        var $ = e.duration - Math.max(0, n.startTime - +/* @__PURE__ */ new Date() + e.duration), k = $ * -n.scrollTop / e.duration + n.scrollTop;
        s(k), y = Re(b), ($ == e.duration || k == 0) && Sc(y);
      });
    }
    function i() {
      n.scrollEl.addEventListener("scroll", a, !1), n.scrollEl.addEventListener("resize", a, !1);
    }
    function p() {
      n.scrollEl.removeEventListener("scroll", a, !1), n.scrollEl.removeEventListener("resize", a, !1);
    }
    function d(y) {
      n.startTime = +/* @__PURE__ */ new Date(), e.isAnimation && e.duration > 0 ? r() : s(), t("click", y);
    }
    function v() {
      e.elId && document.getElementById(e.elId) && (n.scrollEl = document.getElementById(e.elId)), i();
    }
    return ve(() => {
      e.distance == 0 && (n.backTop = !0), v();
    }), Xe(() => {
      p();
    }), Ct(() => {
      n.keepAlive && (n.keepAlive = !1, v());
    }), St(() => {
      n.keepAlive = !0, p();
    }), {
      state: n,
      classes: l,
      style: o,
      click: d
    };
  }
});
function om(e, t, n, l, o, a) {
  const s = W("Top");
  return c(), f("div", {
    class: L(e.classes),
    style: A(e.style),
    onClick: t[0] || (t[0] = De((...r) => e.click && e.click(...r), ["stop"]))
  }, [
    I(e.$slots, "default", {}, () => [
      oe(s, {
        width: "19px",
        height: "19px",
        class: "nut-backtop-main"
      })
    ])
  ], 6);
}
const lm = /* @__PURE__ */ Z(nm, [["render", om]]), { create: sm } = U("drag"), am = sm({
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
    const t = z(), n = ce({
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
    function a(p, d) {
      d - parseInt(p.style.left.split("px")[0]) > 10 ? (p.style.left = parseInt(p.style.left.split("px")[0]) + 10 + "px", Re(() => {
        a(p, d);
      })) : p.style.left = d + "px";
    }
    function s(p) {
      p.preventDefault();
      const d = p.currentTarget;
      if (p.targetTouches.length === 1) {
        const v = p.targetTouches[0];
        n.nx = v.clientX - n.position.x, n.ny = v.clientY - n.position.y, n.xPum = n.startLeft + n.nx, n.yPum = n.startTop + n.ny;
        const y = n.screenWidth - n.elWidth - n.boundary.right;
        Math.abs(n.xPum) > y ? n.xPum = y : n.xPum <= n.boundary.left && (n.xPum = n.boundary.left), n.yPum < n.boundary.top ? n.yPum = n.boundary.top : n.yPum > n.screenHeight - n.elHeight - n.boundary.bottom && (n.yPum = n.screenHeight - n.elHeight - n.boundary.bottom), e.direction != "y" && (d.style.left = n.xPum + "px"), e.direction != "x" && (d.style.top = n.yPum + "px");
      }
    }
    function r(p) {
      const d = p.currentTarget;
      let y = p.changedTouches[0].clientX;
      const b = n.screenWidth - n.elWidth - n.boundary.right;
      y > b ? y = b : y < n.boundary.left ? y = n.boundary.left : y = y < n.screenWidth / 2 ? n.boundary.left : b, e.direction != "y" && e.attract && (y < n.screenWidth / 2 ? Re(() => {
        o(d);
      }) : Re(() => {
        a(d, b);
      })), e.direction != "x" && (d.style.top = n.yPum + "px");
    }
    function i(p) {
      const d = p.currentTarget, v = p.touches[0], y = p.targetTouches[0];
      n.startTop = d.offsetTop, n.startLeft = d.offsetLeft, n.position.x = v.clientX, n.position.y = v.clientY, n.nx = y.clientX - n.position.x, n.ny = y.clientY - n.position.y, n.xPum = n.startLeft + n.nx, n.yPum = n.startTop + n.ny;
    }
    return ve(() => {
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
function rm(e, t, n, l, o, a) {
  return c(), f("view", {
    ref: "myDrag",
    class: "nut-drag",
    onTouchstart: t[0] || (t[0] = (s) => e.touchStart(s)),
    onTouchmove: t[1] || (t[1] = (s) => e.touchMove(s)),
    onTouchend: t[2] || (t[2] = (s) => e.touchEnd(s))
  }, [
    I(e.$slots, "default")
  ], 544);
}
const im = /* @__PURE__ */ Z(am, [["render", rm]]), { create: um } = U("dialog"), cm = "NutDialog", dm = um({
  inheritAttrs: !1,
  components: {
    NutPopup: ze,
    NutButton: qe
  },
  props: de(q({}, Nt), {
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
    const n = Ce(cm), l = z(e.visible);
    ve(() => {
      e.closeOnPopstate && window.addEventListener("popstate", function() {
        a("page");
      });
    }), Q(
      () => e.visible,
      (d) => {
        l.value = d, d && t("opened");
      }
    );
    const o = (d) => {
      t("update", d), t("update:visible", d);
    }, a = (d) => {
      tn(e.beforeClose, {
        args: [d],
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
    }, p = D(() => ({
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
}), fm = {
  key: 0,
  class: "nut-dialog__header"
}, pm = ["innerHTML"];
function mm(e, t, n, l, o, a) {
  const s = W("nut-button"), r = W("nut-popup");
  return c(), ee(r, {
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
      h("view", {
        class: L(["nut-dialog", e.customClass])
      }, [
        e.$slots.header || e.title ? (c(), f("view", fm, [
          e.$slots.header ? I(e.$slots, "header", { key: 0 }) : (c(), f(x, { key: 1 }, [
            ge(E(e.title), 1)
          ], 64))
        ])) : N("", !0),
        h("view", {
          class: "nut-dialog__content",
          style: A(e.contentStyle)
        }, [
          e.$slots.default ? I(e.$slots, "default", { key: 0 }) : typeof e.content == "string" ? (c(), f("view", {
            key: 1,
            innerHTML: e.content
          }, null, 8, pm)) : (c(), ee(Oe(e.content), { key: 2 }))
        ], 4),
        e.noFooter ? N("", !0) : (c(), f("view", {
          key: 1,
          class: L(["nut-dialog__footer", { [e.footerDirection]: e.footerDirection }])
        }, [
          e.$slots.footer ? I(e.$slots, "footer", { key: 0 }) : (c(), f(x, { key: 1 }, [
            e.noCancelBtn ? N("", !0) : (c(), ee(s, {
              key: 0,
              size: "small",
              plain: "",
              type: "primary",
              class: "nut-dialog__footer-cancel",
              onClick: e.onCancel
            }, {
              default: ne(() => [
                ge(E(e.cancelText || e.translate("cancel")), 1)
              ]),
              _: 1
            }, 8, ["onClick"])),
            e.noOkBtn ? N("", !0) : (c(), ee(s, {
              key: 1,
              size: "small",
              type: "primary",
              class: "nut-dialog__footer-ok",
              onClick: e.onOk
            }, {
              default: ne(() => [
                ge(E(e.okText || e.translate("confirm")), 1)
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
const pn = /* @__PURE__ */ Z(dm, [["render", mm]]);
class hm {
  constructor() {
    V(this, "title", "");
    V(this, "content", "");
    V(this, "cancelText", "");
    V(this, "okText", "");
    V(this, "textAlign", "center");
    V(this, "customClass", "");
    V(this, "overlayStyle", {});
    V(this, "overlayClass", "");
    V(this, "popStyle", {});
    V(this, "popClass", "");
    V(this, "teleport", "body");
    V(this, "id", (/* @__PURE__ */ new Date()).getTime());
    V(this, "footerDirection", "horizontal");
    //使用横纵方向 可选值 horizontal、vertical
    // function
    V(this, "onUpdate");
    V(this, "onOk");
    V(this, "onCancel");
    V(this, "onOpened");
    V(this, "onClosed");
    V(this, "beforeClose");
    V(this, "visible", !0);
    V(this, "noFooter", !1);
    V(this, "noOkBtn", !1);
    V(this, "noCancelBtn", !1);
    V(this, "okBtnDisabled", !1);
    V(this, "closeOnPopstate", !1);
    V(this, "closeOnClickOverlay", !0);
    V(this, "lockScroll", !0);
    V(this, "cancelAutoClose", !0);
    V(this, "okAutoClose", !0);
  }
}
class gm {
  constructor(t) {
    V(this, "options", new hm());
    V(this, "instance");
    const n = Object.assign(this.options, t), { unmount: l } = an(n, {
      name: "dialog",
      components: [ze, qe, Tt],
      wrapper: (o, a) => ({
        setup() {
          return n.onUpdate = (s) => {
            s === !1 && Te(() => {
              l();
            });
          }, n != null && n.onOpened && (n == null || n.onOpened()), n.teleport = `#${a.id}`, () => be(pn, n);
        }
      })
    });
  }
}
const ym = function(e) {
  return new gm(e);
};
ym.install = (e) => {
  e.use(pn);
};
const { create: vm } = U("infinite-loading"), $m = "NutInfiniteLoading", bm = vm({
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
    const l = Ce($m), o = z(), a = uo(o), s = ce({
      beforeScrollTop: 0,
      isInfiniting: !1,
      y: 0,
      x: 0,
      distance: 0
    }), r = (b) => b ? b.offsetTop + r(b.offsetParent) : 0, i = () => {
      let b = 0, $ = 0, k = "down";
      if (a.value == window) {
        const u = Xn();
        o.value && (b = r(o.value) + o.value.offsetHeight - u - window.innerHeight), $ = u;
      } else {
        const { scrollHeight: u, clientHeight: g, scrollTop: m } = a.value;
        b = u - g - m, $ = m;
      }
      return s.beforeScrollTop > $ ? k = "up" : k = "down", s.beforeScrollTop = $, t("scrollChange", $), b <= e.threshold && k == "down";
    }, p = () => {
      Re(() => {
        if (!i() || !e.hasMore || s.isInfiniting)
          return !1;
        s.isInfiniting = !0, t("update:modelValue", !0), Te(() => t("loadMore"));
      });
    }, d = () => {
      a.value && a.value.addEventListener("scroll", p, e.useCapture);
    }, v = () => {
      a.value && a.value.removeEventListener("scroll", p, e.useCapture);
    };
    ve(() => {
      d();
    }), Xe(() => {
      v();
    });
    const y = z(!1);
    return Ct(() => {
      y.value && (y.value = !1, d());
    }), St(() => {
      y.value = !0, v();
    }), Q(
      () => e.modelValue,
      (b) => {
        b || (s.isInfiniting = !1);
      }
    ), de(q({
      scroller: o
    }, he(s)), {
      translate: l,
      slots: n
    });
  }
}), wm = {
  ref: "scroller",
  class: "nut-infinite-loading"
}, km = { class: "nut-infinite__container" }, Cm = { class: "nut-infinite__bottom" }, Sm = {
  key: 0,
  class: "nut-infinite__bottom-box"
}, Tm = { class: "nut-infinite__bottom-box__text" }, Nm = { class: "nut-infinite__bottom-tips" };
function Dm(e, t, n, l, o, a) {
  const s = W("Loading");
  return c(), f("view", wm, [
    h("view", km, [
      I(e.$slots, "default")
    ]),
    h("view", Cm, [
      e.isInfiniting ? (c(), f("view", Sm, [
        I(e.$slots, "loading", {}, () => [
          I(e.$slots, "loading-icon", {}, () => [
            oe(s, { class: "nut-icon-loading nut-infinite__bottom-box__img" })
          ]),
          h("view", Tm, E(e.loadTxt || e.translate("loading")), 1)
        ])
      ])) : e.hasMore ? N("", !0) : I(e.$slots, "finished", { key: 1 }, () => [
        h("view", Nm, E(e.loadMoreTxt || e.translate("loadMoreTxt")), 1)
      ])
    ])
  ], 512);
}
const _m = /* @__PURE__ */ Z(bm, [["render", Dm]]), { create: Im } = U("pull-refresh"), Bm = "NutPullRefresh", Mm = Im({
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
    const l = Ce(Bm), o = et(), a = z(), s = uo(a), r = ce({
      isPullRefresh: !1,
      distance: 0,
      status: "normal"
    }), i = D(() => {
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
    }), p = D(() => ({
      transitionDuration: `${e.duration}s`,
      transform: r.distance ? `translate3d(0,${r.distance}px, 0)` : ""
    })), d = D(() => {
      const m = {};
      return e.headHeight != 50 && (m.height = _e(e.headHeight)), m;
    }), v = (m) => {
      const w = +(e.pullDistance || e.headHeight);
      let S = m;
      return m > w && (m < w * 2 ? S = (m + w) / 2 : S = w + m / 4), Math.round(S);
    }, y = (m, w, S) => {
      const _ = +(e.pullDistance || e.headHeight);
      r.distance = m, w ? r.status = "loading" : S ? r.status = "complete" : m === 0 ? r.status = "normal" : m < _ ? r.status = "pulling" : r.status = "loosing", t("change", { status: r.status, distance: m });
    }, b = () => r.status !== "loading" && r.status !== "complete", $ = () => s.value == window ? Xn() == 0 : s.value && s.value.scrollTop == 0, k = (m) => {
      b() && ($() ? (o.start(m), r.isPullRefresh = !0) : (r.distance = 0, r.isPullRefresh = !1));
    }, u = (m) => {
      if (b()) {
        o.move(m);
        const { deltaY: w } = o;
        o.isVertical() && w.value > 0 && r.isPullRefresh && (m.preventDefault(), y(v(w.value)));
      }
    }, g = () => {
      r.isPullRefresh && b() && o.deltaY.value && (r.status === "loosing" ? (y(+e.headHeight, !0), t("update:modelValue", !0), Te(() => t("refresh"))) : y(0)), setTimeout(() => {
        o.reset();
      }, 0);
    };
    return Q(
      () => e.modelValue,
      (m) => {
        m ? y(+e.headHeight, !0) : (e.completeDuration === 0 && y(0), y(+e.headHeight, !1, !0), setTimeout(() => {
          y(0);
        }, e.completeDuration));
      }
    ), de(q({
      scroller: a
    }, he(r)), {
      touchStart: k,
      touchMove: u,
      touchEnd: g,
      getStyle: p,
      translate: l,
      slots: n,
      getHeightStyle: d,
      getPullStatus: i
    });
  }
}), Lm = { class: "nut-pull-refresh-container-topbox-text" };
function Em(e, t, n, l, o, a) {
  const s = W("Loading");
  return c(), f("div", {
    ref: "scroller",
    class: "nut-pull-refresh",
    onTouchstart: t[0] || (t[0] = (...r) => e.touchStart && e.touchStart(...r)),
    onTouchmove: t[1] || (t[1] = (...r) => e.touchMove && e.touchMove(...r)),
    onTouchend: t[2] || (t[2] = (...r) => e.touchEnd && e.touchEnd(...r))
  }, [
    h("div", {
      class: "nut-pull-refresh-container",
      style: A(e.getStyle)
    }, [
      h("div", {
        class: "nut-pull-refresh-container-topbox",
        style: A(e.getHeightStyle)
      }, [
        e.status == "loading" && !e.slots.loading ? (c(), ee(s, {
          key: 0,
          class: "nut-icon-loading nut-pull-refresh-container-topbox-icon"
        })) : N("", !0),
        h("div", Lm, E(e.getPullStatus), 1),
        e.status == "pulling" ? I(e.$slots, "pulling", { key: 1 }) : N("", !0),
        e.status == "loosing" ? I(e.$slots, "loosing", { key: 2 }) : N("", !0),
        e.status == "loading" ? I(e.$slots, "loading", { key: 3 }) : N("", !0),
        e.status == "complete" ? I(e.$slots, "complete", { key: 4 }) : N("", !0)
      ], 4),
      I(e.$slots, "default")
    ], 4)
  ], 544);
}
const Pm = /* @__PURE__ */ Z(Mm, [["render", Em]]), { create: Am } = U("notify"), zm = Am({
  components: {
    NutPopup: ze
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
    }, s = z(!1), r = Q(
      () => e.visible,
      (p) => {
        s.value = e.visible;
        const d = e.duration;
        p && d && (l = setTimeout(() => {
          a();
        }, d));
      },
      { immediate: !0 }
    );
    return { onAfterLeave: () => {
      o(), r && r(), e.unmount && e.unmount(e.id), e.onClose && e.onClose();
    }, clickCover: n, isShowPopup: s };
  }
});
function Vm(e, t, n, l, o, a) {
  const s = W("nut-popup");
  return c(), ee(s, {
    visible: e.isShowPopup,
    "onUpdate:visible": t[1] || (t[1] = (r) => e.isShowPopup = r),
    position: e.position,
    overlay: !1,
    "teleport-disable": e.teleportDisable
  }, {
    default: ne(() => [
      h("div", {
        class: L(["nut-notify", `nut-notify--${e.type}`, e.className]),
        style: A({ color: e.color, background: e.background }),
        onClick: t[0] || (t[0] = (...r) => e.clickCover && e.clickCover(...r))
      }, [
        e.$slots.default ? I(e.$slots, "default", { key: 0 }) : (c(), f(x, { key: 1 }, [
          ge(E(e.msg), 1)
        ], 64))
      ], 6)
    ]),
    _: 3
  }, 8, ["visible", "position", "teleport-disable"]);
}
const Vt = /* @__PURE__ */ Z(zm, [["render", Vm]]), Gt = {
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
let ut = [], vt = [];
const Lo = (e) => {
  if (e) {
    const t = document.getElementById(e);
    vt = vt.filter((n) => n.id !== e), ut = ut.filter((n) => n !== e), t && document.body.removeChild(t);
  } else
    ut.forEach((t) => {
      const n = document.getElementById(t);
      n && document.body.removeChild(n);
    }), vt = [], ut = [];
}, Om = (e) => {
  const t = document.getElementById(e.id);
  if (t) {
    const n = vt.find((o) => o.id === e.id);
    n ? e = q(q(q({}, Gt), n), e) : e = q(q({}, Gt), e);
    const l = oe(Vt, e);
    return en(l, t), l.component.data;
  }
}, ht = (e) => {
  e.unmount = Lo;
  let t;
  if (e.id) {
    if (t = e.id, ut.find((a) => a === e.id))
      return Om(e);
  } else
    t = (/* @__PURE__ */ new Date()).getTime() + "";
  e = q(q({}, Gt), e), e.id = t, ut.push(e.id), vt.push(e);
  const n = document.createElement("view");
  n.id = "notify-" + e.id;
  const o = oe({
    setup() {
      return e.teleport = `#notify-${e.id}`, ve(() => {
        setTimeout(() => {
          e.onClose && e.onClose(), document.body.removeChild(n);
        }, e.duration);
      }), () => be(Vt, e);
    }
  });
  document.body.appendChild(n), en(o, n);
}, gt = (e) => {
  if (!e) {
    console.warn("[NutUI Notify]: msg不能为空");
    return;
  }
}, J4 = {
  text(e, t = {}) {
    return gt(e), ht(de(q({}, t), { msg: e }));
  },
  primary(e, t = {}) {
    return gt(e), ht(de(q({}, t), { msg: e, type: "primary" }));
  },
  success(e, t = {}) {
    return gt(e), ht(de(q({}, t), { msg: e, type: "success" }));
  },
  danger(e, t = {}) {
    return gt(e), ht(de(q({}, t), { msg: e, type: "danger" }));
  },
  warn(e, t = {}) {
    return gt(e), ht(de(q({}, t), { msg: e, type: "warning" }));
  },
  hide() {
    Lo();
  },
  install(e) {
    e.use(Vt);
  }
}, { componentName: Hm, create: Rm } = U("switch"), Fm = Rm({
  components: { Loading1: ra },
  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * @deprecated Please use `disabled` prop instead.
     */
    disable: {
      type: Boolean,
      default: !1
    },
    activeColor: {
      type: String,
      default: ""
    },
    inactiveColor: {
      type: String,
      default: ""
    },
    activeText: {
      type: String,
      default: ""
    },
    inactiveText: {
      type: String,
      default: ""
    },
    activeValue: {
      type: [String, Number, Boolean],
      default: !0
    },
    inactiveValue: {
      type: [String, Number, Boolean],
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["change", "update:modelValue", "update:loading"],
  setup(e, { emit: t }) {
    const n = D(() => e.disabled || e.disable), l = Ze(n), o = D(() => e.modelValue === e.activeValue), a = D(() => {
      const p = Hm;
      return {
        [p]: !0,
        [o.value ? "nut-switch-open" : "nut-switch-close"]: !0,
        [`${p}-disabled`]: l.value,
        [`${p}-base`]: !0
      };
    }), s = D(() => ({
      backgroundColor: o.value ? e.activeColor : e.inactiveColor
    }));
    let r = "";
    const i = (p) => {
      if (e.loading || l.value)
        return;
      const d = o.value ? e.inactiveValue : e.activeValue;
      r = "click", t("update:modelValue", d), t("change", d, p);
    };
    return Q(
      () => e.modelValue,
      (p) => {
        r == "click" ? r = "" : t("change", p);
      }
    ), {
      classes: a,
      style: s,
      isActive: o,
      onClick: i
    };
  }
}), Wm = { class: "nut-switch-button" };
function Ym(e, t, n, l, o, a) {
  const s = W("Loading1");
  return c(), f("view", {
    class: L(e.classes),
    style: A(e.style),
    onClick: t[0] || (t[0] = (...r) => e.onClick && e.onClick(...r))
  }, [
    h("view", Wm, [
      e.loading ? I(e.$slots, "icon", { key: 0 }, () => [
        oe(s, {
          name: "loading",
          color: e.activeColor
        }, null, 8, ["color"])
      ]) : N("", !0),
      e.activeText ? (c(), f(x, { key: 1 }, [
        Se(h("view", { class: "nut-switch-label open" }, E(e.activeText), 513), [
          [Ie, e.isActive]
        ]),
        Se(h("view", { class: "nut-switch-label close" }, E(e.inactiveText), 513), [
          [Ie, !e.isActive]
        ])
      ], 64)) : N("", !0)
    ])
  ], 6);
}
const jm = /* @__PURE__ */ Z(Fm, [["render", Ym]]), { create: Um } = U("toast"), Km = Um({
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
    const l = ce({
      mounted: !1
    });
    ve(() => {
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
    e.duration && s(), Q(
      () => e.duration,
      (y) => {
        y && s();
      }
    );
    const i = D(() => e.type !== "text" ? !0 : e.icon !== null), p = D(() => [
      "nut-toast",
      { "nut-toast-center": e.center },
      { "nut-toast-has-icon": i.value },
      { "nut-toast-cover": e.cover },
      { "nut-toast-loading": e.type === "loading" },
      e.customClass,
      "nut-toast-" + e.size
    ]), d = D(() => ["nut-toast-icon-wrapper", { "nut-toast-icon-no-animation": !e.loadingRotate }]);
    return {
      state: l,
      hide: a,
      clickCover: r,
      hasIcon: i,
      toastBodyClass: p,
      toastIconWrapperClass: d,
      onAfterLeave: () => {
        var y;
        o(), (y = e.unmount) == null || y.call(e, e.id), e.onClose && e.onClose();
      },
      renderIcon: lt
    };
  }
}), Xm = {
  key: 1,
  class: "nut-toast-title"
}, qm = ["innerHTML"];
function Zm(e, t, n, l, o, a) {
  return c(), ee(Qt, {
    name: "toast-fade",
    onAfterLeave: e.onAfterLeave
  }, {
    default: ne(() => [
      Se(h("view", {
        class: L(e.toastBodyClass),
        style: A({
          bottom: e.center ? "auto" : e.bottom,
          "background-color": e.coverColor
        }),
        onClick: t[0] || (t[0] = (...s) => e.clickCover && e.clickCover(...s))
      }, [
        h("view", {
          class: "nut-toast-inner",
          style: A({
            "text-align": e.textAlignCenter ? "center" : "left",
            "background-color": e.bgColor
          })
        }, [
          e.hasIcon ? (c(), f("view", {
            key: 0,
            class: L(e.toastIconWrapperClass)
          }, [
            (c(), ee(Oe(e.renderIcon(e.icon)), { color: "#ffffff" }))
          ], 2)) : N("", !0),
          e.title ? (c(), f("div", Xm, E(e.title), 1)) : N("", !0),
          h("view", {
            class: "nut-toast-text",
            innerHTML: e.msg
          }, null, 8, qm)
        ], 4)
      ], 6), [
        [Ie, e.state.mounted]
      ])
    ]),
    _: 1
  }, 8, ["onAfterLeave"]);
}
const Ot = /* @__PURE__ */ Z(Km, [["render", Zm]]), Jt = {
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
let ct = [], $t = [];
const Eo = (e) => {
  if (e) {
    const t = document.getElementById(e);
    $t = $t.filter((n) => n.id !== e), ct = ct.filter((n) => n !== e), t && document.body.removeChild(t);
  } else
    ct.forEach((t) => {
      const n = document.getElementById(t);
      n && document.body.removeChild(n);
    }), $t = [], ct = [];
}, Gm = (e) => {
  const t = document.getElementById(e.id);
  if (t) {
    const n = $t.find((o) => o.id === e.id);
    n ? e = q(q(q({}, Jt), n), e) : e = q(q({}, Jt), e);
    const l = oe(Ot, e);
    return en(l, t), Po;
  }
}, yt = (e) => {
  e.unmount = Eo;
  let t;
  if (e.id) {
    if (t = e.id, ct.find((n) => n === e.id))
      return Gm(e);
  } else
    t = (/* @__PURE__ */ new Date()).getTime() + "";
  return e = q(q({}, Jt), e), e.id = t, ct.push(e.id), $t.push(e), an(e, {
    wrapper: Ot
  }), Po;
}, Mt = (e) => {
  if (!e) {
    console.warn("[NutUI Toast]: msg不能为空");
    return;
  }
}, Po = {
  text(e, t = {}) {
    return Mt(e), yt(de(q({}, t), { type: "text", msg: e }));
  },
  success(e, t = {}) {
    return Mt(e), yt(de(q({ icon: Lr }, t), { msg: e, type: "success" }));
  },
  fail(e, t = {}) {
    return Mt(e), yt(de(q({ icon: xn }, t), { msg: e, type: "fail" }));
  },
  warn(e, t = {}) {
    return Mt(e), yt(de(q({ icon: eo }, t), { msg: e, type: "warn" }));
  },
  loading(e, t = {}) {
    return yt(de(q({
      icon: rt
    }, t), {
      msg: e,
      type: "loading"
    }));
  },
  hide(e) {
    Eo(e);
  },
  install(e) {
    e.use(Ot);
  }
}, { create: Jm } = U("audio"), Qm = Jm({
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
    Service: kr,
    NutRange: ko
  },
  emits: ["fastBack", "play", "forward", "ended", "changeProgress", "mute", "canPlay"],
  setup(e, { emit: t, slots: n }) {
    const l = z(null), o = ce({
      currentTime: 0,
      currentDuration: "00:00:00",
      percent: 0,
      duration: "00:00:00",
      second: 0,
      hanMuted: e.muted,
      playing: e.autoplay,
      handPlaying: !1
    });
    ve(() => {
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
    }, d = (k) => {
      o.currentDuration = $(k), o.percent = k / o.second * 100;
    }, v = () => {
      o.playing = !1, t("ended");
    }, y = (k) => {
      const u = l.value;
      u.currentTime = o.second * k / 100, t("changeProgress", u.currentTime);
    }, b = () => {
      o.hanMuted = !o.hanMuted, t("mute", o.hanMuted);
    }, $ = (k) => {
      if (!k)
        return "00:00:00";
      let u = parseInt(k), g = Math.floor(u / 3600), m = Math.floor((u - g * 3600) / 60), w = u - g * 3600 - m * 60, S = "";
      return S += ("0" + g.toString()).slice(-2) + ":", S += ("0" + m.toString()).slice(-2) + ":", S += ("0" + w.toString()).slice(-2), S;
    };
    return Q(
      () => o.currentTime,
      (k) => {
        d(k);
      }
    ), Pe("audioParent", {
      children: [],
      props: e,
      audioData: o,
      handleMute: b,
      forward: p,
      fastBack: r,
      changeStatus: i
    }), de(q(q({}, he(e)), he(o)), {
      audioRef: l,
      fastBack: r,
      forward: p,
      changeStatus: i,
      progressChange: y,
      audioEnd: v,
      onTimeupdate: s,
      handleMute: b,
      onCanplay: a,
      slots: n
    });
  }
}), xm = { class: "nut-audio" }, eh = {
  key: 0,
  class: "nut-audio__progress"
}, th = { class: "nut-audio__time" }, nh = { class: "nut-audio__bar" }, oh = /* @__PURE__ */ h("div", { class: "nut-audio__button--custom" }, null, -1), lh = { class: "nut-audio__time" }, sh = {
  key: 1,
  class: "nut-audio__icon"
}, ah = ["controls", "src", "preload", "autoplay", "loop", "muted"];
function rh(e, t, n, l, o, a) {
  const s = W("nut-range"), r = W("Service");
  return c(), f("div", xm, [
    e.type == "progress" ? (c(), f("div", eh, [
      h("div", th, E(e.currentDuration), 1),
      h("div", nh, [
        oe(s, {
          modelValue: e.percent,
          "onUpdate:modelValue": t[0] || (t[0] = (i) => e.percent = i),
          "hidden-range": "",
          "inactive-color": "#cccccc",
          "active-color": "#fa2c19",
          onChange: e.progressChange
        }, {
          button: ne(() => [
            oh
          ]),
          _: 1
        }, 8, ["modelValue", "onChange"])
      ]),
      h("div", lh, E(e.duration), 1)
    ])) : N("", !0),
    e.type == "icon" ? (c(), f("div", sh, [
      h("div", {
        class: L(["nut-audio__icon--box", e.playing ? "nut-audio__icon--play" : "nut-audio__icon--stop"]),
        onClick: t[1] || (t[1] = (...i) => e.changeStatus && e.changeStatus(...i))
      }, [
        e.playing ? (c(), ee(r, {
          key: 0,
          class: "nut-icon-am-rotate nut-icon-am-infinite"
        })) : (c(), ee(r, { key: 1 }))
      ], 2)
    ])) : N("", !0),
    e.type == "none" ? (c(), f("div", {
      key: 2,
      onClick: t[2] || (t[2] = (...i) => e.changeStatus && e.changeStatus(...i))
    }, [
      I(e.$slots, "default")
    ])) : N("", !0),
    e.type != "none" ? I(e.$slots, "default", { key: 3 }) : N("", !0),
    h("audio", {
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
    }, null, 40, ah)
  ]);
}
const ih = /* @__PURE__ */ Z(Qm, [["render", rh]]), { create: uh } = U("audio-operate"), ch = "NutAudioOperate", dh = uh({
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
    const t = Ce(ch), n = Ee("audioParent"), l = ce(n), o = z(at().default);
    return de(q(q({}, he(e)), he(l)), { customSlot: o, translate: t });
  }
}), fh = { class: "nut-audio-operate" };
function ph(e, t, n, l, o, a) {
  const s = W("nut-button");
  return c(), f("div", fh, [
    e.type == "back" ? (c(), f("div", {
      key: 0,
      class: "nut-audio-operate-item",
      onClick: t[0] || (t[0] = (...r) => e.fastBack && e.fastBack(...r))
    }, [
      e.customSlot ? N("", !0) : (c(), ee(s, {
        key: 0,
        type: "primary",
        size: "small"
      }, {
        default: ne(() => [
          ge(E(e.translate("back")), 1)
        ]),
        _: 1
      })),
      I(e.$slots, "default")
    ])) : N("", !0),
    e.type == "play" ? (c(), f("div", {
      key: 1,
      class: "nut-audio-operate-item",
      onClick: t[1] || (t[1] = (...r) => e.changeStatus && e.changeStatus(...r))
    }, [
      e.customSlot ? N("", !0) : (c(), ee(s, {
        key: 0,
        type: "primary",
        size: "small"
      }, {
        default: ne(() => [
          ge(E(e.audioData.playing ? `${e.translate("pause")}` : `${e.translate("start")}`), 1)
        ]),
        _: 1
      })),
      I(e.$slots, "default")
    ])) : N("", !0),
    e.type == "forward" ? (c(), f("div", {
      key: 2,
      class: "nut-audio-operate-item",
      onClick: t[2] || (t[2] = (...r) => e.forward && e.forward(...r))
    }, [
      e.customSlot ? N("", !0) : (c(), ee(s, {
        key: 0,
        type: "primary",
        size: "small"
      }, {
        default: ne(() => [
          ge("快进")
        ]),
        _: 1
      })),
      I(e.$slots, "default")
    ])) : N("", !0),
    e.type == "mute" ? (c(), f("div", {
      key: 3,
      class: "nut-audio-operate-item",
      onClick: t[3] || (t[3] = (...r) => e.handleMute && e.handleMute(...r))
    }, [
      e.customSlot ? N("", !0) : (c(), ee(s, {
        key: 0,
        type: e.audioData.hanMuted ? "default" : "primary",
        size: "small"
      }, {
        default: ne(() => [
          ge(E(e.translate("mute")), 1)
        ]),
        _: 1
      }, 8, ["type"])),
      I(e.$slots, "default")
    ])) : N("", !0)
  ]);
}
const mh = /* @__PURE__ */ Z(dh, [["render", ph]]), Ao = Symbol("nut-avatar"), { create: hh } = U("avatar"), gh = hh({
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
    const { size: t, shape: n, bgColor: l, color: o } = he(e), a = ["large", "normal", "small"], s = Ee(Ao, null), r = z(null), i = D(() => {
      var v, y;
      return {
        ["nut-avatar"]: !0,
        [`nut-avatar-${t.value || ((v = s == null ? void 0 : s.props) == null ? void 0 : v.size) || "normal"}`]: !0,
        [`nut-avatar-${n.value || ((y = s == null ? void 0 : s.props) == null ? void 0 : y.shape) || "round"}`]: !0
      };
    }), p = D(() => {
      var d, v;
      return {
        width: t.value in a ? "" : `${t.value}px`,
        height: t.value in a ? "" : `${t.value}px`,
        backgroundColor: `${l.value}`,
        color: `${o.value}`,
        marginLeft: (d = s == null ? void 0 : s.props) != null && d.span ? `${(v = s == null ? void 0 : s.props) == null ? void 0 : v.span}px` : ""
      };
    });
    return {
      classes: i,
      styles: p,
      avatarRef: r
    };
  }
});
function yh(e, t, n, l, o, a) {
  return c(), f("view", {
    ref: "avatarRef",
    style: A(e.styles),
    class: L(e.classes)
  }, [
    I(e.$slots, "default")
  ], 6);
}
const mn = /* @__PURE__ */ Z(gh, [["render", yh]]), { create: vh } = U("avatar-group"), $h = vh({
  components: {
    NutAvatar: mn
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
    const t = z(null), n = z(99), l = z(), o = D(() => ({
      marginLeft: -1 * Number(e.span) + "px"
    })), a = (r) => {
      let i = 0;
      r && r.$el && (r = r.$el);
      const p = r.children;
      if (e.zIndex === "right")
        for (let d = 0; d < Number(e.maxCount); d++) {
          const v = p[d];
          v.style.zIndex = `${99 - d}`;
        }
      for (let d = Number(e.maxCount); d < p.length; d++) {
        const v = p[d];
        v.className.includes("avater-fold") || (v.style.display = "none", i++);
      }
      n.value = i;
    }, s = (r) => {
      const i = { attributes: !1, childList: !0, subtree: !0 }, p = function(v) {
        let y = !1;
        for (let b of v)
          if (b.type === "childList") {
            y = !0;
            break;
          }
        y && a(r);
      }, d = new MutationObserver(p);
      return d.observe(r, i), d;
    };
    return ve(() => {
      e.maxCount && Te(() => {
        let r = ke(t);
        r && r.$el && (r = r.$el), a(r), l.value = s(r);
      });
    }), Xe(() => {
      var r;
      (r = l.value) == null || r.disconnect();
    }), Pe(Ao, {
      props: e,
      avatarGroupRef: t
    }), {
      styles: o,
      foldCount: n,
      avatarGroupRef: t
    };
  }
});
function bh(e, t, n, l, o, a) {
  const s = W("nut-avatar");
  return c(), f("view", {
    ref: "avatarGroupRef",
    class: "nut-avatar-group",
    style: A(e.styles)
  }, [
    I(e.$slots, "default"),
    e.foldCount > 0 ? (c(), ee(s, {
      key: 0,
      class: "avater-fold",
      color: e.maxColor,
      "bg-color": e.maxBgColor,
      size: e.size,
      shape: e.shape,
      style: A({ magrinLeft: `${e.span}px` })
    }, {
      default: ne(() => [
        ge(E(e.maxContent || e.foldCount), 1)
      ]),
      _: 1
    }, 8, ["color", "bg-color", "size", "shape", "style"])) : N("", !0)
  ], 4);
}
const wh = /* @__PURE__ */ Z($h, [["render", bh]]);
var Et = /* @__PURE__ */ ((e) => (e[e.eq = 1] = "eq", e[e.lt = 2] = "lt", e[e.gt = 3] = "gt", e))(Et || {});
function kh(e, t, n) {
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
const { create: Ch } = U("list"), Sh = Ch({
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
    const n = document.documentElement.clientHeight || document.body.clientHeight || 667, l = z(null), o = z(null), a = z(null), s = ce({
      start: 0,
      originStartIndex: 0,
      scrollTop: 0,
      list: e.listData.slice(),
      cachePositions: [],
      phantomHeight: e.height * e.listData.length
    }), r = D(() => e.containerHeight ? Math.min(e.containerHeight, n) : n), i = D(() => Math.ceil(r.value / e.height)), p = D(() => Math.min(s.originStartIndex + i.value + e.bufferSize, s.list.length)), d = D(() => s.list.slice(s.start, p.value)), v = () => {
      if (a.value)
        return `translate3d(0, ${s.start >= 1 ? s.cachePositions[s.start - 1].bottom : 0}px, 0)`;
    }, y = () => {
      s.cachePositions = [];
      for (let g = 0; g < s.list.length; ++g)
        s.cachePositions[g] = {
          index: g,
          height: e.height,
          top: g * e.height,
          bottom: (g + 1) * (e.height + e.margin),
          dValue: 0
        };
    }, b = () => {
      let g = a.value.childNodes;
      g = Array.from(g).filter((M) => M.nodeType === 1);
      const m = g[0];
      g.forEach((M, C) => {
        if (!M)
          return;
        const T = Ye(M), { height: P } = T, K = s.cachePositions[C + s.start].height - P;
        K && (s.cachePositions[C + s.start].bottom -= K, s.cachePositions[C + s.start].height = P, s.cachePositions[C + s.start].dValue = K);
      });
      let w = 0;
      m && (w = s.start);
      const S = s.cachePositions.length;
      let _ = s.cachePositions[w].dValue;
      s.cachePositions[w].dValue = 0;
      for (let M = w + 1; M < S; ++M) {
        const C = s.cachePositions[M];
        s.cachePositions[M].top = s.cachePositions[M - 1].bottom, s.cachePositions[M].bottom = s.cachePositions[M].bottom - _, C.dValue !== 0 && (_ += C.dValue, C.dValue = 0);
      }
      const B = s.cachePositions[S - 1].bottom;
      s.phantomHeight = B;
    }, $ = (g = 0) => {
      let m = kh(
        s.cachePositions,
        g,
        (S, _) => {
          const B = S.bottom;
          return B === _ ? Et.eq : B < _ ? Et.lt : Et.gt;
        }
      );
      return s.cachePositions[m].bottom < g && (m += 1), m;
    }, k = () => {
      s.originStartIndex = 0, s.start = 0, s.scrollTop = 0, l.value.scrollTop = 0, y(), s.phantomHeight = e.height * s.list.length;
    }, u = () => {
      var S;
      const g = (S = l.value) == null ? void 0 : S.scrollTop, { originStartIndex: m } = s, w = $(g);
      w !== m && (s.originStartIndex = w, s.start = Math.max(s.originStartIndex - e.bufferSize, 0), p.value >= s.list.length - 1 && t("scrollBottom")), t(g > s.scrollTop ? "scrollUp" : "scrollDown", g), s.scrollTop = g;
    };
    return y(), Q(
      () => e.listData,
      (g) => {
        if (s.list = g.slice(), s.list.length === g.length)
          y(), b();
        else {
          k();
          return;
        }
      }
    ), Q(
      () => s.start,
      () => {
        a.value && s.list.length > 0 && b();
      }
    ), de(q({}, he(s)), {
      list: l,
      phantom: o,
      actualContent: a,
      getTransform: v,
      visibleData: d,
      getContainerHeight: r,
      handleScrollEvent: u
    });
  }
});
function Th(e, t, n, l, o, a) {
  return c(), f("div", {
    ref: "list",
    class: "nut-list",
    style: A({ height: `${e.getContainerHeight}px` }),
    onScrollPassive: t[0] || (t[0] = (...s) => e.handleScrollEvent && e.handleScrollEvent(...s))
  }, [
    h("div", {
      ref: "phantom",
      class: "nut-list-phantom",
      style: A({ height: e.phantomHeight + "px" })
    }, null, 4),
    h("div", {
      ref: "actualContent",
      class: "nut-list-container",
      style: A({ transform: e.getTransform() })
    }, [
      (c(!0), f(x, null, ie(e.visibleData, (s, r) => (c(), f("div", {
        key: s,
        class: "nut-list-item"
      }, [
        I(e.$slots, "default", {
          item: s,
          index: r + e.start
        })
      ]))), 128))
    ], 4)
  ], 36);
}
const Nh = /* @__PURE__ */ Z(Sh, [["render", Th]]), Dh = { viewBox: "0 0 100 100" }, _h = ["id"], Ih = ["offset", "stop-color"], Bh = ["d", "stroke-width"], Mh = ["d", "stroke", "stroke-linecap", "stroke-width"], Lh = { class: "nut-circle-progress__text" }, zo = /* @__PURE__ */ Le({
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
    const t = e, n = Math.random().toString(36).slice(-8), l = D(() => {
      const i = t.clockwise ? 1 : 0;
      return `M 50 50 m 0 -45 a 45 45 0 1 ${i} 0 90 a 45 45 0 1, ${i} 0 -90`;
    }), o = D(() => dt(t.color) ? `url(#${n})` : t.color), a = D(() => {
      let i = 283, p = i * Number(t.progress) / 100;
      return {
        stroke: dt(t.color) ? `url(#${n})` : t.color,
        strokeDasharray: `${p}px ${i}px`
      };
    }), s = D(() => ({
      stroke: t.pathColor
    })), r = D(() => {
      if (!dt(t.color))
        return;
      let i = t.color;
      const p = Object.keys(i).sort((v, y) => parseFloat(v) - parseFloat(y));
      let d = [];
      return p.map((v) => {
        let y = {
          key: "",
          value: ""
        };
        y.key = v, y.value = i[v], d.push(y);
      }), d;
    });
    return (i, p) => (c(), f("div", {
      class: "nut-circle-progress",
      style: A({ height: Number(i.radius) * 2 + "px", width: Number(i.radius) * 2 + "px" })
    }, [
      (c(), f("svg", Dh, [
        h("defs", null, [
          h("linearGradient", {
            id: ke(n),
            x1: "100%",
            y1: "0%",
            x2: "0%",
            y2: "0%"
          }, [
            (c(!0), f(x, null, ie(r.value, (d, v) => (c(), f("stop", {
              key: v,
              offset: d.key,
              "stop-color": d.value
            }, null, 8, Ih))), 128))
          ], 8, _h)
        ]),
        h("path", {
          class: "nut-circle-progress__path",
          style: A(s.value),
          d: l.value,
          fill: "none",
          "stroke-width": i.strokeWidth
        }, " > ", 12, Bh),
        h("path", {
          class: "nut-circle-progress__hover",
          style: A(a.value),
          d: l.value,
          fill: "none",
          stroke: o.value,
          "stroke-linecap": i.strokeLinecap,
          "stroke-width": i.strokeWidth
        }, null, 12, Mh)
      ])),
      h("div", Lh, [
        I(i.$slots, "default", {}, () => [
          h("div", null, E(i.progress) + "%", 1)
        ])
      ])
    ], 4));
  }
});
Ae(zo);
const { create: Eh } = U("noticebar"), Ph = Eh({
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
      return e.item.props.style = e.style, e.item.key = e.key, be(e.item);
    },
    Notice: Va,
    CircleClose: nn
  },
  emits: ["click", "close", "acrossEnd"],
  setup(e, { emit: t, slots: n }) {
    const l = z(null), o = z(null), a = ce({
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
    }), s = D(() => a.isCanScroll == null ? e.wrapable : !a.isCanScroll && !e.wrapable), r = D(() => ({
      "nut-noticebar__page-wrap-content": !0,
      "nut-ellipsis": s.value,
      [a.animationClass]: !0
    })), i = D(() => {
      let M = {};
      return e.color && (M.color = e.color), e.background && (M.background = e.background), e.direction == "vertical" && (M.height = `${e.height}px`), M;
    }), p = D(() => ({
      animationDelay: (a.firstRound ? e.delay : 0) + "s",
      animationDuration: a.duration + "s",
      transform: `translateX(${a.firstRound ? 0 : a.wrapWidth + "px"})`
    })), d = D(() => {
      let M = {};
      if (e.complexAm)
        M = {
          transform: `translateY(${a.distance}px)`
        };
      else if (a.animate) {
        let C = ~~(e.height / e.speed / 4);
        M = {
          transition: `all ${C == 0 ? ~~(e.height / e.speed) : C}s`,
          "margin-top": `-${e.height}px`
        };
      }
      return M;
    });
    Q(
      () => e.text,
      () => {
        v();
      }
    ), Q(
      () => e.list,
      (M) => {
        a.scrollList = [].concat(M);
      }
    );
    const v = () => {
      a.showNoticebar != !1 && setTimeout(() => {
        if (!l.value || !o.value)
          return;
        const M = l.value.getBoundingClientRect().width, C = o.value.getBoundingClientRect().width;
        a.isCanScroll = e.scrollable == null ? C > M : e.scrollable, a.isCanScroll ? (a.wrapWidth = M, a.offsetWidth = C, a.duration = C / e.speed, a.animationClass = "play") : a.animationClass = "";
      }, 0);
    }, y = (M) => {
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
    }, g = () => {
      a.timer = setInterval(
        () => {
          let M = 100;
          for (let C = 0; C < M; C++)
            m(C, !(C < M - 1));
        },
        e.standTime + 100 * e.speed
      );
    }, m = (M, C) => {
      setTimeout(() => {
        a.distance -= e.height / 100, C && (a.scrollList.push(a.scrollList[0]), a.scrollList.shift(), a.distance = 0);
      }, M * e.speed);
    }, w = (M) => {
      t("click", M);
    }, S = () => {
      e.closeMode && (a.showNoticebar = !e.closeMode), t("close", a.scrollList[0]);
    };
    ve(() => {
      e.direction == "vertical" ? (n.default ? (_(), B()) : a.scrollList = [].concat(e.list), setTimeout(() => {
        e.complexAm ? g() : k();
      }, e.standTime)) : v();
    });
    const _ = () => {
      n.default && (a.scrollList = [].concat(n.default()[0].children));
    }, B = () => {
      setTimeout(() => {
        var M = new MutationObserver(() => {
          a.showNotica = !1, setTimeout(() => {
            a.showNotica = !0;
          }), _();
        });
        const C = document.getElementsByClassName("nut-noticebar-custom-item")[0];
        C && M.observe(C, {
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
    }), de(q({}, he(a)), {
      isEllipsis: s,
      barStyle: i,
      contentStyle: p,
      horseLampStyle: d,
      wrap: l,
      content: o,
      handleClick: y,
      onClickIcon: b,
      onAnimationEnd: $,
      go: w,
      handleClickIcon: S,
      slots: n,
      pxCheck: _e,
      wrapContentClass: r
    });
  }
}), Ah = { class: "nut-noticebar" }, zh = {
  key: 0,
  class: "nut-noticebar__page-lefticon"
}, Vh = {
  ref: "wrap",
  class: "nut-noticebar__page-wrap"
}, Oh = { class: "showNotica" }, Hh = { class: "nut-noticebar-custom-item" }, Rh = ["onClick"];
function Fh(e, t, n, l, o, a) {
  const s = W("Notice"), r = W("CircleClose"), i = W("ScrollItem");
  return c(), f("view", Ah, [
    e.direction == "across" ? Se((c(), f("view", {
      key: 0,
      class: L(["nut-noticebar__page", {
        "nut-noticebar__page--withicon": e.closeMode,
        "nut-noticebar__page--close": e.closeMode,
        "nut-noticebar__page--wrapable": e.wrapable
      }]),
      style: A(e.barStyle),
      onClick: t[3] || (t[3] = (...p) => e.handleClick && e.handleClick(...p))
    }, [
      e.leftIcon ? (c(), f("view", zh, [
        I(e.$slots, "left-icon", {}, () => [
          oe(s, { size: "16px" })
        ])
      ])) : N("", !0),
      h("view", Vh, [
        h("view", {
          ref: "content",
          class: L(e.wrapContentClass),
          style: A(e.contentStyle),
          onAnimationend: t[0] || (t[0] = (...p) => e.onAnimationEnd && e.onAnimationEnd(...p)),
          onWebkitAnimationEnd: t[1] || (t[1] = (...p) => e.onAnimationEnd && e.onAnimationEnd(...p))
        }, [
          I(e.$slots, "default", {}, () => [
            ge(E(e.text), 1)
          ])
        ], 38)
      ], 512),
      e.closeMode || e.$slots["right-icon"] ? (c(), f("view", {
        key: 1,
        class: "nut-noticebar__page-righticon",
        onClick: t[2] || (t[2] = De((...p) => e.onClickIcon && e.onClickIcon(...p), ["stop"]))
      }, [
        e.$slots["right-icon"] ? I(e.$slots, "right-icon", { key: 0 }) : (c(), ee(r, { key: 1 }))
      ])) : N("", !0)
    ], 6)), [
      [Ie, e.showNoticebar]
    ]) : N("", !0),
    e.scrollList.length > 0 && e.direction == "vertical" && e.showNoticebar ? (c(), f("view", {
      key: 1,
      class: "nut-noticebar__vertical",
      style: A(e.barStyle)
    }, [
      e.slots.default ? (c(), f(x, { key: 0 }, [
        h("view", {
          class: "nut-noticebar__vertical-list",
          style: A(e.horseLampStyle)
        }, [
          h("div", Oh, [
            (c(!0), f(x, null, ie(e.scrollList, (p, d) => (c(), ee(i, {
              key: d,
              style: A({ height: e.height + "px", "line-height": e.height + "px" }),
              item: p
            }, null, 8, ["style", "item"]))), 128))
          ])
        ], 4),
        h("view", Hh, [
          I(e.$slots, "default")
        ])
      ], 64)) : (c(), f("ul", {
        key: 1,
        class: "nut-noticebar__vertical-list",
        style: A(e.horseLampStyle)
      }, [
        (c(!0), f(x, null, ie(e.scrollList, (p, d) => (c(), f("li", {
          key: d,
          class: "nut-noticebar__vertical-item",
          style: A({ height: e.pxCheck(e.height), lineHeight: e.pxCheck(e.height) }),
          onClick: (v) => e.go(p)
        }, E(p), 13, Rh))), 128))
      ], 4)),
      h("view", {
        class: "go",
        onClick: t[4] || (t[4] = (p) => !e.slots.rightIcon && e.handleClickIcon())
      }, [
        I(e.$slots, "right-icon", {}, () => [
          e.closeMode ? (c(), ee(r, {
            key: 0,
            color: e.color,
            size: "11px"
          }, null, 8, ["color"])) : N("", !0)
        ])
      ])
    ], 4)) : N("", !0)
  ]);
}
const Wh = /* @__PURE__ */ Z(Ph, [["render", Fh]]), { create: Yh } = U("empty"), jh = "NutEmpty", Uh = {
  empty: "https://static-ftcms.jd.com/p/files/61a9e3183985005b3958672b.png",
  error: "https://ftcms.jd.com/p/files/61a9e33ee7dcdbcc0ce62736.png",
  network: "https://static-ftcms.jd.com/p/files/61a9e31de7dcdbcc0ce62734.png"
}, Kh = Yh({
  props: {
    image: {
      type: String,
      default: "empty"
    },
    imageSize: {
      type: [Number, String],
      default: ""
    },
    description: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = Ce(jh), n = D(() => e.imageSize ? {
      width: _e(e.imageSize),
      height: _e(e.imageSize)
    } : {});
    return { src: D(() => e.image.startsWith("https://") || e.image.startsWith("http://") || e.image.startsWith("//") ? e.image : Uh[e.image]), style: n, translate: t };
  }
}), Xh = { class: "nut-empty" }, qh = ["src"], Zh = { class: "nut-empty__description" };
function Gh(e, t, n, l, o, a) {
  return c(), f("view", Xh, [
    h("view", {
      class: "nut-empty__box",
      style: A(e.style)
    }, [
      I(e.$slots, "image", {}, () => [
        e.src ? (c(), f("img", {
          key: 0,
          class: "nut-empty__box--img",
          src: e.src
        }, null, 8, qh)) : N("", !0)
      ])
    ], 4),
    I(e.$slots, "description", {}, () => [
      h("view", Zh, E(e.description || e.translate("noData")), 1)
    ]),
    I(e.$slots, "default")
  ]);
}
const Jh = /* @__PURE__ */ Z(Kh, [["render", Gh]]);
function zn(e, t) {
  let n = null, l = Date.now();
  return function() {
    let o = Date.now(), a = t - (o - l);
    n && clearTimeout(n), a <= 0 ? (e.apply(null, arguments), l = Date.now()) : n = setTimeout(e, a);
  };
}
const { create: Qh } = U("video"), xh = "NutVideo", eg = Qh({
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
    const l = Ce(xh), o = ce({
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
    }), a = z(null), s = D(() => e.options.disabled);
    Q(
      () => e.source,
      (O) => {
        O.src && Te(() => {
          o.videoElm.load();
        });
      },
      { immediate: !0, deep: !0 }
    ), Q(
      () => e.options,
      (O) => {
        o.state.isMuted = O ? O.muted : !1;
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
      }), o.videoElm.addEventListener("ended", b), o.videoElm.addEventListener("timeupdate", zn(y, 1e3)));
    }, i = () => {
      const O = a.value, K = a.value.getElementsByClassName("nut-video-controller__progress-value")[0];
      o.player.$player = O, o.progressBar.progressElm = K, o.progressBar.pos = K.getBoundingClientRect(), o.videoSet.progress.width = Math.round(K.getBoundingClientRect().width);
    }, p = () => {
      if (e.options.autoplay && e.options.disabled)
        return o.state.playing = !0, !1;
      if (o.state.playing = !o.state.playing, o.videoElm)
        if (o.state.playing)
          try {
            setTimeout(() => {
              o.videoElm.play();
            }, 200), o.videoElm.addEventListener("progress", () => {
              v();
            }), o.videoElm.addEventListener("timeupdate", zn(y, 1e3)), o.videoElm.addEventListener("ended", b), t("play", o.videoElm);
          } catch (O) {
            $();
          }
        else
          o.videoElm.pause(), t("pause", o.videoElm);
    }, d = (O) => {
      var K = Math.floor(O / 3600);
      +K < 10 && (K = "0" + K);
      var G = Math.floor(O % 3600 / 60);
      +G < 10 && (G = "0" + G);
      var le = Math.round(O % 3600 % 60);
      +le < 10 && (le = "0" + le);
      var Y = "";
      return K != 0 ? Y = K + ":" + G + ":" + le : Y = G + ":" + le, Y;
    }, v = () => {
      o.videoSet.loaded && (o.videoSet.loaded = o.videoElm.buffered.end(0) / o.videoElm.duration * 100);
    }, y = () => {
      const O = o.videoElm.currentTime / o.videoElm.duration;
      o.videoSet.progress.current = Math.round(o.videoSet.progress.width * O), o.videoSet.totalTime = d(o.videoElm.duration), o.videoSet.displayTime = d(o.videoElm.currentTime), t("time", o.videoSet.displayTime, o.videoSet.totalTime);
    }, b = () => {
      o.state.playing = !1, o.state.isEnd = !0, o.videoSet.displayTime = "00:00", o.videoSet.progress.current = 0, o.videoElm.currentTime = 0, t("playend", o.videoElm);
    }, $ = () => {
      o.state.isError = !0;
    }, k = () => {
      o.state.vol = e.options.volume;
    }, u = () => {
      o.state.isMuted = !o.state.isMuted, o.videoElm.muted = o.state.isMuted;
    }, g = () => {
    }, m = (O) => {
      let G = O.targetTouches[0].pageX - o.progressBar.pos.left;
      G <= 0 && (G = 0), G >= o.videoSet.progress.width && (G = o.videoSet.progress.width), o.videoSet.progress.current = G;
      let le = o.videoSet.progress.current / o.videoSet.progress.width;
      o.videoElm.duration && S(le, o.videoElm.duration);
    }, w = (O) => {
      let G = O.changedTouches[0].pageX - o.progressBar.pos.left;
      o.videoSet.progress.current = G;
      let le = G / o.videoSet.progress.width;
      o.videoElm.duration && S(le, o.videoElm.duration);
    }, S = (O, K) => {
      o.videoElm.currentTime = Math.floor(O * K);
    }, _ = () => {
      o.state.isError = !1, r();
    }, B = () => {
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
    }), ve(() => {
      r();
    }), de(q(q({
      root: a
    }, he(e)), he(o)), {
      handleError: $,
      isDisabled: s,
      play: p,
      handleMuted: u,
      touchSlidSrart: g,
      touchSlidMove: m,
      touchSlidEnd: w,
      retry: _,
      fullScreen: B,
      translate: l
    });
  }
}), tg = {
  ref: "videocon",
  class: "nut-video"
}, ng = ["muted", "autoplay", "loop", "poster", "controls", "preload"], og = ["src", "type"], lg = { class: "nut-video-controller__now" }, sg = { class: "nut-video-controller__progress" }, ag = {
  ref: "progressBar",
  class: "nut-video-controller__progress-value"
}, rg = /* @__PURE__ */ h("div", { class: "nut-video-controller__ball-move" }, null, -1), ig = [
  rg
], ug = {
  ref: "playedBar",
  class: "nut-video-controller__played"
}, cg = { class: "nut-video-controller__total" }, dg = { class: "nut-video-error" }, fg = { class: "nut-video-error-tip" };
function pg(e, t, n, l, o, a) {
  return c(), f("div", tg, [
    h("video", {
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
      h("source", {
        src: e.source.src,
        type: e.source.type
      }, null, 8, og)
    ], 40, ng),
    e.showToolbox && !e.isDisabled ? (c(), f("div", {
      key: 0,
      ref: "touchMask",
      class: "nut-video-mask",
      onClick: t[1] || (t[1] = (...s) => e.play && e.play(...s))
    }, null, 512)) : N("", !0),
    e.showToolbox && !e.isDisabled ? Se((c(), f("div", {
      key: 1,
      ref: "palyBtn",
      class: "nut-video-play-btn",
      onClick: t[2] || (t[2] = (...s) => e.play && e.play(...s))
    }, null, 512)), [
      [Ie, !e.state.playing]
    ]) : N("", !0),
    Se(h("div", {
      class: L(["nut-video-controller", { "nut-video-controller--show": !e.state.playing, "nut-video-controller--hide": e.state.playing }])
    }, [
      h("div", {
        class: "nut-video-controller__playbtn",
        onClick: t[3] || (t[3] = (...s) => e.play && e.play(...s))
      }),
      h("div", lg, E(e.videoSet.displayTime), 1),
      h("div", sg, [
        h("div", ag, [
          h("div", {
            class: "buffered",
            style: A({ width: `${e.videoSet.loaded}%` })
          }, null, 4),
          h("div", {
            class: "nut-video-controller__ball",
            style: A({
              transform: `translate3d(${e.videoSet.progress.current}px, -50%, 0)`
            }),
            onTouchmove: t[4] || (t[4] = De((s) => e.touchSlidMove(s), ["stop", "prevent"])),
            onTouchstart: t[5] || (t[5] = De((s) => e.touchSlidSrart(), ["stop"])),
            onTouchend: t[6] || (t[6] = De((s) => e.touchSlidEnd(s), ["stop"]))
          }, ig, 36),
          h("div", ug, null, 512)
        ], 512)
      ]),
      h("div", cg, E(e.videoSet.totalTime), 1),
      h("div", {
        class: L(["nut-video-controller__volume", { muted: e.state.isMuted }]),
        onClick: t[7] || (t[7] = (...s) => e.handleMuted && e.handleMuted(...s))
      }, null, 2),
      h("div", {
        class: "nut-video-controller__full",
        onClick: t[8] || (t[8] = (...s) => e.fullScreen && e.fullScreen(...s))
      })
    ], 2), [
      [Ie, e.showToolbox && !e.isDisabled]
    ]),
    Se(h("div", dg, [
      h("p", fg, E(e.translate("errorTip")), 1),
      h("p", {
        class: "nut-video-error-retry",
        onClick: t[9] || (t[9] = (...s) => e.retry && e.retry(...s))
      }, E(e.translate("clickRetry")), 1)
    ], 512), [
      [Ie, e.state.isError]
    ])
  ], 512);
}
const hn = /* @__PURE__ */ Z(eg, [["render", pg]]), Vo = Symbol("nut-steps"), { create: mg, componentName: hg } = U("steps"), gg = mg({
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
    const l = ce({
      children: []
    }), o = D(() => {
      const r = hg;
      return {
        [r]: !0,
        [`${r}-${e.direction}`]: !0,
        [`${r}-dot`]: !!e.progressDot
      };
    });
    return Pe(Vo, {
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
      return be(
        "view",
        {
          class: o.value
        },
        (r = n.default) == null ? void 0 : r.call(n)
      );
    };
  }
}), { create: yg, componentName: vg } = U("step"), $g = yg({
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
    const { proxy: e } = je(), t = Ee(Vo);
    t.relation(e);
    const n = ce({
      dot: t.props.progressDot
    }), l = D(() => t.state.children.indexOf(e) + 1), o = () => {
      const i = l.value;
      return i < +t.props.current ? "finish" : i === +t.props.current ? "process" : "wait";
    }, a = D(() => o()), s = D(() => {
      const i = vg;
      return {
        [i]: !0,
        [`${i}-${a.value}`]: !0
      };
    }), r = () => {
      t.onEmit(l.value);
    };
    return de(q({}, he(n)), {
      index: l,
      classes: s,
      handleClickStep: r
    });
  }
}), bg = { class: "nut-step-head" }, wg = /* @__PURE__ */ h("view", { class: "nut-step-line" }, null, -1), kg = { class: "nut-step-icon-inner" }, Cg = {
  key: 1,
  class: "nut-step-inner"
}, Sg = { class: "nut-step-main" }, Tg = { class: "nut-step-title" }, Ng = { key: 0 }, Dg = {
  key: 0,
  class: "nut-step-content"
}, _g = ["innerHTML"];
function Ig(e, t, n, l, o, a) {
  return c(), f("view", {
    class: L(e.classes),
    onClick: t[0] || (t[0] = (...s) => e.handleClickStep && e.handleClickStep(...s))
  }, [
    h("view", bg, [
      wg,
      h("view", {
        class: L(["nut-step-icon", [e.dot ? "" : "is-icon"]])
      }, [
        h("view", kg, [
          I(e.$slots, "icon", {}, () => [
            e.dot ? (c(), f(x, { key: 0 }, [], 64)) : (c(), f("view", Cg, E(e.index), 1))
          ])
        ])
      ], 2)
    ]),
    h("view", Sg, [
      h("view", Tg, [
        e.$slots.title ? N("", !0) : (c(), f("span", Ng, E(e.title), 1)),
        I(e.$slots, "title")
      ]),
      e.content || e.$slots.content ? (c(), f("view", Dg, [
        e.$slots.content ? N("", !0) : (c(), f("span", {
          key: 0,
          innerHTML: e.content
        }, null, 8, _g)),
        I(e.$slots, "content")
      ])) : N("", !0)
    ])
  ], 2);
}
const Bg = /* @__PURE__ */ Z($g, [["render", Ig]]), Oo = Symbol("nut-swiper"), { create: Mg, componentName: Vn } = U("swiper"), Lg = Mg({
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
    const o = z(), a = ce({
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
    }), s = et(), r = D(() => e.direction === "vertical"), i = D(() => {
      const R = Vn;
      return {
        [`${R}-inner`]: !0,
        [`${R}-vertical`]: r.value
      };
    }), p = D(() => {
      const R = Vn;
      return {
        [`${R}-pagination`]: !0,
        [`${R}-pagination-vertical`]: r.value
      };
    }), d = D(() => r.value ? s.deltaY.value : s.deltaX.value), v = D(() => s.direction.value === e.direction), y = D(() => a.children.length), b = D(() => a[r.value ? "height" : "width"]), $ = D(() => y.value * b.value), k = D(() => a.rect ? (r.value ? a.rect.height : a.rect.width) - b.value * y.value : 0), u = D(() => (a.active + y.value) % y.value), g = () => {
      let R = 0;
      R = a.offset, a.style = {
        transitionDuration: `${a.moving ? 0 : e.duration}ms`,
        transform: `translate${r.value ? "Y" : "X"}(${R}px)`,
        [r.value ? "height" : "width"]: `${b.value * y.value}px`,
        [r.value ? "width" : "height"]: `${r.value ? a.width : a.height}px`
      };
    }, m = (R) => {
      var ue;
      let te = [];
      const X = a.childrenVNode.length;
      let se = (ue = n == null ? void 0 : n.default) == null ? void 0 : ue.call(n);
      if (se = se.filter((pe) => pe.children && Array.isArray(pe.children)), se.forEach((pe) => {
        te = te.concat(pe.children);
      }), !X)
        a.childrenVNode = te.slice(), R.proxy && a.children.push(R.proxy);
      else if (X > te.length)
        a.children = a.children.filter((pe) => R.proxy !== pe);
      else if (X < te.length) {
        for (let pe = 0; pe < X; pe++)
          if (te[pe].key !== a.childrenVNode[pe].key) {
            R.proxy && a.children.splice(pe, 0, R.proxy), R.vnode && a.childrenVNode.splice(pe, 0, R.vnode);
            break;
          }
        X !== te.length && (R.proxy && a.children.push(R.proxy), R.vnode && a.childrenVNode.push(R.vnode));
      } else
        a.childrenVNode = te.slice(), R.proxy && a.children.push(R.proxy);
    }, w = (R, te = 0) => {
      let X = R * b.value;
      e.loop || (X = Math.min(X, -k.value));
      let se = te - X;
      return e.loop || (se = Ve(se, k.value, 0)), se;
    }, S = (R) => {
      const { active: te } = a;
      return R ? e.loop ? Ve(te + R, -1, y.value) : Ve(te + R, 0, y.value - 1) : te;
    }, _ = ({ pace: R = 0, offset: te = 0, isEmit: X = !1 }) => {
      if (y.value <= 1)
        return;
      const { active: se } = a, ue = S(R), pe = w(ue, te);
      if (e.loop) {
        if (a.children[0] && pe !== k.value) {
          const we = pe < k.value;
          a.children[0].setOffset(we ? $.value : 0);
        }
        if (a.children[y.value - 1] && pe !== 0) {
          const we = pe > 0;
          a.children[y.value - 1].setOffset(we ? -$.value : 0);
        }
      }
      a.active = ue, a.offset = pe, X && se !== a.active && t("change", u.value), g();
    }, B = () => {
      a.moving = !0, a.active <= -1 && _({ pace: y.value }), a.active >= y.value && _({ pace: -y.value });
    }, M = () => {
      a.autoplayTimer && clearTimeout(a.autoplayTimer);
    }, C = (R) => {
      B(), s.reset(), Re(() => {
        Re(() => {
          a.moving = !1, _({
            pace: R,
            isEmit: !0
          });
        });
      });
    }, T = () => {
      C(-1);
    }, P = () => {
      C(1);
    }, O = (R) => {
      B(), s.reset(), Re(() => {
        a.moving = !1;
        let te;
        e.loop && y.value === R ? te = a.active === 0 ? 0 : R : te = R % y.value, _({
          pace: te - a.active,
          isEmit: !0
        });
      });
    }, K = () => {
      +e.autoPlay <= 0 || y.value <= 1 || (M(), a.autoplayTimer = setTimeout(() => {
        P(), K();
      }, Number(e.autoPlay)));
    }, G = (R = +e.initPage) => {
      M(), a.rect = o.value.getBoundingClientRect(), R = Math.min(y.value - 1, R), a.width = e.width ? +e.width : a.rect.width, a.height = e.height ? +e.height : a.rect.height, a.active = R, a.offset = w(a.active), a.moving = !0, g(), K();
    }, le = (R) => {
      e.isPreventDefault && R.preventDefault(), e.isStopPropagation && R.stopPropagation(), e.touchable && (s.start(R), a.touchTime = Date.now(), M(), B());
    }, Y = (R) => {
      e.touchable && a.moving && (s.move(R), v.value && _({
        offset: d.value
      }));
    }, j = () => {
      if (!e.touchable || !a.moving)
        return;
      const R = d.value / (Date.now() - a.touchTime);
      if ((Math.abs(R) > 0.3 || Math.abs(d.value) > +(b.value / 2).toFixed(2)) && v.value) {
        let X = 0;
        const se = r.value ? s.offsetY.value : s.offsetX.value;
        e.loop ? X = se > 0 ? d.value > 0 ? -1 : 1 : 0 : X = -Math[d.value > 0 ? "ceil" : "floor"](d.value / b.value), _({
          pace: X,
          isEmit: !0
        });
      } else
        d.value && _({ pace: 0 });
      a.moving = !1, g(), K();
    };
    return Pe(Oo, {
      props: e,
      size: b,
      relation: m
    }), l({
      prev: T,
      next: P,
      to: O
    }), St(() => {
      M();
    }), xt(() => {
      M();
    }), Q(
      () => e.initPage,
      (R) => {
        Te(() => {
          G(Number(R));
        });
      }
    ), Q(
      () => e.height,
      () => {
        Te(() => {
          G();
        });
      }
    ), Q(
      () => a.children.length,
      () => {
        Te(() => {
          G();
        });
      }
    ), Q(
      () => e.autoPlay,
      (R) => {
        +R > 0 ? K() : M();
      }
    ), {
      state: a,
      classesInner: i,
      classesPagination: p,
      container: o,
      activePagination: u,
      onTouchStart: le,
      onTouchMove: Y,
      onTouchEnd: j
    };
  }
});
function Eg(e, t, n, l, o, a) {
  return c(), f("view", {
    ref: "container",
    class: "nut-swiper",
    onTouchstart: t[0] || (t[0] = (...s) => e.onTouchStart && e.onTouchStart(...s)),
    onTouchmove: t[1] || (t[1] = (...s) => e.onTouchMove && e.onTouchMove(...s)),
    onTouchend: t[2] || (t[2] = (...s) => e.onTouchEnd && e.onTouchEnd(...s)),
    onTouchcancel: t[3] || (t[3] = (...s) => e.onTouchEnd && e.onTouchEnd(...s))
  }, [
    h("view", {
      class: L(e.classesInner),
      style: A(e.state.style)
    }, [
      I(e.$slots, "default")
    ], 6),
    I(e.$slots, "page"),
    e.paginationVisible && !e.$slots.page ? (c(), f("view", {
      key: 0,
      class: L(e.classesPagination)
    }, [
      (c(!0), f(x, null, ie(e.state.children.length, (s, r) => (c(), f("i", {
        key: r,
        style: A({
          backgroundColor: e.activePagination === r ? e.paginationColor : e.paginationUnselectedColor
        }),
        class: L({ active: e.activePagination === r })
      }, null, 6))), 128))
    ], 2)) : N("", !0)
  ], 544);
}
const gn = /* @__PURE__ */ Z(Lg, [["render", Eg]]);
function Pg(e) {
  const t = je();
  t && Object.assign(t.proxy, e);
}
const { create: Ag } = U("swiper-item"), zg = Ag({
  setup() {
    const e = Ee(Oo);
    e.relation(je());
    const t = ce({
      offset: 0
    }), n = D(() => {
      const o = {}, a = e == null ? void 0 : e.props.direction;
      return e != null && e.size.value && (o[a === "horizontal" ? "width" : "height"] = `${e == null ? void 0 : e.size.value}px`), t.offset && (o.transform = `translate${a === "horizontal" ? "X" : "Y"}(${t.offset}px)`), o;
    }), l = (o) => {
      t.offset = o;
    };
    return Xe(() => {
      e.relation(je(), "unmount");
    }), Pg({ setOffset: l }), {
      style: n
    };
  }
});
function Vg(e, t, n, l, o, a) {
  return c(), f("view", {
    class: "nut-swiper-item",
    style: A(e.style)
  }, [
    I(e.$slots, "default")
  ], 4);
}
const yn = /* @__PURE__ */ Z(zg, [["render", Vg]]), Og = ["innerHTML"], Hg = ["innerHTML"], On = "nut-price", Ht = /* @__PURE__ */ Le({
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
    const t = e, n = D(() => ({
      [On]: !0,
      [`${On}--strike`]: t.strikeThrough
    })), l = D(() => t.needSymbol ? t.symbol : ""), o = (r) => String(r).indexOf(".") > 0, a = (r) => (Number(r) == 0 && (r = 0), o(r) ? (r = Number(r).toFixed(t.decimalDigits), r = typeof r.split(".") == "string" ? r.split(".") : r.split(".")[0]) : r = r.toString(), t.thousands ? (r || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,") : r), s = (r) => {
      Number(r) == 0 && (r = 0), o(r) ? (r = Number(r).toFixed(t.decimalDigits), r = typeof r.split(".") == "string" ? 0 : r.split(".")[1] ? r.split(".")[1] : 0) : r = 0;
      const i = "0." + r, p = Number(i).toFixed(t.decimalDigits);
      return String(p).substring(2, p.length);
    };
    return (r, i) => (c(), f("view", {
      class: L(n.value)
    }, [
      r.needSymbol && r.position === "before" ? (c(), f("view", {
        key: 0,
        class: L(["nut-price--symbol", `nut-price--symbol-${r.size}`]),
        innerHTML: l.value
      }, null, 10, Og)) : N("", !0),
      h("view", {
        class: L(`nut-price--${r.size}`)
      }, E(a(r.price)), 3),
      r.decimalDigits != 0 ? (c(), f("view", {
        key: 1,
        class: L(`nut-price--decimal-${r.size}`)
      }, ".", 2)) : N("", !0),
      h("view", {
        class: L(`nut-price--decimal-${r.size}`)
      }, E(s(r.price)), 3),
      r.needSymbol && r.position === "after" ? (c(), f("view", {
        key: 2,
        class: L(["nut-price--symbol", `nut-price--symbol-${r.size}`]),
        innerHTML: l.value
      }, null, 10, Hg)) : N("", !0)
    ], 2));
  }
});
Ae(Ht);
const Ho = {
  show: { type: Boolean, default: !1 },
  initNo: { type: Number, default: 0 },
  showIndex: { type: Boolean, default: !0 },
  minZoom: { type: Number, default: 1 / 3 },
  maxZoom: { type: Number, default: 3 }
}, { create: Rg } = U("image-preview-item"), Fg = Rg({
  props: de(q({}, Ho), {
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
    NutVideo: hn,
    NutSwiperItem: yn
  },
  setup(e, { emit: t }) {
    const n = ce({
      scale: 1,
      moveX: 0,
      moveY: 0,
      moving: !1,
      zooming: !1,
      imageRatio: 0,
      displayWidth: 0,
      displayHeight: 0
    }), l = et(), o = D(() => {
      const { rootWidth: T, rootHeight: P } = e, O = P / T;
      return n.imageRatio > O;
    }), a = D(() => {
      const T = e.image;
      if (T && T.src) {
        const { scale: P, moveX: O, moveY: K, moving: G, zooming: le } = n, Y = {
          transitionDuration: le || G ? "0s" : ".3s"
        };
        if (P !== 1) {
          const j = O / P, R = K / P;
          Y.transform = `scale(${P}, ${P}) translate(${j}px, ${R}px)`;
        }
        return Y;
      }
      return {};
    }), s = D(() => {
      if (n.imageRatio) {
        const { rootWidth: T, rootHeight: P } = e, O = o.value ? P / n.imageRatio : T;
        return Math.max(0, (n.scale * O - T) / 2);
      }
      return 0;
    }), r = D(() => {
      if (n.imageRatio) {
        const { rootWidth: T, rootHeight: P } = e, O = o.value ? P : T * n.imageRatio;
        return Math.max(0, (n.scale * O - P) / 2);
      }
      return 0;
    }), i = (T) => {
      const { naturalWidth: P, naturalHeight: O } = T.target;
      n.imageRatio = O / P;
    }, p = () => {
      d(1), n.moveX = 0, n.moveY = 0;
    }, d = (T) => {
      T = Ve(T, +e.minZoom, +e.maxZoom + 1), T !== n.scale && (n.scale = T, t("scale", {
        scale: T,
        index: e.initNo
      }));
    }, v = () => {
      const T = n.scale > 1 ? 1 : 2;
      d(T), n.moveX = 0, n.moveY = 0;
    }, y = (T) => Math.sqrt(pt(T[0].clientX - T[1].clientX, 2) + pt(T[0].clientY - T[1].clientY, 2));
    let b, $, k, u, g, m, w;
    const S = (T) => {
      const { touches: P } = T, { offsetX: O } = l;
      l.start(T), w = P.length, b = n.moveX, $ = n.moveY, m = Date.now(), n.moving = w === 1 && n.scale !== 1, n.zooming = w === 2 && !O.value, n.zooming && (k = n.scale, u = y(T.touches));
    }, _ = (T) => {
      const { touches: P } = T;
      if (l.move(T), (n.moving || n.zooming) && ft(T, !0), n.moving) {
        const { deltaX: O, deltaY: K } = l, G = O.value + b, le = K.value + $;
        n.moveX = Ve(G, -s.value, s.value), n.moveY = Ve(le, -r.value, r.value);
      }
      if (n.zooming && P.length === 2) {
        const O = y(P), K = k * O / u;
        d(K);
      }
    }, B = () => {
      if (w == 1 && e.video && e.video.source || w > 1)
        return;
      const { offsetX: T, offsetY: P } = l, O = Date.now() - m, K = 250, G = 5;
      T.value < G && P.value < G && O < K && (g ? (clearTimeout(g), g = null, v()) : g = setTimeout(() => {
        e.contentClose && t("close"), g = null;
      }, K));
    }, M = (T) => {
      let P = !1;
      (n.moving || n.zooming) && (P = !0, n.moving && b === n.moveX && $ === n.moveY && (P = !1), T.touches.length || (n.zooming && (n.moveX = Ve(n.moveX, -s.value, s.value), n.moveY = Ve(n.moveY, -r.value, r.value), n.zooming = !1), n.moving = !1, b = 0, $ = 0, k = 1, n.scale < 1 && p(), n.scale > e.maxZoom && (n.scale = +e.maxZoom))), ft(T, P), B(), l.reset();
    }, C = () => {
      t("close");
    };
    return Q(() => e.initNo, p), Q(
      () => e.show,
      (T) => {
        T || p();
      }
    ), de(q({}, he(n)), {
      onTouchStart: S,
      onTouchMove: _,
      onTouchEnd: M,
      getDistance: y,
      imageStyle: a,
      imageLoad: i,
      closeSwiper: C
    });
  }
}), Wg = ["src"];
function Yg(e, t, n, l, o, a) {
  const s = W("nut-video"), r = W("nut-swiper-item");
  return c(), ee(r, { onClick: e.closeSwiper }, {
    default: ne(() => [
      h("view", {
        style: A(e.imageStyle),
        class: "nut-image-preview-box",
        onTouchstart: t[1] || (t[1] = (...i) => e.onTouchStart && e.onTouchStart(...i)),
        onTouchmove: t[2] || (t[2] = (...i) => e.onTouchMove && e.onTouchMove(...i)),
        onTouchend: t[3] || (t[3] = (...i) => e.onTouchEnd && e.onTouchEnd(...i)),
        onTouchcancel: t[4] || (t[4] = (...i) => e.onTouchEnd && e.onTouchEnd(...i))
      }, [
        e.image && e.image.src ? (c(), f("img", {
          key: 0,
          src: e.image.src,
          class: "nut-image-preview-img",
          onLoad: t[0] || (t[0] = (...i) => e.imageLoad && e.imageLoad(...i))
        }, null, 40, Wg)) : N("", !0),
        e.video && e.video.source ? (c(), ee(s, {
          key: 1,
          source: e.video.source,
          options: e.video.options
        }, null, 8, ["source", "options"])) : N("", !0)
      ], 36)
    ]),
    _: 1
  }, 8, ["onClick"]);
}
const jg = /* @__PURE__ */ Z(Fg, [["render", Yg]]), { create: Ug } = U("image-preview"), Kg = Ug({
  props: de(q({}, Ho), {
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
    ImagePreviewItem: jg,
    CircleClose: nn,
    NutPopup: ze,
    NutSwiper: gn
  },
  setup(e, { emit: t }) {
    const n = z(), l = ce({
      showPop: e.show,
      active: 0,
      rootWidth: 0,
      rootHeight: 0
    }), o = D(() => {
      const d = "nut-image-preview-close";
      return `nut-image-preview-close-icon ${e.closeIconPosition == "top-right" ? `${d}-right` : `${d}-left`}`;
    }), a = D(() => jn(e.videos) ? [].concat(e.videos).concat(e.images) : e.images), s = (d) => {
      d !== l.active && (l.active = d, t("change", l.active));
    }, r = () => {
      tn(e.beforeClose, {
        args: [l.active],
        done: () => i()
      });
    }, i = () => {
      l.showPop = !1, t("close");
    }, p = () => {
      if (n.value) {
        const d = Ye(n.value);
        l.rootHeight = d.height, l.rootWidth = d.width;
      }
    };
    return Q(
      () => e.show,
      (d) => {
        l.showPop = d, d && (s(e.initNo), Te(() => {
          p();
        }));
      }
    ), Q(
      () => e.initNo,
      (d) => {
        d != l.active && s(d);
      }
    ), ve(() => {
      s(e.initNo);
    }), de(q({
      swipeRef: n
    }, he(l)), {
      onClose: r,
      mergeImages: a,
      setActive: s,
      iconClasses: o
    });
  }
}), Xg = {
  ref: "swipeRef",
  class: "nut-image-preview"
}, qg = {
  key: 0,
  class: "nut-image-preview-index"
};
function Zg(e, t, n, l, o, a) {
  const s = W("image-preview-item"), r = W("nut-swiper"), i = W("CircleClose"), p = W("nut-popup");
  return c(), ee(p, {
    visible: e.showPop,
    "onUpdate:visible": t[1] || (t[1] = (d) => e.showPop = d),
    "pop-class": "nut-image-preview-custom-pop",
    "teleport-disable": e.teleportDisable,
    teleport: e.teleport,
    "lock-scroll": "",
    onClosed: e.onClose
  }, {
    default: ne(() => [
      h("view", Xg, [
        e.showPop ? (c(), ee(r, {
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
            (c(!0), f(x, null, ie(e.mergeImages, (d, v) => (c(), ee(s, {
              key: v,
              video: v < e.videos.length ? d : {},
              image: v >= e.videos.length ? d : {},
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
        }, 8, ["auto-play", "loop", "init-page", "pagination-visible", "pagination-color", "onChange"])) : N("", !0)
      ], 512),
      e.showIndex ? (c(), f("view", qg, E(e.active + 1) + " / " + E(e.mergeImages.length), 1)) : N("", !0),
      e.closeable ? (c(), f("view", {
        key: 1,
        class: L(e.iconClasses),
        onClick: t[0] || (t[0] = (...d) => e.onClose && e.onClose(...d))
      }, [
        I(e.$slots, "close-icon", {}, () => [
          oe(i, { color: "#ffffff" })
        ])
      ], 2)) : N("", !0)
    ]),
    _: 3
  }, 8, ["visible", "teleport-disable", "teleport", "onClosed"]);
}
const vn = /* @__PURE__ */ Z(Kg, [["render", Zg]]);
class Gg {
  constructor() {
    V(this, "show", !1);
    V(this, "images", []);
    V(this, "videos", []);
    V(this, "contentClose", !0);
    V(this, "initNo", 0);
    V(this, "paginationVisible", !1);
    V(this, "paginationColor", "");
    V(this, "autoplay", 0);
    V(this, "isWrapTeleport", !1);
    V(this, "showIndex", !0);
    V(this, "closeable", !1);
    V(this, "closeIcon", "circle-close");
    V(this, "closeIconPosition", "top-right");
    V(this, "beforeClose");
    V(this, "maxZoom", 3);
    V(this, "minZoom", 1 / 3);
    V(this, "isLoop", !0);
    V(this, "teleport", "body");
  }
}
class Jg {
  constructor(t) {
    V(this, "options", new Gg());
    const n = Object.assign(this.options, t), { unmount: l } = an(n, {
      name: "image-preview",
      components: [ze, hn, gn, yn, Tt],
      wrapper: () => ({
        setup() {
          return () => (n.onClose = () => {
            n.show = !1, Te(() => {
              l();
            });
          }, be(vn, n));
        }
      })
    });
  }
}
const Qg = (e) => new Jg(e);
Qg.install = (e) => {
  e.use(vn);
};
function xg(e) {
  const t = je();
  t && Object.assign(t.proxy, e);
}
const { create: e0 } = U("countup"), t0 = e0({
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
    const n = z(null), l = z([]), o = (C) => {
      C && l.value.push(C);
    }, a = ce({
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
    }), { startFlag: s, scrolling: r, customBgImg: i, type: p } = ce(e);
    Q(
      () => e.customChangeNum,
      () => {
        v(), u(0);
      }
    ), Q(
      () => e.machinePrizeLevel,
      (C) => {
        a.prizeLevelTrun = C;
      }
    ), Q(
      () => e.initNum,
      (C) => {
        a.current = C, a.valFlag = !1, d();
      }
    ), Q(
      () => e.endNum,
      () => {
        a.current = e.initNum, a.valFlag = !1, d();
      }
    );
    const d = () => {
      if (a.valFlag)
        return !1;
      s && (r || i ? p != "machine" && u() : (k(), setTimeout(() => {
        a.valFlag = !0;
      }, 300)));
    }, v = () => {
      clearInterval(Number(a.timer)), a.timer = null;
    }, y = (C, T, P) => {
      const O = (C.toString().split(".")[1] || "").length, K = (T.toString().split(".")[1] || "").length, G = Math.pow(10, Math.max(O, K));
      return P == "-" ? Number((C * G - T * G).toFixed(0)) / G : Number((C * G + T * G).toFixed(0)) / G;
    }, b = (C) => {
      let { num_total_len: T, pointNum: P, initDigit1: O, initDigit2: K, sortFlag: G } = a, le = G == "add" || G == "equal" ? String(K)[C - (T - P)] : 10 - Number(String(K)[C - (T - P)]), Y = G == "add" || G == "equal" ? String(O)[C] : 10 - Number(String(O)[C]), j = C > T - P - 1 ? -le * 100 + "%" : C <= String(O).length - 1 ? -Y * 100 + "%" : 0;
      return j == "-1000%" && (j = 0), j;
    }, $ = (C) => {
      let { num_total_len: T, pointNum: P, initDigit1: O, initDigit2: K } = a, G = String(K)[C - (T - P)];
      return C > T - P - 1 ? G || 0 : C <= String(O).length - 1 ? String(O)[C] : 0;
    }, k = () => {
      let { endNum: C, initNum: T, speed: P, toFixed: O } = e, K = setInterval(() => {
        if (T > C)
          if (Number(a.current) <= C || Number(a.current) <= P)
            a.current = C.toFixed(O), clearInterval(K), t("scrollEnd"), a.valFlag = !1;
          else {
            let G = parseFloat(String(a.current)) - parseFloat(String(P));
            a.current = G.toFixed(O);
          }
        else if (Number(a.current) >= C)
          a.current = C.toFixed(O), clearInterval(K), t("scrollEnd"), a.valFlag = !1;
        else {
          let G = parseFloat(String(a.current)) + parseFloat(String(P));
          a.current = G.toFixed(O);
        }
      }, e.during);
    }, u = (C) => {
      let { initNum: T, endNum: P, toFixed: O, customBgImg: K } = e;
      K && (T = e.customChangeNum);
      let G, le, Y, j;
      T != 0 ? (O != 0 && (T = Number(T.toFixed(O))), String(T).indexOf(".") > -1 ? (G = String(T).split(".")[0].length, le = String(T).split(".")[1].length) : (G = String(T).length, le = 0)) : (G = 1, le = 0), P != 0 ? (O != 0 && (P = Number(P.toFixed(O))), String(P).indexOf(".") > -1 ? (Y = String(P).split(".")[0].length, j = String(P).split(".")[1].length) : (Y = String(P).length, j = 0)) : (Y = 1, j = 0);
      let R = G >= Y ? G : Y, te = le >= j ? le : j;
      a.num_total_len = R + te, a.pointNum = te, T > P ? (a.sortFlag = "reduce", a.to0_10 = [0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], a.totalCount = y(T, P, "-"), a.numberVal = Number(String(T))) : T < P ? (a.sortFlag = "add", a.to0_10 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0], a.totalCount = y(P, T, "-"), a.numberVal = Number(String(P))) : a.sortFlag = "equal";
      var X = 1;
      for (let ue = 0; ue < a.pointNum; ue++)
        X *= 10;
      var se = a.numberVal * X;
      if (a.relNum = se, O != 0 && (a.pointNum = String(a.numberVal).split(".")[1] ? String(a.numberVal).split(".")[1].length : 0, a.num_total_len = String(se).length), String(T).indexOf(".") > -1) {
        let ue = String(T).split(".");
        a.initDigit1 = Number(ue[0]), a.initDigit2 = Number(ue[1]);
      } else
        a.initDigit1 = T, a.initDigit2 = 0;
      r && !K ? Te(() => {
        if (a.sortFlag == "equal")
          return !1;
        let ue = l.value[a.num_total_len - 1];
        g(ue);
      }) : C !== 0 && S();
    }, g = (C) => {
      v();
      var T = 1;
      a.pointNum != 0 && (T = 1 / Math.pow(10, a.pointNum)), a.timer = setInterval(() => {
        m(C), a.totalCount = y(a.totalCount, T, "-"), a.totalCount <= 0 && (v(), t("scrollEnd"), a.valFlag = !1);
      }, e.during);
    }, m = (C) => {
      let T = C.getAttribute("turn-number"), P;
      if (a.sortFlag == "add" ? P = parseInt(String(T)) + 1 : P = parseInt(String(T)) - 1 >= 0 ? parseInt(String(T)) - 1 : 9, C.setAttribute("turn-number", String(P)), (C.style.transition == "none 0s ease 0s" || P == 1 || !C.style.transition) && (C.style.transition = `all linear ${e.during}ms`), P == 10 || a.sortFlag == "reduce" && P == 0) {
        var O = null;
        C.style.top = `-${a.sortFlag == "add" ? P * 100 : (10 - P) * 100}%`, C.setAttribute("turn-number", "0"), O = setTimeout(() => {
          O && clearTimeout(O), C.style.transition = "none", C.style.top = "0", w(C, P);
        }, 0.975 * e.during);
      } else
        C.style.top = `-${a.sortFlag == "add" ? P * 100 : (10 - P) * 100}%`;
      C.style.top == "-100%" && a.sortFlag == "reduce" && m(C.previousSibling);
    }, w = (C, T) => {
      setTimeout(() => {
        T == 10 && C.previousSibling && m(C.previousSibling);
      }, 200);
    }, S = () => {
      Te(() => {
        n.value.addEventListener("webkitTransitionEnd", () => {
          t("scrollEnd"), a.valFlag = !1;
        });
      });
    }, _ = () => {
      for (a.notPrize = []; a.notPrize.length < 3; ) {
        var C = Math.floor(Math.random() * e.machinePrizeNum + 1);
        a.notPrize.indexOf(C) == -1 && a.notPrize.push(C);
      }
    };
    xg({ machineLuck: () => {
      const C = e.machineTurnMore < 0 ? 0 : e.machineTurnMore;
      let T = e.numHeight * e.machinePrizeNum;
      a.prizeLevelTrun < 0 && _();
      for (let P = 0; P < e.machineNum; P++)
        setTimeout(() => {
          let O = T * (P + 1 + parseFloat(String(C)));
          a.prizeYPrev.length != 0 && (a.prizeY[P] = a.prizeYPrev[P]);
          let K = a.prizeYPrev[P] ? a.prizeYPrev[P] : 0, G = O + K + (e.machinePrizeNum - a.prizeLevelTrun + 1) * e.numHeight + (T - K);
          a.prizeLevelTrun < 0 && (G += e.numHeight * a.notPrize[P]), M(
            P,
            // parseFloat((this.machinePrizeNum-(this.prizeLevelTrun-1))*this.numHeight + turn + local),
            G,
            K
          );
        }, 500 * P);
    } });
    const M = (C, T, P) => {
      let O = setInterval(() => {
        if (P <= T)
          P += 10, a.prizeY[C] = parseFloat(String(P));
        else if (clearInterval(O), O = null, a.finshMachine += 1, a.prizeY[C] = T, a.finshMachine == e.machineNum) {
          let K = e.numHeight * e.machinePrizeNum;
          a.prizeYPrev = [], JSON.parse(JSON.stringify(a.prizeY)).forEach((le) => {
            let Y = le;
            for (; Y > K; )
              Y -= K;
            a.prizeYPrev.push(Y);
          }), setTimeout(() => {
            a.finshMachine = 0, a.prizeLevelTrun < 0 ? (t("scrollEnd", !1), a.valFlag = !1) : (t("scrollEnd", !0), a.valFlag = !1);
          }, 130);
        }
      }, 30);
    };
    return ve(() => {
      a.current = e.initNum, Te(() => {
        d();
      });
    }), Xe(() => {
      v(), a.timer = null;
    }), de(q(q({}, he(a)), he(ce(e))), {
      runNumberImg: n,
      setRef: o,
      topNumber: b,
      turnNumber: $
    });
  }
}), n0 = { class: "nut-countup" }, o0 = ["turn-number"];
function l0(e, t, n, l, o, a) {
  return c(), f("view", n0, [
    e.customBgImg != "" ? (c(), f(x, { key: 0 }, [
      e.type == "machine" ? (c(), f("view", {
        key: 0,
        class: "nut-countup__machine",
        style: A({ height: e.numHeight + "px" })
      }, [
        (c(!0), f(x, null, ie(e.machineNum, (s, r) => (c(), f("view", {
          key: "mImg" + r,
          class: "nut-countup__machine-item",
          style: A({
            width: e.numWidth + "px",
            height: e.numHeight + "px",
            backgroundImage: "url(" + e.customBgImg + ")",
            backgroundPositionY: e.prizeY[r] + "px"
          })
        }, null, 4))), 128))
      ], 4)) : (c(), f("view", {
        key: 1,
        ref: "runNumberImg",
        class: "nut-countup__numberimg",
        style: A({ height: e.numHeight + "px" })
      }, [
        (c(!0), f(x, null, ie(e.num_total_len, (s, r) => (c(), f("view", {
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
        e.pointNum > 0 ? (c(), f("view", {
          key: 0,
          class: "nut-countup-pointstyl",
          style: A({
            width: e.numWidth / 2 + "px",
            bottom: 0,
            left: e.numWidth * (e.num_total_len - e.pointNum) * 1.1 + "px",
            fontSize: "30px"
          })
        }, ".", 4)) : N("", !0)
      ], 4))
    ], 64)) : (c(), f(x, { key: 1 }, [
      e.scrolling ? (c(), f("view", {
        key: 0,
        class: "nut-countup__number",
        style: A({
          width: e.numWidth * e.num_total_len + e.numWidth / 3 + "px",
          height: e.numHeight + "px",
          lineHeight: e.numHeight + "px"
        })
      }, [
        (c(!0), f(x, null, ie(e.num_total_len, (s, r) => (c(), f("view", {
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
          (c(!0), f(x, null, ie(e.to0_10, (i, p) => (c(), f("view", {
            key: "dote" + p,
            class: "nut-countup__number-item__span",
            style: A({
              width: e.numWidth + "px",
              height: e.numHeight + "px",
              lineHeight: e.numHeight + "px"
            })
          }, E(i), 5))), 128))
        ], 12, o0))), 128)),
        e.pointNum > 0 ? (c(), f("view", {
          key: 0,
          class: "nut-countup-pointstyl",
          style: A({
            width: e.numWidth / 3 + "px",
            height: e.numHeight + "px",
            lineHeight: e.numHeight + "px",
            top: 0,
            left: e.numWidth * (e.num_total_len - e.pointNum) + "px"
          })
        }, ".", 4)) : N("", !0)
      ], 4)) : (c(), f(x, { key: 1 }, [
        ge(E(e.current), 1)
      ], 64))
    ], 64))
  ]);
}
const s0 = /* @__PURE__ */ Z(t0, [["render", l0]]), a0 = (e) => {
  if (!e)
    return Date.now();
  let t = e;
  return t = +t > 0 ? +t : t.toString().replace(/-/g, "/"), new Date(t).getTime();
}, { create: r0 } = U("countdown"), i0 = "NutCountdown", u0 = r0({
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
    const l = Ce(i0), o = ce({
      restTime: 0,
      // 倒计时剩余时间时间
      timer: null,
      counting: !e.paused && e.autoStart,
      // 是否处于倒计时中
      handleEndTime: Date.now(),
      // 最终截止时间
      diffTime: 0
      // 设置了 startTime 时，与 date.now() 的差异
    }), a = D(() => i(o.restTime)), s = () => {
      o.handleEndTime = Number(e.endTime), o.diffTime = Date.now() - a0(e.startTime), o.counting || (o.counting = !0), r();
    }, r = () => {
      window !== void 0 && (o.timer = requestAnimationFrame(() => {
        if (o.counting) {
          const b = Date.now() - o.diffTime, $ = Math.max(o.handleEndTime - b, 0);
          o.restTime = $, $ || (o.counting = !1, v(), t("end"), t("onEnd")), $ > 0 && r();
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
      const g = 1e3, m = 60 * g, w = 60 * m, S = 24 * w;
      return k > 0 && (u.d = k >= g ? Math.floor(k / S) : 0, u.h = Math.floor(k % S / w), u.m = Math.floor(k % w / m), u.s = Math.floor(k % m / g), u.ms = Math.floor(k % g)), $ == "custom" ? u : p(q({}, u));
    }, p = (b) => {
      let { d: $, h: k, m: u, s: g, ms: m } = b, w = e.format;
      if (w.includes("DD") ? w = w.replace("DD", Qe($)) : k += Number($) * 24, w.includes("HH") ? w = w.replace("HH", Qe(k)) : u += Number(k) * 60, w.includes("mm") ? w = w.replace("mm", Qe(u)) : g += Number(u) * 60, w.includes("ss") ? w = w.replace("ss", Qe(g)) : m += Number(g) * 1e3, w.includes("S")) {
        const S = Qe(m, 3).toString();
        w.includes("SSS") ? w = w.replace("SSS", S) : w.includes("SS") ? w = w.replace("SS", S.slice(0, 2)) : w.includes("S") && (w = w.replace("S", S.slice(0, 1)));
      }
      return w;
    }, d = () => {
      !o.counting && !e.autoStart && (o.counting = !0, o.handleEndTime = Date.now() + Number(o.restTime), r(), t("restart", o.restTime), t("onRestart", o.restTime));
    }, v = () => {
      cancelAnimationFrame(o.timer), o.counting = !1, t("paused", o.restTime), t("onPaused", o.restTime);
    }, y = () => {
      e.autoStart || (v(), o.restTime = Number(e.time));
    };
    return Fn(() => {
      e.autoStart ? s() : o.restTime = Number(e.time);
    }), Q(
      () => o.restTime,
      (b) => {
        let $ = i(b, "custom");
        t("update:modelValue", $), t("input", $);
      }
    ), Q(
      () => e.paused,
      (b, $) => {
        $ ? (o.counting || (o.counting = !0, o.handleEndTime = Date.now() + Number(o.restTime), r()), t("restart", o.restTime), t("onRestart", o.restTime)) : o.counting && v();
      }
    ), Q(
      () => e.endTime,
      () => {
        s();
      }
    ), Q(
      () => e.startTime,
      () => {
        s();
      }
    ), de(q({}, he(e)), {
      slots: n,
      start: d,
      pause: v,
      renderTime: a,
      translate: l,
      reset: y
    });
  }
}), c0 = { class: "nut-countdown" }, d0 = ["innerHTML"];
function f0(e, t, n, l, o, a) {
  return c(), f("view", c0, [
    e.slots.default ? I(e.$slots, "default", { key: 0 }) : (c(), f("view", {
      key: 1,
      class: "nut-countdown__content",
      innerHTML: e.renderTime
    }, null, 8, d0))
  ]);
}
const p0 = /* @__PURE__ */ Z(u0, [["render", f0]]), { create: m0 } = U("tag"), h0 = m0({
  props: {
    color: {
      type: String,
      default: ""
    },
    textColor: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "default"
    },
    plain: {
      type: Boolean,
      default: !1
    },
    round: {
      type: Boolean,
      default: !1
    },
    mark: {
      type: Boolean,
      default: !1
    },
    closeable: {
      type: Boolean,
      default: !1
    }
  },
  components: {
    Close: At
  },
  emits: ["close", "click"],
  setup(e, { emit: t }) {
    const n = D(() => {
      const s = "nut-tag";
      return {
        [s]: !0,
        [`${s}--${e.type}`]: e.type,
        [`${s}--plain`]: e.plain,
        [`${s}--round`]: e.round,
        [`${s}--mark`]: e.mark
      };
    }), l = D(() => {
      const s = {};
      return e.textColor ? s.color = e.textColor : e.color && e.plain && (s.color = e.color), e.plain ? (s.background = "#fff", s["border-color"] = e.color) : e.color && (s.background = e.color), s;
    });
    return {
      classes: n,
      style: l,
      onClose: (s) => {
        s.stopPropagation(), t("close", s);
      },
      onClick: (s) => {
        t("click", s);
      }
    };
  }
});
function g0(e, t, n, l, o, a) {
  const s = W("Close");
  return c(), f("view", {
    class: L(e.classes),
    style: A(e.style),
    onClick: t[0] || (t[0] = (...r) => e.onClick && e.onClick(...r))
  }, [
    I(e.$slots, "default"),
    e.closeable ? (c(), ee(s, {
      key: 0,
      class: "nut-tag--close",
      width: "12px",
      height: "12px",
      onClick: e.onClose
    }, null, 8, ["onClick"])) : N("", !0)
  ], 6);
}
const Ro = /* @__PURE__ */ Z(h0, [["render", g0]]), { create: y0 } = U("popover"), v0 = y0({
  components: {
    NutPopup: ze
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
    }), r = D(() => {
      const g = "nut-popover-arrow", m = e.location, w = m.split("-")[0];
      return `${g} ${g}-${w} ${g}--${m}`;
    }), i = D(() => {
      const g = {}, { bgColor: m, arrowOffset: w, location: S } = e, _ = S.split("-")[0], B = S.split("-")[1], M = 16;
      return m && (g[`border${p(_)}Color`] = m), e.arrowOffset != 0 && (["bottom", "top"].includes(_) && (B || (g.left = `calc(50% + ${w}px)`), B == "start" && (g.left = `${M + w}px`), B == "end" && (g.right = `${M - w}px`)), ["left", "right"].includes(_) && (B || (g.top = `calc(50% - ${w}px)`), B == "start" && (g.top = `${M - w}px`), B == "end" && (g.bottom = `${M + w}px`))), g;
    }), p = (g) => (g = g.toLowerCase(), g = g.replace(/\b\w+\b/g, (m) => m.substring(0, 1).toUpperCase() + m.substring(1)), g), d = D(() => {
      const g = {};
      if (!a.value)
        return {};
      const m = s.value.width, w = s.value.height, { width: S, height: _, left: B, top: M, right: C } = a.value, { location: T, offset: P } = e, O = T == null ? void 0 : T.split("-")[0], K = T == null ? void 0 : T.split("-")[1];
      let G = 0, le = 0;
      if (Array.isArray(P) && (P == null ? void 0 : P.length) === 2 && (G += Number(P[1]), le += Number(P[0])), S) {
        if (["bottom", "top"].includes(O)) {
          const Y = O === "bottom" ? _ + G : -(w + G);
          g.top = `${M + Y}px`, K || (g.left = `${-(m - S) / 2 + B + le}px`), K === "start" && (g.left = `${B + le}px`), K === "end" && (g.left = `${C + le}px`);
        }
        if (["left", "right"].includes(O)) {
          const Y = O === "left" ? -(m + G) : S + G;
          g.left = `${B + Y}px`, K || (g.top = `${M - w / 2 + _ / 2 - 4 + le}px`), K === "start" && (g.top = `${M + le}px`), K === "end" && (g.top = `${M + _ + le}px`);
        }
      }
      return g;
    }), v = () => {
      var m, w, S, _;
      const g = Ye(
        e.targetId ? document.querySelector(`#${e.targetId}`) : n.value
      );
      a.value = {
        width: g.width,
        height: g.height,
        left: g.left,
        top: g.top + Math.max(((m = document.documentElement) == null ? void 0 : m.scrollTop) || 0, ((w = document.body) == null ? void 0 : w.scrollTop) || 0),
        right: g.right
      }, s.value = {
        height: (S = l.value) == null ? void 0 : S.clientHeight,
        width: (_ = l.value) == null ? void 0 : _.clientWidth
      };
    };
    ve(() => {
      setTimeout(() => {
        v();
      }, 300);
    }), Q(
      () => e.visible,
      (g) => {
        o.value = g, g ? (window.addEventListener("touchstart", u, !0), Te(() => {
          v();
        })) : window.removeEventListener("touchstart", u, !0);
      }
    );
    const y = (g) => {
      t("update", g), t("update:visible", g);
    }, b = () => {
      y(!e.visible), t("open");
    }, $ = () => {
      t("update:visible", !1), t("close");
    }, k = (g, m) => {
      !g.disabled && t("choose", g, m), e.closeOnClickAction && $();
    }, u = (g) => {
      const m = n.value, w = l.value;
      let S = m && !m.contains(g.target);
      if (e.targetId) {
        const _ = document.querySelector(`#${e.targetId}`);
        S = _ && !_.contains(g.target);
      }
      S && w && !w.contains(g.target) && e.closeOnClickOutside && $();
    };
    return {
      showPopup: o,
      openPopover: b,
      popoverArrow: r,
      closePopover: $,
      chooseItem: k,
      popoverRef: n,
      popoverContentRef: l,
      getRootPosition: d,
      popoverArrowStyle: i,
      renderIcon: lt
    };
  }
}), $0 = {
  ref: "popoverContentRef",
  class: "nut-popover-content-group"
}, b0 = ["onClick"], w0 = { class: "nut-popover-menu-item-name" };
function k0(e, t, n, l, o, a) {
  const s = W("nut-popup");
  return c(), f(x, null, [
    e.targetId ? N("", !0) : (c(), f("div", {
      key: 0,
      ref: "popoverRef",
      class: "nut-popover-wrapper",
      onClick: t[0] || (t[0] = (...r) => e.openPopover && e.openPopover(...r))
    }, [
      I(e.$slots, "reference")
    ], 512)),
    (c(), ee(Rn, { to: "body" }, [
      h("div", {
        class: L(["nut-popover", `nut-popover--${e.theme}`, `${e.customClass}`]),
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
            h("div", $0, [
              e.showArrow ? (c(), f("div", {
                key: 0,
                class: L(e.popoverArrow),
                style: A(e.popoverArrowStyle)
              }, null, 6)) : N("", !0),
              I(e.$slots, "content"),
              (c(!0), f(x, null, ie(e.list, (r, i) => (c(), f("div", {
                key: i,
                class: L([r.className, r.disabled && "nut-popover-menu-disabled", "nut-popover-menu-item"]),
                onClick: De((p) => e.chooseItem(r, i), ["stop"])
              }, [
                r.icon ? (c(), ee(Oe(e.renderIcon(r.icon)), {
                  key: 0,
                  class: "nut-popover-item-img"
                })) : N("", !0),
                h("div", w0, E(r.name), 1)
              ], 10, b0))), 128))
            ], 512)
          ]),
          _: 3
        }, 8, ["visible", "pop-class", "style", "overlay", "duration", "overlay-style", "overlay-class", "close-on-click-overlay"])
      ], 6)
    ]))
  ], 64);
}
const Fo = /* @__PURE__ */ Z(v0, [["render", k0]]), { create: C0 } = U("skeleton"), S0 = C0({
  components: {
    NutAvatar: mn
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
    const { avatarShape: t, round: n, avatarSize: l } = he(e), o = D(() => {
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
}), T0 = { key: 0 }, N0 = {
  key: 1,
  class: "nut-skeleton"
}, D0 = {
  key: 0,
  class: "nut-skeleton-animation"
}, _0 = { class: "nut-skeleton-content" };
function I0(e, t, n, l, o, a) {
  const s = W("nut-avatar");
  return e.loading ? (c(), f("view", N0, [
    e.animated ? (c(), f("view", D0)) : N("", !0),
    h("view", _0, [
      e.avatar ? (c(), ee(s, {
        key: 0,
        class: L(e.avatarClass),
        shape: e.avatarShape,
        style: A(e.getStyle())
      }, null, 8, ["class", "shape", "style"])) : N("", !0),
      h("view", {
        class: "nut-skeleton-content__line",
        style: A({ width: e.width })
      }, [
        e.title ? (c(), f("view", {
          key: 0,
          class: L(e.getBlockClass("nut-skeleton-blockTitle")),
          style: A({ height: e.height })
        }, null, 6)) : N("", !0),
        (c(!0), f(x, null, ie(Number(e.row), (r) => (c(), f("view", {
          key: r,
          class: L(e.getBlockClass("nut-skeleton-blockLine")),
          style: A({ height: e.height })
        }, null, 6))), 128))
      ], 4)
    ])
  ])) : (c(), f("view", T0, [
    I(e.$slots, "default")
  ]));
}
const B0 = /* @__PURE__ */ Z(S0, [["render", I0]]), Wo = Symbol("nut-collapse"), M0 = { class: "nut-collapse" }, Yo = /* @__PURE__ */ Le({
  name: "NutCollapse",
  __name: "collapse",
  props: {
    modelValue: { default: "" },
    accordion: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const n = e, l = t, o = z(n.modelValue || (n.accordion ? "" : []));
    Q(
      () => n.modelValue,
      (i) => {
        o.value = i;
      }
    );
    const a = (i, p, d = !0) => {
      o.value = i, l("update:modelValue", i), l("change", i, p, d);
    };
    return Pe(Wo, {
      updateVal: (i) => {
        if (n.accordion)
          o.value === i ? a("", i, !1) : a(i, i, !0);
        else if (Array.isArray(o.value))
          if (o.value.includes(i)) {
            const p = o.value.filter((d) => d !== i);
            a(p, i, !1);
          } else {
            const p = o.value.concat([i]);
            a(p, i, !0);
          }
        else
          console.warn("[NutUI] <Collapse> 未开启手风琴模式时 v-model 应为数组");
      },
      isExpanded: (i) => n.accordion ? o.value === i : Array.isArray(o.value) ? o.value.includes(i) : !1
    }), (i, p) => (c(), f("view", M0, [
      I(i.$slots, "default")
    ]));
  }
});
Ae(Yo);
const L0 = { class: "nut-collapse-item__title-main" }, E0 = { class: "nut-collapse-item__title-main-value" }, P0 = ["innerHTML"], A0 = {
  key: 2,
  class: "nut-collapse-item__title-label"
}, z0 = {
  key: 0,
  class: "nut-collapse-item__title-sub"
}, V0 = ["innerHTML"], O0 = {
  key: 0,
  class: "nut-collapse__item-extraWrapper"
}, H0 = { class: "nut-collapse__item-extraWrapper__extraRender" }, jo = /* @__PURE__ */ Le({
  name: "NutCollapseItem",
  __name: "collapse-item",
  props: {
    title: { default: "" },
    value: { default: "" },
    label: { default: "" },
    disabled: { type: Boolean, default: !1 },
    name: { default: -1 },
    border: { type: Boolean, default: !0 },
    icon: { default: () => Qn },
    rotate: { default: 180 }
  },
  setup(e) {
    const t = e, n = z(null), l = z(null), o = Ee(Wo), a = D(() => {
      const y = "nut-collapse-item";
      return {
        [y]: !0,
        [y + "__border"]: t.border
      };
    }), s = D(() => o ? o.isExpanded(t.name) : !1), r = z(s.value ? "auto" : "0px"), i = () => {
      o && o.updateVal(t.name);
    }, p = () => {
      s.value && (r.value = "auto");
    }, d = () => {
      r.value = "0px", requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          var b;
          const y = (b = l.value) == null ? void 0 : b.offsetHeight;
          r.value = y ? `${y}px` : "auto";
        });
      });
    }, v = () => {
      var b;
      const y = (b = l.value) == null ? void 0 : b.offsetHeight;
      r.value = y ? `${y}px` : "auto", requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          r.value = "0px";
        });
      });
    };
    return Q(s, (y) => {
      y ? d() : v();
    }), (y, b) => (c(), f("view", {
      class: L(a.value)
    }, [
      h("view", {
        class: L(["nut-collapse-item__title", { "nut-collapse-item__title--disabled": y.disabled }]),
        onClick: i
      }, [
        h("view", L0, [
          h("view", E0, [
            y.$slots.title ? I(y.$slots, "title", { key: 0 }) : (c(), f("view", {
              key: 1,
              class: "nut-collapse-item__title-mtitle",
              innerHTML: y.title
            }, null, 8, P0)),
            y.label ? (c(), f("view", A0, E(y.label), 1)) : N("", !0)
          ])
        ]),
        y.$slots.value ? (c(), f("view", z0, [
          I(y.$slots, "value")
        ])) : (c(), f("view", {
          key: 1,
          class: "nut-collapse-item__title-sub",
          innerHTML: y.value
        }, null, 8, V0)),
        h("view", {
          class: L(["nut-collapse-item__title-icon", { "nut-collapse-item__title-icon--expanded": s.value }]),
          style: A({ transform: "rotate(" + (s.value ? y.rotate : 0) + "deg)" })
        }, [
          y.$slots.icon ? I(y.$slots, "icon", { key: 0 }) : (c(), ee(Oe(ke(lt)(y.icon)), { key: 1 }))
        ], 6)
      ], 2),
      y.$slots.extra ? (c(), f("view", O0, [
        h("div", H0, [
          I(y.$slots, "extra")
        ])
      ])) : N("", !0),
      h("view", {
        ref_key: "wrapperRef",
        ref: n,
        class: "nut-collapse__item-wrapper",
        style: A({
          willChange: "height",
          height: r.value
        }),
        onTransitionend: p
      }, [
        h("view", {
          ref_key: "contentRef",
          ref: l,
          class: "nut-collapse__item-wrapper__content"
        }, [
          I(y.$slots, "default")
        ], 512)
      ], 36)
    ], 2));
  }
});
Ae(jo);
const R0 = Le({
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
    return () => be("view", {}, e.slots[0] ? e.slots[0](e.record) : e.slots[1](e.record));
  }
}), { create: F0 } = U("table"), W0 = "NutTable", Y0 = F0({
  components: {
    RenderColumn: R0,
    DownArrow: Qn
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
    const n = Ce(W0), l = ce({
      curData: e.data
    }), o = (v) => ({
      "nut-table__main__head__tr--border": e.bordered,
      [`nut-table__main__head__tr--align${v.align ? v.align : ""}`]: !0
    }), a = (v) => v.stylehead ? v.stylehead : "", s = (v) => v.stylecolumn ? v.stylecolumn : "", r = (v) => e.columns.filter((y) => y.key === v)[0], i = (v) => {
      const y = e.columns.filter((b) => b.key === v);
      return y[0].stylecolumn ? y[0].stylecolumn : "";
    }, p = (v) => {
      v.sorter && (t("sorter", v), l.curData = typeof v.sorter == "function" ? l.curData.sort(v.sorter) : v.sorter === "default" ? l.curData.sort() : l.curData);
    }, d = () => e.columns.map((v) => [v.key, v.render]);
    return Q(
      () => e.data,
      (v) => {
        l.curData = v.slice();
      }
    ), de(q({}, he(l)), {
      cellClasses: o,
      getColumnItem: r,
      getColumnItemStyle: i,
      handleSorterClick: p,
      sortDataItem: d,
      translate: n,
      stylehead: a,
      stylecolumn: s
    });
  }
}), j0 = { class: "nut-table" }, U0 = { class: "nut-table__main__head" }, K0 = { class: "nut-table__main__head__tr" }, X0 = ["onClick"], q0 = { class: "nut-table__main__body" }, Z0 = { key: 1 }, G0 = {
  key: 0,
  class: "nut-table__nodata"
}, J0 = {
  key: 0,
  class: "nut-table__nodata__text"
}, Q0 = {
  key: 1,
  class: "nut-table__summary"
}, x0 = ["innerHTML"];
function ey(e, t, n, l, o, a) {
  const s = W("DownArrow"), r = W("RenderColumn");
  return c(), f("view", j0, [
    h("view", {
      class: L(["nut-table__main", { "nut-table__main--striped": e.striped }])
    }, [
      h("view", U0, [
        h("view", K0, [
          (c(!0), f(x, null, ie(e.columns, (i) => (c(), f("span", {
            key: i.key,
            class: L(["nut-table__main__head__tr__th", e.cellClasses(i)]),
            style: A(i.stylehead),
            onClick: (p) => e.handleSorterClick(i)
          }, [
            ge(E(i.title) + " ", 1),
            I(e.$slots, "icon"),
            !e.$slots.icon && i.sorter ? (c(), ee(s, {
              key: 0,
              width: "12px",
              height: "12px"
            })) : N("", !0)
          ], 14, X0))), 128))
        ])
      ]),
      h("view", q0, [
        (c(!0), f(x, null, ie(e.curData, (i) => (c(), f("view", {
          key: i,
          class: "nut-table__main__body__tr"
        }, [
          (c(!0), f(x, null, ie(e.sortDataItem(), ([p, d]) => (c(), f("span", {
            key: p,
            class: L(["nut-table__main__body__tr__td", e.cellClasses(e.getColumnItem(p))]),
            style: A(e.getColumnItemStyle(p))
          }, [
            typeof i[p] == "function" || typeof d == "function" ? (c(), ee(r, {
              key: 0,
              slots: [d, i[p]],
              record: i
            }, null, 8, ["slots", "record"])) : (c(), f("view", Z0, E(i[p]), 1))
          ], 6))), 128))
        ]))), 128))
      ])
    ], 2),
    e.curData.length ? N("", !0) : (c(), f("view", G0, [
      h("div", {
        class: L(["nut-table__nodata", { "nut-table__nodata--border": e.bordered }])
      }, [
        I(e.$slots, "nodata"),
        e.$slots.nodata ? N("", !0) : (c(), f("div", J0, E(e.translate("noData")), 1))
      ], 2)
    ])),
    e.summary ? (c(), f("view", Q0, [
      h("span", {
        class: "nut-table__summary__text",
        innerHTML: e.summary().value
      }, null, 8, x0)
    ])) : N("", !0)
  ]);
}
const ty = /* @__PURE__ */ Z(Y0, [["render", ey]]), ny = { class: "nut-animate" }, Uo = /* @__PURE__ */ Le({
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
    const n = e, l = t, o = z(n.action === "initial" || n.show === !0 || n.loop), a = D(() => ({
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
    return Q(
      () => n.show,
      (i) => {
        i && (s(), l("animate"));
      }
    ), (i, p) => (c(), f("view", ny, [
      h("view", {
        class: L(a.value),
        style: A({
          animationDuration: i.duration ? `${i.duration}ms` : void 0
        }),
        onClick: r
      }, [
        I(i.$slots, "default")
      ], 6)
    ]));
  }
});
Ae(Uo);
const { create: oy } = U("ellipsis"), ly = oy({
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
    const a = z(), s = ce({
      exceeded: !1,
      //是否超出
      expanded: !1
      //是否折叠
    });
    Q(
      () => e.content,
      ($, k) => {
        $ != k && r();
      }
    ), ve(() => {
      r();
    });
    const r = () => {
      if (!n.value)
        return;
      const $ = window.getComputedStyle(n.value);
      l = document.createElement("div"), Array.prototype.slice.apply($).forEach((g) => {
        l.style.setProperty(g, $.getPropertyValue(g));
      }), l.style.position = "fixed", l.style.left = "999999px", l.style.top = "999999px", l.style.zIndex = "-1000", l.style.height = "auto", l.style.minHeight = "auto", l.style.maxHeight = "auto", l.style.textOverflow = "clip", l.style.whiteSpace = "normal", l.style.webkitLineClamp = "unset", l.style.display = "block";
      const u = v($.lineHeight === "normal" ? e.lineHeight : $.lineHeight);
      o = Math.floor(
        u * (Number(e.rows) + 0.5) + v($.paddingTop) + v($.paddingBottom)
      ), l.innerText = e.content, document.body.appendChild(l), i();
    }, i = () => {
      if (l.offsetHeight <= o)
        s.exceeded = !1, document.body.removeChild(l);
      else {
        s.exceeded = !0;
        const $ = e.content.length, k = Math.floor((0 + $) / 2), u = e.direction === "middle" ? d([0, k], [k, $]) : p(0, $);
        a.value = u, document.body.removeChild(l);
      }
    }, p = ($, k) => {
      const u = s.expanded ? e.collapseText : e.expandText, g = e.content.length;
      if (k - $ <= 1)
        return e.direction === "end" ? {
          leading: e.content.slice(0, $) + e.symbol
        } : {
          tailing: e.symbol + e.content.slice(k, g)
        };
      const m = Math.round(($ + k) / 2);
      return e.direction === "end" ? l.innerText = e.content.slice(0, m) + e.symbol + u : l.innerText = u + e.symbol + e.content.slice(m, g), l.offsetHeight <= o ? e.direction === "end" ? p(m, k) : p($, m) : e.direction === "end" ? p($, m) : p(m, k);
    }, d = ($, k) => {
      const u = s.expanded ? e.collapseText : e.expandText, g = e.content.length;
      if ($[1] - $[0] <= 1 && k[1] - k[0] <= 1)
        return {
          leading: e.content.slice(0, $[0]) + e.symbol,
          tailing: e.symbol + e.content.slice(k[1], g)
        };
      const m = Math.floor(($[0] + $[1]) / 2), w = Math.ceil((k[0] + k[1]) / 2);
      return l.innerText = e.content.slice(0, m) + e.symbol + u + e.symbol + e.content.slice(w, g), l.offsetHeight <= o ? d([m, $[1]], [k[0], w]) : d([$[0], m], [w, k[1]]);
    }, v = ($) => {
      if (!$)
        return 0;
      const k = $.match(/^\d*(\.\d*)?/);
      return k ? Number(k[0]) : 0;
    }, y = ($) => {
      $ == 1 ? (s.expanded = !0, t("change", "expand")) : (s.expanded = !1, t("change", "collapse"));
    }, b = () => {
      t("click");
    };
    return de(q({}, he(s)), { root: n, ellipsis: a, clickHandle: y, handleClick: b });
  }
}), sy = { key: 0 }, ay = { key: 1 }, ry = { key: 2 };
function iy(e, t, n, l, o, a) {
  return c(), f("view", {
    ref: "root",
    class: "nut-ellipsis",
    onClick: t[2] || (t[2] = (...s) => e.handleClick && e.handleClick(...s))
  }, [
    e.exceeded ? N("", !0) : (c(), f("view", sy, E(e.content), 1)),
    e.exceeded && !e.expanded ? (c(), f("view", ay, [
      ge(E(e.ellipsis && e.ellipsis.leading), 1),
      e.expandText ? (c(), f("span", {
        key: 0,
        class: "nut-ellipsis__text",
        onClick: t[0] || (t[0] = De((s) => e.clickHandle(1), ["stop"]))
      }, E(e.expandText), 1)) : N("", !0),
      ge(E(e.ellipsis && e.ellipsis.tailing), 1)
    ])) : N("", !0),
    e.exceeded && e.expanded ? (c(), f("view", ry, [
      ge(E(e.content) + " ", 1),
      e.expandText ? (c(), f("span", {
        key: 0,
        class: "nut-ellipsis__text",
        onClick: t[1] || (t[1] = De((s) => e.clickHandle(2), ["stop"]))
      }, E(e.collapseText), 1)) : N("", !0)
    ])) : N("", !0)
  ], 512);
}
const uy = /* @__PURE__ */ Z(ly, [["render", iy]]), { componentName: cy, create: dy } = U("watermark"), fy = dy({
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
    const t = ce({
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
      imageHeight: d,
      content: v,
      fontStyle: y,
      fontWeight: b,
      fontColor: $,
      fontSize: k,
      fontFamily: u
    } = e, g = () => {
      const w = document.createElement("canvas"), S = window.devicePixelRatio, _ = w.getContext("2d"), B = `${(l + a) * S}px`, M = `${(o + s) * S}px`, C = a * S, T = s * S;
      if (w.setAttribute("width", B), w.setAttribute("height", M), _) {
        if (i) {
          _.translate(C / 2, T / 2), _.rotate(Math.PI / 180 * Number(r));
          const P = new Image();
          P.crossOrigin = "anonymous", P.referrerPolicy = "no-referrer", P.src = i, P.onload = () => {
            _.drawImage(
              P,
              -p * S / 2,
              -d * S / 2,
              p * S,
              d * S
            ), _.restore(), t.base64Url = w.toDataURL();
          };
        } else if (v) {
          _.textBaseline = "middle", _.textAlign = "center", _.translate(C / 2, T / 2), _.rotate(Math.PI / 180 * Number(r));
          const P = Number(k) * S;
          _.font = `${y} normal ${b} ${P}px/${T}px ${u}`, _.fillStyle = $, Array.isArray(v) ? v.map((O, K) => {
            _.fillText(O, 0, (K - 1) * P);
          }) : _.fillText(v, 0, 0), _.restore(), t.base64Url = w.toDataURL();
        }
      } else
        throw new Error("当前环境不支持Canvas");
    };
    g(), Q(
      () => [
        n,
        l,
        o,
        a,
        s,
        r,
        i,
        p,
        d,
        v,
        y,
        b,
        $,
        k,
        u
      ],
      () => {
        g();
      }
    );
    const m = D(() => {
      const w = cy;
      return {
        [w]: !0,
        [`${w}-full-page`]: e.fullPage
      };
    });
    return de(q({}, he(t)), { classes: m });
  }
});
function py(e, t, n, l, o, a) {
  return c(), f("view", {
    class: L(e.classes),
    style: A({
      zIndex: e.zIndex,
      backgroundSize: `${e.gapX + e.width}px`,
      backgroundImage: `url('${e.base64Url}')`
    })
  }, null, 6);
}
const my = /* @__PURE__ */ Z(fy, [["render", py]]), { create: hy } = U("trend-arrow"), gy = hy({
  components: { TriangleUp: Jr, TriangleDown: Kr },
  props: {
    rate: {
      type: Number,
      default: 0
    },
    digits: {
      type: Number,
      default: 2
    },
    showSign: {
      type: Boolean,
      default: !1
    },
    showZero: {
      type: Boolean,
      default: !1
    },
    arrowLeft: {
      type: Boolean,
      default: !1
    },
    syncTextColor: {
      type: Boolean,
      default: !0
    },
    textColor: {
      type: String,
      default: "#333"
    },
    riseColor: {
      type: String,
      default: "#fa2c19"
    },
    dropColor: {
      type: String,
      default: "#64b578"
    }
  },
  setup(e) {
    const t = ce({
      rateTrend: e.rate > 0
    }), n = D(() => {
      const { rate: o, digits: a, showSign: s, showZero: r } = e;
      t.rateTrend = o > 0;
      const i = Math.abs(o);
      return !r && o === 0 ? "--" : `${s && o !== 0 ? t.rateTrend ? "+" : "-" : ""}${ul(
        Number(i),
        a
      )}%`;
    }), l = D(() => {
      const { dropColor: o, riseColor: a, syncTextColor: s, textColor: r, rate: i } = e;
      return {
        color: i === 0 ? r : s ? t.rateTrend ? a : o : r
      };
    });
    return de(q({}, he(t)), { calcRate: n, calcStyle: l });
  }
}), yy = { class: "nut-trend-arrow" };
function vy(e, t, n, l, o, a) {
  const s = W("TriangleUp"), r = W("TriangleDown");
  return c(), f("view", yy, [
    e.arrowLeft ? N("", !0) : (c(), f("span", {
      key: 0,
      class: "nut-trend-arrow-icon-before nut-trend-arrow-rate",
      style: A(e.calcStyle)
    }, E(e.calcRate), 5)),
    Number(e.rate) !== 0 && e.rateTrend ? I(e.$slots, "up-icon", { key: 1 }, () => [
      oe(s, { color: e.riseColor }, null, 8, ["color"])
    ]) : N("", !0),
    Number(e.rate) !== 0 && !e.rateTrend ? I(e.$slots, "down-icon", { key: 2 }, () => [
      oe(r, { color: e.dropColor }, null, 8, ["color"])
    ]) : N("", !0),
    e.arrowLeft ? (c(), f("span", {
      key: 3,
      class: "nut-trend-arrow-icon-after nut-trend-arrow-rate",
      style: A(e.calcStyle)
    }, E(e.calcRate), 5)) : N("", !0)
  ]);
}
const $y = /* @__PURE__ */ Z(gy, [["render", vy]]), { create: by } = U("tour"), wy = by({
  components: {
    NutPopover: Fo,
    Close: At
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
    const n = ce({
      showTour: e.modelValue,
      showPopup: !1,
      active: 0
    }), l = z({}), o = D(() => "nut-tour"), a = D(() => {
      const { offset: d, maskWidth: v, maskHeight: y } = e, { width: b, height: $, left: k, top: u } = l.value, g = [k + b / 2, u + $ / 2], m = Number(v || b), w = Number(y || $);
      return {
        width: `${m + +d[1] * 2}px`,
        height: `${w + +d[0] * 2}px`,
        top: `${g[1] - w / 2 - +d[0]}px`,
        left: `${g[0] - m / 2 - +d[1]}px`
      };
    }), s = (d) => {
      d == "next" ? n.active = n.active + 1 : n.active = n.active - 1, n.showPopup = !1, Te(() => {
        n.showPopup = !0, r();
      }), t("change", n.active);
    }, r = () => {
      const d = document.querySelector(`#${e.steps[n.active].target}`), v = Ye(d);
      l.value = v;
    }, i = () => {
      n.showTour = !1, n.showPopup = !1, t("close", n.active), t("update:modelValue", !1);
    }, p = () => {
      e.closeOnClickOverlay && i();
    };
    return ve(() => {
      n.active = 0, r();
    }), Q(
      () => e.modelValue,
      (d) => {
        d && r(), n.active = 0, n.showTour = d, n.showPopup = d;
      }
    ), de(q({}, he(n)), {
      classes: o,
      maskStyle: a,
      changeStep: s,
      close: i,
      handleClickMask: p
    });
  }
}), ky = {
  key: 0,
  class: "nut-tour-content"
}, Cy = {
  key: 0,
  class: "nut-tour-content-top"
}, Sy = { class: "nut-tour-content-inner" }, Ty = { class: "nut-tour-content-bottom" }, Ny = { class: "nut-tour-content-bottom-init" }, Dy = { class: "nut-tour-content-bottom-operate" }, _y = {
  key: 1,
  class: "nut-tour-content nut-tour-content-tile"
}, Iy = { class: "nut-tour-content-inner" };
function By(e, t, n, l, o, a) {
  const s = W("Close"), r = W("nut-popover");
  return c(), f("div", {
    class: L(e.classes)
  }, [
    Se(h("div", {
      class: "nut-tour-masked",
      onClick: t[0] || (t[0] = (...i) => e.handleClickMask && e.handleClickMask(...i))
    }, null, 512), [
      [Ie, e.showTour]
    ]),
    (c(!0), f(x, null, ie(e.steps, (i, p) => (c(), f("div", {
      key: p,
      style: { height: "0" }
    }, [
      p == e.active ? (c(), f(x, { key: 0 }, [
        e.showTour ? (c(), f("div", {
          key: 0,
          id: "nut-tour-popid",
          class: L(["nut-tour-mask", [e.mask ? "" : "nut-tour-mask-none"]]),
          style: A(e.maskStyle)
        }, null, 6)) : N("", !0),
        oe(r, {
          visible: e.showPopup,
          "onUpdate:visible": t[5] || (t[5] = (d) => e.showPopup = d),
          location: i.location || e.location,
          "target-id": "nut-tour-popid",
          "bg-color": e.bgColor,
          theme: e.theme,
          "close-on-click-outside": !1,
          offset: i.popoverOffset || [0, 12],
          "arrow-offset": i.arrowOffset || 0
        }, {
          content: ne(() => [
            I(e.$slots, "default", {}, () => [
              e.type == "step" ? (c(), f("div", ky, [
                e.showTitleBar ? (c(), f("div", Cy, [
                  h("div", {
                    onClick: t[1] || (t[1] = (...d) => e.close && e.close(...d))
                  }, [
                    oe(s, { class: "nut-tour-content-top-close" })
                  ])
                ])) : N("", !0),
                h("div", Sy, E(i.content), 1),
                h("div", Ty, [
                  h("div", Ny, E(e.active + 1) + "/" + E(e.steps.length), 1),
                  h("div", Dy, [
                    I(e.$slots, "prev-step", {}, () => [
                      e.active != 0 && e.showPrevStep ? (c(), f("div", {
                        key: 0,
                        class: "nut-tour-content-bottom-operate-btn",
                        onClick: t[2] || (t[2] = (d) => e.changeStep("prev"))
                      }, E(e.prevStepTxt), 1)) : N("", !0)
                    ]),
                    e.steps.length - 1 == e.active ? (c(), f("div", {
                      key: 0,
                      class: "nut-tour-content-bottom-operate-btn active",
                      onClick: t[3] || (t[3] = (...d) => e.close && e.close(...d))
                    }, E(e.completeTxt), 1)) : N("", !0),
                    I(e.$slots, "next-step", {}, () => [
                      e.steps.length - 1 != e.active ? (c(), f("div", {
                        key: 0,
                        class: "nut-tour-content-bottom-operate-btn active",
                        onClick: t[4] || (t[4] = (d) => e.changeStep("next"))
                      }, E(e.nextStepTxt), 1)) : N("", !0)
                    ])
                  ])
                ])
              ])) : N("", !0),
              e.type == "tile" ? (c(), f("div", _y, [
                h("div", Iy, E(i.content), 1)
              ])) : N("", !0)
            ])
          ]),
          _: 2
        }, 1032, ["visible", "location", "bg-color", "theme", "offset", "arrow-offset"])
      ], 64)) : N("", !0)
    ]))), 128))
  ], 2);
}
const My = /* @__PURE__ */ Z(wy, [["render", By]]), { create: Ly } = U("address"), Ey = "NutAddress", Py = Ly({
  components: {
    NutPopup: ze,
    NutElevator: yo,
    Location: fa,
    Location2: ya,
    Check: Zn,
    Close: At,
    Left: on
  },
  inheritAttrs: !1,
  props: de(q({}, Nt), {
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
    const n = Ce(Ey), l = z(null), o = z(null), a = z(e.visible), s = z(e.type), r = z(0), i = z(0), p = z(["province", "city", "country", "town"]), d = z(null), v = z([0, 0, 0, 0]), y = ce([]), b = D(() => {
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
    }), $ = (j) => {
      if (!Array.isArray(j))
        throw new TypeError("params muse be array.");
      if (!j.length)
        return [];
      j.forEach((te) => {
        if (!te.title) {
          console.warn("[NutUI] <Address> 请检查数组选项的 title 值是否有设置 ,title 为必填项 .");
          return;
        }
      });
      const R = [];
      return j = j.sort((te, X) => te.title.localeCompare(X.title)), j.forEach((te) => {
        const X = R.findIndex((se) => se.title === te.title);
        X <= -1 ? R.push({
          title: te.title,
          list: [].concat(te)
        }) : R[X].list.push(te);
      }), R;
    };
    let k = z([]), u = ce({});
    const g = z("self"), m = z(20), w = () => {
      y[0] = e.province || [], y[1] = e.city || [], y[2] = e.country || [], y[3] = e.town || [];
      const j = e.modelValue, R = j.length;
      if (R > 0) {
        if (r.value = R - 1, b.value.length == 0) {
          r.value = 0;
          return;
        }
        for (let te = 0; te < R; te++) {
          let X = y[te];
          k.value[te] = X.filter((se) => se.id == j[te])[0];
        }
        _();
      }
    }, S = (j, R) => j && j.name || r.value < R && j ? j.name : e.columnsPlaceholder[R] || n("select"), _ = () => {
      C(), Te(() => {
        const j = o.value && o.value.getElementsByClassName("active")[0];
        if (j) {
          const R = j.offsetLeft;
          m.value = R || 20;
        }
      });
    }, B = (j) => {
      var X;
      const R = r.value;
      i.value = r.value;
      const te = {
        custom: p.value[R]
      };
      k.value[R] = j, k.value.splice(R + 1, k.value.length - (R + 1)), te.value = j, ((X = y[R + 1]) == null ? void 0 : X.length) > 0 ? (r.value = R + 1, _(), te.next = p.value[r.value]) : (O(), t("update:modelValue")), t("change", te);
    }, M = (j, R) => {
      i.value = r.value, S(j, R) && (r.value = R, _());
    }, C = () => {
      const j = d.value, R = i.value, te = v.value[r.value];
      j != null && j.scrollTop && (v.value[R] = j == null ? void 0 : j.scrollTop), Te(() => {
        j == null || j.scrollTo({
          top: te,
          behavior: "auto"
        });
      });
    }, T = (j) => {
      const R = e.existAddress;
      let te = {};
      R.forEach((X) => {
        X && X.selectedAddress && (te = X), X.selectedAddress = !1;
      }), j.selectedAddress = !0, u = j, t("selected", te, j, R), O();
    }, P = () => {
      k.value = [], r.value = 0, _();
    }, O = (j = "self") => {
      g.value = j == "cross" ? "cross" : "self", a.value = !1;
    }, K = () => {
      g.value = "mask";
    }, G = () => {
      const j = {
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
        const X = k.value[te];
        j.addressIdStr += `${te ? "_" : ""}${X && X.id || 0}`, j.addressStr += X && X.name || "";
      }), R.data = j) : R.data = u, P(), g.value == "self" ? t("close", R) : t("closeMask", { closeWay: g }), t("update:visible", !1);
    }, le = () => {
      const j = s.value;
      s.value = j == "exist" ? "custom" : "exist", P(), t("switchModule", { type: s.value });
    }, Y = (j, R) => {
      B(R);
    };
    return Q(
      () => e.visible,
      (j) => {
        a.value = j;
      }
    ), Q(
      () => a.value,
      (j) => {
        j && w();
      }
    ), de(q({
      showPopup: a,
      privateType: s,
      tabIndex: r,
      tabName: p,
      selectedRegion: k,
      switchModule: le,
      closeWay: g,
      close: G,
      getTabName: S,
      nextAreaList: B,
      regionLine: l,
      tabRegion: o,
      lineDistance: m,
      changeRegionTab: M,
      selectedExist: T,
      clickOverlay: K,
      handClose: O,
      handleElevatorItem: Y,
      initCustomSelected: w
    }, he(e)), {
      translate: n,
      regionList: b,
      transformData: $,
      scrollDom: d
    });
  }
}), Ay = { class: "nut-address" }, zy = { class: "nut-address__header" }, Vy = { class: "nut-address__header__title" }, Oy = {
  key: 0,
  class: "nut-address__custom"
}, Hy = {
  ref: "tabRegion",
  class: "nut-address__region"
}, Ry = ["onClick"], Fy = {
  key: 0,
  class: "active nut-address__region-item"
}, Wy = {
  key: 0,
  class: "nut-address__detail"
}, Yy = {
  ref: "scrollDom",
  class: "nut-address__detail-list"
}, jy = ["onClick"], Uy = {
  key: 1,
  class: "nut-address__elevator-group"
}, Ky = {
  key: 1,
  class: "nut-address__exist"
}, Xy = { class: "nut-address__exist-group" }, qy = { class: "nut-address__exist-group-list" }, Zy = ["onClick"], Gy = { class: "nut-address__exist-item-info" }, Jy = {
  key: 0,
  class: "nut-address__exist-item-info-name"
}, Qy = {
  key: 1,
  class: "nut-address__exist-item-info-phone"
}, xy = { class: "nut-address__exist-item-info-bottom" }, ev = { class: "nut-address__exist-choose-btn" };
function tv(e, t, n, l, o, a) {
  const s = W("Left"), r = W("Close"), i = W("Check"), p = W("nut-elevator"), d = W("Location2"), v = W("nut-popup");
  return c(), ee(v, {
    visible: e.showPopup,
    "onUpdate:visible": t[3] || (t[3] = (y) => e.showPopup = y),
    position: "bottom",
    "lock-scroll": e.lockScroll,
    round: e.round,
    "teleport-disable": e.teleportDisable,
    teleport: e.teleport,
    "z-index": e.zIndex,
    onClose: e.close,
    onClickOverlay: e.clickOverlay,
    onOpen: t[4] || (t[4] = (y) => e.closeWay = "self")
  }, {
    default: ne(() => [
      h("view", Ay, [
        h("view", zy, [
          h("view", {
            class: "nut-address__header-back",
            onClick: t[0] || (t[0] = (...y) => e.switchModule && e.switchModule(...y))
          }, [
            I(e.$slots, "back-icon", {}, () => [
              Se(oe(s, { size: "14px" }, null, 512), [
                [Ie, e.type == "exist" && e.privateType == "custom"]
              ])
            ])
          ]),
          h("view", Vy, E(e.privateType == "custom" ? e.customAddressTitle || e.translate("selectRegion") : e.existAddressTitle || e.translate("deliveryTo")), 1),
          h("view", {
            class: "nut-address__header-close",
            onClick: t[1] || (t[1] = (y) => e.handClose("cross"))
          }, [
            I(e.$slots, "close-icon", {}, () => [
              oe(r, {
                color: "#cccccc",
                size: "14px"
              })
            ])
          ])
        ]),
        ["custom", "custom2"].includes(e.privateType) ? (c(), f("view", Oy, [
          h("view", Hy, [
            (c(!0), f(x, null, ie(e.selectedRegion, (y, b) => (c(), f("view", {
              key: b,
              class: L(["nut-address__region-item", b == e.tabIndex ? "active" : ""]),
              onClick: ($) => e.changeRegionTab(y, b)
            }, [
              h("view", null, E(e.getTabName(y, b)), 1)
            ], 10, Ry))), 128)),
            e.tabIndex == e.selectedRegion.length ? (c(), f("view", Fy, [
              h("view", null, E(e.getTabName(null, e.selectedRegion.length)), 1)
            ])) : N("", !0),
            h("view", {
              ref: "regionLine",
              class: "nut-address__region-line",
              style: A({ left: e.lineDistance + "px" })
            }, null, 4)
          ], 512),
          e.privateType == "custom" ? (c(), f("view", Wy, [
            h("ul", Yy, [
              (c(!0), f(x, null, ie(e.regionList, (y, b) => {
                var $, k;
                return c(), f("li", {
                  key: b,
                  class: L(["nut-address__detail-item", (($ = e.selectedRegion[e.tabIndex]) == null ? void 0 : $.id) == y.id ? "active" : ""]),
                  onClick: (u) => e.nextAreaList(y)
                }, [
                  h("div", null, [
                    ((k = e.selectedRegion[e.tabIndex]) == null ? void 0 : k.id) == y.id ? I(e.$slots, "icon", { key: 0 }, () => [
                      oe(i, {
                        class: "nut-address-select-icon",
                        size: "13px"
                      })
                    ]) : N("", !0),
                    ge(E(y.name), 1)
                  ])
                ], 10, jy);
              }), 128))
            ], 512)
          ])) : (c(), f("view", Uy, [
            oe(p, {
              height: e.height,
              "index-list": e.transformData(e.regionList),
              onClickItem: e.handleElevatorItem
            }, null, 8, ["height", "index-list", "onClickItem"])
          ]))
        ])) : (c(), f("view", Ky, [
          h("div", Xy, [
            h("ul", qy, [
              (c(!0), f(x, null, ie(e.existAddress, (y, b) => (c(), f("li", {
                key: b,
                class: L(["nut-address__exist-group-item", y.selectedAddress ? "active" : ""]),
                onClick: ($) => e.selectedExist(y)
              }, [
                y.selectedAddress ? N("", !0) : I(e.$slots, "unselected-icon", { key: 0 }, () => [
                  oe(d, {
                    class: "nut-address-select-icon",
                    size: "13px"
                  })
                ]),
                y.selectedAddress ? I(e.$slots, "icon", { key: 1 }, () => [
                  oe(i, {
                    class: "nut-address-select-icon",
                    size: "13px"
                  })
                ]) : N("", !0),
                h("div", Gy, [
                  y.name ? (c(), f("div", Jy, E(y.name), 1)) : N("", !0),
                  y.phone ? (c(), f("div", Qy, E(y.phone), 1)) : N("", !0),
                  h("div", xy, [
                    h("view", null, E(y.provinceName + y.cityName + y.countyName + y.townName + y.addressDetail), 1)
                  ])
                ])
              ], 10, Zy))), 128))
            ])
          ]),
          e.isShowCustomAddress ? (c(), f("div", {
            key: 0,
            class: "nut-address__exist-choose",
            onClick: t[2] || (t[2] = (...y) => e.switchModule && e.switchModule(...y))
          }, [
            h("div", ev, E(e.customAndExistTitle || e.translate("chooseAnotherAddress")), 1)
          ])) : N("", !0)
        ])),
        I(e.$slots, "bottom")
      ])
    ]),
    _: 3
  }, 8, ["visible", "lock-scroll", "round", "teleport-disable", "teleport", "z-index", "onClose", "onClickOverlay"]);
}
const nv = /* @__PURE__ */ Z(Py, [["render", tv]]), { create: ov } = U("barrage"), lv = ov({
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
    const s = z(e.danmu), r = z(e.rows), i = z(e.top), p = z(0), d = e.speeds, v = z(0);
    ve(() => {
      y(), n && document.addEventListener("visibilitychange", function() {
        document.visibilityState === "hidden" ? ($(), p.value = 0, b("hidden")) : document.visibilityState === "visible" && y();
      });
    }), Xe(() => {
      s.value = [], $();
    });
    const y = () => {
      v.value = l.value.offsetWidth, n && b("init"), setTimeout(() => {
        var m;
        (m = l.value) == null || m.style.setProperty("--move-distance", `-${v.value}px`), u();
      }, 300);
    }, b = (m) => {
      var B;
      const w = document.getElementsByClassName("slotBody" + t);
      let S = ((B = w == null ? void 0 : w[0]) == null ? void 0 : B.children) || [];
      const _ = [];
      S && Array.from(S).forEach((M) => {
        m == "init" ? (M.style.opacity = "0", _.push(M)) : (M.classList = "", M.style = {});
      }), m == "init" && (s.value = _);
    }, $ = () => {
      a && (clearTimeout(a), a = null);
    };
    Q(
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
        g();
      }, e.frequency);
    }, g = () => {
      var S;
      const m = e.loop ? p.value % s.value.length : p.value;
      let w = document.createElement("view");
      n && typeof s.value[m] == "object" ? (w = s.value[m], (S = w == null ? void 0 : w.classList) == null || S.add("nut-barrage__item")) : (w.innerHTML = s.value[m], w.classList.add("nut-barrage__item"), o.value.appendChild(w)), Te(() => {
        var B;
        const _ = w.offsetHeight;
        if ((B = w == null ? void 0 : w.classList) == null || B.add("move"), w.style.animationDuration = `${d}ms`, w.style.top = m % r.value * (_ + i.value) + 20 + "px", w.style.opacity = "1", !n) {
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
}), sv = {
  ref: "dmBody",
  class: "nut-barrage"
};
function av(e, t, n, l, o, a) {
  return c(), f("div", sv, [
    h("div", {
      ref: "dmContainer",
      class: L(["dmContainer", e.$slots.default && "slotContainer"])
    }, [
      e.$slots.default ? (c(), f("div", {
        key: 0,
        class: L(["slotBody", "slotBody" + e.classTime])
      }, [
        I(e.$slots, "default")
      ], 2)) : N("", !0)
    ], 2)
  ], 512);
}
const rv = /* @__PURE__ */ Z(lv, [["render", av]]), { create: iv } = U("signature"), uv = "NutSignature", cv = iv({
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
    const n = Ce(uv), l = z(null), o = z(null), a = D(() => ({
      ["nut-signature"]: !0,
      [`${e.customClass}`]: e.customClass
    })), s = ce({
      canvasHeight: 0,
      canvasWidth: 0,
      ctx: null,
      isSupportTouch: "ontouchstart" in window,
      events: "ontouchstart" in window ? ["touchstart", "touchmove", "touchend", "touchleave"] : ["mousedown", "mousemove", "mouseup", "mouseleave"]
    }), r = () => {
      let g = document.createElement("canvas");
      return !!(g.getContext && g.getContext("2d"));
    }, i = () => {
      l.value.addEventListener(s.events[0], p, !1);
    }, p = (g) => {
      g.preventDefault(), s.ctx.beginPath(), s.ctx.lineWidth = e.lineWidth, s.ctx.strokeStyle = e.strokeStyle, t("start"), l.value.addEventListener(s.events[1], d, !1), l.value.addEventListener(s.events[2], v, !1), l.value.addEventListener(s.events[3], y, !1);
    }, d = (g) => {
      g.preventDefault();
      let m = s.isSupportTouch ? g.touches[0] : g;
      t("signing", m);
      let w = l.value.getBoundingClientRect(), S = m.clientX - w.left, _ = m.clientY - w.top;
      s.ctx.lineTo(S, _), s.ctx.stroke();
    }, v = (g) => {
      g.preventDefault(), t("end"), l.value.removeEventListener(s.events[1], d, !1), l.value.removeEventListener(s.events[2], v, !1);
    }, y = (g) => {
      g.preventDefault(), l.value.removeEventListener(s.events[1], d, !1), l.value.removeEventListener(s.events[2], v, !1);
    }, b = () => {
      l.value.addEventListener(s.events[2], v, !1), s.ctx.clearRect(0, 0, s.canvasWidth, s.canvasHeight), s.ctx.closePath(), t("clear");
    }, $ = () => {
      u(l.value);
    }, k = (g) => {
      if (!g)
        return !0;
      var m = document.createElement("canvas");
      return m.width = g.width, m.height = g.height, (g == null ? void 0 : g.toDataURL()) == m.toDataURL();
    }, u = (g) => {
      let m;
      switch (e.type) {
        case "png":
          m = g.toDataURL("image/png");
          break;
        case "jpg":
          m = g.toDataURL("image/jpeg", 0.8);
          break;
      }
      const w = k(g) ? "请绘制签名" : g, S = k(g) ? "" : m;
      t("confirm", w, S);
    };
    return ve(() => {
      r() && (s.ctx = l.value.getContext("2d"), s.canvasWidth = o.value.offsetWidth, s.canvasHeight = o.value.offsetHeight, i());
    }), de(q({}, he(s)), { canvas: l, wrap: o, isCanvasSupported: r, confirm: $, clear: b, classes: a, translate: n });
  }
}), dv = {
  ref: "wrap",
  class: "nut-signature-inner"
}, fv = ["height", "width"], pv = {
  key: 0,
  class: "nut-signature-unsopport"
};
function mv(e, t, n, l, o, a) {
  const s = W("nut-button");
  return c(), f("div", {
    class: L(e.classes)
  }, [
    h("div", dv, [
      Se(h("canvas", {
        ref: "canvas",
        height: e.canvasHeight,
        width: e.canvasWidth
      }, null, 8, fv), [
        [Ie, e.isCanvasSupported()]
      ]),
      e.isCanvasSupported() ? N("", !0) : (c(), f("p", pv, E(e.unSupportTpl || e.translate("unSupportTpl")), 1))
    ], 512),
    oe(s, {
      class: "nut-signature-btn",
      type: "default",
      onClick: t[0] || (t[0] = (r) => e.clear())
    }, {
      default: ne(() => [
        ge(E(e.translate("reSign")), 1)
      ]),
      _: 1
    }),
    oe(s, {
      class: "nut-signature-btn",
      type: "primary",
      onClick: t[1] || (t[1] = (r) => e.confirm())
    }, {
      default: ne(() => [
        ge(E(e.translate("confirm")), 1)
      ]),
      _: 1
    })
  ], 2);
}
const hv = /* @__PURE__ */ Z(cv, [["render", mv]]), { create: gv } = U("time-select"), yv = "NutTimeSelect", vv = gv({
  components: {
    NutPopup: ze
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
    const n = Ce(yv), l = D(() => ({
      width: "100%",
      height: e.height
    })), o = D(() => e.currentKey), a = D(() => e.currentTime), s = () => {
      t("update:visible", !1), t("select", a.value);
    };
    return Pe("currentKey", o), Pe("currentTime", a), {
      popStyle: l,
      close: s,
      translate: n
    };
  }
}), $v = { class: "nut-time-select" }, bv = { class: "nut-time-select__title" }, wv = { class: "nut-time-select__title__fixed" }, kv = { key: 0 }, Cv = { class: "nut-time-select__content" }, Sv = { class: "nut-time-select__content__pannel" }, Tv = { class: "nut-time-select__content__detail" };
function Nv(e, t, n, l, o, a) {
  const s = W("nut-popup");
  return c(), ee(s, {
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
      h("view", $v, [
        h("view", bv, [
          h("view", wv, [
            e.$slots.title ? I(e.$slots, "title", { key: 1 }) : (c(), f("span", kv, E(e.title || e.translate("pickupTime")), 1))
          ])
        ]),
        h("view", Cv, [
          h("view", Sv, [
            I(e.$slots, "pannel")
          ]),
          h("view", Tv, [
            I(e.$slots, "detail")
          ])
        ])
      ])
    ]),
    _: 3
  }, 8, ["teleport-disable", "visible", "style", "lock-scroll", "onClickOverlay", "onClickCloseIcon"]);
}
const Dv = /* @__PURE__ */ Z(vv, [["render", Nv]]), { componentName: _v, create: Iv } = U("time-pannel"), Bv = Iv({
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
    const n = Ee("currentKey"), l = ce({
      currentKey: n
    }), o = D(() => ({
      [_v]: !0,
      "nut-time-pannel--curr": l.currentKey == e.pannelKey
    })), a = (s) => {
      t("change", s);
    };
    return de(q({}, he(l)), {
      classes: o,
      handlePannel: a
    });
  }
});
function Mv(e, t, n, l, o, a) {
  return c(), f("view", {
    class: L(e.classes),
    onClick: t[0] || (t[0] = (s) => e.handlePannel(e.pannelKey))
  }, E(e.name), 3);
}
const Lv = /* @__PURE__ */ Z(Bv, [["render", Mv]]), { create: Ev } = U("time-detail"), Pv = Ev({
  name: "timedetail",
  props: {
    times: {
      type: Array,
      default: () => []
    }
  },
  emits: ["select"],
  setup: (e, { emit: t }) => {
    const n = Ee("currentKey"), l = Ee("currentTime"), o = ce({
      currentKey: n,
      currentTime: l
    }), a = (i) => {
      let p = o.currentTime.find((d) => d.key == o.currentKey);
      if (p)
        return {
          "nut-time-detail__detail__list__item": !0,
          "nut-time-detail__detail__list__item--curr": p.list.filter((d) => d === i).length > 0
        };
    }, s = D(() => e.times.find((i) => i.key == o.currentKey).list), r = (i) => {
      t("select", i);
    };
    return de(q({}, he(o)), {
      getClass: a,
      renderData: s,
      handleTime: r
    });
  }
}), Av = { class: "nut-time-detail" }, zv = { class: "nut-time-detail__detail nut-time-detail__detail--moring" }, Vv = { class: "nut-time-detail__detail__list" }, Ov = ["onClick"];
function Hv(e, t, n, l, o, a) {
  return c(), f("view", Av, [
    h("view", zv, [
      h("view", Vv, [
        (c(!0), f(x, null, ie(e.renderData, (s) => (c(), f("view", {
          key: s,
          class: L(e.getClass(s)),
          onClick: (r) => e.handleTime(s)
        }, E(s), 11, Ov))), 128))
      ])
    ])
  ]);
}
const Rv = /* @__PURE__ */ Z(Pv, [["render", Hv]]), { create: Fv } = U("sku-header"), Wv = "NutSkuHeader", Yv = Fv({
  props: {
    goods: {
      type: Object,
      default: {}
    }
  },
  components: {
    NutPrice: Ht
  },
  setup(e, { slots: t }) {
    const n = Ce(Wv);
    return {
      getSlots: (o) => t[o],
      translate: n
    };
  }
}), jv = { class: "nut-sku-header" }, Uv = ["src"], Kv = { class: "nut-sku-header-right" }, Xv = {
  key: 3,
  class: "nut-sku-header-right-extra"
};
function qv(e, t, n, l, o, a) {
  const s = W("nut-price");
  return c(), f("view", jv, [
    h("img", {
      class: "nut-sku-header-img",
      src: e.goods.imagePath
    }, null, 8, Uv),
    h("view", Kv, [
      e.getSlots("sku-header-price") ? I(e.$slots, "sku-header-price", { key: 0 }) : (c(), ee(s, {
        key: 1,
        price: e.goods.price,
        "need-symbol": !0,
        thousands: !1
      }, null, 8, ["price"])),
      e.getSlots("sku-header-extra") ? I(e.$slots, "sku-header-extra", { key: 2 }) : N("", !0),
      e.goods.skuId && !e.getSlots("sku-header-extra") ? (c(), f("view", Xv, E(e.translate("skuId")) + " : " + E(e.goods.skuId), 1)) : N("", !0)
    ])
  ]);
}
const Zv = /* @__PURE__ */ Z(Yv, [["render", qv]]), { create: Gv } = U("sku-select"), Jv = Gv({
  props: {
    sku: {
      type: Array,
      default: () => []
    }
  },
  emits: ["selectSku"],
  setup(e, { emit: t }) {
    const n = z([]);
    return Q(
      () => e.sku,
      (o) => {
        n.value = [].slice.call(o);
      },
      { deep: !0 }
    ), ve(() => {
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
}), Qv = { class: "nut-sku-select" }, xv = { class: "nut-sku-select-item-title" }, e2 = { class: "nut-sku-select-item-skus" }, t2 = ["onClick"];
function n2(e, t, n, l, o, a) {
  return c(), f("view", Qv, [
    (c(!0), f(x, null, ie(e.skuInfo, (s, r) => (c(), f("view", {
      key: s.id,
      class: "nut-sku-select-item"
    }, [
      h("view", xv, E(s.name), 1),
      h("view", e2, [
        (c(!0), f(x, null, ie(s.list, (i, p) => (c(), f("view", {
          key: i.name,
          class: L(["nut-sku-select-item-skus-sku", [{ active: !i.disable && i.active }, { disable: i.disable }]]),
          onClick: (d) => e.changeSaleChild(i, p, s, r)
        }, E(i.name), 11, t2))), 128))
      ])
    ]))), 128))
  ]);
}
const o2 = /* @__PURE__ */ Z(Jv, [["render", n2]]), { create: l2 } = U("sku-stepper"), s2 = l2({
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
    NutInputNumber: zt
  },
  setup(e, { emit: t }) {
    const n = z(e.stepperMin);
    return ve(() => {
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
}), a2 = { class: "nut-sku-stepper" }, r2 = { class: "nut-sku-stepper-title" }, i2 = ["innerHTML"], u2 = { class: "nut-sku-stepper-count" };
function c2(e, t, n, l, o, a) {
  const s = W("nut-input-number");
  return c(), f("view", a2, [
    h("view", r2, E(e.stepperTitle), 1),
    h("view", {
      class: "nut-sku-stepper-limit",
      innerHTML: e.getExtraText()
    }, null, 8, i2),
    h("view", u2, [
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
const d2 = /* @__PURE__ */ Z(s2, [["render", c2]]), { create: f2 } = U("sku-operate"), p2 = f2({
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
}), m2 = {
  key: 0,
  class: "nut-sku-operate"
}, h2 = {
  key: 0,
  class: "nut-sku-operate-desc"
}, g2 = {
  key: 1,
  class: "nut-sku-operate-btn"
}, y2 = ["onClick"];
function v2(e, t, n, l, o, a) {
  return e.btnOptions.length > 0 ? (c(), f("view", m2, [
    e.btnExtraText ? (c(), f("view", h2, E(e.btnExtraText), 1)) : N("", !0),
    I(e.$slots, "operate-btn"),
    e.getSlots("operate-btn") ? N("", !0) : (c(), f("view", g2, [
      (c(!0), f(x, null, ie(e.btnOptions, (s, r) => (c(), f("view", {
        key: r,
        class: L([`nut-sku-operate-btn-${s}`, "nut-sku-operate-btn-item"]),
        onClick: (i) => e.clickBtnOperate(s)
      }, E(e.getBtnDesc(s)), 11, y2))), 128))
    ]))
  ])) : N("", !0);
}
const $2 = /* @__PURE__ */ Z(p2, [["render", v2]]), { create: b2 } = U("sku"), w2 = "NutSku", k2 = b2({
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
    SkuHeader: Zv,
    SkuSelect: o2,
    SkuStepper: d2,
    SkuOperate: $2,
    NutPopup: ze
  },
  setup(e, { emit: t, slots: n }) {
    const l = Ce(w2), o = z(e.visible), a = z(e.stepperMin);
    Q(
      () => e.visible,
      (k) => {
        o.value = k;
      }
    ), Q(
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
    }, d = (k) => {
      t("reduce", k);
    }, v = (k) => {
      t("overLimit", k);
    }, y = (k) => {
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
      stepperOverLimit: v,
      clickBtnOperate: y,
      add: p,
      reduce: d,
      getSlots: s,
      translate: l
    };
  }
}), C2 = { class: "nut-sku" }, S2 = { class: "nut-sku-content" };
function T2(e, t, n, l, o, a) {
  const s = W("sku-header"), r = W("SkuSelect"), i = W("sku-stepper"), p = W("sku-operate"), d = W("nut-popup");
  return c(), ee(d, {
    visible: e.showPopup,
    "onUpdate:visible": t[0] || (t[0] = (v) => e.showPopup = v),
    position: "bottom",
    closeable: "",
    round: "",
    style: { height: "75%" },
    "lock-scroll": e.lockScroll,
    "catch-move": e.lockScroll,
    onClickCloseIcon: t[1] || (t[1] = (v) => e.closePopup("icon")),
    onClickOverlay: t[2] || (t[2] = (v) => e.closePopup("overlay")),
    onClose: t[3] || (t[3] = (v) => e.closePopup("close"))
  }, {
    default: ne(() => [
      h("view", C2, [
        I(e.$slots, "sku-header"),
        e.getSlots("sku-header") ? N("", !0) : (c(), ee(s, {
          key: 0,
          goods: e.goods
        }, kt({ _: 2 }, [
          e.getSlots("sku-header-price") ? {
            name: "sku-header-price",
            fn: ne(() => [
              I(e.$slots, "sku-header-price")
            ]),
            key: "0"
          } : void 0,
          e.getSlots("sku-header-extra") ? {
            name: "sku-header-extra",
            fn: ne(() => [
              I(e.$slots, "sku-header-extra")
            ]),
            key: "1"
          } : void 0
        ]), 1032, ["goods"])),
        h("view", S2, [
          I(e.$slots, "sku-select-top"),
          I(e.$slots, "sku-select"),
          e.getSlots("sku-select") ? N("", !0) : (c(), ee(r, {
            key: 0,
            sku: e.sku,
            onSelectSku: e.selectSku
          }, null, 8, ["sku", "onSelectSku"])),
          I(e.$slots, "sku-stepper"),
          e.getSlots("sku-stepper") ? N("", !0) : (c(), ee(i, {
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
          I(e.$slots, "sku-stepper-bottom")
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
              I(e.$slots, "sku-operate")
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["btn-extra-text", "btn-options", "buy-text", "add-cart-text", "confirm-text", "onClickBtnOperate"])
      ])
    ]),
    _: 3
  }, 8, ["visible", "lock-scroll", "catch-move"]);
}
const N2 = /* @__PURE__ */ Z(k2, [["render", T2]]), { create: D2 } = U("card"), _2 = D2({
  components: {
    NutPrice: Ht,
    NutTag: Ro
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
}), I2 = { class: "nut-card" }, B2 = { class: "nut-card__left" }, M2 = ["src"], L2 = { class: "nut-card__right" }, E2 = { class: "nut-card__right__title" }, P2 = {
  key: 0,
  class: "nut-card__right__price"
}, A2 = { class: "nut-card__right__other" }, z2 = { class: "nut-card__right__shop" }, V2 = { class: "nut-card__right__shop__name" };
function O2(e, t, n, l, o, a) {
  const s = W("nut-price"), r = W("nut-tag");
  return c(), f("div", I2, [
    h("div", B2, [
      h("img", {
        src: e.imgUrl,
        alt: ""
      }, null, 8, M2)
    ]),
    h("div", L2, [
      h("div", E2, E(e.title), 1),
      I(e.$slots, "prolist"),
      e.isNeedPrice ? (c(), f("div", P2, [
        I(e.$slots, "price", {}, () => [
          oe(s, { price: e.price }, null, 8, ["price"])
        ]),
        I(e.$slots, "origin", {}, () => [
          oe(s, {
            class: "nut-card__right__price__origin",
            price: e.vipPrice
          }, null, 8, ["price"])
        ])
      ])) : N("", !0),
      h("div", A2, [
        I(e.$slots, "shop-tag", {}, () => [
          oe(r, { type: "danger" }, {
            default: ne(() => [
              ge(E(e.shopDesc), 1)
            ]),
            _: 1
          }),
          oe(r, { plain: "" }, {
            default: ne(() => [
              ge(E(e.delivery), 1)
            ]),
            _: 1
          })
        ])
      ]),
      h("div", z2, [
        h("div", V2, E(e.shopName), 1),
        I(e.$slots, "footer")
      ])
    ])
  ]);
}
const H2 = /* @__PURE__ */ Z(_2, [["render", O2]]), { create: R2 } = U("ecard"), F2 = "NutEcard", W2 = R2({
  components: {
    NutInputNumber: zt
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
    const n = Ce(F2), l = z(null), o = z(null), a = z(""), s = z(e.cardAmountMin), r = z(e.modelValue), i = (y, b) => {
      l.value = b, s.value = e.cardAmountMin, o.value = y.price, t("change", y), t("update:modelValue", y.price);
    }, p = (y) => {
      let $ = y.target.value.replace(/[^\d]/g, "");
      a.value = $, o.value = $, Number($) > e.cardAmountMax && (a.value = e.cardAmountMax, o.value = e.cardAmountMax), Number($) < e.cardAmountMin && (a.value = e.cardAmountMin, o.value = e.cardAmountMin), t("inputChange", Number(a.value)), t("update:modelValue", Number(a.value));
    }, d = () => {
      l.value = "input", s.value = e.cardAmountMin, o.value = a.value, t("update:modelValue", a.value), t("inputClick");
    }, v = (y) => {
      s.value = y, t("changeStep", s.value, o.value);
    };
    return Q(
      () => e.modelValue,
      (y) => {
        r.value = y;
      }
    ), {
      handleClick: i,
      changeStep: v,
      change: p,
      inputClick: d,
      stepValue: s,
      currentIndex: l,
      inputValue: a,
      money: r,
      translate: n
    };
  }
}), Y2 = { class: "nut-ecard" }, j2 = { class: "nut-ecard__title" }, U2 = { class: "nut-ecard__list" }, K2 = ["onClick"], X2 = { class: "nut-ecard__list__input--con" }, q2 = ["placeholder"], Z2 = { class: "nut-ecard__list__step" };
function G2(e, t, n, l, o, a) {
  const s = W("nut-input-number");
  return c(), f("view", Y2, [
    h("view", j2, E(e.chooseText || e.translate("chooseText")), 1),
    h("view", U2, [
      (c(!0), f(x, null, ie(e.dataList, (r, i) => (c(), f("view", {
        key: i,
        class: L(["nut-ecard__list__item", e.currentIndex == i ? "active" : ""]),
        onClick: (p) => e.handleClick(r, i)
      }, E(r.price), 11, K2))), 128)),
      h("view", {
        class: L(["nut-ecard__list__input", e.currentIndex == "input" ? "active" : ""]),
        onClick: t[2] || (t[2] = (...r) => e.inputClick && e.inputClick(...r))
      }, [
        h("view", null, E(e.otherValueText || e.translate("otherValueText")), 1),
        h("view", X2, [
          Se(h("input", {
            "onUpdate:modelValue": t[0] || (t[0] = (r) => e.inputValue = r),
            class: "nut-ecard__list__input--input",
            type: "text",
            placeholder: e.placeholder || e.translate("placeholder"),
            onInput: t[1] || (t[1] = (...r) => e.change && e.change(...r))
          }, null, 40, q2), [
            [Wn, e.inputValue]
          ]),
          ge(" " + E(e.suffix), 1)
        ])
      ], 2),
      h("view", Z2, [
        h("view", null, E(e.suffix) + E(e.money), 1),
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
const J2 = /* @__PURE__ */ Z(W2, [["render", G2]]), { create: Q2 } = U("address-list-item"), x2 = "NutAddressList", e3 = Q2({
  components: { Del: Jn, Edit: $s },
  props: {
    item: {
      type: Object,
      default: {}
    }
  },
  emits: ["delIcon", "editIcon", "clickItem"],
  setup(e, { emit: t }) {
    const n = Ce(x2);
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
}), t3 = { class: "nut-address-list-item__info" }, n3 = { class: "nut-address-list-item__info-contact" }, o3 = { class: "nut-address-list-item__info-contact-name" }, l3 = { class: "nut-address-list-item__info-contact-tel" }, s3 = {
  key: 0,
  class: "nut-address-list-item__info-contact-default"
}, a3 = { class: "nut-address-list-item__info-handle" }, r3 = { class: "nut-address-list-item__addr" };
function i3(e, t, n, l, o, a) {
  const s = W("Del"), r = W("Edit");
  return c(), f("div", {
    class: "nut-address-list-item",
    onClick: t[0] || (t[0] = (...i) => e.contentsClick && e.contentsClick(...i))
  }, [
    h("div", t3, [
      h("div", n3, [
        I(e.$slots, "content-top", {}, () => [
          h("div", o3, E(e.item.addressName), 1),
          h("div", l3, E(e.item.phone), 1),
          e.item.defaultAddress ? (c(), f("div", s3, E(e.translate("default")), 1)) : N("", !0)
        ])
      ]),
      h("div", a3, [
        I(e.$slots, "content-icon", {}, () => [
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
    h("div", r3, [
      I(e.$slots, "content-addr", {}, () => [
        ge(E(e.item.fullAddress), 1)
      ])
    ])
  ]);
}
const Hn = /* @__PURE__ */ Z(e3, [["render", i3]]), { create: u3 } = U("address-list-general"), c3 = u3({
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
    ItemContents: Hn,
    NutButton: qe,
    NutSwipe: Mo
  },
  setup(e, { emit: t }) {
    const n = () => be(Hn, {
      item: e.item,
      onDelIcon(_) {
        s(_);
      },
      onEditIcon(_) {
        r(_);
      },
      onClickItem(_) {
        i(_);
      }
    });
    let l = null;
    const o = z(!1), a = z(!1), s = (_) => {
      t("delIcon", _, e.item), _.stopPropagation();
    }, r = (_) => {
      t("editIcon", _, e.item), _.stopPropagation();
    }, i = (_) => {
      o.value || (t("clickItem", _, e.item), _.stopPropagation());
    }, p = (_) => {
      t("longDel", _, e.item), _.stopPropagation();
    }, d = (_) => {
      l = 0, a.value = !0, t("longDown", _, e.item);
    };
    return {
      renderCompontent: n,
      showMaskRef: a,
      clickItem: i,
      editClick: r,
      delClick: s,
      delLongClick: p,
      holddownstart: (_) => {
        l = setTimeout(() => {
          d(_);
        }, 300);
      },
      holddownmove: () => {
        clearTimeout(l);
      },
      holddownend: () => {
        clearTimeout(l);
      },
      copyCLick: (_) => {
        t("longCopy", _, e.item), _.stopPropagation();
      },
      hideMaskClick: () => {
        a.value = !1;
      },
      setDefault: (_) => {
        t("longSet", _, e.item), _.stopPropagation();
      },
      maskClick: (_) => {
        l != 0 && (a.value = !1), _.stopPropagation(), _.preventDefault();
      },
      swipeDelClick: (_) => {
        t("swipeDel", _, e.item), _.stopPropagation();
      },
      swipestart: () => {
        o.value = !1;
      },
      swipemove: () => {
        o.value = !0;
      }
    };
  }
}), d3 = {
  key: 0,
  class: "nut-address-list-general"
}, f3 = { class: "nut-address-list-swipe" };
function p3(e, t, n, l, o, a) {
  const s = W("nut-button"), r = W("nut-swipe");
  return e.swipeEdition ? (c(), ee(r, { key: 1 }, {
    right: ne(() => [
      I(e.$slots, "swipe-right-btn", {}, () => [
        oe(s, {
          shape: "square",
          style: { height: "100%" },
          type: "danger",
          onClick: e.swipeDelClick
        }, {
          default: ne(() => [
            ge("删除")
          ]),
          _: 1
        }, 8, ["onClick"])
      ])
    ]),
    default: ne(() => [
      h("div", f3, [
        (c(), ee(Oe(e.renderCompontent()), {
          onTouchmove: e.swipemove,
          onTouchstart: e.swipestart
        }, {
          "content-top": ne(() => [
            I(e.$slots, "content-info")
          ]),
          "content-icon": ne(() => [
            I(e.$slots, "content-icons")
          ]),
          "content-addr": ne(() => [
            I(e.$slots, "content-addrs")
          ]),
          _: 3
        }, 40, ["onTouchmove", "onTouchstart"]))
      ])
    ]),
    _: 3
  })) : (c(), f("div", d3, [
    (c(), ee(Oe(e.renderCompontent()), {
      onTouchstart: e.holddownstart,
      onTouchend: e.holddownend,
      onTouchmove: e.holddownmove
    }, {
      "content-top": ne(() => [
        I(e.$slots, "content-info")
      ]),
      "content-icon": ne(() => [
        I(e.$slots, "content-icons")
      ]),
      "content-addr": ne(() => [
        I(e.$slots, "content-addrs")
      ]),
      _: 3
    }, 40, ["onTouchstart", "onTouchend", "onTouchmove"])),
    e.longPress && e.showMaskRef ? (c(), f("div", {
      key: 0,
      class: "nut-address-list-general__mask",
      onClick: t[3] || (t[3] = (...i) => e.maskClick && e.maskClick(...i))
    }, [
      I(e.$slots, "longpress-all", {}, () => [
        h("div", {
          class: "nut-address-list-general__mask-copy",
          onClick: t[0] || (t[0] = (...i) => e.copyCLick && e.copyCLick(...i))
        }, " 复制地址 "),
        h("div", {
          class: "nut-address-list-general__mask-set",
          onClick: t[1] || (t[1] = (...i) => e.setDefault && e.setDefault(...i))
        }, " 设置默认 "),
        h("div", {
          class: "nut-address-list-general__mask-del",
          onClick: t[2] || (t[2] = (...i) => e.delLongClick && e.delLongClick(...i))
        }, " 删除地址 ")
      ])
    ])) : N("", !0),
    e.showMaskRef ? (c(), f("div", {
      key: 1,
      class: "nut-address-list__mask-bottom",
      onClick: t[4] || (t[4] = (...i) => e.hideMaskClick && e.hideMaskClick(...i))
    })) : N("", !0)
  ]));
}
const m3 = /* @__PURE__ */ Z(c3, [["render", p3]]), { create: h3 } = U("address-list"), g3 = "NutAddressList", y3 = h3({
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
    GeneralShell: m3,
    NutButton: qe
  },
  emits: ["delIcon", "editIcon", "clickItem", "longCopy", "longSet", "longDel", "swipeDel", "add"],
  setup(e, { emit: t }) {
    const n = Ce(g3), l = z([]), o = ce({
      id: 2,
      addressName: "姓名",
      phone: "123****4567",
      defaultAddress: !1,
      fullAddress: "北京市通州区测试测试测试测试测试测试测试测试测试"
    }), a = () => {
      Object.keys(e.dataOptions).length > 0 && (l.value = e.data.map(($) => il(o, $, e.dataOptions)));
    };
    Q(
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
    }, d = ($, k) => {
      t("longSet", $, k), $.stopPropagation();
    }, v = ($, k) => {
      t("longDel", $, k), $.stopPropagation();
    }, y = ($, k) => {
      t("swipeDel", $, k), $.stopPropagation();
    }, b = ($) => {
      t("add", $), $.stopPropagation();
    };
    return ve(() => {
      a();
    }), {
      clickDelIcon: s,
      clickEditIcon: r,
      clickContentItem: i,
      clickLongCopy: p,
      clickLongSet: d,
      clickLongDel: v,
      clickSwipeDel: y,
      addAddress: b,
      dataArray: l,
      translate: n
    };
  }
}), v3 = { class: "nut-address-list" };
function $3(e, t, n, l, o, a) {
  const s = W("general-shell"), r = W("nut-button");
  return c(), f("div", v3, [
    (c(!0), f(x, null, ie(e.dataArray, (i, p) => (c(), ee(s, {
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
        I(e.$slots, "item-infos", { item: i })
      ]),
      "content-icons": ne(() => [
        I(e.$slots, "item-icon", { item: i })
      ]),
      "content-addrs": ne(() => [
        I(e.$slots, "item-addr", { item: i })
      ]),
      _: 2
    }, [
      e.longPress ? {
        name: "longpress-all",
        fn: ne(() => [
          I(e.$slots, "longpress-btns", { item: i })
        ]),
        key: "0"
      } : void 0,
      e.swipeEdition ? {
        name: "swipe-right-btn",
        fn: ne(() => [
          I(e.$slots, "swipe-right", { item: i })
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["item", "long-press", "swipe-edition", "onDelIcon", "onEditIcon", "onClickItem", "onSwipeDel", "onLongCopy", "onLongSet", "onLongDel"]))), 128)),
    e.showBottomButton ? (c(), f("div", {
      key: 0,
      class: "nut-address-list__bottom",
      onClick: t[0] || (t[0] = (...i) => e.addAddress && e.addAddress(...i))
    }, [
      oe(r, {
        block: "",
        type: "danger"
      }, {
        default: ne(() => [
          ge(E(e.translate("addAddress")), 1)
        ]),
        _: 1
      })
    ])) : N("", !0)
  ]);
}
const b3 = /* @__PURE__ */ Z(y3, [["render", $3]]), { create: w3 } = U("category"), k3 = w3({
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
}), C3 = { class: "nut-category" }, S3 = { class: "nut-category__cateList" }, T3 = { key: 0 }, N3 = ["onClick"];
function D3(e, t, n, l, o, a) {
  return c(), f("div", C3, [
    h("div", S3, [
      e.type == "classify" || e.type == "text" ? (c(), f("div", T3, [
        (c(!0), f(x, null, ie(e.category, (s, r) => (c(), f("div", {
          key: r,
          class: "nut-category__cateListLeft"
        }, [
          h("div", {
            class: L([e.checkIndex == r ? "nut-category__cateListItemChecked" : "nut-category__cateListItem"]),
            onClick: (i) => e.getChildList(r)
          }, E(s.catName), 11, N3)
        ]))), 128))
      ])) : N("", !0),
      I(e.$slots, "default")
    ])
  ]);
}
const _3 = /* @__PURE__ */ Z(k3, [["render", D3]]), { create: I3 } = U("category-pane"), B3 = I3({
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
}), M3 = { class: "nut-category-pane" }, L3 = {
  key: 0,
  class: "nut-category-pane__cateListRight"
}, E3 = { class: "nut-category-pane__childTitle" }, P3 = {
  key: 0,
  class: "nut-category-pane__childItemList"
}, A3 = ["onClick"], z3 = ["src"], V3 = { class: "nut-category-pane__skuImg" }, O3 = {
  key: 1,
  class: "nut-category-pane__cateListRight"
}, H3 = { class: "nut-category-pane__childTitle" }, R3 = {
  key: 0,
  class: "nut-category-pane__childItemList"
}, F3 = ["onClick"], W3 = { class: "nut-category-pane__skuName" }, Y3 = {
  key: 2,
  class: "nut-category-pane__selfItemList"
}, j3 = ["onClick"];
function U3(e, t, n, l, o, a) {
  return c(), f("div", M3, [
    e.type == "classify" ? (c(), f("div", L3, [
      (c(!0), f(x, null, ie(e.categoryChild, (s, r) => (c(), f("div", { key: r }, [
        h("div", E3, E(s == null ? void 0 : s.catName), 1),
        (s == null ? void 0 : s.catType) == 1 ? (c(), f("div", P3, [
          (c(!0), f(x, null, ie(s.childCateList, (i, p) => (c(), f("div", {
            key: p,
            class: "nut-category-pane__childItem",
            onClick: (d) => e.onChange(i)
          }, [
            h("img", {
              class: "nut-category-pane__childImg",
              src: i.backImg
            }, null, 8, z3),
            h("div", V3, E(i == null ? void 0 : i.catName), 1)
          ], 8, A3))), 128))
        ])) : N("", !0)
      ]))), 128))
    ])) : N("", !0),
    e.type == "text" ? (c(), f("div", O3, [
      (c(!0), f(x, null, ie(e.categoryChild, (s, r) => (c(), f("div", { key: r }, [
        h("div", H3, E(s == null ? void 0 : s.catName), 1),
        (s == null ? void 0 : s.catType) == 1 ? (c(), f("div", R3, [
          (c(!0), f(x, null, ie(s.childCateList, (i, p) => (c(), f("div", {
            key: p,
            class: "nut-category-pane__childItem",
            onClick: (d) => e.onChange(i)
          }, [
            h("div", W3, E(i == null ? void 0 : i.catName), 1)
          ], 8, F3))), 128))
        ])) : N("", !0)
      ]))), 128))
    ])) : N("", !0),
    e.type == "custom" ? (c(), f("div", Y3, [
      (c(!0), f(x, null, ie(e.customCategory, (s, r) => (c(), f("div", {
        key: r,
        class: "nut-category-pane__skuName",
        onClick: (i) => e.onChange(s)
      }, E(s == null ? void 0 : s.catName), 9, j3))), 128))
    ])) : N("", !0)
  ]);
}
const K3 = /* @__PURE__ */ Z(B3, [["render", U3]]), { create: X3 } = U("comment-header"), q3 = X3({
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
}), Z3 = { class: "nut-comment-header__user" }, G3 = { class: "nut-comment-header__user-avter" }, J3 = ["src"], Q3 = { class: "nut-comment-header__user-score" }, x3 = {
  key: 0,
  class: "nut-comment-header__time"
};
function e4(e, t, n, l, o, a) {
  const s = W("nut-rate");
  return c(), f("view", null, [
    e.info ? (c(), f("view", {
      key: 0,
      class: "nut-comment-header",
      onClick: t[1] || (t[1] = (...r) => e.handleClick && e.handleClick(...r))
    }, [
      h("view", Z3, [
        h("view", G3, [
          e.info.avatar ? (c(), f("img", {
            key: 0,
            src: e.info.avatar
          }, null, 8, J3)) : N("", !0)
        ]),
        e.type == "default" ? (c(), f("view", {
          key: 0,
          class: L([`nut-comment-header__user-${e.type}`])
        }, [
          h("view", {
            class: L([`nut-comment-header__user-${e.type}-name`])
          }, [
            h("span", null, E(e.info.nickName), 1),
            I(e.$slots, "labels")
          ], 2),
          h("view", Q3, [
            oe(s, {
              modelValue: e.info.score,
              "onUpdate:modelValue": t[0] || (t[0] = (r) => e.info.score = r),
              size: "12",
              spacing: "5",
              readonly: "",
              onChange: e.handleClick
            }, null, 8, ["modelValue", "onChange"])
          ])
        ], 2)) : (c(), f("view", {
          key: 1,
          class: L([`nut-comment-header__user-${e.type}`])
        }, [
          h("span", {
            class: L([`nut-comment-header__user-${e.type}-name`])
          }, E(e.info.nickName), 3),
          I(e.$slots, "labels")
        ], 2))
      ]),
      e.info.time ? (c(), f("view", x3, E(e.info.time), 1)) : N("", !0)
    ])) : N("", !0),
    e.type == "complex" ? (c(), f("view", {
      key: 1,
      class: L([`nut-comment-header__${e.type}-score`])
    }, [
      oe(s, {
        modelValue: e.info.score,
        "onUpdate:modelValue": t[2] || (t[2] = (r) => e.info.score = r),
        size: "12",
        spacing: "3",
        readonly: ""
      }, null, 8, ["modelValue"]),
      h("i", {
        class: L([`nut-comment-header__${e.type}-score-i`])
      }, null, 2),
      h("view", {
        class: L([`nut-comment-header__${e.type}-score-size`])
      }, E(e.info.size), 3)
    ], 2)) : N("", !0)
  ]);
}
const t4 = /* @__PURE__ */ Z(q3, [["render", e4]]), { create: n4 } = U("comment-images"), o4 = n4({
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
  components: { Right: ln },
  emits: ["click", "clickImages"],
  setup(e, { emit: t }) {
    const n = z(!1), l = z(1), o = z([]);
    return Q(
      () => [e.videos, e.images],
      (s) => {
        s[0].length > 0 && s[0].forEach((r) => {
          r.type = "video";
        }), o.value = s[0].concat(s[1]);
      },
      { deep: !0 }
    ), ve(() => {
      e.videos.length > 0 && e.videos.forEach((s) => {
        s.type = "video";
      }), o.value = e.videos.concat(e.images);
    }), { isShowImage: n, initIndex: l, showImages: (s, r) => {
      const { videos: i, images: p } = e, d = s == "img" ? r - i.length : r;
      t("clickImages", {
        type: s,
        index: d,
        value: s == "img" ? p[d] : i[d]
      });
    }, totalImages: o };
  }
}), l4 = ["onClick"], s4 = ["src"], a4 = /* @__PURE__ */ h("view", { class: "nut-comment-images__play" }, null, -1), r4 = ["onClick"], i4 = ["src"], u4 = {
  key: 0,
  class: "nut-comment-images__mask"
};
function c4(e, t, n, l, o, a) {
  const s = W("Right");
  return c(), f("view", {
    class: L(`nut-comment-images nut-comment-images--${e.type}`)
  }, [
    (c(!0), f(x, null, ie(e.videos, (r, i) => (c(), f("view", {
      key: r.id,
      class: "nut-comment-images__item nut-comment-images__item--video",
      onClick: (p) => e.showImages("video", i)
    }, [
      h("img", {
        src: r.mainUrl
      }, null, 8, s4),
      a4
    ], 8, l4))), 128)),
    (c(!0), f(x, null, ie(e.images, (r, i) => (c(), f(x, {
      key: r.id
    }, [
      e.type == "multi" && e.videos.length + i < 9 || e.type != "multi" ? (c(), f("view", {
        key: 0,
        class: "nut-comment-images__item nut-comment-images__item--imgbox",
        onClick: (p) => e.showImages("img", i + e.videos.length)
      }, [
        h("img", {
          src: r.smallImgUrl ? r.smallImgUrl : r.imgUrl
        }, null, 8, i4),
        e.type == "multi" && e.totalImages.length > 9 && e.videos.length + i > 7 ? (c(), f("view", u4, [
          h("span", null, "共 " + E(e.totalImages.length) + " 张", 1),
          oe(s, { style: { width: "12px" } })
        ])) : N("", !0)
      ], 8, r4)) : N("", !0)
    ], 64))), 128))
  ], 2);
}
const d4 = /* @__PURE__ */ Z(o4, [["render", c4]]), { create: f4 } = U("comment-bottom"), p4 = "NutComment", m4 = f4({
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
  components: { Fabulous: Ss, Comment: as, MoreX: La },
  emits: ["clickOperate", "handleClick"],
  setup(e, { emit: t }) {
    const n = Ce(p4), l = z(!1), o = z([]);
    return ve(() => {
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
}), h4 = { class: "nut-comment-bottom" }, g4 = { key: 0 }, y4 = { class: "nut-comment-bottom__cpx" }, v4 = ["onClick"];
function $4(e, t, n, l, o, a) {
  const s = W("Fabulous"), r = W("Comment"), i = W("MoreX");
  return c(), f("view", h4, [
    h("view", {
      class: "nut-comment-bottom__lable",
      onClick: t[0] || (t[0] = (...p) => e.handleClick && e.handleClick(...p))
    }, [
      e.type != "complex" ? (c(), f("span", g4, E(e.info.size), 1)) : N("", !0)
    ]),
    h("view", y4, [
      (c(!0), f(x, null, ie(e.mergeOp, (p, d) => (c(), f("view", {
        key: d,
        class: L(["nut-comment-bottom__cpx-item", `nut-comment-bottom__cpx-item--${p}`]),
        onClick: (v) => e.operate(p)
      }, [
        p != "more" ? (c(), f(x, { key: 0 }, [
          h("span", null, E(e.info[p]), 1),
          p == "like" ? (c(), ee(s, { key: 0 })) : (c(), ee(r, { key: 1 }))
        ], 64)) : N("", !0),
        p == "more" ? (c(), f(x, { key: 1 }, [
          oe(i),
          e.showPopver ? (c(), f("view", {
            key: 0,
            class: "nut-comment-bottom__cpx-item-popover",
            onClick: t[1] || (t[1] = (v) => e.operate("popover"))
          }, E(e.translate("complaintsText")), 1)) : N("", !0)
        ], 64)) : N("", !0)
      ], 10, v4))), 128))
    ])
  ]);
}
const b4 = /* @__PURE__ */ Z(m4, [["render", $4]]), { create: w4 } = U("comment"), k4 = "NutComment", C4 = w4({
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
    CommentHeader: t4,
    CommentImages: d4,
    CommentBottom: b4,
    Right: ln
  },
  emits: ["click", "clickImages", "clickOperate"],
  setup(e, { emit: t }) {
    const n = Ce(k4);
    return { conEllipsis: D(() => e.ellipsis ? e.ellipsis : e.headerType == "complex" ? 6 : 2), clickOperate: (r) => {
      t("clickOperate", r);
    }, handleClick: () => {
      t("click", e.info);
    }, clickImages: (r) => {
      t("clickImages", r);
    }, translate: n };
  }
}), S4 = {
  key: 0,
  class: "nut-comment"
}, T4 = ["innerHTML"], N4 = { class: "nut-comment__follow-title" }, D4 = { class: "nut-comment__follow-com" };
function _4(e, t, n, l, o, a) {
  const s = W("comment-header"), r = W("comment-images"), i = W("Right"), p = W("comment-bottom");
  return e.info && Object.keys(e.info) ? (c(), f("view", S4, [
    oe(s, {
      type: e.headerType,
      info: e.info,
      labels: e.labels,
      onHandleClick: e.handleClick
    }, {
      labels: ne(() => [
        I(e.$slots, "comment-labels")
      ]),
      _: 3
    }, 8, ["type", "info", "labels", "onHandleClick"]),
    I(e.$slots, "feature"),
    h("view", {
      class: "nut-comment__main",
      style: A(`-webkit-line-clamp:${e.conEllipsis}`),
      onClick: t[0] || (t[0] = (...d) => e.handleClick && e.handleClick(...d)),
      innerHTML: e.info.content
    }, null, 12, T4),
    oe(r, {
      images: e.images,
      videos: e.videos,
      type: e.imagesRows,
      onClickImages: e.clickImages
    }, null, 8, ["images", "videos", "type", "onClickImages"]),
    e.follow && e.follow.days > 0 ? (c(), f("view", {
      key: 0,
      class: "nut-comment__follow",
      onClick: t[2] || (t[2] = (...d) => e.handleClick && e.handleClick(...d))
    }, [
      h("view", N4, E(e.translate("additionalReview", e.follow.days)), 1),
      h("view", D4, E(e.follow.content), 1),
      e.follow.images && e.follow.images.length > 0 ? (c(), f("view", {
        key: 0,
        class: "nut-comment__follow-img",
        onClick: t[1] || (t[1] = (d) => e.clickImages(e.follow.images))
      }, [
        ge(E(e.translate("additionalImages", e.follow.images.length)) + " ", 1),
        oe(i, { width: "12px" })
      ])) : N("", !0)
    ])) : N("", !0),
    oe(p, {
      type: e.headerType,
      info: e.info,
      operation: e.operation,
      onClickOperate: e.clickOperate,
      onHandleClick: e.handleClick
    }, null, 8, ["type", "info", "operation", "onClickOperate", "onHandleClick"]),
    I(e.$slots, "comment-shop-reply")
  ])) : N("", !0);
}
const I4 = /* @__PURE__ */ Z(C4, [["render", _4]]), { componentName: B4, create: M4 } = U("invoice"), L4 = M4({
  components: {
    NutForm: dn,
    NutFormItem: fn,
    NutRadio: _o,
    NutRadioGroup: Io,
    NutButton: qe
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    formValue: {
      type: Object,
      default: {}
    },
    submit: {
      type: Boolean,
      default: !0
    }
  },
  emits: [
    "submit",
    "scrollBottom",
    // will be deprecated
    "onSubmit"
  ],
  setup(e, { emit: t }) {
    const n = z(), l = z([]), o = ce({
      // list: []
    }), a = D(() => ({
      [B4]: !0
    }));
    ve(() => {
      s();
    });
    const s = () => {
      l.value = e.data;
    }, r = () => {
      n.value.validate().then(({ valid: i, errors: p }) => {
        t("submit", i, p), t("onSubmit", i, p);
      });
    };
    return Q(
      () => e.data,
      () => s(),
      { deep: !0 }
    ), de(q({}, he(o)), {
      classes: a,
      formRef: n,
      list: l,
      submitFun: r
    });
  }
}), E4 = ["onUpdate:modelValue", "placeholder"], P4 = {
  key: 0,
  class: "nut-invoice__submit"
};
function A4(e, t, n, l, o, a) {
  const s = W("nut-radio"), r = W("nut-radio-group"), i = W("nut-form-item"), p = W("nut-form"), d = W("nut-button");
  return c(), f("view", {
    class: L(e.classes)
  }, [
    oe(p, {
      ref: "formRef",
      "model-value": e.formValue
    }, {
      default: ne(() => [
        (c(!0), f(x, null, ie(e.list, (v, y) => (c(), ee(i, {
          key: y,
          label: v.label,
          required: v.required,
          rules: v.rules,
          prop: v.formItemProp
        }, {
          default: ne(() => [
            v.type === "radio" ? (c(), ee(r, {
              key: 0,
              modelValue: e.formValue[v.formItemProp],
              "onUpdate:modelValue": (b) => e.formValue[v.formItemProp] = b
            }, {
              default: ne(() => [
                (c(!0), f(x, null, ie(v.radioLabel, (b, $) => (c(), ee(s, {
                  key: $,
                  shape: "button",
                  label: b.label
                }, {
                  default: ne(() => [
                    ge(E(b.label), 1)
                  ]),
                  _: 2
                }, 1032, ["label"]))), 128))
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue"])) : Se((c(), f("input", {
              key: 1,
              "onUpdate:modelValue": (b) => e.formValue[v.formItemProp] = b,
              class: "nut-input-text",
              placeholder: v.placeholder,
              type: "text"
            }, null, 8, E4)), [
              [Wn, e.formValue[v.formItemProp]]
            ])
          ]),
          _: 2
        }, 1032, ["label", "required", "rules", "prop"]))), 128))
      ]),
      _: 1
    }, 8, ["model-value"]),
    e.submit ? (c(), f("div", P4, [
      oe(d, {
        type: "primary",
        block: "",
        onClick: e.submitFun
      }, {
        default: ne(() => [
          ge("提交审批")
        ]),
        _: 1
      }, 8, ["onClick"])
    ])) : N("", !0)
  ], 2);
}
const z4 = /* @__PURE__ */ Z(L4, [["render", A4]]), { create: V4 } = U("avatar-cropper"), O4 = V4({
  components: {
    NutButton: qe,
    Refresh2: ir,
    Retweet: pr
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
    const l = ce({
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
    }, a = z(q({}, o)), s = z(), r = z(), i = z(), p = window.devicePixelRatio || 1, d = et(), v = D(() => l.angle === 90 || l.angle === 270), y = D(() => {
      const { swidth: X } = a.value, se = X / p + "px";
      return {
        width: se,
        height: se
      };
    }), b = D(() => {
      const { displayWidth: X, scale: se } = l, { swidth: ue, height: pe } = a.value;
      return v.value ? Math.max(0, (pe * se - ue) / 2) : Math.max(0, (X * se - ue) / 2);
    }), $ = D(() => {
      const { displayWidth: X, scale: se } = l, { swidth: ue, height: pe } = a.value;
      return v.value ? Math.max(0, (X * se - ue) / 2) : Math.max(0, (pe * se - ue) / 2);
    }), k = (X) => new Promise((se) => {
      const ue = new FileReader();
      ue.onloadend = (pe) => se(pe.target.result), ue.readAsDataURL(X);
    }), u = (X) => new Promise((se) => {
      const ue = new Image();
      ue.onload = () => se(ue), ue.src = X;
    }), g = () => {
      const { img: X, width: se, height: ue, x: pe, y: we, swidth: Be } = a.value, { moveX: H, moveY: J, scale: ae } = l, re = r.value;
      if (!re)
        return;
      const me = re.getContext("2d");
      re.width = l.displayWidth, re.height = l.displayHeight, me.clearRect(0, 0, re.width, re.height), me.fillStyle = "#666", me.fillRect(0, 0, re.width, re.height), me.fillStyle = "#000", me.fillRect(e.space * p, (re.height - Be) / 2, Be, Be), me.translate(re.width / 2 + H, re.height / 2 + J), me.rotate(Math.PI / 180 * l.angle), me.scale(ae, ae), me.drawImage(X, pe, we, se, ue);
    }, m = (X) => {
      const se = Ye(s.value), { width: ue, height: pe } = se, we = l.displayWidth = ue * p, Be = l.displayHeight = pe * p;
      let H = q({}, o);
      const { width: J, height: ae } = X;
      H.img = X;
      const re = ae > J, me = re ? J / ae : ae / J;
      H.width = we, H.height = re ? we / me : we * me, H.x = -H.width / 2, H.y = -H.height / 2, H.swidth = we - e.space * 2 * p, H.sheight = re ? H.swidth / me : H.swidth * me, H.sx = e.space * p, H.sy = (Be - H.swidth) / 2, a.value = H, l.defScale = H.swidth / (re ? H.width : H.height), S();
    }, w = (X) => Ge(this, null, function* () {
      l.visible = !0;
      const se = X.target;
      let { files: ue } = se;
      if (!(ue != null && ue.length))
        return;
      const pe = yield k(ue[0]), we = yield u(pe);
      m(we), g();
    }), S = () => {
      _(l.defScale), l.moveX = 0, l.moveY = 0, l.angle = 0;
    }, _ = (X) => {
      X = Ve(X, 0.3, +e.maxZoom + 1), X !== l.scale && (l.scale = X);
    }, B = (X) => Math.sqrt(pt(X[0].clientX - X[1].clientX, 2) + pt(X[0].clientY - X[1].clientY, 2));
    let M, C, T, P, O;
    const K = (X) => {
      const { touches: se } = X, { offsetX: ue } = d;
      d.start(X), O = se.length, M = l.moveX, C = l.moveY, l.moving = O === 1, l.zooming = O === 2 && !ue.value, l.zooming && (T = l.scale, P = B(X.touches));
    }, G = (X) => {
      const { touches: se } = X;
      if (d.move(X), (l.moving || l.zooming) && ft(X, !0), l.moving) {
        const { deltaX: ue, deltaY: pe } = d, we = ue.value * l.scale + M, Be = pe.value * l.scale + C;
        l.moveX = Ve(we, -b.value, b.value), l.moveY = Ve(Be, -$.value, $.value);
      }
      if (l.zooming && se.length === 2) {
        const ue = B(se), pe = T * ue / P;
        _(pe);
      }
    }, le = (X) => {
      let se = !1;
      (l.moving || l.zooming) && (se = !(l.moving && M === l.moveX && C === l.moveY), X.touches.length || (l.zooming && (l.moveX = Ve(l.moveX, -b.value, b.value), l.moveY = Ve(l.moveY, -$.value, $.value), l.zooming = !1), l.moving = !1, M = 0, C = 0, T = l.defScale, l.scale < l.defScale && S(), l.scale > e.maxZoom && (l.scale = +e.maxZoom))), ft(X, se), d.reset();
    }, Y = () => {
      l.angle = 0;
    }, j = () => {
      if (l.angle === 270) {
        l.angle = 0;
        return;
      }
      l.angle += 90;
    }, R = (X = !0) => {
      l.visible = !1, S(), i.value.value = "", X && t("cancel");
    }, te = () => {
      const X = r.value, { sx: se, sy: ue, swidth: pe } = a.value, we = pe, Be = pe, H = document.createElement("canvas"), J = H.getContext("2d");
      H.width = we, H.height = Be, X && J.drawImage(X, se, ue, we, Be, 0, 0, we, Be);
      const ae = H.toDataURL("image/png");
      t("confirm", ae), R(!1);
    };
    return Q(
      () => l.scale,
      () => {
        g();
      }
    ), Q(
      () => l.angle,
      () => {
        Math.abs(l.moveX) > b.value && (l.moveX = b.value), Math.abs(l.moveY) > $.value && (l.moveY = $.value), g();
      }
    ), Q(
      () => l.moveX,
      () => {
        g();
      }
    ), Q(
      () => l.moveY,
      () => {
        g();
      }
    ), n({
      cancel: R,
      reset: Y,
      rotate: j,
      confirm: te
    }), de(q({}, he(l)), {
      cropperPopupRef: s,
      canvasRef: r,
      inputImageRef: i,
      highlightStyle: y,
      inputImageChange: w,
      reset: Y,
      rotate: j,
      cancel: R,
      confirm: te,
      onTouchStart: K,
      onTouchMove: G,
      onTouchEnd: le
    });
  }
}), H4 = ["data-edit-text"], R4 = {
  ref: "cropperPopupRef",
  class: "nut-cropper-popup"
}, F4 = {
  ref: "canvasRef",
  class: "nut-cropper-popup__canvas"
}, W4 = {
  key: 1,
  class: "flex-sb"
};
function Y4(e, t, n, l, o, a) {
  const s = W("nut-button"), r = W("Refresh2"), i = W("Retweet");
  return c(), f(x, null, [
    h("div", {
      class: L(["nut-avatar-cropper", { round: e.shape === "round" }]),
      "data-edit-text": e.editText
    }, [
      I(e.$slots, "default"),
      h("input", {
        ref: "inputImageRef",
        type: "file",
        accept: "image/*",
        class: "nut-avatar-cropper__input",
        onChange: t[0] || (t[0] = (...p) => e.inputImageChange && e.inputImageChange(...p))
      }, null, 544)
    ], 10, H4),
    Se(h("div", R4, [
      h("canvas", F4, null, 512),
      h("div", {
        class: "nut-cropper-popup__highlight",
        onTouchstart: t[1] || (t[1] = (...p) => e.onTouchStart && e.onTouchStart(...p)),
        onTouchmove: t[2] || (t[2] = (...p) => e.onTouchMove && e.onTouchMove(...p)),
        onTouchend: t[3] || (t[3] = (...p) => e.onTouchEnd && e.onTouchEnd(...p)),
        onTouchcancel: t[4] || (t[4] = (...p) => e.onTouchEnd && e.onTouchEnd(...p))
      }, [
        h("div", {
          class: L(["highlight", { highlight__round: e.shape === "round" }]),
          style: A(e.highlightStyle)
        }, null, 6)
      ], 32),
      h("div", {
        class: L(["nut-cropper-popup__toolbar", [e.toolbarPosition]])
      }, [
        e.$slots.toolbar ? I(e.$slots, "toolbar", { key: 0 }) : (c(), f("div", W4, [
          h("div", {
            class: "nut-cropper-popup__toolbar-item",
            onClick: t[5] || (t[5] = (p) => e.cancel())
          }, [
            oe(s, { type: "danger" }, {
              default: ne(() => [
                ge(E(e.cancelText), 1)
              ]),
              _: 1
            })
          ]),
          h("div", {
            class: "nut-cropper-popup__toolbar-item",
            onClick: t[6] || (t[6] = (...p) => e.reset && e.reset(...p))
          }, [
            oe(r, { color: "#fff" })
          ]),
          h("div", {
            class: "nut-cropper-popup__toolbar-item",
            onClick: t[7] || (t[7] = (...p) => e.rotate && e.rotate(...p))
          }, [
            oe(i, { color: "#fff" })
          ]),
          h("div", {
            class: "nut-cropper-popup__toolbar-item",
            onClick: t[8] || (t[8] = (...p) => e.confirm && e.confirm(...p))
          }, [
            oe(s, { type: "success" }, {
              default: ne(() => [
                ge(E(e.confirmText), 1)
              ]),
              _: 1
            })
          ])
        ]))
      ], 2)
    ], 512), [
      [Ie, e.visible]
    ])
  ], 64);
}
const j4 = /* @__PURE__ */ Z(O4, [["render", Y4]]);
function U4(e) {
  [qe, to, no, Tt, ze, Ni, Pi, lo, ao, ro, co, fo, Gi, nu, lu, fu, Cu, Mu, Vu, Fu, ec, yo, wc, vo, $o, Fc, qc, ed, rd, ko, _d, Yd, mf, So, Vf, Rf, sp, zt, bp, _o, Io, un, No, Op, Up, m1, L1, dn, fn, Mo, F1, x1, lm, im, pn, _m, Pm, Vt, jm, Ot, ih, mh, mn, wh, Nh, cn, zo, Wh, Jh, hn, gg, Bg, gn, yn, Ht, vn, s0, p0, go, Ro, Fo, B0, Yo, jo, ty, Uo, uy, my, $y, My, nv, rv, hv, Dv, Lv, Rv, N2, H2, J2, b3, _3, K3, I4, z4, j4].forEach((n) => {
    n.install ? e.use(n) : n.name && e.component(n.name, n);
  });
}
const K4 = "4.3.2", Q4 = { install: U4, version: K4 };
export {
  x1 as ActionSheet,
  nv as Address,
  b3 as AddressList,
  Uo as Animate,
  ih as Audio,
  mh as AudioOperate,
  mn as Avatar,
  j4 as AvatarCropper,
  wh as AvatarGroup,
  lm as Backtop,
  go as Badge,
  rv as Barrage,
  qe as Button,
  mf as Calendar,
  So as CalendarCard,
  H2 as Card,
  Yd as Cascader,
  _3 as Category,
  K3 as CategoryPane,
  to as Cell,
  no as CellGroup,
  Vf as Checkbox,
  Rf as CheckboxGroup,
  zo as CircleProgress,
  ao as Col,
  Yo as Collapse,
  jo as CollapseItem,
  I4 as Comment,
  Ni as ConfigProvider,
  p0 as Countdown,
  s0 as Countup,
  sp as DatePicker,
  pn as Dialog,
  fo as Divider,
  im as Drag,
  J2 as Ecard,
  yo as Elevator,
  uy as Ellipsis,
  Jh as Empty,
  Cu as FixedNav,
  dn as Form,
  fn as FormItem,
  Gi as Grid,
  nu as GridItem,
  Pi as Image,
  vn as ImagePreview,
  Fc as Indicator,
  _m as InfiniteLoading,
  bp as Input,
  zt as InputNumber,
  z4 as Invoice,
  lo as Layout,
  Nh as List,
  qn as Locale,
  Mu as Menu,
  Vu as MenuItem,
  fu as Navbar,
  Wh as Noticebar,
  Vt as Notify,
  L1 as NumberKeyboard,
  Tt as Overlay,
  wc as Pagination,
  No as Picker,
  Fo as Popover,
  ze as Popup,
  Ht as Price,
  cn as Progress,
  Pm as PullRefresh,
  _o as Radio,
  Io as RadioGroup,
  ko as Range,
  un as Rate,
  ro as Row,
  _d as Searchbar,
  Op as ShortPassword,
  qc as SideNavbar,
  ed as SideNavbarItem,
  hv as Signature,
  B0 as Skeleton,
  N2 as Sku,
  lu as Space,
  Bg as Step,
  gg as Steps,
  co as Sticky,
  rd as SubSideNavbar,
  Mo as Swipe,
  F1 as SwipeGroup,
  gn as Swiper,
  yn as SwiperItem,
  jm as Switch,
  $o as TabPane,
  Fu as Tabbar,
  ec as TabbarItem,
  ty as Table,
  vo as Tabs,
  Ro as Tag,
  Up as Textarea,
  Rv as TimeDetail,
  Lv as TimePannel,
  Dv as TimeSelect,
  Ot as Toast,
  My as Tour,
  $y as TrendArrow,
  m1 as Uploader,
  hn as Video,
  my as Watermark,
  Q4 as default,
  U4 as install,
  ym as showDialog,
  Qg as showImagePreview,
  J4 as showNotify,
  Po as showToast,
  K4 as version
};
