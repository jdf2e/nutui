var Mo = Object.defineProperty, Eo = Object.defineProperties;
var Lo = Object.getOwnPropertyDescriptors;
var bt = Object.getOwnPropertySymbols;
var an = Object.prototype.hasOwnProperty, rn = Object.prototype.propertyIsEnumerable;
var it = Math.pow, Lt = (e, t, n) => t in e ? Mo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, G = (e, t) => {
  for (var n in t || (t = {}))
    an.call(t, n) && Lt(e, n, t[n]);
  if (bt)
    for (var n of bt(t))
      rn.call(t, n) && Lt(e, n, t[n]);
  return e;
}, ce = (e, t) => Eo(e, Lo(t));
var kt = (e) => typeof e == "symbol" ? e : e + "", Pt = (e, t) => {
  var n = {};
  for (var a in e)
    an.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
  if (e != null && bt)
    for (var a of bt(e))
      t.indexOf(a) < 0 && rn.call(e, a) && (n[a] = e[a]);
  return n;
};
var z = (e, t, n) => (Lt(e, typeof t != "symbol" ? t + "" : t, n), n);
var Ue = (e, t, n) => new Promise((a, o) => {
  var s = (r) => {
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
  }, i = (r) => r.done ? a(r.value) : Promise.resolve(r.value).then(s, l);
  i((n = n.apply(e, t)).next());
});
import { reactive as ue, ref as P, defineComponent as st, useSlots as Je, h as we, openBlock as u, createBlock as x, computed as N, createElementBlock as d, normalizeClass as _, normalizeStyle as L, createElementVNode as m, createTextVNode as ge, toRefs as me, unref as et, createCommentVNode as C, renderSlot as D, provide as Me, inject as Be, getCurrentInstance as Fe, onUnmounted as je, createApp as Po, resolveComponent as j, Fragment as ee, toDisplayString as B, watchEffect as Ft, Transition as Wt, withCtx as te, withDirectives as Ce, withModifiers as Ne, vShow as De, watch as Q, Teleport as Ao, mergeProps as mt, createVNode as le, onMounted as ve, onBeforeUnmount as Yt, shallowReactive as zo, markRaw as un, isVNode as Vo, Comment as Oo, Text as Ho, nextTick as Te, renderList as re, normalizeProps as Ro, guardReactiveProps as Fo, resolveDynamicComponent as Ae, onActivated as gt, createSlots as ht, onBeforeMount as Dn, readonly as cn, onDeactivated as yt, render as jt, vModelText as In } from "vue";
class _n {
}
let Wo = class extends _n {
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
      monthTitle: (n, a) => `${n}年${a}月`,
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
class Yo extends _n {
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
      monthTitle: (n, a) => `${n}/${a}`,
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
  canceled: a
}) => {
  if (e) {
    const o = e.apply(null, t);
    Bn(o) ? o.then((s) => {
      s ? n(s) : a && a();
    }).catch(() => {
    }) : o ? n() : a && a();
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
}, Ut = Array.isArray, jo = (e) => e instanceof Date, It = (e) => typeof e == "function", Ko = (e) => typeof e == "string", ot = (e) => e !== null && typeof e == "object", Bn = (e) => ot(e) && It(e.then) && It(e.catch), Uo = document, dn = Uo.body, zt = (e, t) => {
  try {
    return t.split(".").reduce((n, a) => n[a], e);
  } catch (n) {
    return "";
  }
}, Xo = (e, t, n) => {
  let a = Object.assign({}, e), o = Object.assign({}, n);
  return Object.keys(t).length > 0 ? (Object.keys(a).forEach((s) => {
    if (Object.prototype.hasOwnProperty.call(o, s)) {
      const l = Dt(o[s]);
      l == "function" && (a[s] = o[s](t)), l == "string" && (a[s] = t[o[s]]);
    } else
      t[s] && (a[s] = t[s]);
  }), a) : e;
}, Mn = (e, t) => (Object.keys(t).forEach((n) => {
  let a = e[n], o = t[n];
  ot(a) && ot(o) ? Mn(a, o) : e[n] = o;
}), e);
function qo(e, t = 2) {
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
  "zh-CN": new Wo(),
  "en-US": new Yo()
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
const Go = /* @__PURE__ */ st({
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
    const n = e, a = "nut-icon", o = Je(), s = () => n.name ? n.name.indexOf("/") !== -1 : !1, l = (f) => {
      if (f)
        return isNaN(Number(f)) ? String(f) : f + "px";
    }, i = s();
    let r = we(
      i ? "img" : n.tag,
      {
        class: i ? `${a}__img` : `${n.fontClassName} ${a} ${n.classPrefix}-${n.name}`,
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
function Zo(e) {
  return e.name = "IconFont", e.install = (t) => {
    t.component("IconFont", e);
  }, e;
}
Zo(Go);
const R = (e) => st({
  props: {
    class: { type: String, default: "" },
    name: { type: String, default: e },
    color: { type: String, default: "" },
    width: { type: [String, Number], default: "" },
    height: { type: [String, Number], default: "" }
  },
  setup(t) {
    const n = (s) => {
      if (s)
        return isNaN(Number(s)) ? String(s) : s + "px";
    }, a = N(() => {
      const s = "nut-icon";
      return {
        [t.class]: t.class,
        [s]: !0,
        [s + "-" + t.name]: t.name
      };
    }), o = N(() => {
      const s = {};
      return s.height = n(t.height), s.width = n(t.width), s.color = t.color, s;
    });
    return { classes: a, style: o };
  }
}), ye = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, o] of t)
    n[a] = o;
  return n;
};
R("add");
R("addfollow");
R("arrow-down");
const Jo = R("arrow-down2"), Qo = /* @__PURE__ */ m("path", {
  d: "M1741.19 227.497a121.654 121.654 0 1 1 127.858 206.812L1292.65 790.27a182.482 182.482 0 0 1-191.727 0L524.646 434.31a121.654 121.654 0 1 1 127.859-206.812l544.403 335.887c181.387-111.8 362.773-223.965 544.282-335.887",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), xo = [
  Qo
];
function el(e, t, n, a, o, s) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 2472 1024",
    role: "presentation"
  }, xo, 6);
}
const tl = /* @__PURE__ */ ye(Jo, [["render", el]]);
R("arrow-right");
R("arrow-right2");
R("arrow-up");
const nl = R("arrow-up2"), ol = /* @__PURE__ */ m("path", {
  d: "M623.406 815.479A129.722 129.722 0 1 1 487.068 594.95C691.9 468.083 896.73 341.993 1101.691 215.125a194.583 194.583 0 0 1 204.442 0l614.494 379.567a129.722 129.722 0 1 1-136.338 220.657l-580.506-358.292-580.377 358.422",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ll = [
  ol
];
function sl(e, t, n, a, o, s) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 2472 1024",
    role: "presentation"
  }, ll, 6);
}
const al = /* @__PURE__ */ ye(nl, [["render", sl]]);
R("ask");
R("ask2");
R("cart");
R("cart2");
R("category");
const il = R("check-checked"), rl = /* @__PURE__ */ m("path", {
  d: "M510.613 2.837C229.793 2.837.032 232.598.032 513.418S229.793 1024 510.613 1024s510.582-229.762 510.582-510.582S794.27 2.837 510.613 2.837zm0 794.238c-156.01 0-283.656-127.646-283.656-283.657s127.645-283.656 283.656-283.656S794.27 357.407 794.27 513.418 666.624 797.075 510.613 797.075z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ul = /* @__PURE__ */ m("path", {
  d: "M382.968 513.418a127.645 127.645 0 1 0 255.29 0 127.645 127.645 0 1 0-255.29 0Z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1);
function cl(e, t, n, a, o, s) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1032 1024",
    role: "presentation"
  }, [
    rl,
    ge(","),
    ul
  ], 6);
}
const fn = /* @__PURE__ */ ye(il, [["render", cl]]), dl = R("check-disabled"), fl = /* @__PURE__ */ m("path", {
  d: "M506.467 0C227.962 0 .094 227.868.094 506.374s227.868 506.373 506.373 506.373 506.374-227.868 506.374-506.373S787.786 0 506.467 0zm202.55 571.077H306.73c-45.01 0-67.516-22.506-67.516-67.517 0-45.01 22.505-67.516 67.516-67.516h402.286c45.01 0 67.516 22.505 67.516 67.516 0 45.011-22.505 67.517-67.516 67.517z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), pl = [
  fl
];
function ml(e, t, n, a, o, s) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, pl, 6);
}
const hl = /* @__PURE__ */ ye(dl, [["render", ml]]), gl = R("check-normal"), yl = /* @__PURE__ */ m("path", {
  d: "M512 1024c-136.533 0-264.533-54.044-361.244-150.756C54.044 776.534 0 648.534 0 512c0-136.533 54.044-264.533 150.756-361.244C247.466 54.044 375.466 0 512 0c136.533 0 264.533 54.044 361.244 150.756C969.956 247.466 1024 375.466 1024 512s-54.044 264.533-150.756 361.244C776.534 969.956 648.534 1024 512 1024zm0-938.667c-113.778 0-221.867 45.511-301.511 125.156S85.333 398.222 85.333 512s45.511 221.867 125.156 301.511S398.222 938.667 512 938.667s221.867-45.511 301.511-125.156S938.667 625.778 938.667 512 893.156 290.133 813.51 210.489 625.778 85.333 512 85.333z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), vl = [
  yl
];
function $l(e, t, n, a, o, s) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, vl, 6);
}
const Vt = /* @__PURE__ */ ye(gl, [["render", $l]]), bl = R("Check"), kl = /* @__PURE__ */ m("path", {
  d: "M998.4 245.029c-219.429 153.6-398.629 332.8-552.229 552.228-40.228 58.514-128 54.857-164.571-3.657-69.486-106.057-149.943-186.514-256-256-51.2-32.914-18.286-113.371 40.229-98.743C182.857 460.8 274.286 508.343 358.4 585.143c157.257-190.172 358.4-340.114 588.8-435.2 62.171-25.6 106.057 58.514 51.2 95.086",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), wl = [
  kl
];
function Sl(e, t, n, a, o, s) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, wl, 6);
}
const Pn = /* @__PURE__ */ ye(bl, [["render", Sl]]), Cl = R("checked"), Tl = /* @__PURE__ */ m("path", {
  d: "M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0zm281.6 369.778C779.378 381.156 600.178 500.622 472.178 691.2c0 0 0 2.844-2.845 2.844-8.533 5.69-48.355 36.978-88.177-8.533-39.823-51.2-62.578-99.555-142.223-142.222-2.844 0-2.844-2.845-2.844-2.845-8.533-11.377-39.822-56.888 19.911-56.888 45.511 0 91.022 11.377 162.133 73.955 5.69 5.689 14.223 5.689 17.067 0C469.333 517.69 608.711 366.933 768 318.578c0 0 19.911-2.845 31.289 14.222 5.689 11.378 11.378 22.756-5.689 36.978z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Nl = [
  Tl
];
function Dl(e, t, n, a, o, s) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Nl, 6);
}
const An = /* @__PURE__ */ ye(Cl, [["render", Dl]]), Il = R("checklist"), _l = /* @__PURE__ */ m("path", {
  d: "M159.289 500.622c62.578 0 125.155 17.067 221.867 102.4 8.533 5.69 19.91 5.69 25.6 0 48.355-54.044 238.933-261.689 455.11-329.955 0 0 28.445-5.69 42.667 19.91 8.534 17.067 19.911 34.134-5.689 54.045-22.755 17.067-264.533 179.2-440.888 440.89l-2.845 2.844c-11.378 8.533-68.267 51.2-119.467-14.223-56.888-71.11-85.333-139.377-196.266-196.266-2.845 0-2.845-2.845-5.69-5.69-11.377-11.377-54.044-73.955 25.6-73.955z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Bl = [
  _l
];
function Ml(e, t, n, a, o, s) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Bl, 6);
}
const El = /* @__PURE__ */ ye(Il, [["render", Ml]]), Ll = R("circle-close"), Pl = /* @__PURE__ */ m("path", {
  d: "M511.492 73.063a438.425 438.425 0 0 1 310.545 748.953 439.16 439.16 0 1 1-621.09-621.073A435.695 435.695 0 0 1 511.492 73.046m0-73.063C267.49.018 57.468 172.408 9.87 411.717-37.713 651.042 90.39 890.658 315.823 984.03c225.45 93.355 485.444 14.472 621.005-188.416 135.543-202.906 108.885-473.293-63.659-645.82A509.645 509.645 0 0 0 511.492.002zm-175.7 635.495 299.673-299.674c12.049-12.049 24.115-12.049 36.164 0l15.496 15.497c12.05 12.066 12.05 24.115 0 36.18L387.47 687.122c-12.066 12.05-24.115 12.05-36.181 0l-15.497-15.496c-12.049-12.066-12.049-24.115 0-36.182zm0-284.177 15.496-15.497c12.066-12.049 24.115-12.049 36.18 0l299.64 299.674c12.05 12.049 12.05 24.098 0 36.164l-15.496 15.496c-12.05 12.05-24.115 12.05-36.182 0L335.808 387.465c-12.049-12.05-12.049-24.098 0-36.164z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Al = [
  Pl
];
function zl(e, t, n, a, o, s) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Al, 6);
}
const Xt = /* @__PURE__ */ ye(Ll, [["render", zl]]);
R("clock");
R("close-little");
const Vl = R("close"), Ol = /* @__PURE__ */ m("path", {
  d: "M981.577 1024c-11.703 0-23.406-2.926-32.183-11.703L13.166 76.07c-14.629-17.555-14.629-46.812 0-64.366 17.554-14.629 46.811-14.629 64.365 0L1013.76 947.93c17.554 17.555 17.554 43.886 0 61.44-8.777 11.703-20.48 14.629-32.183 14.629zm-936.228 0c-11.703 0-23.406-2.926-32.183-11.703-17.555-17.554-17.555-43.886 0-61.44L949.394 14.63c17.555-17.555 43.886-17.555 61.44 0 17.555 17.554 17.555 43.885 0 61.44L74.606 1012.297C68.754 1021.074 57.05 1024 45.349 1024z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Hl = [
  Ol
];
function Rl(e, t, n, a, o, s) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1026 1024",
    role: "presentation"
  }, Hl, 6);
}
const _t = /* @__PURE__ */ ye(Vl, [["render", Rl]]), Fl = R("comment"), Wl = /* @__PURE__ */ m("path", {
  d: "M760.415 876.089H259.793c-132.741 0-242.726-109.985-242.726-242.726V242.726C17.067 109.986 127.052 0 259.793 0h504.414c132.741 0 242.726 109.985 242.726 242.726v394.43c-3.792 132.74-109.985 238.933-246.518 238.933zM259.793 113.778c-72.06 0-128.949 56.889-128.949 128.948v394.43c0 72.059 56.89 128.948 128.949 128.948h504.414c68.267 0 128.949-56.89 128.949-128.948v-394.43c0-72.06-56.89-128.948-128.949-128.948H259.793zm56.888 887.466c-15.17 0-30.34-3.792-41.718-15.17-22.756-22.755-22.756-56.889 0-79.644l109.985-109.986c22.756-22.755 56.889-22.755 79.645 0s22.755 56.89 0 79.645L354.607 986.074c-7.585 7.585-22.755 15.17-37.926 15.17zm193.423-398.222c-45.511 0-91.023-22.755-117.57-56.889-18.964-26.548-15.171-60.681 7.585-79.644 26.548-18.963 60.681-15.17 79.644 7.585 15.17 18.963 45.511 18.963 56.889 0 18.963-22.755 56.889-30.34 79.644-7.585s30.341 56.889 7.585 79.644c-22.755 37.926-68.266 56.89-113.777 56.89z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Yl = [
  Wl
];
function jl(e, t, n, a, o, s) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Yl, 6);
}
const Kl = /* @__PURE__ */ ye(Fl, [["render", jl]]);
R("date");
const Ul = R("del"), Xl = /* @__PURE__ */ m("path", {
  d: "M668.444 1024H355.556c-142.223 0-256-113.778-256-256V170.667h824.888V768c0 142.222-113.777 256-256 256zM184.89 256v512c0 93.867 76.8 170.667 170.667 170.667h312.888c93.867 0 170.667-76.8 170.667-170.667V256H184.89zm753.778 0H85.333c-22.755 0-42.666-19.911-42.666-42.667s19.91-42.666 42.666-42.666h853.334c22.755 0 42.666 19.91 42.666 42.666S961.423 256 938.667 256zM625.777 85.333H398.223c-22.755 0-42.666-19.91-42.666-42.666S375.466 0 398.222 0h227.556c22.755 0 42.666 19.911 42.666 42.667s-19.91 42.666-42.666 42.666z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ql = [
  Xl
];
function Gl(e, t, n, a, o, s) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ql, 6);
}
const zn = /* @__PURE__ */ ye(Ul, [["render", Gl]]);
R("del2");
R("dongdong");
R("dou-arrow-up");
const Zl = R("down-arrow"), Jl = /* @__PURE__ */ m("path", {
  d: "M128 349.867C93.867 332.8 34.133 341.333 8.533 384-8.533 418.133 0 477.867 42.667 503.467 179.2 588.8 315.733 665.6 443.733 750.933c42.667 25.6 93.867 25.6 136.534 0C716.8 665.6 853.333 588.8 981.333 503.467c42.667-25.6 51.2-76.8 25.6-119.467s-76.8-51.2-119.466-25.6C768 435.2 640 512 512 588.8 384 512 256 435.2 128 349.867",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ql = [
  Jl
];
function xl(e, t, n, a, o, s) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ql, 6);
}
const Vn = /* @__PURE__ */ ye(Zl, [["render", xl]]);
R("download");
R("dshop");
const es = R("edit"), ts = /* @__PURE__ */ m("path", {
  d: "M285.479 992.97H108.606c-27.927 0-55.854-12.412-77.576-31.03C9.31 940.217 0 915.393 0 884.363l3.103-155.152c0-24.824 9.31-46.545 27.927-65.164L626.812 65.164c83.782-83.782 220.315-83.782 307.2 0 83.782 83.781 83.782 223.418 0 307.2l-605.09 601.988c-12.413 12.412-27.928 18.618-43.443 18.618zM781.964 93.09c-31.03 0-65.164 12.413-89.988 37.237L96.194 729.212 93.09 884.364c0 9.309 6.206 15.515 15.515 15.515h161.358l598.884-595.782c49.649-49.649 49.649-127.224 0-173.77l-3.103-3.103c-21.72-21.721-52.751-34.133-83.781-34.133zm-201.946 78.508 65.816-65.847L882.812 342.73l-65.846 65.784zM946.424 992.97H217.212c-24.824 0-46.545-21.722-46.545-46.546s21.72-46.545 46.545-46.545h729.212c24.824 0 46.546 21.721 46.546 46.545s-21.722 46.546-46.546 46.546z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ns = [
  ts
];
function os(e, t, n, a, o, s) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ns, 6);
}
const ls = /* @__PURE__ */ ye(es, [["render", os]]);
R("eye");
const ss = R("fabulous"), as = /* @__PURE__ */ m("path", {
  d: "M584.06 1024H318.577C144.118 1024 0 883.674 0 705.422s140.326-318.578 318.578-318.578v113.778c-113.778 0-204.8 91.022-204.8 204.8s91.022 204.8 204.8 204.8h265.481V1024zm56.888 0h-53.096c-208.593 0-379.26-170.667-379.26-383.052 0-83.437 26.549-163.081 75.852-231.348l3.793-3.793c15.17-22.755 30.34-60.681 45.511-121.363l7.585-34.133c7.586-18.963 15.17-41.718 18.963-68.267C386.844 22.756 470.281 0 519.586 0c117.57 0 178.251 106.193 178.251 212.385v7.585c0 7.586-3.793 18.963-3.793 37.926C876.09 257.896 1024 405.807 1024 587.852v53.096C1024 853.333 853.333 1024 640.948 1024zM519.585 113.778c-30.34 0-41.718 53.096-49.304 87.23-3.792 34.133-11.377 60.68-15.17 83.436l-7.585 34.134c-11.378 45.51-34.133 113.778-60.682 155.496l-7.585 3.793A269.274 269.274 0 0 0 322.37 644.74c0 147.91 121.363 269.274 269.274 269.274h53.097c147.91 0 269.274-121.363 269.274-269.274v-53.097c0-117.57-98.608-216.177-216.178-216.177h-56.889c-18.963-3.793-37.926-15.17-49.304-30.341-11.377-15.17-15.17-37.926-15.17-56.889 7.585-41.718 11.378-64.474 11.378-75.852v-3.792c-3.793 0-3.793-94.815-68.267-94.815z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), is = [
  as
];
function rs(e, t, n, a, o, s) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1061 1024",
    role: "presentation"
  }, is, 6);
}
const us = /* @__PURE__ */ ye(ss, [["render", rs]]), cs = R("failure"), ds = /* @__PURE__ */ m("path", {
  d: "M512 1024C229.831 1024 0 794.169 0 512S229.831 0 512 0s512 229.831 512 512-229.831 512-512 512zm0-955.733C266.24 68.267 68.267 266.24 68.267 512S266.24 955.733 512 955.733 955.733 757.76 955.733 512 757.76 68.267 512 68.267zm111.502 282.169c13.654-13.654 34.134-13.654 47.787 0 11.378 11.377 13.653 31.857 2.275 45.51l-2.275 2.276-111.502 111.502 111.502 111.503c13.653 13.653 13.653 34.133 0 47.786-13.653 13.654-34.133 13.654-47.787 0L512 557.511 400.498 669.013c-11.378 11.378-31.858 13.654-45.511 2.276l-2.276-2.276c-11.378-11.377-13.653-31.857-2.275-45.51l2.275-2.276 111.502-111.503-111.502-111.502c-13.653-13.653-13.653-34.133 0-47.786s34.133-13.654 47.787 0L512 461.938l111.502-111.502z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), fs = [
  ds
];
function ps(e, t, n, a, o, s) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, fs, 6);
}
const On = /* @__PURE__ */ ye(cs, [["render", ps]]);
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
const ms = R("image-error"), hs = /* @__PURE__ */ m("path", {
  d: "M696.43 465.25c40.61 0 73.53-32.72 73.53-73.09s-32.96-73.08-73.53-73.08-73.54 32.72-73.54 73.08 32.92 73.09 73.54 73.09zM535.74 650.62l-273.61-259.4a56.19 56.19 0 0 0-15.36 11.58l-114 119.63-6-222.77c-.73-26.82 20.84-49.41 47.67-50.14l201.77-5.44 47.34-50-250.43 6.75C119 202.33 76.33 247.17 77.78 301l7.32 271.4 4.5 166.78C91.06 793 136.05 835.47 190.2 834l176-4.75 12-.32 47.34-50 116.18-122.64z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), gs = /* @__PURE__ */ m("path", {
  d: "m861.71 214.8-242.83-33.86-55.09 41.46L855 263a49.05 49.05 0 0 1 41.79 55.13l-54.33 389.59-120.87-159.05A59.86 59.86 0 0 0 638.06 537l-44 33.08 65.07 86.15L603.84 698l-79.57 60.1-54.92 41.48 34.17 4.76 270.73 37.76a97.55 97.55 0 0 0 109.88-79.6 22.37 22.37 0 0 0 .65-3.44l60.53-434.16c7.44-53.32-29.95-102.62-83.6-110.1z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1);
function ys(e, t, n, a, o, s) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, [
    hs,
    ge(","),
    gs
  ], 6);
}
const vs = /* @__PURE__ */ ye(ms, [["render", ys]]), $s = R("image"), bs = /* @__PURE__ */ m("path", {
  d: "M853.161 892.55H362.595l-209.433-.414a18.5 18.5 0 0 1-1.813-.092c-24.849-2.485-47.825-14.06-64.696-32.595-16.991-18.665-26.35-42.855-26.35-68.112V264.626c0-55.808 45.404-101.211 101.212-101.211H853.16c55.808 0 101.21 45.403 101.21 101.211v225.513c0 .275-.006.552-.018.826-.022.494-1.972 51.723 15.481 85.462 4.717 9.119 1.148 20.335-7.97 25.053-9.117 4.714-20.335 1.15-25.053-7.97-21.3-41.177-19.845-97.643-19.619-103.74V264.627c0-35.307-28.724-64.031-64.03-64.031H161.515c-35.308 0-64.032 28.724-64.032 64.031v526.711c0 32.755 24.321 59.958 56.718 63.62l208.431.412h490.53c35.306 0 64.03-28.725 64.03-64.032l-.382-93.677c-.105-1.75-1.587-19.548-19.55-42.5a9.548 9.548 0 0 1-.147-.19l-21.712-28.489-117.227-155.119c-.416-.55-38.995-50.852-86.272-45.534-38.335 4.315-75.955 45.164-108.79 118.132-17.615 39.141-34.65 68.269-52.082 89.046-17.607 20.986-35.68 33.52-55.251 38.317-43.423 10.638-81.05-18.995-120.887-50.373l-5.057-3.98c-46.555-36.578-68.75-28.224-158.33 59.602-7.33 7.188-19.1 7.071-26.289-.26-7.187-7.33-7.07-19.1.26-26.287 46.659-45.746 77.544-72.727 107.086-84.283 33.358-13.048 64.275-6.267 100.242 21.994l5.093 4.008c33.923 26.72 63.22 49.795 89.029 43.467 25.618-6.279 53.3-42.114 82.28-106.509 39.14-86.976 85.838-134.027 138.797-139.849 68.454-7.515 117.824 57.405 119.892 60.172l117.122 154.98 21.6 28.344c26.277 33.631 27.334 61.639 27.367 64.725l.001.128.384 94.06c.001 55.884-45.4 101.287-101.209 101.287z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ks = /* @__PURE__ */ m("path", {
  d: "M312.328 446.968c-42.325 0-76.759-34.434-76.759-76.76s34.434-76.759 76.76-76.759 76.759 34.435 76.759 76.76-34.434 76.759-76.76 76.759zm0-116.34c-21.824 0-39.579 17.756-39.579 39.58s17.755 39.58 39.58 39.58 39.579-17.756 39.579-39.58-17.755-39.58-39.58-39.58z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1);
function ws(e, t, n, a, o, s) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, [
    bs,
    ge(","),
    ks
  ], 6);
}
const Ss = /* @__PURE__ */ ye($s, [["render", ws]]);
R("issue");
R("JD");
R("jdl");
R("JIMI40");
const Cs = R("joy-smile"), Ts = /* @__PURE__ */ m("path", {
  d: "M2185.74 479.429a117.992 117.992 0 1 0-162.829-170.852c-284.772 271.204-732.314 271.204-1017.087 0A118.05 118.05 0 0 0 842.996 479.43c375.98 358.045 966.705 358.045 1342.744 0",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ns = [
  Ts
];
function Ds(e, t, n, a, o, s) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 3072 1024",
    role: "presentation"
  }, Ns, 6);
}
const Is = /* @__PURE__ */ ye(Cs, [["render", Ds]]), _s = R("left"), Bs = /* @__PURE__ */ m("path", {
  d: "M642.973 1005.542 321.912 587.098a123.278 123.278 0 0 1 0-150.17l321.06-418.443a47.182 47.182 0 0 1 74.83 57.422l-321.088 418.47a28.994 28.994 0 0 0 0 35.3l321.088 418.47a47.155 47.155 0 0 1-74.83 57.395",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ms = [
  Bs
];
function Es(e, t, n, a, o, s) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ms, 6);
}
const qt = /* @__PURE__ */ ye(_s, [["render", Es]]), Ls = R("link"), Ps = /* @__PURE__ */ m("path", {
  d: "M313.034 1004.045c-66.848 0-124.402-24.156-170.798-70.577l-40.854-40.829C54.96 846.218 28.966 783.097 30.83 714.411c3.702-66.85 31.56-131.808 79.819-180.12l137.4-137.373c14.86-14.861 40.855-14.861 55.69 0 14.86 14.861 16.725 38.99 0 55.69l-137.348 137.4a187.47 187.47 0 0 0-55.69 126.24c-1.864 46.422 14.835 89.115 46.396 120.675l40.855 40.855c31.56 31.56 74.253 48.286 120.674 46.421 46.421-1.838 92.843-22.291 126.24-55.69l137.4-137.4c14.862-14.86 40.856-14.86 55.69 0 14.862 14.862 14.862 40.856 0 55.69l-137.4 137.427c-48.285 48.259-113.27 76.117-180.118 79.82a5.645 5.645 0 0 0-7.405 0zm475.294-382.477c-11.133 0-18.563-3.702-27.832-12.997-14.86-14.861-14.86-40.855 0-55.69l115.082-115.108a187.47 187.47 0 0 0 55.716-126.267c1.838-46.395-14.861-89.114-46.421-120.674l-40.855-40.855c-64.985-64.959-176.364-61.257-246.915 9.294L478.266 278.108c-14.835 14.835-40.829 14.835-55.69 0-14.86-14.861-14.86-40.855 0-55.716l118.81-118.81C643.524 1.444 803.163-2.232 899.734 94.287l40.829 40.855c46.421 46.421 72.415 109.541 70.55 178.228-3.702 66.85-31.56 131.807-79.819 180.093L816.186 608.571c-7.43 7.43-18.563 11.133-27.858 12.997zm-332.327-1.864c-11.16 0-18.564-3.702-27.832-12.997-14.888-14.835-14.888-40.829 0-55.69l148.506-148.532c14.861-14.862 40.855-14.862 55.69 0 14.861 14.86 14.861 40.854 0 55.69L483.832 606.706c-7.404 7.43-18.563 11.159-27.831 12.997z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), As = [
  Ps
];
function zs(e, t, n, a, o, s) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, As, 6);
}
const Vs = /* @__PURE__ */ ye(Ls, [["render", zs]]), Os = R("loading"), Hs = /* @__PURE__ */ m("path", {
  d: "M784 902.4c9.6 19.2 6.4 41.6-12.8 54.4-19.2 9.6-41.6 3.2-51.2-12.8-9.6-19.2-6.4-41.6 12.8-54.4 16-12.8 38.4-8 51.2 12.8zM550.4 984c0 22.4-16 38.4-38.4 38.4s-38.4-16-38.4-38.4v-24c0-22.4 19.2-38.4 41.6-38.4 19.2 0 35.2 16 38.4 38.4v25.6h-3.2zm-240-43.2c-9.6 19.2-35.2 25.6-54.4 16-19.2-9.6-25.6-35.2-16-51.2l28.8-51.2c9.6-19.2 35.2-25.6 54.4-16s25.6 35.2 12.8 54.4l-25.6 48zM121.6 784c-19.2 9.6-41.6 3.2-54.4-16-9.6-19.2-6.4-41.6 12.8-54.4l76.8-44.8c19.2-9.6 41.6-3.2 54.4 16 9.6 19.2 3.2 41.6-16 54.4L121.6 784zM38.4 552C16 552 0 536 0 513.6s16-38.4 38.4-38.4H160c22.4 0 38.4 19.2 38.4 38.4 0 22.4-16 38.4-38.4 38.4H38.4zm44.8-241.6c-19.2-9.6-25.6-35.2-16-51.2 9.6-19.2 35.2-25.6 54.4-16L256 320c19.2 9.6 25.6 35.2 16 54.4s-35.2 25.6-54.4 16l-134.4-80zm160-185.6 92.8 160c9.6 19.2 35.2 25.6 54.4 12.8s25.6-35.2 12.8-54.4l-92.8-160C297.6 64 275.2 60.8 256 70.4c-16 12.8-22.4 33.6-12.8 54.4zM473.6 40c0-22.4 16-38.4 38.4-38.4s38.4 19.2 38.4 38.4v184c0 22.4-19.2 38.4-38.4 38.4-22.4 0-38.4-19.2-38.4-38.4V40zm240 43.2c9.6-19.2 35.2-25.6 54.4-16 19.2 9.6 25.6 35.2 16 51.2l-92.8 160c-9.6 19.2-35.2 25.6-54.4 16-19.2-9.6-25.6-35.2-12.8-54.4l89.6-156.8zm188.8 160-160 92.8c-19.2 9.6-25.6 35.2-16 54.4 12.8 19.2 35.2 25.6 54.4 12.8l160-92.8c19.2-9.6 25.6-35.2 12.8-54.4-9.6-16-32-25.6-51.2-12.8zM985.6 472c22.4 0 38.4 16 38.4 38.4s-16 38.4-38.4 38.4H800c-22.4 0-38.4-19.2-38.4-38.4 0-22.4 19.2-38.4 38.4-38.4h185.6z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Rs = [
  Hs
];
function Fs(e, t, n, a, o, s) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Rs, 6);
}
const xe = /* @__PURE__ */ ye(Os, [["render", Fs]]), Ws = R("loading1"), Ys = /* @__PURE__ */ m("path", {
  d: "M520.665 64.564a29.244 29.244 0 0 0-7.071-.894c-16.211 0-29.35 13.14-29.35 29.35 0 15.83 12.538 28.696 28.223 29.293v.073c.375 0 .751-.014 1.127-.014 216.493 0 389.629 173.942 389.629 390.433 0 216.496-173.136 388.827-389.63 388.827s-389.63-172.333-389.63-388.829c0-.27.01-.536.01-.804h-.01c0-16.209-13.141-29.35-29.35-29.35s-29.35 13.139-29.35 29.35c0 .055.007.11.007.164-.001.214-.007.425-.007.64 0 247.609 200.722 448.331 448.33 448.331 247.607 0 448.33-200.722 448.33-448.33-.002-245.242-196.917-444.456-441.258-448.24z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), js = [
  Ys
];
function Ks(e, t, n, a, o, s) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, js, 6);
}
const Us = /* @__PURE__ */ ye(Ws, [["render", Ks]]), Xs = R("location"), qs = /* @__PURE__ */ m("path", {
  d: "M512 971.487C259.938 971.487 52.513 764.062 52.513 512S259.938 52.513 512 52.513 971.487 259.938 971.487 512 764.062 971.487 512 971.487zm0-840.205c-210.051 0-380.718 170.667-380.718 380.718S301.95 892.718 512 892.718 892.718 722.05 892.718 512 722.05 131.282 512 131.282zm0 577.641c-107.651 0-196.923-89.272-196.923-196.923S404.349 315.077 512 315.077 708.923 404.349 708.923 512 619.651 708.923 512 708.923zm0-315.077c-65.641 0-118.154 52.513-118.154 118.154S446.36 630.154 512 630.154 630.154 577.64 630.154 512 577.64 393.846 512 393.846zm0-210.051c-21.005 0-39.385-18.38-39.385-39.385V39.385C472.615 18.379 490.995 0 512 0s39.385 18.38 39.385 39.385V144.41c0 21.005-18.38 39.385-39.385 39.385zM512 1024c-21.005 0-39.385-18.38-39.385-39.385V879.59c0-21.005 18.38-39.385 39.385-39.385s39.385 18.38 39.385 39.385v105.025c0 21.006-18.38 39.385-39.385 39.385zm472.615-472.615H879.59c-21.005 0-39.385-18.38-39.385-39.385s18.38-39.385 39.385-39.385h105.025c21.006 0 39.385 18.38 39.385 39.385s-18.38 39.385-39.385 39.385zm-840.205 0H39.385C18.379 551.385 0 533.005 0 512s18.38-39.385 39.385-39.385H144.41c21.005 0 39.385 18.38 39.385 39.385s-18.38 39.385-39.385 39.385z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Gs = [
  qs
];
function Zs(e, t, n, a, o, s) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Gs, 6);
}
const Js = /* @__PURE__ */ ye(Xs, [["render", Zs]]), Qs = R("location2"), xs = /* @__PURE__ */ m("path", {
  d: "m530.286 1005.714-25.6-10.971c-36.572-14.629-58.515-25.6-73.143-36.572-102.4-84.114-164.572-135.314-193.829-171.885-43.885-51.2-76.8-91.429-106.057-142.629C95.086 577.83 76.8 504.686 76.8 431.543c0-117.029 43.886-226.743 128-307.2C285.257 43.886 394.971 0 512 0s226.743 43.886 310.857 128c84.114 80.457 128 190.171 128 307.2 0 73.143-18.286 146.286-54.857 212.114-25.6 43.886-58.514 91.429-106.057 142.629-29.257 32.914-87.772 84.114-197.486 171.886 0 0-7.314 7.314-18.286 10.971l-43.885 32.914zM497.37 874.057s3.658 3.657 14.629 7.314c3.657-3.657 7.314-3.657 10.971-7.314C621.714 797.257 683.886 742.4 705.83 716.8c40.228-47.543 69.485-87.771 91.428-128 25.6-47.543 40.229-102.4 40.229-157.257 0-87.772-32.915-168.229-95.086-230.4-58.514-58.514-142.629-91.429-230.4-91.429S340.114 142.63 277.943 204.8c-62.172 62.171-95.086 142.629-95.086 230.4 0 54.857 14.629 109.714 40.229 157.257 25.6 43.886 54.857 80.457 95.085 124.343 25.6 29.257 84.115 80.457 179.2 157.257zm18.286-248.686c-102.4 0-182.857-80.457-182.857-182.857s80.457-182.857 182.857-182.857 182.857 80.457 182.857 182.857-80.457 182.857-182.857 182.857zm0-256c-40.228 0-73.143 32.915-73.143 73.143s32.915 73.143 73.143 73.143 73.143-32.914 73.143-73.143-32.914-73.143-73.143-73.143z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ea = [
  xs
];
function ta(e, t, n, a, o, s) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ea, 6);
}
const na = /* @__PURE__ */ ye(Qs, [["render", ta]]);
R("locationg3");
R("lower");
R("marshalling");
const oa = R("mask-close"), la = /* @__PURE__ */ m("path", {
  d: "M512 14.897C238.594 14.897 14.897 238.594 14.897 512S238.594 1009.103 512 1009.103 1009.103 785.406 1009.103 512 785.406 14.897 512 14.897zm207.126 646.234c16.57 16.57 16.57 41.425 0 57.995s-41.425 16.57-57.995 0L512 569.996l-149.13 149.13c-16.57 16.57-41.426 16.57-57.996 0s-16.57-41.425 0-57.995L454.004 512l-149.13-149.13c-16.57-16.57-16.57-41.426 0-57.996s41.425-16.57 57.995 0L512 454.004l149.13-149.13c16.57-16.57 41.426-16.57 57.996 0s16.57 41.425 0 57.995L569.996 512l149.13 149.13z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), sa = [
  la
];
function aa(e, t, n, a, o, s) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, sa, 6);
}
const ia = /* @__PURE__ */ ye(oa, [["render", aa]]);
R("message");
R("microphone");
const ra = R("minus"), ua = /* @__PURE__ */ m("path", {
  d: "M299.52 460.8h409.6c28.16 0 51.2 23.04 51.2 51.2s-23.04 51.2-51.2 51.2h-409.6c-28.16 0-51.2-23.04-51.2-51.2s23.04-51.2 51.2-51.2z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ca = [
  ua
];
function da(e, t, n, a, o, s) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ca, 6);
}
const fa = /* @__PURE__ */ ye(ra, [["render", da]]);
R("more-s");
const pa = R("more-x"), ma = /* @__PURE__ */ m("path", {
  d: "M937.115 428.218c-43.442 0-80.679 37.237-80.679 80.679s37.237 80.679 80.68 80.679c43.442 0 80.678-37.237 80.678-80.679s-34.133-80.679-80.679-80.679m-428.218-52.751c-74.473 0-133.43 58.957-133.43 133.43s58.957 133.43 133.43 133.43 133.43-58.957 133.43-133.43-58.957-133.43-133.43-133.43M83.782 428.218c-43.443 0-80.679 37.237-80.679 80.679s34.133 80.679 80.679 80.679 80.679-37.237 80.679-80.679-37.237-80.679-80.68-80.679",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ha = [
  ma
];
function ga(e, t, n, a, o, s) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ha, 6);
}
const ya = /* @__PURE__ */ ye(pa, [["render", ga]]);
R("more");
R("my");
R("my2");
const va = R("notice"), $a = /* @__PURE__ */ m("path", {
  d: "M940.873 819.2h-85.334V430.933c0-192-153.6-345.6-341.333-345.6s-341.333 153.6-341.333 345.6V819.2H87.539V430.933C87.54 192 279.54 0 514.206 0s426.667 192 426.667 430.933V819.2zM514.633 1024c-68.267 0-132.267-29.867-174.934-85.333-17.066-17.067-12.8-42.667 4.267-59.734 17.067-12.8 46.933-12.8 59.733 8.534 29.867 34.133 68.267 51.2 110.934 51.2s81.066-17.067 106.666-51.2c12.8-17.067 42.667-21.334 59.734-8.534 17.066 12.8 21.333 42.667 8.533 59.734C646.899 994.133 582.899 1024 514.633 1024zm469.333-162.133h-12.8c-294.4-89.6-618.667-89.6-913.067 0-21.333 4.266-46.933-8.534-55.466-29.867-8.534-21.333 4.266-46.933 29.866-51.2 311.467-93.867 652.8-89.6 964.267 0 21.333 8.533 34.133 29.867 29.867 51.2-8.534 21.333-25.6 29.867-42.667 29.867z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ba = [
  $a
];
function ka(e, t, n, a, o, s) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1027 1024",
    role: "presentation"
  }, ba, 6);
}
const wa = /* @__PURE__ */ ye(va, [["render", ka]]);
R("order");
R("people");
const Sa = R("photograph"), Ca = /* @__PURE__ */ m("path", {
  d: "M570.514 789.943c-119.954 0-219.428-99.474-219.428-219.429s99.474-219.428 219.428-219.428 219.429 99.474 219.429 219.428-99.474 219.429-219.429 219.429zm0-351.086c-73.143 0-131.657 58.514-131.657 131.657s58.514 131.657 131.657 131.657 131.657-58.514 131.657-131.657-58.514-131.657-131.657-131.657zM877.714 1024h-614.4C117.03 1024 0 906.971 0 760.686V380.343c0-146.286 117.029-263.314 263.314-263.314h32.183c0-2.926 2.926-8.778 2.926-11.703C315.977 43.886 374.49 0 438.857 0h263.314c70.218 0 128.732 49.737 143.36 117.029h32.183c146.286 0 263.315 117.028 263.315 263.314v380.343C1141.029 906.97 1024 1024 877.714 1024zm-614.4-819.2c-96.548 0-175.543 78.994-175.543 175.543v380.343c0 96.548 78.995 175.543 175.543 175.543h614.4c96.549 0 175.543-78.995 175.543-175.543V380.343c0-96.549-78.994-175.543-175.543-175.543H819.2c-32.183 0-58.514-26.331-58.514-58.514S734.354 87.77 702.17 87.77H438.857c-26.331 0-49.737 17.555-55.588 40.96-2.926 5.852-2.926 11.703-2.926 17.555 0 32.183-26.332 58.514-58.514 58.514h-58.515zm-87.771 160.914a73.143 73.143 0 1 0 146.286 0 73.143 73.143 0 1 0-146.286 0Z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ta = [
  Ca
];
function Na(e, t, n, a, o, s) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1141 1024",
    role: "presentation"
  }, Ta, 6);
}
const Da = /* @__PURE__ */ ye(Sa, [["render", Na]]);
R("play-circle-fill");
R("play-double-back");
R("play-double-forward");
R("play-start");
R("play-stop");
const Ia = R("plus"), _a = /* @__PURE__ */ m("path", {
  d: "M345.6 460.8h409.6q51.2 0 51.2 51.2t-51.2 51.2H345.6q-51.2 0-51.2-51.2t51.2-51.2zM550.4 256q51.2 0 51.2 51.2v409.6q0 51.2-51.2 51.2t-51.2-51.2V307.2q0-51.2 51.2-51.2z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ba = [
  _a
];
function Ma(e, t, n, a, o, s) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ba, 6);
}
const Ea = /* @__PURE__ */ ye(Ia, [["render", Ma]]);
R("poweroff-circle-fill");
const La = R("rect-down"), Pa = /* @__PURE__ */ m("path", {
  d: "M515.072 778.24c-14.336 0-28.672-5.632-39.936-16.384L69.12 356.864c-22.016-22.016-22.016-57.856 0-79.872s57.856-22.016 79.872 0L515.584 642.56 880.64 275.968c22.016-22.016 57.856-22.016 79.872 0s22.016 57.856 0 79.872L555.008 762.368c-10.752 10.752-25.6 15.872-39.936 15.872z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Aa = [
  Pa
];
function za(e, t, n, a, o, s) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Aa, 6);
}
const Va = /* @__PURE__ */ ye(La, [["render", za]]);
R("rect-left");
R("rect-right");
const Oa = R("rect-up"), Ha = /* @__PURE__ */ m("path", {
  d: "M920.576 778.24c-14.336 0-28.672-5.632-39.936-16.384L515.072 395.264 148.48 760.832c-22.016 22.016-57.856 22.016-79.872 0s-22.016-57.856 0-79.872l406.528-405.504c22.016-22.016 57.856-22.016 79.872 0l405.504 406.528c22.016 22.016 22.016 57.856 0 79.872-11.264 11.264-25.6 16.384-39.936 16.384z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ra = [
  Ha
];
function Fa(e, t, n, a, o, s) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ra, 6);
}
const Wa = /* @__PURE__ */ ye(Oa, [["render", Fa]]);
R("refresh");
const Ya = R("refresh2"), ja = /* @__PURE__ */ m("path", {
  d: "M771.938 315.077h199.55L958.358 469.99 758.81 364.964c-13.128-7.877-18.38-23.63-10.502-36.759 2.625-7.877 13.128-13.128 23.63-13.128zm-535.63 393.846H44.636L57.764 554.01l191.672 105.026c13.128 7.877 18.38 23.63 10.502 36.759-5.25 7.877-15.753 13.128-23.63 13.128zM509.374 1024C257.313 1024 44.636 845.456 5.251 596.02 0 575.016 15.754 556.637 36.76 551.386c21.005-2.626 42.01 10.502 44.636 31.507 34.133 210.052 215.302 362.339 427.98 362.339 191.671 0 362.338-128.657 417.476-312.452 5.252-21.005 28.882-34.133 49.887-26.256 21.006 5.251 34.134 28.882 26.257 49.887C937.354 871.713 735.179 1024 509.375 1024zm467.364-551.385c-18.379 0-36.759-13.128-39.384-34.133C903.22 231.056 722.05 78.77 509.374 78.77c-191.671 0-362.338 128.657-414.85 312.452-5.252 21.005-28.883 34.133-49.888 26.256-21.005-5.251-34.133-28.882-26.257-49.887C81.395 152.287 283.57 0 509.374 0c252.062 0 464.739 178.544 504.123 427.98 2.626 21.005-10.502 42.01-31.507 44.635h-5.252z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ka = [
  ja
];
function Ua(e, t, n, a, o, s) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ka, 6);
}
const Xa = /* @__PURE__ */ ye(Ya, [["render", Ua]]), qa = R("retweet"), Ga = /* @__PURE__ */ m("path", {
  d: "M136 552h63.6c4.4 0 8-3.6 8-8V288.7h528.6v72.6c0 1.9.6 3.7 1.8 5.2 2.9 3.6 8.1 4.3 11.7 1.4L893 255.4c4.3-5 3.6-10.3 0-13.2L749.7 129.8c-1.5-1.2-3.3-1.8-5.2-1.8-4.6 0-8.4 3.8-8.4 8.4V209H199.7c-39.5 0-71.7 32.2-71.7 71.8V544c0 4.4 3.6 8 8 8zm752-80h-63.6c-4.4 0-8 3.6-8 8v255.3H287.8v-72.6c0-1.9-.6-3.7-1.8-5.2-2.9-3.6-8.1-4.3-11.7-1.4L131 768.6c-4.3 5-3.6 10.3 0 13.2l143.3 112.4c1.5 1.2 3.3 1.8 5.2 1.8 4.6 0 8.4-3.8 8.4-8.4V815h536.6c39.5 0 71.7-32.2 71.7-71.8V480c-.2-4.4-3.8-8-8.2-8z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Za = [
  Ga
];
function Ja(e, t, n, a, o, s) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Za, 6);
}
const Qa = /* @__PURE__ */ ye(qa, [["render", Ja]]), xa = R("right"), ei = /* @__PURE__ */ m("path", {
  d: "M381.262 1005.566c-16.132 21.51-45.708 24.198-67.217 8.066-21.51-16.132-24.198-45.708-8.066-67.217C413.526 806.604 518.384 666.792 625.932 529.67c8.066-10.755 8.066-24.198 0-34.953C518.384 354.906 413.526 215.094 305.979 77.972c-16.132-21.51-10.755-51.085 8.066-67.217C335.555-5.377 365.13 0 381.262 18.82c107.547 142.5 212.405 282.311 319.953 419.434 34.952 43.019 34.952 104.858 0 150.566-107.548 139.811-212.406 279.622-319.953 416.745",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ti = [
  ei
];
function ni(e, t, n, a, o, s) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ti, 6);
}
const Gt = /* @__PURE__ */ ye(xa, [["render", ni]]);
R("s-follow");
R("scan");
R("scan2");
R("screen-little");
R("search");
R("search2");
const oi = R("service"), li = /* @__PURE__ */ m("path", {
  d: "M1024 657.723H905.846v-126.03c0-228.431-177.23-413.54-393.846-413.54s-393.846 185.109-393.846 413.54v126.03H0v-126.03C0 236.307 228.43 0 512 0s512 236.308 512 531.692v126.031zM196.923 866.462C86.646 866.462 0 779.815 0 669.538s86.646-196.923 196.923-196.923 196.923 86.647 196.923 196.923S307.2 866.462 196.923 866.462zm0-275.693c-43.323 0-78.77 35.446-78.77 78.77s35.447 78.769 78.77 78.769 78.77-35.446 78.77-78.77-35.447-78.769-78.77-78.769zm630.154 275.693c-110.277 0-196.923-86.647-196.923-196.924S716.8 472.615 827.077 472.615 1024 559.262 1024 669.538s-86.646 196.924-196.923 196.924zm0-275.693c-43.323 0-78.77 35.446-78.77 78.77s35.447 78.769 78.77 78.769 78.77-35.446 78.77-78.77-35.447-78.769-78.77-78.769zm-149.662 429.293c-23.63 0-47.261-15.754-55.138-43.324-7.877-31.507 7.877-63.015 39.385-74.83 102.4-31.508 189.046-102.4 236.307-196.923 15.754-27.57 51.2-39.385 78.77-23.631s39.384 51.2 23.63 78.77c-63.015 122.091-177.23 216.614-307.2 256-3.938 3.938-11.815 3.938-15.754 3.938z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), si = [
  li
];
function ai(e, t, n, a, o, s) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, si, 6);
}
const ii = /* @__PURE__ */ ye(oi, [["render", ai]]);
R("setting");
R("share-n");
R("share");
R("share1");
R("shop");
R("shop3");
const ri = R("star-fill-n"), ui = /* @__PURE__ */ m("path", {
  d: "M1047.135 361.244 722.87 312.89 577.802 22.756c-2.844-8.534-11.378-14.223-19.911-17.067-19.911-8.533-45.511-2.845-54.045 17.067L358.78 312.889 34.513 358.4c-8.533 0-17.067 5.689-22.755 11.378-17.067 17.066-14.223 42.666 0 56.889l233.244 227.555-54.044 321.422c-2.845 8.534 0 17.067 2.844 25.6 11.378 19.912 34.133 28.445 54.044 17.067L537.98 867.556l290.133 150.755c8.533 2.845 17.067 5.689 25.6 2.845 22.756-2.845 36.978-25.6 34.133-45.512l-54.044-321.422 233.244-227.555c5.69-5.69 11.378-14.223 11.378-22.756 5.69-19.911-8.533-39.822-31.289-42.667z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ci = [
  ui
];
function di(e, t, n, a, o, s) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1081 1024",
    role: "presentation"
  }, ci, 6);
}
const pn = /* @__PURE__ */ ye(ri, [["render", di]]);
R("star-fill");
R("star-fill1");
R("star-fill2");
R("star-n");
R("star");
R("star1");
R("star11");
R("star2");
const fi = R("success"), pi = /* @__PURE__ */ m("path", {
  d: "M762.311 391.396C655.36 466.489 566.613 552.96 491.52 659.91c-20.48 27.307-61.44 27.307-79.644-2.275-34.134-52.338-72.818-91.023-125.156-125.156-25.031-15.929-9.102-54.613 20.48-50.062 56.889 11.378 100.124 34.133 143.36 72.818 77.369-93.298 175.218-166.116 286.72-213.903 27.307-9.102 50.062 31.858 25.031 50.063M512 1024C229.831 1024 0 794.169 0 512S229.831 0 512 0s512 229.831 512 512-229.831 512-512 512zm0-955.733C266.24 68.267 68.267 266.24 68.267 512S266.24 955.733 512 955.733 955.733 757.76 955.733 512 757.76 68.267 512 68.267z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), mi = [
  pi
];
function hi(e, t, n, a, o, s) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, mi, 6);
}
const gi = /* @__PURE__ */ ye(fi, [["render", hi]]), yi = R("tips"), vi = /* @__PURE__ */ m("path", {
  d: "M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512zm0-938.667c-234.667 0-426.667 192-426.667 426.667s192 426.667 426.667 426.667 426.667-192 426.667-426.667S746.667 85.333 512 85.333zM448 320a64 64 0 1 0 128 0 64 64 0 1 0-128 0Zm-17.067 149.333h51.2c12.8 0 21.334 8.534 21.334 21.334v8.533c0 12.8-8.534 21.333-21.334 21.333h-51.2c-12.8 0-25.6-12.8-25.6-25.6s12.8-25.6 25.6-25.6zm51.2 0H524.8c25.6 0 51.2 21.334 51.2 51.2v8.534L537.6 755.2c0 8.533-8.533 17.067-21.333 17.067H473.6c-25.6 0-51.2-21.334-51.2-51.2v-8.534L460.8 486.4c4.267-8.533 12.8-17.067 21.333-17.067zm8.534 251.734h76.8c12.8 0 25.6 12.8 25.6 25.6s-12.8 25.6-25.6 25.6h-76.8c-12.8 0-21.334-8.534-21.334-21.334v-12.8c4.267-12.8 12.8-17.066 21.334-17.066z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), $i = [
  vi
];
function bi(e, t, n, a, o, s) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, $i, 6);
}
const Hn = /* @__PURE__ */ ye(yi, [["render", bi]]), ki = R("top"), wi = /* @__PURE__ */ m("path", {
  d: "M136.533 540.444c-11.377 0-25.6-5.688-34.133-17.066-14.222-19.911-11.378-45.511 8.533-59.734L477.867 179.2c19.91-14.222 45.51-11.378 59.733 8.533s11.378 45.511-8.533 59.734L162.133 531.91c-5.689 5.689-14.222 8.533-25.6 8.533zm745.245 0c-8.534 0-17.067-2.844-25.6-8.533L489.244 247.467c-19.91-14.223-22.755-42.667-8.533-59.734 14.222-19.91 42.667-22.755 59.733-8.533l366.934 284.444c19.91 14.223 22.755 42.667 8.533 59.734-8.533 11.378-19.911 17.066-34.133 17.066zM512 1024c-22.756 0-42.667-19.911-42.667-42.667v-768c0-22.755 19.911-42.666 42.667-42.666s42.667 19.91 42.667 42.666v768c0 22.756-19.911 42.667-42.667 42.667zM884.622 85.333h-742.4c-22.755 0-42.666-19.91-42.666-42.666S119.466 0 142.222 0h742.4c22.756 0 42.667 19.911 42.667 42.667s-19.911 42.666-42.667 42.666z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Si = [
  wi
];
function Ci(e, t, n, a, o, s) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Si, 6);
}
const Ti = /* @__PURE__ */ ye(ki, [["render", Ci]]), Ni = R("triangle-down"), Di = /* @__PURE__ */ m("path", {
  d: "m573.056 752 308.8-404.608A76.8 76.8 0 0 0 820.736 224H203.232a76.8 76.8 0 0 0-61.056 123.392L450.976 752a76.8 76.8 0 0 0 122.08 0z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ii = [
  Di
];
function _i(e, t, n, a, o, s) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ii, 6);
}
const Bi = /* @__PURE__ */ ye(Ni, [["render", _i]]), Mi = R("triangle-up"), Ei = /* @__PURE__ */ m("path", {
  d: "m573.056 272 308.8 404.608A76.8 76.8 0 0 1 820.736 800H203.232a76.8 76.8 0 0 1-61.056-123.392L450.976 272a76.8 76.8 0 0 1 122.08 0z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Li = [
  Ei
];
function Pi(e, t, n, a, o, s) {
  return u(), d("svg", {
    class: _(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Li, 6);
}
const Ai = /* @__PURE__ */ ye(Mi, [["render", Pi]]);
R("uploader");
R("voice");
const zi = { class: "nut-button__wrap" }, Ke = /* @__PURE__ */ st({
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
    const n = e, a = t, { type: o, size: s, shape: l, disabled: i, loading: r, color: p, plain: f, block: y } = me(n), g = (k) => {
      !r.value && !i.value && a("click", k);
    }, v = N(() => {
      const k = "nut-button";
      return {
        [k]: !0,
        [`${k}--${o.value}`]: o.value,
        [`${k}--${s.value}`]: s.value,
        [`${k}--${l.value}`]: l.value,
        [`${k}--plain`]: f.value,
        [`${k}--block`]: y.value,
        [`${k}--disabled`]: i.value,
        [`${k}--loading`]: r.value
      };
    }), b = N(() => {
      let k = {};
      return p != null && p.value && (k = {
        color: f.value ? p.value : "#fff",
        background: f.value ? "#fff" : `border-box ${p.value}`
      }, p.value.includes("gradient") ? k.borderColor = "transparent" : k.borderColor = p.value), k;
    });
    return (k, c) => (u(), d("view", {
      class: _(v.value),
      style: L(b.value),
      onClick: g
    }, [
      m("view", zi, [
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
    const n = Fe(), { link: a, unlink: o } = t;
    a(n), je(() => {
      o(n);
    });
  }
  return { parent: t };
}, Wn = (e) => {
  const t = e;
  return t.install = (n) => {
    t.name && n.component(t.name, t);
  }, t;
};
Wn(Ke);
const Vi = (e) => e.replace(/-./g, (t) => t[1].toUpperCase());
function Y(e) {
  return {
    componentName: "nut-" + e,
    create: function(n) {
      return n.name = "Nut" + Vi("-" + e), n.install = (a) => {
        a.component(n.name, n);
      }, st(n);
    }
  };
}
const at = (e, t) => e ? we(e, t) : "", Zt = (e, t) => {
  let n = document.body;
  const a = e.teleport || "body";
  a != "body" && (Ko(a) ? n = document.querySelector(a) : n = e.teleport);
  const o = document.createElement("view"), s = t.name ? t.name + "-" : "", l = e.id || (/* @__PURE__ */ new Date()).getTime();
  o.id = s + l;
  let i = {};
  It(t.wrapper) ? i = t.wrapper(n, o) : i = t.wrapper;
  const r = Po(i, e), p = t.components;
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
}, { componentName: Oi, create: Hi } = Y("cell"), Ri = Hi({
  components: { Right: Gt },
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
      const i = Oi;
      return {
        [i]: !0,
        [`${i}--clickable`]: e.isLink || e.to,
        [`${i}--center`]: e.center,
        [`${i}--large`]: e.size === "large"
      };
    }), a = Jt(), o = N(() => ({
      borderRadius: _e(e.roundRadius)
    })), s = N(() => ({
      textAlign: e.descTextAlign
    }));
    return {
      handleClick: (i) => {
        t("click", i), e.to && a ? a[e.replace ? "replace" : "push"](e.to) : e.url && (e.replace ? location.replace(e.url) : location.href = e.url);
      },
      classes: n,
      baseStyle: o,
      descStyle: s
    };
  }
}), K = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, o] of t)
    n[a] = o;
  return n;
}, Fi = {
  key: 0,
  class: "nut-cell__icon"
}, Wi = {
  key: 1,
  class: "nut-cell__title"
}, Yi = { class: "title" }, ji = { class: "nut-cell__title-desc" };
function Ki(e, t, n, a, o, s) {
  const l = j("Right");
  return u(), d("view", {
    class: _(e.classes),
    style: L(e.baseStyle),
    onClick: t[0] || (t[0] = (...i) => e.handleClick && e.handleClick(...i))
  }, [
    D(e.$slots, "default", {}, () => [
      e.$slots.icon ? (u(), d("view", Fi, [
        D(e.$slots, "icon")
      ])) : C("", !0),
      e.title || e.subTitle || e.$slots.title ? (u(), d("view", Wi, [
        e.subTitle ? (u(), d(ee, { key: 0 }, [
          D(e.$slots, "title", {}, () => [
            m("view", Yi, B(e.title), 1)
          ]),
          m("view", ji, B(e.subTitle), 1)
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
const Yn = /* @__PURE__ */ K(Ri, [["render", Ki]]), { create: Ui } = Y("cell-group"), Xi = Ui({
  props: {
    title: { type: String, default: "" },
    desc: { type: String, default: "" }
  }
}), qi = { class: "nut-cell-group" }, Gi = {
  key: 1,
  class: "nut-cell-group__title"
}, Zi = {
  key: 3,
  class: "nut-cell-group__desc"
}, Ji = { class: "nut-cell-group__wrap" };
function Qi(e, t, n, a, o, s) {
  return u(), d("view", qi, [
    e.$slots.title ? D(e.$slots, "title", { key: 0 }) : e.title ? (u(), d("view", Gi, B(e.title), 1)) : C("", !0),
    e.$slots.desc ? D(e.$slots, "desc", { key: 2 }) : e.desc ? (u(), d("view", Zi, B(e.desc), 1)) : C("", !0),
    m("view", Ji, [
      D(e.$slots, "default")
    ])
  ]);
}
const jn = /* @__PURE__ */ K(Xi, [["render", Qi]]);
let rt = 0;
const mn = "nut-overflow-hidden", xi = (e) => [() => {
  if (e())
    try {
      !rt && dn.classList.add(mn), rt++;
    } catch (a) {
      console.warn("[NutUI] <useLockScroll>", a);
    }
}, () => {
  if (e() && rt)
    try {
      rt--, !rt && dn.classList.remove(mn);
    } catch (a) {
      console.warn("[NutUI] <unlock>", a);
    }
}], { componentName: er, create: tr } = Y("overlay"), nr = tr({
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
    const [n, a] = xi(() => e.lockScroll), o = N(() => ({
      [er]: !0,
      [e.overlayClass]: !0
    })), s = N(() => G({
      transitionDuration: `${e.duration}s`,
      zIndex: e.zIndex
    }, e.overlayStyle));
    return Ft(() => {
      e.visible ? n() : a();
    }), { classes: o, style: s, onClick: (i) => {
      t("click", i), e.closeOnClickOverlay && t("update:visible", !1);
    } };
  }
});
function or(e, t, n, a, o, s) {
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
const vt = /* @__PURE__ */ K(nr, [["render", or]]), $t = {
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
}, { componentName: lr, create: sr } = Y("popup"), Kn = 2e3;
let hn = Kn;
const ar = sr({
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
    }), a = N(() => ({
      [lr]: !0,
      round: e.round,
      [`nut-popup--${e.position}`]: !0,
      [`nut-popup--${e.position}--safebottom`]: e.position === "bottom" && e.safeAreaInsetBottom,
      [e.popClass]: !0
    })), o = N(() => G({
      zIndex: n.zIndex,
      transitionDuration: `${e.duration}s`
    }, e.style)), s = N(() => e.transition ? e.transition : `nut-popup-slide-${e.position}`), l = () => {
      e.zIndex !== Kn && (hn = Number(e.zIndex)), t("update:visible", !0), n.zIndex = ++hn, e.destroyOnClose && (n.showSlot = !0), t("open");
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
      transitionName: s,
      classes: a,
      onClick: r,
      onClickCloseIcon: p,
      onClickOverlay: f,
      onOpened: y,
      onClosed: g
    });
  }
});
function ir(e, t, n, a, o, s) {
  const l = j("nut-overlay"), i = j("Close");
  return u(), x(Ao, {
    to: e.teleport,
    disabled: !e.teleportDisable
  }, [
    e.overlay ? (u(), x(l, mt({
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
const Ee = /* @__PURE__ */ K(ar, [["render", ir]]), rr = (e) => ({
  props: {
    theme: { type: String, default: "" },
    themeVars: { type: Object, default: {} },
    tag: { type: String, default: e }
  },
  setup(t, { slots: n }) {
    const a = (i) => {
      if (!/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(i))
        return "";
      i = i.toLowerCase(), i.length === 4 && (i = "#" + i.slice(1).split("").map((f) => f + f).join(""));
      const p = [];
      for (let f = 1; f < 7; f += 2)
        p.push(parseInt("0x" + i.slice(f, f + 2)));
      return p.join(",");
    }, o = (i) => (i = i.replace(i.charAt(0), i.charAt(0).toLocaleLowerCase()), i.replace(/([a-z])([A-Z])/g, (r, p, f) => p + "-" + f.toLowerCase())), s = (i) => {
      if (!i)
        return;
      const r = {}, p = i == null ? void 0 : i.primaryColor;
      if (p) {
        const f = a(p);
        r["--nut-address-region-tab-line"] = `linear-gradient(90deg, ${p} 0%, rgba(${f}, 0.15) 100%)`, r["--nut-tabs-horizontal-tab-line-color"] = `linear-gradient(90deg, ${p} 0%, rgba(${f}, 0.15) 100%)`, r["--nut-tabs-vertical-tab-line-color"] = `linear-gradient(180deg, ${p} 0%, rgba(${f}, 0.15) 100%)`;
      }
      return Object.keys(i).forEach((f) => {
        r[`--nut-${o(f)}`] = i[f];
      }), r;
    }, l = N(() => s(t.themeVars));
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
}), { create: ur } = Y("config-provider"), cr = ur(rr("div")), { componentName: dr, create: fr } = Y("image"), pr = fr({
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
    Image: Ss,
    ImageError: vs
  },
  emits: ["click", "load", "error"],
  setup(e, { emit: t }) {
    const n = ue({
      loading: !0,
      isError: !1,
      slotLoding: Je().loading,
      slotError: Je().error
    }), a = N(() => {
      const v = dr;
      return {
        [v]: !0,
        [`${v}-round`]: e.round
      };
    }), o = P(null), s = P(!1), l = P(null), i = () => {
      const v = {
        threshold: [0],
        rootMargin: "0px"
      };
      o.value = new IntersectionObserver((b) => {
        b.forEach((k) => {
          k.isIntersecting && (s.value = !0, o.value.disconnect());
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
    return ce(G({}, me(n)), { imageClick: g, classes: a, styles: p, stylebox: r, error: y, load: f, show: s, imgRef: l });
  }
}), mr = ["src", "date-src", "alt"], hr = {
  key: 0,
  class: "nut-img-loading"
}, gr = {
  key: 1,
  class: "nut-img-error"
};
function yr(e, t, n, a, o, s) {
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
    }, null, 44, mr),
    e.loading ? (u(), d("div", hr, [
      e.slotLoding ? C("", !0) : (u(), x(l, {
        key: 0,
        width: "16px",
        height: "20px",
        name: "image"
      })),
      D(e.$slots, "loading")
    ])) : C("", !0),
    e.isError && !e.loading ? (u(), d("div", gr, [
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
const vr = /* @__PURE__ */ K(pr, [["render", yr]]), { create: $r } = Y("layout"), br = $r({}), Un = Symbol("nut-layout"), { create: kr } = Y("col"), wr = kr({
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
    const t = "nut-col", n = Be(Un), a = N(() => ({
      [t]: !0,
      [t + "-gutter"]: n,
      ["nut-col-" + e.span]: !0,
      ["nut-col-offset-" + e.offset]: !0
    })), o = N(() => ({
      paddingLeft: n / 2 + "px",
      paddingRight: n / 2 + "px"
    }));
    return {
      classes: a,
      style: o
    };
  }
});
function Sr(e, t, n, a, o, s) {
  return u(), d("view", {
    class: _(e.classes),
    style: L(e.style)
  }, [
    D(e.$slots, "default")
  ], 6);
}
const Cr = /* @__PURE__ */ K(wr, [["render", Sr]]), { create: Tr } = Y("row"), Nr = Tr({
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
    Me(Un, e.gutter);
    const n = (o, s) => o ? s ? `nut-row-${o}-${s}` : "" : `nut-row-${s}`;
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
function Dr(e, t, n, a, o, s) {
  return u(), d("view", {
    class: _(e.classes)
  }, [
    D(e.$slots, "default")
  ], 2);
}
const Ir = /* @__PURE__ */ K(Nr, [["render", Dr]]), _r = /scroll|auto|overlay/i, Xn = window;
function Br(e) {
  return e.tagName !== "HTML" && e.tagName !== "BODY" && e.nodeType === 1;
}
function Ot(e, t = Xn) {
  let n = e;
  for (; n && n !== t && Br(n); ) {
    const { overflowY: a } = window.getComputedStyle(n);
    if (_r.test(a))
      return n;
    n = n.parentNode;
  }
  return t;
}
function qn(e, t = Xn) {
  const n = P();
  return ve(() => {
    e.value && (n.value = Ot(e.value, t));
  }), n;
}
function Mr(e) {
  return e === window;
}
const Oe = (e) => {
  const t = et(e);
  if (Mr(t)) {
    const n = t.innerWidth, a = t.innerHeight;
    return {
      top: 0,
      left: 0,
      right: n,
      bottom: a,
      width: n,
      height: a
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
}, { create: Er } = Y("sticky"), Lr = Er({
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
    const n = P(), a = P(), o = ue({
      fixed: !1,
      height: 0,
      width: 0,
      transform: 0
    }), s = N(() => e.position === "top" ? Number(e.top) : Number(e.bottom)), l = N(() => o.fixed ? { height: `${o.height}px` } : {}), i = N(() => o.fixed ? {
      [e.position]: `${s.value}px`,
      height: `${o.height}px`,
      width: `${o.width}px`,
      transform: o.transform ? `translate3d(0, ${o.transform}px, 0)` : void 0,
      position: o.fixed ? "fixed" : void 0,
      zIndex: Number(e.zIndex)
    } : {}), r = () => {
      const p = e.container;
      if (!n.value && !p)
        return;
      const f = Oe(n), y = a.value, g = Oe(y), v = Oe(p);
      o.height = f.height, o.width = f.width;
      const b = () => {
        let c = !1;
        if (e.position === "top")
          c = p ? s.value > f.top && v.bottom > 0 : s.value > f.top;
        else {
          const $ = document.documentElement.clientHeight;
          c = p ? v.bottom > 0 && $ - s.value - g.height > v.top : $ - s.value < f.bottom;
        }
        return c;
      }, k = () => {
        if (p)
          if (e.position === "top") {
            const c = v.bottom - s.value - g.height;
            return c < 0 ? c : 0;
          } else {
            const c = document.documentElement.clientHeight, $ = v.bottom - (c - s.value);
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
    }), { rootRef: n, rootStyle: l, stickyRef: a, stickyStyle: i };
  }
});
function Pr(e, t, n, a, o, s) {
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
const Gn = /* @__PURE__ */ K(Lr, [["render", Pr]]), Zn = /* @__PURE__ */ st({
  name: "NutDivider",
  __name: "divider",
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
  setup(e) {
    const t = e, n = Je(), a = N(() => {
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
    return (o, s) => (u(), d("view", {
      class: _(a.value)
    }, [
      e.direction === "horizontal" ? D(o.$slots, "default", { key: 0 }) : C("", !0)
    ], 2));
  }
});
Wn(Zn);
function Ar(e, t) {
  const n = [], a = (o) => {
    Array.isArray(o) && o.forEach((s) => {
      var l;
      if (Vo(s)) {
        if (t) {
          if (s.type && s.type.name === t) {
            n.push(s);
            return;
          }
        } else
          n.push(s);
        (l = s.component) != null && l.subTree && a(s.component.subTree.children), s.children && a(s.children);
      }
    });
  };
  return a(e), n;
}
function zr(e, t, n) {
  const a = Ar(e.subTree.children, n);
  t.sort((o, s) => a.indexOf(o.vnode) - a.indexOf(s.vnode));
}
function Vr(e, t) {
  const n = zo([]), a = Fe(), o = (i) => {
    i.proxy && (n.push(un(i)), zr(a, n, t));
  }, s = (i) => {
    n.splice(n.indexOf(un(i)), 1);
  }, l = Object.assign;
  return (i) => (Me(
    e,
    l(
      {
        add: o,
        remove: s,
        internalChildren: n
      },
      i
    )
  ), {
    internalChildren: n
  });
}
const { componentName: Or } = Y("grid"), Jn = Symbol("grid"), Hr = {
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
}, Rr = {
  props: Hr,
  setup(e, { slots: t }) {
    Vr(Jn, "NutGridItem")({ props: e });
    const n = N(() => {
      const o = Or;
      return {
        [o]: !0,
        [`${o}--border`]: e.border && !e.gutter
      };
    }), a = N(() => {
      const o = {};
      return e.gutter && (o.paddingLeft = _e(e.gutter)), o;
    });
    return () => {
      var o;
      return we(
        "view",
        {
          class: n.value,
          style: a.value
        },
        (o = t.default) == null ? void 0 : o.call(t)
      );
    };
  }
}, { create: Fr } = Y("grid"), Wr = Fr(Rr);
function Yr(e) {
  const t = Be(e, null);
  if (t) {
    const n = Fe(), { add: a, remove: o, internalChildren: s } = t;
    a(n), je(() => o(n));
    const l = N(() => s.indexOf(n));
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
const { create: jr, componentName: gn } = Y("grid-item"), Kr = jr({
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
    const n = Yr(Jn);
    if (!n.parent)
      return {};
    const a = n.index, o = n.parent.props, s = N(() => ({
      [gn]: !0
    })), l = N(() => {
      const f = {
        flexBasis: `${100 / +o.columnNum}%`
      };
      return o.square ? f.paddingTop = `${100 / +o.columnNum}%` : o.gutter && (f.paddingRight = _e(o.gutter), a.value >= +o.columnNum && (f.marginTop = _e(o.gutter))), f;
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
      rootClass: s,
      rootStyle: l,
      contentClass: i,
      handleClick: (f) => {
        t("click", f), e.to && r ? r[e.replace ? "replace" : "push"](e.to) : e.url && (e.replace ? location.replace(e.url) : location.href = e.url);
      }
    };
  }
}), Ur = { class: "nut-grid-item__text" };
function Xr(e, t, n, a, o, s) {
  return u(), d("view", {
    class: _(e.rootClass),
    style: L(e.rootStyle),
    onClick: t[0] || (t[0] = (...l) => e.handleClick && e.handleClick(...l))
  }, [
    m("view", {
      class: _(e.contentClass)
    }, [
      D(e.$slots, "default"),
      m("view", Ur, [
        e.text ? (u(), d(ee, { key: 0 }, [
          ge(B(e.text), 1)
        ], 64)) : D(e.$slots, "text", { key: 1 })
      ])
    ], 2)
  ], 6);
}
const qr = /* @__PURE__ */ K(Kr, [["render", Xr]]), { create: Gr, componentName: Qe } = Y("space"), Zr = Gr({
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
    const n = (f) => typeof f == "number" ? f + "px" : f, a = (f) => {
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
          return !(g && (g.type === Oo || g.type === ee && ((v = g.children) == null ? void 0 : v.length) === 0 || g.type === Ho && g.children.trim() === ""));
        }
      );
    }, { direction: s, wrap: l, fill: i, justify: r, align: p } = e;
    return () => {
      var g;
      const f = o((g = t.default) == null ? void 0 : g.call(t)), y = () => f.map((v, b) => we(
        "div",
        {
          class: `${Qe}-item`,
          style: a(b === f.length - 1)
        },
        v
      ));
      return we(
        "div",
        {
          class: [
            Qe,
            s && `${Qe}-${s}`,
            p && `${Qe}-align-${p}`,
            r && `${Qe}-justify-${r}`,
            l && `${Qe}-wrap`,
            i && `${Qe}-fill`
          ]
        },
        y()
      );
    };
  }
}), { componentName: Jr, create: Qr } = Y("navbar"), xr = Qr({
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
    const { border: n, fixed: a, safeAreaInsetTop: o, placeholder: s } = me(e), l = P("auto"), i = P(), r = N(() => {
      const k = Jr;
      return {
        [k]: !0,
        [`${k}--border`]: n.value,
        [`${k}--fixed`]: a.value,
        [`${k}--safe-area-inset-top`]: o.value
      };
    }), p = N(() => a.value && s.value ? {
      height: l.value
    } : {}), f = () => {
      if (i.value) {
        const k = i.value.getBoundingClientRect();
        l.value = `${k.height}px`;
      }
    };
    return ve(() => {
      a.value && s.value && Te(() => {
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
}), eu = {
  key: 1,
  class: "nut-navbar__text"
}, tu = { class: "nut-navbar__title" }, nu = {
  key: 0,
  class: "nut-navbar__text"
};
function ou(e, t, n, a, o, s) {
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
        e.leftText ? (u(), d("view", eu, B(e.leftText), 1)) : C("", !0),
        D(e.$slots, "left")
      ]),
      m("view", tu, [
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
        e.desc ? (u(), d("view", nu, B(e.desc), 1)) : C("", !0),
        D(e.$slots, "right")
      ])
    ], 6)
  ], 4);
}
const lu = /* @__PURE__ */ K(xr, [["render", ou]]), ke = (e = "") => (t, ...n) => {
  e = e.toLocaleLowerCase();
  const a = Ln.languages();
  let o = t;
  e && e.startsWith("nut") && (o = `${e.slice(3)}.${t}`);
  const s = zt(a, o) || zt(a, t);
  return It(s) ? s(...n) : s;
}, { create: su } = Y("fixed-nav"), au = "NutFixedNav", iu = su({
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
    const n = ke(au), a = N(() => ({
      ["nut-fixed-nav"]: !0,
      active: e.visible,
      [e.type]: !0
    })), o = P(-1);
    return { classes: a, updateValue: (i = !e.visible) => {
      t("update:visible", i);
    }, selected: (i, r) => {
      t("selected", {
        item: i,
        event: r
      }), o.value = i.id;
    }, translate: n, current: o };
  }
}), ru = { class: "nut-fixed-nav__list" }, uu = ["onClick"], cu = ["src"], du = { class: "span" }, fu = {
  key: 0,
  class: "b"
}, pu = { class: "text" };
function mu(e, t, n, a, o, s) {
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
      m("view", ru, [
        (u(!0), d(ee, null, re(e.navList, (r, p) => (u(), d("view", {
          key: r.id || p,
          class: _(["nut-fixed-nav__list-item", { active: r.id == e.current }]),
          onClick: (f) => e.selected(r, f)
        }, [
          m("img", {
            src: r.icon
          }, null, 8, cu),
          m("view", du, B(r.text), 1),
          r.num ? (u(), d("view", fu, B(r.num), 1)) : C("", !0)
        ], 10, uu))), 128))
      ])
    ]),
    m("div", {
      class: "nut-fixed-nav__btn",
      onClick: t[1] || (t[1] = (r) => e.updateValue())
    }, [
      D(e.$slots, "btn", {}, () => [
        le(i, { color: "#fff" }),
        m("view", pu, B(e.visible ? e.activeText || e.translate("activeText") : e.unActiveText || e.translate("unActiveText")), 1)
      ])
    ])
  ], 6);
}
const hu = /* @__PURE__ */ K(iu, [["render", mu]]), Qn = Symbol("nut-menu"), { componentName: gu, create: yu } = Y("menu"), vu = yu({
  components: {
    RectUp: Wa,
    RectDown: Va
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
    const t = P(), n = P(0), a = P(!1), { children: o, linkChildren: s } = Rn(Qn), l = N(() => o.some((v) => v.state.showWrapper)), i = N(() => ({
      [gu]: !0,
      "scroll-fixed": a.value
    })), r = () => {
      if (t.value) {
        const v = Oe(t);
        e.direction === "down" ? n.value = v.bottom : n.value = window.innerHeight - v.top;
      }
    };
    s({ props: e, offset: n });
    const p = (v) => {
      o.forEach((b, k) => {
        k === v ? (r(), b.toggle()) : b.state.showPopup && b.toggle(!1, { immediate: !0 });
      });
    }, f = (v) => Math.max(0, "scrollTop" in v ? v.scrollTop : v.pageYOffset), y = () => {
      const { scrollFixed: v } = e, b = f(window);
      a.value = b > (typeof v == "boolean" ? 30 : Number(v));
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
}), $u = ["onClick"], bu = { class: "nut-menu__title-text" }, ku = { class: "nut-menu__title-icon" };
function wu(e, t, n, a, o, s) {
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
          m("view", bu, B(r.renderTitle()), 1),
          m("span", ku, [
            D(e.$slots, "icon", {}, () => [
              e.direction === "up" ? (u(), x(l, { key: 0 })) : (u(), x(i, { key: 1 }))
            ])
          ])
        ], 2)
      ], 14, $u))), 128))
    ], 2),
    D(e.$slots, "default")
  ], 2);
}
const Su = /* @__PURE__ */ K(vu, [["render", wu]]), { create: Cu } = Y("menu-item"), Tu = Cu({
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
    }), { parent: a } = Fn(Qn), o = N(() => a.props.direction === "down" ? {
      top: a.offset.value + "px"
    } : {
      bottom: a.offset.value + "px"
    }), s = N(() => {
      const y = { height: a.offset.value + "px" };
      return a.props.direction === "down" ? ce(G({}, y), { top: "0px" }) : ce(G({}, y), { bottom: "0px" });
    });
    return {
      style: o,
      placeholderElementStyle: s,
      renderTitle: () => {
        var g;
        if (e.title)
          return e.title;
        const y = (g = e.options) == null ? void 0 : g.find((v) => v.value === e.modelValue);
        return y ? y.text : "";
      },
      state: n,
      parent: a,
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
}), Nu = { class: "nut-menu-item__content nut-menu-item__overflow" }, Du = ["onClick"];
function Iu(e, t, n, a, o, s) {
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
    le(i, mt(e.$attrs, {
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
        m("view", Nu, [
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
                le(l, mt(e.$attrs, {
                  color: e.parent.props.activeColor
                }), null, 16, ["color"])
              ])
            ], 2)) : C("", !0),
            m("view", {
              class: _([r.value === e.modelValue ? e.activeTitleClass : e.inactiveTitleClass]),
              style: L({ color: r.value === e.modelValue ? e.parent.props.activeColor : "" })
            }, B(r.text), 7)
          ], 14, Du))), 128)),
          D(e.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["visible", "position", "duration", "overlay", "lock-scroll", "close-on-click-overlay", "onClosed"])
  ], 4)), [
    [De, e.state.showWrapper]
  ]);
}
const _u = /* @__PURE__ */ K(Tu, [["render", Iu]]), xn = Symbol("nut-tabbar"), { create: Bu } = Y("tabbar"), Mu = Bu({
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
    const { bottom: n, placeholder: a } = me(e), o = P(), s = ue({
      val: e.modelValue,
      children: []
    }), l = P(null);
    function i(p, f) {
      t("update:modelValue", f), r.modelValue = f, t("tabSwitch", r.children[p], f);
    }
    const r = ue({
      children: s.children,
      modelValue: s.val,
      unactiveColor: e.unactiveColor,
      activeColor: e.activeColor,
      changeIndex: i
    });
    return Me(xn, r), Q(
      () => e.modelValue,
      (p) => {
        r.modelValue = p;
      }
    ), ve(() => {
      n.value && a.value && Te(() => {
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
function Eu(e, t, n, a, o, s) {
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
const Lu = /* @__PURE__ */ K(Mu, [["render", Eu]]), { create: Pu } = Y("badge"), Au = Pu({
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
    })), a = N(() => {
      if (e.dot)
        return;
      const o = e.value, s = e.max;
      return typeof o == "number" && typeof s == "number" && s < o ? `${s}+` : o;
    });
    return {
      state: t,
      stl: n,
      content: a
    };
  }
}), zu = { class: "nut-badge" }, Vu = ["textContent"];
function Ou(e, t, n, a, o, s) {
  return u(), d("view", zu, [
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
    }, null, 14, Vu), [
      [De, !e.hidden && (e.content || e.dot)]
    ])
  ]);
}
const eo = /* @__PURE__ */ K(Au, [["render", Ou]]), { create: Hu } = Y("tabbar-item"), Ru = Hu({
  components: { NutBadge: eo },
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
    const n = (p) => t[p], a = Be(xn), o = ue({
      unactiveColor: a.unactiveColor,
      // 未选中的颜色
      activeColor: a.activeColor,
      // 选中的颜色
      index: 0
    }), s = Jt();
    ((p) => {
      var f;
      if (p.proxy) {
        a.children.push(p.proxy);
        const y = a.children.indexOf(p.proxy);
        o.index = (f = e.name) != null ? f : y;
      }
    })(Fe());
    const i = N(() => o.index === a.modelValue);
    function r() {
      var g, v, b;
      let p = (g = e.name) != null ? g : o.index, f = null;
      e.name && (f = a.children.findIndex((k) => k.name == p)), a.changeIndex(f != null ? f : p, o.index);
      let y = f != null ? f : p;
      if ((v = a.children[y]) != null && v.href) {
        window.location.href = a.children[y].href;
        return;
      }
      if ((b = a.children[y]) != null && b.to) {
        let k = a.children[y].to;
        k && s ? s.push(k) : location.replace(k);
      }
    }
    return {
      state: o,
      active: i,
      renderIcon: at,
      isHaveSlot: n,
      change: r
    };
  }
}), Fu = { class: "nut-tabbar-item_icon-box" }, Wu = {
  key: 0,
  class: "nut-tabbar-item_icon-box_icon"
}, Yu = { key: 1 }, ju = { key: 0 };
function Ku(e, t, n, a, o, s) {
  const l = j("nut-badge");
  return u(), d("div", {
    class: _(["nut-tabbar-item", { "nut-tabbar-item__icon--unactive": !e.active }]),
    style: L({
      color: e.active ? e.state.activeColor : e.state.unactiveColor
    }),
    onClick: t[0] || (t[0] = (i) => e.change())
  }, [
    le(l, Ro(Fo(e.$attrs)), {
      default: te(() => [
        m("view", Fu, [
          e.isHaveSlot("icon") ? (u(), d("div", Wu, [
            D(e.$slots, "icon", { active: e.active })
          ])) : C("", !0),
          e.icon && !e.isHaveSlot("icon") ? (u(), d("view", Yu, [
            (u(), x(Ae(e.renderIcon(e.icon)), { class: "nut-popover-item-img" }))
          ])) : C("", !0),
          m("view", {
            class: _([
              "nut-tabbar-item_icon-box_nav-word",
              { "nut-tabbar-item_icon-box_big-word": !e.icon && !e.isHaveSlot("icon") }
            ])
          }, [
            D(e.$slots, "default", {}, () => [
              e.tabTitle ? (u(), d("view", ju, B(e.tabTitle), 1)) : C("", !0)
            ])
          ], 2)
        ])
      ]),
      _: 3
    }, 16)
  ], 6);
}
const Uu = /* @__PURE__ */ K(Ru, [["render", Ku]]), { create: Xu } = Y("elevator"), qu = Xu({
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
    const a = P(null), o = ue({
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
    }), s = N(() => a.value.clientHeight), l = (c, $) => c.getAttribute("data-" + $), i = (c) => {
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
      !c && c !== 0 || (c < 0 && (c = 0), c > o.listHeight.length - 2 && (c = o.listHeight.length - 2), o.codeIndex = c, a.value.scrollTo(0, o.listHeight[c]));
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
        let T = w[I], W = w[I + 1];
        if (o.scrollY >= T && o.scrollY < W) {
          o.currentIndex = I, o.diff = W - o.scrollY;
          return;
        }
      }
      o.currentIndex = w.length - 2;
    };
    return ve(() => {
      a.value && a.value.addEventListener("scroll", k);
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
        o.scrollY + s.value === $[$.length - 1] && h !== 0 && (h = 0), o.fixedTop !== h && (o.fixedTop = h);
      }
    ), Q(
      () => o.currentIndex,
      (c) => {
        t("change", c);
      }
    ), ce(G({}, me(o)), {
      clientHeight: s,
      setListGroup: i,
      listview: a,
      touchStart: f,
      touchMove: y,
      touchEnd: g,
      handleClickItem: v,
      handleClickIndex: b
    });
  }
}), Gu = { class: "nut-elevator" }, Zu = { class: "nut-elevator__list__item__code" }, Ju = ["onClick"], Qu = ["innerHTML"], xu = { class: "nut-elevator__list__fixed" }, ec = { class: "nut-elevator__list__fixed-title" }, tc = { class: "nut-elevator__bars__inner" }, nc = ["data-index", "onClick"];
function oc(e, t, n, a, o, s) {
  var l, i;
  return u(), d("view", Gu, [
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
        m("view", Zu, B(r[e.acceptKey]), 1),
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
          }, null, 8, Qu))
        ], 10, Ju))), 128))
      ]))), 128))
    ], 4),
    Ce(m("view", xu, [
      m("view", ec, B((i = (l = e.indexList) == null ? void 0 : l[e.currentIndex]) == null ? void 0 : i[e.acceptKey]), 1)
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
      m("view", tc, [
        (u(!0), d(ee, null, re(e.indexList, (r, p) => (u(), d("view", {
          key: r[e.acceptKey],
          class: _(["nut-elevator__bars__inner__item", { active: r[e.acceptKey] === e.indexList[e.currentIndex][e.acceptKey] }]),
          "data-index": p,
          onClick: (f) => e.handleClickIndex(r[e.acceptKey])
        }, B(r[e.acceptKey]), 11, nc))), 128))
      ])
    ], 32)
  ]);
}
const to = /* @__PURE__ */ K(qu, [["render", oc]]), { create: lc } = Y("pagination"), sc = "NutPagination", ac = lc({
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
    const n = ke(sc), { modelValue: a, mode: o, showPageSize: s, forceEllipses: l } = me(e), i = N(() => {
      const { pageCount: y, totalItems: g, itemsPerPage: v } = me(e), b = +y.value || Math.ceil(+g.value / +v.value);
      return Math.max(1, b);
    }), r = (y, g) => {
      y > i.value || y < 1 || (y != a.value && t("update:modelValue", y), g && t("change", y));
    }, p = (y, g, v = !1) => ({ number: y, text: g, active: v }), f = N(() => {
      if (o.value == "simple")
        return;
      let y = [];
      const g = i.value, v = +s.value;
      let b = 1, k = g;
      const c = g > v;
      c && (b = Math.max(a.value - Math.floor(v / 2), 1), k = b + +v - 1, k > g && (k = g, b = k - +v + 1));
      for (var $ = b; $ <= k; $++) {
        const h = p($, $, a.value == $);
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
      r(a.value, !1);
    }), {
      modelValue: a,
      select: r,
      countRef: i,
      mode: o,
      pages: f,
      forceEllipses: l,
      translate: n
    };
  }
}), ic = { class: "nut-pagination" }, rc = {
  key: 0,
  class: "nut-pagination-contain"
}, uc = ["onClick"], cc = {
  key: 1,
  class: "nut-pagination-contain"
}, dc = { class: "nut-pagination-simple" };
function fc(e, t, n, a, o, s) {
  return u(), d("view", ic, [
    m("view", {
      class: _(["nut-pagination-prev", e.mode == "multi" ? "" : "simple-border", e.modelValue == 1 ? "disabled" : ""]),
      onClick: t[0] || (t[0] = (l) => e.select(e.modelValue - 1, !0))
    }, [
      D(e.$slots, "prev-text", {}, () => [
        ge(B(e.prevText || e.translate("prev")), 1)
      ])
    ], 2),
    e.mode == "multi" ? (u(), d("view", rc, [
      (u(!0), d(ee, null, re(e.pages, (l, i) => (u(), d("view", {
        key: i + "pagination",
        class: _(["nut-pagination-item", l.active ? "active" : ""]),
        onClick: (r) => e.select(l.number, !0)
      }, [
        D(e.$slots, "page", { item: l }, () => [
          ge(B(l.text), 1)
        ])
      ], 10, uc))), 128))
    ])) : C("", !0),
    e.mode == "simple" ? (u(), d("view", cc, [
      m("view", dc, B(e.modelValue) + "/" + B(e.countRef), 1)
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
const pc = /* @__PURE__ */ K(ac, [["render", fc]]), St = window, mc = typeof window != "undefined";
function hc() {
  return typeof St != "undefined" ? St.requestAnimationFrame || St.webkitRequestAnimationFrame || function(e) {
    St.setTimeout(e, 1e3 / 60);
  } : function(e) {
    setTimeout(e, 1e3 / 60);
  };
}
function gc(e) {
  mc ? cancelAnimationFrame(e) : clearTimeout(e);
}
const Ve = hc(), yn = 10;
function yc(e, t) {
  return e > t && e > yn ? "horizontal" : t > e && t > yn ? "vertical" : "";
}
function Ge() {
  const e = P(0), t = P(0), n = P(0), a = P(0), o = P(0), s = P(0), l = P(0), i = P(0), r = P(""), p = () => r.value === "vertical", f = () => r.value === "horizontal", y = () => {
    o.value = 0, s.value = 0, l.value = 0, i.value = 0, r.value = "";
  };
  return {
    move: (b) => {
      const k = b.touches[0];
      o.value = k.clientX - e.value, s.value = k.clientY - t.value, n.value = k.clientX, a.value = k.clientY, l.value = Math.abs(o.value), i.value = Math.abs(s.value), r.value || (r.value = yc(l.value, i.value));
    },
    start: (b) => {
      y(), e.value = b.touches[0].clientX, t.value = b.touches[0].clientY;
    },
    reset: y,
    startX: e,
    startY: t,
    moveX: n,
    moveY: a,
    deltaX: o,
    deltaY: s,
    offsetX: l,
    offsetY: i,
    direction: r,
    isVertical: p,
    isHorizontal: f
  };
}
const vc = (e, t, n, a) => {
  const o = P(), s = P({ width: 0, height: 0 }), l = () => Ue(void 0, null, function* () {
    var g, v;
    n && n.getEnv() !== n.ENV_TYPE.WEB ? a(o).then(
      (b) => {
        s.value.width = b.width || 0, s.value.height = b.height || 0;
      },
      () => {
      }
    ) : (s.value.width = ((g = o.value) == null ? void 0 : g.clientWidth) || 0, s.value.height = ((v = o.value) == null ? void 0 : v.clientHeight) || 0);
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
    switch (e.direction == "horizontal" ? (p = g > 0 ? "right" : "left", b = Math.abs(b) / s.value.width * 100) : (p = v > 0 ? "bottom" : "top", b = v, b = Math.abs(b) / ((k = s.value) == null ? void 0 : k.height) * 100), b > 85 && (b = 85), p) {
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
class $c {
  constructor() {
    z(this, "title", "");
    z(this, "titleSlot");
    z(this, "paneKey", "");
    z(this, "disabled", !1);
  }
}
const { create: bc } = Y("tabs"), kc = bc({
  components: { NutSticky: Gn, JoySmile: Is },
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
    const a = P(null);
    let o;
    Me("tabsOpiton", {
      activeKey: N(() => e.modelValue || "0"),
      autoHeight: N(() => e.autoHeight),
      animatedTime: N(() => e.animatedTime)
    });
    const s = P([]), l = (S) => {
      S.forEach((E, V) => {
        var Z, F, oe, q, H, ne, U, ae, de;
        let X = E.type;
        if (X = X.name || X, X == "NutTabPane") {
          let fe = new $c();
          if ((Z = E.props) != null && Z.title || (F = E.props) != null && F["pane-key"] || (oe = E.props) != null && oe.paneKey) {
            let be = Dt((q = E.props) == null ? void 0 : q["pane-key"]), Le = be == "number" || be == "string" ? String((H = E.props) == null ? void 0 : H["pane-key"]) : null, O = Dt((ne = E.props) == null ? void 0 : ne.paneKey), J = O == "number" || O == "string" ? String((U = E.props) == null ? void 0 : U.paneKey) : null;
            fe.title = (ae = E.props) == null ? void 0 : ae.title, fe.paneKey = Le || J || String(V), fe.disabled = (de = E.props) == null ? void 0 : de.disabled;
          }
          s.value.push(fe);
        } else {
          if (E.children == " ")
            return;
          l(E.children);
        }
      });
    }, i = P(e.modelValue || 0), r = (S) => {
      let E = s.value.findIndex((V) => V.paneKey == S);
      s.value.length == 0 || E == -1 || (i.value = E);
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
      s.value = [], S = S == null ? void 0 : S.filter((V) => typeof V.children != "string"), S && S.length && l(S), r(e.modelValue), Te(() => {
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
          let E = Oe(a.value).top + c(), V = Math.ceil(E - e.top);
          window.scrollTo({
            top: V,
            behavior: "smooth"
          });
        }
      }
    ), ve(b), gt(b);
    const $ = {
      isBegin: () => i.value == 0,
      isEnd: () => i.value == s.value.length - 1,
      next: () => {
        i.value += 1;
        const S = s.value[i.value].disabled;
        if ($.isEnd() && S) {
          $.prev();
          return;
        }
        if (S && i.value < s.value.length - 1) {
          $.next();
          return;
        }
        $.updateValue(s.value[i.value]);
      },
      prev: () => {
        i.value -= 1;
        const S = s.value[i.value].disabled;
        if ($.isBegin() && S) {
          $.next();
          return;
        }
        if (S && i.value > 0) {
          $.prev();
          return;
        }
        $.updateValue(s.value[i.value]);
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
    }, { tabsContentRef: h, touchState: w, touchMethods: I } = vc(e, $), T = N(() => {
      let S = i.value * 100;
      w.moving && (S += w.offset);
      let E = {
        transform: e.direction == "horizontal" ? `translate3d(-${S}%, 0, 0)` : `translate3d( 0,-${S}%, 0)`,
        transitionDuration: w.moving ? void 0 : `${e.animatedTime}ms`
      };
      return e.animatedTime == 0 && (E = {}), E;
    }), W = N(() => ({
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
      titles: s,
      contentStyle: T,
      tabsNavStyle: W,
      titleStyle: A,
      tabsActiveStyle: M,
      container: a,
      getScrollY: p,
      onStickyScroll: k
    }, $), I);
  }
}), wc = ["onClick"], Sc = ["onClick"];
function Cc(e, t, n, a, o, s) {
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
          ], 14, wc))), 128))
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
      ], 14, Sc))), 128))
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
const no = /* @__PURE__ */ K(kc, [["render", Cc]]), { create: Tc } = Y("tab-pane"), Nc = Tc({
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
function Dc(e, t, n, a, o, s) {
  return u(), d("view", {
    class: _(["nut-tab-pane", { inactive: e.paneKey != e.activeKey && e.autoHeight }]),
    style: L(e.paneStyle)
  }, [
    D(e.$slots, "default")
  ], 6);
}
const oo = /* @__PURE__ */ K(Nc, [["render", Dc]]), { create: Ic } = Y("indicator"), _c = Ic({
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
}), Bc = {
  key: 0,
  class: "nut-indicator--number"
}, Mc = {
  key: 1,
  class: "nut-indicator--dot"
};
function Ec(e, t, n, a, o, s) {
  return u(), d("view", {
    class: _(e.classes)
  }, [
    (u(!0), d(ee, null, re(e.size, (l) => (u(), d(ee, { key: l }, [
      l === e.current ? (u(), d("view", Bc, B(e.fillZero && e.padZero(l) || l), 1)) : (u(), d("view", Mc))
    ], 64))), 128))
  ], 2);
}
const Lc = /* @__PURE__ */ K(_c, [["render", Ec]]), { create: Pc } = Y("side-navbar"), Ac = Pc({
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
    }), a = (s, l = 1) => {
      var i;
      for (let r = 0; r < s.length; r++) {
        let p = s[r];
        (i = p == null ? void 0 : p.children) != null && i[0] && (p.children[0].style.paddingLeft = +e.offset * l + "px", p.className.includes("nut-side-navbar-item") || a(Array.from(p.children[1].children), ++n.count));
      }
      n.count--;
    }, o = () => {
      let s = t.value.childNodes;
      s.length && (s = Array.from(s).filter((l) => l.nodeType !== 3).map((l) => l), a(s));
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
}), zc = { class: "nut-side-navbar" }, Vc = { class: "nut-side-navbar__content" }, Oc = {
  ref: "list",
  class: "nut-side-navbar__content__list"
};
function Hc(e, t, n, a, o, s) {
  return u(), d("view", zc, [
    m("view", Vc, [
      m("view", Oc, [
        D(e.$slots, "default")
      ], 512)
    ])
  ]);
}
const Rc = /* @__PURE__ */ K(Ac, [["render", Hc]]), { create: Fc } = Y("side-navbar-item"), Wc = Fc({
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
}), Yc = ["ikey"], jc = { class: "nut-side-navbar-item__title" };
function Kc(e, t, n, a, o, s) {
  return u(), d("view", {
    class: "nut-side-navbar-item",
    ikey: e.ikey,
    onClick: t[0] || (t[0] = Ne((...l) => e.handleClick && e.handleClick(...l), ["stop"]))
  }, [
    m("span", jc, B(e.title), 1)
  ], 8, Yc);
}
const Uc = /* @__PURE__ */ K(Wc, [["render", Kc]]), { create: Xc } = Y("sub-side-navbar"), qc = Xc({
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
  components: { ArrowDown2: tl, ArrowUp2: al },
  emits: ["titleClick"],
  setup: (e, { emit: t }) => {
    const n = ue({
      direction: ""
    }), a = N(() => ({
      height: n.direction ? "0px" : "auto"
    })), o = () => {
      t("titleClick"), n.direction = n.direction ? "" : "up";
    };
    return ve(() => {
      n.direction = e.open ? "" : "up";
    }), ce(G({}, me(n)), {
      style: a,
      handleClick: o
    });
  }
}), Gc = ["ikey"], Zc = { class: "nut-sub-side-navbar__title__text" }, Jc = { class: "nut-sub-side-navbar__title__icon" };
function Qc(e, t, n, a, o, s) {
  const l = j("ArrowDown2"), i = j("ArrowUp2");
  return u(), d("view", {
    class: "nut-sub-side-navbar",
    ikey: e.ikey
  }, [
    m("view", {
      class: "nut-sub-side-navbar__title",
      onClick: t[0] || (t[0] = Ne((...r) => e.handleClick && e.handleClick(...r), ["stop"]))
    }, [
      m("span", Zc, B(e.title), 1),
      m("span", Jc, [
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
  ], 8, Gc);
}
const xc = /* @__PURE__ */ K(qc, [["render", Qc]]), { componentName: ed, create: td } = Y("range"), nd = td({
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
    let a, o;
    const s = P(), l = P(), i = Ge(), r = N(() => {
      const { marks: F, max: oe, min: q } = e;
      return Object.keys(F).map(parseFloat).sort((U, ae) => U - ae).filter((U) => U >= +q && U <= +oe);
    }), p = N(() => Number(e.max) - Number(e.min)), f = N(() => {
      const F = ed;
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
    }, W = (F, oe) => JSON.stringify(F) === JSON.stringify(oe), M = (F) => F[0] > F[1] ? F.slice(0).reverse() : F, A = (F, oe) => {
      b(F) ? F = M(F).map(T) : F = T(F), W(F, e.modelValue) || t("update:modelValue", F), oe && !W(F, a) && t("change", F);
    }, S = (F) => {
      if (e.disabled)
        return;
      const { min: oe, modelValue: q } = e, H = Oe(s);
      let ne = F.clientX - H.left, U = H.width;
      e.vertical && (ne = F.clientY - H.top, U = H.height);
      const ae = Number(oe) + ne / U * p.value;
      if (b(q)) {
        const [de, fe] = q, be = (de + fe) / 2;
        ae <= be ? A([ae, fe], !0) : A([de, ae], !0);
      } else
        A(ae, !0);
    }, E = (F) => {
      e.disabled || (i.start(F), o = e.modelValue, b(o) ? a = o.map(T) : a = T(o), l.value = "start");
    }, V = (F) => {
      if (e.disabled)
        return;
      l.value === "start" && t("dragStart"), i.move(F), l.value = "draging";
      const oe = Oe(s);
      let q = i.deltaX.value, H = oe.width, ne = q / H * p.value;
      e.vertical && (q = i.deltaY.value, H = oe.height, ne = q / H * p.value), b(a) ? o[n.value] = a[n.value] + ne : o = a + ne, A(o);
    }, X = () => {
      e.disabled || (l.value === "draging" && (A(o, !0), t("dragEnd")), l.value = "");
    }, Z = (F) => Ut(e.modelValue) && typeof F == "number" ? e.modelValue[F] : Number(e.modelValue);
    return ce(G({
      root: s,
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
}), od = {
  key: 0,
  class: "nut-range-min"
}, ld = {
  key: 0,
  class: "nut-range-mark"
}, sd = ["tabindex", "aria-valuemin", "aria-valuenow", "aria-valuemax", "onTouchstart"], ad = {
  key: 0,
  class: "number"
}, id = ["tabindex", "aria-valuemin", "aria-valuenow", "aria-valuemax"], rd = {
  key: 0,
  class: "number"
}, ud = {
  key: 1,
  class: "nut-range-max"
};
function cd(e, t, n, a, o, s) {
  return u(), d("view", {
    class: _(e.containerClasses)
  }, [
    e.hiddenRange ? C("", !0) : (u(), d("view", od, B(+e.min), 1)),
    m("view", {
      ref: "root",
      style: L(e.wrapperStyle),
      class: _(e.classes),
      onClick: t[9] || (t[9] = Ne((...l) => e.onClick && e.onClick(...l), ["stop"]))
    }, [
      e.marksList.length > 0 ? (u(), d("view", ld, [
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
            e.hiddenTag ? C("", !0) : (u(), d("view", ad, B(e.curValue(l)), 1))
          ], 4))
        ], 42, sd)), 64)) : (u(), d("view", {
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
            e.hiddenTag ? C("", !0) : (u(), d("view", rd, B(e.curValue()), 1))
          ], 4))
        ], 40, id))
      ], 4)
    ], 6),
    e.hiddenRange ? C("", !0) : (u(), d("view", ud, B(+e.max), 1))
  ], 2);
}
const lo = /* @__PURE__ */ K(nd, [["render", cd]]), { create: dd } = Y("searchbar"), fd = "NutSearchbar", pd = dd({
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
    const n = ke(fd), a = ue({
      active: !1
    }), o = N(() => ({
      background: e.background
    })), s = N(() => ({
      background: e.inputBackground
    })), l = ($) => {
      let w = $.target.value;
      e.maxLength && w.length > Number(e.maxLength) && (w = w.slice(0, Number(e.maxLength))), t("update:modelValue", w, $), t("change", w, $);
    }, i = P({}), r = ($) => {
      let w = $.target.value;
      a.active = !0, i.value = e.focusStyle, t("focus", w, $);
    }, p = ($) => {
      setTimeout(() => {
        a.active = !1;
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
      renderIcon: at,
      inputsearch: c
    }, me(a)), {
      valueChange: l,
      valueFocus: r,
      valueBlur: p,
      handleClear: f,
      handleSubmit: y,
      searchbarStyle: o,
      inputSearchbarStyle: s,
      focusCss: i,
      translate: n,
      clickInput: g,
      leftIconClick: v,
      rightIconClick: b,
      styleSearchbar: k
    });
  }
}), md = {
  key: 0,
  class: "nut-searchbar__search-label"
}, hd = {
  key: 1,
  class: "nut-searchbar__search-icon nut-searchbar__left-search-icon"
}, gd = ["type", "maxlength", "placeholder", "value", "disabled", "readonly"], yd = {
  key: 1,
  class: "nut-searchbar__search-icon nut-searchbar__iptright-search-icon"
}, vd = {
  key: 2,
  class: "nut-searchbar__search-icon nut-searchbar__right-search-icon"
};
function $d(e, t, n, a, o, s) {
  return u(), d("view", {
    class: _(["nut-searchbar", { "safe-area-inset-bottom": e.safeAreaInsetBottom }]),
    style: L(e.searchbarStyle)
  }, [
    e.label ? (u(), d("span", md, B(e.label), 1)) : C("", !0),
    e.$slots.leftout ? (u(), d("view", hd, [
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
          }, null, 46, gd)
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
        e.$slots.rightin ? (u(), d("view", yd, [
          D(e.$slots, "rightin")
        ])) : C("", !0)
      ], 2)
    ], 6),
    e.$slots.rightout ? (u(), d("view", vd, [
      D(e.$slots, "rightout")
    ])) : C("", !0)
  ], 6);
}
const bd = /* @__PURE__ */ K(pd, [["render", $d]]), Tt = (e, t, n) => e.map((a) => {
  const { value: o = "value", text: s = "text", children: l = "children" } = n, g = a, { [o]: i, [s]: r, [l]: p } = g, f = Pt(g, [kt(o), kt(s), kt(l)]), y = ce(G({
    loading: !1
  }, f), {
    level: t ? (t && t.level || 0) + 1 : 0,
    value: i,
    text: r,
    children: p,
    _parent: t
  });
  return y.children && y.children.length && (y.children = Tt(y.children, y, n)), y;
}), so = (e, t) => {
  let n = 0, a;
  for (; (a = e[n++]) && t(a) !== !0; )
    a.children && a.children.length && so(a.children, t);
}, kd = {
  topId: null,
  idKey: "id",
  pidKey: "pid",
  sortKey: ""
}, wd = (e, t) => {
  const n = G(G({}, kd), t || {}), { topId: a, idKey: o, pidKey: s, sortKey: l } = n;
  let i = [], r = {};
  return e.forEach((p) => {
    p = G({}, p);
    const { [o]: f, [s]: y } = p, g = r[y] = r[y] || [];
    !i.length && y === a && (i = g), g.push(p), p.children = r[f] || (r[f] = []);
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
    return so(this.nodes, (a) => {
      if (a.value === t)
        return n = a, !0;
    }), n;
  }
  getPathNodesByValue(t) {
    if (!t.length)
      return [];
    const n = [];
    let a = this.nodes;
    for (; a && a.length; ) {
      const o = a.find((s) => s.value === t[s.level]);
      if (!o)
        break;
      n.push(o), a = o.children;
    }
    return n;
  }
  isLeaf(t, n) {
    const { leaf: a, children: o } = t, s = Array.isArray(o) && !!o.length;
    return a || !s && !n;
  }
  hasChildren(t, n) {
    if (this.isLeaf(t, n))
      return !1;
    const { children: o } = t;
    return Array.isArray(o) && !!o.length;
  }
}
const { create: Sd } = Y("cascader-item"), Cd = Sd({
  components: {
    Loading: xe,
    Checklist: El,
    NutTabs: no,
    NutTabPane: oo
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
    const n = ke(), a = N(() => ({
      lazy: e.lazy,
      lazyLoad: e.lazyLoad,
      valueKey: e.valueKey,
      textKey: e.textKey,
      childrenKey: e.childrenKey,
      convertConfig: e.convertConfig
    })), o = P(0), s = P(!1), l = P(e.modelValue), i = P(new vn([], {})), r = P([]), p = N(() => a.value.lazy && !!a.value.lazyLoad), f = /* @__PURE__ */ new Map();
    let y;
    const g = () => Ue(this, null, function* () {
      f.clear(), r.value = [], o.value = 0, s.value = !1, y = null;
      let { options: h } = e;
      a.value.convertConfig && (h = wd(h, a.value.convertConfig)), i.value = new vn(h, {
        value: a.value.valueKey,
        text: a.value.textKey,
        children: a.value.childrenKey
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
          w = [I.value], s.value = !0;
          const T = yield h.slice(1).reduce((W, M) => Ue(this, null, function* () {
            var E;
            const A = yield W;
            yield b(A);
            const S = (E = A == null ? void 0 : A.children) == null ? void 0 : E.find((V) => V.value === M);
            return S && w.push(M), Promise.resolve(S);
          }), Promise.resolve(I));
          yield b(T), s.value = !1;
        }
      }
      w.length && h === e.modelValue && i.value.getPathNodesByValue(w).map((T, W) => {
        o.value = W, c.handleNode(T, !0);
      });
    }), b = (h) => Ue(this, null, function* () {
      if (!h)
        return;
      if (!a.value.lazyLoad) {
        h.leaf = !0;
        return;
      }
      if (i.value.isLeaf(h, p.value) || i.value.hasChildren(h, p.value))
        return;
      h.loading = !0;
      const w = h.root ? null : h;
      let I = f.get(h);
      I || (I = new Promise((W) => {
        var M, A;
        (A = (M = a.value).lazyLoad) == null || A.call(M, h, W);
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
                const W = r.value.map((M) => M.selectedNode);
                k(W), t("pathChange", W);
              }
              return;
            }
            if (i.value.hasChildren(h, p.value)) {
              const W = h.level + 1;
              if (r.value[o.value].selectedNode = h, r.value = r.value.slice(0, W), r.value.push({
                nodes: h.children || [],
                selectedNode: null
              }), o.value = W, !w) {
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
      [a, () => e.options],
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
    ), G({ panes: r, initLoading: s, tabsCursor: o }, c);
  }
}), Td = {
  role: "menu",
  class: "nut-cascader-pane"
}, Nd = ["aria-checked", "aria-disabled", "onClick"], Dd = { class: "nut-cascader-item__title" }, Id = /* @__PURE__ */ m("view", { class: "nut-cascader-pane" }, null, -1);
function _d(e, t, n, a, o, s) {
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
          m("view", Td, [
            (u(!0), d(ee, null, re(f.nodes, (g) => (u(), d("view", {
              key: g.value,
              class: _(["nut-cascader-item", { active: e.isSelected(f, g), disabled: g.disabled }]),
              "aria-checked": e.isSelected(f, g),
              "aria-disabled": g.disabled || void 0,
              role: "menuitemradio",
              onClick: (v) => e.handleNode(g, !1)
            }, [
              m("view", Dd, B(g.text), 1),
              g.loading ? (u(), x(l, {
                key: 0,
                class: "nut-cascader-item__icon-loading",
                name: "loading"
              })) : (u(), x(i, {
                key: 1,
                class: "nut-cascader-item__icon-check",
                name: "checklist"
              }))
            ], 10, Nd))), 128))
          ])
        ]),
        _: 2
      }, 1032, ["title"]))), 128)) : (u(), x(r, {
        key: 1,
        title: "Loading..."
      }, {
        default: te(() => [
          Id
        ]),
        _: 1
      }))
    ]),
    _: 1
  }, 8, ["modelValue", "onClick"]);
}
const Bd = /* @__PURE__ */ K(Cd, [["render", _d]]), { create: Md } = Y("cascader"), Ed = Md({
  components: {
    NutCascaderItem: Bd,
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
    const n = P(e.modelValue), a = N({
      get() {
        return e.visible;
      },
      set(l) {
        t("update:visible", l);
      }
    }), o = (l, i) => {
      n.value = l, a.value = !1, t("change", l, i), t("update:modelValue", l);
    }, s = (l) => {
      t("pathChange", l);
    };
    return Q(
      () => e.modelValue,
      (l) => {
        l !== n.value && (n.value = l);
      }
    ), {
      onChange: o,
      onPathChange: s,
      innerValue: n,
      innerVisible: a
    };
  }
}), Ld = ["innerHTML"];
function Pd(e, t, n, a, o, s) {
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
      }, null, 8, Ld)) : C("", !0),
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
const Ad = /* @__PURE__ */ K(Ed, [["render", Pd]]), pe = {
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
    let a = (/* @__PURE__ */ new Date(e + "/" + t + "/01")).getDay();
    return a == 0 && (a = 7), a;
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
    const n = e.getFullYear(), a = this.getNumTwoBit(e.getMonth() + 1), o = this.getNumTwoBit(e.getDate());
    return [n, a, o].join(t);
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
    const n = new Date(e.replace("-", "/").replace("-", "/")), a = new Date(t.replace("-", "/").replace("-", "/"));
    return !(n >= a);
  },
  /**
   * 时间是否相等
   * @return {Boolean}
   */
  isEqual: function(e, t) {
    const n = new Date(e).getTime(), a = new Date(t).getTime();
    return n == a;
  },
  getMonthWeek: function(e, t, n, a = 0) {
    const o = new Date(Number(e), parseInt(t) - 1, Number(n));
    let s = o.getDay(), l = o.getDate(), i = 6 - s;
    return a !== 0 && (s = s == 0 ? 7 : s, i = 7 - s), Math.ceil((l + i) / 7);
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getYearWeek: function(e, t, n, a = 0) {
    const o = new Date(Number(e), parseInt(t) - 1, Number(n)), s = new Date(Number(e), 0, 1), l = Math.round((o.valueOf() - s.valueOf()) / 864e5);
    return Math.ceil((l + (s.getDay() + 1 - 1)) / 7);
  },
  getWeekDate: function(e, t, n, a = 0) {
    const o = new Date(Number(e), parseInt(t) - 1, Number(n)), s = o.getTime();
    let l = o.getDay();
    if (a === 0) {
      const r = s - l * 864e5, p = s + (6 - l) * 864e5, f = this.date2Str(new Date(r)), y = this.date2Str(new Date(p));
      return [f, y];
    } else {
      l = l == 0 ? 7 : l;
      const i = 24 * 60 * 60 * 1e3, r = s - (l - 1) * i, p = s + (7 - l) * i, f = this.date2Str(new Date(r)), y = this.date2Str(new Date(p));
      return [f, y];
    }
  },
  formatResultDate: function(e) {
    let t = [...e.split("-")];
    return t[2] = pe.getNumTwoBit(Number(t[2])), t[3] = `${t[0]}-${t[1]}-${t[2]}`, t[4] = pe.getWhatDay(+t[0], +t[1], +t[2]), t;
  }
}, { create: zd } = Y("calendar-item"), Vd = "NutCalendarItem", Od = zd({
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
  setup(e, { emit: t, slots: n, expose: a }) {
    const o = ke(Vd), s = o("weekdays").map((O, J) => ({
      day: O,
      weekend: J === 0 || J === 6
    })), l = P([...s.slice(e.firstDayOfWeek, 7), ...s.slice(0, e.firstDayOfWeek)]), i = P(null), r = P(null), p = P(null), f = P(null), y = P(0), g = N(() => c.monthsData.slice(c.defaultRange[0], c.defaultRange[1])), v = N(() => n.btn), b = N(() => n["top-info"]), k = N(() => n["bottom-info"]), c = ue({
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
    }, T = (O, J) => J.curData[0] + "-" + J.curData[1] + "-" + pe.getNumTwoBit(+O.day), W = (O, J, se) => {
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
      if (!W(O, J).includes(`${c.dayPrefix}--disabled`)) {
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
        c.monthsData.forEach((Et, Bo) => {
          Et.title == o("monthTitle", ze[0], ze[1]) && (Ye = Bo);
        }), A({ day: ze[2], type: "curr" }, c.monthsData[Ye], !0);
      }) : A({ day: c.defaultData[2], type: "curr" }, c.monthsData[c.currentIndex], !0));
      let $e = c.monthsData[c.monthsData.length - 1], Se = $e.cssHeight + $e.cssScrollHeight;
      Ve(() => {
        i != null && i.value && (r != null && r.value) && (f != null && f.value) && (y.value = i.value.clientHeight, r.value.style.height = `${Se}px`, i.value.scrollTop = c.monthsData[c.currentIndex].cssScrollHeight);
      }), c.avgHeight = Math.floor(Se / (he + 1));
    };
    a({
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
    }, ne = (O, J) => (e.type == "range" || e.type == "week") && O.type == "curr" && W(O, J).includes("nut-calendar__day--active"), U = (O, J) => ne(O, J) && h(T(O, J)), ae = (O, J) => c.currDate.length >= 2 && w(T(O, J)) ? ne(O, J) : !1, de = () => {
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
      getClass: W,
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
}), Hd = { class: "nut-calendar__header" }, Rd = {
  key: 0,
  class: "nut-calendar__header-title"
}, Fd = {
  key: 1,
  class: "nut-calendar__header-slot"
}, Wd = {
  key: 2,
  class: "nut-calendar__header-subtitle"
}, Yd = {
  ref: "weeksPanel",
  class: "nut-calendar__weekdays"
}, jd = {
  ref: "monthsPanel",
  class: "nut-calendar__panel"
}, Kd = { class: "nut-calendar__month-title" }, Ud = { class: "nut-calendar__days" }, Xd = ["onClick"], qd = { class: "nut-calendar__day-value" }, Gd = {
  key: 0,
  class: "nut-calendar__day-tips nut-calendar__day-tips--top"
}, Zd = {
  key: 1,
  class: "nut-calendar__day-tips nut-calendar__day-tips--bottom"
}, Jd = {
  key: 2,
  class: "nut-calendar__day-tips--curr"
}, Qd = {
  key: 4,
  class: "nut-calendar__day-tip"
}, xd = {
  key: 0,
  class: "nut-calendar__footer"
};
function ef(e, t, n, a, o, s) {
  return u(), d("view", {
    class: _(["nut-calendar", {
      "nut-calendar--nopop": !e.poppable,
      "nut-calendar--nofooter": e.isAutoBackFill
    }])
  }, [
    m("view", Hd, [
      e.showTitle ? (u(), d("view", Rd, B(e.title || e.translate("title")), 1)) : C("", !0),
      e.showTopBtn ? (u(), d("view", Fd, [
        D(e.$slots, "btn")
      ])) : C("", !0),
      e.showSubTitle ? (u(), d("view", Wd, B(e.yearMonthTitle), 1)) : C("", !0),
      m("view", Yd, [
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
      m("view", jd, [
        m("view", {
          ref: "viewArea",
          class: "nut-calendar__body",
          style: L({ transform: `translateY(${e.translateY}px)` })
        }, [
          (u(!0), d(ee, null, re(e.compConthsData, (l, i) => (u(), d("view", {
            key: i,
            class: "nut-calendar__month"
          }, [
            m("view", Kd, B(l.title), 1),
            m("view", Ud, [
              m("view", {
                class: _(["nut-calendar__days-item", e.type === "range" ? "nut-calendar__days-item--range" : ""])
              }, [
                (u(!0), d(ee, null, re(l.monthData, (r, p) => (u(), d("view", {
                  key: p,
                  class: _(["nut-calendar__day", e.getClass(r, l, p)]),
                  onClick: (f) => e.chooseDay(r, l)
                }, [
                  m("view", qd, [
                    D(e.$slots, "day", {
                      date: r.type == "curr" ? r : ""
                    }, () => [
                      ge(B(r.type == "curr" ? r.day : ""), 1)
                    ])
                  ]),
                  e.topInfo ? (u(), d("view", Gd, [
                    D(e.$slots, "top-info", {
                      date: r.type == "curr" ? r : ""
                    })
                  ])) : C("", !0),
                  e.bottomInfo ? (u(), d("view", Zd, [
                    D(e.$slots, "bottom-info", {
                      date: r.type == "curr" ? r : ""
                    })
                  ])) : C("", !0),
                  !e.bottomInfo && e.showToday && e.isCurrDay(r) ? (u(), d("view", Jd, B(e.translate("today")), 1)) : C("", !0),
                  e.isStartTip(r, l) ? (u(), d("view", {
                    key: 3,
                    class: _(["nut-calendar__day-tip", { "nut-calendar__day-tips--top": e.rangeTip() }])
                  }, B(e.startText || e.translate("start")), 3)) : C("", !0),
                  e.isEndTip(r, l) ? (u(), d("view", Qd, B(e.endText || e.translate("end")), 1)) : C("", !0)
                ], 10, Xd))), 128))
              ], 2)
            ])
          ]))), 128))
        ], 4)
      ], 512)
    ], 544),
    e.poppable && !e.isAutoBackFill ? (u(), d("view", xd, [
      D(e.$slots, "footer-info", { date: e.chooseData }, () => [
        m("view", {
          class: "nut-calendar__confirm",
          onClick: t[1] || (t[1] = (...l) => e.confirm && e.confirm(...l))
        }, B(e.confirmText || e.translate("confirm")), 1)
      ])
    ])) : C("", !0)
  ], 2);
}
const ao = /* @__PURE__ */ K(Od, [["render", ef]]), { create: tf } = Y("calendar"), nf = tf({
  components: {
    NutCalendarItem: ao,
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
  setup(e, { emit: t, slots: n, expose: a }) {
    const o = N({
      get() {
        return e.visible;
      },
      set(w) {
        t("update:visible", w);
      }
    }), s = N(() => n.btn), l = N(() => n["top-info"]), i = N(() => n.day), r = N(() => n["bottom-info"]), p = N(() => n["footer-info"]), f = P(null);
    a({
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
      showTopBtn: s,
      topInfo: l,
      dayInfo: i,
      bottomInfo: r,
      footerInfo: p
    };
  }
});
function of(e, t, n, a, o, s) {
  const l = j("nut-calendar-item"), i = j("nut-popup");
  return e.poppable ? (u(), x(i, mt({
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
      }, ht({ _: 2 }, [
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
  }, ht({ _: 2 }, [
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
const lf = /* @__PURE__ */ K(nf, [["render", of]]), io = Symbol("nut-checkbox"), { create: sf, componentName: Ze } = Y("checkbox"), af = sf({
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
    const a = Be(io, null), o = ue({
      partialSelect: e.indeterminate
    }), s = N(() => !!a), l = N(() => s.value ? a.value.value.includes(e.label) : e.modelValue), i = N(() => s.value && a.disabled.value ? a.disabled.value : e.disabled), r = N(() => !!e.modelValue), p = N(() => i.value ? "nut-checkbox__icon--disable" : o.partialSelect ? "nut-checkbox__icon--indeterminate" : l.value ? "nut-checkbox__icon" : "nut-checkbox__icon--unchecked");
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
        CheckDisabled: n.indeterminate ? n.indeterminate : hl
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
        if (y(!r.value, ($ = n.default) == null ? void 0 : $.call(n)[0].children), s.value) {
          const h = a.value.value, w = a.max.value, { label: I } = e, T = h.indexOf(I);
          T > -1 ? h.splice(T, 1) : T <= -1 && (h.length < w || !w) && h.push(I), a.updateValue(h);
        }
      }
    };
    return ve(() => {
      s.value && a.link(Fe());
    }), Yt(() => {
      s.value && a.unlink(Fe());
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
}), { create: rf, componentName: uf } = Y("checkbox-group"), cf = rf({
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
  setup(e, { slots: t, emit: n, expose: a }) {
    const o = ue({
      children: []
    }), s = (f) => {
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
    return Me(io, {
      value: N(() => e.modelValue),
      disabled: N(() => e.disabled),
      max: N(() => e.max),
      updateValue: i,
      link: s,
      unlink: l
    }), Q(
      () => e.modelValue,
      (f) => {
        n("change", f);
      }
    ), a({ toggleAll: r, toggleReverse: p }), () => {
      var f;
      return we(
        "view",
        {
          class: uf
        },
        (f = t.default) == null ? void 0 : f.call(t)
      );
    };
  }
}), df = {
  text: "text",
  value: "value",
  children: "children"
}, ff = (e, t) => {
  const n = ue({
    formattedColumns: e.columns
  }), a = N(() => G(G({}, df), e.fieldNames)), o = P([]), s = N(() => {
    const c = a.value;
    return f.value.map(($, h) => {
      const w = $.findIndex((I) => I[c.value] === o.value[h]);
      return w === -1 ? 0 : w;
    });
  }), l = P([]), i = (c) => {
    c && l.value.length < f.value.length && l.value.push(c);
  }, r = N(() => {
    const c = a.value;
    return f.value.map(($, h) => $.find((w) => w[c.value] === o.value[h]) || $[0]);
  }), p = N(() => {
    const c = n.formattedColumns[0], $ = a.value;
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
    const h = [], w = a.value;
    let I = {
      text: "",
      value: "",
      [w.children]: c
    }, T = 0;
    for (; I && I[w.children]; ) {
      const W = I[w.children], M = $[T];
      let A = W.findIndex((S) => S[w.value] === M);
      A === -1 && (A = 0), I = I[w.children][A], T++, h.push(W);
    }
    return h;
  }, g = () => {
    t("cancel", {
      selectedValue: o.value,
      selectedOptions: r.value
    });
  }, v = (c, $) => {
    var w;
    const h = a.value;
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
    const c = a.value;
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
    columnFieldNames: a,
    cancel: g,
    changeHandler: v,
    confirm: b,
    defaultValues: o,
    defaultIndexes: s,
    pickerColumn: l,
    swipeRef: i,
    selectedOptions: r,
    isSameValue: k
  });
}, { create: pf } = Y("picker-column"), mf = pf({
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
    const n = Ge(), a = ue({
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
    }), o = P(null), s = P(!1), l = P(0), i = P(0), r = 200, p = 300, f = 15, y = N(() => ({
      transition: `transform ${i.value}ms cubic-bezier(0.17, 0.89, 0.45, 1)`,
      transform: `rotate3d(1, 0, 0, ${l.value})`,
      top: `calc(50% - ${+e.optionHeight / 2}px)`
    })), g = N(() => {
      const { optionHeight: S } = e;
      return {
        transition: `transform ${i.value}ms cubic-bezier(0.17, 0.89, 0.45, 1)`,
        transform: `translate3d(0, ${a.scrollDistance}px, 0)`,
        top: `calc(50% - ${+S / 2}px)`,
        height: `${S}px`
      };
    }), v = (S) => `transform: rotate3d(1, 0, 0, ${-a.rotation * S}deg) translate3d(0px, 0px, 104px)`, b = N(() => ({
      backgroundSize: `100% ${(+e.visibleOptionNum - 1) * +e.optionHeight / 2}px`
    })), k = (S) => {
      if (n.start(S), s.value && !e.taro) {
        const E = o.value, { transform: V } = window.getComputedStyle(E);
        if (e.threeDimensional) {
          const X = Math.floor(parseInt(l.value) / 360), Z = +V.split(", ")[5], F = +V.split(", ")[6] < 0 ? 180 : 0, oe = X * 360 + Math.acos(Z) / Math.PI * 180 + F;
          a.scrollDistance = -Math.abs((oe / a.rotation - 1) * +e.optionHeight);
        } else
          a.scrollDistance = +V.slice(7, V.length - 1).split(", ")[5];
      }
      lt(S, !0), a.touchParams.startY = n.deltaY.value, a.touchParams.startTime = Date.now(), a.transformY = a.scrollDistance;
    }, c = (S) => {
      n.move(S), n.isVertical() && (s.value = !0, lt(S, !0)), a.touchParams.lastY = n.deltaY.value;
      let E = a.touchParams.lastY - a.touchParams.startY;
      T(E);
    }, $ = () => {
      a.touchParams.lastY = n.deltaY.value, a.touchParams.lastTime = Date.now();
      let S = a.touchParams.lastY - a.touchParams.startY, E = a.touchParams.lastTime - a.touchParams.startTime;
      if (E <= p && Math.abs(S) > f) {
        const V = h(S, E);
        T(V, "end", +e.swipeDuration);
        return;
      } else
        T(S, "end");
      setTimeout(() => {
        n.reset(), s.value = !1;
      }, 0);
    }, h = (S, E) => (S = Math.abs(S / E) / 3e-3 * (S < 0 ? -1 : 1), S), w = (S) => S >= a.currIndex + 8 || S <= a.currIndex - 8, I = (S = 0, E, V = r, X) => {
      E === "end" ? i.value = V : i.value = 0, l.value = X, a.scrollDistance = S;
    }, T = (S, E, V) => {
      const { optionHeight: X } = e;
      let Z = S + a.transformY;
      if (E === "end") {
        Z > 0 && (Z = 0), Z < -(e.column.length - 1) * +X && (Z = -(e.column.length - 1) * +X);
        let F = Math.round(Z / +X) * +X, oe = `${(Math.abs(Math.round(F / +X)) + 1) * a.rotation}deg`;
        I(F, E, V, oe), a.currIndex = Math.abs(Math.round(F / +X)) + 1;
      } else {
        let F = 0, oe = (-Z / +X + 1) * a.rotation;
        const q = (e.column.length + 1) * a.rotation, H = 0;
        F = Pe(oe, H, q), H < F && F < q && (I(Z, null, void 0, F + "deg"), a.currIndex = Math.abs(Math.round(Z / +X)) + 1);
      }
    }, W = () => {
      t("change", e.column[a.currIndex - 1]);
    }, M = (S) => {
      const { column: E } = e;
      let V = E.findIndex((Z) => Z[e.fieldNames.value] === e.value);
      a.currIndex = V === -1 ? 1 : V + 1;
      let X = V === -1 ? 0 : V * +e.optionHeight;
      S && W(), T(-X);
    }, A = () => {
      s.value = !1, i.value = 0, W();
    };
    return Q(
      () => e.column,
      () => {
        e.column && e.column.length > 0 && (a.transformY = 0, M(!1));
      },
      {
        deep: !0
      }
    ), Q(
      () => e.value,
      () => {
        a.transformY = 0, M(!1);
      },
      {
        deep: !0
      }
    ), ve(() => {
      M(!0);
    }), ce(G(G({}, me(a)), me(e)), {
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
function hf(e, t, n, a, o, s) {
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
const gf = /* @__PURE__ */ K(mf, [["render", hf]]), yf = {
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
}, { create: vf } = Y("picker"), $f = "NutPicker", bf = vf({
  components: {
    NutPickerColumn: gf
  },
  props: yf,
  emits: ["cancel", "change", "confirm", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = ke($f), { changeHandler: a, confirm: o, defaultValues: s, columnsList: l, columnsType: i, columnFieldNames: r, cancel: p } = ff(
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
      changeHandler: a,
      confirmHandler: () => {
        f.value.length > 0 && f.value.forEach((b) => {
          b.stopMomentum();
        }), o();
      },
      defaultValues: s,
      translate: n,
      pickerColumn: f,
      swipeRef: y,
      columnStyle: g
    };
  }
}), kf = { class: "nut-picker" }, wf = {
  key: 0,
  class: "nut-picker__bar"
}, Sf = { class: "nut-picker__title" };
function Cf(e, t, n, a, o, s) {
  const l = j("nut-picker-column");
  return u(), d("div", kf, [
    e.showToolbar ? (u(), d("view", wf, [
      m("view", {
        class: "nut-picker__left",
        onClick: t[0] || (t[0] = (...i) => e.cancel && e.cancel(...i))
      }, B(e.cancelText || e.translate("cancel")), 1),
      m("view", Sf, B(e.title), 1),
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
const ro = /* @__PURE__ */ K(bf, [["render", Cf]]), { create: Tf } = Y("date-picker"), $n = (/* @__PURE__ */ new Date()).getFullYear();
function At(e) {
  return jo(e) && !isNaN(e.getTime());
}
const Nf = {
  day: "日",
  year: "年",
  month: "月",
  hour: "时",
  minute: "分",
  seconds: "秒"
}, Df = Tf({
  components: {
    NutPicker: ro
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
    }), a = (c) => {
      At(c) || (c = e.minDate);
      let $ = Math.max(c.getTime(), e.minDate.getTime());
      return $ = Math.min($, e.maxDate.getTime()), new Date($);
    };
    function o(c, $) {
      return 32 - new Date(c, $ - 1, 32).getDate();
    }
    const s = (c, $) => {
      const h = c == "min" ? e.minDate : e.maxDate, w = h.getFullYear();
      let I = 1, T = 1, W = 0, M = 0;
      c === "max" && (I = 12, T = o($.getFullYear(), $.getMonth() + 1), W = 23, M = 59);
      let A = M;
      return $.getFullYear() === w && (I = h.getMonth() + 1, $.getMonth() + 1 === I && (T = h.getDate(), $.getDate() === T && (W = h.getHours(), $.getHours() === W && (M = h.getMinutes(), $.getMinutes() === M && (A = h.getSeconds()))))), {
        [`${c}Year`]: w,
        [`${c}Month`]: I,
        [`${c}Date`]: T,
        [`${c}Hour`]: W,
        [`${c}Minute`]: M,
        [`${c}Seconds`]: A
      };
    }, l = N(() => {
      const { maxYear: c, maxDate: $, maxMonth: h, maxHour: w, maxMinute: I, maxSeconds: T } = s("max", n.currentDate), { minYear: W, minDate: M, minMonth: A, minHour: S, minMinute: E, minSeconds: V } = s("min", n.currentDate);
      return b([
        {
          type: "year",
          range: [W, c]
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
      const I = Number(w[0]), T = Number(w[1]) - 1, W = Math.min(Number(w[2]), o(Number(w[0]), Number(w[1])));
      let M = null;
      if (e.type === "date" || e.type === "month-day" || e.type === "year-month")
        M = new Date(I, T, W);
      else if (e.type === "datetime")
        M = new Date(I, T, W, Number(w[3]), Number(w[4]));
      else if (e.type === "datehour")
        M = new Date(I, T, W, Number(w[3]));
      else if (e.type === "hour-minute" || e.type === "time") {
        M = new Date(n.currentDate);
        const A = M.getFullYear(), S = M.getMonth(), E = M.getDate();
        M = new Date(A, S, E, Number(w[0]), Number(w[1]), Number(w[2] || 0));
      }
      n.currentDate = a(M), t("change", { columnIndex: c, selectedValue: $, selectedOptions: h });
    }, p = (c, $) => {
      const { formatter: h, isShowChinese: w } = e;
      let I = null;
      if (h)
        I = h(c, { text: qe($, 2), value: qe($, 2) });
      else {
        const T = qe($, 2), W = w ? Nf[c] : "";
        I = { text: T + W, value: T };
      }
      return I;
    }, f = (c, $, h, w, I) => {
      const T = [];
      let W = 0;
      for (; c <= $; )
        T.push(p(w, c)), w === "minute" ? c += e.minuteStep : c++, c <= Number(h) && W++;
      return n.selectedValue[I] = T[W].value, e.filter ? e.filter(w, T) : T;
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
      n.currentDate = a(e.modelValue);
    }), Q(
      () => e.modelValue,
      (c) => {
        const $ = a(c);
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
function If(e, t, n, a, o, s) {
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
const _f = /* @__PURE__ */ K(Df, [["render", If]]), { componentName: Bf, create: Mf } = Y("input-number"), Ef = Mf({
  components: { Minus: fa, Plus: Ea },
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
      const v = Bf;
      return {
        [v]: !0,
        [`${v}--disabled`]: e.disabled
      };
    }), a = (v) => Number(v).toFixed(Number(e.decimalPlaces)), o = (v) => {
      const b = v.target;
      t("update:modelValue", b.value, v);
    }, s = (v, b) => {
      let k = a(v);
      t("update:modelValue", k, b), Number(e.modelValue) !== Number(k) && t("change", k, b);
    }, l = (v = Number(e.modelValue)) => v < Number(e.max) && !e.disabled, i = (v = Number(e.modelValue)) => v > Number(e.min) && !e.disabled, r = (v) => {
      if (e.disabled)
        return;
      t("reduce", v);
      let b = Number(e.modelValue) - Number(e.step);
      i() && b >= Number(e.min) ? s(b, v) : (s(Number(e.min), v), t("overlimit", v, "reduce"));
    }, p = (v) => {
      if (e.disabled)
        return;
      t("add", v);
      let b = Number(e.modelValue) + Number(e.step);
      l() && b <= Number(e.max) ? s(b, v) : (s(Number(e.max), v), t("overlimit", v, "add"));
    }, f = (v) => {
      e.disabled || e.readonly || t("focus", v);
    }, y = (v) => {
      if (e.disabled || e.readonly)
        return;
      let k = v.target.valueAsNumber;
      k < Number(e.min) ? k = Number(e.min) : k > Number(e.max) && (k = Number(e.max)), s(k, v), t("blur", v);
    }, g = (v) => {
      let b = Number(v);
      return b < Number(e.min) ? b = Number(e.min) : b > Number(e.max) && (b = Number(e.max)), b;
    };
    return Q(
      () => [e.max, e.min],
      () => {
        Number(e.min) > Number(e.max) && console.warn("[NutUI] <InputNumber>", "props.max < props.min");
        const v = g(e.modelValue);
        v !== Number(e.modelValue) && s(v, {});
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
}), Lf = ["min", "max", "disabled", "readonly", "value"];
function Pf(e, t, n, a, o, s) {
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
    }, null, 44, Lf),
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
const Qt = /* @__PURE__ */ K(Ef, [["render", Pf]]);
function bn(e, t, n) {
  const a = e.indexOf(t);
  return a === -1 ? e : t === "-" && a !== 0 ? e.slice(0, a) : e.slice(0, a + 1) + e.slice(a).replace(n, "");
}
function Af(e, t = !0, n = !0) {
  t ? e = bn(e, ".", /\./g) : e = e.split(".")[0], n ? e = bn(e, "-", /-/g) : e = e.replace(/-/, "");
  const a = t ? /[^-0-9.]/g : /[^-0-9]/g;
  return e.replace(a, "");
}
function zf(e) {
  return e === "number" ? {
    type: "text",
    inputmode: "decimal"
  } : e === "digit" ? {
    type: "tel",
    inputmode: "numeric"
  } : { type: e };
}
const { componentName: Vf, create: Of } = Y("input"), Hf = Of({
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
  components: { MaskClose: ia },
  emits: ["update:modelValue", "blur", "focus", "clear", "keypress", "click", "clickInput", "confirm"],
  expose: ["focus", "blur", "select"],
  setup(e, { emit: t }) {
    const n = P(!1), a = P(), o = () => {
      var M;
      return String((M = e.modelValue) != null ? M : "");
    }, s = (M) => we("input", G({}, zf(M))), l = ue({
      focused: !1,
      validateFailed: !1,
      // 校验失败
      validateMessage: ""
      // 校验信息
    }), i = N(() => {
      const M = Vf;
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
        M = Af(M, E, E);
      }
      e.formatter && A === e.formatTrigger && (M = e.formatter(M)), ((S = a == null ? void 0 : a.value) == null ? void 0 : S.value) !== M && (a.value.value = M), M !== e.modelValue && t("update:modelValue", M);
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
      renderInput: s,
      inputRef: a,
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
        (M = a.value) == null || M.focus();
      },
      blur: () => {
        var M;
        (M = a.value) == null || M.blur();
      },
      select: () => {
        var M;
        (M = a.value) == null || M.select();
      },
      onKeyup: (M) => {
        M.key === "Enter" && t("confirm", M);
      },
      getModelValue: o
    };
  }
}), Rf = { class: "nut-input-value" }, Ff = { class: "nut-input-inner" }, Wf = {
  key: 0,
  class: "nut-input-left-box"
}, Yf = { class: "nut-input-box" }, jf = {
  key: 0,
  class: "nut-input-word-limit"
}, Kf = { class: "nut-input-word-num" }, Uf = { class: "nut-input-right-box" };
function Xf(e, t, n, a, o, s) {
  const l = j("MaskClose");
  return u(), d("view", {
    class: _(e.classes),
    onClick: t[1] || (t[1] = (...i) => e.onClick && e.onClick(...i))
  }, [
    m("view", Rf, [
      m("view", Ff, [
        e.$slots.left ? (u(), d("view", Wf, [
          D(e.$slots, "left")
        ])) : C("", !0),
        m("view", Yf, [
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
          e.showWordLimit && e.maxLength ? (u(), d("view", jf, [
            m("span", Kf, B(e.getModelValue() ? e.getModelValue().length : 0), 1),
            ge("/" + B(e.maxLength), 1)
          ])) : C("", !0)
        ]),
        e.clearable && !e.readonly ? Ce((u(), d("view", {
          key: 1,
          class: "nut-input-clear-box",
          onClick: t[0] || (t[0] = (...i) => e.clear && e.clear(...i))
        }, [
          D(e.$slots, "clear", {}, () => [
            le(l, mt({ class: "nut-input-clear" }, e.$attrs, {
              size: e.clearSize,
              width: e.clearSize,
              height: e.clearSize
            }), null, 16, ["size", "width", "height"])
          ])
        ], 512)), [
          [De, (e.active || e.showClearIcon) && e.getModelValue().length > 0]
        ]) : C("", !0),
        m("view", Uf, [
          D(e.$slots, "right")
        ])
      ])
    ])
  ], 2);
}
const qf = /* @__PURE__ */ K(Hf, [["render", Xf]]), uo = Symbol("nut-radio"), { componentName: Xe, create: Gf } = Y("radio"), co = Gf({
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
    let a = Be(uo, null);
    const o = N(() => a.label.value === e.label), s = N(() => e.disabled ? "nut-radio__icon--disable" : o.value ? "nut-radio__icon" : "nut-radio__icon--unchecked"), l = () => {
      const { iconSize: y } = e, g = {
        CheckNormal: t.icon ? t.icon : Vt,
        Checked: t.checkedIcon ? t.checkedIcon : fn
      }, v = o.value ? g.Checked : g.CheckNormal, b = _e(y);
      return we(v, {
        width: b,
        height: b,
        class: s.value
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
      o.value || e.disabled || a.updateValue(e.label);
    }, f = N(() => a.position.value === "left");
    return () => we(
      "view",
      {
        class: `${Xe} ${Xe}--${e.shape} ${f.value ? `${Xe}--reverse` : ""}`,
        onClick: p
      },
      [e.shape === "button" ? r() : [l(), i()]]
    );
  }
}), { componentName: kn, create: Zf } = Y("radio-group"), fo = Zf({
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
    const a = (o) => t("update:modelValue", o);
    return Me(uo, {
      label: cn(N(() => e.modelValue)),
      position: cn(N(() => e.textPosition)),
      updateValue: a
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
}), { create: Jf } = Y("rate"), Qf = Jf({
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
    const a = P([]), o = (f) => {
      t("update:modelValue", f), t("change", f);
    }, s = (f, y) => {
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
        e.touchable && (i.move(f), i.isHorizontal() && a.value && (f.preventDefault(), o(l(i.moveX.value, a, e.allowHalf))));
      }
    }, p = Math.random().toString(36).slice(-8);
    return ce(G({}, r), {
      onClick: s,
      pxCheck: _e,
      rateRefs: a,
      refRandomId: p,
      renderIcon: at,
      slots: n
    });
  }
}), xf = ["id"], ep = { class: "nut-rate-item__icon--full" }, tp = {
  key: 0,
  class: "nut-rate-item__icon--half"
}, np = {
  key: 1,
  class: "nut-rate-item__icon--half"
};
function op(e, t, n, a, o, s) {
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
      m("view", ep, [
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
      e.allowHalf && Number(e.modelValue) + 1 > l ? (u(), d("view", tp, [
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
      ])) : e.allowHalf && Number(e.modelValue) + 1 < l ? (u(), d("view", np, [
        (u(), x(Ae(e.renderIcon(e.customIcon, { width: e.size, height: e.size, size: e.size, color: e.voidColor })), {
          class: "nut-rate-item__icon nut-rate-item__icon--disabled",
          onClick: (i) => e.onClick(2, l)
        }, null, 8, ["onClick"]))
      ])) : C("", !0)
    ], 12, xf))), 128))
  ], 32);
}
const po = /* @__PURE__ */ K(Qf, [["render", op]]), { create: lp } = Y("short-password"), sp = "NutShortPassword", ap = lp({
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
    const n = ke(sp), a = P(e.modelValue), o = N(() => r(Number(e.length))), s = P(e.visible), l = (f) => {
      f.stopPropagation(), t("focus");
    };
    Q(
      () => e.visible,
      (f) => {
        s.value = f;
      }
    ), Q(
      () => e.modelValue,
      (f) => {
        a.value = f, String(f).length === o.value && t("complete", f);
      }
    );
    const i = () => {
      t("update:visible", !1), t("close");
    }, r = (f) => Math.min(Math.max(4, f), 6);
    return {
      comLen: o,
      realInput: a,
      onTouchStart: l,
      range: r,
      close: i,
      onTips: () => {
        t("tips");
      },
      show: s,
      translate: n
    };
  }
}), ip = { class: "nut-short-password-title" }, rp = { class: "nut-short-password-subtitle" }, up = { class: "nut-short-password-wrapper" }, cp = {
  key: 0,
  class: "nut-short-password__item-icon"
}, dp = { class: "nut-short-password__message" }, fp = { class: "nut-short-password--error" }, pp = {
  key: 0,
  class: "nut-short-password--forget"
};
function mp(e, t, n, a, o, s) {
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
        m("view", ip, B(e.title || e.translate("title")), 1),
        m("view", rp, B(e.desc || e.translate("desc")), 1),
        m("div", up, [
          m("view", {
            class: "nut-short-password__list",
            onTouchstart: t[0] || (t[0] = (...r) => e.onTouchStart && e.onTouchStart(...r))
          }, [
            (u(!0), d(ee, null, re(new Array(e.comLen), (r, p) => (u(), d("view", {
              key: p,
              class: "nut-short-password__item"
            }, [
              String(e.realInput).length > p ? (u(), d("view", cp)) : C("", !0)
            ]))), 128))
          ], 32)
        ]),
        m("view", dp, [
          m("view", fp, B(e.errorMsg), 1),
          e.tips || e.translate("tips") ? (u(), d("view", pp, [
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
const hp = /* @__PURE__ */ K(ap, [["render", mp]]), { create: gp } = Y("textarea"), yp = "NutTextarea", vp = gp({
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
    const n = ke(yp), a = P(), o = N(() => {
      const v = "nut-textarea";
      return {
        [v]: !0,
        [`${v}--disabled`]: e.disabled
      };
    });
    ve(() => {
      e.modelValue && i(String(e.modelValue)), e.autosize && Te(l);
    });
    const s = N(() => ({
      textAlign: e.textAlign
      // resize: props.autosize ? 'vertical' : 'none'
    })), l = () => {
      let v = a.value;
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
      textareaRef: a,
      classes: o,
      styles: s,
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
}), $p = ["rows", "disabled", "readonly", "value", "maxlength", "placeholder", "autofocus"], bp = {
  key: 0,
  class: "nut-textarea__limit"
};
function kp(e, t, n, a, o, s) {
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
    }, null, 44, $p),
    e.limitShow ? (u(), d("view", bp, B(e.modelValue ? e.modelValue.length : 0) + "/" + B(e.maxLength), 1)) : C("", !0)
  ], 2);
}
const wp = /* @__PURE__ */ K(vp, [["render", kp]]);
class Sp {
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
let Cp = class {
  constructor(t) {
    z(this, "options");
    this.options = t;
  }
  upload() {
    var a;
    const t = this.options, n = new XMLHttpRequest();
    if (n.timeout = t.timeout, n.upload) {
      n.upload.addEventListener(
        "progress",
        (o) => {
          var s;
          (s = t.onProgress) == null || s.call(t, o, t);
        },
        !1
      ), n.onreadystatechange = () => {
        var o, s;
        n.readyState === 4 && (n.status == t.xhrState ? (o = t.onSuccess) == null || o.call(t, n.responseText, t) : (s = t.onFailure) == null || s.call(t, n.responseText, t));
      }, n.withCredentials = t.withCredentials, n.open(t.method, t.url, !0);
      for (const [o, s] of Object.entries(t.headers))
        n.setRequestHeader(o, s);
      (a = t.onStart) == null || a.call(t, t), t.beforeXhrUpload ? t.beforeXhrUpload(n, t) : n.send(t.formData);
    } else
      console.warn("浏览器不支持 XMLHttpRequest");
  }
};
class Tp {
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
const { create: Np } = Y("progress"), Dp = Np({
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
    const t = !!Je().default, n = N(() => {
      if (e.strokeWidth)
        return e.strokeWidth + "px";
    }), a = N(() => Number(e.percentage) >= 100 ? 100 : Number(e.percentage)), o = N(() => ({
      width: a.value + "%",
      background: e.strokeColor || ""
    })), s = N(() => ({
      color: e.textColor || ""
    }));
    return {
      height: n,
      percentage: a,
      bgStyle: o,
      textStyle: s,
      slotDefault: t
    };
  }
}), Ip = { class: "nut-progress" };
function _p(e, t, n, a, o, s) {
  const l = j("Checked");
  return u(), d("div", Ip, [
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
const mo = /* @__PURE__ */ K(Dp, [["render", _p]]), { create: Bp } = Y("uploader"), Mp = "NutUploader", Ep = Bp({
  components: {
    NutProgress: mo,
    Photograph: Da,
    Failure: On,
    Loading: xe,
    Del: zn,
    Link: Vs
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
    const n = ke(Mp), a = P(e.fileList), o = P([]);
    Q(
      () => e.fileList,
      () => {
        a.value = e.fileList;
      }
    );
    const s = () => {
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
      const w = new Sp();
      w.url = e.url, w.formData = $.formData, w.timeout = e.timeout * 1, w.method = e.method, w.xhrState = e.xhrState, w.headers = e.headers, w.withCredentials = e.withCredentials, w.beforeXhrUpload = e.beforeXhrUpload;
      try {
        w.sourceFile = $.formData.get(e.name);
      } catch (T) {
        console.warn("[NutUI] <Uploader> formData.get(name)", T);
      }
      w.onStart = (T) => {
        $.status = "ready", $.message = n("readyUpload"), p(h), t("start", T);
      }, w.onProgress = (T, W) => {
        $.status = "uploading", $.message = n("uploading"), $.percentage = (T.loaded / T.total * 100).toFixed(0), t("progress", { event: T, option: W, percentage: $.percentage });
      }, w.onSuccess = (T, W) => {
        $.status = "success", $.message = n("success"), t("success", {
          responseText: T,
          option: W,
          fileItem: $
        }), t("update:fileList", a.value);
      }, w.onFailure = (T, W) => {
        $.status = "error", $.message = n("error"), t("failure", {
          responseText: T,
          option: W,
          fileItem: $
        });
      };
      let I = new Cp(w);
      e.autoUpload ? I.upload() : o.value.push(
        new Promise((T) => {
          T(I);
        })
      );
    }, p = ($ = -1) => {
      $ > -1 ? o.value.splice($, 1) : (o.value = [], a.value = [], t("update:fileList", a.value));
    }, f = () => {
      Promise.all(o.value).then(($) => {
        $.forEach((h) => h.upload());
      });
    }, y = ($) => {
      $.forEach((h, w) => {
        const I = new FormData();
        for (const [W, M] of Object.entries(e.data))
          I.append(W, M);
        I.append(e.name, h);
        const T = ue(new Tp());
        if (T.name = h.name, T.status = "ready", T.type = h.type, T.formData = I, T.message = n("waitingUpload"), r(T, w), e.isPreview && h.type.includes("image")) {
          const W = new FileReader();
          W.onload = (M) => {
            T.url = M.target.result, a.value.push(T);
          }, W.readAsDataURL(h);
        } else
          a.value.push(T);
      });
    }, g = ($) => {
      const h = e.maximum * 1, w = e.maximize * 1, I = new Array();
      $ = $.filter((W) => W.size > w ? (I.push(W), !1) : !0), I.length && t("oversize", I);
      let T = $.length + a.value.length;
      return T > h && $.splice($.length - (T - h)), $;
    }, v = ($, h) => {
      a.value.splice(h, 1), t("delete", {
        file: $,
        fileList: a.value,
        index: h
      });
    }, b = ($, h) => {
      p(h), Kt(e.beforeDelete, {
        args: [$, a.value],
        done: () => v($, h)
      });
    }, k = ($) => {
      if (e.disabled)
        return;
      const h = $.target;
      let { files: w } = h;
      e.beforeUpload ? e.beforeUpload(w).then((I) => c(I)) : c(w), t("change", {
        fileList: a.value,
        event: $
      }), e.clearInput && l(h);
    }, c = ($) => {
      const h = g(new Array().slice.call($));
      y(h);
    };
    return {
      onChange: k,
      onDelete: b,
      fileList: a,
      fileItemClick: i,
      clearUploadQueue: p,
      submit: f,
      renderInput: s
    };
  }
}), Lp = { class: "nut-uploader" }, Pp = {
  key: 0,
  class: "nut-uploader__slot"
}, Ap = {
  key: 0,
  class: "nut-uploader__preview-img"
}, zp = {
  key: 0,
  class: "nut-uploader__preview__progress"
}, Vp = { class: "nut-uploader__preview__progress__msg" }, Op = ["onClick"], Hp = ["src", "onClick"], Rp = {
  key: 3,
  class: "nut-uploader__preview-img__file"
}, Fp = ["onClick"], Wp = { class: "file__name_tips" }, Yp = { class: "tips" }, jp = {
  key: 1,
  class: "nut-uploader__preview-list"
}, Kp = ["onClick"], Up = { class: "file__name_tips" };
function Xp(e, t, n, a, o, s) {
  const l = j("Failure"), i = j("Loading"), r = j("Link"), p = j("Del"), f = j("nut-progress"), y = j("Photograph");
  return u(), d("view", Lp, [
    e.$slots.default ? (u(), d("view", Pp, [
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
        e.listType == "picture" && !e.$slots.default ? (u(), d("view", Ap, [
          g.status != "success" ? (u(), d("view", zp, [
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
            m("view", Vp, B(g.message), 1)
          ])) : C("", !0),
          e.isDeletable ? (u(), d("view", {
            key: 1,
            class: "close",
            onClick: (k) => e.onDelete(g, v)
          }, [
            D(e.$slots, "delete-icon", {}, () => [
              le(l)
            ])
          ], 8, Op)) : C("", !0),
          (b = g == null ? void 0 : g.type) != null && b.includes("image") && g.url ? (u(), d("img", {
            key: 2,
            class: "nut-uploader__preview-img__c",
            src: g.url,
            onClick: (k) => e.fileItemClick(g)
          }, null, 8, Hp)) : (u(), d("view", Rp, [
            m("view", {
              class: "nut-uploader__preview-img__file__name",
              onClick: (k) => e.fileItemClick(g)
            }, [
              m("view", Wp, B(g.name), 1)
            ], 8, Fp)
          ])),
          m("view", Yp, B(g.name), 1)
        ])) : e.listType == "list" ? (u(), d("view", jp, [
          m("view", {
            class: _(["nut-uploader__preview-img__file__name", [g.status]]),
            onClick: (k) => e.fileItemClick(g)
          }, [
            le(r, { class: "nut-uploader__preview-img__file__link" }),
            m("view", Up, B(g.name), 1),
            e.isDeletable ? (u(), x(p, {
              key: 0,
              color: "#808080",
              class: "nut-uploader__preview-img__file__del",
              onClick: (k) => e.onDelete(g, v)
            }, null, 8, ["onClick"])) : C("", !0)
          ], 10, Kp),
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
const qp = /* @__PURE__ */ K(Ep, [["render", Xp]]), { create: Gp } = Y("number-keyboard"), Zp = "NutNumberKeyboard", Jp = Gp({
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
    const n = ke(Zp), a = P(void 0), o = P(e.visible), s = P();
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
      const $ = s.value;
      $ && !$.contains(c.target) && f();
    };
    Q(
      () => e.visible,
      (c) => {
        o.value = c, c ? window.addEventListener("touchstart", y, !1) : window.removeEventListener("touchstart", y, !1);
      }
    );
    function g(c, $) {
      $.stopPropagation(), a.value = c.id, (c.type == "number" || c.type == "custom") && (t("input", c.id), e.modelValue.length < +e.maxlength && t("update:modelValue", e.modelValue + c.id)), c.type == "lock" && k(), c.type == "delete" && (t("delete"), t("update:modelValue", e.modelValue.slice(0, e.modelValue.length - 1)));
    }
    function v(c) {
      c.stopPropagation();
    }
    function b(c) {
      c.preventDefault(), a.value = void 0;
    }
    function k() {
      t("update:visible", !1), t("close");
    }
    return {
      clickKeyIndex: a,
      defaultKey: l,
      closeBoard: k,
      onTouchEnd: b,
      onTouchMove: v,
      onTouchstart: g,
      keysList: p,
      genCustomKeys: r,
      getBasicKeys: i,
      root: s,
      show: o,
      translate: n
    };
  }
}), Qp = { ref: "root" }, xp = { class: "nut-number-keyboard" }, e1 = {
  key: 0,
  class: "nut-number-keyboard__header"
}, t1 = { class: "nut-number-keyboard__title" }, n1 = { class: "nut-number-keyboard__body" }, o1 = { class: "nut-number-keyboard__keys" }, l1 = ["onTouchstart"], s1 = {
  key: 1,
  src: "https://img11.360buyimg.com/imagetools/jfs/t1/146371/38/8485/738/5f606425Eca239740/14f4b4f5f20d8a68.png"
}, a1 = {
  key: 2,
  src: "https://img11.360buyimg.com/imagetools/jfs/t1/129395/8/12735/2030/5f61ac37E70cab338/fb477dc11f46056c.png"
}, i1 = {
  key: 0,
  class: "nut-number-keyboard__sidebar"
}, r1 = { class: "nut-key__wrapper" }, u1 = /* @__PURE__ */ m("img", { src: "https://img11.360buyimg.com/imagetools/jfs/t1/129395/8/12735/2030/5f61ac37E70cab338/fb477dc11f46056c.png" }, null, -1), c1 = [
  u1
];
function d1(e, t, n, a, o, s) {
  const l = j("nut-popup");
  return u(), d("div", Qp, [
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
        m("div", xp, [
          e.title ? (u(), d("div", e1, [
            m("h3", t1, B(e.title), 1),
            e.type == "default" ? (u(), d("span", {
              key: 0,
              class: "nut-number-keyboard__close",
              onClick: t[0] || (t[0] = (i) => e.closeBoard())
            }, B(e.translate("done")), 1)) : C("", !0)
          ])) : C("", !0),
          m("div", n1, [
            m("div", o1, [
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
                  i.type == "lock" ? (u(), d("img", s1)) : C("", !0),
                  i.type == "delete" ? (u(), d("img", a1)) : C("", !0)
                ], 42, l1)
              ], 2))), 128))
            ]),
            e.type == "rightColumn" ? (u(), d("div", i1, [
              m("div", r1, [
                m("div", {
                  class: _(["nut-key", { active: e.clickKeyIndex == "delete" }]),
                  onTouchstart: t[3] || (t[3] = (i) => e.onTouchstart({ id: "delete", type: "delete" }, i)),
                  onTouchmove: t[4] || (t[4] = (i) => e.onTouchMove(i)),
                  onTouchend: t[5] || (t[5] = (...i) => e.onTouchEnd && e.onTouchEnd(...i))
                }, c1, 34)
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
const f1 = /* @__PURE__ */ K(Jp, [["render", d1]]), ho = Symbol("nut-form"), p1 = (e) => ({
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
    const { children: a, linkChildren: o } = Rn(ho);
    o({ props: t });
    const s = N(() => ue({}));
    Me("formErrorTip", s);
    const l = () => {
      Object.keys(s.value).forEach((v) => {
        s.value[v] = "";
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
      return a.forEach((b) => {
        v.push({
          prop: b == null ? void 0 : b.prop,
          rules: (b == null ? void 0 : b.rules) || []
        });
      }), v;
    }, p = (v) => {
      v.message && n("validate", v), s.value[v.prop] = v.message;
    }, f = (v) => Ue(this, null, function* () {
      const { rules: b, prop: k } = v, c = (T) => new Promise((W, M) => {
        try {
          p(T), W(T);
        } catch (A) {
          M(A);
        }
      });
      k || console.warn("[NutUI] <FormItem> 使用 rules 校验规则时 , 必须设置 prop 参数");
      const $ = zt(t.modelValue, k || "");
      p({ prop: k, message: "" });
      const h = t.rules || {}, w = [...(h == null ? void 0 : h[k]) || [], ...b];
      for (; w.length; ) {
        const I = w.shift(), { validator: W } = I, M = Pt(I, ["validator"]), { required: A, regex: S, message: E } = M, V = { prop: k, message: E || "" };
        if (A && !$ && $ !== 0 || S && !S.test(String($)))
          return c(V);
        if (W) {
          const X = W($, M);
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
    return { validate: y, reset: i, submit: () => (y(), !1), formErrorTip: s };
  }
}), { create: m1 } = Y("form"), h1 = m1(
  p1({
    NutCellGroup: jn
  })
);
function g1(e, t, n, a, o, s) {
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
const go = /* @__PURE__ */ K(h1, [["render", g1]]), { create: y1 } = Y("form-item"), v1 = y1({
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
    NutCell: Yn
  },
  setup(e, { slots: t }) {
    const { parent: n } = Fn(ho), a = N(() => {
      var v;
      const y = (v = n.props) == null ? void 0 : v.rules;
      let g = !1;
      for (const b in y)
        Object.prototype.hasOwnProperty.call(y, b) && b === e.prop && Array.isArray(y[b]) && (g = y[b].some((k) => k.required));
      return e.required || e.rules.some((b) => b.required) || g;
    }), o = N(() => {
      const y = n.props.labelPosition, g = e.labelPosition ? e.labelPosition : y;
      return g !== "left" ? `nut-form-item__${g}` : "";
    }), s = N(() => {
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
      isRequired: a,
      labelPositionClass: o,
      starPositionClass: s
    };
  }
}), $1 = { class: "nut-cell__value nut-form-item__body" };
function b1(e, t, n, a, o, s) {
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
      m("view", $1, [
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
const yo = /* @__PURE__ */ K(v1, [["render", b1]]), vo = Symbol("nut-swipe"), { create: k1 } = Y("swipe"), w1 = k1({
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
    }, a = P(!1), o = P(), s = N(() => n(o)), l = P(), i = N(() => n(l)), r = Be(vo, null);
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
      r && r.update(e.name), p.value = !0, I && (g.offset = I === "left" ? -i.value : s.value), t("open", {
        name: e.name,
        position: f || I
      });
    }, b = () => {
      g.offset = 0, p.value && (p.value = !1, t("close", {
        name: e.name,
        position: f
      }));
    }, k = (I, T, W) => {
      W ? I.stopPropagation() : b(), t("click", T);
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
          p.value && y === f ? T = s.value : T = Math.abs(I) > s.value ? s.value : I;
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
        e.disabled || (h.move(I), h.isHorizontal() && (a.value = !0, g.moving = !0, $(h.deltaX.value), e.touchMovePreventDefault && I.preventDefault(), e.touchMoveStopPropagation && I.stopPropagation()));
      },
      onTouchEnd() {
        if (g.moving) {
          switch (g.moving = !1, y = f, f) {
            case "left":
              Math.abs(g.offset) <= i.value / 2 ? b() : (g.offset = -i.value, v());
              break;
            case "right":
              Math.abs(g.offset) <= s.value / 2 ? b() : (g.offset = s.value, v());
              break;
          }
          setTimeout(() => {
            a.value = !1;
          }, 0);
        }
      }
    }), {
      leftRef: o,
      rightRef: l,
      open: v,
      close: b,
      onClick: k,
      lockClick: a
    });
  }
});
function S1(e, t, n, a, o, s) {
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
const $o = /* @__PURE__ */ K(w1, [["render", S1]]), { create: C1 } = Y("swipe-group"), T1 = C1({
  props: {
    lock: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = P(null), n = P("");
    return Me(vo, {
      update: (o) => {
        n.value = o;
      },
      lock: e.lock,
      name: n
    }), { swipeGroupRef: t };
  }
}), N1 = {
  ref: "swipeGroupRef",
  class: "nut-swipe-group"
};
function D1(e, t, n, a, o, s) {
  return u(), d("div", N1, [
    D(e.$slots, "default")
  ], 512);
}
const I1 = /* @__PURE__ */ K(T1, [["render", D1]]), { create: _1 } = Y("action-sheet"), B1 = _1({
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
      slotDefault: !!Je().default,
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
}), M1 = { class: "nut-action-sheet" }, E1 = {
  key: 0,
  class: "nut-action-sheet__title"
}, L1 = { key: 1 }, P1 = {
  key: 0,
  class: "nut-action-sheet__item nut-action-sheet__desc"
}, A1 = {
  key: 1,
  class: "nut-action-sheet__menu"
}, z1 = ["onClick"], V1 = { key: 1 }, O1 = { class: "nut-action-sheet__subdesc" };
function H1(e, t, n, a, o, s) {
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
      m("view", M1, [
        e.title ? (u(), d("view", E1, B(e.title), 1)) : C("", !0),
        D(e.$slots, "default"),
        e.slotDefault ? C("", !0) : (u(), d("view", L1, [
          e.description ? (u(), d("view", P1, B(e.description), 1)) : C("", !0),
          e.menuItems.length ? (u(), d("view", A1, [
            (u(!0), d(ee, null, re(e.menuItems, (r, p) => (u(), d("view", {
              key: p,
              class: _(["nut-action-sheet__item", {
                "nut-action-sheet__item--disabled": r.disable,
                "nut-action-sheet__item--loading": r.loading
              }]),
              style: L({ color: e.isHighlight(r) || r.color }),
              onClick: (f) => e.chooseItem(r, p)
            }, [
              r.loading ? (u(), x(l, { key: 0 })) : (u(), d("view", V1, B(r[e.optionTag]), 1)),
              m("view", O1, B(r[e.optionSubTag]), 1)
            ], 14, z1))), 128))
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
const R1 = /* @__PURE__ */ K(B1, [["render", H1]]), { componentName: F1, create: W1 } = Y("backtop"), Y1 = W1({
  components: {
    Top: Ti
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
    }), a = N(() => ({
      [F1]: !0,
      show: n.backTop
    })), o = N(() => ({
      right: `${e.right}px`,
      bottom: `${e.bottom}px`,
      zIndex: e.zIndex
    }));
    function s() {
      n.scrollEl instanceof Window ? n.scrollTop = n.scrollEl.pageYOffset : n.scrollTop = n.scrollEl.scrollTop, n.backTop = n.scrollTop >= e.distance;
    }
    function l(g = 0) {
      n.scrollEl instanceof Window ? window.scrollTo(0, g) : n.scrollEl.scrollTop = g;
    }
    function i() {
      let g = Ve(function v() {
        var b = e.duration - Math.max(0, n.startTime - +/* @__PURE__ */ new Date() + e.duration), k = b * -n.scrollTop / e.duration + n.scrollTop;
        l(k), g = Ve(v), (b == e.duration || k == 0) && gc(g);
      });
    }
    function r() {
      n.scrollEl.addEventListener("scroll", s, !1), n.scrollEl.addEventListener("resize", s, !1);
    }
    function p() {
      n.scrollEl.removeEventListener("scroll", s, !1), n.scrollEl.removeEventListener("resize", s, !1);
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
      classes: a,
      style: o,
      click: f
    };
  }
});
function j1(e, t, n, a, o, s) {
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
const K1 = /* @__PURE__ */ K(Y1, [["render", j1]]), { create: U1 } = Y("drag"), X1 = U1({
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
    function a() {
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
    function s(p, f) {
      f - parseInt(p.style.left.split("px")[0]) > 10 ? (p.style.left = parseInt(p.style.left.split("px")[0]) + 10 + "px", Ve(() => {
        s(p, f);
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
        s(f, v);
      })), e.direction != "x" && (f.style.top = n.yPum + "px");
    }
    function r(p) {
      const f = p.currentTarget, y = p.touches[0], g = p.targetTouches[0];
      n.startTop = f.offsetTop, n.startLeft = f.offsetLeft, n.position.x = y.clientX, n.position.y = y.clientY, n.nx = g.clientX - n.position.x, n.ny = g.clientY - n.position.y, n.xPum = n.startLeft + n.nx, n.yPum = n.startTop + n.ny;
    }
    return ve(() => {
      a(), n.boundary = e.boundary;
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
function q1(e, t, n, a, o, s) {
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
const G1 = /* @__PURE__ */ K(X1, [["render", q1]]), { create: Z1 } = Y("dialog"), J1 = "NutDialog", Q1 = Z1({
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
    const n = ke(J1), a = P(e.visible);
    ve(() => {
      e.closeOnPopstate && window.addEventListener("popstate", function() {
        s("page");
      });
    }), Q(
      () => e.visible,
      (f) => {
        a.value = f, f && t("opened");
      }
    );
    const o = (f) => {
      t("update", f), t("update:visible", f);
    }, s = (f) => {
      Kt(e.beforeClose, {
        args: [f],
        done: () => {
          a.value = !1, o(!1), t("closed");
        }
      });
    }, l = () => {
      t("cancel"), e.cancelAutoClose && (a.value = !1, s("cancel"));
    }, i = () => {
      t("ok"), e.okAutoClose && s("ok");
    }, r = () => {
      e.closeOnClickOverlay && s("");
    }, p = N(() => ({
      textAlign: e.textAlign
    }));
    return {
      closed: s,
      onCancel: l,
      onOk: i,
      showPopup: a,
      onClickOverlay: r,
      contentStyle: p,
      translate: n
    };
  }
}), x1 = {
  key: 0,
  class: "nut-dialog__header"
}, em = ["innerHTML"];
function tm(e, t, n, a, o, s) {
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
        e.$slots.header || e.title ? (u(), d("view", x1, [
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
          }, null, 8, em)) : (u(), x(Ae(e.content), { key: 2 }))
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
const xt = /* @__PURE__ */ K(Q1, [["render", tm]]);
class nm {
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
class om {
  constructor(t) {
    z(this, "options", new nm());
    z(this, "instance");
    const n = Object.assign(this.options, t), { unmount: a } = Zt(n, {
      name: "dialog",
      components: [Ee, Ke, vt],
      wrapper: (o, s) => ({
        setup() {
          return n.onUpdate = (l) => {
            l === !1 && Te(() => {
              a();
            });
          }, n != null && n.onOpened && (n == null || n.onOpened()), n.teleport = `#${s.id}`, () => we(xt, n);
        }
      })
    });
  }
}
const lm = function(e) {
  return new om(e);
};
lm.install = (e) => {
  e.use(xt);
};
const { create: sm } = Y("infinite-loading"), am = "NutInfiniteLoading", im = sm({
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
    const a = ke(am), o = P(), s = qn(o), l = ue({
      beforeScrollTop: 0,
      isInfiniting: !1,
      y: 0,
      x: 0,
      distance: 0
    }), i = (v) => v ? v.offsetTop + i(v.offsetParent) : 0, r = () => {
      let v = 0, b = 0, k = "down";
      if (s.value == window) {
        const c = En();
        o.value && (v = i(o.value) + o.value.offsetHeight - c - window.innerHeight), b = c;
      } else {
        const { scrollHeight: c, clientHeight: $, scrollTop: h } = s.value;
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
      s.value && s.value.addEventListener("scroll", p, e.useCapture);
    }, y = () => {
      s.value && s.value.removeEventListener("scroll", p, e.useCapture);
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
      translate: a,
      slots: n
    });
  }
}), rm = {
  ref: "scroller",
  class: "nut-infinite-loading"
}, um = { class: "nut-infinite__container" }, cm = { class: "nut-infinite__bottom" }, dm = {
  key: 0,
  class: "nut-infinite__bottom-box"
}, fm = { class: "nut-infinite__bottom-box__text" }, pm = { class: "nut-infinite__bottom-tips" };
function mm(e, t, n, a, o, s) {
  const l = j("Loading");
  return u(), d("view", rm, [
    m("view", um, [
      D(e.$slots, "default")
    ]),
    m("view", cm, [
      e.isInfiniting ? (u(), d("view", dm, [
        D(e.$slots, "loading", {}, () => [
          D(e.$slots, "loading-icon", {}, () => [
            le(l, { class: "nut-icon-loading nut-infinite__bottom-box__img" })
          ]),
          m("view", fm, B(e.loadTxt || e.translate("loading")), 1)
        ])
      ])) : e.hasMore ? C("", !0) : D(e.$slots, "finished", { key: 1 }, () => [
        m("view", pm, B(e.loadMoreTxt || e.translate("loadMoreTxt")), 1)
      ])
    ])
  ], 512);
}
const hm = /* @__PURE__ */ K(im, [["render", mm]]), { create: gm } = Y("pull-refresh"), ym = "NutPullRefresh", vm = gm({
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
    const a = ke(ym), o = Ge(), s = P(), l = qn(s), i = ue({
      isPullRefresh: !1,
      distance: 0,
      status: "normal"
    }), r = N(() => {
      switch (i.status) {
        case "pulling":
          return n.pulling ? "" : e.pullingTxt || a("pulling");
        case "loosing":
          return n.loosing ? "" : e.loosingTxt || a("loosing");
        case "loading":
          return n.loading ? "" : e.loadingTxt || a("loading");
        case "complete":
          return n.complete ? "" : e.completeTxt || a("complete");
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
      scroller: s
    }, me(i)), {
      touchStart: k,
      touchMove: c,
      touchEnd: $,
      getStyle: p,
      translate: a,
      slots: n,
      getHeightStyle: f,
      getPullStatus: r
    });
  }
}), $m = { class: "nut-pull-refresh-container-topbox-text" };
function bm(e, t, n, a, o, s) {
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
        m("div", $m, B(e.getPullStatus), 1),
        e.status == "pulling" ? D(e.$slots, "pulling", { key: 1 }) : C("", !0),
        e.status == "loosing" ? D(e.$slots, "loosing", { key: 2 }) : C("", !0),
        e.status == "loading" ? D(e.$slots, "loading", { key: 3 }) : C("", !0),
        e.status == "complete" ? D(e.$slots, "complete", { key: 4 }) : C("", !0)
      ], 4),
      D(e.$slots, "default")
    ], 4)
  ], 544);
}
const km = /* @__PURE__ */ K(vm, [["render", bm]]), { create: wm } = Y("notify"), Sm = wm({
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
    let a = null;
    const o = () => {
      a && clearTimeout(a), a = null;
    }, s = () => {
      t("update:visible", !1);
    }, l = P(!1), i = Q(
      () => e.visible,
      (p) => {
        l.value = e.visible;
        const f = e.duration;
        p && f && (a = setTimeout(() => {
          s();
        }, f));
      },
      { immediate: !0 }
    );
    return { onAfterLeave: () => {
      o(), i && i(), e.unmount && e.unmount(e.id), e.onClose && e.onClose();
    }, clickCover: n, isShowPopup: l };
  }
});
function Cm(e, t, n, a, o, s) {
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
const Bt = /* @__PURE__ */ K(Sm, [["render", Cm]]), Ht = {
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
let tt = [], ft = [];
const bo = (e) => {
  if (e) {
    const t = document.getElementById(e);
    ft = ft.filter((n) => n.id !== e), tt = tt.filter((n) => n !== e), t && document.body.removeChild(t);
  } else
    tt.forEach((t) => {
      const n = document.getElementById(t);
      n && document.body.removeChild(n);
    }), ft = [], tt = [];
}, Tm = (e) => {
  const t = document.getElementById(e.id);
  if (t) {
    const n = ft.find((o) => o.id === e.id);
    n ? e = G(G(G({}, Ht), n), e) : e = G(G({}, Ht), e);
    const a = le(Bt, e);
    return jt(a, t), a.component.data;
  }
}, ut = (e) => {
  e.unmount = bo;
  let t;
  if (e.id) {
    if (t = e.id, tt.find((s) => s === e.id))
      return Tm(e);
  } else
    t = (/* @__PURE__ */ new Date()).getTime() + "";
  e = G(G({}, Ht), e), e.id = t, tt.push(e.id), ft.push(e);
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
}, ct = (e) => {
  if (!e) {
    console.warn("[NutUI Notify]: msg不能为空");
    return;
  }
}, l4 = {
  text(e, t = {}) {
    return ct(e), ut(ce(G({}, t), { msg: e }));
  },
  primary(e, t = {}) {
    return ct(e), ut(ce(G({}, t), { msg: e, type: "primary" }));
  },
  success(e, t = {}) {
    return ct(e), ut(ce(G({}, t), { msg: e, type: "success" }));
  },
  danger(e, t = {}) {
    return ct(e), ut(ce(G({}, t), { msg: e, type: "danger" }));
  },
  warn(e, t = {}) {
    return ct(e), ut(ce(G({}, t), { msg: e, type: "warning" }));
  },
  hide() {
    bo();
  },
  install(e) {
    e.use(Bt);
  }
}, { componentName: Nm, create: Dm } = Y("switch"), Im = Dm({
  components: { Loading1: Us },
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
    const n = N(() => e.modelValue === e.activeValue), a = N(() => {
      const i = Nm;
      return {
        [i]: !0,
        [n.value ? "nut-switch-open" : "nut-switch-close"]: !0,
        [`${i}-disable`]: e.disable,
        [`${i}-base`]: !0
      };
    }), o = N(() => ({
      backgroundColor: n.value ? e.activeColor : e.inactiveColor
    }));
    let s = "";
    const l = (i) => {
      if (e.disable || e.loading)
        return;
      const r = n.value ? e.inactiveValue : e.activeValue;
      s = "click", t("update:modelValue", r), t("change", r, i);
    };
    return Q(
      () => e.modelValue,
      (i) => {
        s == "click" ? s = "" : t("change", i);
      }
    ), {
      classes: a,
      style: o,
      isActive: n,
      onClick: l
    };
  }
}), _m = { class: "nut-switch-button" };
function Bm(e, t, n, a, o, s) {
  const l = j("Loading1");
  return u(), d("view", {
    class: _(e.classes),
    style: L(e.style),
    onClick: t[0] || (t[0] = (...i) => e.onClick && e.onClick(...i))
  }, [
    m("view", _m, [
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
const Mm = /* @__PURE__ */ K(Im, [["render", Bm]]), { create: Em } = Y("toast"), Lm = Em({
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
    const a = ue({
      mounted: !1
    });
    ve(() => {
      a.mounted = !0;
    });
    const o = () => {
      n && (clearTimeout(n), n = null);
    }, s = () => {
      a.mounted = !1;
    }, l = () => {
      o(), e.duration && (n = setTimeout(() => {
        s();
      }, e.duration));
    }, i = () => {
      e.closeOnClickOverlay && (s(), t("close"));
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
      state: a,
      hide: s,
      clickCover: i,
      hasIcon: r,
      toastBodyClass: p,
      toastIconWrapperClass: f,
      onAfterLeave: () => {
        o(), e.unmount(e.id), e.onClose && e.onClose();
      },
      renderIcon: at
    };
  }
}), Pm = {
  key: 1,
  class: "nut-toast-title"
}, Am = ["innerHTML"];
function zm(e, t, n, a, o, s) {
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
          e.title ? (u(), d("div", Pm, B(e.title), 1)) : C("", !0),
          m("view", {
            class: "nut-toast-text",
            innerHTML: e.msg
          }, null, 8, Am)
        ], 4)
      ], 6), [
        [De, e.state.mounted]
      ])
    ]),
    _: 1
  }, 8, ["onAfterLeave"]);
}
const Mt = /* @__PURE__ */ K(Lm, [["render", zm]]), Rt = {
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
let nt = [], pt = [];
const ko = (e) => {
  if (e) {
    const t = document.getElementById(e);
    pt = pt.filter((n) => n.id !== e), nt = nt.filter((n) => n !== e), t && document.body.removeChild(t);
  } else
    nt.forEach((t) => {
      const n = document.getElementById(t);
      n && document.body.removeChild(n);
    }), pt = [], nt = [];
}, Vm = (e) => {
  const t = document.getElementById(e.id);
  if (t) {
    const n = pt.find((o) => o.id === e.id);
    n ? e = G(G(G({}, Rt), n), e) : e = G(G({}, Rt), e);
    const a = le(Mt, e);
    return jt(a, t), wo;
  }
}, dt = (e) => {
  e.unmount = ko;
  let t;
  if (e.id) {
    if (t = e.id, nt.find((n) => n === e.id))
      return Vm(e);
  } else
    t = (/* @__PURE__ */ new Date()).getTime() + "";
  return e = G(G({}, Rt), e), e.id = t, nt.push(e.id), pt.push(e), Zt(e, {
    wrapper: Mt
  }), wo;
}, Ct = (e) => {
  if (!e) {
    console.warn("[NutUI Toast]: msg不能为空");
    return;
  }
}, wo = {
  text(e, t = {}) {
    return Ct(e), dt(ce(G({}, t), { type: "text", msg: e }));
  },
  success(e, t = {}) {
    return Ct(e), dt(ce(G({ icon: gi }, t), { msg: e, type: "success" }));
  },
  fail(e, t = {}) {
    return Ct(e), dt(ce(G({ icon: On }, t), { msg: e, type: "fail" }));
  },
  warn(e, t = {}) {
    return Ct(e), dt(ce(G({ icon: Hn }, t), { msg: e, type: "warn" }));
  },
  loading(e, t = {}) {
    return dt(ce(G({
      icon: xe
    }, t), {
      msg: e,
      type: "loading"
    }));
  },
  hide(e) {
    ko(e);
  },
  install(e) {
    e.use(Mt);
  }
}, { create: Om } = Y("audio"), Hm = Om({
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
    Service: ii,
    NutRange: lo
  },
  emits: ["fastBack", "play", "forward", "ended", "changeProgress", "mute", "canPlay"],
  setup(e, { emit: t, slots: n }) {
    const a = P(null), o = ue({
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
            document.hidden ? a.value.pause() : o.playing && setTimeout(() => {
              a.value.play();
            }, 200);
          });
      } catch (c) {
        console.log(c.message);
      }
    });
    const s = (k) => {
      const c = a.value;
      e.autoplay && c && c.paused && c.play(), o.second = c.duration, o.duration = b(c.duration), t("canPlay", k);
    }, l = (k) => {
      o.currentTime = parseInt(k.target.currentTime);
    }, i = () => {
      o.currentTime > 0 && o.currentTime--, a.value.currentTime = o.currentTime, t("fastBack", o.currentTime);
    }, r = () => {
      const k = a.value;
      o.playing ? (k.pause(), o.handPlaying = !1) : (k.play(), o.handPlaying = !0), o.playing = !o.playing, t("play", o.playing);
    }, p = () => {
      o.currentTime++, a.value.currentTime = o.currentTime, t("forward", o.currentTime);
    }, f = (k) => {
      o.currentDuration = b(k), o.percent = k / o.second * 100;
    }, y = () => {
      o.playing = !1, t("ended");
    }, g = (k) => {
      const c = a.value;
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
      audioRef: a,
      fastBack: i,
      forward: p,
      changeStatus: r,
      progressChange: g,
      audioEnd: y,
      onTimeupdate: l,
      handleMute: v,
      onCanplay: s,
      slots: n
    });
  }
}), Rm = { class: "nut-audio" }, Fm = {
  key: 0,
  class: "nut-audio__progress"
}, Wm = { class: "nut-audio__time" }, Ym = { class: "nut-audio__bar" }, jm = /* @__PURE__ */ m("div", { class: "nut-audio__button--custom" }, null, -1), Km = { class: "nut-audio__time" }, Um = {
  key: 1,
  class: "nut-audio__icon"
}, Xm = ["controls", "src", "preload", "autoplay", "loop", "muted"];
function qm(e, t, n, a, o, s) {
  const l = j("nut-range"), i = j("Service");
  return u(), d("div", Rm, [
    e.type == "progress" ? (u(), d("div", Fm, [
      m("div", Wm, B(e.currentDuration), 1),
      m("div", Ym, [
        le(l, {
          modelValue: e.percent,
          "onUpdate:modelValue": t[0] || (t[0] = (r) => e.percent = r),
          "hidden-range": "",
          "inactive-color": "#cccccc",
          "active-color": "#fa2c19",
          onChange: e.progressChange
        }, {
          button: te(() => [
            jm
          ]),
          _: 1
        }, 8, ["modelValue", "onChange"])
      ]),
      m("div", Km, B(e.duration), 1)
    ])) : C("", !0),
    e.type == "icon" ? (u(), d("div", Um, [
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
    }, null, 40, Xm)
  ]);
}
const Gm = /* @__PURE__ */ K(Hm, [["render", qm]]), { create: Zm } = Y("audio-operate"), Jm = "NutAudioOperate", Qm = Zm({
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
    const t = ke(Jm), n = Be("audioParent"), a = ue(n), o = P(Je().default);
    return ce(G(G({}, me(e)), me(a)), { customSlot: o, translate: t });
  }
}), xm = { class: "nut-audio-operate" };
function eh(e, t, n, a, o, s) {
  const l = j("nut-button");
  return u(), d("div", xm, [
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
const th = /* @__PURE__ */ K(Qm, [["render", eh]]), So = Symbol("nut-avatar"), { create: nh } = Y("avatar"), oh = nh({
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
    const { size: t, shape: n, bgColor: a, color: o } = me(e), s = ["large", "normal", "small"], l = Be(So, null), i = P(null), r = N(() => {
      var y, g;
      return {
        ["nut-avatar"]: !0,
        [`nut-avatar-${t.value || ((y = l == null ? void 0 : l.props) == null ? void 0 : y.size) || "normal"}`]: !0,
        [`nut-avatar-${n.value || ((g = l == null ? void 0 : l.props) == null ? void 0 : g.shape) || "round"}`]: !0
      };
    }), p = N(() => {
      var f, y;
      return {
        width: t.value in s ? "" : `${t.value}px`,
        height: t.value in s ? "" : `${t.value}px`,
        backgroundColor: `${a.value}`,
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
function lh(e, t, n, a, o, s) {
  return u(), d("view", {
    ref: "avatarRef",
    style: L(e.styles),
    class: _(e.classes)
  }, [
    D(e.$slots, "default")
  ], 6);
}
const en = /* @__PURE__ */ K(oh, [["render", lh]]), { create: sh } = Y("avatar-group"), ah = sh({
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
    const t = P(null), n = P(99), a = P(), o = N(() => ({
      marginLeft: -1 * Number(e.span) + "px"
    })), s = (i) => {
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
        g && s(i);
      }, f = new MutationObserver(p);
      return f.observe(i, r), f;
    };
    return ve(() => {
      e.maxCount && Te(() => {
        let i = et(t);
        i && i.$el && (i = i.$el), s(i), a.value = l(i);
      });
    }), je(() => {
      var i;
      (i = a.value) == null || i.disconnect();
    }), Me(So, {
      props: e,
      avatarGroupRef: t
    }), {
      styles: o,
      foldCount: n,
      avatarGroupRef: t
    };
  }
});
function ih(e, t, n, a, o, s) {
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
const rh = /* @__PURE__ */ K(ah, [["render", ih]]);
var Nt = /* @__PURE__ */ ((e) => (e[e.eq = 1] = "eq", e[e.lt = 2] = "lt", e[e.gt = 3] = "gt", e))(Nt || {});
function uh(e, t, n) {
  let a = 0, o = e.length - 1, s = null;
  for (; a <= o; ) {
    s = Math.floor((a + o) / 2);
    const l = e[s], i = n(l, t);
    if (i === 1)
      return s;
    i === 2 ? a = s + 1 : i === 3 && (o = s - 1);
  }
  return s;
}
const { create: ch } = Y("list"), wn = document.documentElement.clientHeight || document.body.clientHeight || 667, dh = ch({
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
    const n = P(null), a = P(null), o = P(null), s = ue({
      start: 0,
      originStartIndex: 0,
      scrollTop: 0,
      list: e.listData.slice(),
      cachePositions: [],
      phantomHeight: e.height * e.listData.length
    }), l = N(() => Math.min(e.containerHeight, wn)), i = N(() => Math.ceil(l.value / e.height)), r = N(() => Math.min(s.originStartIndex + i.value + e.bufferSize, s.list.length)), p = N(() => s.list.slice(s.start, r.value)), f = () => {
      if (o.value)
        return `translate3d(0, ${s.start >= 1 ? s.cachePositions[s.start - 1].bottom : 0}px, 0)`;
    }, y = () => {
      s.cachePositions = [];
      for (let c = 0; c < s.list.length; ++c)
        s.cachePositions[c] = {
          index: c,
          height: e.height,
          top: c * e.height,
          bottom: (c + 1) * (e.height + e.margin),
          dValue: 0
        };
    }, g = () => {
      let c = o.value.childNodes;
      c = Array.from(c).filter((W) => W.nodeType === 1);
      const $ = c[0];
      c.forEach((W, M) => {
        if (!W)
          return;
        const A = Oe(W), { height: S } = A, V = s.cachePositions[M + s.start].height - S;
        V && (s.cachePositions[M + s.start].bottom -= V, s.cachePositions[M + s.start].height = S, s.cachePositions[M + s.start].dValue = V);
      });
      let h = 0;
      $ && (h = s.start);
      const w = s.cachePositions.length;
      let I = s.cachePositions[h].dValue;
      s.cachePositions[h].dValue = 0;
      for (let W = h + 1; W < w; ++W) {
        const M = s.cachePositions[W];
        s.cachePositions[W].top = s.cachePositions[W - 1].bottom, s.cachePositions[W].bottom = s.cachePositions[W].bottom - I, M.dValue !== 0 && (I += M.dValue, M.dValue = 0);
      }
      const T = s.cachePositions[w - 1].bottom;
      s.phantomHeight = T;
    }, v = (c = 0) => {
      let $ = uh(
        s.cachePositions,
        c,
        (w, I) => {
          const T = w.bottom;
          return T === I ? Nt.eq : T < I ? Nt.lt : Nt.gt;
        }
      );
      return s.cachePositions[$].bottom < c && ($ += 1), $;
    }, b = () => {
      s.originStartIndex = 0, s.start = 0, s.scrollTop = 0, n.value.scrollTop = 0, y(), s.phantomHeight = e.height * s.list.length;
    }, k = () => {
      var w;
      const c = (w = n.value) == null ? void 0 : w.scrollTop, { originStartIndex: $ } = s, h = v(c);
      h !== $ && (s.originStartIndex = h, s.start = Math.max(s.originStartIndex - e.bufferSize, 0), r.value >= s.list.length - 1 && t("scrollBottom")), t(c > s.scrollTop ? "scrollUp" : "scrollDown", c), s.scrollTop = c;
    };
    return y(), Q(
      () => e.listData,
      (c) => {
        if (s.list = c.slice(), s.list.length === c.length)
          y(), g();
        else {
          b();
          return;
        }
      }
    ), Q(
      () => s.start,
      () => {
        o.value && s.list.length > 0 && g();
      }
    ), ce(G({}, me(s)), {
      list: n,
      phantom: a,
      actualContent: o,
      getTransform: f,
      visibleData: p,
      getContainerHeight: l,
      handleScrollEvent: k
    });
  }
});
function fh(e, t, n, a, o, s) {
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
const ph = /* @__PURE__ */ K(dh, [["render", fh]]), { create: mh } = Y("circle-progress"), hh = mh({
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
    }), a = N(() => ot(e.color) ? `url(#${t})` : e.color), o = N(() => {
      let i = 283, r = i * Number(e.progress) / 100;
      return {
        stroke: ot(e.color) ? `url(#${t})` : e.color,
        strokeDasharray: `${r}px ${i}px`
      };
    }), s = N(() => ({
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
      pathStyle: s,
      path: n,
      hoverColor: a,
      stop: l,
      refRandomId: t
    };
  }
}), gh = { viewBox: "0 0 100 100" }, yh = ["id"], vh = ["offset", "stop-color"], $h = ["d", "stroke-width"], bh = ["d", "stroke", "stroke-linecap", "stroke-width"], kh = { class: "nut-circle-progress__text" };
function wh(e, t, n, a, o, s) {
  return u(), d("div", {
    class: "nut-circle-progress",
    style: L({ height: Number(e.radius) * 2 + "px", width: Number(e.radius) * 2 + "px" })
  }, [
    (u(), d("svg", gh, [
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
          }, null, 8, vh))), 128))
        ], 8, yh)
      ]),
      m("path", {
        class: "nut-circle-progress__path",
        style: L(e.pathStyle),
        d: e.path,
        fill: "none",
        "stroke-width": e.strokeWidth
      }, " > ", 12, $h),
      m("path", {
        class: "nut-circle-progress__hover",
        style: L(e.hoverStyle),
        d: e.path,
        fill: "none",
        stroke: e.hoverColor,
        "stroke-linecap": e.strokeLinecap,
        "stroke-width": e.strokeWidth
      }, null, 12, bh)
    ])),
    m("div", kh, [
      D(e.$slots, "default", {}, () => [
        m("div", null, B(e.progress) + "%", 1)
      ])
    ])
  ], 4);
}
const Sh = /* @__PURE__ */ K(hh, [["render", wh]]), { create: Ch } = Y("noticebar"), Th = Ch({
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
    Notice: wa,
    CircleClose: Xt
  },
  emits: ["click", "close", "acrossEnd"],
  setup(e, { emit: t, slots: n }) {
    const a = P(null), o = P(null), s = ue({
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
    }), l = N(() => s.isCanScroll == null ? e.wrapable : !s.isCanScroll && !e.wrapable), i = N(() => ({
      "nut-noticebar__page-wrap-content": !0,
      "nut-ellipsis": l.value,
      [s.animationClass]: !0
    })), r = N(() => {
      let M = {};
      return e.color && (M.color = e.color), e.background && (M.background = e.background), e.direction == "vertical" && (M.height = `${e.height}px`), M;
    }), p = N(() => ({
      animationDelay: (s.firstRound ? e.delay : 0) + "s",
      animationDuration: s.duration + "s",
      transform: `translateX(${s.firstRound ? 0 : s.wrapWidth + "px"})`
    })), f = N(() => {
      let M = {};
      if (e.complexAm)
        M = {
          transform: `translateY(${s.distance}px)`
        };
      else if (s.animate) {
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
        s.scrollList = [].concat(M);
      }
    );
    const y = () => {
      s.showNoticebar != !1 && setTimeout(() => {
        if (!a.value || !o.value)
          return;
        const M = a.value.getBoundingClientRect().width, A = o.value.getBoundingClientRect().width;
        s.isCanScroll = e.scrollable == null ? A > M : e.scrollable, s.isCanScroll ? (s.wrapWidth = M, s.offsetWidth = A, s.duration = A / e.speed, s.animationClass = "play") : s.animationClass = "";
      }, 0);
    }, g = (M) => {
      t("click", M);
    }, v = (M) => {
      e.closeMode && (s.showNoticebar = !e.closeMode), t("close", M);
    }, b = (M) => {
      s.firstRound = !1, t("acrossEnd", M), setTimeout(() => {
        s.duration = (s.offsetWidth + s.wrapWidth) / e.speed, s.animationClass = "play-infinite";
      }, 0);
    }, k = () => {
      c(), s.timer = setInterval(c, ~~(e.height / e.speed / 4 * 1e3) + e.standTime);
    }, c = () => {
      s.animate = !0, setTimeout(
        () => {
          s.scrollList.push(s.scrollList[0]), s.scrollList.shift(), s.animate = !1;
        },
        ~~(e.height / e.speed / 4 * 1e3)
      );
    }, $ = () => {
      s.timer = setInterval(
        () => {
          let M = 100;
          for (let A = 0; A < M; A++)
            h(A, !(A < M - 1));
        },
        e.standTime + 100 * e.speed
      );
    }, h = (M, A) => {
      setTimeout(() => {
        s.distance -= e.height / 100, A && (s.scrollList.push(s.scrollList[0]), s.scrollList.shift(), s.distance = 0);
      }, M * e.speed);
    }, w = (M) => {
      t("click", M);
    }, I = () => {
      e.closeMode && (s.showNoticebar = !e.closeMode), t("close", s.scrollList[0]);
    };
    ve(() => {
      e.direction == "vertical" ? (n.default ? (T(), W()) : s.scrollList = [].concat(e.list), setTimeout(() => {
        e.complexAm ? $() : k();
      }, e.standTime)) : y();
    });
    const T = () => {
      n.default && (s.scrollList = [].concat(n.default()[0].children));
    }, W = () => {
      setTimeout(() => {
        var M = new MutationObserver(() => {
          s.showNotica = !1, setTimeout(() => {
            s.showNotica = !0;
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
      s.keepAlive && (s.keepAlive = !1);
    }), yt(() => {
      s.keepAlive = !0, clearInterval(s.timer);
    }), je(() => {
      clearInterval(s.timer);
    }), ce(G({}, me(s)), {
      isEllipsis: l,
      barStyle: r,
      contentStyle: p,
      horseLampStyle: f,
      wrap: a,
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
}), Nh = { class: "nut-noticebar" }, Dh = { class: "nut-noticebar__page-lefticon" }, Ih = {
  ref: "wrap",
  class: "nut-noticebar__page-wrap"
}, _h = { class: "showNotica" }, Bh = { class: "nut-noticebar-custom-item" }, Mh = ["onClick"];
function Eh(e, t, n, a, o, s) {
  const l = j("Notice"), i = j("CircleClose"), r = j("ScrollItem");
  return u(), d("view", Nh, [
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
      m("view", Dh, [
        D(e.$slots, "left-icon", {}, () => [
          e.leftIcon ? (u(), x(l, {
            key: 0,
            size: "16px"
          })) : C("", !0)
        ])
      ]),
      m("view", Ih, [
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
          m("div", _h, [
            (u(!0), d(ee, null, re(e.scrollList, (p, f) => (u(), x(r, {
              key: f,
              style: L({ height: e.height + "px", "line-height": e.height + "px" }),
              item: p
            }, null, 8, ["style", "item"]))), 128))
          ])
        ], 4),
        m("view", Bh, [
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
        }, B(p), 13, Mh))), 128))
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
const Lh = /* @__PURE__ */ K(Th, [["render", Eh]]), { create: Ph } = Y("empty"), Ah = "NutEmpty", zh = {
  empty: "https://static-ftcms.jd.com/p/files/61a9e3183985005b3958672b.png",
  error: "https://ftcms.jd.com/p/files/61a9e33ee7dcdbcc0ce62736.png",
  network: "https://static-ftcms.jd.com/p/files/61a9e31de7dcdbcc0ce62734.png"
}, Vh = Ph({
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
    const t = ke(Ah), n = N(() => e.imageSize ? {
      width: _e(e.imageSize),
      height: _e(e.imageSize)
    } : {});
    return { src: N(() => e.image.startsWith("https://") || e.image.startsWith("http://") || e.image.startsWith("//") ? e.image : zh[e.image]), style: n, translate: t };
  }
}), Oh = { class: "nut-empty" }, Hh = ["src"], Rh = { class: "nut-empty__description" };
function Fh(e, t, n, a, o, s) {
  return u(), d("view", Oh, [
    m("view", {
      class: "nut-empty__box",
      style: L(e.style)
    }, [
      D(e.$slots, "image", {}, () => [
        e.src ? (u(), d("img", {
          key: 0,
          class: "nut-empty__box--img",
          src: e.src
        }, null, 8, Hh)) : C("", !0)
      ])
    ], 4),
    D(e.$slots, "description", {}, () => [
      m("view", Rh, B(e.description || e.translate("noData")), 1)
    ]),
    D(e.$slots, "default")
  ]);
}
const Wh = /* @__PURE__ */ K(Vh, [["render", Fh]]);
function Sn(e, t) {
  let n = null, a = Date.now();
  return function() {
    let o = Date.now(), s = t - (o - a);
    n && clearTimeout(n), s <= 0 ? (e.apply(null, arguments), a = Date.now()) : n = setTimeout(e, s);
  };
}
const { create: Yh } = Y("video"), jh = "NutVideo", Kh = Yh({
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
    const a = ke(jh), o = ue({
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
    }), s = P(null), l = N(() => e.options.disabled);
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
      o.videoElm = s.value, e.options.autoplay && setTimeout(() => {
        o.videoElm.play();
      }, 200), e.options.touchPlay && (o.showTouchMask = !0), e.options.playsinline && (o.videoElm.setAttribute("playsinline", e.options.playsinline), o.videoElm.setAttribute("webkit-playsinline", e.options.playsinline), o.videoElm.setAttribute("x5-video-player-type", "h5-page"), o.videoElm.setAttribute("x5-video-player-fullscreen", !1)), k(), o.showToolbox ? r() : (o.videoElm.addEventListener("play", () => {
        o.state.playing = !0, t("play", o.videoElm);
      }), o.videoElm.addEventListener("pause", () => {
        o.state.playing = !1, t("pause", o.videoElm);
      }), o.videoElm.addEventListener("ended", v), o.videoElm.addEventListener("timeupdate", Sn(g, 1e3)));
    }, r = () => {
      const V = s.value, X = s.value.getElementsByClassName("nut-video-controller__progress-value")[0];
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
    }, W = () => {
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
      root: s
    }, me(e)), me(o)), {
      handleError: b,
      isDisabled: l,
      play: p,
      handleMuted: c,
      touchSlidSrart: $,
      touchSlidMove: h,
      touchSlidEnd: w,
      retry: T,
      fullScreen: W,
      translate: a
    });
  }
}), Uh = {
  ref: "videocon",
  class: "nut-video"
}, Xh = ["muted", "autoplay", "loop", "poster", "controls", "preload"], qh = ["src", "type"], Gh = { class: "nut-video-controller__now" }, Zh = { class: "nut-video-controller__progress" }, Jh = {
  ref: "progressBar",
  class: "nut-video-controller__progress-value"
}, Qh = /* @__PURE__ */ m("div", { class: "nut-video-controller__ball-move" }, null, -1), xh = [
  Qh
], eg = {
  ref: "playedBar",
  class: "nut-video-controller__played"
}, tg = { class: "nut-video-controller__total" }, ng = { class: "nut-video-error" }, og = { class: "nut-video-error-tip" };
function lg(e, t, n, a, o, s) {
  return u(), d("div", Uh, [
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
      }, null, 8, qh)
    ], 40, Xh),
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
      m("div", Gh, B(e.videoSet.displayTime), 1),
      m("div", Zh, [
        m("div", Jh, [
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
          }, xh, 36),
          m("div", eg, null, 512)
        ], 512)
      ]),
      m("div", tg, B(e.videoSet.totalTime), 1),
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
    Ce(m("div", ng, [
      m("p", og, B(e.translate("errorTip")), 1),
      m("p", {
        class: "nut-video-error-retry",
        onClick: t[9] || (t[9] = (...l) => e.retry && e.retry(...l))
      }, B(e.translate("clickRetry")), 1)
    ], 512), [
      [De, e.state.isError]
    ])
  ], 512);
}
const tn = /* @__PURE__ */ K(Kh, [["render", lg]]), Co = Symbol("nut-steps"), { create: sg, componentName: ag } = Y("steps"), ig = sg({
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
    const a = ue({
      children: []
    }), o = N(() => {
      const i = ag;
      return {
        [i]: !0,
        [`${i}-${e.direction}`]: !0,
        [`${i}-dot`]: !!e.progressDot
      };
    });
    return Me(Co, {
      relation: (i) => {
        i && a.children.push(i);
      },
      state: a,
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
}), { create: rg, componentName: ug } = Y("step"), cg = rg({
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
    const { proxy: e } = Fe(), t = Be(Co);
    t.relation(e);
    const n = ue({
      dot: t.props.progressDot
    }), a = N(() => t.state.children.indexOf(e) + 1), o = () => {
      const r = a.value;
      return r < +t.props.current ? "finish" : r === +t.props.current ? "process" : "wait";
    }, s = N(() => o()), l = N(() => {
      const r = ug;
      return {
        [r]: !0,
        [`${r}-${s.value}`]: !0
      };
    }), i = () => {
      t.onEmit(a.value);
    };
    return ce(G({}, me(n)), {
      index: a,
      classes: l,
      handleClickStep: i
    });
  }
}), dg = { class: "nut-step-head" }, fg = /* @__PURE__ */ m("view", { class: "nut-step-line" }, null, -1), pg = { class: "nut-step-icon-inner" }, mg = {
  key: 1,
  class: "nut-step-inner"
}, hg = { class: "nut-step-main" }, gg = { class: "nut-step-title" }, yg = { key: 0 }, vg = {
  key: 0,
  class: "nut-step-content"
}, $g = ["innerHTML"];
function bg(e, t, n, a, o, s) {
  return u(), d("view", {
    class: _(e.classes),
    onClick: t[0] || (t[0] = (...l) => e.handleClickStep && e.handleClickStep(...l))
  }, [
    m("view", dg, [
      fg,
      m("view", {
        class: _(["nut-step-icon", [e.dot ? "" : "is-icon"]])
      }, [
        m("view", pg, [
          D(e.$slots, "icon", {}, () => [
            e.dot ? (u(), d(ee, { key: 0 }, [], 64)) : (u(), d("view", mg, B(e.index), 1))
          ])
        ])
      ], 2)
    ]),
    m("view", hg, [
      m("view", gg, [
        e.$slots.title ? C("", !0) : (u(), d("span", yg, B(e.title), 1)),
        D(e.$slots, "title")
      ]),
      e.content || e.$slots.content ? (u(), d("view", vg, [
        e.$slots.content ? C("", !0) : (u(), d("span", {
          key: 0,
          innerHTML: e.content
        }, null, 8, $g)),
        D(e.$slots, "content")
      ])) : C("", !0)
    ])
  ], 2);
}
const kg = /* @__PURE__ */ K(cg, [["render", bg]]), To = Symbol("nut-swiper"), { create: wg, componentName: Cn } = Y("swiper"), Sg = wg({
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
  setup(e, { emit: t, slots: n, expose: a }) {
    const o = P(), s = ue({
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
    }), f = N(() => i.value ? l.deltaY.value : l.deltaX.value), y = N(() => l.direction.value === e.direction), g = N(() => s.children.length), v = N(() => s[i.value ? "height" : "width"]), b = N(() => g.value * v.value), k = N(() => s.rect ? (i.value ? s.rect.height : s.rect.width) - v.value * g.value : 0), c = N(() => (s.active + g.value) % g.value), $ = () => {
      let H = 0;
      H = s.offset, s.style = {
        transitionDuration: `${s.moving ? 0 : e.duration}ms`,
        transform: `translate${i.value ? "Y" : "X"}(${H}px)`,
        [i.value ? "height" : "width"]: `${v.value * g.value}px`,
        [i.value ? "width" : "height"]: `${i.value ? s.width : s.height}px`
      };
    }, h = (H) => {
      var de;
      let ne = [];
      const U = s.childrenVNode.length;
      let ae = (de = n == null ? void 0 : n.default) == null ? void 0 : de.call(n);
      if (ae = ae.filter((fe) => fe.children && Array.isArray(fe.children)), ae.forEach((fe) => {
        ne = ne.concat(fe.children);
      }), !U)
        s.childrenVNode = ne.slice(), H.proxy && s.children.push(H.proxy);
      else if (U > ne.length)
        s.children = s.children.filter((fe) => H.proxy !== fe);
      else if (U < ne.length) {
        for (let fe = 0; fe < U; fe++)
          if (ne[fe].key !== s.childrenVNode[fe].key) {
            H.proxy && s.children.splice(fe, 0, H.proxy), H.vnode && s.childrenVNode.splice(fe, 0, H.vnode);
            break;
          }
        U !== ne.length && (H.proxy && s.children.push(H.proxy), H.vnode && s.childrenVNode.push(H.vnode));
      } else
        s.childrenVNode = ne.slice(), H.proxy && s.children.push(H.proxy);
    }, w = (H, ne = 0) => {
      let U = H * v.value;
      e.loop || (U = Math.min(U, -k.value));
      let ae = ne - U;
      return e.loop || (ae = Pe(ae, k.value, 0)), ae;
    }, I = (H) => {
      const { active: ne } = s;
      return H ? e.loop ? Pe(ne + H, -1, g.value) : Pe(ne + H, 0, g.value - 1) : ne;
    }, T = ({ pace: H = 0, offset: ne = 0, isEmit: U = !1 }) => {
      if (g.value <= 1)
        return;
      const { active: ae } = s, de = I(H), fe = w(de, ne);
      if (e.loop) {
        if (s.children[0] && fe !== k.value) {
          const be = fe < k.value;
          s.children[0].setOffset(be ? b.value : 0);
        }
        if (s.children[g.value - 1] && fe !== 0) {
          const be = fe > 0;
          s.children[g.value - 1].setOffset(be ? -b.value : 0);
        }
      }
      s.active = de, s.offset = fe, U && ae !== s.active && t("change", c.value), $();
    }, W = () => {
      s.moving = !0, s.active <= -1 && T({ pace: g.value }), s.active >= g.value && T({ pace: -g.value });
    }, M = () => {
      s.autoplayTimer && clearTimeout(s.autoplayTimer);
    }, A = (H) => {
      W(), l.reset(), Ve(() => {
        Ve(() => {
          s.moving = !1, T({
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
      W(), l.reset(), Ve(() => {
        s.moving = !1;
        let ne;
        e.loop && g.value === H ? ne = s.active === 0 ? 0 : H : ne = H % g.value, T({
          pace: ne - s.active,
          isEmit: !0
        });
      });
    }, X = () => {
      +e.autoPlay <= 0 || g.value <= 1 || (M(), s.autoplayTimer = setTimeout(() => {
        E(), X();
      }, Number(e.autoPlay)));
    }, Z = (H = +e.initPage) => {
      M(), s.rect = o.value.getBoundingClientRect(), H = Math.min(g.value - 1, H), s.width = e.width ? +e.width : s.rect.width, s.height = e.height ? +e.height : s.rect.height, s.active = H, s.offset = w(s.active), s.moving = !0, $(), X();
    }, F = (H) => {
      e.isPreventDefault && H.preventDefault(), e.isStopPropagation && H.stopPropagation(), e.touchable && (l.start(H), s.touchTime = Date.now(), M(), W());
    }, oe = (H) => {
      e.touchable && s.moving && (l.move(H), y.value && T({
        offset: f.value
      }));
    }, q = () => {
      if (!e.touchable || !s.moving)
        return;
      const H = f.value / (Date.now() - s.touchTime);
      if ((Math.abs(H) > 0.3 || Math.abs(f.value) > +(v.value / 2).toFixed(2)) && y.value) {
        let U = 0;
        const ae = i.value ? l.offsetY.value : l.offsetX.value;
        e.loop ? U = ae > 0 ? f.value > 0 ? -1 : 1 : 0 : U = -Math[f.value > 0 ? "ceil" : "floor"](f.value / v.value), T({
          pace: U,
          isEmit: !0
        });
      } else
        f.value && T({ pace: 0 });
      s.moving = !1, $(), X();
    };
    return Me(To, {
      props: e,
      size: v,
      relation: h
    }), a({
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
      () => s.children.length,
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
      state: s,
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
function Cg(e, t, n, a, o, s) {
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
const nn = /* @__PURE__ */ K(Sg, [["render", Cg]]);
function Tg(e) {
  const t = Fe();
  t && Object.assign(t.proxy, e);
}
const { create: Ng } = Y("swiper-item"), Dg = Ng({
  setup() {
    const e = Be(To);
    e.relation(Fe());
    const t = ue({
      offset: 0
    }), n = N(() => {
      const o = {}, s = e == null ? void 0 : e.props.direction;
      return e != null && e.size.value && (o[s === "horizontal" ? "width" : "height"] = `${e == null ? void 0 : e.size.value}px`), t.offset && (o.transform = `translate${s === "horizontal" ? "X" : "Y"}(${t.offset}px)`), o;
    }), a = (o) => {
      t.offset = o;
    };
    return je(() => {
      e.relation(Fe(), "unmount");
    }), Tg({ setOffset: a }), {
      style: n
    };
  }
});
function Ig(e, t, n, a, o, s) {
  return u(), d("view", {
    class: "nut-swiper-item",
    style: L(e.style)
  }, [
    D(e.$slots, "default")
  ], 4);
}
const on = /* @__PURE__ */ K(Dg, [["render", Ig]]), { componentName: Tn, create: _g } = Y("price"), Bg = _g({
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
    })), n = N(() => e.needSymbol ? e.symbol : ""), a = (l) => String(l).indexOf(".") > 0;
    return {
      classes: t,
      showSymbol: n,
      checkPoint: a,
      formatThousands: (l) => (Number(l) == 0 && (l = 0), a(l) ? (l = Number(l).toFixed(e.decimalDigits), l = typeof l.split(".") == "string" ? l.split(".") : l.split(".")[0]) : l = l.toString(), e.thousands ? (l || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,") : l),
      formatDecimal: (l) => {
        Number(l) == 0 && (l = 0), a(l) ? (l = Number(l).toFixed(e.decimalDigits), l = typeof l.split(".") == "string" ? 0 : l.split(".")[1] ? l.split(".")[1] : 0) : l = 0;
        const i = "0." + l, r = Number(i).toFixed(e.decimalDigits);
        return String(r).substring(2, r.length);
      }
    };
  }
}), Mg = ["innerHTML"], Eg = ["innerHTML"];
function Lg(e, t, n, a, o, s) {
  return u(), d("view", {
    class: _(e.classes)
  }, [
    e.needSymbol && e.position === "before" ? (u(), d("view", {
      key: 0,
      class: _(["nut-price--symbol", `nut-price--symbol-${e.size}`]),
      innerHTML: e.showSymbol
    }, null, 10, Mg)) : C("", !0),
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
    }, null, 10, Eg)) : C("", !0)
  ], 2);
}
const ln = /* @__PURE__ */ K(Bg, [["render", Lg]]), No = {
  show: { type: Boolean, default: !1 },
  initNo: { type: Number, default: 0 },
  showIndex: { type: Boolean, default: !0 },
  minZoom: { type: Number, default: 1 / 3 },
  maxZoom: { type: Number, default: 3 }
}, { create: Pg } = Y("image-preview-item"), Ag = Pg({
  props: ce(G({}, No), {
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
    }), a = Ge(), o = N(() => {
      const { rootWidth: S, rootHeight: E } = e, V = E / S;
      return n.imageRatio > V;
    }), s = N(() => {
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
    }, g = (S) => Math.sqrt(it(S[0].clientX - S[1].clientX, 2) + it(S[0].clientY - S[1].clientY, 2));
    let v, b, k, c, $, h, w;
    const I = (S) => {
      const { touches: E } = S, { offsetX: V } = a;
      a.start(S), w = E.length, v = n.moveX, b = n.moveY, h = Date.now(), n.moving = w === 1 && n.scale !== 1, n.zooming = w === 2 && !V.value, n.zooming && (k = n.scale, c = g(S.touches));
    }, T = (S) => {
      const { touches: E } = S;
      if (a.move(S), (n.moving || n.zooming) && lt(S, !0), n.moving) {
        const { deltaX: V, deltaY: X } = a, Z = V.value + v, F = X.value + b;
        n.moveX = Pe(Z, -l.value, l.value), n.moveY = Pe(F, -i.value, i.value);
      }
      if (n.zooming && E.length === 2) {
        const V = g(E), X = k * V / c;
        f(X);
      }
    }, W = () => {
      if (w == 1 && e.video && e.video.source || w > 1)
        return;
      const { offsetX: S, offsetY: E } = a, V = Date.now() - h, X = 250, Z = 5;
      S.value < Z && E.value < Z && V < X && ($ ? (clearTimeout($), $ = null, y()) : $ = setTimeout(() => {
        e.contentClose && t("close"), $ = null;
      }, X));
    }, M = (S) => {
      let E = !1;
      (n.moving || n.zooming) && (E = !0, n.moving && v === n.moveX && b === n.moveY && (E = !1), S.touches.length || (n.zooming && (n.moveX = Pe(n.moveX, -l.value, l.value), n.moveY = Pe(n.moveY, -i.value, i.value), n.zooming = !1), n.moving = !1, v = 0, b = 0, k = 1, n.scale < 1 && p(), n.scale > e.maxZoom && (n.scale = +e.maxZoom))), lt(S, E), W(), a.reset();
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
      imageStyle: s,
      imageLoad: r,
      closeSwiper: A
    });
  }
}), zg = ["src"];
function Vg(e, t, n, a, o, s) {
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
        }, null, 40, zg)) : C("", !0),
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
const Og = /* @__PURE__ */ K(Ag, [["render", Vg]]), { create: Hg } = Y("image-preview"), Rg = Hg({
  props: ce(G({}, No), {
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
    ImagePreviewItem: Og,
    CircleClose: Xt,
    NutPopup: Ee,
    NutSwiper: nn
  },
  setup(e, { emit: t }) {
    const n = P(), a = ue({
      showPop: e.show,
      active: 0,
      rootWidth: 0,
      rootHeight: 0
    }), o = N(() => {
      const f = "nut-image-preview-close";
      return `nut-image-preview-close-icon ${e.closeIconPosition == "top-right" ? `${f}-right` : `${f}-left`}`;
    }), s = N(() => Ut(e.videos) ? [].concat(e.videos).concat(e.images) : e.images), l = (f) => {
      f !== a.active && (a.active = f, t("change", a.active));
    }, i = () => {
      Kt(e.beforeClose, {
        args: [a.active],
        done: () => r()
      });
    }, r = () => {
      a.showPop = !1, t("close");
    }, p = () => {
      if (n.value) {
        const f = Oe(n.value);
        a.rootHeight = f.height, a.rootWidth = f.width;
      }
    };
    return Q(
      () => e.show,
      (f) => {
        a.showPop = f, f && (l(e.initNo), Te(() => {
          p();
        }));
      }
    ), Q(
      () => e.initNo,
      (f) => {
        f != a.active && l(f);
      }
    ), ve(() => {
      l(e.initNo);
    }), ce(G({
      swipeRef: n
    }, me(a)), {
      onClose: i,
      mergeImages: s,
      setActive: l,
      iconClasses: o
    });
  }
}), Fg = {
  ref: "swipeRef",
  class: "nut-image-preview"
}, Wg = {
  key: 0,
  class: "nut-image-preview-index"
};
function Yg(e, t, n, a, o, s) {
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
      m("view", Fg, [
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
      e.showIndex ? (u(), d("view", Wg, B(e.active + 1) + " / " + B(e.mergeImages.length), 1)) : C("", !0),
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
const sn = /* @__PURE__ */ K(Rg, [["render", Yg]]);
class jg {
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
class Kg {
  constructor(t) {
    z(this, "options", new jg());
    const n = Object.assign(this.options, t), { unmount: a } = Zt(n, {
      name: "image-preview",
      components: [Ee, tn, nn, on, vt],
      wrapper: () => ({
        setup() {
          return () => (n.onClose = () => {
            n.show = !1, Te(() => {
              a();
            });
          }, we(sn, n));
        }
      })
    });
  }
}
const Ug = (e) => new Kg(e);
Ug.install = (e) => {
  e.use(sn);
};
function Xg(e) {
  const t = Fe();
  t && Object.assign(t.proxy, e);
}
const { create: qg } = Y("countup"), Gg = qg({
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
    const n = P(null), a = P([]), o = (A) => {
      A && a.value.push(A);
    }, s = ue({
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
        s.prizeLevelTrun = A;
      }
    ), Q(
      () => e.initNum,
      (A) => {
        s.current = A, s.valFlag = !1, f();
      }
    ), Q(
      () => e.endNum,
      () => {
        s.current = e.initNum, s.valFlag = !1, f();
      }
    );
    const f = () => {
      if (s.valFlag)
        return !1;
      l && (i || r ? p != "machine" && c() : (k(), setTimeout(() => {
        s.valFlag = !0;
      }, 300)));
    }, y = () => {
      clearInterval(Number(s.timer)), s.timer = null;
    }, g = (A, S, E) => {
      const V = (A.toString().split(".")[1] || "").length, X = (S.toString().split(".")[1] || "").length, Z = Math.pow(10, Math.max(V, X));
      return E == "-" ? Number((A * Z - S * Z).toFixed(0)) / Z : Number((A * Z + S * Z).toFixed(0)) / Z;
    }, v = (A) => {
      let { num_total_len: S, pointNum: E, initDigit1: V, initDigit2: X, sortFlag: Z } = s, F = Z == "add" || Z == "equal" ? String(X)[A - (S - E)] : 10 - Number(String(X)[A - (S - E)]), oe = Z == "add" || Z == "equal" ? String(V)[A] : 10 - Number(String(V)[A]), q = A > S - E - 1 ? -F * 100 + "%" : A <= String(V).length - 1 ? -oe * 100 + "%" : 0;
      return q == "-1000%" && (q = 0), q;
    }, b = (A) => {
      let { num_total_len: S, pointNum: E, initDigit1: V, initDigit2: X } = s, Z = String(X)[A - (S - E)];
      return A > S - E - 1 ? Z || 0 : A <= String(V).length - 1 ? String(V)[A] : 0;
    }, k = () => {
      let { endNum: A, initNum: S, speed: E, toFixed: V } = e, X = setInterval(() => {
        if (S > A)
          if (Number(s.current) <= A || Number(s.current) <= E)
            s.current = A.toFixed(V), clearInterval(X), t("scrollEnd"), s.valFlag = !1;
          else {
            let Z = parseFloat(String(s.current)) - parseFloat(String(E));
            s.current = Z.toFixed(V);
          }
        else if (Number(s.current) >= A)
          s.current = A.toFixed(V), clearInterval(X), t("scrollEnd"), s.valFlag = !1;
        else {
          let Z = parseFloat(String(s.current)) + parseFloat(String(E));
          s.current = Z.toFixed(V);
        }
      }, e.during);
    }, c = (A) => {
      let { initNum: S, endNum: E, toFixed: V, customBgImg: X } = e;
      X && (S = e.customChangeNum);
      let Z, F, oe, q;
      S != 0 ? (V != 0 && (S = Number(S.toFixed(V))), String(S).indexOf(".") > -1 ? (Z = String(S).split(".")[0].length, F = String(S).split(".")[1].length) : (Z = String(S).length, F = 0)) : (Z = 1, F = 0), E != 0 ? (V != 0 && (E = Number(E.toFixed(V))), String(E).indexOf(".") > -1 ? (oe = String(E).split(".")[0].length, q = String(E).split(".")[1].length) : (oe = String(E).length, q = 0)) : (oe = 1, q = 0);
      let H = Z >= oe ? Z : oe, ne = F >= q ? F : q;
      s.num_total_len = H + ne, s.pointNum = ne, S > E ? (s.sortFlag = "reduce", s.to0_10 = [0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], s.totalCount = g(S, E, "-"), s.numberVal = Number(String(S))) : S < E ? (s.sortFlag = "add", s.to0_10 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0], s.totalCount = g(E, S, "-"), s.numberVal = Number(String(E))) : s.sortFlag = "equal";
      var U = 1;
      for (let de = 0; de < s.pointNum; de++)
        U *= 10;
      var ae = s.numberVal * U;
      if (s.relNum = ae, V != 0 && (s.pointNum = String(s.numberVal).split(".")[1] ? String(s.numberVal).split(".")[1].length : 0, s.num_total_len = String(ae).length), String(S).indexOf(".") > -1) {
        let de = String(S).split(".");
        s.initDigit1 = Number(de[0]), s.initDigit2 = Number(de[1]);
      } else
        s.initDigit1 = S, s.initDigit2 = 0;
      i && !X ? Te(() => {
        if (s.sortFlag == "equal")
          return !1;
        let de = a.value[s.num_total_len - 1];
        $(de);
      }) : A !== 0 && I();
    }, $ = (A) => {
      y();
      var S = 1;
      s.pointNum != 0 && (S = 1 / Math.pow(10, s.pointNum)), s.timer = setInterval(() => {
        h(A), s.totalCount = g(s.totalCount, S, "-"), s.totalCount <= 0 && (y(), t("scrollEnd"), s.valFlag = !1);
      }, e.during);
    }, h = (A) => {
      let S = A.getAttribute("turn-number"), E;
      if (s.sortFlag == "add" ? E = parseInt(String(S)) + 1 : E = parseInt(String(S)) - 1 >= 0 ? parseInt(String(S)) - 1 : 9, A.setAttribute("turn-number", String(E)), (A.style.transition == "none 0s ease 0s" || E == 1 || !A.style.transition) && (A.style.transition = `all linear ${e.during}ms`), E == 10 || s.sortFlag == "reduce" && E == 0) {
        var V = null;
        A.style.top = `-${s.sortFlag == "add" ? E * 100 : (10 - E) * 100}%`, A.setAttribute("turn-number", "0"), V = setTimeout(() => {
          V && clearTimeout(V), A.style.transition = "none", A.style.top = "0", w(A, E);
        }, 0.975 * e.during);
      } else
        A.style.top = `-${s.sortFlag == "add" ? E * 100 : (10 - E) * 100}%`;
      A.style.top == "-100%" && s.sortFlag == "reduce" && h(A.previousSibling);
    }, w = (A, S) => {
      setTimeout(() => {
        S == 10 && A.previousSibling && h(A.previousSibling);
      }, 200);
    }, I = () => {
      Te(() => {
        n.value.addEventListener("webkitTransitionEnd", () => {
          t("scrollEnd"), s.valFlag = !1;
        });
      });
    }, T = () => {
      for (s.notPrize = []; s.notPrize.length < 3; ) {
        var A = Math.floor(Math.random() * e.machinePrizeNum + 1);
        s.notPrize.indexOf(A) == -1 && s.notPrize.push(A);
      }
    };
    Xg({ machineLuck: () => {
      const A = e.machineTurnMore < 0 ? 0 : e.machineTurnMore;
      let S = e.numHeight * e.machinePrizeNum;
      s.prizeLevelTrun < 0 && T();
      for (let E = 0; E < e.machineNum; E++)
        setTimeout(() => {
          let V = S * (E + 1 + parseFloat(String(A)));
          s.prizeYPrev.length != 0 && (s.prizeY[E] = s.prizeYPrev[E]);
          let X = s.prizeYPrev[E] ? s.prizeYPrev[E] : 0, Z = V + X + (e.machinePrizeNum - s.prizeLevelTrun + 1) * e.numHeight + (S - X);
          s.prizeLevelTrun < 0 && (Z += e.numHeight * s.notPrize[E]), M(
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
          E += 10, s.prizeY[A] = parseFloat(String(E));
        else if (clearInterval(V), V = null, s.finshMachine += 1, s.prizeY[A] = S, s.finshMachine == e.machineNum) {
          let X = e.numHeight * e.machinePrizeNum;
          s.prizeYPrev = [], JSON.parse(JSON.stringify(s.prizeY)).forEach((F) => {
            let oe = F;
            for (; oe > X; )
              oe -= X;
            s.prizeYPrev.push(oe);
          }), setTimeout(() => {
            s.finshMachine = 0, s.prizeLevelTrun < 0 ? (t("scrollEnd", !1), s.valFlag = !1) : (t("scrollEnd", !0), s.valFlag = !1);
          }, 130);
        }
      }, 30);
    };
    return ve(() => {
      s.current = e.initNum, Te(() => {
        f();
      });
    }), je(() => {
      y(), s.timer = null;
    }), ce(G(G({}, me(s)), me(ue(e))), {
      runNumberImg: n,
      setRef: o,
      topNumber: v,
      turnNumber: b
    });
  }
}), Zg = { class: "nut-countup" }, Jg = ["turn-number"];
function Qg(e, t, n, a, o, s) {
  return u(), d("view", Zg, [
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
        ], 12, Jg))), 128)),
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
const xg = /* @__PURE__ */ K(Gg, [["render", Qg]]), e0 = (e) => {
  if (!e)
    return Date.now();
  let t = e;
  return t = +t > 0 ? +t : t.toString().replace(/-/g, "/"), new Date(t).getTime();
}, { create: t0 } = Y("countdown"), n0 = "NutCountdown", o0 = t0({
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
    const a = ke(n0), o = ue({
      restTime: 0,
      // 倒计时剩余时间时间
      timer: null,
      counting: !e.paused && e.autoStart,
      // 是否处于倒计时中
      handleEndTime: Date.now(),
      // 最终截止时间
      diffTime: 0
      // 设置了 startTime 时，与 date.now() 的差异
    }), s = N(() => r(o.restTime)), l = () => {
      o.handleEndTime = e.endTime, o.diffTime = Date.now() - e0(e.startTime), o.counting || (o.counting = !0), i();
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
      renderTime: s,
      translate: a,
      reset: g
    });
  }
}), l0 = { class: "nut-countdown" }, s0 = ["innerHTML"];
function a0(e, t, n, a, o, s) {
  return u(), d("view", l0, [
    e.slots.default ? D(e.$slots, "default", { key: 0 }) : (u(), d("view", {
      key: 1,
      class: "nut-countdown__content",
      innerHTML: e.renderTime
    }, null, 8, s0))
  ]);
}
const i0 = /* @__PURE__ */ K(o0, [["render", a0]]), { create: r0 } = Y("tag"), u0 = r0({
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
    }), a = N(() => {
      const l = {};
      return e.textColor ? l.color = e.textColor : e.color && e.plain && (l.color = e.color), e.plain ? (l.background = "#fff", l["border-color"] = e.color) : e.color && (l.background = e.color), l;
    });
    return {
      classes: n,
      style: a,
      onClose: (l) => {
        l.stopPropagation(), t("close", l);
      },
      onClick: (l) => {
        t("click", l);
      }
    };
  }
});
function c0(e, t, n, a, o, s) {
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
const Do = /* @__PURE__ */ K(u0, [["render", c0]]), { create: d0 } = Y("popover"), f0 = d0({
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
    const n = P(), a = P(), o = P(e.visible);
    let s = P(), l = P();
    const i = N(() => {
      const h = "nut-popover-arrow", w = e.location, I = w.split("-")[0];
      return `${h} ${h}-${I} ${h}--${w}`;
    }), r = N(() => {
      const h = {}, { bgColor: w, arrowOffset: I, location: T } = e, W = T.split("-")[0], M = T.split("-")[1], A = 16;
      return w && (h[`border${p(W)}Color`] = w), e.arrowOffset != 0 && (["bottom", "top"].includes(W) && (M || (h.left = `calc(50% + ${I}px)`), M == "start" && (h.left = `${A + I}px`), M == "end" && (h.right = `${A - I}px`)), ["left", "right"].includes(W) && (M || (h.top = `calc(50% - ${I}px)`), M == "start" && (h.top = `${A - I}px`), M == "end" && (h.bottom = `${A + I}px`))), h;
    }), p = (h) => (h = h.toLowerCase(), h = h.replace(/\b\w+\b/g, (w) => w.substring(0, 1).toUpperCase() + w.substring(1)), h), f = N(() => {
      let h = {};
      if (!s.value || !l.value)
        return {};
      const w = l.value.width, I = l.value.height, { width: T, height: W, left: M, top: A } = s.value, { location: S, offset: E } = e, V = S.split("-")[0], X = S.split("-")[1];
      let Z = 0, F = 0;
      if (Ut(E) && E.length == 2 && (Z += Number(E[1]), F += Number(E[0])), T) {
        if (["bottom", "top"].includes(V)) {
          const oe = V == "bottom" ? W + Z : -(I + Z);
          h.top = `${A + oe}px`, X || (h.left = `${-(w - T) / 2 + M + F}px`), X == "start" && (h.left = `${M + F}px`), X == "end" && (h.left = `${s.value.right + F}px`);
        }
        if (["left", "right"].includes(V)) {
          const oe = V == "left" ? -(w + Z) : T + Z;
          h.left = `${M + oe}px`, X || (h.top = `${A - I / 2 + W / 2 - 4 + F}px`), X == "start" && (h.top = `${A + F}px`), X == "end" && (h.top = `${A + W + F}px`);
        }
      }
      return h;
    }), y = N(() => {
      const h = {};
      return e.bgColor && (h.background = e.bgColor), h;
    }), g = () => {
      let h = Oe(n.value);
      e.targetId && (h = Oe(document.querySelector(`#${e.targetId}`))), s.value = h, setTimeout(() => {
        var w, I;
        l.value = {
          height: (w = a.value) == null ? void 0 : w.clientHeight,
          width: (I = a.value) == null ? void 0 : I.clientWidth
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
      const w = n.value, I = a.value;
      let T = w && !w.contains(h.target);
      if (e.targetId) {
        const W = document.querySelector(`#${e.targetId}`);
        T = W && !W.contains(h.target);
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
      popoverContentRef: a,
      getRootPosition: f,
      customStyle: y,
      popoverArrowStyle: r,
      renderIcon: at
    };
  }
}), p0 = {
  ref: "popoverContentRef",
  class: "nut-popover-content-group"
}, m0 = ["onClick"], h0 = { class: "nut-popover-menu-item-name" };
function g0(e, t, n, a, o, s) {
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
          m("view", p0, [
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
              m("view", h0, B(i.name), 1)
            ], 10, m0))), 128))
          ], 512)
        ]),
        _: 3
      }, 8, ["visible", "pop-class", "style", "overlay", "duration", "overlay-style", "overlay-class", "close-on-click-overlay"])
    ], 6)
  ], 64);
}
const Io = /* @__PURE__ */ K(f0, [["render", g0]]), { create: y0 } = Y("skeleton"), v0 = y0({
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
    const { avatarShape: t, round: n, avatarSize: a } = me(e), o = N(() => {
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
      getStyle: () => a.value ? {
        width: a.value,
        height: a.value
      } : {
        width: "50px",
        height: "50px"
      }
    };
  }
}), $0 = { key: 0 }, b0 = {
  key: 1,
  class: "nut-skeleton"
}, k0 = {
  key: 0,
  class: "nut-skeleton-animation"
}, w0 = { class: "nut-skeleton-content" };
function S0(e, t, n, a, o, s) {
  const l = j("nut-avatar");
  return e.loading ? (u(), d("view", b0, [
    e.animated ? (u(), d("view", k0)) : C("", !0),
    m("view", w0, [
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
  ])) : (u(), d("view", $0, [
    D(e.$slots, "default")
  ]));
}
const C0 = /* @__PURE__ */ K(v0, [["render", S0]]), _o = Symbol("nut-collapse"), { create: T0 } = Y("collapse"), N0 = T0({
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
    const n = P(null), a = P(e.modelValue || (e.accordion ? "" : []));
    Q(
      () => e.modelValue,
      (i) => {
        a.value = i;
      }
    );
    const o = (i, r, p = !0) => {
      a.value = i, t("update:modelValue", i), t("change", i, r, p);
    };
    return Me(_o, {
      updateVal: (i) => {
        if (e.accordion)
          a.value === i ? o("", i, !1) : o(i, i, !0);
        else if (Array.isArray(a.value))
          if (a.value.includes(i)) {
            const r = a.value.filter((p) => p !== i);
            o(r, i, !1);
          } else {
            const r = a.value.concat([i]);
            o(r, i, !0);
          }
        else
          console.warn("[NutUI] <Collapse> 未开启手风琴模式时 v-model 应为数组");
      },
      isExpanded: (i) => e.accordion ? a.value === i : Array.isArray(a.value) ? a.value.includes(i) : !1
    }), { nutCollapseRef: n };
  }
}), D0 = {
  ref: "nutCollapseRef",
  class: "nut-collapse"
};
function I0(e, t, n, a, o, s) {
  return u(), d("view", D0, [
    D(e.$slots, "default")
  ], 512);
}
const _0 = /* @__PURE__ */ K(N0, [["render", I0]]), { create: B0 } = Y("collapse-item"), M0 = B0({
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
    const t = P(null), n = P(null), a = Be(_o), o = N(() => {
      const y = "nut-collapse-item";
      return {
        [y]: !0,
        [y + "__border"]: e.border
      };
    }), s = N(() => a ? a.isExpanded(e.name) : !1), l = P(s.value ? "auto" : "0px"), i = () => {
      a && a.updateVal(e.name);
    }, r = () => {
      s.value && (l.value = "auto");
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
    return Q(s, (y) => {
      y ? p() : f();
    }), {
      classes: o,
      renderIcon: at,
      wrapperRef: t,
      contentRef: n,
      open: p,
      toggle: i,
      wrapperHeight: l,
      expanded: s,
      onTransitionEnd: r
    };
  }
}), E0 = { class: "nut-collapse-item__title-main" }, L0 = { class: "nut-collapse-item__title-main-value" }, P0 = ["innerHTML"], A0 = {
  key: 2,
  class: "nut-collapse-item__title-label"
}, z0 = {
  key: 0,
  class: "nut-collapse-item__title-sub"
}, V0 = ["innerHTML"], O0 = {
  key: 0,
  class: "nut-collapse__item-extraWrapper"
}, H0 = { class: "nut-collapse__item-extraWrapper__extraRender" }, R0 = {
  ref: "contentRef",
  class: "nut-collapse__item-wrapper__content"
};
function F0(e, t, n, a, o, s) {
  return u(), d("view", {
    class: _(e.classes)
  }, [
    m("view", {
      class: _(["nut-collapse-item__title", { "nut-collapse-item__title--disabled": e.disabled }]),
      onClick: t[0] || (t[0] = (...l) => e.toggle && e.toggle(...l))
    }, [
      m("view", E0, [
        m("view", L0, [
          e.$slots.title ? D(e.$slots, "title", { key: 0 }) : (u(), d("view", {
            key: 1,
            class: "nut-collapse-item__title-mtitle",
            innerHTML: e.title
          }, null, 8, P0)),
          e.label ? (u(), d("view", A0, B(e.label), 1)) : C("", !0)
        ])
      ]),
      e.$slots.value ? (u(), d("view", z0, [
        D(e.$slots, "value")
      ])) : (u(), d("view", {
        key: 1,
        class: "nut-collapse-item__title-sub",
        innerHTML: e.value
      }, null, 8, V0)),
      m("view", {
        class: _(["nut-collapse-item__title-icon", { "nut-collapse-item__title-icon--expanded": e.expanded }]),
        style: L({ transform: "rotate(" + (e.expanded ? e.rotate : 0) + "deg)" })
      }, [
        e.$slots.icon ? D(e.$slots, "icon", { key: 0 }) : (u(), x(Ae(e.renderIcon(e.icon)), { key: 1 }))
      ], 6)
    ], 2),
    e.$slots.extra ? (u(), d("view", O0, [
      m("div", H0, [
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
      m("view", R0, [
        D(e.$slots, "default")
      ], 512)
    ], 36)
  ], 2);
}
const W0 = /* @__PURE__ */ K(M0, [["render", F0]]), Y0 = st({
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
}), { create: j0 } = Y("table"), K0 = "NutTable", U0 = j0({
  components: {
    RenderColumn: Y0,
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
    const n = ke(K0), a = ue({
      curData: e.data
    }), o = (y) => ({
      "nut-table__main__head__tr--border": e.bordered,
      [`nut-table__main__head__tr--align${y.align ? y.align : ""}`]: !0
    }), s = (y) => y.stylehead ? y.stylehead : "", l = (y) => y.stylecolumn ? y.stylecolumn : "", i = (y) => e.columns.filter((g) => g.key === y)[0], r = (y) => {
      const g = e.columns.filter((v) => v.key === y);
      return g[0].stylecolumn ? g[0].stylecolumn : "";
    }, p = (y) => {
      y.sorter && (t("sorter", y), a.curData = typeof y.sorter == "function" ? a.curData.sort(y.sorter) : y.sorter === "default" ? a.curData.sort() : a.curData);
    }, f = () => e.columns.map((y) => [y.key, y.render]);
    return Q(
      () => e.data,
      (y) => {
        a.curData = y.slice();
      }
    ), ce(G({}, me(a)), {
      cellClasses: o,
      getColumnItem: i,
      getColumnItemStyle: r,
      handleSorterClick: p,
      sortDataItem: f,
      translate: n,
      stylehead: s,
      stylecolumn: l
    });
  }
}), X0 = { class: "nut-table" }, q0 = { class: "nut-table__main__head" }, G0 = { class: "nut-table__main__head__tr" }, Z0 = ["onClick"], J0 = { class: "nut-table__main__body" }, Q0 = { key: 1 }, x0 = {
  key: 0,
  class: "nut-table__nodata"
}, ey = {
  key: 0,
  class: "nut-table__nodata__text"
}, ty = {
  key: 1,
  class: "nut-table__summary"
}, ny = ["innerHTML"];
function oy(e, t, n, a, o, s) {
  const l = j("DownArrow"), i = j("RenderColumn");
  return u(), d("view", X0, [
    m("view", {
      class: _(["nut-table__main", { "nut-table__main--striped": e.striped }])
    }, [
      m("view", q0, [
        m("view", G0, [
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
          ], 14, Z0))), 128))
        ])
      ]),
      m("view", J0, [
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
            }, null, 8, ["slots", "record"])) : (u(), d("view", Q0, B(r[p]), 1))
          ], 6))), 128))
        ]))), 128))
      ])
    ], 2),
    e.curData.length ? C("", !0) : (u(), d("view", x0, [
      m("div", {
        class: _(["nut-table__nodata", { "nut-table__nodata--border": e.bordered }])
      }, [
        D(e.$slots, "nodata"),
        e.$slots.nodata ? C("", !0) : (u(), d("div", ey, B(e.translate("noData")), 1))
      ], 2)
    ])),
    e.summary ? (u(), d("view", ty, [
      m("span", {
        class: "nut-table__summary__text",
        innerHTML: e.summary().value
      }, null, 8, ny)
    ])) : C("", !0)
  ]);
}
const ly = /* @__PURE__ */ K(U0, [["render", oy]]), { create: sy } = Y("animate"), ay = sy({
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
    const n = P(e.action === "initial" || e.show === !0 || e.loop), a = N(() => ({
      "nut-animate__container": !0,
      [`nut-animate-${e.type}`]: n.value,
      loop: e.loop
    })), o = () => {
      n.value = !1, requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          n.value = !0;
        });
      });
    }, s = (l) => {
      e.action === "click" && (o(), t("click", l), t("animate"));
    };
    return Q(
      () => e.show,
      (l) => {
        l && (o(), t("animate"));
      }
    ), { classes: a, handleClick: s };
  }
}), iy = { class: "nut-animate" };
function ry(e, t, n, a, o, s) {
  return u(), d("view", iy, [
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
const uy = /* @__PURE__ */ K(ay, [["render", ry]]), { create: cy } = Y("ellipsis"), dy = cy({
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
    let a = null, o = 0;
    const s = P(), l = ue({
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
      a = document.createElement("div"), Array.prototype.slice.apply(b).forEach(($) => {
        a.style.setProperty($, b.getPropertyValue($));
      }), a.style.position = "fixed", a.style.left = "999999px", a.style.top = "999999px", a.style.zIndex = "-1000", a.style.height = "auto", a.style.minHeight = "auto", a.style.maxHeight = "auto", a.style.textOverflow = "clip", a.style.whiteSpace = "normal", a.style.webkitLineClamp = "unset", a.style.display = "block";
      const c = y(b.lineHeight === "normal" ? e.lineHeight : b.lineHeight);
      o = Math.floor(
        c * (Number(e.rows) + 0.5) + y(b.paddingTop) + y(b.paddingBottom)
      ), a.innerText = e.content, document.body.appendChild(a), r();
    }, r = () => {
      if (a.offsetHeight <= o)
        l.exceeded = !1, document.body.removeChild(a);
      else {
        l.exceeded = !0;
        const b = e.content.length, k = Math.floor((0 + b) / 2), c = e.direction === "middle" ? f([0, k], [k, b]) : p(0, b);
        s.value = c, document.body.removeChild(a);
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
      return e.direction === "end" ? a.innerText = e.content.slice(0, h) + e.symbol + c : a.innerText = c + e.symbol + e.content.slice(h, $), a.offsetHeight <= o ? e.direction === "end" ? p(h, k) : p(b, h) : e.direction === "end" ? p(b, h) : p(h, k);
    }, f = (b, k) => {
      const c = l.expanded ? e.collapseText : e.expandText, $ = e.content.length;
      if (b[1] - b[0] <= 1 && k[1] - k[0] <= 1)
        return {
          leading: e.content.slice(0, b[0]) + e.symbol,
          tailing: e.symbol + e.content.slice(k[1], $)
        };
      const h = Math.floor((b[0] + b[1]) / 2), w = Math.ceil((k[0] + k[1]) / 2);
      return a.innerText = e.content.slice(0, h) + e.symbol + c + e.symbol + e.content.slice(w, $), a.offsetHeight <= o ? f([h, b[1]], [k[0], w]) : f([b[0], h], [w, k[1]]);
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
    return ce(G({}, me(l)), { root: n, ellipsis: s, clickHandle: g, handleClick: v });
  }
}), fy = { key: 0 }, py = { key: 1 }, my = { key: 2 };
function hy(e, t, n, a, o, s) {
  return u(), d("view", {
    ref: "root",
    class: "nut-ellipsis",
    onClick: t[2] || (t[2] = (...l) => e.handleClick && e.handleClick(...l))
  }, [
    e.exceeded ? C("", !0) : (u(), d("view", fy, B(e.content), 1)),
    e.exceeded && !e.expanded ? (u(), d("view", py, [
      ge(B(e.ellipsis && e.ellipsis.leading), 1),
      e.expandText ? (u(), d("span", {
        key: 0,
        class: "nut-ellipsis__text",
        onClick: t[0] || (t[0] = Ne((l) => e.clickHandle(1), ["stop"]))
      }, B(e.expandText), 1)) : C("", !0),
      ge(B(e.ellipsis && e.ellipsis.tailing), 1)
    ])) : C("", !0),
    e.exceeded && e.expanded ? (u(), d("view", my, [
      ge(B(e.content) + " ", 1),
      e.expandText ? (u(), d("span", {
        key: 0,
        class: "nut-ellipsis__text",
        onClick: t[1] || (t[1] = Ne((l) => e.clickHandle(2), ["stop"]))
      }, B(e.collapseText), 1)) : C("", !0)
    ])) : C("", !0)
  ], 512);
}
const gy = /* @__PURE__ */ K(dy, [["render", hy]]), { componentName: yy, create: vy } = Y("watermark"), $y = vy({
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
      gapX: a,
      gapY: o,
      width: s,
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
      const w = document.createElement("canvas"), I = window.devicePixelRatio, T = w.getContext("2d"), W = `${(a + s) * I}px`, M = `${(o + l) * I}px`, A = s * I, S = l * I;
      if (w.setAttribute("width", W), w.setAttribute("height", M), T) {
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
        a,
        o,
        s,
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
      const w = yy;
      return {
        [w]: !0,
        [`${w}-full-page`]: e.fullPage
      };
    });
    return ce(G({}, me(t)), { classes: h });
  }
});
function by(e, t, n, a, o, s) {
  return u(), d("view", {
    class: _(e.classes),
    style: L({
      zIndex: e.zIndex,
      backgroundSize: `${e.gapX + e.width}px`,
      backgroundImage: `url('${e.base64Url}')`
    })
  }, null, 6);
}
const ky = /* @__PURE__ */ K($y, [["render", by]]), { create: wy } = Y("trend-arrow"), Sy = wy({
  components: { TriangleUp: Ai, TriangleDown: Bi },
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
      const { rate: o, digits: s, showSign: l, showZero: i } = e;
      t.rateTrend = o > 0;
      const r = Math.abs(o);
      return !i && o === 0 ? "--" : `${l && o !== 0 ? t.rateTrend ? "+" : "-" : ""}${qo(
        Number(r),
        s
      )}%`;
    }), a = N(() => {
      const { dropColor: o, riseColor: s, syncTextColor: l, textColor: i, rate: r } = e;
      return {
        color: r === 0 ? i : l ? t.rateTrend ? s : o : i
      };
    });
    return ce(G({}, me(t)), { calcRate: n, calcStyle: a });
  }
}), Cy = { class: "nut-trend-arrow" };
function Ty(e, t, n, a, o, s) {
  const l = j("TriangleUp"), i = j("TriangleDown");
  return u(), d("view", Cy, [
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
const Ny = /* @__PURE__ */ K(Sy, [["render", Ty]]), { create: Dy } = Y("tour"), Iy = Dy({
  components: {
    NutPopover: Io,
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
    }), a = P({}), o = N(() => "nut-tour"), s = N(() => {
      const { offset: f, maskWidth: y, maskHeight: g } = e, { width: v, height: b, left: k, top: c } = a.value, $ = [k + v / 2, c + b / 2], h = Number(y || v), w = Number(g || b);
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
      a.value = y;
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
      maskStyle: s,
      changeStep: l,
      close: r,
      handleClickMask: p
    });
  }
}), _y = {
  key: 0,
  class: "nut-tour-content"
}, By = {
  key: 0,
  class: "nut-tour-content-top"
}, My = { class: "nut-tour-content-inner" }, Ey = { class: "nut-tour-content-bottom" }, Ly = { class: "nut-tour-content-bottom-init" }, Py = { class: "nut-tour-content-bottom-operate" }, Ay = {
  key: 1,
  class: "nut-tour-content nut-tour-content-tile"
}, zy = { class: "nut-tour-content-inner" };
function Vy(e, t, n, a, o, s) {
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
              e.type == "step" ? (u(), d("div", _y, [
                e.showTitleBar ? (u(), d("div", By, [
                  m("div", {
                    onClick: t[1] || (t[1] = (...f) => e.close && e.close(...f))
                  }, [
                    le(l, { class: "nut-tour-content-top-close" })
                  ])
                ])) : C("", !0),
                m("div", My, B(r.content), 1),
                m("div", Ey, [
                  m("div", Ly, B(e.active + 1) + "/" + B(e.steps.length), 1),
                  m("div", Py, [
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
              e.type == "tile" ? (u(), d("div", Ay, [
                m("div", zy, B(r.content), 1)
              ])) : C("", !0)
            ])
          ]),
          _: 2
        }, 1032, ["visible", "location", "bg-color", "theme", "offset", "arrow-offset"])
      ], 64)) : C("", !0)
    ]))), 128))
  ], 2);
}
const Oy = /* @__PURE__ */ K(Iy, [["render", Vy]]), { create: Hy } = Y("address"), Ry = "NutAddress", Fy = Hy({
  components: {
    NutPopup: Ee,
    NutElevator: to,
    Location: Js,
    Location2: na,
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
    const n = ke(Ry), a = P(null), o = P(null), s = P(e.visible), l = P(e.type), i = P(0), r = P(0), p = P(["province", "city", "country", "town"]), f = P(null), y = P([0, 0, 0, 0]), g = ue([]), v = N(() => {
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
    }, W = (q) => {
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
      $.value = q == "cross" ? "cross" : "self", s.value = !1;
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
      W(H);
    };
    return Q(
      () => e.visible,
      (q) => {
        s.value = q;
      }
    ), Q(
      () => s.value,
      (q) => {
        q && w();
      }
    ), ce(G({
      showPopup: s,
      privateType: l,
      tabIndex: i,
      tabName: p,
      selectedRegion: k,
      switchModule: F,
      closeWay: $,
      close: Z,
      getTabName: I,
      nextAreaList: W,
      regionLine: a,
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
}), Wy = { class: "nut-address" }, Yy = { class: "nut-address__header" }, jy = { class: "nut-address__header__title" }, Ky = {
  key: 0,
  class: "nut-address__custom"
}, Uy = {
  ref: "tabRegion",
  class: "nut-address__region"
}, Xy = ["onClick"], qy = {
  key: 0,
  class: "active nut-address__region-item"
}, Gy = {
  key: 0,
  class: "nut-address__detail"
}, Zy = {
  ref: "scrollDom",
  class: "nut-address__detail-list"
}, Jy = ["onClick"], Qy = {
  key: 1,
  class: "nut-address__elevator-group"
}, xy = {
  key: 1,
  class: "nut-address__exist"
}, ev = { class: "nut-address__exist-group" }, tv = { class: "nut-address__exist-group-list" }, nv = ["onClick"], ov = { class: "nut-address__exist-item-info" }, lv = {
  key: 0,
  class: "nut-address__exist-item-info-name"
}, sv = {
  key: 1,
  class: "nut-address__exist-item-info-phone"
}, av = { class: "nut-address__exist-item-info-bottom" }, iv = { class: "nut-address__exist-choose-btn" };
function rv(e, t, n, a, o, s) {
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
      m("view", Wy, [
        m("view", Yy, [
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
          m("view", jy, B(e.privateType == "custom" ? e.customAddressTitle || e.translate("selectRegion") : e.existAddressTitle || e.translate("deliveryTo")), 1),
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
        ["custom", "custom2"].includes(e.privateType) ? (u(), d("view", Ky, [
          m("view", Uy, [
            (u(!0), d(ee, null, re(e.selectedRegion, (g, v) => (u(), d("view", {
              key: v,
              class: _(["nut-address__region-item", v == e.tabIndex ? "active" : ""]),
              onClick: (b) => e.changeRegionTab(g, v)
            }, [
              m("view", null, B(e.getTabName(g, v)), 1)
            ], 10, Xy))), 128)),
            e.tabIndex == e.selectedRegion.length ? (u(), d("view", qy, [
              m("view", null, B(e.getTabName(null, e.selectedRegion.length)), 1)
            ])) : C("", !0),
            m("view", {
              ref: "regionLine",
              class: "nut-address__region-line",
              style: L({ left: e.lineDistance + "px" })
            }, null, 4)
          ], 512),
          e.privateType == "custom" ? (u(), d("view", Gy, [
            m("ul", Zy, [
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
                ], 10, Jy);
              }), 128))
            ], 512)
          ])) : (u(), d("view", Qy, [
            le(p, {
              height: e.height,
              "index-list": e.transformData(e.regionList),
              onClickItem: e.handleElevatorItem
            }, null, 8, ["height", "index-list", "onClickItem"])
          ]))
        ])) : (u(), d("view", xy, [
          m("div", ev, [
            m("ul", tv, [
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
                m("div", ov, [
                  g.name ? (u(), d("div", lv, B(g.name), 1)) : C("", !0),
                  g.phone ? (u(), d("div", sv, B(g.phone), 1)) : C("", !0),
                  m("div", av, [
                    m("view", null, B(g.provinceName + g.cityName + g.countyName + g.townName + g.addressDetail), 1)
                  ])
                ])
              ], 10, nv))), 128))
            ])
          ]),
          e.isShowCustomAddress ? (u(), d("div", {
            key: 0,
            class: "nut-address__exist-choose",
            onClick: t[2] || (t[2] = (...g) => e.switchModule && e.switchModule(...g))
          }, [
            m("div", iv, B(e.customAndExistTitle || e.translate("chooseAnotherAddress")), 1)
          ])) : C("", !0)
        ])),
        D(e.$slots, "bottom")
      ])
    ]),
    _: 3
  }, 8, ["visible", "lock-scroll", "round", "teleport-disable", "teleport", "z-index", "onClose", "onClickOverlay"]);
}
const uv = /* @__PURE__ */ K(Fy, [["render", rv]]), { create: cv } = Y("barrage"), dv = cv({
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
    const t = (/* @__PURE__ */ new Date()).getTime(), n = !!Je().default;
    let a = P(document.createElement("div")), o = P(document.createElement("div")), s = null;
    const l = P(e.danmu), i = P(e.rows), r = P(e.top), p = P(0), f = e.speeds, y = P(0);
    ve(() => {
      g(), n && document.addEventListener("visibilitychange", function() {
        document.visibilityState === "hidden" ? (b(), p.value = 0, v("hidden")) : document.visibilityState === "visible" && g();
      });
    }), je(() => {
      l.value = [], b();
    });
    const g = () => {
      y.value = a.value.offsetWidth, n && v("init"), setTimeout(() => {
        var h;
        (h = a.value) == null || h.style.setProperty("--move-distance", `-${y.value}px`), c();
      }, 300);
    }, v = (h) => {
      var W;
      const w = document.getElementsByClassName("slotBody" + t);
      let I = ((W = w == null ? void 0 : w[0]) == null ? void 0 : W.children) || [];
      const T = [];
      I && Array.from(I).forEach((M) => {
        h == "init" ? (M.style.opacity = "0", T.push(M)) : (M.classList = "", M.style = {});
      }), h == "init" && (l.value = T);
    }, b = () => {
      s && (clearTimeout(s), s = null);
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
      b(), s = setTimeout(() => {
        $();
      }, e.frequency);
    }, $ = () => {
      var I;
      const h = e.loop ? p.value % l.value.length : p.value;
      let w = document.createElement("view");
      n && typeof l.value[h] == "object" ? (w = l.value[h], (I = w == null ? void 0 : w.classList) == null || I.add("nut-barrage__item")) : (w.innerHTML = l.value[h], w.classList.add("nut-barrage__item"), o.value.appendChild(w)), Te(() => {
        var W;
        const T = w.offsetHeight;
        if ((W = w == null ? void 0 : w.classList) == null || W.add("move"), w.style.animationDuration = `${f}ms`, w.style.top = h % i.value * (T + r.value) + 20 + "px", w.style.opacity = "1", !n) {
          const M = w.offsetWidth;
          w.style.width = M + 20 + "px";
        }
        w.addEventListener("animationend", () => {
          n ? w.classList.remove("move") : o.value.removeChild(w);
        }), !(!e.loop && p.value >= l.value.length - 1) && (p.value++, p.value >= l.value.length && (p.value = 0), w.removeEventListener("animationend", () => {
        }), c());
      });
    };
    return { classTime: t, danmuList: l, dmBody: a, dmContainer: o, add: k };
  }
}), fv = {
  ref: "dmBody",
  class: "nut-barrage"
};
function pv(e, t, n, a, o, s) {
  return u(), d("div", fv, [
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
const mv = /* @__PURE__ */ K(dv, [["render", pv]]), { create: hv } = Y("signature"), gv = "NutSignature", yv = hv({
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
    const n = ke(gv), a = P(null), o = P(null), s = N(() => ({
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
      a.value.addEventListener(l.events[0], p, !1);
    }, p = ($) => {
      $.preventDefault(), l.ctx.beginPath(), l.ctx.lineWidth = e.lineWidth, l.ctx.strokeStyle = e.strokeStyle, t("start"), a.value.addEventListener(l.events[1], f, !1), a.value.addEventListener(l.events[2], y, !1), a.value.addEventListener(l.events[3], g, !1);
    }, f = ($) => {
      $.preventDefault();
      let h = l.isSupportTouch ? $.touches[0] : $;
      t("signing", h);
      let w = a.value.getBoundingClientRect(), I = h.clientX - w.left, T = h.clientY - w.top;
      l.ctx.lineTo(I, T), l.ctx.stroke();
    }, y = ($) => {
      $.preventDefault(), t("end"), a.value.removeEventListener(l.events[1], f, !1), a.value.removeEventListener(l.events[2], y, !1);
    }, g = ($) => {
      $.preventDefault(), a.value.removeEventListener(l.events[1], f, !1), a.value.removeEventListener(l.events[2], y, !1);
    }, v = () => {
      a.value.addEventListener(l.events[2], y, !1), l.ctx.clearRect(0, 0, l.canvasWidth, l.canvasHeight), l.ctx.closePath(), t("clear");
    }, b = () => {
      c(a.value);
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
      i() && (l.ctx = a.value.getContext("2d"), l.canvasWidth = o.value.offsetWidth, l.canvasHeight = o.value.offsetHeight, r());
    }), ce(G({}, me(l)), { canvas: a, wrap: o, isCanvasSupported: i, confirm: b, clear: v, classes: s, translate: n });
  }
}), vv = {
  ref: "wrap",
  class: "nut-signature-inner"
}, $v = ["height", "width"], bv = {
  key: 0,
  class: "nut-signature-unsopport"
};
function kv(e, t, n, a, o, s) {
  const l = j("nut-button");
  return u(), d("div", {
    class: _(e.classes)
  }, [
    m("div", vv, [
      Ce(m("canvas", {
        ref: "canvas",
        height: e.canvasHeight,
        width: e.canvasWidth
      }, null, 8, $v), [
        [De, e.isCanvasSupported()]
      ]),
      e.isCanvasSupported() ? C("", !0) : (u(), d("p", bv, B(e.unSupportTpl || e.translate("unSupportTpl")), 1))
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
const wv = /* @__PURE__ */ K(yv, [["render", kv]]), { create: Sv } = Y("time-select"), Cv = "NutTimeSelect", Tv = Sv({
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
    const n = ke(Cv), a = N(() => ({
      width: "100%",
      height: e.height
    })), o = N(() => e.currentKey), s = N(() => e.currentTime), l = () => {
      t("update:visible", !1), t("select", s.value);
    };
    return Me("currentKey", o), Me("currentTime", s), {
      popStyle: a,
      close: l,
      translate: n
    };
  }
}), Nv = { class: "nut-time-select" }, Dv = { class: "nut-time-select__title" }, Iv = { class: "nut-time-select__title__fixed" }, _v = { key: 0 }, Bv = { class: "nut-time-select__content" }, Mv = { class: "nut-time-select__content__pannel" }, Ev = { class: "nut-time-select__content__detail" };
function Lv(e, t, n, a, o, s) {
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
      m("view", Nv, [
        m("view", Dv, [
          m("view", Iv, [
            e.$slots.title ? D(e.$slots, "title", { key: 1 }) : (u(), d("span", _v, B(e.title || e.translate("pickupTime")), 1))
          ])
        ]),
        m("view", Bv, [
          m("view", Mv, [
            D(e.$slots, "pannel")
          ]),
          m("view", Ev, [
            D(e.$slots, "detail")
          ])
        ])
      ])
    ]),
    _: 3
  }, 8, ["teleport-disable", "visible", "style", "lock-scroll", "onClickOverlay", "onClickCloseIcon"]);
}
const Pv = /* @__PURE__ */ K(Tv, [["render", Lv]]), { componentName: Av, create: zv } = Y("time-pannel"), Vv = zv({
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
    const n = Be("currentKey"), a = ue({
      currentKey: n
    }), o = N(() => ({
      [Av]: !0,
      "nut-time-pannel--curr": a.currentKey == e.pannelKey
    })), s = (l) => {
      t.emit("change", l);
    };
    return ce(G({}, me(a)), {
      classes: o,
      handlePannel: s
    });
  }
});
function Ov(e, t, n, a, o, s) {
  return u(), d("view", {
    class: _(e.classes),
    onClick: t[0] || (t[0] = (l) => e.handlePannel(e.pannelKey))
  }, B(e.name), 3);
}
const Hv = /* @__PURE__ */ K(Vv, [["render", Ov]]), { create: Rv } = Y("time-detail"), Fv = Rv({
  name: "timedetail",
  props: {
    times: {
      type: Array,
      default: () => []
    }
  },
  emits: ["select"],
  setup: (e, { emit: t }) => {
    const n = Be("currentKey"), a = Be("currentTime"), o = ue({
      currentKey: n,
      currentTime: a
    }), s = (r) => {
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
      getClass: s,
      renderData: l,
      handleTime: i
    });
  }
}), Wv = { class: "nut-time-detail" }, Yv = { class: "nut-time-detail__detail nut-time-detail__detail--moring" }, jv = { class: "nut-time-detail__detail__list" }, Kv = ["onClick"];
function Uv(e, t, n, a, o, s) {
  return u(), d("view", Wv, [
    m("view", Yv, [
      m("view", jv, [
        (u(!0), d(ee, null, re(e.renderData, (l) => (u(), d("view", {
          key: l,
          class: _(e.getClass(l)),
          onClick: (i) => e.handleTime(l)
        }, B(l), 11, Kv))), 128))
      ])
    ])
  ]);
}
const Xv = /* @__PURE__ */ K(Fv, [["render", Uv]]), { create: qv } = Y("sku-header"), Gv = "NutSkuHeader", Zv = qv({
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
    const n = ke(Gv);
    return {
      getSlots: (o) => t[o],
      translate: n
    };
  }
}), Jv = { class: "nut-sku-header" }, Qv = ["src"], xv = { class: "nut-sku-header-right" }, e2 = {
  key: 3,
  class: "nut-sku-header-right-extra"
};
function t2(e, t, n, a, o, s) {
  const l = j("nut-price");
  return u(), d("view", Jv, [
    m("img", {
      class: "nut-sku-header-img",
      src: e.goods.imagePath
    }, null, 8, Qv),
    m("view", xv, [
      e.getSlots("sku-header-price") ? D(e.$slots, "sku-header-price", { key: 0 }) : (u(), x(l, {
        key: 1,
        price: e.goods.price,
        "need-symbol": !0,
        thousands: !1
      }, null, 8, ["price"])),
      e.getSlots("sku-header-extra") ? D(e.$slots, "sku-header-extra", { key: 2 }) : C("", !0),
      e.goods.skuId && !e.getSlots("sku-header-extra") ? (u(), d("view", e2, B(e.translate("skuId")) + " : " + B(e.goods.skuId), 1)) : C("", !0)
    ])
  ]);
}
const n2 = /* @__PURE__ */ K(Zv, [["render", t2]]), { create: o2 } = Y("sku-select"), l2 = o2({
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
      changeSaleChild: (o, s, l, i) => {
        o.checkFlag || o.disable || t("selectSku", {
          sku: o,
          skuIndex: s,
          parentSku: l,
          parentIndex: i
        });
      }
    };
  }
}), s2 = { class: "nut-sku-select" }, a2 = { class: "nut-sku-select-item-title" }, i2 = { class: "nut-sku-select-item-skus" }, r2 = ["onClick"];
function u2(e, t, n, a, o, s) {
  return u(), d("view", s2, [
    (u(!0), d(ee, null, re(e.skuInfo, (l, i) => (u(), d("view", {
      key: l.id,
      class: "nut-sku-select-item"
    }, [
      m("view", a2, B(l.name), 1),
      m("view", i2, [
        (u(!0), d(ee, null, re(l.list, (r, p) => (u(), d("view", {
          key: r.name,
          class: _(["nut-sku-select-item-skus-sku", [{ active: !r.disable && r.active }, { disable: r.disable }]]),
          onClick: (f) => e.changeSaleChild(r, p, l, i)
        }, B(r.name), 11, r2))), 128))
      ])
    ]))), 128))
  ]);
}
const c2 = /* @__PURE__ */ K(l2, [["render", u2]]), { create: d2 } = Y("sku-stepper"), f2 = d2({
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
}), p2 = { class: "nut-sku-stepper" }, m2 = { class: "nut-sku-stepper-title" }, h2 = ["innerHTML"], g2 = { class: "nut-sku-stepper-count" };
function y2(e, t, n, a, o, s) {
  const l = j("nut-input-number");
  return u(), d("view", p2, [
    m("view", m2, B(e.stepperTitle), 1),
    m("view", {
      class: "nut-sku-stepper-limit",
      innerHTML: e.getExtraText()
    }, null, 8, h2),
    m("view", g2, [
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
const v2 = /* @__PURE__ */ K(f2, [["render", y2]]), { create: $2 } = Y("sku-operate"), b2 = $2({
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
}), k2 = {
  key: 0,
  class: "nut-sku-operate"
}, w2 = {
  key: 0,
  class: "nut-sku-operate-desc"
}, S2 = {
  key: 1,
  class: "nut-sku-operate-btn"
}, C2 = ["onClick"];
function T2(e, t, n, a, o, s) {
  return e.btnOptions.length > 0 ? (u(), d("view", k2, [
    e.btnExtraText ? (u(), d("view", w2, B(e.btnExtraText), 1)) : C("", !0),
    D(e.$slots, "operate-btn"),
    e.getSlots("operate-btn") ? C("", !0) : (u(), d("view", S2, [
      (u(!0), d(ee, null, re(e.btnOptions, (l, i) => (u(), d("view", {
        key: i,
        class: _([`nut-sku-operate-btn-${l}`, "nut-sku-operate-btn-item"]),
        onClick: (r) => e.clickBtnOperate(l)
      }, B(e.getBtnDesc(l)), 11, C2))), 128))
    ]))
  ])) : C("", !0);
}
const N2 = /* @__PURE__ */ K(b2, [["render", T2]]), { create: D2 } = Y("sku"), I2 = "NutSku", _2 = D2({
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
    SkuHeader: n2,
    SkuSelect: c2,
    SkuStepper: v2,
    SkuOperate: N2,
    NutPopup: Ee
  },
  setup(e, { emit: t, slots: n }) {
    const a = ke(I2), o = P(e.visible), s = P(e.stepperMin);
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
      s.value = k, t("changeStepper", k);
    }, p = (k) => {
      t("add", k);
    }, f = (k) => {
      t("reduce", k);
    }, y = (k) => {
      t("overLimit", k);
    }, g = (k) => {
      t("clickBtnOperate", {
        type: k,
        value: s.value
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
      translate: a
    };
  }
}), B2 = { class: "nut-sku" }, M2 = { class: "nut-sku-content" };
function E2(e, t, n, a, o, s) {
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
      m("view", B2, [
        D(e.$slots, "sku-header"),
        e.getSlots("sku-header") ? C("", !0) : (u(), x(l, {
          key: 0,
          goods: e.goods
        }, ht({ _: 2 }, [
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
        m("view", M2, [
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
        }, ht({ _: 2 }, [
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
const L2 = /* @__PURE__ */ K(_2, [["render", E2]]), { create: P2 } = Y("card"), A2 = P2({
  components: {
    NutPrice: ln,
    NutTag: Do
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
}), z2 = { class: "nut-card" }, V2 = { class: "nut-card__left" }, O2 = ["src"], H2 = { class: "nut-card__right" }, R2 = { class: "nut-card__right__title" }, F2 = {
  key: 0,
  class: "nut-card__right__price"
}, W2 = { class: "nut-card__right__other" }, Y2 = { class: "nut-card__right__shop" }, j2 = { class: "nut-card__right__shop__name" };
function K2(e, t, n, a, o, s) {
  const l = j("nut-price"), i = j("nut-tag");
  return u(), d("div", z2, [
    m("div", V2, [
      m("img", {
        src: e.imgUrl,
        alt: ""
      }, null, 8, O2)
    ]),
    m("div", H2, [
      m("div", R2, B(e.title), 1),
      D(e.$slots, "prolist"),
      e.isNeedPrice ? (u(), d("div", F2, [
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
      m("div", W2, [
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
      m("div", Y2, [
        m("div", j2, B(e.shopName), 1),
        D(e.$slots, "footer")
      ])
    ])
  ]);
}
const U2 = /* @__PURE__ */ K(A2, [["render", K2]]), { create: X2 } = Y("ecard"), q2 = "NutEcard", G2 = X2({
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
    const n = ke(q2), a = P(null), o = P(null), s = P(""), l = P(e.cardAmountMin), i = P(e.modelValue), r = (g, v) => {
      a.value = v, l.value = e.cardAmountMin, o.value = g.price, t("change", g), t("update:modelValue", g.price);
    }, p = (g) => {
      let b = g.target.value.replace(/[^\d]/g, "");
      s.value = b, o.value = b, Number(b) > e.cardAmountMax && (s.value = e.cardAmountMax, o.value = e.cardAmountMax), Number(b) < e.cardAmountMin && (s.value = e.cardAmountMin, o.value = e.cardAmountMin), t("inputChange", Number(s.value)), t("update:modelValue", Number(s.value));
    }, f = () => {
      a.value = "input", l.value = e.cardAmountMin, o.value = s.value, t("update:modelValue", s.value), t("inputClick");
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
      currentIndex: a,
      inputValue: s,
      money: i,
      translate: n
    };
  }
}), Z2 = { class: "nut-ecard" }, J2 = { class: "nut-ecard__title" }, Q2 = { class: "nut-ecard__list" }, x2 = ["onClick"], e3 = { class: "nut-ecard__list__input--con" }, t3 = ["placeholder"], n3 = { class: "nut-ecard__list__step" };
function o3(e, t, n, a, o, s) {
  const l = j("nut-input-number");
  return u(), d("view", Z2, [
    m("view", J2, B(e.chooseText || e.translate("chooseText")), 1),
    m("view", Q2, [
      (u(!0), d(ee, null, re(e.dataList, (i, r) => (u(), d("view", {
        key: r,
        class: _(["nut-ecard__list__item", e.currentIndex == r ? "active" : ""]),
        onClick: (p) => e.handleClick(i, r)
      }, B(i.price), 11, x2))), 128)),
      m("view", {
        class: _(["nut-ecard__list__input", e.currentIndex == "input" ? "active" : ""]),
        onClick: t[2] || (t[2] = (...i) => e.inputClick && e.inputClick(...i))
      }, [
        m("view", null, B(e.otherValueText || e.translate("otherValueText")), 1),
        m("view", e3, [
          Ce(m("input", {
            "onUpdate:modelValue": t[0] || (t[0] = (i) => e.inputValue = i),
            class: "nut-ecard__list__input--input",
            type: "text",
            placeholder: e.placeholder || e.translate("placeholder"),
            onInput: t[1] || (t[1] = (...i) => e.change && e.change(...i))
          }, null, 40, t3), [
            [In, e.inputValue]
          ]),
          ge(" " + B(e.suffix), 1)
        ])
      ], 2),
      m("view", n3, [
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
const l3 = /* @__PURE__ */ K(G2, [["render", o3]]), { create: s3 } = Y("address-list-item"), a3 = "NutAddressList", i3 = s3({
  components: { Del: zn, Edit: ls },
  props: {
    item: {
      type: Object,
      default: {}
    }
  },
  emits: ["delIcon", "editIcon", "clickItem"],
  setup(e, { emit: t }) {
    const n = ke(a3);
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
}), r3 = { class: "nut-address-list-item__info" }, u3 = { class: "nut-address-list-item__info-contact" }, c3 = { class: "nut-address-list-item__info-contact-name" }, d3 = { class: "nut-address-list-item__info-contact-tel" }, f3 = {
  key: 0,
  class: "nut-address-list-item__info-contact-default"
}, p3 = { class: "nut-address-list-item__info-handle" }, m3 = { class: "nut-address-list-item__addr" };
function h3(e, t, n, a, o, s) {
  const l = j("Del"), i = j("Edit");
  return u(), d("div", {
    class: "nut-address-list-item",
    onClick: t[0] || (t[0] = (...r) => e.contentsClick && e.contentsClick(...r))
  }, [
    m("div", r3, [
      m("div", u3, [
        D(e.$slots, "content-top", {}, () => [
          m("div", c3, B(e.item.addressName), 1),
          m("div", d3, B(e.item.phone), 1),
          e.item.defaultAddress ? (u(), d("div", f3, B(e.translate("default")), 1)) : C("", !0)
        ])
      ]),
      m("div", p3, [
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
    m("div", m3, [
      D(e.$slots, "content-addr", {}, () => [
        ge(B(e.item.fullAddress), 1)
      ])
    ])
  ]);
}
const Nn = /* @__PURE__ */ K(i3, [["render", h3]]), { create: g3 } = Y("address-list-general"), y3 = g3({
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
    NutSwipe: $o
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
    let a = null;
    const o = P(!1), s = P(!1), l = (T) => {
      t("delIcon", T, e.item), T.stopPropagation();
    }, i = (T) => {
      t("editIcon", T, e.item), T.stopPropagation();
    }, r = (T) => {
      o.value || (t("clickItem", T, e.item), T.stopPropagation());
    }, p = (T) => {
      t("longDel", T, e.item), T.stopPropagation();
    }, f = (T) => {
      a = 0, s.value = !0, t("longDown", T, e.item);
    };
    return {
      renderCompontent: n,
      showMaskRef: s,
      clickItem: r,
      editClick: i,
      delClick: l,
      delLongClick: p,
      holddownstart: (T) => {
        a = setTimeout(() => {
          f(T);
        }, 300);
      },
      holddownmove: () => {
        clearTimeout(a);
      },
      holddownend: () => {
        clearTimeout(a);
      },
      copyCLick: (T) => {
        t("longCopy", T, e.item), T.stopPropagation();
      },
      hideMaskClick: () => {
        s.value = !1;
      },
      setDefault: (T) => {
        t("longSet", T, e.item), T.stopPropagation();
      },
      maskClick: (T) => {
        a != 0 && (s.value = !1), T.stopPropagation(), T.preventDefault();
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
}), v3 = {
  key: 0,
  class: "nut-address-list-general"
}, $3 = { class: "nut-address-list-swipe" };
function b3(e, t, n, a, o, s) {
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
      m("div", $3, [
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
  })) : (u(), d("div", v3, [
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
const k3 = /* @__PURE__ */ K(y3, [["render", b3]]), { create: w3 } = Y("address-list"), S3 = "NutAddressList", C3 = w3({
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
    GeneralShell: k3,
    NutButton: Ke
  },
  emits: ["delIcon", "editIcon", "clickItem", "longCopy", "longSet", "longDel", "swipeDel", "add"],
  setup(e, { emit: t }) {
    const n = ke(S3), a = P([]), o = ue({
      id: 2,
      addressName: "姓名",
      phone: "123****4567",
      defaultAddress: !1,
      fullAddress: "北京市通州区测试测试测试测试测试测试测试测试测试"
    }), s = () => {
      Object.keys(e.dataOptions).length > 0 && (a.value = e.data.map((b) => Xo(o, b, e.dataOptions)));
    };
    Q(
      () => e.data,
      () => s(),
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
      s();
    }), {
      clickDelIcon: l,
      clickEditIcon: i,
      clickContentItem: r,
      clickLongCopy: p,
      clickLongSet: f,
      clickLongDel: y,
      clickSwipeDel: g,
      addAddress: v,
      dataArray: a,
      translate: n
    };
  }
}), T3 = { class: "nut-address-list" };
function N3(e, t, n, a, o, s) {
  const l = j("general-shell"), i = j("nut-button");
  return u(), d("div", T3, [
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
    }, ht({
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
const D3 = /* @__PURE__ */ K(C3, [["render", N3]]), { create: I3 } = Y("category"), _3 = I3({
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
    const n = P(0), a = P(!1);
    return {
      getChildList: (s) => {
        n.value = s, t("change", s);
      },
      checkIndex: n,
      categoryLeft: a
    };
  }
}), B3 = { class: "nut-category" }, M3 = { class: "nut-category__cateList" }, E3 = { key: 0 }, L3 = ["onClick"];
function P3(e, t, n, a, o, s) {
  return u(), d("div", B3, [
    m("div", M3, [
      e.type == "classify" || e.type == "text" ? (u(), d("div", E3, [
        (u(!0), d(ee, null, re(e.category, (l, i) => (u(), d("div", {
          key: i,
          class: "nut-category__cateListLeft"
        }, [
          m("div", {
            class: _([e.checkIndex == i ? "nut-category__cateListItemChecked" : "nut-category__cateListItem"]),
            onClick: (r) => e.getChildList(i)
          }, B(l.catName), 11, L3)
        ]))), 128))
      ])) : C("", !0),
      D(e.$slots, "default")
    ])
  ]);
}
const A3 = /* @__PURE__ */ K(_3, [["render", P3]]), { create: z3 } = Y("category-pane"), V3 = z3({
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
      onChange: (a) => {
        t("onChange", a);
      }
    };
  }
}), O3 = { class: "nut-category-pane" }, H3 = {
  key: 0,
  class: "nut-category-pane__cateListRight"
}, R3 = { class: "nut-category-pane__childTitle" }, F3 = {
  key: 0,
  class: "nut-category-pane__childItemList"
}, W3 = ["onClick"], Y3 = ["src"], j3 = { class: "nut-category-pane__skuImg" }, K3 = {
  key: 1,
  class: "nut-category-pane__cateListRight"
}, U3 = { class: "nut-category-pane__childTitle" }, X3 = {
  key: 0,
  class: "nut-category-pane__childItemList"
}, q3 = ["onClick"], G3 = { class: "nut-category-pane__skuName" }, Z3 = {
  key: 2,
  class: "nut-category-pane__selfItemList"
}, J3 = ["onClick"];
function Q3(e, t, n, a, o, s) {
  return u(), d("div", O3, [
    e.type == "classify" ? (u(), d("div", H3, [
      (u(!0), d(ee, null, re(e.categoryChild, (l, i) => (u(), d("div", { key: i }, [
        m("div", R3, B(l == null ? void 0 : l.catName), 1),
        (l == null ? void 0 : l.catType) == 1 ? (u(), d("div", F3, [
          (u(!0), d(ee, null, re(l.childCateList, (r, p) => (u(), d("div", {
            key: p,
            class: "nut-category-pane__childItem",
            onClick: (f) => e.onChange(r)
          }, [
            m("img", {
              class: "nut-category-pane__childImg",
              src: r.backImg
            }, null, 8, Y3),
            m("div", j3, B(r == null ? void 0 : r.catName), 1)
          ], 8, W3))), 128))
        ])) : C("", !0)
      ]))), 128))
    ])) : C("", !0),
    e.type == "text" ? (u(), d("div", K3, [
      (u(!0), d(ee, null, re(e.categoryChild, (l, i) => (u(), d("div", { key: i }, [
        m("div", U3, B(l == null ? void 0 : l.catName), 1),
        (l == null ? void 0 : l.catType) == 1 ? (u(), d("div", X3, [
          (u(!0), d(ee, null, re(l.childCateList, (r, p) => (u(), d("div", {
            key: p,
            class: "nut-category-pane__childItem",
            onClick: (f) => e.onChange(r)
          }, [
            m("div", G3, B(r == null ? void 0 : r.catName), 1)
          ], 8, q3))), 128))
        ])) : C("", !0)
      ]))), 128))
    ])) : C("", !0),
    e.type == "custom" ? (u(), d("div", Z3, [
      (u(!0), d(ee, null, re(e.customCategory, (l, i) => (u(), d("div", {
        key: i,
        class: "nut-category-pane__skuName",
        onClick: (r) => e.onChange(l)
      }, B(l == null ? void 0 : l.catName), 9, J3))), 128))
    ])) : C("", !0)
  ]);
}
const x3 = /* @__PURE__ */ K(V3, [["render", Q3]]), { create: e5 } = Y("comment-header"), t5 = e5({
  components: {
    NutRate: po
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
}), n5 = { class: "nut-comment-header__user" }, o5 = { class: "nut-comment-header__user-avter" }, l5 = ["src"], s5 = { class: "nut-comment-header__user-score" }, a5 = {
  key: 0,
  class: "nut-comment-header__time"
};
function i5(e, t, n, a, o, s) {
  const l = j("nut-rate");
  return u(), d("view", null, [
    e.info ? (u(), d("view", {
      key: 0,
      class: "nut-comment-header",
      onClick: t[1] || (t[1] = (...i) => e.handleClick && e.handleClick(...i))
    }, [
      m("view", n5, [
        m("view", o5, [
          e.info.avatar ? (u(), d("img", {
            key: 0,
            src: e.info.avatar
          }, null, 8, l5)) : C("", !0)
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
          m("view", s5, [
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
      e.info.time ? (u(), d("view", a5, B(e.info.time), 1)) : C("", !0)
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
const r5 = /* @__PURE__ */ K(t5, [["render", i5]]), { create: u5 } = Y("comment-images"), c5 = u5({
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
    const n = P(!1), a = P(1), o = P([]);
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
    }), { isShowImage: n, initIndex: a, showImages: (l, i) => {
      const { videos: r, images: p } = e, f = l == "img" ? i - r.length : i;
      t("clickImages", {
        type: l,
        index: f,
        value: l == "img" ? p[f] : r[f]
      });
    }, totalImages: o };
  }
}), d5 = ["onClick"], f5 = ["src"], p5 = /* @__PURE__ */ m("view", { class: "nut-comment-images__play" }, null, -1), m5 = ["onClick"], h5 = ["src"], g5 = {
  key: 0,
  class: "nut-comment-images__mask"
};
function y5(e, t, n, a, o, s) {
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
      }, null, 8, f5),
      p5
    ], 8, d5))), 128)),
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
        }, null, 8, h5),
        e.type == "multi" && e.totalImages.length > 9 && e.videos.length + r > 7 ? (u(), d("view", g5, [
          m("span", null, "共 " + B(e.totalImages.length) + " 张", 1),
          le(l, { style: { width: "12px" } })
        ])) : C("", !0)
      ], 8, m5)) : C("", !0)
    ], 64))), 128))
  ], 2);
}
const v5 = /* @__PURE__ */ K(c5, [["render", y5]]), { create: $5 } = Y("comment-bottom"), b5 = "NutComment", k5 = $5({
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
  components: { Fabulous: us, Comment: Kl, MoreX: ya },
  emits: ["clickOperate", "handleClick"],
  setup(e, { emit: t }) {
    const n = ke(b5), a = P(!1), o = P([]);
    return ve(() => {
      const i = ["replay", "like", "more"];
      e.operation && e.operation.forEach((r) => {
        i.includes(r) && o.value.push(r);
      });
    }), { showPopver: a, operate: (i) => {
      i == "more" && (a.value = !a.value), t("clickOperate", i);
    }, mergeOp: o, handleClick: () => {
      t("handleClick");
    }, translate: n };
  }
}), w5 = { class: "nut-comment-bottom" }, S5 = { key: 0 }, C5 = { class: "nut-comment-bottom__cpx" }, T5 = ["onClick"];
function N5(e, t, n, a, o, s) {
  const l = j("Fabulous"), i = j("Comment"), r = j("MoreX");
  return u(), d("view", w5, [
    m("view", {
      class: "nut-comment-bottom__lable",
      onClick: t[0] || (t[0] = (...p) => e.handleClick && e.handleClick(...p))
    }, [
      e.type != "complex" ? (u(), d("span", S5, B(e.info.size), 1)) : C("", !0)
    ]),
    m("view", C5, [
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
      ], 10, T5))), 128))
    ])
  ]);
}
const D5 = /* @__PURE__ */ K(k5, [["render", N5]]), { create: I5 } = Y("comment"), _5 = "NutComment", B5 = I5({
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
    CommentHeader: r5,
    CommentImages: v5,
    CommentBottom: D5,
    Right: Gt
  },
  emits: ["click", "clickImages", "clickOperate"],
  setup(e, { emit: t }) {
    const n = ke(_5);
    return { conEllipsis: N(() => e.ellipsis ? e.ellipsis : e.headerType == "complex" ? 6 : 2), clickOperate: (i) => {
      t("clickOperate", i);
    }, handleClick: () => {
      t("click", e.info);
    }, clickImages: (i) => {
      t("clickImages", i);
    }, translate: n };
  }
}), M5 = {
  key: 0,
  class: "nut-comment"
}, E5 = ["innerHTML"], L5 = { class: "nut-comment__follow-title" }, P5 = { class: "nut-comment__follow-com" };
function A5(e, t, n, a, o, s) {
  const l = j("comment-header"), i = j("comment-images"), r = j("Right"), p = j("comment-bottom");
  return e.info && Object.keys(e.info) ? (u(), d("view", M5, [
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
    }, null, 12, E5),
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
      m("view", L5, B(e.translate("additionalReview", e.follow.days)), 1),
      m("view", P5, B(e.follow.content), 1),
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
const z5 = /* @__PURE__ */ K(B5, [["render", A5]]), { componentName: V5, create: O5 } = Y("invoice"), H5 = O5({
  components: {
    NutForm: go,
    NutFormItem: yo,
    NutRadio: co,
    NutRadioGroup: fo,
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
    const n = P(), a = P([]), o = ue({
      // list: []
    }), s = N(() => ({
      [V5]: !0
    }));
    ve(() => {
      l();
    });
    const l = () => {
      a.value = e.data;
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
      classes: s,
      formRef: n,
      list: a,
      submitFun: i
    });
  }
}), R5 = ["onUpdate:modelValue", "placeholder"], F5 = {
  key: 0,
  class: "nut-invoice__submit"
};
function W5(e, t, n, a, o, s) {
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
            }, null, 8, R5)), [
              [In, e.formValue[y.formItemProp]]
            ])
          ]),
          _: 2
        }, 1032, ["label", "required", "rules", "prop"]))), 128))
      ]),
      _: 1
    }, 8, ["model-value"]),
    e.submit ? (u(), d("div", F5, [
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
const Y5 = /* @__PURE__ */ K(H5, [["render", W5]]), { create: j5 } = Y("avatar-cropper"), K5 = j5({
  components: {
    NutButton: Ke,
    Refresh2: Xa,
    Retweet: Qa
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
    const a = ue({
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
    }, s = P(G({}, o)), l = P(), i = P(), r = P(), p = window.devicePixelRatio || 1, f = Ge(), y = N(() => a.angle === 90 || a.angle === 270), g = N(() => {
      const { swidth: U } = s.value, ae = U / p + "px";
      return {
        width: ae,
        height: ae
      };
    }), v = N(() => {
      const { displayWidth: U, scale: ae } = a, { swidth: de, height: fe } = s.value;
      return y.value ? Math.max(0, (fe * ae - de) / 2) : Math.max(0, (U * ae - de) / 2);
    }), b = N(() => {
      const { displayWidth: U, scale: ae } = a, { swidth: de, height: fe } = s.value;
      return y.value ? Math.max(0, (U * ae - de) / 2) : Math.max(0, (fe * ae - de) / 2);
    }), k = (U) => new Promise((ae) => {
      const de = new FileReader();
      de.onloadend = (fe) => ae(fe.target.result), de.readAsDataURL(U);
    }), c = (U) => new Promise((ae) => {
      const de = new Image();
      de.onload = () => ae(de), de.src = U;
    }), $ = () => {
      const { img: U, width: ae, height: de, x: fe, y: be, swidth: Le } = s.value, { moveX: O, moveY: J, scale: se } = a, ie = i.value;
      if (!ie)
        return;
      const he = ie.getContext("2d");
      ie.width = a.displayWidth, ie.height = a.displayHeight, he.clearRect(0, 0, ie.width, ie.height), he.fillStyle = "#666", he.fillRect(0, 0, ie.width, ie.height), he.fillStyle = "#000", he.fillRect(e.space * p, (ie.height - Le) / 2, Le, Le), he.translate(ie.width / 2 + O, ie.height / 2 + J), he.rotate(Math.PI / 180 * a.angle), he.scale(se, se), he.drawImage(U, fe, be, ae, de);
    }, h = (U) => {
      const ae = Oe(l.value), { width: de, height: fe } = ae, be = a.displayWidth = de * p, Le = a.displayHeight = fe * p;
      let O = G({}, o);
      const { width: J, height: se } = U;
      O.img = U;
      const ie = se > J, he = ie ? J / se : se / J;
      O.width = be, O.height = ie ? be / he : be * he, O.x = -O.width / 2, O.y = -O.height / 2, O.swidth = be - e.space * 2 * p, O.sheight = ie ? O.swidth / he : O.swidth * he, O.sx = e.space * p, O.sy = (Le - O.swidth) / 2, s.value = O, a.defScale = O.swidth / (ie ? O.width : O.height), I();
    }, w = (U) => Ue(this, null, function* () {
      a.visible = !0;
      const ae = U.target;
      let { files: de } = ae;
      if (!(de != null && de.length))
        return;
      const fe = yield k(de[0]), be = yield c(fe);
      h(be), $();
    }), I = () => {
      T(a.defScale), a.moveX = 0, a.moveY = 0, a.angle = 0;
    }, T = (U) => {
      U = Pe(U, 0.3, +e.maxZoom + 1), U !== a.scale && (a.scale = U);
    }, W = (U) => Math.sqrt(it(U[0].clientX - U[1].clientX, 2) + it(U[0].clientY - U[1].clientY, 2));
    let M, A, S, E, V;
    const X = (U) => {
      const { touches: ae } = U, { offsetX: de } = f;
      f.start(U), V = ae.length, M = a.moveX, A = a.moveY, a.moving = V === 1, a.zooming = V === 2 && !de.value, a.zooming && (S = a.scale, E = W(U.touches));
    }, Z = (U) => {
      const { touches: ae } = U;
      if (f.move(U), (a.moving || a.zooming) && lt(U, !0), a.moving) {
        const { deltaX: de, deltaY: fe } = f, be = de.value * a.scale + M, Le = fe.value * a.scale + A;
        a.moveX = Pe(be, -v.value, v.value), a.moveY = Pe(Le, -b.value, b.value);
      }
      if (a.zooming && ae.length === 2) {
        const de = W(ae), fe = S * de / E;
        T(fe);
      }
    }, F = (U) => {
      let ae = !1;
      (a.moving || a.zooming) && (ae = !(a.moving && M === a.moveX && A === a.moveY), U.touches.length || (a.zooming && (a.moveX = Pe(a.moveX, -v.value, v.value), a.moveY = Pe(a.moveY, -b.value, b.value), a.zooming = !1), a.moving = !1, M = 0, A = 0, S = a.defScale, a.scale < a.defScale && I(), a.scale > e.maxZoom && (a.scale = +e.maxZoom))), lt(U, ae), f.reset();
    }, oe = () => {
      a.angle = 0;
    }, q = () => {
      if (a.angle === 270) {
        a.angle = 0;
        return;
      }
      a.angle += 90;
    }, H = (U = !0) => {
      a.visible = !1, I(), r.value.value = "", U && t("cancel");
    }, ne = () => {
      const U = i.value, { sx: ae, sy: de, swidth: fe } = s.value, be = fe, Le = fe, O = document.createElement("canvas"), J = O.getContext("2d");
      O.width = be, O.height = Le, U && J.drawImage(U, ae, de, be, Le, 0, 0, be, Le);
      const se = O.toDataURL("image/png");
      t("confirm", se), H(!1);
    };
    return Q(
      () => a.scale,
      () => {
        $();
      }
    ), Q(
      () => a.angle,
      () => {
        Math.abs(a.moveX) > v.value && (a.moveX = v.value), Math.abs(a.moveY) > b.value && (a.moveY = b.value), $();
      }
    ), Q(
      () => a.moveX,
      () => {
        $();
      }
    ), Q(
      () => a.moveY,
      () => {
        $();
      }
    ), n({
      cancel: H,
      reset: oe,
      rotate: q,
      confirm: ne
    }), ce(G({}, me(a)), {
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
}), U5 = ["data-edit-text"], X5 = {
  ref: "cropperPopupRef",
  class: "nut-cropper-popup"
}, q5 = {
  ref: "canvasRef",
  class: "nut-cropper-popup__canvas"
}, G5 = {
  key: 1,
  class: "flex-sb"
};
function Z5(e, t, n, a, o, s) {
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
    ], 8, U5),
    Ce(m("div", X5, [
      m("canvas", q5, null, 512),
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
        e.$slots.toolbar ? D(e.$slots, "toolbar", { key: 0 }) : (u(), d("div", G5, [
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
const J5 = /* @__PURE__ */ K(K5, [["render", Z5]]);
function Q5(e) {
  [Ke, Yn, jn, vt, Ee, cr, vr, br, Cr, Ir, Gn, Zn, Wr, qr, Zr, lu, hu, Su, _u, Lu, Uu, to, pc, no, oo, Lc, Rc, Uc, xc, lo, bd, Ad, lf, af, cf, _f, Qt, qf, co, fo, po, ao, ro, hp, wp, qp, f1, go, yo, $o, I1, R1, K1, G1, xt, hm, km, Bt, Mm, Mt, Gm, th, en, rh, ph, mo, Sh, Lh, Wh, tn, ig, kg, nn, on, ln, sn, xg, i0, eo, Do, Io, C0, _0, W0, ly, uy, gy, ky, Ny, Oy, uv, mv, wv, Pv, Hv, Xv, L2, U2, l3, D3, A3, x3, z5, Y5, J5].forEach((n) => {
    n.install ? e.use(n) : n.name && e.component(n.name, n);
  });
}
const x5 = "4.2.8", s4 = { install: Q5, version: x5 };
export {
  R1 as ActionSheet,
  uv as Address,
  D3 as AddressList,
  uy as Animate,
  Gm as Audio,
  th as AudioOperate,
  en as Avatar,
  J5 as AvatarCropper,
  rh as AvatarGroup,
  K1 as Backtop,
  eo as Badge,
  mv as Barrage,
  Ke as Button,
  lf as Calendar,
  ao as CalendarItem,
  U2 as Card,
  Ad as Cascader,
  A3 as Category,
  x3 as CategoryPane,
  Yn as Cell,
  jn as CellGroup,
  af as Checkbox,
  cf as CheckboxGroup,
  Sh as CircleProgress,
  Cr as Col,
  _0 as Collapse,
  W0 as CollapseItem,
  z5 as Comment,
  cr as ConfigProvider,
  i0 as Countdown,
  xg as Countup,
  _f as DatePicker,
  xt as Dialog,
  Zn as Divider,
  G1 as Drag,
  l3 as Ecard,
  to as Elevator,
  gy as Ellipsis,
  Wh as Empty,
  hu as FixedNav,
  go as Form,
  yo as FormItem,
  Wr as Grid,
  qr as GridItem,
  vr as Image,
  sn as ImagePreview,
  Lc as Indicator,
  hm as InfiniteLoading,
  qf as Input,
  Qt as InputNumber,
  Y5 as Invoice,
  br as Layout,
  ph as List,
  Ln as Locale,
  Su as Menu,
  _u as MenuItem,
  lu as Navbar,
  Lh as Noticebar,
  Bt as Notify,
  f1 as NumberKeyboard,
  vt as Overlay,
  pc as Pagination,
  ro as Picker,
  Io as Popover,
  Ee as Popup,
  ln as Price,
  mo as Progress,
  km as PullRefresh,
  co as Radio,
  fo as RadioGroup,
  lo as Range,
  po as Rate,
  Ir as Row,
  bd as Searchbar,
  hp as ShortPassword,
  Rc as SideNavbar,
  Uc as SideNavbarItem,
  wv as Signature,
  C0 as Skeleton,
  L2 as Sku,
  Zr as Space,
  kg as Step,
  ig as Steps,
  Gn as Sticky,
  xc as SubSideNavbar,
  $o as Swipe,
  I1 as SwipeGroup,
  nn as Swiper,
  on as SwiperItem,
  Mm as Switch,
  oo as TabPane,
  Lu as Tabbar,
  Uu as TabbarItem,
  ly as Table,
  no as Tabs,
  Do as Tag,
  wp as Textarea,
  Xv as TimeDetail,
  Hv as TimePannel,
  Pv as TimeSelect,
  Mt as Toast,
  Oy as Tour,
  Ny as TrendArrow,
  qp as Uploader,
  tn as Video,
  ky as Watermark,
  s4 as default,
  Q5 as install,
  lm as showDialog,
  Ug as showImagePreview,
  l4 as showNotify,
  wo as showToast,
  x5 as version
};
