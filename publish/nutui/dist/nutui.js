var Vo = Object.defineProperty, Oo = Object.defineProperties;
var Ho = Object.getOwnPropertyDescriptors;
var St = Object.getOwnPropertySymbols;
var fn = Object.prototype.hasOwnProperty, pn = Object.prototype.propertyIsEnumerable;
var ct = Math.pow, Vt = (e, t, n) => t in e ? Vo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Z = (e, t) => {
  for (var n in t || (t = {}))
    fn.call(t, n) && Vt(e, n, t[n]);
  if (St)
    for (var n of St(t))
      pn.call(t, n) && Vt(e, n, t[n]);
  return e;
}, ce = (e, t) => Oo(e, Ho(t));
var Tt = (e) => typeof e == "symbol" ? e : e + "", Ot = (e, t) => {
  var n = {};
  for (var s in e)
    fn.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && St)
    for (var s of St(e))
      t.indexOf(s) < 0 && pn.call(e, s) && (n[s] = e[s]);
  return n;
};
var V = (e, t, n) => (Vt(e, typeof t != "symbol" ? t + "" : t, n), n);
var Ke = (e, t, n) => new Promise((s, l) => {
  var a = (i) => {
    try {
      r(n.next(i));
    } catch (p) {
      l(p);
    }
  }, o = (i) => {
    try {
      r(n.throw(i));
    } catch (p) {
      l(p);
    }
  }, r = (i) => i.done ? s(i.value) : Promise.resolve(i.value).then(a, o);
  r((n = n.apply(e, t)).next());
});
import { reactive as ue, ref as z, defineComponent as nt, useSlots as et, h as be, openBlock as u, createBlock as ee, computed as D, createElementBlock as d, normalizeClass as M, normalizeStyle as A, createElementVNode as m, createTextVNode as ge, unref as Qe, createCommentVNode as T, renderSlot as I, provide as Me, inject as Be, getCurrentInstance as Fe, onUnmounted as je, createApp as Ro, resolveComponent as j, Fragment as x, toDisplayString as L, watchEffect as yt, Transition as Kt, withCtx as te, withDirectives as Ce, withModifiers as De, vShow as Ne, watch as Q, toRefs as he, Teleport as Fo, mergeProps as vt, createVNode as oe, onMounted as ve, onBeforeUnmount as Xt, shallowReactive as Wo, markRaw as mn, isVNode as Yo, Comment as jo, Text as Uo, nextTick as Te, renderList as ie, normalizeProps as Ko, guardReactiveProps as Xo, resolveDynamicComponent as Ae, onActivated as bt, createSlots as $t, onBeforeMount as En, readonly as hn, onDeactivated as wt, render as qt, vModelText as Pn } from "vue";
class An {
}
let qo = class extends An {
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
class Zo extends An {
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
const Zt = (e, {
  args: t = [],
  done: n,
  canceled: s
}) => {
  if (e) {
    const l = e.apply(null, t);
    zn(l) ? l.then((a) => {
      a ? n(a) : s && s();
    }).catch(() => {
    }) : l ? n() : s && s();
  } else
    n();
}, Mt = (e) => {
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
}, Gt = Array.isArray, Go = (e) => e instanceof Date, Lt = (e) => typeof e == "function", Jo = (e) => typeof e == "string", rt = (e) => e !== null && typeof e == "object", zn = (e) => rt(e) && Lt(e.then) && Lt(e.catch), Qo = document, gn = Qo.body, Rt = (e, t) => {
  try {
    return t.split(".").reduce((n, s) => n[s], e);
  } catch (n) {
    return "";
  }
}, xo = (e, t, n) => {
  let s = Object.assign({}, e), l = Object.assign({}, n);
  return Object.keys(t).length > 0 ? (Object.keys(s).forEach((a) => {
    if (Object.prototype.hasOwnProperty.call(l, a)) {
      const o = Mt(l[a]);
      o == "function" && (s[a] = l[a](t)), o == "string" && (s[a] = t[l[a]]);
    } else
      t[a] && (s[a] = t[a]);
  }), s) : e;
}, Vn = (e, t) => (Object.keys(t).forEach((n) => {
  let s = e[n], l = t[n];
  rt(s) && rt(l) ? Vn(s, l) : e[n] = l;
}), e);
function el(e, t = 2) {
  return Object.is(parseFloat(e), NaN) ? console.log(`传入的值：${e}不是一个数字`) : (e = parseFloat(e), (Math.round((e + Number.EPSILON) * Math.pow(10, t)) / Math.pow(10, t)).toFixed(t));
}
function it(e, t) {
  (typeof e.cancelable != "boolean" || e.cancelable) && e.preventDefault(), t && e.stopPropagation();
}
const qe = (e, t = 2) => {
  for (e += ""; e.length < t; )
    e = "0" + e;
  return e.toString();
}, Pe = (e, t, n) => Math.min(Math.max(e, t), n), On = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, Nt = ue({
  "zh-CN": new qo(),
  "en-US": new Zo()
});
class Hn {
  static languages() {
    return Nt[this.currentLang.value];
  }
  static use(t, n) {
    n && (Nt[t] = new n()), this.currentLang.value = t;
  }
  static merge(t, n) {
    n && (Nt[t] ? Vn(Nt[t], n) : this.use(t, n));
  }
}
V(Hn, "currentLang", z("zh-CN"));
const tl = /* @__PURE__ */ nt({
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
    const n = e, s = "nut-icon", l = et(), a = () => n.name ? n.name.indexOf("/") !== -1 : !1, o = (f) => {
      if (f)
        return isNaN(Number(f)) ? String(f) : f + "px";
    }, r = a();
    let i = be(
      r ? "img" : n.tag,
      {
        class: r ? `${s}__img` : `${n.fontClassName} ${s} ${n.classPrefix}-${n.name}`,
        style: {
          color: n.color,
          fontSize: o(n.size),
          width: o(n.width || n.size),
          height: o(n.height || n.size)
        },
        src: r ? n.name : ""
      },
      (t = l.default) == null ? void 0 : t.call(l)
    );
    const p = () => i;
    return (f, v) => (u(), ee(p));
  }
});
function nl(e) {
  return e.name = "IconFont", e.install = (t) => {
    t.component("IconFont", e);
  }, e;
}
nl(tl);
const F = (e) => nt({
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
    }, s = D(() => {
      const a = "nut-icon";
      return {
        [t.class]: t.class,
        [a]: !0,
        [a + "-" + t.name]: t.name
      };
    }), l = D(() => {
      const a = {};
      return a.height = n(t.height), a.width = n(t.width), a.color = t.color, a;
    });
    return { classes: s, style: l };
  }
}), ye = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, l] of t)
    n[s] = l;
  return n;
};
F("add");
F("addfollow");
F("arrow-down");
const ol = F("arrow-down2"), ll = /* @__PURE__ */ m("path", {
  d: "M1741.19 227.497a121.654 121.654 0 1 1 127.858 206.812L1292.65 790.27a182.482 182.482 0 0 1-191.727 0L524.646 434.31a121.654 121.654 0 1 1 127.859-206.812l544.403 335.887c181.387-111.8 362.773-223.965 544.282-335.887",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), sl = [
  ll
];
function al(e, t, n, s, l, a) {
  return u(), d("svg", {
    class: M(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 2472 1024",
    role: "presentation"
  }, sl, 6);
}
const rl = /* @__PURE__ */ ye(ol, [["render", al]]);
F("arrow-right");
F("arrow-right2");
F("arrow-up");
const il = F("arrow-up2"), ul = /* @__PURE__ */ m("path", {
  d: "M623.406 815.479A129.722 129.722 0 1 1 487.068 594.95C691.9 468.083 896.73 341.993 1101.691 215.125a194.583 194.583 0 0 1 204.442 0l614.494 379.567a129.722 129.722 0 1 1-136.338 220.657l-580.506-358.292-580.377 358.422",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), cl = [
  ul
];
function dl(e, t, n, s, l, a) {
  return u(), d("svg", {
    class: M(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 2472 1024",
    role: "presentation"
  }, cl, 6);
}
const fl = /* @__PURE__ */ ye(il, [["render", dl]]);
F("ask");
F("ask2");
F("cart");
F("cart2");
F("category");
const pl = F("check-checked"), ml = /* @__PURE__ */ m("path", {
  d: "M510.613 2.837C229.793 2.837.032 232.598.032 513.418S229.793 1024 510.613 1024s510.582-229.762 510.582-510.582S794.27 2.837 510.613 2.837zm0 794.238c-156.01 0-283.656-127.646-283.656-283.657s127.645-283.656 283.656-283.656S794.27 357.407 794.27 513.418 666.624 797.075 510.613 797.075z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), hl = /* @__PURE__ */ m("path", {
  d: "M382.968 513.418a127.645 127.645 0 1 0 255.29 0 127.645 127.645 0 1 0-255.29 0Z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1);
function gl(e, t, n, s, l, a) {
  return u(), d("svg", {
    class: M(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1032 1024",
    role: "presentation"
  }, [
    ml,
    ge(","),
    hl
  ], 6);
}
const yn = /* @__PURE__ */ ye(pl, [["render", gl]]), yl = F("check-disabled"), vl = /* @__PURE__ */ m("path", {
  d: "M506.467 0C227.962 0 .094 227.868.094 506.374s227.868 506.373 506.373 506.373 506.374-227.868 506.374-506.373S787.786 0 506.467 0zm202.55 571.077H306.73c-45.01 0-67.516-22.506-67.516-67.517 0-45.01 22.505-67.516 67.516-67.516h402.286c45.01 0 67.516 22.505 67.516 67.516 0 45.011-22.505 67.517-67.516 67.517z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), $l = [
  vl
];
function bl(e, t, n, s, l, a) {
  return u(), d("svg", {
    class: M(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, $l, 6);
}
const wl = /* @__PURE__ */ ye(yl, [["render", bl]]), kl = F("check-normal"), Cl = /* @__PURE__ */ m("path", {
  d: "M512 1024c-136.533 0-264.533-54.044-361.244-150.756C54.044 776.534 0 648.534 0 512c0-136.533 54.044-264.533 150.756-361.244C247.466 54.044 375.466 0 512 0c136.533 0 264.533 54.044 361.244 150.756C969.956 247.466 1024 375.466 1024 512s-54.044 264.533-150.756 361.244C776.534 969.956 648.534 1024 512 1024zm0-938.667c-113.778 0-221.867 45.511-301.511 125.156S85.333 398.222 85.333 512s45.511 221.867 125.156 301.511S398.222 938.667 512 938.667s221.867-45.511 301.511-125.156S938.667 625.778 938.667 512 893.156 290.133 813.51 210.489 625.778 85.333 512 85.333z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Sl = [
  Cl
];
function Tl(e, t, n, s, l, a) {
  return u(), d("svg", {
    class: M(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Sl, 6);
}
const Ft = /* @__PURE__ */ ye(kl, [["render", Tl]]), Nl = F("Check"), Dl = /* @__PURE__ */ m("path", {
  d: "M998.4 245.029c-219.429 153.6-398.629 332.8-552.229 552.228-40.228 58.514-128 54.857-164.571-3.657-69.486-106.057-149.943-186.514-256-256-51.2-32.914-18.286-113.371 40.229-98.743C182.857 460.8 274.286 508.343 358.4 585.143c157.257-190.172 358.4-340.114 588.8-435.2 62.171-25.6 106.057 58.514 51.2 95.086",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), _l = [
  Dl
];
function Il(e, t, n, s, l, a) {
  return u(), d("svg", {
    class: M(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, _l, 6);
}
const Rn = /* @__PURE__ */ ye(Nl, [["render", Il]]), Bl = F("checked"), Ml = /* @__PURE__ */ m("path", {
  d: "M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0zm281.6 369.778C779.378 381.156 600.178 500.622 472.178 691.2c0 0 0 2.844-2.845 2.844-8.533 5.69-48.355 36.978-88.177-8.533-39.823-51.2-62.578-99.555-142.223-142.222-2.844 0-2.844-2.845-2.844-2.845-8.533-11.377-39.822-56.888 19.911-56.888 45.511 0 91.022 11.377 162.133 73.955 5.69 5.689 14.223 5.689 17.067 0C469.333 517.69 608.711 366.933 768 318.578c0 0 19.911-2.845 31.289 14.222 5.689 11.378 11.378 22.756-5.689 36.978z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ll = [
  Ml
];
function El(e, t, n, s, l, a) {
  return u(), d("svg", {
    class: M(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ll, 6);
}
const Fn = /* @__PURE__ */ ye(Bl, [["render", El]]), Pl = F("checklist"), Al = /* @__PURE__ */ m("path", {
  d: "M159.289 500.622c62.578 0 125.155 17.067 221.867 102.4 8.533 5.69 19.91 5.69 25.6 0 48.355-54.044 238.933-261.689 455.11-329.955 0 0 28.445-5.69 42.667 19.91 8.534 17.067 19.911 34.134-5.689 54.045-22.755 17.067-264.533 179.2-440.888 440.89l-2.845 2.844c-11.378 8.533-68.267 51.2-119.467-14.223-56.888-71.11-85.333-139.377-196.266-196.266-2.845 0-2.845-2.845-5.69-5.69-11.377-11.377-54.044-73.955 25.6-73.955z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), zl = [
  Al
];
function Vl(e, t, n, s, l, a) {
  return u(), d("svg", {
    class: M(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, zl, 6);
}
const Ol = /* @__PURE__ */ ye(Pl, [["render", Vl]]), Hl = F("circle-close"), Rl = /* @__PURE__ */ m("path", {
  d: "M511.492 73.063a438.425 438.425 0 0 1 310.545 748.953 439.16 439.16 0 1 1-621.09-621.073A435.695 435.695 0 0 1 511.492 73.046m0-73.063C267.49.018 57.468 172.408 9.87 411.717-37.713 651.042 90.39 890.658 315.823 984.03c225.45 93.355 485.444 14.472 621.005-188.416 135.543-202.906 108.885-473.293-63.659-645.82A509.645 509.645 0 0 0 511.492.002zm-175.7 635.495 299.673-299.674c12.049-12.049 24.115-12.049 36.164 0l15.496 15.497c12.05 12.066 12.05 24.115 0 36.18L387.47 687.122c-12.066 12.05-24.115 12.05-36.181 0l-15.497-15.496c-12.049-12.066-12.049-24.115 0-36.182zm0-284.177 15.496-15.497c12.066-12.049 24.115-12.049 36.18 0l299.64 299.674c12.05 12.049 12.05 24.098 0 36.164l-15.496 15.496c-12.05 12.05-24.115 12.05-36.182 0L335.808 387.465c-12.049-12.05-12.049-24.098 0-36.164z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Fl = [
  Rl
];
function Wl(e, t, n, s, l, a) {
  return u(), d("svg", {
    class: M(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Fl, 6);
}
const Jt = /* @__PURE__ */ ye(Hl, [["render", Wl]]);
F("clock");
F("close-little");
const Yl = F("close"), jl = /* @__PURE__ */ m("path", {
  d: "M981.577 1024c-11.703 0-23.406-2.926-32.183-11.703L13.166 76.07c-14.629-17.555-14.629-46.812 0-64.366 17.554-14.629 46.811-14.629 64.365 0L1013.76 947.93c17.554 17.555 17.554 43.886 0 61.44-8.777 11.703-20.48 14.629-32.183 14.629zm-936.228 0c-11.703 0-23.406-2.926-32.183-11.703-17.555-17.554-17.555-43.886 0-61.44L949.394 14.63c17.555-17.555 43.886-17.555 61.44 0 17.555 17.554 17.555 43.885 0 61.44L74.606 1012.297C68.754 1021.074 57.05 1024 45.349 1024z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ul = [
  jl
];
function Kl(e, t, n, s, l, a) {
  return u(), d("svg", {
    class: M(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1026 1024",
    role: "presentation"
  }, Ul, 6);
}
const Et = /* @__PURE__ */ ye(Yl, [["render", Kl]]), Xl = F("comment"), ql = /* @__PURE__ */ m("path", {
  d: "M760.415 876.089H259.793c-132.741 0-242.726-109.985-242.726-242.726V242.726C17.067 109.986 127.052 0 259.793 0h504.414c132.741 0 242.726 109.985 242.726 242.726v394.43c-3.792 132.74-109.985 238.933-246.518 238.933zM259.793 113.778c-72.06 0-128.949 56.889-128.949 128.948v394.43c0 72.059 56.89 128.948 128.949 128.948h504.414c68.267 0 128.949-56.89 128.949-128.948v-394.43c0-72.06-56.89-128.948-128.949-128.948H259.793zm56.888 887.466c-15.17 0-30.34-3.792-41.718-15.17-22.756-22.755-22.756-56.889 0-79.644l109.985-109.986c22.756-22.755 56.889-22.755 79.645 0s22.755 56.89 0 79.645L354.607 986.074c-7.585 7.585-22.755 15.17-37.926 15.17zm193.423-398.222c-45.511 0-91.023-22.755-117.57-56.889-18.964-26.548-15.171-60.681 7.585-79.644 26.548-18.963 60.681-15.17 79.644 7.585 15.17 18.963 45.511 18.963 56.889 0 18.963-22.755 56.889-30.34 79.644-7.585s30.341 56.889 7.585 79.644c-22.755 37.926-68.266 56.89-113.777 56.89z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Zl = [
  ql
];
function Gl(e, t, n, s, l, a) {
  return u(), d("svg", {
    class: M(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Zl, 6);
}
const Jl = /* @__PURE__ */ ye(Xl, [["render", Gl]]);
F("date");
const Ql = F("del"), xl = /* @__PURE__ */ m("path", {
  d: "M668.444 1024H355.556c-142.223 0-256-113.778-256-256V170.667h824.888V768c0 142.222-113.777 256-256 256zM184.89 256v512c0 93.867 76.8 170.667 170.667 170.667h312.888c93.867 0 170.667-76.8 170.667-170.667V256H184.89zm753.778 0H85.333c-22.755 0-42.666-19.911-42.666-42.667s19.91-42.666 42.666-42.666h853.334c22.755 0 42.666 19.91 42.666 42.666S961.423 256 938.667 256zM625.777 85.333H398.223c-22.755 0-42.666-19.91-42.666-42.666S375.466 0 398.222 0h227.556c22.755 0 42.666 19.911 42.666 42.667s-19.91 42.666-42.666 42.666z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), es = [
  xl
];
function ts(e, t, n, s, l, a) {
  return u(), d("svg", {
    class: M(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, es, 6);
}
const Wn = /* @__PURE__ */ ye(Ql, [["render", ts]]);
F("del2");
F("dongdong");
F("dou-arrow-up");
const ns = F("down-arrow"), os = /* @__PURE__ */ m("path", {
  d: "M128 349.867C93.867 332.8 34.133 341.333 8.533 384-8.533 418.133 0 477.867 42.667 503.467 179.2 588.8 315.733 665.6 443.733 750.933c42.667 25.6 93.867 25.6 136.534 0C716.8 665.6 853.333 588.8 981.333 503.467c42.667-25.6 51.2-76.8 25.6-119.467s-76.8-51.2-119.466-25.6C768 435.2 640 512 512 588.8 384 512 256 435.2 128 349.867",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ls = [
  os
];
function ss(e, t, n, s, l, a) {
  return u(), d("svg", {
    class: M(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ls, 6);
}
const Yn = /* @__PURE__ */ ye(ns, [["render", ss]]);
F("download");
F("dshop");
const as = F("edit"), rs = /* @__PURE__ */ m("path", {
  d: "M285.479 992.97H108.606c-27.927 0-55.854-12.412-77.576-31.03C9.31 940.217 0 915.393 0 884.363l3.103-155.152c0-24.824 9.31-46.545 27.927-65.164L626.812 65.164c83.782-83.782 220.315-83.782 307.2 0 83.782 83.781 83.782 223.418 0 307.2l-605.09 601.988c-12.413 12.412-27.928 18.618-43.443 18.618zM781.964 93.09c-31.03 0-65.164 12.413-89.988 37.237L96.194 729.212 93.09 884.364c0 9.309 6.206 15.515 15.515 15.515h161.358l598.884-595.782c49.649-49.649 49.649-127.224 0-173.77l-3.103-3.103c-21.72-21.721-52.751-34.133-83.781-34.133zm-201.946 78.508 65.816-65.847L882.812 342.73l-65.846 65.784zM946.424 992.97H217.212c-24.824 0-46.545-21.722-46.545-46.546s21.72-46.545 46.545-46.545h729.212c24.824 0 46.546 21.721 46.546 46.545s-21.722 46.546-46.546 46.546z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), is = [
  rs
];
function us(e, t, n, s, l, a) {
  return u(), d("svg", {
    class: M(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, is, 6);
}
const cs = /* @__PURE__ */ ye(as, [["render", us]]);
F("eye");
const ds = F("fabulous"), fs = /* @__PURE__ */ m("path", {
  d: "M584.06 1024H318.577C144.118 1024 0 883.674 0 705.422s140.326-318.578 318.578-318.578v113.778c-113.778 0-204.8 91.022-204.8 204.8s91.022 204.8 204.8 204.8h265.481V1024zm56.888 0h-53.096c-208.593 0-379.26-170.667-379.26-383.052 0-83.437 26.549-163.081 75.852-231.348l3.793-3.793c15.17-22.755 30.34-60.681 45.511-121.363l7.585-34.133c7.586-18.963 15.17-41.718 18.963-68.267C386.844 22.756 470.281 0 519.586 0c117.57 0 178.251 106.193 178.251 212.385v7.585c0 7.586-3.793 18.963-3.793 37.926C876.09 257.896 1024 405.807 1024 587.852v53.096C1024 853.333 853.333 1024 640.948 1024zM519.585 113.778c-30.34 0-41.718 53.096-49.304 87.23-3.792 34.133-11.377 60.68-15.17 83.436l-7.585 34.134c-11.378 45.51-34.133 113.778-60.682 155.496l-7.585 3.793A269.274 269.274 0 0 0 322.37 644.74c0 147.91 121.363 269.274 269.274 269.274h53.097c147.91 0 269.274-121.363 269.274-269.274v-53.097c0-117.57-98.608-216.177-216.178-216.177h-56.889c-18.963-3.793-37.926-15.17-49.304-30.341-11.377-15.17-15.17-37.926-15.17-56.889 7.585-41.718 11.378-64.474 11.378-75.852v-3.792c-3.793 0-3.793-94.815-68.267-94.815z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ps = [
  fs
];
function ms(e, t, n, s, l, a) {
  return u(), d("svg", {
    class: M(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1061 1024",
    role: "presentation"
  }, ps, 6);
}
const hs = /* @__PURE__ */ ye(ds, [["render", ms]]), gs = F("failure"), ys = /* @__PURE__ */ m("path", {
  d: "M512 1024C229.831 1024 0 794.169 0 512S229.831 0 512 0s512 229.831 512 512-229.831 512-512 512zm0-955.733C266.24 68.267 68.267 266.24 68.267 512S266.24 955.733 512 955.733 955.733 757.76 955.733 512 757.76 68.267 512 68.267zm111.502 282.169c13.654-13.654 34.134-13.654 47.787 0 11.378 11.377 13.653 31.857 2.275 45.51l-2.275 2.276-111.502 111.502 111.502 111.503c13.653 13.653 13.653 34.133 0 47.786-13.653 13.654-34.133 13.654-47.787 0L512 557.511 400.498 669.013c-11.378 11.378-31.858 13.654-45.511 2.276l-2.276-2.276c-11.378-11.377-13.653-31.857-2.275-45.51l2.275-2.276 111.502-111.503-111.502-111.502c-13.653-13.653-13.653-34.133 0-47.786s34.133-13.654 47.787 0L512 461.938l111.502-111.502z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), vs = [
  ys
];
function $s(e, t, n, s, l, a) {
  return u(), d("svg", {
    class: M(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, vs, 6);
}
const jn = /* @__PURE__ */ ye(gs, [["render", $s]]);
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
const bs = F("image-error"), ws = /* @__PURE__ */ m("path", {
  d: "M696.43 465.25c40.61 0 73.53-32.72 73.53-73.09s-32.96-73.08-73.53-73.08-73.54 32.72-73.54 73.08 32.92 73.09 73.54 73.09zM535.74 650.62l-273.61-259.4a56.19 56.19 0 0 0-15.36 11.58l-114 119.63-6-222.77c-.73-26.82 20.84-49.41 47.67-50.14l201.77-5.44 47.34-50-250.43 6.75C119 202.33 76.33 247.17 77.78 301l7.32 271.4 4.5 166.78C91.06 793 136.05 835.47 190.2 834l176-4.75 12-.32 47.34-50 116.18-122.64z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ks = /* @__PURE__ */ m("path", {
  d: "m861.71 214.8-242.83-33.86-55.09 41.46L855 263a49.05 49.05 0 0 1 41.79 55.13l-54.33 389.59-120.87-159.05A59.86 59.86 0 0 0 638.06 537l-44 33.08 65.07 86.15L603.84 698l-79.57 60.1-54.92 41.48 34.17 4.76 270.73 37.76a97.55 97.55 0 0 0 109.88-79.6 22.37 22.37 0 0 0 .65-3.44l60.53-434.16c7.44-53.32-29.95-102.62-83.6-110.1z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1);
function Cs(e, t, n, s, l, a) {
  return u(), d("svg", {
    class: M(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, [
    ws,
    ge(","),
    ks
  ], 6);
}
const Ss = /* @__PURE__ */ ye(bs, [["render", Cs]]), Ts = F("image"), Ns = /* @__PURE__ */ m("path", {
  d: "M853.161 892.55H362.595l-209.433-.414a18.5 18.5 0 0 1-1.813-.092c-24.849-2.485-47.825-14.06-64.696-32.595-16.991-18.665-26.35-42.855-26.35-68.112V264.626c0-55.808 45.404-101.211 101.212-101.211H853.16c55.808 0 101.21 45.403 101.21 101.211v225.513c0 .275-.006.552-.018.826-.022.494-1.972 51.723 15.481 85.462 4.717 9.119 1.148 20.335-7.97 25.053-9.117 4.714-20.335 1.15-25.053-7.97-21.3-41.177-19.845-97.643-19.619-103.74V264.627c0-35.307-28.724-64.031-64.03-64.031H161.515c-35.308 0-64.032 28.724-64.032 64.031v526.711c0 32.755 24.321 59.958 56.718 63.62l208.431.412h490.53c35.306 0 64.03-28.725 64.03-64.032l-.382-93.677c-.105-1.75-1.587-19.548-19.55-42.5a9.548 9.548 0 0 1-.147-.19l-21.712-28.489-117.227-155.119c-.416-.55-38.995-50.852-86.272-45.534-38.335 4.315-75.955 45.164-108.79 118.132-17.615 39.141-34.65 68.269-52.082 89.046-17.607 20.986-35.68 33.52-55.251 38.317-43.423 10.638-81.05-18.995-120.887-50.373l-5.057-3.98c-46.555-36.578-68.75-28.224-158.33 59.602-7.33 7.188-19.1 7.071-26.289-.26-7.187-7.33-7.07-19.1.26-26.287 46.659-45.746 77.544-72.727 107.086-84.283 33.358-13.048 64.275-6.267 100.242 21.994l5.093 4.008c33.923 26.72 63.22 49.795 89.029 43.467 25.618-6.279 53.3-42.114 82.28-106.509 39.14-86.976 85.838-134.027 138.797-139.849 68.454-7.515 117.824 57.405 119.892 60.172l117.122 154.98 21.6 28.344c26.277 33.631 27.334 61.639 27.367 64.725l.001.128.384 94.06c.001 55.884-45.4 101.287-101.209 101.287z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ds = /* @__PURE__ */ m("path", {
  d: "M312.328 446.968c-42.325 0-76.759-34.434-76.759-76.76s34.434-76.759 76.76-76.759 76.759 34.435 76.759 76.76-34.434 76.759-76.76 76.759zm0-116.34c-21.824 0-39.579 17.756-39.579 39.58s17.755 39.58 39.58 39.58 39.579-17.756 39.579-39.58-17.755-39.58-39.58-39.58z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1);
function _s(e, t, n, s, l, a) {
  return u(), d("svg", {
    class: M(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, [
    Ns,
    ge(","),
    Ds
  ], 6);
}
const Is = /* @__PURE__ */ ye(Ts, [["render", _s]]);
F("issue");
F("JD");
F("jdl");
F("JIMI40");
const Bs = F("joy-smile"), Ms = /* @__PURE__ */ m("path", {
  d: "M2185.74 479.429a117.992 117.992 0 1 0-162.829-170.852c-284.772 271.204-732.314 271.204-1017.087 0A118.05 118.05 0 0 0 842.996 479.43c375.98 358.045 966.705 358.045 1342.744 0",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ls = [
  Ms
];
function Es(e, t, n, s, l, a) {
  return u(), d("svg", {
    class: M(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 3072 1024",
    role: "presentation"
  }, Ls, 6);
}
const Ps = /* @__PURE__ */ ye(Bs, [["render", Es]]), As = F("left"), zs = /* @__PURE__ */ m("path", {
  d: "M642.973 1005.542 321.912 587.098a123.278 123.278 0 0 1 0-150.17l321.06-418.443a47.182 47.182 0 0 1 74.83 57.422l-321.088 418.47a28.994 28.994 0 0 0 0 35.3l321.088 418.47a47.155 47.155 0 0 1-74.83 57.395",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Vs = [
  zs
];
function Os(e, t, n, s, l, a) {
  return u(), d("svg", {
    class: M(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Vs, 6);
}
const Qt = /* @__PURE__ */ ye(As, [["render", Os]]), Hs = F("link"), Rs = /* @__PURE__ */ m("path", {
  d: "M313.034 1004.045c-66.848 0-124.402-24.156-170.798-70.577l-40.854-40.829C54.96 846.218 28.966 783.097 30.83 714.411c3.702-66.85 31.56-131.808 79.819-180.12l137.4-137.373c14.86-14.861 40.855-14.861 55.69 0 14.86 14.861 16.725 38.99 0 55.69l-137.348 137.4a187.47 187.47 0 0 0-55.69 126.24c-1.864 46.422 14.835 89.115 46.396 120.675l40.855 40.855c31.56 31.56 74.253 48.286 120.674 46.421 46.421-1.838 92.843-22.291 126.24-55.69l137.4-137.4c14.862-14.86 40.856-14.86 55.69 0 14.862 14.862 14.862 40.856 0 55.69l-137.4 137.427c-48.285 48.259-113.27 76.117-180.118 79.82a5.645 5.645 0 0 0-7.405 0zm475.294-382.477c-11.133 0-18.563-3.702-27.832-12.997-14.86-14.861-14.86-40.855 0-55.69l115.082-115.108a187.47 187.47 0 0 0 55.716-126.267c1.838-46.395-14.861-89.114-46.421-120.674l-40.855-40.855c-64.985-64.959-176.364-61.257-246.915 9.294L478.266 278.108c-14.835 14.835-40.829 14.835-55.69 0-14.86-14.861-14.86-40.855 0-55.716l118.81-118.81C643.524 1.444 803.163-2.232 899.734 94.287l40.829 40.855c46.421 46.421 72.415 109.541 70.55 178.228-3.702 66.85-31.56 131.807-79.819 180.093L816.186 608.571c-7.43 7.43-18.563 11.133-27.858 12.997zm-332.327-1.864c-11.16 0-18.564-3.702-27.832-12.997-14.888-14.835-14.888-40.829 0-55.69l148.506-148.532c14.861-14.862 40.855-14.862 55.69 0 14.861 14.86 14.861 40.854 0 55.69L483.832 606.706c-7.404 7.43-18.563 11.159-27.831 12.997z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Fs = [
  Rs
];
function Ws(e, t, n, s, l, a) {
  return u(), d("svg", {
    class: M(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Fs, 6);
}
const Ys = /* @__PURE__ */ ye(Hs, [["render", Ws]]), js = F("loading"), Us = /* @__PURE__ */ m("path", {
  d: "M784 902.4c9.6 19.2 6.4 41.6-12.8 54.4-19.2 9.6-41.6 3.2-51.2-12.8-9.6-19.2-6.4-41.6 12.8-54.4 16-12.8 38.4-8 51.2 12.8zM550.4 984c0 22.4-16 38.4-38.4 38.4s-38.4-16-38.4-38.4v-24c0-22.4 19.2-38.4 41.6-38.4 19.2 0 35.2 16 38.4 38.4v25.6h-3.2zm-240-43.2c-9.6 19.2-35.2 25.6-54.4 16-19.2-9.6-25.6-35.2-16-51.2l28.8-51.2c9.6-19.2 35.2-25.6 54.4-16s25.6 35.2 12.8 54.4l-25.6 48zM121.6 784c-19.2 9.6-41.6 3.2-54.4-16-9.6-19.2-6.4-41.6 12.8-54.4l76.8-44.8c19.2-9.6 41.6-3.2 54.4 16 9.6 19.2 3.2 41.6-16 54.4L121.6 784zM38.4 552C16 552 0 536 0 513.6s16-38.4 38.4-38.4H160c22.4 0 38.4 19.2 38.4 38.4 0 22.4-16 38.4-38.4 38.4H38.4zm44.8-241.6c-19.2-9.6-25.6-35.2-16-51.2 9.6-19.2 35.2-25.6 54.4-16L256 320c19.2 9.6 25.6 35.2 16 54.4s-35.2 25.6-54.4 16l-134.4-80zm160-185.6 92.8 160c9.6 19.2 35.2 25.6 54.4 12.8s25.6-35.2 12.8-54.4l-92.8-160C297.6 64 275.2 60.8 256 70.4c-16 12.8-22.4 33.6-12.8 54.4zM473.6 40c0-22.4 16-38.4 38.4-38.4s38.4 19.2 38.4 38.4v184c0 22.4-19.2 38.4-38.4 38.4-22.4 0-38.4-19.2-38.4-38.4V40zm240 43.2c9.6-19.2 35.2-25.6 54.4-16 19.2 9.6 25.6 35.2 16 51.2l-92.8 160c-9.6 19.2-35.2 25.6-54.4 16-19.2-9.6-25.6-35.2-12.8-54.4l89.6-156.8zm188.8 160-160 92.8c-19.2 9.6-25.6 35.2-16 54.4 12.8 19.2 35.2 25.6 54.4 12.8l160-92.8c19.2-9.6 25.6-35.2 12.8-54.4-9.6-16-32-25.6-51.2-12.8zM985.6 472c22.4 0 38.4 16 38.4 38.4s-16 38.4-38.4 38.4H800c-22.4 0-38.4-19.2-38.4-38.4 0-22.4 19.2-38.4 38.4-38.4h185.6z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ks = [
  Us
];
function Xs(e, t, n, s, l, a) {
  return u(), d("svg", {
    class: M(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ks, 6);
}
const ot = /* @__PURE__ */ ye(js, [["render", Xs]]), qs = F("loading1"), Zs = /* @__PURE__ */ m("path", {
  d: "M520.665 64.564a29.244 29.244 0 0 0-7.071-.894c-16.211 0-29.35 13.14-29.35 29.35 0 15.83 12.538 28.696 28.223 29.293v.073c.375 0 .751-.014 1.127-.014 216.493 0 389.629 173.942 389.629 390.433 0 216.496-173.136 388.827-389.63 388.827s-389.63-172.333-389.63-388.829c0-.27.01-.536.01-.804h-.01c0-16.209-13.141-29.35-29.35-29.35s-29.35 13.139-29.35 29.35c0 .055.007.11.007.164-.001.214-.007.425-.007.64 0 247.609 200.722 448.331 448.33 448.331 247.607 0 448.33-200.722 448.33-448.33-.002-245.242-196.917-444.456-441.258-448.24z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Gs = [
  Zs
];
function Js(e, t, n, s, l, a) {
  return u(), d("svg", {
    class: M(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Gs, 6);
}
const Qs = /* @__PURE__ */ ye(qs, [["render", Js]]), xs = F("location"), ea = /* @__PURE__ */ m("path", {
  d: "M512 971.487C259.938 971.487 52.513 764.062 52.513 512S259.938 52.513 512 52.513 971.487 259.938 971.487 512 764.062 971.487 512 971.487zm0-840.205c-210.051 0-380.718 170.667-380.718 380.718S301.95 892.718 512 892.718 892.718 722.05 892.718 512 722.05 131.282 512 131.282zm0 577.641c-107.651 0-196.923-89.272-196.923-196.923S404.349 315.077 512 315.077 708.923 404.349 708.923 512 619.651 708.923 512 708.923zm0-315.077c-65.641 0-118.154 52.513-118.154 118.154S446.36 630.154 512 630.154 630.154 577.64 630.154 512 577.64 393.846 512 393.846zm0-210.051c-21.005 0-39.385-18.38-39.385-39.385V39.385C472.615 18.379 490.995 0 512 0s39.385 18.38 39.385 39.385V144.41c0 21.005-18.38 39.385-39.385 39.385zM512 1024c-21.005 0-39.385-18.38-39.385-39.385V879.59c0-21.005 18.38-39.385 39.385-39.385s39.385 18.38 39.385 39.385v105.025c0 21.006-18.38 39.385-39.385 39.385zm472.615-472.615H879.59c-21.005 0-39.385-18.38-39.385-39.385s18.38-39.385 39.385-39.385h105.025c21.006 0 39.385 18.38 39.385 39.385s-18.38 39.385-39.385 39.385zm-840.205 0H39.385C18.379 551.385 0 533.005 0 512s18.38-39.385 39.385-39.385H144.41c21.005 0 39.385 18.38 39.385 39.385s-18.38 39.385-39.385 39.385z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ta = [
  ea
];
function na(e, t, n, s, l, a) {
  return u(), d("svg", {
    class: M(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ta, 6);
}
const oa = /* @__PURE__ */ ye(xs, [["render", na]]), la = F("location2"), sa = /* @__PURE__ */ m("path", {
  d: "m530.286 1005.714-25.6-10.971c-36.572-14.629-58.515-25.6-73.143-36.572-102.4-84.114-164.572-135.314-193.829-171.885-43.885-51.2-76.8-91.429-106.057-142.629C95.086 577.83 76.8 504.686 76.8 431.543c0-117.029 43.886-226.743 128-307.2C285.257 43.886 394.971 0 512 0s226.743 43.886 310.857 128c84.114 80.457 128 190.171 128 307.2 0 73.143-18.286 146.286-54.857 212.114-25.6 43.886-58.514 91.429-106.057 142.629-29.257 32.914-87.772 84.114-197.486 171.886 0 0-7.314 7.314-18.286 10.971l-43.885 32.914zM497.37 874.057s3.658 3.657 14.629 7.314c3.657-3.657 7.314-3.657 10.971-7.314C621.714 797.257 683.886 742.4 705.83 716.8c40.228-47.543 69.485-87.771 91.428-128 25.6-47.543 40.229-102.4 40.229-157.257 0-87.772-32.915-168.229-95.086-230.4-58.514-58.514-142.629-91.429-230.4-91.429S340.114 142.63 277.943 204.8c-62.172 62.171-95.086 142.629-95.086 230.4 0 54.857 14.629 109.714 40.229 157.257 25.6 43.886 54.857 80.457 95.085 124.343 25.6 29.257 84.115 80.457 179.2 157.257zm18.286-248.686c-102.4 0-182.857-80.457-182.857-182.857s80.457-182.857 182.857-182.857 182.857 80.457 182.857 182.857-80.457 182.857-182.857 182.857zm0-256c-40.228 0-73.143 32.915-73.143 73.143s32.915 73.143 73.143 73.143 73.143-32.914 73.143-73.143-32.914-73.143-73.143-73.143z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), aa = [
  sa
];
function ra(e, t, n, s, l, a) {
  return u(), d("svg", {
    class: M(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, aa, 6);
}
const ia = /* @__PURE__ */ ye(la, [["render", ra]]);
F("locationg3");
F("lower");
F("marshalling");
const ua = F("mask-close"), ca = /* @__PURE__ */ m("path", {
  d: "M512 14.897C238.594 14.897 14.897 238.594 14.897 512S238.594 1009.103 512 1009.103 1009.103 785.406 1009.103 512 785.406 14.897 512 14.897zm207.126 646.234c16.57 16.57 16.57 41.425 0 57.995s-41.425 16.57-57.995 0L512 569.996l-149.13 149.13c-16.57 16.57-41.426 16.57-57.996 0s-16.57-41.425 0-57.995L454.004 512l-149.13-149.13c-16.57-16.57-16.57-41.426 0-57.996s41.425-16.57 57.995 0L512 454.004l149.13-149.13c16.57-16.57 41.426-16.57 57.996 0s16.57 41.425 0 57.995L569.996 512l149.13 149.13z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), da = [
  ca
];
function fa(e, t, n, s, l, a) {
  return u(), d("svg", {
    class: M(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, da, 6);
}
const pa = /* @__PURE__ */ ye(ua, [["render", fa]]);
F("message");
F("microphone");
const ma = F("minus"), ha = /* @__PURE__ */ m("path", {
  d: "M299.52 460.8h409.6c28.16 0 51.2 23.04 51.2 51.2s-23.04 51.2-51.2 51.2h-409.6c-28.16 0-51.2-23.04-51.2-51.2s23.04-51.2 51.2-51.2z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ga = [
  ha
];
function ya(e, t, n, s, l, a) {
  return u(), d("svg", {
    class: M(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ga, 6);
}
const va = /* @__PURE__ */ ye(ma, [["render", ya]]);
F("more-s");
const $a = F("more-x"), ba = /* @__PURE__ */ m("path", {
  d: "M937.115 428.218c-43.442 0-80.679 37.237-80.679 80.679s37.237 80.679 80.68 80.679c43.442 0 80.678-37.237 80.678-80.679s-34.133-80.679-80.679-80.679m-428.218-52.751c-74.473 0-133.43 58.957-133.43 133.43s58.957 133.43 133.43 133.43 133.43-58.957 133.43-133.43-58.957-133.43-133.43-133.43M83.782 428.218c-43.443 0-80.679 37.237-80.679 80.679s34.133 80.679 80.679 80.679 80.679-37.237 80.679-80.679-37.237-80.679-80.68-80.679",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), wa = [
  ba
];
function ka(e, t, n, s, l, a) {
  return u(), d("svg", {
    class: M(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, wa, 6);
}
const Ca = /* @__PURE__ */ ye($a, [["render", ka]]);
F("more");
F("my");
F("my2");
const Sa = F("notice"), Ta = /* @__PURE__ */ m("path", {
  d: "M940.873 819.2h-85.334V430.933c0-192-153.6-345.6-341.333-345.6s-341.333 153.6-341.333 345.6V819.2H87.539V430.933C87.54 192 279.54 0 514.206 0s426.667 192 426.667 430.933V819.2zM514.633 1024c-68.267 0-132.267-29.867-174.934-85.333-17.066-17.067-12.8-42.667 4.267-59.734 17.067-12.8 46.933-12.8 59.733 8.534 29.867 34.133 68.267 51.2 110.934 51.2s81.066-17.067 106.666-51.2c12.8-17.067 42.667-21.334 59.734-8.534 17.066 12.8 21.333 42.667 8.533 59.734C646.899 994.133 582.899 1024 514.633 1024zm469.333-162.133h-12.8c-294.4-89.6-618.667-89.6-913.067 0-21.333 4.266-46.933-8.534-55.466-29.867-8.534-21.333 4.266-46.933 29.866-51.2 311.467-93.867 652.8-89.6 964.267 0 21.333 8.533 34.133 29.867 29.867 51.2-8.534 21.333-25.6 29.867-42.667 29.867z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Na = [
  Ta
];
function Da(e, t, n, s, l, a) {
  return u(), d("svg", {
    class: M(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1027 1024",
    role: "presentation"
  }, Na, 6);
}
const _a = /* @__PURE__ */ ye(Sa, [["render", Da]]);
F("order");
F("people");
const Ia = F("photograph"), Ba = /* @__PURE__ */ m("path", {
  d: "M570.514 789.943c-119.954 0-219.428-99.474-219.428-219.429s99.474-219.428 219.428-219.428 219.429 99.474 219.429 219.428-99.474 219.429-219.429 219.429zm0-351.086c-73.143 0-131.657 58.514-131.657 131.657s58.514 131.657 131.657 131.657 131.657-58.514 131.657-131.657-58.514-131.657-131.657-131.657zM877.714 1024h-614.4C117.03 1024 0 906.971 0 760.686V380.343c0-146.286 117.029-263.314 263.314-263.314h32.183c0-2.926 2.926-8.778 2.926-11.703C315.977 43.886 374.49 0 438.857 0h263.314c70.218 0 128.732 49.737 143.36 117.029h32.183c146.286 0 263.315 117.028 263.315 263.314v380.343C1141.029 906.97 1024 1024 877.714 1024zm-614.4-819.2c-96.548 0-175.543 78.994-175.543 175.543v380.343c0 96.548 78.995 175.543 175.543 175.543h614.4c96.549 0 175.543-78.995 175.543-175.543V380.343c0-96.549-78.994-175.543-175.543-175.543H819.2c-32.183 0-58.514-26.331-58.514-58.514S734.354 87.77 702.17 87.77H438.857c-26.331 0-49.737 17.555-55.588 40.96-2.926 5.852-2.926 11.703-2.926 17.555 0 32.183-26.332 58.514-58.514 58.514h-58.515zm-87.771 160.914a73.143 73.143 0 1 0 146.286 0 73.143 73.143 0 1 0-146.286 0Z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ma = [
  Ba
];
function La(e, t, n, s, l, a) {
  return u(), d("svg", {
    class: M(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1141 1024",
    role: "presentation"
  }, Ma, 6);
}
const Ea = /* @__PURE__ */ ye(Ia, [["render", La]]);
F("play-circle-fill");
F("play-double-back");
F("play-double-forward");
F("play-start");
F("play-stop");
const Pa = F("plus"), Aa = /* @__PURE__ */ m("path", {
  d: "M345.6 460.8h409.6q51.2 0 51.2 51.2t-51.2 51.2H345.6q-51.2 0-51.2-51.2t51.2-51.2zM550.4 256q51.2 0 51.2 51.2v409.6q0 51.2-51.2 51.2t-51.2-51.2V307.2q0-51.2 51.2-51.2z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), za = [
  Aa
];
function Va(e, t, n, s, l, a) {
  return u(), d("svg", {
    class: M(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, za, 6);
}
const Oa = /* @__PURE__ */ ye(Pa, [["render", Va]]);
F("poweroff-circle-fill");
const Ha = F("rect-down"), Ra = /* @__PURE__ */ m("path", {
  d: "M515.072 778.24c-14.336 0-28.672-5.632-39.936-16.384L69.12 356.864c-22.016-22.016-22.016-57.856 0-79.872s57.856-22.016 79.872 0L515.584 642.56 880.64 275.968c22.016-22.016 57.856-22.016 79.872 0s22.016 57.856 0 79.872L555.008 762.368c-10.752 10.752-25.6 15.872-39.936 15.872z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Fa = [
  Ra
];
function Wa(e, t, n, s, l, a) {
  return u(), d("svg", {
    class: M(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Fa, 6);
}
const Ya = /* @__PURE__ */ ye(Ha, [["render", Wa]]);
F("rect-left");
F("rect-right");
const ja = F("rect-up"), Ua = /* @__PURE__ */ m("path", {
  d: "M920.576 778.24c-14.336 0-28.672-5.632-39.936-16.384L515.072 395.264 148.48 760.832c-22.016 22.016-57.856 22.016-79.872 0s-22.016-57.856 0-79.872l406.528-405.504c22.016-22.016 57.856-22.016 79.872 0l405.504 406.528c22.016 22.016 22.016 57.856 0 79.872-11.264 11.264-25.6 16.384-39.936 16.384z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ka = [
  Ua
];
function Xa(e, t, n, s, l, a) {
  return u(), d("svg", {
    class: M(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ka, 6);
}
const qa = /* @__PURE__ */ ye(ja, [["render", Xa]]);
F("refresh");
const Za = F("refresh2"), Ga = /* @__PURE__ */ m("path", {
  d: "M771.938 315.077h199.55L958.358 469.99 758.81 364.964c-13.128-7.877-18.38-23.63-10.502-36.759 2.625-7.877 13.128-13.128 23.63-13.128zm-535.63 393.846H44.636L57.764 554.01l191.672 105.026c13.128 7.877 18.38 23.63 10.502 36.759-5.25 7.877-15.753 13.128-23.63 13.128zM509.374 1024C257.313 1024 44.636 845.456 5.251 596.02 0 575.016 15.754 556.637 36.76 551.386c21.005-2.626 42.01 10.502 44.636 31.507 34.133 210.052 215.302 362.339 427.98 362.339 191.671 0 362.338-128.657 417.476-312.452 5.252-21.005 28.882-34.133 49.887-26.256 21.006 5.251 34.134 28.882 26.257 49.887C937.354 871.713 735.179 1024 509.375 1024zm467.364-551.385c-18.379 0-36.759-13.128-39.384-34.133C903.22 231.056 722.05 78.77 509.374 78.77c-191.671 0-362.338 128.657-414.85 312.452-5.252 21.005-28.883 34.133-49.888 26.256-21.005-5.251-34.133-28.882-26.257-49.887C81.395 152.287 283.57 0 509.374 0c252.062 0 464.739 178.544 504.123 427.98 2.626 21.005-10.502 42.01-31.507 44.635h-5.252z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ja = [
  Ga
];
function Qa(e, t, n, s, l, a) {
  return u(), d("svg", {
    class: M(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ja, 6);
}
const xa = /* @__PURE__ */ ye(Za, [["render", Qa]]), er = F("retweet"), tr = /* @__PURE__ */ m("path", {
  d: "M136 552h63.6c4.4 0 8-3.6 8-8V288.7h528.6v72.6c0 1.9.6 3.7 1.8 5.2 2.9 3.6 8.1 4.3 11.7 1.4L893 255.4c4.3-5 3.6-10.3 0-13.2L749.7 129.8c-1.5-1.2-3.3-1.8-5.2-1.8-4.6 0-8.4 3.8-8.4 8.4V209H199.7c-39.5 0-71.7 32.2-71.7 71.8V544c0 4.4 3.6 8 8 8zm752-80h-63.6c-4.4 0-8 3.6-8 8v255.3H287.8v-72.6c0-1.9-.6-3.7-1.8-5.2-2.9-3.6-8.1-4.3-11.7-1.4L131 768.6c-4.3 5-3.6 10.3 0 13.2l143.3 112.4c1.5 1.2 3.3 1.8 5.2 1.8 4.6 0 8.4-3.8 8.4-8.4V815h536.6c39.5 0 71.7-32.2 71.7-71.8V480c-.2-4.4-3.8-8-8.2-8z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), nr = [
  tr
];
function or(e, t, n, s, l, a) {
  return u(), d("svg", {
    class: M(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, nr, 6);
}
const lr = /* @__PURE__ */ ye(er, [["render", or]]), sr = F("right"), ar = /* @__PURE__ */ m("path", {
  d: "M381.262 1005.566c-16.132 21.51-45.708 24.198-67.217 8.066-21.51-16.132-24.198-45.708-8.066-67.217C413.526 806.604 518.384 666.792 625.932 529.67c8.066-10.755 8.066-24.198 0-34.953C518.384 354.906 413.526 215.094 305.979 77.972c-16.132-21.51-10.755-51.085 8.066-67.217C335.555-5.377 365.13 0 381.262 18.82c107.547 142.5 212.405 282.311 319.953 419.434 34.952 43.019 34.952 104.858 0 150.566-107.548 139.811-212.406 279.622-319.953 416.745",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), rr = [
  ar
];
function ir(e, t, n, s, l, a) {
  return u(), d("svg", {
    class: M(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, rr, 6);
}
const xt = /* @__PURE__ */ ye(sr, [["render", ir]]);
F("s-follow");
F("scan");
F("scan2");
F("screen-little");
F("search");
F("search2");
const ur = F("service"), cr = /* @__PURE__ */ m("path", {
  d: "M1024 657.723H905.846v-126.03c0-228.431-177.23-413.54-393.846-413.54s-393.846 185.109-393.846 413.54v126.03H0v-126.03C0 236.307 228.43 0 512 0s512 236.308 512 531.692v126.031zM196.923 866.462C86.646 866.462 0 779.815 0 669.538s86.646-196.923 196.923-196.923 196.923 86.647 196.923 196.923S307.2 866.462 196.923 866.462zm0-275.693c-43.323 0-78.77 35.446-78.77 78.77s35.447 78.769 78.77 78.769 78.77-35.446 78.77-78.77-35.447-78.769-78.77-78.769zm630.154 275.693c-110.277 0-196.923-86.647-196.923-196.924S716.8 472.615 827.077 472.615 1024 559.262 1024 669.538s-86.646 196.924-196.923 196.924zm0-275.693c-43.323 0-78.77 35.446-78.77 78.77s35.447 78.769 78.77 78.769 78.77-35.446 78.77-78.77-35.447-78.769-78.77-78.769zm-149.662 429.293c-23.63 0-47.261-15.754-55.138-43.324-7.877-31.507 7.877-63.015 39.385-74.83 102.4-31.508 189.046-102.4 236.307-196.923 15.754-27.57 51.2-39.385 78.77-23.631s39.384 51.2 23.63 78.77c-63.015 122.091-177.23 216.614-307.2 256-3.938 3.938-11.815 3.938-15.754 3.938z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), dr = [
  cr
];
function fr(e, t, n, s, l, a) {
  return u(), d("svg", {
    class: M(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, dr, 6);
}
const pr = /* @__PURE__ */ ye(ur, [["render", fr]]);
F("setting");
F("share-n");
F("share");
F("share1");
F("shop");
F("shop3");
const mr = F("star-fill-n"), hr = /* @__PURE__ */ m("path", {
  d: "M1047.135 361.244 722.87 312.89 577.802 22.756c-2.844-8.534-11.378-14.223-19.911-17.067-19.911-8.533-45.511-2.845-54.045 17.067L358.78 312.889 34.513 358.4c-8.533 0-17.067 5.689-22.755 11.378-17.067 17.066-14.223 42.666 0 56.889l233.244 227.555-54.044 321.422c-2.845 8.534 0 17.067 2.844 25.6 11.378 19.912 34.133 28.445 54.044 17.067L537.98 867.556l290.133 150.755c8.533 2.845 17.067 5.689 25.6 2.845 22.756-2.845 36.978-25.6 34.133-45.512l-54.044-321.422 233.244-227.555c5.69-5.69 11.378-14.223 11.378-22.756 5.69-19.911-8.533-39.822-31.289-42.667z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), gr = [
  hr
];
function yr(e, t, n, s, l, a) {
  return u(), d("svg", {
    class: M(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1081 1024",
    role: "presentation"
  }, gr, 6);
}
const vn = /* @__PURE__ */ ye(mr, [["render", yr]]);
F("star-fill");
F("star-fill1");
F("star-fill2");
F("star-n");
F("star");
F("star1");
F("star11");
F("star2");
const vr = F("success"), $r = /* @__PURE__ */ m("path", {
  d: "M762.311 391.396C655.36 466.489 566.613 552.96 491.52 659.91c-20.48 27.307-61.44 27.307-79.644-2.275-34.134-52.338-72.818-91.023-125.156-125.156-25.031-15.929-9.102-54.613 20.48-50.062 56.889 11.378 100.124 34.133 143.36 72.818 77.369-93.298 175.218-166.116 286.72-213.903 27.307-9.102 50.062 31.858 25.031 50.063M512 1024C229.831 1024 0 794.169 0 512S229.831 0 512 0s512 229.831 512 512-229.831 512-512 512zm0-955.733C266.24 68.267 68.267 266.24 68.267 512S266.24 955.733 512 955.733 955.733 757.76 955.733 512 757.76 68.267 512 68.267z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), br = [
  $r
];
function wr(e, t, n, s, l, a) {
  return u(), d("svg", {
    class: M(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, br, 6);
}
const kr = /* @__PURE__ */ ye(vr, [["render", wr]]), Cr = F("tips"), Sr = /* @__PURE__ */ m("path", {
  d: "M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512zm0-938.667c-234.667 0-426.667 192-426.667 426.667s192 426.667 426.667 426.667 426.667-192 426.667-426.667S746.667 85.333 512 85.333zM448 320a64 64 0 1 0 128 0 64 64 0 1 0-128 0Zm-17.067 149.333h51.2c12.8 0 21.334 8.534 21.334 21.334v8.533c0 12.8-8.534 21.333-21.334 21.333h-51.2c-12.8 0-25.6-12.8-25.6-25.6s12.8-25.6 25.6-25.6zm51.2 0H524.8c25.6 0 51.2 21.334 51.2 51.2v8.534L537.6 755.2c0 8.533-8.533 17.067-21.333 17.067H473.6c-25.6 0-51.2-21.334-51.2-51.2v-8.534L460.8 486.4c4.267-8.533 12.8-17.067 21.333-17.067zm8.534 251.734h76.8c12.8 0 25.6 12.8 25.6 25.6s-12.8 25.6-25.6 25.6h-76.8c-12.8 0-21.334-8.534-21.334-21.334v-12.8c4.267-12.8 12.8-17.066 21.334-17.066z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Tr = [
  Sr
];
function Nr(e, t, n, s, l, a) {
  return u(), d("svg", {
    class: M(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Tr, 6);
}
const Un = /* @__PURE__ */ ye(Cr, [["render", Nr]]), Dr = F("top"), _r = /* @__PURE__ */ m("path", {
  d: "M136.533 540.444c-11.377 0-25.6-5.688-34.133-17.066-14.222-19.911-11.378-45.511 8.533-59.734L477.867 179.2c19.91-14.222 45.51-11.378 59.733 8.533s11.378 45.511-8.533 59.734L162.133 531.91c-5.689 5.689-14.222 8.533-25.6 8.533zm745.245 0c-8.534 0-17.067-2.844-25.6-8.533L489.244 247.467c-19.91-14.223-22.755-42.667-8.533-59.734 14.222-19.91 42.667-22.755 59.733-8.533l366.934 284.444c19.91 14.223 22.755 42.667 8.533 59.734-8.533 11.378-19.911 17.066-34.133 17.066zM512 1024c-22.756 0-42.667-19.911-42.667-42.667v-768c0-22.755 19.911-42.666 42.667-42.666s42.667 19.91 42.667 42.666v768c0 22.756-19.911 42.667-42.667 42.667zM884.622 85.333h-742.4c-22.755 0-42.666-19.91-42.666-42.666S119.466 0 142.222 0h742.4c22.756 0 42.667 19.911 42.667 42.667s-19.911 42.666-42.667 42.666z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ir = [
  _r
];
function Br(e, t, n, s, l, a) {
  return u(), d("svg", {
    class: M(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ir, 6);
}
const Mr = /* @__PURE__ */ ye(Dr, [["render", Br]]), Lr = F("triangle-down"), Er = /* @__PURE__ */ m("path", {
  d: "m573.056 752 308.8-404.608A76.8 76.8 0 0 0 820.736 224H203.232a76.8 76.8 0 0 0-61.056 123.392L450.976 752a76.8 76.8 0 0 0 122.08 0z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Pr = [
  Er
];
function Ar(e, t, n, s, l, a) {
  return u(), d("svg", {
    class: M(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Pr, 6);
}
const zr = /* @__PURE__ */ ye(Lr, [["render", Ar]]), Vr = F("triangle-up"), Or = /* @__PURE__ */ m("path", {
  d: "m573.056 272 308.8 404.608A76.8 76.8 0 0 1 820.736 800H203.232a76.8 76.8 0 0 1-61.056-123.392L450.976 272a76.8 76.8 0 0 1 122.08 0z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Hr = [
  Or
];
function Rr(e, t, n, s, l, a) {
  return u(), d("svg", {
    class: M(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Hr, 6);
}
const Fr = /* @__PURE__ */ ye(Vr, [["render", Rr]]);
F("uploader");
F("voice");
const Wr = { class: "nut-button__wrap" }, Ue = /* @__PURE__ */ nt({
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
    const n = e, s = t, l = (r) => {
      !n.loading && !n.disabled && s("click", r);
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
    }), o = D(() => {
      let r = {};
      return n.color && (r = {
        color: n.plain ? n.color : "#fff",
        background: n.plain ? "#fff" : `border-box ${n.color}`
      }, n.color.includes("gradient") ? r.borderColor = "transparent" : r.borderColor = n.color), r;
    });
    return (r, i) => (u(), d("view", {
      class: M(a.value),
      style: A(o.value),
      onClick: l
    }, [
      m("view", Wr, [
        r.loading ? (u(), ee(Qe(ot), {
          key: 0,
          class: "nut-icon-loading"
        })) : T("", !0),
        r.$slots.icon && !r.loading ? I(r.$slots, "icon", { key: 1 }) : T("", !0),
        r.$slots.default ? (u(), d("view", {
          key: 2,
          class: M({ "nut-button__text": r.$slots.icon || r.loading })
        }, [
          I(r.$slots, "default")
        ], 2)) : T("", !0)
      ])
    ], 6));
  }
}), Kn = (e) => {
  const t = ue([]), n = ue([]);
  return {
    children: t,
    linkChildren: (l) => {
      Me(e, Z({
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
      }, l));
    }
  };
}, Xn = (e) => {
  const t = Be(e, null);
  if (t) {
    const n = Fe(), { link: s, unlink: l } = t;
    s(n), je(() => {
      l(n);
    });
  }
  return { parent: t };
}, en = (e) => {
  const t = e;
  return t.install = (n) => {
    t.name && n.component(t.name, t);
  }, t;
};
en(Ue);
const Yr = (e) => e.replace(/-./g, (t) => t[1].toUpperCase());
function Y(e) {
  return {
    componentName: "nut-" + e,
    create: function(n) {
      return n.name = "Nut" + Yr("-" + e), n.install = (s) => {
        s.component(n.name, n);
      }, nt(n);
    }
  };
}
const ut = (e, t) => e ? be(e, t) : "", tn = (e, t) => {
  let n = document.body;
  const s = e.teleport || "body";
  s != "body" && (Jo(s) ? n = document.querySelector(s) : n = e.teleport);
  const l = document.createElement("view"), a = t.name ? t.name + "-" : "", o = e.id || (/* @__PURE__ */ new Date()).getTime();
  l.id = a + o;
  let r = {};
  Lt(t.wrapper) ? r = t.wrapper(n, l) : r = t.wrapper;
  const i = Ro(r, e), p = t.components;
  return p && p.forEach((f) => {
    i.use(f);
  }), n.appendChild(l), {
    instance: i.mount(l),
    unmount: () => {
      i.unmount(), n.removeChild(l);
    }
  };
};
function nn() {
  return Fe().proxy.$router || null;
}
const Ie = (e) => {
  if (e !== void 0)
    return isNaN(Number(e)) ? String(e) : `${e}px`;
}, { componentName: jr, create: Ur } = Y("cell"), Kr = Ur({
  components: { Right: xt },
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
      const r = jr;
      return {
        [r]: !0,
        [`${r}--clickable`]: e.isLink || e.to,
        [`${r}--center`]: e.center,
        [`${r}--large`]: e.size === "large"
      };
    }), s = nn(), l = D(() => ({
      borderRadius: Ie(e.roundRadius)
    })), a = D(() => ({
      textAlign: e.descTextAlign
    }));
    return {
      handleClick: (r) => {
        t("click", r), e.to && s ? s[e.replace ? "replace" : "push"](e.to) : e.url && (e.replace ? location.replace(e.url) : location.href = e.url);
      },
      classes: n,
      baseStyle: l,
      descStyle: a
    };
  }
}), U = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, l] of t)
    n[s] = l;
  return n;
}, Xr = {
  key: 0,
  class: "nut-cell__icon"
}, qr = {
  key: 1,
  class: "nut-cell__title"
}, Zr = { class: "title" }, Gr = { class: "nut-cell__title-desc" };
function Jr(e, t, n, s, l, a) {
  const o = j("Right");
  return u(), d("view", {
    class: M(e.classes),
    style: A(e.baseStyle),
    onClick: t[0] || (t[0] = (...r) => e.handleClick && e.handleClick(...r))
  }, [
    I(e.$slots, "default", {}, () => [
      e.$slots.icon ? (u(), d("view", Xr, [
        I(e.$slots, "icon")
      ])) : T("", !0),
      e.title || e.subTitle || e.$slots.title ? (u(), d("view", qr, [
        e.subTitle ? (u(), d(x, { key: 0 }, [
          I(e.$slots, "title", {}, () => [
            m("view", Zr, L(e.title), 1)
          ]),
          m("view", Gr, L(e.subTitle), 1)
        ], 64)) : I(e.$slots, "title", { key: 1 }, () => [
          ge(L(e.title), 1)
        ])
      ])) : T("", !0),
      e.desc || e.$slots.desc ? (u(), d("view", {
        key: 2,
        class: M(["nut-cell__value", { "nut-cell__value--alone": !e.title && !e.subTitle && !e.$slots.title }]),
        style: A(e.descStyle)
      }, [
        I(e.$slots, "desc", {}, () => [
          ge(L(e.desc), 1)
        ])
      ], 6)) : T("", !0),
      I(e.$slots, "link", {}, () => [
        e.isLink || e.to ? (u(), ee(o, {
          key: 0,
          class: "nut-cell__link"
        })) : T("", !0)
      ])
    ])
  ], 6);
}
const qn = /* @__PURE__ */ U(Kr, [["render", Jr]]), { create: Qr } = Y("cell-group"), xr = Qr({
  props: {
    title: { type: String, default: "" },
    desc: { type: String, default: "" }
  }
}), ei = { class: "nut-cell-group" }, ti = {
  key: 1,
  class: "nut-cell-group__title"
}, ni = {
  key: 3,
  class: "nut-cell-group__desc"
}, oi = { class: "nut-cell-group__wrap" };
function li(e, t, n, s, l, a) {
  return u(), d("view", ei, [
    e.$slots.title ? I(e.$slots, "title", { key: 0 }) : e.title ? (u(), d("view", ti, L(e.title), 1)) : T("", !0),
    e.$slots.desc ? I(e.$slots, "desc", { key: 2 }) : e.desc ? (u(), d("view", ni, L(e.desc), 1)) : T("", !0),
    m("view", oi, [
      I(e.$slots, "default")
    ])
  ]);
}
const Zn = /* @__PURE__ */ U(xr, [["render", li]]);
let dt = 0;
const $n = "nut-overflow-hidden", si = (e) => [() => {
  if (e())
    try {
      !dt && gn.classList.add($n), dt++;
    } catch (s) {
      console.warn("[NutUI] <useLockScroll>", s);
    }
}, () => {
  if (e() && dt)
    try {
      dt--, !dt && gn.classList.remove($n);
    } catch (s) {
      console.warn("[NutUI] <unlock>", s);
    }
}], { componentName: ai, create: ri } = Y("overlay"), ii = ri({
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
    const [n, s] = si(() => e.lockScroll), l = D(() => ({
      [ai]: !0,
      [e.overlayClass]: !0
    })), a = D(() => Z({
      transitionDuration: `${e.duration}s`,
      zIndex: e.zIndex
    }, e.overlayStyle));
    return yt(() => {
      e.visible ? n() : s();
    }), { classes: l, style: a, onClick: (r) => {
      t("click", r), e.closeOnClickOverlay && t("update:visible", !1);
    } };
  }
});
function ui(e, t, n, s, l, a) {
  return u(), ee(Kt, { name: "overlay-fade" }, {
    default: te(() => [
      Ce(m("view", {
        class: M(e.classes),
        style: A(e.style),
        onClick: t[0] || (t[0] = De((...o) => e.onClick && e.onClick(...o), ["stop"]))
      }, [
        I(e.$slots, "default")
      ], 6), [
        [Ne, e.visible]
      ])
    ]),
    _: 3
  });
}
const kt = /* @__PURE__ */ U(ii, [["render", ui]]), Ct = {
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
}, { componentName: ci, create: di } = Y("popup"), Gn = 2e3;
let bn = Gn;
const fi = di({
  components: {
    NutOverlay: kt,
    Close: Et
  },
  props: Ct,
  emits: ["clickPop", "clickCloseIcon", "open", "close", "opened", "closed", "clickOverlay", "update:visible"],
  setup(e, { emit: t }) {
    const n = ue({
      zIndex: e.zIndex,
      showSlot: !0,
      closed: e.closeable
    }), s = D(() => ({
      [ci]: !0,
      round: e.round,
      [`nut-popup--${e.position}`]: !0,
      [`nut-popup--${e.position}--safebottom`]: e.position === "bottom" && e.safeAreaInsetBottom,
      [e.popClass]: !0
    })), l = D(() => Z({
      zIndex: n.zIndex,
      transitionDuration: `${e.duration}s`
    }, e.style)), a = D(() => e.transition ? e.transition : `nut-popup-slide-${e.position}`), o = () => {
      e.zIndex !== Gn && (bn = Number(e.zIndex)), t("update:visible", !0), n.zIndex = ++bn, e.destroyOnClose && (n.showSlot = !0), t("open");
    }, r = () => {
      t("update:visible", !1), t("close"), e.destroyOnClose && setTimeout(() => {
        n.showSlot = !1;
      }, +e.duration * 1e3);
    }, i = ($) => {
      t("clickPop", $);
    }, p = ($) => {
      $.stopPropagation(), t("clickCloseIcon", $), t("update:visible", !1);
    }, f = ($) => {
      t("clickOverlay", $), e.closeOnClickOverlay && t("update:visible", !1);
    }, v = ($) => {
      t("opened", $);
    }, y = ($) => {
      t("closed", $);
    };
    return Q(
      () => e.visible,
      () => {
        e.visible ? o() : r();
      }
    ), yt(() => {
      n.closed = e.closeable;
    }), ce(Z({}, he(n)), {
      popStyle: l,
      transitionName: a,
      classes: s,
      onClick: i,
      onClickCloseIcon: p,
      onClickOverlay: f,
      onOpened: v,
      onClosed: y
    });
  }
});
function pi(e, t, n, s, l, a) {
  const o = j("nut-overlay"), r = j("Close");
  return u(), ee(Fo, {
    to: e.teleport,
    disabled: !e.teleportDisable
  }, [
    e.overlay ? (u(), ee(o, vt({
      key: 0,
      visible: e.visible,
      "close-on-click-overlay": e.closeOnClickOverlay,
      "z-index": e.zIndex,
      "lock-scroll": e.lockScroll,
      duration: e.duration,
      "overlay-class": e.overlayClass,
      "overlay-style": e.overlayStyle
    }, e.$attrs, { onClick: e.onClickOverlay }), null, 16, ["visible", "close-on-click-overlay", "z-index", "lock-scroll", "duration", "overlay-class", "overlay-style", "onClick"])) : T("", !0),
    oe(Kt, {
      name: e.transitionName,
      onAfterEnter: e.onOpened,
      onAfterLeave: e.onClosed
    }, {
      default: te(() => [
        Ce(m("view", {
          class: M(e.classes),
          style: A(e.popStyle),
          onClick: t[1] || (t[1] = (...i) => e.onClick && e.onClick(...i))
        }, [
          e.showSlot ? I(e.$slots, "default", { key: 0 }) : T("", !0),
          e.closed ? (u(), d("view", {
            key: 1,
            class: M(["nut-popup__close-icon", "nut-popup__close-icon--" + e.closeIconPosition]),
            onClick: t[0] || (t[0] = (...i) => e.onClickCloseIcon && e.onClickCloseIcon(...i))
          }, [
            I(e.$slots, "close-icon", {}, () => [
              oe(r, { height: "12px" })
            ])
          ], 2)) : T("", !0)
        ], 6), [
          [Ne, e.visible]
        ])
      ]),
      _: 3
    }, 8, ["name", "onAfterEnter", "onAfterLeave"])
  ], 8, ["to", "disabled"]);
}
const Le = /* @__PURE__ */ U(fi, [["render", pi]]), mi = (e) => ({
  props: {
    theme: { type: String, default: "" },
    themeVars: { type: Object, default: {} },
    tag: { type: String, default: e }
  },
  setup(t, { slots: n }) {
    const s = (r) => {
      if (!/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(r))
        return "";
      r = r.toLowerCase(), r.length === 4 && (r = "#" + r.slice(1).split("").map((f) => f + f).join(""));
      const p = [];
      for (let f = 1; f < 7; f += 2)
        p.push(parseInt("0x" + r.slice(f, f + 2)));
      return p.join(",");
    }, l = (r) => (r = r.replace(r.charAt(0), r.charAt(0).toLocaleLowerCase()), r.replace(/([a-z])([A-Z])/g, (i, p, f) => p + "-" + f.toLowerCase())), a = (r) => {
      if (!r)
        return;
      const i = {}, p = r == null ? void 0 : r.primaryColor;
      if (p) {
        const f = s(p);
        i["--nut-address-region-tab-line"] = `linear-gradient(90deg, ${p} 0%, rgba(${f}, 0.15) 100%)`, i["--nut-tabs-horizontal-tab-line-color"] = `linear-gradient(90deg, ${p} 0%, rgba(${f}, 0.15) 100%)`, i["--nut-tabs-vertical-tab-line-color"] = `linear-gradient(180deg, ${p} 0%, rgba(${f}, 0.15) 100%)`;
      }
      return Object.keys(r).forEach((f) => {
        i[`--nut-${l(f)}`] = r[f];
      }), i;
    }, o = D(() => a(t.themeVars));
    return () => {
      var r;
      return be(
        t.tag,
        {
          class: `nut-theme-${t.theme}`,
          style: o.value
        },
        (r = n.default) == null ? void 0 : r.call(n)
      );
    };
  }
}), { create: hi } = Y("config-provider"), gi = hi(mi("div")), { componentName: yi, create: vi } = Y("image"), $i = vi({
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
    Image: Is,
    ImageError: Ss
  },
  emits: ["click", "load", "error"],
  setup(e, { emit: t }) {
    const n = ue({
      loading: !0,
      isError: !1,
      slotLoding: et().loading,
      slotError: et().error
    }), s = D(() => {
      const $ = yi;
      return {
        [$]: !0,
        [`${$}-round`]: e.round
      };
    }), l = z(null), a = z(!1), o = z(null), r = () => {
      const $ = {
        threshold: [0],
        rootMargin: "0px"
      };
      l.value = new IntersectionObserver((b) => {
        b.forEach((k) => {
          k.isIntersecting && (a.value = !0, l.value.disconnect());
        });
      }, $), o.value && l.value.observe(o.value);
    };
    ve(() => {
      e.lazyLoad && r();
    }), Xt(() => {
      l.value && l.value.disconnect();
    });
    const i = D(() => {
      let $ = {};
      return e.width && ($.width = Ie(e.width)), e.height && ($.height = Ie(e.height)), e.radius !== void 0 && e.radius !== null && ($.overflow = "hidden", $.borderRadius = Ie(e.radius)), $;
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
    const f = () => {
      n.isError = !1, n.loading = !1, t("load");
    }, v = () => {
      n.isError = !0, n.loading = !1, t("error");
    }, y = ($) => {
      t("click", $);
    };
    return ce(Z({}, he(n)), { imageClick: y, classes: s, styles: p, stylebox: i, error: v, load: f, show: a, imgRef: o });
  }
}), bi = ["src", "date-src", "alt"], wi = {
  key: 0,
  class: "nut-img-loading"
}, ki = {
  key: 1,
  class: "nut-img-error"
};
function Ci(e, t, n, s, l, a) {
  const o = j("Image"), r = j("ImageError");
  return u(), d("div", {
    class: M(e.classes),
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
    }, null, 44, bi),
    e.loading ? (u(), d("div", wi, [
      e.slotLoding ? T("", !0) : (u(), ee(o, {
        key: 0,
        width: "16px",
        height: "20px",
        name: "image"
      })),
      I(e.$slots, "loading")
    ])) : T("", !0),
    e.isError && !e.loading ? (u(), d("div", ki, [
      e.slotError ? T("", !0) : (u(), ee(r, {
        key: 0,
        width: "16px",
        height: "20px",
        name: "imageError"
      })),
      I(e.$slots, "error")
    ])) : T("", !0)
  ], 6);
}
const Si = /* @__PURE__ */ U($i, [["render", Ci]]), { create: Ti } = Y("layout"), Ni = Ti({}), Jn = Symbol("nut-layout"), { create: Di } = Y("col"), _i = Di({
  props: {
    span: {
      type: [String, Number],
      default: "24"
    },
    offset: {
      type: [String, Number],
      default: "0"
    }
  },
  emits: [],
  setup(e) {
    const t = "nut-col", n = Be(Jn), s = D(() => ({
      [t]: !0,
      [t + "-gutter"]: n,
      ["nut-col-" + e.span]: !0,
      ["nut-col-offset-" + e.offset]: !0
    })), l = D(() => ({
      paddingLeft: n / 2 + "px",
      paddingRight: n / 2 + "px"
    }));
    return {
      classes: s,
      style: l
    };
  }
});
function Ii(e, t, n, s, l, a) {
  return u(), d("view", {
    class: M(e.classes),
    style: A(e.style)
  }, [
    I(e.$slots, "default")
  ], 6);
}
const Bi = /* @__PURE__ */ U(_i, [["render", Ii]]), { create: Mi } = Y("row"), Li = Mi({
  props: {
    type: {
      type: String,
      default: ""
    },
    gutter: {
      type: [String, Number],
      default: ""
    },
    justify: {
      type: String,
      default: "start"
    },
    align: {
      type: String,
      default: "flex-start"
    },
    flexWrap: {
      type: String,
      default: "nowrap"
    }
  },
  setup(e) {
    const t = "nut-row";
    Me(Jn, e.gutter);
    const n = (l, a) => l ? a ? `nut-row-${l}-${a}` : "" : `nut-row-${a}`;
    return {
      classes: D(() => [
        t,
        n("", e.type),
        n("justify", e.justify),
        n("align", e.align),
        n("flex", e.flexWrap)
      ])
    };
  }
});
function Ei(e, t, n, s, l, a) {
  return u(), d("view", {
    class: M(e.classes)
  }, [
    I(e.$slots, "default")
  ], 2);
}
const Pi = /* @__PURE__ */ U(Li, [["render", Ei]]), Ai = /scroll|auto|overlay/i, Qn = window;
function zi(e) {
  return e.tagName !== "HTML" && e.tagName !== "BODY" && e.nodeType === 1;
}
function Wt(e, t = Qn) {
  let n = e;
  for (; n && n !== t && zi(n); ) {
    const { overflowY: s } = window.getComputedStyle(n);
    if (Ai.test(s))
      return n;
    n = n.parentNode;
  }
  return t;
}
function xn(e, t = Qn) {
  const n = z();
  return ve(() => {
    e.value && (n.value = Wt(e.value, t));
  }), n;
}
function Vi(e) {
  return e === window;
}
const Oe = (e) => {
  const t = Qe(e);
  if (Vi(t)) {
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
}, { create: Oi } = Y("sticky"), Hi = Oi({
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
    const n = z(), s = z(), l = ue({
      fixed: !1,
      height: 0,
      width: 0,
      transform: 0
    }), a = D(() => e.position === "top" ? Number(e.top) : Number(e.bottom)), o = D(() => l.fixed ? { height: `${l.height}px` } : {}), r = D(() => l.fixed ? {
      [e.position]: `${a.value}px`,
      height: `${l.height}px`,
      width: `${l.width}px`,
      transform: l.transform ? `translate3d(0, ${l.transform}px, 0)` : void 0,
      position: l.fixed ? "fixed" : void 0,
      zIndex: Number(e.zIndex)
    } : {}), i = () => {
      const p = e.container;
      if (!n.value && !p)
        return;
      const f = Oe(n), v = s.value, y = Oe(v), $ = Oe(p);
      l.height = f.height, l.width = f.width;
      const b = () => {
        let c = !1;
        if (e.position === "top")
          c = p ? a.value > f.top && $.bottom > 0 : a.value > f.top;
        else {
          const g = document.documentElement.clientHeight;
          c = p ? $.bottom > 0 && g - a.value - y.height > $.top : g - a.value < f.bottom;
        }
        return c;
      }, k = () => {
        if (p)
          if (e.position === "top") {
            const c = $.bottom - a.value - y.height;
            return c < 0 ? c : 0;
          } else {
            const c = document.documentElement.clientHeight, g = $.bottom - (c - a.value);
            return g < 0 ? g : 0;
          }
        return 0;
      };
      l.transform = k(), l.fixed = b();
    };
    return Q(
      () => l.fixed,
      (p) => {
        t("change", p);
      }
    ), ve(() => {
      i(), Wt(n.value).addEventListener("scroll", i, !0);
    }), je(() => {
      Wt(n.value).removeEventListener("scroll", i);
    }), { rootRef: n, rootStyle: o, stickyRef: s, stickyStyle: r };
  }
});
function Ri(e, t, n, s, l, a) {
  return u(), d("div", {
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
const eo = /* @__PURE__ */ U(Hi, [["render", Ri]]), to = /* @__PURE__ */ nt({
  name: "NutDivider",
  __name: "divider",
  props: {
    contentPosition: { default: "center" },
    dashed: { type: Boolean, default: !1 },
    hairline: { type: Boolean, default: !0 },
    direction: { default: "horizontal" }
  },
  setup(e) {
    const t = e, n = et(), s = D(() => {
      const l = "nut-divider";
      return t.direction === "horizontal" ? {
        [l]: !0,
        [`${l}-center`]: n.default,
        [`${l}-left`]: t.contentPosition === "left",
        [`${l}-right`]: t.contentPosition === "right",
        [`${l}-dashed`]: t.dashed,
        [`${l}-hairline`]: t.hairline
      } : {
        [l]: !0,
        [`${l}-vertical`]: t.direction === "vertical"
      };
    });
    return (l, a) => (u(), d("view", {
      class: M(s.value)
    }, [
      l.direction === "horizontal" ? I(l.$slots, "default", { key: 0 }) : T("", !0)
    ], 2));
  }
});
en(to);
function Fi(e, t) {
  const n = [], s = (l) => {
    Array.isArray(l) && l.forEach((a) => {
      var o;
      if (Yo(a)) {
        if (t) {
          if (a.type && a.type.name === t) {
            n.push(a);
            return;
          }
        } else
          n.push(a);
        (o = a.component) != null && o.subTree && s(a.component.subTree.children), a.children && s(a.children);
      }
    });
  };
  return s(e), n;
}
function Wi(e, t, n) {
  const s = Fi(e.subTree.children, n);
  t.sort((l, a) => s.indexOf(l.vnode) - s.indexOf(a.vnode));
}
function Yi(e, t) {
  const n = Wo([]), s = Fe(), l = (r) => {
    r.proxy && (n.push(mn(r)), Wi(s, n, t));
  }, a = (r) => {
    n.splice(n.indexOf(mn(r)), 1);
  }, o = Object.assign;
  return (r) => (Me(
    e,
    o(
      {
        add: l,
        remove: a,
        internalChildren: n
      },
      r
    )
  ), {
    internalChildren: n
  });
}
const { componentName: ji } = Y("grid"), no = Symbol("grid"), Ui = {
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
}, Ki = {
  props: Ui,
  setup(e, { slots: t }) {
    Yi(no, "NutGridItem")({ props: e });
    const n = D(() => {
      const l = ji;
      return {
        [l]: !0,
        [`${l}--border`]: e.border && !e.gutter
      };
    }), s = D(() => {
      const l = {};
      return e.gutter && (l.paddingLeft = Ie(e.gutter)), l;
    });
    return () => {
      var l;
      return be(
        "view",
        {
          class: n.value,
          style: s.value
        },
        (l = t.default) == null ? void 0 : l.call(t)
      );
    };
  }
}, { create: Xi } = Y("grid"), qi = Xi(Ki);
function Zi(e) {
  const t = Be(e, null);
  if (t) {
    const n = Fe(), { add: s, remove: l, internalChildren: a } = t;
    s(n), je(() => l(n));
    const o = D(() => a.indexOf(n));
    return {
      parent: t,
      index: o
    };
  }
  return {
    parent: null,
    index: z(-1)
  };
}
const { create: Gi, componentName: wn } = Y("grid-item"), Ji = Gi({
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
    const n = Zi(no);
    if (!n.parent)
      return {};
    const s = n.index, l = n.parent.props, a = D(() => ({
      [wn]: !0
    })), o = D(() => {
      const f = {
        flexBasis: `${100 / +l.columnNum}%`
      };
      return l.square ? f.paddingTop = `${100 / +l.columnNum}%` : l.gutter && (f.paddingRight = Ie(l.gutter), s.value >= +l.columnNum && (f.marginTop = Ie(l.gutter))), f;
    }), r = D(() => {
      const f = `${wn}__content`;
      return {
        [`${f}`]: !0,
        [`${f}--border`]: l.border,
        [`${f}--surround`]: l.border && l.gutter,
        [`${f}--center`]: l.center,
        [`${f}--square`]: l.square,
        [`${f}--reverse`]: l.reverse,
        [`${f}--${l.direction}`]: !!l.direction,
        [`${f}--clickable`]: l.clickable || e.to || e.url
      };
    }), i = nn();
    return {
      rootClass: a,
      rootStyle: o,
      contentClass: r,
      handleClick: (f) => {
        t("click", f), e.to && i ? i[e.replace ? "replace" : "push"](e.to) : e.url && (e.replace ? location.replace(e.url) : location.href = e.url);
      }
    };
  }
}), Qi = { class: "nut-grid-item__text" };
function xi(e, t, n, s, l, a) {
  return u(), d("view", {
    class: M(e.rootClass),
    style: A(e.rootStyle),
    onClick: t[0] || (t[0] = (...o) => e.handleClick && e.handleClick(...o))
  }, [
    m("view", {
      class: M(e.contentClass)
    }, [
      I(e.$slots, "default"),
      m("view", Qi, [
        e.text ? (u(), d(x, { key: 0 }, [
          ge(L(e.text), 1)
        ], 64)) : I(e.$slots, "text", { key: 1 })
      ])
    ], 2)
  ], 6);
}
const eu = /* @__PURE__ */ U(Ji, [["render", xi]]), { create: tu, componentName: tt } = Y("space"), nu = tu({
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
    const n = (f) => typeof f == "number" ? f + "px" : f, s = (f) => {
      const v = {};
      if (!e.gutter)
        return v;
      const y = `${n(Array.isArray(e.gutter) ? e.gutter[0] : e.gutter)}`, $ = `${n(Array.isArray(e.gutter) ? e.gutter[1] : e.gutter)}`;
      return f ? e.wrap ? { marginBottom: $ } : {} : (e.direction === "horizontal" && (v.marginRight = y), (e.direction === "vertical" || e.wrap) && (v.marginBottom = $), v);
    }, l = (f = []) => {
      const v = [];
      return f.forEach((y) => {
        Array.isArray(y) ? v.push(...y) : y.type === x ? v.push(...l(y.children)) : v.push(y);
      }), v.filter(
        (y) => {
          var $;
          return !(y && (y.type === jo || y.type === x && (($ = y.children) == null ? void 0 : $.length) === 0 || y.type === Uo && y.children.trim() === ""));
        }
      );
    }, { direction: a, wrap: o, fill: r, justify: i, align: p } = e;
    return () => {
      var y;
      const f = l((y = t.default) == null ? void 0 : y.call(t)), v = () => f.map(($, b) => be(
        "div",
        {
          class: `${tt}-item`,
          style: s(b === f.length - 1)
        },
        $
      ));
      return be(
        "div",
        {
          class: [
            tt,
            a && `${tt}-${a}`,
            p && `${tt}-align-${p}`,
            i && `${tt}-justify-${i}`,
            o && `${tt}-wrap`,
            r && `${tt}-fill`
          ]
        },
        v()
      );
    };
  }
}), { componentName: ou, create: lu } = Y("navbar"), su = lu({
  components: { Left: Qt },
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
    const { border: n, fixed: s, safeAreaInsetTop: l, placeholder: a } = he(e), o = z("auto"), r = z(), i = D(() => {
      const k = ou;
      return {
        [k]: !0,
        [`${k}--border`]: n.value,
        [`${k}--fixed`]: s.value,
        [`${k}--safe-area-inset-top`]: l.value
      };
    }), p = D(() => s.value && a.value ? {
      height: o.value
    } : {}), f = () => {
      if (r.value) {
        const k = r.value.getBoundingClientRect();
        o.value = `${k.height}px`;
      }
    };
    return ve(() => {
      s.value && a.value && Te(() => {
        f();
      });
    }), {
      navbarRef: r,
      rootStyle: p,
      classes: i,
      navHeight: o,
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
}), au = {
  key: 1,
  class: "nut-navbar__text"
}, ru = { class: "nut-navbar__title" }, iu = {
  key: 0,
  class: "nut-navbar__text"
};
function uu(e, t, n, s, l, a) {
  const o = j("Left");
  return u(), d("view", {
    class: "nut-navbar--placeholder",
    style: A(e.rootStyle)
  }, [
    m("view", {
      ref: "navbarRef",
      class: M(e.classes),
      style: A({ zIndex: e.zIndex })
    }, [
      m("view", {
        class: "nut-navbar__left",
        onClick: t[0] || (t[0] = (...r) => e.handleLeft && e.handleLeft(...r))
      }, [
        e.leftShow ? I(e.$slots, "left-show", { key: 0 }, () => [
          oe(o, {
            height: "12px",
            color: "#979797"
          })
        ]) : T("", !0),
        e.leftText ? (u(), d("view", au, L(e.leftText), 1)) : T("", !0),
        I(e.$slots, "left")
      ]),
      m("view", ru, [
        e.title ? (u(), d("view", {
          key: 0,
          class: "title",
          onClick: t[1] || (t[1] = (...r) => e.handleCenter && e.handleCenter(...r))
        }, L(e.title), 1)) : T("", !0),
        e.titleIcon ? (u(), d("view", {
          key: 1,
          class: "icon",
          onClick: t[3] || (t[3] = (...r) => e.handleCenterIcon && e.handleCenterIcon(...r))
        }, [
          I(e.$slots, "title-icon", {
            onClick: t[2] || (t[2] = (...r) => e.handleCenterIcon && e.handleCenterIcon(...r))
          })
        ])) : T("", !0),
        I(e.$slots, "content")
      ]),
      m("view", {
        class: "nut-navbar__right",
        onClick: t[4] || (t[4] = (...r) => e.handleRight && e.handleRight(...r))
      }, [
        e.desc ? (u(), d("view", iu, L(e.desc), 1)) : T("", !0),
        I(e.$slots, "right")
      ])
    ], 6)
  ], 4);
}
const cu = /* @__PURE__ */ U(su, [["render", uu]]), ke = (e = "") => (t, ...n) => {
  e = e.toLocaleLowerCase();
  const s = Hn.languages();
  let l = t;
  e && e.startsWith("nut") && (l = `${e.slice(3)}.${t}`);
  const a = Rt(s, l) || Rt(s, t);
  return Lt(a) ? a(...n) : a;
}, { create: du } = Y("fixed-nav"), fu = "NutFixedNav", pu = du({
  components: {
    NutOverlay: kt,
    Left: Qt
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
    const n = ke(fu), s = D(() => ({
      ["nut-fixed-nav"]: !0,
      active: e.visible,
      [e.type]: !0
    })), l = z(-1);
    return { classes: s, updateValue: (r = !e.visible) => {
      t("update:visible", r);
    }, selected: (r, i) => {
      t("selected", {
        item: r,
        event: i
      }), l.value = r.id;
    }, translate: n, current: l };
  }
}), mu = { class: "nut-fixed-nav__list" }, hu = ["onClick"], gu = ["src"], yu = { class: "span" }, vu = {
  key: 0,
  class: "b"
}, $u = { class: "text" };
function bu(e, t, n, s, l, a) {
  const o = j("nut-overlay"), r = j("Left");
  return u(), d("view", {
    class: M(e.classes),
    style: A(e.position)
  }, [
    e.overlay ? (u(), ee(o, {
      key: 0,
      visible: e.visible,
      "z-index": 200,
      onClick: t[0] || (t[0] = (i) => e.updateValue(!1))
    }, null, 8, ["visible"])) : T("", !0),
    I(e.$slots, "list", {}, () => [
      m("view", mu, [
        (u(!0), d(x, null, ie(e.navList, (i, p) => (u(), d("view", {
          key: i.id || p,
          class: M(["nut-fixed-nav__list-item", { active: i.id == e.current }]),
          onClick: (f) => e.selected(i, f)
        }, [
          m("img", {
            src: i.icon
          }, null, 8, gu),
          m("view", yu, L(i.text), 1),
          i.num ? (u(), d("view", vu, L(i.num), 1)) : T("", !0)
        ], 10, hu))), 128))
      ])
    ]),
    m("div", {
      class: "nut-fixed-nav__btn",
      onClick: t[1] || (t[1] = (i) => e.updateValue())
    }, [
      I(e.$slots, "btn", {}, () => [
        oe(r, { color: "#fff" }),
        m("view", $u, L(e.visible ? e.activeText || e.translate("activeText") : e.unActiveText || e.translate("unActiveText")), 1)
      ])
    ])
  ], 6);
}
const wu = /* @__PURE__ */ U(pu, [["render", bu]]), oo = Symbol("nut-menu"), { componentName: ku, create: Cu } = Y("menu"), Su = Cu({
  components: {
    RectUp: qa,
    RectDown: Ya
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
    const t = z(), n = z(0), s = z(!1), { children: l, linkChildren: a } = Kn(oo), o = D(() => l.some(($) => $.state.showWrapper)), r = D(() => ({
      [ku]: !0,
      "scroll-fixed": s.value
    })), i = () => {
      if (t.value) {
        const $ = Oe(t);
        e.direction === "down" ? n.value = $.bottom : n.value = window.innerHeight - $.top;
      }
    };
    a({ props: e, offset: n });
    const p = ($) => {
      l.forEach((b, k) => {
        k === $ ? (i(), b.toggle()) : b.state.showPopup && b.toggle(!1, { immediate: !0 });
      });
    }, f = ($) => Math.max(0, "scrollTop" in $ ? $.scrollTop : $.pageYOffset), v = () => {
      const { scrollFixed: $ } = e, b = f(window);
      s.value = b > (typeof $ == "boolean" ? 30 : Number($));
    }, y = ($) => {
      let b = "";
      const { titleClass: k } = e;
      return $ && (b += "active"), k && (b += ` ${k}`), b;
    };
    return ve(() => {
      const { scrollFixed: $ } = e;
      $ && window.addEventListener("scroll", v);
    }), je(() => {
      const { scrollFixed: $ } = e;
      $ && window.removeEventListener("scroll", v);
    }), {
      toggleItem: p,
      children: l,
      opened: o,
      classes: r,
      barRef: t,
      getClasses: y
    };
  }
}), Tu = ["onClick"], Nu = { class: "nut-menu__title-text" }, Du = { class: "nut-menu__title-icon" };
function _u(e, t, n, s, l, a) {
  const o = j("RectUp"), r = j("RectDown");
  return u(), d("view", {
    class: M(e.classes)
  }, [
    m("view", {
      ref: "barRef",
      class: M(["nut-menu__bar", { opened: e.opened }])
    }, [
      (u(!0), d(x, null, ie(e.children, (i, p) => (u(), d("view", {
        key: p,
        class: M(["nut-menu__item", { disabled: i.disabled, active: i.state.showPopup }]),
        style: A({ color: i.state.showPopup ? e.activeColor : "" }),
        onClick: (f) => !i.disabled && e.toggleItem(p)
      }, [
        m("view", {
          class: M(["nut-menu__title", e.getClasses(i.state.showPopup)])
        }, [
          m("view", Nu, L(i.renderTitle()), 1),
          m("span", Du, [
            I(e.$slots, "icon", {}, () => [
              e.direction === "up" ? (u(), ee(o, { key: 0 })) : (u(), ee(r, { key: 1 }))
            ])
          ])
        ], 2)
      ], 14, Tu))), 128))
    ], 2),
    I(e.$slots, "default")
  ], 2);
}
const Iu = /* @__PURE__ */ U(Su, [["render", _u]]), { create: Bu } = Y("menu-item"), Mu = Bu({
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
    NutPopup: Le,
    Check: Rn
  },
  emits: ["update:modelValue", "change", "open", "close"],
  setup(e, { emit: t }) {
    const n = ue({
      showPopup: !1,
      showWrapper: !1
    }), { parent: s } = Xn(oo), l = D(() => s.props.direction === "down" ? {
      top: s.offset.value + "px"
    } : {
      bottom: s.offset.value + "px"
    }), a = D(() => {
      const v = { height: s.offset.value + "px" };
      return s.props.direction === "down" ? ce(Z({}, v), { top: "0px" }) : ce(Z({}, v), { bottom: "0px" });
    });
    return {
      style: l,
      placeholderElementStyle: a,
      renderTitle: () => {
        var y;
        if (e.title)
          return e.title;
        const v = (y = e.options) == null ? void 0 : y.find(($) => $.value === e.modelValue);
        return v ? v.text : "";
      },
      state: n,
      parent: s,
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
}), Lu = { class: "nut-menu-item__content nut-menu-item__overflow" }, Eu = ["onClick"];
function Pu(e, t, n, s, l, a) {
  const o = j("Check"), r = j("nut-popup");
  return Ce((u(), d("view", {
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
    oe(r, vt(e.$attrs, {
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
      default: te(() => [
        m("view", Lu, [
          (u(!0), d(x, null, ie(e.options, (i, p) => (u(), d("view", {
            key: p,
            class: M(["nut-menu-item__option", [{ active: i.value === e.modelValue }]]),
            style: A({ "flex-basis": 100 / e.cols + "%" }),
            onClick: (f) => e.onClick(i)
          }, [
            i.value === e.modelValue ? (u(), d("span", {
              key: 0,
              class: M(["nut-menu-item__span", [i.value === e.modelValue ? e.activeTitleClass : e.inactiveTitleClass]])
            }, [
              I(e.$slots, "icon", {}, () => [
                oe(o, vt(e.$attrs, {
                  color: e.parent.props.activeColor
                }), null, 16, ["color"])
              ])
            ], 2)) : T("", !0),
            m("view", {
              class: M([i.value === e.modelValue ? e.activeTitleClass : e.inactiveTitleClass]),
              style: A({ color: i.value === e.modelValue ? e.parent.props.activeColor : "" })
            }, L(i.text), 7)
          ], 14, Eu))), 128)),
          I(e.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["visible", "position", "duration", "overlay", "lock-scroll", "close-on-click-overlay", "onClosed"])
  ], 4)), [
    [Ne, e.state.showWrapper]
  ]);
}
const Au = /* @__PURE__ */ U(Mu, [["render", Pu]]), lo = Symbol("nut-tabbar"), { create: zu } = Y("tabbar"), Vu = zu({
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
    const { bottom: n, placeholder: s } = he(e), l = z(), a = ue({
      val: e.modelValue,
      children: []
    }), o = z(null);
    function r(p, f) {
      t("update:modelValue", f), i.modelValue = f, t("tabSwitch", i.children[p], f);
    }
    const i = ue({
      children: a.children,
      modelValue: a.val,
      unactiveColor: e.unactiveColor,
      activeColor: e.activeColor,
      changeIndex: r
    });
    return Me(lo, i), Q(
      () => e.modelValue,
      (p) => {
        i.modelValue = p;
      }
    ), ve(() => {
      n.value && s.value && Te(() => {
        var p;
        l.value = (p = o == null ? void 0 : o.value) == null ? void 0 : p.getBoundingClientRect().height;
      });
    }), {
      changeIndex: r,
      nutTabbar: o,
      height: l
    };
  }
});
function Ou(e, t, n, s, l, a) {
  return u(), d("div", {
    class: M({ "nut-tabbar__placeholder": e.bottom && e.placeholder }),
    style: A({ height: e.height + "px" })
  }, [
    m("view", {
      ref: "nutTabbar",
      class: M(["nut-tabbar", { "nut-tabbar-bottom": e.bottom, "nut-tabbar-safebottom": e.safeAreaInsetBottom }])
    }, [
      I(e.$slots, "default")
    ], 2)
  ], 6);
}
const Hu = /* @__PURE__ */ U(Vu, [["render", Ou]]), { create: Ru } = Y("badge"), Fu = Ru({
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
    const t = ue({}), n = D(() => ({
      top: `${e.top}px`,
      right: `${e.right}px`,
      zIndex: e.zIndex,
      background: e.color
    })), s = D(() => {
      if (e.dot)
        return;
      const l = e.value, a = e.max;
      return typeof l == "number" && typeof a == "number" && a < l ? `${a}+` : l;
    });
    return {
      state: t,
      stl: n,
      content: s
    };
  }
}), Wu = { class: "nut-badge" }, Yu = ["textContent"];
function ju(e, t, n, s, l, a) {
  return u(), d("view", Wu, [
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
      class: M(["nut-badge__content nut-badge__content--sup", { "nut-badge__content--dot": e.dot, "nut-badge__content--bubble": !e.dot && e.bubble }]),
      style: A(e.stl),
      textContent: L(e.content)
    }, null, 14, Yu), [
      [Ne, !e.hidden && (e.content || e.dot)]
    ])
  ]);
}
const so = /* @__PURE__ */ U(Fu, [["render", ju]]), { create: Uu } = Y("tabbar-item"), Ku = Uu({
  components: { NutBadge: so },
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
    const n = (p) => t[p], s = Be(lo), l = ue({
      unactiveColor: s.unactiveColor,
      // 未选中的颜色
      activeColor: s.activeColor,
      // 选中的颜色
      index: 0
    }), a = nn();
    ((p) => {
      var f;
      if (p.proxy) {
        s.children.push(p.proxy);
        const v = s.children.indexOf(p.proxy);
        l.index = (f = e.name) != null ? f : v;
      }
    })(Fe());
    const r = D(() => l.index === s.modelValue);
    function i() {
      var y, $, b;
      let p = (y = e.name) != null ? y : l.index, f = null;
      e.name && (f = s.children.findIndex((k) => k.name == p)), s.changeIndex(f != null ? f : p, l.index);
      let v = f != null ? f : p;
      if (($ = s.children[v]) != null && $.href) {
        window.location.href = s.children[v].href;
        return;
      }
      if ((b = s.children[v]) != null && b.to) {
        let k = s.children[v].to;
        k && a ? a.push(k) : location.replace(k);
      }
    }
    return {
      state: l,
      active: r,
      renderIcon: ut,
      isHaveSlot: n,
      change: i
    };
  }
}), Xu = { class: "nut-tabbar-item_icon-box" }, qu = {
  key: 0,
  class: "nut-tabbar-item_icon-box_icon"
}, Zu = { key: 1 }, Gu = { key: 0 };
function Ju(e, t, n, s, l, a) {
  const o = j("nut-badge");
  return u(), d("div", {
    class: M(["nut-tabbar-item", { "nut-tabbar-item__icon--unactive": !e.active }]),
    style: A({
      color: e.active ? e.state.activeColor : e.state.unactiveColor
    }),
    onClick: t[0] || (t[0] = (r) => e.change())
  }, [
    oe(o, Ko(Xo(e.$attrs)), {
      default: te(() => [
        m("view", Xu, [
          e.isHaveSlot("icon") ? (u(), d("div", qu, [
            I(e.$slots, "icon", { active: e.active })
          ])) : T("", !0),
          e.icon && !e.isHaveSlot("icon") ? (u(), d("view", Zu, [
            (u(), ee(Ae(e.renderIcon(e.icon)), { class: "nut-popover-item-img" }))
          ])) : T("", !0),
          m("view", {
            class: M([
              "nut-tabbar-item_icon-box_nav-word",
              { "nut-tabbar-item_icon-box_big-word": !e.icon && !e.isHaveSlot("icon") }
            ])
          }, [
            I(e.$slots, "default", {}, () => [
              e.tabTitle ? (u(), d("view", Gu, L(e.tabTitle), 1)) : T("", !0)
            ])
          ], 2)
        ])
      ]),
      _: 3
    }, 16)
  ], 6);
}
const Qu = /* @__PURE__ */ U(Ku, [["render", Ju]]), { create: xu } = Y("elevator"), ec = xu({
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
    const s = z(null), l = ue({
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
    }), a = D(() => s.value.clientHeight), o = (c, g) => c.getAttribute("data-" + g), r = (c) => {
      Te(() => {
        !l.listGroup.includes(c) && c != null && l.listGroup.push(c);
      });
    }, i = () => {
      let c = 0;
      l.listHeight.push(c);
      for (let g = 0; g < l.listGroup.length; g++) {
        let h = l.listGroup[g];
        c += Math.floor(h.clientHeight), l.listHeight.push(c);
      }
    }, p = (c) => {
      !c && c !== 0 || (c < 0 && (c = 0), c > l.listHeight.length - 2 && (c = l.listHeight.length - 2), l.codeIndex = c, s.value.scrollTo(0, l.listHeight[c]));
    }, f = (c) => {
      l.scrollStart = !0;
      let g = o(c.target, "index"), h = c.touches[0];
      l.touchState.y1 = h.pageY, l.anchorIndex = +g, l.codeIndex = +g, p(+g);
    }, v = (c) => {
      let g = c.touches[0];
      l.touchState.y2 = g.pageY;
      let h = (l.touchState.y2 - l.touchState.y1) / e.spaceHeight | 0;
      l.codeIndex = l.anchorIndex + h, p(l.codeIndex);
    }, y = () => {
      l.scrollStart = !1;
    }, $ = (c, g) => {
      t("clickItem", c, g), l.currentData = g, l.currentKey = c;
    }, b = (c) => {
      t("clickIndex", c);
    }, k = (c) => {
      let h = c.target.scrollTop;
      const w = l.listHeight;
      l.scrollY = h;
      for (let B = 0; B < w.length - 1; B++) {
        let N = w[B], E = w[B + 1];
        if (l.scrollY >= N && l.scrollY < E) {
          l.currentIndex = B, l.diff = E - l.scrollY;
          return;
        }
      }
      l.currentIndex = w.length - 2;
    };
    return ve(() => {
      s.value && s.value.addEventListener("scroll", k);
    }), n({
      scrollTo: p
    }), Q(
      () => l.listGroup.length,
      () => {
        l.listHeight = [], Te(i);
      }
    ), Q(
      () => l.diff,
      (c) => {
        const g = l.listHeight;
        let h = c > 0 && c < e.titleHeight ? c - e.titleHeight : 0;
        l.scrollY + a.value === g[g.length - 1] && h !== 0 && (h = 0), l.fixedTop !== h && (l.fixedTop = h);
      }
    ), Q(
      () => l.currentIndex,
      (c) => {
        t("change", c);
      }
    ), ce(Z({}, he(l)), {
      clientHeight: a,
      setListGroup: r,
      listview: s,
      touchStart: f,
      touchMove: v,
      touchEnd: y,
      handleClickItem: $,
      handleClickIndex: b
    });
  }
}), tc = { class: "nut-elevator" }, nc = { class: "nut-elevator__list__item__code" }, oc = ["onClick"], lc = ["innerHTML"], sc = { class: "nut-elevator__list__fixed" }, ac = { class: "nut-elevator__list__fixed-title" }, rc = { class: "nut-elevator__bars__inner" }, ic = ["data-index", "onClick"];
function uc(e, t, n, s, l, a) {
  var o, r;
  return u(), d("view", tc, [
    m("view", {
      ref: "listview",
      class: "nut-elevator__list",
      style: A({ height: isNaN(+e.height) ? e.height : `${e.height}px` })
    }, [
      (u(!0), d(x, null, ie(e.indexList, (i) => (u(), d("view", {
        key: i[e.acceptKey],
        ref_for: !0,
        ref: e.setListGroup,
        class: "nut-elevator__list__item"
      }, [
        m("view", nc, L(i[e.acceptKey]), 1),
        (u(!0), d(x, null, ie(i.list, (p) => (u(), d("view", {
          key: p.id,
          class: M(["nut-elevator__list__item__name", {
            "nut-elevator__list__item__name--highcolor": e.currentData.id === p.id && e.currentKey === i[e.acceptKey]
          }]),
          onClick: (f) => e.handleClickItem(i[e.acceptKey], p)
        }, [
          e.$slots.default ? I(e.$slots, "default", {
            key: 1,
            item: p
          }) : (u(), d("span", {
            key: 0,
            innerHTML: p.name
          }, null, 8, lc))
        ], 10, oc))), 128))
      ]))), 128))
    ], 4),
    Ce(m("view", sc, [
      m("view", ac, L((r = (o = e.indexList) == null ? void 0 : o[e.currentIndex]) == null ? void 0 : r[e.acceptKey]), 1)
    ], 512), [
      [Ne, e.scrollY > 0 && e.isSticky]
    ]),
    e.indexList.length ? Ce((u(), d("view", {
      key: 0,
      class: "nut-elevator__code--current"
    }, L(e.indexList[e.codeIndex][e.acceptKey]), 513)), [
      [Ne, e.scrollStart]
    ]) : T("", !0),
    m("view", {
      class: "nut-elevator__bars",
      onTouchstart: t[0] || (t[0] = (...i) => e.touchStart && e.touchStart(...i)),
      onTouchmove: t[1] || (t[1] = De((...i) => e.touchMove && e.touchMove(...i), ["stop", "prevent"])),
      onTouchend: t[2] || (t[2] = (...i) => e.touchEnd && e.touchEnd(...i))
    }, [
      m("view", rc, [
        (u(!0), d(x, null, ie(e.indexList, (i, p) => (u(), d("view", {
          key: i[e.acceptKey],
          class: M(["nut-elevator__bars__inner__item", { active: i[e.acceptKey] === e.indexList[e.currentIndex][e.acceptKey] }]),
          "data-index": p,
          onClick: (f) => e.handleClickIndex(i[e.acceptKey])
        }, L(i[e.acceptKey]), 11, ic))), 128))
      ])
    ], 32)
  ]);
}
const ao = /* @__PURE__ */ U(ec, [["render", uc]]), { create: cc } = Y("pagination"), dc = "NutPagination", fc = cc({
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
    const n = ke(dc), { modelValue: s, mode: l, showPageSize: a, forceEllipses: o } = he(e), r = D(() => {
      const { pageCount: v, totalItems: y, itemsPerPage: $ } = he(e), b = +v.value || Math.ceil(+y.value / +$.value);
      return Math.max(1, b);
    }), i = (v, y) => {
      v > r.value || v < 1 || (v != s.value && t("update:modelValue", v), y && t("change", v));
    }, p = (v, y, $ = !1) => ({ number: v, text: y, active: $ }), f = D(() => {
      if (l.value == "simple")
        return;
      let v = [];
      const y = r.value, $ = +a.value;
      let b = 1, k = y;
      const c = y > $;
      c && (b = Math.max(s.value - Math.floor($ / 2), 1), k = b + +$ - 1, k > y && (k = y, b = k - +$ + 1));
      for (var g = b; g <= k; g++) {
        const h = p(g, g, s.value == g);
        v.push(h);
      }
      if (c && $ > 0 && o.value) {
        if (b > 1) {
          const h = p(b - 1, "...");
          v.unshift(h);
        }
        if (k < y) {
          const h = p(k + 1, "...");
          v.push(h);
        }
      }
      return v;
    });
    return yt(() => {
      i(s.value, !1);
    }), {
      modelValue: s,
      select: i,
      countRef: r,
      mode: l,
      pages: f,
      forceEllipses: o,
      translate: n
    };
  }
}), pc = { class: "nut-pagination" }, mc = {
  key: 0,
  class: "nut-pagination-contain"
}, hc = ["onClick"], gc = {
  key: 1,
  class: "nut-pagination-contain"
}, yc = { class: "nut-pagination-simple" };
function vc(e, t, n, s, l, a) {
  return u(), d("view", pc, [
    m("view", {
      class: M(["nut-pagination-prev", e.mode == "multi" ? "" : "simple-border", e.modelValue == 1 ? "disabled" : ""]),
      onClick: t[0] || (t[0] = (o) => e.select(e.modelValue - 1, !0))
    }, [
      I(e.$slots, "prev-text", {}, () => [
        ge(L(e.prevText || e.translate("prev")), 1)
      ])
    ], 2),
    e.mode == "multi" ? (u(), d("view", mc, [
      (u(!0), d(x, null, ie(e.pages, (o, r) => (u(), d("view", {
        key: r + "pagination",
        class: M(["nut-pagination-item", o.active ? "active" : ""]),
        onClick: (i) => e.select(o.number, !0)
      }, [
        I(e.$slots, "page", { item: o }, () => [
          ge(L(o.text), 1)
        ])
      ], 10, hc))), 128))
    ])) : T("", !0),
    e.mode == "simple" ? (u(), d("view", gc, [
      m("view", yc, L(e.modelValue) + "/" + L(e.countRef), 1)
    ])) : T("", !0),
    m("view", {
      class: M(["nut-pagination-next", e.modelValue >= e.countRef ? "disabled" : ""]),
      onClick: t[1] || (t[1] = (o) => e.select(e.modelValue + 1, !0))
    }, [
      I(e.$slots, "next-text", {}, () => [
        ge(L(e.nextText || e.translate("next")), 1)
      ])
    ], 2)
  ]);
}
const $c = /* @__PURE__ */ U(fc, [["render", vc]]), Dt = window, bc = typeof window != "undefined";
function wc() {
  return typeof Dt != "undefined" ? Dt.requestAnimationFrame || Dt.webkitRequestAnimationFrame || function(e) {
    Dt.setTimeout(e, 1e3 / 60);
  } : function(e) {
    setTimeout(e, 1e3 / 60);
  };
}
function kc(e) {
  bc ? cancelAnimationFrame(e) : clearTimeout(e);
}
const Ve = wc(), kn = 10;
function Cc(e, t) {
  return e > t && e > kn ? "horizontal" : t > e && t > kn ? "vertical" : "";
}
function Ze() {
  const e = z(0), t = z(0), n = z(0), s = z(0), l = z(0), a = z(0), o = z(0), r = z(0), i = z(""), p = () => i.value === "vertical", f = () => i.value === "horizontal", v = () => {
    l.value = 0, a.value = 0, o.value = 0, r.value = 0, i.value = "";
  };
  return {
    move: (b) => {
      const k = b.touches[0];
      l.value = k.clientX - e.value, a.value = k.clientY - t.value, n.value = k.clientX, s.value = k.clientY, o.value = Math.abs(l.value), r.value = Math.abs(a.value), i.value || (i.value = Cc(o.value, r.value));
    },
    start: (b) => {
      v(), e.value = b.touches[0].clientX, t.value = b.touches[0].clientY;
    },
    reset: v,
    startX: e,
    startY: t,
    moveX: n,
    moveY: s,
    deltaX: l,
    deltaY: a,
    offsetX: o,
    offsetY: r,
    direction: i,
    isVertical: p,
    isHorizontal: f
  };
}
const Sc = (e, t, n, s) => {
  const l = z(), a = z({ width: 0, height: 0 }), o = () => Ke(void 0, null, function* () {
    var y, $;
    n && n.getEnv() !== n.ENV_TYPE.WEB ? s(l).then(
      (b) => {
        a.value.width = b.width || 0, a.value.height = b.height || 0;
      },
      () => {
      }
    ) : (a.value.width = ((y = l.value) == null ? void 0 : y.clientWidth) || 0, a.value.height = (($ = l.value) == null ? void 0 : $.clientHeight) || 0);
  });
  ve(() => {
    setTimeout(() => {
      o();
    }, 100);
  });
  const r = ue({
    offset: 0,
    moving: !1
  }), i = Ze();
  let p = "";
  const f = (y, $) => {
    var k;
    let b = y;
    switch (e.direction == "horizontal" ? (p = y > 0 ? "right" : "left", b = Math.abs(b) / a.value.width * 100) : (p = $ > 0 ? "bottom" : "top", b = $, b = Math.abs(b) / ((k = a.value) == null ? void 0 : k.height) * 100), b > 85 && (b = 85), p) {
      case "left":
      case "top":
        t.isEnd() && (b = 0, r.moving = !1);
        break;
      case "right":
      case "bottom":
        b = -b, t.isBegin() && (b = 0, r.moving = !1);
        break;
    }
    r.offset = b;
  };
  return { touchMethods: {
    onTouchStart(y) {
      e.swipeable && i.start(y);
    },
    onTouchMove(y) {
      e.swipeable && (i.move(y), r.moving = !0, f(i.deltaX.value, i.deltaY.value), e.direction == "horizontal" && i.isHorizontal() && (y.preventDefault(), y.stopPropagation()), e.direction == "vertical" && i.isVertical() && (y.preventDefault(), y.stopPropagation()));
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
  }, touchState: r, tabsContentRef: l };
};
class Tc {
  constructor() {
    V(this, "title", "");
    V(this, "titleSlot");
    V(this, "paneKey", "");
    V(this, "disabled", !1);
  }
}
const { create: Nc } = Y("tabs"), Dc = Nc({
  components: { NutSticky: eo, JoySmile: Ps },
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
    let l;
    Me("tabsOpiton", {
      activeKey: D(() => e.modelValue || "0"),
      autoHeight: D(() => e.autoHeight),
      animatedTime: D(() => e.animatedTime)
    });
    const a = z([]), o = (S) => {
      S.forEach((P, O) => {
        var G, W, le, q, R, ne, X, ae, de;
        let K = P.type;
        if (K = K.name || K, K == "NutTabPane") {
          let pe = new Tc();
          if ((G = P.props) != null && G.title || (W = P.props) != null && W["pane-key"] || (le = P.props) != null && le.paneKey) {
            let we = Mt((q = P.props) == null ? void 0 : q["pane-key"]), Ee = we == "number" || we == "string" ? String((R = P.props) == null ? void 0 : R["pane-key"]) : null, H = Mt((ne = P.props) == null ? void 0 : ne.paneKey), J = H == "number" || H == "string" ? String((X = P.props) == null ? void 0 : X.paneKey) : null;
            pe.title = (ae = P.props) == null ? void 0 : ae.title, pe.paneKey = Ee || J || String(O), pe.disabled = (de = P.props) == null ? void 0 : de.disabled;
          }
          a.value.push(pe);
        } else {
          if (P.children == " ")
            return;
          o(P.children);
        }
      });
    }, r = z(e.modelValue || 0), i = (S) => {
      let P = a.value.findIndex((O) => O.paneKey == S);
      a.value.length == 0 || P == -1 || (r.value = P);
    }, p = D(() => e.titleScroll && e.direction === "vertical"), f = z(), v = z([]), y = (S) => {
      const P = f.value, O = v.value;
      if (!P || !O || !O[r.value])
        return;
      const K = O[r.value];
      let G = 0;
      e.direction === "vertical" ? G = K.offsetTop - P.offsetTop + 10 - (P.offsetHeight - K.offsetHeight) / 2 : G = K.offsetLeft - (P.offsetWidth - K.offsetWidth) / 2, $(P, G, S ? 0 : 0.3, e.direction);
    }, $ = (S, P, O, K) => {
      let G = 0;
      const W = K === "horizontal" ? S.scrollLeft : S.scrollTop, le = O === 0 ? 1 : Math.round(O * 1e3 / 16);
      function q() {
        K === "horizontal" ? S.scrollLeft += (P - W) / le : S.scrollTop += (P - W) / le, ++G < le && Ve(q);
      }
      q();
    }, b = (S = ((P) => (P = n.default) == null ? void 0 : P.call(n))()) => {
      a.value = [], S = S == null ? void 0 : S.filter((O) => typeof O.children != "string"), S && S.length && o(S), i(e.modelValue), Te(() => {
        y();
      });
    }, k = (S) => {
      l = S.fixed;
    };
    Q(
      () => {
        var S;
        return (S = n.default) == null ? void 0 : S.call(n);
      },
      (S) => {
        b(S);
      }
    );
    const c = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    Q(
      () => e.modelValue,
      (S) => {
        if (i(S), y(), l) {
          let P = Oe(s.value).top + c(), O = Math.ceil(P - e.top);
          window.scrollTo({
            top: O,
            behavior: "smooth"
          });
        }
      }
    ), ve(b), bt(b);
    const g = {
      isBegin: () => r.value == 0,
      isEnd: () => r.value == a.value.length - 1,
      next: () => {
        r.value += 1;
        const S = a.value[r.value].disabled;
        if (g.isEnd() && S) {
          g.prev();
          return;
        }
        if (S && r.value < a.value.length - 1) {
          g.next();
          return;
        }
        g.updateValue(a.value[r.value]);
      },
      prev: () => {
        r.value -= 1;
        const S = a.value[r.value].disabled;
        if (g.isBegin() && S) {
          g.next();
          return;
        }
        if (S && r.value > 0) {
          g.prev();
          return;
        }
        g.updateValue(a.value[r.value]);
      },
      updateValue: (S) => {
        t("update:modelValue", S.paneKey), t("change", S);
      },
      tabChange: (S, P) => {
        t("click", S), !(S.disabled || r.value == P) && (r.value = P, g.updateValue(S));
      },
      setTabItemRef: (S, P) => {
        v.value[P] = S;
      }
    }, { tabsContentRef: h, touchState: w, touchMethods: B } = Sc(e, g), N = D(() => {
      let S = r.value * 100;
      w.moving && (S += w.offset);
      let P = {
        transform: e.direction == "horizontal" ? `translate3d(-${S}%, 0, 0)` : `translate3d( 0,-${S}%, 0)`,
        transitionDuration: w.moving ? void 0 : `${e.animatedTime}ms`
      };
      return e.animatedTime == 0 && (P = {}), P;
    }), E = D(() => ({
      background: e.background
    })), C = D(() => ({
      color: e.type == "smile" ? e.color : "",
      background: e.type == "line" ? e.color : ""
    })), _ = D(() => {
      if (!e.titleGutter)
        return {};
      const S = Ie(e.titleGutter);
      return e.direction === "vertical" ? { marginTop: S, marginBottom: S } : { marginLeft: S, marginRight: S };
    });
    return Z(Z({
      navRef: f,
      tabsContentRef: h,
      titles: a,
      contentStyle: N,
      tabsNavStyle: E,
      titleStyle: _,
      tabsActiveStyle: C,
      container: s,
      getScrollY: p,
      onStickyScroll: k
    }, g), B);
  }
}), _c = ["onClick"], Ic = ["onClick"];
function Bc(e, t, n, s, l, a) {
  const o = j("JoySmile"), r = j("nut-sticky");
  return u(), d("view", {
    ref: "container",
    class: M(["nut-tabs", [e.direction]])
  }, [
    e.sticky ? (u(), ee(r, {
      key: 0,
      top: e.top,
      container: e.container,
      onScroll: e.onStickyScroll
    }, {
      default: te(() => [
        m("view", {
          ref: "navRef",
          class: M(["nut-tabs__titles", {
            "nut-tabs__titles-left": e.align === "left",
            [e.type]: e.type,
            scrollable: e.titleScroll,
            [e.size]: e.size
          }]),
          style: A(e.tabsNavStyle)
        }, [
          e.$slots.titles ? I(e.$slots, "titles", { key: 0 }) : (u(!0), d(x, { key: 1 }, ie(e.titles, (i, p) => (u(), d("view", {
            key: i.paneKey,
            class: M(["nut-tabs__titles-item", {
              "nut-tabs__titles-item-left": e.align === "left",
              active: i.paneKey == e.modelValue,
              disabled: i.disabled
            }]),
            style: A(e.titleStyle),
            onClick: (f) => e.tabChange(i, p)
          }, [
            e.type == "line" ? (u(), d("view", {
              key: 0,
              class: "nut-tabs__titles-item__line",
              style: A(e.tabsActiveStyle)
            }, null, 4)) : T("", !0),
            e.type == "smile" ? (u(), d("view", {
              key: 1,
              class: "nut-tabs__titles-item__smile",
              style: A(e.tabsActiveStyle)
            }, [
              oe(o, { color: e.color }, null, 8, ["color"])
            ], 4)) : T("", !0),
            m("view", {
              class: M(["nut-tabs__titles-item__text", { ellipsis: e.ellipsis }])
            }, L(i.title), 3)
          ], 14, _c))), 128))
        ], 6)
      ]),
      _: 3
    }, 8, ["top", "container", "onScroll"])) : (u(), d("view", {
      key: 1,
      ref: "navRef",
      class: M(["nut-tabs__titles", { "nut-tabs__titles-left": e.align === "left", [e.type]: e.type, scrollable: e.titleScroll, [e.size]: e.size }]),
      style: A(e.tabsNavStyle)
    }, [
      e.$slots.titles ? I(e.$slots, "titles", { key: 0 }) : (u(!0), d(x, { key: 1 }, ie(e.titles, (i, p) => (u(), d("view", {
        key: i.paneKey,
        ref_for: !0,
        ref: (f) => e.setTabItemRef(f, p),
        class: M(["nut-tabs__titles-item", {
          "nut-tabs__titles-item-left": e.align === "left",
          active: i.paneKey == e.modelValue,
          disabled: i.disabled
        }]),
        style: A(e.titleStyle),
        onClick: (f) => e.tabChange(i, p)
      }, [
        e.type == "line" ? (u(), d("view", {
          key: 0,
          class: "nut-tabs__titles-item__line",
          style: A(e.tabsActiveStyle)
        }, null, 4)) : T("", !0),
        e.type == "smile" ? (u(), d("view", {
          key: 1,
          class: "nut-tabs__titles-item__smile",
          style: A(e.tabsActiveStyle)
        }, [
          oe(o, { color: e.color }, null, 8, ["color"])
        ], 4)) : T("", !0),
        m("view", {
          class: M(["nut-tabs__titles-item__text", { ellipsis: e.ellipsis }])
        }, L(i.title), 3)
      ], 14, Ic))), 128))
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
const ro = /* @__PURE__ */ U(Dc, [["render", Bc]]), { create: Mc } = Y("tab-pane"), Lc = Mc({
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
    const t = Be("tabsOpiton"), n = D(() => ({
      display: t.animatedTime.value == 0 && e.paneKey != t.activeKey.value ? "none" : void 0
    }));
    return ce(Z({}, t), {
      paneStyle: n
    });
  }
});
function Ec(e, t, n, s, l, a) {
  return u(), d("view", {
    class: M(["nut-tab-pane", { inactive: e.paneKey != e.activeKey && e.autoHeight }]),
    style: A(e.paneStyle)
  }, [
    I(e.$slots, "default")
  ], 6);
}
const io = /* @__PURE__ */ U(Lc, [["render", Ec]]), { create: Pc } = Y("indicator"), Ac = Pc({
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
    }), padZero: qe };
  }
}), zc = {
  key: 0,
  class: "nut-indicator--number"
}, Vc = {
  key: 1,
  class: "nut-indicator--dot"
};
function Oc(e, t, n, s, l, a) {
  return u(), d("view", {
    class: M(e.classes)
  }, [
    (u(!0), d(x, null, ie(e.size, (o) => (u(), d(x, { key: o }, [
      o === e.current ? (u(), d("view", zc, L(e.fillZero && e.padZero(o) || o), 1)) : (u(), d("view", Vc))
    ], 64))), 128))
  ], 2);
}
const Hc = /* @__PURE__ */ U(Ac, [["render", Oc]]), { create: Rc } = Y("side-navbar"), Fc = Rc({
  props: {
    offset: {
      type: [String, Number],
      default: 15
    }
  },
  setup: (e) => {
    const t = z(null), n = ue({
      count: 1,
      observer: null
    }), s = (a, o = 1) => {
      var r;
      for (let i = 0; i < a.length; i++) {
        let p = a[i];
        (r = p == null ? void 0 : p.children) != null && r[0] && (p.children[0].style.paddingLeft = +e.offset * o + "px", p.className.includes("nut-side-navbar-item") || s(Array.from(p.children[1].children), ++n.count));
      }
      n.count--;
    }, l = () => {
      let a = t.value.childNodes;
      a != null && a.length && (a = Array.from(a).filter((o) => o.nodeType !== 3).map((o) => o), s(a));
    };
    return ve(() => {
      l(), n.observer = new MutationObserver(function() {
        n.count = 1, l();
      }), n.observer.observe(t.value, {
        attributes: !1,
        childList: !0,
        characterData: !1,
        subtree: !0
      });
    }), ce(Z({}, he(n)), {
      list: t
    });
  }
}), Wc = { class: "nut-side-navbar" }, Yc = { class: "nut-side-navbar__content" }, jc = {
  ref: "list",
  class: "nut-side-navbar__content__list"
};
function Uc(e, t, n, s, l, a) {
  return u(), d("view", Wc, [
    m("view", Yc, [
      m("view", jc, [
        I(e.$slots, "default")
      ], 512)
    ])
  ]);
}
const Kc = /* @__PURE__ */ U(Fc, [["render", Uc]]), { create: Xc } = Y("side-navbar-item"), qc = Xc({
  props: {
    title: {
      type: String,
      default: ""
    }
  }
}), Zc = { class: "nut-side-navbar-item" }, Gc = { class: "nut-side-navbar-item__title" };
function Jc(e, t, n, s, l, a) {
  return u(), d("view", Zc, [
    m("span", Gc, L(e.title), 1)
  ]);
}
const Qc = /* @__PURE__ */ U(qc, [["render", Jc]]), { create: xc } = Y("sub-side-navbar"), ed = xc({
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
  components: { ArrowDown2: rl, ArrowUp2: fl },
  emits: ["titleClick"],
  setup: (e, { emit: t }) => {
    const n = ue({
      direction: ""
    }), s = D(() => ({
      height: n.direction ? "0px" : "auto"
    })), l = () => {
      t("titleClick"), n.direction = n.direction ? "" : "up";
    };
    return ve(() => {
      n.direction = e.open ? "" : "up";
    }), ce(Z({}, he(n)), {
      style: s,
      handleClick: l
    });
  }
}), td = { class: "nut-sub-side-navbar" }, nd = { class: "nut-sub-side-navbar__title__text" }, od = { class: "nut-sub-side-navbar__title__icon" };
function ld(e, t, n, s, l, a) {
  const o = j("ArrowDown2"), r = j("ArrowUp2");
  return u(), d("view", td, [
    m("view", {
      class: "nut-sub-side-navbar__title",
      onClick: t[0] || (t[0] = De((...i) => e.handleClick && e.handleClick(...i), ["stop"]))
    }, [
      m("span", nd, L(e.title), 1),
      m("span", od, [
        e.direction ? (u(), ee(r, { key: 1 })) : (u(), ee(o, { key: 0 }))
      ])
    ]),
    Ce(m("view", {
      class: M(["nut-sub-side-navbar__list", e.direction ? "nutFadeOut" : "nutFadeIn"]),
      style: A(e.style)
    }, [
      I(e.$slots, "default")
    ], 6), [
      [Ne, !e.direction]
    ])
  ]);
}
const sd = /* @__PURE__ */ U(ed, [["render", ld]]), { componentName: ad, create: rd } = Y("range"), id = rd({
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
    const n = z(0);
    let s, l;
    const a = z(), o = z(), r = Ze(), i = D(() => {
      const { marks: W, max: le, min: q } = e;
      return Object.keys(W).map(parseFloat).sort((X, ae) => X - ae).filter((X) => X >= +q && X <= +le);
    }), p = D(() => Number(e.max) - Number(e.min)), f = D(() => {
      const W = ad;
      return {
        [W]: !0,
        [`${W}-disabled`]: e.disabled,
        [`${W}-vertical`]: e.vertical,
        [`${W}-show-number`]: !e.hiddenRange
      };
    }), v = D(() => {
      const W = "nut-range-container";
      return {
        [W]: !0,
        [`${W}-vertical`]: e.vertical
      };
    }), y = D(() => ({
      background: e.inactiveColor
    })), $ = D(() => ({
      borderColor: e.buttonColor
    })), b = (W) => !!e.range && Array.isArray(W), k = () => {
      const { modelValue: W, min: le } = e;
      return b(W) ? `${(W[1] - W[0]) * 100 / p.value}%` : `${(W - Number(le)) * 100 / p.value}%`;
    }, c = () => {
      const { modelValue: W, min: le } = e;
      return b(W) ? `${(W[0] - Number(le)) * 100 / p.value}%` : "0%";
    }, g = D(() => e.vertical ? {
      height: k(),
      top: c(),
      background: e.activeColor,
      transition: o.value ? "none" : void 0
    } : {
      width: k(),
      left: c(),
      background: e.activeColor,
      transition: o.value ? "none" : void 0
    }), h = (W) => {
      const le = "nut-range-mark", { modelValue: q, max: R, min: ne } = e;
      let X = Number(ne), ae = Number(R);
      if (e.range) {
        const [pe, we] = q;
        X = pe, ae = we;
      } else
        ae = q;
      let de = W <= +ae && W >= X;
      return {
        [`${le}-text`]: !0,
        [`${le}-text-active`]: de
      };
    }, w = (W) => {
      const { min: le, vertical: q } = e;
      let R = {
        left: `${(W - Number(le)) / p.value * 100}%`
      };
      return q && (R = {
        top: `${(W - Number(le)) / p.value * 100}%`
      }), R;
    }, B = (W) => {
      const { modelValue: le, max: q, min: R } = e;
      let ne = Number(R), X = Number(q);
      if (e.range) {
        const [pe, we] = le;
        ne = pe, X = we;
      }
      return {
        background: W <= X && W >= ne ? e.activeColor : e.inactiveColor
      };
    }, N = (W) => {
      const { min: le, max: q, step: R } = e;
      return W = Math.max(+le, Math.min(W, +q)), Math.round(W / +R) * +R;
    }, E = (W, le) => JSON.stringify(W) === JSON.stringify(le), C = (W) => W[0] > W[1] ? W.slice(0).reverse() : W, _ = (W, le) => {
      b(W) ? W = C(W).map(N) : W = N(W), E(W, e.modelValue) || t("update:modelValue", W), le && !E(W, s) && t("change", W);
    }, S = (W) => {
      if (e.disabled)
        return;
      const { min: le, modelValue: q } = e, R = Oe(a);
      let ne = W.clientX - R.left, X = R.width;
      e.vertical && (ne = W.clientY - R.top, X = R.height);
      const ae = Number(le) + ne / X * p.value;
      if (b(q)) {
        const [de, pe] = q, we = (de + pe) / 2;
        ae <= we ? _([ae, pe], !0) : _([de, ae], !0);
      } else
        _(ae, !0);
    }, P = (W) => {
      e.disabled || (r.start(W), l = e.modelValue, b(l) ? s = l.map(N) : s = N(l), o.value = "start");
    }, O = (W) => {
      if (e.disabled)
        return;
      o.value === "start" && t("dragStart"), r.move(W), o.value = "draging";
      const le = Oe(a);
      let q = r.deltaX.value, R = le.width, ne = q / R * p.value;
      e.vertical && (q = r.deltaY.value, R = le.height, ne = q / R * p.value), b(s) ? l[n.value] = s[n.value] + ne : l = s + ne, _(l);
    }, K = () => {
      e.disabled || (o.value === "draging" && (_(l, !0), t("dragEnd")), o.value = "");
    }, G = (W) => Gt(e.modelValue) && typeof W == "number" ? e.modelValue[W] : Number(e.modelValue);
    return ce(Z({
      root: a,
      classes: f,
      wrapperStyle: y,
      buttonStyle: $,
      onClick: S,
      onTouchStart: P,
      onTouchMove: O,
      onTouchEnd: K
    }, he(e)), {
      barStyle: g,
      curValue: G,
      buttonIndex: n,
      containerClasses: v,
      markClassName: h,
      marksStyle: w,
      marksList: i,
      tickStyle: B
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
function gd(e, t, n, s, l, a) {
  return u(), d("view", {
    class: M(e.containerClasses)
  }, [
    e.hiddenRange ? T("", !0) : (u(), d("view", ud, L(+e.min), 1)),
    m("view", {
      ref: "root",
      style: A(e.wrapperStyle),
      class: M(e.classes),
      onClick: t[9] || (t[9] = De((...o) => e.onClick && e.onClick(...o), ["stop"]))
    }, [
      e.marksList.length > 0 ? (u(), d("view", cd, [
        (u(!0), d(x, null, ie(e.marksList, (o) => (u(), d("span", {
          key: o,
          class: M(e.markClassName(o)),
          style: A(e.marksStyle(o))
        }, [
          ge(L(o) + " ", 1),
          m("span", {
            class: "nut-range-tick",
            style: A(e.tickStyle(o))
          }, null, 4)
        ], 6))), 128))
      ])) : T("", !0),
      m("view", {
        class: "nut-range-bar",
        style: A(e.barStyle)
      }, [
        e.range ? (u(), d(x, { key: 0 }, ie([0, 1], (o) => m("view", {
          key: o,
          role: "slider",
          class: M({
            "nut-range-button-wrapper-left": o == 0,
            "nut-range-button-wrapper-right": o == 1
          }),
          tabindex: e.disabled ? -1 : 0,
          "aria-valuemin": +e.min,
          "aria-valuenow": e.curValue(o),
          "aria-valuemax": +e.max,
          "aria-orientation": "horizontal",
          onTouchstart: De(
            (r) => {
              typeof o == "number" && (e.buttonIndex = o), e.onTouchStart(r);
            },
            ["stop", "prevent"]
          ),
          onTouchmove: t[0] || (t[0] = De((...r) => e.onTouchMove && e.onTouchMove(...r), ["stop", "prevent"])),
          onTouchend: t[1] || (t[1] = De((...r) => e.onTouchEnd && e.onTouchEnd(...r), ["stop", "prevent"])),
          onTouchcancel: t[2] || (t[2] = De((...r) => e.onTouchEnd && e.onTouchEnd(...r), ["stop", "prevent"])),
          onClick: t[3] || (t[3] = (r) => r.stopPropagation())
        }, [
          e.$slots.button ? I(e.$slots, "button", { key: 0 }) : (u(), d("view", {
            key: 1,
            class: "nut-range-button",
            style: A(e.buttonStyle)
          }, [
            e.hiddenTag ? T("", !0) : (u(), d("view", fd, L(e.curValue(o)), 1))
          ], 4))
        ], 42, dd)), 64)) : (u(), d("view", {
          key: 1,
          role: "slider",
          class: "nut-range-button-wrapper",
          tabindex: e.disabled ? -1 : 0,
          "aria-valuemin": +e.min,
          "aria-valuenow": e.curValue(),
          "aria-valuemax": +e.max,
          "aria-orientation": "horizontal",
          onTouchstart: t[4] || (t[4] = De(
            (o) => {
              e.onTouchStart(o);
            },
            ["stop", "prevent"]
          )),
          onTouchmove: t[5] || (t[5] = De((...o) => e.onTouchMove && e.onTouchMove(...o), ["stop", "prevent"])),
          onTouchend: t[6] || (t[6] = De((...o) => e.onTouchEnd && e.onTouchEnd(...o), ["stop", "prevent"])),
          onTouchcancel: t[7] || (t[7] = De((...o) => e.onTouchEnd && e.onTouchEnd(...o), ["stop", "prevent"])),
          onClick: t[8] || (t[8] = (o) => o.stopPropagation())
        }, [
          e.$slots.button ? I(e.$slots, "button", { key: 0 }) : (u(), d("view", {
            key: 1,
            class: "nut-range-button",
            style: A(e.buttonStyle)
          }, [
            e.hiddenTag ? T("", !0) : (u(), d("view", md, L(e.curValue()), 1))
          ], 4))
        ], 40, pd))
      ], 4)
    ], 6),
    e.hiddenRange ? T("", !0) : (u(), d("view", hd, L(+e.max), 1))
  ], 2);
}
const uo = /* @__PURE__ */ U(id, [["render", gd]]), { create: yd } = Y("searchbar"), vd = "NutSearchbar", $d = yd({
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
      default: () => Jt
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
    const n = ke(vd), s = ue({
      active: !1
    }), l = D(() => ({
      background: e.background
    })), a = D(() => ({
      background: e.inputBackground
    })), o = (g) => {
      let w = g.target.value;
      e.maxLength && w.length > Number(e.maxLength) && (w = w.slice(0, Number(e.maxLength))), t("update:modelValue", w, g), t("change", w, g);
    }, r = z({}), i = (g) => {
      let w = g.target.value;
      s.active = !0, r.value = e.focusStyle, t("focus", w, g);
    }, p = (g) => {
      setTimeout(() => {
        s.active = !1;
      }, 0);
      let w = g.target.value;
      e.maxLength && w.length > Number(e.maxLength) && (w = w.slice(0, Number(e.maxLength))), r.value = {}, t("blur", w, g);
    }, f = (g) => {
      t("update:modelValue", "", g), t("change", "", g), t("clear", "");
    }, v = () => {
      t("search", e.modelValue);
    }, y = (g) => {
      t("clickInput", g);
    }, $ = (g) => {
      t("clickLeftIcon", e.modelValue, g);
    }, b = (g) => {
      t("clickRightIcon", e.modelValue, g);
    }, k = D(() => ({
      textAlign: e.inputAlign
    })), c = z(null);
    return ve(() => {
      e.autofocus && c.value.focus();
    }), ce(Z({
      renderIcon: ut,
      inputsearch: c
    }, he(s)), {
      valueChange: o,
      valueFocus: i,
      valueBlur: p,
      handleClear: f,
      handleSubmit: v,
      searchbarStyle: l,
      inputSearchbarStyle: a,
      focusCss: r,
      translate: n,
      clickInput: y,
      leftIconClick: $,
      rightIconClick: b,
      styleSearchbar: k
    });
  }
}), bd = {
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
function Td(e, t, n, s, l, a) {
  return u(), d("view", {
    class: M(["nut-searchbar", { "safe-area-inset-bottom": e.safeAreaInsetBottom }]),
    style: A(e.searchbarStyle)
  }, [
    e.label ? (u(), d("span", bd, L(e.label), 1)) : T("", !0),
    e.$slots.leftout ? (u(), d("view", wd, [
      I(e.$slots, "leftout")
    ])) : T("", !0),
    m("view", {
      class: M(["nut-searchbar__search-input", e.shape]),
      style: A(Z(Z({}, e.inputSearchbarStyle), e.focusCss))
    }, [
      e.$slots.leftin ? (u(), d("view", {
        key: 0,
        class: "nut-searchbar__search-icon nut-searchbar__iptleft-search-icon",
        onClick: t[0] || (t[0] = (...o) => e.leftIconClick && e.leftIconClick(...o))
      }, [
        I(e.$slots, "leftin")
      ])) : T("", !0),
      m("view", {
        class: M(["nut-searchbar__input-inner", e.$slots.rightin && "nut-searchbar__input-inner-absolute"])
      }, [
        m("form", {
          class: "nut-searchbar__input-form",
          action: "#",
          onSubmit: t[5] || (t[5] = De((...o) => e.handleSubmit && e.handleSubmit(...o), ["prevent"]))
        }, [
          m("input", {
            ref: "inputsearch",
            class: M(["nut-searchbar__input-bar", e.clearable && "nut-searchbar__input-bar_clear"]),
            type: e.inputType,
            maxlength: e.maxLength,
            placeholder: e.placeholder || e.translate("placeholder"),
            value: e.modelValue,
            disabled: e.disabled,
            readonly: e.readonly,
            style: A(e.styleSearchbar),
            onClick: t[1] || (t[1] = (...o) => e.clickInput && e.clickInput(...o)),
            onInput: t[2] || (t[2] = (...o) => e.valueChange && e.valueChange(...o)),
            onFocus: t[3] || (t[3] = (...o) => e.valueFocus && e.valueFocus(...o)),
            onBlur: t[4] || (t[4] = (...o) => e.valueBlur && e.valueBlur(...o))
          }, null, 46, kd)
        ], 32)
      ], 2),
      m("view", {
        class: M(["nut-searchbar__input-inner-icon", e.$slots.rightin && "nut-searchbar__input-inner-icon-absolute"])
      }, [
        e.clearable ? Ce((u(), d("view", {
          key: 0,
          class: "nut-searchbar__search-icon nut-searchbar__input-clear",
          onClick: t[6] || (t[6] = (...o) => e.handleClear && e.handleClear(...o))
        }, [
          e.$slots["clear-icon"] ? I(e.$slots, "clear-icon", { key: 0 }) : (u(), ee(Ae(e.renderIcon(e.clearIcon)), { key: 1 }))
        ], 512)), [
          [Ne, String(e.modelValue).length > 0]
        ]) : T("", !0),
        e.$slots.rightin ? (u(), d("view", Cd, [
          I(e.$slots, "rightin")
        ])) : T("", !0)
      ], 2)
    ], 6),
    e.$slots.rightout ? (u(), d("view", Sd, [
      I(e.$slots, "rightout")
    ])) : T("", !0)
  ], 6);
}
const Nd = /* @__PURE__ */ U($d, [["render", Td]]), It = (e, t, n) => e.map((s) => {
  const { value: l = "value", text: a = "text", children: o = "children" } = n, y = s, { [l]: r, [a]: i, [o]: p } = y, f = Ot(y, [Tt(l), Tt(a), Tt(o)]), v = ce(Z({
    loading: !1
  }, f), {
    level: t ? (t && t.level || 0) + 1 : 0,
    value: r,
    text: i,
    children: p,
    _parent: t
  });
  return v.children && v.children.length && (v.children = It(v.children, v, n)), v;
}), co = (e, t) => {
  let n = 0, s;
  for (; (s = e[n++]) && t(s) !== !0; )
    s.children && s.children.length && co(s.children, t);
}, Dd = {
  topId: null,
  idKey: "id",
  pidKey: "pid",
  sortKey: ""
}, _d = (e, t) => {
  const n = Z(Z({}, Dd), t || {}), { topId: s, idKey: l, pidKey: a, sortKey: o } = n;
  let r = [], i = {};
  return e.forEach((p) => {
    p = Z({}, p);
    const { [l]: f, [a]: v } = p, y = i[v] = i[v] || [];
    !r.length && v === s && (r = y), y.push(p), p.children = i[f] || (i[f] = []);
  }), o && Object.keys(i).forEach((p) => {
    i[p].length > 1 && i[p].sort((f, v) => f[o] - v[o]);
  }), i = null, r;
};
class Cn {
  constructor(t, n) {
    V(this, "nodes");
    V(this, "config");
    this.config = Z({
      value: "value",
      text: "text",
      children: "children"
    }, n || {}), this.nodes = It(t, null, this.config);
  }
  updateChildren(t, n) {
    n ? n.children = It(t, n, this.config) : this.nodes = It(t, null, this.config);
  }
  // for test
  getNodeByValue(t) {
    let n;
    return co(this.nodes, (s) => {
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
      const l = s.find((a) => a.value === t[a.level]);
      if (!l)
        break;
      n.push(l), s = l.children;
    }
    return n;
  }
  isLeaf(t, n) {
    const { leaf: s, children: l } = t, a = Array.isArray(l) && !!l.length;
    return s || !a && !n;
  }
  hasChildren(t, n) {
    if (this.isLeaf(t, n))
      return !1;
    const { children: l } = t;
    return Array.isArray(l) && !!l.length;
  }
}
const { create: Id } = Y("cascader-item"), Bd = Id({
  components: {
    Loading: ot,
    Checklist: Ol,
    NutTabs: ro,
    NutTabPane: io
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
    })), l = z(0), a = z(!1), o = z(e.modelValue), r = z(new Cn([], {})), i = z([]), p = D(() => s.value.lazy && !!s.value.lazyLoad), f = /* @__PURE__ */ new Map();
    let v;
    const y = () => Ke(this, null, function* () {
      f.clear(), i.value = [], l.value = 0, a.value = !1, v = null;
      let { options: h } = e;
      s.value.convertConfig && (h = _d(h, s.value.convertConfig)), r.value = new Cn(h, {
        value: s.value.valueKey,
        text: s.value.textKey,
        children: s.value.childrenKey
      }), p.value && !r.value.nodes.length && (yield b({
        root: !0,
        loading: !0,
        text: "",
        value: ""
      })), i.value = [{ nodes: r.value.nodes, selectedNode: null }], $();
    }), $ = () => Ke(this, null, function* () {
      const h = o.value;
      if (h === void 0 || !r.value.nodes.length)
        return;
      if (h.length === 0) {
        l.value = 0, i.value = [{ nodes: r.value.nodes, selectedNode: null }];
        return;
      }
      let w = h;
      if (p.value && Array.isArray(h) && h.length) {
        w = [];
        let B = r.value.nodes.find((N) => N.value === h[0]);
        if (B) {
          w = [B.value], a.value = !0;
          const N = yield h.slice(1).reduce((E, C) => Ke(this, null, function* () {
            var P;
            const _ = yield E;
            yield b(_);
            const S = (P = _ == null ? void 0 : _.children) == null ? void 0 : P.find((O) => O.value === C);
            return S && w.push(C), Promise.resolve(S);
          }), Promise.resolve(B));
          yield b(N), a.value = !1;
        }
      }
      w.length && h === e.modelValue && r.value.getPathNodesByValue(w).map((N, E) => {
        l.value = E, c.handleNode(N, !0);
      });
    }), b = (h) => Ke(this, null, function* () {
      if (!h)
        return;
      if (!s.value.lazyLoad) {
        h.leaf = !0;
        return;
      }
      if (r.value.isLeaf(h, p.value) || r.value.hasChildren(h, p.value))
        return;
      h.loading = !0;
      const w = h.root ? null : h;
      let B = f.get(h);
      B || (B = new Promise((E) => {
        var C, _;
        (_ = (C = s.value).lazyLoad) == null || _.call(C, h, E);
      }), f.set(h, B));
      const N = yield B;
      Array.isArray(N) && N.length > 0 ? r.value.updateChildren(N, w) : h.leaf = !0, h.loading = !1, f.delete(h);
    }), k = (h) => {
      const w = h.map((B) => B.value);
      o.value = w, t("change", w, h), t("update:modelValue", w, h);
    }, c = {
      // 选中一个节点，静默模式不触发事件
      handleNode(h, w) {
        return Ke(this, null, function* () {
          const { disabled: B, loading: N } = h;
          if (!(!w && B || !i.value[l.value])) {
            if (r.value.isLeaf(h, p.value)) {
              if (h.leaf = !0, i.value[l.value].selectedNode = h, i.value = i.value.slice(0, h.level + 1), !w) {
                const E = i.value.map((C) => C.selectedNode);
                k(E), t("pathChange", E);
              }
              return;
            }
            if (r.value.hasChildren(h, p.value)) {
              const E = h.level + 1;
              if (i.value[l.value].selectedNode = h, i.value = i.value.slice(0, E), i.value.push({
                nodes: h.children || [],
                selectedNode: null
              }), l.value = E, !w) {
                const C = i.value.map((_) => _.selectedNode);
                t("pathChange", C);
              }
              return;
            }
            v = h, !N && (yield b(h), v === h && (i.value[l.value].selectedNode = h, c.handleNode(h, w)));
          }
        });
      },
      handleTabClick(h) {
        v = null, l.value = Number(h.paneKey);
      },
      formatTabTitle(h) {
        return h.selectedNode ? h.selectedNode.text : n("select");
      },
      isSelected(h, w) {
        var B;
        return ((B = h == null ? void 0 : h.selectedNode) == null ? void 0 : B.value) === w.value;
      }
    };
    return Q(
      [s, () => e.options],
      () => {
        y();
      },
      {
        deep: !0,
        immediate: !0
      }
    ), Q(
      () => e.modelValue,
      (h) => {
        h !== o.value && (o.value = h, $());
      }
    ), Q(
      () => e.visible,
      (h) => {
        h && Array.isArray(o.value) && o.value.length > 0 && $();
      }
    ), Z({ panes: i, initLoading: a, tabsCursor: l }, c);
  }
}), Md = {
  role: "menu",
  class: "nut-cascader-pane"
}, Ld = ["aria-checked", "aria-disabled", "onClick"], Ed = { class: "nut-cascader-item__title" }, Pd = /* @__PURE__ */ m("view", { class: "nut-cascader-pane" }, null, -1);
function Ad(e, t, n, s, l, a) {
  const o = j("Loading"), r = j("Checklist"), i = j("nut-tab-pane"), p = j("nut-tabs");
  return u(), ee(p, {
    modelValue: e.tabsCursor,
    "onUpdate:modelValue": t[0] || (t[0] = (f) => e.tabsCursor = f),
    class: "nut-cascader",
    "title-scroll": "",
    onClick: e.handleTabClick
  }, {
    default: te(() => [
      !e.initLoading && e.panes.length ? (u(!0), d(x, { key: 0 }, ie(e.panes, (f, v) => (u(), ee(i, {
        key: v,
        title: e.formatTabTitle(f)
      }, {
        default: te(() => [
          m("view", Md, [
            (u(!0), d(x, null, ie(f.nodes, (y) => (u(), d("view", {
              key: y.value,
              class: M(["nut-cascader-item", { active: e.isSelected(f, y), disabled: y.disabled }]),
              "aria-checked": e.isSelected(f, y),
              "aria-disabled": y.disabled || void 0,
              role: "menuitemradio",
              onClick: ($) => e.handleNode(y, !1)
            }, [
              m("view", Ed, L(y.text), 1),
              y.loading ? (u(), ee(o, {
                key: 0,
                class: "nut-cascader-item__icon-loading",
                name: "loading"
              })) : (u(), ee(r, {
                key: 1,
                class: "nut-cascader-item__icon-check",
                name: "checklist"
              }))
            ], 10, Ld))), 128))
          ])
        ]),
        _: 2
      }, 1032, ["title"]))), 128)) : (u(), ee(i, {
        key: 1,
        title: "Loading..."
      }, {
        default: te(() => [
          Pd
        ]),
        _: 1
      }))
    ]),
    _: 1
  }, 8, ["modelValue", "onClick"]);
}
const zd = /* @__PURE__ */ U(Bd, [["render", Ad]]), { create: Vd } = Y("cascader"), Od = Vd({
  components: {
    NutCascaderItem: zd,
    NutPopup: Le
  },
  props: ce(Z({}, Ct), {
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
      set(o) {
        t("update:visible", o);
      }
    }), l = (o, r) => {
      n.value = o, s.value = !1, t("change", o, r), t("update:modelValue", o);
    }, a = (o) => {
      t("pathChange", o);
    };
    return Q(
      () => e.modelValue,
      (o) => {
        o !== n.value && (n.value = o);
      }
    ), {
      onChange: l,
      onPathChange: a,
      innerValue: n,
      innerVisible: s
    };
  }
}), Hd = ["innerHTML"];
function Rd(e, t, n, s, l, a) {
  const o = j("nut-cascader-item"), r = j("nut-popup");
  return e.poppable ? (u(), ee(r, {
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
    default: te(() => [
      e.title ? (u(), d("view", {
        key: 0,
        class: "nut-cascader__bar",
        innerHTML: e.title
      }, null, 8, Hd)) : T("", !0),
      oe(o, {
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
  }, 8, ["visible", "closeable", "close-icon-position", "z-index"])) : (u(), ee(o, {
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
const Fd = /* @__PURE__ */ U(Od, [["render", Rd]]), fe = {
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
    const l = (/* @__PURE__ */ new Date(e + "/" + t + "/" + n)).getDay();
    return ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"][l];
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
    const n = e.getFullYear(), s = this.getNumTwoBit(e.getMonth() + 1), l = this.getNumTwoBit(e.getDate());
    return [n, s, l].join(t);
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
    const l = new Date(Number(e), parseInt(t) - 1, Number(n));
    let a = l.getDay(), o = l.getDate(), r = 6 - a;
    return s !== 0 && (a = a == 0 ? 7 : a, r = 7 - a), Math.ceil((o + r) / 7);
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getYearWeek: function(e, t, n, s = 0) {
    const l = new Date(Number(e), parseInt(t) - 1, Number(n)), a = new Date(Number(e), 0, 1), o = Math.round((l.valueOf() - a.valueOf()) / 864e5);
    return Math.ceil((o + (a.getDay() + 1 - 1)) / 7);
  },
  getWeekDate: function(e, t, n, s = 0) {
    const l = new Date(Number(e), parseInt(t) - 1, Number(n)), a = l.getTime();
    let o = l.getDay();
    if (s === 0) {
      const i = a - o * 864e5, p = a + (6 - o) * 864e5, f = this.date2Str(new Date(i)), v = this.date2Str(new Date(p));
      return [f, v];
    } else {
      o = o == 0 ? 7 : o;
      const r = 24 * 60 * 60 * 1e3, i = a - (o - 1) * r, p = a + (7 - o) * r, f = this.date2Str(new Date(i)), v = this.date2Str(new Date(p));
      return [f, v];
    }
  },
  formatResultDate: function(e) {
    let t = [...e.split("-")];
    return t[2] = fe.getNumTwoBit(Number(t[2])), t[3] = `${t[0]}-${t[1]}-${t[2]}`, t[4] = fe.getWhatDay(+t[0], +t[1], +t[2]), t;
  }
}, { create: Wd } = Y("calendar-item"), Yd = "NutCalendarItem", jd = Wd({
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
    const l = ke(Yd), a = l("weekdays").map((H, J) => ({
      day: H,
      weekend: J === 0 || J === 6
    })), o = z([...a.slice(e.firstDayOfWeek, 7), ...a.slice(0, e.firstDayOfWeek)]), r = z(null), i = z(null), p = z(null), f = z(null), v = z(0), y = D(() => c.monthsData.slice(c.defaultRange[0], c.defaultRange[1])), $ = D(() => n.btn), b = D(() => n["top-info"]), k = D(() => n["bottom-info"]), c = ue({
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
    }), g = (H) => H.split("-"), h = (H) => fe.isEqual(c.currDate[0], H), w = (H) => fe.isEqual(c.currDate[1], H), B = (H) => {
      var J, se;
      return ((J = c.currDate) == null ? void 0 : J.length) > 0 ? (se = c.currDate) == null ? void 0 : se.some((re) => fe.isEqual(re, H)) : !1;
    }, N = (H, J) => J.curData[0] + "-" + J.curData[1] + "-" + fe.getNumTwoBit(+H.day), E = (H, J, se) => {
      const re = [];
      typeof se == "number" && ((se + 1 + e.firstDayOfWeek) % 7 === 0 || (se + e.firstDayOfWeek) % 7 === 0) && re.push("weekend");
      const me = N(H, J), { type: _e } = e;
      return H.type == "curr" ? fe.isEqual(c.currDate, me) || (_e == "range" || _e == "week") && (h(me) || w(me)) || _e == "multiple" && B(me) ? re.push(`${c.dayPrefix}--active`) : c.propStartDate && fe.compareDate(me, c.propStartDate) || c.propEndDate && fe.compareDate(c.propEndDate, me) || e.disabledDate && e.disabledDate(me) ? re.push(`${c.dayPrefix}--disabled`) : (_e == "range" || _e == "week") && Array.isArray(c.currDate) && Object.values(c.currDate).length == 2 && fe.compareDate(c.currDate[0], me) && fe.compareDate(me, c.currDate[1]) && re.push(`${c.dayPrefix}--choose`) : re.push(`${c.dayPrefix}--disabled`), re;
    }, C = () => {
      const { type: H } = e;
      if (H == "range" && c.chooseData.length == 2 || H != "range") {
        let J = c.chooseData.slice(0);
        if (H == "week") {
          if (c.chooseData.length !== 2)
            return;
          J = {
            weekDate: [S(c.chooseData[0]), S(c.chooseData[1])]
          };
        }
        t("choose", J), e.poppable && t("update");
      }
    }, _ = (H, J, se = !1) => {
      var re, me;
      if (!E(H, J).includes(`${c.dayPrefix}--disabled`)) {
        const { type: _e } = e;
        let [He, We] = J.curData, $e = [...J.curData];
        if ($e[2] = fe.getNumTwoBit(Number(H.day)), $e[3] = `${$e[0]}-${$e[1]}-${$e[2]}`, $e[4] = fe.getWhatDay(+$e[0], +$e[1], +$e[2]), _e == "multiple")
          if (((re = c.currDate) == null ? void 0 : re.length) > 0) {
            let Se;
            (me = c.currDate) == null || me.forEach((Re, ze) => {
              Re == $e[3] && (Se = ze);
            }), se ? c.chooseData.push([...$e]) : Se !== void 0 ? (c.currDate.splice(Se, 1), c.chooseData.splice(Se, 1)) : (c.currDate.push($e[3]), c.chooseData.push([...$e]));
          } else
            c.currDate = [$e[3]], c.chooseData = [[...$e]];
        else if (_e == "range") {
          let Se = Object.values(c.currDate).length;
          Se == 2 || Se == 0 ? c.currDate = [$e[3]] : fe.compareDate(c.currDate[0], $e[3]) ? Array.isArray(c.currDate) && c.currDate.push($e[3]) : Array.isArray(c.currDate) && c.currDate.unshift($e[3]), c.chooseData.length == 2 || !c.chooseData.length ? c.chooseData = [[...$e]] : fe.compareDate(c.chooseData[0][3], $e[3]) ? c.chooseData = [...c.chooseData, [...$e]] : c.chooseData = [[...$e], ...c.chooseData];
        } else if (_e == "week") {
          let Se = fe.getWeekDate(He, We, H.day, e.firstDayOfWeek);
          c.propStartDate && fe.compareDate(Se[0], c.propStartDate) && Se.splice(0, 1, c.propStartDate), c.propEndDate && fe.compareDate(c.propEndDate, Se[1]) && Se.splice(1, 1, c.propEndDate), c.currDate = Se, c.chooseData = [fe.formatResultDate(Se[0]), fe.formatResultDate(Se[1])];
        } else
          c.currDate = $e[3], c.chooseData = [...$e];
        if (!se) {
          let Se = c.chooseData;
          _e == "week" && (Se = {
            weekDate: [
              S(c.chooseData[0]),
              S(c.chooseData[1])
            ]
          }), t("select", Se), (e.isAutoBackFill || !e.poppable) && C();
        }
      }
    }, S = (H) => {
      let [J, se, re] = H;
      return {
        date: H,
        monthWeekNum: fe.getMonthWeek(J, se, re, e.firstDayOfWeek),
        yearWeekNum: fe.getYearWeek(J, se, re, e.firstDayOfWeek)
      };
    }, P = (H) => {
      const J = H == "prev" ? c.monthsData[0] : c.monthsData[c.monthsData.length - 1];
      let se = parseInt(J.curData[0]), re = parseInt(J.curData[1].toString().replace(/^0/, ""));
      switch (H) {
        case "prev":
          re == 1 && (se -= 1), re = re == 1 ? 12 : --re;
          break;
        case "next":
          re == 12 && (se += 1), re = re == 12 ? 1 : ++re;
          break;
      }
      return [se + "", fe.getNumTwoBit(re), fe.getMonthDays(String(se), String(re)) + ""];
    }, O = (H, J, se) => {
      let { year: re, month: me } = se;
      return J == "prev" && H >= 7 && (H -= 7), Array.from(Array(H), (_e, He) => ({
        day: String(He + 1),
        type: J,
        year: re,
        month: me
      }));
    }, K = (H, J, se, re) => {
      H = H - e.firstDayOfWeek;
      let { year: me, month: _e } = se;
      return J == "prev" && H >= 7 && (H -= 7), Array.from(Array(re), (We, $e) => ({
        day: String($e + 1),
        type: J,
        year: me,
        month: _e
      })).slice(re - H);
    }, G = (H, J) => {
      const se = fe.getMonthPreDay(+H[0], +H[1]);
      let re = Number(H[1]) - 1, me = Number(H[0]);
      re <= 0 && (re = 12, me += 1);
      const _e = fe.getMonthDays(String(H[0]), String(H[1])), He = fe.getMonthDays(me + "", re + ""), We = {
        year: H[0],
        month: H[1]
      }, $e = {
        curData: H,
        title: l("monthTitle", We.year, We.month),
        monthData: [
          ...K(
            se,
            "prev",
            { month: String(re), year: String(me) },
            He
          ),
          ...O(_e, "curr", We)
        ],
        cssHeight: 0,
        cssScrollHeight: 0
      };
      $e.cssHeight = 39 + ($e.monthData.length > 35 ? 384 : 320);
      let Se = 0;
      c.monthsData.length > 0 && (Se = c.monthsData[c.monthsData.length - 1].cssScrollHeight + c.monthsData[c.monthsData.length - 1].cssHeight), $e.cssScrollHeight = Se, J == "next" ? (!c.endData || !fe.compareDate(
        `${c.endData[0]}-${c.endData[1]}-${fe.getMonthDays(c.endData[0], c.endData[1])}`,
        `${H[0]}-${H[1]}-${H[2]}`
      )) && c.monthsData.push($e) : !c.startData || !fe.compareDate(
        `${H[0]}-${H[1]}-${H[2]}`,
        `${c.startData[0]}-${c.startData[1]}-01`
      ) ? c.monthsData.unshift($e) : c.unLoadPrev = !0;
    }, W = () => {
      let H = e.startDate ? e.startDate : fe.getDay(0), J = e.endDate ? e.endDate : fe.getDay(365);
      c.propStartDate = H, c.propEndDate = J, c.startData = g(H), c.endData = g(J), (e.defaultValue || Array.isArray(e.defaultValue) && e.defaultValue.length > 0) && (c.currDate = e.type !== "one" ? [...e.defaultValue] : e.defaultValue);
      const se = {
        year: Number(c.startData[0]),
        month: Number(c.startData[1])
      }, re = {
        year: Number(c.endData[0]),
        month: Number(c.endData[1])
      };
      let me = re.month - se.month;
      re.year - se.year > 0 && (me = me + 12 * (re.year - se.year)), me <= 0 && (me = 1), G(c.startData, "next");
      let _e = 1;
      do
        G(P("next"), "next");
      while (_e++ < me);
      if (c.monthsNum = me, e.type == "range" && Array.isArray(c.currDate))
        c.currDate.length > 0 && (H && fe.compareDate(c.currDate[0], H) && c.currDate.splice(0, 1, H), J && fe.compareDate(J, c.currDate[1]) && c.currDate.splice(1, 1, J), c.defaultData = [...g(c.currDate[0]), ...g(c.currDate[1])]);
      else if (e.type == "multiple" && Array.isArray(c.currDate)) {
        if (c.currDate.length > 0) {
          let Re = [], ze = {};
          c.currDate.forEach((Ye) => {
            H && !fe.compareDate(Ye, H) && J && !fe.compareDate(J, Ye) && (Object.hasOwnProperty.call(ze, Ye) || (Re.push(Ye), ze[Ye] = Ye));
          }), c.currDate = [...Re], c.defaultData = [...g(Re[0])];
        }
      } else if (e.type == "week" && Array.isArray(c.currDate)) {
        if (c.currDate.length > 0) {
          let [Re, ze, Ye] = g(c.currDate[0]), zt = fe.getWeekDate(Re, ze, Ye, e.firstDayOfWeek);
          c.currDate = zt, H && fe.compareDate(c.currDate[0], H) && c.currDate.splice(0, 1, H), J && fe.compareDate(J, c.currDate[1]) && c.currDate.splice(1, 1, J), c.defaultData = [...g(c.currDate[0]), ...g(c.currDate[1])];
        }
      } else
        c.currDate && (H && fe.compareDate(c.currDate, H) ? c.currDate = H : J && !fe.compareDate(c.currDate, J) && (c.currDate = J), c.defaultData = [...g(c.currDate)]);
      let He = 0, We = 0;
      c.defaultData.length > 0 && c.monthsData.forEach((Re, ze) => {
        Re.title == l("monthTitle", c.defaultData[0], c.defaultData[1]) && (He = ze), (e.type == "range" || e.type == "week") && Re.title == l("monthTitle", c.defaultData[3], c.defaultData[4]) && (We = ze);
      }), R(me, He), c.currentIndex = He, c.yearMonthTitle = c.monthsData[c.currentIndex].title, c.defaultData.length > 0 && (c.isRange ? (_({ day: c.defaultData[2], type: "curr" }, c.monthsData[c.currentIndex], !0), _({ day: c.defaultData[5], type: "curr" }, c.monthsData[We], !0)) : e.type == "week" ? _({ day: c.defaultData[2], type: "curr" }, c.monthsData[c.currentIndex], !0) : e.type == "multiple" ? [...c.currDate].forEach((Re) => {
        let ze = g(Re), Ye = c.currentIndex;
        c.monthsData.forEach((zt, zo) => {
          zt.title == l("monthTitle", ze[0], ze[1]) && (Ye = zo);
        }), _({ day: ze[2], type: "curr" }, c.monthsData[Ye], !0);
      }) : _({ day: c.defaultData[2], type: "curr" }, c.monthsData[c.currentIndex], !0));
      let $e = c.monthsData[c.monthsData.length - 1], Se = $e.cssHeight + $e.cssScrollHeight;
      Ve(() => {
        r != null && r.value && (i != null && i.value) && (f != null && f.value) && (v.value = r.value.clientHeight, i.value.style.height = `${Se}px`, r.value.scrollTop = c.monthsData[c.currentIndex].cssScrollHeight);
      }), c.avgHeight = Math.floor(Se / (me + 1));
    };
    s({
      scrollToDate: (H) => {
        fe.compareDate(H, c.propStartDate) ? H = c.propStartDate : fe.compareDate(H, c.propEndDate) || (H = c.propEndDate);
        let J = g(H);
        c.monthsData.forEach((se, re) => {
          if (se.title == l("monthTitle", J[0], J[1]) && r.value) {
            let me = c.monthsData[re].cssScrollHeight - r.value.scrollTop;
            if (e.toDateAnimation) {
              let _e = 0, He = setInterval(() => {
                if (_e++, r.value) {
                  let We = me / 10;
                  r.value.scrollTop = r.value.scrollTop + We;
                }
                _e >= 10 && (clearInterval(He), r.value && (r.value.scrollTop = c.monthsData[re].cssScrollHeight));
              }, 40);
            } else
              r.value.scrollTop = c.monthsData[re].cssScrollHeight;
          }
        });
      },
      initPosition: () => {
        r != null && r.value && (r.value.scrollTop = c.monthsData[c.currentIndex].cssScrollHeight);
      }
    });
    const R = (H, J) => {
      H >= 3 ? J > 0 && J < H ? c.defaultRange = [J - 1, J + 3] : J == 0 ? c.defaultRange = [J, J + 4] : J == H && (c.defaultRange = [J - 2, J + 2]) : c.defaultRange = [0, H + 2];
      let se = c.monthsData[c.defaultRange[0]].cssScrollHeight;
      c.translateY = se;
    }, ne = (H, J) => (e.type == "range" || e.type == "week") && H.type == "curr" && E(H, J).includes("nut-calendar__day--active"), X = (H, J) => ne(H, J) && h(N(H, J)), ae = (H, J) => c.currDate.length >= 2 && w(N(H, J)) ? ne(H, J) : !1, de = () => {
      if (c.currDate.length >= 2)
        return fe.isEqual(c.currDate[0], c.currDate[1]);
    }, pe = (H) => {
      const J = `${H.year}-${H.month}-${Number(H.day) < 10 ? "0" + H.day : H.day}`;
      return fe.isEqual(J, fe.date2Str(/* @__PURE__ */ new Date()));
    }, we = (H) => {
      if (c.monthsData.length <= 1)
        return;
      const J = H.target.scrollTop;
      let se = Math.floor(J / c.avgHeight);
      if (se == 0)
        J >= c.monthsData[se + 1].cssScrollHeight && (se += 1);
      else if (se > 0 && se < c.monthsNum - 1)
        J >= c.monthsData[se + 1].cssScrollHeight && (se += 1), J < c.monthsData[se].cssScrollHeight && (se -= 1);
      else {
        const re = Math.round(J + v.value);
        re < c.monthsData[se].cssScrollHeight + c.monthsData[se].cssHeight && J > c.monthsData[se - 1].cssScrollHeight && (se -= 1), se + 1 <= c.monthsNum && re >= c.monthsData[se + 1].cssScrollHeight + c.monthsData[se + 1].cssHeight && (se += 1), se >= 1 && J < c.monthsData[se - 1].cssScrollHeight && (se -= 1);
      }
      c.currentIndex !== se && (c.currentIndex = se, R(c.monthsNum, se)), c.yearMonthTitle = c.monthsData[se].title;
    }, Ee = () => {
      c.chooseData.splice(0), c.monthsData.splice(0), W();
    };
    return ve(() => {
      W();
    }), Q(
      () => e.defaultValue,
      (H) => {
        H && e.poppable && Ee();
      }
    ), ce(Z(Z({
      weeks: o,
      compConthsData: y,
      showTopBtn: $,
      topInfo: b,
      bottomInfo: k,
      rangeTip: de,
      mothsViewScroll: we,
      getClass: E,
      isStartTip: X,
      isEndTip: ae,
      chooseDay: _,
      isCurrDay: pe,
      confirm: C,
      months: r
    }, he(c)), he(e)), {
      translate: l,
      monthsPanel: i,
      weeksPanel: p,
      viewArea: f
    });
  }
}), Ud = { class: "nut-calendar__header" }, Kd = {
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
function af(e, t, n, s, l, a) {
  return u(), d("view", {
    class: M(["nut-calendar", {
      "nut-calendar--nopop": !e.poppable,
      "nut-calendar--nofooter": e.isAutoBackFill
    }])
  }, [
    m("view", Ud, [
      e.showTitle ? (u(), d("view", Kd, L(e.title || e.translate("title")), 1)) : T("", !0),
      e.showTopBtn ? (u(), d("view", Xd, [
        I(e.$slots, "btn")
      ])) : T("", !0),
      e.showSubTitle ? (u(), d("view", qd, L(e.yearMonthTitle), 1)) : T("", !0),
      m("view", Zd, [
        (u(!0), d(x, null, ie(e.weeks, (o, r) => (u(), d("view", {
          key: r,
          class: M(["nut-calendar__weekday", { weekend: o.weekend }])
        }, L(o.day), 3))), 128))
      ], 512)
    ]),
    m("view", {
      ref: "months",
      class: "nut-calendar__content",
      onScroll: t[0] || (t[0] = (...o) => e.mothsViewScroll && e.mothsViewScroll(...o))
    }, [
      m("view", Gd, [
        m("view", {
          ref: "viewArea",
          class: "nut-calendar__body",
          style: A({ transform: `translateY(${e.translateY}px)` })
        }, [
          (u(!0), d(x, null, ie(e.compConthsData, (o, r) => (u(), d("view", {
            key: r,
            class: "nut-calendar__month"
          }, [
            m("view", Jd, L(o.title), 1),
            m("view", Qd, [
              m("view", {
                class: M(["nut-calendar__days-item", e.type === "range" ? "nut-calendar__days-item--range" : ""])
              }, [
                (u(!0), d(x, null, ie(o.monthData, (i, p) => (u(), d("view", {
                  key: p,
                  class: M(["nut-calendar__day", e.getClass(i, o, p)]),
                  onClick: (f) => e.chooseDay(i, o)
                }, [
                  m("view", ef, [
                    I(e.$slots, "day", {
                      date: i.type == "curr" ? i : ""
                    }, () => [
                      ge(L(i.type == "curr" ? i.day : ""), 1)
                    ])
                  ]),
                  e.topInfo ? (u(), d("view", tf, [
                    I(e.$slots, "top-info", {
                      date: i.type == "curr" ? i : ""
                    })
                  ])) : T("", !0),
                  e.bottomInfo ? (u(), d("view", nf, [
                    I(e.$slots, "bottom-info", {
                      date: i.type == "curr" ? i : ""
                    })
                  ])) : T("", !0),
                  !e.bottomInfo && e.showToday && e.isCurrDay(i) ? (u(), d("view", of, L(e.translate("today")), 1)) : T("", !0),
                  e.isStartTip(i, o) ? (u(), d("view", {
                    key: 3,
                    class: M(["nut-calendar__day-tip", { "nut-calendar__day-tips--top": e.rangeTip() }])
                  }, L(e.startText || e.translate("start")), 3)) : T("", !0),
                  e.isEndTip(i, o) ? (u(), d("view", lf, L(e.endText || e.translate("end")), 1)) : T("", !0)
                ], 10, xd))), 128))
              ], 2)
            ])
          ]))), 128))
        ], 4)
      ], 512)
    ], 544),
    e.poppable && !e.isAutoBackFill ? (u(), d("view", sf, [
      I(e.$slots, "footer-info", { date: e.chooseData }, () => [
        m("view", {
          class: "nut-calendar__confirm",
          onClick: t[1] || (t[1] = (...o) => e.confirm && e.confirm(...o))
        }, L(e.confirmText || e.translate("confirm")), 1)
      ])
    ])) : T("", !0)
  ], 2);
}
const fo = /* @__PURE__ */ U(jd, [["render", af]]), { create: rf } = Y("calendar"), uf = rf({
  components: {
    NutCalendarItem: fo,
    NutPopup: Le
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
    const l = D({
      get() {
        return e.visible;
      },
      set(w) {
        t("update:visible", w);
      }
    }), a = D(() => n.btn), o = D(() => n["top-info"]), r = D(() => n.day), i = D(() => n["bottom-info"]), p = D(() => n["footer-info"]), f = z(null);
    s({
      scrollToDate: (w) => {
        var B;
        (B = f.value) == null || B.scrollToDate(w);
      },
      initPosition: () => {
        var w;
        (w = f.value) == null || w.initPosition();
      }
    });
    const $ = () => {
      t("update:visible", !1);
    }, b = () => {
      t("close"), t("update:visible", !1);
    };
    return {
      visible: l,
      closePopup: () => {
        b();
      },
      opened: () => {
        var w;
        (w = f.value) == null || w.initPosition();
      },
      update: $,
      close: b,
      select: (w) => {
        t("select", w);
      },
      choose: (w) => {
        b(), t("choose", w);
      },
      calendarRef: f,
      showTopBtn: a,
      topInfo: o,
      dayInfo: r,
      bottomInfo: i,
      footerInfo: p
    };
  }
});
function cf(e, t, n, s, l, a) {
  const o = j("nut-calendar-item"), r = j("nut-popup");
  return e.poppable ? (u(), ee(r, vt({
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
    default: te(() => [
      oe(o, {
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
      }, $t({ _: 2 }, [
        e.showTopBtn ? {
          name: "btn",
          fn: te(() => [
            I(e.$slots, "btn")
          ]),
          key: "0"
        } : void 0,
        e.dayInfo ? {
          name: "day",
          fn: te((i) => [
            I(e.$slots, "day", {
              date: i.date
            })
          ]),
          key: "1"
        } : void 0,
        e.topInfo ? {
          name: "top-info",
          fn: te((i) => [
            I(e.$slots, "top-info", {
              date: i.date
            })
          ]),
          key: "2"
        } : void 0,
        e.bottomInfo ? {
          name: "bottom-info",
          fn: te((i) => [
            I(e.$slots, "bottom-info", {
              date: i.date
            })
          ]),
          key: "3"
        } : void 0,
        e.footerInfo ? {
          name: "footer-info",
          fn: te((i) => [
            I(e.$slots, "footer-info", {
              date: i.date
            })
          ]),
          key: "4"
        } : void 0
      ]), 1032, ["type", "is-auto-back-fill", "poppable", "title", "default-value", "start-date", "end-date", "confirm-text", "start-text", "end-text", "show-today", "show-title", "show-sub-title", "to-date-animation", "first-day-of-week", "disabled-date", "onUpdate", "onClose", "onChoose", "onSelect"])
    ]),
    _: 3
  }, 16, ["visible", "lock-scroll", "onOpened"])) : (u(), ee(o, {
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
  }, $t({ _: 2 }, [
    e.showTopBtn ? {
      name: "btn",
      fn: te(() => [
        I(e.$slots, "btn")
      ]),
      key: "0"
    } : void 0,
    e.dayInfo ? {
      name: "day",
      fn: te((i) => [
        I(e.$slots, "day", {
          date: i.date
        })
      ]),
      key: "1"
    } : void 0,
    e.topInfo ? {
      name: "top-info",
      fn: te((i) => [
        I(e.$slots, "top-info", {
          date: i.date
        })
      ]),
      key: "2"
    } : void 0,
    e.bottomInfo ? {
      name: "bottom-info",
      fn: te((i) => [
        I(e.$slots, "bottom-info", {
          date: i.date
        })
      ]),
      key: "3"
    } : void 0
  ]), 1032, ["type", "is-auto-back-fill", "poppable", "title", "confirm-text", "start-text", "end-text", "default-value", "start-date", "end-date", "show-title", "show-sub-title", "to-date-animation", "show-today", "first-day-of-week", "disabled-date", "onUpdate", "onClose", "onChoose", "onSelect"]));
}
const df = /* @__PURE__ */ U(uf, [["render", cf]]), ff = () => be(
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
), pf = () => be(
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
), mf = () => be(
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
      d: "M4.147 13.974a.771.771 0 0 1-.12-1.085L7.136 9 4.028 5.11a.771.771 0 1 1 1.204-.963l3.497 4.371a.771.771 0 0 1 0 .964l-3.497 4.371a.771.771 0 0 1-1.084.12Zm5.245 0a.771.771 0 0 1-.12-1.085L12.383 9 9.272 5.11a.771.771 0 1 1 1.205-.963l3.497 4.371a.771.771 0 0 1 0 .964l-3.497 4.371a.771.771 0 0 1-1.085.12Z"
    })
  ]
), xe = (e) => e ? {
  year: e.getFullYear(),
  month: e.getMonth() + 1,
  date: e.getDate()
} : null, Yt = (e) => e ? new Date(e.year, e.month - 1, e.date) : null, Sn = (e) => Array.isArray(e) ? e.map((t) => xe(t)) : e ? [xe(e)] : [], gf = (e) => Array.isArray(e) ? e.map((t) => Yt(t)) : e ? [Yt(e)] : [], yf = (e, t, n) => {
  let s = t - 1, l = e;
  s <= 0 && (s = 12, l -= 1);
  let a = fe.getMonthPreDay(e, t);
  a -= n, a >= 7 && (a -= 7);
  const o = fe.getMonthDays(`${l}`, `${s}`);
  return Array.from(Array(o), (i, p) => ({
    type: "prev",
    year: l,
    month: s,
    date: p + 1
  })).slice(o - a);
}, vf = (e, t) => {
  const n = fe.getMonthDays(`${e}`, `${t}`);
  return Array.from(Array(n), (s, l) => ({
    type: "current",
    year: e,
    month: t,
    date: l + 1
  }));
}, $f = (e, t) => {
  const n = new Date(e.year, e.month - 1, e.date), s = (n.getDay() + 7 - t) % 7;
  return [
    xe(new Date(n.getTime() - 24 * 60 * 60 * 1e3 * s)),
    xe(new Date(n.getTime() + 24 * 60 * 60 * 1e3 * (6 - s)))
  ];
}, bf = (e, t) => {
  const n = e.year, s = e.month, l = [...yf(n, s, t), ...vf(n, s)], a = l.length, o = e.month === 12 ? e.year + 1 : e.year, r = e.month === 12 ? 1 : e.month + 1;
  for (let i = 1; i <= 42 - a; i++)
    l.push({
      type: "next",
      year: o,
      month: r,
      date: i
    });
  return l;
}, Je = (e, t) => {
  if (e && t)
    return e.year === t.year ? e.month === t.month ? e.date - t.date : e.month - t.month : e.year - t.year;
}, lt = (e, t) => Je(e, t) === 0, wf = { class: "nut-calendarcard" }, kf = { class: "nut-calendarcard-header" }, Cf = { class: "nut-calendarcard-header-left" }, Sf = { class: "nut-calendarcard-header-title" }, Tf = { class: "nut-calendarcard-header-right" }, Nf = { class: "nut-calendarcard-content" }, Df = { class: "nut-calendarcard-days" }, _f = { class: "nut-calendarcard-days" }, If = ["onClick"], Bf = { class: "nut-calendarcard-day-top" }, Mf = { class: "nut-calendarcard-day-inner" }, Lf = { class: "nut-calendarcard-day-bottom" }, Tn = "NutCalendarCard", po = /* @__PURE__ */ nt({
  name: Tn,
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
    const s = e, l = n, a = ke(Tn), r = z((() => {
      let E = new Date(Date.now());
      const C = s.modelValue;
      return Array.isArray(C) ? C.length && (E = C[0]) : C && (E = C), {
        year: E.getFullYear(),
        month: E.getMonth() + 1
      };
    })()), i = z([]), p = D(() => {
      const E = a("weekdays").map((C, _) => ({
        name: C,
        key: _
      }));
      return [...E.slice(s.firstDayOfWeek, 7), ...E.slice(0, s.firstDayOfWeek)];
    }), f = z(s.modelValue ? Sn(s.modelValue) : []);
    yt(() => {
      const E = s.modelValue ? Sn(s.modelValue) : [];
      f.value = E;
    });
    const v = (E) => {
      if (f.value = E, s.type === "single") {
        const C = Yt(E[0]);
        l("update:modelValue", C), l("change", C);
      } else if (s.type === "multiple" || s.type === "range" || s.type === "week") {
        const C = gf(E);
        l("update:modelValue", C), l("change", C);
      }
    };
    yt(() => {
      const E = bf(r.value, s.firstDayOfWeek);
      i.value = E, l("pageChange", r.value);
    });
    const y = (E) => !!(s.disableDay && s.disableDay(E) || s.startDate && Number(Je(E, xe(s.startDate))) < 0 || s.endDate && Number(Je(E, xe(s.endDate))) > 0), $ = (E) => {
      if (s.type === "single" || s.type === "multiple") {
        for (const C in f.value)
          if (lt(E, f.value[C]))
            return !0;
      } else if (s.type === "range" && f.value.length === 1 && lt(f.value[0], E))
        return !0;
      return !1;
    }, b = (E) => (s.type === "range" || s.type === "week") && f.value.length === 2 && lt(E, f.value[0]), k = (E) => (s.type === "range" || s.type === "week") && f.value.length === 2 && lt(E, f.value[1]), c = (E) => {
      if ((s.type === "range" || s.type === "week") && f.value.length === 2) {
        const C = Je(f.value[0], E), _ = Je(E, f.value[1]);
        if (C && C < 0 && _ && _ < 0)
          return !0;
      }
      return !1;
    }, g = (E) => {
      const C = new Date(E.year, E.month - 1, E.date).getDay();
      return C === 0 || C === 6;
    }, h = (E) => {
      if (y(E))
        return ["disabled"];
      const C = [];
      return E.type === "current" && ($(E) && C.push("active"), b(E) && C.push("start"), k(E) && C.push("end"), c(E) && C.push("mid"), g(E) && C.push("weekend")), C;
    }, w = (E, C) => {
      if (s.startDate) {
        const _ = Je(
          {
            year: E,
            month: C,
            date: 31
          },
          xe(s.startDate)
        );
        if (_ && _ < 0)
          return;
      }
      if (s.endDate) {
        const _ = Je(
          {
            year: E,
            month: C,
            date: 1
          },
          xe(s.endDate)
        );
        if (_ && _ > 0)
          return;
      }
      r.value = {
        year: E,
        month: C
      };
    }, B = (E = 1) => {
      const C = r.value.year * 12 + r.value.month;
      let _ = (C + E) % 12;
      _ === 0 && (_ = 12);
      const S = Math.floor((C + E - _) / 12);
      w(S, _);
    }, N = (E) => {
      if (!(E.type === "prev" || E.type === "next" || y(E)))
        switch (l("dayClick", E), s.type) {
          case "single": {
            f.value[0] && lt(f.value[0], E) ? v([]) : v([E]);
            break;
          }
          case "multiple": {
            const C = f.value.find((_) => lt(_, E));
            v(C ? f.value.filter((_) => _ !== C) : [...f.value, E]);
            break;
          }
          case "range": {
            const C = f.value.length;
            if (C === 0 || C === 2)
              v([E]);
            else if (C === 1) {
              const _ = Je(f.value[0], E);
              _ === 0 || _ === null || _ === void 0 ? v([]) : _ < 0 ? v([f.value[0], E]) : v([E, f.value[0]]);
            } else
              console.warn("[NutUI] Calendar range error");
            break;
          }
          case "week": {
            if (f.value.length === 2 || f.value.length === 0) {
              const [C, _] = $f(E, s.firstDayOfWeek);
              v([C, _]);
            } else
              console.warn("[NutUI] Calendar week error");
            break;
          }
          default:
            console.warn("[NutUI] Calendar type error");
        }
    };
    return t({
      jump: B,
      jumpTo: w
    }), (E, C) => Ce((u(), d("div", wf, [
      m("div", kf, [
        m("div", Cf, [
          m("div", {
            class: "double-left",
            onClick: C[0] || (C[0] = (_) => B(-12))
          }, [
            oe(Qe(mf))
          ]),
          m("div", {
            class: "left",
            onClick: C[1] || (C[1] = (_) => B(-1))
          }, [
            oe(Qe(ff))
          ])
        ]),
        m("div", Sf, L(Qe(a)("monthTitle", r.value.year, r.value.month)), 1),
        m("div", Tf, [
          m("div", {
            class: "right",
            onClick: C[2] || (C[2] = (_) => B(1))
          }, [
            oe(Qe(pf))
          ]),
          m("div", {
            class: "double-right",
            onClick: C[3] || (C[3] = (_) => B(12))
          }, [
            oe(Qe(hf))
          ])
        ])
      ]),
      m("div", Nf, [
        m("div", Df, [
          (u(!0), d(x, null, ie(p.value, (_) => (u(), d("div", {
            key: _.name,
            class: M(["nut-calendarcard-day header", _.key === 0 || _.key === 6 ? "weekend" : ""])
          }, L(_.name), 3))), 128))
        ]),
        m("div", _f, [
          (u(!0), d(x, null, ie(i.value, (_) => (u(), d("div", {
            key: `${_.year}-${_.month}-${_.date}`,
            class: M(["nut-calendarcard-day", [_.type, ...h(_)]]),
            onClick: (S) => N(_)
          }, [
            m("div", Bf, [
              I(E.$slots, "top", { day: _ })
            ]),
            m("div", Mf, [
              I(E.$slots, "default", { day: _ }, () => [
                ge(L(_.date), 1)
              ])
            ]),
            m("div", Lf, [
              I(E.$slots, "bottom", { day: _ })
            ])
          ], 10, If))), 128))
        ])
      ])
    ], 512)), [
      [Ne, i.value.length > 0]
    ]);
  }
});
en(po);
const mo = Symbol("nut-checkbox"), { create: Ef, componentName: Ge } = Y("checkbox"), Pf = Ef({
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
    const s = Be(mo, null), l = ue({
      partialSelect: e.indeterminate
    }), a = D(() => !!s), o = D(() => a.value ? s.value.value.includes(e.label) : e.modelValue), r = D(() => a.value && s.disabled.value ? s.disabled.value : e.disabled), i = D(() => !!e.modelValue), p = D(() => r.value ? "nut-checkbox__icon--disable" : l.partialSelect ? "nut-checkbox__icon--indeterminate" : o.value ? "nut-checkbox__icon" : "nut-checkbox__icon--unchecked");
    let f = "";
    const v = (c, g) => {
      f = "click", t("update:modelValue", c), t("change", c, g);
    };
    Q(
      () => e.modelValue,
      (c) => {
        f == "click" ? f = "" : t("change", c);
      }
    );
    const y = () => {
      const { iconSize: c } = e, g = {
        CheckNormal: n.icon ? n.icon : Ft,
        Checked: n.checkedIcon ? n.checkedIcon : Fn,
        CheckDisabled: n.indeterminate ? n.indeterminate : wl
      }, h = l.partialSelect ? g.CheckDisabled : o.value ? g.Checked : g.CheckNormal, w = Ie(c);
      return be(h, {
        width: w,
        height: w,
        size: w,
        class: p.value
      });
    }, $ = () => {
      var c;
      return be(
        "view",
        {
          class: `${Ge}__label ${r.value ? `${Ge}__label--disabled` : ""}`
        },
        (c = n.default) == null ? void 0 : c.call(n)
      );
    }, b = () => {
      var c;
      return be(
        "view",
        {
          class: `${Ge}__button ${o.value && `${Ge}__button--active`} ${r.value ? `${Ge}__button--disabled` : ""}`
        },
        (c = n.default) == null ? void 0 : c.call(n)
      );
    }, k = () => {
      var c, g;
      if (!r.value) {
        if (i.value && l.partialSelect) {
          l.partialSelect = !1, v(i.value, (c = n.default) == null ? void 0 : c.call(n)[0].children);
          return;
        }
        if (v(!i.value, (g = n.default) == null ? void 0 : g.call(n)[0].children), a.value) {
          const h = s.value.value, w = s.max.value, { label: B } = e, N = h.indexOf(B);
          N > -1 ? h.splice(N, 1) : N <= -1 && (h.length < w || !w) && h.push(B), s.updateValue(h);
        }
      }
    };
    return ve(() => {
      a.value && s.link(Fe());
    }), Xt(() => {
      a.value && s.unlink(Fe());
    }), Q(
      () => e.indeterminate,
      (c) => {
        l.partialSelect = c;
      }
    ), () => be(
      "view",
      {
        class: `${Ge} ${Ge}--${e.shape} ${e.textPosition === "left" ? `${Ge}--reverse` : ""}`,
        onClick: k
      },
      [e.shape == "button" ? b() : [y(), $()]]
    );
  }
}), { create: Af, componentName: zf } = Y("checkbox-group"), Vf = Af({
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
    const l = ue({
      children: []
    }), a = (f) => {
      f.proxy && l.children.push(f.proxy);
    }, o = (f) => {
      f.proxy && (l.children = l.children.filter((v) => v !== f.proxy));
    }, r = (f) => {
      n("update:modelValue", f), n("change", f);
    }, i = (f) => {
      const v = [];
      f && l.children.forEach((y) => {
        y != null && y.disabled || v.push(y == null ? void 0 : y.label);
      }), n("update:modelValue", v);
    }, p = () => {
      const f = l.children.filter((v) => v != null && v.disabled ? !1 : !e.modelValue.includes(v.label)).map((v) => v.label);
      n("update:modelValue", f);
    };
    return Me(mo, {
      value: D(() => e.modelValue),
      disabled: D(() => e.disabled),
      max: D(() => e.max),
      updateValue: r,
      link: a,
      unlink: o
    }), Q(
      () => e.modelValue,
      (f) => {
        n("change", f);
      }
    ), s({ toggleAll: i, toggleReverse: p }), () => {
      var f;
      return be(
        "view",
        {
          class: zf
        },
        (f = t.default) == null ? void 0 : f.call(t)
      );
    };
  }
}), Of = {
  text: "text",
  value: "value",
  children: "children"
}, Hf = (e, t) => {
  const n = ue({
    formattedColumns: e.columns
  }), s = D(() => Z(Z({}, Of), e.fieldNames)), l = z([]), a = D(() => {
    const c = s.value;
    return f.value.map((g, h) => {
      const w = g.findIndex((B) => B[c.value] === l.value[h]);
      return w === -1 ? 0 : w;
    });
  }), o = z([]), r = (c) => {
    c && o.value.length < f.value.length && o.value.push(c);
  }, i = D(() => {
    const c = s.value;
    return f.value.map((g, h) => g.find((w) => w[c.value] === l.value[h]) || g[0]);
  }), p = D(() => {
    const c = n.formattedColumns[0], g = s.value;
    if (c) {
      if (Array.isArray(c))
        return "multiple";
      if (g.children in c)
        return "cascade";
    }
    return "single";
  }), f = D(() => {
    let c = [];
    switch (p.value) {
      case "multiple":
        c = n.formattedColumns;
        break;
      case "cascade":
        c = v(
          n.formattedColumns,
          l.value ? l.value : []
        );
        break;
      default:
        c = [n.formattedColumns];
        break;
    }
    return c;
  }), v = (c, g) => {
    const h = [], w = s.value;
    let B = {
      text: "",
      value: "",
      [w.children]: c
    }, N = 0;
    for (; B && B[w.children]; ) {
      const E = B[w.children], C = g[N];
      let _ = E.findIndex((S) => S[w.value] === C);
      _ === -1 && (_ = 0), B = B[w.children][_], N++, h.push(E);
    }
    return h;
  }, y = () => {
    t("cancel", {
      selectedValue: l.value,
      selectedOptions: i.value
    });
  }, $ = (c, g) => {
    var w;
    const h = s.value;
    if (g && Object.keys(g).length) {
      if (l.value = l.value ? l.value : [], p.value === "cascade") {
        l.value[c] = (w = g[h.value]) != null ? w : "";
        let B = c, N = g;
        for (; N && N[h.children] && N[h.children][0]; )
          l.value[B + 1] = N[h.children][0][h.value], B++, N = N[h.children][0];
        N && N[h.children] && N[h.children].length === 0 && (l.value = l.value.slice(0, B + 1));
      } else
        l.value[c] = Object.prototype.hasOwnProperty.call(g, h.value) ? g[h.value] : "";
      t("change", {
        columnIndex: c,
        selectedValue: l.value,
        selectedOptions: i.value
      });
    }
  }, b = () => {
    const c = s.value;
    l.value && !l.value.length && f.value.forEach((g) => {
      l.value.push(g[0][c.value]);
    }), t("confirm", {
      selectedValue: l.value,
      selectedOptions: i.value
    });
  }, k = (c, g) => JSON.stringify(c) === JSON.stringify(g);
  return Q(
    () => e.modelValue,
    (c) => {
      k(c, l.value) || (l.value = c);
    },
    { deep: !0, immediate: !0 }
  ), Q(
    l,
    (c) => {
      k(c, e.modelValue) || t("update:modelValue", c);
    },
    { deep: !0 }
  ), Q(
    () => e.columns,
    (c) => {
      n.formattedColumns = c;
    }
  ), ce(Z({}, he(n)), {
    columnsType: p,
    columnsList: f,
    columnFieldNames: s,
    cancel: y,
    changeHandler: $,
    confirm: b,
    defaultValues: l,
    defaultIndexes: a,
    pickerColumn: o,
    swipeRef: r,
    selectedOptions: i,
    isSameValue: k
  });
}, { create: Rf } = Y("picker-column"), Ff = Rf({
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
    const n = Ze(), s = ue({
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
    }), l = z(null), a = z(!1), o = z(0), r = z(0), i = 200, p = 300, f = 15, v = D(() => ({
      transition: `transform ${r.value}ms cubic-bezier(0.17, 0.89, 0.45, 1)`,
      transform: `rotate3d(1, 0, 0, ${o.value})`,
      top: `calc(50% - ${+e.optionHeight / 2}px)`
    })), y = D(() => {
      const { optionHeight: S } = e;
      return {
        transition: `transform ${r.value}ms cubic-bezier(0.17, 0.89, 0.45, 1)`,
        transform: `translate3d(0, ${s.scrollDistance}px, 0)`,
        top: `calc(50% - ${+S / 2}px)`,
        height: `${S}px`
      };
    }), $ = (S) => `transform: rotate3d(1, 0, 0, ${-s.rotation * S}deg) translate3d(0px, 0px, 104px)`, b = D(() => ({
      backgroundSize: `100% ${(+e.visibleOptionNum - 1) * +e.optionHeight / 2}px`
    })), k = (S) => {
      if (n.start(S), a.value && !e.taro) {
        const P = l.value, { transform: O } = window.getComputedStyle(P);
        if (e.threeDimensional) {
          const K = Math.floor(parseInt(o.value) / 360), G = +O.split(", ")[5], W = +O.split(", ")[6] < 0 ? 180 : 0, le = K * 360 + Math.acos(G) / Math.PI * 180 + W;
          s.scrollDistance = -Math.abs((le / s.rotation - 1) * +e.optionHeight);
        } else
          s.scrollDistance = +O.slice(7, O.length - 1).split(", ")[5];
      }
      it(S, !0), s.touchParams.startY = n.deltaY.value, s.touchParams.startTime = Date.now(), s.transformY = s.scrollDistance;
    }, c = (S) => {
      n.move(S), n.isVertical() && (a.value = !0, it(S, !0)), s.touchParams.lastY = n.deltaY.value;
      let P = s.touchParams.lastY - s.touchParams.startY;
      N(P);
    }, g = () => {
      s.touchParams.lastY = n.deltaY.value, s.touchParams.lastTime = Date.now();
      let S = s.touchParams.lastY - s.touchParams.startY, P = s.touchParams.lastTime - s.touchParams.startTime;
      if (P <= p && Math.abs(S) > f) {
        const O = h(S, P);
        N(O, "end", +e.swipeDuration);
        return;
      } else
        N(S, "end");
      setTimeout(() => {
        n.reset(), a.value = !1;
      }, 0);
    }, h = (S, P) => (S = Math.abs(S / P) / 3e-3 * (S < 0 ? -1 : 1), S), w = (S) => S >= s.currIndex + 8 || S <= s.currIndex - 8, B = (S = 0, P, O = i, K) => {
      P === "end" ? r.value = O : r.value = 0, o.value = K, s.scrollDistance = S;
    }, N = (S, P, O) => {
      const { optionHeight: K } = e;
      let G = S + s.transformY;
      if (P === "end") {
        G > 0 && (G = 0), G < -(e.column.length - 1) * +K && (G = -(e.column.length - 1) * +K);
        let W = Math.round(G / +K) * +K, le = `${(Math.abs(Math.round(W / +K)) + 1) * s.rotation}deg`;
        B(W, P, O, le), s.currIndex = Math.abs(Math.round(W / +K)) + 1;
      } else {
        let W = 0, le = (-G / +K + 1) * s.rotation;
        const q = (e.column.length + 1) * s.rotation, R = 0;
        W = Pe(le, R, q), R < W && W < q && (B(G, null, void 0, W + "deg"), s.currIndex = Math.abs(Math.round(G / +K)) + 1);
      }
    }, E = () => {
      t("change", e.column[s.currIndex - 1]);
    }, C = (S) => {
      const { column: P } = e;
      let O = P.findIndex((G) => G[e.fieldNames.value] === e.value);
      s.currIndex = O === -1 ? 1 : O + 1;
      let K = O === -1 ? 0 : O * +e.optionHeight;
      S && E(), N(-K);
    }, _ = () => {
      a.value = !1, r.value = 0, E();
    };
    return Q(
      () => e.column,
      () => {
        e.column && e.column.length > 0 && (s.transformY = 0, C(!1));
      },
      {
        deep: !0
      }
    ), Q(
      () => e.value,
      () => {
        s.transformY = 0, C(!1);
      },
      {
        deep: !0
      }
    ), ve(() => {
      C(!0);
    }), ce(Z(Z({}, he(s)), he(e)), {
      setRollerStyle: $,
      isHidden: w,
      roller: l,
      onTouchStart: k,
      onTouchMove: c,
      onTouchEnd: g,
      touchRollerStyle: v,
      touchTileStyle: y,
      setMove: N,
      stopMomentum: _,
      pxCheck: Ie,
      maskStyles: b
    });
  }
});
function Wf(e, t, n, s, l, a) {
  return u(), d("view", {
    class: "nut-picker__list",
    onTouchstart: t[1] || (t[1] = (...o) => e.onTouchStart && e.onTouchStart(...o)),
    onTouchmove: t[2] || (t[2] = (...o) => e.onTouchMove && e.onTouchMove(...o)),
    onTouchend: t[3] || (t[3] = (...o) => e.onTouchEnd && e.onTouchEnd(...o))
  }, [
    m("view", {
      ref: "roller",
      class: "nut-picker-roller",
      style: A(e.threeDimensional ? e.touchRollerStyle : e.touchTileStyle),
      onTransitionend: t[0] || (t[0] = (...o) => e.stopMomentum && e.stopMomentum(...o))
    }, [
      (u(!0), d(x, null, ie(e.column, (o, r) => {
        var i;
        return u(), d(x, {
          key: (i = o[e.fieldNames.value]) != null ? i : r
        }, [
          o && o[e.fieldNames.text] && e.threeDimensional ? (u(), d("view", {
            key: 0,
            class: M(["nut-picker-roller-item", { "nut-picker-roller-item-hidden": e.isHidden(r + 1) }]),
            style: A(e.setRollerStyle(r + 1))
          }, L(o[e.fieldNames.text]), 7)) : T("", !0),
          o && o[e.fieldNames.text] && !e.threeDimensional ? (u(), d("view", {
            key: 1,
            class: "nut-picker-roller-item-tile",
            style: A({ height: e.pxCheck(e.optionHeight), lineHeight: e.pxCheck(e.optionHeight) })
          }, L(o[e.fieldNames.text]), 5)) : T("", !0)
        ], 64);
      }), 128))
    ], 36),
    m("view", {
      class: "nut-picker-roller-mask",
      style: A(e.maskStyles)
    }, null, 4)
  ], 32);
}
const Yf = /* @__PURE__ */ U(Ff, [["render", Wf]]), jf = {
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
}, { create: Uf } = Y("picker"), Kf = "NutPicker", Xf = Uf({
  components: {
    NutPickerColumn: Yf
  },
  props: jf,
  emits: ["cancel", "change", "confirm", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = ke(Kf), { changeHandler: s, confirm: l, defaultValues: a, columnsList: o, columnsType: r, columnFieldNames: i, cancel: p } = Hf(
      e,
      t
    ), f = z([]), v = (b) => {
      b && f.value.length < o.value.length && f.value.push(b);
    }, y = D(() => {
      const b = {};
      return b.height = `${+e.visibleOptionNum * +e.optionHeight}px`, b["--lineHeight"] = `${+e.optionHeight}px`, b;
    });
    return {
      columnsType: r,
      columnsList: o,
      columnFieldNames: i,
      cancel: p,
      changeHandler: s,
      confirmHandler: () => {
        f.value.length > 0 && f.value.forEach((b) => {
          b.stopMomentum();
        }), l();
      },
      defaultValues: a,
      translate: n,
      pickerColumn: f,
      swipeRef: v,
      columnStyle: y
    };
  }
}), qf = { class: "nut-picker" }, Zf = {
  key: 0,
  class: "nut-picker__bar"
}, Gf = { class: "nut-picker__title" };
function Jf(e, t, n, s, l, a) {
  const o = j("nut-picker-column");
  return u(), d("div", qf, [
    e.showToolbar ? (u(), d("view", Zf, [
      m("view", {
        class: "nut-picker__left",
        onClick: t[0] || (t[0] = (...r) => e.cancel && e.cancel(...r))
      }, L(e.cancelText || e.translate("cancel")), 1),
      m("view", Gf, L(e.title), 1),
      m("view", {
        class: "nut-picker__right",
        onClick: t[1] || (t[1] = (...r) => e.confirmHandler && e.confirmHandler(...r))
      }, L(e.okText || e.translate("confirm")), 1)
    ])) : T("", !0),
    I(e.$slots, "top"),
    m("view", {
      class: "nut-picker__column",
      style: A(e.columnStyle)
    }, [
      (u(!0), d(x, null, ie(e.columnsList, (r, i) => (u(), d("view", {
        key: i,
        class: "nut-picker__columnitem"
      }, [
        oe(o, {
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
const ho = /* @__PURE__ */ U(Xf, [["render", Jf]]), { create: Qf } = Y("date-picker"), Nn = (/* @__PURE__ */ new Date()).getFullYear();
function Ht(e) {
  return Go(e) && !isNaN(e.getTime());
}
const xf = {
  day: "日",
  year: "年",
  month: "月",
  hour: "时",
  minute: "分",
  seconds: "秒"
}, ep = Qf({
  components: {
    NutPicker: ho
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
      default: () => new Date(Nn - 10, 0, 1),
      validator: Ht
    },
    maxDate: {
      type: Date,
      default: () => new Date(Nn + 10, 11, 31),
      validator: Ht
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
    const n = ue({
      currentDate: /* @__PURE__ */ new Date(),
      title: e.title,
      selectedValue: []
    }), s = (c) => {
      Ht(c) || (c = e.minDate);
      let g = Math.max(c.getTime(), e.minDate.getTime());
      return g = Math.min(g, e.maxDate.getTime()), new Date(g);
    };
    function l(c, g) {
      return 32 - new Date(c, g - 1, 32).getDate();
    }
    const a = (c, g) => {
      const h = c == "min" ? e.minDate : e.maxDate, w = h.getFullYear();
      let B = 1, N = 1, E = 0, C = 0;
      c === "max" && (B = 12, N = l(g.getFullYear(), g.getMonth() + 1), E = 23, C = 59);
      let _ = C;
      return g.getFullYear() === w && (B = h.getMonth() + 1, g.getMonth() + 1 === B && (N = h.getDate(), g.getDate() === N && (E = h.getHours(), g.getHours() === E && (C = h.getMinutes(), g.getMinutes() === C && (_ = h.getSeconds()))))), {
        [`${c}Year`]: w,
        [`${c}Month`]: B,
        [`${c}Date`]: N,
        [`${c}Hour`]: E,
        [`${c}Minute`]: C,
        [`${c}Seconds`]: _
      };
    }, o = D(() => {
      const { maxYear: c, maxDate: g, maxMonth: h, maxHour: w, maxMinute: B, maxSeconds: N } = a("max", n.currentDate), { minYear: E, minDate: C, minMonth: _, minHour: S, minMinute: P, minSeconds: O } = a("min", n.currentDate);
      return b([
        {
          type: "year",
          range: [E, c]
        },
        {
          type: "month",
          range: [_, h]
        },
        {
          type: "day",
          range: [C, g]
        },
        {
          type: "hour",
          range: [S, w]
        },
        {
          type: "minute",
          range: [P, B]
        },
        {
          type: "seconds",
          range: [O, N]
        }
      ]);
    }), r = D(() => o.value.map((g, h) => f(g.range[0], g.range[1], v(g.type), g.type, h))), i = ({
      columnIndex: c,
      selectedValue: g,
      selectedOptions: h
    }) => {
      let w = [];
      g.forEach((_) => {
        w.push(_);
      }), e.type == "month-day" && w.length < 3 && w.unshift(new Date(n.currentDate || e.minDate || e.maxDate).getFullYear()), e.type == "year-month" && w.length < 3 && w.push(new Date(n.currentDate || e.minDate || e.maxDate).getDate());
      const B = Number(w[0]), N = Number(w[1]) - 1, E = Math.min(Number(w[2]), l(Number(w[0]), Number(w[1])));
      let C = null;
      if (e.type === "date" || e.type === "month-day" || e.type === "year-month")
        C = new Date(B, N, E);
      else if (e.type === "datetime")
        C = new Date(B, N, E, Number(w[3]), Number(w[4]));
      else if (e.type === "datehour")
        C = new Date(B, N, E, Number(w[3]));
      else if (e.type === "hour-minute" || e.type === "time") {
        C = new Date(n.currentDate);
        const _ = C.getFullYear(), S = C.getMonth(), P = C.getDate();
        C = new Date(_, S, P, Number(w[0]), Number(w[1]), Number(w[2] || 0));
      }
      n.currentDate = s(C), t("change", { columnIndex: c, selectedValue: g, selectedOptions: h });
    }, p = (c, g) => {
      const { formatter: h, isShowChinese: w } = e;
      let B = null;
      if (h)
        B = h(c, { text: qe(g, 2), value: qe(g, 2) });
      else {
        const N = qe(g, 2), E = w ? xf[c] : "";
        B = { text: N + E, value: N };
      }
      return B;
    }, f = (c, g, h, w, B) => {
      const N = [];
      let E = 0;
      for (; c <= g; )
        N.push(p(w, c)), w === "minute" ? c += e.minuteStep : c++, c <= Number(h) && E++;
      return n.selectedValue[B] = N[E].value, e.filter ? e.filter(w, N) : N;
    }, v = (c) => c === "year" ? n.currentDate.getFullYear() : c === "month" ? n.currentDate.getMonth() + 1 : c === "day" ? n.currentDate.getDate() : c === "hour" ? n.currentDate.getHours() : c === "minute" ? n.currentDate.getMinutes() : c === "seconds" ? n.currentDate.getSeconds() : 0, y = (c) => {
      t("cancel", c);
    }, $ = (c) => {
      t("confirm", c);
    }, b = (c) => {
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
    }, k = (c) => {
      const g = [
        c.getFullYear(),
        c.getMonth() + 1,
        c.getDate(),
        c.getHours(),
        c.getMinutes(),
        c.getSeconds()
      ];
      return b(g.map((h) => String(h)));
    };
    return En(() => {
      n.currentDate = s(e.modelValue);
    }), Q(
      () => e.modelValue,
      (c) => {
        const g = s(c);
        JSON.stringify(g) === JSON.stringify(n.currentDate) || (n.currentDate = g, n.selectedValue = k(g));
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
    ), ce(Z({}, he(n)), {
      changeHandler: i,
      closeHandler: y,
      confirm: $,
      columns: r
    });
  }
});
function tp(e, t, n, s, l, a) {
  const o = j("nut-picker");
  return u(), ee(o, {
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
    top: te(() => [
      I(e.$slots, "top")
    ]),
    default: te(() => [
      I(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["modelValue", "ok-text", "cancel-text", "columns", "title", "three-dimensional", "swipe-duration", "show-toolbar", "visible-option-num", "option-height", "onCancel", "onChange", "onConfirm"]);
}
const np = /* @__PURE__ */ U(ep, [["render", tp]]), { componentName: op, create: lp } = Y("input-number"), sp = lp({
  components: { Minus: va, Plus: Oa },
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
    const n = D(() => {
      const $ = op;
      return {
        [$]: !0,
        [`${$}--disabled`]: e.disabled
      };
    }), s = ($) => Number($).toFixed(Number(e.decimalPlaces)), l = ($) => {
      const b = $.target;
      t("update:modelValue", b.value, $), t("change", b.value, $);
    }, a = ($, b) => {
      let k = s($);
      t("update:modelValue", k, b), Number(e.modelValue) !== Number(k) && t("change", k, b);
    }, o = ($ = Number(e.modelValue)) => $ < Number(e.max) && !e.disabled, r = ($ = Number(e.modelValue)) => $ > Number(e.min) && !e.disabled, i = ($) => {
      if (e.disabled)
        return;
      t("reduce", $);
      let b = Number(e.modelValue) - Number(e.step);
      r() && b >= Number(e.min) ? a(b, $) : (a(Number(e.min), $), t("overlimit", $, "reduce"));
    }, p = ($) => {
      if (e.disabled)
        return;
      t("add", $);
      let b = Number(e.modelValue) + Number(e.step);
      o() && b <= Number(e.max) ? a(b, $) : (a(Number(e.max), $), t("overlimit", $, "add"));
    }, f = ($) => {
      e.disabled || e.readonly || t("focus", $);
    }, v = ($) => {
      if (e.disabled || e.readonly)
        return;
      let k = $.target.valueAsNumber;
      k < Number(e.min) ? k = Number(e.min) : k > Number(e.max) && (k = Number(e.max)), a(k, $), t("blur", $);
    }, y = ($) => {
      let b = Number($);
      return b < Number(e.min) ? b = Number(e.min) : b > Number(e.max) && (b = Number(e.max)), b;
    };
    return Q(
      () => [e.max, e.min],
      () => {
        Number(e.min) > Number(e.max) && console.warn("[NutUI] <InputNumber>", "props.max < props.min");
        const $ = y(e.modelValue);
        $ !== Number(e.modelValue) && a($, {});
      }
    ), {
      classes: n,
      change: l,
      blur: v,
      focus: f,
      add: p,
      addAllow: o,
      reduce: i,
      reduceAllow: r,
      pxCheck: Ie
    };
  }
}), ap = ["min", "max", "disabled", "readonly", "value"];
function rp(e, t, n, s, l, a) {
  const o = j("Minus"), r = j("Plus");
  return u(), d("view", {
    class: M(e.classes)
  }, [
    m("view", {
      class: M(["nut-input-number__icon nut-input-number__left", { "nut-input-number__icon--disabled": !e.reduceAllow() }]),
      onClick: t[0] || (t[0] = (...i) => e.reduce && e.reduce(...i))
    }, [
      I(e.$slots, "left-icon", {}, () => [
        oe(o, {
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
    }, null, 44, ap),
    m("view", {
      class: M(["nut-input-number__icon nut-input-number__right", { "nut-input-number__icon--disabled": !e.addAllow() }]),
      onClick: t[4] || (t[4] = (...i) => e.add && e.add(...i))
    }, [
      I(e.$slots, "right-icon", {}, () => [
        oe(r, {
          width: e.pxCheck(e.buttonSize),
          height: e.pxCheck(e.buttonSize)
        }, null, 8, ["width", "height"])
      ])
    ], 2)
  ], 2);
}
const on = /* @__PURE__ */ U(sp, [["render", rp]]);
function Dn(e, t, n) {
  const s = e.indexOf(t);
  return s === -1 ? e : t === "-" && s !== 0 ? e.slice(0, s) : e.slice(0, s + 1) + e.slice(s).replace(n, "");
}
function ip(e, t = !0, n = !0) {
  t ? e = Dn(e, ".", /\./g) : e = e.split(".")[0], n ? e = Dn(e, "-", /-/g) : e = e.replace(/-/, "");
  const s = t ? /[^-0-9.]/g : /[^-0-9]/g;
  return e.replace(s, "");
}
function up(e) {
  return e === "number" ? {
    type: "text",
    inputmode: "decimal"
  } : e === "digit" ? {
    type: "tel",
    inputmode: "numeric"
  } : { type: e };
}
const { componentName: cp, create: dp } = Y("input"), fp = dp({
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
  components: { MaskClose: pa },
  emits: ["update:modelValue", "blur", "focus", "clear", "keypress", "click", "clickInput", "confirm"],
  expose: ["focus", "blur", "select"],
  setup(e, { emit: t }) {
    const n = z(!1), s = z(), l = () => {
      var C;
      return String((C = e.modelValue) != null ? C : "");
    }, a = (C) => be("input", Z({}, up(C))), o = ue({
      focused: !1,
      validateFailed: !1,
      // 校验失败
      validateMessage: ""
      // 校验信息
    }), r = D(() => {
      const C = cp;
      return {
        [C]: !0,
        [`${C}--disabled`]: e.disabled,
        [`${C}--required`]: e.required,
        [`${C}--error`]: e.error,
        [`${C}--border`]: e.border,
        [e.class]: !!e.class
      };
    }), i = D(() => ({
      textAlign: e.inputAlign
    })), p = (C) => {
      if (!C.target.composing) {
        let S = C.target.value;
        e.maxLength && S.length > Number(e.maxLength) && (S = S.slice(0, Number(e.maxLength))), f(S);
      }
    }, f = (C, _ = "onChange") => {
      var S;
      if (["number", "digit"].includes(e.type)) {
        const P = e.type === "number";
        C = ip(C, P, P);
      }
      e.formatter && _ === e.formatTrigger && (C = e.formatter(C)), ((S = s == null ? void 0 : s.value) == null ? void 0 : S.value) !== C && (s.value.value = C), C !== e.modelValue && t("update:modelValue", C);
    }, v = (C) => {
      e.disabled || e.readonly || (n.value = !0, t("focus", C));
    }, y = (C) => {
      if (e.disabled || e.readonly)
        return;
      setTimeout(() => {
        n.value = !1;
      }, 200);
      let S = C.target.value;
      e.maxLength && S.length > Number(e.maxLength) && (S = S.slice(0, Number(e.maxLength))), f(l(), "onBlur"), t("blur", C);
    }, $ = (C) => {
      C.stopPropagation(), !e.disabled && (t("update:modelValue", "", C), t("clear", "", C));
    }, b = () => {
      o.validateFailed && (o.validateFailed = !1, o.validateMessage = "");
    }, k = (C) => {
      e.disabled || t("clickInput", C);
    }, c = (C) => {
      t("click", C);
    }, g = ({ target: C }) => {
      C.composing = !0;
    }, h = ({ target: C }) => {
      C.composing && (C.composing = !1, C.dispatchEvent(new Event("input")));
    };
    return Q(
      () => e.modelValue,
      () => {
        f(l()), b();
      }
    ), ve(() => {
      f(l(), e.formatTrigger);
    }), {
      renderInput: a,
      inputRef: s,
      active: n,
      classes: r,
      styles: i,
      onInput: p,
      onFocus: v,
      onBlur: y,
      clear: $,
      startComposing: g,
      endComposing: h,
      onClick: c,
      onClickInput: k,
      focus: () => {
        var C;
        (C = s.value) == null || C.focus();
      },
      blur: () => {
        var C;
        (C = s.value) == null || C.blur();
      },
      select: () => {
        var C;
        (C = s.value) == null || C.select();
      },
      onKeyup: (C) => {
        C.key === "Enter" && t("confirm", C);
      },
      getModelValue: l
    };
  }
}), pp = { class: "nut-input-value" }, mp = { class: "nut-input-inner" }, hp = {
  key: 0,
  class: "nut-input-left-box"
}, gp = { class: "nut-input-box" }, yp = {
  key: 0,
  class: "nut-input-word-limit"
}, vp = { class: "nut-input-word-num" }, $p = { class: "nut-input-right-box" };
function bp(e, t, n, s, l, a) {
  const o = j("MaskClose");
  return u(), d("view", {
    class: M(e.classes),
    onClick: t[1] || (t[1] = (...r) => e.onClick && e.onClick(...r))
  }, [
    m("view", pp, [
      m("view", mp, [
        e.$slots.left ? (u(), d("view", hp, [
          I(e.$slots, "left")
        ])) : T("", !0),
        m("view", gp, [
          (u(), ee(Ae(e.renderInput(e.type)), {
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
          e.showWordLimit && e.maxLength ? (u(), d("view", yp, [
            m("span", vp, L(e.getModelValue() ? e.getModelValue().length : 0), 1),
            ge("/" + L(e.maxLength), 1)
          ])) : T("", !0)
        ]),
        e.clearable && !e.readonly ? Ce((u(), d("view", {
          key: 1,
          class: "nut-input-clear-box",
          onClick: t[0] || (t[0] = (...r) => e.clear && e.clear(...r))
        }, [
          I(e.$slots, "clear", {}, () => [
            oe(o, vt({ class: "nut-input-clear" }, e.$attrs, {
              size: e.clearSize,
              width: e.clearSize,
              height: e.clearSize
            }), null, 16, ["size", "width", "height"])
          ])
        ], 512)), [
          [Ne, (e.active || e.showClearIcon) && e.getModelValue().length > 0]
        ]) : T("", !0),
        m("view", $p, [
          I(e.$slots, "right")
        ])
      ])
    ])
  ], 2);
}
const wp = /* @__PURE__ */ U(fp, [["render", bp]]), go = Symbol("nut-radio"), { componentName: Xe, create: kp } = Y("radio"), yo = kp({
  components: {
    CheckNormal: Ft,
    CheckChecked: yn
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
    const { size: n } = he(e);
    let s = Be(go, null);
    const l = D(() => s.label.value === e.label), a = D(() => e.disabled ? "nut-radio__icon--disable" : l.value ? "nut-radio__icon" : "nut-radio__icon--unchecked"), o = () => {
      const { iconSize: v } = e, y = {
        CheckNormal: t.icon ? t.icon : Ft,
        Checked: t.checkedIcon ? t.checkedIcon : yn
      }, $ = l.value ? y.Checked : y.CheckNormal, b = Ie(v);
      return be($, {
        width: b,
        height: b,
        class: a.value
      });
    }, r = () => {
      var v;
      return be(
        "view",
        {
          class: `${Xe}__label ${e.disabled ? `${Xe}__label--disabled` : ""}`
        },
        (v = t.default) == null ? void 0 : v.call(t)
      );
    }, i = () => {
      var v;
      return be(
        "view",
        {
          class: `${Xe}__button ${l.value && `${Xe}__button--active`} ${Xe}__button--${n.value} ${e.disabled ? `${Xe}__button--disabled` : ""}`
        },
        (v = t.default) == null ? void 0 : v.call(t)
      );
    }, p = () => {
      l.value || e.disabled || s.updateValue(e.label);
    }, f = D(() => s.position.value === "left");
    return () => be(
      "view",
      {
        class: `${Xe} ${Xe}--${e.shape} ${f.value ? `${Xe}--reverse` : ""}`,
        onClick: p
      },
      [e.shape === "button" ? i() : [o(), r()]]
    );
  }
}), { componentName: _n, create: Cp } = Y("radio-group"), vo = Cp({
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
    const s = (l) => t("update:modelValue", l);
    return Me(go, {
      label: hn(D(() => e.modelValue)),
      position: hn(D(() => e.textPosition)),
      updateValue: s
    }), Q(
      () => e.modelValue,
      (l) => t("change", l)
    ), () => {
      var l;
      return be(
        "view",
        {
          class: `${_n} ${_n}--${e.direction}`
        },
        (l = n.default) == null ? void 0 : l.call(n)
      );
    };
  }
}), { create: Sp } = Y("rate"), Tp = Sp({
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
      default: () => vn
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
  components: { StarFillN: vn },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t, slots: n }) {
    const s = z([]), l = (f) => {
      t("update:modelValue", f), t("change", f);
    }, a = (f, v) => {
      if (e.disabled || e.readonly)
        return;
      let y = 0;
      v === 1 && e.modelValue === v ? y = 0 : (y = v, e.allowHalf && f == 2 && (y -= 0.5)), l(y);
    }, o = (f, v, y) => {
      let $ = 0;
      for (let b = v.value.length - 1; b >= 0; b--) {
        const k = v.value[b];
        if (f > k.offsetLeft) {
          y ? $ = b + (f > k.offsetLeft + k.clientWidth / 2 ? 1 : 0.5) : $ = b + 1;
          break;
        }
      }
      return $;
    }, r = Ze(), i = {
      onTouchStart(f) {
        !e.touchable || e.readonly || r.start(f);
      },
      onTouchMove(f) {
        e.touchable && (r.move(f), r.isHorizontal() && s.value && (f.preventDefault(), l(o(r.moveX.value, s, e.allowHalf))));
      }
    }, p = Math.random().toString(36).slice(-8);
    return ce(Z({}, i), {
      onClick: a,
      pxCheck: Ie,
      rateRefs: s,
      refRandomId: p,
      renderIcon: ut,
      slots: n
    });
  }
}), Np = ["id"], Dp = { class: "nut-rate-item__icon--full" }, _p = {
  key: 0,
  class: "nut-rate-item__icon--half"
}, Ip = {
  key: 1,
  class: "nut-rate-item__icon--half"
};
function Bp(e, t, n, s, l, a) {
  return u(), d("view", {
    class: "nut-rate",
    onTouchstart: t[0] || (t[0] = (...o) => e.onTouchStart && e.onTouchStart(...o)),
    onTouchmove: t[1] || (t[1] = (...o) => e.onTouchMove && e.onTouchMove(...o))
  }, [
    (u(!0), d(x, null, ie(Number(e.count), (o) => (u(), d("view", {
      id: "rateRefs-" + e.refRandomId + o,
      key: o,
      ref_for: !0,
      ref: "rateRefs",
      class: "nut-rate-item",
      style: A(o < Number(e.count) ? { marginRight: e.pxCheck(e.spacing) } : {})
    }, [
      m("view", Dp, [
        (u(), ee(Ae(
          e.renderIcon(e.customIcon, {
            width: e.size,
            height: e.size,
            size: e.size,
            color: o <= Number(e.modelValue) ? e.activeColor : e.voidColor
          })
        ), {
          class: M(["nut-rate-item__icon", { "nut-rate-item__icon--disabled": e.disabled || o > Number(e.modelValue) }]),
          onClick: (r) => e.onClick(1, o)
        }, null, 8, ["class", "onClick"]))
      ]),
      e.allowHalf && Number(e.modelValue) + 1 > o ? (u(), d("view", _p, [
        (u(), ee(Ae(
          e.renderIcon(e.customIcon, {
            width: e.size,
            height: e.size,
            size: e.size,
            color: o <= Number(e.modelValue) + 1 ? e.activeColor : e.voidColor
          })
        ), {
          class: "nut-rate-item__icon",
          onClick: (r) => e.onClick(2, o)
        }, null, 8, ["onClick"]))
      ])) : e.allowHalf && Number(e.modelValue) + 1 < o ? (u(), d("view", Ip, [
        (u(), ee(Ae(e.renderIcon(e.customIcon, { width: e.size, height: e.size, size: e.size, color: e.voidColor })), {
          class: "nut-rate-item__icon nut-rate-item__icon--disabled",
          onClick: (r) => e.onClick(2, o)
        }, null, 8, ["onClick"]))
      ])) : T("", !0)
    ], 12, Np))), 128))
  ], 32);
}
const $o = /* @__PURE__ */ U(Tp, [["render", Bp]]), { create: Mp } = Y("short-password"), Lp = "NutShortPassword", Ep = Mp({
  components: {
    NutPopup: Le,
    Tips: Un
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
    const n = ke(Lp), s = z(e.modelValue), l = D(() => i(Number(e.length))), a = z(e.visible), o = (f) => {
      f.stopPropagation(), t("focus");
    };
    Q(
      () => e.visible,
      (f) => {
        a.value = f;
      }
    ), Q(
      () => e.modelValue,
      (f) => {
        s.value = f, String(f).length === l.value && t("complete", f);
      }
    );
    const r = () => {
      t("update:visible", !1), t("close");
    }, i = (f) => Math.min(Math.max(4, f), 6);
    return {
      comLen: l,
      realInput: s,
      onTouchStart: o,
      range: i,
      close: r,
      onTips: () => {
        t("tips");
      },
      show: a,
      translate: n
    };
  }
}), Pp = { class: "nut-short-password-title" }, Ap = { class: "nut-short-password-subtitle" }, zp = { class: "nut-short-password-wrapper" }, Vp = {
  key: 0,
  class: "nut-short-password__item-icon"
}, Op = { class: "nut-short-password__message" }, Hp = { class: "nut-short-password--error" }, Rp = {
  key: 0,
  class: "nut-short-password--forget"
};
function Fp(e, t, n, s, l, a) {
  const o = j("tips"), r = j("nut-popup");
  return u(), d("view", null, [
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
      default: te(() => [
        m("view", Pp, L(e.title || e.translate("title")), 1),
        m("view", Ap, L(e.desc || e.translate("desc")), 1),
        m("div", zp, [
          m("view", {
            class: "nut-short-password__list",
            onTouchstart: t[0] || (t[0] = (...i) => e.onTouchStart && e.onTouchStart(...i))
          }, [
            (u(!0), d(x, null, ie(new Array(e.comLen), (i, p) => (u(), d("view", {
              key: p,
              class: "nut-short-password__item"
            }, [
              String(e.realInput).length > p ? (u(), d("view", Vp)) : T("", !0)
            ]))), 128))
          ], 32)
        ]),
        m("view", Op, [
          m("view", Hp, L(e.errorMsg), 1),
          e.tips || e.translate("tips") ? (u(), d("view", Rp, [
            oe(o, {
              class: "icon",
              width: "11px",
              height: "11px"
            }),
            m("view", {
              onClick: t[1] || (t[1] = (...i) => e.onTips && e.onTips(...i))
            }, L(e.tips || e.translate("tips")), 1)
          ])) : T("", !0)
        ])
      ]),
      _: 1
    }, 8, ["visible", "close-on-click-overlay", "lock-scroll", "onClickCloseIcon", "onClickOverlay"])
  ]);
}
const Wp = /* @__PURE__ */ U(Ep, [["render", Fp]]), { create: Yp } = Y("textarea"), jp = "NutTextarea", Up = Yp({
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
    const n = ke(jp), s = z(), l = D(() => {
      const $ = "nut-textarea";
      return {
        [$]: !0,
        [`${$}--disabled`]: e.disabled
      };
    });
    ve(() => {
      e.modelValue && r(String(e.modelValue)), e.autosize && Te(o);
    });
    const a = D(() => ({
      textAlign: e.textAlign
      // resize: props.autosize ? 'vertical' : 'none'
    })), o = () => {
      let $ = s.value;
      $.style.height = "auto";
      let b = $.scrollHeight;
      if (typeof e.autosize == "object") {
        const { maxHeight: k, minHeight: c } = e.autosize;
        k !== void 0 && (b = Math.min(b, k)), c !== void 0 && (b = Math.max(b, c));
      }
      b && ($.style.height = b + "px");
    };
    Q(
      () => e.modelValue,
      () => {
        e.autosize && Te(o);
      }
    );
    const r = ($, b) => {
      e.maxLength && $.length > Number(e.maxLength) && ($ = $.substring(0, Number(e.maxLength))), t("update:modelValue", $, b), t("change", $, b);
    };
    return {
      textareaRef: s,
      classes: l,
      styles: a,
      change: ($) => {
        if (!$.target.composing) {
          const b = $.target;
          let k = b.value;
          e.maxLength && k.length > Number(e.maxLength) && (k = k.slice(0, Number(e.maxLength))), r(b.value, $);
        }
      },
      focus: ($) => {
        e.disabled || e.readonly || t("focus", $);
      },
      blur: ($) => {
        if (e.disabled || e.readonly)
          return;
        let k = $.target.value;
        r(k, $), t("blur", { value: k, event: $ });
      },
      translate: n,
      startComposing: ({ target: $ }) => {
        $.composing = !0;
      },
      endComposing: ({ target: $ }) => {
        $.composing && ($.composing = !1, $.dispatchEvent(new Event("input")));
      }
    };
  }
}), Kp = ["rows", "disabled", "readonly", "value", "maxlength", "placeholder", "autofocus"], Xp = {
  key: 0,
  class: "nut-textarea__limit"
};
function qp(e, t, n, s, l, a) {
  return u(), d("view", {
    class: M(e.classes)
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
      onInput: t[0] || (t[0] = (...o) => e.change && e.change(...o)),
      onBlur: t[1] || (t[1] = (...o) => e.blur && e.blur(...o)),
      onFocus: t[2] || (t[2] = (...o) => e.focus && e.focus(...o)),
      onChange: t[3] || (t[3] = (...o) => e.endComposing && e.endComposing(...o)),
      onCompositionend: t[4] || (t[4] = (...o) => e.endComposing && e.endComposing(...o)),
      onCompositionstart: t[5] || (t[5] = (...o) => e.startComposing && e.startComposing(...o))
    }, null, 44, Kp),
    e.limitShow ? (u(), d("view", Xp, L(e.modelValue ? e.modelValue.length : 0) + "/" + L(e.maxLength), 1)) : T("", !0)
  ], 2);
}
const Zp = /* @__PURE__ */ U(Up, [["render", qp]]);
class Gp {
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
let Jp = class {
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
        (l) => {
          var a;
          (a = t.onProgress) == null || a.call(t, l, t);
        },
        !1
      ), n.onreadystatechange = () => {
        var l, a;
        n.readyState === 4 && (n.status == t.xhrState ? (l = t.onSuccess) == null || l.call(t, n.responseText, t) : (a = t.onFailure) == null || a.call(t, n.responseText, t));
      }, n.withCredentials = t.withCredentials, n.open(t.method, t.url, !0);
      for (const [l, a] of Object.entries(t.headers))
        n.setRequestHeader(l, a);
      (s = t.onStart) == null || s.call(t, t), t.beforeXhrUpload ? t.beforeXhrUpload(n, t) : n.send(t.formData);
    } else
      console.warn("浏览器不支持 XMLHttpRequest");
  }
};
class Qp {
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
const { create: xp } = Y("progress"), e1 = xp({
  components: { Checked: Fn },
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
    const t = !!et().default, n = D(() => {
      if (e.strokeWidth)
        return e.strokeWidth + "px";
    }), s = D(() => Number(e.percentage) >= 100 ? 100 : Number(e.percentage)), l = D(() => ({
      width: s.value + "%",
      background: e.strokeColor || ""
    })), a = D(() => ({
      color: e.textColor || ""
    }));
    return {
      height: n,
      percentage: s,
      bgStyle: l,
      textStyle: a,
      slotDefault: t
    };
  }
}), t1 = { class: "nut-progress" };
function n1(e, t, n, s, l, a) {
  const o = j("Checked");
  return u(), d("div", t1, [
    m("div", {
      class: M(["nut-progress-outer", [e.showText && !e.textInside ? "nut-progress-outer-part" : "", e.size ? "nut-progress-" + e.size : ""]]),
      style: A({ height: e.height })
    }, [
      m("div", {
        class: M(["nut-progress-inner", e.status === "active" ? "nut-active" : ""]),
        style: A(e.bgStyle)
      }, null, 6),
      e.showText && e.textInside && !e.slotDefault ? (u(), d("div", {
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
        }, L(e.percentage) + L(e.isShowPercentage ? "%" : ""), 5)
      ], 4)) : T("", !0),
      e.showText && e.textInside && e.slotDefault ? (u(), d("div", {
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
      ], 4)) : T("", !0)
    ], 6),
    e.showText && !e.textInside ? (u(), d("div", {
      key: 0,
      class: "nut-progress-text",
      style: A({ lineHeight: e.height })
    }, [
      e.status === "text" || e.status === "active" ? (u(), d("span", {
        key: 0,
        style: A(e.textStyle)
      }, L(e.percentage) + L(e.isShowPercentage ? "%" : ""), 5)) : e.status === "icon" ? I(e.$slots, "icon-name", { key: 1 }, () => [
        oe(o, {
          width: "15px",
          height: "15px",
          color: "#439422"
        })
      ]) : T("", !0)
    ], 4)) : T("", !0)
  ]);
}
const bo = /* @__PURE__ */ U(e1, [["render", n1]]), { create: o1 } = Y("uploader"), l1 = "NutUploader", s1 = o1({
  components: {
    NutProgress: bo,
    Photograph: Ea,
    Failure: jn,
    Loading: ot,
    Del: Wn,
    Link: Ys
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
    const n = ke(l1), s = z(e.fileList), l = z([]);
    Q(
      () => e.fileList,
      () => {
        s.value = e.fileList;
      }
    );
    const a = () => {
      let g = {
        class: "nut-uploader__input",
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        name: e.name,
        disabled: e.disabled
      };
      return e.capture && (g.capture = "camera", g.accept || (g.accept = "image/*")), be("input", g);
    }, o = (g) => {
      g.value = "";
    }, r = (g) => {
      t("fileItemClick", { fileItem: g });
    }, i = (g, h) => {
      const w = new Gp();
      w.url = e.url, w.formData = g.formData, w.timeout = e.timeout * 1, w.method = e.method, w.xhrState = e.xhrState, w.headers = e.headers, w.withCredentials = e.withCredentials, w.beforeXhrUpload = e.beforeXhrUpload;
      try {
        w.sourceFile = g.formData.get(e.name);
      } catch (N) {
        console.warn("[NutUI] <Uploader> formData.get(name)", N);
      }
      w.onStart = (N) => {
        g.status = "ready", g.message = n("readyUpload"), p(h), t("start", N);
      }, w.onProgress = (N, E) => {
        g.status = "uploading", g.message = n("uploading"), g.percentage = (N.loaded / N.total * 100).toFixed(0), t("progress", { event: N, option: E, percentage: g.percentage });
      }, w.onSuccess = (N, E) => {
        g.status = "success", g.message = n("success"), t("success", {
          responseText: N,
          option: E,
          fileItem: g
        }), t("update:fileList", s.value);
      }, w.onFailure = (N, E) => {
        g.status = "error", g.message = n("error"), t("failure", {
          responseText: N,
          option: E,
          fileItem: g
        });
      };
      let B = new Jp(w);
      e.autoUpload ? B.upload() : l.value.push(
        new Promise((N) => {
          N(B);
        })
      );
    }, p = (g = -1) => {
      g > -1 ? l.value.splice(g, 1) : (l.value = [], s.value = [], t("update:fileList", s.value));
    }, f = () => {
      Promise.all(l.value).then((g) => {
        g.forEach((h) => h.upload());
      });
    }, v = (g) => {
      g.forEach((h, w) => {
        const B = new FormData();
        for (const [E, C] of Object.entries(e.data))
          B.append(E, C);
        B.append(e.name, h);
        const N = ue(new Qp());
        if (N.name = h.name, N.status = "ready", N.type = h.type, N.formData = B, N.message = n("waitingUpload"), i(N, w), e.isPreview && h.type.includes("image")) {
          const E = new FileReader();
          E.onload = (C) => {
            N.url = C.target.result, s.value.push(N);
          }, E.readAsDataURL(h);
        } else
          s.value.push(N);
      });
    }, y = (g) => {
      const h = e.maximum * 1, w = e.maximize * 1, B = new Array();
      g = g.filter((E) => E.size > w ? (B.push(E), !1) : !0), B.length && t("oversize", B);
      let N = g.length + s.value.length;
      return N > h && g.splice(g.length - (N - h)), g;
    }, $ = (g, h) => {
      s.value.splice(h, 1), t("delete", {
        file: g,
        fileList: s.value,
        index: h
      });
    }, b = (g, h) => {
      p(h), Zt(e.beforeDelete, {
        args: [g, s.value],
        done: () => $(g, h)
      });
    }, k = (g) => {
      if (e.disabled)
        return;
      const h = g.target;
      let { files: w } = h;
      e.beforeUpload ? e.beforeUpload(w).then((B) => c(B)) : c(w), t("change", {
        fileList: s.value,
        event: g
      }), e.clearInput && o(h);
    }, c = (g) => {
      const h = y(new Array().slice.call(g));
      v(h);
    };
    return {
      onChange: k,
      onDelete: b,
      fileList: s,
      fileItemClick: r,
      clearUploadQueue: p,
      submit: f,
      renderInput: a
    };
  }
}), a1 = { class: "nut-uploader" }, r1 = {
  key: 0,
  class: "nut-uploader__slot"
}, i1 = {
  key: 0,
  class: "nut-uploader__preview-img"
}, u1 = {
  key: 0,
  class: "nut-uploader__preview__progress"
}, c1 = { class: "nut-uploader__preview__progress__msg" }, d1 = ["onClick"], f1 = ["src", "onClick"], p1 = {
  key: 3,
  class: "nut-uploader__preview-img__file"
}, m1 = ["onClick"], h1 = { class: "file__name_tips" }, g1 = { class: "tips" }, y1 = {
  key: 1,
  class: "nut-uploader__preview-list"
}, v1 = ["onClick"], $1 = { class: "file__name_tips" };
function b1(e, t, n, s, l, a) {
  const o = j("Failure"), r = j("Loading"), i = j("Link"), p = j("Del"), f = j("nut-progress"), v = j("Photograph");
  return u(), d("view", a1, [
    e.$slots.default ? (u(), d("view", r1, [
      I(e.$slots, "default"),
      Number(e.maximum) - e.fileList.length ? (u(), ee(Ae(e.renderInput), {
        key: 0,
        onChange: e.onChange
      }, null, 40, ["onChange"])) : T("", !0)
    ])) : T("", !0),
    (u(!0), d(x, null, ie(e.fileList, (y, $) => {
      var b;
      return u(), d("view", {
        key: y.uid,
        class: M(["nut-uploader__preview", [e.listType]])
      }, [
        e.listType == "picture" && !e.$slots.default ? (u(), d("view", i1, [
          y.status != "success" ? (u(), d("view", u1, [
            y.status != "ready" ? (u(), d(x, { key: 0 }, [
              y.status == "error" ? (u(), ee(o, {
                key: 0,
                color: "#fff"
              })) : (u(), ee(r, {
                key: 1,
                name: "loading",
                color: "#fff"
              }))
            ], 64)) : T("", !0),
            m("view", c1, L(y.message), 1)
          ])) : T("", !0),
          e.isDeletable ? (u(), d("view", {
            key: 1,
            class: "close",
            onClick: (k) => e.onDelete(y, $)
          }, [
            I(e.$slots, "delete-icon", {}, () => [
              oe(o)
            ])
          ], 8, d1)) : T("", !0),
          (b = y == null ? void 0 : y.type) != null && b.includes("image") && y.url ? (u(), d("img", {
            key: 2,
            class: "nut-uploader__preview-img__c",
            src: y.url,
            onClick: (k) => e.fileItemClick(y)
          }, null, 8, f1)) : (u(), d("view", p1, [
            m("view", {
              class: "nut-uploader__preview-img__file__name",
              onClick: (k) => e.fileItemClick(y)
            }, [
              m("view", h1, L(y.name), 1)
            ], 8, m1)
          ])),
          m("view", g1, L(y.name), 1)
        ])) : e.listType == "list" ? (u(), d("view", y1, [
          m("view", {
            class: M(["nut-uploader__preview-img__file__name", [y.status]]),
            onClick: (k) => e.fileItemClick(y)
          }, [
            oe(i, { class: "nut-uploader__preview-img__file__link" }),
            m("view", $1, L(y.name), 1),
            e.isDeletable ? (u(), ee(p, {
              key: 0,
              color: "#808080",
              class: "nut-uploader__preview-img__file__del",
              onClick: (k) => e.onDelete(y, $)
            }, null, 8, ["onClick"])) : T("", !0)
          ], 10, v1),
          y.status == "uploading" ? (u(), ee(f, {
            key: 0,
            size: "small",
            percentage: y.percentage,
            "stroke-color": "linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)",
            "show-text": !1
          }, null, 8, ["percentage"])) : T("", !0)
        ])) : T("", !0)
      ], 2);
    }), 128)),
    e.listType == "picture" && !e.$slots.default && Number(e.maximum) - e.fileList.length ? (u(), d("view", {
      key: 1,
      class: M(["nut-uploader__upload", [e.listType]])
    }, [
      I(e.$slots, "upload-icon", {}, () => [
        oe(v, { color: "#808080" })
      ]),
      (u(), ee(Ae(e.renderInput), { onChange: e.onChange }, null, 40, ["onChange"]))
    ], 2)) : T("", !0)
  ]);
}
const w1 = /* @__PURE__ */ U(s1, [["render", b1]]), { create: k1 } = Y("number-keyboard"), C1 = "NutNumberKeyboard", S1 = k1({
  components: {
    NutPopup: Le
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
    const n = ke(C1), s = z(void 0), l = z(e.visible), a = z();
    function o() {
      const { customKey: c } = e;
      let g = {
        id: "lock",
        type: "lock"
      }, h = Array.isArray(c) ? c : [c];
      return h.length === 1 && (g = {
        id: h[0],
        type: "custom"
      }), [...r(), g, { id: 0, type: "number" }, { id: "delete", type: "delete" }];
    }
    function r() {
      const c = [];
      for (let g = 1; g <= 9; g++)
        c.push({ id: g, type: "number" });
      return e.randomKeys ? c.sort(() => Math.random() > 0.5 ? 1 : -1) : c;
    }
    function i() {
      const c = r(), { customKey: g } = e;
      let h = Array.isArray(g) ? g : [g];
      return h.length > 2 && (h = [h[0], h[1]]), h.length == 2 && e.title && e.type != "rightColumn" && (h = [h[0]]), h.length === 1 ? e.title && e.type != "rightColumn" ? c.push({ id: h[0], type: "custom" }, { id: 0, type: "number" }, { id: "delete", type: "delete" }) : c.push({ id: 0, type: "number" }, { id: h[0], type: "custom" }) : h.length === 2 && c.push(
        { id: h[0], type: "custom" },
        { id: 0, type: "number" },
        { id: h[1], type: "custom" }
      ), c;
    }
    const p = D(() => e.type == "rightColumn" || e.title != "" ? i() : o()), f = () => {
      e.visible && t("blur");
    }, v = (c) => {
      const g = a.value;
      g && !g.contains(c.target) && f();
    };
    Q(
      () => e.visible,
      (c) => {
        l.value = c, c ? window.addEventListener("touchstart", v, !1) : window.removeEventListener("touchstart", v, !1);
      }
    );
    function y(c, g) {
      g.stopPropagation(), s.value = c.id, (c.type == "number" || c.type == "custom") && (t("input", c.id), e.modelValue.length < +e.maxlength && t("update:modelValue", e.modelValue + c.id)), c.type == "lock" && k(), c.type == "delete" && (t("delete"), t("update:modelValue", e.modelValue.slice(0, e.modelValue.length - 1)));
    }
    function $(c) {
      c.stopPropagation();
    }
    function b(c) {
      c.preventDefault(), s.value = void 0;
    }
    function k() {
      t("update:visible", !1), t("close");
    }
    return {
      clickKeyIndex: s,
      defaultKey: o,
      closeBoard: k,
      onTouchEnd: b,
      onTouchMove: $,
      onTouchstart: y,
      keysList: p,
      genCustomKeys: i,
      getBasicKeys: r,
      root: a,
      show: l,
      translate: n
    };
  }
}), T1 = { ref: "root" }, N1 = { class: "nut-number-keyboard" }, D1 = {
  key: 0,
  class: "nut-number-keyboard__header"
}, _1 = { class: "nut-number-keyboard__title" }, I1 = { class: "nut-number-keyboard__body" }, B1 = { class: "nut-number-keyboard__keys" }, M1 = ["onTouchstart"], L1 = {
  key: 1,
  src: "https://img11.360buyimg.com/imagetools/jfs/t1/146371/38/8485/738/5f606425Eca239740/14f4b4f5f20d8a68.png"
}, E1 = {
  key: 2,
  src: "https://img11.360buyimg.com/imagetools/jfs/t1/129395/8/12735/2030/5f61ac37E70cab338/fb477dc11f46056c.png"
}, P1 = {
  key: 0,
  class: "nut-number-keyboard__sidebar"
}, A1 = { class: "nut-key__wrapper" }, z1 = /* @__PURE__ */ m("img", { src: "https://img11.360buyimg.com/imagetools/jfs/t1/129395/8/12735/2030/5f61ac37E70cab338/fb477dc11f46056c.png" }, null, -1), V1 = [
  z1
];
function O1(e, t, n, s, l, a) {
  const o = j("nut-popup");
  return u(), d("div", T1, [
    oe(o, {
      visible: e.show,
      "onUpdate:visible": t[7] || (t[7] = (r) => e.show = r),
      position: "bottom",
      "pop-class": e.popClass,
      overlay: !1,
      "lock-scroll": e.lockScroll,
      "teleport-disable": !1
    }, {
      default: te(() => [
        m("div", N1, [
          e.title ? (u(), d("div", D1, [
            m("h3", _1, L(e.title), 1),
            e.type == "default" ? (u(), d("span", {
              key: 0,
              class: "nut-number-keyboard__close",
              onClick: t[0] || (t[0] = (r) => e.closeBoard())
            }, L(e.translate("done")), 1)) : T("", !0)
          ])) : T("", !0),
          m("div", I1, [
            m("div", B1, [
              (u(!0), d(x, null, ie(e.keysList, (r) => (u(), d("div", {
                key: "key" + r.id,
                class: M([
                  "nut-key__wrapper",
                  {
                    "nut-key__wrapper--wider": r.id == 0 && e.type == "rightColumn" && Array.isArray(e.customKey) && e.customKey.length == 1
                  }
                ])
              }, [
                m("div", {
                  class: M([
                    "nut-key",
                    { "nut-key--active": r.id == e.clickKeyIndex },
                    { "nut-key--lock": r.type == "lock" },
                    { "nut-key--delete": r.type == "delete" }
                  ]),
                  onTouchstart: (i) => e.onTouchstart(r, i),
                  onTouchmove: t[1] || (t[1] = (i) => e.onTouchMove(i)),
                  onTouchend: t[2] || (t[2] = (i) => e.onTouchEnd(i))
                }, [
                  r.type == "number" || r.type == "custom" ? (u(), d(x, { key: 0 }, [
                    ge(L(r.id), 1)
                  ], 64)) : T("", !0),
                  r.type == "lock" ? (u(), d("img", L1)) : T("", !0),
                  r.type == "delete" ? (u(), d("img", E1)) : T("", !0)
                ], 42, M1)
              ], 2))), 128))
            ]),
            e.type == "rightColumn" ? (u(), d("div", P1, [
              m("div", A1, [
                m("div", {
                  class: M(["nut-key", { active: e.clickKeyIndex == "delete" }]),
                  onTouchstart: t[3] || (t[3] = (r) => e.onTouchstart({ id: "delete", type: "delete" }, r)),
                  onTouchmove: t[4] || (t[4] = (r) => e.onTouchMove(r)),
                  onTouchend: t[5] || (t[5] = (...r) => e.onTouchEnd && e.onTouchEnd(...r))
                }, V1, 34)
              ]),
              m("div", {
                class: "nut-key__wrapper nut-key__wrapper--finish",
                onClick: t[6] || (t[6] = (r) => e.closeBoard())
              }, [
                m("div", {
                  class: M(["nut-key", "nut-key--finish ", { activeFinsh: e.clickKeyIndex == "finish" }])
                }, L(e.confirmText || e.translate("done")), 3)
              ])
            ])) : T("", !0)
          ])
        ])
      ]),
      _: 1
    }, 8, ["visible", "pop-class", "lock-scroll"])
  ], 512);
}
const H1 = /* @__PURE__ */ U(S1, [["render", O1]]), wo = Symbol("nut-form"), R1 = (e) => ({
  props: {
    modelValue: {
      type: Object,
      default: () => ({})
    },
    rules: {
      type: Object,
      default: () => ({})
    },
    labelPosition: {
      type: String,
      default: "left"
    },
    starPosition: {
      type: String,
      default: "left"
    }
  },
  components: e,
  emits: ["validate"],
  setup(t, { emit: n }) {
    const { children: s, linkChildren: l } = Kn(wo);
    l({ props: t });
    const a = D(() => ue({}));
    Me("formErrorTip", a);
    const o = () => {
      Object.keys(a.value).forEach(($) => {
        a.value[$] = "";
      });
    }, r = () => {
      o();
    };
    Q(
      () => t.modelValue,
      () => {
        o();
      },
      { immediate: !0 }
    );
    const i = () => {
      const $ = [];
      return s.forEach((b) => {
        $.push({
          prop: b == null ? void 0 : b.prop,
          rules: (b == null ? void 0 : b.rules) || []
        });
      }), $;
    }, p = ($) => {
      $.message && n("validate", $), a.value[$.prop] = $.message;
    }, f = ($) => Ke(this, null, function* () {
      const { rules: b, prop: k } = $, c = (N) => new Promise((E, C) => {
        try {
          p(N), E(N);
        } catch (_) {
          C(_);
        }
      });
      k || console.warn("[NutUI] <FormItem> 使用 rules 校验规则时 , 必须设置 prop 参数");
      const g = Rt(t.modelValue, k || "");
      p({ prop: k, message: "" });
      const h = t.rules || {}, w = [...(h == null ? void 0 : h[k]) || [], ...b];
      for (; w.length; ) {
        const B = w.shift(), { validator: E } = B, C = Ot(B, ["validator"]), { required: _, regex: S, message: P } = C, O = { prop: k, message: P || "" };
        if (_ && !g && g !== 0 || S && !S.test(String(g)))
          return c(O);
        if (E) {
          const K = E(g, C);
          if (zn(K))
            try {
              if ((yield K) === !1)
                return c(O);
            } catch (G) {
              return c({ prop: k, message: G });
            }
          else if (!K)
            return c(O);
        }
      }
      return Promise.resolve(!0);
    }), v = ($ = "") => new Promise((b, k) => {
      try {
        const g = i().map((h) => $ && $ !== h.prop ? Promise.resolve(!0) : f(h));
        Promise.all(g).then((h) => {
          h = h.filter((B) => B !== !0);
          const w = { valid: !0, errors: [] };
          h.length && (w.valid = !1, w.errors = h), b(w);
        });
      } catch (c) {
        k(c);
      }
    });
    return { validate: v, reset: r, submit: () => (v(), !1), formErrorTip: a };
  }
}), { create: F1 } = Y("form"), W1 = F1(
  R1({
    NutCellGroup: Zn
  })
);
function Y1(e, t, n, s, l, a) {
  const o = j("nut-cell-group");
  return u(), d("form", {
    class: "nut-form",
    action: "#",
    onSubmit: De(() => !1, ["prevent"])
  }, [
    oe(o, null, {
      default: te(() => [
        I(e.$slots, "default")
      ]),
      _: 3
    })
  ], 32);
}
const ko = /* @__PURE__ */ U(W1, [["render", Y1]]), { create: j1 } = Y("form-item"), U1 = j1({
  inheritAttrs: !1,
  props: {
    prop: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    rules: {
      type: Array,
      default: () => []
    },
    required: {
      type: Boolean,
      default: !1
    },
    showErrorMessage: {
      type: Boolean,
      default: !0
    },
    showErrorLine: {
      type: Boolean,
      default: !0
    },
    labelWidth: {
      type: [String, Number],
      default: ""
    },
    labelAlign: {
      type: String,
      default: ""
    },
    errorMessageAlign: {
      type: String,
      default: ""
    },
    bodyAlign: {
      type: String,
      default: ""
    },
    labelPosition: {
      type: String,
      default: ""
    },
    starPosition: {
      type: String,
      default: ""
    }
  },
  components: {
    NutCell: qn
  },
  setup(e, { slots: t }) {
    const { parent: n } = Xn(wo), s = D(() => {
      var $;
      const v = ($ = n.props) == null ? void 0 : $.rules;
      let y = !1;
      for (const b in v)
        Object.prototype.hasOwnProperty.call(v, b) && b === e.prop && Array.isArray(v[b]) && (y = v[b].some((k) => k.required));
      return e.required || e.rules.some((b) => b.required) || y;
    }), l = D(() => {
      const v = n.props.labelPosition, y = e.labelPosition ? e.labelPosition : v;
      return y !== "left" ? `nut-form-item__${y}` : "";
    }), a = D(() => {
      const v = n.props.starPosition, y = e.starPosition ? e.starPosition : v;
      return y !== "left" ? `nut-form-item__star-${y}` : "";
    }), o = Be("formErrorTip"), r = D(() => ({
      width: Ie(e.labelWidth),
      textAlign: e.labelAlign
    })), i = D(() => ({
      textAlign: e.bodyAlign
    })), p = D(() => ({
      textAlign: e.errorMessageAlign
    }));
    return {
      parent: o,
      labelStyle: r,
      bodyStyle: i,
      errorMessageStyle: p,
      getSlots: (v) => t[v],
      isRequired: s,
      labelPositionClass: l,
      starPositionClass: a
    };
  }
}), K1 = { class: "nut-cell__value nut-form-item__body" };
function X1(e, t, n, s, l, a) {
  const o = j("nut-cell");
  return u(), ee(o, {
    class: M(["nut-form-item", [{ error: e.parent[e.prop], line: e.showErrorLine }, e.$attrs.class, e.labelPositionClass]]),
    style: A(e.$attrs.style)
  }, {
    default: te(() => [
      e.label || e.getSlots("label") ? (u(), d("view", {
        key: 0,
        class: M(["nut-cell__title nut-form-item__label", { required: e.isRequired, [e.starPositionClass]: e.starPositionClass }]),
        style: A(e.labelStyle)
      }, [
        I(e.$slots, "label", {}, () => [
          ge(L(e.label), 1)
        ])
      ], 6)) : T("", !0),
      m("view", K1, [
        m("view", {
          class: "nut-form-item__body__slots",
          style: A(e.bodyStyle)
        }, [
          I(e.$slots, "default")
        ], 4),
        e.parent[e.prop] && e.showErrorMessage ? (u(), d("view", {
          key: 0,
          class: "nut-form-item__body__tips",
          style: A(e.errorMessageStyle)
        }, L(e.parent[e.prop]), 5)) : T("", !0)
      ])
    ]),
    _: 3
  }, 8, ["class", "style"]);
}
const Co = /* @__PURE__ */ U(U1, [["render", X1]]), So = Symbol("nut-swipe"), { create: q1 } = Y("swipe"), Z1 = q1({
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
    const n = (B) => {
      var N;
      return ((N = B.value) == null ? void 0 : N.getBoundingClientRect().width) || 0;
    }, s = z(!1), l = z(), a = D(() => n(l)), o = z(), r = D(() => n(o)), i = Be(So, null);
    Q(
      () => {
        var B;
        return (B = i == null ? void 0 : i.name) == null ? void 0 : B.value;
      },
      (B) => {
        e.name !== B && i && i.lock && b();
      }
    );
    const p = z(!1);
    let f = "", v = "";
    const y = ue({
      offset: 0,
      moving: !1
    }), $ = (B = "") => {
      i && i.update(e.name), p.value = !0, B && (y.offset = B === "left" ? -r.value : a.value), t("open", {
        name: e.name,
        position: f || B
      });
    }, b = () => {
      y.offset = 0, p.value && (p.value = !1, t("close", {
        name: e.name,
        position: f
      }));
    }, k = (B, N, E) => {
      E ? B.stopPropagation() : b(), t("click", N);
    }, c = D(() => ({
      transform: `translate3d(${y.offset}px, 0, 0)`
    })), g = (B) => {
      f = B > 0 ? "right" : "left";
      let N = B;
      switch (f) {
        case "left":
          p.value && v === f ? N = -r.value : N = Math.abs(B) > r.value ? -r.value : B;
          break;
        case "right":
          p.value && v === f ? N = a.value : N = Math.abs(B) > a.value ? a.value : B;
          break;
      }
      y.offset = N;
    }, h = Ze();
    return ce(Z({
      touchStyle: c
    }, {
      onTouchStart(B) {
        e.disabled || h.start(B);
      },
      onTouchMove(B) {
        e.disabled || (h.move(B), h.isHorizontal() && (s.value = !0, y.moving = !0, g(h.deltaX.value), e.touchMovePreventDefault && B.preventDefault(), e.touchMoveStopPropagation && B.stopPropagation()));
      },
      onTouchEnd() {
        if (y.moving) {
          switch (y.moving = !1, v = f, f) {
            case "left":
              Math.abs(y.offset) <= r.value / 2 ? b() : (y.offset = -r.value, $());
              break;
            case "right":
              Math.abs(y.offset) <= a.value / 2 ? b() : (y.offset = a.value, $());
              break;
          }
          setTimeout(() => {
            s.value = !1;
          }, 0);
        }
      }
    }), {
      leftRef: l,
      rightRef: o,
      open: $,
      close: b,
      onClick: k,
      lockClick: s
    });
  }
});
function G1(e, t, n, s, l, a) {
  return u(), d("view", {
    class: "nut-swipe",
    style: A(e.touchStyle),
    onTouchstart: t[3] || (t[3] = (...o) => e.onTouchStart && e.onTouchStart(...o)),
    onTouchmove: t[4] || (t[4] = (...o) => e.onTouchMove && e.onTouchMove(...o)),
    onTouchend: t[5] || (t[5] = (...o) => e.onTouchEnd && e.onTouchEnd(...o)),
    onTouchcancel: t[6] || (t[6] = (...o) => e.onTouchEnd && e.onTouchEnd(...o))
  }, [
    m("view", {
      ref: "leftRef",
      class: "nut-swipe__left",
      onClick: t[0] || (t[0] = (o) => e.onClick(o, "left", !0))
    }, [
      I(e.$slots, "left")
    ], 512),
    m("view", {
      class: "nut-swipe__content",
      onClick: t[1] || (t[1] = (o) => e.onClick(o, "content", e.lockClick))
    }, [
      I(e.$slots, "default")
    ]),
    m("view", {
      ref: "rightRef",
      class: "nut-swipe__right",
      onClick: t[2] || (t[2] = (o) => e.onClick(o, "right", !0))
    }, [
      I(e.$slots, "right")
    ], 512)
  ], 36);
}
const To = /* @__PURE__ */ U(Z1, [["render", G1]]), { create: J1 } = Y("swipe-group"), Q1 = J1({
  props: {
    lock: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = z(null), n = z("");
    return Me(So, {
      update: (l) => {
        n.value = l;
      },
      lock: e.lock,
      name: n
    }), { swipeGroupRef: t };
  }
}), x1 = {
  ref: "swipeGroupRef",
  class: "nut-swipe-group"
};
function em(e, t, n, s, l, a) {
  return u(), d("div", x1, [
    I(e.$slots, "default")
  ], 512);
}
const tm = /* @__PURE__ */ U(Q1, [["render", em]]), { create: nm } = Y("action-sheet"), om = nm({
  components: {
    NutPopup: Le,
    Loading: ot
  },
  props: ce(Z({}, Ct), {
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
      slotDefault: !!et().default,
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
}), lm = { class: "nut-action-sheet" }, sm = {
  key: 0,
  class: "nut-action-sheet__title"
}, am = { key: 1 }, rm = {
  key: 0,
  class: "nut-action-sheet__item nut-action-sheet__desc"
}, im = {
  key: 1,
  class: "nut-action-sheet__menu"
}, um = ["onClick"], cm = { key: 1 }, dm = { class: "nut-action-sheet__subdesc" };
function fm(e, t, n, s, l, a) {
  const o = j("Loading"), r = j("nut-popup");
  return u(), ee(r, {
    visible: e.visible,
    position: "bottom",
    round: "",
    "close-on-click-overlay": e.closeAbled,
    "lock-scroll": e.lockScroll,
    "z-index": e.zIndex,
    onClickOverlay: e.close
  }, {
    default: te(() => [
      m("view", lm, [
        e.title ? (u(), d("view", sm, L(e.title), 1)) : T("", !0),
        I(e.$slots, "default"),
        e.slotDefault ? T("", !0) : (u(), d("view", am, [
          e.description ? (u(), d("view", rm, L(e.description), 1)) : T("", !0),
          e.menuItems.length ? (u(), d("view", im, [
            (u(!0), d(x, null, ie(e.menuItems, (i, p) => (u(), d("view", {
              key: p,
              class: M(["nut-action-sheet__item", {
                "nut-action-sheet__item--disabled": i.disable,
                "nut-action-sheet__item--loading": i.loading
              }]),
              style: A({ color: e.isHighlight(i) || i.color }),
              onClick: (f) => e.chooseItem(i, p)
            }, [
              i.loading ? (u(), ee(o, { key: 0 })) : (u(), d("view", cm, L(i[e.optionTag]), 1)),
              m("view", dm, L(i[e.optionSubTag]), 1)
            ], 14, um))), 128))
          ])) : T("", !0),
          e.cancelTxt ? (u(), d("view", {
            key: 2,
            class: "nut-action-sheet__cancel",
            onClick: t[0] || (t[0] = (...i) => e.cancelActionSheet && e.cancelActionSheet(...i))
          }, L(e.cancelTxt), 1)) : T("", !0)
        ]))
      ])
    ]),
    _: 3
  }, 8, ["visible", "close-on-click-overlay", "lock-scroll", "z-index", "onClickOverlay"]);
}
const pm = /* @__PURE__ */ U(om, [["render", fm]]), { componentName: mm, create: hm } = Y("backtop"), gm = hm({
  components: {
    Top: Mr
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
    const n = ue({
      backTop: !1,
      scrollTop: 0,
      scrollEl: window,
      startTime: 0,
      keepAlive: !1
    }), s = D(() => ({
      [mm]: !0,
      show: n.backTop
    })), l = D(() => ({
      right: `${e.right}px`,
      bottom: `${e.bottom}px`,
      zIndex: e.zIndex
    }));
    function a() {
      n.scrollEl instanceof Window ? n.scrollTop = n.scrollEl.pageYOffset : n.scrollTop = n.scrollEl.scrollTop, n.backTop = n.scrollTop >= e.distance;
    }
    function o(y = 0) {
      n.scrollEl instanceof Window ? window.scrollTo(0, y) : n.scrollEl.scrollTop = y;
    }
    function r() {
      let y = Ve(function $() {
        var b = e.duration - Math.max(0, n.startTime - +/* @__PURE__ */ new Date() + e.duration), k = b * -n.scrollTop / e.duration + n.scrollTop;
        o(k), y = Ve($), (b == e.duration || k == 0) && kc(y);
      });
    }
    function i() {
      n.scrollEl.addEventListener("scroll", a, !1), n.scrollEl.addEventListener("resize", a, !1);
    }
    function p() {
      n.scrollEl.removeEventListener("scroll", a, !1), n.scrollEl.removeEventListener("resize", a, !1);
    }
    function f(y) {
      n.startTime = +/* @__PURE__ */ new Date(), e.isAnimation && e.duration > 0 ? r() : o(), t("click", y);
    }
    function v() {
      e.elId && document.getElementById(e.elId) && (n.scrollEl = document.getElementById(e.elId)), i();
    }
    return ve(() => {
      e.distance == 0 && (n.backTop = !0), v();
    }), je(() => {
      p();
    }), bt(() => {
      n.keepAlive && (n.keepAlive = !1, v());
    }), wt(() => {
      n.keepAlive = !0, p();
    }), {
      state: n,
      classes: s,
      style: l,
      click: f
    };
  }
});
function ym(e, t, n, s, l, a) {
  const o = j("Top");
  return u(), d("div", {
    class: M(e.classes),
    style: A(e.style),
    onClick: t[0] || (t[0] = De((...r) => e.click && e.click(...r), ["stop"]))
  }, [
    I(e.$slots, "default", {}, () => [
      oe(o, {
        width: "19px",
        height: "19px",
        class: "nut-backtop-main"
      })
    ])
  ], 6);
}
const vm = /* @__PURE__ */ U(gm, [["render", ym]]), { create: $m } = Y("drag"), bm = $m({
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
    const t = z(), n = ue({
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
    function l(p) {
      n.boundary.left ? +p.style.left.split("px")[0] > n.boundary.left ? (p.style.left = +p.style.left.split("px")[0] - 10 + "px", Ve(() => {
        l(p);
      })) : p.style.left = `${n.boundary.left}px` : +p.style.left.split("px")[0] > 10 ? (p.style.left = +p.style.left.split("px")[0] - 10 + "px", Ve(() => {
        l(p);
      })) : p.style.left = "0px";
    }
    function a(p, f) {
      f - parseInt(p.style.left.split("px")[0]) > 10 ? (p.style.left = parseInt(p.style.left.split("px")[0]) + 10 + "px", Ve(() => {
        a(p, f);
      })) : p.style.left = f + "px";
    }
    function o(p) {
      p.preventDefault();
      const f = p.currentTarget;
      if (p.targetTouches.length === 1) {
        const v = p.targetTouches[0];
        n.nx = v.clientX - n.position.x, n.ny = v.clientY - n.position.y, n.xPum = n.startLeft + n.nx, n.yPum = n.startTop + n.ny;
        const y = n.screenWidth - n.elWidth - n.boundary.right;
        Math.abs(n.xPum) > y ? n.xPum = y : n.xPum <= n.boundary.left && (n.xPum = n.boundary.left), n.yPum < n.boundary.top ? n.yPum = n.boundary.top : n.yPum > n.screenHeight - n.elHeight - n.boundary.bottom && (n.yPum = n.screenHeight - n.elHeight - n.boundary.bottom), e.direction != "y" && (f.style.left = n.xPum + "px"), e.direction != "x" && (f.style.top = n.yPum + "px");
      }
    }
    function r(p) {
      const f = p.currentTarget;
      let y = p.changedTouches[0].clientX;
      const $ = n.screenWidth - n.elWidth - n.boundary.right;
      y > $ ? y = $ : y < n.boundary.left ? y = n.boundary.left : y = y < n.screenWidth / 2 ? n.boundary.left : $, e.direction != "y" && e.attract && (y < n.screenWidth / 2 ? Ve(() => {
        l(f);
      }) : Ve(() => {
        a(f, $);
      })), e.direction != "x" && (f.style.top = n.yPum + "px");
    }
    function i(p) {
      const f = p.currentTarget, v = p.touches[0], y = p.targetTouches[0];
      n.startTop = f.offsetTop, n.startLeft = f.offsetLeft, n.position.x = v.clientX, n.position.y = v.clientY, n.nx = y.clientX - n.position.x, n.ny = y.clientY - n.position.y, n.xPum = n.startLeft + n.nx, n.yPum = n.startTop + n.ny;
    }
    return ve(() => {
      s(), n.boundary = e.boundary;
    }), bt(() => {
      n.keepAlive && (n.keepAlive = !1);
    }), wt(() => {
      n.keepAlive = !0, t.value.removeEventListener("touchstart", i), t.value.removeEventListener("touchmove", o), t.value.removeEventListener("touchend", r);
    }), {
      myDrag: t,
      touchStart: i,
      touchMove: o,
      touchEnd: r
    };
  }
});
function wm(e, t, n, s, l, a) {
  return u(), d("view", {
    ref: "myDrag",
    class: "nut-drag",
    onTouchstart: t[0] || (t[0] = (o) => e.touchStart(o)),
    onTouchmove: t[1] || (t[1] = (o) => e.touchMove(o)),
    onTouchend: t[2] || (t[2] = (o) => e.touchEnd(o))
  }, [
    I(e.$slots, "default")
  ], 544);
}
const km = /* @__PURE__ */ U(bm, [["render", wm]]), { create: Cm } = Y("dialog"), Sm = "NutDialog", Tm = Cm({
  inheritAttrs: !1,
  components: {
    NutPopup: Le,
    NutButton: Ue
  },
  props: ce(Z({}, Ct), {
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
    const n = ke(Sm), s = z(e.visible);
    ve(() => {
      e.closeOnPopstate && window.addEventListener("popstate", function() {
        a("page");
      });
    }), Q(
      () => e.visible,
      (f) => {
        s.value = f, f && t("opened");
      }
    );
    const l = (f) => {
      t("update", f), t("update:visible", f);
    }, a = (f) => {
      Zt(e.beforeClose, {
        args: [f],
        done: () => {
          s.value = !1, l(!1), t("closed");
        }
      });
    }, o = () => {
      t("cancel"), e.cancelAutoClose && (s.value = !1, a("cancel"));
    }, r = () => {
      t("ok"), e.okAutoClose && a("ok");
    }, i = () => {
      e.closeOnClickOverlay && a("");
    }, p = D(() => ({
      textAlign: e.textAlign
    }));
    return {
      closed: a,
      onCancel: o,
      onOk: r,
      showPopup: s,
      onClickOverlay: i,
      contentStyle: p,
      translate: n
    };
  }
}), Nm = {
  key: 0,
  class: "nut-dialog__header"
}, Dm = ["innerHTML"];
function _m(e, t, n, s, l, a) {
  const o = j("nut-button"), r = j("nut-popup");
  return u(), ee(r, {
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
    default: te(() => [
      m("view", {
        class: M(["nut-dialog", e.customClass])
      }, [
        e.$slots.header || e.title ? (u(), d("view", Nm, [
          e.$slots.header ? I(e.$slots, "header", { key: 0 }) : (u(), d(x, { key: 1 }, [
            ge(L(e.title), 1)
          ], 64))
        ])) : T("", !0),
        m("view", {
          class: "nut-dialog__content",
          style: A(e.contentStyle)
        }, [
          e.$slots.default ? I(e.$slots, "default", { key: 0 }) : typeof e.content == "string" ? (u(), d("view", {
            key: 1,
            innerHTML: e.content
          }, null, 8, Dm)) : (u(), ee(Ae(e.content), { key: 2 }))
        ], 4),
        e.noFooter ? T("", !0) : (u(), d("view", {
          key: 1,
          class: M(["nut-dialog__footer", { [e.footerDirection]: e.footerDirection }])
        }, [
          e.$slots.footer ? I(e.$slots, "footer", { key: 0 }) : (u(), d(x, { key: 1 }, [
            e.noCancelBtn ? T("", !0) : (u(), ee(o, {
              key: 0,
              size: "small",
              plain: "",
              type: "primary",
              class: "nut-dialog__footer-cancel",
              onClick: e.onCancel
            }, {
              default: te(() => [
                ge(L(e.cancelText || e.translate("cancel")), 1)
              ]),
              _: 1
            }, 8, ["onClick"])),
            e.noOkBtn ? T("", !0) : (u(), ee(o, {
              key: 1,
              size: "small",
              type: "primary",
              class: "nut-dialog__footer-ok",
              onClick: e.onOk
            }, {
              default: te(() => [
                ge(L(e.okText || e.translate("confirm")), 1)
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
const ln = /* @__PURE__ */ U(Tm, [["render", _m]]);
class Im {
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
class Bm {
  constructor(t) {
    V(this, "options", new Im());
    V(this, "instance");
    const n = Object.assign(this.options, t), { unmount: s } = tn(n, {
      name: "dialog",
      components: [Le, Ue, kt],
      wrapper: (l, a) => ({
        setup() {
          return n.onUpdate = (o) => {
            o === !1 && Te(() => {
              s();
            });
          }, n != null && n.onOpened && (n == null || n.onOpened()), n.teleport = `#${a.id}`, () => be(ln, n);
        }
      })
    });
  }
}
const Mm = function(e) {
  return new Bm(e);
};
Mm.install = (e) => {
  e.use(ln);
};
const { create: Lm } = Y("infinite-loading"), Em = "NutInfiniteLoading", Pm = Lm({
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
    Loading: ot
  },
  setup(e, { emit: t, slots: n }) {
    const s = ke(Em), l = z(), a = xn(l), o = ue({
      beforeScrollTop: 0,
      isInfiniting: !1,
      y: 0,
      x: 0,
      distance: 0
    }), r = ($) => $ ? $.offsetTop + r($.offsetParent) : 0, i = () => {
      let $ = 0, b = 0, k = "down";
      if (a.value == window) {
        const c = On();
        l.value && ($ = r(l.value) + l.value.offsetHeight - c - window.innerHeight), b = c;
      } else {
        const { scrollHeight: c, clientHeight: g, scrollTop: h } = a.value;
        $ = c - g - h, b = h;
      }
      return o.beforeScrollTop > b ? k = "up" : k = "down", o.beforeScrollTop = b, t("scrollChange", b), $ <= e.threshold && k == "down";
    }, p = () => {
      Ve(() => {
        if (!i() || !e.hasMore || o.isInfiniting)
          return !1;
        o.isInfiniting = !0, t("update:modelValue", !0), Te(() => t("loadMore"));
      });
    }, f = () => {
      a.value && a.value.addEventListener("scroll", p, e.useCapture);
    }, v = () => {
      a.value && a.value.removeEventListener("scroll", p, e.useCapture);
    };
    ve(() => {
      f();
    }), je(() => {
      v();
    });
    const y = z(!1);
    return bt(() => {
      y.value && (y.value = !1, f());
    }), wt(() => {
      y.value = !0, v();
    }), Q(
      () => e.modelValue,
      ($) => {
        $ || (o.isInfiniting = !1);
      }
    ), ce(Z({
      scroller: l
    }, he(o)), {
      translate: s,
      slots: n
    });
  }
}), Am = {
  ref: "scroller",
  class: "nut-infinite-loading"
}, zm = { class: "nut-infinite__container" }, Vm = { class: "nut-infinite__bottom" }, Om = {
  key: 0,
  class: "nut-infinite__bottom-box"
}, Hm = { class: "nut-infinite__bottom-box__text" }, Rm = { class: "nut-infinite__bottom-tips" };
function Fm(e, t, n, s, l, a) {
  const o = j("Loading");
  return u(), d("view", Am, [
    m("view", zm, [
      I(e.$slots, "default")
    ]),
    m("view", Vm, [
      e.isInfiniting ? (u(), d("view", Om, [
        I(e.$slots, "loading", {}, () => [
          I(e.$slots, "loading-icon", {}, () => [
            oe(o, { class: "nut-icon-loading nut-infinite__bottom-box__img" })
          ]),
          m("view", Hm, L(e.loadTxt || e.translate("loading")), 1)
        ])
      ])) : e.hasMore ? T("", !0) : I(e.$slots, "finished", { key: 1 }, () => [
        m("view", Rm, L(e.loadMoreTxt || e.translate("loadMoreTxt")), 1)
      ])
    ])
  ], 512);
}
const Wm = /* @__PURE__ */ U(Pm, [["render", Fm]]), { create: Ym } = Y("pull-refresh"), jm = "NutPullRefresh", Um = Ym({
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
  components: { Loading: ot },
  setup(e, { emit: t, slots: n }) {
    const s = ke(jm), l = Ze(), a = z(), o = xn(a), r = ue({
      isPullRefresh: !1,
      distance: 0,
      status: "normal"
    }), i = D(() => {
      switch (r.status) {
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
      transform: r.distance ? `translate3d(0,${r.distance}px, 0)` : ""
    })), f = D(() => {
      const h = {};
      return e.headHeight != 50 && (h.height = Ie(e.headHeight)), h;
    }), v = (h) => {
      const w = +(e.pullDistance || e.headHeight);
      let B = h;
      return h > w && (h < w * 2 ? B = (h + w) / 2 : B = w + h / 4), Math.round(B);
    }, y = (h, w, B) => {
      const N = +(e.pullDistance || e.headHeight);
      r.distance = h, w ? r.status = "loading" : B ? r.status = "complete" : h === 0 ? r.status = "normal" : h < N ? r.status = "pulling" : r.status = "loosing", t("change", { status: r.status, distance: h });
    }, $ = () => r.status !== "loading" && r.status !== "complete", b = () => o.value == window ? On() == 0 : o.value && o.value.scrollTop == 0, k = (h) => {
      $() && (b() ? (l.start(h), r.isPullRefresh = !0) : (r.distance = 0, r.isPullRefresh = !1));
    }, c = (h) => {
      if ($()) {
        l.move(h);
        const { deltaY: w } = l;
        l.isVertical() && w.value > 0 && r.isPullRefresh && (h.preventDefault(), y(v(w.value)));
      }
    }, g = () => {
      r.isPullRefresh && $() && l.deltaY.value && (r.status === "loosing" ? (y(+e.headHeight, !0), t("update:modelValue", !0), Te(() => t("refresh"))) : y(0)), setTimeout(() => {
        l.reset();
      }, 0);
    };
    return Q(
      () => e.modelValue,
      (h) => {
        h ? y(+e.headHeight, !0) : (e.completeDuration === 0 && y(0), y(+e.headHeight, !1, !0), setTimeout(() => {
          y(0);
        }, e.completeDuration));
      }
    ), ce(Z({
      scroller: a
    }, he(r)), {
      touchStart: k,
      touchMove: c,
      touchEnd: g,
      getStyle: p,
      translate: s,
      slots: n,
      getHeightStyle: f,
      getPullStatus: i
    });
  }
}), Km = { class: "nut-pull-refresh-container-topbox-text" };
function Xm(e, t, n, s, l, a) {
  const o = j("Loading");
  return u(), d("div", {
    ref: "scroller",
    class: "nut-pull-refresh",
    onTouchstart: t[0] || (t[0] = (...r) => e.touchStart && e.touchStart(...r)),
    onTouchmove: t[1] || (t[1] = (...r) => e.touchMove && e.touchMove(...r)),
    onTouchend: t[2] || (t[2] = (...r) => e.touchEnd && e.touchEnd(...r))
  }, [
    m("div", {
      class: "nut-pull-refresh-container",
      style: A(e.getStyle)
    }, [
      m("div", {
        class: "nut-pull-refresh-container-topbox",
        style: A(e.getHeightStyle)
      }, [
        e.status == "loading" && !e.slots.loading ? (u(), ee(o, {
          key: 0,
          class: "nut-icon-loading nut-pull-refresh-container-topbox-icon"
        })) : T("", !0),
        m("div", Km, L(e.getPullStatus), 1),
        e.status == "pulling" ? I(e.$slots, "pulling", { key: 1 }) : T("", !0),
        e.status == "loosing" ? I(e.$slots, "loosing", { key: 2 }) : T("", !0),
        e.status == "loading" ? I(e.$slots, "loading", { key: 3 }) : T("", !0),
        e.status == "complete" ? I(e.$slots, "complete", { key: 4 }) : T("", !0)
      ], 4),
      I(e.$slots, "default")
    ], 4)
  ], 544);
}
const qm = /* @__PURE__ */ U(Um, [["render", Xm]]), { create: Zm } = Y("notify"), Gm = Zm({
  components: {
    NutPopup: Le
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
    const l = () => {
      s && clearTimeout(s), s = null;
    }, a = () => {
      t("update:visible", !1);
    }, o = z(!1), r = Q(
      () => e.visible,
      (p) => {
        o.value = e.visible;
        const f = e.duration;
        p && f && (s = setTimeout(() => {
          a();
        }, f));
      },
      { immediate: !0 }
    );
    return { onAfterLeave: () => {
      l(), r && r(), e.unmount && e.unmount(e.id), e.onClose && e.onClose();
    }, clickCover: n, isShowPopup: o };
  }
});
function Jm(e, t, n, s, l, a) {
  const o = j("nut-popup");
  return u(), ee(o, {
    visible: e.isShowPopup,
    "onUpdate:visible": t[1] || (t[1] = (r) => e.isShowPopup = r),
    position: e.position,
    overlay: !1,
    "teleport-disable": e.teleportDisable
  }, {
    default: te(() => [
      m("div", {
        class: M(["nut-notify", `nut-notify--${e.type}`, e.className]),
        style: A({ color: e.color, background: e.background }),
        onClick: t[0] || (t[0] = (...r) => e.clickCover && e.clickCover(...r))
      }, [
        e.$slots.default ? I(e.$slots, "default", { key: 0 }) : (u(), d(x, { key: 1 }, [
          ge(L(e.msg), 1)
        ], 64))
      ], 6)
    ]),
    _: 3
  }, 8, ["visible", "position", "teleport-disable"]);
}
const Pt = /* @__PURE__ */ U(Gm, [["render", Jm]]), jt = {
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
let st = [], ht = [];
const No = (e) => {
  if (e) {
    const t = document.getElementById(e);
    ht = ht.filter((n) => n.id !== e), st = st.filter((n) => n !== e), t && document.body.removeChild(t);
  } else
    st.forEach((t) => {
      const n = document.getElementById(t);
      n && document.body.removeChild(n);
    }), ht = [], st = [];
}, Qm = (e) => {
  const t = document.getElementById(e.id);
  if (t) {
    const n = ht.find((l) => l.id === e.id);
    n ? e = Z(Z(Z({}, jt), n), e) : e = Z(Z({}, jt), e);
    const s = oe(Pt, e);
    return qt(s, t), s.component.data;
  }
}, ft = (e) => {
  e.unmount = No;
  let t;
  if (e.id) {
    if (t = e.id, st.find((a) => a === e.id))
      return Qm(e);
  } else
    t = (/* @__PURE__ */ new Date()).getTime() + "";
  e = Z(Z({}, jt), e), e.id = t, st.push(e.id), ht.push(e);
  const n = document.createElement("view");
  n.id = "notify-" + e.id;
  const l = oe({
    setup() {
      return e.teleport = `#notify-${e.id}`, ve(() => {
        setTimeout(() => {
          e.onClose && e.onClose(), document.body.removeChild(n);
        }, e.duration);
      }), () => be(Pt, e);
    }
  });
  document.body.appendChild(n), qt(l, n);
}, pt = (e) => {
  if (!e) {
    console.warn("[NutUI Notify]: msg不能为空");
    return;
  }
}, M5 = {
  text(e, t = {}) {
    return pt(e), ft(ce(Z({}, t), { msg: e }));
  },
  primary(e, t = {}) {
    return pt(e), ft(ce(Z({}, t), { msg: e, type: "primary" }));
  },
  success(e, t = {}) {
    return pt(e), ft(ce(Z({}, t), { msg: e, type: "success" }));
  },
  danger(e, t = {}) {
    return pt(e), ft(ce(Z({}, t), { msg: e, type: "danger" }));
  },
  warn(e, t = {}) {
    return pt(e), ft(ce(Z({}, t), { msg: e, type: "warning" }));
  },
  hide() {
    No();
  },
  install(e) {
    e.use(Pt);
  }
}, { componentName: xm, create: eh } = Y("switch"), th = eh({
  components: { Loading1: Qs },
  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: !1
    },
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
    const n = D(() => e.modelValue === e.activeValue), s = D(() => {
      const r = xm;
      return {
        [r]: !0,
        [n.value ? "nut-switch-open" : "nut-switch-close"]: !0,
        [`${r}-disable`]: e.disable,
        [`${r}-base`]: !0
      };
    }), l = D(() => ({
      backgroundColor: n.value ? e.activeColor : e.inactiveColor
    }));
    let a = "";
    const o = (r) => {
      if (e.disable || e.loading)
        return;
      const i = n.value ? e.inactiveValue : e.activeValue;
      a = "click", t("update:modelValue", i), t("change", i, r);
    };
    return Q(
      () => e.modelValue,
      (r) => {
        a == "click" ? a = "" : t("change", r);
      }
    ), {
      classes: s,
      style: l,
      isActive: n,
      onClick: o
    };
  }
}), nh = { class: "nut-switch-button" };
function oh(e, t, n, s, l, a) {
  const o = j("Loading1");
  return u(), d("view", {
    class: M(e.classes),
    style: A(e.style),
    onClick: t[0] || (t[0] = (...r) => e.onClick && e.onClick(...r))
  }, [
    m("view", nh, [
      e.loading ? I(e.$slots, "icon", { key: 0 }, () => [
        oe(o, {
          name: "loading",
          color: e.activeColor
        }, null, 8, ["color"])
      ]) : T("", !0),
      e.activeText ? (u(), d(x, { key: 1 }, [
        Ce(m("view", { class: "nut-switch-label open" }, L(e.activeText), 513), [
          [Ne, e.isActive]
        ]),
        Ce(m("view", { class: "nut-switch-label close" }, L(e.inactiveText), 513), [
          [Ne, !e.isActive]
        ])
      ], 64)) : T("", !0)
    ])
  ], 6);
}
const lh = /* @__PURE__ */ U(th, [["render", oh]]), { create: sh } = Y("toast"), ah = sh({
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
    const s = ue({
      mounted: !1
    });
    ve(() => {
      s.mounted = !0;
    });
    const l = () => {
      n && (clearTimeout(n), n = null);
    }, a = () => {
      s.mounted = !1;
    }, o = () => {
      l(), e.duration && (n = setTimeout(() => {
        a();
      }, e.duration));
    }, r = () => {
      e.closeOnClickOverlay && (a(), t("close"));
    };
    e.duration && o(), Q(
      () => e.duration,
      (y) => {
        y && o();
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
    ]), f = D(() => ["nut-toast-icon-wrapper", { "nut-toast-icon-no-animation": !e.loadingRotate }]);
    return {
      state: s,
      hide: a,
      clickCover: r,
      hasIcon: i,
      toastBodyClass: p,
      toastIconWrapperClass: f,
      onAfterLeave: () => {
        l(), e.unmount(e.id), e.onClose && e.onClose();
      },
      renderIcon: ut
    };
  }
}), rh = {
  key: 1,
  class: "nut-toast-title"
}, ih = ["innerHTML"];
function uh(e, t, n, s, l, a) {
  return u(), ee(Kt, {
    name: "toast-fade",
    onAfterLeave: e.onAfterLeave
  }, {
    default: te(() => [
      Ce(m("view", {
        class: M(e.toastBodyClass),
        style: A({
          bottom: e.center ? "auto" : e.bottom,
          "background-color": e.coverColor
        }),
        onClick: t[0] || (t[0] = (...o) => e.clickCover && e.clickCover(...o))
      }, [
        m("view", {
          class: "nut-toast-inner",
          style: A({
            "text-align": e.textAlignCenter ? "center" : "left",
            "background-color": e.bgColor
          })
        }, [
          e.hasIcon ? (u(), d("view", {
            key: 0,
            class: M(e.toastIconWrapperClass)
          }, [
            (u(), ee(Ae(e.renderIcon(e.icon)), { color: "#ffffff" }))
          ], 2)) : T("", !0),
          e.title ? (u(), d("div", rh, L(e.title), 1)) : T("", !0),
          m("view", {
            class: "nut-toast-text",
            innerHTML: e.msg
          }, null, 8, ih)
        ], 4)
      ], 6), [
        [Ne, e.state.mounted]
      ])
    ]),
    _: 1
  }, 8, ["onAfterLeave"]);
}
const At = /* @__PURE__ */ U(ah, [["render", uh]]), Ut = {
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
let at = [], gt = [];
const Do = (e) => {
  if (e) {
    const t = document.getElementById(e);
    gt = gt.filter((n) => n.id !== e), at = at.filter((n) => n !== e), t && document.body.removeChild(t);
  } else
    at.forEach((t) => {
      const n = document.getElementById(t);
      n && document.body.removeChild(n);
    }), gt = [], at = [];
}, ch = (e) => {
  const t = document.getElementById(e.id);
  if (t) {
    const n = gt.find((l) => l.id === e.id);
    n ? e = Z(Z(Z({}, Ut), n), e) : e = Z(Z({}, Ut), e);
    const s = oe(At, e);
    return qt(s, t), _o;
  }
}, mt = (e) => {
  e.unmount = Do;
  let t;
  if (e.id) {
    if (t = e.id, at.find((n) => n === e.id))
      return ch(e);
  } else
    t = (/* @__PURE__ */ new Date()).getTime() + "";
  return e = Z(Z({}, Ut), e), e.id = t, at.push(e.id), gt.push(e), tn(e, {
    wrapper: At
  }), _o;
}, _t = (e) => {
  if (!e) {
    console.warn("[NutUI Toast]: msg不能为空");
    return;
  }
}, _o = {
  text(e, t = {}) {
    return _t(e), mt(ce(Z({}, t), { type: "text", msg: e }));
  },
  success(e, t = {}) {
    return _t(e), mt(ce(Z({ icon: kr }, t), { msg: e, type: "success" }));
  },
  fail(e, t = {}) {
    return _t(e), mt(ce(Z({ icon: jn }, t), { msg: e, type: "fail" }));
  },
  warn(e, t = {}) {
    return _t(e), mt(ce(Z({ icon: Un }, t), { msg: e, type: "warn" }));
  },
  loading(e, t = {}) {
    return mt(ce(Z({
      icon: ot
    }, t), {
      msg: e,
      type: "loading"
    }));
  },
  hide(e) {
    Do(e);
  },
  install(e) {
    e.use(At);
  }
}, { create: dh } = Y("audio"), fh = dh({
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
    Service: pr,
    NutRange: uo
  },
  emits: ["fastBack", "play", "forward", "ended", "changeProgress", "mute", "canPlay"],
  setup(e, { emit: t, slots: n }) {
    const s = z(null), l = ue({
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
        for (let c = 0; c < k.length; c++)
          document.addEventListener(k[c], () => {
            document.hidden ? s.value.pause() : l.playing && setTimeout(() => {
              s.value.play();
            }, 200);
          });
      } catch (c) {
        console.log(c.message);
      }
    });
    const a = (k) => {
      const c = s.value;
      e.autoplay && c && c.paused && c.play(), l.second = c.duration, l.duration = b(c.duration), t("canPlay", k);
    }, o = (k) => {
      l.currentTime = parseInt(k.target.currentTime);
    }, r = () => {
      l.currentTime > 0 && l.currentTime--, s.value.currentTime = l.currentTime, t("fastBack", l.currentTime);
    }, i = () => {
      const k = s.value;
      l.playing ? (k.pause(), l.handPlaying = !1) : (k.play(), l.handPlaying = !0), l.playing = !l.playing, t("play", l.playing);
    }, p = () => {
      l.currentTime++, s.value.currentTime = l.currentTime, t("forward", l.currentTime);
    }, f = (k) => {
      l.currentDuration = b(k), l.percent = k / l.second * 100;
    }, v = () => {
      l.playing = !1, t("ended");
    }, y = (k) => {
      const c = s.value;
      c.currentTime = l.second * k / 100, t("changeProgress", c.currentTime);
    }, $ = () => {
      l.hanMuted = !l.hanMuted, t("mute", l.hanMuted);
    }, b = (k) => {
      if (!k)
        return "00:00:00";
      let c = parseInt(k), g = Math.floor(c / 3600), h = Math.floor((c - g * 3600) / 60), w = c - g * 3600 - h * 60, B = "";
      return B += ("0" + g.toString()).slice(-2) + ":", B += ("0" + h.toString()).slice(-2) + ":", B += ("0" + w.toString()).slice(-2), B;
    };
    return Q(
      () => l.currentTime,
      (k) => {
        f(k);
      }
    ), Me("audioParent", {
      children: [],
      props: e,
      audioData: l,
      handleMute: $,
      forward: p,
      fastBack: r,
      changeStatus: i
    }), ce(Z(Z({}, he(e)), he(l)), {
      audioRef: s,
      fastBack: r,
      forward: p,
      changeStatus: i,
      progressChange: y,
      audioEnd: v,
      onTimeupdate: o,
      handleMute: $,
      onCanplay: a,
      slots: n
    });
  }
}), ph = { class: "nut-audio" }, mh = {
  key: 0,
  class: "nut-audio__progress"
}, hh = { class: "nut-audio__time" }, gh = { class: "nut-audio__bar" }, yh = /* @__PURE__ */ m("div", { class: "nut-audio__button--custom" }, null, -1), vh = { class: "nut-audio__time" }, $h = {
  key: 1,
  class: "nut-audio__icon"
}, bh = ["controls", "src", "preload", "autoplay", "loop", "muted"];
function wh(e, t, n, s, l, a) {
  const o = j("nut-range"), r = j("Service");
  return u(), d("div", ph, [
    e.type == "progress" ? (u(), d("div", mh, [
      m("div", hh, L(e.currentDuration), 1),
      m("div", gh, [
        oe(o, {
          modelValue: e.percent,
          "onUpdate:modelValue": t[0] || (t[0] = (i) => e.percent = i),
          "hidden-range": "",
          "inactive-color": "#cccccc",
          "active-color": "#fa2c19",
          onChange: e.progressChange
        }, {
          button: te(() => [
            yh
          ]),
          _: 1
        }, 8, ["modelValue", "onChange"])
      ]),
      m("div", vh, L(e.duration), 1)
    ])) : T("", !0),
    e.type == "icon" ? (u(), d("div", $h, [
      m("div", {
        class: M(["nut-audio__icon--box", e.playing ? "nut-audio__icon--play" : "nut-audio__icon--stop"]),
        onClick: t[1] || (t[1] = (...i) => e.changeStatus && e.changeStatus(...i))
      }, [
        e.playing ? (u(), ee(r, {
          key: 0,
          class: "nut-icon-am-rotate nut-icon-am-infinite"
        })) : (u(), ee(r, { key: 1 }))
      ], 2)
    ])) : T("", !0),
    e.type == "none" ? (u(), d("div", {
      key: 2,
      onClick: t[2] || (t[2] = (...i) => e.changeStatus && e.changeStatus(...i))
    }, [
      I(e.$slots, "default")
    ])) : T("", !0),
    e.type != "none" ? I(e.$slots, "default", { key: 3 }) : T("", !0),
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
    }, null, 40, bh)
  ]);
}
const kh = /* @__PURE__ */ U(fh, [["render", wh]]), { create: Ch } = Y("audio-operate"), Sh = "NutAudioOperate", Th = Ch({
  props: {
    // 展示的形式   back 倒退   play 开始 or 暂停  forward 快进 mute 静音
    type: {
      type: String,
      default: () => "play"
    }
  },
  components: {
    NutButton: Ue
  },
  emits: ["click"],
  setup(e) {
    const t = ke(Sh), n = Be("audioParent"), s = ue(n), l = z(et().default);
    return ce(Z(Z({}, he(e)), he(s)), { customSlot: l, translate: t });
  }
}), Nh = { class: "nut-audio-operate" };
function Dh(e, t, n, s, l, a) {
  const o = j("nut-button");
  return u(), d("div", Nh, [
    e.type == "back" ? (u(), d("div", {
      key: 0,
      class: "nut-audio-operate-item",
      onClick: t[0] || (t[0] = (...r) => e.fastBack && e.fastBack(...r))
    }, [
      e.customSlot ? T("", !0) : (u(), ee(o, {
        key: 0,
        type: "primary",
        size: "small"
      }, {
        default: te(() => [
          ge(L(e.translate("back")), 1)
        ]),
        _: 1
      })),
      I(e.$slots, "default")
    ])) : T("", !0),
    e.type == "play" ? (u(), d("div", {
      key: 1,
      class: "nut-audio-operate-item",
      onClick: t[1] || (t[1] = (...r) => e.changeStatus && e.changeStatus(...r))
    }, [
      e.customSlot ? T("", !0) : (u(), ee(o, {
        key: 0,
        type: "primary",
        size: "small"
      }, {
        default: te(() => [
          ge(L(e.audioData.playing ? `${e.translate("pause")}` : `${e.translate("start")}`), 1)
        ]),
        _: 1
      })),
      I(e.$slots, "default")
    ])) : T("", !0),
    e.type == "forward" ? (u(), d("div", {
      key: 2,
      class: "nut-audio-operate-item",
      onClick: t[2] || (t[2] = (...r) => e.forward && e.forward(...r))
    }, [
      e.customSlot ? T("", !0) : (u(), ee(o, {
        key: 0,
        type: "primary",
        size: "small"
      }, {
        default: te(() => [
          ge("快进")
        ]),
        _: 1
      })),
      I(e.$slots, "default")
    ])) : T("", !0),
    e.type == "mute" ? (u(), d("div", {
      key: 3,
      class: "nut-audio-operate-item",
      onClick: t[3] || (t[3] = (...r) => e.handleMute && e.handleMute(...r))
    }, [
      e.customSlot ? T("", !0) : (u(), ee(o, {
        key: 0,
        type: e.audioData.hanMuted ? "default" : "primary",
        size: "small"
      }, {
        default: te(() => [
          ge(L(e.translate("mute")), 1)
        ]),
        _: 1
      }, 8, ["type"])),
      I(e.$slots, "default")
    ])) : T("", !0)
  ]);
}
const _h = /* @__PURE__ */ U(Th, [["render", Dh]]), Io = Symbol("nut-avatar"), { create: Ih } = Y("avatar"), Bh = Ih({
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
    const { size: t, shape: n, bgColor: s, color: l } = he(e), a = ["large", "normal", "small"], o = Be(Io, null), r = z(null), i = D(() => {
      var v, y;
      return {
        ["nut-avatar"]: !0,
        [`nut-avatar-${t.value || ((v = o == null ? void 0 : o.props) == null ? void 0 : v.size) || "normal"}`]: !0,
        [`nut-avatar-${n.value || ((y = o == null ? void 0 : o.props) == null ? void 0 : y.shape) || "round"}`]: !0
      };
    }), p = D(() => {
      var f, v;
      return {
        width: t.value in a ? "" : `${t.value}px`,
        height: t.value in a ? "" : `${t.value}px`,
        backgroundColor: `${s.value}`,
        color: `${l.value}`,
        marginLeft: (f = o == null ? void 0 : o.props) != null && f.span ? `${(v = o == null ? void 0 : o.props) == null ? void 0 : v.span}px` : ""
      };
    });
    return {
      classes: i,
      styles: p,
      avatarRef: r
    };
  }
});
function Mh(e, t, n, s, l, a) {
  return u(), d("view", {
    ref: "avatarRef",
    style: A(e.styles),
    class: M(e.classes)
  }, [
    I(e.$slots, "default")
  ], 6);
}
const sn = /* @__PURE__ */ U(Bh, [["render", Mh]]), { create: Lh } = Y("avatar-group"), Eh = Lh({
  components: {
    NutAvatar: sn
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
    const t = z(null), n = z(99), s = z(), l = D(() => ({
      marginLeft: -1 * Number(e.span) + "px"
    })), a = (r) => {
      let i = 0;
      r && r.$el && (r = r.$el);
      const p = r.children;
      if (e.zIndex === "right")
        for (let f = 0; f < Number(e.maxCount); f++) {
          const v = p[f];
          v.style.zIndex = `${99 - f}`;
        }
      for (let f = Number(e.maxCount); f < p.length; f++) {
        const v = p[f];
        v.className.includes("avater-fold") || (v.style.display = "none", i++);
      }
      n.value = i;
    }, o = (r) => {
      const i = { attributes: !1, childList: !0, subtree: !0 }, p = function(v) {
        let y = !1;
        for (let $ of v)
          if ($.type === "childList") {
            y = !0;
            break;
          }
        y && a(r);
      }, f = new MutationObserver(p);
      return f.observe(r, i), f;
    };
    return ve(() => {
      e.maxCount && Te(() => {
        let r = Qe(t);
        r && r.$el && (r = r.$el), a(r), s.value = o(r);
      });
    }), je(() => {
      var r;
      (r = s.value) == null || r.disconnect();
    }), Me(Io, {
      props: e,
      avatarGroupRef: t
    }), {
      styles: l,
      foldCount: n,
      avatarGroupRef: t
    };
  }
});
function Ph(e, t, n, s, l, a) {
  const o = j("nut-avatar");
  return u(), d("view", {
    ref: "avatarGroupRef",
    class: "nut-avatar-group",
    style: A(e.styles)
  }, [
    I(e.$slots, "default"),
    e.foldCount > 0 ? (u(), ee(o, {
      key: 0,
      class: "avater-fold",
      color: e.maxColor,
      "bg-color": e.maxBgColor,
      size: e.size,
      shape: e.shape,
      style: A({ magrinLeft: `${e.span}px` })
    }, {
      default: te(() => [
        ge(L(e.maxContent || e.foldCount), 1)
      ]),
      _: 1
    }, 8, ["color", "bg-color", "size", "shape", "style"])) : T("", !0)
  ], 4);
}
const Ah = /* @__PURE__ */ U(Eh, [["render", Ph]]);
var Bt = /* @__PURE__ */ ((e) => (e[e.eq = 1] = "eq", e[e.lt = 2] = "lt", e[e.gt = 3] = "gt", e))(Bt || {});
function zh(e, t, n) {
  let s = 0, l = e.length - 1, a = null;
  for (; s <= l; ) {
    a = Math.floor((s + l) / 2);
    const o = e[a], r = n(o, t);
    if (r === 1)
      return a;
    r === 2 ? s = a + 1 : r === 3 && (l = a - 1);
  }
  return a;
}
const { create: Vh } = Y("list"), Oh = Vh({
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
    const n = document.documentElement.clientHeight || document.body.clientHeight || 667, s = z(null), l = z(null), a = z(null), o = ue({
      start: 0,
      originStartIndex: 0,
      scrollTop: 0,
      list: e.listData.slice(),
      cachePositions: [],
      phantomHeight: e.height * e.listData.length
    }), r = D(() => e.containerHeight ? Math.min(e.containerHeight, n) : n), i = D(() => Math.ceil(r.value / e.height)), p = D(() => Math.min(o.originStartIndex + i.value + e.bufferSize, o.list.length)), f = D(() => o.list.slice(o.start, p.value)), v = () => {
      if (a.value)
        return `translate3d(0, ${o.start >= 1 ? o.cachePositions[o.start - 1].bottom : 0}px, 0)`;
    }, y = () => {
      o.cachePositions = [];
      for (let g = 0; g < o.list.length; ++g)
        o.cachePositions[g] = {
          index: g,
          height: e.height,
          top: g * e.height,
          bottom: (g + 1) * (e.height + e.margin),
          dValue: 0
        };
    }, $ = () => {
      let g = a.value.childNodes;
      g = Array.from(g).filter((C) => C.nodeType === 1);
      const h = g[0];
      g.forEach((C, _) => {
        if (!C)
          return;
        const S = Oe(C), { height: P } = S, K = o.cachePositions[_ + o.start].height - P;
        K && (o.cachePositions[_ + o.start].bottom -= K, o.cachePositions[_ + o.start].height = P, o.cachePositions[_ + o.start].dValue = K);
      });
      let w = 0;
      h && (w = o.start);
      const B = o.cachePositions.length;
      let N = o.cachePositions[w].dValue;
      o.cachePositions[w].dValue = 0;
      for (let C = w + 1; C < B; ++C) {
        const _ = o.cachePositions[C];
        o.cachePositions[C].top = o.cachePositions[C - 1].bottom, o.cachePositions[C].bottom = o.cachePositions[C].bottom - N, _.dValue !== 0 && (N += _.dValue, _.dValue = 0);
      }
      const E = o.cachePositions[B - 1].bottom;
      o.phantomHeight = E;
    }, b = (g = 0) => {
      let h = zh(
        o.cachePositions,
        g,
        (B, N) => {
          const E = B.bottom;
          return E === N ? Bt.eq : E < N ? Bt.lt : Bt.gt;
        }
      );
      return o.cachePositions[h].bottom < g && (h += 1), h;
    }, k = () => {
      o.originStartIndex = 0, o.start = 0, o.scrollTop = 0, s.value.scrollTop = 0, y(), o.phantomHeight = e.height * o.list.length;
    }, c = () => {
      var B;
      const g = (B = s.value) == null ? void 0 : B.scrollTop, { originStartIndex: h } = o, w = b(g);
      w !== h && (o.originStartIndex = w, o.start = Math.max(o.originStartIndex - e.bufferSize, 0), p.value >= o.list.length - 1 && t("scrollBottom")), t(g > o.scrollTop ? "scrollUp" : "scrollDown", g), o.scrollTop = g;
    };
    return y(), Q(
      () => e.listData,
      (g) => {
        if (o.list = g.slice(), o.list.length === g.length)
          y(), $();
        else {
          k();
          return;
        }
      }
    ), Q(
      () => o.start,
      () => {
        a.value && o.list.length > 0 && $();
      }
    ), ce(Z({}, he(o)), {
      list: s,
      phantom: l,
      actualContent: a,
      getTransform: v,
      visibleData: f,
      getContainerHeight: r,
      handleScrollEvent: c
    });
  }
});
function Hh(e, t, n, s, l, a) {
  return u(), d("div", {
    ref: "list",
    class: "nut-list",
    style: A({ height: `${e.getContainerHeight}px` }),
    onScrollPassive: t[0] || (t[0] = (...o) => e.handleScrollEvent && e.handleScrollEvent(...o))
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
      (u(!0), d(x, null, ie(e.visibleData, (o, r) => (u(), d("div", {
        key: o,
        class: "nut-list-item"
      }, [
        I(e.$slots, "default", {
          item: o,
          index: r + e.start
        })
      ]))), 128))
    ], 4)
  ], 36);
}
const Rh = /* @__PURE__ */ U(Oh, [["render", Hh]]), { create: Fh } = Y("circle-progress"), Wh = Fh({
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
      const r = e.clockwise ? 1 : 0;
      return `M 50 50 m 0 -45 a 45 45 0 1 ${r} 0 90 a 45 45 0 1, ${r} 0 -90`;
    }), s = D(() => rt(e.color) ? `url(#${t})` : e.color), l = D(() => {
      let r = 283, i = r * Number(e.progress) / 100;
      return {
        stroke: rt(e.color) ? `url(#${t})` : e.color,
        strokeDasharray: `${i}px ${r}px`
      };
    }), a = D(() => ({
      stroke: e.pathColor
    })), o = D(() => {
      if (!rt(e.color))
        return;
      let r = e.color;
      const i = Object.keys(r).sort((f, v) => parseFloat(f) - parseFloat(v));
      let p = [];
      return i.map((f) => {
        let v = {
          key: "",
          value: ""
        };
        v.key = f, v.value = r[f], p.push(v);
      }), p;
    });
    return {
      hoverStyle: l,
      pathStyle: a,
      path: n,
      hoverColor: s,
      stop: o,
      refRandomId: t
    };
  }
}), Yh = { viewBox: "0 0 100 100" }, jh = ["id"], Uh = ["offset", "stop-color"], Kh = ["d", "stroke-width"], Xh = ["d", "stroke", "stroke-linecap", "stroke-width"], qh = { class: "nut-circle-progress__text" };
function Zh(e, t, n, s, l, a) {
  return u(), d("div", {
    class: "nut-circle-progress",
    style: A({ height: Number(e.radius) * 2 + "px", width: Number(e.radius) * 2 + "px" })
  }, [
    (u(), d("svg", Yh, [
      m("defs", null, [
        m("linearGradient", {
          id: e.refRandomId,
          x1: "100%",
          y1: "0%",
          x2: "0%",
          y2: "0%"
        }, [
          (u(!0), d(x, null, ie(e.stop, (o, r) => (u(), d("stop", {
            key: r,
            offset: o.key,
            "stop-color": o.value
          }, null, 8, Uh))), 128))
        ], 8, jh)
      ]),
      m("path", {
        class: "nut-circle-progress__path",
        style: A(e.pathStyle),
        d: e.path,
        fill: "none",
        "stroke-width": e.strokeWidth
      }, " > ", 12, Kh),
      m("path", {
        class: "nut-circle-progress__hover",
        style: A(e.hoverStyle),
        d: e.path,
        fill: "none",
        stroke: e.hoverColor,
        "stroke-linecap": e.strokeLinecap,
        "stroke-width": e.strokeWidth
      }, null, 12, Xh)
    ])),
    m("div", qh, [
      I(e.$slots, "default", {}, () => [
        m("div", null, L(e.progress) + "%", 1)
      ])
    ])
  ], 4);
}
const Gh = /* @__PURE__ */ U(Wh, [["render", Zh]]), { create: Jh } = Y("noticebar"), Qh = Jh({
  props: {
    // 滚动方向  across 横向 vertical 纵向
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
    Notice: _a,
    CircleClose: Jt
  },
  emits: ["click", "close", "acrossEnd"],
  setup(e, { emit: t, slots: n }) {
    const s = z(null), l = z(null), a = ue({
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
    }), o = D(() => a.isCanScroll == null ? e.wrapable : !a.isCanScroll && !e.wrapable), r = D(() => ({
      "nut-noticebar__page-wrap-content": !0,
      "nut-ellipsis": o.value,
      [a.animationClass]: !0
    })), i = D(() => {
      let C = {};
      return e.color && (C.color = e.color), e.background && (C.background = e.background), e.direction == "vertical" && (C.height = `${e.height}px`), C;
    }), p = D(() => ({
      animationDelay: (a.firstRound ? e.delay : 0) + "s",
      animationDuration: a.duration + "s",
      transform: `translateX(${a.firstRound ? 0 : a.wrapWidth + "px"})`
    })), f = D(() => {
      let C = {};
      if (e.complexAm)
        C = {
          transform: `translateY(${a.distance}px)`
        };
      else if (a.animate) {
        let _ = ~~(e.height / e.speed / 4);
        C = {
          transition: `all ${_ == 0 ? ~~(e.height / e.speed) : _}s`,
          "margin-top": `-${e.height}px`
        };
      }
      return C;
    });
    Q(
      () => e.text,
      () => {
        v();
      }
    ), Q(
      () => e.list,
      (C) => {
        a.scrollList = [].concat(C);
      }
    );
    const v = () => {
      a.showNoticebar != !1 && setTimeout(() => {
        if (!s.value || !l.value)
          return;
        const C = s.value.getBoundingClientRect().width, _ = l.value.getBoundingClientRect().width;
        a.isCanScroll = e.scrollable == null ? _ > C : e.scrollable, a.isCanScroll ? (a.wrapWidth = C, a.offsetWidth = _, a.duration = _ / e.speed, a.animationClass = "play") : a.animationClass = "";
      }, 0);
    }, y = (C) => {
      t("click", C);
    }, $ = (C) => {
      e.closeMode && (a.showNoticebar = !e.closeMode), t("close", C);
    }, b = (C) => {
      a.firstRound = !1, t("acrossEnd", C), setTimeout(() => {
        a.duration = (a.offsetWidth + a.wrapWidth) / e.speed, a.animationClass = "play-infinite";
      }, 0);
    }, k = () => {
      c(), a.timer = setInterval(c, ~~(e.height / e.speed / 4 * 1e3) + e.standTime);
    }, c = () => {
      a.animate = !0, setTimeout(
        () => {
          a.scrollList.push(a.scrollList[0]), a.scrollList.shift(), a.animate = !1;
        },
        ~~(e.height / e.speed / 4 * 1e3)
      );
    }, g = () => {
      a.timer = setInterval(
        () => {
          let C = 100;
          for (let _ = 0; _ < C; _++)
            h(_, !(_ < C - 1));
        },
        e.standTime + 100 * e.speed
      );
    }, h = (C, _) => {
      setTimeout(() => {
        a.distance -= e.height / 100, _ && (a.scrollList.push(a.scrollList[0]), a.scrollList.shift(), a.distance = 0);
      }, C * e.speed);
    }, w = (C) => {
      t("click", C);
    }, B = () => {
      e.closeMode && (a.showNoticebar = !e.closeMode), t("close", a.scrollList[0]);
    };
    ve(() => {
      e.direction == "vertical" ? (n.default ? (N(), E()) : a.scrollList = [].concat(e.list), setTimeout(() => {
        e.complexAm ? g() : k();
      }, e.standTime)) : v();
    });
    const N = () => {
      n.default && (a.scrollList = [].concat(n.default()[0].children));
    }, E = () => {
      setTimeout(() => {
        var C = new MutationObserver(() => {
          a.showNotica = !1, setTimeout(() => {
            a.showNotica = !0;
          }), N();
        });
        const _ = document.getElementsByClassName("nut-noticebar-custom-item")[0];
        _ && C.observe(_, {
          childList: !0,
          subtree: !0
        });
      }, 100);
    };
    return bt(() => {
      a.keepAlive && (a.keepAlive = !1);
    }), wt(() => {
      a.keepAlive = !0, clearInterval(a.timer);
    }), je(() => {
      clearInterval(a.timer);
    }), ce(Z({}, he(a)), {
      isEllipsis: o,
      barStyle: i,
      contentStyle: p,
      horseLampStyle: f,
      wrap: s,
      content: l,
      handleClick: y,
      onClickIcon: $,
      onAnimationEnd: b,
      go: w,
      handleClickIcon: B,
      slots: n,
      pxCheck: Ie,
      wrapContentClass: r
    });
  }
}), xh = { class: "nut-noticebar" }, eg = { class: "nut-noticebar__page-lefticon" }, tg = {
  ref: "wrap",
  class: "nut-noticebar__page-wrap"
}, ng = { class: "showNotica" }, og = { class: "nut-noticebar-custom-item" }, lg = ["onClick"];
function sg(e, t, n, s, l, a) {
  const o = j("Notice"), r = j("CircleClose"), i = j("ScrollItem");
  return u(), d("view", xh, [
    e.direction == "across" ? Ce((u(), d("view", {
      key: 0,
      class: M(["nut-noticebar__page", {
        "nut-noticebar__page--withicon": e.closeMode,
        "nut-noticebar__page--close": e.closeMode,
        "nut-noticebar__page--wrapable": e.wrapable
      }]),
      style: A(e.barStyle),
      onClick: t[3] || (t[3] = (...p) => e.handleClick && e.handleClick(...p))
    }, [
      m("view", eg, [
        I(e.$slots, "left-icon", {}, () => [
          e.leftIcon ? (u(), ee(o, {
            key: 0,
            size: "16px"
          })) : T("", !0)
        ])
      ]),
      m("view", tg, [
        m("view", {
          ref: "content",
          class: M(e.wrapContentClass),
          style: A(e.contentStyle),
          onAnimationend: t[0] || (t[0] = (...p) => e.onAnimationEnd && e.onAnimationEnd(...p)),
          onWebkitAnimationEnd: t[1] || (t[1] = (...p) => e.onAnimationEnd && e.onAnimationEnd(...p))
        }, [
          I(e.$slots, "default", {}, () => [
            ge(L(e.text), 1)
          ])
        ], 38)
      ], 512),
      e.closeMode || e.$slots["right-icon"] ? (u(), d("view", {
        key: 0,
        class: "nut-noticebar__page-righticon",
        onClick: t[2] || (t[2] = De((...p) => e.onClickIcon && e.onClickIcon(...p), ["stop"]))
      }, [
        e.$slots["right-icon"] ? I(e.$slots, "right-icon", { key: 0 }) : (u(), ee(r, { key: 1 }))
      ])) : T("", !0)
    ], 6)), [
      [Ne, e.showNoticebar]
    ]) : T("", !0),
    e.scrollList.length > 0 && e.direction == "vertical" && e.showNoticebar ? (u(), d("view", {
      key: 1,
      class: "nut-noticebar__vertical",
      style: A(e.barStyle)
    }, [
      e.slots.default ? (u(), d(x, { key: 0 }, [
        m("view", {
          class: "nut-noticebar__vertical-list",
          style: A(e.horseLampStyle)
        }, [
          m("div", ng, [
            (u(!0), d(x, null, ie(e.scrollList, (p, f) => (u(), ee(i, {
              key: f,
              style: A({ height: e.height + "px", "line-height": e.height + "px" }),
              item: p
            }, null, 8, ["style", "item"]))), 128))
          ])
        ], 4),
        m("view", og, [
          I(e.$slots, "default")
        ])
      ], 64)) : (u(), d("ul", {
        key: 1,
        class: "nut-noticebar__vertical-list",
        style: A(e.horseLampStyle)
      }, [
        (u(!0), d(x, null, ie(e.scrollList, (p, f) => (u(), d("li", {
          key: f,
          class: "nut-noticebar__vertical-item",
          style: A({ height: e.pxCheck(e.height), lineHeight: e.pxCheck(e.height) }),
          onClick: (v) => e.go(p)
        }, L(p), 13, lg))), 128))
      ], 4)),
      m("view", {
        class: "go",
        onClick: t[4] || (t[4] = (p) => !e.slots.rightIcon && e.handleClickIcon())
      }, [
        I(e.$slots, "right-icon", {}, () => [
          e.closeMode ? (u(), ee(r, {
            key: 0,
            color: e.color,
            size: "11px"
          }, null, 8, ["color"])) : T("", !0)
        ])
      ])
    ], 4)) : T("", !0)
  ]);
}
const ag = /* @__PURE__ */ U(Qh, [["render", sg]]), { create: rg } = Y("empty"), ig = "NutEmpty", ug = {
  empty: "https://static-ftcms.jd.com/p/files/61a9e3183985005b3958672b.png",
  error: "https://ftcms.jd.com/p/files/61a9e33ee7dcdbcc0ce62736.png",
  network: "https://static-ftcms.jd.com/p/files/61a9e31de7dcdbcc0ce62734.png"
}, cg = rg({
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
    const t = ke(ig), n = D(() => e.imageSize ? {
      width: Ie(e.imageSize),
      height: Ie(e.imageSize)
    } : {});
    return { src: D(() => e.image.startsWith("https://") || e.image.startsWith("http://") || e.image.startsWith("//") ? e.image : ug[e.image]), style: n, translate: t };
  }
}), dg = { class: "nut-empty" }, fg = ["src"], pg = { class: "nut-empty__description" };
function mg(e, t, n, s, l, a) {
  return u(), d("view", dg, [
    m("view", {
      class: "nut-empty__box",
      style: A(e.style)
    }, [
      I(e.$slots, "image", {}, () => [
        e.src ? (u(), d("img", {
          key: 0,
          class: "nut-empty__box--img",
          src: e.src
        }, null, 8, fg)) : T("", !0)
      ])
    ], 4),
    I(e.$slots, "description", {}, () => [
      m("view", pg, L(e.description || e.translate("noData")), 1)
    ]),
    I(e.$slots, "default")
  ]);
}
const hg = /* @__PURE__ */ U(cg, [["render", mg]]);
function In(e, t) {
  let n = null, s = Date.now();
  return function() {
    let l = Date.now(), a = t - (l - s);
    n && clearTimeout(n), a <= 0 ? (e.apply(null, arguments), s = Date.now()) : n = setTimeout(e, a);
  };
}
const { create: gg } = Y("video"), yg = "NutVideo", vg = gg({
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
    const s = ke(yg), l = ue({
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
    }), a = z(null), o = D(() => e.options.disabled);
    Q(
      () => e.source,
      (O) => {
        O.src && Te(() => {
          l.videoElm.load();
        });
      },
      { immediate: !0, deep: !0 }
    ), Q(
      () => e.options,
      (O) => {
        l.state.isMuted = O ? O.muted : !1;
      },
      { immediate: !0 }
    );
    const r = () => {
      l.videoElm = a.value, e.options.autoplay && setTimeout(() => {
        l.videoElm.play();
      }, 200), e.options.touchPlay && (l.showTouchMask = !0), e.options.playsinline && (l.videoElm.setAttribute("playsinline", e.options.playsinline), l.videoElm.setAttribute("webkit-playsinline", e.options.playsinline), l.videoElm.setAttribute("x5-video-player-type", "h5-page"), l.videoElm.setAttribute("x5-video-player-fullscreen", !1)), k(), l.showToolbox ? i() : (l.videoElm.addEventListener("play", () => {
        l.state.playing = !0, t("play", l.videoElm);
      }), l.videoElm.addEventListener("pause", () => {
        l.state.playing = !1, t("pause", l.videoElm);
      }), l.videoElm.addEventListener("ended", $), l.videoElm.addEventListener("timeupdate", In(y, 1e3)));
    }, i = () => {
      const O = a.value, K = a.value.getElementsByClassName("nut-video-controller__progress-value")[0];
      l.player.$player = O, l.progressBar.progressElm = K, l.progressBar.pos = K.getBoundingClientRect(), l.videoSet.progress.width = Math.round(K.getBoundingClientRect().width);
    }, p = () => {
      if (e.options.autoplay && e.options.disabled)
        return l.state.playing = !0, !1;
      if (l.state.playing = !l.state.playing, l.videoElm)
        if (l.state.playing)
          try {
            setTimeout(() => {
              l.videoElm.play();
            }, 200), l.videoElm.addEventListener("progress", () => {
              v();
            }), l.videoElm.addEventListener("timeupdate", In(y, 1e3)), l.videoElm.addEventListener("ended", $), t("play", l.videoElm);
          } catch (O) {
            b();
          }
        else
          l.videoElm.pause(), t("pause", l.videoElm);
    }, f = (O) => {
      var K = Math.floor(O / 3600);
      +K < 10 && (K = "0" + K);
      var G = Math.floor(O % 3600 / 60);
      +G < 10 && (G = "0" + G);
      var W = Math.round(O % 3600 % 60);
      +W < 10 && (W = "0" + W);
      var le = "";
      return K != 0 ? le = K + ":" + G + ":" + W : le = G + ":" + W, le;
    }, v = () => {
      l.videoSet.loaded && (l.videoSet.loaded = l.videoElm.buffered.end(0) / l.videoElm.duration * 100);
    }, y = () => {
      const O = l.videoElm.currentTime / l.videoElm.duration;
      l.videoSet.progress.current = Math.round(l.videoSet.progress.width * O), l.videoSet.totalTime = f(l.videoElm.duration), l.videoSet.displayTime = f(l.videoElm.currentTime), t("time", l.videoSet.displayTime, l.videoSet.totalTime);
    }, $ = () => {
      l.state.playing = !1, l.state.isEnd = !0, l.videoSet.displayTime = "00:00", l.videoSet.progress.current = 0, l.videoElm.currentTime = 0, t("playend", l.videoElm);
    }, b = () => {
      l.state.isError = !0;
    }, k = () => {
      l.state.vol = e.options.volume;
    }, c = () => {
      l.state.isMuted = !l.state.isMuted, l.videoElm.muted = l.state.isMuted;
    }, g = () => {
    }, h = (O) => {
      let G = O.targetTouches[0].pageX - l.progressBar.pos.left;
      G <= 0 && (G = 0), G >= l.videoSet.progress.width && (G = l.videoSet.progress.width), l.videoSet.progress.current = G;
      let W = l.videoSet.progress.current / l.videoSet.progress.width;
      l.videoElm.duration && B(W, l.videoElm.duration);
    }, w = (O) => {
      let G = O.changedTouches[0].pageX - l.progressBar.pos.left;
      l.videoSet.progress.current = G;
      let W = G / l.videoSet.progress.width;
      l.videoElm.duration && B(W, l.videoElm.duration);
    }, B = (O, K) => {
      l.videoElm.currentTime = Math.floor(O * K);
    }, N = () => {
      l.state.isError = !1, r();
    }, E = () => {
      l.state.fullScreen ? (l.state.fullScreen = !1, document.webkitCancelFullScreen()) : (l.state.fullScreen = !0, l.videoElm.webkitRequestFullScreen());
    };
    return n({
      play: p,
      pause: () => {
        l.state.playing = !1, l.videoElm.pause(), t("pause", l.videoElm);
      },
      stop: () => {
        $(), l.videoElm.pause();
      },
      muted: () => {
        l.state.isMuted = !0, l.videoElm.muted = !0;
      },
      unmuted: () => {
        l.state.isMuted = !1, l.videoElm.muted = !1;
      }
    }), ve(() => {
      r();
    }), ce(Z(Z({
      root: a
    }, he(e)), he(l)), {
      handleError: b,
      isDisabled: o,
      play: p,
      handleMuted: c,
      touchSlidSrart: g,
      touchSlidMove: h,
      touchSlidEnd: w,
      retry: N,
      fullScreen: E,
      translate: s
    });
  }
}), $g = {
  ref: "videocon",
  class: "nut-video"
}, bg = ["muted", "autoplay", "loop", "poster", "controls", "preload"], wg = ["src", "type"], kg = { class: "nut-video-controller__now" }, Cg = { class: "nut-video-controller__progress" }, Sg = {
  ref: "progressBar",
  class: "nut-video-controller__progress-value"
}, Tg = /* @__PURE__ */ m("div", { class: "nut-video-controller__ball-move" }, null, -1), Ng = [
  Tg
], Dg = {
  ref: "playedBar",
  class: "nut-video-controller__played"
}, _g = { class: "nut-video-controller__total" }, Ig = { class: "nut-video-error" }, Bg = { class: "nut-video-error-tip" };
function Mg(e, t, n, s, l, a) {
  return u(), d("div", $g, [
    m("video", {
      ref: "root",
      class: "nut-video-player",
      muted: e.options.muted,
      autoplay: e.options.autoplay,
      loop: e.options.loop,
      poster: e.options.poster,
      controls: e.options.controls,
      preload: e.options.preload,
      onError: t[0] || (t[0] = (...o) => e.handleError && e.handleError(...o))
    }, [
      m("source", {
        src: e.source.src,
        type: e.source.type
      }, null, 8, wg)
    ], 40, bg),
    e.showToolbox && !e.isDisabled ? (u(), d("div", {
      key: 0,
      ref: "touchMask",
      class: "nut-video-mask",
      onClick: t[1] || (t[1] = (...o) => e.play && e.play(...o))
    }, null, 512)) : T("", !0),
    e.showToolbox && !e.isDisabled ? Ce((u(), d("div", {
      key: 1,
      ref: "palyBtn",
      class: "nut-video-play-btn",
      onClick: t[2] || (t[2] = (...o) => e.play && e.play(...o))
    }, null, 512)), [
      [Ne, !e.state.playing]
    ]) : T("", !0),
    Ce(m("div", {
      class: M(["nut-video-controller", { "nut-video-controller--show": !e.state.playing, "nut-video-controller--hide": e.state.playing }])
    }, [
      m("div", {
        class: "nut-video-controller__playbtn",
        onClick: t[3] || (t[3] = (...o) => e.play && e.play(...o))
      }),
      m("div", kg, L(e.videoSet.displayTime), 1),
      m("div", Cg, [
        m("div", Sg, [
          m("div", {
            class: "buffered",
            style: A({ width: `${e.videoSet.loaded}%` })
          }, null, 4),
          m("div", {
            class: "nut-video-controller__ball",
            style: A({
              transform: `translate3d(${e.videoSet.progress.current}px, -50%, 0)`
            }),
            onTouchmove: t[4] || (t[4] = De((o) => e.touchSlidMove(o), ["stop", "prevent"])),
            onTouchstart: t[5] || (t[5] = De((o) => e.touchSlidSrart(), ["stop"])),
            onTouchend: t[6] || (t[6] = De((o) => e.touchSlidEnd(o), ["stop"]))
          }, Ng, 36),
          m("div", Dg, null, 512)
        ], 512)
      ]),
      m("div", _g, L(e.videoSet.totalTime), 1),
      m("div", {
        class: M(["nut-video-controller__volume", { muted: e.state.isMuted }]),
        onClick: t[7] || (t[7] = (...o) => e.handleMuted && e.handleMuted(...o))
      }, null, 2),
      m("div", {
        class: "nut-video-controller__full",
        onClick: t[8] || (t[8] = (...o) => e.fullScreen && e.fullScreen(...o))
      })
    ], 2), [
      [Ne, e.showToolbox && !e.isDisabled]
    ]),
    Ce(m("div", Ig, [
      m("p", Bg, L(e.translate("errorTip")), 1),
      m("p", {
        class: "nut-video-error-retry",
        onClick: t[9] || (t[9] = (...o) => e.retry && e.retry(...o))
      }, L(e.translate("clickRetry")), 1)
    ], 512), [
      [Ne, e.state.isError]
    ])
  ], 512);
}
const an = /* @__PURE__ */ U(vg, [["render", Mg]]), Bo = Symbol("nut-steps"), { create: Lg, componentName: Eg } = Y("steps"), Pg = Lg({
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
    const s = ue({
      children: []
    }), l = D(() => {
      const r = Eg;
      return {
        [r]: !0,
        [`${r}-${e.direction}`]: !0,
        [`${r}-dot`]: !!e.progressDot
      };
    });
    return Me(Bo, {
      relation: (r) => {
        r && s.children.push(r);
      },
      state: s,
      props: e,
      onEmit: (r) => {
        t("clickStep", r);
      }
    }), () => {
      var r;
      return be(
        "view",
        {
          class: l.value
        },
        (r = n.default) == null ? void 0 : r.call(n)
      );
    };
  }
}), { create: Ag, componentName: zg } = Y("step"), Vg = Ag({
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
    const { proxy: e } = Fe(), t = Be(Bo);
    t.relation(e);
    const n = ue({
      dot: t.props.progressDot
    }), s = D(() => t.state.children.indexOf(e) + 1), l = () => {
      const i = s.value;
      return i < +t.props.current ? "finish" : i === +t.props.current ? "process" : "wait";
    }, a = D(() => l()), o = D(() => {
      const i = zg;
      return {
        [i]: !0,
        [`${i}-${a.value}`]: !0
      };
    }), r = () => {
      t.onEmit(s.value);
    };
    return ce(Z({}, he(n)), {
      index: s,
      classes: o,
      handleClickStep: r
    });
  }
}), Og = { class: "nut-step-head" }, Hg = /* @__PURE__ */ m("view", { class: "nut-step-line" }, null, -1), Rg = { class: "nut-step-icon-inner" }, Fg = {
  key: 1,
  class: "nut-step-inner"
}, Wg = { class: "nut-step-main" }, Yg = { class: "nut-step-title" }, jg = { key: 0 }, Ug = {
  key: 0,
  class: "nut-step-content"
}, Kg = ["innerHTML"];
function Xg(e, t, n, s, l, a) {
  return u(), d("view", {
    class: M(e.classes),
    onClick: t[0] || (t[0] = (...o) => e.handleClickStep && e.handleClickStep(...o))
  }, [
    m("view", Og, [
      Hg,
      m("view", {
        class: M(["nut-step-icon", [e.dot ? "" : "is-icon"]])
      }, [
        m("view", Rg, [
          I(e.$slots, "icon", {}, () => [
            e.dot ? (u(), d(x, { key: 0 }, [], 64)) : (u(), d("view", Fg, L(e.index), 1))
          ])
        ])
      ], 2)
    ]),
    m("view", Wg, [
      m("view", Yg, [
        e.$slots.title ? T("", !0) : (u(), d("span", jg, L(e.title), 1)),
        I(e.$slots, "title")
      ]),
      e.content || e.$slots.content ? (u(), d("view", Ug, [
        e.$slots.content ? T("", !0) : (u(), d("span", {
          key: 0,
          innerHTML: e.content
        }, null, 8, Kg)),
        I(e.$slots, "content")
      ])) : T("", !0)
    ])
  ], 2);
}
const qg = /* @__PURE__ */ U(Vg, [["render", Xg]]), Mo = Symbol("nut-swiper"), { create: Zg, componentName: Bn } = Y("swiper"), Gg = Zg({
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
    const l = z(), a = ue({
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
    }), o = Ze(), r = D(() => e.direction === "vertical"), i = D(() => {
      const R = Bn;
      return {
        [`${R}-inner`]: !0,
        [`${R}-vertical`]: r.value
      };
    }), p = D(() => {
      const R = Bn;
      return {
        [`${R}-pagination`]: !0,
        [`${R}-pagination-vertical`]: r.value
      };
    }), f = D(() => r.value ? o.deltaY.value : o.deltaX.value), v = D(() => o.direction.value === e.direction), y = D(() => a.children.length), $ = D(() => a[r.value ? "height" : "width"]), b = D(() => y.value * $.value), k = D(() => a.rect ? (r.value ? a.rect.height : a.rect.width) - $.value * y.value : 0), c = D(() => (a.active + y.value) % y.value), g = () => {
      let R = 0;
      R = a.offset, a.style = {
        transitionDuration: `${a.moving ? 0 : e.duration}ms`,
        transform: `translate${r.value ? "Y" : "X"}(${R}px)`,
        [r.value ? "height" : "width"]: `${$.value * y.value}px`,
        [r.value ? "width" : "height"]: `${r.value ? a.width : a.height}px`
      };
    }, h = (R) => {
      var de;
      let ne = [];
      const X = a.childrenVNode.length;
      let ae = (de = n == null ? void 0 : n.default) == null ? void 0 : de.call(n);
      if (ae = ae.filter((pe) => pe.children && Array.isArray(pe.children)), ae.forEach((pe) => {
        ne = ne.concat(pe.children);
      }), !X)
        a.childrenVNode = ne.slice(), R.proxy && a.children.push(R.proxy);
      else if (X > ne.length)
        a.children = a.children.filter((pe) => R.proxy !== pe);
      else if (X < ne.length) {
        for (let pe = 0; pe < X; pe++)
          if (ne[pe].key !== a.childrenVNode[pe].key) {
            R.proxy && a.children.splice(pe, 0, R.proxy), R.vnode && a.childrenVNode.splice(pe, 0, R.vnode);
            break;
          }
        X !== ne.length && (R.proxy && a.children.push(R.proxy), R.vnode && a.childrenVNode.push(R.vnode));
      } else
        a.childrenVNode = ne.slice(), R.proxy && a.children.push(R.proxy);
    }, w = (R, ne = 0) => {
      let X = R * $.value;
      e.loop || (X = Math.min(X, -k.value));
      let ae = ne - X;
      return e.loop || (ae = Pe(ae, k.value, 0)), ae;
    }, B = (R) => {
      const { active: ne } = a;
      return R ? e.loop ? Pe(ne + R, -1, y.value) : Pe(ne + R, 0, y.value - 1) : ne;
    }, N = ({ pace: R = 0, offset: ne = 0, isEmit: X = !1 }) => {
      if (y.value <= 1)
        return;
      const { active: ae } = a, de = B(R), pe = w(de, ne);
      if (e.loop) {
        if (a.children[0] && pe !== k.value) {
          const we = pe < k.value;
          a.children[0].setOffset(we ? b.value : 0);
        }
        if (a.children[y.value - 1] && pe !== 0) {
          const we = pe > 0;
          a.children[y.value - 1].setOffset(we ? -b.value : 0);
        }
      }
      a.active = de, a.offset = pe, X && ae !== a.active && t("change", c.value), g();
    }, E = () => {
      a.moving = !0, a.active <= -1 && N({ pace: y.value }), a.active >= y.value && N({ pace: -y.value });
    }, C = () => {
      a.autoplayTimer && clearTimeout(a.autoplayTimer);
    }, _ = (R) => {
      E(), o.reset(), Ve(() => {
        Ve(() => {
          a.moving = !1, N({
            pace: R,
            isEmit: !0
          });
        });
      });
    }, S = () => {
      _(-1);
    }, P = () => {
      _(1);
    }, O = (R) => {
      E(), o.reset(), Ve(() => {
        a.moving = !1;
        let ne;
        e.loop && y.value === R ? ne = a.active === 0 ? 0 : R : ne = R % y.value, N({
          pace: ne - a.active,
          isEmit: !0
        });
      });
    }, K = () => {
      +e.autoPlay <= 0 || y.value <= 1 || (C(), a.autoplayTimer = setTimeout(() => {
        P(), K();
      }, Number(e.autoPlay)));
    }, G = (R = +e.initPage) => {
      C(), a.rect = l.value.getBoundingClientRect(), R = Math.min(y.value - 1, R), a.width = e.width ? +e.width : a.rect.width, a.height = e.height ? +e.height : a.rect.height, a.active = R, a.offset = w(a.active), a.moving = !0, g(), K();
    }, W = (R) => {
      e.isPreventDefault && R.preventDefault(), e.isStopPropagation && R.stopPropagation(), e.touchable && (o.start(R), a.touchTime = Date.now(), C(), E());
    }, le = (R) => {
      e.touchable && a.moving && (o.move(R), v.value && N({
        offset: f.value
      }));
    }, q = () => {
      if (!e.touchable || !a.moving)
        return;
      const R = f.value / (Date.now() - a.touchTime);
      if ((Math.abs(R) > 0.3 || Math.abs(f.value) > +($.value / 2).toFixed(2)) && v.value) {
        let X = 0;
        const ae = r.value ? o.offsetY.value : o.offsetX.value;
        e.loop ? X = ae > 0 ? f.value > 0 ? -1 : 1 : 0 : X = -Math[f.value > 0 ? "ceil" : "floor"](f.value / $.value), N({
          pace: X,
          isEmit: !0
        });
      } else
        f.value && N({ pace: 0 });
      a.moving = !1, g(), K();
    };
    return Me(Mo, {
      props: e,
      size: $,
      relation: h
    }), s({
      prev: S,
      next: P,
      to: O
    }), wt(() => {
      C();
    }), Xt(() => {
      C();
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
        +R > 0 ? K() : C();
      }
    ), {
      state: a,
      classesInner: i,
      classesPagination: p,
      container: l,
      activePagination: c,
      onTouchStart: W,
      onTouchMove: le,
      onTouchEnd: q
    };
  }
});
function Jg(e, t, n, s, l, a) {
  return u(), d("view", {
    ref: "container",
    class: "nut-swiper",
    onTouchstart: t[0] || (t[0] = (...o) => e.onTouchStart && e.onTouchStart(...o)),
    onTouchmove: t[1] || (t[1] = (...o) => e.onTouchMove && e.onTouchMove(...o)),
    onTouchend: t[2] || (t[2] = (...o) => e.onTouchEnd && e.onTouchEnd(...o)),
    onTouchcancel: t[3] || (t[3] = (...o) => e.onTouchEnd && e.onTouchEnd(...o))
  }, [
    m("view", {
      class: M(e.classesInner),
      style: A(e.state.style)
    }, [
      I(e.$slots, "default")
    ], 6),
    I(e.$slots, "page"),
    e.paginationVisible && !e.$slots.page ? (u(), d("view", {
      key: 0,
      class: M(e.classesPagination)
    }, [
      (u(!0), d(x, null, ie(e.state.children.length, (o, r) => (u(), d("i", {
        key: r,
        style: A({
          backgroundColor: e.activePagination === r ? e.paginationColor : e.paginationUnselectedColor
        }),
        class: M({ active: e.activePagination === r })
      }, null, 6))), 128))
    ], 2)) : T("", !0)
  ], 544);
}
const rn = /* @__PURE__ */ U(Gg, [["render", Jg]]);
function Qg(e) {
  const t = Fe();
  t && Object.assign(t.proxy, e);
}
const { create: xg } = Y("swiper-item"), e0 = xg({
  setup() {
    const e = Be(Mo);
    e.relation(Fe());
    const t = ue({
      offset: 0
    }), n = D(() => {
      const l = {}, a = e == null ? void 0 : e.props.direction;
      return e != null && e.size.value && (l[a === "horizontal" ? "width" : "height"] = `${e == null ? void 0 : e.size.value}px`), t.offset && (l.transform = `translate${a === "horizontal" ? "X" : "Y"}(${t.offset}px)`), l;
    }), s = (l) => {
      t.offset = l;
    };
    return je(() => {
      e.relation(Fe(), "unmount");
    }), Qg({ setOffset: s }), {
      style: n
    };
  }
});
function t0(e, t, n, s, l, a) {
  return u(), d("view", {
    class: "nut-swiper-item",
    style: A(e.style)
  }, [
    I(e.$slots, "default")
  ], 4);
}
const un = /* @__PURE__ */ U(e0, [["render", t0]]), { componentName: Mn, create: n0 } = Y("price"), o0 = n0({
  props: {
    price: {
      type: [Number, String],
      default: 0
    },
    needSymbol: {
      type: Boolean,
      default: !0
    },
    symbol: {
      type: String,
      default: "&yen;"
    },
    decimalDigits: {
      type: Number,
      default: 2
    },
    thousands: {
      type: Boolean,
      default: !1
    },
    position: {
      type: String,
      default: "before"
    },
    size: {
      type: String,
      default: "normal"
    },
    strikeThrough: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = D(() => ({
      [Mn]: !0,
      [`${Mn}--strike`]: e.strikeThrough
    })), n = D(() => e.needSymbol ? e.symbol : ""), s = (o) => String(o).indexOf(".") > 0;
    return {
      classes: t,
      showSymbol: n,
      checkPoint: s,
      formatThousands: (o) => (Number(o) == 0 && (o = 0), s(o) ? (o = Number(o).toFixed(e.decimalDigits), o = typeof o.split(".") == "string" ? o.split(".") : o.split(".")[0]) : o = o.toString(), e.thousands ? (o || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,") : o),
      formatDecimal: (o) => {
        Number(o) == 0 && (o = 0), s(o) ? (o = Number(o).toFixed(e.decimalDigits), o = typeof o.split(".") == "string" ? 0 : o.split(".")[1] ? o.split(".")[1] : 0) : o = 0;
        const r = "0." + o, i = Number(r).toFixed(e.decimalDigits);
        return String(i).substring(2, i.length);
      }
    };
  }
}), l0 = ["innerHTML"], s0 = ["innerHTML"];
function a0(e, t, n, s, l, a) {
  return u(), d("view", {
    class: M(e.classes)
  }, [
    e.needSymbol && e.position === "before" ? (u(), d("view", {
      key: 0,
      class: M(["nut-price--symbol", `nut-price--symbol-${e.size}`]),
      innerHTML: e.showSymbol
    }, null, 10, l0)) : T("", !0),
    m("view", {
      class: M(`nut-price--${e.size}`)
    }, L(e.formatThousands(e.price)), 3),
    e.decimalDigits != 0 ? (u(), d("view", {
      key: 1,
      class: M(`nut-price--decimal-${e.size}`)
    }, ".", 2)) : T("", !0),
    m("view", {
      class: M(`nut-price--decimal-${e.size}`)
    }, L(e.formatDecimal(e.price)), 3),
    e.needSymbol && e.position === "after" ? (u(), d("view", {
      key: 2,
      class: M(["nut-price--symbol", `nut-price--symbol-${e.size}`]),
      innerHTML: e.showSymbol
    }, null, 10, s0)) : T("", !0)
  ], 2);
}
const cn = /* @__PURE__ */ U(o0, [["render", a0]]), Lo = {
  show: { type: Boolean, default: !1 },
  initNo: { type: Number, default: 0 },
  showIndex: { type: Boolean, default: !0 },
  minZoom: { type: Number, default: 1 / 3 },
  maxZoom: { type: Number, default: 3 }
}, { create: r0 } = Y("image-preview-item"), i0 = r0({
  props: ce(Z({}, Lo), {
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
    NutVideo: an,
    NutSwiperItem: un
  },
  setup(e, { emit: t }) {
    const n = ue({
      scale: 1,
      moveX: 0,
      moveY: 0,
      moving: !1,
      zooming: !1,
      imageRatio: 0,
      displayWidth: 0,
      displayHeight: 0
    }), s = Ze(), l = D(() => {
      const { rootWidth: S, rootHeight: P } = e, O = P / S;
      return n.imageRatio > O;
    }), a = D(() => {
      const S = e.image;
      if (S && S.src) {
        const { scale: P, moveX: O, moveY: K, moving: G, zooming: W } = n, le = {
          transitionDuration: W || G ? "0s" : ".3s"
        };
        if (P !== 1) {
          const q = O / P, R = K / P;
          le.transform = `scale(${P}, ${P}) translate(${q}px, ${R}px)`;
        }
        return le;
      }
      return {};
    }), o = D(() => {
      if (n.imageRatio) {
        const { rootWidth: S, rootHeight: P } = e, O = l.value ? P / n.imageRatio : S;
        return Math.max(0, (n.scale * O - S) / 2);
      }
      return 0;
    }), r = D(() => {
      if (n.imageRatio) {
        const { rootWidth: S, rootHeight: P } = e, O = l.value ? P : S * n.imageRatio;
        return Math.max(0, (n.scale * O - P) / 2);
      }
      return 0;
    }), i = (S) => {
      const { naturalWidth: P, naturalHeight: O } = S.target;
      n.imageRatio = O / P;
    }, p = () => {
      f(1), n.moveX = 0, n.moveY = 0;
    }, f = (S) => {
      S = Pe(S, +e.minZoom, +e.maxZoom + 1), S !== n.scale && (n.scale = S, t("scale", {
        scale: S,
        index: e.initNo
      }));
    }, v = () => {
      const S = n.scale > 1 ? 1 : 2;
      f(S), n.moveX = 0, n.moveY = 0;
    }, y = (S) => Math.sqrt(ct(S[0].clientX - S[1].clientX, 2) + ct(S[0].clientY - S[1].clientY, 2));
    let $, b, k, c, g, h, w;
    const B = (S) => {
      const { touches: P } = S, { offsetX: O } = s;
      s.start(S), w = P.length, $ = n.moveX, b = n.moveY, h = Date.now(), n.moving = w === 1 && n.scale !== 1, n.zooming = w === 2 && !O.value, n.zooming && (k = n.scale, c = y(S.touches));
    }, N = (S) => {
      const { touches: P } = S;
      if (s.move(S), (n.moving || n.zooming) && it(S, !0), n.moving) {
        const { deltaX: O, deltaY: K } = s, G = O.value + $, W = K.value + b;
        n.moveX = Pe(G, -o.value, o.value), n.moveY = Pe(W, -r.value, r.value);
      }
      if (n.zooming && P.length === 2) {
        const O = y(P), K = k * O / c;
        f(K);
      }
    }, E = () => {
      if (w == 1 && e.video && e.video.source || w > 1)
        return;
      const { offsetX: S, offsetY: P } = s, O = Date.now() - h, K = 250, G = 5;
      S.value < G && P.value < G && O < K && (g ? (clearTimeout(g), g = null, v()) : g = setTimeout(() => {
        e.contentClose && t("close"), g = null;
      }, K));
    }, C = (S) => {
      let P = !1;
      (n.moving || n.zooming) && (P = !0, n.moving && $ === n.moveX && b === n.moveY && (P = !1), S.touches.length || (n.zooming && (n.moveX = Pe(n.moveX, -o.value, o.value), n.moveY = Pe(n.moveY, -r.value, r.value), n.zooming = !1), n.moving = !1, $ = 0, b = 0, k = 1, n.scale < 1 && p(), n.scale > e.maxZoom && (n.scale = +e.maxZoom))), it(S, P), E(), s.reset();
    }, _ = () => {
      t("close");
    };
    return Q(() => e.initNo, p), Q(
      () => e.show,
      (S) => {
        S || p();
      }
    ), ce(Z({}, he(n)), {
      onTouchStart: B,
      onTouchMove: N,
      onTouchEnd: C,
      getDistance: y,
      imageStyle: a,
      imageLoad: i,
      closeSwiper: _
    });
  }
}), u0 = ["src"];
function c0(e, t, n, s, l, a) {
  const o = j("nut-video"), r = j("nut-swiper-item");
  return u(), ee(r, { onClick: e.closeSwiper }, {
    default: te(() => [
      m("view", {
        style: A(e.imageStyle),
        class: "nut-image-preview-box",
        onTouchstart: t[1] || (t[1] = (...i) => e.onTouchStart && e.onTouchStart(...i)),
        onTouchmove: t[2] || (t[2] = (...i) => e.onTouchMove && e.onTouchMove(...i)),
        onTouchend: t[3] || (t[3] = (...i) => e.onTouchEnd && e.onTouchEnd(...i)),
        onTouchcancel: t[4] || (t[4] = (...i) => e.onTouchEnd && e.onTouchEnd(...i))
      }, [
        e.image && e.image.src ? (u(), d("img", {
          key: 0,
          src: e.image.src,
          class: "nut-image-preview-img",
          onLoad: t[0] || (t[0] = (...i) => e.imageLoad && e.imageLoad(...i))
        }, null, 40, u0)) : T("", !0),
        e.video && e.video.source ? (u(), ee(o, {
          key: 1,
          source: e.video.source,
          options: e.video.options
        }, null, 8, ["source", "options"])) : T("", !0)
      ], 36)
    ]),
    _: 1
  }, 8, ["onClick"]);
}
const d0 = /* @__PURE__ */ U(i0, [["render", c0]]), { create: f0 } = Y("image-preview"), p0 = f0({
  props: ce(Z({}, Lo), {
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
    ImagePreviewItem: d0,
    CircleClose: Jt,
    NutPopup: Le,
    NutSwiper: rn
  },
  setup(e, { emit: t }) {
    const n = z(), s = ue({
      showPop: e.show,
      active: 0,
      rootWidth: 0,
      rootHeight: 0
    }), l = D(() => {
      const f = "nut-image-preview-close";
      return `nut-image-preview-close-icon ${e.closeIconPosition == "top-right" ? `${f}-right` : `${f}-left`}`;
    }), a = D(() => Gt(e.videos) ? [].concat(e.videos).concat(e.images) : e.images), o = (f) => {
      f !== s.active && (s.active = f, t("change", s.active));
    }, r = () => {
      Zt(e.beforeClose, {
        args: [s.active],
        done: () => i()
      });
    }, i = () => {
      s.showPop = !1, t("close");
    }, p = () => {
      if (n.value) {
        const f = Oe(n.value);
        s.rootHeight = f.height, s.rootWidth = f.width;
      }
    };
    return Q(
      () => e.show,
      (f) => {
        s.showPop = f, f && (o(e.initNo), Te(() => {
          p();
        }));
      }
    ), Q(
      () => e.initNo,
      (f) => {
        f != s.active && o(f);
      }
    ), ve(() => {
      o(e.initNo);
    }), ce(Z({
      swipeRef: n
    }, he(s)), {
      onClose: r,
      mergeImages: a,
      setActive: o,
      iconClasses: l
    });
  }
}), m0 = {
  ref: "swipeRef",
  class: "nut-image-preview"
}, h0 = {
  key: 0,
  class: "nut-image-preview-index"
};
function g0(e, t, n, s, l, a) {
  const o = j("image-preview-item"), r = j("nut-swiper"), i = j("CircleClose"), p = j("nut-popup");
  return u(), ee(p, {
    visible: e.showPop,
    "onUpdate:visible": t[1] || (t[1] = (f) => e.showPop = f),
    "pop-class": "nut-image-preview-custom-pop",
    "teleport-disable": e.teleportDisable,
    teleport: e.teleport,
    "lock-scroll": "",
    onClosed: e.onClose
  }, {
    default: te(() => [
      m("view", m0, [
        e.showPop ? (u(), ee(r, {
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
          default: te(() => [
            (u(!0), d(x, null, ie(e.mergeImages, (f, v) => (u(), ee(o, {
              key: v,
              video: v < e.videos.length ? f : {},
              image: v >= e.videos.length ? f : {},
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
      e.showIndex ? (u(), d("view", h0, L(e.active + 1) + " / " + L(e.mergeImages.length), 1)) : T("", !0),
      e.closeable ? (u(), d("view", {
        key: 1,
        class: M(e.iconClasses),
        onClick: t[0] || (t[0] = (...f) => e.onClose && e.onClose(...f))
      }, [
        I(e.$slots, "close-icon", {}, () => [
          oe(i, { color: "#ffffff" })
        ])
      ], 2)) : T("", !0)
    ]),
    _: 3
  }, 8, ["visible", "teleport-disable", "teleport", "onClosed"]);
}
const dn = /* @__PURE__ */ U(p0, [["render", g0]]);
class y0 {
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
class v0 {
  constructor(t) {
    V(this, "options", new y0());
    const n = Object.assign(this.options, t), { unmount: s } = tn(n, {
      name: "image-preview",
      components: [Le, an, rn, un, kt],
      wrapper: () => ({
        setup() {
          return () => (n.onClose = () => {
            n.show = !1, Te(() => {
              s();
            });
          }, be(dn, n));
        }
      })
    });
  }
}
const $0 = (e) => new v0(e);
$0.install = (e) => {
  e.use(dn);
};
function b0(e) {
  const t = Fe();
  t && Object.assign(t.proxy, e);
}
const { create: w0 } = Y("countup"), k0 = w0({
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
    const n = z(null), s = z([]), l = (_) => {
      _ && s.value.push(_);
    }, a = ue({
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
    }), { startFlag: o, scrolling: r, customBgImg: i, type: p } = ue(e);
    Q(
      () => e.customChangeNum,
      () => {
        v(), c(0);
      }
    ), Q(
      () => e.machinePrizeLevel,
      (_) => {
        a.prizeLevelTrun = _;
      }
    ), Q(
      () => e.initNum,
      (_) => {
        a.current = _, a.valFlag = !1, f();
      }
    ), Q(
      () => e.endNum,
      () => {
        a.current = e.initNum, a.valFlag = !1, f();
      }
    );
    const f = () => {
      if (a.valFlag)
        return !1;
      o && (r || i ? p != "machine" && c() : (k(), setTimeout(() => {
        a.valFlag = !0;
      }, 300)));
    }, v = () => {
      clearInterval(Number(a.timer)), a.timer = null;
    }, y = (_, S, P) => {
      const O = (_.toString().split(".")[1] || "").length, K = (S.toString().split(".")[1] || "").length, G = Math.pow(10, Math.max(O, K));
      return P == "-" ? Number((_ * G - S * G).toFixed(0)) / G : Number((_ * G + S * G).toFixed(0)) / G;
    }, $ = (_) => {
      let { num_total_len: S, pointNum: P, initDigit1: O, initDigit2: K, sortFlag: G } = a, W = G == "add" || G == "equal" ? String(K)[_ - (S - P)] : 10 - Number(String(K)[_ - (S - P)]), le = G == "add" || G == "equal" ? String(O)[_] : 10 - Number(String(O)[_]), q = _ > S - P - 1 ? -W * 100 + "%" : _ <= String(O).length - 1 ? -le * 100 + "%" : 0;
      return q == "-1000%" && (q = 0), q;
    }, b = (_) => {
      let { num_total_len: S, pointNum: P, initDigit1: O, initDigit2: K } = a, G = String(K)[_ - (S - P)];
      return _ > S - P - 1 ? G || 0 : _ <= String(O).length - 1 ? String(O)[_] : 0;
    }, k = () => {
      let { endNum: _, initNum: S, speed: P, toFixed: O } = e, K = setInterval(() => {
        if (S > _)
          if (Number(a.current) <= _ || Number(a.current) <= P)
            a.current = _.toFixed(O), clearInterval(K), t("scrollEnd"), a.valFlag = !1;
          else {
            let G = parseFloat(String(a.current)) - parseFloat(String(P));
            a.current = G.toFixed(O);
          }
        else if (Number(a.current) >= _)
          a.current = _.toFixed(O), clearInterval(K), t("scrollEnd"), a.valFlag = !1;
        else {
          let G = parseFloat(String(a.current)) + parseFloat(String(P));
          a.current = G.toFixed(O);
        }
      }, e.during);
    }, c = (_) => {
      let { initNum: S, endNum: P, toFixed: O, customBgImg: K } = e;
      K && (S = e.customChangeNum);
      let G, W, le, q;
      S != 0 ? (O != 0 && (S = Number(S.toFixed(O))), String(S).indexOf(".") > -1 ? (G = String(S).split(".")[0].length, W = String(S).split(".")[1].length) : (G = String(S).length, W = 0)) : (G = 1, W = 0), P != 0 ? (O != 0 && (P = Number(P.toFixed(O))), String(P).indexOf(".") > -1 ? (le = String(P).split(".")[0].length, q = String(P).split(".")[1].length) : (le = String(P).length, q = 0)) : (le = 1, q = 0);
      let R = G >= le ? G : le, ne = W >= q ? W : q;
      a.num_total_len = R + ne, a.pointNum = ne, S > P ? (a.sortFlag = "reduce", a.to0_10 = [0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], a.totalCount = y(S, P, "-"), a.numberVal = Number(String(S))) : S < P ? (a.sortFlag = "add", a.to0_10 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0], a.totalCount = y(P, S, "-"), a.numberVal = Number(String(P))) : a.sortFlag = "equal";
      var X = 1;
      for (let de = 0; de < a.pointNum; de++)
        X *= 10;
      var ae = a.numberVal * X;
      if (a.relNum = ae, O != 0 && (a.pointNum = String(a.numberVal).split(".")[1] ? String(a.numberVal).split(".")[1].length : 0, a.num_total_len = String(ae).length), String(S).indexOf(".") > -1) {
        let de = String(S).split(".");
        a.initDigit1 = Number(de[0]), a.initDigit2 = Number(de[1]);
      } else
        a.initDigit1 = S, a.initDigit2 = 0;
      r && !K ? Te(() => {
        if (a.sortFlag == "equal")
          return !1;
        let de = s.value[a.num_total_len - 1];
        g(de);
      }) : _ !== 0 && B();
    }, g = (_) => {
      v();
      var S = 1;
      a.pointNum != 0 && (S = 1 / Math.pow(10, a.pointNum)), a.timer = setInterval(() => {
        h(_), a.totalCount = y(a.totalCount, S, "-"), a.totalCount <= 0 && (v(), t("scrollEnd"), a.valFlag = !1);
      }, e.during);
    }, h = (_) => {
      let S = _.getAttribute("turn-number"), P;
      if (a.sortFlag == "add" ? P = parseInt(String(S)) + 1 : P = parseInt(String(S)) - 1 >= 0 ? parseInt(String(S)) - 1 : 9, _.setAttribute("turn-number", String(P)), (_.style.transition == "none 0s ease 0s" || P == 1 || !_.style.transition) && (_.style.transition = `all linear ${e.during}ms`), P == 10 || a.sortFlag == "reduce" && P == 0) {
        var O = null;
        _.style.top = `-${a.sortFlag == "add" ? P * 100 : (10 - P) * 100}%`, _.setAttribute("turn-number", "0"), O = setTimeout(() => {
          O && clearTimeout(O), _.style.transition = "none", _.style.top = "0", w(_, P);
        }, 0.975 * e.during);
      } else
        _.style.top = `-${a.sortFlag == "add" ? P * 100 : (10 - P) * 100}%`;
      _.style.top == "-100%" && a.sortFlag == "reduce" && h(_.previousSibling);
    }, w = (_, S) => {
      setTimeout(() => {
        S == 10 && _.previousSibling && h(_.previousSibling);
      }, 200);
    }, B = () => {
      Te(() => {
        n.value.addEventListener("webkitTransitionEnd", () => {
          t("scrollEnd"), a.valFlag = !1;
        });
      });
    }, N = () => {
      for (a.notPrize = []; a.notPrize.length < 3; ) {
        var _ = Math.floor(Math.random() * e.machinePrizeNum + 1);
        a.notPrize.indexOf(_) == -1 && a.notPrize.push(_);
      }
    };
    b0({ machineLuck: () => {
      const _ = e.machineTurnMore < 0 ? 0 : e.machineTurnMore;
      let S = e.numHeight * e.machinePrizeNum;
      a.prizeLevelTrun < 0 && N();
      for (let P = 0; P < e.machineNum; P++)
        setTimeout(() => {
          let O = S * (P + 1 + parseFloat(String(_)));
          a.prizeYPrev.length != 0 && (a.prizeY[P] = a.prizeYPrev[P]);
          let K = a.prizeYPrev[P] ? a.prizeYPrev[P] : 0, G = O + K + (e.machinePrizeNum - a.prizeLevelTrun + 1) * e.numHeight + (S - K);
          a.prizeLevelTrun < 0 && (G += e.numHeight * a.notPrize[P]), C(
            P,
            // parseFloat((this.machinePrizeNum-(this.prizeLevelTrun-1))*this.numHeight + turn + local),
            G,
            K
          );
        }, 500 * P);
    } });
    const C = (_, S, P) => {
      let O = setInterval(() => {
        if (P <= S)
          P += 10, a.prizeY[_] = parseFloat(String(P));
        else if (clearInterval(O), O = null, a.finshMachine += 1, a.prizeY[_] = S, a.finshMachine == e.machineNum) {
          let K = e.numHeight * e.machinePrizeNum;
          a.prizeYPrev = [], JSON.parse(JSON.stringify(a.prizeY)).forEach((W) => {
            let le = W;
            for (; le > K; )
              le -= K;
            a.prizeYPrev.push(le);
          }), setTimeout(() => {
            a.finshMachine = 0, a.prizeLevelTrun < 0 ? (t("scrollEnd", !1), a.valFlag = !1) : (t("scrollEnd", !0), a.valFlag = !1);
          }, 130);
        }
      }, 30);
    };
    return ve(() => {
      a.current = e.initNum, Te(() => {
        f();
      });
    }), je(() => {
      v(), a.timer = null;
    }), ce(Z(Z({}, he(a)), he(ue(e))), {
      runNumberImg: n,
      setRef: l,
      topNumber: $,
      turnNumber: b
    });
  }
}), C0 = { class: "nut-countup" }, S0 = ["turn-number"];
function T0(e, t, n, s, l, a) {
  return u(), d("view", C0, [
    e.customBgImg != "" ? (u(), d(x, { key: 0 }, [
      e.type == "machine" ? (u(), d("view", {
        key: 0,
        class: "nut-countup__machine",
        style: A({ height: e.numHeight + "px" })
      }, [
        (u(!0), d(x, null, ie(e.machineNum, (o, r) => (u(), d("view", {
          key: "mImg" + r,
          class: "nut-countup__machine-item",
          style: A({
            width: e.numWidth + "px",
            height: e.numHeight + "px",
            backgroundImage: "url(" + e.customBgImg + ")",
            backgroundPositionY: e.prizeY[r] + "px"
          })
        }, null, 4))), 128))
      ], 4)) : (u(), d("view", {
        key: 1,
        ref: "runNumberImg",
        class: "nut-countup__numberimg",
        style: A({ height: e.numHeight + "px" })
      }, [
        (u(!0), d(x, null, ie(e.num_total_len, (o, r) => (u(), d("view", {
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
        e.pointNum > 0 ? (u(), d("view", {
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
    ], 64)) : (u(), d(x, { key: 1 }, [
      e.scrolling ? (u(), d("view", {
        key: 0,
        class: "nut-countup__number",
        style: A({
          width: e.numWidth * e.num_total_len + e.numWidth / 3 + "px",
          height: e.numHeight + "px",
          lineHeight: e.numHeight + "px"
        })
      }, [
        (u(!0), d(x, null, ie(e.num_total_len, (o, r) => (u(), d("view", {
          ref_for: !0,
          ref: (i) => e.setRef(i),
          key: o,
          class: "nut-countup__number-item",
          style: A({
            top: e.topNumber(r),
            left: e.numWidth * (r > e.num_total_len - e.pointNum - 1 ? r * 1.1 : r) + "px"
          }),
          "turn-number": e.turnNumber(r)
        }, [
          (u(!0), d(x, null, ie(e.to0_10, (i, p) => (u(), d("view", {
            key: "dote" + p,
            class: "nut-countup__number-item__span",
            style: A({
              width: e.numWidth + "px",
              height: e.numHeight + "px",
              lineHeight: e.numHeight + "px"
            })
          }, L(i), 5))), 128))
        ], 12, S0))), 128)),
        e.pointNum > 0 ? (u(), d("view", {
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
      ], 4)) : (u(), d(x, { key: 1 }, [
        ge(L(e.current), 1)
      ], 64))
    ], 64))
  ]);
}
const N0 = /* @__PURE__ */ U(k0, [["render", T0]]), D0 = (e) => {
  if (!e)
    return Date.now();
  let t = e;
  return t = +t > 0 ? +t : t.toString().replace(/-/g, "/"), new Date(t).getTime();
}, { create: _0 } = Y("countdown"), I0 = "NutCountdown", B0 = _0({
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
    const s = ke(I0), l = ue({
      restTime: 0,
      // 倒计时剩余时间时间
      timer: null,
      counting: !e.paused && e.autoStart,
      // 是否处于倒计时中
      handleEndTime: Date.now(),
      // 最终截止时间
      diffTime: 0
      // 设置了 startTime 时，与 date.now() 的差异
    }), a = D(() => i(l.restTime)), o = () => {
      l.handleEndTime = e.endTime, l.diffTime = Date.now() - D0(e.startTime), l.counting || (l.counting = !0), r();
    }, r = () => {
      window !== void 0 && (l.timer = requestAnimationFrame(() => {
        if (l.counting) {
          const $ = Date.now() - l.diffTime, b = Math.max(l.handleEndTime - $, 0);
          l.restTime = b, b || (l.counting = !1, v(), t("end"), t("onEnd")), b > 0 && r();
        }
      }));
    }, i = ($, b) => {
      const k = $;
      let c = {
        d: 0,
        h: 0,
        m: 0,
        s: 0,
        ms: 0
      };
      const g = 1e3, h = 60 * g, w = 60 * h, B = 24 * w;
      return k > 0 && (c.d = k >= g ? Math.floor(k / B) : 0, c.h = Math.floor(k % B / w), c.m = Math.floor(k % w / h), c.s = Math.floor(k % h / g), c.ms = Math.floor(k % g)), b == "custom" ? c : p(Z({}, c));
    }, p = ($) => {
      let { d: b, h: k, m: c, s: g, ms: h } = $, w = e.format;
      if (w.includes("DD") ? w = w.replace("DD", qe(b)) : k += Number(b) * 24, w.includes("HH") ? w = w.replace("HH", qe(k)) : c += Number(k) * 60, w.includes("mm") ? w = w.replace("mm", qe(c)) : g += Number(c) * 60, w.includes("ss") ? w = w.replace("ss", qe(g)) : h += Number(g) * 1e3, w.includes("S")) {
        const B = qe(h, 3).toString();
        w.includes("SSS") ? w = w.replace("SSS", B) : w.includes("SS") ? w = w.replace("SS", B.slice(0, 2)) : w.includes("S") && (w = w.replace("S", B.slice(0, 1)));
      }
      return w;
    }, f = () => {
      !l.counting && !e.autoStart && (l.counting = !0, l.handleEndTime = Date.now() + Number(l.restTime), r(), t("restart", l.restTime), t("onRestart", l.restTime));
    }, v = () => {
      cancelAnimationFrame(l.timer), l.counting = !1, t("paused", l.restTime), t("onPaused", l.restTime);
    }, y = () => {
      e.autoStart || (v(), l.restTime = e.time);
    };
    return En(() => {
      e.autoStart ? o() : l.restTime = e.time;
    }), Q(
      () => l.restTime,
      ($) => {
        let b = i($, "custom");
        t("update:modelValue", b), t("input", b);
      }
    ), Q(
      () => e.paused,
      ($, b) => {
        b ? (l.counting || (l.counting = !0, l.handleEndTime = Date.now() + Number(l.restTime), r()), t("restart", l.restTime), t("onRestart", l.restTime)) : l.counting && v();
      }
    ), Q(
      () => e.endTime,
      () => {
        o();
      }
    ), Q(
      () => e.startTime,
      () => {
        o();
      }
    ), ce(Z({}, he(e)), {
      slots: n,
      start: f,
      pause: v,
      renderTime: a,
      translate: s,
      reset: y
    });
  }
}), M0 = { class: "nut-countdown" }, L0 = ["innerHTML"];
function E0(e, t, n, s, l, a) {
  return u(), d("view", M0, [
    e.slots.default ? I(e.$slots, "default", { key: 0 }) : (u(), d("view", {
      key: 1,
      class: "nut-countdown__content",
      innerHTML: e.renderTime
    }, null, 8, L0))
  ]);
}
const P0 = /* @__PURE__ */ U(B0, [["render", E0]]), { create: A0 } = Y("tag"), z0 = A0({
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
    Close: Et
  },
  emits: ["close", "click"],
  setup(e, { emit: t }) {
    const n = D(() => {
      const o = "nut-tag";
      return {
        [o]: !0,
        [`${o}--${e.type}`]: e.type,
        [`${o}--plain`]: e.plain,
        [`${o}--round`]: e.round,
        [`${o}--mark`]: e.mark
      };
    }), s = D(() => {
      const o = {};
      return e.textColor ? o.color = e.textColor : e.color && e.plain && (o.color = e.color), e.plain ? (o.background = "#fff", o["border-color"] = e.color) : e.color && (o.background = e.color), o;
    });
    return {
      classes: n,
      style: s,
      onClose: (o) => {
        o.stopPropagation(), t("close", o);
      },
      onClick: (o) => {
        t("click", o);
      }
    };
  }
});
function V0(e, t, n, s, l, a) {
  const o = j("Close");
  return u(), d("view", {
    class: M(e.classes),
    style: A(e.style),
    onClick: t[0] || (t[0] = (...r) => e.onClick && e.onClick(...r))
  }, [
    I(e.$slots, "default"),
    e.closeable ? (u(), ee(o, {
      key: 0,
      class: "nut-tag--close",
      width: "12px",
      height: "12px",
      onClick: e.onClose
    }, null, 8, ["onClick"])) : T("", !0)
  ], 6);
}
const Eo = /* @__PURE__ */ U(z0, [["render", V0]]), { create: O0 } = Y("popover"), H0 = O0({
  components: {
    NutPopup: Le
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
    const n = z(), s = z(), l = z(e.visible);
    let a = z(), o = z();
    const r = D(() => {
      const h = "nut-popover-arrow", w = e.location, B = w.split("-")[0];
      return `${h} ${h}-${B} ${h}--${w}`;
    }), i = D(() => {
      const h = {}, { bgColor: w, arrowOffset: B, location: N } = e, E = N.split("-")[0], C = N.split("-")[1], _ = 16;
      return w && (h[`border${p(E)}Color`] = w), e.arrowOffset != 0 && (["bottom", "top"].includes(E) && (C || (h.left = `calc(50% + ${B}px)`), C == "start" && (h.left = `${_ + B}px`), C == "end" && (h.right = `${_ - B}px`)), ["left", "right"].includes(E) && (C || (h.top = `calc(50% - ${B}px)`), C == "start" && (h.top = `${_ - B}px`), C == "end" && (h.bottom = `${_ + B}px`))), h;
    }), p = (h) => (h = h.toLowerCase(), h = h.replace(/\b\w+\b/g, (w) => w.substring(0, 1).toUpperCase() + w.substring(1)), h), f = D(() => {
      let h = {};
      if (!a.value || !o.value)
        return {};
      const w = o.value.width, B = o.value.height, { width: N, height: E, left: C, top: _ } = a.value, { location: S, offset: P } = e, O = S.split("-")[0], K = S.split("-")[1];
      let G = 0, W = 0;
      if (Gt(P) && P.length == 2 && (G += Number(P[1]), W += Number(P[0])), N) {
        if (["bottom", "top"].includes(O)) {
          const le = O == "bottom" ? E + G : -(B + G);
          h.top = `${_ + le}px`, K || (h.left = `${-(w - N) / 2 + C + W}px`), K == "start" && (h.left = `${C + W}px`), K == "end" && (h.left = `${a.value.right + W}px`);
        }
        if (["left", "right"].includes(O)) {
          const le = O == "left" ? -(w + G) : N + G;
          h.left = `${C + le}px`, K || (h.top = `${_ - B / 2 + E / 2 - 4 + W}px`), K == "start" && (h.top = `${_ + W}px`), K == "end" && (h.top = `${_ + E + W}px`);
        }
      }
      return h;
    }), v = D(() => {
      const h = {};
      return e.bgColor && (h.background = e.bgColor), h;
    }), y = () => {
      let h = Oe(n.value);
      e.targetId && (h = Oe(document.querySelector(`#${e.targetId}`))), a.value = h, setTimeout(() => {
        var w, B;
        o.value = {
          height: (w = s.value) == null ? void 0 : w.clientHeight,
          width: (B = s.value) == null ? void 0 : B.clientWidth
        };
      }, 0);
    };
    ve(() => {
      setTimeout(() => {
        y();
      }, 200);
    }), Q(
      () => e.visible,
      (h) => {
        l.value = h, h ? (window.addEventListener("touchstart", g, !0), y()) : window.removeEventListener("touchstart", g, !0);
      }
    );
    const $ = (h) => {
      t("update", h), t("update:visible", h);
    }, b = () => {
      $(!e.visible), t("open");
    }, k = () => {
      t("update:visible", !1), t("close");
    }, c = (h, w) => {
      !h.disabled && t("choose", h, w), e.closeOnClickAction && k();
    }, g = (h) => {
      const w = n.value, B = s.value;
      let N = w && !w.contains(h.target);
      if (e.targetId) {
        const E = document.querySelector(`#${e.targetId}`);
        N = E && !E.contains(h.target);
      }
      N && B && !B.contains(h.target) && e.closeOnClickOutside && k();
    };
    return {
      showPopup: l,
      openPopover: b,
      popoverArrow: r,
      closePopover: k,
      chooseItem: c,
      popoverRef: n,
      popoverContentRef: s,
      getRootPosition: f,
      customStyle: v,
      popoverArrowStyle: i,
      renderIcon: ut
    };
  }
}), R0 = {
  ref: "popoverContentRef",
  class: "nut-popover-content-group"
}, F0 = ["onClick"], W0 = { class: "nut-popover-menu-item-name" };
function Y0(e, t, n, s, l, a) {
  const o = j("nut-popup");
  return u(), d(x, null, [
    e.targetId ? T("", !0) : (u(), d("div", {
      key: 0,
      ref: "popoverRef",
      class: "nut-popover-wrapper",
      onClick: t[0] || (t[0] = (...r) => e.openPopover && e.openPopover(...r))
    }, [
      I(e.$slots, "reference")
    ], 512)),
    m("view", {
      class: M(["nut-popover", `nut-popover--${e.theme}`, `${e.customClass}`]),
      style: A(e.getRootPosition)
    }, [
      oe(o, {
        visible: e.showPopup,
        "onUpdate:visible": t[1] || (t[1] = (r) => e.showPopup = r),
        "pop-class": `nut-popover-content nut-popover-content--${e.location}`,
        style: A(e.customStyle),
        position: "",
        transition: "nut-popover",
        overlay: e.overlay,
        duration: e.duration,
        "overlay-style": e.overlayStyle,
        "overlay-class": e.overlayClass,
        "close-on-click-overlay": e.closeOnClickOverlay
      }, {
        default: te(() => [
          m("view", R0, [
            e.showArrow ? (u(), d("view", {
              key: 0,
              class: M(e.popoverArrow),
              style: A(e.popoverArrowStyle)
            }, null, 6)) : T("", !0),
            I(e.$slots, "content"),
            (u(!0), d(x, null, ie(e.list, (r, i) => (u(), d("view", {
              key: i,
              class: M([r.className, r.disabled && "nut-popover-menu-disabled", "nut-popover-menu-item"]),
              onClick: De((p) => e.chooseItem(r, i), ["stop"])
            }, [
              r.icon ? (u(), ee(Ae(e.renderIcon(r.icon)), {
                key: 0,
                class: "nut-popover-item-img"
              })) : T("", !0),
              m("view", W0, L(r.name), 1)
            ], 10, F0))), 128))
          ], 512)
        ]),
        _: 3
      }, 8, ["visible", "pop-class", "style", "overlay", "duration", "overlay-style", "overlay-class", "close-on-click-overlay"])
    ], 6)
  ], 64);
}
const Po = /* @__PURE__ */ U(H0, [["render", Y0]]), { create: j0 } = Y("skeleton"), U0 = j0({
  components: {
    NutAvatar: sn
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
    const { avatarShape: t, round: n, avatarSize: s } = he(e), l = D(() => {
      const r = "avatarClass";
      return {
        [r]: !0,
        [`${r}--${t.value}`]: t.value
      };
    });
    return {
      avatarShape: t,
      avatarClass: l,
      getBlockClass: (r) => ({
        [r]: !0,
        [`${r}--round`]: n.value
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
}), K0 = { key: 0 }, X0 = {
  key: 1,
  class: "nut-skeleton"
}, q0 = {
  key: 0,
  class: "nut-skeleton-animation"
}, Z0 = { class: "nut-skeleton-content" };
function G0(e, t, n, s, l, a) {
  const o = j("nut-avatar");
  return e.loading ? (u(), d("view", X0, [
    e.animated ? (u(), d("view", q0)) : T("", !0),
    m("view", Z0, [
      e.avatar ? (u(), ee(o, {
        key: 0,
        class: M(e.avatarClass),
        shape: e.avatarShape,
        style: A(e.getStyle())
      }, null, 8, ["class", "shape", "style"])) : T("", !0),
      m("view", {
        class: "nut-skeleton-content__line",
        style: A({ width: e.width })
      }, [
        e.title ? (u(), d("view", {
          key: 0,
          class: M(e.getBlockClass("nut-skeleton-blockTitle")),
          style: A({ height: e.height })
        }, null, 6)) : T("", !0),
        (u(!0), d(x, null, ie(Number(e.row), (r) => (u(), d("view", {
          key: r,
          class: M(e.getBlockClass("nut-skeleton-blockLine")),
          style: A({ height: e.height })
        }, null, 6))), 128))
      ], 4)
    ])
  ])) : (u(), d("view", K0, [
    I(e.$slots, "default")
  ]));
}
const J0 = /* @__PURE__ */ U(U0, [["render", G0]]), Ao = Symbol("nut-collapse"), { create: Q0 } = Y("collapse"), x0 = Q0({
  props: {
    modelValue: {
      type: [String, Number, Array],
      default: ""
    },
    accordion: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const n = z(null), s = z(e.modelValue || (e.accordion ? "" : []));
    Q(
      () => e.modelValue,
      (r) => {
        s.value = r;
      }
    );
    const l = (r, i, p = !0) => {
      s.value = r, t("update:modelValue", r), t("change", r, i, p);
    };
    return Me(Ao, {
      updateVal: (r) => {
        if (e.accordion)
          s.value === r ? l("", r, !1) : l(r, r, !0);
        else if (Array.isArray(s.value))
          if (s.value.includes(r)) {
            const i = s.value.filter((p) => p !== r);
            l(i, r, !1);
          } else {
            const i = s.value.concat([r]);
            l(i, r, !0);
          }
        else
          console.warn("[NutUI] <Collapse> 未开启手风琴模式时 v-model 应为数组");
      },
      isExpanded: (r) => e.accordion ? s.value === r : Array.isArray(s.value) ? s.value.includes(r) : !1
    }), { nutCollapseRef: n };
  }
}), ey = {
  ref: "nutCollapseRef",
  class: "nut-collapse"
};
function ty(e, t, n, s, l, a) {
  return u(), d("view", ey, [
    I(e.$slots, "default")
  ], 512);
}
const ny = /* @__PURE__ */ U(x0, [["render", ty]]), { create: oy } = Y("collapse-item"), ly = oy({
  props: {
    title: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    name: {
      type: [Number, String],
      default: -1,
      required: !0
    },
    border: {
      type: Boolean,
      default: !0
    },
    icon: {
      type: Object,
      default: () => Yn
    },
    rotate: {
      type: [String, Number],
      default: 180
    }
  },
  setup(e) {
    const t = z(null), n = z(null), s = Be(Ao), l = D(() => {
      const v = "nut-collapse-item";
      return {
        [v]: !0,
        [v + "__border"]: e.border
      };
    }), a = D(() => s ? s.isExpanded(e.name) : !1), o = z(a.value ? "auto" : "0px"), r = () => {
      s && s.updateVal(e.name);
    }, i = () => {
      a.value && (o.value = "auto");
    }, p = () => {
      o.value = "0px", requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          var y;
          const v = (y = n.value) == null ? void 0 : y.offsetHeight;
          o.value = v ? `${v}px` : "auto";
        });
      });
    }, f = () => {
      var y;
      const v = (y = n.value) == null ? void 0 : y.offsetHeight;
      o.value = v ? `${v}px` : "auto", requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          o.value = "0px";
        });
      });
    };
    return Q(a, (v) => {
      v ? p() : f();
    }), {
      classes: l,
      renderIcon: ut,
      wrapperRef: t,
      contentRef: n,
      open: p,
      toggle: r,
      wrapperHeight: o,
      expanded: a,
      onTransitionEnd: i
    };
  }
}), sy = { class: "nut-collapse-item__title-main" }, ay = { class: "nut-collapse-item__title-main-value" }, ry = ["innerHTML"], iy = {
  key: 2,
  class: "nut-collapse-item__title-label"
}, uy = {
  key: 0,
  class: "nut-collapse-item__title-sub"
}, cy = ["innerHTML"], dy = {
  key: 0,
  class: "nut-collapse__item-extraWrapper"
}, fy = { class: "nut-collapse__item-extraWrapper__extraRender" }, py = {
  ref: "contentRef",
  class: "nut-collapse__item-wrapper__content"
};
function my(e, t, n, s, l, a) {
  return u(), d("view", {
    class: M(e.classes)
  }, [
    m("view", {
      class: M(["nut-collapse-item__title", { "nut-collapse-item__title--disabled": e.disabled }]),
      onClick: t[0] || (t[0] = (...o) => e.toggle && e.toggle(...o))
    }, [
      m("view", sy, [
        m("view", ay, [
          e.$slots.title ? I(e.$slots, "title", { key: 0 }) : (u(), d("view", {
            key: 1,
            class: "nut-collapse-item__title-mtitle",
            innerHTML: e.title
          }, null, 8, ry)),
          e.label ? (u(), d("view", iy, L(e.label), 1)) : T("", !0)
        ])
      ]),
      e.$slots.value ? (u(), d("view", uy, [
        I(e.$slots, "value")
      ])) : (u(), d("view", {
        key: 1,
        class: "nut-collapse-item__title-sub",
        innerHTML: e.value
      }, null, 8, cy)),
      m("view", {
        class: M(["nut-collapse-item__title-icon", { "nut-collapse-item__title-icon--expanded": e.expanded }]),
        style: A({ transform: "rotate(" + (e.expanded ? e.rotate : 0) + "deg)" })
      }, [
        e.$slots.icon ? I(e.$slots, "icon", { key: 0 }) : (u(), ee(Ae(e.renderIcon(e.icon)), { key: 1 }))
      ], 6)
    ], 2),
    e.$slots.extra ? (u(), d("view", dy, [
      m("div", fy, [
        I(e.$slots, "extra")
      ])
    ])) : T("", !0),
    m("view", {
      ref: "wrapperRef",
      class: "nut-collapse__item-wrapper",
      style: A({
        willChange: "height",
        height: e.wrapperHeight
      }),
      onTransitionend: t[1] || (t[1] = (...o) => e.onTransitionEnd && e.onTransitionEnd(...o))
    }, [
      m("view", py, [
        I(e.$slots, "default")
      ], 512)
    ], 36)
  ], 2);
}
const hy = /* @__PURE__ */ U(ly, [["render", my]]), gy = nt({
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
}), { create: yy } = Y("table"), vy = "NutTable", $y = yy({
  components: {
    RenderColumn: gy,
    DownArrow: Yn
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
    const n = ke(vy), s = ue({
      curData: e.data
    }), l = (v) => ({
      "nut-table__main__head__tr--border": e.bordered,
      [`nut-table__main__head__tr--align${v.align ? v.align : ""}`]: !0
    }), a = (v) => v.stylehead ? v.stylehead : "", o = (v) => v.stylecolumn ? v.stylecolumn : "", r = (v) => e.columns.filter((y) => y.key === v)[0], i = (v) => {
      const y = e.columns.filter(($) => $.key === v);
      return y[0].stylecolumn ? y[0].stylecolumn : "";
    }, p = (v) => {
      v.sorter && (t("sorter", v), s.curData = typeof v.sorter == "function" ? s.curData.sort(v.sorter) : v.sorter === "default" ? s.curData.sort() : s.curData);
    }, f = () => e.columns.map((v) => [v.key, v.render]);
    return Q(
      () => e.data,
      (v) => {
        s.curData = v.slice();
      }
    ), ce(Z({}, he(s)), {
      cellClasses: l,
      getColumnItem: r,
      getColumnItemStyle: i,
      handleSorterClick: p,
      sortDataItem: f,
      translate: n,
      stylehead: a,
      stylecolumn: o
    });
  }
}), by = { class: "nut-table" }, wy = { class: "nut-table__main__head" }, ky = { class: "nut-table__main__head__tr" }, Cy = ["onClick"], Sy = { class: "nut-table__main__body" }, Ty = { key: 1 }, Ny = {
  key: 0,
  class: "nut-table__nodata"
}, Dy = {
  key: 0,
  class: "nut-table__nodata__text"
}, _y = {
  key: 1,
  class: "nut-table__summary"
}, Iy = ["innerHTML"];
function By(e, t, n, s, l, a) {
  const o = j("DownArrow"), r = j("RenderColumn");
  return u(), d("view", by, [
    m("view", {
      class: M(["nut-table__main", { "nut-table__main--striped": e.striped }])
    }, [
      m("view", wy, [
        m("view", ky, [
          (u(!0), d(x, null, ie(e.columns, (i) => (u(), d("span", {
            key: i.key,
            class: M(["nut-table__main__head__tr__th", e.cellClasses(i)]),
            style: A(i.stylehead),
            onClick: (p) => e.handleSorterClick(i)
          }, [
            ge(L(i.title) + " ", 1),
            I(e.$slots, "icon"),
            !e.$slots.icon && i.sorter ? (u(), ee(o, {
              key: 0,
              width: "12px",
              height: "12px"
            })) : T("", !0)
          ], 14, Cy))), 128))
        ])
      ]),
      m("view", Sy, [
        (u(!0), d(x, null, ie(e.curData, (i) => (u(), d("view", {
          key: i,
          class: "nut-table__main__body__tr"
        }, [
          (u(!0), d(x, null, ie(e.sortDataItem(), ([p, f]) => (u(), d("span", {
            key: p,
            class: M(["nut-table__main__body__tr__td", e.cellClasses(e.getColumnItem(p))]),
            style: A(e.getColumnItemStyle(p))
          }, [
            typeof i[p] == "function" || typeof f == "function" ? (u(), ee(r, {
              key: 0,
              slots: [f, i[p]],
              record: i
            }, null, 8, ["slots", "record"])) : (u(), d("view", Ty, L(i[p]), 1))
          ], 6))), 128))
        ]))), 128))
      ])
    ], 2),
    e.curData.length ? T("", !0) : (u(), d("view", Ny, [
      m("div", {
        class: M(["nut-table__nodata", { "nut-table__nodata--border": e.bordered }])
      }, [
        I(e.$slots, "nodata"),
        e.$slots.nodata ? T("", !0) : (u(), d("div", Dy, L(e.translate("noData")), 1))
      ], 2)
    ])),
    e.summary ? (u(), d("view", _y, [
      m("span", {
        class: "nut-table__summary__text",
        innerHTML: e.summary().value
      }, null, 8, Iy)
    ])) : T("", !0)
  ]);
}
const My = /* @__PURE__ */ U($y, [["render", By]]), { create: Ly } = Y("animate"), Ey = Ly({
  props: {
    type: {
      type: String,
      default: ""
    },
    show: {
      type: Boolean,
      defualt: !1
    },
    action: {
      type: String,
      default: ""
    },
    loop: {
      type: Boolean,
      default: !1
    },
    duration: {
      type: [String, Number],
      defualt: 500
    }
  },
  emits: ["click", "animate"],
  setup(e, { emit: t }) {
    const n = z(e.action === "initial" || e.show === !0 || e.loop), s = D(() => ({
      "nut-animate__container": !0,
      [`nut-animate-${e.type}`]: n.value,
      loop: e.loop
    })), l = () => {
      n.value = !1, requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          n.value = !0;
        });
      });
    }, a = (o) => {
      e.action === "click" && (l(), t("click", o), t("animate"));
    };
    return Q(
      () => e.show,
      (o) => {
        o && (l(), t("animate"));
      }
    ), { classes: s, handleClick: a };
  }
}), Py = { class: "nut-animate" };
function Ay(e, t, n, s, l, a) {
  return u(), d("view", Py, [
    m("view", {
      class: M(e.classes),
      style: A({
        animationDuration: e.duration ? `${e.duration}ms` : void 0
      }),
      onClick: t[0] || (t[0] = (...o) => e.handleClick && e.handleClick(...o))
    }, [
      I(e.$slots, "default")
    ], 6)
  ]);
}
const zy = /* @__PURE__ */ U(Ey, [["render", Ay]]), { create: Vy } = Y("ellipsis"), Oy = Vy({
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
    let s = null, l = 0;
    const a = z(), o = ue({
      exceeded: !1,
      //是否超出
      expanded: !1
      //是否折叠
    });
    Q(
      () => e.content,
      (b, k) => {
        b != k && r();
      }
    ), ve(() => {
      r();
    });
    const r = () => {
      if (!n.value)
        return;
      const b = window.getComputedStyle(n.value);
      s = document.createElement("div"), Array.prototype.slice.apply(b).forEach((g) => {
        s.style.setProperty(g, b.getPropertyValue(g));
      }), s.style.position = "fixed", s.style.left = "999999px", s.style.top = "999999px", s.style.zIndex = "-1000", s.style.height = "auto", s.style.minHeight = "auto", s.style.maxHeight = "auto", s.style.textOverflow = "clip", s.style.whiteSpace = "normal", s.style.webkitLineClamp = "unset", s.style.display = "block";
      const c = v(b.lineHeight === "normal" ? e.lineHeight : b.lineHeight);
      l = Math.floor(
        c * (Number(e.rows) + 0.5) + v(b.paddingTop) + v(b.paddingBottom)
      ), s.innerText = e.content, document.body.appendChild(s), i();
    }, i = () => {
      if (s.offsetHeight <= l)
        o.exceeded = !1, document.body.removeChild(s);
      else {
        o.exceeded = !0;
        const b = e.content.length, k = Math.floor((0 + b) / 2), c = e.direction === "middle" ? f([0, k], [k, b]) : p(0, b);
        a.value = c, document.body.removeChild(s);
      }
    }, p = (b, k) => {
      const c = o.expanded ? e.collapseText : e.expandText, g = e.content.length;
      if (k - b <= 1)
        return e.direction === "end" ? {
          leading: e.content.slice(0, b) + e.symbol
        } : {
          tailing: e.symbol + e.content.slice(k, g)
        };
      const h = Math.round((b + k) / 2);
      return e.direction === "end" ? s.innerText = e.content.slice(0, h) + e.symbol + c : s.innerText = c + e.symbol + e.content.slice(h, g), s.offsetHeight <= l ? e.direction === "end" ? p(h, k) : p(b, h) : e.direction === "end" ? p(b, h) : p(h, k);
    }, f = (b, k) => {
      const c = o.expanded ? e.collapseText : e.expandText, g = e.content.length;
      if (b[1] - b[0] <= 1 && k[1] - k[0] <= 1)
        return {
          leading: e.content.slice(0, b[0]) + e.symbol,
          tailing: e.symbol + e.content.slice(k[1], g)
        };
      const h = Math.floor((b[0] + b[1]) / 2), w = Math.ceil((k[0] + k[1]) / 2);
      return s.innerText = e.content.slice(0, h) + e.symbol + c + e.symbol + e.content.slice(w, g), s.offsetHeight <= l ? f([h, b[1]], [k[0], w]) : f([b[0], h], [w, k[1]]);
    }, v = (b) => {
      if (!b)
        return 0;
      const k = b.match(/^\d*(\.\d*)?/);
      return k ? Number(k[0]) : 0;
    }, y = (b) => {
      b == 1 ? (o.expanded = !0, t("change", "expand")) : (o.expanded = !1, t("change", "collapse"));
    }, $ = () => {
      t("click");
    };
    return ce(Z({}, he(o)), { root: n, ellipsis: a, clickHandle: y, handleClick: $ });
  }
}), Hy = { key: 0 }, Ry = { key: 1 }, Fy = { key: 2 };
function Wy(e, t, n, s, l, a) {
  return u(), d("view", {
    ref: "root",
    class: "nut-ellipsis",
    onClick: t[2] || (t[2] = (...o) => e.handleClick && e.handleClick(...o))
  }, [
    e.exceeded ? T("", !0) : (u(), d("view", Hy, L(e.content), 1)),
    e.exceeded && !e.expanded ? (u(), d("view", Ry, [
      ge(L(e.ellipsis && e.ellipsis.leading), 1),
      e.expandText ? (u(), d("span", {
        key: 0,
        class: "nut-ellipsis__text",
        onClick: t[0] || (t[0] = De((o) => e.clickHandle(1), ["stop"]))
      }, L(e.expandText), 1)) : T("", !0),
      ge(L(e.ellipsis && e.ellipsis.tailing), 1)
    ])) : T("", !0),
    e.exceeded && e.expanded ? (u(), d("view", Fy, [
      ge(L(e.content) + " ", 1),
      e.expandText ? (u(), d("span", {
        key: 0,
        class: "nut-ellipsis__text",
        onClick: t[1] || (t[1] = De((o) => e.clickHandle(2), ["stop"]))
      }, L(e.collapseText), 1)) : T("", !0)
    ])) : T("", !0)
  ], 512);
}
const Yy = /* @__PURE__ */ U(Oy, [["render", Wy]]), { componentName: jy, create: Uy } = Y("watermark"), Ky = Uy({
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
    const t = ue({
      base64Url: ""
    }), {
      zIndex: n,
      gapX: s,
      gapY: l,
      width: a,
      height: o,
      rotate: r,
      image: i,
      imageWidth: p,
      imageHeight: f,
      content: v,
      fontStyle: y,
      fontWeight: $,
      fontColor: b,
      fontSize: k,
      fontFamily: c
    } = e, g = () => {
      const w = document.createElement("canvas"), B = window.devicePixelRatio, N = w.getContext("2d"), E = `${(s + a) * B}px`, C = `${(l + o) * B}px`, _ = a * B, S = o * B;
      if (w.setAttribute("width", E), w.setAttribute("height", C), N) {
        if (i) {
          N.translate(_ / 2, S / 2), N.rotate(Math.PI / 180 * Number(r));
          const P = new Image();
          P.crossOrigin = "anonymous", P.referrerPolicy = "no-referrer", P.src = i, P.onload = () => {
            N.drawImage(
              P,
              -p * B / 2,
              -f * B / 2,
              p * B,
              f * B
            ), N.restore(), t.base64Url = w.toDataURL();
          };
        } else if (v) {
          N.textBaseline = "middle", N.textAlign = "center", N.translate(_ / 2, S / 2), N.rotate(Math.PI / 180 * Number(r));
          const P = Number(k) * B;
          N.font = `${y} normal ${$} ${P}px/${S}px ${c}`, N.fillStyle = b, Array.isArray(v) ? v.map((O, K) => {
            N.fillText(O, 0, (K - 1) * P);
          }) : N.fillText(v, 0, 0), N.restore(), t.base64Url = w.toDataURL();
        }
      } else
        throw new Error("当前环境不支持Canvas");
    };
    g(), Q(
      () => [
        n,
        s,
        l,
        a,
        o,
        r,
        i,
        p,
        f,
        v,
        y,
        $,
        b,
        k,
        c
      ],
      () => {
        g();
      }
    );
    const h = D(() => {
      const w = jy;
      return {
        [w]: !0,
        [`${w}-full-page`]: e.fullPage
      };
    });
    return ce(Z({}, he(t)), { classes: h });
  }
});
function Xy(e, t, n, s, l, a) {
  return u(), d("view", {
    class: M(e.classes),
    style: A({
      zIndex: e.zIndex,
      backgroundSize: `${e.gapX + e.width}px`,
      backgroundImage: `url('${e.base64Url}')`
    })
  }, null, 6);
}
const qy = /* @__PURE__ */ U(Ky, [["render", Xy]]), { create: Zy } = Y("trend-arrow"), Gy = Zy({
  components: { TriangleUp: Fr, TriangleDown: zr },
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
    const t = ue({
      rateTrend: e.rate > 0
    }), n = D(() => {
      const { rate: l, digits: a, showSign: o, showZero: r } = e;
      t.rateTrend = l > 0;
      const i = Math.abs(l);
      return !r && l === 0 ? "--" : `${o && l !== 0 ? t.rateTrend ? "+" : "-" : ""}${el(
        Number(i),
        a
      )}%`;
    }), s = D(() => {
      const { dropColor: l, riseColor: a, syncTextColor: o, textColor: r, rate: i } = e;
      return {
        color: i === 0 ? r : o ? t.rateTrend ? a : l : r
      };
    });
    return ce(Z({}, he(t)), { calcRate: n, calcStyle: s });
  }
}), Jy = { class: "nut-trend-arrow" };
function Qy(e, t, n, s, l, a) {
  const o = j("TriangleUp"), r = j("TriangleDown");
  return u(), d("view", Jy, [
    e.arrowLeft ? T("", !0) : (u(), d("span", {
      key: 0,
      class: "nut-trend-arrow-icon-before nut-trend-arrow-rate",
      style: A(e.calcStyle)
    }, L(e.calcRate), 5)),
    Number(e.rate) !== 0 && e.rateTrend ? I(e.$slots, "up-icon", { key: 1 }, () => [
      oe(o, { color: e.riseColor }, null, 8, ["color"])
    ]) : T("", !0),
    Number(e.rate) !== 0 && !e.rateTrend ? I(e.$slots, "down-icon", { key: 2 }, () => [
      oe(r, { color: e.dropColor }, null, 8, ["color"])
    ]) : T("", !0),
    e.arrowLeft ? (u(), d("span", {
      key: 3,
      class: "nut-trend-arrow-icon-after nut-trend-arrow-rate",
      style: A(e.calcStyle)
    }, L(e.calcRate), 5)) : T("", !0)
  ]);
}
const xy = /* @__PURE__ */ U(Gy, [["render", Qy]]), { create: ev } = Y("tour"), tv = ev({
  components: {
    NutPopover: Po,
    Close: Et
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
    const n = ue({
      showTour: e.modelValue,
      showPopup: !1,
      active: 0
    }), s = z({}), l = D(() => "nut-tour"), a = D(() => {
      const { offset: f, maskWidth: v, maskHeight: y } = e, { width: $, height: b, left: k, top: c } = s.value, g = [k + $ / 2, c + b / 2], h = Number(v || $), w = Number(y || b);
      return {
        width: `${h + +f[1] * 2}px`,
        height: `${w + +f[0] * 2}px`,
        top: `${g[1] - w / 2 - +f[0]}px`,
        left: `${g[0] - h / 2 - +f[1]}px`
      };
    }), o = (f) => {
      f == "next" ? n.active = n.active + 1 : n.active = n.active - 1, n.showPopup = !1, Te(() => {
        n.showPopup = !0, r();
      }), t("change", n.active);
    }, r = () => {
      const f = document.querySelector(`#${e.steps[n.active].target}`), v = Oe(f);
      s.value = v;
    }, i = () => {
      n.showTour = !1, n.showPopup = !1, t("close", n.active), t("update:modelValue", !1);
    }, p = () => {
      e.closeOnClickOverlay && i();
    };
    return ve(() => {
      n.active = 0, r();
    }), Q(
      () => e.modelValue,
      (f) => {
        f && r(), n.active = 0, n.showTour = f, n.showPopup = f;
      }
    ), ce(Z({}, he(n)), {
      classes: l,
      maskStyle: a,
      changeStep: o,
      close: i,
      handleClickMask: p
    });
  }
}), nv = {
  key: 0,
  class: "nut-tour-content"
}, ov = {
  key: 0,
  class: "nut-tour-content-top"
}, lv = { class: "nut-tour-content-inner" }, sv = { class: "nut-tour-content-bottom" }, av = { class: "nut-tour-content-bottom-init" }, rv = { class: "nut-tour-content-bottom-operate" }, iv = {
  key: 1,
  class: "nut-tour-content nut-tour-content-tile"
}, uv = { class: "nut-tour-content-inner" };
function cv(e, t, n, s, l, a) {
  const o = j("Close"), r = j("nut-popover");
  return u(), d("div", {
    class: M(e.classes)
  }, [
    Ce(m("div", {
      class: "nut-tour-masked",
      onClick: t[0] || (t[0] = (...i) => e.handleClickMask && e.handleClickMask(...i))
    }, null, 512), [
      [Ne, e.showTour]
    ]),
    (u(!0), d(x, null, ie(e.steps, (i, p) => (u(), d("div", {
      key: p,
      style: { height: "0" }
    }, [
      p == e.active ? (u(), d(x, { key: 0 }, [
        e.showTour ? (u(), d("div", {
          key: 0,
          id: "nut-tour-popid",
          class: M(["nut-tour-mask", [e.mask ? "" : "nut-tour-mask-none"]]),
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
          content: te(() => [
            I(e.$slots, "default", {}, () => [
              e.type == "step" ? (u(), d("div", nv, [
                e.showTitleBar ? (u(), d("div", ov, [
                  m("div", {
                    onClick: t[1] || (t[1] = (...f) => e.close && e.close(...f))
                  }, [
                    oe(o, { class: "nut-tour-content-top-close" })
                  ])
                ])) : T("", !0),
                m("div", lv, L(i.content), 1),
                m("div", sv, [
                  m("div", av, L(e.active + 1) + "/" + L(e.steps.length), 1),
                  m("div", rv, [
                    I(e.$slots, "prev-step", {}, () => [
                      e.active != 0 && e.showPrevStep ? (u(), d("div", {
                        key: 0,
                        class: "nut-tour-content-bottom-operate-btn",
                        onClick: t[2] || (t[2] = (f) => e.changeStep("prev"))
                      }, L(e.prevStepTxt), 1)) : T("", !0)
                    ]),
                    e.steps.length - 1 == e.active ? (u(), d("div", {
                      key: 0,
                      class: "nut-tour-content-bottom-operate-btn active",
                      onClick: t[3] || (t[3] = (...f) => e.close && e.close(...f))
                    }, L(e.completeTxt), 1)) : T("", !0),
                    I(e.$slots, "next-step", {}, () => [
                      e.steps.length - 1 != e.active ? (u(), d("div", {
                        key: 0,
                        class: "nut-tour-content-bottom-operate-btn active",
                        onClick: t[4] || (t[4] = (f) => e.changeStep("next"))
                      }, L(e.nextStepTxt), 1)) : T("", !0)
                    ])
                  ])
                ])
              ])) : T("", !0),
              e.type == "tile" ? (u(), d("div", iv, [
                m("div", uv, L(i.content), 1)
              ])) : T("", !0)
            ])
          ]),
          _: 2
        }, 1032, ["visible", "location", "bg-color", "theme", "offset", "arrow-offset"])
      ], 64)) : T("", !0)
    ]))), 128))
  ], 2);
}
const dv = /* @__PURE__ */ U(tv, [["render", cv]]), { create: fv } = Y("address"), pv = "NutAddress", mv = fv({
  components: {
    NutPopup: Le,
    NutElevator: ao,
    Location: oa,
    Location2: ia,
    Check: Rn,
    Close: Et,
    Left: Qt
  },
  inheritAttrs: !1,
  props: ce(Z({}, Ct), {
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
    const n = ke(pv), s = z(null), l = z(null), a = z(e.visible), o = z(e.type), r = z(0), i = z(0), p = z(["province", "city", "country", "town"]), f = z(null), v = z([0, 0, 0, 0]), y = ue([]), $ = D(() => {
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
    }), b = (q) => {
      if (!Array.isArray(q))
        throw new TypeError("params muse be array.");
      if (!q.length)
        return [];
      q.forEach((ne) => {
        if (!ne.title) {
          console.warn("[NutUI] <Address> 请检查数组选项的 title 值是否有设置 ,title 为必填项 .");
          return;
        }
      });
      const R = [];
      return q = q.sort((ne, X) => ne.title.localeCompare(X.title)), q.forEach((ne) => {
        const X = R.findIndex((ae) => ae.title === ne.title);
        X <= -1 ? R.push({
          title: ne.title,
          list: [].concat(ne)
        }) : R[X].list.push(ne);
      }), R;
    };
    let k = z([]), c = ue({});
    const g = z("self"), h = z(20), w = () => {
      y[0] = e.province || [], y[1] = e.city || [], y[2] = e.country || [], y[3] = e.town || [];
      const q = e.modelValue, R = q.length;
      if (R > 0) {
        if (r.value = R - 1, $.value.length == 0) {
          r.value = 0;
          return;
        }
        for (let ne = 0; ne < R; ne++) {
          let X = y[ne];
          k.value[ne] = X.filter((ae) => ae.id == q[ne])[0];
        }
        N();
      }
    }, B = (q, R) => q && q.name || r.value < R && q ? q.name : e.columnsPlaceholder[R] || n("select"), N = () => {
      _(), Te(() => {
        const q = l.value && l.value.getElementsByClassName("active")[0];
        if (q) {
          const R = q.offsetLeft;
          h.value = R || 20;
        }
      });
    }, E = (q) => {
      var X;
      const R = r.value;
      i.value = r.value;
      const ne = {
        custom: p.value[R]
      };
      k.value[R] = q, k.value.splice(R + 1, k.value.length - (R + 1)), ne.value = q, ((X = y[R + 1]) == null ? void 0 : X.length) > 0 ? (r.value = R + 1, N(), ne.next = p.value[r.value]) : (O(), t("update:modelValue")), t("change", ne);
    }, C = (q, R) => {
      i.value = r.value, B(q, R) && (r.value = R, N());
    }, _ = () => {
      const q = f.value, R = i.value, ne = v.value[r.value];
      q != null && q.scrollTop && (v.value[R] = q == null ? void 0 : q.scrollTop), Te(() => {
        q == null || q.scrollTo({
          top: ne,
          behavior: "auto"
        });
      });
    }, S = (q) => {
      const R = e.existAddress;
      let ne = {};
      R.forEach((X) => {
        X && X.selectedAddress && (ne = X), X.selectedAddress = !1;
      }), q.selectedAddress = !0, c = q, t("selected", ne, q, R), O();
    }, P = () => {
      k.value = [], r.value = 0, N();
    }, O = (q = "self") => {
      g.value = q == "cross" ? "cross" : "self", a.value = !1;
    }, K = () => {
      g.value = "mask";
    }, G = () => {
      const q = {
        addressIdStr: "",
        addressStr: "",
        province: k.value[0],
        city: k.value[1],
        country: k.value[2],
        town: k.value[3]
      }, R = {
        data: {},
        type: o.value
      };
      ["custom", "custom2"].includes(o.value) ? ([0, 1, 2, 3].forEach((ne) => {
        const X = k.value[ne];
        q.addressIdStr += `${ne ? "_" : ""}${X && X.id || 0}`, q.addressStr += X && X.name || "";
      }), R.data = q) : R.data = c, P(), g.value == "self" ? t("close", R) : t("closeMask", { closeWay: g }), t("update:visible", !1);
    }, W = () => {
      const q = o.value;
      o.value = q == "exist" ? "custom" : "exist", P(), t("switchModule", { type: o.value });
    }, le = (q, R) => {
      E(R);
    };
    return Q(
      () => e.visible,
      (q) => {
        a.value = q;
      }
    ), Q(
      () => a.value,
      (q) => {
        q && w();
      }
    ), ce(Z({
      showPopup: a,
      privateType: o,
      tabIndex: r,
      tabName: p,
      selectedRegion: k,
      switchModule: W,
      closeWay: g,
      close: G,
      getTabName: B,
      nextAreaList: E,
      regionLine: s,
      tabRegion: l,
      lineDistance: h,
      changeRegionTab: C,
      selectedExist: S,
      clickOverlay: K,
      handClose: O,
      handleElevatorItem: le,
      initCustomSelected: w
    }, he(e)), {
      translate: n,
      regionList: $,
      transformData: b,
      scrollDom: f
    });
  }
}), hv = { class: "nut-address" }, gv = { class: "nut-address__header" }, yv = { class: "nut-address__header__title" }, vv = {
  key: 0,
  class: "nut-address__custom"
}, $v = {
  ref: "tabRegion",
  class: "nut-address__region"
}, bv = ["onClick"], wv = {
  key: 0,
  class: "active nut-address__region-item"
}, kv = {
  key: 0,
  class: "nut-address__detail"
}, Cv = {
  ref: "scrollDom",
  class: "nut-address__detail-list"
}, Sv = ["onClick"], Tv = {
  key: 1,
  class: "nut-address__elevator-group"
}, Nv = {
  key: 1,
  class: "nut-address__exist"
}, Dv = { class: "nut-address__exist-group" }, _v = { class: "nut-address__exist-group-list" }, Iv = ["onClick"], Bv = { class: "nut-address__exist-item-info" }, Mv = {
  key: 0,
  class: "nut-address__exist-item-info-name"
}, Lv = {
  key: 1,
  class: "nut-address__exist-item-info-phone"
}, Ev = { class: "nut-address__exist-item-info-bottom" }, Pv = { class: "nut-address__exist-choose-btn" };
function Av(e, t, n, s, l, a) {
  const o = j("Left"), r = j("Close"), i = j("Check"), p = j("nut-elevator"), f = j("Location2"), v = j("nut-popup");
  return u(), ee(v, {
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
    default: te(() => [
      m("view", hv, [
        m("view", gv, [
          m("view", {
            class: "nut-address__header-back",
            onClick: t[0] || (t[0] = (...y) => e.switchModule && e.switchModule(...y))
          }, [
            I(e.$slots, "back-icon", {}, () => [
              Ce(oe(o, { size: "14px" }, null, 512), [
                [Ne, e.type == "exist" && e.privateType == "custom"]
              ])
            ])
          ]),
          m("view", yv, L(e.privateType == "custom" ? e.customAddressTitle || e.translate("selectRegion") : e.existAddressTitle || e.translate("deliveryTo")), 1),
          m("view", {
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
        ["custom", "custom2"].includes(e.privateType) ? (u(), d("view", vv, [
          m("view", $v, [
            (u(!0), d(x, null, ie(e.selectedRegion, (y, $) => (u(), d("view", {
              key: $,
              class: M(["nut-address__region-item", $ == e.tabIndex ? "active" : ""]),
              onClick: (b) => e.changeRegionTab(y, $)
            }, [
              m("view", null, L(e.getTabName(y, $)), 1)
            ], 10, bv))), 128)),
            e.tabIndex == e.selectedRegion.length ? (u(), d("view", wv, [
              m("view", null, L(e.getTabName(null, e.selectedRegion.length)), 1)
            ])) : T("", !0),
            m("view", {
              ref: "regionLine",
              class: "nut-address__region-line",
              style: A({ left: e.lineDistance + "px" })
            }, null, 4)
          ], 512),
          e.privateType == "custom" ? (u(), d("view", kv, [
            m("ul", Cv, [
              (u(!0), d(x, null, ie(e.regionList, (y, $) => {
                var b, k;
                return u(), d("li", {
                  key: $,
                  class: M(["nut-address__detail-item", ((b = e.selectedRegion[e.tabIndex]) == null ? void 0 : b.id) == y.id ? "active" : ""]),
                  onClick: (c) => e.nextAreaList(y)
                }, [
                  m("div", null, [
                    ((k = e.selectedRegion[e.tabIndex]) == null ? void 0 : k.id) == y.id ? I(e.$slots, "icon", { key: 0 }, () => [
                      oe(i, {
                        class: "nut-address-select-icon",
                        size: "13px"
                      })
                    ]) : T("", !0),
                    ge(L(y.name), 1)
                  ])
                ], 10, Sv);
              }), 128))
            ], 512)
          ])) : (u(), d("view", Tv, [
            oe(p, {
              height: e.height,
              "index-list": e.transformData(e.regionList),
              onClickItem: e.handleElevatorItem
            }, null, 8, ["height", "index-list", "onClickItem"])
          ]))
        ])) : (u(), d("view", Nv, [
          m("div", Dv, [
            m("ul", _v, [
              (u(!0), d(x, null, ie(e.existAddress, (y, $) => (u(), d("li", {
                key: $,
                class: M(["nut-address__exist-group-item", y.selectedAddress ? "active" : ""]),
                onClick: (b) => e.selectedExist(y)
              }, [
                y.selectedAddress ? T("", !0) : I(e.$slots, "unselected-icon", { key: 0 }, () => [
                  oe(f, {
                    class: "nut-address-select-icon",
                    size: "13px"
                  })
                ]),
                y.selectedAddress ? I(e.$slots, "icon", { key: 1 }, () => [
                  oe(i, {
                    class: "nut-address-select-icon",
                    size: "13px"
                  })
                ]) : T("", !0),
                m("div", Bv, [
                  y.name ? (u(), d("div", Mv, L(y.name), 1)) : T("", !0),
                  y.phone ? (u(), d("div", Lv, L(y.phone), 1)) : T("", !0),
                  m("div", Ev, [
                    m("view", null, L(y.provinceName + y.cityName + y.countyName + y.townName + y.addressDetail), 1)
                  ])
                ])
              ], 10, Iv))), 128))
            ])
          ]),
          e.isShowCustomAddress ? (u(), d("div", {
            key: 0,
            class: "nut-address__exist-choose",
            onClick: t[2] || (t[2] = (...y) => e.switchModule && e.switchModule(...y))
          }, [
            m("div", Pv, L(e.customAndExistTitle || e.translate("chooseAnotherAddress")), 1)
          ])) : T("", !0)
        ])),
        I(e.$slots, "bottom")
      ])
    ]),
    _: 3
  }, 8, ["visible", "lock-scroll", "round", "teleport-disable", "teleport", "z-index", "onClose", "onClickOverlay"]);
}
const zv = /* @__PURE__ */ U(mv, [["render", Av]]), { create: Vv } = Y("barrage"), Ov = Vv({
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
    const t = (/* @__PURE__ */ new Date()).getTime(), n = !!et().default;
    let s = z(document.createElement("div")), l = z(document.createElement("div")), a = null;
    const o = z(e.danmu), r = z(e.rows), i = z(e.top), p = z(0), f = e.speeds, v = z(0);
    ve(() => {
      y(), n && document.addEventListener("visibilitychange", function() {
        document.visibilityState === "hidden" ? (b(), p.value = 0, $("hidden")) : document.visibilityState === "visible" && y();
      });
    }), je(() => {
      o.value = [], b();
    });
    const y = () => {
      v.value = s.value.offsetWidth, n && $("init"), setTimeout(() => {
        var h;
        (h = s.value) == null || h.style.setProperty("--move-distance", `-${v.value}px`), c();
      }, 300);
    }, $ = (h) => {
      var E;
      const w = document.getElementsByClassName("slotBody" + t);
      let B = ((E = w == null ? void 0 : w[0]) == null ? void 0 : E.children) || [];
      const N = [];
      B && Array.from(B).forEach((C) => {
        h == "init" ? (C.style.opacity = "0", N.push(C)) : (C.classList = "", C.style = {});
      }), h == "init" && (o.value = N);
    }, b = () => {
      a && (clearTimeout(a), a = null);
    };
    Q(
      () => e.danmu,
      (h) => {
        e.danmu.length > 0 && (o.value = [...h]);
      }
    );
    const k = (h) => {
      const w = p.value % o.value.length;
      !e.loop && p.value === o.value.length ? o.value.splice(o.value.length, 0, h) : o.value.splice(w, 0, h);
    }, c = () => {
      b(), a = setTimeout(() => {
        g();
      }, e.frequency);
    }, g = () => {
      var B;
      const h = e.loop ? p.value % o.value.length : p.value;
      let w = document.createElement("view");
      n && typeof o.value[h] == "object" ? (w = o.value[h], (B = w == null ? void 0 : w.classList) == null || B.add("nut-barrage__item")) : (w.innerHTML = o.value[h], w.classList.add("nut-barrage__item"), l.value.appendChild(w)), Te(() => {
        var E;
        const N = w.offsetHeight;
        if ((E = w == null ? void 0 : w.classList) == null || E.add("move"), w.style.animationDuration = `${f}ms`, w.style.top = h % r.value * (N + i.value) + 20 + "px", w.style.opacity = "1", !n) {
          const C = w.offsetWidth;
          w.style.width = C + 20 + "px";
        }
        w.addEventListener("animationend", () => {
          n ? w.classList.remove("move") : l.value.removeChild(w);
        }), !(!e.loop && p.value >= o.value.length - 1) && (p.value++, p.value >= o.value.length && (p.value = 0), w.removeEventListener("animationend", () => {
        }), c());
      });
    };
    return { classTime: t, danmuList: o, dmBody: s, dmContainer: l, add: k };
  }
}), Hv = {
  ref: "dmBody",
  class: "nut-barrage"
};
function Rv(e, t, n, s, l, a) {
  return u(), d("div", Hv, [
    m("div", {
      ref: "dmContainer",
      class: M(["dmContainer", e.$slots.default && "slotContainer"])
    }, [
      e.$slots.default ? (u(), d("div", {
        key: 0,
        class: M(["slotBody", "slotBody" + e.classTime])
      }, [
        I(e.$slots, "default")
      ], 2)) : T("", !0)
    ], 2)
  ], 512);
}
const Fv = /* @__PURE__ */ U(Ov, [["render", Rv]]), { create: Wv } = Y("signature"), Yv = "NutSignature", jv = Wv({
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
    NutButton: Ue
  },
  emits: ["start", "end", "signing", "confirm", "clear"],
  setup(e, { emit: t }) {
    const n = ke(Yv), s = z(null), l = z(null), a = D(() => ({
      ["nut-signature"]: !0,
      [`${e.customClass}`]: e.customClass
    })), o = ue({
      canvasHeight: 0,
      canvasWidth: 0,
      ctx: null,
      isSupportTouch: "ontouchstart" in window,
      events: "ontouchstart" in window ? ["touchstart", "touchmove", "touchend", "touchleave"] : ["mousedown", "mousemove", "mouseup", "mouseleave"]
    }), r = () => {
      let g = document.createElement("canvas");
      return !!(g.getContext && g.getContext("2d"));
    }, i = () => {
      s.value.addEventListener(o.events[0], p, !1);
    }, p = (g) => {
      g.preventDefault(), o.ctx.beginPath(), o.ctx.lineWidth = e.lineWidth, o.ctx.strokeStyle = e.strokeStyle, t("start"), s.value.addEventListener(o.events[1], f, !1), s.value.addEventListener(o.events[2], v, !1), s.value.addEventListener(o.events[3], y, !1);
    }, f = (g) => {
      g.preventDefault();
      let h = o.isSupportTouch ? g.touches[0] : g;
      t("signing", h);
      let w = s.value.getBoundingClientRect(), B = h.clientX - w.left, N = h.clientY - w.top;
      o.ctx.lineTo(B, N), o.ctx.stroke();
    }, v = (g) => {
      g.preventDefault(), t("end"), s.value.removeEventListener(o.events[1], f, !1), s.value.removeEventListener(o.events[2], v, !1);
    }, y = (g) => {
      g.preventDefault(), s.value.removeEventListener(o.events[1], f, !1), s.value.removeEventListener(o.events[2], v, !1);
    }, $ = () => {
      s.value.addEventListener(o.events[2], v, !1), o.ctx.clearRect(0, 0, o.canvasWidth, o.canvasHeight), o.ctx.closePath(), t("clear");
    }, b = () => {
      c(s.value);
    }, k = (g) => {
      if (!g)
        return !0;
      var h = document.createElement("canvas");
      return h.width = g.width, h.height = g.height, (g == null ? void 0 : g.toDataURL()) == h.toDataURL();
    }, c = (g) => {
      let h;
      switch (e.type) {
        case "png":
          h = g.toDataURL("image/png");
          break;
        case "jpg":
          h = g.toDataURL("image/jpeg", 0.8);
          break;
      }
      const w = k(g) ? "请绘制签名" : g, B = k(g) ? "" : h;
      t("confirm", w, B);
    };
    return ve(() => {
      r() && (o.ctx = s.value.getContext("2d"), o.canvasWidth = l.value.offsetWidth, o.canvasHeight = l.value.offsetHeight, i());
    }), ce(Z({}, he(o)), { canvas: s, wrap: l, isCanvasSupported: r, confirm: b, clear: $, classes: a, translate: n });
  }
}), Uv = {
  ref: "wrap",
  class: "nut-signature-inner"
}, Kv = ["height", "width"], Xv = {
  key: 0,
  class: "nut-signature-unsopport"
};
function qv(e, t, n, s, l, a) {
  const o = j("nut-button");
  return u(), d("div", {
    class: M(e.classes)
  }, [
    m("div", Uv, [
      Ce(m("canvas", {
        ref: "canvas",
        height: e.canvasHeight,
        width: e.canvasWidth
      }, null, 8, Kv), [
        [Ne, e.isCanvasSupported()]
      ]),
      e.isCanvasSupported() ? T("", !0) : (u(), d("p", Xv, L(e.unSupportTpl || e.translate("unSupportTpl")), 1))
    ], 512),
    oe(o, {
      class: "nut-signature-btn",
      type: "default",
      onClick: t[0] || (t[0] = (r) => e.clear())
    }, {
      default: te(() => [
        ge(L(e.translate("reSign")), 1)
      ]),
      _: 1
    }),
    oe(o, {
      class: "nut-signature-btn",
      type: "primary",
      onClick: t[1] || (t[1] = (r) => e.confirm())
    }, {
      default: te(() => [
        ge(L(e.translate("confirm")), 1)
      ]),
      _: 1
    })
  ], 2);
}
const Zv = /* @__PURE__ */ U(jv, [["render", qv]]), { create: Gv } = Y("time-select"), Jv = "NutTimeSelect", Qv = Gv({
  components: {
    NutPopup: Le
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
    const n = ke(Jv), s = D(() => ({
      width: "100%",
      height: e.height
    })), l = D(() => e.currentKey), a = D(() => e.currentTime), o = () => {
      t("update:visible", !1), t("select", a.value);
    };
    return Me("currentKey", l), Me("currentTime", a), {
      popStyle: s,
      close: o,
      translate: n
    };
  }
}), xv = { class: "nut-time-select" }, e2 = { class: "nut-time-select__title" }, t2 = { class: "nut-time-select__title__fixed" }, n2 = { key: 0 }, o2 = { class: "nut-time-select__content" }, l2 = { class: "nut-time-select__content__pannel" }, s2 = { class: "nut-time-select__content__detail" };
function a2(e, t, n, s, l, a) {
  const o = j("nut-popup");
  return u(), ee(o, {
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
    default: te(() => [
      m("view", xv, [
        m("view", e2, [
          m("view", t2, [
            e.$slots.title ? I(e.$slots, "title", { key: 1 }) : (u(), d("span", n2, L(e.title || e.translate("pickupTime")), 1))
          ])
        ]),
        m("view", o2, [
          m("view", l2, [
            I(e.$slots, "pannel")
          ]),
          m("view", s2, [
            I(e.$slots, "detail")
          ])
        ])
      ])
    ]),
    _: 3
  }, 8, ["teleport-disable", "visible", "style", "lock-scroll", "onClickOverlay", "onClickCloseIcon"]);
}
const r2 = /* @__PURE__ */ U(Qv, [["render", a2]]), { componentName: i2, create: u2 } = Y("time-pannel"), c2 = u2({
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
  setup: (e, t) => {
    const n = Be("currentKey"), s = ue({
      currentKey: n
    }), l = D(() => ({
      [i2]: !0,
      "nut-time-pannel--curr": s.currentKey == e.pannelKey
    })), a = (o) => {
      t.emit("change", o);
    };
    return ce(Z({}, he(s)), {
      classes: l,
      handlePannel: a
    });
  }
});
function d2(e, t, n, s, l, a) {
  return u(), d("view", {
    class: M(e.classes),
    onClick: t[0] || (t[0] = (o) => e.handlePannel(e.pannelKey))
  }, L(e.name), 3);
}
const f2 = /* @__PURE__ */ U(c2, [["render", d2]]), { create: p2 } = Y("time-detail"), m2 = p2({
  name: "timedetail",
  props: {
    times: {
      type: Array,
      default: () => []
    }
  },
  emits: ["select"],
  setup: (e, { emit: t }) => {
    const n = Be("currentKey"), s = Be("currentTime"), l = ue({
      currentKey: n,
      currentTime: s
    }), a = (i) => {
      let p = l.currentTime.find((f) => f.key == l.currentKey);
      if (p)
        return {
          "nut-time-detail__detail__list__item": !0,
          "nut-time-detail__detail__list__item--curr": p.list.filter((f) => f === i).length > 0
        };
    }, o = D(() => e.times.find((i) => i.key == l.currentKey).list), r = (i) => {
      t("select", i);
    };
    return ce(Z({}, he(l)), {
      getClass: a,
      renderData: o,
      handleTime: r
    });
  }
}), h2 = { class: "nut-time-detail" }, g2 = { class: "nut-time-detail__detail nut-time-detail__detail--moring" }, y2 = { class: "nut-time-detail__detail__list" }, v2 = ["onClick"];
function $2(e, t, n, s, l, a) {
  return u(), d("view", h2, [
    m("view", g2, [
      m("view", y2, [
        (u(!0), d(x, null, ie(e.renderData, (o) => (u(), d("view", {
          key: o,
          class: M(e.getClass(o)),
          onClick: (r) => e.handleTime(o)
        }, L(o), 11, v2))), 128))
      ])
    ])
  ]);
}
const b2 = /* @__PURE__ */ U(m2, [["render", $2]]), { create: w2 } = Y("sku-header"), k2 = "NutSkuHeader", C2 = w2({
  props: {
    goods: {
      type: Object,
      default: {}
    }
  },
  components: {
    NutPrice: cn
  },
  setup(e, { slots: t }) {
    const n = ke(k2);
    return {
      getSlots: (l) => t[l],
      translate: n
    };
  }
}), S2 = { class: "nut-sku-header" }, T2 = ["src"], N2 = { class: "nut-sku-header-right" }, D2 = {
  key: 3,
  class: "nut-sku-header-right-extra"
};
function _2(e, t, n, s, l, a) {
  const o = j("nut-price");
  return u(), d("view", S2, [
    m("img", {
      class: "nut-sku-header-img",
      src: e.goods.imagePath
    }, null, 8, T2),
    m("view", N2, [
      e.getSlots("sku-header-price") ? I(e.$slots, "sku-header-price", { key: 0 }) : (u(), ee(o, {
        key: 1,
        price: e.goods.price,
        "need-symbol": !0,
        thousands: !1
      }, null, 8, ["price"])),
      e.getSlots("sku-header-extra") ? I(e.$slots, "sku-header-extra", { key: 2 }) : T("", !0),
      e.goods.skuId && !e.getSlots("sku-header-extra") ? (u(), d("view", D2, L(e.translate("skuId")) + " : " + L(e.goods.skuId), 1)) : T("", !0)
    ])
  ]);
}
const I2 = /* @__PURE__ */ U(C2, [["render", _2]]), { create: B2 } = Y("sku-select"), M2 = B2({
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
      (l) => {
        n.value = [].slice.call(l);
      },
      { deep: !0 }
    ), ve(() => {
      e.sku.length > 0 && (n.value = [].slice.call(e.sku));
    }), {
      skuInfo: n,
      changeSaleChild: (l, a, o, r) => {
        l.checkFlag || l.disable || t("selectSku", {
          sku: l,
          skuIndex: a,
          parentSku: o,
          parentIndex: r
        });
      }
    };
  }
}), L2 = { class: "nut-sku-select" }, E2 = { class: "nut-sku-select-item-title" }, P2 = { class: "nut-sku-select-item-skus" }, A2 = ["onClick"];
function z2(e, t, n, s, l, a) {
  return u(), d("view", L2, [
    (u(!0), d(x, null, ie(e.skuInfo, (o, r) => (u(), d("view", {
      key: o.id,
      class: "nut-sku-select-item"
    }, [
      m("view", E2, L(o.name), 1),
      m("view", P2, [
        (u(!0), d(x, null, ie(o.list, (i, p) => (u(), d("view", {
          key: i.name,
          class: M(["nut-sku-select-item-skus-sku", [{ active: !i.disable && i.active }, { disable: i.disable }]]),
          onClick: (f) => e.changeSaleChild(i, p, o, r)
        }, L(i.name), 11, A2))), 128))
      ])
    ]))), 128))
  ]);
}
const V2 = /* @__PURE__ */ U(M2, [["render", z2]]), { create: O2 } = Y("sku-stepper"), H2 = O2({
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
    NutInputNumber: on
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
        return i && Mt(i) == "function" ? i() : "";
      },
      changeStepper: (i) => {
        n.value = i, t("changeStepper", i);
      }
    };
  }
}), R2 = { class: "nut-sku-stepper" }, F2 = { class: "nut-sku-stepper-title" }, W2 = ["innerHTML"], Y2 = { class: "nut-sku-stepper-count" };
function j2(e, t, n, s, l, a) {
  const o = j("nut-input-number");
  return u(), d("view", R2, [
    m("view", F2, L(e.stepperTitle), 1),
    m("view", {
      class: "nut-sku-stepper-limit",
      innerHTML: e.getExtraText()
    }, null, 8, W2),
    m("view", Y2, [
      oe(o, {
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
const U2 = /* @__PURE__ */ U(H2, [["render", j2]]), { create: K2 } = Y("sku-operate"), X2 = K2({
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
      getBtnDesc: (o) => ({
        confirm: e.confirmText,
        cart: e.addCartText,
        buy: e.buyText
      })[o],
      clickBtnOperate: (o) => {
        t("clickBtnOperate", o);
      },
      getSlots: (o) => n[o]
    };
  }
}), q2 = {
  key: 0,
  class: "nut-sku-operate"
}, Z2 = {
  key: 0,
  class: "nut-sku-operate-desc"
}, G2 = {
  key: 1,
  class: "nut-sku-operate-btn"
}, J2 = ["onClick"];
function Q2(e, t, n, s, l, a) {
  return e.btnOptions.length > 0 ? (u(), d("view", q2, [
    e.btnExtraText ? (u(), d("view", Z2, L(e.btnExtraText), 1)) : T("", !0),
    I(e.$slots, "operate-btn"),
    e.getSlots("operate-btn") ? T("", !0) : (u(), d("view", G2, [
      (u(!0), d(x, null, ie(e.btnOptions, (o, r) => (u(), d("view", {
        key: r,
        class: M([`nut-sku-operate-btn-${o}`, "nut-sku-operate-btn-item"]),
        onClick: (i) => e.clickBtnOperate(o)
      }, L(e.getBtnDesc(o)), 11, J2))), 128))
    ]))
  ])) : T("", !0);
}
const x2 = /* @__PURE__ */ U(X2, [["render", Q2]]), { create: e3 } = Y("sku"), t3 = "NutSku", n3 = e3({
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
    SkuHeader: I2,
    SkuSelect: V2,
    SkuStepper: U2,
    SkuOperate: x2,
    NutPopup: Le
  },
  setup(e, { emit: t, slots: n }) {
    const s = ke(t3), l = z(e.visible), a = z(e.stepperMin);
    Q(
      () => e.visible,
      (k) => {
        l.value = k;
      }
    ), Q(
      () => l.value,
      (k) => {
        k == !1 && b();
      }
    );
    const o = (k) => n[k], r = (k) => {
      t("selectSku", k);
    }, i = (k) => {
      a.value = k, t("changeStepper", k);
    }, p = (k) => {
      t("add", k);
    }, f = (k) => {
      t("reduce", k);
    }, v = (k) => {
      t("overLimit", k);
    }, y = (k) => {
      t("clickBtnOperate", {
        type: k,
        value: a.value
      });
    }, $ = (k) => {
      k == "icon" && t("clickCloseIcon"), k == "overlay" && t("clickOverlay"), k == "close" && t("close"), l.value = !1;
    }, b = () => {
      t("update:visible", !1);
    };
    return {
      showPopup: l,
      closePopup: $,
      selectSku: r,
      changeStepper: i,
      stepperOverLimit: v,
      clickBtnOperate: y,
      add: p,
      reduce: f,
      getSlots: o,
      translate: s
    };
  }
}), o3 = { class: "nut-sku" }, l3 = { class: "nut-sku-content" };
function s3(e, t, n, s, l, a) {
  const o = j("sku-header"), r = j("SkuSelect"), i = j("sku-stepper"), p = j("sku-operate"), f = j("nut-popup");
  return u(), ee(f, {
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
    default: te(() => [
      m("view", o3, [
        I(e.$slots, "sku-header"),
        e.getSlots("sku-header") ? T("", !0) : (u(), ee(o, {
          key: 0,
          goods: e.goods
        }, $t({ _: 2 }, [
          e.getSlots("sku-header-price") ? {
            name: "sku-header-price",
            fn: te(() => [
              I(e.$slots, "sku-header-price")
            ]),
            key: "0"
          } : void 0,
          e.getSlots("sku-header-extra") ? {
            name: "sku-header-extra",
            fn: te(() => [
              I(e.$slots, "sku-header-extra")
            ]),
            key: "1"
          } : void 0
        ]), 1032, ["goods"])),
        m("view", l3, [
          I(e.$slots, "sku-select-top"),
          I(e.$slots, "sku-select"),
          e.getSlots("sku-select") ? T("", !0) : (u(), ee(r, {
            key: 0,
            sku: e.sku,
            onSelectSku: e.selectSku
          }, null, 8, ["sku", "onSelectSku"])),
          I(e.$slots, "sku-stepper"),
          e.getSlots("sku-stepper") ? T("", !0) : (u(), ee(i, {
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
        }, $t({ _: 2 }, [
          e.getSlots("sku-operate") ? {
            name: "operate-btn",
            fn: te(() => [
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
const a3 = /* @__PURE__ */ U(n3, [["render", s3]]), { create: r3 } = Y("card"), i3 = r3({
  components: {
    NutPrice: cn,
    NutTag: Eo
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
}), u3 = { class: "nut-card" }, c3 = { class: "nut-card__left" }, d3 = ["src"], f3 = { class: "nut-card__right" }, p3 = { class: "nut-card__right__title" }, m3 = {
  key: 0,
  class: "nut-card__right__price"
}, h3 = { class: "nut-card__right__other" }, g3 = { class: "nut-card__right__shop" }, y3 = { class: "nut-card__right__shop__name" };
function v3(e, t, n, s, l, a) {
  const o = j("nut-price"), r = j("nut-tag");
  return u(), d("div", u3, [
    m("div", c3, [
      m("img", {
        src: e.imgUrl,
        alt: ""
      }, null, 8, d3)
    ]),
    m("div", f3, [
      m("div", p3, L(e.title), 1),
      I(e.$slots, "prolist"),
      e.isNeedPrice ? (u(), d("div", m3, [
        I(e.$slots, "price", {}, () => [
          oe(o, { price: e.price }, null, 8, ["price"])
        ]),
        I(e.$slots, "origin", {}, () => [
          oe(o, {
            class: "nut-card__right__price__origin",
            price: e.vipPrice
          }, null, 8, ["price"])
        ])
      ])) : T("", !0),
      m("div", h3, [
        I(e.$slots, "shop-tag", {}, () => [
          oe(r, { type: "danger" }, {
            default: te(() => [
              ge(L(e.shopDesc), 1)
            ]),
            _: 1
          }),
          oe(r, { plain: "" }, {
            default: te(() => [
              ge(L(e.delivery), 1)
            ]),
            _: 1
          })
        ])
      ]),
      m("div", g3, [
        m("div", y3, L(e.shopName), 1),
        I(e.$slots, "footer")
      ])
    ])
  ]);
}
const $3 = /* @__PURE__ */ U(i3, [["render", v3]]), { create: b3 } = Y("ecard"), w3 = "NutEcard", k3 = b3({
  components: {
    NutInputNumber: on
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
    const n = ke(w3), s = z(null), l = z(null), a = z(""), o = z(e.cardAmountMin), r = z(e.modelValue), i = (y, $) => {
      s.value = $, o.value = e.cardAmountMin, l.value = y.price, t("change", y), t("update:modelValue", y.price);
    }, p = (y) => {
      let b = y.target.value.replace(/[^\d]/g, "");
      a.value = b, l.value = b, Number(b) > e.cardAmountMax && (a.value = e.cardAmountMax, l.value = e.cardAmountMax), Number(b) < e.cardAmountMin && (a.value = e.cardAmountMin, l.value = e.cardAmountMin), t("inputChange", Number(a.value)), t("update:modelValue", Number(a.value));
    }, f = () => {
      s.value = "input", o.value = e.cardAmountMin, l.value = a.value, t("update:modelValue", a.value), t("inputClick");
    }, v = (y) => {
      o.value = y, t("changeStep", o.value, l.value);
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
      inputClick: f,
      stepValue: o,
      currentIndex: s,
      inputValue: a,
      money: r,
      translate: n
    };
  }
}), C3 = { class: "nut-ecard" }, S3 = { class: "nut-ecard__title" }, T3 = { class: "nut-ecard__list" }, N3 = ["onClick"], D3 = { class: "nut-ecard__list__input--con" }, _3 = ["placeholder"], I3 = { class: "nut-ecard__list__step" };
function B3(e, t, n, s, l, a) {
  const o = j("nut-input-number");
  return u(), d("view", C3, [
    m("view", S3, L(e.chooseText || e.translate("chooseText")), 1),
    m("view", T3, [
      (u(!0), d(x, null, ie(e.dataList, (r, i) => (u(), d("view", {
        key: i,
        class: M(["nut-ecard__list__item", e.currentIndex == i ? "active" : ""]),
        onClick: (p) => e.handleClick(r, i)
      }, L(r.price), 11, N3))), 128)),
      m("view", {
        class: M(["nut-ecard__list__input", e.currentIndex == "input" ? "active" : ""]),
        onClick: t[2] || (t[2] = (...r) => e.inputClick && e.inputClick(...r))
      }, [
        m("view", null, L(e.otherValueText || e.translate("otherValueText")), 1),
        m("view", D3, [
          Ce(m("input", {
            "onUpdate:modelValue": t[0] || (t[0] = (r) => e.inputValue = r),
            class: "nut-ecard__list__input--input",
            type: "text",
            placeholder: e.placeholder || e.translate("placeholder"),
            onInput: t[1] || (t[1] = (...r) => e.change && e.change(...r))
          }, null, 40, _3), [
            [Pn, e.inputValue]
          ]),
          ge(" " + L(e.suffix), 1)
        ])
      ], 2),
      m("view", I3, [
        m("view", null, L(e.suffix) + L(e.money), 1),
        oe(o, {
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
const M3 = /* @__PURE__ */ U(k3, [["render", B3]]), { create: L3 } = Y("address-list-item"), E3 = "NutAddressList", P3 = L3({
  components: { Del: Wn, Edit: cs },
  props: {
    item: {
      type: Object,
      default: {}
    }
  },
  emits: ["delIcon", "editIcon", "clickItem"],
  setup(e, { emit: t }) {
    const n = ke(E3);
    return {
      delClick: (o) => {
        t("delIcon", o, e.item), o.stopPropagation();
      },
      editClick: (o) => {
        t("editIcon", o, e.item), o.stopPropagation();
      },
      contentsClick: (o) => {
        t("clickItem", o, e.item), o.stopPropagation();
      },
      translate: n
    };
  }
}), A3 = { class: "nut-address-list-item__info" }, z3 = { class: "nut-address-list-item__info-contact" }, V3 = { class: "nut-address-list-item__info-contact-name" }, O3 = { class: "nut-address-list-item__info-contact-tel" }, H3 = {
  key: 0,
  class: "nut-address-list-item__info-contact-default"
}, R3 = { class: "nut-address-list-item__info-handle" }, F3 = { class: "nut-address-list-item__addr" };
function W3(e, t, n, s, l, a) {
  const o = j("Del"), r = j("Edit");
  return u(), d("div", {
    class: "nut-address-list-item",
    onClick: t[0] || (t[0] = (...i) => e.contentsClick && e.contentsClick(...i))
  }, [
    m("div", A3, [
      m("div", z3, [
        I(e.$slots, "content-top", {}, () => [
          m("div", V3, L(e.item.addressName), 1),
          m("div", O3, L(e.item.phone), 1),
          e.item.defaultAddress ? (u(), d("div", H3, L(e.translate("default")), 1)) : T("", !0)
        ])
      ]),
      m("div", R3, [
        I(e.$slots, "content-icon", {}, () => [
          oe(o, {
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
    m("div", F3, [
      I(e.$slots, "content-addr", {}, () => [
        ge(L(e.item.fullAddress), 1)
      ])
    ])
  ]);
}
const Ln = /* @__PURE__ */ U(P3, [["render", W3]]), { create: Y3 } = Y("address-list-general"), j3 = Y3({
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
    ItemContents: Ln,
    NutButton: Ue,
    NutSwipe: To
  },
  setup(e, { emit: t }) {
    const n = () => be(Ln, {
      item: e.item,
      onDelIcon(N) {
        o(N);
      },
      onEditIcon(N) {
        r(N);
      },
      onClickItem(N) {
        i(N);
      }
    });
    let s = null;
    const l = z(!1), a = z(!1), o = (N) => {
      t("delIcon", N, e.item), N.stopPropagation();
    }, r = (N) => {
      t("editIcon", N, e.item), N.stopPropagation();
    }, i = (N) => {
      l.value || (t("clickItem", N, e.item), N.stopPropagation());
    }, p = (N) => {
      t("longDel", N, e.item), N.stopPropagation();
    }, f = (N) => {
      s = 0, a.value = !0, t("longDown", N, e.item);
    };
    return {
      renderCompontent: n,
      showMaskRef: a,
      clickItem: i,
      editClick: r,
      delClick: o,
      delLongClick: p,
      holddownstart: (N) => {
        s = setTimeout(() => {
          f(N);
        }, 300);
      },
      holddownmove: () => {
        clearTimeout(s);
      },
      holddownend: () => {
        clearTimeout(s);
      },
      copyCLick: (N) => {
        t("longCopy", N, e.item), N.stopPropagation();
      },
      hideMaskClick: () => {
        a.value = !1;
      },
      setDefault: (N) => {
        t("longSet", N, e.item), N.stopPropagation();
      },
      maskClick: (N) => {
        s != 0 && (a.value = !1), N.stopPropagation(), N.preventDefault();
      },
      swipeDelClick: (N) => {
        t("swipeDel", N, e.item), N.stopPropagation();
      },
      swipestart: () => {
        l.value = !1;
      },
      swipemove: () => {
        l.value = !0;
      }
    };
  }
}), U3 = {
  key: 0,
  class: "nut-address-list-general"
}, K3 = { class: "nut-address-list-swipe" };
function X3(e, t, n, s, l, a) {
  const o = j("nut-button"), r = j("nut-swipe");
  return e.swipeEdition ? (u(), ee(r, { key: 1 }, {
    right: te(() => [
      I(e.$slots, "swipe-right-btn", {}, () => [
        oe(o, {
          shape: "square",
          style: { height: "100%" },
          type: "danger",
          onClick: e.swipeDelClick
        }, {
          default: te(() => [
            ge("删除")
          ]),
          _: 1
        }, 8, ["onClick"])
      ])
    ]),
    default: te(() => [
      m("div", K3, [
        (u(), ee(Ae(e.renderCompontent()), {
          onTouchmove: e.swipemove,
          onTouchstart: e.swipestart
        }, {
          "content-top": te(() => [
            I(e.$slots, "content-info")
          ]),
          "content-icon": te(() => [
            I(e.$slots, "content-icons")
          ]),
          "content-addr": te(() => [
            I(e.$slots, "content-addrs")
          ]),
          _: 3
        }, 40, ["onTouchmove", "onTouchstart"]))
      ])
    ]),
    _: 3
  })) : (u(), d("div", U3, [
    (u(), ee(Ae(e.renderCompontent()), {
      onTouchstart: e.holddownstart,
      onTouchend: e.holddownend,
      onTouchmove: e.holddownmove
    }, {
      "content-top": te(() => [
        I(e.$slots, "content-info")
      ]),
      "content-icon": te(() => [
        I(e.$slots, "content-icons")
      ]),
      "content-addr": te(() => [
        I(e.$slots, "content-addrs")
      ]),
      _: 3
    }, 40, ["onTouchstart", "onTouchend", "onTouchmove"])),
    e.longPress && e.showMaskRef ? (u(), d("div", {
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
    ])) : T("", !0),
    e.showMaskRef ? (u(), d("div", {
      key: 1,
      class: "nut-address-list__mask-bottom",
      onClick: t[4] || (t[4] = (...i) => e.hideMaskClick && e.hideMaskClick(...i))
    })) : T("", !0)
  ]));
}
const q3 = /* @__PURE__ */ U(j3, [["render", X3]]), { create: Z3 } = Y("address-list"), G3 = "NutAddressList", J3 = Z3({
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
    GeneralShell: q3,
    NutButton: Ue
  },
  emits: ["delIcon", "editIcon", "clickItem", "longCopy", "longSet", "longDel", "swipeDel", "add"],
  setup(e, { emit: t }) {
    const n = ke(G3), s = z([]), l = ue({
      id: 2,
      addressName: "姓名",
      phone: "123****4567",
      defaultAddress: !1,
      fullAddress: "北京市通州区测试测试测试测试测试测试测试测试测试"
    }), a = () => {
      Object.keys(e.dataOptions).length > 0 && (s.value = e.data.map((b) => xo(l, b, e.dataOptions)));
    };
    Q(
      () => e.data,
      () => a(),
      { deep: !0 }
    );
    const o = (b, k) => {
      t("delIcon", b, k), b.stopPropagation();
    }, r = (b, k) => {
      t("editIcon", b, k), b.stopPropagation();
    }, i = (b, k) => {
      t("clickItem", b, k), b.stopPropagation();
    }, p = (b, k) => {
      t("longCopy", b, k), b.stopPropagation();
    }, f = (b, k) => {
      t("longSet", b, k), b.stopPropagation();
    }, v = (b, k) => {
      t("longDel", b, k), b.stopPropagation();
    }, y = (b, k) => {
      t("swipeDel", b, k), b.stopPropagation();
    }, $ = (b) => {
      t("add", b), b.stopPropagation();
    };
    return ve(() => {
      a();
    }), {
      clickDelIcon: o,
      clickEditIcon: r,
      clickContentItem: i,
      clickLongCopy: p,
      clickLongSet: f,
      clickLongDel: v,
      clickSwipeDel: y,
      addAddress: $,
      dataArray: s,
      translate: n
    };
  }
}), Q3 = { class: "nut-address-list" };
function x3(e, t, n, s, l, a) {
  const o = j("general-shell"), r = j("nut-button");
  return u(), d("div", Q3, [
    (u(!0), d(x, null, ie(e.dataArray, (i, p) => (u(), ee(o, {
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
    }, $t({
      "content-info": te(() => [
        I(e.$slots, "item-infos", { item: i })
      ]),
      "content-icons": te(() => [
        I(e.$slots, "item-icon", { item: i })
      ]),
      "content-addrs": te(() => [
        I(e.$slots, "item-addr", { item: i })
      ]),
      _: 2
    }, [
      e.longPress ? {
        name: "longpress-all",
        fn: te(() => [
          I(e.$slots, "longpress-btns", { item: i })
        ]),
        key: "0"
      } : void 0,
      e.swipeEdition ? {
        name: "swipe-right-btn",
        fn: te(() => [
          I(e.$slots, "swipe-right", { item: i })
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["item", "long-press", "swipe-edition", "onDelIcon", "onEditIcon", "onClickItem", "onSwipeDel", "onLongCopy", "onLongSet", "onLongDel"]))), 128)),
    e.showBottomButton ? (u(), d("div", {
      key: 0,
      class: "nut-address-list__bottom",
      onClick: t[0] || (t[0] = (...i) => e.addAddress && e.addAddress(...i))
    }, [
      oe(r, {
        block: "",
        type: "danger"
      }, {
        default: te(() => [
          ge(L(e.translate("addAddress")), 1)
        ]),
        _: 1
      })
    ])) : T("", !0)
  ]);
}
const e4 = /* @__PURE__ */ U(J3, [["render", x3]]), { create: t4 } = Y("category"), n4 = t4({
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
      getChildList: (a) => {
        n.value = a, t("change", a);
      },
      checkIndex: n,
      categoryLeft: s
    };
  }
}), o4 = { class: "nut-category" }, l4 = { class: "nut-category__cateList" }, s4 = { key: 0 }, a4 = ["onClick"];
function r4(e, t, n, s, l, a) {
  return u(), d("div", o4, [
    m("div", l4, [
      e.type == "classify" || e.type == "text" ? (u(), d("div", s4, [
        (u(!0), d(x, null, ie(e.category, (o, r) => (u(), d("div", {
          key: r,
          class: "nut-category__cateListLeft"
        }, [
          m("div", {
            class: M([e.checkIndex == r ? "nut-category__cateListItemChecked" : "nut-category__cateListItem"]),
            onClick: (i) => e.getChildList(r)
          }, L(o.catName), 11, a4)
        ]))), 128))
      ])) : T("", !0),
      I(e.$slots, "default")
    ])
  ]);
}
const i4 = /* @__PURE__ */ U(n4, [["render", r4]]), { create: u4 } = Y("category-pane"), c4 = u4({
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
}), d4 = { class: "nut-category-pane" }, f4 = {
  key: 0,
  class: "nut-category-pane__cateListRight"
}, p4 = { class: "nut-category-pane__childTitle" }, m4 = {
  key: 0,
  class: "nut-category-pane__childItemList"
}, h4 = ["onClick"], g4 = ["src"], y4 = { class: "nut-category-pane__skuImg" }, v4 = {
  key: 1,
  class: "nut-category-pane__cateListRight"
}, $4 = { class: "nut-category-pane__childTitle" }, b4 = {
  key: 0,
  class: "nut-category-pane__childItemList"
}, w4 = ["onClick"], k4 = { class: "nut-category-pane__skuName" }, C4 = {
  key: 2,
  class: "nut-category-pane__selfItemList"
}, S4 = ["onClick"];
function T4(e, t, n, s, l, a) {
  return u(), d("div", d4, [
    e.type == "classify" ? (u(), d("div", f4, [
      (u(!0), d(x, null, ie(e.categoryChild, (o, r) => (u(), d("div", { key: r }, [
        m("div", p4, L(o == null ? void 0 : o.catName), 1),
        (o == null ? void 0 : o.catType) == 1 ? (u(), d("div", m4, [
          (u(!0), d(x, null, ie(o.childCateList, (i, p) => (u(), d("div", {
            key: p,
            class: "nut-category-pane__childItem",
            onClick: (f) => e.onChange(i)
          }, [
            m("img", {
              class: "nut-category-pane__childImg",
              src: i.backImg
            }, null, 8, g4),
            m("div", y4, L(i == null ? void 0 : i.catName), 1)
          ], 8, h4))), 128))
        ])) : T("", !0)
      ]))), 128))
    ])) : T("", !0),
    e.type == "text" ? (u(), d("div", v4, [
      (u(!0), d(x, null, ie(e.categoryChild, (o, r) => (u(), d("div", { key: r }, [
        m("div", $4, L(o == null ? void 0 : o.catName), 1),
        (o == null ? void 0 : o.catType) == 1 ? (u(), d("div", b4, [
          (u(!0), d(x, null, ie(o.childCateList, (i, p) => (u(), d("div", {
            key: p,
            class: "nut-category-pane__childItem",
            onClick: (f) => e.onChange(i)
          }, [
            m("div", k4, L(i == null ? void 0 : i.catName), 1)
          ], 8, w4))), 128))
        ])) : T("", !0)
      ]))), 128))
    ])) : T("", !0),
    e.type == "custom" ? (u(), d("div", C4, [
      (u(!0), d(x, null, ie(e.customCategory, (o, r) => (u(), d("div", {
        key: r,
        class: "nut-category-pane__skuName",
        onClick: (i) => e.onChange(o)
      }, L(o == null ? void 0 : o.catName), 9, S4))), 128))
    ])) : T("", !0)
  ]);
}
const N4 = /* @__PURE__ */ U(c4, [["render", T4]]), { create: D4 } = Y("comment-header"), _4 = D4({
  components: {
    NutRate: $o
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
}), I4 = { class: "nut-comment-header__user" }, B4 = { class: "nut-comment-header__user-avter" }, M4 = ["src"], L4 = { class: "nut-comment-header__user-score" }, E4 = {
  key: 0,
  class: "nut-comment-header__time"
};
function P4(e, t, n, s, l, a) {
  const o = j("nut-rate");
  return u(), d("view", null, [
    e.info ? (u(), d("view", {
      key: 0,
      class: "nut-comment-header",
      onClick: t[1] || (t[1] = (...r) => e.handleClick && e.handleClick(...r))
    }, [
      m("view", I4, [
        m("view", B4, [
          e.info.avatar ? (u(), d("img", {
            key: 0,
            src: e.info.avatar
          }, null, 8, M4)) : T("", !0)
        ]),
        e.type == "default" ? (u(), d("view", {
          key: 0,
          class: M([`nut-comment-header__user-${e.type}`])
        }, [
          m("view", {
            class: M([`nut-comment-header__user-${e.type}-name`])
          }, [
            m("span", null, L(e.info.nickName), 1),
            I(e.$slots, "labels")
          ], 2),
          m("view", L4, [
            oe(o, {
              modelValue: e.info.score,
              "onUpdate:modelValue": t[0] || (t[0] = (r) => e.info.score = r),
              size: "12",
              spacing: "5",
              readonly: "",
              onChange: e.handleClick
            }, null, 8, ["modelValue", "onChange"])
          ])
        ], 2)) : (u(), d("view", {
          key: 1,
          class: M([`nut-comment-header__user-${e.type}`])
        }, [
          m("span", {
            class: M([`nut-comment-header__user-${e.type}-name`])
          }, L(e.info.nickName), 3),
          I(e.$slots, "labels")
        ], 2))
      ]),
      e.info.time ? (u(), d("view", E4, L(e.info.time), 1)) : T("", !0)
    ])) : T("", !0),
    e.type == "complex" ? (u(), d("view", {
      key: 1,
      class: M([`nut-comment-header__${e.type}-score`])
    }, [
      oe(o, {
        modelValue: e.info.score,
        "onUpdate:modelValue": t[2] || (t[2] = (r) => e.info.score = r),
        size: "12",
        spacing: "3",
        readonly: ""
      }, null, 8, ["modelValue"]),
      m("i", {
        class: M([`nut-comment-header__${e.type}-score-i`])
      }, null, 2),
      m("view", {
        class: M([`nut-comment-header__${e.type}-score-size`])
      }, L(e.info.size), 3)
    ], 2)) : T("", !0)
  ]);
}
const A4 = /* @__PURE__ */ U(_4, [["render", P4]]), { create: z4 } = Y("comment-images"), V4 = z4({
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
  components: { Right: xt },
  emits: ["click", "clickImages"],
  setup(e, { emit: t }) {
    const n = z(!1), s = z(1), l = z([]);
    return Q(
      () => [e.videos, e.images],
      (o) => {
        o[0].length > 0 && o[0].forEach((r) => {
          r.type = "video";
        }), l.value = o[0].concat(o[1]);
      },
      { deep: !0 }
    ), ve(() => {
      e.videos.length > 0 && e.videos.forEach((o) => {
        o.type = "video";
      }), l.value = e.videos.concat(e.images);
    }), { isShowImage: n, initIndex: s, showImages: (o, r) => {
      const { videos: i, images: p } = e, f = o == "img" ? r - i.length : r;
      t("clickImages", {
        type: o,
        index: f,
        value: o == "img" ? p[f] : i[f]
      });
    }, totalImages: l };
  }
}), O4 = ["onClick"], H4 = ["src"], R4 = /* @__PURE__ */ m("view", { class: "nut-comment-images__play" }, null, -1), F4 = ["onClick"], W4 = ["src"], Y4 = {
  key: 0,
  class: "nut-comment-images__mask"
};
function j4(e, t, n, s, l, a) {
  const o = j("Right");
  return u(), d("view", {
    class: M(`nut-comment-images nut-comment-images--${e.type}`)
  }, [
    (u(!0), d(x, null, ie(e.videos, (r, i) => (u(), d("view", {
      key: r.id,
      class: "nut-comment-images__item nut-comment-images__item--video",
      onClick: (p) => e.showImages("video", i)
    }, [
      m("img", {
        src: r.mainUrl
      }, null, 8, H4),
      R4
    ], 8, O4))), 128)),
    (u(!0), d(x, null, ie(e.images, (r, i) => (u(), d(x, {
      key: r.id
    }, [
      e.type == "multi" && e.videos.length + i < 9 || e.type != "multi" ? (u(), d("view", {
        key: 0,
        class: "nut-comment-images__item nut-comment-images__item--imgbox",
        onClick: (p) => e.showImages("img", i + e.videos.length)
      }, [
        m("img", {
          src: r.smallImgUrl ? r.smallImgUrl : r.imgUrl
        }, null, 8, W4),
        e.type == "multi" && e.totalImages.length > 9 && e.videos.length + i > 7 ? (u(), d("view", Y4, [
          m("span", null, "共 " + L(e.totalImages.length) + " 张", 1),
          oe(o, { style: { width: "12px" } })
        ])) : T("", !0)
      ], 8, F4)) : T("", !0)
    ], 64))), 128))
  ], 2);
}
const U4 = /* @__PURE__ */ U(V4, [["render", j4]]), { create: K4 } = Y("comment-bottom"), X4 = "NutComment", q4 = K4({
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
  components: { Fabulous: hs, Comment: Jl, MoreX: Ca },
  emits: ["clickOperate", "handleClick"],
  setup(e, { emit: t }) {
    const n = ke(X4), s = z(!1), l = z([]);
    return ve(() => {
      const r = ["replay", "like", "more"];
      e.operation && e.operation.forEach((i) => {
        r.includes(i) && l.value.push(i);
      });
    }), { showPopver: s, operate: (r) => {
      r == "more" && (s.value = !s.value), t("clickOperate", r);
    }, mergeOp: l, handleClick: () => {
      t("handleClick");
    }, translate: n };
  }
}), Z4 = { class: "nut-comment-bottom" }, G4 = { key: 0 }, J4 = { class: "nut-comment-bottom__cpx" }, Q4 = ["onClick"];
function x4(e, t, n, s, l, a) {
  const o = j("Fabulous"), r = j("Comment"), i = j("MoreX");
  return u(), d("view", Z4, [
    m("view", {
      class: "nut-comment-bottom__lable",
      onClick: t[0] || (t[0] = (...p) => e.handleClick && e.handleClick(...p))
    }, [
      e.type != "complex" ? (u(), d("span", G4, L(e.info.size), 1)) : T("", !0)
    ]),
    m("view", J4, [
      (u(!0), d(x, null, ie(e.mergeOp, (p, f) => (u(), d("view", {
        key: f,
        class: M(["nut-comment-bottom__cpx-item", `nut-comment-bottom__cpx-item--${p}`]),
        onClick: (v) => e.operate(p)
      }, [
        p != "more" ? (u(), d(x, { key: 0 }, [
          m("span", null, L(e.info[p]), 1),
          p == "like" ? (u(), ee(o, { key: 0 })) : (u(), ee(r, { key: 1 }))
        ], 64)) : T("", !0),
        p == "more" ? (u(), d(x, { key: 1 }, [
          oe(i),
          e.showPopver ? (u(), d("view", {
            key: 0,
            class: "nut-comment-bottom__cpx-item-popover",
            onClick: t[1] || (t[1] = (v) => e.operate("popover"))
          }, L(e.translate("complaintsText")), 1)) : T("", !0)
        ], 64)) : T("", !0)
      ], 10, Q4))), 128))
    ])
  ]);
}
const e5 = /* @__PURE__ */ U(q4, [["render", x4]]), { create: t5 } = Y("comment"), n5 = "NutComment", o5 = t5({
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
    CommentHeader: A4,
    CommentImages: U4,
    CommentBottom: e5,
    Right: xt
  },
  emits: ["click", "clickImages", "clickOperate"],
  setup(e, { emit: t }) {
    const n = ke(n5);
    return { conEllipsis: D(() => e.ellipsis ? e.ellipsis : e.headerType == "complex" ? 6 : 2), clickOperate: (r) => {
      t("clickOperate", r);
    }, handleClick: () => {
      t("click", e.info);
    }, clickImages: (r) => {
      t("clickImages", r);
    }, translate: n };
  }
}), l5 = {
  key: 0,
  class: "nut-comment"
}, s5 = ["innerHTML"], a5 = { class: "nut-comment__follow-title" }, r5 = { class: "nut-comment__follow-com" };
function i5(e, t, n, s, l, a) {
  const o = j("comment-header"), r = j("comment-images"), i = j("Right"), p = j("comment-bottom");
  return e.info && Object.keys(e.info) ? (u(), d("view", l5, [
    oe(o, {
      type: e.headerType,
      info: e.info,
      labels: e.labels,
      onHandleClick: e.handleClick
    }, {
      labels: te(() => [
        I(e.$slots, "comment-labels")
      ]),
      _: 3
    }, 8, ["type", "info", "labels", "onHandleClick"]),
    I(e.$slots, "feature"),
    m("view", {
      class: "nut-comment__main",
      style: A(`-webkit-line-clamp:${e.conEllipsis}`),
      onClick: t[0] || (t[0] = (...f) => e.handleClick && e.handleClick(...f)),
      innerHTML: e.info.content
    }, null, 12, s5),
    oe(r, {
      images: e.images,
      videos: e.videos,
      type: e.imagesRows,
      onClickImages: e.clickImages
    }, null, 8, ["images", "videos", "type", "onClickImages"]),
    e.follow && e.follow.days > 0 ? (u(), d("view", {
      key: 0,
      class: "nut-comment__follow",
      onClick: t[2] || (t[2] = (...f) => e.handleClick && e.handleClick(...f))
    }, [
      m("view", a5, L(e.translate("additionalReview", e.follow.days)), 1),
      m("view", r5, L(e.follow.content), 1),
      e.follow.images && e.follow.images.length > 0 ? (u(), d("view", {
        key: 0,
        class: "nut-comment__follow-img",
        onClick: t[1] || (t[1] = (f) => e.clickImages(e.follow.images))
      }, [
        ge(L(e.translate("additionalImages", e.follow.images.length)) + " ", 1),
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
    I(e.$slots, "comment-shop-reply")
  ])) : T("", !0);
}
const u5 = /* @__PURE__ */ U(o5, [["render", i5]]), { componentName: c5, create: d5 } = Y("invoice"), f5 = d5({
  components: {
    NutForm: ko,
    NutFormItem: Co,
    NutRadio: yo,
    NutRadioGroup: vo,
    NutButton: Ue
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
    const n = z(), s = z([]), l = ue({
      // list: []
    }), a = D(() => ({
      [c5]: !0
    }));
    ve(() => {
      o();
    });
    const o = () => {
      s.value = e.data;
    }, r = () => {
      n.value.validate().then(({ valid: i, errors: p }) => {
        t("submit", i, p), t("onSubmit", i, p);
      });
    };
    return Q(
      () => e.data,
      () => o(),
      { deep: !0 }
    ), ce(Z({}, he(l)), {
      classes: a,
      formRef: n,
      list: s,
      submitFun: r
    });
  }
}), p5 = ["onUpdate:modelValue", "placeholder"], m5 = {
  key: 0,
  class: "nut-invoice__submit"
};
function h5(e, t, n, s, l, a) {
  const o = j("nut-radio"), r = j("nut-radio-group"), i = j("nut-form-item"), p = j("nut-form"), f = j("nut-button");
  return u(), d("view", {
    class: M(e.classes)
  }, [
    oe(p, {
      ref: "formRef",
      "model-value": e.formValue
    }, {
      default: te(() => [
        (u(!0), d(x, null, ie(e.list, (v, y) => (u(), ee(i, {
          key: y,
          label: v.label,
          required: v.required,
          rules: v.rules,
          prop: v.formItemProp
        }, {
          default: te(() => [
            v.type === "radio" ? (u(), ee(r, {
              key: 0,
              modelValue: e.formValue[v.formItemProp],
              "onUpdate:modelValue": ($) => e.formValue[v.formItemProp] = $
            }, {
              default: te(() => [
                (u(!0), d(x, null, ie(v.radioLabel, ($, b) => (u(), ee(o, {
                  key: b,
                  shape: "button",
                  label: $.label
                }, {
                  default: te(() => [
                    ge(L($.label), 1)
                  ]),
                  _: 2
                }, 1032, ["label"]))), 128))
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue"])) : Ce((u(), d("input", {
              key: 1,
              "onUpdate:modelValue": ($) => e.formValue[v.formItemProp] = $,
              class: "nut-input-text",
              placeholder: v.placeholder,
              type: "text"
            }, null, 8, p5)), [
              [Pn, e.formValue[v.formItemProp]]
            ])
          ]),
          _: 2
        }, 1032, ["label", "required", "rules", "prop"]))), 128))
      ]),
      _: 1
    }, 8, ["model-value"]),
    e.submit ? (u(), d("div", m5, [
      oe(f, {
        type: "primary",
        block: "",
        onClick: e.submitFun
      }, {
        default: te(() => [
          ge("提交审批")
        ]),
        _: 1
      }, 8, ["onClick"])
    ])) : T("", !0)
  ], 2);
}
const g5 = /* @__PURE__ */ U(f5, [["render", h5]]), { create: y5 } = Y("avatar-cropper"), v5 = y5({
  components: {
    NutButton: Ue,
    Refresh2: xa,
    Retweet: lr
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
    const s = ue({
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
    }), l = {
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
    }, a = z(Z({}, l)), o = z(), r = z(), i = z(), p = window.devicePixelRatio || 1, f = Ze(), v = D(() => s.angle === 90 || s.angle === 270), y = D(() => {
      const { swidth: X } = a.value, ae = X / p + "px";
      return {
        width: ae,
        height: ae
      };
    }), $ = D(() => {
      const { displayWidth: X, scale: ae } = s, { swidth: de, height: pe } = a.value;
      return v.value ? Math.max(0, (pe * ae - de) / 2) : Math.max(0, (X * ae - de) / 2);
    }), b = D(() => {
      const { displayWidth: X, scale: ae } = s, { swidth: de, height: pe } = a.value;
      return v.value ? Math.max(0, (X * ae - de) / 2) : Math.max(0, (pe * ae - de) / 2);
    }), k = (X) => new Promise((ae) => {
      const de = new FileReader();
      de.onloadend = (pe) => ae(pe.target.result), de.readAsDataURL(X);
    }), c = (X) => new Promise((ae) => {
      const de = new Image();
      de.onload = () => ae(de), de.src = X;
    }), g = () => {
      const { img: X, width: ae, height: de, x: pe, y: we, swidth: Ee } = a.value, { moveX: H, moveY: J, scale: se } = s, re = r.value;
      if (!re)
        return;
      const me = re.getContext("2d");
      re.width = s.displayWidth, re.height = s.displayHeight, me.clearRect(0, 0, re.width, re.height), me.fillStyle = "#666", me.fillRect(0, 0, re.width, re.height), me.fillStyle = "#000", me.fillRect(e.space * p, (re.height - Ee) / 2, Ee, Ee), me.translate(re.width / 2 + H, re.height / 2 + J), me.rotate(Math.PI / 180 * s.angle), me.scale(se, se), me.drawImage(X, pe, we, ae, de);
    }, h = (X) => {
      const ae = Oe(o.value), { width: de, height: pe } = ae, we = s.displayWidth = de * p, Ee = s.displayHeight = pe * p;
      let H = Z({}, l);
      const { width: J, height: se } = X;
      H.img = X;
      const re = se > J, me = re ? J / se : se / J;
      H.width = we, H.height = re ? we / me : we * me, H.x = -H.width / 2, H.y = -H.height / 2, H.swidth = we - e.space * 2 * p, H.sheight = re ? H.swidth / me : H.swidth * me, H.sx = e.space * p, H.sy = (Ee - H.swidth) / 2, a.value = H, s.defScale = H.swidth / (re ? H.width : H.height), B();
    }, w = (X) => Ke(this, null, function* () {
      s.visible = !0;
      const ae = X.target;
      let { files: de } = ae;
      if (!(de != null && de.length))
        return;
      const pe = yield k(de[0]), we = yield c(pe);
      h(we), g();
    }), B = () => {
      N(s.defScale), s.moveX = 0, s.moveY = 0, s.angle = 0;
    }, N = (X) => {
      X = Pe(X, 0.3, +e.maxZoom + 1), X !== s.scale && (s.scale = X);
    }, E = (X) => Math.sqrt(ct(X[0].clientX - X[1].clientX, 2) + ct(X[0].clientY - X[1].clientY, 2));
    let C, _, S, P, O;
    const K = (X) => {
      const { touches: ae } = X, { offsetX: de } = f;
      f.start(X), O = ae.length, C = s.moveX, _ = s.moveY, s.moving = O === 1, s.zooming = O === 2 && !de.value, s.zooming && (S = s.scale, P = E(X.touches));
    }, G = (X) => {
      const { touches: ae } = X;
      if (f.move(X), (s.moving || s.zooming) && it(X, !0), s.moving) {
        const { deltaX: de, deltaY: pe } = f, we = de.value * s.scale + C, Ee = pe.value * s.scale + _;
        s.moveX = Pe(we, -$.value, $.value), s.moveY = Pe(Ee, -b.value, b.value);
      }
      if (s.zooming && ae.length === 2) {
        const de = E(ae), pe = S * de / P;
        N(pe);
      }
    }, W = (X) => {
      let ae = !1;
      (s.moving || s.zooming) && (ae = !(s.moving && C === s.moveX && _ === s.moveY), X.touches.length || (s.zooming && (s.moveX = Pe(s.moveX, -$.value, $.value), s.moveY = Pe(s.moveY, -b.value, b.value), s.zooming = !1), s.moving = !1, C = 0, _ = 0, S = s.defScale, s.scale < s.defScale && B(), s.scale > e.maxZoom && (s.scale = +e.maxZoom))), it(X, ae), f.reset();
    }, le = () => {
      s.angle = 0;
    }, q = () => {
      if (s.angle === 270) {
        s.angle = 0;
        return;
      }
      s.angle += 90;
    }, R = (X = !0) => {
      s.visible = !1, B(), i.value.value = "", X && t("cancel");
    }, ne = () => {
      const X = r.value, { sx: ae, sy: de, swidth: pe } = a.value, we = pe, Ee = pe, H = document.createElement("canvas"), J = H.getContext("2d");
      H.width = we, H.height = Ee, X && J.drawImage(X, ae, de, we, Ee, 0, 0, we, Ee);
      const se = H.toDataURL("image/png");
      t("confirm", se), R(!1);
    };
    return Q(
      () => s.scale,
      () => {
        g();
      }
    ), Q(
      () => s.angle,
      () => {
        Math.abs(s.moveX) > $.value && (s.moveX = $.value), Math.abs(s.moveY) > b.value && (s.moveY = b.value), g();
      }
    ), Q(
      () => s.moveX,
      () => {
        g();
      }
    ), Q(
      () => s.moveY,
      () => {
        g();
      }
    ), n({
      cancel: R,
      reset: le,
      rotate: q,
      confirm: ne
    }), ce(Z({}, he(s)), {
      cropperPopupRef: o,
      canvasRef: r,
      inputImageRef: i,
      highlightStyle: y,
      inputImageChange: w,
      reset: le,
      rotate: q,
      cancel: R,
      confirm: ne,
      onTouchStart: K,
      onTouchMove: G,
      onTouchEnd: W
    });
  }
}), $5 = ["data-edit-text"], b5 = {
  ref: "cropperPopupRef",
  class: "nut-cropper-popup"
}, w5 = {
  ref: "canvasRef",
  class: "nut-cropper-popup__canvas"
}, k5 = {
  key: 1,
  class: "flex-sb"
};
function C5(e, t, n, s, l, a) {
  const o = j("nut-button"), r = j("Refresh2"), i = j("Retweet");
  return u(), d(x, null, [
    m("div", {
      class: M(["nut-avatar-cropper", { round: e.shape === "round" }]),
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
    ], 10, $5),
    Ce(m("div", b5, [
      m("canvas", w5, null, 512),
      m("div", {
        class: "nut-cropper-popup__highlight",
        onTouchstart: t[1] || (t[1] = (...p) => e.onTouchStart && e.onTouchStart(...p)),
        onTouchmove: t[2] || (t[2] = (...p) => e.onTouchMove && e.onTouchMove(...p)),
        onTouchend: t[3] || (t[3] = (...p) => e.onTouchEnd && e.onTouchEnd(...p)),
        onTouchcancel: t[4] || (t[4] = (...p) => e.onTouchEnd && e.onTouchEnd(...p))
      }, [
        m("div", {
          class: M(["highlight", { highlight__round: e.shape === "round" }]),
          style: A(e.highlightStyle)
        }, null, 6)
      ], 32),
      m("div", {
        class: M(["nut-cropper-popup__toolbar", [e.toolbarPosition]])
      }, [
        e.$slots.toolbar ? I(e.$slots, "toolbar", { key: 0 }) : (u(), d("div", k5, [
          m("div", {
            class: "nut-cropper-popup__toolbar-item",
            onClick: t[5] || (t[5] = (p) => e.cancel())
          }, [
            oe(o, { type: "danger" }, {
              default: te(() => [
                ge(L(e.cancelText), 1)
              ]),
              _: 1
            })
          ]),
          m("div", {
            class: "nut-cropper-popup__toolbar-item",
            onClick: t[6] || (t[6] = (...p) => e.reset && e.reset(...p))
          }, [
            oe(r, { color: "#fff" })
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
            oe(o, { type: "success" }, {
              default: te(() => [
                ge(L(e.confirmText), 1)
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
const S5 = /* @__PURE__ */ U(v5, [["render", C5]]);
function T5(e) {
  [Ue, qn, Zn, kt, Le, gi, Si, Ni, Bi, Pi, eo, to, qi, eu, nu, cu, wu, Iu, Au, Hu, Qu, ao, $c, ro, io, Hc, Kc, Qc, sd, uo, Nd, Fd, df, po, Pf, Vf, np, on, wp, yo, vo, $o, fo, ho, Wp, Zp, w1, H1, ko, Co, To, tm, pm, vm, km, ln, Wm, qm, Pt, lh, At, kh, _h, sn, Ah, Rh, bo, Gh, ag, hg, an, Pg, qg, rn, un, cn, dn, N0, P0, so, Eo, Po, J0, ny, hy, My, zy, Yy, qy, xy, dv, zv, Fv, Zv, r2, f2, b2, a3, $3, M3, e4, i4, N4, u5, g5, S5].forEach((n) => {
    n.install ? e.use(n) : n.name && e.component(n.name, n);
  });
}
const N5 = "4.3.0-beta.5", L5 = { install: T5, version: N5 };
export {
  pm as ActionSheet,
  zv as Address,
  e4 as AddressList,
  zy as Animate,
  kh as Audio,
  _h as AudioOperate,
  sn as Avatar,
  S5 as AvatarCropper,
  Ah as AvatarGroup,
  vm as Backtop,
  so as Badge,
  Fv as Barrage,
  Ue as Button,
  df as Calendar,
  po as CalendarCard,
  fo as CalendarItem,
  $3 as Card,
  Fd as Cascader,
  i4 as Category,
  N4 as CategoryPane,
  qn as Cell,
  Zn as CellGroup,
  Pf as Checkbox,
  Vf as CheckboxGroup,
  Gh as CircleProgress,
  Bi as Col,
  ny as Collapse,
  hy as CollapseItem,
  u5 as Comment,
  gi as ConfigProvider,
  P0 as Countdown,
  N0 as Countup,
  np as DatePicker,
  ln as Dialog,
  to as Divider,
  km as Drag,
  M3 as Ecard,
  ao as Elevator,
  Yy as Ellipsis,
  hg as Empty,
  wu as FixedNav,
  ko as Form,
  Co as FormItem,
  qi as Grid,
  eu as GridItem,
  Si as Image,
  dn as ImagePreview,
  Hc as Indicator,
  Wm as InfiniteLoading,
  wp as Input,
  on as InputNumber,
  g5 as Invoice,
  Ni as Layout,
  Rh as List,
  Hn as Locale,
  Iu as Menu,
  Au as MenuItem,
  cu as Navbar,
  ag as Noticebar,
  Pt as Notify,
  H1 as NumberKeyboard,
  kt as Overlay,
  $c as Pagination,
  ho as Picker,
  Po as Popover,
  Le as Popup,
  cn as Price,
  bo as Progress,
  qm as PullRefresh,
  yo as Radio,
  vo as RadioGroup,
  uo as Range,
  $o as Rate,
  Pi as Row,
  Nd as Searchbar,
  Wp as ShortPassword,
  Kc as SideNavbar,
  Qc as SideNavbarItem,
  Zv as Signature,
  J0 as Skeleton,
  a3 as Sku,
  nu as Space,
  qg as Step,
  Pg as Steps,
  eo as Sticky,
  sd as SubSideNavbar,
  To as Swipe,
  tm as SwipeGroup,
  rn as Swiper,
  un as SwiperItem,
  lh as Switch,
  io as TabPane,
  Hu as Tabbar,
  Qu as TabbarItem,
  My as Table,
  ro as Tabs,
  Eo as Tag,
  Zp as Textarea,
  b2 as TimeDetail,
  f2 as TimePannel,
  r2 as TimeSelect,
  At as Toast,
  dv as Tour,
  xy as TrendArrow,
  w1 as Uploader,
  an as Video,
  qy as Watermark,
  L5 as default,
  T5 as install,
  Mm as showDialog,
  $0 as showImagePreview,
  M5 as showNotify,
  _o as showToast,
  N5 as version
};
