var Wo = Object.defineProperty, Yo = Object.defineProperties;
var jo = Object.getOwnPropertyDescriptors;
var Dt = Object.getOwnPropertySymbols;
var yn = Object.prototype.hasOwnProperty, vn = Object.prototype.propertyIsEnumerable;
var pt = Math.pow, Rt = (e, t, n) => t in e ? Wo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, G = (e, t) => {
  for (var n in t || (t = {}))
    yn.call(t, n) && Rt(e, n, t[n]);
  if (Dt)
    for (var n of Dt(t))
      vn.call(t, n) && Rt(e, n, t[n]);
  return e;
}, de = (e, t) => Yo(e, jo(t));
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
  var a = (i) => {
    try {
      r(n.next(i));
    } catch (p) {
      o(p);
    }
  }, l = (i) => {
    try {
      r(n.throw(i));
    } catch (p) {
      o(p);
    }
  }, r = (i) => i.done ? s(i.value) : Promise.resolve(i.value).then(a, l);
  r((n = n.apply(e, t)).next());
});
import { reactive as ce, ref as z, defineComponent as Ue, useSlots as ot, h as be, openBlock as u, createBlock as ee, computed as D, createElementBlock as f, normalizeClass as L, normalizeStyle as A, createElementVNode as m, createTextVNode as ge, unref as Re, createCommentVNode as N, renderSlot as _, provide as Le, inject as Me, getCurrentInstance as We, onUnmounted as Ke, createApp as Uo, resolveComponent as W, Fragment as x, toDisplayString as E, watchEffect as bt, Transition as Zt, withCtx as ne, withDirectives as Ce, withModifiers as De, vShow as Ne, watch as Q, toRefs as he, Teleport as On, mergeProps as wt, createVNode as oe, onMounted as ve, onBeforeUnmount as Gt, shallowReactive as Ko, markRaw as $n, isVNode as Xo, Comment as qo, Text as Zo, nextTick as Se, renderList as ie, normalizeProps as Go, guardReactiveProps as Jo, resolveDynamicComponent as Ae, onActivated as Ct, toRef as Xe, createSlots as kt, onBeforeMount as Hn, readonly as bn, onDeactivated as St, render as Jt, vModelText as Rn } from "vue";
class Fn {
}
let Qo = class extends Fn {
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
class xo extends Fn {
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
const Qt = (e, {
  args: t = [],
  done: n,
  canceled: s
}) => {
  if (e) {
    const o = e.apply(null, t);
    Yn(o) ? o.then((a) => {
      a ? n(a) : s && s();
    }).catch(() => {
    }) : o ? n() : s && s();
  } else
    n();
}, Pt = (e) => {
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
}, Wn = Array.isArray, el = (e) => e instanceof Date, At = (e) => typeof e == "function", tl = (e) => typeof e == "string", ct = (e) => e !== null && typeof e == "object", Yn = (e) => ct(e) && At(e.then) && At(e.catch), nl = document, wn = nl.body, Yt = (e, t) => {
  try {
    return t.split(".").reduce((n, s) => n[s], e);
  } catch (n) {
    return "";
  }
}, ol = (e, t, n) => {
  let s = Object.assign({}, e), o = Object.assign({}, n);
  return Object.keys(t).length > 0 ? (Object.keys(s).forEach((a) => {
    if (Object.prototype.hasOwnProperty.call(o, a)) {
      const l = Pt(o[a]);
      l == "function" && (s[a] = o[a](t)), l == "string" && (s[a] = t[o[a]]);
    } else
      t[a] && (s[a] = t[a]);
  }), s) : e;
}, jn = (e, t) => (Object.keys(t).forEach((n) => {
  let s = e[n], o = t[n];
  ct(s) && ct(o) ? jn(s, o) : e[n] = o;
}), e);
function ll(e, t = 2) {
  return Object.is(parseFloat(e), NaN) ? console.log(`传入的值：${e}不是一个数字`) : (e = parseFloat(e), (Math.round((e + Number.EPSILON) * Math.pow(10, t)) / Math.pow(10, t)).toFixed(t));
}
function dt(e, t) {
  (typeof e.cancelable != "boolean" || e.cancelable) && e.preventDefault(), t && e.stopPropagation();
}
const Qe = (e, t = 2) => {
  for (e += ""; e.length < t; )
    e = "0" + e;
  return e.toString();
}, Pe = (e, t, n) => Math.min(Math.max(e, t), n), Un = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, It = ce({
  "zh-CN": new Qo(),
  "en-US": new xo()
});
class Kn {
  static languages() {
    return It[this.currentLang.value];
  }
  static use(t, n) {
    n && (It[t] = new n()), this.currentLang.value = t;
  }
  static merge(t, n) {
    n && (It[t] ? jn(It[t], n) : this.use(t, n));
  }
}
V(Kn, "currentLang", z("zh-CN"));
const sl = /* @__PURE__ */ Ue({
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
    const n = e, s = "nut-icon", o = ot(), a = () => n.name ? n.name.indexOf("/") !== -1 : !1, l = (d) => {
      if (d)
        return isNaN(Number(d)) ? String(d) : d + "px";
    }, r = a();
    let i = be(
      r ? "img" : n.tag,
      {
        class: r ? `${s}__img` : `${n.fontClassName} ${s} ${n.classPrefix}-${n.name}`,
        style: {
          color: n.color,
          fontSize: l(n.size),
          width: l(n.width || n.size),
          height: l(n.height || n.size)
        },
        src: r ? n.name : ""
      },
      (t = o.default) == null ? void 0 : t.call(o)
    );
    const p = () => i;
    return (d, v) => (u(), ee(p));
  }
});
function al(e) {
  return e.name = "IconFont", e.install = (t) => {
    t.component("IconFont", e);
  }, e;
}
al(sl);
const R = (e) => Ue({
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
    }), o = D(() => {
      const a = {};
      return a.height = n(t.height), a.width = n(t.width), a.color = t.color, a;
    });
    return { classes: s, style: o };
  }
}), ye = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
};
R("add");
R("addfollow");
R("arrow-down");
const rl = R("arrow-down2"), il = /* @__PURE__ */ m("path", {
  d: "M1741.19 227.497a121.654 121.654 0 1 1 127.858 206.812L1292.65 790.27a182.482 182.482 0 0 1-191.727 0L524.646 434.31a121.654 121.654 0 1 1 127.859-206.812l544.403 335.887c181.387-111.8 362.773-223.965 544.282-335.887",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ul = [
  il
];
function cl(e, t, n, s, o, a) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 2472 1024",
    role: "presentation"
  }, ul, 6);
}
const dl = /* @__PURE__ */ ye(rl, [["render", cl]]);
R("arrow-right");
R("arrow-right2");
R("arrow-up");
const fl = R("arrow-up2"), pl = /* @__PURE__ */ m("path", {
  d: "M623.406 815.479A129.722 129.722 0 1 1 487.068 594.95C691.9 468.083 896.73 341.993 1101.691 215.125a194.583 194.583 0 0 1 204.442 0l614.494 379.567a129.722 129.722 0 1 1-136.338 220.657l-580.506-358.292-580.377 358.422",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ml = [
  pl
];
function hl(e, t, n, s, o, a) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 2472 1024",
    role: "presentation"
  }, ml, 6);
}
const gl = /* @__PURE__ */ ye(fl, [["render", hl]]);
R("ask");
R("ask2");
R("cart");
R("cart2");
R("category");
const yl = R("check-checked"), vl = /* @__PURE__ */ m("path", {
  d: "M510.613 2.837C229.793 2.837.032 232.598.032 513.418S229.793 1024 510.613 1024s510.582-229.762 510.582-510.582S794.27 2.837 510.613 2.837zm0 794.238c-156.01 0-283.656-127.646-283.656-283.657s127.645-283.656 283.656-283.656S794.27 357.407 794.27 513.418 666.624 797.075 510.613 797.075z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), $l = /* @__PURE__ */ m("path", {
  d: "M382.968 513.418a127.645 127.645 0 1 0 255.29 0 127.645 127.645 0 1 0-255.29 0Z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1);
function bl(e, t, n, s, o, a) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1032 1024",
    role: "presentation"
  }, [
    vl,
    ge(","),
    $l
  ], 6);
}
const kn = /* @__PURE__ */ ye(yl, [["render", bl]]), wl = R("check-disabled"), kl = /* @__PURE__ */ m("path", {
  d: "M506.467 0C227.962 0 .094 227.868.094 506.374s227.868 506.373 506.373 506.373 506.374-227.868 506.374-506.373S787.786 0 506.467 0zm202.55 571.077H306.73c-45.01 0-67.516-22.506-67.516-67.517 0-45.01 22.505-67.516 67.516-67.516h402.286c45.01 0 67.516 22.505 67.516 67.516 0 45.011-22.505 67.517-67.516 67.517z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Cl = [
  kl
];
function Sl(e, t, n, s, o, a) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Cl, 6);
}
const Tl = /* @__PURE__ */ ye(wl, [["render", Sl]]), Nl = R("check-normal"), Dl = /* @__PURE__ */ m("path", {
  d: "M512 1024c-136.533 0-264.533-54.044-361.244-150.756C54.044 776.534 0 648.534 0 512c0-136.533 54.044-264.533 150.756-361.244C247.466 54.044 375.466 0 512 0c136.533 0 264.533 54.044 361.244 150.756C969.956 247.466 1024 375.466 1024 512s-54.044 264.533-150.756 361.244C776.534 969.956 648.534 1024 512 1024zm0-938.667c-113.778 0-221.867 45.511-301.511 125.156S85.333 398.222 85.333 512s45.511 221.867 125.156 301.511S398.222 938.667 512 938.667s221.867-45.511 301.511-125.156S938.667 625.778 938.667 512 893.156 290.133 813.51 210.489 625.778 85.333 512 85.333z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), _l = [
  Dl
];
function Il(e, t, n, s, o, a) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, _l, 6);
}
const jt = /* @__PURE__ */ ye(Nl, [["render", Il]]), Bl = R("Check"), Ml = /* @__PURE__ */ m("path", {
  d: "M998.4 245.029c-219.429 153.6-398.629 332.8-552.229 552.228-40.228 58.514-128 54.857-164.571-3.657-69.486-106.057-149.943-186.514-256-256-51.2-32.914-18.286-113.371 40.229-98.743C182.857 460.8 274.286 508.343 358.4 585.143c157.257-190.172 358.4-340.114 588.8-435.2 62.171-25.6 106.057 58.514 51.2 95.086",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ll = [
  Ml
];
function El(e, t, n, s, o, a) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ll, 6);
}
const Xn = /* @__PURE__ */ ye(Bl, [["render", El]]), Pl = R("checked"), Al = /* @__PURE__ */ m("path", {
  d: "M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0zm281.6 369.778C779.378 381.156 600.178 500.622 472.178 691.2c0 0 0 2.844-2.845 2.844-8.533 5.69-48.355 36.978-88.177-8.533-39.823-51.2-62.578-99.555-142.223-142.222-2.844 0-2.844-2.845-2.844-2.845-8.533-11.377-39.822-56.888 19.911-56.888 45.511 0 91.022 11.377 162.133 73.955 5.69 5.689 14.223 5.689 17.067 0C469.333 517.69 608.711 366.933 768 318.578c0 0 19.911-2.845 31.289 14.222 5.689 11.378 11.378 22.756-5.689 36.978z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), zl = [
  Al
];
function Vl(e, t, n, s, o, a) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, zl, 6);
}
const qn = /* @__PURE__ */ ye(Pl, [["render", Vl]]), Ol = R("checklist"), Hl = /* @__PURE__ */ m("path", {
  d: "M159.289 500.622c62.578 0 125.155 17.067 221.867 102.4 8.533 5.69 19.91 5.69 25.6 0 48.355-54.044 238.933-261.689 455.11-329.955 0 0 28.445-5.69 42.667 19.91 8.534 17.067 19.911 34.134-5.689 54.045-22.755 17.067-264.533 179.2-440.888 440.89l-2.845 2.844c-11.378 8.533-68.267 51.2-119.467-14.223-56.888-71.11-85.333-139.377-196.266-196.266-2.845 0-2.845-2.845-5.69-5.69-11.377-11.377-54.044-73.955 25.6-73.955z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Rl = [
  Hl
];
function Fl(e, t, n, s, o, a) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Rl, 6);
}
const Wl = /* @__PURE__ */ ye(Ol, [["render", Fl]]), Yl = R("circle-close"), jl = /* @__PURE__ */ m("path", {
  d: "M511.492 73.063a438.425 438.425 0 0 1 310.545 748.953 439.16 439.16 0 1 1-621.09-621.073A435.695 435.695 0 0 1 511.492 73.046m0-73.063C267.49.018 57.468 172.408 9.87 411.717-37.713 651.042 90.39 890.658 315.823 984.03c225.45 93.355 485.444 14.472 621.005-188.416 135.543-202.906 108.885-473.293-63.659-645.82A509.645 509.645 0 0 0 511.492.002zm-175.7 635.495 299.673-299.674c12.049-12.049 24.115-12.049 36.164 0l15.496 15.497c12.05 12.066 12.05 24.115 0 36.18L387.47 687.122c-12.066 12.05-24.115 12.05-36.181 0l-15.497-15.496c-12.049-12.066-12.049-24.115 0-36.182zm0-284.177 15.496-15.497c12.066-12.049 24.115-12.049 36.18 0l299.64 299.674c12.05 12.049 12.05 24.098 0 36.164l-15.496 15.496c-12.05 12.05-24.115 12.05-36.182 0L335.808 387.465c-12.049-12.05-12.049-24.098 0-36.164z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ul = [
  jl
];
function Kl(e, t, n, s, o, a) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ul, 6);
}
const xt = /* @__PURE__ */ ye(Yl, [["render", Kl]]);
R("clock");
R("close-little");
const Xl = R("close"), ql = /* @__PURE__ */ m("path", {
  d: "M981.577 1024c-11.703 0-23.406-2.926-32.183-11.703L13.166 76.07c-14.629-17.555-14.629-46.812 0-64.366 17.554-14.629 46.811-14.629 64.365 0L1013.76 947.93c17.554 17.555 17.554 43.886 0 61.44-8.777 11.703-20.48 14.629-32.183 14.629zm-936.228 0c-11.703 0-23.406-2.926-32.183-11.703-17.555-17.554-17.555-43.886 0-61.44L949.394 14.63c17.555-17.555 43.886-17.555 61.44 0 17.555 17.554 17.555 43.885 0 61.44L74.606 1012.297C68.754 1021.074 57.05 1024 45.349 1024z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Zl = [
  ql
];
function Gl(e, t, n, s, o, a) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1026 1024",
    role: "presentation"
  }, Zl, 6);
}
const zt = /* @__PURE__ */ ye(Xl, [["render", Gl]]), Jl = R("comment"), Ql = /* @__PURE__ */ m("path", {
  d: "M760.415 876.089H259.793c-132.741 0-242.726-109.985-242.726-242.726V242.726C17.067 109.986 127.052 0 259.793 0h504.414c132.741 0 242.726 109.985 242.726 242.726v394.43c-3.792 132.74-109.985 238.933-246.518 238.933zM259.793 113.778c-72.06 0-128.949 56.889-128.949 128.948v394.43c0 72.059 56.89 128.948 128.949 128.948h504.414c68.267 0 128.949-56.89 128.949-128.948v-394.43c0-72.06-56.89-128.948-128.949-128.948H259.793zm56.888 887.466c-15.17 0-30.34-3.792-41.718-15.17-22.756-22.755-22.756-56.889 0-79.644l109.985-109.986c22.756-22.755 56.889-22.755 79.645 0s22.755 56.89 0 79.645L354.607 986.074c-7.585 7.585-22.755 15.17-37.926 15.17zm193.423-398.222c-45.511 0-91.023-22.755-117.57-56.889-18.964-26.548-15.171-60.681 7.585-79.644 26.548-18.963 60.681-15.17 79.644 7.585 15.17 18.963 45.511 18.963 56.889 0 18.963-22.755 56.889-30.34 79.644-7.585s30.341 56.889 7.585 79.644c-22.755 37.926-68.266 56.89-113.777 56.89z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), xl = [
  Ql
];
function es(e, t, n, s, o, a) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, xl, 6);
}
const ts = /* @__PURE__ */ ye(Jl, [["render", es]]);
R("date");
const ns = R("del"), os = /* @__PURE__ */ m("path", {
  d: "M668.444 1024H355.556c-142.223 0-256-113.778-256-256V170.667h824.888V768c0 142.222-113.777 256-256 256zM184.89 256v512c0 93.867 76.8 170.667 170.667 170.667h312.888c93.867 0 170.667-76.8 170.667-170.667V256H184.89zm753.778 0H85.333c-22.755 0-42.666-19.911-42.666-42.667s19.91-42.666 42.666-42.666h853.334c22.755 0 42.666 19.91 42.666 42.666S961.423 256 938.667 256zM625.777 85.333H398.223c-22.755 0-42.666-19.91-42.666-42.666S375.466 0 398.222 0h227.556c22.755 0 42.666 19.911 42.666 42.667s-19.91 42.666-42.666 42.666z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ls = [
  os
];
function ss(e, t, n, s, o, a) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ls, 6);
}
const Zn = /* @__PURE__ */ ye(ns, [["render", ss]]);
R("del2");
R("dongdong");
R("dou-arrow-up");
const as = R("down-arrow"), rs = /* @__PURE__ */ m("path", {
  d: "M128 349.867C93.867 332.8 34.133 341.333 8.533 384-8.533 418.133 0 477.867 42.667 503.467 179.2 588.8 315.733 665.6 443.733 750.933c42.667 25.6 93.867 25.6 136.534 0C716.8 665.6 853.333 588.8 981.333 503.467c42.667-25.6 51.2-76.8 25.6-119.467s-76.8-51.2-119.466-25.6C768 435.2 640 512 512 588.8 384 512 256 435.2 128 349.867",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), is = [
  rs
];
function us(e, t, n, s, o, a) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, is, 6);
}
const Gn = /* @__PURE__ */ ye(as, [["render", us]]);
R("download");
R("dshop");
const cs = R("edit"), ds = /* @__PURE__ */ m("path", {
  d: "M285.479 992.97H108.606c-27.927 0-55.854-12.412-77.576-31.03C9.31 940.217 0 915.393 0 884.363l3.103-155.152c0-24.824 9.31-46.545 27.927-65.164L626.812 65.164c83.782-83.782 220.315-83.782 307.2 0 83.782 83.781 83.782 223.418 0 307.2l-605.09 601.988c-12.413 12.412-27.928 18.618-43.443 18.618zM781.964 93.09c-31.03 0-65.164 12.413-89.988 37.237L96.194 729.212 93.09 884.364c0 9.309 6.206 15.515 15.515 15.515h161.358l598.884-595.782c49.649-49.649 49.649-127.224 0-173.77l-3.103-3.103c-21.72-21.721-52.751-34.133-83.781-34.133zm-201.946 78.508 65.816-65.847L882.812 342.73l-65.846 65.784zM946.424 992.97H217.212c-24.824 0-46.545-21.722-46.545-46.546s21.72-46.545 46.545-46.545h729.212c24.824 0 46.546 21.721 46.546 46.545s-21.722 46.546-46.546 46.546z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), fs = [
  ds
];
function ps(e, t, n, s, o, a) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, fs, 6);
}
const ms = /* @__PURE__ */ ye(cs, [["render", ps]]);
R("eye");
const hs = R("fabulous"), gs = /* @__PURE__ */ m("path", {
  d: "M584.06 1024H318.577C144.118 1024 0 883.674 0 705.422s140.326-318.578 318.578-318.578v113.778c-113.778 0-204.8 91.022-204.8 204.8s91.022 204.8 204.8 204.8h265.481V1024zm56.888 0h-53.096c-208.593 0-379.26-170.667-379.26-383.052 0-83.437 26.549-163.081 75.852-231.348l3.793-3.793c15.17-22.755 30.34-60.681 45.511-121.363l7.585-34.133c7.586-18.963 15.17-41.718 18.963-68.267C386.844 22.756 470.281 0 519.586 0c117.57 0 178.251 106.193 178.251 212.385v7.585c0 7.586-3.793 18.963-3.793 37.926C876.09 257.896 1024 405.807 1024 587.852v53.096C1024 853.333 853.333 1024 640.948 1024zM519.585 113.778c-30.34 0-41.718 53.096-49.304 87.23-3.792 34.133-11.377 60.68-15.17 83.436l-7.585 34.134c-11.378 45.51-34.133 113.778-60.682 155.496l-7.585 3.793A269.274 269.274 0 0 0 322.37 644.74c0 147.91 121.363 269.274 269.274 269.274h53.097c147.91 0 269.274-121.363 269.274-269.274v-53.097c0-117.57-98.608-216.177-216.178-216.177h-56.889c-18.963-3.793-37.926-15.17-49.304-30.341-11.377-15.17-15.17-37.926-15.17-56.889 7.585-41.718 11.378-64.474 11.378-75.852v-3.792c-3.793 0-3.793-94.815-68.267-94.815z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ys = [
  gs
];
function vs(e, t, n, s, o, a) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1061 1024",
    role: "presentation"
  }, ys, 6);
}
const $s = /* @__PURE__ */ ye(hs, [["render", vs]]), bs = R("failure"), ws = /* @__PURE__ */ m("path", {
  d: "M512 1024C229.831 1024 0 794.169 0 512S229.831 0 512 0s512 229.831 512 512-229.831 512-512 512zm0-955.733C266.24 68.267 68.267 266.24 68.267 512S266.24 955.733 512 955.733 955.733 757.76 955.733 512 757.76 68.267 512 68.267zm111.502 282.169c13.654-13.654 34.134-13.654 47.787 0 11.378 11.377 13.653 31.857 2.275 45.51l-2.275 2.276-111.502 111.502 111.502 111.503c13.653 13.653 13.653 34.133 0 47.786-13.653 13.654-34.133 13.654-47.787 0L512 557.511 400.498 669.013c-11.378 11.378-31.858 13.654-45.511 2.276l-2.276-2.276c-11.378-11.377-13.653-31.857-2.275-45.51l2.275-2.276 111.502-111.503-111.502-111.502c-13.653-13.653-13.653-34.133 0-47.786s34.133-13.654 47.787 0L512 461.938l111.502-111.502z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ks = [
  ws
];
function Cs(e, t, n, s, o, a) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ks, 6);
}
const Jn = /* @__PURE__ */ ye(bs, [["render", Cs]]);
R("find");
R("follow");
R("footprint");
R("github");
R("heart-fill-n");
R("heart-fill");
R("heart-fill1");
R("heart-fill2");
R("heart-fill3");
R("heart-n");
R("heart");
R("heart1");
R("heart2");
R("home");
R("horizontal-n");
R("horizontal");
const Ss = R("image-error"), Ts = /* @__PURE__ */ m("path", {
  d: "M696.43 465.25c40.61 0 73.53-32.72 73.53-73.09s-32.96-73.08-73.53-73.08-73.54 32.72-73.54 73.08 32.92 73.09 73.54 73.09zM535.74 650.62l-273.61-259.4a56.19 56.19 0 0 0-15.36 11.58l-114 119.63-6-222.77c-.73-26.82 20.84-49.41 47.67-50.14l201.77-5.44 47.34-50-250.43 6.75C119 202.33 76.33 247.17 77.78 301l7.32 271.4 4.5 166.78C91.06 793 136.05 835.47 190.2 834l176-4.75 12-.32 47.34-50 116.18-122.64z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ns = /* @__PURE__ */ m("path", {
  d: "m861.71 214.8-242.83-33.86-55.09 41.46L855 263a49.05 49.05 0 0 1 41.79 55.13l-54.33 389.59-120.87-159.05A59.86 59.86 0 0 0 638.06 537l-44 33.08 65.07 86.15L603.84 698l-79.57 60.1-54.92 41.48 34.17 4.76 270.73 37.76a97.55 97.55 0 0 0 109.88-79.6 22.37 22.37 0 0 0 .65-3.44l60.53-434.16c7.44-53.32-29.95-102.62-83.6-110.1z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1);
function Ds(e, t, n, s, o, a) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, [
    Ts,
    ge(","),
    Ns
  ], 6);
}
const _s = /* @__PURE__ */ ye(Ss, [["render", Ds]]), Is = R("image"), Bs = /* @__PURE__ */ m("path", {
  d: "M853.161 892.55H362.595l-209.433-.414a18.5 18.5 0 0 1-1.813-.092c-24.849-2.485-47.825-14.06-64.696-32.595-16.991-18.665-26.35-42.855-26.35-68.112V264.626c0-55.808 45.404-101.211 101.212-101.211H853.16c55.808 0 101.21 45.403 101.21 101.211v225.513c0 .275-.006.552-.018.826-.022.494-1.972 51.723 15.481 85.462 4.717 9.119 1.148 20.335-7.97 25.053-9.117 4.714-20.335 1.15-25.053-7.97-21.3-41.177-19.845-97.643-19.619-103.74V264.627c0-35.307-28.724-64.031-64.03-64.031H161.515c-35.308 0-64.032 28.724-64.032 64.031v526.711c0 32.755 24.321 59.958 56.718 63.62l208.431.412h490.53c35.306 0 64.03-28.725 64.03-64.032l-.382-93.677c-.105-1.75-1.587-19.548-19.55-42.5a9.548 9.548 0 0 1-.147-.19l-21.712-28.489-117.227-155.119c-.416-.55-38.995-50.852-86.272-45.534-38.335 4.315-75.955 45.164-108.79 118.132-17.615 39.141-34.65 68.269-52.082 89.046-17.607 20.986-35.68 33.52-55.251 38.317-43.423 10.638-81.05-18.995-120.887-50.373l-5.057-3.98c-46.555-36.578-68.75-28.224-158.33 59.602-7.33 7.188-19.1 7.071-26.289-.26-7.187-7.33-7.07-19.1.26-26.287 46.659-45.746 77.544-72.727 107.086-84.283 33.358-13.048 64.275-6.267 100.242 21.994l5.093 4.008c33.923 26.72 63.22 49.795 89.029 43.467 25.618-6.279 53.3-42.114 82.28-106.509 39.14-86.976 85.838-134.027 138.797-139.849 68.454-7.515 117.824 57.405 119.892 60.172l117.122 154.98 21.6 28.344c26.277 33.631 27.334 61.639 27.367 64.725l.001.128.384 94.06c.001 55.884-45.4 101.287-101.209 101.287z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ms = /* @__PURE__ */ m("path", {
  d: "M312.328 446.968c-42.325 0-76.759-34.434-76.759-76.76s34.434-76.759 76.76-76.759 76.759 34.435 76.759 76.76-34.434 76.759-76.76 76.759zm0-116.34c-21.824 0-39.579 17.756-39.579 39.58s17.755 39.58 39.58 39.58 39.579-17.756 39.579-39.58-17.755-39.58-39.58-39.58z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1);
function Ls(e, t, n, s, o, a) {
  return u(), f("svg", {
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
const Es = /* @__PURE__ */ ye(Is, [["render", Ls]]);
R("issue");
R("JD");
R("jdl");
R("JIMI40");
const Ps = R("joy-smile"), As = /* @__PURE__ */ m("path", {
  d: "M2185.74 479.429a117.992 117.992 0 1 0-162.829-170.852c-284.772 271.204-732.314 271.204-1017.087 0A118.05 118.05 0 0 0 842.996 479.43c375.98 358.045 966.705 358.045 1342.744 0",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), zs = [
  As
];
function Vs(e, t, n, s, o, a) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 3072 1024",
    role: "presentation"
  }, zs, 6);
}
const Os = /* @__PURE__ */ ye(Ps, [["render", Vs]]), Hs = R("left"), Rs = /* @__PURE__ */ m("path", {
  d: "M642.973 1005.542 321.912 587.098a123.278 123.278 0 0 1 0-150.17l321.06-418.443a47.182 47.182 0 0 1 74.83 57.422l-321.088 418.47a28.994 28.994 0 0 0 0 35.3l321.088 418.47a47.155 47.155 0 0 1-74.83 57.395",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Fs = [
  Rs
];
function Ws(e, t, n, s, o, a) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Fs, 6);
}
const en = /* @__PURE__ */ ye(Hs, [["render", Ws]]), Ys = R("link"), js = /* @__PURE__ */ m("path", {
  d: "M313.034 1004.045c-66.848 0-124.402-24.156-170.798-70.577l-40.854-40.829C54.96 846.218 28.966 783.097 30.83 714.411c3.702-66.85 31.56-131.808 79.819-180.12l137.4-137.373c14.86-14.861 40.855-14.861 55.69 0 14.86 14.861 16.725 38.99 0 55.69l-137.348 137.4a187.47 187.47 0 0 0-55.69 126.24c-1.864 46.422 14.835 89.115 46.396 120.675l40.855 40.855c31.56 31.56 74.253 48.286 120.674 46.421 46.421-1.838 92.843-22.291 126.24-55.69l137.4-137.4c14.862-14.86 40.856-14.86 55.69 0 14.862 14.862 14.862 40.856 0 55.69l-137.4 137.427c-48.285 48.259-113.27 76.117-180.118 79.82a5.645 5.645 0 0 0-7.405 0zm475.294-382.477c-11.133 0-18.563-3.702-27.832-12.997-14.86-14.861-14.86-40.855 0-55.69l115.082-115.108a187.47 187.47 0 0 0 55.716-126.267c1.838-46.395-14.861-89.114-46.421-120.674l-40.855-40.855c-64.985-64.959-176.364-61.257-246.915 9.294L478.266 278.108c-14.835 14.835-40.829 14.835-55.69 0-14.86-14.861-14.86-40.855 0-55.716l118.81-118.81C643.524 1.444 803.163-2.232 899.734 94.287l40.829 40.855c46.421 46.421 72.415 109.541 70.55 178.228-3.702 66.85-31.56 131.807-79.819 180.093L816.186 608.571c-7.43 7.43-18.563 11.133-27.858 12.997zm-332.327-1.864c-11.16 0-18.564-3.702-27.832-12.997-14.888-14.835-14.888-40.829 0-55.69l148.506-148.532c14.861-14.862 40.855-14.862 55.69 0 14.861 14.86 14.861 40.854 0 55.69L483.832 606.706c-7.404 7.43-18.563 11.159-27.831 12.997z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Us = [
  js
];
function Ks(e, t, n, s, o, a) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Us, 6);
}
const Xs = /* @__PURE__ */ ye(Ys, [["render", Ks]]), qs = R("loading"), Zs = /* @__PURE__ */ m("path", {
  d: "M784 902.4c9.6 19.2 6.4 41.6-12.8 54.4-19.2 9.6-41.6 3.2-51.2-12.8-9.6-19.2-6.4-41.6 12.8-54.4 16-12.8 38.4-8 51.2 12.8zM550.4 984c0 22.4-16 38.4-38.4 38.4s-38.4-16-38.4-38.4v-24c0-22.4 19.2-38.4 41.6-38.4 19.2 0 35.2 16 38.4 38.4v25.6h-3.2zm-240-43.2c-9.6 19.2-35.2 25.6-54.4 16-19.2-9.6-25.6-35.2-16-51.2l28.8-51.2c9.6-19.2 35.2-25.6 54.4-16s25.6 35.2 12.8 54.4l-25.6 48zM121.6 784c-19.2 9.6-41.6 3.2-54.4-16-9.6-19.2-6.4-41.6 12.8-54.4l76.8-44.8c19.2-9.6 41.6-3.2 54.4 16 9.6 19.2 3.2 41.6-16 54.4L121.6 784zM38.4 552C16 552 0 536 0 513.6s16-38.4 38.4-38.4H160c22.4 0 38.4 19.2 38.4 38.4 0 22.4-16 38.4-38.4 38.4H38.4zm44.8-241.6c-19.2-9.6-25.6-35.2-16-51.2 9.6-19.2 35.2-25.6 54.4-16L256 320c19.2 9.6 25.6 35.2 16 54.4s-35.2 25.6-54.4 16l-134.4-80zm160-185.6 92.8 160c9.6 19.2 35.2 25.6 54.4 12.8s25.6-35.2 12.8-54.4l-92.8-160C297.6 64 275.2 60.8 256 70.4c-16 12.8-22.4 33.6-12.8 54.4zM473.6 40c0-22.4 16-38.4 38.4-38.4s38.4 19.2 38.4 38.4v184c0 22.4-19.2 38.4-38.4 38.4-22.4 0-38.4-19.2-38.4-38.4V40zm240 43.2c9.6-19.2 35.2-25.6 54.4-16 19.2 9.6 25.6 35.2 16 51.2l-92.8 160c-9.6 19.2-35.2 25.6-54.4 16-19.2-9.6-25.6-35.2-12.8-54.4l89.6-156.8zm188.8 160-160 92.8c-19.2 9.6-25.6 35.2-16 54.4 12.8 19.2 35.2 25.6 54.4 12.8l160-92.8c19.2-9.6 25.6-35.2 12.8-54.4-9.6-16-32-25.6-51.2-12.8zM985.6 472c22.4 0 38.4 16 38.4 38.4s-16 38.4-38.4 38.4H800c-22.4 0-38.4-19.2-38.4-38.4 0-22.4 19.2-38.4 38.4-38.4h185.6z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Gs = [
  Zs
];
function Js(e, t, n, s, o, a) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Gs, 6);
}
const st = /* @__PURE__ */ ye(qs, [["render", Js]]), Qs = R("loading1"), xs = /* @__PURE__ */ m("path", {
  d: "M520.665 64.564a29.244 29.244 0 0 0-7.071-.894c-16.211 0-29.35 13.14-29.35 29.35 0 15.83 12.538 28.696 28.223 29.293v.073c.375 0 .751-.014 1.127-.014 216.493 0 389.629 173.942 389.629 390.433 0 216.496-173.136 388.827-389.63 388.827s-389.63-172.333-389.63-388.829c0-.27.01-.536.01-.804h-.01c0-16.209-13.141-29.35-29.35-29.35s-29.35 13.139-29.35 29.35c0 .055.007.11.007.164-.001.214-.007.425-.007.64 0 247.609 200.722 448.331 448.33 448.331 247.607 0 448.33-200.722 448.33-448.33-.002-245.242-196.917-444.456-441.258-448.24z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ea = [
  xs
];
function ta(e, t, n, s, o, a) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ea, 6);
}
const na = /* @__PURE__ */ ye(Qs, [["render", ta]]), oa = R("location"), la = /* @__PURE__ */ m("path", {
  d: "M512 971.487C259.938 971.487 52.513 764.062 52.513 512S259.938 52.513 512 52.513 971.487 259.938 971.487 512 764.062 971.487 512 971.487zm0-840.205c-210.051 0-380.718 170.667-380.718 380.718S301.95 892.718 512 892.718 892.718 722.05 892.718 512 722.05 131.282 512 131.282zm0 577.641c-107.651 0-196.923-89.272-196.923-196.923S404.349 315.077 512 315.077 708.923 404.349 708.923 512 619.651 708.923 512 708.923zm0-315.077c-65.641 0-118.154 52.513-118.154 118.154S446.36 630.154 512 630.154 630.154 577.64 630.154 512 577.64 393.846 512 393.846zm0-210.051c-21.005 0-39.385-18.38-39.385-39.385V39.385C472.615 18.379 490.995 0 512 0s39.385 18.38 39.385 39.385V144.41c0 21.005-18.38 39.385-39.385 39.385zM512 1024c-21.005 0-39.385-18.38-39.385-39.385V879.59c0-21.005 18.38-39.385 39.385-39.385s39.385 18.38 39.385 39.385v105.025c0 21.006-18.38 39.385-39.385 39.385zm472.615-472.615H879.59c-21.005 0-39.385-18.38-39.385-39.385s18.38-39.385 39.385-39.385h105.025c21.006 0 39.385 18.38 39.385 39.385s-18.38 39.385-39.385 39.385zm-840.205 0H39.385C18.379 551.385 0 533.005 0 512s18.38-39.385 39.385-39.385H144.41c21.005 0 39.385 18.38 39.385 39.385s-18.38 39.385-39.385 39.385z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), sa = [
  la
];
function aa(e, t, n, s, o, a) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, sa, 6);
}
const ra = /* @__PURE__ */ ye(oa, [["render", aa]]), ia = R("location2"), ua = /* @__PURE__ */ m("path", {
  d: "m530.286 1005.714-25.6-10.971c-36.572-14.629-58.515-25.6-73.143-36.572-102.4-84.114-164.572-135.314-193.829-171.885-43.885-51.2-76.8-91.429-106.057-142.629C95.086 577.83 76.8 504.686 76.8 431.543c0-117.029 43.886-226.743 128-307.2C285.257 43.886 394.971 0 512 0s226.743 43.886 310.857 128c84.114 80.457 128 190.171 128 307.2 0 73.143-18.286 146.286-54.857 212.114-25.6 43.886-58.514 91.429-106.057 142.629-29.257 32.914-87.772 84.114-197.486 171.886 0 0-7.314 7.314-18.286 10.971l-43.885 32.914zM497.37 874.057s3.658 3.657 14.629 7.314c3.657-3.657 7.314-3.657 10.971-7.314C621.714 797.257 683.886 742.4 705.83 716.8c40.228-47.543 69.485-87.771 91.428-128 25.6-47.543 40.229-102.4 40.229-157.257 0-87.772-32.915-168.229-95.086-230.4-58.514-58.514-142.629-91.429-230.4-91.429S340.114 142.63 277.943 204.8c-62.172 62.171-95.086 142.629-95.086 230.4 0 54.857 14.629 109.714 40.229 157.257 25.6 43.886 54.857 80.457 95.085 124.343 25.6 29.257 84.115 80.457 179.2 157.257zm18.286-248.686c-102.4 0-182.857-80.457-182.857-182.857s80.457-182.857 182.857-182.857 182.857 80.457 182.857 182.857-80.457 182.857-182.857 182.857zm0-256c-40.228 0-73.143 32.915-73.143 73.143s32.915 73.143 73.143 73.143 73.143-32.914 73.143-73.143-32.914-73.143-73.143-73.143z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ca = [
  ua
];
function da(e, t, n, s, o, a) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ca, 6);
}
const fa = /* @__PURE__ */ ye(ia, [["render", da]]);
R("locationg3");
R("lower");
R("marshalling");
const pa = R("mask-close"), ma = /* @__PURE__ */ m("path", {
  d: "M512 14.897C238.594 14.897 14.897 238.594 14.897 512S238.594 1009.103 512 1009.103 1009.103 785.406 1009.103 512 785.406 14.897 512 14.897zm207.126 646.234c16.57 16.57 16.57 41.425 0 57.995s-41.425 16.57-57.995 0L512 569.996l-149.13 149.13c-16.57 16.57-41.426 16.57-57.996 0s-16.57-41.425 0-57.995L454.004 512l-149.13-149.13c-16.57-16.57-16.57-41.426 0-57.996s41.425-16.57 57.995 0L512 454.004l149.13-149.13c16.57-16.57 41.426-16.57 57.996 0s16.57 41.425 0 57.995L569.996 512l149.13 149.13z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ha = [
  ma
];
function ga(e, t, n, s, o, a) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ha, 6);
}
const ya = /* @__PURE__ */ ye(pa, [["render", ga]]);
R("message");
R("microphone");
const va = R("minus"), $a = /* @__PURE__ */ m("path", {
  d: "M299.52 460.8h409.6c28.16 0 51.2 23.04 51.2 51.2s-23.04 51.2-51.2 51.2h-409.6c-28.16 0-51.2-23.04-51.2-51.2s23.04-51.2 51.2-51.2z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ba = [
  $a
];
function wa(e, t, n, s, o, a) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ba, 6);
}
const ka = /* @__PURE__ */ ye(va, [["render", wa]]);
R("more-s");
const Ca = R("more-x"), Sa = /* @__PURE__ */ m("path", {
  d: "M937.115 428.218c-43.442 0-80.679 37.237-80.679 80.679s37.237 80.679 80.68 80.679c43.442 0 80.678-37.237 80.678-80.679s-34.133-80.679-80.679-80.679m-428.218-52.751c-74.473 0-133.43 58.957-133.43 133.43s58.957 133.43 133.43 133.43 133.43-58.957 133.43-133.43-58.957-133.43-133.43-133.43M83.782 428.218c-43.443 0-80.679 37.237-80.679 80.679s34.133 80.679 80.679 80.679 80.679-37.237 80.679-80.679-37.237-80.679-80.68-80.679",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ta = [
  Sa
];
function Na(e, t, n, s, o, a) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ta, 6);
}
const Da = /* @__PURE__ */ ye(Ca, [["render", Na]]);
R("more");
R("my");
R("my2");
const _a = R("notice"), Ia = /* @__PURE__ */ m("path", {
  d: "M940.873 819.2h-85.334V430.933c0-192-153.6-345.6-341.333-345.6s-341.333 153.6-341.333 345.6V819.2H87.539V430.933C87.54 192 279.54 0 514.206 0s426.667 192 426.667 430.933V819.2zM514.633 1024c-68.267 0-132.267-29.867-174.934-85.333-17.066-17.067-12.8-42.667 4.267-59.734 17.067-12.8 46.933-12.8 59.733 8.534 29.867 34.133 68.267 51.2 110.934 51.2s81.066-17.067 106.666-51.2c12.8-17.067 42.667-21.334 59.734-8.534 17.066 12.8 21.333 42.667 8.533 59.734C646.899 994.133 582.899 1024 514.633 1024zm469.333-162.133h-12.8c-294.4-89.6-618.667-89.6-913.067 0-21.333 4.266-46.933-8.534-55.466-29.867-8.534-21.333 4.266-46.933 29.866-51.2 311.467-93.867 652.8-89.6 964.267 0 21.333 8.533 34.133 29.867 29.867 51.2-8.534 21.333-25.6 29.867-42.667 29.867z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ba = [
  Ia
];
function Ma(e, t, n, s, o, a) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1027 1024",
    role: "presentation"
  }, Ba, 6);
}
const La = /* @__PURE__ */ ye(_a, [["render", Ma]]);
R("order");
R("people");
const Ea = R("photograph"), Pa = /* @__PURE__ */ m("path", {
  d: "M570.514 789.943c-119.954 0-219.428-99.474-219.428-219.429s99.474-219.428 219.428-219.428 219.429 99.474 219.429 219.428-99.474 219.429-219.429 219.429zm0-351.086c-73.143 0-131.657 58.514-131.657 131.657s58.514 131.657 131.657 131.657 131.657-58.514 131.657-131.657-58.514-131.657-131.657-131.657zM877.714 1024h-614.4C117.03 1024 0 906.971 0 760.686V380.343c0-146.286 117.029-263.314 263.314-263.314h32.183c0-2.926 2.926-8.778 2.926-11.703C315.977 43.886 374.49 0 438.857 0h263.314c70.218 0 128.732 49.737 143.36 117.029h32.183c146.286 0 263.315 117.028 263.315 263.314v380.343C1141.029 906.97 1024 1024 877.714 1024zm-614.4-819.2c-96.548 0-175.543 78.994-175.543 175.543v380.343c0 96.548 78.995 175.543 175.543 175.543h614.4c96.549 0 175.543-78.995 175.543-175.543V380.343c0-96.549-78.994-175.543-175.543-175.543H819.2c-32.183 0-58.514-26.331-58.514-58.514S734.354 87.77 702.17 87.77H438.857c-26.331 0-49.737 17.555-55.588 40.96-2.926 5.852-2.926 11.703-2.926 17.555 0 32.183-26.332 58.514-58.514 58.514h-58.515zm-87.771 160.914a73.143 73.143 0 1 0 146.286 0 73.143 73.143 0 1 0-146.286 0Z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Aa = [
  Pa
];
function za(e, t, n, s, o, a) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1141 1024",
    role: "presentation"
  }, Aa, 6);
}
const Va = /* @__PURE__ */ ye(Ea, [["render", za]]);
R("play-circle-fill");
R("play-double-back");
R("play-double-forward");
R("play-start");
R("play-stop");
const Oa = R("plus"), Ha = /* @__PURE__ */ m("path", {
  d: "M345.6 460.8h409.6q51.2 0 51.2 51.2t-51.2 51.2H345.6q-51.2 0-51.2-51.2t51.2-51.2zM550.4 256q51.2 0 51.2 51.2v409.6q0 51.2-51.2 51.2t-51.2-51.2V307.2q0-51.2 51.2-51.2z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ra = [
  Ha
];
function Fa(e, t, n, s, o, a) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ra, 6);
}
const Wa = /* @__PURE__ */ ye(Oa, [["render", Fa]]);
R("poweroff-circle-fill");
const Ya = R("rect-down"), ja = /* @__PURE__ */ m("path", {
  d: "M515.072 778.24c-14.336 0-28.672-5.632-39.936-16.384L69.12 356.864c-22.016-22.016-22.016-57.856 0-79.872s57.856-22.016 79.872 0L515.584 642.56 880.64 275.968c22.016-22.016 57.856-22.016 79.872 0s22.016 57.856 0 79.872L555.008 762.368c-10.752 10.752-25.6 15.872-39.936 15.872z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ua = [
  ja
];
function Ka(e, t, n, s, o, a) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ua, 6);
}
const Xa = /* @__PURE__ */ ye(Ya, [["render", Ka]]);
R("rect-left");
R("rect-right");
const qa = R("rect-up"), Za = /* @__PURE__ */ m("path", {
  d: "M920.576 778.24c-14.336 0-28.672-5.632-39.936-16.384L515.072 395.264 148.48 760.832c-22.016 22.016-57.856 22.016-79.872 0s-22.016-57.856 0-79.872l406.528-405.504c22.016-22.016 57.856-22.016 79.872 0l405.504 406.528c22.016 22.016 22.016 57.856 0 79.872-11.264 11.264-25.6 16.384-39.936 16.384z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ga = [
  Za
];
function Ja(e, t, n, s, o, a) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ga, 6);
}
const Qa = /* @__PURE__ */ ye(qa, [["render", Ja]]);
R("refresh");
const xa = R("refresh2"), er = /* @__PURE__ */ m("path", {
  d: "M771.938 315.077h199.55L958.358 469.99 758.81 364.964c-13.128-7.877-18.38-23.63-10.502-36.759 2.625-7.877 13.128-13.128 23.63-13.128zm-535.63 393.846H44.636L57.764 554.01l191.672 105.026c13.128 7.877 18.38 23.63 10.502 36.759-5.25 7.877-15.753 13.128-23.63 13.128zM509.374 1024C257.313 1024 44.636 845.456 5.251 596.02 0 575.016 15.754 556.637 36.76 551.386c21.005-2.626 42.01 10.502 44.636 31.507 34.133 210.052 215.302 362.339 427.98 362.339 191.671 0 362.338-128.657 417.476-312.452 5.252-21.005 28.882-34.133 49.887-26.256 21.006 5.251 34.134 28.882 26.257 49.887C937.354 871.713 735.179 1024 509.375 1024zm467.364-551.385c-18.379 0-36.759-13.128-39.384-34.133C903.22 231.056 722.05 78.77 509.374 78.77c-191.671 0-362.338 128.657-414.85 312.452-5.252 21.005-28.883 34.133-49.888 26.256-21.005-5.251-34.133-28.882-26.257-49.887C81.395 152.287 283.57 0 509.374 0c252.062 0 464.739 178.544 504.123 427.98 2.626 21.005-10.502 42.01-31.507 44.635h-5.252z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), tr = [
  er
];
function nr(e, t, n, s, o, a) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, tr, 6);
}
const or = /* @__PURE__ */ ye(xa, [["render", nr]]), lr = R("retweet"), sr = /* @__PURE__ */ m("path", {
  d: "M136 552h63.6c4.4 0 8-3.6 8-8V288.7h528.6v72.6c0 1.9.6 3.7 1.8 5.2 2.9 3.6 8.1 4.3 11.7 1.4L893 255.4c4.3-5 3.6-10.3 0-13.2L749.7 129.8c-1.5-1.2-3.3-1.8-5.2-1.8-4.6 0-8.4 3.8-8.4 8.4V209H199.7c-39.5 0-71.7 32.2-71.7 71.8V544c0 4.4 3.6 8 8 8zm752-80h-63.6c-4.4 0-8 3.6-8 8v255.3H287.8v-72.6c0-1.9-.6-3.7-1.8-5.2-2.9-3.6-8.1-4.3-11.7-1.4L131 768.6c-4.3 5-3.6 10.3 0 13.2l143.3 112.4c1.5 1.2 3.3 1.8 5.2 1.8 4.6 0 8.4-3.8 8.4-8.4V815h536.6c39.5 0 71.7-32.2 71.7-71.8V480c-.2-4.4-3.8-8-8.2-8z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ar = [
  sr
];
function rr(e, t, n, s, o, a) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ar, 6);
}
const ir = /* @__PURE__ */ ye(lr, [["render", rr]]), ur = R("right"), cr = /* @__PURE__ */ m("path", {
  d: "M381.262 1005.566c-16.132 21.51-45.708 24.198-67.217 8.066-21.51-16.132-24.198-45.708-8.066-67.217C413.526 806.604 518.384 666.792 625.932 529.67c8.066-10.755 8.066-24.198 0-34.953C518.384 354.906 413.526 215.094 305.979 77.972c-16.132-21.51-10.755-51.085 8.066-67.217C335.555-5.377 365.13 0 381.262 18.82c107.547 142.5 212.405 282.311 319.953 419.434 34.952 43.019 34.952 104.858 0 150.566-107.548 139.811-212.406 279.622-319.953 416.745",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), dr = [
  cr
];
function fr(e, t, n, s, o, a) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, dr, 6);
}
const tn = /* @__PURE__ */ ye(ur, [["render", fr]]);
R("s-follow");
R("scan");
R("scan2");
R("screen-little");
R("search");
R("search2");
const pr = R("service"), mr = /* @__PURE__ */ m("path", {
  d: "M1024 657.723H905.846v-126.03c0-228.431-177.23-413.54-393.846-413.54s-393.846 185.109-393.846 413.54v126.03H0v-126.03C0 236.307 228.43 0 512 0s512 236.308 512 531.692v126.031zM196.923 866.462C86.646 866.462 0 779.815 0 669.538s86.646-196.923 196.923-196.923 196.923 86.647 196.923 196.923S307.2 866.462 196.923 866.462zm0-275.693c-43.323 0-78.77 35.446-78.77 78.77s35.447 78.769 78.77 78.769 78.77-35.446 78.77-78.77-35.447-78.769-78.77-78.769zm630.154 275.693c-110.277 0-196.923-86.647-196.923-196.924S716.8 472.615 827.077 472.615 1024 559.262 1024 669.538s-86.646 196.924-196.923 196.924zm0-275.693c-43.323 0-78.77 35.446-78.77 78.77s35.447 78.769 78.77 78.769 78.77-35.446 78.77-78.77-35.447-78.769-78.77-78.769zm-149.662 429.293c-23.63 0-47.261-15.754-55.138-43.324-7.877-31.507 7.877-63.015 39.385-74.83 102.4-31.508 189.046-102.4 236.307-196.923 15.754-27.57 51.2-39.385 78.77-23.631s39.384 51.2 23.63 78.77c-63.015 122.091-177.23 216.614-307.2 256-3.938 3.938-11.815 3.938-15.754 3.938z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), hr = [
  mr
];
function gr(e, t, n, s, o, a) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, hr, 6);
}
const yr = /* @__PURE__ */ ye(pr, [["render", gr]]);
R("setting");
R("share-n");
R("share");
R("share1");
R("shop");
R("shop3");
const vr = R("star-fill-n"), $r = /* @__PURE__ */ m("path", {
  d: "M1047.135 361.244 722.87 312.89 577.802 22.756c-2.844-8.534-11.378-14.223-19.911-17.067-19.911-8.533-45.511-2.845-54.045 17.067L358.78 312.889 34.513 358.4c-8.533 0-17.067 5.689-22.755 11.378-17.067 17.066-14.223 42.666 0 56.889l233.244 227.555-54.044 321.422c-2.845 8.534 0 17.067 2.844 25.6 11.378 19.912 34.133 28.445 54.044 17.067L537.98 867.556l290.133 150.755c8.533 2.845 17.067 5.689 25.6 2.845 22.756-2.845 36.978-25.6 34.133-45.512l-54.044-321.422 233.244-227.555c5.69-5.69 11.378-14.223 11.378-22.756 5.69-19.911-8.533-39.822-31.289-42.667z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), br = [
  $r
];
function wr(e, t, n, s, o, a) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1081 1024",
    role: "presentation"
  }, br, 6);
}
const Cn = /* @__PURE__ */ ye(vr, [["render", wr]]);
R("star-fill");
R("star-fill1");
R("star-fill2");
R("star-n");
R("star");
R("star1");
R("star11");
R("star2");
const kr = R("success"), Cr = /* @__PURE__ */ m("path", {
  d: "M762.311 391.396C655.36 466.489 566.613 552.96 491.52 659.91c-20.48 27.307-61.44 27.307-79.644-2.275-34.134-52.338-72.818-91.023-125.156-125.156-25.031-15.929-9.102-54.613 20.48-50.062 56.889 11.378 100.124 34.133 143.36 72.818 77.369-93.298 175.218-166.116 286.72-213.903 27.307-9.102 50.062 31.858 25.031 50.063M512 1024C229.831 1024 0 794.169 0 512S229.831 0 512 0s512 229.831 512 512-229.831 512-512 512zm0-955.733C266.24 68.267 68.267 266.24 68.267 512S266.24 955.733 512 955.733 955.733 757.76 955.733 512 757.76 68.267 512 68.267z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Sr = [
  Cr
];
function Tr(e, t, n, s, o, a) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Sr, 6);
}
const Nr = /* @__PURE__ */ ye(kr, [["render", Tr]]), Dr = R("tips"), _r = /* @__PURE__ */ m("path", {
  d: "M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512zm0-938.667c-234.667 0-426.667 192-426.667 426.667s192 426.667 426.667 426.667 426.667-192 426.667-426.667S746.667 85.333 512 85.333zM448 320a64 64 0 1 0 128 0 64 64 0 1 0-128 0Zm-17.067 149.333h51.2c12.8 0 21.334 8.534 21.334 21.334v8.533c0 12.8-8.534 21.333-21.334 21.333h-51.2c-12.8 0-25.6-12.8-25.6-25.6s12.8-25.6 25.6-25.6zm51.2 0H524.8c25.6 0 51.2 21.334 51.2 51.2v8.534L537.6 755.2c0 8.533-8.533 17.067-21.333 17.067H473.6c-25.6 0-51.2-21.334-51.2-51.2v-8.534L460.8 486.4c4.267-8.533 12.8-17.067 21.333-17.067zm8.534 251.734h76.8c12.8 0 25.6 12.8 25.6 25.6s-12.8 25.6-25.6 25.6h-76.8c-12.8 0-21.334-8.534-21.334-21.334v-12.8c4.267-12.8 12.8-17.066 21.334-17.066z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ir = [
  _r
];
function Br(e, t, n, s, o, a) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ir, 6);
}
const Qn = /* @__PURE__ */ ye(Dr, [["render", Br]]), Mr = R("top"), Lr = /* @__PURE__ */ m("path", {
  d: "M136.533 540.444c-11.377 0-25.6-5.688-34.133-17.066-14.222-19.911-11.378-45.511 8.533-59.734L477.867 179.2c19.91-14.222 45.51-11.378 59.733 8.533s11.378 45.511-8.533 59.734L162.133 531.91c-5.689 5.689-14.222 8.533-25.6 8.533zm745.245 0c-8.534 0-17.067-2.844-25.6-8.533L489.244 247.467c-19.91-14.223-22.755-42.667-8.533-59.734 14.222-19.91 42.667-22.755 59.733-8.533l366.934 284.444c19.91 14.223 22.755 42.667 8.533 59.734-8.533 11.378-19.911 17.066-34.133 17.066zM512 1024c-22.756 0-42.667-19.911-42.667-42.667v-768c0-22.755 19.911-42.666 42.667-42.666s42.667 19.91 42.667 42.666v768c0 22.756-19.911 42.667-42.667 42.667zM884.622 85.333h-742.4c-22.755 0-42.666-19.91-42.666-42.666S119.466 0 142.222 0h742.4c22.756 0 42.667 19.911 42.667 42.667s-19.911 42.666-42.667 42.666z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Er = [
  Lr
];
function Pr(e, t, n, s, o, a) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Er, 6);
}
const Ar = /* @__PURE__ */ ye(Mr, [["render", Pr]]), zr = R("triangle-down"), Vr = /* @__PURE__ */ m("path", {
  d: "m573.056 752 308.8-404.608A76.8 76.8 0 0 0 820.736 224H203.232a76.8 76.8 0 0 0-61.056 123.392L450.976 752a76.8 76.8 0 0 0 122.08 0z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Or = [
  Vr
];
function Hr(e, t, n, s, o, a) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Or, 6);
}
const Rr = /* @__PURE__ */ ye(zr, [["render", Hr]]), Fr = R("triangle-up"), Wr = /* @__PURE__ */ m("path", {
  d: "m573.056 272 308.8 404.608A76.8 76.8 0 0 1 820.736 800H203.232a76.8 76.8 0 0 1-61.056-123.392L450.976 272a76.8 76.8 0 0 1 122.08 0z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Yr = [
  Wr
];
function jr(e, t, n, s, o, a) {
  return u(), f("svg", {
    class: L(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Yr, 6);
}
const Ur = /* @__PURE__ */ ye(Fr, [["render", jr]]);
R("uploader");
R("voice");
const Kr = { class: "nut-button__wrap" }, qe = /* @__PURE__ */ Ue({
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
    const n = e, s = t, o = (r) => {
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
    }), l = D(() => {
      let r = {};
      return n.color && (r = {
        color: n.plain ? n.color : "#fff",
        background: n.plain ? "#fff" : `border-box ${n.color}`
      }, n.color.includes("gradient") ? r.borderColor = "transparent" : r.borderColor = n.color), r;
    });
    return (r, i) => (u(), f("view", {
      class: L(a.value),
      style: A(l.value),
      onClick: o
    }, [
      m("view", Kr, [
        r.loading ? (u(), ee(Re(st), {
          key: 0,
          class: "nut-icon-loading"
        })) : N("", !0),
        r.$slots.icon && !r.loading ? _(r.$slots, "icon", { key: 1 }) : N("", !0),
        r.$slots.default ? (u(), f("view", {
          key: 2,
          class: L({ "nut-button__text": r.$slots.icon || r.loading })
        }, [
          _(r.$slots, "default")
        ], 2)) : N("", !0)
      ])
    ], 6));
  }
}), xn = (e) => {
  const t = ce([]), n = ce([]);
  return {
    children: t,
    linkChildren: (o) => {
      Le(e, G({
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
}, nn = (e) => {
  const t = Me(e, null);
  if (t) {
    const n = We(), { link: s, unlink: o } = t;
    s(n), Ke(() => {
      o(n);
    });
  }
  return { parent: t };
}, at = (e) => {
  const t = e;
  return t.install = (n) => {
    t.name && n.component(t.name, t);
  }, t;
};
at(qe);
const Xr = (e) => e.replace(/-./g, (t) => t[1].toUpperCase());
function Y(e) {
  return {
    componentName: "nut-" + e,
    create: function(n) {
      return n.name = "Nut" + Xr("-" + e), n.install = (s) => {
        s.component(n.name, n);
      }, Ue(n);
    }
  };
}
const ft = (e, t) => e ? be(e, t) : "", on = (e, t) => {
  let n = document.body;
  const s = e.teleport || "body";
  s != "body" && (tl(s) ? n = document.querySelector(s) : n = e.teleport);
  const o = document.createElement("view"), a = t.name ? t.name + "-" : "", l = e.id || (/* @__PURE__ */ new Date()).getTime();
  o.id = a + l;
  let r = {};
  At(t.wrapper) ? r = t.wrapper(n, o) : r = t.wrapper;
  const i = Uo(r, e), p = t.components;
  return p && p.forEach((d) => {
    i.use(d);
  }), n.appendChild(o), {
    instance: i.mount(o),
    unmount: () => {
      i.unmount(), n.removeChild(o);
    }
  };
};
function ln() {
  return We().proxy.$router || null;
}
const Be = (e) => {
  if (e !== void 0)
    return isNaN(Number(e)) ? String(e) : `${e}px`;
}, { componentName: qr, create: Zr } = Y("cell"), Gr = Zr({
  components: { Right: tn },
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
      const r = qr;
      return {
        [r]: !0,
        [`${r}--clickable`]: e.isLink || e.to,
        [`${r}--center`]: e.center,
        [`${r}--large`]: e.size === "large"
      };
    }), s = ln(), o = D(() => ({
      borderRadius: Be(e.roundRadius)
    })), a = D(() => ({
      textAlign: e.descTextAlign
    }));
    return {
      handleClick: (r) => {
        t("click", r), e.to && s ? s[e.replace ? "replace" : "push"](e.to) : e.url && (e.replace ? location.replace(e.url) : location.href = e.url);
      },
      classes: n,
      baseStyle: o,
      descStyle: a
    };
  }
}), K = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, Jr = {
  key: 0,
  class: "nut-cell__icon"
}, Qr = {
  key: 1,
  class: "nut-cell__title"
}, xr = { class: "title" }, ei = { class: "nut-cell__title-desc" };
function ti(e, t, n, s, o, a) {
  const l = W("Right");
  return u(), f("view", {
    class: L(e.classes),
    style: A(e.baseStyle),
    onClick: t[0] || (t[0] = (...r) => e.handleClick && e.handleClick(...r))
  }, [
    _(e.$slots, "default", {}, () => [
      e.$slots.icon ? (u(), f("view", Jr, [
        _(e.$slots, "icon")
      ])) : N("", !0),
      e.title || e.subTitle || e.$slots.title ? (u(), f("view", Qr, [
        e.subTitle ? (u(), f(x, { key: 0 }, [
          _(e.$slots, "title", {}, () => [
            m("view", xr, E(e.title), 1)
          ]),
          m("view", ei, E(e.subTitle), 1)
        ], 64)) : _(e.$slots, "title", { key: 1 }, () => [
          ge(E(e.title), 1)
        ])
      ])) : N("", !0),
      e.desc || e.$slots.desc ? (u(), f("view", {
        key: 2,
        class: L(["nut-cell__value", { "nut-cell__value--alone": !e.title && !e.subTitle && !e.$slots.title }]),
        style: A(e.descStyle)
      }, [
        _(e.$slots, "desc", {}, () => [
          ge(E(e.desc), 1)
        ])
      ], 6)) : N("", !0),
      _(e.$slots, "link", {}, () => [
        e.isLink || e.to ? (u(), ee(l, {
          key: 0,
          class: "nut-cell__link"
        })) : N("", !0)
      ])
    ])
  ], 6);
}
const eo = /* @__PURE__ */ K(Gr, [["render", ti]]), { create: ni } = Y("cell-group"), oi = ni({
  props: {
    title: { type: String, default: "" },
    desc: { type: String, default: "" }
  }
}), li = { class: "nut-cell-group" }, si = {
  key: 1,
  class: "nut-cell-group__title"
}, ai = {
  key: 3,
  class: "nut-cell-group__desc"
}, ri = { class: "nut-cell-group__wrap" };
function ii(e, t, n, s, o, a) {
  return u(), f("view", li, [
    e.$slots.title ? _(e.$slots, "title", { key: 0 }) : e.title ? (u(), f("view", si, E(e.title), 1)) : N("", !0),
    e.$slots.desc ? _(e.$slots, "desc", { key: 2 }) : e.desc ? (u(), f("view", ai, E(e.desc), 1)) : N("", !0),
    m("view", ri, [
      _(e.$slots, "default")
    ])
  ]);
}
const to = /* @__PURE__ */ K(oi, [["render", ii]]);
let mt = 0;
const Sn = "nut-overflow-hidden", ui = (e) => [() => {
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
}], { componentName: ci, create: di } = Y("overlay"), fi = di({
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
    const [n, s] = ui(() => e.lockScroll), o = D(() => ({
      [ci]: !0,
      [e.overlayClass]: !0
    })), a = D(() => G({
      transitionDuration: `${e.duration}s`,
      zIndex: e.zIndex
    }, e.overlayStyle));
    return bt(() => {
      e.visible ? n() : s();
    }), { classes: o, style: a, onClick: (r) => {
      t("click", r), e.closeOnClickOverlay && t("update:visible", !1);
    } };
  }
});
function pi(e, t, n, s, o, a) {
  return u(), ee(Zt, { name: "overlay-fade" }, {
    default: ne(() => [
      Ce(m("view", {
        class: L(e.classes),
        style: A(e.style),
        onClick: t[0] || (t[0] = De((...l) => e.onClick && e.onClick(...l), ["stop"]))
      }, [
        _(e.$slots, "default")
      ], 6), [
        [Ne, e.visible]
      ])
    ]),
    _: 3
  });
}
const Tt = /* @__PURE__ */ K(fi, [["render", pi]]), Nt = {
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
}, { componentName: mi, create: hi } = Y("popup"), no = 2e3;
let Tn = no;
const gi = hi({
  components: {
    NutOverlay: Tt,
    Close: zt
  },
  props: Nt,
  emits: ["clickPop", "clickCloseIcon", "open", "close", "opened", "closed", "clickOverlay", "update:visible"],
  setup(e, { emit: t }) {
    const n = ce({
      zIndex: e.zIndex,
      showSlot: !0,
      closed: e.closeable
    }), s = D(() => ({
      [mi]: !0,
      round: e.round,
      [`nut-popup--${e.position}`]: !0,
      [`nut-popup--${e.position}--safebottom`]: e.position === "bottom" && e.safeAreaInsetBottom,
      [e.popClass]: !0
    })), o = D(() => G({
      zIndex: n.zIndex,
      transitionDuration: `${e.duration}s`
    }, e.style)), a = D(() => e.transition ? e.transition : `nut-popup-slide-${e.position}`), l = () => {
      e.zIndex !== no && (Tn = Number(e.zIndex)), t("update:visible", !0), n.zIndex = ++Tn, e.destroyOnClose && (n.showSlot = !0), t("open");
    }, r = () => {
      t("update:visible", !1), t("close"), e.destroyOnClose && setTimeout(() => {
        n.showSlot = !1;
      }, +e.duration * 1e3);
    }, i = (k) => {
      t("clickPop", k);
    }, p = (k) => {
      k.stopPropagation(), t("clickCloseIcon", k), t("update:visible", !1);
    }, d = (k) => {
      t("clickOverlay", k), e.closeOnClickOverlay && t("update:visible", !1);
    }, v = (k) => {
      t("opened", k);
    }, g = (k) => {
      t("closed", k);
    };
    return Q(
      () => e.visible,
      () => {
        e.visible ? l() : r();
      }
    ), bt(() => {
      n.closed = e.closeable;
    }), de(G({}, he(n)), {
      popStyle: o,
      transitionName: a,
      classes: s,
      onClick: i,
      onClickCloseIcon: p,
      onClickOverlay: d,
      onOpened: v,
      onClosed: g
    });
  }
});
function yi(e, t, n, s, o, a) {
  const l = W("nut-overlay"), r = W("Close");
  return u(), ee(On, {
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
    oe(Zt, {
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
          e.showSlot ? _(e.$slots, "default", { key: 0 }) : N("", !0),
          e.closed ? (u(), f("view", {
            key: 1,
            class: L(["nut-popup__close-icon", "nut-popup__close-icon--" + e.closeIconPosition]),
            onClick: t[0] || (t[0] = (...i) => e.onClickCloseIcon && e.onClickCloseIcon(...i))
          }, [
            _(e.$slots, "close-icon", {}, () => [
              oe(r, { height: "12px" })
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
const Ee = /* @__PURE__ */ K(gi, [["render", yi]]), vi = (e) => ({
  props: {
    theme: { type: String, default: "" },
    themeVars: { type: Object, default: {} },
    tag: { type: String, default: e }
  },
  setup(t, { slots: n }) {
    const s = (r) => {
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
        const d = s(p);
        i["--nut-address-region-tab-line"] = `linear-gradient(90deg, ${p} 0%, rgba(${d}, 0.15) 100%)`, i["--nut-tabs-horizontal-tab-line-color"] = `linear-gradient(90deg, ${p} 0%, rgba(${d}, 0.15) 100%)`, i["--nut-tabs-vertical-tab-line-color"] = `linear-gradient(180deg, ${p} 0%, rgba(${d}, 0.15) 100%)`;
      }
      return Object.keys(r).forEach((d) => {
        i[`--nut-${o(d)}`] = r[d];
      }), i;
    }, l = D(() => a(t.themeVars));
    return () => {
      var r;
      return be(
        t.tag,
        {
          class: `nut-theme-${t.theme}`,
          style: l.value
        },
        (r = n.default) == null ? void 0 : r.call(n)
      );
    };
  }
}), { create: $i } = Y("config-provider"), bi = $i(vi("div")), { componentName: wi, create: ki } = Y("image"), Ci = ki({
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
    Image: Es,
    ImageError: _s
  },
  emits: ["click", "load", "error"],
  setup(e, { emit: t }) {
    const n = ce({
      loading: !0,
      isError: !1,
      slotLoding: ot().loading,
      slotError: ot().error
    }), s = D(() => {
      const k = wi;
      return {
        [k]: !0,
        [`${k}-round`]: e.round
      };
    }), o = z(null), a = z(!1), l = z(null), r = () => {
      const k = {
        threshold: [0],
        rootMargin: "0px"
      };
      o.value = new IntersectionObserver(($) => {
        $.forEach((b) => {
          b.isIntersecting && (a.value = !0, o.value.disconnect());
        });
      }, k), l.value && o.value.observe(l.value);
    };
    ve(() => {
      e.lazyLoad && r();
    }), Gt(() => {
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
    }, v = () => {
      n.isError = !0, n.loading = !1, t("error");
    }, g = (k) => {
      t("click", k);
    };
    return de(G({}, he(n)), { imageClick: g, classes: s, styles: p, stylebox: i, error: v, load: d, show: a, imgRef: l });
  }
}), Si = ["src", "date-src", "alt"], Ti = {
  key: 0,
  class: "nut-img-loading"
}, Ni = {
  key: 1,
  class: "nut-img-error"
};
function Di(e, t, n, s, o, a) {
  const l = W("Image"), r = W("ImageError");
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
    }, null, 44, Si),
    e.loading ? (u(), f("div", Ti, [
      e.slotLoding ? N("", !0) : (u(), ee(l, {
        key: 0,
        width: "16px",
        height: "20px",
        name: "image"
      })),
      _(e.$slots, "loading")
    ])) : N("", !0),
    e.isError && !e.loading ? (u(), f("div", Ni, [
      e.slotError ? N("", !0) : (u(), ee(r, {
        key: 0,
        width: "16px",
        height: "20px",
        name: "imageError"
      })),
      _(e.$slots, "error")
    ])) : N("", !0)
  ], 6);
}
const _i = /* @__PURE__ */ K(Ci, [["render", Di]]), { create: Ii } = Y("layout"), Bi = Ii({}), oo = Symbol("nut-layout"), { create: Mi } = Y("col"), Li = Mi({
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
    const t = "nut-col", n = Me(oo), s = D(() => ({
      [t]: !0,
      [t + "-gutter"]: n,
      ["nut-col-" + e.span]: !0,
      ["nut-col-offset-" + e.offset]: !0
    })), o = D(() => ({
      paddingLeft: n / 2 + "px",
      paddingRight: n / 2 + "px"
    }));
    return {
      classes: s,
      style: o
    };
  }
});
function Ei(e, t, n, s, o, a) {
  return u(), f("view", {
    class: L(e.classes),
    style: A(e.style)
  }, [
    _(e.$slots, "default")
  ], 6);
}
const Pi = /* @__PURE__ */ K(Li, [["render", Ei]]), { create: Ai } = Y("row"), zi = Ai({
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
    Le(oo, e.gutter);
    const n = (o, a) => o ? a ? `nut-row-${o}-${a}` : "" : `nut-row-${a}`;
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
function Vi(e, t, n, s, o, a) {
  return u(), f("view", {
    class: L(e.classes)
  }, [
    _(e.$slots, "default")
  ], 2);
}
const Oi = /* @__PURE__ */ K(zi, [["render", Vi]]), Hi = /scroll|auto|overlay/i, lo = window;
function Ri(e) {
  return e.tagName !== "HTML" && e.tagName !== "BODY" && e.nodeType === 1;
}
function Ut(e, t = lo) {
  let n = e;
  for (; n && n !== t && Ri(n); ) {
    const { overflowY: s } = window.getComputedStyle(n);
    if (Hi.test(s))
      return n;
    n = n.parentNode;
  }
  return t;
}
function so(e, t = lo) {
  const n = z();
  return ve(() => {
    e.value && (n.value = Ut(e.value, t));
  }), n;
}
function Fi(e) {
  return typeof window != "undefined" && e === window;
}
const Fe = (e) => {
  const t = Re(e);
  if (Fi(t)) {
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
}, { create: Wi } = Y("sticky"), Yi = Wi({
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
    }), a = D(() => e.position === "top" ? Number(e.top) : Number(e.bottom)), l = D(() => o.fixed ? { height: `${o.height}px` } : {}), r = D(() => o.fixed ? {
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
      const d = Fe(n), v = s.value, g = Fe(v), k = Fe(p);
      o.height = d.height, o.width = d.width;
      const $ = () => {
        let c = !1;
        if (e.position === "top")
          c = p ? a.value > d.top && k.bottom > 0 : a.value > d.top;
        else {
          const y = document.documentElement.clientHeight;
          c = p ? k.bottom > 0 && y - a.value - g.height > k.top : y - a.value < d.bottom;
        }
        return c;
      }, b = () => {
        if (p)
          if (e.position === "top") {
            const c = k.bottom - a.value - g.height;
            return c < 0 ? c : 0;
          } else {
            const c = document.documentElement.clientHeight, y = k.bottom - (c - a.value);
            return y < 0 ? y : 0;
          }
        return 0;
      };
      o.transform = b(), o.fixed = $();
    };
    return Q(
      () => o.fixed,
      (p) => {
        t("change", p);
      }
    ), ve(() => {
      i(), Ut(n.value).addEventListener("scroll", i, !0);
    }), Ke(() => {
      Ut(n.value).removeEventListener("scroll", i);
    }), { rootRef: n, rootStyle: l, stickyRef: s, stickyStyle: r };
  }
});
function ji(e, t, n, s, o, a) {
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
      _(e.$slots, "default")
    ], 4)
  ], 4);
}
const ao = /* @__PURE__ */ K(Yi, [["render", ji]]), ro = /* @__PURE__ */ Ue({
  name: "NutDivider",
  __name: "divider",
  props: {
    contentPosition: { default: "center" },
    dashed: { type: Boolean, default: !1 },
    hairline: { type: Boolean, default: !0 },
    direction: { default: "horizontal" }
  },
  setup(e) {
    const t = e, n = ot(), s = D(() => {
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
    return (o, a) => (u(), f("view", {
      class: L(s.value)
    }, [
      o.direction === "horizontal" ? _(o.$slots, "default", { key: 0 }) : N("", !0)
    ], 2));
  }
});
at(ro);
function Ui(e, t) {
  const n = [], s = (o) => {
    Array.isArray(o) && o.forEach((a) => {
      var l;
      if (Xo(a)) {
        if (t) {
          if (a.type && a.type.name === t) {
            n.push(a);
            return;
          }
        } else
          n.push(a);
        (l = a.component) != null && l.subTree && s(a.component.subTree.children), a.children && s(a.children);
      }
    });
  };
  return s(e), n;
}
function Ki(e, t, n) {
  const s = Ui(e.subTree.children, n);
  t.sort((o, a) => s.indexOf(o.vnode) - s.indexOf(a.vnode));
}
function Xi(e, t) {
  const n = Ko([]), s = We(), o = (r) => {
    r.proxy && (n.push($n(r)), Ki(s, n, t));
  }, a = (r) => {
    n.splice(n.indexOf($n(r)), 1);
  }, l = Object.assign;
  return (r) => (Le(
    e,
    l(
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
const { componentName: qi } = Y("grid"), io = Symbol("grid"), Zi = {
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
}, Gi = {
  props: Zi,
  setup(e, { slots: t }) {
    Xi(io, "NutGridItem")({ props: e });
    const n = D(() => {
      const o = qi;
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
}, { create: Ji } = Y("grid"), Qi = Ji(Gi);
function xi(e) {
  const t = Me(e, null);
  if (t) {
    const n = We(), { add: s, remove: o, internalChildren: a } = t;
    s(n), Ke(() => o(n));
    const l = D(() => a.indexOf(n));
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
const { create: eu, componentName: Nn } = Y("grid-item"), tu = eu({
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
    const n = xi(io);
    if (!n.parent)
      return {};
    const s = n.index, o = n.parent.props, a = D(() => ({
      [Nn]: !0
    })), l = D(() => {
      const d = {
        flexBasis: `${100 / +o.columnNum}%`
      };
      return o.square ? d.paddingTop = `${100 / +o.columnNum}%` : o.gutter && (d.paddingRight = Be(o.gutter), s.value >= +o.columnNum && (d.marginTop = Be(o.gutter))), d;
    }), r = D(() => {
      const d = `${Nn}__content`;
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
    }), i = ln();
    return {
      rootClass: a,
      rootStyle: l,
      contentClass: r,
      handleClick: (d) => {
        t("click", d), e.to && i ? i[e.replace ? "replace" : "push"](e.to) : e.url && (e.replace ? location.replace(e.url) : location.href = e.url);
      }
    };
  }
}), nu = { class: "nut-grid-item__text" };
function ou(e, t, n, s, o, a) {
  return u(), f("view", {
    class: L(e.rootClass),
    style: A(e.rootStyle),
    onClick: t[0] || (t[0] = (...l) => e.handleClick && e.handleClick(...l))
  }, [
    m("view", {
      class: L(e.contentClass)
    }, [
      _(e.$slots, "default"),
      m("view", nu, [
        e.text ? (u(), f(x, { key: 0 }, [
          ge(E(e.text), 1)
        ], 64)) : _(e.$slots, "text", { key: 1 })
      ])
    ], 2)
  ], 6);
}
const lu = /* @__PURE__ */ K(tu, [["render", ou]]), { create: su, componentName: lt } = Y("space"), au = su({
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
          return !(g && (g.type === qo || g.type === x && ((k = g.children) == null ? void 0 : k.length) === 0 || g.type === Zo && g.children.trim() === ""));
        }
      );
    }, { direction: a, wrap: l, fill: r, justify: i, align: p } = e;
    return () => {
      var g;
      const d = o((g = t.default) == null ? void 0 : g.call(t)), v = () => d.map((k, $) => be(
        "div",
        {
          class: `${lt}-item`,
          style: s($ === d.length - 1)
        },
        k
      ));
      return be(
        "div",
        {
          class: [
            lt,
            a && `${lt}-${a}`,
            p && `${lt}-align-${p}`,
            i && `${lt}-justify-${i}`,
            l && `${lt}-wrap`,
            r && `${lt}-fill`
          ]
        },
        v()
      );
    };
  }
}), { componentName: ru, create: iu } = Y("navbar"), uu = iu({
  components: { Left: en },
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
    const { border: n, fixed: s, safeAreaInsetTop: o, placeholder: a } = he(e), l = z("auto"), r = z(), i = D(() => {
      const b = ru;
      return {
        [b]: !0,
        [`${b}--border`]: n.value,
        [`${b}--fixed`]: s.value,
        [`${b}--safe-area-inset-top`]: o.value
      };
    }), p = D(() => s.value && a.value ? {
      height: l.value
    } : {}), d = () => {
      if (r.value) {
        const b = r.value.getBoundingClientRect();
        l.value = `${b.height}px`;
      }
    };
    return ve(() => {
      s.value && a.value && Se(() => {
        d();
      });
    }), {
      navbarRef: r,
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
}), cu = {
  key: 1,
  class: "nut-navbar__text"
}, du = { class: "nut-navbar__title" }, fu = {
  key: 0,
  class: "nut-navbar__text"
};
function pu(e, t, n, s, o, a) {
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
        onClick: t[0] || (t[0] = (...r) => e.handleLeft && e.handleLeft(...r))
      }, [
        e.leftShow ? _(e.$slots, "left-show", { key: 0 }, () => [
          oe(l, {
            height: "12px",
            color: "#979797"
          })
        ]) : N("", !0),
        e.leftText ? (u(), f("view", cu, E(e.leftText), 1)) : N("", !0),
        _(e.$slots, "left")
      ]),
      m("view", du, [
        e.title ? (u(), f("view", {
          key: 0,
          class: "title",
          onClick: t[1] || (t[1] = (...r) => e.handleCenter && e.handleCenter(...r))
        }, E(e.title), 1)) : N("", !0),
        e.titleIcon ? (u(), f("view", {
          key: 1,
          class: "icon",
          onClick: t[3] || (t[3] = (...r) => e.handleCenterIcon && e.handleCenterIcon(...r))
        }, [
          _(e.$slots, "title-icon", {
            onClick: t[2] || (t[2] = (...r) => e.handleCenterIcon && e.handleCenterIcon(...r))
          })
        ])) : N("", !0),
        _(e.$slots, "content")
      ]),
      m("view", {
        class: "nut-navbar__right",
        onClick: t[4] || (t[4] = (...r) => e.handleRight && e.handleRight(...r))
      }, [
        e.desc ? (u(), f("view", fu, E(e.desc), 1)) : N("", !0),
        _(e.$slots, "right")
      ])
    ], 6)
  ], 4);
}
const mu = /* @__PURE__ */ K(uu, [["render", pu]]), ke = (e = "") => (t, ...n) => {
  e = e.toLocaleLowerCase();
  const s = Kn.languages();
  let o = t;
  e && e.startsWith("nut") && (o = `${e.slice(3)}.${t}`);
  const a = Yt(s, o) || Yt(s, t);
  return At(a) ? a(...n) : a;
}, { create: hu } = Y("fixed-nav"), gu = "NutFixedNav", yu = hu({
  components: {
    NutOverlay: Tt,
    Left: en
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
    const n = ke(gu), s = D(() => ({
      ["nut-fixed-nav"]: !0,
      active: e.visible,
      [e.type]: !0
    })), o = z(-1);
    return { classes: s, updateValue: (r = !e.visible) => {
      t("update:visible", r);
    }, selected: (r, i) => {
      t("selected", {
        item: r,
        event: i
      }), o.value = r.id;
    }, translate: n, current: o };
  }
}), vu = { class: "nut-fixed-nav__list" }, $u = ["onClick"], bu = ["src"], wu = { class: "span" }, ku = {
  key: 0,
  class: "b"
}, Cu = { class: "text" };
function Su(e, t, n, s, o, a) {
  const l = W("nut-overlay"), r = W("Left");
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
    _(e.$slots, "list", {}, () => [
      m("view", vu, [
        (u(!0), f(x, null, ie(e.navList, (i, p) => (u(), f("view", {
          key: i.id || p,
          class: L(["nut-fixed-nav__list-item", { active: i.id == e.current }]),
          onClick: (d) => e.selected(i, d)
        }, [
          m("img", {
            src: i.icon
          }, null, 8, bu),
          m("view", wu, E(i.text), 1),
          i.num ? (u(), f("view", ku, E(i.num), 1)) : N("", !0)
        ], 10, $u))), 128))
      ])
    ]),
    m("div", {
      class: "nut-fixed-nav__btn",
      onClick: t[1] || (t[1] = (i) => e.updateValue())
    }, [
      _(e.$slots, "btn", {}, () => [
        oe(r, { color: "#fff" }),
        m("view", Cu, E(e.visible ? e.activeText || e.translate("activeText") : e.unActiveText || e.translate("unActiveText")), 1)
      ])
    ])
  ], 6);
}
const Tu = /* @__PURE__ */ K(yu, [["render", Su]]), uo = Symbol("nut-menu"), { componentName: Nu, create: Du } = Y("menu"), _u = Du({
  components: {
    RectUp: Qa,
    RectDown: Xa
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
    const t = z(), n = z(0), s = z(!1), { children: o, linkChildren: a } = xn(uo), l = D(() => o.some((k) => k.state.showWrapper)), r = D(() => ({
      [Nu]: !0,
      "scroll-fixed": s.value
    })), i = () => {
      if (t.value) {
        const k = Fe(t);
        e.direction === "down" ? n.value = k.bottom : n.value = window.innerHeight - k.top;
      }
    };
    a({ props: e, offset: n });
    const p = (k) => {
      o.forEach(($, b) => {
        b === k ? (i(), $.toggle()) : $.state.showPopup && $.toggle(!1, { immediate: !0 });
      });
    }, d = (k) => Math.max(0, "scrollTop" in k ? k.scrollTop : k.pageYOffset), v = () => {
      const { scrollFixed: k } = e, $ = d(window);
      s.value = $ > (typeof k == "boolean" ? 30 : Number(k));
    }, g = (k) => {
      let $ = "";
      const { titleClass: b } = e;
      return k && ($ += "active"), b && ($ += ` ${b}`), $;
    };
    return ve(() => {
      const { scrollFixed: k } = e;
      k && window.addEventListener("scroll", v);
    }), Ke(() => {
      const { scrollFixed: k } = e;
      k && window.removeEventListener("scroll", v);
    }), {
      toggleItem: p,
      children: o,
      opened: l,
      classes: r,
      barRef: t,
      getClasses: g
    };
  }
}), Iu = ["onClick"], Bu = { class: "nut-menu__title-text" }, Mu = { class: "nut-menu__title-icon" };
function Lu(e, t, n, s, o, a) {
  const l = W("RectUp"), r = W("RectDown");
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
          m("view", Bu, E(i.renderTitle()), 1),
          m("span", Mu, [
            _(e.$slots, "icon", {}, () => [
              e.direction === "up" ? (u(), ee(l, { key: 0 })) : (u(), ee(r, { key: 1 }))
            ])
          ])
        ], 2)
      ], 14, Iu))), 128))
    ], 2),
    _(e.$slots, "default")
  ], 2);
}
const Eu = /* @__PURE__ */ K(_u, [["render", Lu]]), { create: Pu } = Y("menu-item"), Au = Pu({
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
    Check: Xn
  },
  emits: ["update:modelValue", "change", "open", "close"],
  setup(e, { emit: t }) {
    const n = ce({
      showPopup: !1,
      showWrapper: !1
    }), { parent: s } = nn(uo), o = D(() => s.props.direction === "down" ? {
      top: s.offset.value + "px"
    } : {
      bottom: s.offset.value + "px"
    }), a = D(() => {
      const v = { height: s.offset.value + "px" };
      return s.props.direction === "down" ? de(G({}, v), { top: "0px" }) : de(G({}, v), { bottom: "0px" });
    });
    return {
      style: o,
      placeholderElementStyle: a,
      renderTitle: () => {
        var g;
        if (e.title)
          return e.title;
        const v = (g = e.options) == null ? void 0 : g.find((k) => k.value === e.modelValue);
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
}), zu = { class: "nut-menu-item__content nut-menu-item__overflow" }, Vu = ["onClick"];
function Ou(e, t, n, s, o, a) {
  const l = W("Check"), r = W("nut-popup");
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
        m("view", zu, [
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
              _(e.$slots, "icon", {}, () => [
                oe(l, wt(e.$attrs, {
                  color: e.parent.props.activeColor
                }), null, 16, ["color"])
              ])
            ], 2)) : N("", !0),
            m("view", {
              class: L([i.value === e.modelValue ? e.activeTitleClass : e.inactiveTitleClass]),
              style: A({ color: i.value === e.modelValue ? e.parent.props.activeColor : "" })
            }, E(i.text), 7)
          ], 14, Vu))), 128)),
          _(e.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["visible", "position", "duration", "overlay", "lock-scroll", "close-on-click-overlay", "onClosed"])
  ], 4)), [
    [Ne, e.state.showWrapper]
  ]);
}
const Hu = /* @__PURE__ */ K(Au, [["render", Ou]]), co = Symbol("nut-tabbar"), { create: Ru } = Y("tabbar"), Fu = Ru({
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
    const { bottom: n, placeholder: s } = he(e), o = z(), a = ce({
      val: e.modelValue,
      children: []
    }), l = z(null);
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
    return Le(co, i), Q(
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
      changeIndex: r,
      nutTabbar: l,
      height: o
    };
  }
});
function Wu(e, t, n, s, o, a) {
  return u(), f("div", {
    class: L({ "nut-tabbar__placeholder": e.bottom && e.placeholder }),
    style: A({ height: e.height + "px" })
  }, [
    m("view", {
      ref: "nutTabbar",
      class: L(["nut-tabbar", { "nut-tabbar-bottom": e.bottom, "nut-tabbar-safebottom": e.safeAreaInsetBottom }])
    }, [
      _(e.$slots, "default")
    ], 2)
  ], 6);
}
const Yu = /* @__PURE__ */ K(Fu, [["render", Wu]]), { create: ju } = Y("badge"), Uu = ju({
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
      const o = e.value, a = e.max;
      return typeof o == "number" && typeof a == "number" && a < o ? `${a}+` : o;
    });
    return {
      state: t,
      stl: n,
      content: s
    };
  }
}), Ku = { class: "nut-badge" }, Xu = ["textContent"];
function qu(e, t, n, s, o, a) {
  return u(), f("view", Ku, [
    Ce(m("view", {
      class: "nut-badge__icon",
      style: A(e.stl)
    }, [
      _(e.$slots, "icon")
    ], 4), [
      [Ne, !e.hidden && !e.dot && e.$slots.icon]
    ]),
    _(e.$slots, "default"),
    Ce(m("view", {
      class: L(["nut-badge__content nut-badge__content--sup", { "nut-badge__content--dot": e.dot, "nut-badge__content--bubble": !e.dot && e.bubble }]),
      style: A(e.stl),
      textContent: E(e.content)
    }, null, 14, Xu), [
      [Ne, !e.hidden && (e.content || e.dot)]
    ])
  ]);
}
const fo = /* @__PURE__ */ K(Uu, [["render", qu]]), { create: Zu } = Y("tabbar-item"), Gu = Zu({
  components: { NutBadge: fo },
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
    const n = (p) => t[p], s = Me(co), o = ce({
      unactiveColor: s.unactiveColor,
      // 未选中的颜色
      activeColor: s.activeColor,
      // 选中的颜色
      index: 0
    }), a = ln();
    ((p) => {
      var d;
      if (p.proxy) {
        s.children.push(p.proxy);
        const v = s.children.indexOf(p.proxy);
        o.index = (d = e.name) != null ? d : v;
      }
    })(We());
    const r = D(() => o.index === s.modelValue);
    function i() {
      var g, k, $;
      let p = (g = e.name) != null ? g : o.index, d = null;
      e.name && (d = s.children.findIndex((b) => b.name == p)), s.changeIndex(d != null ? d : p, o.index);
      let v = d != null ? d : p;
      if ((k = s.children[v]) != null && k.href) {
        window.location.href = s.children[v].href;
        return;
      }
      if (($ = s.children[v]) != null && $.to) {
        let b = s.children[v].to;
        b && a ? a.push(b) : location.replace(b);
      }
    }
    return {
      state: o,
      active: r,
      renderIcon: ft,
      isHaveSlot: n,
      change: i
    };
  }
}), Ju = { class: "nut-tabbar-item_icon-box" }, Qu = {
  key: 0,
  class: "nut-tabbar-item_icon-box_icon"
}, xu = { key: 1 }, ec = { key: 0 };
function tc(e, t, n, s, o, a) {
  const l = W("nut-badge");
  return u(), f("div", {
    class: L(["nut-tabbar-item", { "nut-tabbar-item__icon--unactive": !e.active }]),
    style: A({
      color: e.active ? e.state.activeColor : e.state.unactiveColor
    }),
    onClick: t[0] || (t[0] = (r) => e.change())
  }, [
    oe(l, Go(Jo(e.$attrs)), {
      default: ne(() => [
        m("view", Ju, [
          e.isHaveSlot("icon") ? (u(), f("div", Qu, [
            _(e.$slots, "icon", { active: e.active })
          ])) : N("", !0),
          e.icon && !e.isHaveSlot("icon") ? (u(), f("view", xu, [
            (u(), ee(Ae(e.renderIcon(e.icon)), { class: "nut-popover-item-img" }))
          ])) : N("", !0),
          m("view", {
            class: L([
              "nut-tabbar-item_icon-box_nav-word",
              { "nut-tabbar-item_icon-box_big-word": !e.icon && !e.isHaveSlot("icon") }
            ])
          }, [
            _(e.$slots, "default", {}, () => [
              e.tabTitle ? (u(), f("view", ec, E(e.tabTitle), 1)) : N("", !0)
            ])
          ], 2)
        ])
      ]),
      _: 3
    }, 16)
  ], 6);
}
const nc = /* @__PURE__ */ K(Gu, [["render", tc]]), { create: oc } = Y("elevator"), lc = oc({
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
    }), a = D(() => s.value.clientHeight), l = (c, y) => c.getAttribute("data-" + y), r = (c) => {
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
    }, v = (c) => {
      let y = c.touches[0];
      o.touchState.y2 = y.pageY;
      let h = (o.touchState.y2 - o.touchState.y1) / e.spaceHeight | 0;
      o.codeIndex = o.anchorIndex + h, p(o.codeIndex);
    }, g = () => {
      o.scrollStart = !1;
    }, k = (c, y) => {
      t("clickItem", c, y), o.currentData = y, o.currentKey = c;
    }, $ = (c) => {
      t("clickIndex", c);
    }, b = (c) => {
      let h = c.target.scrollTop;
      const w = o.listHeight;
      o.scrollY = h;
      for (let S = 0; S < w.length - 1; S++) {
        let I = w[S], B = w[S + 1];
        if (o.scrollY >= I && o.scrollY < B) {
          o.currentIndex = S, o.diff = B - o.scrollY;
          return;
        }
      }
      o.currentIndex = w.length - 2;
    };
    return ve(() => {
      s.value && s.value.addEventListener("scroll", b);
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
        o.scrollY + a.value === y[y.length - 1] && h !== 0 && (h = 0), o.fixedTop !== h && (o.fixedTop = h);
      }
    ), Q(
      () => o.currentIndex,
      (c) => {
        t("change", c);
      }
    ), de(G({}, he(o)), {
      clientHeight: a,
      setListGroup: r,
      listview: s,
      touchStart: d,
      touchMove: v,
      touchEnd: g,
      handleClickItem: k,
      handleClickIndex: $
    });
  }
}), sc = { class: "nut-elevator" }, ac = { class: "nut-elevator__list__item__code" }, rc = ["onClick"], ic = ["innerHTML"], uc = { class: "nut-elevator__list__fixed" }, cc = { class: "nut-elevator__list__fixed-title" }, dc = { class: "nut-elevator__bars__inner" }, fc = ["data-index", "onClick"];
function pc(e, t, n, s, o, a) {
  var l, r;
  return u(), f("view", sc, [
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
        m("view", ac, E(i[e.acceptKey]), 1),
        (u(!0), f(x, null, ie(i.list, (p) => (u(), f("view", {
          key: p.id,
          class: L(["nut-elevator__list__item__name", {
            "nut-elevator__list__item__name--highcolor": e.currentData.id === p.id && e.currentKey === i[e.acceptKey]
          }]),
          onClick: (d) => e.handleClickItem(i[e.acceptKey], p)
        }, [
          e.$slots.default ? _(e.$slots, "default", {
            key: 1,
            item: p
          }) : (u(), f("span", {
            key: 0,
            innerHTML: p.name
          }, null, 8, ic))
        ], 10, rc))), 128))
      ]))), 128))
    ], 4),
    Ce(m("view", uc, [
      m("view", cc, E((r = (l = e.indexList) == null ? void 0 : l[e.currentIndex]) == null ? void 0 : r[e.acceptKey]), 1)
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
      m("view", dc, [
        (u(!0), f(x, null, ie(e.indexList, (i, p) => (u(), f("view", {
          key: i[e.acceptKey],
          class: L(["nut-elevator__bars__inner__item", { active: i[e.acceptKey] === e.indexList[e.currentIndex][e.acceptKey] }]),
          "data-index": p,
          onClick: (d) => e.handleClickIndex(i[e.acceptKey])
        }, E(i[e.acceptKey]), 11, fc))), 128))
      ])
    ], 32)
  ]);
}
const po = /* @__PURE__ */ K(lc, [["render", pc]]), { create: mc } = Y("pagination"), hc = "NutPagination", gc = mc({
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
    const n = ke(hc), { modelValue: s, mode: o, showPageSize: a, forceEllipses: l } = he(e), r = D(() => {
      const { pageCount: v, totalItems: g, itemsPerPage: k } = he(e), $ = +v.value || Math.ceil(+g.value / +k.value);
      return Math.max(1, $);
    }), i = (v, g) => {
      v > r.value || v < 1 || (v != s.value && t("update:modelValue", v), g && t("change", v));
    }, p = (v, g, k = !1) => ({ number: v, text: g, active: k }), d = D(() => {
      if (o.value == "simple")
        return;
      let v = [];
      const g = r.value, k = +a.value;
      let $ = 1, b = g;
      const c = g > k;
      c && ($ = Math.max(s.value - Math.floor(k / 2), 1), b = $ + +k - 1, b > g && (b = g, $ = b - +k + 1));
      for (var y = $; y <= b; y++) {
        const h = p(y, y, s.value == y);
        v.push(h);
      }
      if (c && k > 0 && l.value) {
        if ($ > 1) {
          const h = p($ - 1, "...");
          v.unshift(h);
        }
        if (b < g) {
          const h = p(b + 1, "...");
          v.push(h);
        }
      }
      return v;
    });
    return bt(() => {
      i(s.value, !1);
    }), {
      modelValue: s,
      select: i,
      countRef: r,
      mode: o,
      pages: d,
      forceEllipses: l,
      translate: n
    };
  }
}), yc = { class: "nut-pagination" }, vc = {
  key: 0,
  class: "nut-pagination-contain"
}, $c = ["onClick"], bc = {
  key: 1,
  class: "nut-pagination-contain"
}, wc = { class: "nut-pagination-simple" };
function kc(e, t, n, s, o, a) {
  return u(), f("view", yc, [
    m("view", {
      class: L(["nut-pagination-prev", e.mode == "multi" ? "" : "simple-border", e.modelValue == 1 ? "disabled" : ""]),
      onClick: t[0] || (t[0] = (l) => e.select(e.modelValue - 1, !0))
    }, [
      _(e.$slots, "prev-text", {}, () => [
        ge(E(e.prevText || e.translate("prev")), 1)
      ])
    ], 2),
    e.mode == "multi" ? (u(), f("view", vc, [
      (u(!0), f(x, null, ie(e.pages, (l, r) => (u(), f("view", {
        key: r + "pagination",
        class: L(["nut-pagination-item", l.active ? "active" : ""]),
        onClick: (i) => e.select(l.number, !0)
      }, [
        _(e.$slots, "page", { item: l }, () => [
          ge(E(l.text), 1)
        ])
      ], 10, $c))), 128))
    ])) : N("", !0),
    e.mode == "simple" ? (u(), f("view", bc, [
      m("view", wc, E(e.modelValue) + "/" + E(e.countRef), 1)
    ])) : N("", !0),
    m("view", {
      class: L(["nut-pagination-next", e.modelValue >= e.countRef ? "disabled" : ""]),
      onClick: t[1] || (t[1] = (l) => e.select(e.modelValue + 1, !0))
    }, [
      _(e.$slots, "next-text", {}, () => [
        ge(E(e.nextText || e.translate("next")), 1)
      ])
    ], 2)
  ]);
}
const Cc = /* @__PURE__ */ K(gc, [["render", kc]]), Bt = window, Sc = typeof window != "undefined";
function Tc() {
  return typeof Bt != "undefined" ? Bt.requestAnimationFrame || Bt.webkitRequestAnimationFrame || function(e) {
    Bt.setTimeout(e, 1e3 / 60);
  } : function(e) {
    setTimeout(e, 1e3 / 60);
  };
}
function Nc(e) {
  Sc ? cancelAnimationFrame(e) : clearTimeout(e);
}
const Ve = Tc(), Dn = 10;
function Dc(e, t) {
  return e > t && e > Dn ? "horizontal" : t > e && t > Dn ? "vertical" : "";
}
function xe() {
  const e = z(0), t = z(0), n = z(0), s = z(0), o = z(0), a = z(0), l = z(0), r = z(0), i = z(""), p = () => i.value === "vertical", d = () => i.value === "horizontal", v = () => {
    o.value = 0, a.value = 0, l.value = 0, r.value = 0, i.value = "";
  };
  return {
    move: ($) => {
      const b = $.touches[0];
      o.value = b.clientX - e.value, a.value = b.clientY - t.value, n.value = b.clientX, s.value = b.clientY, l.value = Math.abs(o.value), r.value = Math.abs(a.value), i.value || (i.value = Dc(l.value, r.value));
    },
    start: ($) => {
      v(), e.value = $.touches[0].clientX, t.value = $.touches[0].clientY;
    },
    reset: v,
    startX: e,
    startY: t,
    moveX: n,
    moveY: s,
    deltaX: o,
    deltaY: a,
    offsetX: l,
    offsetY: r,
    direction: i,
    isVertical: p,
    isHorizontal: d
  };
}
const _c = (e, t, n, s) => {
  const o = z(), a = z({ width: 0, height: 0 }), l = () => Ge(void 0, null, function* () {
    var g, k;
    n && n.getEnv() !== n.ENV_TYPE.WEB ? s(o).then(
      ($) => {
        a.value.width = $.width || 0, a.value.height = $.height || 0;
      },
      () => {
      }
    ) : (a.value.width = ((g = o.value) == null ? void 0 : g.clientWidth) || 0, a.value.height = ((k = o.value) == null ? void 0 : k.clientHeight) || 0);
  });
  ve(() => {
    setTimeout(() => {
      l();
    }, 100);
  });
  const r = ce({
    offset: 0,
    moving: !1
  }), i = xe();
  let p = "";
  const d = (g, k) => {
    var b;
    let $ = g;
    switch (e.direction == "horizontal" ? (p = g > 0 ? "right" : "left", $ = Math.abs($) / a.value.width * 100) : (p = k > 0 ? "bottom" : "top", $ = k, $ = Math.abs($) / ((b = a.value) == null ? void 0 : b.height) * 100), $ > 85 && ($ = 85), p) {
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
    onTouchStart(g) {
      e.swipeable && i.start(g);
    },
    onTouchMove(g) {
      e.swipeable && (i.move(g), r.moving = !0, d(i.deltaX.value, i.deltaY.value), e.direction == "horizontal" && i.isHorizontal() && (g.preventDefault(), g.stopPropagation()), e.direction == "vertical" && i.isVertical() && (g.preventDefault(), g.stopPropagation()));
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
class Ic {
  constructor() {
    V(this, "title", "");
    V(this, "titleSlot");
    V(this, "paneKey", "");
    V(this, "disabled", !1);
  }
}
const { create: Bc } = Y("tabs"), Mc = Bc({
  components: { NutSticky: ao, JoySmile: Os },
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
    const a = z([]), l = (T) => {
      T.forEach((P, O) => {
        var Z, le, j, U, F, te, q, se, ue;
        let X = P.type;
        if (X = X.name || X, X == "NutTabPane") {
          let pe = new Ic();
          if ((Z = P.props) != null && Z.title || (le = P.props) != null && le["pane-key"] || (j = P.props) != null && j.paneKey) {
            let we = Pt((U = P.props) == null ? void 0 : U["pane-key"]), _e = we == "number" || we == "string" ? String((F = P.props) == null ? void 0 : F["pane-key"]) : null, H = Pt((te = P.props) == null ? void 0 : te.paneKey), J = H == "number" || H == "string" ? String((q = P.props) == null ? void 0 : q.paneKey) : null;
            pe.title = (se = P.props) == null ? void 0 : se.title, pe.paneKey = _e || J || String(O), pe.disabled = (ue = P.props) == null ? void 0 : ue.disabled;
          }
          a.value.push(pe);
        } else {
          if (P.children == " ")
            return;
          l(P.children);
        }
      });
    }, r = z(e.modelValue || 0), i = (T) => {
      let P = a.value.findIndex((O) => O.paneKey == T);
      a.value.length == 0 || P == -1 || (r.value = P);
    }, p = D(() => e.titleScroll && e.direction === "vertical"), d = z(), v = z([]), g = (T) => {
      const P = d.value, O = v.value;
      if (!P || !O || !O[r.value])
        return;
      const X = O[r.value];
      let Z = 0;
      e.direction === "vertical" ? Z = X.offsetTop - P.offsetTop + 10 - (P.offsetHeight - X.offsetHeight) / 2 : Z = X.offsetLeft - (P.offsetWidth - X.offsetWidth) / 2, k(P, Z, T ? 0 : 0.3, e.direction);
    }, k = (T, P, O, X) => {
      let Z = 0;
      const le = X === "horizontal" ? T.scrollLeft : T.scrollTop, j = O === 0 ? 1 : Math.round(O * 1e3 / 16);
      function U() {
        X === "horizontal" ? T.scrollLeft += (P - le) / j : T.scrollTop += (P - le) / j, ++Z < j && Ve(U);
      }
      U();
    }, $ = (T = ((P) => (P = n.default) == null ? void 0 : P.call(n))()) => {
      a.value = [], T = T == null ? void 0 : T.filter((O) => typeof O.children != "string"), T && T.length && l(T), i(e.modelValue), Se(() => {
        g();
      });
    }, b = (T) => {
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
    const c = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    Q(
      () => e.modelValue,
      (T) => {
        if (i(T), g(), o) {
          let P = Fe(s.value).top + c(), O = Math.ceil(P - e.top);
          window.scrollTo({
            top: O,
            behavior: "smooth"
          });
        }
      }
    ), ve($), Ct($);
    const y = {
      isBegin: () => r.value == 0,
      isEnd: () => r.value == a.value.length - 1,
      next: () => {
        r.value += 1;
        const T = a.value[r.value].disabled;
        if (y.isEnd() && T) {
          y.prev();
          return;
        }
        if (T && r.value < a.value.length - 1) {
          y.next();
          return;
        }
        y.updateValue(a.value[r.value]);
      },
      prev: () => {
        r.value -= 1;
        const T = a.value[r.value].disabled;
        if (y.isBegin() && T) {
          y.next();
          return;
        }
        if (T && r.value > 0) {
          y.prev();
          return;
        }
        y.updateValue(a.value[r.value]);
      },
      updateValue: (T) => {
        t("update:modelValue", T.paneKey), t("change", T);
      },
      tabChange: (T, P) => {
        t("click", T), !(T.disabled || r.value == P) && (r.value = P, y.updateValue(T));
      },
      setTabItemRef: (T, P) => {
        v.value[P] = T;
      }
    }, { tabsContentRef: h, touchState: w, touchMethods: S } = _c(e, y), I = D(() => {
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
      const T = Be(e.titleGutter);
      return e.direction === "vertical" ? { marginTop: T, marginBottom: T } : { marginLeft: T, marginRight: T };
    });
    return G(G({
      navRef: d,
      tabsContentRef: h,
      titles: a,
      contentStyle: I,
      tabsNavStyle: B,
      titleStyle: C,
      tabsActiveStyle: M,
      container: s,
      getScrollY: p,
      onStickyScroll: b
    }, y), S);
  }
}), Lc = ["onClick"], Ec = ["onClick"];
function Pc(e, t, n, s, o, a) {
  const l = W("JoySmile"), r = W("nut-sticky");
  return u(), f("view", {
    ref: "container",
    class: L(["nut-tabs", [e.direction]])
  }, [
    e.sticky ? (u(), ee(r, {
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
          e.$slots.titles ? _(e.$slots, "titles", { key: 0 }) : (u(!0), f(x, { key: 1 }, ie(e.titles, (i, p) => (u(), f("view", {
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
          ], 14, Lc))), 128))
        ], 6)
      ]),
      _: 3
    }, 8, ["top", "container", "onScroll"])) : (u(), f("view", {
      key: 1,
      ref: "navRef",
      class: L(["nut-tabs__titles", { "nut-tabs__titles-left": e.align === "left", [e.type]: e.type, scrollable: e.titleScroll, [e.size]: e.size }]),
      style: A(e.tabsNavStyle)
    }, [
      e.$slots.titles ? _(e.$slots, "titles", { key: 0 }) : (u(!0), f(x, { key: 1 }, ie(e.titles, (i, p) => (u(), f("view", {
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
      ], 14, Ec))), 128))
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
      _(e.$slots, "default")
    ], 36)
  ], 2);
}
const mo = /* @__PURE__ */ K(Mc, [["render", Pc]]), { create: Ac } = Y("tab-pane"), zc = Ac({
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
    return de(G({}, t), {
      paneStyle: n
    });
  }
});
function Vc(e, t, n, s, o, a) {
  return u(), f("view", {
    class: L(["nut-tab-pane", { inactive: e.paneKey != e.activeKey && e.autoHeight }]),
    style: A(e.paneStyle)
  }, [
    _(e.$slots, "default")
  ], 6);
}
const ho = /* @__PURE__ */ K(zc, [["render", Vc]]), { create: Oc } = Y("indicator"), Hc = Oc({
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
}), Rc = {
  key: 0,
  class: "nut-indicator--number"
}, Fc = {
  key: 1,
  class: "nut-indicator--dot"
};
function Wc(e, t, n, s, o, a) {
  return u(), f("view", {
    class: L(e.classes)
  }, [
    (u(!0), f(x, null, ie(e.size, (l) => (u(), f(x, { key: l }, [
      l === e.current ? (u(), f("view", Rc, E(e.fillZero && e.padZero(l) || l), 1)) : (u(), f("view", Fc))
    ], 64))), 128))
  ], 2);
}
const Yc = /* @__PURE__ */ K(Hc, [["render", Wc]]), { create: jc } = Y("side-navbar"), Uc = jc({
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
    }), s = (a, l = 1) => {
      var r;
      for (let i = 0; i < a.length; i++) {
        let p = a[i];
        (r = p == null ? void 0 : p.children) != null && r[0] && (p.children[0].style.paddingLeft = +e.offset * l + "px", p.className.includes("nut-side-navbar-item") || s(Array.from(p.children[1].children), ++n.count));
      }
      n.count--;
    }, o = () => {
      let a = t.value.childNodes;
      a != null && a.length && (a = Array.from(a).filter((l) => l.nodeType !== 3).map((l) => l), s(a));
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
    }), de(G({}, he(n)), {
      list: t
    });
  }
}), Kc = { class: "nut-side-navbar" }, Xc = { class: "nut-side-navbar__content" }, qc = {
  ref: "list",
  class: "nut-side-navbar__content__list"
};
function Zc(e, t, n, s, o, a) {
  return u(), f("view", Kc, [
    m("view", Xc, [
      m("view", qc, [
        _(e.$slots, "default")
      ], 512)
    ])
  ]);
}
const Gc = /* @__PURE__ */ K(Uc, [["render", Zc]]), { create: Jc } = Y("side-navbar-item"), Qc = Jc({
  props: {
    title: {
      type: String,
      default: ""
    }
  }
}), xc = { class: "nut-side-navbar-item" }, ed = { class: "nut-side-navbar-item__title" };
function td(e, t, n, s, o, a) {
  return u(), f("view", xc, [
    m("span", ed, E(e.title), 1)
  ]);
}
const nd = /* @__PURE__ */ K(Qc, [["render", td]]), { create: od } = Y("sub-side-navbar"), ld = od({
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
  components: { ArrowDown2: dl, ArrowUp2: gl },
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
    }), de(G({}, he(n)), {
      style: s,
      handleClick: o
    });
  }
}), sd = { class: "nut-sub-side-navbar" }, ad = { class: "nut-sub-side-navbar__title__text" }, rd = { class: "nut-sub-side-navbar__title__icon" };
function id(e, t, n, s, o, a) {
  const l = W("ArrowDown2"), r = W("ArrowUp2");
  return u(), f("view", sd, [
    m("view", {
      class: "nut-sub-side-navbar__title",
      onClick: t[0] || (t[0] = De((...i) => e.handleClick && e.handleClick(...i), ["stop"]))
    }, [
      m("span", ad, E(e.title), 1),
      m("span", rd, [
        e.direction ? (u(), ee(r, { key: 1 })) : (u(), ee(l, { key: 0 }))
      ])
    ]),
    Ce(m("view", {
      class: L(["nut-sub-side-navbar__list", e.direction ? "nutFadeOut" : "nutFadeIn"]),
      style: A(e.style)
    }, [
      _(e.$slots, "default")
    ], 6), [
      [Ne, !e.direction]
    ])
  ]);
}
const ud = /* @__PURE__ */ K(ld, [["render", id]]), sn = Symbol("nut-form"), Ze = (e) => {
  const { parent: t } = nn(sn);
  return D(() => {
    var n;
    return e.value || ((n = t == null ? void 0 : t.props) == null ? void 0 : n.disabled) || !1;
  });
}, { componentName: cd, create: dd } = Y("range"), fd = dd({
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
    const n = Ze(Xe(e, "disabled")), s = z(0);
    let o, a;
    const l = z(), r = z(), i = xe(), p = D(() => {
      const { marks: j, max: U, min: F } = e;
      return Object.keys(j).map(parseFloat).sort((se, ue) => se - ue).filter((se) => se >= +F && se <= +U);
    }), d = D(() => Number(e.max) - Number(e.min)), v = D(() => {
      const j = cd;
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
    })), $ = D(() => ({
      borderColor: e.buttonColor
    })), b = (j) => !!e.range && Array.isArray(j), c = () => {
      const { modelValue: j, min: U } = e;
      return b(j) ? `${(j[1] - j[0]) * 100 / d.value}%` : `${(j - Number(U)) * 100 / d.value}%`;
    }, y = () => {
      const { modelValue: j, min: U } = e;
      return b(j) ? `${(j[0] - Number(U)) * 100 / d.value}%` : "0%";
    }, h = D(() => e.vertical ? {
      height: c(),
      top: y(),
      background: e.activeColor,
      transition: r.value ? "none" : void 0
    } : {
      width: c(),
      left: y(),
      background: e.activeColor,
      transition: r.value ? "none" : void 0
    }), w = (j) => {
      const U = "nut-range-mark", { modelValue: F, max: te, min: q } = e;
      let se = Number(q), ue = Number(te);
      if (e.range) {
        const [we, _e] = F;
        se = we, ue = _e;
      } else
        ue = F;
      let pe = j <= +ue && j >= se;
      return {
        [`${U}-text`]: !0,
        [`${U}-text-active`]: pe
      };
    }, S = (j) => {
      const { min: U, vertical: F } = e;
      let te = {
        left: `${(j - Number(U)) / d.value * 100}%`
      };
      return F && (te = {
        top: `${(j - Number(U)) / d.value * 100}%`
      }), te;
    }, I = (j) => {
      const { modelValue: U, max: F, min: te } = e;
      let q = Number(te), se = Number(F);
      if (e.range) {
        const [we, _e] = U;
        q = we, se = _e;
      }
      return {
        background: j <= se && j >= q ? e.activeColor : e.inactiveColor
      };
    }, B = (j) => {
      const { min: U, max: F, step: te } = e;
      return j = Math.max(+U, Math.min(j, +F)), Math.round(j / +te) * +te;
    }, M = (j, U) => JSON.stringify(j) === JSON.stringify(U), C = (j) => j[0] > j[1] ? j.slice(0).reverse() : j, T = (j, U) => {
      b(j) ? j = C(j).map(B) : j = B(j), M(j, e.modelValue) || t("update:modelValue", j), U && !M(j, o) && t("change", j);
    }, P = (j) => {
      if (n.value)
        return;
      const { min: U, modelValue: F } = e, te = Fe(l);
      let q = j.clientX - te.left, se = te.width;
      e.vertical && (q = j.clientY - te.top, se = te.height);
      const ue = Number(U) + q / se * d.value;
      if (b(F)) {
        const [pe, we] = F, _e = (pe + we) / 2;
        ue <= _e ? T([ue, we], !0) : T([pe, ue], !0);
      } else
        T(ue, !0);
    }, O = (j) => {
      n.value || (i.start(j), a = e.modelValue, b(a) ? o = a.map(B) : o = B(a), r.value = "start");
    }, X = (j) => {
      if (n.value)
        return;
      r.value === "start" && t("dragStart"), i.move(j), r.value = "draging";
      const U = Fe(l);
      let F = i.deltaX.value, te = U.width, q = F / te * d.value;
      e.vertical && (F = i.deltaY.value, te = U.height, q = F / te * d.value), b(o) ? a[s.value] = o[s.value] + q : a = o + q, T(a);
    }, Z = () => {
      n.value || (r.value === "draging" && (T(a, !0), t("dragEnd")), r.value = "");
    }, le = (j) => Wn(e.modelValue) && typeof j == "number" ? e.modelValue[j] : Number(e.modelValue);
    return de(G({
      root: l,
      classes: v,
      wrapperStyle: k,
      buttonStyle: $,
      onClick: P,
      onTouchStart: O,
      onTouchMove: X,
      onTouchEnd: Z
    }, he(e)), {
      barStyle: h,
      curValue: le,
      buttonIndex: s,
      containerClasses: g,
      markClassName: w,
      marksStyle: S,
      marksList: p,
      tickStyle: I,
      disabled: n
    });
  }
}), pd = {
  key: 0,
  class: "nut-range-min"
}, md = {
  key: 0,
  class: "nut-range-mark"
}, hd = ["tabindex", "aria-valuemin", "aria-valuenow", "aria-valuemax", "onTouchstart"], gd = {
  key: 0,
  class: "number"
}, yd = ["tabindex", "aria-valuemin", "aria-valuenow", "aria-valuemax"], vd = {
  key: 0,
  class: "number"
}, $d = {
  key: 1,
  class: "nut-range-max"
};
function bd(e, t, n, s, o, a) {
  return u(), f("view", {
    class: L(e.containerClasses)
  }, [
    e.hiddenRange ? N("", !0) : (u(), f("view", pd, E(+e.min), 1)),
    m("view", {
      ref: "root",
      style: A(e.wrapperStyle),
      class: L(e.classes),
      onClick: t[9] || (t[9] = De((...l) => e.onClick && e.onClick(...l), ["stop"]))
    }, [
      e.marksList.length > 0 ? (u(), f("view", md, [
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
            (r) => {
              typeof l == "number" && (e.buttonIndex = l), e.onTouchStart(r);
            },
            ["stop", "prevent"]
          ),
          onTouchmove: t[0] || (t[0] = De((...r) => e.onTouchMove && e.onTouchMove(...r), ["stop", "prevent"])),
          onTouchend: t[1] || (t[1] = De((...r) => e.onTouchEnd && e.onTouchEnd(...r), ["stop", "prevent"])),
          onTouchcancel: t[2] || (t[2] = De((...r) => e.onTouchEnd && e.onTouchEnd(...r), ["stop", "prevent"])),
          onClick: t[3] || (t[3] = (r) => r.stopPropagation())
        }, [
          e.$slots.button ? _(e.$slots, "button", { key: 0 }) : (u(), f("view", {
            key: 1,
            class: "nut-range-button",
            style: A(e.buttonStyle)
          }, [
            e.hiddenTag ? N("", !0) : (u(), f("view", gd, E(e.curValue(l)), 1))
          ], 4))
        ], 42, hd)), 64)) : (u(), f("view", {
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
          e.$slots.button ? _(e.$slots, "button", { key: 0 }) : (u(), f("view", {
            key: 1,
            class: "nut-range-button",
            style: A(e.buttonStyle)
          }, [
            e.hiddenTag ? N("", !0) : (u(), f("view", vd, E(e.curValue()), 1))
          ], 4))
        ], 40, yd))
      ], 4)
    ], 6),
    e.hiddenRange ? N("", !0) : (u(), f("view", $d, E(+e.max), 1))
  ], 2);
}
const go = /* @__PURE__ */ K(fd, [["render", bd]]), { create: wd } = Y("searchbar"), kd = "NutSearchbar", Cd = wd({
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
      default: () => xt
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
    const n = Ze(Xe(e, "disabled")), s = ke(kd), o = ce({
      active: !1
    }), a = D(() => ({
      background: e.background
    })), l = D(() => ({
      background: e.inputBackground
    })), r = (h) => {
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
    }, v = (h) => {
      t("update:modelValue", "", h), t("change", "", h), t("clear", "");
    }, g = () => {
      t("search", e.modelValue);
    }, k = (h) => {
      t("clickInput", h);
    }, $ = (h) => {
      t("clickLeftIcon", e.modelValue, h);
    }, b = (h) => {
      t("clickRightIcon", e.modelValue, h);
    }, c = D(() => ({
      textAlign: e.inputAlign
    })), y = z(null);
    return ve(() => {
      e.autofocus && y.value.focus();
    }), de(G({
      renderIcon: ft,
      inputsearch: y
    }, he(o)), {
      valueChange: r,
      valueFocus: p,
      valueBlur: d,
      handleClear: v,
      handleSubmit: g,
      searchbarStyle: a,
      inputSearchbarStyle: l,
      focusCss: i,
      translate: s,
      clickInput: k,
      leftIconClick: $,
      rightIconClick: b,
      styleSearchbar: c,
      disabled: n
    });
  }
}), Sd = {
  key: 0,
  class: "nut-searchbar__search-label"
}, Td = {
  key: 1,
  class: "nut-searchbar__search-icon nut-searchbar__left-search-icon"
}, Nd = ["type", "maxlength", "placeholder", "value", "disabled", "readonly"], Dd = {
  key: 1,
  class: "nut-searchbar__search-icon nut-searchbar__iptright-search-icon"
}, _d = {
  key: 2,
  class: "nut-searchbar__search-icon nut-searchbar__right-search-icon"
};
function Id(e, t, n, s, o, a) {
  return u(), f("view", {
    class: L(["nut-searchbar", { "safe-area-inset-bottom": e.safeAreaInsetBottom }]),
    style: A(e.searchbarStyle)
  }, [
    e.label ? (u(), f("span", Sd, E(e.label), 1)) : N("", !0),
    e.$slots.leftout ? (u(), f("view", Td, [
      _(e.$slots, "leftout")
    ])) : N("", !0),
    m("view", {
      class: L(["nut-searchbar__search-input", e.shape]),
      style: A(G(G({}, e.inputSearchbarStyle), e.focusCss))
    }, [
      e.$slots.leftin ? (u(), f("view", {
        key: 0,
        class: "nut-searchbar__search-icon nut-searchbar__iptleft-search-icon",
        onClick: t[0] || (t[0] = (...l) => e.leftIconClick && e.leftIconClick(...l))
      }, [
        _(e.$slots, "leftin")
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
          }, null, 46, Nd)
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
          e.$slots["clear-icon"] ? _(e.$slots, "clear-icon", { key: 0 }) : (u(), ee(Ae(e.renderIcon(e.clearIcon)), { key: 1 }))
        ], 512)), [
          [Ne, String(e.modelValue).length > 0]
        ]) : N("", !0),
        e.$slots.rightin ? (u(), f("view", Dd, [
          _(e.$slots, "rightin")
        ])) : N("", !0)
      ], 2)
    ], 6),
    e.$slots.rightout ? (u(), f("view", _d, [
      _(e.$slots, "rightout")
    ])) : N("", !0)
  ], 6);
}
const Bd = /* @__PURE__ */ K(Cd, [["render", Id]]), Lt = (e, t, n) => e.map((s) => {
  const { value: o = "value", text: a = "text", children: l = "children" } = n, g = s, { [o]: r, [a]: i, [l]: p } = g, d = Ft(g, [_t(o), _t(a), _t(l)]), v = de(G({
    loading: !1
  }, d), {
    level: t ? (t && t.level || 0) + 1 : 0,
    value: r,
    text: i,
    children: p,
    _parent: t
  });
  return v.children && v.children.length && (v.children = Lt(v.children, v, n)), v;
}), yo = (e, t) => {
  let n = 0, s;
  for (; (s = e[n++]) && t(s) !== !0; )
    s.children && s.children.length && yo(s.children, t);
}, Md = {
  topId: null,
  idKey: "id",
  pidKey: "pid",
  sortKey: ""
}, Ld = (e, t) => {
  const n = G(G({}, Md), t || {}), { topId: s, idKey: o, pidKey: a, sortKey: l } = n;
  let r = [], i = {};
  return e.forEach((p) => {
    p = G({}, p);
    const { [o]: d, [a]: v } = p, g = i[v] = i[v] || [];
    !r.length && v === s && (r = g), g.push(p), p.children = i[d] || (i[d] = []);
  }), l && Object.keys(i).forEach((p) => {
    i[p].length > 1 && i[p].sort((d, v) => d[l] - v[l]);
  }), i = null, r;
};
class _n {
  constructor(t, n) {
    V(this, "nodes");
    V(this, "config");
    this.config = G({
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
    return yo(this.nodes, (s) => {
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
      const o = s.find((a) => a.value === t[a.level]);
      if (!o)
        break;
      n.push(o), s = o.children;
    }
    return n;
  }
  isLeaf(t, n) {
    const { leaf: s, children: o } = t, a = Array.isArray(o) && !!o.length;
    return s || !a && !n;
  }
  hasChildren(t, n) {
    if (this.isLeaf(t, n))
      return !1;
    const { children: o } = t;
    return Array.isArray(o) && !!o.length;
  }
}
const { create: Ed } = Y("cascader-item"), Pd = Ed({
  components: {
    Loading: st,
    Checklist: Wl,
    NutTabs: mo,
    NutTabPane: ho
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
    })), o = z(0), a = z(!1), l = z(e.modelValue), r = z(new _n([], {})), i = z([]), p = D(() => s.value.lazy && !!s.value.lazyLoad), d = /* @__PURE__ */ new Map();
    let v;
    const g = () => Ge(this, null, function* () {
      d.clear(), i.value = [], o.value = 0, a.value = !1, v = null;
      let { options: h } = e;
      s.value.convertConfig && (h = Ld(h, s.value.convertConfig)), r.value = new _n(h, {
        value: s.value.valueKey,
        text: s.value.textKey,
        children: s.value.childrenKey
      }), p.value && !r.value.nodes.length && (yield $({
        root: !0,
        loading: !0,
        text: "",
        value: ""
      })), i.value = [{ nodes: r.value.nodes, selectedNode: null }], k();
    }), k = () => Ge(this, null, function* () {
      const h = l.value;
      if (h === void 0 || !r.value.nodes.length)
        return;
      if (h.length === 0) {
        o.value = 0, i.value = [{ nodes: r.value.nodes, selectedNode: null }];
        return;
      }
      let w = h;
      if (p.value && Array.isArray(h) && h.length) {
        w = [];
        let S = r.value.nodes.find((I) => I.value === h[0]);
        if (S) {
          w = [S.value], a.value = !0;
          const I = yield h.slice(1).reduce((B, M) => Ge(this, null, function* () {
            var P;
            const C = yield B;
            yield $(C);
            const T = (P = C == null ? void 0 : C.children) == null ? void 0 : P.find((O) => O.value === M);
            return T && w.push(M), Promise.resolve(T);
          }), Promise.resolve(S));
          yield $(I), a.value = !1;
        }
      }
      w.length && h === e.modelValue && r.value.getPathNodesByValue(w).map((I, B) => {
        o.value = B, c.handleNode(I, !0);
      });
    }), $ = (h) => Ge(this, null, function* () {
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
      let S = d.get(h);
      S || (S = new Promise((B) => {
        var M, C;
        (C = (M = s.value).lazyLoad) == null || C.call(M, h, B);
      }), d.set(h, S));
      const I = yield S;
      Array.isArray(I) && I.length > 0 ? r.value.updateChildren(I, w) : h.leaf = !0, h.loading = !1, d.delete(h);
    }), b = (h) => {
      const w = h.map((S) => S.value);
      l.value = w, t("change", w, h), t("update:modelValue", w, h);
    }, c = {
      // 选中一个节点，静默模式不触发事件
      handleNode(h, w) {
        return Ge(this, null, function* () {
          const { disabled: S, loading: I } = h;
          if (!(!w && S || !i.value[o.value])) {
            if (r.value.isLeaf(h, p.value)) {
              if (h.leaf = !0, i.value[o.value].selectedNode = h, i.value = i.value.slice(0, h.level + 1), !w) {
                const B = i.value.map((M) => M.selectedNode);
                b(B), t("pathChange", B);
              }
              return;
            }
            if (r.value.hasChildren(h, p.value)) {
              const B = h.level + 1;
              if (i.value[o.value].selectedNode = h, i.value = i.value.slice(0, B), i.value.push({
                nodes: h.children || [],
                selectedNode: null
              }), o.value = B, !w) {
                const M = i.value.map((C) => C.selectedNode);
                t("pathChange", M);
              }
              return;
            }
            v = h, !I && (yield $(h), v === h && (i.value[o.value].selectedNode = h, c.handleNode(h, w)));
          }
        });
      },
      handleTabClick(h) {
        v = null, o.value = Number(h.paneKey);
      },
      formatTabTitle(h) {
        return h.selectedNode ? h.selectedNode.text : n("select");
      },
      isSelected(h, w) {
        var S;
        return ((S = h == null ? void 0 : h.selectedNode) == null ? void 0 : S.value) === w.value;
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
    ), G({ panes: i, initLoading: a, tabsCursor: o }, c);
  }
}), Ad = {
  role: "menu",
  class: "nut-cascader-pane"
}, zd = ["aria-checked", "aria-disabled", "onClick"], Vd = { class: "nut-cascader-item__title" }, Od = /* @__PURE__ */ m("view", { class: "nut-cascader-pane" }, null, -1);
function Hd(e, t, n, s, o, a) {
  const l = W("Loading"), r = W("Checklist"), i = W("nut-tab-pane"), p = W("nut-tabs");
  return u(), ee(p, {
    modelValue: e.tabsCursor,
    "onUpdate:modelValue": t[0] || (t[0] = (d) => e.tabsCursor = d),
    class: "nut-cascader",
    "title-scroll": "",
    onClick: e.handleTabClick
  }, {
    default: ne(() => [
      !e.initLoading && e.panes.length ? (u(!0), f(x, { key: 0 }, ie(e.panes, (d, v) => (u(), ee(i, {
        key: v,
        title: e.formatTabTitle(d)
      }, {
        default: ne(() => [
          m("view", Ad, [
            (u(!0), f(x, null, ie(d.nodes, (g) => (u(), f("view", {
              key: g.value,
              class: L(["nut-cascader-item", { active: e.isSelected(d, g), disabled: g.disabled }]),
              "aria-checked": e.isSelected(d, g),
              "aria-disabled": g.disabled || void 0,
              role: "menuitemradio",
              onClick: (k) => e.handleNode(g, !1)
            }, [
              m("view", Vd, E(g.text), 1),
              g.loading ? (u(), ee(l, {
                key: 0,
                class: "nut-cascader-item__icon-loading",
                name: "loading"
              })) : (u(), ee(r, {
                key: 1,
                class: "nut-cascader-item__icon-check",
                name: "checklist"
              }))
            ], 10, zd))), 128))
          ])
        ]),
        _: 2
      }, 1032, ["title"]))), 128)) : (u(), ee(i, {
        key: 1,
        title: "Loading..."
      }, {
        default: ne(() => [
          Od
        ]),
        _: 1
      }))
    ]),
    _: 1
  }, 8, ["modelValue", "onClick"]);
}
const Rd = /* @__PURE__ */ K(Pd, [["render", Hd]]), { create: Fd } = Y("cascader"), Wd = Fd({
  components: {
    NutCascaderItem: Rd,
    NutPopup: Ee
  },
  props: de(G({}, Nt), {
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
    }), o = (l, r) => {
      n.value = l, s.value = !1, t("change", l, r), t("update:modelValue", l);
    }, a = (l) => {
      t("pathChange", l);
    };
    return Q(
      () => e.modelValue,
      (l) => {
        l !== n.value && (n.value = l);
      }
    ), {
      onChange: o,
      onPathChange: a,
      innerValue: n,
      innerVisible: s
    };
  }
}), Yd = ["innerHTML"];
function jd(e, t, n, s, o, a) {
  const l = W("nut-cascader-item"), r = W("nut-popup");
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
    default: ne(() => [
      e.title ? (u(), f("view", {
        key: 0,
        class: "nut-cascader__bar",
        innerHTML: e.title
      }, null, 8, Yd)) : N("", !0),
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
const Ud = /* @__PURE__ */ K(Wd, [["render", jd]]), fe = {
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
    let a = o.getDay(), l = o.getDate(), r = 6 - a;
    return s !== 0 && (a = a == 0 ? 7 : a, r = 7 - a), Math.ceil((l + r) / 7);
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getYearWeek: function(e, t, n, s = 0) {
    const o = new Date(Number(e), parseInt(t) - 1, Number(n)), a = new Date(Number(e), 0, 1), l = Math.round((o.valueOf() - a.valueOf()) / 864e5);
    return Math.ceil((l + (a.getDay() + 1 - 1)) / 7);
  },
  getWeekDate: function(e, t, n, s = 0) {
    const o = new Date(Number(e), parseInt(t) - 1, Number(n)), a = o.getTime();
    let l = o.getDay();
    if (s === 0) {
      const i = a - l * 864e5, p = a + (6 - l) * 864e5, d = this.date2Str(new Date(i)), v = this.date2Str(new Date(p));
      return [d, v];
    } else {
      l = l == 0 ? 7 : l;
      const r = 24 * 60 * 60 * 1e3, i = a - (l - 1) * r, p = a + (7 - l) * r, d = this.date2Str(new Date(i)), v = this.date2Str(new Date(p));
      return [d, v];
    }
  },
  formatResultDate: function(e) {
    let t = [...e.split("-")];
    return t[2] = fe.getNumTwoBit(Number(t[2])), t[3] = `${t[0]}-${t[1]}-${t[2]}`, t[4] = fe.getWhatDay(+t[0], +t[1], +t[2]), t;
  }
}, { create: Kd } = Y("calendar-item"), Xd = "NutCalendarItem", qd = Kd({
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
    const o = ke(Xd), a = o("weekdays").map((H, J) => ({
      day: H,
      weekend: J === 0 || J === 6
    })), l = z([...a.slice(e.firstDayOfWeek, 7), ...a.slice(0, e.firstDayOfWeek)]), r = z(null), i = z(null), p = z(null), d = z(null), v = z(0), g = D(() => c.monthsData.slice(c.defaultRange[0], c.defaultRange[1])), k = D(() => n.btn), $ = D(() => n["top-info"]), b = D(() => n["bottom-info"]), c = ce({
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
    }), y = (H) => H.split("-"), h = (H) => fe.isEqual(c.currDate[0], H), w = (H) => fe.isEqual(c.currDate[1], H), S = (H) => {
      var J, ae;
      return ((J = c.currDate) == null ? void 0 : J.length) > 0 ? (ae = c.currDate) == null ? void 0 : ae.some((re) => fe.isEqual(re, H)) : !1;
    }, I = (H, J) => J.curData[0] + "-" + J.curData[1] + "-" + fe.getNumTwoBit(+H.day), B = (H, J, ae) => {
      const re = [];
      typeof ae == "number" && ((ae + 1 + e.firstDayOfWeek) % 7 === 0 || (ae + e.firstDayOfWeek) % 7 === 0) && re.push("weekend");
      const me = I(H, J), { type: Ie } = e;
      return H.type == "curr" ? fe.isEqual(c.currDate, me) || (Ie == "range" || Ie == "week") && (h(me) || w(me)) || Ie == "multiple" && S(me) ? re.push(`${c.dayPrefix}--active`) : c.propStartDate && fe.compareDate(me, c.propStartDate) || c.propEndDate && fe.compareDate(c.propEndDate, me) || e.disabledDate && e.disabledDate(me) ? re.push(`${c.dayPrefix}--disabled`) : (Ie == "range" || Ie == "week") && Array.isArray(c.currDate) && Object.values(c.currDate).length == 2 && fe.compareDate(c.currDate[0], me) && fe.compareDate(me, c.currDate[1]) && re.push(`${c.dayPrefix}--choose`) : re.push(`${c.dayPrefix}--disabled`), re;
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
        let [Oe, Ye] = J.curData, $e = [...J.curData];
        if ($e[2] = fe.getNumTwoBit(Number(H.day)), $e[3] = `${$e[0]}-${$e[1]}-${$e[2]}`, $e[4] = fe.getWhatDay(+$e[0], +$e[1], +$e[2]), Ie == "multiple")
          if (((re = c.currDate) == null ? void 0 : re.length) > 0) {
            let Te;
            (me = c.currDate) == null || me.forEach((He, ze) => {
              He == $e[3] && (Te = ze);
            }), ae ? c.chooseData.push([...$e]) : Te !== void 0 ? (c.currDate.splice(Te, 1), c.chooseData.splice(Te, 1)) : (c.currDate.push($e[3]), c.chooseData.push([...$e]));
          } else
            c.currDate = [$e[3]], c.chooseData = [[...$e]];
        else if (Ie == "range") {
          let Te = Object.values(c.currDate).length;
          Te == 2 || Te == 0 ? c.currDate = [$e[3]] : fe.compareDate(c.currDate[0], $e[3]) ? Array.isArray(c.currDate) && c.currDate.push($e[3]) : Array.isArray(c.currDate) && c.currDate.unshift($e[3]), c.chooseData.length == 2 || !c.chooseData.length ? c.chooseData = [[...$e]] : fe.compareDate(c.chooseData[0][3], $e[3]) ? c.chooseData = [...c.chooseData, [...$e]] : c.chooseData = [[...$e], ...c.chooseData];
        } else if (Ie == "week") {
          let Te = fe.getWeekDate(Oe, Ye, H.day, e.firstDayOfWeek);
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
      return J == "prev" && H >= 7 && (H -= 7), Array.from(Array(H), (Ie, Oe) => ({
        day: String(Oe + 1),
        type: J,
        year: re,
        month: me
      }));
    }, X = (H, J, ae, re) => {
      H = H - e.firstDayOfWeek;
      let { year: me, month: Ie } = ae;
      return J == "prev" && H >= 7 && (H -= 7), Array.from(Array(re), (Ye, $e) => ({
        day: String($e + 1),
        type: J,
        year: me,
        month: Ie
      })).slice(re - H);
    }, Z = (H, J) => {
      const ae = fe.getMonthPreDay(+H[0], +H[1]);
      let re = Number(H[1]) - 1, me = Number(H[0]);
      re <= 0 && (re = 12, me += 1);
      const Ie = fe.getMonthDays(String(H[0]), String(H[1])), Oe = fe.getMonthDays(me + "", re + ""), Ye = {
        year: H[0],
        month: H[1]
      }, $e = {
        curData: H,
        title: o("monthTitle", Ye.year, Ye.month),
        monthData: [
          ...X(
            ae,
            "prev",
            { month: String(re), year: String(me) },
            Oe
          ),
          ...O(Ie, "curr", Ye)
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
      re.year - ae.year > 0 && (me = me + 12 * (re.year - ae.year)), me <= 0 && (me = 1), Z(c.startData, "next");
      let Ie = 1;
      do
        Z(P("next"), "next");
      while (Ie++ < me);
      if (c.monthsNum = me, e.type == "range" && Array.isArray(c.currDate))
        c.currDate.length > 0 && (H && fe.compareDate(c.currDate[0], H) && c.currDate.splice(0, 1, H), J && fe.compareDate(J, c.currDate[1]) && c.currDate.splice(1, 1, J), c.defaultData = [...y(c.currDate[0]), ...y(c.currDate[1])]);
      else if (e.type == "multiple" && Array.isArray(c.currDate)) {
        if (c.currDate.length > 0) {
          let He = [], ze = {};
          c.currDate.forEach((je) => {
            H && !fe.compareDate(je, H) && J && !fe.compareDate(J, je) && (Object.hasOwnProperty.call(ze, je) || (He.push(je), ze[je] = je));
          }), c.currDate = [...He], c.defaultData = [...y(He[0])];
        }
      } else if (e.type == "week" && Array.isArray(c.currDate)) {
        if (c.currDate.length > 0) {
          let [He, ze, je] = y(c.currDate[0]), Ht = fe.getWeekDate(He, ze, je, e.firstDayOfWeek);
          c.currDate = Ht, H && fe.compareDate(c.currDate[0], H) && c.currDate.splice(0, 1, H), J && fe.compareDate(J, c.currDate[1]) && c.currDate.splice(1, 1, J), c.defaultData = [...y(c.currDate[0]), ...y(c.currDate[1])];
        }
      } else
        c.currDate && (H && fe.compareDate(c.currDate, H) ? c.currDate = H : J && !fe.compareDate(c.currDate, J) && (c.currDate = J), c.defaultData = [...y(c.currDate)]);
      let Oe = 0, Ye = 0;
      c.defaultData.length > 0 && c.monthsData.forEach((He, ze) => {
        He.title == o("monthTitle", c.defaultData[0], c.defaultData[1]) && (Oe = ze), (e.type == "range" || e.type == "week") && He.title == o("monthTitle", c.defaultData[3], c.defaultData[4]) && (Ye = ze);
      }), F(me, Oe), c.currentIndex = Oe, c.yearMonthTitle = c.monthsData[c.currentIndex].title, c.defaultData.length > 0 && (c.isRange ? (C({ day: c.defaultData[2], type: "curr" }, c.monthsData[c.currentIndex], !0), C({ day: c.defaultData[5], type: "curr" }, c.monthsData[Ye], !0)) : e.type == "week" ? C({ day: c.defaultData[2], type: "curr" }, c.monthsData[c.currentIndex], !0) : e.type == "multiple" ? [...c.currDate].forEach((He) => {
        let ze = y(He), je = c.currentIndex;
        c.monthsData.forEach((Ht, Fo) => {
          Ht.title == o("monthTitle", ze[0], ze[1]) && (je = Fo);
        }), C({ day: ze[2], type: "curr" }, c.monthsData[je], !0);
      }) : C({ day: c.defaultData[2], type: "curr" }, c.monthsData[c.currentIndex], !0));
      let $e = c.monthsData[c.monthsData.length - 1], Te = $e.cssHeight + $e.cssScrollHeight;
      Ve(() => {
        r != null && r.value && (i != null && i.value) && (d != null && d.value) && (v.value = r.value.clientHeight, i.value.style.height = `${Te}px`, r.value.scrollTop = c.monthsData[c.currentIndex].cssScrollHeight);
      }), c.avgHeight = Math.floor(Te / (me + 1));
    };
    s({
      scrollToDate: (H) => {
        fe.compareDate(H, c.propStartDate) ? H = c.propStartDate : fe.compareDate(H, c.propEndDate) || (H = c.propEndDate);
        let J = y(H);
        c.monthsData.forEach((ae, re) => {
          if (ae.title == o("monthTitle", J[0], J[1]) && r.value) {
            let me = c.monthsData[re].cssScrollHeight - r.value.scrollTop;
            if (e.toDateAnimation) {
              let Ie = 0, Oe = setInterval(() => {
                if (Ie++, r.value) {
                  let Ye = me / 10;
                  r.value.scrollTop = r.value.scrollTop + Ye;
                }
                Ie >= 10 && (clearInterval(Oe), r.value && (r.value.scrollTop = c.monthsData[re].cssScrollHeight));
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
    const F = (H, J) => {
      H >= 3 ? J > 0 && J < H ? c.defaultRange = [J - 1, J + 3] : J == 0 ? c.defaultRange = [J, J + 4] : J == H && (c.defaultRange = [J - 2, J + 2]) : c.defaultRange = [0, H + 2];
      let ae = c.monthsData[c.defaultRange[0]].cssScrollHeight;
      c.translateY = ae;
    }, te = (H, J) => (e.type == "range" || e.type == "week") && H.type == "curr" && B(H, J).includes("nut-calendar__day--active"), q = (H, J) => te(H, J) && h(I(H, J)), se = (H, J) => c.currDate.length >= 2 && w(I(H, J)) ? te(H, J) : !1, ue = () => {
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
        const re = Math.round(J + v.value);
        re < c.monthsData[ae].cssScrollHeight + c.monthsData[ae].cssHeight && J > c.monthsData[ae - 1].cssScrollHeight && (ae -= 1), ae + 1 <= c.monthsNum && re >= c.monthsData[ae + 1].cssScrollHeight + c.monthsData[ae + 1].cssHeight && (ae += 1), ae >= 1 && J < c.monthsData[ae - 1].cssScrollHeight && (ae -= 1);
      }
      c.currentIndex !== ae && (c.currentIndex = ae, F(c.monthsNum, ae)), c.yearMonthTitle = c.monthsData[ae].title;
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
    ), de(G(G({
      weeks: l,
      compConthsData: g,
      showTopBtn: k,
      topInfo: $,
      bottomInfo: b,
      rangeTip: ue,
      mothsViewScroll: we,
      getClass: B,
      isStartTip: q,
      isEndTip: se,
      chooseDay: C,
      isCurrDay: pe,
      confirm: M,
      months: r
    }, he(c)), he(e)), {
      translate: o,
      monthsPanel: i,
      weeksPanel: p,
      viewArea: d
    });
  }
}), Zd = { class: "nut-calendar__header" }, Gd = {
  key: 0,
  class: "nut-calendar__header-title"
}, Jd = {
  key: 1,
  class: "nut-calendar__header-slot"
}, Qd = {
  key: 2,
  class: "nut-calendar__header-subtitle"
}, xd = {
  ref: "weeksPanel",
  class: "nut-calendar__weekdays"
}, ef = {
  ref: "monthsPanel",
  class: "nut-calendar__panel"
}, tf = { class: "nut-calendar__month-title" }, nf = { class: "nut-calendar__days" }, of = ["onClick"], lf = { class: "nut-calendar__day-value" }, sf = {
  key: 0,
  class: "nut-calendar__day-tips nut-calendar__day-tips--top"
}, af = {
  key: 1,
  class: "nut-calendar__day-tips nut-calendar__day-tips--bottom"
}, rf = {
  key: 2,
  class: "nut-calendar__day-tips--curr"
}, uf = {
  key: 4,
  class: "nut-calendar__day-tip"
}, cf = {
  key: 0,
  class: "nut-calendar__footer"
};
function df(e, t, n, s, o, a) {
  return u(), f("view", {
    class: L(["nut-calendar", {
      "nut-calendar--nopop": !e.poppable,
      "nut-calendar--nofooter": e.isAutoBackFill
    }])
  }, [
    m("view", Zd, [
      e.showTitle ? (u(), f("view", Gd, E(e.title || e.translate("title")), 1)) : N("", !0),
      e.showTopBtn ? (u(), f("view", Jd, [
        _(e.$slots, "btn")
      ])) : N("", !0),
      e.showSubTitle ? (u(), f("view", Qd, E(e.yearMonthTitle), 1)) : N("", !0),
      m("view", xd, [
        (u(!0), f(x, null, ie(e.weeks, (l, r) => (u(), f("view", {
          key: r,
          class: L(["nut-calendar__weekday", { weekend: l.weekend }])
        }, E(l.day), 3))), 128))
      ], 512)
    ]),
    m("view", {
      ref: "months",
      class: "nut-calendar__content",
      onScroll: t[0] || (t[0] = (...l) => e.mothsViewScroll && e.mothsViewScroll(...l))
    }, [
      m("view", ef, [
        m("view", {
          ref: "viewArea",
          class: "nut-calendar__body",
          style: A({ transform: `translateY(${e.translateY}px)` })
        }, [
          (u(!0), f(x, null, ie(e.compConthsData, (l, r) => (u(), f("view", {
            key: r,
            class: "nut-calendar__month"
          }, [
            m("view", tf, E(l.title), 1),
            m("view", nf, [
              m("view", {
                class: L(["nut-calendar__days-item", e.type === "range" ? "nut-calendar__days-item--range" : ""])
              }, [
                (u(!0), f(x, null, ie(l.monthData, (i, p) => (u(), f("view", {
                  key: p,
                  class: L(["nut-calendar__day", e.getClass(i, l, p)]),
                  onClick: (d) => e.chooseDay(i, l)
                }, [
                  m("view", lf, [
                    _(e.$slots, "day", {
                      date: i.type == "curr" ? i : ""
                    }, () => [
                      ge(E(i.type == "curr" ? i.day : ""), 1)
                    ])
                  ]),
                  e.topInfo ? (u(), f("view", sf, [
                    _(e.$slots, "top-info", {
                      date: i.type == "curr" ? i : ""
                    })
                  ])) : N("", !0),
                  e.bottomInfo ? (u(), f("view", af, [
                    _(e.$slots, "bottom-info", {
                      date: i.type == "curr" ? i : ""
                    })
                  ])) : N("", !0),
                  !e.bottomInfo && e.showToday && e.isCurrDay(i) ? (u(), f("view", rf, E(e.translate("today")), 1)) : N("", !0),
                  e.isStartTip(i, l) ? (u(), f("view", {
                    key: 3,
                    class: L(["nut-calendar__day-tip", { "nut-calendar__day-tips--top": e.rangeTip() }])
                  }, E(e.startText || e.translate("start")), 3)) : N("", !0),
                  e.isEndTip(i, l) ? (u(), f("view", uf, E(e.endText || e.translate("end")), 1)) : N("", !0)
                ], 10, of))), 128))
              ], 2)
            ])
          ]))), 128))
        ], 4)
      ], 512)
    ], 544),
    e.poppable && !e.isAutoBackFill ? (u(), f("view", cf, [
      _(e.$slots, "footer-info", { date: e.chooseData }, () => [
        m("view", {
          class: "nut-calendar__confirm",
          onClick: t[1] || (t[1] = (...l) => e.confirm && e.confirm(...l))
        }, E(e.confirmText || e.translate("confirm")), 1)
      ])
    ])) : N("", !0)
  ], 2);
}
const vo = /* @__PURE__ */ K(qd, [["render", df]]), { create: ff } = Y("calendar"), pf = ff({
  components: {
    NutCalendarItem: vo,
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
      set(w) {
        t("update:visible", w);
      }
    }), a = D(() => n.btn), l = D(() => n["top-info"]), r = D(() => n.day), i = D(() => n["bottom-info"]), p = D(() => n["footer-info"]), d = z(null);
    s({
      scrollToDate: (w) => {
        var S;
        (S = d.value) == null || S.scrollToDate(w);
      },
      initPosition: () => {
        var w;
        (w = d.value) == null || w.initPosition();
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
        var w;
        (w = d.value) == null || w.initPosition();
      },
      update: k,
      close: $,
      select: (w) => {
        t("select", w);
      },
      choose: (w) => {
        $(), t("choose", w);
      },
      calendarRef: d,
      showTopBtn: a,
      topInfo: l,
      dayInfo: r,
      bottomInfo: i,
      footerInfo: p
    };
  }
});
function mf(e, t, n, s, o, a) {
  const l = W("nut-calendar-item"), r = W("nut-popup");
  return e.poppable ? (u(), ee(r, wt({
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
const hf = /* @__PURE__ */ K(pf, [["render", mf]]), gf = () => be(
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
      d: "M11.396 9.49a.771.771 0 0 0 0-.98l-3.6-4.372a.771.771 0 0 0-1.191.981L9.8 9l-3.196 3.881a.771.771 0 0 0 1.19.98l3.6-4.37Z"
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
      d: "M13.853 4.026a.771.771 0 0 1 .12 1.085L10.864 9l3.11 3.889a.771.771 0 1 1-1.204.963L9.272 9.482a.771.771 0 0 1 0-.964l3.497-4.371a.771.771 0 0 1 1.084-.12Zm-5.245 0a.771.771 0 0 1 .12 1.085L5.617 9l3.111 3.889a.771.771 0 0 1-1.205.963L4.026 9.482a.771.771 0 0 1 0-.964l3.497-4.371a.771.771 0 0 1 1.085-.12Z"
    })
  ]
), $f = () => be(
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
), nt = (e) => e ? {
  year: e.getFullYear(),
  month: e.getMonth() + 1,
  date: e.getDate()
} : null, Kt = (e) => e ? new Date(e.year, e.month - 1, e.date) : null, In = (e) => Array.isArray(e) ? e.map((t) => nt(t)) : e ? [nt(e)] : [], bf = (e) => Array.isArray(e) ? e.map((t) => Kt(t)) : e ? [Kt(e)] : [], wf = (e, t, n) => {
  let s = t - 1, o = e;
  s <= 0 && (s = 12, o -= 1);
  let a = fe.getMonthPreDay(e, t);
  a -= n, a >= 7 && (a -= 7);
  const l = fe.getMonthDays(`${o}`, `${s}`);
  return Array.from(Array(l), (i, p) => ({
    type: "prev",
    year: o,
    month: s,
    date: p + 1
  })).slice(l - a);
}, kf = (e, t) => {
  const n = fe.getMonthDays(`${e}`, `${t}`);
  return Array.from(Array(n), (s, o) => ({
    type: "current",
    year: e,
    month: t,
    date: o + 1
  }));
}, Cf = (e, t) => {
  const n = new Date(e.year, e.month - 1, e.date), s = (n.getDay() + 7 - t) % 7;
  return [
    nt(new Date(n.getTime() - 24 * 60 * 60 * 1e3 * s)),
    nt(new Date(n.getTime() + 24 * 60 * 60 * 1e3 * (6 - s)))
  ];
}, Sf = (e, t) => {
  const n = e.year, s = e.month, o = [...wf(n, s, t), ...kf(n, s)], a = o.length, l = e.month === 12 ? e.year + 1 : e.year, r = e.month === 12 ? 1 : e.month + 1;
  for (let i = 1; i <= 42 - a; i++)
    o.push({
      type: "next",
      year: l,
      month: r,
      date: i
    });
  return o;
}, tt = (e, t) => {
  if (e && t)
    return e.year === t.year ? e.month === t.month ? e.date - t.date : e.month - t.month : e.year - t.year;
}, rt = (e, t) => tt(e, t) === 0, Tf = { class: "nut-calendarcard" }, Nf = { class: "nut-calendarcard-header" }, Df = { class: "nut-calendarcard-header-left" }, _f = { class: "nut-calendarcard-header-title" }, If = { class: "nut-calendarcard-header-right" }, Bf = { class: "nut-calendarcard-content" }, Mf = { class: "nut-calendarcard-days" }, Lf = { class: "nut-calendarcard-days" }, Ef = ["onClick"], Pf = { class: "nut-calendarcard-day-top" }, Af = { class: "nut-calendarcard-day-inner" }, zf = { class: "nut-calendarcard-day-bottom" }, Bn = "NutCalendarCard", $o = /* @__PURE__ */ Ue({
  name: Bn,
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
    const s = e, o = n, a = ke(Bn), r = z((() => {
      let B = new Date(Date.now());
      const M = s.modelValue;
      return Array.isArray(M) ? M.length && (B = M[0]) : M && (B = M), {
        year: B.getFullYear(),
        month: B.getMonth() + 1
      };
    })()), i = z([]), p = D(() => {
      const B = a("weekdays").map((M, C) => ({
        name: M,
        key: C
      }));
      return [...B.slice(s.firstDayOfWeek, 7), ...B.slice(0, s.firstDayOfWeek)];
    }), d = z(s.modelValue ? In(s.modelValue) : []);
    bt(() => {
      const B = s.modelValue ? In(s.modelValue) : [];
      d.value = B;
    });
    const v = (B) => {
      if (d.value = B, s.type === "single") {
        const M = Kt(B[0]);
        o("update:modelValue", M), o("change", M);
      } else if (s.type === "multiple" || s.type === "range" || s.type === "week") {
        const M = bf(B);
        o("update:modelValue", M), o("change", M);
      }
    };
    bt(() => {
      const B = Sf(r.value, s.firstDayOfWeek);
      i.value = B, o("pageChange", r.value);
    });
    const g = (B) => !!(s.disableDay && s.disableDay(B) || s.startDate && Number(tt(B, nt(s.startDate))) < 0 || s.endDate && Number(tt(B, nt(s.endDate))) > 0), k = (B) => {
      if (s.type === "single" || s.type === "multiple") {
        for (const M in d.value)
          if (rt(B, d.value[M]))
            return !0;
      } else if (s.type === "range" && d.value.length === 1 && rt(d.value[0], B))
        return !0;
      return !1;
    }, $ = (B) => (s.type === "range" || s.type === "week") && d.value.length === 2 && rt(B, d.value[0]), b = (B) => (s.type === "range" || s.type === "week") && d.value.length === 2 && rt(B, d.value[1]), c = (B) => {
      if ((s.type === "range" || s.type === "week") && d.value.length === 2) {
        const M = tt(d.value[0], B), C = tt(B, d.value[1]);
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
      return B.type === "current" && (k(B) && M.push("active"), $(B) && M.push("start"), b(B) && M.push("end"), c(B) && M.push("mid"), y(B) && M.push("weekend")), M;
    }, w = (B, M) => {
      if (s.startDate) {
        const C = tt(
          {
            year: B,
            month: M,
            date: 31
          },
          nt(s.startDate)
        );
        if (C && C < 0)
          return;
      }
      if (s.endDate) {
        const C = tt(
          {
            year: B,
            month: M,
            date: 1
          },
          nt(s.endDate)
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
    }, I = (B) => {
      if (!(B.type === "prev" || B.type === "next" || g(B)))
        switch (o("dayClick", B), s.type) {
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
              const C = tt(d.value[0], B);
              C === 0 || C === null || C === void 0 ? v([]) : C < 0 ? v([d.value[0], B]) : v([B, d.value[0]]);
            } else
              console.warn("[NutUI] Calendar range error");
            break;
          }
          case "week": {
            if (d.value.length === 2 || d.value.length === 0) {
              const [M, C] = Cf(B, s.firstDayOfWeek);
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
    }), (B, M) => Ce((u(), f("div", Tf, [
      m("div", Nf, [
        m("div", Df, [
          m("div", {
            class: "double-left",
            onClick: M[0] || (M[0] = (C) => S(-12))
          }, [
            oe(Re(vf))
          ]),
          m("div", {
            class: "left",
            onClick: M[1] || (M[1] = (C) => S(-1))
          }, [
            oe(Re(gf))
          ])
        ]),
        m("div", _f, E(Re(a)("monthTitle", r.value.year, r.value.month)), 1),
        m("div", If, [
          m("div", {
            class: "right",
            onClick: M[2] || (M[2] = (C) => S(1))
          }, [
            oe(Re(yf))
          ]),
          m("div", {
            class: "double-right",
            onClick: M[3] || (M[3] = (C) => S(12))
          }, [
            oe(Re($f))
          ])
        ])
      ]),
      m("div", Bf, [
        m("div", Mf, [
          (u(!0), f(x, null, ie(p.value, (C) => (u(), f("div", {
            key: C.name,
            class: L(["nut-calendarcard-day header", C.key === 0 || C.key === 6 ? "weekend" : ""])
          }, E(C.name), 3))), 128))
        ]),
        m("div", Lf, [
          (u(!0), f(x, null, ie(i.value, (C) => (u(), f("div", {
            key: `${C.year}-${C.month}-${C.date}`,
            class: L(["nut-calendarcard-day", [C.type, ...h(C)]]),
            onClick: (T) => I(C)
          }, [
            m("div", Pf, [
              _(B.$slots, "top", { day: C })
            ]),
            m("div", Af, [
              _(B.$slots, "default", { day: C }, () => [
                ge(E(C.date), 1)
              ])
            ]),
            m("div", zf, [
              _(B.$slots, "bottom", { day: C })
            ])
          ], 10, Ef))), 128))
        ])
      ])
    ], 512)), [
      [Ne, i.value.length > 0]
    ]);
  }
});
at($o);
const bo = Symbol("nut-checkbox"), { create: Vf, componentName: et } = Y("checkbox"), Of = Vf({
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
    const s = Ze(Xe(e, "disabled")), o = Me(bo, null), a = ce({
      partialSelect: e.indeterminate
    }), l = D(() => !!o), r = D(() => l.value ? o.value.value.includes(e.label) : e.modelValue), i = D(() => l.value && o.disabled.value ? o.disabled.value : s.value), p = D(() => !!e.modelValue), d = D(() => i.value ? "nut-checkbox__icon--disable" : a.partialSelect ? "nut-checkbox__icon--indeterminate" : r.value ? "nut-checkbox__icon" : "nut-checkbox__icon--unchecked");
    let v = "";
    const g = (y, h) => {
      v = "click", t("update:modelValue", y), t("change", y, h);
    };
    Q(
      () => e.modelValue,
      (y) => {
        v == "click" ? v = "" : t("change", y);
      }
    );
    const k = () => {
      const { iconSize: y } = e, h = {
        CheckNormal: n.icon ? n.icon : jt,
        Checked: n.checkedIcon ? n.checkedIcon : qn,
        CheckDisabled: n.indeterminate ? n.indeterminate : Tl
      }, w = a.partialSelect ? h.CheckDisabled : r.value ? h.Checked : h.CheckNormal, S = Be(y);
      return be(w, {
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
          class: `${et}__label ${i.value ? `${et}__label--disabled` : ""}`
        },
        (y = n.default) == null ? void 0 : y.call(n)
      );
    }, b = () => {
      var y;
      return be(
        "view",
        {
          class: `${et}__button ${r.value && `${et}__button--active`} ${i.value ? `${et}__button--disabled` : ""}`
        },
        (y = n.default) == null ? void 0 : y.call(n)
      );
    }, c = () => {
      var y, h;
      if (!i.value) {
        if (p.value && a.partialSelect) {
          a.partialSelect = !1, g(p.value, (y = n.default) == null ? void 0 : y.call(n)[0].children);
          return;
        }
        if (g(!p.value, (h = n.default) == null ? void 0 : h.call(n)[0].children), l.value) {
          const w = o.value.value, S = o.max.value, { label: I } = e, B = w.indexOf(I);
          B > -1 ? w.splice(B, 1) : B <= -1 && (w.length < S || !S) && w.push(I), o.updateValue(w);
        }
      }
    };
    return ve(() => {
      l.value && o.link(We());
    }), Gt(() => {
      l.value && o.unlink(We());
    }), Q(
      () => e.indeterminate,
      (y) => {
        a.partialSelect = y;
      }
    ), () => be(
      "view",
      {
        class: `${et} ${et}--${e.shape} ${e.textPosition === "left" ? `${et}--reverse` : ""}`,
        onClick: c
      },
      [e.shape == "button" ? b() : [k(), $()]]
    );
  }
}), { create: Hf, componentName: Rf } = Y("checkbox-group"), Ff = Hf({
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
    }), a = (d) => {
      d.proxy && o.children.push(d.proxy);
    }, l = (d) => {
      d.proxy && (o.children = o.children.filter((v) => v !== d.proxy));
    }, r = (d) => {
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
    return Le(bo, {
      value: D(() => e.modelValue),
      disabled: D(() => e.disabled),
      max: D(() => e.max),
      updateValue: r,
      link: a,
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
          class: Rf
        },
        (d = t.default) == null ? void 0 : d.call(t)
      );
    };
  }
}), Wf = {
  text: "text",
  value: "value",
  children: "children"
}, Yf = (e, t) => {
  const n = ce({
    formattedColumns: e.columns
  }), s = D(() => G(G({}, Wf), e.fieldNames)), o = z([]), a = D(() => {
    const c = s.value;
    return d.value.map((y, h) => {
      const w = y.findIndex((S) => S[c.value] === o.value[h]);
      return w === -1 ? 0 : w;
    });
  }), l = z([]), r = (c) => {
    c && l.value.length < d.value.length && l.value.push(c);
  }, i = D(() => {
    const c = s.value;
    return d.value.map((y, h) => y.find((w) => w[c.value] === o.value[h]) || y[0]);
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
        c = v(
          n.formattedColumns,
          o.value ? o.value : []
        );
        break;
      default:
        c = [n.formattedColumns];
        break;
    }
    return c;
  }), v = (c, y) => {
    const h = [], w = s.value;
    let S = {
      text: "",
      value: "",
      [w.children]: c
    }, I = 0;
    for (; S && S[w.children]; ) {
      const B = S[w.children], M = y[I];
      let C = B.findIndex((T) => T[w.value] === M);
      C === -1 && (C = 0), S = S[w.children][C], I++, h.push(B);
    }
    return h;
  }, g = () => {
    t("cancel", {
      selectedValue: o.value,
      selectedOptions: i.value
    });
  }, k = (c, y) => {
    var w;
    const h = s.value;
    if (y && Object.keys(y).length) {
      if (o.value = o.value ? o.value : [], p.value === "cascade") {
        o.value[c] = (w = y[h.value]) != null ? w : "";
        let S = c, I = y;
        for (; I && I[h.children] && I[h.children][0]; )
          o.value[S + 1] = I[h.children][0][h.value], S++, I = I[h.children][0];
        I && I[h.children] && I[h.children].length === 0 && (o.value = o.value.slice(0, S + 1));
      } else
        o.value[c] = Object.prototype.hasOwnProperty.call(y, h.value) ? y[h.value] : "";
      t("change", {
        columnIndex: c,
        selectedValue: o.value,
        selectedOptions: i.value
      });
    }
  }, $ = () => {
    const c = s.value;
    o.value && !o.value.length && d.value.forEach((y) => {
      o.value.push(y[0][c.value]);
    }), t("confirm", {
      selectedValue: o.value,
      selectedOptions: i.value
    });
  }, b = (c, y) => JSON.stringify(c) === JSON.stringify(y);
  return Q(
    () => e.modelValue,
    (c) => {
      b(c, o.value) || (o.value = c);
    },
    { deep: !0, immediate: !0 }
  ), Q(
    o,
    (c) => {
      b(c, e.modelValue) || t("update:modelValue", c);
    },
    { deep: !0 }
  ), Q(
    () => e.columns,
    (c) => {
      n.formattedColumns = c;
    }
  ), de(G({}, he(n)), {
    columnsType: p,
    columnsList: d,
    columnFieldNames: s,
    cancel: g,
    changeHandler: k,
    confirm: $,
    defaultValues: o,
    defaultIndexes: a,
    pickerColumn: l,
    swipeRef: r,
    selectedOptions: i,
    isSameValue: b
  });
}, { create: jf } = Y("picker-column"), Uf = jf({
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
    const n = xe(), s = ce({
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
    }), o = z(null), a = z(!1), l = z(0), r = z(0), i = 200, p = 300, d = 15, v = D(() => ({
      transition: `transform ${r.value}ms cubic-bezier(0.17, 0.89, 0.45, 1)`,
      transform: `rotate3d(1, 0, 0, ${l.value})`,
      top: `calc(50% - ${+e.optionHeight / 2}px)`
    })), g = D(() => {
      const { optionHeight: T } = e;
      return {
        transition: `transform ${r.value}ms cubic-bezier(0.17, 0.89, 0.45, 1)`,
        transform: `translate3d(0, ${s.scrollDistance}px, 0)`,
        top: `calc(50% - ${+T / 2}px)`,
        height: `${T}px`
      };
    }), k = (T) => `transform: rotate3d(1, 0, 0, ${-s.rotation * T}deg) translate3d(0px, 0px, 104px)`, $ = D(() => ({
      backgroundSize: `100% ${(+e.visibleOptionNum - 1) * +e.optionHeight / 2}px`
    })), b = (T) => {
      if (n.start(T), a.value && !e.taro) {
        const P = o.value, { transform: O } = window.getComputedStyle(P);
        if (e.threeDimensional) {
          const X = Math.floor(parseInt(l.value) / 360), Z = +O.split(", ")[5], le = +O.split(", ")[6] < 0 ? 180 : 0, j = X * 360 + Math.acos(Z) / Math.PI * 180 + le;
          s.scrollDistance = -Math.abs((j / s.rotation - 1) * +e.optionHeight);
        } else
          s.scrollDistance = +O.slice(7, O.length - 1).split(", ")[5];
      }
      dt(T, !0), s.touchParams.startY = n.deltaY.value, s.touchParams.startTime = Date.now(), s.transformY = s.scrollDistance;
    }, c = (T) => {
      n.move(T), n.isVertical() && (a.value = !0, dt(T, !0)), s.touchParams.lastY = n.deltaY.value;
      let P = s.touchParams.lastY - s.touchParams.startY;
      I(P);
    }, y = () => {
      s.touchParams.lastY = n.deltaY.value, s.touchParams.lastTime = Date.now();
      let T = s.touchParams.lastY - s.touchParams.startY, P = s.touchParams.lastTime - s.touchParams.startTime;
      if (P <= p && Math.abs(T) > d) {
        const O = h(T, P);
        I(O, "end", +e.swipeDuration);
        return;
      } else
        I(T, "end");
      setTimeout(() => {
        n.reset(), a.value = !1;
      }, 0);
    }, h = (T, P) => (T = Math.abs(T / P) / 3e-3 * (T < 0 ? -1 : 1), T), w = (T) => T >= s.currIndex + 8 || T <= s.currIndex - 8, S = (T = 0, P, O = i, X) => {
      P === "end" ? r.value = O : r.value = 0, l.value = X, s.scrollDistance = T;
    }, I = (T, P, O) => {
      const { optionHeight: X } = e;
      let Z = T + s.transformY;
      if (P === "end") {
        Z > 0 && (Z = 0), Z < -(e.column.length - 1) * +X && (Z = -(e.column.length - 1) * +X);
        let le = Math.round(Z / +X) * +X, j = `${(Math.abs(Math.round(le / +X)) + 1) * s.rotation}deg`;
        S(le, P, O, j), s.currIndex = Math.abs(Math.round(le / +X)) + 1;
      } else {
        let le = 0, j = (-Z / +X + 1) * s.rotation;
        const U = (e.column.length + 1) * s.rotation, F = 0;
        le = Pe(j, F, U), F < le && le < U && (S(Z, null, void 0, le + "deg"), s.currIndex = Math.abs(Math.round(Z / +X)) + 1);
      }
    }, B = () => {
      t("change", e.column[s.currIndex - 1]);
    }, M = (T) => {
      const { column: P } = e;
      let O = P.findIndex((Z) => Z[e.fieldNames.value] === e.value);
      s.currIndex = O === -1 ? 1 : O + 1;
      let X = O === -1 ? 0 : O * +e.optionHeight;
      T && B(), I(-X);
    }, C = () => {
      a.value = !1, r.value = 0, B();
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
    }), de(G(G({}, he(s)), he(e)), {
      setRollerStyle: k,
      isHidden: w,
      roller: o,
      onTouchStart: b,
      onTouchMove: c,
      onTouchEnd: y,
      touchRollerStyle: v,
      touchTileStyle: g,
      setMove: I,
      stopMomentum: C,
      pxCheck: Be,
      maskStyles: $
    });
  }
});
function Kf(e, t, n, s, o, a) {
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
      (u(!0), f(x, null, ie(e.column, (l, r) => {
        var i;
        return u(), f(x, {
          key: (i = l[e.fieldNames.value]) != null ? i : r
        }, [
          l && l[e.fieldNames.text] && e.threeDimensional ? (u(), f("view", {
            key: 0,
            class: L(["nut-picker-roller-item", { "nut-picker-roller-item-hidden": e.isHidden(r + 1) }]),
            style: A(e.setRollerStyle(r + 1))
          }, E(l[e.fieldNames.text]), 7)) : N("", !0),
          l && l[e.fieldNames.text] && !e.threeDimensional ? (u(), f("view", {
            key: 1,
            class: "nut-picker-roller-item-tile",
            style: A({ height: e.pxCheck(e.optionHeight), lineHeight: e.pxCheck(e.optionHeight) })
          }, E(l[e.fieldNames.text]), 5)) : N("", !0)
        ], 64);
      }), 128))
    ], 36),
    m("view", {
      class: "nut-picker-roller-mask",
      style: A(e.maskStyles)
    }, null, 4)
  ], 32);
}
const Xf = /* @__PURE__ */ K(Uf, [["render", Kf]]), qf = {
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
}, { create: Zf } = Y("picker"), Gf = "NutPicker", Jf = Zf({
  components: {
    NutPickerColumn: Xf
  },
  props: qf,
  emits: ["cancel", "change", "confirm", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = ke(Gf), { changeHandler: s, confirm: o, defaultValues: a, columnsList: l, columnsType: r, columnFieldNames: i, cancel: p } = Yf(
      e,
      t
    ), d = z([]), v = ($) => {
      $ && d.value.length < l.value.length && d.value.push($);
    }, g = D(() => {
      const $ = {};
      return $.height = `${+e.visibleOptionNum * +e.optionHeight}px`, $["--lineHeight"] = `${+e.optionHeight}px`, $;
    });
    return {
      columnsType: r,
      columnsList: l,
      columnFieldNames: i,
      cancel: p,
      changeHandler: s,
      confirmHandler: () => {
        d.value.length > 0 && d.value.forEach(($) => {
          $.stopMomentum();
        }), o();
      },
      defaultValues: a,
      translate: n,
      pickerColumn: d,
      swipeRef: v,
      columnStyle: g
    };
  }
}), Qf = { class: "nut-picker" }, xf = {
  key: 0,
  class: "nut-picker__bar"
}, ep = { class: "nut-picker__title" };
function tp(e, t, n, s, o, a) {
  const l = W("nut-picker-column");
  return u(), f("div", Qf, [
    e.showToolbar ? (u(), f("view", xf, [
      m("view", {
        class: "nut-picker__left",
        onClick: t[0] || (t[0] = (...r) => e.cancel && e.cancel(...r))
      }, E(e.cancelText || e.translate("cancel")), 1),
      m("view", ep, E(e.title), 1),
      m("view", {
        class: "nut-picker__right",
        onClick: t[1] || (t[1] = (...r) => e.confirmHandler && e.confirmHandler(...r))
      }, E(e.okText || e.translate("confirm")), 1)
    ])) : N("", !0),
    _(e.$slots, "top"),
    m("view", {
      class: "nut-picker__column",
      style: A(e.columnStyle)
    }, [
      (u(!0), f(x, null, ie(e.columnsList, (r, i) => (u(), f("view", {
        key: i,
        class: "nut-picker__columnitem"
      }, [
        oe(l, {
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
const wo = /* @__PURE__ */ K(Jf, [["render", tp]]), { create: np } = Y("date-picker"), Mn = (/* @__PURE__ */ new Date()).getFullYear();
function Wt(e) {
  return el(e) && !isNaN(e.getTime());
}
const op = {
  day: "日",
  year: "年",
  month: "月",
  hour: "时",
  minute: "分",
  seconds: "秒"
}, lp = np({
  components: {
    NutPicker: wo
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
      default: () => new Date(Mn - 10, 0, 1),
      validator: Wt
    },
    maxDate: {
      type: Date,
      default: () => new Date(Mn + 10, 11, 31),
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
    const a = (c, y) => {
      const h = c == "min" ? e.minDate : e.maxDate, w = h.getFullYear();
      let S = 1, I = 1, B = 0, M = 0;
      c === "max" && (S = 12, I = o(y.getFullYear(), y.getMonth() + 1), B = 23, M = 59);
      let C = M;
      return y.getFullYear() === w && (S = h.getMonth() + 1, y.getMonth() + 1 === S && (I = h.getDate(), y.getDate() === I && (B = h.getHours(), y.getHours() === B && (M = h.getMinutes(), y.getMinutes() === M && (C = h.getSeconds()))))), {
        [`${c}Year`]: w,
        [`${c}Month`]: S,
        [`${c}Date`]: I,
        [`${c}Hour`]: B,
        [`${c}Minute`]: M,
        [`${c}Seconds`]: C
      };
    }, l = D(() => {
      const { maxYear: c, maxDate: y, maxMonth: h, maxHour: w, maxMinute: S, maxSeconds: I } = a("max", n.currentDate), { minYear: B, minDate: M, minMonth: C, minHour: T, minMinute: P, minSeconds: O } = a("min", n.currentDate);
      return $([
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
          range: [T, w]
        },
        {
          type: "minute",
          range: [P, S]
        },
        {
          type: "seconds",
          range: [O, I]
        }
      ]);
    }), r = D(() => l.value.map((y, h) => d(y.range[0], y.range[1], v(y.type), y.type, h))), i = ({
      columnIndex: c,
      selectedValue: y,
      selectedOptions: h
    }) => {
      let w = [];
      y.forEach((C) => {
        w.push(C);
      }), e.type == "month-day" && w.length < 3 && w.unshift(new Date(n.currentDate || e.minDate || e.maxDate).getFullYear()), e.type == "year-month" && w.length < 3 && w.push(new Date(n.currentDate || e.minDate || e.maxDate).getDate());
      const S = Number(w[0]), I = Number(w[1]) - 1, B = Math.min(Number(w[2]), o(Number(w[0]), Number(w[1])));
      let M = null;
      if (e.type === "date" || e.type === "month-day" || e.type === "year-month")
        M = new Date(S, I, B);
      else if (e.type === "datetime")
        M = new Date(S, I, B, Number(w[3]), Number(w[4]));
      else if (e.type === "datehour")
        M = new Date(S, I, B, Number(w[3]));
      else if (e.type === "hour-minute" || e.type === "time") {
        M = new Date(n.currentDate);
        const C = M.getFullYear(), T = M.getMonth(), P = M.getDate();
        M = new Date(C, T, P, Number(w[0]), Number(w[1]), Number(w[2] || 0));
      }
      n.currentDate = s(M), t("change", { columnIndex: c, selectedValue: y, selectedOptions: h });
    }, p = (c, y) => {
      const { formatter: h, isShowChinese: w } = e;
      let S = null;
      if (h)
        S = h(c, { text: Qe(y, 2), value: Qe(y, 2) });
      else {
        const I = Qe(y, 2), B = w ? op[c] : "";
        S = { text: I + B, value: I };
      }
      return S;
    }, d = (c, y, h, w, S) => {
      const I = [];
      let B = 0;
      for (; c <= y; )
        I.push(p(w, c)), w === "minute" ? c += e.minuteStep : c++, c <= Number(h) && B++;
      return n.selectedValue[S] = I[B].value, e.filter ? e.filter(w, I) : I;
    }, v = (c) => c === "year" ? n.currentDate.getFullYear() : c === "month" ? n.currentDate.getMonth() + 1 : c === "day" ? n.currentDate.getDate() : c === "hour" ? n.currentDate.getHours() : c === "minute" ? n.currentDate.getMinutes() : c === "seconds" ? n.currentDate.getSeconds() : 0, g = (c) => {
      t("cancel", c);
    }, k = (c) => {
      t("confirm", c);
    }, $ = (c) => {
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
    }, b = (c) => {
      const y = [
        c.getFullYear(),
        c.getMonth() + 1,
        c.getDate(),
        c.getHours(),
        c.getMinutes(),
        c.getSeconds()
      ];
      return $(y.map((h) => String(h)));
    };
    return Hn(() => {
      n.currentDate = s(e.modelValue);
    }), Q(
      () => e.modelValue,
      (c) => {
        const y = s(c);
        JSON.stringify(y) === JSON.stringify(n.currentDate) || (n.currentDate = y, n.selectedValue = b(y));
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
    ), de(G({}, he(n)), {
      changeHandler: i,
      closeHandler: g,
      confirm: k,
      columns: r
    });
  }
});
function sp(e, t, n, s, o, a) {
  const l = W("nut-picker");
  return u(), ee(l, {
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
const ap = /* @__PURE__ */ K(lp, [["render", sp]]), { componentName: rp, create: ip } = Y("input-number"), up = ip({
  components: { Minus: ka, Plus: Wa },
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
    const n = Ze(Xe(e, "disabled")), s = D(() => {
      const $ = rp;
      return {
        [$]: !0,
        [`${$}--disabled`]: n.value
      };
    }), o = ($) => Number($).toFixed(Number(e.decimalPlaces)), a = ($) => {
      const b = $.target;
      t("update:modelValue", b.value, $), t("change", b.value, $);
    }, l = ($, b) => {
      let c = o($);
      t("update:modelValue", c, b), Number(e.modelValue) !== Number(c) && t("change", c, b);
    }, r = ($ = Number(e.modelValue)) => $ < Number(e.max) && !n.value, i = ($ = Number(e.modelValue)) => $ > Number(e.min) && !n.value, p = ($) => {
      if (n.value)
        return;
      t("reduce", $);
      let b = Number(e.modelValue) - Number(e.step);
      i() && b >= Number(e.min) ? l(b, $) : (l(Number(e.min), $), t("overlimit", $, "reduce"));
    }, d = ($) => {
      if (n.value)
        return;
      t("add", $);
      let b = Number(e.modelValue) + Number(e.step);
      r() && b <= Number(e.max) ? l(b, $) : (l(Number(e.max), $), t("overlimit", $, "add"));
    }, v = ($) => {
      n.value || e.readonly || t("focus", $);
    }, g = ($) => {
      if (n.value || e.readonly)
        return;
      let c = $.target.valueAsNumber;
      c < Number(e.min) ? c = Number(e.min) : c > Number(e.max) && (c = Number(e.max)), l(c, $), t("blur", $);
    }, k = ($) => {
      let b = Number($);
      return b < Number(e.min) ? b = Number(e.min) : b > Number(e.max) && (b = Number(e.max)), b;
    };
    return Q(
      () => [e.max, e.min],
      () => {
        Number(e.min) > Number(e.max) && console.warn("[NutUI] <InputNumber>", "props.max < props.min");
        const $ = k(e.modelValue);
        $ !== Number(e.modelValue) && l($, {});
      }
    ), {
      classes: s,
      disabled: n,
      change: a,
      blur: g,
      focus: v,
      add: d,
      addAllow: r,
      reduce: p,
      reduceAllow: i,
      pxCheck: Be
    };
  }
}), cp = ["min", "max", "disabled", "readonly", "value"];
function dp(e, t, n, s, o, a) {
  const l = W("Minus"), r = W("Plus");
  return u(), f("view", {
    class: L(e.classes)
  }, [
    m("view", {
      class: L(["nut-input-number__icon nut-input-number__left", { "nut-input-number__icon--disabled": !e.reduceAllow() }]),
      onClick: t[0] || (t[0] = (...i) => e.reduce && e.reduce(...i))
    }, [
      _(e.$slots, "left-icon", {}, () => [
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
    }, null, 44, cp),
    m("view", {
      class: L(["nut-input-number__icon nut-input-number__right", { "nut-input-number__icon--disabled": !e.addAllow() }]),
      onClick: t[4] || (t[4] = (...i) => e.add && e.add(...i))
    }, [
      _(e.$slots, "right-icon", {}, () => [
        oe(r, {
          width: e.pxCheck(e.buttonSize),
          height: e.pxCheck(e.buttonSize)
        }, null, 8, ["width", "height"])
      ])
    ], 2)
  ], 2);
}
const an = /* @__PURE__ */ K(up, [["render", dp]]);
function Ln(e, t, n) {
  const s = e.indexOf(t);
  return s === -1 ? e : t === "-" && s !== 0 ? e.slice(0, s) : e.slice(0, s + 1) + e.slice(s).replace(n, "");
}
function fp(e, t = !0, n = !0) {
  t ? e = Ln(e, ".", /\./g) : e = e.split(".")[0], n ? e = Ln(e, "-", /-/g) : e = e.replace(/-/, "");
  const s = t ? /[^-0-9.]/g : /[^-0-9]/g;
  return e.replace(s, "");
}
function pp(e) {
  return e === "number" ? {
    type: "text",
    inputmode: "decimal"
  } : e === "digit" ? {
    type: "tel",
    inputmode: "numeric"
  } : { type: e };
}
const { componentName: mp, create: hp } = Y("input"), gp = hp({
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
  components: { MaskClose: ya },
  emits: ["update:modelValue", "blur", "focus", "clear", "keypress", "click", "clickInput", "confirm"],
  expose: ["focus", "blur", "select"],
  setup(e, { emit: t }) {
    const n = Ze(Xe(e, "disabled")), s = z(!1), o = z(), a = () => {
      var C;
      return String((C = e.modelValue) != null ? C : "");
    }, l = (C) => be("input", G({}, pp(C))), r = ce({
      focused: !1,
      validateFailed: !1,
      // 校验失败
      validateMessage: ""
      // 校验信息
    }), i = D(() => {
      const C = mp;
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
        C = fp(C, O, O);
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
      e.maxLength && P.length > Number(e.maxLength) && (P = P.slice(0, Number(e.maxLength))), v(a(), "onBlur"), t("blur", C);
    }, $ = (C) => {
      C.stopPropagation(), !n.value && (t("update:modelValue", "", C), t("clear", "", C));
    }, b = () => {
      r.validateFailed && (r.validateFailed = !1, r.validateMessage = "");
    }, c = (C) => {
      n.value || t("clickInput", C);
    }, y = (C) => {
      t("click", C);
    }, h = ({ target: C }) => {
      C.composing = !0;
    }, w = ({ target: C }) => {
      C.composing && (C.composing = !1, C.dispatchEvent(new Event("input")));
    };
    return Q(
      () => e.modelValue,
      () => {
        v(a()), b();
      }
    ), ve(() => {
      v(a(), e.formatTrigger);
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
      clear: $,
      startComposing: h,
      endComposing: w,
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
      getModelValue: a
    };
  }
}), yp = { class: "nut-input-value" }, vp = { class: "nut-input-inner" }, $p = {
  key: 0,
  class: "nut-input-left-box"
}, bp = { class: "nut-input-box" }, wp = {
  key: 0,
  class: "nut-input-word-limit"
}, kp = { class: "nut-input-word-num" }, Cp = { class: "nut-input-right-box" };
function Sp(e, t, n, s, o, a) {
  const l = W("MaskClose");
  return u(), f("view", {
    class: L(e.classes),
    onClick: t[1] || (t[1] = (...r) => e.onClick && e.onClick(...r))
  }, [
    m("view", yp, [
      m("view", vp, [
        e.$slots.left ? (u(), f("view", $p, [
          _(e.$slots, "left")
        ])) : N("", !0),
        m("view", bp, [
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
          e.showWordLimit && e.maxLength ? (u(), f("view", wp, [
            m("span", kp, E(e.getModelValue() ? e.getModelValue().length : 0), 1),
            ge("/" + E(e.maxLength), 1)
          ])) : N("", !0)
        ]),
        e.clearable && !e.readonly ? Ce((u(), f("view", {
          key: 1,
          class: "nut-input-clear-box",
          onClick: t[0] || (t[0] = (...r) => e.clear && e.clear(...r))
        }, [
          _(e.$slots, "clear", {}, () => [
            oe(l, wt({ class: "nut-input-clear" }, e.$attrs, {
              size: e.clearSize,
              width: e.clearSize,
              height: e.clearSize
            }), null, 16, ["size", "width", "height"])
          ])
        ], 512)), [
          [Ne, (e.active || e.showClearIcon) && e.getModelValue().length > 0]
        ]) : N("", !0),
        m("view", Cp, [
          _(e.$slots, "right")
        ])
      ])
    ])
  ], 2);
}
const Tp = /* @__PURE__ */ K(gp, [["render", Sp]]), ko = Symbol("nut-radio"), { componentName: Je, create: Np } = Y("radio"), Co = Np({
  components: {
    CheckNormal: jt,
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
    const n = Ze(Xe(e, "disabled")), { size: s } = he(e);
    let o = Me(ko, null);
    const a = D(() => o.label.value === e.label), l = D(() => n.value ? "nut-radio__icon--disable" : a.value ? "nut-radio__icon" : "nut-radio__icon--unchecked"), r = () => {
      const { iconSize: g } = e, k = {
        CheckNormal: t.icon ? t.icon : jt,
        Checked: t.checkedIcon ? t.checkedIcon : kn
      }, $ = a.value ? k.Checked : k.CheckNormal, b = Be(g);
      return be($, {
        width: b,
        height: b,
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
          class: `${Je}__button ${a.value && `${Je}__button--active`} ${Je}__button--${s.value} ${e.disabled ? `${Je}__button--disabled` : ""}`
        },
        (g = t.default) == null ? void 0 : g.call(t)
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
}), { componentName: En, create: Dp } = Y("radio-group"), So = Dp({
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
    return Le(ko, {
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
          class: `${En} ${En}--${e.direction}`
        },
        (o = n.default) == null ? void 0 : o.call(n)
      );
    };
  }
}), { create: _p } = Y("rate"), Ip = _p({
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
    const s = Ze(Xe(e, "disabled")), o = z([]), a = (v) => {
      t("update:modelValue", v), t("change", v);
    }, l = (v, g) => {
      if (s.value || e.readonly)
        return;
      let k = 0;
      g === 1 && e.modelValue === g ? k = 0 : (k = g, e.allowHalf && v == 2 && (k -= 0.5)), a(k);
    }, r = (v, g, k) => {
      let $ = 0;
      for (let b = g.value.length - 1; b >= 0; b--) {
        const c = g.value[b];
        if (v > c.offsetLeft) {
          k ? $ = b + (v > c.offsetLeft + c.clientWidth / 2 ? 1 : 0.5) : $ = b + 1;
          break;
        }
      }
      return $;
    }, i = xe(), p = {
      onTouchStart(v) {
        !e.touchable || e.readonly || i.start(v);
      },
      onTouchMove(v) {
        e.touchable && (i.move(v), i.isHorizontal() && o.value && (v.preventDefault(), a(r(i.moveX.value, o, e.allowHalf))));
      }
    }, d = Math.random().toString(36).slice(-8);
    return de(G({}, p), {
      onClick: l,
      pxCheck: Be,
      rateRefs: o,
      refRandomId: d,
      renderIcon: ft,
      slots: n,
      disabled: s
    });
  }
}), Bp = ["id"], Mp = { class: "nut-rate-item__icon--full" }, Lp = {
  key: 0,
  class: "nut-rate-item__icon--half"
}, Ep = {
  key: 1,
  class: "nut-rate-item__icon--half"
};
function Pp(e, t, n, s, o, a) {
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
      m("view", Mp, [
        (u(), ee(Ae(
          e.renderIcon(e.customIcon, {
            width: e.size,
            height: e.size,
            size: e.size,
            color: l <= Number(e.modelValue) ? e.activeColor : e.voidColor
          })
        ), {
          class: L(["nut-rate-item__icon", { "nut-rate-item__icon--disabled": e.disabled || l > Number(e.modelValue) }]),
          onClick: (r) => e.onClick(1, l)
        }, null, 8, ["class", "onClick"]))
      ]),
      e.allowHalf && Number(e.modelValue) + 1 > l ? (u(), f("view", Lp, [
        (u(), ee(Ae(
          e.renderIcon(e.customIcon, {
            width: e.size,
            height: e.size,
            size: e.size,
            color: l <= Number(e.modelValue) + 1 ? e.activeColor : e.voidColor
          })
        ), {
          class: "nut-rate-item__icon",
          onClick: (r) => e.onClick(2, l)
        }, null, 8, ["onClick"]))
      ])) : e.allowHalf && Number(e.modelValue) + 1 < l ? (u(), f("view", Ep, [
        (u(), ee(Ae(e.renderIcon(e.customIcon, { width: e.size, height: e.size, size: e.size, color: e.voidColor })), {
          class: "nut-rate-item__icon nut-rate-item__icon--disabled",
          onClick: (r) => e.onClick(2, l)
        }, null, 8, ["onClick"]))
      ])) : N("", !0)
    ], 12, Bp))), 128))
  ], 32);
}
const To = /* @__PURE__ */ K(Ip, [["render", Pp]]), { create: Ap } = Y("short-password"), zp = "NutShortPassword", Vp = Ap({
  components: {
    NutPopup: Ee,
    Tips: Qn
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
    const n = ke(zp), s = z(e.modelValue), o = D(() => i(Number(e.length))), a = z(e.visible), l = (d) => {
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
        s.value = d, String(d).length === o.value && t("complete", d);
      }
    );
    const r = () => {
      t("update:visible", !1), t("close");
    }, i = (d) => Math.min(Math.max(4, d), 6);
    return {
      comLen: o,
      realInput: s,
      onTouchStart: l,
      range: i,
      close: r,
      onTips: () => {
        t("tips");
      },
      show: a,
      translate: n
    };
  }
}), Op = { class: "nut-short-password-title" }, Hp = { class: "nut-short-password-subtitle" }, Rp = { class: "nut-short-password-wrapper" }, Fp = {
  key: 0,
  class: "nut-short-password__item-icon"
}, Wp = { class: "nut-short-password__message" }, Yp = { class: "nut-short-password--error" }, jp = {
  key: 0,
  class: "nut-short-password--forget"
};
function Up(e, t, n, s, o, a) {
  const l = W("tips"), r = W("nut-popup");
  return u(), f("view", null, [
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
        m("view", Op, E(e.title || e.translate("title")), 1),
        m("view", Hp, E(e.desc || e.translate("desc")), 1),
        m("div", Rp, [
          m("view", {
            class: "nut-short-password__list",
            onTouchstart: t[0] || (t[0] = (...i) => e.onTouchStart && e.onTouchStart(...i))
          }, [
            (u(!0), f(x, null, ie(new Array(e.comLen), (i, p) => (u(), f("view", {
              key: p,
              class: "nut-short-password__item"
            }, [
              String(e.realInput).length > p ? (u(), f("view", Fp)) : N("", !0)
            ]))), 128))
          ], 32)
        ]),
        m("view", Wp, [
          m("view", Yp, E(e.errorMsg), 1),
          e.tips || e.translate("tips") ? (u(), f("view", jp, [
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
const Kp = /* @__PURE__ */ K(Vp, [["render", Up]]), { create: Xp } = Y("textarea"), qp = "NutTextarea", Zp = Xp({
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
    const n = Ze(Xe(e, "disabled")), s = ke(qp), o = z(), a = D(() => {
      const $ = "nut-textarea";
      return {
        [$]: !0,
        [`${$}--disabled`]: n.value
      };
    });
    ve(() => {
      e.modelValue && i(String(e.modelValue)), e.autosize && Se(r);
    });
    const l = D(() => ({
      textAlign: e.textAlign
      // resize: props.autosize ? 'vertical' : 'none'
    })), r = () => {
      let $ = o.value;
      $.style.height = "auto";
      let b = $.scrollHeight;
      if (typeof e.autosize == "object") {
        const { maxHeight: c, minHeight: y } = e.autosize;
        c !== void 0 && (b = Math.min(b, c)), y !== void 0 && (b = Math.max(b, y));
      }
      b && ($.style.height = b + "px");
    };
    Q(
      () => e.modelValue,
      () => {
        e.autosize && Se(r);
      }
    );
    const i = ($, b) => {
      e.maxLength && $.length > Number(e.maxLength) && ($ = $.substring(0, Number(e.maxLength))), t("update:modelValue", $, b), t("change", $, b);
    };
    return {
      textareaRef: o,
      classes: a,
      styles: l,
      disabled: n,
      change: ($) => {
        if (!$.target.composing) {
          const b = $.target;
          let c = b.value;
          e.maxLength && c.length > Number(e.maxLength) && (c = c.slice(0, Number(e.maxLength))), i(b.value, $);
        }
      },
      focus: ($) => {
        n.value || e.readonly || t("focus", $);
      },
      blur: ($) => {
        if (n.value || e.readonly)
          return;
        let c = $.target.value;
        i(c, $), t("blur", { value: c, event: $ });
      },
      translate: s,
      startComposing: ({ target: $ }) => {
        $.composing = !0;
      },
      endComposing: ({ target: $ }) => {
        $.composing && ($.composing = !1, $.dispatchEvent(new Event("input")));
      }
    };
  }
}), Gp = ["rows", "disabled", "readonly", "value", "maxlength", "placeholder", "autofocus"], Jp = {
  key: 0,
  class: "nut-textarea__limit"
};
function Qp(e, t, n, s, o, a) {
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
    }, null, 44, Gp),
    e.limitShow ? (u(), f("view", Jp, E(e.modelValue ? e.modelValue.length : 0) + "/" + E(e.maxLength), 1)) : N("", !0)
  ], 2);
}
const xp = /* @__PURE__ */ K(Zp, [["render", Qp]]);
class e1 {
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
let t1 = class {
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
      (s = t.onStart) == null || s.call(t, t), t.beforeXhrUpload ? t.beforeXhrUpload(n, t) : n.send(t.formData);
    } else
      console.warn("浏览器不支持 XMLHttpRequest");
  }
};
class n1 {
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
const { create: o1 } = Y("progress"), l1 = o1({
  components: { Checked: qn },
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
    const t = !!ot().default, n = D(() => {
      if (e.strokeWidth)
        return e.strokeWidth + "px";
    }), s = D(() => Number(e.percentage) >= 100 ? 100 : Number(e.percentage)), o = D(() => ({
      width: s.value + "%",
      background: e.strokeColor || ""
    })), a = D(() => ({
      color: e.textColor || ""
    }));
    return {
      height: n,
      percentage: s,
      bgStyle: o,
      textStyle: a,
      slotDefault: t
    };
  }
}), s1 = { class: "nut-progress" };
function a1(e, t, n, s, o, a) {
  const l = W("Checked");
  return u(), f("div", s1, [
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
        _(e.$slots, "default")
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
      }, E(e.percentage) + E(e.isShowPercentage ? "%" : ""), 5)) : e.status === "icon" ? _(e.$slots, "icon-name", { key: 1 }, () => [
        oe(l, {
          width: "15px",
          height: "15px",
          color: "#439422"
        })
      ]) : N("", !0)
    ], 4)) : N("", !0)
  ]);
}
const No = /* @__PURE__ */ K(l1, [["render", a1]]), { create: r1 } = Y("uploader"), i1 = "NutUploader", u1 = r1({
  components: {
    NutProgress: No,
    Photograph: Va,
    Failure: Jn,
    Loading: st,
    Del: Zn,
    Link: Xs
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
    const n = Ze(Xe(e, "disabled")), s = ke(i1), o = z(e.fileList), a = z([]);
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
    }, r = (h) => {
      h.value = "";
    }, i = (h) => {
      t("fileItemClick", { fileItem: h });
    }, p = (h, w) => {
      const S = new e1();
      S.url = e.url, S.formData = h.formData, S.timeout = e.timeout * 1, S.method = e.method, S.xhrState = e.xhrState, S.headers = e.headers, S.withCredentials = e.withCredentials, S.beforeXhrUpload = e.beforeXhrUpload;
      try {
        S.sourceFile = h.formData.get(e.name);
      } catch (B) {
        console.warn("[NutUI] <Uploader> formData.get(name)", B);
      }
      S.onStart = (B) => {
        h.status = "ready", h.message = s("readyUpload"), d(w), t("start", B);
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
      let I = new t1(S);
      e.autoUpload ? I.upload() : a.value.push(
        new Promise((B) => {
          B(I);
        })
      );
    }, d = (h = -1) => {
      h > -1 ? a.value.splice(h, 1) : (a.value = [], o.value = [], t("update:fileList", o.value));
    }, v = () => {
      Promise.all(a.value).then((h) => {
        h.forEach((w) => w.upload());
      });
    }, g = (h) => {
      h.forEach((w, S) => {
        const I = new FormData();
        for (const [M, C] of Object.entries(e.data))
          I.append(M, C);
        I.append(e.name, w);
        const B = ce(new n1());
        if (B.name = w.name, B.status = "ready", B.type = w.type, B.formData = I, B.message = s("waitingUpload"), p(B, S), e.isPreview && w.type.includes("image")) {
          const M = new FileReader();
          M.onload = (C) => {
            B.url = C.target.result, o.value.push(B);
          }, M.readAsDataURL(w);
        } else
          o.value.push(B);
      });
    }, k = (h) => {
      const w = e.maximum * 1, S = e.maximize * 1, I = new Array();
      h = h.filter((M) => M.size > S ? (I.push(M), !1) : !0), I.length && t("oversize", I);
      let B = h.length + o.value.length;
      return B > w && h.splice(h.length - (B - w)), h;
    }, $ = (h, w) => {
      o.value.splice(w, 1), t("delete", {
        file: h,
        fileList: o.value,
        index: w
      });
    }, b = (h, w) => {
      n.value || (d(w), Qt(e.beforeDelete, {
        args: [h, o.value],
        done: () => $(h, w)
      }));
    }, c = (h) => {
      if (e.disabled || n.value)
        return;
      const w = h.target;
      let { files: S } = w;
      e.beforeUpload ? e.beforeUpload(S).then((I) => y(I)) : y(S), t("change", {
        fileList: o.value,
        event: h
      }), e.clearInput && r(w);
    }, y = (h) => {
      const w = k(new Array().slice.call(h));
      g(w);
    };
    return {
      onChange: c,
      onDelete: b,
      fileList: o,
      fileItemClick: i,
      clearUploadQueue: d,
      submit: v,
      renderInput: l
    };
  }
}), c1 = { class: "nut-uploader" }, d1 = {
  key: 0,
  class: "nut-uploader__slot"
}, f1 = {
  key: 0,
  class: "nut-uploader__preview-img"
}, p1 = {
  key: 0,
  class: "nut-uploader__preview__progress"
}, m1 = { class: "nut-uploader__preview__progress__msg" }, h1 = ["onClick"], g1 = ["src", "onClick"], y1 = {
  key: 3,
  class: "nut-uploader__preview-img__file"
}, v1 = ["onClick"], $1 = { class: "file__name_tips" }, b1 = { class: "tips" }, w1 = {
  key: 1,
  class: "nut-uploader__preview-list"
}, k1 = ["onClick"], C1 = { class: "file__name_tips" };
function S1(e, t, n, s, o, a) {
  const l = W("Failure"), r = W("Loading"), i = W("Link"), p = W("Del"), d = W("nut-progress"), v = W("Photograph");
  return u(), f("view", c1, [
    e.$slots.default ? (u(), f("view", d1, [
      _(e.$slots, "default"),
      Number(e.maximum) - e.fileList.length ? (u(), ee(Ae(e.renderInput), {
        key: 0,
        onChange: e.onChange
      }, null, 40, ["onChange"])) : N("", !0)
    ])) : N("", !0),
    (u(!0), f(x, null, ie(e.fileList, (g, k) => {
      var $;
      return u(), f("view", {
        key: g.uid,
        class: L(["nut-uploader__preview", [e.listType]])
      }, [
        e.listType == "picture" && !e.$slots.default ? (u(), f("view", f1, [
          g.status != "success" ? (u(), f("view", p1, [
            g.status != "ready" ? (u(), f(x, { key: 0 }, [
              g.status == "error" ? (u(), ee(l, {
                key: 0,
                color: "#fff"
              })) : (u(), ee(r, {
                key: 1,
                name: "loading",
                color: "#fff"
              }))
            ], 64)) : N("", !0),
            m("view", m1, E(g.message), 1)
          ])) : N("", !0),
          e.isDeletable ? (u(), f("view", {
            key: 1,
            class: "close",
            onClick: (b) => e.onDelete(g, k)
          }, [
            _(e.$slots, "delete-icon", {}, () => [
              oe(l)
            ])
          ], 8, h1)) : N("", !0),
          ($ = g == null ? void 0 : g.type) != null && $.includes("image") && g.url ? (u(), f("img", {
            key: 2,
            class: "nut-uploader__preview-img__c",
            src: g.url,
            onClick: (b) => e.fileItemClick(g)
          }, null, 8, g1)) : (u(), f("view", y1, [
            m("view", {
              class: "nut-uploader__preview-img__file__name",
              onClick: (b) => e.fileItemClick(g)
            }, [
              m("view", $1, E(g.name), 1)
            ], 8, v1)
          ])),
          m("view", b1, E(g.name), 1)
        ])) : e.listType == "list" ? (u(), f("view", w1, [
          m("view", {
            class: L(["nut-uploader__preview-img__file__name", [g.status]]),
            onClick: (b) => e.fileItemClick(g)
          }, [
            oe(i, { class: "nut-uploader__preview-img__file__link" }),
            m("view", C1, E(g.name), 1),
            e.isDeletable ? (u(), ee(p, {
              key: 0,
              color: "#808080",
              class: "nut-uploader__preview-img__file__del",
              onClick: (b) => e.onDelete(g, k)
            }, null, 8, ["onClick"])) : N("", !0)
          ], 10, k1),
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
      _(e.$slots, "upload-icon", {}, () => [
        oe(v, { color: "#808080" })
      ]),
      (u(), ee(Ae(e.renderInput), { onChange: e.onChange }, null, 40, ["onChange"]))
    ], 2)) : N("", !0)
  ]);
}
const T1 = /* @__PURE__ */ K(u1, [["render", S1]]), { create: N1 } = Y("number-keyboard"), D1 = "NutNumberKeyboard", _1 = N1({
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
    const n = ke(D1), s = z(void 0), o = z(e.visible), a = z();
    function l() {
      const { customKey: c } = e;
      let y = {
        id: "lock",
        type: "lock"
      }, h = Array.isArray(c) ? c : [c];
      return h.length === 1 && (y = {
        id: h[0],
        type: "custom"
      }), [...r(), y, { id: 0, type: "number" }, { id: "delete", type: "delete" }];
    }
    function r() {
      const c = [];
      for (let y = 1; y <= 9; y++)
        c.push({ id: y, type: "number" });
      return e.randomKeys ? c.sort(() => Math.random() > 0.5 ? 1 : -1) : c;
    }
    function i() {
      const c = r(), { customKey: y } = e;
      let h = Array.isArray(y) ? y : [y];
      return h.length > 2 && (h = [h[0], h[1]]), h.length == 2 && e.title && e.type != "rightColumn" && (h = [h[0]]), h.length === 1 ? e.title && e.type != "rightColumn" ? c.push({ id: h[0], type: "custom" }, { id: 0, type: "number" }, { id: "delete", type: "delete" }) : c.push({ id: 0, type: "number" }, { id: h[0], type: "custom" }) : h.length === 2 && c.push(
        { id: h[0], type: "custom" },
        { id: 0, type: "number" },
        { id: h[1], type: "custom" }
      ), c;
    }
    const p = D(() => e.type == "rightColumn" || e.title != "" ? i() : l()), d = () => {
      e.visible && t("blur");
    }, v = (c) => {
      const y = a.value;
      y && !y.contains(c.target) && d();
    };
    Q(
      () => e.visible,
      (c) => {
        o.value = c, c ? window.addEventListener("touchstart", v, !1) : window.removeEventListener("touchstart", v, !1);
      }
    );
    function g(c, y) {
      y.stopPropagation(), s.value = c.id, (c.type == "number" || c.type == "custom") && (t("input", c.id), e.modelValue.length < +e.maxlength && t("update:modelValue", e.modelValue + c.id)), c.type == "lock" && b(), c.type == "delete" && (t("delete"), t("update:modelValue", e.modelValue.slice(0, e.modelValue.length - 1)));
    }
    function k(c) {
      c.stopPropagation();
    }
    function $(c) {
      c.preventDefault(), s.value = void 0;
    }
    function b() {
      t("update:visible", !1), t("close");
    }
    return {
      clickKeyIndex: s,
      defaultKey: l,
      closeBoard: b,
      onTouchEnd: $,
      onTouchMove: k,
      onTouchstart: g,
      keysList: p,
      genCustomKeys: i,
      getBasicKeys: r,
      root: a,
      show: o,
      translate: n
    };
  }
}), I1 = { ref: "root" }, B1 = { class: "nut-number-keyboard" }, M1 = {
  key: 0,
  class: "nut-number-keyboard__header"
}, L1 = { class: "nut-number-keyboard__title" }, E1 = { class: "nut-number-keyboard__body" }, P1 = { class: "nut-number-keyboard__keys" }, A1 = ["onTouchstart"], z1 = {
  key: 1,
  src: "https://img11.360buyimg.com/imagetools/jfs/t1/146371/38/8485/738/5f606425Eca239740/14f4b4f5f20d8a68.png"
}, V1 = {
  key: 2,
  src: "https://img11.360buyimg.com/imagetools/jfs/t1/129395/8/12735/2030/5f61ac37E70cab338/fb477dc11f46056c.png"
}, O1 = {
  key: 0,
  class: "nut-number-keyboard__sidebar"
}, H1 = { class: "nut-key__wrapper" }, R1 = /* @__PURE__ */ m("img", { src: "https://img11.360buyimg.com/imagetools/jfs/t1/129395/8/12735/2030/5f61ac37E70cab338/fb477dc11f46056c.png" }, null, -1), F1 = [
  R1
];
function W1(e, t, n, s, o, a) {
  const l = W("nut-popup");
  return u(), f("div", I1, [
    oe(l, {
      visible: e.show,
      "onUpdate:visible": t[7] || (t[7] = (r) => e.show = r),
      position: "bottom",
      "pop-class": e.popClass,
      overlay: !1,
      "lock-scroll": e.lockScroll,
      "teleport-disable": !1
    }, {
      default: ne(() => [
        m("div", B1, [
          e.title ? (u(), f("div", M1, [
            m("h3", L1, E(e.title), 1),
            e.type == "default" ? (u(), f("span", {
              key: 0,
              class: "nut-number-keyboard__close",
              onClick: t[0] || (t[0] = (r) => e.closeBoard())
            }, E(e.translate("done")), 1)) : N("", !0)
          ])) : N("", !0),
          m("div", E1, [
            m("div", P1, [
              (u(!0), f(x, null, ie(e.keysList, (r) => (u(), f("div", {
                key: "key" + r.id,
                class: L([
                  "nut-key__wrapper",
                  {
                    "nut-key__wrapper--wider": r.id == 0 && e.type == "rightColumn" && Array.isArray(e.customKey) && e.customKey.length == 1
                  }
                ])
              }, [
                m("div", {
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
                  r.type == "number" || r.type == "custom" ? (u(), f(x, { key: 0 }, [
                    ge(E(r.id), 1)
                  ], 64)) : N("", !0),
                  r.type == "lock" ? (u(), f("img", z1)) : N("", !0),
                  r.type == "delete" ? (u(), f("img", V1)) : N("", !0)
                ], 42, A1)
              ], 2))), 128))
            ]),
            e.type == "rightColumn" ? (u(), f("div", O1, [
              m("div", H1, [
                m("div", {
                  class: L(["nut-key", { active: e.clickKeyIndex == "delete" }]),
                  onTouchstart: t[3] || (t[3] = (r) => e.onTouchstart({ id: "delete", type: "delete" }, r)),
                  onTouchmove: t[4] || (t[4] = (r) => e.onTouchMove(r)),
                  onTouchend: t[5] || (t[5] = (...r) => e.onTouchEnd && e.onTouchEnd(...r))
                }, F1, 34)
              ]),
              m("div", {
                class: "nut-key__wrapper nut-key__wrapper--finish",
                onClick: t[6] || (t[6] = (r) => e.closeBoard())
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
const Y1 = /* @__PURE__ */ K(_1, [["render", W1]]), rn = /* @__PURE__ */ Ue({
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
    const s = e, o = n, { children: a, linkChildren: l } = xn(sn);
    l({ props: s });
    const r = D(() => ce({}));
    Le("formErrorTip", r);
    const i = () => {
      Object.keys(r.value).forEach((b) => {
        r.value[b] = "";
      });
    }, p = () => {
      i();
    };
    Q(
      () => s.modelValue,
      () => {
        i();
      },
      { immediate: !0 }
    );
    const d = () => {
      const b = [];
      return a.forEach((c) => {
        b.push({
          prop: c == null ? void 0 : c.prop,
          rules: (c == null ? void 0 : c.rules) || []
        });
      }), b;
    }, v = (b) => {
      b.message && o("validate", b), r.value[b.prop] = b.message;
    }, g = (b) => Ge(this, null, function* () {
      const { rules: c = [], prop: y } = b, h = (M) => new Promise((C, T) => {
        try {
          v(M), C(M);
        } catch (P) {
          T(P);
        }
      });
      y || console.warn("[NutUI] <FormItem> 使用 rules 校验规则时 , 必须设置 prop 参数");
      const w = Yt(s.modelValue, y || "");
      v({ prop: y, message: "" });
      const S = s.rules || {}, I = [...(S == null ? void 0 : S[y]) || [], ...c];
      for (; I.length; ) {
        const B = I.shift(), { validator: C } = B, T = Ft(B, ["validator"]), { required: P, regex: O, message: X } = T, Z = { prop: y, message: X || "" };
        if (P && !w && w !== 0 || O && !O.test(String(w)))
          return h(Z);
        if (C) {
          const le = C(w, T);
          if (Yn(le))
            try {
              if ((yield le) === !1)
                return h(Z);
            } catch (j) {
              return h({ prop: y, message: j });
            }
          else if (!le)
            return h(Z);
        }
      }
      return Promise.resolve(!0);
    }), k = (b = "") => new Promise((c, y) => {
      try {
        const w = d().map((S) => b && b !== S.prop ? Promise.resolve(!0) : g(S));
        Promise.all(w).then((S) => {
          S = S.filter((B) => B !== !0);
          const I = { valid: !0, errors: [] };
          S.length && (I.valid = !1, I.errors = S), c(I);
        });
      } catch (h) {
        y(h);
      }
    });
    return t({
      submit: () => (k(), !1),
      reset: p,
      validate: k
    }), (b, c) => (u(), f("form", {
      class: "nut-form",
      action: "#",
      onSubmit: De(() => !1, ["prevent"])
    }, [
      oe(to, null, {
        default: ne(() => [
          _(b.$slots, "default")
        ]),
        _: 3
      })
    ], 32));
  }
});
at(rn);
const j1 = { class: "nut-cell__value nut-form-item__body" }, un = /* @__PURE__ */ Ue({
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
    const t = e, { parent: n } = nn(sn), s = D(() => {
      var g;
      const d = (g = n.props) == null ? void 0 : g.rules;
      let v = !1;
      for (const k in d)
        Object.prototype.hasOwnProperty.call(d, k) && k === t.prop && Array.isArray(d[k]) && (v = d[k].some(($) => $.required));
      return t.required || t.rules.some((k) => k.required) || v;
    }), o = D(() => {
      const d = n.props.labelPosition, v = t.labelPosition ? t.labelPosition : d;
      return v !== "left" ? `nut-form-item__${v}` : "";
    }), a = D(() => {
      const d = n.props.starPosition, v = t.starPosition ? t.starPosition : d;
      return v !== "left" ? `nut-form-item__star-${v}` : "";
    }), l = Me("formErrorTip"), r = D(() => ({
      width: Be(t.labelWidth),
      textAlign: t.labelAlign
    })), i = D(() => ({
      textAlign: t.bodyAlign
    })), p = D(() => ({
      textAlign: t.errorMessageAlign
    }));
    return (d, v) => (u(), ee(eo, {
      class: L(["nut-form-item", [{ error: Re(l)[d.prop], line: d.showErrorLine }, d.$attrs.class, o.value]]),
      style: A(d.$attrs.style)
    }, {
      default: ne(() => [
        d.label || d.$slots.label ? (u(), f("view", {
          key: 0,
          class: L(["nut-cell__title nut-form-item__label", { required: s.value, [a.value]: a.value }]),
          style: A(r.value)
        }, [
          _(d.$slots, "label", {}, () => [
            ge(E(d.label), 1)
          ])
        ], 6)) : N("", !0),
        m("view", j1, [
          m("view", {
            class: "nut-form-item__body__slots",
            style: A(i.value)
          }, [
            _(d.$slots, "default")
          ], 4),
          Re(l)[d.prop] && d.showErrorMessage ? (u(), f("view", {
            key: 0,
            class: "nut-form-item__body__tips",
            style: A(p.value)
          }, E(Re(l)[d.prop]), 5)) : N("", !0)
        ])
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
});
at(un);
const Do = Symbol("nut-swipe"), { create: U1 } = Y("swipe"), K1 = U1({
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
      var I;
      return ((I = S.value) == null ? void 0 : I.getBoundingClientRect().width) || 0;
    }, s = z(!1), o = z(), a = D(() => n(o)), l = z(), r = D(() => n(l)), i = Me(Do, null);
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
      i && i.update(e.name), p.value = !0, S && (g.offset = S === "left" ? -r.value : a.value), t("open", {
        name: e.name,
        position: d || S
      });
    }, $ = () => {
      g.offset = 0, p.value && (p.value = !1, t("close", {
        name: e.name,
        position: d
      }));
    }, b = (S, I, B) => {
      B ? S.stopPropagation() : $(), t("click", I);
    }, c = D(() => ({
      transform: `translate3d(${g.offset}px, 0, 0)`
    })), y = (S) => {
      d = S > 0 ? "right" : "left";
      let I = S;
      switch (d) {
        case "left":
          p.value && v === d ? I = -r.value : I = Math.abs(S) > r.value ? -r.value : S;
          break;
        case "right":
          p.value && v === d ? I = a.value : I = Math.abs(S) > a.value ? a.value : S;
          break;
      }
      g.offset = I;
    }, h = xe();
    return de(G({
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
          switch (g.moving = !1, v = d, d) {
            case "left":
              Math.abs(g.offset) <= r.value / 2 ? $() : (g.offset = -r.value, k());
              break;
            case "right":
              Math.abs(g.offset) <= a.value / 2 ? $() : (g.offset = a.value, k());
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
      close: $,
      onClick: b,
      lockClick: s
    });
  }
});
function X1(e, t, n, s, o, a) {
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
      _(e.$slots, "left")
    ], 512),
    m("view", {
      class: "nut-swipe__content",
      onClick: t[1] || (t[1] = (l) => e.onClick(l, "content", e.lockClick))
    }, [
      _(e.$slots, "default")
    ]),
    m("view", {
      ref: "rightRef",
      class: "nut-swipe__right",
      onClick: t[2] || (t[2] = (l) => e.onClick(l, "right", !0))
    }, [
      _(e.$slots, "right")
    ], 512)
  ], 36);
}
const _o = /* @__PURE__ */ K(K1, [["render", X1]]), { create: q1 } = Y("swipe-group"), Z1 = q1({
  props: {
    lock: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = z(null), n = z("");
    return Le(Do, {
      update: (o) => {
        n.value = o;
      },
      lock: e.lock,
      name: n
    }), { swipeGroupRef: t };
  }
}), G1 = {
  ref: "swipeGroupRef",
  class: "nut-swipe-group"
};
function J1(e, t, n, s, o, a) {
  return u(), f("div", G1, [
    _(e.$slots, "default")
  ], 512);
}
const Q1 = /* @__PURE__ */ K(Z1, [["render", J1]]), { create: x1 } = Y("action-sheet"), em = x1({
  components: {
    NutPopup: Ee,
    Loading: st
  },
  props: de(G({}, Nt), {
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
      slotDefault: !!ot().default,
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
}), tm = { class: "nut-action-sheet" }, nm = {
  key: 0,
  class: "nut-action-sheet__title"
}, om = { key: 1 }, lm = {
  key: 0,
  class: "nut-action-sheet__item nut-action-sheet__desc"
}, sm = {
  key: 1,
  class: "nut-action-sheet__menu"
}, am = ["onClick"], rm = { key: 1 }, im = { class: "nut-action-sheet__subdesc" };
function um(e, t, n, s, o, a) {
  const l = W("Loading"), r = W("nut-popup");
  return u(), ee(r, {
    visible: e.visible,
    position: "bottom",
    round: "",
    "close-on-click-overlay": e.closeAbled,
    "lock-scroll": e.lockScroll,
    "z-index": e.zIndex,
    onClickOverlay: e.close
  }, {
    default: ne(() => [
      m("view", tm, [
        e.title ? (u(), f("view", nm, E(e.title), 1)) : N("", !0),
        _(e.$slots, "default"),
        e.slotDefault ? N("", !0) : (u(), f("view", om, [
          e.description ? (u(), f("view", lm, E(e.description), 1)) : N("", !0),
          e.menuItems.length ? (u(), f("view", sm, [
            (u(!0), f(x, null, ie(e.menuItems, (i, p) => (u(), f("view", {
              key: p,
              class: L(["nut-action-sheet__item", {
                "nut-action-sheet__item--disabled": i.disable,
                "nut-action-sheet__item--loading": i.loading
              }]),
              style: A({ color: e.isHighlight(i) || i.color }),
              onClick: (d) => e.chooseItem(i, p)
            }, [
              i.loading ? (u(), ee(l, { key: 0 })) : (u(), f("view", rm, E(i[e.optionTag]), 1)),
              m("view", im, E(i[e.optionSubTag]), 1)
            ], 14, am))), 128))
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
const cm = /* @__PURE__ */ K(em, [["render", um]]), { componentName: dm, create: fm } = Y("backtop"), pm = fm({
  components: {
    Top: Ar
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
      [dm]: !0,
      show: n.backTop
    })), o = D(() => ({
      right: `${e.right}px`,
      bottom: `${e.bottom}px`,
      zIndex: e.zIndex
    }));
    function a() {
      n.scrollEl instanceof Window ? n.scrollTop = n.scrollEl.pageYOffset : n.scrollTop = n.scrollEl.scrollTop, n.backTop = n.scrollTop >= e.distance;
    }
    function l(g = 0) {
      n.scrollEl instanceof Window ? window.scrollTo(0, g) : n.scrollEl.scrollTop = g;
    }
    function r() {
      let g = Ve(function k() {
        var $ = e.duration - Math.max(0, n.startTime - +/* @__PURE__ */ new Date() + e.duration), b = $ * -n.scrollTop / e.duration + n.scrollTop;
        l(b), g = Ve(k), ($ == e.duration || b == 0) && Nc(g);
      });
    }
    function i() {
      n.scrollEl.addEventListener("scroll", a, !1), n.scrollEl.addEventListener("resize", a, !1);
    }
    function p() {
      n.scrollEl.removeEventListener("scroll", a, !1), n.scrollEl.removeEventListener("resize", a, !1);
    }
    function d(g) {
      n.startTime = +/* @__PURE__ */ new Date(), e.isAnimation && e.duration > 0 ? r() : l(), t("click", g);
    }
    function v() {
      e.elId && document.getElementById(e.elId) && (n.scrollEl = document.getElementById(e.elId)), i();
    }
    return ve(() => {
      e.distance == 0 && (n.backTop = !0), v();
    }), Ke(() => {
      p();
    }), Ct(() => {
      n.keepAlive && (n.keepAlive = !1, v());
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
function mm(e, t, n, s, o, a) {
  const l = W("Top");
  return u(), f("div", {
    class: L(e.classes),
    style: A(e.style),
    onClick: t[0] || (t[0] = De((...r) => e.click && e.click(...r), ["stop"]))
  }, [
    _(e.$slots, "default", {}, () => [
      oe(l, {
        width: "19px",
        height: "19px",
        class: "nut-backtop-main"
      })
    ])
  ], 6);
}
const hm = /* @__PURE__ */ K(pm, [["render", mm]]), { create: gm } = Y("drag"), ym = gm({
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
      n.boundary.left ? +p.style.left.split("px")[0] > n.boundary.left ? (p.style.left = +p.style.left.split("px")[0] - 10 + "px", Ve(() => {
        o(p);
      })) : p.style.left = `${n.boundary.left}px` : +p.style.left.split("px")[0] > 10 ? (p.style.left = +p.style.left.split("px")[0] - 10 + "px", Ve(() => {
        o(p);
      })) : p.style.left = "0px";
    }
    function a(p, d) {
      d - parseInt(p.style.left.split("px")[0]) > 10 ? (p.style.left = parseInt(p.style.left.split("px")[0]) + 10 + "px", Ve(() => {
        a(p, d);
      })) : p.style.left = d + "px";
    }
    function l(p) {
      p.preventDefault();
      const d = p.currentTarget;
      if (p.targetTouches.length === 1) {
        const v = p.targetTouches[0];
        n.nx = v.clientX - n.position.x, n.ny = v.clientY - n.position.y, n.xPum = n.startLeft + n.nx, n.yPum = n.startTop + n.ny;
        const g = n.screenWidth - n.elWidth - n.boundary.right;
        Math.abs(n.xPum) > g ? n.xPum = g : n.xPum <= n.boundary.left && (n.xPum = n.boundary.left), n.yPum < n.boundary.top ? n.yPum = n.boundary.top : n.yPum > n.screenHeight - n.elHeight - n.boundary.bottom && (n.yPum = n.screenHeight - n.elHeight - n.boundary.bottom), e.direction != "y" && (d.style.left = n.xPum + "px"), e.direction != "x" && (d.style.top = n.yPum + "px");
      }
    }
    function r(p) {
      const d = p.currentTarget;
      let g = p.changedTouches[0].clientX;
      const k = n.screenWidth - n.elWidth - n.boundary.right;
      g > k ? g = k : g < n.boundary.left ? g = n.boundary.left : g = g < n.screenWidth / 2 ? n.boundary.left : k, e.direction != "y" && e.attract && (g < n.screenWidth / 2 ? Ve(() => {
        o(d);
      }) : Ve(() => {
        a(d, k);
      })), e.direction != "x" && (d.style.top = n.yPum + "px");
    }
    function i(p) {
      const d = p.currentTarget, v = p.touches[0], g = p.targetTouches[0];
      n.startTop = d.offsetTop, n.startLeft = d.offsetLeft, n.position.x = v.clientX, n.position.y = v.clientY, n.nx = g.clientX - n.position.x, n.ny = g.clientY - n.position.y, n.xPum = n.startLeft + n.nx, n.yPum = n.startTop + n.ny;
    }
    return ve(() => {
      s(), n.boundary = e.boundary;
    }), Ct(() => {
      n.keepAlive && (n.keepAlive = !1);
    }), St(() => {
      n.keepAlive = !0, t.value.removeEventListener("touchstart", i), t.value.removeEventListener("touchmove", l), t.value.removeEventListener("touchend", r);
    }), {
      myDrag: t,
      touchStart: i,
      touchMove: l,
      touchEnd: r
    };
  }
});
function vm(e, t, n, s, o, a) {
  return u(), f("view", {
    ref: "myDrag",
    class: "nut-drag",
    onTouchstart: t[0] || (t[0] = (l) => e.touchStart(l)),
    onTouchmove: t[1] || (t[1] = (l) => e.touchMove(l)),
    onTouchend: t[2] || (t[2] = (l) => e.touchEnd(l))
  }, [
    _(e.$slots, "default")
  ], 544);
}
const $m = /* @__PURE__ */ K(ym, [["render", vm]]), { create: bm } = Y("dialog"), wm = "NutDialog", km = bm({
  inheritAttrs: !1,
  components: {
    NutPopup: Ee,
    NutButton: qe
  },
  props: de(G({}, Nt), {
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
    const n = ke(wm), s = z(e.visible);
    ve(() => {
      e.closeOnPopstate && window.addEventListener("popstate", function() {
        a("page");
      });
    }), Q(
      () => e.visible,
      (d) => {
        s.value = d, d && t("opened");
      }
    );
    const o = (d) => {
      t("update", d), t("update:visible", d);
    }, a = (d) => {
      Qt(e.beforeClose, {
        args: [d],
        done: () => {
          s.value = !1, o(!1), t("closed");
        }
      });
    }, l = () => {
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
      onCancel: l,
      onOk: r,
      showPopup: s,
      onClickOverlay: i,
      contentStyle: p,
      translate: n
    };
  }
}), Cm = {
  key: 0,
  class: "nut-dialog__header"
}, Sm = ["innerHTML"];
function Tm(e, t, n, s, o, a) {
  const l = W("nut-button"), r = W("nut-popup");
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
    default: ne(() => [
      m("view", {
        class: L(["nut-dialog", e.customClass])
      }, [
        e.$slots.header || e.title ? (u(), f("view", Cm, [
          e.$slots.header ? _(e.$slots, "header", { key: 0 }) : (u(), f(x, { key: 1 }, [
            ge(E(e.title), 1)
          ], 64))
        ])) : N("", !0),
        m("view", {
          class: "nut-dialog__content",
          style: A(e.contentStyle)
        }, [
          e.$slots.default ? _(e.$slots, "default", { key: 0 }) : typeof e.content == "string" ? (u(), f("view", {
            key: 1,
            innerHTML: e.content
          }, null, 8, Sm)) : (u(), ee(Ae(e.content), { key: 2 }))
        ], 4),
        e.noFooter ? N("", !0) : (u(), f("view", {
          key: 1,
          class: L(["nut-dialog__footer", { [e.footerDirection]: e.footerDirection }])
        }, [
          e.$slots.footer ? _(e.$slots, "footer", { key: 0 }) : (u(), f(x, { key: 1 }, [
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
const cn = /* @__PURE__ */ K(km, [["render", Tm]]);
class Nm {
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
class Dm {
  constructor(t) {
    V(this, "options", new Nm());
    V(this, "instance");
    const n = Object.assign(this.options, t), { unmount: s } = on(n, {
      name: "dialog",
      components: [Ee, qe, Tt],
      wrapper: (o, a) => ({
        setup() {
          return n.onUpdate = (l) => {
            l === !1 && Se(() => {
              s();
            });
          }, n != null && n.onOpened && (n == null || n.onOpened()), n.teleport = `#${a.id}`, () => be(cn, n);
        }
      })
    });
  }
}
const _m = function(e) {
  return new Dm(e);
};
_m.install = (e) => {
  e.use(cn);
};
const { create: Im } = Y("infinite-loading"), Bm = "NutInfiniteLoading", Mm = Im({
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
    Loading: st
  },
  setup(e, { emit: t, slots: n }) {
    const s = ke(Bm), o = z(), a = so(o), l = ce({
      beforeScrollTop: 0,
      isInfiniting: !1,
      y: 0,
      x: 0,
      distance: 0
    }), r = (k) => k ? k.offsetTop + r(k.offsetParent) : 0, i = () => {
      let k = 0, $ = 0, b = "down";
      if (a.value == window) {
        const c = Un();
        o.value && (k = r(o.value) + o.value.offsetHeight - c - window.innerHeight), $ = c;
      } else {
        const { scrollHeight: c, clientHeight: y, scrollTop: h } = a.value;
        k = c - y - h, $ = h;
      }
      return l.beforeScrollTop > $ ? b = "up" : b = "down", l.beforeScrollTop = $, t("scrollChange", $), k <= e.threshold && b == "down";
    }, p = () => {
      Ve(() => {
        if (!i() || !e.hasMore || l.isInfiniting)
          return !1;
        l.isInfiniting = !0, t("update:modelValue", !0), Se(() => t("loadMore"));
      });
    }, d = () => {
      a.value && a.value.addEventListener("scroll", p, e.useCapture);
    }, v = () => {
      a.value && a.value.removeEventListener("scroll", p, e.useCapture);
    };
    ve(() => {
      d();
    }), Ke(() => {
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
        k || (l.isInfiniting = !1);
      }
    ), de(G({
      scroller: o
    }, he(l)), {
      translate: s,
      slots: n
    });
  }
}), Lm = {
  ref: "scroller",
  class: "nut-infinite-loading"
}, Em = { class: "nut-infinite__container" }, Pm = { class: "nut-infinite__bottom" }, Am = {
  key: 0,
  class: "nut-infinite__bottom-box"
}, zm = { class: "nut-infinite__bottom-box__text" }, Vm = { class: "nut-infinite__bottom-tips" };
function Om(e, t, n, s, o, a) {
  const l = W("Loading");
  return u(), f("view", Lm, [
    m("view", Em, [
      _(e.$slots, "default")
    ]),
    m("view", Pm, [
      e.isInfiniting ? (u(), f("view", Am, [
        _(e.$slots, "loading", {}, () => [
          _(e.$slots, "loading-icon", {}, () => [
            oe(l, { class: "nut-icon-loading nut-infinite__bottom-box__img" })
          ]),
          m("view", zm, E(e.loadTxt || e.translate("loading")), 1)
        ])
      ])) : e.hasMore ? N("", !0) : _(e.$slots, "finished", { key: 1 }, () => [
        m("view", Vm, E(e.loadMoreTxt || e.translate("loadMoreTxt")), 1)
      ])
    ])
  ], 512);
}
const Hm = /* @__PURE__ */ K(Mm, [["render", Om]]), { create: Rm } = Y("pull-refresh"), Fm = "NutPullRefresh", Wm = Rm({
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
  components: { Loading: st },
  setup(e, { emit: t, slots: n }) {
    const s = ke(Fm), o = xe(), a = z(), l = so(a), r = ce({
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
    })), d = D(() => {
      const h = {};
      return e.headHeight != 50 && (h.height = Be(e.headHeight)), h;
    }), v = (h) => {
      const w = +(e.pullDistance || e.headHeight);
      let S = h;
      return h > w && (h < w * 2 ? S = (h + w) / 2 : S = w + h / 4), Math.round(S);
    }, g = (h, w, S) => {
      const I = +(e.pullDistance || e.headHeight);
      r.distance = h, w ? r.status = "loading" : S ? r.status = "complete" : h === 0 ? r.status = "normal" : h < I ? r.status = "pulling" : r.status = "loosing", t("change", { status: r.status, distance: h });
    }, k = () => r.status !== "loading" && r.status !== "complete", $ = () => l.value == window ? Un() == 0 : l.value && l.value.scrollTop == 0, b = (h) => {
      k() && ($() ? (o.start(h), r.isPullRefresh = !0) : (r.distance = 0, r.isPullRefresh = !1));
    }, c = (h) => {
      if (k()) {
        o.move(h);
        const { deltaY: w } = o;
        o.isVertical() && w.value > 0 && r.isPullRefresh && (h.preventDefault(), g(v(w.value)));
      }
    }, y = () => {
      r.isPullRefresh && k() && o.deltaY.value && (r.status === "loosing" ? (g(+e.headHeight, !0), t("update:modelValue", !0), Se(() => t("refresh"))) : g(0)), setTimeout(() => {
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
    ), de(G({
      scroller: a
    }, he(r)), {
      touchStart: b,
      touchMove: c,
      touchEnd: y,
      getStyle: p,
      translate: s,
      slots: n,
      getHeightStyle: d,
      getPullStatus: i
    });
  }
}), Ym = { class: "nut-pull-refresh-container-topbox-text" };
function jm(e, t, n, s, o, a) {
  const l = W("Loading");
  return u(), f("div", {
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
        e.status == "loading" && !e.slots.loading ? (u(), ee(l, {
          key: 0,
          class: "nut-icon-loading nut-pull-refresh-container-topbox-icon"
        })) : N("", !0),
        m("div", Ym, E(e.getPullStatus), 1),
        e.status == "pulling" ? _(e.$slots, "pulling", { key: 1 }) : N("", !0),
        e.status == "loosing" ? _(e.$slots, "loosing", { key: 2 }) : N("", !0),
        e.status == "loading" ? _(e.$slots, "loading", { key: 3 }) : N("", !0),
        e.status == "complete" ? _(e.$slots, "complete", { key: 4 }) : N("", !0)
      ], 4),
      _(e.$slots, "default")
    ], 4)
  ], 544);
}
const Um = /* @__PURE__ */ K(Wm, [["render", jm]]), { create: Km } = Y("notify"), Xm = Km({
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
    }, a = () => {
      t("update:visible", !1);
    }, l = z(!1), r = Q(
      () => e.visible,
      (p) => {
        l.value = e.visible;
        const d = e.duration;
        p && d && (s = setTimeout(() => {
          a();
        }, d));
      },
      { immediate: !0 }
    );
    return { onAfterLeave: () => {
      o(), r && r(), e.unmount && e.unmount(e.id), e.onClose && e.onClose();
    }, clickCover: n, isShowPopup: l };
  }
});
function qm(e, t, n, s, o, a) {
  const l = W("nut-popup");
  return u(), ee(l, {
    visible: e.isShowPopup,
    "onUpdate:visible": t[1] || (t[1] = (r) => e.isShowPopup = r),
    position: e.position,
    overlay: !1,
    "teleport-disable": e.teleportDisable
  }, {
    default: ne(() => [
      m("div", {
        class: L(["nut-notify", `nut-notify--${e.type}`, e.className]),
        style: A({ color: e.color, background: e.background }),
        onClick: t[0] || (t[0] = (...r) => e.clickCover && e.clickCover(...r))
      }, [
        e.$slots.default ? _(e.$slots, "default", { key: 0 }) : (u(), f(x, { key: 1 }, [
          ge(E(e.msg), 1)
        ], 64))
      ], 6)
    ]),
    _: 3
  }, 8, ["visible", "position", "teleport-disable"]);
}
const Vt = /* @__PURE__ */ K(Xm, [["render", qm]]), Xt = {
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
const Io = (e) => {
  if (e) {
    const t = document.getElementById(e);
    vt = vt.filter((n) => n.id !== e), it = it.filter((n) => n !== e), t && document.body.removeChild(t);
  } else
    it.forEach((t) => {
      const n = document.getElementById(t);
      n && document.body.removeChild(n);
    }), vt = [], it = [];
}, Zm = (e) => {
  const t = document.getElementById(e.id);
  if (t) {
    const n = vt.find((o) => o.id === e.id);
    n ? e = G(G(G({}, Xt), n), e) : e = G(G({}, Xt), e);
    const s = oe(Vt, e);
    return Jt(s, t), s.component.data;
  }
}, ht = (e) => {
  e.unmount = Io;
  let t;
  if (e.id) {
    if (t = e.id, it.find((a) => a === e.id))
      return Zm(e);
  } else
    t = (/* @__PURE__ */ new Date()).getTime() + "";
  e = G(G({}, Xt), e), e.id = t, it.push(e.id), vt.push(e);
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
  document.body.appendChild(n), Jt(o, n);
}, gt = (e) => {
  if (!e) {
    console.warn("[NutUI Notify]: msg不能为空");
    return;
  }
}, $5 = {
  text(e, t = {}) {
    return gt(e), ht(de(G({}, t), { msg: e }));
  },
  primary(e, t = {}) {
    return gt(e), ht(de(G({}, t), { msg: e, type: "primary" }));
  },
  success(e, t = {}) {
    return gt(e), ht(de(G({}, t), { msg: e, type: "success" }));
  },
  danger(e, t = {}) {
    return gt(e), ht(de(G({}, t), { msg: e, type: "danger" }));
  },
  warn(e, t = {}) {
    return gt(e), ht(de(G({}, t), { msg: e, type: "warning" }));
  },
  hide() {
    Io();
  },
  install(e) {
    e.use(Vt);
  }
}, { componentName: Gm, create: Jm } = Y("switch"), Qm = Jm({
  components: { Loading1: na },
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
    const n = Ze(Xe(e, "disable")), s = D(() => e.modelValue === e.activeValue), o = D(() => {
      const i = Gm;
      return {
        [i]: !0,
        [s.value ? "nut-switch-open" : "nut-switch-close"]: !0,
        [`${i}-disable`]: n.value,
        [`${i}-base`]: !0
      };
    }), a = D(() => ({
      backgroundColor: s.value ? e.activeColor : e.inactiveColor
    }));
    let l = "";
    const r = (i) => {
      if (e.loading || n.value)
        return;
      const p = s.value ? e.inactiveValue : e.activeValue;
      l = "click", t("update:modelValue", p), t("change", p, i);
    };
    return Q(
      () => e.modelValue,
      (i) => {
        l == "click" ? l = "" : t("change", i);
      }
    ), {
      classes: o,
      style: a,
      isActive: s,
      onClick: r
    };
  }
}), xm = { class: "nut-switch-button" };
function eh(e, t, n, s, o, a) {
  const l = W("Loading1");
  return u(), f("view", {
    class: L(e.classes),
    style: A(e.style),
    onClick: t[0] || (t[0] = (...r) => e.onClick && e.onClick(...r))
  }, [
    m("view", xm, [
      e.loading ? _(e.$slots, "icon", { key: 0 }, () => [
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
const th = /* @__PURE__ */ K(Qm, [["render", eh]]), { create: nh } = Y("toast"), oh = nh({
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
    }, a = () => {
      s.mounted = !1;
    }, l = () => {
      o(), e.duration && (n = setTimeout(() => {
        a();
      }, e.duration));
    }, r = () => {
      e.closeOnClickOverlay && (a(), t("close"));
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
      hide: a,
      clickCover: r,
      hasIcon: i,
      toastBodyClass: p,
      toastIconWrapperClass: d,
      onAfterLeave: () => {
        o(), e.unmount(e.id), e.onClose && e.onClose();
      },
      renderIcon: ft
    };
  }
}), lh = {
  key: 1,
  class: "nut-toast-title"
}, sh = ["innerHTML"];
function ah(e, t, n, s, o, a) {
  return u(), ee(Zt, {
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
            (u(), ee(Ae(e.renderIcon(e.icon)), { color: "#ffffff" }))
          ], 2)) : N("", !0),
          e.title ? (u(), f("div", lh, E(e.title), 1)) : N("", !0),
          m("view", {
            class: "nut-toast-text",
            innerHTML: e.msg
          }, null, 8, sh)
        ], 4)
      ], 6), [
        [Ne, e.state.mounted]
      ])
    ]),
    _: 1
  }, 8, ["onAfterLeave"]);
}
const Ot = /* @__PURE__ */ K(oh, [["render", ah]]), qt = {
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
const Bo = (e) => {
  if (e) {
    const t = document.getElementById(e);
    $t = $t.filter((n) => n.id !== e), ut = ut.filter((n) => n !== e), t && document.body.removeChild(t);
  } else
    ut.forEach((t) => {
      const n = document.getElementById(t);
      n && document.body.removeChild(n);
    }), $t = [], ut = [];
}, rh = (e) => {
  const t = document.getElementById(e.id);
  if (t) {
    const n = $t.find((o) => o.id === e.id);
    n ? e = G(G(G({}, qt), n), e) : e = G(G({}, qt), e);
    const s = oe(Ot, e);
    return Jt(s, t), Mo;
  }
}, yt = (e) => {
  e.unmount = Bo;
  let t;
  if (e.id) {
    if (t = e.id, ut.find((n) => n === e.id))
      return rh(e);
  } else
    t = (/* @__PURE__ */ new Date()).getTime() + "";
  return e = G(G({}, qt), e), e.id = t, ut.push(e.id), $t.push(e), on(e, {
    wrapper: Ot
  }), Mo;
}, Mt = (e) => {
  if (!e) {
    console.warn("[NutUI Toast]: msg不能为空");
    return;
  }
}, Mo = {
  text(e, t = {}) {
    return Mt(e), yt(de(G({}, t), { type: "text", msg: e }));
  },
  success(e, t = {}) {
    return Mt(e), yt(de(G({ icon: Nr }, t), { msg: e, type: "success" }));
  },
  fail(e, t = {}) {
    return Mt(e), yt(de(G({ icon: Jn }, t), { msg: e, type: "fail" }));
  },
  warn(e, t = {}) {
    return Mt(e), yt(de(G({ icon: Qn }, t), { msg: e, type: "warn" }));
  },
  loading(e, t = {}) {
    return yt(de(G({
      icon: st
    }, t), {
      msg: e,
      type: "loading"
    }));
  },
  hide(e) {
    Bo(e);
  },
  install(e) {
    e.use(Ot);
  }
}, { create: ih } = Y("audio"), uh = ih({
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
    Service: yr,
    NutRange: go
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
      var b = ["webkitVisibilityState", "visibilitychange"];
      try {
        for (let c = 0; c < b.length; c++)
          document.addEventListener(b[c], () => {
            document.hidden ? s.value.pause() : o.playing && setTimeout(() => {
              s.value.play();
            }, 200);
          });
      } catch (c) {
        console.log(c.message);
      }
    });
    const a = (b) => {
      const c = s.value;
      e.autoplay && c && c.paused && c.play(), o.second = c.duration, o.duration = $(c.duration), t("canPlay", b);
    }, l = (b) => {
      o.currentTime = parseInt(b.target.currentTime);
    }, r = () => {
      o.currentTime > 0 && o.currentTime--, s.value.currentTime = o.currentTime, t("fastBack", o.currentTime);
    }, i = () => {
      const b = s.value;
      o.playing ? (b.pause(), o.handPlaying = !1) : (b.play(), o.handPlaying = !0), o.playing = !o.playing, t("play", o.playing);
    }, p = () => {
      o.currentTime++, s.value.currentTime = o.currentTime, t("forward", o.currentTime);
    }, d = (b) => {
      o.currentDuration = $(b), o.percent = b / o.second * 100;
    }, v = () => {
      o.playing = !1, t("ended");
    }, g = (b) => {
      const c = s.value;
      c.currentTime = o.second * b / 100, t("changeProgress", c.currentTime);
    }, k = () => {
      o.hanMuted = !o.hanMuted, t("mute", o.hanMuted);
    }, $ = (b) => {
      if (!b)
        return "00:00:00";
      let c = parseInt(b), y = Math.floor(c / 3600), h = Math.floor((c - y * 3600) / 60), w = c - y * 3600 - h * 60, S = "";
      return S += ("0" + y.toString()).slice(-2) + ":", S += ("0" + h.toString()).slice(-2) + ":", S += ("0" + w.toString()).slice(-2), S;
    };
    return Q(
      () => o.currentTime,
      (b) => {
        d(b);
      }
    ), Le("audioParent", {
      children: [],
      props: e,
      audioData: o,
      handleMute: k,
      forward: p,
      fastBack: r,
      changeStatus: i
    }), de(G(G({}, he(e)), he(o)), {
      audioRef: s,
      fastBack: r,
      forward: p,
      changeStatus: i,
      progressChange: g,
      audioEnd: v,
      onTimeupdate: l,
      handleMute: k,
      onCanplay: a,
      slots: n
    });
  }
}), ch = { class: "nut-audio" }, dh = {
  key: 0,
  class: "nut-audio__progress"
}, fh = { class: "nut-audio__time" }, ph = { class: "nut-audio__bar" }, mh = /* @__PURE__ */ m("div", { class: "nut-audio__button--custom" }, null, -1), hh = { class: "nut-audio__time" }, gh = {
  key: 1,
  class: "nut-audio__icon"
}, yh = ["controls", "src", "preload", "autoplay", "loop", "muted"];
function vh(e, t, n, s, o, a) {
  const l = W("nut-range"), r = W("Service");
  return u(), f("div", ch, [
    e.type == "progress" ? (u(), f("div", dh, [
      m("div", fh, E(e.currentDuration), 1),
      m("div", ph, [
        oe(l, {
          modelValue: e.percent,
          "onUpdate:modelValue": t[0] || (t[0] = (i) => e.percent = i),
          "hidden-range": "",
          "inactive-color": "#cccccc",
          "active-color": "#fa2c19",
          onChange: e.progressChange
        }, {
          button: ne(() => [
            mh
          ]),
          _: 1
        }, 8, ["modelValue", "onChange"])
      ]),
      m("div", hh, E(e.duration), 1)
    ])) : N("", !0),
    e.type == "icon" ? (u(), f("div", gh, [
      m("div", {
        class: L(["nut-audio__icon--box", e.playing ? "nut-audio__icon--play" : "nut-audio__icon--stop"]),
        onClick: t[1] || (t[1] = (...i) => e.changeStatus && e.changeStatus(...i))
      }, [
        e.playing ? (u(), ee(r, {
          key: 0,
          class: "nut-icon-am-rotate nut-icon-am-infinite"
        })) : (u(), ee(r, { key: 1 }))
      ], 2)
    ])) : N("", !0),
    e.type == "none" ? (u(), f("div", {
      key: 2,
      onClick: t[2] || (t[2] = (...i) => e.changeStatus && e.changeStatus(...i))
    }, [
      _(e.$slots, "default")
    ])) : N("", !0),
    e.type != "none" ? _(e.$slots, "default", { key: 3 }) : N("", !0),
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
    }, null, 40, yh)
  ]);
}
const $h = /* @__PURE__ */ K(uh, [["render", vh]]), { create: bh } = Y("audio-operate"), wh = "NutAudioOperate", kh = bh({
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
    const t = ke(wh), n = Me("audioParent"), s = ce(n), o = z(ot().default);
    return de(G(G({}, he(e)), he(s)), { customSlot: o, translate: t });
  }
}), Ch = { class: "nut-audio-operate" };
function Sh(e, t, n, s, o, a) {
  const l = W("nut-button");
  return u(), f("div", Ch, [
    e.type == "back" ? (u(), f("div", {
      key: 0,
      class: "nut-audio-operate-item",
      onClick: t[0] || (t[0] = (...r) => e.fastBack && e.fastBack(...r))
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
      _(e.$slots, "default")
    ])) : N("", !0),
    e.type == "play" ? (u(), f("div", {
      key: 1,
      class: "nut-audio-operate-item",
      onClick: t[1] || (t[1] = (...r) => e.changeStatus && e.changeStatus(...r))
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
      _(e.$slots, "default")
    ])) : N("", !0),
    e.type == "forward" ? (u(), f("div", {
      key: 2,
      class: "nut-audio-operate-item",
      onClick: t[2] || (t[2] = (...r) => e.forward && e.forward(...r))
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
      _(e.$slots, "default")
    ])) : N("", !0),
    e.type == "mute" ? (u(), f("div", {
      key: 3,
      class: "nut-audio-operate-item",
      onClick: t[3] || (t[3] = (...r) => e.handleMute && e.handleMute(...r))
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
      _(e.$slots, "default")
    ])) : N("", !0)
  ]);
}
const Th = /* @__PURE__ */ K(kh, [["render", Sh]]), Lo = Symbol("nut-avatar"), { create: Nh } = Y("avatar"), Dh = Nh({
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
    const { size: t, shape: n, bgColor: s, color: o } = he(e), a = ["large", "normal", "small"], l = Me(Lo, null), r = z(null), i = D(() => {
      var v, g;
      return {
        ["nut-avatar"]: !0,
        [`nut-avatar-${t.value || ((v = l == null ? void 0 : l.props) == null ? void 0 : v.size) || "normal"}`]: !0,
        [`nut-avatar-${n.value || ((g = l == null ? void 0 : l.props) == null ? void 0 : g.shape) || "round"}`]: !0
      };
    }), p = D(() => {
      var d, v;
      return {
        width: t.value in a ? "" : `${t.value}px`,
        height: t.value in a ? "" : `${t.value}px`,
        backgroundColor: `${s.value}`,
        color: `${o.value}`,
        marginLeft: (d = l == null ? void 0 : l.props) != null && d.span ? `${(v = l == null ? void 0 : l.props) == null ? void 0 : v.span}px` : ""
      };
    });
    return {
      classes: i,
      styles: p,
      avatarRef: r
    };
  }
});
function _h(e, t, n, s, o, a) {
  return u(), f("view", {
    ref: "avatarRef",
    style: A(e.styles),
    class: L(e.classes)
  }, [
    _(e.$slots, "default")
  ], 6);
}
const dn = /* @__PURE__ */ K(Dh, [["render", _h]]), { create: Ih } = Y("avatar-group"), Bh = Ih({
  components: {
    NutAvatar: dn
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
    }, l = (r) => {
      const i = { attributes: !1, childList: !0, subtree: !0 }, p = function(v) {
        let g = !1;
        for (let k of v)
          if (k.type === "childList") {
            g = !0;
            break;
          }
        g && a(r);
      }, d = new MutationObserver(p);
      return d.observe(r, i), d;
    };
    return ve(() => {
      e.maxCount && Se(() => {
        let r = Re(t);
        r && r.$el && (r = r.$el), a(r), s.value = l(r);
      });
    }), Ke(() => {
      var r;
      (r = s.value) == null || r.disconnect();
    }), Le(Lo, {
      props: e,
      avatarGroupRef: t
    }), {
      styles: o,
      foldCount: n,
      avatarGroupRef: t
    };
  }
});
function Mh(e, t, n, s, o, a) {
  const l = W("nut-avatar");
  return u(), f("view", {
    ref: "avatarGroupRef",
    class: "nut-avatar-group",
    style: A(e.styles)
  }, [
    _(e.$slots, "default"),
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
const Lh = /* @__PURE__ */ K(Bh, [["render", Mh]]);
var Et = /* @__PURE__ */ ((e) => (e[e.eq = 1] = "eq", e[e.lt = 2] = "lt", e[e.gt = 3] = "gt", e))(Et || {});
function Eh(e, t, n) {
  let s = 0, o = e.length - 1, a = null;
  for (; s <= o; ) {
    a = Math.floor((s + o) / 2);
    const l = e[a], r = n(l, t);
    if (r === 1)
      return a;
    r === 2 ? s = a + 1 : r === 3 && (o = a - 1);
  }
  return a;
}
const { create: Ph } = Y("list"), Ah = Ph({
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
    const n = document.documentElement.clientHeight || document.body.clientHeight || 667, s = z(null), o = z(null), a = z(null), l = ce({
      start: 0,
      originStartIndex: 0,
      scrollTop: 0,
      list: e.listData.slice(),
      cachePositions: [],
      phantomHeight: e.height * e.listData.length
    }), r = D(() => e.containerHeight ? Math.min(e.containerHeight, n) : n), i = D(() => Math.ceil(r.value / e.height)), p = D(() => Math.min(l.originStartIndex + i.value + e.bufferSize, l.list.length)), d = D(() => l.list.slice(l.start, p.value)), v = () => {
      if (a.value)
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
      let y = a.value.childNodes;
      y = Array.from(y).filter((M) => M.nodeType === 1);
      const h = y[0];
      y.forEach((M, C) => {
        if (!M)
          return;
        const T = Fe(M), { height: P } = T, X = l.cachePositions[C + l.start].height - P;
        X && (l.cachePositions[C + l.start].bottom -= X, l.cachePositions[C + l.start].height = P, l.cachePositions[C + l.start].dValue = X);
      });
      let w = 0;
      h && (w = l.start);
      const S = l.cachePositions.length;
      let I = l.cachePositions[w].dValue;
      l.cachePositions[w].dValue = 0;
      for (let M = w + 1; M < S; ++M) {
        const C = l.cachePositions[M];
        l.cachePositions[M].top = l.cachePositions[M - 1].bottom, l.cachePositions[M].bottom = l.cachePositions[M].bottom - I, C.dValue !== 0 && (I += C.dValue, C.dValue = 0);
      }
      const B = l.cachePositions[S - 1].bottom;
      l.phantomHeight = B;
    }, $ = (y = 0) => {
      let h = Eh(
        l.cachePositions,
        y,
        (S, I) => {
          const B = S.bottom;
          return B === I ? Et.eq : B < I ? Et.lt : Et.gt;
        }
      );
      return l.cachePositions[h].bottom < y && (h += 1), h;
    }, b = () => {
      l.originStartIndex = 0, l.start = 0, l.scrollTop = 0, s.value.scrollTop = 0, g(), l.phantomHeight = e.height * l.list.length;
    }, c = () => {
      var S;
      const y = (S = s.value) == null ? void 0 : S.scrollTop, { originStartIndex: h } = l, w = $(y);
      w !== h && (l.originStartIndex = w, l.start = Math.max(l.originStartIndex - e.bufferSize, 0), p.value >= l.list.length - 1 && t("scrollBottom")), t(y > l.scrollTop ? "scrollUp" : "scrollDown", y), l.scrollTop = y;
    };
    return g(), Q(
      () => e.listData,
      (y) => {
        if (l.list = y.slice(), l.list.length === y.length)
          g(), k();
        else {
          b();
          return;
        }
      }
    ), Q(
      () => l.start,
      () => {
        a.value && l.list.length > 0 && k();
      }
    ), de(G({}, he(l)), {
      list: s,
      phantom: o,
      actualContent: a,
      getTransform: v,
      visibleData: d,
      getContainerHeight: r,
      handleScrollEvent: c
    });
  }
});
function zh(e, t, n, s, o, a) {
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
      (u(!0), f(x, null, ie(e.visibleData, (l, r) => (u(), f("div", {
        key: l,
        class: "nut-list-item"
      }, [
        _(e.$slots, "default", {
          item: l,
          index: r + e.start
        })
      ]))), 128))
    ], 4)
  ], 36);
}
const Vh = /* @__PURE__ */ K(Ah, [["render", zh]]), { create: Oh } = Y("circle-progress"), Hh = Oh({
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
    }), s = D(() => ct(e.color) ? `url(#${t})` : e.color), o = D(() => {
      let r = 283, i = r * Number(e.progress) / 100;
      return {
        stroke: ct(e.color) ? `url(#${t})` : e.color,
        strokeDasharray: `${i}px ${r}px`
      };
    }), a = D(() => ({
      stroke: e.pathColor
    })), l = D(() => {
      if (!ct(e.color))
        return;
      let r = e.color;
      const i = Object.keys(r).sort((d, v) => parseFloat(d) - parseFloat(v));
      let p = [];
      return i.map((d) => {
        let v = {
          key: "",
          value: ""
        };
        v.key = d, v.value = r[d], p.push(v);
      }), p;
    });
    return {
      hoverStyle: o,
      pathStyle: a,
      path: n,
      hoverColor: s,
      stop: l,
      refRandomId: t
    };
  }
}), Rh = { viewBox: "0 0 100 100" }, Fh = ["id"], Wh = ["offset", "stop-color"], Yh = ["d", "stroke-width"], jh = ["d", "stroke", "stroke-linecap", "stroke-width"], Uh = { class: "nut-circle-progress__text" };
function Kh(e, t, n, s, o, a) {
  return u(), f("div", {
    class: "nut-circle-progress",
    style: A({ height: Number(e.radius) * 2 + "px", width: Number(e.radius) * 2 + "px" })
  }, [
    (u(), f("svg", Rh, [
      m("defs", null, [
        m("linearGradient", {
          id: e.refRandomId,
          x1: "100%",
          y1: "0%",
          x2: "0%",
          y2: "0%"
        }, [
          (u(!0), f(x, null, ie(e.stop, (l, r) => (u(), f("stop", {
            key: r,
            offset: l.key,
            "stop-color": l.value
          }, null, 8, Wh))), 128))
        ], 8, Fh)
      ]),
      m("path", {
        class: "nut-circle-progress__path",
        style: A(e.pathStyle),
        d: e.path,
        fill: "none",
        "stroke-width": e.strokeWidth
      }, " > ", 12, Yh),
      m("path", {
        class: "nut-circle-progress__hover",
        style: A(e.hoverStyle),
        d: e.path,
        fill: "none",
        stroke: e.hoverColor,
        "stroke-linecap": e.strokeLinecap,
        "stroke-width": e.strokeWidth
      }, null, 12, jh)
    ])),
    m("div", Uh, [
      _(e.$slots, "default", {}, () => [
        m("div", null, E(e.progress) + "%", 1)
      ])
    ])
  ], 4);
}
const Xh = /* @__PURE__ */ K(Hh, [["render", Kh]]), { create: qh } = Y("noticebar"), Zh = qh({
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
    Notice: La,
    CircleClose: xt
  },
  emits: ["click", "close", "acrossEnd"],
  setup(e, { emit: t, slots: n }) {
    const s = z(null), o = z(null), a = ce({
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
    }), l = D(() => a.isCanScroll == null ? e.wrapable : !a.isCanScroll && !e.wrapable), r = D(() => ({
      "nut-noticebar__page-wrap-content": !0,
      "nut-ellipsis": l.value,
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
        if (!s.value || !o.value)
          return;
        const M = s.value.getBoundingClientRect().width, C = o.value.getBoundingClientRect().width;
        a.isCanScroll = e.scrollable == null ? C > M : e.scrollable, a.isCanScroll ? (a.wrapWidth = M, a.offsetWidth = C, a.duration = C / e.speed, a.animationClass = "play") : a.animationClass = "";
      }, 0);
    }, g = (M) => {
      t("click", M);
    }, k = (M) => {
      e.closeMode && (a.showNoticebar = !e.closeMode), t("close", M);
    }, $ = (M) => {
      a.firstRound = !1, t("acrossEnd", M), setTimeout(() => {
        a.duration = (a.offsetWidth + a.wrapWidth) / e.speed, a.animationClass = "play-infinite";
      }, 0);
    }, b = () => {
      c(), a.timer = setInterval(c, ~~(e.height / e.speed / 4 * 1e3) + e.standTime);
    }, c = () => {
      a.animate = !0, setTimeout(
        () => {
          a.scrollList.push(a.scrollList[0]), a.scrollList.shift(), a.animate = !1;
        },
        ~~(e.height / e.speed / 4 * 1e3)
      );
    }, y = () => {
      a.timer = setInterval(
        () => {
          let M = 100;
          for (let C = 0; C < M; C++)
            h(C, !(C < M - 1));
        },
        e.standTime + 100 * e.speed
      );
    }, h = (M, C) => {
      setTimeout(() => {
        a.distance -= e.height / 100, C && (a.scrollList.push(a.scrollList[0]), a.scrollList.shift(), a.distance = 0);
      }, M * e.speed);
    }, w = (M) => {
      t("click", M);
    }, S = () => {
      e.closeMode && (a.showNoticebar = !e.closeMode), t("close", a.scrollList[0]);
    };
    ve(() => {
      e.direction == "vertical" ? (n.default ? (I(), B()) : a.scrollList = [].concat(e.list), setTimeout(() => {
        e.complexAm ? y() : b();
      }, e.standTime)) : v();
    });
    const I = () => {
      n.default && (a.scrollList = [].concat(n.default()[0].children));
    }, B = () => {
      setTimeout(() => {
        var M = new MutationObserver(() => {
          a.showNotica = !1, setTimeout(() => {
            a.showNotica = !0;
          }), I();
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
    }), Ke(() => {
      clearInterval(a.timer);
    }), de(G({}, he(a)), {
      isEllipsis: l,
      barStyle: i,
      contentStyle: p,
      horseLampStyle: d,
      wrap: s,
      content: o,
      handleClick: g,
      onClickIcon: k,
      onAnimationEnd: $,
      go: w,
      handleClickIcon: S,
      slots: n,
      pxCheck: Be,
      wrapContentClass: r
    });
  }
}), Gh = { class: "nut-noticebar" }, Jh = {
  key: 0,
  class: "nut-noticebar__page-lefticon"
}, Qh = {
  ref: "wrap",
  class: "nut-noticebar__page-wrap"
}, xh = { class: "showNotica" }, eg = { class: "nut-noticebar-custom-item" }, tg = ["onClick"];
function ng(e, t, n, s, o, a) {
  const l = W("Notice"), r = W("CircleClose"), i = W("ScrollItem");
  return u(), f("view", Gh, [
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
      e.leftIcon ? (u(), f("view", Jh, [
        _(e.$slots, "left-icon", {}, () => [
          oe(l, { size: "16px" })
        ])
      ])) : N("", !0),
      m("view", Qh, [
        m("view", {
          ref: "content",
          class: L(e.wrapContentClass),
          style: A(e.contentStyle),
          onAnimationend: t[0] || (t[0] = (...p) => e.onAnimationEnd && e.onAnimationEnd(...p)),
          onWebkitAnimationEnd: t[1] || (t[1] = (...p) => e.onAnimationEnd && e.onAnimationEnd(...p))
        }, [
          _(e.$slots, "default", {}, () => [
            ge(E(e.text), 1)
          ])
        ], 38)
      ], 512),
      e.closeMode || e.$slots["right-icon"] ? (u(), f("view", {
        key: 1,
        class: "nut-noticebar__page-righticon",
        onClick: t[2] || (t[2] = De((...p) => e.onClickIcon && e.onClickIcon(...p), ["stop"]))
      }, [
        e.$slots["right-icon"] ? _(e.$slots, "right-icon", { key: 0 }) : (u(), ee(r, { key: 1 }))
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
          m("div", xh, [
            (u(!0), f(x, null, ie(e.scrollList, (p, d) => (u(), ee(i, {
              key: d,
              style: A({ height: e.height + "px", "line-height": e.height + "px" }),
              item: p
            }, null, 8, ["style", "item"]))), 128))
          ])
        ], 4),
        m("view", eg, [
          _(e.$slots, "default")
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
          onClick: (v) => e.go(p)
        }, E(p), 13, tg))), 128))
      ], 4)),
      m("view", {
        class: "go",
        onClick: t[4] || (t[4] = (p) => !e.slots.rightIcon && e.handleClickIcon())
      }, [
        _(e.$slots, "right-icon", {}, () => [
          e.closeMode ? (u(), ee(r, {
            key: 0,
            color: e.color,
            size: "11px"
          }, null, 8, ["color"])) : N("", !0)
        ])
      ])
    ], 4)) : N("", !0)
  ]);
}
const og = /* @__PURE__ */ K(Zh, [["render", ng]]), { create: lg } = Y("empty"), sg = "NutEmpty", ag = {
  empty: "https://static-ftcms.jd.com/p/files/61a9e3183985005b3958672b.png",
  error: "https://ftcms.jd.com/p/files/61a9e33ee7dcdbcc0ce62736.png",
  network: "https://static-ftcms.jd.com/p/files/61a9e31de7dcdbcc0ce62734.png"
}, rg = lg({
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
    const t = ke(sg), n = D(() => e.imageSize ? {
      width: Be(e.imageSize),
      height: Be(e.imageSize)
    } : {});
    return { src: D(() => e.image.startsWith("https://") || e.image.startsWith("http://") || e.image.startsWith("//") ? e.image : ag[e.image]), style: n, translate: t };
  }
}), ig = { class: "nut-empty" }, ug = ["src"], cg = { class: "nut-empty__description" };
function dg(e, t, n, s, o, a) {
  return u(), f("view", ig, [
    m("view", {
      class: "nut-empty__box",
      style: A(e.style)
    }, [
      _(e.$slots, "image", {}, () => [
        e.src ? (u(), f("img", {
          key: 0,
          class: "nut-empty__box--img",
          src: e.src
        }, null, 8, ug)) : N("", !0)
      ])
    ], 4),
    _(e.$slots, "description", {}, () => [
      m("view", cg, E(e.description || e.translate("noData")), 1)
    ]),
    _(e.$slots, "default")
  ]);
}
const fg = /* @__PURE__ */ K(rg, [["render", dg]]);
function Pn(e, t) {
  let n = null, s = Date.now();
  return function() {
    let o = Date.now(), a = t - (o - s);
    n && clearTimeout(n), a <= 0 ? (e.apply(null, arguments), s = Date.now()) : n = setTimeout(e, a);
  };
}
const { create: pg } = Y("video"), mg = "NutVideo", hg = pg({
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
    const s = ke(mg), o = ce({
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
    }), a = z(null), l = D(() => e.options.disabled);
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
    const r = () => {
      o.videoElm = a.value, e.options.autoplay && setTimeout(() => {
        o.videoElm.play();
      }, 200), e.options.touchPlay && (o.showTouchMask = !0), e.options.playsinline && (o.videoElm.setAttribute("playsinline", e.options.playsinline), o.videoElm.setAttribute("webkit-playsinline", e.options.playsinline), o.videoElm.setAttribute("x5-video-player-type", "h5-page"), o.videoElm.setAttribute("x5-video-player-fullscreen", !1)), b(), o.showToolbox ? i() : (o.videoElm.addEventListener("play", () => {
        o.state.playing = !0, t("play", o.videoElm);
      }), o.videoElm.addEventListener("pause", () => {
        o.state.playing = !1, t("pause", o.videoElm);
      }), o.videoElm.addEventListener("ended", k), o.videoElm.addEventListener("timeupdate", Pn(g, 1e3)));
    }, i = () => {
      const O = a.value, X = a.value.getElementsByClassName("nut-video-controller__progress-value")[0];
      o.player.$player = O, o.progressBar.progressElm = X, o.progressBar.pos = X.getBoundingClientRect(), o.videoSet.progress.width = Math.round(X.getBoundingClientRect().width);
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
            }), o.videoElm.addEventListener("timeupdate", Pn(g, 1e3)), o.videoElm.addEventListener("ended", k), t("play", o.videoElm);
          } catch (O) {
            $();
          }
        else
          o.videoElm.pause(), t("pause", o.videoElm);
    }, d = (O) => {
      var X = Math.floor(O / 3600);
      +X < 10 && (X = "0" + X);
      var Z = Math.floor(O % 3600 / 60);
      +Z < 10 && (Z = "0" + Z);
      var le = Math.round(O % 3600 % 60);
      +le < 10 && (le = "0" + le);
      var j = "";
      return X != 0 ? j = X + ":" + Z + ":" + le : j = Z + ":" + le, j;
    }, v = () => {
      o.videoSet.loaded && (o.videoSet.loaded = o.videoElm.buffered.end(0) / o.videoElm.duration * 100);
    }, g = () => {
      const O = o.videoElm.currentTime / o.videoElm.duration;
      o.videoSet.progress.current = Math.round(o.videoSet.progress.width * O), o.videoSet.totalTime = d(o.videoElm.duration), o.videoSet.displayTime = d(o.videoElm.currentTime), t("time", o.videoSet.displayTime, o.videoSet.totalTime);
    }, k = () => {
      o.state.playing = !1, o.state.isEnd = !0, o.videoSet.displayTime = "00:00", o.videoSet.progress.current = 0, o.videoElm.currentTime = 0, t("playend", o.videoElm);
    }, $ = () => {
      o.state.isError = !0;
    }, b = () => {
      o.state.vol = e.options.volume;
    }, c = () => {
      o.state.isMuted = !o.state.isMuted, o.videoElm.muted = o.state.isMuted;
    }, y = () => {
    }, h = (O) => {
      let Z = O.targetTouches[0].pageX - o.progressBar.pos.left;
      Z <= 0 && (Z = 0), Z >= o.videoSet.progress.width && (Z = o.videoSet.progress.width), o.videoSet.progress.current = Z;
      let le = o.videoSet.progress.current / o.videoSet.progress.width;
      o.videoElm.duration && S(le, o.videoElm.duration);
    }, w = (O) => {
      let Z = O.changedTouches[0].pageX - o.progressBar.pos.left;
      o.videoSet.progress.current = Z;
      let le = Z / o.videoSet.progress.width;
      o.videoElm.duration && S(le, o.videoElm.duration);
    }, S = (O, X) => {
      o.videoElm.currentTime = Math.floor(O * X);
    }, I = () => {
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
        k(), o.videoElm.pause();
      },
      muted: () => {
        o.state.isMuted = !0, o.videoElm.muted = !0;
      },
      unmuted: () => {
        o.state.isMuted = !1, o.videoElm.muted = !1;
      }
    }), ve(() => {
      r();
    }), de(G(G({
      root: a
    }, he(e)), he(o)), {
      handleError: $,
      isDisabled: l,
      play: p,
      handleMuted: c,
      touchSlidSrart: y,
      touchSlidMove: h,
      touchSlidEnd: w,
      retry: I,
      fullScreen: B,
      translate: s
    });
  }
}), gg = {
  ref: "videocon",
  class: "nut-video"
}, yg = ["muted", "autoplay", "loop", "poster", "controls", "preload"], vg = ["src", "type"], $g = { class: "nut-video-controller__now" }, bg = { class: "nut-video-controller__progress" }, wg = {
  ref: "progressBar",
  class: "nut-video-controller__progress-value"
}, kg = /* @__PURE__ */ m("div", { class: "nut-video-controller__ball-move" }, null, -1), Cg = [
  kg
], Sg = {
  ref: "playedBar",
  class: "nut-video-controller__played"
}, Tg = { class: "nut-video-controller__total" }, Ng = { class: "nut-video-error" }, Dg = { class: "nut-video-error-tip" };
function _g(e, t, n, s, o, a) {
  return u(), f("div", gg, [
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
      }, null, 8, vg)
    ], 40, yg),
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
      m("div", $g, E(e.videoSet.displayTime), 1),
      m("div", bg, [
        m("div", wg, [
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
          }, Cg, 36),
          m("div", Sg, null, 512)
        ], 512)
      ]),
      m("div", Tg, E(e.videoSet.totalTime), 1),
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
    Ce(m("div", Ng, [
      m("p", Dg, E(e.translate("errorTip")), 1),
      m("p", {
        class: "nut-video-error-retry",
        onClick: t[9] || (t[9] = (...l) => e.retry && e.retry(...l))
      }, E(e.translate("clickRetry")), 1)
    ], 512), [
      [Ne, e.state.isError]
    ])
  ], 512);
}
const fn = /* @__PURE__ */ K(hg, [["render", _g]]), Eo = Symbol("nut-steps"), { create: Ig, componentName: Bg } = Y("steps"), Mg = Ig({
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
      const r = Bg;
      return {
        [r]: !0,
        [`${r}-${e.direction}`]: !0,
        [`${r}-dot`]: !!e.progressDot
      };
    });
    return Le(Eo, {
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
          class: o.value
        },
        (r = n.default) == null ? void 0 : r.call(n)
      );
    };
  }
}), { create: Lg, componentName: Eg } = Y("step"), Pg = Lg({
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
    const { proxy: e } = We(), t = Me(Eo);
    t.relation(e);
    const n = ce({
      dot: t.props.progressDot
    }), s = D(() => t.state.children.indexOf(e) + 1), o = () => {
      const i = s.value;
      return i < +t.props.current ? "finish" : i === +t.props.current ? "process" : "wait";
    }, a = D(() => o()), l = D(() => {
      const i = Eg;
      return {
        [i]: !0,
        [`${i}-${a.value}`]: !0
      };
    }), r = () => {
      t.onEmit(s.value);
    };
    return de(G({}, he(n)), {
      index: s,
      classes: l,
      handleClickStep: r
    });
  }
}), Ag = { class: "nut-step-head" }, zg = /* @__PURE__ */ m("view", { class: "nut-step-line" }, null, -1), Vg = { class: "nut-step-icon-inner" }, Og = {
  key: 1,
  class: "nut-step-inner"
}, Hg = { class: "nut-step-main" }, Rg = { class: "nut-step-title" }, Fg = { key: 0 }, Wg = {
  key: 0,
  class: "nut-step-content"
}, Yg = ["innerHTML"];
function jg(e, t, n, s, o, a) {
  return u(), f("view", {
    class: L(e.classes),
    onClick: t[0] || (t[0] = (...l) => e.handleClickStep && e.handleClickStep(...l))
  }, [
    m("view", Ag, [
      zg,
      m("view", {
        class: L(["nut-step-icon", [e.dot ? "" : "is-icon"]])
      }, [
        m("view", Vg, [
          _(e.$slots, "icon", {}, () => [
            e.dot ? (u(), f(x, { key: 0 }, [], 64)) : (u(), f("view", Og, E(e.index), 1))
          ])
        ])
      ], 2)
    ]),
    m("view", Hg, [
      m("view", Rg, [
        e.$slots.title ? N("", !0) : (u(), f("span", Fg, E(e.title), 1)),
        _(e.$slots, "title")
      ]),
      e.content || e.$slots.content ? (u(), f("view", Wg, [
        e.$slots.content ? N("", !0) : (u(), f("span", {
          key: 0,
          innerHTML: e.content
        }, null, 8, Yg)),
        _(e.$slots, "content")
      ])) : N("", !0)
    ])
  ], 2);
}
const Ug = /* @__PURE__ */ K(Pg, [["render", jg]]), Po = Symbol("nut-swiper"), { create: Kg, componentName: An } = Y("swiper"), Xg = Kg({
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
    }), l = xe(), r = D(() => e.direction === "vertical"), i = D(() => {
      const F = An;
      return {
        [`${F}-inner`]: !0,
        [`${F}-vertical`]: r.value
      };
    }), p = D(() => {
      const F = An;
      return {
        [`${F}-pagination`]: !0,
        [`${F}-pagination-vertical`]: r.value
      };
    }), d = D(() => r.value ? l.deltaY.value : l.deltaX.value), v = D(() => l.direction.value === e.direction), g = D(() => a.children.length), k = D(() => a[r.value ? "height" : "width"]), $ = D(() => g.value * k.value), b = D(() => a.rect ? (r.value ? a.rect.height : a.rect.width) - k.value * g.value : 0), c = D(() => (a.active + g.value) % g.value), y = () => {
      let F = 0;
      F = a.offset, a.style = {
        transitionDuration: `${a.moving ? 0 : e.duration}ms`,
        transform: `translate${r.value ? "Y" : "X"}(${F}px)`,
        [r.value ? "height" : "width"]: `${k.value * g.value}px`,
        [r.value ? "width" : "height"]: `${r.value ? a.width : a.height}px`
      };
    }, h = (F) => {
      var ue;
      let te = [];
      const q = a.childrenVNode.length;
      let se = (ue = n == null ? void 0 : n.default) == null ? void 0 : ue.call(n);
      if (se = se.filter((pe) => pe.children && Array.isArray(pe.children)), se.forEach((pe) => {
        te = te.concat(pe.children);
      }), !q)
        a.childrenVNode = te.slice(), F.proxy && a.children.push(F.proxy);
      else if (q > te.length)
        a.children = a.children.filter((pe) => F.proxy !== pe);
      else if (q < te.length) {
        for (let pe = 0; pe < q; pe++)
          if (te[pe].key !== a.childrenVNode[pe].key) {
            F.proxy && a.children.splice(pe, 0, F.proxy), F.vnode && a.childrenVNode.splice(pe, 0, F.vnode);
            break;
          }
        q !== te.length && (F.proxy && a.children.push(F.proxy), F.vnode && a.childrenVNode.push(F.vnode));
      } else
        a.childrenVNode = te.slice(), F.proxy && a.children.push(F.proxy);
    }, w = (F, te = 0) => {
      let q = F * k.value;
      e.loop || (q = Math.min(q, -b.value));
      let se = te - q;
      return e.loop || (se = Pe(se, b.value, 0)), se;
    }, S = (F) => {
      const { active: te } = a;
      return F ? e.loop ? Pe(te + F, -1, g.value) : Pe(te + F, 0, g.value - 1) : te;
    }, I = ({ pace: F = 0, offset: te = 0, isEmit: q = !1 }) => {
      if (g.value <= 1)
        return;
      const { active: se } = a, ue = S(F), pe = w(ue, te);
      if (e.loop) {
        if (a.children[0] && pe !== b.value) {
          const we = pe < b.value;
          a.children[0].setOffset(we ? $.value : 0);
        }
        if (a.children[g.value - 1] && pe !== 0) {
          const we = pe > 0;
          a.children[g.value - 1].setOffset(we ? -$.value : 0);
        }
      }
      a.active = ue, a.offset = pe, q && se !== a.active && t("change", c.value), y();
    }, B = () => {
      a.moving = !0, a.active <= -1 && I({ pace: g.value }), a.active >= g.value && I({ pace: -g.value });
    }, M = () => {
      a.autoplayTimer && clearTimeout(a.autoplayTimer);
    }, C = (F) => {
      B(), l.reset(), Ve(() => {
        Ve(() => {
          a.moving = !1, I({
            pace: F,
            isEmit: !0
          });
        });
      });
    }, T = () => {
      C(-1);
    }, P = () => {
      C(1);
    }, O = (F) => {
      B(), l.reset(), Ve(() => {
        a.moving = !1;
        let te;
        e.loop && g.value === F ? te = a.active === 0 ? 0 : F : te = F % g.value, I({
          pace: te - a.active,
          isEmit: !0
        });
      });
    }, X = () => {
      +e.autoPlay <= 0 || g.value <= 1 || (M(), a.autoplayTimer = setTimeout(() => {
        P(), X();
      }, Number(e.autoPlay)));
    }, Z = (F = +e.initPage) => {
      M(), a.rect = o.value.getBoundingClientRect(), F = Math.min(g.value - 1, F), a.width = e.width ? +e.width : a.rect.width, a.height = e.height ? +e.height : a.rect.height, a.active = F, a.offset = w(a.active), a.moving = !0, y(), X();
    }, le = (F) => {
      e.isPreventDefault && F.preventDefault(), e.isStopPropagation && F.stopPropagation(), e.touchable && (l.start(F), a.touchTime = Date.now(), M(), B());
    }, j = (F) => {
      e.touchable && a.moving && (l.move(F), v.value && I({
        offset: d.value
      }));
    }, U = () => {
      if (!e.touchable || !a.moving)
        return;
      const F = d.value / (Date.now() - a.touchTime);
      if ((Math.abs(F) > 0.3 || Math.abs(d.value) > +(k.value / 2).toFixed(2)) && v.value) {
        let q = 0;
        const se = r.value ? l.offsetY.value : l.offsetX.value;
        e.loop ? q = se > 0 ? d.value > 0 ? -1 : 1 : 0 : q = -Math[d.value > 0 ? "ceil" : "floor"](d.value / k.value), I({
          pace: q,
          isEmit: !0
        });
      } else
        d.value && I({ pace: 0 });
      a.moving = !1, y(), X();
    };
    return Le(Po, {
      props: e,
      size: k,
      relation: h
    }), s({
      prev: T,
      next: P,
      to: O
    }), St(() => {
      M();
    }), Gt(() => {
      M();
    }), Q(
      () => e.initPage,
      (F) => {
        Se(() => {
          Z(Number(F));
        });
      }
    ), Q(
      () => e.height,
      () => {
        Se(() => {
          Z();
        });
      }
    ), Q(
      () => a.children.length,
      () => {
        Se(() => {
          Z();
        });
      }
    ), Q(
      () => e.autoPlay,
      (F) => {
        +F > 0 ? X() : M();
      }
    ), {
      state: a,
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
function qg(e, t, n, s, o, a) {
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
      _(e.$slots, "default")
    ], 6),
    _(e.$slots, "page"),
    e.paginationVisible && !e.$slots.page ? (u(), f("view", {
      key: 0,
      class: L(e.classesPagination)
    }, [
      (u(!0), f(x, null, ie(e.state.children.length, (l, r) => (u(), f("i", {
        key: r,
        style: A({
          backgroundColor: e.activePagination === r ? e.paginationColor : e.paginationUnselectedColor
        }),
        class: L({ active: e.activePagination === r })
      }, null, 6))), 128))
    ], 2)) : N("", !0)
  ], 544);
}
const pn = /* @__PURE__ */ K(Xg, [["render", qg]]);
function Zg(e) {
  const t = We();
  t && Object.assign(t.proxy, e);
}
const { create: Gg } = Y("swiper-item"), Jg = Gg({
  setup() {
    const e = Me(Po);
    e.relation(We());
    const t = ce({
      offset: 0
    }), n = D(() => {
      const o = {}, a = e == null ? void 0 : e.props.direction;
      return e != null && e.size.value && (o[a === "horizontal" ? "width" : "height"] = `${e == null ? void 0 : e.size.value}px`), t.offset && (o.transform = `translate${a === "horizontal" ? "X" : "Y"}(${t.offset}px)`), o;
    }), s = (o) => {
      t.offset = o;
    };
    return Ke(() => {
      e.relation(We(), "unmount");
    }), Zg({ setOffset: s }), {
      style: n
    };
  }
});
function Qg(e, t, n, s, o, a) {
  return u(), f("view", {
    class: "nut-swiper-item",
    style: A(e.style)
  }, [
    _(e.$slots, "default")
  ], 4);
}
const mn = /* @__PURE__ */ K(Jg, [["render", Qg]]), { componentName: zn, create: xg } = Y("price"), e0 = xg({
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
      [zn]: !0,
      [`${zn}--strike`]: e.strikeThrough
    })), n = D(() => e.needSymbol ? e.symbol : ""), s = (l) => String(l).indexOf(".") > 0;
    return {
      classes: t,
      showSymbol: n,
      checkPoint: s,
      formatThousands: (l) => (Number(l) == 0 && (l = 0), s(l) ? (l = Number(l).toFixed(e.decimalDigits), l = typeof l.split(".") == "string" ? l.split(".") : l.split(".")[0]) : l = l.toString(), e.thousands ? (l || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,") : l),
      formatDecimal: (l) => {
        Number(l) == 0 && (l = 0), s(l) ? (l = Number(l).toFixed(e.decimalDigits), l = typeof l.split(".") == "string" ? 0 : l.split(".")[1] ? l.split(".")[1] : 0) : l = 0;
        const r = "0." + l, i = Number(r).toFixed(e.decimalDigits);
        return String(i).substring(2, i.length);
      }
    };
  }
}), t0 = ["innerHTML"], n0 = ["innerHTML"];
function o0(e, t, n, s, o, a) {
  return u(), f("view", {
    class: L(e.classes)
  }, [
    e.needSymbol && e.position === "before" ? (u(), f("view", {
      key: 0,
      class: L(["nut-price--symbol", `nut-price--symbol-${e.size}`]),
      innerHTML: e.showSymbol
    }, null, 10, t0)) : N("", !0),
    m("view", {
      class: L(`nut-price--${e.size}`)
    }, E(e.formatThousands(e.price)), 3),
    e.decimalDigits != 0 ? (u(), f("view", {
      key: 1,
      class: L(`nut-price--decimal-${e.size}`)
    }, ".", 2)) : N("", !0),
    m("view", {
      class: L(`nut-price--decimal-${e.size}`)
    }, E(e.formatDecimal(e.price)), 3),
    e.needSymbol && e.position === "after" ? (u(), f("view", {
      key: 2,
      class: L(["nut-price--symbol", `nut-price--symbol-${e.size}`]),
      innerHTML: e.showSymbol
    }, null, 10, n0)) : N("", !0)
  ], 2);
}
const hn = /* @__PURE__ */ K(e0, [["render", o0]]), Ao = {
  show: { type: Boolean, default: !1 },
  initNo: { type: Number, default: 0 },
  showIndex: { type: Boolean, default: !0 },
  minZoom: { type: Number, default: 1 / 3 },
  maxZoom: { type: Number, default: 3 }
}, { create: l0 } = Y("image-preview-item"), s0 = l0({
  props: de(G({}, Ao), {
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
    NutVideo: fn,
    NutSwiperItem: mn
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
    }), s = xe(), o = D(() => {
      const { rootWidth: T, rootHeight: P } = e, O = P / T;
      return n.imageRatio > O;
    }), a = D(() => {
      const T = e.image;
      if (T && T.src) {
        const { scale: P, moveX: O, moveY: X, moving: Z, zooming: le } = n, j = {
          transitionDuration: le || Z ? "0s" : ".3s"
        };
        if (P !== 1) {
          const U = O / P, F = X / P;
          j.transform = `scale(${P}, ${P}) translate(${U}px, ${F}px)`;
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
      T = Pe(T, +e.minZoom, +e.maxZoom + 1), T !== n.scale && (n.scale = T, t("scale", {
        scale: T,
        index: e.initNo
      }));
    }, v = () => {
      const T = n.scale > 1 ? 1 : 2;
      d(T), n.moveX = 0, n.moveY = 0;
    }, g = (T) => Math.sqrt(pt(T[0].clientX - T[1].clientX, 2) + pt(T[0].clientY - T[1].clientY, 2));
    let k, $, b, c, y, h, w;
    const S = (T) => {
      const { touches: P } = T, { offsetX: O } = s;
      s.start(T), w = P.length, k = n.moveX, $ = n.moveY, h = Date.now(), n.moving = w === 1 && n.scale !== 1, n.zooming = w === 2 && !O.value, n.zooming && (b = n.scale, c = g(T.touches));
    }, I = (T) => {
      const { touches: P } = T;
      if (s.move(T), (n.moving || n.zooming) && dt(T, !0), n.moving) {
        const { deltaX: O, deltaY: X } = s, Z = O.value + k, le = X.value + $;
        n.moveX = Pe(Z, -l.value, l.value), n.moveY = Pe(le, -r.value, r.value);
      }
      if (n.zooming && P.length === 2) {
        const O = g(P), X = b * O / c;
        d(X);
      }
    }, B = () => {
      if (w == 1 && e.video && e.video.source || w > 1)
        return;
      const { offsetX: T, offsetY: P } = s, O = Date.now() - h, X = 250, Z = 5;
      T.value < Z && P.value < Z && O < X && (y ? (clearTimeout(y), y = null, v()) : y = setTimeout(() => {
        e.contentClose && t("close"), y = null;
      }, X));
    }, M = (T) => {
      let P = !1;
      (n.moving || n.zooming) && (P = !0, n.moving && k === n.moveX && $ === n.moveY && (P = !1), T.touches.length || (n.zooming && (n.moveX = Pe(n.moveX, -l.value, l.value), n.moveY = Pe(n.moveY, -r.value, r.value), n.zooming = !1), n.moving = !1, k = 0, $ = 0, b = 1, n.scale < 1 && p(), n.scale > e.maxZoom && (n.scale = +e.maxZoom))), dt(T, P), B(), s.reset();
    }, C = () => {
      t("close");
    };
    return Q(() => e.initNo, p), Q(
      () => e.show,
      (T) => {
        T || p();
      }
    ), de(G({}, he(n)), {
      onTouchStart: S,
      onTouchMove: I,
      onTouchEnd: M,
      getDistance: g,
      imageStyle: a,
      imageLoad: i,
      closeSwiper: C
    });
  }
}), a0 = ["src"];
function r0(e, t, n, s, o, a) {
  const l = W("nut-video"), r = W("nut-swiper-item");
  return u(), ee(r, { onClick: e.closeSwiper }, {
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
        }, null, 40, a0)) : N("", !0),
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
const i0 = /* @__PURE__ */ K(s0, [["render", r0]]), { create: u0 } = Y("image-preview"), c0 = u0({
  props: de(G({}, Ao), {
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
    ImagePreviewItem: i0,
    CircleClose: xt,
    NutPopup: Ee,
    NutSwiper: pn
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
    }), a = D(() => Wn(e.videos) ? [].concat(e.videos).concat(e.images) : e.images), l = (d) => {
      d !== s.active && (s.active = d, t("change", s.active));
    }, r = () => {
      Qt(e.beforeClose, {
        args: [s.active],
        done: () => i()
      });
    }, i = () => {
      s.showPop = !1, t("close");
    }, p = () => {
      if (n.value) {
        const d = Fe(n.value);
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
    }), de(G({
      swipeRef: n
    }, he(s)), {
      onClose: r,
      mergeImages: a,
      setActive: l,
      iconClasses: o
    });
  }
}), d0 = {
  ref: "swipeRef",
  class: "nut-image-preview"
}, f0 = {
  key: 0,
  class: "nut-image-preview-index"
};
function p0(e, t, n, s, o, a) {
  const l = W("image-preview-item"), r = W("nut-swiper"), i = W("CircleClose"), p = W("nut-popup");
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
      m("view", d0, [
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
          default: ne(() => [
            (u(!0), f(x, null, ie(e.mergeImages, (d, v) => (u(), ee(l, {
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
      e.showIndex ? (u(), f("view", f0, E(e.active + 1) + " / " + E(e.mergeImages.length), 1)) : N("", !0),
      e.closeable ? (u(), f("view", {
        key: 1,
        class: L(e.iconClasses),
        onClick: t[0] || (t[0] = (...d) => e.onClose && e.onClose(...d))
      }, [
        _(e.$slots, "close-icon", {}, () => [
          oe(i, { color: "#ffffff" })
        ])
      ], 2)) : N("", !0)
    ]),
    _: 3
  }, 8, ["visible", "teleport-disable", "teleport", "onClosed"]);
}
const gn = /* @__PURE__ */ K(c0, [["render", p0]]);
class m0 {
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
class h0 {
  constructor(t) {
    V(this, "options", new m0());
    const n = Object.assign(this.options, t), { unmount: s } = on(n, {
      name: "image-preview",
      components: [Ee, fn, pn, mn, Tt],
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
const g0 = (e) => new h0(e);
g0.install = (e) => {
  e.use(gn);
};
function y0(e) {
  const t = We();
  t && Object.assign(t.proxy, e);
}
const { create: v0 } = Y("countup"), $0 = v0({
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
    }), { startFlag: l, scrolling: r, customBgImg: i, type: p } = ce(e);
    Q(
      () => e.customChangeNum,
      () => {
        v(), c(0);
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
      l && (r || i ? p != "machine" && c() : (b(), setTimeout(() => {
        a.valFlag = !0;
      }, 300)));
    }, v = () => {
      clearInterval(Number(a.timer)), a.timer = null;
    }, g = (C, T, P) => {
      const O = (C.toString().split(".")[1] || "").length, X = (T.toString().split(".")[1] || "").length, Z = Math.pow(10, Math.max(O, X));
      return P == "-" ? Number((C * Z - T * Z).toFixed(0)) / Z : Number((C * Z + T * Z).toFixed(0)) / Z;
    }, k = (C) => {
      let { num_total_len: T, pointNum: P, initDigit1: O, initDigit2: X, sortFlag: Z } = a, le = Z == "add" || Z == "equal" ? String(X)[C - (T - P)] : 10 - Number(String(X)[C - (T - P)]), j = Z == "add" || Z == "equal" ? String(O)[C] : 10 - Number(String(O)[C]), U = C > T - P - 1 ? -le * 100 + "%" : C <= String(O).length - 1 ? -j * 100 + "%" : 0;
      return U == "-1000%" && (U = 0), U;
    }, $ = (C) => {
      let { num_total_len: T, pointNum: P, initDigit1: O, initDigit2: X } = a, Z = String(X)[C - (T - P)];
      return C > T - P - 1 ? Z || 0 : C <= String(O).length - 1 ? String(O)[C] : 0;
    }, b = () => {
      let { endNum: C, initNum: T, speed: P, toFixed: O } = e, X = setInterval(() => {
        if (T > C)
          if (Number(a.current) <= C || Number(a.current) <= P)
            a.current = C.toFixed(O), clearInterval(X), t("scrollEnd"), a.valFlag = !1;
          else {
            let Z = parseFloat(String(a.current)) - parseFloat(String(P));
            a.current = Z.toFixed(O);
          }
        else if (Number(a.current) >= C)
          a.current = C.toFixed(O), clearInterval(X), t("scrollEnd"), a.valFlag = !1;
        else {
          let Z = parseFloat(String(a.current)) + parseFloat(String(P));
          a.current = Z.toFixed(O);
        }
      }, e.during);
    }, c = (C) => {
      let { initNum: T, endNum: P, toFixed: O, customBgImg: X } = e;
      X && (T = e.customChangeNum);
      let Z, le, j, U;
      T != 0 ? (O != 0 && (T = Number(T.toFixed(O))), String(T).indexOf(".") > -1 ? (Z = String(T).split(".")[0].length, le = String(T).split(".")[1].length) : (Z = String(T).length, le = 0)) : (Z = 1, le = 0), P != 0 ? (O != 0 && (P = Number(P.toFixed(O))), String(P).indexOf(".") > -1 ? (j = String(P).split(".")[0].length, U = String(P).split(".")[1].length) : (j = String(P).length, U = 0)) : (j = 1, U = 0);
      let F = Z >= j ? Z : j, te = le >= U ? le : U;
      a.num_total_len = F + te, a.pointNum = te, T > P ? (a.sortFlag = "reduce", a.to0_10 = [0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], a.totalCount = g(T, P, "-"), a.numberVal = Number(String(T))) : T < P ? (a.sortFlag = "add", a.to0_10 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0], a.totalCount = g(P, T, "-"), a.numberVal = Number(String(P))) : a.sortFlag = "equal";
      var q = 1;
      for (let ue = 0; ue < a.pointNum; ue++)
        q *= 10;
      var se = a.numberVal * q;
      if (a.relNum = se, O != 0 && (a.pointNum = String(a.numberVal).split(".")[1] ? String(a.numberVal).split(".")[1].length : 0, a.num_total_len = String(se).length), String(T).indexOf(".") > -1) {
        let ue = String(T).split(".");
        a.initDigit1 = Number(ue[0]), a.initDigit2 = Number(ue[1]);
      } else
        a.initDigit1 = T, a.initDigit2 = 0;
      r && !X ? Se(() => {
        if (a.sortFlag == "equal")
          return !1;
        let ue = s.value[a.num_total_len - 1];
        y(ue);
      }) : C !== 0 && S();
    }, y = (C) => {
      v();
      var T = 1;
      a.pointNum != 0 && (T = 1 / Math.pow(10, a.pointNum)), a.timer = setInterval(() => {
        h(C), a.totalCount = g(a.totalCount, T, "-"), a.totalCount <= 0 && (v(), t("scrollEnd"), a.valFlag = !1);
      }, e.during);
    }, h = (C) => {
      let T = C.getAttribute("turn-number"), P;
      if (a.sortFlag == "add" ? P = parseInt(String(T)) + 1 : P = parseInt(String(T)) - 1 >= 0 ? parseInt(String(T)) - 1 : 9, C.setAttribute("turn-number", String(P)), (C.style.transition == "none 0s ease 0s" || P == 1 || !C.style.transition) && (C.style.transition = `all linear ${e.during}ms`), P == 10 || a.sortFlag == "reduce" && P == 0) {
        var O = null;
        C.style.top = `-${a.sortFlag == "add" ? P * 100 : (10 - P) * 100}%`, C.setAttribute("turn-number", "0"), O = setTimeout(() => {
          O && clearTimeout(O), C.style.transition = "none", C.style.top = "0", w(C, P);
        }, 0.975 * e.during);
      } else
        C.style.top = `-${a.sortFlag == "add" ? P * 100 : (10 - P) * 100}%`;
      C.style.top == "-100%" && a.sortFlag == "reduce" && h(C.previousSibling);
    }, w = (C, T) => {
      setTimeout(() => {
        T == 10 && C.previousSibling && h(C.previousSibling);
      }, 200);
    }, S = () => {
      Se(() => {
        n.value.addEventListener("webkitTransitionEnd", () => {
          t("scrollEnd"), a.valFlag = !1;
        });
      });
    }, I = () => {
      for (a.notPrize = []; a.notPrize.length < 3; ) {
        var C = Math.floor(Math.random() * e.machinePrizeNum + 1);
        a.notPrize.indexOf(C) == -1 && a.notPrize.push(C);
      }
    };
    y0({ machineLuck: () => {
      const C = e.machineTurnMore < 0 ? 0 : e.machineTurnMore;
      let T = e.numHeight * e.machinePrizeNum;
      a.prizeLevelTrun < 0 && I();
      for (let P = 0; P < e.machineNum; P++)
        setTimeout(() => {
          let O = T * (P + 1 + parseFloat(String(C)));
          a.prizeYPrev.length != 0 && (a.prizeY[P] = a.prizeYPrev[P]);
          let X = a.prizeYPrev[P] ? a.prizeYPrev[P] : 0, Z = O + X + (e.machinePrizeNum - a.prizeLevelTrun + 1) * e.numHeight + (T - X);
          a.prizeLevelTrun < 0 && (Z += e.numHeight * a.notPrize[P]), M(
            P,
            // parseFloat((this.machinePrizeNum-(this.prizeLevelTrun-1))*this.numHeight + turn + local),
            Z,
            X
          );
        }, 500 * P);
    } });
    const M = (C, T, P) => {
      let O = setInterval(() => {
        if (P <= T)
          P += 10, a.prizeY[C] = parseFloat(String(P));
        else if (clearInterval(O), O = null, a.finshMachine += 1, a.prizeY[C] = T, a.finshMachine == e.machineNum) {
          let X = e.numHeight * e.machinePrizeNum;
          a.prizeYPrev = [], JSON.parse(JSON.stringify(a.prizeY)).forEach((le) => {
            let j = le;
            for (; j > X; )
              j -= X;
            a.prizeYPrev.push(j);
          }), setTimeout(() => {
            a.finshMachine = 0, a.prizeLevelTrun < 0 ? (t("scrollEnd", !1), a.valFlag = !1) : (t("scrollEnd", !0), a.valFlag = !1);
          }, 130);
        }
      }, 30);
    };
    return ve(() => {
      a.current = e.initNum, Se(() => {
        d();
      });
    }), Ke(() => {
      v(), a.timer = null;
    }), de(G(G({}, he(a)), he(ce(e))), {
      runNumberImg: n,
      setRef: o,
      topNumber: k,
      turnNumber: $
    });
  }
}), b0 = { class: "nut-countup" }, w0 = ["turn-number"];
function k0(e, t, n, s, o, a) {
  return u(), f("view", b0, [
    e.customBgImg != "" ? (u(), f(x, { key: 0 }, [
      e.type == "machine" ? (u(), f("view", {
        key: 0,
        class: "nut-countup__machine",
        style: A({ height: e.numHeight + "px" })
      }, [
        (u(!0), f(x, null, ie(e.machineNum, (l, r) => (u(), f("view", {
          key: "mImg" + r,
          class: "nut-countup__machine-item",
          style: A({
            width: e.numWidth + "px",
            height: e.numHeight + "px",
            backgroundImage: "url(" + e.customBgImg + ")",
            backgroundPositionY: e.prizeY[r] + "px"
          })
        }, null, 4))), 128))
      ], 4)) : (u(), f("view", {
        key: 1,
        ref: "runNumberImg",
        class: "nut-countup__numberimg",
        style: A({ height: e.numHeight + "px" })
      }, [
        (u(!0), f(x, null, ie(e.num_total_len, (l, r) => (u(), f("view", {
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
        (u(!0), f(x, null, ie(e.num_total_len, (l, r) => (u(), f("view", {
          ref_for: !0,
          ref: (i) => e.setRef(i),
          key: l,
          class: "nut-countup__number-item",
          style: A({
            top: e.topNumber(r),
            left: e.numWidth * (r > e.num_total_len - e.pointNum - 1 ? r * 1.1 : r) + "px"
          }),
          "turn-number": e.turnNumber(r)
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
        ], 12, w0))), 128)),
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
const C0 = /* @__PURE__ */ K($0, [["render", k0]]), S0 = (e) => {
  if (!e)
    return Date.now();
  let t = e;
  return t = +t > 0 ? +t : t.toString().replace(/-/g, "/"), new Date(t).getTime();
}, { create: T0 } = Y("countdown"), N0 = "NutCountdown", D0 = T0({
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
    const s = ke(N0), o = ce({
      restTime: 0,
      // 倒计时剩余时间时间
      timer: null,
      counting: !e.paused && e.autoStart,
      // 是否处于倒计时中
      handleEndTime: Date.now(),
      // 最终截止时间
      diffTime: 0
      // 设置了 startTime 时，与 date.now() 的差异
    }), a = D(() => i(o.restTime)), l = () => {
      o.handleEndTime = e.endTime, o.diffTime = Date.now() - S0(e.startTime), o.counting || (o.counting = !0), r();
    }, r = () => {
      window !== void 0 && (o.timer = requestAnimationFrame(() => {
        if (o.counting) {
          const k = Date.now() - o.diffTime, $ = Math.max(o.handleEndTime - k, 0);
          o.restTime = $, $ || (o.counting = !1, v(), t("end"), t("onEnd")), $ > 0 && r();
        }
      }));
    }, i = (k, $) => {
      const b = k;
      let c = {
        d: 0,
        h: 0,
        m: 0,
        s: 0,
        ms: 0
      };
      const y = 1e3, h = 60 * y, w = 60 * h, S = 24 * w;
      return b > 0 && (c.d = b >= y ? Math.floor(b / S) : 0, c.h = Math.floor(b % S / w), c.m = Math.floor(b % w / h), c.s = Math.floor(b % h / y), c.ms = Math.floor(b % y)), $ == "custom" ? c : p(G({}, c));
    }, p = (k) => {
      let { d: $, h: b, m: c, s: y, ms: h } = k, w = e.format;
      if (w.includes("DD") ? w = w.replace("DD", Qe($)) : b += Number($) * 24, w.includes("HH") ? w = w.replace("HH", Qe(b)) : c += Number(b) * 60, w.includes("mm") ? w = w.replace("mm", Qe(c)) : y += Number(c) * 60, w.includes("ss") ? w = w.replace("ss", Qe(y)) : h += Number(y) * 1e3, w.includes("S")) {
        const S = Qe(h, 3).toString();
        w.includes("SSS") ? w = w.replace("SSS", S) : w.includes("SS") ? w = w.replace("SS", S.slice(0, 2)) : w.includes("S") && (w = w.replace("S", S.slice(0, 1)));
      }
      return w;
    }, d = () => {
      !o.counting && !e.autoStart && (o.counting = !0, o.handleEndTime = Date.now() + Number(o.restTime), r(), t("restart", o.restTime), t("onRestart", o.restTime));
    }, v = () => {
      cancelAnimationFrame(o.timer), o.counting = !1, t("paused", o.restTime), t("onPaused", o.restTime);
    }, g = () => {
      e.autoStart || (v(), o.restTime = e.time);
    };
    return Hn(() => {
      e.autoStart ? l() : o.restTime = e.time;
    }), Q(
      () => o.restTime,
      (k) => {
        let $ = i(k, "custom");
        t("update:modelValue", $), t("input", $);
      }
    ), Q(
      () => e.paused,
      (k, $) => {
        $ ? (o.counting || (o.counting = !0, o.handleEndTime = Date.now() + Number(o.restTime), r()), t("restart", o.restTime), t("onRestart", o.restTime)) : o.counting && v();
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
    ), de(G({}, he(e)), {
      slots: n,
      start: d,
      pause: v,
      renderTime: a,
      translate: s,
      reset: g
    });
  }
}), _0 = { class: "nut-countdown" }, I0 = ["innerHTML"];
function B0(e, t, n, s, o, a) {
  return u(), f("view", _0, [
    e.slots.default ? _(e.$slots, "default", { key: 0 }) : (u(), f("view", {
      key: 1,
      class: "nut-countdown__content",
      innerHTML: e.renderTime
    }, null, 8, I0))
  ]);
}
const M0 = /* @__PURE__ */ K(D0, [["render", B0]]), { create: L0 } = Y("tag"), E0 = L0({
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
    Close: zt
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
function P0(e, t, n, s, o, a) {
  const l = W("Close");
  return u(), f("view", {
    class: L(e.classes),
    style: A(e.style),
    onClick: t[0] || (t[0] = (...r) => e.onClick && e.onClick(...r))
  }, [
    _(e.$slots, "default"),
    e.closeable ? (u(), ee(l, {
      key: 0,
      class: "nut-tag--close",
      width: "12px",
      height: "12px",
      onClick: e.onClose
    }, null, 8, ["onClick"])) : N("", !0)
  ], 6);
}
const zo = /* @__PURE__ */ K(E0, [["render", P0]]), { create: A0 } = Y("popover"), z0 = A0({
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
    const n = z(), s = z(), o = z(e.visible), a = z(), l = z({
      width: 0,
      height: 0
    }), r = D(() => {
      const y = "nut-popover-arrow", h = e.location, w = h.split("-")[0];
      return `${y} ${y}-${w} ${y}--${h}`;
    }), i = D(() => {
      const y = {}, { bgColor: h, arrowOffset: w, location: S } = e, I = S.split("-")[0], B = S.split("-")[1], M = 16;
      return h && (y[`border${p(I)}Color`] = h), e.arrowOffset != 0 && (["bottom", "top"].includes(I) && (B || (y.left = `calc(50% + ${w}px)`), B == "start" && (y.left = `${M + w}px`), B == "end" && (y.right = `${M - w}px`)), ["left", "right"].includes(I) && (B || (y.top = `calc(50% - ${w}px)`), B == "start" && (y.top = `${M - w}px`), B == "end" && (y.bottom = `${M + w}px`))), y;
    }), p = (y) => (y = y.toLowerCase(), y = y.replace(/\b\w+\b/g, (h) => h.substring(0, 1).toUpperCase() + h.substring(1)), y), d = D(() => {
      const y = {};
      if (!a.value)
        return {};
      const h = l.value.width, w = l.value.height, { width: S, height: I, left: B, top: M, right: C } = a.value, { location: T, offset: P } = e, O = T == null ? void 0 : T.split("-")[0], X = T == null ? void 0 : T.split("-")[1];
      let Z = 0, le = 0;
      if (Array.isArray(P) && (P == null ? void 0 : P.length) === 2 && (Z += Number(P[1]), le += Number(P[0])), S) {
        if (["bottom", "top"].includes(O)) {
          const j = O === "bottom" ? I + Z : -(w + Z);
          y.top = `${M + j}px`, X || (y.left = `${-(h - S) / 2 + B + le}px`), X === "start" && (y.left = `${B + le}px`), X === "end" && (y.left = `${C + le}px`);
        }
        if (["left", "right"].includes(O)) {
          const j = O === "left" ? -(h + Z) : S + Z;
          y.left = `${B + j}px`, X || (y.top = `${M - w / 2 + I / 2 - 4 + le}px`), X === "start" && (y.top = `${M + le}px`), X === "end" && (y.top = `${M + I + le}px`);
        }
      }
      return y;
    }), v = () => {
      var h, w, S, I;
      const y = Fe(
        e.targetId ? document.querySelector(`#${e.targetId}`) : n.value
      );
      a.value = {
        width: y.width,
        height: y.height,
        left: y.left,
        top: y.top + Math.max(((h = document.documentElement) == null ? void 0 : h.scrollTop) || 0, ((w = document.body) == null ? void 0 : w.scrollTop) || 0),
        right: y.right
      }, l.value = {
        height: (S = s.value) == null ? void 0 : S.clientHeight,
        width: (I = s.value) == null ? void 0 : I.clientWidth
      };
    };
    ve(() => {
      setTimeout(() => {
        v();
      }, 300);
    }), Q(
      () => e.visible,
      (y) => {
        o.value = y, y ? (window.addEventListener("touchstart", c, !0), Se(() => {
          v();
        })) : window.removeEventListener("touchstart", c, !0);
      }
    );
    const g = (y) => {
      t("update", y), t("update:visible", y);
    }, k = () => {
      g(!e.visible), t("open");
    }, $ = () => {
      t("update:visible", !1), t("close");
    }, b = (y, h) => {
      !y.disabled && t("choose", y, h), e.closeOnClickAction && $();
    }, c = (y) => {
      const h = n.value, w = s.value;
      let S = h && !h.contains(y.target);
      if (e.targetId) {
        const I = document.querySelector(`#${e.targetId}`);
        S = I && !I.contains(y.target);
      }
      S && w && !w.contains(y.target) && e.closeOnClickOutside && $();
    };
    return {
      showPopup: o,
      openPopover: k,
      popoverArrow: r,
      closePopover: $,
      chooseItem: b,
      popoverRef: n,
      popoverContentRef: s,
      getRootPosition: d,
      popoverArrowStyle: i,
      renderIcon: ft
    };
  }
}), V0 = {
  ref: "popoverContentRef",
  class: "nut-popover-content-group"
}, O0 = ["onClick"], H0 = { class: "nut-popover-menu-item-name" };
function R0(e, t, n, s, o, a) {
  const l = W("nut-popup");
  return u(), f(x, null, [
    e.targetId ? N("", !0) : (u(), f("div", {
      key: 0,
      ref: "popoverRef",
      class: "nut-popover-wrapper",
      onClick: t[0] || (t[0] = (...r) => e.openPopover && e.openPopover(...r))
    }, [
      _(e.$slots, "reference")
    ], 512)),
    (u(), ee(On, { to: "body" }, [
      m("div", {
        class: L(["nut-popover", `nut-popover--${e.theme}`, `${e.customClass}`]),
        style: A(e.getRootPosition)
      }, [
        oe(l, {
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
            m("div", V0, [
              e.showArrow ? (u(), f("div", {
                key: 0,
                class: L(e.popoverArrow),
                style: A(e.popoverArrowStyle)
              }, null, 6)) : N("", !0),
              _(e.$slots, "content"),
              (u(!0), f(x, null, ie(e.list, (r, i) => (u(), f("div", {
                key: i,
                class: L([r.className, r.disabled && "nut-popover-menu-disabled", "nut-popover-menu-item"]),
                onClick: De((p) => e.chooseItem(r, i), ["stop"])
              }, [
                r.icon ? (u(), ee(Ae(e.renderIcon(r.icon)), {
                  key: 0,
                  class: "nut-popover-item-img"
                })) : N("", !0),
                m("div", H0, E(r.name), 1)
              ], 10, O0))), 128))
            ], 512)
          ]),
          _: 3
        }, 8, ["visible", "pop-class", "style", "overlay", "duration", "overlay-style", "overlay-class", "close-on-click-overlay"])
      ], 6)
    ]))
  ], 64);
}
const Vo = /* @__PURE__ */ K(z0, [["render", R0]]), { create: F0 } = Y("skeleton"), W0 = F0({
  components: {
    NutAvatar: dn
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
      getStyle: () => s.value ? {
        width: s.value,
        height: s.value
      } : {
        width: "50px",
        height: "50px"
      }
    };
  }
}), Y0 = { key: 0 }, j0 = {
  key: 1,
  class: "nut-skeleton"
}, U0 = {
  key: 0,
  class: "nut-skeleton-animation"
}, K0 = { class: "nut-skeleton-content" };
function X0(e, t, n, s, o, a) {
  const l = W("nut-avatar");
  return e.loading ? (u(), f("view", j0, [
    e.animated ? (u(), f("view", U0)) : N("", !0),
    m("view", K0, [
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
        (u(!0), f(x, null, ie(Number(e.row), (r) => (u(), f("view", {
          key: r,
          class: L(e.getBlockClass("nut-skeleton-blockLine")),
          style: A({ height: e.height })
        }, null, 6))), 128))
      ], 4)
    ])
  ])) : (u(), f("view", Y0, [
    _(e.$slots, "default")
  ]));
}
const q0 = /* @__PURE__ */ K(W0, [["render", X0]]), Oo = Symbol("nut-collapse"), Z0 = { class: "nut-collapse" }, Ho = /* @__PURE__ */ Ue({
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
    const a = (i, p, d = !0) => {
      o.value = i, s("update:modelValue", i), s("change", i, p, d);
    };
    return Le(Oo, {
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
    }), (i, p) => (u(), f("view", Z0, [
      _(i.$slots, "default")
    ]));
  }
});
at(Ho);
const G0 = { class: "nut-collapse-item__title-main" }, J0 = { class: "nut-collapse-item__title-main-value" }, Q0 = ["innerHTML"], x0 = {
  key: 2,
  class: "nut-collapse-item__title-label"
}, ey = {
  key: 0,
  class: "nut-collapse-item__title-sub"
}, ty = ["innerHTML"], ny = {
  key: 0,
  class: "nut-collapse__item-extraWrapper"
}, oy = { class: "nut-collapse__item-extraWrapper__extraRender" }, Ro = /* @__PURE__ */ Ue({
  name: "NutCollapseItem",
  __name: "collapse-item",
  props: {
    title: { default: "" },
    value: { default: "" },
    label: { default: "" },
    disabled: { type: Boolean, default: !1 },
    name: { default: -1 },
    border: { type: Boolean, default: !0 },
    icon: { default: () => Gn },
    rotate: { default: 180 }
  },
  setup(e) {
    const t = e, n = z(null), s = z(null), o = Me(Oo), a = D(() => {
      const g = "nut-collapse-item";
      return {
        [g]: !0,
        [g + "__border"]: t.border
      };
    }), l = D(() => o ? o.isExpanded(t.name) : !1), r = z(l.value ? "auto" : "0px"), i = () => {
      o && o.updateVal(t.name);
    }, p = () => {
      l.value && (r.value = "auto");
    }, d = () => {
      r.value = "0px", requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          var k;
          const g = (k = s.value) == null ? void 0 : k.offsetHeight;
          r.value = g ? `${g}px` : "auto";
        });
      });
    }, v = () => {
      var k;
      const g = (k = s.value) == null ? void 0 : k.offsetHeight;
      r.value = g ? `${g}px` : "auto", requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          r.value = "0px";
        });
      });
    };
    return Q(l, (g) => {
      g ? d() : v();
    }), (g, k) => (u(), f("view", {
      class: L(a.value)
    }, [
      m("view", {
        class: L(["nut-collapse-item__title", { "nut-collapse-item__title--disabled": g.disabled }]),
        onClick: i
      }, [
        m("view", G0, [
          m("view", J0, [
            g.$slots.title ? _(g.$slots, "title", { key: 0 }) : (u(), f("view", {
              key: 1,
              class: "nut-collapse-item__title-mtitle",
              innerHTML: g.title
            }, null, 8, Q0)),
            g.label ? (u(), f("view", x0, E(g.label), 1)) : N("", !0)
          ])
        ]),
        g.$slots.value ? (u(), f("view", ey, [
          _(g.$slots, "value")
        ])) : (u(), f("view", {
          key: 1,
          class: "nut-collapse-item__title-sub",
          innerHTML: g.value
        }, null, 8, ty)),
        m("view", {
          class: L(["nut-collapse-item__title-icon", { "nut-collapse-item__title-icon--expanded": l.value }]),
          style: A({ transform: "rotate(" + (l.value ? g.rotate : 0) + "deg)" })
        }, [
          g.$slots.icon ? _(g.$slots, "icon", { key: 0 }) : (u(), ee(Ae(Re(ft)(g.icon)), { key: 1 }))
        ], 6)
      ], 2),
      g.$slots.extra ? (u(), f("view", ny, [
        m("div", oy, [
          _(g.$slots, "extra")
        ])
      ])) : N("", !0),
      m("view", {
        ref_key: "wrapperRef",
        ref: n,
        class: "nut-collapse__item-wrapper",
        style: A({
          willChange: "height",
          height: r.value
        }),
        onTransitionend: p
      }, [
        m("view", {
          ref_key: "contentRef",
          ref: s,
          class: "nut-collapse__item-wrapper__content"
        }, [
          _(g.$slots, "default")
        ], 512)
      ], 36)
    ], 2));
  }
});
at(Ro);
const ly = Ue({
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
}), { create: sy } = Y("table"), ay = "NutTable", ry = sy({
  components: {
    RenderColumn: ly,
    DownArrow: Gn
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
    const n = ke(ay), s = ce({
      curData: e.data
    }), o = (v) => ({
      "nut-table__main__head__tr--border": e.bordered,
      [`nut-table__main__head__tr--align${v.align ? v.align : ""}`]: !0
    }), a = (v) => v.stylehead ? v.stylehead : "", l = (v) => v.stylecolumn ? v.stylecolumn : "", r = (v) => e.columns.filter((g) => g.key === v)[0], i = (v) => {
      const g = e.columns.filter((k) => k.key === v);
      return g[0].stylecolumn ? g[0].stylecolumn : "";
    }, p = (v) => {
      v.sorter && (t("sorter", v), s.curData = typeof v.sorter == "function" ? s.curData.sort(v.sorter) : v.sorter === "default" ? s.curData.sort() : s.curData);
    }, d = () => e.columns.map((v) => [v.key, v.render]);
    return Q(
      () => e.data,
      (v) => {
        s.curData = v.slice();
      }
    ), de(G({}, he(s)), {
      cellClasses: o,
      getColumnItem: r,
      getColumnItemStyle: i,
      handleSorterClick: p,
      sortDataItem: d,
      translate: n,
      stylehead: a,
      stylecolumn: l
    });
  }
}), iy = { class: "nut-table" }, uy = { class: "nut-table__main__head" }, cy = { class: "nut-table__main__head__tr" }, dy = ["onClick"], fy = { class: "nut-table__main__body" }, py = { key: 1 }, my = {
  key: 0,
  class: "nut-table__nodata"
}, hy = {
  key: 0,
  class: "nut-table__nodata__text"
}, gy = {
  key: 1,
  class: "nut-table__summary"
}, yy = ["innerHTML"];
function vy(e, t, n, s, o, a) {
  const l = W("DownArrow"), r = W("RenderColumn");
  return u(), f("view", iy, [
    m("view", {
      class: L(["nut-table__main", { "nut-table__main--striped": e.striped }])
    }, [
      m("view", uy, [
        m("view", cy, [
          (u(!0), f(x, null, ie(e.columns, (i) => (u(), f("span", {
            key: i.key,
            class: L(["nut-table__main__head__tr__th", e.cellClasses(i)]),
            style: A(i.stylehead),
            onClick: (p) => e.handleSorterClick(i)
          }, [
            ge(E(i.title) + " ", 1),
            _(e.$slots, "icon"),
            !e.$slots.icon && i.sorter ? (u(), ee(l, {
              key: 0,
              width: "12px",
              height: "12px"
            })) : N("", !0)
          ], 14, dy))), 128))
        ])
      ]),
      m("view", fy, [
        (u(!0), f(x, null, ie(e.curData, (i) => (u(), f("view", {
          key: i,
          class: "nut-table__main__body__tr"
        }, [
          (u(!0), f(x, null, ie(e.sortDataItem(), ([p, d]) => (u(), f("span", {
            key: p,
            class: L(["nut-table__main__body__tr__td", e.cellClasses(e.getColumnItem(p))]),
            style: A(e.getColumnItemStyle(p))
          }, [
            typeof i[p] == "function" || typeof d == "function" ? (u(), ee(r, {
              key: 0,
              slots: [d, i[p]],
              record: i
            }, null, 8, ["slots", "record"])) : (u(), f("view", py, E(i[p]), 1))
          ], 6))), 128))
        ]))), 128))
      ])
    ], 2),
    e.curData.length ? N("", !0) : (u(), f("view", my, [
      m("div", {
        class: L(["nut-table__nodata", { "nut-table__nodata--border": e.bordered }])
      }, [
        _(e.$slots, "nodata"),
        e.$slots.nodata ? N("", !0) : (u(), f("div", hy, E(e.translate("noData")), 1))
      ], 2)
    ])),
    e.summary ? (u(), f("view", gy, [
      m("span", {
        class: "nut-table__summary__text",
        innerHTML: e.summary().value
      }, null, 8, yy)
    ])) : N("", !0)
  ]);
}
const $y = /* @__PURE__ */ K(ry, [["render", vy]]), { create: by } = Y("animate"), wy = by({
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
    })), o = () => {
      n.value = !1, requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          n.value = !0;
        });
      });
    }, a = (l) => {
      e.action === "click" && (o(), t("click", l), t("animate"));
    };
    return Q(
      () => e.show,
      (l) => {
        l && (o(), t("animate"));
      }
    ), { classes: s, handleClick: a };
  }
}), ky = { class: "nut-animate" };
function Cy(e, t, n, s, o, a) {
  return u(), f("view", ky, [
    m("view", {
      class: L(e.classes),
      style: A({
        animationDuration: e.duration ? `${e.duration}ms` : void 0
      }),
      onClick: t[0] || (t[0] = (...l) => e.handleClick && e.handleClick(...l))
    }, [
      _(e.$slots, "default")
    ], 6)
  ]);
}
const Sy = /* @__PURE__ */ K(wy, [["render", Cy]]), { create: Ty } = Y("ellipsis"), Ny = Ty({
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
    const a = z(), l = ce({
      exceeded: !1,
      //是否超出
      expanded: !1
      //是否折叠
    });
    Q(
      () => e.content,
      ($, b) => {
        $ != b && r();
      }
    ), ve(() => {
      r();
    });
    const r = () => {
      if (!n.value)
        return;
      const $ = window.getComputedStyle(n.value);
      s = document.createElement("div"), Array.prototype.slice.apply($).forEach((y) => {
        s.style.setProperty(y, $.getPropertyValue(y));
      }), s.style.position = "fixed", s.style.left = "999999px", s.style.top = "999999px", s.style.zIndex = "-1000", s.style.height = "auto", s.style.minHeight = "auto", s.style.maxHeight = "auto", s.style.textOverflow = "clip", s.style.whiteSpace = "normal", s.style.webkitLineClamp = "unset", s.style.display = "block";
      const c = v($.lineHeight === "normal" ? e.lineHeight : $.lineHeight);
      o = Math.floor(
        c * (Number(e.rows) + 0.5) + v($.paddingTop) + v($.paddingBottom)
      ), s.innerText = e.content, document.body.appendChild(s), i();
    }, i = () => {
      if (s.offsetHeight <= o)
        l.exceeded = !1, document.body.removeChild(s);
      else {
        l.exceeded = !0;
        const $ = e.content.length, b = Math.floor((0 + $) / 2), c = e.direction === "middle" ? d([0, b], [b, $]) : p(0, $);
        a.value = c, document.body.removeChild(s);
      }
    }, p = ($, b) => {
      const c = l.expanded ? e.collapseText : e.expandText, y = e.content.length;
      if (b - $ <= 1)
        return e.direction === "end" ? {
          leading: e.content.slice(0, $) + e.symbol
        } : {
          tailing: e.symbol + e.content.slice(b, y)
        };
      const h = Math.round(($ + b) / 2);
      return e.direction === "end" ? s.innerText = e.content.slice(0, h) + e.symbol + c : s.innerText = c + e.symbol + e.content.slice(h, y), s.offsetHeight <= o ? e.direction === "end" ? p(h, b) : p($, h) : e.direction === "end" ? p($, h) : p(h, b);
    }, d = ($, b) => {
      const c = l.expanded ? e.collapseText : e.expandText, y = e.content.length;
      if ($[1] - $[0] <= 1 && b[1] - b[0] <= 1)
        return {
          leading: e.content.slice(0, $[0]) + e.symbol,
          tailing: e.symbol + e.content.slice(b[1], y)
        };
      const h = Math.floor(($[0] + $[1]) / 2), w = Math.ceil((b[0] + b[1]) / 2);
      return s.innerText = e.content.slice(0, h) + e.symbol + c + e.symbol + e.content.slice(w, y), s.offsetHeight <= o ? d([h, $[1]], [b[0], w]) : d([$[0], h], [w, b[1]]);
    }, v = ($) => {
      if (!$)
        return 0;
      const b = $.match(/^\d*(\.\d*)?/);
      return b ? Number(b[0]) : 0;
    }, g = ($) => {
      $ == 1 ? (l.expanded = !0, t("change", "expand")) : (l.expanded = !1, t("change", "collapse"));
    }, k = () => {
      t("click");
    };
    return de(G({}, he(l)), { root: n, ellipsis: a, clickHandle: g, handleClick: k });
  }
}), Dy = { key: 0 }, _y = { key: 1 }, Iy = { key: 2 };
function By(e, t, n, s, o, a) {
  return u(), f("view", {
    ref: "root",
    class: "nut-ellipsis",
    onClick: t[2] || (t[2] = (...l) => e.handleClick && e.handleClick(...l))
  }, [
    e.exceeded ? N("", !0) : (u(), f("view", Dy, E(e.content), 1)),
    e.exceeded && !e.expanded ? (u(), f("view", _y, [
      ge(E(e.ellipsis && e.ellipsis.leading), 1),
      e.expandText ? (u(), f("span", {
        key: 0,
        class: "nut-ellipsis__text",
        onClick: t[0] || (t[0] = De((l) => e.clickHandle(1), ["stop"]))
      }, E(e.expandText), 1)) : N("", !0),
      ge(E(e.ellipsis && e.ellipsis.tailing), 1)
    ])) : N("", !0),
    e.exceeded && e.expanded ? (u(), f("view", Iy, [
      ge(E(e.content) + " ", 1),
      e.expandText ? (u(), f("span", {
        key: 0,
        class: "nut-ellipsis__text",
        onClick: t[1] || (t[1] = De((l) => e.clickHandle(2), ["stop"]))
      }, E(e.collapseText), 1)) : N("", !0)
    ])) : N("", !0)
  ], 512);
}
const My = /* @__PURE__ */ K(Ny, [["render", By]]), { componentName: Ly, create: Ey } = Y("watermark"), Py = Ey({
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
      width: a,
      height: l,
      rotate: r,
      image: i,
      imageWidth: p,
      imageHeight: d,
      content: v,
      fontStyle: g,
      fontWeight: k,
      fontColor: $,
      fontSize: b,
      fontFamily: c
    } = e, y = () => {
      const w = document.createElement("canvas"), S = window.devicePixelRatio, I = w.getContext("2d"), B = `${(s + a) * S}px`, M = `${(o + l) * S}px`, C = a * S, T = l * S;
      if (w.setAttribute("width", B), w.setAttribute("height", M), I) {
        if (i) {
          I.translate(C / 2, T / 2), I.rotate(Math.PI / 180 * Number(r));
          const P = new Image();
          P.crossOrigin = "anonymous", P.referrerPolicy = "no-referrer", P.src = i, P.onload = () => {
            I.drawImage(
              P,
              -p * S / 2,
              -d * S / 2,
              p * S,
              d * S
            ), I.restore(), t.base64Url = w.toDataURL();
          };
        } else if (v) {
          I.textBaseline = "middle", I.textAlign = "center", I.translate(C / 2, T / 2), I.rotate(Math.PI / 180 * Number(r));
          const P = Number(b) * S;
          I.font = `${g} normal ${k} ${P}px/${T}px ${c}`, I.fillStyle = $, Array.isArray(v) ? v.map((O, X) => {
            I.fillText(O, 0, (X - 1) * P);
          }) : I.fillText(v, 0, 0), I.restore(), t.base64Url = w.toDataURL();
        }
      } else
        throw new Error("当前环境不支持Canvas");
    };
    y(), Q(
      () => [
        n,
        s,
        o,
        a,
        l,
        r,
        i,
        p,
        d,
        v,
        g,
        k,
        $,
        b,
        c
      ],
      () => {
        y();
      }
    );
    const h = D(() => {
      const w = Ly;
      return {
        [w]: !0,
        [`${w}-full-page`]: e.fullPage
      };
    });
    return de(G({}, he(t)), { classes: h });
  }
});
function Ay(e, t, n, s, o, a) {
  return u(), f("view", {
    class: L(e.classes),
    style: A({
      zIndex: e.zIndex,
      backgroundSize: `${e.gapX + e.width}px`,
      backgroundImage: `url('${e.base64Url}')`
    })
  }, null, 6);
}
const zy = /* @__PURE__ */ K(Py, [["render", Ay]]), { create: Vy } = Y("trend-arrow"), Oy = Vy({
  components: { TriangleUp: Ur, TriangleDown: Rr },
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
      const { rate: o, digits: a, showSign: l, showZero: r } = e;
      t.rateTrend = o > 0;
      const i = Math.abs(o);
      return !r && o === 0 ? "--" : `${l && o !== 0 ? t.rateTrend ? "+" : "-" : ""}${ll(
        Number(i),
        a
      )}%`;
    }), s = D(() => {
      const { dropColor: o, riseColor: a, syncTextColor: l, textColor: r, rate: i } = e;
      return {
        color: i === 0 ? r : l ? t.rateTrend ? a : o : r
      };
    });
    return de(G({}, he(t)), { calcRate: n, calcStyle: s });
  }
}), Hy = { class: "nut-trend-arrow" };
function Ry(e, t, n, s, o, a) {
  const l = W("TriangleUp"), r = W("TriangleDown");
  return u(), f("view", Hy, [
    e.arrowLeft ? N("", !0) : (u(), f("span", {
      key: 0,
      class: "nut-trend-arrow-icon-before nut-trend-arrow-rate",
      style: A(e.calcStyle)
    }, E(e.calcRate), 5)),
    Number(e.rate) !== 0 && e.rateTrend ? _(e.$slots, "up-icon", { key: 1 }, () => [
      oe(l, { color: e.riseColor }, null, 8, ["color"])
    ]) : N("", !0),
    Number(e.rate) !== 0 && !e.rateTrend ? _(e.$slots, "down-icon", { key: 2 }, () => [
      oe(r, { color: e.dropColor }, null, 8, ["color"])
    ]) : N("", !0),
    e.arrowLeft ? (u(), f("span", {
      key: 3,
      class: "nut-trend-arrow-icon-after nut-trend-arrow-rate",
      style: A(e.calcStyle)
    }, E(e.calcRate), 5)) : N("", !0)
  ]);
}
const Fy = /* @__PURE__ */ K(Oy, [["render", Ry]]), { create: Wy } = Y("tour"), Yy = Wy({
  components: {
    NutPopover: Vo,
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
    const n = ce({
      showTour: e.modelValue,
      showPopup: !1,
      active: 0
    }), s = z({}), o = D(() => "nut-tour"), a = D(() => {
      const { offset: d, maskWidth: v, maskHeight: g } = e, { width: k, height: $, left: b, top: c } = s.value, y = [b + k / 2, c + $ / 2], h = Number(v || k), w = Number(g || $);
      return {
        width: `${h + +d[1] * 2}px`,
        height: `${w + +d[0] * 2}px`,
        top: `${y[1] - w / 2 - +d[0]}px`,
        left: `${y[0] - h / 2 - +d[1]}px`
      };
    }), l = (d) => {
      d == "next" ? n.active = n.active + 1 : n.active = n.active - 1, n.showPopup = !1, Se(() => {
        n.showPopup = !0, r();
      }), t("change", n.active);
    }, r = () => {
      const d = document.querySelector(`#${e.steps[n.active].target}`), v = Fe(d);
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
      (d) => {
        d && r(), n.active = 0, n.showTour = d, n.showPopup = d;
      }
    ), de(G({}, he(n)), {
      classes: o,
      maskStyle: a,
      changeStep: l,
      close: i,
      handleClickMask: p
    });
  }
}), jy = {
  key: 0,
  class: "nut-tour-content"
}, Uy = {
  key: 0,
  class: "nut-tour-content-top"
}, Ky = { class: "nut-tour-content-inner" }, Xy = { class: "nut-tour-content-bottom" }, qy = { class: "nut-tour-content-bottom-init" }, Zy = { class: "nut-tour-content-bottom-operate" }, Gy = {
  key: 1,
  class: "nut-tour-content nut-tour-content-tile"
}, Jy = { class: "nut-tour-content-inner" };
function Qy(e, t, n, s, o, a) {
  const l = W("Close"), r = W("nut-popover");
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
            _(e.$slots, "default", {}, () => [
              e.type == "step" ? (u(), f("div", jy, [
                e.showTitleBar ? (u(), f("div", Uy, [
                  m("div", {
                    onClick: t[1] || (t[1] = (...d) => e.close && e.close(...d))
                  }, [
                    oe(l, { class: "nut-tour-content-top-close" })
                  ])
                ])) : N("", !0),
                m("div", Ky, E(i.content), 1),
                m("div", Xy, [
                  m("div", qy, E(e.active + 1) + "/" + E(e.steps.length), 1),
                  m("div", Zy, [
                    _(e.$slots, "prev-step", {}, () => [
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
                    _(e.$slots, "next-step", {}, () => [
                      e.steps.length - 1 != e.active ? (u(), f("div", {
                        key: 0,
                        class: "nut-tour-content-bottom-operate-btn active",
                        onClick: t[4] || (t[4] = (d) => e.changeStep("next"))
                      }, E(e.nextStepTxt), 1)) : N("", !0)
                    ])
                  ])
                ])
              ])) : N("", !0),
              e.type == "tile" ? (u(), f("div", Gy, [
                m("div", Jy, E(i.content), 1)
              ])) : N("", !0)
            ])
          ]),
          _: 2
        }, 1032, ["visible", "location", "bg-color", "theme", "offset", "arrow-offset"])
      ], 64)) : N("", !0)
    ]))), 128))
  ], 2);
}
const xy = /* @__PURE__ */ K(Yy, [["render", Qy]]), { create: ev } = Y("address"), tv = "NutAddress", nv = ev({
  components: {
    NutPopup: Ee,
    NutElevator: po,
    Location: ra,
    Location2: fa,
    Check: Xn,
    Close: zt,
    Left: en
  },
  inheritAttrs: !1,
  props: de(G({}, Nt), {
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
    const n = ke(tv), s = z(null), o = z(null), a = z(e.visible), l = z(e.type), r = z(0), i = z(0), p = z(["province", "city", "country", "town"]), d = z(null), v = z([0, 0, 0, 0]), g = ce([]), k = D(() => {
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
      const F = [];
      return U = U.sort((te, q) => te.title.localeCompare(q.title)), U.forEach((te) => {
        const q = F.findIndex((se) => se.title === te.title);
        q <= -1 ? F.push({
          title: te.title,
          list: [].concat(te)
        }) : F[q].list.push(te);
      }), F;
    };
    let b = z([]), c = ce({});
    const y = z("self"), h = z(20), w = () => {
      g[0] = e.province || [], g[1] = e.city || [], g[2] = e.country || [], g[3] = e.town || [];
      const U = e.modelValue, F = U.length;
      if (F > 0) {
        if (r.value = F - 1, k.value.length == 0) {
          r.value = 0;
          return;
        }
        for (let te = 0; te < F; te++) {
          let q = g[te];
          b.value[te] = q.filter((se) => se.id == U[te])[0];
        }
        I();
      }
    }, S = (U, F) => U && U.name || r.value < F && U ? U.name : e.columnsPlaceholder[F] || n("select"), I = () => {
      C(), Se(() => {
        const U = o.value && o.value.getElementsByClassName("active")[0];
        if (U) {
          const F = U.offsetLeft;
          h.value = F || 20;
        }
      });
    }, B = (U) => {
      var q;
      const F = r.value;
      i.value = r.value;
      const te = {
        custom: p.value[F]
      };
      b.value[F] = U, b.value.splice(F + 1, b.value.length - (F + 1)), te.value = U, ((q = g[F + 1]) == null ? void 0 : q.length) > 0 ? (r.value = F + 1, I(), te.next = p.value[r.value]) : (O(), t("update:modelValue")), t("change", te);
    }, M = (U, F) => {
      i.value = r.value, S(U, F) && (r.value = F, I());
    }, C = () => {
      const U = d.value, F = i.value, te = v.value[r.value];
      U != null && U.scrollTop && (v.value[F] = U == null ? void 0 : U.scrollTop), Se(() => {
        U == null || U.scrollTo({
          top: te,
          behavior: "auto"
        });
      });
    }, T = (U) => {
      const F = e.existAddress;
      let te = {};
      F.forEach((q) => {
        q && q.selectedAddress && (te = q), q.selectedAddress = !1;
      }), U.selectedAddress = !0, c = U, t("selected", te, U, F), O();
    }, P = () => {
      b.value = [], r.value = 0, I();
    }, O = (U = "self") => {
      y.value = U == "cross" ? "cross" : "self", a.value = !1;
    }, X = () => {
      y.value = "mask";
    }, Z = () => {
      const U = {
        addressIdStr: "",
        addressStr: "",
        province: b.value[0],
        city: b.value[1],
        country: b.value[2],
        town: b.value[3]
      }, F = {
        data: {},
        type: l.value
      };
      ["custom", "custom2"].includes(l.value) ? ([0, 1, 2, 3].forEach((te) => {
        const q = b.value[te];
        U.addressIdStr += `${te ? "_" : ""}${q && q.id || 0}`, U.addressStr += q && q.name || "";
      }), F.data = U) : F.data = c, P(), y.value == "self" ? t("close", F) : t("closeMask", { closeWay: y }), t("update:visible", !1);
    }, le = () => {
      const U = l.value;
      l.value = U == "exist" ? "custom" : "exist", P(), t("switchModule", { type: l.value });
    }, j = (U, F) => {
      B(F);
    };
    return Q(
      () => e.visible,
      (U) => {
        a.value = U;
      }
    ), Q(
      () => a.value,
      (U) => {
        U && w();
      }
    ), de(G({
      showPopup: a,
      privateType: l,
      tabIndex: r,
      tabName: p,
      selectedRegion: b,
      switchModule: le,
      closeWay: y,
      close: Z,
      getTabName: S,
      nextAreaList: B,
      regionLine: s,
      tabRegion: o,
      lineDistance: h,
      changeRegionTab: M,
      selectedExist: T,
      clickOverlay: X,
      handClose: O,
      handleElevatorItem: j,
      initCustomSelected: w
    }, he(e)), {
      translate: n,
      regionList: k,
      transformData: $,
      scrollDom: d
    });
  }
}), ov = { class: "nut-address" }, lv = { class: "nut-address__header" }, sv = { class: "nut-address__header__title" }, av = {
  key: 0,
  class: "nut-address__custom"
}, rv = {
  ref: "tabRegion",
  class: "nut-address__region"
}, iv = ["onClick"], uv = {
  key: 0,
  class: "active nut-address__region-item"
}, cv = {
  key: 0,
  class: "nut-address__detail"
}, dv = {
  ref: "scrollDom",
  class: "nut-address__detail-list"
}, fv = ["onClick"], pv = {
  key: 1,
  class: "nut-address__elevator-group"
}, mv = {
  key: 1,
  class: "nut-address__exist"
}, hv = { class: "nut-address__exist-group" }, gv = { class: "nut-address__exist-group-list" }, yv = ["onClick"], vv = { class: "nut-address__exist-item-info" }, $v = {
  key: 0,
  class: "nut-address__exist-item-info-name"
}, bv = {
  key: 1,
  class: "nut-address__exist-item-info-phone"
}, wv = { class: "nut-address__exist-item-info-bottom" }, kv = { class: "nut-address__exist-choose-btn" };
function Cv(e, t, n, s, o, a) {
  const l = W("Left"), r = W("Close"), i = W("Check"), p = W("nut-elevator"), d = W("Location2"), v = W("nut-popup");
  return u(), ee(v, {
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
      m("view", ov, [
        m("view", lv, [
          m("view", {
            class: "nut-address__header-back",
            onClick: t[0] || (t[0] = (...g) => e.switchModule && e.switchModule(...g))
          }, [
            _(e.$slots, "back-icon", {}, () => [
              Ce(oe(l, { size: "14px" }, null, 512), [
                [Ne, e.type == "exist" && e.privateType == "custom"]
              ])
            ])
          ]),
          m("view", sv, E(e.privateType == "custom" ? e.customAddressTitle || e.translate("selectRegion") : e.existAddressTitle || e.translate("deliveryTo")), 1),
          m("view", {
            class: "nut-address__header-close",
            onClick: t[1] || (t[1] = (g) => e.handClose("cross"))
          }, [
            _(e.$slots, "close-icon", {}, () => [
              oe(r, {
                color: "#cccccc",
                size: "14px"
              })
            ])
          ])
        ]),
        ["custom", "custom2"].includes(e.privateType) ? (u(), f("view", av, [
          m("view", rv, [
            (u(!0), f(x, null, ie(e.selectedRegion, (g, k) => (u(), f("view", {
              key: k,
              class: L(["nut-address__region-item", k == e.tabIndex ? "active" : ""]),
              onClick: ($) => e.changeRegionTab(g, k)
            }, [
              m("view", null, E(e.getTabName(g, k)), 1)
            ], 10, iv))), 128)),
            e.tabIndex == e.selectedRegion.length ? (u(), f("view", uv, [
              m("view", null, E(e.getTabName(null, e.selectedRegion.length)), 1)
            ])) : N("", !0),
            m("view", {
              ref: "regionLine",
              class: "nut-address__region-line",
              style: A({ left: e.lineDistance + "px" })
            }, null, 4)
          ], 512),
          e.privateType == "custom" ? (u(), f("view", cv, [
            m("ul", dv, [
              (u(!0), f(x, null, ie(e.regionList, (g, k) => {
                var $, b;
                return u(), f("li", {
                  key: k,
                  class: L(["nut-address__detail-item", (($ = e.selectedRegion[e.tabIndex]) == null ? void 0 : $.id) == g.id ? "active" : ""]),
                  onClick: (c) => e.nextAreaList(g)
                }, [
                  m("div", null, [
                    ((b = e.selectedRegion[e.tabIndex]) == null ? void 0 : b.id) == g.id ? _(e.$slots, "icon", { key: 0 }, () => [
                      oe(i, {
                        class: "nut-address-select-icon",
                        size: "13px"
                      })
                    ]) : N("", !0),
                    ge(E(g.name), 1)
                  ])
                ], 10, fv);
              }), 128))
            ], 512)
          ])) : (u(), f("view", pv, [
            oe(p, {
              height: e.height,
              "index-list": e.transformData(e.regionList),
              onClickItem: e.handleElevatorItem
            }, null, 8, ["height", "index-list", "onClickItem"])
          ]))
        ])) : (u(), f("view", mv, [
          m("div", hv, [
            m("ul", gv, [
              (u(!0), f(x, null, ie(e.existAddress, (g, k) => (u(), f("li", {
                key: k,
                class: L(["nut-address__exist-group-item", g.selectedAddress ? "active" : ""]),
                onClick: ($) => e.selectedExist(g)
              }, [
                g.selectedAddress ? N("", !0) : _(e.$slots, "unselected-icon", { key: 0 }, () => [
                  oe(d, {
                    class: "nut-address-select-icon",
                    size: "13px"
                  })
                ]),
                g.selectedAddress ? _(e.$slots, "icon", { key: 1 }, () => [
                  oe(i, {
                    class: "nut-address-select-icon",
                    size: "13px"
                  })
                ]) : N("", !0),
                m("div", vv, [
                  g.name ? (u(), f("div", $v, E(g.name), 1)) : N("", !0),
                  g.phone ? (u(), f("div", bv, E(g.phone), 1)) : N("", !0),
                  m("div", wv, [
                    m("view", null, E(g.provinceName + g.cityName + g.countyName + g.townName + g.addressDetail), 1)
                  ])
                ])
              ], 10, yv))), 128))
            ])
          ]),
          e.isShowCustomAddress ? (u(), f("div", {
            key: 0,
            class: "nut-address__exist-choose",
            onClick: t[2] || (t[2] = (...g) => e.switchModule && e.switchModule(...g))
          }, [
            m("div", kv, E(e.customAndExistTitle || e.translate("chooseAnotherAddress")), 1)
          ])) : N("", !0)
        ])),
        _(e.$slots, "bottom")
      ])
    ]),
    _: 3
  }, 8, ["visible", "lock-scroll", "round", "teleport-disable", "teleport", "z-index", "onClose", "onClickOverlay"]);
}
const Sv = /* @__PURE__ */ K(nv, [["render", Cv]]), { create: Tv } = Y("barrage"), Nv = Tv({
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
    const t = (/* @__PURE__ */ new Date()).getTime(), n = !!ot().default;
    let s = z(document.createElement("div")), o = z(document.createElement("div")), a = null;
    const l = z(e.danmu), r = z(e.rows), i = z(e.top), p = z(0), d = e.speeds, v = z(0);
    ve(() => {
      g(), n && document.addEventListener("visibilitychange", function() {
        document.visibilityState === "hidden" ? ($(), p.value = 0, k("hidden")) : document.visibilityState === "visible" && g();
      });
    }), Ke(() => {
      l.value = [], $();
    });
    const g = () => {
      v.value = s.value.offsetWidth, n && k("init"), setTimeout(() => {
        var h;
        (h = s.value) == null || h.style.setProperty("--move-distance", `-${v.value}px`), c();
      }, 300);
    }, k = (h) => {
      var B;
      const w = document.getElementsByClassName("slotBody" + t);
      let S = ((B = w == null ? void 0 : w[0]) == null ? void 0 : B.children) || [];
      const I = [];
      S && Array.from(S).forEach((M) => {
        h == "init" ? (M.style.opacity = "0", I.push(M)) : (M.classList = "", M.style = {});
      }), h == "init" && (l.value = I);
    }, $ = () => {
      a && (clearTimeout(a), a = null);
    };
    Q(
      () => e.danmu,
      (h) => {
        e.danmu.length > 0 && (l.value = [...h]);
      }
    );
    const b = (h) => {
      const w = p.value % l.value.length;
      !e.loop && p.value === l.value.length ? l.value.splice(l.value.length, 0, h) : l.value.splice(w, 0, h);
    }, c = () => {
      $(), a = setTimeout(() => {
        y();
      }, e.frequency);
    }, y = () => {
      var S;
      const h = e.loop ? p.value % l.value.length : p.value;
      let w = document.createElement("view");
      n && typeof l.value[h] == "object" ? (w = l.value[h], (S = w == null ? void 0 : w.classList) == null || S.add("nut-barrage__item")) : (w.innerHTML = l.value[h], w.classList.add("nut-barrage__item"), o.value.appendChild(w)), Se(() => {
        var B;
        const I = w.offsetHeight;
        if ((B = w == null ? void 0 : w.classList) == null || B.add("move"), w.style.animationDuration = `${d}ms`, w.style.top = h % r.value * (I + i.value) + 20 + "px", w.style.opacity = "1", !n) {
          const M = w.offsetWidth;
          w.style.width = M + 20 + "px";
        }
        w.addEventListener("animationend", () => {
          n ? w.classList.remove("move") : o.value.removeChild(w);
        }), !(!e.loop && p.value >= l.value.length - 1) && (p.value++, p.value >= l.value.length && (p.value = 0), w.removeEventListener("animationend", () => {
        }), c());
      });
    };
    return { classTime: t, danmuList: l, dmBody: s, dmContainer: o, add: b };
  }
}), Dv = {
  ref: "dmBody",
  class: "nut-barrage"
};
function _v(e, t, n, s, o, a) {
  return u(), f("div", Dv, [
    m("div", {
      ref: "dmContainer",
      class: L(["dmContainer", e.$slots.default && "slotContainer"])
    }, [
      e.$slots.default ? (u(), f("div", {
        key: 0,
        class: L(["slotBody", "slotBody" + e.classTime])
      }, [
        _(e.$slots, "default")
      ], 2)) : N("", !0)
    ], 2)
  ], 512);
}
const Iv = /* @__PURE__ */ K(Nv, [["render", _v]]), { create: Bv } = Y("signature"), Mv = "NutSignature", Lv = Bv({
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
    const n = ke(Mv), s = z(null), o = z(null), a = D(() => ({
      ["nut-signature"]: !0,
      [`${e.customClass}`]: e.customClass
    })), l = ce({
      canvasHeight: 0,
      canvasWidth: 0,
      ctx: null,
      isSupportTouch: "ontouchstart" in window,
      events: "ontouchstart" in window ? ["touchstart", "touchmove", "touchend", "touchleave"] : ["mousedown", "mousemove", "mouseup", "mouseleave"]
    }), r = () => {
      let y = document.createElement("canvas");
      return !!(y.getContext && y.getContext("2d"));
    }, i = () => {
      s.value.addEventListener(l.events[0], p, !1);
    }, p = (y) => {
      y.preventDefault(), l.ctx.beginPath(), l.ctx.lineWidth = e.lineWidth, l.ctx.strokeStyle = e.strokeStyle, t("start"), s.value.addEventListener(l.events[1], d, !1), s.value.addEventListener(l.events[2], v, !1), s.value.addEventListener(l.events[3], g, !1);
    }, d = (y) => {
      y.preventDefault();
      let h = l.isSupportTouch ? y.touches[0] : y;
      t("signing", h);
      let w = s.value.getBoundingClientRect(), S = h.clientX - w.left, I = h.clientY - w.top;
      l.ctx.lineTo(S, I), l.ctx.stroke();
    }, v = (y) => {
      y.preventDefault(), t("end"), s.value.removeEventListener(l.events[1], d, !1), s.value.removeEventListener(l.events[2], v, !1);
    }, g = (y) => {
      y.preventDefault(), s.value.removeEventListener(l.events[1], d, !1), s.value.removeEventListener(l.events[2], v, !1);
    }, k = () => {
      s.value.addEventListener(l.events[2], v, !1), l.ctx.clearRect(0, 0, l.canvasWidth, l.canvasHeight), l.ctx.closePath(), t("clear");
    }, $ = () => {
      c(s.value);
    }, b = (y) => {
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
      const w = b(y) ? "请绘制签名" : y, S = b(y) ? "" : h;
      t("confirm", w, S);
    };
    return ve(() => {
      r() && (l.ctx = s.value.getContext("2d"), l.canvasWidth = o.value.offsetWidth, l.canvasHeight = o.value.offsetHeight, i());
    }), de(G({}, he(l)), { canvas: s, wrap: o, isCanvasSupported: r, confirm: $, clear: k, classes: a, translate: n });
  }
}), Ev = {
  ref: "wrap",
  class: "nut-signature-inner"
}, Pv = ["height", "width"], Av = {
  key: 0,
  class: "nut-signature-unsopport"
};
function zv(e, t, n, s, o, a) {
  const l = W("nut-button");
  return u(), f("div", {
    class: L(e.classes)
  }, [
    m("div", Ev, [
      Ce(m("canvas", {
        ref: "canvas",
        height: e.canvasHeight,
        width: e.canvasWidth
      }, null, 8, Pv), [
        [Ne, e.isCanvasSupported()]
      ]),
      e.isCanvasSupported() ? N("", !0) : (u(), f("p", Av, E(e.unSupportTpl || e.translate("unSupportTpl")), 1))
    ], 512),
    oe(l, {
      class: "nut-signature-btn",
      type: "default",
      onClick: t[0] || (t[0] = (r) => e.clear())
    }, {
      default: ne(() => [
        ge(E(e.translate("reSign")), 1)
      ]),
      _: 1
    }),
    oe(l, {
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
const Vv = /* @__PURE__ */ K(Lv, [["render", zv]]), { create: Ov } = Y("time-select"), Hv = "NutTimeSelect", Rv = Ov({
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
    const n = ke(Hv), s = D(() => ({
      width: "100%",
      height: e.height
    })), o = D(() => e.currentKey), a = D(() => e.currentTime), l = () => {
      t("update:visible", !1), t("select", a.value);
    };
    return Le("currentKey", o), Le("currentTime", a), {
      popStyle: s,
      close: l,
      translate: n
    };
  }
}), Fv = { class: "nut-time-select" }, Wv = { class: "nut-time-select__title" }, Yv = { class: "nut-time-select__title__fixed" }, jv = { key: 0 }, Uv = { class: "nut-time-select__content" }, Kv = { class: "nut-time-select__content__pannel" }, Xv = { class: "nut-time-select__content__detail" };
function qv(e, t, n, s, o, a) {
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
      m("view", Fv, [
        m("view", Wv, [
          m("view", Yv, [
            e.$slots.title ? _(e.$slots, "title", { key: 1 }) : (u(), f("span", jv, E(e.title || e.translate("pickupTime")), 1))
          ])
        ]),
        m("view", Uv, [
          m("view", Kv, [
            _(e.$slots, "pannel")
          ]),
          m("view", Xv, [
            _(e.$slots, "detail")
          ])
        ])
      ])
    ]),
    _: 3
  }, 8, ["teleport-disable", "visible", "style", "lock-scroll", "onClickOverlay", "onClickCloseIcon"]);
}
const Zv = /* @__PURE__ */ K(Rv, [["render", qv]]), { componentName: Gv, create: Jv } = Y("time-pannel"), Qv = Jv({
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
    const n = Me("currentKey"), s = ce({
      currentKey: n
    }), o = D(() => ({
      [Gv]: !0,
      "nut-time-pannel--curr": s.currentKey == e.pannelKey
    })), a = (l) => {
      t.emit("change", l);
    };
    return de(G({}, he(s)), {
      classes: o,
      handlePannel: a
    });
  }
});
function xv(e, t, n, s, o, a) {
  return u(), f("view", {
    class: L(e.classes),
    onClick: t[0] || (t[0] = (l) => e.handlePannel(e.pannelKey))
  }, E(e.name), 3);
}
const e2 = /* @__PURE__ */ K(Qv, [["render", xv]]), { create: t2 } = Y("time-detail"), n2 = t2({
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
    }), a = (i) => {
      let p = o.currentTime.find((d) => d.key == o.currentKey);
      if (p)
        return {
          "nut-time-detail__detail__list__item": !0,
          "nut-time-detail__detail__list__item--curr": p.list.filter((d) => d === i).length > 0
        };
    }, l = D(() => e.times.find((i) => i.key == o.currentKey).list), r = (i) => {
      t("select", i);
    };
    return de(G({}, he(o)), {
      getClass: a,
      renderData: l,
      handleTime: r
    });
  }
}), o2 = { class: "nut-time-detail" }, l2 = { class: "nut-time-detail__detail nut-time-detail__detail--moring" }, s2 = { class: "nut-time-detail__detail__list" }, a2 = ["onClick"];
function r2(e, t, n, s, o, a) {
  return u(), f("view", o2, [
    m("view", l2, [
      m("view", s2, [
        (u(!0), f(x, null, ie(e.renderData, (l) => (u(), f("view", {
          key: l,
          class: L(e.getClass(l)),
          onClick: (r) => e.handleTime(l)
        }, E(l), 11, a2))), 128))
      ])
    ])
  ]);
}
const i2 = /* @__PURE__ */ K(n2, [["render", r2]]), { create: u2 } = Y("sku-header"), c2 = "NutSkuHeader", d2 = u2({
  props: {
    goods: {
      type: Object,
      default: {}
    }
  },
  components: {
    NutPrice: hn
  },
  setup(e, { slots: t }) {
    const n = ke(c2);
    return {
      getSlots: (o) => t[o],
      translate: n
    };
  }
}), f2 = { class: "nut-sku-header" }, p2 = ["src"], m2 = { class: "nut-sku-header-right" }, h2 = {
  key: 3,
  class: "nut-sku-header-right-extra"
};
function g2(e, t, n, s, o, a) {
  const l = W("nut-price");
  return u(), f("view", f2, [
    m("img", {
      class: "nut-sku-header-img",
      src: e.goods.imagePath
    }, null, 8, p2),
    m("view", m2, [
      e.getSlots("sku-header-price") ? _(e.$slots, "sku-header-price", { key: 0 }) : (u(), ee(l, {
        key: 1,
        price: e.goods.price,
        "need-symbol": !0,
        thousands: !1
      }, null, 8, ["price"])),
      e.getSlots("sku-header-extra") ? _(e.$slots, "sku-header-extra", { key: 2 }) : N("", !0),
      e.goods.skuId && !e.getSlots("sku-header-extra") ? (u(), f("view", h2, E(e.translate("skuId")) + " : " + E(e.goods.skuId), 1)) : N("", !0)
    ])
  ]);
}
const y2 = /* @__PURE__ */ K(d2, [["render", g2]]), { create: v2 } = Y("sku-select"), $2 = v2({
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
      changeSaleChild: (o, a, l, r) => {
        o.checkFlag || o.disable || t("selectSku", {
          sku: o,
          skuIndex: a,
          parentSku: l,
          parentIndex: r
        });
      }
    };
  }
}), b2 = { class: "nut-sku-select" }, w2 = { class: "nut-sku-select-item-title" }, k2 = { class: "nut-sku-select-item-skus" }, C2 = ["onClick"];
function S2(e, t, n, s, o, a) {
  return u(), f("view", b2, [
    (u(!0), f(x, null, ie(e.skuInfo, (l, r) => (u(), f("view", {
      key: l.id,
      class: "nut-sku-select-item"
    }, [
      m("view", w2, E(l.name), 1),
      m("view", k2, [
        (u(!0), f(x, null, ie(l.list, (i, p) => (u(), f("view", {
          key: i.name,
          class: L(["nut-sku-select-item-skus-sku", [{ active: !i.disable && i.active }, { disable: i.disable }]]),
          onClick: (d) => e.changeSaleChild(i, p, l, r)
        }, E(i.name), 11, C2))), 128))
      ])
    ]))), 128))
  ]);
}
const T2 = /* @__PURE__ */ K($2, [["render", S2]]), { create: N2 } = Y("sku-stepper"), D2 = N2({
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
    NutInputNumber: an
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
        return i && Pt(i) == "function" ? i() : "";
      },
      changeStepper: (i) => {
        n.value = i, t("changeStepper", i);
      }
    };
  }
}), _2 = { class: "nut-sku-stepper" }, I2 = { class: "nut-sku-stepper-title" }, B2 = ["innerHTML"], M2 = { class: "nut-sku-stepper-count" };
function L2(e, t, n, s, o, a) {
  const l = W("nut-input-number");
  return u(), f("view", _2, [
    m("view", I2, E(e.stepperTitle), 1),
    m("view", {
      class: "nut-sku-stepper-limit",
      innerHTML: e.getExtraText()
    }, null, 8, B2),
    m("view", M2, [
      oe(l, {
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
const E2 = /* @__PURE__ */ K(D2, [["render", L2]]), { create: P2 } = Y("sku-operate"), A2 = P2({
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
}), z2 = {
  key: 0,
  class: "nut-sku-operate"
}, V2 = {
  key: 0,
  class: "nut-sku-operate-desc"
}, O2 = {
  key: 1,
  class: "nut-sku-operate-btn"
}, H2 = ["onClick"];
function R2(e, t, n, s, o, a) {
  return e.btnOptions.length > 0 ? (u(), f("view", z2, [
    e.btnExtraText ? (u(), f("view", V2, E(e.btnExtraText), 1)) : N("", !0),
    _(e.$slots, "operate-btn"),
    e.getSlots("operate-btn") ? N("", !0) : (u(), f("view", O2, [
      (u(!0), f(x, null, ie(e.btnOptions, (l, r) => (u(), f("view", {
        key: r,
        class: L([`nut-sku-operate-btn-${l}`, "nut-sku-operate-btn-item"]),
        onClick: (i) => e.clickBtnOperate(l)
      }, E(e.getBtnDesc(l)), 11, H2))), 128))
    ]))
  ])) : N("", !0);
}
const F2 = /* @__PURE__ */ K(A2, [["render", R2]]), { create: W2 } = Y("sku"), Y2 = "NutSku", j2 = W2({
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
    SkuHeader: y2,
    SkuSelect: T2,
    SkuStepper: E2,
    SkuOperate: F2,
    NutPopup: Ee
  },
  setup(e, { emit: t, slots: n }) {
    const s = ke(Y2), o = z(e.visible), a = z(e.stepperMin);
    Q(
      () => e.visible,
      (b) => {
        o.value = b;
      }
    ), Q(
      () => o.value,
      (b) => {
        b == !1 && $();
      }
    );
    const l = (b) => n[b], r = (b) => {
      t("selectSku", b);
    }, i = (b) => {
      a.value = b, t("changeStepper", b);
    }, p = (b) => {
      t("add", b);
    }, d = (b) => {
      t("reduce", b);
    }, v = (b) => {
      t("overLimit", b);
    }, g = (b) => {
      t("clickBtnOperate", {
        type: b,
        value: a.value
      });
    }, k = (b) => {
      b == "icon" && t("clickCloseIcon"), b == "overlay" && t("clickOverlay"), b == "close" && t("close"), o.value = !1;
    }, $ = () => {
      t("update:visible", !1);
    };
    return {
      showPopup: o,
      closePopup: k,
      selectSku: r,
      changeStepper: i,
      stepperOverLimit: v,
      clickBtnOperate: g,
      add: p,
      reduce: d,
      getSlots: l,
      translate: s
    };
  }
}), U2 = { class: "nut-sku" }, K2 = { class: "nut-sku-content" };
function X2(e, t, n, s, o, a) {
  const l = W("sku-header"), r = W("SkuSelect"), i = W("sku-stepper"), p = W("sku-operate"), d = W("nut-popup");
  return u(), ee(d, {
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
      m("view", U2, [
        _(e.$slots, "sku-header"),
        e.getSlots("sku-header") ? N("", !0) : (u(), ee(l, {
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
        m("view", K2, [
          _(e.$slots, "sku-select-top"),
          _(e.$slots, "sku-select"),
          e.getSlots("sku-select") ? N("", !0) : (u(), ee(r, {
            key: 0,
            sku: e.sku,
            onSelectSku: e.selectSku
          }, null, 8, ["sku", "onSelectSku"])),
          _(e.$slots, "sku-stepper"),
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
const q2 = /* @__PURE__ */ K(j2, [["render", X2]]), { create: Z2 } = Y("card"), G2 = Z2({
  components: {
    NutPrice: hn,
    NutTag: zo
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
}), J2 = { class: "nut-card" }, Q2 = { class: "nut-card__left" }, x2 = ["src"], e3 = { class: "nut-card__right" }, t3 = { class: "nut-card__right__title" }, n3 = {
  key: 0,
  class: "nut-card__right__price"
}, o3 = { class: "nut-card__right__other" }, l3 = { class: "nut-card__right__shop" }, s3 = { class: "nut-card__right__shop__name" };
function a3(e, t, n, s, o, a) {
  const l = W("nut-price"), r = W("nut-tag");
  return u(), f("div", J2, [
    m("div", Q2, [
      m("img", {
        src: e.imgUrl,
        alt: ""
      }, null, 8, x2)
    ]),
    m("div", e3, [
      m("div", t3, E(e.title), 1),
      _(e.$slots, "prolist"),
      e.isNeedPrice ? (u(), f("div", n3, [
        _(e.$slots, "price", {}, () => [
          oe(l, { price: e.price }, null, 8, ["price"])
        ]),
        _(e.$slots, "origin", {}, () => [
          oe(l, {
            class: "nut-card__right__price__origin",
            price: e.vipPrice
          }, null, 8, ["price"])
        ])
      ])) : N("", !0),
      m("div", o3, [
        _(e.$slots, "shop-tag", {}, () => [
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
      m("div", l3, [
        m("div", s3, E(e.shopName), 1),
        _(e.$slots, "footer")
      ])
    ])
  ]);
}
const r3 = /* @__PURE__ */ K(G2, [["render", a3]]), { create: i3 } = Y("ecard"), u3 = "NutEcard", c3 = i3({
  components: {
    NutInputNumber: an
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
    const n = ke(u3), s = z(null), o = z(null), a = z(""), l = z(e.cardAmountMin), r = z(e.modelValue), i = (g, k) => {
      s.value = k, l.value = e.cardAmountMin, o.value = g.price, t("change", g), t("update:modelValue", g.price);
    }, p = (g) => {
      let $ = g.target.value.replace(/[^\d]/g, "");
      a.value = $, o.value = $, Number($) > e.cardAmountMax && (a.value = e.cardAmountMax, o.value = e.cardAmountMax), Number($) < e.cardAmountMin && (a.value = e.cardAmountMin, o.value = e.cardAmountMin), t("inputChange", Number(a.value)), t("update:modelValue", Number(a.value));
    }, d = () => {
      s.value = "input", l.value = e.cardAmountMin, o.value = a.value, t("update:modelValue", a.value), t("inputClick");
    }, v = (g) => {
      l.value = g, t("changeStep", l.value, o.value);
    };
    return Q(
      () => e.modelValue,
      (g) => {
        r.value = g;
      }
    ), {
      handleClick: i,
      changeStep: v,
      change: p,
      inputClick: d,
      stepValue: l,
      currentIndex: s,
      inputValue: a,
      money: r,
      translate: n
    };
  }
}), d3 = { class: "nut-ecard" }, f3 = { class: "nut-ecard__title" }, p3 = { class: "nut-ecard__list" }, m3 = ["onClick"], h3 = { class: "nut-ecard__list__input--con" }, g3 = ["placeholder"], y3 = { class: "nut-ecard__list__step" };
function v3(e, t, n, s, o, a) {
  const l = W("nut-input-number");
  return u(), f("view", d3, [
    m("view", f3, E(e.chooseText || e.translate("chooseText")), 1),
    m("view", p3, [
      (u(!0), f(x, null, ie(e.dataList, (r, i) => (u(), f("view", {
        key: i,
        class: L(["nut-ecard__list__item", e.currentIndex == i ? "active" : ""]),
        onClick: (p) => e.handleClick(r, i)
      }, E(r.price), 11, m3))), 128)),
      m("view", {
        class: L(["nut-ecard__list__input", e.currentIndex == "input" ? "active" : ""]),
        onClick: t[2] || (t[2] = (...r) => e.inputClick && e.inputClick(...r))
      }, [
        m("view", null, E(e.otherValueText || e.translate("otherValueText")), 1),
        m("view", h3, [
          Ce(m("input", {
            "onUpdate:modelValue": t[0] || (t[0] = (r) => e.inputValue = r),
            class: "nut-ecard__list__input--input",
            type: "text",
            placeholder: e.placeholder || e.translate("placeholder"),
            onInput: t[1] || (t[1] = (...r) => e.change && e.change(...r))
          }, null, 40, g3), [
            [Rn, e.inputValue]
          ]),
          ge(" " + E(e.suffix), 1)
        ])
      ], 2),
      m("view", y3, [
        m("view", null, E(e.suffix) + E(e.money), 1),
        oe(l, {
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
const $3 = /* @__PURE__ */ K(c3, [["render", v3]]), { create: b3 } = Y("address-list-item"), w3 = "NutAddressList", k3 = b3({
  components: { Del: Zn, Edit: ms },
  props: {
    item: {
      type: Object,
      default: {}
    }
  },
  emits: ["delIcon", "editIcon", "clickItem"],
  setup(e, { emit: t }) {
    const n = ke(w3);
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
}), C3 = { class: "nut-address-list-item__info" }, S3 = { class: "nut-address-list-item__info-contact" }, T3 = { class: "nut-address-list-item__info-contact-name" }, N3 = { class: "nut-address-list-item__info-contact-tel" }, D3 = {
  key: 0,
  class: "nut-address-list-item__info-contact-default"
}, _3 = { class: "nut-address-list-item__info-handle" }, I3 = { class: "nut-address-list-item__addr" };
function B3(e, t, n, s, o, a) {
  const l = W("Del"), r = W("Edit");
  return u(), f("div", {
    class: "nut-address-list-item",
    onClick: t[0] || (t[0] = (...i) => e.contentsClick && e.contentsClick(...i))
  }, [
    m("div", C3, [
      m("div", S3, [
        _(e.$slots, "content-top", {}, () => [
          m("div", T3, E(e.item.addressName), 1),
          m("div", N3, E(e.item.phone), 1),
          e.item.defaultAddress ? (u(), f("div", D3, E(e.translate("default")), 1)) : N("", !0)
        ])
      ]),
      m("div", _3, [
        _(e.$slots, "content-icon", {}, () => [
          oe(l, {
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
    m("div", I3, [
      _(e.$slots, "content-addr", {}, () => [
        ge(E(e.item.fullAddress), 1)
      ])
    ])
  ]);
}
const Vn = /* @__PURE__ */ K(k3, [["render", B3]]), { create: M3 } = Y("address-list-general"), L3 = M3({
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
    ItemContents: Vn,
    NutButton: qe,
    NutSwipe: _o
  },
  setup(e, { emit: t }) {
    const n = () => be(Vn, {
      item: e.item,
      onDelIcon(I) {
        l(I);
      },
      onEditIcon(I) {
        r(I);
      },
      onClickItem(I) {
        i(I);
      }
    });
    let s = null;
    const o = z(!1), a = z(!1), l = (I) => {
      t("delIcon", I, e.item), I.stopPropagation();
    }, r = (I) => {
      t("editIcon", I, e.item), I.stopPropagation();
    }, i = (I) => {
      o.value || (t("clickItem", I, e.item), I.stopPropagation());
    }, p = (I) => {
      t("longDel", I, e.item), I.stopPropagation();
    }, d = (I) => {
      s = 0, a.value = !0, t("longDown", I, e.item);
    };
    return {
      renderCompontent: n,
      showMaskRef: a,
      clickItem: i,
      editClick: r,
      delClick: l,
      delLongClick: p,
      holddownstart: (I) => {
        s = setTimeout(() => {
          d(I);
        }, 300);
      },
      holddownmove: () => {
        clearTimeout(s);
      },
      holddownend: () => {
        clearTimeout(s);
      },
      copyCLick: (I) => {
        t("longCopy", I, e.item), I.stopPropagation();
      },
      hideMaskClick: () => {
        a.value = !1;
      },
      setDefault: (I) => {
        t("longSet", I, e.item), I.stopPropagation();
      },
      maskClick: (I) => {
        s != 0 && (a.value = !1), I.stopPropagation(), I.preventDefault();
      },
      swipeDelClick: (I) => {
        t("swipeDel", I, e.item), I.stopPropagation();
      },
      swipestart: () => {
        o.value = !1;
      },
      swipemove: () => {
        o.value = !0;
      }
    };
  }
}), E3 = {
  key: 0,
  class: "nut-address-list-general"
}, P3 = { class: "nut-address-list-swipe" };
function A3(e, t, n, s, o, a) {
  const l = W("nut-button"), r = W("nut-swipe");
  return e.swipeEdition ? (u(), ee(r, { key: 1 }, {
    right: ne(() => [
      _(e.$slots, "swipe-right-btn", {}, () => [
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
      m("div", P3, [
        (u(), ee(Ae(e.renderCompontent()), {
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
  })) : (u(), f("div", E3, [
    (u(), ee(Ae(e.renderCompontent()), {
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
    e.longPress && e.showMaskRef ? (u(), f("div", {
      key: 0,
      class: "nut-address-list-general__mask",
      onClick: t[3] || (t[3] = (...i) => e.maskClick && e.maskClick(...i))
    }, [
      _(e.$slots, "longpress-all", {}, () => [
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
const z3 = /* @__PURE__ */ K(L3, [["render", A3]]), { create: V3 } = Y("address-list"), O3 = "NutAddressList", H3 = V3({
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
    GeneralShell: z3,
    NutButton: qe
  },
  emits: ["delIcon", "editIcon", "clickItem", "longCopy", "longSet", "longDel", "swipeDel", "add"],
  setup(e, { emit: t }) {
    const n = ke(O3), s = z([]), o = ce({
      id: 2,
      addressName: "姓名",
      phone: "123****4567",
      defaultAddress: !1,
      fullAddress: "北京市通州区测试测试测试测试测试测试测试测试测试"
    }), a = () => {
      Object.keys(e.dataOptions).length > 0 && (s.value = e.data.map(($) => ol(o, $, e.dataOptions)));
    };
    Q(
      () => e.data,
      () => a(),
      { deep: !0 }
    );
    const l = ($, b) => {
      t("delIcon", $, b), $.stopPropagation();
    }, r = ($, b) => {
      t("editIcon", $, b), $.stopPropagation();
    }, i = ($, b) => {
      t("clickItem", $, b), $.stopPropagation();
    }, p = ($, b) => {
      t("longCopy", $, b), $.stopPropagation();
    }, d = ($, b) => {
      t("longSet", $, b), $.stopPropagation();
    }, v = ($, b) => {
      t("longDel", $, b), $.stopPropagation();
    }, g = ($, b) => {
      t("swipeDel", $, b), $.stopPropagation();
    }, k = ($) => {
      t("add", $), $.stopPropagation();
    };
    return ve(() => {
      a();
    }), {
      clickDelIcon: l,
      clickEditIcon: r,
      clickContentItem: i,
      clickLongCopy: p,
      clickLongSet: d,
      clickLongDel: v,
      clickSwipeDel: g,
      addAddress: k,
      dataArray: s,
      translate: n
    };
  }
}), R3 = { class: "nut-address-list" };
function F3(e, t, n, s, o, a) {
  const l = W("general-shell"), r = W("nut-button");
  return u(), f("div", R3, [
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
    e.showBottomButton ? (u(), f("div", {
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
const W3 = /* @__PURE__ */ K(H3, [["render", F3]]), { create: Y3 } = Y("category"), j3 = Y3({
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
}), U3 = { class: "nut-category" }, K3 = { class: "nut-category__cateList" }, X3 = { key: 0 }, q3 = ["onClick"];
function Z3(e, t, n, s, o, a) {
  return u(), f("div", U3, [
    m("div", K3, [
      e.type == "classify" || e.type == "text" ? (u(), f("div", X3, [
        (u(!0), f(x, null, ie(e.category, (l, r) => (u(), f("div", {
          key: r,
          class: "nut-category__cateListLeft"
        }, [
          m("div", {
            class: L([e.checkIndex == r ? "nut-category__cateListItemChecked" : "nut-category__cateListItem"]),
            onClick: (i) => e.getChildList(r)
          }, E(l.catName), 11, q3)
        ]))), 128))
      ])) : N("", !0),
      _(e.$slots, "default")
    ])
  ]);
}
const G3 = /* @__PURE__ */ K(j3, [["render", Z3]]), { create: J3 } = Y("category-pane"), Q3 = J3({
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
}), x3 = { class: "nut-category-pane" }, e4 = {
  key: 0,
  class: "nut-category-pane__cateListRight"
}, t4 = { class: "nut-category-pane__childTitle" }, n4 = {
  key: 0,
  class: "nut-category-pane__childItemList"
}, o4 = ["onClick"], l4 = ["src"], s4 = { class: "nut-category-pane__skuImg" }, a4 = {
  key: 1,
  class: "nut-category-pane__cateListRight"
}, r4 = { class: "nut-category-pane__childTitle" }, i4 = {
  key: 0,
  class: "nut-category-pane__childItemList"
}, u4 = ["onClick"], c4 = { class: "nut-category-pane__skuName" }, d4 = {
  key: 2,
  class: "nut-category-pane__selfItemList"
}, f4 = ["onClick"];
function p4(e, t, n, s, o, a) {
  return u(), f("div", x3, [
    e.type == "classify" ? (u(), f("div", e4, [
      (u(!0), f(x, null, ie(e.categoryChild, (l, r) => (u(), f("div", { key: r }, [
        m("div", t4, E(l == null ? void 0 : l.catName), 1),
        (l == null ? void 0 : l.catType) == 1 ? (u(), f("div", n4, [
          (u(!0), f(x, null, ie(l.childCateList, (i, p) => (u(), f("div", {
            key: p,
            class: "nut-category-pane__childItem",
            onClick: (d) => e.onChange(i)
          }, [
            m("img", {
              class: "nut-category-pane__childImg",
              src: i.backImg
            }, null, 8, l4),
            m("div", s4, E(i == null ? void 0 : i.catName), 1)
          ], 8, o4))), 128))
        ])) : N("", !0)
      ]))), 128))
    ])) : N("", !0),
    e.type == "text" ? (u(), f("div", a4, [
      (u(!0), f(x, null, ie(e.categoryChild, (l, r) => (u(), f("div", { key: r }, [
        m("div", r4, E(l == null ? void 0 : l.catName), 1),
        (l == null ? void 0 : l.catType) == 1 ? (u(), f("div", i4, [
          (u(!0), f(x, null, ie(l.childCateList, (i, p) => (u(), f("div", {
            key: p,
            class: "nut-category-pane__childItem",
            onClick: (d) => e.onChange(i)
          }, [
            m("div", c4, E(i == null ? void 0 : i.catName), 1)
          ], 8, u4))), 128))
        ])) : N("", !0)
      ]))), 128))
    ])) : N("", !0),
    e.type == "custom" ? (u(), f("div", d4, [
      (u(!0), f(x, null, ie(e.customCategory, (l, r) => (u(), f("div", {
        key: r,
        class: "nut-category-pane__skuName",
        onClick: (i) => e.onChange(l)
      }, E(l == null ? void 0 : l.catName), 9, f4))), 128))
    ])) : N("", !0)
  ]);
}
const m4 = /* @__PURE__ */ K(Q3, [["render", p4]]), { create: h4 } = Y("comment-header"), g4 = h4({
  components: {
    NutRate: To
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
}), y4 = { class: "nut-comment-header__user" }, v4 = { class: "nut-comment-header__user-avter" }, $4 = ["src"], b4 = { class: "nut-comment-header__user-score" }, w4 = {
  key: 0,
  class: "nut-comment-header__time"
};
function k4(e, t, n, s, o, a) {
  const l = W("nut-rate");
  return u(), f("view", null, [
    e.info ? (u(), f("view", {
      key: 0,
      class: "nut-comment-header",
      onClick: t[1] || (t[1] = (...r) => e.handleClick && e.handleClick(...r))
    }, [
      m("view", y4, [
        m("view", v4, [
          e.info.avatar ? (u(), f("img", {
            key: 0,
            src: e.info.avatar
          }, null, 8, $4)) : N("", !0)
        ]),
        e.type == "default" ? (u(), f("view", {
          key: 0,
          class: L([`nut-comment-header__user-${e.type}`])
        }, [
          m("view", {
            class: L([`nut-comment-header__user-${e.type}-name`])
          }, [
            m("span", null, E(e.info.nickName), 1),
            _(e.$slots, "labels")
          ], 2),
          m("view", b4, [
            oe(l, {
              modelValue: e.info.score,
              "onUpdate:modelValue": t[0] || (t[0] = (r) => e.info.score = r),
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
          _(e.$slots, "labels")
        ], 2))
      ]),
      e.info.time ? (u(), f("view", w4, E(e.info.time), 1)) : N("", !0)
    ])) : N("", !0),
    e.type == "complex" ? (u(), f("view", {
      key: 1,
      class: L([`nut-comment-header__${e.type}-score`])
    }, [
      oe(l, {
        modelValue: e.info.score,
        "onUpdate:modelValue": t[2] || (t[2] = (r) => e.info.score = r),
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
const C4 = /* @__PURE__ */ K(g4, [["render", k4]]), { create: S4 } = Y("comment-images"), T4 = S4({
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
  components: { Right: tn },
  emits: ["click", "clickImages"],
  setup(e, { emit: t }) {
    const n = z(!1), s = z(1), o = z([]);
    return Q(
      () => [e.videos, e.images],
      (l) => {
        l[0].length > 0 && l[0].forEach((r) => {
          r.type = "video";
        }), o.value = l[0].concat(l[1]);
      },
      { deep: !0 }
    ), ve(() => {
      e.videos.length > 0 && e.videos.forEach((l) => {
        l.type = "video";
      }), o.value = e.videos.concat(e.images);
    }), { isShowImage: n, initIndex: s, showImages: (l, r) => {
      const { videos: i, images: p } = e, d = l == "img" ? r - i.length : r;
      t("clickImages", {
        type: l,
        index: d,
        value: l == "img" ? p[d] : i[d]
      });
    }, totalImages: o };
  }
}), N4 = ["onClick"], D4 = ["src"], _4 = /* @__PURE__ */ m("view", { class: "nut-comment-images__play" }, null, -1), I4 = ["onClick"], B4 = ["src"], M4 = {
  key: 0,
  class: "nut-comment-images__mask"
};
function L4(e, t, n, s, o, a) {
  const l = W("Right");
  return u(), f("view", {
    class: L(`nut-comment-images nut-comment-images--${e.type}`)
  }, [
    (u(!0), f(x, null, ie(e.videos, (r, i) => (u(), f("view", {
      key: r.id,
      class: "nut-comment-images__item nut-comment-images__item--video",
      onClick: (p) => e.showImages("video", i)
    }, [
      m("img", {
        src: r.mainUrl
      }, null, 8, D4),
      _4
    ], 8, N4))), 128)),
    (u(!0), f(x, null, ie(e.images, (r, i) => (u(), f(x, {
      key: r.id
    }, [
      e.type == "multi" && e.videos.length + i < 9 || e.type != "multi" ? (u(), f("view", {
        key: 0,
        class: "nut-comment-images__item nut-comment-images__item--imgbox",
        onClick: (p) => e.showImages("img", i + e.videos.length)
      }, [
        m("img", {
          src: r.smallImgUrl ? r.smallImgUrl : r.imgUrl
        }, null, 8, B4),
        e.type == "multi" && e.totalImages.length > 9 && e.videos.length + i > 7 ? (u(), f("view", M4, [
          m("span", null, "共 " + E(e.totalImages.length) + " 张", 1),
          oe(l, { style: { width: "12px" } })
        ])) : N("", !0)
      ], 8, I4)) : N("", !0)
    ], 64))), 128))
  ], 2);
}
const E4 = /* @__PURE__ */ K(T4, [["render", L4]]), { create: P4 } = Y("comment-bottom"), A4 = "NutComment", z4 = P4({
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
  components: { Fabulous: $s, Comment: ts, MoreX: Da },
  emits: ["clickOperate", "handleClick"],
  setup(e, { emit: t }) {
    const n = ke(A4), s = z(!1), o = z([]);
    return ve(() => {
      const r = ["replay", "like", "more"];
      e.operation && e.operation.forEach((i) => {
        r.includes(i) && o.value.push(i);
      });
    }), { showPopver: s, operate: (r) => {
      r == "more" && (s.value = !s.value), t("clickOperate", r);
    }, mergeOp: o, handleClick: () => {
      t("handleClick");
    }, translate: n };
  }
}), V4 = { class: "nut-comment-bottom" }, O4 = { key: 0 }, H4 = { class: "nut-comment-bottom__cpx" }, R4 = ["onClick"];
function F4(e, t, n, s, o, a) {
  const l = W("Fabulous"), r = W("Comment"), i = W("MoreX");
  return u(), f("view", V4, [
    m("view", {
      class: "nut-comment-bottom__lable",
      onClick: t[0] || (t[0] = (...p) => e.handleClick && e.handleClick(...p))
    }, [
      e.type != "complex" ? (u(), f("span", O4, E(e.info.size), 1)) : N("", !0)
    ]),
    m("view", H4, [
      (u(!0), f(x, null, ie(e.mergeOp, (p, d) => (u(), f("view", {
        key: d,
        class: L(["nut-comment-bottom__cpx-item", `nut-comment-bottom__cpx-item--${p}`]),
        onClick: (v) => e.operate(p)
      }, [
        p != "more" ? (u(), f(x, { key: 0 }, [
          m("span", null, E(e.info[p]), 1),
          p == "like" ? (u(), ee(l, { key: 0 })) : (u(), ee(r, { key: 1 }))
        ], 64)) : N("", !0),
        p == "more" ? (u(), f(x, { key: 1 }, [
          oe(i),
          e.showPopver ? (u(), f("view", {
            key: 0,
            class: "nut-comment-bottom__cpx-item-popover",
            onClick: t[1] || (t[1] = (v) => e.operate("popover"))
          }, E(e.translate("complaintsText")), 1)) : N("", !0)
        ], 64)) : N("", !0)
      ], 10, R4))), 128))
    ])
  ]);
}
const W4 = /* @__PURE__ */ K(z4, [["render", F4]]), { create: Y4 } = Y("comment"), j4 = "NutComment", U4 = Y4({
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
    CommentHeader: C4,
    CommentImages: E4,
    CommentBottom: W4,
    Right: tn
  },
  emits: ["click", "clickImages", "clickOperate"],
  setup(e, { emit: t }) {
    const n = ke(j4);
    return { conEllipsis: D(() => e.ellipsis ? e.ellipsis : e.headerType == "complex" ? 6 : 2), clickOperate: (r) => {
      t("clickOperate", r);
    }, handleClick: () => {
      t("click", e.info);
    }, clickImages: (r) => {
      t("clickImages", r);
    }, translate: n };
  }
}), K4 = {
  key: 0,
  class: "nut-comment"
}, X4 = ["innerHTML"], q4 = { class: "nut-comment__follow-title" }, Z4 = { class: "nut-comment__follow-com" };
function G4(e, t, n, s, o, a) {
  const l = W("comment-header"), r = W("comment-images"), i = W("Right"), p = W("comment-bottom");
  return e.info && Object.keys(e.info) ? (u(), f("view", K4, [
    oe(l, {
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
    m("view", {
      class: "nut-comment__main",
      style: A(`-webkit-line-clamp:${e.conEllipsis}`),
      onClick: t[0] || (t[0] = (...d) => e.handleClick && e.handleClick(...d)),
      innerHTML: e.info.content
    }, null, 12, X4),
    oe(r, {
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
      m("view", q4, E(e.translate("additionalReview", e.follow.days)), 1),
      m("view", Z4, E(e.follow.content), 1),
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
    _(e.$slots, "comment-shop-reply")
  ])) : N("", !0);
}
const J4 = /* @__PURE__ */ K(U4, [["render", G4]]), { componentName: Q4, create: x4 } = Y("invoice"), e5 = x4({
  components: {
    NutForm: rn,
    NutFormItem: un,
    NutRadio: Co,
    NutRadioGroup: So,
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
    }), a = D(() => ({
      [Q4]: !0
    }));
    ve(() => {
      l();
    });
    const l = () => {
      s.value = e.data;
    }, r = () => {
      n.value.validate().then(({ valid: i, errors: p }) => {
        t("submit", i, p), t("onSubmit", i, p);
      });
    };
    return Q(
      () => e.data,
      () => l(),
      { deep: !0 }
    ), de(G({}, he(o)), {
      classes: a,
      formRef: n,
      list: s,
      submitFun: r
    });
  }
}), t5 = ["onUpdate:modelValue", "placeholder"], n5 = {
  key: 0,
  class: "nut-invoice__submit"
};
function o5(e, t, n, s, o, a) {
  const l = W("nut-radio"), r = W("nut-radio-group"), i = W("nut-form-item"), p = W("nut-form"), d = W("nut-button");
  return u(), f("view", {
    class: L(e.classes)
  }, [
    oe(p, {
      ref: "formRef",
      "model-value": e.formValue
    }, {
      default: ne(() => [
        (u(!0), f(x, null, ie(e.list, (v, g) => (u(), ee(i, {
          key: g,
          label: v.label,
          required: v.required,
          rules: v.rules,
          prop: v.formItemProp
        }, {
          default: ne(() => [
            v.type === "radio" ? (u(), ee(r, {
              key: 0,
              modelValue: e.formValue[v.formItemProp],
              "onUpdate:modelValue": (k) => e.formValue[v.formItemProp] = k
            }, {
              default: ne(() => [
                (u(!0), f(x, null, ie(v.radioLabel, (k, $) => (u(), ee(l, {
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
            }, 1032, ["modelValue", "onUpdate:modelValue"])) : Ce((u(), f("input", {
              key: 1,
              "onUpdate:modelValue": (k) => e.formValue[v.formItemProp] = k,
              class: "nut-input-text",
              placeholder: v.placeholder,
              type: "text"
            }, null, 8, t5)), [
              [Rn, e.formValue[v.formItemProp]]
            ])
          ]),
          _: 2
        }, 1032, ["label", "required", "rules", "prop"]))), 128))
      ]),
      _: 1
    }, 8, ["model-value"]),
    e.submit ? (u(), f("div", n5, [
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
const l5 = /* @__PURE__ */ K(e5, [["render", o5]]), { create: s5 } = Y("avatar-cropper"), a5 = s5({
  components: {
    NutButton: qe,
    Refresh2: or,
    Retweet: ir
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
    }, a = z(G({}, o)), l = z(), r = z(), i = z(), p = window.devicePixelRatio || 1, d = xe(), v = D(() => s.angle === 90 || s.angle === 270), g = D(() => {
      const { swidth: q } = a.value, se = q / p + "px";
      return {
        width: se,
        height: se
      };
    }), k = D(() => {
      const { displayWidth: q, scale: se } = s, { swidth: ue, height: pe } = a.value;
      return v.value ? Math.max(0, (pe * se - ue) / 2) : Math.max(0, (q * se - ue) / 2);
    }), $ = D(() => {
      const { displayWidth: q, scale: se } = s, { swidth: ue, height: pe } = a.value;
      return v.value ? Math.max(0, (q * se - ue) / 2) : Math.max(0, (pe * se - ue) / 2);
    }), b = (q) => new Promise((se) => {
      const ue = new FileReader();
      ue.onloadend = (pe) => se(pe.target.result), ue.readAsDataURL(q);
    }), c = (q) => new Promise((se) => {
      const ue = new Image();
      ue.onload = () => se(ue), ue.src = q;
    }), y = () => {
      const { img: q, width: se, height: ue, x: pe, y: we, swidth: _e } = a.value, { moveX: H, moveY: J, scale: ae } = s, re = r.value;
      if (!re)
        return;
      const me = re.getContext("2d");
      re.width = s.displayWidth, re.height = s.displayHeight, me.clearRect(0, 0, re.width, re.height), me.fillStyle = "#666", me.fillRect(0, 0, re.width, re.height), me.fillStyle = "#000", me.fillRect(e.space * p, (re.height - _e) / 2, _e, _e), me.translate(re.width / 2 + H, re.height / 2 + J), me.rotate(Math.PI / 180 * s.angle), me.scale(ae, ae), me.drawImage(q, pe, we, se, ue);
    }, h = (q) => {
      const se = Fe(l.value), { width: ue, height: pe } = se, we = s.displayWidth = ue * p, _e = s.displayHeight = pe * p;
      let H = G({}, o);
      const { width: J, height: ae } = q;
      H.img = q;
      const re = ae > J, me = re ? J / ae : ae / J;
      H.width = we, H.height = re ? we / me : we * me, H.x = -H.width / 2, H.y = -H.height / 2, H.swidth = we - e.space * 2 * p, H.sheight = re ? H.swidth / me : H.swidth * me, H.sx = e.space * p, H.sy = (_e - H.swidth) / 2, a.value = H, s.defScale = H.swidth / (re ? H.width : H.height), S();
    }, w = (q) => Ge(this, null, function* () {
      s.visible = !0;
      const se = q.target;
      let { files: ue } = se;
      if (!(ue != null && ue.length))
        return;
      const pe = yield b(ue[0]), we = yield c(pe);
      h(we), y();
    }), S = () => {
      I(s.defScale), s.moveX = 0, s.moveY = 0, s.angle = 0;
    }, I = (q) => {
      q = Pe(q, 0.3, +e.maxZoom + 1), q !== s.scale && (s.scale = q);
    }, B = (q) => Math.sqrt(pt(q[0].clientX - q[1].clientX, 2) + pt(q[0].clientY - q[1].clientY, 2));
    let M, C, T, P, O;
    const X = (q) => {
      const { touches: se } = q, { offsetX: ue } = d;
      d.start(q), O = se.length, M = s.moveX, C = s.moveY, s.moving = O === 1, s.zooming = O === 2 && !ue.value, s.zooming && (T = s.scale, P = B(q.touches));
    }, Z = (q) => {
      const { touches: se } = q;
      if (d.move(q), (s.moving || s.zooming) && dt(q, !0), s.moving) {
        const { deltaX: ue, deltaY: pe } = d, we = ue.value * s.scale + M, _e = pe.value * s.scale + C;
        s.moveX = Pe(we, -k.value, k.value), s.moveY = Pe(_e, -$.value, $.value);
      }
      if (s.zooming && se.length === 2) {
        const ue = B(se), pe = T * ue / P;
        I(pe);
      }
    }, le = (q) => {
      let se = !1;
      (s.moving || s.zooming) && (se = !(s.moving && M === s.moveX && C === s.moveY), q.touches.length || (s.zooming && (s.moveX = Pe(s.moveX, -k.value, k.value), s.moveY = Pe(s.moveY, -$.value, $.value), s.zooming = !1), s.moving = !1, M = 0, C = 0, T = s.defScale, s.scale < s.defScale && S(), s.scale > e.maxZoom && (s.scale = +e.maxZoom))), dt(q, se), d.reset();
    }, j = () => {
      s.angle = 0;
    }, U = () => {
      if (s.angle === 270) {
        s.angle = 0;
        return;
      }
      s.angle += 90;
    }, F = (q = !0) => {
      s.visible = !1, S(), i.value.value = "", q && t("cancel");
    }, te = () => {
      const q = r.value, { sx: se, sy: ue, swidth: pe } = a.value, we = pe, _e = pe, H = document.createElement("canvas"), J = H.getContext("2d");
      H.width = we, H.height = _e, q && J.drawImage(q, se, ue, we, _e, 0, 0, we, _e);
      const ae = H.toDataURL("image/png");
      t("confirm", ae), F(!1);
    };
    return Q(
      () => s.scale,
      () => {
        y();
      }
    ), Q(
      () => s.angle,
      () => {
        Math.abs(s.moveX) > k.value && (s.moveX = k.value), Math.abs(s.moveY) > $.value && (s.moveY = $.value), y();
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
      cancel: F,
      reset: j,
      rotate: U,
      confirm: te
    }), de(G({}, he(s)), {
      cropperPopupRef: l,
      canvasRef: r,
      inputImageRef: i,
      highlightStyle: g,
      inputImageChange: w,
      reset: j,
      rotate: U,
      cancel: F,
      confirm: te,
      onTouchStart: X,
      onTouchMove: Z,
      onTouchEnd: le
    });
  }
}), r5 = ["data-edit-text"], i5 = {
  ref: "cropperPopupRef",
  class: "nut-cropper-popup"
}, u5 = {
  ref: "canvasRef",
  class: "nut-cropper-popup__canvas"
}, c5 = {
  key: 1,
  class: "flex-sb"
};
function d5(e, t, n, s, o, a) {
  const l = W("nut-button"), r = W("Refresh2"), i = W("Retweet");
  return u(), f(x, null, [
    m("div", {
      class: L(["nut-avatar-cropper", { round: e.shape === "round" }]),
      "data-edit-text": e.editText
    }, [
      _(e.$slots, "default"),
      m("input", {
        ref: "inputImageRef",
        type: "file",
        accept: "image/*",
        class: "nut-avatar-cropper__input",
        onChange: t[0] || (t[0] = (...p) => e.inputImageChange && e.inputImageChange(...p))
      }, null, 544)
    ], 10, r5),
    Ce(m("div", i5, [
      m("canvas", u5, null, 512),
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
        e.$slots.toolbar ? _(e.$slots, "toolbar", { key: 0 }) : (u(), f("div", c5, [
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
const f5 = /* @__PURE__ */ K(a5, [["render", d5]]);
function p5(e) {
  [qe, eo, to, Tt, Ee, bi, _i, Bi, Pi, Oi, ao, ro, Qi, lu, au, mu, Tu, Eu, Hu, Yu, nc, po, Cc, mo, ho, Yc, Gc, nd, ud, go, Bd, Ud, hf, $o, Of, Ff, ap, an, Tp, Co, So, To, vo, wo, Kp, xp, T1, Y1, rn, un, _o, Q1, cm, hm, $m, cn, Hm, Um, Vt, th, Ot, $h, Th, dn, Lh, Vh, No, Xh, og, fg, fn, Mg, Ug, pn, mn, hn, gn, C0, M0, fo, zo, Vo, q0, Ho, Ro, $y, Sy, My, zy, Fy, xy, Sv, Iv, Vv, Zv, e2, i2, q2, r3, $3, W3, G3, m4, J4, l5, f5].forEach((n) => {
    n.install ? e.use(n) : n.name && e.component(n.name, n);
  });
}
const m5 = "4.3.0", b5 = { install: p5, version: m5 };
export {
  cm as ActionSheet,
  Sv as Address,
  W3 as AddressList,
  Sy as Animate,
  $h as Audio,
  Th as AudioOperate,
  dn as Avatar,
  f5 as AvatarCropper,
  Lh as AvatarGroup,
  hm as Backtop,
  fo as Badge,
  Iv as Barrage,
  qe as Button,
  hf as Calendar,
  $o as CalendarCard,
  vo as CalendarItem,
  r3 as Card,
  Ud as Cascader,
  G3 as Category,
  m4 as CategoryPane,
  eo as Cell,
  to as CellGroup,
  Of as Checkbox,
  Ff as CheckboxGroup,
  Xh as CircleProgress,
  Pi as Col,
  Ho as Collapse,
  Ro as CollapseItem,
  J4 as Comment,
  bi as ConfigProvider,
  M0 as Countdown,
  C0 as Countup,
  ap as DatePicker,
  cn as Dialog,
  ro as Divider,
  $m as Drag,
  $3 as Ecard,
  po as Elevator,
  My as Ellipsis,
  fg as Empty,
  Tu as FixedNav,
  rn as Form,
  un as FormItem,
  Qi as Grid,
  lu as GridItem,
  _i as Image,
  gn as ImagePreview,
  Yc as Indicator,
  Hm as InfiniteLoading,
  Tp as Input,
  an as InputNumber,
  l5 as Invoice,
  Bi as Layout,
  Vh as List,
  Kn as Locale,
  Eu as Menu,
  Hu as MenuItem,
  mu as Navbar,
  og as Noticebar,
  Vt as Notify,
  Y1 as NumberKeyboard,
  Tt as Overlay,
  Cc as Pagination,
  wo as Picker,
  Vo as Popover,
  Ee as Popup,
  hn as Price,
  No as Progress,
  Um as PullRefresh,
  Co as Radio,
  So as RadioGroup,
  go as Range,
  To as Rate,
  Oi as Row,
  Bd as Searchbar,
  Kp as ShortPassword,
  Gc as SideNavbar,
  nd as SideNavbarItem,
  Vv as Signature,
  q0 as Skeleton,
  q2 as Sku,
  au as Space,
  Ug as Step,
  Mg as Steps,
  ao as Sticky,
  ud as SubSideNavbar,
  _o as Swipe,
  Q1 as SwipeGroup,
  pn as Swiper,
  mn as SwiperItem,
  th as Switch,
  ho as TabPane,
  Yu as Tabbar,
  nc as TabbarItem,
  $y as Table,
  mo as Tabs,
  zo as Tag,
  xp as Textarea,
  i2 as TimeDetail,
  e2 as TimePannel,
  Zv as TimeSelect,
  Ot as Toast,
  xy as Tour,
  Fy as TrendArrow,
  T1 as Uploader,
  fn as Video,
  zy as Watermark,
  b5 as default,
  p5 as install,
  _m as showDialog,
  g0 as showImagePreview,
  $5 as showNotify,
  Mo as showToast,
  m5 as version
};
