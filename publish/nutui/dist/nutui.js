var _o = Object.defineProperty, Bo = Object.defineProperties;
var Mo = Object.getOwnPropertyDescriptors;
var bt = Object.getOwnPropertySymbols;
var an = Object.prototype.hasOwnProperty, rn = Object.prototype.propertyIsEnumerable;
var at = Math.pow, Lt = (e, t, n) => t in e ? _o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, G = (e, t) => {
  for (var n in t || (t = {}))
    an.call(t, n) && Lt(e, n, t[n]);
  if (bt)
    for (var n of bt(t))
      rn.call(t, n) && Lt(e, n, t[n]);
  return e;
}, ce = (e, t) => Bo(e, Mo(t));
var kt = (e) => typeof e == "symbol" ? e : e + "", Pt = (e, t) => {
  var n = {};
  for (var s in e)
    an.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && bt)
    for (var s of bt(e))
      t.indexOf(s) < 0 && rn.call(e, s) && (n[s] = e[s]);
  return n;
};
var z = (e, t, n) => (Lt(e, typeof t != "symbol" ? t + "" : t, n), n);
var Ue = (e, t, n) => new Promise((s, o) => {
  var a = (r) => {
    try {
      i(n.next(r));
    } catch (p) {
      o(p);
    }
  }, l = (r) => {
    try {
      i(n.throw(r));
    } catch (p) {
      o(p);
    }
  }, i = (r) => r.done ? s(r.value) : Promise.resolve(r.value).then(a, l);
  i((n = n.apply(e, t)).next());
});
import { reactive as ue, ref as P, defineComponent as ht, useSlots as Qe, h as we, openBlock as u, createBlock as x, computed as N, createElementBlock as d, normalizeClass as _, normalizeStyle as L, createElementVNode as m, createTextVNode as ge, toRefs as me, unref as et, createCommentVNode as C, renderSlot as D, provide as Me, inject as Be, getCurrentInstance as Fe, onUnmounted as je, createApp as Eo, resolveComponent as j, Fragment as ee, toDisplayString as B, watchEffect as Ft, Transition as Wt, withCtx as te, withDirectives as Ce, withModifiers as Ne, vShow as De, watch as Q, Teleport as Lo, mergeProps as pt, createVNode as le, onMounted as ve, onBeforeUnmount as Yt, shallowReactive as Po, markRaw as un, isVNode as Ao, Comment as zo, Text as Vo, nextTick as Te, renderList as re, normalizeProps as Oo, guardReactiveProps as Ho, resolveDynamicComponent as Ae, onActivated as gt, createSlots as mt, onBeforeMount as Dn, readonly as cn, onDeactivated as yt, render as jt, vModelText as In } from "vue";
class _n {
}
let Ro = class extends _n {
  constructor() {
    super(...arguments);
    z(this, "save", "保存");
    z(this, "confirm", "确认");
    z(this, "cancel", "取消");
    z(this, "done", "完成");
    z(this, "noData", "暂无数据");
    z(this, "placeholder", "请输入");
    z(this, "select", "请选择");
    z(this, "video", {
      errorTip: "视频加载失败",
      clickRetry: "点击重试"
    });
    z(this, "fixednav", {
      activeText: "收起导航",
      unActiveText: "快速导航"
    });
    z(this, "pagination", {
      prev: "上一页",
      next: "下一页"
    });
    z(this, "calendaritem", {
      weekdays: ["日", "一", "二", "三", "四", "五", "六"],
      end: "结束",
      start: "开始",
      title: "日期选择",
      monthTitle: (n, s) => `${n}年${s}月`,
      today: "今天"
    });
    z(this, "shortpassword", {
      title: "请输入密码",
      desc: "您使用了虚拟资产，请进行验证",
      tips: "忘记密码"
    });
    z(this, "uploader", {
      ready: "准备完成",
      readyUpload: "准备上传",
      waitingUpload: "等待上传",
      uploading: "上传中",
      success: "上传成功",
      error: "上传失败"
    });
    z(this, "countdown", {
      day: "天",
      hour: "时",
      minute: "分",
      second: "秒"
    });
    z(this, "address", {
      selectRegion: "请选择所在地区",
      deliveryTo: "配送至",
      chooseAnotherAddress: "选择其他地址"
    });
    z(this, "signature", {
      reSign: "重签",
      unSupportTpl: "对不起，当前浏览器不支持Canvas，无法使用本控件！"
    });
    z(this, "ecard", {
      chooseText: "请选择电子卡面值",
      otherValueText: "其他面值",
      placeholder: "请输入1-5000整数"
    });
    z(this, "timeselect", {
      pickupTime: "取件时间"
    });
    z(this, "sku", {
      buyNow: "立即购买",
      buyNumber: "购买数量",
      addToCart: "加入购物车"
    });
    z(this, "skuheader", {
      skuId: "商品编号"
    });
    z(this, "addresslist", {
      addAddress: "新建地址",
      default: "默认"
    });
    z(this, "comment", {
      complaintsText: "我要投诉",
      additionalReview: (n) => `购买${n}天后追评`,
      additionalImages: (n) => `${n}张追评图片`
    });
    z(this, "infiniteloading", {
      loading: "加载中...",
      pullTxt: "松开刷新",
      loadMoreTxt: "哎呀，这里是底部了啦"
    });
    z(this, "datepicker", {
      year: "年",
      month: "月",
      day: "日",
      hour: "时",
      min: "分",
      seconds: "秒"
    });
    z(this, "audiooperate", {
      back: "倒退",
      start: "开始",
      pause: "暂停",
      forward: "快进",
      mute: "静音"
    });
    z(this, "pullrefresh", {
      pulling: "下拉刷新",
      loosing: "释放刷新",
      loading: "加载中...",
      complete: "刷新成功"
    });
  }
};
class Fo extends _n {
  constructor() {
    super(...arguments);
    z(this, "save", "Save");
    z(this, "confirm", "Confirm");
    z(this, "cancel", "Cancel");
    z(this, "done", "Done");
    z(this, "noData", "No Data");
    z(this, "placeholder", "Placeholder");
    z(this, "select", "Select");
    z(this, "video", {
      errorTip: "Error Tip",
      clickRetry: "Click Retry"
    });
    z(this, "fixednav", {
      activeText: "Close Nav",
      unActiveText: "Open Nav"
    });
    z(this, "pagination", {
      prev: "Previous",
      next: "Next"
    });
    z(this, "calendaritem", {
      weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      end: "End",
      start: "Start",
      title: "Calendar",
      monthTitle: (n, s) => `${n}/${s}`,
      today: "Today"
    });
    z(this, "shortpassword", {
      title: "Please input a password",
      desc: "Verify",
      tips: "Forget password"
    });
    z(this, "uploader", {
      ready: "Ready",
      readyUpload: "Ready to upload",
      waitingUpload: "Waiting for upload",
      uploading: "Uploading",
      success: "Upload successful",
      error: "Upload failed"
    });
    z(this, "countdown", {
      day: " Day ",
      hour: " Hour ",
      minute: " Minute ",
      second: " Second "
    });
    z(this, "address", {
      selectRegion: "Select Region",
      deliveryTo: "Delivery To",
      chooseAnotherAddress: "Choose Another Address"
    });
    z(this, "signature", {
      reSign: "Re Sign",
      unSupportTpl: "Sorry, the current browser doesn't support canvas, so we can't use this control!"
    });
    z(this, "ecard", {
      chooseText: "Select",
      otherValueText: "Other Value",
      placeholder: "Placeholder"
    });
    z(this, "timeselect", {
      pickupTime: "Pickup Time"
    });
    z(this, "sku", {
      buyNow: "Buy Now",
      buyNumber: "Buy Number",
      addToCart: "Add to Cart"
    });
    z(this, "skuheader", {
      skuId: "Sku Number"
    });
    z(this, "addresslist", {
      addAddress: "Add New Address",
      default: "default"
    });
    z(this, "comment", {
      complaintsText: "I have a complaint",
      additionalReview: (n) => `Review after ${n} days of purchase`,
      additionalImages: (n) => `There are ${n} follow-up comments`
    });
    z(this, "infiniteloading", {
      loading: "Loading...",
      pullTxt: "Loose to refresh",
      loadMoreTxt: "Oops, this is the bottom"
    });
    z(this, "datepicker", {
      year: "Year",
      month: "Month",
      day: "Day",
      hour: "Hour",
      min: "Minute",
      seconds: "Second"
    });
    z(this, "audiooperate", {
      back: "Back",
      start: "Start",
      pause: "Pause",
      forward: "Forward",
      mute: "Mute"
    });
    z(this, "pullrefresh", {
      pulling: "Pull to refresh...",
      loosing: "Loose to refresh...",
      loading: "Loading...",
      complete: "Refresh successfully"
    });
  }
}
const Kt = (e, {
  args: t = [],
  done: n,
  canceled: s
}) => {
  if (e) {
    const o = e.apply(null, t);
    Bn(o) ? o.then((a) => {
      a ? n(a) : s && s();
    }).catch(() => {
    }) : o ? n() : s && s();
  } else
    n();
}, Dt = (e) => {
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
}, Ut = Array.isArray, Wo = (e) => e instanceof Date, It = (e) => typeof e == "function", Yo = (e) => typeof e == "string", ot = (e) => e !== null && typeof e == "object", Bn = (e) => ot(e) && It(e.then) && It(e.catch), jo = document, dn = jo.body, zt = (e, t) => {
  try {
    return t.split(".").reduce((n, s) => n[s], e);
  } catch (n) {
    return "";
  }
}, Ko = (e, t, n) => {
  let s = Object.assign({}, e), o = Object.assign({}, n);
  return Object.keys(t).length > 0 ? (Object.keys(s).forEach((a) => {
    if (Object.prototype.hasOwnProperty.call(o, a)) {
      const l = Dt(o[a]);
      l == "function" && (s[a] = o[a](t)), l == "string" && (s[a] = t[o[a]]);
    } else
      t[a] && (s[a] = t[a]);
  }), s) : e;
}, Mn = (e, t) => (Object.keys(t).forEach((n) => {
  let s = e[n], o = t[n];
  ot(s) && ot(o) ? Mn(s, o) : e[n] = o;
}), e);
function Uo(e, t = 2) {
  return Object.is(parseFloat(e), NaN) ? console.log(`传入的值：${e}不是一个数字`) : (e = parseFloat(e), (Math.round((e + Number.EPSILON) * Math.pow(10, t)) / Math.pow(10, t)).toFixed(t));
}
function lt(e, t) {
  (typeof e.cancelable != "boolean" || e.cancelable) && e.preventDefault(), t && e.stopPropagation();
}
const qe = (e, t = 2) => {
  for (e += ""; e.length < t; )
    e = "0" + e;
  return e.toString();
}, Pe = (e, t, n) => Math.min(Math.max(e, t), n), En = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, wt = ue({
  "zh-CN": new Ro(),
  "en-US": new Fo()
});
class Ln {
  static languages() {
    return wt[this.currentLang.value];
  }
  static use(t, n) {
    n && (wt[t] = new n()), this.currentLang.value = t;
  }
  static merge(t, n) {
    n && (wt[t] ? Mn(wt[t], n) : this.use(t, n));
  }
}
z(Ln, "currentLang", P("zh-CN"));
const Xo = /* @__PURE__ */ ht({
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
    const n = e, s = "nut-icon", o = Qe(), a = () => n.name ? n.name.indexOf("/") !== -1 : !1, l = (f) => {
      if (f)
        return isNaN(Number(f)) ? String(f) : f + "px";
    }, i = a();
    let r = we(
      i ? "img" : n.tag,
      {
        class: i ? `${s}__img` : `${n.fontClassName} ${s} ${n.classPrefix}-${n.name}`,
        style: {
          color: n.color,
          fontSize: l(n.size),
          width: l(n.width || n.size),
          height: l(n.height || n.size)
        },
        src: i ? n.name : ""
      },
      (t = o.default) == null ? void 0 : t.call(o)
    );
    const p = () => r;
    return (f, y) => (u(), x(p));
  }
});
function qo(e) {
  return e.name = "IconFont", e.install = (t) => {
    t.component("IconFont", e);
  }, e;
}
qo(Xo);
const R = (e) => ht({
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
    }, s = N(() => {
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
const Go = R("arrow-down2"), Zo = /* @__PURE__ */ m("path", {
  d: "M1741.19 227.497a121.654 121.654 0 1 1 127.858 206.812L1292.65 790.27a182.482 182.482 0 0 1-191.727 0L524.646 434.31a121.654 121.654 0 1 1 127.859-206.812l544.403 335.887c181.387-111.8 362.773-223.965 544.282-335.887",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Jo = [
  Zo
];
function Qo(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 2472 1024",
    role: "presentation"
  }, Jo, 6);
}
const xo = /* @__PURE__ */ ye(Go, [["render", Qo]]);
R("arrow-right");
R("arrow-right2");
R("arrow-up");
const el = R("arrow-up2"), tl = /* @__PURE__ */ m("path", {
  d: "M623.406 815.479A129.722 129.722 0 1 1 487.068 594.95C691.9 468.083 896.73 341.993 1101.691 215.125a194.583 194.583 0 0 1 204.442 0l614.494 379.567a129.722 129.722 0 1 1-136.338 220.657l-580.506-358.292-580.377 358.422",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), nl = [
  tl
];
function ol(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 2472 1024",
    role: "presentation"
  }, nl, 6);
}
const ll = /* @__PURE__ */ ye(el, [["render", ol]]);
R("ask");
R("ask2");
R("cart");
R("cart2");
R("category");
const sl = R("check-checked"), al = /* @__PURE__ */ m("path", {
  d: "M510.613 2.837C229.793 2.837.032 232.598.032 513.418S229.793 1024 510.613 1024s510.582-229.762 510.582-510.582S794.27 2.837 510.613 2.837zm0 794.238c-156.01 0-283.656-127.646-283.656-283.657s127.645-283.656 283.656-283.656S794.27 357.407 794.27 513.418 666.624 797.075 510.613 797.075z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), il = /* @__PURE__ */ m("path", {
  d: "M382.968 513.418a127.645 127.645 0 1 0 255.29 0 127.645 127.645 0 1 0-255.29 0Z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1);
function rl(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1032 1024",
    role: "presentation"
  }, [
    al,
    ge(","),
    il
  ], 6);
}
const fn = /* @__PURE__ */ ye(sl, [["render", rl]]), ul = R("check-disabled"), cl = /* @__PURE__ */ m("path", {
  d: "M506.467 0C227.962 0 .094 227.868.094 506.374s227.868 506.373 506.373 506.373 506.374-227.868 506.374-506.373S787.786 0 506.467 0zm202.55 571.077H306.73c-45.01 0-67.516-22.506-67.516-67.517 0-45.01 22.505-67.516 67.516-67.516h402.286c45.01 0 67.516 22.505 67.516 67.516 0 45.011-22.505 67.517-67.516 67.517z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), dl = [
  cl
];
function fl(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, dl, 6);
}
const pl = /* @__PURE__ */ ye(ul, [["render", fl]]), ml = R("check-normal"), hl = /* @__PURE__ */ m("path", {
  d: "M512 1024c-136.533 0-264.533-54.044-361.244-150.756C54.044 776.534 0 648.534 0 512c0-136.533 54.044-264.533 150.756-361.244C247.466 54.044 375.466 0 512 0c136.533 0 264.533 54.044 361.244 150.756C969.956 247.466 1024 375.466 1024 512s-54.044 264.533-150.756 361.244C776.534 969.956 648.534 1024 512 1024zm0-938.667c-113.778 0-221.867 45.511-301.511 125.156S85.333 398.222 85.333 512s45.511 221.867 125.156 301.511S398.222 938.667 512 938.667s221.867-45.511 301.511-125.156S938.667 625.778 938.667 512 893.156 290.133 813.51 210.489 625.778 85.333 512 85.333z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), gl = [
  hl
];
function yl(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, gl, 6);
}
const Vt = /* @__PURE__ */ ye(ml, [["render", yl]]), vl = R("Check"), $l = /* @__PURE__ */ m("path", {
  d: "M998.4 245.029c-219.429 153.6-398.629 332.8-552.229 552.228-40.228 58.514-128 54.857-164.571-3.657-69.486-106.057-149.943-186.514-256-256-51.2-32.914-18.286-113.371 40.229-98.743C182.857 460.8 274.286 508.343 358.4 585.143c157.257-190.172 358.4-340.114 588.8-435.2 62.171-25.6 106.057 58.514 51.2 95.086",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), bl = [
  $l
];
function kl(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, bl, 6);
}
const Pn = /* @__PURE__ */ ye(vl, [["render", kl]]), wl = R("checked"), Sl = /* @__PURE__ */ m("path", {
  d: "M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0zm281.6 369.778C779.378 381.156 600.178 500.622 472.178 691.2c0 0 0 2.844-2.845 2.844-8.533 5.69-48.355 36.978-88.177-8.533-39.823-51.2-62.578-99.555-142.223-142.222-2.844 0-2.844-2.845-2.844-2.845-8.533-11.377-39.822-56.888 19.911-56.888 45.511 0 91.022 11.377 162.133 73.955 5.69 5.689 14.223 5.689 17.067 0C469.333 517.69 608.711 366.933 768 318.578c0 0 19.911-2.845 31.289 14.222 5.689 11.378 11.378 22.756-5.689 36.978z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Cl = [
  Sl
];
function Tl(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Cl, 6);
}
const An = /* @__PURE__ */ ye(wl, [["render", Tl]]), Nl = R("checklist"), Dl = /* @__PURE__ */ m("path", {
  d: "M159.289 500.622c62.578 0 125.155 17.067 221.867 102.4 8.533 5.69 19.91 5.69 25.6 0 48.355-54.044 238.933-261.689 455.11-329.955 0 0 28.445-5.69 42.667 19.91 8.534 17.067 19.911 34.134-5.689 54.045-22.755 17.067-264.533 179.2-440.888 440.89l-2.845 2.844c-11.378 8.533-68.267 51.2-119.467-14.223-56.888-71.11-85.333-139.377-196.266-196.266-2.845 0-2.845-2.845-5.69-5.69-11.377-11.377-54.044-73.955 25.6-73.955z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Il = [
  Dl
];
function _l(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Il, 6);
}
const Bl = /* @__PURE__ */ ye(Nl, [["render", _l]]), Ml = R("circle-close"), El = /* @__PURE__ */ m("path", {
  d: "M511.492 73.063a438.425 438.425 0 0 1 310.545 748.953 439.16 439.16 0 1 1-621.09-621.073A435.695 435.695 0 0 1 511.492 73.046m0-73.063C267.49.018 57.468 172.408 9.87 411.717-37.713 651.042 90.39 890.658 315.823 984.03c225.45 93.355 485.444 14.472 621.005-188.416 135.543-202.906 108.885-473.293-63.659-645.82A509.645 509.645 0 0 0 511.492.002zm-175.7 635.495 299.673-299.674c12.049-12.049 24.115-12.049 36.164 0l15.496 15.497c12.05 12.066 12.05 24.115 0 36.18L387.47 687.122c-12.066 12.05-24.115 12.05-36.181 0l-15.497-15.496c-12.049-12.066-12.049-24.115 0-36.182zm0-284.177 15.496-15.497c12.066-12.049 24.115-12.049 36.18 0l299.64 299.674c12.05 12.049 12.05 24.098 0 36.164l-15.496 15.496c-12.05 12.05-24.115 12.05-36.182 0L335.808 387.465c-12.049-12.05-12.049-24.098 0-36.164z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ll = [
  El
];
function Pl(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ll, 6);
}
const Xt = /* @__PURE__ */ ye(Ml, [["render", Pl]]);
R("clock");
R("close-little");
const Al = R("close"), zl = /* @__PURE__ */ m("path", {
  d: "M981.577 1024c-11.703 0-23.406-2.926-32.183-11.703L13.166 76.07c-14.629-17.555-14.629-46.812 0-64.366 17.554-14.629 46.811-14.629 64.365 0L1013.76 947.93c17.554 17.555 17.554 43.886 0 61.44-8.777 11.703-20.48 14.629-32.183 14.629zm-936.228 0c-11.703 0-23.406-2.926-32.183-11.703-17.555-17.554-17.555-43.886 0-61.44L949.394 14.63c17.555-17.555 43.886-17.555 61.44 0 17.555 17.554 17.555 43.885 0 61.44L74.606 1012.297C68.754 1021.074 57.05 1024 45.349 1024z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Vl = [
  zl
];
function Ol(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1026 1024",
    role: "presentation"
  }, Vl, 6);
}
const _t = /* @__PURE__ */ ye(Al, [["render", Ol]]), Hl = R("comment"), Rl = /* @__PURE__ */ m("path", {
  d: "M760.415 876.089H259.793c-132.741 0-242.726-109.985-242.726-242.726V242.726C17.067 109.986 127.052 0 259.793 0h504.414c132.741 0 242.726 109.985 242.726 242.726v394.43c-3.792 132.74-109.985 238.933-246.518 238.933zM259.793 113.778c-72.06 0-128.949 56.889-128.949 128.948v394.43c0 72.059 56.89 128.948 128.949 128.948h504.414c68.267 0 128.949-56.89 128.949-128.948v-394.43c0-72.06-56.89-128.948-128.949-128.948H259.793zm56.888 887.466c-15.17 0-30.34-3.792-41.718-15.17-22.756-22.755-22.756-56.889 0-79.644l109.985-109.986c22.756-22.755 56.889-22.755 79.645 0s22.755 56.89 0 79.645L354.607 986.074c-7.585 7.585-22.755 15.17-37.926 15.17zm193.423-398.222c-45.511 0-91.023-22.755-117.57-56.889-18.964-26.548-15.171-60.681 7.585-79.644 26.548-18.963 60.681-15.17 79.644 7.585 15.17 18.963 45.511 18.963 56.889 0 18.963-22.755 56.889-30.34 79.644-7.585s30.341 56.889 7.585 79.644c-22.755 37.926-68.266 56.89-113.777 56.89z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Fl = [
  Rl
];
function Wl(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Fl, 6);
}
const Yl = /* @__PURE__ */ ye(Hl, [["render", Wl]]);
R("date");
const jl = R("del"), Kl = /* @__PURE__ */ m("path", {
  d: "M668.444 1024H355.556c-142.223 0-256-113.778-256-256V170.667h824.888V768c0 142.222-113.777 256-256 256zM184.89 256v512c0 93.867 76.8 170.667 170.667 170.667h312.888c93.867 0 170.667-76.8 170.667-170.667V256H184.89zm753.778 0H85.333c-22.755 0-42.666-19.911-42.666-42.667s19.91-42.666 42.666-42.666h853.334c22.755 0 42.666 19.91 42.666 42.666S961.423 256 938.667 256zM625.777 85.333H398.223c-22.755 0-42.666-19.91-42.666-42.666S375.466 0 398.222 0h227.556c22.755 0 42.666 19.911 42.666 42.667s-19.91 42.666-42.666 42.666z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ul = [
  Kl
];
function Xl(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ul, 6);
}
const zn = /* @__PURE__ */ ye(jl, [["render", Xl]]);
R("del2");
R("dongdong");
R("dou-arrow-up");
const ql = R("down-arrow"), Gl = /* @__PURE__ */ m("path", {
  d: "M128 349.867C93.867 332.8 34.133 341.333 8.533 384-8.533 418.133 0 477.867 42.667 503.467 179.2 588.8 315.733 665.6 443.733 750.933c42.667 25.6 93.867 25.6 136.534 0C716.8 665.6 853.333 588.8 981.333 503.467c42.667-25.6 51.2-76.8 25.6-119.467s-76.8-51.2-119.466-25.6C768 435.2 640 512 512 588.8 384 512 256 435.2 128 349.867",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Zl = [
  Gl
];
function Jl(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Zl, 6);
}
const Vn = /* @__PURE__ */ ye(ql, [["render", Jl]]);
R("download");
R("dshop");
const Ql = R("edit"), xl = /* @__PURE__ */ m("path", {
  d: "M285.479 992.97H108.606c-27.927 0-55.854-12.412-77.576-31.03C9.31 940.217 0 915.393 0 884.363l3.103-155.152c0-24.824 9.31-46.545 27.927-65.164L626.812 65.164c83.782-83.782 220.315-83.782 307.2 0 83.782 83.781 83.782 223.418 0 307.2l-605.09 601.988c-12.413 12.412-27.928 18.618-43.443 18.618zM781.964 93.09c-31.03 0-65.164 12.413-89.988 37.237L96.194 729.212 93.09 884.364c0 9.309 6.206 15.515 15.515 15.515h161.358l598.884-595.782c49.649-49.649 49.649-127.224 0-173.77l-3.103-3.103c-21.72-21.721-52.751-34.133-83.781-34.133zm-201.946 78.508 65.816-65.847L882.812 342.73l-65.846 65.784zM946.424 992.97H217.212c-24.824 0-46.545-21.722-46.545-46.546s21.72-46.545 46.545-46.545h729.212c24.824 0 46.546 21.721 46.546 46.545s-21.722 46.546-46.546 46.546z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), es = [
  xl
];
function ts(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, es, 6);
}
const ns = /* @__PURE__ */ ye(Ql, [["render", ts]]);
R("eye");
const os = R("fabulous"), ls = /* @__PURE__ */ m("path", {
  d: "M584.06 1024H318.577C144.118 1024 0 883.674 0 705.422s140.326-318.578 318.578-318.578v113.778c-113.778 0-204.8 91.022-204.8 204.8s91.022 204.8 204.8 204.8h265.481V1024zm56.888 0h-53.096c-208.593 0-379.26-170.667-379.26-383.052 0-83.437 26.549-163.081 75.852-231.348l3.793-3.793c15.17-22.755 30.34-60.681 45.511-121.363l7.585-34.133c7.586-18.963 15.17-41.718 18.963-68.267C386.844 22.756 470.281 0 519.586 0c117.57 0 178.251 106.193 178.251 212.385v7.585c0 7.586-3.793 18.963-3.793 37.926C876.09 257.896 1024 405.807 1024 587.852v53.096C1024 853.333 853.333 1024 640.948 1024zM519.585 113.778c-30.34 0-41.718 53.096-49.304 87.23-3.792 34.133-11.377 60.68-15.17 83.436l-7.585 34.134c-11.378 45.51-34.133 113.778-60.682 155.496l-7.585 3.793A269.274 269.274 0 0 0 322.37 644.74c0 147.91 121.363 269.274 269.274 269.274h53.097c147.91 0 269.274-121.363 269.274-269.274v-53.097c0-117.57-98.608-216.177-216.178-216.177h-56.889c-18.963-3.793-37.926-15.17-49.304-30.341-11.377-15.17-15.17-37.926-15.17-56.889 7.585-41.718 11.378-64.474 11.378-75.852v-3.792c-3.793 0-3.793-94.815-68.267-94.815z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ss = [
  ls
];
function as(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1061 1024",
    role: "presentation"
  }, ss, 6);
}
const is = /* @__PURE__ */ ye(os, [["render", as]]), rs = R("failure"), us = /* @__PURE__ */ m("path", {
  d: "M512 1024C229.831 1024 0 794.169 0 512S229.831 0 512 0s512 229.831 512 512-229.831 512-512 512zm0-955.733C266.24 68.267 68.267 266.24 68.267 512S266.24 955.733 512 955.733 955.733 757.76 955.733 512 757.76 68.267 512 68.267zm111.502 282.169c13.654-13.654 34.134-13.654 47.787 0 11.378 11.377 13.653 31.857 2.275 45.51l-2.275 2.276-111.502 111.502 111.502 111.503c13.653 13.653 13.653 34.133 0 47.786-13.653 13.654-34.133 13.654-47.787 0L512 557.511 400.498 669.013c-11.378 11.378-31.858 13.654-45.511 2.276l-2.276-2.276c-11.378-11.377-13.653-31.857-2.275-45.51l2.275-2.276 111.502-111.503-111.502-111.502c-13.653-13.653-13.653-34.133 0-47.786s34.133-13.654 47.787 0L512 461.938l111.502-111.502z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), cs = [
  us
];
function ds(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, cs, 6);
}
const On = /* @__PURE__ */ ye(rs, [["render", ds]]);
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
const fs = R("image-error"), ps = /* @__PURE__ */ m("path", {
  d: "M696.43 465.25c40.61 0 73.53-32.72 73.53-73.09s-32.96-73.08-73.53-73.08-73.54 32.72-73.54 73.08 32.92 73.09 73.54 73.09zM535.74 650.62l-273.61-259.4a56.19 56.19 0 0 0-15.36 11.58l-114 119.63-6-222.77c-.73-26.82 20.84-49.41 47.67-50.14l201.77-5.44 47.34-50-250.43 6.75C119 202.33 76.33 247.17 77.78 301l7.32 271.4 4.5 166.78C91.06 793 136.05 835.47 190.2 834l176-4.75 12-.32 47.34-50 116.18-122.64z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ms = /* @__PURE__ */ m("path", {
  d: "m861.71 214.8-242.83-33.86-55.09 41.46L855 263a49.05 49.05 0 0 1 41.79 55.13l-54.33 389.59-120.87-159.05A59.86 59.86 0 0 0 638.06 537l-44 33.08 65.07 86.15L603.84 698l-79.57 60.1-54.92 41.48 34.17 4.76 270.73 37.76a97.55 97.55 0 0 0 109.88-79.6 22.37 22.37 0 0 0 .65-3.44l60.53-434.16c7.44-53.32-29.95-102.62-83.6-110.1z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1);
function hs(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, [
    ps,
    ge(","),
    ms
  ], 6);
}
const gs = /* @__PURE__ */ ye(fs, [["render", hs]]), ys = R("image"), vs = /* @__PURE__ */ m("path", {
  d: "M853.161 892.55H362.595l-209.433-.414a18.5 18.5 0 0 1-1.813-.092c-24.849-2.485-47.825-14.06-64.696-32.595-16.991-18.665-26.35-42.855-26.35-68.112V264.626c0-55.808 45.404-101.211 101.212-101.211H853.16c55.808 0 101.21 45.403 101.21 101.211v225.513c0 .275-.006.552-.018.826-.022.494-1.972 51.723 15.481 85.462 4.717 9.119 1.148 20.335-7.97 25.053-9.117 4.714-20.335 1.15-25.053-7.97-21.3-41.177-19.845-97.643-19.619-103.74V264.627c0-35.307-28.724-64.031-64.03-64.031H161.515c-35.308 0-64.032 28.724-64.032 64.031v526.711c0 32.755 24.321 59.958 56.718 63.62l208.431.412h490.53c35.306 0 64.03-28.725 64.03-64.032l-.382-93.677c-.105-1.75-1.587-19.548-19.55-42.5a9.548 9.548 0 0 1-.147-.19l-21.712-28.489-117.227-155.119c-.416-.55-38.995-50.852-86.272-45.534-38.335 4.315-75.955 45.164-108.79 118.132-17.615 39.141-34.65 68.269-52.082 89.046-17.607 20.986-35.68 33.52-55.251 38.317-43.423 10.638-81.05-18.995-120.887-50.373l-5.057-3.98c-46.555-36.578-68.75-28.224-158.33 59.602-7.33 7.188-19.1 7.071-26.289-.26-7.187-7.33-7.07-19.1.26-26.287 46.659-45.746 77.544-72.727 107.086-84.283 33.358-13.048 64.275-6.267 100.242 21.994l5.093 4.008c33.923 26.72 63.22 49.795 89.029 43.467 25.618-6.279 53.3-42.114 82.28-106.509 39.14-86.976 85.838-134.027 138.797-139.849 68.454-7.515 117.824 57.405 119.892 60.172l117.122 154.98 21.6 28.344c26.277 33.631 27.334 61.639 27.367 64.725l.001.128.384 94.06c.001 55.884-45.4 101.287-101.209 101.287z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), $s = /* @__PURE__ */ m("path", {
  d: "M312.328 446.968c-42.325 0-76.759-34.434-76.759-76.76s34.434-76.759 76.76-76.759 76.759 34.435 76.759 76.76-34.434 76.759-76.76 76.759zm0-116.34c-21.824 0-39.579 17.756-39.579 39.58s17.755 39.58 39.58 39.58 39.579-17.756 39.579-39.58-17.755-39.58-39.58-39.58z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1);
function bs(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, [
    vs,
    ge(","),
    $s
  ], 6);
}
const ks = /* @__PURE__ */ ye(ys, [["render", bs]]);
R("issue");
R("JD");
R("jdl");
R("JIMI40");
const ws = R("joy-smile"), Ss = /* @__PURE__ */ m("path", {
  d: "M2185.74 479.429a117.992 117.992 0 1 0-162.829-170.852c-284.772 271.204-732.314 271.204-1017.087 0A118.05 118.05 0 0 0 842.996 479.43c375.98 358.045 966.705 358.045 1342.744 0",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Cs = [
  Ss
];
function Ts(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 3072 1024",
    role: "presentation"
  }, Cs, 6);
}
const Ns = /* @__PURE__ */ ye(ws, [["render", Ts]]), Ds = R("left"), Is = /* @__PURE__ */ m("path", {
  d: "M642.973 1005.542 321.912 587.098a123.278 123.278 0 0 1 0-150.17l321.06-418.443a47.182 47.182 0 0 1 74.83 57.422l-321.088 418.47a28.994 28.994 0 0 0 0 35.3l321.088 418.47a47.155 47.155 0 0 1-74.83 57.395",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), _s = [
  Is
];
function Bs(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, _s, 6);
}
const qt = /* @__PURE__ */ ye(Ds, [["render", Bs]]), Ms = R("link"), Es = /* @__PURE__ */ m("path", {
  d: "M313.034 1004.045c-66.848 0-124.402-24.156-170.798-70.577l-40.854-40.829C54.96 846.218 28.966 783.097 30.83 714.411c3.702-66.85 31.56-131.808 79.819-180.12l137.4-137.373c14.86-14.861 40.855-14.861 55.69 0 14.86 14.861 16.725 38.99 0 55.69l-137.348 137.4a187.47 187.47 0 0 0-55.69 126.24c-1.864 46.422 14.835 89.115 46.396 120.675l40.855 40.855c31.56 31.56 74.253 48.286 120.674 46.421 46.421-1.838 92.843-22.291 126.24-55.69l137.4-137.4c14.862-14.86 40.856-14.86 55.69 0 14.862 14.862 14.862 40.856 0 55.69l-137.4 137.427c-48.285 48.259-113.27 76.117-180.118 79.82a5.645 5.645 0 0 0-7.405 0zm475.294-382.477c-11.133 0-18.563-3.702-27.832-12.997-14.86-14.861-14.86-40.855 0-55.69l115.082-115.108a187.47 187.47 0 0 0 55.716-126.267c1.838-46.395-14.861-89.114-46.421-120.674l-40.855-40.855c-64.985-64.959-176.364-61.257-246.915 9.294L478.266 278.108c-14.835 14.835-40.829 14.835-55.69 0-14.86-14.861-14.86-40.855 0-55.716l118.81-118.81C643.524 1.444 803.163-2.232 899.734 94.287l40.829 40.855c46.421 46.421 72.415 109.541 70.55 178.228-3.702 66.85-31.56 131.807-79.819 180.093L816.186 608.571c-7.43 7.43-18.563 11.133-27.858 12.997zm-332.327-1.864c-11.16 0-18.564-3.702-27.832-12.997-14.888-14.835-14.888-40.829 0-55.69l148.506-148.532c14.861-14.862 40.855-14.862 55.69 0 14.861 14.86 14.861 40.854 0 55.69L483.832 606.706c-7.404 7.43-18.563 11.159-27.831 12.997z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ls = [
  Es
];
function Ps(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ls, 6);
}
const As = /* @__PURE__ */ ye(Ms, [["render", Ps]]), zs = R("loading"), Vs = /* @__PURE__ */ m("path", {
  d: "M784 902.4c9.6 19.2 6.4 41.6-12.8 54.4-19.2 9.6-41.6 3.2-51.2-12.8-9.6-19.2-6.4-41.6 12.8-54.4 16-12.8 38.4-8 51.2 12.8zM550.4 984c0 22.4-16 38.4-38.4 38.4s-38.4-16-38.4-38.4v-24c0-22.4 19.2-38.4 41.6-38.4 19.2 0 35.2 16 38.4 38.4v25.6h-3.2zm-240-43.2c-9.6 19.2-35.2 25.6-54.4 16-19.2-9.6-25.6-35.2-16-51.2l28.8-51.2c9.6-19.2 35.2-25.6 54.4-16s25.6 35.2 12.8 54.4l-25.6 48zM121.6 784c-19.2 9.6-41.6 3.2-54.4-16-9.6-19.2-6.4-41.6 12.8-54.4l76.8-44.8c19.2-9.6 41.6-3.2 54.4 16 9.6 19.2 3.2 41.6-16 54.4L121.6 784zM38.4 552C16 552 0 536 0 513.6s16-38.4 38.4-38.4H160c22.4 0 38.4 19.2 38.4 38.4 0 22.4-16 38.4-38.4 38.4H38.4zm44.8-241.6c-19.2-9.6-25.6-35.2-16-51.2 9.6-19.2 35.2-25.6 54.4-16L256 320c19.2 9.6 25.6 35.2 16 54.4s-35.2 25.6-54.4 16l-134.4-80zm160-185.6 92.8 160c9.6 19.2 35.2 25.6 54.4 12.8s25.6-35.2 12.8-54.4l-92.8-160C297.6 64 275.2 60.8 256 70.4c-16 12.8-22.4 33.6-12.8 54.4zM473.6 40c0-22.4 16-38.4 38.4-38.4s38.4 19.2 38.4 38.4v184c0 22.4-19.2 38.4-38.4 38.4-22.4 0-38.4-19.2-38.4-38.4V40zm240 43.2c9.6-19.2 35.2-25.6 54.4-16 19.2 9.6 25.6 35.2 16 51.2l-92.8 160c-9.6 19.2-35.2 25.6-54.4 16-19.2-9.6-25.6-35.2-12.8-54.4l89.6-156.8zm188.8 160-160 92.8c-19.2 9.6-25.6 35.2-16 54.4 12.8 19.2 35.2 25.6 54.4 12.8l160-92.8c19.2-9.6 25.6-35.2 12.8-54.4-9.6-16-32-25.6-51.2-12.8zM985.6 472c22.4 0 38.4 16 38.4 38.4s-16 38.4-38.4 38.4H800c-22.4 0-38.4-19.2-38.4-38.4 0-22.4 19.2-38.4 38.4-38.4h185.6z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Os = [
  Vs
];
function Hs(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Os, 6);
}
const xe = /* @__PURE__ */ ye(zs, [["render", Hs]]), Rs = R("loading1"), Fs = /* @__PURE__ */ m("path", {
  d: "M520.665 64.564a29.244 29.244 0 0 0-7.071-.894c-16.211 0-29.35 13.14-29.35 29.35 0 15.83 12.538 28.696 28.223 29.293v.073c.375 0 .751-.014 1.127-.014 216.493 0 389.629 173.942 389.629 390.433 0 216.496-173.136 388.827-389.63 388.827s-389.63-172.333-389.63-388.829c0-.27.01-.536.01-.804h-.01c0-16.209-13.141-29.35-29.35-29.35s-29.35 13.139-29.35 29.35c0 .055.007.11.007.164-.001.214-.007.425-.007.64 0 247.609 200.722 448.331 448.33 448.331 247.607 0 448.33-200.722 448.33-448.33-.002-245.242-196.917-444.456-441.258-448.24z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ws = [
  Fs
];
function Ys(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ws, 6);
}
const js = /* @__PURE__ */ ye(Rs, [["render", Ys]]), Ks = R("location"), Us = /* @__PURE__ */ m("path", {
  d: "M512 971.487C259.938 971.487 52.513 764.062 52.513 512S259.938 52.513 512 52.513 971.487 259.938 971.487 512 764.062 971.487 512 971.487zm0-840.205c-210.051 0-380.718 170.667-380.718 380.718S301.95 892.718 512 892.718 892.718 722.05 892.718 512 722.05 131.282 512 131.282zm0 577.641c-107.651 0-196.923-89.272-196.923-196.923S404.349 315.077 512 315.077 708.923 404.349 708.923 512 619.651 708.923 512 708.923zm0-315.077c-65.641 0-118.154 52.513-118.154 118.154S446.36 630.154 512 630.154 630.154 577.64 630.154 512 577.64 393.846 512 393.846zm0-210.051c-21.005 0-39.385-18.38-39.385-39.385V39.385C472.615 18.379 490.995 0 512 0s39.385 18.38 39.385 39.385V144.41c0 21.005-18.38 39.385-39.385 39.385zM512 1024c-21.005 0-39.385-18.38-39.385-39.385V879.59c0-21.005 18.38-39.385 39.385-39.385s39.385 18.38 39.385 39.385v105.025c0 21.006-18.38 39.385-39.385 39.385zm472.615-472.615H879.59c-21.005 0-39.385-18.38-39.385-39.385s18.38-39.385 39.385-39.385h105.025c21.006 0 39.385 18.38 39.385 39.385s-18.38 39.385-39.385 39.385zm-840.205 0H39.385C18.379 551.385 0 533.005 0 512s18.38-39.385 39.385-39.385H144.41c21.005 0 39.385 18.38 39.385 39.385s-18.38 39.385-39.385 39.385z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Xs = [
  Us
];
function qs(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Xs, 6);
}
const Gs = /* @__PURE__ */ ye(Ks, [["render", qs]]), Zs = R("location2"), Js = /* @__PURE__ */ m("path", {
  d: "m530.286 1005.714-25.6-10.971c-36.572-14.629-58.515-25.6-73.143-36.572-102.4-84.114-164.572-135.314-193.829-171.885-43.885-51.2-76.8-91.429-106.057-142.629C95.086 577.83 76.8 504.686 76.8 431.543c0-117.029 43.886-226.743 128-307.2C285.257 43.886 394.971 0 512 0s226.743 43.886 310.857 128c84.114 80.457 128 190.171 128 307.2 0 73.143-18.286 146.286-54.857 212.114-25.6 43.886-58.514 91.429-106.057 142.629-29.257 32.914-87.772 84.114-197.486 171.886 0 0-7.314 7.314-18.286 10.971l-43.885 32.914zM497.37 874.057s3.658 3.657 14.629 7.314c3.657-3.657 7.314-3.657 10.971-7.314C621.714 797.257 683.886 742.4 705.83 716.8c40.228-47.543 69.485-87.771 91.428-128 25.6-47.543 40.229-102.4 40.229-157.257 0-87.772-32.915-168.229-95.086-230.4-58.514-58.514-142.629-91.429-230.4-91.429S340.114 142.63 277.943 204.8c-62.172 62.171-95.086 142.629-95.086 230.4 0 54.857 14.629 109.714 40.229 157.257 25.6 43.886 54.857 80.457 95.085 124.343 25.6 29.257 84.115 80.457 179.2 157.257zm18.286-248.686c-102.4 0-182.857-80.457-182.857-182.857s80.457-182.857 182.857-182.857 182.857 80.457 182.857 182.857-80.457 182.857-182.857 182.857zm0-256c-40.228 0-73.143 32.915-73.143 73.143s32.915 73.143 73.143 73.143 73.143-32.914 73.143-73.143-32.914-73.143-73.143-73.143z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Qs = [
  Js
];
function xs(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Qs, 6);
}
const ea = /* @__PURE__ */ ye(Zs, [["render", xs]]);
R("locationg3");
R("lower");
R("marshalling");
const ta = R("mask-close"), na = /* @__PURE__ */ m("path", {
  d: "M512 14.897C238.594 14.897 14.897 238.594 14.897 512S238.594 1009.103 512 1009.103 1009.103 785.406 1009.103 512 785.406 14.897 512 14.897zm207.126 646.234c16.57 16.57 16.57 41.425 0 57.995s-41.425 16.57-57.995 0L512 569.996l-149.13 149.13c-16.57 16.57-41.426 16.57-57.996 0s-16.57-41.425 0-57.995L454.004 512l-149.13-149.13c-16.57-16.57-16.57-41.426 0-57.996s41.425-16.57 57.995 0L512 454.004l149.13-149.13c16.57-16.57 41.426-16.57 57.996 0s16.57 41.425 0 57.995L569.996 512l149.13 149.13z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), oa = [
  na
];
function la(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, oa, 6);
}
const sa = /* @__PURE__ */ ye(ta, [["render", la]]);
R("message");
R("microphone");
const aa = R("minus"), ia = /* @__PURE__ */ m("path", {
  d: "M299.52 460.8h409.6c28.16 0 51.2 23.04 51.2 51.2s-23.04 51.2-51.2 51.2h-409.6c-28.16 0-51.2-23.04-51.2-51.2s23.04-51.2 51.2-51.2z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ra = [
  ia
];
function ua(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ra, 6);
}
const ca = /* @__PURE__ */ ye(aa, [["render", ua]]);
R("more-s");
const da = R("more-x"), fa = /* @__PURE__ */ m("path", {
  d: "M937.115 428.218c-43.442 0-80.679 37.237-80.679 80.679s37.237 80.679 80.68 80.679c43.442 0 80.678-37.237 80.678-80.679s-34.133-80.679-80.679-80.679m-428.218-52.751c-74.473 0-133.43 58.957-133.43 133.43s58.957 133.43 133.43 133.43 133.43-58.957 133.43-133.43-58.957-133.43-133.43-133.43M83.782 428.218c-43.443 0-80.679 37.237-80.679 80.679s34.133 80.679 80.679 80.679 80.679-37.237 80.679-80.679-37.237-80.679-80.68-80.679",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), pa = [
  fa
];
function ma(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, pa, 6);
}
const ha = /* @__PURE__ */ ye(da, [["render", ma]]);
R("more");
R("my");
R("my2");
const ga = R("notice"), ya = /* @__PURE__ */ m("path", {
  d: "M940.873 819.2h-85.334V430.933c0-192-153.6-345.6-341.333-345.6s-341.333 153.6-341.333 345.6V819.2H87.539V430.933C87.54 192 279.54 0 514.206 0s426.667 192 426.667 430.933V819.2zM514.633 1024c-68.267 0-132.267-29.867-174.934-85.333-17.066-17.067-12.8-42.667 4.267-59.734 17.067-12.8 46.933-12.8 59.733 8.534 29.867 34.133 68.267 51.2 110.934 51.2s81.066-17.067 106.666-51.2c12.8-17.067 42.667-21.334 59.734-8.534 17.066 12.8 21.333 42.667 8.533 59.734C646.899 994.133 582.899 1024 514.633 1024zm469.333-162.133h-12.8c-294.4-89.6-618.667-89.6-913.067 0-21.333 4.266-46.933-8.534-55.466-29.867-8.534-21.333 4.266-46.933 29.866-51.2 311.467-93.867 652.8-89.6 964.267 0 21.333 8.533 34.133 29.867 29.867 51.2-8.534 21.333-25.6 29.867-42.667 29.867z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), va = [
  ya
];
function $a(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1027 1024",
    role: "presentation"
  }, va, 6);
}
const ba = /* @__PURE__ */ ye(ga, [["render", $a]]);
R("order");
R("people");
const ka = R("photograph"), wa = /* @__PURE__ */ m("path", {
  d: "M570.514 789.943c-119.954 0-219.428-99.474-219.428-219.429s99.474-219.428 219.428-219.428 219.429 99.474 219.429 219.428-99.474 219.429-219.429 219.429zm0-351.086c-73.143 0-131.657 58.514-131.657 131.657s58.514 131.657 131.657 131.657 131.657-58.514 131.657-131.657-58.514-131.657-131.657-131.657zM877.714 1024h-614.4C117.03 1024 0 906.971 0 760.686V380.343c0-146.286 117.029-263.314 263.314-263.314h32.183c0-2.926 2.926-8.778 2.926-11.703C315.977 43.886 374.49 0 438.857 0h263.314c70.218 0 128.732 49.737 143.36 117.029h32.183c146.286 0 263.315 117.028 263.315 263.314v380.343C1141.029 906.97 1024 1024 877.714 1024zm-614.4-819.2c-96.548 0-175.543 78.994-175.543 175.543v380.343c0 96.548 78.995 175.543 175.543 175.543h614.4c96.549 0 175.543-78.995 175.543-175.543V380.343c0-96.549-78.994-175.543-175.543-175.543H819.2c-32.183 0-58.514-26.331-58.514-58.514S734.354 87.77 702.17 87.77H438.857c-26.331 0-49.737 17.555-55.588 40.96-2.926 5.852-2.926 11.703-2.926 17.555 0 32.183-26.332 58.514-58.514 58.514h-58.515zm-87.771 160.914a73.143 73.143 0 1 0 146.286 0 73.143 73.143 0 1 0-146.286 0Z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Sa = [
  wa
];
function Ca(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1141 1024",
    role: "presentation"
  }, Sa, 6);
}
const Ta = /* @__PURE__ */ ye(ka, [["render", Ca]]);
R("play-circle-fill");
R("play-double-back");
R("play-double-forward");
R("play-start");
R("play-stop");
const Na = R("plus"), Da = /* @__PURE__ */ m("path", {
  d: "M345.6 460.8h409.6q51.2 0 51.2 51.2t-51.2 51.2H345.6q-51.2 0-51.2-51.2t51.2-51.2zM550.4 256q51.2 0 51.2 51.2v409.6q0 51.2-51.2 51.2t-51.2-51.2V307.2q0-51.2 51.2-51.2z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ia = [
  Da
];
function _a(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ia, 6);
}
const Ba = /* @__PURE__ */ ye(Na, [["render", _a]]);
R("poweroff-circle-fill");
const Ma = R("rect-down"), Ea = /* @__PURE__ */ m("path", {
  d: "M515.072 778.24c-14.336 0-28.672-5.632-39.936-16.384L69.12 356.864c-22.016-22.016-22.016-57.856 0-79.872s57.856-22.016 79.872 0L515.584 642.56 880.64 275.968c22.016-22.016 57.856-22.016 79.872 0s22.016 57.856 0 79.872L555.008 762.368c-10.752 10.752-25.6 15.872-39.936 15.872z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), La = [
  Ea
];
function Pa(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, La, 6);
}
const Aa = /* @__PURE__ */ ye(Ma, [["render", Pa]]);
R("rect-left");
R("rect-right");
const za = R("rect-up"), Va = /* @__PURE__ */ m("path", {
  d: "M920.576 778.24c-14.336 0-28.672-5.632-39.936-16.384L515.072 395.264 148.48 760.832c-22.016 22.016-57.856 22.016-79.872 0s-22.016-57.856 0-79.872l406.528-405.504c22.016-22.016 57.856-22.016 79.872 0l405.504 406.528c22.016 22.016 22.016 57.856 0 79.872-11.264 11.264-25.6 16.384-39.936 16.384z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Oa = [
  Va
];
function Ha(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Oa, 6);
}
const Ra = /* @__PURE__ */ ye(za, [["render", Ha]]);
R("refresh");
const Fa = R("refresh2"), Wa = /* @__PURE__ */ m("path", {
  d: "M771.938 315.077h199.55L958.358 469.99 758.81 364.964c-13.128-7.877-18.38-23.63-10.502-36.759 2.625-7.877 13.128-13.128 23.63-13.128zm-535.63 393.846H44.636L57.764 554.01l191.672 105.026c13.128 7.877 18.38 23.63 10.502 36.759-5.25 7.877-15.753 13.128-23.63 13.128zM509.374 1024C257.313 1024 44.636 845.456 5.251 596.02 0 575.016 15.754 556.637 36.76 551.386c21.005-2.626 42.01 10.502 44.636 31.507 34.133 210.052 215.302 362.339 427.98 362.339 191.671 0 362.338-128.657 417.476-312.452 5.252-21.005 28.882-34.133 49.887-26.256 21.006 5.251 34.134 28.882 26.257 49.887C937.354 871.713 735.179 1024 509.375 1024zm467.364-551.385c-18.379 0-36.759-13.128-39.384-34.133C903.22 231.056 722.05 78.77 509.374 78.77c-191.671 0-362.338 128.657-414.85 312.452-5.252 21.005-28.883 34.133-49.888 26.256-21.005-5.251-34.133-28.882-26.257-49.887C81.395 152.287 283.57 0 509.374 0c252.062 0 464.739 178.544 504.123 427.98 2.626 21.005-10.502 42.01-31.507 44.635h-5.252z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ya = [
  Wa
];
function ja(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ya, 6);
}
const Ka = /* @__PURE__ */ ye(Fa, [["render", ja]]), Ua = R("retweet"), Xa = /* @__PURE__ */ m("path", {
  d: "M136 552h63.6c4.4 0 8-3.6 8-8V288.7h528.6v72.6c0 1.9.6 3.7 1.8 5.2 2.9 3.6 8.1 4.3 11.7 1.4L893 255.4c4.3-5 3.6-10.3 0-13.2L749.7 129.8c-1.5-1.2-3.3-1.8-5.2-1.8-4.6 0-8.4 3.8-8.4 8.4V209H199.7c-39.5 0-71.7 32.2-71.7 71.8V544c0 4.4 3.6 8 8 8zm752-80h-63.6c-4.4 0-8 3.6-8 8v255.3H287.8v-72.6c0-1.9-.6-3.7-1.8-5.2-2.9-3.6-8.1-4.3-11.7-1.4L131 768.6c-4.3 5-3.6 10.3 0 13.2l143.3 112.4c1.5 1.2 3.3 1.8 5.2 1.8 4.6 0 8.4-3.8 8.4-8.4V815h536.6c39.5 0 71.7-32.2 71.7-71.8V480c-.2-4.4-3.8-8-8.2-8z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), qa = [
  Xa
];
function Ga(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, qa, 6);
}
const Za = /* @__PURE__ */ ye(Ua, [["render", Ga]]), Ja = R("right"), Qa = /* @__PURE__ */ m("path", {
  d: "M381.262 1005.566c-16.132 21.51-45.708 24.198-67.217 8.066-21.51-16.132-24.198-45.708-8.066-67.217C413.526 806.604 518.384 666.792 625.932 529.67c8.066-10.755 8.066-24.198 0-34.953C518.384 354.906 413.526 215.094 305.979 77.972c-16.132-21.51-10.755-51.085 8.066-67.217C335.555-5.377 365.13 0 381.262 18.82c107.547 142.5 212.405 282.311 319.953 419.434 34.952 43.019 34.952 104.858 0 150.566-107.548 139.811-212.406 279.622-319.953 416.745",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), xa = [
  Qa
];
function ei(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, xa, 6);
}
const Gt = /* @__PURE__ */ ye(Ja, [["render", ei]]);
R("s-follow");
R("scan");
R("scan2");
R("screen-little");
R("search");
R("search2");
const ti = R("service"), ni = /* @__PURE__ */ m("path", {
  d: "M1024 657.723H905.846v-126.03c0-228.431-177.23-413.54-393.846-413.54s-393.846 185.109-393.846 413.54v126.03H0v-126.03C0 236.307 228.43 0 512 0s512 236.308 512 531.692v126.031zM196.923 866.462C86.646 866.462 0 779.815 0 669.538s86.646-196.923 196.923-196.923 196.923 86.647 196.923 196.923S307.2 866.462 196.923 866.462zm0-275.693c-43.323 0-78.77 35.446-78.77 78.77s35.447 78.769 78.77 78.769 78.77-35.446 78.77-78.77-35.447-78.769-78.77-78.769zm630.154 275.693c-110.277 0-196.923-86.647-196.923-196.924S716.8 472.615 827.077 472.615 1024 559.262 1024 669.538s-86.646 196.924-196.923 196.924zm0-275.693c-43.323 0-78.77 35.446-78.77 78.77s35.447 78.769 78.77 78.769 78.77-35.446 78.77-78.77-35.447-78.769-78.77-78.769zm-149.662 429.293c-23.63 0-47.261-15.754-55.138-43.324-7.877-31.507 7.877-63.015 39.385-74.83 102.4-31.508 189.046-102.4 236.307-196.923 15.754-27.57 51.2-39.385 78.77-23.631s39.384 51.2 23.63 78.77c-63.015 122.091-177.23 216.614-307.2 256-3.938 3.938-11.815 3.938-15.754 3.938z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), oi = [
  ni
];
function li(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, oi, 6);
}
const si = /* @__PURE__ */ ye(ti, [["render", li]]);
R("setting");
R("share-n");
R("share");
R("share1");
R("shop");
R("shop3");
const ai = R("star-fill-n"), ii = /* @__PURE__ */ m("path", {
  d: "M1047.135 361.244 722.87 312.89 577.802 22.756c-2.844-8.534-11.378-14.223-19.911-17.067-19.911-8.533-45.511-2.845-54.045 17.067L358.78 312.889 34.513 358.4c-8.533 0-17.067 5.689-22.755 11.378-17.067 17.066-14.223 42.666 0 56.889l233.244 227.555-54.044 321.422c-2.845 8.534 0 17.067 2.844 25.6 11.378 19.912 34.133 28.445 54.044 17.067L537.98 867.556l290.133 150.755c8.533 2.845 17.067 5.689 25.6 2.845 22.756-2.845 36.978-25.6 34.133-45.512l-54.044-321.422 233.244-227.555c5.69-5.69 11.378-14.223 11.378-22.756 5.69-19.911-8.533-39.822-31.289-42.667z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ri = [
  ii
];
function ui(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1081 1024",
    role: "presentation"
  }, ri, 6);
}
const pn = /* @__PURE__ */ ye(ai, [["render", ui]]);
R("star-fill");
R("star-fill1");
R("star-fill2");
R("star-n");
R("star");
R("star1");
R("star11");
R("star2");
const ci = R("success"), di = /* @__PURE__ */ m("path", {
  d: "M762.311 391.396C655.36 466.489 566.613 552.96 491.52 659.91c-20.48 27.307-61.44 27.307-79.644-2.275-34.134-52.338-72.818-91.023-125.156-125.156-25.031-15.929-9.102-54.613 20.48-50.062 56.889 11.378 100.124 34.133 143.36 72.818 77.369-93.298 175.218-166.116 286.72-213.903 27.307-9.102 50.062 31.858 25.031 50.063M512 1024C229.831 1024 0 794.169 0 512S229.831 0 512 0s512 229.831 512 512-229.831 512-512 512zm0-955.733C266.24 68.267 68.267 266.24 68.267 512S266.24 955.733 512 955.733 955.733 757.76 955.733 512 757.76 68.267 512 68.267z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), fi = [
  di
];
function pi(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, fi, 6);
}
const mi = /* @__PURE__ */ ye(ci, [["render", pi]]), hi = R("tips"), gi = /* @__PURE__ */ m("path", {
  d: "M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512zm0-938.667c-234.667 0-426.667 192-426.667 426.667s192 426.667 426.667 426.667 426.667-192 426.667-426.667S746.667 85.333 512 85.333zM448 320a64 64 0 1 0 128 0 64 64 0 1 0-128 0Zm-17.067 149.333h51.2c12.8 0 21.334 8.534 21.334 21.334v8.533c0 12.8-8.534 21.333-21.334 21.333h-51.2c-12.8 0-25.6-12.8-25.6-25.6s12.8-25.6 25.6-25.6zm51.2 0H524.8c25.6 0 51.2 21.334 51.2 51.2v8.534L537.6 755.2c0 8.533-8.533 17.067-21.333 17.067H473.6c-25.6 0-51.2-21.334-51.2-51.2v-8.534L460.8 486.4c4.267-8.533 12.8-17.067 21.333-17.067zm8.534 251.734h76.8c12.8 0 25.6 12.8 25.6 25.6s-12.8 25.6-25.6 25.6h-76.8c-12.8 0-21.334-8.534-21.334-21.334v-12.8c4.267-12.8 12.8-17.066 21.334-17.066z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), yi = [
  gi
];
function vi(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, yi, 6);
}
const Hn = /* @__PURE__ */ ye(hi, [["render", vi]]), $i = R("top"), bi = /* @__PURE__ */ m("path", {
  d: "M136.533 540.444c-11.377 0-25.6-5.688-34.133-17.066-14.222-19.911-11.378-45.511 8.533-59.734L477.867 179.2c19.91-14.222 45.51-11.378 59.733 8.533s11.378 45.511-8.533 59.734L162.133 531.91c-5.689 5.689-14.222 8.533-25.6 8.533zm745.245 0c-8.534 0-17.067-2.844-25.6-8.533L489.244 247.467c-19.91-14.223-22.755-42.667-8.533-59.734 14.222-19.91 42.667-22.755 59.733-8.533l366.934 284.444c19.91 14.223 22.755 42.667 8.533 59.734-8.533 11.378-19.911 17.066-34.133 17.066zM512 1024c-22.756 0-42.667-19.911-42.667-42.667v-768c0-22.755 19.911-42.666 42.667-42.666s42.667 19.91 42.667 42.666v768c0 22.756-19.911 42.667-42.667 42.667zM884.622 85.333h-742.4c-22.755 0-42.666-19.91-42.666-42.666S119.466 0 142.222 0h742.4c22.756 0 42.667 19.911 42.667 42.667s-19.911 42.666-42.667 42.666z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ki = [
  bi
];
function wi(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ki, 6);
}
const Si = /* @__PURE__ */ ye($i, [["render", wi]]), Ci = R("triangle-down"), Ti = /* @__PURE__ */ m("path", {
  d: "m573.056 752 308.8-404.608A76.8 76.8 0 0 0 820.736 224H203.232a76.8 76.8 0 0 0-61.056 123.392L450.976 752a76.8 76.8 0 0 0 122.08 0z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ni = [
  Ti
];
function Di(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ni, 6);
}
const Ii = /* @__PURE__ */ ye(Ci, [["render", Di]]), _i = R("triangle-up"), Bi = /* @__PURE__ */ m("path", {
  d: "m573.056 272 308.8 404.608A76.8 76.8 0 0 1 820.736 800H203.232a76.8 76.8 0 0 1-61.056-123.392L450.976 272a76.8 76.8 0 0 1 122.08 0z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Mi = [
  Bi
];
function Ei(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Mi, 6);
}
const Li = /* @__PURE__ */ ye(_i, [["render", Ei]]);
R("uploader");
R("voice");
const Pi = { class: "nut-button__wrap" }, Ke = /* @__PURE__ */ ht({
  name: "NutButton",
  __name: "button",
  props: {
    color: {
      type: String,
      default: ""
    },
    shape: {
      type: String,
      default: "round"
    },
    plain: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    type: {
      type: String,
      default: "default"
    },
    size: {
      type: String,
      default: "normal"
    },
    block: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e, s = t, { type: o, size: a, shape: l, disabled: i, loading: r, color: p, plain: f, block: y } = me(n), g = (k) => {
      !r.value && !i.value && s("click", k);
    }, v = N(() => {
      const k = "nut-button";
      return {
        [k]: !0,
        [`${k}--${o.value}`]: o.value,
        [`${k}--${a.value}`]: a.value,
        [`${k}--${l.value}`]: l.value,
        [`${k}--plain`]: f.value,
        [`${k}--block`]: y.value,
        [`${k}--disabled`]: i.value,
        [`${k}--loading`]: r.value
      };
    }), b = N(() => {
      var c;
      const k = {};
      return p != null && p.value && (f.value ? (k.color = p.value, k.background = "#fff", (c = p.value) != null && c.includes("gradient") || (k.borderColor = p.value)) : (k.color = "#fff", k.background = p.value)), k;
    });
    return (k, c) => (u(), d("view", {
      class: _(v.value),
      style: L(b.value),
      onClick: g
    }, [
      m("view", Pi, [
        et(r) ? (u(), x(et(xe), {
          key: 0,
          class: "nut-icon-loading"
        })) : C("", !0),
        k.$slots.icon && !et(r) ? D(k.$slots, "icon", { key: 1 }) : C("", !0),
        k.$slots.default ? (u(), d("view", {
          key: 2,
          class: _({ "nut-button__text": k.$slots.icon || et(r) })
        }, [
          D(k.$slots, "default")
        ], 2)) : C("", !0)
      ])
    ], 6));
  }
}), Rn = (e) => {
  const t = ue([]), n = ue([]);
  return {
    children: t,
    linkChildren: (o) => {
      Me(e, G({
        unlink: (i) => {
          if (i.proxy) {
            let r = n.indexOf(i);
            r > -1 && n.splice(r, 1);
            let p = t.indexOf(i.proxy);
            r > -1 && t.splice(p, 1);
          }
        },
        link: (i) => {
          i.proxy && (n.push(i), t.push(i.proxy));
        },
        children: t,
        internalChildren: n
      }, o));
    }
  };
}, Fn = (e) => {
  const t = Be(e, null);
  if (t) {
    const n = Fe(), { link: s, unlink: o } = t;
    s(n), je(() => {
      o(n);
    });
  }
  return { parent: t };
}, Ai = (e) => {
  const t = e;
  return t.install = (n) => {
    t.name && n.component(t.name, t);
  }, t;
};
Ai(Ke);
const zi = (e) => e.replace(/-./g, (t) => t[1].toUpperCase());
function W(e) {
  return {
    componentName: "nut-" + e,
    create: function(n) {
      return n.name = "Nut" + zi("-" + e), n.install = (s) => {
        s.component(n.name, n);
      }, ht(n);
    }
  };
}
const st = (e, t) => e ? we(e, t) : "", Zt = (e, t) => {
  let n = document.body;
  const s = e.teleport || "body";
  s != "body" && (Yo(s) ? n = document.querySelector(s) : n = e.teleport);
  const o = document.createElement("view"), a = t.name ? t.name + "-" : "", l = e.id || (/* @__PURE__ */ new Date()).getTime();
  o.id = a + l;
  let i = {};
  It(t.wrapper) ? i = t.wrapper(n, o) : i = t.wrapper;
  const r = Eo(i, e), p = t.components;
  return p && p.forEach((f) => {
    r.use(f);
  }), n.appendChild(o), {
    instance: r.mount(o),
    unmount: () => {
      r.unmount(), n.removeChild(o);
    }
  };
};
function Jt() {
  return Fe().proxy.$router || null;
}
const _e = (e) => {
  if (e !== void 0)
    return isNaN(Number(e)) ? String(e) : `${e}px`;
}, { componentName: Vi, create: Oi } = W("cell"), Hi = Oi({
  components: { Right: Gt },
  props: {
    title: { type: String, default: "" },
    subTitle: { type: String, default: "" },
    desc: { type: String, default: "" },
    descTextAlign: { type: String, default: "right" },
    isLink: { type: Boolean, default: !1 },
    to: [String, Object],
    replace: { type: Boolean, default: !1 },
    roundRadius: { type: [String, Number], default: "" },
    url: { type: String, default: "" },
    center: { type: Boolean, default: !1 },
    size: { type: String, default: "" }
    // large
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = N(() => {
      const i = Vi;
      return {
        [i]: !0,
        [`${i}--clickable`]: e.isLink || e.to,
        [`${i}--center`]: e.center,
        [`${i}--large`]: e.size == "large"
      };
    }), s = Jt(), o = N(() => ({
      borderRadius: _e(e.roundRadius)
    })), a = N(() => ({
      textAlign: e.descTextAlign
    }));
    return {
      handleClick: (i) => {
        t("click", i), e.to && s ? s[e.replace ? "replace" : "push"](e.to) : e.url && (e.replace ? location.replace(e.url) : location.href = e.url);
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
}, Ri = {
  key: 0,
  class: "nut-cell__icon"
}, Fi = {
  key: 1,
  class: "nut-cell__title"
}, Wi = { class: "title" }, Yi = { class: "nut-cell__title-desc" };
function ji(e, t, n, s, o, a) {
  const l = j("Right");
  return u(), d("view", {
    class: _(e.classes),
    style: L(e.baseStyle),
    onClick: t[0] || (t[0] = (...i) => e.handleClick && e.handleClick(...i))
  }, [
    D(e.$slots, "default", {}, () => [
      e.$slots.icon ? (u(), d("view", Ri, [
        D(e.$slots, "icon")
      ])) : C("", !0),
      e.title || e.subTitle || e.$slots.title ? (u(), d("view", Fi, [
        e.subTitle ? (u(), d(ee, { key: 0 }, [
          D(e.$slots, "title", {}, () => [
            m("view", Wi, B(e.title), 1)
          ]),
          m("view", Yi, B(e.subTitle), 1)
        ], 64)) : D(e.$slots, "title", { key: 1 }, () => [
          ge(B(e.title), 1)
        ])
      ])) : C("", !0),
      e.desc || e.$slots.desc ? (u(), d("view", {
        key: 2,
        class: _(["nut-cell__value", { "nut-cell__value--alone": !e.title && !e.subTitle && !e.$slots.title }]),
        style: L(e.descStyle)
      }, [
        D(e.$slots, "desc", {}, () => [
          ge(B(e.desc), 1)
        ])
      ], 6)) : C("", !0),
      D(e.$slots, "link", {}, () => [
        e.isLink || e.to ? (u(), x(l, {
          key: 0,
          class: "nut-cell__link"
        })) : C("", !0)
      ])
    ])
  ], 6);
}
const Wn = /* @__PURE__ */ K(Hi, [["render", ji]]), { create: Ki } = W("cell-group"), Ui = Ki({
  props: {
    title: { type: String, default: "" },
    desc: { type: String, default: "" }
  }
}), Xi = { class: "nut-cell-group" }, qi = {
  key: 1,
  class: "nut-cell-group__title"
}, Gi = {
  key: 3,
  class: "nut-cell-group__desc"
}, Zi = { class: "nut-cell-group__wrap" };
function Ji(e, t, n, s, o, a) {
  return u(), d("view", Xi, [
    e.$slots.title ? D(e.$slots, "title", { key: 0 }) : e.title ? (u(), d("view", qi, B(e.title), 1)) : C("", !0),
    e.$slots.desc ? D(e.$slots, "desc", { key: 2 }) : e.desc ? (u(), d("view", Gi, B(e.desc), 1)) : C("", !0),
    m("view", Zi, [
      D(e.$slots, "default")
    ])
  ]);
}
const Yn = /* @__PURE__ */ K(Ui, [["render", Ji]]);
let it = 0;
const mn = "nut-overflow-hidden", Qi = (e) => [() => {
  if (e())
    try {
      !it && dn.classList.add(mn), it++;
    } catch (s) {
      console.warn("[NutUI] <useLockScroll>", s);
    }
}, () => {
  if (e() && it)
    try {
      it--, !it && dn.classList.remove(mn);
    } catch (s) {
      console.warn("[NutUI] <unlock>", s);
    }
}], { componentName: xi, create: er } = W("overlay"), tr = er({
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
    const [n, s] = Qi(() => e.lockScroll), o = N(() => ({
      [xi]: !0,
      [e.overlayClass]: !0
    })), a = N(() => G({
      transitionDuration: `${e.duration}s`,
      zIndex: e.zIndex
    }, e.overlayStyle));
    return Ft(() => {
      e.visible ? n() : s();
    }), { classes: o, style: a, onClick: (i) => {
      t("click", i), e.closeOnClickOverlay && t("update:visible", !1);
    } };
  }
});
function nr(e, t, n, s, o, a) {
  return u(), x(Wt, { name: "overlay-fade" }, {
    default: te(() => [
      Ce(m("view", {
        class: _(e.classes),
        style: L(e.style),
        onClick: t[0] || (t[0] = Ne((...l) => e.onClick && e.onClick(...l), ["stop"]))
      }, [
        D(e.$slots, "default")
      ], 6), [
        [De, e.visible]
      ])
    ]),
    _: 3
  });
}
const vt = /* @__PURE__ */ K(tr, [["render", nr]]), $t = {
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
  closeIcon: {
    type: String,
    default: "close"
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
}, { componentName: or, create: lr } = W("popup"), jn = 2e3;
let hn = jn;
const sr = lr({
  components: {
    NutOverlay: vt,
    Close: _t
  },
  props: $t,
  emits: ["clickPop", "clickCloseIcon", "open", "close", "opened", "closed", "clickOverlay", "update:visible"],
  setup(e, { emit: t }) {
    const n = ue({
      zIndex: e.zIndex,
      showSlot: !0,
      closed: e.closeable
    }), s = N(() => ({
      [or]: !0,
      round: e.round,
      [`nut-popup--${e.position}`]: !0,
      [`nut-popup--${e.position}--safebottom`]: e.position === "bottom" && e.safeAreaInsetBottom,
      [e.popClass]: !0
    })), o = N(() => G({
      zIndex: n.zIndex,
      transitionDuration: `${e.duration}s`
    }, e.style)), a = N(() => e.transition ? e.transition : `nut-popup-slide-${e.position}`), l = () => {
      e.zIndex !== jn && (hn = Number(e.zIndex)), t("update:visible", !0), n.zIndex = ++hn, e.destroyOnClose && (n.showSlot = !0), t("open");
    }, i = () => {
      t("update:visible", !1), t("close"), e.destroyOnClose && setTimeout(() => {
        n.showSlot = !1;
      }, +e.duration * 1e3);
    }, r = (v) => {
      t("clickPop", v);
    }, p = (v) => {
      v.stopPropagation(), t("clickCloseIcon", v), t("update:visible", !1);
    }, f = (v) => {
      t("clickOverlay", v), e.closeOnClickOverlay && t("update:visible", !1);
    }, y = (v) => {
      t("opened", v);
    }, g = (v) => {
      t("closed", v);
    };
    return Q(
      () => e.visible,
      () => {
        e.visible ? l() : i();
      }
    ), Ft(() => {
      n.closed = e.closeable;
    }), ce(G({}, me(n)), {
      popStyle: o,
      transitionName: a,
      classes: s,
      onClick: r,
      onClickCloseIcon: p,
      onClickOverlay: f,
      onOpened: y,
      onClosed: g
    });
  }
});
function ar(e, t, n, s, o, a) {
  const l = j("nut-overlay"), i = j("Close");
  return u(), x(Lo, {
    to: e.teleport,
    disabled: !e.teleportDisable
  }, [
    e.overlay ? (u(), x(l, pt({
      key: 0,
      visible: e.visible,
      "close-on-click-overlay": e.closeOnClickOverlay,
      "z-index": e.zIndex,
      "lock-scroll": e.lockScroll,
      duration: e.duration,
      "overlay-class": e.overlayClass,
      "overlay-style": e.overlayStyle
    }, e.$attrs, { onClick: e.onClickOverlay }), null, 16, ["visible", "close-on-click-overlay", "z-index", "lock-scroll", "duration", "overlay-class", "overlay-style", "onClick"])) : C("", !0),
    le(Wt, {
      name: e.transitionName,
      onAfterEnter: e.onOpened,
      onAfterLeave: e.onClosed
    }, {
      default: te(() => [
        Ce(m("view", {
          class: _(e.classes),
          style: L(e.popStyle),
          onClick: t[1] || (t[1] = (...r) => e.onClick && e.onClick(...r))
        }, [
          e.showSlot ? D(e.$slots, "default", { key: 0 }) : C("", !0),
          e.closed ? (u(), d("view", {
            key: 1,
            class: _(["nut-popup__close-icon", "nut-popup__close-icon--" + e.closeIconPosition]),
            onClick: t[0] || (t[0] = (...r) => e.onClickCloseIcon && e.onClickCloseIcon(...r))
          }, [
            D(e.$slots, "close-icon", {}, () => [
              le(i, { height: "12px" })
            ])
          ], 2)) : C("", !0)
        ], 6), [
          [De, e.visible]
        ])
      ]),
      _: 3
    }, 8, ["name", "onAfterEnter", "onAfterLeave"])
  ], 8, ["to", "disabled"]);
}
const Ee = /* @__PURE__ */ K(sr, [["render", ar]]), ir = (e) => ({
  props: {
    theme: { type: String, default: "" },
    themeVars: { type: Object, default: {} },
    tag: { type: String, default: e }
  },
  setup(t, { slots: n }) {
    const s = (i) => {
      if (!/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(i))
        return "";
      i = i.toLowerCase(), i.length === 4 && (i = "#" + i.slice(1).split("").map((f) => f + f).join(""));
      const p = [];
      for (let f = 1; f < 7; f += 2)
        p.push(parseInt("0x" + i.slice(f, f + 2)));
      return p.join(",");
    }, o = (i) => (i = i.replace(i.charAt(0), i.charAt(0).toLocaleLowerCase()), i.replace(/([a-z])([A-Z])/g, (r, p, f) => p + "-" + f.toLowerCase())), a = (i) => {
      if (!i)
        return;
      const r = {}, p = i == null ? void 0 : i.primaryColor;
      if (p) {
        const f = s(p);
        r["--nut-address-region-tab-line"] = `linear-gradient(90deg, ${p} 0%, rgba(${f}, 0.15) 100%)`, r["--nut-tabs-horizontal-tab-line-color"] = `linear-gradient(90deg, ${p} 0%, rgba(${f}, 0.15) 100%)`, r["--nut-tabs-vertical-tab-line-color"] = `linear-gradient(180deg, ${p} 0%, rgba(${f}, 0.15) 100%)`;
      }
      return Object.keys(i).forEach((f) => {
        r[`--nut-${o(f)}`] = i[f];
      }), r;
    }, l = N(() => a(t.themeVars));
    return () => {
      var i;
      return we(
        t.tag,
        {
          class: `nut-theme-${t.theme}`,
          style: l.value
        },
        (i = n.default) == null ? void 0 : i.call(n)
      );
    };
  }
}), { create: rr } = W("config-provider"), ur = rr(ir("div")), { componentName: cr, create: dr } = W("image"), fr = dr({
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
    Image: ks,
    ImageError: gs
  },
  emits: ["click", "load", "error"],
  setup(e, { emit: t }) {
    const n = ue({
      loading: !0,
      isError: !1,
      slotLoding: Qe().loading,
      slotError: Qe().error
    }), s = N(() => {
      const v = cr;
      return {
        [v]: !0,
        [`${v}-round`]: e.round
      };
    }), o = P(null), a = P(!1), l = P(null), i = () => {
      const v = {
        threshold: [0],
        rootMargin: "0px"
      };
      o.value = new IntersectionObserver((b) => {
        b.forEach((k) => {
          k.isIntersecting && (a.value = !0, o.value.disconnect());
        });
      }, v), l.value && o.value.observe(l.value);
    };
    ve(() => {
      e.lazyLoad && i();
    }), Yt(() => {
      o.value && o.value.disconnect();
    });
    const r = N(() => {
      let v = {};
      return e.width && (v.width = _e(e.width)), e.height && (v.height = _e(e.height)), e.radius !== void 0 && e.radius !== null && (v.overflow = "hidden", v.borderRadius = _e(e.radius)), v;
    }), p = N(() => ({
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
    }, y = () => {
      n.isError = !0, n.loading = !1, t("error");
    }, g = (v) => {
      t("click", v);
    };
    return ce(G({}, me(n)), { imageClick: g, classes: s, styles: p, stylebox: r, error: y, load: f, show: a, imgRef: l });
  }
}), pr = ["src", "date-src", "alt"], mr = {
  key: 0,
  class: "nut-img-loading"
}, hr = {
  key: 1,
  class: "nut-img-error"
};
function gr(e, t, n, s, o, a) {
  const l = j("Image"), i = j("ImageError");
  return u(), d("div", {
    class: _(e.classes),
    style: L(e.stylebox),
    onClick: t[2] || (t[2] = (...r) => e.imageClick && e.imageClick(...r))
  }, [
    m("img", {
      ref: "imgRef",
      class: "nut-img",
      src: e.lazyLoad ? e.show ? e.src : void 0 : e.src,
      "date-src": e.lazyLoad ? e.show ? void 0 : e.src : void 0,
      alt: e.alt,
      style: L(e.styles),
      onLoad: t[0] || (t[0] = (...r) => e.load && e.load(...r)),
      onError: t[1] || (t[1] = (...r) => e.error && e.error(...r))
    }, null, 44, pr),
    e.loading ? (u(), d("div", mr, [
      e.slotLoding ? C("", !0) : (u(), x(l, {
        key: 0,
        width: "16px",
        height: "20px",
        name: "image"
      })),
      D(e.$slots, "loading")
    ])) : C("", !0),
    e.isError && !e.loading ? (u(), d("div", hr, [
      e.slotError ? C("", !0) : (u(), x(i, {
        key: 0,
        width: "16px",
        height: "20px",
        name: "imageError"
      })),
      D(e.$slots, "error")
    ])) : C("", !0)
  ], 6);
}
const yr = /* @__PURE__ */ K(fr, [["render", gr]]), { create: vr } = W("layout"), $r = vr({}), Kn = Symbol("nut-layout"), { create: br } = W("col"), kr = br({
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
    const t = "nut-col", n = Be(Kn), s = N(() => ({
      [t]: !0,
      [t + "-gutter"]: n,
      ["nut-col-" + e.span]: !0,
      ["nut-col-offset-" + e.offset]: !0
    })), o = N(() => ({
      paddingLeft: n / 2 + "px",
      paddingRight: n / 2 + "px"
    }));
    return {
      classes: s,
      style: o
    };
  }
});
function wr(e, t, n, s, o, a) {
  return u(), d("view", {
    class: _(e.classes),
    style: L(e.style)
  }, [
    D(e.$slots, "default")
  ], 6);
}
const Sr = /* @__PURE__ */ K(kr, [["render", wr]]), { create: Cr } = W("row"), Tr = Cr({
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
    Me(Kn, e.gutter);
    const n = (o, a) => o ? a ? `nut-row-${o}-${a}` : "" : `nut-row-${a}`;
    return {
      classes: N(() => [
        t,
        n("", e.type),
        n("justify", e.justify),
        n("align", e.align),
        n("flex", e.flexWrap)
      ])
    };
  }
});
function Nr(e, t, n, s, o, a) {
  return u(), d("view", {
    class: _(e.classes)
  }, [
    D(e.$slots, "default")
  ], 2);
}
const Dr = /* @__PURE__ */ K(Tr, [["render", Nr]]), Ir = /scroll|auto|overlay/i, Un = window;
function _r(e) {
  return e.tagName !== "HTML" && e.tagName !== "BODY" && e.nodeType === 1;
}
function Ot(e, t = Un) {
  let n = e;
  for (; n && n !== t && _r(n); ) {
    const { overflowY: s } = window.getComputedStyle(n);
    if (Ir.test(s))
      return n;
    n = n.parentNode;
  }
  return t;
}
function Xn(e, t = Un) {
  const n = P();
  return ve(() => {
    e.value && (n.value = Ot(e.value, t));
  }), n;
}
function Br(e) {
  return e === window;
}
const Oe = (e) => {
  const t = et(e);
  if (Br(t)) {
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
}, { create: Mr } = W("sticky"), Er = Mr({
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
    const n = P(), s = P(), o = ue({
      fixed: !1,
      height: 0,
      width: 0,
      transform: 0
    }), a = N(() => e.position === "top" ? Number(e.top) : Number(e.bottom)), l = N(() => o.fixed ? { height: `${o.height}px` } : {}), i = N(() => o.fixed ? {
      [e.position]: `${a.value}px`,
      height: `${o.height}px`,
      width: `${o.width}px`,
      transform: o.transform ? `translate3d(0, ${o.transform}px, 0)` : void 0,
      position: o.fixed ? "fixed" : void 0,
      zIndex: Number(e.zIndex)
    } : {}), r = () => {
      const p = e.container;
      if (!n.value && !p)
        return;
      const f = Oe(n), y = s.value, g = Oe(y), v = Oe(p);
      o.height = f.height, o.width = f.width;
      const b = () => {
        let c = !1;
        if (e.position === "top")
          c = p ? a.value > f.top && v.bottom > 0 : a.value > f.top;
        else {
          const $ = document.documentElement.clientHeight;
          c = p ? v.bottom > 0 && $ - a.value - g.height > v.top : $ - a.value < f.bottom;
        }
        return c;
      }, k = () => {
        if (p)
          if (e.position === "top") {
            const c = v.bottom - a.value - g.height;
            return c < 0 ? c : 0;
          } else {
            const c = document.documentElement.clientHeight, $ = v.bottom - (c - a.value);
            return $ < 0 ? $ : 0;
          }
        return 0;
      };
      o.transform = k(), o.fixed = b();
    };
    return Q(
      () => o.fixed,
      (p) => {
        t("change", p);
      }
    ), ve(() => {
      r(), Ot(n.value).addEventListener("scroll", r, !0);
    }), je(() => {
      Ot(n.value).removeEventListener("scroll", r);
    }), { rootRef: n, rootStyle: l, stickyRef: s, stickyStyle: i };
  }
});
function Lr(e, t, n, s, o, a) {
  return u(), d("div", {
    ref: "rootRef",
    class: "nut-sticky",
    style: L(e.rootStyle)
  }, [
    m("div", {
      ref: "stickyRef",
      class: "nut-sticky__box",
      style: L(e.stickyStyle)
    }, [
      D(e.$slots, "default")
    ], 4)
  ], 4);
}
const qn = /* @__PURE__ */ K(Er, [["render", Lr]]), { create: Pr } = W("divider"), Ar = Pr({
  props: {
    contentPosition: {
      type: String,
      default: "center"
    },
    dashed: {
      type: Boolean,
      default: !1
    },
    hairline: {
      type: Boolean,
      default: !0
    },
    direction: {
      type: String,
      default: "horizontal"
    }
  },
  setup(e, t) {
    return { classes: N(() => {
      const s = "nut-divider";
      return e.direction === "horizontal" ? {
        [s]: !0,
        [`${s}-center`]: t.slots.default,
        [`${s}-left`]: e.contentPosition === "left",
        [`${s}-right`]: e.contentPosition === "right",
        [`${s}-dashed`]: e.dashed,
        [`${s}-hairline`]: e.hairline
      } : {
        [s]: !0,
        [`${s}-vertical`]: e.direction === "vertical"
      };
    }) };
  }
});
function zr(e, t, n, s, o, a) {
  return u(), d("view", {
    class: _(e.classes)
  }, [
    e.direction === "horizontal" ? D(e.$slots, "default", { key: 0 }) : C("", !0)
  ], 2);
}
const Vr = /* @__PURE__ */ K(Ar, [["render", zr]]);
function Or(e, t) {
  const n = [], s = (o) => {
    Array.isArray(o) && o.forEach((a) => {
      var l;
      if (Ao(a)) {
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
function Hr(e, t, n) {
  const s = Or(e.subTree.children, n);
  t.sort((o, a) => s.indexOf(o.vnode) - s.indexOf(a.vnode));
}
function Rr(e, t) {
  const n = Po([]), s = Fe(), o = (i) => {
    i.proxy && (n.push(un(i)), Hr(s, n, t));
  }, a = (i) => {
    n.splice(n.indexOf(un(i)), 1);
  }, l = Object.assign;
  return (i) => (Me(
    e,
    l(
      {
        add: o,
        remove: a,
        internalChildren: n
      },
      i
    )
  ), {
    internalChildren: n
  });
}
const { componentName: Fr } = W("grid"), Gn = Symbol("grid"), Wr = {
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
}, Yr = {
  props: Wr,
  setup(e, { slots: t }) {
    Rr(Gn, "NutGridItem")({ props: e });
    const n = N(() => {
      const o = Fr;
      return {
        [o]: !0,
        [`${o}--border`]: e.border && !e.gutter
      };
    }), s = N(() => {
      const o = {};
      return e.gutter && (o.paddingLeft = _e(e.gutter)), o;
    });
    return () => {
      var o;
      return we(
        "view",
        {
          class: n.value,
          style: s.value
        },
        (o = t.default) == null ? void 0 : o.call(t)
      );
    };
  }
}, { create: jr } = W("grid"), Kr = jr(Yr);
function Ur(e) {
  const t = Be(e, null);
  if (t) {
    const n = Fe(), { add: s, remove: o, internalChildren: a } = t;
    s(n), je(() => o(n));
    const l = N(() => a.indexOf(n));
    return {
      parent: t,
      index: l
    };
  }
  return {
    parent: null,
    index: P(-1)
  };
}
const { create: Xr, componentName: gn } = W("grid-item"), qr = Xr({
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
    const n = Ur(Gn);
    if (!n.parent)
      return {};
    const s = n.index, o = n.parent.props, a = N(() => ({
      [gn]: !0
    })), l = N(() => {
      const f = {
        flexBasis: `${100 / +o.columnNum}%`
      };
      return o.square ? f.paddingTop = `${100 / +o.columnNum}%` : o.gutter && (f.paddingRight = _e(o.gutter), s.value >= +o.columnNum && (f.marginTop = _e(o.gutter))), f;
    }), i = N(() => {
      const f = `${gn}__content`;
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
    }), r = Jt();
    return {
      rootClass: a,
      rootStyle: l,
      contentClass: i,
      handleClick: (f) => {
        t("click", f), e.to && r ? r[e.replace ? "replace" : "push"](e.to) : e.url && (e.replace ? location.replace(e.url) : location.href = e.url);
      }
    };
  }
}), Gr = { class: "nut-grid-item__text" };
function Zr(e, t, n, s, o, a) {
  return u(), d("view", {
    class: _(e.rootClass),
    style: L(e.rootStyle),
    onClick: t[0] || (t[0] = (...l) => e.handleClick && e.handleClick(...l))
  }, [
    m("view", {
      class: _(e.contentClass)
    }, [
      D(e.$slots, "default"),
      m("view", Gr, [
        e.text ? (u(), d(ee, { key: 0 }, [
          ge(B(e.text), 1)
        ], 64)) : D(e.$slots, "text", { key: 1 })
      ])
    ], 2)
  ], 6);
}
const Jr = /* @__PURE__ */ K(qr, [["render", Zr]]), { create: Qr, componentName: Je } = W("space"), xr = Qr({
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
      const y = {};
      if (!e.gutter)
        return y;
      const g = `${n(Array.isArray(e.gutter) ? e.gutter[0] : e.gutter)}`, v = `${n(Array.isArray(e.gutter) ? e.gutter[1] : e.gutter)}`;
      return f ? e.wrap ? { marginBottom: v } : {} : (e.direction === "horizontal" && (y.marginRight = g), (e.direction === "vertical" || e.wrap) && (y.marginBottom = v), y);
    }, o = (f = []) => {
      const y = [];
      return f.forEach((g) => {
        Array.isArray(g) ? y.push(...g) : g.type === ee ? y.push(...o(g.children)) : y.push(g);
      }), y.filter(
        (g) => {
          var v;
          return !(g && (g.type === zo || g.type === ee && ((v = g.children) == null ? void 0 : v.length) === 0 || g.type === Vo && g.children.trim() === ""));
        }
      );
    }, { direction: a, wrap: l, fill: i, justify: r, align: p } = e;
    return () => {
      var g;
      const f = o((g = t.default) == null ? void 0 : g.call(t)), y = () => f.map((v, b) => we(
        "div",
        {
          class: `${Je}-item`,
          style: s(b === f.length - 1)
        },
        v
      ));
      return we(
        "div",
        {
          class: [
            Je,
            a && `${Je}-${a}`,
            p && `${Je}-align-${p}`,
            r && `${Je}-justify-${r}`,
            l && `${Je}-wrap`,
            i && `${Je}-fill`
          ]
        },
        y()
      );
    };
  }
}), { componentName: eu, create: tu } = W("navbar"), nu = tu({
  components: { Left: qt },
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
    const { border: n, fixed: s, safeAreaInsetTop: o, placeholder: a } = me(e), l = P("auto"), i = P(), r = N(() => {
      const k = eu;
      return {
        [k]: !0,
        [`${k}--border`]: n.value,
        [`${k}--fixed`]: s.value,
        [`${k}--safe-area-inset-top`]: o.value
      };
    }), p = N(() => s.value && a.value ? {
      height: l.value
    } : {}), f = () => {
      if (i.value) {
        const k = i.value.getBoundingClientRect();
        l.value = `${k.height}px`;
      }
    };
    return ve(() => {
      s.value && a.value && Te(() => {
        f();
      });
    }), {
      navbarRef: i,
      rootStyle: p,
      classes: r,
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
}), ou = {
  key: 1,
  class: "nut-navbar__text"
}, lu = { class: "nut-navbar__title" }, su = {
  key: 0,
  class: "nut-navbar__text"
};
function au(e, t, n, s, o, a) {
  const l = j("Left");
  return u(), d("view", {
    class: "nut-navbar--placeholder",
    style: L(e.rootStyle)
  }, [
    m("view", {
      ref: "navbarRef",
      class: _(e.classes),
      style: L({ zIndex: e.zIndex })
    }, [
      m("view", {
        class: "nut-navbar__left",
        onClick: t[0] || (t[0] = (...i) => e.handleLeft && e.handleLeft(...i))
      }, [
        e.leftShow ? D(e.$slots, "left-show", { key: 0 }, () => [
          le(l, {
            height: "12px",
            color: "#979797"
          })
        ]) : C("", !0),
        e.leftText ? (u(), d("view", ou, B(e.leftText), 1)) : C("", !0),
        D(e.$slots, "left")
      ]),
      m("view", lu, [
        e.title ? (u(), d("view", {
          key: 0,
          class: "title",
          onClick: t[1] || (t[1] = (...i) => e.handleCenter && e.handleCenter(...i))
        }, B(e.title), 1)) : C("", !0),
        e.titleIcon ? (u(), d("view", {
          key: 1,
          class: "icon",
          onClick: t[3] || (t[3] = (...i) => e.handleCenterIcon && e.handleCenterIcon(...i))
        }, [
          D(e.$slots, "title-icon", {
            onClick: t[2] || (t[2] = (...i) => e.handleCenterIcon && e.handleCenterIcon(...i))
          })
        ])) : C("", !0),
        D(e.$slots, "content")
      ]),
      m("view", {
        class: "nut-navbar__right",
        onClick: t[4] || (t[4] = (...i) => e.handleRight && e.handleRight(...i))
      }, [
        e.desc ? (u(), d("view", su, B(e.desc), 1)) : C("", !0),
        D(e.$slots, "right")
      ])
    ], 6)
  ], 4);
}
const iu = /* @__PURE__ */ K(nu, [["render", au]]), ke = (e = "") => (t, ...n) => {
  e = e.toLocaleLowerCase();
  const s = Ln.languages();
  let o = t;
  e && e.startsWith("nut") && (o = `${e.slice(3)}.${t}`);
  const a = zt(s, o) || zt(s, t);
  return It(a) ? a(...n) : a;
}, { create: ru } = W("fixed-nav"), uu = "NutFixedNav", cu = ru({
  components: {
    NutOverlay: vt,
    Left: qt
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
    const n = ke(uu), s = N(() => ({
      ["nut-fixed-nav"]: !0,
      active: e.visible,
      [e.type]: !0
    })), o = P(-1);
    return { classes: s, updateValue: (i = !e.visible) => {
      t("update:visible", i);
    }, selected: (i, r) => {
      t("selected", {
        item: i,
        event: r
      }), o.value = i.id;
    }, translate: n, current: o };
  }
}), du = { class: "nut-fixed-nav__list" }, fu = ["onClick"], pu = ["src"], mu = { class: "span" }, hu = {
  key: 0,
  class: "b"
}, gu = { class: "text" };
function yu(e, t, n, s, o, a) {
  const l = j("nut-overlay"), i = j("Left");
  return u(), d("view", {
    class: _(e.classes),
    style: L(e.position)
  }, [
    e.overlay ? (u(), x(l, {
      key: 0,
      visible: e.visible,
      "z-index": 200,
      onClick: t[0] || (t[0] = (r) => e.updateValue(!1))
    }, null, 8, ["visible"])) : C("", !0),
    D(e.$slots, "list", {}, () => [
      m("view", du, [
        (u(!0), d(ee, null, re(e.navList, (r, p) => (u(), d("view", {
          key: r.id || p,
          class: _(["nut-fixed-nav__list-item", { active: r.id == e.current }]),
          onClick: (f) => e.selected(r, f)
        }, [
          m("img", {
            src: r.icon
          }, null, 8, pu),
          m("view", mu, B(r.text), 1),
          r.num ? (u(), d("view", hu, B(r.num), 1)) : C("", !0)
        ], 10, fu))), 128))
      ])
    ]),
    m("div", {
      class: "nut-fixed-nav__btn",
      onClick: t[1] || (t[1] = (r) => e.updateValue())
    }, [
      D(e.$slots, "btn", {}, () => [
        le(i, { color: "#fff" }),
        m("view", gu, B(e.visible ? e.activeText || e.translate("activeText") : e.unActiveText || e.translate("unActiveText")), 1)
      ])
    ])
  ], 6);
}
const vu = /* @__PURE__ */ K(cu, [["render", yu]]), Zn = Symbol("nut-menu"), { componentName: $u, create: bu } = W("menu"), ku = bu({
  components: {
    RectUp: Ra,
    RectDown: Aa
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
    const t = P(), n = P(0), s = P(!1), { children: o, linkChildren: a } = Rn(Zn), l = N(() => o.some((v) => v.state.showWrapper)), i = N(() => ({
      [$u]: !0,
      "scroll-fixed": s.value
    })), r = () => {
      if (t.value) {
        const v = Oe(t);
        e.direction === "down" ? n.value = v.bottom : n.value = window.innerHeight - v.top;
      }
    };
    a({ props: e, offset: n });
    const p = (v) => {
      o.forEach((b, k) => {
        k === v ? (r(), b.toggle()) : b.state.showPopup && b.toggle(!1, { immediate: !0 });
      });
    }, f = (v) => Math.max(0, "scrollTop" in v ? v.scrollTop : v.pageYOffset), y = () => {
      const { scrollFixed: v } = e, b = f(window);
      s.value = b > (typeof v == "boolean" ? 30 : Number(v));
    }, g = (v) => {
      let b = "";
      const { titleClass: k } = e;
      return v && (b += "active"), k && (b += ` ${k}`), b;
    };
    return ve(() => {
      const { scrollFixed: v } = e;
      v && window.addEventListener("scroll", y);
    }), je(() => {
      const { scrollFixed: v } = e;
      v && window.removeEventListener("scroll", y);
    }), {
      toggleItem: p,
      children: o,
      opened: l,
      classes: i,
      barRef: t,
      getClasses: g
    };
  }
}), wu = ["onClick"], Su = { class: "nut-menu__title-text" }, Cu = { class: "nut-menu__title-icon" };
function Tu(e, t, n, s, o, a) {
  const l = j("RectUp"), i = j("RectDown");
  return u(), d("view", {
    class: _(e.classes)
  }, [
    m("view", {
      ref: "barRef",
      class: _(["nut-menu__bar", { opened: e.opened }])
    }, [
      (u(!0), d(ee, null, re(e.children, (r, p) => (u(), d("view", {
        key: p,
        class: _(["nut-menu__item", { disabled: r.disabled, active: r.state.showPopup }]),
        style: L({ color: r.state.showPopup ? e.activeColor : "" }),
        onClick: (f) => !r.disabled && e.toggleItem(p)
      }, [
        m("view", {
          class: _(["nut-menu__title", e.getClasses(r.state.showPopup)])
        }, [
          m("view", Su, B(r.renderTitle()), 1),
          m("span", Cu, [
            D(e.$slots, "icon", {}, () => [
              e.direction === "up" ? (u(), x(l, { key: 0 })) : (u(), x(i, { key: 1 }))
            ])
          ])
        ], 2)
      ], 14, wu))), 128))
    ], 2),
    D(e.$slots, "default")
  ], 2);
}
const Nu = /* @__PURE__ */ K(ku, [["render", Tu]]), { create: Du } = W("menu-item"), Iu = Du({
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
    Check: Pn
  },
  emits: ["update:modelValue", "change", "open", "close"],
  setup(e, { emit: t }) {
    const n = ue({
      showPopup: !1,
      showWrapper: !1
    }), { parent: s } = Fn(Zn), o = N(() => s.props.direction === "down" ? {
      top: s.offset.value + "px"
    } : {
      bottom: s.offset.value + "px"
    }), a = N(() => {
      const y = { height: s.offset.value + "px" };
      return s.props.direction === "down" ? ce(G({}, y), { top: "0px" }) : ce(G({}, y), { bottom: "0px" });
    });
    return {
      style: o,
      placeholderElementStyle: a,
      renderTitle: () => {
        var g;
        if (e.title)
          return e.title;
        const y = (g = e.options) == null ? void 0 : g.find((v) => v.value === e.modelValue);
        return y ? y.text : "";
      },
      state: n,
      parent: s,
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
}), _u = { class: "nut-menu-item__content nut-menu-item__overflow" }, Bu = ["onClick"];
function Mu(e, t, n, s, o, a) {
  const l = j("Check"), i = j("nut-popup");
  return Ce((u(), d("view", {
    class: "nut-menu-item",
    style: L(e.style)
  }, [
    Ce(m("div", {
      class: "nut-menu-item-placeholder-element",
      style: L(e.placeholderElementStyle),
      onClick: t[0] || (t[0] = (...r) => e.handleClickOutside && e.handleClickOutside(...r))
    }, null, 4), [
      [De, e.state.showPopup]
    ]),
    le(i, pt(e.$attrs, {
      visible: e.state.showPopup,
      "onUpdate:visible": t[1] || (t[1] = (r) => e.state.showPopup = r),
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
        m("view", _u, [
          (u(!0), d(ee, null, re(e.options, (r, p) => (u(), d("view", {
            key: p,
            class: _(["nut-menu-item__option", [{ active: r.value === e.modelValue }]]),
            style: L({ "flex-basis": 100 / e.cols + "%" }),
            onClick: (f) => e.onClick(r)
          }, [
            r.value === e.modelValue ? (u(), d("span", {
              key: 0,
              class: _(["nut-menu-item__span", [r.value === e.modelValue ? e.activeTitleClass : e.inactiveTitleClass]])
            }, [
              D(e.$slots, "icon", {}, () => [
                le(l, pt(e.$attrs, {
                  color: e.parent.props.activeColor
                }), null, 16, ["color"])
              ])
            ], 2)) : C("", !0),
            m("view", {
              class: _([r.value === e.modelValue ? e.activeTitleClass : e.inactiveTitleClass]),
              style: L({ color: r.value === e.modelValue ? e.parent.props.activeColor : "" })
            }, B(r.text), 7)
          ], 14, Bu))), 128)),
          D(e.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["visible", "position", "duration", "overlay", "lock-scroll", "close-on-click-overlay", "onClosed"])
  ], 4)), [
    [De, e.state.showWrapper]
  ]);
}
const Eu = /* @__PURE__ */ K(Iu, [["render", Mu]]), Jn = Symbol("nut-tabbar"), { create: Lu } = W("tabbar"), Pu = Lu({
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
    const { bottom: n, placeholder: s } = me(e), o = P(), a = ue({
      val: e.modelValue,
      children: []
    }), l = P(null);
    function i(p, f) {
      t("update:modelValue", f), r.modelValue = f, t("tabSwitch", r.children[p], f);
    }
    const r = ue({
      children: a.children,
      modelValue: a.val,
      unactiveColor: e.unactiveColor,
      activeColor: e.activeColor,
      changeIndex: i
    });
    return Me(Jn, r), Q(
      () => e.modelValue,
      (p) => {
        r.modelValue = p;
      }
    ), ve(() => {
      n.value && s.value && Te(() => {
        var p;
        o.value = (p = l == null ? void 0 : l.value) == null ? void 0 : p.getBoundingClientRect().height;
      });
    }), {
      changeIndex: i,
      nutTabbar: l,
      height: o
    };
  }
});
function Au(e, t, n, s, o, a) {
  return u(), d("div", {
    class: _({ "nut-tabbar__placeholder": e.bottom && e.placeholder }),
    style: L({ height: e.height + "px" })
  }, [
    m("view", {
      ref: "nutTabbar",
      class: _(["nut-tabbar", { "nut-tabbar-bottom": e.bottom, "nut-tabbar-safebottom": e.safeAreaInsetBottom }])
    }, [
      D(e.$slots, "default")
    ], 2)
  ], 6);
}
const zu = /* @__PURE__ */ K(Pu, [["render", Au]]), { create: Vu } = W("badge"), Ou = Vu({
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
    const t = ue({}), n = N(() => ({
      top: `${e.top}px`,
      right: `${e.right}px`,
      zIndex: e.zIndex,
      background: e.color
    })), s = N(() => {
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
}), Hu = { class: "nut-badge" }, Ru = ["textContent"];
function Fu(e, t, n, s, o, a) {
  return u(), d("view", Hu, [
    Ce(m("view", {
      class: "nut-badge__icon",
      style: L(e.stl)
    }, [
      D(e.$slots, "icon")
    ], 4), [
      [De, !e.hidden && !e.dot && e.$slots.icon]
    ]),
    D(e.$slots, "default"),
    Ce(m("view", {
      class: _(["nut-badge__content nut-badge__content--sup", { "nut-badge__content--dot": e.dot, "nut-badge__content--bubble": !e.dot && e.bubble }]),
      style: L(e.stl),
      textContent: B(e.content)
    }, null, 14, Ru), [
      [De, !e.hidden && (e.content || e.dot)]
    ])
  ]);
}
const Qn = /* @__PURE__ */ K(Ou, [["render", Fu]]), { create: Wu } = W("tabbar-item"), Yu = Wu({
  components: { NutBadge: Qn },
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
    const n = (p) => t[p], s = Be(Jn), o = ue({
      unactiveColor: s.unactiveColor,
      // 未选中的颜色
      activeColor: s.activeColor,
      // 选中的颜色
      index: 0
    }), a = Jt();
    ((p) => {
      var f;
      if (p.proxy) {
        s.children.push(p.proxy);
        const y = s.children.indexOf(p.proxy);
        o.index = (f = e.name) != null ? f : y;
      }
    })(Fe());
    const i = N(() => o.index === s.modelValue);
    function r() {
      var g, v, b;
      let p = (g = e.name) != null ? g : o.index, f = null;
      e.name && (f = s.children.findIndex((k) => k.name == p)), s.changeIndex(f != null ? f : p, o.index);
      let y = f != null ? f : p;
      if ((v = s.children[y]) != null && v.href) {
        window.location.href = s.children[y].href;
        return;
      }
      if ((b = s.children[y]) != null && b.to) {
        let k = s.children[y].to;
        k && a ? a.push(k) : location.replace(k);
      }
    }
    return {
      state: o,
      active: i,
      renderIcon: st,
      isHaveSlot: n,
      change: r
    };
  }
}), ju = { class: "nut-tabbar-item_icon-box" }, Ku = {
  key: 0,
  class: "nut-tabbar-item_icon-box_icon"
}, Uu = { key: 1 }, Xu = { key: 0 };
function qu(e, t, n, s, o, a) {
  const l = j("nut-badge");
  return u(), d("div", {
    class: _(["nut-tabbar-item", { "nut-tabbar-item__icon--unactive": !e.active }]),
    style: L({
      color: e.active ? e.state.activeColor : e.state.unactiveColor
    }),
    onClick: t[0] || (t[0] = (i) => e.change())
  }, [
    le(l, Oo(Ho(e.$attrs)), {
      default: te(() => [
        m("view", ju, [
          e.isHaveSlot("icon") ? (u(), d("div", Ku, [
            D(e.$slots, "icon", { active: e.active })
          ])) : C("", !0),
          e.icon && !e.isHaveSlot("icon") ? (u(), d("view", Uu, [
            (u(), x(Ae(e.renderIcon(e.icon)), { class: "nut-popover-item-img" }))
          ])) : C("", !0),
          m("view", {
            class: _([
              "nut-tabbar-item_icon-box_nav-word",
              { "nut-tabbar-item_icon-box_big-word": !e.icon && !e.isHaveSlot("icon") }
            ])
          }, [
            D(e.$slots, "default", {}, () => [
              e.tabTitle ? (u(), d("view", Xu, B(e.tabTitle), 1)) : C("", !0)
            ])
          ], 2)
        ])
      ]),
      _: 3
    }, 16)
  ], 6);
}
const Gu = /* @__PURE__ */ K(Yu, [["render", qu]]), { create: Zu } = W("elevator"), Ju = Zu({
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
    const s = P(null), o = ue({
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
    }), a = N(() => s.value.clientHeight), l = (c, $) => c.getAttribute("data-" + $), i = (c) => {
      Te(() => {
        !o.listGroup.includes(c) && c != null && o.listGroup.push(c);
      });
    }, r = () => {
      let c = 0;
      o.listHeight.push(c);
      for (let $ = 0; $ < o.listGroup.length; $++) {
        let h = o.listGroup[$];
        c += Math.floor(h.clientHeight), o.listHeight.push(c);
      }
    }, p = (c) => {
      !c && c !== 0 || (c < 0 && (c = 0), c > o.listHeight.length - 2 && (c = o.listHeight.length - 2), o.codeIndex = c, s.value.scrollTo(0, o.listHeight[c]));
    }, f = (c) => {
      o.scrollStart = !0;
      let $ = l(c.target, "index"), h = c.touches[0];
      o.touchState.y1 = h.pageY, o.anchorIndex = +$, o.codeIndex = +$, p(+$);
    }, y = (c) => {
      let $ = c.touches[0];
      o.touchState.y2 = $.pageY;
      let h = (o.touchState.y2 - o.touchState.y1) / e.spaceHeight | 0;
      o.codeIndex = o.anchorIndex + h, p(o.codeIndex);
    }, g = () => {
      o.scrollStart = !1;
    }, v = (c, $) => {
      t("clickItem", c, $), o.currentData = $, o.currentKey = c;
    }, b = (c) => {
      t("clickIndex", c);
    }, k = (c) => {
      let h = c.target.scrollTop;
      const w = o.listHeight;
      o.scrollY = h;
      for (let I = 0; I < w.length - 1; I++) {
        let T = w[I], Y = w[I + 1];
        if (o.scrollY >= T && o.scrollY < Y) {
          o.currentIndex = I, o.diff = Y - o.scrollY;
          return;
        }
      }
      o.currentIndex = w.length - 2;
    };
    return ve(() => {
      s.value && s.value.addEventListener("scroll", k);
    }), n({
      scrollTo: p
    }), Q(
      () => o.listGroup.length,
      () => {
        o.listHeight = [], Te(r);
      }
    ), Q(
      () => o.diff,
      (c) => {
        const $ = o.listHeight;
        let h = c > 0 && c < e.titleHeight ? c - e.titleHeight : 0;
        o.scrollY + a.value === $[$.length - 1] && h !== 0 && (h = 0), o.fixedTop !== h && (o.fixedTop = h);
      }
    ), Q(
      () => o.currentIndex,
      (c) => {
        t("change", c);
      }
    ), ce(G({}, me(o)), {
      clientHeight: a,
      setListGroup: i,
      listview: s,
      touchStart: f,
      touchMove: y,
      touchEnd: g,
      handleClickItem: v,
      handleClickIndex: b
    });
  }
}), Qu = { class: "nut-elevator" }, xu = { class: "nut-elevator__list__item__code" }, ec = ["onClick"], tc = ["innerHTML"], nc = { class: "nut-elevator__list__fixed" }, oc = { class: "nut-elevator__list__fixed-title" }, lc = { class: "nut-elevator__bars__inner" }, sc = ["data-index", "onClick"];
function ac(e, t, n, s, o, a) {
  var l, i;
  return u(), d("view", Qu, [
    m("view", {
      ref: "listview",
      class: "nut-elevator__list",
      style: L({ height: isNaN(+e.height) ? e.height : `${e.height}px` })
    }, [
      (u(!0), d(ee, null, re(e.indexList, (r) => (u(), d("view", {
        key: r[e.acceptKey],
        ref_for: !0,
        ref: e.setListGroup,
        class: "nut-elevator__list__item"
      }, [
        m("view", xu, B(r[e.acceptKey]), 1),
        (u(!0), d(ee, null, re(r.list, (p) => (u(), d("view", {
          key: p.id,
          class: _(["nut-elevator__list__item__name", {
            "nut-elevator__list__item__name--highcolor": e.currentData.id === p.id && e.currentKey === r[e.acceptKey]
          }]),
          onClick: (f) => e.handleClickItem(r[e.acceptKey], p)
        }, [
          e.$slots.default ? D(e.$slots, "default", {
            key: 1,
            item: p
          }) : (u(), d("span", {
            key: 0,
            innerHTML: p.name
          }, null, 8, tc))
        ], 10, ec))), 128))
      ]))), 128))
    ], 4),
    Ce(m("view", nc, [
      m("view", oc, B((i = (l = e.indexList) == null ? void 0 : l[e.currentIndex]) == null ? void 0 : i[e.acceptKey]), 1)
    ], 512), [
      [De, e.scrollY > 0 && e.isSticky]
    ]),
    e.indexList.length ? Ce((u(), d("view", {
      key: 0,
      class: "nut-elevator__code--current"
    }, B(e.indexList[e.codeIndex][e.acceptKey]), 513)), [
      [De, e.scrollStart]
    ]) : C("", !0),
    m("view", {
      class: "nut-elevator__bars",
      onTouchstart: t[0] || (t[0] = (...r) => e.touchStart && e.touchStart(...r)),
      onTouchmove: t[1] || (t[1] = Ne((...r) => e.touchMove && e.touchMove(...r), ["stop", "prevent"])),
      onTouchend: t[2] || (t[2] = (...r) => e.touchEnd && e.touchEnd(...r))
    }, [
      m("view", lc, [
        (u(!0), d(ee, null, re(e.indexList, (r, p) => (u(), d("view", {
          key: r[e.acceptKey],
          class: _(["nut-elevator__bars__inner__item", { active: r[e.acceptKey] === e.indexList[e.currentIndex][e.acceptKey] }]),
          "data-index": p,
          onClick: (f) => e.handleClickIndex(r[e.acceptKey])
        }, B(r[e.acceptKey]), 11, sc))), 128))
      ])
    ], 32)
  ]);
}
const xn = /* @__PURE__ */ K(Ju, [["render", ac]]), { create: ic } = W("pagination"), rc = "NutPagination", uc = ic({
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
    const n = ke(rc), { modelValue: s, mode: o, showPageSize: a, forceEllipses: l } = me(e), i = N(() => {
      const { pageCount: y, totalItems: g, itemsPerPage: v } = me(e), b = +y.value || Math.ceil(+g.value / +v.value);
      return Math.max(1, b);
    }), r = (y, g) => {
      y > i.value || y < 1 || (y != s.value && t("update:modelValue", y), g && t("change", y));
    }, p = (y, g, v = !1) => ({ number: y, text: g, active: v }), f = N(() => {
      if (o.value == "simple")
        return;
      let y = [];
      const g = i.value, v = +a.value;
      let b = 1, k = g;
      const c = g > v;
      c && (b = Math.max(s.value - Math.floor(v / 2), 1), k = b + +v - 1, k > g && (k = g, b = k - +v + 1));
      for (var $ = b; $ <= k; $++) {
        const h = p($, $, s.value == $);
        y.push(h);
      }
      if (c && v > 0 && l.value) {
        if (b > 1) {
          const h = p(b - 1, "...");
          y.unshift(h);
        }
        if (k < g) {
          const h = p(k + 1, "...");
          y.push(h);
        }
      }
      return y;
    });
    return Ft(() => {
      r(s.value, !1);
    }), {
      modelValue: s,
      select: r,
      countRef: i,
      mode: o,
      pages: f,
      forceEllipses: l,
      translate: n
    };
  }
}), cc = { class: "nut-pagination" }, dc = {
  key: 0,
  class: "nut-pagination-contain"
}, fc = ["onClick"], pc = {
  key: 1,
  class: "nut-pagination-contain"
}, mc = { class: "nut-pagination-simple" };
function hc(e, t, n, s, o, a) {
  return u(), d("view", cc, [
    m("view", {
      class: _(["nut-pagination-prev", e.mode == "multi" ? "" : "simple-border", e.modelValue == 1 ? "disabled" : ""]),
      onClick: t[0] || (t[0] = (l) => e.select(e.modelValue - 1, !0))
    }, [
      D(e.$slots, "prev-text", {}, () => [
        ge(B(e.prevText || e.translate("prev")), 1)
      ])
    ], 2),
    e.mode == "multi" ? (u(), d("view", dc, [
      (u(!0), d(ee, null, re(e.pages, (l, i) => (u(), d("view", {
        key: i + "pagination",
        class: _(["nut-pagination-item", l.active ? "active" : ""]),
        onClick: (r) => e.select(l.number, !0)
      }, [
        D(e.$slots, "page", { item: l }, () => [
          ge(B(l.text), 1)
        ])
      ], 10, fc))), 128))
    ])) : C("", !0),
    e.mode == "simple" ? (u(), d("view", pc, [
      m("view", mc, B(e.modelValue) + "/" + B(e.countRef), 1)
    ])) : C("", !0),
    m("view", {
      class: _(["nut-pagination-next", e.modelValue >= e.countRef ? "disabled" : ""]),
      onClick: t[1] || (t[1] = (l) => e.select(e.modelValue + 1, !0))
    }, [
      D(e.$slots, "next-text", {}, () => [
        ge(B(e.nextText || e.translate("next")), 1)
      ])
    ], 2)
  ]);
}
const gc = /* @__PURE__ */ K(uc, [["render", hc]]), St = window, yc = typeof window != "undefined";
function vc() {
  return typeof St != "undefined" ? St.requestAnimationFrame || St.webkitRequestAnimationFrame || function(e) {
    St.setTimeout(e, 1e3 / 60);
  } : function(e) {
    setTimeout(e, 1e3 / 60);
  };
}
function $c(e) {
  yc ? cancelAnimationFrame(e) : clearTimeout(e);
}
const Ve = vc(), yn = 10;
function bc(e, t) {
  return e > t && e > yn ? "horizontal" : t > e && t > yn ? "vertical" : "";
}
function Ge() {
  const e = P(0), t = P(0), n = P(0), s = P(0), o = P(0), a = P(0), l = P(0), i = P(0), r = P(""), p = () => r.value === "vertical", f = () => r.value === "horizontal", y = () => {
    o.value = 0, a.value = 0, l.value = 0, i.value = 0, r.value = "";
  };
  return {
    move: (b) => {
      const k = b.touches[0];
      o.value = k.clientX - e.value, a.value = k.clientY - t.value, n.value = k.clientX, s.value = k.clientY, l.value = Math.abs(o.value), i.value = Math.abs(a.value), r.value || (r.value = bc(l.value, i.value));
    },
    start: (b) => {
      y(), e.value = b.touches[0].clientX, t.value = b.touches[0].clientY;
    },
    reset: y,
    startX: e,
    startY: t,
    moveX: n,
    moveY: s,
    deltaX: o,
    deltaY: a,
    offsetX: l,
    offsetY: i,
    direction: r,
    isVertical: p,
    isHorizontal: f
  };
}
const kc = (e, t, n, s) => {
  const o = P(), a = P({ width: 0, height: 0 }), l = () => Ue(void 0, null, function* () {
    var g, v;
    n && n.getEnv() !== n.ENV_TYPE.WEB ? s(o).then(
      (b) => {
        a.value.width = b.width || 0, a.value.height = b.height || 0;
      },
      () => {
      }
    ) : (a.value.width = ((g = o.value) == null ? void 0 : g.clientWidth) || 0, a.value.height = ((v = o.value) == null ? void 0 : v.clientHeight) || 0);
  });
  ve(() => {
    setTimeout(() => {
      l();
    }, 100);
  });
  const i = ue({
    offset: 0,
    moving: !1
  }), r = Ge();
  let p = "";
  const f = (g, v) => {
    var k;
    let b = g;
    switch (e.direction == "horizontal" ? (p = g > 0 ? "right" : "left", b = Math.abs(b) / a.value.width * 100) : (p = v > 0 ? "bottom" : "top", b = v, b = Math.abs(b) / ((k = a.value) == null ? void 0 : k.height) * 100), b > 85 && (b = 85), p) {
      case "left":
      case "top":
        t.isEnd() && (b = 0, i.moving = !1);
        break;
      case "right":
      case "bottom":
        b = -b, t.isBegin() && (b = 0, i.moving = !1);
        break;
    }
    i.offset = b;
  };
  return { touchMethods: {
    onTouchStart(g) {
      e.swipeable && r.start(g);
    },
    onTouchMove(g) {
      e.swipeable && (r.move(g), i.moving = !0, f(r.deltaX.value, r.deltaY.value), e.direction == "horizontal" && r.isHorizontal() && (g.preventDefault(), g.stopPropagation()), e.direction == "vertical" && r.isVertical() && (g.preventDefault(), g.stopPropagation()));
    },
    onTouchEnd() {
      if (i.moving)
        switch (i.moving = !1, p) {
          case "left":
          case "top":
            i.offset > 35 && t.next();
            break;
          case "right":
          case "bottom":
            i.offset < -35 && t.prev();
            break;
        }
    }
  }, touchState: i, tabsContentRef: o };
};
class wc {
  constructor() {
    z(this, "title", "");
    z(this, "titleSlot");
    z(this, "paneKey", "");
    z(this, "disabled", !1);
  }
}
const { create: Sc } = W("tabs"), Cc = Sc({
  components: { NutSticky: qn, JoySmile: Ns },
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
    const s = P(null);
    let o;
    Me("tabsOpiton", {
      activeKey: N(() => e.modelValue || "0"),
      autoHeight: N(() => e.autoHeight),
      animatedTime: N(() => e.animatedTime)
    });
    const a = P([]), l = (S) => {
      S.forEach((E, V) => {
        var Z, F, oe, q, H, ne, U, ae, de;
        let X = E.type;
        if (X = X.name || X, X == "NutTabPane") {
          let fe = new wc();
          if ((Z = E.props) != null && Z.title || (F = E.props) != null && F["pane-key"] || (oe = E.props) != null && oe.paneKey) {
            let be = Dt((q = E.props) == null ? void 0 : q["pane-key"]), Le = be == "number" || be == "string" ? String((H = E.props) == null ? void 0 : H["pane-key"]) : null, O = Dt((ne = E.props) == null ? void 0 : ne.paneKey), J = O == "number" || O == "string" ? String((U = E.props) == null ? void 0 : U.paneKey) : null;
            fe.title = (ae = E.props) == null ? void 0 : ae.title, fe.paneKey = Le || J || String(V), fe.disabled = (de = E.props) == null ? void 0 : de.disabled;
          }
          a.value.push(fe);
        } else {
          if (E.children == " ")
            return;
          l(E.children);
        }
      });
    }, i = P(e.modelValue || 0), r = (S) => {
      let E = a.value.findIndex((V) => V.paneKey == S);
      a.value.length == 0 || E == -1 || (i.value = E);
    }, p = N(() => e.titleScroll && e.direction === "vertical"), f = P(), y = P([]), g = (S) => {
      const E = f.value, V = y.value;
      if (!E || !V || !V[i.value])
        return;
      const X = V[i.value];
      let Z = 0;
      e.direction === "vertical" ? Z = X.offsetTop - E.offsetTop + 10 - (E.offsetHeight - X.offsetHeight) / 2 : Z = X.offsetLeft - (E.offsetWidth - X.offsetWidth) / 2, v(E, Z, S ? 0 : 0.3, e.direction);
    }, v = (S, E, V, X) => {
      let Z = 0;
      const F = X === "horizontal" ? S.scrollLeft : S.scrollTop, oe = V === 0 ? 1 : Math.round(V * 1e3 / 16);
      function q() {
        X === "horizontal" ? S.scrollLeft += (E - F) / oe : S.scrollTop += (E - F) / oe, ++Z < oe && Ve(q);
      }
      q();
    }, b = (S = ((E) => (E = n.default) == null ? void 0 : E.call(n))()) => {
      a.value = [], S = S == null ? void 0 : S.filter((V) => typeof V.children != "string"), S && S.length && l(S), r(e.modelValue), Te(() => {
        g();
      });
    }, k = (S) => {
      o = S.fixed;
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
        if (r(S), g(), o) {
          let E = Oe(s.value).top + c(), V = Math.ceil(E - e.top);
          window.scrollTo({
            top: V,
            behavior: "smooth"
          });
        }
      }
    ), ve(b), gt(b);
    const $ = {
      isBegin: () => i.value == 0,
      isEnd: () => i.value == a.value.length - 1,
      next: () => {
        i.value += 1;
        const S = a.value[i.value].disabled;
        if ($.isEnd() && S) {
          $.prev();
          return;
        }
        if (S && i.value < a.value.length - 1) {
          $.next();
          return;
        }
        $.updateValue(a.value[i.value]);
      },
      prev: () => {
        i.value -= 1;
        const S = a.value[i.value].disabled;
        if ($.isBegin() && S) {
          $.next();
          return;
        }
        if (S && i.value > 0) {
          $.prev();
          return;
        }
        $.updateValue(a.value[i.value]);
      },
      updateValue: (S) => {
        t("update:modelValue", S.paneKey), t("change", S);
      },
      tabChange: (S, E) => {
        t("click", S), !(S.disabled || i.value == E) && (i.value = E, $.updateValue(S));
      },
      setTabItemRef: (S, E) => {
        y.value[E] = S;
      }
    }, { tabsContentRef: h, touchState: w, touchMethods: I } = kc(e, $), T = N(() => {
      let S = i.value * 100;
      w.moving && (S += w.offset);
      let E = {
        transform: e.direction == "horizontal" ? `translate3d(-${S}%, 0, 0)` : `translate3d( 0,-${S}%, 0)`,
        transitionDuration: w.moving ? void 0 : `${e.animatedTime}ms`
      };
      return e.animatedTime == 0 && (E = {}), E;
    }), Y = N(() => ({
      background: e.background
    })), M = N(() => ({
      color: e.type == "smile" ? e.color : "",
      background: e.type == "line" ? e.color : ""
    })), A = N(() => {
      if (!e.titleGutter)
        return {};
      const S = _e(e.titleGutter);
      return e.direction === "vertical" ? { marginTop: S, marginBottom: S } : { marginLeft: S, marginRight: S };
    });
    return G(G({
      navRef: f,
      tabsContentRef: h,
      titles: a,
      contentStyle: T,
      tabsNavStyle: Y,
      titleStyle: A,
      tabsActiveStyle: M,
      container: s,
      getScrollY: p,
      onStickyScroll: k
    }, $), I);
  }
}), Tc = ["onClick"], Nc = ["onClick"];
function Dc(e, t, n, s, o, a) {
  const l = j("JoySmile"), i = j("nut-sticky");
  return u(), d("view", {
    ref: "container",
    class: _(["nut-tabs", [e.direction]])
  }, [
    e.sticky ? (u(), x(i, {
      key: 0,
      top: e.top,
      container: e.container,
      onScroll: e.onStickyScroll
    }, {
      default: te(() => [
        m("view", {
          ref: "navRef",
          class: _(["nut-tabs__titles", {
            "nut-tabs__titles-left": e.align === "left",
            [e.type]: e.type,
            scrollable: e.titleScroll,
            [e.size]: e.size
          }]),
          style: L(e.tabsNavStyle)
        }, [
          e.$slots.titles ? D(e.$slots, "titles", { key: 0 }) : (u(!0), d(ee, { key: 1 }, re(e.titles, (r, p) => (u(), d("view", {
            key: r.paneKey,
            class: _(["nut-tabs__titles-item", {
              "nut-tabs__titles-item-left": e.align === "left",
              active: r.paneKey == e.modelValue,
              disabled: r.disabled
            }]),
            style: L(e.titleStyle),
            onClick: (f) => e.tabChange(r, p)
          }, [
            e.type == "line" ? (u(), d("view", {
              key: 0,
              class: "nut-tabs__titles-item__line",
              style: L(e.tabsActiveStyle)
            }, null, 4)) : C("", !0),
            e.type == "smile" ? (u(), d("view", {
              key: 1,
              class: "nut-tabs__titles-item__smile",
              style: L(e.tabsActiveStyle)
            }, [
              le(l, { color: e.color }, null, 8, ["color"])
            ], 4)) : C("", !0),
            m("view", {
              class: _(["nut-tabs__titles-item__text", { ellipsis: e.ellipsis }])
            }, B(r.title), 3)
          ], 14, Tc))), 128))
        ], 6)
      ]),
      _: 3
    }, 8, ["top", "container", "onScroll"])) : (u(), d("view", {
      key: 1,
      ref: "navRef",
      class: _(["nut-tabs__titles", { "nut-tabs__titles-left": e.align === "left", [e.type]: e.type, scrollable: e.titleScroll, [e.size]: e.size }]),
      style: L(e.tabsNavStyle)
    }, [
      e.$slots.titles ? D(e.$slots, "titles", { key: 0 }) : (u(!0), d(ee, { key: 1 }, re(e.titles, (r, p) => (u(), d("view", {
        key: r.paneKey,
        ref_for: !0,
        ref: (f) => e.setTabItemRef(f, p),
        class: _(["nut-tabs__titles-item", {
          "nut-tabs__titles-item-left": e.align === "left",
          active: r.paneKey == e.modelValue,
          disabled: r.disabled
        }]),
        style: L(e.titleStyle),
        onClick: (f) => e.tabChange(r, p)
      }, [
        e.type == "line" ? (u(), d("view", {
          key: 0,
          class: "nut-tabs__titles-item__line",
          style: L(e.tabsActiveStyle)
        }, null, 4)) : C("", !0),
        e.type == "smile" ? (u(), d("view", {
          key: 1,
          class: "nut-tabs__titles-item__smile",
          style: L(e.tabsActiveStyle)
        }, [
          le(l, { color: e.color }, null, 8, ["color"])
        ], 4)) : C("", !0),
        m("view", {
          class: _(["nut-tabs__titles-item__text", { ellipsis: e.ellipsis }])
        }, B(r.title), 3)
      ], 14, Nc))), 128))
    ], 6)),
    m("view", {
      ref: "tabsContentRef",
      class: "nut-tabs__content",
      style: L(e.contentStyle),
      onTouchstart: t[0] || (t[0] = (...r) => e.onTouchStart && e.onTouchStart(...r)),
      onTouchmove: t[1] || (t[1] = (...r) => e.onTouchMove && e.onTouchMove(...r)),
      onTouchend: t[2] || (t[2] = (...r) => e.onTouchEnd && e.onTouchEnd(...r)),
      onTouchcancel: t[3] || (t[3] = (...r) => e.onTouchEnd && e.onTouchEnd(...r))
    }, [
      D(e.$slots, "default")
    ], 36)
  ], 2);
}
const eo = /* @__PURE__ */ K(Cc, [["render", Dc]]), { create: Ic } = W("tab-pane"), _c = Ic({
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
    const t = Be("tabsOpiton"), n = N(() => ({
      display: t.animatedTime.value == 0 && e.paneKey != t.activeKey.value ? "none" : void 0
    }));
    return ce(G({}, t), {
      paneStyle: n
    });
  }
});
function Bc(e, t, n, s, o, a) {
  return u(), d("view", {
    class: _(["nut-tab-pane", { inactive: e.paneKey != e.activeKey && e.autoHeight }]),
    style: L(e.paneStyle)
  }, [
    D(e.$slots, "default")
  ], 6);
}
const to = /* @__PURE__ */ K(_c, [["render", Bc]]), { create: Mc } = W("indicator"), Ec = Mc({
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
    }), padZero: qe };
  }
}), Lc = {
  key: 0,
  class: "nut-indicator--number"
}, Pc = {
  key: 1,
  class: "nut-indicator--dot"
};
function Ac(e, t, n, s, o, a) {
  return u(), d("view", {
    class: _(e.classes)
  }, [
    (u(!0), d(ee, null, re(e.size, (l) => (u(), d(ee, { key: l }, [
      l === e.current ? (u(), d("view", Lc, B(e.fillZero && e.padZero(l) || l), 1)) : (u(), d("view", Pc))
    ], 64))), 128))
  ], 2);
}
const zc = /* @__PURE__ */ K(Ec, [["render", Ac]]), { create: Vc } = W("side-navbar"), Oc = Vc({
  props: {
    offset: {
      type: [String, Number],
      default: 15
    }
  },
  setup: (e) => {
    const t = P(null), n = ue({
      count: 1,
      observer: null
    }), s = (a, l = 1) => {
      var i;
      for (let r = 0; r < a.length; r++) {
        let p = a[r];
        (i = p == null ? void 0 : p.children) != null && i[0] && (p.children[0].style.paddingLeft = +e.offset * l + "px", p.className.includes("nut-side-navbar-item") || s(Array.from(p.children[1].children), ++n.count));
      }
      n.count--;
    }, o = () => {
      let a = t.value.childNodes;
      a.length && (a = Array.from(a).filter((l) => l.nodeType !== 3).map((l) => l), s(a));
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
    }), ce(G({}, me(n)), {
      list: t
    });
  }
}), Hc = { class: "nut-side-navbar" }, Rc = { class: "nut-side-navbar__content" }, Fc = {
  ref: "list",
  class: "nut-side-navbar__content__list"
};
function Wc(e, t, n, s, o, a) {
  return u(), d("view", Hc, [
    m("view", Rc, [
      m("view", Fc, [
        D(e.$slots, "default")
      ], 512)
    ])
  ]);
}
const Yc = /* @__PURE__ */ K(Oc, [["render", Wc]]), { create: jc } = W("side-navbar-item"), Kc = jc({
  props: {
    title: {
      type: String,
      default: ""
    },
    ikey: {
      type: String,
      default: ""
    }
  },
  emits: ["click"],
  setup: (e, { emit: t }) => ({
    handleClick: () => {
      t("click");
    }
  })
}), Uc = ["ikey"], Xc = { class: "nut-side-navbar-item__title" };
function qc(e, t, n, s, o, a) {
  return u(), d("view", {
    class: "nut-side-navbar-item",
    ikey: e.ikey,
    onClick: t[0] || (t[0] = Ne((...l) => e.handleClick && e.handleClick(...l), ["stop"]))
  }, [
    m("span", Xc, B(e.title), 1)
  ], 8, Uc);
}
const Gc = /* @__PURE__ */ K(Kc, [["render", qc]]), { create: Zc } = W("sub-side-navbar"), Jc = Zc({
  props: {
    title: {
      type: String,
      default: ""
    },
    ikey: {
      type: [String, Number],
      default: ""
    },
    open: {
      type: Boolean,
      default: !0
    }
  },
  components: { ArrowDown2: xo, ArrowUp2: ll },
  emits: ["titleClick"],
  setup: (e, { emit: t }) => {
    const n = ue({
      direction: ""
    }), s = N(() => ({
      height: n.direction ? "0px" : "auto"
    })), o = () => {
      t("titleClick"), n.direction = n.direction ? "" : "up";
    };
    return ve(() => {
      n.direction = e.open ? "" : "up";
    }), ce(G({}, me(n)), {
      style: s,
      handleClick: o
    });
  }
}), Qc = ["ikey"], xc = { class: "nut-sub-side-navbar__title__text" }, ed = { class: "nut-sub-side-navbar__title__icon" };
function td(e, t, n, s, o, a) {
  const l = j("ArrowDown2"), i = j("ArrowUp2");
  return u(), d("view", {
    class: "nut-sub-side-navbar",
    ikey: e.ikey
  }, [
    m("view", {
      class: "nut-sub-side-navbar__title",
      onClick: t[0] || (t[0] = Ne((...r) => e.handleClick && e.handleClick(...r), ["stop"]))
    }, [
      m("span", xc, B(e.title), 1),
      m("span", ed, [
        e.direction ? (u(), x(i, { key: 1 })) : (u(), x(l, { key: 0 }))
      ])
    ]),
    Ce(m("view", {
      class: _(["nut-sub-side-navbar__list", e.direction ? "nutFadeOut" : "nutFadeIn"]),
      style: L(e.style)
    }, [
      D(e.$slots, "default")
    ], 6), [
      [De, !e.direction]
    ])
  ], 8, Qc);
}
const nd = /* @__PURE__ */ K(Jc, [["render", td]]), { componentName: od, create: ld } = W("range"), sd = ld({
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
    const n = P(0);
    let s, o;
    const a = P(), l = P(), i = Ge(), r = N(() => {
      const { marks: F, max: oe, min: q } = e;
      return Object.keys(F).map(parseFloat).sort((U, ae) => U - ae).filter((U) => U >= +q && U <= +oe);
    }), p = N(() => Number(e.max) - Number(e.min)), f = N(() => {
      const F = od;
      return {
        [F]: !0,
        [`${F}-disabled`]: e.disabled,
        [`${F}-vertical`]: e.vertical,
        [`${F}-show-number`]: !e.hiddenRange
      };
    }), y = N(() => {
      const F = "nut-range-container";
      return {
        [F]: !0,
        [`${F}-vertical`]: e.vertical
      };
    }), g = N(() => ({
      background: e.inactiveColor
    })), v = N(() => ({
      borderColor: e.buttonColor
    })), b = (F) => !!e.range && Array.isArray(F), k = () => {
      const { modelValue: F, min: oe } = e;
      return b(F) ? `${(F[1] - F[0]) * 100 / p.value}%` : `${(F - Number(oe)) * 100 / p.value}%`;
    }, c = () => {
      const { modelValue: F, min: oe } = e;
      return b(F) ? `${(F[0] - Number(oe)) * 100 / p.value}%` : "0%";
    }, $ = N(() => e.vertical ? {
      height: k(),
      top: c(),
      background: e.activeColor,
      transition: l.value ? "none" : void 0
    } : {
      width: k(),
      left: c(),
      background: e.activeColor,
      transition: l.value ? "none" : void 0
    }), h = (F) => {
      const oe = "nut-range-mark", { modelValue: q, max: H, min: ne } = e;
      let U = Number(ne), ae = Number(H);
      if (e.range) {
        const [fe, be] = q;
        U = fe, ae = be;
      } else
        ae = q;
      let de = F <= +ae && F >= U;
      return {
        [`${oe}-text`]: !0,
        [`${oe}-text-active`]: de
      };
    }, w = (F) => {
      const { min: oe, vertical: q } = e;
      let H = {
        left: `${(F - Number(oe)) / p.value * 100}%`
      };
      return q && (H = {
        top: `${(F - Number(oe)) / p.value * 100}%`
      }), H;
    }, I = (F) => {
      const { modelValue: oe, max: q, min: H } = e;
      let ne = Number(H), U = Number(q);
      if (e.range) {
        const [fe, be] = oe;
        ne = fe, U = be;
      }
      return {
        background: F <= U && F >= ne ? e.activeColor : e.inactiveColor
      };
    }, T = (F) => {
      const { min: oe, max: q, step: H } = e;
      return F = Math.max(+oe, Math.min(F, +q)), Math.round(F / +H) * +H;
    }, Y = (F, oe) => JSON.stringify(F) === JSON.stringify(oe), M = (F) => F[0] > F[1] ? F.slice(0).reverse() : F, A = (F, oe) => {
      b(F) ? F = M(F).map(T) : F = T(F), Y(F, e.modelValue) || t("update:modelValue", F), oe && !Y(F, s) && t("change", F);
    }, S = (F) => {
      if (e.disabled)
        return;
      const { min: oe, modelValue: q } = e, H = Oe(a);
      let ne = F.clientX - H.left, U = H.width;
      e.vertical && (ne = F.clientY - H.top, U = H.height);
      const ae = Number(oe) + ne / U * p.value;
      if (b(q)) {
        const [de, fe] = q, be = (de + fe) / 2;
        ae <= be ? A([ae, fe], !0) : A([de, ae], !0);
      } else
        A(ae, !0);
    }, E = (F) => {
      e.disabled || (i.start(F), o = e.modelValue, b(o) ? s = o.map(T) : s = T(o), l.value = "start");
    }, V = (F) => {
      if (e.disabled)
        return;
      l.value === "start" && t("dragStart"), i.move(F), l.value = "draging";
      const oe = Oe(a);
      let q = i.deltaX.value, H = oe.width, ne = q / H * p.value;
      e.vertical && (q = i.deltaY.value, H = oe.height, ne = q / H * p.value), b(s) ? o[n.value] = s[n.value] + ne : o = s + ne, A(o);
    }, X = () => {
      e.disabled || (l.value === "draging" && (A(o, !0), t("dragEnd")), l.value = "");
    }, Z = (F) => Ut(e.modelValue) && typeof F == "number" ? e.modelValue[F] : Number(e.modelValue);
    return ce(G({
      root: a,
      classes: f,
      wrapperStyle: g,
      buttonStyle: v,
      onClick: S,
      onTouchStart: E,
      onTouchMove: V,
      onTouchEnd: X
    }, me(e)), {
      barStyle: $,
      curValue: Z,
      buttonIndex: n,
      containerClasses: y,
      markClassName: h,
      marksStyle: w,
      marksList: r,
      tickStyle: I
    });
  }
}), ad = {
  key: 0,
  class: "nut-range-min"
}, id = {
  key: 0,
  class: "nut-range-mark"
}, rd = ["tabindex", "aria-valuemin", "aria-valuenow", "aria-valuemax", "onTouchstart"], ud = {
  key: 0,
  class: "number"
}, cd = ["tabindex", "aria-valuemin", "aria-valuenow", "aria-valuemax"], dd = {
  key: 0,
  class: "number"
}, fd = {
  key: 1,
  class: "nut-range-max"
};
function pd(e, t, n, s, o, a) {
  return u(), d("view", {
    class: _(e.containerClasses)
  }, [
    e.hiddenRange ? C("", !0) : (u(), d("view", ad, B(+e.min), 1)),
    m("view", {
      ref: "root",
      style: L(e.wrapperStyle),
      class: _(e.classes),
      onClick: t[9] || (t[9] = Ne((...l) => e.onClick && e.onClick(...l), ["stop"]))
    }, [
      e.marksList.length > 0 ? (u(), d("view", id, [
        (u(!0), d(ee, null, re(e.marksList, (l) => (u(), d("span", {
          key: l,
          class: _(e.markClassName(l)),
          style: L(e.marksStyle(l))
        }, [
          ge(B(l) + " ", 1),
          m("span", {
            class: "nut-range-tick",
            style: L(e.tickStyle(l))
          }, null, 4)
        ], 6))), 128))
      ])) : C("", !0),
      m("view", {
        class: "nut-range-bar",
        style: L(e.barStyle)
      }, [
        e.range ? (u(), d(ee, { key: 0 }, re([0, 1], (l) => m("view", {
          key: l,
          role: "slider",
          class: _({
            "nut-range-button-wrapper-left": l == 0,
            "nut-range-button-wrapper-right": l == 1
          }),
          tabindex: e.disabled ? -1 : 0,
          "aria-valuemin": +e.min,
          "aria-valuenow": e.curValue(l),
          "aria-valuemax": +e.max,
          "aria-orientation": "horizontal",
          onTouchstart: Ne(
            (i) => {
              typeof l == "number" && (e.buttonIndex = l), e.onTouchStart(i);
            },
            ["stop", "prevent"]
          ),
          onTouchmove: t[0] || (t[0] = Ne((...i) => e.onTouchMove && e.onTouchMove(...i), ["stop", "prevent"])),
          onTouchend: t[1] || (t[1] = Ne((...i) => e.onTouchEnd && e.onTouchEnd(...i), ["stop", "prevent"])),
          onTouchcancel: t[2] || (t[2] = Ne((...i) => e.onTouchEnd && e.onTouchEnd(...i), ["stop", "prevent"])),
          onClick: t[3] || (t[3] = (i) => i.stopPropagation())
        }, [
          e.$slots.button ? D(e.$slots, "button", { key: 0 }) : (u(), d("view", {
            key: 1,
            class: "nut-range-button",
            style: L(e.buttonStyle)
          }, [
            e.hiddenTag ? C("", !0) : (u(), d("view", ud, B(e.curValue(l)), 1))
          ], 4))
        ], 42, rd)), 64)) : (u(), d("view", {
          key: 1,
          role: "slider",
          class: "nut-range-button-wrapper",
          tabindex: e.disabled ? -1 : 0,
          "aria-valuemin": +e.min,
          "aria-valuenow": e.curValue(),
          "aria-valuemax": +e.max,
          "aria-orientation": "horizontal",
          onTouchstart: t[4] || (t[4] = Ne(
            (l) => {
              e.onTouchStart(l);
            },
            ["stop", "prevent"]
          )),
          onTouchmove: t[5] || (t[5] = Ne((...l) => e.onTouchMove && e.onTouchMove(...l), ["stop", "prevent"])),
          onTouchend: t[6] || (t[6] = Ne((...l) => e.onTouchEnd && e.onTouchEnd(...l), ["stop", "prevent"])),
          onTouchcancel: t[7] || (t[7] = Ne((...l) => e.onTouchEnd && e.onTouchEnd(...l), ["stop", "prevent"])),
          onClick: t[8] || (t[8] = (l) => l.stopPropagation())
        }, [
          e.$slots.button ? D(e.$slots, "button", { key: 0 }) : (u(), d("view", {
            key: 1,
            class: "nut-range-button",
            style: L(e.buttonStyle)
          }, [
            e.hiddenTag ? C("", !0) : (u(), d("view", dd, B(e.curValue()), 1))
          ], 4))
        ], 40, cd))
      ], 4)
    ], 6),
    e.hiddenRange ? C("", !0) : (u(), d("view", fd, B(+e.max), 1))
  ], 2);
}
const no = /* @__PURE__ */ K(sd, [["render", pd]]), { create: md } = W("searchbar"), hd = "NutSearchbar", gd = md({
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
      default: () => Xt
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
    const n = ke(hd), s = ue({
      active: !1
    }), o = N(() => ({
      background: e.background
    })), a = N(() => ({
      background: e.inputBackground
    })), l = ($) => {
      let w = $.target.value;
      e.maxLength && w.length > Number(e.maxLength) && (w = w.slice(0, Number(e.maxLength))), t("update:modelValue", w, $), t("change", w, $);
    }, i = P({}), r = ($) => {
      let w = $.target.value;
      s.active = !0, i.value = e.focusStyle, t("focus", w, $);
    }, p = ($) => {
      setTimeout(() => {
        s.active = !1;
      }, 0);
      let w = $.target.value;
      e.maxLength && w.length > Number(e.maxLength) && (w = w.slice(0, Number(e.maxLength))), i.value = {}, t("blur", w, $);
    }, f = ($) => {
      t("update:modelValue", "", $), t("change", "", $), t("clear", "");
    }, y = () => {
      t("search", e.modelValue);
    }, g = ($) => {
      t("clickInput", $);
    }, v = ($) => {
      t("clickLeftIcon", e.modelValue, $);
    }, b = ($) => {
      t("clickRightIcon", e.modelValue, $);
    }, k = N(() => ({
      textAlign: e.inputAlign
    })), c = P(null);
    return ve(() => {
      e.autofocus && c.value.focus();
    }), ce(G({
      renderIcon: st,
      inputsearch: c
    }, me(s)), {
      valueChange: l,
      valueFocus: r,
      valueBlur: p,
      handleClear: f,
      handleSubmit: y,
      searchbarStyle: o,
      inputSearchbarStyle: a,
      focusCss: i,
      translate: n,
      clickInput: g,
      leftIconClick: v,
      rightIconClick: b,
      styleSearchbar: k
    });
  }
}), yd = {
  key: 0,
  class: "nut-searchbar__search-label"
}, vd = {
  key: 1,
  class: "nut-searchbar__search-icon nut-searchbar__left-search-icon"
}, $d = ["type", "maxlength", "placeholder", "value", "disabled", "readonly"], bd = {
  key: 1,
  class: "nut-searchbar__search-icon nut-searchbar__iptright-search-icon"
}, kd = {
  key: 2,
  class: "nut-searchbar__search-icon nut-searchbar__right-search-icon"
};
function wd(e, t, n, s, o, a) {
  return u(), d("view", {
    class: _(["nut-searchbar", { "safe-area-inset-bottom": e.safeAreaInsetBottom }]),
    style: L(e.searchbarStyle)
  }, [
    e.label ? (u(), d("span", yd, B(e.label), 1)) : C("", !0),
    e.$slots.leftout ? (u(), d("view", vd, [
      D(e.$slots, "leftout")
    ])) : C("", !0),
    m("view", {
      class: _(["nut-searchbar__search-input", e.shape]),
      style: L(G(G({}, e.inputSearchbarStyle), e.focusCss))
    }, [
      e.$slots.leftin ? (u(), d("view", {
        key: 0,
        class: "nut-searchbar__search-icon nut-searchbar__iptleft-search-icon",
        onClick: t[0] || (t[0] = (...l) => e.leftIconClick && e.leftIconClick(...l))
      }, [
        D(e.$slots, "leftin")
      ])) : C("", !0),
      m("view", {
        class: _(["nut-searchbar__input-inner", e.$slots.rightin && "nut-searchbar__input-inner-absolute"])
      }, [
        m("form", {
          class: "nut-searchbar__input-form",
          action: "#",
          onSubmit: t[5] || (t[5] = Ne((...l) => e.handleSubmit && e.handleSubmit(...l), ["prevent"]))
        }, [
          m("input", {
            ref: "inputsearch",
            class: _(["nut-searchbar__input-bar", e.clearable && "nut-searchbar__input-bar_clear"]),
            type: e.inputType,
            maxlength: e.maxLength,
            placeholder: e.placeholder || e.translate("placeholder"),
            value: e.modelValue,
            disabled: e.disabled,
            readonly: e.readonly,
            style: L(e.styleSearchbar),
            onClick: t[1] || (t[1] = (...l) => e.clickInput && e.clickInput(...l)),
            onInput: t[2] || (t[2] = (...l) => e.valueChange && e.valueChange(...l)),
            onFocus: t[3] || (t[3] = (...l) => e.valueFocus && e.valueFocus(...l)),
            onBlur: t[4] || (t[4] = (...l) => e.valueBlur && e.valueBlur(...l))
          }, null, 46, $d)
        ], 32)
      ], 2),
      m("view", {
        class: _(["nut-searchbar__input-inner-icon", e.$slots.rightin && "nut-searchbar__input-inner-icon-absolute"])
      }, [
        e.clearable ? Ce((u(), d("view", {
          key: 0,
          class: "nut-searchbar__search-icon nut-searchbar__input-clear",
          onClick: t[6] || (t[6] = (...l) => e.handleClear && e.handleClear(...l))
        }, [
          e.$slots["clear-icon"] ? D(e.$slots, "clear-icon", { key: 0 }) : (u(), x(Ae(e.renderIcon(e.clearIcon)), { key: 1 }))
        ], 512)), [
          [De, String(e.modelValue).length > 0]
        ]) : C("", !0),
        e.$slots.rightin ? (u(), d("view", bd, [
          D(e.$slots, "rightin")
        ])) : C("", !0)
      ], 2)
    ], 6),
    e.$slots.rightout ? (u(), d("view", kd, [
      D(e.$slots, "rightout")
    ])) : C("", !0)
  ], 6);
}
const Sd = /* @__PURE__ */ K(gd, [["render", wd]]), Tt = (e, t, n) => e.map((s) => {
  const { value: o = "value", text: a = "text", children: l = "children" } = n, g = s, { [o]: i, [a]: r, [l]: p } = g, f = Pt(g, [kt(o), kt(a), kt(l)]), y = ce(G({
    loading: !1
  }, f), {
    level: t ? (t && t.level || 0) + 1 : 0,
    value: i,
    text: r,
    children: p,
    _parent: t
  });
  return y.children && y.children.length && (y.children = Tt(y.children, y, n)), y;
}), oo = (e, t) => {
  let n = 0, s;
  for (; (s = e[n++]) && t(s) !== !0; )
    s.children && s.children.length && oo(s.children, t);
}, Cd = {
  topId: null,
  idKey: "id",
  pidKey: "pid",
  sortKey: ""
}, Td = (e, t) => {
  const n = G(G({}, Cd), t || {}), { topId: s, idKey: o, pidKey: a, sortKey: l } = n;
  let i = [], r = {};
  return e.forEach((p) => {
    p = G({}, p);
    const { [o]: f, [a]: y } = p, g = r[y] = r[y] || [];
    !i.length && y === s && (i = g), g.push(p), p.children = r[f] || (r[f] = []);
  }), l && Object.keys(r).forEach((p) => {
    r[p].length > 1 && r[p].sort((f, y) => f[l] - y[l]);
  }), r = null, i;
};
class vn {
  constructor(t, n) {
    z(this, "nodes");
    z(this, "config");
    this.config = G({
      value: "value",
      text: "text",
      children: "children"
    }, n || {}), this.nodes = Tt(t, null, this.config);
  }
  updateChildren(t, n) {
    n ? n.children = Tt(t, n, this.config) : this.nodes = Tt(t, null, this.config);
  }
  // for test
  getNodeByValue(t) {
    let n;
    return oo(this.nodes, (s) => {
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
const { create: Nd } = W("cascader-item"), Dd = Nd({
  components: {
    Loading: xe,
    Checklist: Bl,
    NutTabs: eo,
    NutTabPane: to
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
    const n = ke(), s = N(() => ({
      lazy: e.lazy,
      lazyLoad: e.lazyLoad,
      valueKey: e.valueKey,
      textKey: e.textKey,
      childrenKey: e.childrenKey,
      convertConfig: e.convertConfig
    })), o = P(0), a = P(!1), l = P(e.modelValue), i = P(new vn([], {})), r = P([]), p = N(() => s.value.lazy && !!s.value.lazyLoad), f = /* @__PURE__ */ new Map();
    let y;
    const g = () => Ue(this, null, function* () {
      f.clear(), r.value = [], o.value = 0, a.value = !1, y = null;
      let { options: h } = e;
      s.value.convertConfig && (h = Td(h, s.value.convertConfig)), i.value = new vn(h, {
        value: s.value.valueKey,
        text: s.value.textKey,
        children: s.value.childrenKey
      }), p.value && !i.value.nodes.length && (yield b({
        root: !0,
        loading: !0,
        text: "",
        value: ""
      })), r.value = [{ nodes: i.value.nodes, selectedNode: null }], v();
    }), v = () => Ue(this, null, function* () {
      const h = l.value;
      if (h === void 0 || !i.value.nodes.length)
        return;
      if (h.length === 0) {
        o.value = 0, r.value = [{ nodes: i.value.nodes, selectedNode: null }];
        return;
      }
      let w = h;
      if (p.value && Array.isArray(h) && h.length) {
        w = [];
        let I = i.value.nodes.find((T) => T.value === h[0]);
        if (I) {
          w = [I.value], a.value = !0;
          const T = yield h.slice(1).reduce((Y, M) => Ue(this, null, function* () {
            var E;
            const A = yield Y;
            yield b(A);
            const S = (E = A == null ? void 0 : A.children) == null ? void 0 : E.find((V) => V.value === M);
            return S && w.push(M), Promise.resolve(S);
          }), Promise.resolve(I));
          yield b(T), a.value = !1;
        }
      }
      w.length && h === e.modelValue && i.value.getPathNodesByValue(w).map((T, Y) => {
        o.value = Y, c.handleNode(T, !0);
      });
    }), b = (h) => Ue(this, null, function* () {
      if (!h)
        return;
      if (!s.value.lazyLoad) {
        h.leaf = !0;
        return;
      }
      if (i.value.isLeaf(h, p.value) || i.value.hasChildren(h, p.value))
        return;
      h.loading = !0;
      const w = h.root ? null : h;
      let I = f.get(h);
      I || (I = new Promise((Y) => {
        var M, A;
        (A = (M = s.value).lazyLoad) == null || A.call(M, h, Y);
      }), f.set(h, I));
      const T = yield I;
      Array.isArray(T) && T.length > 0 ? i.value.updateChildren(T, w) : h.leaf = !0, h.loading = !1, f.delete(h);
    }), k = (h) => {
      const w = h.map((I) => I.value);
      l.value = w, t("change", w, h), t("update:modelValue", w, h);
    }, c = {
      // 选中一个节点，静默模式不触发事件
      handleNode(h, w) {
        return Ue(this, null, function* () {
          const { disabled: I, loading: T } = h;
          if (!(!w && I || !r.value[o.value])) {
            if (i.value.isLeaf(h, p.value)) {
              if (h.leaf = !0, r.value[o.value].selectedNode = h, r.value = r.value.slice(0, h.level + 1), !w) {
                const Y = r.value.map((M) => M.selectedNode);
                k(Y), t("pathChange", Y);
              }
              return;
            }
            if (i.value.hasChildren(h, p.value)) {
              const Y = h.level + 1;
              if (r.value[o.value].selectedNode = h, r.value = r.value.slice(0, Y), r.value.push({
                nodes: h.children || [],
                selectedNode: null
              }), o.value = Y, !w) {
                const M = r.value.map((A) => A.selectedNode);
                t("pathChange", M);
              }
              return;
            }
            y = h, !T && (yield b(h), y === h && (r.value[o.value].selectedNode = h, c.handleNode(h, w)));
          }
        });
      },
      handleTabClick(h) {
        y = null, o.value = Number(h.paneKey);
      },
      formatTabTitle(h) {
        return h.selectedNode ? h.selectedNode.text : n("select");
      },
      isSelected(h, w) {
        var I;
        return ((I = h == null ? void 0 : h.selectedNode) == null ? void 0 : I.value) === w.value;
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
        h !== l.value && (l.value = h, v());
      }
    ), Q(
      () => e.visible,
      (h) => {
        h && Array.isArray(l.value) && l.value.length > 0 && v();
      }
    ), G({ panes: r, initLoading: a, tabsCursor: o }, c);
  }
}), Id = {
  role: "menu",
  class: "nut-cascader-pane"
}, _d = ["aria-checked", "aria-disabled", "onClick"], Bd = { class: "nut-cascader-item__title" }, Md = /* @__PURE__ */ m("view", { class: "nut-cascader-pane" }, null, -1);
function Ed(e, t, n, s, o, a) {
  const l = j("Loading"), i = j("Checklist"), r = j("nut-tab-pane"), p = j("nut-tabs");
  return u(), x(p, {
    modelValue: e.tabsCursor,
    "onUpdate:modelValue": t[0] || (t[0] = (f) => e.tabsCursor = f),
    class: "nut-cascader",
    "title-scroll": "",
    onClick: e.handleTabClick
  }, {
    default: te(() => [
      !e.initLoading && e.panes.length ? (u(!0), d(ee, { key: 0 }, re(e.panes, (f, y) => (u(), x(r, {
        key: y,
        title: e.formatTabTitle(f)
      }, {
        default: te(() => [
          m("view", Id, [
            (u(!0), d(ee, null, re(f.nodes, (g) => (u(), d("view", {
              key: g.value,
              class: _(["nut-cascader-item", { active: e.isSelected(f, g), disabled: g.disabled }]),
              "aria-checked": e.isSelected(f, g),
              "aria-disabled": g.disabled || void 0,
              role: "menuitemradio",
              onClick: (v) => e.handleNode(g, !1)
            }, [
              m("view", Bd, B(g.text), 1),
              g.loading ? (u(), x(l, {
                key: 0,
                class: "nut-cascader-item__icon-loading",
                name: "loading"
              })) : (u(), x(i, {
                key: 1,
                class: "nut-cascader-item__icon-check",
                name: "checklist"
              }))
            ], 10, _d))), 128))
          ])
        ]),
        _: 2
      }, 1032, ["title"]))), 128)) : (u(), x(r, {
        key: 1,
        title: "Loading..."
      }, {
        default: te(() => [
          Md
        ]),
        _: 1
      }))
    ]),
    _: 1
  }, 8, ["modelValue", "onClick"]);
}
const Ld = /* @__PURE__ */ K(Dd, [["render", Ed]]), { create: Pd } = W("cascader"), Ad = Pd({
  components: {
    NutCascaderItem: Ld,
    NutPopup: Ee
  },
  props: ce(G({}, $t), {
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
    const n = P(e.modelValue), s = N({
      get() {
        return e.visible;
      },
      set(l) {
        t("update:visible", l);
      }
    }), o = (l, i) => {
      n.value = l, s.value = !1, t("change", l, i), t("update:modelValue", l);
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
}), zd = ["innerHTML"];
function Vd(e, t, n, s, o, a) {
  const l = j("nut-cascader-item"), i = j("nut-popup");
  return e.poppable ? (u(), x(i, {
    key: 0,
    visible: e.innerVisible,
    "onUpdate:visible": t[0] || (t[0] = (r) => e.innerVisible = r),
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
      }, null, 8, zd)) : C("", !0),
      le(l, {
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
  }, 8, ["visible", "closeable", "close-icon-position", "z-index"])) : (u(), x(l, {
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
const Od = /* @__PURE__ */ K(Ad, [["render", Vd]]), pe = {
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
    let a = o.getDay(), l = o.getDate(), i = 6 - a;
    return s !== 0 && (a = a == 0 ? 7 : a, i = 7 - a), Math.ceil((l + i) / 7);
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
      const r = a - l * 864e5, p = a + (6 - l) * 864e5, f = this.date2Str(new Date(r)), y = this.date2Str(new Date(p));
      return [f, y];
    } else {
      l = l == 0 ? 7 : l;
      const i = 24 * 60 * 60 * 1e3, r = a - (l - 1) * i, p = a + (7 - l) * i, f = this.date2Str(new Date(r)), y = this.date2Str(new Date(p));
      return [f, y];
    }
  },
  formatResultDate: function(e) {
    let t = [...e.split("-")];
    return t[2] = pe.getNumTwoBit(Number(t[2])), t[3] = `${t[0]}-${t[1]}-${t[2]}`, t[4] = pe.getWhatDay(+t[0], +t[1], +t[2]), t;
  }
}, { create: Hd } = W("calendar-item"), Rd = "NutCalendarItem", Fd = Hd({
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
      default: pe.getDay(0)
    },
    endDate: {
      type: String,
      default: pe.getDay(365)
    },
    firstDayOfWeek: {
      type: Number,
      default: 0
    },
    disabledDate: Function
  },
  emits: ["choose", "update", "close", "select"],
  setup(e, { emit: t, slots: n, expose: s }) {
    const o = ke(Rd), a = o("weekdays").map((O, J) => ({
      day: O,
      weekend: J === 0 || J === 6
    })), l = P([...a.slice(e.firstDayOfWeek, 7), ...a.slice(0, e.firstDayOfWeek)]), i = P(null), r = P(null), p = P(null), f = P(null), y = P(0), g = N(() => c.monthsData.slice(c.defaultRange[0], c.defaultRange[1])), v = N(() => n.btn), b = N(() => n["top-info"]), k = N(() => n["bottom-info"]), c = ue({
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
    }), $ = (O) => O.split("-"), h = (O) => pe.isEqual(c.currDate[0], O), w = (O) => pe.isEqual(c.currDate[1], O), I = (O) => {
      var J, se;
      return ((J = c.currDate) == null ? void 0 : J.length) > 0 ? (se = c.currDate) == null ? void 0 : se.some((ie) => pe.isEqual(ie, O)) : !1;
    }, T = (O, J) => J.curData[0] + "-" + J.curData[1] + "-" + pe.getNumTwoBit(+O.day), Y = (O, J, se) => {
      const ie = [];
      typeof se == "number" && ((se + 1 + e.firstDayOfWeek) % 7 === 0 || (se + e.firstDayOfWeek) % 7 === 0) && ie.push("weekend");
      const he = T(O, J), { type: Ie } = e;
      return O.type == "curr" ? pe.isEqual(c.currDate, he) || (Ie == "range" || Ie == "week") && (h(he) || w(he)) || Ie == "multiple" && I(he) ? ie.push(`${c.dayPrefix}--active`) : c.propStartDate && pe.compareDate(he, c.propStartDate) || c.propEndDate && pe.compareDate(c.propEndDate, he) || e.disabledDate && e.disabledDate(he) ? ie.push(`${c.dayPrefix}--disabled`) : (Ie == "range" || Ie == "week") && Array.isArray(c.currDate) && Object.values(c.currDate).length == 2 && pe.compareDate(c.currDate[0], he) && pe.compareDate(he, c.currDate[1]) && ie.push(`${c.dayPrefix}--choose`) : ie.push(`${c.dayPrefix}--disabled`), ie;
    }, M = () => {
      const { type: O } = e;
      if (O == "range" && c.chooseData.length == 2 || O != "range") {
        let J = c.chooseData.slice(0);
        if (O == "week") {
          if (c.chooseData.length !== 2)
            return;
          J = {
            weekDate: [S(c.chooseData[0]), S(c.chooseData[1])]
          };
        }
        t("choose", J), e.poppable && t("update");
      }
    }, A = (O, J, se = !1) => {
      var ie, he;
      if (!Y(O, J).includes(`${c.dayPrefix}--disabled`)) {
        const { type: Ie } = e;
        let [He, We] = J.curData, $e = [...J.curData];
        if ($e[2] = pe.getNumTwoBit(Number(O.day)), $e[3] = `${$e[0]}-${$e[1]}-${$e[2]}`, $e[4] = pe.getWhatDay(+$e[0], +$e[1], +$e[2]), Ie == "multiple")
          if (((ie = c.currDate) == null ? void 0 : ie.length) > 0) {
            let Se;
            (he = c.currDate) == null || he.forEach((Re, ze) => {
              Re == $e[3] && (Se = ze);
            }), se ? c.chooseData.push([...$e]) : Se !== void 0 ? (c.currDate.splice(Se, 1), c.chooseData.splice(Se, 1)) : (c.currDate.push($e[3]), c.chooseData.push([...$e]));
          } else
            c.currDate = [$e[3]], c.chooseData = [[...$e]];
        else if (Ie == "range") {
          let Se = Object.values(c.currDate).length;
          Se == 2 || Se == 0 ? c.currDate = [$e[3]] : pe.compareDate(c.currDate[0], $e[3]) ? Array.isArray(c.currDate) && c.currDate.push($e[3]) : Array.isArray(c.currDate) && c.currDate.unshift($e[3]), c.chooseData.length == 2 || !c.chooseData.length ? c.chooseData = [[...$e]] : pe.compareDate(c.chooseData[0][3], $e[3]) ? c.chooseData = [...c.chooseData, [...$e]] : c.chooseData = [[...$e], ...c.chooseData];
        } else if (Ie == "week") {
          let Se = pe.getWeekDate(He, We, O.day, e.firstDayOfWeek);
          c.propStartDate && pe.compareDate(Se[0], c.propStartDate) && Se.splice(0, 1, c.propStartDate), c.propEndDate && pe.compareDate(c.propEndDate, Se[1]) && Se.splice(1, 1, c.propEndDate), c.currDate = Se, c.chooseData = [pe.formatResultDate(Se[0]), pe.formatResultDate(Se[1])];
        } else
          c.currDate = $e[3], c.chooseData = [...$e];
        if (!se) {
          let Se = c.chooseData;
          Ie == "week" && (Se = {
            weekDate: [
              S(c.chooseData[0]),
              S(c.chooseData[1])
            ]
          }), t("select", Se), (e.isAutoBackFill || !e.poppable) && M();
        }
      }
    }, S = (O) => {
      let [J, se, ie] = O;
      return {
        date: O,
        monthWeekNum: pe.getMonthWeek(J, se, ie, e.firstDayOfWeek),
        yearWeekNum: pe.getYearWeek(J, se, ie, e.firstDayOfWeek)
      };
    }, E = (O) => {
      const J = O == "prev" ? c.monthsData[0] : c.monthsData[c.monthsData.length - 1];
      let se = parseInt(J.curData[0]), ie = parseInt(J.curData[1].toString().replace(/^0/, ""));
      switch (O) {
        case "prev":
          ie == 1 && (se -= 1), ie = ie == 1 ? 12 : --ie;
          break;
        case "next":
          ie == 12 && (se += 1), ie = ie == 12 ? 1 : ++ie;
          break;
      }
      return [se + "", pe.getNumTwoBit(ie), pe.getMonthDays(String(se), String(ie)) + ""];
    }, V = (O, J, se) => {
      let { year: ie, month: he } = se;
      return J == "prev" && O >= 7 && (O -= 7), Array.from(Array(O), (Ie, He) => ({
        day: String(He + 1),
        type: J,
        year: ie,
        month: he
      }));
    }, X = (O, J, se, ie) => {
      O = O - e.firstDayOfWeek;
      let { year: he, month: Ie } = se;
      return J == "prev" && O >= 7 && (O -= 7), Array.from(Array(ie), (We, $e) => ({
        day: String($e + 1),
        type: J,
        year: he,
        month: Ie
      })).slice(ie - O);
    }, Z = (O, J) => {
      const se = pe.getMonthPreDay(+O[0], +O[1]);
      let ie = Number(O[1]) - 1, he = Number(O[0]);
      ie <= 0 && (ie = 12, he += 1);
      const Ie = pe.getMonthDays(String(O[0]), String(O[1])), He = pe.getMonthDays(he + "", ie + ""), We = {
        year: O[0],
        month: O[1]
      }, $e = {
        curData: O,
        title: o("monthTitle", We.year, We.month),
        monthData: [
          ...X(
            se,
            "prev",
            { month: String(ie), year: String(he) },
            He
          ),
          ...V(Ie, "curr", We)
        ],
        cssHeight: 0,
        cssScrollHeight: 0
      };
      $e.cssHeight = 39 + ($e.monthData.length > 35 ? 384 : 320);
      let Se = 0;
      c.monthsData.length > 0 && (Se = c.monthsData[c.monthsData.length - 1].cssScrollHeight + c.monthsData[c.monthsData.length - 1].cssHeight), $e.cssScrollHeight = Se, J == "next" ? (!c.endData || !pe.compareDate(
        `${c.endData[0]}-${c.endData[1]}-${pe.getMonthDays(c.endData[0], c.endData[1])}`,
        `${O[0]}-${O[1]}-${O[2]}`
      )) && c.monthsData.push($e) : !c.startData || !pe.compareDate(
        `${O[0]}-${O[1]}-${O[2]}`,
        `${c.startData[0]}-${c.startData[1]}-01`
      ) ? c.monthsData.unshift($e) : c.unLoadPrev = !0;
    }, F = () => {
      let O = e.startDate ? e.startDate : pe.getDay(0), J = e.endDate ? e.endDate : pe.getDay(365);
      c.propStartDate = O, c.propEndDate = J, c.startData = $(O), c.endData = $(J), (e.defaultValue || Array.isArray(e.defaultValue) && e.defaultValue.length > 0) && (c.currDate = e.type !== "one" ? [...e.defaultValue] : e.defaultValue);
      const se = {
        year: Number(c.startData[0]),
        month: Number(c.startData[1])
      }, ie = {
        year: Number(c.endData[0]),
        month: Number(c.endData[1])
      };
      let he = ie.month - se.month;
      ie.year - se.year > 0 && (he = he + 12 * (ie.year - se.year)), he <= 0 && (he = 1), Z(c.startData, "next");
      let Ie = 1;
      do
        Z(E("next"), "next");
      while (Ie++ < he);
      if (c.monthsNum = he, e.type == "range" && Array.isArray(c.currDate))
        c.currDate.length > 0 && (O && pe.compareDate(c.currDate[0], O) && c.currDate.splice(0, 1, O), J && pe.compareDate(J, c.currDate[1]) && c.currDate.splice(1, 1, J), c.defaultData = [...$(c.currDate[0]), ...$(c.currDate[1])]);
      else if (e.type == "multiple" && Array.isArray(c.currDate)) {
        if (c.currDate.length > 0) {
          let Re = [], ze = {};
          c.currDate.forEach((Ye) => {
            O && !pe.compareDate(Ye, O) && J && !pe.compareDate(J, Ye) && (Object.hasOwnProperty.call(ze, Ye) || (Re.push(Ye), ze[Ye] = Ye));
          }), c.currDate = [...Re], c.defaultData = [...$(Re[0])];
        }
      } else if (e.type == "week" && Array.isArray(c.currDate)) {
        if (c.currDate.length > 0) {
          let [Re, ze, Ye] = $(c.currDate[0]), Et = pe.getWeekDate(Re, ze, Ye, e.firstDayOfWeek);
          c.currDate = Et, O && pe.compareDate(c.currDate[0], O) && c.currDate.splice(0, 1, O), J && pe.compareDate(J, c.currDate[1]) && c.currDate.splice(1, 1, J), c.defaultData = [...$(c.currDate[0]), ...$(c.currDate[1])];
        }
      } else
        c.currDate && (O && pe.compareDate(c.currDate, O) ? c.currDate = O : J && !pe.compareDate(c.currDate, J) && (c.currDate = J), c.defaultData = [...$(c.currDate)]);
      let He = 0, We = 0;
      c.defaultData.length > 0 && c.monthsData.forEach((Re, ze) => {
        Re.title == o("monthTitle", c.defaultData[0], c.defaultData[1]) && (He = ze), (e.type == "range" || e.type == "week") && Re.title == o("monthTitle", c.defaultData[3], c.defaultData[4]) && (We = ze);
      }), H(he, He), c.currentIndex = He, c.yearMonthTitle = c.monthsData[c.currentIndex].title, c.defaultData.length > 0 && (c.isRange ? (A({ day: c.defaultData[2], type: "curr" }, c.monthsData[c.currentIndex], !0), A({ day: c.defaultData[5], type: "curr" }, c.monthsData[We], !0)) : e.type == "week" ? A({ day: c.defaultData[2], type: "curr" }, c.monthsData[c.currentIndex], !0) : e.type == "multiple" ? [...c.currDate].forEach((Re) => {
        let ze = $(Re), Ye = c.currentIndex;
        c.monthsData.forEach((Et, Io) => {
          Et.title == o("monthTitle", ze[0], ze[1]) && (Ye = Io);
        }), A({ day: ze[2], type: "curr" }, c.monthsData[Ye], !0);
      }) : A({ day: c.defaultData[2], type: "curr" }, c.monthsData[c.currentIndex], !0));
      let $e = c.monthsData[c.monthsData.length - 1], Se = $e.cssHeight + $e.cssScrollHeight;
      Ve(() => {
        i != null && i.value && (r != null && r.value) && (f != null && f.value) && (y.value = i.value.clientHeight, r.value.style.height = `${Se}px`, i.value.scrollTop = c.monthsData[c.currentIndex].cssScrollHeight);
      }), c.avgHeight = Math.floor(Se / (he + 1));
    };
    s({
      scrollToDate: (O) => {
        pe.compareDate(O, c.propStartDate) ? O = c.propStartDate : pe.compareDate(O, c.propEndDate) || (O = c.propEndDate);
        let J = $(O);
        c.monthsData.forEach((se, ie) => {
          if (se.title == o("monthTitle", J[0], J[1]) && i.value) {
            let he = c.monthsData[ie].cssScrollHeight - i.value.scrollTop;
            if (e.toDateAnimation) {
              let Ie = 0, He = setInterval(() => {
                if (Ie++, i.value) {
                  let We = he / 10;
                  i.value.scrollTop = i.value.scrollTop + We;
                }
                Ie >= 10 && (clearInterval(He), i.value && (i.value.scrollTop = c.monthsData[ie].cssScrollHeight));
              }, 40);
            } else
              i.value.scrollTop = c.monthsData[ie].cssScrollHeight;
          }
        });
      },
      initPosition: () => {
        i != null && i.value && (i.value.scrollTop = c.monthsData[c.currentIndex].cssScrollHeight);
      }
    });
    const H = (O, J) => {
      O >= 3 ? J > 0 && J < O ? c.defaultRange = [J - 1, J + 3] : J == 0 ? c.defaultRange = [J, J + 4] : J == O && (c.defaultRange = [J - 2, J + 2]) : c.defaultRange = [0, O + 2];
      let se = c.monthsData[c.defaultRange[0]].cssScrollHeight;
      c.translateY = se;
    }, ne = (O, J) => (e.type == "range" || e.type == "week") && O.type == "curr" && Y(O, J).includes("nut-calendar__day--active"), U = (O, J) => ne(O, J) && h(T(O, J)), ae = (O, J) => c.currDate.length >= 2 && w(T(O, J)) ? ne(O, J) : !1, de = () => {
      if (c.currDate.length >= 2)
        return pe.isEqual(c.currDate[0], c.currDate[1]);
    }, fe = (O) => {
      const J = `${O.year}-${O.month}-${Number(O.day) < 10 ? "0" + O.day : O.day}`;
      return pe.isEqual(J, pe.date2Str(/* @__PURE__ */ new Date()));
    }, be = (O) => {
      if (c.monthsData.length <= 1)
        return;
      const J = O.target.scrollTop;
      let se = Math.floor(J / c.avgHeight);
      if (se == 0)
        J >= c.monthsData[se + 1].cssScrollHeight && (se += 1);
      else if (se > 0 && se < c.monthsNum - 1)
        J >= c.monthsData[se + 1].cssScrollHeight && (se += 1), J < c.monthsData[se].cssScrollHeight && (se -= 1);
      else {
        const ie = Math.round(J + y.value);
        ie < c.monthsData[se].cssScrollHeight + c.monthsData[se].cssHeight && J > c.monthsData[se - 1].cssScrollHeight && (se -= 1), se + 1 <= c.monthsNum && ie >= c.monthsData[se + 1].cssScrollHeight + c.monthsData[se + 1].cssHeight && (se += 1), se >= 1 && J < c.monthsData[se - 1].cssScrollHeight && (se -= 1);
      }
      c.currentIndex !== se && (c.currentIndex = se, H(c.monthsNum, se)), c.yearMonthTitle = c.monthsData[se].title;
    }, Le = () => {
      c.chooseData.splice(0), c.monthsData.splice(0), F();
    };
    return ve(() => {
      F();
    }), Q(
      () => e.defaultValue,
      (O) => {
        O && e.poppable && Le();
      }
    ), ce(G(G({
      weeks: l,
      compConthsData: g,
      showTopBtn: v,
      topInfo: b,
      bottomInfo: k,
      rangeTip: de,
      mothsViewScroll: be,
      getClass: Y,
      isStartTip: U,
      isEndTip: ae,
      chooseDay: A,
      isCurrDay: fe,
      confirm: M,
      months: i
    }, me(c)), me(e)), {
      translate: o,
      monthsPanel: r,
      weeksPanel: p,
      viewArea: f
    });
  }
}), Wd = { class: "nut-calendar__header" }, Yd = {
  key: 0,
  class: "nut-calendar__header-title"
}, jd = {
  key: 1,
  class: "nut-calendar__header-slot"
}, Kd = {
  key: 2,
  class: "nut-calendar__header-subtitle"
}, Ud = {
  ref: "weeksPanel",
  class: "nut-calendar__weekdays"
}, Xd = {
  ref: "monthsPanel",
  class: "nut-calendar__panel"
}, qd = { class: "nut-calendar__month-title" }, Gd = { class: "nut-calendar__days" }, Zd = ["onClick"], Jd = { class: "nut-calendar__day-value" }, Qd = {
  key: 0,
  class: "nut-calendar__day-tips nut-calendar__day-tips--top"
}, xd = {
  key: 1,
  class: "nut-calendar__day-tips nut-calendar__day-tips--bottom"
}, ef = {
  key: 2,
  class: "nut-calendar__day-tips--curr"
}, tf = {
  key: 4,
  class: "nut-calendar__day-tip"
}, nf = {
  key: 0,
  class: "nut-calendar__footer"
};
function of(e, t, n, s, o, a) {
  return u(), d("view", {
    class: _(["nut-calendar", {
      "nut-calendar--nopop": !e.poppable,
      "nut-calendar--nofooter": e.isAutoBackFill
    }])
  }, [
    m("view", Wd, [
      e.showTitle ? (u(), d("view", Yd, B(e.title || e.translate("title")), 1)) : C("", !0),
      e.showTopBtn ? (u(), d("view", jd, [
        D(e.$slots, "btn")
      ])) : C("", !0),
      e.showSubTitle ? (u(), d("view", Kd, B(e.yearMonthTitle), 1)) : C("", !0),
      m("view", Ud, [
        (u(!0), d(ee, null, re(e.weeks, (l, i) => (u(), d("view", {
          key: i,
          class: _(["nut-calendar__weekday", { weekend: l.weekend }])
        }, B(l.day), 3))), 128))
      ], 512)
    ]),
    m("view", {
      ref: "months",
      class: "nut-calendar__content",
      onScroll: t[0] || (t[0] = (...l) => e.mothsViewScroll && e.mothsViewScroll(...l))
    }, [
      m("view", Xd, [
        m("view", {
          ref: "viewArea",
          class: "nut-calendar__body",
          style: L({ transform: `translateY(${e.translateY}px)` })
        }, [
          (u(!0), d(ee, null, re(e.compConthsData, (l, i) => (u(), d("view", {
            key: i,
            class: "nut-calendar__month"
          }, [
            m("view", qd, B(l.title), 1),
            m("view", Gd, [
              m("view", {
                class: _(["nut-calendar__days-item", e.type === "range" ? "nut-calendar__days-item--range" : ""])
              }, [
                (u(!0), d(ee, null, re(l.monthData, (r, p) => (u(), d("view", {
                  key: p,
                  class: _(["nut-calendar__day", e.getClass(r, l, p)]),
                  onClick: (f) => e.chooseDay(r, l)
                }, [
                  m("view", Jd, [
                    D(e.$slots, "day", {
                      date: r.type == "curr" ? r : ""
                    }, () => [
                      ge(B(r.type == "curr" ? r.day : ""), 1)
                    ])
                  ]),
                  e.topInfo ? (u(), d("view", Qd, [
                    D(e.$slots, "top-info", {
                      date: r.type == "curr" ? r : ""
                    })
                  ])) : C("", !0),
                  e.bottomInfo ? (u(), d("view", xd, [
                    D(e.$slots, "bottom-info", {
                      date: r.type == "curr" ? r : ""
                    })
                  ])) : C("", !0),
                  !e.bottomInfo && e.showToday && e.isCurrDay(r) ? (u(), d("view", ef, B(e.translate("today")), 1)) : C("", !0),
                  e.isStartTip(r, l) ? (u(), d("view", {
                    key: 3,
                    class: _(["nut-calendar__day-tip", { "nut-calendar__day-tips--top": e.rangeTip() }])
                  }, B(e.startText || e.translate("start")), 3)) : C("", !0),
                  e.isEndTip(r, l) ? (u(), d("view", tf, B(e.endText || e.translate("end")), 1)) : C("", !0)
                ], 10, Zd))), 128))
              ], 2)
            ])
          ]))), 128))
        ], 4)
      ], 512)
    ], 544),
    e.poppable && !e.isAutoBackFill ? (u(), d("view", nf, [
      D(e.$slots, "footer-info", { date: e.chooseData }, () => [
        m("view", {
          class: "nut-calendar__confirm",
          onClick: t[1] || (t[1] = (...l) => e.confirm && e.confirm(...l))
        }, B(e.confirmText || e.translate("confirm")), 1)
      ])
    ])) : C("", !0)
  ], 2);
}
const lo = /* @__PURE__ */ K(Fd, [["render", of]]), { create: lf } = W("calendar"), sf = lf({
  components: {
    NutCalendarItem: lo,
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
      default: pe.getDay(0)
    },
    endDate: {
      type: String,
      default: pe.getDay(365)
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
    const o = N({
      get() {
        return e.visible;
      },
      set(w) {
        t("update:visible", w);
      }
    }), a = N(() => n.btn), l = N(() => n["top-info"]), i = N(() => n.day), r = N(() => n["bottom-info"]), p = N(() => n["footer-info"]), f = P(null);
    s({
      scrollToDate: (w) => {
        var I;
        (I = f.value) == null || I.scrollToDate(w);
      },
      initPosition: () => {
        var w;
        (w = f.value) == null || w.initPosition();
      }
    });
    const v = () => {
      t("update:visible", !1);
    }, b = () => {
      t("close"), t("update:visible", !1);
    };
    return {
      visible: o,
      closePopup: () => {
        b();
      },
      opened: () => {
        var w;
        (w = f.value) == null || w.initPosition();
      },
      update: v,
      close: b,
      select: (w) => {
        t("select", w);
      },
      choose: (w) => {
        b(), t("choose", w);
      },
      calendarRef: f,
      showTopBtn: a,
      topInfo: l,
      dayInfo: i,
      bottomInfo: r,
      footerInfo: p
    };
  }
});
function af(e, t, n, s, o, a) {
  const l = j("nut-calendar-item"), i = j("nut-popup");
  return e.poppable ? (u(), x(i, pt({
    key: 0,
    visible: e.visible,
    "onUpdate:visible": t[0] || (t[0] = (r) => e.visible = r),
    position: "bottom",
    round: "",
    closeable: ""
  }, e.$attrs, {
    style: { height: "85vh" },
    "lock-scroll": e.lockScroll,
    onOpened: e.opened
  }), {
    default: te(() => [
      le(l, {
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
      }, mt({ _: 2 }, [
        e.showTopBtn ? {
          name: "btn",
          fn: te(() => [
            D(e.$slots, "btn")
          ]),
          key: "0"
        } : void 0,
        e.dayInfo ? {
          name: "day",
          fn: te((r) => [
            D(e.$slots, "day", {
              date: r.date
            })
          ]),
          key: "1"
        } : void 0,
        e.topInfo ? {
          name: "top-info",
          fn: te((r) => [
            D(e.$slots, "top-info", {
              date: r.date
            })
          ]),
          key: "2"
        } : void 0,
        e.bottomInfo ? {
          name: "bottom-info",
          fn: te((r) => [
            D(e.$slots, "bottom-info", {
              date: r.date
            })
          ]),
          key: "3"
        } : void 0,
        e.footerInfo ? {
          name: "footer-info",
          fn: te((r) => [
            D(e.$slots, "footer-info", {
              date: r.date
            })
          ]),
          key: "4"
        } : void 0
      ]), 1032, ["type", "is-auto-back-fill", "poppable", "title", "default-value", "start-date", "end-date", "confirm-text", "start-text", "end-text", "show-today", "show-title", "show-sub-title", "to-date-animation", "first-day-of-week", "disabled-date", "onUpdate", "onClose", "onChoose", "onSelect"])
    ]),
    _: 3
  }, 16, ["visible", "lock-scroll", "onOpened"])) : (u(), x(l, {
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
  }, mt({ _: 2 }, [
    e.showTopBtn ? {
      name: "btn",
      fn: te(() => [
        D(e.$slots, "btn")
      ]),
      key: "0"
    } : void 0,
    e.dayInfo ? {
      name: "day",
      fn: te((r) => [
        D(e.$slots, "day", {
          date: r.date
        })
      ]),
      key: "1"
    } : void 0,
    e.topInfo ? {
      name: "top-info",
      fn: te((r) => [
        D(e.$slots, "top-info", {
          date: r.date
        })
      ]),
      key: "2"
    } : void 0,
    e.bottomInfo ? {
      name: "bottom-info",
      fn: te((r) => [
        D(e.$slots, "bottom-info", {
          date: r.date
        })
      ]),
      key: "3"
    } : void 0
  ]), 1032, ["type", "is-auto-back-fill", "poppable", "title", "confirm-text", "start-text", "end-text", "default-value", "start-date", "end-date", "show-title", "show-sub-title", "to-date-animation", "show-today", "first-day-of-week", "disabled-date", "onUpdate", "onClose", "onChoose", "onSelect"]));
}
const rf = /* @__PURE__ */ K(sf, [["render", af]]), so = Symbol("nut-checkbox"), { create: uf, componentName: Ze } = W("checkbox"), cf = uf({
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
    const s = Be(so, null), o = ue({
      partialSelect: e.indeterminate
    }), a = N(() => !!s), l = N(() => a.value ? s.value.value.includes(e.label) : e.modelValue), i = N(() => a.value && s.disabled.value ? s.disabled.value : e.disabled), r = N(() => !!e.modelValue), p = N(() => i.value ? "nut-checkbox__icon--disable" : o.partialSelect ? "nut-checkbox__icon--indeterminate" : l.value ? "nut-checkbox__icon" : "nut-checkbox__icon--unchecked");
    let f = "";
    const y = (c, $) => {
      f = "click", t("update:modelValue", c), t("change", c, $);
    };
    Q(
      () => e.modelValue,
      (c) => {
        f == "click" ? f = "" : t("change", c);
      }
    );
    const g = () => {
      const { iconSize: c } = e, $ = {
        CheckNormal: n.icon ? n.icon : Vt,
        Checked: n.checkedIcon ? n.checkedIcon : An,
        CheckDisabled: n.indeterminate ? n.indeterminate : pl
      }, h = o.partialSelect ? $.CheckDisabled : l.value ? $.Checked : $.CheckNormal, w = _e(c);
      return we(h, {
        width: w,
        height: w,
        size: w,
        class: p.value
      });
    }, v = () => {
      var c;
      return we(
        "view",
        {
          class: `${Ze}__label ${i.value ? `${Ze}__label--disabled` : ""}`
        },
        (c = n.default) == null ? void 0 : c.call(n)
      );
    }, b = () => {
      var c;
      return we(
        "view",
        {
          class: `${Ze}__button ${l.value && `${Ze}__button--active`} ${i.value ? `${Ze}__button--disabled` : ""}`
        },
        (c = n.default) == null ? void 0 : c.call(n)
      );
    }, k = () => {
      var c, $;
      if (!i.value) {
        if (r.value && o.partialSelect) {
          o.partialSelect = !1, y(r.value, (c = n.default) == null ? void 0 : c.call(n)[0].children);
          return;
        }
        if (y(!r.value, ($ = n.default) == null ? void 0 : $.call(n)[0].children), a.value) {
          const h = s.value.value, w = s.max.value, { label: I } = e, T = h.indexOf(I);
          T > -1 ? h.splice(T, 1) : T <= -1 && (h.length < w || !w) && h.push(I), s.updateValue(h);
        }
      }
    };
    return ve(() => {
      a.value && s.link(Fe());
    }), Yt(() => {
      a.value && s.unlink(Fe());
    }), Q(
      () => e.indeterminate,
      (c) => {
        o.partialSelect = c;
      }
    ), () => we(
      "view",
      {
        class: `${Ze} ${Ze}--${e.shape} ${e.textPosition === "left" ? `${Ze}--reverse` : ""}`,
        onClick: k
      },
      [e.shape == "button" ? b() : [g(), v()]]
    );
  }
}), { create: df, componentName: ff } = W("checkbox-group"), pf = df({
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
    const o = ue({
      children: []
    }), a = (f) => {
      f.proxy && o.children.push(f.proxy);
    }, l = (f) => {
      f.proxy && (o.children = o.children.filter((y) => y !== f.proxy));
    }, i = (f) => {
      n("update:modelValue", f), n("change", f);
    }, r = (f) => {
      const y = [];
      f && o.children.forEach((g) => {
        g != null && g.disabled || y.push(g == null ? void 0 : g.label);
      }), n("update:modelValue", y);
    }, p = () => {
      const f = o.children.filter((y) => y != null && y.disabled ? !1 : !e.modelValue.includes(y.label)).map((y) => y.label);
      n("update:modelValue", f);
    };
    return Me(so, {
      value: N(() => e.modelValue),
      disabled: N(() => e.disabled),
      max: N(() => e.max),
      updateValue: i,
      link: a,
      unlink: l
    }), Q(
      () => e.modelValue,
      (f) => {
        n("change", f);
      }
    ), s({ toggleAll: r, toggleReverse: p }), () => {
      var f;
      return we(
        "view",
        {
          class: ff
        },
        (f = t.default) == null ? void 0 : f.call(t)
      );
    };
  }
}), mf = {
  text: "text",
  value: "value",
  children: "children"
}, hf = (e, t) => {
  const n = ue({
    formattedColumns: e.columns
  }), s = N(() => G(G({}, mf), e.fieldNames)), o = P([]), a = N(() => {
    const c = s.value;
    return f.value.map(($, h) => {
      const w = $.findIndex((I) => I[c.value] === o.value[h]);
      return w === -1 ? 0 : w;
    });
  }), l = P([]), i = (c) => {
    c && l.value.length < f.value.length && l.value.push(c);
  }, r = N(() => {
    const c = s.value;
    return f.value.map(($, h) => $.find((w) => w[c.value] === o.value[h]) || $[0]);
  }), p = N(() => {
    const c = n.formattedColumns[0], $ = s.value;
    if (c) {
      if (Array.isArray(c))
        return "multiple";
      if ($.children in c)
        return "cascade";
    }
    return "single";
  }), f = N(() => {
    let c = [];
    switch (p.value) {
      case "multiple":
        c = n.formattedColumns;
        break;
      case "cascade":
        c = y(
          n.formattedColumns,
          o.value ? o.value : []
        );
        break;
      default:
        c = [n.formattedColumns];
        break;
    }
    return c;
  }), y = (c, $) => {
    const h = [], w = s.value;
    let I = {
      text: "",
      value: "",
      [w.children]: c
    }, T = 0;
    for (; I && I[w.children]; ) {
      const Y = I[w.children], M = $[T];
      let A = Y.findIndex((S) => S[w.value] === M);
      A === -1 && (A = 0), I = I[w.children][A], T++, h.push(Y);
    }
    return h;
  }, g = () => {
    t("cancel", {
      selectedValue: o.value,
      selectedOptions: r.value
    });
  }, v = (c, $) => {
    var w;
    const h = s.value;
    if ($ && Object.keys($).length) {
      if (o.value = o.value ? o.value : [], p.value === "cascade") {
        o.value[c] = (w = $[h.value]) != null ? w : "";
        let I = c, T = $;
        for (; T && T[h.children] && T[h.children][0]; )
          o.value[I + 1] = T[h.children][0][h.value], I++, T = T[h.children][0];
        T && T[h.children] && T[h.children].length === 0 && (o.value = o.value.slice(0, I + 1));
      } else
        o.value[c] = Object.prototype.hasOwnProperty.call($, h.value) ? $[h.value] : "";
      t("change", {
        columnIndex: c,
        selectedValue: o.value,
        selectedOptions: r.value
      });
    }
  }, b = () => {
    const c = s.value;
    o.value && !o.value.length && f.value.forEach(($) => {
      o.value.push($[0][c.value]);
    }), t("confirm", {
      selectedValue: o.value,
      selectedOptions: r.value
    });
  }, k = (c, $) => JSON.stringify(c) === JSON.stringify($);
  return Q(
    () => e.modelValue,
    (c) => {
      k(c, o.value) || (o.value = c);
    },
    { deep: !0, immediate: !0 }
  ), Q(
    o,
    (c) => {
      k(c, e.modelValue) || t("update:modelValue", c);
    },
    { deep: !0 }
  ), Q(
    () => e.columns,
    (c) => {
      n.formattedColumns = c;
    }
  ), ce(G({}, me(n)), {
    columnsType: p,
    columnsList: f,
    columnFieldNames: s,
    cancel: g,
    changeHandler: v,
    confirm: b,
    defaultValues: o,
    defaultIndexes: a,
    pickerColumn: l,
    swipeRef: i,
    selectedOptions: r,
    isSameValue: k
  });
}, { create: gf } = W("picker-column"), yf = gf({
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
    const n = Ge(), s = ue({
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
    }), o = P(null), a = P(!1), l = P(0), i = P(0), r = 200, p = 300, f = 15, y = N(() => ({
      transition: `transform ${i.value}ms cubic-bezier(0.17, 0.89, 0.45, 1)`,
      transform: `rotate3d(1, 0, 0, ${l.value})`,
      top: `calc(50% - ${+e.optionHeight / 2}px)`
    })), g = N(() => {
      const { optionHeight: S } = e;
      return {
        transition: `transform ${i.value}ms cubic-bezier(0.17, 0.89, 0.45, 1)`,
        transform: `translate3d(0, ${s.scrollDistance}px, 0)`,
        top: `calc(50% - ${+S / 2}px)`,
        height: `${S}px`
      };
    }), v = (S) => `transform: rotate3d(1, 0, 0, ${-s.rotation * S}deg) translate3d(0px, 0px, 104px)`, b = N(() => ({
      backgroundSize: `100% ${(+e.visibleOptionNum - 1) * +e.optionHeight / 2}px`
    })), k = (S) => {
      if (n.start(S), a.value && !e.taro) {
        const E = o.value, { transform: V } = window.getComputedStyle(E);
        if (e.threeDimensional) {
          const X = Math.floor(parseInt(l.value) / 360), Z = +V.split(", ")[5], F = +V.split(", ")[6] < 0 ? 180 : 0, oe = X * 360 + Math.acos(Z) / Math.PI * 180 + F;
          s.scrollDistance = -Math.abs((oe / s.rotation - 1) * +e.optionHeight);
        } else
          s.scrollDistance = +V.slice(7, V.length - 1).split(", ")[5];
      }
      lt(S, !0), s.touchParams.startY = n.deltaY.value, s.touchParams.startTime = Date.now(), s.transformY = s.scrollDistance;
    }, c = (S) => {
      n.move(S), n.isVertical() && (a.value = !0, lt(S, !0)), s.touchParams.lastY = n.deltaY.value;
      let E = s.touchParams.lastY - s.touchParams.startY;
      T(E);
    }, $ = () => {
      s.touchParams.lastY = n.deltaY.value, s.touchParams.lastTime = Date.now();
      let S = s.touchParams.lastY - s.touchParams.startY, E = s.touchParams.lastTime - s.touchParams.startTime;
      if (E <= p && Math.abs(S) > f) {
        const V = h(S, E);
        T(V, "end", +e.swipeDuration);
        return;
      } else
        T(S, "end");
      setTimeout(() => {
        n.reset(), a.value = !1;
      }, 0);
    }, h = (S, E) => (S = Math.abs(S / E) / 3e-3 * (S < 0 ? -1 : 1), S), w = (S) => S >= s.currIndex + 8 || S <= s.currIndex - 8, I = (S = 0, E, V = r, X) => {
      E === "end" ? i.value = V : i.value = 0, l.value = X, s.scrollDistance = S;
    }, T = (S, E, V) => {
      const { optionHeight: X } = e;
      let Z = S + s.transformY;
      if (E === "end") {
        Z > 0 && (Z = 0), Z < -(e.column.length - 1) * +X && (Z = -(e.column.length - 1) * +X);
        let F = Math.round(Z / +X) * +X, oe = `${(Math.abs(Math.round(F / +X)) + 1) * s.rotation}deg`;
        I(F, E, V, oe), s.currIndex = Math.abs(Math.round(F / +X)) + 1;
      } else {
        let F = 0, oe = (-Z / +X + 1) * s.rotation;
        const q = (e.column.length + 1) * s.rotation, H = 0;
        F = Pe(oe, H, q), H < F && F < q && (I(Z, null, void 0, F + "deg"), s.currIndex = Math.abs(Math.round(Z / +X)) + 1);
      }
    }, Y = () => {
      t("change", e.column[s.currIndex - 1]);
    }, M = (S) => {
      const { column: E } = e;
      let V = E.findIndex((Z) => Z[e.fieldNames.value] === e.value);
      s.currIndex = V === -1 ? 1 : V + 1;
      let X = V === -1 ? 0 : V * +e.optionHeight;
      S && Y(), T(-X);
    }, A = () => {
      a.value = !1, i.value = 0, Y();
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
    }), ce(G(G({}, me(s)), me(e)), {
      setRollerStyle: v,
      isHidden: w,
      roller: o,
      onTouchStart: k,
      onTouchMove: c,
      onTouchEnd: $,
      touchRollerStyle: y,
      touchTileStyle: g,
      setMove: T,
      stopMomentum: A,
      pxCheck: _e,
      maskStyles: b
    });
  }
});
function vf(e, t, n, s, o, a) {
  return u(), d("view", {
    class: "nut-picker__list",
    onTouchstart: t[1] || (t[1] = (...l) => e.onTouchStart && e.onTouchStart(...l)),
    onTouchmove: t[2] || (t[2] = (...l) => e.onTouchMove && e.onTouchMove(...l)),
    onTouchend: t[3] || (t[3] = (...l) => e.onTouchEnd && e.onTouchEnd(...l))
  }, [
    m("view", {
      ref: "roller",
      class: "nut-picker-roller",
      style: L(e.threeDimensional ? e.touchRollerStyle : e.touchTileStyle),
      onTransitionend: t[0] || (t[0] = (...l) => e.stopMomentum && e.stopMomentum(...l))
    }, [
      (u(!0), d(ee, null, re(e.column, (l, i) => {
        var r;
        return u(), d(ee, {
          key: (r = l[e.fieldNames.value]) != null ? r : i
        }, [
          l && l[e.fieldNames.text] && e.threeDimensional ? (u(), d("view", {
            key: 0,
            class: _(["nut-picker-roller-item", { "nut-picker-roller-item-hidden": e.isHidden(i + 1) }]),
            style: L(e.setRollerStyle(i + 1))
          }, B(l[e.fieldNames.text]), 7)) : C("", !0),
          l && l[e.fieldNames.text] && !e.threeDimensional ? (u(), d("view", {
            key: 1,
            class: "nut-picker-roller-item-tile",
            style: L({ height: e.pxCheck(e.optionHeight), lineHeight: e.pxCheck(e.optionHeight) })
          }, B(l[e.fieldNames.text]), 5)) : C("", !0)
        ], 64);
      }), 128))
    ], 36),
    m("view", {
      class: "nut-picker-roller-mask",
      style: L(e.maskStyles)
    }, null, 4)
  ], 32);
}
const $f = /* @__PURE__ */ K(yf, [["render", vf]]), bf = {
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
}, { create: kf } = W("picker"), wf = "NutPicker", Sf = kf({
  components: {
    NutPickerColumn: $f
  },
  props: bf,
  emits: ["cancel", "change", "confirm", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = ke(wf), { changeHandler: s, confirm: o, defaultValues: a, columnsList: l, columnsType: i, columnFieldNames: r, cancel: p } = hf(
      e,
      t
    ), f = P([]), y = (b) => {
      b && f.value.length < l.value.length && f.value.push(b);
    }, g = N(() => {
      const b = {};
      return b.height = `${+e.visibleOptionNum * +e.optionHeight}px`, b["--lineHeight"] = `${+e.optionHeight}px`, b;
    });
    return {
      columnsType: i,
      columnsList: l,
      columnFieldNames: r,
      cancel: p,
      changeHandler: s,
      confirmHandler: () => {
        f.value.length > 0 && f.value.forEach((b) => {
          b.stopMomentum();
        }), o();
      },
      defaultValues: a,
      translate: n,
      pickerColumn: f,
      swipeRef: y,
      columnStyle: g
    };
  }
}), Cf = { class: "nut-picker" }, Tf = {
  key: 0,
  class: "nut-picker__bar"
}, Nf = { class: "nut-picker__title" };
function Df(e, t, n, s, o, a) {
  const l = j("nut-picker-column");
  return u(), d("div", Cf, [
    e.showToolbar ? (u(), d("view", Tf, [
      m("view", {
        class: "nut-picker__left",
        onClick: t[0] || (t[0] = (...i) => e.cancel && e.cancel(...i))
      }, B(e.cancelText || e.translate("cancel")), 1),
      m("view", Nf, B(e.title), 1),
      m("view", {
        class: "nut-picker__right",
        onClick: t[1] || (t[1] = (...i) => e.confirmHandler && e.confirmHandler(...i))
      }, B(e.okText || e.translate("confirm")), 1)
    ])) : C("", !0),
    D(e.$slots, "top"),
    m("view", {
      class: "nut-picker__column",
      style: L(e.columnStyle)
    }, [
      (u(!0), d(ee, null, re(e.columnsList, (i, r) => (u(), d("view", {
        key: r,
        class: "nut-picker__columnitem"
      }, [
        le(l, {
          ref_for: !0,
          ref: e.swipeRef,
          column: i,
          "columns-type": e.columnsType,
          "field-names": e.columnFieldNames,
          value: e.defaultValues && e.defaultValues[r],
          "three-dimensional": e.threeDimensional,
          "swipe-duration": e.swipeDuration,
          "visible-option-num": e.visibleOptionNum,
          "option-height": e.optionHeight,
          onChange: (p) => {
            e.changeHandler(r, p);
          }
        }, null, 8, ["column", "columns-type", "field-names", "value", "three-dimensional", "swipe-duration", "visible-option-num", "option-height", "onChange"])
      ]))), 128))
    ], 4),
    D(e.$slots, "default")
  ]);
}
const ao = /* @__PURE__ */ K(Sf, [["render", Df]]), { create: If } = W("date-picker"), $n = (/* @__PURE__ */ new Date()).getFullYear();
function At(e) {
  return Wo(e) && !isNaN(e.getTime());
}
const _f = {
  day: "日",
  year: "年",
  month: "月",
  hour: "时",
  minute: "分",
  seconds: "秒"
}, Bf = If({
  components: {
    NutPicker: ao
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
      default: () => new Date($n - 10, 0, 1),
      validator: At
    },
    maxDate: {
      type: Date,
      default: () => new Date($n + 10, 11, 31),
      validator: At
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
      At(c) || (c = e.minDate);
      let $ = Math.max(c.getTime(), e.minDate.getTime());
      return $ = Math.min($, e.maxDate.getTime()), new Date($);
    };
    function o(c, $) {
      return 32 - new Date(c, $ - 1, 32).getDate();
    }
    const a = (c, $) => {
      const h = c == "min" ? e.minDate : e.maxDate, w = h.getFullYear();
      let I = 1, T = 1, Y = 0, M = 0;
      c === "max" && (I = 12, T = o($.getFullYear(), $.getMonth() + 1), Y = 23, M = 59);
      let A = M;
      return $.getFullYear() === w && (I = h.getMonth() + 1, $.getMonth() + 1 === I && (T = h.getDate(), $.getDate() === T && (Y = h.getHours(), $.getHours() === Y && (M = h.getMinutes(), $.getMinutes() === M && (A = h.getSeconds()))))), {
        [`${c}Year`]: w,
        [`${c}Month`]: I,
        [`${c}Date`]: T,
        [`${c}Hour`]: Y,
        [`${c}Minute`]: M,
        [`${c}Seconds`]: A
      };
    }, l = N(() => {
      const { maxYear: c, maxDate: $, maxMonth: h, maxHour: w, maxMinute: I, maxSeconds: T } = a("max", n.currentDate), { minYear: Y, minDate: M, minMonth: A, minHour: S, minMinute: E, minSeconds: V } = a("min", n.currentDate);
      return b([
        {
          type: "year",
          range: [Y, c]
        },
        {
          type: "month",
          range: [A, h]
        },
        {
          type: "day",
          range: [M, $]
        },
        {
          type: "hour",
          range: [S, w]
        },
        {
          type: "minute",
          range: [E, I]
        },
        {
          type: "seconds",
          range: [V, T]
        }
      ]);
    }), i = N(() => l.value.map(($, h) => f($.range[0], $.range[1], y($.type), $.type, h))), r = ({
      columnIndex: c,
      selectedValue: $,
      selectedOptions: h
    }) => {
      let w = [];
      $.forEach((A) => {
        w.push(A);
      }), e.type == "month-day" && w.length < 3 && w.unshift(new Date(n.currentDate || e.minDate || e.maxDate).getFullYear()), e.type == "year-month" && w.length < 3 && w.push(new Date(n.currentDate || e.minDate || e.maxDate).getDate());
      const I = Number(w[0]), T = Number(w[1]) - 1, Y = Math.min(Number(w[2]), o(Number(w[0]), Number(w[1])));
      let M = null;
      if (e.type === "date" || e.type === "month-day" || e.type === "year-month")
        M = new Date(I, T, Y);
      else if (e.type === "datetime")
        M = new Date(I, T, Y, Number(w[3]), Number(w[4]));
      else if (e.type === "datehour")
        M = new Date(I, T, Y, Number(w[3]));
      else if (e.type === "hour-minute" || e.type === "time") {
        M = new Date(n.currentDate);
        const A = M.getFullYear(), S = M.getMonth(), E = M.getDate();
        M = new Date(A, S, E, Number(w[0]), Number(w[1]), Number(w[2] || 0));
      }
      n.currentDate = s(M), t("change", { columnIndex: c, selectedValue: $, selectedOptions: h });
    }, p = (c, $) => {
      const { formatter: h, isShowChinese: w } = e;
      let I = null;
      if (h)
        I = h(c, { text: qe($, 2), value: qe($, 2) });
      else {
        const T = qe($, 2), Y = w ? _f[c] : "";
        I = { text: T + Y, value: T };
      }
      return I;
    }, f = (c, $, h, w, I) => {
      const T = [];
      let Y = 0;
      for (; c <= $; )
        T.push(p(w, c)), w === "minute" ? c += e.minuteStep : c++, c <= Number(h) && Y++;
      return n.selectedValue[I] = T[Y].value, e.filter ? e.filter(w, T) : T;
    }, y = (c) => c === "year" ? n.currentDate.getFullYear() : c === "month" ? n.currentDate.getMonth() + 1 : c === "day" ? n.currentDate.getDate() : c === "hour" ? n.currentDate.getHours() : c === "minute" ? n.currentDate.getMinutes() : c === "seconds" ? n.currentDate.getSeconds() : 0, g = (c) => {
      t("cancel", c);
    }, v = (c) => {
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
      const $ = [
        c.getFullYear(),
        c.getMonth() + 1,
        c.getDate(),
        c.getHours(),
        c.getMinutes(),
        c.getSeconds()
      ];
      return b($.map((h) => String(h)));
    };
    return Dn(() => {
      n.currentDate = s(e.modelValue);
    }), Q(
      () => e.modelValue,
      (c) => {
        const $ = s(c);
        JSON.stringify($) === JSON.stringify(n.currentDate) || (n.currentDate = $, n.selectedValue = k($));
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
    ), ce(G({}, me(n)), {
      changeHandler: r,
      closeHandler: g,
      confirm: v,
      columns: i
    });
  }
});
function Mf(e, t, n, s, o, a) {
  const l = j("nut-picker");
  return u(), x(l, {
    modelValue: e.selectedValue,
    "onUpdate:modelValue": t[0] || (t[0] = (i) => e.selectedValue = i),
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
      D(e.$slots, "top")
    ]),
    default: te(() => [
      D(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["modelValue", "ok-text", "cancel-text", "columns", "title", "three-dimensional", "swipe-duration", "show-toolbar", "visible-option-num", "option-height", "onCancel", "onChange", "onConfirm"]);
}
const Ef = /* @__PURE__ */ K(Bf, [["render", Mf]]), { componentName: Lf, create: Pf } = W("input-number"), Af = Pf({
  components: { Minus: ca, Plus: Ba },
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
    const n = N(() => {
      const v = Lf;
      return {
        [v]: !0,
        [`${v}--disabled`]: e.disabled
      };
    }), s = (v) => Number(v).toFixed(Number(e.decimalPlaces)), o = (v) => {
      const b = v.target;
      t("update:modelValue", b.value, v);
    }, a = (v, b) => {
      let k = s(v);
      t("update:modelValue", k, b), Number(e.modelValue) !== Number(k) && t("change", k, b);
    }, l = (v = Number(e.modelValue)) => v < Number(e.max) && !e.disabled, i = (v = Number(e.modelValue)) => v > Number(e.min) && !e.disabled, r = (v) => {
      if (e.disabled)
        return;
      t("reduce", v);
      let b = Number(e.modelValue) - Number(e.step);
      i() && b >= Number(e.min) ? a(b, v) : (a(Number(e.min), v), t("overlimit", v, "reduce"));
    }, p = (v) => {
      if (e.disabled)
        return;
      t("add", v);
      let b = Number(e.modelValue) + Number(e.step);
      l() && b <= Number(e.max) ? a(b, v) : (a(Number(e.max), v), t("overlimit", v, "add"));
    }, f = (v) => {
      e.disabled || e.readonly || t("focus", v);
    }, y = (v) => {
      if (e.disabled || e.readonly)
        return;
      let k = v.target.valueAsNumber;
      k < Number(e.min) ? k = Number(e.min) : k > Number(e.max) && (k = Number(e.max)), a(k, v), t("blur", v);
    }, g = (v) => {
      let b = Number(v);
      return b < Number(e.min) ? b = Number(e.min) : b > Number(e.max) && (b = Number(e.max)), b;
    };
    return Q(
      () => [e.max, e.min],
      () => {
        Number(e.min) > Number(e.max) && console.warn("[NutUI] <InputNumber>", "props.max < props.min");
        const v = g(e.modelValue);
        v !== Number(e.modelValue) && a(v, {});
      }
    ), {
      classes: n,
      change: o,
      blur: y,
      focus: f,
      add: p,
      addAllow: l,
      reduce: r,
      reduceAllow: i,
      pxCheck: _e
    };
  }
}), zf = ["min", "max", "disabled", "readonly", "value"];
function Vf(e, t, n, s, o, a) {
  const l = j("Minus"), i = j("Plus");
  return u(), d("view", {
    class: _(e.classes)
  }, [
    m("view", {
      class: _(["nut-input-number__icon nut-input-number__left", { "nut-input-number__icon--disabled": !e.reduceAllow() }]),
      onClick: t[0] || (t[0] = (...r) => e.reduce && e.reduce(...r))
    }, [
      D(e.$slots, "left-icon", {}, () => [
        le(l, {
          width: e.pxCheck(e.buttonSize),
          height: e.pxCheck(e.buttonSize)
        }, null, 8, ["width", "height"])
      ])
    ], 2),
    m("input", {
      type: "number",
      min: e.min,
      max: e.max,
      style: L({ width: e.pxCheck(e.inputWidth), height: e.pxCheck(e.buttonSize) }),
      disabled: e.disabled,
      readonly: e.readonly,
      value: e.modelValue,
      onInput: t[1] || (t[1] = (...r) => e.change && e.change(...r)),
      onBlur: t[2] || (t[2] = (...r) => e.blur && e.blur(...r)),
      onFocus: t[3] || (t[3] = (...r) => e.focus && e.focus(...r))
    }, null, 44, zf),
    m("view", {
      class: _(["nut-input-number__icon nut-input-number__right", { "nut-input-number__icon--disabled": !e.addAllow() }]),
      onClick: t[4] || (t[4] = (...r) => e.add && e.add(...r))
    }, [
      D(e.$slots, "right-icon", {}, () => [
        le(i, {
          width: e.pxCheck(e.buttonSize),
          height: e.pxCheck(e.buttonSize)
        }, null, 8, ["width", "height"])
      ])
    ], 2)
  ], 2);
}
const Qt = /* @__PURE__ */ K(Af, [["render", Vf]]);
function bn(e, t, n) {
  const s = e.indexOf(t);
  return s === -1 ? e : t === "-" && s !== 0 ? e.slice(0, s) : e.slice(0, s + 1) + e.slice(s).replace(n, "");
}
function Of(e, t = !0, n = !0) {
  t ? e = bn(e, ".", /\./g) : e = e.split(".")[0], n ? e = bn(e, "-", /-/g) : e = e.replace(/-/, "");
  const s = t ? /[^-0-9.]/g : /[^-0-9]/g;
  return e.replace(s, "");
}
function Hf(e) {
  return e === "number" ? {
    type: "text",
    inputmode: "decimal"
  } : e === "digit" ? {
    type: "tel",
    inputmode: "numeric"
  } : { type: e };
}
const { componentName: Rf, create: Ff } = W("input"), Wf = Ff({
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
  components: { MaskClose: sa },
  emits: ["update:modelValue", "blur", "focus", "clear", "keypress", "click", "clickInput", "confirm"],
  expose: ["focus", "blur", "select"],
  setup(e, { emit: t }) {
    const n = P(!1), s = P(), o = () => {
      var M;
      return String((M = e.modelValue) != null ? M : "");
    }, a = (M) => we("input", G({}, Hf(M))), l = ue({
      focused: !1,
      validateFailed: !1,
      // 校验失败
      validateMessage: ""
      // 校验信息
    }), i = N(() => {
      const M = Rf;
      return {
        [M]: !0,
        [`${M}--disabled`]: e.disabled,
        [`${M}--required`]: e.required,
        [`${M}--error`]: e.error,
        [`${M}--border`]: e.border,
        [e.class]: !!e.class
      };
    }), r = N(() => ({
      textAlign: e.inputAlign
    })), p = (M) => {
      if (!M.target.composing) {
        let S = M.target.value;
        e.maxLength && S.length > Number(e.maxLength) && (S = S.slice(0, Number(e.maxLength))), f(S);
      }
    }, f = (M, A = "onChange") => {
      var S;
      if (["number", "digit"].includes(e.type)) {
        const E = e.type === "number";
        M = Of(M, E, E);
      }
      e.formatter && A === e.formatTrigger && (M = e.formatter(M)), ((S = s == null ? void 0 : s.value) == null ? void 0 : S.value) !== M && (s.value.value = M), M !== e.modelValue && t("update:modelValue", M);
    }, y = (M) => {
      e.disabled || e.readonly || (n.value = !0, t("focus", M));
    }, g = (M) => {
      if (e.disabled || e.readonly)
        return;
      setTimeout(() => {
        n.value = !1;
      }, 200);
      let S = M.target.value;
      e.maxLength && S.length > Number(e.maxLength) && (S = S.slice(0, Number(e.maxLength))), f(o(), "onBlur"), t("blur", M);
    }, v = (M) => {
      M.stopPropagation(), !e.disabled && (t("update:modelValue", "", M), t("clear", "", M));
    }, b = () => {
      l.validateFailed && (l.validateFailed = !1, l.validateMessage = "");
    }, k = (M) => {
      e.disabled || t("clickInput", M);
    }, c = (M) => {
      t("click", M);
    }, $ = ({ target: M }) => {
      M.composing = !0;
    }, h = ({ target: M }) => {
      M.composing && (M.composing = !1, M.dispatchEvent(new Event("input")));
    };
    return Q(
      () => e.modelValue,
      () => {
        f(o()), b();
      }
    ), ve(() => {
      f(o(), e.formatTrigger);
    }), {
      renderInput: a,
      inputRef: s,
      active: n,
      classes: i,
      styles: r,
      onInput: p,
      onFocus: y,
      onBlur: g,
      clear: v,
      startComposing: $,
      endComposing: h,
      onClick: c,
      onClickInput: k,
      focus: () => {
        var M;
        (M = s.value) == null || M.focus();
      },
      blur: () => {
        var M;
        (M = s.value) == null || M.blur();
      },
      select: () => {
        var M;
        (M = s.value) == null || M.select();
      },
      onKeyup: (M) => {
        M.key === "Enter" && t("confirm", M);
      },
      getModelValue: o
    };
  }
}), Yf = { class: "nut-input-value" }, jf = { class: "nut-input-inner" }, Kf = {
  key: 0,
  class: "nut-input-left-box"
}, Uf = { class: "nut-input-box" }, Xf = {
  key: 0,
  class: "nut-input-word-limit"
}, qf = { class: "nut-input-word-num" }, Gf = { class: "nut-input-right-box" };
function Zf(e, t, n, s, o, a) {
  const l = j("MaskClose");
  return u(), d("view", {
    class: _(e.classes),
    onClick: t[1] || (t[1] = (...i) => e.onClick && e.onClick(...i))
  }, [
    m("view", Yf, [
      m("view", jf, [
        e.$slots.left ? (u(), d("view", Kf, [
          D(e.$slots, "left")
        ])) : C("", !0),
        m("view", Uf, [
          (u(), x(Ae(e.renderInput(e.type)), {
            ref: "inputRef",
            class: "input-text",
            style: L(e.styles),
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
          e.showWordLimit && e.maxLength ? (u(), d("view", Xf, [
            m("span", qf, B(e.getModelValue() ? e.getModelValue().length : 0), 1),
            ge("/" + B(e.maxLength), 1)
          ])) : C("", !0)
        ]),
        e.clearable && !e.readonly ? Ce((u(), d("view", {
          key: 1,
          class: "nut-input-clear-box",
          onClick: t[0] || (t[0] = (...i) => e.clear && e.clear(...i))
        }, [
          D(e.$slots, "clear", {}, () => [
            le(l, pt({ class: "nut-input-clear" }, e.$attrs, {
              size: e.clearSize,
              width: e.clearSize,
              height: e.clearSize
            }), null, 16, ["size", "width", "height"])
          ])
        ], 512)), [
          [De, (e.active || e.showClearIcon) && e.getModelValue().length > 0]
        ]) : C("", !0),
        m("view", Gf, [
          D(e.$slots, "right")
        ])
      ])
    ])
  ], 2);
}
const Jf = /* @__PURE__ */ K(Wf, [["render", Zf]]), io = Symbol("nut-radio"), { componentName: Xe, create: Qf } = W("radio"), ro = Qf({
  components: {
    CheckNormal: Vt,
    CheckChecked: fn
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
    const { size: n } = me(e);
    let s = Be(io, null);
    const o = N(() => s.label.value === e.label), a = N(() => e.disabled ? "nut-radio__icon--disable" : o.value ? "nut-radio__icon" : "nut-radio__icon--unchecked"), l = () => {
      const { iconSize: y } = e, g = {
        CheckNormal: t.icon ? t.icon : Vt,
        Checked: t.checkedIcon ? t.checkedIcon : fn
      }, v = o.value ? g.Checked : g.CheckNormal, b = _e(y);
      return we(v, {
        width: b,
        height: b,
        class: a.value
      });
    }, i = () => {
      var y;
      return we(
        "view",
        {
          class: `${Xe}__label ${e.disabled ? `${Xe}__label--disabled` : ""}`
        },
        (y = t.default) == null ? void 0 : y.call(t)
      );
    }, r = () => {
      var y;
      return we(
        "view",
        {
          class: `${Xe}__button ${o.value && `${Xe}__button--active`} ${Xe}__button--${n.value} ${e.disabled ? `${Xe}__button--disabled` : ""}`
        },
        (y = t.default) == null ? void 0 : y.call(t)
      );
    }, p = () => {
      o.value || e.disabled || s.updateValue(e.label);
    }, f = N(() => s.position.value === "left");
    return () => we(
      "view",
      {
        class: `${Xe} ${Xe}--${e.shape} ${f.value ? `${Xe}--reverse` : ""}`,
        onClick: p
      },
      [e.shape === "button" ? r() : [l(), i()]]
    );
  }
}), { componentName: kn, create: xf } = W("radio-group"), uo = xf({
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
    return Me(io, {
      label: cn(N(() => e.modelValue)),
      position: cn(N(() => e.textPosition)),
      updateValue: s
    }), Q(
      () => e.modelValue,
      (o) => t("change", o)
    ), () => {
      var o;
      return we(
        "view",
        {
          class: `${kn} ${kn}--${e.direction}`
        },
        (o = n.default) == null ? void 0 : o.call(n)
      );
    };
  }
}), { create: ep } = W("rate"), tp = ep({
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
      default: () => pn
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
  components: { StarFillN: pn },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t, slots: n }) {
    const s = P([]), o = (f) => {
      t("update:modelValue", f), t("change", f);
    }, a = (f, y) => {
      if (e.disabled || e.readonly)
        return;
      let g = 0;
      y === 1 && e.modelValue === y ? g = 0 : (g = y, e.allowHalf && f == 2 && (g -= 0.5)), o(g);
    }, l = (f, y, g) => {
      let v = 0;
      for (let b = y.value.length - 1; b >= 0; b--) {
        const k = y.value[b];
        if (f > k.offsetLeft) {
          g ? v = b + (f > k.offsetLeft + k.clientWidth / 2 ? 1 : 0.5) : v = b + 1;
          break;
        }
      }
      return v;
    }, i = Ge(), r = {
      onTouchStart(f) {
        !e.touchable || e.readonly || i.start(f);
      },
      onTouchMove(f) {
        e.touchable && (i.move(f), i.isHorizontal() && s.value && (f.preventDefault(), o(l(i.moveX.value, s, e.allowHalf))));
      }
    }, p = Math.random().toString(36).slice(-8);
    return ce(G({}, r), {
      onClick: a,
      pxCheck: _e,
      rateRefs: s,
      refRandomId: p,
      renderIcon: st,
      slots: n
    });
  }
}), np = ["id"], op = { class: "nut-rate-item__icon--full" }, lp = {
  key: 0,
  class: "nut-rate-item__icon--half"
}, sp = {
  key: 1,
  class: "nut-rate-item__icon--half"
};
function ap(e, t, n, s, o, a) {
  return u(), d("view", {
    class: "nut-rate",
    onTouchstart: t[0] || (t[0] = (...l) => e.onTouchStart && e.onTouchStart(...l)),
    onTouchmove: t[1] || (t[1] = (...l) => e.onTouchMove && e.onTouchMove(...l))
  }, [
    (u(!0), d(ee, null, re(Number(e.count), (l) => (u(), d("view", {
      id: "rateRefs-" + e.refRandomId + l,
      key: l,
      ref_for: !0,
      ref: "rateRefs",
      class: "nut-rate-item",
      style: L(l < Number(e.count) ? { marginRight: e.pxCheck(e.spacing) } : {})
    }, [
      m("view", op, [
        (u(), x(Ae(
          e.renderIcon(e.customIcon, {
            width: e.size,
            height: e.size,
            size: e.size,
            color: l <= Number(e.modelValue) ? e.activeColor : e.voidColor
          })
        ), {
          class: _(["nut-rate-item__icon", { "nut-rate-item__icon--disabled": e.disabled || l > Number(e.modelValue) }]),
          onClick: (i) => e.onClick(1, l)
        }, null, 8, ["class", "onClick"]))
      ]),
      e.allowHalf && Number(e.modelValue) + 1 > l ? (u(), d("view", lp, [
        (u(), x(Ae(
          e.renderIcon(e.customIcon, {
            width: e.size,
            height: e.size,
            size: e.size,
            color: l <= Number(e.modelValue) + 1 ? e.activeColor : e.voidColor
          })
        ), {
          class: "nut-rate-item__icon",
          onClick: (i) => e.onClick(2, l)
        }, null, 8, ["onClick"]))
      ])) : e.allowHalf && Number(e.modelValue) + 1 < l ? (u(), d("view", sp, [
        (u(), x(Ae(e.renderIcon(e.customIcon, { width: e.size, height: e.size, size: e.size, color: e.voidColor })), {
          class: "nut-rate-item__icon nut-rate-item__icon--disabled",
          onClick: (i) => e.onClick(2, l)
        }, null, 8, ["onClick"]))
      ])) : C("", !0)
    ], 12, np))), 128))
  ], 32);
}
const co = /* @__PURE__ */ K(tp, [["render", ap]]), { create: ip } = W("short-password"), rp = "NutShortPassword", up = ip({
  components: {
    NutPopup: Ee,
    Tips: Hn
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
    const n = ke(rp), s = P(e.modelValue), o = N(() => r(Number(e.length))), a = P(e.visible), l = (f) => {
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
        s.value = f, String(f).length === o.value && t("complete", f);
      }
    );
    const i = () => {
      t("update:visible", !1), t("close");
    }, r = (f) => Math.min(Math.max(4, f), 6);
    return {
      comLen: o,
      realInput: s,
      onTouchStart: l,
      range: r,
      close: i,
      onTips: () => {
        t("tips");
      },
      show: a,
      translate: n
    };
  }
}), cp = { class: "nut-short-password-title" }, dp = { class: "nut-short-password-subtitle" }, fp = { class: "nut-short-password-wrapper" }, pp = {
  key: 0,
  class: "nut-short-password__item-icon"
}, mp = { class: "nut-short-password__message" }, hp = { class: "nut-short-password--error" }, gp = {
  key: 0,
  class: "nut-short-password--forget"
};
function yp(e, t, n, s, o, a) {
  const l = j("tips"), i = j("nut-popup");
  return u(), d("view", null, [
    le(i, {
      visible: e.show,
      "onUpdate:visible": t[2] || (t[2] = (r) => e.show = r),
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
        m("view", cp, B(e.title || e.translate("title")), 1),
        m("view", dp, B(e.desc || e.translate("desc")), 1),
        m("div", fp, [
          m("view", {
            class: "nut-short-password__list",
            onTouchstart: t[0] || (t[0] = (...r) => e.onTouchStart && e.onTouchStart(...r))
          }, [
            (u(!0), d(ee, null, re(new Array(e.comLen), (r, p) => (u(), d("view", {
              key: p,
              class: "nut-short-password__item"
            }, [
              String(e.realInput).length > p ? (u(), d("view", pp)) : C("", !0)
            ]))), 128))
          ], 32)
        ]),
        m("view", mp, [
          m("view", hp, B(e.errorMsg), 1),
          e.tips || e.translate("tips") ? (u(), d("view", gp, [
            le(l, {
              class: "icon",
              width: "11px",
              height: "11px"
            }),
            m("view", {
              onClick: t[1] || (t[1] = (...r) => e.onTips && e.onTips(...r))
            }, B(e.tips || e.translate("tips")), 1)
          ])) : C("", !0)
        ])
      ]),
      _: 1
    }, 8, ["visible", "close-on-click-overlay", "lock-scroll", "onClickCloseIcon", "onClickOverlay"])
  ]);
}
const vp = /* @__PURE__ */ K(up, [["render", yp]]), { create: $p } = W("textarea"), bp = "NutTextarea", kp = $p({
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
    const n = ke(bp), s = P(), o = N(() => {
      const v = "nut-textarea";
      return {
        [v]: !0,
        [`${v}--disabled`]: e.disabled
      };
    });
    ve(() => {
      e.modelValue && i(String(e.modelValue)), e.autosize && Te(l);
    });
    const a = N(() => ({
      textAlign: e.textAlign
      // resize: props.autosize ? 'vertical' : 'none'
    })), l = () => {
      let v = s.value;
      v.style.height = "auto";
      let b = v.scrollHeight;
      if (typeof e.autosize == "object") {
        const { maxHeight: k, minHeight: c } = e.autosize;
        k !== void 0 && (b = Math.min(b, k)), c !== void 0 && (b = Math.max(b, c));
      }
      b && (v.style.height = b + "px");
    };
    Q(
      () => e.modelValue,
      () => {
        e.autosize && Te(l);
      }
    );
    const i = (v, b) => {
      e.maxLength && v.length > Number(e.maxLength) && (v = v.substring(0, Number(e.maxLength))), t("update:modelValue", v, b), t("change", v, b);
    };
    return {
      textareaRef: s,
      classes: o,
      styles: a,
      change: (v) => {
        if (!v.target.composing) {
          const b = v.target;
          let k = b.value;
          e.maxLength && k.length > Number(e.maxLength) && (k = k.slice(0, Number(e.maxLength))), i(b.value, v);
        }
      },
      focus: (v) => {
        e.disabled || e.readonly || t("focus", v);
      },
      blur: (v) => {
        if (e.disabled || e.readonly)
          return;
        let k = v.target.value;
        i(k, v), t("blur", { value: k, event: v });
      },
      translate: n,
      startComposing: ({ target: v }) => {
        v.composing = !0;
      },
      endComposing: ({ target: v }) => {
        v.composing && (v.composing = !1, v.dispatchEvent(new Event("input")));
      }
    };
  }
}), wp = ["rows", "disabled", "readonly", "value", "maxlength", "placeholder", "autofocus"], Sp = {
  key: 0,
  class: "nut-textarea__limit"
};
function Cp(e, t, n, s, o, a) {
  return u(), d("view", {
    class: _(e.classes)
  }, [
    m("textarea", {
      ref: "textareaRef",
      class: "nut-textarea__textarea",
      style: L(e.styles),
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
    }, null, 44, wp),
    e.limitShow ? (u(), d("view", Sp, B(e.modelValue ? e.modelValue.length : 0) + "/" + B(e.maxLength), 1)) : C("", !0)
  ], 2);
}
const Tp = /* @__PURE__ */ K(kp, [["render", Cp]]);
class Np {
  constructor() {
    z(this, "url", "");
    z(this, "name", "file");
    z(this, "fileType", "image");
    z(this, "formData");
    z(this, "sourceFile");
    z(this, "method", "post");
    z(this, "xhrState", 200);
    z(this, "timeout", 30 * 1e3);
    z(this, "headers", {});
    z(this, "withCredentials", !1);
    z(this, "onStart");
    z(this, "taroFilePath");
    z(this, "onProgress");
    z(this, "onSuccess");
    z(this, "onFailure");
    z(this, "beforeXhrUpload");
  }
}
let Dp = class {
  constructor(t) {
    z(this, "options");
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
class Ip {
  constructor() {
    z(this, "status", "ready");
    z(this, "message", "");
    z(this, "uid", (/* @__PURE__ */ new Date()).getTime().toString());
    z(this, "name");
    z(this, "url");
    z(this, "type");
    z(this, "path");
    z(this, "percentage", 0);
    z(this, "formData", {});
  }
}
const { create: _p } = W("progress"), Bp = _p({
  components: { Checked: An },
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
    const t = !!Qe().default, n = N(() => {
      if (e.strokeWidth)
        return e.strokeWidth + "px";
    }), s = N(() => Number(e.percentage) >= 100 ? 100 : Number(e.percentage)), o = N(() => ({
      width: s.value + "%",
      background: e.strokeColor || ""
    })), a = N(() => ({
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
}), Mp = { class: "nut-progress" };
function Ep(e, t, n, s, o, a) {
  const l = j("Checked");
  return u(), d("div", Mp, [
    m("div", {
      class: _(["nut-progress-outer", [e.showText && !e.textInside ? "nut-progress-outer-part" : "", e.size ? "nut-progress-" + e.size : ""]]),
      style: L({ height: e.height })
    }, [
      m("div", {
        class: _(["nut-progress-inner", e.status === "active" ? "nut-active" : ""]),
        style: L(e.bgStyle)
      }, null, 6),
      e.showText && e.textInside && !e.slotDefault ? (u(), d("div", {
        key: 0,
        class: "nut-progress-text nut-progress-insidetext",
        style: L({
          lineHeight: e.height,
          left: `${e.percentage}%`,
          transform: `translate(-${+e.percentage}%,-50%)`,
          background: e.textBackground || e.strokeColor
        })
      }, [
        m("span", {
          style: L(e.textStyle)
        }, B(e.percentage) + B(e.isShowPercentage ? "%" : ""), 5)
      ], 4)) : C("", !0),
      e.showText && e.textInside && e.slotDefault ? (u(), d("div", {
        key: 1,
        class: "nut-progress-slot",
        style: L({
          position: "absolute",
          top: "50%",
          left: `${e.percentage}%`,
          transform: `translate(-${+e.percentage}%,-50%)`
        })
      }, [
        D(e.$slots, "default")
      ], 4)) : C("", !0)
    ], 6),
    e.showText && !e.textInside ? (u(), d("div", {
      key: 0,
      class: "nut-progress-text",
      style: L({ lineHeight: e.height })
    }, [
      e.status === "text" || e.status === "active" ? (u(), d("span", {
        key: 0,
        style: L(e.textStyle)
      }, B(e.percentage) + B(e.isShowPercentage ? "%" : ""), 5)) : e.status === "icon" ? D(e.$slots, "icon-name", { key: 1 }, () => [
        le(l, {
          width: "15px",
          height: "15px",
          color: "#439422"
        })
      ]) : C("", !0)
    ], 4)) : C("", !0)
  ]);
}
const fo = /* @__PURE__ */ K(Bp, [["render", Ep]]), { create: Lp } = W("uploader"), Pp = "NutUploader", Ap = Lp({
  components: {
    NutProgress: fo,
    Photograph: Ta,
    Failure: On,
    Loading: xe,
    Del: zn,
    Link: As
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
    const n = ke(Pp), s = P(e.fileList), o = P([]);
    Q(
      () => e.fileList,
      () => {
        s.value = e.fileList;
      }
    );
    const a = () => {
      let $ = {
        class: "nut-uploader__input",
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        name: e.name,
        disabled: e.disabled
      };
      return e.capture && ($.capture = "camera", $.accept || ($.accept = "image/*")), we("input", $);
    }, l = ($) => {
      $.value = "";
    }, i = ($) => {
      t("fileItemClick", { fileItem: $ });
    }, r = ($, h) => {
      const w = new Np();
      w.url = e.url, w.formData = $.formData, w.timeout = e.timeout * 1, w.method = e.method, w.xhrState = e.xhrState, w.headers = e.headers, w.withCredentials = e.withCredentials, w.beforeXhrUpload = e.beforeXhrUpload;
      try {
        w.sourceFile = $.formData.get(e.name);
      } catch (T) {
        console.warn("[NutUI] <Uploader> formData.get(name)", T);
      }
      w.onStart = (T) => {
        $.status = "ready", $.message = n("readyUpload"), p(h), t("start", T);
      }, w.onProgress = (T, Y) => {
        $.status = "uploading", $.message = n("uploading"), $.percentage = (T.loaded / T.total * 100).toFixed(0), t("progress", { event: T, option: Y, percentage: $.percentage });
      }, w.onSuccess = (T, Y) => {
        $.status = "success", $.message = n("success"), t("success", {
          responseText: T,
          option: Y,
          fileItem: $
        }), t("update:fileList", s.value);
      }, w.onFailure = (T, Y) => {
        $.status = "error", $.message = n("error"), t("failure", {
          responseText: T,
          option: Y,
          fileItem: $
        });
      };
      let I = new Dp(w);
      e.autoUpload ? I.upload() : o.value.push(
        new Promise((T) => {
          T(I);
        })
      );
    }, p = ($ = -1) => {
      $ > -1 ? o.value.splice($, 1) : (o.value = [], s.value = [], t("update:fileList", s.value));
    }, f = () => {
      Promise.all(o.value).then(($) => {
        $.forEach((h) => h.upload());
      });
    }, y = ($) => {
      $.forEach((h, w) => {
        const I = new FormData();
        for (const [Y, M] of Object.entries(e.data))
          I.append(Y, M);
        I.append(e.name, h);
        const T = ue(new Ip());
        if (T.name = h.name, T.status = "ready", T.type = h.type, T.formData = I, T.message = n("waitingUpload"), r(T, w), e.isPreview && h.type.includes("image")) {
          const Y = new FileReader();
          Y.onload = (M) => {
            T.url = M.target.result, s.value.push(T);
          }, Y.readAsDataURL(h);
        } else
          s.value.push(T);
      });
    }, g = ($) => {
      const h = e.maximum * 1, w = e.maximize * 1, I = new Array();
      $ = $.filter((Y) => Y.size > w ? (I.push(Y), !1) : !0), I.length && t("oversize", I);
      let T = $.length + s.value.length;
      return T > h && $.splice($.length - (T - h)), $;
    }, v = ($, h) => {
      s.value.splice(h, 1), t("delete", {
        file: $,
        fileList: s.value,
        index: h
      });
    }, b = ($, h) => {
      p(h), Kt(e.beforeDelete, {
        args: [$, s.value],
        done: () => v($, h)
      });
    }, k = ($) => {
      if (e.disabled)
        return;
      const h = $.target;
      let { files: w } = h;
      e.beforeUpload ? e.beforeUpload(w).then((I) => c(I)) : c(w), t("change", {
        fileList: s.value,
        event: $
      }), e.clearInput && l(h);
    }, c = ($) => {
      const h = g(new Array().slice.call($));
      y(h);
    };
    return {
      onChange: k,
      onDelete: b,
      fileList: s,
      fileItemClick: i,
      clearUploadQueue: p,
      submit: f,
      renderInput: a
    };
  }
}), zp = { class: "nut-uploader" }, Vp = {
  key: 0,
  class: "nut-uploader__slot"
}, Op = {
  key: 0,
  class: "nut-uploader__preview-img"
}, Hp = {
  key: 0,
  class: "nut-uploader__preview__progress"
}, Rp = { class: "nut-uploader__preview__progress__msg" }, Fp = ["onClick"], Wp = ["src", "onClick"], Yp = {
  key: 3,
  class: "nut-uploader__preview-img__file"
}, jp = ["onClick"], Kp = { class: "file__name_tips" }, Up = { class: "tips" }, Xp = {
  key: 1,
  class: "nut-uploader__preview-list"
}, qp = ["onClick"], Gp = { class: "file__name_tips" };
function Zp(e, t, n, s, o, a) {
  const l = j("Failure"), i = j("Loading"), r = j("Link"), p = j("Del"), f = j("nut-progress"), y = j("Photograph");
  return u(), d("view", zp, [
    e.$slots.default ? (u(), d("view", Vp, [
      D(e.$slots, "default"),
      Number(e.maximum) - e.fileList.length ? (u(), x(Ae(e.renderInput), {
        key: 0,
        onChange: e.onChange
      }, null, 40, ["onChange"])) : C("", !0)
    ])) : C("", !0),
    (u(!0), d(ee, null, re(e.fileList, (g, v) => {
      var b;
      return u(), d("view", {
        key: g.uid,
        class: _(["nut-uploader__preview", [e.listType]])
      }, [
        e.listType == "picture" && !e.$slots.default ? (u(), d("view", Op, [
          g.status != "success" ? (u(), d("view", Hp, [
            g.status != "ready" ? (u(), d(ee, { key: 0 }, [
              g.status == "error" ? (u(), x(l, {
                key: 0,
                color: "#fff"
              })) : (u(), x(i, {
                key: 1,
                name: "loading",
                color: "#fff"
              }))
            ], 64)) : C("", !0),
            m("view", Rp, B(g.message), 1)
          ])) : C("", !0),
          e.isDeletable ? (u(), d("view", {
            key: 1,
            class: "close",
            onClick: (k) => e.onDelete(g, v)
          }, [
            D(e.$slots, "delete-icon", {}, () => [
              le(l)
            ])
          ], 8, Fp)) : C("", !0),
          (b = g == null ? void 0 : g.type) != null && b.includes("image") && g.url ? (u(), d("img", {
            key: 2,
            class: "nut-uploader__preview-img__c",
            src: g.url,
            onClick: (k) => e.fileItemClick(g)
          }, null, 8, Wp)) : (u(), d("view", Yp, [
            m("view", {
              class: "nut-uploader__preview-img__file__name",
              onClick: (k) => e.fileItemClick(g)
            }, [
              m("view", Kp, B(g.name), 1)
            ], 8, jp)
          ])),
          m("view", Up, B(g.name), 1)
        ])) : e.listType == "list" ? (u(), d("view", Xp, [
          m("view", {
            class: _(["nut-uploader__preview-img__file__name", [g.status]]),
            onClick: (k) => e.fileItemClick(g)
          }, [
            le(r, { class: "nut-uploader__preview-img__file__link" }),
            m("view", Gp, B(g.name), 1),
            e.isDeletable ? (u(), x(p, {
              key: 0,
              color: "#808080",
              class: "nut-uploader__preview-img__file__del",
              onClick: (k) => e.onDelete(g, v)
            }, null, 8, ["onClick"])) : C("", !0)
          ], 10, qp),
          g.status == "uploading" ? (u(), x(f, {
            key: 0,
            size: "small",
            percentage: g.percentage,
            "stroke-color": "linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)",
            "show-text": !1
          }, null, 8, ["percentage"])) : C("", !0)
        ])) : C("", !0)
      ], 2);
    }), 128)),
    e.listType == "picture" && !e.$slots.default && Number(e.maximum) - e.fileList.length ? (u(), d("view", {
      key: 1,
      class: _(["nut-uploader__upload", [e.listType]])
    }, [
      D(e.$slots, "upload-icon", {}, () => [
        le(y, { color: "#808080" })
      ]),
      (u(), x(Ae(e.renderInput), { onChange: e.onChange }, null, 40, ["onChange"]))
    ], 2)) : C("", !0)
  ]);
}
const Jp = /* @__PURE__ */ K(Ap, [["render", Zp]]), { create: Qp } = W("number-keyboard"), xp = "NutNumberKeyboard", e1 = Qp({
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
    const n = ke(xp), s = P(void 0), o = P(e.visible), a = P();
    function l() {
      const { customKey: c } = e;
      let $ = {
        id: "lock",
        type: "lock"
      }, h = Array.isArray(c) ? c : [c];
      return h.length === 1 && ($ = {
        id: h[0],
        type: "custom"
      }), [...i(), $, { id: 0, type: "number" }, { id: "delete", type: "delete" }];
    }
    function i() {
      const c = [];
      for (let $ = 1; $ <= 9; $++)
        c.push({ id: $, type: "number" });
      return e.randomKeys ? c.sort(() => Math.random() > 0.5 ? 1 : -1) : c;
    }
    function r() {
      const c = i(), { customKey: $ } = e;
      let h = Array.isArray($) ? $ : [$];
      return h.length > 2 && (h = [h[0], h[1]]), h.length == 2 && e.title && e.type != "rightColumn" && (h = [h[0]]), h.length === 1 ? e.title && e.type != "rightColumn" ? c.push({ id: h[0], type: "custom" }, { id: 0, type: "number" }, { id: "delete", type: "delete" }) : c.push({ id: 0, type: "number" }, { id: h[0], type: "custom" }) : h.length === 2 && c.push(
        { id: h[0], type: "custom" },
        { id: 0, type: "number" },
        { id: h[1], type: "custom" }
      ), c;
    }
    const p = N(() => e.type == "rightColumn" || e.title != "" ? r() : l()), f = () => {
      e.visible && t("blur");
    }, y = (c) => {
      const $ = a.value;
      $ && !$.contains(c.target) && f();
    };
    Q(
      () => e.visible,
      (c) => {
        o.value = c, c ? window.addEventListener("touchstart", y, !1) : window.removeEventListener("touchstart", y, !1);
      }
    );
    function g(c, $) {
      $.stopPropagation(), s.value = c.id, (c.type == "number" || c.type == "custom") && (t("input", c.id), e.modelValue.length < +e.maxlength && t("update:modelValue", e.modelValue + c.id)), c.type == "lock" && k(), c.type == "delete" && (t("delete"), t("update:modelValue", e.modelValue.slice(0, e.modelValue.length - 1)));
    }
    function v(c) {
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
      defaultKey: l,
      closeBoard: k,
      onTouchEnd: b,
      onTouchMove: v,
      onTouchstart: g,
      keysList: p,
      genCustomKeys: r,
      getBasicKeys: i,
      root: a,
      show: o,
      translate: n
    };
  }
}), t1 = { ref: "root" }, n1 = { class: "nut-number-keyboard" }, o1 = {
  key: 0,
  class: "nut-number-keyboard__header"
}, l1 = { class: "nut-number-keyboard__title" }, s1 = { class: "nut-number-keyboard__body" }, a1 = { class: "nut-number-keyboard__keys" }, i1 = ["onTouchstart"], r1 = {
  key: 1,
  src: "https://img11.360buyimg.com/imagetools/jfs/t1/146371/38/8485/738/5f606425Eca239740/14f4b4f5f20d8a68.png"
}, u1 = {
  key: 2,
  src: "https://img11.360buyimg.com/imagetools/jfs/t1/129395/8/12735/2030/5f61ac37E70cab338/fb477dc11f46056c.png"
}, c1 = {
  key: 0,
  class: "nut-number-keyboard__sidebar"
}, d1 = { class: "nut-key__wrapper" }, f1 = /* @__PURE__ */ m("img", { src: "https://img11.360buyimg.com/imagetools/jfs/t1/129395/8/12735/2030/5f61ac37E70cab338/fb477dc11f46056c.png" }, null, -1), p1 = [
  f1
];
function m1(e, t, n, s, o, a) {
  const l = j("nut-popup");
  return u(), d("div", t1, [
    le(l, {
      visible: e.show,
      "onUpdate:visible": t[7] || (t[7] = (i) => e.show = i),
      position: "bottom",
      "pop-class": e.popClass,
      overlay: !1,
      "lock-scroll": e.lockScroll,
      "teleport-disable": !1
    }, {
      default: te(() => [
        m("div", n1, [
          e.title ? (u(), d("div", o1, [
            m("h3", l1, B(e.title), 1),
            e.type == "default" ? (u(), d("span", {
              key: 0,
              class: "nut-number-keyboard__close",
              onClick: t[0] || (t[0] = (i) => e.closeBoard())
            }, B(e.translate("done")), 1)) : C("", !0)
          ])) : C("", !0),
          m("div", s1, [
            m("div", a1, [
              (u(!0), d(ee, null, re(e.keysList, (i) => (u(), d("div", {
                key: "key" + i.id,
                class: _([
                  "nut-key__wrapper",
                  {
                    "nut-key__wrapper--wider": i.id == 0 && e.type == "rightColumn" && Array.isArray(e.customKey) && e.customKey.length == 1
                  }
                ])
              }, [
                m("div", {
                  class: _([
                    "nut-key",
                    { "nut-key--active": i.id == e.clickKeyIndex },
                    { "nut-key--lock": i.type == "lock" },
                    { "nut-key--delete": i.type == "delete" }
                  ]),
                  onTouchstart: (r) => e.onTouchstart(i, r),
                  onTouchmove: t[1] || (t[1] = (r) => e.onTouchMove(r)),
                  onTouchend: t[2] || (t[2] = (r) => e.onTouchEnd(r))
                }, [
                  i.type == "number" || i.type == "custom" ? (u(), d(ee, { key: 0 }, [
                    ge(B(i.id), 1)
                  ], 64)) : C("", !0),
                  i.type == "lock" ? (u(), d("img", r1)) : C("", !0),
                  i.type == "delete" ? (u(), d("img", u1)) : C("", !0)
                ], 42, i1)
              ], 2))), 128))
            ]),
            e.type == "rightColumn" ? (u(), d("div", c1, [
              m("div", d1, [
                m("div", {
                  class: _(["nut-key", { active: e.clickKeyIndex == "delete" }]),
                  onTouchstart: t[3] || (t[3] = (i) => e.onTouchstart({ id: "delete", type: "delete" }, i)),
                  onTouchmove: t[4] || (t[4] = (i) => e.onTouchMove(i)),
                  onTouchend: t[5] || (t[5] = (...i) => e.onTouchEnd && e.onTouchEnd(...i))
                }, p1, 34)
              ]),
              m("div", {
                class: "nut-key__wrapper nut-key__wrapper--finish",
                onClick: t[6] || (t[6] = (i) => e.closeBoard())
              }, [
                m("div", {
                  class: _(["nut-key", "nut-key--finish ", { activeFinsh: e.clickKeyIndex == "finish" }])
                }, B(e.confirmText || e.translate("done")), 3)
              ])
            ])) : C("", !0)
          ])
        ])
      ]),
      _: 1
    }, 8, ["visible", "pop-class", "lock-scroll"])
  ], 512);
}
const h1 = /* @__PURE__ */ K(e1, [["render", m1]]), po = Symbol("nut-form"), g1 = (e) => ({
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
    const { children: s, linkChildren: o } = Rn(po);
    o({ props: t });
    const a = N(() => ue({}));
    Me("formErrorTip", a);
    const l = () => {
      Object.keys(a.value).forEach((v) => {
        a.value[v] = "";
      });
    }, i = () => {
      l();
    };
    Q(
      () => t.modelValue,
      () => {
        l();
      },
      { immediate: !0 }
    );
    const r = () => {
      const v = [];
      return s.forEach((b) => {
        v.push({
          prop: b == null ? void 0 : b.prop,
          rules: (b == null ? void 0 : b.rules) || []
        });
      }), v;
    }, p = (v) => {
      v.message && n("validate", v), a.value[v.prop] = v.message;
    }, f = (v) => Ue(this, null, function* () {
      const { rules: b, prop: k } = v, c = (T) => new Promise((Y, M) => {
        try {
          p(T), Y(T);
        } catch (A) {
          M(A);
        }
      });
      k || console.warn("[NutUI] <FormItem> 使用 rules 校验规则时 , 必须设置 prop 参数");
      const $ = zt(t.modelValue, k || "");
      p({ prop: k, message: "" });
      const h = t.rules || {}, w = [...(h == null ? void 0 : h[k]) || [], ...b];
      for (; w.length; ) {
        const I = w.shift(), { validator: Y } = I, M = Pt(I, ["validator"]), { required: A, regex: S, message: E } = M, V = { prop: k, message: E || "" };
        if (A && !$ && $ !== 0 || S && !S.test(String($)))
          return c(V);
        if (Y) {
          const X = Y($, M);
          if (Bn(X))
            try {
              if ((yield X) === !1)
                return c(V);
            } catch (Z) {
              return c({ prop: k, message: Z });
            }
          else if (!X)
            return c(V);
        }
      }
      return Promise.resolve(!0);
    }), y = (v = "") => new Promise((b, k) => {
      try {
        const $ = r().map((h) => v && v !== h.prop ? Promise.resolve(!0) : f(h));
        Promise.all($).then((h) => {
          h = h.filter((I) => I !== !0);
          const w = { valid: !0, errors: [] };
          h.length && (w.valid = !1, w.errors = h), b(w);
        });
      } catch (c) {
        k(c);
      }
    });
    return { validate: y, reset: i, submit: () => (y(), !1), formErrorTip: a };
  }
}), { create: y1 } = W("form"), v1 = y1(
  g1({
    NutCellGroup: Yn
  })
);
function $1(e, t, n, s, o, a) {
  const l = j("nut-cell-group");
  return u(), d("form", {
    class: "nut-form",
    action: "#",
    onSubmit: Ne(() => !1, ["prevent"])
  }, [
    le(l, null, {
      default: te(() => [
        D(e.$slots, "default")
      ]),
      _: 3
    })
  ], 32);
}
const mo = /* @__PURE__ */ K(v1, [["render", $1]]), { create: b1 } = W("form-item"), k1 = b1({
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
    NutCell: Wn
  },
  setup(e, { slots: t }) {
    const { parent: n } = Fn(po), s = N(() => {
      var v;
      const y = (v = n.props) == null ? void 0 : v.rules;
      let g = !1;
      for (const b in y)
        Object.prototype.hasOwnProperty.call(y, b) && b === e.prop && Array.isArray(y[b]) && (g = y[b].some((k) => k.required));
      return e.required || e.rules.some((b) => b.required) || g;
    }), o = N(() => {
      const y = n.props.labelPosition, g = e.labelPosition ? e.labelPosition : y;
      return g !== "left" ? `nut-form-item__${g}` : "";
    }), a = N(() => {
      const y = n.props.starPosition, g = e.starPosition ? e.starPosition : y;
      return g !== "left" ? `nut-form-item__star-${g}` : "";
    }), l = Be("formErrorTip"), i = N(() => ({
      width: _e(e.labelWidth),
      textAlign: e.labelAlign
    })), r = N(() => ({
      textAlign: e.bodyAlign
    })), p = N(() => ({
      textAlign: e.errorMessageAlign
    }));
    return {
      parent: l,
      labelStyle: i,
      bodyStyle: r,
      errorMessageStyle: p,
      getSlots: (y) => t[y],
      isRequired: s,
      labelPositionClass: o,
      starPositionClass: a
    };
  }
}), w1 = { class: "nut-cell__value nut-form-item__body" };
function S1(e, t, n, s, o, a) {
  const l = j("nut-cell");
  return u(), x(l, {
    class: _(["nut-form-item", [{ error: e.parent[e.prop], line: e.showErrorLine }, e.$attrs.class, e.labelPositionClass]]),
    style: L(e.$attrs.style)
  }, {
    default: te(() => [
      e.label || e.getSlots("label") ? (u(), d("view", {
        key: 0,
        class: _(["nut-cell__title nut-form-item__label", { required: e.isRequired, [e.starPositionClass]: e.starPositionClass }]),
        style: L(e.labelStyle)
      }, [
        D(e.$slots, "label", {}, () => [
          ge(B(e.label), 1)
        ])
      ], 6)) : C("", !0),
      m("view", w1, [
        m("view", {
          class: "nut-form-item__body__slots",
          style: L(e.bodyStyle)
        }, [
          D(e.$slots, "default")
        ], 4),
        e.parent[e.prop] && e.showErrorMessage ? (u(), d("view", {
          key: 0,
          class: "nut-form-item__body__tips",
          style: L(e.errorMessageStyle)
        }, B(e.parent[e.prop]), 5)) : C("", !0)
      ])
    ]),
    _: 3
  }, 8, ["class", "style"]);
}
const ho = /* @__PURE__ */ K(k1, [["render", S1]]), go = Symbol("nut-swipe"), { create: C1 } = W("swipe"), T1 = C1({
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
    const n = (I) => {
      var T;
      return ((T = I.value) == null ? void 0 : T.getBoundingClientRect().width) || 0;
    }, s = P(!1), o = P(), a = N(() => n(o)), l = P(), i = N(() => n(l)), r = Be(go, null);
    Q(
      () => {
        var I;
        return (I = r == null ? void 0 : r.name) == null ? void 0 : I.value;
      },
      (I) => {
        e.name !== I && r && r.lock && b();
      }
    );
    const p = P(!1);
    let f = "", y = "";
    const g = ue({
      offset: 0,
      moving: !1
    }), v = (I = "") => {
      r && r.update(e.name), p.value = !0, I && (g.offset = I === "left" ? -i.value : a.value), t("open", {
        name: e.name,
        position: f || I
      });
    }, b = () => {
      g.offset = 0, p.value && (p.value = !1, t("close", {
        name: e.name,
        position: f
      }));
    }, k = (I, T, Y) => {
      Y ? I.stopPropagation() : b(), t("click", T);
    }, c = N(() => ({
      transform: `translate3d(${g.offset}px, 0, 0)`
    })), $ = (I) => {
      f = I > 0 ? "right" : "left";
      let T = I;
      switch (f) {
        case "left":
          p.value && y === f ? T = -i.value : T = Math.abs(I) > i.value ? -i.value : I;
          break;
        case "right":
          p.value && y === f ? T = a.value : T = Math.abs(I) > a.value ? a.value : I;
          break;
      }
      g.offset = T;
    }, h = Ge();
    return ce(G({
      touchStyle: c
    }, {
      onTouchStart(I) {
        e.disabled || h.start(I);
      },
      onTouchMove(I) {
        e.disabled || (h.move(I), h.isHorizontal() && (s.value = !0, g.moving = !0, $(h.deltaX.value), e.touchMovePreventDefault && I.preventDefault(), e.touchMoveStopPropagation && I.stopPropagation()));
      },
      onTouchEnd() {
        if (g.moving) {
          switch (g.moving = !1, y = f, f) {
            case "left":
              Math.abs(g.offset) <= i.value / 2 ? b() : (g.offset = -i.value, v());
              break;
            case "right":
              Math.abs(g.offset) <= a.value / 2 ? b() : (g.offset = a.value, v());
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
      open: v,
      close: b,
      onClick: k,
      lockClick: s
    });
  }
});
function N1(e, t, n, s, o, a) {
  return u(), d("view", {
    class: "nut-swipe",
    style: L(e.touchStyle),
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
      D(e.$slots, "left")
    ], 512),
    m("view", {
      class: "nut-swipe__content",
      onClick: t[1] || (t[1] = (l) => e.onClick(l, "content", e.lockClick))
    }, [
      D(e.$slots, "default")
    ]),
    m("view", {
      ref: "rightRef",
      class: "nut-swipe__right",
      onClick: t[2] || (t[2] = (l) => e.onClick(l, "right", !0))
    }, [
      D(e.$slots, "right")
    ], 512)
  ], 36);
}
const yo = /* @__PURE__ */ K(T1, [["render", N1]]), { create: D1 } = W("swipe-group"), I1 = D1({
  props: {
    lock: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = P(null), n = P("");
    return Me(go, {
      update: (o) => {
        n.value = o;
      },
      lock: e.lock,
      name: n
    }), { swipeGroupRef: t };
  }
}), _1 = {
  ref: "swipeGroupRef",
  class: "nut-swipe-group"
};
function B1(e, t, n, s, o, a) {
  return u(), d("div", _1, [
    D(e.$slots, "default")
  ], 512);
}
const M1 = /* @__PURE__ */ K(I1, [["render", B1]]), { create: E1 } = W("action-sheet"), L1 = E1({
  components: {
    NutPopup: Ee,
    Loading: xe
  },
  props: ce(G({}, $t), {
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
      slotDefault: !!Qe().default,
      isHighlight: (i) => e.chooseTagValue && e.chooseTagValue === i[e.optionTag] ? e.color : "",
      cancelActionSheet: () => {
        t("cancel"), t("update:visible", !1);
      },
      chooseItem: (i, r) => {
        !i.disable && !i.loading && (t("choose", i, r), t("update:visible", !1));
      },
      close: (i) => {
        e.closeAbled && (t("close", i), t("update:visible", !1));
      }
    };
  }
}), P1 = { class: "nut-action-sheet" }, A1 = {
  key: 0,
  class: "nut-action-sheet__title"
}, z1 = { key: 1 }, V1 = {
  key: 0,
  class: "nut-action-sheet__item nut-action-sheet__desc"
}, O1 = {
  key: 1,
  class: "nut-action-sheet__menu"
}, H1 = ["onClick"], R1 = { key: 1 }, F1 = { class: "nut-action-sheet__subdesc" };
function W1(e, t, n, s, o, a) {
  const l = j("Loading"), i = j("nut-popup");
  return u(), x(i, {
    visible: e.visible,
    position: "bottom",
    round: "",
    "close-on-click-overlay": e.closeAbled,
    "lock-scroll": e.lockScroll,
    "z-index": e.zIndex,
    onClickOverlay: e.close
  }, {
    default: te(() => [
      m("view", P1, [
        e.title ? (u(), d("view", A1, B(e.title), 1)) : C("", !0),
        D(e.$slots, "default"),
        e.slotDefault ? C("", !0) : (u(), d("view", z1, [
          e.description ? (u(), d("view", V1, B(e.description), 1)) : C("", !0),
          e.menuItems.length ? (u(), d("view", O1, [
            (u(!0), d(ee, null, re(e.menuItems, (r, p) => (u(), d("view", {
              key: p,
              class: _(["nut-action-sheet__item", {
                "nut-action-sheet__item--disabled": r.disable,
                "nut-action-sheet__item--loading": r.loading
              }]),
              style: L({ color: e.isHighlight(r) || r.color }),
              onClick: (f) => e.chooseItem(r, p)
            }, [
              r.loading ? (u(), x(l, { key: 0 })) : (u(), d("view", R1, B(r[e.optionTag]), 1)),
              m("view", F1, B(r[e.optionSubTag]), 1)
            ], 14, H1))), 128))
          ])) : C("", !0),
          e.cancelTxt ? (u(), d("view", {
            key: 2,
            class: "nut-action-sheet__cancel",
            onClick: t[0] || (t[0] = (...r) => e.cancelActionSheet && e.cancelActionSheet(...r))
          }, B(e.cancelTxt), 1)) : C("", !0)
        ]))
      ])
    ]),
    _: 3
  }, 8, ["visible", "close-on-click-overlay", "lock-scroll", "z-index", "onClickOverlay"]);
}
const Y1 = /* @__PURE__ */ K(L1, [["render", W1]]), { componentName: j1, create: K1 } = W("backtop"), U1 = K1({
  components: {
    Top: Si
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
    }), s = N(() => ({
      [j1]: !0,
      show: n.backTop
    })), o = N(() => ({
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
    function i() {
      let g = Ve(function v() {
        var b = e.duration - Math.max(0, n.startTime - +/* @__PURE__ */ new Date() + e.duration), k = b * -n.scrollTop / e.duration + n.scrollTop;
        l(k), g = Ve(v), (b == e.duration || k == 0) && $c(g);
      });
    }
    function r() {
      n.scrollEl.addEventListener("scroll", a, !1), n.scrollEl.addEventListener("resize", a, !1);
    }
    function p() {
      n.scrollEl.removeEventListener("scroll", a, !1), n.scrollEl.removeEventListener("resize", a, !1);
    }
    function f(g) {
      n.startTime = +/* @__PURE__ */ new Date(), e.isAnimation && e.duration > 0 ? i() : l(), t("click", g);
    }
    function y() {
      e.elId && document.getElementById(e.elId) && (n.scrollEl = document.getElementById(e.elId)), r();
    }
    return ve(() => {
      e.distance == 0 && (n.backTop = !0), y();
    }), je(() => {
      p();
    }), gt(() => {
      n.keepAlive && (n.keepAlive = !1, y());
    }), yt(() => {
      n.keepAlive = !0, p();
    }), {
      state: n,
      classes: s,
      style: o,
      click: f
    };
  }
});
function X1(e, t, n, s, o, a) {
  const l = j("Top");
  return u(), d("div", {
    class: _(e.classes),
    style: L(e.style),
    onClick: t[0] || (t[0] = Ne((...i) => e.click && e.click(...i), ["stop"]))
  }, [
    D(e.$slots, "default", {}, () => [
      le(l, {
        width: "19px",
        height: "19px",
        class: "nut-backtop-main"
      })
    ])
  ], 6);
}
const q1 = /* @__PURE__ */ K(U1, [["render", X1]]), { create: G1 } = W("drag"), Z1 = G1({
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
    const t = P(), n = ue({
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
    function a(p, f) {
      f - parseInt(p.style.left.split("px")[0]) > 10 ? (p.style.left = parseInt(p.style.left.split("px")[0]) + 10 + "px", Ve(() => {
        a(p, f);
      })) : p.style.left = f + "px";
    }
    function l(p) {
      p.preventDefault();
      const f = p.currentTarget;
      if (p.targetTouches.length === 1) {
        const y = p.targetTouches[0];
        n.nx = y.clientX - n.position.x, n.ny = y.clientY - n.position.y, n.xPum = n.startLeft + n.nx, n.yPum = n.startTop + n.ny;
        const g = n.screenWidth - n.elWidth - n.boundary.right;
        Math.abs(n.xPum) > g ? n.xPum = g : n.xPum <= n.boundary.left && (n.xPum = n.boundary.left), n.yPum < n.boundary.top ? n.yPum = n.boundary.top : n.yPum > n.screenHeight - n.elHeight - n.boundary.bottom && (n.yPum = n.screenHeight - n.elHeight - n.boundary.bottom), e.direction != "y" && (f.style.left = n.xPum + "px"), e.direction != "x" && (f.style.top = n.yPum + "px");
      }
    }
    function i(p) {
      const f = p.currentTarget;
      let g = p.changedTouches[0].clientX;
      const v = n.screenWidth - n.elWidth - n.boundary.right;
      g > v ? g = v : g < n.boundary.left ? g = n.boundary.left : g = g < n.screenWidth / 2 ? n.boundary.left : v, e.direction != "y" && e.attract && (g < n.screenWidth / 2 ? Ve(() => {
        o(f);
      }) : Ve(() => {
        a(f, v);
      })), e.direction != "x" && (f.style.top = n.yPum + "px");
    }
    function r(p) {
      const f = p.currentTarget, y = p.touches[0], g = p.targetTouches[0];
      n.startTop = f.offsetTop, n.startLeft = f.offsetLeft, n.position.x = y.clientX, n.position.y = y.clientY, n.nx = g.clientX - n.position.x, n.ny = g.clientY - n.position.y, n.xPum = n.startLeft + n.nx, n.yPum = n.startTop + n.ny;
    }
    return ve(() => {
      s(), n.boundary = e.boundary;
    }), gt(() => {
      n.keepAlive && (n.keepAlive = !1);
    }), yt(() => {
      n.keepAlive = !0, t.value.removeEventListener("touchstart", r), t.value.removeEventListener("touchmove", l), t.value.removeEventListener("touchend", i);
    }), {
      myDrag: t,
      touchStart: r,
      touchMove: l,
      touchEnd: i
    };
  }
});
function J1(e, t, n, s, o, a) {
  return u(), d("view", {
    ref: "myDrag",
    class: "nut-drag",
    onTouchstart: t[0] || (t[0] = (l) => e.touchStart(l)),
    onTouchmove: t[1] || (t[1] = (l) => e.touchMove(l)),
    onTouchend: t[2] || (t[2] = (l) => e.touchEnd(l))
  }, [
    D(e.$slots, "default")
  ], 544);
}
const Q1 = /* @__PURE__ */ K(Z1, [["render", J1]]), { create: x1 } = W("dialog"), em = "NutDialog", tm = x1({
  inheritAttrs: !1,
  components: {
    NutPopup: Ee,
    NutButton: Ke
  },
  props: ce(G({}, $t), {
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
    const n = ke(em), s = P(e.visible);
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
    const o = (f) => {
      t("update", f), t("update:visible", f);
    }, a = (f) => {
      Kt(e.beforeClose, {
        args: [f],
        done: () => {
          s.value = !1, o(!1), t("closed");
        }
      });
    }, l = () => {
      t("cancel"), e.cancelAutoClose && (s.value = !1, a("cancel"));
    }, i = () => {
      t("ok"), e.okAutoClose && a("ok");
    }, r = () => {
      e.closeOnClickOverlay && a("");
    }, p = N(() => ({
      textAlign: e.textAlign
    }));
    return {
      closed: a,
      onCancel: l,
      onOk: i,
      showPopup: s,
      onClickOverlay: r,
      contentStyle: p,
      translate: n
    };
  }
}), nm = {
  key: 0,
  class: "nut-dialog__header"
}, om = ["innerHTML"];
function lm(e, t, n, s, o, a) {
  const l = j("nut-button"), i = j("nut-popup");
  return u(), x(i, {
    visible: e.showPopup,
    "onUpdate:visible": t[0] || (t[0] = (r) => e.showPopup = r),
    teleport: e.teleport,
    "close-on-click-overlay": !1,
    "lock-scroll": e.lockScroll,
    "pop-class": e.popClass,
    "overlay-class": e.overlayClass,
    "overlay-style": e.overlayStyle,
    style: L(e.popStyle),
    round: "",
    "z-index": e.zIndex,
    onClickOverlay: e.onClickOverlay,
    onClickCloseIcon: e.closed
  }, {
    default: te(() => [
      m("view", {
        class: _(["nut-dialog", e.customClass])
      }, [
        e.$slots.header || e.title ? (u(), d("view", nm, [
          e.$slots.header ? D(e.$slots, "header", { key: 0 }) : (u(), d(ee, { key: 1 }, [
            ge(B(e.title), 1)
          ], 64))
        ])) : C("", !0),
        m("view", {
          class: "nut-dialog__content",
          style: L(e.contentStyle)
        }, [
          e.$slots.default ? D(e.$slots, "default", { key: 0 }) : typeof e.content == "string" ? (u(), d("view", {
            key: 1,
            innerHTML: e.content
          }, null, 8, om)) : (u(), x(Ae(e.content), { key: 2 }))
        ], 4),
        e.noFooter ? C("", !0) : (u(), d("view", {
          key: 1,
          class: _(["nut-dialog__footer", { [e.footerDirection]: e.footerDirection }])
        }, [
          e.$slots.footer ? D(e.$slots, "footer", { key: 0 }) : (u(), d(ee, { key: 1 }, [
            e.noCancelBtn ? C("", !0) : (u(), x(l, {
              key: 0,
              size: "small",
              plain: "",
              type: "primary",
              class: "nut-dialog__footer-cancel",
              onClick: e.onCancel
            }, {
              default: te(() => [
                ge(B(e.cancelText || e.translate("cancel")), 1)
              ]),
              _: 1
            }, 8, ["onClick"])),
            e.noOkBtn ? C("", !0) : (u(), x(l, {
              key: 1,
              size: "small",
              type: "primary",
              class: "nut-dialog__footer-ok",
              onClick: e.onOk
            }, {
              default: te(() => [
                ge(B(e.okText || e.translate("confirm")), 1)
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
const xt = /* @__PURE__ */ K(tm, [["render", lm]]);
class sm {
  constructor() {
    z(this, "title", "");
    z(this, "content", "");
    z(this, "cancelText", "");
    z(this, "okText", "");
    z(this, "textAlign", "center");
    z(this, "customClass", "");
    z(this, "overlayStyle", {});
    z(this, "overlayClass", "");
    z(this, "popStyle", {});
    z(this, "popClass", "");
    z(this, "teleport", "body");
    z(this, "id", (/* @__PURE__ */ new Date()).getTime());
    z(this, "footerDirection", "horizontal");
    //使用横纵方向 可选值 horizontal、vertical
    // function
    z(this, "onUpdate");
    z(this, "onOk");
    z(this, "onCancel");
    z(this, "onOpened");
    z(this, "onClosed");
    z(this, "beforeClose");
    z(this, "visible", !0);
    z(this, "noFooter", !1);
    z(this, "noOkBtn", !1);
    z(this, "noCancelBtn", !1);
    z(this, "okBtnDisabled", !1);
    z(this, "closeOnPopstate", !1);
    z(this, "closeOnClickOverlay", !0);
    z(this, "lockScroll", !0);
    z(this, "cancelAutoClose", !0);
    z(this, "okAutoClose", !0);
  }
}
class am {
  constructor(t) {
    z(this, "options", new sm());
    z(this, "instance");
    const n = Object.assign(this.options, t), { unmount: s } = Zt(n, {
      name: "dialog",
      components: [Ee, Ke, vt],
      wrapper: (o, a) => ({
        setup() {
          return n.onUpdate = (l) => {
            l === !1 && Te(() => {
              s();
            });
          }, n != null && n.onOpened && (n == null || n.onOpened()), n.teleport = `#${a.id}`, () => we(xt, n);
        }
      })
    });
  }
}
const im = function(e) {
  return new am(e);
};
im.install = (e) => {
  e.use(xt);
};
const { create: rm } = W("infinite-loading"), um = "NutInfiniteLoading", cm = rm({
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
    Loading: xe
  },
  setup(e, { emit: t, slots: n }) {
    const s = ke(um), o = P(), a = Xn(o), l = ue({
      beforeScrollTop: 0,
      isInfiniting: !1,
      y: 0,
      x: 0,
      distance: 0
    }), i = (v) => v ? v.offsetTop + i(v.offsetParent) : 0, r = () => {
      let v = 0, b = 0, k = "down";
      if (a.value == window) {
        const c = En();
        o.value && (v = i(o.value) + o.value.offsetHeight - c - window.innerHeight), b = c;
      } else {
        const { scrollHeight: c, clientHeight: $, scrollTop: h } = a.value;
        v = c - $ - h, b = h;
      }
      return l.beforeScrollTop > b ? k = "up" : k = "down", l.beforeScrollTop = b, t("scrollChange", b), v <= e.threshold && k == "down";
    }, p = () => {
      Ve(() => {
        if (!r() || !e.hasMore || l.isInfiniting)
          return !1;
        l.isInfiniting = !0, t("update:modelValue", !0), Te(() => t("loadMore"));
      });
    }, f = () => {
      a.value && a.value.addEventListener("scroll", p, e.useCapture);
    }, y = () => {
      a.value && a.value.removeEventListener("scroll", p, e.useCapture);
    };
    ve(() => {
      f();
    }), je(() => {
      y();
    });
    const g = P(!1);
    return gt(() => {
      g.value && (g.value = !1, f());
    }), yt(() => {
      g.value = !0, y();
    }), Q(
      () => e.modelValue,
      (v) => {
        v || (l.isInfiniting = !1);
      }
    ), ce(G({
      scroller: o
    }, me(l)), {
      translate: s,
      slots: n
    });
  }
}), dm = {
  ref: "scroller",
  class: "nut-infinite-loading"
}, fm = { class: "nut-infinite__container" }, pm = { class: "nut-infinite__bottom" }, mm = {
  key: 0,
  class: "nut-infinite__bottom-box"
}, hm = { class: "nut-infinite__bottom-box__text" }, gm = { class: "nut-infinite__bottom-tips" };
function ym(e, t, n, s, o, a) {
  const l = j("Loading");
  return u(), d("view", dm, [
    m("view", fm, [
      D(e.$slots, "default")
    ]),
    m("view", pm, [
      e.isInfiniting ? (u(), d("view", mm, [
        D(e.$slots, "loading", {}, () => [
          D(e.$slots, "loading-icon", {}, () => [
            le(l, { class: "nut-icon-loading nut-infinite__bottom-box__img" })
          ]),
          m("view", hm, B(e.loadTxt || e.translate("loading")), 1)
        ])
      ])) : e.hasMore ? C("", !0) : D(e.$slots, "finished", { key: 1 }, () => [
        m("view", gm, B(e.loadMoreTxt || e.translate("loadMoreTxt")), 1)
      ])
    ])
  ], 512);
}
const vm = /* @__PURE__ */ K(cm, [["render", ym]]), { create: $m } = W("pull-refresh"), bm = "NutPullRefresh", km = $m({
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
  components: { Loading: xe },
  setup(e, { emit: t, slots: n }) {
    const s = ke(bm), o = Ge(), a = P(), l = Xn(a), i = ue({
      isPullRefresh: !1,
      distance: 0,
      status: "normal"
    }), r = N(() => {
      switch (i.status) {
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
    }), p = N(() => ({
      transitionDuration: `${e.duration}s`,
      transform: i.distance ? `translate3d(0,${i.distance}px, 0)` : ""
    })), f = N(() => {
      const h = {};
      return e.headHeight != 50 && (h.height = _e(e.headHeight)), h;
    }), y = (h) => {
      const w = +(e.pullDistance || e.headHeight);
      let I = h;
      return h > w && (h < w * 2 ? I = (h + w) / 2 : I = w + h / 4), Math.round(I);
    }, g = (h, w, I) => {
      const T = +(e.pullDistance || e.headHeight);
      i.distance = h, w ? i.status = "loading" : I ? i.status = "complete" : h === 0 ? i.status = "normal" : h < T ? i.status = "pulling" : i.status = "loosing", t("change", { status: i.status, distance: h });
    }, v = () => i.status !== "loading" && i.status !== "complete", b = () => l.value == window ? En() == 0 : l.value && l.value.scrollTop == 0, k = (h) => {
      v() && (b() ? (o.start(h), i.isPullRefresh = !0) : (i.distance = 0, i.isPullRefresh = !1));
    }, c = (h) => {
      if (v()) {
        o.move(h);
        const { deltaY: w } = o;
        o.isVertical() && w.value > 0 && i.isPullRefresh && (h.preventDefault(), g(y(w.value)));
      }
    }, $ = () => {
      i.isPullRefresh && v() && o.deltaY.value && (i.status === "loosing" ? (g(+e.headHeight, !0), t("update:modelValue", !0), Te(() => t("refresh"))) : g(0)), setTimeout(() => {
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
    ), ce(G({
      scroller: a
    }, me(i)), {
      touchStart: k,
      touchMove: c,
      touchEnd: $,
      getStyle: p,
      translate: s,
      slots: n,
      getHeightStyle: f,
      getPullStatus: r
    });
  }
}), wm = { class: "nut-pull-refresh-container-topbox-text" };
function Sm(e, t, n, s, o, a) {
  const l = j("Loading");
  return u(), d("div", {
    ref: "scroller",
    class: "nut-pull-refresh",
    onTouchstart: t[0] || (t[0] = (...i) => e.touchStart && e.touchStart(...i)),
    onTouchmove: t[1] || (t[1] = (...i) => e.touchMove && e.touchMove(...i)),
    onTouchend: t[2] || (t[2] = (...i) => e.touchEnd && e.touchEnd(...i))
  }, [
    m("div", {
      class: "nut-pull-refresh-container",
      style: L(e.getStyle)
    }, [
      m("div", {
        class: "nut-pull-refresh-container-topbox",
        style: L(e.getHeightStyle)
      }, [
        e.status == "loading" && !e.slots.loading ? (u(), x(l, {
          key: 0,
          class: "nut-icon-loading nut-pull-refresh-container-topbox-icon"
        })) : C("", !0),
        m("div", wm, B(e.getPullStatus), 1),
        e.status == "pulling" ? D(e.$slots, "pulling", { key: 1 }) : C("", !0),
        e.status == "loosing" ? D(e.$slots, "loosing", { key: 2 }) : C("", !0),
        e.status == "loading" ? D(e.$slots, "loading", { key: 3 }) : C("", !0),
        e.status == "complete" ? D(e.$slots, "complete", { key: 4 }) : C("", !0)
      ], 4),
      D(e.$slots, "default")
    ], 4)
  ], 544);
}
const Cm = /* @__PURE__ */ K(km, [["render", Sm]]), { create: Tm } = W("notify"), Nm = Tm({
  components: {
    NutPopup: Ee
  },
  props: {
    id: String,
    color: { type: String, default: "" },
    msg: { type: String, default: "" },
    duration: { type: Number, default: 3e3 },
    className: {
      type: String,
      default: ""
    },
    background: { type: String, default: "" },
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
    }, l = P(!1), i = Q(
      () => e.visible,
      (p) => {
        l.value = e.visible;
        const f = e.duration;
        p && f && (s = setTimeout(() => {
          a();
        }, f));
      },
      { immediate: !0 }
    );
    return { onAfterLeave: () => {
      o(), i && i(), e.unmount && e.unmount(e.id), e.onClose && e.onClose();
    }, clickCover: n, isShowPopup: l };
  }
});
function Dm(e, t, n, s, o, a) {
  const l = j("nut-popup");
  return u(), x(l, {
    visible: e.isShowPopup,
    "onUpdate:visible": t[1] || (t[1] = (i) => e.isShowPopup = i),
    position: e.position,
    overlay: !1,
    "teleport-disable": e.teleportDisable
  }, {
    default: te(() => [
      m("div", {
        class: _(["nut-notify", `nut-notify--${e.type}`, e.className]),
        style: L({ color: e.color, background: e.background }),
        onClick: t[0] || (t[0] = (...i) => e.clickCover && e.clickCover(...i))
      }, [
        e.$slots.default ? D(e.$slots, "default", { key: 0 }) : (u(), d(ee, { key: 1 }, [
          ge(B(e.msg), 1)
        ], 64))
      ], 6)
    ]),
    _: 3
  }, 8, ["visible", "position", "teleport-disable"]);
}
const Bt = /* @__PURE__ */ K(Nm, [["render", Dm]]), Ht = {
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
let tt = [], dt = [];
const vo = (e) => {
  if (e) {
    const t = document.getElementById(e);
    dt = dt.filter((n) => n.id !== e), tt = tt.filter((n) => n !== e), t && document.body.removeChild(t);
  } else
    tt.forEach((t) => {
      const n = document.getElementById(t);
      n && document.body.removeChild(n);
    }), dt = [], tt = [];
}, Im = (e) => {
  const t = document.getElementById(e.id);
  if (t) {
    const n = dt.find((o) => o.id === e.id);
    n ? e = G(G(G({}, Ht), n), e) : e = G(G({}, Ht), e);
    const s = le(Bt, e);
    return jt(s, t), s.component.data;
  }
}, rt = (e) => {
  e.unmount = vo;
  let t;
  if (e.id) {
    if (t = e.id, tt.find((a) => a === e.id))
      return Im(e);
  } else
    t = (/* @__PURE__ */ new Date()).getTime() + "";
  e = G(G({}, Ht), e), e.id = t, tt.push(e.id), dt.push(e);
  const n = document.createElement("view");
  n.id = "notify-" + e.id;
  const o = le({
    setup() {
      return e.teleport = `#notify-${e.id}`, ve(() => {
        setTimeout(() => {
          e.onClose && e.onClose(), document.body.removeChild(n);
        }, e.duration);
      }), () => we(Bt, e);
    }
  });
  document.body.appendChild(n), jt(o, n);
}, ut = (e) => {
  if (!e) {
    console.warn("[NutUI Notify]: msg不能为空");
    return;
  }
}, i4 = {
  text(e, t = {}) {
    return ut(e), rt(ce(G({}, t), { msg: e }));
  },
  primary(e, t = {}) {
    return ut(e), rt(ce(G({}, t), { msg: e, type: "primary" }));
  },
  success(e, t = {}) {
    return ut(e), rt(ce(G({}, t), { msg: e, type: "success" }));
  },
  danger(e, t = {}) {
    return ut(e), rt(ce(G({}, t), { msg: e, type: "danger" }));
  },
  warn(e, t = {}) {
    return ut(e), rt(ce(G({}, t), { msg: e, type: "warning" }));
  },
  hide() {
    vo();
  },
  install(e) {
    e.use(Bt);
  }
}, { componentName: _m, create: Bm } = W("switch"), Mm = Bm({
  components: { Loading1: js },
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
    const n = N(() => e.modelValue === e.activeValue), s = N(() => {
      const i = _m;
      return {
        [i]: !0,
        [n.value ? "nut-switch-open" : "nut-switch-close"]: !0,
        [`${i}-disable`]: e.disable,
        [`${i}-base`]: !0
      };
    }), o = N(() => ({
      backgroundColor: n.value ? e.activeColor : e.inactiveColor
    }));
    let a = "";
    const l = (i) => {
      if (e.disable || e.loading)
        return;
      const r = n.value ? e.inactiveValue : e.activeValue;
      a = "click", t("update:modelValue", r), t("change", r, i);
    };
    return Q(
      () => e.modelValue,
      (i) => {
        a == "click" ? a = "" : t("change", i);
      }
    ), {
      classes: s,
      style: o,
      isActive: n,
      onClick: l
    };
  }
}), Em = { class: "nut-switch-button" };
function Lm(e, t, n, s, o, a) {
  const l = j("Loading1");
  return u(), d("view", {
    class: _(e.classes),
    style: L(e.style),
    onClick: t[0] || (t[0] = (...i) => e.onClick && e.onClick(...i))
  }, [
    m("view", Em, [
      e.loading ? D(e.$slots, "icon", { key: 0 }, () => [
        le(l, {
          name: "loading",
          color: e.activeColor
        }, null, 8, ["color"])
      ]) : C("", !0),
      e.activeText ? (u(), d(ee, { key: 1 }, [
        Ce(m("view", { class: "nut-switch-label open" }, B(e.activeText), 513), [
          [De, e.isActive]
        ]),
        Ce(m("view", { class: "nut-switch-label close" }, B(e.inactiveText), 513), [
          [De, !e.isActive]
        ])
      ], 64)) : C("", !0)
    ])
  ], 6);
}
const Pm = /* @__PURE__ */ K(Mm, [["render", Lm]]), { create: Am } = W("toast"), zm = Am({
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
    const o = () => {
      n && (clearTimeout(n), n = null);
    }, a = () => {
      s.mounted = !1;
    }, l = () => {
      o(), e.duration && (n = setTimeout(() => {
        a();
      }, e.duration));
    }, i = () => {
      e.closeOnClickOverlay && (a(), t("close"));
    };
    e.duration && l(), Q(
      () => e.duration,
      (g) => {
        g && l();
      }
    );
    const r = N(() => e.type !== "text" ? !0 : e.icon !== null), p = N(() => [
      "nut-toast",
      { "nut-toast-center": e.center },
      { "nut-toast-has-icon": r.value },
      { "nut-toast-cover": e.cover },
      { "nut-toast-loading": e.type === "loading" },
      e.customClass,
      "nut-toast-" + e.size
    ]), f = N(() => ["nut-toast-icon-wrapper", { "nut-toast-icon-no-animation": !e.loadingRotate }]);
    return {
      state: s,
      hide: a,
      clickCover: i,
      hasIcon: r,
      toastBodyClass: p,
      toastIconWrapperClass: f,
      onAfterLeave: () => {
        o(), e.unmount(e.id), e.onClose && e.onClose();
      },
      renderIcon: st
    };
  }
}), Vm = {
  key: 1,
  class: "nut-toast-title"
}, Om = ["innerHTML"];
function Hm(e, t, n, s, o, a) {
  return u(), x(Wt, {
    name: "toast-fade",
    onAfterLeave: e.onAfterLeave
  }, {
    default: te(() => [
      Ce(m("view", {
        class: _(e.toastBodyClass),
        style: L({
          bottom: e.center ? "auto" : e.bottom,
          "background-color": e.coverColor
        }),
        onClick: t[0] || (t[0] = (...l) => e.clickCover && e.clickCover(...l))
      }, [
        m("view", {
          class: "nut-toast-inner",
          style: L({
            "text-align": e.textAlignCenter ? "center" : "left",
            "background-color": e.bgColor
          })
        }, [
          e.hasIcon ? (u(), d("view", {
            key: 0,
            class: _(e.toastIconWrapperClass)
          }, [
            (u(), x(Ae(e.renderIcon(e.icon)), { color: "#ffffff" }))
          ], 2)) : C("", !0),
          e.title ? (u(), d("div", Vm, B(e.title), 1)) : C("", !0),
          m("view", {
            class: "nut-toast-text",
            innerHTML: e.msg
          }, null, 8, Om)
        ], 4)
      ], 6), [
        [De, e.state.mounted]
      ])
    ]),
    _: 1
  }, 8, ["onAfterLeave"]);
}
const Mt = /* @__PURE__ */ K(zm, [["render", Hm]]), Rt = {
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
let nt = [], ft = [];
const $o = (e) => {
  if (e) {
    const t = document.getElementById(e);
    ft = ft.filter((n) => n.id !== e), nt = nt.filter((n) => n !== e), t && document.body.removeChild(t);
  } else
    nt.forEach((t) => {
      const n = document.getElementById(t);
      n && document.body.removeChild(n);
    }), ft = [], nt = [];
}, Rm = (e) => {
  const t = document.getElementById(e.id);
  if (t) {
    const n = ft.find((o) => o.id === e.id);
    n ? e = G(G(G({}, Rt), n), e) : e = G(G({}, Rt), e);
    const s = le(Mt, e);
    return jt(s, t), bo;
  }
}, ct = (e) => {
  e.unmount = $o;
  let t;
  if (e.id) {
    if (t = e.id, nt.find((n) => n === e.id))
      return Rm(e);
  } else
    t = (/* @__PURE__ */ new Date()).getTime() + "";
  return e = G(G({}, Rt), e), e.id = t, nt.push(e.id), ft.push(e), Zt(e, {
    wrapper: Mt
  }), bo;
}, Ct = (e) => {
  if (!e) {
    console.warn("[NutUI Toast]: msg不能为空");
    return;
  }
}, bo = {
  text(e, t = {}) {
    return Ct(e), ct(ce(G({}, t), { type: "text", msg: e }));
  },
  success(e, t = {}) {
    return Ct(e), ct(ce(G({ icon: mi }, t), { msg: e, type: "success" }));
  },
  fail(e, t = {}) {
    return Ct(e), ct(ce(G({ icon: On }, t), { msg: e, type: "fail" }));
  },
  warn(e, t = {}) {
    return Ct(e), ct(ce(G({ icon: Hn }, t), { msg: e, type: "warn" }));
  },
  loading(e, t = {}) {
    return ct(ce(G({
      icon: xe
    }, t), {
      msg: e,
      type: "loading"
    }));
  },
  hide(e) {
    $o(e);
  },
  install(e) {
    e.use(Mt);
  }
}, { create: Fm } = W("audio"), Wm = Fm({
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
    Service: si,
    NutRange: no
  },
  emits: ["fastBack", "play", "forward", "ended", "changeProgress", "mute", "canPlay"],
  setup(e, { emit: t, slots: n }) {
    const s = P(null), o = ue({
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
            document.hidden ? s.value.pause() : o.playing && setTimeout(() => {
              s.value.play();
            }, 200);
          });
      } catch (c) {
        console.log(c.message);
      }
    });
    const a = (k) => {
      const c = s.value;
      e.autoplay && c && c.paused && c.play(), o.second = c.duration, o.duration = b(c.duration), t("canPlay", k);
    }, l = (k) => {
      o.currentTime = parseInt(k.target.currentTime);
    }, i = () => {
      o.currentTime > 0 && o.currentTime--, s.value.currentTime = o.currentTime, t("fastBack", o.currentTime);
    }, r = () => {
      const k = s.value;
      o.playing ? (k.pause(), o.handPlaying = !1) : (k.play(), o.handPlaying = !0), o.playing = !o.playing, t("play", o.playing);
    }, p = () => {
      o.currentTime++, s.value.currentTime = o.currentTime, t("forward", o.currentTime);
    }, f = (k) => {
      o.currentDuration = b(k), o.percent = k / o.second * 100;
    }, y = () => {
      o.playing = !1, t("ended");
    }, g = (k) => {
      const c = s.value;
      c.currentTime = o.second * k / 100, t("changeProgress", c.currentTime);
    }, v = () => {
      o.hanMuted = !o.hanMuted, t("mute", o.hanMuted);
    }, b = (k) => {
      if (!k)
        return "00:00:00";
      let c = parseInt(k), $ = Math.floor(c / 3600), h = Math.floor((c - $ * 3600) / 60), w = c - $ * 3600 - h * 60, I = "";
      return I += ("0" + $.toString()).slice(-2) + ":", I += ("0" + h.toString()).slice(-2) + ":", I += ("0" + w.toString()).slice(-2), I;
    };
    return Q(
      () => o.currentTime,
      (k) => {
        f(k);
      }
    ), Me("audioParent", {
      children: [],
      props: e,
      audioData: o,
      handleMute: v,
      forward: p,
      fastBack: i,
      changeStatus: r
    }), ce(G(G({}, me(e)), me(o)), {
      audioRef: s,
      fastBack: i,
      forward: p,
      changeStatus: r,
      progressChange: g,
      audioEnd: y,
      onTimeupdate: l,
      handleMute: v,
      onCanplay: a,
      slots: n
    });
  }
}), Ym = { class: "nut-audio" }, jm = {
  key: 0,
  class: "nut-audio__progress"
}, Km = { class: "nut-audio__time" }, Um = { class: "nut-audio__bar" }, Xm = /* @__PURE__ */ m("div", { class: "nut-audio__button--custom" }, null, -1), qm = { class: "nut-audio__time" }, Gm = {
  key: 1,
  class: "nut-audio__icon"
}, Zm = ["controls", "src", "preload", "autoplay", "loop", "muted"];
function Jm(e, t, n, s, o, a) {
  const l = j("nut-range"), i = j("Service");
  return u(), d("div", Ym, [
    e.type == "progress" ? (u(), d("div", jm, [
      m("div", Km, B(e.currentDuration), 1),
      m("div", Um, [
        le(l, {
          modelValue: e.percent,
          "onUpdate:modelValue": t[0] || (t[0] = (r) => e.percent = r),
          "hidden-range": "",
          "inactive-color": "#cccccc",
          "active-color": "#fa2c19",
          onChange: e.progressChange
        }, {
          button: te(() => [
            Xm
          ]),
          _: 1
        }, 8, ["modelValue", "onChange"])
      ]),
      m("div", qm, B(e.duration), 1)
    ])) : C("", !0),
    e.type == "icon" ? (u(), d("div", Gm, [
      m("div", {
        class: _(["nut-audio__icon--box", e.playing ? "nut-audio__icon--play" : "nut-audio__icon--stop"]),
        onClick: t[1] || (t[1] = (...r) => e.changeStatus && e.changeStatus(...r))
      }, [
        e.playing ? (u(), x(i, {
          key: 0,
          class: "nut-icon-am-rotate nut-icon-am-infinite"
        })) : (u(), x(i, { key: 1 }))
      ], 2)
    ])) : C("", !0),
    e.type == "none" ? (u(), d("div", {
      key: 2,
      onClick: t[2] || (t[2] = (...r) => e.changeStatus && e.changeStatus(...r))
    }, [
      D(e.$slots, "default")
    ])) : C("", !0),
    e.type != "none" ? D(e.$slots, "default", { key: 3 }) : C("", !0),
    m("audio", {
      ref: "audioRef",
      class: "audioMain",
      controls: e.type == "controls",
      src: e.url,
      preload: e.preload,
      autoplay: e.autoplay,
      loop: e.loop,
      muted: e.hanMuted,
      onTimeupdate: t[3] || (t[3] = (...r) => e.onTimeupdate && e.onTimeupdate(...r)),
      onCanplay: t[4] || (t[4] = (...r) => e.onCanplay && e.onCanplay(...r)),
      onEnded: t[5] || (t[5] = (...r) => e.audioEnd && e.audioEnd(...r))
    }, null, 40, Zm)
  ]);
}
const Qm = /* @__PURE__ */ K(Wm, [["render", Jm]]), { create: xm } = W("audio-operate"), eh = "NutAudioOperate", th = xm({
  props: {
    // 展示的形式   back 倒退   play 开始 or 暂停  forward 快进 mute 静音
    type: {
      type: String,
      default: () => "play"
    }
  },
  components: {
    NutButton: Ke
  },
  emits: ["click"],
  setup(e) {
    const t = ke(eh), n = Be("audioParent"), s = ue(n), o = P(Qe().default);
    return ce(G(G({}, me(e)), me(s)), { customSlot: o, translate: t });
  }
}), nh = { class: "nut-audio-operate" };
function oh(e, t, n, s, o, a) {
  const l = j("nut-button");
  return u(), d("div", nh, [
    e.type == "back" ? (u(), d("div", {
      key: 0,
      class: "nut-audio-operate-item",
      onClick: t[0] || (t[0] = (...i) => e.fastBack && e.fastBack(...i))
    }, [
      e.customSlot ? C("", !0) : (u(), x(l, {
        key: 0,
        type: "primary",
        size: "small"
      }, {
        default: te(() => [
          ge(B(e.translate("back")), 1)
        ]),
        _: 1
      })),
      D(e.$slots, "default")
    ])) : C("", !0),
    e.type == "play" ? (u(), d("div", {
      key: 1,
      class: "nut-audio-operate-item",
      onClick: t[1] || (t[1] = (...i) => e.changeStatus && e.changeStatus(...i))
    }, [
      e.customSlot ? C("", !0) : (u(), x(l, {
        key: 0,
        type: "primary",
        size: "small"
      }, {
        default: te(() => [
          ge(B(e.audioData.playing ? `${e.translate("pause")}` : `${e.translate("start")}`), 1)
        ]),
        _: 1
      })),
      D(e.$slots, "default")
    ])) : C("", !0),
    e.type == "forward" ? (u(), d("div", {
      key: 2,
      class: "nut-audio-operate-item",
      onClick: t[2] || (t[2] = (...i) => e.forward && e.forward(...i))
    }, [
      e.customSlot ? C("", !0) : (u(), x(l, {
        key: 0,
        type: "primary",
        size: "small"
      }, {
        default: te(() => [
          ge("快进")
        ]),
        _: 1
      })),
      D(e.$slots, "default")
    ])) : C("", !0),
    e.type == "mute" ? (u(), d("div", {
      key: 3,
      class: "nut-audio-operate-item",
      onClick: t[3] || (t[3] = (...i) => e.handleMute && e.handleMute(...i))
    }, [
      e.customSlot ? C("", !0) : (u(), x(l, {
        key: 0,
        type: e.audioData.hanMuted ? "default" : "primary",
        size: "small"
      }, {
        default: te(() => [
          ge(B(e.translate("mute")), 1)
        ]),
        _: 1
      }, 8, ["type"])),
      D(e.$slots, "default")
    ])) : C("", !0)
  ]);
}
const lh = /* @__PURE__ */ K(th, [["render", oh]]), ko = Symbol("nut-avatar"), { create: sh } = W("avatar"), ah = sh({
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
    const { size: t, shape: n, bgColor: s, color: o } = me(e), a = ["large", "normal", "small"], l = Be(ko, null), i = P(null), r = N(() => {
      var y, g;
      return {
        ["nut-avatar"]: !0,
        [`nut-avatar-${t.value || ((y = l == null ? void 0 : l.props) == null ? void 0 : y.size) || "normal"}`]: !0,
        [`nut-avatar-${n.value || ((g = l == null ? void 0 : l.props) == null ? void 0 : g.shape) || "round"}`]: !0
      };
    }), p = N(() => {
      var f, y;
      return {
        width: t.value in a ? "" : `${t.value}px`,
        height: t.value in a ? "" : `${t.value}px`,
        backgroundColor: `${s.value}`,
        color: `${o.value}`,
        marginLeft: (f = l == null ? void 0 : l.props) != null && f.span ? `${(y = l == null ? void 0 : l.props) == null ? void 0 : y.span}px` : ""
      };
    });
    return {
      classes: r,
      styles: p,
      avatarRef: i
    };
  }
});
function ih(e, t, n, s, o, a) {
  return u(), d("view", {
    ref: "avatarRef",
    style: L(e.styles),
    class: _(e.classes)
  }, [
    D(e.$slots, "default")
  ], 6);
}
const en = /* @__PURE__ */ K(ah, [["render", ih]]), { create: rh } = W("avatar-group"), uh = rh({
  components: {
    NutAvatar: en
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
    const t = P(null), n = P(99), s = P(), o = N(() => ({
      marginLeft: -1 * Number(e.span) + "px"
    })), a = (i) => {
      let r = 0;
      i && i.$el && (i = i.$el);
      const p = i.children;
      if (e.zIndex === "right")
        for (let f = 0; f < Number(e.maxCount); f++) {
          const y = p[f];
          y.style.zIndex = `${99 - f}`;
        }
      for (let f = Number(e.maxCount); f < p.length; f++) {
        const y = p[f];
        y.className.includes("avater-fold") || (y.style.display = "none", r++);
      }
      n.value = r;
    }, l = (i) => {
      const r = { attributes: !1, childList: !0, subtree: !0 }, p = function(y) {
        let g = !1;
        for (let v of y)
          if (v.type === "childList") {
            g = !0;
            break;
          }
        g && a(i);
      }, f = new MutationObserver(p);
      return f.observe(i, r), f;
    };
    return ve(() => {
      e.maxCount && Te(() => {
        let i = et(t);
        i && i.$el && (i = i.$el), a(i), s.value = l(i);
      });
    }), je(() => {
      var i;
      (i = s.value) == null || i.disconnect();
    }), Me(ko, {
      props: e,
      avatarGroupRef: t
    }), {
      styles: o,
      foldCount: n,
      avatarGroupRef: t
    };
  }
});
function ch(e, t, n, s, o, a) {
  const l = j("nut-avatar");
  return u(), d("view", {
    ref: "avatarGroupRef",
    class: "nut-avatar-group",
    style: L(e.styles)
  }, [
    D(e.$slots, "default"),
    e.foldCount > 0 ? (u(), x(l, {
      key: 0,
      class: "avater-fold",
      color: e.maxColor,
      "bg-color": e.maxBgColor,
      size: e.size,
      shape: e.shape,
      style: L({ magrinLeft: `${e.span}px` })
    }, {
      default: te(() => [
        ge(B(e.maxContent || e.foldCount), 1)
      ]),
      _: 1
    }, 8, ["color", "bg-color", "size", "shape", "style"])) : C("", !0)
  ], 4);
}
const dh = /* @__PURE__ */ K(uh, [["render", ch]]);
var Nt = /* @__PURE__ */ ((e) => (e[e.eq = 1] = "eq", e[e.lt = 2] = "lt", e[e.gt = 3] = "gt", e))(Nt || {});
function fh(e, t, n) {
  let s = 0, o = e.length - 1, a = null;
  for (; s <= o; ) {
    a = Math.floor((s + o) / 2);
    const l = e[a], i = n(l, t);
    if (i === 1)
      return a;
    i === 2 ? s = a + 1 : i === 3 && (o = a - 1);
  }
  return a;
}
const { create: ph } = W("list"), wn = document.documentElement.clientHeight || document.body.clientHeight || 667, mh = ph({
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
      type: [Number],
      default: wn
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
    const n = P(null), s = P(null), o = P(null), a = ue({
      start: 0,
      originStartIndex: 0,
      scrollTop: 0,
      list: e.listData.slice(),
      cachePositions: [],
      phantomHeight: e.height * e.listData.length
    }), l = N(() => Math.min(e.containerHeight, wn)), i = N(() => Math.ceil(l.value / e.height)), r = N(() => Math.min(a.originStartIndex + i.value + e.bufferSize, a.list.length)), p = N(() => a.list.slice(a.start, r.value)), f = () => {
      if (o.value)
        return `translate3d(0, ${a.start >= 1 ? a.cachePositions[a.start - 1].bottom : 0}px, 0)`;
    }, y = () => {
      a.cachePositions = [];
      for (let c = 0; c < a.list.length; ++c)
        a.cachePositions[c] = {
          index: c,
          height: e.height,
          top: c * e.height,
          bottom: (c + 1) * (e.height + e.margin),
          dValue: 0
        };
    }, g = () => {
      let c = o.value.childNodes;
      c = Array.from(c).filter((Y) => Y.nodeType === 1);
      const $ = c[0];
      c.forEach((Y, M) => {
        if (!Y)
          return;
        const A = Oe(Y), { height: S } = A, V = a.cachePositions[M + a.start].height - S;
        V && (a.cachePositions[M + a.start].bottom -= V, a.cachePositions[M + a.start].height = S, a.cachePositions[M + a.start].dValue = V);
      });
      let h = 0;
      $ && (h = a.start);
      const w = a.cachePositions.length;
      let I = a.cachePositions[h].dValue;
      a.cachePositions[h].dValue = 0;
      for (let Y = h + 1; Y < w; ++Y) {
        const M = a.cachePositions[Y];
        a.cachePositions[Y].top = a.cachePositions[Y - 1].bottom, a.cachePositions[Y].bottom = a.cachePositions[Y].bottom - I, M.dValue !== 0 && (I += M.dValue, M.dValue = 0);
      }
      const T = a.cachePositions[w - 1].bottom;
      a.phantomHeight = T;
    }, v = (c = 0) => {
      let $ = fh(
        a.cachePositions,
        c,
        (w, I) => {
          const T = w.bottom;
          return T === I ? Nt.eq : T < I ? Nt.lt : Nt.gt;
        }
      );
      return a.cachePositions[$].bottom < c && ($ += 1), $;
    }, b = () => {
      a.originStartIndex = 0, a.start = 0, a.scrollTop = 0, n.value.scrollTop = 0, y(), a.phantomHeight = e.height * a.list.length;
    }, k = () => {
      var w;
      const c = (w = n.value) == null ? void 0 : w.scrollTop, { originStartIndex: $ } = a, h = v(c);
      h !== $ && (a.originStartIndex = h, a.start = Math.max(a.originStartIndex - e.bufferSize, 0), r.value >= a.list.length - 1 && t("scrollBottom")), t(c > a.scrollTop ? "scrollUp" : "scrollDown", c), a.scrollTop = c;
    };
    return y(), Q(
      () => e.listData,
      (c) => {
        if (a.list = c.slice(), a.list.length === c.length)
          y(), g();
        else {
          b();
          return;
        }
      }
    ), Q(
      () => a.start,
      () => {
        o.value && a.list.length > 0 && g();
      }
    ), ce(G({}, me(a)), {
      list: n,
      phantom: s,
      actualContent: o,
      getTransform: f,
      visibleData: p,
      getContainerHeight: l,
      handleScrollEvent: k
    });
  }
});
function hh(e, t, n, s, o, a) {
  return u(), d("div", {
    ref: "list",
    class: "nut-list",
    style: L({ height: `${e.getContainerHeight}px` }),
    onScrollPassive: t[0] || (t[0] = (...l) => e.handleScrollEvent && e.handleScrollEvent(...l))
  }, [
    m("div", {
      ref: "phantom",
      class: "nut-list-phantom",
      style: L({ height: e.phantomHeight + "px" })
    }, null, 4),
    m("div", {
      ref: "actualContent",
      class: "nut-list-container",
      style: L({ transform: e.getTransform() })
    }, [
      (u(!0), d(ee, null, re(e.visibleData, (l, i) => (u(), d("div", {
        key: l,
        class: "nut-list-item"
      }, [
        D(e.$slots, "default", {
          item: l,
          index: i + e.start
        })
      ]))), 128))
    ], 4)
  ], 36);
}
const gh = /* @__PURE__ */ K(mh, [["render", hh]]), { create: yh } = W("circle-progress"), vh = yh({
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
    const t = Math.random().toString(36).slice(-8), n = N(() => {
      const i = e.clockwise ? 1 : 0;
      return `M 50 50 m 0 -45 a 45 45 0 1 ${i} 0 90 a 45 45 0 1, ${i} 0 -90`;
    }), s = N(() => ot(e.color) ? `url(#${t})` : e.color), o = N(() => {
      let i = 283, r = i * Number(e.progress) / 100;
      return {
        stroke: ot(e.color) ? `url(#${t})` : e.color,
        strokeDasharray: `${r}px ${i}px`
      };
    }), a = N(() => ({
      stroke: e.pathColor
    })), l = N(() => {
      if (!ot(e.color))
        return;
      let i = e.color;
      const r = Object.keys(i).sort((f, y) => parseFloat(f) - parseFloat(y));
      let p = [];
      return r.map((f) => {
        let y = {
          key: "",
          value: ""
        };
        y.key = f, y.value = i[f], p.push(y);
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
}), $h = { viewBox: "0 0 100 100" }, bh = ["id"], kh = ["offset", "stop-color"], wh = ["d", "stroke-width"], Sh = ["d", "stroke", "stroke-linecap", "stroke-width"], Ch = { class: "nut-circle-progress__text" };
function Th(e, t, n, s, o, a) {
  return u(), d("div", {
    class: "nut-circle-progress",
    style: L({ height: Number(e.radius) * 2 + "px", width: Number(e.radius) * 2 + "px" })
  }, [
    (u(), d("svg", $h, [
      m("defs", null, [
        m("linearGradient", {
          id: e.refRandomId,
          x1: "100%",
          y1: "0%",
          x2: "0%",
          y2: "0%"
        }, [
          (u(!0), d(ee, null, re(e.stop, (l, i) => (u(), d("stop", {
            key: i,
            offset: l.key,
            "stop-color": l.value
          }, null, 8, kh))), 128))
        ], 8, bh)
      ]),
      m("path", {
        class: "nut-circle-progress__path",
        style: L(e.pathStyle),
        d: e.path,
        fill: "none",
        "stroke-width": e.strokeWidth
      }, " > ", 12, wh),
      m("path", {
        class: "nut-circle-progress__hover",
        style: L(e.hoverStyle),
        d: e.path,
        fill: "none",
        stroke: e.hoverColor,
        "stroke-linecap": e.strokeLinecap,
        "stroke-width": e.strokeWidth
      }, null, 12, Sh)
    ])),
    m("div", Ch, [
      D(e.$slots, "default", {}, () => [
        m("div", null, B(e.progress) + "%", 1)
      ])
    ])
  ], 4);
}
const Nh = /* @__PURE__ */ K(vh, [["render", Th]]), { create: Dh } = W("noticebar"), Ih = Dh({
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
      return e.item.props.style = e.style, e.item.key = e.key, we(e.item);
    },
    Notice: ba,
    CircleClose: Xt
  },
  emits: ["click", "close", "acrossEnd"],
  setup(e, { emit: t, slots: n }) {
    const s = P(null), o = P(null), a = ue({
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
    }), l = N(() => a.isCanScroll == null ? e.wrapable : !a.isCanScroll && !e.wrapable), i = N(() => ({
      "nut-noticebar__page-wrap-content": !0,
      "nut-ellipsis": l.value,
      [a.animationClass]: !0
    })), r = N(() => {
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
        let A = ~~(e.height / e.speed / 4);
        M = {
          transition: `all ${A == 0 ? ~~(e.height / e.speed) : A}s`,
          "margin-top": `-${e.height}px`
        };
      }
      return M;
    });
    Q(
      () => e.text,
      () => {
        y();
      }
    ), Q(
      () => e.list,
      (M) => {
        a.scrollList = [].concat(M);
      }
    );
    const y = () => {
      a.showNoticebar != !1 && setTimeout(() => {
        if (!s.value || !o.value)
          return;
        const M = s.value.getBoundingClientRect().width, A = o.value.getBoundingClientRect().width;
        a.isCanScroll = e.scrollable == null ? A > M : e.scrollable, a.isCanScroll ? (a.wrapWidth = M, a.offsetWidth = A, a.duration = A / e.speed, a.animationClass = "play") : a.animationClass = "";
      }, 0);
    }, g = (M) => {
      t("click", M);
    }, v = (M) => {
      e.closeMode && (a.showNoticebar = !e.closeMode), t("close", M);
    }, b = (M) => {
      a.firstRound = !1, t("acrossEnd", M), setTimeout(() => {
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
    }, $ = () => {
      a.timer = setInterval(
        () => {
          let M = 100;
          for (let A = 0; A < M; A++)
            h(A, !(A < M - 1));
        },
        e.standTime + 100 * e.speed
      );
    }, h = (M, A) => {
      setTimeout(() => {
        a.distance -= e.height / 100, A && (a.scrollList.push(a.scrollList[0]), a.scrollList.shift(), a.distance = 0);
      }, M * e.speed);
    }, w = (M) => {
      t("click", M);
    }, I = () => {
      e.closeMode && (a.showNoticebar = !e.closeMode), t("close", a.scrollList[0]);
    };
    ve(() => {
      e.direction == "vertical" ? (n.default ? (T(), Y()) : a.scrollList = [].concat(e.list), setTimeout(() => {
        e.complexAm ? $() : k();
      }, e.standTime)) : y();
    });
    const T = () => {
      n.default && (a.scrollList = [].concat(n.default()[0].children));
    }, Y = () => {
      setTimeout(() => {
        var M = new MutationObserver(() => {
          a.showNotica = !1, setTimeout(() => {
            a.showNotica = !0;
          }), T();
        });
        const A = document.getElementsByClassName("nut-noticebar-custom-item")[0];
        A && M.observe(A, {
          childList: !0,
          subtree: !0
        });
      }, 100);
    };
    return gt(() => {
      a.keepAlive && (a.keepAlive = !1);
    }), yt(() => {
      a.keepAlive = !0, clearInterval(a.timer);
    }), je(() => {
      clearInterval(a.timer);
    }), ce(G({}, me(a)), {
      isEllipsis: l,
      barStyle: r,
      contentStyle: p,
      horseLampStyle: f,
      wrap: s,
      content: o,
      handleClick: g,
      onClickIcon: v,
      onAnimationEnd: b,
      go: w,
      handleClickIcon: I,
      slots: n,
      pxCheck: _e,
      wrapContentClass: i
    });
  }
}), _h = { class: "nut-noticebar" }, Bh = { class: "nut-noticebar__page-lefticon" }, Mh = {
  ref: "wrap",
  class: "nut-noticebar__page-wrap"
}, Eh = { class: "showNotica" }, Lh = { class: "nut-noticebar-custom-item" }, Ph = ["onClick"];
function Ah(e, t, n, s, o, a) {
  const l = j("Notice"), i = j("CircleClose"), r = j("ScrollItem");
  return u(), d("view", _h, [
    e.direction == "across" ? Ce((u(), d("view", {
      key: 0,
      class: _(["nut-noticebar__page", {
        "nut-noticebar__page--withicon": e.closeMode,
        "nut-noticebar__page--close": e.closeMode,
        "nut-noticebar__page--wrapable": e.wrapable
      }]),
      style: L(e.barStyle),
      onClick: t[3] || (t[3] = (...p) => e.handleClick && e.handleClick(...p))
    }, [
      m("view", Bh, [
        D(e.$slots, "left-icon", {}, () => [
          e.leftIcon ? (u(), x(l, {
            key: 0,
            size: "16px"
          })) : C("", !0)
        ])
      ]),
      m("view", Mh, [
        m("view", {
          ref: "content",
          class: _(e.wrapContentClass),
          style: L(e.contentStyle),
          onAnimationend: t[0] || (t[0] = (...p) => e.onAnimationEnd && e.onAnimationEnd(...p)),
          onWebkitAnimationEnd: t[1] || (t[1] = (...p) => e.onAnimationEnd && e.onAnimationEnd(...p))
        }, [
          D(e.$slots, "default", {}, () => [
            ge(B(e.text), 1)
          ])
        ], 38)
      ], 512),
      e.closeMode || e.$slots["right-icon"] ? (u(), d("view", {
        key: 0,
        class: "nut-noticebar__page-righticon",
        onClick: t[2] || (t[2] = Ne((...p) => e.onClickIcon && e.onClickIcon(...p), ["stop"]))
      }, [
        e.$slots["right-icon"] ? D(e.$slots, "right-icon", { key: 0 }) : (u(), x(i, { key: 1 }))
      ])) : C("", !0)
    ], 6)), [
      [De, e.showNoticebar]
    ]) : C("", !0),
    e.scrollList.length > 0 && e.direction == "vertical" && e.showNoticebar ? (u(), d("view", {
      key: 1,
      class: "nut-noticebar__vertical",
      style: L(e.barStyle)
    }, [
      e.slots.default ? (u(), d(ee, { key: 0 }, [
        m("view", {
          class: "nut-noticebar__vertical-list",
          style: L(e.horseLampStyle)
        }, [
          m("div", Eh, [
            (u(!0), d(ee, null, re(e.scrollList, (p, f) => (u(), x(r, {
              key: f,
              style: L({ height: e.height + "px", "line-height": e.height + "px" }),
              item: p
            }, null, 8, ["style", "item"]))), 128))
          ])
        ], 4),
        m("view", Lh, [
          D(e.$slots, "default")
        ])
      ], 64)) : (u(), d("ul", {
        key: 1,
        class: "nut-noticebar__vertical-list",
        style: L(e.horseLampStyle)
      }, [
        (u(!0), d(ee, null, re(e.scrollList, (p, f) => (u(), d("li", {
          key: f,
          class: "nut-noticebar__vertical-item",
          style: L({ height: e.pxCheck(e.height), lineHeight: e.pxCheck(e.height) }),
          onClick: (y) => e.go(p)
        }, B(p), 13, Ph))), 128))
      ], 4)),
      m("view", {
        class: "go",
        onClick: t[4] || (t[4] = (p) => !e.slots.rightIcon && e.handleClickIcon())
      }, [
        D(e.$slots, "right-icon", {}, () => [
          e.closeMode ? (u(), x(i, {
            key: 0,
            color: e.color,
            size: "11px"
          }, null, 8, ["color"])) : C("", !0)
        ])
      ])
    ], 4)) : C("", !0)
  ]);
}
const zh = /* @__PURE__ */ K(Ih, [["render", Ah]]), { create: Vh } = W("empty"), Oh = "NutEmpty", Hh = {
  empty: "https://static-ftcms.jd.com/p/files/61a9e3183985005b3958672b.png",
  error: "https://ftcms.jd.com/p/files/61a9e33ee7dcdbcc0ce62736.png",
  network: "https://static-ftcms.jd.com/p/files/61a9e31de7dcdbcc0ce62734.png"
}, Rh = Vh({
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
    const t = ke(Oh), n = N(() => e.imageSize ? {
      width: _e(e.imageSize),
      height: _e(e.imageSize)
    } : {});
    return { src: N(() => e.image.startsWith("https://") || e.image.startsWith("http://") || e.image.startsWith("//") ? e.image : Hh[e.image]), style: n, translate: t };
  }
}), Fh = { class: "nut-empty" }, Wh = ["src"], Yh = { class: "nut-empty__description" };
function jh(e, t, n, s, o, a) {
  return u(), d("view", Fh, [
    m("view", {
      class: "nut-empty__box",
      style: L(e.style)
    }, [
      D(e.$slots, "image", {}, () => [
        e.src ? (u(), d("img", {
          key: 0,
          class: "nut-empty__box--img",
          src: e.src
        }, null, 8, Wh)) : C("", !0)
      ])
    ], 4),
    D(e.$slots, "description", {}, () => [
      m("view", Yh, B(e.description || e.translate("noData")), 1)
    ]),
    D(e.$slots, "default")
  ]);
}
const Kh = /* @__PURE__ */ K(Rh, [["render", jh]]);
function Sn(e, t) {
  let n = null, s = Date.now();
  return function() {
    let o = Date.now(), a = t - (o - s);
    n && clearTimeout(n), a <= 0 ? (e.apply(null, arguments), s = Date.now()) : n = setTimeout(e, a);
  };
}
const { create: Uh } = W("video"), Xh = "NutVideo", qh = Uh({
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
    const s = ke(Xh), o = ue({
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
    }), a = P(null), l = N(() => e.options.disabled);
    Q(
      () => e.source,
      (V) => {
        V.src && Te(() => {
          o.videoElm.load();
        });
      },
      { immediate: !0, deep: !0 }
    ), Q(
      () => e.options,
      (V) => {
        o.state.isMuted = V ? V.muted : !1;
      },
      { immediate: !0 }
    );
    const i = () => {
      o.videoElm = a.value, e.options.autoplay && setTimeout(() => {
        o.videoElm.play();
      }, 200), e.options.touchPlay && (o.showTouchMask = !0), e.options.playsinline && (o.videoElm.setAttribute("playsinline", e.options.playsinline), o.videoElm.setAttribute("webkit-playsinline", e.options.playsinline), o.videoElm.setAttribute("x5-video-player-type", "h5-page"), o.videoElm.setAttribute("x5-video-player-fullscreen", !1)), k(), o.showToolbox ? r() : (o.videoElm.addEventListener("play", () => {
        o.state.playing = !0, t("play", o.videoElm);
      }), o.videoElm.addEventListener("pause", () => {
        o.state.playing = !1, t("pause", o.videoElm);
      }), o.videoElm.addEventListener("ended", v), o.videoElm.addEventListener("timeupdate", Sn(g, 1e3)));
    }, r = () => {
      const V = a.value, X = a.value.getElementsByClassName("nut-video-controller__progress-value")[0];
      o.player.$player = V, o.progressBar.progressElm = X, o.progressBar.pos = X.getBoundingClientRect(), o.videoSet.progress.width = Math.round(X.getBoundingClientRect().width);
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
            }), o.videoElm.addEventListener("timeupdate", Sn(g, 1e3)), o.videoElm.addEventListener("ended", v), t("play", o.videoElm);
          } catch (V) {
            b();
          }
        else
          o.videoElm.pause(), t("pause", o.videoElm);
    }, f = (V) => {
      var X = Math.floor(V / 3600);
      +X < 10 && (X = "0" + X);
      var Z = Math.floor(V % 3600 / 60);
      +Z < 10 && (Z = "0" + Z);
      var F = Math.round(V % 3600 % 60);
      +F < 10 && (F = "0" + F);
      var oe = "";
      return X != 0 ? oe = X + ":" + Z + ":" + F : oe = Z + ":" + F, oe;
    }, y = () => {
      o.videoSet.loaded && (o.videoSet.loaded = o.videoElm.buffered.end(0) / o.videoElm.duration * 100);
    }, g = () => {
      const V = o.videoElm.currentTime / o.videoElm.duration;
      o.videoSet.progress.current = Math.round(o.videoSet.progress.width * V), o.videoSet.totalTime = f(o.videoElm.duration), o.videoSet.displayTime = f(o.videoElm.currentTime), t("time", o.videoSet.displayTime, o.videoSet.totalTime);
    }, v = () => {
      o.state.playing = !1, o.state.isEnd = !0, o.videoSet.displayTime = "00:00", o.videoSet.progress.current = 0, o.videoElm.currentTime = 0, t("playend", o.videoElm);
    }, b = () => {
      o.state.isError = !0;
    }, k = () => {
      o.state.vol = e.options.volume;
    }, c = () => {
      o.state.isMuted = !o.state.isMuted, o.videoElm.muted = o.state.isMuted;
    }, $ = () => {
    }, h = (V) => {
      let Z = V.targetTouches[0].pageX - o.progressBar.pos.left;
      Z <= 0 && (Z = 0), Z >= o.videoSet.progress.width && (Z = o.videoSet.progress.width), o.videoSet.progress.current = Z;
      let F = o.videoSet.progress.current / o.videoSet.progress.width;
      o.videoElm.duration && I(F, o.videoElm.duration);
    }, w = (V) => {
      let Z = V.changedTouches[0].pageX - o.progressBar.pos.left;
      o.videoSet.progress.current = Z;
      let F = Z / o.videoSet.progress.width;
      o.videoElm.duration && I(F, o.videoElm.duration);
    }, I = (V, X) => {
      o.videoElm.currentTime = Math.floor(V * X);
    }, T = () => {
      o.state.isError = !1, i();
    }, Y = () => {
      o.state.fullScreen ? (o.state.fullScreen = !1, document.webkitCancelFullScreen()) : (o.state.fullScreen = !0, o.videoElm.webkitRequestFullScreen());
    };
    return n({
      play: p,
      pause: () => {
        o.state.playing = !1, o.videoElm.pause(), t("pause", o.videoElm);
      },
      stop: () => {
        v(), o.videoElm.pause();
      },
      muted: () => {
        o.state.isMuted = !0, o.videoElm.muted = !0;
      },
      unmuted: () => {
        o.state.isMuted = !1, o.videoElm.muted = !1;
      }
    }), ve(() => {
      i();
    }), ce(G(G({
      root: a
    }, me(e)), me(o)), {
      handleError: b,
      isDisabled: l,
      play: p,
      handleMuted: c,
      touchSlidSrart: $,
      touchSlidMove: h,
      touchSlidEnd: w,
      retry: T,
      fullScreen: Y,
      translate: s
    });
  }
}), Gh = {
  ref: "videocon",
  class: "nut-video"
}, Zh = ["muted", "autoplay", "loop", "poster", "controls", "preload"], Jh = ["src", "type"], Qh = { class: "nut-video-controller__now" }, xh = { class: "nut-video-controller__progress" }, eg = {
  ref: "progressBar",
  class: "nut-video-controller__progress-value"
}, tg = /* @__PURE__ */ m("div", { class: "nut-video-controller__ball-move" }, null, -1), ng = [
  tg
], og = {
  ref: "playedBar",
  class: "nut-video-controller__played"
}, lg = { class: "nut-video-controller__total" }, sg = { class: "nut-video-error" }, ag = { class: "nut-video-error-tip" };
function ig(e, t, n, s, o, a) {
  return u(), d("div", Gh, [
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
      }, null, 8, Jh)
    ], 40, Zh),
    e.showToolbox && !e.isDisabled ? (u(), d("div", {
      key: 0,
      ref: "touchMask",
      class: "nut-video-mask",
      onClick: t[1] || (t[1] = (...l) => e.play && e.play(...l))
    }, null, 512)) : C("", !0),
    e.showToolbox && !e.isDisabled ? Ce((u(), d("div", {
      key: 1,
      ref: "palyBtn",
      class: "nut-video-play-btn",
      onClick: t[2] || (t[2] = (...l) => e.play && e.play(...l))
    }, null, 512)), [
      [De, !e.state.playing]
    ]) : C("", !0),
    Ce(m("div", {
      class: _(["nut-video-controller", { "nut-video-controller--show": !e.state.playing, "nut-video-controller--hide": e.state.playing }])
    }, [
      m("div", {
        class: "nut-video-controller__playbtn",
        onClick: t[3] || (t[3] = (...l) => e.play && e.play(...l))
      }),
      m("div", Qh, B(e.videoSet.displayTime), 1),
      m("div", xh, [
        m("div", eg, [
          m("div", {
            class: "buffered",
            style: L({ width: `${e.videoSet.loaded}%` })
          }, null, 4),
          m("div", {
            class: "nut-video-controller__ball",
            style: L({
              transform: `translate3d(${e.videoSet.progress.current}px, -50%, 0)`
            }),
            onTouchmove: t[4] || (t[4] = Ne((l) => e.touchSlidMove(l), ["stop", "prevent"])),
            onTouchstart: t[5] || (t[5] = Ne((l) => e.touchSlidSrart(), ["stop"])),
            onTouchend: t[6] || (t[6] = Ne((l) => e.touchSlidEnd(l), ["stop"]))
          }, ng, 36),
          m("div", og, null, 512)
        ], 512)
      ]),
      m("div", lg, B(e.videoSet.totalTime), 1),
      m("div", {
        class: _(["nut-video-controller__volume", { muted: e.state.isMuted }]),
        onClick: t[7] || (t[7] = (...l) => e.handleMuted && e.handleMuted(...l))
      }, null, 2),
      m("div", {
        class: "nut-video-controller__full",
        onClick: t[8] || (t[8] = (...l) => e.fullScreen && e.fullScreen(...l))
      })
    ], 2), [
      [De, e.showToolbox && !e.isDisabled]
    ]),
    Ce(m("div", sg, [
      m("p", ag, B(e.translate("errorTip")), 1),
      m("p", {
        class: "nut-video-error-retry",
        onClick: t[9] || (t[9] = (...l) => e.retry && e.retry(...l))
      }, B(e.translate("clickRetry")), 1)
    ], 512), [
      [De, e.state.isError]
    ])
  ], 512);
}
const tn = /* @__PURE__ */ K(qh, [["render", ig]]), wo = Symbol("nut-steps"), { create: rg, componentName: ug } = W("steps"), cg = rg({
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
    }), o = N(() => {
      const i = ug;
      return {
        [i]: !0,
        [`${i}-${e.direction}`]: !0,
        [`${i}-dot`]: !!e.progressDot
      };
    });
    return Me(wo, {
      relation: (i) => {
        i && s.children.push(i);
      },
      state: s,
      props: e,
      onEmit: (i) => {
        t("clickStep", i);
      }
    }), () => {
      var i;
      return we(
        "view",
        {
          class: o.value
        },
        (i = n.default) == null ? void 0 : i.call(n)
      );
    };
  }
}), { create: dg, componentName: fg } = W("step"), pg = dg({
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
    const { proxy: e } = Fe(), t = Be(wo);
    t.relation(e);
    const n = ue({
      dot: t.props.progressDot
    }), s = N(() => t.state.children.indexOf(e) + 1), o = () => {
      const r = s.value;
      return r < +t.props.current ? "finish" : r === +t.props.current ? "process" : "wait";
    }, a = N(() => o()), l = N(() => {
      const r = fg;
      return {
        [r]: !0,
        [`${r}-${a.value}`]: !0
      };
    }), i = () => {
      t.onEmit(s.value);
    };
    return ce(G({}, me(n)), {
      index: s,
      classes: l,
      handleClickStep: i
    });
  }
}), mg = { class: "nut-step-head" }, hg = /* @__PURE__ */ m("view", { class: "nut-step-line" }, null, -1), gg = { class: "nut-step-icon-inner" }, yg = {
  key: 1,
  class: "nut-step-inner"
}, vg = { class: "nut-step-main" }, $g = { class: "nut-step-title" }, bg = { key: 0 }, kg = {
  key: 0,
  class: "nut-step-content"
}, wg = ["innerHTML"];
function Sg(e, t, n, s, o, a) {
  return u(), d("view", {
    class: _(e.classes),
    onClick: t[0] || (t[0] = (...l) => e.handleClickStep && e.handleClickStep(...l))
  }, [
    m("view", mg, [
      hg,
      m("view", {
        class: _(["nut-step-icon", [e.dot ? "" : "is-icon"]])
      }, [
        m("view", gg, [
          D(e.$slots, "icon", {}, () => [
            e.dot ? (u(), d(ee, { key: 0 }, [], 64)) : (u(), d("view", yg, B(e.index), 1))
          ])
        ])
      ], 2)
    ]),
    m("view", vg, [
      m("view", $g, [
        e.$slots.title ? C("", !0) : (u(), d("span", bg, B(e.title), 1)),
        D(e.$slots, "title")
      ]),
      e.content || e.$slots.content ? (u(), d("view", kg, [
        e.$slots.content ? C("", !0) : (u(), d("span", {
          key: 0,
          innerHTML: e.content
        }, null, 8, wg)),
        D(e.$slots, "content")
      ])) : C("", !0)
    ])
  ], 2);
}
const Cg = /* @__PURE__ */ K(pg, [["render", Sg]]), So = Symbol("nut-swiper"), { create: Tg, componentName: Cn } = W("swiper"), Ng = Tg({
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
    const o = P(), a = ue({
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
    }), l = Ge(), i = N(() => e.direction === "vertical"), r = N(() => {
      const H = Cn;
      return {
        [`${H}-inner`]: !0,
        [`${H}-vertical`]: i.value
      };
    }), p = N(() => {
      const H = Cn;
      return {
        [`${H}-pagination`]: !0,
        [`${H}-pagination-vertical`]: i.value
      };
    }), f = N(() => i.value ? l.deltaY.value : l.deltaX.value), y = N(() => l.direction.value === e.direction), g = N(() => a.children.length), v = N(() => a[i.value ? "height" : "width"]), b = N(() => g.value * v.value), k = N(() => a.rect ? (i.value ? a.rect.height : a.rect.width) - v.value * g.value : 0), c = N(() => (a.active + g.value) % g.value), $ = () => {
      let H = 0;
      H = a.offset, a.style = {
        transitionDuration: `${a.moving ? 0 : e.duration}ms`,
        transform: `translate${i.value ? "Y" : "X"}(${H}px)`,
        [i.value ? "height" : "width"]: `${v.value * g.value}px`,
        [i.value ? "width" : "height"]: `${i.value ? a.width : a.height}px`
      };
    }, h = (H) => {
      var de;
      let ne = [];
      const U = a.childrenVNode.length;
      let ae = (de = n == null ? void 0 : n.default) == null ? void 0 : de.call(n);
      if (ae = ae.filter((fe) => fe.children && Array.isArray(fe.children)), ae.forEach((fe) => {
        ne = ne.concat(fe.children);
      }), !U)
        a.childrenVNode = ne.slice(), H.proxy && a.children.push(H.proxy);
      else if (U > ne.length)
        a.children = a.children.filter((fe) => H.proxy !== fe);
      else if (U < ne.length) {
        for (let fe = 0; fe < U; fe++)
          if (ne[fe].key !== a.childrenVNode[fe].key) {
            H.proxy && a.children.splice(fe, 0, H.proxy), H.vnode && a.childrenVNode.splice(fe, 0, H.vnode);
            break;
          }
        U !== ne.length && (H.proxy && a.children.push(H.proxy), H.vnode && a.childrenVNode.push(H.vnode));
      } else
        a.childrenVNode = ne.slice(), H.proxy && a.children.push(H.proxy);
    }, w = (H, ne = 0) => {
      let U = H * v.value;
      e.loop || (U = Math.min(U, -k.value));
      let ae = ne - U;
      return e.loop || (ae = Pe(ae, k.value, 0)), ae;
    }, I = (H) => {
      const { active: ne } = a;
      return H ? e.loop ? Pe(ne + H, -1, g.value) : Pe(ne + H, 0, g.value - 1) : ne;
    }, T = ({ pace: H = 0, offset: ne = 0, isEmit: U = !1 }) => {
      if (g.value <= 1)
        return;
      const { active: ae } = a, de = I(H), fe = w(de, ne);
      if (e.loop) {
        if (a.children[0] && fe !== k.value) {
          const be = fe < k.value;
          a.children[0].setOffset(be ? b.value : 0);
        }
        if (a.children[g.value - 1] && fe !== 0) {
          const be = fe > 0;
          a.children[g.value - 1].setOffset(be ? -b.value : 0);
        }
      }
      a.active = de, a.offset = fe, U && ae !== a.active && t("change", c.value), $();
    }, Y = () => {
      a.moving = !0, a.active <= -1 && T({ pace: g.value }), a.active >= g.value && T({ pace: -g.value });
    }, M = () => {
      a.autoplayTimer && clearTimeout(a.autoplayTimer);
    }, A = (H) => {
      Y(), l.reset(), Ve(() => {
        Ve(() => {
          a.moving = !1, T({
            pace: H,
            isEmit: !0
          });
        });
      });
    }, S = () => {
      A(-1);
    }, E = () => {
      A(1);
    }, V = (H) => {
      Y(), l.reset(), Ve(() => {
        a.moving = !1;
        let ne;
        e.loop && g.value === H ? ne = a.active === 0 ? 0 : H : ne = H % g.value, T({
          pace: ne - a.active,
          isEmit: !0
        });
      });
    }, X = () => {
      +e.autoPlay <= 0 || g.value <= 1 || (M(), a.autoplayTimer = setTimeout(() => {
        E(), X();
      }, Number(e.autoPlay)));
    }, Z = (H = +e.initPage) => {
      M(), a.rect = o.value.getBoundingClientRect(), H = Math.min(g.value - 1, H), a.width = e.width ? +e.width : a.rect.width, a.height = e.height ? +e.height : a.rect.height, a.active = H, a.offset = w(a.active), a.moving = !0, $(), X();
    }, F = (H) => {
      e.isPreventDefault && H.preventDefault(), e.isStopPropagation && H.stopPropagation(), e.touchable && (l.start(H), a.touchTime = Date.now(), M(), Y());
    }, oe = (H) => {
      e.touchable && a.moving && (l.move(H), y.value && T({
        offset: f.value
      }));
    }, q = () => {
      if (!e.touchable || !a.moving)
        return;
      const H = f.value / (Date.now() - a.touchTime);
      if ((Math.abs(H) > 0.3 || Math.abs(f.value) > +(v.value / 2).toFixed(2)) && y.value) {
        let U = 0;
        const ae = i.value ? l.offsetY.value : l.offsetX.value;
        e.loop ? U = ae > 0 ? f.value > 0 ? -1 : 1 : 0 : U = -Math[f.value > 0 ? "ceil" : "floor"](f.value / v.value), T({
          pace: U,
          isEmit: !0
        });
      } else
        f.value && T({ pace: 0 });
      a.moving = !1, $(), X();
    };
    return Me(So, {
      props: e,
      size: v,
      relation: h
    }), s({
      prev: S,
      next: E,
      to: V
    }), yt(() => {
      M();
    }), Yt(() => {
      M();
    }), Q(
      () => e.initPage,
      (H) => {
        Te(() => {
          Z(Number(H));
        });
      }
    ), Q(
      () => e.height,
      () => {
        Te(() => {
          Z();
        });
      }
    ), Q(
      () => a.children.length,
      () => {
        Te(() => {
          Z();
        });
      }
    ), Q(
      () => e.autoPlay,
      (H) => {
        +H > 0 ? X() : M();
      }
    ), {
      state: a,
      classesInner: r,
      classesPagination: p,
      container: o,
      activePagination: c,
      onTouchStart: F,
      onTouchMove: oe,
      onTouchEnd: q
    };
  }
});
function Dg(e, t, n, s, o, a) {
  return u(), d("view", {
    ref: "container",
    class: "nut-swiper",
    onTouchstart: t[0] || (t[0] = (...l) => e.onTouchStart && e.onTouchStart(...l)),
    onTouchmove: t[1] || (t[1] = (...l) => e.onTouchMove && e.onTouchMove(...l)),
    onTouchend: t[2] || (t[2] = (...l) => e.onTouchEnd && e.onTouchEnd(...l)),
    onTouchcancel: t[3] || (t[3] = (...l) => e.onTouchEnd && e.onTouchEnd(...l))
  }, [
    m("view", {
      class: _(e.classesInner),
      style: L(e.state.style)
    }, [
      D(e.$slots, "default")
    ], 6),
    D(e.$slots, "page"),
    e.paginationVisible && !e.$slots.page ? (u(), d("view", {
      key: 0,
      class: _(e.classesPagination)
    }, [
      (u(!0), d(ee, null, re(e.state.children.length, (l, i) => (u(), d("i", {
        key: i,
        style: L({
          backgroundColor: e.activePagination === i ? e.paginationColor : e.paginationUnselectedColor
        }),
        class: _({ active: e.activePagination === i })
      }, null, 6))), 128))
    ], 2)) : C("", !0)
  ], 544);
}
const nn = /* @__PURE__ */ K(Ng, [["render", Dg]]);
function Ig(e) {
  const t = Fe();
  t && Object.assign(t.proxy, e);
}
const { create: _g } = W("swiper-item"), Bg = _g({
  setup() {
    const e = Be(So);
    e.relation(Fe());
    const t = ue({
      offset: 0
    }), n = N(() => {
      const o = {}, a = e == null ? void 0 : e.props.direction;
      return e != null && e.size.value && (o[a === "horizontal" ? "width" : "height"] = `${e == null ? void 0 : e.size.value}px`), t.offset && (o.transform = `translate${a === "horizontal" ? "X" : "Y"}(${t.offset}px)`), o;
    }), s = (o) => {
      t.offset = o;
    };
    return je(() => {
      e.relation(Fe(), "unmount");
    }), Ig({ setOffset: s }), {
      style: n
    };
  }
});
function Mg(e, t, n, s, o, a) {
  return u(), d("view", {
    class: "nut-swiper-item",
    style: L(e.style)
  }, [
    D(e.$slots, "default")
  ], 4);
}
const on = /* @__PURE__ */ K(Bg, [["render", Mg]]), { componentName: Tn, create: Eg } = W("price"), Lg = Eg({
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
    const t = N(() => ({
      [Tn]: !0,
      [`${Tn}--strike`]: e.strikeThrough
    })), n = N(() => e.needSymbol ? e.symbol : ""), s = (l) => String(l).indexOf(".") > 0;
    return {
      classes: t,
      showSymbol: n,
      checkPoint: s,
      formatThousands: (l) => (Number(l) == 0 && (l = 0), s(l) ? (l = Number(l).toFixed(e.decimalDigits), l = typeof l.split(".") == "string" ? l.split(".") : l.split(".")[0]) : l = l.toString(), e.thousands ? (l || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,") : l),
      formatDecimal: (l) => {
        Number(l) == 0 && (l = 0), s(l) ? (l = Number(l).toFixed(e.decimalDigits), l = typeof l.split(".") == "string" ? 0 : l.split(".")[1] ? l.split(".")[1] : 0) : l = 0;
        const i = "0." + l, r = Number(i).toFixed(e.decimalDigits);
        return String(r).substring(2, r.length);
      }
    };
  }
}), Pg = ["innerHTML"], Ag = ["innerHTML"];
function zg(e, t, n, s, o, a) {
  return u(), d("view", {
    class: _(e.classes)
  }, [
    e.needSymbol && e.position === "before" ? (u(), d("view", {
      key: 0,
      class: _(["nut-price--symbol", `nut-price--symbol-${e.size}`]),
      innerHTML: e.showSymbol
    }, null, 10, Pg)) : C("", !0),
    m("view", {
      class: _(`nut-price--${e.size}`)
    }, B(e.formatThousands(e.price)), 3),
    e.decimalDigits != 0 ? (u(), d("view", {
      key: 1,
      class: _(`nut-price--decimal-${e.size}`)
    }, ".", 2)) : C("", !0),
    m("view", {
      class: _(`nut-price--decimal-${e.size}`)
    }, B(e.formatDecimal(e.price)), 3),
    e.needSymbol && e.position === "after" ? (u(), d("view", {
      key: 2,
      class: _(["nut-price--symbol", `nut-price--symbol-${e.size}`]),
      innerHTML: e.showSymbol
    }, null, 10, Ag)) : C("", !0)
  ], 2);
}
const ln = /* @__PURE__ */ K(Lg, [["render", zg]]), Co = {
  show: { type: Boolean, default: !1 },
  initNo: { type: Number, default: 0 },
  showIndex: { type: Boolean, default: !0 },
  minZoom: { type: Number, default: 1 / 3 },
  maxZoom: { type: Number, default: 3 }
}, { create: Vg } = W("image-preview-item"), Og = Vg({
  props: ce(G({}, Co), {
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
    NutVideo: tn,
    NutSwiperItem: on
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
    }), s = Ge(), o = N(() => {
      const { rootWidth: S, rootHeight: E } = e, V = E / S;
      return n.imageRatio > V;
    }), a = N(() => {
      const S = e.image;
      if (S && S.src) {
        const { scale: E, moveX: V, moveY: X, moving: Z, zooming: F } = n, oe = {
          transitionDuration: F || Z ? "0s" : ".3s"
        };
        if (E !== 1) {
          const q = V / E, H = X / E;
          oe.transform = `scale(${E}, ${E}) translate(${q}px, ${H}px)`;
        }
        return oe;
      }
      return {};
    }), l = N(() => {
      if (n.imageRatio) {
        const { rootWidth: S, rootHeight: E } = e, V = o.value ? E / n.imageRatio : S;
        return Math.max(0, (n.scale * V - S) / 2);
      }
      return 0;
    }), i = N(() => {
      if (n.imageRatio) {
        const { rootWidth: S, rootHeight: E } = e, V = o.value ? E : S * n.imageRatio;
        return Math.max(0, (n.scale * V - E) / 2);
      }
      return 0;
    }), r = (S) => {
      const { naturalWidth: E, naturalHeight: V } = S.target;
      n.imageRatio = V / E;
    }, p = () => {
      f(1), n.moveX = 0, n.moveY = 0;
    }, f = (S) => {
      S = Pe(S, +e.minZoom, +e.maxZoom + 1), S !== n.scale && (n.scale = S, t("scale", {
        scale: S,
        index: e.initNo
      }));
    }, y = () => {
      const S = n.scale > 1 ? 1 : 2;
      f(S), n.moveX = 0, n.moveY = 0;
    }, g = (S) => Math.sqrt(at(S[0].clientX - S[1].clientX, 2) + at(S[0].clientY - S[1].clientY, 2));
    let v, b, k, c, $, h, w;
    const I = (S) => {
      const { touches: E } = S, { offsetX: V } = s;
      s.start(S), w = E.length, v = n.moveX, b = n.moveY, h = Date.now(), n.moving = w === 1 && n.scale !== 1, n.zooming = w === 2 && !V.value, n.zooming && (k = n.scale, c = g(S.touches));
    }, T = (S) => {
      const { touches: E } = S;
      if (s.move(S), (n.moving || n.zooming) && lt(S, !0), n.moving) {
        const { deltaX: V, deltaY: X } = s, Z = V.value + v, F = X.value + b;
        n.moveX = Pe(Z, -l.value, l.value), n.moveY = Pe(F, -i.value, i.value);
      }
      if (n.zooming && E.length === 2) {
        const V = g(E), X = k * V / c;
        f(X);
      }
    }, Y = () => {
      if (w == 1 && e.video && e.video.source || w > 1)
        return;
      const { offsetX: S, offsetY: E } = s, V = Date.now() - h, X = 250, Z = 5;
      S.value < Z && E.value < Z && V < X && ($ ? (clearTimeout($), $ = null, y()) : $ = setTimeout(() => {
        e.contentClose && t("close"), $ = null;
      }, X));
    }, M = (S) => {
      let E = !1;
      (n.moving || n.zooming) && (E = !0, n.moving && v === n.moveX && b === n.moveY && (E = !1), S.touches.length || (n.zooming && (n.moveX = Pe(n.moveX, -l.value, l.value), n.moveY = Pe(n.moveY, -i.value, i.value), n.zooming = !1), n.moving = !1, v = 0, b = 0, k = 1, n.scale < 1 && p(), n.scale > e.maxZoom && (n.scale = +e.maxZoom))), lt(S, E), Y(), s.reset();
    }, A = () => {
      t("close");
    };
    return Q(() => e.initNo, p), Q(
      () => e.show,
      (S) => {
        S || p();
      }
    ), ce(G({}, me(n)), {
      onTouchStart: I,
      onTouchMove: T,
      onTouchEnd: M,
      getDistance: g,
      imageStyle: a,
      imageLoad: r,
      closeSwiper: A
    });
  }
}), Hg = ["src"];
function Rg(e, t, n, s, o, a) {
  const l = j("nut-video"), i = j("nut-swiper-item");
  return u(), x(i, { onClick: e.closeSwiper }, {
    default: te(() => [
      m("view", {
        style: L(e.imageStyle),
        class: "nut-image-preview-box",
        onTouchstart: t[1] || (t[1] = (...r) => e.onTouchStart && e.onTouchStart(...r)),
        onTouchmove: t[2] || (t[2] = (...r) => e.onTouchMove && e.onTouchMove(...r)),
        onTouchend: t[3] || (t[3] = (...r) => e.onTouchEnd && e.onTouchEnd(...r)),
        onTouchcancel: t[4] || (t[4] = (...r) => e.onTouchEnd && e.onTouchEnd(...r))
      }, [
        e.image && e.image.src ? (u(), d("img", {
          key: 0,
          src: e.image.src,
          class: "nut-image-preview-img",
          onLoad: t[0] || (t[0] = (...r) => e.imageLoad && e.imageLoad(...r))
        }, null, 40, Hg)) : C("", !0),
        e.video && e.video.source ? (u(), x(l, {
          key: 1,
          source: e.video.source,
          options: e.video.options
        }, null, 8, ["source", "options"])) : C("", !0)
      ], 36)
    ]),
    _: 1
  }, 8, ["onClick"]);
}
const Fg = /* @__PURE__ */ K(Og, [["render", Rg]]), { create: Wg } = W("image-preview"), Yg = Wg({
  props: ce(G({}, Co), {
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
    ImagePreviewItem: Fg,
    CircleClose: Xt,
    NutPopup: Ee,
    NutSwiper: nn
  },
  setup(e, { emit: t }) {
    const n = P(), s = ue({
      showPop: e.show,
      active: 0,
      rootWidth: 0,
      rootHeight: 0
    }), o = N(() => {
      const f = "nut-image-preview-close";
      return `nut-image-preview-close-icon ${e.closeIconPosition == "top-right" ? `${f}-right` : `${f}-left`}`;
    }), a = N(() => Ut(e.videos) ? [].concat(e.videos).concat(e.images) : e.images), l = (f) => {
      f !== s.active && (s.active = f, t("change", s.active));
    }, i = () => {
      Kt(e.beforeClose, {
        args: [s.active],
        done: () => r()
      });
    }, r = () => {
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
        s.showPop = f, f && (l(e.initNo), Te(() => {
          p();
        }));
      }
    ), Q(
      () => e.initNo,
      (f) => {
        f != s.active && l(f);
      }
    ), ve(() => {
      l(e.initNo);
    }), ce(G({
      swipeRef: n
    }, me(s)), {
      onClose: i,
      mergeImages: a,
      setActive: l,
      iconClasses: o
    });
  }
}), jg = {
  ref: "swipeRef",
  class: "nut-image-preview"
}, Kg = {
  key: 0,
  class: "nut-image-preview-index"
};
function Ug(e, t, n, s, o, a) {
  const l = j("image-preview-item"), i = j("nut-swiper"), r = j("CircleClose"), p = j("nut-popup");
  return u(), x(p, {
    visible: e.showPop,
    "onUpdate:visible": t[1] || (t[1] = (f) => e.showPop = f),
    "pop-class": "nut-image-preview-custom-pop",
    "teleport-disable": e.teleportDisable,
    teleport: e.teleport,
    "lock-scroll": "",
    onClosed: e.onClose
  }, {
    default: te(() => [
      m("view", jg, [
        e.showPop ? (u(), x(i, {
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
            (u(!0), d(ee, null, re(e.mergeImages, (f, y) => (u(), x(l, {
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
        }, 8, ["auto-play", "loop", "init-page", "pagination-visible", "pagination-color", "onChange"])) : C("", !0)
      ], 512),
      e.showIndex ? (u(), d("view", Kg, B(e.active + 1) + " / " + B(e.mergeImages.length), 1)) : C("", !0),
      e.closeable ? (u(), d("view", {
        key: 1,
        class: _(e.iconClasses),
        onClick: t[0] || (t[0] = (...f) => e.onClose && e.onClose(...f))
      }, [
        D(e.$slots, "close-icon", {}, () => [
          le(r, { color: "#ffffff" })
        ])
      ], 2)) : C("", !0)
    ]),
    _: 3
  }, 8, ["visible", "teleport-disable", "teleport", "onClosed"]);
}
const sn = /* @__PURE__ */ K(Yg, [["render", Ug]]);
class Xg {
  constructor() {
    z(this, "show", !1);
    z(this, "images", []);
    z(this, "videos", []);
    z(this, "contentClose", !0);
    z(this, "initNo", 0);
    z(this, "paginationVisible", !1);
    z(this, "paginationColor", "");
    z(this, "autoplay", 0);
    z(this, "isWrapTeleport", !1);
    z(this, "showIndex", !0);
    z(this, "closeable", !1);
    z(this, "closeIcon", "circle-close");
    z(this, "closeIconPosition", "top-right");
    z(this, "beforeClose");
    z(this, "maxZoom", 3);
    z(this, "minZoom", 1 / 3);
    z(this, "isLoop", !0);
    z(this, "teleport", "body");
  }
}
class qg {
  constructor(t) {
    z(this, "options", new Xg());
    const n = Object.assign(this.options, t), { unmount: s } = Zt(n, {
      name: "image-preview",
      components: [Ee, tn, nn, on, vt],
      wrapper: () => ({
        setup() {
          return () => (n.onClose = () => {
            n.show = !1, Te(() => {
              s();
            });
          }, we(sn, n));
        }
      })
    });
  }
}
const Gg = (e) => new qg(e);
Gg.install = (e) => {
  e.use(sn);
};
function Zg(e) {
  const t = Fe();
  t && Object.assign(t.proxy, e);
}
const { create: Jg } = W("countup"), Qg = Jg({
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
    const n = P(null), s = P([]), o = (A) => {
      A && s.value.push(A);
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
    }), { startFlag: l, scrolling: i, customBgImg: r, type: p } = ue(e);
    Q(
      () => e.customChangeNum,
      () => {
        y(), c(0);
      }
    ), Q(
      () => e.machinePrizeLevel,
      (A) => {
        a.prizeLevelTrun = A;
      }
    ), Q(
      () => e.initNum,
      (A) => {
        a.current = A, a.valFlag = !1, f();
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
      l && (i || r ? p != "machine" && c() : (k(), setTimeout(() => {
        a.valFlag = !0;
      }, 300)));
    }, y = () => {
      clearInterval(Number(a.timer)), a.timer = null;
    }, g = (A, S, E) => {
      const V = (A.toString().split(".")[1] || "").length, X = (S.toString().split(".")[1] || "").length, Z = Math.pow(10, Math.max(V, X));
      return E == "-" ? Number((A * Z - S * Z).toFixed(0)) / Z : Number((A * Z + S * Z).toFixed(0)) / Z;
    }, v = (A) => {
      let { num_total_len: S, pointNum: E, initDigit1: V, initDigit2: X, sortFlag: Z } = a, F = Z == "add" || Z == "equal" ? String(X)[A - (S - E)] : 10 - Number(String(X)[A - (S - E)]), oe = Z == "add" || Z == "equal" ? String(V)[A] : 10 - Number(String(V)[A]), q = A > S - E - 1 ? -F * 100 + "%" : A <= String(V).length - 1 ? -oe * 100 + "%" : 0;
      return q == "-1000%" && (q = 0), q;
    }, b = (A) => {
      let { num_total_len: S, pointNum: E, initDigit1: V, initDigit2: X } = a, Z = String(X)[A - (S - E)];
      return A > S - E - 1 ? Z || 0 : A <= String(V).length - 1 ? String(V)[A] : 0;
    }, k = () => {
      let { endNum: A, initNum: S, speed: E, toFixed: V } = e, X = setInterval(() => {
        if (S > A)
          if (Number(a.current) <= A || Number(a.current) <= E)
            a.current = A.toFixed(V), clearInterval(X), t("scrollEnd"), a.valFlag = !1;
          else {
            let Z = parseFloat(String(a.current)) - parseFloat(String(E));
            a.current = Z.toFixed(V);
          }
        else if (Number(a.current) >= A)
          a.current = A.toFixed(V), clearInterval(X), t("scrollEnd"), a.valFlag = !1;
        else {
          let Z = parseFloat(String(a.current)) + parseFloat(String(E));
          a.current = Z.toFixed(V);
        }
      }, e.during);
    }, c = (A) => {
      let { initNum: S, endNum: E, toFixed: V, customBgImg: X } = e;
      X && (S = e.customChangeNum);
      let Z, F, oe, q;
      S != 0 ? (V != 0 && (S = Number(S.toFixed(V))), String(S).indexOf(".") > -1 ? (Z = String(S).split(".")[0].length, F = String(S).split(".")[1].length) : (Z = String(S).length, F = 0)) : (Z = 1, F = 0), E != 0 ? (V != 0 && (E = Number(E.toFixed(V))), String(E).indexOf(".") > -1 ? (oe = String(E).split(".")[0].length, q = String(E).split(".")[1].length) : (oe = String(E).length, q = 0)) : (oe = 1, q = 0);
      let H = Z >= oe ? Z : oe, ne = F >= q ? F : q;
      a.num_total_len = H + ne, a.pointNum = ne, S > E ? (a.sortFlag = "reduce", a.to0_10 = [0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], a.totalCount = g(S, E, "-"), a.numberVal = Number(String(S))) : S < E ? (a.sortFlag = "add", a.to0_10 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0], a.totalCount = g(E, S, "-"), a.numberVal = Number(String(E))) : a.sortFlag = "equal";
      var U = 1;
      for (let de = 0; de < a.pointNum; de++)
        U *= 10;
      var ae = a.numberVal * U;
      if (a.relNum = ae, V != 0 && (a.pointNum = String(a.numberVal).split(".")[1] ? String(a.numberVal).split(".")[1].length : 0, a.num_total_len = String(ae).length), String(S).indexOf(".") > -1) {
        let de = String(S).split(".");
        a.initDigit1 = Number(de[0]), a.initDigit2 = Number(de[1]);
      } else
        a.initDigit1 = S, a.initDigit2 = 0;
      i && !X ? Te(() => {
        if (a.sortFlag == "equal")
          return !1;
        let de = s.value[a.num_total_len - 1];
        $(de);
      }) : A !== 0 && I();
    }, $ = (A) => {
      y();
      var S = 1;
      a.pointNum != 0 && (S = 1 / Math.pow(10, a.pointNum)), a.timer = setInterval(() => {
        h(A), a.totalCount = g(a.totalCount, S, "-"), a.totalCount <= 0 && (y(), t("scrollEnd"), a.valFlag = !1);
      }, e.during);
    }, h = (A) => {
      let S = A.getAttribute("turn-number"), E;
      if (a.sortFlag == "add" ? E = parseInt(String(S)) + 1 : E = parseInt(String(S)) - 1 >= 0 ? parseInt(String(S)) - 1 : 9, A.setAttribute("turn-number", String(E)), (A.style.transition == "none 0s ease 0s" || E == 1 || !A.style.transition) && (A.style.transition = `all linear ${e.during}ms`), E == 10 || a.sortFlag == "reduce" && E == 0) {
        var V = null;
        A.style.top = `-${a.sortFlag == "add" ? E * 100 : (10 - E) * 100}%`, A.setAttribute("turn-number", "0"), V = setTimeout(() => {
          V && clearTimeout(V), A.style.transition = "none", A.style.top = "0", w(A, E);
        }, 0.975 * e.during);
      } else
        A.style.top = `-${a.sortFlag == "add" ? E * 100 : (10 - E) * 100}%`;
      A.style.top == "-100%" && a.sortFlag == "reduce" && h(A.previousSibling);
    }, w = (A, S) => {
      setTimeout(() => {
        S == 10 && A.previousSibling && h(A.previousSibling);
      }, 200);
    }, I = () => {
      Te(() => {
        n.value.addEventListener("webkitTransitionEnd", () => {
          t("scrollEnd"), a.valFlag = !1;
        });
      });
    }, T = () => {
      for (a.notPrize = []; a.notPrize.length < 3; ) {
        var A = Math.floor(Math.random() * e.machinePrizeNum + 1);
        a.notPrize.indexOf(A) == -1 && a.notPrize.push(A);
      }
    };
    Zg({ machineLuck: () => {
      const A = e.machineTurnMore < 0 ? 0 : e.machineTurnMore;
      let S = e.numHeight * e.machinePrizeNum;
      a.prizeLevelTrun < 0 && T();
      for (let E = 0; E < e.machineNum; E++)
        setTimeout(() => {
          let V = S * (E + 1 + parseFloat(String(A)));
          a.prizeYPrev.length != 0 && (a.prizeY[E] = a.prizeYPrev[E]);
          let X = a.prizeYPrev[E] ? a.prizeYPrev[E] : 0, Z = V + X + (e.machinePrizeNum - a.prizeLevelTrun + 1) * e.numHeight + (S - X);
          a.prizeLevelTrun < 0 && (Z += e.numHeight * a.notPrize[E]), M(
            E,
            // parseFloat((this.machinePrizeNum-(this.prizeLevelTrun-1))*this.numHeight + turn + local),
            Z,
            X
          );
        }, 500 * E);
    } });
    const M = (A, S, E) => {
      let V = setInterval(() => {
        if (E <= S)
          E += 10, a.prizeY[A] = parseFloat(String(E));
        else if (clearInterval(V), V = null, a.finshMachine += 1, a.prizeY[A] = S, a.finshMachine == e.machineNum) {
          let X = e.numHeight * e.machinePrizeNum;
          a.prizeYPrev = [], JSON.parse(JSON.stringify(a.prizeY)).forEach((F) => {
            let oe = F;
            for (; oe > X; )
              oe -= X;
            a.prizeYPrev.push(oe);
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
      y(), a.timer = null;
    }), ce(G(G({}, me(a)), me(ue(e))), {
      runNumberImg: n,
      setRef: o,
      topNumber: v,
      turnNumber: b
    });
  }
}), xg = { class: "nut-countup" }, e0 = ["turn-number"];
function t0(e, t, n, s, o, a) {
  return u(), d("view", xg, [
    e.customBgImg != "" ? (u(), d(ee, { key: 0 }, [
      e.type == "machine" ? (u(), d("view", {
        key: 0,
        class: "nut-countup__machine",
        style: L({ height: e.numHeight + "px" })
      }, [
        (u(!0), d(ee, null, re(e.machineNum, (l, i) => (u(), d("view", {
          key: "mImg" + i,
          class: "nut-countup__machine-item",
          style: L({
            width: e.numWidth + "px",
            height: e.numHeight + "px",
            backgroundImage: "url(" + e.customBgImg + ")",
            backgroundPositionY: e.prizeY[i] + "px"
          })
        }, null, 4))), 128))
      ], 4)) : (u(), d("view", {
        key: 1,
        ref: "runNumberImg",
        class: "nut-countup__numberimg",
        style: L({ height: e.numHeight + "px" })
      }, [
        (u(!0), d(ee, null, re(e.num_total_len, (l, i) => (u(), d("view", {
          key: "cImg" + i,
          class: "nut-countup__numberimg__item",
          style: L({
            width: e.numWidth + "px",
            height: e.numHeight + "px",
            left: e.numWidth * (i > e.num_total_len - e.pointNum - 1 ? i == e.num_total_len - e.pointNum ? i * 1.5 : i * 1.3 : i) + "px",
            backgroundImage: "url(" + e.customBgImg + ")",
            backgroundPositionX: "0",
            backgroundPositionY: -(+String(e.relNum)[i] * e.numHeight + e.customSpacNum * +String(e.relNum)[i]) + "px",
            transition: "all linear " + e.during / 10 + "ms"
          })
        }, null, 4))), 128)),
        e.pointNum > 0 ? (u(), d("view", {
          key: 0,
          class: "nut-countup-pointstyl",
          style: L({
            width: e.numWidth / 2 + "px",
            bottom: 0,
            left: e.numWidth * (e.num_total_len - e.pointNum) * 1.1 + "px",
            fontSize: "30px"
          })
        }, ".", 4)) : C("", !0)
      ], 4))
    ], 64)) : (u(), d(ee, { key: 1 }, [
      e.scrolling ? (u(), d("view", {
        key: 0,
        class: "nut-countup__number",
        style: L({
          width: e.numWidth * e.num_total_len + e.numWidth / 3 + "px",
          height: e.numHeight + "px",
          lineHeight: e.numHeight + "px"
        })
      }, [
        (u(!0), d(ee, null, re(e.num_total_len, (l, i) => (u(), d("view", {
          ref_for: !0,
          ref: (r) => e.setRef(r),
          key: l,
          class: "nut-countup__number-item",
          style: L({
            top: e.topNumber(i),
            left: e.numWidth * (i > e.num_total_len - e.pointNum - 1 ? i * 1.1 : i) + "px"
          }),
          "turn-number": e.turnNumber(i)
        }, [
          (u(!0), d(ee, null, re(e.to0_10, (r, p) => (u(), d("view", {
            key: "dote" + p,
            class: "nut-countup__number-item__span",
            style: L({
              width: e.numWidth + "px",
              height: e.numHeight + "px",
              lineHeight: e.numHeight + "px"
            })
          }, B(r), 5))), 128))
        ], 12, e0))), 128)),
        e.pointNum > 0 ? (u(), d("view", {
          key: 0,
          class: "nut-countup-pointstyl",
          style: L({
            width: e.numWidth / 3 + "px",
            height: e.numHeight + "px",
            lineHeight: e.numHeight + "px",
            top: 0,
            left: e.numWidth * (e.num_total_len - e.pointNum) + "px"
          })
        }, ".", 4)) : C("", !0)
      ], 4)) : (u(), d(ee, { key: 1 }, [
        ge(B(e.current), 1)
      ], 64))
    ], 64))
  ]);
}
const n0 = /* @__PURE__ */ K(Qg, [["render", t0]]), o0 = (e) => {
  if (!e)
    return Date.now();
  let t = e;
  return t = +t > 0 ? +t : t.toString().replace(/-/g, "/"), new Date(t).getTime();
}, { create: l0 } = W("countdown"), s0 = "NutCountdown", a0 = l0({
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
    const s = ke(s0), o = ue({
      restTime: 0,
      // 倒计时剩余时间时间
      timer: null,
      counting: !e.paused && e.autoStart,
      // 是否处于倒计时中
      handleEndTime: Date.now(),
      // 最终截止时间
      diffTime: 0
      // 设置了 startTime 时，与 date.now() 的差异
    }), a = N(() => r(o.restTime)), l = () => {
      o.handleEndTime = e.endTime, o.diffTime = Date.now() - o0(e.startTime), o.counting || (o.counting = !0), i();
    }, i = () => {
      window !== void 0 && (o.timer = requestAnimationFrame(() => {
        if (o.counting) {
          const v = Date.now() - o.diffTime, b = Math.max(o.handleEndTime - v, 0);
          o.restTime = b, b || (o.counting = !1, y(), t("end"), t("onEnd")), b > 0 && i();
        }
      }));
    }, r = (v, b) => {
      const k = v;
      let c = {
        d: 0,
        h: 0,
        m: 0,
        s: 0,
        ms: 0
      };
      const $ = 1e3, h = 60 * $, w = 60 * h, I = 24 * w;
      return k > 0 && (c.d = k >= $ ? Math.floor(k / I) : 0, c.h = Math.floor(k % I / w), c.m = Math.floor(k % w / h), c.s = Math.floor(k % h / $), c.ms = Math.floor(k % $)), b == "custom" ? c : p(G({}, c));
    }, p = (v) => {
      let { d: b, h: k, m: c, s: $, ms: h } = v, w = e.format;
      if (w.includes("DD") ? w = w.replace("DD", qe(b)) : k += Number(b) * 24, w.includes("HH") ? w = w.replace("HH", qe(k)) : c += Number(k) * 60, w.includes("mm") ? w = w.replace("mm", qe(c)) : $ += Number(c) * 60, w.includes("ss") ? w = w.replace("ss", qe($)) : h += Number($) * 1e3, w.includes("S")) {
        const I = qe(h, 3).toString();
        w.includes("SSS") ? w = w.replace("SSS", I) : w.includes("SS") ? w = w.replace("SS", I.slice(0, 2)) : w.includes("S") && (w = w.replace("S", I.slice(0, 1)));
      }
      return w;
    }, f = () => {
      !o.counting && !e.autoStart && (o.counting = !0, o.handleEndTime = Date.now() + Number(o.restTime), i(), t("restart", o.restTime), t("onRestart", o.restTime));
    }, y = () => {
      cancelAnimationFrame(o.timer), o.counting = !1, t("paused", o.restTime), t("onPaused", o.restTime);
    }, g = () => {
      e.autoStart || (y(), o.restTime = e.time);
    };
    return Dn(() => {
      e.autoStart ? l() : o.restTime = e.time;
    }), Q(
      () => o.restTime,
      (v) => {
        let b = r(v, "custom");
        t("update:modelValue", b), t("input", b);
      }
    ), Q(
      () => e.paused,
      (v, b) => {
        b ? (o.counting || (o.counting = !0, o.handleEndTime = Date.now() + Number(o.restTime), i()), t("restart", o.restTime), t("onRestart", o.restTime)) : o.counting && y();
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
    ), ce(G({}, me(e)), {
      slots: n,
      start: f,
      pause: y,
      renderTime: a,
      translate: s,
      reset: g
    });
  }
}), i0 = { class: "nut-countdown" }, r0 = ["innerHTML"];
function u0(e, t, n, s, o, a) {
  return u(), d("view", i0, [
    e.slots.default ? D(e.$slots, "default", { key: 0 }) : (u(), d("view", {
      key: 1,
      class: "nut-countdown__content",
      innerHTML: e.renderTime
    }, null, 8, r0))
  ]);
}
const c0 = /* @__PURE__ */ K(a0, [["render", u0]]), { create: d0 } = W("tag"), f0 = d0({
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
    Close: _t
  },
  emits: ["close", "click"],
  setup(e, { emit: t }) {
    const n = N(() => {
      const l = "nut-tag";
      return {
        [l]: !0,
        [`${l}--${e.type}`]: e.type,
        [`${l}--plain`]: e.plain,
        [`${l}--round`]: e.round,
        [`${l}--mark`]: e.mark
      };
    }), s = N(() => {
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
function p0(e, t, n, s, o, a) {
  const l = j("Close");
  return u(), d("view", {
    class: _(e.classes),
    style: L(e.style),
    onClick: t[0] || (t[0] = (...i) => e.onClick && e.onClick(...i))
  }, [
    D(e.$slots, "default"),
    e.closeable ? (u(), x(l, {
      key: 0,
      class: "nut-tag--close",
      width: "12px",
      height: "12px",
      onClick: e.onClose
    }, null, 8, ["onClick"])) : C("", !0)
  ], 6);
}
const To = /* @__PURE__ */ K(f0, [["render", p0]]), { create: m0 } = W("popover"), h0 = m0({
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
    const n = P(), s = P(), o = P(e.visible);
    let a = P(), l = P();
    const i = N(() => {
      const h = "nut-popover-arrow", w = e.location, I = w.split("-")[0];
      return `${h} ${h}-${I} ${h}--${w}`;
    }), r = N(() => {
      const h = {}, { bgColor: w, arrowOffset: I, location: T } = e, Y = T.split("-")[0], M = T.split("-")[1], A = 16;
      return w && (h[`border${p(Y)}Color`] = w), e.arrowOffset != 0 && (["bottom", "top"].includes(Y) && (M || (h.left = `calc(50% + ${I}px)`), M == "start" && (h.left = `${A + I}px`), M == "end" && (h.right = `${A - I}px`)), ["left", "right"].includes(Y) && (M || (h.top = `calc(50% - ${I}px)`), M == "start" && (h.top = `${A - I}px`), M == "end" && (h.bottom = `${A + I}px`))), h;
    }), p = (h) => (h = h.toLowerCase(), h = h.replace(/\b\w+\b/g, (w) => w.substring(0, 1).toUpperCase() + w.substring(1)), h), f = N(() => {
      let h = {};
      if (!a.value || !l.value)
        return {};
      const w = l.value.width, I = l.value.height, { width: T, height: Y, left: M, top: A } = a.value, { location: S, offset: E } = e, V = S.split("-")[0], X = S.split("-")[1];
      let Z = 0, F = 0;
      if (Ut(E) && E.length == 2 && (Z += Number(E[1]), F += Number(E[0])), T) {
        if (["bottom", "top"].includes(V)) {
          const oe = V == "bottom" ? Y + Z : -(I + Z);
          h.top = `${A + oe}px`, X || (h.left = `${-(w - T) / 2 + M + F}px`), X == "start" && (h.left = `${M + F}px`), X == "end" && (h.left = `${a.value.right + F}px`);
        }
        if (["left", "right"].includes(V)) {
          const oe = V == "left" ? -(w + Z) : T + Z;
          h.left = `${M + oe}px`, X || (h.top = `${A - I / 2 + Y / 2 - 4 + F}px`), X == "start" && (h.top = `${A + F}px`), X == "end" && (h.top = `${A + Y + F}px`);
        }
      }
      return h;
    }), y = N(() => {
      const h = {};
      return e.bgColor && (h.background = e.bgColor), h;
    }), g = () => {
      let h = Oe(n.value);
      e.targetId && (h = Oe(document.querySelector(`#${e.targetId}`))), a.value = h, setTimeout(() => {
        var w, I;
        l.value = {
          height: (w = s.value) == null ? void 0 : w.clientHeight,
          width: (I = s.value) == null ? void 0 : I.clientWidth
        };
      }, 0);
    };
    ve(() => {
      setTimeout(() => {
        g();
      }, 200);
    }), Q(
      () => e.visible,
      (h) => {
        o.value = h, h ? (window.addEventListener("touchstart", $, !0), g()) : window.removeEventListener("touchstart", $, !0);
      }
    );
    const v = (h) => {
      t("update", h), t("update:visible", h);
    }, b = () => {
      v(!e.visible), t("open");
    }, k = () => {
      t("update:visible", !1), t("close");
    }, c = (h, w) => {
      !h.disabled && t("choose", h, w), e.closeOnClickAction && k();
    }, $ = (h) => {
      const w = n.value, I = s.value;
      let T = w && !w.contains(h.target);
      if (e.targetId) {
        const Y = document.querySelector(`#${e.targetId}`);
        T = Y && !Y.contains(h.target);
      }
      T && I && !I.contains(h.target) && e.closeOnClickOutside && k();
    };
    return {
      showPopup: o,
      openPopover: b,
      popoverArrow: i,
      closePopover: k,
      chooseItem: c,
      popoverRef: n,
      popoverContentRef: s,
      getRootPosition: f,
      customStyle: y,
      popoverArrowStyle: r,
      renderIcon: st
    };
  }
}), g0 = {
  ref: "popoverContentRef",
  class: "nut-popover-content-group"
}, y0 = ["onClick"], v0 = { class: "nut-popover-menu-item-name" };
function $0(e, t, n, s, o, a) {
  const l = j("nut-popup");
  return u(), d(ee, null, [
    e.targetId ? C("", !0) : (u(), d("div", {
      key: 0,
      ref: "popoverRef",
      class: "nut-popover-wrapper",
      onClick: t[0] || (t[0] = (...i) => e.openPopover && e.openPopover(...i))
    }, [
      D(e.$slots, "reference")
    ], 512)),
    m("view", {
      class: _(["nut-popover", `nut-popover--${e.theme}`, `${e.customClass}`]),
      style: L(e.getRootPosition)
    }, [
      le(l, {
        visible: e.showPopup,
        "onUpdate:visible": t[1] || (t[1] = (i) => e.showPopup = i),
        "pop-class": `nut-popover-content nut-popover-content--${e.location}`,
        style: L(e.customStyle),
        position: "",
        transition: "nut-popover",
        overlay: e.overlay,
        duration: e.duration,
        "overlay-style": e.overlayStyle,
        "overlay-class": e.overlayClass,
        "close-on-click-overlay": e.closeOnClickOverlay
      }, {
        default: te(() => [
          m("view", g0, [
            e.showArrow ? (u(), d("view", {
              key: 0,
              class: _(e.popoverArrow),
              style: L(e.popoverArrowStyle)
            }, null, 6)) : C("", !0),
            D(e.$slots, "content"),
            (u(!0), d(ee, null, re(e.list, (i, r) => (u(), d("view", {
              key: r,
              class: _([i.className, i.disabled && "nut-popover-menu-disabled", "nut-popover-menu-item"]),
              onClick: Ne((p) => e.chooseItem(i, r), ["stop"])
            }, [
              i.icon ? (u(), x(Ae(e.renderIcon(i.icon)), {
                key: 0,
                class: "nut-popover-item-img"
              })) : C("", !0),
              m("view", v0, B(i.name), 1)
            ], 10, y0))), 128))
          ], 512)
        ]),
        _: 3
      }, 8, ["visible", "pop-class", "style", "overlay", "duration", "overlay-style", "overlay-class", "close-on-click-overlay"])
    ], 6)
  ], 64);
}
const No = /* @__PURE__ */ K(h0, [["render", $0]]), { create: b0 } = W("skeleton"), k0 = b0({
  components: {
    NutAvatar: en
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
    const { avatarShape: t, round: n, avatarSize: s } = me(e), o = N(() => {
      const i = "avatarClass";
      return {
        [i]: !0,
        [`${i}--${t.value}`]: t.value
      };
    });
    return {
      avatarShape: t,
      avatarClass: o,
      getBlockClass: (i) => ({
        [i]: !0,
        [`${i}--round`]: n.value
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
}), w0 = { key: 0 }, S0 = {
  key: 1,
  class: "nut-skeleton"
}, C0 = {
  key: 0,
  class: "nut-skeleton-animation"
}, T0 = { class: "nut-skeleton-content" };
function N0(e, t, n, s, o, a) {
  const l = j("nut-avatar");
  return e.loading ? (u(), d("view", S0, [
    e.animated ? (u(), d("view", C0)) : C("", !0),
    m("view", T0, [
      e.avatar ? (u(), x(l, {
        key: 0,
        class: _(e.avatarClass),
        shape: e.avatarShape,
        style: L(e.getStyle())
      }, null, 8, ["class", "shape", "style"])) : C("", !0),
      m("view", {
        class: "nut-skeleton-content__line",
        style: L({ width: e.width })
      }, [
        e.title ? (u(), d("view", {
          key: 0,
          class: _(e.getBlockClass("nut-skeleton-blockTitle")),
          style: L({ height: e.height })
        }, null, 6)) : C("", !0),
        (u(!0), d(ee, null, re(Number(e.row), (i) => (u(), d("view", {
          key: i,
          class: _(e.getBlockClass("nut-skeleton-blockLine")),
          style: L({ height: e.height })
        }, null, 6))), 128))
      ], 4)
    ])
  ])) : (u(), d("view", w0, [
    D(e.$slots, "default")
  ]));
}
const D0 = /* @__PURE__ */ K(k0, [["render", N0]]), Do = Symbol("nut-collapse"), { create: I0 } = W("collapse"), _0 = I0({
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
    const n = P(null), s = P(e.modelValue || (e.accordion ? "" : []));
    Q(
      () => e.modelValue,
      (i) => {
        s.value = i;
      }
    );
    const o = (i, r, p = !0) => {
      s.value = i, t("update:modelValue", i), t("change", i, r, p);
    };
    return Me(Do, {
      updateVal: (i) => {
        if (e.accordion)
          s.value === i ? o("", i, !1) : o(i, i, !0);
        else if (Array.isArray(s.value))
          if (s.value.includes(i)) {
            const r = s.value.filter((p) => p !== i);
            o(r, i, !1);
          } else {
            const r = s.value.concat([i]);
            o(r, i, !0);
          }
        else
          console.warn("[NutUI] <Collapse> 未开启手风琴模式时 v-model 应为数组");
      },
      isExpanded: (i) => e.accordion ? s.value === i : Array.isArray(s.value) ? s.value.includes(i) : !1
    }), { nutCollapseRef: n };
  }
}), B0 = {
  ref: "nutCollapseRef",
  class: "nut-collapse"
};
function M0(e, t, n, s, o, a) {
  return u(), d("view", B0, [
    D(e.$slots, "default")
  ], 512);
}
const E0 = /* @__PURE__ */ K(_0, [["render", M0]]), { create: L0 } = W("collapse-item"), P0 = L0({
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
      default: () => Vn
    },
    rotate: {
      type: [String, Number],
      default: 180
    }
  },
  setup(e) {
    const t = P(null), n = P(null), s = Be(Do), o = N(() => {
      const y = "nut-collapse-item";
      return {
        [y]: !0,
        [y + "__border"]: e.border
      };
    }), a = N(() => s ? s.isExpanded(e.name) : !1), l = P(a.value ? "auto" : "0px"), i = () => {
      s && s.updateVal(e.name);
    }, r = () => {
      a.value && (l.value = "auto");
    }, p = () => {
      l.value = "0px", requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          var g;
          const y = (g = n.value) == null ? void 0 : g.offsetHeight;
          l.value = y ? `${y}px` : "auto";
        });
      });
    }, f = () => {
      var g;
      const y = (g = n.value) == null ? void 0 : g.offsetHeight;
      l.value = y ? `${y}px` : "auto", requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          l.value = "0px";
        });
      });
    };
    return Q(a, (y) => {
      y ? p() : f();
    }), {
      classes: o,
      renderIcon: st,
      wrapperRef: t,
      contentRef: n,
      open: p,
      toggle: i,
      wrapperHeight: l,
      expanded: a,
      onTransitionEnd: r
    };
  }
}), A0 = { class: "nut-collapse-item__title-main" }, z0 = { class: "nut-collapse-item__title-main-value" }, V0 = ["innerHTML"], O0 = {
  key: 2,
  class: "nut-collapse-item__title-label"
}, H0 = {
  key: 0,
  class: "nut-collapse-item__title-sub"
}, R0 = ["innerHTML"], F0 = {
  key: 0,
  class: "nut-collapse__item-extraWrapper"
}, W0 = { class: "nut-collapse__item-extraWrapper__extraRender" }, Y0 = {
  ref: "contentRef",
  class: "nut-collapse__item-wrapper__content"
};
function j0(e, t, n, s, o, a) {
  return u(), d("view", {
    class: _(e.classes)
  }, [
    m("view", {
      class: _(["nut-collapse-item__title", { "nut-collapse-item__title--disabled": e.disabled }]),
      onClick: t[0] || (t[0] = (...l) => e.toggle && e.toggle(...l))
    }, [
      m("view", A0, [
        m("view", z0, [
          e.$slots.title ? D(e.$slots, "title", { key: 0 }) : (u(), d("view", {
            key: 1,
            class: "nut-collapse-item__title-mtitle",
            innerHTML: e.title
          }, null, 8, V0)),
          e.label ? (u(), d("view", O0, B(e.label), 1)) : C("", !0)
        ])
      ]),
      e.$slots.value ? (u(), d("view", H0, [
        D(e.$slots, "value")
      ])) : (u(), d("view", {
        key: 1,
        class: "nut-collapse-item__title-sub",
        innerHTML: e.value
      }, null, 8, R0)),
      m("view", {
        class: _(["nut-collapse-item__title-icon", { "nut-collapse-item__title-icon--expanded": e.expanded }]),
        style: L({ transform: "rotate(" + (e.expanded ? e.rotate : 0) + "deg)" })
      }, [
        e.$slots.icon ? D(e.$slots, "icon", { key: 0 }) : (u(), x(Ae(e.renderIcon(e.icon)), { key: 1 }))
      ], 6)
    ], 2),
    e.$slots.extra ? (u(), d("view", F0, [
      m("div", W0, [
        D(e.$slots, "extra")
      ])
    ])) : C("", !0),
    m("view", {
      ref: "wrapperRef",
      class: "nut-collapse__item-wrapper",
      style: L({
        willChange: "height",
        height: e.wrapperHeight
      }),
      onTransitionend: t[1] || (t[1] = (...l) => e.onTransitionEnd && e.onTransitionEnd(...l))
    }, [
      m("view", Y0, [
        D(e.$slots, "default")
      ], 512)
    ], 36)
  ], 2);
}
const K0 = /* @__PURE__ */ K(P0, [["render", j0]]), U0 = ht({
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
}), { create: X0 } = W("table"), q0 = "NutTable", G0 = X0({
  components: {
    RenderColumn: U0,
    DownArrow: Vn
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
    const n = ke(q0), s = ue({
      curData: e.data
    }), o = (y) => ({
      "nut-table__main__head__tr--border": e.bordered,
      [`nut-table__main__head__tr--align${y.align ? y.align : ""}`]: !0
    }), a = (y) => y.stylehead ? y.stylehead : "", l = (y) => y.stylecolumn ? y.stylecolumn : "", i = (y) => e.columns.filter((g) => g.key === y)[0], r = (y) => {
      const g = e.columns.filter((v) => v.key === y);
      return g[0].stylecolumn ? g[0].stylecolumn : "";
    }, p = (y) => {
      y.sorter && (t("sorter", y), s.curData = typeof y.sorter == "function" ? s.curData.sort(y.sorter) : y.sorter === "default" ? s.curData.sort() : s.curData);
    }, f = () => e.columns.map((y) => [y.key, y.render]);
    return Q(
      () => e.data,
      (y) => {
        s.curData = y.slice();
      }
    ), ce(G({}, me(s)), {
      cellClasses: o,
      getColumnItem: i,
      getColumnItemStyle: r,
      handleSorterClick: p,
      sortDataItem: f,
      translate: n,
      stylehead: a,
      stylecolumn: l
    });
  }
}), Z0 = { class: "nut-table" }, J0 = { class: "nut-table__main__head" }, Q0 = { class: "nut-table__main__head__tr" }, x0 = ["onClick"], ey = { class: "nut-table__main__body" }, ty = { key: 1 }, ny = {
  key: 0,
  class: "nut-table__nodata"
}, oy = {
  key: 0,
  class: "nut-table__nodata__text"
}, ly = {
  key: 1,
  class: "nut-table__summary"
}, sy = ["innerHTML"];
function ay(e, t, n, s, o, a) {
  const l = j("DownArrow"), i = j("RenderColumn");
  return u(), d("view", Z0, [
    m("view", {
      class: _(["nut-table__main", { "nut-table__main--striped": e.striped }])
    }, [
      m("view", J0, [
        m("view", Q0, [
          (u(!0), d(ee, null, re(e.columns, (r) => (u(), d("span", {
            key: r.key,
            class: _(["nut-table__main__head__tr__th", e.cellClasses(r)]),
            style: L(r.stylehead),
            onClick: (p) => e.handleSorterClick(r)
          }, [
            ge(B(r.title) + " ", 1),
            D(e.$slots, "icon"),
            !e.$slots.icon && r.sorter ? (u(), x(l, {
              key: 0,
              width: "12px",
              height: "12px"
            })) : C("", !0)
          ], 14, x0))), 128))
        ])
      ]),
      m("view", ey, [
        (u(!0), d(ee, null, re(e.curData, (r) => (u(), d("view", {
          key: r,
          class: "nut-table__main__body__tr"
        }, [
          (u(!0), d(ee, null, re(e.sortDataItem(), ([p, f]) => (u(), d("span", {
            key: p,
            class: _(["nut-table__main__body__tr__td", e.cellClasses(e.getColumnItem(p))]),
            style: L(e.getColumnItemStyle(p))
          }, [
            typeof r[p] == "function" || typeof f == "function" ? (u(), x(i, {
              key: 0,
              slots: [f, r[p]],
              record: r
            }, null, 8, ["slots", "record"])) : (u(), d("view", ty, B(r[p]), 1))
          ], 6))), 128))
        ]))), 128))
      ])
    ], 2),
    e.curData.length ? C("", !0) : (u(), d("view", ny, [
      m("div", {
        class: _(["nut-table__nodata", { "nut-table__nodata--border": e.bordered }])
      }, [
        D(e.$slots, "nodata"),
        e.$slots.nodata ? C("", !0) : (u(), d("div", oy, B(e.translate("noData")), 1))
      ], 2)
    ])),
    e.summary ? (u(), d("view", ly, [
      m("span", {
        class: "nut-table__summary__text",
        innerHTML: e.summary().value
      }, null, 8, sy)
    ])) : C("", !0)
  ]);
}
const iy = /* @__PURE__ */ K(G0, [["render", ay]]), { create: ry } = W("animate"), uy = ry({
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
    const n = P(e.action === "initial" || e.show === !0 || e.loop), s = N(() => ({
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
}), cy = { class: "nut-animate" };
function dy(e, t, n, s, o, a) {
  return u(), d("view", cy, [
    m("view", {
      class: _(e.classes),
      style: L({
        animationDuration: e.duration ? `${e.duration}ms` : void 0
      }),
      onClick: t[0] || (t[0] = (...l) => e.handleClick && e.handleClick(...l))
    }, [
      D(e.$slots, "default")
    ], 6)
  ]);
}
const fy = /* @__PURE__ */ K(uy, [["render", dy]]), { create: py } = W("ellipsis"), my = py({
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
    const n = P(null);
    let s = null, o = 0;
    const a = P(), l = ue({
      exceeded: !1,
      //是否超出
      expanded: !1
      //是否折叠
    });
    Q(
      () => e.content,
      (b, k) => {
        b != k && i();
      }
    ), ve(() => {
      i();
    });
    const i = () => {
      if (!n.value)
        return;
      const b = window.getComputedStyle(n.value);
      s = document.createElement("div"), Array.prototype.slice.apply(b).forEach(($) => {
        s.style.setProperty($, b.getPropertyValue($));
      }), s.style.position = "fixed", s.style.left = "999999px", s.style.top = "999999px", s.style.zIndex = "-1000", s.style.height = "auto", s.style.minHeight = "auto", s.style.maxHeight = "auto", s.style.textOverflow = "clip", s.style.whiteSpace = "normal", s.style.webkitLineClamp = "unset", s.style.display = "block";
      const c = y(b.lineHeight === "normal" ? e.lineHeight : b.lineHeight);
      o = Math.floor(
        c * (Number(e.rows) + 0.5) + y(b.paddingTop) + y(b.paddingBottom)
      ), s.innerText = e.content, document.body.appendChild(s), r();
    }, r = () => {
      if (s.offsetHeight <= o)
        l.exceeded = !1, document.body.removeChild(s);
      else {
        l.exceeded = !0;
        const b = e.content.length, k = Math.floor((0 + b) / 2), c = e.direction === "middle" ? f([0, k], [k, b]) : p(0, b);
        a.value = c, document.body.removeChild(s);
      }
    }, p = (b, k) => {
      const c = l.expanded ? e.collapseText : e.expandText, $ = e.content.length;
      if (k - b <= 1)
        return e.direction === "end" ? {
          leading: e.content.slice(0, b) + e.symbol
        } : {
          tailing: e.symbol + e.content.slice(k, $)
        };
      const h = Math.round((b + k) / 2);
      return e.direction === "end" ? s.innerText = e.content.slice(0, h) + e.symbol + c : s.innerText = c + e.symbol + e.content.slice(h, $), s.offsetHeight <= o ? e.direction === "end" ? p(h, k) : p(b, h) : e.direction === "end" ? p(b, h) : p(h, k);
    }, f = (b, k) => {
      const c = l.expanded ? e.collapseText : e.expandText, $ = e.content.length;
      if (b[1] - b[0] <= 1 && k[1] - k[0] <= 1)
        return {
          leading: e.content.slice(0, b[0]) + e.symbol,
          tailing: e.symbol + e.content.slice(k[1], $)
        };
      const h = Math.floor((b[0] + b[1]) / 2), w = Math.ceil((k[0] + k[1]) / 2);
      return s.innerText = e.content.slice(0, h) + e.symbol + c + e.symbol + e.content.slice(w, $), s.offsetHeight <= o ? f([h, b[1]], [k[0], w]) : f([b[0], h], [w, k[1]]);
    }, y = (b) => {
      if (!b)
        return 0;
      const k = b.match(/^\d*(\.\d*)?/);
      return k ? Number(k[0]) : 0;
    }, g = (b) => {
      b == 1 ? (l.expanded = !0, t("change", "expand")) : (l.expanded = !1, t("change", "collapse"));
    }, v = () => {
      t("click");
    };
    return ce(G({}, me(l)), { root: n, ellipsis: a, clickHandle: g, handleClick: v });
  }
}), hy = { key: 0 }, gy = { key: 1 }, yy = { key: 2 };
function vy(e, t, n, s, o, a) {
  return u(), d("view", {
    ref: "root",
    class: "nut-ellipsis",
    onClick: t[2] || (t[2] = (...l) => e.handleClick && e.handleClick(...l))
  }, [
    e.exceeded ? C("", !0) : (u(), d("view", hy, B(e.content), 1)),
    e.exceeded && !e.expanded ? (u(), d("view", gy, [
      ge(B(e.ellipsis && e.ellipsis.leading), 1),
      e.expandText ? (u(), d("span", {
        key: 0,
        class: "nut-ellipsis__text",
        onClick: t[0] || (t[0] = Ne((l) => e.clickHandle(1), ["stop"]))
      }, B(e.expandText), 1)) : C("", !0),
      ge(B(e.ellipsis && e.ellipsis.tailing), 1)
    ])) : C("", !0),
    e.exceeded && e.expanded ? (u(), d("view", yy, [
      ge(B(e.content) + " ", 1),
      e.expandText ? (u(), d("span", {
        key: 0,
        class: "nut-ellipsis__text",
        onClick: t[1] || (t[1] = Ne((l) => e.clickHandle(2), ["stop"]))
      }, B(e.collapseText), 1)) : C("", !0)
    ])) : C("", !0)
  ], 512);
}
const $y = /* @__PURE__ */ K(my, [["render", vy]]), { componentName: by, create: ky } = W("watermark"), wy = ky({
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
      gapY: o,
      width: a,
      height: l,
      rotate: i,
      image: r,
      imageWidth: p,
      imageHeight: f,
      content: y,
      fontStyle: g,
      fontWeight: v,
      fontColor: b,
      fontSize: k,
      fontFamily: c
    } = e, $ = () => {
      const w = document.createElement("canvas"), I = window.devicePixelRatio, T = w.getContext("2d"), Y = `${(s + a) * I}px`, M = `${(o + l) * I}px`, A = a * I, S = l * I;
      if (w.setAttribute("width", Y), w.setAttribute("height", M), T) {
        if (r) {
          T.translate(A / 2, S / 2), T.rotate(Math.PI / 180 * Number(i));
          const E = new Image();
          E.crossOrigin = "anonymous", E.referrerPolicy = "no-referrer", E.src = r, E.onload = () => {
            T.drawImage(
              E,
              -p * I / 2,
              -f * I / 2,
              p * I,
              f * I
            ), T.restore(), t.base64Url = w.toDataURL();
          };
        } else if (y) {
          T.textBaseline = "middle", T.textAlign = "center", T.translate(A / 2, S / 2), T.rotate(Math.PI / 180 * Number(i));
          const E = Number(k) * I;
          T.font = `${g} normal ${v} ${E}px/${S}px ${c}`, T.fillStyle = b, Array.isArray(y) ? y.map((V, X) => {
            T.fillText(V, 0, (X - 1) * E);
          }) : T.fillText(y, 0, 0), T.restore(), t.base64Url = w.toDataURL();
        }
      } else
        throw new Error("当前环境不支持Canvas");
    };
    $(), Q(
      () => [
        n,
        s,
        o,
        a,
        l,
        i,
        r,
        p,
        f,
        y,
        g,
        v,
        b,
        k,
        c
      ],
      () => {
        $();
      }
    );
    const h = N(() => {
      const w = by;
      return {
        [w]: !0,
        [`${w}-full-page`]: e.fullPage
      };
    });
    return ce(G({}, me(t)), { classes: h });
  }
});
function Sy(e, t, n, s, o, a) {
  return u(), d("view", {
    class: _(e.classes),
    style: L({
      zIndex: e.zIndex,
      backgroundSize: `${e.gapX + e.width}px`,
      backgroundImage: `url('${e.base64Url}')`
    })
  }, null, 6);
}
const Cy = /* @__PURE__ */ K(wy, [["render", Sy]]), { create: Ty } = W("trend-arrow"), Ny = Ty({
  components: { TriangleUp: Li, TriangleDown: Ii },
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
    }), n = N(() => {
      const { rate: o, digits: a, showSign: l, showZero: i } = e;
      t.rateTrend = o > 0;
      const r = Math.abs(o);
      return !i && o === 0 ? "--" : `${l && o !== 0 ? t.rateTrend ? "+" : "-" : ""}${Uo(
        Number(r),
        a
      )}%`;
    }), s = N(() => {
      const { dropColor: o, riseColor: a, syncTextColor: l, textColor: i, rate: r } = e;
      return {
        color: r === 0 ? i : l ? t.rateTrend ? a : o : i
      };
    });
    return ce(G({}, me(t)), { calcRate: n, calcStyle: s });
  }
}), Dy = { class: "nut-trend-arrow" };
function Iy(e, t, n, s, o, a) {
  const l = j("TriangleUp"), i = j("TriangleDown");
  return u(), d("view", Dy, [
    e.arrowLeft ? C("", !0) : (u(), d("span", {
      key: 0,
      class: "nut-trend-arrow-icon-before nut-trend-arrow-rate",
      style: L(e.calcStyle)
    }, B(e.calcRate), 5)),
    Number(e.rate) !== 0 && e.rateTrend ? D(e.$slots, "up-icon", { key: 1 }, () => [
      le(l, { color: e.riseColor }, null, 8, ["color"])
    ]) : C("", !0),
    Number(e.rate) !== 0 && !e.rateTrend ? D(e.$slots, "down-icon", { key: 2 }, () => [
      le(i, { color: e.dropColor }, null, 8, ["color"])
    ]) : C("", !0),
    e.arrowLeft ? (u(), d("span", {
      key: 3,
      class: "nut-trend-arrow-icon-after nut-trend-arrow-rate",
      style: L(e.calcStyle)
    }, B(e.calcRate), 5)) : C("", !0)
  ]);
}
const _y = /* @__PURE__ */ K(Ny, [["render", Iy]]), { create: By } = W("tour"), My = By({
  components: {
    NutPopover: No,
    Close: _t
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
    }), s = P({}), o = N(() => "nut-tour"), a = N(() => {
      const { offset: f, maskWidth: y, maskHeight: g } = e, { width: v, height: b, left: k, top: c } = s.value, $ = [k + v / 2, c + b / 2], h = Number(y || v), w = Number(g || b);
      return {
        width: `${h + +f[1] * 2}px`,
        height: `${w + +f[0] * 2}px`,
        top: `${$[1] - w / 2 - +f[0]}px`,
        left: `${$[0] - h / 2 - +f[1]}px`
      };
    }), l = (f) => {
      f == "next" ? n.active = n.active + 1 : n.active = n.active - 1, n.showPopup = !1, Te(() => {
        n.showPopup = !0, i();
      }), t("change", n.active);
    }, i = () => {
      const f = document.querySelector(`#${e.steps[n.active].target}`), y = Oe(f);
      s.value = y;
    }, r = () => {
      n.showTour = !1, n.showPopup = !1, t("close", n.active), t("update:modelValue", !1);
    }, p = () => {
      e.closeOnClickOverlay && r();
    };
    return ve(() => {
      n.active = 0, i();
    }), Q(
      () => e.modelValue,
      (f) => {
        f && i(), n.active = 0, n.showTour = f, n.showPopup = f;
      }
    ), ce(G({}, me(n)), {
      classes: o,
      maskStyle: a,
      changeStep: l,
      close: r,
      handleClickMask: p
    });
  }
}), Ey = {
  key: 0,
  class: "nut-tour-content"
}, Ly = {
  key: 0,
  class: "nut-tour-content-top"
}, Py = { class: "nut-tour-content-inner" }, Ay = { class: "nut-tour-content-bottom" }, zy = { class: "nut-tour-content-bottom-init" }, Vy = { class: "nut-tour-content-bottom-operate" }, Oy = {
  key: 1,
  class: "nut-tour-content nut-tour-content-tile"
}, Hy = { class: "nut-tour-content-inner" };
function Ry(e, t, n, s, o, a) {
  const l = j("Close"), i = j("nut-popover");
  return u(), d("div", {
    class: _(e.classes)
  }, [
    Ce(m("div", {
      class: "nut-tour-masked",
      onClick: t[0] || (t[0] = (...r) => e.handleClickMask && e.handleClickMask(...r))
    }, null, 512), [
      [De, e.showTour]
    ]),
    (u(!0), d(ee, null, re(e.steps, (r, p) => (u(), d("div", {
      key: p,
      style: { height: "0" }
    }, [
      p == e.active ? (u(), d(ee, { key: 0 }, [
        e.showTour ? (u(), d("div", {
          key: 0,
          id: "nut-tour-popid",
          class: _(["nut-tour-mask", [e.mask ? "" : "nut-tour-mask-none"]]),
          style: L(e.maskStyle)
        }, null, 6)) : C("", !0),
        le(i, {
          visible: e.showPopup,
          "onUpdate:visible": t[5] || (t[5] = (f) => e.showPopup = f),
          location: r.location || e.location,
          "target-id": "nut-tour-popid",
          "bg-color": e.bgColor,
          theme: e.theme,
          "close-on-click-outside": !1,
          offset: r.popoverOffset || [0, 12],
          "arrow-offset": r.arrowOffset || 0
        }, {
          content: te(() => [
            D(e.$slots, "default", {}, () => [
              e.type == "step" ? (u(), d("div", Ey, [
                e.showTitleBar ? (u(), d("div", Ly, [
                  m("div", {
                    onClick: t[1] || (t[1] = (...f) => e.close && e.close(...f))
                  }, [
                    le(l, { class: "nut-tour-content-top-close" })
                  ])
                ])) : C("", !0),
                m("div", Py, B(r.content), 1),
                m("div", Ay, [
                  m("div", zy, B(e.active + 1) + "/" + B(e.steps.length), 1),
                  m("div", Vy, [
                    D(e.$slots, "prev-step", {}, () => [
                      e.active != 0 && e.showPrevStep ? (u(), d("div", {
                        key: 0,
                        class: "nut-tour-content-bottom-operate-btn",
                        onClick: t[2] || (t[2] = (f) => e.changeStep("prev"))
                      }, B(e.prevStepTxt), 1)) : C("", !0)
                    ]),
                    e.steps.length - 1 == e.active ? (u(), d("div", {
                      key: 0,
                      class: "nut-tour-content-bottom-operate-btn active",
                      onClick: t[3] || (t[3] = (...f) => e.close && e.close(...f))
                    }, B(e.completeTxt), 1)) : C("", !0),
                    D(e.$slots, "next-step", {}, () => [
                      e.steps.length - 1 != e.active ? (u(), d("div", {
                        key: 0,
                        class: "nut-tour-content-bottom-operate-btn active",
                        onClick: t[4] || (t[4] = (f) => e.changeStep("next"))
                      }, B(e.nextStepTxt), 1)) : C("", !0)
                    ])
                  ])
                ])
              ])) : C("", !0),
              e.type == "tile" ? (u(), d("div", Oy, [
                m("div", Hy, B(r.content), 1)
              ])) : C("", !0)
            ])
          ]),
          _: 2
        }, 1032, ["visible", "location", "bg-color", "theme", "offset", "arrow-offset"])
      ], 64)) : C("", !0)
    ]))), 128))
  ], 2);
}
const Fy = /* @__PURE__ */ K(My, [["render", Ry]]), { create: Wy } = W("address"), Yy = "NutAddress", jy = Wy({
  components: {
    NutPopup: Ee,
    NutElevator: xn,
    Location: Gs,
    Location2: ea,
    Check: Pn,
    Close: _t,
    Left: qt
  },
  inheritAttrs: !1,
  props: ce(G({}, $t), {
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
    const n = ke(Yy), s = P(null), o = P(null), a = P(e.visible), l = P(e.type), i = P(0), r = P(0), p = P(["province", "city", "country", "town"]), f = P(null), y = P([0, 0, 0, 0]), g = ue([]), v = N(() => {
      switch (i.value) {
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
      const H = [];
      return q = q.sort((ne, U) => ne.title.localeCompare(U.title)), q.forEach((ne) => {
        const U = H.findIndex((ae) => ae.title === ne.title);
        U <= -1 ? H.push({
          title: ne.title,
          list: [].concat(ne)
        }) : H[U].list.push(ne);
      }), H;
    };
    let k = P([]), c = ue({});
    const $ = P("self"), h = P(20), w = () => {
      g[0] = e.province || [], g[1] = e.city || [], g[2] = e.country || [], g[3] = e.town || [];
      const q = e.modelValue, H = q.length;
      if (H > 0) {
        if (i.value = H - 1, v.value.length == 0) {
          i.value = 0;
          return;
        }
        for (let ne = 0; ne < H; ne++) {
          let U = g[ne];
          k.value[ne] = U.filter((ae) => ae.id == q[ne])[0];
        }
        T();
      }
    }, I = (q, H) => q && q.name || i.value < H && q ? q.name : e.columnsPlaceholder[H] || n("select"), T = () => {
      A(), Te(() => {
        const q = o.value && o.value.getElementsByClassName("active")[0];
        if (q) {
          const H = q.offsetLeft;
          h.value = H || 20;
        }
      });
    }, Y = (q) => {
      var U;
      const H = i.value;
      r.value = i.value;
      const ne = {
        custom: p.value[H]
      };
      k.value[H] = q, k.value.splice(H + 1, k.value.length - (H + 1)), ne.value = q, ((U = g[H + 1]) == null ? void 0 : U.length) > 0 ? (i.value = H + 1, T(), ne.next = p.value[i.value]) : (V(), t("update:modelValue")), t("change", ne);
    }, M = (q, H) => {
      r.value = i.value, I(q, H) && (i.value = H, T());
    }, A = () => {
      const q = f.value, H = r.value, ne = y.value[i.value];
      q != null && q.scrollTop && (y.value[H] = q == null ? void 0 : q.scrollTop), Te(() => {
        q == null || q.scrollTo({
          top: ne,
          behavior: "auto"
        });
      });
    }, S = (q) => {
      const H = e.existAddress;
      let ne = {};
      H.forEach((U) => {
        U && U.selectedAddress && (ne = U), U.selectedAddress = !1;
      }), q.selectedAddress = !0, c = q, t("selected", ne, q, H), V();
    }, E = () => {
      k.value = [], i.value = 0, T();
    }, V = (q = "self") => {
      $.value = q == "cross" ? "cross" : "self", a.value = !1;
    }, X = () => {
      $.value = "mask";
    }, Z = () => {
      const q = {
        addressIdStr: "",
        addressStr: "",
        province: k.value[0],
        city: k.value[1],
        country: k.value[2],
        town: k.value[3]
      }, H = {
        data: {},
        type: l.value
      };
      ["custom", "custom2"].includes(l.value) ? ([0, 1, 2, 3].forEach((ne) => {
        const U = k.value[ne];
        q.addressIdStr += `${ne ? "_" : ""}${U && U.id || 0}`, q.addressStr += U && U.name || "";
      }), H.data = q) : H.data = c, E(), $.value == "self" ? t("close", H) : t("closeMask", { closeWay: $ }), t("update:visible", !1);
    }, F = () => {
      const q = l.value;
      l.value = q == "exist" ? "custom" : "exist", E(), t("switchModule", { type: l.value });
    }, oe = (q, H) => {
      Y(H);
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
    ), ce(G({
      showPopup: a,
      privateType: l,
      tabIndex: i,
      tabName: p,
      selectedRegion: k,
      switchModule: F,
      closeWay: $,
      close: Z,
      getTabName: I,
      nextAreaList: Y,
      regionLine: s,
      tabRegion: o,
      lineDistance: h,
      changeRegionTab: M,
      selectedExist: S,
      clickOverlay: X,
      handClose: V,
      handleElevatorItem: oe,
      initCustomSelected: w
    }, me(e)), {
      translate: n,
      regionList: v,
      transformData: b,
      scrollDom: f
    });
  }
}), Ky = { class: "nut-address" }, Uy = { class: "nut-address__header" }, Xy = { class: "nut-address__header__title" }, qy = {
  key: 0,
  class: "nut-address__custom"
}, Gy = {
  ref: "tabRegion",
  class: "nut-address__region"
}, Zy = ["onClick"], Jy = {
  key: 0,
  class: "active nut-address__region-item"
}, Qy = {
  key: 0,
  class: "nut-address__detail"
}, xy = {
  ref: "scrollDom",
  class: "nut-address__detail-list"
}, ev = ["onClick"], tv = {
  key: 1,
  class: "nut-address__elevator-group"
}, nv = {
  key: 1,
  class: "nut-address__exist"
}, ov = { class: "nut-address__exist-group" }, lv = { class: "nut-address__exist-group-list" }, sv = ["onClick"], av = { class: "nut-address__exist-item-info" }, iv = {
  key: 0,
  class: "nut-address__exist-item-info-name"
}, rv = {
  key: 1,
  class: "nut-address__exist-item-info-phone"
}, uv = { class: "nut-address__exist-item-info-bottom" }, cv = { class: "nut-address__exist-choose-btn" };
function dv(e, t, n, s, o, a) {
  const l = j("Left"), i = j("Close"), r = j("Check"), p = j("nut-elevator"), f = j("Location2"), y = j("nut-popup");
  return u(), x(y, {
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
    default: te(() => [
      m("view", Ky, [
        m("view", Uy, [
          m("view", {
            class: "nut-address__header-back",
            onClick: t[0] || (t[0] = (...g) => e.switchModule && e.switchModule(...g))
          }, [
            D(e.$slots, "back-icon", {}, () => [
              Ce(le(l, { size: "14px" }, null, 512), [
                [De, e.type == "exist" && e.privateType == "custom"]
              ])
            ])
          ]),
          m("view", Xy, B(e.privateType == "custom" ? e.customAddressTitle || e.translate("selectRegion") : e.existAddressTitle || e.translate("deliveryTo")), 1),
          m("view", {
            class: "nut-address__header-close",
            onClick: t[1] || (t[1] = (g) => e.handClose("cross"))
          }, [
            D(e.$slots, "close-icon", {}, () => [
              le(i, {
                color: "#cccccc",
                size: "14px"
              })
            ])
          ])
        ]),
        ["custom", "custom2"].includes(e.privateType) ? (u(), d("view", qy, [
          m("view", Gy, [
            (u(!0), d(ee, null, re(e.selectedRegion, (g, v) => (u(), d("view", {
              key: v,
              class: _(["nut-address__region-item", v == e.tabIndex ? "active" : ""]),
              onClick: (b) => e.changeRegionTab(g, v)
            }, [
              m("view", null, B(e.getTabName(g, v)), 1)
            ], 10, Zy))), 128)),
            e.tabIndex == e.selectedRegion.length ? (u(), d("view", Jy, [
              m("view", null, B(e.getTabName(null, e.selectedRegion.length)), 1)
            ])) : C("", !0),
            m("view", {
              ref: "regionLine",
              class: "nut-address__region-line",
              style: L({ left: e.lineDistance + "px" })
            }, null, 4)
          ], 512),
          e.privateType == "custom" ? (u(), d("view", Qy, [
            m("ul", xy, [
              (u(!0), d(ee, null, re(e.regionList, (g, v) => {
                var b, k;
                return u(), d("li", {
                  key: v,
                  class: _(["nut-address__detail-item", ((b = e.selectedRegion[e.tabIndex]) == null ? void 0 : b.id) == g.id ? "active" : ""]),
                  onClick: (c) => e.nextAreaList(g)
                }, [
                  m("div", null, [
                    ((k = e.selectedRegion[e.tabIndex]) == null ? void 0 : k.id) == g.id ? D(e.$slots, "icon", { key: 0 }, () => [
                      le(r, {
                        class: "nut-address-select-icon",
                        size: "13px"
                      })
                    ]) : C("", !0),
                    ge(B(g.name), 1)
                  ])
                ], 10, ev);
              }), 128))
            ], 512)
          ])) : (u(), d("view", tv, [
            le(p, {
              height: e.height,
              "index-list": e.transformData(e.regionList),
              onClickItem: e.handleElevatorItem
            }, null, 8, ["height", "index-list", "onClickItem"])
          ]))
        ])) : (u(), d("view", nv, [
          m("div", ov, [
            m("ul", lv, [
              (u(!0), d(ee, null, re(e.existAddress, (g, v) => (u(), d("li", {
                key: v,
                class: _(["nut-address__exist-group-item", g.selectedAddress ? "active" : ""]),
                onClick: (b) => e.selectedExist(g)
              }, [
                g.selectedAddress ? C("", !0) : D(e.$slots, "unselected-icon", { key: 0 }, () => [
                  le(f, {
                    class: "nut-address-select-icon",
                    size: "13px"
                  })
                ]),
                g.selectedAddress ? D(e.$slots, "icon", { key: 1 }, () => [
                  le(r, {
                    class: "nut-address-select-icon",
                    size: "13px"
                  })
                ]) : C("", !0),
                m("div", av, [
                  g.name ? (u(), d("div", iv, B(g.name), 1)) : C("", !0),
                  g.phone ? (u(), d("div", rv, B(g.phone), 1)) : C("", !0),
                  m("div", uv, [
                    m("view", null, B(g.provinceName + g.cityName + g.countyName + g.townName + g.addressDetail), 1)
                  ])
                ])
              ], 10, sv))), 128))
            ])
          ]),
          e.isShowCustomAddress ? (u(), d("div", {
            key: 0,
            class: "nut-address__exist-choose",
            onClick: t[2] || (t[2] = (...g) => e.switchModule && e.switchModule(...g))
          }, [
            m("div", cv, B(e.customAndExistTitle || e.translate("chooseAnotherAddress")), 1)
          ])) : C("", !0)
        ])),
        D(e.$slots, "bottom")
      ])
    ]),
    _: 3
  }, 8, ["visible", "lock-scroll", "round", "teleport-disable", "teleport", "z-index", "onClose", "onClickOverlay"]);
}
const fv = /* @__PURE__ */ K(jy, [["render", dv]]), { create: pv } = W("barrage"), mv = pv({
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
    const t = (/* @__PURE__ */ new Date()).getTime(), n = !!Qe().default;
    let s = P(document.createElement("div")), o = P(document.createElement("div")), a = null;
    const l = P(e.danmu), i = P(e.rows), r = P(e.top), p = P(0), f = e.speeds, y = P(0);
    ve(() => {
      g(), n && document.addEventListener("visibilitychange", function() {
        document.visibilityState === "hidden" ? (b(), p.value = 0, v("hidden")) : document.visibilityState === "visible" && g();
      });
    }), je(() => {
      l.value = [], b();
    });
    const g = () => {
      y.value = s.value.offsetWidth, n && v("init"), setTimeout(() => {
        var h;
        (h = s.value) == null || h.style.setProperty("--move-distance", `-${y.value}px`), c();
      }, 300);
    }, v = (h) => {
      var Y;
      const w = document.getElementsByClassName("slotBody" + t);
      let I = ((Y = w == null ? void 0 : w[0]) == null ? void 0 : Y.children) || [];
      const T = [];
      I && Array.from(I).forEach((M) => {
        h == "init" ? (M.style.opacity = "0", T.push(M)) : (M.classList = "", M.style = {});
      }), h == "init" && (l.value = T);
    }, b = () => {
      a && (clearTimeout(a), a = null);
    };
    Q(
      () => e.danmu,
      (h) => {
        e.danmu.length > 0 && (l.value = [...h]);
      }
    );
    const k = (h) => {
      const w = p.value % l.value.length;
      !e.loop && p.value === l.value.length ? l.value.splice(l.value.length, 0, h) : l.value.splice(w, 0, h);
    }, c = () => {
      b(), a = setTimeout(() => {
        $();
      }, e.frequency);
    }, $ = () => {
      var I;
      const h = e.loop ? p.value % l.value.length : p.value;
      let w = document.createElement("view");
      n && typeof l.value[h] == "object" ? (w = l.value[h], (I = w == null ? void 0 : w.classList) == null || I.add("nut-barrage__item")) : (w.innerHTML = l.value[h], w.classList.add("nut-barrage__item"), o.value.appendChild(w)), Te(() => {
        var Y;
        const T = w.offsetHeight;
        if ((Y = w == null ? void 0 : w.classList) == null || Y.add("move"), w.style.animationDuration = `${f}ms`, w.style.top = h % i.value * (T + r.value) + 20 + "px", w.style.opacity = "1", !n) {
          const M = w.offsetWidth;
          w.style.width = M + 20 + "px";
        }
        w.addEventListener("animationend", () => {
          n ? w.classList.remove("move") : o.value.removeChild(w);
        }), !(!e.loop && p.value >= l.value.length - 1) && (p.value++, p.value >= l.value.length && (p.value = 0), w.removeEventListener("animationend", () => {
        }), c());
      });
    };
    return { classTime: t, danmuList: l, dmBody: s, dmContainer: o, add: k };
  }
}), hv = {
  ref: "dmBody",
  class: "nut-barrage"
};
function gv(e, t, n, s, o, a) {
  return u(), d("div", hv, [
    m("div", {
      ref: "dmContainer",
      class: _(["dmContainer", e.$slots.default && "slotContainer"])
    }, [
      e.$slots.default ? (u(), d("div", {
        key: 0,
        class: _(["slotBody", "slotBody" + e.classTime])
      }, [
        D(e.$slots, "default")
      ], 2)) : C("", !0)
    ], 2)
  ], 512);
}
const yv = /* @__PURE__ */ K(mv, [["render", gv]]), { create: vv } = W("signature"), $v = "NutSignature", bv = vv({
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
    NutButton: Ke
  },
  emits: ["start", "end", "signing", "confirm", "clear"],
  setup(e, { emit: t }) {
    const n = ke($v), s = P(null), o = P(null), a = N(() => ({
      ["nut-signature"]: !0,
      [`${e.customClass}`]: e.customClass
    })), l = ue({
      canvasHeight: 0,
      canvasWidth: 0,
      ctx: null,
      isSupportTouch: "ontouchstart" in window,
      events: "ontouchstart" in window ? ["touchstart", "touchmove", "touchend", "touchleave"] : ["mousedown", "mousemove", "mouseup", "mouseleave"]
    }), i = () => {
      let $ = document.createElement("canvas");
      return !!($.getContext && $.getContext("2d"));
    }, r = () => {
      s.value.addEventListener(l.events[0], p, !1);
    }, p = ($) => {
      $.preventDefault(), l.ctx.beginPath(), l.ctx.lineWidth = e.lineWidth, l.ctx.strokeStyle = e.strokeStyle, t("start"), s.value.addEventListener(l.events[1], f, !1), s.value.addEventListener(l.events[2], y, !1), s.value.addEventListener(l.events[3], g, !1);
    }, f = ($) => {
      $.preventDefault();
      let h = l.isSupportTouch ? $.touches[0] : $;
      t("signing", h);
      let w = s.value.getBoundingClientRect(), I = h.clientX - w.left, T = h.clientY - w.top;
      l.ctx.lineTo(I, T), l.ctx.stroke();
    }, y = ($) => {
      $.preventDefault(), t("end"), s.value.removeEventListener(l.events[1], f, !1), s.value.removeEventListener(l.events[2], y, !1);
    }, g = ($) => {
      $.preventDefault(), s.value.removeEventListener(l.events[1], f, !1), s.value.removeEventListener(l.events[2], y, !1);
    }, v = () => {
      s.value.addEventListener(l.events[2], y, !1), l.ctx.clearRect(0, 0, l.canvasWidth, l.canvasHeight), l.ctx.closePath(), t("clear");
    }, b = () => {
      c(s.value);
    }, k = ($) => {
      if (!$)
        return !0;
      var h = document.createElement("canvas");
      return h.width = $.width, h.height = $.height, ($ == null ? void 0 : $.toDataURL()) == h.toDataURL();
    }, c = ($) => {
      let h;
      switch (e.type) {
        case "png":
          h = $.toDataURL("image/png");
          break;
        case "jpg":
          h = $.toDataURL("image/jpeg", 0.8);
          break;
      }
      const w = k($) ? "请绘制签名" : $, I = k($) ? "" : h;
      t("confirm", w, I);
    };
    return ve(() => {
      i() && (l.ctx = s.value.getContext("2d"), l.canvasWidth = o.value.offsetWidth, l.canvasHeight = o.value.offsetHeight, r());
    }), ce(G({}, me(l)), { canvas: s, wrap: o, isCanvasSupported: i, confirm: b, clear: v, classes: a, translate: n });
  }
}), kv = {
  ref: "wrap",
  class: "nut-signature-inner"
}, wv = ["height", "width"], Sv = {
  key: 0,
  class: "nut-signature-unsopport"
};
function Cv(e, t, n, s, o, a) {
  const l = j("nut-button");
  return u(), d("div", {
    class: _(e.classes)
  }, [
    m("div", kv, [
      Ce(m("canvas", {
        ref: "canvas",
        height: e.canvasHeight,
        width: e.canvasWidth
      }, null, 8, wv), [
        [De, e.isCanvasSupported()]
      ]),
      e.isCanvasSupported() ? C("", !0) : (u(), d("p", Sv, B(e.unSupportTpl || e.translate("unSupportTpl")), 1))
    ], 512),
    le(l, {
      class: "nut-signature-btn",
      type: "default",
      onClick: t[0] || (t[0] = (i) => e.clear())
    }, {
      default: te(() => [
        ge(B(e.translate("reSign")), 1)
      ]),
      _: 1
    }),
    le(l, {
      class: "nut-signature-btn",
      type: "primary",
      onClick: t[1] || (t[1] = (i) => e.confirm())
    }, {
      default: te(() => [
        ge(B(e.translate("confirm")), 1)
      ]),
      _: 1
    })
  ], 2);
}
const Tv = /* @__PURE__ */ K(bv, [["render", Cv]]), { create: Nv } = W("time-select"), Dv = "NutTimeSelect", Iv = Nv({
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
    const n = ke(Dv), s = N(() => ({
      width: "100%",
      height: e.height
    })), o = N(() => e.currentKey), a = N(() => e.currentTime), l = () => {
      t("update:visible", !1), t("select", a.value);
    };
    return Me("currentKey", o), Me("currentTime", a), {
      popStyle: s,
      close: l,
      translate: n
    };
  }
}), _v = { class: "nut-time-select" }, Bv = { class: "nut-time-select__title" }, Mv = { class: "nut-time-select__title__fixed" }, Ev = { key: 0 }, Lv = { class: "nut-time-select__content" }, Pv = { class: "nut-time-select__content__pannel" }, Av = { class: "nut-time-select__content__detail" };
function zv(e, t, n, s, o, a) {
  const l = j("nut-popup");
  return u(), x(l, {
    position: "bottom",
    closeable: "",
    round: "",
    "teleport-disable": e.teleportDisable,
    visible: e.visible,
    style: L(e.popStyle),
    "lock-scroll": e.lockScroll,
    onClickOverlay: e.close,
    onClickCloseIcon: e.close
  }, {
    default: te(() => [
      m("view", _v, [
        m("view", Bv, [
          m("view", Mv, [
            e.$slots.title ? D(e.$slots, "title", { key: 1 }) : (u(), d("span", Ev, B(e.title || e.translate("pickupTime")), 1))
          ])
        ]),
        m("view", Lv, [
          m("view", Pv, [
            D(e.$slots, "pannel")
          ]),
          m("view", Av, [
            D(e.$slots, "detail")
          ])
        ])
      ])
    ]),
    _: 3
  }, 8, ["teleport-disable", "visible", "style", "lock-scroll", "onClickOverlay", "onClickCloseIcon"]);
}
const Vv = /* @__PURE__ */ K(Iv, [["render", zv]]), { componentName: Ov, create: Hv } = W("time-pannel"), Rv = Hv({
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
    }), o = N(() => ({
      [Ov]: !0,
      "nut-time-pannel--curr": s.currentKey == e.pannelKey
    })), a = (l) => {
      t.emit("change", l);
    };
    return ce(G({}, me(s)), {
      classes: o,
      handlePannel: a
    });
  }
});
function Fv(e, t, n, s, o, a) {
  return u(), d("view", {
    class: _(e.classes),
    onClick: t[0] || (t[0] = (l) => e.handlePannel(e.pannelKey))
  }, B(e.name), 3);
}
const Wv = /* @__PURE__ */ K(Rv, [["render", Fv]]), { create: Yv } = W("time-detail"), jv = Yv({
  name: "timedetail",
  props: {
    times: {
      type: Array,
      default: () => []
    }
  },
  emits: ["select"],
  setup: (e, { emit: t }) => {
    const n = Be("currentKey"), s = Be("currentTime"), o = ue({
      currentKey: n,
      currentTime: s
    }), a = (r) => {
      let p = o.currentTime.find((f) => f.key == o.currentKey);
      if (p)
        return {
          "nut-time-detail__detail__list__item": !0,
          "nut-time-detail__detail__list__item--curr": p.list.filter((f) => f === r).length > 0
        };
    }, l = N(() => e.times.find((r) => r.key == o.currentKey).list), i = (r) => {
      t("select", r);
    };
    return ce(G({}, me(o)), {
      getClass: a,
      renderData: l,
      handleTime: i
    });
  }
}), Kv = { class: "nut-time-detail" }, Uv = { class: "nut-time-detail__detail nut-time-detail__detail--moring" }, Xv = { class: "nut-time-detail__detail__list" }, qv = ["onClick"];
function Gv(e, t, n, s, o, a) {
  return u(), d("view", Kv, [
    m("view", Uv, [
      m("view", Xv, [
        (u(!0), d(ee, null, re(e.renderData, (l) => (u(), d("view", {
          key: l,
          class: _(e.getClass(l)),
          onClick: (i) => e.handleTime(l)
        }, B(l), 11, qv))), 128))
      ])
    ])
  ]);
}
const Zv = /* @__PURE__ */ K(jv, [["render", Gv]]), { create: Jv } = W("sku-header"), Qv = "NutSkuHeader", xv = Jv({
  props: {
    goods: {
      type: Object,
      default: {}
    }
  },
  components: {
    NutPrice: ln
  },
  setup(e, { slots: t }) {
    const n = ke(Qv);
    return {
      getSlots: (o) => t[o],
      translate: n
    };
  }
}), e2 = { class: "nut-sku-header" }, t2 = ["src"], n2 = { class: "nut-sku-header-right" }, o2 = {
  key: 3,
  class: "nut-sku-header-right-extra"
};
function l2(e, t, n, s, o, a) {
  const l = j("nut-price");
  return u(), d("view", e2, [
    m("img", {
      class: "nut-sku-header-img",
      src: e.goods.imagePath
    }, null, 8, t2),
    m("view", n2, [
      e.getSlots("sku-header-price") ? D(e.$slots, "sku-header-price", { key: 0 }) : (u(), x(l, {
        key: 1,
        price: e.goods.price,
        "need-symbol": !0,
        thousands: !1
      }, null, 8, ["price"])),
      e.getSlots("sku-header-extra") ? D(e.$slots, "sku-header-extra", { key: 2 }) : C("", !0),
      e.goods.skuId && !e.getSlots("sku-header-extra") ? (u(), d("view", o2, B(e.translate("skuId")) + " : " + B(e.goods.skuId), 1)) : C("", !0)
    ])
  ]);
}
const s2 = /* @__PURE__ */ K(xv, [["render", l2]]), { create: a2 } = W("sku-select"), i2 = a2({
  props: {
    sku: {
      type: Array,
      default: () => []
    }
  },
  emits: ["selectSku"],
  setup(e, { emit: t }) {
    const n = P([]);
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
      changeSaleChild: (o, a, l, i) => {
        o.checkFlag || o.disable || t("selectSku", {
          sku: o,
          skuIndex: a,
          parentSku: l,
          parentIndex: i
        });
      }
    };
  }
}), r2 = { class: "nut-sku-select" }, u2 = { class: "nut-sku-select-item-title" }, c2 = { class: "nut-sku-select-item-skus" }, d2 = ["onClick"];
function f2(e, t, n, s, o, a) {
  return u(), d("view", r2, [
    (u(!0), d(ee, null, re(e.skuInfo, (l, i) => (u(), d("view", {
      key: l.id,
      class: "nut-sku-select-item"
    }, [
      m("view", u2, B(l.name), 1),
      m("view", c2, [
        (u(!0), d(ee, null, re(l.list, (r, p) => (u(), d("view", {
          key: r.name,
          class: _(["nut-sku-select-item-skus-sku", [{ active: !r.disable && r.active }, { disable: r.disable }]]),
          onClick: (f) => e.changeSaleChild(r, p, l, i)
        }, B(r.name), 11, d2))), 128))
      ])
    ]))), 128))
  ]);
}
const p2 = /* @__PURE__ */ K(i2, [["render", f2]]), { create: m2 } = W("sku-stepper"), h2 = m2({
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
    NutInputNumber: Qt
  },
  setup(e, { emit: t }) {
    const n = P(e.stepperMin);
    return ve(() => {
      n.value = e.stepperMin;
    }), {
      goodsCount: n,
      add: (r) => {
        t("add", r);
      },
      reduce: (r) => {
        t("reduce", r);
      },
      overlimit: (r, p) => {
        t("overLimit", {
          action: p,
          value: parseInt(n.value + "")
        });
      },
      getExtraText: () => {
        const { stepperExtraText: r } = e;
        return r && Dt(r) == "function" ? r() : "";
      },
      changeStepper: (r) => {
        n.value = r, t("changeStepper", r);
      }
    };
  }
}), g2 = { class: "nut-sku-stepper" }, y2 = { class: "nut-sku-stepper-title" }, v2 = ["innerHTML"], $2 = { class: "nut-sku-stepper-count" };
function b2(e, t, n, s, o, a) {
  const l = j("nut-input-number");
  return u(), d("view", g2, [
    m("view", y2, B(e.stepperTitle), 1),
    m("view", {
      class: "nut-sku-stepper-limit",
      innerHTML: e.getExtraText()
    }, null, 8, v2),
    m("view", $2, [
      le(l, {
        modelValue: e.goodsCount,
        "onUpdate:modelValue": t[0] || (t[0] = (i) => e.goodsCount = i),
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
const k2 = /* @__PURE__ */ K(h2, [["render", b2]]), { create: w2 } = W("sku-operate"), S2 = w2({
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
}), C2 = {
  key: 0,
  class: "nut-sku-operate"
}, T2 = {
  key: 0,
  class: "nut-sku-operate-desc"
}, N2 = {
  key: 1,
  class: "nut-sku-operate-btn"
}, D2 = ["onClick"];
function I2(e, t, n, s, o, a) {
  return e.btnOptions.length > 0 ? (u(), d("view", C2, [
    e.btnExtraText ? (u(), d("view", T2, B(e.btnExtraText), 1)) : C("", !0),
    D(e.$slots, "operate-btn"),
    e.getSlots("operate-btn") ? C("", !0) : (u(), d("view", N2, [
      (u(!0), d(ee, null, re(e.btnOptions, (l, i) => (u(), d("view", {
        key: i,
        class: _([`nut-sku-operate-btn-${l}`, "nut-sku-operate-btn-item"]),
        onClick: (r) => e.clickBtnOperate(l)
      }, B(e.getBtnDesc(l)), 11, D2))), 128))
    ]))
  ])) : C("", !0);
}
const _2 = /* @__PURE__ */ K(S2, [["render", I2]]), { create: B2 } = W("sku"), M2 = "NutSku", E2 = B2({
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
    SkuHeader: s2,
    SkuSelect: p2,
    SkuStepper: k2,
    SkuOperate: _2,
    NutPopup: Ee
  },
  setup(e, { emit: t, slots: n }) {
    const s = ke(M2), o = P(e.visible), a = P(e.stepperMin);
    Q(
      () => e.visible,
      (k) => {
        o.value = k;
      }
    ), Q(
      () => o.value,
      (k) => {
        k == !1 && b();
      }
    );
    const l = (k) => n[k], i = (k) => {
      t("selectSku", k);
    }, r = (k) => {
      a.value = k, t("changeStepper", k);
    }, p = (k) => {
      t("add", k);
    }, f = (k) => {
      t("reduce", k);
    }, y = (k) => {
      t("overLimit", k);
    }, g = (k) => {
      t("clickBtnOperate", {
        type: k,
        value: a.value
      });
    }, v = (k) => {
      k == "icon" && t("clickCloseIcon"), k == "overlay" && t("clickOverlay"), k == "close" && t("close"), o.value = !1;
    }, b = () => {
      t("update:visible", !1);
    };
    return {
      showPopup: o,
      closePopup: v,
      selectSku: i,
      changeStepper: r,
      stepperOverLimit: y,
      clickBtnOperate: g,
      add: p,
      reduce: f,
      getSlots: l,
      translate: s
    };
  }
}), L2 = { class: "nut-sku" }, P2 = { class: "nut-sku-content" };
function A2(e, t, n, s, o, a) {
  const l = j("sku-header"), i = j("SkuSelect"), r = j("sku-stepper"), p = j("sku-operate"), f = j("nut-popup");
  return u(), x(f, {
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
    default: te(() => [
      m("view", L2, [
        D(e.$slots, "sku-header"),
        e.getSlots("sku-header") ? C("", !0) : (u(), x(l, {
          key: 0,
          goods: e.goods
        }, mt({ _: 2 }, [
          e.getSlots("sku-header-price") ? {
            name: "sku-header-price",
            fn: te(() => [
              D(e.$slots, "sku-header-price")
            ]),
            key: "0"
          } : void 0,
          e.getSlots("sku-header-extra") ? {
            name: "sku-header-extra",
            fn: te(() => [
              D(e.$slots, "sku-header-extra")
            ]),
            key: "1"
          } : void 0
        ]), 1032, ["goods"])),
        m("view", P2, [
          D(e.$slots, "sku-select-top"),
          D(e.$slots, "sku-select"),
          e.getSlots("sku-select") ? C("", !0) : (u(), x(i, {
            key: 0,
            sku: e.sku,
            onSelectSku: e.selectSku
          }, null, 8, ["sku", "onSelectSku"])),
          D(e.$slots, "sku-stepper"),
          e.getSlots("sku-stepper") ? C("", !0) : (u(), x(r, {
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
          D(e.$slots, "sku-stepper-bottom")
        ]),
        le(p, {
          "btn-extra-text": e.btnExtraText,
          "btn-options": e.btnOptions,
          "buy-text": e.buyText || e.translate("buyNow"),
          "add-cart-text": e.addCartText || e.translate("addToCart"),
          "confirm-text": e.confirmText || e.translate("confirm"),
          onClickBtnOperate: e.clickBtnOperate
        }, mt({ _: 2 }, [
          e.getSlots("sku-operate") ? {
            name: "operate-btn",
            fn: te(() => [
              D(e.$slots, "sku-operate")
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["btn-extra-text", "btn-options", "buy-text", "add-cart-text", "confirm-text", "onClickBtnOperate"])
      ])
    ]),
    _: 3
  }, 8, ["visible", "lock-scroll", "catch-move"]);
}
const z2 = /* @__PURE__ */ K(E2, [["render", A2]]), { create: V2 } = W("card"), O2 = V2({
  components: {
    NutPrice: ln,
    NutTag: To
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
}), H2 = { class: "nut-card" }, R2 = { class: "nut-card__left" }, F2 = ["src"], W2 = { class: "nut-card__right" }, Y2 = { class: "nut-card__right__title" }, j2 = {
  key: 0,
  class: "nut-card__right__price"
}, K2 = { class: "nut-card__right__other" }, U2 = { class: "nut-card__right__shop" }, X2 = { class: "nut-card__right__shop__name" };
function q2(e, t, n, s, o, a) {
  const l = j("nut-price"), i = j("nut-tag");
  return u(), d("div", H2, [
    m("div", R2, [
      m("img", {
        src: e.imgUrl,
        alt: ""
      }, null, 8, F2)
    ]),
    m("div", W2, [
      m("div", Y2, B(e.title), 1),
      D(e.$slots, "prolist"),
      e.isNeedPrice ? (u(), d("div", j2, [
        D(e.$slots, "price", {}, () => [
          le(l, { price: e.price }, null, 8, ["price"])
        ]),
        D(e.$slots, "origin", {}, () => [
          le(l, {
            class: "nut-card__right__price__origin",
            price: e.vipPrice
          }, null, 8, ["price"])
        ])
      ])) : C("", !0),
      m("div", K2, [
        D(e.$slots, "shop-tag", {}, () => [
          le(i, { type: "danger" }, {
            default: te(() => [
              ge(B(e.shopDesc), 1)
            ]),
            _: 1
          }),
          le(i, { plain: "" }, {
            default: te(() => [
              ge(B(e.delivery), 1)
            ]),
            _: 1
          })
        ])
      ]),
      m("div", U2, [
        m("div", X2, B(e.shopName), 1),
        D(e.$slots, "footer")
      ])
    ])
  ]);
}
const G2 = /* @__PURE__ */ K(O2, [["render", q2]]), { create: Z2 } = W("ecard"), J2 = "NutEcard", Q2 = Z2({
  components: {
    NutInputNumber: Qt
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
    const n = ke(J2), s = P(null), o = P(null), a = P(""), l = P(e.cardAmountMin), i = P(e.modelValue), r = (g, v) => {
      s.value = v, l.value = e.cardAmountMin, o.value = g.price, t("change", g), t("update:modelValue", g.price);
    }, p = (g) => {
      let b = g.target.value.replace(/[^\d]/g, "");
      a.value = b, o.value = b, Number(b) > e.cardAmountMax && (a.value = e.cardAmountMax, o.value = e.cardAmountMax), Number(b) < e.cardAmountMin && (a.value = e.cardAmountMin, o.value = e.cardAmountMin), t("inputChange", Number(a.value)), t("update:modelValue", Number(a.value));
    }, f = () => {
      s.value = "input", l.value = e.cardAmountMin, o.value = a.value, t("update:modelValue", a.value), t("inputClick");
    }, y = (g) => {
      l.value = g, t("changeStep", l.value, o.value);
    };
    return Q(
      () => e.modelValue,
      (g) => {
        i.value = g;
      }
    ), {
      handleClick: r,
      changeStep: y,
      change: p,
      inputClick: f,
      stepValue: l,
      currentIndex: s,
      inputValue: a,
      money: i,
      translate: n
    };
  }
}), x2 = { class: "nut-ecard" }, e3 = { class: "nut-ecard__title" }, t3 = { class: "nut-ecard__list" }, n3 = ["onClick"], o3 = { class: "nut-ecard__list__input--con" }, l3 = ["placeholder"], s3 = { class: "nut-ecard__list__step" };
function a3(e, t, n, s, o, a) {
  const l = j("nut-input-number");
  return u(), d("view", x2, [
    m("view", e3, B(e.chooseText || e.translate("chooseText")), 1),
    m("view", t3, [
      (u(!0), d(ee, null, re(e.dataList, (i, r) => (u(), d("view", {
        key: r,
        class: _(["nut-ecard__list__item", e.currentIndex == r ? "active" : ""]),
        onClick: (p) => e.handleClick(i, r)
      }, B(i.price), 11, n3))), 128)),
      m("view", {
        class: _(["nut-ecard__list__input", e.currentIndex == "input" ? "active" : ""]),
        onClick: t[2] || (t[2] = (...i) => e.inputClick && e.inputClick(...i))
      }, [
        m("view", null, B(e.otherValueText || e.translate("otherValueText")), 1),
        m("view", o3, [
          Ce(m("input", {
            "onUpdate:modelValue": t[0] || (t[0] = (i) => e.inputValue = i),
            class: "nut-ecard__list__input--input",
            type: "text",
            placeholder: e.placeholder || e.translate("placeholder"),
            onInput: t[1] || (t[1] = (...i) => e.change && e.change(...i))
          }, null, 40, l3), [
            [In, e.inputValue]
          ]),
          ge(" " + B(e.suffix), 1)
        ])
      ], 2),
      m("view", s3, [
        m("view", null, B(e.suffix) + B(e.money), 1),
        le(l, {
          modelValue: e.stepValue,
          "onUpdate:modelValue": t[3] || (t[3] = (i) => e.stepValue = i),
          min: e.cardBuyMin,
          max: e.cardBuyMax,
          onChange: e.changeStep
        }, null, 8, ["modelValue", "min", "max", "onChange"])
      ])
    ])
  ]);
}
const i3 = /* @__PURE__ */ K(Q2, [["render", a3]]), { create: r3 } = W("address-list-item"), u3 = "NutAddressList", c3 = r3({
  components: { Del: zn, Edit: ns },
  props: {
    item: {
      type: Object,
      default: {}
    }
  },
  emits: ["delIcon", "editIcon", "clickItem"],
  setup(e, { emit: t }) {
    const n = ke(u3);
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
}), d3 = { class: "nut-address-list-item__info" }, f3 = { class: "nut-address-list-item__info-contact" }, p3 = { class: "nut-address-list-item__info-contact-name" }, m3 = { class: "nut-address-list-item__info-contact-tel" }, h3 = {
  key: 0,
  class: "nut-address-list-item__info-contact-default"
}, g3 = { class: "nut-address-list-item__info-handle" }, y3 = { class: "nut-address-list-item__addr" };
function v3(e, t, n, s, o, a) {
  const l = j("Del"), i = j("Edit");
  return u(), d("div", {
    class: "nut-address-list-item",
    onClick: t[0] || (t[0] = (...r) => e.contentsClick && e.contentsClick(...r))
  }, [
    m("div", d3, [
      m("div", f3, [
        D(e.$slots, "content-top", {}, () => [
          m("div", p3, B(e.item.addressName), 1),
          m("div", m3, B(e.item.phone), 1),
          e.item.defaultAddress ? (u(), d("div", h3, B(e.translate("default")), 1)) : C("", !0)
        ])
      ]),
      m("div", g3, [
        D(e.$slots, "content-icon", {}, () => [
          le(l, {
            name: "del",
            class: "nut-address-list-item__info-handle-del",
            onClick: e.delClick
          }, null, 8, ["onClick"]),
          le(i, {
            name: "edit",
            class: "nut-address-list-item__info-handle-edit",
            onClick: e.editClick
          }, null, 8, ["onClick"])
        ])
      ])
    ]),
    m("div", y3, [
      D(e.$slots, "content-addr", {}, () => [
        ge(B(e.item.fullAddress), 1)
      ])
    ])
  ]);
}
const Nn = /* @__PURE__ */ K(c3, [["render", v3]]), { create: $3 } = W("address-list-general"), b3 = $3({
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
    ItemContents: Nn,
    NutButton: Ke,
    NutSwipe: yo
  },
  setup(e, { emit: t }) {
    const n = () => we(Nn, {
      item: e.item,
      onDelIcon(T) {
        l(T);
      },
      onEditIcon(T) {
        i(T);
      },
      onClickItem(T) {
        r(T);
      }
    });
    let s = null;
    const o = P(!1), a = P(!1), l = (T) => {
      t("delIcon", T, e.item), T.stopPropagation();
    }, i = (T) => {
      t("editIcon", T, e.item), T.stopPropagation();
    }, r = (T) => {
      o.value || (t("clickItem", T, e.item), T.stopPropagation());
    }, p = (T) => {
      t("longDel", T, e.item), T.stopPropagation();
    }, f = (T) => {
      s = 0, a.value = !0, t("longDown", T, e.item);
    };
    return {
      renderCompontent: n,
      showMaskRef: a,
      clickItem: r,
      editClick: i,
      delClick: l,
      delLongClick: p,
      holddownstart: (T) => {
        s = setTimeout(() => {
          f(T);
        }, 300);
      },
      holddownmove: () => {
        clearTimeout(s);
      },
      holddownend: () => {
        clearTimeout(s);
      },
      copyCLick: (T) => {
        t("longCopy", T, e.item), T.stopPropagation();
      },
      hideMaskClick: () => {
        a.value = !1;
      },
      setDefault: (T) => {
        t("longSet", T, e.item), T.stopPropagation();
      },
      maskClick: (T) => {
        s != 0 && (a.value = !1), T.stopPropagation(), T.preventDefault();
      },
      swipeDelClick: (T) => {
        t("swipeDel", T, e.item), T.stopPropagation();
      },
      swipestart: () => {
        o.value = !1;
      },
      swipemove: () => {
        o.value = !0;
      }
    };
  }
}), k3 = {
  key: 0,
  class: "nut-address-list-general"
}, w3 = { class: "nut-address-list-swipe" };
function S3(e, t, n, s, o, a) {
  const l = j("nut-button"), i = j("nut-swipe");
  return e.swipeEdition ? (u(), x(i, { key: 1 }, {
    right: te(() => [
      D(e.$slots, "swipe-right-btn", {}, () => [
        le(l, {
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
      m("div", w3, [
        (u(), x(Ae(e.renderCompontent()), {
          onTouchmove: e.swipemove,
          onTouchstart: e.swipestart
        }, {
          "content-top": te(() => [
            D(e.$slots, "content-info")
          ]),
          "content-icon": te(() => [
            D(e.$slots, "content-icons")
          ]),
          "content-addr": te(() => [
            D(e.$slots, "content-addrs")
          ]),
          _: 3
        }, 40, ["onTouchmove", "onTouchstart"]))
      ])
    ]),
    _: 3
  })) : (u(), d("div", k3, [
    (u(), x(Ae(e.renderCompontent()), {
      onTouchstart: e.holddownstart,
      onTouchend: e.holddownend,
      onTouchmove: e.holddownmove
    }, {
      "content-top": te(() => [
        D(e.$slots, "content-info")
      ]),
      "content-icon": te(() => [
        D(e.$slots, "content-icons")
      ]),
      "content-addr": te(() => [
        D(e.$slots, "content-addrs")
      ]),
      _: 3
    }, 40, ["onTouchstart", "onTouchend", "onTouchmove"])),
    e.longPress && e.showMaskRef ? (u(), d("div", {
      key: 0,
      class: "nut-address-list-general__mask",
      onClick: t[3] || (t[3] = (...r) => e.maskClick && e.maskClick(...r))
    }, [
      D(e.$slots, "longpress-all", {}, () => [
        m("div", {
          class: "nut-address-list-general__mask-copy",
          onClick: t[0] || (t[0] = (...r) => e.copyCLick && e.copyCLick(...r))
        }, " 复制地址 "),
        m("div", {
          class: "nut-address-list-general__mask-set",
          onClick: t[1] || (t[1] = (...r) => e.setDefault && e.setDefault(...r))
        }, " 设置默认 "),
        m("div", {
          class: "nut-address-list-general__mask-del",
          onClick: t[2] || (t[2] = (...r) => e.delLongClick && e.delLongClick(...r))
        }, " 删除地址 ")
      ])
    ])) : C("", !0),
    e.showMaskRef ? (u(), d("div", {
      key: 1,
      class: "nut-address-list__mask-bottom",
      onClick: t[4] || (t[4] = (...r) => e.hideMaskClick && e.hideMaskClick(...r))
    })) : C("", !0)
  ]));
}
const C3 = /* @__PURE__ */ K(b3, [["render", S3]]), { create: T3 } = W("address-list"), N3 = "NutAddressList", D3 = T3({
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
    NutButton: Ke
  },
  emits: ["delIcon", "editIcon", "clickItem", "longCopy", "longSet", "longDel", "swipeDel", "add"],
  setup(e, { emit: t }) {
    const n = ke(N3), s = P([]), o = ue({
      id: 2,
      addressName: "姓名",
      phone: "123****4567",
      defaultAddress: !1,
      fullAddress: "北京市通州区测试测试测试测试测试测试测试测试测试"
    }), a = () => {
      Object.keys(e.dataOptions).length > 0 && (s.value = e.data.map((b) => Ko(o, b, e.dataOptions)));
    };
    Q(
      () => e.data,
      () => a(),
      { deep: !0 }
    );
    const l = (b, k) => {
      t("delIcon", b, k), b.stopPropagation();
    }, i = (b, k) => {
      t("editIcon", b, k), b.stopPropagation();
    }, r = (b, k) => {
      t("clickItem", b, k), b.stopPropagation();
    }, p = (b, k) => {
      t("longCopy", b, k), b.stopPropagation();
    }, f = (b, k) => {
      t("longSet", b, k), b.stopPropagation();
    }, y = (b, k) => {
      t("longDel", b, k), b.stopPropagation();
    }, g = (b, k) => {
      t("swipeDel", b, k), b.stopPropagation();
    }, v = (b) => {
      t("add", b), b.stopPropagation();
    };
    return ve(() => {
      a();
    }), {
      clickDelIcon: l,
      clickEditIcon: i,
      clickContentItem: r,
      clickLongCopy: p,
      clickLongSet: f,
      clickLongDel: y,
      clickSwipeDel: g,
      addAddress: v,
      dataArray: s,
      translate: n
    };
  }
}), I3 = { class: "nut-address-list" };
function _3(e, t, n, s, o, a) {
  const l = j("general-shell"), i = j("nut-button");
  return u(), d("div", I3, [
    (u(!0), d(ee, null, re(e.dataArray, (r, p) => (u(), x(l, {
      key: p,
      item: r,
      "long-press": e.longPress,
      "swipe-edition": e.swipeEdition,
      onDelIcon: e.clickDelIcon,
      onEditIcon: e.clickEditIcon,
      onClickItem: e.clickContentItem,
      onSwipeDel: e.clickSwipeDel,
      onLongCopy: e.clickLongCopy,
      onLongSet: e.clickLongSet,
      onLongDel: e.clickLongDel
    }, mt({
      "content-info": te(() => [
        D(e.$slots, "item-infos", { item: r })
      ]),
      "content-icons": te(() => [
        D(e.$slots, "item-icon", { item: r })
      ]),
      "content-addrs": te(() => [
        D(e.$slots, "item-addr", { item: r })
      ]),
      _: 2
    }, [
      e.longPress ? {
        name: "longpress-all",
        fn: te(() => [
          D(e.$slots, "longpress-btns", { item: r })
        ]),
        key: "0"
      } : void 0,
      e.swipeEdition ? {
        name: "swipe-right-btn",
        fn: te(() => [
          D(e.$slots, "swipe-right", { item: r })
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["item", "long-press", "swipe-edition", "onDelIcon", "onEditIcon", "onClickItem", "onSwipeDel", "onLongCopy", "onLongSet", "onLongDel"]))), 128)),
    e.showBottomButton ? (u(), d("div", {
      key: 0,
      class: "nut-address-list__bottom",
      onClick: t[0] || (t[0] = (...r) => e.addAddress && e.addAddress(...r))
    }, [
      le(i, {
        block: "",
        type: "danger"
      }, {
        default: te(() => [
          ge(B(e.translate("addAddress")), 1)
        ]),
        _: 1
      })
    ])) : C("", !0)
  ]);
}
const B3 = /* @__PURE__ */ K(D3, [["render", _3]]), { create: M3 } = W("category"), E3 = M3({
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
    const n = P(0), s = P(!1);
    return {
      getChildList: (a) => {
        n.value = a, t("change", a);
      },
      checkIndex: n,
      categoryLeft: s
    };
  }
}), L3 = { class: "nut-category" }, P3 = { class: "nut-category__cateList" }, A3 = { key: 0 }, z3 = ["onClick"];
function V3(e, t, n, s, o, a) {
  return u(), d("div", L3, [
    m("div", P3, [
      e.type == "classify" || e.type == "text" ? (u(), d("div", A3, [
        (u(!0), d(ee, null, re(e.category, (l, i) => (u(), d("div", {
          key: i,
          class: "nut-category__cateListLeft"
        }, [
          m("div", {
            class: _([e.checkIndex == i ? "nut-category__cateListItemChecked" : "nut-category__cateListItem"]),
            onClick: (r) => e.getChildList(i)
          }, B(l.catName), 11, z3)
        ]))), 128))
      ])) : C("", !0),
      D(e.$slots, "default")
    ])
  ]);
}
const O3 = /* @__PURE__ */ K(E3, [["render", V3]]), { create: H3 } = W("category-pane"), R3 = H3({
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
}), F3 = { class: "nut-category-pane" }, W3 = {
  key: 0,
  class: "nut-category-pane__cateListRight"
}, Y3 = { class: "nut-category-pane__childTitle" }, j3 = {
  key: 0,
  class: "nut-category-pane__childItemList"
}, K3 = ["onClick"], U3 = ["src"], X3 = { class: "nut-category-pane__skuImg" }, q3 = {
  key: 1,
  class: "nut-category-pane__cateListRight"
}, G3 = { class: "nut-category-pane__childTitle" }, Z3 = {
  key: 0,
  class: "nut-category-pane__childItemList"
}, J3 = ["onClick"], Q3 = { class: "nut-category-pane__skuName" }, x3 = {
  key: 2,
  class: "nut-category-pane__selfItemList"
}, e5 = ["onClick"];
function t5(e, t, n, s, o, a) {
  return u(), d("div", F3, [
    e.type == "classify" ? (u(), d("div", W3, [
      (u(!0), d(ee, null, re(e.categoryChild, (l, i) => (u(), d("div", { key: i }, [
        m("div", Y3, B(l == null ? void 0 : l.catName), 1),
        (l == null ? void 0 : l.catType) == 1 ? (u(), d("div", j3, [
          (u(!0), d(ee, null, re(l.childCateList, (r, p) => (u(), d("div", {
            key: p,
            class: "nut-category-pane__childItem",
            onClick: (f) => e.onChange(r)
          }, [
            m("img", {
              class: "nut-category-pane__childImg",
              src: r.backImg
            }, null, 8, U3),
            m("div", X3, B(r == null ? void 0 : r.catName), 1)
          ], 8, K3))), 128))
        ])) : C("", !0)
      ]))), 128))
    ])) : C("", !0),
    e.type == "text" ? (u(), d("div", q3, [
      (u(!0), d(ee, null, re(e.categoryChild, (l, i) => (u(), d("div", { key: i }, [
        m("div", G3, B(l == null ? void 0 : l.catName), 1),
        (l == null ? void 0 : l.catType) == 1 ? (u(), d("div", Z3, [
          (u(!0), d(ee, null, re(l.childCateList, (r, p) => (u(), d("div", {
            key: p,
            class: "nut-category-pane__childItem",
            onClick: (f) => e.onChange(r)
          }, [
            m("div", Q3, B(r == null ? void 0 : r.catName), 1)
          ], 8, J3))), 128))
        ])) : C("", !0)
      ]))), 128))
    ])) : C("", !0),
    e.type == "custom" ? (u(), d("div", x3, [
      (u(!0), d(ee, null, re(e.customCategory, (l, i) => (u(), d("div", {
        key: i,
        class: "nut-category-pane__skuName",
        onClick: (r) => e.onChange(l)
      }, B(l == null ? void 0 : l.catName), 9, e5))), 128))
    ])) : C("", !0)
  ]);
}
const n5 = /* @__PURE__ */ K(R3, [["render", t5]]), { create: o5 } = W("comment-header"), l5 = o5({
  components: {
    NutRate: co
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
}), s5 = { class: "nut-comment-header__user" }, a5 = { class: "nut-comment-header__user-avter" }, i5 = ["src"], r5 = { class: "nut-comment-header__user-score" }, u5 = {
  key: 0,
  class: "nut-comment-header__time"
};
function c5(e, t, n, s, o, a) {
  const l = j("nut-rate");
  return u(), d("view", null, [
    e.info ? (u(), d("view", {
      key: 0,
      class: "nut-comment-header",
      onClick: t[1] || (t[1] = (...i) => e.handleClick && e.handleClick(...i))
    }, [
      m("view", s5, [
        m("view", a5, [
          e.info.avatar ? (u(), d("img", {
            key: 0,
            src: e.info.avatar
          }, null, 8, i5)) : C("", !0)
        ]),
        e.type == "default" ? (u(), d("view", {
          key: 0,
          class: _([`nut-comment-header__user-${e.type}`])
        }, [
          m("view", {
            class: _([`nut-comment-header__user-${e.type}-name`])
          }, [
            m("span", null, B(e.info.nickName), 1),
            D(e.$slots, "labels")
          ], 2),
          m("view", r5, [
            le(l, {
              modelValue: e.info.score,
              "onUpdate:modelValue": t[0] || (t[0] = (i) => e.info.score = i),
              size: "12",
              spacing: "5",
              readonly: "",
              onChange: e.handleClick
            }, null, 8, ["modelValue", "onChange"])
          ])
        ], 2)) : (u(), d("view", {
          key: 1,
          class: _([`nut-comment-header__user-${e.type}`])
        }, [
          m("span", {
            class: _([`nut-comment-header__user-${e.type}-name`])
          }, B(e.info.nickName), 3),
          D(e.$slots, "labels")
        ], 2))
      ]),
      e.info.time ? (u(), d("view", u5, B(e.info.time), 1)) : C("", !0)
    ])) : C("", !0),
    e.type == "complex" ? (u(), d("view", {
      key: 1,
      class: _([`nut-comment-header__${e.type}-score`])
    }, [
      le(l, {
        modelValue: e.info.score,
        "onUpdate:modelValue": t[2] || (t[2] = (i) => e.info.score = i),
        size: "12",
        spacing: "3",
        readonly: ""
      }, null, 8, ["modelValue"]),
      m("i", {
        class: _([`nut-comment-header__${e.type}-score-i`])
      }, null, 2),
      m("view", {
        class: _([`nut-comment-header__${e.type}-score-size`])
      }, B(e.info.size), 3)
    ], 2)) : C("", !0)
  ]);
}
const d5 = /* @__PURE__ */ K(l5, [["render", c5]]), { create: f5 } = W("comment-images"), p5 = f5({
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
  components: { Right: Gt },
  emits: ["click", "clickImages"],
  setup(e, { emit: t }) {
    const n = P(!1), s = P(1), o = P([]);
    return Q(
      () => [e.videos, e.images],
      (l) => {
        l[0].length > 0 && l[0].forEach((i) => {
          i.type = "video";
        }), o.value = l[0].concat(l[1]);
      },
      { deep: !0 }
    ), ve(() => {
      e.videos.length > 0 && e.videos.forEach((l) => {
        l.type = "video";
      }), o.value = e.videos.concat(e.images);
    }), { isShowImage: n, initIndex: s, showImages: (l, i) => {
      const { videos: r, images: p } = e, f = l == "img" ? i - r.length : i;
      t("clickImages", {
        type: l,
        index: f,
        value: l == "img" ? p[f] : r[f]
      });
    }, totalImages: o };
  }
}), m5 = ["onClick"], h5 = ["src"], g5 = /* @__PURE__ */ m("view", { class: "nut-comment-images__play" }, null, -1), y5 = ["onClick"], v5 = ["src"], $5 = {
  key: 0,
  class: "nut-comment-images__mask"
};
function b5(e, t, n, s, o, a) {
  const l = j("Right");
  return u(), d("view", {
    class: _(`nut-comment-images nut-comment-images--${e.type}`)
  }, [
    (u(!0), d(ee, null, re(e.videos, (i, r) => (u(), d("view", {
      key: i.id,
      class: "nut-comment-images__item nut-comment-images__item--video",
      onClick: (p) => e.showImages("video", r)
    }, [
      m("img", {
        src: i.mainUrl
      }, null, 8, h5),
      g5
    ], 8, m5))), 128)),
    (u(!0), d(ee, null, re(e.images, (i, r) => (u(), d(ee, {
      key: i.id
    }, [
      e.type == "multi" && e.videos.length + r < 9 || e.type != "multi" ? (u(), d("view", {
        key: 0,
        class: "nut-comment-images__item nut-comment-images__item--imgbox",
        onClick: (p) => e.showImages("img", r + e.videos.length)
      }, [
        m("img", {
          src: i.smallImgUrl ? i.smallImgUrl : i.imgUrl
        }, null, 8, v5),
        e.type == "multi" && e.totalImages.length > 9 && e.videos.length + r > 7 ? (u(), d("view", $5, [
          m("span", null, "共 " + B(e.totalImages.length) + " 张", 1),
          le(l, { style: { width: "12px" } })
        ])) : C("", !0)
      ], 8, y5)) : C("", !0)
    ], 64))), 128))
  ], 2);
}
const k5 = /* @__PURE__ */ K(p5, [["render", b5]]), { create: w5 } = W("comment-bottom"), S5 = "NutComment", C5 = w5({
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
  components: { Fabulous: is, Comment: Yl, MoreX: ha },
  emits: ["clickOperate", "handleClick"],
  setup(e, { emit: t }) {
    const n = ke(S5), s = P(!1), o = P([]);
    return ve(() => {
      const i = ["replay", "like", "more"];
      e.operation && e.operation.forEach((r) => {
        i.includes(r) && o.value.push(r);
      });
    }), { showPopver: s, operate: (i) => {
      i == "more" && (s.value = !s.value), t("clickOperate", i);
    }, mergeOp: o, handleClick: () => {
      t("handleClick");
    }, translate: n };
  }
}), T5 = { class: "nut-comment-bottom" }, N5 = { key: 0 }, D5 = { class: "nut-comment-bottom__cpx" }, I5 = ["onClick"];
function _5(e, t, n, s, o, a) {
  const l = j("Fabulous"), i = j("Comment"), r = j("MoreX");
  return u(), d("view", T5, [
    m("view", {
      class: "nut-comment-bottom__lable",
      onClick: t[0] || (t[0] = (...p) => e.handleClick && e.handleClick(...p))
    }, [
      e.type != "complex" ? (u(), d("span", N5, B(e.info.size), 1)) : C("", !0)
    ]),
    m("view", D5, [
      (u(!0), d(ee, null, re(e.mergeOp, (p, f) => (u(), d("view", {
        key: f,
        class: _(["nut-comment-bottom__cpx-item", `nut-comment-bottom__cpx-item--${p}`]),
        onClick: (y) => e.operate(p)
      }, [
        p != "more" ? (u(), d(ee, { key: 0 }, [
          m("span", null, B(e.info[p]), 1),
          p == "like" ? (u(), x(l, { key: 0 })) : (u(), x(i, { key: 1 }))
        ], 64)) : C("", !0),
        p == "more" ? (u(), d(ee, { key: 1 }, [
          le(r),
          e.showPopver ? (u(), d("view", {
            key: 0,
            class: "nut-comment-bottom__cpx-item-popover",
            onClick: t[1] || (t[1] = (y) => e.operate("popover"))
          }, B(e.translate("complaintsText")), 1)) : C("", !0)
        ], 64)) : C("", !0)
      ], 10, I5))), 128))
    ])
  ]);
}
const B5 = /* @__PURE__ */ K(C5, [["render", _5]]), { create: M5 } = W("comment"), E5 = "NutComment", L5 = M5({
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
    CommentHeader: d5,
    CommentImages: k5,
    CommentBottom: B5,
    Right: Gt
  },
  emits: ["click", "clickImages", "clickOperate"],
  setup(e, { emit: t }) {
    const n = ke(E5);
    return { conEllipsis: N(() => e.ellipsis ? e.ellipsis : e.headerType == "complex" ? 6 : 2), clickOperate: (i) => {
      t("clickOperate", i);
    }, handleClick: () => {
      t("click", e.info);
    }, clickImages: (i) => {
      t("clickImages", i);
    }, translate: n };
  }
}), P5 = {
  key: 0,
  class: "nut-comment"
}, A5 = ["innerHTML"], z5 = { class: "nut-comment__follow-title" }, V5 = { class: "nut-comment__follow-com" };
function O5(e, t, n, s, o, a) {
  const l = j("comment-header"), i = j("comment-images"), r = j("Right"), p = j("comment-bottom");
  return e.info && Object.keys(e.info) ? (u(), d("view", P5, [
    le(l, {
      type: e.headerType,
      info: e.info,
      labels: e.labels,
      onHandleClick: e.handleClick
    }, {
      labels: te(() => [
        D(e.$slots, "comment-labels")
      ]),
      _: 3
    }, 8, ["type", "info", "labels", "onHandleClick"]),
    D(e.$slots, "feature"),
    m("view", {
      class: "nut-comment__main",
      style: L(`-webkit-line-clamp:${e.conEllipsis}`),
      onClick: t[0] || (t[0] = (...f) => e.handleClick && e.handleClick(...f)),
      innerHTML: e.info.content
    }, null, 12, A5),
    le(i, {
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
      m("view", z5, B(e.translate("additionalReview", e.follow.days)), 1),
      m("view", V5, B(e.follow.content), 1),
      e.follow.images && e.follow.images.length > 0 ? (u(), d("view", {
        key: 0,
        class: "nut-comment__follow-img",
        onClick: t[1] || (t[1] = (f) => e.clickImages(e.follow.images))
      }, [
        ge(B(e.translate("additionalImages", e.follow.images.length)) + " ", 1),
        le(r, { width: "12px" })
      ])) : C("", !0)
    ])) : C("", !0),
    le(p, {
      type: e.headerType,
      info: e.info,
      operation: e.operation,
      onClickOperate: e.clickOperate,
      onHandleClick: e.handleClick
    }, null, 8, ["type", "info", "operation", "onClickOperate", "onHandleClick"]),
    D(e.$slots, "comment-shop-reply")
  ])) : C("", !0);
}
const H5 = /* @__PURE__ */ K(L5, [["render", O5]]), { componentName: R5, create: F5 } = W("invoice"), W5 = F5({
  components: {
    NutForm: mo,
    NutFormItem: ho,
    NutRadio: ro,
    NutRadioGroup: uo,
    NutButton: Ke
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
    const n = P(), s = P([]), o = ue({
      // list: []
    }), a = N(() => ({
      [R5]: !0
    }));
    ve(() => {
      l();
    });
    const l = () => {
      s.value = e.data;
    }, i = () => {
      n.value.validate().then(({ valid: r, errors: p }) => {
        t("submit", r, p), t("onSubmit", r, p);
      });
    };
    return Q(
      () => e.data,
      () => l(),
      { deep: !0 }
    ), ce(G({}, me(o)), {
      classes: a,
      formRef: n,
      list: s,
      submitFun: i
    });
  }
}), Y5 = ["onUpdate:modelValue", "placeholder"], j5 = {
  key: 0,
  class: "nut-invoice__submit"
};
function K5(e, t, n, s, o, a) {
  const l = j("nut-radio"), i = j("nut-radio-group"), r = j("nut-form-item"), p = j("nut-form"), f = j("nut-button");
  return u(), d("view", {
    class: _(e.classes)
  }, [
    le(p, {
      ref: "formRef",
      "model-value": e.formValue
    }, {
      default: te(() => [
        (u(!0), d(ee, null, re(e.list, (y, g) => (u(), x(r, {
          key: g,
          label: y.label,
          required: y.required,
          rules: y.rules,
          prop: y.formItemProp
        }, {
          default: te(() => [
            y.type === "radio" ? (u(), x(i, {
              key: 0,
              modelValue: e.formValue[y.formItemProp],
              "onUpdate:modelValue": (v) => e.formValue[y.formItemProp] = v
            }, {
              default: te(() => [
                (u(!0), d(ee, null, re(y.radioLabel, (v, b) => (u(), x(l, {
                  key: b,
                  shape: "button",
                  label: v.label
                }, {
                  default: te(() => [
                    ge(B(v.label), 1)
                  ]),
                  _: 2
                }, 1032, ["label"]))), 128))
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue"])) : Ce((u(), d("input", {
              key: 1,
              "onUpdate:modelValue": (v) => e.formValue[y.formItemProp] = v,
              class: "nut-input-text",
              placeholder: y.placeholder,
              type: "text"
            }, null, 8, Y5)), [
              [In, e.formValue[y.formItemProp]]
            ])
          ]),
          _: 2
        }, 1032, ["label", "required", "rules", "prop"]))), 128))
      ]),
      _: 1
    }, 8, ["model-value"]),
    e.submit ? (u(), d("div", j5, [
      le(f, {
        type: "primary",
        block: "",
        onClick: e.submitFun
      }, {
        default: te(() => [
          ge("提交审批")
        ]),
        _: 1
      }, 8, ["onClick"])
    ])) : C("", !0)
  ], 2);
}
const U5 = /* @__PURE__ */ K(W5, [["render", K5]]), { create: X5 } = W("avatar-cropper"), q5 = X5({
  components: {
    NutButton: Ke,
    Refresh2: Ka,
    Retweet: Za
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
    }, a = P(G({}, o)), l = P(), i = P(), r = P(), p = window.devicePixelRatio || 1, f = Ge(), y = N(() => s.angle === 90 || s.angle === 270), g = N(() => {
      const { swidth: U } = a.value, ae = U / p + "px";
      return {
        width: ae,
        height: ae
      };
    }), v = N(() => {
      const { displayWidth: U, scale: ae } = s, { swidth: de, height: fe } = a.value;
      return y.value ? Math.max(0, (fe * ae - de) / 2) : Math.max(0, (U * ae - de) / 2);
    }), b = N(() => {
      const { displayWidth: U, scale: ae } = s, { swidth: de, height: fe } = a.value;
      return y.value ? Math.max(0, (U * ae - de) / 2) : Math.max(0, (fe * ae - de) / 2);
    }), k = (U) => new Promise((ae) => {
      const de = new FileReader();
      de.onloadend = (fe) => ae(fe.target.result), de.readAsDataURL(U);
    }), c = (U) => new Promise((ae) => {
      const de = new Image();
      de.onload = () => ae(de), de.src = U;
    }), $ = () => {
      const { img: U, width: ae, height: de, x: fe, y: be, swidth: Le } = a.value, { moveX: O, moveY: J, scale: se } = s, ie = i.value;
      if (!ie)
        return;
      const he = ie.getContext("2d");
      ie.width = s.displayWidth, ie.height = s.displayHeight, he.clearRect(0, 0, ie.width, ie.height), he.fillStyle = "#666", he.fillRect(0, 0, ie.width, ie.height), he.fillStyle = "#000", he.fillRect(e.space * p, (ie.height - Le) / 2, Le, Le), he.translate(ie.width / 2 + O, ie.height / 2 + J), he.rotate(Math.PI / 180 * s.angle), he.scale(se, se), he.drawImage(U, fe, be, ae, de);
    }, h = (U) => {
      const ae = Oe(l.value), { width: de, height: fe } = ae, be = s.displayWidth = de * p, Le = s.displayHeight = fe * p;
      let O = G({}, o);
      const { width: J, height: se } = U;
      O.img = U;
      const ie = se > J, he = ie ? J / se : se / J;
      O.width = be, O.height = ie ? be / he : be * he, O.x = -O.width / 2, O.y = -O.height / 2, O.swidth = be - e.space * 2 * p, O.sheight = ie ? O.swidth / he : O.swidth * he, O.sx = e.space * p, O.sy = (Le - O.swidth) / 2, a.value = O, s.defScale = O.swidth / (ie ? O.width : O.height), I();
    }, w = (U) => Ue(this, null, function* () {
      s.visible = !0;
      const ae = U.target;
      let { files: de } = ae;
      if (!(de != null && de.length))
        return;
      const fe = yield k(de[0]), be = yield c(fe);
      h(be), $();
    }), I = () => {
      T(s.defScale), s.moveX = 0, s.moveY = 0, s.angle = 0;
    }, T = (U) => {
      U = Pe(U, 0.3, +e.maxZoom + 1), U !== s.scale && (s.scale = U);
    }, Y = (U) => Math.sqrt(at(U[0].clientX - U[1].clientX, 2) + at(U[0].clientY - U[1].clientY, 2));
    let M, A, S, E, V;
    const X = (U) => {
      const { touches: ae } = U, { offsetX: de } = f;
      f.start(U), V = ae.length, M = s.moveX, A = s.moveY, s.moving = V === 1, s.zooming = V === 2 && !de.value, s.zooming && (S = s.scale, E = Y(U.touches));
    }, Z = (U) => {
      const { touches: ae } = U;
      if (f.move(U), (s.moving || s.zooming) && lt(U, !0), s.moving) {
        const { deltaX: de, deltaY: fe } = f, be = de.value * s.scale + M, Le = fe.value * s.scale + A;
        s.moveX = Pe(be, -v.value, v.value), s.moveY = Pe(Le, -b.value, b.value);
      }
      if (s.zooming && ae.length === 2) {
        const de = Y(ae), fe = S * de / E;
        T(fe);
      }
    }, F = (U) => {
      let ae = !1;
      (s.moving || s.zooming) && (ae = !(s.moving && M === s.moveX && A === s.moveY), U.touches.length || (s.zooming && (s.moveX = Pe(s.moveX, -v.value, v.value), s.moveY = Pe(s.moveY, -b.value, b.value), s.zooming = !1), s.moving = !1, M = 0, A = 0, S = s.defScale, s.scale < s.defScale && I(), s.scale > e.maxZoom && (s.scale = +e.maxZoom))), lt(U, ae), f.reset();
    }, oe = () => {
      s.angle = 0;
    }, q = () => {
      if (s.angle === 270) {
        s.angle = 0;
        return;
      }
      s.angle += 90;
    }, H = (U = !0) => {
      s.visible = !1, I(), r.value.value = "", U && t("cancel");
    }, ne = () => {
      const U = i.value, { sx: ae, sy: de, swidth: fe } = a.value, be = fe, Le = fe, O = document.createElement("canvas"), J = O.getContext("2d");
      O.width = be, O.height = Le, U && J.drawImage(U, ae, de, be, Le, 0, 0, be, Le);
      const se = O.toDataURL("image/png");
      t("confirm", se), H(!1);
    };
    return Q(
      () => s.scale,
      () => {
        $();
      }
    ), Q(
      () => s.angle,
      () => {
        Math.abs(s.moveX) > v.value && (s.moveX = v.value), Math.abs(s.moveY) > b.value && (s.moveY = b.value), $();
      }
    ), Q(
      () => s.moveX,
      () => {
        $();
      }
    ), Q(
      () => s.moveY,
      () => {
        $();
      }
    ), n({
      cancel: H,
      reset: oe,
      rotate: q,
      confirm: ne
    }), ce(G({}, me(s)), {
      cropperPopupRef: l,
      canvasRef: i,
      inputImageRef: r,
      highlightStyle: g,
      inputImageChange: w,
      reset: oe,
      rotate: q,
      cancel: H,
      confirm: ne,
      onTouchStart: X,
      onTouchMove: Z,
      onTouchEnd: F
    });
  }
}), G5 = ["data-edit-text"], Z5 = {
  ref: "cropperPopupRef",
  class: "nut-cropper-popup"
}, J5 = {
  ref: "canvasRef",
  class: "nut-cropper-popup__canvas"
}, Q5 = {
  key: 1,
  class: "flex-sb"
};
function x5(e, t, n, s, o, a) {
  const l = j("nut-button"), i = j("Refresh2"), r = j("Retweet");
  return u(), d(ee, null, [
    m("div", {
      class: "nut-avatar-cropper",
      "data-edit-text": e.editText
    }, [
      D(e.$slots, "default"),
      m("input", {
        ref: "inputImageRef",
        type: "file",
        accept: "image/*",
        class: "nut-avatar-cropper__input",
        onChange: t[0] || (t[0] = (...p) => e.inputImageChange && e.inputImageChange(...p))
      }, null, 544)
    ], 8, G5),
    Ce(m("div", Z5, [
      m("canvas", J5, null, 512),
      m("div", {
        class: "nut-cropper-popup__highlight",
        onTouchstart: t[1] || (t[1] = (...p) => e.onTouchStart && e.onTouchStart(...p)),
        onTouchmove: t[2] || (t[2] = (...p) => e.onTouchMove && e.onTouchMove(...p)),
        onTouchend: t[3] || (t[3] = (...p) => e.onTouchEnd && e.onTouchEnd(...p)),
        onTouchcancel: t[4] || (t[4] = (...p) => e.onTouchEnd && e.onTouchEnd(...p))
      }, [
        m("div", {
          class: _(["highlight", { highlight__round: e.shape === "round" }]),
          style: L(e.highlightStyle)
        }, null, 6)
      ], 32),
      m("div", {
        class: _(["nut-cropper-popup__toolbar", [e.toolbarPosition]])
      }, [
        e.$slots.toolbar ? D(e.$slots, "toolbar", { key: 0 }) : (u(), d("div", Q5, [
          m("div", {
            class: "nut-cropper-popup__toolbar-item",
            onClick: t[5] || (t[5] = (p) => e.cancel())
          }, [
            le(l, { type: "danger" }, {
              default: te(() => [
                ge(B(e.cancelText), 1)
              ]),
              _: 1
            })
          ]),
          m("div", {
            class: "nut-cropper-popup__toolbar-item",
            onClick: t[6] || (t[6] = (...p) => e.reset && e.reset(...p))
          }, [
            le(i, { color: "#fff" })
          ]),
          m("div", {
            class: "nut-cropper-popup__toolbar-item",
            onClick: t[7] || (t[7] = (...p) => e.rotate && e.rotate(...p))
          }, [
            le(r, { color: "#fff" })
          ]),
          m("div", {
            class: "nut-cropper-popup__toolbar-item",
            onClick: t[8] || (t[8] = (...p) => e.confirm && e.confirm(...p))
          }, [
            le(l, { type: "success" }, {
              default: te(() => [
                ge(B(e.confirmText), 1)
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
const e4 = /* @__PURE__ */ K(q5, [["render", x5]]);
function t4(e) {
  [Ke, Wn, Yn, vt, Ee, ur, yr, $r, Sr, Dr, qn, Vr, Kr, Jr, xr, iu, vu, Nu, Eu, zu, Gu, xn, gc, eo, to, zc, Yc, Gc, nd, no, Sd, Od, rf, cf, pf, Ef, Qt, Jf, ro, uo, co, lo, ao, vp, Tp, Jp, h1, mo, ho, yo, M1, Y1, q1, Q1, xt, vm, Cm, Bt, Pm, Mt, Qm, lh, en, dh, gh, fo, Nh, zh, Kh, tn, cg, Cg, nn, on, ln, sn, n0, c0, Qn, To, No, D0, E0, K0, iy, fy, $y, Cy, _y, Fy, fv, yv, Tv, Vv, Wv, Zv, z2, G2, i3, B3, O3, n5, H5, U5, e4].forEach((n) => {
    n.install ? e.use(n) : n.name && e.component(n.name, n);
  });
}
const n4 = "4.2.8", r4 = { install: t4, version: n4 };
export {
  Y1 as ActionSheet,
  fv as Address,
  B3 as AddressList,
  fy as Animate,
  Qm as Audio,
  lh as AudioOperate,
  en as Avatar,
  e4 as AvatarCropper,
  dh as AvatarGroup,
  q1 as Backtop,
  Qn as Badge,
  yv as Barrage,
  Ke as Button,
  rf as Calendar,
  lo as CalendarItem,
  G2 as Card,
  Od as Cascader,
  O3 as Category,
  n5 as CategoryPane,
  Wn as Cell,
  Yn as CellGroup,
  cf as Checkbox,
  pf as CheckboxGroup,
  Nh as CircleProgress,
  Sr as Col,
  E0 as Collapse,
  K0 as CollapseItem,
  H5 as Comment,
  ur as ConfigProvider,
  c0 as Countdown,
  n0 as Countup,
  Ef as DatePicker,
  xt as Dialog,
  Vr as Divider,
  Q1 as Drag,
  i3 as Ecard,
  xn as Elevator,
  $y as Ellipsis,
  Kh as Empty,
  vu as FixedNav,
  mo as Form,
  ho as FormItem,
  Kr as Grid,
  Jr as GridItem,
  yr as Image,
  sn as ImagePreview,
  zc as Indicator,
  vm as InfiniteLoading,
  Jf as Input,
  Qt as InputNumber,
  U5 as Invoice,
  $r as Layout,
  gh as List,
  Ln as Locale,
  Nu as Menu,
  Eu as MenuItem,
  iu as Navbar,
  zh as Noticebar,
  Bt as Notify,
  h1 as NumberKeyboard,
  vt as Overlay,
  gc as Pagination,
  ao as Picker,
  No as Popover,
  Ee as Popup,
  ln as Price,
  fo as Progress,
  Cm as PullRefresh,
  ro as Radio,
  uo as RadioGroup,
  no as Range,
  co as Rate,
  Dr as Row,
  Sd as Searchbar,
  vp as ShortPassword,
  Yc as SideNavbar,
  Gc as SideNavbarItem,
  Tv as Signature,
  D0 as Skeleton,
  z2 as Sku,
  xr as Space,
  Cg as Step,
  cg as Steps,
  qn as Sticky,
  nd as SubSideNavbar,
  yo as Swipe,
  M1 as SwipeGroup,
  nn as Swiper,
  on as SwiperItem,
  Pm as Switch,
  to as TabPane,
  zu as Tabbar,
  Gu as TabbarItem,
  iy as Table,
  eo as Tabs,
  To as Tag,
  Tp as Textarea,
  Zv as TimeDetail,
  Wv as TimePannel,
  Vv as TimeSelect,
  Mt as Toast,
  Fy as Tour,
  _y as TrendArrow,
  Jp as Uploader,
  tn as Video,
  Cy as Watermark,
  r4 as default,
  t4 as install,
  im as showDialog,
  Gg as showImagePreview,
  i4 as showNotify,
  bo as showToast,
  n4 as version
};
