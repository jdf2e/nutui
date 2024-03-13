var qo = Object.defineProperty, Zo = Object.defineProperties;
var Go = Object.getOwnPropertyDescriptors;
var Dt = Object.getOwnPropertySymbols;
var yn = Object.prototype.hasOwnProperty, vn = Object.prototype.propertyIsEnumerable;
var pt = Math.pow, Ft = (e, t, n) => t in e ? qo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Z = (e, t) => {
  for (var n in t || (t = {}))
    yn.call(t, n) && Ft(e, n, t[n]);
  if (Dt)
    for (var n of Dt(t))
      vn.call(t, n) && Ft(e, n, t[n]);
  return e;
}, de = (e, t) => Zo(e, Go(t));
var _t = (e) => typeof e == "symbol" ? e : e + "", Wt = (e, t) => {
  var n = {};
  for (var l in e)
    yn.call(e, l) && t.indexOf(l) < 0 && (n[l] = e[l]);
  if (e != null && Dt)
    for (var l of Dt(e))
      t.indexOf(l) < 0 && vn.call(e, l) && (n[l] = e[l]);
  return n;
};
var V = (e, t, n) => (Ft(e, typeof t != "symbol" ? t + "" : t, n), n);
var Ge = (e, t, n) => new Promise((l, o) => {
  var r = (i) => {
    try {
      a(n.next(i));
    } catch (p) {
      o(p);
    }
  }, s = (i) => {
    try {
      a(n.throw(i));
    } catch (p) {
      o(p);
    }
  }, a = (i) => i.done ? l(i.value) : Promise.resolve(i.value).then(r, s);
  a((n = n.apply(e, t)).next());
});
import { reactive as ce, ref as z, defineComponent as Pe, useSlots as lt, h as be, openBlock as c, createBlock as ee, computed as D, createElementBlock as f, normalizeClass as L, normalizeStyle as A, createElementVNode as h, createTextVNode as ge, unref as Be, createCommentVNode as N, renderSlot as I, provide as Ee, inject as Le, getCurrentInstance as je, onUnmounted as Xe, createApp as Jo, resolveComponent as W, Fragment as x, toDisplayString as E, watchEffect as bt, Transition as Qt, withCtx as ne, withDirectives as Ce, withModifiers as _e, vShow as De, watch as Q, toRefs as he, Teleport as Hn, mergeProps as wt, createVNode as oe, onMounted as ve, onBeforeUnmount as xt, shallowReactive as Qo, markRaw as $n, isVNode as xo, Comment as el, Text as tl, nextTick as Se, renderList as ie, normalizeProps as nl, guardReactiveProps as ol, resolveDynamicComponent as Ve, onActivated as Ct, toRef as xe, createSlots as kt, onBeforeMount as Rn, readonly as bn, onDeactivated as St, render as en, vModelText as Fn } from "vue";
class Wn {
}
let ll = class extends Wn {
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
class sl extends Wn {
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
    jn(o) ? o.then((r) => {
      r ? n(r) : l && l();
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
}, Yn = Array.isArray, al = (e) => e instanceof Date, Pt = (e) => typeof e == "function", rl = (e) => typeof e == "string", ct = (e) => e !== null && typeof e == "object", jn = (e) => ct(e) && Pt(e.then) && Pt(e.catch), il = document, wn = il.body, Ut = (e, t) => {
  try {
    return t.split(".").reduce((n, l) => n[l], e);
  } catch (n) {
    return "";
  }
}, ul = (e, t, n) => {
  let l = Object.assign({}, e), o = Object.assign({}, n);
  return Object.keys(t).length > 0 ? (Object.keys(l).forEach((r) => {
    if (Object.prototype.hasOwnProperty.call(o, r)) {
      const s = jt(o[r]);
      s == "function" && (l[r] = o[r](t)), s == "string" && (l[r] = t[o[r]]);
    } else
      t[r] && (l[r] = t[r]);
  }), l) : e;
}, Un = (e, t) => (Object.keys(t).forEach((n) => {
  let l = e[n], o = t[n];
  ct(l) && ct(o) ? Un(l, o) : e[n] = o;
}), e);
function cl(e, t = 2) {
  return Object.is(parseFloat(e), NaN) ? console.log(`传入的值：${e}不是一个数字`) : (e = parseFloat(e), (Math.round((e + Number.EPSILON) * Math.pow(10, t)) / Math.pow(10, t)).toFixed(t));
}
function dt(e, t) {
  (typeof e.cancelable != "boolean" || e.cancelable) && e.preventDefault(), t && e.stopPropagation();
}
const Qe = (e, t = 2) => {
  for (e += ""; e.length < t; )
    e = "0" + e;
  return e.toString();
}, ze = (e, t, n) => Math.min(Math.max(e, t), n), Kn = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, It = ce({
  "zh-CN": new ll(),
  "en-US": new sl()
});
class Xn {
  static languages() {
    return It[this.currentLang.value];
  }
  static use(t, n) {
    n && (It[t] = new n()), this.currentLang.value = t;
  }
  static merge(t, n) {
    n && (It[t] ? Un(It[t], n) : this.use(t, n));
  }
}
V(Xn, "currentLang", z("zh-CN"));
const dl = /* @__PURE__ */ Pe({
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
    const n = e, l = "nut-icon", o = lt(), r = () => n.name ? n.name.indexOf("/") !== -1 : !1, s = (d) => {
      if (d)
        return isNaN(Number(d)) ? String(d) : d + "px";
    }, a = r();
    let i = be(
      a ? "img" : n.tag,
      {
        class: a ? `${l}__img` : `${n.fontClassName} ${l} ${n.classPrefix}-${n.name}`,
        style: {
          color: n.color,
          fontSize: s(n.size),
          width: s(n.width || n.size),
          height: s(n.height || n.size)
        },
        src: a ? n.name : ""
      },
      (t = o.default) == null ? void 0 : t.call(o)
    );
    const p = () => i;
    return (d, v) => (c(), ee(p));
  }
});
function fl(e) {
  return e.name = "IconFont", e.install = (t) => {
    t.component("IconFont", e);
  }, e;
}
fl(dl);
const F = (e) => Pe({
  props: {
    class: { type: String, default: "" },
    name: { type: String, default: e },
    color: { type: String, default: "" },
    width: { type: [String, Number], default: "" },
    height: { type: [String, Number], default: "" }
  },
  setup(t) {
    const n = (r) => {
      if (r)
        return isNaN(Number(r)) ? String(r) : r + "px";
    }, l = D(() => {
      const r = "nut-icon";
      return {
        [t.class]: t.class,
        [r]: !0,
        [r + "-" + t.name]: t.name
      };
    }), o = D(() => {
      const r = {};
      return r.height = n(t.height), r.width = n(t.width), r.color = t.color, r;
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
const pl = F("arrow-down2"), ml = /* @__PURE__ */ h("path", {
  d: "M1741.19 227.497a121.654 121.654 0 1 1 127.858 206.812L1292.65 790.27a182.482 182.482 0 0 1-191.727 0L524.646 434.31a121.654 121.654 0 1 1 127.859-206.812l544.403 335.887c181.387-111.8 362.773-223.965 544.282-335.887",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), hl = [
  ml
];
function gl(e, t, n, l, o, r) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 2472 1024",
    role: "presentation"
  }, hl, 6);
}
const yl = /* @__PURE__ */ ye(pl, [["render", gl]]);
F("arrow-right");
F("arrow-right2");
F("arrow-up");
const vl = F("arrow-up2"), $l = /* @__PURE__ */ h("path", {
  d: "M623.406 815.479A129.722 129.722 0 1 1 487.068 594.95C691.9 468.083 896.73 341.993 1101.691 215.125a194.583 194.583 0 0 1 204.442 0l614.494 379.567a129.722 129.722 0 1 1-136.338 220.657l-580.506-358.292-580.377 358.422",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), bl = [
  $l
];
function wl(e, t, n, l, o, r) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 2472 1024",
    role: "presentation"
  }, bl, 6);
}
const kl = /* @__PURE__ */ ye(vl, [["render", wl]]);
F("ask");
F("ask2");
F("cart");
F("cart2");
F("category");
const Cl = F("check-checked"), Sl = /* @__PURE__ */ h("path", {
  d: "M510.613 2.837C229.793 2.837.032 232.598.032 513.418S229.793 1024 510.613 1024s510.582-229.762 510.582-510.582S794.27 2.837 510.613 2.837zm0 794.238c-156.01 0-283.656-127.646-283.656-283.657s127.645-283.656 283.656-283.656S794.27 357.407 794.27 513.418 666.624 797.075 510.613 797.075z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Tl = /* @__PURE__ */ h("path", {
  d: "M382.968 513.418a127.645 127.645 0 1 0 255.29 0 127.645 127.645 0 1 0-255.29 0Z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1);
function Nl(e, t, n, l, o, r) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1032 1024",
    role: "presentation"
  }, [
    Sl,
    ge(","),
    Tl
  ], 6);
}
const kn = /* @__PURE__ */ ye(Cl, [["render", Nl]]), Dl = F("check-disabled"), _l = /* @__PURE__ */ h("path", {
  d: "M506.467 0C227.962 0 .094 227.868.094 506.374s227.868 506.373 506.373 506.373 506.374-227.868 506.374-506.373S787.786 0 506.467 0zm202.55 571.077H306.73c-45.01 0-67.516-22.506-67.516-67.517 0-45.01 22.505-67.516 67.516-67.516h402.286c45.01 0 67.516 22.505 67.516 67.516 0 45.011-22.505 67.517-67.516 67.517z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Il = [
  _l
];
function Bl(e, t, n, l, o, r) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Il, 6);
}
const Ml = /* @__PURE__ */ ye(Dl, [["render", Bl]]), Ll = F("check-normal"), El = /* @__PURE__ */ h("path", {
  d: "M512 1024c-136.533 0-264.533-54.044-361.244-150.756C54.044 776.534 0 648.534 0 512c0-136.533 54.044-264.533 150.756-361.244C247.466 54.044 375.466 0 512 0c136.533 0 264.533 54.044 361.244 150.756C969.956 247.466 1024 375.466 1024 512s-54.044 264.533-150.756 361.244C776.534 969.956 648.534 1024 512 1024zm0-938.667c-113.778 0-221.867 45.511-301.511 125.156S85.333 398.222 85.333 512s45.511 221.867 125.156 301.511S398.222 938.667 512 938.667s221.867-45.511 301.511-125.156S938.667 625.778 938.667 512 893.156 290.133 813.51 210.489 625.778 85.333 512 85.333z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Pl = [
  El
];
function Al(e, t, n, l, o, r) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Pl, 6);
}
const Kt = /* @__PURE__ */ ye(Ll, [["render", Al]]), zl = F("Check"), Vl = /* @__PURE__ */ h("path", {
  d: "M998.4 245.029c-219.429 153.6-398.629 332.8-552.229 552.228-40.228 58.514-128 54.857-164.571-3.657-69.486-106.057-149.943-186.514-256-256-51.2-32.914-18.286-113.371 40.229-98.743C182.857 460.8 274.286 508.343 358.4 585.143c157.257-190.172 358.4-340.114 588.8-435.2 62.171-25.6 106.057 58.514 51.2 95.086",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ol = [
  Vl
];
function Hl(e, t, n, l, o, r) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ol, 6);
}
const qn = /* @__PURE__ */ ye(zl, [["render", Hl]]), Rl = F("checked"), Fl = /* @__PURE__ */ h("path", {
  d: "M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0zm281.6 369.778C779.378 381.156 600.178 500.622 472.178 691.2c0 0 0 2.844-2.845 2.844-8.533 5.69-48.355 36.978-88.177-8.533-39.823-51.2-62.578-99.555-142.223-142.222-2.844 0-2.844-2.845-2.844-2.845-8.533-11.377-39.822-56.888 19.911-56.888 45.511 0 91.022 11.377 162.133 73.955 5.69 5.689 14.223 5.689 17.067 0C469.333 517.69 608.711 366.933 768 318.578c0 0 19.911-2.845 31.289 14.222 5.689 11.378 11.378 22.756-5.689 36.978z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Wl = [
  Fl
];
function Yl(e, t, n, l, o, r) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Wl, 6);
}
const Zn = /* @__PURE__ */ ye(Rl, [["render", Yl]]), jl = F("checklist"), Ul = /* @__PURE__ */ h("path", {
  d: "M159.289 500.622c62.578 0 125.155 17.067 221.867 102.4 8.533 5.69 19.91 5.69 25.6 0 48.355-54.044 238.933-261.689 455.11-329.955 0 0 28.445-5.69 42.667 19.91 8.534 17.067 19.911 34.134-5.689 54.045-22.755 17.067-264.533 179.2-440.888 440.89l-2.845 2.844c-11.378 8.533-68.267 51.2-119.467-14.223-56.888-71.11-85.333-139.377-196.266-196.266-2.845 0-2.845-2.845-5.69-5.69-11.377-11.377-54.044-73.955 25.6-73.955z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Kl = [
  Ul
];
function Xl(e, t, n, l, o, r) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Kl, 6);
}
const ql = /* @__PURE__ */ ye(jl, [["render", Xl]]), Zl = F("circle-close"), Gl = /* @__PURE__ */ h("path", {
  d: "M511.492 73.063a438.425 438.425 0 0 1 310.545 748.953 439.16 439.16 0 1 1-621.09-621.073A435.695 435.695 0 0 1 511.492 73.046m0-73.063C267.49.018 57.468 172.408 9.87 411.717-37.713 651.042 90.39 890.658 315.823 984.03c225.45 93.355 485.444 14.472 621.005-188.416 135.543-202.906 108.885-473.293-63.659-645.82A509.645 509.645 0 0 0 511.492.002zm-175.7 635.495 299.673-299.674c12.049-12.049 24.115-12.049 36.164 0l15.496 15.497c12.05 12.066 12.05 24.115 0 36.18L387.47 687.122c-12.066 12.05-24.115 12.05-36.181 0l-15.497-15.496c-12.049-12.066-12.049-24.115 0-36.182zm0-284.177 15.496-15.497c12.066-12.049 24.115-12.049 36.18 0l299.64 299.674c12.05 12.049 12.05 24.098 0 36.164l-15.496 15.496c-12.05 12.05-24.115 12.05-36.182 0L335.808 387.465c-12.049-12.05-12.049-24.098 0-36.164z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Jl = [
  Gl
];
function Ql(e, t, n, l, o, r) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Jl, 6);
}
const nn = /* @__PURE__ */ ye(Zl, [["render", Ql]]);
F("clock");
F("close-little");
const xl = F("close"), es = /* @__PURE__ */ h("path", {
  d: "M981.577 1024c-11.703 0-23.406-2.926-32.183-11.703L13.166 76.07c-14.629-17.555-14.629-46.812 0-64.366 17.554-14.629 46.811-14.629 64.365 0L1013.76 947.93c17.554 17.555 17.554 43.886 0 61.44-8.777 11.703-20.48 14.629-32.183 14.629zm-936.228 0c-11.703 0-23.406-2.926-32.183-11.703-17.555-17.554-17.555-43.886 0-61.44L949.394 14.63c17.555-17.555 43.886-17.555 61.44 0 17.555 17.554 17.555 43.885 0 61.44L74.606 1012.297C68.754 1021.074 57.05 1024 45.349 1024z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ts = [
  es
];
function ns(e, t, n, l, o, r) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1026 1024",
    role: "presentation"
  }, ts, 6);
}
const At = /* @__PURE__ */ ye(xl, [["render", ns]]), os = F("comment"), ls = /* @__PURE__ */ h("path", {
  d: "M760.415 876.089H259.793c-132.741 0-242.726-109.985-242.726-242.726V242.726C17.067 109.986 127.052 0 259.793 0h504.414c132.741 0 242.726 109.985 242.726 242.726v394.43c-3.792 132.74-109.985 238.933-246.518 238.933zM259.793 113.778c-72.06 0-128.949 56.889-128.949 128.948v394.43c0 72.059 56.89 128.948 128.949 128.948h504.414c68.267 0 128.949-56.89 128.949-128.948v-394.43c0-72.06-56.89-128.948-128.949-128.948H259.793zm56.888 887.466c-15.17 0-30.34-3.792-41.718-15.17-22.756-22.755-22.756-56.889 0-79.644l109.985-109.986c22.756-22.755 56.889-22.755 79.645 0s22.755 56.89 0 79.645L354.607 986.074c-7.585 7.585-22.755 15.17-37.926 15.17zm193.423-398.222c-45.511 0-91.023-22.755-117.57-56.889-18.964-26.548-15.171-60.681 7.585-79.644 26.548-18.963 60.681-15.17 79.644 7.585 15.17 18.963 45.511 18.963 56.889 0 18.963-22.755 56.889-30.34 79.644-7.585s30.341 56.889 7.585 79.644c-22.755 37.926-68.266 56.89-113.777 56.89z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ss = [
  ls
];
function as(e, t, n, l, o, r) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ss, 6);
}
const rs = /* @__PURE__ */ ye(os, [["render", as]]);
F("date");
const is = F("del"), us = /* @__PURE__ */ h("path", {
  d: "M668.444 1024H355.556c-142.223 0-256-113.778-256-256V170.667h824.888V768c0 142.222-113.777 256-256 256zM184.89 256v512c0 93.867 76.8 170.667 170.667 170.667h312.888c93.867 0 170.667-76.8 170.667-170.667V256H184.89zm753.778 0H85.333c-22.755 0-42.666-19.911-42.666-42.667s19.91-42.666 42.666-42.666h853.334c22.755 0 42.666 19.91 42.666 42.666S961.423 256 938.667 256zM625.777 85.333H398.223c-22.755 0-42.666-19.91-42.666-42.666S375.466 0 398.222 0h227.556c22.755 0 42.666 19.911 42.666 42.667s-19.91 42.666-42.666 42.666z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), cs = [
  us
];
function ds(e, t, n, l, o, r) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, cs, 6);
}
const Gn = /* @__PURE__ */ ye(is, [["render", ds]]);
F("del2");
F("dongdong");
F("dou-arrow-up");
const fs = F("down-arrow"), ps = /* @__PURE__ */ h("path", {
  d: "M128 349.867C93.867 332.8 34.133 341.333 8.533 384-8.533 418.133 0 477.867 42.667 503.467 179.2 588.8 315.733 665.6 443.733 750.933c42.667 25.6 93.867 25.6 136.534 0C716.8 665.6 853.333 588.8 981.333 503.467c42.667-25.6 51.2-76.8 25.6-119.467s-76.8-51.2-119.466-25.6C768 435.2 640 512 512 588.8 384 512 256 435.2 128 349.867",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ms = [
  ps
];
function hs(e, t, n, l, o, r) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ms, 6);
}
const Jn = /* @__PURE__ */ ye(fs, [["render", hs]]);
F("download");
F("dshop");
const gs = F("edit"), ys = /* @__PURE__ */ h("path", {
  d: "M285.479 992.97H108.606c-27.927 0-55.854-12.412-77.576-31.03C9.31 940.217 0 915.393 0 884.363l3.103-155.152c0-24.824 9.31-46.545 27.927-65.164L626.812 65.164c83.782-83.782 220.315-83.782 307.2 0 83.782 83.781 83.782 223.418 0 307.2l-605.09 601.988c-12.413 12.412-27.928 18.618-43.443 18.618zM781.964 93.09c-31.03 0-65.164 12.413-89.988 37.237L96.194 729.212 93.09 884.364c0 9.309 6.206 15.515 15.515 15.515h161.358l598.884-595.782c49.649-49.649 49.649-127.224 0-173.77l-3.103-3.103c-21.72-21.721-52.751-34.133-83.781-34.133zm-201.946 78.508 65.816-65.847L882.812 342.73l-65.846 65.784zM946.424 992.97H217.212c-24.824 0-46.545-21.722-46.545-46.546s21.72-46.545 46.545-46.545h729.212c24.824 0 46.546 21.721 46.546 46.545s-21.722 46.546-46.546 46.546z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), vs = [
  ys
];
function $s(e, t, n, l, o, r) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, vs, 6);
}
const bs = /* @__PURE__ */ ye(gs, [["render", $s]]);
F("eye");
const ws = F("fabulous"), ks = /* @__PURE__ */ h("path", {
  d: "M584.06 1024H318.577C144.118 1024 0 883.674 0 705.422s140.326-318.578 318.578-318.578v113.778c-113.778 0-204.8 91.022-204.8 204.8s91.022 204.8 204.8 204.8h265.481V1024zm56.888 0h-53.096c-208.593 0-379.26-170.667-379.26-383.052 0-83.437 26.549-163.081 75.852-231.348l3.793-3.793c15.17-22.755 30.34-60.681 45.511-121.363l7.585-34.133c7.586-18.963 15.17-41.718 18.963-68.267C386.844 22.756 470.281 0 519.586 0c117.57 0 178.251 106.193 178.251 212.385v7.585c0 7.586-3.793 18.963-3.793 37.926C876.09 257.896 1024 405.807 1024 587.852v53.096C1024 853.333 853.333 1024 640.948 1024zM519.585 113.778c-30.34 0-41.718 53.096-49.304 87.23-3.792 34.133-11.377 60.68-15.17 83.436l-7.585 34.134c-11.378 45.51-34.133 113.778-60.682 155.496l-7.585 3.793A269.274 269.274 0 0 0 322.37 644.74c0 147.91 121.363 269.274 269.274 269.274h53.097c147.91 0 269.274-121.363 269.274-269.274v-53.097c0-117.57-98.608-216.177-216.178-216.177h-56.889c-18.963-3.793-37.926-15.17-49.304-30.341-11.377-15.17-15.17-37.926-15.17-56.889 7.585-41.718 11.378-64.474 11.378-75.852v-3.792c-3.793 0-3.793-94.815-68.267-94.815z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Cs = [
  ks
];
function Ss(e, t, n, l, o, r) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1061 1024",
    role: "presentation"
  }, Cs, 6);
}
const Ts = /* @__PURE__ */ ye(ws, [["render", Ss]]), Ns = F("failure"), Ds = /* @__PURE__ */ h("path", {
  d: "M512 1024C229.831 1024 0 794.169 0 512S229.831 0 512 0s512 229.831 512 512-229.831 512-512 512zm0-955.733C266.24 68.267 68.267 266.24 68.267 512S266.24 955.733 512 955.733 955.733 757.76 955.733 512 757.76 68.267 512 68.267zm111.502 282.169c13.654-13.654 34.134-13.654 47.787 0 11.378 11.377 13.653 31.857 2.275 45.51l-2.275 2.276-111.502 111.502 111.502 111.503c13.653 13.653 13.653 34.133 0 47.786-13.653 13.654-34.133 13.654-47.787 0L512 557.511 400.498 669.013c-11.378 11.378-31.858 13.654-45.511 2.276l-2.276-2.276c-11.378-11.377-13.653-31.857-2.275-45.51l2.275-2.276 111.502-111.503-111.502-111.502c-13.653-13.653-13.653-34.133 0-47.786s34.133-13.654 47.787 0L512 461.938l111.502-111.502z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), _s = [
  Ds
];
function Is(e, t, n, l, o, r) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, _s, 6);
}
const Qn = /* @__PURE__ */ ye(Ns, [["render", Is]]);
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
const Bs = F("image-error"), Ms = /* @__PURE__ */ h("path", {
  d: "M696.43 465.25c40.61 0 73.53-32.72 73.53-73.09s-32.96-73.08-73.53-73.08-73.54 32.72-73.54 73.08 32.92 73.09 73.54 73.09zM535.74 650.62l-273.61-259.4a56.19 56.19 0 0 0-15.36 11.58l-114 119.63-6-222.77c-.73-26.82 20.84-49.41 47.67-50.14l201.77-5.44 47.34-50-250.43 6.75C119 202.33 76.33 247.17 77.78 301l7.32 271.4 4.5 166.78C91.06 793 136.05 835.47 190.2 834l176-4.75 12-.32 47.34-50 116.18-122.64z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ls = /* @__PURE__ */ h("path", {
  d: "m861.71 214.8-242.83-33.86-55.09 41.46L855 263a49.05 49.05 0 0 1 41.79 55.13l-54.33 389.59-120.87-159.05A59.86 59.86 0 0 0 638.06 537l-44 33.08 65.07 86.15L603.84 698l-79.57 60.1-54.92 41.48 34.17 4.76 270.73 37.76a97.55 97.55 0 0 0 109.88-79.6 22.37 22.37 0 0 0 .65-3.44l60.53-434.16c7.44-53.32-29.95-102.62-83.6-110.1z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1);
function Es(e, t, n, l, o, r) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, [
    Ms,
    ge(","),
    Ls
  ], 6);
}
const Ps = /* @__PURE__ */ ye(Bs, [["render", Es]]), As = F("image"), zs = /* @__PURE__ */ h("path", {
  d: "M853.161 892.55H362.595l-209.433-.414a18.5 18.5 0 0 1-1.813-.092c-24.849-2.485-47.825-14.06-64.696-32.595-16.991-18.665-26.35-42.855-26.35-68.112V264.626c0-55.808 45.404-101.211 101.212-101.211H853.16c55.808 0 101.21 45.403 101.21 101.211v225.513c0 .275-.006.552-.018.826-.022.494-1.972 51.723 15.481 85.462 4.717 9.119 1.148 20.335-7.97 25.053-9.117 4.714-20.335 1.15-25.053-7.97-21.3-41.177-19.845-97.643-19.619-103.74V264.627c0-35.307-28.724-64.031-64.03-64.031H161.515c-35.308 0-64.032 28.724-64.032 64.031v526.711c0 32.755 24.321 59.958 56.718 63.62l208.431.412h490.53c35.306 0 64.03-28.725 64.03-64.032l-.382-93.677c-.105-1.75-1.587-19.548-19.55-42.5a9.548 9.548 0 0 1-.147-.19l-21.712-28.489-117.227-155.119c-.416-.55-38.995-50.852-86.272-45.534-38.335 4.315-75.955 45.164-108.79 118.132-17.615 39.141-34.65 68.269-52.082 89.046-17.607 20.986-35.68 33.52-55.251 38.317-43.423 10.638-81.05-18.995-120.887-50.373l-5.057-3.98c-46.555-36.578-68.75-28.224-158.33 59.602-7.33 7.188-19.1 7.071-26.289-.26-7.187-7.33-7.07-19.1.26-26.287 46.659-45.746 77.544-72.727 107.086-84.283 33.358-13.048 64.275-6.267 100.242 21.994l5.093 4.008c33.923 26.72 63.22 49.795 89.029 43.467 25.618-6.279 53.3-42.114 82.28-106.509 39.14-86.976 85.838-134.027 138.797-139.849 68.454-7.515 117.824 57.405 119.892 60.172l117.122 154.98 21.6 28.344c26.277 33.631 27.334 61.639 27.367 64.725l.001.128.384 94.06c.001 55.884-45.4 101.287-101.209 101.287z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Vs = /* @__PURE__ */ h("path", {
  d: "M312.328 446.968c-42.325 0-76.759-34.434-76.759-76.76s34.434-76.759 76.76-76.759 76.759 34.435 76.759 76.76-34.434 76.759-76.76 76.759zm0-116.34c-21.824 0-39.579 17.756-39.579 39.58s17.755 39.58 39.58 39.58 39.579-17.756 39.579-39.58-17.755-39.58-39.58-39.58z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1);
function Os(e, t, n, l, o, r) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, [
    zs,
    ge(","),
    Vs
  ], 6);
}
const Hs = /* @__PURE__ */ ye(As, [["render", Os]]);
F("issue");
F("JD");
F("jdl");
F("JIMI40");
const Rs = F("joy-smile"), Fs = /* @__PURE__ */ h("path", {
  d: "M2185.74 479.429a117.992 117.992 0 1 0-162.829-170.852c-284.772 271.204-732.314 271.204-1017.087 0A118.05 118.05 0 0 0 842.996 479.43c375.98 358.045 966.705 358.045 1342.744 0",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ws = [
  Fs
];
function Ys(e, t, n, l, o, r) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 3072 1024",
    role: "presentation"
  }, Ws, 6);
}
const js = /* @__PURE__ */ ye(Rs, [["render", Ys]]), Us = F("left"), Ks = /* @__PURE__ */ h("path", {
  d: "M642.973 1005.542 321.912 587.098a123.278 123.278 0 0 1 0-150.17l321.06-418.443a47.182 47.182 0 0 1 74.83 57.422l-321.088 418.47a28.994 28.994 0 0 0 0 35.3l321.088 418.47a47.155 47.155 0 0 1-74.83 57.395",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Xs = [
  Ks
];
function qs(e, t, n, l, o, r) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Xs, 6);
}
const on = /* @__PURE__ */ ye(Us, [["render", qs]]), Zs = F("link"), Gs = /* @__PURE__ */ h("path", {
  d: "M313.034 1004.045c-66.848 0-124.402-24.156-170.798-70.577l-40.854-40.829C54.96 846.218 28.966 783.097 30.83 714.411c3.702-66.85 31.56-131.808 79.819-180.12l137.4-137.373c14.86-14.861 40.855-14.861 55.69 0 14.86 14.861 16.725 38.99 0 55.69l-137.348 137.4a187.47 187.47 0 0 0-55.69 126.24c-1.864 46.422 14.835 89.115 46.396 120.675l40.855 40.855c31.56 31.56 74.253 48.286 120.674 46.421 46.421-1.838 92.843-22.291 126.24-55.69l137.4-137.4c14.862-14.86 40.856-14.86 55.69 0 14.862 14.862 14.862 40.856 0 55.69l-137.4 137.427c-48.285 48.259-113.27 76.117-180.118 79.82a5.645 5.645 0 0 0-7.405 0zm475.294-382.477c-11.133 0-18.563-3.702-27.832-12.997-14.86-14.861-14.86-40.855 0-55.69l115.082-115.108a187.47 187.47 0 0 0 55.716-126.267c1.838-46.395-14.861-89.114-46.421-120.674l-40.855-40.855c-64.985-64.959-176.364-61.257-246.915 9.294L478.266 278.108c-14.835 14.835-40.829 14.835-55.69 0-14.86-14.861-14.86-40.855 0-55.716l118.81-118.81C643.524 1.444 803.163-2.232 899.734 94.287l40.829 40.855c46.421 46.421 72.415 109.541 70.55 178.228-3.702 66.85-31.56 131.807-79.819 180.093L816.186 608.571c-7.43 7.43-18.563 11.133-27.858 12.997zm-332.327-1.864c-11.16 0-18.564-3.702-27.832-12.997-14.888-14.835-14.888-40.829 0-55.69l148.506-148.532c14.861-14.862 40.855-14.862 55.69 0 14.861 14.86 14.861 40.854 0 55.69L483.832 606.706c-7.404 7.43-18.563 11.159-27.831 12.997z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Js = [
  Gs
];
function Qs(e, t, n, l, o, r) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Js, 6);
}
const xs = /* @__PURE__ */ ye(Zs, [["render", Qs]]), ea = F("loading"), ta = /* @__PURE__ */ h("path", {
  d: "M784 902.4c9.6 19.2 6.4 41.6-12.8 54.4-19.2 9.6-41.6 3.2-51.2-12.8-9.6-19.2-6.4-41.6 12.8-54.4 16-12.8 38.4-8 51.2 12.8zM550.4 984c0 22.4-16 38.4-38.4 38.4s-38.4-16-38.4-38.4v-24c0-22.4 19.2-38.4 41.6-38.4 19.2 0 35.2 16 38.4 38.4v25.6h-3.2zm-240-43.2c-9.6 19.2-35.2 25.6-54.4 16-19.2-9.6-25.6-35.2-16-51.2l28.8-51.2c9.6-19.2 35.2-25.6 54.4-16s25.6 35.2 12.8 54.4l-25.6 48zM121.6 784c-19.2 9.6-41.6 3.2-54.4-16-9.6-19.2-6.4-41.6 12.8-54.4l76.8-44.8c19.2-9.6 41.6-3.2 54.4 16 9.6 19.2 3.2 41.6-16 54.4L121.6 784zM38.4 552C16 552 0 536 0 513.6s16-38.4 38.4-38.4H160c22.4 0 38.4 19.2 38.4 38.4 0 22.4-16 38.4-38.4 38.4H38.4zm44.8-241.6c-19.2-9.6-25.6-35.2-16-51.2 9.6-19.2 35.2-25.6 54.4-16L256 320c19.2 9.6 25.6 35.2 16 54.4s-35.2 25.6-54.4 16l-134.4-80zm160-185.6 92.8 160c9.6 19.2 35.2 25.6 54.4 12.8s25.6-35.2 12.8-54.4l-92.8-160C297.6 64 275.2 60.8 256 70.4c-16 12.8-22.4 33.6-12.8 54.4zM473.6 40c0-22.4 16-38.4 38.4-38.4s38.4 19.2 38.4 38.4v184c0 22.4-19.2 38.4-38.4 38.4-22.4 0-38.4-19.2-38.4-38.4V40zm240 43.2c9.6-19.2 35.2-25.6 54.4-16 19.2 9.6 25.6 35.2 16 51.2l-92.8 160c-9.6 19.2-35.2 25.6-54.4 16-19.2-9.6-25.6-35.2-12.8-54.4l89.6-156.8zm188.8 160-160 92.8c-19.2 9.6-25.6 35.2-16 54.4 12.8 19.2 35.2 25.6 54.4 12.8l160-92.8c19.2-9.6 25.6-35.2 12.8-54.4-9.6-16-32-25.6-51.2-12.8zM985.6 472c22.4 0 38.4 16 38.4 38.4s-16 38.4-38.4 38.4H800c-22.4 0-38.4-19.2-38.4-38.4 0-22.4 19.2-38.4 38.4-38.4h185.6z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), na = [
  ta
];
function oa(e, t, n, l, o, r) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, na, 6);
}
const at = /* @__PURE__ */ ye(ea, [["render", oa]]), la = F("loading1"), sa = /* @__PURE__ */ h("path", {
  d: "M520.665 64.564a29.244 29.244 0 0 0-7.071-.894c-16.211 0-29.35 13.14-29.35 29.35 0 15.83 12.538 28.696 28.223 29.293v.073c.375 0 .751-.014 1.127-.014 216.493 0 389.629 173.942 389.629 390.433 0 216.496-173.136 388.827-389.63 388.827s-389.63-172.333-389.63-388.829c0-.27.01-.536.01-.804h-.01c0-16.209-13.141-29.35-29.35-29.35s-29.35 13.139-29.35 29.35c0 .055.007.11.007.164-.001.214-.007.425-.007.64 0 247.609 200.722 448.331 448.33 448.331 247.607 0 448.33-200.722 448.33-448.33-.002-245.242-196.917-444.456-441.258-448.24z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), aa = [
  sa
];
function ra(e, t, n, l, o, r) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, aa, 6);
}
const ia = /* @__PURE__ */ ye(la, [["render", ra]]), ua = F("location"), ca = /* @__PURE__ */ h("path", {
  d: "M512 971.487C259.938 971.487 52.513 764.062 52.513 512S259.938 52.513 512 52.513 971.487 259.938 971.487 512 764.062 971.487 512 971.487zm0-840.205c-210.051 0-380.718 170.667-380.718 380.718S301.95 892.718 512 892.718 892.718 722.05 892.718 512 722.05 131.282 512 131.282zm0 577.641c-107.651 0-196.923-89.272-196.923-196.923S404.349 315.077 512 315.077 708.923 404.349 708.923 512 619.651 708.923 512 708.923zm0-315.077c-65.641 0-118.154 52.513-118.154 118.154S446.36 630.154 512 630.154 630.154 577.64 630.154 512 577.64 393.846 512 393.846zm0-210.051c-21.005 0-39.385-18.38-39.385-39.385V39.385C472.615 18.379 490.995 0 512 0s39.385 18.38 39.385 39.385V144.41c0 21.005-18.38 39.385-39.385 39.385zM512 1024c-21.005 0-39.385-18.38-39.385-39.385V879.59c0-21.005 18.38-39.385 39.385-39.385s39.385 18.38 39.385 39.385v105.025c0 21.006-18.38 39.385-39.385 39.385zm472.615-472.615H879.59c-21.005 0-39.385-18.38-39.385-39.385s18.38-39.385 39.385-39.385h105.025c21.006 0 39.385 18.38 39.385 39.385s-18.38 39.385-39.385 39.385zm-840.205 0H39.385C18.379 551.385 0 533.005 0 512s18.38-39.385 39.385-39.385H144.41c21.005 0 39.385 18.38 39.385 39.385s-18.38 39.385-39.385 39.385z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), da = [
  ca
];
function fa(e, t, n, l, o, r) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, da, 6);
}
const pa = /* @__PURE__ */ ye(ua, [["render", fa]]), ma = F("location2"), ha = /* @__PURE__ */ h("path", {
  d: "m530.286 1005.714-25.6-10.971c-36.572-14.629-58.515-25.6-73.143-36.572-102.4-84.114-164.572-135.314-193.829-171.885-43.885-51.2-76.8-91.429-106.057-142.629C95.086 577.83 76.8 504.686 76.8 431.543c0-117.029 43.886-226.743 128-307.2C285.257 43.886 394.971 0 512 0s226.743 43.886 310.857 128c84.114 80.457 128 190.171 128 307.2 0 73.143-18.286 146.286-54.857 212.114-25.6 43.886-58.514 91.429-106.057 142.629-29.257 32.914-87.772 84.114-197.486 171.886 0 0-7.314 7.314-18.286 10.971l-43.885 32.914zM497.37 874.057s3.658 3.657 14.629 7.314c3.657-3.657 7.314-3.657 10.971-7.314C621.714 797.257 683.886 742.4 705.83 716.8c40.228-47.543 69.485-87.771 91.428-128 25.6-47.543 40.229-102.4 40.229-157.257 0-87.772-32.915-168.229-95.086-230.4-58.514-58.514-142.629-91.429-230.4-91.429S340.114 142.63 277.943 204.8c-62.172 62.171-95.086 142.629-95.086 230.4 0 54.857 14.629 109.714 40.229 157.257 25.6 43.886 54.857 80.457 95.085 124.343 25.6 29.257 84.115 80.457 179.2 157.257zm18.286-248.686c-102.4 0-182.857-80.457-182.857-182.857s80.457-182.857 182.857-182.857 182.857 80.457 182.857 182.857-80.457 182.857-182.857 182.857zm0-256c-40.228 0-73.143 32.915-73.143 73.143s32.915 73.143 73.143 73.143 73.143-32.914 73.143-73.143-32.914-73.143-73.143-73.143z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ga = [
  ha
];
function ya(e, t, n, l, o, r) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ga, 6);
}
const va = /* @__PURE__ */ ye(ma, [["render", ya]]);
F("locationg3");
F("lower");
F("marshalling");
const $a = F("mask-close"), ba = /* @__PURE__ */ h("path", {
  d: "M512 14.897C238.594 14.897 14.897 238.594 14.897 512S238.594 1009.103 512 1009.103 1009.103 785.406 1009.103 512 785.406 14.897 512 14.897zm207.126 646.234c16.57 16.57 16.57 41.425 0 57.995s-41.425 16.57-57.995 0L512 569.996l-149.13 149.13c-16.57 16.57-41.426 16.57-57.996 0s-16.57-41.425 0-57.995L454.004 512l-149.13-149.13c-16.57-16.57-16.57-41.426 0-57.996s41.425-16.57 57.995 0L512 454.004l149.13-149.13c16.57-16.57 41.426-16.57 57.996 0s16.57 41.425 0 57.995L569.996 512l149.13 149.13z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), wa = [
  ba
];
function ka(e, t, n, l, o, r) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, wa, 6);
}
const Ca = /* @__PURE__ */ ye($a, [["render", ka]]);
F("message");
F("microphone");
const Sa = F("minus"), Ta = /* @__PURE__ */ h("path", {
  d: "M299.52 460.8h409.6c28.16 0 51.2 23.04 51.2 51.2s-23.04 51.2-51.2 51.2h-409.6c-28.16 0-51.2-23.04-51.2-51.2s23.04-51.2 51.2-51.2z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Na = [
  Ta
];
function Da(e, t, n, l, o, r) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Na, 6);
}
const _a = /* @__PURE__ */ ye(Sa, [["render", Da]]);
F("more-s");
const Ia = F("more-x"), Ba = /* @__PURE__ */ h("path", {
  d: "M937.115 428.218c-43.442 0-80.679 37.237-80.679 80.679s37.237 80.679 80.68 80.679c43.442 0 80.678-37.237 80.678-80.679s-34.133-80.679-80.679-80.679m-428.218-52.751c-74.473 0-133.43 58.957-133.43 133.43s58.957 133.43 133.43 133.43 133.43-58.957 133.43-133.43-58.957-133.43-133.43-133.43M83.782 428.218c-43.443 0-80.679 37.237-80.679 80.679s34.133 80.679 80.679 80.679 80.679-37.237 80.679-80.679-37.237-80.679-80.68-80.679",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ma = [
  Ba
];
function La(e, t, n, l, o, r) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ma, 6);
}
const Ea = /* @__PURE__ */ ye(Ia, [["render", La]]);
F("more");
F("my");
F("my2");
const Pa = F("notice"), Aa = /* @__PURE__ */ h("path", {
  d: "M940.873 819.2h-85.334V430.933c0-192-153.6-345.6-341.333-345.6s-341.333 153.6-341.333 345.6V819.2H87.539V430.933C87.54 192 279.54 0 514.206 0s426.667 192 426.667 430.933V819.2zM514.633 1024c-68.267 0-132.267-29.867-174.934-85.333-17.066-17.067-12.8-42.667 4.267-59.734 17.067-12.8 46.933-12.8 59.733 8.534 29.867 34.133 68.267 51.2 110.934 51.2s81.066-17.067 106.666-51.2c12.8-17.067 42.667-21.334 59.734-8.534 17.066 12.8 21.333 42.667 8.533 59.734C646.899 994.133 582.899 1024 514.633 1024zm469.333-162.133h-12.8c-294.4-89.6-618.667-89.6-913.067 0-21.333 4.266-46.933-8.534-55.466-29.867-8.534-21.333 4.266-46.933 29.866-51.2 311.467-93.867 652.8-89.6 964.267 0 21.333 8.533 34.133 29.867 29.867 51.2-8.534 21.333-25.6 29.867-42.667 29.867z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), za = [
  Aa
];
function Va(e, t, n, l, o, r) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1027 1024",
    role: "presentation"
  }, za, 6);
}
const Oa = /* @__PURE__ */ ye(Pa, [["render", Va]]);
F("order");
F("people");
const Ha = F("photograph"), Ra = /* @__PURE__ */ h("path", {
  d: "M570.514 789.943c-119.954 0-219.428-99.474-219.428-219.429s99.474-219.428 219.428-219.428 219.429 99.474 219.429 219.428-99.474 219.429-219.429 219.429zm0-351.086c-73.143 0-131.657 58.514-131.657 131.657s58.514 131.657 131.657 131.657 131.657-58.514 131.657-131.657-58.514-131.657-131.657-131.657zM877.714 1024h-614.4C117.03 1024 0 906.971 0 760.686V380.343c0-146.286 117.029-263.314 263.314-263.314h32.183c0-2.926 2.926-8.778 2.926-11.703C315.977 43.886 374.49 0 438.857 0h263.314c70.218 0 128.732 49.737 143.36 117.029h32.183c146.286 0 263.315 117.028 263.315 263.314v380.343C1141.029 906.97 1024 1024 877.714 1024zm-614.4-819.2c-96.548 0-175.543 78.994-175.543 175.543v380.343c0 96.548 78.995 175.543 175.543 175.543h614.4c96.549 0 175.543-78.995 175.543-175.543V380.343c0-96.549-78.994-175.543-175.543-175.543H819.2c-32.183 0-58.514-26.331-58.514-58.514S734.354 87.77 702.17 87.77H438.857c-26.331 0-49.737 17.555-55.588 40.96-2.926 5.852-2.926 11.703-2.926 17.555 0 32.183-26.332 58.514-58.514 58.514h-58.515zm-87.771 160.914a73.143 73.143 0 1 0 146.286 0 73.143 73.143 0 1 0-146.286 0Z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Fa = [
  Ra
];
function Wa(e, t, n, l, o, r) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1141 1024",
    role: "presentation"
  }, Fa, 6);
}
const Ya = /* @__PURE__ */ ye(Ha, [["render", Wa]]);
F("play-circle-fill");
F("play-double-back");
F("play-double-forward");
F("play-start");
F("play-stop");
const ja = F("plus"), Ua = /* @__PURE__ */ h("path", {
  d: "M345.6 460.8h409.6q51.2 0 51.2 51.2t-51.2 51.2H345.6q-51.2 0-51.2-51.2t51.2-51.2zM550.4 256q51.2 0 51.2 51.2v409.6q0 51.2-51.2 51.2t-51.2-51.2V307.2q0-51.2 51.2-51.2z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ka = [
  Ua
];
function Xa(e, t, n, l, o, r) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ka, 6);
}
const qa = /* @__PURE__ */ ye(ja, [["render", Xa]]);
F("poweroff-circle-fill");
const Za = F("rect-down"), Ga = /* @__PURE__ */ h("path", {
  d: "M515.072 778.24c-14.336 0-28.672-5.632-39.936-16.384L69.12 356.864c-22.016-22.016-22.016-57.856 0-79.872s57.856-22.016 79.872 0L515.584 642.56 880.64 275.968c22.016-22.016 57.856-22.016 79.872 0s22.016 57.856 0 79.872L555.008 762.368c-10.752 10.752-25.6 15.872-39.936 15.872z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ja = [
  Ga
];
function Qa(e, t, n, l, o, r) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ja, 6);
}
const xa = /* @__PURE__ */ ye(Za, [["render", Qa]]);
F("rect-left");
F("rect-right");
const er = F("rect-up"), tr = /* @__PURE__ */ h("path", {
  d: "M920.576 778.24c-14.336 0-28.672-5.632-39.936-16.384L515.072 395.264 148.48 760.832c-22.016 22.016-57.856 22.016-79.872 0s-22.016-57.856 0-79.872l406.528-405.504c22.016-22.016 57.856-22.016 79.872 0l405.504 406.528c22.016 22.016 22.016 57.856 0 79.872-11.264 11.264-25.6 16.384-39.936 16.384z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), nr = [
  tr
];
function or(e, t, n, l, o, r) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, nr, 6);
}
const lr = /* @__PURE__ */ ye(er, [["render", or]]);
F("refresh");
const sr = F("refresh2"), ar = /* @__PURE__ */ h("path", {
  d: "M771.938 315.077h199.55L958.358 469.99 758.81 364.964c-13.128-7.877-18.38-23.63-10.502-36.759 2.625-7.877 13.128-13.128 23.63-13.128zm-535.63 393.846H44.636L57.764 554.01l191.672 105.026c13.128 7.877 18.38 23.63 10.502 36.759-5.25 7.877-15.753 13.128-23.63 13.128zM509.374 1024C257.313 1024 44.636 845.456 5.251 596.02 0 575.016 15.754 556.637 36.76 551.386c21.005-2.626 42.01 10.502 44.636 31.507 34.133 210.052 215.302 362.339 427.98 362.339 191.671 0 362.338-128.657 417.476-312.452 5.252-21.005 28.882-34.133 49.887-26.256 21.006 5.251 34.134 28.882 26.257 49.887C937.354 871.713 735.179 1024 509.375 1024zm467.364-551.385c-18.379 0-36.759-13.128-39.384-34.133C903.22 231.056 722.05 78.77 509.374 78.77c-191.671 0-362.338 128.657-414.85 312.452-5.252 21.005-28.883 34.133-49.888 26.256-21.005-5.251-34.133-28.882-26.257-49.887C81.395 152.287 283.57 0 509.374 0c252.062 0 464.739 178.544 504.123 427.98 2.626 21.005-10.502 42.01-31.507 44.635h-5.252z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), rr = [
  ar
];
function ir(e, t, n, l, o, r) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, rr, 6);
}
const ur = /* @__PURE__ */ ye(sr, [["render", ir]]), cr = F("retweet"), dr = /* @__PURE__ */ h("path", {
  d: "M136 552h63.6c4.4 0 8-3.6 8-8V288.7h528.6v72.6c0 1.9.6 3.7 1.8 5.2 2.9 3.6 8.1 4.3 11.7 1.4L893 255.4c4.3-5 3.6-10.3 0-13.2L749.7 129.8c-1.5-1.2-3.3-1.8-5.2-1.8-4.6 0-8.4 3.8-8.4 8.4V209H199.7c-39.5 0-71.7 32.2-71.7 71.8V544c0 4.4 3.6 8 8 8zm752-80h-63.6c-4.4 0-8 3.6-8 8v255.3H287.8v-72.6c0-1.9-.6-3.7-1.8-5.2-2.9-3.6-8.1-4.3-11.7-1.4L131 768.6c-4.3 5-3.6 10.3 0 13.2l143.3 112.4c1.5 1.2 3.3 1.8 5.2 1.8 4.6 0 8.4-3.8 8.4-8.4V815h536.6c39.5 0 71.7-32.2 71.7-71.8V480c-.2-4.4-3.8-8-8.2-8z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), fr = [
  dr
];
function pr(e, t, n, l, o, r) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, fr, 6);
}
const mr = /* @__PURE__ */ ye(cr, [["render", pr]]), hr = F("right"), gr = /* @__PURE__ */ h("path", {
  d: "M381.262 1005.566c-16.132 21.51-45.708 24.198-67.217 8.066-21.51-16.132-24.198-45.708-8.066-67.217C413.526 806.604 518.384 666.792 625.932 529.67c8.066-10.755 8.066-24.198 0-34.953C518.384 354.906 413.526 215.094 305.979 77.972c-16.132-21.51-10.755-51.085 8.066-67.217C335.555-5.377 365.13 0 381.262 18.82c107.547 142.5 212.405 282.311 319.953 419.434 34.952 43.019 34.952 104.858 0 150.566-107.548 139.811-212.406 279.622-319.953 416.745",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), yr = [
  gr
];
function vr(e, t, n, l, o, r) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, yr, 6);
}
const ln = /* @__PURE__ */ ye(hr, [["render", vr]]);
F("s-follow");
F("scan");
F("scan2");
F("screen-little");
F("search");
F("search2");
const $r = F("service"), br = /* @__PURE__ */ h("path", {
  d: "M1024 657.723H905.846v-126.03c0-228.431-177.23-413.54-393.846-413.54s-393.846 185.109-393.846 413.54v126.03H0v-126.03C0 236.307 228.43 0 512 0s512 236.308 512 531.692v126.031zM196.923 866.462C86.646 866.462 0 779.815 0 669.538s86.646-196.923 196.923-196.923 196.923 86.647 196.923 196.923S307.2 866.462 196.923 866.462zm0-275.693c-43.323 0-78.77 35.446-78.77 78.77s35.447 78.769 78.77 78.769 78.77-35.446 78.77-78.77-35.447-78.769-78.77-78.769zm630.154 275.693c-110.277 0-196.923-86.647-196.923-196.924S716.8 472.615 827.077 472.615 1024 559.262 1024 669.538s-86.646 196.924-196.923 196.924zm0-275.693c-43.323 0-78.77 35.446-78.77 78.77s35.447 78.769 78.77 78.769 78.77-35.446 78.77-78.77-35.447-78.769-78.77-78.769zm-149.662 429.293c-23.63 0-47.261-15.754-55.138-43.324-7.877-31.507 7.877-63.015 39.385-74.83 102.4-31.508 189.046-102.4 236.307-196.923 15.754-27.57 51.2-39.385 78.77-23.631s39.384 51.2 23.63 78.77c-63.015 122.091-177.23 216.614-307.2 256-3.938 3.938-11.815 3.938-15.754 3.938z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), wr = [
  br
];
function kr(e, t, n, l, o, r) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, wr, 6);
}
const Cr = /* @__PURE__ */ ye($r, [["render", kr]]);
F("setting");
F("share-n");
F("share");
F("share1");
F("shop");
F("shop3");
const Sr = F("star-fill-n"), Tr = /* @__PURE__ */ h("path", {
  d: "M1047.135 361.244 722.87 312.89 577.802 22.756c-2.844-8.534-11.378-14.223-19.911-17.067-19.911-8.533-45.511-2.845-54.045 17.067L358.78 312.889 34.513 358.4c-8.533 0-17.067 5.689-22.755 11.378-17.067 17.066-14.223 42.666 0 56.889l233.244 227.555-54.044 321.422c-2.845 8.534 0 17.067 2.844 25.6 11.378 19.912 34.133 28.445 54.044 17.067L537.98 867.556l290.133 150.755c8.533 2.845 17.067 5.689 25.6 2.845 22.756-2.845 36.978-25.6 34.133-45.512l-54.044-321.422 233.244-227.555c5.69-5.69 11.378-14.223 11.378-22.756 5.69-19.911-8.533-39.822-31.289-42.667z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Nr = [
  Tr
];
function Dr(e, t, n, l, o, r) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1081 1024",
    role: "presentation"
  }, Nr, 6);
}
const Cn = /* @__PURE__ */ ye(Sr, [["render", Dr]]);
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
function Mr(e, t, n, l, o, r) {
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
function zr(e, t, n, l, o, r) {
  return c(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ar, 6);
}
const xn = /* @__PURE__ */ ye(Er, [["render", zr]]), Vr = F("top"), Or = /* @__PURE__ */ h("path", {
  d: "M136.533 540.444c-11.377 0-25.6-5.688-34.133-17.066-14.222-19.911-11.378-45.511 8.533-59.734L477.867 179.2c19.91-14.222 45.51-11.378 59.733 8.533s11.378 45.511-8.533 59.734L162.133 531.91c-5.689 5.689-14.222 8.533-25.6 8.533zm745.245 0c-8.534 0-17.067-2.844-25.6-8.533L489.244 247.467c-19.91-14.223-22.755-42.667-8.533-59.734 14.222-19.91 42.667-22.755 59.733-8.533l366.934 284.444c19.91 14.223 22.755 42.667 8.533 59.734-8.533 11.378-19.911 17.066-34.133 17.066zM512 1024c-22.756 0-42.667-19.911-42.667-42.667v-768c0-22.755 19.911-42.666 42.667-42.666s42.667 19.91 42.667 42.666v768c0 22.756-19.911 42.667-42.667 42.667zM884.622 85.333h-742.4c-22.755 0-42.666-19.91-42.666-42.666S119.466 0 142.222 0h742.4c22.756 0 42.667 19.911 42.667 42.667s-19.911 42.666-42.667 42.666z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Hr = [
  Or
];
function Rr(e, t, n, l, o, r) {
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
function Ur(e, t, n, l, o, r) {
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
function Gr(e, t, n, l, o, r) {
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
const Qr = { class: "nut-button__wrap" }, qe = /* @__PURE__ */ Pe({
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
    const n = e, l = t, o = (a) => {
      !n.loading && !n.disabled && l("click", a);
    }, r = D(() => {
      const a = "nut-button";
      return {
        [a]: !0,
        [`${a}--${n.type}`]: n.type,
        [`${a}--${n.size}`]: n.size,
        [`${a}--${n.shape}`]: n.shape,
        [`${a}--plain`]: n.plain,
        [`${a}--block`]: n.block,
        [`${a}--disabled`]: n.disabled,
        [`${a}--loading`]: n.loading
      };
    }), s = D(() => {
      let a = {};
      return n.color && (a = {
        color: n.plain ? n.color : "#fff",
        background: n.plain ? "#fff" : `border-box ${n.color}`
      }, n.color.includes("gradient") ? a.borderColor = "transparent" : a.borderColor = n.color), a;
    });
    return (a, i) => (c(), f("view", {
      class: L(r.value),
      style: A(s.value),
      onClick: o
    }, [
      h("view", Qr, [
        a.loading ? (c(), ee(Be(at), {
          key: 0,
          class: "nut-icon-loading"
        })) : N("", !0),
        a.$slots.icon && !a.loading ? I(a.$slots, "icon", { key: 1 }) : N("", !0),
        a.$slots.default ? (c(), f("view", {
          key: 2,
          class: L({ "nut-button__text": a.$slots.icon || a.loading })
        }, [
          I(a.$slots, "default")
        ], 2)) : N("", !0)
      ])
    ], 6));
  }
}), Xt = (e) => {
  const t = ce([]), n = ce([]);
  return {
    children: t,
    linkChildren: (o) => {
      Ee(e, Z({
        unlink: (a) => {
          if (a.proxy) {
            let i = n.indexOf(a);
            i > -1 && n.splice(i, 1);
            let p = t.indexOf(a.proxy);
            i > -1 && t.splice(p, 1);
          }
        },
        link: (a) => {
          a.proxy && (n.push(a), t.push(a.proxy));
        },
        children: t,
        internalChildren: n
      }, o));
    }
  };
}, sn = (e) => {
  const t = Le(e, null);
  if (t) {
    const n = je(), { link: l, unlink: o } = t;
    l(n), Xe(() => {
      o(n);
    });
  }
  return { parent: t };
}, Re = (e) => {
  const t = e;
  return t.install = (n) => {
    t.name && n.component(t.name, t);
  }, t;
};
Re(qe);
const xr = (e) => e.replace(/-./g, (t) => t[1].toUpperCase());
function j(e) {
  return {
    componentName: "nut-" + e,
    create: function(n) {
      return n.name = "Nut" + xr("-" + e), n.install = (l) => {
        l.component(n.name, n);
      }, Pe(n);
    }
  };
}
const ft = (e, t) => e ? be(e, t) : "", an = (e, t) => {
  let n = document.body;
  const l = e.teleport || "body";
  l != "body" && (rl(l) ? n = document.querySelector(l) : n = e.teleport);
  const o = document.createElement("view"), r = t.name ? t.name + "-" : "", s = e.id || (/* @__PURE__ */ new Date()).getTime();
  o.id = r + s;
  let a = {};
  Pt(t.wrapper) ? a = t.wrapper(n, o) : a = t.wrapper;
  const i = Jo(a, e), p = t.components;
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
const Ne = (e) => {
  if (e !== void 0)
    return isNaN(Number(e)) ? String(e) : `${e}px`;
}, { componentName: ei, create: ti } = j("cell"), ni = ti({
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
      const a = ei;
      return {
        [a]: !0,
        [`${a}--clickable`]: e.isLink || e.to,
        [`${a}--center`]: e.center,
        [`${a}--large`]: e.size === "large"
      };
    }), l = rn(), o = D(() => ({
      borderRadius: Ne(e.roundRadius)
    })), r = D(() => ({
      textAlign: e.descTextAlign
    }));
    return {
      handleClick: (a) => {
        t("click", a), e.to && l ? l[e.replace ? "replace" : "push"](e.to) : e.url && (e.replace ? location.replace(e.url) : location.href = e.url);
      },
      classes: n,
      baseStyle: o,
      descStyle: r
    };
  }
}), q = (e, t) => {
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
function ri(e, t, n, l, o, r) {
  const s = W("Right");
  return c(), f("view", {
    class: L(e.classes),
    style: A(e.baseStyle),
    onClick: t[0] || (t[0] = (...a) => e.handleClick && e.handleClick(...a))
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
const eo = /* @__PURE__ */ q(ni, [["render", ri]]), { create: ii } = j("cell-group"), ui = ii({
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
function mi(e, t, n, l, o, r) {
  return c(), f("view", ci, [
    e.$slots.title ? I(e.$slots, "title", { key: 0 }) : e.title ? (c(), f("view", di, E(e.title), 1)) : N("", !0),
    e.$slots.desc ? I(e.$slots, "desc", { key: 2 }) : e.desc ? (c(), f("view", fi, E(e.desc), 1)) : N("", !0),
    h("view", pi, [
      I(e.$slots, "default")
    ])
  ]);
}
const to = /* @__PURE__ */ q(ui, [["render", mi]]);
let mt = 0;
const Sn = "nut-overflow-hidden", hi = (e) => [() => {
  if (e())
    try {
      !mt && wn.classList.add(Sn), mt++;
    } catch (l) {
      console.warn("[NutUI] <useLockScroll>", l);
    }
}, () => {
  if (e() && mt)
    try {
      mt--, !mt && wn.classList.remove(Sn);
    } catch (l) {
      console.warn("[NutUI] <unlock>", l);
    }
}], { componentName: gi, create: yi } = j("overlay"), vi = yi({
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
    })), r = D(() => Z({
      transitionDuration: `${e.duration}s`,
      zIndex: e.zIndex
    }, e.overlayStyle));
    return bt(() => {
      e.visible ? n() : l();
    }), { classes: o, style: r, onClick: (a) => {
      t("click", a), e.closeOnClickOverlay && t("update:visible", !1);
    } };
  }
});
function $i(e, t, n, l, o, r) {
  return c(), ee(Qt, { name: "overlay-fade" }, {
    default: ne(() => [
      Ce(h("view", {
        class: L(e.classes),
        style: A(e.style),
        onClick: t[0] || (t[0] = _e((...s) => e.onClick && e.onClick(...s), ["stop"]))
      }, [
        I(e.$slots, "default")
      ], 6), [
        [De, e.visible]
      ])
    ]),
    _: 3
  });
}
const Tt = /* @__PURE__ */ q(vi, [["render", $i]]), Nt = {
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
}, { componentName: bi, create: wi } = j("popup"), no = 2e3;
let Tn = no;
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
    })), r = D(() => Z({
      zIndex: l.zIndex,
      transitionDuration: `${e.duration}s`
    }, e.style)), s = D(() => e.transition ? e.transition : `nut-popup-slide-${e.position}`), a = () => {
      n || (n = !0, e.zIndex !== no && (Tn = Number(e.zIndex)), t("update:visible", !0), l.zIndex = ++Tn, e.destroyOnClose && (l.showSlot = !0), t("open"));
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
    }, g = ($) => {
      t("opened", $);
    }, k = ($) => {
      t("closed", $);
    };
    return Q(
      () => e.visible,
      () => {
        e.visible && !n && a(), !e.visible && n && i();
      }
    ), bt(() => {
      l.closed = e.closeable;
    }), de(Z({}, he(l)), {
      popStyle: r,
      transitionName: s,
      classes: o,
      onClick: p,
      onClickCloseIcon: d,
      onClickOverlay: v,
      onOpened: g,
      onClosed: k
    });
  }
});
function Ci(e, t, n, l, o, r) {
  const s = W("nut-overlay"), a = W("Close");
  return c(), ee(Hn, {
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
        Ce(h("view", {
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
              oe(a, { height: "12px" })
            ])
          ], 2)) : N("", !0)
        ], 6), [
          [De, e.visible]
        ])
      ]),
      _: 3
    }, 8, ["name", "onAfterEnter", "onAfterLeave"])
  ], 8, ["to", "disabled"]);
}
const Ae = /* @__PURE__ */ q(ki, [["render", Ci]]), Si = (e) => ({
  props: {
    theme: { type: String, default: "" },
    themeVars: { type: Object, default: {} },
    tag: { type: String, default: e }
  },
  setup(t, { slots: n }) {
    const l = (a) => {
      if (!/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(a))
        return "";
      a = a.toLowerCase(), a.length === 4 && (a = "#" + a.slice(1).split("").map((d) => d + d).join(""));
      const p = [];
      for (let d = 1; d < 7; d += 2)
        p.push(parseInt("0x" + a.slice(d, d + 2)));
      return p.join(",");
    }, o = (a) => (a = a.replace(a.charAt(0), a.charAt(0).toLocaleLowerCase()), a.replace(/([a-z])([A-Z])/g, (i, p, d) => p + "-" + d.toLowerCase())), r = (a) => {
      if (!a)
        return;
      const i = {}, p = a == null ? void 0 : a.primaryColor;
      if (p) {
        const d = l(p);
        i["--nut-address-region-tab-line"] = `linear-gradient(90deg, ${p} 0%, rgba(${d}, 0.15) 100%)`, i["--nut-tabs-horizontal-tab-line-color"] = `linear-gradient(90deg, ${p} 0%, rgba(${d}, 0.15) 100%)`, i["--nut-tabs-vertical-tab-line-color"] = `linear-gradient(180deg, ${p} 0%, rgba(${d}, 0.15) 100%)`;
      }
      return Object.keys(a).forEach((d) => {
        i[`--nut-${o(d)}`] = a[d];
      }), i;
    }, s = D(() => r(t.themeVars));
    return () => {
      var a;
      return be(
        t.tag,
        {
          class: `nut-theme-${t.theme}`,
          style: s.value
        },
        (a = n.default) == null ? void 0 : a.call(n)
      );
    };
  }
}), { create: Ti } = j("config-provider"), Ni = Ti(Si("div")), { componentName: Di, create: _i } = j("image"), Ii = _i({
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
    Image: Hs,
    ImageError: Ps
  },
  emits: ["click", "load", "error"],
  setup(e, { emit: t }) {
    const n = ce({
      loading: !0,
      isError: !1,
      slotLoding: lt().loading,
      slotError: lt().error
    }), l = D(() => {
      const k = Di;
      return {
        [k]: !0,
        [`${k}-round`]: e.round
      };
    }), o = z(null), r = z(!1), s = z(null), a = () => {
      const k = {
        threshold: [0],
        rootMargin: "0px"
      };
      o.value = new IntersectionObserver(($) => {
        $.forEach((w) => {
          w.isIntersecting && (r.value = !0, o.value.disconnect());
        });
      }, k), s.value && o.value.observe(s.value);
    };
    ve(() => {
      e.lazyLoad && a();
    }), xt(() => {
      o.value && o.value.disconnect();
    });
    const i = D(() => {
      let k = {};
      return e.width && (k.width = Ne(e.width)), e.height && (k.height = Ne(e.height)), e.radius !== void 0 && e.radius !== null && (k.overflow = "hidden", k.borderRadius = Ne(e.radius)), k;
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
    }, g = (k) => {
      t("click", k);
    };
    return de(Z({}, he(n)), { imageClick: g, classes: l, styles: p, stylebox: i, error: v, load: d, show: r, imgRef: s });
  }
}), Bi = ["src", "date-src", "alt"], Mi = {
  key: 0,
  class: "nut-img-loading"
}, Li = {
  key: 1,
  class: "nut-img-error"
};
function Ei(e, t, n, l, o, r) {
  const s = W("Image"), a = W("ImageError");
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
      e.slotError ? N("", !0) : (c(), ee(a, {
        key: 0,
        width: "16px",
        height: "20px",
        name: "imageError"
      })),
      I(e.$slots, "error")
    ])) : N("", !0)
  ], 6);
}
const Pi = /* @__PURE__ */ q(Ii, [["render", Ei]]), { create: Ai } = j("layout"), oo = Ai({});
Re(oo);
const lo = Symbol("nut-layout"), Nn = "nut-col", so = /* @__PURE__ */ Pe({
  name: "NutCol",
  __name: "col",
  props: {
    span: { default: 24 },
    offset: { default: 0 }
  },
  setup(e) {
    const t = e, n = Le(lo), l = D(() => ({
      [Nn]: !0,
      [Nn + "-gutter"]: n,
      ["nut-col-" + t.span]: !0,
      ["nut-col-offset-" + t.offset]: !0
    })), o = D(() => ({
      paddingLeft: n / 2 + "px",
      paddingRight: n / 2 + "px"
    }));
    return (r, s) => (c(), f("view", {
      class: L(l.value),
      style: A(o.value)
    }, [
      I(r.$slots, "default")
    ], 6));
  }
});
Re(so);
const zi = "nut-row", ao = /* @__PURE__ */ Pe({
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
    Ee(lo, t.gutter);
    const n = (o, r) => o ? r ? `nut-row-${o}-${r}` : "" : `nut-row-${r}`, l = D(() => [
      zi,
      n("", t.type),
      n("justify", t.justify),
      n("align", t.align),
      n("flex", t.flexWrap)
    ]);
    return (o, r) => (c(), f("view", {
      class: L(l.value)
    }, [
      I(o.$slots, "default")
    ], 2));
  }
});
Re(ao);
const Vi = /scroll|auto|overlay/i, ro = window;
function Oi(e) {
  return e.tagName !== "HTML" && e.tagName !== "BODY" && e.nodeType === 1;
}
function qt(e, t = ro) {
  let n = e;
  for (; n && n !== t && Oi(n); ) {
    const { overflowY: l } = window.getComputedStyle(n);
    if (Vi.test(l))
      return n;
    n = n.parentNode;
  }
  return t;
}
function io(e, t = ro) {
  const n = z();
  return ve(() => {
    e.value && (n.value = qt(e.value, t));
  }), n;
}
function Hi(e) {
  return typeof window != "undefined" && e === window;
}
const Ye = (e) => {
  const t = Be(e);
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
}, { create: Ri } = j("sticky"), Fi = Ri({
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
    }), r = D(() => e.position === "top" ? Number(e.top) : Number(e.bottom)), s = D(() => o.fixed ? { height: `${o.height}px` } : {}), a = D(() => o.fixed ? {
      [e.position]: `${r.value}px`,
      height: `${o.height}px`,
      width: `${o.width}px`,
      transform: o.transform ? `translate3d(0, ${o.transform}px, 0)` : void 0,
      position: o.fixed ? "fixed" : void 0,
      zIndex: Number(e.zIndex)
    } : {}), i = () => {
      const p = e.container;
      if (!n.value && !p)
        return;
      const d = Ye(n), v = l.value, g = Ye(v), k = Ye(p);
      o.height = d.height, o.width = d.width;
      const $ = () => {
        let u = !1;
        if (e.position === "top")
          u = p ? r.value > d.top && k.bottom > 0 : r.value > d.top;
        else {
          const y = document.documentElement.clientHeight;
          u = p ? k.bottom > 0 && y - r.value - g.height > k.top : y - r.value < d.bottom;
        }
        return u;
      }, w = () => {
        if (p)
          if (e.position === "top") {
            const u = k.bottom - r.value - g.height;
            return u < 0 ? u : 0;
          } else {
            const u = document.documentElement.clientHeight, y = k.bottom - (u - r.value);
            return y < 0 ? y : 0;
          }
        return 0;
      };
      o.transform = w(), o.fixed = $();
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
    }), { rootRef: n, rootStyle: s, stickyRef: l, stickyStyle: a };
  }
});
function Wi(e, t, n, l, o, r) {
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
const uo = /* @__PURE__ */ q(Fi, [["render", Wi]]), co = /* @__PURE__ */ Pe({
  name: "NutDivider",
  __name: "divider",
  props: {
    contentPosition: { default: "center" },
    dashed: { type: Boolean, default: !1 },
    hairline: { type: Boolean, default: !0 },
    direction: { default: "horizontal" }
  },
  setup(e) {
    const t = e, n = lt(), l = D(() => {
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
    return (o, r) => (c(), f("view", {
      class: L(l.value)
    }, [
      o.direction === "horizontal" ? I(o.$slots, "default", { key: 0 }) : N("", !0)
    ], 2));
  }
});
Re(co);
function Yi(e, t) {
  const n = [], l = (o) => {
    Array.isArray(o) && o.forEach((r) => {
      var s;
      if (xo(r)) {
        if (t) {
          if (r.type && r.type.name === t) {
            n.push(r);
            return;
          }
        } else
          n.push(r);
        (s = r.component) != null && s.subTree && l(r.component.subTree.children), r.children && l(r.children);
      }
    });
  };
  return l(e), n;
}
function ji(e, t, n) {
  const l = Yi(e.subTree.children, n);
  t.sort((o, r) => l.indexOf(o.vnode) - l.indexOf(r.vnode));
}
function Ui(e, t) {
  const n = Qo([]), l = je(), o = (a) => {
    a.proxy && (n.push($n(a)), ji(l, n, t));
  }, r = (a) => {
    n.splice(n.indexOf($n(a)), 1);
  }, s = Object.assign;
  return (a) => (Ee(
    e,
    s(
      {
        add: o,
        remove: r,
        internalChildren: n
      },
      a
    )
  ), {
    internalChildren: n
  });
}
const { componentName: Ki } = j("grid"), fo = Symbol("grid"), Xi = {
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
    Ui(fo, "NutGridItem")({ props: e });
    const n = D(() => {
      const o = Ki;
      return {
        [o]: !0,
        [`${o}--border`]: e.border && !e.gutter
      };
    }), l = D(() => {
      const o = {};
      return e.gutter && (o.paddingLeft = Ne(e.gutter)), o;
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
}, { create: Zi } = j("grid"), Gi = Zi(qi);
function Ji(e) {
  const t = Le(e, null);
  if (t) {
    const n = je(), { add: l, remove: o, internalChildren: r } = t;
    l(n), Xe(() => o(n));
    const s = D(() => r.indexOf(n));
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
const { create: Qi, componentName: Dn } = j("grid-item"), xi = Qi({
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
    const n = Ji(fo);
    if (!n.parent)
      return {};
    const l = n.index, o = n.parent.props, r = D(() => ({
      [Dn]: !0
    })), s = D(() => {
      const d = {
        flexBasis: `${100 / +o.columnNum}%`
      };
      return o.square ? d.paddingTop = `${100 / +o.columnNum}%` : o.gutter && (d.paddingRight = Ne(o.gutter), l.value >= +o.columnNum && (d.marginTop = Ne(o.gutter))), d;
    }), a = D(() => {
      const d = `${Dn}__content`;
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
      rootClass: r,
      rootStyle: s,
      contentClass: a,
      handleClick: (d) => {
        t("click", d), e.to && i ? i[e.replace ? "replace" : "push"](e.to) : e.url && (e.replace ? location.replace(e.url) : location.href = e.url);
      }
    };
  }
}), eu = { class: "nut-grid-item__text" };
function tu(e, t, n, l, o, r) {
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
const nu = /* @__PURE__ */ q(xi, [["render", tu]]), { create: ou, componentName: st } = j("space"), lu = ou({
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
      const g = `${n(Array.isArray(e.gutter) ? e.gutter[0] : e.gutter)}`, k = `${n(Array.isArray(e.gutter) ? e.gutter[1] : e.gutter)}`;
      return d ? e.wrap ? { marginBottom: k } : {} : (e.direction === "horizontal" && (v.marginRight = g), (e.direction === "vertical" || e.wrap) && (v.marginBottom = k), v);
    }, o = (d = []) => {
      const v = [];
      return d.forEach((g) => {
        Array.isArray(g) ? v.push(...g) : g.type === x ? v.push(...o(g.children)) : v.push(g);
      }), v.filter(
        (g) => {
          var k;
          return !(g && (g.type === el || g.type === x && ((k = g.children) == null ? void 0 : k.length) === 0 || g.type === tl && g.children.trim() === ""));
        }
      );
    }, { direction: r, wrap: s, fill: a, justify: i, align: p } = e;
    return () => {
      var g;
      const d = o((g = t.default) == null ? void 0 : g.call(t)), v = () => d.map((k, $) => be(
        "div",
        {
          class: `${st}-item`,
          style: l($ === d.length - 1)
        },
        k
      ));
      return be(
        "div",
        {
          class: [
            st,
            r && `${st}-${r}`,
            p && `${st}-align-${p}`,
            i && `${st}-justify-${i}`,
            s && `${st}-wrap`,
            a && `${st}-fill`
          ]
        },
        v()
      );
    };
  }
}), { componentName: su, create: au } = j("navbar"), ru = au({
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
    const { border: n, fixed: l, safeAreaInsetTop: o, placeholder: r } = he(e), s = z("auto"), a = z(), i = D(() => {
      const w = su;
      return {
        [w]: !0,
        [`${w}--border`]: n.value,
        [`${w}--fixed`]: l.value,
        [`${w}--safe-area-inset-top`]: o.value
      };
    }), p = D(() => l.value && r.value ? {
      height: s.value
    } : {}), d = () => {
      if (a.value) {
        const w = a.value.getBoundingClientRect();
        s.value = `${w.height}px`;
      }
    };
    return ve(() => {
      l.value && r.value && Se(() => {
        d();
      });
    }), {
      navbarRef: a,
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
function du(e, t, n, l, o, r) {
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
        onClick: t[0] || (t[0] = (...a) => e.handleLeft && e.handleLeft(...a))
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
          onClick: t[1] || (t[1] = (...a) => e.handleCenter && e.handleCenter(...a))
        }, E(e.title), 1)) : N("", !0),
        e.titleIcon ? (c(), f("view", {
          key: 1,
          class: "icon",
          onClick: t[3] || (t[3] = (...a) => e.handleCenterIcon && e.handleCenterIcon(...a))
        }, [
          I(e.$slots, "title-icon", {
            onClick: t[2] || (t[2] = (...a) => e.handleCenterIcon && e.handleCenterIcon(...a))
          })
        ])) : N("", !0),
        I(e.$slots, "content")
      ]),
      h("view", {
        class: "nut-navbar__right",
        onClick: t[4] || (t[4] = (...a) => e.handleRight && e.handleRight(...a))
      }, [
        e.desc ? (c(), f("view", cu, E(e.desc), 1)) : N("", !0),
        I(e.$slots, "right")
      ])
    ], 6)
  ], 4);
}
const fu = /* @__PURE__ */ q(ru, [["render", du]]), ke = (e = "") => (t, ...n) => {
  e = e.toLocaleLowerCase();
  const l = Xn.languages();
  let o = t;
  e && e.startsWith("nut") && (o = `${e.slice(3)}.${t}`);
  const r = Ut(l, o) || Ut(l, t);
  return Pt(r) ? r(...n) : r;
}, { create: pu } = j("fixed-nav"), mu = "NutFixedNav", hu = pu({
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
    const n = ke(mu), l = D(() => ({
      ["nut-fixed-nav"]: !0,
      active: e.visible,
      [e.type]: !0
    })), o = z(-1);
    return { classes: l, updateValue: (a = !e.visible) => {
      t("update:visible", a);
    }, selected: (a, i) => {
      t("selected", {
        item: a,
        event: i
      }), o.value = a.id;
    }, translate: n, current: o };
  }
}), gu = { class: "nut-fixed-nav__list" }, yu = ["onClick"], vu = ["src"], $u = { class: "span" }, bu = {
  key: 0,
  class: "b"
}, wu = { class: "text" };
function ku(e, t, n, l, o, r) {
  const s = W("nut-overlay"), a = W("Left");
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
        oe(a, { color: "#fff" }),
        h("view", wu, E(e.visible ? e.activeText || e.translate("activeText") : e.unActiveText || e.translate("unActiveText")), 1)
      ])
    ])
  ], 6);
}
const Cu = /* @__PURE__ */ q(hu, [["render", ku]]), po = Symbol("nut-menu"), { componentName: Su, create: Tu } = j("menu"), Nu = Tu({
  components: {
    RectUp: lr,
    RectDown: xa
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
    const t = z(), n = z(0), l = z(!1), { children: o, linkChildren: r } = Xt(po), s = D(() => o.some((k) => k.state.showWrapper)), a = D(() => ({
      [Su]: !0,
      "scroll-fixed": l.value
    })), i = () => {
      if (t.value) {
        const k = Ye(t);
        e.direction === "down" ? n.value = k.bottom : n.value = window.innerHeight - k.top;
      }
    };
    r({ props: e, offset: n });
    const p = (k) => {
      o.forEach(($, w) => {
        w === k ? (i(), $.toggle()) : $.state.showPopup && $.toggle(!1, { immediate: !0 });
      });
    }, d = (k) => Math.max(0, "scrollTop" in k ? k.scrollTop : k.pageYOffset), v = () => {
      const { scrollFixed: k } = e, $ = d(window);
      l.value = $ > (typeof k == "boolean" ? 30 : Number(k));
    }, g = (k) => {
      let $ = "";
      const { titleClass: w } = e;
      return k && ($ += "active"), w && ($ += ` ${w}`), $;
    };
    return ve(() => {
      const { scrollFixed: k } = e;
      k && window.addEventListener("scroll", v);
    }), Xe(() => {
      const { scrollFixed: k } = e;
      k && window.removeEventListener("scroll", v);
    }), {
      toggleItem: p,
      children: o,
      opened: s,
      classes: a,
      barRef: t,
      getClasses: g
    };
  }
}), Du = ["onClick"], _u = { class: "nut-menu__title-text" }, Iu = { class: "nut-menu__title-icon" };
function Bu(e, t, n, l, o, r) {
  const s = W("RectUp"), a = W("RectDown");
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
              e.direction === "up" ? (c(), ee(s, { key: 0 })) : (c(), ee(a, { key: 1 }))
            ])
          ])
        ], 2)
      ], 14, Du))), 128))
    ], 2),
    I(e.$slots, "default")
  ], 2);
}
const Mu = /* @__PURE__ */ q(Nu, [["render", Bu]]), { create: Lu } = j("menu-item"), Eu = Lu({
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
    Check: qn
  },
  emits: ["update:modelValue", "change", "open", "close"],
  setup(e, { emit: t }) {
    const n = ce({
      showPopup: !1,
      showWrapper: !1
    }), { parent: l } = sn(po), o = D(() => l.props.direction === "down" ? {
      top: l.offset.value + "px"
    } : {
      bottom: l.offset.value + "px"
    }), r = D(() => {
      const v = { height: l.offset.value + "px" };
      return l.props.direction === "down" ? de(Z({}, v), { top: "0px" }) : de(Z({}, v), { bottom: "0px" });
    });
    return {
      style: o,
      placeholderElementStyle: r,
      renderTitle: () => {
        var g;
        if (e.title)
          return e.title;
        const v = (g = e.options) == null ? void 0 : g.find((k) => k.value === e.modelValue);
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
function zu(e, t, n, l, o, r) {
  const s = W("Check"), a = W("nut-popup");
  return Ce((c(), f("view", {
    class: "nut-menu-item",
    style: A(e.style)
  }, [
    Ce(h("div", {
      class: "nut-menu-item-placeholder-element",
      style: A(e.placeholderElementStyle),
      onClick: t[0] || (t[0] = (...i) => e.handleClickOutside && e.handleClickOutside(...i))
    }, null, 4), [
      [De, e.state.showPopup]
    ]),
    oe(a, wt(e.$attrs, {
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
    [De, e.state.showWrapper]
  ]);
}
const Vu = /* @__PURE__ */ q(Eu, [["render", zu]]), mo = Symbol("nut-tabbar"), { create: Ou } = j("tabbar"), Hu = Ou({
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
    const { bottom: n, placeholder: l } = he(e), o = z(), r = ce({
      val: e.modelValue,
      children: []
    }), s = z(null);
    function a(p, d) {
      t("update:modelValue", d), i.modelValue = d, t("tabSwitch", i.children[p], d);
    }
    const i = ce({
      children: r.children,
      modelValue: r.val,
      unactiveColor: e.unactiveColor,
      activeColor: e.activeColor,
      changeIndex: a
    });
    return Ee(mo, i), Q(
      () => e.modelValue,
      (p) => {
        i.modelValue = p;
      }
    ), ve(() => {
      n.value && l.value && Se(() => {
        var p;
        o.value = (p = s == null ? void 0 : s.value) == null ? void 0 : p.getBoundingClientRect().height;
      });
    }), {
      changeIndex: a,
      nutTabbar: s,
      height: o
    };
  }
});
function Ru(e, t, n, l, o, r) {
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
const Fu = /* @__PURE__ */ q(Hu, [["render", Ru]]), { create: Wu } = j("badge"), Yu = Wu({
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
      const o = e.value, r = e.max;
      return typeof o == "number" && typeof r == "number" && r < o ? `${r}+` : o;
    });
    return {
      state: t,
      stl: n,
      content: l
    };
  }
}), ju = { class: "nut-badge" }, Uu = ["textContent"];
function Ku(e, t, n, l, o, r) {
  return c(), f("view", ju, [
    Ce(h("view", {
      class: "nut-badge__icon",
      style: A(e.stl)
    }, [
      I(e.$slots, "icon")
    ], 4), [
      [De, !e.hidden && !e.dot && e.$slots.icon]
    ]),
    I(e.$slots, "default"),
    Ce(h("view", {
      class: L(["nut-badge__content nut-badge__content--sup", { "nut-badge__content--dot": e.dot, "nut-badge__content--bubble": !e.dot && e.bubble }]),
      style: A(e.stl),
      textContent: E(e.content)
    }, null, 14, Uu), [
      [De, !e.hidden && (e.content || e.dot)]
    ])
  ]);
}
const ho = /* @__PURE__ */ q(Yu, [["render", Ku]]), { create: Xu } = j("tabbar-item"), qu = Xu({
  components: { NutBadge: ho },
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
    const n = (p) => t[p], l = Le(mo), o = ce({
      unactiveColor: l.unactiveColor,
      // 未选中的颜色
      activeColor: l.activeColor,
      // 选中的颜色
      index: 0
    }), r = rn();
    ((p) => {
      var d;
      if (p.proxy) {
        l.children.push(p.proxy);
        const v = l.children.indexOf(p.proxy);
        o.index = (d = e.name) != null ? d : v;
      }
    })(je());
    const a = D(() => o.index === l.modelValue);
    function i() {
      var g, k, $;
      let p = (g = e.name) != null ? g : o.index, d = null;
      e.name && (d = l.children.findIndex((w) => w.name == p)), l.changeIndex(d != null ? d : p, o.index);
      let v = d != null ? d : p;
      if ((k = l.children[v]) != null && k.href) {
        window.location.href = l.children[v].href;
        return;
      }
      if (($ = l.children[v]) != null && $.to) {
        let w = l.children[v].to;
        w && r ? r.push(w) : location.replace(w);
      }
    }
    return {
      state: o,
      active: a,
      renderIcon: ft,
      isHaveSlot: n,
      change: i
    };
  }
}), Zu = { class: "nut-tabbar-item_icon-box" }, Gu = {
  key: 0,
  class: "nut-tabbar-item_icon-box_icon"
}, Ju = { key: 1 }, Qu = { key: 0 };
function xu(e, t, n, l, o, r) {
  const s = W("nut-badge");
  return c(), f("div", {
    class: L(["nut-tabbar-item", { "nut-tabbar-item__icon--unactive": !e.active }]),
    style: A({
      color: e.active ? e.state.activeColor : e.state.unactiveColor
    }),
    onClick: t[0] || (t[0] = (a) => e.change())
  }, [
    oe(s, nl(ol(e.$attrs)), {
      default: ne(() => [
        h("view", Zu, [
          e.isHaveSlot("icon") ? (c(), f("div", Gu, [
            I(e.$slots, "icon", { active: e.active })
          ])) : N("", !0),
          e.icon && !e.isHaveSlot("icon") ? (c(), f("view", Ju, [
            (c(), ee(Ve(e.renderIcon(e.icon)), { class: "nut-popover-item-img" }))
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
const ec = /* @__PURE__ */ q(qu, [["render", xu]]), { create: tc } = j("elevator"), nc = tc({
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
    }), r = D(() => l.value.clientHeight), s = (u, y) => u.getAttribute("data-" + y), a = (u) => {
      Se(() => {
        !o.listGroup.includes(u) && u != null && o.listGroup.push(u);
      });
    }, i = () => {
      let u = 0;
      o.listHeight.push(u);
      for (let y = 0; y < o.listGroup.length; y++) {
        let m = o.listGroup[y];
        u += Math.floor(m.clientHeight), o.listHeight.push(u);
      }
    }, p = (u) => {
      !u && u !== 0 || (u < 0 && (u = 0), u > o.listHeight.length - 2 && (u = o.listHeight.length - 2), o.codeIndex = u, l.value.scrollTo(0, o.listHeight[u]));
    }, d = (u) => {
      o.scrollStart = !0;
      let y = s(u.target, "index"), m = u.touches[0];
      o.touchState.y1 = m.pageY, o.anchorIndex = +y, o.codeIndex = +y, p(+y);
    }, v = (u) => {
      let y = u.touches[0];
      o.touchState.y2 = y.pageY;
      let m = (o.touchState.y2 - o.touchState.y1) / e.spaceHeight | 0;
      o.codeIndex = o.anchorIndex + m, p(o.codeIndex);
    }, g = () => {
      o.scrollStart = !1;
    }, k = (u, y) => {
      t("clickItem", u, y), o.currentData = y, o.currentKey = u;
    }, $ = (u) => {
      t("clickIndex", u);
    }, w = (u) => {
      let m = u.target.scrollTop;
      const b = o.listHeight;
      o.scrollY = m;
      for (let S = 0; S < b.length - 1; S++) {
        let _ = b[S], B = b[S + 1];
        if (o.scrollY >= _ && o.scrollY < B) {
          o.currentIndex = S, o.diff = B - o.scrollY;
          return;
        }
      }
      o.currentIndex = b.length - 2;
    };
    return ve(() => {
      l.value && l.value.addEventListener("scroll", w);
    }), n({
      scrollTo: p
    }), Q(
      () => o.listGroup.length,
      () => {
        o.listHeight = [], Se(i);
      }
    ), Q(
      () => o.diff,
      (u) => {
        const y = o.listHeight;
        let m = u > 0 && u < e.titleHeight ? u - e.titleHeight : 0;
        o.scrollY + r.value === y[y.length - 1] && m !== 0 && (m = 0), o.fixedTop !== m && (o.fixedTop = m);
      }
    ), Q(
      () => o.currentIndex,
      (u) => {
        t("change", u);
      }
    ), de(Z({}, he(o)), {
      clientHeight: r,
      setListGroup: a,
      listview: l,
      touchStart: d,
      touchMove: v,
      touchEnd: g,
      handleClickItem: k,
      handleClickIndex: $
    });
  }
}), oc = { class: "nut-elevator" }, lc = { class: "nut-elevator__list__item__code" }, sc = ["onClick"], ac = ["innerHTML"], rc = { class: "nut-elevator__list__fixed" }, ic = { class: "nut-elevator__list__fixed-title" }, uc = { class: "nut-elevator__bars__inner" }, cc = ["data-index", "onClick"];
function dc(e, t, n, l, o, r) {
  var s, a;
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
    Ce(h("view", rc, [
      h("view", ic, E((a = (s = e.indexList) == null ? void 0 : s[e.currentIndex]) == null ? void 0 : a[e.acceptKey]), 1)
    ], 512), [
      [De, e.scrollY > 0 && e.isSticky]
    ]),
    e.indexList.length ? Ce((c(), f("view", {
      key: 0,
      class: "nut-elevator__code--current"
    }, E(e.indexList[e.codeIndex][e.acceptKey]), 513)), [
      [De, e.scrollStart]
    ]) : N("", !0),
    h("view", {
      class: "nut-elevator__bars",
      onTouchstart: t[0] || (t[0] = (...i) => e.touchStart && e.touchStart(...i)),
      onTouchmove: t[1] || (t[1] = _e((...i) => e.touchMove && e.touchMove(...i), ["stop", "prevent"])),
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
const go = /* @__PURE__ */ q(nc, [["render", dc]]), { create: fc } = j("pagination"), pc = "NutPagination", mc = fc({
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
    const n = ke(pc), { modelValue: l, mode: o, showPageSize: r, forceEllipses: s } = he(e), a = D(() => {
      const { pageCount: v, totalItems: g, itemsPerPage: k } = he(e), $ = +v.value || Math.ceil(+g.value / +k.value);
      return Math.max(1, $);
    }), i = (v, g) => {
      v > a.value || v < 1 || (v != l.value && t("update:modelValue", v), g && t("change", v));
    }, p = (v, g, k = !1) => ({ number: v, text: g, active: k }), d = D(() => {
      if (o.value == "simple")
        return;
      let v = [];
      const g = a.value, k = +r.value;
      let $ = 1, w = g;
      const u = g > k;
      u && ($ = Math.max(l.value - Math.floor(k / 2), 1), w = $ + +k - 1, w > g && (w = g, $ = w - +k + 1));
      for (var y = $; y <= w; y++) {
        const m = p(y, y, l.value == y);
        v.push(m);
      }
      if (u && k > 0 && s.value) {
        if ($ > 1) {
          const m = p($ - 1, "...");
          v.unshift(m);
        }
        if (w < g) {
          const m = p(w + 1, "...");
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
      countRef: a,
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
function bc(e, t, n, l, o, r) {
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
      (c(!0), f(x, null, ie(e.pages, (s, a) => (c(), f("view", {
        key: a + "pagination",
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
const wc = /* @__PURE__ */ q(mc, [["render", bc]]), Bt = window, kc = typeof window != "undefined";
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
const He = Cc(), _n = 10;
function Tc(e, t) {
  return e > t && e > _n ? "horizontal" : t > e && t > _n ? "vertical" : "";
}
function et() {
  const e = z(0), t = z(0), n = z(0), l = z(0), o = z(0), r = z(0), s = z(0), a = z(0), i = z(""), p = () => i.value === "vertical", d = () => i.value === "horizontal", v = () => {
    o.value = 0, r.value = 0, s.value = 0, a.value = 0, i.value = "";
  };
  return {
    move: ($) => {
      const w = $.touches[0];
      o.value = w.clientX - e.value, r.value = w.clientY - t.value, n.value = w.clientX, l.value = w.clientY, s.value = Math.abs(o.value), a.value = Math.abs(r.value), i.value || (i.value = Tc(s.value, a.value));
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
    deltaY: r,
    offsetX: s,
    offsetY: a,
    direction: i,
    isVertical: p,
    isHorizontal: d
  };
}
const Nc = (e, t, n, l) => {
  const o = z(), r = z({ width: 0, height: 0 }), s = () => Ge(void 0, null, function* () {
    var g, k;
    n && n.getEnv() !== n.ENV_TYPE.WEB ? l(o).then(
      ($) => {
        r.value.width = $.width || 0, r.value.height = $.height || 0;
      },
      () => {
      }
    ) : (r.value.width = ((g = o.value) == null ? void 0 : g.clientWidth) || 0, r.value.height = ((k = o.value) == null ? void 0 : k.clientHeight) || 0);
  });
  ve(() => {
    setTimeout(() => {
      s();
    }, 100);
  });
  const a = ce({
    offset: 0,
    moving: !1
  }), i = et();
  let p = "";
  const d = (g, k) => {
    var w;
    let $ = g;
    switch (e.direction == "horizontal" ? (p = g > 0 ? "right" : "left", $ = Math.abs($) / r.value.width * 100) : (p = k > 0 ? "bottom" : "top", $ = k, $ = Math.abs($) / ((w = r.value) == null ? void 0 : w.height) * 100), $ > 85 && ($ = 85), p) {
      case "left":
      case "top":
        t.isEnd() && ($ = 0, a.moving = !1);
        break;
      case "right":
      case "bottom":
        $ = -$, t.isBegin() && ($ = 0, a.moving = !1);
        break;
    }
    a.offset = $;
  };
  return { touchMethods: {
    onTouchStart(g) {
      e.swipeable && i.start(g);
    },
    onTouchMove(g) {
      e.swipeable && (i.move(g), a.moving = !0, d(i.deltaX.value, i.deltaY.value), e.direction == "horizontal" && i.isHorizontal() && (g.preventDefault(), g.stopPropagation()), e.direction == "vertical" && i.isVertical() && (g.preventDefault(), g.stopPropagation()));
    },
    onTouchEnd() {
      if (a.moving)
        switch (a.moving = !1, p) {
          case "left":
          case "top":
            a.offset > 35 && t.next();
            break;
          case "right":
          case "bottom":
            a.offset < -35 && t.prev();
            break;
        }
    }
  }, touchState: a, tabsContentRef: o };
};
class Dc {
  constructor() {
    V(this, "title", "");
    V(this, "titleSlot");
    V(this, "paneKey", "");
    V(this, "disabled", !1);
  }
}
const { create: _c } = j("tabs"), Ic = _c({
  components: { NutSticky: uo, JoySmile: js },
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
    Ee("tabsOpiton", {
      activeKey: D(() => e.modelValue || "0"),
      autoHeight: D(() => e.autoHeight),
      animatedTime: D(() => e.animatedTime)
    });
    const r = z([]), s = (T) => {
      T.forEach((P, O) => {
        var G, le, Y, U, R, te, X, se, ue;
        let K = P.type;
        if (K = K.name || K, K == "NutTabPane") {
          let pe = new Dc();
          if ((G = P.props) != null && G.title || (le = P.props) != null && le["pane-key"] || (Y = P.props) != null && Y.paneKey) {
            let we = jt((U = P.props) == null ? void 0 : U["pane-key"]), Ie = we == "number" || we == "string" ? String((R = P.props) == null ? void 0 : R["pane-key"]) : null, H = jt((te = P.props) == null ? void 0 : te.paneKey), J = H == "number" || H == "string" ? String((X = P.props) == null ? void 0 : X.paneKey) : null;
            pe.title = (se = P.props) == null ? void 0 : se.title, pe.paneKey = Ie || J || String(O), pe.disabled = (ue = P.props) == null ? void 0 : ue.disabled;
          }
          r.value.push(pe);
        } else {
          if (P.children == " ")
            return;
          s(P.children);
        }
      });
    }, a = z(e.modelValue || 0), i = (T) => {
      let P = r.value.findIndex((O) => O.paneKey == T);
      r.value.length == 0 || P == -1 || (a.value = P);
    }, p = D(() => e.titleScroll && e.direction === "vertical"), d = z(), v = z([]), g = (T) => {
      const P = d.value, O = v.value;
      if (!P || !O || !O[a.value])
        return;
      const K = O[a.value];
      let G = 0;
      e.direction === "vertical" ? G = K.offsetTop - P.offsetTop + 10 - (P.offsetHeight - K.offsetHeight) / 2 : G = K.offsetLeft - (P.offsetWidth - K.offsetWidth) / 2, k(P, G, T ? 0 : 0.3, e.direction);
    }, k = (T, P, O, K) => {
      let G = 0;
      const le = K === "horizontal" ? T.scrollLeft : T.scrollTop, Y = O === 0 ? 1 : Math.round(O * 1e3 / 16);
      function U() {
        K === "horizontal" ? T.scrollLeft += (P - le) / Y : T.scrollTop += (P - le) / Y, ++G < Y && He(U);
      }
      U();
    }, $ = (T = ((P) => (P = n.default) == null ? void 0 : P.call(n))()) => {
      r.value = [], T = T == null ? void 0 : T.filter((O) => typeof O.children != "string"), T && T.length && s(T), i(e.modelValue), Se(() => {
        g();
      });
    }, w = (T) => {
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
        if (i(T), g(), o) {
          let P = Ye(l.value).top + u(), O = Math.ceil(P - e.top);
          window.scrollTo({
            top: O,
            behavior: "smooth"
          });
        }
      }
    ), ve($), Ct($);
    const y = {
      isBegin: () => a.value == 0,
      isEnd: () => a.value == r.value.length - 1,
      next: () => {
        a.value += 1;
        const T = r.value[a.value].disabled;
        if (y.isEnd() && T) {
          y.prev();
          return;
        }
        if (T && a.value < r.value.length - 1) {
          y.next();
          return;
        }
        y.updateValue(r.value[a.value]);
      },
      prev: () => {
        a.value -= 1;
        const T = r.value[a.value].disabled;
        if (y.isBegin() && T) {
          y.next();
          return;
        }
        if (T && a.value > 0) {
          y.prev();
          return;
        }
        y.updateValue(r.value[a.value]);
      },
      updateValue: (T) => {
        t("update:modelValue", T.paneKey), t("change", T);
      },
      tabChange: (T, P) => {
        t("click", T), !(T.disabled || a.value == P) && (a.value = P, y.updateValue(T));
      },
      setTabItemRef: (T, P) => {
        v.value[P] = T;
      }
    }, { tabsContentRef: m, touchState: b, touchMethods: S } = Nc(e, y), _ = D(() => {
      let T = a.value * 100;
      b.moving && (T += b.offset);
      let P = {
        transform: e.direction == "horizontal" ? `translate3d(-${T}%, 0, 0)` : `translate3d( 0,-${T}%, 0)`,
        transitionDuration: b.moving ? void 0 : `${e.animatedTime}ms`
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
      const T = Ne(e.titleGutter);
      return e.direction === "vertical" ? { marginTop: T, marginBottom: T } : { marginLeft: T, marginRight: T };
    });
    return Z(Z({
      navRef: d,
      tabsContentRef: m,
      titles: r,
      contentStyle: _,
      tabsNavStyle: B,
      titleStyle: C,
      tabsActiveStyle: M,
      container: l,
      getScrollY: p,
      onStickyScroll: w
    }, y), S);
  }
}), Bc = ["onClick"], Mc = ["onClick"];
function Lc(e, t, n, l, o, r) {
  const s = W("JoySmile"), a = W("nut-sticky");
  return c(), f("view", {
    ref: "container",
    class: L(["nut-tabs", [e.direction]])
  }, [
    e.sticky ? (c(), ee(a, {
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
const yo = /* @__PURE__ */ q(Ic, [["render", Lc]]), { create: Ec } = j("tab-pane"), Pc = Ec({
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
    const t = Le("tabsOpiton"), n = D(() => ({
      display: t.animatedTime.value == 0 && e.paneKey != t.activeKey.value ? "none" : void 0
    }));
    return de(Z({}, t), {
      paneStyle: n
    });
  }
});
function Ac(e, t, n, l, o, r) {
  return c(), f("view", {
    class: L(["nut-tab-pane", { inactive: e.paneKey != e.activeKey && e.autoHeight }]),
    style: A(e.paneStyle)
  }, [
    I(e.$slots, "default")
  ], 6);
}
const vo = /* @__PURE__ */ q(Pc, [["render", Ac]]), { create: zc } = j("indicator"), Vc = zc({
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
function Rc(e, t, n, l, o, r) {
  return c(), f("view", {
    class: L(e.classes)
  }, [
    (c(!0), f(x, null, ie(e.size, (s) => (c(), f(x, { key: s }, [
      s === e.current ? (c(), f("view", Oc, E(e.fillZero && e.padZero(s) || s), 1)) : (c(), f("view", Hc))
    ], 64))), 128))
  ], 2);
}
const Fc = /* @__PURE__ */ q(Vc, [["render", Rc]]), { create: Wc } = j("side-navbar"), Yc = Wc({
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
    }), l = (r, s = 1) => {
      var a;
      for (let i = 0; i < r.length; i++) {
        let p = r[i];
        (a = p == null ? void 0 : p.children) != null && a[0] && (p.children[0].style.paddingLeft = +e.offset * s + "px", p.className.includes("nut-side-navbar-item") || l(Array.from(p.children[1].children), ++n.count));
      }
      n.count--;
    }, o = () => {
      let r = t.value.childNodes;
      r != null && r.length && (r = Array.from(r).filter((s) => s.nodeType !== 3).map((s) => s), l(r));
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
    }), de(Z({}, he(n)), {
      list: t
    });
  }
}), jc = { class: "nut-side-navbar" }, Uc = { class: "nut-side-navbar__content" }, Kc = {
  ref: "list",
  class: "nut-side-navbar__content__list"
};
function Xc(e, t, n, l, o, r) {
  return c(), f("view", jc, [
    h("view", Uc, [
      h("view", Kc, [
        I(e.$slots, "default")
      ], 512)
    ])
  ]);
}
const qc = /* @__PURE__ */ q(Yc, [["render", Xc]]), { create: Zc } = j("side-navbar-item"), Gc = Zc({
  props: {
    title: {
      type: String,
      default: ""
    }
  }
}), Jc = { class: "nut-side-navbar-item" }, Qc = { class: "nut-side-navbar-item__title" };
function xc(e, t, n, l, o, r) {
  return c(), f("view", Jc, [
    h("span", Qc, E(e.title), 1)
  ]);
}
const ed = /* @__PURE__ */ q(Gc, [["render", xc]]), { create: td } = j("sub-side-navbar"), nd = td({
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
  components: { ArrowDown2: yl, ArrowUp2: kl },
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
    }), de(Z({}, he(n)), {
      style: l,
      handleClick: o
    });
  }
}), od = { class: "nut-sub-side-navbar" }, ld = { class: "nut-sub-side-navbar__title__text" }, sd = { class: "nut-sub-side-navbar__title__icon" };
function ad(e, t, n, l, o, r) {
  const s = W("ArrowDown2"), a = W("ArrowUp2");
  return c(), f("view", od, [
    h("view", {
      class: "nut-sub-side-navbar__title",
      onClick: t[0] || (t[0] = _e((...i) => e.handleClick && e.handleClick(...i), ["stop"]))
    }, [
      h("span", ld, E(e.title), 1),
      h("span", sd, [
        e.direction ? (c(), ee(a, { key: 1 })) : (c(), ee(s, { key: 0 }))
      ])
    ]),
    Ce(h("view", {
      class: L(["nut-sub-side-navbar__list", e.direction ? "nutFadeOut" : "nutFadeIn"]),
      style: A(e.style)
    }, [
      I(e.$slots, "default")
    ], 6), [
      [De, !e.direction]
    ])
  ]);
}
const rd = /* @__PURE__ */ q(nd, [["render", ad]]), $o = Symbol("nut-form"), bo = Symbol("nut-form-disabled"), Ze = (e) => {
  const { parent: t } = sn(bo);
  return D(() => {
    var n;
    return e.value || ((n = t == null ? void 0 : t.props) == null ? void 0 : n.disabled) || !1;
  });
}, { componentName: id, create: ud } = j("range"), cd = ud({
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
    let o, r;
    const s = z(), a = z(), i = et(), p = D(() => {
      const { marks: Y, max: U, min: R } = e;
      return Object.keys(Y).map(parseFloat).sort((se, ue) => se - ue).filter((se) => se >= +R && se <= +U);
    }), d = D(() => Number(e.max) - Number(e.min)), v = D(() => {
      const Y = id;
      return {
        [Y]: !0,
        [`${Y}-disabled`]: n.value,
        [`${Y}-vertical`]: e.vertical,
        [`${Y}-show-number`]: !e.hiddenRange
      };
    }), g = D(() => {
      const Y = "nut-range-container";
      return {
        [Y]: !0,
        [`${Y}-vertical`]: e.vertical
      };
    }), k = D(() => ({
      background: e.inactiveColor
    })), $ = D(() => ({
      borderColor: e.buttonColor
    })), w = (Y) => !!e.range && Array.isArray(Y), u = () => {
      const { modelValue: Y, min: U } = e;
      return w(Y) ? `${(Y[1] - Y[0]) * 100 / d.value}%` : `${(Y - Number(U)) * 100 / d.value}%`;
    }, y = () => {
      const { modelValue: Y, min: U } = e;
      return w(Y) ? `${(Y[0] - Number(U)) * 100 / d.value}%` : "0%";
    }, m = D(() => e.vertical ? {
      height: u(),
      top: y(),
      background: e.activeColor,
      transition: a.value ? "none" : void 0
    } : {
      width: u(),
      left: y(),
      background: e.activeColor,
      transition: a.value ? "none" : void 0
    }), b = (Y) => {
      const U = "nut-range-mark", { modelValue: R, max: te, min: X } = e;
      let se = Number(X), ue = Number(te);
      if (e.range) {
        const [we, Ie] = R;
        se = we, ue = Ie;
      } else
        ue = R;
      let pe = Y <= +ue && Y >= se;
      return {
        [`${U}-text`]: !0,
        [`${U}-text-active`]: pe
      };
    }, S = (Y) => {
      const { min: U, vertical: R } = e;
      let te = {
        left: `${(Y - Number(U)) / d.value * 100}%`
      };
      return R && (te = {
        top: `${(Y - Number(U)) / d.value * 100}%`
      }), te;
    }, _ = (Y) => {
      const { modelValue: U, max: R, min: te } = e;
      let X = Number(te), se = Number(R);
      if (e.range) {
        const [we, Ie] = U;
        X = we, se = Ie;
      }
      return {
        background: Y <= se && Y >= X ? e.activeColor : e.inactiveColor
      };
    }, B = (Y) => {
      const { min: U, max: R, step: te } = e;
      return Y = Math.max(+U, Math.min(Y, +R)), Math.round(Y / +te) * +te;
    }, M = (Y, U) => JSON.stringify(Y) === JSON.stringify(U), C = (Y) => Y[0] > Y[1] ? Y.slice(0).reverse() : Y, T = (Y, U) => {
      w(Y) ? Y = C(Y).map(B) : Y = B(Y), M(Y, e.modelValue) || t("update:modelValue", Y), U && !M(Y, o) && t("change", Y);
    }, P = (Y) => {
      if (n.value)
        return;
      const { min: U, modelValue: R } = e, te = Ye(s);
      let X = Y.clientX - te.left, se = te.width;
      e.vertical && (X = Y.clientY - te.top, se = te.height);
      const ue = Number(U) + X / se * d.value;
      if (w(R)) {
        const [pe, we] = R, Ie = (pe + we) / 2;
        ue <= Ie ? T([ue, we], !0) : T([pe, ue], !0);
      } else
        T(ue, !0);
    }, O = (Y) => {
      n.value || (i.start(Y), r = e.modelValue, w(r) ? o = r.map(B) : o = B(r), a.value = "start");
    }, K = (Y) => {
      if (n.value)
        return;
      a.value === "start" && t("dragStart"), i.move(Y), a.value = "draging";
      const U = Ye(s);
      let R = i.deltaX.value, te = U.width, X = R / te * d.value;
      e.vertical && (R = i.deltaY.value, te = U.height, X = R / te * d.value), w(o) ? r[l.value] = o[l.value] + X : r = o + X, T(r);
    }, G = () => {
      n.value || (a.value === "draging" && (T(r, !0), t("dragEnd")), a.value = "");
    }, le = (Y) => Yn(e.modelValue) && typeof Y == "number" ? e.modelValue[Y] : Number(e.modelValue);
    return de(Z({
      root: s,
      classes: v,
      wrapperStyle: k,
      buttonStyle: $,
      onClick: P,
      onTouchStart: O,
      onTouchMove: K,
      onTouchEnd: G
    }, he(e)), {
      barStyle: m,
      curValue: le,
      buttonIndex: l,
      containerClasses: g,
      markClassName: b,
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
function vd(e, t, n, l, o, r) {
  return c(), f("view", {
    class: L(e.containerClasses)
  }, [
    e.hiddenRange ? N("", !0) : (c(), f("view", dd, E(+e.min), 1)),
    h("view", {
      ref: "root",
      style: A(e.wrapperStyle),
      class: L(e.classes),
      onClick: t[9] || (t[9] = _e((...s) => e.onClick && e.onClick(...s), ["stop"]))
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
          onTouchstart: _e(
            (a) => {
              typeof s == "number" && (e.buttonIndex = s), e.onTouchStart(a);
            },
            ["stop", "prevent"]
          ),
          onTouchmove: t[0] || (t[0] = _e((...a) => e.onTouchMove && e.onTouchMove(...a), ["stop", "prevent"])),
          onTouchend: t[1] || (t[1] = _e((...a) => e.onTouchEnd && e.onTouchEnd(...a), ["stop", "prevent"])),
          onTouchcancel: t[2] || (t[2] = _e((...a) => e.onTouchEnd && e.onTouchEnd(...a), ["stop", "prevent"])),
          onClick: t[3] || (t[3] = (a) => a.stopPropagation())
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
const wo = /* @__PURE__ */ q(cd, [["render", vd]]), { create: $d } = j("searchbar"), bd = "NutSearchbar", wd = $d({
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
    const n = Ze(xe(e, "disabled")), l = ke(bd), o = ce({
      active: !1
    }), r = D(() => ({
      background: e.background
    })), s = D(() => ({
      background: e.inputBackground
    })), a = (m) => {
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
    }, g = () => {
      t("search", e.modelValue);
    }, k = (m) => {
      t("clickInput", m);
    }, $ = (m) => {
      t("clickLeftIcon", e.modelValue, m);
    }, w = (m) => {
      t("clickRightIcon", e.modelValue, m);
    }, u = D(() => ({
      textAlign: e.inputAlign
    })), y = z(null);
    return ve(() => {
      e.autofocus && y.value.focus();
    }), de(Z({
      renderIcon: ft,
      inputsearch: y
    }, he(o)), {
      valueChange: a,
      valueFocus: p,
      valueBlur: d,
      handleClear: v,
      handleSubmit: g,
      searchbarStyle: r,
      inputSearchbarStyle: s,
      focusCss: i,
      translate: l,
      clickInput: k,
      leftIconClick: $,
      rightIconClick: w,
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
function Dd(e, t, n, l, o, r) {
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
      style: A(Z(Z({}, e.inputSearchbarStyle), e.focusCss))
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
          onSubmit: t[5] || (t[5] = _e((...s) => e.handleSubmit && e.handleSubmit(...s), ["prevent"]))
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
        e.clearable ? Ce((c(), f("view", {
          key: 0,
          class: "nut-searchbar__search-icon nut-searchbar__input-clear",
          onClick: t[6] || (t[6] = (...s) => e.handleClear && e.handleClear(...s))
        }, [
          e.$slots["clear-icon"] ? I(e.$slots, "clear-icon", { key: 0 }) : (c(), ee(Ve(e.renderIcon(e.clearIcon)), { key: 1 }))
        ], 512)), [
          [De, String(e.modelValue).length > 0]
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
const _d = /* @__PURE__ */ q(wd, [["render", Dd]]), Lt = (e, t, n) => e.map((l) => {
  const { value: o = "value", text: r = "text", children: s = "children" } = n, g = l, { [o]: a, [r]: i, [s]: p } = g, d = Wt(g, [_t(o), _t(r), _t(s)]), v = de(Z({
    loading: !1
  }, d), {
    level: t ? (t && t.level || 0) + 1 : 0,
    value: a,
    text: i,
    children: p,
    _parent: t
  });
  return v.children && v.children.length && (v.children = Lt(v.children, v, n)), v;
}), ko = (e, t) => {
  let n = 0, l;
  for (; (l = e[n++]) && t(l) !== !0; )
    l.children && l.children.length && ko(l.children, t);
}, Id = {
  topId: null,
  idKey: "id",
  pidKey: "pid",
  sortKey: ""
}, Bd = (e, t) => {
  const n = Z(Z({}, Id), t || {}), { topId: l, idKey: o, pidKey: r, sortKey: s } = n;
  let a = [], i = {};
  return e.forEach((p) => {
    p = Z({}, p);
    const { [o]: d, [r]: v } = p, g = i[v] = i[v] || [];
    !a.length && v === l && (a = g), g.push(p), p.children = i[d] || (i[d] = []);
  }), s && Object.keys(i).forEach((p) => {
    i[p].length > 1 && i[p].sort((d, v) => d[s] - v[s]);
  }), i = null, a;
};
class In {
  constructor(t, n) {
    V(this, "nodes");
    V(this, "config");
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
    return ko(this.nodes, (l) => {
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
      const o = l.find((r) => r.value === t[r.level]);
      if (!o)
        break;
      n.push(o), l = o.children;
    }
    return n;
  }
  isLeaf(t, n) {
    const { leaf: l, children: o } = t, r = Array.isArray(o) && !!o.length;
    return l || !r && !n;
  }
  hasChildren(t, n) {
    if (this.isLeaf(t, n))
      return !1;
    const { children: o } = t;
    return Array.isArray(o) && !!o.length;
  }
}
const { create: Md } = j("cascader-item"), Ld = Md({
  components: {
    Loading: at,
    Checklist: ql,
    NutTabs: yo,
    NutTabPane: vo
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
    const n = ke(), l = D(() => ({
      lazy: e.lazy,
      lazyLoad: e.lazyLoad,
      valueKey: e.valueKey,
      textKey: e.textKey,
      childrenKey: e.childrenKey,
      convertConfig: e.convertConfig
    })), o = z(0), r = z(!1), s = z(e.modelValue), a = z(new In([], {})), i = z([]), p = D(() => l.value.lazy && !!l.value.lazyLoad), d = /* @__PURE__ */ new Map();
    let v;
    const g = () => Ge(this, null, function* () {
      d.clear(), i.value = [], o.value = 0, r.value = !1, v = null;
      let { options: m } = e;
      l.value.convertConfig && (m = Bd(m, l.value.convertConfig)), a.value = new In(m, {
        value: l.value.valueKey,
        text: l.value.textKey,
        children: l.value.childrenKey
      }), p.value && !a.value.nodes.length && (yield $({
        root: !0,
        loading: !0,
        text: "",
        value: ""
      })), i.value = [{ nodes: a.value.nodes, selectedNode: null }], k();
    }), k = () => Ge(this, null, function* () {
      const m = s.value;
      if (m === void 0 || !a.value.nodes.length)
        return;
      if (m.length === 0) {
        o.value = 0, i.value = [{ nodes: a.value.nodes, selectedNode: null }];
        return;
      }
      let b = m;
      if (p.value && Array.isArray(m) && m.length) {
        b = [];
        let S = a.value.nodes.find((_) => _.value === m[0]);
        if (S) {
          b = [S.value], r.value = !0;
          const _ = yield m.slice(1).reduce((B, M) => Ge(this, null, function* () {
            var P;
            const C = yield B;
            yield $(C);
            const T = (P = C == null ? void 0 : C.children) == null ? void 0 : P.find((O) => O.value === M);
            return T && b.push(M), Promise.resolve(T);
          }), Promise.resolve(S));
          yield $(_), r.value = !1;
        }
      }
      b.length && m === e.modelValue && a.value.getPathNodesByValue(b).map((_, B) => {
        o.value = B, u.handleNode(_, !0);
      });
    }), $ = (m) => Ge(this, null, function* () {
      if (!m)
        return;
      if (!l.value.lazyLoad) {
        m.leaf = !0;
        return;
      }
      if (a.value.isLeaf(m, p.value) || a.value.hasChildren(m, p.value))
        return;
      m.loading = !0;
      const b = m.root ? null : m;
      let S = d.get(m);
      S || (S = new Promise((B) => {
        var M, C;
        (C = (M = l.value).lazyLoad) == null || C.call(M, m, B);
      }), d.set(m, S));
      const _ = yield S;
      Array.isArray(_) && _.length > 0 ? a.value.updateChildren(_, b) : m.leaf = !0, m.loading = !1, d.delete(m);
    }), w = (m) => {
      const b = m.map((S) => S.value);
      s.value = b, t("change", b, m), t("update:modelValue", b, m);
    }, u = {
      // 选中一个节点，静默模式不触发事件
      handleNode(m, b) {
        return Ge(this, null, function* () {
          const { disabled: S, loading: _ } = m;
          if (!(!b && S || !i.value[o.value])) {
            if (a.value.isLeaf(m, p.value)) {
              if (m.leaf = !0, i.value[o.value].selectedNode = m, i.value = i.value.slice(0, m.level + 1), !b) {
                const B = i.value.map((M) => M.selectedNode);
                w(B), t("pathChange", B);
              }
              return;
            }
            if (a.value.hasChildren(m, p.value)) {
              const B = m.level + 1;
              if (i.value[o.value].selectedNode = m, i.value = i.value.slice(0, B), i.value.push({
                nodes: m.children || [],
                selectedNode: null
              }), o.value = B, !b) {
                const M = i.value.map((C) => C.selectedNode);
                t("pathChange", M);
              }
              return;
            }
            v = m, !_ && (yield $(m), v === m && (i.value[o.value].selectedNode = m, u.handleNode(m, b)));
          }
        });
      },
      handleTabClick(m) {
        v = null, o.value = Number(m.paneKey);
      },
      formatTabTitle(m) {
        return m.selectedNode ? m.selectedNode.text : n("select");
      },
      isSelected(m, b) {
        var S;
        return ((S = m == null ? void 0 : m.selectedNode) == null ? void 0 : S.value) === b.value;
      }
    };
    return Q(
      [l, () => e.options],
      () => {
        g();
      },
      {
        deep: !0,
        immediate: !0
      }
    ), Q(
      () => e.modelValue,
      (m) => {
        m !== s.value && (s.value = m, k());
      }
    ), Q(
      () => e.visible,
      (m) => {
        m && Array.isArray(s.value) && s.value.length > 0 && k();
      }
    ), Z({ panes: i, initLoading: r, tabsCursor: o }, u);
  }
}), Ed = {
  role: "menu",
  class: "nut-cascader-pane"
}, Pd = ["aria-checked", "aria-disabled", "onClick"], Ad = { class: "nut-cascader-item__title" }, zd = /* @__PURE__ */ h("view", { class: "nut-cascader-pane" }, null, -1);
function Vd(e, t, n, l, o, r) {
  const s = W("Loading"), a = W("Checklist"), i = W("nut-tab-pane"), p = W("nut-tabs");
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
            (c(!0), f(x, null, ie(d.nodes, (g) => (c(), f("view", {
              key: g.value,
              class: L(["nut-cascader-item", { active: e.isSelected(d, g), disabled: g.disabled }]),
              "aria-checked": e.isSelected(d, g),
              "aria-disabled": g.disabled || void 0,
              role: "menuitemradio",
              onClick: (k) => e.handleNode(g, !1)
            }, [
              h("view", Ad, E(g.text), 1),
              g.loading ? (c(), ee(s, {
                key: 0,
                class: "nut-cascader-item__icon-loading",
                name: "loading"
              })) : (c(), ee(a, {
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
const Od = /* @__PURE__ */ q(Ld, [["render", Vd]]), { create: Hd } = j("cascader"), Rd = Hd({
  components: {
    NutCascaderItem: Od,
    NutPopup: Ae
  },
  props: de(Z({}, Nt), {
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
    }), o = (s, a) => {
      n.value = s, l.value = !1, t("change", s, a), t("update:modelValue", s);
    }, r = (s) => {
      t("pathChange", s);
    };
    return Q(
      () => e.modelValue,
      (s) => {
        s !== n.value && (n.value = s);
      }
    ), {
      onChange: o,
      onPathChange: r,
      innerValue: n,
      innerVisible: l
    };
  }
}), Fd = ["innerHTML"];
function Wd(e, t, n, l, o, r) {
  const s = W("nut-cascader-item"), a = W("nut-popup");
  return e.poppable ? (c(), ee(a, {
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
const Yd = /* @__PURE__ */ q(Rd, [["render", Wd]]), fe = {
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
    let r = o.getDay(), s = o.getDate(), a = 6 - r;
    return l !== 0 && (r = r == 0 ? 7 : r, a = 7 - r), Math.ceil((s + a) / 7);
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getYearWeek: function(e, t, n, l = 0) {
    const o = new Date(Number(e), parseInt(t) - 1, Number(n)), r = new Date(Number(e), 0, 1), s = Math.round((o.valueOf() - r.valueOf()) / 864e5);
    return Math.ceil((s + (r.getDay() + 1 - 1)) / 7);
  },
  getWeekDate: function(e, t, n, l = 0) {
    const o = new Date(Number(e), parseInt(t) - 1, Number(n)), r = o.getTime();
    let s = o.getDay();
    if (l === 0) {
      const i = r - s * 864e5, p = r + (6 - s) * 864e5, d = this.date2Str(new Date(i)), v = this.date2Str(new Date(p));
      return [d, v];
    } else {
      s = s == 0 ? 7 : s;
      const a = 24 * 60 * 60 * 1e3, i = r - (s - 1) * a, p = r + (7 - s) * a, d = this.date2Str(new Date(i)), v = this.date2Str(new Date(p));
      return [d, v];
    }
  },
  formatResultDate: function(e) {
    let t = [...e.split("-")];
    return t[2] = fe.getNumTwoBit(Number(t[2])), t[3] = `${t[0]}-${t[1]}-${t[2]}`, t[4] = fe.getWhatDay(+t[0], +t[1], +t[2]), t;
  }
}, { create: jd } = j("calendar-item"), Ud = "NutCalendarItem", Kd = jd({
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
    const o = ke(Ud), r = o("weekdays").map((H, J) => ({
      day: H,
      weekend: J === 0 || J === 6
    })), s = z([...r.slice(e.firstDayOfWeek, 7), ...r.slice(0, e.firstDayOfWeek)]), a = z(null), i = z(null), p = z(null), d = z(null), v = z(0), g = D(() => u.monthsData.slice(u.defaultRange[0], u.defaultRange[1])), k = D(() => n.btn), $ = D(() => n["top-info"]), w = D(() => n["bottom-info"]), u = ce({
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
    }), y = (H) => H.split("-"), m = (H) => fe.isEqual(u.currDate[0], H), b = (H) => fe.isEqual(u.currDate[1], H), S = (H) => {
      var J, ae;
      return ((J = u.currDate) == null ? void 0 : J.length) > 0 ? (ae = u.currDate) == null ? void 0 : ae.some((re) => fe.isEqual(re, H)) : !1;
    }, _ = (H, J) => J.curData[0] + "-" + J.curData[1] + "-" + fe.getNumTwoBit(+H.day), B = (H, J, ae) => {
      const re = [];
      typeof ae == "number" && ((ae + 1 + e.firstDayOfWeek) % 7 === 0 || (ae + e.firstDayOfWeek) % 7 === 0) && re.push("weekend");
      const me = _(H, J), { type: Me } = e;
      return H.type == "curr" ? fe.isEqual(u.currDate, me) || (Me == "range" || Me == "week") && (m(me) || b(me)) || Me == "multiple" && S(me) ? re.push(`${u.dayPrefix}--active`) : u.propStartDate && fe.compareDate(me, u.propStartDate) || u.propEndDate && fe.compareDate(u.propEndDate, me) || e.disabledDate && e.disabledDate(me) ? re.push(`${u.dayPrefix}--disabled`) : (Me == "range" || Me == "week") && Array.isArray(u.currDate) && Object.values(u.currDate).length == 2 && fe.compareDate(u.currDate[0], me) && fe.compareDate(me, u.currDate[1]) && re.push(`${u.dayPrefix}--choose`) : re.push(`${u.dayPrefix}--disabled`), re;
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
            let Te;
            (me = u.currDate) == null || me.forEach((We, Oe) => {
              We == $e[3] && (Te = Oe);
            }), ae ? u.chooseData.push([...$e]) : Te !== void 0 ? (u.currDate.splice(Te, 1), u.chooseData.splice(Te, 1)) : (u.currDate.push($e[3]), u.chooseData.push([...$e]));
          } else
            u.currDate = [$e[3]], u.chooseData = [[...$e]];
        else if (Me == "range") {
          let Te = Object.values(u.currDate).length;
          Te == 2 || Te == 0 ? u.currDate = [$e[3]] : fe.compareDate(u.currDate[0], $e[3]) ? Array.isArray(u.currDate) && u.currDate.push($e[3]) : Array.isArray(u.currDate) && u.currDate.unshift($e[3]), u.chooseData.length == 2 || !u.chooseData.length ? u.chooseData = [[...$e]] : fe.compareDate(u.chooseData[0][3], $e[3]) ? u.chooseData = [...u.chooseData, [...$e]] : u.chooseData = [[...$e], ...u.chooseData];
        } else if (Me == "week") {
          let Te = fe.getWeekDate(Fe, Ue, H.day, e.firstDayOfWeek);
          u.propStartDate && fe.compareDate(Te[0], u.propStartDate) && Te.splice(0, 1, u.propStartDate), u.propEndDate && fe.compareDate(u.propEndDate, Te[1]) && Te.splice(1, 1, u.propEndDate), u.currDate = Te, u.chooseData = [fe.formatResultDate(Te[0]), fe.formatResultDate(Te[1])];
        } else
          u.currDate = $e[3], u.chooseData = [...$e];
        if (!ae) {
          let Te = u.chooseData;
          Me == "week" && (Te = {
            weekDate: [
              T(u.chooseData[0]),
              T(u.chooseData[1])
            ]
          }), t("select", Te), (e.isAutoBackFill || !e.poppable) && M();
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
      let Te = 0;
      u.monthsData.length > 0 && (Te = u.monthsData[u.monthsData.length - 1].cssScrollHeight + u.monthsData[u.monthsData.length - 1].cssHeight), $e.cssScrollHeight = Te, J == "next" ? (!u.endData || !fe.compareDate(
        `${u.endData[0]}-${u.endData[1]}-${fe.getMonthDays(u.endData[0], u.endData[1])}`,
        `${H[0]}-${H[1]}-${H[2]}`
      )) && u.monthsData.push($e) : !u.startData || !fe.compareDate(
        `${H[0]}-${H[1]}-${H[2]}`,
        `${u.startData[0]}-${u.startData[1]}-01`
      ) ? u.monthsData.unshift($e) : u.unLoadPrev = !0;
    }, le = () => {
      let H = e.startDate ? e.startDate : fe.getDay(0), J = e.endDate ? e.endDate : fe.getDay(365);
      u.propStartDate = H, u.propEndDate = J, u.startData = y(H), u.endData = y(J), (e.defaultValue || Array.isArray(e.defaultValue) && e.defaultValue.length > 0) && (u.currDate = e.type !== "one" ? [...e.defaultValue] : e.defaultValue);
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
        u.currDate.length > 0 && (H && fe.compareDate(u.currDate[0], H) && u.currDate.splice(0, 1, H), J && fe.compareDate(J, u.currDate[1]) && u.currDate.splice(1, 1, J), u.defaultData = [...y(u.currDate[0]), ...y(u.currDate[1])]);
      else if (e.type == "multiple" && Array.isArray(u.currDate)) {
        if (u.currDate.length > 0) {
          let We = [], Oe = {};
          u.currDate.forEach((Ke) => {
            H && !fe.compareDate(Ke, H) && J && !fe.compareDate(J, Ke) && (Object.hasOwnProperty.call(Oe, Ke) || (We.push(Ke), Oe[Ke] = Ke));
          }), u.currDate = [...We], u.defaultData = [...y(We[0])];
        }
      } else if (e.type == "week" && Array.isArray(u.currDate)) {
        if (u.currDate.length > 0) {
          let [We, Oe, Ke] = y(u.currDate[0]), Rt = fe.getWeekDate(We, Oe, Ke, e.firstDayOfWeek);
          u.currDate = Rt, H && fe.compareDate(u.currDate[0], H) && u.currDate.splice(0, 1, H), J && fe.compareDate(J, u.currDate[1]) && u.currDate.splice(1, 1, J), u.defaultData = [...y(u.currDate[0]), ...y(u.currDate[1])];
        }
      } else
        u.currDate && (H && fe.compareDate(u.currDate, H) ? u.currDate = H : J && !fe.compareDate(u.currDate, J) && (u.currDate = J), u.defaultData = [...y(u.currDate)]);
      let Fe = 0, Ue = 0;
      u.defaultData.length > 0 && u.monthsData.forEach((We, Oe) => {
        We.title == o("monthTitle", u.defaultData[0], u.defaultData[1]) && (Fe = Oe), (e.type == "range" || e.type == "week") && We.title == o("monthTitle", u.defaultData[3], u.defaultData[4]) && (Ue = Oe);
      }), R(me, Fe), u.currentIndex = Fe, u.yearMonthTitle = u.monthsData[u.currentIndex].title, u.defaultData.length > 0 && (u.isRange ? (C({ day: u.defaultData[2], type: "curr" }, u.monthsData[u.currentIndex], !0), C({ day: u.defaultData[5], type: "curr" }, u.monthsData[Ue], !0)) : e.type == "week" ? C({ day: u.defaultData[2], type: "curr" }, u.monthsData[u.currentIndex], !0) : e.type == "multiple" ? [...u.currDate].forEach((We) => {
        let Oe = y(We), Ke = u.currentIndex;
        u.monthsData.forEach((Rt, Xo) => {
          Rt.title == o("monthTitle", Oe[0], Oe[1]) && (Ke = Xo);
        }), C({ day: Oe[2], type: "curr" }, u.monthsData[Ke], !0);
      }) : C({ day: u.defaultData[2], type: "curr" }, u.monthsData[u.currentIndex], !0));
      let $e = u.monthsData[u.monthsData.length - 1], Te = $e.cssHeight + $e.cssScrollHeight;
      He(() => {
        a != null && a.value && (i != null && i.value) && (d != null && d.value) && (v.value = a.value.clientHeight, i.value.style.height = `${Te}px`, a.value.scrollTop = u.monthsData[u.currentIndex].cssScrollHeight);
      }), u.avgHeight = Math.floor(Te / (me + 1));
    };
    l({
      scrollToDate: (H) => {
        fe.compareDate(H, u.propStartDate) ? H = u.propStartDate : fe.compareDate(H, u.propEndDate) || (H = u.propEndDate);
        let J = y(H);
        u.monthsData.forEach((ae, re) => {
          if (ae.title == o("monthTitle", J[0], J[1]) && a.value) {
            let me = u.monthsData[re].cssScrollHeight - a.value.scrollTop;
            if (e.toDateAnimation) {
              let Me = 0, Fe = setInterval(() => {
                if (Me++, a.value) {
                  let Ue = me / 10;
                  a.value.scrollTop = a.value.scrollTop + Ue;
                }
                Me >= 10 && (clearInterval(Fe), a.value && (a.value.scrollTop = u.monthsData[re].cssScrollHeight));
              }, 40);
            } else
              a.value.scrollTop = u.monthsData[re].cssScrollHeight;
          }
        });
      },
      initPosition: () => {
        a != null && a.value && (a.value.scrollTop = u.monthsData[u.currentIndex].cssScrollHeight);
      }
    });
    const R = (H, J) => {
      H >= 3 ? J > 0 && J < H ? u.defaultRange = [J - 1, J + 3] : J == 0 ? u.defaultRange = [J, J + 4] : J == H && (u.defaultRange = [J - 2, J + 2]) : u.defaultRange = [0, H + 2];
      let ae = u.monthsData[u.defaultRange[0]].cssScrollHeight;
      u.translateY = ae;
    }, te = (H, J) => (e.type == "range" || e.type == "week") && H.type == "curr" && B(H, J).includes("nut-calendar__day--active"), X = (H, J) => te(H, J) && m(_(H, J)), se = (H, J) => u.currDate.length >= 2 && b(_(H, J)) ? te(H, J) : !1, ue = () => {
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
    }, Ie = () => {
      u.chooseData.splice(0), u.monthsData.splice(0), le();
    };
    return ve(() => {
      le();
    }), Q(
      () => e.defaultValue,
      (H) => {
        H && e.poppable && Ie();
      }
    ), de(Z(Z({
      weeks: s,
      compConthsData: g,
      showTopBtn: k,
      topInfo: $,
      bottomInfo: w,
      rangeTip: ue,
      mothsViewScroll: we,
      getClass: B,
      isStartTip: X,
      isEndTip: se,
      chooseDay: C,
      isCurrDay: pe,
      confirm: M,
      months: a
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
function uf(e, t, n, l, o, r) {
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
        (c(!0), f(x, null, ie(e.weeks, (s, a) => (c(), f("view", {
          key: a,
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
          (c(!0), f(x, null, ie(e.compConthsData, (s, a) => (c(), f("view", {
            key: a,
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
const Co = /* @__PURE__ */ q(Kd, [["render", uf]]), { create: cf } = j("calendar"), df = cf({
  components: {
    NutCalendarItem: Co,
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
      set(b) {
        t("update:visible", b);
      }
    }), r = D(() => n.btn), s = D(() => n["top-info"]), a = D(() => n.day), i = D(() => n["bottom-info"]), p = D(() => n["footer-info"]), d = z(null);
    l({
      scrollToDate: (b) => {
        var S;
        (S = d.value) == null || S.scrollToDate(b);
      },
      initPosition: () => {
        var b;
        (b = d.value) == null || b.initPosition();
      }
    });
    const k = () => {
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
        var b;
        (b = d.value) == null || b.initPosition();
      },
      update: k,
      close: $,
      select: (b) => {
        t("select", b);
      },
      choose: (b) => {
        $(), t("choose", b);
      },
      calendarRef: d,
      showTopBtn: r,
      topInfo: s,
      dayInfo: a,
      bottomInfo: i,
      footerInfo: p
    };
  }
});
function ff(e, t, n, l, o, r) {
  const s = W("nut-calendar-item"), a = W("nut-popup");
  return e.poppable ? (c(), ee(a, wt({
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
const pf = /* @__PURE__ */ q(df, [["render", ff]]), mf = () => be(
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
), hf = () => be(
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
      d: "M13.853 4.026a.771.771 0 0 1 .12 1.085L10.864 9l3.11 3.889a.771.771 0 1 1-1.204.963L9.272 9.482a.771.771 0 0 1 0-.964l3.497-4.371a.771.771 0 0 1 1.084-.12Zm-5.245 0a.771.771 0 0 1 .12 1.085L5.617 9l3.111 3.889a.771.771 0 0 1-1.205.963L4.026 9.482a.771.771 0 0 1 0-.964l3.497-4.371a.771.771 0 0 1 1.085-.12Z"
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
      d: "M4.147 13.974a.771.771 0 0 1-.12-1.085L7.136 9 4.028 5.11a.771.771 0 1 1 1.204-.963l3.497 4.371a.771.771 0 0 1 0 .964l-3.497 4.371a.771.771 0 0 1-1.084.12Zm5.245 0a.771.771 0 0 1-.12-1.085L12.383 9 9.272 5.11a.771.771 0 1 1 1.205-.963l3.497 4.371a.771.771 0 0 1 0 .964l-3.497 4.371a.771.771 0 0 1-1.085.12Z"
    })
  ]
), ot = (e) => e ? {
  year: e.getFullYear(),
  month: e.getMonth() + 1,
  date: e.getDate()
} : null, Zt = (e) => e ? new Date(e.year, e.month - 1, e.date) : null, Bn = (e) => Array.isArray(e) ? e.map((t) => ot(t)) : e ? [ot(e)] : [], vf = (e) => Array.isArray(e) ? e.map((t) => Zt(t)) : e ? [Zt(e)] : [], $f = (e, t, n) => {
  let l = t - 1, o = e;
  l <= 0 && (l = 12, o -= 1);
  let r = fe.getMonthPreDay(e, t);
  r -= n, r >= 7 && (r -= 7);
  const s = fe.getMonthDays(`${o}`, `${l}`);
  return Array.from(Array(s), (i, p) => ({
    type: "prev",
    year: o,
    month: l,
    date: p + 1
  })).slice(s - r);
}, bf = (e, t) => {
  const n = fe.getMonthDays(`${e}`, `${t}`);
  return Array.from(Array(n), (l, o) => ({
    type: "current",
    year: e,
    month: t,
    date: o + 1
  }));
}, wf = (e, t) => {
  const n = new Date(e.year, e.month - 1, e.date), l = (n.getDay() + 7 - t) % 7;
  return [
    ot(new Date(n.getTime() - 24 * 60 * 60 * 1e3 * l)),
    ot(new Date(n.getTime() + 24 * 60 * 60 * 1e3 * (6 - l)))
  ];
}, kf = (e, t) => {
  const n = e.year, l = e.month, o = [...$f(n, l, t), ...bf(n, l)], r = o.length, s = e.month === 12 ? e.year + 1 : e.year, a = e.month === 12 ? 1 : e.month + 1;
  for (let i = 1; i <= 42 - r; i++)
    o.push({
      type: "next",
      year: s,
      month: a,
      date: i
    });
  return o;
}, nt = (e, t) => {
  if (e && t)
    return e.year === t.year ? e.month === t.month ? e.date - t.date : e.month - t.month : e.year - t.year;
}, rt = (e, t) => nt(e, t) === 0, Cf = { class: "nut-calendarcard" }, Sf = { class: "nut-calendarcard-header" }, Tf = { class: "nut-calendarcard-header-left" }, Nf = { class: "nut-calendarcard-header-title" }, Df = { class: "nut-calendarcard-header-right" }, _f = { class: "nut-calendarcard-content" }, If = { class: "nut-calendarcard-days" }, Bf = { class: "nut-calendarcard-days" }, Mf = ["onClick"], Lf = { class: "nut-calendarcard-day-top" }, Ef = { class: "nut-calendarcard-day-inner" }, Pf = { class: "nut-calendarcard-day-bottom" }, Mn = "NutCalendarCard", So = /* @__PURE__ */ Pe({
  name: Mn,
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
    const l = e, o = n, r = ke(Mn), a = z((() => {
      let B = new Date(Date.now());
      const M = l.modelValue;
      return Array.isArray(M) ? M.length && (B = M[0]) : M && (B = M), {
        year: B.getFullYear(),
        month: B.getMonth() + 1
      };
    })()), i = z([]), p = D(() => {
      const B = r("weekdays").map((M, C) => ({
        name: M,
        key: C
      }));
      return [...B.slice(l.firstDayOfWeek, 7), ...B.slice(0, l.firstDayOfWeek)];
    }), d = z(l.modelValue ? Bn(l.modelValue) : []);
    bt(() => {
      const B = l.modelValue ? Bn(l.modelValue) : [];
      d.value = B;
    });
    const v = (B) => {
      if (d.value = B, l.type === "single") {
        const M = Zt(B[0]);
        o("update:modelValue", M), o("change", M);
      } else if (l.type === "multiple" || l.type === "range" || l.type === "week") {
        const M = vf(B);
        o("update:modelValue", M), o("change", M);
      }
    };
    bt(() => {
      const B = kf(a.value, l.firstDayOfWeek);
      i.value = B, o("pageChange", a.value);
    });
    const g = (B) => !!(l.disableDay && l.disableDay(B) || l.startDate && Number(nt(B, ot(l.startDate))) < 0 || l.endDate && Number(nt(B, ot(l.endDate))) > 0), k = (B) => {
      if (l.type === "single" || l.type === "multiple") {
        for (const M in d.value)
          if (rt(B, d.value[M]))
            return !0;
      } else if (l.type === "range" && d.value.length === 1 && rt(d.value[0], B))
        return !0;
      return !1;
    }, $ = (B) => (l.type === "range" || l.type === "week") && d.value.length === 2 && rt(B, d.value[0]), w = (B) => (l.type === "range" || l.type === "week") && d.value.length === 2 && rt(B, d.value[1]), u = (B) => {
      if ((l.type === "range" || l.type === "week") && d.value.length === 2) {
        const M = nt(d.value[0], B), C = nt(B, d.value[1]);
        if (M && M < 0 && C && C < 0)
          return !0;
      }
      return !1;
    }, y = (B) => {
      const M = new Date(B.year, B.month - 1, B.date).getDay();
      return M === 0 || M === 6;
    }, m = (B) => {
      if (g(B))
        return ["disabled"];
      const M = [];
      return B.type === "current" && (k(B) && M.push("active"), $(B) && M.push("start"), w(B) && M.push("end"), u(B) && M.push("mid"), y(B) && M.push("weekend")), M;
    }, b = (B, M) => {
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
      a.value = {
        year: B,
        month: M
      };
    }, S = (B = 1) => {
      const M = a.value.year * 12 + a.value.month;
      let C = (M + B) % 12;
      C === 0 && (C = 12);
      const T = Math.floor((M + B - C) / 12);
      b(T, C);
    }, _ = (B) => {
      if (!(B.type === "prev" || B.type === "next" || g(B)))
        switch (o("dayClick", B), l.type) {
          case "single": {
            d.value[0] && rt(d.value[0], B) ? v([]) : v([B]);
            break;
          }
          case "multiple": {
            const M = d.value.find((C) => rt(C, B));
            v(M ? d.value.filter((C) => C !== M) : [...d.value, B]);
            break;
          }
          case "range": {
            const M = d.value.length;
            if (M === 0 || M === 2)
              v([B]);
            else if (M === 1) {
              const C = nt(d.value[0], B);
              C === 0 || C === null || C === void 0 ? v([]) : C < 0 ? v([d.value[0], B]) : v([B, d.value[0]]);
            } else
              console.warn("[NutUI] Calendar range error");
            break;
          }
          case "week": {
            if (d.value.length === 2 || d.value.length === 0) {
              const [M, C] = wf(B, l.firstDayOfWeek);
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
      jumpTo: b
    }), (B, M) => Ce((c(), f("div", Cf, [
      h("div", Sf, [
        h("div", Tf, [
          h("div", {
            class: "double-left",
            onClick: M[0] || (M[0] = (C) => S(-12))
          }, [
            oe(Be(gf))
          ]),
          h("div", {
            class: "left",
            onClick: M[1] || (M[1] = (C) => S(-1))
          }, [
            oe(Be(mf))
          ])
        ]),
        h("div", Nf, E(Be(r)("monthTitle", a.value.year, a.value.month)), 1),
        h("div", Df, [
          h("div", {
            class: "right",
            onClick: M[2] || (M[2] = (C) => S(1))
          }, [
            oe(Be(hf))
          ]),
          h("div", {
            class: "double-right",
            onClick: M[3] || (M[3] = (C) => S(12))
          }, [
            oe(Be(yf))
          ])
        ])
      ]),
      h("div", _f, [
        h("div", If, [
          (c(!0), f(x, null, ie(p.value, (C) => (c(), f("div", {
            key: C.name,
            class: L(["nut-calendarcard-day header", C.key === 0 || C.key === 6 ? "weekend" : ""])
          }, E(C.name), 3))), 128))
        ]),
        h("div", Bf, [
          (c(!0), f(x, null, ie(i.value, (C) => (c(), f("div", {
            key: `${C.year}-${C.month}-${C.date}`,
            class: L(["nut-calendarcard-day", [C.type, ...m(C)]]),
            onClick: (T) => _(C)
          }, [
            h("div", Lf, [
              I(B.$slots, "top", { day: C })
            ]),
            h("div", Ef, [
              I(B.$slots, "default", { day: C }, () => [
                ge(E(C.date), 1)
              ])
            ]),
            h("div", Pf, [
              I(B.$slots, "bottom", { day: C })
            ])
          ], 10, Mf))), 128))
        ])
      ])
    ], 512)), [
      [De, i.value.length > 0]
    ]);
  }
});
Re(So);
const To = Symbol("nut-checkbox"), { create: Af, componentName: tt } = j("checkbox"), zf = Af({
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
    const l = Ze(xe(e, "disabled")), o = Le(To, null), r = ce({
      partialSelect: e.indeterminate
    }), s = D(() => !!o), a = D(() => s.value ? o.value.value.includes(e.label) : e.modelValue), i = D(() => s.value && o.disabled.value ? o.disabled.value : l.value), p = D(() => !!e.modelValue), d = D(() => i.value ? "nut-checkbox__icon--disable" : r.partialSelect ? "nut-checkbox__icon--indeterminate" : a.value ? "nut-checkbox__icon" : "nut-checkbox__icon--unchecked");
    let v = "";
    const g = (y, m) => {
      v = "click", t("update:modelValue", y), t("change", y, m);
    };
    Q(
      () => e.modelValue,
      (y) => {
        v == "click" ? v = "" : t("change", y);
      }
    );
    const k = () => {
      const { iconSize: y } = e, m = {
        CheckNormal: n.icon ? n.icon : Kt,
        Checked: n.checkedIcon ? n.checkedIcon : Zn,
        CheckDisabled: n.indeterminate ? n.indeterminate : Ml
      }, b = r.partialSelect ? m.CheckDisabled : a.value ? m.Checked : m.CheckNormal, S = Ne(y);
      return be(b, {
        width: S,
        height: S,
        size: S,
        class: d.value
      });
    }, $ = () => {
      var y;
      return be(
        "view",
        {
          class: `${tt}__label ${i.value ? `${tt}__label--disabled` : ""}`
        },
        (y = n.default) == null ? void 0 : y.call(n)
      );
    }, w = () => {
      var y;
      return be(
        "view",
        {
          class: `${tt}__button ${a.value && `${tt}__button--active`} ${i.value ? `${tt}__button--disabled` : ""}`
        },
        (y = n.default) == null ? void 0 : y.call(n)
      );
    }, u = () => {
      var y, m;
      if (!i.value) {
        if (p.value && r.partialSelect) {
          r.partialSelect = !1, g(p.value, (y = n.default) == null ? void 0 : y.call(n)[0].children);
          return;
        }
        if (g(!p.value, (m = n.default) == null ? void 0 : m.call(n)[0].children), s.value) {
          const b = o.value.value, S = o.max.value, { label: _ } = e, B = b.indexOf(_);
          B > -1 ? b.splice(B, 1) : B <= -1 && (b.length < S || !S) && b.push(_), o.updateValue(b);
        }
      }
    };
    return ve(() => {
      s.value && o.link(je());
    }), xt(() => {
      s.value && o.unlink(je());
    }), Q(
      () => e.indeterminate,
      (y) => {
        r.partialSelect = y;
      }
    ), () => be(
      "view",
      {
        class: `${tt} ${tt}--${e.shape} ${e.textPosition === "left" ? `${tt}--reverse` : ""}`,
        onClick: u
      },
      [e.shape == "button" ? w() : [k(), $()]]
    );
  }
}), { create: Vf, componentName: Of } = j("checkbox-group"), Hf = Vf({
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
    }), r = (d) => {
      d.proxy && o.children.push(d.proxy);
    }, s = (d) => {
      d.proxy && (o.children = o.children.filter((v) => v !== d.proxy));
    }, a = (d) => {
      n("update:modelValue", d), n("change", d);
    }, i = (d) => {
      const v = [];
      d && o.children.forEach((g) => {
        g != null && g.disabled || v.push(g == null ? void 0 : g.label);
      }), n("update:modelValue", v);
    }, p = () => {
      const d = o.children.filter((v) => v != null && v.disabled ? !1 : !e.modelValue.includes(v.label)).map((v) => v.label);
      n("update:modelValue", d);
    };
    return Ee(To, {
      value: D(() => e.modelValue),
      disabled: D(() => e.disabled),
      max: D(() => e.max),
      updateValue: a,
      link: r,
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
          class: Of
        },
        (d = t.default) == null ? void 0 : d.call(t)
      );
    };
  }
}), Rf = {
  text: "text",
  value: "value",
  children: "children",
  className: "className"
}, Ff = (e, t) => {
  const n = ce({
    formattedColumns: e.columns
  }), l = D(() => Z(Z({}, Rf), e.fieldNames)), o = z([]), r = D(() => {
    const u = l.value;
    return d.value.map((y, m) => {
      const b = y.findIndex((S) => S[u.value] === o.value[m]);
      return b === -1 ? 0 : b;
    });
  }), s = z([]), a = (u) => {
    u && s.value.length < d.value.length && s.value.push(u);
  }, i = D(() => {
    const u = l.value;
    return d.value.map((y, m) => y.find((b) => b[u.value] === o.value[m]) || y[0]);
  }), p = D(() => {
    const u = n.formattedColumns[0], y = l.value;
    if (u) {
      if (Array.isArray(u))
        return "multiple";
      if (y.children in u)
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
  }), v = (u, y) => {
    const m = [], b = l.value;
    let S = {
      text: "",
      value: "",
      [b.children]: u
    }, _ = 0;
    for (; S && S[b.children]; ) {
      const B = S[b.children], M = y[_];
      let C = B.findIndex((T) => T[b.value] === M);
      C === -1 && (C = 0), S = S[b.children][C], _++, m.push(B);
    }
    return m;
  }, g = () => {
    t("cancel", {
      selectedValue: o.value,
      selectedOptions: i.value
    });
  }, k = (u, y) => {
    var b;
    const m = l.value;
    if (y && Object.keys(y).length) {
      if (o.value = o.value ? o.value : [], p.value === "cascade") {
        o.value[u] = (b = y[m.value]) != null ? b : "";
        let S = u, _ = y;
        for (; _ && _[m.children] && _[m.children][0]; )
          o.value[S + 1] = _[m.children][0][m.value], S++, _ = _[m.children][0];
        _ && _[m.children] && _[m.children].length === 0 && (o.value = o.value.slice(0, S + 1));
      } else
        o.value[u] = Object.prototype.hasOwnProperty.call(y, m.value) ? y[m.value] : "";
      t("change", {
        columnIndex: u,
        selectedValue: o.value,
        selectedOptions: i.value
      });
    }
  }, $ = () => {
    const u = l.value;
    o.value && !o.value.length && d.value.forEach((y) => {
      o.value.push(y[0][u.value]);
    }), t("confirm", {
      selectedValue: o.value,
      selectedOptions: i.value
    });
  }, w = (u, y) => JSON.stringify(u) === JSON.stringify(y);
  return Q(
    () => e.modelValue,
    (u) => {
      w(u, o.value) || (o.value = u);
    },
    { deep: !0, immediate: !0 }
  ), Q(
    o,
    (u) => {
      w(u, e.modelValue) || t("update:modelValue", u);
    },
    { deep: !0 }
  ), Q(
    () => e.columns,
    (u) => {
      n.formattedColumns = u;
    }
  ), de(Z({}, he(n)), {
    columnsType: p,
    columnsList: d,
    columnFieldNames: l,
    cancel: g,
    changeHandler: k,
    confirm: $,
    defaultValues: o,
    defaultIndexes: r,
    pickerColumn: s,
    swipeRef: a,
    selectedOptions: i,
    isSameValue: w
  });
}, { create: Wf } = j("picker-column"), Yf = Wf({
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
    }), o = z(null), r = z(!1), s = z(0), a = z(0), i = 200, p = 300, d = 15, v = D(() => ({
      transition: `transform ${a.value}ms cubic-bezier(0.17, 0.89, 0.45, 1)`,
      transform: `rotate3d(1, 0, 0, ${s.value})`,
      top: `calc(50% - ${+e.optionHeight / 2}px)`
    })), g = D(() => {
      const { optionHeight: T } = e;
      return {
        transition: `transform ${a.value}ms cubic-bezier(0.17, 0.89, 0.45, 1)`,
        transform: `translate3d(0, ${l.scrollDistance}px, 0)`,
        top: `calc(50% - ${+T / 2}px)`,
        height: `${T}px`
      };
    }), k = (T) => `transform: rotate3d(1, 0, 0, ${-l.rotation * T}deg) translate3d(0px, 0px, 104px)`, $ = D(() => ({
      backgroundSize: `100% ${(+e.visibleOptionNum - 1) * +e.optionHeight / 2}px`
    })), w = (T) => {
      if (n.start(T), r.value && !e.taro) {
        const P = o.value, { transform: O } = window.getComputedStyle(P);
        if (e.threeDimensional) {
          const K = Math.floor(parseInt(s.value) / 360), G = +O.split(", ")[5], le = +O.split(", ")[6] < 0 ? 180 : 0, Y = K * 360 + Math.acos(G) / Math.PI * 180 + le;
          l.scrollDistance = -Math.abs((Y / l.rotation - 1) * +e.optionHeight);
        } else
          l.scrollDistance = +O.slice(7, O.length - 1).split(", ")[5];
      }
      dt(T, !0), l.touchParams.startY = n.deltaY.value, l.touchParams.startTime = Date.now(), l.transformY = l.scrollDistance;
    }, u = (T) => {
      n.move(T), n.isVertical() && (r.value = !0, dt(T, !0)), l.touchParams.lastY = n.deltaY.value;
      let P = l.touchParams.lastY - l.touchParams.startY;
      _(P);
    }, y = () => {
      l.touchParams.lastY = n.deltaY.value, l.touchParams.lastTime = Date.now();
      let T = l.touchParams.lastY - l.touchParams.startY, P = l.touchParams.lastTime - l.touchParams.startTime;
      if (P <= p && Math.abs(T) > d) {
        const O = m(T, P);
        _(O, "end", +e.swipeDuration);
        return;
      } else
        _(T, "end");
      setTimeout(() => {
        n.reset(), r.value = !1;
      }, 0);
    }, m = (T, P) => (T = Math.abs(T / P) / 3e-3 * (T < 0 ? -1 : 1), T), b = (T) => T >= l.currIndex + 8 || T <= l.currIndex - 8, S = (T = 0, P, O = i, K) => {
      P === "end" ? a.value = O : a.value = 0, s.value = K, l.scrollDistance = T;
    }, _ = (T, P, O) => {
      const { optionHeight: K } = e;
      let G = T + l.transformY;
      if (P === "end") {
        G > 0 && (G = 0), G < -(e.column.length - 1) * +K && (G = -(e.column.length - 1) * +K);
        let le = Math.round(G / +K) * +K, Y = `${(Math.abs(Math.round(le / +K)) + 1) * l.rotation}deg`;
        S(le, P, O, Y), l.currIndex = Math.abs(Math.round(le / +K)) + 1;
      } else {
        let le = 0, Y = (-G / +K + 1) * l.rotation;
        const U = (e.column.length + 1) * l.rotation, R = 0;
        le = ze(Y, R, U), R < le && le < U && (S(G, null, void 0, le + "deg"), l.currIndex = Math.abs(Math.round(G / +K)) + 1);
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
      r.value = !1, a.value = 0, B();
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
    }), de(Z(Z({}, he(l)), he(e)), {
      setRollerStyle: k,
      isHidden: b,
      roller: o,
      onTouchStart: w,
      onTouchMove: u,
      onTouchEnd: y,
      touchRollerStyle: v,
      touchTileStyle: g,
      setMove: _,
      stopMomentum: C,
      pxCheck: Ne,
      maskStyles: $
    });
  }
});
function jf(e, t, n, l, o, r) {
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
      (c(!0), f(x, null, ie(e.column, (s, a) => {
        var i;
        return c(), f(x, {
          key: (i = s[e.fieldNames.value]) != null ? i : a
        }, [
          s && s[e.fieldNames.text] && e.threeDimensional ? (c(), f("view", {
            key: 0,
            class: L(["nut-picker-roller-item", {
              "nut-picker-roller-item-hidden": e.isHidden(a + 1),
              [s[e.fieldNames.className]]: s[e.fieldNames.className]
            }]),
            style: A(e.setRollerStyle(a + 1))
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
const Uf = /* @__PURE__ */ q(Yf, [["render", jf]]), Kf = {
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
}, { create: Xf } = j("picker"), qf = "NutPicker", Zf = Xf({
  components: {
    NutPickerColumn: Uf
  },
  props: Kf,
  emits: ["cancel", "change", "confirm", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = ke(qf), { changeHandler: l, confirm: o, defaultValues: r, columnsList: s, columnsType: a, columnFieldNames: i, cancel: p } = Ff(
      e,
      t
    ), d = z([]), v = ($) => {
      $ && d.value.length < s.value.length && d.value.push($);
    }, g = D(() => {
      const $ = {};
      return $.height = `${+e.visibleOptionNum * +e.optionHeight}px`, $["--lineHeight"] = `${+e.optionHeight}px`, $;
    });
    return {
      columnsType: a,
      columnsList: s,
      columnFieldNames: i,
      cancel: p,
      changeHandler: l,
      confirmHandler: () => {
        d.value.length > 0 && d.value.forEach(($) => {
          $.stopMomentum();
        }), o();
      },
      defaultValues: r,
      translate: n,
      pickerColumn: d,
      swipeRef: v,
      columnStyle: g
    };
  }
}), Gf = { class: "nut-picker" }, Jf = {
  key: 0,
  class: "nut-picker__bar"
}, Qf = { class: "nut-picker__title" };
function xf(e, t, n, l, o, r) {
  const s = W("nut-picker-column");
  return c(), f("div", Gf, [
    e.showToolbar ? (c(), f("view", Jf, [
      h("view", {
        class: "nut-picker__left",
        onClick: t[0] || (t[0] = (...a) => e.cancel && e.cancel(...a))
      }, E(e.cancelText || e.translate("cancel")), 1),
      h("view", Qf, E(e.title), 1),
      h("view", {
        class: "nut-picker__right",
        onClick: t[1] || (t[1] = (...a) => e.confirmHandler && e.confirmHandler(...a))
      }, E(e.okText || e.translate("confirm")), 1)
    ])) : N("", !0),
    I(e.$slots, "top"),
    h("view", {
      class: "nut-picker__column",
      style: A(e.columnStyle)
    }, [
      (c(!0), f(x, null, ie(e.columnsList, (a, i) => (c(), f("view", {
        key: i,
        class: "nut-picker__columnitem"
      }, [
        oe(s, {
          ref_for: !0,
          ref: e.swipeRef,
          column: a,
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
const No = /* @__PURE__ */ q(Zf, [["render", xf]]), { create: ep } = j("date-picker"), Ln = (/* @__PURE__ */ new Date()).getFullYear();
function Yt(e) {
  return al(e) && !isNaN(e.getTime());
}
const tp = {
  day: "日",
  year: "年",
  month: "月",
  hour: "时",
  minute: "分",
  seconds: "秒"
}, np = ep({
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
      default: () => new Date(Ln - 10, 0, 1),
      validator: Yt
    },
    maxDate: {
      type: Date,
      default: () => new Date(Ln + 10, 11, 31),
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
      let y = Math.max(u.getTime(), e.minDate.getTime());
      return y = Math.min(y, e.maxDate.getTime()), new Date(y);
    };
    function o(u, y) {
      return 32 - new Date(u, y - 1, 32).getDate();
    }
    const r = (u, y) => {
      const m = u == "min" ? e.minDate : e.maxDate, b = m.getFullYear();
      let S = 1, _ = 1, B = 0, M = 0;
      u === "max" && (S = 12, _ = o(y.getFullYear(), y.getMonth() + 1), B = 23, M = 59);
      let C = M;
      return y.getFullYear() === b && (S = m.getMonth() + 1, y.getMonth() + 1 === S && (_ = m.getDate(), y.getDate() === _ && (B = m.getHours(), y.getHours() === B && (M = m.getMinutes(), y.getMinutes() === M && (C = m.getSeconds()))))), {
        [`${u}Year`]: b,
        [`${u}Month`]: S,
        [`${u}Date`]: _,
        [`${u}Hour`]: B,
        [`${u}Minute`]: M,
        [`${u}Seconds`]: C
      };
    }, s = D(() => {
      const { maxYear: u, maxDate: y, maxMonth: m, maxHour: b, maxMinute: S, maxSeconds: _ } = r("max", n.currentDate), { minYear: B, minDate: M, minMonth: C, minHour: T, minMinute: P, minSeconds: O } = r("min", n.currentDate);
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
          range: [M, y]
        },
        {
          type: "hour",
          range: [T, b]
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
    }), a = D(() => s.value.map((y, m) => d(y.range[0], y.range[1], v(y.type), y.type, m))), i = ({
      columnIndex: u,
      selectedValue: y,
      selectedOptions: m
    }) => {
      let b = [];
      y.forEach((C) => {
        b.push(C);
      }), e.type == "month-day" && b.length < 3 && b.unshift(new Date(n.currentDate || e.minDate || e.maxDate).getFullYear()), e.type == "year-month" && b.length < 3 && b.push(new Date(n.currentDate || e.minDate || e.maxDate).getDate());
      const S = Number(b[0]), _ = Number(b[1]) - 1, B = Math.min(Number(b[2]), o(Number(b[0]), Number(b[1])));
      let M = null;
      if (e.type === "date" || e.type === "month-day" || e.type === "year-month")
        M = new Date(S, _, B);
      else if (e.type === "datetime")
        M = new Date(S, _, B, Number(b[3]), Number(b[4]));
      else if (e.type === "datehour")
        M = new Date(S, _, B, Number(b[3]));
      else if (e.type === "hour-minute" || e.type === "time") {
        M = new Date(n.currentDate);
        const C = M.getFullYear(), T = M.getMonth(), P = M.getDate();
        M = new Date(C, T, P, Number(b[0]), Number(b[1]), Number(b[2] || 0));
      }
      n.currentDate = l(M), t("change", { columnIndex: u, selectedValue: y, selectedOptions: m });
    }, p = (u, y) => {
      const { formatter: m, isShowChinese: b } = e;
      let S = null;
      if (m)
        S = m(u, { text: Qe(y, 2), value: Qe(y, 2) });
      else {
        const _ = Qe(y, 2), B = b ? tp[u] : "";
        S = { text: _ + B, value: _ };
      }
      return S;
    }, d = (u, y, m, b, S) => {
      const _ = [];
      let B = 0;
      for (; u <= y; )
        _.push(p(b, u)), b === "minute" ? u += e.minuteStep : u++, u <= Number(m) && B++;
      return n.selectedValue[S] = _[B].value, e.filter ? e.filter(b, _) : _;
    }, v = (u) => u === "year" ? n.currentDate.getFullYear() : u === "month" ? n.currentDate.getMonth() + 1 : u === "day" ? n.currentDate.getDate() : u === "hour" ? n.currentDate.getHours() : u === "minute" ? n.currentDate.getMinutes() : u === "seconds" ? n.currentDate.getSeconds() : 0, g = (u) => {
      t("cancel", u);
    }, k = (u) => {
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
    }, w = (u) => {
      const y = [
        u.getFullYear(),
        u.getMonth() + 1,
        u.getDate(),
        u.getHours(),
        u.getMinutes(),
        u.getSeconds()
      ];
      return $(y.map((m) => String(m)));
    };
    return Rn(() => {
      n.currentDate = l(e.modelValue);
    }), Q(
      () => e.modelValue,
      (u) => {
        const y = l(u);
        JSON.stringify(y) === JSON.stringify(n.currentDate) || (n.currentDate = y, n.selectedValue = w(y));
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
    ), de(Z({}, he(n)), {
      changeHandler: i,
      closeHandler: g,
      confirm: k,
      columns: a
    });
  }
});
function op(e, t, n, l, o, r) {
  const s = W("nut-picker");
  return c(), ee(s, {
    modelValue: e.selectedValue,
    "onUpdate:modelValue": t[0] || (t[0] = (a) => e.selectedValue = a),
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
const lp = /* @__PURE__ */ q(np, [["render", op]]), sp = ["min", "max", "disabled", "readonly", "value"], zt = /* @__PURE__ */ Pe({
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
    const n = e, l = t, o = Ze(xe(n, "disabled")), r = D(() => {
      const u = "nut-input-number";
      return {
        [u]: !0,
        [`${u}--disabled`]: o.value
      };
    }), s = (u) => Number(u).toFixed(Number(n.decimalPlaces)), a = (u) => {
      const y = u.target;
      l("update:modelValue", y.value, u), l("change", y.value, u);
    }, i = (u, y) => {
      let m = s(u);
      l("update:modelValue", m, y), Number(n.modelValue) !== Number(m) && l("change", m, y);
    }, p = (u = Number(n.modelValue)) => u < Number(n.max) && !o.value, d = (u = Number(n.modelValue)) => u > Number(n.min) && !o.value, v = (u) => {
      if (o.value)
        return;
      l("reduce", u);
      let y = Number(n.modelValue) - Number(n.step);
      d() && y >= Number(n.min) ? i(y, u) : (i(Number(n.min), u), l("overlimit", u, "reduce"));
    }, g = (u) => {
      if (o.value)
        return;
      l("add", u);
      let y = Number(n.modelValue) + Number(n.step);
      p() && y <= Number(n.max) ? i(y, u) : (i(Number(n.max), u), l("overlimit", u, "add"));
    }, k = (u) => {
      o.value || n.readonly || l("focus", u);
    }, $ = (u) => {
      if (o.value || n.readonly)
        return;
      const y = u.target;
      let m = Number(y.value);
      m < Number(n.min) ? m = Number(n.min) : m > Number(n.max) && (m = Number(n.max)), i(m, u), l("blur", u);
    }, w = (u) => {
      let y = Number(u);
      return y < Number(n.min) ? y = Number(n.min) : y > Number(n.max) && (y = Number(n.max)), y;
    };
    return Q(
      () => [n.max, n.min],
      () => {
        Number(n.min) > Number(n.max) && console.warn("[NutUI] <InputNumber>", "props.max < props.min");
        const u = w(n.modelValue);
        u !== Number(n.modelValue) && i(u, {});
      }
    ), (u, y) => (c(), f("view", {
      class: L(r.value)
    }, [
      h("view", {
        class: L(["nut-input-number__icon nut-input-number__left", { "nut-input-number__icon--disabled": !d() }]),
        onClick: v
      }, [
        I(u.$slots, "left-icon", {}, () => [
          oe(Be(_a), {
            width: Be(Ne)(u.buttonSize),
            height: Be(Ne)(u.buttonSize)
          }, null, 8, ["width", "height"])
        ])
      ], 2),
      h("input", {
        type: "number",
        min: u.min,
        max: u.max,
        style: A({ width: Be(Ne)(u.inputWidth), height: Be(Ne)(u.buttonSize) }),
        disabled: Be(o),
        readonly: u.readonly,
        value: u.modelValue,
        onInput: a,
        onBlur: $,
        onFocus: k
      }, null, 44, sp),
      h("view", {
        class: L(["nut-input-number__icon nut-input-number__right", { "nut-input-number__icon--disabled": !p() }]),
        onClick: g
      }, [
        I(u.$slots, "right-icon", {}, () => [
          oe(Be(qa), {
            width: Be(Ne)(u.buttonSize),
            height: Be(Ne)(u.buttonSize)
          }, null, 8, ["width", "height"])
        ])
      ], 2)
    ], 2));
  }
});
Re(zt);
function En(e, t, n) {
  const l = e.indexOf(t);
  return l === -1 ? e : t === "-" && l !== 0 ? e.slice(0, l) : e.slice(0, l + 1) + e.slice(l).replace(n, "");
}
function ap(e, t = !0, n = !0) {
  t ? e = En(e, ".", /\./g) : e = e.split(".")[0], n ? e = En(e, "-", /-/g) : e = e.replace(/-/, "");
  const l = t ? /[^-0-9.]/g : /[^-0-9]/g;
  return e.replace(l, "");
}
function rp(e) {
  return e === "number" ? {
    type: "text",
    inputmode: "decimal"
  } : e === "digit" ? {
    type: "tel",
    inputmode: "numeric"
  } : { type: e };
}
const { componentName: ip, create: up } = j("input"), cp = up({
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
  components: { MaskClose: Ca },
  emits: ["update:modelValue", "blur", "focus", "clear", "keypress", "click", "clickInput", "confirm"],
  expose: ["focus", "blur", "select"],
  setup(e, { emit: t }) {
    const n = Ze(xe(e, "disabled")), l = z(!1), o = z(), r = () => {
      var C;
      return String((C = e.modelValue) != null ? C : "");
    }, s = (C) => be("input", Z({}, rp(C))), a = ce({
      focused: !1,
      validateFailed: !1,
      // 校验失败
      validateMessage: ""
      // 校验信息
    }), i = D(() => {
      const C = ip;
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
        C = ap(C, O, O);
      }
      e.formatter && T === e.formatTrigger && (C = e.formatter(C)), ((P = o == null ? void 0 : o.value) == null ? void 0 : P.value) !== C && (o.value.value = C), C !== e.modelValue && t("update:modelValue", C);
    }, g = (C) => {
      n.value || e.readonly || (l.value = !0, t("focus", C));
    }, k = (C) => {
      if (n.value || e.readonly)
        return;
      setTimeout(() => {
        l.value = !1;
      }, 200);
      let P = C.target.value;
      e.maxLength && P.length > Number(e.maxLength) && (P = P.slice(0, Number(e.maxLength))), v(r(), "onBlur"), t("blur", C);
    }, $ = (C) => {
      C.stopPropagation(), !n.value && (t("update:modelValue", "", C), t("clear", "", C));
    }, w = () => {
      a.validateFailed && (a.validateFailed = !1, a.validateMessage = "");
    }, u = (C) => {
      n.value || t("clickInput", C);
    }, y = (C) => {
      t("click", C);
    }, m = ({ target: C }) => {
      C.composing = !0;
    }, b = ({ target: C }) => {
      C.composing && (C.composing = !1, C.dispatchEvent(new Event("input")));
    };
    return Q(
      () => e.modelValue,
      () => {
        v(r()), w();
      }
    ), ve(() => {
      v(r(), e.formatTrigger);
    }), {
      renderInput: s,
      inputRef: o,
      active: l,
      classes: i,
      styles: p,
      disabled: n,
      onInput: d,
      onFocus: g,
      onBlur: k,
      clear: $,
      startComposing: m,
      endComposing: b,
      onClick: y,
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
      getModelValue: r
    };
  }
}), dp = { class: "nut-input-value" }, fp = { class: "nut-input-inner" }, pp = {
  key: 0,
  class: "nut-input-left-box"
}, mp = { class: "nut-input-box" }, hp = {
  key: 0,
  class: "nut-input-word-limit"
}, gp = { class: "nut-input-word-num" }, yp = { class: "nut-input-right-box" };
function vp(e, t, n, l, o, r) {
  const s = W("MaskClose");
  return c(), f("view", {
    class: L(e.classes),
    onClick: t[1] || (t[1] = (...a) => e.onClick && e.onClick(...a))
  }, [
    h("view", dp, [
      h("view", fp, [
        e.$slots.left ? (c(), f("view", pp, [
          I(e.$slots, "left")
        ])) : N("", !0),
        h("view", mp, [
          (c(), ee(Ve(e.renderInput(e.type)), {
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
          e.showWordLimit && e.maxLength ? (c(), f("view", hp, [
            h("span", gp, E(e.getModelValue() ? e.getModelValue().length : 0), 1),
            ge("/" + E(e.maxLength), 1)
          ])) : N("", !0)
        ]),
        e.clearable && !e.readonly ? Ce((c(), f("view", {
          key: 1,
          class: "nut-input-clear-box",
          onClick: t[0] || (t[0] = (...a) => e.clear && e.clear(...a))
        }, [
          I(e.$slots, "clear", {}, () => [
            oe(s, wt({ class: "nut-input-clear" }, e.$attrs, {
              size: e.clearSize,
              width: e.clearSize,
              height: e.clearSize
            }), null, 16, ["size", "width", "height"])
          ])
        ], 512)), [
          [De, (e.active || e.showClearIcon) && e.getModelValue().length > 0]
        ]) : N("", !0),
        h("view", yp, [
          I(e.$slots, "right")
        ])
      ])
    ])
  ], 2);
}
const $p = /* @__PURE__ */ q(cp, [["render", vp]]), Do = Symbol("nut-radio"), { componentName: Je, create: bp } = j("radio"), _o = bp({
  components: {
    CheckNormal: Kt,
    CheckChecked: kn
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
    let o = Le(Do, null);
    const r = D(() => o.label.value === e.label), s = D(() => n.value ? "nut-radio__icon--disable" : r.value ? "nut-radio__icon" : "nut-radio__icon--unchecked"), a = () => {
      const { iconSize: g } = e, k = {
        CheckNormal: t.icon ? t.icon : Kt,
        Checked: t.checkedIcon ? t.checkedIcon : kn
      }, $ = r.value ? k.Checked : k.CheckNormal, w = Ne(g);
      return be($, {
        width: w,
        height: w,
        class: s.value
      });
    }, i = () => {
      var g;
      return be(
        "view",
        {
          class: `${Je}__label ${n.value ? `${Je}__label--disabled` : ""}`
        },
        (g = t.default) == null ? void 0 : g.call(t)
      );
    }, p = () => {
      var g;
      return be(
        "view",
        {
          class: `${Je}__button ${r.value && `${Je}__button--active`} ${Je}__button--${l.value} ${e.disabled ? `${Je}__button--disabled` : ""}`
        },
        (g = t.default) == null ? void 0 : g.call(t)
      );
    }, d = () => {
      r.value || n.value || o.updateValue(e.label);
    }, v = D(() => o.position.value === "left");
    return () => be(
      "view",
      {
        class: `${Je} ${Je}--${e.shape} ${v.value ? `${Je}--reverse` : ""}`,
        onClick: d
      },
      [e.shape === "button" ? p() : [a(), i()]]
    );
  }
}), { componentName: Pn, create: wp } = j("radio-group"), Io = wp({
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
    return Ee(Do, {
      label: bn(D(() => e.modelValue)),
      position: bn(D(() => e.textPosition)),
      updateValue: l
    }), Q(
      () => e.modelValue,
      (o) => t("change", o)
    ), () => {
      var o;
      return be(
        "view",
        {
          class: `${Pn} ${Pn}--${e.direction}`
        },
        (o = n.default) == null ? void 0 : o.call(n)
      );
    };
  }
}), { create: kp } = j("rate"), Cp = kp({
  props: {
    count: {
      type: [String, Number],
      default: 5
    },
    modelValue: {
      type: [String, Number],
      default: 0
    },
    customIcon: {
      type: Object,
      default: () => Cn
    },
    size: {
      type: [String, Number],
      default: void 0
    },
    activeColor: {
      type: String,
      default: ""
    },
    voidColor: {
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
    allowHalf: {
      type: Boolean,
      default: !1
    },
    touchable: {
      type: Boolean,
      default: !0
    },
    spacing: {
      type: [String, Number],
      default: void 0
    }
  },
  components: { StarFillN: Cn },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t, slots: n }) {
    const l = Ze(xe(e, "disabled")), o = z([]), r = (v) => {
      t("update:modelValue", v), t("change", v);
    }, s = (v, g) => {
      if (l.value || e.readonly)
        return;
      let k = 0;
      g === 1 && e.modelValue === g ? k = 0 : (k = g, e.allowHalf && v == 2 && (k -= 0.5)), r(k);
    }, a = (v, g, k) => {
      let $ = 0;
      for (let w = g.value.length - 1; w >= 0; w--) {
        const u = g.value[w];
        if (v > u.offsetLeft) {
          k ? $ = w + (v > u.offsetLeft + u.clientWidth / 2 ? 1 : 0.5) : $ = w + 1;
          break;
        }
      }
      return $;
    }, i = et(), p = {
      onTouchStart(v) {
        !e.touchable || e.readonly || i.start(v);
      },
      onTouchMove(v) {
        e.touchable && (i.move(v), i.isHorizontal() && o.value && (v.preventDefault(), r(a(i.moveX.value, o, e.allowHalf))));
      }
    }, d = Math.random().toString(36).slice(-8);
    return de(Z({}, p), {
      onClick: s,
      pxCheck: Ne,
      rateRefs: o,
      refRandomId: d,
      renderIcon: ft,
      slots: n,
      disabled: l
    });
  }
}), Sp = ["id"], Tp = { class: "nut-rate-item__icon--full" }, Np = {
  key: 0,
  class: "nut-rate-item__icon--half"
}, Dp = {
  key: 1,
  class: "nut-rate-item__icon--half"
};
function _p(e, t, n, l, o, r) {
  return c(), f("view", {
    class: "nut-rate",
    onTouchstart: t[0] || (t[0] = (...s) => e.onTouchStart && e.onTouchStart(...s)),
    onTouchmove: t[1] || (t[1] = (...s) => e.onTouchMove && e.onTouchMove(...s))
  }, [
    (c(!0), f(x, null, ie(Number(e.count), (s) => (c(), f("view", {
      id: "rateRefs-" + e.refRandomId + s,
      key: s,
      ref_for: !0,
      ref: "rateRefs",
      class: "nut-rate-item",
      style: A(s < Number(e.count) ? { marginRight: e.pxCheck(e.spacing) } : {})
    }, [
      h("view", Tp, [
        (c(), ee(Ve(
          e.renderIcon(e.customIcon, {
            width: e.size,
            height: e.size,
            size: e.size,
            color: s <= Number(e.modelValue) ? e.activeColor : e.voidColor
          })
        ), {
          class: L(["nut-rate-item__icon", { "nut-rate-item__icon--disabled": e.disabled || s > Number(e.modelValue) }]),
          onClick: (a) => e.onClick(1, s)
        }, null, 8, ["class", "onClick"]))
      ]),
      e.allowHalf && Number(e.modelValue) + 1 > s ? (c(), f("view", Np, [
        (c(), ee(Ve(
          e.renderIcon(e.customIcon, {
            width: e.size,
            height: e.size,
            size: e.size,
            color: s <= Number(e.modelValue) + 1 ? e.activeColor : e.voidColor
          })
        ), {
          class: "nut-rate-item__icon",
          onClick: (a) => e.onClick(2, s)
        }, null, 8, ["onClick"]))
      ])) : e.allowHalf && Number(e.modelValue) + 1 < s ? (c(), f("view", Dp, [
        (c(), ee(Ve(e.renderIcon(e.customIcon, { width: e.size, height: e.size, size: e.size, color: e.voidColor })), {
          class: "nut-rate-item__icon nut-rate-item__icon--disabled",
          onClick: (a) => e.onClick(2, s)
        }, null, 8, ["onClick"]))
      ])) : N("", !0)
    ], 12, Sp))), 128))
  ], 32);
}
const Bo = /* @__PURE__ */ q(Cp, [["render", _p]]), { create: Ip } = j("short-password"), Bp = "NutShortPassword", Mp = Ip({
  components: {
    NutPopup: Ae,
    Tips: xn
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
    const n = ke(Bp), l = z(e.modelValue), o = D(() => i(Number(e.length))), r = z(e.visible), s = (d) => {
      d.stopPropagation(), t("focus");
    };
    Q(
      () => e.visible,
      (d) => {
        r.value = d;
      }
    ), Q(
      () => e.modelValue,
      (d) => {
        l.value = d, String(d).length === o.value && t("complete", d);
      }
    );
    const a = () => {
      t("update:visible", !1), t("close");
    }, i = (d) => Math.min(Math.max(4, d), 6);
    return {
      comLen: o,
      realInput: l,
      onTouchStart: s,
      range: i,
      close: a,
      onTips: () => {
        t("tips");
      },
      show: r,
      translate: n
    };
  }
}), Lp = { class: "nut-short-password-title" }, Ep = { class: "nut-short-password-subtitle" }, Pp = { class: "nut-short-password-wrapper" }, Ap = {
  key: 0,
  class: "nut-short-password__item-icon"
}, zp = { class: "nut-short-password__message" }, Vp = { class: "nut-short-password--error" }, Op = {
  key: 0,
  class: "nut-short-password--forget"
};
function Hp(e, t, n, l, o, r) {
  const s = W("tips"), a = W("nut-popup");
  return c(), f("view", null, [
    oe(a, {
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
        h("view", Lp, E(e.title || e.translate("title")), 1),
        h("view", Ep, E(e.desc || e.translate("desc")), 1),
        h("div", Pp, [
          h("view", {
            class: "nut-short-password__list",
            onTouchstart: t[0] || (t[0] = (...i) => e.onTouchStart && e.onTouchStart(...i))
          }, [
            (c(!0), f(x, null, ie(new Array(e.comLen), (i, p) => (c(), f("view", {
              key: p,
              class: "nut-short-password__item"
            }, [
              String(e.realInput).length > p ? (c(), f("view", Ap)) : N("", !0)
            ]))), 128))
          ], 32)
        ]),
        h("view", zp, [
          h("view", Vp, E(e.errorMsg), 1),
          e.tips || e.translate("tips") ? (c(), f("view", Op, [
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
const Rp = /* @__PURE__ */ q(Mp, [["render", Hp]]), { create: Fp } = j("textarea"), Wp = "NutTextarea", Yp = Fp({
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
    const n = Ze(xe(e, "disabled")), l = ke(Wp), o = z(), r = D(() => {
      const $ = "nut-textarea";
      return {
        [$]: !0,
        [`${$}--disabled`]: n.value
      };
    });
    ve(() => {
      e.modelValue && i(String(e.modelValue)), e.autosize && Se(a);
    });
    const s = D(() => ({
      textAlign: e.textAlign
      // resize: props.autosize ? 'vertical' : 'none'
    })), a = () => {
      let $ = o.value;
      $.style.height = "auto";
      let w = $.scrollHeight;
      if (typeof e.autosize == "object") {
        const { maxHeight: u, minHeight: y } = e.autosize;
        u !== void 0 && (w = Math.min(w, u)), y !== void 0 && (w = Math.max(w, y));
      }
      w && ($.style.height = w + "px");
    };
    Q(
      () => e.modelValue,
      () => {
        e.autosize && Se(a);
      }
    );
    const i = ($, w) => {
      e.maxLength && $.length > Number(e.maxLength) && ($ = $.substring(0, Number(e.maxLength))), t("update:modelValue", $, w), t("change", $, w);
    };
    return {
      textareaRef: o,
      classes: r,
      styles: s,
      disabled: n,
      change: ($) => {
        if (!$.target.composing) {
          const w = $.target;
          let u = w.value;
          e.maxLength && u.length > Number(e.maxLength) && (u = u.slice(0, Number(e.maxLength))), i(w.value, $);
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
}), jp = ["rows", "disabled", "readonly", "value", "maxlength", "placeholder", "autofocus"], Up = {
  key: 0,
  class: "nut-textarea__limit"
};
function Kp(e, t, n, l, o, r) {
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
    }, null, 44, jp),
    e.limitShow ? (c(), f("view", Up, E(e.modelValue ? e.modelValue.length : 0) + "/" + E(e.maxLength), 1)) : N("", !0)
  ], 2);
}
const Xp = /* @__PURE__ */ q(Yp, [["render", Kp]]);
class qp {
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
let Zp = class {
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
          var r;
          (r = t.onProgress) == null || r.call(t, o, t);
        },
        !1
      ), n.onreadystatechange = () => {
        var o, r;
        n.readyState === 4 && (n.status == t.xhrState ? (o = t.onSuccess) == null || o.call(t, n.responseText, t) : (r = t.onFailure) == null || r.call(t, n.responseText, t));
      }, n.withCredentials = t.withCredentials, n.open(t.method, t.url, !0);
      for (const [o, r] of Object.entries(t.headers))
        n.setRequestHeader(o, r);
      (l = t.onStart) == null || l.call(t, t), t.beforeXhrUpload ? t.beforeXhrUpload(n, t) : n.send(t.formData);
    } else
      console.warn("浏览器不支持 XMLHttpRequest");
  }
};
class Gp {
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
const { create: Jp } = j("progress"), Qp = Jp({
  components: { Checked: Zn },
  props: {
    percentage: {
      type: [Number, String],
      default: 0,
      required: !0
    },
    size: {
      type: String,
      default: "base"
    },
    status: {
      type: String,
      default: "text"
    },
    strokeWidth: {
      type: [Number, String],
      default: ""
    },
    textInside: {
      type: Boolean,
      default: !1
    },
    showText: {
      type: Boolean,
      default: !0
    },
    strokeColor: {
      type: String,
      default: ""
    },
    textColor: {
      type: String,
      default: ""
    },
    textBackground: {
      type: String,
      default: ""
    },
    isShowPercentage: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    const t = !!lt().default, n = D(() => {
      if (e.strokeWidth)
        return e.strokeWidth + "px";
    }), l = D(() => Number(e.percentage) >= 100 ? 100 : Number(e.percentage)), o = D(() => ({
      width: l.value + "%",
      background: e.strokeColor || ""
    })), r = D(() => ({
      color: e.textColor || ""
    }));
    return {
      height: n,
      percentage: l,
      bgStyle: o,
      textStyle: r,
      slotDefault: t
    };
  }
}), xp = { class: "nut-progress" };
function e1(e, t, n, l, o, r) {
  const s = W("Checked");
  return c(), f("div", xp, [
    h("div", {
      class: L(["nut-progress-outer", [e.showText && !e.textInside ? "nut-progress-outer-part" : "", e.size ? "nut-progress-" + e.size : ""]]),
      style: A({ height: e.height })
    }, [
      h("div", {
        class: L(["nut-progress-inner", e.status === "active" ? "nut-active" : ""]),
        style: A(e.bgStyle)
      }, null, 6),
      e.showText && e.textInside && !e.slotDefault ? (c(), f("div", {
        key: 0,
        class: "nut-progress-text nut-progress-insidetext",
        style: A({
          lineHeight: e.height,
          left: `${e.percentage}%`,
          transform: `translate(-${+e.percentage}%,-50%)`,
          background: e.textBackground || e.strokeColor
        })
      }, [
        h("span", {
          style: A(e.textStyle)
        }, E(e.percentage) + E(e.isShowPercentage ? "%" : ""), 5)
      ], 4)) : N("", !0),
      e.showText && e.textInside && e.slotDefault ? (c(), f("div", {
        key: 1,
        class: "nut-progress-slot",
        style: A({
          position: "absolute",
          top: "50%",
          left: `${e.percentage}%`,
          transform: `translate(-${+e.percentage}%,-50%)`
        })
      }, [
        I(e.$slots, "default")
      ], 4)) : N("", !0)
    ], 6),
    e.showText && !e.textInside ? (c(), f("div", {
      key: 0,
      class: "nut-progress-text",
      style: A({ lineHeight: e.height })
    }, [
      e.status === "text" || e.status === "active" ? (c(), f("span", {
        key: 0,
        style: A(e.textStyle)
      }, E(e.percentage) + E(e.isShowPercentage ? "%" : ""), 5)) : e.status === "icon" ? I(e.$slots, "icon-name", { key: 1 }, () => [
        oe(s, {
          width: "15px",
          height: "15px",
          color: "#439422"
        })
      ]) : N("", !0)
    ], 4)) : N("", !0)
  ]);
}
const Mo = /* @__PURE__ */ q(Qp, [["render", e1]]), { create: t1 } = j("uploader"), n1 = "NutUploader", o1 = t1({
  components: {
    NutProgress: Mo,
    Photograph: Ya,
    Failure: Qn,
    Loading: at,
    Del: Gn,
    Link: xs
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
    const n = Ze(xe(e, "disabled")), l = ke(n1), o = z(e.fileList), r = z([]);
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
    }, a = (m) => {
      m.value = "";
    }, i = (m) => {
      t("fileItemClick", { fileItem: m });
    }, p = (m, b) => {
      const S = new qp();
      S.url = e.url, S.formData = m.formData, S.timeout = e.timeout * 1, S.method = e.method, S.xhrState = e.xhrState, S.headers = e.headers, S.withCredentials = e.withCredentials, S.beforeXhrUpload = e.beforeXhrUpload;
      try {
        S.sourceFile = m.formData.get(e.name);
      } catch (B) {
        console.warn("[NutUI] <Uploader> formData.get(name)", B);
      }
      S.onStart = (B) => {
        m.status = "ready", m.message = l("readyUpload"), d(b), t("start", B);
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
      let _ = new Zp(S);
      e.autoUpload ? _.upload() : r.value.push(
        new Promise((B) => {
          B(_);
        })
      );
    }, d = (m = -1) => {
      m > -1 ? r.value.splice(m, 1) : (r.value = [], o.value = [], t("update:fileList", o.value));
    }, v = () => {
      Promise.all(r.value).then((m) => {
        m.forEach((b) => b.upload());
      });
    }, g = (m) => {
      m.forEach((b, S) => {
        const _ = new FormData();
        for (const [M, C] of Object.entries(e.data))
          _.append(M, C);
        _.append(e.name, b);
        const B = ce(new Gp());
        if (B.name = b.name, B.status = "ready", B.type = b.type, B.formData = _, B.message = l("waitingUpload"), p(B, S), e.isPreview && b.type.includes("image")) {
          const M = new FileReader();
          M.onload = (C) => {
            B.url = C.target.result, o.value.push(B);
          }, M.readAsDataURL(b);
        } else
          o.value.push(B);
      });
    }, k = (m) => {
      const b = e.maximum * 1, S = e.maximize * 1, _ = new Array();
      m = m.filter((M) => M.size > S ? (_.push(M), !1) : !0), _.length && t("oversize", _);
      let B = m.length + o.value.length;
      return B > b && m.splice(m.length - (B - b)), m;
    }, $ = (m, b) => {
      o.value.splice(b, 1), t("delete", {
        file: m,
        fileList: o.value,
        index: b
      });
    }, w = (m, b) => {
      n.value || (d(b), tn(e.beforeDelete, {
        args: [m, o.value],
        done: () => $(m, b)
      }));
    }, u = (m) => {
      if (e.disabled || n.value)
        return;
      const b = m.target;
      let { files: S } = b;
      e.beforeUpload ? e.beforeUpload(S).then((_) => y(_)) : y(S), t("change", {
        fileList: o.value,
        event: m
      }), e.clearInput && a(b);
    }, y = (m) => {
      const b = k(new Array().slice.call(m));
      g(b);
    };
    return {
      onChange: u,
      onDelete: w,
      fileList: o,
      fileItemClick: i,
      clearUploadQueue: d,
      submit: v,
      renderInput: s
    };
  }
}), l1 = { class: "nut-uploader" }, s1 = {
  key: 0,
  class: "nut-uploader__slot"
}, a1 = {
  key: 0,
  class: "nut-uploader__preview-img"
}, r1 = {
  key: 0,
  class: "nut-uploader__preview__progress"
}, i1 = { class: "nut-uploader__preview__progress__msg" }, u1 = ["onClick"], c1 = ["src", "onClick"], d1 = {
  key: 3,
  class: "nut-uploader__preview-img__file"
}, f1 = ["onClick"], p1 = { class: "file__name_tips" }, m1 = { class: "tips" }, h1 = {
  key: 1,
  class: "nut-uploader__preview-list"
}, g1 = ["onClick"], y1 = { class: "file__name_tips" };
function v1(e, t, n, l, o, r) {
  const s = W("Failure"), a = W("Loading"), i = W("Link"), p = W("Del"), d = W("nut-progress"), v = W("Photograph");
  return c(), f("view", l1, [
    e.$slots.default ? (c(), f("view", s1, [
      I(e.$slots, "default"),
      Number(e.maximum) - e.fileList.length ? (c(), ee(Ve(e.renderInput), {
        key: 0,
        onChange: e.onChange
      }, null, 40, ["onChange"])) : N("", !0)
    ])) : N("", !0),
    (c(!0), f(x, null, ie(e.fileList, (g, k) => {
      var $;
      return c(), f("view", {
        key: g.uid,
        class: L(["nut-uploader__preview", [e.listType]])
      }, [
        e.listType == "picture" && !e.$slots.default ? (c(), f("view", a1, [
          g.status != "success" ? (c(), f("view", r1, [
            g.status != "ready" ? (c(), f(x, { key: 0 }, [
              g.status == "error" ? (c(), ee(s, {
                key: 0,
                color: "#fff"
              })) : (c(), ee(a, {
                key: 1,
                name: "loading",
                color: "#fff"
              }))
            ], 64)) : N("", !0),
            h("view", i1, E(g.message), 1)
          ])) : N("", !0),
          e.isDeletable ? (c(), f("view", {
            key: 1,
            class: "close",
            onClick: (w) => e.onDelete(g, k)
          }, [
            I(e.$slots, "delete-icon", {}, () => [
              oe(s)
            ])
          ], 8, u1)) : N("", !0),
          ($ = g == null ? void 0 : g.type) != null && $.includes("image") && g.url ? (c(), f("img", {
            key: 2,
            class: "nut-uploader__preview-img__c",
            src: g.url,
            onClick: (w) => e.fileItemClick(g)
          }, null, 8, c1)) : (c(), f("view", d1, [
            h("view", {
              class: "nut-uploader__preview-img__file__name",
              onClick: (w) => e.fileItemClick(g)
            }, [
              h("view", p1, E(g.name), 1)
            ], 8, f1)
          ])),
          h("view", m1, E(g.name), 1)
        ])) : e.listType == "list" ? (c(), f("view", h1, [
          h("view", {
            class: L(["nut-uploader__preview-img__file__name", [g.status]]),
            onClick: (w) => e.fileItemClick(g)
          }, [
            oe(i, { class: "nut-uploader__preview-img__file__link" }),
            h("view", y1, E(g.name), 1),
            e.isDeletable ? (c(), ee(p, {
              key: 0,
              color: "#808080",
              class: "nut-uploader__preview-img__file__del",
              onClick: (w) => e.onDelete(g, k)
            }, null, 8, ["onClick"])) : N("", !0)
          ], 10, g1),
          g.status == "uploading" ? (c(), ee(d, {
            key: 0,
            size: "small",
            percentage: g.percentage,
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
      (c(), ee(Ve(e.renderInput), { onChange: e.onChange }, null, 40, ["onChange"]))
    ], 2)) : N("", !0)
  ]);
}
const $1 = /* @__PURE__ */ q(o1, [["render", v1]]), { create: b1 } = j("number-keyboard"), w1 = "NutNumberKeyboard", k1 = b1({
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
    const n = ke(w1), l = z(void 0), o = z(e.visible), r = z();
    function s() {
      const { customKey: u } = e;
      let y = {
        id: "lock",
        type: "lock"
      }, m = Array.isArray(u) ? u : [u];
      return m.length === 1 && (y = {
        id: m[0],
        type: "custom"
      }), [...a(), y, { id: 0, type: "number" }, { id: "delete", type: "delete" }];
    }
    function a() {
      const u = [];
      for (let y = 1; y <= 9; y++)
        u.push({ id: y, type: "number" });
      return e.randomKeys ? u.sort(() => Math.random() > 0.5 ? 1 : -1) : u;
    }
    function i() {
      const u = a(), { customKey: y } = e;
      let m = Array.isArray(y) ? y : [y];
      return m.length > 2 && (m = [m[0], m[1]]), m.length == 2 && e.title && e.type != "rightColumn" && (m = [m[0]]), m.length === 1 ? e.title && e.type != "rightColumn" ? u.push({ id: m[0], type: "custom" }, { id: 0, type: "number" }, { id: "delete", type: "delete" }) : u.push({ id: 0, type: "number" }, { id: m[0], type: "custom" }) : m.length === 2 && u.push(
        { id: m[0], type: "custom" },
        { id: 0, type: "number" },
        { id: m[1], type: "custom" }
      ), u;
    }
    const p = D(() => e.type == "rightColumn" || e.title != "" ? i() : s()), d = () => {
      e.visible && t("blur");
    }, v = (u) => {
      const y = r.value;
      y && !y.contains(u.target) && d();
    };
    Q(
      () => e.visible,
      (u) => {
        o.value = u, u ? window.addEventListener("touchstart", v, !1) : window.removeEventListener("touchstart", v, !1);
      }
    );
    function g(u, y) {
      y.stopPropagation(), l.value = u.id, (u.type == "number" || u.type == "custom") && (t("input", u.id), e.modelValue.length < +e.maxlength && t("update:modelValue", e.modelValue + u.id)), u.type == "lock" && w(), u.type == "delete" && (t("delete"), t("update:modelValue", e.modelValue.slice(0, e.modelValue.length - 1)));
    }
    function k(u) {
      u.stopPropagation();
    }
    function $(u) {
      u.preventDefault(), l.value = void 0;
    }
    function w() {
      t("update:visible", !1), t("close");
    }
    return {
      clickKeyIndex: l,
      defaultKey: s,
      closeBoard: w,
      onTouchEnd: $,
      onTouchMove: k,
      onTouchstart: g,
      keysList: p,
      genCustomKeys: i,
      getBasicKeys: a,
      root: r,
      show: o,
      translate: n
    };
  }
}), C1 = { ref: "root" }, S1 = { class: "nut-number-keyboard" }, T1 = {
  key: 0,
  class: "nut-number-keyboard__header"
}, N1 = { class: "nut-number-keyboard__title" }, D1 = { class: "nut-number-keyboard__body" }, _1 = { class: "nut-number-keyboard__keys" }, I1 = ["onTouchstart"], B1 = {
  key: 1,
  src: "https://img11.360buyimg.com/imagetools/jfs/t1/146371/38/8485/738/5f606425Eca239740/14f4b4f5f20d8a68.png"
}, M1 = {
  key: 2,
  src: "https://img11.360buyimg.com/imagetools/jfs/t1/129395/8/12735/2030/5f61ac37E70cab338/fb477dc11f46056c.png"
}, L1 = {
  key: 0,
  class: "nut-number-keyboard__sidebar"
}, E1 = { class: "nut-key__wrapper" }, P1 = /* @__PURE__ */ h("img", { src: "https://img11.360buyimg.com/imagetools/jfs/t1/129395/8/12735/2030/5f61ac37E70cab338/fb477dc11f46056c.png" }, null, -1), A1 = [
  P1
];
function z1(e, t, n, l, o, r) {
  const s = W("nut-popup");
  return c(), f("div", C1, [
    oe(s, {
      visible: e.show,
      "onUpdate:visible": t[7] || (t[7] = (a) => e.show = a),
      position: "bottom",
      "pop-class": e.popClass,
      overlay: !1,
      "lock-scroll": e.lockScroll,
      "teleport-disable": !1
    }, {
      default: ne(() => [
        h("div", S1, [
          e.title ? (c(), f("div", T1, [
            h("h3", N1, E(e.title), 1),
            e.type == "default" ? (c(), f("span", {
              key: 0,
              class: "nut-number-keyboard__close",
              onClick: t[0] || (t[0] = (a) => e.closeBoard())
            }, E(e.translate("done")), 1)) : N("", !0)
          ])) : N("", !0),
          h("div", D1, [
            h("div", _1, [
              (c(!0), f(x, null, ie(e.keysList, (a) => (c(), f("div", {
                key: "key" + a.id,
                class: L([
                  "nut-key__wrapper",
                  {
                    "nut-key__wrapper--wider": a.id == 0 && e.type == "rightColumn" && Array.isArray(e.customKey) && e.customKey.length == 1
                  }
                ])
              }, [
                h("div", {
                  class: L([
                    "nut-key",
                    { "nut-key--active": a.id == e.clickKeyIndex },
                    { "nut-key--lock": a.type == "lock" },
                    { "nut-key--delete": a.type == "delete" }
                  ]),
                  onTouchstart: (i) => e.onTouchstart(a, i),
                  onTouchmove: t[1] || (t[1] = (i) => e.onTouchMove(i)),
                  onTouchend: t[2] || (t[2] = (i) => e.onTouchEnd(i))
                }, [
                  a.type == "number" || a.type == "custom" ? (c(), f(x, { key: 0 }, [
                    ge(E(a.id), 1)
                  ], 64)) : N("", !0),
                  a.type == "lock" ? (c(), f("img", B1)) : N("", !0),
                  a.type == "delete" ? (c(), f("img", M1)) : N("", !0)
                ], 42, I1)
              ], 2))), 128))
            ]),
            e.type == "rightColumn" ? (c(), f("div", L1, [
              h("div", E1, [
                h("div", {
                  class: L(["nut-key", { active: e.clickKeyIndex == "delete" }]),
                  onTouchstart: t[3] || (t[3] = (a) => e.onTouchstart({ id: "delete", type: "delete" }, a)),
                  onTouchmove: t[4] || (t[4] = (a) => e.onTouchMove(a)),
                  onTouchend: t[5] || (t[5] = (...a) => e.onTouchEnd && e.onTouchEnd(...a))
                }, A1, 34)
              ]),
              h("div", {
                class: "nut-key__wrapper nut-key__wrapper--finish",
                onClick: t[6] || (t[6] = (a) => e.closeBoard())
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
const V1 = /* @__PURE__ */ q(k1, [["render", z1]]), un = /* @__PURE__ */ Pe({
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
    const l = e, o = n, { children: r, linkChildren: s } = Xt($o);
    s({ props: l });
    const { linkChildren: a } = Xt(bo);
    a({ props: l });
    const i = D(() => ce({}));
    Ee("formErrorTip", i);
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
      return r.forEach((y) => {
        u.push({
          prop: y == null ? void 0 : y.prop,
          rules: (y == null ? void 0 : y.rules) || []
        });
      }), u;
    }, g = (u) => {
      u.message && o("validate", u), i.value[u.prop] = u.message;
    }, k = (u) => Ge(this, null, function* () {
      const { rules: y = [], prop: m } = u, b = (C) => new Promise((T, P) => {
        try {
          g(C), T(C);
        } catch (O) {
          P(O);
        }
      });
      m || console.warn("[NutUI] <FormItem> 使用 rules 校验规则时 , 必须设置 prop 参数");
      const S = Ut(l.modelValue, m || "");
      g({ prop: m, message: "" });
      const _ = l.rules || {}, B = [...(_ == null ? void 0 : _[m]) || [], ...y];
      for (; B.length; ) {
        const M = B.shift(), { validator: T } = M, P = Wt(M, ["validator"]), { required: O, regex: K, message: G } = P, le = { prop: m, message: G || "" };
        if (O && !S && S !== 0 || K && !K.test(String(S)))
          return b(le);
        if (T) {
          const Y = T(S, P);
          if (jn(Y))
            try {
              if ((yield Y) === !1)
                return b(le);
            } catch (U) {
              return b({ prop: m, message: U });
            }
          else if (!Y)
            return b(le);
        }
      }
      return Promise.resolve(!0);
    }), $ = (u = "") => new Promise((y, m) => {
      try {
        const S = v().map((_) => u && u !== _.prop ? Promise.resolve(!0) : k(_));
        Promise.all(S).then((_) => {
          _ = _.filter((M) => M !== !0);
          const B = { valid: !0, errors: [] };
          _.length && (B.valid = !1, B.errors = _), y(B);
        });
      } catch (b) {
        m(b);
      }
    });
    return t({
      submit: () => ($(), !1),
      reset: d,
      validate: $
    }), (u, y) => (c(), f("form", {
      class: "nut-form",
      action: "#",
      onSubmit: _e(() => !1, ["prevent"])
    }, [
      oe(to, null, {
        default: ne(() => [
          I(u.$slots, "default")
        ]),
        _: 3
      })
    ], 32));
  }
});
Re(un);
const O1 = { class: "nut-cell__value nut-form-item__body" }, cn = /* @__PURE__ */ Pe({
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
    const t = e, { parent: n } = sn($o), l = D(() => {
      var g;
      const d = (g = n.props) == null ? void 0 : g.rules;
      let v = !1;
      for (const k in d)
        Object.prototype.hasOwnProperty.call(d, k) && k === t.prop && Array.isArray(d[k]) && (v = d[k].some(($) => $.required));
      return t.required || t.rules.some((k) => k.required) || v;
    }), o = D(() => {
      const d = n.props.labelPosition, v = t.labelPosition ? t.labelPosition : d;
      return v !== "left" ? `nut-form-item__${v}` : "";
    }), r = D(() => {
      const d = n.props.starPosition, v = t.starPosition ? t.starPosition : d;
      return v !== "left" ? `nut-form-item__star-${v}` : "";
    }), s = Le("formErrorTip"), a = D(() => ({
      width: Ne(t.labelWidth),
      textAlign: t.labelAlign
    })), i = D(() => ({
      textAlign: t.bodyAlign
    })), p = D(() => ({
      textAlign: t.errorMessageAlign
    }));
    return (d, v) => (c(), ee(eo, {
      class: L(["nut-form-item", [{ error: Be(s)[d.prop], line: d.showErrorLine }, d.$attrs.class, o.value]]),
      style: A(d.$attrs.style)
    }, {
      default: ne(() => [
        d.label || d.$slots.label ? (c(), f("view", {
          key: 0,
          class: L(["nut-cell__title nut-form-item__label", { required: l.value, [r.value]: r.value }]),
          style: A(a.value)
        }, [
          I(d.$slots, "label", {}, () => [
            ge(E(d.label), 1)
          ])
        ], 6)) : N("", !0),
        h("view", O1, [
          h("view", {
            class: "nut-form-item__body__slots",
            style: A(i.value)
          }, [
            I(d.$slots, "default")
          ], 4),
          Be(s)[d.prop] && d.showErrorMessage ? (c(), f("view", {
            key: 0,
            class: "nut-form-item__body__tips",
            style: A(p.value)
          }, E(Be(s)[d.prop]), 5)) : N("", !0)
        ])
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
});
Re(cn);
const Lo = Symbol("nut-swipe"), { create: H1 } = j("swipe"), R1 = H1({
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
    }, l = z(!1), o = z(), r = D(() => n(o)), s = z(), a = D(() => n(s)), i = Le(Lo, null);
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
    const g = ce({
      offset: 0,
      moving: !1
    }), k = (S = "") => {
      i && i.update(e.name), p.value = !0, S && (g.offset = S === "left" ? -a.value : r.value), t("open", {
        name: e.name,
        position: d || S
      });
    }, $ = () => {
      g.offset = 0, p.value && (p.value = !1, t("close", {
        name: e.name,
        position: d
      }));
    }, w = (S, _, B) => {
      B ? S.stopPropagation() : $(), t("click", _);
    }, u = D(() => ({
      transform: `translate3d(${g.offset}px, 0, 0)`
    })), y = (S) => {
      d = S > 0 ? "right" : "left";
      let _ = S;
      switch (d) {
        case "left":
          p.value && v === d ? _ = -a.value : _ = Math.abs(S) > a.value ? -a.value : S;
          break;
        case "right":
          p.value && v === d ? _ = r.value : _ = Math.abs(S) > r.value ? r.value : S;
          break;
      }
      g.offset = _;
    }, m = et();
    return de(Z({
      touchStyle: u
    }, {
      onTouchStart(S) {
        e.disabled || m.start(S);
      },
      onTouchMove(S) {
        e.disabled || (m.move(S), m.isHorizontal() && (l.value = !0, g.moving = !0, y(m.deltaX.value), e.touchMovePreventDefault && S.preventDefault(), e.touchMoveStopPropagation && S.stopPropagation()));
      },
      onTouchEnd() {
        if (g.moving) {
          switch (g.moving = !1, v = d, d) {
            case "left":
              Math.abs(g.offset) <= a.value / 2 ? $() : (g.offset = -a.value, k());
              break;
            case "right":
              Math.abs(g.offset) <= r.value / 2 ? $() : (g.offset = r.value, k());
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
      open: k,
      close: $,
      onClick: w,
      lockClick: l
    });
  }
});
function F1(e, t, n, l, o, r) {
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
const Eo = /* @__PURE__ */ q(R1, [["render", F1]]), { create: W1 } = j("swipe-group"), Y1 = W1({
  props: {
    lock: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = z(null), n = z("");
    return Ee(Lo, {
      update: (o) => {
        n.value = o;
      },
      lock: e.lock,
      name: n
    }), { swipeGroupRef: t };
  }
}), j1 = {
  ref: "swipeGroupRef",
  class: "nut-swipe-group"
};
function U1(e, t, n, l, o, r) {
  return c(), f("div", j1, [
    I(e.$slots, "default")
  ], 512);
}
const K1 = /* @__PURE__ */ q(Y1, [["render", U1]]), { create: X1 } = j("action-sheet"), q1 = X1({
  components: {
    NutPopup: Ae,
    Loading: at
  },
  props: de(Z({}, Nt), {
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
      slotDefault: !!lt().default,
      isHighlight: (a) => e.chooseTagValue && e.chooseTagValue === a[e.optionTag] ? e.color : "",
      cancelActionSheet: () => {
        t("cancel"), t("update:visible", !1);
      },
      chooseItem: (a, i) => {
        !a.disable && !a.loading && (t("choose", a, i), t("update:visible", !1));
      },
      close: (a) => {
        e.closeAbled && (t("close", a), t("update:visible", !1));
      }
    };
  }
}), Z1 = { class: "nut-action-sheet" }, G1 = {
  key: 0,
  class: "nut-action-sheet__title"
}, J1 = { key: 1 }, Q1 = {
  key: 0,
  class: "nut-action-sheet__item nut-action-sheet__desc"
}, x1 = {
  key: 1,
  class: "nut-action-sheet__menu"
}, em = ["onClick"], tm = { key: 1 }, nm = { class: "nut-action-sheet__subdesc" };
function om(e, t, n, l, o, r) {
  const s = W("Loading"), a = W("nut-popup");
  return c(), ee(a, {
    visible: e.visible,
    position: "bottom",
    round: "",
    "close-on-click-overlay": e.closeAbled,
    "lock-scroll": e.lockScroll,
    "z-index": e.zIndex,
    onClickOverlay: e.close
  }, {
    default: ne(() => [
      h("view", Z1, [
        e.title ? (c(), f("view", G1, E(e.title), 1)) : N("", !0),
        I(e.$slots, "default"),
        e.slotDefault ? N("", !0) : (c(), f("view", J1, [
          e.description ? (c(), f("view", Q1, E(e.description), 1)) : N("", !0),
          e.menuItems.length ? (c(), f("view", x1, [
            (c(!0), f(x, null, ie(e.menuItems, (i, p) => (c(), f("view", {
              key: p,
              class: L(["nut-action-sheet__item", {
                "nut-action-sheet__item--disabled": i.disable,
                "nut-action-sheet__item--loading": i.loading
              }]),
              style: A({ color: e.isHighlight(i) || i.color }),
              onClick: (d) => e.chooseItem(i, p)
            }, [
              i.loading ? (c(), ee(s, { key: 0 })) : (c(), f("view", tm, E(i[e.optionTag]), 1)),
              h("view", nm, E(i[e.optionSubTag]), 1)
            ], 14, em))), 128))
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
const lm = /* @__PURE__ */ q(q1, [["render", om]]), { componentName: sm, create: am } = j("backtop"), rm = am({
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
      [sm]: !0,
      show: n.backTop
    })), o = D(() => ({
      right: `${e.right}px`,
      bottom: `${e.bottom}px`,
      zIndex: e.zIndex
    }));
    function r() {
      n.scrollEl instanceof Window ? n.scrollTop = n.scrollEl.pageYOffset : n.scrollTop = n.scrollEl.scrollTop, n.backTop = n.scrollTop >= e.distance;
    }
    function s(g = 0) {
      n.scrollEl instanceof Window ? window.scrollTo(0, g) : n.scrollEl.scrollTop = g;
    }
    function a() {
      let g = He(function k() {
        var $ = e.duration - Math.max(0, n.startTime - +/* @__PURE__ */ new Date() + e.duration), w = $ * -n.scrollTop / e.duration + n.scrollTop;
        s(w), g = He(k), ($ == e.duration || w == 0) && Sc(g);
      });
    }
    function i() {
      n.scrollEl.addEventListener("scroll", r, !1), n.scrollEl.addEventListener("resize", r, !1);
    }
    function p() {
      n.scrollEl.removeEventListener("scroll", r, !1), n.scrollEl.removeEventListener("resize", r, !1);
    }
    function d(g) {
      n.startTime = +/* @__PURE__ */ new Date(), e.isAnimation && e.duration > 0 ? a() : s(), t("click", g);
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
function im(e, t, n, l, o, r) {
  const s = W("Top");
  return c(), f("div", {
    class: L(e.classes),
    style: A(e.style),
    onClick: t[0] || (t[0] = _e((...a) => e.click && e.click(...a), ["stop"]))
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
const um = /* @__PURE__ */ q(rm, [["render", im]]), { create: cm } = j("drag"), dm = cm({
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
      n.boundary.left ? +p.style.left.split("px")[0] > n.boundary.left ? (p.style.left = +p.style.left.split("px")[0] - 10 + "px", He(() => {
        o(p);
      })) : p.style.left = `${n.boundary.left}px` : +p.style.left.split("px")[0] > 10 ? (p.style.left = +p.style.left.split("px")[0] - 10 + "px", He(() => {
        o(p);
      })) : p.style.left = "0px";
    }
    function r(p, d) {
      d - parseInt(p.style.left.split("px")[0]) > 10 ? (p.style.left = parseInt(p.style.left.split("px")[0]) + 10 + "px", He(() => {
        r(p, d);
      })) : p.style.left = d + "px";
    }
    function s(p) {
      p.preventDefault();
      const d = p.currentTarget;
      if (p.targetTouches.length === 1) {
        const v = p.targetTouches[0];
        n.nx = v.clientX - n.position.x, n.ny = v.clientY - n.position.y, n.xPum = n.startLeft + n.nx, n.yPum = n.startTop + n.ny;
        const g = n.screenWidth - n.elWidth - n.boundary.right;
        Math.abs(n.xPum) > g ? n.xPum = g : n.xPum <= n.boundary.left && (n.xPum = n.boundary.left), n.yPum < n.boundary.top ? n.yPum = n.boundary.top : n.yPum > n.screenHeight - n.elHeight - n.boundary.bottom && (n.yPum = n.screenHeight - n.elHeight - n.boundary.bottom), e.direction != "y" && (d.style.left = n.xPum + "px"), e.direction != "x" && (d.style.top = n.yPum + "px");
      }
    }
    function a(p) {
      const d = p.currentTarget;
      let g = p.changedTouches[0].clientX;
      const k = n.screenWidth - n.elWidth - n.boundary.right;
      g > k ? g = k : g < n.boundary.left ? g = n.boundary.left : g = g < n.screenWidth / 2 ? n.boundary.left : k, e.direction != "y" && e.attract && (g < n.screenWidth / 2 ? He(() => {
        o(d);
      }) : He(() => {
        r(d, k);
      })), e.direction != "x" && (d.style.top = n.yPum + "px");
    }
    function i(p) {
      const d = p.currentTarget, v = p.touches[0], g = p.targetTouches[0];
      n.startTop = d.offsetTop, n.startLeft = d.offsetLeft, n.position.x = v.clientX, n.position.y = v.clientY, n.nx = g.clientX - n.position.x, n.ny = g.clientY - n.position.y, n.xPum = n.startLeft + n.nx, n.yPum = n.startTop + n.ny;
    }
    return ve(() => {
      l(), n.boundary = e.boundary;
    }), Ct(() => {
      n.keepAlive && (n.keepAlive = !1);
    }), St(() => {
      n.keepAlive = !0, t.value.removeEventListener("touchstart", i), t.value.removeEventListener("touchmove", s), t.value.removeEventListener("touchend", a);
    }), {
      myDrag: t,
      touchStart: i,
      touchMove: s,
      touchEnd: a
    };
  }
});
function fm(e, t, n, l, o, r) {
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
const pm = /* @__PURE__ */ q(dm, [["render", fm]]), { create: mm } = j("dialog"), hm = "NutDialog", gm = mm({
  inheritAttrs: !1,
  components: {
    NutPopup: Ae,
    NutButton: qe
  },
  props: de(Z({}, Nt), {
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
    const n = ke(hm), l = z(e.visible);
    ve(() => {
      e.closeOnPopstate && window.addEventListener("popstate", function() {
        r("page");
      });
    }), Q(
      () => e.visible,
      (d) => {
        l.value = d, d && t("opened");
      }
    );
    const o = (d) => {
      t("update", d), t("update:visible", d);
    }, r = (d) => {
      tn(e.beforeClose, {
        args: [d],
        done: () => {
          l.value = !1, o(!1), t("closed");
        }
      });
    }, s = () => {
      t("cancel"), e.cancelAutoClose && (l.value = !1, r("cancel"));
    }, a = () => {
      t("ok"), e.okAutoClose && r("ok");
    }, i = () => {
      e.closeOnClickOverlay && r("");
    }, p = D(() => ({
      textAlign: e.textAlign
    }));
    return {
      closed: r,
      onCancel: s,
      onOk: a,
      showPopup: l,
      onClickOverlay: i,
      contentStyle: p,
      translate: n
    };
  }
}), ym = {
  key: 0,
  class: "nut-dialog__header"
}, vm = ["innerHTML"];
function $m(e, t, n, l, o, r) {
  const s = W("nut-button"), a = W("nut-popup");
  return c(), ee(a, {
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
        e.$slots.header || e.title ? (c(), f("view", ym, [
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
          }, null, 8, vm)) : (c(), ee(Ve(e.content), { key: 2 }))
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
const dn = /* @__PURE__ */ q(gm, [["render", $m]]);
class bm {
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
class wm {
  constructor(t) {
    V(this, "options", new bm());
    V(this, "instance");
    const n = Object.assign(this.options, t), { unmount: l } = an(n, {
      name: "dialog",
      components: [Ae, qe, Tt],
      wrapper: (o, r) => ({
        setup() {
          return n.onUpdate = (s) => {
            s === !1 && Se(() => {
              l();
            });
          }, n != null && n.onOpened && (n == null || n.onOpened()), n.teleport = `#${r.id}`, () => be(dn, n);
        }
      })
    });
  }
}
const km = function(e) {
  return new wm(e);
};
km.install = (e) => {
  e.use(dn);
};
const { create: Cm } = j("infinite-loading"), Sm = "NutInfiniteLoading", Tm = Cm({
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
    Loading: at
  },
  setup(e, { emit: t, slots: n }) {
    const l = ke(Sm), o = z(), r = io(o), s = ce({
      beforeScrollTop: 0,
      isInfiniting: !1,
      y: 0,
      x: 0,
      distance: 0
    }), a = (k) => k ? k.offsetTop + a(k.offsetParent) : 0, i = () => {
      let k = 0, $ = 0, w = "down";
      if (r.value == window) {
        const u = Kn();
        o.value && (k = a(o.value) + o.value.offsetHeight - u - window.innerHeight), $ = u;
      } else {
        const { scrollHeight: u, clientHeight: y, scrollTop: m } = r.value;
        k = u - y - m, $ = m;
      }
      return s.beforeScrollTop > $ ? w = "up" : w = "down", s.beforeScrollTop = $, t("scrollChange", $), k <= e.threshold && w == "down";
    }, p = () => {
      He(() => {
        if (!i() || !e.hasMore || s.isInfiniting)
          return !1;
        s.isInfiniting = !0, t("update:modelValue", !0), Se(() => t("loadMore"));
      });
    }, d = () => {
      r.value && r.value.addEventListener("scroll", p, e.useCapture);
    }, v = () => {
      r.value && r.value.removeEventListener("scroll", p, e.useCapture);
    };
    ve(() => {
      d();
    }), Xe(() => {
      v();
    });
    const g = z(!1);
    return Ct(() => {
      g.value && (g.value = !1, d());
    }), St(() => {
      g.value = !0, v();
    }), Q(
      () => e.modelValue,
      (k) => {
        k || (s.isInfiniting = !1);
      }
    ), de(Z({
      scroller: o
    }, he(s)), {
      translate: l,
      slots: n
    });
  }
}), Nm = {
  ref: "scroller",
  class: "nut-infinite-loading"
}, Dm = { class: "nut-infinite__container" }, _m = { class: "nut-infinite__bottom" }, Im = {
  key: 0,
  class: "nut-infinite__bottom-box"
}, Bm = { class: "nut-infinite__bottom-box__text" }, Mm = { class: "nut-infinite__bottom-tips" };
function Lm(e, t, n, l, o, r) {
  const s = W("Loading");
  return c(), f("view", Nm, [
    h("view", Dm, [
      I(e.$slots, "default")
    ]),
    h("view", _m, [
      e.isInfiniting ? (c(), f("view", Im, [
        I(e.$slots, "loading", {}, () => [
          I(e.$slots, "loading-icon", {}, () => [
            oe(s, { class: "nut-icon-loading nut-infinite__bottom-box__img" })
          ]),
          h("view", Bm, E(e.loadTxt || e.translate("loading")), 1)
        ])
      ])) : e.hasMore ? N("", !0) : I(e.$slots, "finished", { key: 1 }, () => [
        h("view", Mm, E(e.loadMoreTxt || e.translate("loadMoreTxt")), 1)
      ])
    ])
  ], 512);
}
const Em = /* @__PURE__ */ q(Tm, [["render", Lm]]), { create: Pm } = j("pull-refresh"), Am = "NutPullRefresh", zm = Pm({
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
  components: { Loading: at },
  setup(e, { emit: t, slots: n }) {
    const l = ke(Am), o = et(), r = z(), s = io(r), a = ce({
      isPullRefresh: !1,
      distance: 0,
      status: "normal"
    }), i = D(() => {
      switch (a.status) {
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
      transform: a.distance ? `translate3d(0,${a.distance}px, 0)` : ""
    })), d = D(() => {
      const m = {};
      return e.headHeight != 50 && (m.height = Ne(e.headHeight)), m;
    }), v = (m) => {
      const b = +(e.pullDistance || e.headHeight);
      let S = m;
      return m > b && (m < b * 2 ? S = (m + b) / 2 : S = b + m / 4), Math.round(S);
    }, g = (m, b, S) => {
      const _ = +(e.pullDistance || e.headHeight);
      a.distance = m, b ? a.status = "loading" : S ? a.status = "complete" : m === 0 ? a.status = "normal" : m < _ ? a.status = "pulling" : a.status = "loosing", t("change", { status: a.status, distance: m });
    }, k = () => a.status !== "loading" && a.status !== "complete", $ = () => s.value == window ? Kn() == 0 : s.value && s.value.scrollTop == 0, w = (m) => {
      k() && ($() ? (o.start(m), a.isPullRefresh = !0) : (a.distance = 0, a.isPullRefresh = !1));
    }, u = (m) => {
      if (k()) {
        o.move(m);
        const { deltaY: b } = o;
        o.isVertical() && b.value > 0 && a.isPullRefresh && (m.preventDefault(), g(v(b.value)));
      }
    }, y = () => {
      a.isPullRefresh && k() && o.deltaY.value && (a.status === "loosing" ? (g(+e.headHeight, !0), t("update:modelValue", !0), Se(() => t("refresh"))) : g(0)), setTimeout(() => {
        o.reset();
      }, 0);
    };
    return Q(
      () => e.modelValue,
      (m) => {
        m ? g(+e.headHeight, !0) : (e.completeDuration === 0 && g(0), g(+e.headHeight, !1, !0), setTimeout(() => {
          g(0);
        }, e.completeDuration));
      }
    ), de(Z({
      scroller: r
    }, he(a)), {
      touchStart: w,
      touchMove: u,
      touchEnd: y,
      getStyle: p,
      translate: l,
      slots: n,
      getHeightStyle: d,
      getPullStatus: i
    });
  }
}), Vm = { class: "nut-pull-refresh-container-topbox-text" };
function Om(e, t, n, l, o, r) {
  const s = W("Loading");
  return c(), f("div", {
    ref: "scroller",
    class: "nut-pull-refresh",
    onTouchstart: t[0] || (t[0] = (...a) => e.touchStart && e.touchStart(...a)),
    onTouchmove: t[1] || (t[1] = (...a) => e.touchMove && e.touchMove(...a)),
    onTouchend: t[2] || (t[2] = (...a) => e.touchEnd && e.touchEnd(...a))
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
        h("div", Vm, E(e.getPullStatus), 1),
        e.status == "pulling" ? I(e.$slots, "pulling", { key: 1 }) : N("", !0),
        e.status == "loosing" ? I(e.$slots, "loosing", { key: 2 }) : N("", !0),
        e.status == "loading" ? I(e.$slots, "loading", { key: 3 }) : N("", !0),
        e.status == "complete" ? I(e.$slots, "complete", { key: 4 }) : N("", !0)
      ], 4),
      I(e.$slots, "default")
    ], 4)
  ], 544);
}
const Hm = /* @__PURE__ */ q(zm, [["render", Om]]), { create: Rm } = j("notify"), Fm = Rm({
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
    }, r = () => {
      t("update:visible", !1);
    }, s = z(!1), a = Q(
      () => e.visible,
      (p) => {
        s.value = e.visible;
        const d = e.duration;
        p && d && (l = setTimeout(() => {
          r();
        }, d));
      },
      { immediate: !0 }
    );
    return { onAfterLeave: () => {
      o(), a && a(), e.unmount && e.unmount(e.id), e.onClose && e.onClose();
    }, clickCover: n, isShowPopup: s };
  }
});
function Wm(e, t, n, l, o, r) {
  const s = W("nut-popup");
  return c(), ee(s, {
    visible: e.isShowPopup,
    "onUpdate:visible": t[1] || (t[1] = (a) => e.isShowPopup = a),
    position: e.position,
    overlay: !1,
    "teleport-disable": e.teleportDisable
  }, {
    default: ne(() => [
      h("div", {
        class: L(["nut-notify", `nut-notify--${e.type}`, e.className]),
        style: A({ color: e.color, background: e.background }),
        onClick: t[0] || (t[0] = (...a) => e.clickCover && e.clickCover(...a))
      }, [
        e.$slots.default ? I(e.$slots, "default", { key: 0 }) : (c(), f(x, { key: 1 }, [
          ge(E(e.msg), 1)
        ], 64))
      ], 6)
    ]),
    _: 3
  }, 8, ["visible", "position", "teleport-disable"]);
}
const Vt = /* @__PURE__ */ q(Fm, [["render", Wm]]), Gt = {
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
let it = [], vt = [];
const Po = (e) => {
  if (e) {
    const t = document.getElementById(e);
    vt = vt.filter((n) => n.id !== e), it = it.filter((n) => n !== e), t && document.body.removeChild(t);
  } else
    it.forEach((t) => {
      const n = document.getElementById(t);
      n && document.body.removeChild(n);
    }), vt = [], it = [];
}, Ym = (e) => {
  const t = document.getElementById(e.id);
  if (t) {
    const n = vt.find((o) => o.id === e.id);
    n ? e = Z(Z(Z({}, Gt), n), e) : e = Z(Z({}, Gt), e);
    const l = oe(Vt, e);
    return en(l, t), l.component.data;
  }
}, ht = (e) => {
  e.unmount = Po;
  let t;
  if (e.id) {
    if (t = e.id, it.find((r) => r === e.id))
      return Ym(e);
  } else
    t = (/* @__PURE__ */ new Date()).getTime() + "";
  e = Z(Z({}, Gt), e), e.id = t, it.push(e.id), vt.push(e);
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
}, a5 = {
  text(e, t = {}) {
    return gt(e), ht(de(Z({}, t), { msg: e }));
  },
  primary(e, t = {}) {
    return gt(e), ht(de(Z({}, t), { msg: e, type: "primary" }));
  },
  success(e, t = {}) {
    return gt(e), ht(de(Z({}, t), { msg: e, type: "success" }));
  },
  danger(e, t = {}) {
    return gt(e), ht(de(Z({}, t), { msg: e, type: "danger" }));
  },
  warn(e, t = {}) {
    return gt(e), ht(de(Z({}, t), { msg: e, type: "warning" }));
  },
  hide() {
    Po();
  },
  install(e) {
    e.use(Vt);
  }
}, { componentName: jm, create: Um } = j("switch"), Km = Um({
  components: { Loading1: ia },
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
    const n = D(() => e.disabled || e.disable), l = Ze(n), o = D(() => e.modelValue === e.activeValue), r = D(() => {
      const p = jm;
      return {
        [p]: !0,
        [o.value ? "nut-switch-open" : "nut-switch-close"]: !0,
        [`${p}-disabled`]: l.value,
        [`${p}-base`]: !0
      };
    }), s = D(() => ({
      backgroundColor: o.value ? e.activeColor : e.inactiveColor
    }));
    let a = "";
    const i = (p) => {
      if (e.loading || l.value)
        return;
      const d = o.value ? e.inactiveValue : e.activeValue;
      a = "click", t("update:modelValue", d), t("change", d, p);
    };
    return Q(
      () => e.modelValue,
      (p) => {
        a == "click" ? a = "" : t("change", p);
      }
    ), {
      classes: r,
      style: s,
      isActive: o,
      onClick: i
    };
  }
}), Xm = { class: "nut-switch-button" };
function qm(e, t, n, l, o, r) {
  const s = W("Loading1");
  return c(), f("view", {
    class: L(e.classes),
    style: A(e.style),
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, [
    h("view", Xm, [
      e.loading ? I(e.$slots, "icon", { key: 0 }, () => [
        oe(s, {
          name: "loading",
          color: e.activeColor
        }, null, 8, ["color"])
      ]) : N("", !0),
      e.activeText ? (c(), f(x, { key: 1 }, [
        Ce(h("view", { class: "nut-switch-label open" }, E(e.activeText), 513), [
          [De, e.isActive]
        ]),
        Ce(h("view", { class: "nut-switch-label close" }, E(e.inactiveText), 513), [
          [De, !e.isActive]
        ])
      ], 64)) : N("", !0)
    ])
  ], 6);
}
const Zm = /* @__PURE__ */ q(Km, [["render", qm]]), { create: Gm } = j("toast"), Jm = Gm({
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
    }, r = () => {
      l.mounted = !1;
    }, s = () => {
      o(), e.duration && (n = window.setTimeout(() => {
        r();
      }, e.duration));
    }, a = () => {
      e.closeOnClickOverlay && (r(), t("close"));
    };
    e.duration && s(), Q(
      () => e.duration,
      (g) => {
        g && s();
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
      hide: r,
      clickCover: a,
      hasIcon: i,
      toastBodyClass: p,
      toastIconWrapperClass: d,
      onAfterLeave: () => {
        var g;
        o(), (g = e.unmount) == null || g.call(e, e.id), e.onClose && e.onClose();
      },
      renderIcon: ft
    };
  }
}), Qm = {
  key: 1,
  class: "nut-toast-title"
}, xm = ["innerHTML"];
function eh(e, t, n, l, o, r) {
  return c(), ee(Qt, {
    name: "toast-fade",
    onAfterLeave: e.onAfterLeave
  }, {
    default: ne(() => [
      Ce(h("view", {
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
            (c(), ee(Ve(e.renderIcon(e.icon)), { color: "#ffffff" }))
          ], 2)) : N("", !0),
          e.title ? (c(), f("div", Qm, E(e.title), 1)) : N("", !0),
          h("view", {
            class: "nut-toast-text",
            innerHTML: e.msg
          }, null, 8, xm)
        ], 4)
      ], 6), [
        [De, e.state.mounted]
      ])
    ]),
    _: 1
  }, 8, ["onAfterLeave"]);
}
const Ot = /* @__PURE__ */ q(Jm, [["render", eh]]), Jt = {
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
let ut = [], $t = [];
const Ao = (e) => {
  if (e) {
    const t = document.getElementById(e);
    $t = $t.filter((n) => n.id !== e), ut = ut.filter((n) => n !== e), t && document.body.removeChild(t);
  } else
    ut.forEach((t) => {
      const n = document.getElementById(t);
      n && document.body.removeChild(n);
    }), $t = [], ut = [];
}, th = (e) => {
  const t = document.getElementById(e.id);
  if (t) {
    const n = $t.find((o) => o.id === e.id);
    n ? e = Z(Z(Z({}, Jt), n), e) : e = Z(Z({}, Jt), e);
    const l = oe(Ot, e);
    return en(l, t), zo;
  }
}, yt = (e) => {
  e.unmount = Ao;
  let t;
  if (e.id) {
    if (t = e.id, ut.find((n) => n === e.id))
      return th(e);
  } else
    t = (/* @__PURE__ */ new Date()).getTime() + "";
  return e = Z(Z({}, Jt), e), e.id = t, ut.push(e.id), $t.push(e), an(e, {
    wrapper: Ot
  }), zo;
}, Mt = (e) => {
  if (!e) {
    console.warn("[NutUI Toast]: msg不能为空");
    return;
  }
}, zo = {
  text(e, t = {}) {
    return Mt(e), yt(de(Z({}, t), { type: "text", msg: e }));
  },
  success(e, t = {}) {
    return Mt(e), yt(de(Z({ icon: Lr }, t), { msg: e, type: "success" }));
  },
  fail(e, t = {}) {
    return Mt(e), yt(de(Z({ icon: Qn }, t), { msg: e, type: "fail" }));
  },
  warn(e, t = {}) {
    return Mt(e), yt(de(Z({ icon: xn }, t), { msg: e, type: "warn" }));
  },
  loading(e, t = {}) {
    return yt(de(Z({
      icon: at
    }, t), {
      msg: e,
      type: "loading"
    }));
  },
  hide(e) {
    Ao(e);
  },
  install(e) {
    e.use(Ot);
  }
}, { create: nh } = j("audio"), oh = nh({
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
    Service: Cr,
    NutRange: wo
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
      var w = ["webkitVisibilityState", "visibilitychange"];
      try {
        for (let u = 0; u < w.length; u++)
          document.addEventListener(w[u], () => {
            document.hidden ? l.value.pause() : o.playing && setTimeout(() => {
              l.value.play();
            }, 200);
          });
      } catch (u) {
        console.log(u.message);
      }
    });
    const r = (w) => {
      const u = l.value;
      e.autoplay && u && u.paused && u.play(), o.second = u.duration, o.duration = $(u.duration), t("canPlay", w);
    }, s = (w) => {
      o.currentTime = parseInt(w.target.currentTime);
    }, a = () => {
      o.currentTime > 0 && o.currentTime--, l.value.currentTime = o.currentTime, t("fastBack", o.currentTime);
    }, i = () => {
      const w = l.value;
      o.playing ? (w.pause(), o.handPlaying = !1) : (w.play(), o.handPlaying = !0), o.playing = !o.playing, t("play", o.playing);
    }, p = () => {
      o.currentTime++, l.value.currentTime = o.currentTime, t("forward", o.currentTime);
    }, d = (w) => {
      o.currentDuration = $(w), o.percent = w / o.second * 100;
    }, v = () => {
      o.playing = !1, t("ended");
    }, g = (w) => {
      const u = l.value;
      u.currentTime = o.second * w / 100, t("changeProgress", u.currentTime);
    }, k = () => {
      o.hanMuted = !o.hanMuted, t("mute", o.hanMuted);
    }, $ = (w) => {
      if (!w)
        return "00:00:00";
      let u = parseInt(w), y = Math.floor(u / 3600), m = Math.floor((u - y * 3600) / 60), b = u - y * 3600 - m * 60, S = "";
      return S += ("0" + y.toString()).slice(-2) + ":", S += ("0" + m.toString()).slice(-2) + ":", S += ("0" + b.toString()).slice(-2), S;
    };
    return Q(
      () => o.currentTime,
      (w) => {
        d(w);
      }
    ), Ee("audioParent", {
      children: [],
      props: e,
      audioData: o,
      handleMute: k,
      forward: p,
      fastBack: a,
      changeStatus: i
    }), de(Z(Z({}, he(e)), he(o)), {
      audioRef: l,
      fastBack: a,
      forward: p,
      changeStatus: i,
      progressChange: g,
      audioEnd: v,
      onTimeupdate: s,
      handleMute: k,
      onCanplay: r,
      slots: n
    });
  }
}), lh = { class: "nut-audio" }, sh = {
  key: 0,
  class: "nut-audio__progress"
}, ah = { class: "nut-audio__time" }, rh = { class: "nut-audio__bar" }, ih = /* @__PURE__ */ h("div", { class: "nut-audio__button--custom" }, null, -1), uh = { class: "nut-audio__time" }, ch = {
  key: 1,
  class: "nut-audio__icon"
}, dh = ["controls", "src", "preload", "autoplay", "loop", "muted"];
function fh(e, t, n, l, o, r) {
  const s = W("nut-range"), a = W("Service");
  return c(), f("div", lh, [
    e.type == "progress" ? (c(), f("div", sh, [
      h("div", ah, E(e.currentDuration), 1),
      h("div", rh, [
        oe(s, {
          modelValue: e.percent,
          "onUpdate:modelValue": t[0] || (t[0] = (i) => e.percent = i),
          "hidden-range": "",
          "inactive-color": "#cccccc",
          "active-color": "#fa2c19",
          onChange: e.progressChange
        }, {
          button: ne(() => [
            ih
          ]),
          _: 1
        }, 8, ["modelValue", "onChange"])
      ]),
      h("div", uh, E(e.duration), 1)
    ])) : N("", !0),
    e.type == "icon" ? (c(), f("div", ch, [
      h("div", {
        class: L(["nut-audio__icon--box", e.playing ? "nut-audio__icon--play" : "nut-audio__icon--stop"]),
        onClick: t[1] || (t[1] = (...i) => e.changeStatus && e.changeStatus(...i))
      }, [
        e.playing ? (c(), ee(a, {
          key: 0,
          class: "nut-icon-am-rotate nut-icon-am-infinite"
        })) : (c(), ee(a, { key: 1 }))
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
    }, null, 40, dh)
  ]);
}
const ph = /* @__PURE__ */ q(oh, [["render", fh]]), { create: mh } = j("audio-operate"), hh = "NutAudioOperate", gh = mh({
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
    const t = ke(hh), n = Le("audioParent"), l = ce(n), o = z(lt().default);
    return de(Z(Z({}, he(e)), he(l)), { customSlot: o, translate: t });
  }
}), yh = { class: "nut-audio-operate" };
function vh(e, t, n, l, o, r) {
  const s = W("nut-button");
  return c(), f("div", yh, [
    e.type == "back" ? (c(), f("div", {
      key: 0,
      class: "nut-audio-operate-item",
      onClick: t[0] || (t[0] = (...a) => e.fastBack && e.fastBack(...a))
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
      onClick: t[1] || (t[1] = (...a) => e.changeStatus && e.changeStatus(...a))
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
      onClick: t[2] || (t[2] = (...a) => e.forward && e.forward(...a))
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
      onClick: t[3] || (t[3] = (...a) => e.handleMute && e.handleMute(...a))
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
const $h = /* @__PURE__ */ q(gh, [["render", vh]]), Vo = Symbol("nut-avatar"), { create: bh } = j("avatar"), wh = bh({
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
    const { size: t, shape: n, bgColor: l, color: o } = he(e), r = ["large", "normal", "small"], s = Le(Vo, null), a = z(null), i = D(() => {
      var v, g;
      return {
        ["nut-avatar"]: !0,
        [`nut-avatar-${t.value || ((v = s == null ? void 0 : s.props) == null ? void 0 : v.size) || "normal"}`]: !0,
        [`nut-avatar-${n.value || ((g = s == null ? void 0 : s.props) == null ? void 0 : g.shape) || "round"}`]: !0
      };
    }), p = D(() => {
      var d, v;
      return {
        width: t.value in r ? "" : `${t.value}px`,
        height: t.value in r ? "" : `${t.value}px`,
        backgroundColor: `${l.value}`,
        color: `${o.value}`,
        marginLeft: (d = s == null ? void 0 : s.props) != null && d.span ? `${(v = s == null ? void 0 : s.props) == null ? void 0 : v.span}px` : ""
      };
    });
    return {
      classes: i,
      styles: p,
      avatarRef: a
    };
  }
});
function kh(e, t, n, l, o, r) {
  return c(), f("view", {
    ref: "avatarRef",
    style: A(e.styles),
    class: L(e.classes)
  }, [
    I(e.$slots, "default")
  ], 6);
}
const fn = /* @__PURE__ */ q(wh, [["render", kh]]), { create: Ch } = j("avatar-group"), Sh = Ch({
  components: {
    NutAvatar: fn
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
    })), r = (a) => {
      let i = 0;
      a && a.$el && (a = a.$el);
      const p = a.children;
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
    }, s = (a) => {
      const i = { attributes: !1, childList: !0, subtree: !0 }, p = function(v) {
        let g = !1;
        for (let k of v)
          if (k.type === "childList") {
            g = !0;
            break;
          }
        g && r(a);
      }, d = new MutationObserver(p);
      return d.observe(a, i), d;
    };
    return ve(() => {
      e.maxCount && Se(() => {
        let a = Be(t);
        a && a.$el && (a = a.$el), r(a), l.value = s(a);
      });
    }), Xe(() => {
      var a;
      (a = l.value) == null || a.disconnect();
    }), Ee(Vo, {
      props: e,
      avatarGroupRef: t
    }), {
      styles: o,
      foldCount: n,
      avatarGroupRef: t
    };
  }
});
function Th(e, t, n, l, o, r) {
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
const Nh = /* @__PURE__ */ q(Sh, [["render", Th]]);
var Et = /* @__PURE__ */ ((e) => (e[e.eq = 1] = "eq", e[e.lt = 2] = "lt", e[e.gt = 3] = "gt", e))(Et || {});
function Dh(e, t, n) {
  let l = 0, o = e.length - 1, r = null;
  for (; l <= o; ) {
    r = Math.floor((l + o) / 2);
    const s = e[r], a = n(s, t);
    if (a === 1)
      return r;
    a === 2 ? l = r + 1 : a === 3 && (o = r - 1);
  }
  return r;
}
const { create: _h } = j("list"), Ih = _h({
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
    const n = document.documentElement.clientHeight || document.body.clientHeight || 667, l = z(null), o = z(null), r = z(null), s = ce({
      start: 0,
      originStartIndex: 0,
      scrollTop: 0,
      list: e.listData.slice(),
      cachePositions: [],
      phantomHeight: e.height * e.listData.length
    }), a = D(() => e.containerHeight ? Math.min(e.containerHeight, n) : n), i = D(() => Math.ceil(a.value / e.height)), p = D(() => Math.min(s.originStartIndex + i.value + e.bufferSize, s.list.length)), d = D(() => s.list.slice(s.start, p.value)), v = () => {
      if (r.value)
        return `translate3d(0, ${s.start >= 1 ? s.cachePositions[s.start - 1].bottom : 0}px, 0)`;
    }, g = () => {
      s.cachePositions = [];
      for (let y = 0; y < s.list.length; ++y)
        s.cachePositions[y] = {
          index: y,
          height: e.height,
          top: y * e.height,
          bottom: (y + 1) * (e.height + e.margin),
          dValue: 0
        };
    }, k = () => {
      let y = r.value.childNodes;
      y = Array.from(y).filter((M) => M.nodeType === 1);
      const m = y[0];
      y.forEach((M, C) => {
        if (!M)
          return;
        const T = Ye(M), { height: P } = T, K = s.cachePositions[C + s.start].height - P;
        K && (s.cachePositions[C + s.start].bottom -= K, s.cachePositions[C + s.start].height = P, s.cachePositions[C + s.start].dValue = K);
      });
      let b = 0;
      m && (b = s.start);
      const S = s.cachePositions.length;
      let _ = s.cachePositions[b].dValue;
      s.cachePositions[b].dValue = 0;
      for (let M = b + 1; M < S; ++M) {
        const C = s.cachePositions[M];
        s.cachePositions[M].top = s.cachePositions[M - 1].bottom, s.cachePositions[M].bottom = s.cachePositions[M].bottom - _, C.dValue !== 0 && (_ += C.dValue, C.dValue = 0);
      }
      const B = s.cachePositions[S - 1].bottom;
      s.phantomHeight = B;
    }, $ = (y = 0) => {
      let m = Dh(
        s.cachePositions,
        y,
        (S, _) => {
          const B = S.bottom;
          return B === _ ? Et.eq : B < _ ? Et.lt : Et.gt;
        }
      );
      return s.cachePositions[m].bottom < y && (m += 1), m;
    }, w = () => {
      s.originStartIndex = 0, s.start = 0, s.scrollTop = 0, l.value.scrollTop = 0, g(), s.phantomHeight = e.height * s.list.length;
    }, u = () => {
      var S;
      const y = (S = l.value) == null ? void 0 : S.scrollTop, { originStartIndex: m } = s, b = $(y);
      b !== m && (s.originStartIndex = b, s.start = Math.max(s.originStartIndex - e.bufferSize, 0), p.value >= s.list.length - 1 && t("scrollBottom")), t(y > s.scrollTop ? "scrollUp" : "scrollDown", y), s.scrollTop = y;
    };
    return g(), Q(
      () => e.listData,
      (y) => {
        if (s.list = y.slice(), s.list.length === y.length)
          g(), k();
        else {
          w();
          return;
        }
      }
    ), Q(
      () => s.start,
      () => {
        r.value && s.list.length > 0 && k();
      }
    ), de(Z({}, he(s)), {
      list: l,
      phantom: o,
      actualContent: r,
      getTransform: v,
      visibleData: d,
      getContainerHeight: a,
      handleScrollEvent: u
    });
  }
});
function Bh(e, t, n, l, o, r) {
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
      (c(!0), f(x, null, ie(e.visibleData, (s, a) => (c(), f("div", {
        key: s,
        class: "nut-list-item"
      }, [
        I(e.$slots, "default", {
          item: s,
          index: a + e.start
        })
      ]))), 128))
    ], 4)
  ], 36);
}
const Mh = /* @__PURE__ */ q(Ih, [["render", Bh]]), { create: Lh } = j("circle-progress"), Eh = Lh({
  props: {
    progress: {
      type: [Number, String],
      defualt: 0
    },
    strokeWidth: {
      type: [Number, String],
      default: 5
    },
    radius: {
      type: [Number, String],
      default: 50
    },
    strokeLinecap: {
      type: String,
      default: "round"
    },
    color: {
      type: [String, Object],
      default: ""
    },
    pathColor: {
      type: String,
      default: ""
    },
    clockwise: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    const t = Math.random().toString(36).slice(-8), n = D(() => {
      const a = e.clockwise ? 1 : 0;
      return `M 50 50 m 0 -45 a 45 45 0 1 ${a} 0 90 a 45 45 0 1, ${a} 0 -90`;
    }), l = D(() => ct(e.color) ? `url(#${t})` : e.color), o = D(() => {
      let a = 283, i = a * Number(e.progress) / 100;
      return {
        stroke: ct(e.color) ? `url(#${t})` : e.color,
        strokeDasharray: `${i}px ${a}px`
      };
    }), r = D(() => ({
      stroke: e.pathColor
    })), s = D(() => {
      if (!ct(e.color))
        return;
      let a = e.color;
      const i = Object.keys(a).sort((d, v) => parseFloat(d) - parseFloat(v));
      let p = [];
      return i.map((d) => {
        let v = {
          key: "",
          value: ""
        };
        v.key = d, v.value = a[d], p.push(v);
      }), p;
    });
    return {
      hoverStyle: o,
      pathStyle: r,
      path: n,
      hoverColor: l,
      stop: s,
      refRandomId: t
    };
  }
}), Ph = { viewBox: "0 0 100 100" }, Ah = ["id"], zh = ["offset", "stop-color"], Vh = ["d", "stroke-width"], Oh = ["d", "stroke", "stroke-linecap", "stroke-width"], Hh = { class: "nut-circle-progress__text" };
function Rh(e, t, n, l, o, r) {
  return c(), f("div", {
    class: "nut-circle-progress",
    style: A({ height: Number(e.radius) * 2 + "px", width: Number(e.radius) * 2 + "px" })
  }, [
    (c(), f("svg", Ph, [
      h("defs", null, [
        h("linearGradient", {
          id: e.refRandomId,
          x1: "100%",
          y1: "0%",
          x2: "0%",
          y2: "0%"
        }, [
          (c(!0), f(x, null, ie(e.stop, (s, a) => (c(), f("stop", {
            key: a,
            offset: s.key,
            "stop-color": s.value
          }, null, 8, zh))), 128))
        ], 8, Ah)
      ]),
      h("path", {
        class: "nut-circle-progress__path",
        style: A(e.pathStyle),
        d: e.path,
        fill: "none",
        "stroke-width": e.strokeWidth
      }, " > ", 12, Vh),
      h("path", {
        class: "nut-circle-progress__hover",
        style: A(e.hoverStyle),
        d: e.path,
        fill: "none",
        stroke: e.hoverColor,
        "stroke-linecap": e.strokeLinecap,
        "stroke-width": e.strokeWidth
      }, null, 12, Oh)
    ])),
    h("div", Hh, [
      I(e.$slots, "default", {}, () => [
        h("div", null, E(e.progress) + "%", 1)
      ])
    ])
  ], 4);
}
const Fh = /* @__PURE__ */ q(Eh, [["render", Rh]]), { create: Wh } = j("noticebar"), Yh = Wh({
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
    Notice: Oa,
    CircleClose: nn
  },
  emits: ["click", "close", "acrossEnd"],
  setup(e, { emit: t, slots: n }) {
    const l = z(null), o = z(null), r = ce({
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
    }), s = D(() => r.isCanScroll == null ? e.wrapable : !r.isCanScroll && !e.wrapable), a = D(() => ({
      "nut-noticebar__page-wrap-content": !0,
      "nut-ellipsis": s.value,
      [r.animationClass]: !0
    })), i = D(() => {
      let M = {};
      return e.color && (M.color = e.color), e.background && (M.background = e.background), e.direction == "vertical" && (M.height = `${e.height}px`), M;
    }), p = D(() => ({
      animationDelay: (r.firstRound ? e.delay : 0) + "s",
      animationDuration: r.duration + "s",
      transform: `translateX(${r.firstRound ? 0 : r.wrapWidth + "px"})`
    })), d = D(() => {
      let M = {};
      if (e.complexAm)
        M = {
          transform: `translateY(${r.distance}px)`
        };
      else if (r.animate) {
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
        r.scrollList = [].concat(M);
      }
    );
    const v = () => {
      r.showNoticebar != !1 && setTimeout(() => {
        if (!l.value || !o.value)
          return;
        const M = l.value.getBoundingClientRect().width, C = o.value.getBoundingClientRect().width;
        r.isCanScroll = e.scrollable == null ? C > M : e.scrollable, r.isCanScroll ? (r.wrapWidth = M, r.offsetWidth = C, r.duration = C / e.speed, r.animationClass = "play") : r.animationClass = "";
      }, 0);
    }, g = (M) => {
      t("click", M);
    }, k = (M) => {
      e.closeMode && (r.showNoticebar = !e.closeMode), t("close", M);
    }, $ = (M) => {
      r.firstRound = !1, t("acrossEnd", M), setTimeout(() => {
        r.duration = (r.offsetWidth + r.wrapWidth) / e.speed, r.animationClass = "play-infinite";
      }, 0);
    }, w = () => {
      u(), r.timer = setInterval(u, ~~(e.height / e.speed / 4 * 1e3) + e.standTime);
    }, u = () => {
      r.animate = !0, setTimeout(
        () => {
          r.scrollList.push(r.scrollList[0]), r.scrollList.shift(), r.animate = !1;
        },
        ~~(e.height / e.speed / 4 * 1e3)
      );
    }, y = () => {
      r.timer = setInterval(
        () => {
          let M = 100;
          for (let C = 0; C < M; C++)
            m(C, !(C < M - 1));
        },
        e.standTime + 100 * e.speed
      );
    }, m = (M, C) => {
      setTimeout(() => {
        r.distance -= e.height / 100, C && (r.scrollList.push(r.scrollList[0]), r.scrollList.shift(), r.distance = 0);
      }, M * e.speed);
    }, b = (M) => {
      t("click", M);
    }, S = () => {
      e.closeMode && (r.showNoticebar = !e.closeMode), t("close", r.scrollList[0]);
    };
    ve(() => {
      e.direction == "vertical" ? (n.default ? (_(), B()) : r.scrollList = [].concat(e.list), setTimeout(() => {
        e.complexAm ? y() : w();
      }, e.standTime)) : v();
    });
    const _ = () => {
      n.default && (r.scrollList = [].concat(n.default()[0].children));
    }, B = () => {
      setTimeout(() => {
        var M = new MutationObserver(() => {
          r.showNotica = !1, setTimeout(() => {
            r.showNotica = !0;
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
      r.keepAlive && (r.keepAlive = !1);
    }), St(() => {
      r.keepAlive = !0, clearInterval(r.timer);
    }), Xe(() => {
      clearInterval(r.timer);
    }), de(Z({}, he(r)), {
      isEllipsis: s,
      barStyle: i,
      contentStyle: p,
      horseLampStyle: d,
      wrap: l,
      content: o,
      handleClick: g,
      onClickIcon: k,
      onAnimationEnd: $,
      go: b,
      handleClickIcon: S,
      slots: n,
      pxCheck: Ne,
      wrapContentClass: a
    });
  }
}), jh = { class: "nut-noticebar" }, Uh = {
  key: 0,
  class: "nut-noticebar__page-lefticon"
}, Kh = {
  ref: "wrap",
  class: "nut-noticebar__page-wrap"
}, Xh = { class: "showNotica" }, qh = { class: "nut-noticebar-custom-item" }, Zh = ["onClick"];
function Gh(e, t, n, l, o, r) {
  const s = W("Notice"), a = W("CircleClose"), i = W("ScrollItem");
  return c(), f("view", jh, [
    e.direction == "across" ? Ce((c(), f("view", {
      key: 0,
      class: L(["nut-noticebar__page", {
        "nut-noticebar__page--withicon": e.closeMode,
        "nut-noticebar__page--close": e.closeMode,
        "nut-noticebar__page--wrapable": e.wrapable
      }]),
      style: A(e.barStyle),
      onClick: t[3] || (t[3] = (...p) => e.handleClick && e.handleClick(...p))
    }, [
      e.leftIcon ? (c(), f("view", Uh, [
        I(e.$slots, "left-icon", {}, () => [
          oe(s, { size: "16px" })
        ])
      ])) : N("", !0),
      h("view", Kh, [
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
        onClick: t[2] || (t[2] = _e((...p) => e.onClickIcon && e.onClickIcon(...p), ["stop"]))
      }, [
        e.$slots["right-icon"] ? I(e.$slots, "right-icon", { key: 0 }) : (c(), ee(a, { key: 1 }))
      ])) : N("", !0)
    ], 6)), [
      [De, e.showNoticebar]
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
          h("div", Xh, [
            (c(!0), f(x, null, ie(e.scrollList, (p, d) => (c(), ee(i, {
              key: d,
              style: A({ height: e.height + "px", "line-height": e.height + "px" }),
              item: p
            }, null, 8, ["style", "item"]))), 128))
          ])
        ], 4),
        h("view", qh, [
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
        }, E(p), 13, Zh))), 128))
      ], 4)),
      h("view", {
        class: "go",
        onClick: t[4] || (t[4] = (p) => !e.slots.rightIcon && e.handleClickIcon())
      }, [
        I(e.$slots, "right-icon", {}, () => [
          e.closeMode ? (c(), ee(a, {
            key: 0,
            color: e.color,
            size: "11px"
          }, null, 8, ["color"])) : N("", !0)
        ])
      ])
    ], 4)) : N("", !0)
  ]);
}
const Jh = /* @__PURE__ */ q(Yh, [["render", Gh]]), { create: Qh } = j("empty"), xh = "NutEmpty", eg = {
  empty: "https://static-ftcms.jd.com/p/files/61a9e3183985005b3958672b.png",
  error: "https://ftcms.jd.com/p/files/61a9e33ee7dcdbcc0ce62736.png",
  network: "https://static-ftcms.jd.com/p/files/61a9e31de7dcdbcc0ce62734.png"
}, tg = Qh({
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
    const t = ke(xh), n = D(() => e.imageSize ? {
      width: Ne(e.imageSize),
      height: Ne(e.imageSize)
    } : {});
    return { src: D(() => e.image.startsWith("https://") || e.image.startsWith("http://") || e.image.startsWith("//") ? e.image : eg[e.image]), style: n, translate: t };
  }
}), ng = { class: "nut-empty" }, og = ["src"], lg = { class: "nut-empty__description" };
function sg(e, t, n, l, o, r) {
  return c(), f("view", ng, [
    h("view", {
      class: "nut-empty__box",
      style: A(e.style)
    }, [
      I(e.$slots, "image", {}, () => [
        e.src ? (c(), f("img", {
          key: 0,
          class: "nut-empty__box--img",
          src: e.src
        }, null, 8, og)) : N("", !0)
      ])
    ], 4),
    I(e.$slots, "description", {}, () => [
      h("view", lg, E(e.description || e.translate("noData")), 1)
    ]),
    I(e.$slots, "default")
  ]);
}
const ag = /* @__PURE__ */ q(tg, [["render", sg]]);
function An(e, t) {
  let n = null, l = Date.now();
  return function() {
    let o = Date.now(), r = t - (o - l);
    n && clearTimeout(n), r <= 0 ? (e.apply(null, arguments), l = Date.now()) : n = setTimeout(e, r);
  };
}
const { create: rg } = j("video"), ig = "NutVideo", ug = rg({
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
    const l = ke(ig), o = ce({
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
    }), r = z(null), s = D(() => e.options.disabled);
    Q(
      () => e.source,
      (O) => {
        O.src && Se(() => {
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
    const a = () => {
      o.videoElm = r.value, e.options.autoplay && setTimeout(() => {
        o.videoElm.play();
      }, 200), e.options.touchPlay && (o.showTouchMask = !0), e.options.playsinline && (o.videoElm.setAttribute("playsinline", e.options.playsinline), o.videoElm.setAttribute("webkit-playsinline", e.options.playsinline), o.videoElm.setAttribute("x5-video-player-type", "h5-page"), o.videoElm.setAttribute("x5-video-player-fullscreen", !1)), w(), o.showToolbox ? i() : (o.videoElm.addEventListener("play", () => {
        o.state.playing = !0, t("play", o.videoElm);
      }), o.videoElm.addEventListener("pause", () => {
        o.state.playing = !1, t("pause", o.videoElm);
      }), o.videoElm.addEventListener("ended", k), o.videoElm.addEventListener("timeupdate", An(g, 1e3)));
    }, i = () => {
      const O = r.value, K = r.value.getElementsByClassName("nut-video-controller__progress-value")[0];
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
            }), o.videoElm.addEventListener("timeupdate", An(g, 1e3)), o.videoElm.addEventListener("ended", k), t("play", o.videoElm);
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
    }, g = () => {
      const O = o.videoElm.currentTime / o.videoElm.duration;
      o.videoSet.progress.current = Math.round(o.videoSet.progress.width * O), o.videoSet.totalTime = d(o.videoElm.duration), o.videoSet.displayTime = d(o.videoElm.currentTime), t("time", o.videoSet.displayTime, o.videoSet.totalTime);
    }, k = () => {
      o.state.playing = !1, o.state.isEnd = !0, o.videoSet.displayTime = "00:00", o.videoSet.progress.current = 0, o.videoElm.currentTime = 0, t("playend", o.videoElm);
    }, $ = () => {
      o.state.isError = !0;
    }, w = () => {
      o.state.vol = e.options.volume;
    }, u = () => {
      o.state.isMuted = !o.state.isMuted, o.videoElm.muted = o.state.isMuted;
    }, y = () => {
    }, m = (O) => {
      let G = O.targetTouches[0].pageX - o.progressBar.pos.left;
      G <= 0 && (G = 0), G >= o.videoSet.progress.width && (G = o.videoSet.progress.width), o.videoSet.progress.current = G;
      let le = o.videoSet.progress.current / o.videoSet.progress.width;
      o.videoElm.duration && S(le, o.videoElm.duration);
    }, b = (O) => {
      let G = O.changedTouches[0].pageX - o.progressBar.pos.left;
      o.videoSet.progress.current = G;
      let le = G / o.videoSet.progress.width;
      o.videoElm.duration && S(le, o.videoElm.duration);
    }, S = (O, K) => {
      o.videoElm.currentTime = Math.floor(O * K);
    }, _ = () => {
      o.state.isError = !1, a();
    }, B = () => {
      o.state.fullScreen ? (o.state.fullScreen = !1, document.webkitCancelFullScreen()) : (o.state.fullScreen = !0, o.videoElm.webkitRequestFullScreen());
    };
    return n({
      play: p,
      pause: () => {
        o.state.playing = !1, o.videoElm.pause(), t("pause", o.videoElm);
      },
      stop: () => {
        k(), o.videoElm.pause();
      },
      muted: () => {
        o.state.isMuted = !0, o.videoElm.muted = !0;
      },
      unmuted: () => {
        o.state.isMuted = !1, o.videoElm.muted = !1;
      }
    }), ve(() => {
      a();
    }), de(Z(Z({
      root: r
    }, he(e)), he(o)), {
      handleError: $,
      isDisabled: s,
      play: p,
      handleMuted: u,
      touchSlidSrart: y,
      touchSlidMove: m,
      touchSlidEnd: b,
      retry: _,
      fullScreen: B,
      translate: l
    });
  }
}), cg = {
  ref: "videocon",
  class: "nut-video"
}, dg = ["muted", "autoplay", "loop", "poster", "controls", "preload"], fg = ["src", "type"], pg = { class: "nut-video-controller__now" }, mg = { class: "nut-video-controller__progress" }, hg = {
  ref: "progressBar",
  class: "nut-video-controller__progress-value"
}, gg = /* @__PURE__ */ h("div", { class: "nut-video-controller__ball-move" }, null, -1), yg = [
  gg
], vg = {
  ref: "playedBar",
  class: "nut-video-controller__played"
}, $g = { class: "nut-video-controller__total" }, bg = { class: "nut-video-error" }, wg = { class: "nut-video-error-tip" };
function kg(e, t, n, l, o, r) {
  return c(), f("div", cg, [
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
      }, null, 8, fg)
    ], 40, dg),
    e.showToolbox && !e.isDisabled ? (c(), f("div", {
      key: 0,
      ref: "touchMask",
      class: "nut-video-mask",
      onClick: t[1] || (t[1] = (...s) => e.play && e.play(...s))
    }, null, 512)) : N("", !0),
    e.showToolbox && !e.isDisabled ? Ce((c(), f("div", {
      key: 1,
      ref: "palyBtn",
      class: "nut-video-play-btn",
      onClick: t[2] || (t[2] = (...s) => e.play && e.play(...s))
    }, null, 512)), [
      [De, !e.state.playing]
    ]) : N("", !0),
    Ce(h("div", {
      class: L(["nut-video-controller", { "nut-video-controller--show": !e.state.playing, "nut-video-controller--hide": e.state.playing }])
    }, [
      h("div", {
        class: "nut-video-controller__playbtn",
        onClick: t[3] || (t[3] = (...s) => e.play && e.play(...s))
      }),
      h("div", pg, E(e.videoSet.displayTime), 1),
      h("div", mg, [
        h("div", hg, [
          h("div", {
            class: "buffered",
            style: A({ width: `${e.videoSet.loaded}%` })
          }, null, 4),
          h("div", {
            class: "nut-video-controller__ball",
            style: A({
              transform: `translate3d(${e.videoSet.progress.current}px, -50%, 0)`
            }),
            onTouchmove: t[4] || (t[4] = _e((s) => e.touchSlidMove(s), ["stop", "prevent"])),
            onTouchstart: t[5] || (t[5] = _e((s) => e.touchSlidSrart(), ["stop"])),
            onTouchend: t[6] || (t[6] = _e((s) => e.touchSlidEnd(s), ["stop"]))
          }, yg, 36),
          h("div", vg, null, 512)
        ], 512)
      ]),
      h("div", $g, E(e.videoSet.totalTime), 1),
      h("div", {
        class: L(["nut-video-controller__volume", { muted: e.state.isMuted }]),
        onClick: t[7] || (t[7] = (...s) => e.handleMuted && e.handleMuted(...s))
      }, null, 2),
      h("div", {
        class: "nut-video-controller__full",
        onClick: t[8] || (t[8] = (...s) => e.fullScreen && e.fullScreen(...s))
      })
    ], 2), [
      [De, e.showToolbox && !e.isDisabled]
    ]),
    Ce(h("div", bg, [
      h("p", wg, E(e.translate("errorTip")), 1),
      h("p", {
        class: "nut-video-error-retry",
        onClick: t[9] || (t[9] = (...s) => e.retry && e.retry(...s))
      }, E(e.translate("clickRetry")), 1)
    ], 512), [
      [De, e.state.isError]
    ])
  ], 512);
}
const pn = /* @__PURE__ */ q(ug, [["render", kg]]), Oo = Symbol("nut-steps"), { create: Cg, componentName: Sg } = j("steps"), Tg = Cg({
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
      const a = Sg;
      return {
        [a]: !0,
        [`${a}-${e.direction}`]: !0,
        [`${a}-dot`]: !!e.progressDot
      };
    });
    return Ee(Oo, {
      relation: (a) => {
        a && l.children.push(a);
      },
      state: l,
      props: e,
      onEmit: (a) => {
        t("clickStep", a);
      }
    }), () => {
      var a;
      return be(
        "view",
        {
          class: o.value
        },
        (a = n.default) == null ? void 0 : a.call(n)
      );
    };
  }
}), { create: Ng, componentName: Dg } = j("step"), _g = Ng({
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
    const { proxy: e } = je(), t = Le(Oo);
    t.relation(e);
    const n = ce({
      dot: t.props.progressDot
    }), l = D(() => t.state.children.indexOf(e) + 1), o = () => {
      const i = l.value;
      return i < +t.props.current ? "finish" : i === +t.props.current ? "process" : "wait";
    }, r = D(() => o()), s = D(() => {
      const i = Dg;
      return {
        [i]: !0,
        [`${i}-${r.value}`]: !0
      };
    }), a = () => {
      t.onEmit(l.value);
    };
    return de(Z({}, he(n)), {
      index: l,
      classes: s,
      handleClickStep: a
    });
  }
}), Ig = { class: "nut-step-head" }, Bg = /* @__PURE__ */ h("view", { class: "nut-step-line" }, null, -1), Mg = { class: "nut-step-icon-inner" }, Lg = {
  key: 1,
  class: "nut-step-inner"
}, Eg = { class: "nut-step-main" }, Pg = { class: "nut-step-title" }, Ag = { key: 0 }, zg = {
  key: 0,
  class: "nut-step-content"
}, Vg = ["innerHTML"];
function Og(e, t, n, l, o, r) {
  return c(), f("view", {
    class: L(e.classes),
    onClick: t[0] || (t[0] = (...s) => e.handleClickStep && e.handleClickStep(...s))
  }, [
    h("view", Ig, [
      Bg,
      h("view", {
        class: L(["nut-step-icon", [e.dot ? "" : "is-icon"]])
      }, [
        h("view", Mg, [
          I(e.$slots, "icon", {}, () => [
            e.dot ? (c(), f(x, { key: 0 }, [], 64)) : (c(), f("view", Lg, E(e.index), 1))
          ])
        ])
      ], 2)
    ]),
    h("view", Eg, [
      h("view", Pg, [
        e.$slots.title ? N("", !0) : (c(), f("span", Ag, E(e.title), 1)),
        I(e.$slots, "title")
      ]),
      e.content || e.$slots.content ? (c(), f("view", zg, [
        e.$slots.content ? N("", !0) : (c(), f("span", {
          key: 0,
          innerHTML: e.content
        }, null, 8, Vg)),
        I(e.$slots, "content")
      ])) : N("", !0)
    ])
  ], 2);
}
const Hg = /* @__PURE__ */ q(_g, [["render", Og]]), Ho = Symbol("nut-swiper"), { create: Rg, componentName: zn } = j("swiper"), Fg = Rg({
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
    const o = z(), r = ce({
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
    }), s = et(), a = D(() => e.direction === "vertical"), i = D(() => {
      const R = zn;
      return {
        [`${R}-inner`]: !0,
        [`${R}-vertical`]: a.value
      };
    }), p = D(() => {
      const R = zn;
      return {
        [`${R}-pagination`]: !0,
        [`${R}-pagination-vertical`]: a.value
      };
    }), d = D(() => a.value ? s.deltaY.value : s.deltaX.value), v = D(() => s.direction.value === e.direction), g = D(() => r.children.length), k = D(() => r[a.value ? "height" : "width"]), $ = D(() => g.value * k.value), w = D(() => r.rect ? (a.value ? r.rect.height : r.rect.width) - k.value * g.value : 0), u = D(() => (r.active + g.value) % g.value), y = () => {
      let R = 0;
      R = r.offset, r.style = {
        transitionDuration: `${r.moving ? 0 : e.duration}ms`,
        transform: `translate${a.value ? "Y" : "X"}(${R}px)`,
        [a.value ? "height" : "width"]: `${k.value * g.value}px`,
        [a.value ? "width" : "height"]: `${a.value ? r.width : r.height}px`
      };
    }, m = (R) => {
      var ue;
      let te = [];
      const X = r.childrenVNode.length;
      let se = (ue = n == null ? void 0 : n.default) == null ? void 0 : ue.call(n);
      if (se = se.filter((pe) => pe.children && Array.isArray(pe.children)), se.forEach((pe) => {
        te = te.concat(pe.children);
      }), !X)
        r.childrenVNode = te.slice(), R.proxy && r.children.push(R.proxy);
      else if (X > te.length)
        r.children = r.children.filter((pe) => R.proxy !== pe);
      else if (X < te.length) {
        for (let pe = 0; pe < X; pe++)
          if (te[pe].key !== r.childrenVNode[pe].key) {
            R.proxy && r.children.splice(pe, 0, R.proxy), R.vnode && r.childrenVNode.splice(pe, 0, R.vnode);
            break;
          }
        X !== te.length && (R.proxy && r.children.push(R.proxy), R.vnode && r.childrenVNode.push(R.vnode));
      } else
        r.childrenVNode = te.slice(), R.proxy && r.children.push(R.proxy);
    }, b = (R, te = 0) => {
      let X = R * k.value;
      e.loop || (X = Math.min(X, -w.value));
      let se = te - X;
      return e.loop || (se = ze(se, w.value, 0)), se;
    }, S = (R) => {
      const { active: te } = r;
      return R ? e.loop ? ze(te + R, -1, g.value) : ze(te + R, 0, g.value - 1) : te;
    }, _ = ({ pace: R = 0, offset: te = 0, isEmit: X = !1 }) => {
      if (g.value <= 1)
        return;
      const { active: se } = r, ue = S(R), pe = b(ue, te);
      if (e.loop) {
        if (r.children[0] && pe !== w.value) {
          const we = pe < w.value;
          r.children[0].setOffset(we ? $.value : 0);
        }
        if (r.children[g.value - 1] && pe !== 0) {
          const we = pe > 0;
          r.children[g.value - 1].setOffset(we ? -$.value : 0);
        }
      }
      r.active = ue, r.offset = pe, X && se !== r.active && t("change", u.value), y();
    }, B = () => {
      r.moving = !0, r.active <= -1 && _({ pace: g.value }), r.active >= g.value && _({ pace: -g.value });
    }, M = () => {
      r.autoplayTimer && clearTimeout(r.autoplayTimer);
    }, C = (R) => {
      B(), s.reset(), He(() => {
        He(() => {
          r.moving = !1, _({
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
      B(), s.reset(), He(() => {
        r.moving = !1;
        let te;
        e.loop && g.value === R ? te = r.active === 0 ? 0 : R : te = R % g.value, _({
          pace: te - r.active,
          isEmit: !0
        });
      });
    }, K = () => {
      +e.autoPlay <= 0 || g.value <= 1 || (M(), r.autoplayTimer = setTimeout(() => {
        P(), K();
      }, Number(e.autoPlay)));
    }, G = (R = +e.initPage) => {
      M(), r.rect = o.value.getBoundingClientRect(), R = Math.min(g.value - 1, R), r.width = e.width ? +e.width : r.rect.width, r.height = e.height ? +e.height : r.rect.height, r.active = R, r.offset = b(r.active), r.moving = !0, y(), K();
    }, le = (R) => {
      e.isPreventDefault && R.preventDefault(), e.isStopPropagation && R.stopPropagation(), e.touchable && (s.start(R), r.touchTime = Date.now(), M(), B());
    }, Y = (R) => {
      e.touchable && r.moving && (s.move(R), v.value && _({
        offset: d.value
      }));
    }, U = () => {
      if (!e.touchable || !r.moving)
        return;
      const R = d.value / (Date.now() - r.touchTime);
      if ((Math.abs(R) > 0.3 || Math.abs(d.value) > +(k.value / 2).toFixed(2)) && v.value) {
        let X = 0;
        const se = a.value ? s.offsetY.value : s.offsetX.value;
        e.loop ? X = se > 0 ? d.value > 0 ? -1 : 1 : 0 : X = -Math[d.value > 0 ? "ceil" : "floor"](d.value / k.value), _({
          pace: X,
          isEmit: !0
        });
      } else
        d.value && _({ pace: 0 });
      r.moving = !1, y(), K();
    };
    return Ee(Ho, {
      props: e,
      size: k,
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
        Se(() => {
          G(Number(R));
        });
      }
    ), Q(
      () => e.height,
      () => {
        Se(() => {
          G();
        });
      }
    ), Q(
      () => r.children.length,
      () => {
        Se(() => {
          G();
        });
      }
    ), Q(
      () => e.autoPlay,
      (R) => {
        +R > 0 ? K() : M();
      }
    ), {
      state: r,
      classesInner: i,
      classesPagination: p,
      container: o,
      activePagination: u,
      onTouchStart: le,
      onTouchMove: Y,
      onTouchEnd: U
    };
  }
});
function Wg(e, t, n, l, o, r) {
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
      (c(!0), f(x, null, ie(e.state.children.length, (s, a) => (c(), f("i", {
        key: a,
        style: A({
          backgroundColor: e.activePagination === a ? e.paginationColor : e.paginationUnselectedColor
        }),
        class: L({ active: e.activePagination === a })
      }, null, 6))), 128))
    ], 2)) : N("", !0)
  ], 544);
}
const mn = /* @__PURE__ */ q(Fg, [["render", Wg]]);
function Yg(e) {
  const t = je();
  t && Object.assign(t.proxy, e);
}
const { create: jg } = j("swiper-item"), Ug = jg({
  setup() {
    const e = Le(Ho);
    e.relation(je());
    const t = ce({
      offset: 0
    }), n = D(() => {
      const o = {}, r = e == null ? void 0 : e.props.direction;
      return e != null && e.size.value && (o[r === "horizontal" ? "width" : "height"] = `${e == null ? void 0 : e.size.value}px`), t.offset && (o.transform = `translate${r === "horizontal" ? "X" : "Y"}(${t.offset}px)`), o;
    }), l = (o) => {
      t.offset = o;
    };
    return Xe(() => {
      e.relation(je(), "unmount");
    }), Yg({ setOffset: l }), {
      style: n
    };
  }
});
function Kg(e, t, n, l, o, r) {
  return c(), f("view", {
    class: "nut-swiper-item",
    style: A(e.style)
  }, [
    I(e.$slots, "default")
  ], 4);
}
const hn = /* @__PURE__ */ q(Ug, [["render", Kg]]), Xg = ["innerHTML"], qg = ["innerHTML"], Vn = "nut-price", Ht = /* @__PURE__ */ Pe({
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
      [Vn]: !0,
      [`${Vn}--strike`]: t.strikeThrough
    })), l = D(() => t.needSymbol ? t.symbol : ""), o = (a) => String(a).indexOf(".") > 0, r = (a) => (Number(a) == 0 && (a = 0), o(a) ? (a = Number(a).toFixed(t.decimalDigits), a = typeof a.split(".") == "string" ? a.split(".") : a.split(".")[0]) : a = a.toString(), t.thousands ? (a || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,") : a), s = (a) => {
      Number(a) == 0 && (a = 0), o(a) ? (a = Number(a).toFixed(t.decimalDigits), a = typeof a.split(".") == "string" ? 0 : a.split(".")[1] ? a.split(".")[1] : 0) : a = 0;
      const i = "0." + a, p = Number(i).toFixed(t.decimalDigits);
      return String(p).substring(2, p.length);
    };
    return (a, i) => (c(), f("view", {
      class: L(n.value)
    }, [
      a.needSymbol && a.position === "before" ? (c(), f("view", {
        key: 0,
        class: L(["nut-price--symbol", `nut-price--symbol-${a.size}`]),
        innerHTML: l.value
      }, null, 10, Xg)) : N("", !0),
      h("view", {
        class: L(`nut-price--${a.size}`)
      }, E(r(a.price)), 3),
      a.decimalDigits != 0 ? (c(), f("view", {
        key: 1,
        class: L(`nut-price--decimal-${a.size}`)
      }, ".", 2)) : N("", !0),
      h("view", {
        class: L(`nut-price--decimal-${a.size}`)
      }, E(s(a.price)), 3),
      a.needSymbol && a.position === "after" ? (c(), f("view", {
        key: 2,
        class: L(["nut-price--symbol", `nut-price--symbol-${a.size}`]),
        innerHTML: l.value
      }, null, 10, qg)) : N("", !0)
    ], 2));
  }
});
Re(Ht);
const Ro = {
  show: { type: Boolean, default: !1 },
  initNo: { type: Number, default: 0 },
  showIndex: { type: Boolean, default: !0 },
  minZoom: { type: Number, default: 1 / 3 },
  maxZoom: { type: Number, default: 3 }
}, { create: Zg } = j("image-preview-item"), Gg = Zg({
  props: de(Z({}, Ro), {
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
    NutVideo: pn,
    NutSwiperItem: hn
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
    }), r = D(() => {
      const T = e.image;
      if (T && T.src) {
        const { scale: P, moveX: O, moveY: K, moving: G, zooming: le } = n, Y = {
          transitionDuration: le || G ? "0s" : ".3s"
        };
        if (P !== 1) {
          const U = O / P, R = K / P;
          Y.transform = `scale(${P}, ${P}) translate(${U}px, ${R}px)`;
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
    }), a = D(() => {
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
      T = ze(T, +e.minZoom, +e.maxZoom + 1), T !== n.scale && (n.scale = T, t("scale", {
        scale: T,
        index: e.initNo
      }));
    }, v = () => {
      const T = n.scale > 1 ? 1 : 2;
      d(T), n.moveX = 0, n.moveY = 0;
    }, g = (T) => Math.sqrt(pt(T[0].clientX - T[1].clientX, 2) + pt(T[0].clientY - T[1].clientY, 2));
    let k, $, w, u, y, m, b;
    const S = (T) => {
      const { touches: P } = T, { offsetX: O } = l;
      l.start(T), b = P.length, k = n.moveX, $ = n.moveY, m = Date.now(), n.moving = b === 1 && n.scale !== 1, n.zooming = b === 2 && !O.value, n.zooming && (w = n.scale, u = g(T.touches));
    }, _ = (T) => {
      const { touches: P } = T;
      if (l.move(T), (n.moving || n.zooming) && dt(T, !0), n.moving) {
        const { deltaX: O, deltaY: K } = l, G = O.value + k, le = K.value + $;
        n.moveX = ze(G, -s.value, s.value), n.moveY = ze(le, -a.value, a.value);
      }
      if (n.zooming && P.length === 2) {
        const O = g(P), K = w * O / u;
        d(K);
      }
    }, B = () => {
      if (b == 1 && e.video && e.video.source || b > 1)
        return;
      const { offsetX: T, offsetY: P } = l, O = Date.now() - m, K = 250, G = 5;
      T.value < G && P.value < G && O < K && (y ? (clearTimeout(y), y = null, v()) : y = setTimeout(() => {
        e.contentClose && t("close"), y = null;
      }, K));
    }, M = (T) => {
      let P = !1;
      (n.moving || n.zooming) && (P = !0, n.moving && k === n.moveX && $ === n.moveY && (P = !1), T.touches.length || (n.zooming && (n.moveX = ze(n.moveX, -s.value, s.value), n.moveY = ze(n.moveY, -a.value, a.value), n.zooming = !1), n.moving = !1, k = 0, $ = 0, w = 1, n.scale < 1 && p(), n.scale > e.maxZoom && (n.scale = +e.maxZoom))), dt(T, P), B(), l.reset();
    }, C = () => {
      t("close");
    };
    return Q(() => e.initNo, p), Q(
      () => e.show,
      (T) => {
        T || p();
      }
    ), de(Z({}, he(n)), {
      onTouchStart: S,
      onTouchMove: _,
      onTouchEnd: M,
      getDistance: g,
      imageStyle: r,
      imageLoad: i,
      closeSwiper: C
    });
  }
}), Jg = ["src"];
function Qg(e, t, n, l, o, r) {
  const s = W("nut-video"), a = W("nut-swiper-item");
  return c(), ee(a, { onClick: e.closeSwiper }, {
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
        }, null, 40, Jg)) : N("", !0),
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
const xg = /* @__PURE__ */ q(Gg, [["render", Qg]]), { create: e0 } = j("image-preview"), t0 = e0({
  props: de(Z({}, Ro), {
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
    ImagePreviewItem: xg,
    CircleClose: nn,
    NutPopup: Ae,
    NutSwiper: mn
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
    }), r = D(() => Yn(e.videos) ? [].concat(e.videos).concat(e.images) : e.images), s = (d) => {
      d !== l.active && (l.active = d, t("change", l.active));
    }, a = () => {
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
        l.showPop = d, d && (s(e.initNo), Se(() => {
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
    }), de(Z({
      swipeRef: n
    }, he(l)), {
      onClose: a,
      mergeImages: r,
      setActive: s,
      iconClasses: o
    });
  }
}), n0 = {
  ref: "swipeRef",
  class: "nut-image-preview"
}, o0 = {
  key: 0,
  class: "nut-image-preview-index"
};
function l0(e, t, n, l, o, r) {
  const s = W("image-preview-item"), a = W("nut-swiper"), i = W("CircleClose"), p = W("nut-popup");
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
      h("view", n0, [
        e.showPop ? (c(), ee(a, {
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
      e.showIndex ? (c(), f("view", o0, E(e.active + 1) + " / " + E(e.mergeImages.length), 1)) : N("", !0),
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
const gn = /* @__PURE__ */ q(t0, [["render", l0]]);
class s0 {
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
class a0 {
  constructor(t) {
    V(this, "options", new s0());
    const n = Object.assign(this.options, t), { unmount: l } = an(n, {
      name: "image-preview",
      components: [Ae, pn, mn, hn, Tt],
      wrapper: () => ({
        setup() {
          return () => (n.onClose = () => {
            n.show = !1, Se(() => {
              l();
            });
          }, be(gn, n));
        }
      })
    });
  }
}
const r0 = (e) => new a0(e);
r0.install = (e) => {
  e.use(gn);
};
function i0(e) {
  const t = je();
  t && Object.assign(t.proxy, e);
}
const { create: u0 } = j("countup"), c0 = u0({
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
    }, r = ce({
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
    }), { startFlag: s, scrolling: a, customBgImg: i, type: p } = ce(e);
    Q(
      () => e.customChangeNum,
      () => {
        v(), u(0);
      }
    ), Q(
      () => e.machinePrizeLevel,
      (C) => {
        r.prizeLevelTrun = C;
      }
    ), Q(
      () => e.initNum,
      (C) => {
        r.current = C, r.valFlag = !1, d();
      }
    ), Q(
      () => e.endNum,
      () => {
        r.current = e.initNum, r.valFlag = !1, d();
      }
    );
    const d = () => {
      if (r.valFlag)
        return !1;
      s && (a || i ? p != "machine" && u() : (w(), setTimeout(() => {
        r.valFlag = !0;
      }, 300)));
    }, v = () => {
      clearInterval(Number(r.timer)), r.timer = null;
    }, g = (C, T, P) => {
      const O = (C.toString().split(".")[1] || "").length, K = (T.toString().split(".")[1] || "").length, G = Math.pow(10, Math.max(O, K));
      return P == "-" ? Number((C * G - T * G).toFixed(0)) / G : Number((C * G + T * G).toFixed(0)) / G;
    }, k = (C) => {
      let { num_total_len: T, pointNum: P, initDigit1: O, initDigit2: K, sortFlag: G } = r, le = G == "add" || G == "equal" ? String(K)[C - (T - P)] : 10 - Number(String(K)[C - (T - P)]), Y = G == "add" || G == "equal" ? String(O)[C] : 10 - Number(String(O)[C]), U = C > T - P - 1 ? -le * 100 + "%" : C <= String(O).length - 1 ? -Y * 100 + "%" : 0;
      return U == "-1000%" && (U = 0), U;
    }, $ = (C) => {
      let { num_total_len: T, pointNum: P, initDigit1: O, initDigit2: K } = r, G = String(K)[C - (T - P)];
      return C > T - P - 1 ? G || 0 : C <= String(O).length - 1 ? String(O)[C] : 0;
    }, w = () => {
      let { endNum: C, initNum: T, speed: P, toFixed: O } = e, K = setInterval(() => {
        if (T > C)
          if (Number(r.current) <= C || Number(r.current) <= P)
            r.current = C.toFixed(O), clearInterval(K), t("scrollEnd"), r.valFlag = !1;
          else {
            let G = parseFloat(String(r.current)) - parseFloat(String(P));
            r.current = G.toFixed(O);
          }
        else if (Number(r.current) >= C)
          r.current = C.toFixed(O), clearInterval(K), t("scrollEnd"), r.valFlag = !1;
        else {
          let G = parseFloat(String(r.current)) + parseFloat(String(P));
          r.current = G.toFixed(O);
        }
      }, e.during);
    }, u = (C) => {
      let { initNum: T, endNum: P, toFixed: O, customBgImg: K } = e;
      K && (T = e.customChangeNum);
      let G, le, Y, U;
      T != 0 ? (O != 0 && (T = Number(T.toFixed(O))), String(T).indexOf(".") > -1 ? (G = String(T).split(".")[0].length, le = String(T).split(".")[1].length) : (G = String(T).length, le = 0)) : (G = 1, le = 0), P != 0 ? (O != 0 && (P = Number(P.toFixed(O))), String(P).indexOf(".") > -1 ? (Y = String(P).split(".")[0].length, U = String(P).split(".")[1].length) : (Y = String(P).length, U = 0)) : (Y = 1, U = 0);
      let R = G >= Y ? G : Y, te = le >= U ? le : U;
      r.num_total_len = R + te, r.pointNum = te, T > P ? (r.sortFlag = "reduce", r.to0_10 = [0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], r.totalCount = g(T, P, "-"), r.numberVal = Number(String(T))) : T < P ? (r.sortFlag = "add", r.to0_10 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0], r.totalCount = g(P, T, "-"), r.numberVal = Number(String(P))) : r.sortFlag = "equal";
      var X = 1;
      for (let ue = 0; ue < r.pointNum; ue++)
        X *= 10;
      var se = r.numberVal * X;
      if (r.relNum = se, O != 0 && (r.pointNum = String(r.numberVal).split(".")[1] ? String(r.numberVal).split(".")[1].length : 0, r.num_total_len = String(se).length), String(T).indexOf(".") > -1) {
        let ue = String(T).split(".");
        r.initDigit1 = Number(ue[0]), r.initDigit2 = Number(ue[1]);
      } else
        r.initDigit1 = T, r.initDigit2 = 0;
      a && !K ? Se(() => {
        if (r.sortFlag == "equal")
          return !1;
        let ue = l.value[r.num_total_len - 1];
        y(ue);
      }) : C !== 0 && S();
    }, y = (C) => {
      v();
      var T = 1;
      r.pointNum != 0 && (T = 1 / Math.pow(10, r.pointNum)), r.timer = setInterval(() => {
        m(C), r.totalCount = g(r.totalCount, T, "-"), r.totalCount <= 0 && (v(), t("scrollEnd"), r.valFlag = !1);
      }, e.during);
    }, m = (C) => {
      let T = C.getAttribute("turn-number"), P;
      if (r.sortFlag == "add" ? P = parseInt(String(T)) + 1 : P = parseInt(String(T)) - 1 >= 0 ? parseInt(String(T)) - 1 : 9, C.setAttribute("turn-number", String(P)), (C.style.transition == "none 0s ease 0s" || P == 1 || !C.style.transition) && (C.style.transition = `all linear ${e.during}ms`), P == 10 || r.sortFlag == "reduce" && P == 0) {
        var O = null;
        C.style.top = `-${r.sortFlag == "add" ? P * 100 : (10 - P) * 100}%`, C.setAttribute("turn-number", "0"), O = setTimeout(() => {
          O && clearTimeout(O), C.style.transition = "none", C.style.top = "0", b(C, P);
        }, 0.975 * e.during);
      } else
        C.style.top = `-${r.sortFlag == "add" ? P * 100 : (10 - P) * 100}%`;
      C.style.top == "-100%" && r.sortFlag == "reduce" && m(C.previousSibling);
    }, b = (C, T) => {
      setTimeout(() => {
        T == 10 && C.previousSibling && m(C.previousSibling);
      }, 200);
    }, S = () => {
      Se(() => {
        n.value.addEventListener("webkitTransitionEnd", () => {
          t("scrollEnd"), r.valFlag = !1;
        });
      });
    }, _ = () => {
      for (r.notPrize = []; r.notPrize.length < 3; ) {
        var C = Math.floor(Math.random() * e.machinePrizeNum + 1);
        r.notPrize.indexOf(C) == -1 && r.notPrize.push(C);
      }
    };
    i0({ machineLuck: () => {
      const C = e.machineTurnMore < 0 ? 0 : e.machineTurnMore;
      let T = e.numHeight * e.machinePrizeNum;
      r.prizeLevelTrun < 0 && _();
      for (let P = 0; P < e.machineNum; P++)
        setTimeout(() => {
          let O = T * (P + 1 + parseFloat(String(C)));
          r.prizeYPrev.length != 0 && (r.prizeY[P] = r.prizeYPrev[P]);
          let K = r.prizeYPrev[P] ? r.prizeYPrev[P] : 0, G = O + K + (e.machinePrizeNum - r.prizeLevelTrun + 1) * e.numHeight + (T - K);
          r.prizeLevelTrun < 0 && (G += e.numHeight * r.notPrize[P]), M(
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
          P += 10, r.prizeY[C] = parseFloat(String(P));
        else if (clearInterval(O), O = null, r.finshMachine += 1, r.prizeY[C] = T, r.finshMachine == e.machineNum) {
          let K = e.numHeight * e.machinePrizeNum;
          r.prizeYPrev = [], JSON.parse(JSON.stringify(r.prizeY)).forEach((le) => {
            let Y = le;
            for (; Y > K; )
              Y -= K;
            r.prizeYPrev.push(Y);
          }), setTimeout(() => {
            r.finshMachine = 0, r.prizeLevelTrun < 0 ? (t("scrollEnd", !1), r.valFlag = !1) : (t("scrollEnd", !0), r.valFlag = !1);
          }, 130);
        }
      }, 30);
    };
    return ve(() => {
      r.current = e.initNum, Se(() => {
        d();
      });
    }), Xe(() => {
      v(), r.timer = null;
    }), de(Z(Z({}, he(r)), he(ce(e))), {
      runNumberImg: n,
      setRef: o,
      topNumber: k,
      turnNumber: $
    });
  }
}), d0 = { class: "nut-countup" }, f0 = ["turn-number"];
function p0(e, t, n, l, o, r) {
  return c(), f("view", d0, [
    e.customBgImg != "" ? (c(), f(x, { key: 0 }, [
      e.type == "machine" ? (c(), f("view", {
        key: 0,
        class: "nut-countup__machine",
        style: A({ height: e.numHeight + "px" })
      }, [
        (c(!0), f(x, null, ie(e.machineNum, (s, a) => (c(), f("view", {
          key: "mImg" + a,
          class: "nut-countup__machine-item",
          style: A({
            width: e.numWidth + "px",
            height: e.numHeight + "px",
            backgroundImage: "url(" + e.customBgImg + ")",
            backgroundPositionY: e.prizeY[a] + "px"
          })
        }, null, 4))), 128))
      ], 4)) : (c(), f("view", {
        key: 1,
        ref: "runNumberImg",
        class: "nut-countup__numberimg",
        style: A({ height: e.numHeight + "px" })
      }, [
        (c(!0), f(x, null, ie(e.num_total_len, (s, a) => (c(), f("view", {
          key: "cImg" + a,
          class: "nut-countup__numberimg__item",
          style: A({
            width: e.numWidth + "px",
            height: e.numHeight + "px",
            left: e.numWidth * (a > e.num_total_len - e.pointNum - 1 ? a == e.num_total_len - e.pointNum ? a * 1.5 : a * 1.3 : a) + "px",
            backgroundImage: "url(" + e.customBgImg + ")",
            backgroundPositionX: "0",
            backgroundPositionY: -(+String(e.relNum)[a] * e.numHeight + e.customSpacNum * +String(e.relNum)[a]) + "px",
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
        (c(!0), f(x, null, ie(e.num_total_len, (s, a) => (c(), f("view", {
          ref_for: !0,
          ref: (i) => e.setRef(i),
          key: s,
          class: "nut-countup__number-item",
          style: A({
            top: e.topNumber(a),
            left: e.numWidth * (a > e.num_total_len - e.pointNum - 1 ? a * 1.1 : a) + "px"
          }),
          "turn-number": e.turnNumber(a)
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
        ], 12, f0))), 128)),
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
const m0 = /* @__PURE__ */ q(c0, [["render", p0]]), h0 = (e) => {
  if (!e)
    return Date.now();
  let t = e;
  return t = +t > 0 ? +t : t.toString().replace(/-/g, "/"), new Date(t).getTime();
}, { create: g0 } = j("countdown"), y0 = "NutCountdown", v0 = g0({
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
    const l = ke(y0), o = ce({
      restTime: 0,
      // 倒计时剩余时间时间
      timer: null,
      counting: !e.paused && e.autoStart,
      // 是否处于倒计时中
      handleEndTime: Date.now(),
      // 最终截止时间
      diffTime: 0
      // 设置了 startTime 时，与 date.now() 的差异
    }), r = D(() => i(o.restTime)), s = () => {
      o.handleEndTime = Number(e.endTime), o.diffTime = Date.now() - h0(e.startTime), o.counting || (o.counting = !0), a();
    }, a = () => {
      window !== void 0 && (o.timer = requestAnimationFrame(() => {
        if (o.counting) {
          const k = Date.now() - o.diffTime, $ = Math.max(o.handleEndTime - k, 0);
          o.restTime = $, $ || (o.counting = !1, v(), t("end"), t("onEnd")), $ > 0 && a();
        }
      }));
    }, i = (k, $) => {
      const w = k;
      let u = {
        d: 0,
        h: 0,
        m: 0,
        s: 0,
        ms: 0
      };
      const y = 1e3, m = 60 * y, b = 60 * m, S = 24 * b;
      return w > 0 && (u.d = w >= y ? Math.floor(w / S) : 0, u.h = Math.floor(w % S / b), u.m = Math.floor(w % b / m), u.s = Math.floor(w % m / y), u.ms = Math.floor(w % y)), $ == "custom" ? u : p(Z({}, u));
    }, p = (k) => {
      let { d: $, h: w, m: u, s: y, ms: m } = k, b = e.format;
      if (b.includes("DD") ? b = b.replace("DD", Qe($)) : w += Number($) * 24, b.includes("HH") ? b = b.replace("HH", Qe(w)) : u += Number(w) * 60, b.includes("mm") ? b = b.replace("mm", Qe(u)) : y += Number(u) * 60, b.includes("ss") ? b = b.replace("ss", Qe(y)) : m += Number(y) * 1e3, b.includes("S")) {
        const S = Qe(m, 3).toString();
        b.includes("SSS") ? b = b.replace("SSS", S) : b.includes("SS") ? b = b.replace("SS", S.slice(0, 2)) : b.includes("S") && (b = b.replace("S", S.slice(0, 1)));
      }
      return b;
    }, d = () => {
      !o.counting && !e.autoStart && (o.counting = !0, o.handleEndTime = Date.now() + Number(o.restTime), a(), t("restart", o.restTime), t("onRestart", o.restTime));
    }, v = () => {
      cancelAnimationFrame(o.timer), o.counting = !1, t("paused", o.restTime), t("onPaused", o.restTime);
    }, g = () => {
      e.autoStart || (v(), o.restTime = Number(e.time));
    };
    return Rn(() => {
      e.autoStart ? s() : o.restTime = Number(e.time);
    }), Q(
      () => o.restTime,
      (k) => {
        let $ = i(k, "custom");
        t("update:modelValue", $), t("input", $);
      }
    ), Q(
      () => e.paused,
      (k, $) => {
        $ ? (o.counting || (o.counting = !0, o.handleEndTime = Date.now() + Number(o.restTime), a()), t("restart", o.restTime), t("onRestart", o.restTime)) : o.counting && v();
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
    ), de(Z({}, he(e)), {
      slots: n,
      start: d,
      pause: v,
      renderTime: r,
      translate: l,
      reset: g
    });
  }
}), $0 = { class: "nut-countdown" }, b0 = ["innerHTML"];
function w0(e, t, n, l, o, r) {
  return c(), f("view", $0, [
    e.slots.default ? I(e.$slots, "default", { key: 0 }) : (c(), f("view", {
      key: 1,
      class: "nut-countdown__content",
      innerHTML: e.renderTime
    }, null, 8, b0))
  ]);
}
const k0 = /* @__PURE__ */ q(v0, [["render", w0]]), { create: C0 } = j("tag"), S0 = C0({
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
function T0(e, t, n, l, o, r) {
  const s = W("Close");
  return c(), f("view", {
    class: L(e.classes),
    style: A(e.style),
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
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
const Fo = /* @__PURE__ */ q(S0, [["render", T0]]), { create: N0 } = j("popover"), D0 = N0({
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
    const n = z(), l = z(), o = z(e.visible), r = z(), s = z({
      width: 0,
      height: 0
    }), a = D(() => {
      const y = "nut-popover-arrow", m = e.location, b = m.split("-")[0];
      return `${y} ${y}-${b} ${y}--${m}`;
    }), i = D(() => {
      const y = {}, { bgColor: m, arrowOffset: b, location: S } = e, _ = S.split("-")[0], B = S.split("-")[1], M = 16;
      return m && (y[`border${p(_)}Color`] = m), e.arrowOffset != 0 && (["bottom", "top"].includes(_) && (B || (y.left = `calc(50% + ${b}px)`), B == "start" && (y.left = `${M + b}px`), B == "end" && (y.right = `${M - b}px`)), ["left", "right"].includes(_) && (B || (y.top = `calc(50% - ${b}px)`), B == "start" && (y.top = `${M - b}px`), B == "end" && (y.bottom = `${M + b}px`))), y;
    }), p = (y) => (y = y.toLowerCase(), y = y.replace(/\b\w+\b/g, (m) => m.substring(0, 1).toUpperCase() + m.substring(1)), y), d = D(() => {
      const y = {};
      if (!r.value)
        return {};
      const m = s.value.width, b = s.value.height, { width: S, height: _, left: B, top: M, right: C } = r.value, { location: T, offset: P } = e, O = T == null ? void 0 : T.split("-")[0], K = T == null ? void 0 : T.split("-")[1];
      let G = 0, le = 0;
      if (Array.isArray(P) && (P == null ? void 0 : P.length) === 2 && (G += Number(P[1]), le += Number(P[0])), S) {
        if (["bottom", "top"].includes(O)) {
          const Y = O === "bottom" ? _ + G : -(b + G);
          y.top = `${M + Y}px`, K || (y.left = `${-(m - S) / 2 + B + le}px`), K === "start" && (y.left = `${B + le}px`), K === "end" && (y.left = `${C + le}px`);
        }
        if (["left", "right"].includes(O)) {
          const Y = O === "left" ? -(m + G) : S + G;
          y.left = `${B + Y}px`, K || (y.top = `${M - b / 2 + _ / 2 - 4 + le}px`), K === "start" && (y.top = `${M + le}px`), K === "end" && (y.top = `${M + _ + le}px`);
        }
      }
      return y;
    }), v = () => {
      var m, b, S, _;
      const y = Ye(
        e.targetId ? document.querySelector(`#${e.targetId}`) : n.value
      );
      r.value = {
        width: y.width,
        height: y.height,
        left: y.left,
        top: y.top + Math.max(((m = document.documentElement) == null ? void 0 : m.scrollTop) || 0, ((b = document.body) == null ? void 0 : b.scrollTop) || 0),
        right: y.right
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
      (y) => {
        o.value = y, y ? (window.addEventListener("touchstart", u, !0), Se(() => {
          v();
        })) : window.removeEventListener("touchstart", u, !0);
      }
    );
    const g = (y) => {
      t("update", y), t("update:visible", y);
    }, k = () => {
      g(!e.visible), t("open");
    }, $ = () => {
      t("update:visible", !1), t("close");
    }, w = (y, m) => {
      !y.disabled && t("choose", y, m), e.closeOnClickAction && $();
    }, u = (y) => {
      const m = n.value, b = l.value;
      let S = m && !m.contains(y.target);
      if (e.targetId) {
        const _ = document.querySelector(`#${e.targetId}`);
        S = _ && !_.contains(y.target);
      }
      S && b && !b.contains(y.target) && e.closeOnClickOutside && $();
    };
    return {
      showPopup: o,
      openPopover: k,
      popoverArrow: a,
      closePopover: $,
      chooseItem: w,
      popoverRef: n,
      popoverContentRef: l,
      getRootPosition: d,
      popoverArrowStyle: i,
      renderIcon: ft
    };
  }
}), _0 = {
  ref: "popoverContentRef",
  class: "nut-popover-content-group"
}, I0 = ["onClick"], B0 = { class: "nut-popover-menu-item-name" };
function M0(e, t, n, l, o, r) {
  const s = W("nut-popup");
  return c(), f(x, null, [
    e.targetId ? N("", !0) : (c(), f("div", {
      key: 0,
      ref: "popoverRef",
      class: "nut-popover-wrapper",
      onClick: t[0] || (t[0] = (...a) => e.openPopover && e.openPopover(...a))
    }, [
      I(e.$slots, "reference")
    ], 512)),
    (c(), ee(Hn, { to: "body" }, [
      h("div", {
        class: L(["nut-popover", `nut-popover--${e.theme}`, `${e.customClass}`]),
        style: A(e.getRootPosition)
      }, [
        oe(s, {
          visible: e.showPopup,
          "onUpdate:visible": t[1] || (t[1] = (a) => e.showPopup = a),
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
            h("div", _0, [
              e.showArrow ? (c(), f("div", {
                key: 0,
                class: L(e.popoverArrow),
                style: A(e.popoverArrowStyle)
              }, null, 6)) : N("", !0),
              I(e.$slots, "content"),
              (c(!0), f(x, null, ie(e.list, (a, i) => (c(), f("div", {
                key: i,
                class: L([a.className, a.disabled && "nut-popover-menu-disabled", "nut-popover-menu-item"]),
                onClick: _e((p) => e.chooseItem(a, i), ["stop"])
              }, [
                a.icon ? (c(), ee(Ve(e.renderIcon(a.icon)), {
                  key: 0,
                  class: "nut-popover-item-img"
                })) : N("", !0),
                h("div", B0, E(a.name), 1)
              ], 10, I0))), 128))
            ], 512)
          ]),
          _: 3
        }, 8, ["visible", "pop-class", "style", "overlay", "duration", "overlay-style", "overlay-class", "close-on-click-overlay"])
      ], 6)
    ]))
  ], 64);
}
const Wo = /* @__PURE__ */ q(D0, [["render", M0]]), { create: L0 } = j("skeleton"), E0 = L0({
  components: {
    NutAvatar: fn
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
      const a = "avatarClass";
      return {
        [a]: !0,
        [`${a}--${t.value}`]: t.value
      };
    });
    return {
      avatarShape: t,
      avatarClass: o,
      getBlockClass: (a) => ({
        [a]: !0,
        [`${a}--round`]: n.value
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
}), P0 = { key: 0 }, A0 = {
  key: 1,
  class: "nut-skeleton"
}, z0 = {
  key: 0,
  class: "nut-skeleton-animation"
}, V0 = { class: "nut-skeleton-content" };
function O0(e, t, n, l, o, r) {
  const s = W("nut-avatar");
  return e.loading ? (c(), f("view", A0, [
    e.animated ? (c(), f("view", z0)) : N("", !0),
    h("view", V0, [
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
        (c(!0), f(x, null, ie(Number(e.row), (a) => (c(), f("view", {
          key: a,
          class: L(e.getBlockClass("nut-skeleton-blockLine")),
          style: A({ height: e.height })
        }, null, 6))), 128))
      ], 4)
    ])
  ])) : (c(), f("view", P0, [
    I(e.$slots, "default")
  ]));
}
const H0 = /* @__PURE__ */ q(E0, [["render", O0]]), Yo = Symbol("nut-collapse"), R0 = { class: "nut-collapse" }, jo = /* @__PURE__ */ Pe({
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
    const r = (i, p, d = !0) => {
      o.value = i, l("update:modelValue", i), l("change", i, p, d);
    };
    return Ee(Yo, {
      updateVal: (i) => {
        if (n.accordion)
          o.value === i ? r("", i, !1) : r(i, i, !0);
        else if (Array.isArray(o.value))
          if (o.value.includes(i)) {
            const p = o.value.filter((d) => d !== i);
            r(p, i, !1);
          } else {
            const p = o.value.concat([i]);
            r(p, i, !0);
          }
        else
          console.warn("[NutUI] <Collapse> 未开启手风琴模式时 v-model 应为数组");
      },
      isExpanded: (i) => n.accordion ? o.value === i : Array.isArray(o.value) ? o.value.includes(i) : !1
    }), (i, p) => (c(), f("view", R0, [
      I(i.$slots, "default")
    ]));
  }
});
Re(jo);
const F0 = { class: "nut-collapse-item__title-main" }, W0 = { class: "nut-collapse-item__title-main-value" }, Y0 = ["innerHTML"], j0 = {
  key: 2,
  class: "nut-collapse-item__title-label"
}, U0 = {
  key: 0,
  class: "nut-collapse-item__title-sub"
}, K0 = ["innerHTML"], X0 = {
  key: 0,
  class: "nut-collapse__item-extraWrapper"
}, q0 = { class: "nut-collapse__item-extraWrapper__extraRender" }, Uo = /* @__PURE__ */ Pe({
  name: "NutCollapseItem",
  __name: "collapse-item",
  props: {
    title: { default: "" },
    value: { default: "" },
    label: { default: "" },
    disabled: { type: Boolean, default: !1 },
    name: { default: -1 },
    border: { type: Boolean, default: !0 },
    icon: { default: () => Jn },
    rotate: { default: 180 }
  },
  setup(e) {
    const t = e, n = z(null), l = z(null), o = Le(Yo), r = D(() => {
      const g = "nut-collapse-item";
      return {
        [g]: !0,
        [g + "__border"]: t.border
      };
    }), s = D(() => o ? o.isExpanded(t.name) : !1), a = z(s.value ? "auto" : "0px"), i = () => {
      o && o.updateVal(t.name);
    }, p = () => {
      s.value && (a.value = "auto");
    }, d = () => {
      a.value = "0px", requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          var k;
          const g = (k = l.value) == null ? void 0 : k.offsetHeight;
          a.value = g ? `${g}px` : "auto";
        });
      });
    }, v = () => {
      var k;
      const g = (k = l.value) == null ? void 0 : k.offsetHeight;
      a.value = g ? `${g}px` : "auto", requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          a.value = "0px";
        });
      });
    };
    return Q(s, (g) => {
      g ? d() : v();
    }), (g, k) => (c(), f("view", {
      class: L(r.value)
    }, [
      h("view", {
        class: L(["nut-collapse-item__title", { "nut-collapse-item__title--disabled": g.disabled }]),
        onClick: i
      }, [
        h("view", F0, [
          h("view", W0, [
            g.$slots.title ? I(g.$slots, "title", { key: 0 }) : (c(), f("view", {
              key: 1,
              class: "nut-collapse-item__title-mtitle",
              innerHTML: g.title
            }, null, 8, Y0)),
            g.label ? (c(), f("view", j0, E(g.label), 1)) : N("", !0)
          ])
        ]),
        g.$slots.value ? (c(), f("view", U0, [
          I(g.$slots, "value")
        ])) : (c(), f("view", {
          key: 1,
          class: "nut-collapse-item__title-sub",
          innerHTML: g.value
        }, null, 8, K0)),
        h("view", {
          class: L(["nut-collapse-item__title-icon", { "nut-collapse-item__title-icon--expanded": s.value }]),
          style: A({ transform: "rotate(" + (s.value ? g.rotate : 0) + "deg)" })
        }, [
          g.$slots.icon ? I(g.$slots, "icon", { key: 0 }) : (c(), ee(Ve(Be(ft)(g.icon)), { key: 1 }))
        ], 6)
      ], 2),
      g.$slots.extra ? (c(), f("view", X0, [
        h("div", q0, [
          I(g.$slots, "extra")
        ])
      ])) : N("", !0),
      h("view", {
        ref_key: "wrapperRef",
        ref: n,
        class: "nut-collapse__item-wrapper",
        style: A({
          willChange: "height",
          height: a.value
        }),
        onTransitionend: p
      }, [
        h("view", {
          ref_key: "contentRef",
          ref: l,
          class: "nut-collapse__item-wrapper__content"
        }, [
          I(g.$slots, "default")
        ], 512)
      ], 36)
    ], 2));
  }
});
Re(Uo);
const Z0 = Pe({
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
}), { create: G0 } = j("table"), J0 = "NutTable", Q0 = G0({
  components: {
    RenderColumn: Z0,
    DownArrow: Jn
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
    const n = ke(J0), l = ce({
      curData: e.data
    }), o = (v) => ({
      "nut-table__main__head__tr--border": e.bordered,
      [`nut-table__main__head__tr--align${v.align ? v.align : ""}`]: !0
    }), r = (v) => v.stylehead ? v.stylehead : "", s = (v) => v.stylecolumn ? v.stylecolumn : "", a = (v) => e.columns.filter((g) => g.key === v)[0], i = (v) => {
      const g = e.columns.filter((k) => k.key === v);
      return g[0].stylecolumn ? g[0].stylecolumn : "";
    }, p = (v) => {
      v.sorter && (t("sorter", v), l.curData = typeof v.sorter == "function" ? l.curData.sort(v.sorter) : v.sorter === "default" ? l.curData.sort() : l.curData);
    }, d = () => e.columns.map((v) => [v.key, v.render]);
    return Q(
      () => e.data,
      (v) => {
        l.curData = v.slice();
      }
    ), de(Z({}, he(l)), {
      cellClasses: o,
      getColumnItem: a,
      getColumnItemStyle: i,
      handleSorterClick: p,
      sortDataItem: d,
      translate: n,
      stylehead: r,
      stylecolumn: s
    });
  }
}), x0 = { class: "nut-table" }, ey = { class: "nut-table__main__head" }, ty = { class: "nut-table__main__head__tr" }, ny = ["onClick"], oy = { class: "nut-table__main__body" }, ly = { key: 1 }, sy = {
  key: 0,
  class: "nut-table__nodata"
}, ay = {
  key: 0,
  class: "nut-table__nodata__text"
}, ry = {
  key: 1,
  class: "nut-table__summary"
}, iy = ["innerHTML"];
function uy(e, t, n, l, o, r) {
  const s = W("DownArrow"), a = W("RenderColumn");
  return c(), f("view", x0, [
    h("view", {
      class: L(["nut-table__main", { "nut-table__main--striped": e.striped }])
    }, [
      h("view", ey, [
        h("view", ty, [
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
          ], 14, ny))), 128))
        ])
      ]),
      h("view", oy, [
        (c(!0), f(x, null, ie(e.curData, (i) => (c(), f("view", {
          key: i,
          class: "nut-table__main__body__tr"
        }, [
          (c(!0), f(x, null, ie(e.sortDataItem(), ([p, d]) => (c(), f("span", {
            key: p,
            class: L(["nut-table__main__body__tr__td", e.cellClasses(e.getColumnItem(p))]),
            style: A(e.getColumnItemStyle(p))
          }, [
            typeof i[p] == "function" || typeof d == "function" ? (c(), ee(a, {
              key: 0,
              slots: [d, i[p]],
              record: i
            }, null, 8, ["slots", "record"])) : (c(), f("view", ly, E(i[p]), 1))
          ], 6))), 128))
        ]))), 128))
      ])
    ], 2),
    e.curData.length ? N("", !0) : (c(), f("view", sy, [
      h("div", {
        class: L(["nut-table__nodata", { "nut-table__nodata--border": e.bordered }])
      }, [
        I(e.$slots, "nodata"),
        e.$slots.nodata ? N("", !0) : (c(), f("div", ay, E(e.translate("noData")), 1))
      ], 2)
    ])),
    e.summary ? (c(), f("view", ry, [
      h("span", {
        class: "nut-table__summary__text",
        innerHTML: e.summary().value
      }, null, 8, iy)
    ])) : N("", !0)
  ]);
}
const cy = /* @__PURE__ */ q(Q0, [["render", uy]]), dy = { class: "nut-animate" }, Ko = /* @__PURE__ */ Pe({
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
    const n = e, l = t, o = z(n.action === "initial" || n.show === !0 || n.loop), r = D(() => ({
      "nut-animate__container": !0,
      [`nut-animate-${n.type}`]: o.value,
      loop: n.loop
    })), s = () => {
      o.value = !1, requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          o.value = !0;
        });
      });
    }, a = (i) => {
      n.action === "click" && (s(), l("click", i), l("animate"));
    };
    return Q(
      () => n.show,
      (i) => {
        i && (s(), l("animate"));
      }
    ), (i, p) => (c(), f("view", dy, [
      h("view", {
        class: L(r.value),
        style: A({
          animationDuration: i.duration ? `${i.duration}ms` : void 0
        }),
        onClick: a
      }, [
        I(i.$slots, "default")
      ], 6)
    ]));
  }
});
Re(Ko);
const { create: fy } = j("ellipsis"), py = fy({
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
    const r = z(), s = ce({
      exceeded: !1,
      //是否超出
      expanded: !1
      //是否折叠
    });
    Q(
      () => e.content,
      ($, w) => {
        $ != w && a();
      }
    ), ve(() => {
      a();
    });
    const a = () => {
      if (!n.value)
        return;
      const $ = window.getComputedStyle(n.value);
      l = document.createElement("div"), Array.prototype.slice.apply($).forEach((y) => {
        l.style.setProperty(y, $.getPropertyValue(y));
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
        const $ = e.content.length, w = Math.floor((0 + $) / 2), u = e.direction === "middle" ? d([0, w], [w, $]) : p(0, $);
        r.value = u, document.body.removeChild(l);
      }
    }, p = ($, w) => {
      const u = s.expanded ? e.collapseText : e.expandText, y = e.content.length;
      if (w - $ <= 1)
        return e.direction === "end" ? {
          leading: e.content.slice(0, $) + e.symbol
        } : {
          tailing: e.symbol + e.content.slice(w, y)
        };
      const m = Math.round(($ + w) / 2);
      return e.direction === "end" ? l.innerText = e.content.slice(0, m) + e.symbol + u : l.innerText = u + e.symbol + e.content.slice(m, y), l.offsetHeight <= o ? e.direction === "end" ? p(m, w) : p($, m) : e.direction === "end" ? p($, m) : p(m, w);
    }, d = ($, w) => {
      const u = s.expanded ? e.collapseText : e.expandText, y = e.content.length;
      if ($[1] - $[0] <= 1 && w[1] - w[0] <= 1)
        return {
          leading: e.content.slice(0, $[0]) + e.symbol,
          tailing: e.symbol + e.content.slice(w[1], y)
        };
      const m = Math.floor(($[0] + $[1]) / 2), b = Math.ceil((w[0] + w[1]) / 2);
      return l.innerText = e.content.slice(0, m) + e.symbol + u + e.symbol + e.content.slice(b, y), l.offsetHeight <= o ? d([m, $[1]], [w[0], b]) : d([$[0], m], [b, w[1]]);
    }, v = ($) => {
      if (!$)
        return 0;
      const w = $.match(/^\d*(\.\d*)?/);
      return w ? Number(w[0]) : 0;
    }, g = ($) => {
      $ == 1 ? (s.expanded = !0, t("change", "expand")) : (s.expanded = !1, t("change", "collapse"));
    }, k = () => {
      t("click");
    };
    return de(Z({}, he(s)), { root: n, ellipsis: r, clickHandle: g, handleClick: k });
  }
}), my = { key: 0 }, hy = { key: 1 }, gy = { key: 2 };
function yy(e, t, n, l, o, r) {
  return c(), f("view", {
    ref: "root",
    class: "nut-ellipsis",
    onClick: t[2] || (t[2] = (...s) => e.handleClick && e.handleClick(...s))
  }, [
    e.exceeded ? N("", !0) : (c(), f("view", my, E(e.content), 1)),
    e.exceeded && !e.expanded ? (c(), f("view", hy, [
      ge(E(e.ellipsis && e.ellipsis.leading), 1),
      e.expandText ? (c(), f("span", {
        key: 0,
        class: "nut-ellipsis__text",
        onClick: t[0] || (t[0] = _e((s) => e.clickHandle(1), ["stop"]))
      }, E(e.expandText), 1)) : N("", !0),
      ge(E(e.ellipsis && e.ellipsis.tailing), 1)
    ])) : N("", !0),
    e.exceeded && e.expanded ? (c(), f("view", gy, [
      ge(E(e.content) + " ", 1),
      e.expandText ? (c(), f("span", {
        key: 0,
        class: "nut-ellipsis__text",
        onClick: t[1] || (t[1] = _e((s) => e.clickHandle(2), ["stop"]))
      }, E(e.collapseText), 1)) : N("", !0)
    ])) : N("", !0)
  ], 512);
}
const vy = /* @__PURE__ */ q(py, [["render", yy]]), { componentName: $y, create: by } = j("watermark"), wy = by({
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
      width: r,
      height: s,
      rotate: a,
      image: i,
      imageWidth: p,
      imageHeight: d,
      content: v,
      fontStyle: g,
      fontWeight: k,
      fontColor: $,
      fontSize: w,
      fontFamily: u
    } = e, y = () => {
      const b = document.createElement("canvas"), S = window.devicePixelRatio, _ = b.getContext("2d"), B = `${(l + r) * S}px`, M = `${(o + s) * S}px`, C = r * S, T = s * S;
      if (b.setAttribute("width", B), b.setAttribute("height", M), _) {
        if (i) {
          _.translate(C / 2, T / 2), _.rotate(Math.PI / 180 * Number(a));
          const P = new Image();
          P.crossOrigin = "anonymous", P.referrerPolicy = "no-referrer", P.src = i, P.onload = () => {
            _.drawImage(
              P,
              -p * S / 2,
              -d * S / 2,
              p * S,
              d * S
            ), _.restore(), t.base64Url = b.toDataURL();
          };
        } else if (v) {
          _.textBaseline = "middle", _.textAlign = "center", _.translate(C / 2, T / 2), _.rotate(Math.PI / 180 * Number(a));
          const P = Number(w) * S;
          _.font = `${g} normal ${k} ${P}px/${T}px ${u}`, _.fillStyle = $, Array.isArray(v) ? v.map((O, K) => {
            _.fillText(O, 0, (K - 1) * P);
          }) : _.fillText(v, 0, 0), _.restore(), t.base64Url = b.toDataURL();
        }
      } else
        throw new Error("当前环境不支持Canvas");
    };
    y(), Q(
      () => [
        n,
        l,
        o,
        r,
        s,
        a,
        i,
        p,
        d,
        v,
        g,
        k,
        $,
        w,
        u
      ],
      () => {
        y();
      }
    );
    const m = D(() => {
      const b = $y;
      return {
        [b]: !0,
        [`${b}-full-page`]: e.fullPage
      };
    });
    return de(Z({}, he(t)), { classes: m });
  }
});
function ky(e, t, n, l, o, r) {
  return c(), f("view", {
    class: L(e.classes),
    style: A({
      zIndex: e.zIndex,
      backgroundSize: `${e.gapX + e.width}px`,
      backgroundImage: `url('${e.base64Url}')`
    })
  }, null, 6);
}
const Cy = /* @__PURE__ */ q(wy, [["render", ky]]), { create: Sy } = j("trend-arrow"), Ty = Sy({
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
      const { rate: o, digits: r, showSign: s, showZero: a } = e;
      t.rateTrend = o > 0;
      const i = Math.abs(o);
      return !a && o === 0 ? "--" : `${s && o !== 0 ? t.rateTrend ? "+" : "-" : ""}${cl(
        Number(i),
        r
      )}%`;
    }), l = D(() => {
      const { dropColor: o, riseColor: r, syncTextColor: s, textColor: a, rate: i } = e;
      return {
        color: i === 0 ? a : s ? t.rateTrend ? r : o : a
      };
    });
    return de(Z({}, he(t)), { calcRate: n, calcStyle: l });
  }
}), Ny = { class: "nut-trend-arrow" };
function Dy(e, t, n, l, o, r) {
  const s = W("TriangleUp"), a = W("TriangleDown");
  return c(), f("view", Ny, [
    e.arrowLeft ? N("", !0) : (c(), f("span", {
      key: 0,
      class: "nut-trend-arrow-icon-before nut-trend-arrow-rate",
      style: A(e.calcStyle)
    }, E(e.calcRate), 5)),
    Number(e.rate) !== 0 && e.rateTrend ? I(e.$slots, "up-icon", { key: 1 }, () => [
      oe(s, { color: e.riseColor }, null, 8, ["color"])
    ]) : N("", !0),
    Number(e.rate) !== 0 && !e.rateTrend ? I(e.$slots, "down-icon", { key: 2 }, () => [
      oe(a, { color: e.dropColor }, null, 8, ["color"])
    ]) : N("", !0),
    e.arrowLeft ? (c(), f("span", {
      key: 3,
      class: "nut-trend-arrow-icon-after nut-trend-arrow-rate",
      style: A(e.calcStyle)
    }, E(e.calcRate), 5)) : N("", !0)
  ]);
}
const _y = /* @__PURE__ */ q(Ty, [["render", Dy]]), { create: Iy } = j("tour"), By = Iy({
  components: {
    NutPopover: Wo,
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
    }), l = z({}), o = D(() => "nut-tour"), r = D(() => {
      const { offset: d, maskWidth: v, maskHeight: g } = e, { width: k, height: $, left: w, top: u } = l.value, y = [w + k / 2, u + $ / 2], m = Number(v || k), b = Number(g || $);
      return {
        width: `${m + +d[1] * 2}px`,
        height: `${b + +d[0] * 2}px`,
        top: `${y[1] - b / 2 - +d[0]}px`,
        left: `${y[0] - m / 2 - +d[1]}px`
      };
    }), s = (d) => {
      d == "next" ? n.active = n.active + 1 : n.active = n.active - 1, n.showPopup = !1, Se(() => {
        n.showPopup = !0, a();
      }), t("change", n.active);
    }, a = () => {
      const d = document.querySelector(`#${e.steps[n.active].target}`), v = Ye(d);
      l.value = v;
    }, i = () => {
      n.showTour = !1, n.showPopup = !1, t("close", n.active), t("update:modelValue", !1);
    }, p = () => {
      e.closeOnClickOverlay && i();
    };
    return ve(() => {
      n.active = 0, a();
    }), Q(
      () => e.modelValue,
      (d) => {
        d && a(), n.active = 0, n.showTour = d, n.showPopup = d;
      }
    ), de(Z({}, he(n)), {
      classes: o,
      maskStyle: r,
      changeStep: s,
      close: i,
      handleClickMask: p
    });
  }
}), My = {
  key: 0,
  class: "nut-tour-content"
}, Ly = {
  key: 0,
  class: "nut-tour-content-top"
}, Ey = { class: "nut-tour-content-inner" }, Py = { class: "nut-tour-content-bottom" }, Ay = { class: "nut-tour-content-bottom-init" }, zy = { class: "nut-tour-content-bottom-operate" }, Vy = {
  key: 1,
  class: "nut-tour-content nut-tour-content-tile"
}, Oy = { class: "nut-tour-content-inner" };
function Hy(e, t, n, l, o, r) {
  const s = W("Close"), a = W("nut-popover");
  return c(), f("div", {
    class: L(e.classes)
  }, [
    Ce(h("div", {
      class: "nut-tour-masked",
      onClick: t[0] || (t[0] = (...i) => e.handleClickMask && e.handleClickMask(...i))
    }, null, 512), [
      [De, e.showTour]
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
        oe(a, {
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
              e.type == "step" ? (c(), f("div", My, [
                e.showTitleBar ? (c(), f("div", Ly, [
                  h("div", {
                    onClick: t[1] || (t[1] = (...d) => e.close && e.close(...d))
                  }, [
                    oe(s, { class: "nut-tour-content-top-close" })
                  ])
                ])) : N("", !0),
                h("div", Ey, E(i.content), 1),
                h("div", Py, [
                  h("div", Ay, E(e.active + 1) + "/" + E(e.steps.length), 1),
                  h("div", zy, [
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
              e.type == "tile" ? (c(), f("div", Vy, [
                h("div", Oy, E(i.content), 1)
              ])) : N("", !0)
            ])
          ]),
          _: 2
        }, 1032, ["visible", "location", "bg-color", "theme", "offset", "arrow-offset"])
      ], 64)) : N("", !0)
    ]))), 128))
  ], 2);
}
const Ry = /* @__PURE__ */ q(By, [["render", Hy]]), { create: Fy } = j("address"), Wy = "NutAddress", Yy = Fy({
  components: {
    NutPopup: Ae,
    NutElevator: go,
    Location: pa,
    Location2: va,
    Check: qn,
    Close: At,
    Left: on
  },
  inheritAttrs: !1,
  props: de(Z({}, Nt), {
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
    const n = ke(Wy), l = z(null), o = z(null), r = z(e.visible), s = z(e.type), a = z(0), i = z(0), p = z(["province", "city", "country", "town"]), d = z(null), v = z([0, 0, 0, 0]), g = ce([]), k = D(() => {
      switch (a.value) {
        case 0:
          return e.province;
        case 1:
          return e.city;
        case 2:
          return e.country;
        default:
          return e.town;
      }
    }), $ = (U) => {
      if (!Array.isArray(U))
        throw new TypeError("params muse be array.");
      if (!U.length)
        return [];
      U.forEach((te) => {
        if (!te.title) {
          console.warn("[NutUI] <Address> 请检查数组选项的 title 值是否有设置 ,title 为必填项 .");
          return;
        }
      });
      const R = [];
      return U = U.sort((te, X) => te.title.localeCompare(X.title)), U.forEach((te) => {
        const X = R.findIndex((se) => se.title === te.title);
        X <= -1 ? R.push({
          title: te.title,
          list: [].concat(te)
        }) : R[X].list.push(te);
      }), R;
    };
    let w = z([]), u = ce({});
    const y = z("self"), m = z(20), b = () => {
      g[0] = e.province || [], g[1] = e.city || [], g[2] = e.country || [], g[3] = e.town || [];
      const U = e.modelValue, R = U.length;
      if (R > 0) {
        if (a.value = R - 1, k.value.length == 0) {
          a.value = 0;
          return;
        }
        for (let te = 0; te < R; te++) {
          let X = g[te];
          w.value[te] = X.filter((se) => se.id == U[te])[0];
        }
        _();
      }
    }, S = (U, R) => U && U.name || a.value < R && U ? U.name : e.columnsPlaceholder[R] || n("select"), _ = () => {
      C(), Se(() => {
        const U = o.value && o.value.getElementsByClassName("active")[0];
        if (U) {
          const R = U.offsetLeft;
          m.value = R || 20;
        }
      });
    }, B = (U) => {
      var X;
      const R = a.value;
      i.value = a.value;
      const te = {
        custom: p.value[R]
      };
      w.value[R] = U, w.value.splice(R + 1, w.value.length - (R + 1)), te.value = U, ((X = g[R + 1]) == null ? void 0 : X.length) > 0 ? (a.value = R + 1, _(), te.next = p.value[a.value]) : (O(), t("update:modelValue")), t("change", te);
    }, M = (U, R) => {
      i.value = a.value, S(U, R) && (a.value = R, _());
    }, C = () => {
      const U = d.value, R = i.value, te = v.value[a.value];
      U != null && U.scrollTop && (v.value[R] = U == null ? void 0 : U.scrollTop), Se(() => {
        U == null || U.scrollTo({
          top: te,
          behavior: "auto"
        });
      });
    }, T = (U) => {
      const R = e.existAddress;
      let te = {};
      R.forEach((X) => {
        X && X.selectedAddress && (te = X), X.selectedAddress = !1;
      }), U.selectedAddress = !0, u = U, t("selected", te, U, R), O();
    }, P = () => {
      w.value = [], a.value = 0, _();
    }, O = (U = "self") => {
      y.value = U == "cross" ? "cross" : "self", r.value = !1;
    }, K = () => {
      y.value = "mask";
    }, G = () => {
      const U = {
        addressIdStr: "",
        addressStr: "",
        province: w.value[0],
        city: w.value[1],
        country: w.value[2],
        town: w.value[3]
      }, R = {
        data: {},
        type: s.value
      };
      ["custom", "custom2"].includes(s.value) ? ([0, 1, 2, 3].forEach((te) => {
        const X = w.value[te];
        U.addressIdStr += `${te ? "_" : ""}${X && X.id || 0}`, U.addressStr += X && X.name || "";
      }), R.data = U) : R.data = u, P(), y.value == "self" ? t("close", R) : t("closeMask", { closeWay: y }), t("update:visible", !1);
    }, le = () => {
      const U = s.value;
      s.value = U == "exist" ? "custom" : "exist", P(), t("switchModule", { type: s.value });
    }, Y = (U, R) => {
      B(R);
    };
    return Q(
      () => e.visible,
      (U) => {
        r.value = U;
      }
    ), Q(
      () => r.value,
      (U) => {
        U && b();
      }
    ), de(Z({
      showPopup: r,
      privateType: s,
      tabIndex: a,
      tabName: p,
      selectedRegion: w,
      switchModule: le,
      closeWay: y,
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
      initCustomSelected: b
    }, he(e)), {
      translate: n,
      regionList: k,
      transformData: $,
      scrollDom: d
    });
  }
}), jy = { class: "nut-address" }, Uy = { class: "nut-address__header" }, Ky = { class: "nut-address__header__title" }, Xy = {
  key: 0,
  class: "nut-address__custom"
}, qy = {
  ref: "tabRegion",
  class: "nut-address__region"
}, Zy = ["onClick"], Gy = {
  key: 0,
  class: "active nut-address__region-item"
}, Jy = {
  key: 0,
  class: "nut-address__detail"
}, Qy = {
  ref: "scrollDom",
  class: "nut-address__detail-list"
}, xy = ["onClick"], ev = {
  key: 1,
  class: "nut-address__elevator-group"
}, tv = {
  key: 1,
  class: "nut-address__exist"
}, nv = { class: "nut-address__exist-group" }, ov = { class: "nut-address__exist-group-list" }, lv = ["onClick"], sv = { class: "nut-address__exist-item-info" }, av = {
  key: 0,
  class: "nut-address__exist-item-info-name"
}, rv = {
  key: 1,
  class: "nut-address__exist-item-info-phone"
}, iv = { class: "nut-address__exist-item-info-bottom" }, uv = { class: "nut-address__exist-choose-btn" };
function cv(e, t, n, l, o, r) {
  const s = W("Left"), a = W("Close"), i = W("Check"), p = W("nut-elevator"), d = W("Location2"), v = W("nut-popup");
  return c(), ee(v, {
    visible: e.showPopup,
    "onUpdate:visible": t[3] || (t[3] = (g) => e.showPopup = g),
    position: "bottom",
    "lock-scroll": e.lockScroll,
    round: e.round,
    "teleport-disable": e.teleportDisable,
    teleport: e.teleport,
    "z-index": e.zIndex,
    onClose: e.close,
    onClickOverlay: e.clickOverlay,
    onOpen: t[4] || (t[4] = (g) => e.closeWay = "self")
  }, {
    default: ne(() => [
      h("view", jy, [
        h("view", Uy, [
          h("view", {
            class: "nut-address__header-back",
            onClick: t[0] || (t[0] = (...g) => e.switchModule && e.switchModule(...g))
          }, [
            I(e.$slots, "back-icon", {}, () => [
              Ce(oe(s, { size: "14px" }, null, 512), [
                [De, e.type == "exist" && e.privateType == "custom"]
              ])
            ])
          ]),
          h("view", Ky, E(e.privateType == "custom" ? e.customAddressTitle || e.translate("selectRegion") : e.existAddressTitle || e.translate("deliveryTo")), 1),
          h("view", {
            class: "nut-address__header-close",
            onClick: t[1] || (t[1] = (g) => e.handClose("cross"))
          }, [
            I(e.$slots, "close-icon", {}, () => [
              oe(a, {
                color: "#cccccc",
                size: "14px"
              })
            ])
          ])
        ]),
        ["custom", "custom2"].includes(e.privateType) ? (c(), f("view", Xy, [
          h("view", qy, [
            (c(!0), f(x, null, ie(e.selectedRegion, (g, k) => (c(), f("view", {
              key: k,
              class: L(["nut-address__region-item", k == e.tabIndex ? "active" : ""]),
              onClick: ($) => e.changeRegionTab(g, k)
            }, [
              h("view", null, E(e.getTabName(g, k)), 1)
            ], 10, Zy))), 128)),
            e.tabIndex == e.selectedRegion.length ? (c(), f("view", Gy, [
              h("view", null, E(e.getTabName(null, e.selectedRegion.length)), 1)
            ])) : N("", !0),
            h("view", {
              ref: "regionLine",
              class: "nut-address__region-line",
              style: A({ left: e.lineDistance + "px" })
            }, null, 4)
          ], 512),
          e.privateType == "custom" ? (c(), f("view", Jy, [
            h("ul", Qy, [
              (c(!0), f(x, null, ie(e.regionList, (g, k) => {
                var $, w;
                return c(), f("li", {
                  key: k,
                  class: L(["nut-address__detail-item", (($ = e.selectedRegion[e.tabIndex]) == null ? void 0 : $.id) == g.id ? "active" : ""]),
                  onClick: (u) => e.nextAreaList(g)
                }, [
                  h("div", null, [
                    ((w = e.selectedRegion[e.tabIndex]) == null ? void 0 : w.id) == g.id ? I(e.$slots, "icon", { key: 0 }, () => [
                      oe(i, {
                        class: "nut-address-select-icon",
                        size: "13px"
                      })
                    ]) : N("", !0),
                    ge(E(g.name), 1)
                  ])
                ], 10, xy);
              }), 128))
            ], 512)
          ])) : (c(), f("view", ev, [
            oe(p, {
              height: e.height,
              "index-list": e.transformData(e.regionList),
              onClickItem: e.handleElevatorItem
            }, null, 8, ["height", "index-list", "onClickItem"])
          ]))
        ])) : (c(), f("view", tv, [
          h("div", nv, [
            h("ul", ov, [
              (c(!0), f(x, null, ie(e.existAddress, (g, k) => (c(), f("li", {
                key: k,
                class: L(["nut-address__exist-group-item", g.selectedAddress ? "active" : ""]),
                onClick: ($) => e.selectedExist(g)
              }, [
                g.selectedAddress ? N("", !0) : I(e.$slots, "unselected-icon", { key: 0 }, () => [
                  oe(d, {
                    class: "nut-address-select-icon",
                    size: "13px"
                  })
                ]),
                g.selectedAddress ? I(e.$slots, "icon", { key: 1 }, () => [
                  oe(i, {
                    class: "nut-address-select-icon",
                    size: "13px"
                  })
                ]) : N("", !0),
                h("div", sv, [
                  g.name ? (c(), f("div", av, E(g.name), 1)) : N("", !0),
                  g.phone ? (c(), f("div", rv, E(g.phone), 1)) : N("", !0),
                  h("div", iv, [
                    h("view", null, E(g.provinceName + g.cityName + g.countyName + g.townName + g.addressDetail), 1)
                  ])
                ])
              ], 10, lv))), 128))
            ])
          ]),
          e.isShowCustomAddress ? (c(), f("div", {
            key: 0,
            class: "nut-address__exist-choose",
            onClick: t[2] || (t[2] = (...g) => e.switchModule && e.switchModule(...g))
          }, [
            h("div", uv, E(e.customAndExistTitle || e.translate("chooseAnotherAddress")), 1)
          ])) : N("", !0)
        ])),
        I(e.$slots, "bottom")
      ])
    ]),
    _: 3
  }, 8, ["visible", "lock-scroll", "round", "teleport-disable", "teleport", "z-index", "onClose", "onClickOverlay"]);
}
const dv = /* @__PURE__ */ q(Yy, [["render", cv]]), { create: fv } = j("barrage"), pv = fv({
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
    const t = (/* @__PURE__ */ new Date()).getTime(), n = !!lt().default;
    let l = z(document.createElement("div")), o = z(document.createElement("div")), r = null;
    const s = z(e.danmu), a = z(e.rows), i = z(e.top), p = z(0), d = e.speeds, v = z(0);
    ve(() => {
      g(), n && document.addEventListener("visibilitychange", function() {
        document.visibilityState === "hidden" ? ($(), p.value = 0, k("hidden")) : document.visibilityState === "visible" && g();
      });
    }), Xe(() => {
      s.value = [], $();
    });
    const g = () => {
      v.value = l.value.offsetWidth, n && k("init"), setTimeout(() => {
        var m;
        (m = l.value) == null || m.style.setProperty("--move-distance", `-${v.value}px`), u();
      }, 300);
    }, k = (m) => {
      var B;
      const b = document.getElementsByClassName("slotBody" + t);
      let S = ((B = b == null ? void 0 : b[0]) == null ? void 0 : B.children) || [];
      const _ = [];
      S && Array.from(S).forEach((M) => {
        m == "init" ? (M.style.opacity = "0", _.push(M)) : (M.classList = "", M.style = {});
      }), m == "init" && (s.value = _);
    }, $ = () => {
      r && (clearTimeout(r), r = null);
    };
    Q(
      () => e.danmu,
      (m) => {
        e.danmu.length > 0 && (s.value = [...m]);
      }
    );
    const w = (m) => {
      const b = p.value % s.value.length;
      !e.loop && p.value === s.value.length ? s.value.splice(s.value.length, 0, m) : s.value.splice(b, 0, m);
    }, u = () => {
      $(), r = setTimeout(() => {
        y();
      }, e.frequency);
    }, y = () => {
      var S;
      const m = e.loop ? p.value % s.value.length : p.value;
      let b = document.createElement("view");
      n && typeof s.value[m] == "object" ? (b = s.value[m], (S = b == null ? void 0 : b.classList) == null || S.add("nut-barrage__item")) : (b.innerHTML = s.value[m], b.classList.add("nut-barrage__item"), o.value.appendChild(b)), Se(() => {
        var B;
        const _ = b.offsetHeight;
        if ((B = b == null ? void 0 : b.classList) == null || B.add("move"), b.style.animationDuration = `${d}ms`, b.style.top = m % a.value * (_ + i.value) + 20 + "px", b.style.opacity = "1", !n) {
          const M = b.offsetWidth;
          b.style.width = M + 20 + "px";
        }
        b.addEventListener("animationend", () => {
          n ? b.classList.remove("move") : o.value.removeChild(b);
        }), !(!e.loop && p.value >= s.value.length - 1) && (p.value++, p.value >= s.value.length && (p.value = 0), b.removeEventListener("animationend", () => {
        }), u());
      });
    };
    return { classTime: t, danmuList: s, dmBody: l, dmContainer: o, add: w };
  }
}), mv = {
  ref: "dmBody",
  class: "nut-barrage"
};
function hv(e, t, n, l, o, r) {
  return c(), f("div", mv, [
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
const gv = /* @__PURE__ */ q(pv, [["render", hv]]), { create: yv } = j("signature"), vv = "NutSignature", $v = yv({
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
    const n = ke(vv), l = z(null), o = z(null), r = D(() => ({
      ["nut-signature"]: !0,
      [`${e.customClass}`]: e.customClass
    })), s = ce({
      canvasHeight: 0,
      canvasWidth: 0,
      ctx: null,
      isSupportTouch: "ontouchstart" in window,
      events: "ontouchstart" in window ? ["touchstart", "touchmove", "touchend", "touchleave"] : ["mousedown", "mousemove", "mouseup", "mouseleave"]
    }), a = () => {
      let y = document.createElement("canvas");
      return !!(y.getContext && y.getContext("2d"));
    }, i = () => {
      l.value.addEventListener(s.events[0], p, !1);
    }, p = (y) => {
      y.preventDefault(), s.ctx.beginPath(), s.ctx.lineWidth = e.lineWidth, s.ctx.strokeStyle = e.strokeStyle, t("start"), l.value.addEventListener(s.events[1], d, !1), l.value.addEventListener(s.events[2], v, !1), l.value.addEventListener(s.events[3], g, !1);
    }, d = (y) => {
      y.preventDefault();
      let m = s.isSupportTouch ? y.touches[0] : y;
      t("signing", m);
      let b = l.value.getBoundingClientRect(), S = m.clientX - b.left, _ = m.clientY - b.top;
      s.ctx.lineTo(S, _), s.ctx.stroke();
    }, v = (y) => {
      y.preventDefault(), t("end"), l.value.removeEventListener(s.events[1], d, !1), l.value.removeEventListener(s.events[2], v, !1);
    }, g = (y) => {
      y.preventDefault(), l.value.removeEventListener(s.events[1], d, !1), l.value.removeEventListener(s.events[2], v, !1);
    }, k = () => {
      l.value.addEventListener(s.events[2], v, !1), s.ctx.clearRect(0, 0, s.canvasWidth, s.canvasHeight), s.ctx.closePath(), t("clear");
    }, $ = () => {
      u(l.value);
    }, w = (y) => {
      if (!y)
        return !0;
      var m = document.createElement("canvas");
      return m.width = y.width, m.height = y.height, (y == null ? void 0 : y.toDataURL()) == m.toDataURL();
    }, u = (y) => {
      let m;
      switch (e.type) {
        case "png":
          m = y.toDataURL("image/png");
          break;
        case "jpg":
          m = y.toDataURL("image/jpeg", 0.8);
          break;
      }
      const b = w(y) ? "请绘制签名" : y, S = w(y) ? "" : m;
      t("confirm", b, S);
    };
    return ve(() => {
      a() && (s.ctx = l.value.getContext("2d"), s.canvasWidth = o.value.offsetWidth, s.canvasHeight = o.value.offsetHeight, i());
    }), de(Z({}, he(s)), { canvas: l, wrap: o, isCanvasSupported: a, confirm: $, clear: k, classes: r, translate: n });
  }
}), bv = {
  ref: "wrap",
  class: "nut-signature-inner"
}, wv = ["height", "width"], kv = {
  key: 0,
  class: "nut-signature-unsopport"
};
function Cv(e, t, n, l, o, r) {
  const s = W("nut-button");
  return c(), f("div", {
    class: L(e.classes)
  }, [
    h("div", bv, [
      Ce(h("canvas", {
        ref: "canvas",
        height: e.canvasHeight,
        width: e.canvasWidth
      }, null, 8, wv), [
        [De, e.isCanvasSupported()]
      ]),
      e.isCanvasSupported() ? N("", !0) : (c(), f("p", kv, E(e.unSupportTpl || e.translate("unSupportTpl")), 1))
    ], 512),
    oe(s, {
      class: "nut-signature-btn",
      type: "default",
      onClick: t[0] || (t[0] = (a) => e.clear())
    }, {
      default: ne(() => [
        ge(E(e.translate("reSign")), 1)
      ]),
      _: 1
    }),
    oe(s, {
      class: "nut-signature-btn",
      type: "primary",
      onClick: t[1] || (t[1] = (a) => e.confirm())
    }, {
      default: ne(() => [
        ge(E(e.translate("confirm")), 1)
      ]),
      _: 1
    })
  ], 2);
}
const Sv = /* @__PURE__ */ q($v, [["render", Cv]]), { create: Tv } = j("time-select"), Nv = "NutTimeSelect", Dv = Tv({
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
    const n = ke(Nv), l = D(() => ({
      width: "100%",
      height: e.height
    })), o = D(() => e.currentKey), r = D(() => e.currentTime), s = () => {
      t("update:visible", !1), t("select", r.value);
    };
    return Ee("currentKey", o), Ee("currentTime", r), {
      popStyle: l,
      close: s,
      translate: n
    };
  }
}), _v = { class: "nut-time-select" }, Iv = { class: "nut-time-select__title" }, Bv = { class: "nut-time-select__title__fixed" }, Mv = { key: 0 }, Lv = { class: "nut-time-select__content" }, Ev = { class: "nut-time-select__content__pannel" }, Pv = { class: "nut-time-select__content__detail" };
function Av(e, t, n, l, o, r) {
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
      h("view", _v, [
        h("view", Iv, [
          h("view", Bv, [
            e.$slots.title ? I(e.$slots, "title", { key: 1 }) : (c(), f("span", Mv, E(e.title || e.translate("pickupTime")), 1))
          ])
        ]),
        h("view", Lv, [
          h("view", Ev, [
            I(e.$slots, "pannel")
          ]),
          h("view", Pv, [
            I(e.$slots, "detail")
          ])
        ])
      ])
    ]),
    _: 3
  }, 8, ["teleport-disable", "visible", "style", "lock-scroll", "onClickOverlay", "onClickCloseIcon"]);
}
const zv = /* @__PURE__ */ q(Dv, [["render", Av]]), { componentName: Vv, create: Ov } = j("time-pannel"), Hv = Ov({
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
    const n = Le("currentKey"), l = ce({
      currentKey: n
    }), o = D(() => ({
      [Vv]: !0,
      "nut-time-pannel--curr": l.currentKey == e.pannelKey
    })), r = (s) => {
      t("change", s);
    };
    return de(Z({}, he(l)), {
      classes: o,
      handlePannel: r
    });
  }
});
function Rv(e, t, n, l, o, r) {
  return c(), f("view", {
    class: L(e.classes),
    onClick: t[0] || (t[0] = (s) => e.handlePannel(e.pannelKey))
  }, E(e.name), 3);
}
const Fv = /* @__PURE__ */ q(Hv, [["render", Rv]]), { create: Wv } = j("time-detail"), Yv = Wv({
  name: "timedetail",
  props: {
    times: {
      type: Array,
      default: () => []
    }
  },
  emits: ["select"],
  setup: (e, { emit: t }) => {
    const n = Le("currentKey"), l = Le("currentTime"), o = ce({
      currentKey: n,
      currentTime: l
    }), r = (i) => {
      let p = o.currentTime.find((d) => d.key == o.currentKey);
      if (p)
        return {
          "nut-time-detail__detail__list__item": !0,
          "nut-time-detail__detail__list__item--curr": p.list.filter((d) => d === i).length > 0
        };
    }, s = D(() => e.times.find((i) => i.key == o.currentKey).list), a = (i) => {
      t("select", i);
    };
    return de(Z({}, he(o)), {
      getClass: r,
      renderData: s,
      handleTime: a
    });
  }
}), jv = { class: "nut-time-detail" }, Uv = { class: "nut-time-detail__detail nut-time-detail__detail--moring" }, Kv = { class: "nut-time-detail__detail__list" }, Xv = ["onClick"];
function qv(e, t, n, l, o, r) {
  return c(), f("view", jv, [
    h("view", Uv, [
      h("view", Kv, [
        (c(!0), f(x, null, ie(e.renderData, (s) => (c(), f("view", {
          key: s,
          class: L(e.getClass(s)),
          onClick: (a) => e.handleTime(s)
        }, E(s), 11, Xv))), 128))
      ])
    ])
  ]);
}
const Zv = /* @__PURE__ */ q(Yv, [["render", qv]]), { create: Gv } = j("sku-header"), Jv = "NutSkuHeader", Qv = Gv({
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
    const n = ke(Jv);
    return {
      getSlots: (o) => t[o],
      translate: n
    };
  }
}), xv = { class: "nut-sku-header" }, e2 = ["src"], t2 = { class: "nut-sku-header-right" }, n2 = {
  key: 3,
  class: "nut-sku-header-right-extra"
};
function o2(e, t, n, l, o, r) {
  const s = W("nut-price");
  return c(), f("view", xv, [
    h("img", {
      class: "nut-sku-header-img",
      src: e.goods.imagePath
    }, null, 8, e2),
    h("view", t2, [
      e.getSlots("sku-header-price") ? I(e.$slots, "sku-header-price", { key: 0 }) : (c(), ee(s, {
        key: 1,
        price: e.goods.price,
        "need-symbol": !0,
        thousands: !1
      }, null, 8, ["price"])),
      e.getSlots("sku-header-extra") ? I(e.$slots, "sku-header-extra", { key: 2 }) : N("", !0),
      e.goods.skuId && !e.getSlots("sku-header-extra") ? (c(), f("view", n2, E(e.translate("skuId")) + " : " + E(e.goods.skuId), 1)) : N("", !0)
    ])
  ]);
}
const l2 = /* @__PURE__ */ q(Qv, [["render", o2]]), { create: s2 } = j("sku-select"), a2 = s2({
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
      changeSaleChild: (o, r, s, a) => {
        o.checkFlag || o.disable || t("selectSku", {
          sku: o,
          skuIndex: r,
          parentSku: s,
          parentIndex: a
        });
      }
    };
  }
}), r2 = { class: "nut-sku-select" }, i2 = { class: "nut-sku-select-item-title" }, u2 = { class: "nut-sku-select-item-skus" }, c2 = ["onClick"];
function d2(e, t, n, l, o, r) {
  return c(), f("view", r2, [
    (c(!0), f(x, null, ie(e.skuInfo, (s, a) => (c(), f("view", {
      key: s.id,
      class: "nut-sku-select-item"
    }, [
      h("view", i2, E(s.name), 1),
      h("view", u2, [
        (c(!0), f(x, null, ie(s.list, (i, p) => (c(), f("view", {
          key: i.name,
          class: L(["nut-sku-select-item-skus-sku", [{ active: !i.disable && i.active }, { disable: i.disable }]]),
          onClick: (d) => e.changeSaleChild(i, p, s, a)
        }, E(i.name), 11, c2))), 128))
      ])
    ]))), 128))
  ]);
}
const f2 = /* @__PURE__ */ q(a2, [["render", d2]]), { create: p2 } = j("sku-stepper"), m2 = p2({
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
}), h2 = { class: "nut-sku-stepper" }, g2 = { class: "nut-sku-stepper-title" }, y2 = ["innerHTML"], v2 = { class: "nut-sku-stepper-count" };
function $2(e, t, n, l, o, r) {
  const s = W("nut-input-number");
  return c(), f("view", h2, [
    h("view", g2, E(e.stepperTitle), 1),
    h("view", {
      class: "nut-sku-stepper-limit",
      innerHTML: e.getExtraText()
    }, null, 8, y2),
    h("view", v2, [
      oe(s, {
        modelValue: e.goodsCount,
        "onUpdate:modelValue": t[0] || (t[0] = (a) => e.goodsCount = a),
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
const b2 = /* @__PURE__ */ q(m2, [["render", $2]]), { create: w2 } = j("sku-operate"), k2 = w2({
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
}), C2 = {
  key: 0,
  class: "nut-sku-operate"
}, S2 = {
  key: 0,
  class: "nut-sku-operate-desc"
}, T2 = {
  key: 1,
  class: "nut-sku-operate-btn"
}, N2 = ["onClick"];
function D2(e, t, n, l, o, r) {
  return e.btnOptions.length > 0 ? (c(), f("view", C2, [
    e.btnExtraText ? (c(), f("view", S2, E(e.btnExtraText), 1)) : N("", !0),
    I(e.$slots, "operate-btn"),
    e.getSlots("operate-btn") ? N("", !0) : (c(), f("view", T2, [
      (c(!0), f(x, null, ie(e.btnOptions, (s, a) => (c(), f("view", {
        key: a,
        class: L([`nut-sku-operate-btn-${s}`, "nut-sku-operate-btn-item"]),
        onClick: (i) => e.clickBtnOperate(s)
      }, E(e.getBtnDesc(s)), 11, N2))), 128))
    ]))
  ])) : N("", !0);
}
const _2 = /* @__PURE__ */ q(k2, [["render", D2]]), { create: I2 } = j("sku"), B2 = "NutSku", M2 = I2({
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
    SkuHeader: l2,
    SkuSelect: f2,
    SkuStepper: b2,
    SkuOperate: _2,
    NutPopup: Ae
  },
  setup(e, { emit: t, slots: n }) {
    const l = ke(B2), o = z(e.visible), r = z(e.stepperMin);
    Q(
      () => e.visible,
      (w) => {
        o.value = w;
      }
    ), Q(
      () => o.value,
      (w) => {
        w == !1 && $();
      }
    );
    const s = (w) => n[w], a = (w) => {
      t("selectSku", w);
    }, i = (w) => {
      r.value = w, t("changeStepper", w);
    }, p = (w) => {
      t("add", w);
    }, d = (w) => {
      t("reduce", w);
    }, v = (w) => {
      t("overLimit", w);
    }, g = (w) => {
      t("clickBtnOperate", {
        type: w,
        value: r.value
      });
    }, k = (w) => {
      w == "icon" && t("clickCloseIcon"), w == "overlay" && t("clickOverlay"), w == "close" && t("close"), o.value = !1;
    }, $ = () => {
      t("update:visible", !1);
    };
    return {
      showPopup: o,
      closePopup: k,
      selectSku: a,
      changeStepper: i,
      stepperOverLimit: v,
      clickBtnOperate: g,
      add: p,
      reduce: d,
      getSlots: s,
      translate: l
    };
  }
}), L2 = { class: "nut-sku" }, E2 = { class: "nut-sku-content" };
function P2(e, t, n, l, o, r) {
  const s = W("sku-header"), a = W("SkuSelect"), i = W("sku-stepper"), p = W("sku-operate"), d = W("nut-popup");
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
      h("view", L2, [
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
        h("view", E2, [
          I(e.$slots, "sku-select-top"),
          I(e.$slots, "sku-select"),
          e.getSlots("sku-select") ? N("", !0) : (c(), ee(a, {
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
const A2 = /* @__PURE__ */ q(M2, [["render", P2]]), { create: z2 } = j("card"), V2 = z2({
  components: {
    NutPrice: Ht,
    NutTag: Fo
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
}), O2 = { class: "nut-card" }, H2 = { class: "nut-card__left" }, R2 = ["src"], F2 = { class: "nut-card__right" }, W2 = { class: "nut-card__right__title" }, Y2 = {
  key: 0,
  class: "nut-card__right__price"
}, j2 = { class: "nut-card__right__other" }, U2 = { class: "nut-card__right__shop" }, K2 = { class: "nut-card__right__shop__name" };
function X2(e, t, n, l, o, r) {
  const s = W("nut-price"), a = W("nut-tag");
  return c(), f("div", O2, [
    h("div", H2, [
      h("img", {
        src: e.imgUrl,
        alt: ""
      }, null, 8, R2)
    ]),
    h("div", F2, [
      h("div", W2, E(e.title), 1),
      I(e.$slots, "prolist"),
      e.isNeedPrice ? (c(), f("div", Y2, [
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
      h("div", j2, [
        I(e.$slots, "shop-tag", {}, () => [
          oe(a, { type: "danger" }, {
            default: ne(() => [
              ge(E(e.shopDesc), 1)
            ]),
            _: 1
          }),
          oe(a, { plain: "" }, {
            default: ne(() => [
              ge(E(e.delivery), 1)
            ]),
            _: 1
          })
        ])
      ]),
      h("div", U2, [
        h("div", K2, E(e.shopName), 1),
        I(e.$slots, "footer")
      ])
    ])
  ]);
}
const q2 = /* @__PURE__ */ q(V2, [["render", X2]]), { create: Z2 } = j("ecard"), G2 = "NutEcard", J2 = Z2({
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
    const n = ke(G2), l = z(null), o = z(null), r = z(""), s = z(e.cardAmountMin), a = z(e.modelValue), i = (g, k) => {
      l.value = k, s.value = e.cardAmountMin, o.value = g.price, t("change", g), t("update:modelValue", g.price);
    }, p = (g) => {
      let $ = g.target.value.replace(/[^\d]/g, "");
      r.value = $, o.value = $, Number($) > e.cardAmountMax && (r.value = e.cardAmountMax, o.value = e.cardAmountMax), Number($) < e.cardAmountMin && (r.value = e.cardAmountMin, o.value = e.cardAmountMin), t("inputChange", Number(r.value)), t("update:modelValue", Number(r.value));
    }, d = () => {
      l.value = "input", s.value = e.cardAmountMin, o.value = r.value, t("update:modelValue", r.value), t("inputClick");
    }, v = (g) => {
      s.value = g, t("changeStep", s.value, o.value);
    };
    return Q(
      () => e.modelValue,
      (g) => {
        a.value = g;
      }
    ), {
      handleClick: i,
      changeStep: v,
      change: p,
      inputClick: d,
      stepValue: s,
      currentIndex: l,
      inputValue: r,
      money: a,
      translate: n
    };
  }
}), Q2 = { class: "nut-ecard" }, x2 = { class: "nut-ecard__title" }, e3 = { class: "nut-ecard__list" }, t3 = ["onClick"], n3 = { class: "nut-ecard__list__input--con" }, o3 = ["placeholder"], l3 = { class: "nut-ecard__list__step" };
function s3(e, t, n, l, o, r) {
  const s = W("nut-input-number");
  return c(), f("view", Q2, [
    h("view", x2, E(e.chooseText || e.translate("chooseText")), 1),
    h("view", e3, [
      (c(!0), f(x, null, ie(e.dataList, (a, i) => (c(), f("view", {
        key: i,
        class: L(["nut-ecard__list__item", e.currentIndex == i ? "active" : ""]),
        onClick: (p) => e.handleClick(a, i)
      }, E(a.price), 11, t3))), 128)),
      h("view", {
        class: L(["nut-ecard__list__input", e.currentIndex == "input" ? "active" : ""]),
        onClick: t[2] || (t[2] = (...a) => e.inputClick && e.inputClick(...a))
      }, [
        h("view", null, E(e.otherValueText || e.translate("otherValueText")), 1),
        h("view", n3, [
          Ce(h("input", {
            "onUpdate:modelValue": t[0] || (t[0] = (a) => e.inputValue = a),
            class: "nut-ecard__list__input--input",
            type: "text",
            placeholder: e.placeholder || e.translate("placeholder"),
            onInput: t[1] || (t[1] = (...a) => e.change && e.change(...a))
          }, null, 40, o3), [
            [Fn, e.inputValue]
          ]),
          ge(" " + E(e.suffix), 1)
        ])
      ], 2),
      h("view", l3, [
        h("view", null, E(e.suffix) + E(e.money), 1),
        oe(s, {
          modelValue: e.stepValue,
          "onUpdate:modelValue": t[3] || (t[3] = (a) => e.stepValue = a),
          min: e.cardBuyMin,
          max: e.cardBuyMax,
          onChange: e.changeStep
        }, null, 8, ["modelValue", "min", "max", "onChange"])
      ])
    ])
  ]);
}
const a3 = /* @__PURE__ */ q(J2, [["render", s3]]), { create: r3 } = j("address-list-item"), i3 = "NutAddressList", u3 = r3({
  components: { Del: Gn, Edit: bs },
  props: {
    item: {
      type: Object,
      default: {}
    }
  },
  emits: ["delIcon", "editIcon", "clickItem"],
  setup(e, { emit: t }) {
    const n = ke(i3);
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
}), c3 = { class: "nut-address-list-item__info" }, d3 = { class: "nut-address-list-item__info-contact" }, f3 = { class: "nut-address-list-item__info-contact-name" }, p3 = { class: "nut-address-list-item__info-contact-tel" }, m3 = {
  key: 0,
  class: "nut-address-list-item__info-contact-default"
}, h3 = { class: "nut-address-list-item__info-handle" }, g3 = { class: "nut-address-list-item__addr" };
function y3(e, t, n, l, o, r) {
  const s = W("Del"), a = W("Edit");
  return c(), f("div", {
    class: "nut-address-list-item",
    onClick: t[0] || (t[0] = (...i) => e.contentsClick && e.contentsClick(...i))
  }, [
    h("div", c3, [
      h("div", d3, [
        I(e.$slots, "content-top", {}, () => [
          h("div", f3, E(e.item.addressName), 1),
          h("div", p3, E(e.item.phone), 1),
          e.item.defaultAddress ? (c(), f("div", m3, E(e.translate("default")), 1)) : N("", !0)
        ])
      ]),
      h("div", h3, [
        I(e.$slots, "content-icon", {}, () => [
          oe(s, {
            name: "del",
            class: "nut-address-list-item__info-handle-del",
            onClick: e.delClick
          }, null, 8, ["onClick"]),
          oe(a, {
            name: "edit",
            class: "nut-address-list-item__info-handle-edit",
            onClick: e.editClick
          }, null, 8, ["onClick"])
        ])
      ])
    ]),
    h("div", g3, [
      I(e.$slots, "content-addr", {}, () => [
        ge(E(e.item.fullAddress), 1)
      ])
    ])
  ]);
}
const On = /* @__PURE__ */ q(u3, [["render", y3]]), { create: v3 } = j("address-list-general"), $3 = v3({
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
    ItemContents: On,
    NutButton: qe,
    NutSwipe: Eo
  },
  setup(e, { emit: t }) {
    const n = () => be(On, {
      item: e.item,
      onDelIcon(_) {
        s(_);
      },
      onEditIcon(_) {
        a(_);
      },
      onClickItem(_) {
        i(_);
      }
    });
    let l = null;
    const o = z(!1), r = z(!1), s = (_) => {
      t("delIcon", _, e.item), _.stopPropagation();
    }, a = (_) => {
      t("editIcon", _, e.item), _.stopPropagation();
    }, i = (_) => {
      o.value || (t("clickItem", _, e.item), _.stopPropagation());
    }, p = (_) => {
      t("longDel", _, e.item), _.stopPropagation();
    }, d = (_) => {
      l = 0, r.value = !0, t("longDown", _, e.item);
    };
    return {
      renderCompontent: n,
      showMaskRef: r,
      clickItem: i,
      editClick: a,
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
        r.value = !1;
      },
      setDefault: (_) => {
        t("longSet", _, e.item), _.stopPropagation();
      },
      maskClick: (_) => {
        l != 0 && (r.value = !1), _.stopPropagation(), _.preventDefault();
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
}), b3 = {
  key: 0,
  class: "nut-address-list-general"
}, w3 = { class: "nut-address-list-swipe" };
function k3(e, t, n, l, o, r) {
  const s = W("nut-button"), a = W("nut-swipe");
  return e.swipeEdition ? (c(), ee(a, { key: 1 }, {
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
      h("div", w3, [
        (c(), ee(Ve(e.renderCompontent()), {
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
  })) : (c(), f("div", b3, [
    (c(), ee(Ve(e.renderCompontent()), {
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
const C3 = /* @__PURE__ */ q($3, [["render", k3]]), { create: S3 } = j("address-list"), T3 = "NutAddressList", N3 = S3({
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
    GeneralShell: C3,
    NutButton: qe
  },
  emits: ["delIcon", "editIcon", "clickItem", "longCopy", "longSet", "longDel", "swipeDel", "add"],
  setup(e, { emit: t }) {
    const n = ke(T3), l = z([]), o = ce({
      id: 2,
      addressName: "姓名",
      phone: "123****4567",
      defaultAddress: !1,
      fullAddress: "北京市通州区测试测试测试测试测试测试测试测试测试"
    }), r = () => {
      Object.keys(e.dataOptions).length > 0 && (l.value = e.data.map(($) => ul(o, $, e.dataOptions)));
    };
    Q(
      () => e.data,
      () => r(),
      { deep: !0 }
    );
    const s = ($, w) => {
      t("delIcon", $, w), $.stopPropagation();
    }, a = ($, w) => {
      t("editIcon", $, w), $.stopPropagation();
    }, i = ($, w) => {
      t("clickItem", $, w), $.stopPropagation();
    }, p = ($, w) => {
      t("longCopy", $, w), $.stopPropagation();
    }, d = ($, w) => {
      t("longSet", $, w), $.stopPropagation();
    }, v = ($, w) => {
      t("longDel", $, w), $.stopPropagation();
    }, g = ($, w) => {
      t("swipeDel", $, w), $.stopPropagation();
    }, k = ($) => {
      t("add", $), $.stopPropagation();
    };
    return ve(() => {
      r();
    }), {
      clickDelIcon: s,
      clickEditIcon: a,
      clickContentItem: i,
      clickLongCopy: p,
      clickLongSet: d,
      clickLongDel: v,
      clickSwipeDel: g,
      addAddress: k,
      dataArray: l,
      translate: n
    };
  }
}), D3 = { class: "nut-address-list" };
function _3(e, t, n, l, o, r) {
  const s = W("general-shell"), a = W("nut-button");
  return c(), f("div", D3, [
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
      oe(a, {
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
const I3 = /* @__PURE__ */ q(N3, [["render", _3]]), { create: B3 } = j("category"), M3 = B3({
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
      getChildList: (r) => {
        n.value = r, t("change", r);
      },
      checkIndex: n,
      categoryLeft: l
    };
  }
}), L3 = { class: "nut-category" }, E3 = { class: "nut-category__cateList" }, P3 = { key: 0 }, A3 = ["onClick"];
function z3(e, t, n, l, o, r) {
  return c(), f("div", L3, [
    h("div", E3, [
      e.type == "classify" || e.type == "text" ? (c(), f("div", P3, [
        (c(!0), f(x, null, ie(e.category, (s, a) => (c(), f("div", {
          key: a,
          class: "nut-category__cateListLeft"
        }, [
          h("div", {
            class: L([e.checkIndex == a ? "nut-category__cateListItemChecked" : "nut-category__cateListItem"]),
            onClick: (i) => e.getChildList(a)
          }, E(s.catName), 11, A3)
        ]))), 128))
      ])) : N("", !0),
      I(e.$slots, "default")
    ])
  ]);
}
const V3 = /* @__PURE__ */ q(M3, [["render", z3]]), { create: O3 } = j("category-pane"), H3 = O3({
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
}), R3 = { class: "nut-category-pane" }, F3 = {
  key: 0,
  class: "nut-category-pane__cateListRight"
}, W3 = { class: "nut-category-pane__childTitle" }, Y3 = {
  key: 0,
  class: "nut-category-pane__childItemList"
}, j3 = ["onClick"], U3 = ["src"], K3 = { class: "nut-category-pane__skuImg" }, X3 = {
  key: 1,
  class: "nut-category-pane__cateListRight"
}, q3 = { class: "nut-category-pane__childTitle" }, Z3 = {
  key: 0,
  class: "nut-category-pane__childItemList"
}, G3 = ["onClick"], J3 = { class: "nut-category-pane__skuName" }, Q3 = {
  key: 2,
  class: "nut-category-pane__selfItemList"
}, x3 = ["onClick"];
function e4(e, t, n, l, o, r) {
  return c(), f("div", R3, [
    e.type == "classify" ? (c(), f("div", F3, [
      (c(!0), f(x, null, ie(e.categoryChild, (s, a) => (c(), f("div", { key: a }, [
        h("div", W3, E(s == null ? void 0 : s.catName), 1),
        (s == null ? void 0 : s.catType) == 1 ? (c(), f("div", Y3, [
          (c(!0), f(x, null, ie(s.childCateList, (i, p) => (c(), f("div", {
            key: p,
            class: "nut-category-pane__childItem",
            onClick: (d) => e.onChange(i)
          }, [
            h("img", {
              class: "nut-category-pane__childImg",
              src: i.backImg
            }, null, 8, U3),
            h("div", K3, E(i == null ? void 0 : i.catName), 1)
          ], 8, j3))), 128))
        ])) : N("", !0)
      ]))), 128))
    ])) : N("", !0),
    e.type == "text" ? (c(), f("div", X3, [
      (c(!0), f(x, null, ie(e.categoryChild, (s, a) => (c(), f("div", { key: a }, [
        h("div", q3, E(s == null ? void 0 : s.catName), 1),
        (s == null ? void 0 : s.catType) == 1 ? (c(), f("div", Z3, [
          (c(!0), f(x, null, ie(s.childCateList, (i, p) => (c(), f("div", {
            key: p,
            class: "nut-category-pane__childItem",
            onClick: (d) => e.onChange(i)
          }, [
            h("div", J3, E(i == null ? void 0 : i.catName), 1)
          ], 8, G3))), 128))
        ])) : N("", !0)
      ]))), 128))
    ])) : N("", !0),
    e.type == "custom" ? (c(), f("div", Q3, [
      (c(!0), f(x, null, ie(e.customCategory, (s, a) => (c(), f("div", {
        key: a,
        class: "nut-category-pane__skuName",
        onClick: (i) => e.onChange(s)
      }, E(s == null ? void 0 : s.catName), 9, x3))), 128))
    ])) : N("", !0)
  ]);
}
const t4 = /* @__PURE__ */ q(H3, [["render", e4]]), { create: n4 } = j("comment-header"), o4 = n4({
  components: {
    NutRate: Bo
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
}), l4 = { class: "nut-comment-header__user" }, s4 = { class: "nut-comment-header__user-avter" }, a4 = ["src"], r4 = { class: "nut-comment-header__user-score" }, i4 = {
  key: 0,
  class: "nut-comment-header__time"
};
function u4(e, t, n, l, o, r) {
  const s = W("nut-rate");
  return c(), f("view", null, [
    e.info ? (c(), f("view", {
      key: 0,
      class: "nut-comment-header",
      onClick: t[1] || (t[1] = (...a) => e.handleClick && e.handleClick(...a))
    }, [
      h("view", l4, [
        h("view", s4, [
          e.info.avatar ? (c(), f("img", {
            key: 0,
            src: e.info.avatar
          }, null, 8, a4)) : N("", !0)
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
          h("view", r4, [
            oe(s, {
              modelValue: e.info.score,
              "onUpdate:modelValue": t[0] || (t[0] = (a) => e.info.score = a),
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
      e.info.time ? (c(), f("view", i4, E(e.info.time), 1)) : N("", !0)
    ])) : N("", !0),
    e.type == "complex" ? (c(), f("view", {
      key: 1,
      class: L([`nut-comment-header__${e.type}-score`])
    }, [
      oe(s, {
        modelValue: e.info.score,
        "onUpdate:modelValue": t[2] || (t[2] = (a) => e.info.score = a),
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
const c4 = /* @__PURE__ */ q(o4, [["render", u4]]), { create: d4 } = j("comment-images"), f4 = d4({
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
        s[0].length > 0 && s[0].forEach((a) => {
          a.type = "video";
        }), o.value = s[0].concat(s[1]);
      },
      { deep: !0 }
    ), ve(() => {
      e.videos.length > 0 && e.videos.forEach((s) => {
        s.type = "video";
      }), o.value = e.videos.concat(e.images);
    }), { isShowImage: n, initIndex: l, showImages: (s, a) => {
      const { videos: i, images: p } = e, d = s == "img" ? a - i.length : a;
      t("clickImages", {
        type: s,
        index: d,
        value: s == "img" ? p[d] : i[d]
      });
    }, totalImages: o };
  }
}), p4 = ["onClick"], m4 = ["src"], h4 = /* @__PURE__ */ h("view", { class: "nut-comment-images__play" }, null, -1), g4 = ["onClick"], y4 = ["src"], v4 = {
  key: 0,
  class: "nut-comment-images__mask"
};
function $4(e, t, n, l, o, r) {
  const s = W("Right");
  return c(), f("view", {
    class: L(`nut-comment-images nut-comment-images--${e.type}`)
  }, [
    (c(!0), f(x, null, ie(e.videos, (a, i) => (c(), f("view", {
      key: a.id,
      class: "nut-comment-images__item nut-comment-images__item--video",
      onClick: (p) => e.showImages("video", i)
    }, [
      h("img", {
        src: a.mainUrl
      }, null, 8, m4),
      h4
    ], 8, p4))), 128)),
    (c(!0), f(x, null, ie(e.images, (a, i) => (c(), f(x, {
      key: a.id
    }, [
      e.type == "multi" && e.videos.length + i < 9 || e.type != "multi" ? (c(), f("view", {
        key: 0,
        class: "nut-comment-images__item nut-comment-images__item--imgbox",
        onClick: (p) => e.showImages("img", i + e.videos.length)
      }, [
        h("img", {
          src: a.smallImgUrl ? a.smallImgUrl : a.imgUrl
        }, null, 8, y4),
        e.type == "multi" && e.totalImages.length > 9 && e.videos.length + i > 7 ? (c(), f("view", v4, [
          h("span", null, "共 " + E(e.totalImages.length) + " 张", 1),
          oe(s, { style: { width: "12px" } })
        ])) : N("", !0)
      ], 8, g4)) : N("", !0)
    ], 64))), 128))
  ], 2);
}
const b4 = /* @__PURE__ */ q(f4, [["render", $4]]), { create: w4 } = j("comment-bottom"), k4 = "NutComment", C4 = w4({
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
  components: { Fabulous: Ts, Comment: rs, MoreX: Ea },
  emits: ["clickOperate", "handleClick"],
  setup(e, { emit: t }) {
    const n = ke(k4), l = z(!1), o = z([]);
    return ve(() => {
      const a = ["replay", "like", "more"];
      e.operation && e.operation.forEach((i) => {
        a.includes(i) && o.value.push(i);
      });
    }), { showPopver: l, operate: (a) => {
      a == "more" && (l.value = !l.value), t("clickOperate", a);
    }, mergeOp: o, handleClick: () => {
      t("handleClick");
    }, translate: n };
  }
}), S4 = { class: "nut-comment-bottom" }, T4 = { key: 0 }, N4 = { class: "nut-comment-bottom__cpx" }, D4 = ["onClick"];
function _4(e, t, n, l, o, r) {
  const s = W("Fabulous"), a = W("Comment"), i = W("MoreX");
  return c(), f("view", S4, [
    h("view", {
      class: "nut-comment-bottom__lable",
      onClick: t[0] || (t[0] = (...p) => e.handleClick && e.handleClick(...p))
    }, [
      e.type != "complex" ? (c(), f("span", T4, E(e.info.size), 1)) : N("", !0)
    ]),
    h("view", N4, [
      (c(!0), f(x, null, ie(e.mergeOp, (p, d) => (c(), f("view", {
        key: d,
        class: L(["nut-comment-bottom__cpx-item", `nut-comment-bottom__cpx-item--${p}`]),
        onClick: (v) => e.operate(p)
      }, [
        p != "more" ? (c(), f(x, { key: 0 }, [
          h("span", null, E(e.info[p]), 1),
          p == "like" ? (c(), ee(s, { key: 0 })) : (c(), ee(a, { key: 1 }))
        ], 64)) : N("", !0),
        p == "more" ? (c(), f(x, { key: 1 }, [
          oe(i),
          e.showPopver ? (c(), f("view", {
            key: 0,
            class: "nut-comment-bottom__cpx-item-popover",
            onClick: t[1] || (t[1] = (v) => e.operate("popover"))
          }, E(e.translate("complaintsText")), 1)) : N("", !0)
        ], 64)) : N("", !0)
      ], 10, D4))), 128))
    ])
  ]);
}
const I4 = /* @__PURE__ */ q(C4, [["render", _4]]), { create: B4 } = j("comment"), M4 = "NutComment", L4 = B4({
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
    CommentHeader: c4,
    CommentImages: b4,
    CommentBottom: I4,
    Right: ln
  },
  emits: ["click", "clickImages", "clickOperate"],
  setup(e, { emit: t }) {
    const n = ke(M4);
    return { conEllipsis: D(() => e.ellipsis ? e.ellipsis : e.headerType == "complex" ? 6 : 2), clickOperate: (a) => {
      t("clickOperate", a);
    }, handleClick: () => {
      t("click", e.info);
    }, clickImages: (a) => {
      t("clickImages", a);
    }, translate: n };
  }
}), E4 = {
  key: 0,
  class: "nut-comment"
}, P4 = ["innerHTML"], A4 = { class: "nut-comment__follow-title" }, z4 = { class: "nut-comment__follow-com" };
function V4(e, t, n, l, o, r) {
  const s = W("comment-header"), a = W("comment-images"), i = W("Right"), p = W("comment-bottom");
  return e.info && Object.keys(e.info) ? (c(), f("view", E4, [
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
    }, null, 12, P4),
    oe(a, {
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
      h("view", A4, E(e.translate("additionalReview", e.follow.days)), 1),
      h("view", z4, E(e.follow.content), 1),
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
const O4 = /* @__PURE__ */ q(L4, [["render", V4]]), { componentName: H4, create: R4 } = j("invoice"), F4 = R4({
  components: {
    NutForm: un,
    NutFormItem: cn,
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
    }), r = D(() => ({
      [H4]: !0
    }));
    ve(() => {
      s();
    });
    const s = () => {
      l.value = e.data;
    }, a = () => {
      n.value.validate().then(({ valid: i, errors: p }) => {
        t("submit", i, p), t("onSubmit", i, p);
      });
    };
    return Q(
      () => e.data,
      () => s(),
      { deep: !0 }
    ), de(Z({}, he(o)), {
      classes: r,
      formRef: n,
      list: l,
      submitFun: a
    });
  }
}), W4 = ["onUpdate:modelValue", "placeholder"], Y4 = {
  key: 0,
  class: "nut-invoice__submit"
};
function j4(e, t, n, l, o, r) {
  const s = W("nut-radio"), a = W("nut-radio-group"), i = W("nut-form-item"), p = W("nut-form"), d = W("nut-button");
  return c(), f("view", {
    class: L(e.classes)
  }, [
    oe(p, {
      ref: "formRef",
      "model-value": e.formValue
    }, {
      default: ne(() => [
        (c(!0), f(x, null, ie(e.list, (v, g) => (c(), ee(i, {
          key: g,
          label: v.label,
          required: v.required,
          rules: v.rules,
          prop: v.formItemProp
        }, {
          default: ne(() => [
            v.type === "radio" ? (c(), ee(a, {
              key: 0,
              modelValue: e.formValue[v.formItemProp],
              "onUpdate:modelValue": (k) => e.formValue[v.formItemProp] = k
            }, {
              default: ne(() => [
                (c(!0), f(x, null, ie(v.radioLabel, (k, $) => (c(), ee(s, {
                  key: $,
                  shape: "button",
                  label: k.label
                }, {
                  default: ne(() => [
                    ge(E(k.label), 1)
                  ]),
                  _: 2
                }, 1032, ["label"]))), 128))
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue"])) : Ce((c(), f("input", {
              key: 1,
              "onUpdate:modelValue": (k) => e.formValue[v.formItemProp] = k,
              class: "nut-input-text",
              placeholder: v.placeholder,
              type: "text"
            }, null, 8, W4)), [
              [Fn, e.formValue[v.formItemProp]]
            ])
          ]),
          _: 2
        }, 1032, ["label", "required", "rules", "prop"]))), 128))
      ]),
      _: 1
    }, 8, ["model-value"]),
    e.submit ? (c(), f("div", Y4, [
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
const U4 = /* @__PURE__ */ q(F4, [["render", j4]]), { create: K4 } = j("avatar-cropper"), X4 = K4({
  components: {
    NutButton: qe,
    Refresh2: ur,
    Retweet: mr
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
    }, r = z(Z({}, o)), s = z(), a = z(), i = z(), p = window.devicePixelRatio || 1, d = et(), v = D(() => l.angle === 90 || l.angle === 270), g = D(() => {
      const { swidth: X } = r.value, se = X / p + "px";
      return {
        width: se,
        height: se
      };
    }), k = D(() => {
      const { displayWidth: X, scale: se } = l, { swidth: ue, height: pe } = r.value;
      return v.value ? Math.max(0, (pe * se - ue) / 2) : Math.max(0, (X * se - ue) / 2);
    }), $ = D(() => {
      const { displayWidth: X, scale: se } = l, { swidth: ue, height: pe } = r.value;
      return v.value ? Math.max(0, (X * se - ue) / 2) : Math.max(0, (pe * se - ue) / 2);
    }), w = (X) => new Promise((se) => {
      const ue = new FileReader();
      ue.onloadend = (pe) => se(pe.target.result), ue.readAsDataURL(X);
    }), u = (X) => new Promise((se) => {
      const ue = new Image();
      ue.onload = () => se(ue), ue.src = X;
    }), y = () => {
      const { img: X, width: se, height: ue, x: pe, y: we, swidth: Ie } = r.value, { moveX: H, moveY: J, scale: ae } = l, re = a.value;
      if (!re)
        return;
      const me = re.getContext("2d");
      re.width = l.displayWidth, re.height = l.displayHeight, me.clearRect(0, 0, re.width, re.height), me.fillStyle = "#666", me.fillRect(0, 0, re.width, re.height), me.fillStyle = "#000", me.fillRect(e.space * p, (re.height - Ie) / 2, Ie, Ie), me.translate(re.width / 2 + H, re.height / 2 + J), me.rotate(Math.PI / 180 * l.angle), me.scale(ae, ae), me.drawImage(X, pe, we, se, ue);
    }, m = (X) => {
      const se = Ye(s.value), { width: ue, height: pe } = se, we = l.displayWidth = ue * p, Ie = l.displayHeight = pe * p;
      let H = Z({}, o);
      const { width: J, height: ae } = X;
      H.img = X;
      const re = ae > J, me = re ? J / ae : ae / J;
      H.width = we, H.height = re ? we / me : we * me, H.x = -H.width / 2, H.y = -H.height / 2, H.swidth = we - e.space * 2 * p, H.sheight = re ? H.swidth / me : H.swidth * me, H.sx = e.space * p, H.sy = (Ie - H.swidth) / 2, r.value = H, l.defScale = H.swidth / (re ? H.width : H.height), S();
    }, b = (X) => Ge(this, null, function* () {
      l.visible = !0;
      const se = X.target;
      let { files: ue } = se;
      if (!(ue != null && ue.length))
        return;
      const pe = yield w(ue[0]), we = yield u(pe);
      m(we), y();
    }), S = () => {
      _(l.defScale), l.moveX = 0, l.moveY = 0, l.angle = 0;
    }, _ = (X) => {
      X = ze(X, 0.3, +e.maxZoom + 1), X !== l.scale && (l.scale = X);
    }, B = (X) => Math.sqrt(pt(X[0].clientX - X[1].clientX, 2) + pt(X[0].clientY - X[1].clientY, 2));
    let M, C, T, P, O;
    const K = (X) => {
      const { touches: se } = X, { offsetX: ue } = d;
      d.start(X), O = se.length, M = l.moveX, C = l.moveY, l.moving = O === 1, l.zooming = O === 2 && !ue.value, l.zooming && (T = l.scale, P = B(X.touches));
    }, G = (X) => {
      const { touches: se } = X;
      if (d.move(X), (l.moving || l.zooming) && dt(X, !0), l.moving) {
        const { deltaX: ue, deltaY: pe } = d, we = ue.value * l.scale + M, Ie = pe.value * l.scale + C;
        l.moveX = ze(we, -k.value, k.value), l.moveY = ze(Ie, -$.value, $.value);
      }
      if (l.zooming && se.length === 2) {
        const ue = B(se), pe = T * ue / P;
        _(pe);
      }
    }, le = (X) => {
      let se = !1;
      (l.moving || l.zooming) && (se = !(l.moving && M === l.moveX && C === l.moveY), X.touches.length || (l.zooming && (l.moveX = ze(l.moveX, -k.value, k.value), l.moveY = ze(l.moveY, -$.value, $.value), l.zooming = !1), l.moving = !1, M = 0, C = 0, T = l.defScale, l.scale < l.defScale && S(), l.scale > e.maxZoom && (l.scale = +e.maxZoom))), dt(X, se), d.reset();
    }, Y = () => {
      l.angle = 0;
    }, U = () => {
      if (l.angle === 270) {
        l.angle = 0;
        return;
      }
      l.angle += 90;
    }, R = (X = !0) => {
      l.visible = !1, S(), i.value.value = "", X && t("cancel");
    }, te = () => {
      const X = a.value, { sx: se, sy: ue, swidth: pe } = r.value, we = pe, Ie = pe, H = document.createElement("canvas"), J = H.getContext("2d");
      H.width = we, H.height = Ie, X && J.drawImage(X, se, ue, we, Ie, 0, 0, we, Ie);
      const ae = H.toDataURL("image/png");
      t("confirm", ae), R(!1);
    };
    return Q(
      () => l.scale,
      () => {
        y();
      }
    ), Q(
      () => l.angle,
      () => {
        Math.abs(l.moveX) > k.value && (l.moveX = k.value), Math.abs(l.moveY) > $.value && (l.moveY = $.value), y();
      }
    ), Q(
      () => l.moveX,
      () => {
        y();
      }
    ), Q(
      () => l.moveY,
      () => {
        y();
      }
    ), n({
      cancel: R,
      reset: Y,
      rotate: U,
      confirm: te
    }), de(Z({}, he(l)), {
      cropperPopupRef: s,
      canvasRef: a,
      inputImageRef: i,
      highlightStyle: g,
      inputImageChange: b,
      reset: Y,
      rotate: U,
      cancel: R,
      confirm: te,
      onTouchStart: K,
      onTouchMove: G,
      onTouchEnd: le
    });
  }
}), q4 = ["data-edit-text"], Z4 = {
  ref: "cropperPopupRef",
  class: "nut-cropper-popup"
}, G4 = {
  ref: "canvasRef",
  class: "nut-cropper-popup__canvas"
}, J4 = {
  key: 1,
  class: "flex-sb"
};
function Q4(e, t, n, l, o, r) {
  const s = W("nut-button"), a = W("Refresh2"), i = W("Retweet");
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
    ], 10, q4),
    Ce(h("div", Z4, [
      h("canvas", G4, null, 512),
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
        e.$slots.toolbar ? I(e.$slots, "toolbar", { key: 0 }) : (c(), f("div", J4, [
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
            oe(a, { color: "#fff" })
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
      [De, e.visible]
    ])
  ], 64);
}
const x4 = /* @__PURE__ */ q(X4, [["render", Q4]]);
function e5(e) {
  [qe, eo, to, Tt, Ae, Ni, Pi, oo, so, ao, uo, co, Gi, nu, lu, fu, Cu, Mu, Vu, Fu, ec, go, wc, yo, vo, Fc, qc, ed, rd, wo, _d, Yd, pf, So, zf, Hf, lp, zt, $p, _o, Io, Bo, Co, No, Rp, Xp, $1, V1, un, cn, Eo, K1, lm, um, pm, dn, Em, Hm, Vt, Zm, Ot, ph, $h, fn, Nh, Mh, Mo, Fh, Jh, ag, pn, Tg, Hg, mn, hn, Ht, gn, m0, k0, ho, Fo, Wo, H0, jo, Uo, cy, Ko, vy, Cy, _y, Ry, dv, gv, Sv, zv, Fv, Zv, A2, q2, a3, I3, V3, t4, O4, U4, x4].forEach((n) => {
    n.install ? e.use(n) : n.name && e.component(n.name, n);
  });
}
const t5 = "4.3.2", r5 = { install: e5, version: t5 };
export {
  lm as ActionSheet,
  dv as Address,
  I3 as AddressList,
  Ko as Animate,
  ph as Audio,
  $h as AudioOperate,
  fn as Avatar,
  x4 as AvatarCropper,
  Nh as AvatarGroup,
  um as Backtop,
  ho as Badge,
  gv as Barrage,
  qe as Button,
  pf as Calendar,
  So as CalendarCard,
  Co as CalendarItem,
  q2 as Card,
  Yd as Cascader,
  V3 as Category,
  t4 as CategoryPane,
  eo as Cell,
  to as CellGroup,
  zf as Checkbox,
  Hf as CheckboxGroup,
  Fh as CircleProgress,
  so as Col,
  jo as Collapse,
  Uo as CollapseItem,
  O4 as Comment,
  Ni as ConfigProvider,
  k0 as Countdown,
  m0 as Countup,
  lp as DatePicker,
  dn as Dialog,
  co as Divider,
  pm as Drag,
  a3 as Ecard,
  go as Elevator,
  vy as Ellipsis,
  ag as Empty,
  Cu as FixedNav,
  un as Form,
  cn as FormItem,
  Gi as Grid,
  nu as GridItem,
  Pi as Image,
  gn as ImagePreview,
  Fc as Indicator,
  Em as InfiniteLoading,
  $p as Input,
  zt as InputNumber,
  U4 as Invoice,
  oo as Layout,
  Mh as List,
  Xn as Locale,
  Mu as Menu,
  Vu as MenuItem,
  fu as Navbar,
  Jh as Noticebar,
  Vt as Notify,
  V1 as NumberKeyboard,
  Tt as Overlay,
  wc as Pagination,
  No as Picker,
  Wo as Popover,
  Ae as Popup,
  Ht as Price,
  Mo as Progress,
  Hm as PullRefresh,
  _o as Radio,
  Io as RadioGroup,
  wo as Range,
  Bo as Rate,
  ao as Row,
  _d as Searchbar,
  Rp as ShortPassword,
  qc as SideNavbar,
  ed as SideNavbarItem,
  Sv as Signature,
  H0 as Skeleton,
  A2 as Sku,
  lu as Space,
  Hg as Step,
  Tg as Steps,
  uo as Sticky,
  rd as SubSideNavbar,
  Eo as Swipe,
  K1 as SwipeGroup,
  mn as Swiper,
  hn as SwiperItem,
  Zm as Switch,
  vo as TabPane,
  Fu as Tabbar,
  ec as TabbarItem,
  cy as Table,
  yo as Tabs,
  Fo as Tag,
  Xp as Textarea,
  Zv as TimeDetail,
  Fv as TimePannel,
  zv as TimeSelect,
  Ot as Toast,
  Ry as Tour,
  _y as TrendArrow,
  $1 as Uploader,
  pn as Video,
  Cy as Watermark,
  r5 as default,
  e5 as install,
  km as showDialog,
  r0 as showImagePreview,
  a5 as showNotify,
  zo as showToast,
  t5 as version
};
