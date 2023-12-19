var _o = Object.defineProperty, Bo = Object.defineProperties;
var Mo = Object.getOwnPropertyDescriptors;
var vt = Object.getOwnPropertySymbols;
var sn = Object.prototype.hasOwnProperty, an = Object.prototype.propertyIsEnumerable;
var st = Math.pow, Lt = (e, t, n) => t in e ? _o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, G = (e, t) => {
  for (var n in t || (t = {}))
    sn.call(t, n) && Lt(e, n, t[n]);
  if (vt)
    for (var n of vt(t))
      an.call(t, n) && Lt(e, n, t[n]);
  return e;
}, ce = (e, t) => Bo(e, Mo(t));
var $t = (e) => typeof e == "symbol" ? e : e + "", Et = (e, t) => {
  var n = {};
  for (var s in e)
    sn.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && vt)
    for (var s of vt(e))
      t.indexOf(s) < 0 && an.call(e, s) && (n[s] = e[s]);
  return n;
};
var z = (e, t, n) => (Lt(e, typeof t != "symbol" ? t + "" : t, n), n);
var Ke = (e, t, n) => new Promise((s, o) => {
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
import { reactive as ue, ref as P, defineComponent as Dt, h as we, createApp as Lo, useSlots as Qe, openBlock as u, createBlock as x, computed as N, createElementBlock as d, normalizeClass as B, normalizeStyle as L, createElementVNode as m, createTextVNode as ge, toRefs as me, resolveComponent as j, createCommentVNode as S, renderSlot as D, getCurrentInstance as Fe, Fragment as ee, toDisplayString as _, watchEffect as Rt, Transition as Ft, withCtx as te, withDirectives as Se, withModifiers as Ne, vShow as De, watch as Q, Teleport as Eo, mergeProps as ft, createVNode as le, onMounted as ve, onBeforeUnmount as Wt, inject as Be, provide as Me, unref as Nn, onUnmounted as je, shallowReactive as Po, markRaw as rn, isVNode as Ao, Comment as zo, Text as Vo, nextTick as Te, renderList as re, normalizeProps as Oo, guardReactiveProps as Ho, resolveDynamicComponent as Ae, onActivated as mt, createSlots as pt, onBeforeMount as Dn, readonly as un, onDeactivated as ht, render as Yt, vModelText as In } from "vue";
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
const jt = (e, {
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
}, Tt = (e) => {
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
}, Kt = Array.isArray, Wo = (e) => e instanceof Date, Nt = (e) => typeof e == "function", Yo = (e) => typeof e == "string", nt = (e) => e !== null && typeof e == "object", Bn = (e) => nt(e) && Nt(e.then) && Nt(e.catch), jo = document, cn = jo.body, At = (e, t) => {
  try {
    return t.split(".").reduce((n, s) => n[s], e);
  } catch (n) {
    return "";
  }
}, Ko = (e, t, n) => {
  let s = Object.assign({}, e), o = Object.assign({}, n);
  return Object.keys(t).length > 0 ? (Object.keys(s).forEach((a) => {
    if (Object.prototype.hasOwnProperty.call(o, a)) {
      const l = Tt(o[a]);
      l == "function" && (s[a] = o[a](t)), l == "string" && (s[a] = t[o[a]]);
    } else
      t[a] && (s[a] = t[a]);
  }), s) : e;
}, Mn = (e, t) => (Object.keys(t).forEach((n) => {
  let s = e[n], o = t[n];
  nt(s) && nt(o) ? Mn(s, o) : e[n] = o;
}), e);
function Uo(e, t = 2) {
  return Object.is(parseFloat(e), NaN) ? console.log(`传入的值：${e}不是一个数字`) : (e = parseFloat(e), (Math.round((e + Number.EPSILON) * Math.pow(10, t)) / Math.pow(10, t)).toFixed(t));
}
function ot(e, t) {
  (typeof e.cancelable != "boolean" || e.cancelable) && e.preventDefault(), t && e.stopPropagation();
}
const Xe = (e, t = 2) => {
  for (e += ""; e.length < t; )
    e = "0" + e;
  return e.toString();
}, Pe = (e, t, n) => Math.min(Math.max(e, t), n), Ln = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, bt = ue({
  "zh-CN": new Ro(),
  "en-US": new Fo()
});
class En {
  static languages() {
    return bt[this.currentLang.value];
  }
  static use(t, n) {
    n && (bt[t] = new n()), this.currentLang.value = t;
  }
  static merge(t, n) {
    n && (bt[t] ? Mn(bt[t], n) : this.use(t, n));
  }
}
z(En, "currentLang", P("zh-CN"));
const Xo = (e) => e.replace(/-./g, (t) => t[1].toUpperCase());
function W(e) {
  return {
    componentName: "nut-" + e,
    create: function(n) {
      return n.name = "Nut" + Xo("-" + e), n.install = (s) => {
        s.component(n.name, n);
      }, Dt(n);
    }
  };
}
const lt = (e, t) => e ? we(e, t) : "", Ut = (e, t) => {
  let n = document.body;
  const s = e.teleport || "body";
  s != "body" && (Yo(s) ? n = document.querySelector(s) : n = e.teleport);
  const o = document.createElement("view"), a = t.name ? t.name + "-" : "", l = e.id || (/* @__PURE__ */ new Date()).getTime();
  o.id = a + l;
  let i = {};
  Nt(t.wrapper) ? i = t.wrapper(n, o) : i = t.wrapper;
  const r = Lo(i, e), p = t.components;
  return p && p.forEach((f) => {
    r.use(f);
  }), n.appendChild(o), {
    instance: r.mount(o),
    unmount: () => {
      r.unmount(), n.removeChild(o);
    }
  };
}, qo = /* @__PURE__ */ Dt({
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
    return (f, v) => (u(), x(p));
  }
});
function Go(e) {
  return e.name = "IconFont", e.install = (t) => {
    t.component("IconFont", e);
  }, e;
}
Go(qo);
const R = (e) => Dt({
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
const Zo = R("arrow-down2"), Jo = /* @__PURE__ */ m("path", {
  d: "M1741.19 227.497a121.654 121.654 0 1 1 127.858 206.812L1292.65 790.27a182.482 182.482 0 0 1-191.727 0L524.646 434.31a121.654 121.654 0 1 1 127.859-206.812l544.403 335.887c181.387-111.8 362.773-223.965 544.282-335.887",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Qo = [
  Jo
];
function xo(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 2472 1024",
    role: "presentation"
  }, Qo, 6);
}
const el = /* @__PURE__ */ ye(Zo, [["render", xo]]);
R("arrow-right");
R("arrow-right2");
R("arrow-up");
const tl = R("arrow-up2"), nl = /* @__PURE__ */ m("path", {
  d: "M623.406 815.479A129.722 129.722 0 1 1 487.068 594.95C691.9 468.083 896.73 341.993 1101.691 215.125a194.583 194.583 0 0 1 204.442 0l614.494 379.567a129.722 129.722 0 1 1-136.338 220.657l-580.506-358.292-580.377 358.422",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ol = [
  nl
];
function ll(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 2472 1024",
    role: "presentation"
  }, ol, 6);
}
const sl = /* @__PURE__ */ ye(tl, [["render", ll]]);
R("ask");
R("ask2");
R("cart");
R("cart2");
R("category");
const al = R("check-checked"), il = /* @__PURE__ */ m("path", {
  d: "M510.613 2.837C229.793 2.837.032 232.598.032 513.418S229.793 1024 510.613 1024s510.582-229.762 510.582-510.582S794.27 2.837 510.613 2.837zm0 794.238c-156.01 0-283.656-127.646-283.656-283.657s127.645-283.656 283.656-283.656S794.27 357.407 794.27 513.418 666.624 797.075 510.613 797.075z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), rl = /* @__PURE__ */ m("path", {
  d: "M382.968 513.418a127.645 127.645 0 1 0 255.29 0 127.645 127.645 0 1 0-255.29 0Z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1);
function ul(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1032 1024",
    role: "presentation"
  }, [
    il,
    ge(","),
    rl
  ], 6);
}
const dn = /* @__PURE__ */ ye(al, [["render", ul]]), cl = R("check-disabled"), dl = /* @__PURE__ */ m("path", {
  d: "M506.467 0C227.962 0 .094 227.868.094 506.374s227.868 506.373 506.373 506.373 506.374-227.868 506.374-506.373S787.786 0 506.467 0zm202.55 571.077H306.73c-45.01 0-67.516-22.506-67.516-67.517 0-45.01 22.505-67.516 67.516-67.516h402.286c45.01 0 67.516 22.505 67.516 67.516 0 45.011-22.505 67.517-67.516 67.517z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), fl = [
  dl
];
function pl(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, fl, 6);
}
const ml = /* @__PURE__ */ ye(cl, [["render", pl]]), hl = R("check-normal"), gl = /* @__PURE__ */ m("path", {
  d: "M512 1024c-136.533 0-264.533-54.044-361.244-150.756C54.044 776.534 0 648.534 0 512c0-136.533 54.044-264.533 150.756-361.244C247.466 54.044 375.466 0 512 0c136.533 0 264.533 54.044 361.244 150.756C969.956 247.466 1024 375.466 1024 512s-54.044 264.533-150.756 361.244C776.534 969.956 648.534 1024 512 1024zm0-938.667c-113.778 0-221.867 45.511-301.511 125.156S85.333 398.222 85.333 512s45.511 221.867 125.156 301.511S398.222 938.667 512 938.667s221.867-45.511 301.511-125.156S938.667 625.778 938.667 512 893.156 290.133 813.51 210.489 625.778 85.333 512 85.333z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), yl = [
  gl
];
function vl(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, yl, 6);
}
const zt = /* @__PURE__ */ ye(hl, [["render", vl]]), $l = R("Check"), bl = /* @__PURE__ */ m("path", {
  d: "M998.4 245.029c-219.429 153.6-398.629 332.8-552.229 552.228-40.228 58.514-128 54.857-164.571-3.657-69.486-106.057-149.943-186.514-256-256-51.2-32.914-18.286-113.371 40.229-98.743C182.857 460.8 274.286 508.343 358.4 585.143c157.257-190.172 358.4-340.114 588.8-435.2 62.171-25.6 106.057 58.514 51.2 95.086",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), kl = [
  bl
];
function wl(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, kl, 6);
}
const Pn = /* @__PURE__ */ ye($l, [["render", wl]]), Cl = R("checked"), Sl = /* @__PURE__ */ m("path", {
  d: "M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0zm281.6 369.778C779.378 381.156 600.178 500.622 472.178 691.2c0 0 0 2.844-2.845 2.844-8.533 5.69-48.355 36.978-88.177-8.533-39.823-51.2-62.578-99.555-142.223-142.222-2.844 0-2.844-2.845-2.844-2.845-8.533-11.377-39.822-56.888 19.911-56.888 45.511 0 91.022 11.377 162.133 73.955 5.69 5.689 14.223 5.689 17.067 0C469.333 517.69 608.711 366.933 768 318.578c0 0 19.911-2.845 31.289 14.222 5.689 11.378 11.378 22.756-5.689 36.978z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Tl = [
  Sl
];
function Nl(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Tl, 6);
}
const An = /* @__PURE__ */ ye(Cl, [["render", Nl]]), Dl = R("checklist"), Il = /* @__PURE__ */ m("path", {
  d: "M159.289 500.622c62.578 0 125.155 17.067 221.867 102.4 8.533 5.69 19.91 5.69 25.6 0 48.355-54.044 238.933-261.689 455.11-329.955 0 0 28.445-5.69 42.667 19.91 8.534 17.067 19.911 34.134-5.689 54.045-22.755 17.067-264.533 179.2-440.888 440.89l-2.845 2.844c-11.378 8.533-68.267 51.2-119.467-14.223-56.888-71.11-85.333-139.377-196.266-196.266-2.845 0-2.845-2.845-5.69-5.69-11.377-11.377-54.044-73.955 25.6-73.955z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), _l = [
  Il
];
function Bl(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, _l, 6);
}
const Ml = /* @__PURE__ */ ye(Dl, [["render", Bl]]), Ll = R("circle-close"), El = /* @__PURE__ */ m("path", {
  d: "M511.492 73.063a438.425 438.425 0 0 1 310.545 748.953 439.16 439.16 0 1 1-621.09-621.073A435.695 435.695 0 0 1 511.492 73.046m0-73.063C267.49.018 57.468 172.408 9.87 411.717-37.713 651.042 90.39 890.658 315.823 984.03c225.45 93.355 485.444 14.472 621.005-188.416 135.543-202.906 108.885-473.293-63.659-645.82A509.645 509.645 0 0 0 511.492.002zm-175.7 635.495 299.673-299.674c12.049-12.049 24.115-12.049 36.164 0l15.496 15.497c12.05 12.066 12.05 24.115 0 36.18L387.47 687.122c-12.066 12.05-24.115 12.05-36.181 0l-15.497-15.496c-12.049-12.066-12.049-24.115 0-36.182zm0-284.177 15.496-15.497c12.066-12.049 24.115-12.049 36.18 0l299.64 299.674c12.05 12.049 12.05 24.098 0 36.164l-15.496 15.496c-12.05 12.05-24.115 12.05-36.182 0L335.808 387.465c-12.049-12.05-12.049-24.098 0-36.164z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Pl = [
  El
];
function Al(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Pl, 6);
}
const Xt = /* @__PURE__ */ ye(Ll, [["render", Al]]);
R("clock");
R("close-little");
const zl = R("close"), Vl = /* @__PURE__ */ m("path", {
  d: "M981.577 1024c-11.703 0-23.406-2.926-32.183-11.703L13.166 76.07c-14.629-17.555-14.629-46.812 0-64.366 17.554-14.629 46.811-14.629 64.365 0L1013.76 947.93c17.554 17.555 17.554 43.886 0 61.44-8.777 11.703-20.48 14.629-32.183 14.629zm-936.228 0c-11.703 0-23.406-2.926-32.183-11.703-17.555-17.554-17.555-43.886 0-61.44L949.394 14.63c17.555-17.555 43.886-17.555 61.44 0 17.555 17.554 17.555 43.885 0 61.44L74.606 1012.297C68.754 1021.074 57.05 1024 45.349 1024z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ol = [
  Vl
];
function Hl(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1026 1024",
    role: "presentation"
  }, Ol, 6);
}
const It = /* @__PURE__ */ ye(zl, [["render", Hl]]), Rl = R("comment"), Fl = /* @__PURE__ */ m("path", {
  d: "M760.415 876.089H259.793c-132.741 0-242.726-109.985-242.726-242.726V242.726C17.067 109.986 127.052 0 259.793 0h504.414c132.741 0 242.726 109.985 242.726 242.726v394.43c-3.792 132.74-109.985 238.933-246.518 238.933zM259.793 113.778c-72.06 0-128.949 56.889-128.949 128.948v394.43c0 72.059 56.89 128.948 128.949 128.948h504.414c68.267 0 128.949-56.89 128.949-128.948v-394.43c0-72.06-56.89-128.948-128.949-128.948H259.793zm56.888 887.466c-15.17 0-30.34-3.792-41.718-15.17-22.756-22.755-22.756-56.889 0-79.644l109.985-109.986c22.756-22.755 56.889-22.755 79.645 0s22.755 56.89 0 79.645L354.607 986.074c-7.585 7.585-22.755 15.17-37.926 15.17zm193.423-398.222c-45.511 0-91.023-22.755-117.57-56.889-18.964-26.548-15.171-60.681 7.585-79.644 26.548-18.963 60.681-15.17 79.644 7.585 15.17 18.963 45.511 18.963 56.889 0 18.963-22.755 56.889-30.34 79.644-7.585s30.341 56.889 7.585 79.644c-22.755 37.926-68.266 56.89-113.777 56.89z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Wl = [
  Fl
];
function Yl(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Wl, 6);
}
const jl = /* @__PURE__ */ ye(Rl, [["render", Yl]]);
R("date");
const Kl = R("del"), Ul = /* @__PURE__ */ m("path", {
  d: "M668.444 1024H355.556c-142.223 0-256-113.778-256-256V170.667h824.888V768c0 142.222-113.777 256-256 256zM184.89 256v512c0 93.867 76.8 170.667 170.667 170.667h312.888c93.867 0 170.667-76.8 170.667-170.667V256H184.89zm753.778 0H85.333c-22.755 0-42.666-19.911-42.666-42.667s19.91-42.666 42.666-42.666h853.334c22.755 0 42.666 19.91 42.666 42.666S961.423 256 938.667 256zM625.777 85.333H398.223c-22.755 0-42.666-19.91-42.666-42.666S375.466 0 398.222 0h227.556c22.755 0 42.666 19.911 42.666 42.667s-19.91 42.666-42.666 42.666z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Xl = [
  Ul
];
function ql(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Xl, 6);
}
const zn = /* @__PURE__ */ ye(Kl, [["render", ql]]);
R("del2");
R("dongdong");
R("dou-arrow-up");
const Gl = R("down-arrow"), Zl = /* @__PURE__ */ m("path", {
  d: "M128 349.867C93.867 332.8 34.133 341.333 8.533 384-8.533 418.133 0 477.867 42.667 503.467 179.2 588.8 315.733 665.6 443.733 750.933c42.667 25.6 93.867 25.6 136.534 0C716.8 665.6 853.333 588.8 981.333 503.467c42.667-25.6 51.2-76.8 25.6-119.467s-76.8-51.2-119.466-25.6C768 435.2 640 512 512 588.8 384 512 256 435.2 128 349.867",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Jl = [
  Zl
];
function Ql(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Jl, 6);
}
const Vn = /* @__PURE__ */ ye(Gl, [["render", Ql]]);
R("download");
R("dshop");
const xl = R("edit"), es = /* @__PURE__ */ m("path", {
  d: "M285.479 992.97H108.606c-27.927 0-55.854-12.412-77.576-31.03C9.31 940.217 0 915.393 0 884.363l3.103-155.152c0-24.824 9.31-46.545 27.927-65.164L626.812 65.164c83.782-83.782 220.315-83.782 307.2 0 83.782 83.781 83.782 223.418 0 307.2l-605.09 601.988c-12.413 12.412-27.928 18.618-43.443 18.618zM781.964 93.09c-31.03 0-65.164 12.413-89.988 37.237L96.194 729.212 93.09 884.364c0 9.309 6.206 15.515 15.515 15.515h161.358l598.884-595.782c49.649-49.649 49.649-127.224 0-173.77l-3.103-3.103c-21.72-21.721-52.751-34.133-83.781-34.133zm-201.946 78.508 65.816-65.847L882.812 342.73l-65.846 65.784zM946.424 992.97H217.212c-24.824 0-46.545-21.722-46.545-46.546s21.72-46.545 46.545-46.545h729.212c24.824 0 46.546 21.721 46.546 46.545s-21.722 46.546-46.546 46.546z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ts = [
  es
];
function ns(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ts, 6);
}
const os = /* @__PURE__ */ ye(xl, [["render", ns]]);
R("eye");
const ls = R("fabulous"), ss = /* @__PURE__ */ m("path", {
  d: "M584.06 1024H318.577C144.118 1024 0 883.674 0 705.422s140.326-318.578 318.578-318.578v113.778c-113.778 0-204.8 91.022-204.8 204.8s91.022 204.8 204.8 204.8h265.481V1024zm56.888 0h-53.096c-208.593 0-379.26-170.667-379.26-383.052 0-83.437 26.549-163.081 75.852-231.348l3.793-3.793c15.17-22.755 30.34-60.681 45.511-121.363l7.585-34.133c7.586-18.963 15.17-41.718 18.963-68.267C386.844 22.756 470.281 0 519.586 0c117.57 0 178.251 106.193 178.251 212.385v7.585c0 7.586-3.793 18.963-3.793 37.926C876.09 257.896 1024 405.807 1024 587.852v53.096C1024 853.333 853.333 1024 640.948 1024zM519.585 113.778c-30.34 0-41.718 53.096-49.304 87.23-3.792 34.133-11.377 60.68-15.17 83.436l-7.585 34.134c-11.378 45.51-34.133 113.778-60.682 155.496l-7.585 3.793A269.274 269.274 0 0 0 322.37 644.74c0 147.91 121.363 269.274 269.274 269.274h53.097c147.91 0 269.274-121.363 269.274-269.274v-53.097c0-117.57-98.608-216.177-216.178-216.177h-56.889c-18.963-3.793-37.926-15.17-49.304-30.341-11.377-15.17-15.17-37.926-15.17-56.889 7.585-41.718 11.378-64.474 11.378-75.852v-3.792c-3.793 0-3.793-94.815-68.267-94.815z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), as = [
  ss
];
function is(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1061 1024",
    role: "presentation"
  }, as, 6);
}
const rs = /* @__PURE__ */ ye(ls, [["render", is]]), us = R("failure"), cs = /* @__PURE__ */ m("path", {
  d: "M512 1024C229.831 1024 0 794.169 0 512S229.831 0 512 0s512 229.831 512 512-229.831 512-512 512zm0-955.733C266.24 68.267 68.267 266.24 68.267 512S266.24 955.733 512 955.733 955.733 757.76 955.733 512 757.76 68.267 512 68.267zm111.502 282.169c13.654-13.654 34.134-13.654 47.787 0 11.378 11.377 13.653 31.857 2.275 45.51l-2.275 2.276-111.502 111.502 111.502 111.503c13.653 13.653 13.653 34.133 0 47.786-13.653 13.654-34.133 13.654-47.787 0L512 557.511 400.498 669.013c-11.378 11.378-31.858 13.654-45.511 2.276l-2.276-2.276c-11.378-11.377-13.653-31.857-2.275-45.51l2.275-2.276 111.502-111.503-111.502-111.502c-13.653-13.653-13.653-34.133 0-47.786s34.133-13.654 47.787 0L512 461.938l111.502-111.502z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ds = [
  cs
];
function fs(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ds, 6);
}
const On = /* @__PURE__ */ ye(us, [["render", fs]]);
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
const ps = R("image-error"), ms = /* @__PURE__ */ m("path", {
  d: "M696.43 465.25c40.61 0 73.53-32.72 73.53-73.09s-32.96-73.08-73.53-73.08-73.54 32.72-73.54 73.08 32.92 73.09 73.54 73.09zM535.74 650.62l-273.61-259.4a56.19 56.19 0 0 0-15.36 11.58l-114 119.63-6-222.77c-.73-26.82 20.84-49.41 47.67-50.14l201.77-5.44 47.34-50-250.43 6.75C119 202.33 76.33 247.17 77.78 301l7.32 271.4 4.5 166.78C91.06 793 136.05 835.47 190.2 834l176-4.75 12-.32 47.34-50 116.18-122.64z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), hs = /* @__PURE__ */ m("path", {
  d: "m861.71 214.8-242.83-33.86-55.09 41.46L855 263a49.05 49.05 0 0 1 41.79 55.13l-54.33 389.59-120.87-159.05A59.86 59.86 0 0 0 638.06 537l-44 33.08 65.07 86.15L603.84 698l-79.57 60.1-54.92 41.48 34.17 4.76 270.73 37.76a97.55 97.55 0 0 0 109.88-79.6 22.37 22.37 0 0 0 .65-3.44l60.53-434.16c7.44-53.32-29.95-102.62-83.6-110.1z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1);
function gs(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, [
    ms,
    ge(","),
    hs
  ], 6);
}
const ys = /* @__PURE__ */ ye(ps, [["render", gs]]), vs = R("image"), $s = /* @__PURE__ */ m("path", {
  d: "M853.161 892.55H362.595l-209.433-.414a18.5 18.5 0 0 1-1.813-.092c-24.849-2.485-47.825-14.06-64.696-32.595-16.991-18.665-26.35-42.855-26.35-68.112V264.626c0-55.808 45.404-101.211 101.212-101.211H853.16c55.808 0 101.21 45.403 101.21 101.211v225.513c0 .275-.006.552-.018.826-.022.494-1.972 51.723 15.481 85.462 4.717 9.119 1.148 20.335-7.97 25.053-9.117 4.714-20.335 1.15-25.053-7.97-21.3-41.177-19.845-97.643-19.619-103.74V264.627c0-35.307-28.724-64.031-64.03-64.031H161.515c-35.308 0-64.032 28.724-64.032 64.031v526.711c0 32.755 24.321 59.958 56.718 63.62l208.431.412h490.53c35.306 0 64.03-28.725 64.03-64.032l-.382-93.677c-.105-1.75-1.587-19.548-19.55-42.5a9.548 9.548 0 0 1-.147-.19l-21.712-28.489-117.227-155.119c-.416-.55-38.995-50.852-86.272-45.534-38.335 4.315-75.955 45.164-108.79 118.132-17.615 39.141-34.65 68.269-52.082 89.046-17.607 20.986-35.68 33.52-55.251 38.317-43.423 10.638-81.05-18.995-120.887-50.373l-5.057-3.98c-46.555-36.578-68.75-28.224-158.33 59.602-7.33 7.188-19.1 7.071-26.289-.26-7.187-7.33-7.07-19.1.26-26.287 46.659-45.746 77.544-72.727 107.086-84.283 33.358-13.048 64.275-6.267 100.242 21.994l5.093 4.008c33.923 26.72 63.22 49.795 89.029 43.467 25.618-6.279 53.3-42.114 82.28-106.509 39.14-86.976 85.838-134.027 138.797-139.849 68.454-7.515 117.824 57.405 119.892 60.172l117.122 154.98 21.6 28.344c26.277 33.631 27.334 61.639 27.367 64.725l.001.128.384 94.06c.001 55.884-45.4 101.287-101.209 101.287z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), bs = /* @__PURE__ */ m("path", {
  d: "M312.328 446.968c-42.325 0-76.759-34.434-76.759-76.76s34.434-76.759 76.76-76.759 76.759 34.435 76.759 76.76-34.434 76.759-76.76 76.759zm0-116.34c-21.824 0-39.579 17.756-39.579 39.58s17.755 39.58 39.58 39.58 39.579-17.756 39.579-39.58-17.755-39.58-39.58-39.58z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1);
function ks(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, [
    $s,
    ge(","),
    bs
  ], 6);
}
const ws = /* @__PURE__ */ ye(vs, [["render", ks]]);
R("issue");
R("JD");
R("jdl");
R("JIMI40");
const Cs = R("joy-smile"), Ss = /* @__PURE__ */ m("path", {
  d: "M2185.74 479.429a117.992 117.992 0 1 0-162.829-170.852c-284.772 271.204-732.314 271.204-1017.087 0A118.05 118.05 0 0 0 842.996 479.43c375.98 358.045 966.705 358.045 1342.744 0",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ts = [
  Ss
];
function Ns(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 3072 1024",
    role: "presentation"
  }, Ts, 6);
}
const Ds = /* @__PURE__ */ ye(Cs, [["render", Ns]]), Is = R("left"), _s = /* @__PURE__ */ m("path", {
  d: "M642.973 1005.542 321.912 587.098a123.278 123.278 0 0 1 0-150.17l321.06-418.443a47.182 47.182 0 0 1 74.83 57.422l-321.088 418.47a28.994 28.994 0 0 0 0 35.3l321.088 418.47a47.155 47.155 0 0 1-74.83 57.395",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Bs = [
  _s
];
function Ms(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Bs, 6);
}
const qt = /* @__PURE__ */ ye(Is, [["render", Ms]]), Ls = R("link"), Es = /* @__PURE__ */ m("path", {
  d: "M313.034 1004.045c-66.848 0-124.402-24.156-170.798-70.577l-40.854-40.829C54.96 846.218 28.966 783.097 30.83 714.411c3.702-66.85 31.56-131.808 79.819-180.12l137.4-137.373c14.86-14.861 40.855-14.861 55.69 0 14.86 14.861 16.725 38.99 0 55.69l-137.348 137.4a187.47 187.47 0 0 0-55.69 126.24c-1.864 46.422 14.835 89.115 46.396 120.675l40.855 40.855c31.56 31.56 74.253 48.286 120.674 46.421 46.421-1.838 92.843-22.291 126.24-55.69l137.4-137.4c14.862-14.86 40.856-14.86 55.69 0 14.862 14.862 14.862 40.856 0 55.69l-137.4 137.427c-48.285 48.259-113.27 76.117-180.118 79.82a5.645 5.645 0 0 0-7.405 0zm475.294-382.477c-11.133 0-18.563-3.702-27.832-12.997-14.86-14.861-14.86-40.855 0-55.69l115.082-115.108a187.47 187.47 0 0 0 55.716-126.267c1.838-46.395-14.861-89.114-46.421-120.674l-40.855-40.855c-64.985-64.959-176.364-61.257-246.915 9.294L478.266 278.108c-14.835 14.835-40.829 14.835-55.69 0-14.86-14.861-14.86-40.855 0-55.716l118.81-118.81C643.524 1.444 803.163-2.232 899.734 94.287l40.829 40.855c46.421 46.421 72.415 109.541 70.55 178.228-3.702 66.85-31.56 131.807-79.819 180.093L816.186 608.571c-7.43 7.43-18.563 11.133-27.858 12.997zm-332.327-1.864c-11.16 0-18.564-3.702-27.832-12.997-14.888-14.835-14.888-40.829 0-55.69l148.506-148.532c14.861-14.862 40.855-14.862 55.69 0 14.861 14.86 14.861 40.854 0 55.69L483.832 606.706c-7.404 7.43-18.563 11.159-27.831 12.997z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ps = [
  Es
];
function As(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ps, 6);
}
const zs = /* @__PURE__ */ ye(Ls, [["render", As]]), Vs = R("loading"), Os = /* @__PURE__ */ m("path", {
  d: "M784 902.4c9.6 19.2 6.4 41.6-12.8 54.4-19.2 9.6-41.6 3.2-51.2-12.8-9.6-19.2-6.4-41.6 12.8-54.4 16-12.8 38.4-8 51.2 12.8zM550.4 984c0 22.4-16 38.4-38.4 38.4s-38.4-16-38.4-38.4v-24c0-22.4 19.2-38.4 41.6-38.4 19.2 0 35.2 16 38.4 38.4v25.6h-3.2zm-240-43.2c-9.6 19.2-35.2 25.6-54.4 16-19.2-9.6-25.6-35.2-16-51.2l28.8-51.2c9.6-19.2 35.2-25.6 54.4-16s25.6 35.2 12.8 54.4l-25.6 48zM121.6 784c-19.2 9.6-41.6 3.2-54.4-16-9.6-19.2-6.4-41.6 12.8-54.4l76.8-44.8c19.2-9.6 41.6-3.2 54.4 16 9.6 19.2 3.2 41.6-16 54.4L121.6 784zM38.4 552C16 552 0 536 0 513.6s16-38.4 38.4-38.4H160c22.4 0 38.4 19.2 38.4 38.4 0 22.4-16 38.4-38.4 38.4H38.4zm44.8-241.6c-19.2-9.6-25.6-35.2-16-51.2 9.6-19.2 35.2-25.6 54.4-16L256 320c19.2 9.6 25.6 35.2 16 54.4s-35.2 25.6-54.4 16l-134.4-80zm160-185.6 92.8 160c9.6 19.2 35.2 25.6 54.4 12.8s25.6-35.2 12.8-54.4l-92.8-160C297.6 64 275.2 60.8 256 70.4c-16 12.8-22.4 33.6-12.8 54.4zM473.6 40c0-22.4 16-38.4 38.4-38.4s38.4 19.2 38.4 38.4v184c0 22.4-19.2 38.4-38.4 38.4-22.4 0-38.4-19.2-38.4-38.4V40zm240 43.2c9.6-19.2 35.2-25.6 54.4-16 19.2 9.6 25.6 35.2 16 51.2l-92.8 160c-9.6 19.2-35.2 25.6-54.4 16-19.2-9.6-25.6-35.2-12.8-54.4l89.6-156.8zm188.8 160-160 92.8c-19.2 9.6-25.6 35.2-16 54.4 12.8 19.2 35.2 25.6 54.4 12.8l160-92.8c19.2-9.6 25.6-35.2 12.8-54.4-9.6-16-32-25.6-51.2-12.8zM985.6 472c22.4 0 38.4 16 38.4 38.4s-16 38.4-38.4 38.4H800c-22.4 0-38.4-19.2-38.4-38.4 0-22.4 19.2-38.4 38.4-38.4h185.6z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Hs = [
  Os
];
function Rs(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Hs, 6);
}
const xe = /* @__PURE__ */ ye(Vs, [["render", Rs]]), Fs = R("loading1"), Ws = /* @__PURE__ */ m("path", {
  d: "M520.665 64.564a29.244 29.244 0 0 0-7.071-.894c-16.211 0-29.35 13.14-29.35 29.35 0 15.83 12.538 28.696 28.223 29.293v.073c.375 0 .751-.014 1.127-.014 216.493 0 389.629 173.942 389.629 390.433 0 216.496-173.136 388.827-389.63 388.827s-389.63-172.333-389.63-388.829c0-.27.01-.536.01-.804h-.01c0-16.209-13.141-29.35-29.35-29.35s-29.35 13.139-29.35 29.35c0 .055.007.11.007.164-.001.214-.007.425-.007.64 0 247.609 200.722 448.331 448.33 448.331 247.607 0 448.33-200.722 448.33-448.33-.002-245.242-196.917-444.456-441.258-448.24z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ys = [
  Ws
];
function js(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ys, 6);
}
const Ks = /* @__PURE__ */ ye(Fs, [["render", js]]), Us = R("location"), Xs = /* @__PURE__ */ m("path", {
  d: "M512 971.487C259.938 971.487 52.513 764.062 52.513 512S259.938 52.513 512 52.513 971.487 259.938 971.487 512 764.062 971.487 512 971.487zm0-840.205c-210.051 0-380.718 170.667-380.718 380.718S301.95 892.718 512 892.718 892.718 722.05 892.718 512 722.05 131.282 512 131.282zm0 577.641c-107.651 0-196.923-89.272-196.923-196.923S404.349 315.077 512 315.077 708.923 404.349 708.923 512 619.651 708.923 512 708.923zm0-315.077c-65.641 0-118.154 52.513-118.154 118.154S446.36 630.154 512 630.154 630.154 577.64 630.154 512 577.64 393.846 512 393.846zm0-210.051c-21.005 0-39.385-18.38-39.385-39.385V39.385C472.615 18.379 490.995 0 512 0s39.385 18.38 39.385 39.385V144.41c0 21.005-18.38 39.385-39.385 39.385zM512 1024c-21.005 0-39.385-18.38-39.385-39.385V879.59c0-21.005 18.38-39.385 39.385-39.385s39.385 18.38 39.385 39.385v105.025c0 21.006-18.38 39.385-39.385 39.385zm472.615-472.615H879.59c-21.005 0-39.385-18.38-39.385-39.385s18.38-39.385 39.385-39.385h105.025c21.006 0 39.385 18.38 39.385 39.385s-18.38 39.385-39.385 39.385zm-840.205 0H39.385C18.379 551.385 0 533.005 0 512s18.38-39.385 39.385-39.385H144.41c21.005 0 39.385 18.38 39.385 39.385s-18.38 39.385-39.385 39.385z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), qs = [
  Xs
];
function Gs(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, qs, 6);
}
const Zs = /* @__PURE__ */ ye(Us, [["render", Gs]]), Js = R("location2"), Qs = /* @__PURE__ */ m("path", {
  d: "m530.286 1005.714-25.6-10.971c-36.572-14.629-58.515-25.6-73.143-36.572-102.4-84.114-164.572-135.314-193.829-171.885-43.885-51.2-76.8-91.429-106.057-142.629C95.086 577.83 76.8 504.686 76.8 431.543c0-117.029 43.886-226.743 128-307.2C285.257 43.886 394.971 0 512 0s226.743 43.886 310.857 128c84.114 80.457 128 190.171 128 307.2 0 73.143-18.286 146.286-54.857 212.114-25.6 43.886-58.514 91.429-106.057 142.629-29.257 32.914-87.772 84.114-197.486 171.886 0 0-7.314 7.314-18.286 10.971l-43.885 32.914zM497.37 874.057s3.658 3.657 14.629 7.314c3.657-3.657 7.314-3.657 10.971-7.314C621.714 797.257 683.886 742.4 705.83 716.8c40.228-47.543 69.485-87.771 91.428-128 25.6-47.543 40.229-102.4 40.229-157.257 0-87.772-32.915-168.229-95.086-230.4-58.514-58.514-142.629-91.429-230.4-91.429S340.114 142.63 277.943 204.8c-62.172 62.171-95.086 142.629-95.086 230.4 0 54.857 14.629 109.714 40.229 157.257 25.6 43.886 54.857 80.457 95.085 124.343 25.6 29.257 84.115 80.457 179.2 157.257zm18.286-248.686c-102.4 0-182.857-80.457-182.857-182.857s80.457-182.857 182.857-182.857 182.857 80.457 182.857 182.857-80.457 182.857-182.857 182.857zm0-256c-40.228 0-73.143 32.915-73.143 73.143s32.915 73.143 73.143 73.143 73.143-32.914 73.143-73.143-32.914-73.143-73.143-73.143z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), xs = [
  Qs
];
function ea(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, xs, 6);
}
const ta = /* @__PURE__ */ ye(Js, [["render", ea]]);
R("locationg3");
R("lower");
R("marshalling");
const na = R("mask-close"), oa = /* @__PURE__ */ m("path", {
  d: "M512 14.897C238.594 14.897 14.897 238.594 14.897 512S238.594 1009.103 512 1009.103 1009.103 785.406 1009.103 512 785.406 14.897 512 14.897zm207.126 646.234c16.57 16.57 16.57 41.425 0 57.995s-41.425 16.57-57.995 0L512 569.996l-149.13 149.13c-16.57 16.57-41.426 16.57-57.996 0s-16.57-41.425 0-57.995L454.004 512l-149.13-149.13c-16.57-16.57-16.57-41.426 0-57.996s41.425-16.57 57.995 0L512 454.004l149.13-149.13c16.57-16.57 41.426-16.57 57.996 0s16.57 41.425 0 57.995L569.996 512l149.13 149.13z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), la = [
  oa
];
function sa(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, la, 6);
}
const aa = /* @__PURE__ */ ye(na, [["render", sa]]);
R("message");
R("microphone");
const ia = R("minus"), ra = /* @__PURE__ */ m("path", {
  d: "M299.52 460.8h409.6c28.16 0 51.2 23.04 51.2 51.2s-23.04 51.2-51.2 51.2h-409.6c-28.16 0-51.2-23.04-51.2-51.2s23.04-51.2 51.2-51.2z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ua = [
  ra
];
function ca(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ua, 6);
}
const da = /* @__PURE__ */ ye(ia, [["render", ca]]);
R("more-s");
const fa = R("more-x"), pa = /* @__PURE__ */ m("path", {
  d: "M937.115 428.218c-43.442 0-80.679 37.237-80.679 80.679s37.237 80.679 80.68 80.679c43.442 0 80.678-37.237 80.678-80.679s-34.133-80.679-80.679-80.679m-428.218-52.751c-74.473 0-133.43 58.957-133.43 133.43s58.957 133.43 133.43 133.43 133.43-58.957 133.43-133.43-58.957-133.43-133.43-133.43M83.782 428.218c-43.443 0-80.679 37.237-80.679 80.679s34.133 80.679 80.679 80.679 80.679-37.237 80.679-80.679-37.237-80.679-80.68-80.679",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ma = [
  pa
];
function ha(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ma, 6);
}
const ga = /* @__PURE__ */ ye(fa, [["render", ha]]);
R("more");
R("my");
R("my2");
const ya = R("notice"), va = /* @__PURE__ */ m("path", {
  d: "M940.873 819.2h-85.334V430.933c0-192-153.6-345.6-341.333-345.6s-341.333 153.6-341.333 345.6V819.2H87.539V430.933C87.54 192 279.54 0 514.206 0s426.667 192 426.667 430.933V819.2zM514.633 1024c-68.267 0-132.267-29.867-174.934-85.333-17.066-17.067-12.8-42.667 4.267-59.734 17.067-12.8 46.933-12.8 59.733 8.534 29.867 34.133 68.267 51.2 110.934 51.2s81.066-17.067 106.666-51.2c12.8-17.067 42.667-21.334 59.734-8.534 17.066 12.8 21.333 42.667 8.533 59.734C646.899 994.133 582.899 1024 514.633 1024zm469.333-162.133h-12.8c-294.4-89.6-618.667-89.6-913.067 0-21.333 4.266-46.933-8.534-55.466-29.867-8.534-21.333 4.266-46.933 29.866-51.2 311.467-93.867 652.8-89.6 964.267 0 21.333 8.533 34.133 29.867 29.867 51.2-8.534 21.333-25.6 29.867-42.667 29.867z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), $a = [
  va
];
function ba(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1027 1024",
    role: "presentation"
  }, $a, 6);
}
const ka = /* @__PURE__ */ ye(ya, [["render", ba]]);
R("order");
R("people");
const wa = R("photograph"), Ca = /* @__PURE__ */ m("path", {
  d: "M570.514 789.943c-119.954 0-219.428-99.474-219.428-219.429s99.474-219.428 219.428-219.428 219.429 99.474 219.429 219.428-99.474 219.429-219.429 219.429zm0-351.086c-73.143 0-131.657 58.514-131.657 131.657s58.514 131.657 131.657 131.657 131.657-58.514 131.657-131.657-58.514-131.657-131.657-131.657zM877.714 1024h-614.4C117.03 1024 0 906.971 0 760.686V380.343c0-146.286 117.029-263.314 263.314-263.314h32.183c0-2.926 2.926-8.778 2.926-11.703C315.977 43.886 374.49 0 438.857 0h263.314c70.218 0 128.732 49.737 143.36 117.029h32.183c146.286 0 263.315 117.028 263.315 263.314v380.343C1141.029 906.97 1024 1024 877.714 1024zm-614.4-819.2c-96.548 0-175.543 78.994-175.543 175.543v380.343c0 96.548 78.995 175.543 175.543 175.543h614.4c96.549 0 175.543-78.995 175.543-175.543V380.343c0-96.549-78.994-175.543-175.543-175.543H819.2c-32.183 0-58.514-26.331-58.514-58.514S734.354 87.77 702.17 87.77H438.857c-26.331 0-49.737 17.555-55.588 40.96-2.926 5.852-2.926 11.703-2.926 17.555 0 32.183-26.332 58.514-58.514 58.514h-58.515zm-87.771 160.914a73.143 73.143 0 1 0 146.286 0 73.143 73.143 0 1 0-146.286 0Z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Sa = [
  Ca
];
function Ta(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1141 1024",
    role: "presentation"
  }, Sa, 6);
}
const Na = /* @__PURE__ */ ye(wa, [["render", Ta]]);
R("play-circle-fill");
R("play-double-back");
R("play-double-forward");
R("play-start");
R("play-stop");
const Da = R("plus"), Ia = /* @__PURE__ */ m("path", {
  d: "M345.6 460.8h409.6q51.2 0 51.2 51.2t-51.2 51.2H345.6q-51.2 0-51.2-51.2t51.2-51.2zM550.4 256q51.2 0 51.2 51.2v409.6q0 51.2-51.2 51.2t-51.2-51.2V307.2q0-51.2 51.2-51.2z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), _a = [
  Ia
];
function Ba(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, _a, 6);
}
const Ma = /* @__PURE__ */ ye(Da, [["render", Ba]]);
R("poweroff-circle-fill");
const La = R("rect-down"), Ea = /* @__PURE__ */ m("path", {
  d: "M515.072 778.24c-14.336 0-28.672-5.632-39.936-16.384L69.12 356.864c-22.016-22.016-22.016-57.856 0-79.872s57.856-22.016 79.872 0L515.584 642.56 880.64 275.968c22.016-22.016 57.856-22.016 79.872 0s22.016 57.856 0 79.872L555.008 762.368c-10.752 10.752-25.6 15.872-39.936 15.872z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Pa = [
  Ea
];
function Aa(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Pa, 6);
}
const za = /* @__PURE__ */ ye(La, [["render", Aa]]);
R("rect-left");
R("rect-right");
const Va = R("rect-up"), Oa = /* @__PURE__ */ m("path", {
  d: "M920.576 778.24c-14.336 0-28.672-5.632-39.936-16.384L515.072 395.264 148.48 760.832c-22.016 22.016-57.856 22.016-79.872 0s-22.016-57.856 0-79.872l406.528-405.504c22.016-22.016 57.856-22.016 79.872 0l405.504 406.528c22.016 22.016 22.016 57.856 0 79.872-11.264 11.264-25.6 16.384-39.936 16.384z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ha = [
  Oa
];
function Ra(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ha, 6);
}
const Fa = /* @__PURE__ */ ye(Va, [["render", Ra]]);
R("refresh");
const Wa = R("refresh2"), Ya = /* @__PURE__ */ m("path", {
  d: "M771.938 315.077h199.55L958.358 469.99 758.81 364.964c-13.128-7.877-18.38-23.63-10.502-36.759 2.625-7.877 13.128-13.128 23.63-13.128zm-535.63 393.846H44.636L57.764 554.01l191.672 105.026c13.128 7.877 18.38 23.63 10.502 36.759-5.25 7.877-15.753 13.128-23.63 13.128zM509.374 1024C257.313 1024 44.636 845.456 5.251 596.02 0 575.016 15.754 556.637 36.76 551.386c21.005-2.626 42.01 10.502 44.636 31.507 34.133 210.052 215.302 362.339 427.98 362.339 191.671 0 362.338-128.657 417.476-312.452 5.252-21.005 28.882-34.133 49.887-26.256 21.006 5.251 34.134 28.882 26.257 49.887C937.354 871.713 735.179 1024 509.375 1024zm467.364-551.385c-18.379 0-36.759-13.128-39.384-34.133C903.22 231.056 722.05 78.77 509.374 78.77c-191.671 0-362.338 128.657-414.85 312.452-5.252 21.005-28.883 34.133-49.888 26.256-21.005-5.251-34.133-28.882-26.257-49.887C81.395 152.287 283.57 0 509.374 0c252.062 0 464.739 178.544 504.123 427.98 2.626 21.005-10.502 42.01-31.507 44.635h-5.252z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ja = [
  Ya
];
function Ka(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ja, 6);
}
const Ua = /* @__PURE__ */ ye(Wa, [["render", Ka]]), Xa = R("retweet"), qa = /* @__PURE__ */ m("path", {
  d: "M136 552h63.6c4.4 0 8-3.6 8-8V288.7h528.6v72.6c0 1.9.6 3.7 1.8 5.2 2.9 3.6 8.1 4.3 11.7 1.4L893 255.4c4.3-5 3.6-10.3 0-13.2L749.7 129.8c-1.5-1.2-3.3-1.8-5.2-1.8-4.6 0-8.4 3.8-8.4 8.4V209H199.7c-39.5 0-71.7 32.2-71.7 71.8V544c0 4.4 3.6 8 8 8zm752-80h-63.6c-4.4 0-8 3.6-8 8v255.3H287.8v-72.6c0-1.9-.6-3.7-1.8-5.2-2.9-3.6-8.1-4.3-11.7-1.4L131 768.6c-4.3 5-3.6 10.3 0 13.2l143.3 112.4c1.5 1.2 3.3 1.8 5.2 1.8 4.6 0 8.4-3.8 8.4-8.4V815h536.6c39.5 0 71.7-32.2 71.7-71.8V480c-.2-4.4-3.8-8-8.2-8z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ga = [
  qa
];
function Za(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ga, 6);
}
const Ja = /* @__PURE__ */ ye(Xa, [["render", Za]]), Qa = R("right"), xa = /* @__PURE__ */ m("path", {
  d: "M381.262 1005.566c-16.132 21.51-45.708 24.198-67.217 8.066-21.51-16.132-24.198-45.708-8.066-67.217C413.526 806.604 518.384 666.792 625.932 529.67c8.066-10.755 8.066-24.198 0-34.953C518.384 354.906 413.526 215.094 305.979 77.972c-16.132-21.51-10.755-51.085 8.066-67.217C335.555-5.377 365.13 0 381.262 18.82c107.547 142.5 212.405 282.311 319.953 419.434 34.952 43.019 34.952 104.858 0 150.566-107.548 139.811-212.406 279.622-319.953 416.745",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ei = [
  xa
];
function ti(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ei, 6);
}
const Gt = /* @__PURE__ */ ye(Qa, [["render", ti]]);
R("s-follow");
R("scan");
R("scan2");
R("screen-little");
R("search");
R("search2");
const ni = R("service"), oi = /* @__PURE__ */ m("path", {
  d: "M1024 657.723H905.846v-126.03c0-228.431-177.23-413.54-393.846-413.54s-393.846 185.109-393.846 413.54v126.03H0v-126.03C0 236.307 228.43 0 512 0s512 236.308 512 531.692v126.031zM196.923 866.462C86.646 866.462 0 779.815 0 669.538s86.646-196.923 196.923-196.923 196.923 86.647 196.923 196.923S307.2 866.462 196.923 866.462zm0-275.693c-43.323 0-78.77 35.446-78.77 78.77s35.447 78.769 78.77 78.769 78.77-35.446 78.77-78.77-35.447-78.769-78.77-78.769zm630.154 275.693c-110.277 0-196.923-86.647-196.923-196.924S716.8 472.615 827.077 472.615 1024 559.262 1024 669.538s-86.646 196.924-196.923 196.924zm0-275.693c-43.323 0-78.77 35.446-78.77 78.77s35.447 78.769 78.77 78.769 78.77-35.446 78.77-78.77-35.447-78.769-78.77-78.769zm-149.662 429.293c-23.63 0-47.261-15.754-55.138-43.324-7.877-31.507 7.877-63.015 39.385-74.83 102.4-31.508 189.046-102.4 236.307-196.923 15.754-27.57 51.2-39.385 78.77-23.631s39.384 51.2 23.63 78.77c-63.015 122.091-177.23 216.614-307.2 256-3.938 3.938-11.815 3.938-15.754 3.938z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), li = [
  oi
];
function si(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, li, 6);
}
const ai = /* @__PURE__ */ ye(ni, [["render", si]]);
R("setting");
R("share-n");
R("share");
R("share1");
R("shop");
R("shop3");
const ii = R("star-fill-n"), ri = /* @__PURE__ */ m("path", {
  d: "M1047.135 361.244 722.87 312.89 577.802 22.756c-2.844-8.534-11.378-14.223-19.911-17.067-19.911-8.533-45.511-2.845-54.045 17.067L358.78 312.889 34.513 358.4c-8.533 0-17.067 5.689-22.755 11.378-17.067 17.066-14.223 42.666 0 56.889l233.244 227.555-54.044 321.422c-2.845 8.534 0 17.067 2.844 25.6 11.378 19.912 34.133 28.445 54.044 17.067L537.98 867.556l290.133 150.755c8.533 2.845 17.067 5.689 25.6 2.845 22.756-2.845 36.978-25.6 34.133-45.512l-54.044-321.422 233.244-227.555c5.69-5.69 11.378-14.223 11.378-22.756 5.69-19.911-8.533-39.822-31.289-42.667z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ui = [
  ri
];
function ci(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1081 1024",
    role: "presentation"
  }, ui, 6);
}
const fn = /* @__PURE__ */ ye(ii, [["render", ci]]);
R("star-fill");
R("star-fill1");
R("star-fill2");
R("star-n");
R("star");
R("star1");
R("star11");
R("star2");
const di = R("success"), fi = /* @__PURE__ */ m("path", {
  d: "M762.311 391.396C655.36 466.489 566.613 552.96 491.52 659.91c-20.48 27.307-61.44 27.307-79.644-2.275-34.134-52.338-72.818-91.023-125.156-125.156-25.031-15.929-9.102-54.613 20.48-50.062 56.889 11.378 100.124 34.133 143.36 72.818 77.369-93.298 175.218-166.116 286.72-213.903 27.307-9.102 50.062 31.858 25.031 50.063M512 1024C229.831 1024 0 794.169 0 512S229.831 0 512 0s512 229.831 512 512-229.831 512-512 512zm0-955.733C266.24 68.267 68.267 266.24 68.267 512S266.24 955.733 512 955.733 955.733 757.76 955.733 512 757.76 68.267 512 68.267z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), pi = [
  fi
];
function mi(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, pi, 6);
}
const hi = /* @__PURE__ */ ye(di, [["render", mi]]), gi = R("tips"), yi = /* @__PURE__ */ m("path", {
  d: "M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512zm0-938.667c-234.667 0-426.667 192-426.667 426.667s192 426.667 426.667 426.667 426.667-192 426.667-426.667S746.667 85.333 512 85.333zM448 320a64 64 0 1 0 128 0 64 64 0 1 0-128 0Zm-17.067 149.333h51.2c12.8 0 21.334 8.534 21.334 21.334v8.533c0 12.8-8.534 21.333-21.334 21.333h-51.2c-12.8 0-25.6-12.8-25.6-25.6s12.8-25.6 25.6-25.6zm51.2 0H524.8c25.6 0 51.2 21.334 51.2 51.2v8.534L537.6 755.2c0 8.533-8.533 17.067-21.333 17.067H473.6c-25.6 0-51.2-21.334-51.2-51.2v-8.534L460.8 486.4c4.267-8.533 12.8-17.067 21.333-17.067zm8.534 251.734h76.8c12.8 0 25.6 12.8 25.6 25.6s-12.8 25.6-25.6 25.6h-76.8c-12.8 0-21.334-8.534-21.334-21.334v-12.8c4.267-12.8 12.8-17.066 21.334-17.066z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), vi = [
  yi
];
function $i(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, vi, 6);
}
const Hn = /* @__PURE__ */ ye(gi, [["render", $i]]), bi = R("top"), ki = /* @__PURE__ */ m("path", {
  d: "M136.533 540.444c-11.377 0-25.6-5.688-34.133-17.066-14.222-19.911-11.378-45.511 8.533-59.734L477.867 179.2c19.91-14.222 45.51-11.378 59.733 8.533s11.378 45.511-8.533 59.734L162.133 531.91c-5.689 5.689-14.222 8.533-25.6 8.533zm745.245 0c-8.534 0-17.067-2.844-25.6-8.533L489.244 247.467c-19.91-14.223-22.755-42.667-8.533-59.734 14.222-19.91 42.667-22.755 59.733-8.533l366.934 284.444c19.91 14.223 22.755 42.667 8.533 59.734-8.533 11.378-19.911 17.066-34.133 17.066zM512 1024c-22.756 0-42.667-19.911-42.667-42.667v-768c0-22.755 19.911-42.666 42.667-42.666s42.667 19.91 42.667 42.666v768c0 22.756-19.911 42.667-42.667 42.667zM884.622 85.333h-742.4c-22.755 0-42.666-19.91-42.666-42.666S119.466 0 142.222 0h742.4c22.756 0 42.667 19.911 42.667 42.667s-19.911 42.666-42.667 42.666z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), wi = [
  ki
];
function Ci(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, wi, 6);
}
const Si = /* @__PURE__ */ ye(bi, [["render", Ci]]), Ti = R("triangle-down"), Ni = /* @__PURE__ */ m("path", {
  d: "m573.056 752 308.8-404.608A76.8 76.8 0 0 0 820.736 224H203.232a76.8 76.8 0 0 0-61.056 123.392L450.976 752a76.8 76.8 0 0 0 122.08 0z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Di = [
  Ni
];
function Ii(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Di, 6);
}
const _i = /* @__PURE__ */ ye(Ti, [["render", Ii]]), Bi = R("triangle-up"), Mi = /* @__PURE__ */ m("path", {
  d: "m573.056 272 308.8 404.608A76.8 76.8 0 0 1 820.736 800H203.232a76.8 76.8 0 0 1-61.056-123.392L450.976 272a76.8 76.8 0 0 1 122.08 0z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Li = [
  Mi
];
function Ei(e, t, n, s, o, a) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Li, 6);
}
const Pi = /* @__PURE__ */ ye(Bi, [["render", Ei]]);
R("uploader");
R("voice");
const { componentName: Ai, create: zi } = W("button"), Vi = zi({
  components: { Loading: xe },
  props: {
    color: String,
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
    const { type: n, size: s, shape: o, disabled: a, loading: l, color: i, plain: r, block: p } = me(e), f = (g) => {
      !l.value && !a.value && t("click", g);
    }, v = N(() => {
      const g = Ai;
      return {
        [g]: !0,
        [`${g}--${n.value}`]: n.value,
        [`${g}--${s.value}`]: s.value,
        [`${g}--${o.value}`]: o.value,
        [`${g}--plain`]: r.value,
        [`${g}--block`]: p.value,
        [`${g}--disabled`]: a.value,
        [`${g}--loading`]: l.value
      };
    }), y = N(() => {
      var b;
      const g = {};
      return i != null && i.value && (r.value ? (g.color = i.value, g.background = "#fff", (b = i.value) != null && b.includes("gradient") || (g.borderColor = i.value)) : (g.color = "#fff", g.background = i.value)), g;
    });
    return {
      handleClick: f,
      classes: v,
      getStyle: y
    };
  }
}), K = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, Oi = { class: "nut-button__wrap" };
function Hi(e, t, n, s, o, a) {
  const l = j("Loading");
  return u(), d("view", {
    class: B(e.classes),
    style: L(e.getStyle),
    onClick: t[0] || (t[0] = (...i) => e.handleClick && e.handleClick(...i))
  }, [
    m("view", Oi, [
      e.loading ? (u(), x(l, {
        key: 0,
        class: "nut-icon-loading"
      })) : S("", !0),
      e.$slots.icon && !e.loading ? D(e.$slots, "icon", { key: 1 }) : S("", !0),
      e.$slots.default ? (u(), d("view", {
        key: 2,
        class: B({ "nut-button__text": e.$slots.icon || e.loading })
      }, [
        D(e.$slots, "default")
      ], 2)) : S("", !0)
    ])
  ], 6);
}
const qe = /* @__PURE__ */ K(Vi, [["render", Hi]]);
function Zt() {
  return Fe().proxy.$router || null;
}
const _e = (e) => {
  if (e !== void 0)
    return isNaN(Number(e)) ? String(e) : `${e}px`;
}, { componentName: Ri, create: Fi } = W("cell"), Wi = Fi({
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
      const i = Ri;
      return {
        [i]: !0,
        [`${i}--clickable`]: e.isLink || e.to,
        [`${i}--center`]: e.center,
        [`${i}--large`]: e.size == "large"
      };
    }), s = Zt(), o = N(() => ({
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
}), Yi = {
  key: 0,
  class: "nut-cell__icon"
}, ji = {
  key: 1,
  class: "nut-cell__title"
}, Ki = { class: "title" }, Ui = { class: "nut-cell__title-desc" };
function Xi(e, t, n, s, o, a) {
  const l = j("Right");
  return u(), d("view", {
    class: B(e.classes),
    style: L(e.baseStyle),
    onClick: t[0] || (t[0] = (...i) => e.handleClick && e.handleClick(...i))
  }, [
    D(e.$slots, "default", {}, () => [
      e.$slots.icon ? (u(), d("view", Yi, [
        D(e.$slots, "icon")
      ])) : S("", !0),
      e.title || e.subTitle || e.$slots.title ? (u(), d("view", ji, [
        e.subTitle ? (u(), d(ee, { key: 0 }, [
          D(e.$slots, "title", {}, () => [
            m("view", Ki, _(e.title), 1)
          ]),
          m("view", Ui, _(e.subTitle), 1)
        ], 64)) : D(e.$slots, "title", { key: 1 }, () => [
          ge(_(e.title), 1)
        ])
      ])) : S("", !0),
      e.desc || e.$slots.desc ? (u(), d("view", {
        key: 2,
        class: B(["nut-cell__value", { "nut-cell__value--alone": !e.title && !e.subTitle && !e.$slots.title }]),
        style: L(e.descStyle)
      }, [
        D(e.$slots, "desc", {}, () => [
          ge(_(e.desc), 1)
        ])
      ], 6)) : S("", !0),
      D(e.$slots, "link", {}, () => [
        e.isLink || e.to ? (u(), x(l, {
          key: 0,
          class: "nut-cell__link"
        })) : S("", !0)
      ])
    ])
  ], 6);
}
const Rn = /* @__PURE__ */ K(Wi, [["render", Xi]]), { create: qi } = W("cell-group"), Gi = qi({
  props: {
    title: { type: String, default: "" },
    desc: { type: String, default: "" }
  }
}), Zi = { class: "nut-cell-group" }, Ji = {
  key: 1,
  class: "nut-cell-group__title"
}, Qi = {
  key: 3,
  class: "nut-cell-group__desc"
}, xi = { class: "nut-cell-group__wrap" };
function er(e, t, n, s, o, a) {
  return u(), d("view", Zi, [
    e.$slots.title ? D(e.$slots, "title", { key: 0 }) : e.title ? (u(), d("view", Ji, _(e.title), 1)) : S("", !0),
    e.$slots.desc ? D(e.$slots, "desc", { key: 2 }) : e.desc ? (u(), d("view", Qi, _(e.desc), 1)) : S("", !0),
    m("view", xi, [
      D(e.$slots, "default")
    ])
  ]);
}
const Fn = /* @__PURE__ */ K(Gi, [["render", er]]);
let at = 0;
const pn = "nut-overflow-hidden", tr = (e) => [() => {
  if (e())
    try {
      !at && cn.classList.add(pn), at++;
    } catch (s) {
      console.warn("[NutUI] <useLockScroll>", s);
    }
}, () => {
  if (e() && at)
    try {
      at--, !at && cn.classList.remove(pn);
    } catch (s) {
      console.warn("[NutUI] <unlock>", s);
    }
}], { componentName: nr, create: or } = W("overlay"), lr = or({
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
    const [n, s] = tr(() => e.lockScroll), o = N(() => ({
      [nr]: !0,
      [e.overlayClass]: !0
    })), a = N(() => G({
      transitionDuration: `${e.duration}s`,
      zIndex: e.zIndex
    }, e.overlayStyle));
    return Rt(() => {
      e.visible ? n() : s();
    }), { classes: o, style: a, onClick: (i) => {
      t("click", i), e.closeOnClickOverlay && t("update:visible", !1);
    } };
  }
});
function sr(e, t, n, s, o, a) {
  return u(), x(Ft, { name: "overlay-fade" }, {
    default: te(() => [
      Se(m("view", {
        class: B(e.classes),
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
const gt = /* @__PURE__ */ K(lr, [["render", sr]]), yt = {
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
}, { componentName: ar, create: ir } = W("popup"), Wn = 2e3;
let mn = Wn;
const rr = ir({
  components: {
    NutOverlay: gt,
    Close: It
  },
  props: yt,
  emits: ["clickPop", "clickCloseIcon", "open", "close", "opened", "closed", "clickOverlay", "update:visible"],
  setup(e, { emit: t }) {
    const n = ue({
      zIndex: e.zIndex,
      showSlot: !0,
      closed: e.closeable
    }), s = N(() => ({
      [ar]: !0,
      round: e.round,
      [`nut-popup--${e.position}`]: !0,
      [`nut-popup--${e.position}--safebottom`]: e.position === "bottom" && e.safeAreaInsetBottom,
      [e.popClass]: !0
    })), o = N(() => G({
      zIndex: n.zIndex,
      transitionDuration: `${e.duration}s`
    }, e.style)), a = N(() => e.transition ? e.transition : `nut-popup-slide-${e.position}`), l = () => {
      e.zIndex !== Wn && (mn = Number(e.zIndex)), t("update:visible", !0), n.zIndex = ++mn, e.destroyOnClose && (n.showSlot = !0), t("open");
    }, i = () => {
      t("update:visible", !1), t("close"), e.destroyOnClose && setTimeout(() => {
        n.showSlot = !1;
      }, +e.duration * 1e3);
    }, r = (g) => {
      t("clickPop", g);
    }, p = (g) => {
      g.stopPropagation(), t("clickCloseIcon", g), t("update:visible", !1);
    }, f = (g) => {
      t("clickOverlay", g), e.closeOnClickOverlay && t("update:visible", !1);
    }, v = (g) => {
      t("opened", g);
    }, y = (g) => {
      t("closed", g);
    };
    return Q(
      () => e.visible,
      () => {
        e.visible ? l() : i();
      }
    ), Rt(() => {
      n.closed = e.closeable;
    }), ce(G({}, me(n)), {
      popStyle: o,
      transitionName: a,
      classes: s,
      onClick: r,
      onClickCloseIcon: p,
      onClickOverlay: f,
      onOpened: v,
      onClosed: y
    });
  }
});
function ur(e, t, n, s, o, a) {
  const l = j("nut-overlay"), i = j("Close");
  return u(), x(Eo, {
    to: e.teleport,
    disabled: !e.teleportDisable
  }, [
    e.overlay ? (u(), x(l, ft({
      key: 0,
      visible: e.visible,
      "close-on-click-overlay": e.closeOnClickOverlay,
      "z-index": e.zIndex,
      "lock-scroll": e.lockScroll,
      duration: e.duration,
      "overlay-class": e.overlayClass,
      "overlay-style": e.overlayStyle
    }, e.$attrs, { onClick: e.onClickOverlay }), null, 16, ["visible", "close-on-click-overlay", "z-index", "lock-scroll", "duration", "overlay-class", "overlay-style", "onClick"])) : S("", !0),
    le(Ft, {
      name: e.transitionName,
      onAfterEnter: e.onOpened,
      onAfterLeave: e.onClosed
    }, {
      default: te(() => [
        Se(m("view", {
          class: B(e.classes),
          style: L(e.popStyle),
          onClick: t[1] || (t[1] = (...r) => e.onClick && e.onClick(...r))
        }, [
          e.showSlot ? D(e.$slots, "default", { key: 0 }) : S("", !0),
          e.closed ? (u(), d("view", {
            key: 1,
            class: B(["nut-popup__close-icon", "nut-popup__close-icon--" + e.closeIconPosition]),
            onClick: t[0] || (t[0] = (...r) => e.onClickCloseIcon && e.onClickCloseIcon(...r))
          }, [
            D(e.$slots, "close-icon", {}, () => [
              le(i, { height: "12px" })
            ])
          ], 2)) : S("", !0)
        ], 6), [
          [De, e.visible]
        ])
      ]),
      _: 3
    }, 8, ["name", "onAfterEnter", "onAfterLeave"])
  ], 8, ["to", "disabled"]);
}
const Le = /* @__PURE__ */ K(rr, [["render", ur]]), cr = (e) => ({
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
}), { create: dr } = W("config-provider"), fr = dr(cr("div")), { componentName: pr, create: mr } = W("image"), hr = mr({
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
    Image: ws,
    ImageError: ys
  },
  emits: ["click", "load", "error"],
  setup(e, { emit: t }) {
    const n = ue({
      loading: !0,
      isError: !1,
      slotLoding: Qe().loading,
      slotError: Qe().error
    }), s = N(() => {
      const g = pr;
      return {
        [g]: !0,
        [`${g}-round`]: e.round
      };
    }), o = P(null), a = P(!1), l = P(null), i = () => {
      const g = {
        threshold: [0],
        rootMargin: "0px"
      };
      o.value = new IntersectionObserver((b) => {
        b.forEach((w) => {
          w.isIntersecting && (a.value = !0, o.value.disconnect());
        });
      }, g), l.value && o.value.observe(l.value);
    };
    ve(() => {
      e.lazyLoad && i();
    }), Wt(() => {
      o.value && o.value.disconnect();
    });
    const r = N(() => {
      let g = {};
      return e.width && (g.width = _e(e.width)), e.height && (g.height = _e(e.height)), e.radius !== void 0 && e.radius !== null && (g.overflow = "hidden", g.borderRadius = _e(e.radius)), g;
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
    }, v = () => {
      n.isError = !0, n.loading = !1, t("error");
    }, y = (g) => {
      t("click", g);
    };
    return ce(G({}, me(n)), { imageClick: y, classes: s, styles: p, stylebox: r, error: v, load: f, show: a, imgRef: l });
  }
}), gr = ["src", "date-src", "alt"], yr = {
  key: 0,
  class: "nut-img-loading"
}, vr = {
  key: 1,
  class: "nut-img-error"
};
function $r(e, t, n, s, o, a) {
  const l = j("Image"), i = j("ImageError");
  return u(), d("div", {
    class: B(e.classes),
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
    }, null, 44, gr),
    e.loading ? (u(), d("div", yr, [
      e.slotLoding ? S("", !0) : (u(), x(l, {
        key: 0,
        width: "16px",
        height: "20px",
        name: "image"
      })),
      D(e.$slots, "loading")
    ])) : S("", !0),
    e.isError && !e.loading ? (u(), d("div", vr, [
      e.slotError ? S("", !0) : (u(), x(i, {
        key: 0,
        width: "16px",
        height: "20px",
        name: "imageError"
      })),
      D(e.$slots, "error")
    ])) : S("", !0)
  ], 6);
}
const br = /* @__PURE__ */ K(hr, [["render", $r]]), { create: kr } = W("layout"), wr = kr({}), Yn = Symbol("nut-layout"), { create: Cr } = W("col"), Sr = Cr({
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
    const t = "nut-col", n = Be(Yn), s = N(() => ({
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
function Tr(e, t, n, s, o, a) {
  return u(), d("view", {
    class: B(e.classes),
    style: L(e.style)
  }, [
    D(e.$slots, "default")
  ], 6);
}
const Nr = /* @__PURE__ */ K(Sr, [["render", Tr]]), { create: Dr } = W("row"), Ir = Dr({
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
    Me(Yn, e.gutter);
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
function _r(e, t, n, s, o, a) {
  return u(), d("view", {
    class: B(e.classes)
  }, [
    D(e.$slots, "default")
  ], 2);
}
const Br = /* @__PURE__ */ K(Ir, [["render", _r]]), Mr = /scroll|auto|overlay/i, jn = window;
function Lr(e) {
  return e.tagName !== "HTML" && e.tagName !== "BODY" && e.nodeType === 1;
}
function Vt(e, t = jn) {
  let n = e;
  for (; n && n !== t && Lr(n); ) {
    const { overflowY: s } = window.getComputedStyle(n);
    if (Mr.test(s))
      return n;
    n = n.parentNode;
  }
  return t;
}
function Kn(e, t = jn) {
  const n = P();
  return ve(() => {
    e.value && (n.value = Vt(e.value, t));
  }), n;
}
function Er(e) {
  return e === window;
}
const Oe = (e) => {
  const t = Nn(e);
  if (Er(t)) {
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
}, { create: Pr } = W("sticky"), Ar = Pr({
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
      const f = Oe(n), v = s.value, y = Oe(v), g = Oe(p);
      o.height = f.height, o.width = f.width;
      const b = () => {
        let c = !1;
        if (e.position === "top")
          c = p ? a.value > f.top && g.bottom > 0 : a.value > f.top;
        else {
          const $ = document.documentElement.clientHeight;
          c = p ? g.bottom > 0 && $ - a.value - y.height > g.top : $ - a.value < f.bottom;
        }
        return c;
      }, w = () => {
        if (p)
          if (e.position === "top") {
            const c = g.bottom - a.value - y.height;
            return c < 0 ? c : 0;
          } else {
            const c = document.documentElement.clientHeight, $ = g.bottom - (c - a.value);
            return $ < 0 ? $ : 0;
          }
        return 0;
      };
      o.transform = w(), o.fixed = b();
    };
    return Q(
      () => o.fixed,
      (p) => {
        t("change", p);
      }
    ), ve(() => {
      r(), Vt(n.value).addEventListener("scroll", r, !0);
    }), je(() => {
      Vt(n.value).removeEventListener("scroll", r);
    }), { rootRef: n, rootStyle: l, stickyRef: s, stickyStyle: i };
  }
});
function zr(e, t, n, s, o, a) {
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
const Un = /* @__PURE__ */ K(Ar, [["render", zr]]), { create: Vr } = W("divider"), Or = Vr({
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
function Hr(e, t, n, s, o, a) {
  return u(), d("view", {
    class: B(e.classes)
  }, [
    e.direction === "horizontal" ? D(e.$slots, "default", { key: 0 }) : S("", !0)
  ], 2);
}
const Rr = /* @__PURE__ */ K(Or, [["render", Hr]]);
function Fr(e, t) {
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
function Wr(e, t, n) {
  const s = Fr(e.subTree.children, n);
  t.sort((o, a) => s.indexOf(o.vnode) - s.indexOf(a.vnode));
}
function Yr(e, t) {
  const n = Po([]), s = Fe(), o = (i) => {
    i.proxy && (n.push(rn(i)), Wr(s, n, t));
  }, a = (i) => {
    n.splice(n.indexOf(rn(i)), 1);
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
const { componentName: jr } = W("grid"), Xn = Symbol("grid"), Kr = {
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
}, Ur = {
  props: Kr,
  setup(e, { slots: t }) {
    Yr(Xn, "NutGridItem")({ props: e });
    const n = N(() => {
      const o = jr;
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
}, { create: Xr } = W("grid"), qr = Xr(Ur);
function Gr(e) {
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
const { create: Zr, componentName: hn } = W("grid-item"), Jr = Zr({
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
    const n = Gr(Xn);
    if (!n.parent)
      return {};
    const s = n.index, o = n.parent.props, a = N(() => ({
      [hn]: !0
    })), l = N(() => {
      const f = {
        flexBasis: `${100 / +o.columnNum}%`
      };
      return o.square ? f.paddingTop = `${100 / +o.columnNum}%` : o.gutter && (f.paddingRight = _e(o.gutter), s.value >= +o.columnNum && (f.marginTop = _e(o.gutter))), f;
    }), i = N(() => {
      const f = `${hn}__content`;
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
    }), r = Zt();
    return {
      rootClass: a,
      rootStyle: l,
      contentClass: i,
      handleClick: (f) => {
        t("click", f), e.to && r ? r[e.replace ? "replace" : "push"](e.to) : e.url && (e.replace ? location.replace(e.url) : location.href = e.url);
      }
    };
  }
}), Qr = { class: "nut-grid-item__text" };
function xr(e, t, n, s, o, a) {
  return u(), d("view", {
    class: B(e.rootClass),
    style: L(e.rootStyle),
    onClick: t[0] || (t[0] = (...l) => e.handleClick && e.handleClick(...l))
  }, [
    m("view", {
      class: B(e.contentClass)
    }, [
      D(e.$slots, "default"),
      m("view", Qr, [
        e.text ? (u(), d(ee, { key: 0 }, [
          ge(_(e.text), 1)
        ], 64)) : D(e.$slots, "text", { key: 1 })
      ])
    ], 2)
  ], 6);
}
const eu = /* @__PURE__ */ K(Jr, [["render", xr]]), { create: tu, componentName: Je } = W("space"), nu = tu({
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
      const y = `${n(Array.isArray(e.gutter) ? e.gutter[0] : e.gutter)}`, g = `${n(Array.isArray(e.gutter) ? e.gutter[1] : e.gutter)}`;
      return f ? e.wrap ? { marginBottom: g } : {} : (e.direction === "horizontal" && (v.marginRight = y), (e.direction === "vertical" || e.wrap) && (v.marginBottom = g), v);
    }, o = (f = []) => {
      const v = [];
      return f.forEach((y) => {
        Array.isArray(y) ? v.push(...y) : y.type === ee ? v.push(...o(y.children)) : v.push(y);
      }), v.filter(
        (y) => {
          var g;
          return !(y && (y.type === zo || y.type === ee && ((g = y.children) == null ? void 0 : g.length) === 0 || y.type === Vo && y.children.trim() === ""));
        }
      );
    }, { direction: a, wrap: l, fill: i, justify: r, align: p } = e;
    return () => {
      var y;
      const f = o((y = t.default) == null ? void 0 : y.call(t)), v = () => f.map((g, b) => we(
        "div",
        {
          class: `${Je}-item`,
          style: s(b === f.length - 1)
        },
        g
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
        v()
      );
    };
  }
}), { componentName: ou, create: lu } = W("navbar"), su = lu({
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
      const w = ou;
      return {
        [w]: !0,
        [`${w}--border`]: n.value,
        [`${w}--fixed`]: s.value,
        [`${w}--safe-area-inset-top`]: o.value
      };
    }), p = N(() => s.value && a.value ? {
      height: l.value
    } : {}), f = () => {
      if (i.value) {
        const w = i.value.getBoundingClientRect();
        l.value = `${w.height}px`;
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
}), au = {
  key: 1,
  class: "nut-navbar__text"
}, iu = { class: "nut-navbar__title" }, ru = {
  key: 0,
  class: "nut-navbar__text"
};
function uu(e, t, n, s, o, a) {
  const l = j("Left");
  return u(), d("view", {
    class: "nut-navbar--placeholder",
    style: L(e.rootStyle)
  }, [
    m("view", {
      ref: "navbarRef",
      class: B(e.classes),
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
        ]) : S("", !0),
        e.leftText ? (u(), d("view", au, _(e.leftText), 1)) : S("", !0),
        D(e.$slots, "left")
      ]),
      m("view", iu, [
        e.title ? (u(), d("view", {
          key: 0,
          class: "title",
          onClick: t[1] || (t[1] = (...i) => e.handleCenter && e.handleCenter(...i))
        }, _(e.title), 1)) : S("", !0),
        e.titleIcon ? (u(), d("view", {
          key: 1,
          class: "icon",
          onClick: t[3] || (t[3] = (...i) => e.handleCenterIcon && e.handleCenterIcon(...i))
        }, [
          D(e.$slots, "title-icon", {
            onClick: t[2] || (t[2] = (...i) => e.handleCenterIcon && e.handleCenterIcon(...i))
          })
        ])) : S("", !0),
        D(e.$slots, "content")
      ]),
      m("view", {
        class: "nut-navbar__right",
        onClick: t[4] || (t[4] = (...i) => e.handleRight && e.handleRight(...i))
      }, [
        e.desc ? (u(), d("view", ru, _(e.desc), 1)) : S("", !0),
        D(e.$slots, "right")
      ])
    ], 6)
  ], 4);
}
const cu = /* @__PURE__ */ K(su, [["render", uu]]), ke = (e = "") => (t, ...n) => {
  e = e.toLocaleLowerCase();
  const s = En.languages();
  let o = t;
  e && e.startsWith("nut") && (o = `${e.slice(3)}.${t}`);
  const a = At(s, o) || At(s, t);
  return Nt(a) ? a(...n) : a;
}, { create: du } = W("fixed-nav"), fu = "NutFixedNav", pu = du({
  components: {
    NutOverlay: gt,
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
    const n = ke(fu), s = N(() => ({
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
}), mu = { class: "nut-fixed-nav__list" }, hu = ["onClick"], gu = ["src"], yu = { class: "span" }, vu = {
  key: 0,
  class: "b"
}, $u = { class: "text" };
function bu(e, t, n, s, o, a) {
  const l = j("nut-overlay"), i = j("Left");
  return u(), d("view", {
    class: B(e.classes),
    style: L(e.position)
  }, [
    e.overlay ? (u(), x(l, {
      key: 0,
      visible: e.visible,
      "z-index": 200,
      onClick: t[0] || (t[0] = (r) => e.updateValue(!1))
    }, null, 8, ["visible"])) : S("", !0),
    D(e.$slots, "list", {}, () => [
      m("view", mu, [
        (u(!0), d(ee, null, re(e.navList, (r, p) => (u(), d("view", {
          key: r.id || p,
          class: B(["nut-fixed-nav__list-item", { active: r.id == e.current }]),
          onClick: (f) => e.selected(r, f)
        }, [
          m("img", {
            src: r.icon
          }, null, 8, gu),
          m("view", yu, _(r.text), 1),
          r.num ? (u(), d("view", vu, _(r.num), 1)) : S("", !0)
        ], 10, hu))), 128))
      ])
    ]),
    m("div", {
      class: "nut-fixed-nav__btn",
      onClick: t[1] || (t[1] = (r) => e.updateValue())
    }, [
      D(e.$slots, "btn", {}, () => [
        le(i, { color: "#fff" }),
        m("view", $u, _(e.visible ? e.activeText || e.translate("activeText") : e.unActiveText || e.translate("unActiveText")), 1)
      ])
    ])
  ], 6);
}
const ku = /* @__PURE__ */ K(pu, [["render", bu]]), qn = Symbol("nut-menu"), Gn = (e) => {
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
}, Zn = (e) => {
  const t = Be(e, null);
  if (t) {
    const n = Fe(), { link: s, unlink: o } = t;
    s(n), je(() => {
      o(n);
    });
  }
  return { parent: t };
}, { componentName: wu, create: Cu } = W("menu"), Su = Cu({
  components: {
    RectUp: Fa,
    RectDown: za
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
    const t = P(), n = P(0), s = P(!1), { children: o, linkChildren: a } = Gn(qn), l = N(() => o.some((g) => g.state.showWrapper)), i = N(() => ({
      [wu]: !0,
      "scroll-fixed": s.value
    })), r = () => {
      if (t.value) {
        const g = Oe(t);
        e.direction === "down" ? n.value = g.bottom : n.value = window.innerHeight - g.top;
      }
    };
    a({ props: e, offset: n });
    const p = (g) => {
      o.forEach((b, w) => {
        w === g ? (r(), b.toggle()) : b.state.showPopup && b.toggle(!1, { immediate: !0 });
      });
    }, f = (g) => Math.max(0, "scrollTop" in g ? g.scrollTop : g.pageYOffset), v = () => {
      const { scrollFixed: g } = e, b = f(window);
      s.value = b > (typeof g == "boolean" ? 30 : Number(g));
    }, y = (g) => {
      let b = "";
      const { titleClass: w } = e;
      return g && (b += "active"), w && (b += ` ${w}`), b;
    };
    return ve(() => {
      const { scrollFixed: g } = e;
      g && window.addEventListener("scroll", v);
    }), je(() => {
      const { scrollFixed: g } = e;
      g && window.removeEventListener("scroll", v);
    }), {
      toggleItem: p,
      children: o,
      opened: l,
      classes: i,
      barRef: t,
      getClasses: y
    };
  }
}), Tu = ["onClick"], Nu = { class: "nut-menu__title-text" }, Du = { class: "nut-menu__title-icon" };
function Iu(e, t, n, s, o, a) {
  const l = j("RectUp"), i = j("RectDown");
  return u(), d("view", {
    class: B(e.classes)
  }, [
    m("view", {
      ref: "barRef",
      class: B(["nut-menu__bar", { opened: e.opened }])
    }, [
      (u(!0), d(ee, null, re(e.children, (r, p) => (u(), d("view", {
        key: p,
        class: B(["nut-menu__item", { disabled: r.disabled, active: r.state.showPopup }]),
        style: L({ color: r.state.showPopup ? e.activeColor : "" }),
        onClick: (f) => !r.disabled && e.toggleItem(p)
      }, [
        m("view", {
          class: B(["nut-menu__title", e.getClasses(r.state.showPopup)])
        }, [
          m("view", Nu, _(r.renderTitle()), 1),
          m("span", Du, [
            D(e.$slots, "icon", {}, () => [
              e.direction === "up" ? (u(), x(l, { key: 0 })) : (u(), x(i, { key: 1 }))
            ])
          ])
        ], 2)
      ], 14, Tu))), 128))
    ], 2),
    D(e.$slots, "default")
  ], 2);
}
const _u = /* @__PURE__ */ K(Su, [["render", Iu]]), { create: Bu } = W("menu-item"), Mu = Bu({
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
    Check: Pn
  },
  emits: ["update:modelValue", "change", "open", "close"],
  setup(e, { emit: t }) {
    const n = ue({
      showPopup: !1,
      showWrapper: !1
    }), { parent: s } = Zn(qn), o = N(() => s.props.direction === "down" ? {
      top: s.offset.value + "px"
    } : {
      bottom: s.offset.value + "px"
    }), a = N(() => {
      const v = { height: s.offset.value + "px" };
      return s.props.direction === "down" ? ce(G({}, v), { top: "0px" }) : ce(G({}, v), { bottom: "0px" });
    });
    return {
      style: o,
      placeholderElementStyle: a,
      renderTitle: () => {
        var y;
        if (e.title)
          return e.title;
        const v = (y = e.options) == null ? void 0 : y.find((g) => g.value === e.modelValue);
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
function Pu(e, t, n, s, o, a) {
  const l = j("Check"), i = j("nut-popup");
  return Se((u(), d("view", {
    class: "nut-menu-item",
    style: L(e.style)
  }, [
    Se(m("div", {
      class: "nut-menu-item-placeholder-element",
      style: L(e.placeholderElementStyle),
      onClick: t[0] || (t[0] = (...r) => e.handleClickOutside && e.handleClickOutside(...r))
    }, null, 4), [
      [De, e.state.showPopup]
    ]),
    le(i, ft(e.$attrs, {
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
        m("view", Lu, [
          (u(!0), d(ee, null, re(e.options, (r, p) => (u(), d("view", {
            key: p,
            class: B(["nut-menu-item__option", [{ active: r.value === e.modelValue }]]),
            style: L({ "flex-basis": 100 / e.cols + "%" }),
            onClick: (f) => e.onClick(r)
          }, [
            r.value === e.modelValue ? (u(), d("span", {
              key: 0,
              class: B(["nut-menu-item__span", [r.value === e.modelValue ? e.activeTitleClass : e.inactiveTitleClass]])
            }, [
              D(e.$slots, "icon", {}, () => [
                le(l, ft(e.$attrs, {
                  color: e.parent.props.activeColor
                }), null, 16, ["color"])
              ])
            ], 2)) : S("", !0),
            m("view", {
              class: B([r.value === e.modelValue ? e.activeTitleClass : e.inactiveTitleClass]),
              style: L({ color: r.value === e.modelValue ? e.parent.props.activeColor : "" })
            }, _(r.text), 7)
          ], 14, Eu))), 128)),
          D(e.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["visible", "position", "duration", "overlay", "lock-scroll", "close-on-click-overlay", "onClosed"])
  ], 4)), [
    [De, e.state.showWrapper]
  ]);
}
const Au = /* @__PURE__ */ K(Mu, [["render", Pu]]), Jn = Symbol("nut-tabbar"), { create: zu } = W("tabbar"), Vu = zu({
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
function Ou(e, t, n, s, o, a) {
  return u(), d("div", {
    class: B({ "nut-tabbar__placeholder": e.bottom && e.placeholder }),
    style: L({ height: e.height + "px" })
  }, [
    m("view", {
      ref: "nutTabbar",
      class: B(["nut-tabbar", { "nut-tabbar-bottom": e.bottom, "nut-tabbar-safebottom": e.safeAreaInsetBottom }])
    }, [
      D(e.$slots, "default")
    ], 2)
  ], 6);
}
const Hu = /* @__PURE__ */ K(Vu, [["render", Ou]]), { create: Ru } = W("badge"), Fu = Ru({
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
}), Wu = { class: "nut-badge" }, Yu = ["textContent"];
function ju(e, t, n, s, o, a) {
  return u(), d("view", Wu, [
    Se(m("view", {
      class: "nut-badge__icon",
      style: L(e.stl)
    }, [
      D(e.$slots, "icon")
    ], 4), [
      [De, !e.hidden && !e.dot && e.$slots.icon]
    ]),
    D(e.$slots, "default"),
    Se(m("view", {
      class: B(["nut-badge__content nut-badge__content--sup", { "nut-badge__content--dot": e.dot, "nut-badge__content--bubble": !e.dot && e.bubble }]),
      style: L(e.stl),
      textContent: _(e.content)
    }, null, 14, Yu), [
      [De, !e.hidden && (e.content || e.dot)]
    ])
  ]);
}
const Qn = /* @__PURE__ */ K(Fu, [["render", ju]]), { create: Ku } = W("tabbar-item"), Uu = Ku({
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
    }), a = Zt();
    ((p) => {
      var f;
      if (p.proxy) {
        s.children.push(p.proxy);
        const v = s.children.indexOf(p.proxy);
        o.index = (f = e.name) != null ? f : v;
      }
    })(Fe());
    const i = N(() => o.index === s.modelValue);
    function r() {
      var y, g, b;
      let p = (y = e.name) != null ? y : o.index, f = null;
      e.name && (f = s.children.findIndex((w) => w.name == p)), s.changeIndex(f != null ? f : p, o.index);
      let v = f != null ? f : p;
      if ((g = s.children[v]) != null && g.href) {
        window.location.href = s.children[v].href;
        return;
      }
      if ((b = s.children[v]) != null && b.to) {
        let w = s.children[v].to;
        w && a ? a.push(w) : location.replace(w);
      }
    }
    return {
      state: o,
      active: i,
      renderIcon: lt,
      isHaveSlot: n,
      change: r
    };
  }
}), Xu = { class: "nut-tabbar-item_icon-box" }, qu = {
  key: 0,
  class: "nut-tabbar-item_icon-box_icon"
}, Gu = { key: 1 }, Zu = { key: 0 };
function Ju(e, t, n, s, o, a) {
  const l = j("nut-badge");
  return u(), d("div", {
    class: B(["nut-tabbar-item", { "nut-tabbar-item__icon--unactive": !e.active }]),
    style: L({
      color: e.active ? e.state.activeColor : e.state.unactiveColor
    }),
    onClick: t[0] || (t[0] = (i) => e.change())
  }, [
    le(l, Oo(Ho(e.$attrs)), {
      default: te(() => [
        m("view", Xu, [
          e.isHaveSlot("icon") ? (u(), d("div", qu, [
            D(e.$slots, "icon", { active: e.active })
          ])) : S("", !0),
          e.icon && !e.isHaveSlot("icon") ? (u(), d("view", Gu, [
            (u(), x(Ae(e.renderIcon(e.icon)), { class: "nut-popover-item-img" }))
          ])) : S("", !0),
          m("view", {
            class: B([
              "nut-tabbar-item_icon-box_nav-word",
              { "nut-tabbar-item_icon-box_big-word": !e.icon && !e.isHaveSlot("icon") }
            ])
          }, [
            D(e.$slots, "default", {}, () => [
              e.tabTitle ? (u(), d("view", Zu, _(e.tabTitle), 1)) : S("", !0)
            ])
          ], 2)
        ])
      ]),
      _: 3
    }, 16)
  ], 6);
}
const Qu = /* @__PURE__ */ K(Uu, [["render", Ju]]), { create: xu } = W("elevator"), ec = xu({
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
    }), a = N(() => s.value.clientHeight), l = (c, $) => {
      const h = "data-";
      return c.getAttribute(h + $);
    }, i = (c) => {
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
    }, v = (c) => {
      let $ = c.touches[0];
      o.touchState.y2 = $.pageY;
      let h = (o.touchState.y2 - o.touchState.y1) / e.spaceHeight | 0;
      o.codeIndex = o.anchorIndex + h, p(o.codeIndex);
    }, y = () => {
      o.scrollStart = !1;
    }, g = (c, $) => {
      t("clickItem", c, $), o.currentData = $, o.currentKey = c;
    }, b = (c) => {
      t("clickIndex", c);
    }, w = (c) => {
      let h = c.target.scrollTop;
      const k = o.listHeight;
      o.scrollY = h;
      for (let I = 0; I < k.length - 1; I++) {
        let T = k[I], Y = k[I + 1];
        if (o.scrollY >= T && o.scrollY < Y) {
          o.currentIndex = I, o.diff = Y - o.scrollY;
          return;
        }
      }
      o.currentIndex = k.length - 2;
    };
    return ve(() => {
      s.value && s.value.addEventListener("scroll", w);
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
      touchMove: v,
      touchEnd: y,
      handleClickItem: g,
      handleClickIndex: b
    });
  }
}), tc = { class: "nut-elevator" }, nc = { class: "nut-elevator__list__item__code" }, oc = ["onClick"], lc = ["innerHTML"], sc = { class: "nut-elevator__list__fixed" }, ac = { class: "nut-elevator__list__fixed-title" }, ic = { class: "nut-elevator__bars__inner" }, rc = ["data-index", "onClick"];
function uc(e, t, n, s, o, a) {
  var l, i;
  return u(), d("view", tc, [
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
        m("view", nc, _(r[e.acceptKey]), 1),
        (u(!0), d(ee, null, re(r.list, (p) => (u(), d("view", {
          key: p.id,
          class: B(["nut-elevator__list__item__name", {
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
          }, null, 8, lc))
        ], 10, oc))), 128))
      ]))), 128))
    ], 4),
    Se(m("view", sc, [
      m("view", ac, _((i = (l = e.indexList) == null ? void 0 : l[e.currentIndex]) == null ? void 0 : i[e.acceptKey]), 1)
    ], 512), [
      [De, e.scrollY > 0 && e.isSticky]
    ]),
    e.indexList.length ? Se((u(), d("view", {
      key: 0,
      class: "nut-elevator__code--current"
    }, _(e.indexList[e.codeIndex][e.acceptKey]), 513)), [
      [De, e.scrollStart]
    ]) : S("", !0),
    m("view", {
      class: "nut-elevator__bars",
      onTouchstart: t[0] || (t[0] = (...r) => e.touchStart && e.touchStart(...r)),
      onTouchmove: t[1] || (t[1] = Ne((...r) => e.touchMove && e.touchMove(...r), ["stop", "prevent"])),
      onTouchend: t[2] || (t[2] = (...r) => e.touchEnd && e.touchEnd(...r))
    }, [
      m("view", ic, [
        (u(!0), d(ee, null, re(e.indexList, (r, p) => (u(), d("view", {
          key: r[e.acceptKey],
          class: B(["nut-elevator__bars__inner__item", { active: r[e.acceptKey] === e.indexList[e.currentIndex][e.acceptKey] }]),
          "data-index": p,
          onClick: (f) => e.handleClickIndex(r[e.acceptKey])
        }, _(r[e.acceptKey]), 11, rc))), 128))
      ])
    ], 32)
  ]);
}
const xn = /* @__PURE__ */ K(ec, [["render", uc]]), { create: cc } = W("pagination"), dc = "NutPagination", fc = cc({
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
    const n = ke(dc), { modelValue: s, mode: o, showPageSize: a, forceEllipses: l } = me(e), i = N(() => {
      const { pageCount: v, totalItems: y, itemsPerPage: g } = me(e), b = +v.value || Math.ceil(+y.value / +g.value);
      return Math.max(1, b);
    }), r = (v, y) => {
      v > i.value || v < 1 || (v != s.value && t("update:modelValue", v), y && t("change", v));
    }, p = (v, y, g = !1) => ({ number: v, text: y, active: g }), f = N(() => {
      if (o.value == "simple")
        return;
      let v = [];
      const y = i.value, g = +a.value;
      let b = 1, w = y;
      const c = y > g;
      c && (b = Math.max(s.value - Math.floor(g / 2), 1), w = b + +g - 1, w > y && (w = y, b = w - +g + 1));
      for (var $ = b; $ <= w; $++) {
        const h = p($, $, s.value == $);
        v.push(h);
      }
      if (c && g > 0 && l.value) {
        if (b > 1) {
          const h = p(b - 1, "...");
          v.unshift(h);
        }
        if (w < y) {
          const h = p(w + 1, "...");
          v.push(h);
        }
      }
      return v;
    });
    return Rt(() => {
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
}), pc = { class: "nut-pagination" }, mc = {
  key: 0,
  class: "nut-pagination-contain"
}, hc = ["onClick"], gc = {
  key: 1,
  class: "nut-pagination-contain"
}, yc = { class: "nut-pagination-simple" };
function vc(e, t, n, s, o, a) {
  return u(), d("view", pc, [
    m("view", {
      class: B(["nut-pagination-prev", e.mode == "multi" ? "" : "simple-border", e.modelValue == 1 ? "disabled" : ""]),
      onClick: t[0] || (t[0] = (l) => e.select(e.modelValue - 1, !0))
    }, [
      D(e.$slots, "prev-text", {}, () => [
        ge(_(e.prevText || e.translate("prev")), 1)
      ])
    ], 2),
    e.mode == "multi" ? (u(), d("view", mc, [
      (u(!0), d(ee, null, re(e.pages, (l, i) => (u(), d("view", {
        key: i + "pagination",
        class: B(["nut-pagination-item", l.active ? "active" : ""]),
        onClick: (r) => e.select(l.number, !0)
      }, [
        D(e.$slots, "page", { item: l }, () => [
          ge(_(l.text), 1)
        ])
      ], 10, hc))), 128))
    ])) : S("", !0),
    e.mode == "simple" ? (u(), d("view", gc, [
      m("view", yc, _(e.modelValue) + "/" + _(e.countRef), 1)
    ])) : S("", !0),
    m("view", {
      class: B(["nut-pagination-next", e.modelValue >= e.countRef ? "disabled" : ""]),
      onClick: t[1] || (t[1] = (l) => e.select(e.modelValue + 1, !0))
    }, [
      D(e.$slots, "next-text", {}, () => [
        ge(_(e.nextText || e.translate("next")), 1)
      ])
    ], 2)
  ]);
}
const $c = /* @__PURE__ */ K(fc, [["render", vc]]), kt = window, bc = typeof window != "undefined";
function kc() {
  return typeof kt != "undefined" ? kt.requestAnimationFrame || kt.webkitRequestAnimationFrame || function(e) {
    kt.setTimeout(e, 1e3 / 60);
  } : function(e) {
    setTimeout(e, 1e3 / 60);
  };
}
function wc(e) {
  bc ? cancelAnimationFrame(e) : clearTimeout(e);
}
const Ve = kc(), gn = 10;
function Cc(e, t) {
  return e > t && e > gn ? "horizontal" : t > e && t > gn ? "vertical" : "";
}
function Ge() {
  const e = P(0), t = P(0), n = P(0), s = P(0), o = P(0), a = P(0), l = P(0), i = P(0), r = P(""), p = () => r.value === "vertical", f = () => r.value === "horizontal", v = () => {
    o.value = 0, a.value = 0, l.value = 0, i.value = 0, r.value = "";
  };
  return {
    move: (b) => {
      const w = b.touches[0];
      o.value = w.clientX - e.value, a.value = w.clientY - t.value, n.value = w.clientX, s.value = w.clientY, l.value = Math.abs(o.value), i.value = Math.abs(a.value), r.value || (r.value = Cc(l.value, i.value));
    },
    start: (b) => {
      v(), e.value = b.touches[0].clientX, t.value = b.touches[0].clientY;
    },
    reset: v,
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
const Sc = (e, t, n, s) => {
  const o = P(), a = P({ width: 0, height: 0 }), l = () => Ke(void 0, null, function* () {
    var y, g;
    n && n.getEnv() !== n.ENV_TYPE.WEB ? s(o).then(
      (b) => {
        a.value.width = b.width || 0, a.value.height = b.height || 0;
      },
      () => {
      }
    ) : (a.value.width = ((y = o.value) == null ? void 0 : y.clientWidth) || 0, a.value.height = ((g = o.value) == null ? void 0 : g.clientHeight) || 0);
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
  const f = (y, g) => {
    var w;
    let b = y;
    switch (e.direction == "horizontal" ? (p = y > 0 ? "right" : "left", b = Math.abs(b) / a.value.width * 100) : (p = g > 0 ? "bottom" : "top", b = g, b = Math.abs(b) / ((w = a.value) == null ? void 0 : w.height) * 100), b > 85 && (b = 85), p) {
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
    onTouchStart(y) {
      e.swipeable && r.start(y);
    },
    onTouchMove(y) {
      e.swipeable && (r.move(y), i.moving = !0, f(r.deltaX.value, r.deltaY.value), e.direction == "horizontal" && r.isHorizontal() && (y.preventDefault(), y.stopPropagation()), e.direction == "vertical" && r.isVertical() && (y.preventDefault(), y.stopPropagation()));
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
class Tc {
  constructor() {
    z(this, "title", "");
    z(this, "titleSlot");
    z(this, "paneKey", "");
    z(this, "disabled", !1);
  }
}
const { create: Nc } = W("tabs"), Dc = Nc({
  components: { NutSticky: Un, JoySmile: Ds },
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
      //vertical
    },
    size: {
      type: String,
      default: "normal"
    },
    type: {
      type: String,
      default: "line"
      //card、line、smile
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
    const a = P([]), l = (C) => {
      C.forEach((E, V) => {
        var Z, F, oe, q, H, ne, U, ae, de;
        let X = E.type;
        if (X = X.name || X, X == "NutTabPane") {
          let fe = new Tc();
          if ((Z = E.props) != null && Z.title || (F = E.props) != null && F["pane-key"] || (oe = E.props) != null && oe.paneKey) {
            let be = Tt((q = E.props) == null ? void 0 : q["pane-key"]), Ee = be == "number" || be == "string" ? String((H = E.props) == null ? void 0 : H["pane-key"]) : null, O = Tt((ne = E.props) == null ? void 0 : ne.paneKey), J = O == "number" || O == "string" ? String((U = E.props) == null ? void 0 : U.paneKey) : null;
            fe.title = (ae = E.props) == null ? void 0 : ae.title, fe.paneKey = Ee || J || String(V), fe.disabled = (de = E.props) == null ? void 0 : de.disabled;
          }
          a.value.push(fe);
        } else {
          if (E.children == " ")
            return;
          l(E.children);
        }
      });
    }, i = P(e.modelValue || 0), r = (C) => {
      let E = a.value.findIndex((V) => V.paneKey == C);
      a.value.length == 0 || E == -1 || (i.value = E);
    }, p = N(() => e.titleScroll && e.direction === "vertical"), f = P(), v = P([]), y = (C) => {
      const E = f.value, V = v.value;
      if (!E || !V || !V[i.value])
        return;
      const X = V[i.value];
      let Z = 0;
      e.direction === "vertical" ? Z = X.offsetTop - E.offsetTop + 10 - (E.offsetHeight - X.offsetHeight) / 2 : Z = X.offsetLeft - (E.offsetWidth - X.offsetWidth) / 2, g(E, Z, C ? 0 : 0.3, e.direction);
    }, g = (C, E, V, X) => {
      let Z = 0;
      const F = X === "horizontal" ? C.scrollLeft : C.scrollTop, oe = V === 0 ? 1 : Math.round(V * 1e3 / 16);
      function q() {
        X === "horizontal" ? C.scrollLeft += (E - F) / oe : C.scrollTop += (E - F) / oe, ++Z < oe && Ve(q);
      }
      q();
    }, b = (C = ((E) => (E = n.default) == null ? void 0 : E.call(n))()) => {
      a.value = [], C = C == null ? void 0 : C.filter((V) => typeof V.children != "string"), C && C.length && l(C), r(e.modelValue), Te(() => {
        y();
      });
    }, w = (C) => {
      o = C.fixed;
    };
    Q(
      () => {
        var C;
        return (C = n.default) == null ? void 0 : C.call(n);
      },
      (C) => {
        b(C);
      }
    );
    const c = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    Q(
      () => e.modelValue,
      (C) => {
        if (r(C), y(), o) {
          let E = Oe(s.value).top + c(), V = Math.ceil(E - e.top);
          window.scrollTo({
            top: V,
            behavior: "smooth"
          });
        }
      }
    ), ve(b), mt(b);
    const $ = {
      isBegin: () => i.value == 0,
      isEnd: () => i.value == a.value.length - 1,
      next: () => {
        i.value += 1;
        const C = a.value[i.value].disabled;
        if ($.isEnd() && C) {
          $.prev();
          return;
        }
        if (C && i.value < a.value.length - 1) {
          $.next();
          return;
        }
        $.updateValue(a.value[i.value]);
      },
      prev: () => {
        i.value -= 1;
        const C = a.value[i.value].disabled;
        if ($.isBegin() && C) {
          $.next();
          return;
        }
        if (C && i.value > 0) {
          $.prev();
          return;
        }
        $.updateValue(a.value[i.value]);
      },
      updateValue: (C) => {
        t("update:modelValue", C.paneKey), t("change", C);
      },
      tabChange: (C, E) => {
        t("click", C), !(C.disabled || i.value == E) && (i.value = E, $.updateValue(C));
      },
      setTabItemRef: (C, E) => {
        v.value[E] = C;
      }
    }, { tabsContentRef: h, touchState: k, touchMethods: I } = Sc(e, $), T = N(() => {
      let C = i.value * 100;
      k.moving && (C += k.offset);
      let E = {
        transform: e.direction == "horizontal" ? `translate3d(-${C}%, 0, 0)` : `translate3d( 0,-${C}%, 0)`,
        transitionDuration: k.moving ? void 0 : `${e.animatedTime}ms`
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
      const C = _e(e.titleGutter);
      return e.direction === "vertical" ? { marginTop: C, marginBottom: C } : { marginLeft: C, marginRight: C };
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
      onStickyScroll: w
    }, $), I);
  }
}), Ic = ["onClick"], _c = ["onClick"];
function Bc(e, t, n, s, o, a) {
  const l = j("JoySmile"), i = j("nut-sticky");
  return u(), d("view", {
    ref: "container",
    class: B(["nut-tabs", [e.direction]])
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
          class: B(["nut-tabs__titles", { [e.type]: e.type, scrollable: e.titleScroll, [e.size]: e.size }]),
          style: L(e.tabsNavStyle)
        }, [
          e.$slots.titles ? D(e.$slots, "titles", { key: 0 }) : (u(!0), d(ee, { key: 1 }, re(e.titles, (r, p) => (u(), d("view", {
            key: r.paneKey,
            class: B(["nut-tabs__titles-item", { active: r.paneKey == e.modelValue, disabled: r.disabled }]),
            style: L(e.titleStyle),
            onClick: (f) => e.tabChange(r, p)
          }, [
            e.type == "line" ? (u(), d("view", {
              key: 0,
              class: "nut-tabs__titles-item__line",
              style: L(e.tabsActiveStyle)
            }, null, 4)) : S("", !0),
            e.type == "smile" ? (u(), d("view", {
              key: 1,
              class: "nut-tabs__titles-item__smile",
              style: L(e.tabsActiveStyle)
            }, [
              le(l, { color: e.color }, null, 8, ["color"])
            ], 4)) : S("", !0),
            m("view", {
              class: B(["nut-tabs__titles-item__text", { ellipsis: e.ellipsis }])
            }, _(r.title), 3)
          ], 14, Ic))), 128))
        ], 6)
      ]),
      _: 3
    }, 8, ["top", "container", "onScroll"])) : (u(), d("view", {
      key: 1,
      ref: "navRef",
      class: B(["nut-tabs__titles", { [e.type]: e.type, scrollable: e.titleScroll, [e.size]: e.size }]),
      style: L(e.tabsNavStyle)
    }, [
      e.$slots.titles ? D(e.$slots, "titles", { key: 0 }) : (u(!0), d(ee, { key: 1 }, re(e.titles, (r, p) => (u(), d("view", {
        key: r.paneKey,
        ref_for: !0,
        ref: (f) => e.setTabItemRef(f, p),
        class: B(["nut-tabs__titles-item", { active: r.paneKey == e.modelValue, disabled: r.disabled }]),
        style: L(e.titleStyle),
        onClick: (f) => e.tabChange(r, p)
      }, [
        e.type == "line" ? (u(), d("view", {
          key: 0,
          class: "nut-tabs__titles-item__line",
          style: L(e.tabsActiveStyle)
        }, null, 4)) : S("", !0),
        e.type == "smile" ? (u(), d("view", {
          key: 1,
          class: "nut-tabs__titles-item__smile",
          style: L(e.tabsActiveStyle)
        }, [
          le(l, { color: e.color }, null, 8, ["color"])
        ], 4)) : S("", !0),
        m("view", {
          class: B(["nut-tabs__titles-item__text", { ellipsis: e.ellipsis }])
        }, _(r.title), 3)
      ], 14, _c))), 128))
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
const eo = /* @__PURE__ */ K(Dc, [["render", Bc]]), { create: Mc } = W("tab-pane"), Lc = Mc({
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
function Ec(e, t, n, s, o, a) {
  return u(), d("view", {
    class: B(["nut-tab-pane", { inactive: e.paneKey != e.activeKey && e.autoHeight }]),
    style: L(e.paneStyle)
  }, [
    D(e.$slots, "default")
  ], 6);
}
const to = /* @__PURE__ */ K(Lc, [["render", Ec]]), { create: Pc } = W("indicator"), Ac = Pc({
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
    }), padZero: Xe };
  }
}), zc = {
  key: 0,
  class: "nut-indicator--number"
}, Vc = {
  key: 1,
  class: "nut-indicator--dot"
};
function Oc(e, t, n, s, o, a) {
  return u(), d("view", {
    class: B(e.classes)
  }, [
    (u(!0), d(ee, null, re(e.size, (l) => (u(), d(ee, { key: l }, [
      l === e.current ? (u(), d("view", zc, _(e.fillZero && e.padZero(l) || l), 1)) : (u(), d("view", Vc))
    ], 64))), 128))
  ], 2);
}
const Hc = /* @__PURE__ */ K(Ac, [["render", Oc]]), { create: Rc } = W("side-navbar"), Fc = Rc({
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
}), Wc = { class: "nut-side-navbar" }, Yc = { class: "nut-side-navbar__content" }, jc = {
  ref: "list",
  class: "nut-side-navbar__content__list"
};
function Kc(e, t, n, s, o, a) {
  return u(), d("view", Wc, [
    m("view", Yc, [
      m("view", jc, [
        D(e.$slots, "default")
      ], 512)
    ])
  ]);
}
const Uc = /* @__PURE__ */ K(Fc, [["render", Kc]]), { create: Xc } = W("side-navbar-item"), qc = Xc({
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
}), Gc = ["ikey"], Zc = { class: "nut-side-navbar-item__title" };
function Jc(e, t, n, s, o, a) {
  return u(), d("view", {
    class: "nut-side-navbar-item",
    ikey: e.ikey,
    onClick: t[0] || (t[0] = Ne((...l) => e.handleClick && e.handleClick(...l), ["stop"]))
  }, [
    m("span", Zc, _(e.title), 1)
  ], 8, Gc);
}
const Qc = /* @__PURE__ */ K(qc, [["render", Jc]]), { create: xc } = W("sub-side-navbar"), ed = xc({
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
  components: { ArrowDown2: el, ArrowUp2: sl },
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
}), td = ["ikey"], nd = { class: "nut-sub-side-navbar__title__text" }, od = { class: "nut-sub-side-navbar__title__icon" };
function ld(e, t, n, s, o, a) {
  const l = j("ArrowDown2"), i = j("ArrowUp2");
  return u(), d("view", {
    class: "nut-sub-side-navbar",
    ikey: e.ikey
  }, [
    m("view", {
      class: "nut-sub-side-navbar__title",
      onClick: t[0] || (t[0] = Ne((...r) => e.handleClick && e.handleClick(...r), ["stop"]))
    }, [
      m("span", nd, _(e.title), 1),
      m("span", od, [
        e.direction ? (u(), x(i, { key: 1 })) : (u(), x(l, { key: 0 }))
      ])
    ]),
    Se(m("view", {
      class: B(["nut-sub-side-navbar__list", e.direction ? "nutFadeOut" : "nutFadeIn"]),
      style: L(e.style)
    }, [
      D(e.$slots, "default")
    ], 6), [
      [De, !e.direction]
    ])
  ], 8, td);
}
const sd = /* @__PURE__ */ K(ed, [["render", ld]]), { componentName: ad, create: id } = W("range"), rd = id({
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
      const F = ad;
      return {
        [F]: !0,
        [`${F}-disabled`]: e.disabled,
        [`${F}-vertical`]: e.vertical,
        [`${F}-show-number`]: !e.hiddenRange
      };
    }), v = N(() => {
      const F = "nut-range-container";
      return {
        [F]: !0,
        [`${F}-vertical`]: e.vertical
      };
    }), y = N(() => ({
      background: e.inactiveColor
    })), g = N(() => ({
      borderColor: e.buttonColor
    })), b = (F) => !!e.range && Array.isArray(F), w = () => {
      const { modelValue: F, min: oe } = e;
      return b(F) ? `${(F[1] - F[0]) * 100 / p.value}%` : `${(F - Number(oe)) * 100 / p.value}%`;
    }, c = () => {
      const { modelValue: F, min: oe } = e;
      return b(F) ? `${(F[0] - Number(oe)) * 100 / p.value}%` : "0%";
    }, $ = N(() => e.vertical ? {
      height: w(),
      top: c(),
      background: e.activeColor,
      transition: l.value ? "none" : void 0
    } : {
      width: w(),
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
    }, k = (F) => {
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
    }, C = (F) => {
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
    }, Z = (F) => Kt(e.modelValue) && typeof F == "number" ? e.modelValue[F] : Number(e.modelValue);
    return ce(G({
      root: a,
      classes: f,
      wrapperStyle: y,
      buttonStyle: g,
      onClick: C,
      onTouchStart: E,
      onTouchMove: V,
      onTouchEnd: X
    }, me(e)), {
      barStyle: $,
      curValue: Z,
      buttonIndex: n,
      containerClasses: v,
      markClassName: h,
      marksStyle: k,
      marksList: r,
      tickStyle: I
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
function gd(e, t, n, s, o, a) {
  return u(), d("view", {
    class: B(e.containerClasses)
  }, [
    e.hiddenRange ? S("", !0) : (u(), d("view", ud, _(+e.min), 1)),
    m("view", {
      ref: "root",
      style: L(e.wrapperStyle),
      class: B(e.classes),
      onClick: t[9] || (t[9] = Ne((...l) => e.onClick && e.onClick(...l), ["stop"]))
    }, [
      e.marksList.length > 0 ? (u(), d("view", cd, [
        (u(!0), d(ee, null, re(e.marksList, (l) => (u(), d("span", {
          key: l,
          class: B(e.markClassName(l)),
          style: L(e.marksStyle(l))
        }, [
          ge(_(l) + " ", 1),
          m("span", {
            class: "nut-range-tick",
            style: L(e.tickStyle(l))
          }, null, 4)
        ], 6))), 128))
      ])) : S("", !0),
      m("view", {
        class: "nut-range-bar",
        style: L(e.barStyle)
      }, [
        e.range ? (u(), d(ee, { key: 0 }, re([0, 1], (l) => m("view", {
          key: l,
          role: "slider",
          class: B({
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
            e.hiddenTag ? S("", !0) : (u(), d("view", fd, _(e.curValue(l)), 1))
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
            e.hiddenTag ? S("", !0) : (u(), d("view", md, _(e.curValue()), 1))
          ], 4))
        ], 40, pd))
      ], 4)
    ], 6),
    e.hiddenRange ? S("", !0) : (u(), d("view", hd, _(+e.max), 1))
  ], 2);
}
const no = /* @__PURE__ */ K(rd, [["render", gd]]), { create: yd } = W("searchbar"), vd = "NutSearchbar", $d = yd({
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
    const n = ke(vd), s = ue({
      active: !1
    }), o = N(() => ({
      background: e.background
    })), a = N(() => ({
      background: e.inputBackground
    })), l = ($) => {
      let k = $.target.value;
      e.maxLength && k.length > Number(e.maxLength) && (k = k.slice(0, Number(e.maxLength))), t("update:modelValue", k, $), t("change", k, $);
    }, i = P({}), r = ($) => {
      let k = $.target.value;
      s.active = !0, i.value = e.focusStyle, t("focus", k, $);
    }, p = ($) => {
      setTimeout(() => {
        s.active = !1;
      }, 0);
      let k = $.target.value;
      e.maxLength && k.length > Number(e.maxLength) && (k = k.slice(0, Number(e.maxLength))), i.value = {}, t("blur", k, $);
    }, f = ($) => {
      t("update:modelValue", "", $), t("change", "", $), t("clear", "");
    }, v = () => {
      t("search", e.modelValue);
    }, y = ($) => {
      t("clickInput", $);
    }, g = ($) => {
      t("clickLeftIcon", e.modelValue, $);
    }, b = ($) => {
      t("clickRightIcon", e.modelValue, $);
    }, w = N(() => ({
      textAlign: e.inputAlign
    })), c = P(null);
    return ve(() => {
      e.autofocus && c.value.focus();
    }), ce(G({
      renderIcon: lt,
      inputsearch: c
    }, me(s)), {
      valueChange: l,
      valueFocus: r,
      valueBlur: p,
      handleClear: f,
      handleSubmit: v,
      searchbarStyle: o,
      inputSearchbarStyle: a,
      focusCss: i,
      translate: n,
      clickInput: y,
      leftIconClick: g,
      rightIconClick: b,
      styleSearchbar: w
    });
  }
}), bd = {
  key: 0,
  class: "nut-searchbar__search-label"
}, kd = {
  key: 1,
  class: "nut-searchbar__search-icon nut-searchbar__left-search-icon"
}, wd = ["type", "maxlength", "placeholder", "value", "disabled", "readonly"], Cd = {
  key: 1,
  class: "nut-searchbar__search-icon nut-searchbar__iptright-search-icon"
}, Sd = {
  key: 2,
  class: "nut-searchbar__search-icon nut-searchbar__right-search-icon"
};
function Td(e, t, n, s, o, a) {
  return u(), d("view", {
    class: B(["nut-searchbar", { "safe-area-inset-bottom": e.safeAreaInsetBottom }]),
    style: L(e.searchbarStyle)
  }, [
    e.label ? (u(), d("span", bd, _(e.label), 1)) : S("", !0),
    e.$slots.leftout ? (u(), d("view", kd, [
      D(e.$slots, "leftout")
    ])) : S("", !0),
    m("view", {
      class: B(["nut-searchbar__search-input", e.shape]),
      style: L(G(G({}, e.inputSearchbarStyle), e.focusCss))
    }, [
      e.$slots.leftin ? (u(), d("view", {
        key: 0,
        class: "nut-searchbar__search-icon nut-searchbar__iptleft-search-icon",
        onClick: t[0] || (t[0] = (...l) => e.leftIconClick && e.leftIconClick(...l))
      }, [
        D(e.$slots, "leftin")
      ])) : S("", !0),
      m("view", {
        class: B(["nut-searchbar__input-inner", e.$slots.rightin && "nut-searchbar__input-inner-absolute"])
      }, [
        m("form", {
          class: "nut-searchbar__input-form",
          action: "#",
          onSubmit: t[5] || (t[5] = Ne((...l) => e.handleSubmit && e.handleSubmit(...l), ["prevent"]))
        }, [
          m("input", {
            ref: "inputsearch",
            class: B(["nut-searchbar__input-bar", e.clearable && "nut-searchbar__input-bar_clear"]),
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
          }, null, 46, wd)
        ], 32)
      ], 2),
      m("view", {
        class: B(["nut-searchbar__input-inner-icon", e.$slots.rightin && "nut-searchbar__input-inner-icon-absolute"])
      }, [
        e.clearable ? Se((u(), d("view", {
          key: 0,
          class: "nut-searchbar__search-icon nut-searchbar__input-clear",
          onClick: t[6] || (t[6] = (...l) => e.handleClear && e.handleClear(...l))
        }, [
          e.$slots["clear-icon"] ? D(e.$slots, "clear-icon", { key: 0 }) : (u(), x(Ae(e.renderIcon(e.clearIcon)), { key: 1 }))
        ], 512)), [
          [De, String(e.modelValue).length > 0]
        ]) : S("", !0),
        e.$slots.rightin ? (u(), d("view", Cd, [
          D(e.$slots, "rightin")
        ])) : S("", !0)
      ], 2)
    ], 6),
    e.$slots.rightout ? (u(), d("view", Sd, [
      D(e.$slots, "rightout")
    ])) : S("", !0)
  ], 6);
}
const Nd = /* @__PURE__ */ K($d, [["render", Td]]), Ct = (e, t, n) => e.map((s) => {
  const { value: o = "value", text: a = "text", children: l = "children" } = n, y = s, { [o]: i, [a]: r, [l]: p } = y, f = Et(y, [$t(o), $t(a), $t(l)]), v = ce(G({
    loading: !1
  }, f), {
    level: t ? (t && t.level || 0) + 1 : 0,
    value: i,
    text: r,
    children: p,
    _parent: t
  });
  return v.children && v.children.length && (v.children = Ct(v.children, v, n)), v;
}), oo = (e, t) => {
  let n = 0, s;
  for (; (s = e[n++]) && t(s) !== !0; )
    s.children && s.children.length && oo(s.children, t);
}, Dd = {
  topId: null,
  idKey: "id",
  pidKey: "pid",
  sortKey: ""
}, Id = (e, t) => {
  const n = G(G({}, Dd), t || {}), { topId: s, idKey: o, pidKey: a, sortKey: l } = n;
  let i = [], r = {};
  return e.forEach((p) => {
    p = G({}, p);
    const { [o]: f, [a]: v } = p, y = r[v] = r[v] || [];
    !i.length && v === s && (i = y), y.push(p), p.children = r[f] || (r[f] = []);
  }), l && Object.keys(r).forEach((p) => {
    r[p].length > 1 && r[p].sort((f, v) => f[l] - v[l]);
  }), r = null, i;
};
class yn {
  constructor(t, n) {
    z(this, "nodes");
    z(this, "config");
    this.config = G({
      value: "value",
      text: "text",
      children: "children"
    }, n || {}), this.nodes = Ct(t, null, this.config);
  }
  updateChildren(t, n) {
    n ? n.children = Ct(t, n, this.config) : this.nodes = Ct(t, null, this.config);
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
const { create: _d } = W("cascader-item"), Bd = _d({
  components: {
    Loading: xe,
    Checklist: Ml,
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
    })), o = P(0), a = P(!1), l = P(e.modelValue), i = P(new yn([], {})), r = P([]), p = N(() => s.value.lazy && !!s.value.lazyLoad), f = /* @__PURE__ */ new Map();
    let v;
    const y = () => Ke(this, null, function* () {
      f.clear(), r.value = [], o.value = 0, a.value = !1, v = null;
      let { options: h } = e;
      s.value.convertConfig && (h = Id(h, s.value.convertConfig)), i.value = new yn(h, {
        value: s.value.valueKey,
        text: s.value.textKey,
        children: s.value.childrenKey
      }), p.value && !i.value.nodes.length && (yield b({
        root: !0,
        loading: !0,
        text: "",
        value: ""
      })), r.value = [{ nodes: i.value.nodes, selectedNode: null }], g();
    }), g = () => Ke(this, null, function* () {
      const h = l.value;
      if (h === void 0 || !i.value.nodes.length)
        return;
      if (h.length === 0) {
        o.value = 0, r.value = [{ nodes: i.value.nodes, selectedNode: null }];
        return;
      }
      let k = h;
      if (p.value && Array.isArray(h) && h.length) {
        k = [];
        let I = i.value.nodes.find((T) => T.value === h[0]);
        if (I) {
          k = [I.value], a.value = !0;
          const T = yield h.slice(1).reduce((Y, M) => Ke(this, null, function* () {
            var E;
            const A = yield Y;
            yield b(A);
            const C = (E = A == null ? void 0 : A.children) == null ? void 0 : E.find((V) => V.value === M);
            return C && k.push(M), Promise.resolve(C);
          }), Promise.resolve(I));
          yield b(T), a.value = !1;
        }
      }
      k.length && h === e.modelValue && i.value.getPathNodesByValue(k).map((T, Y) => {
        o.value = Y, c.handleNode(T, !0);
      });
    }), b = (h) => Ke(this, null, function* () {
      if (!h)
        return;
      if (!s.value.lazyLoad) {
        h.leaf = !0;
        return;
      }
      if (i.value.isLeaf(h, p.value) || i.value.hasChildren(h, p.value))
        return;
      h.loading = !0;
      const k = h.root ? null : h;
      let I = f.get(h);
      I || (I = new Promise((Y) => {
        var M, A;
        (A = (M = s.value).lazyLoad) == null || A.call(M, h, Y);
      }), f.set(h, I));
      const T = yield I;
      Array.isArray(T) && T.length > 0 ? i.value.updateChildren(T, k) : h.leaf = !0, h.loading = !1, f.delete(h);
    }), w = (h) => {
      const k = h.map((I) => I.value);
      l.value = k, t("change", k, h), t("update:modelValue", k, h);
    }, c = {
      // 选中一个节点，静默模式不触发事件
      handleNode(h, k) {
        return Ke(this, null, function* () {
          const { disabled: I, loading: T } = h;
          if (!(!k && I || !r.value[o.value])) {
            if (i.value.isLeaf(h, p.value)) {
              if (h.leaf = !0, r.value[o.value].selectedNode = h, r.value = r.value.slice(0, h.level + 1), !k) {
                const Y = r.value.map((M) => M.selectedNode);
                w(Y), t("pathChange", Y);
              }
              return;
            }
            if (i.value.hasChildren(h, p.value)) {
              const Y = h.level + 1;
              if (r.value[o.value].selectedNode = h, r.value = r.value.slice(0, Y), r.value.push({
                nodes: h.children || [],
                selectedNode: null
              }), o.value = Y, !k) {
                const M = r.value.map((A) => A.selectedNode);
                t("pathChange", M);
              }
              return;
            }
            v = h, !T && (yield b(h), v === h && (r.value[o.value].selectedNode = h, c.handleNode(h, k)));
          }
        });
      },
      handleTabClick(h) {
        v = null, o.value = Number(h.paneKey);
      },
      formatTabTitle(h) {
        return h.selectedNode ? h.selectedNode.text : n("select");
      },
      isSelected(h, k) {
        var I;
        return ((I = h == null ? void 0 : h.selectedNode) == null ? void 0 : I.value) === k.value;
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
        h !== l.value && (l.value = h, g());
      }
    ), Q(
      () => e.visible,
      (h) => {
        h && Array.isArray(l.value) && l.value.length > 0 && g();
      }
    ), G({ panes: r, initLoading: a, tabsCursor: o }, c);
  }
}), Md = {
  role: "menu",
  class: "nut-cascader-pane"
}, Ld = ["aria-checked", "aria-disabled", "onClick"], Ed = { class: "nut-cascader-item__title" }, Pd = /* @__PURE__ */ m("view", { class: "nut-cascader-pane" }, null, -1);
function Ad(e, t, n, s, o, a) {
  const l = j("Loading"), i = j("Checklist"), r = j("nut-tab-pane"), p = j("nut-tabs");
  return u(), x(p, {
    modelValue: e.tabsCursor,
    "onUpdate:modelValue": t[0] || (t[0] = (f) => e.tabsCursor = f),
    class: "nut-cascader",
    "title-scroll": "",
    onClick: e.handleTabClick
  }, {
    default: te(() => [
      !e.initLoading && e.panes.length ? (u(!0), d(ee, { key: 0 }, re(e.panes, (f, v) => (u(), x(r, {
        key: v,
        title: e.formatTabTitle(f)
      }, {
        default: te(() => [
          m("view", Md, [
            (u(!0), d(ee, null, re(f.nodes, (y) => (u(), d("view", {
              key: y.value,
              class: B(["nut-cascader-item", { active: e.isSelected(f, y), disabled: y.disabled }]),
              "aria-checked": e.isSelected(f, y),
              "aria-disabled": y.disabled || void 0,
              role: "menuitemradio",
              onClick: (g) => e.handleNode(y, !1)
            }, [
              m("view", Ed, _(y.text), 1),
              y.loading ? (u(), x(l, {
                key: 0,
                class: "nut-cascader-item__icon-loading",
                name: "loading"
              })) : (u(), x(i, {
                key: 1,
                class: "nut-cascader-item__icon-check",
                name: "checklist"
              }))
            ], 10, Ld))), 128))
          ])
        ]),
        _: 2
      }, 1032, ["title"]))), 128)) : (u(), x(r, {
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
const zd = /* @__PURE__ */ K(Bd, [["render", Ad]]), { create: Vd } = W("cascader"), Od = Vd({
  components: {
    NutCascaderItem: zd,
    NutPopup: Le
  },
  props: ce(G({}, yt), {
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
}), Hd = ["innerHTML"];
function Rd(e, t, n, s, o, a) {
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
      }, null, 8, Hd)) : S("", !0),
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
const Fd = /* @__PURE__ */ K(Od, [["render", Rd]]), pe = {
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
      const r = a - l * 864e5, p = a + (6 - l) * 864e5, f = this.date2Str(new Date(r)), v = this.date2Str(new Date(p));
      return [f, v];
    } else {
      l = l == 0 ? 7 : l;
      const i = 24 * 60 * 60 * 1e3, r = a - (l - 1) * i, p = a + (7 - l) * i, f = this.date2Str(new Date(r)), v = this.date2Str(new Date(p));
      return [f, v];
    }
  },
  formatResultDate: function(e) {
    let t = [...e.split("-")];
    return t[2] = pe.getNumTwoBit(Number(t[2])), t[3] = `${t[0]}-${t[1]}-${t[2]}`, t[4] = pe.getWhatDay(+t[0], +t[1], +t[2]), t;
  }
}, { create: Wd } = W("calendar-item"), Yd = "NutCalendarItem", jd = Wd({
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
    const o = ke(Yd), a = o("weekdays").map((O, J) => ({
      day: O,
      weekend: J === 0 || J === 6
    })), l = P([...a.slice(e.firstDayOfWeek, 7), ...a.slice(0, e.firstDayOfWeek)]), i = P(null), r = P(null), p = P(null), f = P(null), v = P(0), y = N(() => c.monthsData.slice(c.defaultRange[0], c.defaultRange[1])), g = N(() => n.btn), b = N(() => n["top-info"]), w = N(() => n["bottom-info"]), c = ue({
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
    }), $ = (O) => O.split("-"), h = (O) => pe.isEqual(c.currDate[0], O), k = (O) => pe.isEqual(c.currDate[1], O), I = (O) => {
      var J, se;
      return ((J = c.currDate) == null ? void 0 : J.length) > 0 ? (se = c.currDate) == null ? void 0 : se.some((ie) => pe.isEqual(ie, O)) : !1;
    }, T = (O, J) => J.curData[0] + "-" + J.curData[1] + "-" + pe.getNumTwoBit(+O.day), Y = (O, J, se) => {
      const ie = [];
      typeof se == "number" && ((se + 1 + e.firstDayOfWeek) % 7 === 0 || (se + e.firstDayOfWeek) % 7 === 0) && ie.push("weekend");
      const he = T(O, J), { type: Ie } = e;
      return O.type == "curr" ? pe.isEqual(c.currDate, he) || (Ie == "range" || Ie == "week") && (h(he) || k(he)) || Ie == "multiple" && I(he) ? ie.push(`${c.dayPrefix}--active`) : c.propStartDate && pe.compareDate(he, c.propStartDate) || c.propEndDate && pe.compareDate(c.propEndDate, he) || e.disabledDate && e.disabledDate(he) ? ie.push(`${c.dayPrefix}--disabled`) : (Ie == "range" || Ie == "week") && Array.isArray(c.currDate) && Object.values(c.currDate).length == 2 && pe.compareDate(c.currDate[0], he) && pe.compareDate(he, c.currDate[1]) && ie.push(`${c.dayPrefix}--choose`) : ie.push(`${c.dayPrefix}--disabled`), ie;
    }, M = () => {
      const { type: O } = e;
      if (O == "range" && c.chooseData.length == 2 || O != "range") {
        let J = c.chooseData.slice(0);
        if (O == "week") {
          if (c.chooseData.length !== 2)
            return;
          J = {
            weekDate: [C(c.chooseData[0]), C(c.chooseData[1])]
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
            let Ce;
            (he = c.currDate) == null || he.forEach((Re, ze) => {
              Re == $e[3] && (Ce = ze);
            }), se ? c.chooseData.push([...$e]) : Ce !== void 0 ? (c.currDate.splice(Ce, 1), c.chooseData.splice(Ce, 1)) : (c.currDate.push($e[3]), c.chooseData.push([...$e]));
          } else
            c.currDate = [$e[3]], c.chooseData = [[...$e]];
        else if (Ie == "range") {
          let Ce = Object.values(c.currDate).length;
          Ce == 2 || Ce == 0 ? c.currDate = [$e[3]] : pe.compareDate(c.currDate[0], $e[3]) ? Array.isArray(c.currDate) && c.currDate.push($e[3]) : Array.isArray(c.currDate) && c.currDate.unshift($e[3]), c.chooseData.length == 2 || !c.chooseData.length ? c.chooseData = [[...$e]] : pe.compareDate(c.chooseData[0][3], $e[3]) ? c.chooseData = [...c.chooseData, [...$e]] : c.chooseData = [[...$e], ...c.chooseData];
        } else if (Ie == "week") {
          let Ce = pe.getWeekDate(He, We, O.day, e.firstDayOfWeek);
          c.propStartDate && pe.compareDate(Ce[0], c.propStartDate) && Ce.splice(0, 1, c.propStartDate), c.propEndDate && pe.compareDate(c.propEndDate, Ce[1]) && Ce.splice(1, 1, c.propEndDate), c.currDate = Ce, c.chooseData = [pe.formatResultDate(Ce[0]), pe.formatResultDate(Ce[1])];
        } else
          c.currDate = $e[3], c.chooseData = [...$e];
        if (!se) {
          let Ce = c.chooseData;
          Ie == "week" && (Ce = {
            weekDate: [
              C(c.chooseData[0]),
              C(c.chooseData[1])
            ]
          }), t("select", Ce), (e.isAutoBackFill || !e.poppable) && M();
        }
      }
    }, C = (O) => {
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
      let Ce = 0;
      c.monthsData.length > 0 && (Ce = c.monthsData[c.monthsData.length - 1].cssScrollHeight + c.monthsData[c.monthsData.length - 1].cssHeight), $e.cssScrollHeight = Ce, J == "next" ? (!c.endData || !pe.compareDate(
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
          let [Re, ze, Ye] = $(c.currDate[0]), Mt = pe.getWeekDate(Re, ze, Ye, e.firstDayOfWeek);
          c.currDate = Mt, O && pe.compareDate(c.currDate[0], O) && c.currDate.splice(0, 1, O), J && pe.compareDate(J, c.currDate[1]) && c.currDate.splice(1, 1, J), c.defaultData = [...$(c.currDate[0]), ...$(c.currDate[1])];
        }
      } else
        c.currDate && (O && pe.compareDate(c.currDate, O) ? c.currDate = O : J && !pe.compareDate(c.currDate, J) && (c.currDate = J), c.defaultData = [...$(c.currDate)]);
      let He = 0, We = 0;
      c.defaultData.length > 0 && c.monthsData.forEach((Re, ze) => {
        Re.title == o("monthTitle", c.defaultData[0], c.defaultData[1]) && (He = ze), (e.type == "range" || e.type == "week") && Re.title == o("monthTitle", c.defaultData[3], c.defaultData[4]) && (We = ze);
      }), H(he, He), c.currentIndex = He, c.yearMonthTitle = c.monthsData[c.currentIndex].title, c.defaultData.length > 0 && (c.isRange ? (A({ day: c.defaultData[2], type: "curr" }, c.monthsData[c.currentIndex], !0), A({ day: c.defaultData[5], type: "curr" }, c.monthsData[We], !0)) : e.type == "week" ? A({ day: c.defaultData[2], type: "curr" }, c.monthsData[c.currentIndex], !0) : e.type == "multiple" ? [...c.currDate].forEach((Re) => {
        let ze = $(Re), Ye = c.currentIndex;
        c.monthsData.forEach((Mt, Io) => {
          Mt.title == o("monthTitle", ze[0], ze[1]) && (Ye = Io);
        }), A({ day: ze[2], type: "curr" }, c.monthsData[Ye], !0);
      }) : A({ day: c.defaultData[2], type: "curr" }, c.monthsData[c.currentIndex], !0));
      let $e = c.monthsData[c.monthsData.length - 1], Ce = $e.cssHeight + $e.cssScrollHeight;
      Ve(() => {
        i != null && i.value && (r != null && r.value) && (f != null && f.value) && (v.value = i.value.clientHeight, r.value.style.height = `${Ce}px`, i.value.scrollTop = c.monthsData[c.currentIndex].cssScrollHeight);
      }), c.avgHeight = Math.floor(Ce / (he + 1));
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
    }, ne = (O, J) => (e.type == "range" || e.type == "week") && O.type == "curr" && Y(O, J).includes("nut-calendar__day--active"), U = (O, J) => ne(O, J) && h(T(O, J)), ae = (O, J) => c.currDate.length >= 2 && k(T(O, J)) ? ne(O, J) : !1, de = () => {
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
        const ie = Math.round(J + v.value);
        ie < c.monthsData[se].cssScrollHeight + c.monthsData[se].cssHeight && J > c.monthsData[se - 1].cssScrollHeight && (se -= 1), se + 1 <= c.monthsNum && ie >= c.monthsData[se + 1].cssScrollHeight + c.monthsData[se + 1].cssHeight && (se += 1), se >= 1 && J < c.monthsData[se - 1].cssScrollHeight && (se -= 1);
      }
      c.currentIndex !== se && (c.currentIndex = se, H(c.monthsNum, se)), c.yearMonthTitle = c.monthsData[se].title;
    }, Ee = () => {
      c.chooseData.splice(0), c.monthsData.splice(0), F();
    };
    return F(), Q(
      () => e.defaultValue,
      (O) => {
        O && e.poppable && Ee();
      }
    ), ce(G(G({
      weeks: l,
      compConthsData: y,
      showTopBtn: g,
      topInfo: b,
      bottomInfo: w,
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
}), Kd = { class: "nut-calendar__header" }, Ud = {
  key: 0,
  class: "nut-calendar__header-title"
}, Xd = {
  key: 1,
  class: "nut-calendar__header-slot"
}, qd = {
  key: 2,
  class: "nut-calendar__header-subtitle"
}, Gd = {
  ref: "weeksPanel",
  class: "nut-calendar__weekdays"
}, Zd = {
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
function af(e, t, n, s, o, a) {
  return u(), d("view", {
    class: B(["nut-calendar", {
      "nut-calendar--nopop": !e.poppable,
      "nut-calendar--nofooter": e.isAutoBackFill
    }])
  }, [
    m("view", Kd, [
      e.showTitle ? (u(), d("view", Ud, _(e.title || e.translate("title")), 1)) : S("", !0),
      e.showTopBtn ? (u(), d("view", Xd, [
        D(e.$slots, "btn")
      ])) : S("", !0),
      e.showSubTitle ? (u(), d("view", qd, _(e.yearMonthTitle), 1)) : S("", !0),
      m("view", Gd, [
        (u(!0), d(ee, null, re(e.weeks, (l, i) => (u(), d("view", {
          key: i,
          class: B(["nut-calendar__weekday", { weekend: l.weekend }])
        }, _(l.day), 3))), 128))
      ], 512)
    ]),
    m("view", {
      ref: "months",
      class: "nut-calendar__content",
      onScroll: t[0] || (t[0] = (...l) => e.mothsViewScroll && e.mothsViewScroll(...l))
    }, [
      m("view", Zd, [
        m("view", {
          ref: "viewArea",
          class: "nut-calendar__body",
          style: L({ transform: `translateY(${e.translateY}px)` })
        }, [
          (u(!0), d(ee, null, re(e.compConthsData, (l, i) => (u(), d("view", {
            key: i,
            class: "nut-calendar__month"
          }, [
            m("view", Jd, _(l.title), 1),
            m("view", Qd, [
              m("view", {
                class: B(["nut-calendar__days-item", e.type === "range" ? "nut-calendar__days-item--range" : ""])
              }, [
                (u(!0), d(ee, null, re(l.monthData, (r, p) => (u(), d("view", {
                  key: p,
                  class: B(["nut-calendar__day", e.getClass(r, l, p)]),
                  onClick: (f) => e.chooseDay(r, l)
                }, [
                  m("view", ef, [
                    D(e.$slots, "day", {
                      date: r.type == "curr" ? r : ""
                    }, () => [
                      ge(_(r.type == "curr" ? r.day : ""), 1)
                    ])
                  ]),
                  e.topInfo ? (u(), d("view", tf, [
                    D(e.$slots, "top-info", {
                      date: r.type == "curr" ? r : ""
                    })
                  ])) : S("", !0),
                  e.bottomInfo ? (u(), d("view", nf, [
                    D(e.$slots, "bottom-info", {
                      date: r.type == "curr" ? r : ""
                    })
                  ])) : S("", !0),
                  !e.bottomInfo && e.showToday && e.isCurrDay(r) ? (u(), d("view", of, _(e.translate("today")), 1)) : S("", !0),
                  e.isStartTip(r, l) ? (u(), d("view", {
                    key: 3,
                    class: B(["nut-calendar__day-tip", { "nut-calendar__day-tips--top": e.rangeTip() }])
                  }, _(e.startText || e.translate("start")), 3)) : S("", !0),
                  e.isEndTip(r, l) ? (u(), d("view", lf, _(e.endText || e.translate("end")), 1)) : S("", !0)
                ], 10, xd))), 128))
              ], 2)
            ])
          ]))), 128))
        ], 4)
      ], 512)
    ], 544),
    e.poppable && !e.isAutoBackFill ? (u(), d("view", sf, [
      D(e.$slots, "footer-info", { date: e.chooseData }, () => [
        m("view", {
          class: "nut-calendar__confirm",
          onClick: t[1] || (t[1] = (...l) => e.confirm && e.confirm(...l))
        }, _(e.confirmText || e.translate("confirm")), 1)
      ])
    ])) : S("", !0)
  ], 2);
}
const lo = /* @__PURE__ */ K(jd, [["render", af]]), { create: rf } = W("calendar"), uf = rf({
  components: {
    NutCalendarItem: lo,
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
    const o = N(() => n.btn), a = N(() => n["top-info"]), l = N(() => n.day), i = N(() => n["bottom-info"]), r = N(() => n["footer-info"]), p = P(null);
    s({
      scrollToDate: ($) => {
        var h;
        (h = p.value) == null || h.scrollToDate($);
      },
      initPosition: () => {
        var $;
        ($ = p.value) == null || $.initPosition();
      }
    });
    const y = () => {
      t("update:visible", !1);
    }, g = () => {
      t("close"), t("update:visible", !1);
    };
    return {
      closePopup: () => {
        g();
      },
      update: y,
      close: g,
      select: ($) => {
        t("select", $);
      },
      choose: ($) => {
        g(), t("choose", $);
      },
      calendarRef: p,
      showTopBtn: o,
      topInfo: a,
      dayInfo: l,
      bottomInfo: i,
      footerInfo: r
    };
  }
});
function cf(e, t, n, s, o, a) {
  const l = j("nut-calendar-item"), i = j("nut-popup");
  return e.poppable ? (u(), x(i, ft({
    key: 0,
    visible: e.visible,
    position: "bottom",
    round: "",
    closeable: ""
  }, e.$attrs, {
    style: { height: "85vh" },
    "lock-scroll": e.lockScroll,
    onClickOverlay: e.closePopup,
    onClickCloseIcon: e.closePopup
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
      }, pt({ _: 2 }, [
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
  }, 16, ["visible", "lock-scroll", "onClickOverlay", "onClickCloseIcon"])) : (u(), x(l, {
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
  }, pt({ _: 2 }, [
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
const df = /* @__PURE__ */ K(uf, [["render", cf]]), so = Symbol("nut-checkbox"), { create: ff, componentName: Ze } = W("checkbox"), pf = ff({
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
    const v = (c, $) => {
      f = "click", t("update:modelValue", c), t("change", c, $);
    };
    Q(
      () => e.modelValue,
      (c) => {
        f == "click" ? f = "" : t("change", c);
      }
    );
    const y = () => {
      const { iconSize: c } = e, $ = {
        CheckNormal: n.icon ? n.icon : zt,
        Checked: n.checkedIcon ? n.checkedIcon : An,
        CheckDisabled: n.indeterminate ? n.indeterminate : ml
      }, h = o.partialSelect ? $.CheckDisabled : l.value ? $.Checked : $.CheckNormal, k = _e(c);
      return we(h, {
        width: k,
        height: k,
        size: k,
        class: p.value
      });
    }, g = () => {
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
    }, w = () => {
      var c, $;
      if (!i.value) {
        if (r.value && o.partialSelect) {
          o.partialSelect = !1, v(r.value, (c = n.default) == null ? void 0 : c.call(n)[0].children);
          return;
        }
        if (v(!r.value, ($ = n.default) == null ? void 0 : $.call(n)[0].children), a.value) {
          const h = s.value.value, k = s.max.value, { label: I } = e, T = h.indexOf(I);
          T > -1 ? h.splice(T, 1) : T <= -1 && (h.length < k || !k) && h.push(I), s.updateValue(h);
        }
      }
    };
    return ve(() => {
      a.value && s.link(Fe());
    }), Wt(() => {
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
        onClick: w
      },
      [e.shape == "button" ? b() : [y(), g()]]
    );
  }
}), { create: mf, componentName: hf } = W("checkbox-group"), gf = mf({
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
      f.proxy && (o.children = o.children.filter((v) => v !== f.proxy));
    }, i = (f) => {
      n("update:modelValue", f), n("change", f);
    }, r = (f) => {
      const v = [];
      f && o.children.forEach((y) => {
        y != null && y.disabled || v.push(y == null ? void 0 : y.label);
      }), n("update:modelValue", v);
    }, p = () => {
      const f = o.children.filter((v) => v != null && v.disabled ? !1 : !e.modelValue.includes(v.label)).map((v) => v.label);
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
          class: hf
        },
        (f = t.default) == null ? void 0 : f.call(t)
      );
    };
  }
}), yf = {
  text: "text",
  value: "value",
  children: "children"
}, vf = (e, t) => {
  const n = ue({
    formattedColumns: e.columns
  }), s = N(() => G(G({}, yf), e.fieldNames)), o = P([]), a = N(() => {
    const c = s.value;
    return f.value.map(($, h) => {
      const k = $.findIndex((I) => I[c.value] === o.value[h]);
      return k === -1 ? 0 : k;
    });
  }), l = P([]), i = (c) => {
    c && l.value.length < f.value.length && l.value.push(c);
  }, r = N(() => {
    const c = s.value;
    return f.value.map(($, h) => $.find((k) => k[c.value] === o.value[h]) || $[0]);
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
  }), v = (c, $) => {
    const h = [], k = s.value;
    let I = {
      text: "",
      value: "",
      [k.children]: c
    }, T = 0;
    for (; I && I[k.children]; ) {
      const Y = I[k.children], M = $[T];
      let A = Y.findIndex((C) => C[k.value] === M);
      A === -1 && (A = 0), I = I[k.children][A], T++, h.push(Y);
    }
    return h;
  }, y = () => {
    t("cancel", {
      selectedValue: o.value,
      selectedOptions: r.value
    });
  }, g = (c, $) => {
    var k;
    const h = s.value;
    if ($ && Object.keys($).length) {
      if (o.value = o.value ? o.value : [], p.value === "cascade") {
        o.value[c] = (k = $[h.value]) != null ? k : "";
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
  }, w = (c, $) => JSON.stringify(c) === JSON.stringify($);
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
  ), ce(G({}, me(n)), {
    columnsType: p,
    columnsList: f,
    columnFieldNames: s,
    cancel: y,
    changeHandler: g,
    confirm: b,
    defaultValues: o,
    defaultIndexes: a,
    pickerColumn: l,
    swipeRef: i,
    selectedOptions: r,
    isSameValue: w
  });
}, { create: $f } = W("picker-column"), bf = $f({
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
    }), o = P(null), a = P(!1), l = P(0), i = P(0), r = 200, p = 300, f = 15, v = N(() => ({
      transition: `transform ${i.value}ms cubic-bezier(0.17, 0.89, 0.45, 1)`,
      transform: `rotate3d(1, 0, 0, ${l.value})`,
      top: `calc(50% - ${+e.optionHeight / 2}px)`
    })), y = N(() => {
      const { optionHeight: C } = e;
      return {
        transition: `transform ${i.value}ms cubic-bezier(0.17, 0.89, 0.45, 1)`,
        transform: `translate3d(0, ${s.scrollDistance}px, 0)`,
        top: `calc(50% - ${+C / 2}px)`,
        height: `${C}px`
      };
    }), g = (C) => `transform: rotate3d(1, 0, 0, ${-s.rotation * C}deg) translate3d(0px, 0px, 104px)`, b = N(() => ({
      backgroundSize: `100% ${(+e.visibleOptionNum - 1) * +e.optionHeight / 2}px`
    })), w = (C) => {
      if (n.start(C), a.value && !e.taro) {
        const E = o.value, { transform: V } = window.getComputedStyle(E);
        if (e.threeDimensional) {
          const X = Math.floor(parseInt(l.value) / 360), Z = +V.split(", ")[5], F = +V.split(", ")[6] < 0 ? 180 : 0, oe = X * 360 + Math.acos(Z) / Math.PI * 180 + F;
          s.scrollDistance = -Math.abs((oe / s.rotation - 1) * +e.optionHeight);
        } else
          s.scrollDistance = +V.slice(7, V.length - 1).split(", ")[5];
      }
      ot(C, !0), s.touchParams.startY = n.deltaY.value, s.touchParams.startTime = Date.now(), s.transformY = s.scrollDistance;
    }, c = (C) => {
      n.move(C), n.isVertical() && (a.value = !0, ot(C, !0)), s.touchParams.lastY = n.deltaY.value;
      let E = s.touchParams.lastY - s.touchParams.startY;
      T(E);
    }, $ = () => {
      s.touchParams.lastY = n.deltaY.value, s.touchParams.lastTime = Date.now();
      let C = s.touchParams.lastY - s.touchParams.startY, E = s.touchParams.lastTime - s.touchParams.startTime;
      if (E <= p && Math.abs(C) > f) {
        const V = h(C, E);
        T(V, "end", +e.swipeDuration);
        return;
      } else
        T(C, "end");
      setTimeout(() => {
        n.reset(), a.value = !1;
      }, 0);
    }, h = (C, E) => (C = Math.abs(C / E) / 3e-3 * (C < 0 ? -1 : 1), C), k = (C) => C >= s.currIndex + 8 || C <= s.currIndex - 8, I = (C = 0, E, V = r, X) => {
      E === "end" ? i.value = V : i.value = 0, l.value = X, s.scrollDistance = C;
    }, T = (C, E, V) => {
      const { optionHeight: X } = e;
      let Z = C + s.transformY;
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
    }, M = (C) => {
      const { column: E } = e;
      let V = E.findIndex((Z) => Z[e.fieldNames.value] === e.value);
      s.currIndex = V === -1 ? 1 : V + 1;
      let X = V === -1 ? 0 : V * +e.optionHeight;
      C && Y(), T(-X);
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
      setRollerStyle: g,
      isHidden: k,
      roller: o,
      onTouchStart: w,
      onTouchMove: c,
      onTouchEnd: $,
      touchRollerStyle: v,
      touchTileStyle: y,
      setMove: T,
      stopMomentum: A,
      pxCheck: _e,
      maskStyles: b
    });
  }
});
function kf(e, t, n, s, o, a) {
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
            class: B(["nut-picker-roller-item", { "nut-picker-roller-item-hidden": e.isHidden(i + 1) }]),
            style: L(e.setRollerStyle(i + 1))
          }, _(l[e.fieldNames.text]), 7)) : S("", !0),
          l && l[e.fieldNames.text] && !e.threeDimensional ? (u(), d("view", {
            key: 1,
            class: "nut-picker-roller-item-tile",
            style: L({ height: e.pxCheck(e.optionHeight), lineHeight: e.pxCheck(e.optionHeight) })
          }, _(l[e.fieldNames.text]), 5)) : S("", !0)
        ], 64);
      }), 128))
    ], 36),
    m("view", {
      class: "nut-picker-roller-mask",
      style: L(e.maskStyles)
    }, null, 4)
  ], 32);
}
const wf = /* @__PURE__ */ K(bf, [["render", kf]]), Cf = {
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
}, { create: Sf } = W("picker"), Tf = "NutPicker", Nf = Sf({
  components: {
    NutPickerColumn: wf
  },
  props: Cf,
  emits: ["cancel", "change", "confirm", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = ke(Tf), { changeHandler: s, confirm: o, defaultValues: a, columnsList: l, columnsType: i, columnFieldNames: r, cancel: p } = vf(
      e,
      t
    ), f = P([]), v = (b) => {
      b && f.value.length < l.value.length && f.value.push(b);
    }, y = N(() => {
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
      swipeRef: v,
      columnStyle: y
    };
  }
}), Df = { class: "nut-picker" }, If = {
  key: 0,
  class: "nut-picker__bar"
}, _f = { class: "nut-picker__title" };
function Bf(e, t, n, s, o, a) {
  const l = j("nut-picker-column");
  return u(), d("div", Df, [
    e.showToolbar ? (u(), d("view", If, [
      m("view", {
        class: "nut-picker__left",
        onClick: t[0] || (t[0] = (...i) => e.cancel && e.cancel(...i))
      }, _(e.cancelText || e.translate("cancel")), 1),
      m("view", _f, _(e.title), 1),
      m("view", {
        class: "nut-picker__right",
        onClick: t[1] || (t[1] = (...i) => e.confirmHandler && e.confirmHandler(...i))
      }, _(e.okText || e.translate("confirm")), 1)
    ])) : S("", !0),
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
const ao = /* @__PURE__ */ K(Nf, [["render", Bf]]), { create: Mf } = W("date-picker"), vn = (/* @__PURE__ */ new Date()).getFullYear();
function Pt(e) {
  return Wo(e) && !isNaN(e.getTime());
}
const Lf = {
  day: "日",
  year: "年",
  month: "月",
  hour: "时",
  minute: "分",
  seconds: "秒"
}, Ef = Mf({
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
      default: () => new Date(vn - 10, 0, 1),
      validator: Pt
    },
    maxDate: {
      type: Date,
      default: () => new Date(vn + 10, 11, 31),
      validator: Pt
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
      Pt(c) || (c = e.minDate);
      let $ = Math.max(c.getTime(), e.minDate.getTime());
      return $ = Math.min($, e.maxDate.getTime()), new Date($);
    };
    function o(c, $) {
      return 32 - new Date(c, $ - 1, 32).getDate();
    }
    const a = (c, $) => {
      const h = c == "min" ? e.minDate : e.maxDate, k = h.getFullYear();
      let I = 1, T = 1, Y = 0, M = 0;
      c === "max" && (I = 12, T = o($.getFullYear(), $.getMonth() + 1), Y = 23, M = 59);
      const A = M;
      return $.getFullYear() === k && (I = h.getMonth() + 1, $.getMonth() + 1 === I && (T = h.getDate(), $.getDate() === T && (Y = h.getHours(), $.getHours() === Y && (M = h.getMinutes())))), {
        [`${c}Year`]: k,
        [`${c}Month`]: I,
        [`${c}Date`]: T,
        [`${c}Hour`]: Y,
        [`${c}Minute`]: M,
        [`${c}Seconds`]: A
      };
    }, l = N(() => {
      const { maxYear: c, maxDate: $, maxMonth: h, maxHour: k, maxMinute: I, maxSeconds: T } = a("max", n.currentDate), { minYear: Y, minDate: M, minMonth: A, minHour: C, minMinute: E, minSeconds: V } = a("min", n.currentDate);
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
          range: [C, k]
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
    }), i = N(() => l.value.map(($, h) => f($.range[0], $.range[1], v($.type), $.type, h))), r = ({
      columnIndex: c,
      selectedValue: $,
      selectedOptions: h
    }) => {
      if (["date", "datetime", "datehour", "month-day", "year-month"].includes(e.type)) {
        let k = [];
        $.forEach((A) => {
          k.push(A);
        }), e.type == "month-day" && k.length < 3 && k.unshift(new Date(n.currentDate || e.minDate || e.maxDate).getFullYear()), e.type == "year-month" && k.length < 3 && k.push(new Date(n.currentDate || e.minDate || e.maxDate).getDate());
        const I = Number(k[0]), T = Number(k[1]) - 1, Y = Math.min(Number(k[2]), o(Number(k[0]), Number(k[1])));
        let M = null;
        e.type === "date" || e.type === "month-day" || e.type === "year-month" ? M = new Date(I, T, Y) : e.type === "datetime" ? M = new Date(I, T, Y, Number(k[3]), Number(k[4])) : e.type === "datehour" && (M = new Date(I, T, Y, Number(k[3]))), n.currentDate = s(M);
      }
      t("change", { columnIndex: c, selectedValue: $, selectedOptions: h });
    }, p = (c, $) => {
      const { formatter: h, isShowChinese: k } = e;
      let I = null;
      if (h)
        I = h(c, { text: Xe($, 2), value: Xe($, 2) });
      else {
        const T = Xe($, 2), Y = k ? Lf[c] : "";
        I = { text: T + Y, value: T };
      }
      return I;
    }, f = (c, $, h, k, I) => {
      const T = [];
      let Y = 0;
      for (; c <= $; )
        T.push(p(k, c)), k === "minute" ? c += e.minuteStep : c++, c <= Number(h) && Y++;
      return n.selectedValue[I] = T[Y].value, e.filter ? e.filter(k, T) : T;
    }, v = (c) => c === "year" ? n.currentDate.getFullYear() : c === "month" ? n.currentDate.getMonth() + 1 : c === "day" ? n.currentDate.getDate() : c === "hour" ? n.currentDate.getHours() : c === "minute" ? n.currentDate.getMinutes() : c === "seconds" ? n.currentDate.getSeconds() : 0, y = (c) => {
      t("cancel", c);
    }, g = (c) => {
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
    }, w = (c) => {
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
        JSON.stringify($) === JSON.stringify(n.currentDate) || (n.currentDate = $, n.selectedValue = w($));
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
      closeHandler: y,
      confirm: g,
      columns: i
    });
  }
});
function Pf(e, t, n, s, o, a) {
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
const Af = /* @__PURE__ */ K(Ef, [["render", Pf]]), { componentName: zf, create: Vf } = W("input-number"), Of = Vf({
  components: { Minus: da, Plus: Ma },
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
      const g = zf;
      return {
        [g]: !0,
        [`${g}--disabled`]: e.disabled
      };
    }), s = (g) => Number(g).toFixed(Number(e.decimalPlaces)), o = (g) => {
      const b = g.target;
      t("update:modelValue", b.value, g);
    }, a = (g, b) => {
      let w = s(g);
      t("update:modelValue", w, b), Number(e.modelValue) !== Number(w) && t("change", w, b);
    }, l = (g = Number(e.modelValue)) => g < Number(e.max) && !e.disabled, i = (g = Number(e.modelValue)) => g > Number(e.min) && !e.disabled, r = (g) => {
      if (e.disabled)
        return;
      t("reduce", g);
      let b = Number(e.modelValue) - Number(e.step);
      i() && b >= Number(e.min) ? a(b, g) : (a(Number(e.min), g), t("overlimit", g, "reduce"));
    }, p = (g) => {
      if (e.disabled)
        return;
      t("add", g);
      let b = Number(e.modelValue) + Number(e.step);
      l() && b <= Number(e.max) ? a(b, g) : (a(Number(e.max), g), t("overlimit", g, "add"));
    }, f = (g) => {
      e.disabled || e.readonly || t("focus", g);
    }, v = (g) => {
      if (e.disabled || e.readonly)
        return;
      let w = g.target.valueAsNumber;
      w < Number(e.min) ? w = Number(e.min) : w > Number(e.max) && (w = Number(e.max)), a(w, g), t("blur", g);
    }, y = (g) => {
      let b = Number(g);
      return b < Number(e.min) ? b = Number(e.min) : b > Number(e.max) && (b = Number(e.max)), b;
    };
    return Q(
      () => [e.max, e.min],
      () => {
        Number(e.min) > Number(e.max) && console.warn("[NutUI] <InputNumber>", "props.max < props.min");
        const g = y(e.modelValue);
        g !== Number(e.modelValue) && a(g, {});
      }
    ), {
      classes: n,
      change: o,
      blur: v,
      focus: f,
      add: p,
      addAllow: l,
      reduce: r,
      reduceAllow: i,
      pxCheck: _e
    };
  }
}), Hf = ["min", "max", "disabled", "readonly", "value"];
function Rf(e, t, n, s, o, a) {
  const l = j("Minus"), i = j("Plus");
  return u(), d("view", {
    class: B(e.classes)
  }, [
    m("view", {
      class: B(["nut-input-number__icon nut-input-number__left", { "nut-input-number__icon--disabled": !e.reduceAllow() }]),
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
    }, null, 44, Hf),
    m("view", {
      class: B(["nut-input-number__icon nut-input-number__right", { "nut-input-number__icon--disabled": !e.addAllow() }]),
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
const Jt = /* @__PURE__ */ K(Of, [["render", Rf]]);
function $n(e, t, n) {
  const s = e.indexOf(t);
  return s === -1 ? e : t === "-" && s !== 0 ? e.slice(0, s) : e.slice(0, s + 1) + e.slice(s).replace(n, "");
}
function Ff(e, t = !0, n = !0) {
  t ? e = $n(e, ".", /\./g) : e = e.split(".")[0], n ? e = $n(e, "-", /-/g) : e = e.replace(/-/, "");
  const s = t ? /[^-0-9.]/g : /[^-0-9]/g;
  return e.replace(s, "");
}
function Wf(e) {
  return e === "number" ? {
    type: "text",
    inputmode: "decimal"
  } : e === "digit" ? {
    type: "tel",
    inputmode: "numeric"
  } : { type: e };
}
const { componentName: Yf, create: jf } = W("input"), Kf = jf({
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
  components: { MaskClose: aa },
  emits: ["update:modelValue", "blur", "focus", "clear", "keypress", "click", "clickInput", "confirm"],
  expose: ["focus", "blur", "select"],
  setup(e, { emit: t }) {
    const n = P(!1), s = P(), o = () => {
      var M;
      return String((M = e.modelValue) != null ? M : "");
    }, a = (M) => we("input", G({}, Wf(M))), l = ue({
      focused: !1,
      validateFailed: !1,
      // 校验失败
      validateMessage: ""
      // 校验信息
    }), i = N(() => {
      const M = Yf;
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
        let C = M.target.value;
        e.maxLength && C.length > Number(e.maxLength) && (C = C.slice(0, Number(e.maxLength))), f(C);
      }
    }, f = (M, A = "onChange") => {
      var C;
      if (["number", "digit"].includes(e.type)) {
        const E = e.type === "number";
        M = Ff(M, E, E);
      }
      e.formatter && A === e.formatTrigger && (M = e.formatter(M)), ((C = s == null ? void 0 : s.value) == null ? void 0 : C.value) !== M && (s.value.value = M), M !== e.modelValue && t("update:modelValue", M);
    }, v = (M) => {
      e.disabled || e.readonly || (n.value = !0, t("focus", M));
    }, y = (M) => {
      if (e.disabled || e.readonly)
        return;
      setTimeout(() => {
        n.value = !1;
      }, 200);
      let C = M.target.value;
      e.maxLength && C.length > Number(e.maxLength) && (C = C.slice(0, Number(e.maxLength))), f(o(), "onBlur"), t("blur", M);
    }, g = (M) => {
      M.stopPropagation(), !e.disabled && (t("update:modelValue", "", M), t("clear", "", M));
    }, b = () => {
      l.validateFailed && (l.validateFailed = !1, l.validateMessage = "");
    }, w = (M) => {
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
      onFocus: v,
      onBlur: y,
      clear: g,
      startComposing: $,
      endComposing: h,
      onClick: c,
      onClickInput: w,
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
}), Uf = { class: "nut-input-value" }, Xf = { class: "nut-input-inner" }, qf = {
  key: 0,
  class: "nut-input-left-box"
}, Gf = { class: "nut-input-box" }, Zf = {
  key: 0,
  class: "nut-input-word-limit"
}, Jf = { class: "nut-input-word-num" }, Qf = { class: "nut-input-right-box" };
function xf(e, t, n, s, o, a) {
  const l = j("MaskClose");
  return u(), d("view", {
    class: B(e.classes),
    onClick: t[1] || (t[1] = (...i) => e.onClick && e.onClick(...i))
  }, [
    m("view", Uf, [
      m("view", Xf, [
        e.$slots.left ? (u(), d("view", qf, [
          D(e.$slots, "left")
        ])) : S("", !0),
        m("view", Gf, [
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
          e.showWordLimit && e.maxLength ? (u(), d("view", Zf, [
            m("span", Jf, _(e.getModelValue() ? e.getModelValue().length : 0), 1),
            ge("/" + _(e.maxLength), 1)
          ])) : S("", !0)
        ]),
        e.clearable && !e.readonly ? Se((u(), d("view", {
          key: 1,
          class: "nut-input-clear-box",
          onClick: t[0] || (t[0] = (...i) => e.clear && e.clear(...i))
        }, [
          D(e.$slots, "clear", {}, () => [
            le(l, ft({ class: "nut-input-clear" }, e.$attrs, {
              size: e.clearSize,
              width: e.clearSize,
              height: e.clearSize
            }), null, 16, ["size", "width", "height"])
          ])
        ], 512)), [
          [De, (e.active || e.showClearIcon) && e.getModelValue().length > 0]
        ]) : S("", !0),
        m("view", Qf, [
          D(e.$slots, "right")
        ])
      ])
    ])
  ], 2);
}
const ep = /* @__PURE__ */ K(Kf, [["render", xf]]), io = Symbol("nut-radio"), { componentName: Ue, create: tp } = W("radio"), ro = tp({
  components: {
    CheckNormal: zt,
    CheckChecked: dn
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
      const { iconSize: v } = e, y = {
        CheckNormal: t.icon ? t.icon : zt,
        Checked: t.checkedIcon ? t.checkedIcon : dn
      }, g = o.value ? y.Checked : y.CheckNormal, b = _e(v);
      return we(g, {
        width: b,
        height: b,
        class: a.value
      });
    }, i = () => {
      var v;
      return we(
        "view",
        {
          class: `${Ue}__label ${e.disabled ? `${Ue}__label--disabled` : ""}`
        },
        (v = t.default) == null ? void 0 : v.call(t)
      );
    }, r = () => {
      var v;
      return we(
        "view",
        {
          class: `${Ue}__button ${o.value && `${Ue}__button--active`} ${Ue}__button--${n.value} ${e.disabled ? `${Ue}__button--disabled` : ""}`
        },
        (v = t.default) == null ? void 0 : v.call(t)
      );
    }, p = () => {
      o.value || e.disabled || s.updateValue(e.label);
    }, f = N(() => s.position.value === "left");
    return () => we(
      "view",
      {
        class: `${Ue} ${Ue}--${e.shape} ${f.value ? `${Ue}--reverse` : ""}`,
        onClick: p
      },
      [e.shape === "button" ? r() : [l(), i()]]
    );
  }
}), { componentName: bn, create: np } = W("radio-group"), uo = np({
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
      label: un(N(() => e.modelValue)),
      position: un(N(() => e.textPosition)),
      updateValue: s
    }), Q(
      () => e.modelValue,
      (o) => t("change", o)
    ), () => {
      var o;
      return we(
        "view",
        {
          class: `${bn} ${bn}--${e.direction}`
        },
        (o = n.default) == null ? void 0 : o.call(n)
      );
    };
  }
}), { create: op } = W("rate"), lp = op({
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
      default: () => fn
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
  components: { StarFillN: fn },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t, slots: n }) {
    const s = P([]), o = (f) => {
      t("update:modelValue", f), t("change", f);
    }, a = (f, v) => {
      if (e.disabled || e.readonly)
        return;
      let y = 0;
      v === 1 && e.modelValue === v ? y = 0 : (y = v, e.allowHalf && f == 2 && (y -= 0.5)), o(y);
    }, l = (f, v, y) => {
      let g = 0;
      for (let b = v.value.length - 1; b >= 0; b--) {
        const w = v.value[b];
        if (f > w.offsetLeft) {
          y ? g = b + (f > w.offsetLeft + w.clientWidth / 2 ? 1 : 0.5) : g = b + 1;
          break;
        }
      }
      return g;
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
      renderIcon: lt,
      slots: n
    });
  }
}), sp = ["id"], ap = { class: "nut-rate-item__icon--full" }, ip = {
  key: 0,
  class: "nut-rate-item__icon--half"
}, rp = {
  key: 1,
  class: "nut-rate-item__icon--half"
};
function up(e, t, n, s, o, a) {
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
      m("view", ap, [
        (u(), x(Ae(
          e.renderIcon(e.customIcon, {
            width: e.size,
            height: e.size,
            size: e.size,
            color: l <= Number(e.modelValue) ? e.activeColor : e.voidColor
          })
        ), {
          class: B(["nut-rate-item__icon", { "nut-rate-item__icon--disabled": e.disabled || l > Number(e.modelValue) }]),
          onClick: (i) => e.onClick(1, l)
        }, null, 8, ["class", "onClick"]))
      ]),
      e.allowHalf && Number(e.modelValue) + 1 > l ? (u(), d("view", ip, [
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
      ])) : e.allowHalf && Number(e.modelValue) + 1 < l ? (u(), d("view", rp, [
        (u(), x(Ae(e.renderIcon(e.customIcon, { width: e.size, height: e.size, size: e.size, color: e.voidColor })), {
          class: "nut-rate-item__icon nut-rate-item__icon--disabled",
          onClick: (i) => e.onClick(2, l)
        }, null, 8, ["onClick"]))
      ])) : S("", !0)
    ], 12, sp))), 128))
  ], 32);
}
const co = /* @__PURE__ */ K(lp, [["render", up]]), { create: cp } = W("short-password"), dp = "NutShortPassword", fp = cp({
  components: {
    NutPopup: Le,
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
    const n = ke(dp), s = P(e.modelValue), o = N(() => r(Number(e.length))), a = P(e.visible), l = (f) => {
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
}), pp = { class: "nut-short-password-title" }, mp = { class: "nut-short-password-subtitle" }, hp = { class: "nut-short-password-wrapper" }, gp = {
  key: 0,
  class: "nut-short-password__item-icon"
}, yp = { class: "nut-short-password__message" }, vp = { class: "nut-short-password--error" }, $p = {
  key: 0,
  class: "nut-short-password--forget"
};
function bp(e, t, n, s, o, a) {
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
        m("view", pp, _(e.title || e.translate("title")), 1),
        m("view", mp, _(e.desc || e.translate("desc")), 1),
        m("div", hp, [
          m("view", {
            class: "nut-short-password__list",
            onTouchstart: t[0] || (t[0] = (...r) => e.onTouchStart && e.onTouchStart(...r))
          }, [
            (u(!0), d(ee, null, re(new Array(e.comLen), (r, p) => (u(), d("view", {
              key: p,
              class: "nut-short-password__item"
            }, [
              String(e.realInput).length > p ? (u(), d("view", gp)) : S("", !0)
            ]))), 128))
          ], 32)
        ]),
        m("view", yp, [
          m("view", vp, _(e.errorMsg), 1),
          e.tips || e.translate("tips") ? (u(), d("view", $p, [
            le(l, {
              class: "icon",
              width: "11px",
              height: "11px"
            }),
            m("view", {
              onClick: t[1] || (t[1] = (...r) => e.onTips && e.onTips(...r))
            }, _(e.tips || e.translate("tips")), 1)
          ])) : S("", !0)
        ])
      ]),
      _: 1
    }, 8, ["visible", "close-on-click-overlay", "lock-scroll", "onClickCloseIcon", "onClickOverlay"])
  ]);
}
const kp = /* @__PURE__ */ K(fp, [["render", bp]]), { create: wp } = W("textarea"), Cp = "NutTextarea", Sp = wp({
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
    const n = ke(Cp), s = P(), o = N(() => {
      const g = "nut-textarea";
      return {
        [g]: !0,
        [`${g}--disabled`]: e.disabled
      };
    });
    ve(() => {
      e.modelValue && i(String(e.modelValue)), e.autosize && Te(l);
    });
    const a = N(() => ({
      textAlign: e.textAlign
      // resize: props.autosize ? 'vertical' : 'none'
    })), l = () => {
      let g = s.value;
      g.style.height = "auto";
      let b = g.scrollHeight;
      if (typeof e.autosize == "object") {
        const { maxHeight: w, minHeight: c } = e.autosize;
        w !== void 0 && (b = Math.min(b, w)), c !== void 0 && (b = Math.max(b, c));
      }
      b && (g.style.height = b + "px");
    };
    Q(
      () => e.modelValue,
      () => {
        e.autosize && Te(l);
      }
    );
    const i = (g, b) => {
      e.maxLength && g.length > Number(e.maxLength) && (g = g.substring(0, Number(e.maxLength))), t("update:modelValue", g, b), t("change", g, b);
    };
    return {
      textareaRef: s,
      classes: o,
      styles: a,
      change: (g) => {
        if (!g.target.composing) {
          const b = g.target;
          let w = b.value;
          e.maxLength && w.length > Number(e.maxLength) && (w = w.slice(0, Number(e.maxLength))), i(b.value, g);
        }
      },
      focus: (g) => {
        e.disabled || e.readonly || t("focus", g);
      },
      blur: (g) => {
        if (e.disabled || e.readonly)
          return;
        let w = g.target.value;
        i(w, g), t("blur", { value: w, event: g });
      },
      translate: n,
      startComposing: ({ target: g }) => {
        g.composing = !0;
      },
      endComposing: ({ target: g }) => {
        g.composing && (g.composing = !1, g.dispatchEvent(new Event("input")));
      }
    };
  }
}), Tp = ["rows", "disabled", "readonly", "value", "maxlength", "placeholder", "autofocus"], Np = {
  key: 0,
  class: "nut-textarea__limit"
};
function Dp(e, t, n, s, o, a) {
  return u(), d("view", {
    class: B(e.classes)
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
    }, null, 44, Tp),
    e.limitShow ? (u(), d("view", Np, _(e.modelValue ? e.modelValue.length : 0) + "/" + _(e.maxLength), 1)) : S("", !0)
  ], 2);
}
const Ip = /* @__PURE__ */ K(Sp, [["render", Dp]]);
class _p {
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
let Bp = class {
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
class Mp {
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
const { create: Lp } = W("progress"), Ep = Lp({
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
}), Pp = { class: "nut-progress" };
function Ap(e, t, n, s, o, a) {
  const l = j("Checked");
  return u(), d("div", Pp, [
    m("div", {
      class: B(["nut-progress-outer", [e.showText && !e.textInside ? "nut-progress-outer-part" : "", e.size ? "nut-progress-" + e.size : ""]]),
      style: L({ height: e.height })
    }, [
      m("div", {
        class: B(["nut-progress-inner", e.status === "active" ? "nut-active" : ""]),
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
        }, _(e.percentage) + _(e.isShowPercentage ? "%" : ""), 5)
      ], 4)) : S("", !0),
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
      ], 4)) : S("", !0)
    ], 6),
    e.showText && !e.textInside ? (u(), d("div", {
      key: 0,
      class: "nut-progress-text",
      style: L({ lineHeight: e.height })
    }, [
      e.status === "text" || e.status === "active" ? (u(), d("span", {
        key: 0,
        style: L(e.textStyle)
      }, _(e.percentage) + _(e.isShowPercentage ? "%" : ""), 5)) : e.status === "icon" ? D(e.$slots, "icon-name", { key: 1 }, () => [
        le(l, {
          width: "15px",
          height: "15px",
          color: "#439422"
        })
      ]) : S("", !0)
    ], 4)) : S("", !0)
  ]);
}
const fo = /* @__PURE__ */ K(Ep, [["render", Ap]]), { create: zp } = W("uploader"), Vp = "NutUploader", Op = zp({
  components: {
    NutProgress: fo,
    Photograph: Na,
    Failure: On,
    Loading: xe,
    Del: zn,
    Link: zs
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
    const n = ke(Vp), s = P(e.fileList), o = P([]);
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
      const k = new _p();
      k.url = e.url, k.formData = $.formData, k.timeout = e.timeout * 1, k.method = e.method, k.xhrState = e.xhrState, k.headers = e.headers, k.withCredentials = e.withCredentials, k.beforeXhrUpload = e.beforeXhrUpload;
      try {
        k.sourceFile = $.formData.get(e.name);
      } catch (T) {
        console.warn("[NutUI] <Uploader> formData.get(name)", T);
      }
      k.onStart = (T) => {
        $.status = "ready", $.message = n("readyUpload"), p(h), t("start", T);
      }, k.onProgress = (T, Y) => {
        $.status = "uploading", $.message = n("uploading"), $.percentage = (T.loaded / T.total * 100).toFixed(0), t("progress", { event: T, option: Y, percentage: $.percentage });
      }, k.onSuccess = (T, Y) => {
        $.status = "success", $.message = n("success"), t("success", {
          responseText: T,
          option: Y,
          fileItem: $
        }), t("update:fileList", s.value);
      }, k.onFailure = (T, Y) => {
        $.status = "error", $.message = n("error"), t("failure", {
          responseText: T,
          option: Y,
          fileItem: $
        });
      };
      let I = new Bp(k);
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
    }, v = ($) => {
      $.forEach((h, k) => {
        const I = new FormData();
        for (const [Y, M] of Object.entries(e.data))
          I.append(Y, M);
        I.append(e.name, h);
        const T = ue(new Mp());
        if (T.name = h.name, T.status = "ready", T.type = h.type, T.formData = I, T.message = n("waitingUpload"), r(T, k), e.isPreview && h.type.includes("image")) {
          const Y = new FileReader();
          Y.onload = (M) => {
            T.url = M.target.result, s.value.push(T);
          }, Y.readAsDataURL(h);
        } else
          s.value.push(T);
      });
    }, y = ($) => {
      const h = e.maximum * 1, k = e.maximize * 1, I = new Array();
      $ = $.filter((Y) => Y.size > k ? (I.push(Y), !1) : !0), I.length && t("oversize", I);
      let T = $.length + s.value.length;
      return T > h && $.splice($.length - (T - h)), $;
    }, g = ($, h) => {
      s.value.splice(h, 1), t("delete", {
        file: $,
        fileList: s.value,
        index: h
      });
    }, b = ($, h) => {
      p(h), jt(e.beforeDelete, {
        args: [$, s.value],
        done: () => g($, h)
      });
    }, w = ($) => {
      if (e.disabled)
        return;
      const h = $.target;
      let { files: k } = h;
      e.beforeUpload ? e.beforeUpload(k).then((I) => c(I)) : c(k), t("change", {
        fileList: s.value,
        event: $
      }), e.clearInput && l(h);
    }, c = ($) => {
      const h = y(new Array().slice.call($));
      v(h);
    };
    return {
      onChange: w,
      onDelete: b,
      fileList: s,
      fileItemClick: i,
      clearUploadQueue: p,
      submit: f,
      renderInput: a
    };
  }
}), Hp = { class: "nut-uploader" }, Rp = {
  key: 0,
  class: "nut-uploader__slot"
}, Fp = {
  key: 0,
  class: "nut-uploader__preview-img"
}, Wp = {
  key: 0,
  class: "nut-uploader__preview__progress"
}, Yp = { class: "nut-uploader__preview__progress__msg" }, jp = ["onClick"], Kp = ["src", "onClick"], Up = {
  key: 3,
  class: "nut-uploader__preview-img__file"
}, Xp = ["onClick"], qp = { class: "file__name_tips" }, Gp = { class: "tips" }, Zp = {
  key: 1,
  class: "nut-uploader__preview-list"
}, Jp = ["onClick"], Qp = { class: "file__name_tips" };
function xp(e, t, n, s, o, a) {
  const l = j("Failure"), i = j("Loading"), r = j("Link"), p = j("Del"), f = j("nut-progress"), v = j("Photograph");
  return u(), d("view", Hp, [
    e.$slots.default ? (u(), d("view", Rp, [
      D(e.$slots, "default"),
      Number(e.maximum) - e.fileList.length ? (u(), x(Ae(e.renderInput), {
        key: 0,
        onChange: e.onChange
      }, null, 40, ["onChange"])) : S("", !0)
    ])) : S("", !0),
    (u(!0), d(ee, null, re(e.fileList, (y, g) => {
      var b;
      return u(), d("view", {
        key: y.uid,
        class: B(["nut-uploader__preview", [e.listType]])
      }, [
        e.listType == "picture" && !e.$slots.default ? (u(), d("view", Fp, [
          y.status != "success" ? (u(), d("view", Wp, [
            y.status != "ready" ? (u(), d(ee, { key: 0 }, [
              y.status == "error" ? (u(), x(l, {
                key: 0,
                color: "#fff"
              })) : (u(), x(i, {
                key: 1,
                name: "loading",
                color: "#fff"
              }))
            ], 64)) : S("", !0),
            m("view", Yp, _(y.message), 1)
          ])) : S("", !0),
          e.isDeletable ? (u(), d("view", {
            key: 1,
            class: "close",
            onClick: (w) => e.onDelete(y, g)
          }, [
            D(e.$slots, "delete-icon", {}, () => [
              le(l)
            ])
          ], 8, jp)) : S("", !0),
          (b = y == null ? void 0 : y.type) != null && b.includes("image") && y.url ? (u(), d("img", {
            key: 2,
            class: "nut-uploader__preview-img__c",
            src: y.url,
            onClick: (w) => e.fileItemClick(y)
          }, null, 8, Kp)) : (u(), d("view", Up, [
            m("view", {
              class: "nut-uploader__preview-img__file__name",
              onClick: (w) => e.fileItemClick(y)
            }, [
              m("view", qp, _(y.name), 1)
            ], 8, Xp)
          ])),
          m("view", Gp, _(y.name), 1)
        ])) : e.listType == "list" ? (u(), d("view", Zp, [
          m("view", {
            class: B(["nut-uploader__preview-img__file__name", [y.status]]),
            onClick: (w) => e.fileItemClick(y)
          }, [
            le(r, { class: "nut-uploader__preview-img__file__link" }),
            m("view", Qp, _(y.name), 1),
            e.isDeletable ? (u(), x(p, {
              key: 0,
              color: "#808080",
              class: "nut-uploader__preview-img__file__del",
              onClick: (w) => e.onDelete(y, g)
            }, null, 8, ["onClick"])) : S("", !0)
          ], 10, Jp),
          y.status == "uploading" ? (u(), x(f, {
            key: 0,
            size: "small",
            percentage: y.percentage,
            "stroke-color": "linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)",
            "show-text": !1
          }, null, 8, ["percentage"])) : S("", !0)
        ])) : S("", !0)
      ], 2);
    }), 128)),
    e.listType == "picture" && !e.$slots.default && Number(e.maximum) - e.fileList.length ? (u(), d("view", {
      key: 1,
      class: B(["nut-uploader__upload", [e.listType]])
    }, [
      D(e.$slots, "upload-icon", {}, () => [
        le(v, { color: "#808080" })
      ]),
      (u(), x(Ae(e.renderInput), { onChange: e.onChange }, null, 40, ["onChange"]))
    ], 2)) : S("", !0)
  ]);
}
const e1 = /* @__PURE__ */ K(Op, [["render", xp]]), { create: t1 } = W("number-keyboard"), n1 = "NutNumberKeyboard", o1 = t1({
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
    const n = ke(n1), s = P(void 0), o = P(e.visible), a = P();
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
    }, v = (c) => {
      const $ = a.value;
      $ && !$.contains(c.target) && f();
    };
    Q(
      () => e.visible,
      (c) => {
        o.value = c, c ? window.addEventListener("touchstart", v, !1) : window.removeEventListener("touchstart", v, !1);
      }
    );
    function y(c, $) {
      $.stopPropagation(), s.value = c.id, (c.type == "number" || c.type == "custom") && (t("input", c.id), e.modelValue.length < +e.maxlength && t("update:modelValue", e.modelValue + c.id)), c.type == "lock" && w(), c.type == "delete" && (t("delete"), t("update:modelValue", e.modelValue.slice(0, e.modelValue.length - 1)));
    }
    function g(c) {
      c.stopPropagation();
    }
    function b(c) {
      c.preventDefault(), s.value = void 0;
    }
    function w() {
      t("update:visible", !1), t("close");
    }
    return {
      clickKeyIndex: s,
      defaultKey: l,
      closeBoard: w,
      onTouchEnd: b,
      onTouchMove: g,
      onTouchstart: y,
      keysList: p,
      genCustomKeys: r,
      getBasicKeys: i,
      root: a,
      show: o,
      translate: n
    };
  }
}), l1 = { ref: "root" }, s1 = { class: "nut-number-keyboard" }, a1 = {
  key: 0,
  class: "nut-number-keyboard__header"
}, i1 = { class: "nut-number-keyboard__title" }, r1 = { class: "nut-number-keyboard__body" }, u1 = { class: "nut-number-keyboard__keys" }, c1 = ["onTouchstart"], d1 = {
  key: 1,
  src: "https://img11.360buyimg.com/imagetools/jfs/t1/146371/38/8485/738/5f606425Eca239740/14f4b4f5f20d8a68.png"
}, f1 = {
  key: 2,
  src: "https://img11.360buyimg.com/imagetools/jfs/t1/129395/8/12735/2030/5f61ac37E70cab338/fb477dc11f46056c.png"
}, p1 = {
  key: 0,
  class: "nut-number-keyboard__sidebar"
}, m1 = { class: "nut-key__wrapper" }, h1 = /* @__PURE__ */ m("img", { src: "https://img11.360buyimg.com/imagetools/jfs/t1/129395/8/12735/2030/5f61ac37E70cab338/fb477dc11f46056c.png" }, null, -1), g1 = [
  h1
];
function y1(e, t, n, s, o, a) {
  const l = j("nut-popup");
  return u(), d("div", l1, [
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
        m("div", s1, [
          e.title ? (u(), d("div", a1, [
            m("h3", i1, _(e.title), 1),
            e.type == "default" ? (u(), d("span", {
              key: 0,
              class: "nut-number-keyboard__close",
              onClick: t[0] || (t[0] = (i) => e.closeBoard())
            }, _(e.translate("done")), 1)) : S("", !0)
          ])) : S("", !0),
          m("div", r1, [
            m("div", u1, [
              (u(!0), d(ee, null, re(e.keysList, (i) => (u(), d("div", {
                key: "key" + i.id,
                class: B([
                  "nut-key__wrapper",
                  {
                    "nut-key__wrapper--wider": i.id == 0 && e.type == "rightColumn" && Array.isArray(e.customKey) && e.customKey.length == 1
                  }
                ])
              }, [
                m("div", {
                  class: B([
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
                    ge(_(i.id), 1)
                  ], 64)) : S("", !0),
                  i.type == "lock" ? (u(), d("img", d1)) : S("", !0),
                  i.type == "delete" ? (u(), d("img", f1)) : S("", !0)
                ], 42, c1)
              ], 2))), 128))
            ]),
            e.type == "rightColumn" ? (u(), d("div", p1, [
              m("div", m1, [
                m("div", {
                  class: B(["nut-key", { active: e.clickKeyIndex == "delete" }]),
                  onTouchstart: t[3] || (t[3] = (i) => e.onTouchstart({ id: "delete", type: "delete" }, i)),
                  onTouchmove: t[4] || (t[4] = (i) => e.onTouchMove(i)),
                  onTouchend: t[5] || (t[5] = (...i) => e.onTouchEnd && e.onTouchEnd(...i))
                }, g1, 34)
              ]),
              m("div", {
                class: "nut-key__wrapper nut-key__wrapper--finish",
                onClick: t[6] || (t[6] = (i) => e.closeBoard())
              }, [
                m("div", {
                  class: B(["nut-key", "nut-key--finish ", { activeFinsh: e.clickKeyIndex == "finish" }])
                }, _(e.confirmText || e.translate("done")), 3)
              ])
            ])) : S("", !0)
          ])
        ])
      ]),
      _: 1
    }, 8, ["visible", "pop-class", "lock-scroll"])
  ], 512);
}
const v1 = /* @__PURE__ */ K(o1, [["render", y1]]), po = Symbol("nut-form"), $1 = (e) => ({
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
    const { children: s, linkChildren: o } = Gn(po);
    o({ props: t });
    const a = N(() => ue({}));
    Me("formErrorTip", a);
    const l = () => {
      Object.keys(a.value).forEach((g) => {
        a.value[g] = "";
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
      const g = [];
      return s.forEach((b) => {
        g.push({
          prop: b == null ? void 0 : b.prop,
          rules: (b == null ? void 0 : b.rules) || []
        });
      }), g;
    }, p = (g) => {
      g.message && n("validate", g), a.value[g.prop] = g.message;
    }, f = (g) => Ke(this, null, function* () {
      const { rules: b, prop: w } = g, c = (T) => new Promise((Y, M) => {
        try {
          p(T), Y(T);
        } catch (A) {
          M(A);
        }
      });
      w || console.warn("[NutUI] <FormItem> 使用 rules 校验规则时 , 必须设置 prop 参数");
      const $ = At(t.modelValue, w || "");
      p({ prop: w, message: "" });
      const h = t.rules || {}, k = [...(h == null ? void 0 : h[w]) || [], ...b];
      for (; k.length; ) {
        const I = k.shift(), { validator: Y } = I, M = Et(I, ["validator"]), { required: A, regex: C, message: E } = M, V = { prop: w, message: E || "" };
        if (A && !$ && $ !== 0 || C && !C.test(String($)))
          return c(V);
        if (Y) {
          const X = Y($, M);
          if (Bn(X))
            try {
              if ((yield X) === !1)
                return c(V);
            } catch (Z) {
              return c({ prop: w, message: Z });
            }
          else if (!X)
            return c(V);
        }
      }
      return Promise.resolve(!0);
    }), v = (g = "") => new Promise((b, w) => {
      try {
        const $ = r().map((h) => g && g !== h.prop ? Promise.resolve(!0) : f(h));
        Promise.all($).then((h) => {
          h = h.filter((I) => I !== !0);
          const k = { valid: !0, errors: [] };
          h.length && (k.valid = !1, k.errors = h), b(k);
        });
      } catch (c) {
        w(c);
      }
    });
    return { validate: v, reset: i, submit: () => (v(), !1), formErrorTip: a };
  }
}), { create: b1 } = W("form"), k1 = b1(
  $1({
    NutCellGroup: Fn
  })
);
function w1(e, t, n, s, o, a) {
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
const mo = /* @__PURE__ */ K(k1, [["render", w1]]), { create: C1 } = W("form-item"), S1 = C1({
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
    NutCell: Rn
  },
  setup(e, { slots: t }) {
    const { parent: n } = Zn(po), s = N(() => {
      var g;
      const v = (g = n.props) == null ? void 0 : g.rules;
      let y = !1;
      for (const b in v)
        Object.prototype.hasOwnProperty.call(v, b) && b === e.prop && Array.isArray(v[b]) && (y = v[b].some((w) => w.required));
      return e.required || e.rules.some((b) => b.required) || y;
    }), o = N(() => {
      const v = n.props.labelPosition, y = e.labelPosition ? e.labelPosition : v;
      return y !== "left" ? `nut-form-item__${y}` : "";
    }), a = N(() => {
      const v = n.props.starPosition, y = e.starPosition ? e.starPosition : v;
      return y !== "left" ? `nut-form-item__star-${y}` : "";
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
      getSlots: (v) => t[v],
      isRequired: s,
      labelPositionClass: o,
      starPositionClass: a
    };
  }
}), T1 = { class: "nut-cell__value nut-form-item__body" };
function N1(e, t, n, s, o, a) {
  const l = j("nut-cell");
  return u(), x(l, {
    class: B(["nut-form-item", [{ error: e.parent[e.prop], line: e.showErrorLine }, e.$attrs.class, e.labelPositionClass]]),
    style: L(e.$attrs.style)
  }, {
    default: te(() => [
      e.label || e.getSlots("label") ? (u(), d("view", {
        key: 0,
        class: B(["nut-cell__title nut-form-item__label", { required: e.isRequired, [e.starPositionClass]: e.starPositionClass }]),
        style: L(e.labelStyle)
      }, [
        D(e.$slots, "label", {}, () => [
          ge(_(e.label), 1)
        ])
      ], 6)) : S("", !0),
      m("view", T1, [
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
        }, _(e.parent[e.prop]), 5)) : S("", !0)
      ])
    ]),
    _: 3
  }, 8, ["class", "style"]);
}
const ho = /* @__PURE__ */ K(S1, [["render", N1]]), go = Symbol("nut-swipe"), { create: D1 } = W("swipe"), I1 = D1({
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
    let f = "", v = "";
    const y = ue({
      offset: 0,
      moving: !1
    }), g = (I = "") => {
      r && r.update(e.name), p.value = !0, I && (y.offset = I === "left" ? -i.value : a.value), t("open", {
        name: e.name,
        position: f || I
      });
    }, b = () => {
      y.offset = 0, p.value && (p.value = !1, t("close", {
        name: e.name,
        position: f
      }));
    }, w = (I, T, Y) => {
      Y ? I.stopPropagation() : b(), t("click", T);
    }, c = N(() => ({
      transform: `translate3d(${y.offset}px, 0, 0)`
    })), $ = (I) => {
      f = I > 0 ? "right" : "left";
      let T = I;
      switch (f) {
        case "left":
          p.value && v === f ? T = -i.value : T = Math.abs(I) > i.value ? -i.value : I;
          break;
        case "right":
          p.value && v === f ? T = a.value : T = Math.abs(I) > a.value ? a.value : I;
          break;
      }
      y.offset = T;
    }, h = Ge();
    return ce(G({
      touchStyle: c
    }, {
      onTouchStart(I) {
        e.disabled || h.start(I);
      },
      onTouchMove(I) {
        e.disabled || (h.move(I), h.isHorizontal() && (s.value = !0, y.moving = !0, $(h.deltaX.value), e.touchMovePreventDefault && I.preventDefault(), e.touchMoveStopPropagation && I.stopPropagation()));
      },
      onTouchEnd() {
        if (y.moving) {
          switch (y.moving = !1, v = f, f) {
            case "left":
              Math.abs(y.offset) <= i.value / 2 ? b() : (y.offset = -i.value, g());
              break;
            case "right":
              Math.abs(y.offset) <= a.value / 2 ? b() : (y.offset = a.value, g());
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
      open: g,
      close: b,
      onClick: w,
      lockClick: s
    });
  }
});
function _1(e, t, n, s, o, a) {
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
const yo = /* @__PURE__ */ K(I1, [["render", _1]]), { create: B1 } = W("swipe-group"), M1 = B1({
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
}), L1 = {
  ref: "swipeGroupRef",
  class: "nut-swipe-group"
};
function E1(e, t, n, s, o, a) {
  return u(), d("div", L1, [
    D(e.$slots, "default")
  ], 512);
}
const P1 = /* @__PURE__ */ K(M1, [["render", E1]]), { create: A1 } = W("action-sheet"), z1 = A1({
  components: {
    NutPopup: Le,
    Loading: xe
  },
  props: ce(G({}, yt), {
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
}), V1 = { class: "nut-action-sheet" }, O1 = {
  key: 0,
  class: "nut-action-sheet__title"
}, H1 = { key: 1 }, R1 = {
  key: 0,
  class: "nut-action-sheet__item nut-action-sheet__desc"
}, F1 = {
  key: 1,
  class: "nut-action-sheet__menu"
}, W1 = ["onClick"], Y1 = { key: 1 }, j1 = { class: "nut-action-sheet__subdesc" };
function K1(e, t, n, s, o, a) {
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
      m("view", V1, [
        e.title ? (u(), d("view", O1, _(e.title), 1)) : S("", !0),
        D(e.$slots, "default"),
        e.slotDefault ? S("", !0) : (u(), d("view", H1, [
          e.description ? (u(), d("view", R1, _(e.description), 1)) : S("", !0),
          e.menuItems.length ? (u(), d("view", F1, [
            (u(!0), d(ee, null, re(e.menuItems, (r, p) => (u(), d("view", {
              key: p,
              class: B(["nut-action-sheet__item", {
                "nut-action-sheet__item--disabled": r.disable,
                "nut-action-sheet__item--loading": r.loading
              }]),
              style: L({ color: e.isHighlight(r) || r.color }),
              onClick: (f) => e.chooseItem(r, p)
            }, [
              r.loading ? (u(), x(l, { key: 0 })) : (u(), d("view", Y1, _(r[e.optionTag]), 1)),
              m("view", j1, _(r[e.optionSubTag]), 1)
            ], 14, W1))), 128))
          ])) : S("", !0),
          e.cancelTxt ? (u(), d("view", {
            key: 2,
            class: "nut-action-sheet__cancel",
            onClick: t[0] || (t[0] = (...r) => e.cancelActionSheet && e.cancelActionSheet(...r))
          }, _(e.cancelTxt), 1)) : S("", !0)
        ]))
      ])
    ]),
    _: 3
  }, 8, ["visible", "close-on-click-overlay", "lock-scroll", "z-index", "onClickOverlay"]);
}
const U1 = /* @__PURE__ */ K(z1, [["render", K1]]), { componentName: X1, create: q1 } = W("backtop"), G1 = q1({
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
      [X1]: !0,
      show: n.backTop
    })), o = N(() => ({
      right: `${e.right}px`,
      bottom: `${e.bottom}px`,
      zIndex: e.zIndex
    }));
    function a() {
      n.scrollEl instanceof Window ? n.scrollTop = n.scrollEl.pageYOffset : n.scrollTop = n.scrollEl.scrollTop, n.backTop = n.scrollTop >= e.distance;
    }
    function l(y = 0) {
      n.scrollEl instanceof Window ? window.scrollTo(0, y) : n.scrollEl.scrollTop = y;
    }
    function i() {
      let y = Ve(function g() {
        var b = e.duration - Math.max(0, n.startTime - +/* @__PURE__ */ new Date() + e.duration), w = b * -n.scrollTop / e.duration + n.scrollTop;
        l(w), y = Ve(g), (b == e.duration || w == 0) && wc(y);
      });
    }
    function r() {
      n.scrollEl.addEventListener("scroll", a, !1), n.scrollEl.addEventListener("resize", a, !1);
    }
    function p() {
      n.scrollEl.removeEventListener("scroll", a, !1), n.scrollEl.removeEventListener("resize", a, !1);
    }
    function f(y) {
      n.startTime = +/* @__PURE__ */ new Date(), e.isAnimation && e.duration > 0 ? i() : l(), t("click", y);
    }
    function v() {
      e.elId && document.getElementById(e.elId) && (n.scrollEl = document.getElementById(e.elId)), r();
    }
    return ve(() => {
      e.distance == 0 && (n.backTop = !0), v();
    }), je(() => {
      p();
    }), mt(() => {
      n.keepAlive && (n.keepAlive = !1, v());
    }), ht(() => {
      n.keepAlive = !0, p();
    }), {
      state: n,
      classes: s,
      style: o,
      click: f
    };
  }
});
function Z1(e, t, n, s, o, a) {
  const l = j("Top");
  return u(), d("div", {
    class: B(e.classes),
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
const J1 = /* @__PURE__ */ K(G1, [["render", Z1]]), { create: Q1 } = W("drag"), x1 = Q1({
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
        const v = p.targetTouches[0];
        n.nx = v.clientX - n.position.x, n.ny = v.clientY - n.position.y, n.xPum = n.startLeft + n.nx, n.yPum = n.startTop + n.ny;
        const y = n.screenWidth - n.elWidth - n.boundary.right;
        Math.abs(n.xPum) > y ? n.xPum = y : n.xPum <= n.boundary.left && (n.xPum = n.boundary.left), n.yPum < n.boundary.top ? n.yPum = n.boundary.top : n.yPum > n.screenHeight - n.elHeight - n.boundary.bottom && (n.yPum = n.screenHeight - n.elHeight - n.boundary.bottom), e.direction != "y" && (f.style.left = n.xPum + "px"), e.direction != "x" && (f.style.top = n.yPum + "px");
      }
    }
    function i(p) {
      const f = p.currentTarget;
      let y = p.changedTouches[0].clientX;
      const g = n.screenWidth - n.elWidth - n.boundary.right;
      y > g ? y = g : y < n.boundary.left ? y = n.boundary.left : y = y < n.screenWidth / 2 ? n.boundary.left : g, e.direction != "y" && e.attract && (y < n.screenWidth / 2 ? Ve(() => {
        o(f);
      }) : Ve(() => {
        a(f, g);
      })), e.direction != "x" && (f.style.top = n.yPum + "px");
    }
    function r(p) {
      const f = p.currentTarget, v = p.touches[0], y = p.targetTouches[0];
      n.startTop = f.offsetTop, n.startLeft = f.offsetLeft, n.position.x = v.clientX, n.position.y = v.clientY, n.nx = y.clientX - n.position.x, n.ny = y.clientY - n.position.y, n.xPum = n.startLeft + n.nx, n.yPum = n.startTop + n.ny;
    }
    return ve(() => {
      s(), n.boundary = e.boundary;
    }), mt(() => {
      n.keepAlive && (n.keepAlive = !1);
    }), ht(() => {
      n.keepAlive = !0, t.value.removeEventListener("touchstart", r), t.value.removeEventListener("touchmove", l), t.value.removeEventListener("touchend", i);
    }), {
      myDrag: t,
      touchStart: r,
      touchMove: l,
      touchEnd: i
    };
  }
});
function em(e, t, n, s, o, a) {
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
const tm = /* @__PURE__ */ K(x1, [["render", em]]), { create: nm } = W("dialog"), om = "NutDialog", lm = nm({
  inheritAttrs: !1,
  components: {
    NutPopup: Le,
    NutButton: qe
  },
  props: ce(G({}, yt), {
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
    const n = ke(om), s = P(e.visible);
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
      jt(e.beforeClose, {
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
}), sm = {
  key: 0,
  class: "nut-dialog__header"
}, am = ["innerHTML"];
function im(e, t, n, s, o, a) {
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
        class: B(["nut-dialog", e.customClass])
      }, [
        e.$slots.header || e.title ? (u(), d("view", sm, [
          e.$slots.header ? D(e.$slots, "header", { key: 0 }) : (u(), d(ee, { key: 1 }, [
            ge(_(e.title), 1)
          ], 64))
        ])) : S("", !0),
        m("view", {
          class: "nut-dialog__content",
          style: L(e.contentStyle)
        }, [
          e.$slots.default ? D(e.$slots, "default", { key: 0 }) : typeof e.content == "string" ? (u(), d("view", {
            key: 1,
            innerHTML: e.content
          }, null, 8, am)) : (u(), x(Ae(e.content), { key: 2 }))
        ], 4),
        e.noFooter ? S("", !0) : (u(), d("view", {
          key: 1,
          class: B(["nut-dialog__footer", { [e.footerDirection]: e.footerDirection }])
        }, [
          e.$slots.footer ? D(e.$slots, "footer", { key: 0 }) : (u(), d(ee, { key: 1 }, [
            e.noCancelBtn ? S("", !0) : (u(), x(l, {
              key: 0,
              size: "small",
              plain: "",
              type: "primary",
              class: "nut-dialog__footer-cancel",
              onClick: e.onCancel
            }, {
              default: te(() => [
                ge(_(e.cancelText || e.translate("cancel")), 1)
              ]),
              _: 1
            }, 8, ["onClick"])),
            e.noOkBtn ? S("", !0) : (u(), x(l, {
              key: 1,
              size: "small",
              type: "primary",
              class: "nut-dialog__footer-ok",
              onClick: e.onOk
            }, {
              default: te(() => [
                ge(_(e.okText || e.translate("confirm")), 1)
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
const Qt = /* @__PURE__ */ K(lm, [["render", im]]);
class rm {
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
class um {
  constructor(t) {
    z(this, "options", new rm());
    z(this, "instance");
    const n = Object.assign(this.options, t), { unmount: s } = Ut(n, {
      name: "dialog",
      components: [Le, qe, gt],
      wrapper: (o, a) => ({
        setup() {
          return n.onUpdate = (l) => {
            l === !1 && Te(() => {
              s();
            });
          }, n != null && n.onOpened && (n == null || n.onOpened()), n.teleport = `#${a.id}`, () => we(Qt, n);
        }
      })
    });
  }
}
const cm = function(e) {
  return new um(e);
};
cm.install = (e) => {
  e.use(Qt);
};
const { create: dm } = W("infinite-loading"), fm = "NutInfiniteLoading", pm = dm({
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
    const s = ke(fm), o = P(), a = Kn(o), l = ue({
      beforeScrollTop: 0,
      isInfiniting: !1,
      y: 0,
      x: 0,
      distance: 0
    }), i = (g) => g ? g.offsetTop + i(g.offsetParent) : 0, r = () => {
      let g = 0, b = 0, w = "down";
      if (a.value == window) {
        const c = Ln();
        o.value && (g = i(o.value) + o.value.offsetHeight - c - window.innerHeight), b = c;
      } else {
        const { scrollHeight: c, clientHeight: $, scrollTop: h } = a.value;
        g = c - $ - h, b = h;
      }
      return l.beforeScrollTop > b ? w = "up" : w = "down", l.beforeScrollTop = b, t("scrollChange", b), g <= e.threshold && w == "down";
    }, p = () => {
      Ve(() => {
        if (!r() || !e.hasMore || l.isInfiniting)
          return !1;
        l.isInfiniting = !0, t("update:modelValue", !0), Te(() => t("loadMore"));
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
    const y = P(!1);
    return mt(() => {
      y.value && (y.value = !1, f());
    }), ht(() => {
      y.value = !0, v();
    }), Q(
      () => e.modelValue,
      (g) => {
        g || (l.isInfiniting = !1);
      }
    ), ce(G({
      scroller: o
    }, me(l)), {
      translate: s,
      slots: n
    });
  }
}), mm = {
  ref: "scroller",
  class: "nut-infinite-loading"
}, hm = { class: "nut-infinite__container" }, gm = { class: "nut-infinite__bottom" }, ym = {
  key: 0,
  class: "nut-infinite__bottom-box"
}, vm = { class: "nut-infinite__bottom-box__text" }, $m = { class: "nut-infinite__bottom-tips" };
function bm(e, t, n, s, o, a) {
  const l = j("Loading");
  return u(), d("view", mm, [
    m("view", hm, [
      D(e.$slots, "default")
    ]),
    m("view", gm, [
      e.isInfiniting ? (u(), d("view", ym, [
        D(e.$slots, "loading", {}, () => [
          D(e.$slots, "loading-icon", {}, () => [
            le(l, { class: "nut-icon-loading nut-infinite__bottom-box__img" })
          ]),
          m("view", vm, _(e.loadTxt || e.translate("loading")), 1)
        ])
      ])) : e.hasMore ? S("", !0) : D(e.$slots, "finished", { key: 1 }, () => [
        m("view", $m, _(e.loadMoreTxt || e.translate("loadMoreTxt")), 1)
      ])
    ])
  ], 512);
}
const km = /* @__PURE__ */ K(pm, [["render", bm]]), { create: wm } = W("pull-refresh"), Cm = "NutPullRefresh", Sm = wm({
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
    const s = ke(Cm), o = Ge(), a = P(), l = Kn(a), i = ue({
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
    }), v = (h) => {
      const k = +(e.pullDistance || e.headHeight);
      let I = h;
      return h > k && (h < k * 2 ? I = (h + k) / 2 : I = k + h / 4), Math.round(I);
    }, y = (h, k, I) => {
      const T = +(e.pullDistance || e.headHeight);
      i.distance = h, k ? i.status = "loading" : I ? i.status = "complete" : h === 0 ? i.status = "normal" : h < T ? i.status = "pulling" : i.status = "loosing", t("change", { status: i.status, distance: h });
    }, g = () => i.status !== "loading" && i.status !== "complete", b = () => l.value == window ? Ln() == 0 : l.value && l.value.scrollTop == 0, w = (h) => {
      g() && (b() ? (o.start(h), i.isPullRefresh = !0) : (i.distance = 0, i.isPullRefresh = !1));
    }, c = (h) => {
      if (g()) {
        o.move(h);
        const { deltaY: k } = o;
        o.isVertical() && k.value > 0 && i.isPullRefresh && (h.preventDefault(), y(v(k.value)));
      }
    }, $ = () => {
      i.isPullRefresh && g() && o.deltaY.value && (i.status === "loosing" ? (y(+e.headHeight, !0), t("update:modelValue", !0), Te(() => t("refresh"))) : y(0)), setTimeout(() => {
        o.reset();
      }, 0);
    };
    return Q(
      () => e.modelValue,
      (h) => {
        h ? y(+e.headHeight, !0) : (e.completeDuration === 0 && y(0), y(+e.headHeight, !1, !0), setTimeout(() => {
          y(0);
        }, e.completeDuration));
      }
    ), ce(G({
      scroller: a
    }, me(i)), {
      touchStart: w,
      touchMove: c,
      touchEnd: $,
      getStyle: p,
      translate: s,
      slots: n,
      getHeightStyle: f,
      getPullStatus: r
    });
  }
}), Tm = { class: "nut-pull-refresh-container-topbox-text" };
function Nm(e, t, n, s, o, a) {
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
        })) : S("", !0),
        m("div", Tm, _(e.getPullStatus), 1),
        e.status == "pulling" ? D(e.$slots, "pulling", { key: 1 }) : S("", !0),
        e.status == "loosing" ? D(e.$slots, "loosing", { key: 2 }) : S("", !0),
        e.status == "loading" ? D(e.$slots, "loading", { key: 3 }) : S("", !0),
        e.status == "complete" ? D(e.$slots, "complete", { key: 4 }) : S("", !0)
      ], 4),
      D(e.$slots, "default")
    ], 4)
  ], 544);
}
const Dm = /* @__PURE__ */ K(Sm, [["render", Nm]]), { create: Im } = W("notify"), _m = Im({
  components: {
    NutPopup: Le
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
function Bm(e, t, n, s, o, a) {
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
        class: B(["nut-notify", `nut-notify--${e.type}`, e.className]),
        style: L({ color: e.color, background: e.background }),
        onClick: t[0] || (t[0] = (...i) => e.clickCover && e.clickCover(...i))
      }, [
        e.$slots.default ? D(e.$slots, "default", { key: 0 }) : (u(), d(ee, { key: 1 }, [
          ge(_(e.msg), 1)
        ], 64))
      ], 6)
    ]),
    _: 3
  }, 8, ["visible", "position", "teleport-disable"]);
}
const _t = /* @__PURE__ */ K(_m, [["render", Bm]]), Ot = {
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
let et = [], ct = [];
const vo = (e) => {
  if (e) {
    const t = document.getElementById(e);
    ct = ct.filter((n) => n.id !== e), et = et.filter((n) => n !== e), t && document.body.removeChild(t);
  } else
    et.forEach((t) => {
      const n = document.getElementById(t);
      n && document.body.removeChild(n);
    }), ct = [], et = [];
}, Mm = (e) => {
  const t = document.getElementById(e.id);
  if (t) {
    const n = ct.find((o) => o.id === e.id);
    n ? e = G(G(G({}, Ot), n), e) : e = G(G({}, Ot), e);
    const s = le(_t, e);
    return Yt(s, t), s.component.data;
  }
}, it = (e) => {
  e.unmount = vo;
  let t;
  if (e.id) {
    if (t = e.id, et.find((a) => a === e.id))
      return Mm(e);
  } else
    t = (/* @__PURE__ */ new Date()).getTime() + "";
  e = G(G({}, Ot), e), e.id = t, et.push(e.id), ct.push(e);
  const n = document.createElement("view");
  n.id = "notify-" + e.id;
  const o = le({
    setup() {
      return e.teleport = `#notify-${e.id}`, ve(() => {
        setTimeout(() => {
          e.onClose && e.onClose(), document.body.removeChild(n);
        }, e.duration);
      }), () => we(_t, e);
    }
  });
  document.body.appendChild(n), Yt(o, n);
}, rt = (e) => {
  if (!e) {
    console.warn("[NutUI Notify]: msg不能为空");
    return;
  }
}, c4 = {
  text(e, t = {}) {
    return rt(e), it(ce(G({}, t), { msg: e }));
  },
  primary(e, t = {}) {
    return rt(e), it(ce(G({}, t), { msg: e, type: "primary" }));
  },
  success(e, t = {}) {
    return rt(e), it(ce(G({}, t), { msg: e, type: "success" }));
  },
  danger(e, t = {}) {
    return rt(e), it(ce(G({}, t), { msg: e, type: "danger" }));
  },
  warn(e, t = {}) {
    return rt(e), it(ce(G({}, t), { msg: e, type: "warning" }));
  },
  hide() {
    vo();
  },
  install(e) {
    e.use(_t);
  }
}, { componentName: Lm, create: Em } = W("switch"), Pm = Em({
  components: { Loading1: Ks },
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
      const i = Lm;
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
}), Am = { class: "nut-switch-button" };
function zm(e, t, n, s, o, a) {
  const l = j("Loading1");
  return u(), d("view", {
    class: B(e.classes),
    style: L(e.style),
    onClick: t[0] || (t[0] = (...i) => e.onClick && e.onClick(...i))
  }, [
    m("view", Am, [
      e.loading ? D(e.$slots, "icon", { key: 0 }, () => [
        le(l, {
          name: "loading",
          color: e.activeColor
        }, null, 8, ["color"])
      ]) : S("", !0),
      e.activeText ? (u(), d(ee, { key: 1 }, [
        Se(m("view", { class: "nut-switch-label open" }, _(e.activeText), 513), [
          [De, e.isActive]
        ]),
        Se(m("view", { class: "nut-switch-label close" }, _(e.inactiveText), 513), [
          [De, !e.isActive]
        ])
      ], 64)) : S("", !0)
    ])
  ], 6);
}
const Vm = /* @__PURE__ */ K(Pm, [["render", zm]]), { create: Om } = W("toast"), Hm = Om({
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
      (y) => {
        y && l();
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
      renderIcon: lt
    };
  }
}), Rm = {
  key: 1,
  class: "nut-toast-title"
}, Fm = ["innerHTML"];
function Wm(e, t, n, s, o, a) {
  return u(), x(Ft, {
    name: "toast-fade",
    onAfterLeave: e.onAfterLeave
  }, {
    default: te(() => [
      Se(m("view", {
        class: B(e.toastBodyClass),
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
            class: B(e.toastIconWrapperClass)
          }, [
            (u(), x(Ae(e.renderIcon(e.icon)), { color: "#ffffff" }))
          ], 2)) : S("", !0),
          e.title ? (u(), d("div", Rm, _(e.title), 1)) : S("", !0),
          m("view", {
            class: "nut-toast-text",
            innerHTML: e.msg
          }, null, 8, Fm)
        ], 4)
      ], 6), [
        [De, e.state.mounted]
      ])
    ]),
    _: 1
  }, 8, ["onAfterLeave"]);
}
const Bt = /* @__PURE__ */ K(Hm, [["render", Wm]]), Ht = {
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
let tt = [], dt = [];
const $o = (e) => {
  if (e) {
    const t = document.getElementById(e);
    dt = dt.filter((n) => n.id !== e), tt = tt.filter((n) => n !== e), t && document.body.removeChild(t);
  } else
    tt.forEach((t) => {
      const n = document.getElementById(t);
      n && document.body.removeChild(n);
    }), dt = [], tt = [];
}, Ym = (e) => {
  const t = document.getElementById(e.id);
  if (t) {
    const n = dt.find((o) => o.id === e.id);
    n ? e = G(G(G({}, Ht), n), e) : e = G(G({}, Ht), e);
    const s = le(Bt, e);
    return Yt(s, t), bo;
  }
}, ut = (e) => {
  e.unmount = $o;
  let t;
  if (e.id) {
    if (t = e.id, tt.find((n) => n === e.id))
      return Ym(e);
  } else
    t = (/* @__PURE__ */ new Date()).getTime() + "";
  return e = G(G({}, Ht), e), e.id = t, tt.push(e.id), dt.push(e), Ut(e, {
    wrapper: Bt
  }), bo;
}, wt = (e) => {
  if (!e) {
    console.warn("[NutUI Toast]: msg不能为空");
    return;
  }
}, bo = {
  text(e, t = {}) {
    return wt(e), ut(ce(G({}, t), { type: "text", msg: e }));
  },
  success(e, t = {}) {
    return wt(e), ut(ce(G({ icon: hi }, t), { msg: e, type: "success" }));
  },
  fail(e, t = {}) {
    return wt(e), ut(ce(G({ icon: On }, t), { msg: e, type: "fail" }));
  },
  warn(e, t = {}) {
    return wt(e), ut(ce(G({ icon: Hn }, t), { msg: e, type: "warn" }));
  },
  loading(e, t = {}) {
    return ut(ce(G({
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
    e.use(Bt);
  }
}, { create: jm } = W("audio"), Km = jm({
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
    Service: ai,
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
    const a = (w) => {
      const c = s.value;
      e.autoplay && c && c.paused && c.play(), o.second = c.duration, o.duration = b(c.duration), t("canPlay", w);
    }, l = (w) => {
      o.currentTime = parseInt(w.target.currentTime);
    }, i = () => {
      o.currentTime > 0 && o.currentTime--, s.value.currentTime = o.currentTime, t("fastBack", o.currentTime);
    }, r = () => {
      const w = s.value;
      o.playing ? (w.pause(), o.handPlaying = !1) : (w.play(), o.handPlaying = !0), o.playing = !o.playing, t("play", o.playing);
    }, p = () => {
      o.currentTime++, s.value.currentTime = o.currentTime, t("forward", o.currentTime);
    }, f = (w) => {
      o.currentDuration = b(w), o.percent = w / o.second * 100;
    }, v = () => {
      o.playing = !1, t("ended");
    }, y = (w) => {
      const c = s.value;
      c.currentTime = o.second * w / 100, t("changeProgress", c.currentTime);
    }, g = () => {
      o.hanMuted = !o.hanMuted, t("mute", o.hanMuted);
    }, b = (w) => {
      if (!w)
        return "00:00:00";
      let c = parseInt(w), $ = Math.floor(c / 3600), h = Math.floor((c - $ * 3600) / 60), k = c - $ * 3600 - h * 60, I = "";
      return I += ("0" + $.toString()).slice(-2) + ":", I += ("0" + h.toString()).slice(-2) + ":", I += ("0" + k.toString()).slice(-2), I;
    };
    return Q(
      () => o.currentTime,
      (w) => {
        f(w);
      }
    ), Me("audioParent", {
      children: [],
      props: e,
      audioData: o,
      handleMute: g,
      forward: p,
      fastBack: i,
      changeStatus: r
    }), ce(G(G({}, me(e)), me(o)), {
      audioRef: s,
      fastBack: i,
      forward: p,
      changeStatus: r,
      progressChange: y,
      audioEnd: v,
      onTimeupdate: l,
      handleMute: g,
      onCanplay: a,
      slots: n
    });
  }
}), Um = { class: "nut-audio" }, Xm = {
  key: 0,
  class: "nut-audio__progress"
}, qm = { class: "nut-audio__time" }, Gm = { class: "nut-audio__bar" }, Zm = /* @__PURE__ */ m("div", { class: "nut-audio__button--custom" }, null, -1), Jm = { class: "nut-audio__time" }, Qm = {
  key: 1,
  class: "nut-audio__icon"
}, xm = ["controls", "src", "preload", "autoplay", "loop", "muted"];
function eh(e, t, n, s, o, a) {
  const l = j("nut-range"), i = j("Service");
  return u(), d("div", Um, [
    e.type == "progress" ? (u(), d("div", Xm, [
      m("div", qm, _(e.currentDuration), 1),
      m("div", Gm, [
        le(l, {
          modelValue: e.percent,
          "onUpdate:modelValue": t[0] || (t[0] = (r) => e.percent = r),
          "hidden-range": "",
          "inactive-color": "#cccccc",
          "active-color": "#fa2c19",
          onChange: e.progressChange
        }, {
          button: te(() => [
            Zm
          ]),
          _: 1
        }, 8, ["modelValue", "onChange"])
      ]),
      m("div", Jm, _(e.duration), 1)
    ])) : S("", !0),
    e.type == "icon" ? (u(), d("div", Qm, [
      m("div", {
        class: B(["nut-audio__icon--box", e.playing ? "nut-audio__icon--play" : "nut-audio__icon--stop"]),
        onClick: t[1] || (t[1] = (...r) => e.changeStatus && e.changeStatus(...r))
      }, [
        e.playing ? (u(), x(i, {
          key: 0,
          class: "nut-icon-am-rotate nut-icon-am-infinite"
        })) : (u(), x(i, { key: 1 }))
      ], 2)
    ])) : S("", !0),
    e.type == "none" ? (u(), d("div", {
      key: 2,
      onClick: t[2] || (t[2] = (...r) => e.changeStatus && e.changeStatus(...r))
    }, [
      D(e.$slots, "default")
    ])) : S("", !0),
    e.type != "none" ? D(e.$slots, "default", { key: 3 }) : S("", !0),
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
    }, null, 40, xm)
  ]);
}
const th = /* @__PURE__ */ K(Km, [["render", eh]]), { create: nh } = W("audio-operate"), oh = "NutAudioOperate", lh = nh({
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
    const t = ke(oh), n = Be("audioParent"), s = ue(n), o = P(Qe().default);
    return ce(G(G({}, me(e)), me(s)), { customSlot: o, translate: t });
  }
}), sh = { class: "nut-audio-operate" };
function ah(e, t, n, s, o, a) {
  const l = j("nut-button");
  return u(), d("div", sh, [
    e.type == "back" ? (u(), d("div", {
      key: 0,
      class: "nut-audio-operate-item",
      onClick: t[0] || (t[0] = (...i) => e.fastBack && e.fastBack(...i))
    }, [
      e.customSlot ? S("", !0) : (u(), x(l, {
        key: 0,
        type: "primary",
        size: "small"
      }, {
        default: te(() => [
          ge(_(e.translate("back")), 1)
        ]),
        _: 1
      })),
      D(e.$slots, "default")
    ])) : S("", !0),
    e.type == "play" ? (u(), d("div", {
      key: 1,
      class: "nut-audio-operate-item",
      onClick: t[1] || (t[1] = (...i) => e.changeStatus && e.changeStatus(...i))
    }, [
      e.customSlot ? S("", !0) : (u(), x(l, {
        key: 0,
        type: "primary",
        size: "small"
      }, {
        default: te(() => [
          ge(_(e.audioData.playing ? `${e.translate("pause")}` : `${e.translate("start")}`), 1)
        ]),
        _: 1
      })),
      D(e.$slots, "default")
    ])) : S("", !0),
    e.type == "forward" ? (u(), d("div", {
      key: 2,
      class: "nut-audio-operate-item",
      onClick: t[2] || (t[2] = (...i) => e.forward && e.forward(...i))
    }, [
      e.customSlot ? S("", !0) : (u(), x(l, {
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
    ])) : S("", !0),
    e.type == "mute" ? (u(), d("div", {
      key: 3,
      class: "nut-audio-operate-item",
      onClick: t[3] || (t[3] = (...i) => e.handleMute && e.handleMute(...i))
    }, [
      e.customSlot ? S("", !0) : (u(), x(l, {
        key: 0,
        type: e.audioData.hanMuted ? "default" : "primary",
        size: "small"
      }, {
        default: te(() => [
          ge(_(e.translate("mute")), 1)
        ]),
        _: 1
      }, 8, ["type"])),
      D(e.$slots, "default")
    ])) : S("", !0)
  ]);
}
const ih = /* @__PURE__ */ K(lh, [["render", ah]]), ko = Symbol("nut-avatar"), { create: rh } = W("avatar"), uh = rh({
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
      var v, y;
      return {
        ["nut-avatar"]: !0,
        [`nut-avatar-${t.value || ((v = l == null ? void 0 : l.props) == null ? void 0 : v.size) || "normal"}`]: !0,
        [`nut-avatar-${n.value || ((y = l == null ? void 0 : l.props) == null ? void 0 : y.shape) || "round"}`]: !0
      };
    }), p = N(() => {
      var f, v;
      return {
        width: t.value in a ? "" : `${t.value}px`,
        height: t.value in a ? "" : `${t.value}px`,
        backgroundColor: `${s.value}`,
        color: `${o.value}`,
        marginLeft: (f = l == null ? void 0 : l.props) != null && f.span ? `${(v = l == null ? void 0 : l.props) == null ? void 0 : v.span}px` : ""
      };
    });
    return {
      classes: r,
      styles: p,
      avatarRef: i
    };
  }
});
function ch(e, t, n, s, o, a) {
  return u(), d("view", {
    ref: "avatarRef",
    style: L(e.styles),
    class: B(e.classes)
  }, [
    D(e.$slots, "default")
  ], 6);
}
const xt = /* @__PURE__ */ K(uh, [["render", ch]]), { create: dh } = W("avatar-group"), fh = dh({
  components: {
    NutAvatar: xt
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
          const v = p[f];
          v.style.zIndex = `${99 - f}`;
        }
      for (let f = Number(e.maxCount); f < p.length; f++) {
        const v = p[f];
        v.className.includes("avater-fold") || (v.style.display = "none", r++);
      }
      n.value = r;
    }, l = (i) => {
      const r = { attributes: !1, childList: !0, subtree: !0 }, p = function(v) {
        let y = !1;
        for (let g of v)
          if (g.type === "childList") {
            y = !0;
            break;
          }
        y && a(i);
      }, f = new MutationObserver(p);
      return f.observe(i, r), f;
    };
    return ve(() => {
      e.maxCount && Te(() => {
        let i = Nn(t);
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
function ph(e, t, n, s, o, a) {
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
        ge(_(e.maxContent || e.foldCount), 1)
      ]),
      _: 1
    }, 8, ["color", "bg-color", "size", "shape", "style"])) : S("", !0)
  ], 4);
}
const mh = /* @__PURE__ */ K(fh, [["render", ph]]);
var St = /* @__PURE__ */ ((e) => (e[e.eq = 1] = "eq", e[e.lt = 2] = "lt", e[e.gt = 3] = "gt", e))(St || {});
function hh(e, t, n) {
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
const { create: gh } = W("list"), kn = document.documentElement.clientHeight || document.body.clientHeight || 667, yh = gh({
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
      default: kn
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
    }), l = N(() => Math.min(e.containerHeight, kn)), i = N(() => Math.ceil(l.value / e.height)), r = N(() => Math.min(a.originStartIndex + i.value + e.bufferSize, a.list.length)), p = N(() => a.list.slice(a.start, r.value)), f = () => {
      if (o.value)
        return `translate3d(0, ${a.start >= 1 ? a.cachePositions[a.start - 1].bottom : 0}px, 0)`;
    }, v = () => {
      a.cachePositions = [];
      for (let c = 0; c < a.list.length; ++c)
        a.cachePositions[c] = {
          index: c,
          height: e.height,
          top: c * e.height,
          bottom: (c + 1) * (e.height + e.margin),
          dValue: 0
        };
    }, y = () => {
      let c = o.value.childNodes;
      c = Array.from(c).filter((Y) => Y.nodeType === 1);
      const $ = c[0];
      c.forEach((Y, M) => {
        if (!Y)
          return;
        const A = Oe(Y), { height: C } = A, V = a.cachePositions[M + a.start].height - C;
        V && (a.cachePositions[M + a.start].bottom -= V, a.cachePositions[M + a.start].height = C, a.cachePositions[M + a.start].dValue = V);
      });
      let h = 0;
      $ && (h = a.start);
      const k = a.cachePositions.length;
      let I = a.cachePositions[h].dValue;
      a.cachePositions[h].dValue = 0;
      for (let Y = h + 1; Y < k; ++Y) {
        const M = a.cachePositions[Y];
        a.cachePositions[Y].top = a.cachePositions[Y - 1].bottom, a.cachePositions[Y].bottom = a.cachePositions[Y].bottom - I, M.dValue !== 0 && (I += M.dValue, M.dValue = 0);
      }
      const T = a.cachePositions[k - 1].bottom;
      a.phantomHeight = T;
    }, g = (c = 0) => {
      let $ = hh(
        a.cachePositions,
        c,
        (k, I) => {
          const T = k.bottom;
          return T === I ? St.eq : T < I ? St.lt : St.gt;
        }
      );
      return a.cachePositions[$].bottom < c && ($ += 1), $;
    }, b = () => {
      a.originStartIndex = 0, a.start = 0, a.scrollTop = 0, n.value.scrollTop = 0, v(), a.phantomHeight = e.height * a.list.length;
    }, w = () => {
      var k;
      const c = (k = n.value) == null ? void 0 : k.scrollTop, { originStartIndex: $ } = a, h = g(c);
      h !== $ && (a.originStartIndex = h, a.start = Math.max(a.originStartIndex - e.bufferSize, 0), r.value >= a.list.length - 1 && t("scrollBottom")), t(c > a.scrollTop ? "scrollUp" : "scrollDown", c), a.scrollTop = c;
    };
    return v(), Q(
      () => e.listData,
      (c) => {
        if (a.list = c.slice(), a.list.length === c.length)
          v(), y();
        else {
          b();
          return;
        }
      }
    ), Q(
      () => a.start,
      () => {
        o.value && a.list.length > 0 && y();
      }
    ), ce(G({}, me(a)), {
      list: n,
      phantom: s,
      actualContent: o,
      getTransform: f,
      visibleData: p,
      getContainerHeight: l,
      handleScrollEvent: w
    });
  }
});
function vh(e, t, n, s, o, a) {
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
const $h = /* @__PURE__ */ K(yh, [["render", vh]]), { create: bh } = W("circle-progress"), kh = bh({
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
    }), s = N(() => nt(e.color) ? `url(#${t})` : e.color), o = N(() => {
      let i = 283, r = i * Number(e.progress) / 100;
      return {
        stroke: nt(e.color) ? `url(#${t})` : e.color,
        strokeDasharray: `${r}px ${i}px`
      };
    }), a = N(() => ({
      stroke: e.pathColor
    })), l = N(() => {
      if (!nt(e.color))
        return;
      let i = e.color;
      const r = Object.keys(i).sort((f, v) => parseFloat(f) - parseFloat(v));
      let p = [];
      return r.map((f) => {
        let v = {
          key: "",
          value: ""
        };
        v.key = f, v.value = i[f], p.push(v);
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
}), wh = { viewBox: "0 0 100 100" }, Ch = ["id"], Sh = ["offset", "stop-color"], Th = ["d", "stroke-width"], Nh = ["d", "stroke", "stroke-linecap", "stroke-width"], Dh = { class: "nut-circle-progress__text" };
function Ih(e, t, n, s, o, a) {
  return u(), d("div", {
    class: "nut-circle-progress",
    style: L({ height: Number(e.radius) * 2 + "px", width: Number(e.radius) * 2 + "px" })
  }, [
    (u(), d("svg", wh, [
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
          }, null, 8, Sh))), 128))
        ], 8, Ch)
      ]),
      m("path", {
        class: "nut-circle-progress__path",
        style: L(e.pathStyle),
        d: e.path,
        fill: "none",
        "stroke-width": e.strokeWidth
      }, " > ", 12, Th),
      m("path", {
        class: "nut-circle-progress__hover",
        style: L(e.hoverStyle),
        d: e.path,
        fill: "none",
        stroke: e.hoverColor,
        "stroke-linecap": e.strokeLinecap,
        "stroke-width": e.strokeWidth
      }, null, 12, Nh)
    ])),
    m("div", Dh, [
      D(e.$slots, "default", {}, () => [
        m("div", null, _(e.progress) + "%", 1)
      ])
    ])
  ], 4);
}
const _h = /* @__PURE__ */ K(kh, [["render", Ih]]), { create: Bh } = W("noticebar"), Mh = Bh({
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
    Notice: ka,
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
        const M = s.value.getBoundingClientRect().width, A = o.value.getBoundingClientRect().width;
        a.isCanScroll = e.scrollable == null ? A > M : e.scrollable, a.isCanScroll ? (a.wrapWidth = M, a.offsetWidth = A, a.duration = A / e.speed, a.animationClass = "play") : a.animationClass = "";
      }, 0);
    }, y = (M) => {
      t("click", M);
    }, g = (M) => {
      e.closeMode && (a.showNoticebar = !e.closeMode), t("close", M);
    }, b = (M) => {
      a.firstRound = !1, t("acrossEnd", M), setTimeout(() => {
        a.duration = (a.offsetWidth + a.wrapWidth) / e.speed, a.animationClass = "play-infinite";
      }, 0);
    }, w = () => {
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
    }, k = (M) => {
      t("click", M);
    }, I = () => {
      e.closeMode && (a.showNoticebar = !e.closeMode), t("close", a.scrollList[0]);
    };
    ve(() => {
      e.direction == "vertical" ? (n.default ? (T(), Y()) : a.scrollList = [].concat(e.list), setTimeout(() => {
        e.complexAm ? $() : w();
      }, e.standTime)) : v();
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
    return mt(() => {
      a.keepAlive && (a.keepAlive = !1);
    }), ht(() => {
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
      handleClick: y,
      onClickIcon: g,
      onAnimationEnd: b,
      go: k,
      handleClickIcon: I,
      slots: n,
      pxCheck: _e,
      wrapContentClass: i
    });
  }
}), Lh = { class: "nut-noticebar" }, Eh = { class: "nut-noticebar__page-lefticon" }, Ph = {
  ref: "wrap",
  class: "nut-noticebar__page-wrap"
}, Ah = { class: "showNotica" }, zh = { class: "nut-noticebar-custom-item" }, Vh = ["onClick"];
function Oh(e, t, n, s, o, a) {
  const l = j("Notice"), i = j("CircleClose"), r = j("ScrollItem");
  return u(), d("view", Lh, [
    e.direction == "across" ? Se((u(), d("view", {
      key: 0,
      class: B(["nut-noticebar__page", {
        "nut-noticebar__page--withicon": e.closeMode,
        "nut-noticebar__page--close": e.closeMode,
        "nut-noticebar__page--wrapable": e.wrapable
      }]),
      style: L(e.barStyle),
      onClick: t[3] || (t[3] = (...p) => e.handleClick && e.handleClick(...p))
    }, [
      m("view", Eh, [
        D(e.$slots, "left-icon", {}, () => [
          e.leftIcon ? (u(), x(l, {
            key: 0,
            size: "16px"
          })) : S("", !0)
        ])
      ]),
      m("view", Ph, [
        m("view", {
          ref: "content",
          class: B(e.wrapContentClass),
          style: L(e.contentStyle),
          onAnimationend: t[0] || (t[0] = (...p) => e.onAnimationEnd && e.onAnimationEnd(...p)),
          onWebkitAnimationEnd: t[1] || (t[1] = (...p) => e.onAnimationEnd && e.onAnimationEnd(...p))
        }, [
          D(e.$slots, "default", {}, () => [
            ge(_(e.text), 1)
          ])
        ], 38)
      ], 512),
      e.closeMode || e.$slots["right-icon"] ? (u(), d("view", {
        key: 0,
        class: "nut-noticebar__page-righticon",
        onClick: t[2] || (t[2] = Ne((...p) => e.onClickIcon && e.onClickIcon(...p), ["stop"]))
      }, [
        e.$slots["right-icon"] ? D(e.$slots, "right-icon", { key: 0 }) : (u(), x(i, { key: 1 }))
      ])) : S("", !0)
    ], 6)), [
      [De, e.showNoticebar]
    ]) : S("", !0),
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
          m("div", Ah, [
            (u(!0), d(ee, null, re(e.scrollList, (p, f) => (u(), x(r, {
              key: f,
              style: L({ height: e.height + "px", "line-height": e.height + "px" }),
              item: p
            }, null, 8, ["style", "item"]))), 128))
          ])
        ], 4),
        m("view", zh, [
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
          onClick: (v) => e.go(p)
        }, _(p), 13, Vh))), 128))
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
          }, null, 8, ["color"])) : S("", !0)
        ])
      ])
    ], 4)) : S("", !0)
  ]);
}
const Hh = /* @__PURE__ */ K(Mh, [["render", Oh]]), { create: Rh } = W("empty"), Fh = "NutEmpty", Wh = {
  empty: "https://static-ftcms.jd.com/p/files/61a9e3183985005b3958672b.png",
  error: "https://ftcms.jd.com/p/files/61a9e33ee7dcdbcc0ce62736.png",
  network: "https://static-ftcms.jd.com/p/files/61a9e31de7dcdbcc0ce62734.png"
}, Yh = Rh({
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
    const t = ke(Fh), n = N(() => e.imageSize ? {
      width: _e(e.imageSize),
      height: _e(e.imageSize)
    } : {});
    return { src: N(() => e.image.startsWith("https://") || e.image.startsWith("http://") || e.image.startsWith("//") ? e.image : Wh[e.image]), style: n, translate: t };
  }
}), jh = { class: "nut-empty" }, Kh = ["src"], Uh = { class: "nut-empty__description" };
function Xh(e, t, n, s, o, a) {
  return u(), d("view", jh, [
    m("view", {
      class: "nut-empty__box",
      style: L(e.style)
    }, [
      D(e.$slots, "image", {}, () => [
        e.src ? (u(), d("img", {
          key: 0,
          class: "nut-empty__box--img",
          src: e.src
        }, null, 8, Kh)) : S("", !0)
      ])
    ], 4),
    D(e.$slots, "description", {}, () => [
      m("view", Uh, _(e.description || e.translate("noData")), 1)
    ]),
    D(e.$slots, "default")
  ]);
}
const qh = /* @__PURE__ */ K(Yh, [["render", Xh]]);
function wn(e, t) {
  let n = null, s = Date.now();
  return function() {
    let o = Date.now(), a = t - (o - s);
    n && clearTimeout(n), a <= 0 ? (e.apply(null, arguments), s = Date.now()) : n = setTimeout(e, a);
  };
}
const { create: Gh } = W("video"), Zh = "NutVideo", Jh = Gh({
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
    const s = ke(Zh), o = ue({
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
      }, 200), e.options.touchPlay && (o.showTouchMask = !0), e.options.playsinline && (o.videoElm.setAttribute("playsinline", e.options.playsinline), o.videoElm.setAttribute("webkit-playsinline", e.options.playsinline), o.videoElm.setAttribute("x5-video-player-type", "h5-page"), o.videoElm.setAttribute("x5-video-player-fullscreen", !1)), w(), o.showToolbox ? r() : (o.videoElm.addEventListener("play", () => {
        o.state.playing = !0, t("play", o.videoElm);
      }), o.videoElm.addEventListener("pause", () => {
        o.state.playing = !1, t("pause", o.videoElm);
      }), o.videoElm.addEventListener("ended", g), o.videoElm.addEventListener("timeupdate", wn(y, 1e3)));
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
              v();
            }), o.videoElm.addEventListener("timeupdate", wn(y, 1e3)), o.videoElm.addEventListener("ended", g), t("play", o.videoElm);
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
    }, v = () => {
      o.videoSet.loaded && (o.videoSet.loaded = o.videoElm.buffered.end(0) / o.videoElm.duration * 100);
    }, y = () => {
      const V = o.videoElm.currentTime / o.videoElm.duration;
      o.videoSet.progress.current = Math.round(o.videoSet.progress.width * V), o.videoSet.totalTime = f(o.videoElm.duration), o.videoSet.displayTime = f(o.videoElm.currentTime), t("time", o.videoSet.displayTime, o.videoSet.totalTime);
    }, g = () => {
      o.state.playing = !1, o.state.isEnd = !0, o.videoSet.displayTime = "00:00", o.videoSet.progress.current = 0, o.videoElm.currentTime = 0, t("playend", o.videoElm);
    }, b = () => {
      o.state.isError = !0;
    }, w = () => {
      o.state.vol = e.options.volume;
    }, c = () => {
      o.state.isMuted = !o.state.isMuted, o.videoElm.muted = o.state.isMuted;
    }, $ = () => {
    }, h = (V) => {
      let Z = V.targetTouches[0].pageX - o.progressBar.pos.left;
      Z <= 0 && (Z = 0), Z >= o.videoSet.progress.width && (Z = o.videoSet.progress.width), o.videoSet.progress.current = Z;
      let F = o.videoSet.progress.current / o.videoSet.progress.width;
      o.videoElm.duration && I(F, o.videoElm.duration);
    }, k = (V) => {
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
        g(), o.videoElm.pause();
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
      touchSlidEnd: k,
      retry: T,
      fullScreen: Y,
      translate: s
    });
  }
}), Qh = {
  ref: "videocon",
  class: "nut-video"
}, xh = ["muted", "autoplay", "loop", "poster", "controls", "preload"], eg = ["src", "type"], tg = { class: "nut-video-controller__now" }, ng = { class: "nut-video-controller__progress" }, og = {
  ref: "progressBar",
  class: "nut-video-controller__progress-value"
}, lg = /* @__PURE__ */ m("div", { class: "nut-video-controller__ball-move" }, null, -1), sg = [
  lg
], ag = {
  ref: "playedBar",
  class: "nut-video-controller__played"
}, ig = { class: "nut-video-controller__total" }, rg = { class: "nut-video-error" }, ug = { class: "nut-video-error-tip" };
function cg(e, t, n, s, o, a) {
  return u(), d("div", Qh, [
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
      }, null, 8, eg)
    ], 40, xh),
    e.showToolbox && !e.isDisabled ? (u(), d("div", {
      key: 0,
      ref: "touchMask",
      class: "nut-video-mask",
      onClick: t[1] || (t[1] = (...l) => e.play && e.play(...l))
    }, null, 512)) : S("", !0),
    e.showToolbox && !e.isDisabled ? Se((u(), d("div", {
      key: 1,
      ref: "palyBtn",
      class: "nut-video-play-btn",
      onClick: t[2] || (t[2] = (...l) => e.play && e.play(...l))
    }, null, 512)), [
      [De, !e.state.playing]
    ]) : S("", !0),
    Se(m("div", {
      class: B(["nut-video-controller", { "nut-video-controller--show": !e.state.playing, "nut-video-controller--hide": e.state.playing }])
    }, [
      m("div", {
        class: "nut-video-controller__playbtn",
        onClick: t[3] || (t[3] = (...l) => e.play && e.play(...l))
      }),
      m("div", tg, _(e.videoSet.displayTime), 1),
      m("div", ng, [
        m("div", og, [
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
          }, sg, 36),
          m("div", ag, null, 512)
        ], 512)
      ]),
      m("div", ig, _(e.videoSet.totalTime), 1),
      m("div", {
        class: B(["nut-video-controller__volume", { muted: e.state.isMuted }]),
        onClick: t[7] || (t[7] = (...l) => e.handleMuted && e.handleMuted(...l))
      }, null, 2),
      m("div", {
        class: "nut-video-controller__full",
        onClick: t[8] || (t[8] = (...l) => e.fullScreen && e.fullScreen(...l))
      })
    ], 2), [
      [De, e.showToolbox && !e.isDisabled]
    ]),
    Se(m("div", rg, [
      m("p", ug, _(e.translate("errorTip")), 1),
      m("p", {
        class: "nut-video-error-retry",
        onClick: t[9] || (t[9] = (...l) => e.retry && e.retry(...l))
      }, _(e.translate("clickRetry")), 1)
    ], 512), [
      [De, e.state.isError]
    ])
  ], 512);
}
const en = /* @__PURE__ */ K(Jh, [["render", cg]]), wo = Symbol("nut-steps"), { create: dg, componentName: fg } = W("steps"), pg = dg({
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
      const i = fg;
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
}), { create: mg, componentName: hg } = W("step"), gg = mg({
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
      const r = hg;
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
}), yg = { class: "nut-step-head" }, vg = /* @__PURE__ */ m("view", { class: "nut-step-line" }, null, -1), $g = { class: "nut-step-icon-inner" }, bg = {
  key: 1,
  class: "nut-step-inner"
}, kg = { class: "nut-step-main" }, wg = { class: "nut-step-title" }, Cg = { key: 0 }, Sg = {
  key: 0,
  class: "nut-step-content"
}, Tg = ["innerHTML"];
function Ng(e, t, n, s, o, a) {
  return u(), d("view", {
    class: B(e.classes),
    onClick: t[0] || (t[0] = (...l) => e.handleClickStep && e.handleClickStep(...l))
  }, [
    m("view", yg, [
      vg,
      m("view", {
        class: B(["nut-step-icon", [e.dot ? "" : "is-icon"]])
      }, [
        m("view", $g, [
          D(e.$slots, "icon", {}, () => [
            e.dot ? (u(), d(ee, { key: 0 }, [], 64)) : (u(), d("view", bg, _(e.index), 1))
          ])
        ])
      ], 2)
    ]),
    m("view", kg, [
      m("view", wg, [
        e.$slots.title ? S("", !0) : (u(), d("span", Cg, _(e.title), 1)),
        D(e.$slots, "title")
      ]),
      e.content || e.$slots.content ? (u(), d("view", Sg, [
        e.$slots.content ? S("", !0) : (u(), d("span", {
          key: 0,
          innerHTML: e.content
        }, null, 8, Tg)),
        D(e.$slots, "content")
      ])) : S("", !0)
    ])
  ], 2);
}
const Dg = /* @__PURE__ */ K(gg, [["render", Ng]]), Co = Symbol("nut-swiper"), { create: Ig, componentName: Cn } = W("swiper"), _g = Ig({
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
    }), f = N(() => i.value ? l.deltaY.value : l.deltaX.value), v = N(() => l.direction.value === e.direction), y = N(() => a.children.length), g = N(() => a[i.value ? "height" : "width"]), b = N(() => y.value * g.value), w = N(() => a.rect ? (i.value ? a.rect.height : a.rect.width) - g.value * y.value : 0), c = N(() => (a.active + y.value) % y.value), $ = () => {
      let H = 0;
      H = a.offset, a.style = {
        transitionDuration: `${a.moving ? 0 : e.duration}ms`,
        transform: `translate${i.value ? "Y" : "X"}(${H}px)`,
        [i.value ? "height" : "width"]: `${g.value * y.value}px`,
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
    }, k = (H, ne = 0) => {
      let U = H * g.value;
      e.loop || (U = Math.min(U, -w.value));
      let ae = ne - U;
      return e.loop || (ae = Pe(ae, w.value, 0)), ae;
    }, I = (H) => {
      const { active: ne } = a;
      return H ? e.loop ? Pe(ne + H, -1, y.value) : Pe(ne + H, 0, y.value - 1) : ne;
    }, T = ({ pace: H = 0, offset: ne = 0, isEmit: U = !1 }) => {
      if (y.value <= 1)
        return;
      const { active: ae } = a, de = I(H), fe = k(de, ne);
      if (e.loop) {
        if (a.children[0] && fe !== w.value) {
          const be = fe < w.value;
          a.children[0].setOffset(be ? b.value : 0);
        }
        if (a.children[y.value - 1] && fe !== 0) {
          const be = fe > 0;
          a.children[y.value - 1].setOffset(be ? -b.value : 0);
        }
      }
      a.active = de, a.offset = fe, U && ae !== a.active && t("change", c.value), $();
    }, Y = () => {
      a.moving = !0, a.active <= -1 && T({ pace: y.value }), a.active >= y.value && T({ pace: -y.value });
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
    }, C = () => {
      A(-1);
    }, E = () => {
      A(1);
    }, V = (H) => {
      Y(), l.reset(), Ve(() => {
        a.moving = !1;
        let ne;
        e.loop && y.value === H ? ne = a.active === 0 ? 0 : H : ne = H % y.value, T({
          pace: ne - a.active,
          isEmit: !0
        });
      });
    }, X = () => {
      +e.autoPlay <= 0 || y.value <= 1 || (M(), a.autoplayTimer = setTimeout(() => {
        E(), X();
      }, Number(e.autoPlay)));
    }, Z = (H = +e.initPage) => {
      M(), a.rect = o.value.getBoundingClientRect(), H = Math.min(y.value - 1, H), a.width = e.width ? +e.width : a.rect.width, a.height = e.height ? +e.height : a.rect.height, a.active = H, a.offset = k(a.active), a.moving = !0, $(), X();
    }, F = (H) => {
      e.isPreventDefault && H.preventDefault(), e.isStopPropagation && H.stopPropagation(), e.touchable && (l.start(H), a.touchTime = Date.now(), M(), Y());
    }, oe = (H) => {
      e.touchable && a.moving && (l.move(H), v.value && T({
        offset: f.value
      }));
    }, q = () => {
      if (!e.touchable || !a.moving)
        return;
      const H = f.value / (Date.now() - a.touchTime);
      if ((Math.abs(H) > 0.3 || Math.abs(f.value) > +(g.value / 2).toFixed(2)) && v.value) {
        let U = 0;
        const ae = i.value ? l.offsetY.value : l.offsetX.value;
        e.loop ? U = ae > 0 ? f.value > 0 ? -1 : 1 : 0 : U = -Math[f.value > 0 ? "ceil" : "floor"](f.value / g.value), T({
          pace: U,
          isEmit: !0
        });
      } else
        f.value && T({ pace: 0 });
      a.moving = !1, $(), X();
    };
    return Me(Co, {
      props: e,
      size: g,
      relation: h
    }), s({
      prev: C,
      next: E,
      to: V
    }), ht(() => {
      M();
    }), Wt(() => {
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
function Bg(e, t, n, s, o, a) {
  return u(), d("view", {
    ref: "container",
    class: "nut-swiper",
    onTouchstart: t[0] || (t[0] = (...l) => e.onTouchStart && e.onTouchStart(...l)),
    onTouchmove: t[1] || (t[1] = (...l) => e.onTouchMove && e.onTouchMove(...l)),
    onTouchend: t[2] || (t[2] = (...l) => e.onTouchEnd && e.onTouchEnd(...l)),
    onTouchcancel: t[3] || (t[3] = (...l) => e.onTouchEnd && e.onTouchEnd(...l))
  }, [
    m("view", {
      class: B(e.classesInner),
      style: L(e.state.style)
    }, [
      D(e.$slots, "default")
    ], 6),
    D(e.$slots, "page"),
    e.paginationVisible && !e.$slots.page ? (u(), d("view", {
      key: 0,
      class: B(e.classesPagination)
    }, [
      (u(!0), d(ee, null, re(e.state.children.length, (l, i) => (u(), d("i", {
        key: i,
        style: L({
          backgroundColor: e.activePagination === i ? e.paginationColor : "#ddd"
        }),
        class: B({ active: e.activePagination === i })
      }, null, 6))), 128))
    ], 2)) : S("", !0)
  ], 544);
}
const tn = /* @__PURE__ */ K(_g, [["render", Bg]]);
function Mg(e) {
  const t = Fe();
  t && Object.assign(t.proxy, e);
}
const { create: Lg } = W("swiper-item"), Eg = Lg({
  setup() {
    const e = Be(Co);
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
    }), Mg({ setOffset: s }), {
      style: n
    };
  }
});
function Pg(e, t, n, s, o, a) {
  return u(), d("view", {
    class: "nut-swiper-item",
    style: L(e.style)
  }, [
    D(e.$slots, "default")
  ], 4);
}
const nn = /* @__PURE__ */ K(Eg, [["render", Pg]]), { componentName: Sn, create: Ag } = W("price"), zg = Ag({
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
      [Sn]: !0,
      [`${Sn}--strike`]: e.strikeThrough
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
}), Vg = ["innerHTML"], Og = ["innerHTML"];
function Hg(e, t, n, s, o, a) {
  return u(), d("view", {
    class: B(e.classes)
  }, [
    e.needSymbol && e.position === "before" ? (u(), d("view", {
      key: 0,
      class: B(["nut-price--symbol", `nut-price--symbol-${e.size}`]),
      innerHTML: e.showSymbol
    }, null, 10, Vg)) : S("", !0),
    m("view", {
      class: B(`nut-price--${e.size}`)
    }, _(e.formatThousands(e.price)), 3),
    e.decimalDigits != 0 ? (u(), d("view", {
      key: 1,
      class: B(`nut-price--decimal-${e.size}`)
    }, ".", 2)) : S("", !0),
    m("view", {
      class: B(`nut-price--decimal-${e.size}`)
    }, _(e.formatDecimal(e.price)), 3),
    e.needSymbol && e.position === "after" ? (u(), d("view", {
      key: 2,
      class: B(["nut-price--symbol", `nut-price--symbol-${e.size}`]),
      innerHTML: e.showSymbol
    }, null, 10, Og)) : S("", !0)
  ], 2);
}
const on = /* @__PURE__ */ K(zg, [["render", Hg]]), So = {
  show: { type: Boolean, default: !1 },
  initNo: { type: Number, default: 0 },
  showIndex: { type: Boolean, default: !0 },
  minZoom: { type: Number, default: 1 / 3 },
  maxZoom: { type: Number, default: 3 }
}, { create: Rg } = W("image-preview-item"), Fg = Rg({
  props: ce(G({}, So), {
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
    NutVideo: en,
    NutSwiperItem: nn
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
      const { rootWidth: C, rootHeight: E } = e, V = E / C;
      return n.imageRatio > V;
    }), a = N(() => {
      const C = e.image;
      if (C && C.src) {
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
        const { rootWidth: C, rootHeight: E } = e, V = o.value ? E / n.imageRatio : C;
        return Math.max(0, (n.scale * V - C) / 2);
      }
      return 0;
    }), i = N(() => {
      if (n.imageRatio) {
        const { rootWidth: C, rootHeight: E } = e, V = o.value ? E : C * n.imageRatio;
        return Math.max(0, (n.scale * V - E) / 2);
      }
      return 0;
    }), r = (C) => {
      const { naturalWidth: E, naturalHeight: V } = C.target;
      n.imageRatio = V / E;
    }, p = () => {
      f(1), n.moveX = 0, n.moveY = 0;
    }, f = (C) => {
      C = Pe(C, +e.minZoom, +e.maxZoom + 1), C !== n.scale && (n.scale = C, t("scale", {
        scale: C,
        index: e.initNo
      }));
    }, v = () => {
      const C = n.scale > 1 ? 1 : 2;
      f(C), n.moveX = 0, n.moveY = 0;
    }, y = (C) => Math.sqrt(st(C[0].clientX - C[1].clientX, 2) + st(C[0].clientY - C[1].clientY, 2));
    let g, b, w, c, $, h, k;
    const I = (C) => {
      const { touches: E } = C, { offsetX: V } = s;
      s.start(C), k = E.length, g = n.moveX, b = n.moveY, h = Date.now(), n.moving = k === 1 && n.scale !== 1, n.zooming = k === 2 && !V.value, n.zooming && (w = n.scale, c = y(C.touches));
    }, T = (C) => {
      const { touches: E } = C;
      if (s.move(C), (n.moving || n.zooming) && ot(C, !0), n.moving) {
        const { deltaX: V, deltaY: X } = s, Z = V.value + g, F = X.value + b;
        n.moveX = Pe(Z, -l.value, l.value), n.moveY = Pe(F, -i.value, i.value);
      }
      if (n.zooming && E.length === 2) {
        const V = y(E), X = w * V / c;
        f(X);
      }
    }, Y = () => {
      if (k == 1 && e.video && e.video.source || k > 1)
        return;
      const { offsetX: C, offsetY: E } = s, V = Date.now() - h, X = 250, Z = 5;
      C.value < Z && E.value < Z && V < X && ($ ? (clearTimeout($), $ = null, v()) : $ = setTimeout(() => {
        e.contentClose && t("close"), $ = null;
      }, X));
    }, M = (C) => {
      let E = !1;
      (n.moving || n.zooming) && (E = !0, n.moving && g === n.moveX && b === n.moveY && (E = !1), C.touches.length || (n.zooming && (n.moveX = Pe(n.moveX, -l.value, l.value), n.moveY = Pe(n.moveY, -i.value, i.value), n.zooming = !1), n.moving = !1, g = 0, b = 0, w = 1, n.scale < 1 && p(), n.scale > e.maxZoom && (n.scale = +e.maxZoom))), ot(C, E), Y(), s.reset();
    }, A = () => {
      t("close");
    };
    return Q(() => e.initNo, p), Q(
      () => e.show,
      (C) => {
        C || p();
      }
    ), ce(G({}, me(n)), {
      onTouchStart: I,
      onTouchMove: T,
      onTouchEnd: M,
      getDistance: y,
      imageStyle: a,
      imageLoad: r,
      closeSwiper: A
    });
  }
}), Wg = ["src"];
function Yg(e, t, n, s, o, a) {
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
        }, null, 40, Wg)) : S("", !0),
        e.video && e.video.source ? (u(), x(l, {
          key: 1,
          source: e.video.source,
          options: e.video.options
        }, null, 8, ["source", "options"])) : S("", !0)
      ], 36)
    ]),
    _: 1
  }, 8, ["onClick"]);
}
const jg = /* @__PURE__ */ K(Fg, [["render", Yg]]), { create: Kg } = W("image-preview"), Ug = Kg({
  props: ce(G({}, So), {
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
    CircleClose: Xt,
    NutPopup: Le,
    NutSwiper: tn
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
    }), a = N(() => Kt(e.videos) ? [].concat(e.videos).concat(e.images) : e.images), l = (f) => {
      f !== s.active && (s.active = f, t("change", s.active));
    }, i = () => {
      jt(e.beforeClose, {
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
}), Xg = {
  ref: "swipeRef",
  class: "nut-image-preview"
}, qg = {
  key: 0,
  class: "nut-image-preview-index"
};
function Gg(e, t, n, s, o, a) {
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
      m("view", Xg, [
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
            (u(!0), d(ee, null, re(e.mergeImages, (f, v) => (u(), x(l, {
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
        }, 8, ["auto-play", "loop", "init-page", "pagination-visible", "pagination-color", "onChange"])) : S("", !0)
      ], 512),
      e.showIndex ? (u(), d("view", qg, _(e.active + 1) + " / " + _(e.mergeImages.length), 1)) : S("", !0),
      e.closeable ? (u(), d("view", {
        key: 1,
        class: B(e.iconClasses),
        onClick: t[0] || (t[0] = (...f) => e.onClose && e.onClose(...f))
      }, [
        D(e.$slots, "close-icon", {}, () => [
          le(r, { color: "#ffffff" })
        ])
      ], 2)) : S("", !0)
    ]),
    _: 3
  }, 8, ["visible", "teleport-disable", "teleport", "onClosed"]);
}
const ln = /* @__PURE__ */ K(Ug, [["render", Gg]]);
class Zg {
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
class Jg {
  constructor(t) {
    z(this, "options", new Zg());
    const n = Object.assign(this.options, t), { unmount: s } = Ut(n, {
      name: "image-preview",
      components: [Le, en, tn, nn, gt],
      wrapper: () => ({
        setup() {
          return () => (n.onClose = () => {
            n.show = !1, Te(() => {
              s();
            });
          }, we(ln, n));
        }
      })
    });
  }
}
const Qg = (e) => new Jg(e);
Qg.install = (e) => {
  e.use(ln);
};
function xg(e) {
  const t = Fe();
  t && Object.assign(t.proxy, e);
}
const { create: e0 } = W("countup"), t0 = e0({
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
        v(), c(0);
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
      l && (i || r ? p != "machine" && c() : (w(), setTimeout(() => {
        a.valFlag = !0;
      }, 300)));
    }, v = () => {
      clearInterval(Number(a.timer)), a.timer = null;
    }, y = (A, C, E) => {
      const V = (A.toString().split(".")[1] || "").length, X = (C.toString().split(".")[1] || "").length, Z = Math.pow(10, Math.max(V, X));
      return E == "-" ? Number((A * Z - C * Z).toFixed(0)) / Z : Number((A * Z + C * Z).toFixed(0)) / Z;
    }, g = (A) => {
      let { num_total_len: C, pointNum: E, initDigit1: V, initDigit2: X, sortFlag: Z } = a, F = Z == "add" || Z == "equal" ? String(X)[A - (C - E)] : 10 - Number(String(X)[A - (C - E)]), oe = Z == "add" || Z == "equal" ? String(V)[A] : 10 - Number(String(V)[A]), q = A > C - E - 1 ? -F * 100 + "%" : A <= String(V).length - 1 ? -oe * 100 + "%" : 0;
      return q == "-1000%" && (q = 0), q;
    }, b = (A) => {
      let { num_total_len: C, pointNum: E, initDigit1: V, initDigit2: X } = a, Z = String(X)[A - (C - E)];
      return A > C - E - 1 ? Z || 0 : A <= String(V).length - 1 ? String(V)[A] : 0;
    }, w = () => {
      let { endNum: A, initNum: C, speed: E, toFixed: V } = e, X = setInterval(() => {
        if (C > A)
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
      let { initNum: C, endNum: E, toFixed: V, customBgImg: X } = e;
      X && (C = e.customChangeNum);
      let Z, F, oe, q;
      C != 0 ? (V != 0 && (C = Number(C.toFixed(V))), String(C).indexOf(".") > -1 ? (Z = String(C).split(".")[0].length, F = String(C).split(".")[1].length) : (Z = String(C).length, F = 0)) : (Z = 1, F = 0), E != 0 ? (V != 0 && (E = Number(E.toFixed(V))), String(E).indexOf(".") > -1 ? (oe = String(E).split(".")[0].length, q = String(E).split(".")[1].length) : (oe = String(E).length, q = 0)) : (oe = 1, q = 0);
      let H = Z >= oe ? Z : oe, ne = F >= q ? F : q;
      a.num_total_len = H + ne, a.pointNum = ne, C > E ? (a.sortFlag = "reduce", a.to0_10 = [0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], a.totalCount = y(C, E, "-"), a.numberVal = Number(String(C))) : C < E ? (a.sortFlag = "add", a.to0_10 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0], a.totalCount = y(E, C, "-"), a.numberVal = Number(String(E))) : a.sortFlag = "equal";
      var U = 1;
      for (let de = 0; de < a.pointNum; de++)
        U *= 10;
      var ae = a.numberVal * U;
      if (a.relNum = ae, V != 0 && (a.pointNum = String(a.numberVal).split(".")[1] ? String(a.numberVal).split(".")[1].length : 0, a.num_total_len = String(ae).length), String(C).indexOf(".") > -1) {
        let de = String(C).split(".");
        a.initDigit1 = Number(de[0]), a.initDigit2 = Number(de[1]);
      } else
        a.initDigit1 = C, a.initDigit2 = 0;
      i && !X ? Te(() => {
        if (a.sortFlag == "equal")
          return !1;
        let de = s.value[a.num_total_len - 1];
        $(de);
      }) : A !== 0 && I();
    }, $ = (A) => {
      v();
      var C = 1;
      a.pointNum != 0 && (C = 1 / Math.pow(10, a.pointNum)), a.timer = setInterval(() => {
        h(A), a.totalCount = y(a.totalCount, C, "-"), a.totalCount <= 0 && (v(), t("scrollEnd"), a.valFlag = !1);
      }, e.during);
    }, h = (A) => {
      let C = A.getAttribute("turn-number"), E;
      if (a.sortFlag == "add" ? E = parseInt(String(C)) + 1 : E = parseInt(String(C)) - 1 >= 0 ? parseInt(String(C)) - 1 : 9, A.setAttribute("turn-number", String(E)), (A.style.transition == "none 0s ease 0s" || E == 1 || !A.style.transition) && (A.style.transition = `all linear ${e.during}ms`), E == 10 || a.sortFlag == "reduce" && E == 0) {
        var V = null;
        A.style.top = `-${a.sortFlag == "add" ? E * 100 : (10 - E) * 100}%`, A.setAttribute("turn-number", "0"), V = setTimeout(() => {
          V && clearTimeout(V), A.style.transition = "none", A.style.top = "0", k(A, E);
        }, 0.975 * e.during);
      } else
        A.style.top = `-${a.sortFlag == "add" ? E * 100 : (10 - E) * 100}%`;
      A.style.top == "-100%" && a.sortFlag == "reduce" && h(A.previousSibling);
    }, k = (A, C) => {
      setTimeout(() => {
        C == 10 && A.previousSibling && h(A.previousSibling);
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
    xg({ machineLuck: () => {
      const A = e.machineTurnMore < 0 ? 0 : e.machineTurnMore;
      let C = e.numHeight * e.machinePrizeNum;
      a.prizeLevelTrun < 0 && T();
      for (let E = 0; E < e.machineNum; E++)
        setTimeout(() => {
          let V = C * (E + 1 + parseFloat(String(A)));
          a.prizeYPrev.length != 0 && (a.prizeY[E] = a.prizeYPrev[E]);
          let X = a.prizeYPrev[E] ? a.prizeYPrev[E] : 0, Z = V + X + (e.machinePrizeNum - a.prizeLevelTrun + 1) * e.numHeight + (C - X);
          a.prizeLevelTrun < 0 && (Z += e.numHeight * a.notPrize[E]), M(
            E,
            // parseFloat((this.machinePrizeNum-(this.prizeLevelTrun-1))*this.numHeight + turn + local),
            Z,
            X
          );
        }, 500 * E);
    } });
    const M = (A, C, E) => {
      let V = setInterval(() => {
        if (E <= C)
          E += 10, a.prizeY[A] = parseFloat(String(E));
        else if (clearInterval(V), V = null, a.finshMachine += 1, a.prizeY[A] = C, a.finshMachine == e.machineNum) {
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
      v(), a.timer = null;
    }), ce(G(G({}, me(a)), me(ue(e))), {
      runNumberImg: n,
      setRef: o,
      topNumber: g,
      turnNumber: b
    });
  }
}), n0 = { class: "nut-countup" }, o0 = ["turn-number"];
function l0(e, t, n, s, o, a) {
  return u(), d("view", n0, [
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
        }, ".", 4)) : S("", !0)
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
          }, _(r), 5))), 128))
        ], 12, o0))), 128)),
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
        }, ".", 4)) : S("", !0)
      ], 4)) : (u(), d(ee, { key: 1 }, [
        ge(_(e.current), 1)
      ], 64))
    ], 64))
  ]);
}
const s0 = /* @__PURE__ */ K(t0, [["render", l0]]), a0 = (e) => {
  if (!e)
    return Date.now();
  let t = e;
  return t = +t > 0 ? +t : t.toString().replace(/-/g, "/"), new Date(t).getTime();
}, { create: i0 } = W("countdown"), r0 = "NutCountdown", u0 = i0({
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
    const s = ke(r0), o = ue({
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
      o.handleEndTime = e.endTime, o.diffTime = Date.now() - a0(e.startTime), o.counting || (o.counting = !0), i();
    }, i = () => {
      window !== void 0 && (o.timer = requestAnimationFrame(() => {
        if (o.counting) {
          const g = Date.now() - o.diffTime, b = Math.max(o.handleEndTime - g, 0);
          o.restTime = b, b || (o.counting = !1, v(), t("end"), t("onEnd")), b > 0 && i();
        }
      }));
    }, r = (g, b) => {
      const w = g;
      let c = {
        d: 0,
        h: 0,
        m: 0,
        s: 0,
        ms: 0
      };
      const $ = 1e3, h = 60 * $, k = 60 * h, I = 24 * k;
      return w > 0 && (c.d = w >= $ ? Math.floor(w / I) : 0, c.h = Math.floor(w % I / k), c.m = Math.floor(w % k / h), c.s = Math.floor(w % h / $), c.ms = Math.floor(w % $)), b == "custom" ? c : p(G({}, c));
    }, p = (g) => {
      let { d: b, h: w, m: c, s: $, ms: h } = g, k = e.format;
      if (k.includes("DD") ? k = k.replace("DD", Xe(b)) : w += Number(b) * 24, k.includes("HH") ? k = k.replace("HH", Xe(w)) : c += Number(w) * 60, k.includes("mm") ? k = k.replace("mm", Xe(c)) : $ += Number(c) * 60, k.includes("ss") ? k = k.replace("ss", Xe($)) : h += Number($) * 1e3, k.includes("S")) {
        const I = Xe(h, 3).toString();
        k.includes("SSS") ? k = k.replace("SSS", I) : k.includes("SS") ? k = k.replace("SS", I.slice(0, 2)) : k.includes("S") && (k = k.replace("S", I.slice(0, 1)));
      }
      return k;
    }, f = () => {
      !o.counting && !e.autoStart && (o.counting = !0, o.handleEndTime = Date.now() + Number(o.restTime), i(), t("restart", o.restTime), t("onRestart", o.restTime));
    }, v = () => {
      cancelAnimationFrame(o.timer), o.counting = !1, t("paused", o.restTime), t("onPaused", o.restTime);
    }, y = () => {
      e.autoStart || (v(), o.restTime = e.time);
    };
    return Dn(() => {
      e.autoStart ? l() : o.restTime = e.time;
    }), Q(
      () => o.restTime,
      (g) => {
        let b = r(g, "custom");
        t("update:modelValue", b), t("input", b);
      }
    ), Q(
      () => e.paused,
      (g, b) => {
        b ? (o.counting || (o.counting = !0, o.handleEndTime = Date.now() + Number(o.restTime), i()), t("restart", o.restTime), t("onRestart", o.restTime)) : o.counting && v();
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
      pause: v,
      renderTime: a,
      translate: s,
      reset: y
    });
  }
}), c0 = { class: "nut-countdown" }, d0 = ["innerHTML"];
function f0(e, t, n, s, o, a) {
  return u(), d("view", c0, [
    e.slots.default ? D(e.$slots, "default", { key: 0 }) : (u(), d("view", {
      key: 1,
      class: "nut-countdown__content",
      innerHTML: e.renderTime
    }, null, 8, d0))
  ]);
}
const p0 = /* @__PURE__ */ K(u0, [["render", f0]]), { create: m0 } = W("tag"), h0 = m0({
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
    Close: It
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
function g0(e, t, n, s, o, a) {
  const l = j("Close");
  return u(), d("view", {
    class: B(e.classes),
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
    }, null, 8, ["onClick"])) : S("", !0)
  ], 6);
}
const To = /* @__PURE__ */ K(h0, [["render", g0]]), { create: y0 } = W("popover"), v0 = y0({
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
    const n = P(), s = P(), o = P(e.visible);
    let a = P(), l = P();
    const i = N(() => {
      const h = "nut-popover-arrow", k = e.location, I = k.split("-")[0];
      return `${h} ${h}-${I} ${h}--${k}`;
    }), r = N(() => {
      const h = {}, { bgColor: k, arrowOffset: I, location: T } = e, Y = T.split("-")[0], M = T.split("-")[1], A = 16;
      return k && (h[`border${p(Y)}Color`] = k), e.arrowOffset != 0 && (["bottom", "top"].includes(Y) && (M || (h.left = `calc(50% + ${I}px)`), M == "start" && (h.left = `${A + I}px`), M == "end" && (h.right = `${A - I}px`)), ["left", "right"].includes(Y) && (M || (h.top = `calc(50% - ${I}px)`), M == "start" && (h.top = `${A - I}px`), M == "end" && (h.bottom = `${A + I}px`))), h;
    }), p = (h) => (h = h.toLowerCase(), h = h.replace(/\b\w+\b/g, (k) => k.substring(0, 1).toUpperCase() + k.substring(1)), h), f = N(() => {
      let h = {};
      if (!a.value || !l.value)
        return {};
      const k = l.value.width, I = l.value.height, { width: T, height: Y, left: M, top: A } = a.value, { location: C, offset: E } = e, V = C.split("-")[0], X = C.split("-")[1];
      let Z = 0, F = 0;
      if (Kt(E) && E.length == 2 && (Z += Number(E[1]), F += Number(E[0])), T) {
        if (["bottom", "top"].includes(V)) {
          const oe = V == "bottom" ? Y + Z : -(I + Z);
          h.top = `${A + oe}px`, X || (h.left = `${-(k - T) / 2 + M + F}px`), X == "start" && (h.left = `${M + F}px`), X == "end" && (h.left = `${a.value.right + F}px`);
        }
        if (["left", "right"].includes(V)) {
          const oe = V == "left" ? -(k + Z) : T + Z;
          h.left = `${M + oe}px`, X || (h.top = `${A - I / 2 + Y / 2 - 4 + F}px`), X == "start" && (h.top = `${A + F}px`), X == "end" && (h.top = `${A + Y + F}px`);
        }
      }
      return h;
    }), v = N(() => {
      const h = {};
      return e.bgColor && (h.background = e.bgColor), h;
    }), y = () => {
      let h = Oe(n.value);
      e.targetId && (h = Oe(document.querySelector(`#${e.targetId}`))), a.value = h, setTimeout(() => {
        var k, I;
        l.value = {
          height: (k = s.value) == null ? void 0 : k.clientHeight,
          width: (I = s.value) == null ? void 0 : I.clientWidth
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
        o.value = h, h ? (window.addEventListener("touchstart", $, !0), y()) : window.removeEventListener("touchstart", $, !0);
      }
    );
    const g = (h) => {
      t("update", h), t("update:visible", h);
    }, b = () => {
      g(!e.visible), t("open");
    }, w = () => {
      t("update:visible", !1), t("close");
    }, c = (h, k) => {
      !h.disabled && t("choose", h, k), e.closeOnClickAction && w();
    }, $ = (h) => {
      const k = n.value, I = s.value;
      let T = k && !k.contains(h.target);
      if (e.targetId) {
        const Y = document.querySelector(`#${e.targetId}`);
        T = Y && !Y.contains(h.target);
      }
      T && I && !I.contains(h.target) && e.closeOnClickOutside && w();
    };
    return {
      showPopup: o,
      openPopover: b,
      popoverArrow: i,
      closePopover: w,
      chooseItem: c,
      popoverRef: n,
      popoverContentRef: s,
      getRootPosition: f,
      customStyle: v,
      popoverArrowStyle: r,
      renderIcon: lt
    };
  }
}), $0 = {
  ref: "popoverContentRef",
  class: "nut-popover-content-group"
}, b0 = ["onClick"], k0 = { class: "nut-popover-menu-item-name" };
function w0(e, t, n, s, o, a) {
  const l = j("nut-popup");
  return u(), d(ee, null, [
    e.targetId ? S("", !0) : (u(), d("div", {
      key: 0,
      ref: "popoverRef",
      class: "nut-popover-wrapper",
      onClick: t[0] || (t[0] = (...i) => e.openPopover && e.openPopover(...i))
    }, [
      D(e.$slots, "reference")
    ], 512)),
    m("view", {
      class: B(["nut-popover", `nut-popover--${e.theme}`, `${e.customClass}`]),
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
          m("view", $0, [
            e.showArrow ? (u(), d("view", {
              key: 0,
              class: B(e.popoverArrow),
              style: L(e.popoverArrowStyle)
            }, null, 6)) : S("", !0),
            D(e.$slots, "content"),
            (u(!0), d(ee, null, re(e.list, (i, r) => (u(), d("view", {
              key: r,
              class: B([i.className, i.disabled && "nut-popover-menu-disabled", "nut-popover-menu-item"]),
              onClick: Ne((p) => e.chooseItem(i, r), ["stop"])
            }, [
              i.icon ? (u(), x(Ae(e.renderIcon(i.icon)), {
                key: 0,
                class: "nut-popover-item-img"
              })) : S("", !0),
              m("view", k0, _(i.name), 1)
            ], 10, b0))), 128))
          ], 512)
        ]),
        _: 3
      }, 8, ["visible", "pop-class", "style", "overlay", "duration", "overlay-style", "overlay-class", "close-on-click-overlay"])
    ], 6)
  ], 64);
}
const No = /* @__PURE__ */ K(v0, [["render", w0]]), { create: C0 } = W("skeleton"), S0 = C0({
  components: {
    NutAvatar: xt
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
}), T0 = { key: 0 }, N0 = {
  key: 1,
  class: "nut-skeleton"
}, D0 = {
  key: 0,
  class: "nut-skeleton-animation"
}, I0 = { class: "nut-skeleton-content" };
function _0(e, t, n, s, o, a) {
  const l = j("nut-avatar");
  return e.loading ? (u(), d("view", N0, [
    e.animated ? (u(), d("view", D0)) : S("", !0),
    m("view", I0, [
      e.avatar ? (u(), x(l, {
        key: 0,
        class: B(e.avatarClass),
        shape: e.avatarShape,
        style: L(e.getStyle())
      }, null, 8, ["class", "shape", "style"])) : S("", !0),
      m("view", {
        class: "nut-skeleton-content__line",
        style: L({ width: e.width })
      }, [
        e.title ? (u(), d("view", {
          key: 0,
          class: B(e.getBlockClass("nut-skeleton-blockTitle")),
          style: L({ height: e.height })
        }, null, 6)) : S("", !0),
        (u(!0), d(ee, null, re(Number(e.row), (i) => (u(), d("view", {
          key: i,
          class: B(e.getBlockClass("nut-skeleton-blockLine")),
          style: L({ height: e.height })
        }, null, 6))), 128))
      ], 4)
    ])
  ])) : (u(), d("view", T0, [
    D(e.$slots, "default")
  ]));
}
const B0 = /* @__PURE__ */ K(S0, [["render", _0]]), Do = Symbol("nut-collapse"), { create: M0 } = W("collapse"), L0 = M0({
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
}), E0 = {
  ref: "nutCollapseRef",
  class: "nut-collapse"
};
function P0(e, t, n, s, o, a) {
  return u(), d("view", E0, [
    D(e.$slots, "default")
  ], 512);
}
const A0 = /* @__PURE__ */ K(L0, [["render", P0]]), { create: z0 } = W("collapse-item"), V0 = z0({
  props: {
    collapseRef: {
      type: Object
    },
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
      const v = "nut-collapse-item";
      return {
        [v]: !0,
        [v + "__border"]: e.border
      };
    }), a = N(() => s ? s.isExpanded(e.name) : !1), l = P(a.value ? "auto" : "0px"), i = () => {
      s && s.updateVal(e.name);
    }, r = () => {
      a.value && (l.value = "auto");
    }, p = () => {
      l.value = "0px", requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          var y;
          const v = (y = n.value) == null ? void 0 : y.offsetHeight;
          l.value = v ? `${v}px` : "auto";
        });
      });
    }, f = () => {
      var y;
      const v = (y = n.value) == null ? void 0 : y.offsetHeight;
      l.value = v ? `${v}px` : "auto", requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          l.value = "0px";
        });
      });
    };
    return Q(a, (v) => {
      v ? p() : f();
    }), {
      classes: o,
      renderIcon: lt,
      wrapperRef: t,
      contentRef: n,
      open: p,
      toggle: i,
      wrapperHeight: l,
      expanded: a,
      onTransitionEnd: r
    };
  }
}), O0 = { class: "nut-collapse-item__title-main" }, H0 = { class: "nut-collapse-item__title-main-value" }, R0 = ["innerHTML"], F0 = {
  key: 2,
  class: "nut-collapse-item__title-label"
}, W0 = {
  key: 0,
  class: "nut-collapse-item__title-sub"
}, Y0 = ["innerHTML"], j0 = {
  key: 0,
  class: "nut-collapse__item-extraWrapper"
}, K0 = { class: "nut-collapse__item-extraWrapper__extraRender" }, U0 = {
  ref: "contentRef",
  class: "nut-collapse__item-wrapper__content"
};
function X0(e, t, n, s, o, a) {
  return u(), d("view", {
    class: B(e.classes)
  }, [
    m("view", {
      class: B(["nut-collapse-item__title", { "nut-collapse-item__title--disabled": e.disabled }]),
      onClick: t[0] || (t[0] = (...l) => e.toggle && e.toggle(...l))
    }, [
      m("view", O0, [
        m("view", H0, [
          e.$slots.title ? D(e.$slots, "title", { key: 0 }) : (u(), d("view", {
            key: 1,
            class: "nut-collapse-item__title-mtitle",
            innerHTML: e.title
          }, null, 8, R0)),
          e.label ? (u(), d("view", F0, _(e.label), 1)) : S("", !0)
        ])
      ]),
      e.$slots.value ? (u(), d("view", W0, [
        D(e.$slots, "value")
      ])) : (u(), d("view", {
        key: 1,
        class: "nut-collapse-item__title-sub",
        innerHTML: e.value
      }, null, 8, Y0)),
      m("view", {
        class: B(["nut-collapse-item__title-icon", { "nut-collapse-item__title-icon--expanded": e.expanded }]),
        style: L({ transform: "rotate(" + (e.expanded ? e.rotate : 0) + "deg)" })
      }, [
        e.$slots.icon ? D(e.$slots, "icon", { key: 0 }) : (u(), x(Ae(e.renderIcon(e.icon)), { key: 1 }))
      ], 6)
    ], 2),
    e.$slots.extra ? (u(), d("view", j0, [
      m("div", K0, [
        D(e.$slots, "extra")
      ])
    ])) : S("", !0),
    m("view", {
      ref: "wrapperRef",
      class: "nut-collapse__item-wrapper",
      style: L({
        willChange: "height",
        height: e.wrapperHeight
      }),
      onTransitionend: t[1] || (t[1] = (...l) => e.onTransitionEnd && e.onTransitionEnd(...l))
    }, [
      m("view", U0, [
        D(e.$slots, "default")
      ], 512)
    ], 36)
  ], 2);
}
const q0 = /* @__PURE__ */ K(V0, [["render", X0]]), G0 = Dt({
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
}), { create: Z0 } = W("table"), J0 = "NutTable", Q0 = Z0({
  components: {
    RenderColumn: G0,
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
    const n = ke(J0), s = ue({
      curData: e.data
    }), o = (v) => ({
      "nut-table__main__head__tr--border": e.bordered,
      [`nut-table__main__head__tr--align${v.align ? v.align : ""}`]: !0
    }), a = (v) => v.stylehead ? v.stylehead : "", l = (v) => v.stylecolumn ? v.stylecolumn : "", i = (v) => e.columns.filter((y) => y.key === v)[0], r = (v) => {
      const y = e.columns.filter((g) => g.key === v);
      return y[0].stylecolumn ? y[0].stylecolumn : "";
    }, p = (v) => {
      v.sorter && (t("sorter", v), s.curData = typeof v.sorter == "function" ? s.curData.sort(v.sorter) : v.sorter === "default" ? s.curData.sort() : s.curData);
    }, f = () => e.columns.map((v) => [v.key, v.render]);
    return Q(
      () => e.data,
      (v) => {
        s.curData = v.slice();
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
}), x0 = { class: "nut-table" }, ey = { class: "nut-table__main__head" }, ty = { class: "nut-table__main__head__tr" }, ny = ["onClick"], oy = { class: "nut-table__main__body" }, ly = { key: 1 }, sy = {
  key: 0,
  class: "nut-table__nodata"
}, ay = {
  key: 0,
  class: "nut-table__nodata__text"
}, iy = {
  key: 1,
  class: "nut-table__summary"
}, ry = ["innerHTML"];
function uy(e, t, n, s, o, a) {
  const l = j("DownArrow"), i = j("RenderColumn");
  return u(), d("view", x0, [
    m("view", {
      class: B(["nut-table__main", { "nut-table__main--striped": e.striped }])
    }, [
      m("view", ey, [
        m("view", ty, [
          (u(!0), d(ee, null, re(e.columns, (r) => (u(), d("span", {
            key: r.key,
            class: B(["nut-table__main__head__tr__th", e.cellClasses(r)]),
            style: L(r.stylehead),
            onClick: (p) => e.handleSorterClick(r)
          }, [
            ge(_(r.title) + " ", 1),
            D(e.$slots, "icon"),
            !e.$slots.icon && r.sorter ? (u(), x(l, {
              key: 0,
              width: "12px",
              height: "12px"
            })) : S("", !0)
          ], 14, ny))), 128))
        ])
      ]),
      m("view", oy, [
        (u(!0), d(ee, null, re(e.curData, (r) => (u(), d("view", {
          key: r,
          class: "nut-table__main__body__tr"
        }, [
          (u(!0), d(ee, null, re(e.sortDataItem(), ([p, f]) => (u(), d("span", {
            key: p,
            class: B(["nut-table__main__body__tr__td", e.cellClasses(e.getColumnItem(p))]),
            style: L(e.getColumnItemStyle(p))
          }, [
            typeof r[p] == "function" || typeof f == "function" ? (u(), x(i, {
              key: 0,
              slots: [f, r[p]],
              record: r
            }, null, 8, ["slots", "record"])) : (u(), d("view", ly, _(r[p]), 1))
          ], 6))), 128))
        ]))), 128))
      ])
    ], 2),
    e.curData.length ? S("", !0) : (u(), d("view", sy, [
      m("div", {
        class: B(["nut-table__nodata", { "nut-table__nodata--border": e.bordered }])
      }, [
        D(e.$slots, "nodata"),
        e.$slots.nodata ? S("", !0) : (u(), d("div", ay, _(e.translate("noData")), 1))
      ], 2)
    ])),
    e.summary ? (u(), d("view", iy, [
      m("span", {
        class: "nut-table__summary__text",
        innerHTML: e.summary().value
      }, null, 8, ry)
    ])) : S("", !0)
  ]);
}
const cy = /* @__PURE__ */ K(Q0, [["render", uy]]), { create: dy } = W("animate"), fy = dy({
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
}), py = { class: "nut-animate" };
function my(e, t, n, s, o, a) {
  return u(), d("view", py, [
    m("view", {
      class: B(e.classes),
      style: L({
        animationDuration: e.duration ? `${e.duration}ms` : void 0
      }),
      onClick: t[0] || (t[0] = (...l) => e.handleClick && e.handleClick(...l))
    }, [
      D(e.$slots, "default")
    ], 6)
  ]);
}
const hy = /* @__PURE__ */ K(fy, [["render", my]]), { create: gy } = W("ellipsis"), yy = gy({
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
      (b, w) => {
        b != w && i();
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
      const c = v(b.lineHeight === "normal" ? e.lineHeight : b.lineHeight);
      o = Math.floor(
        c * (Number(e.rows) + 0.5) + v(b.paddingTop) + v(b.paddingBottom)
      ), s.innerText = e.content, document.body.appendChild(s), r();
    }, r = () => {
      if (s.offsetHeight <= o)
        l.exceeded = !1, document.body.removeChild(s);
      else {
        l.exceeded = !0;
        const b = e.content.length, w = Math.floor((0 + b) / 2), c = e.direction === "middle" ? f([0, w], [w, b]) : p(0, b);
        a.value = c, document.body.removeChild(s);
      }
    }, p = (b, w) => {
      const c = l.expanded ? e.collapseText : e.expandText, $ = e.content.length;
      if (w - b <= 1)
        return e.direction === "end" ? {
          leading: e.content.slice(0, b) + e.symbol
        } : {
          tailing: e.symbol + e.content.slice(w, $)
        };
      const h = Math.round((b + w) / 2);
      return e.direction === "end" ? s.innerText = e.content.slice(0, h) + e.symbol + c : s.innerText = c + e.symbol + e.content.slice(h, $), s.offsetHeight <= o ? e.direction === "end" ? p(h, w) : p(b, h) : e.direction === "end" ? p(b, h) : p(h, w);
    }, f = (b, w) => {
      const c = l.expanded ? e.collapseText : e.expandText, $ = e.content.length;
      if (b[1] - b[0] <= 1 && w[1] - w[0] <= 1)
        return {
          leading: e.content.slice(0, b[0]) + e.symbol,
          tailing: e.symbol + e.content.slice(w[1], $)
        };
      const h = Math.floor((b[0] + b[1]) / 2), k = Math.ceil((w[0] + w[1]) / 2);
      return s.innerText = e.content.slice(0, h) + e.symbol + c + e.symbol + e.content.slice(k, $), s.offsetHeight <= o ? f([h, b[1]], [w[0], k]) : f([b[0], h], [k, w[1]]);
    }, v = (b) => {
      if (!b)
        return 0;
      const w = b.match(/^\d*(\.\d*)?/);
      return w ? Number(w[0]) : 0;
    }, y = (b) => {
      b == 1 ? (l.expanded = !0, t("change", "expand")) : (l.expanded = !1, t("change", "collapse"));
    }, g = () => {
      t("click");
    };
    return ce(G({}, me(l)), { root: n, ellipsis: a, clickHandle: y, handleClick: g });
  }
}), vy = { key: 0 }, $y = { key: 1 }, by = { key: 2 };
function ky(e, t, n, s, o, a) {
  return u(), d("view", {
    ref: "root",
    class: "nut-ellipsis",
    onClick: t[2] || (t[2] = (...l) => e.handleClick && e.handleClick(...l))
  }, [
    e.exceeded ? S("", !0) : (u(), d("view", vy, _(e.content), 1)),
    e.exceeded && !e.expanded ? (u(), d("view", $y, [
      ge(_(e.ellipsis && e.ellipsis.leading), 1),
      e.expandText ? (u(), d("span", {
        key: 0,
        class: "nut-ellipsis__text",
        onClick: t[0] || (t[0] = Ne((l) => e.clickHandle(1), ["stop"]))
      }, _(e.expandText), 1)) : S("", !0),
      ge(_(e.ellipsis && e.ellipsis.tailing), 1)
    ])) : S("", !0),
    e.exceeded && e.expanded ? (u(), d("view", by, [
      ge(_(e.content) + " ", 1),
      e.expandText ? (u(), d("span", {
        key: 0,
        class: "nut-ellipsis__text",
        onClick: t[1] || (t[1] = Ne((l) => e.clickHandle(2), ["stop"]))
      }, _(e.collapseText), 1)) : S("", !0)
    ])) : S("", !0)
  ], 512);
}
const wy = /* @__PURE__ */ K(yy, [["render", ky]]), { componentName: Cy, create: Sy } = W("watermark"), Ty = Sy({
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
      content: v,
      fontStyle: y,
      fontWeight: g,
      fontColor: b,
      fontSize: w,
      fontFamily: c
    } = e, $ = () => {
      const k = document.createElement("canvas"), I = window.devicePixelRatio, T = k.getContext("2d"), Y = `${(s + a) * I}px`, M = `${(o + l) * I}px`, A = a * I, C = l * I;
      if (k.setAttribute("width", Y), k.setAttribute("height", M), T) {
        if (r) {
          T.translate(A / 2, C / 2), T.rotate(Math.PI / 180 * Number(i));
          const E = new Image();
          E.crossOrigin = "anonymous", E.referrerPolicy = "no-referrer", E.src = r, E.onload = () => {
            T.drawImage(
              E,
              -p * I / 2,
              -f * I / 2,
              p * I,
              f * I
            ), T.restore(), t.base64Url = k.toDataURL();
          };
        } else if (v) {
          T.textBaseline = "middle", T.textAlign = "center", T.translate(A / 2, C / 2), T.rotate(Math.PI / 180 * Number(i));
          const E = Number(w) * I;
          T.font = `${y} normal ${g} ${E}px/${C}px ${c}`, T.fillStyle = b, Array.isArray(v) ? v.map((V, X) => {
            T.fillText(V, 0, (X - 1) * E);
          }) : T.fillText(v, 0, 0), T.restore(), t.base64Url = k.toDataURL();
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
        v,
        y,
        g,
        b,
        w,
        c
      ],
      () => {
        $();
      }
    );
    const h = N(() => {
      const k = Cy;
      return {
        [k]: !0,
        [`${k}-full-page`]: e.fullPage
      };
    });
    return ce(G({}, me(t)), { classes: h });
  }
});
function Ny(e, t, n, s, o, a) {
  return u(), d("view", {
    class: B(e.classes),
    style: L({
      zIndex: e.zIndex,
      backgroundSize: `${e.gapX + e.width}px`,
      backgroundImage: `url('${e.base64Url}')`
    })
  }, null, 6);
}
const Dy = /* @__PURE__ */ K(Ty, [["render", Ny]]), { create: Iy } = W("trend-arrow"), _y = Iy({
  components: { TriangleUp: Pi, TriangleDown: _i },
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
}), By = { class: "nut-trend-arrow" };
function My(e, t, n, s, o, a) {
  const l = j("TriangleUp"), i = j("TriangleDown");
  return u(), d("view", By, [
    e.arrowLeft ? S("", !0) : (u(), d("span", {
      key: 0,
      class: "nut-trend-arrow-icon-before nut-trend-arrow-rate",
      style: L(e.calcStyle)
    }, _(e.calcRate), 5)),
    Number(e.rate) !== 0 && e.rateTrend ? D(e.$slots, "up-icon", { key: 1 }, () => [
      le(l, { color: e.riseColor }, null, 8, ["color"])
    ]) : S("", !0),
    Number(e.rate) !== 0 && !e.rateTrend ? D(e.$slots, "down-icon", { key: 2 }, () => [
      le(i, { color: e.dropColor }, null, 8, ["color"])
    ]) : S("", !0),
    e.arrowLeft ? (u(), d("span", {
      key: 3,
      class: "nut-trend-arrow-icon-after nut-trend-arrow-rate",
      style: L(e.calcStyle)
    }, _(e.calcRate), 5)) : S("", !0)
  ]);
}
const Ly = /* @__PURE__ */ K(_y, [["render", My]]), { create: Ey } = W("tour"), Py = Ey({
  components: {
    NutPopover: No,
    Close: It
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
      const { offset: f, maskWidth: v, maskHeight: y } = e, { width: g, height: b, left: w, top: c } = s.value, $ = [w + g / 2, c + b / 2], h = Number(v || g), k = Number(y || b);
      return {
        width: `${h + +f[1] * 2}px`,
        height: `${k + +f[0] * 2}px`,
        top: `${$[1] - k / 2 - +f[0]}px`,
        left: `${$[0] - h / 2 - +f[1]}px`
      };
    }), l = (f) => {
      f == "next" ? n.active = n.active + 1 : n.active = n.active - 1, n.showPopup = !1, Te(() => {
        n.showPopup = !0, i();
      }), t("change", n.active);
    }, i = () => {
      const f = document.querySelector(`#${e.steps[n.active].target}`), v = Oe(f);
      s.value = v;
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
function Yy(e, t, n, s, o, a) {
  const l = j("Close"), i = j("nut-popover");
  return u(), d("div", {
    class: B(e.classes)
  }, [
    Se(m("div", {
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
          class: B(["nut-tour-mask", [e.mask ? "" : "nut-tour-mask-none"]]),
          style: L(e.maskStyle)
        }, null, 6)) : S("", !0),
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
              e.type == "step" ? (u(), d("div", Ay, [
                e.showTitleBar ? (u(), d("div", zy, [
                  m("div", {
                    onClick: t[1] || (t[1] = (...f) => e.close && e.close(...f))
                  }, [
                    le(l, { class: "nut-tour-content-top-close" })
                  ])
                ])) : S("", !0),
                m("div", Vy, _(r.content), 1),
                m("div", Oy, [
                  m("div", Hy, _(e.active + 1) + "/" + _(e.steps.length), 1),
                  m("div", Ry, [
                    D(e.$slots, "prev-step", {}, () => [
                      e.active != 0 && e.showPrevStep ? (u(), d("div", {
                        key: 0,
                        class: "nut-tour-content-bottom-operate-btn",
                        onClick: t[2] || (t[2] = (f) => e.changeStep("prev"))
                      }, _(e.prevStepTxt), 1)) : S("", !0)
                    ]),
                    e.steps.length - 1 == e.active ? (u(), d("div", {
                      key: 0,
                      class: "nut-tour-content-bottom-operate-btn active",
                      onClick: t[3] || (t[3] = (...f) => e.close && e.close(...f))
                    }, _(e.completeTxt), 1)) : S("", !0),
                    D(e.$slots, "next-step", {}, () => [
                      e.steps.length - 1 != e.active ? (u(), d("div", {
                        key: 0,
                        class: "nut-tour-content-bottom-operate-btn active",
                        onClick: t[4] || (t[4] = (f) => e.changeStep("next"))
                      }, _(e.nextStepTxt), 1)) : S("", !0)
                    ])
                  ])
                ])
              ])) : S("", !0),
              e.type == "tile" ? (u(), d("div", Fy, [
                m("div", Wy, _(r.content), 1)
              ])) : S("", !0)
            ])
          ]),
          _: 2
        }, 1032, ["visible", "location", "bg-color", "theme", "offset", "arrow-offset"])
      ], 64)) : S("", !0)
    ]))), 128))
  ], 2);
}
const jy = /* @__PURE__ */ K(Py, [["render", Yy]]), { create: Ky } = W("address"), Uy = "NutAddress", Xy = Ky({
  components: {
    NutPopup: Le,
    NutElevator: xn,
    Location: Zs,
    Location2: ta,
    Check: Pn,
    Close: It,
    Left: qt
  },
  inheritAttrs: !1,
  props: ce(G({}, yt), {
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
    const n = ke(Uy), s = P(null), o = P(null), a = P(e.visible), l = P(e.type), i = P(0), r = P(0), p = P(["province", "city", "country", "town"]), f = P(null), v = P([0, 0, 0, 0]), y = ue([]), g = N(() => {
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
    let w = P([]), c = ue({});
    const $ = P("self"), h = P(20), k = () => {
      y[0] = e.province || [], y[1] = e.city || [], y[2] = e.country || [], y[3] = e.town || [];
      const q = e.modelValue, H = q.length;
      if (H > 0) {
        if (i.value = H - 1, g.value.length == 0) {
          i.value = 0;
          return;
        }
        for (let ne = 0; ne < H; ne++) {
          let U = y[ne];
          w.value[ne] = U.filter((ae) => ae.id == q[ne])[0];
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
      w.value[H] = q, w.value.splice(H + 1, w.value.length - (H + 1)), ne.value = q, ((U = y[H + 1]) == null ? void 0 : U.length) > 0 ? (i.value = H + 1, T(), ne.next = p.value[i.value]) : (V(), t("update:modelValue")), t("change", ne);
    }, M = (q, H) => {
      r.value = i.value, I(q, H) && (i.value = H, T());
    }, A = () => {
      const q = f.value, H = r.value, ne = v.value[i.value];
      q != null && q.scrollTop && (v.value[H] = q == null ? void 0 : q.scrollTop), Te(() => {
        q == null || q.scrollTo({
          top: ne,
          behavior: "auto"
        });
      });
    }, C = (q) => {
      const H = e.existAddress;
      let ne = {};
      H.forEach((U) => {
        U && U.selectedAddress && (ne = U), U.selectedAddress = !1;
      }), q.selectedAddress = !0, c = q, t("selected", ne, q, H), V();
    }, E = () => {
      w.value = [], i.value = 0, T();
    }, V = (q = "self") => {
      $.value = q == "cross" ? "cross" : "self", a.value = !1;
    }, X = () => {
      $.value = "mask";
    }, Z = () => {
      const q = {
        addressIdStr: "",
        addressStr: "",
        province: w.value[0],
        city: w.value[1],
        country: w.value[2],
        town: w.value[3]
      }, H = {
        data: {},
        type: l.value
      };
      ["custom", "custom2"].includes(l.value) ? ([0, 1, 2, 3].forEach((ne) => {
        const U = w.value[ne];
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
        q && k();
      }
    ), ce(G({
      showPopup: a,
      privateType: l,
      tabIndex: i,
      tabName: p,
      selectedRegion: w,
      switchModule: F,
      closeWay: $,
      close: Z,
      getTabName: I,
      nextAreaList: Y,
      regionLine: s,
      tabRegion: o,
      lineDistance: h,
      changeRegionTab: M,
      selectedExist: C,
      clickOverlay: X,
      handClose: V,
      handleElevatorItem: oe,
      initCustomSelected: k
    }, me(e)), {
      translate: n,
      regionList: g,
      transformData: b,
      scrollDom: f
    });
  }
}), qy = { class: "nut-address" }, Gy = { class: "nut-address__header" }, Zy = { class: "nut-address__header__title" }, Jy = {
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
}, av = { class: "nut-address__exist-group" }, iv = { class: "nut-address__exist-group-list" }, rv = ["onClick"], uv = { class: "nut-address__exist-item-info" }, cv = {
  key: 0,
  class: "nut-address__exist-item-info-name"
}, dv = {
  key: 1,
  class: "nut-address__exist-item-info-phone"
}, fv = { class: "nut-address__exist-item-info-bottom" }, pv = { class: "nut-address__exist-choose-btn" };
function mv(e, t, n, s, o, a) {
  const l = j("Left"), i = j("Close"), r = j("Check"), p = j("nut-elevator"), f = j("Location2"), v = j("nut-popup");
  return u(), x(v, {
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
      m("view", qy, [
        m("view", Gy, [
          m("view", {
            class: "nut-address__header-back",
            onClick: t[0] || (t[0] = (...y) => e.switchModule && e.switchModule(...y))
          }, [
            D(e.$slots, "back-icon", {}, () => [
              Se(le(l, { size: "14px" }, null, 512), [
                [De, e.type == "exist" && e.privateType == "custom"]
              ])
            ])
          ]),
          m("view", Zy, _(e.privateType == "custom" ? e.customAddressTitle || e.translate("selectRegion") : e.existAddressTitle || e.translate("deliveryTo")), 1),
          m("view", {
            class: "nut-address__header-close",
            onClick: t[1] || (t[1] = (y) => e.handClose("cross"))
          }, [
            D(e.$slots, "close-icon", {}, () => [
              le(i, {
                color: "#cccccc",
                size: "14px"
              })
            ])
          ])
        ]),
        ["custom", "custom2"].includes(e.privateType) ? (u(), d("view", Jy, [
          m("view", Qy, [
            (u(!0), d(ee, null, re(e.selectedRegion, (y, g) => (u(), d("view", {
              key: g,
              class: B(["nut-address__region-item", g == e.tabIndex ? "active" : ""]),
              onClick: (b) => e.changeRegionTab(y, g)
            }, [
              m("view", null, _(e.getTabName(y, g)), 1)
            ], 10, xy))), 128)),
            e.tabIndex == e.selectedRegion.length ? (u(), d("view", ev, [
              m("view", null, _(e.getTabName(null, e.selectedRegion.length)), 1)
            ])) : S("", !0),
            m("view", {
              ref: "regionLine",
              class: "nut-address__region-line",
              style: L({ left: e.lineDistance + "px" })
            }, null, 4)
          ], 512),
          e.privateType == "custom" ? (u(), d("view", tv, [
            m("ul", nv, [
              (u(!0), d(ee, null, re(e.regionList, (y, g) => {
                var b, w;
                return u(), d("li", {
                  key: g,
                  class: B(["nut-address__detail-item", ((b = e.selectedRegion[e.tabIndex]) == null ? void 0 : b.id) == y.id ? "active" : ""]),
                  onClick: (c) => e.nextAreaList(y)
                }, [
                  m("div", null, [
                    ((w = e.selectedRegion[e.tabIndex]) == null ? void 0 : w.id) == y.id ? D(e.$slots, "icon", { key: 0 }, () => [
                      le(r, {
                        class: "nut-address-select-icon",
                        size: "13px"
                      })
                    ]) : S("", !0),
                    ge(_(y.name), 1)
                  ])
                ], 10, ov);
              }), 128))
            ], 512)
          ])) : (u(), d("view", lv, [
            le(p, {
              height: e.height,
              "index-list": e.transformData(e.regionList),
              onClickItem: e.handleElevatorItem
            }, null, 8, ["height", "index-list", "onClickItem"])
          ]))
        ])) : (u(), d("view", sv, [
          m("div", av, [
            m("ul", iv, [
              (u(!0), d(ee, null, re(e.existAddress, (y, g) => (u(), d("li", {
                key: g,
                class: B(["nut-address__exist-group-item", y.selectedAddress ? "active" : ""]),
                onClick: (b) => e.selectedExist(y)
              }, [
                y.selectedAddress ? S("", !0) : D(e.$slots, "unselected-icon", { key: 0 }, () => [
                  le(f, {
                    class: "nut-address-select-icon",
                    size: "13px"
                  })
                ]),
                y.selectedAddress ? D(e.$slots, "icon", { key: 1 }, () => [
                  le(r, {
                    class: "nut-address-select-icon",
                    size: "13px"
                  })
                ]) : S("", !0),
                m("div", uv, [
                  y.name ? (u(), d("div", cv, _(y.name), 1)) : S("", !0),
                  y.phone ? (u(), d("div", dv, _(y.phone), 1)) : S("", !0),
                  m("div", fv, [
                    m("view", null, _(y.provinceName + y.cityName + y.countyName + y.townName + y.addressDetail), 1)
                  ])
                ])
              ], 10, rv))), 128))
            ])
          ]),
          e.isShowCustomAddress ? (u(), d("div", {
            key: 0,
            class: "nut-address__exist-choose",
            onClick: t[2] || (t[2] = (...y) => e.switchModule && e.switchModule(...y))
          }, [
            m("div", pv, _(e.customAndExistTitle || e.translate("chooseAnotherAddress")), 1)
          ])) : S("", !0)
        ])),
        D(e.$slots, "bottom")
      ])
    ]),
    _: 3
  }, 8, ["visible", "lock-scroll", "round", "teleport-disable", "teleport", "z-index", "onClose", "onClickOverlay"]);
}
const hv = /* @__PURE__ */ K(Xy, [["render", mv]]), { create: gv } = W("barrage"), yv = gv({
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
    const l = P(e.danmu), i = P(e.rows), r = P(e.top), p = P(0), f = e.speeds, v = P(0);
    ve(() => {
      y(), n && document.addEventListener("visibilitychange", function() {
        document.visibilityState === "hidden" ? (b(), p.value = 0, g("hidden")) : document.visibilityState === "visible" && y();
      });
    }), je(() => {
      l.value = [], b();
    });
    const y = () => {
      v.value = s.value.offsetWidth, n && g("init"), setTimeout(() => {
        var h;
        (h = s.value) == null || h.style.setProperty("--move-distance", `-${v.value}px`), c();
      }, 300);
    }, g = (h) => {
      var Y;
      const k = document.getElementsByClassName("slotBody" + t);
      let I = ((Y = k == null ? void 0 : k[0]) == null ? void 0 : Y.children) || [];
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
    const w = (h) => {
      const k = p.value % l.value.length;
      !e.loop && p.value === l.value.length ? l.value.splice(l.value.length, 0, h) : l.value.splice(k, 0, h);
    }, c = () => {
      b(), a = setTimeout(() => {
        $();
      }, e.frequency);
    }, $ = () => {
      var I;
      const h = e.loop ? p.value % l.value.length : p.value;
      let k = document.createElement("view");
      n && typeof l.value[h] == "object" ? (k = l.value[h], (I = k == null ? void 0 : k.classList) == null || I.add("nut-barrage__item")) : (k.innerHTML = l.value[h], k.classList.add("nut-barrage__item"), o.value.appendChild(k)), Te(() => {
        var Y;
        const T = k.offsetHeight;
        if ((Y = k == null ? void 0 : k.classList) == null || Y.add("move"), k.style.animationDuration = `${f}ms`, k.style.top = h % i.value * (T + r.value) + 20 + "px", k.style.opacity = "1", !n) {
          const M = k.offsetWidth;
          k.style.width = M + 20 + "px";
        }
        k.addEventListener("animationend", () => {
          n ? k.classList.remove("move") : o.value.removeChild(k);
        }), !(!e.loop && p.value >= l.value.length - 1) && (p.value++, p.value >= l.value.length && (p.value = 0), k.removeEventListener("animationend", () => {
        }), c());
      });
    };
    return { classTime: t, danmuList: l, dmBody: s, dmContainer: o, add: w };
  }
}), vv = {
  ref: "dmBody",
  class: "nut-barrage"
};
function $v(e, t, n, s, o, a) {
  return u(), d("div", vv, [
    m("div", {
      ref: "dmContainer",
      class: B(["dmContainer", e.$slots.default && "slotContainer"])
    }, [
      e.$slots.default ? (u(), d("div", {
        key: 0,
        class: B(["slotBody", "slotBody" + e.classTime])
      }, [
        D(e.$slots, "default")
      ], 2)) : S("", !0)
    ], 2)
  ], 512);
}
const bv = /* @__PURE__ */ K(yv, [["render", $v]]), { create: kv } = W("signature"), wv = "NutSignature", Cv = kv({
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
    const n = ke(wv), s = P(null), o = P(null), a = N(() => ({
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
      $.preventDefault(), l.ctx.beginPath(), l.ctx.lineWidth = e.lineWidth, l.ctx.strokeStyle = e.strokeStyle, t("start"), s.value.addEventListener(l.events[1], f, !1), s.value.addEventListener(l.events[2], v, !1), s.value.addEventListener(l.events[3], y, !1);
    }, f = ($) => {
      $.preventDefault();
      let h = l.isSupportTouch ? $.touches[0] : $;
      t("signing", h);
      let k = s.value.getBoundingClientRect(), I = h.clientX - k.left, T = h.clientY - k.top;
      l.ctx.lineTo(I, T), l.ctx.stroke();
    }, v = ($) => {
      $.preventDefault(), t("end"), s.value.removeEventListener(l.events[1], f, !1), s.value.removeEventListener(l.events[2], v, !1);
    }, y = ($) => {
      $.preventDefault(), s.value.removeEventListener(l.events[1], f, !1), s.value.removeEventListener(l.events[2], v, !1);
    }, g = () => {
      s.value.addEventListener(l.events[2], v, !1), l.ctx.clearRect(0, 0, l.canvasWidth, l.canvasHeight), l.ctx.closePath(), t("clear");
    }, b = () => {
      c(s.value);
    }, w = ($) => {
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
      const k = w($) ? "请绘制签名" : $, I = w($) ? "" : h;
      t("confirm", k, I);
    };
    return ve(() => {
      i() && (l.ctx = s.value.getContext("2d"), l.canvasWidth = o.value.offsetWidth, l.canvasHeight = o.value.offsetHeight, r());
    }), ce(G({}, me(l)), { canvas: s, wrap: o, isCanvasSupported: i, confirm: b, clear: g, classes: a, translate: n });
  }
}), Sv = {
  ref: "wrap",
  class: "nut-signature-inner"
}, Tv = ["height", "width"], Nv = {
  key: 0,
  class: "nut-signature-unsopport"
};
function Dv(e, t, n, s, o, a) {
  const l = j("nut-button");
  return u(), d("div", {
    class: B(e.classes)
  }, [
    m("div", Sv, [
      Se(m("canvas", {
        ref: "canvas",
        height: e.canvasHeight,
        width: e.canvasWidth
      }, null, 8, Tv), [
        [De, e.isCanvasSupported()]
      ]),
      e.isCanvasSupported() ? S("", !0) : (u(), d("p", Nv, _(e.unSupportTpl || e.translate("unSupportTpl")), 1))
    ], 512),
    le(l, {
      class: "nut-signature-btn",
      type: "default",
      onClick: t[0] || (t[0] = (i) => e.clear())
    }, {
      default: te(() => [
        ge(_(e.translate("reSign")), 1)
      ]),
      _: 1
    }),
    le(l, {
      class: "nut-signature-btn",
      type: "primary",
      onClick: t[1] || (t[1] = (i) => e.confirm())
    }, {
      default: te(() => [
        ge(_(e.translate("confirm")), 1)
      ]),
      _: 1
    })
  ], 2);
}
const Iv = /* @__PURE__ */ K(Cv, [["render", Dv]]), { create: _v } = W("time-select"), Bv = "NutTimeSelect", Mv = _v({
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
    const n = ke(Bv), s = N(() => ({
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
}), Lv = { class: "nut-time-select" }, Ev = { class: "nut-time-select__title" }, Pv = { class: "nut-time-select__title__fixed" }, Av = { key: 0 }, zv = { class: "nut-time-select__content" }, Vv = { class: "nut-time-select__content__pannel" }, Ov = { class: "nut-time-select__content__detail" };
function Hv(e, t, n, s, o, a) {
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
      m("view", Lv, [
        m("view", Ev, [
          m("view", Pv, [
            e.$slots.title ? D(e.$slots, "title", { key: 1 }) : (u(), d("span", Av, _(e.title || e.translate("pickupTime")), 1))
          ])
        ]),
        m("view", zv, [
          m("view", Vv, [
            D(e.$slots, "pannel")
          ]),
          m("view", Ov, [
            D(e.$slots, "detail")
          ])
        ])
      ])
    ]),
    _: 3
  }, 8, ["teleport-disable", "visible", "style", "lock-scroll", "onClickOverlay", "onClickCloseIcon"]);
}
const Rv = /* @__PURE__ */ K(Mv, [["render", Hv]]), { componentName: Fv, create: Wv } = W("time-pannel"), Yv = Wv({
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
      [Fv]: !0,
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
function jv(e, t, n, s, o, a) {
  return u(), d("view", {
    class: B(e.classes),
    onClick: t[0] || (t[0] = (l) => e.handlePannel(e.pannelKey))
  }, _(e.name), 3);
}
const Kv = /* @__PURE__ */ K(Yv, [["render", jv]]), { create: Uv } = W("time-detail"), Xv = Uv({
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
}), qv = { class: "nut-time-detail" }, Gv = { class: "nut-time-detail__detail nut-time-detail__detail--moring" }, Zv = { class: "nut-time-detail__detail__list" }, Jv = ["onClick"];
function Qv(e, t, n, s, o, a) {
  return u(), d("view", qv, [
    m("view", Gv, [
      m("view", Zv, [
        (u(!0), d(ee, null, re(e.renderData, (l) => (u(), d("view", {
          key: l,
          class: B(e.getClass(l)),
          onClick: (i) => e.handleTime(l)
        }, _(l), 11, Jv))), 128))
      ])
    ])
  ]);
}
const xv = /* @__PURE__ */ K(Xv, [["render", Qv]]), { create: e2 } = W("sku-header"), t2 = "NutSkuHeader", n2 = e2({
  props: {
    goods: {
      type: Object,
      default: {}
    }
  },
  components: {
    NutPrice: on
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
function i2(e, t, n, s, o, a) {
  const l = j("nut-price");
  return u(), d("view", o2, [
    m("img", {
      class: "nut-sku-header-img",
      src: e.goods.imagePath
    }, null, 8, l2),
    m("view", s2, [
      e.getSlots("sku-header-price") ? D(e.$slots, "sku-header-price", { key: 0 }) : (u(), x(l, {
        key: 1,
        price: e.goods.price,
        "need-symbol": !0,
        thousands: !1
      }, null, 8, ["price"])),
      e.getSlots("sku-header-extra") ? D(e.$slots, "sku-header-extra", { key: 2 }) : S("", !0),
      e.goods.skuId && !e.getSlots("sku-header-extra") ? (u(), d("view", a2, _(e.translate("skuId")) + " : " + _(e.goods.skuId), 1)) : S("", !0)
    ])
  ]);
}
const r2 = /* @__PURE__ */ K(n2, [["render", i2]]), { create: u2 } = W("sku-select"), c2 = u2({
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
}), d2 = { class: "nut-sku-select" }, f2 = { class: "nut-sku-select-item-title" }, p2 = { class: "nut-sku-select-item-skus" }, m2 = ["onClick"];
function h2(e, t, n, s, o, a) {
  return u(), d("view", d2, [
    (u(!0), d(ee, null, re(e.skuInfo, (l, i) => (u(), d("view", {
      key: l.id,
      class: "nut-sku-select-item"
    }, [
      m("view", f2, _(l.name), 1),
      m("view", p2, [
        (u(!0), d(ee, null, re(l.list, (r, p) => (u(), d("view", {
          key: r.name,
          class: B(["nut-sku-select-item-skus-sku", [{ active: !r.disable && r.active }, { disable: r.disable }]]),
          onClick: (f) => e.changeSaleChild(r, p, l, i)
        }, _(r.name), 11, m2))), 128))
      ])
    ]))), 128))
  ]);
}
const g2 = /* @__PURE__ */ K(c2, [["render", h2]]), { create: y2 } = W("sku-stepper"), v2 = y2({
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
    NutInputNumber: Jt
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
        return r && Tt(r) == "function" ? r() : "";
      },
      changeStepper: (r) => {
        n.value = r, t("changeStepper", r);
      }
    };
  }
}), $2 = { class: "nut-sku-stepper" }, b2 = { class: "nut-sku-stepper-title" }, k2 = ["innerHTML"], w2 = { class: "nut-sku-stepper-count" };
function C2(e, t, n, s, o, a) {
  const l = j("nut-input-number");
  return u(), d("view", $2, [
    m("view", b2, _(e.stepperTitle), 1),
    m("view", {
      class: "nut-sku-stepper-limit",
      innerHTML: e.getExtraText()
    }, null, 8, k2),
    m("view", w2, [
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
const S2 = /* @__PURE__ */ K(v2, [["render", C2]]), { create: T2 } = W("sku-operate"), N2 = T2({
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
}, I2 = {
  key: 0,
  class: "nut-sku-operate-desc"
}, _2 = {
  key: 1,
  class: "nut-sku-operate-btn"
}, B2 = ["onClick"];
function M2(e, t, n, s, o, a) {
  return e.btnOptions.length > 0 ? (u(), d("view", D2, [
    e.btnExtraText ? (u(), d("view", I2, _(e.btnExtraText), 1)) : S("", !0),
    D(e.$slots, "operate-btn"),
    e.getSlots("operate-btn") ? S("", !0) : (u(), d("view", _2, [
      (u(!0), d(ee, null, re(e.btnOptions, (l, i) => (u(), d("view", {
        key: i,
        class: B([`nut-sku-operate-btn-${l}`, "nut-sku-operate-btn-item"]),
        onClick: (r) => e.clickBtnOperate(l)
      }, _(e.getBtnDesc(l)), 11, B2))), 128))
    ]))
  ])) : S("", !0);
}
const L2 = /* @__PURE__ */ K(N2, [["render", M2]]), { create: E2 } = W("sku"), P2 = "NutSku", A2 = E2({
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
    SkuHeader: r2,
    SkuSelect: g2,
    SkuStepper: S2,
    SkuOperate: L2,
    NutPopup: Le
  },
  setup(e, { emit: t, slots: n }) {
    const s = ke(P2), o = P(e.visible), a = P(e.stepperMin);
    Q(
      () => e.visible,
      (w) => {
        o.value = w;
      }
    ), Q(
      () => o.value,
      (w) => {
        w == !1 && b();
      }
    );
    const l = (w) => n[w], i = (w) => {
      t("selectSku", w);
    }, r = (w) => {
      a.value = w, t("changeStepper", w);
    }, p = (w) => {
      t("add", w);
    }, f = (w) => {
      t("reduce", w);
    }, v = (w) => {
      t("overLimit", w);
    }, y = (w) => {
      t("clickBtnOperate", {
        type: w,
        value: a.value
      });
    }, g = (w) => {
      w == "icon" && t("clickCloseIcon"), w == "overlay" && t("clickOverlay"), w == "close" && t("close"), o.value = !1;
    }, b = () => {
      t("update:visible", !1);
    };
    return {
      showPopup: o,
      closePopup: g,
      selectSku: i,
      changeStepper: r,
      stepperOverLimit: v,
      clickBtnOperate: y,
      add: p,
      reduce: f,
      getSlots: l,
      translate: s
    };
  }
}), z2 = { class: "nut-sku" }, V2 = { class: "nut-sku-content" };
function O2(e, t, n, s, o, a) {
  const l = j("sku-header"), i = j("SkuSelect"), r = j("sku-stepper"), p = j("sku-operate"), f = j("nut-popup");
  return u(), x(f, {
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
      m("view", z2, [
        D(e.$slots, "sku-header"),
        e.getSlots("sku-header") ? S("", !0) : (u(), x(l, {
          key: 0,
          goods: e.goods
        }, pt({ _: 2 }, [
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
        m("view", V2, [
          D(e.$slots, "sku-select-top"),
          D(e.$slots, "sku-select"),
          e.getSlots("sku-select") ? S("", !0) : (u(), x(i, {
            key: 0,
            sku: e.sku,
            onSelectSku: e.selectSku
          }, null, 8, ["sku", "onSelectSku"])),
          D(e.$slots, "sku-stepper"),
          e.getSlots("sku-stepper") ? S("", !0) : (u(), x(r, {
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
        }, pt({ _: 2 }, [
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
const H2 = /* @__PURE__ */ K(A2, [["render", O2]]), { create: R2 } = W("card"), F2 = R2({
  components: {
    NutPrice: on,
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
}), W2 = { class: "nut-card" }, Y2 = { class: "nut-card__left" }, j2 = ["src"], K2 = { class: "nut-card__right" }, U2 = { class: "nut-card__right__title" }, X2 = {
  key: 0,
  class: "nut-card__right__price"
}, q2 = { class: "nut-card__right__other" }, G2 = { class: "nut-card__right__shop" }, Z2 = { class: "nut-card__right__shop__name" };
function J2(e, t, n, s, o, a) {
  const l = j("nut-price"), i = j("nut-tag");
  return u(), d("div", W2, [
    m("div", Y2, [
      m("img", {
        src: e.imgUrl,
        alt: ""
      }, null, 8, j2)
    ]),
    m("div", K2, [
      m("div", U2, _(e.title), 1),
      D(e.$slots, "prolist"),
      e.isNeedPrice ? (u(), d("div", X2, [
        D(e.$slots, "price", {}, () => [
          le(l, { price: e.price }, null, 8, ["price"])
        ]),
        D(e.$slots, "origin", {}, () => [
          le(l, {
            class: "nut-card__right__price__origin",
            price: e.vipPrice
          }, null, 8, ["price"])
        ])
      ])) : S("", !0),
      m("div", q2, [
        D(e.$slots, "shop-tag", {}, () => [
          le(i, { type: "danger" }, {
            default: te(() => [
              ge(_(e.shopDesc), 1)
            ]),
            _: 1
          }),
          le(i, { plain: "" }, {
            default: te(() => [
              ge(_(e.delivery), 1)
            ]),
            _: 1
          })
        ])
      ]),
      m("div", G2, [
        m("div", Z2, _(e.shopName), 1),
        D(e.$slots, "footer")
      ])
    ])
  ]);
}
const Q2 = /* @__PURE__ */ K(F2, [["render", J2]]), { create: x2 } = W("ecard"), e3 = "NutEcard", t3 = x2({
  components: {
    NutInputNumber: Jt
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
    const n = ke(e3), s = P(null), o = P(null), a = P(""), l = P(e.cardAmountMin), i = P(e.modelValue), r = (y, g) => {
      s.value = g, l.value = e.cardAmountMin, o.value = y.price, t("change", y), t("update:modelValue", y.price);
    }, p = (y) => {
      let b = y.target.value.replace(/[^\d]/g, "");
      a.value = b, o.value = b, Number(b) > e.cardAmountMax && (a.value = e.cardAmountMax, o.value = e.cardAmountMax), Number(b) < e.cardAmountMin && (a.value = e.cardAmountMin, o.value = e.cardAmountMin), t("inputChange", Number(a.value)), t("update:modelValue", Number(a.value));
    }, f = () => {
      s.value = "input", l.value = e.cardAmountMin, o.value = a.value, t("update:modelValue", a.value), t("inputClick");
    }, v = (y) => {
      l.value = y, t("changeStep", l.value, o.value);
    };
    return Q(
      () => e.modelValue,
      (y) => {
        i.value = y;
      }
    ), {
      handleClick: r,
      changeStep: v,
      change: p,
      inputClick: f,
      stepValue: l,
      currentIndex: s,
      inputValue: a,
      money: i,
      translate: n
    };
  }
}), n3 = { class: "nut-ecard" }, o3 = { class: "nut-ecard__title" }, l3 = { class: "nut-ecard__list" }, s3 = ["onClick"], a3 = { class: "nut-ecard__list__input--con" }, i3 = ["placeholder"], r3 = { class: "nut-ecard__list__step" };
function u3(e, t, n, s, o, a) {
  const l = j("nut-input-number");
  return u(), d("view", n3, [
    m("view", o3, _(e.chooseText || e.translate("chooseText")), 1),
    m("view", l3, [
      (u(!0), d(ee, null, re(e.dataList, (i, r) => (u(), d("view", {
        key: r,
        class: B(["nut-ecard__list__item", e.currentIndex == r ? "active" : ""]),
        onClick: (p) => e.handleClick(i, r)
      }, _(i.price), 11, s3))), 128)),
      m("view", {
        class: B(["nut-ecard__list__input", e.currentIndex == "input" ? "active" : ""]),
        onClick: t[2] || (t[2] = (...i) => e.inputClick && e.inputClick(...i))
      }, [
        m("view", null, _(e.otherValueText || e.translate("otherValueText")), 1),
        m("view", a3, [
          Se(m("input", {
            "onUpdate:modelValue": t[0] || (t[0] = (i) => e.inputValue = i),
            class: "nut-ecard__list__input--input",
            type: "text",
            placeholder: e.placeholder || e.translate("placeholder"),
            onInput: t[1] || (t[1] = (...i) => e.change && e.change(...i))
          }, null, 40, i3), [
            [In, e.inputValue]
          ]),
          ge(" " + _(e.suffix), 1)
        ])
      ], 2),
      m("view", r3, [
        m("view", null, _(e.suffix) + _(e.money), 1),
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
const c3 = /* @__PURE__ */ K(t3, [["render", u3]]), { create: d3 } = W("address-list-item"), f3 = "NutAddressList", p3 = d3({
  components: { Del: zn, Edit: os },
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
function k3(e, t, n, s, o, a) {
  const l = j("Del"), i = j("Edit");
  return u(), d("div", {
    class: "nut-address-list-item",
    onClick: t[0] || (t[0] = (...r) => e.contentsClick && e.contentsClick(...r))
  }, [
    m("div", m3, [
      m("div", h3, [
        D(e.$slots, "content-top", {}, () => [
          m("div", g3, _(e.item.addressName), 1),
          m("div", y3, _(e.item.phone), 1),
          e.item.defaultAddress ? (u(), d("div", v3, _(e.translate("default")), 1)) : S("", !0)
        ])
      ]),
      m("div", $3, [
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
    m("div", b3, [
      D(e.$slots, "content-addr", {}, () => [
        ge(_(e.item.fullAddress), 1)
      ])
    ])
  ]);
}
const Tn = /* @__PURE__ */ K(p3, [["render", k3]]), { create: w3 } = W("address-list-general"), C3 = w3({
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
    ItemContents: Tn,
    NutButton: qe,
    NutSwipe: yo
  },
  setup(e, { emit: t }) {
    const n = () => we(Tn, {
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
}), S3 = {
  key: 0,
  class: "nut-address-list-general"
}, T3 = { class: "nut-address-list-swipe" };
function N3(e, t, n, s, o, a) {
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
      m("div", T3, [
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
  })) : (u(), d("div", S3, [
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
    ])) : S("", !0),
    e.showMaskRef ? (u(), d("div", {
      key: 1,
      class: "nut-address-list__mask-bottom",
      onClick: t[4] || (t[4] = (...r) => e.hideMaskClick && e.hideMaskClick(...r))
    })) : S("", !0)
  ]));
}
const D3 = /* @__PURE__ */ K(C3, [["render", N3]]), { create: I3 } = W("address-list"), _3 = "NutAddressList", B3 = I3({
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
    const n = ke(_3), s = P([]), o = ue({
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
    const l = (b, w) => {
      t("delIcon", b, w), b.stopPropagation();
    }, i = (b, w) => {
      t("editIcon", b, w), b.stopPropagation();
    }, r = (b, w) => {
      t("clickItem", b, w), b.stopPropagation();
    }, p = (b, w) => {
      t("longCopy", b, w), b.stopPropagation();
    }, f = (b, w) => {
      t("longSet", b, w), b.stopPropagation();
    }, v = (b, w) => {
      t("longDel", b, w), b.stopPropagation();
    }, y = (b, w) => {
      t("swipeDel", b, w), b.stopPropagation();
    }, g = (b) => {
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
      clickLongDel: v,
      clickSwipeDel: y,
      addAddress: g,
      dataArray: s,
      translate: n
    };
  }
}), M3 = { class: "nut-address-list" };
function L3(e, t, n, s, o, a) {
  const l = j("general-shell"), i = j("nut-button");
  return u(), d("div", M3, [
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
    }, pt({
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
          ge(_(e.translate("addAddress")), 1)
        ]),
        _: 1
      })
    ])) : S("", !0)
  ]);
}
const E3 = /* @__PURE__ */ K(B3, [["render", L3]]), { create: P3 } = W("category"), A3 = P3({
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
}), z3 = { class: "nut-category" }, V3 = { class: "nut-category__cateList" }, O3 = { key: 0 }, H3 = ["onClick"];
function R3(e, t, n, s, o, a) {
  return u(), d("div", z3, [
    m("div", V3, [
      e.type == "classify" || e.type == "text" ? (u(), d("div", O3, [
        (u(!0), d(ee, null, re(e.category, (l, i) => (u(), d("div", {
          key: i,
          class: "nut-category__cateListLeft"
        }, [
          m("div", {
            class: B([e.checkIndex == i ? "nut-category__cateListItemChecked" : "nut-category__cateListItem"]),
            onClick: (r) => e.getChildList(i)
          }, _(l.catName), 11, H3)
        ]))), 128))
      ])) : S("", !0),
      D(e.$slots, "default")
    ])
  ]);
}
const F3 = /* @__PURE__ */ K(A3, [["render", R3]]), { create: W3 } = W("category-pane"), Y3 = W3({
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
}), j3 = { class: "nut-category-pane" }, K3 = {
  key: 0,
  class: "nut-category-pane__cateListRight"
}, U3 = { class: "nut-category-pane__childTitle" }, X3 = {
  key: 0,
  class: "nut-category-pane__childItemList"
}, q3 = ["onClick"], G3 = ["src"], Z3 = { class: "nut-category-pane__skuImg" }, J3 = {
  key: 1,
  class: "nut-category-pane__cateListRight"
}, Q3 = { class: "nut-category-pane__childTitle" }, x3 = {
  key: 0,
  class: "nut-category-pane__childItemList"
}, e5 = ["onClick"], t5 = { class: "nut-category-pane__skuName" }, n5 = {
  key: 2,
  class: "nut-category-pane__selfItemList"
}, o5 = ["onClick"];
function l5(e, t, n, s, o, a) {
  return u(), d("div", j3, [
    e.type == "classify" ? (u(), d("div", K3, [
      (u(!0), d(ee, null, re(e.categoryChild, (l, i) => (u(), d("div", { key: i }, [
        m("div", U3, _(l == null ? void 0 : l.catName), 1),
        (l == null ? void 0 : l.catType) == 1 ? (u(), d("div", X3, [
          (u(!0), d(ee, null, re(l.childCateList, (r, p) => (u(), d("div", {
            key: p,
            class: "nut-category-pane__childItem",
            onClick: (f) => e.onChange(r)
          }, [
            m("img", {
              class: "nut-category-pane__childImg",
              src: r.backImg
            }, null, 8, G3),
            m("div", Z3, _(r == null ? void 0 : r.catName), 1)
          ], 8, q3))), 128))
        ])) : S("", !0)
      ]))), 128))
    ])) : S("", !0),
    e.type == "text" ? (u(), d("div", J3, [
      (u(!0), d(ee, null, re(e.categoryChild, (l, i) => (u(), d("div", { key: i }, [
        m("div", Q3, _(l == null ? void 0 : l.catName), 1),
        (l == null ? void 0 : l.catType) == 1 ? (u(), d("div", x3, [
          (u(!0), d(ee, null, re(l.childCateList, (r, p) => (u(), d("div", {
            key: p,
            class: "nut-category-pane__childItem",
            onClick: (f) => e.onChange(r)
          }, [
            m("div", t5, _(r == null ? void 0 : r.catName), 1)
          ], 8, e5))), 128))
        ])) : S("", !0)
      ]))), 128))
    ])) : S("", !0),
    e.type == "custom" ? (u(), d("div", n5, [
      (u(!0), d(ee, null, re(e.customCategory, (l, i) => (u(), d("div", {
        key: i,
        class: "nut-category-pane__skuName",
        onClick: (r) => e.onChange(l)
      }, _(l == null ? void 0 : l.catName), 9, o5))), 128))
    ])) : S("", !0)
  ]);
}
const s5 = /* @__PURE__ */ K(Y3, [["render", l5]]), { create: a5 } = W("comment-header"), i5 = a5({
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
}), r5 = { class: "nut-comment-header__user" }, u5 = { class: "nut-comment-header__user-avter" }, c5 = ["src"], d5 = { class: "nut-comment-header__user-score" }, f5 = {
  key: 0,
  class: "nut-comment-header__time"
};
function p5(e, t, n, s, o, a) {
  const l = j("nut-rate");
  return u(), d("view", null, [
    e.info ? (u(), d("view", {
      key: 0,
      class: "nut-comment-header",
      onClick: t[1] || (t[1] = (...i) => e.handleClick && e.handleClick(...i))
    }, [
      m("view", r5, [
        m("view", u5, [
          e.info.avatar ? (u(), d("img", {
            key: 0,
            src: e.info.avatar
          }, null, 8, c5)) : S("", !0)
        ]),
        e.type == "default" ? (u(), d("view", {
          key: 0,
          class: B([`nut-comment-header__user-${e.type}`])
        }, [
          m("view", {
            class: B([`nut-comment-header__user-${e.type}-name`])
          }, [
            m("span", null, _(e.info.nickName), 1),
            D(e.$slots, "labels")
          ], 2),
          m("view", d5, [
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
          class: B([`nut-comment-header__user-${e.type}`])
        }, [
          m("span", {
            class: B([`nut-comment-header__user-${e.type}-name`])
          }, _(e.info.nickName), 3),
          D(e.$slots, "labels")
        ], 2))
      ]),
      e.info.time ? (u(), d("view", f5, _(e.info.time), 1)) : S("", !0)
    ])) : S("", !0),
    e.type == "complex" ? (u(), d("view", {
      key: 1,
      class: B([`nut-comment-header__${e.type}-score`])
    }, [
      le(l, {
        modelValue: e.info.score,
        "onUpdate:modelValue": t[2] || (t[2] = (i) => e.info.score = i),
        size: "12",
        spacing: "3",
        readonly: ""
      }, null, 8, ["modelValue"]),
      m("i", {
        class: B([`nut-comment-header__${e.type}-score-i`])
      }, null, 2),
      m("view", {
        class: B([`nut-comment-header__${e.type}-score-size`])
      }, _(e.info.size), 3)
    ], 2)) : S("", !0)
  ]);
}
const m5 = /* @__PURE__ */ K(i5, [["render", p5]]), { create: h5 } = W("comment-images"), g5 = h5({
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
}), y5 = ["onClick"], v5 = ["src"], $5 = /* @__PURE__ */ m("view", { class: "nut-comment-images__play" }, null, -1), b5 = ["onClick"], k5 = ["src"], w5 = {
  key: 0,
  class: "nut-comment-images__mask"
};
function C5(e, t, n, s, o, a) {
  const l = j("Right");
  return u(), d("view", {
    class: B(`nut-comment-images nut-comment-images--${e.type}`)
  }, [
    (u(!0), d(ee, null, re(e.videos, (i, r) => (u(), d("view", {
      key: i.id,
      class: "nut-comment-images__item nut-comment-images__item--video",
      onClick: (p) => e.showImages("video", r)
    }, [
      m("img", {
        src: i.mainUrl
      }, null, 8, v5),
      $5
    ], 8, y5))), 128)),
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
        }, null, 8, k5),
        e.type == "multi" && e.totalImages.length > 9 && e.videos.length + r > 7 ? (u(), d("view", w5, [
          m("span", null, "共 " + _(e.totalImages.length) + " 张", 1),
          le(l, { style: { width: "12px" } })
        ])) : S("", !0)
      ], 8, b5)) : S("", !0)
    ], 64))), 128))
  ], 2);
}
const S5 = /* @__PURE__ */ K(g5, [["render", C5]]), { create: T5 } = W("comment-bottom"), N5 = "NutComment", D5 = T5({
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
  components: { Fabulous: rs, Comment: jl, MoreX: ga },
  emits: ["clickOperate", "handleClick"],
  setup(e, { emit: t }) {
    const n = ke(N5), s = P(!1), o = P([]);
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
}), I5 = { class: "nut-comment-bottom" }, _5 = { key: 0 }, B5 = { class: "nut-comment-bottom__cpx" }, M5 = ["onClick"];
function L5(e, t, n, s, o, a) {
  const l = j("Fabulous"), i = j("Comment"), r = j("MoreX");
  return u(), d("view", I5, [
    m("view", {
      class: "nut-comment-bottom__lable",
      onClick: t[0] || (t[0] = (...p) => e.handleClick && e.handleClick(...p))
    }, [
      e.type != "complex" ? (u(), d("span", _5, _(e.info.size), 1)) : S("", !0)
    ]),
    m("view", B5, [
      (u(!0), d(ee, null, re(e.mergeOp, (p, f) => (u(), d("view", {
        key: f,
        class: B(["nut-comment-bottom__cpx-item", `nut-comment-bottom__cpx-item--${p}`]),
        onClick: (v) => e.operate(p)
      }, [
        p != "more" ? (u(), d(ee, { key: 0 }, [
          m("span", null, _(e.info[p]), 1),
          p == "like" ? (u(), x(l, { key: 0 })) : (u(), x(i, { key: 1 }))
        ], 64)) : S("", !0),
        p == "more" ? (u(), d(ee, { key: 1 }, [
          le(r),
          e.showPopver ? (u(), d("view", {
            key: 0,
            class: "nut-comment-bottom__cpx-item-popover",
            onClick: t[1] || (t[1] = (v) => e.operate("popover"))
          }, _(e.translate("complaintsText")), 1)) : S("", !0)
        ], 64)) : S("", !0)
      ], 10, M5))), 128))
    ])
  ]);
}
const E5 = /* @__PURE__ */ K(D5, [["render", L5]]), { create: P5 } = W("comment"), A5 = "NutComment", z5 = P5({
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
    CommentHeader: m5,
    CommentImages: S5,
    CommentBottom: E5,
    Right: Gt
  },
  emits: ["click", "clickImages", "clickOperate"],
  setup(e, { emit: t }) {
    const n = ke(A5);
    return { conEllipsis: N(() => e.ellipsis ? e.ellipsis : e.headerType == "complex" ? 6 : 2), clickOperate: (i) => {
      t("clickOperate", i);
    }, handleClick: () => {
      t("click", e.info);
    }, clickImages: (i) => {
      t("clickImages", i);
    }, translate: n };
  }
}), V5 = {
  key: 0,
  class: "nut-comment"
}, O5 = ["innerHTML"], H5 = { class: "nut-comment__follow-title" }, R5 = { class: "nut-comment__follow-com" };
function F5(e, t, n, s, o, a) {
  const l = j("comment-header"), i = j("comment-images"), r = j("Right"), p = j("comment-bottom");
  return e.info && Object.keys(e.info) ? (u(), d("view", V5, [
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
    }, null, 12, O5),
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
      m("view", H5, _(e.translate("additionalReview", e.follow.days)), 1),
      m("view", R5, _(e.follow.content), 1),
      e.follow.images && e.follow.images.length > 0 ? (u(), d("view", {
        key: 0,
        class: "nut-comment__follow-img",
        onClick: t[1] || (t[1] = (f) => e.clickImages(e.follow.images))
      }, [
        ge(_(e.translate("additionalImages", e.follow.images.length)) + " ", 1),
        le(r, { width: "12px" })
      ])) : S("", !0)
    ])) : S("", !0),
    le(p, {
      type: e.headerType,
      info: e.info,
      operation: e.operation,
      onClickOperate: e.clickOperate,
      onHandleClick: e.handleClick
    }, null, 8, ["type", "info", "operation", "onClickOperate", "onHandleClick"]),
    D(e.$slots, "comment-shop-reply")
  ])) : S("", !0);
}
const W5 = /* @__PURE__ */ K(z5, [["render", F5]]), { componentName: Y5, create: j5 } = W("invoice"), K5 = j5({
  components: {
    NutForm: mo,
    NutFormItem: ho,
    NutRadio: ro,
    NutRadioGroup: uo,
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
    const n = P(), s = P([]), o = ue({
      // list: []
    }), a = N(() => ({
      [Y5]: !0
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
}), U5 = ["onUpdate:modelValue", "placeholder"], X5 = {
  key: 0,
  class: "nut-invoice__submit"
};
function q5(e, t, n, s, o, a) {
  const l = j("nut-radio"), i = j("nut-radio-group"), r = j("nut-form-item"), p = j("nut-form"), f = j("nut-button");
  return u(), d("view", {
    class: B(e.classes)
  }, [
    le(p, {
      ref: "formRef",
      "model-value": e.formValue
    }, {
      default: te(() => [
        (u(!0), d(ee, null, re(e.list, (v, y) => (u(), x(r, {
          key: y,
          label: v.label,
          required: v.required,
          rules: v.rules,
          prop: v.formItemProp
        }, {
          default: te(() => [
            v.type === "radio" ? (u(), x(i, {
              key: 0,
              modelValue: e.formValue[v.formItemProp],
              "onUpdate:modelValue": (g) => e.formValue[v.formItemProp] = g
            }, {
              default: te(() => [
                (u(!0), d(ee, null, re(v.radioLabel, (g, b) => (u(), x(l, {
                  key: b,
                  shape: "button",
                  label: g.label
                }, {
                  default: te(() => [
                    ge(_(g.label), 1)
                  ]),
                  _: 2
                }, 1032, ["label"]))), 128))
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue"])) : Se((u(), d("input", {
              key: 1,
              "onUpdate:modelValue": (g) => e.formValue[v.formItemProp] = g,
              class: "nut-input-text",
              placeholder: v.placeholder,
              type: "text"
            }, null, 8, U5)), [
              [In, e.formValue[v.formItemProp]]
            ])
          ]),
          _: 2
        }, 1032, ["label", "required", "rules", "prop"]))), 128))
      ]),
      _: 1
    }, 8, ["model-value"]),
    e.submit ? (u(), d("div", X5, [
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
    ])) : S("", !0)
  ], 2);
}
const G5 = /* @__PURE__ */ K(K5, [["render", q5]]), { create: Z5 } = W("avatar-cropper"), J5 = Z5({
  components: {
    NutButton: qe,
    Refresh2: Ua,
    Retweet: Ja
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
    }, a = P(G({}, o)), l = P(), i = P(), r = P(), p = window.devicePixelRatio || 1, f = Ge(), v = N(() => s.angle === 90 || s.angle === 270), y = N(() => {
      const { swidth: U } = a.value, ae = U / p + "px";
      return {
        width: ae,
        height: ae
      };
    }), g = N(() => {
      const { displayWidth: U, scale: ae } = s, { swidth: de, height: fe } = a.value;
      return v.value ? Math.max(0, (fe * ae - de) / 2) : Math.max(0, (U * ae - de) / 2);
    }), b = N(() => {
      const { displayWidth: U, scale: ae } = s, { swidth: de, height: fe } = a.value;
      return v.value ? Math.max(0, (U * ae - de) / 2) : Math.max(0, (fe * ae - de) / 2);
    }), w = (U) => new Promise((ae) => {
      const de = new FileReader();
      de.onloadend = (fe) => ae(fe.target.result), de.readAsDataURL(U);
    }), c = (U) => new Promise((ae) => {
      const de = new Image();
      de.onload = () => ae(de), de.src = U;
    }), $ = () => {
      const { img: U, width: ae, height: de, x: fe, y: be, swidth: Ee } = a.value, { moveX: O, moveY: J, scale: se } = s, ie = i.value;
      if (!ie)
        return;
      const he = ie.getContext("2d");
      ie.width = s.displayWidth, ie.height = s.displayHeight, he.clearRect(0, 0, ie.width, ie.height), he.fillStyle = "#666", he.fillRect(0, 0, ie.width, ie.height), he.fillStyle = "#000", he.fillRect(e.space * p, (ie.height - Ee) / 2, Ee, Ee), he.translate(ie.width / 2 + O, ie.height / 2 + J), he.rotate(Math.PI / 180 * s.angle), he.scale(se, se), he.drawImage(U, fe, be, ae, de);
    }, h = (U) => {
      const ae = Oe(l.value), { width: de, height: fe } = ae, be = s.displayWidth = de * p, Ee = s.displayHeight = fe * p;
      let O = G({}, o);
      const { width: J, height: se } = U;
      O.img = U;
      const ie = se > J, he = ie ? J / se : se / J;
      O.width = be, O.height = ie ? be / he : be * he, O.x = -O.width / 2, O.y = -O.height / 2, O.swidth = be - e.space * 2 * p, O.sheight = ie ? O.swidth / he : O.swidth * he, O.sx = e.space * p, O.sy = (Ee - O.swidth) / 2, a.value = O, s.defScale = O.swidth / (ie ? O.width : O.height), I();
    }, k = (U) => Ke(this, null, function* () {
      s.visible = !0;
      const ae = U.target;
      let { files: de } = ae;
      if (!(de != null && de.length))
        return;
      const fe = yield w(de[0]), be = yield c(fe);
      h(be), $();
    }), I = () => {
      T(s.defScale), s.moveX = 0, s.moveY = 0, s.angle = 0;
    }, T = (U) => {
      U = Pe(U, 0.3, +e.maxZoom + 1), U !== s.scale && (s.scale = U);
    }, Y = (U) => Math.sqrt(st(U[0].clientX - U[1].clientX, 2) + st(U[0].clientY - U[1].clientY, 2));
    let M, A, C, E, V;
    const X = (U) => {
      const { touches: ae } = U, { offsetX: de } = f;
      f.start(U), V = ae.length, M = s.moveX, A = s.moveY, s.moving = V === 1, s.zooming = V === 2 && !de.value, s.zooming && (C = s.scale, E = Y(U.touches));
    }, Z = (U) => {
      const { touches: ae } = U;
      if (f.move(U), (s.moving || s.zooming) && ot(U, !0), s.moving) {
        const { deltaX: de, deltaY: fe } = f, be = de.value * s.scale + M, Ee = fe.value * s.scale + A;
        s.moveX = Pe(be, -g.value, g.value), s.moveY = Pe(Ee, -b.value, b.value);
      }
      if (s.zooming && ae.length === 2) {
        const de = Y(ae), fe = C * de / E;
        T(fe);
      }
    }, F = (U) => {
      let ae = !1;
      (s.moving || s.zooming) && (ae = !(s.moving && M === s.moveX && A === s.moveY), U.touches.length || (s.zooming && (s.moveX = Pe(s.moveX, -g.value, g.value), s.moveY = Pe(s.moveY, -b.value, b.value), s.zooming = !1), s.moving = !1, M = 0, A = 0, C = s.defScale, s.scale < s.defScale && I(), s.scale > e.maxZoom && (s.scale = +e.maxZoom))), ot(U, ae), f.reset();
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
      const U = i.value, { sx: ae, sy: de, swidth: fe } = a.value, be = fe, Ee = fe, O = document.createElement("canvas"), J = O.getContext("2d");
      O.width = be, O.height = Ee, U && J.drawImage(U, ae, de, be, Ee, 0, 0, be, Ee);
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
        Math.abs(s.moveX) > g.value && (s.moveX = g.value), Math.abs(s.moveY) > b.value && (s.moveY = b.value), $();
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
      highlightStyle: y,
      inputImageChange: k,
      reset: oe,
      rotate: q,
      cancel: H,
      confirm: ne,
      onTouchStart: X,
      onTouchMove: Z,
      onTouchEnd: F
    });
  }
}), Q5 = ["data-edit-text"], x5 = {
  ref: "cropperPopupRef",
  class: "nut-cropper-popup"
}, e4 = {
  ref: "canvasRef",
  class: "nut-cropper-popup__canvas"
}, t4 = {
  key: 1,
  class: "flex-sb"
};
function n4(e, t, n, s, o, a) {
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
    ], 8, Q5),
    Se(m("div", x5, [
      m("canvas", e4, null, 512),
      m("div", {
        class: "nut-cropper-popup__highlight",
        onTouchstart: t[1] || (t[1] = (...p) => e.onTouchStart && e.onTouchStart(...p)),
        onTouchmove: t[2] || (t[2] = (...p) => e.onTouchMove && e.onTouchMove(...p)),
        onTouchend: t[3] || (t[3] = (...p) => e.onTouchEnd && e.onTouchEnd(...p)),
        onTouchcancel: t[4] || (t[4] = (...p) => e.onTouchEnd && e.onTouchEnd(...p))
      }, [
        m("div", {
          class: "highlight",
          style: L(e.highlightStyle)
        }, null, 4)
      ], 32),
      m("div", {
        class: B(["nut-cropper-popup__toolbar", [e.toolbarPosition]])
      }, [
        e.$slots.toolbar ? D(e.$slots, "toolbar", { key: 0 }) : (u(), d("div", t4, [
          m("div", {
            class: "nut-cropper-popup__toolbar-item",
            onClick: t[5] || (t[5] = (p) => e.cancel())
          }, [
            le(l, { type: "danger" }, {
              default: te(() => [
                ge(_(e.cancelText), 1)
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
                ge(_(e.confirmText), 1)
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
const o4 = /* @__PURE__ */ K(J5, [["render", n4]]);
function l4(e) {
  [qe, Rn, Fn, gt, Le, fr, br, wr, Nr, Br, Un, Rr, qr, eu, nu, cu, ku, _u, Au, Hu, Qu, xn, $c, eo, to, Hc, Uc, Qc, sd, no, Nd, Fd, df, pf, gf, Af, Jt, ep, ro, uo, co, lo, ao, kp, Ip, e1, v1, mo, ho, yo, P1, U1, J1, tm, Qt, km, Dm, _t, Vm, Bt, th, ih, xt, mh, $h, fo, _h, Hh, qh, en, pg, Dg, tn, nn, on, ln, s0, p0, Qn, To, No, B0, A0, q0, cy, hy, wy, Dy, Ly, jy, hv, bv, Iv, Rv, Kv, xv, H2, Q2, c3, E3, F3, s5, W5, G5, o4].forEach((n) => {
    n.install ? e.use(n) : n.name && e.component(n.name, n);
  });
}
const s4 = "4.2.4", d4 = { install: l4, version: s4 };
export {
  U1 as ActionSheet,
  hv as Address,
  E3 as AddressList,
  hy as Animate,
  th as Audio,
  ih as AudioOperate,
  xt as Avatar,
  o4 as AvatarCropper,
  mh as AvatarGroup,
  J1 as Backtop,
  Qn as Badge,
  bv as Barrage,
  qe as Button,
  df as Calendar,
  lo as CalendarItem,
  Q2 as Card,
  Fd as Cascader,
  F3 as Category,
  s5 as CategoryPane,
  Rn as Cell,
  Fn as CellGroup,
  pf as Checkbox,
  gf as CheckboxGroup,
  _h as CircleProgress,
  Nr as Col,
  A0 as Collapse,
  q0 as CollapseItem,
  W5 as Comment,
  fr as ConfigProvider,
  p0 as Countdown,
  s0 as Countup,
  Af as DatePicker,
  Qt as Dialog,
  Rr as Divider,
  tm as Drag,
  c3 as Ecard,
  xn as Elevator,
  wy as Ellipsis,
  qh as Empty,
  ku as FixedNav,
  mo as Form,
  ho as FormItem,
  qr as Grid,
  eu as GridItem,
  br as Image,
  ln as ImagePreview,
  Hc as Indicator,
  km as InfiniteLoading,
  ep as Input,
  Jt as InputNumber,
  G5 as Invoice,
  wr as Layout,
  $h as List,
  En as Locale,
  _u as Menu,
  Au as MenuItem,
  cu as Navbar,
  Hh as Noticebar,
  _t as Notify,
  v1 as NumberKeyboard,
  gt as Overlay,
  $c as Pagination,
  ao as Picker,
  No as Popover,
  Le as Popup,
  on as Price,
  fo as Progress,
  Dm as PullRefresh,
  ro as Radio,
  uo as RadioGroup,
  no as Range,
  co as Rate,
  Br as Row,
  Nd as Searchbar,
  kp as ShortPassword,
  Uc as SideNavbar,
  Qc as SideNavbarItem,
  Iv as Signature,
  B0 as Skeleton,
  H2 as Sku,
  nu as Space,
  Dg as Step,
  pg as Steps,
  Un as Sticky,
  sd as SubSideNavbar,
  yo as Swipe,
  P1 as SwipeGroup,
  tn as Swiper,
  nn as SwiperItem,
  Vm as Switch,
  to as TabPane,
  Hu as Tabbar,
  Qu as TabbarItem,
  cy as Table,
  eo as Tabs,
  To as Tag,
  Ip as Textarea,
  xv as TimeDetail,
  Kv as TimePannel,
  Rv as TimeSelect,
  Bt as Toast,
  jy as Tour,
  Ly as TrendArrow,
  e1 as Uploader,
  en as Video,
  Dy as Watermark,
  d4 as default,
  l4 as install,
  cm as showDialog,
  Qg as showImagePreview,
  c4 as showNotify,
  bo as showToast,
  s4 as version
};
