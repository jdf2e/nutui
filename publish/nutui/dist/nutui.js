var qo = Object.defineProperty, Zo = Object.defineProperties;
var Go = Object.getOwnPropertyDescriptors;
var Dt = Object.getOwnPropertySymbols;
var yn = Object.prototype.hasOwnProperty, vn = Object.prototype.propertyIsEnumerable;
var pt = Math.pow, Rt = (e, t, n) => t in e ? qo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Z = (e, t) => {
  for (var n in t || (t = {}))
    yn.call(t, n) && Rt(e, n, t[n]);
  if (Dt)
    for (var n of Dt(t))
      vn.call(t, n) && Rt(e, n, t[n]);
  return e;
}, de = (e, t) => Zo(e, Go(t));
var _t = (e) => typeof e == "symbol" ? e : e + "", Ft = (e, t) => {
  var n = {};
  for (var s in e)
    yn.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && Dt)
    for (var s of Dt(e))
      t.indexOf(s) < 0 && vn.call(e, s) && (n[s] = e[s]);
  return n;
};
var V = (e, t, n) => (Rt(e, typeof t != "symbol" ? t + "" : t, n), n);
var Ge = (e, t, n) => new Promise((s, o) => {
  var r = (i) => {
    try {
      a(n.next(i));
    } catch (p) {
      o(p);
    }
  }, l = (i) => {
    try {
      a(n.throw(i));
    } catch (p) {
      o(p);
    }
  }, a = (i) => i.done ? s(i.value) : Promise.resolve(i.value).then(r, l);
  a((n = n.apply(e, t)).next());
});
import { reactive as ce, ref as z, defineComponent as Pe, useSlots as lt, h as be, openBlock as u, createBlock as ee, computed as D, createElementBlock as f, normalizeClass as L, normalizeStyle as A, createElementVNode as m, createTextVNode as ge, unref as Fe, createCommentVNode as N, renderSlot as I, provide as Le, inject as Me, getCurrentInstance as Ye, onUnmounted as Xe, createApp as Jo, resolveComponent as W, Fragment as x, toDisplayString as E, watchEffect as bt, Transition as Jt, withCtx as ne, withDirectives as Ce, withModifiers as De, vShow as Ne, watch as Q, toRefs as he, Teleport as Hn, mergeProps as wt, createVNode as oe, onMounted as ve, onBeforeUnmount as Qt, shallowReactive as Qo, markRaw as $n, isVNode as xo, Comment as el, Text as tl, nextTick as Se, renderList as ie, normalizeProps as nl, guardReactiveProps as ol, resolveDynamicComponent as ze, onActivated as Ct, toRef as xe, createSlots as kt, onBeforeMount as Rn, readonly as bn, onDeactivated as St, render as xt, vModelText as Fn } from "vue";
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
      monthTitle: (n, s) => `${n}年${s}月`,
      today: "今天"
    });
    V(this, "calendarcard", {
      weekdays: ["日", "一", "二", "三", "四", "五", "六"],
      end: "结束",
      start: "开始",
      title: "日期选择",
      monthTitle: (n, s) => `${n}年${s}月`,
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
      monthTitle: (n, s) => `${n}/${s}`,
      today: "Today"
    });
    V(this, "calendarcard", {
      weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      end: "End",
      start: "Start",
      title: "Calendar",
      monthTitle: (n, s) => `${n}/${s}`,
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
const en = (e, {
  args: t = [],
  done: n,
  canceled: s
}) => {
  if (e) {
    const o = e.apply(null, t);
    jn(o) ? o.then((r) => {
      r ? n(r) : s && s();
    }).catch(() => {
    }) : o ? n() : s && s();
  } else
    n();
}, Yt = (e) => {
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
}, Yn = Array.isArray, al = (e) => e instanceof Date, Pt = (e) => typeof e == "function", rl = (e) => typeof e == "string", ct = (e) => e !== null && typeof e == "object", jn = (e) => ct(e) && Pt(e.then) && Pt(e.catch), il = document, wn = il.body, jt = (e, t) => {
  try {
    return t.split(".").reduce((n, s) => n[s], e);
  } catch (n) {
    return "";
  }
}, ul = (e, t, n) => {
  let s = Object.assign({}, e), o = Object.assign({}, n);
  return Object.keys(t).length > 0 ? (Object.keys(s).forEach((r) => {
    if (Object.prototype.hasOwnProperty.call(o, r)) {
      const l = Yt(o[r]);
      l == "function" && (s[r] = o[r](t)), l == "string" && (s[r] = t[o[r]]);
    } else
      t[r] && (s[r] = t[r]);
  }), s) : e;
}, Un = (e, t) => (Object.keys(t).forEach((n) => {
  let s = e[n], o = t[n];
  ct(s) && ct(o) ? Un(s, o) : e[n] = o;
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
}, Ae = (e, t, n) => Math.min(Math.max(e, t), n), Kn = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, It = ce({
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
    const n = e, s = "nut-icon", o = lt(), r = () => n.name ? n.name.indexOf("/") !== -1 : !1, l = (d) => {
      if (d)
        return isNaN(Number(d)) ? String(d) : d + "px";
    }, a = r();
    let i = be(
      a ? "img" : n.tag,
      {
        class: a ? `${s}__img` : `${n.fontClassName} ${s} ${n.classPrefix}-${n.name}`,
        style: {
          color: n.color,
          fontSize: l(n.size),
          width: l(n.width || n.size),
          height: l(n.height || n.size)
        },
        src: a ? n.name : ""
      },
      (t = o.default) == null ? void 0 : t.call(o)
    );
    const p = () => i;
    return (d, $) => (u(), ee(p));
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
    }, s = D(() => {
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
    return { classes: s, style: o };
  }
}), ye = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
};
F("add");
F("addfollow");
F("arrow-down");
const pl = F("arrow-down2"), ml = /* @__PURE__ */ m("path", {
  d: "M1741.19 227.497a121.654 121.654 0 1 1 127.858 206.812L1292.65 790.27a182.482 182.482 0 0 1-191.727 0L524.646 434.31a121.654 121.654 0 1 1 127.859-206.812l544.403 335.887c181.387-111.8 362.773-223.965 544.282-335.887",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), hl = [
  ml
];
function gl(e, t, n, s, o, r) {
  return u(), f("svg", {
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
const vl = F("arrow-up2"), $l = /* @__PURE__ */ m("path", {
  d: "M623.406 815.479A129.722 129.722 0 1 1 487.068 594.95C691.9 468.083 896.73 341.993 1101.691 215.125a194.583 194.583 0 0 1 204.442 0l614.494 379.567a129.722 129.722 0 1 1-136.338 220.657l-580.506-358.292-580.377 358.422",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), bl = [
  $l
];
function wl(e, t, n, s, o, r) {
  return u(), f("svg", {
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
const Cl = F("check-checked"), Sl = /* @__PURE__ */ m("path", {
  d: "M510.613 2.837C229.793 2.837.032 232.598.032 513.418S229.793 1024 510.613 1024s510.582-229.762 510.582-510.582S794.27 2.837 510.613 2.837zm0 794.238c-156.01 0-283.656-127.646-283.656-283.657s127.645-283.656 283.656-283.656S794.27 357.407 794.27 513.418 666.624 797.075 510.613 797.075z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Tl = /* @__PURE__ */ m("path", {
  d: "M382.968 513.418a127.645 127.645 0 1 0 255.29 0 127.645 127.645 0 1 0-255.29 0Z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1);
function Nl(e, t, n, s, o, r) {
  return u(), f("svg", {
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
const kn = /* @__PURE__ */ ye(Cl, [["render", Nl]]), Dl = F("check-disabled"), _l = /* @__PURE__ */ m("path", {
  d: "M506.467 0C227.962 0 .094 227.868.094 506.374s227.868 506.373 506.373 506.373 506.374-227.868 506.374-506.373S787.786 0 506.467 0zm202.55 571.077H306.73c-45.01 0-67.516-22.506-67.516-67.517 0-45.01 22.505-67.516 67.516-67.516h402.286c45.01 0 67.516 22.505 67.516 67.516 0 45.011-22.505 67.517-67.516 67.517z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Il = [
  _l
];
function Bl(e, t, n, s, o, r) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Il, 6);
}
const Ml = /* @__PURE__ */ ye(Dl, [["render", Bl]]), Ll = F("check-normal"), El = /* @__PURE__ */ m("path", {
  d: "M512 1024c-136.533 0-264.533-54.044-361.244-150.756C54.044 776.534 0 648.534 0 512c0-136.533 54.044-264.533 150.756-361.244C247.466 54.044 375.466 0 512 0c136.533 0 264.533 54.044 361.244 150.756C969.956 247.466 1024 375.466 1024 512s-54.044 264.533-150.756 361.244C776.534 969.956 648.534 1024 512 1024zm0-938.667c-113.778 0-221.867 45.511-301.511 125.156S85.333 398.222 85.333 512s45.511 221.867 125.156 301.511S398.222 938.667 512 938.667s221.867-45.511 301.511-125.156S938.667 625.778 938.667 512 893.156 290.133 813.51 210.489 625.778 85.333 512 85.333z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Pl = [
  El
];
function Al(e, t, n, s, o, r) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Pl, 6);
}
const Ut = /* @__PURE__ */ ye(Ll, [["render", Al]]), zl = F("Check"), Vl = /* @__PURE__ */ m("path", {
  d: "M998.4 245.029c-219.429 153.6-398.629 332.8-552.229 552.228-40.228 58.514-128 54.857-164.571-3.657-69.486-106.057-149.943-186.514-256-256-51.2-32.914-18.286-113.371 40.229-98.743C182.857 460.8 274.286 508.343 358.4 585.143c157.257-190.172 358.4-340.114 588.8-435.2 62.171-25.6 106.057 58.514 51.2 95.086",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ol = [
  Vl
];
function Hl(e, t, n, s, o, r) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ol, 6);
}
const qn = /* @__PURE__ */ ye(zl, [["render", Hl]]), Rl = F("checked"), Fl = /* @__PURE__ */ m("path", {
  d: "M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0zm281.6 369.778C779.378 381.156 600.178 500.622 472.178 691.2c0 0 0 2.844-2.845 2.844-8.533 5.69-48.355 36.978-88.177-8.533-39.823-51.2-62.578-99.555-142.223-142.222-2.844 0-2.844-2.845-2.844-2.845-8.533-11.377-39.822-56.888 19.911-56.888 45.511 0 91.022 11.377 162.133 73.955 5.69 5.689 14.223 5.689 17.067 0C469.333 517.69 608.711 366.933 768 318.578c0 0 19.911-2.845 31.289 14.222 5.689 11.378 11.378 22.756-5.689 36.978z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Wl = [
  Fl
];
function Yl(e, t, n, s, o, r) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Wl, 6);
}
const Zn = /* @__PURE__ */ ye(Rl, [["render", Yl]]), jl = F("checklist"), Ul = /* @__PURE__ */ m("path", {
  d: "M159.289 500.622c62.578 0 125.155 17.067 221.867 102.4 8.533 5.69 19.91 5.69 25.6 0 48.355-54.044 238.933-261.689 455.11-329.955 0 0 28.445-5.69 42.667 19.91 8.534 17.067 19.911 34.134-5.689 54.045-22.755 17.067-264.533 179.2-440.888 440.89l-2.845 2.844c-11.378 8.533-68.267 51.2-119.467-14.223-56.888-71.11-85.333-139.377-196.266-196.266-2.845 0-2.845-2.845-5.69-5.69-11.377-11.377-54.044-73.955 25.6-73.955z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Kl = [
  Ul
];
function Xl(e, t, n, s, o, r) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Kl, 6);
}
const ql = /* @__PURE__ */ ye(jl, [["render", Xl]]), Zl = F("circle-close"), Gl = /* @__PURE__ */ m("path", {
  d: "M511.492 73.063a438.425 438.425 0 0 1 310.545 748.953 439.16 439.16 0 1 1-621.09-621.073A435.695 435.695 0 0 1 511.492 73.046m0-73.063C267.49.018 57.468 172.408 9.87 411.717-37.713 651.042 90.39 890.658 315.823 984.03c225.45 93.355 485.444 14.472 621.005-188.416 135.543-202.906 108.885-473.293-63.659-645.82A509.645 509.645 0 0 0 511.492.002zm-175.7 635.495 299.673-299.674c12.049-12.049 24.115-12.049 36.164 0l15.496 15.497c12.05 12.066 12.05 24.115 0 36.18L387.47 687.122c-12.066 12.05-24.115 12.05-36.181 0l-15.497-15.496c-12.049-12.066-12.049-24.115 0-36.182zm0-284.177 15.496-15.497c12.066-12.049 24.115-12.049 36.18 0l299.64 299.674c12.05 12.049 12.05 24.098 0 36.164l-15.496 15.496c-12.05 12.05-24.115 12.05-36.182 0L335.808 387.465c-12.049-12.05-12.049-24.098 0-36.164z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Jl = [
  Gl
];
function Ql(e, t, n, s, o, r) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Jl, 6);
}
const tn = /* @__PURE__ */ ye(Zl, [["render", Ql]]);
F("clock");
F("close-little");
const xl = F("close"), es = /* @__PURE__ */ m("path", {
  d: "M981.577 1024c-11.703 0-23.406-2.926-32.183-11.703L13.166 76.07c-14.629-17.555-14.629-46.812 0-64.366 17.554-14.629 46.811-14.629 64.365 0L1013.76 947.93c17.554 17.555 17.554 43.886 0 61.44-8.777 11.703-20.48 14.629-32.183 14.629zm-936.228 0c-11.703 0-23.406-2.926-32.183-11.703-17.555-17.554-17.555-43.886 0-61.44L949.394 14.63c17.555-17.555 43.886-17.555 61.44 0 17.555 17.554 17.555 43.885 0 61.44L74.606 1012.297C68.754 1021.074 57.05 1024 45.349 1024z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ts = [
  es
];
function ns(e, t, n, s, o, r) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1026 1024",
    role: "presentation"
  }, ts, 6);
}
const At = /* @__PURE__ */ ye(xl, [["render", ns]]), os = F("comment"), ls = /* @__PURE__ */ m("path", {
  d: "M760.415 876.089H259.793c-132.741 0-242.726-109.985-242.726-242.726V242.726C17.067 109.986 127.052 0 259.793 0h504.414c132.741 0 242.726 109.985 242.726 242.726v394.43c-3.792 132.74-109.985 238.933-246.518 238.933zM259.793 113.778c-72.06 0-128.949 56.889-128.949 128.948v394.43c0 72.059 56.89 128.948 128.949 128.948h504.414c68.267 0 128.949-56.89 128.949-128.948v-394.43c0-72.06-56.89-128.948-128.949-128.948H259.793zm56.888 887.466c-15.17 0-30.34-3.792-41.718-15.17-22.756-22.755-22.756-56.889 0-79.644l109.985-109.986c22.756-22.755 56.889-22.755 79.645 0s22.755 56.89 0 79.645L354.607 986.074c-7.585 7.585-22.755 15.17-37.926 15.17zm193.423-398.222c-45.511 0-91.023-22.755-117.57-56.889-18.964-26.548-15.171-60.681 7.585-79.644 26.548-18.963 60.681-15.17 79.644 7.585 15.17 18.963 45.511 18.963 56.889 0 18.963-22.755 56.889-30.34 79.644-7.585s30.341 56.889 7.585 79.644c-22.755 37.926-68.266 56.89-113.777 56.89z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ss = [
  ls
];
function as(e, t, n, s, o, r) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ss, 6);
}
const rs = /* @__PURE__ */ ye(os, [["render", as]]);
F("date");
const is = F("del"), us = /* @__PURE__ */ m("path", {
  d: "M668.444 1024H355.556c-142.223 0-256-113.778-256-256V170.667h824.888V768c0 142.222-113.777 256-256 256zM184.89 256v512c0 93.867 76.8 170.667 170.667 170.667h312.888c93.867 0 170.667-76.8 170.667-170.667V256H184.89zm753.778 0H85.333c-22.755 0-42.666-19.911-42.666-42.667s19.91-42.666 42.666-42.666h853.334c22.755 0 42.666 19.91 42.666 42.666S961.423 256 938.667 256zM625.777 85.333H398.223c-22.755 0-42.666-19.91-42.666-42.666S375.466 0 398.222 0h227.556c22.755 0 42.666 19.911 42.666 42.667s-19.91 42.666-42.666 42.666z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), cs = [
  us
];
function ds(e, t, n, s, o, r) {
  return u(), f("svg", {
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
const fs = F("down-arrow"), ps = /* @__PURE__ */ m("path", {
  d: "M128 349.867C93.867 332.8 34.133 341.333 8.533 384-8.533 418.133 0 477.867 42.667 503.467 179.2 588.8 315.733 665.6 443.733 750.933c42.667 25.6 93.867 25.6 136.534 0C716.8 665.6 853.333 588.8 981.333 503.467c42.667-25.6 51.2-76.8 25.6-119.467s-76.8-51.2-119.466-25.6C768 435.2 640 512 512 588.8 384 512 256 435.2 128 349.867",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ms = [
  ps
];
function hs(e, t, n, s, o, r) {
  return u(), f("svg", {
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
const gs = F("edit"), ys = /* @__PURE__ */ m("path", {
  d: "M285.479 992.97H108.606c-27.927 0-55.854-12.412-77.576-31.03C9.31 940.217 0 915.393 0 884.363l3.103-155.152c0-24.824 9.31-46.545 27.927-65.164L626.812 65.164c83.782-83.782 220.315-83.782 307.2 0 83.782 83.781 83.782 223.418 0 307.2l-605.09 601.988c-12.413 12.412-27.928 18.618-43.443 18.618zM781.964 93.09c-31.03 0-65.164 12.413-89.988 37.237L96.194 729.212 93.09 884.364c0 9.309 6.206 15.515 15.515 15.515h161.358l598.884-595.782c49.649-49.649 49.649-127.224 0-173.77l-3.103-3.103c-21.72-21.721-52.751-34.133-83.781-34.133zm-201.946 78.508 65.816-65.847L882.812 342.73l-65.846 65.784zM946.424 992.97H217.212c-24.824 0-46.545-21.722-46.545-46.546s21.72-46.545 46.545-46.545h729.212c24.824 0 46.546 21.721 46.546 46.545s-21.722 46.546-46.546 46.546z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), vs = [
  ys
];
function $s(e, t, n, s, o, r) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, vs, 6);
}
const bs = /* @__PURE__ */ ye(gs, [["render", $s]]);
F("eye");
const ws = F("fabulous"), ks = /* @__PURE__ */ m("path", {
  d: "M584.06 1024H318.577C144.118 1024 0 883.674 0 705.422s140.326-318.578 318.578-318.578v113.778c-113.778 0-204.8 91.022-204.8 204.8s91.022 204.8 204.8 204.8h265.481V1024zm56.888 0h-53.096c-208.593 0-379.26-170.667-379.26-383.052 0-83.437 26.549-163.081 75.852-231.348l3.793-3.793c15.17-22.755 30.34-60.681 45.511-121.363l7.585-34.133c7.586-18.963 15.17-41.718 18.963-68.267C386.844 22.756 470.281 0 519.586 0c117.57 0 178.251 106.193 178.251 212.385v7.585c0 7.586-3.793 18.963-3.793 37.926C876.09 257.896 1024 405.807 1024 587.852v53.096C1024 853.333 853.333 1024 640.948 1024zM519.585 113.778c-30.34 0-41.718 53.096-49.304 87.23-3.792 34.133-11.377 60.68-15.17 83.436l-7.585 34.134c-11.378 45.51-34.133 113.778-60.682 155.496l-7.585 3.793A269.274 269.274 0 0 0 322.37 644.74c0 147.91 121.363 269.274 269.274 269.274h53.097c147.91 0 269.274-121.363 269.274-269.274v-53.097c0-117.57-98.608-216.177-216.178-216.177h-56.889c-18.963-3.793-37.926-15.17-49.304-30.341-11.377-15.17-15.17-37.926-15.17-56.889 7.585-41.718 11.378-64.474 11.378-75.852v-3.792c-3.793 0-3.793-94.815-68.267-94.815z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Cs = [
  ks
];
function Ss(e, t, n, s, o, r) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1061 1024",
    role: "presentation"
  }, Cs, 6);
}
const Ts = /* @__PURE__ */ ye(ws, [["render", Ss]]), Ns = F("failure"), Ds = /* @__PURE__ */ m("path", {
  d: "M512 1024C229.831 1024 0 794.169 0 512S229.831 0 512 0s512 229.831 512 512-229.831 512-512 512zm0-955.733C266.24 68.267 68.267 266.24 68.267 512S266.24 955.733 512 955.733 955.733 757.76 955.733 512 757.76 68.267 512 68.267zm111.502 282.169c13.654-13.654 34.134-13.654 47.787 0 11.378 11.377 13.653 31.857 2.275 45.51l-2.275 2.276-111.502 111.502 111.502 111.503c13.653 13.653 13.653 34.133 0 47.786-13.653 13.654-34.133 13.654-47.787 0L512 557.511 400.498 669.013c-11.378 11.378-31.858 13.654-45.511 2.276l-2.276-2.276c-11.378-11.377-13.653-31.857-2.275-45.51l2.275-2.276 111.502-111.503-111.502-111.502c-13.653-13.653-13.653-34.133 0-47.786s34.133-13.654 47.787 0L512 461.938l111.502-111.502z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), _s = [
  Ds
];
function Is(e, t, n, s, o, r) {
  return u(), f("svg", {
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
const Bs = F("image-error"), Ms = /* @__PURE__ */ m("path", {
  d: "M696.43 465.25c40.61 0 73.53-32.72 73.53-73.09s-32.96-73.08-73.53-73.08-73.54 32.72-73.54 73.08 32.92 73.09 73.54 73.09zM535.74 650.62l-273.61-259.4a56.19 56.19 0 0 0-15.36 11.58l-114 119.63-6-222.77c-.73-26.82 20.84-49.41 47.67-50.14l201.77-5.44 47.34-50-250.43 6.75C119 202.33 76.33 247.17 77.78 301l7.32 271.4 4.5 166.78C91.06 793 136.05 835.47 190.2 834l176-4.75 12-.32 47.34-50 116.18-122.64z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ls = /* @__PURE__ */ m("path", {
  d: "m861.71 214.8-242.83-33.86-55.09 41.46L855 263a49.05 49.05 0 0 1 41.79 55.13l-54.33 389.59-120.87-159.05A59.86 59.86 0 0 0 638.06 537l-44 33.08 65.07 86.15L603.84 698l-79.57 60.1-54.92 41.48 34.17 4.76 270.73 37.76a97.55 97.55 0 0 0 109.88-79.6 22.37 22.37 0 0 0 .65-3.44l60.53-434.16c7.44-53.32-29.95-102.62-83.6-110.1z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1);
function Es(e, t, n, s, o, r) {
  return u(), f("svg", {
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
const Ps = /* @__PURE__ */ ye(Bs, [["render", Es]]), As = F("image"), zs = /* @__PURE__ */ m("path", {
  d: "M853.161 892.55H362.595l-209.433-.414a18.5 18.5 0 0 1-1.813-.092c-24.849-2.485-47.825-14.06-64.696-32.595-16.991-18.665-26.35-42.855-26.35-68.112V264.626c0-55.808 45.404-101.211 101.212-101.211H853.16c55.808 0 101.21 45.403 101.21 101.211v225.513c0 .275-.006.552-.018.826-.022.494-1.972 51.723 15.481 85.462 4.717 9.119 1.148 20.335-7.97 25.053-9.117 4.714-20.335 1.15-25.053-7.97-21.3-41.177-19.845-97.643-19.619-103.74V264.627c0-35.307-28.724-64.031-64.03-64.031H161.515c-35.308 0-64.032 28.724-64.032 64.031v526.711c0 32.755 24.321 59.958 56.718 63.62l208.431.412h490.53c35.306 0 64.03-28.725 64.03-64.032l-.382-93.677c-.105-1.75-1.587-19.548-19.55-42.5a9.548 9.548 0 0 1-.147-.19l-21.712-28.489-117.227-155.119c-.416-.55-38.995-50.852-86.272-45.534-38.335 4.315-75.955 45.164-108.79 118.132-17.615 39.141-34.65 68.269-52.082 89.046-17.607 20.986-35.68 33.52-55.251 38.317-43.423 10.638-81.05-18.995-120.887-50.373l-5.057-3.98c-46.555-36.578-68.75-28.224-158.33 59.602-7.33 7.188-19.1 7.071-26.289-.26-7.187-7.33-7.07-19.1.26-26.287 46.659-45.746 77.544-72.727 107.086-84.283 33.358-13.048 64.275-6.267 100.242 21.994l5.093 4.008c33.923 26.72 63.22 49.795 89.029 43.467 25.618-6.279 53.3-42.114 82.28-106.509 39.14-86.976 85.838-134.027 138.797-139.849 68.454-7.515 117.824 57.405 119.892 60.172l117.122 154.98 21.6 28.344c26.277 33.631 27.334 61.639 27.367 64.725l.001.128.384 94.06c.001 55.884-45.4 101.287-101.209 101.287z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Vs = /* @__PURE__ */ m("path", {
  d: "M312.328 446.968c-42.325 0-76.759-34.434-76.759-76.76s34.434-76.759 76.76-76.759 76.759 34.435 76.759 76.76-34.434 76.759-76.76 76.759zm0-116.34c-21.824 0-39.579 17.756-39.579 39.58s17.755 39.58 39.58 39.58 39.579-17.756 39.579-39.58-17.755-39.58-39.58-39.58z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1);
function Os(e, t, n, s, o, r) {
  return u(), f("svg", {
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
const Rs = F("joy-smile"), Fs = /* @__PURE__ */ m("path", {
  d: "M2185.74 479.429a117.992 117.992 0 1 0-162.829-170.852c-284.772 271.204-732.314 271.204-1017.087 0A118.05 118.05 0 0 0 842.996 479.43c375.98 358.045 966.705 358.045 1342.744 0",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ws = [
  Fs
];
function Ys(e, t, n, s, o, r) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 3072 1024",
    role: "presentation"
  }, Ws, 6);
}
const js = /* @__PURE__ */ ye(Rs, [["render", Ys]]), Us = F("left"), Ks = /* @__PURE__ */ m("path", {
  d: "M642.973 1005.542 321.912 587.098a123.278 123.278 0 0 1 0-150.17l321.06-418.443a47.182 47.182 0 0 1 74.83 57.422l-321.088 418.47a28.994 28.994 0 0 0 0 35.3l321.088 418.47a47.155 47.155 0 0 1-74.83 57.395",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Xs = [
  Ks
];
function qs(e, t, n, s, o, r) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Xs, 6);
}
const nn = /* @__PURE__ */ ye(Us, [["render", qs]]), Zs = F("link"), Gs = /* @__PURE__ */ m("path", {
  d: "M313.034 1004.045c-66.848 0-124.402-24.156-170.798-70.577l-40.854-40.829C54.96 846.218 28.966 783.097 30.83 714.411c3.702-66.85 31.56-131.808 79.819-180.12l137.4-137.373c14.86-14.861 40.855-14.861 55.69 0 14.86 14.861 16.725 38.99 0 55.69l-137.348 137.4a187.47 187.47 0 0 0-55.69 126.24c-1.864 46.422 14.835 89.115 46.396 120.675l40.855 40.855c31.56 31.56 74.253 48.286 120.674 46.421 46.421-1.838 92.843-22.291 126.24-55.69l137.4-137.4c14.862-14.86 40.856-14.86 55.69 0 14.862 14.862 14.862 40.856 0 55.69l-137.4 137.427c-48.285 48.259-113.27 76.117-180.118 79.82a5.645 5.645 0 0 0-7.405 0zm475.294-382.477c-11.133 0-18.563-3.702-27.832-12.997-14.86-14.861-14.86-40.855 0-55.69l115.082-115.108a187.47 187.47 0 0 0 55.716-126.267c1.838-46.395-14.861-89.114-46.421-120.674l-40.855-40.855c-64.985-64.959-176.364-61.257-246.915 9.294L478.266 278.108c-14.835 14.835-40.829 14.835-55.69 0-14.86-14.861-14.86-40.855 0-55.716l118.81-118.81C643.524 1.444 803.163-2.232 899.734 94.287l40.829 40.855c46.421 46.421 72.415 109.541 70.55 178.228-3.702 66.85-31.56 131.807-79.819 180.093L816.186 608.571c-7.43 7.43-18.563 11.133-27.858 12.997zm-332.327-1.864c-11.16 0-18.564-3.702-27.832-12.997-14.888-14.835-14.888-40.829 0-55.69l148.506-148.532c14.861-14.862 40.855-14.862 55.69 0 14.861 14.86 14.861 40.854 0 55.69L483.832 606.706c-7.404 7.43-18.563 11.159-27.831 12.997z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Js = [
  Gs
];
function Qs(e, t, n, s, o, r) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Js, 6);
}
const xs = /* @__PURE__ */ ye(Zs, [["render", Qs]]), ea = F("loading"), ta = /* @__PURE__ */ m("path", {
  d: "M784 902.4c9.6 19.2 6.4 41.6-12.8 54.4-19.2 9.6-41.6 3.2-51.2-12.8-9.6-19.2-6.4-41.6 12.8-54.4 16-12.8 38.4-8 51.2 12.8zM550.4 984c0 22.4-16 38.4-38.4 38.4s-38.4-16-38.4-38.4v-24c0-22.4 19.2-38.4 41.6-38.4 19.2 0 35.2 16 38.4 38.4v25.6h-3.2zm-240-43.2c-9.6 19.2-35.2 25.6-54.4 16-19.2-9.6-25.6-35.2-16-51.2l28.8-51.2c9.6-19.2 35.2-25.6 54.4-16s25.6 35.2 12.8 54.4l-25.6 48zM121.6 784c-19.2 9.6-41.6 3.2-54.4-16-9.6-19.2-6.4-41.6 12.8-54.4l76.8-44.8c19.2-9.6 41.6-3.2 54.4 16 9.6 19.2 3.2 41.6-16 54.4L121.6 784zM38.4 552C16 552 0 536 0 513.6s16-38.4 38.4-38.4H160c22.4 0 38.4 19.2 38.4 38.4 0 22.4-16 38.4-38.4 38.4H38.4zm44.8-241.6c-19.2-9.6-25.6-35.2-16-51.2 9.6-19.2 35.2-25.6 54.4-16L256 320c19.2 9.6 25.6 35.2 16 54.4s-35.2 25.6-54.4 16l-134.4-80zm160-185.6 92.8 160c9.6 19.2 35.2 25.6 54.4 12.8s25.6-35.2 12.8-54.4l-92.8-160C297.6 64 275.2 60.8 256 70.4c-16 12.8-22.4 33.6-12.8 54.4zM473.6 40c0-22.4 16-38.4 38.4-38.4s38.4 19.2 38.4 38.4v184c0 22.4-19.2 38.4-38.4 38.4-22.4 0-38.4-19.2-38.4-38.4V40zm240 43.2c9.6-19.2 35.2-25.6 54.4-16 19.2 9.6 25.6 35.2 16 51.2l-92.8 160c-9.6 19.2-35.2 25.6-54.4 16-19.2-9.6-25.6-35.2-12.8-54.4l89.6-156.8zm188.8 160-160 92.8c-19.2 9.6-25.6 35.2-16 54.4 12.8 19.2 35.2 25.6 54.4 12.8l160-92.8c19.2-9.6 25.6-35.2 12.8-54.4-9.6-16-32-25.6-51.2-12.8zM985.6 472c22.4 0 38.4 16 38.4 38.4s-16 38.4-38.4 38.4H800c-22.4 0-38.4-19.2-38.4-38.4 0-22.4 19.2-38.4 38.4-38.4h185.6z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), na = [
  ta
];
function oa(e, t, n, s, o, r) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, na, 6);
}
const at = /* @__PURE__ */ ye(ea, [["render", oa]]), la = F("loading1"), sa = /* @__PURE__ */ m("path", {
  d: "M520.665 64.564a29.244 29.244 0 0 0-7.071-.894c-16.211 0-29.35 13.14-29.35 29.35 0 15.83 12.538 28.696 28.223 29.293v.073c.375 0 .751-.014 1.127-.014 216.493 0 389.629 173.942 389.629 390.433 0 216.496-173.136 388.827-389.63 388.827s-389.63-172.333-389.63-388.829c0-.27.01-.536.01-.804h-.01c0-16.209-13.141-29.35-29.35-29.35s-29.35 13.139-29.35 29.35c0 .055.007.11.007.164-.001.214-.007.425-.007.64 0 247.609 200.722 448.331 448.33 448.331 247.607 0 448.33-200.722 448.33-448.33-.002-245.242-196.917-444.456-441.258-448.24z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), aa = [
  sa
];
function ra(e, t, n, s, o, r) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, aa, 6);
}
const ia = /* @__PURE__ */ ye(la, [["render", ra]]), ua = F("location"), ca = /* @__PURE__ */ m("path", {
  d: "M512 971.487C259.938 971.487 52.513 764.062 52.513 512S259.938 52.513 512 52.513 971.487 259.938 971.487 512 764.062 971.487 512 971.487zm0-840.205c-210.051 0-380.718 170.667-380.718 380.718S301.95 892.718 512 892.718 892.718 722.05 892.718 512 722.05 131.282 512 131.282zm0 577.641c-107.651 0-196.923-89.272-196.923-196.923S404.349 315.077 512 315.077 708.923 404.349 708.923 512 619.651 708.923 512 708.923zm0-315.077c-65.641 0-118.154 52.513-118.154 118.154S446.36 630.154 512 630.154 630.154 577.64 630.154 512 577.64 393.846 512 393.846zm0-210.051c-21.005 0-39.385-18.38-39.385-39.385V39.385C472.615 18.379 490.995 0 512 0s39.385 18.38 39.385 39.385V144.41c0 21.005-18.38 39.385-39.385 39.385zM512 1024c-21.005 0-39.385-18.38-39.385-39.385V879.59c0-21.005 18.38-39.385 39.385-39.385s39.385 18.38 39.385 39.385v105.025c0 21.006-18.38 39.385-39.385 39.385zm472.615-472.615H879.59c-21.005 0-39.385-18.38-39.385-39.385s18.38-39.385 39.385-39.385h105.025c21.006 0 39.385 18.38 39.385 39.385s-18.38 39.385-39.385 39.385zm-840.205 0H39.385C18.379 551.385 0 533.005 0 512s18.38-39.385 39.385-39.385H144.41c21.005 0 39.385 18.38 39.385 39.385s-18.38 39.385-39.385 39.385z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), da = [
  ca
];
function fa(e, t, n, s, o, r) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, da, 6);
}
const pa = /* @__PURE__ */ ye(ua, [["render", fa]]), ma = F("location2"), ha = /* @__PURE__ */ m("path", {
  d: "m530.286 1005.714-25.6-10.971c-36.572-14.629-58.515-25.6-73.143-36.572-102.4-84.114-164.572-135.314-193.829-171.885-43.885-51.2-76.8-91.429-106.057-142.629C95.086 577.83 76.8 504.686 76.8 431.543c0-117.029 43.886-226.743 128-307.2C285.257 43.886 394.971 0 512 0s226.743 43.886 310.857 128c84.114 80.457 128 190.171 128 307.2 0 73.143-18.286 146.286-54.857 212.114-25.6 43.886-58.514 91.429-106.057 142.629-29.257 32.914-87.772 84.114-197.486 171.886 0 0-7.314 7.314-18.286 10.971l-43.885 32.914zM497.37 874.057s3.658 3.657 14.629 7.314c3.657-3.657 7.314-3.657 10.971-7.314C621.714 797.257 683.886 742.4 705.83 716.8c40.228-47.543 69.485-87.771 91.428-128 25.6-47.543 40.229-102.4 40.229-157.257 0-87.772-32.915-168.229-95.086-230.4-58.514-58.514-142.629-91.429-230.4-91.429S340.114 142.63 277.943 204.8c-62.172 62.171-95.086 142.629-95.086 230.4 0 54.857 14.629 109.714 40.229 157.257 25.6 43.886 54.857 80.457 95.085 124.343 25.6 29.257 84.115 80.457 179.2 157.257zm18.286-248.686c-102.4 0-182.857-80.457-182.857-182.857s80.457-182.857 182.857-182.857 182.857 80.457 182.857 182.857-80.457 182.857-182.857 182.857zm0-256c-40.228 0-73.143 32.915-73.143 73.143s32.915 73.143 73.143 73.143 73.143-32.914 73.143-73.143-32.914-73.143-73.143-73.143z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ga = [
  ha
];
function ya(e, t, n, s, o, r) {
  return u(), f("svg", {
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
const $a = F("mask-close"), ba = /* @__PURE__ */ m("path", {
  d: "M512 14.897C238.594 14.897 14.897 238.594 14.897 512S238.594 1009.103 512 1009.103 1009.103 785.406 1009.103 512 785.406 14.897 512 14.897zm207.126 646.234c16.57 16.57 16.57 41.425 0 57.995s-41.425 16.57-57.995 0L512 569.996l-149.13 149.13c-16.57 16.57-41.426 16.57-57.996 0s-16.57-41.425 0-57.995L454.004 512l-149.13-149.13c-16.57-16.57-16.57-41.426 0-57.996s41.425-16.57 57.995 0L512 454.004l149.13-149.13c16.57-16.57 41.426-16.57 57.996 0s16.57 41.425 0 57.995L569.996 512l149.13 149.13z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), wa = [
  ba
];
function ka(e, t, n, s, o, r) {
  return u(), f("svg", {
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
const Sa = F("minus"), Ta = /* @__PURE__ */ m("path", {
  d: "M299.52 460.8h409.6c28.16 0 51.2 23.04 51.2 51.2s-23.04 51.2-51.2 51.2h-409.6c-28.16 0-51.2-23.04-51.2-51.2s23.04-51.2 51.2-51.2z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Na = [
  Ta
];
function Da(e, t, n, s, o, r) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Na, 6);
}
const _a = /* @__PURE__ */ ye(Sa, [["render", Da]]);
F("more-s");
const Ia = F("more-x"), Ba = /* @__PURE__ */ m("path", {
  d: "M937.115 428.218c-43.442 0-80.679 37.237-80.679 80.679s37.237 80.679 80.68 80.679c43.442 0 80.678-37.237 80.678-80.679s-34.133-80.679-80.679-80.679m-428.218-52.751c-74.473 0-133.43 58.957-133.43 133.43s58.957 133.43 133.43 133.43 133.43-58.957 133.43-133.43-58.957-133.43-133.43-133.43M83.782 428.218c-43.443 0-80.679 37.237-80.679 80.679s34.133 80.679 80.679 80.679 80.679-37.237 80.679-80.679-37.237-80.679-80.68-80.679",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ma = [
  Ba
];
function La(e, t, n, s, o, r) {
  return u(), f("svg", {
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
const Pa = F("notice"), Aa = /* @__PURE__ */ m("path", {
  d: "M940.873 819.2h-85.334V430.933c0-192-153.6-345.6-341.333-345.6s-341.333 153.6-341.333 345.6V819.2H87.539V430.933C87.54 192 279.54 0 514.206 0s426.667 192 426.667 430.933V819.2zM514.633 1024c-68.267 0-132.267-29.867-174.934-85.333-17.066-17.067-12.8-42.667 4.267-59.734 17.067-12.8 46.933-12.8 59.733 8.534 29.867 34.133 68.267 51.2 110.934 51.2s81.066-17.067 106.666-51.2c12.8-17.067 42.667-21.334 59.734-8.534 17.066 12.8 21.333 42.667 8.533 59.734C646.899 994.133 582.899 1024 514.633 1024zm469.333-162.133h-12.8c-294.4-89.6-618.667-89.6-913.067 0-21.333 4.266-46.933-8.534-55.466-29.867-8.534-21.333 4.266-46.933 29.866-51.2 311.467-93.867 652.8-89.6 964.267 0 21.333 8.533 34.133 29.867 29.867 51.2-8.534 21.333-25.6 29.867-42.667 29.867z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), za = [
  Aa
];
function Va(e, t, n, s, o, r) {
  return u(), f("svg", {
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
const Ha = F("photograph"), Ra = /* @__PURE__ */ m("path", {
  d: "M570.514 789.943c-119.954 0-219.428-99.474-219.428-219.429s99.474-219.428 219.428-219.428 219.429 99.474 219.429 219.428-99.474 219.429-219.429 219.429zm0-351.086c-73.143 0-131.657 58.514-131.657 131.657s58.514 131.657 131.657 131.657 131.657-58.514 131.657-131.657-58.514-131.657-131.657-131.657zM877.714 1024h-614.4C117.03 1024 0 906.971 0 760.686V380.343c0-146.286 117.029-263.314 263.314-263.314h32.183c0-2.926 2.926-8.778 2.926-11.703C315.977 43.886 374.49 0 438.857 0h263.314c70.218 0 128.732 49.737 143.36 117.029h32.183c146.286 0 263.315 117.028 263.315 263.314v380.343C1141.029 906.97 1024 1024 877.714 1024zm-614.4-819.2c-96.548 0-175.543 78.994-175.543 175.543v380.343c0 96.548 78.995 175.543 175.543 175.543h614.4c96.549 0 175.543-78.995 175.543-175.543V380.343c0-96.549-78.994-175.543-175.543-175.543H819.2c-32.183 0-58.514-26.331-58.514-58.514S734.354 87.77 702.17 87.77H438.857c-26.331 0-49.737 17.555-55.588 40.96-2.926 5.852-2.926 11.703-2.926 17.555 0 32.183-26.332 58.514-58.514 58.514h-58.515zm-87.771 160.914a73.143 73.143 0 1 0 146.286 0 73.143 73.143 0 1 0-146.286 0Z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Fa = [
  Ra
];
function Wa(e, t, n, s, o, r) {
  return u(), f("svg", {
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
const ja = F("plus"), Ua = /* @__PURE__ */ m("path", {
  d: "M345.6 460.8h409.6q51.2 0 51.2 51.2t-51.2 51.2H345.6q-51.2 0-51.2-51.2t51.2-51.2zM550.4 256q51.2 0 51.2 51.2v409.6q0 51.2-51.2 51.2t-51.2-51.2V307.2q0-51.2 51.2-51.2z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ka = [
  Ua
];
function Xa(e, t, n, s, o, r) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ka, 6);
}
const qa = /* @__PURE__ */ ye(ja, [["render", Xa]]);
F("poweroff-circle-fill");
const Za = F("rect-down"), Ga = /* @__PURE__ */ m("path", {
  d: "M515.072 778.24c-14.336 0-28.672-5.632-39.936-16.384L69.12 356.864c-22.016-22.016-22.016-57.856 0-79.872s57.856-22.016 79.872 0L515.584 642.56 880.64 275.968c22.016-22.016 57.856-22.016 79.872 0s22.016 57.856 0 79.872L555.008 762.368c-10.752 10.752-25.6 15.872-39.936 15.872z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ja = [
  Ga
];
function Qa(e, t, n, s, o, r) {
  return u(), f("svg", {
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
const er = F("rect-up"), tr = /* @__PURE__ */ m("path", {
  d: "M920.576 778.24c-14.336 0-28.672-5.632-39.936-16.384L515.072 395.264 148.48 760.832c-22.016 22.016-57.856 22.016-79.872 0s-22.016-57.856 0-79.872l406.528-405.504c22.016-22.016 57.856-22.016 79.872 0l405.504 406.528c22.016 22.016 22.016 57.856 0 79.872-11.264 11.264-25.6 16.384-39.936 16.384z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), nr = [
  tr
];
function or(e, t, n, s, o, r) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, nr, 6);
}
const lr = /* @__PURE__ */ ye(er, [["render", or]]);
F("refresh");
const sr = F("refresh2"), ar = /* @__PURE__ */ m("path", {
  d: "M771.938 315.077h199.55L958.358 469.99 758.81 364.964c-13.128-7.877-18.38-23.63-10.502-36.759 2.625-7.877 13.128-13.128 23.63-13.128zm-535.63 393.846H44.636L57.764 554.01l191.672 105.026c13.128 7.877 18.38 23.63 10.502 36.759-5.25 7.877-15.753 13.128-23.63 13.128zM509.374 1024C257.313 1024 44.636 845.456 5.251 596.02 0 575.016 15.754 556.637 36.76 551.386c21.005-2.626 42.01 10.502 44.636 31.507 34.133 210.052 215.302 362.339 427.98 362.339 191.671 0 362.338-128.657 417.476-312.452 5.252-21.005 28.882-34.133 49.887-26.256 21.006 5.251 34.134 28.882 26.257 49.887C937.354 871.713 735.179 1024 509.375 1024zm467.364-551.385c-18.379 0-36.759-13.128-39.384-34.133C903.22 231.056 722.05 78.77 509.374 78.77c-191.671 0-362.338 128.657-414.85 312.452-5.252 21.005-28.883 34.133-49.888 26.256-21.005-5.251-34.133-28.882-26.257-49.887C81.395 152.287 283.57 0 509.374 0c252.062 0 464.739 178.544 504.123 427.98 2.626 21.005-10.502 42.01-31.507 44.635h-5.252z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), rr = [
  ar
];
function ir(e, t, n, s, o, r) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, rr, 6);
}
const ur = /* @__PURE__ */ ye(sr, [["render", ir]]), cr = F("retweet"), dr = /* @__PURE__ */ m("path", {
  d: "M136 552h63.6c4.4 0 8-3.6 8-8V288.7h528.6v72.6c0 1.9.6 3.7 1.8 5.2 2.9 3.6 8.1 4.3 11.7 1.4L893 255.4c4.3-5 3.6-10.3 0-13.2L749.7 129.8c-1.5-1.2-3.3-1.8-5.2-1.8-4.6 0-8.4 3.8-8.4 8.4V209H199.7c-39.5 0-71.7 32.2-71.7 71.8V544c0 4.4 3.6 8 8 8zm752-80h-63.6c-4.4 0-8 3.6-8 8v255.3H287.8v-72.6c0-1.9-.6-3.7-1.8-5.2-2.9-3.6-8.1-4.3-11.7-1.4L131 768.6c-4.3 5-3.6 10.3 0 13.2l143.3 112.4c1.5 1.2 3.3 1.8 5.2 1.8 4.6 0 8.4-3.8 8.4-8.4V815h536.6c39.5 0 71.7-32.2 71.7-71.8V480c-.2-4.4-3.8-8-8.2-8z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), fr = [
  dr
];
function pr(e, t, n, s, o, r) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, fr, 6);
}
const mr = /* @__PURE__ */ ye(cr, [["render", pr]]), hr = F("right"), gr = /* @__PURE__ */ m("path", {
  d: "M381.262 1005.566c-16.132 21.51-45.708 24.198-67.217 8.066-21.51-16.132-24.198-45.708-8.066-67.217C413.526 806.604 518.384 666.792 625.932 529.67c8.066-10.755 8.066-24.198 0-34.953C518.384 354.906 413.526 215.094 305.979 77.972c-16.132-21.51-10.755-51.085 8.066-67.217C335.555-5.377 365.13 0 381.262 18.82c107.547 142.5 212.405 282.311 319.953 419.434 34.952 43.019 34.952 104.858 0 150.566-107.548 139.811-212.406 279.622-319.953 416.745",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), yr = [
  gr
];
function vr(e, t, n, s, o, r) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, yr, 6);
}
const on = /* @__PURE__ */ ye(hr, [["render", vr]]);
F("s-follow");
F("scan");
F("scan2");
F("screen-little");
F("search");
F("search2");
const $r = F("service"), br = /* @__PURE__ */ m("path", {
  d: "M1024 657.723H905.846v-126.03c0-228.431-177.23-413.54-393.846-413.54s-393.846 185.109-393.846 413.54v126.03H0v-126.03C0 236.307 228.43 0 512 0s512 236.308 512 531.692v126.031zM196.923 866.462C86.646 866.462 0 779.815 0 669.538s86.646-196.923 196.923-196.923 196.923 86.647 196.923 196.923S307.2 866.462 196.923 866.462zm0-275.693c-43.323 0-78.77 35.446-78.77 78.77s35.447 78.769 78.77 78.769 78.77-35.446 78.77-78.77-35.447-78.769-78.77-78.769zm630.154 275.693c-110.277 0-196.923-86.647-196.923-196.924S716.8 472.615 827.077 472.615 1024 559.262 1024 669.538s-86.646 196.924-196.923 196.924zm0-275.693c-43.323 0-78.77 35.446-78.77 78.77s35.447 78.769 78.77 78.769 78.77-35.446 78.77-78.77-35.447-78.769-78.77-78.769zm-149.662 429.293c-23.63 0-47.261-15.754-55.138-43.324-7.877-31.507 7.877-63.015 39.385-74.83 102.4-31.508 189.046-102.4 236.307-196.923 15.754-27.57 51.2-39.385 78.77-23.631s39.384 51.2 23.63 78.77c-63.015 122.091-177.23 216.614-307.2 256-3.938 3.938-11.815 3.938-15.754 3.938z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), wr = [
  br
];
function kr(e, t, n, s, o, r) {
  return u(), f("svg", {
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
const Sr = F("star-fill-n"), Tr = /* @__PURE__ */ m("path", {
  d: "M1047.135 361.244 722.87 312.89 577.802 22.756c-2.844-8.534-11.378-14.223-19.911-17.067-19.911-8.533-45.511-2.845-54.045 17.067L358.78 312.889 34.513 358.4c-8.533 0-17.067 5.689-22.755 11.378-17.067 17.066-14.223 42.666 0 56.889l233.244 227.555-54.044 321.422c-2.845 8.534 0 17.067 2.844 25.6 11.378 19.912 34.133 28.445 54.044 17.067L537.98 867.556l290.133 150.755c8.533 2.845 17.067 5.689 25.6 2.845 22.756-2.845 36.978-25.6 34.133-45.512l-54.044-321.422 233.244-227.555c5.69-5.69 11.378-14.223 11.378-22.756 5.69-19.911-8.533-39.822-31.289-42.667z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Nr = [
  Tr
];
function Dr(e, t, n, s, o, r) {
  return u(), f("svg", {
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
const _r = F("success"), Ir = /* @__PURE__ */ m("path", {
  d: "M762.311 391.396C655.36 466.489 566.613 552.96 491.52 659.91c-20.48 27.307-61.44 27.307-79.644-2.275-34.134-52.338-72.818-91.023-125.156-125.156-25.031-15.929-9.102-54.613 20.48-50.062 56.889 11.378 100.124 34.133 143.36 72.818 77.369-93.298 175.218-166.116 286.72-213.903 27.307-9.102 50.062 31.858 25.031 50.063M512 1024C229.831 1024 0 794.169 0 512S229.831 0 512 0s512 229.831 512 512-229.831 512-512 512zm0-955.733C266.24 68.267 68.267 266.24 68.267 512S266.24 955.733 512 955.733 955.733 757.76 955.733 512 757.76 68.267 512 68.267z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Br = [
  Ir
];
function Mr(e, t, n, s, o, r) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Br, 6);
}
const Lr = /* @__PURE__ */ ye(_r, [["render", Mr]]), Er = F("tips"), Pr = /* @__PURE__ */ m("path", {
  d: "M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512zm0-938.667c-234.667 0-426.667 192-426.667 426.667s192 426.667 426.667 426.667 426.667-192 426.667-426.667S746.667 85.333 512 85.333zM448 320a64 64 0 1 0 128 0 64 64 0 1 0-128 0Zm-17.067 149.333h51.2c12.8 0 21.334 8.534 21.334 21.334v8.533c0 12.8-8.534 21.333-21.334 21.333h-51.2c-12.8 0-25.6-12.8-25.6-25.6s12.8-25.6 25.6-25.6zm51.2 0H524.8c25.6 0 51.2 21.334 51.2 51.2v8.534L537.6 755.2c0 8.533-8.533 17.067-21.333 17.067H473.6c-25.6 0-51.2-21.334-51.2-51.2v-8.534L460.8 486.4c4.267-8.533 12.8-17.067 21.333-17.067zm8.534 251.734h76.8c12.8 0 25.6 12.8 25.6 25.6s-12.8 25.6-25.6 25.6h-76.8c-12.8 0-21.334-8.534-21.334-21.334v-12.8c4.267-12.8 12.8-17.066 21.334-17.066z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ar = [
  Pr
];
function zr(e, t, n, s, o, r) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ar, 6);
}
const xn = /* @__PURE__ */ ye(Er, [["render", zr]]), Vr = F("top"), Or = /* @__PURE__ */ m("path", {
  d: "M136.533 540.444c-11.377 0-25.6-5.688-34.133-17.066-14.222-19.911-11.378-45.511 8.533-59.734L477.867 179.2c19.91-14.222 45.51-11.378 59.733 8.533s11.378 45.511-8.533 59.734L162.133 531.91c-5.689 5.689-14.222 8.533-25.6 8.533zm745.245 0c-8.534 0-17.067-2.844-25.6-8.533L489.244 247.467c-19.91-14.223-22.755-42.667-8.533-59.734 14.222-19.91 42.667-22.755 59.733-8.533l366.934 284.444c19.91 14.223 22.755 42.667 8.533 59.734-8.533 11.378-19.911 17.066-34.133 17.066zM512 1024c-22.756 0-42.667-19.911-42.667-42.667v-768c0-22.755 19.911-42.666 42.667-42.666s42.667 19.91 42.667 42.666v768c0 22.756-19.911 42.667-42.667 42.667zM884.622 85.333h-742.4c-22.755 0-42.666-19.91-42.666-42.666S119.466 0 142.222 0h742.4c22.756 0 42.667 19.911 42.667 42.667s-19.911 42.666-42.667 42.666z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Hr = [
  Or
];
function Rr(e, t, n, s, o, r) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Hr, 6);
}
const Fr = /* @__PURE__ */ ye(Vr, [["render", Rr]]), Wr = F("triangle-down"), Yr = /* @__PURE__ */ m("path", {
  d: "m573.056 752 308.8-404.608A76.8 76.8 0 0 0 820.736 224H203.232a76.8 76.8 0 0 0-61.056 123.392L450.976 752a76.8 76.8 0 0 0 122.08 0z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), jr = [
  Yr
];
function Ur(e, t, n, s, o, r) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, jr, 6);
}
const Kr = /* @__PURE__ */ ye(Wr, [["render", Ur]]), Xr = F("triangle-up"), qr = /* @__PURE__ */ m("path", {
  d: "m573.056 272 308.8 404.608A76.8 76.8 0 0 1 820.736 800H203.232a76.8 76.8 0 0 1-61.056-123.392L450.976 272a76.8 76.8 0 0 1 122.08 0z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Zr = [
  qr
];
function Gr(e, t, n, s, o, r) {
  return u(), f("svg", {
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
    const n = e, s = t, o = (a) => {
      !n.loading && !n.disabled && s("click", a);
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
    }), l = D(() => {
      let a = {};
      return n.color && (a = {
        color: n.plain ? n.color : "#fff",
        background: n.plain ? "#fff" : `border-box ${n.color}`
      }, n.color.includes("gradient") ? a.borderColor = "transparent" : a.borderColor = n.color), a;
    });
    return (a, i) => (u(), f("view", {
      class: L(r.value),
      style: A(l.value),
      onClick: o
    }, [
      m("view", Qr, [
        a.loading ? (u(), ee(Fe(at), {
          key: 0,
          class: "nut-icon-loading"
        })) : N("", !0),
        a.$slots.icon && !a.loading ? I(a.$slots, "icon", { key: 1 }) : N("", !0),
        a.$slots.default ? (u(), f("view", {
          key: 2,
          class: L({ "nut-button__text": a.$slots.icon || a.loading })
        }, [
          I(a.$slots, "default")
        ], 2)) : N("", !0)
      ])
    ], 6));
  }
}), Kt = (e) => {
  const t = ce([]), n = ce([]);
  return {
    children: t,
    linkChildren: (o) => {
      Le(e, Z({
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
}, ln = (e) => {
  const t = Me(e, null);
  if (t) {
    const n = Ye(), { link: s, unlink: o } = t;
    s(n), Xe(() => {
      o(n);
    });
  }
  return { parent: t };
}, je = (e) => {
  const t = e;
  return t.install = (n) => {
    t.name && n.component(t.name, t);
  }, t;
};
je(qe);
const xr = (e) => e.replace(/-./g, (t) => t[1].toUpperCase());
function Y(e) {
  return {
    componentName: "nut-" + e,
    create: function(n) {
      return n.name = "Nut" + xr("-" + e), n.install = (s) => {
        s.component(n.name, n);
      }, Pe(n);
    }
  };
}
const ft = (e, t) => e ? be(e, t) : "", sn = (e, t) => {
  let n = document.body;
  const s = e.teleport || "body";
  s != "body" && (rl(s) ? n = document.querySelector(s) : n = e.teleport);
  const o = document.createElement("view"), r = t.name ? t.name + "-" : "", l = e.id || (/* @__PURE__ */ new Date()).getTime();
  o.id = r + l;
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
function an() {
  return Ye().proxy.$router || null;
}
const Be = (e) => {
  if (e !== void 0)
    return isNaN(Number(e)) ? String(e) : `${e}px`;
}, { componentName: ei, create: ti } = Y("cell"), ni = ti({
  components: { Right: on },
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
    }), s = an(), o = D(() => ({
      borderRadius: Be(e.roundRadius)
    })), r = D(() => ({
      textAlign: e.descTextAlign
    }));
    return {
      handleClick: (a) => {
        t("click", a), e.to && s ? s[e.replace ? "replace" : "push"](e.to) : e.url && (e.replace ? location.replace(e.url) : location.href = e.url);
      },
      classes: n,
      baseStyle: o,
      descStyle: r
    };
  }
}), q = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, oi = {
  key: 0,
  class: "nut-cell__icon"
}, li = {
  key: 1,
  class: "nut-cell__title"
}, si = { class: "title" }, ai = { class: "nut-cell__title-desc" };
function ri(e, t, n, s, o, r) {
  const l = W("Right");
  return u(), f("view", {
    class: L(e.classes),
    style: A(e.baseStyle),
    onClick: t[0] || (t[0] = (...a) => e.handleClick && e.handleClick(...a))
  }, [
    I(e.$slots, "default", {}, () => [
      e.$slots.icon ? (u(), f("view", oi, [
        I(e.$slots, "icon")
      ])) : N("", !0),
      e.title || e.subTitle || e.$slots.title ? (u(), f("view", li, [
        e.subTitle ? (u(), f(x, { key: 0 }, [
          I(e.$slots, "title", {}, () => [
            m("view", si, E(e.title), 1)
          ]),
          m("view", ai, E(e.subTitle), 1)
        ], 64)) : I(e.$slots, "title", { key: 1 }, () => [
          ge(E(e.title), 1)
        ])
      ])) : N("", !0),
      e.desc || e.$slots.desc ? (u(), f("view", {
        key: 2,
        class: L(["nut-cell__value", { "nut-cell__value--alone": !e.title && !e.subTitle && !e.$slots.title }]),
        style: A(e.descStyle)
      }, [
        I(e.$slots, "desc", {}, () => [
          ge(E(e.desc), 1)
        ])
      ], 6)) : N("", !0),
      I(e.$slots, "link", {}, () => [
        e.isLink || e.to ? (u(), ee(l, {
          key: 0,
          class: "nut-cell__link"
        })) : N("", !0)
      ])
    ])
  ], 6);
}
const eo = /* @__PURE__ */ q(ni, [["render", ri]]), { create: ii } = Y("cell-group"), ui = ii({
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
function mi(e, t, n, s, o, r) {
  return u(), f("view", ci, [
    e.$slots.title ? I(e.$slots, "title", { key: 0 }) : e.title ? (u(), f("view", di, E(e.title), 1)) : N("", !0),
    e.$slots.desc ? I(e.$slots, "desc", { key: 2 }) : e.desc ? (u(), f("view", fi, E(e.desc), 1)) : N("", !0),
    m("view", pi, [
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
    } catch (s) {
      console.warn("[NutUI] <useLockScroll>", s);
    }
}, () => {
  if (e() && mt)
    try {
      mt--, !mt && wn.classList.remove(Sn);
    } catch (s) {
      console.warn("[NutUI] <unlock>", s);
    }
}], { componentName: gi, create: yi } = Y("overlay"), vi = yi({
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
    const [n, s] = hi(() => e.lockScroll), o = D(() => ({
      [gi]: !0,
      [e.overlayClass]: !0
    })), r = D(() => Z({
      transitionDuration: `${e.duration}s`,
      zIndex: e.zIndex
    }, e.overlayStyle));
    return bt(() => {
      e.visible ? n() : s();
    }), { classes: o, style: r, onClick: (a) => {
      t("click", a), e.closeOnClickOverlay && t("update:visible", !1);
    } };
  }
});
function $i(e, t, n, s, o, r) {
  return u(), ee(Jt, { name: "overlay-fade" }, {
    default: ne(() => [
      Ce(m("view", {
        class: L(e.classes),
        style: A(e.style),
        onClick: t[0] || (t[0] = De((...l) => e.onClick && e.onClick(...l), ["stop"]))
      }, [
        I(e.$slots, "default")
      ], 6), [
        [Ne, e.visible]
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
}, { componentName: bi, create: wi } = Y("popup"), no = 2e3;
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
    const s = ce({
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
      zIndex: s.zIndex,
      transitionDuration: `${e.duration}s`
    }, e.style)), l = D(() => e.transition ? e.transition : `nut-popup-slide-${e.position}`), a = () => {
      n || (n = !0, e.zIndex !== no && (Tn = Number(e.zIndex)), t("update:visible", !0), s.zIndex = ++Tn, e.destroyOnClose && (s.showSlot = !0), t("open"));
    }, i = () => {
      n && (n = !1, t("update:visible", !1), t("close"), e.destroyOnClose && setTimeout(() => {
        s.showSlot = !1;
      }, +e.duration * 1e3));
    }, p = (v) => {
      t("clickPop", v);
    }, d = (v) => {
      v.stopPropagation(), t("clickCloseIcon", v), i();
    }, $ = (v) => {
      t("clickOverlay", v), e.closeOnClickOverlay && i();
    }, g = (v) => {
      t("opened", v);
    }, k = (v) => {
      t("closed", v);
    };
    return Q(
      () => e.visible,
      () => {
        e.visible && !n && a(), !e.visible && n && i();
      }
    ), bt(() => {
      s.closed = e.closeable;
    }), de(Z({}, he(s)), {
      popStyle: r,
      transitionName: l,
      classes: o,
      onClick: p,
      onClickCloseIcon: d,
      onClickOverlay: $,
      onOpened: g,
      onClosed: k
    });
  }
});
function Ci(e, t, n, s, o, r) {
  const l = W("nut-overlay"), a = W("Close");
  return u(), ee(Hn, {
    to: e.teleport,
    disabled: !e.teleportDisable
  }, [
    e.overlay ? (u(), ee(l, wt({
      key: 0,
      visible: e.visible,
      "close-on-click-overlay": e.closeOnClickOverlay,
      "z-index": e.zIndex,
      "lock-scroll": e.lockScroll,
      duration: e.duration,
      "overlay-class": e.overlayClass,
      "overlay-style": e.overlayStyle
    }, e.$attrs, { onClick: e.onClickOverlay }), null, 16, ["visible", "close-on-click-overlay", "z-index", "lock-scroll", "duration", "overlay-class", "overlay-style", "onClick"])) : N("", !0),
    oe(Jt, {
      name: e.transitionName,
      onAfterEnter: e.onOpened,
      onAfterLeave: e.onClosed
    }, {
      default: ne(() => [
        Ce(m("view", {
          class: L(e.classes),
          style: A(e.popStyle),
          onClick: t[1] || (t[1] = (...i) => e.onClick && e.onClick(...i))
        }, [
          e.showSlot ? I(e.$slots, "default", { key: 0 }) : N("", !0),
          e.closed ? (u(), f("view", {
            key: 1,
            class: L(["nut-popup__close-icon", "nut-popup__close-icon--" + e.closeIconPosition]),
            onClick: t[0] || (t[0] = (...i) => e.onClickCloseIcon && e.onClickCloseIcon(...i))
          }, [
            I(e.$slots, "close-icon", {}, () => [
              oe(a, { height: "12px" })
            ])
          ], 2)) : N("", !0)
        ], 6), [
          [Ne, e.visible]
        ])
      ]),
      _: 3
    }, 8, ["name", "onAfterEnter", "onAfterLeave"])
  ], 8, ["to", "disabled"]);
}
const Ee = /* @__PURE__ */ q(ki, [["render", Ci]]), Si = (e) => ({
  props: {
    theme: { type: String, default: "" },
    themeVars: { type: Object, default: {} },
    tag: { type: String, default: e }
  },
  setup(t, { slots: n }) {
    const s = (a) => {
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
        const d = s(p);
        i["--nut-address-region-tab-line"] = `linear-gradient(90deg, ${p} 0%, rgba(${d}, 0.15) 100%)`, i["--nut-tabs-horizontal-tab-line-color"] = `linear-gradient(90deg, ${p} 0%, rgba(${d}, 0.15) 100%)`, i["--nut-tabs-vertical-tab-line-color"] = `linear-gradient(180deg, ${p} 0%, rgba(${d}, 0.15) 100%)`;
      }
      return Object.keys(a).forEach((d) => {
        i[`--nut-${o(d)}`] = a[d];
      }), i;
    }, l = D(() => r(t.themeVars));
    return () => {
      var a;
      return be(
        t.tag,
        {
          class: `nut-theme-${t.theme}`,
          style: l.value
        },
        (a = n.default) == null ? void 0 : a.call(n)
      );
    };
  }
}), { create: Ti } = Y("config-provider"), Ni = Ti(Si("div")), { componentName: Di, create: _i } = Y("image"), Ii = _i({
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
    }), s = D(() => {
      const k = Di;
      return {
        [k]: !0,
        [`${k}-round`]: e.round
      };
    }), o = z(null), r = z(!1), l = z(null), a = () => {
      const k = {
        threshold: [0],
        rootMargin: "0px"
      };
      o.value = new IntersectionObserver((v) => {
        v.forEach((w) => {
          w.isIntersecting && (r.value = !0, o.value.disconnect());
        });
      }, k), l.value && o.value.observe(l.value);
    };
    ve(() => {
      e.lazyLoad && a();
    }), Qt(() => {
      o.value && o.value.disconnect();
    });
    const i = D(() => {
      let k = {};
      return e.width && (k.width = Be(e.width)), e.height && (k.height = Be(e.height)), e.radius !== void 0 && e.radius !== null && (k.overflow = "hidden", k.borderRadius = Be(e.radius)), k;
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
    }, $ = () => {
      n.isError = !0, n.loading = !1, t("error");
    }, g = (k) => {
      t("click", k);
    };
    return de(Z({}, he(n)), { imageClick: g, classes: s, styles: p, stylebox: i, error: $, load: d, show: r, imgRef: l });
  }
}), Bi = ["src", "date-src", "alt"], Mi = {
  key: 0,
  class: "nut-img-loading"
}, Li = {
  key: 1,
  class: "nut-img-error"
};
function Ei(e, t, n, s, o, r) {
  const l = W("Image"), a = W("ImageError");
  return u(), f("div", {
    class: L(e.classes),
    style: A(e.stylebox),
    onClick: t[2] || (t[2] = (...i) => e.imageClick && e.imageClick(...i))
  }, [
    m("img", {
      ref: "imgRef",
      class: "nut-img",
      src: e.lazyLoad ? e.show ? e.src : void 0 : e.src,
      "date-src": e.lazyLoad ? e.show ? void 0 : e.src : void 0,
      alt: e.alt,
      style: A(e.styles),
      onLoad: t[0] || (t[0] = (...i) => e.load && e.load(...i)),
      onError: t[1] || (t[1] = (...i) => e.error && e.error(...i))
    }, null, 44, Bi),
    e.loading ? (u(), f("div", Mi, [
      e.slotLoding ? N("", !0) : (u(), ee(l, {
        key: 0,
        width: "16px",
        height: "20px",
        name: "image"
      })),
      I(e.$slots, "loading")
    ])) : N("", !0),
    e.isError && !e.loading ? (u(), f("div", Li, [
      e.slotError ? N("", !0) : (u(), ee(a, {
        key: 0,
        width: "16px",
        height: "20px",
        name: "imageError"
      })),
      I(e.$slots, "error")
    ])) : N("", !0)
  ], 6);
}
const Pi = /* @__PURE__ */ q(Ii, [["render", Ei]]), { create: Ai } = Y("layout"), oo = Ai({});
je(oo);
const lo = Symbol("nut-layout"), Nn = "nut-col", so = /* @__PURE__ */ Pe({
  name: "NutCol",
  __name: "col",
  props: {
    span: { default: 24 },
    offset: { default: 0 }
  },
  setup(e) {
    const t = e, n = Me(lo), s = D(() => ({
      [Nn]: !0,
      [Nn + "-gutter"]: n,
      ["nut-col-" + t.span]: !0,
      ["nut-col-offset-" + t.offset]: !0
    })), o = D(() => ({
      paddingLeft: n / 2 + "px",
      paddingRight: n / 2 + "px"
    }));
    return (r, l) => (u(), f("view", {
      class: L(s.value),
      style: A(o.value)
    }, [
      I(r.$slots, "default")
    ], 6));
  }
});
je(so);
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
    Le(lo, t.gutter);
    const n = (o, r) => o ? r ? `nut-row-${o}-${r}` : "" : `nut-row-${r}`, s = D(() => [
      zi,
      n("", t.type),
      n("justify", t.justify),
      n("align", t.align),
      n("flex", t.flexWrap)
    ]);
    return (o, r) => (u(), f("view", {
      class: L(s.value)
    }, [
      I(o.$slots, "default")
    ], 2));
  }
});
je(ao);
const Vi = /scroll|auto|overlay/i, ro = window;
function Oi(e) {
  return e.tagName !== "HTML" && e.tagName !== "BODY" && e.nodeType === 1;
}
function Xt(e, t = ro) {
  let n = e;
  for (; n && n !== t && Oi(n); ) {
    const { overflowY: s } = window.getComputedStyle(n);
    if (Vi.test(s))
      return n;
    n = n.parentNode;
  }
  return t;
}
function io(e, t = ro) {
  const n = z();
  return ve(() => {
    e.value && (n.value = Xt(e.value, t));
  }), n;
}
function Hi(e) {
  return typeof window != "undefined" && e === window;
}
const We = (e) => {
  const t = Fe(e);
  if (Hi(t)) {
    const n = t.innerWidth, s = t.innerHeight;
    return {
      top: 0,
      left: 0,
      right: n,
      bottom: s,
      width: n,
      height: s
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
}, { create: Ri } = Y("sticky"), Fi = Ri({
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
    const n = z(), s = z(), o = ce({
      fixed: !1,
      height: 0,
      width: 0,
      transform: 0
    }), r = D(() => e.position === "top" ? Number(e.top) : Number(e.bottom)), l = D(() => o.fixed ? { height: `${o.height}px` } : {}), a = D(() => o.fixed ? {
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
      const d = We(n), $ = s.value, g = We($), k = We(p);
      o.height = d.height, o.width = d.width;
      const v = () => {
        let c = !1;
        if (e.position === "top")
          c = p ? r.value > d.top && k.bottom > 0 : r.value > d.top;
        else {
          const y = document.documentElement.clientHeight;
          c = p ? k.bottom > 0 && y - r.value - g.height > k.top : y - r.value < d.bottom;
        }
        return c;
      }, w = () => {
        if (p)
          if (e.position === "top") {
            const c = k.bottom - r.value - g.height;
            return c < 0 ? c : 0;
          } else {
            const c = document.documentElement.clientHeight, y = k.bottom - (c - r.value);
            return y < 0 ? y : 0;
          }
        return 0;
      };
      o.transform = w(), o.fixed = v();
    };
    return Q(
      () => o.fixed,
      (p) => {
        t("change", p);
      }
    ), ve(() => {
      i(), Xt(n.value).addEventListener("scroll", i, !0);
    }), Xe(() => {
      Xt(n.value).removeEventListener("scroll", i);
    }), { rootRef: n, rootStyle: l, stickyRef: s, stickyStyle: a };
  }
});
function Wi(e, t, n, s, o, r) {
  return u(), f("div", {
    ref: "rootRef",
    class: "nut-sticky",
    style: A(e.rootStyle)
  }, [
    m("div", {
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
    const t = e, n = lt(), s = D(() => {
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
    return (o, r) => (u(), f("view", {
      class: L(s.value)
    }, [
      o.direction === "horizontal" ? I(o.$slots, "default", { key: 0 }) : N("", !0)
    ], 2));
  }
});
je(co);
function Yi(e, t) {
  const n = [], s = (o) => {
    Array.isArray(o) && o.forEach((r) => {
      var l;
      if (xo(r)) {
        if (t) {
          if (r.type && r.type.name === t) {
            n.push(r);
            return;
          }
        } else
          n.push(r);
        (l = r.component) != null && l.subTree && s(r.component.subTree.children), r.children && s(r.children);
      }
    });
  };
  return s(e), n;
}
function ji(e, t, n) {
  const s = Yi(e.subTree.children, n);
  t.sort((o, r) => s.indexOf(o.vnode) - s.indexOf(r.vnode));
}
function Ui(e, t) {
  const n = Qo([]), s = Ye(), o = (a) => {
    a.proxy && (n.push($n(a)), ji(s, n, t));
  }, r = (a) => {
    n.splice(n.indexOf($n(a)), 1);
  }, l = Object.assign;
  return (a) => (Le(
    e,
    l(
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
const { componentName: Ki } = Y("grid"), fo = Symbol("grid"), Xi = {
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
    }), s = D(() => {
      const o = {};
      return e.gutter && (o.paddingLeft = Be(e.gutter)), o;
    });
    return () => {
      var o;
      return be(
        "view",
        {
          class: n.value,
          style: s.value
        },
        (o = t.default) == null ? void 0 : o.call(t)
      );
    };
  }
}, { create: Zi } = Y("grid"), Gi = Zi(qi);
function Ji(e) {
  const t = Me(e, null);
  if (t) {
    const n = Ye(), { add: s, remove: o, internalChildren: r } = t;
    s(n), Xe(() => o(n));
    const l = D(() => r.indexOf(n));
    return {
      parent: t,
      index: l
    };
  }
  return {
    parent: null,
    index: z(-1)
  };
}
const { create: Qi, componentName: Dn } = Y("grid-item"), xi = Qi({
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
    const s = n.index, o = n.parent.props, r = D(() => ({
      [Dn]: !0
    })), l = D(() => {
      const d = {
        flexBasis: `${100 / +o.columnNum}%`
      };
      return o.square ? d.paddingTop = `${100 / +o.columnNum}%` : o.gutter && (d.paddingRight = Be(o.gutter), s.value >= +o.columnNum && (d.marginTop = Be(o.gutter))), d;
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
    }), i = an();
    return {
      rootClass: r,
      rootStyle: l,
      contentClass: a,
      handleClick: (d) => {
        t("click", d), e.to && i ? i[e.replace ? "replace" : "push"](e.to) : e.url && (e.replace ? location.replace(e.url) : location.href = e.url);
      }
    };
  }
}), eu = { class: "nut-grid-item__text" };
function tu(e, t, n, s, o, r) {
  return u(), f("view", {
    class: L(e.rootClass),
    style: A(e.rootStyle),
    onClick: t[0] || (t[0] = (...l) => e.handleClick && e.handleClick(...l))
  }, [
    m("view", {
      class: L(e.contentClass)
    }, [
      I(e.$slots, "default"),
      m("view", eu, [
        e.text ? (u(), f(x, { key: 0 }, [
          ge(E(e.text), 1)
        ], 64)) : I(e.$slots, "text", { key: 1 })
      ])
    ], 2)
  ], 6);
}
const nu = /* @__PURE__ */ q(xi, [["render", tu]]), { create: ou, componentName: st } = Y("space"), lu = ou({
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
    const n = (d) => typeof d == "number" ? d + "px" : d, s = (d) => {
      const $ = {};
      if (!e.gutter)
        return $;
      const g = `${n(Array.isArray(e.gutter) ? e.gutter[0] : e.gutter)}`, k = `${n(Array.isArray(e.gutter) ? e.gutter[1] : e.gutter)}`;
      return d ? e.wrap ? { marginBottom: k } : {} : (e.direction === "horizontal" && ($.marginRight = g), (e.direction === "vertical" || e.wrap) && ($.marginBottom = k), $);
    }, o = (d = []) => {
      const $ = [];
      return d.forEach((g) => {
        Array.isArray(g) ? $.push(...g) : g.type === x ? $.push(...o(g.children)) : $.push(g);
      }), $.filter(
        (g) => {
          var k;
          return !(g && (g.type === el || g.type === x && ((k = g.children) == null ? void 0 : k.length) === 0 || g.type === tl && g.children.trim() === ""));
        }
      );
    }, { direction: r, wrap: l, fill: a, justify: i, align: p } = e;
    return () => {
      var g;
      const d = o((g = t.default) == null ? void 0 : g.call(t)), $ = () => d.map((k, v) => be(
        "div",
        {
          class: `${st}-item`,
          style: s(v === d.length - 1)
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
            l && `${st}-wrap`,
            a && `${st}-fill`
          ]
        },
        $()
      );
    };
  }
}), { componentName: su, create: au } = Y("navbar"), ru = au({
  components: { Left: nn },
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
    const { border: n, fixed: s, safeAreaInsetTop: o, placeholder: r } = he(e), l = z("auto"), a = z(), i = D(() => {
      const w = su;
      return {
        [w]: !0,
        [`${w}--border`]: n.value,
        [`${w}--fixed`]: s.value,
        [`${w}--safe-area-inset-top`]: o.value
      };
    }), p = D(() => s.value && r.value ? {
      height: l.value
    } : {}), d = () => {
      if (a.value) {
        const w = a.value.getBoundingClientRect();
        l.value = `${w.height}px`;
      }
    };
    return ve(() => {
      s.value && r.value && Se(() => {
        d();
      });
    }), {
      navbarRef: a,
      rootStyle: p,
      classes: i,
      navHeight: l,
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
function du(e, t, n, s, o, r) {
  const l = W("Left");
  return u(), f("view", {
    class: "nut-navbar--placeholder",
    style: A(e.rootStyle)
  }, [
    m("view", {
      ref: "navbarRef",
      class: L(e.classes),
      style: A({ zIndex: e.zIndex })
    }, [
      m("view", {
        class: "nut-navbar__left",
        onClick: t[0] || (t[0] = (...a) => e.handleLeft && e.handleLeft(...a))
      }, [
        e.leftShow ? I(e.$slots, "left-show", { key: 0 }, () => [
          oe(l, {
            height: "12px",
            color: "#979797"
          })
        ]) : N("", !0),
        e.leftText ? (u(), f("view", iu, E(e.leftText), 1)) : N("", !0),
        I(e.$slots, "left")
      ]),
      m("view", uu, [
        e.title ? (u(), f("view", {
          key: 0,
          class: "title",
          onClick: t[1] || (t[1] = (...a) => e.handleCenter && e.handleCenter(...a))
        }, E(e.title), 1)) : N("", !0),
        e.titleIcon ? (u(), f("view", {
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
      m("view", {
        class: "nut-navbar__right",
        onClick: t[4] || (t[4] = (...a) => e.handleRight && e.handleRight(...a))
      }, [
        e.desc ? (u(), f("view", cu, E(e.desc), 1)) : N("", !0),
        I(e.$slots, "right")
      ])
    ], 6)
  ], 4);
}
const fu = /* @__PURE__ */ q(ru, [["render", du]]), ke = (e = "") => (t, ...n) => {
  e = e.toLocaleLowerCase();
  const s = Xn.languages();
  let o = t;
  e && e.startsWith("nut") && (o = `${e.slice(3)}.${t}`);
  const r = jt(s, o) || jt(s, t);
  return Pt(r) ? r(...n) : r;
}, { create: pu } = Y("fixed-nav"), mu = "NutFixedNav", hu = pu({
  components: {
    NutOverlay: Tt,
    Left: nn
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
    const n = ke(mu), s = D(() => ({
      ["nut-fixed-nav"]: !0,
      active: e.visible,
      [e.type]: !0
    })), o = z(-1);
    return { classes: s, updateValue: (a = !e.visible) => {
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
function ku(e, t, n, s, o, r) {
  const l = W("nut-overlay"), a = W("Left");
  return u(), f("view", {
    class: L(e.classes),
    style: A(e.position)
  }, [
    e.overlay ? (u(), ee(l, {
      key: 0,
      visible: e.visible,
      "z-index": 200,
      onClick: t[0] || (t[0] = (i) => e.updateValue(!1))
    }, null, 8, ["visible"])) : N("", !0),
    I(e.$slots, "list", {}, () => [
      m("view", gu, [
        (u(!0), f(x, null, ie(e.navList, (i, p) => (u(), f("view", {
          key: i.id || p,
          class: L(["nut-fixed-nav__list-item", { active: i.id == e.current }]),
          onClick: (d) => e.selected(i, d)
        }, [
          m("img", {
            src: i.icon
          }, null, 8, vu),
          m("view", $u, E(i.text), 1),
          i.num ? (u(), f("view", bu, E(i.num), 1)) : N("", !0)
        ], 10, yu))), 128))
      ])
    ]),
    m("div", {
      class: "nut-fixed-nav__btn",
      onClick: t[1] || (t[1] = (i) => e.updateValue())
    }, [
      I(e.$slots, "btn", {}, () => [
        oe(a, { color: "#fff" }),
        m("view", wu, E(e.visible ? e.activeText || e.translate("activeText") : e.unActiveText || e.translate("unActiveText")), 1)
      ])
    ])
  ], 6);
}
const Cu = /* @__PURE__ */ q(hu, [["render", ku]]), po = Symbol("nut-menu"), { componentName: Su, create: Tu } = Y("menu"), Nu = Tu({
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
    const t = z(), n = z(0), s = z(!1), { children: o, linkChildren: r } = Kt(po), l = D(() => o.some((k) => k.state.showWrapper)), a = D(() => ({
      [Su]: !0,
      "scroll-fixed": s.value
    })), i = () => {
      if (t.value) {
        const k = We(t);
        e.direction === "down" ? n.value = k.bottom : n.value = window.innerHeight - k.top;
      }
    };
    r({ props: e, offset: n });
    const p = (k) => {
      o.forEach((v, w) => {
        w === k ? (i(), v.toggle()) : v.state.showPopup && v.toggle(!1, { immediate: !0 });
      });
    }, d = (k) => Math.max(0, "scrollTop" in k ? k.scrollTop : k.pageYOffset), $ = () => {
      const { scrollFixed: k } = e, v = d(window);
      s.value = v > (typeof k == "boolean" ? 30 : Number(k));
    }, g = (k) => {
      let v = "";
      const { titleClass: w } = e;
      return k && (v += "active"), w && (v += ` ${w}`), v;
    };
    return ve(() => {
      const { scrollFixed: k } = e;
      k && window.addEventListener("scroll", $);
    }), Xe(() => {
      const { scrollFixed: k } = e;
      k && window.removeEventListener("scroll", $);
    }), {
      toggleItem: p,
      children: o,
      opened: l,
      classes: a,
      barRef: t,
      getClasses: g
    };
  }
}), Du = ["onClick"], _u = { class: "nut-menu__title-text" }, Iu = { class: "nut-menu__title-icon" };
function Bu(e, t, n, s, o, r) {
  const l = W("RectUp"), a = W("RectDown");
  return u(), f("view", {
    class: L(e.classes)
  }, [
    m("view", {
      ref: "barRef",
      class: L(["nut-menu__bar", { opened: e.opened }])
    }, [
      (u(!0), f(x, null, ie(e.children, (i, p) => (u(), f("view", {
        key: p,
        class: L(["nut-menu__item", { disabled: i.disabled, active: i.state.showPopup }]),
        style: A({ color: i.state.showPopup ? e.activeColor : "" }),
        onClick: (d) => !i.disabled && e.toggleItem(p)
      }, [
        m("view", {
          class: L(["nut-menu__title", e.getClasses(i.state.showPopup)])
        }, [
          m("view", _u, E(i.renderTitle()), 1),
          m("span", Iu, [
            I(e.$slots, "icon", {}, () => [
              e.direction === "up" ? (u(), ee(l, { key: 0 })) : (u(), ee(a, { key: 1 }))
            ])
          ])
        ], 2)
      ], 14, Du))), 128))
    ], 2),
    I(e.$slots, "default")
  ], 2);
}
const Mu = /* @__PURE__ */ q(Nu, [["render", Bu]]), { create: Lu } = Y("menu-item"), Eu = Lu({
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
    NutPopup: Ee,
    Check: qn
  },
  emits: ["update:modelValue", "change", "open", "close"],
  setup(e, { emit: t }) {
    const n = ce({
      showPopup: !1,
      showWrapper: !1
    }), { parent: s } = ln(po), o = D(() => s.props.direction === "down" ? {
      top: s.offset.value + "px"
    } : {
      bottom: s.offset.value + "px"
    }), r = D(() => {
      const $ = { height: s.offset.value + "px" };
      return s.props.direction === "down" ? de(Z({}, $), { top: "0px" }) : de(Z({}, $), { bottom: "0px" });
    });
    return {
      style: o,
      placeholderElementStyle: r,
      renderTitle: () => {
        var g;
        if (e.title)
          return e.title;
        const $ = (g = e.options) == null ? void 0 : g.find((k) => k.value === e.modelValue);
        return $ ? $.text : "";
      },
      state: n,
      parent: s,
      toggle: ($ = !n.showPopup) => {
        $ !== n.showPopup && (n.showPopup = $, $ && (n.showWrapper = !0, t("open")));
      },
      onClick: ($) => {
        n.showPopup = !1, $.value !== e.modelValue && (t("update:modelValue", $.value), t("change", $.value));
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
function zu(e, t, n, s, o, r) {
  const l = W("Check"), a = W("nut-popup");
  return Ce((u(), f("view", {
    class: "nut-menu-item",
    style: A(e.style)
  }, [
    Ce(m("div", {
      class: "nut-menu-item-placeholder-element",
      style: A(e.placeholderElementStyle),
      onClick: t[0] || (t[0] = (...i) => e.handleClickOutside && e.handleClickOutside(...i))
    }, null, 4), [
      [Ne, e.state.showPopup]
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
        m("view", Pu, [
          (u(!0), f(x, null, ie(e.options, (i, p) => (u(), f("view", {
            key: p,
            class: L(["nut-menu-item__option", [{ active: i.value === e.modelValue }]]),
            style: A({ "flex-basis": 100 / e.cols + "%" }),
            onClick: (d) => e.onClick(i)
          }, [
            i.value === e.modelValue ? (u(), f("span", {
              key: 0,
              class: L(["nut-menu-item__span", [i.value === e.modelValue ? e.activeTitleClass : e.inactiveTitleClass]])
            }, [
              I(e.$slots, "icon", {}, () => [
                oe(l, wt(e.$attrs, {
                  color: e.parent.props.activeColor
                }), null, 16, ["color"])
              ])
            ], 2)) : N("", !0),
            m("view", {
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
    [Ne, e.state.showWrapper]
  ]);
}
const Vu = /* @__PURE__ */ q(Eu, [["render", zu]]), mo = Symbol("nut-tabbar"), { create: Ou } = Y("tabbar"), Hu = Ou({
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
    const { bottom: n, placeholder: s } = he(e), o = z(), r = ce({
      val: e.modelValue,
      children: []
    }), l = z(null);
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
    return Le(mo, i), Q(
      () => e.modelValue,
      (p) => {
        i.modelValue = p;
      }
    ), ve(() => {
      n.value && s.value && Se(() => {
        var p;
        o.value = (p = l == null ? void 0 : l.value) == null ? void 0 : p.getBoundingClientRect().height;
      });
    }), {
      changeIndex: a,
      nutTabbar: l,
      height: o
    };
  }
});
function Ru(e, t, n, s, o, r) {
  return u(), f("div", {
    class: L({ "nut-tabbar__placeholder": e.bottom && e.placeholder }),
    style: A({ height: e.height + "px" })
  }, [
    m("view", {
      ref: "nutTabbar",
      class: L(["nut-tabbar", { "nut-tabbar-bottom": e.bottom, "nut-tabbar-safebottom": e.safeAreaInsetBottom }])
    }, [
      I(e.$slots, "default")
    ], 2)
  ], 6);
}
const Fu = /* @__PURE__ */ q(Hu, [["render", Ru]]), { create: Wu } = Y("badge"), Yu = Wu({
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
    })), s = D(() => {
      if (e.dot)
        return;
      const o = e.value, r = e.max;
      return typeof o == "number" && typeof r == "number" && r < o ? `${r}+` : o;
    });
    return {
      state: t,
      stl: n,
      content: s
    };
  }
}), ju = { class: "nut-badge" }, Uu = ["textContent"];
function Ku(e, t, n, s, o, r) {
  return u(), f("view", ju, [
    Ce(m("view", {
      class: "nut-badge__icon",
      style: A(e.stl)
    }, [
      I(e.$slots, "icon")
    ], 4), [
      [Ne, !e.hidden && !e.dot && e.$slots.icon]
    ]),
    I(e.$slots, "default"),
    Ce(m("view", {
      class: L(["nut-badge__content nut-badge__content--sup", { "nut-badge__content--dot": e.dot, "nut-badge__content--bubble": !e.dot && e.bubble }]),
      style: A(e.stl),
      textContent: E(e.content)
    }, null, 14, Uu), [
      [Ne, !e.hidden && (e.content || e.dot)]
    ])
  ]);
}
const ho = /* @__PURE__ */ q(Yu, [["render", Ku]]), { create: Xu } = Y("tabbar-item"), qu = Xu({
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
    const n = (p) => t[p], s = Me(mo), o = ce({
      unactiveColor: s.unactiveColor,
      // 未选中的颜色
      activeColor: s.activeColor,
      // 选中的颜色
      index: 0
    }), r = an();
    ((p) => {
      var d;
      if (p.proxy) {
        s.children.push(p.proxy);
        const $ = s.children.indexOf(p.proxy);
        o.index = (d = e.name) != null ? d : $;
      }
    })(Ye());
    const a = D(() => o.index === s.modelValue);
    function i() {
      var g, k, v;
      let p = (g = e.name) != null ? g : o.index, d = null;
      e.name && (d = s.children.findIndex((w) => w.name == p)), s.changeIndex(d != null ? d : p, o.index);
      let $ = d != null ? d : p;
      if ((k = s.children[$]) != null && k.href) {
        window.location.href = s.children[$].href;
        return;
      }
      if ((v = s.children[$]) != null && v.to) {
        let w = s.children[$].to;
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
function xu(e, t, n, s, o, r) {
  const l = W("nut-badge");
  return u(), f("div", {
    class: L(["nut-tabbar-item", { "nut-tabbar-item__icon--unactive": !e.active }]),
    style: A({
      color: e.active ? e.state.activeColor : e.state.unactiveColor
    }),
    onClick: t[0] || (t[0] = (a) => e.change())
  }, [
    oe(l, nl(ol(e.$attrs)), {
      default: ne(() => [
        m("view", Zu, [
          e.isHaveSlot("icon") ? (u(), f("div", Gu, [
            I(e.$slots, "icon", { active: e.active })
          ])) : N("", !0),
          e.icon && !e.isHaveSlot("icon") ? (u(), f("view", Ju, [
            (u(), ee(ze(e.renderIcon(e.icon)), { class: "nut-popover-item-img" }))
          ])) : N("", !0),
          m("view", {
            class: L([
              "nut-tabbar-item_icon-box_nav-word",
              { "nut-tabbar-item_icon-box_big-word": !e.icon && !e.isHaveSlot("icon") }
            ])
          }, [
            I(e.$slots, "default", {}, () => [
              e.tabTitle ? (u(), f("view", Qu, E(e.tabTitle), 1)) : N("", !0)
            ])
          ], 2)
        ])
      ]),
      _: 3
    }, 16)
  ], 6);
}
const ec = /* @__PURE__ */ q(qu, [["render", xu]]), { create: tc } = Y("elevator"), nc = tc({
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
    const s = z(null), o = ce({
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
    }), r = D(() => s.value.clientHeight), l = (c, y) => c.getAttribute("data-" + y), a = (c) => {
      Se(() => {
        !o.listGroup.includes(c) && c != null && o.listGroup.push(c);
      });
    }, i = () => {
      let c = 0;
      o.listHeight.push(c);
      for (let y = 0; y < o.listGroup.length; y++) {
        let h = o.listGroup[y];
        c += Math.floor(h.clientHeight), o.listHeight.push(c);
      }
    }, p = (c) => {
      !c && c !== 0 || (c < 0 && (c = 0), c > o.listHeight.length - 2 && (c = o.listHeight.length - 2), o.codeIndex = c, s.value.scrollTo(0, o.listHeight[c]));
    }, d = (c) => {
      o.scrollStart = !0;
      let y = l(c.target, "index"), h = c.touches[0];
      o.touchState.y1 = h.pageY, o.anchorIndex = +y, o.codeIndex = +y, p(+y);
    }, $ = (c) => {
      let y = c.touches[0];
      o.touchState.y2 = y.pageY;
      let h = (o.touchState.y2 - o.touchState.y1) / e.spaceHeight | 0;
      o.codeIndex = o.anchorIndex + h, p(o.codeIndex);
    }, g = () => {
      o.scrollStart = !1;
    }, k = (c, y) => {
      t("clickItem", c, y), o.currentData = y, o.currentKey = c;
    }, v = (c) => {
      t("clickIndex", c);
    }, w = (c) => {
      let h = c.target.scrollTop;
      const b = o.listHeight;
      o.scrollY = h;
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
      s.value && s.value.addEventListener("scroll", w);
    }), n({
      scrollTo: p
    }), Q(
      () => o.listGroup.length,
      () => {
        o.listHeight = [], Se(i);
      }
    ), Q(
      () => o.diff,
      (c) => {
        const y = o.listHeight;
        let h = c > 0 && c < e.titleHeight ? c - e.titleHeight : 0;
        o.scrollY + r.value === y[y.length - 1] && h !== 0 && (h = 0), o.fixedTop !== h && (o.fixedTop = h);
      }
    ), Q(
      () => o.currentIndex,
      (c) => {
        t("change", c);
      }
    ), de(Z({}, he(o)), {
      clientHeight: r,
      setListGroup: a,
      listview: s,
      touchStart: d,
      touchMove: $,
      touchEnd: g,
      handleClickItem: k,
      handleClickIndex: v
    });
  }
}), oc = { class: "nut-elevator" }, lc = { class: "nut-elevator__list__item__code" }, sc = ["onClick"], ac = ["innerHTML"], rc = { class: "nut-elevator__list__fixed" }, ic = { class: "nut-elevator__list__fixed-title" }, uc = { class: "nut-elevator__bars__inner" }, cc = ["data-index", "onClick"];
function dc(e, t, n, s, o, r) {
  var l, a;
  return u(), f("view", oc, [
    m("view", {
      ref: "listview",
      class: "nut-elevator__list",
      style: A({ height: isNaN(+e.height) ? e.height : `${e.height}px` })
    }, [
      (u(!0), f(x, null, ie(e.indexList, (i) => (u(), f("view", {
        key: i[e.acceptKey],
        ref_for: !0,
        ref: e.setListGroup,
        class: "nut-elevator__list__item"
      }, [
        m("view", lc, E(i[e.acceptKey]), 1),
        (u(!0), f(x, null, ie(i.list, (p) => (u(), f("view", {
          key: p.id,
          class: L(["nut-elevator__list__item__name", {
            "nut-elevator__list__item__name--highcolor": e.currentData.id === p.id && e.currentKey === i[e.acceptKey]
          }]),
          onClick: (d) => e.handleClickItem(i[e.acceptKey], p)
        }, [
          e.$slots.default ? I(e.$slots, "default", {
            key: 1,
            item: p
          }) : (u(), f("span", {
            key: 0,
            innerHTML: p.name
          }, null, 8, ac))
        ], 10, sc))), 128))
      ]))), 128))
    ], 4),
    Ce(m("view", rc, [
      m("view", ic, E((a = (l = e.indexList) == null ? void 0 : l[e.currentIndex]) == null ? void 0 : a[e.acceptKey]), 1)
    ], 512), [
      [Ne, e.scrollY > 0 && e.isSticky]
    ]),
    e.indexList.length ? Ce((u(), f("view", {
      key: 0,
      class: "nut-elevator__code--current"
    }, E(e.indexList[e.codeIndex][e.acceptKey]), 513)), [
      [Ne, e.scrollStart]
    ]) : N("", !0),
    m("view", {
      class: "nut-elevator__bars",
      onTouchstart: t[0] || (t[0] = (...i) => e.touchStart && e.touchStart(...i)),
      onTouchmove: t[1] || (t[1] = De((...i) => e.touchMove && e.touchMove(...i), ["stop", "prevent"])),
      onTouchend: t[2] || (t[2] = (...i) => e.touchEnd && e.touchEnd(...i))
    }, [
      m("view", uc, [
        (u(!0), f(x, null, ie(e.indexList, (i, p) => (u(), f("view", {
          key: i[e.acceptKey],
          class: L(["nut-elevator__bars__inner__item", { active: i[e.acceptKey] === e.indexList[e.currentIndex][e.acceptKey] }]),
          "data-index": p,
          onClick: (d) => e.handleClickIndex(i[e.acceptKey])
        }, E(i[e.acceptKey]), 11, cc))), 128))
      ])
    ], 32)
  ]);
}
const go = /* @__PURE__ */ q(nc, [["render", dc]]), { create: fc } = Y("pagination"), pc = "NutPagination", mc = fc({
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
    const n = ke(pc), { modelValue: s, mode: o, showPageSize: r, forceEllipses: l } = he(e), a = D(() => {
      const { pageCount: $, totalItems: g, itemsPerPage: k } = he(e), v = +$.value || Math.ceil(+g.value / +k.value);
      return Math.max(1, v);
    }), i = ($, g) => {
      $ > a.value || $ < 1 || ($ != s.value && t("update:modelValue", $), g && t("change", $));
    }, p = ($, g, k = !1) => ({ number: $, text: g, active: k }), d = D(() => {
      if (o.value == "simple")
        return;
      let $ = [];
      const g = a.value, k = +r.value;
      let v = 1, w = g;
      const c = g > k;
      c && (v = Math.max(s.value - Math.floor(k / 2), 1), w = v + +k - 1, w > g && (w = g, v = w - +k + 1));
      for (var y = v; y <= w; y++) {
        const h = p(y, y, s.value == y);
        $.push(h);
      }
      if (c && k > 0 && l.value) {
        if (v > 1) {
          const h = p(v - 1, "...");
          $.unshift(h);
        }
        if (w < g) {
          const h = p(w + 1, "...");
          $.push(h);
        }
      }
      return $;
    });
    return bt(() => {
      i(s.value, !1);
    }), {
      modelValue: s,
      select: i,
      countRef: a,
      mode: o,
      pages: d,
      forceEllipses: l,
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
function bc(e, t, n, s, o, r) {
  return u(), f("view", hc, [
    m("view", {
      class: L(["nut-pagination-prev", e.mode == "multi" ? "" : "simple-border", e.modelValue == 1 ? "disabled" : ""]),
      onClick: t[0] || (t[0] = (l) => e.select(e.modelValue - 1, !0))
    }, [
      I(e.$slots, "prev-text", {}, () => [
        ge(E(e.prevText || e.translate("prev")), 1)
      ])
    ], 2),
    e.mode == "multi" ? (u(), f("view", gc, [
      (u(!0), f(x, null, ie(e.pages, (l, a) => (u(), f("view", {
        key: a + "pagination",
        class: L(["nut-pagination-item", l.active ? "active" : ""]),
        onClick: (i) => e.select(l.number, !0)
      }, [
        I(e.$slots, "page", { item: l }, () => [
          ge(E(l.text), 1)
        ])
      ], 10, yc))), 128))
    ])) : N("", !0),
    e.mode == "simple" ? (u(), f("view", vc, [
      m("view", $c, E(e.modelValue) + "/" + E(e.countRef), 1)
    ])) : N("", !0),
    m("view", {
      class: L(["nut-pagination-next", e.modelValue >= e.countRef ? "disabled" : ""]),
      onClick: t[1] || (t[1] = (l) => e.select(e.modelValue + 1, !0))
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
const Oe = Cc(), _n = 10;
function Tc(e, t) {
  return e > t && e > _n ? "horizontal" : t > e && t > _n ? "vertical" : "";
}
function et() {
  const e = z(0), t = z(0), n = z(0), s = z(0), o = z(0), r = z(0), l = z(0), a = z(0), i = z(""), p = () => i.value === "vertical", d = () => i.value === "horizontal", $ = () => {
    o.value = 0, r.value = 0, l.value = 0, a.value = 0, i.value = "";
  };
  return {
    move: (v) => {
      const w = v.touches[0];
      o.value = w.clientX - e.value, r.value = w.clientY - t.value, n.value = w.clientX, s.value = w.clientY, l.value = Math.abs(o.value), a.value = Math.abs(r.value), i.value || (i.value = Tc(l.value, a.value));
    },
    start: (v) => {
      $(), e.value = v.touches[0].clientX, t.value = v.touches[0].clientY;
    },
    reset: $,
    startX: e,
    startY: t,
    moveX: n,
    moveY: s,
    deltaX: o,
    deltaY: r,
    offsetX: l,
    offsetY: a,
    direction: i,
    isVertical: p,
    isHorizontal: d
  };
}
const Nc = (e, t, n, s) => {
  const o = z(), r = z({ width: 0, height: 0 }), l = () => Ge(void 0, null, function* () {
    var g, k;
    n && n.getEnv() !== n.ENV_TYPE.WEB ? s(o).then(
      (v) => {
        r.value.width = v.width || 0, r.value.height = v.height || 0;
      },
      () => {
      }
    ) : (r.value.width = ((g = o.value) == null ? void 0 : g.clientWidth) || 0, r.value.height = ((k = o.value) == null ? void 0 : k.clientHeight) || 0);
  });
  ve(() => {
    setTimeout(() => {
      l();
    }, 100);
  });
  const a = ce({
    offset: 0,
    moving: !1
  }), i = et();
  let p = "";
  const d = (g, k) => {
    var w;
    let v = g;
    switch (e.direction == "horizontal" ? (p = g > 0 ? "right" : "left", v = Math.abs(v) / r.value.width * 100) : (p = k > 0 ? "bottom" : "top", v = k, v = Math.abs(v) / ((w = r.value) == null ? void 0 : w.height) * 100), v > 85 && (v = 85), p) {
      case "left":
      case "top":
        t.isEnd() && (v = 0, a.moving = !1);
        break;
      case "right":
      case "bottom":
        v = -v, t.isBegin() && (v = 0, a.moving = !1);
        break;
    }
    a.offset = v;
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
const { create: _c } = Y("tabs"), Ic = _c({
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
    const s = z(null);
    let o;
    Le("tabsOpiton", {
      activeKey: D(() => e.modelValue || "0"),
      autoHeight: D(() => e.autoHeight),
      animatedTime: D(() => e.animatedTime)
    });
    const r = z([]), l = (T) => {
      T.forEach((P, O) => {
        var G, le, j, U, R, te, X, se, ue;
        let K = P.type;
        if (K = K.name || K, K == "NutTabPane") {
          let pe = new Dc();
          if ((G = P.props) != null && G.title || (le = P.props) != null && le["pane-key"] || (j = P.props) != null && j.paneKey) {
            let we = Yt((U = P.props) == null ? void 0 : U["pane-key"]), _e = we == "number" || we == "string" ? String((R = P.props) == null ? void 0 : R["pane-key"]) : null, H = Yt((te = P.props) == null ? void 0 : te.paneKey), J = H == "number" || H == "string" ? String((X = P.props) == null ? void 0 : X.paneKey) : null;
            pe.title = (se = P.props) == null ? void 0 : se.title, pe.paneKey = _e || J || String(O), pe.disabled = (ue = P.props) == null ? void 0 : ue.disabled;
          }
          r.value.push(pe);
        } else {
          if (P.children == " ")
            return;
          l(P.children);
        }
      });
    }, a = z(e.modelValue || 0), i = (T) => {
      let P = r.value.findIndex((O) => O.paneKey == T);
      r.value.length == 0 || P == -1 || (a.value = P);
    }, p = D(() => e.titleScroll && e.direction === "vertical"), d = z(), $ = z([]), g = (T) => {
      const P = d.value, O = $.value;
      if (!P || !O || !O[a.value])
        return;
      const K = O[a.value];
      let G = 0;
      e.direction === "vertical" ? G = K.offsetTop - P.offsetTop + 10 - (P.offsetHeight - K.offsetHeight) / 2 : G = K.offsetLeft - (P.offsetWidth - K.offsetWidth) / 2, k(P, G, T ? 0 : 0.3, e.direction);
    }, k = (T, P, O, K) => {
      let G = 0;
      const le = K === "horizontal" ? T.scrollLeft : T.scrollTop, j = O === 0 ? 1 : Math.round(O * 1e3 / 16);
      function U() {
        K === "horizontal" ? T.scrollLeft += (P - le) / j : T.scrollTop += (P - le) / j, ++G < j && Oe(U);
      }
      U();
    }, v = (T = ((P) => (P = n.default) == null ? void 0 : P.call(n))()) => {
      r.value = [], T = T == null ? void 0 : T.filter((O) => typeof O.children != "string"), T && T.length && l(T), i(e.modelValue), Se(() => {
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
        v(T);
      }
    );
    const c = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    Q(
      () => e.modelValue,
      (T) => {
        if (i(T), g(), o) {
          let P = We(s.value).top + c(), O = Math.ceil(P - e.top);
          window.scrollTo({
            top: O,
            behavior: "smooth"
          });
        }
      }
    ), ve(v), Ct(v);
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
        $.value[P] = T;
      }
    }, { tabsContentRef: h, touchState: b, touchMethods: S } = Nc(e, y), _ = D(() => {
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
      const T = Be(e.titleGutter);
      return e.direction === "vertical" ? { marginTop: T, marginBottom: T } : { marginLeft: T, marginRight: T };
    });
    return Z(Z({
      navRef: d,
      tabsContentRef: h,
      titles: r,
      contentStyle: _,
      tabsNavStyle: B,
      titleStyle: C,
      tabsActiveStyle: M,
      container: s,
      getScrollY: p,
      onStickyScroll: w
    }, y), S);
  }
}), Bc = ["onClick"], Mc = ["onClick"];
function Lc(e, t, n, s, o, r) {
  const l = W("JoySmile"), a = W("nut-sticky");
  return u(), f("view", {
    ref: "container",
    class: L(["nut-tabs", [e.direction]])
  }, [
    e.sticky ? (u(), ee(a, {
      key: 0,
      top: e.top,
      container: e.container,
      onScroll: e.onStickyScroll
    }, {
      default: ne(() => [
        m("view", {
          ref: "navRef",
          class: L(["nut-tabs__titles", {
            "nut-tabs__titles-left": e.align === "left",
            [e.type]: e.type,
            scrollable: e.titleScroll,
            [e.size]: e.size
          }]),
          style: A(e.tabsNavStyle)
        }, [
          e.$slots.titles ? I(e.$slots, "titles", { key: 0 }) : (u(!0), f(x, { key: 1 }, ie(e.titles, (i, p) => (u(), f("view", {
            key: i.paneKey,
            class: L(["nut-tabs__titles-item", {
              "nut-tabs__titles-item-left": e.align === "left",
              active: i.paneKey == e.modelValue,
              disabled: i.disabled
            }]),
            style: A(e.titleStyle),
            onClick: (d) => e.tabChange(i, p)
          }, [
            e.type == "line" ? (u(), f("view", {
              key: 0,
              class: "nut-tabs__titles-item__line",
              style: A(e.tabsActiveStyle)
            }, null, 4)) : N("", !0),
            e.type == "smile" ? (u(), f("view", {
              key: 1,
              class: "nut-tabs__titles-item__smile",
              style: A(e.tabsActiveStyle)
            }, [
              oe(l, { color: e.color }, null, 8, ["color"])
            ], 4)) : N("", !0),
            m("view", {
              class: L(["nut-tabs__titles-item__text", { ellipsis: e.ellipsis }])
            }, E(i.title), 3)
          ], 14, Bc))), 128))
        ], 6)
      ]),
      _: 3
    }, 8, ["top", "container", "onScroll"])) : (u(), f("view", {
      key: 1,
      ref: "navRef",
      class: L(["nut-tabs__titles", { "nut-tabs__titles-left": e.align === "left", [e.type]: e.type, scrollable: e.titleScroll, [e.size]: e.size }]),
      style: A(e.tabsNavStyle)
    }, [
      e.$slots.titles ? I(e.$slots, "titles", { key: 0 }) : (u(!0), f(x, { key: 1 }, ie(e.titles, (i, p) => (u(), f("view", {
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
        e.type == "line" ? (u(), f("view", {
          key: 0,
          class: "nut-tabs__titles-item__line",
          style: A(e.tabsActiveStyle)
        }, null, 4)) : N("", !0),
        e.type == "smile" ? (u(), f("view", {
          key: 1,
          class: "nut-tabs__titles-item__smile",
          style: A(e.tabsActiveStyle)
        }, [
          oe(l, { color: e.color }, null, 8, ["color"])
        ], 4)) : N("", !0),
        m("view", {
          class: L(["nut-tabs__titles-item__text", { ellipsis: e.ellipsis }])
        }, E(i.title), 3)
      ], 14, Mc))), 128))
    ], 6)),
    m("view", {
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
const yo = /* @__PURE__ */ q(Ic, [["render", Lc]]), { create: Ec } = Y("tab-pane"), Pc = Ec({
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
    const t = Me("tabsOpiton"), n = D(() => ({
      display: t.animatedTime.value == 0 && e.paneKey != t.activeKey.value ? "none" : void 0
    }));
    return de(Z({}, t), {
      paneStyle: n
    });
  }
});
function Ac(e, t, n, s, o, r) {
  return u(), f("view", {
    class: L(["nut-tab-pane", { inactive: e.paneKey != e.activeKey && e.autoHeight }]),
    style: A(e.paneStyle)
  }, [
    I(e.$slots, "default")
  ], 6);
}
const vo = /* @__PURE__ */ q(Pc, [["render", Ac]]), { create: zc } = Y("indicator"), Vc = zc({
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
function Rc(e, t, n, s, o, r) {
  return u(), f("view", {
    class: L(e.classes)
  }, [
    (u(!0), f(x, null, ie(e.size, (l) => (u(), f(x, { key: l }, [
      l === e.current ? (u(), f("view", Oc, E(e.fillZero && e.padZero(l) || l), 1)) : (u(), f("view", Hc))
    ], 64))), 128))
  ], 2);
}
const Fc = /* @__PURE__ */ q(Vc, [["render", Rc]]), { create: Wc } = Y("side-navbar"), Yc = Wc({
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
    }), s = (r, l = 1) => {
      var a;
      for (let i = 0; i < r.length; i++) {
        let p = r[i];
        (a = p == null ? void 0 : p.children) != null && a[0] && (p.children[0].style.paddingLeft = +e.offset * l + "px", p.className.includes("nut-side-navbar-item") || s(Array.from(p.children[1].children), ++n.count));
      }
      n.count--;
    }, o = () => {
      let r = t.value.childNodes;
      r != null && r.length && (r = Array.from(r).filter((l) => l.nodeType !== 3).map((l) => l), s(r));
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
function Xc(e, t, n, s, o, r) {
  return u(), f("view", jc, [
    m("view", Uc, [
      m("view", Kc, [
        I(e.$slots, "default")
      ], 512)
    ])
  ]);
}
const qc = /* @__PURE__ */ q(Yc, [["render", Xc]]), { create: Zc } = Y("side-navbar-item"), Gc = Zc({
  props: {
    title: {
      type: String,
      default: ""
    }
  }
}), Jc = { class: "nut-side-navbar-item" }, Qc = { class: "nut-side-navbar-item__title" };
function xc(e, t, n, s, o, r) {
  return u(), f("view", Jc, [
    m("span", Qc, E(e.title), 1)
  ]);
}
const ed = /* @__PURE__ */ q(Gc, [["render", xc]]), { create: td } = Y("sub-side-navbar"), nd = td({
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
    }), s = D(() => ({
      height: n.direction ? "0px" : "auto"
    })), o = () => {
      t("titleClick"), n.direction = n.direction ? "" : "up";
    };
    return ve(() => {
      n.direction = e.open ? "" : "up";
    }), de(Z({}, he(n)), {
      style: s,
      handleClick: o
    });
  }
}), od = { class: "nut-sub-side-navbar" }, ld = { class: "nut-sub-side-navbar__title__text" }, sd = { class: "nut-sub-side-navbar__title__icon" };
function ad(e, t, n, s, o, r) {
  const l = W("ArrowDown2"), a = W("ArrowUp2");
  return u(), f("view", od, [
    m("view", {
      class: "nut-sub-side-navbar__title",
      onClick: t[0] || (t[0] = De((...i) => e.handleClick && e.handleClick(...i), ["stop"]))
    }, [
      m("span", ld, E(e.title), 1),
      m("span", sd, [
        e.direction ? (u(), ee(a, { key: 1 })) : (u(), ee(l, { key: 0 }))
      ])
    ]),
    Ce(m("view", {
      class: L(["nut-sub-side-navbar__list", e.direction ? "nutFadeOut" : "nutFadeIn"]),
      style: A(e.style)
    }, [
      I(e.$slots, "default")
    ], 6), [
      [Ne, !e.direction]
    ])
  ]);
}
const rd = /* @__PURE__ */ q(nd, [["render", ad]]), $o = Symbol("nut-form"), bo = Symbol("nut-form-disabled"), Ze = (e) => {
  const { parent: t } = ln(bo);
  return D(() => {
    var n;
    return e.value || ((n = t == null ? void 0 : t.props) == null ? void 0 : n.disabled) || !1;
  });
}, { componentName: id, create: ud } = Y("range"), cd = ud({
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
    const n = Ze(xe(e, "disabled")), s = z(0);
    let o, r;
    const l = z(), a = z(), i = et(), p = D(() => {
      const { marks: j, max: U, min: R } = e;
      return Object.keys(j).map(parseFloat).sort((se, ue) => se - ue).filter((se) => se >= +R && se <= +U);
    }), d = D(() => Number(e.max) - Number(e.min)), $ = D(() => {
      const j = id;
      return {
        [j]: !0,
        [`${j}-disabled`]: n.value,
        [`${j}-vertical`]: e.vertical,
        [`${j}-show-number`]: !e.hiddenRange
      };
    }), g = D(() => {
      const j = "nut-range-container";
      return {
        [j]: !0,
        [`${j}-vertical`]: e.vertical
      };
    }), k = D(() => ({
      background: e.inactiveColor
    })), v = D(() => ({
      borderColor: e.buttonColor
    })), w = (j) => !!e.range && Array.isArray(j), c = () => {
      const { modelValue: j, min: U } = e;
      return w(j) ? `${(j[1] - j[0]) * 100 / d.value}%` : `${(j - Number(U)) * 100 / d.value}%`;
    }, y = () => {
      const { modelValue: j, min: U } = e;
      return w(j) ? `${(j[0] - Number(U)) * 100 / d.value}%` : "0%";
    }, h = D(() => e.vertical ? {
      height: c(),
      top: y(),
      background: e.activeColor,
      transition: a.value ? "none" : void 0
    } : {
      width: c(),
      left: y(),
      background: e.activeColor,
      transition: a.value ? "none" : void 0
    }), b = (j) => {
      const U = "nut-range-mark", { modelValue: R, max: te, min: X } = e;
      let se = Number(X), ue = Number(te);
      if (e.range) {
        const [we, _e] = R;
        se = we, ue = _e;
      } else
        ue = R;
      let pe = j <= +ue && j >= se;
      return {
        [`${U}-text`]: !0,
        [`${U}-text-active`]: pe
      };
    }, S = (j) => {
      const { min: U, vertical: R } = e;
      let te = {
        left: `${(j - Number(U)) / d.value * 100}%`
      };
      return R && (te = {
        top: `${(j - Number(U)) / d.value * 100}%`
      }), te;
    }, _ = (j) => {
      const { modelValue: U, max: R, min: te } = e;
      let X = Number(te), se = Number(R);
      if (e.range) {
        const [we, _e] = U;
        X = we, se = _e;
      }
      return {
        background: j <= se && j >= X ? e.activeColor : e.inactiveColor
      };
    }, B = (j) => {
      const { min: U, max: R, step: te } = e;
      return j = Math.max(+U, Math.min(j, +R)), Math.round(j / +te) * +te;
    }, M = (j, U) => JSON.stringify(j) === JSON.stringify(U), C = (j) => j[0] > j[1] ? j.slice(0).reverse() : j, T = (j, U) => {
      w(j) ? j = C(j).map(B) : j = B(j), M(j, e.modelValue) || t("update:modelValue", j), U && !M(j, o) && t("change", j);
    }, P = (j) => {
      if (n.value)
        return;
      const { min: U, modelValue: R } = e, te = We(l);
      let X = j.clientX - te.left, se = te.width;
      e.vertical && (X = j.clientY - te.top, se = te.height);
      const ue = Number(U) + X / se * d.value;
      if (w(R)) {
        const [pe, we] = R, _e = (pe + we) / 2;
        ue <= _e ? T([ue, we], !0) : T([pe, ue], !0);
      } else
        T(ue, !0);
    }, O = (j) => {
      n.value || (i.start(j), r = e.modelValue, w(r) ? o = r.map(B) : o = B(r), a.value = "start");
    }, K = (j) => {
      if (n.value)
        return;
      a.value === "start" && t("dragStart"), i.move(j), a.value = "draging";
      const U = We(l);
      let R = i.deltaX.value, te = U.width, X = R / te * d.value;
      e.vertical && (R = i.deltaY.value, te = U.height, X = R / te * d.value), w(o) ? r[s.value] = o[s.value] + X : r = o + X, T(r);
    }, G = () => {
      n.value || (a.value === "draging" && (T(r, !0), t("dragEnd")), a.value = "");
    }, le = (j) => Yn(e.modelValue) && typeof j == "number" ? e.modelValue[j] : Number(e.modelValue);
    return de(Z({
      root: l,
      classes: $,
      wrapperStyle: k,
      buttonStyle: v,
      onClick: P,
      onTouchStart: O,
      onTouchMove: K,
      onTouchEnd: G
    }, he(e)), {
      barStyle: h,
      curValue: le,
      buttonIndex: s,
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
function vd(e, t, n, s, o, r) {
  return u(), f("view", {
    class: L(e.containerClasses)
  }, [
    e.hiddenRange ? N("", !0) : (u(), f("view", dd, E(+e.min), 1)),
    m("view", {
      ref: "root",
      style: A(e.wrapperStyle),
      class: L(e.classes),
      onClick: t[9] || (t[9] = De((...l) => e.onClick && e.onClick(...l), ["stop"]))
    }, [
      e.marksList.length > 0 ? (u(), f("view", fd, [
        (u(!0), f(x, null, ie(e.marksList, (l) => (u(), f("span", {
          key: l,
          class: L(e.markClassName(l)),
          style: A(e.marksStyle(l))
        }, [
          ge(E(l) + " ", 1),
          m("span", {
            class: "nut-range-tick",
            style: A(e.tickStyle(l))
          }, null, 4)
        ], 6))), 128))
      ])) : N("", !0),
      m("view", {
        class: "nut-range-bar",
        style: A(e.barStyle)
      }, [
        e.range ? (u(), f(x, { key: 0 }, ie([0, 1], (l) => m("view", {
          key: l,
          role: "slider",
          class: L({
            "nut-range-button-wrapper-left": l == 0,
            "nut-range-button-wrapper-right": l == 1
          }),
          tabindex: e.disabled ? -1 : 0,
          "aria-valuemin": +e.min,
          "aria-valuenow": e.curValue(l),
          "aria-valuemax": +e.max,
          "aria-orientation": "horizontal",
          onTouchstart: De(
            (a) => {
              typeof l == "number" && (e.buttonIndex = l), e.onTouchStart(a);
            },
            ["stop", "prevent"]
          ),
          onTouchmove: t[0] || (t[0] = De((...a) => e.onTouchMove && e.onTouchMove(...a), ["stop", "prevent"])),
          onTouchend: t[1] || (t[1] = De((...a) => e.onTouchEnd && e.onTouchEnd(...a), ["stop", "prevent"])),
          onTouchcancel: t[2] || (t[2] = De((...a) => e.onTouchEnd && e.onTouchEnd(...a), ["stop", "prevent"])),
          onClick: t[3] || (t[3] = (a) => a.stopPropagation())
        }, [
          e.$slots.button ? I(e.$slots, "button", { key: 0 }) : (u(), f("view", {
            key: 1,
            class: "nut-range-button",
            style: A(e.buttonStyle)
          }, [
            e.hiddenTag ? N("", !0) : (u(), f("view", md, E(e.curValue(l)), 1))
          ], 4))
        ], 42, pd)), 64)) : (u(), f("view", {
          key: 1,
          role: "slider",
          class: "nut-range-button-wrapper",
          tabindex: e.disabled ? -1 : 0,
          "aria-valuemin": +e.min,
          "aria-valuenow": e.curValue(),
          "aria-valuemax": +e.max,
          "aria-orientation": "horizontal",
          onTouchstart: t[4] || (t[4] = De(
            (l) => {
              e.onTouchStart(l);
            },
            ["stop", "prevent"]
          )),
          onTouchmove: t[5] || (t[5] = De((...l) => e.onTouchMove && e.onTouchMove(...l), ["stop", "prevent"])),
          onTouchend: t[6] || (t[6] = De((...l) => e.onTouchEnd && e.onTouchEnd(...l), ["stop", "prevent"])),
          onTouchcancel: t[7] || (t[7] = De((...l) => e.onTouchEnd && e.onTouchEnd(...l), ["stop", "prevent"])),
          onClick: t[8] || (t[8] = (l) => l.stopPropagation())
        }, [
          e.$slots.button ? I(e.$slots, "button", { key: 0 }) : (u(), f("view", {
            key: 1,
            class: "nut-range-button",
            style: A(e.buttonStyle)
          }, [
            e.hiddenTag ? N("", !0) : (u(), f("view", gd, E(e.curValue()), 1))
          ], 4))
        ], 40, hd))
      ], 4)
    ], 6),
    e.hiddenRange ? N("", !0) : (u(), f("view", yd, E(+e.max), 1))
  ], 2);
}
const wo = /* @__PURE__ */ q(cd, [["render", vd]]), { create: $d } = Y("searchbar"), bd = "NutSearchbar", wd = $d({
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
      default: () => tn
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
    const n = Ze(xe(e, "disabled")), s = ke(bd), o = ce({
      active: !1
    }), r = D(() => ({
      background: e.background
    })), l = D(() => ({
      background: e.inputBackground
    })), a = (h) => {
      let S = h.target.value;
      e.maxLength && S.length > Number(e.maxLength) && (S = S.slice(0, Number(e.maxLength))), t("update:modelValue", S, h), t("change", S, h);
    }, i = z({}), p = (h) => {
      let S = h.target.value;
      o.active = !0, i.value = e.focusStyle, t("focus", S, h);
    }, d = (h) => {
      setTimeout(() => {
        o.active = !1;
      }, 0);
      let S = h.target.value;
      e.maxLength && S.length > Number(e.maxLength) && (S = S.slice(0, Number(e.maxLength))), i.value = {}, t("blur", S, h);
    }, $ = (h) => {
      t("update:modelValue", "", h), t("change", "", h), t("clear", "");
    }, g = () => {
      t("search", e.modelValue);
    }, k = (h) => {
      t("clickInput", h);
    }, v = (h) => {
      t("clickLeftIcon", e.modelValue, h);
    }, w = (h) => {
      t("clickRightIcon", e.modelValue, h);
    }, c = D(() => ({
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
      handleClear: $,
      handleSubmit: g,
      searchbarStyle: r,
      inputSearchbarStyle: l,
      focusCss: i,
      translate: s,
      clickInput: k,
      leftIconClick: v,
      rightIconClick: w,
      styleSearchbar: c,
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
function Dd(e, t, n, s, o, r) {
  return u(), f("view", {
    class: L(["nut-searchbar", { "safe-area-inset-bottom": e.safeAreaInsetBottom }]),
    style: A(e.searchbarStyle)
  }, [
    e.label ? (u(), f("span", kd, E(e.label), 1)) : N("", !0),
    e.$slots.leftout ? (u(), f("view", Cd, [
      I(e.$slots, "leftout")
    ])) : N("", !0),
    m("view", {
      class: L(["nut-searchbar__search-input", e.shape]),
      style: A(Z(Z({}, e.inputSearchbarStyle), e.focusCss))
    }, [
      e.$slots.leftin ? (u(), f("view", {
        key: 0,
        class: "nut-searchbar__search-icon nut-searchbar__iptleft-search-icon",
        onClick: t[0] || (t[0] = (...l) => e.leftIconClick && e.leftIconClick(...l))
      }, [
        I(e.$slots, "leftin")
      ])) : N("", !0),
      m("view", {
        class: L(["nut-searchbar__input-inner", e.$slots.rightin && "nut-searchbar__input-inner-absolute"])
      }, [
        m("form", {
          class: "nut-searchbar__input-form",
          action: "#",
          onSubmit: t[5] || (t[5] = De((...l) => e.handleSubmit && e.handleSubmit(...l), ["prevent"]))
        }, [
          m("input", {
            ref: "inputsearch",
            class: L(["nut-searchbar__input-bar", e.clearable && "nut-searchbar__input-bar_clear"]),
            type: e.inputType,
            maxlength: e.maxLength,
            placeholder: e.placeholder || e.translate("placeholder"),
            value: e.modelValue,
            disabled: e.disabled,
            readonly: e.readonly,
            style: A(e.styleSearchbar),
            onClick: t[1] || (t[1] = (...l) => e.clickInput && e.clickInput(...l)),
            onInput: t[2] || (t[2] = (...l) => e.valueChange && e.valueChange(...l)),
            onFocus: t[3] || (t[3] = (...l) => e.valueFocus && e.valueFocus(...l)),
            onBlur: t[4] || (t[4] = (...l) => e.valueBlur && e.valueBlur(...l))
          }, null, 46, Sd)
        ], 32)
      ], 2),
      m("view", {
        class: L(["nut-searchbar__input-inner-icon", e.$slots.rightin && "nut-searchbar__input-inner-icon-absolute"])
      }, [
        e.clearable ? Ce((u(), f("view", {
          key: 0,
          class: "nut-searchbar__search-icon nut-searchbar__input-clear",
          onClick: t[6] || (t[6] = (...l) => e.handleClear && e.handleClear(...l))
        }, [
          e.$slots["clear-icon"] ? I(e.$slots, "clear-icon", { key: 0 }) : (u(), ee(ze(e.renderIcon(e.clearIcon)), { key: 1 }))
        ], 512)), [
          [Ne, String(e.modelValue).length > 0]
        ]) : N("", !0),
        e.$slots.rightin ? (u(), f("view", Td, [
          I(e.$slots, "rightin")
        ])) : N("", !0)
      ], 2)
    ], 6),
    e.$slots.rightout ? (u(), f("view", Nd, [
      I(e.$slots, "rightout")
    ])) : N("", !0)
  ], 6);
}
const _d = /* @__PURE__ */ q(wd, [["render", Dd]]), Lt = (e, t, n) => e.map((s) => {
  const { value: o = "value", text: r = "text", children: l = "children" } = n, g = s, { [o]: a, [r]: i, [l]: p } = g, d = Ft(g, [_t(o), _t(r), _t(l)]), $ = de(Z({
    loading: !1
  }, d), {
    level: t ? (t && t.level || 0) + 1 : 0,
    value: a,
    text: i,
    children: p,
    _parent: t
  });
  return $.children && $.children.length && ($.children = Lt($.children, $, n)), $;
}), ko = (e, t) => {
  let n = 0, s;
  for (; (s = e[n++]) && t(s) !== !0; )
    s.children && s.children.length && ko(s.children, t);
}, Id = {
  topId: null,
  idKey: "id",
  pidKey: "pid",
  sortKey: ""
}, Bd = (e, t) => {
  const n = Z(Z({}, Id), t || {}), { topId: s, idKey: o, pidKey: r, sortKey: l } = n;
  let a = [], i = {};
  return e.forEach((p) => {
    p = Z({}, p);
    const { [o]: d, [r]: $ } = p, g = i[$] = i[$] || [];
    !a.length && $ === s && (a = g), g.push(p), p.children = i[d] || (i[d] = []);
  }), l && Object.keys(i).forEach((p) => {
    i[p].length > 1 && i[p].sort((d, $) => d[l] - $[l]);
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
    return ko(this.nodes, (s) => {
      if (s.value === t)
        return n = s, !0;
    }), n;
  }
  getPathNodesByValue(t) {
    if (!t.length)
      return [];
    const n = [];
    let s = this.nodes;
    for (; s && s.length; ) {
      const o = s.find((r) => r.value === t[r.level]);
      if (!o)
        break;
      n.push(o), s = o.children;
    }
    return n;
  }
  isLeaf(t, n) {
    const { leaf: s, children: o } = t, r = Array.isArray(o) && !!o.length;
    return s || !r && !n;
  }
  hasChildren(t, n) {
    if (this.isLeaf(t, n))
      return !1;
    const { children: o } = t;
    return Array.isArray(o) && !!o.length;
  }
}
const { create: Md } = Y("cascader-item"), Ld = Md({
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
    const n = ke(), s = D(() => ({
      lazy: e.lazy,
      lazyLoad: e.lazyLoad,
      valueKey: e.valueKey,
      textKey: e.textKey,
      childrenKey: e.childrenKey,
      convertConfig: e.convertConfig
    })), o = z(0), r = z(!1), l = z(e.modelValue), a = z(new In([], {})), i = z([]), p = D(() => s.value.lazy && !!s.value.lazyLoad), d = /* @__PURE__ */ new Map();
    let $;
    const g = () => Ge(this, null, function* () {
      d.clear(), i.value = [], o.value = 0, r.value = !1, $ = null;
      let { options: h } = e;
      s.value.convertConfig && (h = Bd(h, s.value.convertConfig)), a.value = new In(h, {
        value: s.value.valueKey,
        text: s.value.textKey,
        children: s.value.childrenKey
      }), p.value && !a.value.nodes.length && (yield v({
        root: !0,
        loading: !0,
        text: "",
        value: ""
      })), i.value = [{ nodes: a.value.nodes, selectedNode: null }], k();
    }), k = () => Ge(this, null, function* () {
      const h = l.value;
      if (h === void 0 || !a.value.nodes.length)
        return;
      if (h.length === 0) {
        o.value = 0, i.value = [{ nodes: a.value.nodes, selectedNode: null }];
        return;
      }
      let b = h;
      if (p.value && Array.isArray(h) && h.length) {
        b = [];
        let S = a.value.nodes.find((_) => _.value === h[0]);
        if (S) {
          b = [S.value], r.value = !0;
          const _ = yield h.slice(1).reduce((B, M) => Ge(this, null, function* () {
            var P;
            const C = yield B;
            yield v(C);
            const T = (P = C == null ? void 0 : C.children) == null ? void 0 : P.find((O) => O.value === M);
            return T && b.push(M), Promise.resolve(T);
          }), Promise.resolve(S));
          yield v(_), r.value = !1;
        }
      }
      b.length && h === e.modelValue && a.value.getPathNodesByValue(b).map((_, B) => {
        o.value = B, c.handleNode(_, !0);
      });
    }), v = (h) => Ge(this, null, function* () {
      if (!h)
        return;
      if (!s.value.lazyLoad) {
        h.leaf = !0;
        return;
      }
      if (a.value.isLeaf(h, p.value) || a.value.hasChildren(h, p.value))
        return;
      h.loading = !0;
      const b = h.root ? null : h;
      let S = d.get(h);
      S || (S = new Promise((B) => {
        var M, C;
        (C = (M = s.value).lazyLoad) == null || C.call(M, h, B);
      }), d.set(h, S));
      const _ = yield S;
      Array.isArray(_) && _.length > 0 ? a.value.updateChildren(_, b) : h.leaf = !0, h.loading = !1, d.delete(h);
    }), w = (h) => {
      const b = h.map((S) => S.value);
      l.value = b, t("change", b, h), t("update:modelValue", b, h);
    }, c = {
      // 选中一个节点，静默模式不触发事件
      handleNode(h, b) {
        return Ge(this, null, function* () {
          const { disabled: S, loading: _ } = h;
          if (!(!b && S || !i.value[o.value])) {
            if (a.value.isLeaf(h, p.value)) {
              if (h.leaf = !0, i.value[o.value].selectedNode = h, i.value = i.value.slice(0, h.level + 1), !b) {
                const B = i.value.map((M) => M.selectedNode);
                w(B), t("pathChange", B);
              }
              return;
            }
            if (a.value.hasChildren(h, p.value)) {
              const B = h.level + 1;
              if (i.value[o.value].selectedNode = h, i.value = i.value.slice(0, B), i.value.push({
                nodes: h.children || [],
                selectedNode: null
              }), o.value = B, !b) {
                const M = i.value.map((C) => C.selectedNode);
                t("pathChange", M);
              }
              return;
            }
            $ = h, !_ && (yield v(h), $ === h && (i.value[o.value].selectedNode = h, c.handleNode(h, b)));
          }
        });
      },
      handleTabClick(h) {
        $ = null, o.value = Number(h.paneKey);
      },
      formatTabTitle(h) {
        return h.selectedNode ? h.selectedNode.text : n("select");
      },
      isSelected(h, b) {
        var S;
        return ((S = h == null ? void 0 : h.selectedNode) == null ? void 0 : S.value) === b.value;
      }
    };
    return Q(
      [s, () => e.options],
      () => {
        g();
      },
      {
        deep: !0,
        immediate: !0
      }
    ), Q(
      () => e.modelValue,
      (h) => {
        h !== l.value && (l.value = h, k());
      }
    ), Q(
      () => e.visible,
      (h) => {
        h && Array.isArray(l.value) && l.value.length > 0 && k();
      }
    ), Z({ panes: i, initLoading: r, tabsCursor: o }, c);
  }
}), Ed = {
  role: "menu",
  class: "nut-cascader-pane"
}, Pd = ["aria-checked", "aria-disabled", "onClick"], Ad = { class: "nut-cascader-item__title" }, zd = /* @__PURE__ */ m("view", { class: "nut-cascader-pane" }, null, -1);
function Vd(e, t, n, s, o, r) {
  const l = W("Loading"), a = W("Checklist"), i = W("nut-tab-pane"), p = W("nut-tabs");
  return u(), ee(p, {
    modelValue: e.tabsCursor,
    "onUpdate:modelValue": t[0] || (t[0] = (d) => e.tabsCursor = d),
    class: "nut-cascader",
    "title-scroll": "",
    onClick: e.handleTabClick
  }, {
    default: ne(() => [
      !e.initLoading && e.panes.length ? (u(!0), f(x, { key: 0 }, ie(e.panes, (d, $) => (u(), ee(i, {
        key: $,
        title: e.formatTabTitle(d)
      }, {
        default: ne(() => [
          m("view", Ed, [
            (u(!0), f(x, null, ie(d.nodes, (g) => (u(), f("view", {
              key: g.value,
              class: L(["nut-cascader-item", { active: e.isSelected(d, g), disabled: g.disabled }]),
              "aria-checked": e.isSelected(d, g),
              "aria-disabled": g.disabled || void 0,
              role: "menuitemradio",
              onClick: (k) => e.handleNode(g, !1)
            }, [
              m("view", Ad, E(g.text), 1),
              g.loading ? (u(), ee(l, {
                key: 0,
                class: "nut-cascader-item__icon-loading",
                name: "loading"
              })) : (u(), ee(a, {
                key: 1,
                class: "nut-cascader-item__icon-check",
                name: "checklist"
              }))
            ], 10, Pd))), 128))
          ])
        ]),
        _: 2
      }, 1032, ["title"]))), 128)) : (u(), ee(i, {
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
const Od = /* @__PURE__ */ q(Ld, [["render", Vd]]), { create: Hd } = Y("cascader"), Rd = Hd({
  components: {
    NutCascaderItem: Od,
    NutPopup: Ee
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
    const n = z(e.modelValue), s = D({
      get() {
        return e.visible;
      },
      set(l) {
        t("update:visible", l);
      }
    }), o = (l, a) => {
      n.value = l, s.value = !1, t("change", l, a), t("update:modelValue", l);
    }, r = (l) => {
      t("pathChange", l);
    };
    return Q(
      () => e.modelValue,
      (l) => {
        l !== n.value && (n.value = l);
      }
    ), {
      onChange: o,
      onPathChange: r,
      innerValue: n,
      innerVisible: s
    };
  }
}), Fd = ["innerHTML"];
function Wd(e, t, n, s, o, r) {
  const l = W("nut-cascader-item"), a = W("nut-popup");
  return e.poppable ? (u(), ee(a, {
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
      e.title ? (u(), f("view", {
        key: 0,
        class: "nut-cascader__bar",
        innerHTML: e.title
      }, null, 8, Fd)) : N("", !0),
      oe(l, {
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
  }, 8, ["visible", "closeable", "close-icon-position", "z-index"])) : (u(), ee(l, {
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
    let s = (/* @__PURE__ */ new Date(e + "/" + t + "/01")).getDay();
    return s == 0 && (s = 7), s;
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
    const n = e.getFullYear(), s = this.getNumTwoBit(e.getMonth() + 1), o = this.getNumTwoBit(e.getDate());
    return [n, s, o].join(t);
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
    const n = new Date(e.replace("-", "/").replace("-", "/")), s = new Date(t.replace("-", "/").replace("-", "/"));
    return !(n >= s);
  },
  /**
   * 时间是否相等
   * @return {Boolean}
   */
  isEqual: function(e, t) {
    const n = new Date(e).getTime(), s = new Date(t).getTime();
    return n == s;
  },
  getMonthWeek: function(e, t, n, s = 0) {
    const o = new Date(Number(e), parseInt(t) - 1, Number(n));
    let r = o.getDay(), l = o.getDate(), a = 6 - r;
    return s !== 0 && (r = r == 0 ? 7 : r, a = 7 - r), Math.ceil((l + a) / 7);
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getYearWeek: function(e, t, n, s = 0) {
    const o = new Date(Number(e), parseInt(t) - 1, Number(n)), r = new Date(Number(e), 0, 1), l = Math.round((o.valueOf() - r.valueOf()) / 864e5);
    return Math.ceil((l + (r.getDay() + 1 - 1)) / 7);
  },
  getWeekDate: function(e, t, n, s = 0) {
    const o = new Date(Number(e), parseInt(t) - 1, Number(n)), r = o.getTime();
    let l = o.getDay();
    if (s === 0) {
      const i = r - l * 864e5, p = r + (6 - l) * 864e5, d = this.date2Str(new Date(i)), $ = this.date2Str(new Date(p));
      return [d, $];
    } else {
      l = l == 0 ? 7 : l;
      const a = 24 * 60 * 60 * 1e3, i = r - (l - 1) * a, p = r + (7 - l) * a, d = this.date2Str(new Date(i)), $ = this.date2Str(new Date(p));
      return [d, $];
    }
  },
  formatResultDate: function(e) {
    let t = [...e.split("-")];
    return t[2] = fe.getNumTwoBit(Number(t[2])), t[3] = `${t[0]}-${t[1]}-${t[2]}`, t[4] = fe.getWhatDay(+t[0], +t[1], +t[2]), t;
  }
}, { create: jd } = Y("calendar-item"), Ud = "NutCalendarItem", Kd = jd({
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
  setup(e, { emit: t, slots: n, expose: s }) {
    const o = ke(Ud), r = o("weekdays").map((H, J) => ({
      day: H,
      weekend: J === 0 || J === 6
    })), l = z([...r.slice(e.firstDayOfWeek, 7), ...r.slice(0, e.firstDayOfWeek)]), a = z(null), i = z(null), p = z(null), d = z(null), $ = z(0), g = D(() => c.monthsData.slice(c.defaultRange[0], c.defaultRange[1])), k = D(() => n.btn), v = D(() => n["top-info"]), w = D(() => n["bottom-info"]), c = ce({
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
    }), y = (H) => H.split("-"), h = (H) => fe.isEqual(c.currDate[0], H), b = (H) => fe.isEqual(c.currDate[1], H), S = (H) => {
      var J, ae;
      return ((J = c.currDate) == null ? void 0 : J.length) > 0 ? (ae = c.currDate) == null ? void 0 : ae.some((re) => fe.isEqual(re, H)) : !1;
    }, _ = (H, J) => J.curData[0] + "-" + J.curData[1] + "-" + fe.getNumTwoBit(+H.day), B = (H, J, ae) => {
      const re = [];
      typeof ae == "number" && ((ae + 1 + e.firstDayOfWeek) % 7 === 0 || (ae + e.firstDayOfWeek) % 7 === 0) && re.push("weekend");
      const me = _(H, J), { type: Ie } = e;
      return H.type == "curr" ? fe.isEqual(c.currDate, me) || (Ie == "range" || Ie == "week") && (h(me) || b(me)) || Ie == "multiple" && S(me) ? re.push(`${c.dayPrefix}--active`) : c.propStartDate && fe.compareDate(me, c.propStartDate) || c.propEndDate && fe.compareDate(c.propEndDate, me) || e.disabledDate && e.disabledDate(me) ? re.push(`${c.dayPrefix}--disabled`) : (Ie == "range" || Ie == "week") && Array.isArray(c.currDate) && Object.values(c.currDate).length == 2 && fe.compareDate(c.currDate[0], me) && fe.compareDate(me, c.currDate[1]) && re.push(`${c.dayPrefix}--choose`) : re.push(`${c.dayPrefix}--disabled`), re;
    }, M = () => {
      const { type: H } = e;
      if (H == "range" && c.chooseData.length == 2 || H != "range") {
        let J = c.chooseData.slice(0);
        if (H == "week") {
          if (c.chooseData.length !== 2)
            return;
          J = {
            weekDate: [T(c.chooseData[0]), T(c.chooseData[1])]
          };
        }
        t("choose", J), e.poppable && t("update");
      }
    }, C = (H, J, ae = !1) => {
      var re, me;
      if (!B(H, J).includes(`${c.dayPrefix}--disabled`)) {
        const { type: Ie } = e;
        let [He, Ue] = J.curData, $e = [...J.curData];
        if ($e[2] = fe.getNumTwoBit(Number(H.day)), $e[3] = `${$e[0]}-${$e[1]}-${$e[2]}`, $e[4] = fe.getWhatDay(+$e[0], +$e[1], +$e[2]), Ie == "multiple")
          if (((re = c.currDate) == null ? void 0 : re.length) > 0) {
            let Te;
            (me = c.currDate) == null || me.forEach((Re, Ve) => {
              Re == $e[3] && (Te = Ve);
            }), ae ? c.chooseData.push([...$e]) : Te !== void 0 ? (c.currDate.splice(Te, 1), c.chooseData.splice(Te, 1)) : (c.currDate.push($e[3]), c.chooseData.push([...$e]));
          } else
            c.currDate = [$e[3]], c.chooseData = [[...$e]];
        else if (Ie == "range") {
          let Te = Object.values(c.currDate).length;
          Te == 2 || Te == 0 ? c.currDate = [$e[3]] : fe.compareDate(c.currDate[0], $e[3]) ? Array.isArray(c.currDate) && c.currDate.push($e[3]) : Array.isArray(c.currDate) && c.currDate.unshift($e[3]), c.chooseData.length == 2 || !c.chooseData.length ? c.chooseData = [[...$e]] : fe.compareDate(c.chooseData[0][3], $e[3]) ? c.chooseData = [...c.chooseData, [...$e]] : c.chooseData = [[...$e], ...c.chooseData];
        } else if (Ie == "week") {
          let Te = fe.getWeekDate(He, Ue, H.day, e.firstDayOfWeek);
          c.propStartDate && fe.compareDate(Te[0], c.propStartDate) && Te.splice(0, 1, c.propStartDate), c.propEndDate && fe.compareDate(c.propEndDate, Te[1]) && Te.splice(1, 1, c.propEndDate), c.currDate = Te, c.chooseData = [fe.formatResultDate(Te[0]), fe.formatResultDate(Te[1])];
        } else
          c.currDate = $e[3], c.chooseData = [...$e];
        if (!ae) {
          let Te = c.chooseData;
          Ie == "week" && (Te = {
            weekDate: [
              T(c.chooseData[0]),
              T(c.chooseData[1])
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
      const J = H == "prev" ? c.monthsData[0] : c.monthsData[c.monthsData.length - 1];
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
      return J == "prev" && H >= 7 && (H -= 7), Array.from(Array(H), (Ie, He) => ({
        day: String(He + 1),
        type: J,
        year: re,
        month: me
      }));
    }, K = (H, J, ae, re) => {
      H = H - e.firstDayOfWeek;
      let { year: me, month: Ie } = ae;
      return J == "prev" && H >= 7 && (H -= 7), Array.from(Array(re), (Ue, $e) => ({
        day: String($e + 1),
        type: J,
        year: me,
        month: Ie
      })).slice(re - H);
    }, G = (H, J) => {
      const ae = fe.getMonthPreDay(+H[0], +H[1]);
      let re = Number(H[1]) - 1, me = Number(H[0]);
      re <= 0 && (re = 12, me += 1);
      const Ie = fe.getMonthDays(String(H[0]), String(H[1])), He = fe.getMonthDays(me + "", re + ""), Ue = {
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
            He
          ),
          ...O(Ie, "curr", Ue)
        ],
        cssHeight: 0,
        cssScrollHeight: 0
      };
      $e.cssHeight = 39 + ($e.monthData.length > 35 ? 384 : 320);
      let Te = 0;
      c.monthsData.length > 0 && (Te = c.monthsData[c.monthsData.length - 1].cssScrollHeight + c.monthsData[c.monthsData.length - 1].cssHeight), $e.cssScrollHeight = Te, J == "next" ? (!c.endData || !fe.compareDate(
        `${c.endData[0]}-${c.endData[1]}-${fe.getMonthDays(c.endData[0], c.endData[1])}`,
        `${H[0]}-${H[1]}-${H[2]}`
      )) && c.monthsData.push($e) : !c.startData || !fe.compareDate(
        `${H[0]}-${H[1]}-${H[2]}`,
        `${c.startData[0]}-${c.startData[1]}-01`
      ) ? c.monthsData.unshift($e) : c.unLoadPrev = !0;
    }, le = () => {
      let H = e.startDate ? e.startDate : fe.getDay(0), J = e.endDate ? e.endDate : fe.getDay(365);
      c.propStartDate = H, c.propEndDate = J, c.startData = y(H), c.endData = y(J), (e.defaultValue || Array.isArray(e.defaultValue) && e.defaultValue.length > 0) && (c.currDate = e.type !== "one" ? [...e.defaultValue] : e.defaultValue);
      const ae = {
        year: Number(c.startData[0]),
        month: Number(c.startData[1])
      }, re = {
        year: Number(c.endData[0]),
        month: Number(c.endData[1])
      };
      let me = re.month - ae.month;
      re.year - ae.year > 0 && (me = me + 12 * (re.year - ae.year)), me <= 0 && (me = 1), G(c.startData, "next");
      let Ie = 1;
      do
        G(P("next"), "next");
      while (Ie++ < me);
      if (c.monthsNum = me, e.type == "range" && Array.isArray(c.currDate))
        c.currDate.length > 0 && (H && fe.compareDate(c.currDate[0], H) && c.currDate.splice(0, 1, H), J && fe.compareDate(J, c.currDate[1]) && c.currDate.splice(1, 1, J), c.defaultData = [...y(c.currDate[0]), ...y(c.currDate[1])]);
      else if (e.type == "multiple" && Array.isArray(c.currDate)) {
        if (c.currDate.length > 0) {
          let Re = [], Ve = {};
          c.currDate.forEach((Ke) => {
            H && !fe.compareDate(Ke, H) && J && !fe.compareDate(J, Ke) && (Object.hasOwnProperty.call(Ve, Ke) || (Re.push(Ke), Ve[Ke] = Ke));
          }), c.currDate = [...Re], c.defaultData = [...y(Re[0])];
        }
      } else if (e.type == "week" && Array.isArray(c.currDate)) {
        if (c.currDate.length > 0) {
          let [Re, Ve, Ke] = y(c.currDate[0]), Ht = fe.getWeekDate(Re, Ve, Ke, e.firstDayOfWeek);
          c.currDate = Ht, H && fe.compareDate(c.currDate[0], H) && c.currDate.splice(0, 1, H), J && fe.compareDate(J, c.currDate[1]) && c.currDate.splice(1, 1, J), c.defaultData = [...y(c.currDate[0]), ...y(c.currDate[1])];
        }
      } else
        c.currDate && (H && fe.compareDate(c.currDate, H) ? c.currDate = H : J && !fe.compareDate(c.currDate, J) && (c.currDate = J), c.defaultData = [...y(c.currDate)]);
      let He = 0, Ue = 0;
      c.defaultData.length > 0 && c.monthsData.forEach((Re, Ve) => {
        Re.title == o("monthTitle", c.defaultData[0], c.defaultData[1]) && (He = Ve), (e.type == "range" || e.type == "week") && Re.title == o("monthTitle", c.defaultData[3], c.defaultData[4]) && (Ue = Ve);
      }), R(me, He), c.currentIndex = He, c.yearMonthTitle = c.monthsData[c.currentIndex].title, c.defaultData.length > 0 && (c.isRange ? (C({ day: c.defaultData[2], type: "curr" }, c.monthsData[c.currentIndex], !0), C({ day: c.defaultData[5], type: "curr" }, c.monthsData[Ue], !0)) : e.type == "week" ? C({ day: c.defaultData[2], type: "curr" }, c.monthsData[c.currentIndex], !0) : e.type == "multiple" ? [...c.currDate].forEach((Re) => {
        let Ve = y(Re), Ke = c.currentIndex;
        c.monthsData.forEach((Ht, Xo) => {
          Ht.title == o("monthTitle", Ve[0], Ve[1]) && (Ke = Xo);
        }), C({ day: Ve[2], type: "curr" }, c.monthsData[Ke], !0);
      }) : C({ day: c.defaultData[2], type: "curr" }, c.monthsData[c.currentIndex], !0));
      let $e = c.monthsData[c.monthsData.length - 1], Te = $e.cssHeight + $e.cssScrollHeight;
      Oe(() => {
        a != null && a.value && (i != null && i.value) && (d != null && d.value) && ($.value = a.value.clientHeight, i.value.style.height = `${Te}px`, a.value.scrollTop = c.monthsData[c.currentIndex].cssScrollHeight);
      }), c.avgHeight = Math.floor(Te / (me + 1));
    };
    s({
      scrollToDate: (H) => {
        fe.compareDate(H, c.propStartDate) ? H = c.propStartDate : fe.compareDate(H, c.propEndDate) || (H = c.propEndDate);
        let J = y(H);
        c.monthsData.forEach((ae, re) => {
          if (ae.title == o("monthTitle", J[0], J[1]) && a.value) {
            let me = c.monthsData[re].cssScrollHeight - a.value.scrollTop;
            if (e.toDateAnimation) {
              let Ie = 0, He = setInterval(() => {
                if (Ie++, a.value) {
                  let Ue = me / 10;
                  a.value.scrollTop = a.value.scrollTop + Ue;
                }
                Ie >= 10 && (clearInterval(He), a.value && (a.value.scrollTop = c.monthsData[re].cssScrollHeight));
              }, 40);
            } else
              a.value.scrollTop = c.monthsData[re].cssScrollHeight;
          }
        });
      },
      initPosition: () => {
        a != null && a.value && (a.value.scrollTop = c.monthsData[c.currentIndex].cssScrollHeight);
      }
    });
    const R = (H, J) => {
      H >= 3 ? J > 0 && J < H ? c.defaultRange = [J - 1, J + 3] : J == 0 ? c.defaultRange = [J, J + 4] : J == H && (c.defaultRange = [J - 2, J + 2]) : c.defaultRange = [0, H + 2];
      let ae = c.monthsData[c.defaultRange[0]].cssScrollHeight;
      c.translateY = ae;
    }, te = (H, J) => (e.type == "range" || e.type == "week") && H.type == "curr" && B(H, J).includes("nut-calendar__day--active"), X = (H, J) => te(H, J) && h(_(H, J)), se = (H, J) => c.currDate.length >= 2 && b(_(H, J)) ? te(H, J) : !1, ue = () => {
      if (c.currDate.length >= 2)
        return fe.isEqual(c.currDate[0], c.currDate[1]);
    }, pe = (H) => {
      const J = `${H.year}-${H.month}-${Number(H.day) < 10 ? "0" + H.day : H.day}`;
      return fe.isEqual(J, fe.date2Str(/* @__PURE__ */ new Date()));
    }, we = (H) => {
      if (c.monthsData.length <= 1)
        return;
      const J = H.target.scrollTop;
      let ae = Math.floor(J / c.avgHeight);
      if (ae == 0)
        J >= c.monthsData[ae + 1].cssScrollHeight && (ae += 1);
      else if (ae > 0 && ae < c.monthsNum - 1)
        J >= c.monthsData[ae + 1].cssScrollHeight && (ae += 1), J < c.monthsData[ae].cssScrollHeight && (ae -= 1);
      else {
        const re = Math.round(J + $.value);
        re < c.monthsData[ae].cssScrollHeight + c.monthsData[ae].cssHeight && J > c.monthsData[ae - 1].cssScrollHeight && (ae -= 1), ae + 1 <= c.monthsNum && re >= c.monthsData[ae + 1].cssScrollHeight + c.monthsData[ae + 1].cssHeight && (ae += 1), ae >= 1 && J < c.monthsData[ae - 1].cssScrollHeight && (ae -= 1);
      }
      c.currentIndex !== ae && (c.currentIndex = ae, R(c.monthsNum, ae)), c.yearMonthTitle = c.monthsData[ae].title;
    }, _e = () => {
      c.chooseData.splice(0), c.monthsData.splice(0), le();
    };
    return ve(() => {
      le();
    }), Q(
      () => e.defaultValue,
      (H) => {
        H && e.poppable && _e();
      }
    ), de(Z(Z({
      weeks: l,
      compConthsData: g,
      showTopBtn: k,
      topInfo: v,
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
    }, he(c)), he(e)), {
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
function uf(e, t, n, s, o, r) {
  return u(), f("view", {
    class: L(["nut-calendar", {
      "nut-calendar--nopop": !e.poppable,
      "nut-calendar--nofooter": e.isAutoBackFill
    }])
  }, [
    m("view", Xd, [
      e.showTitle ? (u(), f("view", qd, E(e.title || e.translate("title")), 1)) : N("", !0),
      e.showTopBtn ? (u(), f("view", Zd, [
        I(e.$slots, "btn")
      ])) : N("", !0),
      e.showSubTitle ? (u(), f("view", Gd, E(e.yearMonthTitle), 1)) : N("", !0),
      m("view", Jd, [
        (u(!0), f(x, null, ie(e.weeks, (l, a) => (u(), f("view", {
          key: a,
          class: L(["nut-calendar__weekday", { weekend: l.weekend }])
        }, E(l.day), 3))), 128))
      ], 512)
    ]),
    m("view", {
      ref: "months",
      class: "nut-calendar__content",
      onScroll: t[0] || (t[0] = (...l) => e.mothsViewScroll && e.mothsViewScroll(...l))
    }, [
      m("view", Qd, [
        m("view", {
          ref: "viewArea",
          class: "nut-calendar__body",
          style: A({ transform: `translateY(${e.translateY}px)` })
        }, [
          (u(!0), f(x, null, ie(e.compConthsData, (l, a) => (u(), f("view", {
            key: a,
            class: "nut-calendar__month"
          }, [
            m("view", xd, E(l.title), 1),
            m("view", ef, [
              m("view", {
                class: L(["nut-calendar__days-item", e.type === "range" ? "nut-calendar__days-item--range" : ""])
              }, [
                (u(!0), f(x, null, ie(l.monthData, (i, p) => (u(), f("view", {
                  key: p,
                  class: L(["nut-calendar__day", e.getClass(i, l, p)]),
                  onClick: (d) => e.chooseDay(i, l)
                }, [
                  m("view", nf, [
                    I(e.$slots, "day", {
                      date: i.type == "curr" ? i : ""
                    }, () => [
                      ge(E(i.type == "curr" ? i.day : ""), 1)
                    ])
                  ]),
                  e.topInfo ? (u(), f("view", of, [
                    I(e.$slots, "top-info", {
                      date: i.type == "curr" ? i : ""
                    })
                  ])) : N("", !0),
                  e.bottomInfo ? (u(), f("view", lf, [
                    I(e.$slots, "bottom-info", {
                      date: i.type == "curr" ? i : ""
                    })
                  ])) : N("", !0),
                  !e.bottomInfo && e.showToday && e.isCurrDay(i) ? (u(), f("view", sf, E(e.translate("today")), 1)) : N("", !0),
                  e.isStartTip(i, l) ? (u(), f("view", {
                    key: 3,
                    class: L(["nut-calendar__day-tip", { "nut-calendar__day-tips--top": e.rangeTip() }])
                  }, E(e.startText || e.translate("start")), 3)) : N("", !0),
                  e.isEndTip(i, l) ? (u(), f("view", af, E(e.endText || e.translate("end")), 1)) : N("", !0)
                ], 10, tf))), 128))
              ], 2)
            ])
          ]))), 128))
        ], 4)
      ], 512)
    ], 544),
    e.poppable && !e.isAutoBackFill ? (u(), f("view", rf, [
      I(e.$slots, "footer-info", { date: e.chooseData }, () => [
        m("view", {
          class: "nut-calendar__confirm",
          onClick: t[1] || (t[1] = (...l) => e.confirm && e.confirm(...l))
        }, E(e.confirmText || e.translate("confirm")), 1)
      ])
    ])) : N("", !0)
  ], 2);
}
const Co = /* @__PURE__ */ q(Kd, [["render", uf]]), { create: cf } = Y("calendar"), df = cf({
  components: {
    NutCalendarItem: Co,
    NutPopup: Ee
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
  setup(e, { emit: t, slots: n, expose: s }) {
    const o = D({
      get() {
        return e.visible;
      },
      set(b) {
        t("update:visible", b);
      }
    }), r = D(() => n.btn), l = D(() => n["top-info"]), a = D(() => n.day), i = D(() => n["bottom-info"]), p = D(() => n["footer-info"]), d = z(null);
    s({
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
    }, v = () => {
      t("close"), t("update:visible", !1);
    };
    return {
      visible: o,
      closePopup: () => {
        v();
      },
      opened: () => {
        var b;
        (b = d.value) == null || b.initPosition();
      },
      update: k,
      close: v,
      select: (b) => {
        t("select", b);
      },
      choose: (b) => {
        v(), t("choose", b);
      },
      calendarRef: d,
      showTopBtn: r,
      topInfo: l,
      dayInfo: a,
      bottomInfo: i,
      footerInfo: p
    };
  }
});
function ff(e, t, n, s, o, r) {
  const l = W("nut-calendar-item"), a = W("nut-popup");
  return e.poppable ? (u(), ee(a, wt({
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
      oe(l, {
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
  }, 16, ["visible", "lock-scroll", "onOpened"])) : (u(), ee(l, {
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
} : null, qt = (e) => e ? new Date(e.year, e.month - 1, e.date) : null, Bn = (e) => Array.isArray(e) ? e.map((t) => ot(t)) : e ? [ot(e)] : [], vf = (e) => Array.isArray(e) ? e.map((t) => qt(t)) : e ? [qt(e)] : [], $f = (e, t, n) => {
  let s = t - 1, o = e;
  s <= 0 && (s = 12, o -= 1);
  let r = fe.getMonthPreDay(e, t);
  r -= n, r >= 7 && (r -= 7);
  const l = fe.getMonthDays(`${o}`, `${s}`);
  return Array.from(Array(l), (i, p) => ({
    type: "prev",
    year: o,
    month: s,
    date: p + 1
  })).slice(l - r);
}, bf = (e, t) => {
  const n = fe.getMonthDays(`${e}`, `${t}`);
  return Array.from(Array(n), (s, o) => ({
    type: "current",
    year: e,
    month: t,
    date: o + 1
  }));
}, wf = (e, t) => {
  const n = new Date(e.year, e.month - 1, e.date), s = (n.getDay() + 7 - t) % 7;
  return [
    ot(new Date(n.getTime() - 24 * 60 * 60 * 1e3 * s)),
    ot(new Date(n.getTime() + 24 * 60 * 60 * 1e3 * (6 - s)))
  ];
}, kf = (e, t) => {
  const n = e.year, s = e.month, o = [...$f(n, s, t), ...bf(n, s)], r = o.length, l = e.month === 12 ? e.year + 1 : e.year, a = e.month === 12 ? 1 : e.month + 1;
  for (let i = 1; i <= 42 - r; i++)
    o.push({
      type: "next",
      year: l,
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
    const s = e, o = n, r = ke(Mn), a = z((() => {
      let B = new Date(Date.now());
      const M = s.modelValue;
      return Array.isArray(M) ? M.length && (B = M[0]) : M && (B = M), {
        year: B.getFullYear(),
        month: B.getMonth() + 1
      };
    })()), i = z([]), p = D(() => {
      const B = r("weekdays").map((M, C) => ({
        name: M,
        key: C
      }));
      return [...B.slice(s.firstDayOfWeek, 7), ...B.slice(0, s.firstDayOfWeek)];
    }), d = z(s.modelValue ? Bn(s.modelValue) : []);
    bt(() => {
      const B = s.modelValue ? Bn(s.modelValue) : [];
      d.value = B;
    });
    const $ = (B) => {
      if (d.value = B, s.type === "single") {
        const M = qt(B[0]);
        o("update:modelValue", M), o("change", M);
      } else if (s.type === "multiple" || s.type === "range" || s.type === "week") {
        const M = vf(B);
        o("update:modelValue", M), o("change", M);
      }
    };
    bt(() => {
      const B = kf(a.value, s.firstDayOfWeek);
      i.value = B, o("pageChange", a.value);
    });
    const g = (B) => !!(s.disableDay && s.disableDay(B) || s.startDate && Number(nt(B, ot(s.startDate))) < 0 || s.endDate && Number(nt(B, ot(s.endDate))) > 0), k = (B) => {
      if (s.type === "single" || s.type === "multiple") {
        for (const M in d.value)
          if (rt(B, d.value[M]))
            return !0;
      } else if (s.type === "range" && d.value.length === 1 && rt(d.value[0], B))
        return !0;
      return !1;
    }, v = (B) => (s.type === "range" || s.type === "week") && d.value.length === 2 && rt(B, d.value[0]), w = (B) => (s.type === "range" || s.type === "week") && d.value.length === 2 && rt(B, d.value[1]), c = (B) => {
      if ((s.type === "range" || s.type === "week") && d.value.length === 2) {
        const M = nt(d.value[0], B), C = nt(B, d.value[1]);
        if (M && M < 0 && C && C < 0)
          return !0;
      }
      return !1;
    }, y = (B) => {
      const M = new Date(B.year, B.month - 1, B.date).getDay();
      return M === 0 || M === 6;
    }, h = (B) => {
      if (g(B))
        return ["disabled"];
      const M = [];
      return B.type === "current" && (k(B) && M.push("active"), v(B) && M.push("start"), w(B) && M.push("end"), c(B) && M.push("mid"), y(B) && M.push("weekend")), M;
    }, b = (B, M) => {
      if (s.startDate) {
        const C = nt(
          {
            year: B,
            month: M,
            date: 31
          },
          ot(s.startDate)
        );
        if (C && C < 0)
          return;
      }
      if (s.endDate) {
        const C = nt(
          {
            year: B,
            month: M,
            date: 1
          },
          ot(s.endDate)
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
        switch (o("dayClick", B), s.type) {
          case "single": {
            d.value[0] && rt(d.value[0], B) ? $([]) : $([B]);
            break;
          }
          case "multiple": {
            const M = d.value.find((C) => rt(C, B));
            $(M ? d.value.filter((C) => C !== M) : [...d.value, B]);
            break;
          }
          case "range": {
            const M = d.value.length;
            if (M === 0 || M === 2)
              $([B]);
            else if (M === 1) {
              const C = nt(d.value[0], B);
              C === 0 || C === null || C === void 0 ? $([]) : C < 0 ? $([d.value[0], B]) : $([B, d.value[0]]);
            } else
              console.warn("[NutUI] Calendar range error");
            break;
          }
          case "week": {
            if (d.value.length === 2 || d.value.length === 0) {
              const [M, C] = wf(B, s.firstDayOfWeek);
              $([M, C]);
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
    }), (B, M) => Ce((u(), f("div", Cf, [
      m("div", Sf, [
        m("div", Tf, [
          m("div", {
            class: "double-left",
            onClick: M[0] || (M[0] = (C) => S(-12))
          }, [
            oe(Fe(gf))
          ]),
          m("div", {
            class: "left",
            onClick: M[1] || (M[1] = (C) => S(-1))
          }, [
            oe(Fe(mf))
          ])
        ]),
        m("div", Nf, E(Fe(r)("monthTitle", a.value.year, a.value.month)), 1),
        m("div", Df, [
          m("div", {
            class: "right",
            onClick: M[2] || (M[2] = (C) => S(1))
          }, [
            oe(Fe(hf))
          ]),
          m("div", {
            class: "double-right",
            onClick: M[3] || (M[3] = (C) => S(12))
          }, [
            oe(Fe(yf))
          ])
        ])
      ]),
      m("div", _f, [
        m("div", If, [
          (u(!0), f(x, null, ie(p.value, (C) => (u(), f("div", {
            key: C.name,
            class: L(["nut-calendarcard-day header", C.key === 0 || C.key === 6 ? "weekend" : ""])
          }, E(C.name), 3))), 128))
        ]),
        m("div", Bf, [
          (u(!0), f(x, null, ie(i.value, (C) => (u(), f("div", {
            key: `${C.year}-${C.month}-${C.date}`,
            class: L(["nut-calendarcard-day", [C.type, ...h(C)]]),
            onClick: (T) => _(C)
          }, [
            m("div", Lf, [
              I(B.$slots, "top", { day: C })
            ]),
            m("div", Ef, [
              I(B.$slots, "default", { day: C }, () => [
                ge(E(C.date), 1)
              ])
            ]),
            m("div", Pf, [
              I(B.$slots, "bottom", { day: C })
            ])
          ], 10, Mf))), 128))
        ])
      ])
    ], 512)), [
      [Ne, i.value.length > 0]
    ]);
  }
});
je(So);
const To = Symbol("nut-checkbox"), { create: Af, componentName: tt } = Y("checkbox"), zf = Af({
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
    const s = Ze(xe(e, "disabled")), o = Me(To, null), r = ce({
      partialSelect: e.indeterminate
    }), l = D(() => !!o), a = D(() => l.value ? o.value.value.includes(e.label) : e.modelValue), i = D(() => l.value && o.disabled.value ? o.disabled.value : s.value), p = D(() => !!e.modelValue), d = D(() => i.value ? "nut-checkbox__icon--disable" : r.partialSelect ? "nut-checkbox__icon--indeterminate" : a.value ? "nut-checkbox__icon" : "nut-checkbox__icon--unchecked");
    let $ = "";
    const g = (y, h) => {
      $ = "click", t("update:modelValue", y), t("change", y, h);
    };
    Q(
      () => e.modelValue,
      (y) => {
        $ == "click" ? $ = "" : t("change", y);
      }
    );
    const k = () => {
      const { iconSize: y } = e, h = {
        CheckNormal: n.icon ? n.icon : Ut,
        Checked: n.checkedIcon ? n.checkedIcon : Zn,
        CheckDisabled: n.indeterminate ? n.indeterminate : Ml
      }, b = r.partialSelect ? h.CheckDisabled : a.value ? h.Checked : h.CheckNormal, S = Be(y);
      return be(b, {
        width: S,
        height: S,
        size: S,
        class: d.value
      });
    }, v = () => {
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
    }, c = () => {
      var y, h;
      if (!i.value) {
        if (p.value && r.partialSelect) {
          r.partialSelect = !1, g(p.value, (y = n.default) == null ? void 0 : y.call(n)[0].children);
          return;
        }
        if (g(!p.value, (h = n.default) == null ? void 0 : h.call(n)[0].children), l.value) {
          const b = o.value.value, S = o.max.value, { label: _ } = e, B = b.indexOf(_);
          B > -1 ? b.splice(B, 1) : B <= -1 && (b.length < S || !S) && b.push(_), o.updateValue(b);
        }
      }
    };
    return ve(() => {
      l.value && o.link(Ye());
    }), Qt(() => {
      l.value && o.unlink(Ye());
    }), Q(
      () => e.indeterminate,
      (y) => {
        r.partialSelect = y;
      }
    ), () => be(
      "view",
      {
        class: `${tt} ${tt}--${e.shape} ${e.textPosition === "left" ? `${tt}--reverse` : ""}`,
        onClick: c
      },
      [e.shape == "button" ? w() : [k(), v()]]
    );
  }
}), { create: Vf, componentName: Of } = Y("checkbox-group"), Hf = Vf({
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
  setup(e, { slots: t, emit: n, expose: s }) {
    const o = ce({
      children: []
    }), r = (d) => {
      d.proxy && o.children.push(d.proxy);
    }, l = (d) => {
      d.proxy && (o.children = o.children.filter(($) => $ !== d.proxy));
    }, a = (d) => {
      n("update:modelValue", d), n("change", d);
    }, i = (d) => {
      const $ = [];
      d && o.children.forEach((g) => {
        g != null && g.disabled || $.push(g == null ? void 0 : g.label);
      }), n("update:modelValue", $);
    }, p = () => {
      const d = o.children.filter(($) => $ != null && $.disabled ? !1 : !e.modelValue.includes($.label)).map(($) => $.label);
      n("update:modelValue", d);
    };
    return Le(To, {
      value: D(() => e.modelValue),
      disabled: D(() => e.disabled),
      max: D(() => e.max),
      updateValue: a,
      link: r,
      unlink: l
    }), Q(
      () => e.modelValue,
      (d) => {
        n("change", d);
      }
    ), s({ toggleAll: i, toggleReverse: p }), () => {
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
  }), s = D(() => Z(Z({}, Rf), e.fieldNames)), o = z([]), r = D(() => {
    const c = s.value;
    return d.value.map((y, h) => {
      const b = y.findIndex((S) => S[c.value] === o.value[h]);
      return b === -1 ? 0 : b;
    });
  }), l = z([]), a = (c) => {
    c && l.value.length < d.value.length && l.value.push(c);
  }, i = D(() => {
    const c = s.value;
    return d.value.map((y, h) => y.find((b) => b[c.value] === o.value[h]) || y[0]);
  }), p = D(() => {
    const c = n.formattedColumns[0], y = s.value;
    if (c) {
      if (Array.isArray(c))
        return "multiple";
      if (y.children in c)
        return "cascade";
    }
    return "single";
  }), d = D(() => {
    let c = [];
    switch (p.value) {
      case "multiple":
        c = n.formattedColumns;
        break;
      case "cascade":
        c = $(
          n.formattedColumns,
          o.value ? o.value : []
        );
        break;
      default:
        c = [n.formattedColumns];
        break;
    }
    return c;
  }), $ = (c, y) => {
    const h = [], b = s.value;
    let S = {
      text: "",
      value: "",
      [b.children]: c
    }, _ = 0;
    for (; S && S[b.children]; ) {
      const B = S[b.children], M = y[_];
      let C = B.findIndex((T) => T[b.value] === M);
      C === -1 && (C = 0), S = S[b.children][C], _++, h.push(B);
    }
    return h;
  }, g = () => {
    t("cancel", {
      selectedValue: o.value,
      selectedOptions: i.value
    });
  }, k = (c, y) => {
    var b;
    const h = s.value;
    if (y && Object.keys(y).length) {
      if (o.value = o.value ? o.value : [], p.value === "cascade") {
        o.value[c] = (b = y[h.value]) != null ? b : "";
        let S = c, _ = y;
        for (; _ && _[h.children] && _[h.children][0]; )
          o.value[S + 1] = _[h.children][0][h.value], S++, _ = _[h.children][0];
        _ && _[h.children] && _[h.children].length === 0 && (o.value = o.value.slice(0, S + 1));
      } else
        o.value[c] = Object.prototype.hasOwnProperty.call(y, h.value) ? y[h.value] : "";
      t("change", {
        columnIndex: c,
        selectedValue: o.value,
        selectedOptions: i.value
      });
    }
  }, v = () => {
    const c = s.value;
    o.value && !o.value.length && d.value.forEach((y) => {
      o.value.push(y[0][c.value]);
    }), t("confirm", {
      selectedValue: o.value,
      selectedOptions: i.value
    });
  }, w = (c, y) => JSON.stringify(c) === JSON.stringify(y);
  return Q(
    () => e.modelValue,
    (c) => {
      w(c, o.value) || (o.value = c);
    },
    { deep: !0, immediate: !0 }
  ), Q(
    o,
    (c) => {
      w(c, e.modelValue) || t("update:modelValue", c);
    },
    { deep: !0 }
  ), Q(
    () => e.columns,
    (c) => {
      n.formattedColumns = c;
    }
  ), de(Z({}, he(n)), {
    columnsType: p,
    columnsList: d,
    columnFieldNames: s,
    cancel: g,
    changeHandler: k,
    confirm: v,
    defaultValues: o,
    defaultIndexes: r,
    pickerColumn: l,
    swipeRef: a,
    selectedOptions: i,
    isSameValue: w
  });
}, { create: Wf } = Y("picker-column"), Yf = Wf({
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
    const n = et(), s = ce({
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
    }), o = z(null), r = z(!1), l = z(0), a = z(0), i = 200, p = 300, d = 15, $ = D(() => ({
      transition: `transform ${a.value}ms cubic-bezier(0.17, 0.89, 0.45, 1)`,
      transform: `rotate3d(1, 0, 0, ${l.value})`,
      top: `calc(50% - ${+e.optionHeight / 2}px)`
    })), g = D(() => {
      const { optionHeight: T } = e;
      return {
        transition: `transform ${a.value}ms cubic-bezier(0.17, 0.89, 0.45, 1)`,
        transform: `translate3d(0, ${s.scrollDistance}px, 0)`,
        top: `calc(50% - ${+T / 2}px)`,
        height: `${T}px`
      };
    }), k = (T) => `transform: rotate3d(1, 0, 0, ${-s.rotation * T}deg) translate3d(0px, 0px, 104px)`, v = D(() => ({
      backgroundSize: `100% ${(+e.visibleOptionNum - 1) * +e.optionHeight / 2}px`
    })), w = (T) => {
      if (n.start(T), r.value && !e.taro) {
        const P = o.value, { transform: O } = window.getComputedStyle(P);
        if (e.threeDimensional) {
          const K = Math.floor(parseInt(l.value) / 360), G = +O.split(", ")[5], le = +O.split(", ")[6] < 0 ? 180 : 0, j = K * 360 + Math.acos(G) / Math.PI * 180 + le;
          s.scrollDistance = -Math.abs((j / s.rotation - 1) * +e.optionHeight);
        } else
          s.scrollDistance = +O.slice(7, O.length - 1).split(", ")[5];
      }
      dt(T, !0), s.touchParams.startY = n.deltaY.value, s.touchParams.startTime = Date.now(), s.transformY = s.scrollDistance;
    }, c = (T) => {
      n.move(T), n.isVertical() && (r.value = !0, dt(T, !0)), s.touchParams.lastY = n.deltaY.value;
      let P = s.touchParams.lastY - s.touchParams.startY;
      _(P);
    }, y = () => {
      s.touchParams.lastY = n.deltaY.value, s.touchParams.lastTime = Date.now();
      let T = s.touchParams.lastY - s.touchParams.startY, P = s.touchParams.lastTime - s.touchParams.startTime;
      if (P <= p && Math.abs(T) > d) {
        const O = h(T, P);
        _(O, "end", +e.swipeDuration);
        return;
      } else
        _(T, "end");
      setTimeout(() => {
        n.reset(), r.value = !1;
      }, 0);
    }, h = (T, P) => (T = Math.abs(T / P) / 3e-3 * (T < 0 ? -1 : 1), T), b = (T) => T >= s.currIndex + 8 || T <= s.currIndex - 8, S = (T = 0, P, O = i, K) => {
      P === "end" ? a.value = O : a.value = 0, l.value = K, s.scrollDistance = T;
    }, _ = (T, P, O) => {
      const { optionHeight: K } = e;
      let G = T + s.transformY;
      if (P === "end") {
        G > 0 && (G = 0), G < -(e.column.length - 1) * +K && (G = -(e.column.length - 1) * +K);
        let le = Math.round(G / +K) * +K, j = `${(Math.abs(Math.round(le / +K)) + 1) * s.rotation}deg`;
        S(le, P, O, j), s.currIndex = Math.abs(Math.round(le / +K)) + 1;
      } else {
        let le = 0, j = (-G / +K + 1) * s.rotation;
        const U = (e.column.length + 1) * s.rotation, R = 0;
        le = Ae(j, R, U), R < le && le < U && (S(G, null, void 0, le + "deg"), s.currIndex = Math.abs(Math.round(G / +K)) + 1);
      }
    }, B = () => {
      t("change", e.column[s.currIndex - 1]);
    }, M = (T) => {
      const { column: P } = e;
      let O = P.findIndex((G) => G[e.fieldNames.value] === e.value);
      s.currIndex = O === -1 ? 1 : O + 1;
      let K = O === -1 ? 0 : O * +e.optionHeight;
      T && B(), _(-K);
    }, C = () => {
      r.value = !1, a.value = 0, B();
    };
    return Q(
      () => e.column,
      () => {
        e.column && e.column.length > 0 && (s.transformY = 0, M(!1));
      },
      {
        deep: !0
      }
    ), Q(
      () => e.value,
      () => {
        s.transformY = 0, M(!1);
      },
      {
        deep: !0
      }
    ), ve(() => {
      M(!0);
    }), de(Z(Z({}, he(s)), he(e)), {
      setRollerStyle: k,
      isHidden: b,
      roller: o,
      onTouchStart: w,
      onTouchMove: c,
      onTouchEnd: y,
      touchRollerStyle: $,
      touchTileStyle: g,
      setMove: _,
      stopMomentum: C,
      pxCheck: Be,
      maskStyles: v
    });
  }
});
function jf(e, t, n, s, o, r) {
  return u(), f("view", {
    class: "nut-picker__list",
    onTouchstart: t[1] || (t[1] = (...l) => e.onTouchStart && e.onTouchStart(...l)),
    onTouchmove: t[2] || (t[2] = (...l) => e.onTouchMove && e.onTouchMove(...l)),
    onTouchend: t[3] || (t[3] = (...l) => e.onTouchEnd && e.onTouchEnd(...l))
  }, [
    m("view", {
      ref: "roller",
      class: "nut-picker-roller",
      style: A(e.threeDimensional ? e.touchRollerStyle : e.touchTileStyle),
      onTransitionend: t[0] || (t[0] = (...l) => e.stopMomentum && e.stopMomentum(...l))
    }, [
      (u(!0), f(x, null, ie(e.column, (l, a) => {
        var i;
        return u(), f(x, {
          key: (i = l[e.fieldNames.value]) != null ? i : a
        }, [
          l && l[e.fieldNames.text] && e.threeDimensional ? (u(), f("view", {
            key: 0,
            class: L(["nut-picker-roller-item", {
              "nut-picker-roller-item-hidden": e.isHidden(a + 1),
              [l[e.fieldNames.className]]: l[e.fieldNames.className]
            }]),
            style: A(e.setRollerStyle(a + 1))
          }, E(l[e.fieldNames.text]), 7)) : N("", !0),
          l && l[e.fieldNames.text] && !e.threeDimensional ? (u(), f("view", {
            key: 1,
            class: L(["nut-picker-roller-item-tile", {
              [l[e.fieldNames.className]]: l[e.fieldNames.className]
            }]),
            style: A({ height: e.pxCheck(e.optionHeight), lineHeight: e.pxCheck(e.optionHeight) })
          }, E(l[e.fieldNames.text]), 7)) : N("", !0)
        ], 64);
      }), 128))
    ], 36),
    m("view", {
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
}, { create: Xf } = Y("picker"), qf = "NutPicker", Zf = Xf({
  components: {
    NutPickerColumn: Uf
  },
  props: Kf,
  emits: ["cancel", "change", "confirm", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = ke(qf), { changeHandler: s, confirm: o, defaultValues: r, columnsList: l, columnsType: a, columnFieldNames: i, cancel: p } = Ff(
      e,
      t
    ), d = z([]), $ = (v) => {
      v && d.value.length < l.value.length && d.value.push(v);
    }, g = D(() => {
      const v = {};
      return v.height = `${+e.visibleOptionNum * +e.optionHeight}px`, v["--lineHeight"] = `${+e.optionHeight}px`, v;
    });
    return {
      columnsType: a,
      columnsList: l,
      columnFieldNames: i,
      cancel: p,
      changeHandler: s,
      confirmHandler: () => {
        d.value.length > 0 && d.value.forEach((v) => {
          v.stopMomentum();
        }), o();
      },
      defaultValues: r,
      translate: n,
      pickerColumn: d,
      swipeRef: $,
      columnStyle: g
    };
  }
}), Gf = { class: "nut-picker" }, Jf = {
  key: 0,
  class: "nut-picker__bar"
}, Qf = { class: "nut-picker__title" };
function xf(e, t, n, s, o, r) {
  const l = W("nut-picker-column");
  return u(), f("div", Gf, [
    e.showToolbar ? (u(), f("view", Jf, [
      m("view", {
        class: "nut-picker__left",
        onClick: t[0] || (t[0] = (...a) => e.cancel && e.cancel(...a))
      }, E(e.cancelText || e.translate("cancel")), 1),
      m("view", Qf, E(e.title), 1),
      m("view", {
        class: "nut-picker__right",
        onClick: t[1] || (t[1] = (...a) => e.confirmHandler && e.confirmHandler(...a))
      }, E(e.okText || e.translate("confirm")), 1)
    ])) : N("", !0),
    I(e.$slots, "top"),
    m("view", {
      class: "nut-picker__column",
      style: A(e.columnStyle)
    }, [
      (u(!0), f(x, null, ie(e.columnsList, (a, i) => (u(), f("view", {
        key: i,
        class: "nut-picker__columnitem"
      }, [
        oe(l, {
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
const No = /* @__PURE__ */ q(Zf, [["render", xf]]), { create: ep } = Y("date-picker"), Ln = (/* @__PURE__ */ new Date()).getFullYear();
function Wt(e) {
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
      validator: Wt
    },
    maxDate: {
      type: Date,
      default: () => new Date(Ln + 10, 11, 31),
      validator: Wt
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
    }), s = (c) => {
      Wt(c) || (c = e.minDate);
      let y = Math.max(c.getTime(), e.minDate.getTime());
      return y = Math.min(y, e.maxDate.getTime()), new Date(y);
    };
    function o(c, y) {
      return 32 - new Date(c, y - 1, 32).getDate();
    }
    const r = (c, y) => {
      const h = c == "min" ? e.minDate : e.maxDate, b = h.getFullYear();
      let S = 1, _ = 1, B = 0, M = 0;
      c === "max" && (S = 12, _ = o(y.getFullYear(), y.getMonth() + 1), B = 23, M = 59);
      let C = M;
      return y.getFullYear() === b && (S = h.getMonth() + 1, y.getMonth() + 1 === S && (_ = h.getDate(), y.getDate() === _ && (B = h.getHours(), y.getHours() === B && (M = h.getMinutes(), y.getMinutes() === M && (C = h.getSeconds()))))), {
        [`${c}Year`]: b,
        [`${c}Month`]: S,
        [`${c}Date`]: _,
        [`${c}Hour`]: B,
        [`${c}Minute`]: M,
        [`${c}Seconds`]: C
      };
    }, l = D(() => {
      const { maxYear: c, maxDate: y, maxMonth: h, maxHour: b, maxMinute: S, maxSeconds: _ } = r("max", n.currentDate), { minYear: B, minDate: M, minMonth: C, minHour: T, minMinute: P, minSeconds: O } = r("min", n.currentDate);
      return v([
        {
          type: "year",
          range: [B, c]
        },
        {
          type: "month",
          range: [C, h]
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
    }), a = D(() => l.value.map((y, h) => d(y.range[0], y.range[1], $(y.type), y.type, h))), i = ({
      columnIndex: c,
      selectedValue: y,
      selectedOptions: h
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
      n.currentDate = s(M), t("change", { columnIndex: c, selectedValue: y, selectedOptions: h });
    }, p = (c, y) => {
      const { formatter: h, isShowChinese: b } = e;
      let S = null;
      if (h)
        S = h(c, { text: Qe(y, 2), value: Qe(y, 2) });
      else {
        const _ = Qe(y, 2), B = b ? tp[c] : "";
        S = { text: _ + B, value: _ };
      }
      return S;
    }, d = (c, y, h, b, S) => {
      const _ = [];
      let B = 0;
      for (; c <= y; )
        _.push(p(b, c)), b === "minute" ? c += e.minuteStep : c++, c <= Number(h) && B++;
      return n.selectedValue[S] = _[B].value, e.filter ? e.filter(b, _) : _;
    }, $ = (c) => c === "year" ? n.currentDate.getFullYear() : c === "month" ? n.currentDate.getMonth() + 1 : c === "day" ? n.currentDate.getDate() : c === "hour" ? n.currentDate.getHours() : c === "minute" ? n.currentDate.getMinutes() : c === "seconds" ? n.currentDate.getSeconds() : 0, g = (c) => {
      t("cancel", c);
    }, k = (c) => {
      t("confirm", c);
    }, v = (c) => {
      switch (e.type) {
        case "date":
          c = c.slice(0, 3);
          break;
        case "datetime":
          c = c.slice(0, 5);
          break;
        case "time":
          c = c.slice(3, 6);
          break;
        case "year-month":
          c = c.slice(0, 2);
          break;
        case "month-day":
          c = c.slice(1, 3);
          break;
        case "datehour":
          c = c.slice(0, 4);
          break;
        case "hour-minute":
          c = c.slice(3, 5);
          break;
      }
      return c;
    }, w = (c) => {
      const y = [
        c.getFullYear(),
        c.getMonth() + 1,
        c.getDate(),
        c.getHours(),
        c.getMinutes(),
        c.getSeconds()
      ];
      return v(y.map((h) => String(h)));
    };
    return Rn(() => {
      n.currentDate = s(e.modelValue);
    }), Q(
      () => e.modelValue,
      (c) => {
        const y = s(c);
        JSON.stringify(y) === JSON.stringify(n.currentDate) || (n.currentDate = y, n.selectedValue = w(y));
      }
    ), Q(
      () => n.currentDate,
      (c) => {
        JSON.stringify(c) === JSON.stringify(e.modelValue) || t("update:modelValue", c);
      }
    ), Q(
      () => e.title,
      (c) => {
        n.title = c;
      }
    ), de(Z({}, he(n)), {
      changeHandler: i,
      closeHandler: g,
      confirm: k,
      columns: a
    });
  }
});
function op(e, t, n, s, o, r) {
  const l = W("nut-picker");
  return u(), ee(l, {
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
const lp = /* @__PURE__ */ q(np, [["render", op]]), { componentName: sp, create: ap } = Y("input-number"), rp = ap({
  components: { Minus: _a, Plus: qa },
  props: {
    modelValue: {
      type: [Number, String],
      default: 0
    },
    inputWidth: {
      type: [Number, String],
      default: ""
    },
    buttonSize: {
      type: [Number, String],
      default: ""
    },
    min: {
      type: [Number, String],
      default: 1
    },
    max: {
      type: [Number, String],
      default: 9999
    },
    step: {
      type: [Number, String],
      default: 1
    },
    decimalPlaces: {
      type: [Number, String],
      default: 0
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "change", "blur", "focus", "reduce", "add", "overlimit"],
  setup(e, { emit: t }) {
    const n = Ze(xe(e, "disabled")), s = D(() => {
      const v = sp;
      return {
        [v]: !0,
        [`${v}--disabled`]: n.value
      };
    }), o = (v) => Number(v).toFixed(Number(e.decimalPlaces)), r = (v) => {
      const w = v.target;
      t("update:modelValue", w.value, v), t("change", w.value, v);
    }, l = (v, w) => {
      let c = o(v);
      t("update:modelValue", c, w), Number(e.modelValue) !== Number(c) && t("change", c, w);
    }, a = (v = Number(e.modelValue)) => v < Number(e.max) && !n.value, i = (v = Number(e.modelValue)) => v > Number(e.min) && !n.value, p = (v) => {
      if (n.value)
        return;
      t("reduce", v);
      let w = Number(e.modelValue) - Number(e.step);
      i() && w >= Number(e.min) ? l(w, v) : (l(Number(e.min), v), t("overlimit", v, "reduce"));
    }, d = (v) => {
      if (n.value)
        return;
      t("add", v);
      let w = Number(e.modelValue) + Number(e.step);
      a() && w <= Number(e.max) ? l(w, v) : (l(Number(e.max), v), t("overlimit", v, "add"));
    }, $ = (v) => {
      n.value || e.readonly || t("focus", v);
    }, g = (v) => {
      if (n.value || e.readonly)
        return;
      let c = v.target.valueAsNumber;
      c < Number(e.min) ? c = Number(e.min) : c > Number(e.max) && (c = Number(e.max)), l(c, v), t("blur", v);
    }, k = (v) => {
      let w = Number(v);
      return w < Number(e.min) ? w = Number(e.min) : w > Number(e.max) && (w = Number(e.max)), w;
    };
    return Q(
      () => [e.max, e.min],
      () => {
        Number(e.min) > Number(e.max) && console.warn("[NutUI] <InputNumber>", "props.max < props.min");
        const v = k(e.modelValue);
        v !== Number(e.modelValue) && l(v, {});
      }
    ), {
      classes: s,
      disabled: n,
      change: r,
      blur: g,
      focus: $,
      add: d,
      addAllow: a,
      reduce: p,
      reduceAllow: i,
      pxCheck: Be
    };
  }
}), ip = ["min", "max", "disabled", "readonly", "value"];
function up(e, t, n, s, o, r) {
  const l = W("Minus"), a = W("Plus");
  return u(), f("view", {
    class: L(e.classes)
  }, [
    m("view", {
      class: L(["nut-input-number__icon nut-input-number__left", { "nut-input-number__icon--disabled": !e.reduceAllow() }]),
      onClick: t[0] || (t[0] = (...i) => e.reduce && e.reduce(...i))
    }, [
      I(e.$slots, "left-icon", {}, () => [
        oe(l, {
          width: e.pxCheck(e.buttonSize),
          height: e.pxCheck(e.buttonSize)
        }, null, 8, ["width", "height"])
      ])
    ], 2),
    m("input", {
      type: "number",
      min: e.min,
      max: e.max,
      style: A({ width: e.pxCheck(e.inputWidth), height: e.pxCheck(e.buttonSize) }),
      disabled: e.disabled,
      readonly: e.readonly,
      value: e.modelValue,
      onInput: t[1] || (t[1] = (...i) => e.change && e.change(...i)),
      onBlur: t[2] || (t[2] = (...i) => e.blur && e.blur(...i)),
      onFocus: t[3] || (t[3] = (...i) => e.focus && e.focus(...i))
    }, null, 44, ip),
    m("view", {
      class: L(["nut-input-number__icon nut-input-number__right", { "nut-input-number__icon--disabled": !e.addAllow() }]),
      onClick: t[4] || (t[4] = (...i) => e.add && e.add(...i))
    }, [
      I(e.$slots, "right-icon", {}, () => [
        oe(a, {
          width: e.pxCheck(e.buttonSize),
          height: e.pxCheck(e.buttonSize)
        }, null, 8, ["width", "height"])
      ])
    ], 2)
  ], 2);
}
const rn = /* @__PURE__ */ q(rp, [["render", up]]);
function En(e, t, n) {
  const s = e.indexOf(t);
  return s === -1 ? e : t === "-" && s !== 0 ? e.slice(0, s) : e.slice(0, s + 1) + e.slice(s).replace(n, "");
}
function cp(e, t = !0, n = !0) {
  t ? e = En(e, ".", /\./g) : e = e.split(".")[0], n ? e = En(e, "-", /-/g) : e = e.replace(/-/, "");
  const s = t ? /[^-0-9.]/g : /[^-0-9]/g;
  return e.replace(s, "");
}
function dp(e) {
  return e === "number" ? {
    type: "text",
    inputmode: "decimal"
  } : e === "digit" ? {
    type: "tel",
    inputmode: "numeric"
  } : { type: e };
}
const { componentName: fp, create: pp } = Y("input"), mp = pp({
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
    const n = Ze(xe(e, "disabled")), s = z(!1), o = z(), r = () => {
      var C;
      return String((C = e.modelValue) != null ? C : "");
    }, l = (C) => be("input", Z({}, dp(C))), a = ce({
      focused: !1,
      validateFailed: !1,
      // 校验失败
      validateMessage: ""
      // 校验信息
    }), i = D(() => {
      const C = fp;
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
        e.maxLength && P.length > Number(e.maxLength) && (P = P.slice(0, Number(e.maxLength))), $(P);
      }
    }, $ = (C, T = "onChange") => {
      var P;
      if (["number", "digit"].includes(e.type)) {
        const O = e.type === "number";
        C = cp(C, O, O);
      }
      e.formatter && T === e.formatTrigger && (C = e.formatter(C)), ((P = o == null ? void 0 : o.value) == null ? void 0 : P.value) !== C && (o.value.value = C), C !== e.modelValue && t("update:modelValue", C);
    }, g = (C) => {
      n.value || e.readonly || (s.value = !0, t("focus", C));
    }, k = (C) => {
      if (n.value || e.readonly)
        return;
      setTimeout(() => {
        s.value = !1;
      }, 200);
      let P = C.target.value;
      e.maxLength && P.length > Number(e.maxLength) && (P = P.slice(0, Number(e.maxLength))), $(r(), "onBlur"), t("blur", C);
    }, v = (C) => {
      C.stopPropagation(), !n.value && (t("update:modelValue", "", C), t("clear", "", C));
    }, w = () => {
      a.validateFailed && (a.validateFailed = !1, a.validateMessage = "");
    }, c = (C) => {
      n.value || t("clickInput", C);
    }, y = (C) => {
      t("click", C);
    }, h = ({ target: C }) => {
      C.composing = !0;
    }, b = ({ target: C }) => {
      C.composing && (C.composing = !1, C.dispatchEvent(new Event("input")));
    };
    return Q(
      () => e.modelValue,
      () => {
        $(r()), w();
      }
    ), ve(() => {
      $(r(), e.formatTrigger);
    }), {
      renderInput: l,
      inputRef: o,
      active: s,
      classes: i,
      styles: p,
      disabled: n,
      onInput: d,
      onFocus: g,
      onBlur: k,
      clear: v,
      startComposing: h,
      endComposing: b,
      onClick: y,
      onClickInput: c,
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
}), hp = { class: "nut-input-value" }, gp = { class: "nut-input-inner" }, yp = {
  key: 0,
  class: "nut-input-left-box"
}, vp = { class: "nut-input-box" }, $p = {
  key: 0,
  class: "nut-input-word-limit"
}, bp = { class: "nut-input-word-num" }, wp = { class: "nut-input-right-box" };
function kp(e, t, n, s, o, r) {
  const l = W("MaskClose");
  return u(), f("view", {
    class: L(e.classes),
    onClick: t[1] || (t[1] = (...a) => e.onClick && e.onClick(...a))
  }, [
    m("view", hp, [
      m("view", gp, [
        e.$slots.left ? (u(), f("view", yp, [
          I(e.$slots, "left")
        ])) : N("", !0),
        m("view", vp, [
          (u(), ee(ze(e.renderInput(e.type)), {
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
          e.showWordLimit && e.maxLength ? (u(), f("view", $p, [
            m("span", bp, E(e.getModelValue() ? e.getModelValue().length : 0), 1),
            ge("/" + E(e.maxLength), 1)
          ])) : N("", !0)
        ]),
        e.clearable && !e.readonly ? Ce((u(), f("view", {
          key: 1,
          class: "nut-input-clear-box",
          onClick: t[0] || (t[0] = (...a) => e.clear && e.clear(...a))
        }, [
          I(e.$slots, "clear", {}, () => [
            oe(l, wt({ class: "nut-input-clear" }, e.$attrs, {
              size: e.clearSize,
              width: e.clearSize,
              height: e.clearSize
            }), null, 16, ["size", "width", "height"])
          ])
        ], 512)), [
          [Ne, (e.active || e.showClearIcon) && e.getModelValue().length > 0]
        ]) : N("", !0),
        m("view", wp, [
          I(e.$slots, "right")
        ])
      ])
    ])
  ], 2);
}
const Cp = /* @__PURE__ */ q(mp, [["render", kp]]), Do = Symbol("nut-radio"), { componentName: Je, create: Sp } = Y("radio"), _o = Sp({
  components: {
    CheckNormal: Ut,
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
    const n = Ze(xe(e, "disabled")), { size: s } = he(e);
    let o = Me(Do, null);
    const r = D(() => o.label.value === e.label), l = D(() => n.value ? "nut-radio__icon--disable" : r.value ? "nut-radio__icon" : "nut-radio__icon--unchecked"), a = () => {
      const { iconSize: g } = e, k = {
        CheckNormal: t.icon ? t.icon : Ut,
        Checked: t.checkedIcon ? t.checkedIcon : kn
      }, v = r.value ? k.Checked : k.CheckNormal, w = Be(g);
      return be(v, {
        width: w,
        height: w,
        class: l.value
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
          class: `${Je}__button ${r.value && `${Je}__button--active`} ${Je}__button--${s.value} ${e.disabled ? `${Je}__button--disabled` : ""}`
        },
        (g = t.default) == null ? void 0 : g.call(t)
      );
    }, d = () => {
      r.value || n.value || o.updateValue(e.label);
    }, $ = D(() => o.position.value === "left");
    return () => be(
      "view",
      {
        class: `${Je} ${Je}--${e.shape} ${$.value ? `${Je}--reverse` : ""}`,
        onClick: d
      },
      [e.shape === "button" ? p() : [a(), i()]]
    );
  }
}), { componentName: Pn, create: Tp } = Y("radio-group"), Io = Tp({
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
    const s = (o) => t("update:modelValue", o);
    return Le(Do, {
      label: bn(D(() => e.modelValue)),
      position: bn(D(() => e.textPosition)),
      updateValue: s
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
}), { create: Np } = Y("rate"), Dp = Np({
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
    const s = Ze(xe(e, "disabled")), o = z([]), r = ($) => {
      t("update:modelValue", $), t("change", $);
    }, l = ($, g) => {
      if (s.value || e.readonly)
        return;
      let k = 0;
      g === 1 && e.modelValue === g ? k = 0 : (k = g, e.allowHalf && $ == 2 && (k -= 0.5)), r(k);
    }, a = ($, g, k) => {
      let v = 0;
      for (let w = g.value.length - 1; w >= 0; w--) {
        const c = g.value[w];
        if ($ > c.offsetLeft) {
          k ? v = w + ($ > c.offsetLeft + c.clientWidth / 2 ? 1 : 0.5) : v = w + 1;
          break;
        }
      }
      return v;
    }, i = et(), p = {
      onTouchStart($) {
        !e.touchable || e.readonly || i.start($);
      },
      onTouchMove($) {
        e.touchable && (i.move($), i.isHorizontal() && o.value && ($.preventDefault(), r(a(i.moveX.value, o, e.allowHalf))));
      }
    }, d = Math.random().toString(36).slice(-8);
    return de(Z({}, p), {
      onClick: l,
      pxCheck: Be,
      rateRefs: o,
      refRandomId: d,
      renderIcon: ft,
      slots: n,
      disabled: s
    });
  }
}), _p = ["id"], Ip = { class: "nut-rate-item__icon--full" }, Bp = {
  key: 0,
  class: "nut-rate-item__icon--half"
}, Mp = {
  key: 1,
  class: "nut-rate-item__icon--half"
};
function Lp(e, t, n, s, o, r) {
  return u(), f("view", {
    class: "nut-rate",
    onTouchstart: t[0] || (t[0] = (...l) => e.onTouchStart && e.onTouchStart(...l)),
    onTouchmove: t[1] || (t[1] = (...l) => e.onTouchMove && e.onTouchMove(...l))
  }, [
    (u(!0), f(x, null, ie(Number(e.count), (l) => (u(), f("view", {
      id: "rateRefs-" + e.refRandomId + l,
      key: l,
      ref_for: !0,
      ref: "rateRefs",
      class: "nut-rate-item",
      style: A(l < Number(e.count) ? { marginRight: e.pxCheck(e.spacing) } : {})
    }, [
      m("view", Ip, [
        (u(), ee(ze(
          e.renderIcon(e.customIcon, {
            width: e.size,
            height: e.size,
            size: e.size,
            color: l <= Number(e.modelValue) ? e.activeColor : e.voidColor
          })
        ), {
          class: L(["nut-rate-item__icon", { "nut-rate-item__icon--disabled": e.disabled || l > Number(e.modelValue) }]),
          onClick: (a) => e.onClick(1, l)
        }, null, 8, ["class", "onClick"]))
      ]),
      e.allowHalf && Number(e.modelValue) + 1 > l ? (u(), f("view", Bp, [
        (u(), ee(ze(
          e.renderIcon(e.customIcon, {
            width: e.size,
            height: e.size,
            size: e.size,
            color: l <= Number(e.modelValue) + 1 ? e.activeColor : e.voidColor
          })
        ), {
          class: "nut-rate-item__icon",
          onClick: (a) => e.onClick(2, l)
        }, null, 8, ["onClick"]))
      ])) : e.allowHalf && Number(e.modelValue) + 1 < l ? (u(), f("view", Mp, [
        (u(), ee(ze(e.renderIcon(e.customIcon, { width: e.size, height: e.size, size: e.size, color: e.voidColor })), {
          class: "nut-rate-item__icon nut-rate-item__icon--disabled",
          onClick: (a) => e.onClick(2, l)
        }, null, 8, ["onClick"]))
      ])) : N("", !0)
    ], 12, _p))), 128))
  ], 32);
}
const Bo = /* @__PURE__ */ q(Dp, [["render", Lp]]), { create: Ep } = Y("short-password"), Pp = "NutShortPassword", Ap = Ep({
  components: {
    NutPopup: Ee,
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
    const n = ke(Pp), s = z(e.modelValue), o = D(() => i(Number(e.length))), r = z(e.visible), l = (d) => {
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
        s.value = d, String(d).length === o.value && t("complete", d);
      }
    );
    const a = () => {
      t("update:visible", !1), t("close");
    }, i = (d) => Math.min(Math.max(4, d), 6);
    return {
      comLen: o,
      realInput: s,
      onTouchStart: l,
      range: i,
      close: a,
      onTips: () => {
        t("tips");
      },
      show: r,
      translate: n
    };
  }
}), zp = { class: "nut-short-password-title" }, Vp = { class: "nut-short-password-subtitle" }, Op = { class: "nut-short-password-wrapper" }, Hp = {
  key: 0,
  class: "nut-short-password__item-icon"
}, Rp = { class: "nut-short-password__message" }, Fp = { class: "nut-short-password--error" }, Wp = {
  key: 0,
  class: "nut-short-password--forget"
};
function Yp(e, t, n, s, o, r) {
  const l = W("tips"), a = W("nut-popup");
  return u(), f("view", null, [
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
        m("view", zp, E(e.title || e.translate("title")), 1),
        m("view", Vp, E(e.desc || e.translate("desc")), 1),
        m("div", Op, [
          m("view", {
            class: "nut-short-password__list",
            onTouchstart: t[0] || (t[0] = (...i) => e.onTouchStart && e.onTouchStart(...i))
          }, [
            (u(!0), f(x, null, ie(new Array(e.comLen), (i, p) => (u(), f("view", {
              key: p,
              class: "nut-short-password__item"
            }, [
              String(e.realInput).length > p ? (u(), f("view", Hp)) : N("", !0)
            ]))), 128))
          ], 32)
        ]),
        m("view", Rp, [
          m("view", Fp, E(e.errorMsg), 1),
          e.tips || e.translate("tips") ? (u(), f("view", Wp, [
            oe(l, {
              class: "icon",
              width: "11px",
              height: "11px"
            }),
            m("view", {
              onClick: t[1] || (t[1] = (...i) => e.onTips && e.onTips(...i))
            }, E(e.tips || e.translate("tips")), 1)
          ])) : N("", !0)
        ])
      ]),
      _: 1
    }, 8, ["visible", "close-on-click-overlay", "lock-scroll", "onClickCloseIcon", "onClickOverlay"])
  ]);
}
const jp = /* @__PURE__ */ q(Ap, [["render", Yp]]), { create: Up } = Y("textarea"), Kp = "NutTextarea", Xp = Up({
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
    const n = Ze(xe(e, "disabled")), s = ke(Kp), o = z(), r = D(() => {
      const v = "nut-textarea";
      return {
        [v]: !0,
        [`${v}--disabled`]: n.value
      };
    });
    ve(() => {
      e.modelValue && i(String(e.modelValue)), e.autosize && Se(a);
    });
    const l = D(() => ({
      textAlign: e.textAlign
      // resize: props.autosize ? 'vertical' : 'none'
    })), a = () => {
      let v = o.value;
      v.style.height = "auto";
      let w = v.scrollHeight;
      if (typeof e.autosize == "object") {
        const { maxHeight: c, minHeight: y } = e.autosize;
        c !== void 0 && (w = Math.min(w, c)), y !== void 0 && (w = Math.max(w, y));
      }
      w && (v.style.height = w + "px");
    };
    Q(
      () => e.modelValue,
      () => {
        e.autosize && Se(a);
      }
    );
    const i = (v, w) => {
      e.maxLength && v.length > Number(e.maxLength) && (v = v.substring(0, Number(e.maxLength))), t("update:modelValue", v, w), t("change", v, w);
    };
    return {
      textareaRef: o,
      classes: r,
      styles: l,
      disabled: n,
      change: (v) => {
        if (!v.target.composing) {
          const w = v.target;
          let c = w.value;
          e.maxLength && c.length > Number(e.maxLength) && (c = c.slice(0, Number(e.maxLength))), i(w.value, v);
        }
      },
      focus: (v) => {
        n.value || e.readonly || t("focus", v);
      },
      blur: (v) => {
        if (n.value || e.readonly)
          return;
        let c = v.target.value;
        i(c, v), t("blur", { value: c, event: v });
      },
      translate: s,
      startComposing: ({ target: v }) => {
        v.composing = !0;
      },
      endComposing: ({ target: v }) => {
        v.composing && (v.composing = !1, v.dispatchEvent(new Event("input")));
      }
    };
  }
}), qp = ["rows", "disabled", "readonly", "value", "maxlength", "placeholder", "autofocus"], Zp = {
  key: 0,
  class: "nut-textarea__limit"
};
function Gp(e, t, n, s, o, r) {
  return u(), f("view", {
    class: L(e.classes)
  }, [
    m("textarea", {
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
      onInput: t[0] || (t[0] = (...l) => e.change && e.change(...l)),
      onBlur: t[1] || (t[1] = (...l) => e.blur && e.blur(...l)),
      onFocus: t[2] || (t[2] = (...l) => e.focus && e.focus(...l)),
      onChange: t[3] || (t[3] = (...l) => e.endComposing && e.endComposing(...l)),
      onCompositionend: t[4] || (t[4] = (...l) => e.endComposing && e.endComposing(...l)),
      onCompositionstart: t[5] || (t[5] = (...l) => e.startComposing && e.startComposing(...l))
    }, null, 44, qp),
    e.limitShow ? (u(), f("view", Zp, E(e.modelValue ? e.modelValue.length : 0) + "/" + E(e.maxLength), 1)) : N("", !0)
  ], 2);
}
const Jp = /* @__PURE__ */ q(Xp, [["render", Gp]]);
class Qp {
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
let xp = class {
  constructor(t) {
    V(this, "options");
    this.options = t;
  }
  upload() {
    var s;
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
      (s = t.onStart) == null || s.call(t, t), t.beforeXhrUpload ? t.beforeXhrUpload(n, t) : n.send(t.formData);
    } else
      console.warn("浏览器不支持 XMLHttpRequest");
  }
};
class e1 {
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
const { create: t1 } = Y("progress"), n1 = t1({
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
    }), s = D(() => Number(e.percentage) >= 100 ? 100 : Number(e.percentage)), o = D(() => ({
      width: s.value + "%",
      background: e.strokeColor || ""
    })), r = D(() => ({
      color: e.textColor || ""
    }));
    return {
      height: n,
      percentage: s,
      bgStyle: o,
      textStyle: r,
      slotDefault: t
    };
  }
}), o1 = { class: "nut-progress" };
function l1(e, t, n, s, o, r) {
  const l = W("Checked");
  return u(), f("div", o1, [
    m("div", {
      class: L(["nut-progress-outer", [e.showText && !e.textInside ? "nut-progress-outer-part" : "", e.size ? "nut-progress-" + e.size : ""]]),
      style: A({ height: e.height })
    }, [
      m("div", {
        class: L(["nut-progress-inner", e.status === "active" ? "nut-active" : ""]),
        style: A(e.bgStyle)
      }, null, 6),
      e.showText && e.textInside && !e.slotDefault ? (u(), f("div", {
        key: 0,
        class: "nut-progress-text nut-progress-insidetext",
        style: A({
          lineHeight: e.height,
          left: `${e.percentage}%`,
          transform: `translate(-${+e.percentage}%,-50%)`,
          background: e.textBackground || e.strokeColor
        })
      }, [
        m("span", {
          style: A(e.textStyle)
        }, E(e.percentage) + E(e.isShowPercentage ? "%" : ""), 5)
      ], 4)) : N("", !0),
      e.showText && e.textInside && e.slotDefault ? (u(), f("div", {
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
    e.showText && !e.textInside ? (u(), f("div", {
      key: 0,
      class: "nut-progress-text",
      style: A({ lineHeight: e.height })
    }, [
      e.status === "text" || e.status === "active" ? (u(), f("span", {
        key: 0,
        style: A(e.textStyle)
      }, E(e.percentage) + E(e.isShowPercentage ? "%" : ""), 5)) : e.status === "icon" ? I(e.$slots, "icon-name", { key: 1 }, () => [
        oe(l, {
          width: "15px",
          height: "15px",
          color: "#439422"
        })
      ]) : N("", !0)
    ], 4)) : N("", !0)
  ]);
}
const Mo = /* @__PURE__ */ q(n1, [["render", l1]]), { create: s1 } = Y("uploader"), a1 = "NutUploader", r1 = s1({
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
    const n = Ze(xe(e, "disabled")), s = ke(a1), o = z(e.fileList), r = z([]);
    Q(
      () => e.fileList,
      () => {
        o.value = e.fileList;
      }
    );
    const l = () => {
      let h = {
        class: "nut-uploader__input",
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        name: e.name,
        disabled: n.value
      };
      return e.capture && (h.capture = "camera", h.accept || (h.accept = "image/*")), be("input", h);
    }, a = (h) => {
      h.value = "";
    }, i = (h) => {
      t("fileItemClick", { fileItem: h });
    }, p = (h, b) => {
      const S = new Qp();
      S.url = e.url, S.formData = h.formData, S.timeout = e.timeout * 1, S.method = e.method, S.xhrState = e.xhrState, S.headers = e.headers, S.withCredentials = e.withCredentials, S.beforeXhrUpload = e.beforeXhrUpload;
      try {
        S.sourceFile = h.formData.get(e.name);
      } catch (B) {
        console.warn("[NutUI] <Uploader> formData.get(name)", B);
      }
      S.onStart = (B) => {
        h.status = "ready", h.message = s("readyUpload"), d(b), t("start", B);
      }, S.onProgress = (B, M) => {
        h.status = "uploading", h.message = s("uploading"), h.percentage = (B.loaded / B.total * 100).toFixed(0), t("progress", { event: B, option: M, percentage: h.percentage });
      }, S.onSuccess = (B, M) => {
        h.status = "success", h.message = s("success"), t("success", {
          responseText: B,
          option: M,
          fileItem: h
        }), t("update:fileList", o.value);
      }, S.onFailure = (B, M) => {
        h.status = "error", h.message = s("error"), t("failure", {
          responseText: B,
          option: M,
          fileItem: h
        });
      };
      let _ = new xp(S);
      e.autoUpload ? _.upload() : r.value.push(
        new Promise((B) => {
          B(_);
        })
      );
    }, d = (h = -1) => {
      h > -1 ? r.value.splice(h, 1) : (r.value = [], o.value = [], t("update:fileList", o.value));
    }, $ = () => {
      Promise.all(r.value).then((h) => {
        h.forEach((b) => b.upload());
      });
    }, g = (h) => {
      h.forEach((b, S) => {
        const _ = new FormData();
        for (const [M, C] of Object.entries(e.data))
          _.append(M, C);
        _.append(e.name, b);
        const B = ce(new e1());
        if (B.name = b.name, B.status = "ready", B.type = b.type, B.formData = _, B.message = s("waitingUpload"), p(B, S), e.isPreview && b.type.includes("image")) {
          const M = new FileReader();
          M.onload = (C) => {
            B.url = C.target.result, o.value.push(B);
          }, M.readAsDataURL(b);
        } else
          o.value.push(B);
      });
    }, k = (h) => {
      const b = e.maximum * 1, S = e.maximize * 1, _ = new Array();
      h = h.filter((M) => M.size > S ? (_.push(M), !1) : !0), _.length && t("oversize", _);
      let B = h.length + o.value.length;
      return B > b && h.splice(h.length - (B - b)), h;
    }, v = (h, b) => {
      o.value.splice(b, 1), t("delete", {
        file: h,
        fileList: o.value,
        index: b
      });
    }, w = (h, b) => {
      n.value || (d(b), en(e.beforeDelete, {
        args: [h, o.value],
        done: () => v(h, b)
      }));
    }, c = (h) => {
      if (e.disabled || n.value)
        return;
      const b = h.target;
      let { files: S } = b;
      e.beforeUpload ? e.beforeUpload(S).then((_) => y(_)) : y(S), t("change", {
        fileList: o.value,
        event: h
      }), e.clearInput && a(b);
    }, y = (h) => {
      const b = k(new Array().slice.call(h));
      g(b);
    };
    return {
      onChange: c,
      onDelete: w,
      fileList: o,
      fileItemClick: i,
      clearUploadQueue: d,
      submit: $,
      renderInput: l
    };
  }
}), i1 = { class: "nut-uploader" }, u1 = {
  key: 0,
  class: "nut-uploader__slot"
}, c1 = {
  key: 0,
  class: "nut-uploader__preview-img"
}, d1 = {
  key: 0,
  class: "nut-uploader__preview__progress"
}, f1 = { class: "nut-uploader__preview__progress__msg" }, p1 = ["onClick"], m1 = ["src", "onClick"], h1 = {
  key: 3,
  class: "nut-uploader__preview-img__file"
}, g1 = ["onClick"], y1 = { class: "file__name_tips" }, v1 = { class: "tips" }, $1 = {
  key: 1,
  class: "nut-uploader__preview-list"
}, b1 = ["onClick"], w1 = { class: "file__name_tips" };
function k1(e, t, n, s, o, r) {
  const l = W("Failure"), a = W("Loading"), i = W("Link"), p = W("Del"), d = W("nut-progress"), $ = W("Photograph");
  return u(), f("view", i1, [
    e.$slots.default ? (u(), f("view", u1, [
      I(e.$slots, "default"),
      Number(e.maximum) - e.fileList.length ? (u(), ee(ze(e.renderInput), {
        key: 0,
        onChange: e.onChange
      }, null, 40, ["onChange"])) : N("", !0)
    ])) : N("", !0),
    (u(!0), f(x, null, ie(e.fileList, (g, k) => {
      var v;
      return u(), f("view", {
        key: g.uid,
        class: L(["nut-uploader__preview", [e.listType]])
      }, [
        e.listType == "picture" && !e.$slots.default ? (u(), f("view", c1, [
          g.status != "success" ? (u(), f("view", d1, [
            g.status != "ready" ? (u(), f(x, { key: 0 }, [
              g.status == "error" ? (u(), ee(l, {
                key: 0,
                color: "#fff"
              })) : (u(), ee(a, {
                key: 1,
                name: "loading",
                color: "#fff"
              }))
            ], 64)) : N("", !0),
            m("view", f1, E(g.message), 1)
          ])) : N("", !0),
          e.isDeletable ? (u(), f("view", {
            key: 1,
            class: "close",
            onClick: (w) => e.onDelete(g, k)
          }, [
            I(e.$slots, "delete-icon", {}, () => [
              oe(l)
            ])
          ], 8, p1)) : N("", !0),
          (v = g == null ? void 0 : g.type) != null && v.includes("image") && g.url ? (u(), f("img", {
            key: 2,
            class: "nut-uploader__preview-img__c",
            src: g.url,
            onClick: (w) => e.fileItemClick(g)
          }, null, 8, m1)) : (u(), f("view", h1, [
            m("view", {
              class: "nut-uploader__preview-img__file__name",
              onClick: (w) => e.fileItemClick(g)
            }, [
              m("view", y1, E(g.name), 1)
            ], 8, g1)
          ])),
          m("view", v1, E(g.name), 1)
        ])) : e.listType == "list" ? (u(), f("view", $1, [
          m("view", {
            class: L(["nut-uploader__preview-img__file__name", [g.status]]),
            onClick: (w) => e.fileItemClick(g)
          }, [
            oe(i, { class: "nut-uploader__preview-img__file__link" }),
            m("view", w1, E(g.name), 1),
            e.isDeletable ? (u(), ee(p, {
              key: 0,
              color: "#808080",
              class: "nut-uploader__preview-img__file__del",
              onClick: (w) => e.onDelete(g, k)
            }, null, 8, ["onClick"])) : N("", !0)
          ], 10, b1),
          g.status == "uploading" ? (u(), ee(d, {
            key: 0,
            size: "small",
            percentage: g.percentage,
            "stroke-color": "linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)",
            "show-text": !1
          }, null, 8, ["percentage"])) : N("", !0)
        ])) : N("", !0)
      ], 2);
    }), 128)),
    e.listType == "picture" && !e.$slots.default && Number(e.maximum) - e.fileList.length ? (u(), f("view", {
      key: 1,
      class: L(["nut-uploader__upload", [e.listType]])
    }, [
      I(e.$slots, "upload-icon", {}, () => [
        oe($, { color: "#808080" })
      ]),
      (u(), ee(ze(e.renderInput), { onChange: e.onChange }, null, 40, ["onChange"]))
    ], 2)) : N("", !0)
  ]);
}
const C1 = /* @__PURE__ */ q(r1, [["render", k1]]), { create: S1 } = Y("number-keyboard"), T1 = "NutNumberKeyboard", N1 = S1({
  components: {
    NutPopup: Ee
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
    const n = ke(T1), s = z(void 0), o = z(e.visible), r = z();
    function l() {
      const { customKey: c } = e;
      let y = {
        id: "lock",
        type: "lock"
      }, h = Array.isArray(c) ? c : [c];
      return h.length === 1 && (y = {
        id: h[0],
        type: "custom"
      }), [...a(), y, { id: 0, type: "number" }, { id: "delete", type: "delete" }];
    }
    function a() {
      const c = [];
      for (let y = 1; y <= 9; y++)
        c.push({ id: y, type: "number" });
      return e.randomKeys ? c.sort(() => Math.random() > 0.5 ? 1 : -1) : c;
    }
    function i() {
      const c = a(), { customKey: y } = e;
      let h = Array.isArray(y) ? y : [y];
      return h.length > 2 && (h = [h[0], h[1]]), h.length == 2 && e.title && e.type != "rightColumn" && (h = [h[0]]), h.length === 1 ? e.title && e.type != "rightColumn" ? c.push({ id: h[0], type: "custom" }, { id: 0, type: "number" }, { id: "delete", type: "delete" }) : c.push({ id: 0, type: "number" }, { id: h[0], type: "custom" }) : h.length === 2 && c.push(
        { id: h[0], type: "custom" },
        { id: 0, type: "number" },
        { id: h[1], type: "custom" }
      ), c;
    }
    const p = D(() => e.type == "rightColumn" || e.title != "" ? i() : l()), d = () => {
      e.visible && t("blur");
    }, $ = (c) => {
      const y = r.value;
      y && !y.contains(c.target) && d();
    };
    Q(
      () => e.visible,
      (c) => {
        o.value = c, c ? window.addEventListener("touchstart", $, !1) : window.removeEventListener("touchstart", $, !1);
      }
    );
    function g(c, y) {
      y.stopPropagation(), s.value = c.id, (c.type == "number" || c.type == "custom") && (t("input", c.id), e.modelValue.length < +e.maxlength && t("update:modelValue", e.modelValue + c.id)), c.type == "lock" && w(), c.type == "delete" && (t("delete"), t("update:modelValue", e.modelValue.slice(0, e.modelValue.length - 1)));
    }
    function k(c) {
      c.stopPropagation();
    }
    function v(c) {
      c.preventDefault(), s.value = void 0;
    }
    function w() {
      t("update:visible", !1), t("close");
    }
    return {
      clickKeyIndex: s,
      defaultKey: l,
      closeBoard: w,
      onTouchEnd: v,
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
}), D1 = { ref: "root" }, _1 = { class: "nut-number-keyboard" }, I1 = {
  key: 0,
  class: "nut-number-keyboard__header"
}, B1 = { class: "nut-number-keyboard__title" }, M1 = { class: "nut-number-keyboard__body" }, L1 = { class: "nut-number-keyboard__keys" }, E1 = ["onTouchstart"], P1 = {
  key: 1,
  src: "https://img11.360buyimg.com/imagetools/jfs/t1/146371/38/8485/738/5f606425Eca239740/14f4b4f5f20d8a68.png"
}, A1 = {
  key: 2,
  src: "https://img11.360buyimg.com/imagetools/jfs/t1/129395/8/12735/2030/5f61ac37E70cab338/fb477dc11f46056c.png"
}, z1 = {
  key: 0,
  class: "nut-number-keyboard__sidebar"
}, V1 = { class: "nut-key__wrapper" }, O1 = /* @__PURE__ */ m("img", { src: "https://img11.360buyimg.com/imagetools/jfs/t1/129395/8/12735/2030/5f61ac37E70cab338/fb477dc11f46056c.png" }, null, -1), H1 = [
  O1
];
function R1(e, t, n, s, o, r) {
  const l = W("nut-popup");
  return u(), f("div", D1, [
    oe(l, {
      visible: e.show,
      "onUpdate:visible": t[7] || (t[7] = (a) => e.show = a),
      position: "bottom",
      "pop-class": e.popClass,
      overlay: !1,
      "lock-scroll": e.lockScroll,
      "teleport-disable": !1
    }, {
      default: ne(() => [
        m("div", _1, [
          e.title ? (u(), f("div", I1, [
            m("h3", B1, E(e.title), 1),
            e.type == "default" ? (u(), f("span", {
              key: 0,
              class: "nut-number-keyboard__close",
              onClick: t[0] || (t[0] = (a) => e.closeBoard())
            }, E(e.translate("done")), 1)) : N("", !0)
          ])) : N("", !0),
          m("div", M1, [
            m("div", L1, [
              (u(!0), f(x, null, ie(e.keysList, (a) => (u(), f("div", {
                key: "key" + a.id,
                class: L([
                  "nut-key__wrapper",
                  {
                    "nut-key__wrapper--wider": a.id == 0 && e.type == "rightColumn" && Array.isArray(e.customKey) && e.customKey.length == 1
                  }
                ])
              }, [
                m("div", {
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
                  a.type == "number" || a.type == "custom" ? (u(), f(x, { key: 0 }, [
                    ge(E(a.id), 1)
                  ], 64)) : N("", !0),
                  a.type == "lock" ? (u(), f("img", P1)) : N("", !0),
                  a.type == "delete" ? (u(), f("img", A1)) : N("", !0)
                ], 42, E1)
              ], 2))), 128))
            ]),
            e.type == "rightColumn" ? (u(), f("div", z1, [
              m("div", V1, [
                m("div", {
                  class: L(["nut-key", { active: e.clickKeyIndex == "delete" }]),
                  onTouchstart: t[3] || (t[3] = (a) => e.onTouchstart({ id: "delete", type: "delete" }, a)),
                  onTouchmove: t[4] || (t[4] = (a) => e.onTouchMove(a)),
                  onTouchend: t[5] || (t[5] = (...a) => e.onTouchEnd && e.onTouchEnd(...a))
                }, H1, 34)
              ]),
              m("div", {
                class: "nut-key__wrapper nut-key__wrapper--finish",
                onClick: t[6] || (t[6] = (a) => e.closeBoard())
              }, [
                m("div", {
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
const F1 = /* @__PURE__ */ q(N1, [["render", R1]]), un = /* @__PURE__ */ Pe({
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
    const s = e, o = n, { children: r, linkChildren: l } = Kt($o);
    l({ props: s });
    const { linkChildren: a } = Kt(bo);
    a({ props: s });
    const i = D(() => ce({}));
    Le("formErrorTip", i);
    const p = () => {
      Object.keys(i.value).forEach((c) => {
        i.value[c] = "";
      });
    }, d = () => {
      p();
    };
    Q(
      () => s.modelValue,
      () => {
        p();
      },
      { immediate: !0 }
    );
    const $ = () => {
      const c = [];
      return r.forEach((y) => {
        c.push({
          prop: y == null ? void 0 : y.prop,
          rules: (y == null ? void 0 : y.rules) || []
        });
      }), c;
    }, g = (c) => {
      c.message && o("validate", c), i.value[c.prop] = c.message;
    }, k = (c) => Ge(this, null, function* () {
      const { rules: y = [], prop: h } = c, b = (C) => new Promise((T, P) => {
        try {
          g(C), T(C);
        } catch (O) {
          P(O);
        }
      });
      h || console.warn("[NutUI] <FormItem> 使用 rules 校验规则时 , 必须设置 prop 参数");
      const S = jt(s.modelValue, h || "");
      g({ prop: h, message: "" });
      const _ = s.rules || {}, B = [...(_ == null ? void 0 : _[h]) || [], ...y];
      for (; B.length; ) {
        const M = B.shift(), { validator: T } = M, P = Ft(M, ["validator"]), { required: O, regex: K, message: G } = P, le = { prop: h, message: G || "" };
        if (O && !S && S !== 0 || K && !K.test(String(S)))
          return b(le);
        if (T) {
          const j = T(S, P);
          if (jn(j))
            try {
              if ((yield j) === !1)
                return b(le);
            } catch (U) {
              return b({ prop: h, message: U });
            }
          else if (!j)
            return b(le);
        }
      }
      return Promise.resolve(!0);
    }), v = (c = "") => new Promise((y, h) => {
      try {
        const S = $().map((_) => c && c !== _.prop ? Promise.resolve(!0) : k(_));
        Promise.all(S).then((_) => {
          _ = _.filter((M) => M !== !0);
          const B = { valid: !0, errors: [] };
          _.length && (B.valid = !1, B.errors = _), y(B);
        });
      } catch (b) {
        h(b);
      }
    });
    return t({
      submit: () => (v(), !1),
      reset: d,
      validate: v
    }), (c, y) => (u(), f("form", {
      class: "nut-form",
      action: "#",
      onSubmit: De(() => !1, ["prevent"])
    }, [
      oe(to, null, {
        default: ne(() => [
          I(c.$slots, "default")
        ]),
        _: 3
      })
    ], 32));
  }
});
je(un);
const W1 = { class: "nut-cell__value nut-form-item__body" }, cn = /* @__PURE__ */ Pe({
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
    const t = e, { parent: n } = ln($o), s = D(() => {
      var g;
      const d = (g = n.props) == null ? void 0 : g.rules;
      let $ = !1;
      for (const k in d)
        Object.prototype.hasOwnProperty.call(d, k) && k === t.prop && Array.isArray(d[k]) && ($ = d[k].some((v) => v.required));
      return t.required || t.rules.some((k) => k.required) || $;
    }), o = D(() => {
      const d = n.props.labelPosition, $ = t.labelPosition ? t.labelPosition : d;
      return $ !== "left" ? `nut-form-item__${$}` : "";
    }), r = D(() => {
      const d = n.props.starPosition, $ = t.starPosition ? t.starPosition : d;
      return $ !== "left" ? `nut-form-item__star-${$}` : "";
    }), l = Me("formErrorTip"), a = D(() => ({
      width: Be(t.labelWidth),
      textAlign: t.labelAlign
    })), i = D(() => ({
      textAlign: t.bodyAlign
    })), p = D(() => ({
      textAlign: t.errorMessageAlign
    }));
    return (d, $) => (u(), ee(eo, {
      class: L(["nut-form-item", [{ error: Fe(l)[d.prop], line: d.showErrorLine }, d.$attrs.class, o.value]]),
      style: A(d.$attrs.style)
    }, {
      default: ne(() => [
        d.label || d.$slots.label ? (u(), f("view", {
          key: 0,
          class: L(["nut-cell__title nut-form-item__label", { required: s.value, [r.value]: r.value }]),
          style: A(a.value)
        }, [
          I(d.$slots, "label", {}, () => [
            ge(E(d.label), 1)
          ])
        ], 6)) : N("", !0),
        m("view", W1, [
          m("view", {
            class: "nut-form-item__body__slots",
            style: A(i.value)
          }, [
            I(d.$slots, "default")
          ], 4),
          Fe(l)[d.prop] && d.showErrorMessage ? (u(), f("view", {
            key: 0,
            class: "nut-form-item__body__tips",
            style: A(p.value)
          }, E(Fe(l)[d.prop]), 5)) : N("", !0)
        ])
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
});
je(cn);
const Lo = Symbol("nut-swipe"), { create: Y1 } = Y("swipe"), j1 = Y1({
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
    }, s = z(!1), o = z(), r = D(() => n(o)), l = z(), a = D(() => n(l)), i = Me(Lo, null);
    Q(
      () => {
        var S;
        return (S = i == null ? void 0 : i.name) == null ? void 0 : S.value;
      },
      (S) => {
        e.name !== S && i && i.lock && v();
      }
    );
    const p = z(!1);
    let d = "", $ = "";
    const g = ce({
      offset: 0,
      moving: !1
    }), k = (S = "") => {
      i && i.update(e.name), p.value = !0, S && (g.offset = S === "left" ? -a.value : r.value), t("open", {
        name: e.name,
        position: d || S
      });
    }, v = () => {
      g.offset = 0, p.value && (p.value = !1, t("close", {
        name: e.name,
        position: d
      }));
    }, w = (S, _, B) => {
      B ? S.stopPropagation() : v(), t("click", _);
    }, c = D(() => ({
      transform: `translate3d(${g.offset}px, 0, 0)`
    })), y = (S) => {
      d = S > 0 ? "right" : "left";
      let _ = S;
      switch (d) {
        case "left":
          p.value && $ === d ? _ = -a.value : _ = Math.abs(S) > a.value ? -a.value : S;
          break;
        case "right":
          p.value && $ === d ? _ = r.value : _ = Math.abs(S) > r.value ? r.value : S;
          break;
      }
      g.offset = _;
    }, h = et();
    return de(Z({
      touchStyle: c
    }, {
      onTouchStart(S) {
        e.disabled || h.start(S);
      },
      onTouchMove(S) {
        e.disabled || (h.move(S), h.isHorizontal() && (s.value = !0, g.moving = !0, y(h.deltaX.value), e.touchMovePreventDefault && S.preventDefault(), e.touchMoveStopPropagation && S.stopPropagation()));
      },
      onTouchEnd() {
        if (g.moving) {
          switch (g.moving = !1, $ = d, d) {
            case "left":
              Math.abs(g.offset) <= a.value / 2 ? v() : (g.offset = -a.value, k());
              break;
            case "right":
              Math.abs(g.offset) <= r.value / 2 ? v() : (g.offset = r.value, k());
              break;
          }
          setTimeout(() => {
            s.value = !1;
          }, 0);
        }
      }
    }), {
      leftRef: o,
      rightRef: l,
      open: k,
      close: v,
      onClick: w,
      lockClick: s
    });
  }
});
function U1(e, t, n, s, o, r) {
  return u(), f("view", {
    class: "nut-swipe",
    style: A(e.touchStyle),
    onTouchstart: t[3] || (t[3] = (...l) => e.onTouchStart && e.onTouchStart(...l)),
    onTouchmove: t[4] || (t[4] = (...l) => e.onTouchMove && e.onTouchMove(...l)),
    onTouchend: t[5] || (t[5] = (...l) => e.onTouchEnd && e.onTouchEnd(...l)),
    onTouchcancel: t[6] || (t[6] = (...l) => e.onTouchEnd && e.onTouchEnd(...l))
  }, [
    m("view", {
      ref: "leftRef",
      class: "nut-swipe__left",
      onClick: t[0] || (t[0] = (l) => e.onClick(l, "left", !0))
    }, [
      I(e.$slots, "left")
    ], 512),
    m("view", {
      class: "nut-swipe__content",
      onClick: t[1] || (t[1] = (l) => e.onClick(l, "content", e.lockClick))
    }, [
      I(e.$slots, "default")
    ]),
    m("view", {
      ref: "rightRef",
      class: "nut-swipe__right",
      onClick: t[2] || (t[2] = (l) => e.onClick(l, "right", !0))
    }, [
      I(e.$slots, "right")
    ], 512)
  ], 36);
}
const Eo = /* @__PURE__ */ q(j1, [["render", U1]]), { create: K1 } = Y("swipe-group"), X1 = K1({
  props: {
    lock: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = z(null), n = z("");
    return Le(Lo, {
      update: (o) => {
        n.value = o;
      },
      lock: e.lock,
      name: n
    }), { swipeGroupRef: t };
  }
}), q1 = {
  ref: "swipeGroupRef",
  class: "nut-swipe-group"
};
function Z1(e, t, n, s, o, r) {
  return u(), f("div", q1, [
    I(e.$slots, "default")
  ], 512);
}
const G1 = /* @__PURE__ */ q(X1, [["render", Z1]]), { create: J1 } = Y("action-sheet"), Q1 = J1({
  components: {
    NutPopup: Ee,
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
}), x1 = { class: "nut-action-sheet" }, em = {
  key: 0,
  class: "nut-action-sheet__title"
}, tm = { key: 1 }, nm = {
  key: 0,
  class: "nut-action-sheet__item nut-action-sheet__desc"
}, om = {
  key: 1,
  class: "nut-action-sheet__menu"
}, lm = ["onClick"], sm = { key: 1 }, am = { class: "nut-action-sheet__subdesc" };
function rm(e, t, n, s, o, r) {
  const l = W("Loading"), a = W("nut-popup");
  return u(), ee(a, {
    visible: e.visible,
    position: "bottom",
    round: "",
    "close-on-click-overlay": e.closeAbled,
    "lock-scroll": e.lockScroll,
    "z-index": e.zIndex,
    onClickOverlay: e.close
  }, {
    default: ne(() => [
      m("view", x1, [
        e.title ? (u(), f("view", em, E(e.title), 1)) : N("", !0),
        I(e.$slots, "default"),
        e.slotDefault ? N("", !0) : (u(), f("view", tm, [
          e.description ? (u(), f("view", nm, E(e.description), 1)) : N("", !0),
          e.menuItems.length ? (u(), f("view", om, [
            (u(!0), f(x, null, ie(e.menuItems, (i, p) => (u(), f("view", {
              key: p,
              class: L(["nut-action-sheet__item", {
                "nut-action-sheet__item--disabled": i.disable,
                "nut-action-sheet__item--loading": i.loading
              }]),
              style: A({ color: e.isHighlight(i) || i.color }),
              onClick: (d) => e.chooseItem(i, p)
            }, [
              i.loading ? (u(), ee(l, { key: 0 })) : (u(), f("view", sm, E(i[e.optionTag]), 1)),
              m("view", am, E(i[e.optionSubTag]), 1)
            ], 14, lm))), 128))
          ])) : N("", !0),
          e.cancelTxt ? (u(), f("view", {
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
const im = /* @__PURE__ */ q(Q1, [["render", rm]]), { componentName: um, create: cm } = Y("backtop"), dm = cm({
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
    }), s = D(() => ({
      [um]: !0,
      show: n.backTop
    })), o = D(() => ({
      right: `${e.right}px`,
      bottom: `${e.bottom}px`,
      zIndex: e.zIndex
    }));
    function r() {
      n.scrollEl instanceof Window ? n.scrollTop = n.scrollEl.pageYOffset : n.scrollTop = n.scrollEl.scrollTop, n.backTop = n.scrollTop >= e.distance;
    }
    function l(g = 0) {
      n.scrollEl instanceof Window ? window.scrollTo(0, g) : n.scrollEl.scrollTop = g;
    }
    function a() {
      let g = Oe(function k() {
        var v = e.duration - Math.max(0, n.startTime - +/* @__PURE__ */ new Date() + e.duration), w = v * -n.scrollTop / e.duration + n.scrollTop;
        l(w), g = Oe(k), (v == e.duration || w == 0) && Sc(g);
      });
    }
    function i() {
      n.scrollEl.addEventListener("scroll", r, !1), n.scrollEl.addEventListener("resize", r, !1);
    }
    function p() {
      n.scrollEl.removeEventListener("scroll", r, !1), n.scrollEl.removeEventListener("resize", r, !1);
    }
    function d(g) {
      n.startTime = +/* @__PURE__ */ new Date(), e.isAnimation && e.duration > 0 ? a() : l(), t("click", g);
    }
    function $() {
      e.elId && document.getElementById(e.elId) && (n.scrollEl = document.getElementById(e.elId)), i();
    }
    return ve(() => {
      e.distance == 0 && (n.backTop = !0), $();
    }), Xe(() => {
      p();
    }), Ct(() => {
      n.keepAlive && (n.keepAlive = !1, $());
    }), St(() => {
      n.keepAlive = !0, p();
    }), {
      state: n,
      classes: s,
      style: o,
      click: d
    };
  }
});
function fm(e, t, n, s, o, r) {
  const l = W("Top");
  return u(), f("div", {
    class: L(e.classes),
    style: A(e.style),
    onClick: t[0] || (t[0] = De((...a) => e.click && e.click(...a), ["stop"]))
  }, [
    I(e.$slots, "default", {}, () => [
      oe(l, {
        width: "19px",
        height: "19px",
        class: "nut-backtop-main"
      })
    ])
  ], 6);
}
const pm = /* @__PURE__ */ q(dm, [["render", fm]]), { create: mm } = Y("drag"), hm = mm({
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
    function s() {
      const p = document.documentElement;
      n.elWidth = t.value.offsetWidth, n.elHeight = t.value.offsetHeight, n.screenWidth = p.clientWidth || 375, n.screenHeight = p.clientHeight || 667;
    }
    function o(p) {
      n.boundary.left ? +p.style.left.split("px")[0] > n.boundary.left ? (p.style.left = +p.style.left.split("px")[0] - 10 + "px", Oe(() => {
        o(p);
      })) : p.style.left = `${n.boundary.left}px` : +p.style.left.split("px")[0] > 10 ? (p.style.left = +p.style.left.split("px")[0] - 10 + "px", Oe(() => {
        o(p);
      })) : p.style.left = "0px";
    }
    function r(p, d) {
      d - parseInt(p.style.left.split("px")[0]) > 10 ? (p.style.left = parseInt(p.style.left.split("px")[0]) + 10 + "px", Oe(() => {
        r(p, d);
      })) : p.style.left = d + "px";
    }
    function l(p) {
      p.preventDefault();
      const d = p.currentTarget;
      if (p.targetTouches.length === 1) {
        const $ = p.targetTouches[0];
        n.nx = $.clientX - n.position.x, n.ny = $.clientY - n.position.y, n.xPum = n.startLeft + n.nx, n.yPum = n.startTop + n.ny;
        const g = n.screenWidth - n.elWidth - n.boundary.right;
        Math.abs(n.xPum) > g ? n.xPum = g : n.xPum <= n.boundary.left && (n.xPum = n.boundary.left), n.yPum < n.boundary.top ? n.yPum = n.boundary.top : n.yPum > n.screenHeight - n.elHeight - n.boundary.bottom && (n.yPum = n.screenHeight - n.elHeight - n.boundary.bottom), e.direction != "y" && (d.style.left = n.xPum + "px"), e.direction != "x" && (d.style.top = n.yPum + "px");
      }
    }
    function a(p) {
      const d = p.currentTarget;
      let g = p.changedTouches[0].clientX;
      const k = n.screenWidth - n.elWidth - n.boundary.right;
      g > k ? g = k : g < n.boundary.left ? g = n.boundary.left : g = g < n.screenWidth / 2 ? n.boundary.left : k, e.direction != "y" && e.attract && (g < n.screenWidth / 2 ? Oe(() => {
        o(d);
      }) : Oe(() => {
        r(d, k);
      })), e.direction != "x" && (d.style.top = n.yPum + "px");
    }
    function i(p) {
      const d = p.currentTarget, $ = p.touches[0], g = p.targetTouches[0];
      n.startTop = d.offsetTop, n.startLeft = d.offsetLeft, n.position.x = $.clientX, n.position.y = $.clientY, n.nx = g.clientX - n.position.x, n.ny = g.clientY - n.position.y, n.xPum = n.startLeft + n.nx, n.yPum = n.startTop + n.ny;
    }
    return ve(() => {
      s(), n.boundary = e.boundary;
    }), Ct(() => {
      n.keepAlive && (n.keepAlive = !1);
    }), St(() => {
      n.keepAlive = !0, t.value.removeEventListener("touchstart", i), t.value.removeEventListener("touchmove", l), t.value.removeEventListener("touchend", a);
    }), {
      myDrag: t,
      touchStart: i,
      touchMove: l,
      touchEnd: a
    };
  }
});
function gm(e, t, n, s, o, r) {
  return u(), f("view", {
    ref: "myDrag",
    class: "nut-drag",
    onTouchstart: t[0] || (t[0] = (l) => e.touchStart(l)),
    onTouchmove: t[1] || (t[1] = (l) => e.touchMove(l)),
    onTouchend: t[2] || (t[2] = (l) => e.touchEnd(l))
  }, [
    I(e.$slots, "default")
  ], 544);
}
const ym = /* @__PURE__ */ q(hm, [["render", gm]]), { create: vm } = Y("dialog"), $m = "NutDialog", bm = vm({
  inheritAttrs: !1,
  components: {
    NutPopup: Ee,
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
    const n = ke($m), s = z(e.visible);
    ve(() => {
      e.closeOnPopstate && window.addEventListener("popstate", function() {
        r("page");
      });
    }), Q(
      () => e.visible,
      (d) => {
        s.value = d, d && t("opened");
      }
    );
    const o = (d) => {
      t("update", d), t("update:visible", d);
    }, r = (d) => {
      en(e.beforeClose, {
        args: [d],
        done: () => {
          s.value = !1, o(!1), t("closed");
        }
      });
    }, l = () => {
      t("cancel"), e.cancelAutoClose && (s.value = !1, r("cancel"));
    }, a = () => {
      t("ok"), e.okAutoClose && r("ok");
    }, i = () => {
      e.closeOnClickOverlay && r("");
    }, p = D(() => ({
      textAlign: e.textAlign
    }));
    return {
      closed: r,
      onCancel: l,
      onOk: a,
      showPopup: s,
      onClickOverlay: i,
      contentStyle: p,
      translate: n
    };
  }
}), wm = {
  key: 0,
  class: "nut-dialog__header"
}, km = ["innerHTML"];
function Cm(e, t, n, s, o, r) {
  const l = W("nut-button"), a = W("nut-popup");
  return u(), ee(a, {
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
      m("view", {
        class: L(["nut-dialog", e.customClass])
      }, [
        e.$slots.header || e.title ? (u(), f("view", wm, [
          e.$slots.header ? I(e.$slots, "header", { key: 0 }) : (u(), f(x, { key: 1 }, [
            ge(E(e.title), 1)
          ], 64))
        ])) : N("", !0),
        m("view", {
          class: "nut-dialog__content",
          style: A(e.contentStyle)
        }, [
          e.$slots.default ? I(e.$slots, "default", { key: 0 }) : typeof e.content == "string" ? (u(), f("view", {
            key: 1,
            innerHTML: e.content
          }, null, 8, km)) : (u(), ee(ze(e.content), { key: 2 }))
        ], 4),
        e.noFooter ? N("", !0) : (u(), f("view", {
          key: 1,
          class: L(["nut-dialog__footer", { [e.footerDirection]: e.footerDirection }])
        }, [
          e.$slots.footer ? I(e.$slots, "footer", { key: 0 }) : (u(), f(x, { key: 1 }, [
            e.noCancelBtn ? N("", !0) : (u(), ee(l, {
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
            e.noOkBtn ? N("", !0) : (u(), ee(l, {
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
const dn = /* @__PURE__ */ q(bm, [["render", Cm]]);
class Sm {
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
class Tm {
  constructor(t) {
    V(this, "options", new Sm());
    V(this, "instance");
    const n = Object.assign(this.options, t), { unmount: s } = sn(n, {
      name: "dialog",
      components: [Ee, qe, Tt],
      wrapper: (o, r) => ({
        setup() {
          return n.onUpdate = (l) => {
            l === !1 && Se(() => {
              s();
            });
          }, n != null && n.onOpened && (n == null || n.onOpened()), n.teleport = `#${r.id}`, () => be(dn, n);
        }
      })
    });
  }
}
const Nm = function(e) {
  return new Tm(e);
};
Nm.install = (e) => {
  e.use(dn);
};
const { create: Dm } = Y("infinite-loading"), _m = "NutInfiniteLoading", Im = Dm({
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
    const s = ke(_m), o = z(), r = io(o), l = ce({
      beforeScrollTop: 0,
      isInfiniting: !1,
      y: 0,
      x: 0,
      distance: 0
    }), a = (k) => k ? k.offsetTop + a(k.offsetParent) : 0, i = () => {
      let k = 0, v = 0, w = "down";
      if (r.value == window) {
        const c = Kn();
        o.value && (k = a(o.value) + o.value.offsetHeight - c - window.innerHeight), v = c;
      } else {
        const { scrollHeight: c, clientHeight: y, scrollTop: h } = r.value;
        k = c - y - h, v = h;
      }
      return l.beforeScrollTop > v ? w = "up" : w = "down", l.beforeScrollTop = v, t("scrollChange", v), k <= e.threshold && w == "down";
    }, p = () => {
      Oe(() => {
        if (!i() || !e.hasMore || l.isInfiniting)
          return !1;
        l.isInfiniting = !0, t("update:modelValue", !0), Se(() => t("loadMore"));
      });
    }, d = () => {
      r.value && r.value.addEventListener("scroll", p, e.useCapture);
    }, $ = () => {
      r.value && r.value.removeEventListener("scroll", p, e.useCapture);
    };
    ve(() => {
      d();
    }), Xe(() => {
      $();
    });
    const g = z(!1);
    return Ct(() => {
      g.value && (g.value = !1, d());
    }), St(() => {
      g.value = !0, $();
    }), Q(
      () => e.modelValue,
      (k) => {
        k || (l.isInfiniting = !1);
      }
    ), de(Z({
      scroller: o
    }, he(l)), {
      translate: s,
      slots: n
    });
  }
}), Bm = {
  ref: "scroller",
  class: "nut-infinite-loading"
}, Mm = { class: "nut-infinite__container" }, Lm = { class: "nut-infinite__bottom" }, Em = {
  key: 0,
  class: "nut-infinite__bottom-box"
}, Pm = { class: "nut-infinite__bottom-box__text" }, Am = { class: "nut-infinite__bottom-tips" };
function zm(e, t, n, s, o, r) {
  const l = W("Loading");
  return u(), f("view", Bm, [
    m("view", Mm, [
      I(e.$slots, "default")
    ]),
    m("view", Lm, [
      e.isInfiniting ? (u(), f("view", Em, [
        I(e.$slots, "loading", {}, () => [
          I(e.$slots, "loading-icon", {}, () => [
            oe(l, { class: "nut-icon-loading nut-infinite__bottom-box__img" })
          ]),
          m("view", Pm, E(e.loadTxt || e.translate("loading")), 1)
        ])
      ])) : e.hasMore ? N("", !0) : I(e.$slots, "finished", { key: 1 }, () => [
        m("view", Am, E(e.loadMoreTxt || e.translate("loadMoreTxt")), 1)
      ])
    ])
  ], 512);
}
const Vm = /* @__PURE__ */ q(Im, [["render", zm]]), { create: Om } = Y("pull-refresh"), Hm = "NutPullRefresh", Rm = Om({
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
    const s = ke(Hm), o = et(), r = z(), l = io(r), a = ce({
      isPullRefresh: !1,
      distance: 0,
      status: "normal"
    }), i = D(() => {
      switch (a.status) {
        case "pulling":
          return n.pulling ? "" : e.pullingTxt || s("pulling");
        case "loosing":
          return n.loosing ? "" : e.loosingTxt || s("loosing");
        case "loading":
          return n.loading ? "" : e.loadingTxt || s("loading");
        case "complete":
          return n.complete ? "" : e.completeTxt || s("complete");
      }
      return "";
    }), p = D(() => ({
      transitionDuration: `${e.duration}s`,
      transform: a.distance ? `translate3d(0,${a.distance}px, 0)` : ""
    })), d = D(() => {
      const h = {};
      return e.headHeight != 50 && (h.height = Be(e.headHeight)), h;
    }), $ = (h) => {
      const b = +(e.pullDistance || e.headHeight);
      let S = h;
      return h > b && (h < b * 2 ? S = (h + b) / 2 : S = b + h / 4), Math.round(S);
    }, g = (h, b, S) => {
      const _ = +(e.pullDistance || e.headHeight);
      a.distance = h, b ? a.status = "loading" : S ? a.status = "complete" : h === 0 ? a.status = "normal" : h < _ ? a.status = "pulling" : a.status = "loosing", t("change", { status: a.status, distance: h });
    }, k = () => a.status !== "loading" && a.status !== "complete", v = () => l.value == window ? Kn() == 0 : l.value && l.value.scrollTop == 0, w = (h) => {
      k() && (v() ? (o.start(h), a.isPullRefresh = !0) : (a.distance = 0, a.isPullRefresh = !1));
    }, c = (h) => {
      if (k()) {
        o.move(h);
        const { deltaY: b } = o;
        o.isVertical() && b.value > 0 && a.isPullRefresh && (h.preventDefault(), g($(b.value)));
      }
    }, y = () => {
      a.isPullRefresh && k() && o.deltaY.value && (a.status === "loosing" ? (g(+e.headHeight, !0), t("update:modelValue", !0), Se(() => t("refresh"))) : g(0)), setTimeout(() => {
        o.reset();
      }, 0);
    };
    return Q(
      () => e.modelValue,
      (h) => {
        h ? g(+e.headHeight, !0) : (e.completeDuration === 0 && g(0), g(+e.headHeight, !1, !0), setTimeout(() => {
          g(0);
        }, e.completeDuration));
      }
    ), de(Z({
      scroller: r
    }, he(a)), {
      touchStart: w,
      touchMove: c,
      touchEnd: y,
      getStyle: p,
      translate: s,
      slots: n,
      getHeightStyle: d,
      getPullStatus: i
    });
  }
}), Fm = { class: "nut-pull-refresh-container-topbox-text" };
function Wm(e, t, n, s, o, r) {
  const l = W("Loading");
  return u(), f("div", {
    ref: "scroller",
    class: "nut-pull-refresh",
    onTouchstart: t[0] || (t[0] = (...a) => e.touchStart && e.touchStart(...a)),
    onTouchmove: t[1] || (t[1] = (...a) => e.touchMove && e.touchMove(...a)),
    onTouchend: t[2] || (t[2] = (...a) => e.touchEnd && e.touchEnd(...a))
  }, [
    m("div", {
      class: "nut-pull-refresh-container",
      style: A(e.getStyle)
    }, [
      m("div", {
        class: "nut-pull-refresh-container-topbox",
        style: A(e.getHeightStyle)
      }, [
        e.status == "loading" && !e.slots.loading ? (u(), ee(l, {
          key: 0,
          class: "nut-icon-loading nut-pull-refresh-container-topbox-icon"
        })) : N("", !0),
        m("div", Fm, E(e.getPullStatus), 1),
        e.status == "pulling" ? I(e.$slots, "pulling", { key: 1 }) : N("", !0),
        e.status == "loosing" ? I(e.$slots, "loosing", { key: 2 }) : N("", !0),
        e.status == "loading" ? I(e.$slots, "loading", { key: 3 }) : N("", !0),
        e.status == "complete" ? I(e.$slots, "complete", { key: 4 }) : N("", !0)
      ], 4),
      I(e.$slots, "default")
    ], 4)
  ], 544);
}
const Ym = /* @__PURE__ */ q(Rm, [["render", Wm]]), { create: jm } = Y("notify"), Um = jm({
  components: {
    NutPopup: Ee
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
    let s = null;
    const o = () => {
      s && clearTimeout(s), s = null;
    }, r = () => {
      t("update:visible", !1);
    }, l = z(!1), a = Q(
      () => e.visible,
      (p) => {
        l.value = e.visible;
        const d = e.duration;
        p && d && (s = setTimeout(() => {
          r();
        }, d));
      },
      { immediate: !0 }
    );
    return { onAfterLeave: () => {
      o(), a && a(), e.unmount && e.unmount(e.id), e.onClose && e.onClose();
    }, clickCover: n, isShowPopup: l };
  }
});
function Km(e, t, n, s, o, r) {
  const l = W("nut-popup");
  return u(), ee(l, {
    visible: e.isShowPopup,
    "onUpdate:visible": t[1] || (t[1] = (a) => e.isShowPopup = a),
    position: e.position,
    overlay: !1,
    "teleport-disable": e.teleportDisable
  }, {
    default: ne(() => [
      m("div", {
        class: L(["nut-notify", `nut-notify--${e.type}`, e.className]),
        style: A({ color: e.color, background: e.background }),
        onClick: t[0] || (t[0] = (...a) => e.clickCover && e.clickCover(...a))
      }, [
        e.$slots.default ? I(e.$slots, "default", { key: 0 }) : (u(), f(x, { key: 1 }, [
          ge(E(e.msg), 1)
        ], 64))
      ], 6)
    ]),
    _: 3
  }, 8, ["visible", "position", "teleport-disable"]);
}
const zt = /* @__PURE__ */ q(Um, [["render", Km]]), Zt = {
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
}, Xm = (e) => {
  const t = document.getElementById(e.id);
  if (t) {
    const n = vt.find((o) => o.id === e.id);
    n ? e = Z(Z(Z({}, Zt), n), e) : e = Z(Z({}, Zt), e);
    const s = oe(zt, e);
    return xt(s, t), s.component.data;
  }
}, ht = (e) => {
  e.unmount = Po;
  let t;
  if (e.id) {
    if (t = e.id, it.find((r) => r === e.id))
      return Xm(e);
  } else
    t = (/* @__PURE__ */ new Date()).getTime() + "";
  e = Z(Z({}, Zt), e), e.id = t, it.push(e.id), vt.push(e);
  const n = document.createElement("view");
  n.id = "notify-" + e.id;
  const o = oe({
    setup() {
      return e.teleport = `#notify-${e.id}`, ve(() => {
        setTimeout(() => {
          e.onClose && e.onClose(), document.body.removeChild(n);
        }, e.duration);
      }), () => be(zt, e);
    }
  });
  document.body.appendChild(n), xt(o, n);
}, gt = (e) => {
  if (!e) {
    console.warn("[NutUI Notify]: msg不能为空");
    return;
  }
}, c5 = {
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
    e.use(zt);
  }
}, { componentName: qm, create: Zm } = Y("switch"), Gm = Zm({
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
    const n = D(() => e.disabled || e.disable), s = Ze(n), o = D(() => e.modelValue === e.activeValue), r = D(() => {
      const p = qm;
      return {
        [p]: !0,
        [o.value ? "nut-switch-open" : "nut-switch-close"]: !0,
        [`${p}-disabled`]: s.value,
        [`${p}-base`]: !0
      };
    }), l = D(() => ({
      backgroundColor: o.value ? e.activeColor : e.inactiveColor
    }));
    let a = "";
    const i = (p) => {
      if (e.loading || s.value)
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
      style: l,
      isActive: o,
      onClick: i
    };
  }
}), Jm = { class: "nut-switch-button" };
function Qm(e, t, n, s, o, r) {
  const l = W("Loading1");
  return u(), f("view", {
    class: L(e.classes),
    style: A(e.style),
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, [
    m("view", Jm, [
      e.loading ? I(e.$slots, "icon", { key: 0 }, () => [
        oe(l, {
          name: "loading",
          color: e.activeColor
        }, null, 8, ["color"])
      ]) : N("", !0),
      e.activeText ? (u(), f(x, { key: 1 }, [
        Ce(m("view", { class: "nut-switch-label open" }, E(e.activeText), 513), [
          [Ne, e.isActive]
        ]),
        Ce(m("view", { class: "nut-switch-label close" }, E(e.inactiveText), 513), [
          [Ne, !e.isActive]
        ])
      ], 64)) : N("", !0)
    ])
  ], 6);
}
const xm = /* @__PURE__ */ q(Gm, [["render", Qm]]), { create: eh } = Y("toast"), th = eh({
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
    const s = ce({
      mounted: !1
    });
    ve(() => {
      s.mounted = !0;
    });
    const o = () => {
      n && (clearTimeout(n), n = null);
    }, r = () => {
      s.mounted = !1;
    }, l = () => {
      o(), e.duration && (n = window.setTimeout(() => {
        r();
      }, e.duration));
    }, a = () => {
      e.closeOnClickOverlay && (r(), t("close"));
    };
    e.duration && l(), Q(
      () => e.duration,
      (g) => {
        g && l();
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
      state: s,
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
}), nh = {
  key: 1,
  class: "nut-toast-title"
}, oh = ["innerHTML"];
function lh(e, t, n, s, o, r) {
  return u(), ee(Jt, {
    name: "toast-fade",
    onAfterLeave: e.onAfterLeave
  }, {
    default: ne(() => [
      Ce(m("view", {
        class: L(e.toastBodyClass),
        style: A({
          bottom: e.center ? "auto" : e.bottom,
          "background-color": e.coverColor
        }),
        onClick: t[0] || (t[0] = (...l) => e.clickCover && e.clickCover(...l))
      }, [
        m("view", {
          class: "nut-toast-inner",
          style: A({
            "text-align": e.textAlignCenter ? "center" : "left",
            "background-color": e.bgColor
          })
        }, [
          e.hasIcon ? (u(), f("view", {
            key: 0,
            class: L(e.toastIconWrapperClass)
          }, [
            (u(), ee(ze(e.renderIcon(e.icon)), { color: "#ffffff" }))
          ], 2)) : N("", !0),
          e.title ? (u(), f("div", nh, E(e.title), 1)) : N("", !0),
          m("view", {
            class: "nut-toast-text",
            innerHTML: e.msg
          }, null, 8, oh)
        ], 4)
      ], 6), [
        [Ne, e.state.mounted]
      ])
    ]),
    _: 1
  }, 8, ["onAfterLeave"]);
}
const Vt = /* @__PURE__ */ q(th, [["render", lh]]), Gt = {
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
}, sh = (e) => {
  const t = document.getElementById(e.id);
  if (t) {
    const n = $t.find((o) => o.id === e.id);
    n ? e = Z(Z(Z({}, Gt), n), e) : e = Z(Z({}, Gt), e);
    const s = oe(Vt, e);
    return xt(s, t), zo;
  }
}, yt = (e) => {
  e.unmount = Ao;
  let t;
  if (e.id) {
    if (t = e.id, ut.find((n) => n === e.id))
      return sh(e);
  } else
    t = (/* @__PURE__ */ new Date()).getTime() + "";
  return e = Z(Z({}, Gt), e), e.id = t, ut.push(e.id), $t.push(e), sn(e, {
    wrapper: Vt
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
    e.use(Vt);
  }
}, { create: ah } = Y("audio"), rh = ah({
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
    const s = z(null), o = ce({
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
        for (let c = 0; c < w.length; c++)
          document.addEventListener(w[c], () => {
            document.hidden ? s.value.pause() : o.playing && setTimeout(() => {
              s.value.play();
            }, 200);
          });
      } catch (c) {
        console.log(c.message);
      }
    });
    const r = (w) => {
      const c = s.value;
      e.autoplay && c && c.paused && c.play(), o.second = c.duration, o.duration = v(c.duration), t("canPlay", w);
    }, l = (w) => {
      o.currentTime = parseInt(w.target.currentTime);
    }, a = () => {
      o.currentTime > 0 && o.currentTime--, s.value.currentTime = o.currentTime, t("fastBack", o.currentTime);
    }, i = () => {
      const w = s.value;
      o.playing ? (w.pause(), o.handPlaying = !1) : (w.play(), o.handPlaying = !0), o.playing = !o.playing, t("play", o.playing);
    }, p = () => {
      o.currentTime++, s.value.currentTime = o.currentTime, t("forward", o.currentTime);
    }, d = (w) => {
      o.currentDuration = v(w), o.percent = w / o.second * 100;
    }, $ = () => {
      o.playing = !1, t("ended");
    }, g = (w) => {
      const c = s.value;
      c.currentTime = o.second * w / 100, t("changeProgress", c.currentTime);
    }, k = () => {
      o.hanMuted = !o.hanMuted, t("mute", o.hanMuted);
    }, v = (w) => {
      if (!w)
        return "00:00:00";
      let c = parseInt(w), y = Math.floor(c / 3600), h = Math.floor((c - y * 3600) / 60), b = c - y * 3600 - h * 60, S = "";
      return S += ("0" + y.toString()).slice(-2) + ":", S += ("0" + h.toString()).slice(-2) + ":", S += ("0" + b.toString()).slice(-2), S;
    };
    return Q(
      () => o.currentTime,
      (w) => {
        d(w);
      }
    ), Le("audioParent", {
      children: [],
      props: e,
      audioData: o,
      handleMute: k,
      forward: p,
      fastBack: a,
      changeStatus: i
    }), de(Z(Z({}, he(e)), he(o)), {
      audioRef: s,
      fastBack: a,
      forward: p,
      changeStatus: i,
      progressChange: g,
      audioEnd: $,
      onTimeupdate: l,
      handleMute: k,
      onCanplay: r,
      slots: n
    });
  }
}), ih = { class: "nut-audio" }, uh = {
  key: 0,
  class: "nut-audio__progress"
}, ch = { class: "nut-audio__time" }, dh = { class: "nut-audio__bar" }, fh = /* @__PURE__ */ m("div", { class: "nut-audio__button--custom" }, null, -1), ph = { class: "nut-audio__time" }, mh = {
  key: 1,
  class: "nut-audio__icon"
}, hh = ["controls", "src", "preload", "autoplay", "loop", "muted"];
function gh(e, t, n, s, o, r) {
  const l = W("nut-range"), a = W("Service");
  return u(), f("div", ih, [
    e.type == "progress" ? (u(), f("div", uh, [
      m("div", ch, E(e.currentDuration), 1),
      m("div", dh, [
        oe(l, {
          modelValue: e.percent,
          "onUpdate:modelValue": t[0] || (t[0] = (i) => e.percent = i),
          "hidden-range": "",
          "inactive-color": "#cccccc",
          "active-color": "#fa2c19",
          onChange: e.progressChange
        }, {
          button: ne(() => [
            fh
          ]),
          _: 1
        }, 8, ["modelValue", "onChange"])
      ]),
      m("div", ph, E(e.duration), 1)
    ])) : N("", !0),
    e.type == "icon" ? (u(), f("div", mh, [
      m("div", {
        class: L(["nut-audio__icon--box", e.playing ? "nut-audio__icon--play" : "nut-audio__icon--stop"]),
        onClick: t[1] || (t[1] = (...i) => e.changeStatus && e.changeStatus(...i))
      }, [
        e.playing ? (u(), ee(a, {
          key: 0,
          class: "nut-icon-am-rotate nut-icon-am-infinite"
        })) : (u(), ee(a, { key: 1 }))
      ], 2)
    ])) : N("", !0),
    e.type == "none" ? (u(), f("div", {
      key: 2,
      onClick: t[2] || (t[2] = (...i) => e.changeStatus && e.changeStatus(...i))
    }, [
      I(e.$slots, "default")
    ])) : N("", !0),
    e.type != "none" ? I(e.$slots, "default", { key: 3 }) : N("", !0),
    m("audio", {
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
    }, null, 40, hh)
  ]);
}
const yh = /* @__PURE__ */ q(rh, [["render", gh]]), { create: vh } = Y("audio-operate"), $h = "NutAudioOperate", bh = vh({
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
    const t = ke($h), n = Me("audioParent"), s = ce(n), o = z(lt().default);
    return de(Z(Z({}, he(e)), he(s)), { customSlot: o, translate: t });
  }
}), wh = { class: "nut-audio-operate" };
function kh(e, t, n, s, o, r) {
  const l = W("nut-button");
  return u(), f("div", wh, [
    e.type == "back" ? (u(), f("div", {
      key: 0,
      class: "nut-audio-operate-item",
      onClick: t[0] || (t[0] = (...a) => e.fastBack && e.fastBack(...a))
    }, [
      e.customSlot ? N("", !0) : (u(), ee(l, {
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
    e.type == "play" ? (u(), f("div", {
      key: 1,
      class: "nut-audio-operate-item",
      onClick: t[1] || (t[1] = (...a) => e.changeStatus && e.changeStatus(...a))
    }, [
      e.customSlot ? N("", !0) : (u(), ee(l, {
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
    e.type == "forward" ? (u(), f("div", {
      key: 2,
      class: "nut-audio-operate-item",
      onClick: t[2] || (t[2] = (...a) => e.forward && e.forward(...a))
    }, [
      e.customSlot ? N("", !0) : (u(), ee(l, {
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
    e.type == "mute" ? (u(), f("div", {
      key: 3,
      class: "nut-audio-operate-item",
      onClick: t[3] || (t[3] = (...a) => e.handleMute && e.handleMute(...a))
    }, [
      e.customSlot ? N("", !0) : (u(), ee(l, {
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
const Ch = /* @__PURE__ */ q(bh, [["render", kh]]), Vo = Symbol("nut-avatar"), { create: Sh } = Y("avatar"), Th = Sh({
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
    const { size: t, shape: n, bgColor: s, color: o } = he(e), r = ["large", "normal", "small"], l = Me(Vo, null), a = z(null), i = D(() => {
      var $, g;
      return {
        ["nut-avatar"]: !0,
        [`nut-avatar-${t.value || (($ = l == null ? void 0 : l.props) == null ? void 0 : $.size) || "normal"}`]: !0,
        [`nut-avatar-${n.value || ((g = l == null ? void 0 : l.props) == null ? void 0 : g.shape) || "round"}`]: !0
      };
    }), p = D(() => {
      var d, $;
      return {
        width: t.value in r ? "" : `${t.value}px`,
        height: t.value in r ? "" : `${t.value}px`,
        backgroundColor: `${s.value}`,
        color: `${o.value}`,
        marginLeft: (d = l == null ? void 0 : l.props) != null && d.span ? `${($ = l == null ? void 0 : l.props) == null ? void 0 : $.span}px` : ""
      };
    });
    return {
      classes: i,
      styles: p,
      avatarRef: a
    };
  }
});
function Nh(e, t, n, s, o, r) {
  return u(), f("view", {
    ref: "avatarRef",
    style: A(e.styles),
    class: L(e.classes)
  }, [
    I(e.$slots, "default")
  ], 6);
}
const fn = /* @__PURE__ */ q(Th, [["render", Nh]]), { create: Dh } = Y("avatar-group"), _h = Dh({
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
    const t = z(null), n = z(99), s = z(), o = D(() => ({
      marginLeft: -1 * Number(e.span) + "px"
    })), r = (a) => {
      let i = 0;
      a && a.$el && (a = a.$el);
      const p = a.children;
      if (e.zIndex === "right")
        for (let d = 0; d < Number(e.maxCount); d++) {
          const $ = p[d];
          $.style.zIndex = `${99 - d}`;
        }
      for (let d = Number(e.maxCount); d < p.length; d++) {
        const $ = p[d];
        $.className.includes("avater-fold") || ($.style.display = "none", i++);
      }
      n.value = i;
    }, l = (a) => {
      const i = { attributes: !1, childList: !0, subtree: !0 }, p = function($) {
        let g = !1;
        for (let k of $)
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
        let a = Fe(t);
        a && a.$el && (a = a.$el), r(a), s.value = l(a);
      });
    }), Xe(() => {
      var a;
      (a = s.value) == null || a.disconnect();
    }), Le(Vo, {
      props: e,
      avatarGroupRef: t
    }), {
      styles: o,
      foldCount: n,
      avatarGroupRef: t
    };
  }
});
function Ih(e, t, n, s, o, r) {
  const l = W("nut-avatar");
  return u(), f("view", {
    ref: "avatarGroupRef",
    class: "nut-avatar-group",
    style: A(e.styles)
  }, [
    I(e.$slots, "default"),
    e.foldCount > 0 ? (u(), ee(l, {
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
const Bh = /* @__PURE__ */ q(_h, [["render", Ih]]);
var Et = /* @__PURE__ */ ((e) => (e[e.eq = 1] = "eq", e[e.lt = 2] = "lt", e[e.gt = 3] = "gt", e))(Et || {});
function Mh(e, t, n) {
  let s = 0, o = e.length - 1, r = null;
  for (; s <= o; ) {
    r = Math.floor((s + o) / 2);
    const l = e[r], a = n(l, t);
    if (a === 1)
      return r;
    a === 2 ? s = r + 1 : a === 3 && (o = r - 1);
  }
  return r;
}
const { create: Lh } = Y("list"), Eh = Lh({
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
    const n = document.documentElement.clientHeight || document.body.clientHeight || 667, s = z(null), o = z(null), r = z(null), l = ce({
      start: 0,
      originStartIndex: 0,
      scrollTop: 0,
      list: e.listData.slice(),
      cachePositions: [],
      phantomHeight: e.height * e.listData.length
    }), a = D(() => e.containerHeight ? Math.min(e.containerHeight, n) : n), i = D(() => Math.ceil(a.value / e.height)), p = D(() => Math.min(l.originStartIndex + i.value + e.bufferSize, l.list.length)), d = D(() => l.list.slice(l.start, p.value)), $ = () => {
      if (r.value)
        return `translate3d(0, ${l.start >= 1 ? l.cachePositions[l.start - 1].bottom : 0}px, 0)`;
    }, g = () => {
      l.cachePositions = [];
      for (let y = 0; y < l.list.length; ++y)
        l.cachePositions[y] = {
          index: y,
          height: e.height,
          top: y * e.height,
          bottom: (y + 1) * (e.height + e.margin),
          dValue: 0
        };
    }, k = () => {
      let y = r.value.childNodes;
      y = Array.from(y).filter((M) => M.nodeType === 1);
      const h = y[0];
      y.forEach((M, C) => {
        if (!M)
          return;
        const T = We(M), { height: P } = T, K = l.cachePositions[C + l.start].height - P;
        K && (l.cachePositions[C + l.start].bottom -= K, l.cachePositions[C + l.start].height = P, l.cachePositions[C + l.start].dValue = K);
      });
      let b = 0;
      h && (b = l.start);
      const S = l.cachePositions.length;
      let _ = l.cachePositions[b].dValue;
      l.cachePositions[b].dValue = 0;
      for (let M = b + 1; M < S; ++M) {
        const C = l.cachePositions[M];
        l.cachePositions[M].top = l.cachePositions[M - 1].bottom, l.cachePositions[M].bottom = l.cachePositions[M].bottom - _, C.dValue !== 0 && (_ += C.dValue, C.dValue = 0);
      }
      const B = l.cachePositions[S - 1].bottom;
      l.phantomHeight = B;
    }, v = (y = 0) => {
      let h = Mh(
        l.cachePositions,
        y,
        (S, _) => {
          const B = S.bottom;
          return B === _ ? Et.eq : B < _ ? Et.lt : Et.gt;
        }
      );
      return l.cachePositions[h].bottom < y && (h += 1), h;
    }, w = () => {
      l.originStartIndex = 0, l.start = 0, l.scrollTop = 0, s.value.scrollTop = 0, g(), l.phantomHeight = e.height * l.list.length;
    }, c = () => {
      var S;
      const y = (S = s.value) == null ? void 0 : S.scrollTop, { originStartIndex: h } = l, b = v(y);
      b !== h && (l.originStartIndex = b, l.start = Math.max(l.originStartIndex - e.bufferSize, 0), p.value >= l.list.length - 1 && t("scrollBottom")), t(y > l.scrollTop ? "scrollUp" : "scrollDown", y), l.scrollTop = y;
    };
    return g(), Q(
      () => e.listData,
      (y) => {
        if (l.list = y.slice(), l.list.length === y.length)
          g(), k();
        else {
          w();
          return;
        }
      }
    ), Q(
      () => l.start,
      () => {
        r.value && l.list.length > 0 && k();
      }
    ), de(Z({}, he(l)), {
      list: s,
      phantom: o,
      actualContent: r,
      getTransform: $,
      visibleData: d,
      getContainerHeight: a,
      handleScrollEvent: c
    });
  }
});
function Ph(e, t, n, s, o, r) {
  return u(), f("div", {
    ref: "list",
    class: "nut-list",
    style: A({ height: `${e.getContainerHeight}px` }),
    onScrollPassive: t[0] || (t[0] = (...l) => e.handleScrollEvent && e.handleScrollEvent(...l))
  }, [
    m("div", {
      ref: "phantom",
      class: "nut-list-phantom",
      style: A({ height: e.phantomHeight + "px" })
    }, null, 4),
    m("div", {
      ref: "actualContent",
      class: "nut-list-container",
      style: A({ transform: e.getTransform() })
    }, [
      (u(!0), f(x, null, ie(e.visibleData, (l, a) => (u(), f("div", {
        key: l,
        class: "nut-list-item"
      }, [
        I(e.$slots, "default", {
          item: l,
          index: a + e.start
        })
      ]))), 128))
    ], 4)
  ], 36);
}
const Ah = /* @__PURE__ */ q(Eh, [["render", Ph]]), { create: zh } = Y("circle-progress"), Vh = zh({
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
    }), s = D(() => ct(e.color) ? `url(#${t})` : e.color), o = D(() => {
      let a = 283, i = a * Number(e.progress) / 100;
      return {
        stroke: ct(e.color) ? `url(#${t})` : e.color,
        strokeDasharray: `${i}px ${a}px`
      };
    }), r = D(() => ({
      stroke: e.pathColor
    })), l = D(() => {
      if (!ct(e.color))
        return;
      let a = e.color;
      const i = Object.keys(a).sort((d, $) => parseFloat(d) - parseFloat($));
      let p = [];
      return i.map((d) => {
        let $ = {
          key: "",
          value: ""
        };
        $.key = d, $.value = a[d], p.push($);
      }), p;
    });
    return {
      hoverStyle: o,
      pathStyle: r,
      path: n,
      hoverColor: s,
      stop: l,
      refRandomId: t
    };
  }
}), Oh = { viewBox: "0 0 100 100" }, Hh = ["id"], Rh = ["offset", "stop-color"], Fh = ["d", "stroke-width"], Wh = ["d", "stroke", "stroke-linecap", "stroke-width"], Yh = { class: "nut-circle-progress__text" };
function jh(e, t, n, s, o, r) {
  return u(), f("div", {
    class: "nut-circle-progress",
    style: A({ height: Number(e.radius) * 2 + "px", width: Number(e.radius) * 2 + "px" })
  }, [
    (u(), f("svg", Oh, [
      m("defs", null, [
        m("linearGradient", {
          id: e.refRandomId,
          x1: "100%",
          y1: "0%",
          x2: "0%",
          y2: "0%"
        }, [
          (u(!0), f(x, null, ie(e.stop, (l, a) => (u(), f("stop", {
            key: a,
            offset: l.key,
            "stop-color": l.value
          }, null, 8, Rh))), 128))
        ], 8, Hh)
      ]),
      m("path", {
        class: "nut-circle-progress__path",
        style: A(e.pathStyle),
        d: e.path,
        fill: "none",
        "stroke-width": e.strokeWidth
      }, " > ", 12, Fh),
      m("path", {
        class: "nut-circle-progress__hover",
        style: A(e.hoverStyle),
        d: e.path,
        fill: "none",
        stroke: e.hoverColor,
        "stroke-linecap": e.strokeLinecap,
        "stroke-width": e.strokeWidth
      }, null, 12, Wh)
    ])),
    m("div", Yh, [
      I(e.$slots, "default", {}, () => [
        m("div", null, E(e.progress) + "%", 1)
      ])
    ])
  ], 4);
}
const Uh = /* @__PURE__ */ q(Vh, [["render", jh]]), { create: Kh } = Y("noticebar"), Xh = Kh({
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
    CircleClose: tn
  },
  emits: ["click", "close", "acrossEnd"],
  setup(e, { emit: t, slots: n }) {
    const s = z(null), o = z(null), r = ce({
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
    }), l = D(() => r.isCanScroll == null ? e.wrapable : !r.isCanScroll && !e.wrapable), a = D(() => ({
      "nut-noticebar__page-wrap-content": !0,
      "nut-ellipsis": l.value,
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
        $();
      }
    ), Q(
      () => e.list,
      (M) => {
        r.scrollList = [].concat(M);
      }
    );
    const $ = () => {
      r.showNoticebar != !1 && setTimeout(() => {
        if (!s.value || !o.value)
          return;
        const M = s.value.getBoundingClientRect().width, C = o.value.getBoundingClientRect().width;
        r.isCanScroll = e.scrollable == null ? C > M : e.scrollable, r.isCanScroll ? (r.wrapWidth = M, r.offsetWidth = C, r.duration = C / e.speed, r.animationClass = "play") : r.animationClass = "";
      }, 0);
    }, g = (M) => {
      t("click", M);
    }, k = (M) => {
      e.closeMode && (r.showNoticebar = !e.closeMode), t("close", M);
    }, v = (M) => {
      r.firstRound = !1, t("acrossEnd", M), setTimeout(() => {
        r.duration = (r.offsetWidth + r.wrapWidth) / e.speed, r.animationClass = "play-infinite";
      }, 0);
    }, w = () => {
      c(), r.timer = setInterval(c, ~~(e.height / e.speed / 4 * 1e3) + e.standTime);
    }, c = () => {
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
            h(C, !(C < M - 1));
        },
        e.standTime + 100 * e.speed
      );
    }, h = (M, C) => {
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
      }, e.standTime)) : $();
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
      isEllipsis: l,
      barStyle: i,
      contentStyle: p,
      horseLampStyle: d,
      wrap: s,
      content: o,
      handleClick: g,
      onClickIcon: k,
      onAnimationEnd: v,
      go: b,
      handleClickIcon: S,
      slots: n,
      pxCheck: Be,
      wrapContentClass: a
    });
  }
}), qh = { class: "nut-noticebar" }, Zh = {
  key: 0,
  class: "nut-noticebar__page-lefticon"
}, Gh = {
  ref: "wrap",
  class: "nut-noticebar__page-wrap"
}, Jh = { class: "showNotica" }, Qh = { class: "nut-noticebar-custom-item" }, xh = ["onClick"];
function eg(e, t, n, s, o, r) {
  const l = W("Notice"), a = W("CircleClose"), i = W("ScrollItem");
  return u(), f("view", qh, [
    e.direction == "across" ? Ce((u(), f("view", {
      key: 0,
      class: L(["nut-noticebar__page", {
        "nut-noticebar__page--withicon": e.closeMode,
        "nut-noticebar__page--close": e.closeMode,
        "nut-noticebar__page--wrapable": e.wrapable
      }]),
      style: A(e.barStyle),
      onClick: t[3] || (t[3] = (...p) => e.handleClick && e.handleClick(...p))
    }, [
      e.leftIcon ? (u(), f("view", Zh, [
        I(e.$slots, "left-icon", {}, () => [
          oe(l, { size: "16px" })
        ])
      ])) : N("", !0),
      m("view", Gh, [
        m("view", {
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
      e.closeMode || e.$slots["right-icon"] ? (u(), f("view", {
        key: 1,
        class: "nut-noticebar__page-righticon",
        onClick: t[2] || (t[2] = De((...p) => e.onClickIcon && e.onClickIcon(...p), ["stop"]))
      }, [
        e.$slots["right-icon"] ? I(e.$slots, "right-icon", { key: 0 }) : (u(), ee(a, { key: 1 }))
      ])) : N("", !0)
    ], 6)), [
      [Ne, e.showNoticebar]
    ]) : N("", !0),
    e.scrollList.length > 0 && e.direction == "vertical" && e.showNoticebar ? (u(), f("view", {
      key: 1,
      class: "nut-noticebar__vertical",
      style: A(e.barStyle)
    }, [
      e.slots.default ? (u(), f(x, { key: 0 }, [
        m("view", {
          class: "nut-noticebar__vertical-list",
          style: A(e.horseLampStyle)
        }, [
          m("div", Jh, [
            (u(!0), f(x, null, ie(e.scrollList, (p, d) => (u(), ee(i, {
              key: d,
              style: A({ height: e.height + "px", "line-height": e.height + "px" }),
              item: p
            }, null, 8, ["style", "item"]))), 128))
          ])
        ], 4),
        m("view", Qh, [
          I(e.$slots, "default")
        ])
      ], 64)) : (u(), f("ul", {
        key: 1,
        class: "nut-noticebar__vertical-list",
        style: A(e.horseLampStyle)
      }, [
        (u(!0), f(x, null, ie(e.scrollList, (p, d) => (u(), f("li", {
          key: d,
          class: "nut-noticebar__vertical-item",
          style: A({ height: e.pxCheck(e.height), lineHeight: e.pxCheck(e.height) }),
          onClick: ($) => e.go(p)
        }, E(p), 13, xh))), 128))
      ], 4)),
      m("view", {
        class: "go",
        onClick: t[4] || (t[4] = (p) => !e.slots.rightIcon && e.handleClickIcon())
      }, [
        I(e.$slots, "right-icon", {}, () => [
          e.closeMode ? (u(), ee(a, {
            key: 0,
            color: e.color,
            size: "11px"
          }, null, 8, ["color"])) : N("", !0)
        ])
      ])
    ], 4)) : N("", !0)
  ]);
}
const tg = /* @__PURE__ */ q(Xh, [["render", eg]]), { create: ng } = Y("empty"), og = "NutEmpty", lg = {
  empty: "https://static-ftcms.jd.com/p/files/61a9e3183985005b3958672b.png",
  error: "https://ftcms.jd.com/p/files/61a9e33ee7dcdbcc0ce62736.png",
  network: "https://static-ftcms.jd.com/p/files/61a9e31de7dcdbcc0ce62734.png"
}, sg = ng({
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
    const t = ke(og), n = D(() => e.imageSize ? {
      width: Be(e.imageSize),
      height: Be(e.imageSize)
    } : {});
    return { src: D(() => e.image.startsWith("https://") || e.image.startsWith("http://") || e.image.startsWith("//") ? e.image : lg[e.image]), style: n, translate: t };
  }
}), ag = { class: "nut-empty" }, rg = ["src"], ig = { class: "nut-empty__description" };
function ug(e, t, n, s, o, r) {
  return u(), f("view", ag, [
    m("view", {
      class: "nut-empty__box",
      style: A(e.style)
    }, [
      I(e.$slots, "image", {}, () => [
        e.src ? (u(), f("img", {
          key: 0,
          class: "nut-empty__box--img",
          src: e.src
        }, null, 8, rg)) : N("", !0)
      ])
    ], 4),
    I(e.$slots, "description", {}, () => [
      m("view", ig, E(e.description || e.translate("noData")), 1)
    ]),
    I(e.$slots, "default")
  ]);
}
const cg = /* @__PURE__ */ q(sg, [["render", ug]]);
function An(e, t) {
  let n = null, s = Date.now();
  return function() {
    let o = Date.now(), r = t - (o - s);
    n && clearTimeout(n), r <= 0 ? (e.apply(null, arguments), s = Date.now()) : n = setTimeout(e, r);
  };
}
const { create: dg } = Y("video"), fg = "NutVideo", pg = dg({
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
    const s = ke(fg), o = ce({
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
    }), r = z(null), l = D(() => e.options.disabled);
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
              $();
            }), o.videoElm.addEventListener("timeupdate", An(g, 1e3)), o.videoElm.addEventListener("ended", k), t("play", o.videoElm);
          } catch (O) {
            v();
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
      var j = "";
      return K != 0 ? j = K + ":" + G + ":" + le : j = G + ":" + le, j;
    }, $ = () => {
      o.videoSet.loaded && (o.videoSet.loaded = o.videoElm.buffered.end(0) / o.videoElm.duration * 100);
    }, g = () => {
      const O = o.videoElm.currentTime / o.videoElm.duration;
      o.videoSet.progress.current = Math.round(o.videoSet.progress.width * O), o.videoSet.totalTime = d(o.videoElm.duration), o.videoSet.displayTime = d(o.videoElm.currentTime), t("time", o.videoSet.displayTime, o.videoSet.totalTime);
    }, k = () => {
      o.state.playing = !1, o.state.isEnd = !0, o.videoSet.displayTime = "00:00", o.videoSet.progress.current = 0, o.videoElm.currentTime = 0, t("playend", o.videoElm);
    }, v = () => {
      o.state.isError = !0;
    }, w = () => {
      o.state.vol = e.options.volume;
    }, c = () => {
      o.state.isMuted = !o.state.isMuted, o.videoElm.muted = o.state.isMuted;
    }, y = () => {
    }, h = (O) => {
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
      handleError: v,
      isDisabled: l,
      play: p,
      handleMuted: c,
      touchSlidSrart: y,
      touchSlidMove: h,
      touchSlidEnd: b,
      retry: _,
      fullScreen: B,
      translate: s
    });
  }
}), mg = {
  ref: "videocon",
  class: "nut-video"
}, hg = ["muted", "autoplay", "loop", "poster", "controls", "preload"], gg = ["src", "type"], yg = { class: "nut-video-controller__now" }, vg = { class: "nut-video-controller__progress" }, $g = {
  ref: "progressBar",
  class: "nut-video-controller__progress-value"
}, bg = /* @__PURE__ */ m("div", { class: "nut-video-controller__ball-move" }, null, -1), wg = [
  bg
], kg = {
  ref: "playedBar",
  class: "nut-video-controller__played"
}, Cg = { class: "nut-video-controller__total" }, Sg = { class: "nut-video-error" }, Tg = { class: "nut-video-error-tip" };
function Ng(e, t, n, s, o, r) {
  return u(), f("div", mg, [
    m("video", {
      ref: "root",
      class: "nut-video-player",
      muted: e.options.muted,
      autoplay: e.options.autoplay,
      loop: e.options.loop,
      poster: e.options.poster,
      controls: e.options.controls,
      preload: e.options.preload,
      onError: t[0] || (t[0] = (...l) => e.handleError && e.handleError(...l))
    }, [
      m("source", {
        src: e.source.src,
        type: e.source.type
      }, null, 8, gg)
    ], 40, hg),
    e.showToolbox && !e.isDisabled ? (u(), f("div", {
      key: 0,
      ref: "touchMask",
      class: "nut-video-mask",
      onClick: t[1] || (t[1] = (...l) => e.play && e.play(...l))
    }, null, 512)) : N("", !0),
    e.showToolbox && !e.isDisabled ? Ce((u(), f("div", {
      key: 1,
      ref: "palyBtn",
      class: "nut-video-play-btn",
      onClick: t[2] || (t[2] = (...l) => e.play && e.play(...l))
    }, null, 512)), [
      [Ne, !e.state.playing]
    ]) : N("", !0),
    Ce(m("div", {
      class: L(["nut-video-controller", { "nut-video-controller--show": !e.state.playing, "nut-video-controller--hide": e.state.playing }])
    }, [
      m("div", {
        class: "nut-video-controller__playbtn",
        onClick: t[3] || (t[3] = (...l) => e.play && e.play(...l))
      }),
      m("div", yg, E(e.videoSet.displayTime), 1),
      m("div", vg, [
        m("div", $g, [
          m("div", {
            class: "buffered",
            style: A({ width: `${e.videoSet.loaded}%` })
          }, null, 4),
          m("div", {
            class: "nut-video-controller__ball",
            style: A({
              transform: `translate3d(${e.videoSet.progress.current}px, -50%, 0)`
            }),
            onTouchmove: t[4] || (t[4] = De((l) => e.touchSlidMove(l), ["stop", "prevent"])),
            onTouchstart: t[5] || (t[5] = De((l) => e.touchSlidSrart(), ["stop"])),
            onTouchend: t[6] || (t[6] = De((l) => e.touchSlidEnd(l), ["stop"]))
          }, wg, 36),
          m("div", kg, null, 512)
        ], 512)
      ]),
      m("div", Cg, E(e.videoSet.totalTime), 1),
      m("div", {
        class: L(["nut-video-controller__volume", { muted: e.state.isMuted }]),
        onClick: t[7] || (t[7] = (...l) => e.handleMuted && e.handleMuted(...l))
      }, null, 2),
      m("div", {
        class: "nut-video-controller__full",
        onClick: t[8] || (t[8] = (...l) => e.fullScreen && e.fullScreen(...l))
      })
    ], 2), [
      [Ne, e.showToolbox && !e.isDisabled]
    ]),
    Ce(m("div", Sg, [
      m("p", Tg, E(e.translate("errorTip")), 1),
      m("p", {
        class: "nut-video-error-retry",
        onClick: t[9] || (t[9] = (...l) => e.retry && e.retry(...l))
      }, E(e.translate("clickRetry")), 1)
    ], 512), [
      [Ne, e.state.isError]
    ])
  ], 512);
}
const pn = /* @__PURE__ */ q(pg, [["render", Ng]]), Oo = Symbol("nut-steps"), { create: Dg, componentName: _g } = Y("steps"), Ig = Dg({
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
    const s = ce({
      children: []
    }), o = D(() => {
      const a = _g;
      return {
        [a]: !0,
        [`${a}-${e.direction}`]: !0,
        [`${a}-dot`]: !!e.progressDot
      };
    });
    return Le(Oo, {
      relation: (a) => {
        a && s.children.push(a);
      },
      state: s,
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
}), { create: Bg, componentName: Mg } = Y("step"), Lg = Bg({
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
    const { proxy: e } = Ye(), t = Me(Oo);
    t.relation(e);
    const n = ce({
      dot: t.props.progressDot
    }), s = D(() => t.state.children.indexOf(e) + 1), o = () => {
      const i = s.value;
      return i < +t.props.current ? "finish" : i === +t.props.current ? "process" : "wait";
    }, r = D(() => o()), l = D(() => {
      const i = Mg;
      return {
        [i]: !0,
        [`${i}-${r.value}`]: !0
      };
    }), a = () => {
      t.onEmit(s.value);
    };
    return de(Z({}, he(n)), {
      index: s,
      classes: l,
      handleClickStep: a
    });
  }
}), Eg = { class: "nut-step-head" }, Pg = /* @__PURE__ */ m("view", { class: "nut-step-line" }, null, -1), Ag = { class: "nut-step-icon-inner" }, zg = {
  key: 1,
  class: "nut-step-inner"
}, Vg = { class: "nut-step-main" }, Og = { class: "nut-step-title" }, Hg = { key: 0 }, Rg = {
  key: 0,
  class: "nut-step-content"
}, Fg = ["innerHTML"];
function Wg(e, t, n, s, o, r) {
  return u(), f("view", {
    class: L(e.classes),
    onClick: t[0] || (t[0] = (...l) => e.handleClickStep && e.handleClickStep(...l))
  }, [
    m("view", Eg, [
      Pg,
      m("view", {
        class: L(["nut-step-icon", [e.dot ? "" : "is-icon"]])
      }, [
        m("view", Ag, [
          I(e.$slots, "icon", {}, () => [
            e.dot ? (u(), f(x, { key: 0 }, [], 64)) : (u(), f("view", zg, E(e.index), 1))
          ])
        ])
      ], 2)
    ]),
    m("view", Vg, [
      m("view", Og, [
        e.$slots.title ? N("", !0) : (u(), f("span", Hg, E(e.title), 1)),
        I(e.$slots, "title")
      ]),
      e.content || e.$slots.content ? (u(), f("view", Rg, [
        e.$slots.content ? N("", !0) : (u(), f("span", {
          key: 0,
          innerHTML: e.content
        }, null, 8, Fg)),
        I(e.$slots, "content")
      ])) : N("", !0)
    ])
  ], 2);
}
const Yg = /* @__PURE__ */ q(Lg, [["render", Wg]]), Ho = Symbol("nut-swiper"), { create: jg, componentName: zn } = Y("swiper"), Ug = jg({
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
  setup(e, { emit: t, slots: n, expose: s }) {
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
    }), l = et(), a = D(() => e.direction === "vertical"), i = D(() => {
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
    }), d = D(() => a.value ? l.deltaY.value : l.deltaX.value), $ = D(() => l.direction.value === e.direction), g = D(() => r.children.length), k = D(() => r[a.value ? "height" : "width"]), v = D(() => g.value * k.value), w = D(() => r.rect ? (a.value ? r.rect.height : r.rect.width) - k.value * g.value : 0), c = D(() => (r.active + g.value) % g.value), y = () => {
      let R = 0;
      R = r.offset, r.style = {
        transitionDuration: `${r.moving ? 0 : e.duration}ms`,
        transform: `translate${a.value ? "Y" : "X"}(${R}px)`,
        [a.value ? "height" : "width"]: `${k.value * g.value}px`,
        [a.value ? "width" : "height"]: `${a.value ? r.width : r.height}px`
      };
    }, h = (R) => {
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
      return e.loop || (se = Ae(se, w.value, 0)), se;
    }, S = (R) => {
      const { active: te } = r;
      return R ? e.loop ? Ae(te + R, -1, g.value) : Ae(te + R, 0, g.value - 1) : te;
    }, _ = ({ pace: R = 0, offset: te = 0, isEmit: X = !1 }) => {
      if (g.value <= 1)
        return;
      const { active: se } = r, ue = S(R), pe = b(ue, te);
      if (e.loop) {
        if (r.children[0] && pe !== w.value) {
          const we = pe < w.value;
          r.children[0].setOffset(we ? v.value : 0);
        }
        if (r.children[g.value - 1] && pe !== 0) {
          const we = pe > 0;
          r.children[g.value - 1].setOffset(we ? -v.value : 0);
        }
      }
      r.active = ue, r.offset = pe, X && se !== r.active && t("change", c.value), y();
    }, B = () => {
      r.moving = !0, r.active <= -1 && _({ pace: g.value }), r.active >= g.value && _({ pace: -g.value });
    }, M = () => {
      r.autoplayTimer && clearTimeout(r.autoplayTimer);
    }, C = (R) => {
      B(), l.reset(), Oe(() => {
        Oe(() => {
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
      B(), l.reset(), Oe(() => {
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
      e.isPreventDefault && R.preventDefault(), e.isStopPropagation && R.stopPropagation(), e.touchable && (l.start(R), r.touchTime = Date.now(), M(), B());
    }, j = (R) => {
      e.touchable && r.moving && (l.move(R), $.value && _({
        offset: d.value
      }));
    }, U = () => {
      if (!e.touchable || !r.moving)
        return;
      const R = d.value / (Date.now() - r.touchTime);
      if ((Math.abs(R) > 0.3 || Math.abs(d.value) > +(k.value / 2).toFixed(2)) && $.value) {
        let X = 0;
        const se = a.value ? l.offsetY.value : l.offsetX.value;
        e.loop ? X = se > 0 ? d.value > 0 ? -1 : 1 : 0 : X = -Math[d.value > 0 ? "ceil" : "floor"](d.value / k.value), _({
          pace: X,
          isEmit: !0
        });
      } else
        d.value && _({ pace: 0 });
      r.moving = !1, y(), K();
    };
    return Le(Ho, {
      props: e,
      size: k,
      relation: h
    }), s({
      prev: T,
      next: P,
      to: O
    }), St(() => {
      M();
    }), Qt(() => {
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
      activePagination: c,
      onTouchStart: le,
      onTouchMove: j,
      onTouchEnd: U
    };
  }
});
function Kg(e, t, n, s, o, r) {
  return u(), f("view", {
    ref: "container",
    class: "nut-swiper",
    onTouchstart: t[0] || (t[0] = (...l) => e.onTouchStart && e.onTouchStart(...l)),
    onTouchmove: t[1] || (t[1] = (...l) => e.onTouchMove && e.onTouchMove(...l)),
    onTouchend: t[2] || (t[2] = (...l) => e.onTouchEnd && e.onTouchEnd(...l)),
    onTouchcancel: t[3] || (t[3] = (...l) => e.onTouchEnd && e.onTouchEnd(...l))
  }, [
    m("view", {
      class: L(e.classesInner),
      style: A(e.state.style)
    }, [
      I(e.$slots, "default")
    ], 6),
    I(e.$slots, "page"),
    e.paginationVisible && !e.$slots.page ? (u(), f("view", {
      key: 0,
      class: L(e.classesPagination)
    }, [
      (u(!0), f(x, null, ie(e.state.children.length, (l, a) => (u(), f("i", {
        key: a,
        style: A({
          backgroundColor: e.activePagination === a ? e.paginationColor : e.paginationUnselectedColor
        }),
        class: L({ active: e.activePagination === a })
      }, null, 6))), 128))
    ], 2)) : N("", !0)
  ], 544);
}
const mn = /* @__PURE__ */ q(Ug, [["render", Kg]]);
function Xg(e) {
  const t = Ye();
  t && Object.assign(t.proxy, e);
}
const { create: qg } = Y("swiper-item"), Zg = qg({
  setup() {
    const e = Me(Ho);
    e.relation(Ye());
    const t = ce({
      offset: 0
    }), n = D(() => {
      const o = {}, r = e == null ? void 0 : e.props.direction;
      return e != null && e.size.value && (o[r === "horizontal" ? "width" : "height"] = `${e == null ? void 0 : e.size.value}px`), t.offset && (o.transform = `translate${r === "horizontal" ? "X" : "Y"}(${t.offset}px)`), o;
    }), s = (o) => {
      t.offset = o;
    };
    return Xe(() => {
      e.relation(Ye(), "unmount");
    }), Xg({ setOffset: s }), {
      style: n
    };
  }
});
function Gg(e, t, n, s, o, r) {
  return u(), f("view", {
    class: "nut-swiper-item",
    style: A(e.style)
  }, [
    I(e.$slots, "default")
  ], 4);
}
const hn = /* @__PURE__ */ q(Zg, [["render", Gg]]), Jg = ["innerHTML"], Qg = ["innerHTML"], Vn = "nut-price", Ot = /* @__PURE__ */ Pe({
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
    })), s = D(() => t.needSymbol ? t.symbol : ""), o = (a) => String(a).indexOf(".") > 0, r = (a) => (Number(a) == 0 && (a = 0), o(a) ? (a = Number(a).toFixed(t.decimalDigits), a = typeof a.split(".") == "string" ? a.split(".") : a.split(".")[0]) : a = a.toString(), t.thousands ? (a || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,") : a), l = (a) => {
      Number(a) == 0 && (a = 0), o(a) ? (a = Number(a).toFixed(t.decimalDigits), a = typeof a.split(".") == "string" ? 0 : a.split(".")[1] ? a.split(".")[1] : 0) : a = 0;
      const i = "0." + a, p = Number(i).toFixed(t.decimalDigits);
      return String(p).substring(2, p.length);
    };
    return (a, i) => (u(), f("view", {
      class: L(n.value)
    }, [
      a.needSymbol && a.position === "before" ? (u(), f("view", {
        key: 0,
        class: L(["nut-price--symbol", `nut-price--symbol-${a.size}`]),
        innerHTML: s.value
      }, null, 10, Jg)) : N("", !0),
      m("view", {
        class: L(`nut-price--${a.size}`)
      }, E(r(a.price)), 3),
      a.decimalDigits != 0 ? (u(), f("view", {
        key: 1,
        class: L(`nut-price--decimal-${a.size}`)
      }, ".", 2)) : N("", !0),
      m("view", {
        class: L(`nut-price--decimal-${a.size}`)
      }, E(l(a.price)), 3),
      a.needSymbol && a.position === "after" ? (u(), f("view", {
        key: 2,
        class: L(["nut-price--symbol", `nut-price--symbol-${a.size}`]),
        innerHTML: s.value
      }, null, 10, Qg)) : N("", !0)
    ], 2));
  }
});
je(Ot);
const Ro = {
  show: { type: Boolean, default: !1 },
  initNo: { type: Number, default: 0 },
  showIndex: { type: Boolean, default: !0 },
  minZoom: { type: Number, default: 1 / 3 },
  maxZoom: { type: Number, default: 3 }
}, { create: xg } = Y("image-preview-item"), e0 = xg({
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
    }), s = et(), o = D(() => {
      const { rootWidth: T, rootHeight: P } = e, O = P / T;
      return n.imageRatio > O;
    }), r = D(() => {
      const T = e.image;
      if (T && T.src) {
        const { scale: P, moveX: O, moveY: K, moving: G, zooming: le } = n, j = {
          transitionDuration: le || G ? "0s" : ".3s"
        };
        if (P !== 1) {
          const U = O / P, R = K / P;
          j.transform = `scale(${P}, ${P}) translate(${U}px, ${R}px)`;
        }
        return j;
      }
      return {};
    }), l = D(() => {
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
      T = Ae(T, +e.minZoom, +e.maxZoom + 1), T !== n.scale && (n.scale = T, t("scale", {
        scale: T,
        index: e.initNo
      }));
    }, $ = () => {
      const T = n.scale > 1 ? 1 : 2;
      d(T), n.moveX = 0, n.moveY = 0;
    }, g = (T) => Math.sqrt(pt(T[0].clientX - T[1].clientX, 2) + pt(T[0].clientY - T[1].clientY, 2));
    let k, v, w, c, y, h, b;
    const S = (T) => {
      const { touches: P } = T, { offsetX: O } = s;
      s.start(T), b = P.length, k = n.moveX, v = n.moveY, h = Date.now(), n.moving = b === 1 && n.scale !== 1, n.zooming = b === 2 && !O.value, n.zooming && (w = n.scale, c = g(T.touches));
    }, _ = (T) => {
      const { touches: P } = T;
      if (s.move(T), (n.moving || n.zooming) && dt(T, !0), n.moving) {
        const { deltaX: O, deltaY: K } = s, G = O.value + k, le = K.value + v;
        n.moveX = Ae(G, -l.value, l.value), n.moveY = Ae(le, -a.value, a.value);
      }
      if (n.zooming && P.length === 2) {
        const O = g(P), K = w * O / c;
        d(K);
      }
    }, B = () => {
      if (b == 1 && e.video && e.video.source || b > 1)
        return;
      const { offsetX: T, offsetY: P } = s, O = Date.now() - h, K = 250, G = 5;
      T.value < G && P.value < G && O < K && (y ? (clearTimeout(y), y = null, $()) : y = setTimeout(() => {
        e.contentClose && t("close"), y = null;
      }, K));
    }, M = (T) => {
      let P = !1;
      (n.moving || n.zooming) && (P = !0, n.moving && k === n.moveX && v === n.moveY && (P = !1), T.touches.length || (n.zooming && (n.moveX = Ae(n.moveX, -l.value, l.value), n.moveY = Ae(n.moveY, -a.value, a.value), n.zooming = !1), n.moving = !1, k = 0, v = 0, w = 1, n.scale < 1 && p(), n.scale > e.maxZoom && (n.scale = +e.maxZoom))), dt(T, P), B(), s.reset();
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
}), t0 = ["src"];
function n0(e, t, n, s, o, r) {
  const l = W("nut-video"), a = W("nut-swiper-item");
  return u(), ee(a, { onClick: e.closeSwiper }, {
    default: ne(() => [
      m("view", {
        style: A(e.imageStyle),
        class: "nut-image-preview-box",
        onTouchstart: t[1] || (t[1] = (...i) => e.onTouchStart && e.onTouchStart(...i)),
        onTouchmove: t[2] || (t[2] = (...i) => e.onTouchMove && e.onTouchMove(...i)),
        onTouchend: t[3] || (t[3] = (...i) => e.onTouchEnd && e.onTouchEnd(...i)),
        onTouchcancel: t[4] || (t[4] = (...i) => e.onTouchEnd && e.onTouchEnd(...i))
      }, [
        e.image && e.image.src ? (u(), f("img", {
          key: 0,
          src: e.image.src,
          class: "nut-image-preview-img",
          onLoad: t[0] || (t[0] = (...i) => e.imageLoad && e.imageLoad(...i))
        }, null, 40, t0)) : N("", !0),
        e.video && e.video.source ? (u(), ee(l, {
          key: 1,
          source: e.video.source,
          options: e.video.options
        }, null, 8, ["source", "options"])) : N("", !0)
      ], 36)
    ]),
    _: 1
  }, 8, ["onClick"]);
}
const o0 = /* @__PURE__ */ q(e0, [["render", n0]]), { create: l0 } = Y("image-preview"), s0 = l0({
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
    ImagePreviewItem: o0,
    CircleClose: tn,
    NutPopup: Ee,
    NutSwiper: mn
  },
  setup(e, { emit: t }) {
    const n = z(), s = ce({
      showPop: e.show,
      active: 0,
      rootWidth: 0,
      rootHeight: 0
    }), o = D(() => {
      const d = "nut-image-preview-close";
      return `nut-image-preview-close-icon ${e.closeIconPosition == "top-right" ? `${d}-right` : `${d}-left`}`;
    }), r = D(() => Yn(e.videos) ? [].concat(e.videos).concat(e.images) : e.images), l = (d) => {
      d !== s.active && (s.active = d, t("change", s.active));
    }, a = () => {
      en(e.beforeClose, {
        args: [s.active],
        done: () => i()
      });
    }, i = () => {
      s.showPop = !1, t("close");
    }, p = () => {
      if (n.value) {
        const d = We(n.value);
        s.rootHeight = d.height, s.rootWidth = d.width;
      }
    };
    return Q(
      () => e.show,
      (d) => {
        s.showPop = d, d && (l(e.initNo), Se(() => {
          p();
        }));
      }
    ), Q(
      () => e.initNo,
      (d) => {
        d != s.active && l(d);
      }
    ), ve(() => {
      l(e.initNo);
    }), de(Z({
      swipeRef: n
    }, he(s)), {
      onClose: a,
      mergeImages: r,
      setActive: l,
      iconClasses: o
    });
  }
}), a0 = {
  ref: "swipeRef",
  class: "nut-image-preview"
}, r0 = {
  key: 0,
  class: "nut-image-preview-index"
};
function i0(e, t, n, s, o, r) {
  const l = W("image-preview-item"), a = W("nut-swiper"), i = W("CircleClose"), p = W("nut-popup");
  return u(), ee(p, {
    visible: e.showPop,
    "onUpdate:visible": t[1] || (t[1] = (d) => e.showPop = d),
    "pop-class": "nut-image-preview-custom-pop",
    "teleport-disable": e.teleportDisable,
    teleport: e.teleport,
    "lock-scroll": "",
    onClosed: e.onClose
  }, {
    default: ne(() => [
      m("view", a0, [
        e.showPop ? (u(), ee(a, {
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
            (u(!0), f(x, null, ie(e.mergeImages, (d, $) => (u(), ee(l, {
              key: $,
              video: $ < e.videos.length ? d : {},
              image: $ >= e.videos.length ? d : {},
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
      e.showIndex ? (u(), f("view", r0, E(e.active + 1) + " / " + E(e.mergeImages.length), 1)) : N("", !0),
      e.closeable ? (u(), f("view", {
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
const gn = /* @__PURE__ */ q(s0, [["render", i0]]);
class u0 {
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
class c0 {
  constructor(t) {
    V(this, "options", new u0());
    const n = Object.assign(this.options, t), { unmount: s } = sn(n, {
      name: "image-preview",
      components: [Ee, pn, mn, hn, Tt],
      wrapper: () => ({
        setup() {
          return () => (n.onClose = () => {
            n.show = !1, Se(() => {
              s();
            });
          }, be(gn, n));
        }
      })
    });
  }
}
const d0 = (e) => new c0(e);
d0.install = (e) => {
  e.use(gn);
};
function f0(e) {
  const t = Ye();
  t && Object.assign(t.proxy, e);
}
const { create: p0 } = Y("countup"), m0 = p0({
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
    const n = z(null), s = z([]), o = (C) => {
      C && s.value.push(C);
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
    }), { startFlag: l, scrolling: a, customBgImg: i, type: p } = ce(e);
    Q(
      () => e.customChangeNum,
      () => {
        $(), c(0);
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
      l && (a || i ? p != "machine" && c() : (w(), setTimeout(() => {
        r.valFlag = !0;
      }, 300)));
    }, $ = () => {
      clearInterval(Number(r.timer)), r.timer = null;
    }, g = (C, T, P) => {
      const O = (C.toString().split(".")[1] || "").length, K = (T.toString().split(".")[1] || "").length, G = Math.pow(10, Math.max(O, K));
      return P == "-" ? Number((C * G - T * G).toFixed(0)) / G : Number((C * G + T * G).toFixed(0)) / G;
    }, k = (C) => {
      let { num_total_len: T, pointNum: P, initDigit1: O, initDigit2: K, sortFlag: G } = r, le = G == "add" || G == "equal" ? String(K)[C - (T - P)] : 10 - Number(String(K)[C - (T - P)]), j = G == "add" || G == "equal" ? String(O)[C] : 10 - Number(String(O)[C]), U = C > T - P - 1 ? -le * 100 + "%" : C <= String(O).length - 1 ? -j * 100 + "%" : 0;
      return U == "-1000%" && (U = 0), U;
    }, v = (C) => {
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
    }, c = (C) => {
      let { initNum: T, endNum: P, toFixed: O, customBgImg: K } = e;
      K && (T = e.customChangeNum);
      let G, le, j, U;
      T != 0 ? (O != 0 && (T = Number(T.toFixed(O))), String(T).indexOf(".") > -1 ? (G = String(T).split(".")[0].length, le = String(T).split(".")[1].length) : (G = String(T).length, le = 0)) : (G = 1, le = 0), P != 0 ? (O != 0 && (P = Number(P.toFixed(O))), String(P).indexOf(".") > -1 ? (j = String(P).split(".")[0].length, U = String(P).split(".")[1].length) : (j = String(P).length, U = 0)) : (j = 1, U = 0);
      let R = G >= j ? G : j, te = le >= U ? le : U;
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
        let ue = s.value[r.num_total_len - 1];
        y(ue);
      }) : C !== 0 && S();
    }, y = (C) => {
      $();
      var T = 1;
      r.pointNum != 0 && (T = 1 / Math.pow(10, r.pointNum)), r.timer = setInterval(() => {
        h(C), r.totalCount = g(r.totalCount, T, "-"), r.totalCount <= 0 && ($(), t("scrollEnd"), r.valFlag = !1);
      }, e.during);
    }, h = (C) => {
      let T = C.getAttribute("turn-number"), P;
      if (r.sortFlag == "add" ? P = parseInt(String(T)) + 1 : P = parseInt(String(T)) - 1 >= 0 ? parseInt(String(T)) - 1 : 9, C.setAttribute("turn-number", String(P)), (C.style.transition == "none 0s ease 0s" || P == 1 || !C.style.transition) && (C.style.transition = `all linear ${e.during}ms`), P == 10 || r.sortFlag == "reduce" && P == 0) {
        var O = null;
        C.style.top = `-${r.sortFlag == "add" ? P * 100 : (10 - P) * 100}%`, C.setAttribute("turn-number", "0"), O = setTimeout(() => {
          O && clearTimeout(O), C.style.transition = "none", C.style.top = "0", b(C, P);
        }, 0.975 * e.during);
      } else
        C.style.top = `-${r.sortFlag == "add" ? P * 100 : (10 - P) * 100}%`;
      C.style.top == "-100%" && r.sortFlag == "reduce" && h(C.previousSibling);
    }, b = (C, T) => {
      setTimeout(() => {
        T == 10 && C.previousSibling && h(C.previousSibling);
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
    f0({ machineLuck: () => {
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
            let j = le;
            for (; j > K; )
              j -= K;
            r.prizeYPrev.push(j);
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
      $(), r.timer = null;
    }), de(Z(Z({}, he(r)), he(ce(e))), {
      runNumberImg: n,
      setRef: o,
      topNumber: k,
      turnNumber: v
    });
  }
}), h0 = { class: "nut-countup" }, g0 = ["turn-number"];
function y0(e, t, n, s, o, r) {
  return u(), f("view", h0, [
    e.customBgImg != "" ? (u(), f(x, { key: 0 }, [
      e.type == "machine" ? (u(), f("view", {
        key: 0,
        class: "nut-countup__machine",
        style: A({ height: e.numHeight + "px" })
      }, [
        (u(!0), f(x, null, ie(e.machineNum, (l, a) => (u(), f("view", {
          key: "mImg" + a,
          class: "nut-countup__machine-item",
          style: A({
            width: e.numWidth + "px",
            height: e.numHeight + "px",
            backgroundImage: "url(" + e.customBgImg + ")",
            backgroundPositionY: e.prizeY[a] + "px"
          })
        }, null, 4))), 128))
      ], 4)) : (u(), f("view", {
        key: 1,
        ref: "runNumberImg",
        class: "nut-countup__numberimg",
        style: A({ height: e.numHeight + "px" })
      }, [
        (u(!0), f(x, null, ie(e.num_total_len, (l, a) => (u(), f("view", {
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
        e.pointNum > 0 ? (u(), f("view", {
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
    ], 64)) : (u(), f(x, { key: 1 }, [
      e.scrolling ? (u(), f("view", {
        key: 0,
        class: "nut-countup__number",
        style: A({
          width: e.numWidth * e.num_total_len + e.numWidth / 3 + "px",
          height: e.numHeight + "px",
          lineHeight: e.numHeight + "px"
        })
      }, [
        (u(!0), f(x, null, ie(e.num_total_len, (l, a) => (u(), f("view", {
          ref_for: !0,
          ref: (i) => e.setRef(i),
          key: l,
          class: "nut-countup__number-item",
          style: A({
            top: e.topNumber(a),
            left: e.numWidth * (a > e.num_total_len - e.pointNum - 1 ? a * 1.1 : a) + "px"
          }),
          "turn-number": e.turnNumber(a)
        }, [
          (u(!0), f(x, null, ie(e.to0_10, (i, p) => (u(), f("view", {
            key: "dote" + p,
            class: "nut-countup__number-item__span",
            style: A({
              width: e.numWidth + "px",
              height: e.numHeight + "px",
              lineHeight: e.numHeight + "px"
            })
          }, E(i), 5))), 128))
        ], 12, g0))), 128)),
        e.pointNum > 0 ? (u(), f("view", {
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
      ], 4)) : (u(), f(x, { key: 1 }, [
        ge(E(e.current), 1)
      ], 64))
    ], 64))
  ]);
}
const v0 = /* @__PURE__ */ q(m0, [["render", y0]]), $0 = (e) => {
  if (!e)
    return Date.now();
  let t = e;
  return t = +t > 0 ? +t : t.toString().replace(/-/g, "/"), new Date(t).getTime();
}, { create: b0 } = Y("countdown"), w0 = "NutCountdown", k0 = b0({
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
    const s = ke(w0), o = ce({
      restTime: 0,
      // 倒计时剩余时间时间
      timer: null,
      counting: !e.paused && e.autoStart,
      // 是否处于倒计时中
      handleEndTime: Date.now(),
      // 最终截止时间
      diffTime: 0
      // 设置了 startTime 时，与 date.now() 的差异
    }), r = D(() => i(o.restTime)), l = () => {
      o.handleEndTime = Number(e.endTime), o.diffTime = Date.now() - $0(e.startTime), o.counting || (o.counting = !0), a();
    }, a = () => {
      window !== void 0 && (o.timer = requestAnimationFrame(() => {
        if (o.counting) {
          const k = Date.now() - o.diffTime, v = Math.max(o.handleEndTime - k, 0);
          o.restTime = v, v || (o.counting = !1, $(), t("end"), t("onEnd")), v > 0 && a();
        }
      }));
    }, i = (k, v) => {
      const w = k;
      let c = {
        d: 0,
        h: 0,
        m: 0,
        s: 0,
        ms: 0
      };
      const y = 1e3, h = 60 * y, b = 60 * h, S = 24 * b;
      return w > 0 && (c.d = w >= y ? Math.floor(w / S) : 0, c.h = Math.floor(w % S / b), c.m = Math.floor(w % b / h), c.s = Math.floor(w % h / y), c.ms = Math.floor(w % y)), v == "custom" ? c : p(Z({}, c));
    }, p = (k) => {
      let { d: v, h: w, m: c, s: y, ms: h } = k, b = e.format;
      if (b.includes("DD") ? b = b.replace("DD", Qe(v)) : w += Number(v) * 24, b.includes("HH") ? b = b.replace("HH", Qe(w)) : c += Number(w) * 60, b.includes("mm") ? b = b.replace("mm", Qe(c)) : y += Number(c) * 60, b.includes("ss") ? b = b.replace("ss", Qe(y)) : h += Number(y) * 1e3, b.includes("S")) {
        const S = Qe(h, 3).toString();
        b.includes("SSS") ? b = b.replace("SSS", S) : b.includes("SS") ? b = b.replace("SS", S.slice(0, 2)) : b.includes("S") && (b = b.replace("S", S.slice(0, 1)));
      }
      return b;
    }, d = () => {
      !o.counting && !e.autoStart && (o.counting = !0, o.handleEndTime = Date.now() + Number(o.restTime), a(), t("restart", o.restTime), t("onRestart", o.restTime));
    }, $ = () => {
      cancelAnimationFrame(o.timer), o.counting = !1, t("paused", o.restTime), t("onPaused", o.restTime);
    }, g = () => {
      e.autoStart || ($(), o.restTime = Number(e.time));
    };
    return Rn(() => {
      e.autoStart ? l() : o.restTime = Number(e.time);
    }), Q(
      () => o.restTime,
      (k) => {
        let v = i(k, "custom");
        t("update:modelValue", v), t("input", v);
      }
    ), Q(
      () => e.paused,
      (k, v) => {
        v ? (o.counting || (o.counting = !0, o.handleEndTime = Date.now() + Number(o.restTime), a()), t("restart", o.restTime), t("onRestart", o.restTime)) : o.counting && $();
      }
    ), Q(
      () => e.endTime,
      () => {
        l();
      }
    ), Q(
      () => e.startTime,
      () => {
        l();
      }
    ), de(Z({}, he(e)), {
      slots: n,
      start: d,
      pause: $,
      renderTime: r,
      translate: s,
      reset: g
    });
  }
}), C0 = { class: "nut-countdown" }, S0 = ["innerHTML"];
function T0(e, t, n, s, o, r) {
  return u(), f("view", C0, [
    e.slots.default ? I(e.$slots, "default", { key: 0 }) : (u(), f("view", {
      key: 1,
      class: "nut-countdown__content",
      innerHTML: e.renderTime
    }, null, 8, S0))
  ]);
}
const N0 = /* @__PURE__ */ q(k0, [["render", T0]]), { create: D0 } = Y("tag"), _0 = D0({
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
      const l = "nut-tag";
      return {
        [l]: !0,
        [`${l}--${e.type}`]: e.type,
        [`${l}--plain`]: e.plain,
        [`${l}--round`]: e.round,
        [`${l}--mark`]: e.mark
      };
    }), s = D(() => {
      const l = {};
      return e.textColor ? l.color = e.textColor : e.color && e.plain && (l.color = e.color), e.plain ? (l.background = "#fff", l["border-color"] = e.color) : e.color && (l.background = e.color), l;
    });
    return {
      classes: n,
      style: s,
      onClose: (l) => {
        l.stopPropagation(), t("close", l);
      },
      onClick: (l) => {
        t("click", l);
      }
    };
  }
});
function I0(e, t, n, s, o, r) {
  const l = W("Close");
  return u(), f("view", {
    class: L(e.classes),
    style: A(e.style),
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, [
    I(e.$slots, "default"),
    e.closeable ? (u(), ee(l, {
      key: 0,
      class: "nut-tag--close",
      width: "12px",
      height: "12px",
      onClick: e.onClose
    }, null, 8, ["onClick"])) : N("", !0)
  ], 6);
}
const Fo = /* @__PURE__ */ q(_0, [["render", I0]]), { create: B0 } = Y("popover"), M0 = B0({
  components: {
    NutPopup: Ee
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
    const n = z(), s = z(), o = z(e.visible), r = z(), l = z({
      width: 0,
      height: 0
    }), a = D(() => {
      const y = "nut-popover-arrow", h = e.location, b = h.split("-")[0];
      return `${y} ${y}-${b} ${y}--${h}`;
    }), i = D(() => {
      const y = {}, { bgColor: h, arrowOffset: b, location: S } = e, _ = S.split("-")[0], B = S.split("-")[1], M = 16;
      return h && (y[`border${p(_)}Color`] = h), e.arrowOffset != 0 && (["bottom", "top"].includes(_) && (B || (y.left = `calc(50% + ${b}px)`), B == "start" && (y.left = `${M + b}px`), B == "end" && (y.right = `${M - b}px`)), ["left", "right"].includes(_) && (B || (y.top = `calc(50% - ${b}px)`), B == "start" && (y.top = `${M - b}px`), B == "end" && (y.bottom = `${M + b}px`))), y;
    }), p = (y) => (y = y.toLowerCase(), y = y.replace(/\b\w+\b/g, (h) => h.substring(0, 1).toUpperCase() + h.substring(1)), y), d = D(() => {
      const y = {};
      if (!r.value)
        return {};
      const h = l.value.width, b = l.value.height, { width: S, height: _, left: B, top: M, right: C } = r.value, { location: T, offset: P } = e, O = T == null ? void 0 : T.split("-")[0], K = T == null ? void 0 : T.split("-")[1];
      let G = 0, le = 0;
      if (Array.isArray(P) && (P == null ? void 0 : P.length) === 2 && (G += Number(P[1]), le += Number(P[0])), S) {
        if (["bottom", "top"].includes(O)) {
          const j = O === "bottom" ? _ + G : -(b + G);
          y.top = `${M + j}px`, K || (y.left = `${-(h - S) / 2 + B + le}px`), K === "start" && (y.left = `${B + le}px`), K === "end" && (y.left = `${C + le}px`);
        }
        if (["left", "right"].includes(O)) {
          const j = O === "left" ? -(h + G) : S + G;
          y.left = `${B + j}px`, K || (y.top = `${M - b / 2 + _ / 2 - 4 + le}px`), K === "start" && (y.top = `${M + le}px`), K === "end" && (y.top = `${M + _ + le}px`);
        }
      }
      return y;
    }), $ = () => {
      var h, b, S, _;
      const y = We(
        e.targetId ? document.querySelector(`#${e.targetId}`) : n.value
      );
      r.value = {
        width: y.width,
        height: y.height,
        left: y.left,
        top: y.top + Math.max(((h = document.documentElement) == null ? void 0 : h.scrollTop) || 0, ((b = document.body) == null ? void 0 : b.scrollTop) || 0),
        right: y.right
      }, l.value = {
        height: (S = s.value) == null ? void 0 : S.clientHeight,
        width: (_ = s.value) == null ? void 0 : _.clientWidth
      };
    };
    ve(() => {
      setTimeout(() => {
        $();
      }, 300);
    }), Q(
      () => e.visible,
      (y) => {
        o.value = y, y ? (window.addEventListener("touchstart", c, !0), Se(() => {
          $();
        })) : window.removeEventListener("touchstart", c, !0);
      }
    );
    const g = (y) => {
      t("update", y), t("update:visible", y);
    }, k = () => {
      g(!e.visible), t("open");
    }, v = () => {
      t("update:visible", !1), t("close");
    }, w = (y, h) => {
      !y.disabled && t("choose", y, h), e.closeOnClickAction && v();
    }, c = (y) => {
      const h = n.value, b = s.value;
      let S = h && !h.contains(y.target);
      if (e.targetId) {
        const _ = document.querySelector(`#${e.targetId}`);
        S = _ && !_.contains(y.target);
      }
      S && b && !b.contains(y.target) && e.closeOnClickOutside && v();
    };
    return {
      showPopup: o,
      openPopover: k,
      popoverArrow: a,
      closePopover: v,
      chooseItem: w,
      popoverRef: n,
      popoverContentRef: s,
      getRootPosition: d,
      popoverArrowStyle: i,
      renderIcon: ft
    };
  }
}), L0 = {
  ref: "popoverContentRef",
  class: "nut-popover-content-group"
}, E0 = ["onClick"], P0 = { class: "nut-popover-menu-item-name" };
function A0(e, t, n, s, o, r) {
  const l = W("nut-popup");
  return u(), f(x, null, [
    e.targetId ? N("", !0) : (u(), f("div", {
      key: 0,
      ref: "popoverRef",
      class: "nut-popover-wrapper",
      onClick: t[0] || (t[0] = (...a) => e.openPopover && e.openPopover(...a))
    }, [
      I(e.$slots, "reference")
    ], 512)),
    (u(), ee(Hn, { to: "body" }, [
      m("div", {
        class: L(["nut-popover", `nut-popover--${e.theme}`, `${e.customClass}`]),
        style: A(e.getRootPosition)
      }, [
        oe(l, {
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
            m("div", L0, [
              e.showArrow ? (u(), f("div", {
                key: 0,
                class: L(e.popoverArrow),
                style: A(e.popoverArrowStyle)
              }, null, 6)) : N("", !0),
              I(e.$slots, "content"),
              (u(!0), f(x, null, ie(e.list, (a, i) => (u(), f("div", {
                key: i,
                class: L([a.className, a.disabled && "nut-popover-menu-disabled", "nut-popover-menu-item"]),
                onClick: De((p) => e.chooseItem(a, i), ["stop"])
              }, [
                a.icon ? (u(), ee(ze(e.renderIcon(a.icon)), {
                  key: 0,
                  class: "nut-popover-item-img"
                })) : N("", !0),
                m("div", P0, E(a.name), 1)
              ], 10, E0))), 128))
            ], 512)
          ]),
          _: 3
        }, 8, ["visible", "pop-class", "style", "overlay", "duration", "overlay-style", "overlay-class", "close-on-click-overlay"])
      ], 6)
    ]))
  ], 64);
}
const Wo = /* @__PURE__ */ q(M0, [["render", A0]]), { create: z0 } = Y("skeleton"), V0 = z0({
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
    const { avatarShape: t, round: n, avatarSize: s } = he(e), o = D(() => {
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
      getStyle: () => s.value ? {
        width: s.value,
        height: s.value
      } : {
        width: "50px",
        height: "50px"
      }
    };
  }
}), O0 = { key: 0 }, H0 = {
  key: 1,
  class: "nut-skeleton"
}, R0 = {
  key: 0,
  class: "nut-skeleton-animation"
}, F0 = { class: "nut-skeleton-content" };
function W0(e, t, n, s, o, r) {
  const l = W("nut-avatar");
  return e.loading ? (u(), f("view", H0, [
    e.animated ? (u(), f("view", R0)) : N("", !0),
    m("view", F0, [
      e.avatar ? (u(), ee(l, {
        key: 0,
        class: L(e.avatarClass),
        shape: e.avatarShape,
        style: A(e.getStyle())
      }, null, 8, ["class", "shape", "style"])) : N("", !0),
      m("view", {
        class: "nut-skeleton-content__line",
        style: A({ width: e.width })
      }, [
        e.title ? (u(), f("view", {
          key: 0,
          class: L(e.getBlockClass("nut-skeleton-blockTitle")),
          style: A({ height: e.height })
        }, null, 6)) : N("", !0),
        (u(!0), f(x, null, ie(Number(e.row), (a) => (u(), f("view", {
          key: a,
          class: L(e.getBlockClass("nut-skeleton-blockLine")),
          style: A({ height: e.height })
        }, null, 6))), 128))
      ], 4)
    ])
  ])) : (u(), f("view", O0, [
    I(e.$slots, "default")
  ]));
}
const Y0 = /* @__PURE__ */ q(V0, [["render", W0]]), Yo = Symbol("nut-collapse"), j0 = { class: "nut-collapse" }, jo = /* @__PURE__ */ Pe({
  name: "NutCollapse",
  __name: "collapse",
  props: {
    modelValue: { default: "" },
    accordion: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = z(n.modelValue || (n.accordion ? "" : []));
    Q(
      () => n.modelValue,
      (i) => {
        o.value = i;
      }
    );
    const r = (i, p, d = !0) => {
      o.value = i, s("update:modelValue", i), s("change", i, p, d);
    };
    return Le(Yo, {
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
    }), (i, p) => (u(), f("view", j0, [
      I(i.$slots, "default")
    ]));
  }
});
je(jo);
const U0 = { class: "nut-collapse-item__title-main" }, K0 = { class: "nut-collapse-item__title-main-value" }, X0 = ["innerHTML"], q0 = {
  key: 2,
  class: "nut-collapse-item__title-label"
}, Z0 = {
  key: 0,
  class: "nut-collapse-item__title-sub"
}, G0 = ["innerHTML"], J0 = {
  key: 0,
  class: "nut-collapse__item-extraWrapper"
}, Q0 = { class: "nut-collapse__item-extraWrapper__extraRender" }, Uo = /* @__PURE__ */ Pe({
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
    const t = e, n = z(null), s = z(null), o = Me(Yo), r = D(() => {
      const g = "nut-collapse-item";
      return {
        [g]: !0,
        [g + "__border"]: t.border
      };
    }), l = D(() => o ? o.isExpanded(t.name) : !1), a = z(l.value ? "auto" : "0px"), i = () => {
      o && o.updateVal(t.name);
    }, p = () => {
      l.value && (a.value = "auto");
    }, d = () => {
      a.value = "0px", requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          var k;
          const g = (k = s.value) == null ? void 0 : k.offsetHeight;
          a.value = g ? `${g}px` : "auto";
        });
      });
    }, $ = () => {
      var k;
      const g = (k = s.value) == null ? void 0 : k.offsetHeight;
      a.value = g ? `${g}px` : "auto", requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          a.value = "0px";
        });
      });
    };
    return Q(l, (g) => {
      g ? d() : $();
    }), (g, k) => (u(), f("view", {
      class: L(r.value)
    }, [
      m("view", {
        class: L(["nut-collapse-item__title", { "nut-collapse-item__title--disabled": g.disabled }]),
        onClick: i
      }, [
        m("view", U0, [
          m("view", K0, [
            g.$slots.title ? I(g.$slots, "title", { key: 0 }) : (u(), f("view", {
              key: 1,
              class: "nut-collapse-item__title-mtitle",
              innerHTML: g.title
            }, null, 8, X0)),
            g.label ? (u(), f("view", q0, E(g.label), 1)) : N("", !0)
          ])
        ]),
        g.$slots.value ? (u(), f("view", Z0, [
          I(g.$slots, "value")
        ])) : (u(), f("view", {
          key: 1,
          class: "nut-collapse-item__title-sub",
          innerHTML: g.value
        }, null, 8, G0)),
        m("view", {
          class: L(["nut-collapse-item__title-icon", { "nut-collapse-item__title-icon--expanded": l.value }]),
          style: A({ transform: "rotate(" + (l.value ? g.rotate : 0) + "deg)" })
        }, [
          g.$slots.icon ? I(g.$slots, "icon", { key: 0 }) : (u(), ee(ze(Fe(ft)(g.icon)), { key: 1 }))
        ], 6)
      ], 2),
      g.$slots.extra ? (u(), f("view", J0, [
        m("div", Q0, [
          I(g.$slots, "extra")
        ])
      ])) : N("", !0),
      m("view", {
        ref_key: "wrapperRef",
        ref: n,
        class: "nut-collapse__item-wrapper",
        style: A({
          willChange: "height",
          height: a.value
        }),
        onTransitionend: p
      }, [
        m("view", {
          ref_key: "contentRef",
          ref: s,
          class: "nut-collapse__item-wrapper__content"
        }, [
          I(g.$slots, "default")
        ], 512)
      ], 36)
    ], 2));
  }
});
je(Uo);
const x0 = Pe({
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
}), { create: ey } = Y("table"), ty = "NutTable", ny = ey({
  components: {
    RenderColumn: x0,
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
    const n = ke(ty), s = ce({
      curData: e.data
    }), o = ($) => ({
      "nut-table__main__head__tr--border": e.bordered,
      [`nut-table__main__head__tr--align${$.align ? $.align : ""}`]: !0
    }), r = ($) => $.stylehead ? $.stylehead : "", l = ($) => $.stylecolumn ? $.stylecolumn : "", a = ($) => e.columns.filter((g) => g.key === $)[0], i = ($) => {
      const g = e.columns.filter((k) => k.key === $);
      return g[0].stylecolumn ? g[0].stylecolumn : "";
    }, p = ($) => {
      $.sorter && (t("sorter", $), s.curData = typeof $.sorter == "function" ? s.curData.sort($.sorter) : $.sorter === "default" ? s.curData.sort() : s.curData);
    }, d = () => e.columns.map(($) => [$.key, $.render]);
    return Q(
      () => e.data,
      ($) => {
        s.curData = $.slice();
      }
    ), de(Z({}, he(s)), {
      cellClasses: o,
      getColumnItem: a,
      getColumnItemStyle: i,
      handleSorterClick: p,
      sortDataItem: d,
      translate: n,
      stylehead: r,
      stylecolumn: l
    });
  }
}), oy = { class: "nut-table" }, ly = { class: "nut-table__main__head" }, sy = { class: "nut-table__main__head__tr" }, ay = ["onClick"], ry = { class: "nut-table__main__body" }, iy = { key: 1 }, uy = {
  key: 0,
  class: "nut-table__nodata"
}, cy = {
  key: 0,
  class: "nut-table__nodata__text"
}, dy = {
  key: 1,
  class: "nut-table__summary"
}, fy = ["innerHTML"];
function py(e, t, n, s, o, r) {
  const l = W("DownArrow"), a = W("RenderColumn");
  return u(), f("view", oy, [
    m("view", {
      class: L(["nut-table__main", { "nut-table__main--striped": e.striped }])
    }, [
      m("view", ly, [
        m("view", sy, [
          (u(!0), f(x, null, ie(e.columns, (i) => (u(), f("span", {
            key: i.key,
            class: L(["nut-table__main__head__tr__th", e.cellClasses(i)]),
            style: A(i.stylehead),
            onClick: (p) => e.handleSorterClick(i)
          }, [
            ge(E(i.title) + " ", 1),
            I(e.$slots, "icon"),
            !e.$slots.icon && i.sorter ? (u(), ee(l, {
              key: 0,
              width: "12px",
              height: "12px"
            })) : N("", !0)
          ], 14, ay))), 128))
        ])
      ]),
      m("view", ry, [
        (u(!0), f(x, null, ie(e.curData, (i) => (u(), f("view", {
          key: i,
          class: "nut-table__main__body__tr"
        }, [
          (u(!0), f(x, null, ie(e.sortDataItem(), ([p, d]) => (u(), f("span", {
            key: p,
            class: L(["nut-table__main__body__tr__td", e.cellClasses(e.getColumnItem(p))]),
            style: A(e.getColumnItemStyle(p))
          }, [
            typeof i[p] == "function" || typeof d == "function" ? (u(), ee(a, {
              key: 0,
              slots: [d, i[p]],
              record: i
            }, null, 8, ["slots", "record"])) : (u(), f("view", iy, E(i[p]), 1))
          ], 6))), 128))
        ]))), 128))
      ])
    ], 2),
    e.curData.length ? N("", !0) : (u(), f("view", uy, [
      m("div", {
        class: L(["nut-table__nodata", { "nut-table__nodata--border": e.bordered }])
      }, [
        I(e.$slots, "nodata"),
        e.$slots.nodata ? N("", !0) : (u(), f("div", cy, E(e.translate("noData")), 1))
      ], 2)
    ])),
    e.summary ? (u(), f("view", dy, [
      m("span", {
        class: "nut-table__summary__text",
        innerHTML: e.summary().value
      }, null, 8, fy)
    ])) : N("", !0)
  ]);
}
const my = /* @__PURE__ */ q(ny, [["render", py]]), hy = { class: "nut-animate" }, Ko = /* @__PURE__ */ Pe({
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
    const n = e, s = t, o = z(n.action === "initial" || n.show === !0 || n.loop), r = D(() => ({
      "nut-animate__container": !0,
      [`nut-animate-${n.type}`]: o.value,
      loop: n.loop
    })), l = () => {
      o.value = !1, requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          o.value = !0;
        });
      });
    }, a = (i) => {
      n.action === "click" && (l(), s("click", i), s("animate"));
    };
    return Q(
      () => n.show,
      (i) => {
        i && (l(), s("animate"));
      }
    ), (i, p) => (u(), f("view", hy, [
      m("view", {
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
je(Ko);
const { create: gy } = Y("ellipsis"), yy = gy({
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
    let s = null, o = 0;
    const r = z(), l = ce({
      exceeded: !1,
      //是否超出
      expanded: !1
      //是否折叠
    });
    Q(
      () => e.content,
      (v, w) => {
        v != w && a();
      }
    ), ve(() => {
      a();
    });
    const a = () => {
      if (!n.value)
        return;
      const v = window.getComputedStyle(n.value);
      s = document.createElement("div"), Array.prototype.slice.apply(v).forEach((y) => {
        s.style.setProperty(y, v.getPropertyValue(y));
      }), s.style.position = "fixed", s.style.left = "999999px", s.style.top = "999999px", s.style.zIndex = "-1000", s.style.height = "auto", s.style.minHeight = "auto", s.style.maxHeight = "auto", s.style.textOverflow = "clip", s.style.whiteSpace = "normal", s.style.webkitLineClamp = "unset", s.style.display = "block";
      const c = $(v.lineHeight === "normal" ? e.lineHeight : v.lineHeight);
      o = Math.floor(
        c * (Number(e.rows) + 0.5) + $(v.paddingTop) + $(v.paddingBottom)
      ), s.innerText = e.content, document.body.appendChild(s), i();
    }, i = () => {
      if (s.offsetHeight <= o)
        l.exceeded = !1, document.body.removeChild(s);
      else {
        l.exceeded = !0;
        const v = e.content.length, w = Math.floor((0 + v) / 2), c = e.direction === "middle" ? d([0, w], [w, v]) : p(0, v);
        r.value = c, document.body.removeChild(s);
      }
    }, p = (v, w) => {
      const c = l.expanded ? e.collapseText : e.expandText, y = e.content.length;
      if (w - v <= 1)
        return e.direction === "end" ? {
          leading: e.content.slice(0, v) + e.symbol
        } : {
          tailing: e.symbol + e.content.slice(w, y)
        };
      const h = Math.round((v + w) / 2);
      return e.direction === "end" ? s.innerText = e.content.slice(0, h) + e.symbol + c : s.innerText = c + e.symbol + e.content.slice(h, y), s.offsetHeight <= o ? e.direction === "end" ? p(h, w) : p(v, h) : e.direction === "end" ? p(v, h) : p(h, w);
    }, d = (v, w) => {
      const c = l.expanded ? e.collapseText : e.expandText, y = e.content.length;
      if (v[1] - v[0] <= 1 && w[1] - w[0] <= 1)
        return {
          leading: e.content.slice(0, v[0]) + e.symbol,
          tailing: e.symbol + e.content.slice(w[1], y)
        };
      const h = Math.floor((v[0] + v[1]) / 2), b = Math.ceil((w[0] + w[1]) / 2);
      return s.innerText = e.content.slice(0, h) + e.symbol + c + e.symbol + e.content.slice(b, y), s.offsetHeight <= o ? d([h, v[1]], [w[0], b]) : d([v[0], h], [b, w[1]]);
    }, $ = (v) => {
      if (!v)
        return 0;
      const w = v.match(/^\d*(\.\d*)?/);
      return w ? Number(w[0]) : 0;
    }, g = (v) => {
      v == 1 ? (l.expanded = !0, t("change", "expand")) : (l.expanded = !1, t("change", "collapse"));
    }, k = () => {
      t("click");
    };
    return de(Z({}, he(l)), { root: n, ellipsis: r, clickHandle: g, handleClick: k });
  }
}), vy = { key: 0 }, $y = { key: 1 }, by = { key: 2 };
function wy(e, t, n, s, o, r) {
  return u(), f("view", {
    ref: "root",
    class: "nut-ellipsis",
    onClick: t[2] || (t[2] = (...l) => e.handleClick && e.handleClick(...l))
  }, [
    e.exceeded ? N("", !0) : (u(), f("view", vy, E(e.content), 1)),
    e.exceeded && !e.expanded ? (u(), f("view", $y, [
      ge(E(e.ellipsis && e.ellipsis.leading), 1),
      e.expandText ? (u(), f("span", {
        key: 0,
        class: "nut-ellipsis__text",
        onClick: t[0] || (t[0] = De((l) => e.clickHandle(1), ["stop"]))
      }, E(e.expandText), 1)) : N("", !0),
      ge(E(e.ellipsis && e.ellipsis.tailing), 1)
    ])) : N("", !0),
    e.exceeded && e.expanded ? (u(), f("view", by, [
      ge(E(e.content) + " ", 1),
      e.expandText ? (u(), f("span", {
        key: 0,
        class: "nut-ellipsis__text",
        onClick: t[1] || (t[1] = De((l) => e.clickHandle(2), ["stop"]))
      }, E(e.collapseText), 1)) : N("", !0)
    ])) : N("", !0)
  ], 512);
}
const ky = /* @__PURE__ */ q(yy, [["render", wy]]), { componentName: Cy, create: Sy } = Y("watermark"), Ty = Sy({
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
      gapX: s,
      gapY: o,
      width: r,
      height: l,
      rotate: a,
      image: i,
      imageWidth: p,
      imageHeight: d,
      content: $,
      fontStyle: g,
      fontWeight: k,
      fontColor: v,
      fontSize: w,
      fontFamily: c
    } = e, y = () => {
      const b = document.createElement("canvas"), S = window.devicePixelRatio, _ = b.getContext("2d"), B = `${(s + r) * S}px`, M = `${(o + l) * S}px`, C = r * S, T = l * S;
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
        } else if ($) {
          _.textBaseline = "middle", _.textAlign = "center", _.translate(C / 2, T / 2), _.rotate(Math.PI / 180 * Number(a));
          const P = Number(w) * S;
          _.font = `${g} normal ${k} ${P}px/${T}px ${c}`, _.fillStyle = v, Array.isArray($) ? $.map((O, K) => {
            _.fillText(O, 0, (K - 1) * P);
          }) : _.fillText($, 0, 0), _.restore(), t.base64Url = b.toDataURL();
        }
      } else
        throw new Error("当前环境不支持Canvas");
    };
    y(), Q(
      () => [
        n,
        s,
        o,
        r,
        l,
        a,
        i,
        p,
        d,
        $,
        g,
        k,
        v,
        w,
        c
      ],
      () => {
        y();
      }
    );
    const h = D(() => {
      const b = Cy;
      return {
        [b]: !0,
        [`${b}-full-page`]: e.fullPage
      };
    });
    return de(Z({}, he(t)), { classes: h });
  }
});
function Ny(e, t, n, s, o, r) {
  return u(), f("view", {
    class: L(e.classes),
    style: A({
      zIndex: e.zIndex,
      backgroundSize: `${e.gapX + e.width}px`,
      backgroundImage: `url('${e.base64Url}')`
    })
  }, null, 6);
}
const Dy = /* @__PURE__ */ q(Ty, [["render", Ny]]), { create: _y } = Y("trend-arrow"), Iy = _y({
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
      const { rate: o, digits: r, showSign: l, showZero: a } = e;
      t.rateTrend = o > 0;
      const i = Math.abs(o);
      return !a && o === 0 ? "--" : `${l && o !== 0 ? t.rateTrend ? "+" : "-" : ""}${cl(
        Number(i),
        r
      )}%`;
    }), s = D(() => {
      const { dropColor: o, riseColor: r, syncTextColor: l, textColor: a, rate: i } = e;
      return {
        color: i === 0 ? a : l ? t.rateTrend ? r : o : a
      };
    });
    return de(Z({}, he(t)), { calcRate: n, calcStyle: s });
  }
}), By = { class: "nut-trend-arrow" };
function My(e, t, n, s, o, r) {
  const l = W("TriangleUp"), a = W("TriangleDown");
  return u(), f("view", By, [
    e.arrowLeft ? N("", !0) : (u(), f("span", {
      key: 0,
      class: "nut-trend-arrow-icon-before nut-trend-arrow-rate",
      style: A(e.calcStyle)
    }, E(e.calcRate), 5)),
    Number(e.rate) !== 0 && e.rateTrend ? I(e.$slots, "up-icon", { key: 1 }, () => [
      oe(l, { color: e.riseColor }, null, 8, ["color"])
    ]) : N("", !0),
    Number(e.rate) !== 0 && !e.rateTrend ? I(e.$slots, "down-icon", { key: 2 }, () => [
      oe(a, { color: e.dropColor }, null, 8, ["color"])
    ]) : N("", !0),
    e.arrowLeft ? (u(), f("span", {
      key: 3,
      class: "nut-trend-arrow-icon-after nut-trend-arrow-rate",
      style: A(e.calcStyle)
    }, E(e.calcRate), 5)) : N("", !0)
  ]);
}
const Ly = /* @__PURE__ */ q(Iy, [["render", My]]), { create: Ey } = Y("tour"), Py = Ey({
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
    }), s = z({}), o = D(() => "nut-tour"), r = D(() => {
      const { offset: d, maskWidth: $, maskHeight: g } = e, { width: k, height: v, left: w, top: c } = s.value, y = [w + k / 2, c + v / 2], h = Number($ || k), b = Number(g || v);
      return {
        width: `${h + +d[1] * 2}px`,
        height: `${b + +d[0] * 2}px`,
        top: `${y[1] - b / 2 - +d[0]}px`,
        left: `${y[0] - h / 2 - +d[1]}px`
      };
    }), l = (d) => {
      d == "next" ? n.active = n.active + 1 : n.active = n.active - 1, n.showPopup = !1, Se(() => {
        n.showPopup = !0, a();
      }), t("change", n.active);
    }, a = () => {
      const d = document.querySelector(`#${e.steps[n.active].target}`), $ = We(d);
      s.value = $;
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
      changeStep: l,
      close: i,
      handleClickMask: p
    });
  }
}), Ay = {
  key: 0,
  class: "nut-tour-content"
}, zy = {
  key: 0,
  class: "nut-tour-content-top"
}, Vy = { class: "nut-tour-content-inner" }, Oy = { class: "nut-tour-content-bottom" }, Hy = { class: "nut-tour-content-bottom-init" }, Ry = { class: "nut-tour-content-bottom-operate" }, Fy = {
  key: 1,
  class: "nut-tour-content nut-tour-content-tile"
}, Wy = { class: "nut-tour-content-inner" };
function Yy(e, t, n, s, o, r) {
  const l = W("Close"), a = W("nut-popover");
  return u(), f("div", {
    class: L(e.classes)
  }, [
    Ce(m("div", {
      class: "nut-tour-masked",
      onClick: t[0] || (t[0] = (...i) => e.handleClickMask && e.handleClickMask(...i))
    }, null, 512), [
      [Ne, e.showTour]
    ]),
    (u(!0), f(x, null, ie(e.steps, (i, p) => (u(), f("div", {
      key: p,
      style: { height: "0" }
    }, [
      p == e.active ? (u(), f(x, { key: 0 }, [
        e.showTour ? (u(), f("div", {
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
              e.type == "step" ? (u(), f("div", Ay, [
                e.showTitleBar ? (u(), f("div", zy, [
                  m("div", {
                    onClick: t[1] || (t[1] = (...d) => e.close && e.close(...d))
                  }, [
                    oe(l, { class: "nut-tour-content-top-close" })
                  ])
                ])) : N("", !0),
                m("div", Vy, E(i.content), 1),
                m("div", Oy, [
                  m("div", Hy, E(e.active + 1) + "/" + E(e.steps.length), 1),
                  m("div", Ry, [
                    I(e.$slots, "prev-step", {}, () => [
                      e.active != 0 && e.showPrevStep ? (u(), f("div", {
                        key: 0,
                        class: "nut-tour-content-bottom-operate-btn",
                        onClick: t[2] || (t[2] = (d) => e.changeStep("prev"))
                      }, E(e.prevStepTxt), 1)) : N("", !0)
                    ]),
                    e.steps.length - 1 == e.active ? (u(), f("div", {
                      key: 0,
                      class: "nut-tour-content-bottom-operate-btn active",
                      onClick: t[3] || (t[3] = (...d) => e.close && e.close(...d))
                    }, E(e.completeTxt), 1)) : N("", !0),
                    I(e.$slots, "next-step", {}, () => [
                      e.steps.length - 1 != e.active ? (u(), f("div", {
                        key: 0,
                        class: "nut-tour-content-bottom-operate-btn active",
                        onClick: t[4] || (t[4] = (d) => e.changeStep("next"))
                      }, E(e.nextStepTxt), 1)) : N("", !0)
                    ])
                  ])
                ])
              ])) : N("", !0),
              e.type == "tile" ? (u(), f("div", Fy, [
                m("div", Wy, E(i.content), 1)
              ])) : N("", !0)
            ])
          ]),
          _: 2
        }, 1032, ["visible", "location", "bg-color", "theme", "offset", "arrow-offset"])
      ], 64)) : N("", !0)
    ]))), 128))
  ], 2);
}
const jy = /* @__PURE__ */ q(Py, [["render", Yy]]), { create: Uy } = Y("address"), Ky = "NutAddress", Xy = Uy({
  components: {
    NutPopup: Ee,
    NutElevator: go,
    Location: pa,
    Location2: va,
    Check: qn,
    Close: At,
    Left: nn
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
    const n = ke(Ky), s = z(null), o = z(null), r = z(e.visible), l = z(e.type), a = z(0), i = z(0), p = z(["province", "city", "country", "town"]), d = z(null), $ = z([0, 0, 0, 0]), g = ce([]), k = D(() => {
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
    }), v = (U) => {
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
    let w = z([]), c = ce({});
    const y = z("self"), h = z(20), b = () => {
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
          h.value = R || 20;
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
      const U = d.value, R = i.value, te = $.value[a.value];
      U != null && U.scrollTop && ($.value[R] = U == null ? void 0 : U.scrollTop), Se(() => {
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
      }), U.selectedAddress = !0, c = U, t("selected", te, U, R), O();
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
        type: l.value
      };
      ["custom", "custom2"].includes(l.value) ? ([0, 1, 2, 3].forEach((te) => {
        const X = w.value[te];
        U.addressIdStr += `${te ? "_" : ""}${X && X.id || 0}`, U.addressStr += X && X.name || "";
      }), R.data = U) : R.data = c, P(), y.value == "self" ? t("close", R) : t("closeMask", { closeWay: y }), t("update:visible", !1);
    }, le = () => {
      const U = l.value;
      l.value = U == "exist" ? "custom" : "exist", P(), t("switchModule", { type: l.value });
    }, j = (U, R) => {
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
      privateType: l,
      tabIndex: a,
      tabName: p,
      selectedRegion: w,
      switchModule: le,
      closeWay: y,
      close: G,
      getTabName: S,
      nextAreaList: B,
      regionLine: s,
      tabRegion: o,
      lineDistance: h,
      changeRegionTab: M,
      selectedExist: T,
      clickOverlay: K,
      handClose: O,
      handleElevatorItem: j,
      initCustomSelected: b
    }, he(e)), {
      translate: n,
      regionList: k,
      transformData: v,
      scrollDom: d
    });
  }
}), qy = { class: "nut-address" }, Zy = { class: "nut-address__header" }, Gy = { class: "nut-address__header__title" }, Jy = {
  key: 0,
  class: "nut-address__custom"
}, Qy = {
  ref: "tabRegion",
  class: "nut-address__region"
}, xy = ["onClick"], ev = {
  key: 0,
  class: "active nut-address__region-item"
}, tv = {
  key: 0,
  class: "nut-address__detail"
}, nv = {
  ref: "scrollDom",
  class: "nut-address__detail-list"
}, ov = ["onClick"], lv = {
  key: 1,
  class: "nut-address__elevator-group"
}, sv = {
  key: 1,
  class: "nut-address__exist"
}, av = { class: "nut-address__exist-group" }, rv = { class: "nut-address__exist-group-list" }, iv = ["onClick"], uv = { class: "nut-address__exist-item-info" }, cv = {
  key: 0,
  class: "nut-address__exist-item-info-name"
}, dv = {
  key: 1,
  class: "nut-address__exist-item-info-phone"
}, fv = { class: "nut-address__exist-item-info-bottom" }, pv = { class: "nut-address__exist-choose-btn" };
function mv(e, t, n, s, o, r) {
  const l = W("Left"), a = W("Close"), i = W("Check"), p = W("nut-elevator"), d = W("Location2"), $ = W("nut-popup");
  return u(), ee($, {
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
      m("view", qy, [
        m("view", Zy, [
          m("view", {
            class: "nut-address__header-back",
            onClick: t[0] || (t[0] = (...g) => e.switchModule && e.switchModule(...g))
          }, [
            I(e.$slots, "back-icon", {}, () => [
              Ce(oe(l, { size: "14px" }, null, 512), [
                [Ne, e.type == "exist" && e.privateType == "custom"]
              ])
            ])
          ]),
          m("view", Gy, E(e.privateType == "custom" ? e.customAddressTitle || e.translate("selectRegion") : e.existAddressTitle || e.translate("deliveryTo")), 1),
          m("view", {
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
        ["custom", "custom2"].includes(e.privateType) ? (u(), f("view", Jy, [
          m("view", Qy, [
            (u(!0), f(x, null, ie(e.selectedRegion, (g, k) => (u(), f("view", {
              key: k,
              class: L(["nut-address__region-item", k == e.tabIndex ? "active" : ""]),
              onClick: (v) => e.changeRegionTab(g, k)
            }, [
              m("view", null, E(e.getTabName(g, k)), 1)
            ], 10, xy))), 128)),
            e.tabIndex == e.selectedRegion.length ? (u(), f("view", ev, [
              m("view", null, E(e.getTabName(null, e.selectedRegion.length)), 1)
            ])) : N("", !0),
            m("view", {
              ref: "regionLine",
              class: "nut-address__region-line",
              style: A({ left: e.lineDistance + "px" })
            }, null, 4)
          ], 512),
          e.privateType == "custom" ? (u(), f("view", tv, [
            m("ul", nv, [
              (u(!0), f(x, null, ie(e.regionList, (g, k) => {
                var v, w;
                return u(), f("li", {
                  key: k,
                  class: L(["nut-address__detail-item", ((v = e.selectedRegion[e.tabIndex]) == null ? void 0 : v.id) == g.id ? "active" : ""]),
                  onClick: (c) => e.nextAreaList(g)
                }, [
                  m("div", null, [
                    ((w = e.selectedRegion[e.tabIndex]) == null ? void 0 : w.id) == g.id ? I(e.$slots, "icon", { key: 0 }, () => [
                      oe(i, {
                        class: "nut-address-select-icon",
                        size: "13px"
                      })
                    ]) : N("", !0),
                    ge(E(g.name), 1)
                  ])
                ], 10, ov);
              }), 128))
            ], 512)
          ])) : (u(), f("view", lv, [
            oe(p, {
              height: e.height,
              "index-list": e.transformData(e.regionList),
              onClickItem: e.handleElevatorItem
            }, null, 8, ["height", "index-list", "onClickItem"])
          ]))
        ])) : (u(), f("view", sv, [
          m("div", av, [
            m("ul", rv, [
              (u(!0), f(x, null, ie(e.existAddress, (g, k) => (u(), f("li", {
                key: k,
                class: L(["nut-address__exist-group-item", g.selectedAddress ? "active" : ""]),
                onClick: (v) => e.selectedExist(g)
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
                m("div", uv, [
                  g.name ? (u(), f("div", cv, E(g.name), 1)) : N("", !0),
                  g.phone ? (u(), f("div", dv, E(g.phone), 1)) : N("", !0),
                  m("div", fv, [
                    m("view", null, E(g.provinceName + g.cityName + g.countyName + g.townName + g.addressDetail), 1)
                  ])
                ])
              ], 10, iv))), 128))
            ])
          ]),
          e.isShowCustomAddress ? (u(), f("div", {
            key: 0,
            class: "nut-address__exist-choose",
            onClick: t[2] || (t[2] = (...g) => e.switchModule && e.switchModule(...g))
          }, [
            m("div", pv, E(e.customAndExistTitle || e.translate("chooseAnotherAddress")), 1)
          ])) : N("", !0)
        ])),
        I(e.$slots, "bottom")
      ])
    ]),
    _: 3
  }, 8, ["visible", "lock-scroll", "round", "teleport-disable", "teleport", "z-index", "onClose", "onClickOverlay"]);
}
const hv = /* @__PURE__ */ q(Xy, [["render", mv]]), { create: gv } = Y("barrage"), yv = gv({
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
    let s = z(document.createElement("div")), o = z(document.createElement("div")), r = null;
    const l = z(e.danmu), a = z(e.rows), i = z(e.top), p = z(0), d = e.speeds, $ = z(0);
    ve(() => {
      g(), n && document.addEventListener("visibilitychange", function() {
        document.visibilityState === "hidden" ? (v(), p.value = 0, k("hidden")) : document.visibilityState === "visible" && g();
      });
    }), Xe(() => {
      l.value = [], v();
    });
    const g = () => {
      $.value = s.value.offsetWidth, n && k("init"), setTimeout(() => {
        var h;
        (h = s.value) == null || h.style.setProperty("--move-distance", `-${$.value}px`), c();
      }, 300);
    }, k = (h) => {
      var B;
      const b = document.getElementsByClassName("slotBody" + t);
      let S = ((B = b == null ? void 0 : b[0]) == null ? void 0 : B.children) || [];
      const _ = [];
      S && Array.from(S).forEach((M) => {
        h == "init" ? (M.style.opacity = "0", _.push(M)) : (M.classList = "", M.style = {});
      }), h == "init" && (l.value = _);
    }, v = () => {
      r && (clearTimeout(r), r = null);
    };
    Q(
      () => e.danmu,
      (h) => {
        e.danmu.length > 0 && (l.value = [...h]);
      }
    );
    const w = (h) => {
      const b = p.value % l.value.length;
      !e.loop && p.value === l.value.length ? l.value.splice(l.value.length, 0, h) : l.value.splice(b, 0, h);
    }, c = () => {
      v(), r = setTimeout(() => {
        y();
      }, e.frequency);
    }, y = () => {
      var S;
      const h = e.loop ? p.value % l.value.length : p.value;
      let b = document.createElement("view");
      n && typeof l.value[h] == "object" ? (b = l.value[h], (S = b == null ? void 0 : b.classList) == null || S.add("nut-barrage__item")) : (b.innerHTML = l.value[h], b.classList.add("nut-barrage__item"), o.value.appendChild(b)), Se(() => {
        var B;
        const _ = b.offsetHeight;
        if ((B = b == null ? void 0 : b.classList) == null || B.add("move"), b.style.animationDuration = `${d}ms`, b.style.top = h % a.value * (_ + i.value) + 20 + "px", b.style.opacity = "1", !n) {
          const M = b.offsetWidth;
          b.style.width = M + 20 + "px";
        }
        b.addEventListener("animationend", () => {
          n ? b.classList.remove("move") : o.value.removeChild(b);
        }), !(!e.loop && p.value >= l.value.length - 1) && (p.value++, p.value >= l.value.length && (p.value = 0), b.removeEventListener("animationend", () => {
        }), c());
      });
    };
    return { classTime: t, danmuList: l, dmBody: s, dmContainer: o, add: w };
  }
}), vv = {
  ref: "dmBody",
  class: "nut-barrage"
};
function $v(e, t, n, s, o, r) {
  return u(), f("div", vv, [
    m("div", {
      ref: "dmContainer",
      class: L(["dmContainer", e.$slots.default && "slotContainer"])
    }, [
      e.$slots.default ? (u(), f("div", {
        key: 0,
        class: L(["slotBody", "slotBody" + e.classTime])
      }, [
        I(e.$slots, "default")
      ], 2)) : N("", !0)
    ], 2)
  ], 512);
}
const bv = /* @__PURE__ */ q(yv, [["render", $v]]), { create: wv } = Y("signature"), kv = "NutSignature", Cv = wv({
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
    const n = ke(kv), s = z(null), o = z(null), r = D(() => ({
      ["nut-signature"]: !0,
      [`${e.customClass}`]: e.customClass
    })), l = ce({
      canvasHeight: 0,
      canvasWidth: 0,
      ctx: null,
      isSupportTouch: "ontouchstart" in window,
      events: "ontouchstart" in window ? ["touchstart", "touchmove", "touchend", "touchleave"] : ["mousedown", "mousemove", "mouseup", "mouseleave"]
    }), a = () => {
      let y = document.createElement("canvas");
      return !!(y.getContext && y.getContext("2d"));
    }, i = () => {
      s.value.addEventListener(l.events[0], p, !1);
    }, p = (y) => {
      y.preventDefault(), l.ctx.beginPath(), l.ctx.lineWidth = e.lineWidth, l.ctx.strokeStyle = e.strokeStyle, t("start"), s.value.addEventListener(l.events[1], d, !1), s.value.addEventListener(l.events[2], $, !1), s.value.addEventListener(l.events[3], g, !1);
    }, d = (y) => {
      y.preventDefault();
      let h = l.isSupportTouch ? y.touches[0] : y;
      t("signing", h);
      let b = s.value.getBoundingClientRect(), S = h.clientX - b.left, _ = h.clientY - b.top;
      l.ctx.lineTo(S, _), l.ctx.stroke();
    }, $ = (y) => {
      y.preventDefault(), t("end"), s.value.removeEventListener(l.events[1], d, !1), s.value.removeEventListener(l.events[2], $, !1);
    }, g = (y) => {
      y.preventDefault(), s.value.removeEventListener(l.events[1], d, !1), s.value.removeEventListener(l.events[2], $, !1);
    }, k = () => {
      s.value.addEventListener(l.events[2], $, !1), l.ctx.clearRect(0, 0, l.canvasWidth, l.canvasHeight), l.ctx.closePath(), t("clear");
    }, v = () => {
      c(s.value);
    }, w = (y) => {
      if (!y)
        return !0;
      var h = document.createElement("canvas");
      return h.width = y.width, h.height = y.height, (y == null ? void 0 : y.toDataURL()) == h.toDataURL();
    }, c = (y) => {
      let h;
      switch (e.type) {
        case "png":
          h = y.toDataURL("image/png");
          break;
        case "jpg":
          h = y.toDataURL("image/jpeg", 0.8);
          break;
      }
      const b = w(y) ? "请绘制签名" : y, S = w(y) ? "" : h;
      t("confirm", b, S);
    };
    return ve(() => {
      a() && (l.ctx = s.value.getContext("2d"), l.canvasWidth = o.value.offsetWidth, l.canvasHeight = o.value.offsetHeight, i());
    }), de(Z({}, he(l)), { canvas: s, wrap: o, isCanvasSupported: a, confirm: v, clear: k, classes: r, translate: n });
  }
}), Sv = {
  ref: "wrap",
  class: "nut-signature-inner"
}, Tv = ["height", "width"], Nv = {
  key: 0,
  class: "nut-signature-unsopport"
};
function Dv(e, t, n, s, o, r) {
  const l = W("nut-button");
  return u(), f("div", {
    class: L(e.classes)
  }, [
    m("div", Sv, [
      Ce(m("canvas", {
        ref: "canvas",
        height: e.canvasHeight,
        width: e.canvasWidth
      }, null, 8, Tv), [
        [Ne, e.isCanvasSupported()]
      ]),
      e.isCanvasSupported() ? N("", !0) : (u(), f("p", Nv, E(e.unSupportTpl || e.translate("unSupportTpl")), 1))
    ], 512),
    oe(l, {
      class: "nut-signature-btn",
      type: "default",
      onClick: t[0] || (t[0] = (a) => e.clear())
    }, {
      default: ne(() => [
        ge(E(e.translate("reSign")), 1)
      ]),
      _: 1
    }),
    oe(l, {
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
const _v = /* @__PURE__ */ q(Cv, [["render", Dv]]), { create: Iv } = Y("time-select"), Bv = "NutTimeSelect", Mv = Iv({
  components: {
    NutPopup: Ee
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
    const n = ke(Bv), s = D(() => ({
      width: "100%",
      height: e.height
    })), o = D(() => e.currentKey), r = D(() => e.currentTime), l = () => {
      t("update:visible", !1), t("select", r.value);
    };
    return Le("currentKey", o), Le("currentTime", r), {
      popStyle: s,
      close: l,
      translate: n
    };
  }
}), Lv = { class: "nut-time-select" }, Ev = { class: "nut-time-select__title" }, Pv = { class: "nut-time-select__title__fixed" }, Av = { key: 0 }, zv = { class: "nut-time-select__content" }, Vv = { class: "nut-time-select__content__pannel" }, Ov = { class: "nut-time-select__content__detail" };
function Hv(e, t, n, s, o, r) {
  const l = W("nut-popup");
  return u(), ee(l, {
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
      m("view", Lv, [
        m("view", Ev, [
          m("view", Pv, [
            e.$slots.title ? I(e.$slots, "title", { key: 1 }) : (u(), f("span", Av, E(e.title || e.translate("pickupTime")), 1))
          ])
        ]),
        m("view", zv, [
          m("view", Vv, [
            I(e.$slots, "pannel")
          ]),
          m("view", Ov, [
            I(e.$slots, "detail")
          ])
        ])
      ])
    ]),
    _: 3
  }, 8, ["teleport-disable", "visible", "style", "lock-scroll", "onClickOverlay", "onClickCloseIcon"]);
}
const Rv = /* @__PURE__ */ q(Mv, [["render", Hv]]), { componentName: Fv, create: Wv } = Y("time-pannel"), Yv = Wv({
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
    const n = Me("currentKey"), s = ce({
      currentKey: n
    }), o = D(() => ({
      [Fv]: !0,
      "nut-time-pannel--curr": s.currentKey == e.pannelKey
    })), r = (l) => {
      t("change", l);
    };
    return de(Z({}, he(s)), {
      classes: o,
      handlePannel: r
    });
  }
});
function jv(e, t, n, s, o, r) {
  return u(), f("view", {
    class: L(e.classes),
    onClick: t[0] || (t[0] = (l) => e.handlePannel(e.pannelKey))
  }, E(e.name), 3);
}
const Uv = /* @__PURE__ */ q(Yv, [["render", jv]]), { create: Kv } = Y("time-detail"), Xv = Kv({
  name: "timedetail",
  props: {
    times: {
      type: Array,
      default: () => []
    }
  },
  emits: ["select"],
  setup: (e, { emit: t }) => {
    const n = Me("currentKey"), s = Me("currentTime"), o = ce({
      currentKey: n,
      currentTime: s
    }), r = (i) => {
      let p = o.currentTime.find((d) => d.key == o.currentKey);
      if (p)
        return {
          "nut-time-detail__detail__list__item": !0,
          "nut-time-detail__detail__list__item--curr": p.list.filter((d) => d === i).length > 0
        };
    }, l = D(() => e.times.find((i) => i.key == o.currentKey).list), a = (i) => {
      t("select", i);
    };
    return de(Z({}, he(o)), {
      getClass: r,
      renderData: l,
      handleTime: a
    });
  }
}), qv = { class: "nut-time-detail" }, Zv = { class: "nut-time-detail__detail nut-time-detail__detail--moring" }, Gv = { class: "nut-time-detail__detail__list" }, Jv = ["onClick"];
function Qv(e, t, n, s, o, r) {
  return u(), f("view", qv, [
    m("view", Zv, [
      m("view", Gv, [
        (u(!0), f(x, null, ie(e.renderData, (l) => (u(), f("view", {
          key: l,
          class: L(e.getClass(l)),
          onClick: (a) => e.handleTime(l)
        }, E(l), 11, Jv))), 128))
      ])
    ])
  ]);
}
const xv = /* @__PURE__ */ q(Xv, [["render", Qv]]), { create: e2 } = Y("sku-header"), t2 = "NutSkuHeader", n2 = e2({
  props: {
    goods: {
      type: Object,
      default: {}
    }
  },
  components: {
    NutPrice: Ot
  },
  setup(e, { slots: t }) {
    const n = ke(t2);
    return {
      getSlots: (o) => t[o],
      translate: n
    };
  }
}), o2 = { class: "nut-sku-header" }, l2 = ["src"], s2 = { class: "nut-sku-header-right" }, a2 = {
  key: 3,
  class: "nut-sku-header-right-extra"
};
function r2(e, t, n, s, o, r) {
  const l = W("nut-price");
  return u(), f("view", o2, [
    m("img", {
      class: "nut-sku-header-img",
      src: e.goods.imagePath
    }, null, 8, l2),
    m("view", s2, [
      e.getSlots("sku-header-price") ? I(e.$slots, "sku-header-price", { key: 0 }) : (u(), ee(l, {
        key: 1,
        price: e.goods.price,
        "need-symbol": !0,
        thousands: !1
      }, null, 8, ["price"])),
      e.getSlots("sku-header-extra") ? I(e.$slots, "sku-header-extra", { key: 2 }) : N("", !0),
      e.goods.skuId && !e.getSlots("sku-header-extra") ? (u(), f("view", a2, E(e.translate("skuId")) + " : " + E(e.goods.skuId), 1)) : N("", !0)
    ])
  ]);
}
const i2 = /* @__PURE__ */ q(n2, [["render", r2]]), { create: u2 } = Y("sku-select"), c2 = u2({
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
      changeSaleChild: (o, r, l, a) => {
        o.checkFlag || o.disable || t("selectSku", {
          sku: o,
          skuIndex: r,
          parentSku: l,
          parentIndex: a
        });
      }
    };
  }
}), d2 = { class: "nut-sku-select" }, f2 = { class: "nut-sku-select-item-title" }, p2 = { class: "nut-sku-select-item-skus" }, m2 = ["onClick"];
function h2(e, t, n, s, o, r) {
  return u(), f("view", d2, [
    (u(!0), f(x, null, ie(e.skuInfo, (l, a) => (u(), f("view", {
      key: l.id,
      class: "nut-sku-select-item"
    }, [
      m("view", f2, E(l.name), 1),
      m("view", p2, [
        (u(!0), f(x, null, ie(l.list, (i, p) => (u(), f("view", {
          key: i.name,
          class: L(["nut-sku-select-item-skus-sku", [{ active: !i.disable && i.active }, { disable: i.disable }]]),
          onClick: (d) => e.changeSaleChild(i, p, l, a)
        }, E(i.name), 11, m2))), 128))
      ])
    ]))), 128))
  ]);
}
const g2 = /* @__PURE__ */ q(c2, [["render", h2]]), { create: y2 } = Y("sku-stepper"), v2 = y2({
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
    NutInputNumber: rn
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
}), $2 = { class: "nut-sku-stepper" }, b2 = { class: "nut-sku-stepper-title" }, w2 = ["innerHTML"], k2 = { class: "nut-sku-stepper-count" };
function C2(e, t, n, s, o, r) {
  const l = W("nut-input-number");
  return u(), f("view", $2, [
    m("view", b2, E(e.stepperTitle), 1),
    m("view", {
      class: "nut-sku-stepper-limit",
      innerHTML: e.getExtraText()
    }, null, 8, w2),
    m("view", k2, [
      oe(l, {
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
const S2 = /* @__PURE__ */ q(v2, [["render", C2]]), { create: T2 } = Y("sku-operate"), N2 = T2({
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
      getBtnDesc: (l) => ({
        confirm: e.confirmText,
        cart: e.addCartText,
        buy: e.buyText
      })[l],
      clickBtnOperate: (l) => {
        t("clickBtnOperate", l);
      },
      getSlots: (l) => n[l]
    };
  }
}), D2 = {
  key: 0,
  class: "nut-sku-operate"
}, _2 = {
  key: 0,
  class: "nut-sku-operate-desc"
}, I2 = {
  key: 1,
  class: "nut-sku-operate-btn"
}, B2 = ["onClick"];
function M2(e, t, n, s, o, r) {
  return e.btnOptions.length > 0 ? (u(), f("view", D2, [
    e.btnExtraText ? (u(), f("view", _2, E(e.btnExtraText), 1)) : N("", !0),
    I(e.$slots, "operate-btn"),
    e.getSlots("operate-btn") ? N("", !0) : (u(), f("view", I2, [
      (u(!0), f(x, null, ie(e.btnOptions, (l, a) => (u(), f("view", {
        key: a,
        class: L([`nut-sku-operate-btn-${l}`, "nut-sku-operate-btn-item"]),
        onClick: (i) => e.clickBtnOperate(l)
      }, E(e.getBtnDesc(l)), 11, B2))), 128))
    ]))
  ])) : N("", !0);
}
const L2 = /* @__PURE__ */ q(N2, [["render", M2]]), { create: E2 } = Y("sku"), P2 = "NutSku", A2 = E2({
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
    SkuHeader: i2,
    SkuSelect: g2,
    SkuStepper: S2,
    SkuOperate: L2,
    NutPopup: Ee
  },
  setup(e, { emit: t, slots: n }) {
    const s = ke(P2), o = z(e.visible), r = z(e.stepperMin);
    Q(
      () => e.visible,
      (w) => {
        o.value = w;
      }
    ), Q(
      () => o.value,
      (w) => {
        w == !1 && v();
      }
    );
    const l = (w) => n[w], a = (w) => {
      t("selectSku", w);
    }, i = (w) => {
      r.value = w, t("changeStepper", w);
    }, p = (w) => {
      t("add", w);
    }, d = (w) => {
      t("reduce", w);
    }, $ = (w) => {
      t("overLimit", w);
    }, g = (w) => {
      t("clickBtnOperate", {
        type: w,
        value: r.value
      });
    }, k = (w) => {
      w == "icon" && t("clickCloseIcon"), w == "overlay" && t("clickOverlay"), w == "close" && t("close"), o.value = !1;
    }, v = () => {
      t("update:visible", !1);
    };
    return {
      showPopup: o,
      closePopup: k,
      selectSku: a,
      changeStepper: i,
      stepperOverLimit: $,
      clickBtnOperate: g,
      add: p,
      reduce: d,
      getSlots: l,
      translate: s
    };
  }
}), z2 = { class: "nut-sku" }, V2 = { class: "nut-sku-content" };
function O2(e, t, n, s, o, r) {
  const l = W("sku-header"), a = W("SkuSelect"), i = W("sku-stepper"), p = W("sku-operate"), d = W("nut-popup");
  return u(), ee(d, {
    visible: e.showPopup,
    "onUpdate:visible": t[0] || (t[0] = ($) => e.showPopup = $),
    position: "bottom",
    closeable: "",
    round: "",
    style: { height: "75%" },
    "lock-scroll": e.lockScroll,
    "catch-move": e.lockScroll,
    onClickCloseIcon: t[1] || (t[1] = ($) => e.closePopup("icon")),
    onClickOverlay: t[2] || (t[2] = ($) => e.closePopup("overlay")),
    onClose: t[3] || (t[3] = ($) => e.closePopup("close"))
  }, {
    default: ne(() => [
      m("view", z2, [
        I(e.$slots, "sku-header"),
        e.getSlots("sku-header") ? N("", !0) : (u(), ee(l, {
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
        m("view", V2, [
          I(e.$slots, "sku-select-top"),
          I(e.$slots, "sku-select"),
          e.getSlots("sku-select") ? N("", !0) : (u(), ee(a, {
            key: 0,
            sku: e.sku,
            onSelectSku: e.selectSku
          }, null, 8, ["sku", "onSelectSku"])),
          I(e.$slots, "sku-stepper"),
          e.getSlots("sku-stepper") ? N("", !0) : (u(), ee(i, {
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
const H2 = /* @__PURE__ */ q(A2, [["render", O2]]), { create: R2 } = Y("card"), F2 = R2({
  components: {
    NutPrice: Ot,
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
}), W2 = { class: "nut-card" }, Y2 = { class: "nut-card__left" }, j2 = ["src"], U2 = { class: "nut-card__right" }, K2 = { class: "nut-card__right__title" }, X2 = {
  key: 0,
  class: "nut-card__right__price"
}, q2 = { class: "nut-card__right__other" }, Z2 = { class: "nut-card__right__shop" }, G2 = { class: "nut-card__right__shop__name" };
function J2(e, t, n, s, o, r) {
  const l = W("nut-price"), a = W("nut-tag");
  return u(), f("div", W2, [
    m("div", Y2, [
      m("img", {
        src: e.imgUrl,
        alt: ""
      }, null, 8, j2)
    ]),
    m("div", U2, [
      m("div", K2, E(e.title), 1),
      I(e.$slots, "prolist"),
      e.isNeedPrice ? (u(), f("div", X2, [
        I(e.$slots, "price", {}, () => [
          oe(l, { price: e.price }, null, 8, ["price"])
        ]),
        I(e.$slots, "origin", {}, () => [
          oe(l, {
            class: "nut-card__right__price__origin",
            price: e.vipPrice
          }, null, 8, ["price"])
        ])
      ])) : N("", !0),
      m("div", q2, [
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
      m("div", Z2, [
        m("div", G2, E(e.shopName), 1),
        I(e.$slots, "footer")
      ])
    ])
  ]);
}
const Q2 = /* @__PURE__ */ q(F2, [["render", J2]]), { create: x2 } = Y("ecard"), e3 = "NutEcard", t3 = x2({
  components: {
    NutInputNumber: rn
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
    const n = ke(e3), s = z(null), o = z(null), r = z(""), l = z(e.cardAmountMin), a = z(e.modelValue), i = (g, k) => {
      s.value = k, l.value = e.cardAmountMin, o.value = g.price, t("change", g), t("update:modelValue", g.price);
    }, p = (g) => {
      let v = g.target.value.replace(/[^\d]/g, "");
      r.value = v, o.value = v, Number(v) > e.cardAmountMax && (r.value = e.cardAmountMax, o.value = e.cardAmountMax), Number(v) < e.cardAmountMin && (r.value = e.cardAmountMin, o.value = e.cardAmountMin), t("inputChange", Number(r.value)), t("update:modelValue", Number(r.value));
    }, d = () => {
      s.value = "input", l.value = e.cardAmountMin, o.value = r.value, t("update:modelValue", r.value), t("inputClick");
    }, $ = (g) => {
      l.value = g, t("changeStep", l.value, o.value);
    };
    return Q(
      () => e.modelValue,
      (g) => {
        a.value = g;
      }
    ), {
      handleClick: i,
      changeStep: $,
      change: p,
      inputClick: d,
      stepValue: l,
      currentIndex: s,
      inputValue: r,
      money: a,
      translate: n
    };
  }
}), n3 = { class: "nut-ecard" }, o3 = { class: "nut-ecard__title" }, l3 = { class: "nut-ecard__list" }, s3 = ["onClick"], a3 = { class: "nut-ecard__list__input--con" }, r3 = ["placeholder"], i3 = { class: "nut-ecard__list__step" };
function u3(e, t, n, s, o, r) {
  const l = W("nut-input-number");
  return u(), f("view", n3, [
    m("view", o3, E(e.chooseText || e.translate("chooseText")), 1),
    m("view", l3, [
      (u(!0), f(x, null, ie(e.dataList, (a, i) => (u(), f("view", {
        key: i,
        class: L(["nut-ecard__list__item", e.currentIndex == i ? "active" : ""]),
        onClick: (p) => e.handleClick(a, i)
      }, E(a.price), 11, s3))), 128)),
      m("view", {
        class: L(["nut-ecard__list__input", e.currentIndex == "input" ? "active" : ""]),
        onClick: t[2] || (t[2] = (...a) => e.inputClick && e.inputClick(...a))
      }, [
        m("view", null, E(e.otherValueText || e.translate("otherValueText")), 1),
        m("view", a3, [
          Ce(m("input", {
            "onUpdate:modelValue": t[0] || (t[0] = (a) => e.inputValue = a),
            class: "nut-ecard__list__input--input",
            type: "text",
            placeholder: e.placeholder || e.translate("placeholder"),
            onInput: t[1] || (t[1] = (...a) => e.change && e.change(...a))
          }, null, 40, r3), [
            [Fn, e.inputValue]
          ]),
          ge(" " + E(e.suffix), 1)
        ])
      ], 2),
      m("view", i3, [
        m("view", null, E(e.suffix) + E(e.money), 1),
        oe(l, {
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
const c3 = /* @__PURE__ */ q(t3, [["render", u3]]), { create: d3 } = Y("address-list-item"), f3 = "NutAddressList", p3 = d3({
  components: { Del: Gn, Edit: bs },
  props: {
    item: {
      type: Object,
      default: {}
    }
  },
  emits: ["delIcon", "editIcon", "clickItem"],
  setup(e, { emit: t }) {
    const n = ke(f3);
    return {
      delClick: (l) => {
        t("delIcon", l, e.item), l.stopPropagation();
      },
      editClick: (l) => {
        t("editIcon", l, e.item), l.stopPropagation();
      },
      contentsClick: (l) => {
        t("clickItem", l, e.item), l.stopPropagation();
      },
      translate: n
    };
  }
}), m3 = { class: "nut-address-list-item__info" }, h3 = { class: "nut-address-list-item__info-contact" }, g3 = { class: "nut-address-list-item__info-contact-name" }, y3 = { class: "nut-address-list-item__info-contact-tel" }, v3 = {
  key: 0,
  class: "nut-address-list-item__info-contact-default"
}, $3 = { class: "nut-address-list-item__info-handle" }, b3 = { class: "nut-address-list-item__addr" };
function w3(e, t, n, s, o, r) {
  const l = W("Del"), a = W("Edit");
  return u(), f("div", {
    class: "nut-address-list-item",
    onClick: t[0] || (t[0] = (...i) => e.contentsClick && e.contentsClick(...i))
  }, [
    m("div", m3, [
      m("div", h3, [
        I(e.$slots, "content-top", {}, () => [
          m("div", g3, E(e.item.addressName), 1),
          m("div", y3, E(e.item.phone), 1),
          e.item.defaultAddress ? (u(), f("div", v3, E(e.translate("default")), 1)) : N("", !0)
        ])
      ]),
      m("div", $3, [
        I(e.$slots, "content-icon", {}, () => [
          oe(l, {
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
    m("div", b3, [
      I(e.$slots, "content-addr", {}, () => [
        ge(E(e.item.fullAddress), 1)
      ])
    ])
  ]);
}
const On = /* @__PURE__ */ q(p3, [["render", w3]]), { create: k3 } = Y("address-list-general"), C3 = k3({
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
        l(_);
      },
      onEditIcon(_) {
        a(_);
      },
      onClickItem(_) {
        i(_);
      }
    });
    let s = null;
    const o = z(!1), r = z(!1), l = (_) => {
      t("delIcon", _, e.item), _.stopPropagation();
    }, a = (_) => {
      t("editIcon", _, e.item), _.stopPropagation();
    }, i = (_) => {
      o.value || (t("clickItem", _, e.item), _.stopPropagation());
    }, p = (_) => {
      t("longDel", _, e.item), _.stopPropagation();
    }, d = (_) => {
      s = 0, r.value = !0, t("longDown", _, e.item);
    };
    return {
      renderCompontent: n,
      showMaskRef: r,
      clickItem: i,
      editClick: a,
      delClick: l,
      delLongClick: p,
      holddownstart: (_) => {
        s = setTimeout(() => {
          d(_);
        }, 300);
      },
      holddownmove: () => {
        clearTimeout(s);
      },
      holddownend: () => {
        clearTimeout(s);
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
        s != 0 && (r.value = !1), _.stopPropagation(), _.preventDefault();
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
}), S3 = {
  key: 0,
  class: "nut-address-list-general"
}, T3 = { class: "nut-address-list-swipe" };
function N3(e, t, n, s, o, r) {
  const l = W("nut-button"), a = W("nut-swipe");
  return e.swipeEdition ? (u(), ee(a, { key: 1 }, {
    right: ne(() => [
      I(e.$slots, "swipe-right-btn", {}, () => [
        oe(l, {
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
      m("div", T3, [
        (u(), ee(ze(e.renderCompontent()), {
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
  })) : (u(), f("div", S3, [
    (u(), ee(ze(e.renderCompontent()), {
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
    e.longPress && e.showMaskRef ? (u(), f("div", {
      key: 0,
      class: "nut-address-list-general__mask",
      onClick: t[3] || (t[3] = (...i) => e.maskClick && e.maskClick(...i))
    }, [
      I(e.$slots, "longpress-all", {}, () => [
        m("div", {
          class: "nut-address-list-general__mask-copy",
          onClick: t[0] || (t[0] = (...i) => e.copyCLick && e.copyCLick(...i))
        }, " 复制地址 "),
        m("div", {
          class: "nut-address-list-general__mask-set",
          onClick: t[1] || (t[1] = (...i) => e.setDefault && e.setDefault(...i))
        }, " 设置默认 "),
        m("div", {
          class: "nut-address-list-general__mask-del",
          onClick: t[2] || (t[2] = (...i) => e.delLongClick && e.delLongClick(...i))
        }, " 删除地址 ")
      ])
    ])) : N("", !0),
    e.showMaskRef ? (u(), f("div", {
      key: 1,
      class: "nut-address-list__mask-bottom",
      onClick: t[4] || (t[4] = (...i) => e.hideMaskClick && e.hideMaskClick(...i))
    })) : N("", !0)
  ]));
}
const D3 = /* @__PURE__ */ q(C3, [["render", N3]]), { create: _3 } = Y("address-list"), I3 = "NutAddressList", B3 = _3({
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
    GeneralShell: D3,
    NutButton: qe
  },
  emits: ["delIcon", "editIcon", "clickItem", "longCopy", "longSet", "longDel", "swipeDel", "add"],
  setup(e, { emit: t }) {
    const n = ke(I3), s = z([]), o = ce({
      id: 2,
      addressName: "姓名",
      phone: "123****4567",
      defaultAddress: !1,
      fullAddress: "北京市通州区测试测试测试测试测试测试测试测试测试"
    }), r = () => {
      Object.keys(e.dataOptions).length > 0 && (s.value = e.data.map((v) => ul(o, v, e.dataOptions)));
    };
    Q(
      () => e.data,
      () => r(),
      { deep: !0 }
    );
    const l = (v, w) => {
      t("delIcon", v, w), v.stopPropagation();
    }, a = (v, w) => {
      t("editIcon", v, w), v.stopPropagation();
    }, i = (v, w) => {
      t("clickItem", v, w), v.stopPropagation();
    }, p = (v, w) => {
      t("longCopy", v, w), v.stopPropagation();
    }, d = (v, w) => {
      t("longSet", v, w), v.stopPropagation();
    }, $ = (v, w) => {
      t("longDel", v, w), v.stopPropagation();
    }, g = (v, w) => {
      t("swipeDel", v, w), v.stopPropagation();
    }, k = (v) => {
      t("add", v), v.stopPropagation();
    };
    return ve(() => {
      r();
    }), {
      clickDelIcon: l,
      clickEditIcon: a,
      clickContentItem: i,
      clickLongCopy: p,
      clickLongSet: d,
      clickLongDel: $,
      clickSwipeDel: g,
      addAddress: k,
      dataArray: s,
      translate: n
    };
  }
}), M3 = { class: "nut-address-list" };
function L3(e, t, n, s, o, r) {
  const l = W("general-shell"), a = W("nut-button");
  return u(), f("div", M3, [
    (u(!0), f(x, null, ie(e.dataArray, (i, p) => (u(), ee(l, {
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
    e.showBottomButton ? (u(), f("div", {
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
const E3 = /* @__PURE__ */ q(B3, [["render", L3]]), { create: P3 } = Y("category"), A3 = P3({
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
    const n = z(0), s = z(!1);
    return {
      getChildList: (r) => {
        n.value = r, t("change", r);
      },
      checkIndex: n,
      categoryLeft: s
    };
  }
}), z3 = { class: "nut-category" }, V3 = { class: "nut-category__cateList" }, O3 = { key: 0 }, H3 = ["onClick"];
function R3(e, t, n, s, o, r) {
  return u(), f("div", z3, [
    m("div", V3, [
      e.type == "classify" || e.type == "text" ? (u(), f("div", O3, [
        (u(!0), f(x, null, ie(e.category, (l, a) => (u(), f("div", {
          key: a,
          class: "nut-category__cateListLeft"
        }, [
          m("div", {
            class: L([e.checkIndex == a ? "nut-category__cateListItemChecked" : "nut-category__cateListItem"]),
            onClick: (i) => e.getChildList(a)
          }, E(l.catName), 11, H3)
        ]))), 128))
      ])) : N("", !0),
      I(e.$slots, "default")
    ])
  ]);
}
const F3 = /* @__PURE__ */ q(A3, [["render", R3]]), { create: W3 } = Y("category-pane"), Y3 = W3({
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
      onChange: (s) => {
        t("onChange", s);
      }
    };
  }
}), j3 = { class: "nut-category-pane" }, U3 = {
  key: 0,
  class: "nut-category-pane__cateListRight"
}, K3 = { class: "nut-category-pane__childTitle" }, X3 = {
  key: 0,
  class: "nut-category-pane__childItemList"
}, q3 = ["onClick"], Z3 = ["src"], G3 = { class: "nut-category-pane__skuImg" }, J3 = {
  key: 1,
  class: "nut-category-pane__cateListRight"
}, Q3 = { class: "nut-category-pane__childTitle" }, x3 = {
  key: 0,
  class: "nut-category-pane__childItemList"
}, e4 = ["onClick"], t4 = { class: "nut-category-pane__skuName" }, n4 = {
  key: 2,
  class: "nut-category-pane__selfItemList"
}, o4 = ["onClick"];
function l4(e, t, n, s, o, r) {
  return u(), f("div", j3, [
    e.type == "classify" ? (u(), f("div", U3, [
      (u(!0), f(x, null, ie(e.categoryChild, (l, a) => (u(), f("div", { key: a }, [
        m("div", K3, E(l == null ? void 0 : l.catName), 1),
        (l == null ? void 0 : l.catType) == 1 ? (u(), f("div", X3, [
          (u(!0), f(x, null, ie(l.childCateList, (i, p) => (u(), f("div", {
            key: p,
            class: "nut-category-pane__childItem",
            onClick: (d) => e.onChange(i)
          }, [
            m("img", {
              class: "nut-category-pane__childImg",
              src: i.backImg
            }, null, 8, Z3),
            m("div", G3, E(i == null ? void 0 : i.catName), 1)
          ], 8, q3))), 128))
        ])) : N("", !0)
      ]))), 128))
    ])) : N("", !0),
    e.type == "text" ? (u(), f("div", J3, [
      (u(!0), f(x, null, ie(e.categoryChild, (l, a) => (u(), f("div", { key: a }, [
        m("div", Q3, E(l == null ? void 0 : l.catName), 1),
        (l == null ? void 0 : l.catType) == 1 ? (u(), f("div", x3, [
          (u(!0), f(x, null, ie(l.childCateList, (i, p) => (u(), f("div", {
            key: p,
            class: "nut-category-pane__childItem",
            onClick: (d) => e.onChange(i)
          }, [
            m("div", t4, E(i == null ? void 0 : i.catName), 1)
          ], 8, e4))), 128))
        ])) : N("", !0)
      ]))), 128))
    ])) : N("", !0),
    e.type == "custom" ? (u(), f("div", n4, [
      (u(!0), f(x, null, ie(e.customCategory, (l, a) => (u(), f("div", {
        key: a,
        class: "nut-category-pane__skuName",
        onClick: (i) => e.onChange(l)
      }, E(l == null ? void 0 : l.catName), 9, o4))), 128))
    ])) : N("", !0)
  ]);
}
const s4 = /* @__PURE__ */ q(Y3, [["render", l4]]), { create: a4 } = Y("comment-header"), r4 = a4({
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
}), i4 = { class: "nut-comment-header__user" }, u4 = { class: "nut-comment-header__user-avter" }, c4 = ["src"], d4 = { class: "nut-comment-header__user-score" }, f4 = {
  key: 0,
  class: "nut-comment-header__time"
};
function p4(e, t, n, s, o, r) {
  const l = W("nut-rate");
  return u(), f("view", null, [
    e.info ? (u(), f("view", {
      key: 0,
      class: "nut-comment-header",
      onClick: t[1] || (t[1] = (...a) => e.handleClick && e.handleClick(...a))
    }, [
      m("view", i4, [
        m("view", u4, [
          e.info.avatar ? (u(), f("img", {
            key: 0,
            src: e.info.avatar
          }, null, 8, c4)) : N("", !0)
        ]),
        e.type == "default" ? (u(), f("view", {
          key: 0,
          class: L([`nut-comment-header__user-${e.type}`])
        }, [
          m("view", {
            class: L([`nut-comment-header__user-${e.type}-name`])
          }, [
            m("span", null, E(e.info.nickName), 1),
            I(e.$slots, "labels")
          ], 2),
          m("view", d4, [
            oe(l, {
              modelValue: e.info.score,
              "onUpdate:modelValue": t[0] || (t[0] = (a) => e.info.score = a),
              size: "12",
              spacing: "5",
              readonly: "",
              onChange: e.handleClick
            }, null, 8, ["modelValue", "onChange"])
          ])
        ], 2)) : (u(), f("view", {
          key: 1,
          class: L([`nut-comment-header__user-${e.type}`])
        }, [
          m("span", {
            class: L([`nut-comment-header__user-${e.type}-name`])
          }, E(e.info.nickName), 3),
          I(e.$slots, "labels")
        ], 2))
      ]),
      e.info.time ? (u(), f("view", f4, E(e.info.time), 1)) : N("", !0)
    ])) : N("", !0),
    e.type == "complex" ? (u(), f("view", {
      key: 1,
      class: L([`nut-comment-header__${e.type}-score`])
    }, [
      oe(l, {
        modelValue: e.info.score,
        "onUpdate:modelValue": t[2] || (t[2] = (a) => e.info.score = a),
        size: "12",
        spacing: "3",
        readonly: ""
      }, null, 8, ["modelValue"]),
      m("i", {
        class: L([`nut-comment-header__${e.type}-score-i`])
      }, null, 2),
      m("view", {
        class: L([`nut-comment-header__${e.type}-score-size`])
      }, E(e.info.size), 3)
    ], 2)) : N("", !0)
  ]);
}
const m4 = /* @__PURE__ */ q(r4, [["render", p4]]), { create: h4 } = Y("comment-images"), g4 = h4({
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
  components: { Right: on },
  emits: ["click", "clickImages"],
  setup(e, { emit: t }) {
    const n = z(!1), s = z(1), o = z([]);
    return Q(
      () => [e.videos, e.images],
      (l) => {
        l[0].length > 0 && l[0].forEach((a) => {
          a.type = "video";
        }), o.value = l[0].concat(l[1]);
      },
      { deep: !0 }
    ), ve(() => {
      e.videos.length > 0 && e.videos.forEach((l) => {
        l.type = "video";
      }), o.value = e.videos.concat(e.images);
    }), { isShowImage: n, initIndex: s, showImages: (l, a) => {
      const { videos: i, images: p } = e, d = l == "img" ? a - i.length : a;
      t("clickImages", {
        type: l,
        index: d,
        value: l == "img" ? p[d] : i[d]
      });
    }, totalImages: o };
  }
}), y4 = ["onClick"], v4 = ["src"], $4 = /* @__PURE__ */ m("view", { class: "nut-comment-images__play" }, null, -1), b4 = ["onClick"], w4 = ["src"], k4 = {
  key: 0,
  class: "nut-comment-images__mask"
};
function C4(e, t, n, s, o, r) {
  const l = W("Right");
  return u(), f("view", {
    class: L(`nut-comment-images nut-comment-images--${e.type}`)
  }, [
    (u(!0), f(x, null, ie(e.videos, (a, i) => (u(), f("view", {
      key: a.id,
      class: "nut-comment-images__item nut-comment-images__item--video",
      onClick: (p) => e.showImages("video", i)
    }, [
      m("img", {
        src: a.mainUrl
      }, null, 8, v4),
      $4
    ], 8, y4))), 128)),
    (u(!0), f(x, null, ie(e.images, (a, i) => (u(), f(x, {
      key: a.id
    }, [
      e.type == "multi" && e.videos.length + i < 9 || e.type != "multi" ? (u(), f("view", {
        key: 0,
        class: "nut-comment-images__item nut-comment-images__item--imgbox",
        onClick: (p) => e.showImages("img", i + e.videos.length)
      }, [
        m("img", {
          src: a.smallImgUrl ? a.smallImgUrl : a.imgUrl
        }, null, 8, w4),
        e.type == "multi" && e.totalImages.length > 9 && e.videos.length + i > 7 ? (u(), f("view", k4, [
          m("span", null, "共 " + E(e.totalImages.length) + " 张", 1),
          oe(l, { style: { width: "12px" } })
        ])) : N("", !0)
      ], 8, b4)) : N("", !0)
    ], 64))), 128))
  ], 2);
}
const S4 = /* @__PURE__ */ q(g4, [["render", C4]]), { create: T4 } = Y("comment-bottom"), N4 = "NutComment", D4 = T4({
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
    const n = ke(N4), s = z(!1), o = z([]);
    return ve(() => {
      const a = ["replay", "like", "more"];
      e.operation && e.operation.forEach((i) => {
        a.includes(i) && o.value.push(i);
      });
    }), { showPopver: s, operate: (a) => {
      a == "more" && (s.value = !s.value), t("clickOperate", a);
    }, mergeOp: o, handleClick: () => {
      t("handleClick");
    }, translate: n };
  }
}), _4 = { class: "nut-comment-bottom" }, I4 = { key: 0 }, B4 = { class: "nut-comment-bottom__cpx" }, M4 = ["onClick"];
function L4(e, t, n, s, o, r) {
  const l = W("Fabulous"), a = W("Comment"), i = W("MoreX");
  return u(), f("view", _4, [
    m("view", {
      class: "nut-comment-bottom__lable",
      onClick: t[0] || (t[0] = (...p) => e.handleClick && e.handleClick(...p))
    }, [
      e.type != "complex" ? (u(), f("span", I4, E(e.info.size), 1)) : N("", !0)
    ]),
    m("view", B4, [
      (u(!0), f(x, null, ie(e.mergeOp, (p, d) => (u(), f("view", {
        key: d,
        class: L(["nut-comment-bottom__cpx-item", `nut-comment-bottom__cpx-item--${p}`]),
        onClick: ($) => e.operate(p)
      }, [
        p != "more" ? (u(), f(x, { key: 0 }, [
          m("span", null, E(e.info[p]), 1),
          p == "like" ? (u(), ee(l, { key: 0 })) : (u(), ee(a, { key: 1 }))
        ], 64)) : N("", !0),
        p == "more" ? (u(), f(x, { key: 1 }, [
          oe(i),
          e.showPopver ? (u(), f("view", {
            key: 0,
            class: "nut-comment-bottom__cpx-item-popover",
            onClick: t[1] || (t[1] = ($) => e.operate("popover"))
          }, E(e.translate("complaintsText")), 1)) : N("", !0)
        ], 64)) : N("", !0)
      ], 10, M4))), 128))
    ])
  ]);
}
const E4 = /* @__PURE__ */ q(D4, [["render", L4]]), { create: P4 } = Y("comment"), A4 = "NutComment", z4 = P4({
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
    CommentHeader: m4,
    CommentImages: S4,
    CommentBottom: E4,
    Right: on
  },
  emits: ["click", "clickImages", "clickOperate"],
  setup(e, { emit: t }) {
    const n = ke(A4);
    return { conEllipsis: D(() => e.ellipsis ? e.ellipsis : e.headerType == "complex" ? 6 : 2), clickOperate: (a) => {
      t("clickOperate", a);
    }, handleClick: () => {
      t("click", e.info);
    }, clickImages: (a) => {
      t("clickImages", a);
    }, translate: n };
  }
}), V4 = {
  key: 0,
  class: "nut-comment"
}, O4 = ["innerHTML"], H4 = { class: "nut-comment__follow-title" }, R4 = { class: "nut-comment__follow-com" };
function F4(e, t, n, s, o, r) {
  const l = W("comment-header"), a = W("comment-images"), i = W("Right"), p = W("comment-bottom");
  return e.info && Object.keys(e.info) ? (u(), f("view", V4, [
    oe(l, {
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
    m("view", {
      class: "nut-comment__main",
      style: A(`-webkit-line-clamp:${e.conEllipsis}`),
      onClick: t[0] || (t[0] = (...d) => e.handleClick && e.handleClick(...d)),
      innerHTML: e.info.content
    }, null, 12, O4),
    oe(a, {
      images: e.images,
      videos: e.videos,
      type: e.imagesRows,
      onClickImages: e.clickImages
    }, null, 8, ["images", "videos", "type", "onClickImages"]),
    e.follow && e.follow.days > 0 ? (u(), f("view", {
      key: 0,
      class: "nut-comment__follow",
      onClick: t[2] || (t[2] = (...d) => e.handleClick && e.handleClick(...d))
    }, [
      m("view", H4, E(e.translate("additionalReview", e.follow.days)), 1),
      m("view", R4, E(e.follow.content), 1),
      e.follow.images && e.follow.images.length > 0 ? (u(), f("view", {
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
const W4 = /* @__PURE__ */ q(z4, [["render", F4]]), { componentName: Y4, create: j4 } = Y("invoice"), U4 = j4({
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
    const n = z(), s = z([]), o = ce({
      // list: []
    }), r = D(() => ({
      [Y4]: !0
    }));
    ve(() => {
      l();
    });
    const l = () => {
      s.value = e.data;
    }, a = () => {
      n.value.validate().then(({ valid: i, errors: p }) => {
        t("submit", i, p), t("onSubmit", i, p);
      });
    };
    return Q(
      () => e.data,
      () => l(),
      { deep: !0 }
    ), de(Z({}, he(o)), {
      classes: r,
      formRef: n,
      list: s,
      submitFun: a
    });
  }
}), K4 = ["onUpdate:modelValue", "placeholder"], X4 = {
  key: 0,
  class: "nut-invoice__submit"
};
function q4(e, t, n, s, o, r) {
  const l = W("nut-radio"), a = W("nut-radio-group"), i = W("nut-form-item"), p = W("nut-form"), d = W("nut-button");
  return u(), f("view", {
    class: L(e.classes)
  }, [
    oe(p, {
      ref: "formRef",
      "model-value": e.formValue
    }, {
      default: ne(() => [
        (u(!0), f(x, null, ie(e.list, ($, g) => (u(), ee(i, {
          key: g,
          label: $.label,
          required: $.required,
          rules: $.rules,
          prop: $.formItemProp
        }, {
          default: ne(() => [
            $.type === "radio" ? (u(), ee(a, {
              key: 0,
              modelValue: e.formValue[$.formItemProp],
              "onUpdate:modelValue": (k) => e.formValue[$.formItemProp] = k
            }, {
              default: ne(() => [
                (u(!0), f(x, null, ie($.radioLabel, (k, v) => (u(), ee(l, {
                  key: v,
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
            }, 1032, ["modelValue", "onUpdate:modelValue"])) : Ce((u(), f("input", {
              key: 1,
              "onUpdate:modelValue": (k) => e.formValue[$.formItemProp] = k,
              class: "nut-input-text",
              placeholder: $.placeholder,
              type: "text"
            }, null, 8, K4)), [
              [Fn, e.formValue[$.formItemProp]]
            ])
          ]),
          _: 2
        }, 1032, ["label", "required", "rules", "prop"]))), 128))
      ]),
      _: 1
    }, 8, ["model-value"]),
    e.submit ? (u(), f("div", X4, [
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
const Z4 = /* @__PURE__ */ q(U4, [["render", q4]]), { create: G4 } = Y("avatar-cropper"), J4 = G4({
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
    const s = ce({
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
    }, r = z(Z({}, o)), l = z(), a = z(), i = z(), p = window.devicePixelRatio || 1, d = et(), $ = D(() => s.angle === 90 || s.angle === 270), g = D(() => {
      const { swidth: X } = r.value, se = X / p + "px";
      return {
        width: se,
        height: se
      };
    }), k = D(() => {
      const { displayWidth: X, scale: se } = s, { swidth: ue, height: pe } = r.value;
      return $.value ? Math.max(0, (pe * se - ue) / 2) : Math.max(0, (X * se - ue) / 2);
    }), v = D(() => {
      const { displayWidth: X, scale: se } = s, { swidth: ue, height: pe } = r.value;
      return $.value ? Math.max(0, (X * se - ue) / 2) : Math.max(0, (pe * se - ue) / 2);
    }), w = (X) => new Promise((se) => {
      const ue = new FileReader();
      ue.onloadend = (pe) => se(pe.target.result), ue.readAsDataURL(X);
    }), c = (X) => new Promise((se) => {
      const ue = new Image();
      ue.onload = () => se(ue), ue.src = X;
    }), y = () => {
      const { img: X, width: se, height: ue, x: pe, y: we, swidth: _e } = r.value, { moveX: H, moveY: J, scale: ae } = s, re = a.value;
      if (!re)
        return;
      const me = re.getContext("2d");
      re.width = s.displayWidth, re.height = s.displayHeight, me.clearRect(0, 0, re.width, re.height), me.fillStyle = "#666", me.fillRect(0, 0, re.width, re.height), me.fillStyle = "#000", me.fillRect(e.space * p, (re.height - _e) / 2, _e, _e), me.translate(re.width / 2 + H, re.height / 2 + J), me.rotate(Math.PI / 180 * s.angle), me.scale(ae, ae), me.drawImage(X, pe, we, se, ue);
    }, h = (X) => {
      const se = We(l.value), { width: ue, height: pe } = se, we = s.displayWidth = ue * p, _e = s.displayHeight = pe * p;
      let H = Z({}, o);
      const { width: J, height: ae } = X;
      H.img = X;
      const re = ae > J, me = re ? J / ae : ae / J;
      H.width = we, H.height = re ? we / me : we * me, H.x = -H.width / 2, H.y = -H.height / 2, H.swidth = we - e.space * 2 * p, H.sheight = re ? H.swidth / me : H.swidth * me, H.sx = e.space * p, H.sy = (_e - H.swidth) / 2, r.value = H, s.defScale = H.swidth / (re ? H.width : H.height), S();
    }, b = (X) => Ge(this, null, function* () {
      s.visible = !0;
      const se = X.target;
      let { files: ue } = se;
      if (!(ue != null && ue.length))
        return;
      const pe = yield w(ue[0]), we = yield c(pe);
      h(we), y();
    }), S = () => {
      _(s.defScale), s.moveX = 0, s.moveY = 0, s.angle = 0;
    }, _ = (X) => {
      X = Ae(X, 0.3, +e.maxZoom + 1), X !== s.scale && (s.scale = X);
    }, B = (X) => Math.sqrt(pt(X[0].clientX - X[1].clientX, 2) + pt(X[0].clientY - X[1].clientY, 2));
    let M, C, T, P, O;
    const K = (X) => {
      const { touches: se } = X, { offsetX: ue } = d;
      d.start(X), O = se.length, M = s.moveX, C = s.moveY, s.moving = O === 1, s.zooming = O === 2 && !ue.value, s.zooming && (T = s.scale, P = B(X.touches));
    }, G = (X) => {
      const { touches: se } = X;
      if (d.move(X), (s.moving || s.zooming) && dt(X, !0), s.moving) {
        const { deltaX: ue, deltaY: pe } = d, we = ue.value * s.scale + M, _e = pe.value * s.scale + C;
        s.moveX = Ae(we, -k.value, k.value), s.moveY = Ae(_e, -v.value, v.value);
      }
      if (s.zooming && se.length === 2) {
        const ue = B(se), pe = T * ue / P;
        _(pe);
      }
    }, le = (X) => {
      let se = !1;
      (s.moving || s.zooming) && (se = !(s.moving && M === s.moveX && C === s.moveY), X.touches.length || (s.zooming && (s.moveX = Ae(s.moveX, -k.value, k.value), s.moveY = Ae(s.moveY, -v.value, v.value), s.zooming = !1), s.moving = !1, M = 0, C = 0, T = s.defScale, s.scale < s.defScale && S(), s.scale > e.maxZoom && (s.scale = +e.maxZoom))), dt(X, se), d.reset();
    }, j = () => {
      s.angle = 0;
    }, U = () => {
      if (s.angle === 270) {
        s.angle = 0;
        return;
      }
      s.angle += 90;
    }, R = (X = !0) => {
      s.visible = !1, S(), i.value.value = "", X && t("cancel");
    }, te = () => {
      const X = a.value, { sx: se, sy: ue, swidth: pe } = r.value, we = pe, _e = pe, H = document.createElement("canvas"), J = H.getContext("2d");
      H.width = we, H.height = _e, X && J.drawImage(X, se, ue, we, _e, 0, 0, we, _e);
      const ae = H.toDataURL("image/png");
      t("confirm", ae), R(!1);
    };
    return Q(
      () => s.scale,
      () => {
        y();
      }
    ), Q(
      () => s.angle,
      () => {
        Math.abs(s.moveX) > k.value && (s.moveX = k.value), Math.abs(s.moveY) > v.value && (s.moveY = v.value), y();
      }
    ), Q(
      () => s.moveX,
      () => {
        y();
      }
    ), Q(
      () => s.moveY,
      () => {
        y();
      }
    ), n({
      cancel: R,
      reset: j,
      rotate: U,
      confirm: te
    }), de(Z({}, he(s)), {
      cropperPopupRef: l,
      canvasRef: a,
      inputImageRef: i,
      highlightStyle: g,
      inputImageChange: b,
      reset: j,
      rotate: U,
      cancel: R,
      confirm: te,
      onTouchStart: K,
      onTouchMove: G,
      onTouchEnd: le
    });
  }
}), Q4 = ["data-edit-text"], x4 = {
  ref: "cropperPopupRef",
  class: "nut-cropper-popup"
}, e5 = {
  ref: "canvasRef",
  class: "nut-cropper-popup__canvas"
}, t5 = {
  key: 1,
  class: "flex-sb"
};
function n5(e, t, n, s, o, r) {
  const l = W("nut-button"), a = W("Refresh2"), i = W("Retweet");
  return u(), f(x, null, [
    m("div", {
      class: L(["nut-avatar-cropper", { round: e.shape === "round" }]),
      "data-edit-text": e.editText
    }, [
      I(e.$slots, "default"),
      m("input", {
        ref: "inputImageRef",
        type: "file",
        accept: "image/*",
        class: "nut-avatar-cropper__input",
        onChange: t[0] || (t[0] = (...p) => e.inputImageChange && e.inputImageChange(...p))
      }, null, 544)
    ], 10, Q4),
    Ce(m("div", x4, [
      m("canvas", e5, null, 512),
      m("div", {
        class: "nut-cropper-popup__highlight",
        onTouchstart: t[1] || (t[1] = (...p) => e.onTouchStart && e.onTouchStart(...p)),
        onTouchmove: t[2] || (t[2] = (...p) => e.onTouchMove && e.onTouchMove(...p)),
        onTouchend: t[3] || (t[3] = (...p) => e.onTouchEnd && e.onTouchEnd(...p)),
        onTouchcancel: t[4] || (t[4] = (...p) => e.onTouchEnd && e.onTouchEnd(...p))
      }, [
        m("div", {
          class: L(["highlight", { highlight__round: e.shape === "round" }]),
          style: A(e.highlightStyle)
        }, null, 6)
      ], 32),
      m("div", {
        class: L(["nut-cropper-popup__toolbar", [e.toolbarPosition]])
      }, [
        e.$slots.toolbar ? I(e.$slots, "toolbar", { key: 0 }) : (u(), f("div", t5, [
          m("div", {
            class: "nut-cropper-popup__toolbar-item",
            onClick: t[5] || (t[5] = (p) => e.cancel())
          }, [
            oe(l, { type: "danger" }, {
              default: ne(() => [
                ge(E(e.cancelText), 1)
              ]),
              _: 1
            })
          ]),
          m("div", {
            class: "nut-cropper-popup__toolbar-item",
            onClick: t[6] || (t[6] = (...p) => e.reset && e.reset(...p))
          }, [
            oe(a, { color: "#fff" })
          ]),
          m("div", {
            class: "nut-cropper-popup__toolbar-item",
            onClick: t[7] || (t[7] = (...p) => e.rotate && e.rotate(...p))
          }, [
            oe(i, { color: "#fff" })
          ]),
          m("div", {
            class: "nut-cropper-popup__toolbar-item",
            onClick: t[8] || (t[8] = (...p) => e.confirm && e.confirm(...p))
          }, [
            oe(l, { type: "success" }, {
              default: ne(() => [
                ge(E(e.confirmText), 1)
              ]),
              _: 1
            })
          ])
        ]))
      ], 2)
    ], 512), [
      [Ne, e.visible]
    ])
  ], 64);
}
const o5 = /* @__PURE__ */ q(J4, [["render", n5]]);
function l5(e) {
  [qe, eo, to, Tt, Ee, Ni, Pi, oo, so, ao, uo, co, Gi, nu, lu, fu, Cu, Mu, Vu, Fu, ec, go, wc, yo, vo, Fc, qc, ed, rd, wo, _d, Yd, pf, So, zf, Hf, lp, rn, Cp, _o, Io, Bo, Co, No, jp, Jp, C1, F1, un, cn, Eo, G1, im, pm, ym, dn, Vm, Ym, zt, xm, Vt, yh, Ch, fn, Bh, Ah, Mo, Uh, tg, cg, pn, Ig, Yg, mn, hn, Ot, gn, v0, N0, ho, Fo, Wo, Y0, jo, Uo, my, Ko, ky, Dy, Ly, jy, hv, bv, _v, Rv, Uv, xv, H2, Q2, c3, E3, F3, s4, W4, Z4, o5].forEach((n) => {
    n.install ? e.use(n) : n.name && e.component(n.name, n);
  });
}
const s5 = "4.3.2", d5 = { install: l5, version: s5 };
export {
  im as ActionSheet,
  hv as Address,
  E3 as AddressList,
  Ko as Animate,
  yh as Audio,
  Ch as AudioOperate,
  fn as Avatar,
  o5 as AvatarCropper,
  Bh as AvatarGroup,
  pm as Backtop,
  ho as Badge,
  bv as Barrage,
  qe as Button,
  pf as Calendar,
  So as CalendarCard,
  Co as CalendarItem,
  Q2 as Card,
  Yd as Cascader,
  F3 as Category,
  s4 as CategoryPane,
  eo as Cell,
  to as CellGroup,
  zf as Checkbox,
  Hf as CheckboxGroup,
  Uh as CircleProgress,
  so as Col,
  jo as Collapse,
  Uo as CollapseItem,
  W4 as Comment,
  Ni as ConfigProvider,
  N0 as Countdown,
  v0 as Countup,
  lp as DatePicker,
  dn as Dialog,
  co as Divider,
  ym as Drag,
  c3 as Ecard,
  go as Elevator,
  ky as Ellipsis,
  cg as Empty,
  Cu as FixedNav,
  un as Form,
  cn as FormItem,
  Gi as Grid,
  nu as GridItem,
  Pi as Image,
  gn as ImagePreview,
  Fc as Indicator,
  Vm as InfiniteLoading,
  Cp as Input,
  rn as InputNumber,
  Z4 as Invoice,
  oo as Layout,
  Ah as List,
  Xn as Locale,
  Mu as Menu,
  Vu as MenuItem,
  fu as Navbar,
  tg as Noticebar,
  zt as Notify,
  F1 as NumberKeyboard,
  Tt as Overlay,
  wc as Pagination,
  No as Picker,
  Wo as Popover,
  Ee as Popup,
  Ot as Price,
  Mo as Progress,
  Ym as PullRefresh,
  _o as Radio,
  Io as RadioGroup,
  wo as Range,
  Bo as Rate,
  ao as Row,
  _d as Searchbar,
  jp as ShortPassword,
  qc as SideNavbar,
  ed as SideNavbarItem,
  _v as Signature,
  Y0 as Skeleton,
  H2 as Sku,
  lu as Space,
  Yg as Step,
  Ig as Steps,
  uo as Sticky,
  rd as SubSideNavbar,
  Eo as Swipe,
  G1 as SwipeGroup,
  mn as Swiper,
  hn as SwiperItem,
  xm as Switch,
  vo as TabPane,
  Fu as Tabbar,
  ec as TabbarItem,
  my as Table,
  yo as Tabs,
  Fo as Tag,
  Jp as Textarea,
  xv as TimeDetail,
  Uv as TimePannel,
  Rv as TimeSelect,
  Vt as Toast,
  jy as Tour,
  Ly as TrendArrow,
  C1 as Uploader,
  pn as Video,
  Dy as Watermark,
  d5 as default,
  l5 as install,
  Nm as showDialog,
  d0 as showImagePreview,
  c5 as showNotify,
  zo as showToast,
  s5 as version
};
