var Io = Object.defineProperty, _o = Object.defineProperties;
var Bo = Object.getOwnPropertyDescriptors;
var yt = Object.getOwnPropertySymbols;
var ln = Object.prototype.hasOwnProperty, sn = Object.prototype.propertyIsEnumerable;
var lt = Math.pow, Mt = (e, t, n) => t in e ? Io(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, G = (e, t) => {
  for (var n in t || (t = {}))
    ln.call(t, n) && Mt(e, n, t[n]);
  if (yt)
    for (var n of yt(t))
      sn.call(t, n) && Mt(e, n, t[n]);
  return e;
}, ce = (e, t) => _o(e, Bo(t));
var vt = (e) => typeof e == "symbol" ? e : e + "", Lt = (e, t) => {
  var n = {};
  for (var a in e)
    ln.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
  if (e != null && yt)
    for (var a of yt(e))
      t.indexOf(a) < 0 && sn.call(e, a) && (n[a] = e[a]);
  return n;
};
var z = (e, t, n) => (Mt(e, typeof t != "symbol" ? t + "" : t, n), n);
var Ke = (e, t, n) => new Promise((a, o) => {
  var l = (r) => {
    try {
      i(n.next(r));
    } catch (p) {
      o(p);
    }
  }, s = (r) => {
    try {
      i(n.throw(r));
    } catch (p) {
      o(p);
    }
  }, i = (r) => r.done ? a(r.value) : Promise.resolve(r.value).then(l, s);
  i((n = n.apply(e, t)).next());
});
import { reactive as ue, ref as P, defineComponent as Nt, h as we, createApp as Mo, useSlots as Je, openBlock as u, createBlock as x, computed as N, createElementBlock as d, normalizeClass as B, normalizeStyle as L, createElementVNode as h, createTextVNode as ge, toRefs as he, resolveComponent as j, createCommentVNode as S, renderSlot as D, getCurrentInstance as Fe, Fragment as ee, toDisplayString as _, watchEffect as Ht, Transition as Rt, withCtx as te, withDirectives as Se, withModifiers as Ne, vShow as De, watch as Q, Teleport as Lo, mergeProps as dt, createVNode as le, onMounted as ve, onBeforeUnmount as Ft, inject as Be, provide as Me, unref as Tn, onUnmounted as je, shallowReactive as Eo, markRaw as an, isVNode as Po, Comment as Ao, Text as zo, nextTick as Te, renderList as re, normalizeProps as Vo, guardReactiveProps as Oo, resolveDynamicComponent as Ae, onActivated as pt, createSlots as ft, onBeforeMount as Nn, readonly as rn, onDeactivated as mt, render as Wt, vModelText as Dn } from "vue";
class In {
}
let Ho = class extends In {
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
class Ro extends In {
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
const Yt = (e, {
  args: t = [],
  done: n,
  canceled: a
}) => {
  if (e) {
    const o = e.apply(null, t);
    _n(o) ? o.then((l) => {
      l ? n(l) : a && a();
    }).catch(() => {
    }) : o ? n() : a && a();
  } else
    n();
}, St = (e) => {
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
}, jt = Array.isArray, Fo = (e) => e instanceof Date, Tt = (e) => typeof e == "function", Wo = (e) => typeof e == "string", tt = (e) => e !== null && typeof e == "object", _n = (e) => tt(e) && Tt(e.then) && Tt(e.catch), Yo = document, un = Yo.body, Pt = (e, t) => {
  try {
    return t.split(".").reduce((n, a) => n[a], e);
  } catch (n) {
    return "";
  }
}, jo = (e, t, n) => {
  let a = Object.assign({}, e), o = Object.assign({}, n);
  return Object.keys(t).length > 0 ? (Object.keys(a).forEach((l) => {
    if (Object.prototype.hasOwnProperty.call(o, l)) {
      const s = St(o[l]);
      s == "function" && (a[l] = o[l](t)), s == "string" && (a[l] = t[o[l]]);
    } else
      t[l] && (a[l] = t[l]);
  }), a) : e;
}, Bn = (e, t) => (Object.keys(t).forEach((n) => {
  let a = e[n], o = t[n];
  tt(a) && tt(o) ? Bn(a, o) : e[n] = o;
}), e);
function Ko(e, t = 2) {
  return Object.is(parseFloat(e), NaN) ? console.log(`传入的值：${e}不是一个数字`) : (e = parseFloat(e), (Math.round((e + Number.EPSILON) * Math.pow(10, t)) / Math.pow(10, t)).toFixed(t));
}
function nt(e, t) {
  (typeof e.cancelable != "boolean" || e.cancelable) && e.preventDefault(), t && e.stopPropagation();
}
const Ue = (e, t = 2) => {
  for (e += ""; e.length < t; )
    e = "0" + e;
  return e.toString();
}, Pe = (e, t, n) => Math.min(Math.max(e, t), n), Mn = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, $t = ue({
  "zh-CN": new Ho(),
  "en-US": new Ro()
});
class Ln {
  static languages() {
    return $t[this.currentLang.value];
  }
  static use(t, n) {
    n && ($t[t] = new n()), this.currentLang.value = t;
  }
  static merge(t, n) {
    n && ($t[t] ? Bn($t[t], n) : this.use(t, n));
  }
}
z(Ln, "currentLang", P("zh-CN"));
const Uo = (e) => e.replace(/-./g, (t) => t[1].toUpperCase());
function Y(e) {
  return {
    componentName: "nut-" + e,
    create: function(n) {
      return n.name = "Nut" + Uo("-" + e), n.install = (a) => {
        a.component(n.name, n);
      }, Nt(n);
    }
  };
}
const ot = (e, t) => e ? we(e, t) : "", Kt = (e, t) => {
  let n = document.body;
  const a = e.teleport || "body";
  a != "body" && (Wo(a) ? n = document.querySelector(a) : n = e.teleport);
  const o = document.createElement("view"), l = t.name ? t.name + "-" : "", s = e.id || (/* @__PURE__ */ new Date()).getTime();
  o.id = l + s;
  let i = {};
  Tt(t.wrapper) ? i = t.wrapper(n, o) : i = t.wrapper;
  const r = Mo(i, e), p = t.components;
  return p && p.forEach((f) => {
    r.use(f);
  }), n.appendChild(o), {
    instance: r.mount(o),
    unmount: () => {
      r.unmount(), n.removeChild(o);
    }
  };
}, Xo = /* @__PURE__ */ Nt({
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
    const n = e, a = "nut-icon", o = Je(), l = () => n.name ? n.name.indexOf("/") !== -1 : !1, s = (f) => {
      if (f)
        return isNaN(Number(f)) ? String(f) : f + "px";
    }, i = l();
    let r = we(
      i ? "img" : n.tag,
      {
        class: i ? `${a}__img` : `${n.fontClassName} ${a} ${n.classPrefix}-${n.name}`,
        style: {
          color: n.color,
          fontSize: s(n.size),
          width: s(n.width || n.size),
          height: s(n.height || n.size)
        },
        src: i ? n.name : ""
      },
      (t = o.default) == null ? void 0 : t.call(o)
    );
    const p = () => r;
    return (f, v) => (u(), x(p));
  }
});
function qo(e) {
  return e.name = "IconFont", e.install = (t) => {
    t.component("IconFont", e);
  }, e;
}
qo(Xo);
const R = (e) => Nt({
  props: {
    class: { type: String, default: "" },
    name: { type: String, default: e },
    color: { type: String, default: "" },
    width: { type: [String, Number], default: "" },
    height: { type: [String, Number], default: "" }
  },
  setup(t) {
    const n = (l) => {
      if (l)
        return isNaN(Number(l)) ? String(l) : l + "px";
    }, a = N(() => {
      const l = "nut-icon";
      return {
        [t.class]: t.class,
        [l]: !0,
        [l + "-" + t.name]: t.name
      };
    }), o = N(() => {
      const l = {};
      return l.height = n(t.height), l.width = n(t.width), l.color = t.color, l;
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
const Go = R("arrow-down2"), Zo = /* @__PURE__ */ h("path", {
  d: "M1741.19 227.497a121.654 121.654 0 1 1 127.858 206.812L1292.65 790.27a182.482 182.482 0 0 1-191.727 0L524.646 434.31a121.654 121.654 0 1 1 127.859-206.812l544.403 335.887c181.387-111.8 362.773-223.965 544.282-335.887",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Jo = [
  Zo
];
function Qo(e, t, n, a, o, l) {
  return u(), d("svg", {
    class: B(e.classes),
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
const el = R("arrow-up2"), tl = /* @__PURE__ */ h("path", {
  d: "M623.406 815.479A129.722 129.722 0 1 1 487.068 594.95C691.9 468.083 896.73 341.993 1101.691 215.125a194.583 194.583 0 0 1 204.442 0l614.494 379.567a129.722 129.722 0 1 1-136.338 220.657l-580.506-358.292-580.377 358.422",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), nl = [
  tl
];
function ol(e, t, n, a, o, l) {
  return u(), d("svg", {
    class: B(e.classes),
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
const sl = R("check-checked"), al = /* @__PURE__ */ h("path", {
  d: "M510.613 2.837C229.793 2.837.032 232.598.032 513.418S229.793 1024 510.613 1024s510.582-229.762 510.582-510.582S794.27 2.837 510.613 2.837zm0 794.238c-156.01 0-283.656-127.646-283.656-283.657s127.645-283.656 283.656-283.656S794.27 357.407 794.27 513.418 666.624 797.075 510.613 797.075z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), il = /* @__PURE__ */ h("path", {
  d: "M382.968 513.418a127.645 127.645 0 1 0 255.29 0 127.645 127.645 0 1 0-255.29 0Z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1);
function rl(e, t, n, a, o, l) {
  return u(), d("svg", {
    class: B(e.classes),
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
const cn = /* @__PURE__ */ ye(sl, [["render", rl]]), ul = R("check-disabled"), cl = /* @__PURE__ */ h("path", {
  d: "M506.467 0C227.962 0 .094 227.868.094 506.374s227.868 506.373 506.373 506.373 506.374-227.868 506.374-506.373S787.786 0 506.467 0zm202.55 571.077H306.73c-45.01 0-67.516-22.506-67.516-67.517 0-45.01 22.505-67.516 67.516-67.516h402.286c45.01 0 67.516 22.505 67.516 67.516 0 45.011-22.505 67.517-67.516 67.517z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), dl = [
  cl
];
function fl(e, t, n, a, o, l) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, dl, 6);
}
const pl = /* @__PURE__ */ ye(ul, [["render", fl]]), ml = R("check-normal"), hl = /* @__PURE__ */ h("path", {
  d: "M512 1024c-136.533 0-264.533-54.044-361.244-150.756C54.044 776.534 0 648.534 0 512c0-136.533 54.044-264.533 150.756-361.244C247.466 54.044 375.466 0 512 0c136.533 0 264.533 54.044 361.244 150.756C969.956 247.466 1024 375.466 1024 512s-54.044 264.533-150.756 361.244C776.534 969.956 648.534 1024 512 1024zm0-938.667c-113.778 0-221.867 45.511-301.511 125.156S85.333 398.222 85.333 512s45.511 221.867 125.156 301.511S398.222 938.667 512 938.667s221.867-45.511 301.511-125.156S938.667 625.778 938.667 512 893.156 290.133 813.51 210.489 625.778 85.333 512 85.333z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), gl = [
  hl
];
function yl(e, t, n, a, o, l) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, gl, 6);
}
const At = /* @__PURE__ */ ye(ml, [["render", yl]]), vl = R("Check"), $l = /* @__PURE__ */ h("path", {
  d: "M998.4 245.029c-219.429 153.6-398.629 332.8-552.229 552.228-40.228 58.514-128 54.857-164.571-3.657-69.486-106.057-149.943-186.514-256-256-51.2-32.914-18.286-113.371 40.229-98.743C182.857 460.8 274.286 508.343 358.4 585.143c157.257-190.172 358.4-340.114 588.8-435.2 62.171-25.6 106.057 58.514 51.2 95.086",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), bl = [
  $l
];
function kl(e, t, n, a, o, l) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, bl, 6);
}
const En = /* @__PURE__ */ ye(vl, [["render", kl]]), wl = R("checked"), Cl = /* @__PURE__ */ h("path", {
  d: "M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0zm281.6 369.778C779.378 381.156 600.178 500.622 472.178 691.2c0 0 0 2.844-2.845 2.844-8.533 5.69-48.355 36.978-88.177-8.533-39.823-51.2-62.578-99.555-142.223-142.222-2.844 0-2.844-2.845-2.844-2.845-8.533-11.377-39.822-56.888 19.911-56.888 45.511 0 91.022 11.377 162.133 73.955 5.69 5.689 14.223 5.689 17.067 0C469.333 517.69 608.711 366.933 768 318.578c0 0 19.911-2.845 31.289 14.222 5.689 11.378 11.378 22.756-5.689 36.978z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Sl = [
  Cl
];
function Tl(e, t, n, a, o, l) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Sl, 6);
}
const Pn = /* @__PURE__ */ ye(wl, [["render", Tl]]), Nl = R("checklist"), Dl = /* @__PURE__ */ h("path", {
  d: "M159.289 500.622c62.578 0 125.155 17.067 221.867 102.4 8.533 5.69 19.91 5.69 25.6 0 48.355-54.044 238.933-261.689 455.11-329.955 0 0 28.445-5.69 42.667 19.91 8.534 17.067 19.911 34.134-5.689 54.045-22.755 17.067-264.533 179.2-440.888 440.89l-2.845 2.844c-11.378 8.533-68.267 51.2-119.467-14.223-56.888-71.11-85.333-139.377-196.266-196.266-2.845 0-2.845-2.845-5.69-5.69-11.377-11.377-54.044-73.955 25.6-73.955z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Il = [
  Dl
];
function _l(e, t, n, a, o, l) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Il, 6);
}
const Bl = /* @__PURE__ */ ye(Nl, [["render", _l]]), Ml = R("circle-close"), Ll = /* @__PURE__ */ h("path", {
  d: "M511.492 73.063a438.425 438.425 0 0 1 310.545 748.953 439.16 439.16 0 1 1-621.09-621.073A435.695 435.695 0 0 1 511.492 73.046m0-73.063C267.49.018 57.468 172.408 9.87 411.717-37.713 651.042 90.39 890.658 315.823 984.03c225.45 93.355 485.444 14.472 621.005-188.416 135.543-202.906 108.885-473.293-63.659-645.82A509.645 509.645 0 0 0 511.492.002zm-175.7 635.495 299.673-299.674c12.049-12.049 24.115-12.049 36.164 0l15.496 15.497c12.05 12.066 12.05 24.115 0 36.18L387.47 687.122c-12.066 12.05-24.115 12.05-36.181 0l-15.497-15.496c-12.049-12.066-12.049-24.115 0-36.182zm0-284.177 15.496-15.497c12.066-12.049 24.115-12.049 36.18 0l299.64 299.674c12.05 12.049 12.05 24.098 0 36.164l-15.496 15.496c-12.05 12.05-24.115 12.05-36.182 0L335.808 387.465c-12.049-12.05-12.049-24.098 0-36.164z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), El = [
  Ll
];
function Pl(e, t, n, a, o, l) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, El, 6);
}
const Ut = /* @__PURE__ */ ye(Ml, [["render", Pl]]);
R("clock");
R("close-little");
const Al = R("close"), zl = /* @__PURE__ */ h("path", {
  d: "M981.577 1024c-11.703 0-23.406-2.926-32.183-11.703L13.166 76.07c-14.629-17.555-14.629-46.812 0-64.366 17.554-14.629 46.811-14.629 64.365 0L1013.76 947.93c17.554 17.555 17.554 43.886 0 61.44-8.777 11.703-20.48 14.629-32.183 14.629zm-936.228 0c-11.703 0-23.406-2.926-32.183-11.703-17.555-17.554-17.555-43.886 0-61.44L949.394 14.63c17.555-17.555 43.886-17.555 61.44 0 17.555 17.554 17.555 43.885 0 61.44L74.606 1012.297C68.754 1021.074 57.05 1024 45.349 1024z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Vl = [
  zl
];
function Ol(e, t, n, a, o, l) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1026 1024",
    role: "presentation"
  }, Vl, 6);
}
const Dt = /* @__PURE__ */ ye(Al, [["render", Ol]]), Hl = R("comment"), Rl = /* @__PURE__ */ h("path", {
  d: "M760.415 876.089H259.793c-132.741 0-242.726-109.985-242.726-242.726V242.726C17.067 109.986 127.052 0 259.793 0h504.414c132.741 0 242.726 109.985 242.726 242.726v394.43c-3.792 132.74-109.985 238.933-246.518 238.933zM259.793 113.778c-72.06 0-128.949 56.889-128.949 128.948v394.43c0 72.059 56.89 128.948 128.949 128.948h504.414c68.267 0 128.949-56.89 128.949-128.948v-394.43c0-72.06-56.89-128.948-128.949-128.948H259.793zm56.888 887.466c-15.17 0-30.34-3.792-41.718-15.17-22.756-22.755-22.756-56.889 0-79.644l109.985-109.986c22.756-22.755 56.889-22.755 79.645 0s22.755 56.89 0 79.645L354.607 986.074c-7.585 7.585-22.755 15.17-37.926 15.17zm193.423-398.222c-45.511 0-91.023-22.755-117.57-56.889-18.964-26.548-15.171-60.681 7.585-79.644 26.548-18.963 60.681-15.17 79.644 7.585 15.17 18.963 45.511 18.963 56.889 0 18.963-22.755 56.889-30.34 79.644-7.585s30.341 56.889 7.585 79.644c-22.755 37.926-68.266 56.89-113.777 56.89z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Fl = [
  Rl
];
function Wl(e, t, n, a, o, l) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Fl, 6);
}
const Yl = /* @__PURE__ */ ye(Hl, [["render", Wl]]);
R("date");
const jl = R("del"), Kl = /* @__PURE__ */ h("path", {
  d: "M668.444 1024H355.556c-142.223 0-256-113.778-256-256V170.667h824.888V768c0 142.222-113.777 256-256 256zM184.89 256v512c0 93.867 76.8 170.667 170.667 170.667h312.888c93.867 0 170.667-76.8 170.667-170.667V256H184.89zm753.778 0H85.333c-22.755 0-42.666-19.911-42.666-42.667s19.91-42.666 42.666-42.666h853.334c22.755 0 42.666 19.91 42.666 42.666S961.423 256 938.667 256zM625.777 85.333H398.223c-22.755 0-42.666-19.91-42.666-42.666S375.466 0 398.222 0h227.556c22.755 0 42.666 19.911 42.666 42.667s-19.91 42.666-42.666 42.666z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ul = [
  Kl
];
function Xl(e, t, n, a, o, l) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ul, 6);
}
const An = /* @__PURE__ */ ye(jl, [["render", Xl]]);
R("del2");
R("dongdong");
R("dou-arrow-up");
const ql = R("down-arrow"), Gl = /* @__PURE__ */ h("path", {
  d: "M128 349.867C93.867 332.8 34.133 341.333 8.533 384-8.533 418.133 0 477.867 42.667 503.467 179.2 588.8 315.733 665.6 443.733 750.933c42.667 25.6 93.867 25.6 136.534 0C716.8 665.6 853.333 588.8 981.333 503.467c42.667-25.6 51.2-76.8 25.6-119.467s-76.8-51.2-119.466-25.6C768 435.2 640 512 512 588.8 384 512 256 435.2 128 349.867",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Zl = [
  Gl
];
function Jl(e, t, n, a, o, l) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Zl, 6);
}
const zn = /* @__PURE__ */ ye(ql, [["render", Jl]]);
R("download");
R("dshop");
const Ql = R("edit"), xl = /* @__PURE__ */ h("path", {
  d: "M285.479 992.97H108.606c-27.927 0-55.854-12.412-77.576-31.03C9.31 940.217 0 915.393 0 884.363l3.103-155.152c0-24.824 9.31-46.545 27.927-65.164L626.812 65.164c83.782-83.782 220.315-83.782 307.2 0 83.782 83.781 83.782 223.418 0 307.2l-605.09 601.988c-12.413 12.412-27.928 18.618-43.443 18.618zM781.964 93.09c-31.03 0-65.164 12.413-89.988 37.237L96.194 729.212 93.09 884.364c0 9.309 6.206 15.515 15.515 15.515h161.358l598.884-595.782c49.649-49.649 49.649-127.224 0-173.77l-3.103-3.103c-21.72-21.721-52.751-34.133-83.781-34.133zm-201.946 78.508 65.816-65.847L882.812 342.73l-65.846 65.784zM946.424 992.97H217.212c-24.824 0-46.545-21.722-46.545-46.546s21.72-46.545 46.545-46.545h729.212c24.824 0 46.546 21.721 46.546 46.545s-21.722 46.546-46.546 46.546z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), es = [
  xl
];
function ts(e, t, n, a, o, l) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, es, 6);
}
const ns = /* @__PURE__ */ ye(Ql, [["render", ts]]);
R("eye");
const os = R("fabulous"), ls = /* @__PURE__ */ h("path", {
  d: "M584.06 1024H318.577C144.118 1024 0 883.674 0 705.422s140.326-318.578 318.578-318.578v113.778c-113.778 0-204.8 91.022-204.8 204.8s91.022 204.8 204.8 204.8h265.481V1024zm56.888 0h-53.096c-208.593 0-379.26-170.667-379.26-383.052 0-83.437 26.549-163.081 75.852-231.348l3.793-3.793c15.17-22.755 30.34-60.681 45.511-121.363l7.585-34.133c7.586-18.963 15.17-41.718 18.963-68.267C386.844 22.756 470.281 0 519.586 0c117.57 0 178.251 106.193 178.251 212.385v7.585c0 7.586-3.793 18.963-3.793 37.926C876.09 257.896 1024 405.807 1024 587.852v53.096C1024 853.333 853.333 1024 640.948 1024zM519.585 113.778c-30.34 0-41.718 53.096-49.304 87.23-3.792 34.133-11.377 60.68-15.17 83.436l-7.585 34.134c-11.378 45.51-34.133 113.778-60.682 155.496l-7.585 3.793A269.274 269.274 0 0 0 322.37 644.74c0 147.91 121.363 269.274 269.274 269.274h53.097c147.91 0 269.274-121.363 269.274-269.274v-53.097c0-117.57-98.608-216.177-216.178-216.177h-56.889c-18.963-3.793-37.926-15.17-49.304-30.341-11.377-15.17-15.17-37.926-15.17-56.889 7.585-41.718 11.378-64.474 11.378-75.852v-3.792c-3.793 0-3.793-94.815-68.267-94.815z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ss = [
  ls
];
function as(e, t, n, a, o, l) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1061 1024",
    role: "presentation"
  }, ss, 6);
}
const is = /* @__PURE__ */ ye(os, [["render", as]]), rs = R("failure"), us = /* @__PURE__ */ h("path", {
  d: "M512 1024C229.831 1024 0 794.169 0 512S229.831 0 512 0s512 229.831 512 512-229.831 512-512 512zm0-955.733C266.24 68.267 68.267 266.24 68.267 512S266.24 955.733 512 955.733 955.733 757.76 955.733 512 757.76 68.267 512 68.267zm111.502 282.169c13.654-13.654 34.134-13.654 47.787 0 11.378 11.377 13.653 31.857 2.275 45.51l-2.275 2.276-111.502 111.502 111.502 111.503c13.653 13.653 13.653 34.133 0 47.786-13.653 13.654-34.133 13.654-47.787 0L512 557.511 400.498 669.013c-11.378 11.378-31.858 13.654-45.511 2.276l-2.276-2.276c-11.378-11.377-13.653-31.857-2.275-45.51l2.275-2.276 111.502-111.503-111.502-111.502c-13.653-13.653-13.653-34.133 0-47.786s34.133-13.654 47.787 0L512 461.938l111.502-111.502z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), cs = [
  us
];
function ds(e, t, n, a, o, l) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, cs, 6);
}
const Vn = /* @__PURE__ */ ye(rs, [["render", ds]]);
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
const fs = R("image-error"), ps = /* @__PURE__ */ h("path", {
  d: "M696.43 465.25c40.61 0 73.53-32.72 73.53-73.09s-32.96-73.08-73.53-73.08-73.54 32.72-73.54 73.08 32.92 73.09 73.54 73.09zM535.74 650.62l-273.61-259.4a56.19 56.19 0 0 0-15.36 11.58l-114 119.63-6-222.77c-.73-26.82 20.84-49.41 47.67-50.14l201.77-5.44 47.34-50-250.43 6.75C119 202.33 76.33 247.17 77.78 301l7.32 271.4 4.5 166.78C91.06 793 136.05 835.47 190.2 834l176-4.75 12-.32 47.34-50 116.18-122.64z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ms = /* @__PURE__ */ h("path", {
  d: "m861.71 214.8-242.83-33.86-55.09 41.46L855 263a49.05 49.05 0 0 1 41.79 55.13l-54.33 389.59-120.87-159.05A59.86 59.86 0 0 0 638.06 537l-44 33.08 65.07 86.15L603.84 698l-79.57 60.1-54.92 41.48 34.17 4.76 270.73 37.76a97.55 97.55 0 0 0 109.88-79.6 22.37 22.37 0 0 0 .65-3.44l60.53-434.16c7.44-53.32-29.95-102.62-83.6-110.1z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1);
function hs(e, t, n, a, o, l) {
  return u(), d("svg", {
    class: B(e.classes),
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
const gs = /* @__PURE__ */ ye(fs, [["render", hs]]), ys = R("image"), vs = /* @__PURE__ */ h("path", {
  d: "M853.161 892.55H362.595l-209.433-.414a18.5 18.5 0 0 1-1.813-.092c-24.849-2.485-47.825-14.06-64.696-32.595-16.991-18.665-26.35-42.855-26.35-68.112V264.626c0-55.808 45.404-101.211 101.212-101.211H853.16c55.808 0 101.21 45.403 101.21 101.211v225.513c0 .275-.006.552-.018.826-.022.494-1.972 51.723 15.481 85.462 4.717 9.119 1.148 20.335-7.97 25.053-9.117 4.714-20.335 1.15-25.053-7.97-21.3-41.177-19.845-97.643-19.619-103.74V264.627c0-35.307-28.724-64.031-64.03-64.031H161.515c-35.308 0-64.032 28.724-64.032 64.031v526.711c0 32.755 24.321 59.958 56.718 63.62l208.431.412h490.53c35.306 0 64.03-28.725 64.03-64.032l-.382-93.677c-.105-1.75-1.587-19.548-19.55-42.5a9.548 9.548 0 0 1-.147-.19l-21.712-28.489-117.227-155.119c-.416-.55-38.995-50.852-86.272-45.534-38.335 4.315-75.955 45.164-108.79 118.132-17.615 39.141-34.65 68.269-52.082 89.046-17.607 20.986-35.68 33.52-55.251 38.317-43.423 10.638-81.05-18.995-120.887-50.373l-5.057-3.98c-46.555-36.578-68.75-28.224-158.33 59.602-7.33 7.188-19.1 7.071-26.289-.26-7.187-7.33-7.07-19.1.26-26.287 46.659-45.746 77.544-72.727 107.086-84.283 33.358-13.048 64.275-6.267 100.242 21.994l5.093 4.008c33.923 26.72 63.22 49.795 89.029 43.467 25.618-6.279 53.3-42.114 82.28-106.509 39.14-86.976 85.838-134.027 138.797-139.849 68.454-7.515 117.824 57.405 119.892 60.172l117.122 154.98 21.6 28.344c26.277 33.631 27.334 61.639 27.367 64.725l.001.128.384 94.06c.001 55.884-45.4 101.287-101.209 101.287z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), $s = /* @__PURE__ */ h("path", {
  d: "M312.328 446.968c-42.325 0-76.759-34.434-76.759-76.76s34.434-76.759 76.76-76.759 76.759 34.435 76.759 76.76-34.434 76.759-76.76 76.759zm0-116.34c-21.824 0-39.579 17.756-39.579 39.58s17.755 39.58 39.58 39.58 39.579-17.756 39.579-39.58-17.755-39.58-39.58-39.58z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1);
function bs(e, t, n, a, o, l) {
  return u(), d("svg", {
    class: B(e.classes),
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
const ws = R("joy-smile"), Cs = /* @__PURE__ */ h("path", {
  d: "M2185.74 479.429a117.992 117.992 0 1 0-162.829-170.852c-284.772 271.204-732.314 271.204-1017.087 0A118.05 118.05 0 0 0 842.996 479.43c375.98 358.045 966.705 358.045 1342.744 0",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ss = [
  Cs
];
function Ts(e, t, n, a, o, l) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 3072 1024",
    role: "presentation"
  }, Ss, 6);
}
const Ns = /* @__PURE__ */ ye(ws, [["render", Ts]]), Ds = R("left"), Is = /* @__PURE__ */ h("path", {
  d: "M642.973 1005.542 321.912 587.098a123.278 123.278 0 0 1 0-150.17l321.06-418.443a47.182 47.182 0 0 1 74.83 57.422l-321.088 418.47a28.994 28.994 0 0 0 0 35.3l321.088 418.47a47.155 47.155 0 0 1-74.83 57.395",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), _s = [
  Is
];
function Bs(e, t, n, a, o, l) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, _s, 6);
}
const Xt = /* @__PURE__ */ ye(Ds, [["render", Bs]]), Ms = R("link"), Ls = /* @__PURE__ */ h("path", {
  d: "M313.034 1004.045c-66.848 0-124.402-24.156-170.798-70.577l-40.854-40.829C54.96 846.218 28.966 783.097 30.83 714.411c3.702-66.85 31.56-131.808 79.819-180.12l137.4-137.373c14.86-14.861 40.855-14.861 55.69 0 14.86 14.861 16.725 38.99 0 55.69l-137.348 137.4a187.47 187.47 0 0 0-55.69 126.24c-1.864 46.422 14.835 89.115 46.396 120.675l40.855 40.855c31.56 31.56 74.253 48.286 120.674 46.421 46.421-1.838 92.843-22.291 126.24-55.69l137.4-137.4c14.862-14.86 40.856-14.86 55.69 0 14.862 14.862 14.862 40.856 0 55.69l-137.4 137.427c-48.285 48.259-113.27 76.117-180.118 79.82a5.645 5.645 0 0 0-7.405 0zm475.294-382.477c-11.133 0-18.563-3.702-27.832-12.997-14.86-14.861-14.86-40.855 0-55.69l115.082-115.108a187.47 187.47 0 0 0 55.716-126.267c1.838-46.395-14.861-89.114-46.421-120.674l-40.855-40.855c-64.985-64.959-176.364-61.257-246.915 9.294L478.266 278.108c-14.835 14.835-40.829 14.835-55.69 0-14.86-14.861-14.86-40.855 0-55.716l118.81-118.81C643.524 1.444 803.163-2.232 899.734 94.287l40.829 40.855c46.421 46.421 72.415 109.541 70.55 178.228-3.702 66.85-31.56 131.807-79.819 180.093L816.186 608.571c-7.43 7.43-18.563 11.133-27.858 12.997zm-332.327-1.864c-11.16 0-18.564-3.702-27.832-12.997-14.888-14.835-14.888-40.829 0-55.69l148.506-148.532c14.861-14.862 40.855-14.862 55.69 0 14.861 14.86 14.861 40.854 0 55.69L483.832 606.706c-7.404 7.43-18.563 11.159-27.831 12.997z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Es = [
  Ls
];
function Ps(e, t, n, a, o, l) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Es, 6);
}
const As = /* @__PURE__ */ ye(Ms, [["render", Ps]]), zs = R("loading"), Vs = /* @__PURE__ */ h("path", {
  d: "M784 902.4c9.6 19.2 6.4 41.6-12.8 54.4-19.2 9.6-41.6 3.2-51.2-12.8-9.6-19.2-6.4-41.6 12.8-54.4 16-12.8 38.4-8 51.2 12.8zM550.4 984c0 22.4-16 38.4-38.4 38.4s-38.4-16-38.4-38.4v-24c0-22.4 19.2-38.4 41.6-38.4 19.2 0 35.2 16 38.4 38.4v25.6h-3.2zm-240-43.2c-9.6 19.2-35.2 25.6-54.4 16-19.2-9.6-25.6-35.2-16-51.2l28.8-51.2c9.6-19.2 35.2-25.6 54.4-16s25.6 35.2 12.8 54.4l-25.6 48zM121.6 784c-19.2 9.6-41.6 3.2-54.4-16-9.6-19.2-6.4-41.6 12.8-54.4l76.8-44.8c19.2-9.6 41.6-3.2 54.4 16 9.6 19.2 3.2 41.6-16 54.4L121.6 784zM38.4 552C16 552 0 536 0 513.6s16-38.4 38.4-38.4H160c22.4 0 38.4 19.2 38.4 38.4 0 22.4-16 38.4-38.4 38.4H38.4zm44.8-241.6c-19.2-9.6-25.6-35.2-16-51.2 9.6-19.2 35.2-25.6 54.4-16L256 320c19.2 9.6 25.6 35.2 16 54.4s-35.2 25.6-54.4 16l-134.4-80zm160-185.6 92.8 160c9.6 19.2 35.2 25.6 54.4 12.8s25.6-35.2 12.8-54.4l-92.8-160C297.6 64 275.2 60.8 256 70.4c-16 12.8-22.4 33.6-12.8 54.4zM473.6 40c0-22.4 16-38.4 38.4-38.4s38.4 19.2 38.4 38.4v184c0 22.4-19.2 38.4-38.4 38.4-22.4 0-38.4-19.2-38.4-38.4V40zm240 43.2c9.6-19.2 35.2-25.6 54.4-16 19.2 9.6 25.6 35.2 16 51.2l-92.8 160c-9.6 19.2-35.2 25.6-54.4 16-19.2-9.6-25.6-35.2-12.8-54.4l89.6-156.8zm188.8 160-160 92.8c-19.2 9.6-25.6 35.2-16 54.4 12.8 19.2 35.2 25.6 54.4 12.8l160-92.8c19.2-9.6 25.6-35.2 12.8-54.4-9.6-16-32-25.6-51.2-12.8zM985.6 472c22.4 0 38.4 16 38.4 38.4s-16 38.4-38.4 38.4H800c-22.4 0-38.4-19.2-38.4-38.4 0-22.4 19.2-38.4 38.4-38.4h185.6z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Os = [
  Vs
];
function Hs(e, t, n, a, o, l) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Os, 6);
}
const Qe = /* @__PURE__ */ ye(zs, [["render", Hs]]), Rs = R("loading1"), Fs = /* @__PURE__ */ h("path", {
  d: "M520.665 64.564a29.244 29.244 0 0 0-7.071-.894c-16.211 0-29.35 13.14-29.35 29.35 0 15.83 12.538 28.696 28.223 29.293v.073c.375 0 .751-.014 1.127-.014 216.493 0 389.629 173.942 389.629 390.433 0 216.496-173.136 388.827-389.63 388.827s-389.63-172.333-389.63-388.829c0-.27.01-.536.01-.804h-.01c0-16.209-13.141-29.35-29.35-29.35s-29.35 13.139-29.35 29.35c0 .055.007.11.007.164-.001.214-.007.425-.007.64 0 247.609 200.722 448.331 448.33 448.331 247.607 0 448.33-200.722 448.33-448.33-.002-245.242-196.917-444.456-441.258-448.24z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ws = [
  Fs
];
function Ys(e, t, n, a, o, l) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ws, 6);
}
const js = /* @__PURE__ */ ye(Rs, [["render", Ys]]), Ks = R("location"), Us = /* @__PURE__ */ h("path", {
  d: "M512 971.487C259.938 971.487 52.513 764.062 52.513 512S259.938 52.513 512 52.513 971.487 259.938 971.487 512 764.062 971.487 512 971.487zm0-840.205c-210.051 0-380.718 170.667-380.718 380.718S301.95 892.718 512 892.718 892.718 722.05 892.718 512 722.05 131.282 512 131.282zm0 577.641c-107.651 0-196.923-89.272-196.923-196.923S404.349 315.077 512 315.077 708.923 404.349 708.923 512 619.651 708.923 512 708.923zm0-315.077c-65.641 0-118.154 52.513-118.154 118.154S446.36 630.154 512 630.154 630.154 577.64 630.154 512 577.64 393.846 512 393.846zm0-210.051c-21.005 0-39.385-18.38-39.385-39.385V39.385C472.615 18.379 490.995 0 512 0s39.385 18.38 39.385 39.385V144.41c0 21.005-18.38 39.385-39.385 39.385zM512 1024c-21.005 0-39.385-18.38-39.385-39.385V879.59c0-21.005 18.38-39.385 39.385-39.385s39.385 18.38 39.385 39.385v105.025c0 21.006-18.38 39.385-39.385 39.385zm472.615-472.615H879.59c-21.005 0-39.385-18.38-39.385-39.385s18.38-39.385 39.385-39.385h105.025c21.006 0 39.385 18.38 39.385 39.385s-18.38 39.385-39.385 39.385zm-840.205 0H39.385C18.379 551.385 0 533.005 0 512s18.38-39.385 39.385-39.385H144.41c21.005 0 39.385 18.38 39.385 39.385s-18.38 39.385-39.385 39.385z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Xs = [
  Us
];
function qs(e, t, n, a, o, l) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Xs, 6);
}
const Gs = /* @__PURE__ */ ye(Ks, [["render", qs]]), Zs = R("location2"), Js = /* @__PURE__ */ h("path", {
  d: "m530.286 1005.714-25.6-10.971c-36.572-14.629-58.515-25.6-73.143-36.572-102.4-84.114-164.572-135.314-193.829-171.885-43.885-51.2-76.8-91.429-106.057-142.629C95.086 577.83 76.8 504.686 76.8 431.543c0-117.029 43.886-226.743 128-307.2C285.257 43.886 394.971 0 512 0s226.743 43.886 310.857 128c84.114 80.457 128 190.171 128 307.2 0 73.143-18.286 146.286-54.857 212.114-25.6 43.886-58.514 91.429-106.057 142.629-29.257 32.914-87.772 84.114-197.486 171.886 0 0-7.314 7.314-18.286 10.971l-43.885 32.914zM497.37 874.057s3.658 3.657 14.629 7.314c3.657-3.657 7.314-3.657 10.971-7.314C621.714 797.257 683.886 742.4 705.83 716.8c40.228-47.543 69.485-87.771 91.428-128 25.6-47.543 40.229-102.4 40.229-157.257 0-87.772-32.915-168.229-95.086-230.4-58.514-58.514-142.629-91.429-230.4-91.429S340.114 142.63 277.943 204.8c-62.172 62.171-95.086 142.629-95.086 230.4 0 54.857 14.629 109.714 40.229 157.257 25.6 43.886 54.857 80.457 95.085 124.343 25.6 29.257 84.115 80.457 179.2 157.257zm18.286-248.686c-102.4 0-182.857-80.457-182.857-182.857s80.457-182.857 182.857-182.857 182.857 80.457 182.857 182.857-80.457 182.857-182.857 182.857zm0-256c-40.228 0-73.143 32.915-73.143 73.143s32.915 73.143 73.143 73.143 73.143-32.914 73.143-73.143-32.914-73.143-73.143-73.143z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Qs = [
  Js
];
function xs(e, t, n, a, o, l) {
  return u(), d("svg", {
    class: B(e.classes),
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
const ta = R("mask-close"), na = /* @__PURE__ */ h("path", {
  d: "M512 14.897C238.594 14.897 14.897 238.594 14.897 512S238.594 1009.103 512 1009.103 1009.103 785.406 1009.103 512 785.406 14.897 512 14.897zm207.126 646.234c16.57 16.57 16.57 41.425 0 57.995s-41.425 16.57-57.995 0L512 569.996l-149.13 149.13c-16.57 16.57-41.426 16.57-57.996 0s-16.57-41.425 0-57.995L454.004 512l-149.13-149.13c-16.57-16.57-16.57-41.426 0-57.996s41.425-16.57 57.995 0L512 454.004l149.13-149.13c16.57-16.57 41.426-16.57 57.996 0s16.57 41.425 0 57.995L569.996 512l149.13 149.13z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), oa = [
  na
];
function la(e, t, n, a, o, l) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, oa, 6);
}
const sa = /* @__PURE__ */ ye(ta, [["render", la]]);
R("message");
R("microphone");
const aa = R("minus"), ia = /* @__PURE__ */ h("path", {
  d: "M299.52 460.8h409.6c28.16 0 51.2 23.04 51.2 51.2s-23.04 51.2-51.2 51.2h-409.6c-28.16 0-51.2-23.04-51.2-51.2s23.04-51.2 51.2-51.2z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ra = [
  ia
];
function ua(e, t, n, a, o, l) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ra, 6);
}
const ca = /* @__PURE__ */ ye(aa, [["render", ua]]);
R("more-s");
const da = R("more-x"), fa = /* @__PURE__ */ h("path", {
  d: "M937.115 428.218c-43.442 0-80.679 37.237-80.679 80.679s37.237 80.679 80.68 80.679c43.442 0 80.678-37.237 80.678-80.679s-34.133-80.679-80.679-80.679m-428.218-52.751c-74.473 0-133.43 58.957-133.43 133.43s58.957 133.43 133.43 133.43 133.43-58.957 133.43-133.43-58.957-133.43-133.43-133.43M83.782 428.218c-43.443 0-80.679 37.237-80.679 80.679s34.133 80.679 80.679 80.679 80.679-37.237 80.679-80.679-37.237-80.679-80.68-80.679",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), pa = [
  fa
];
function ma(e, t, n, a, o, l) {
  return u(), d("svg", {
    class: B(e.classes),
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
const ga = R("notice"), ya = /* @__PURE__ */ h("path", {
  d: "M940.873 819.2h-85.334V430.933c0-192-153.6-345.6-341.333-345.6s-341.333 153.6-341.333 345.6V819.2H87.539V430.933C87.54 192 279.54 0 514.206 0s426.667 192 426.667 430.933V819.2zM514.633 1024c-68.267 0-132.267-29.867-174.934-85.333-17.066-17.067-12.8-42.667 4.267-59.734 17.067-12.8 46.933-12.8 59.733 8.534 29.867 34.133 68.267 51.2 110.934 51.2s81.066-17.067 106.666-51.2c12.8-17.067 42.667-21.334 59.734-8.534 17.066 12.8 21.333 42.667 8.533 59.734C646.899 994.133 582.899 1024 514.633 1024zm469.333-162.133h-12.8c-294.4-89.6-618.667-89.6-913.067 0-21.333 4.266-46.933-8.534-55.466-29.867-8.534-21.333 4.266-46.933 29.866-51.2 311.467-93.867 652.8-89.6 964.267 0 21.333 8.533 34.133 29.867 29.867 51.2-8.534 21.333-25.6 29.867-42.667 29.867z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), va = [
  ya
];
function $a(e, t, n, a, o, l) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1027 1024",
    role: "presentation"
  }, va, 6);
}
const ba = /* @__PURE__ */ ye(ga, [["render", $a]]);
R("order");
R("people");
const ka = R("photograph"), wa = /* @__PURE__ */ h("path", {
  d: "M570.514 789.943c-119.954 0-219.428-99.474-219.428-219.429s99.474-219.428 219.428-219.428 219.429 99.474 219.429 219.428-99.474 219.429-219.429 219.429zm0-351.086c-73.143 0-131.657 58.514-131.657 131.657s58.514 131.657 131.657 131.657 131.657-58.514 131.657-131.657-58.514-131.657-131.657-131.657zM877.714 1024h-614.4C117.03 1024 0 906.971 0 760.686V380.343c0-146.286 117.029-263.314 263.314-263.314h32.183c0-2.926 2.926-8.778 2.926-11.703C315.977 43.886 374.49 0 438.857 0h263.314c70.218 0 128.732 49.737 143.36 117.029h32.183c146.286 0 263.315 117.028 263.315 263.314v380.343C1141.029 906.97 1024 1024 877.714 1024zm-614.4-819.2c-96.548 0-175.543 78.994-175.543 175.543v380.343c0 96.548 78.995 175.543 175.543 175.543h614.4c96.549 0 175.543-78.995 175.543-175.543V380.343c0-96.549-78.994-175.543-175.543-175.543H819.2c-32.183 0-58.514-26.331-58.514-58.514S734.354 87.77 702.17 87.77H438.857c-26.331 0-49.737 17.555-55.588 40.96-2.926 5.852-2.926 11.703-2.926 17.555 0 32.183-26.332 58.514-58.514 58.514h-58.515zm-87.771 160.914a73.143 73.143 0 1 0 146.286 0 73.143 73.143 0 1 0-146.286 0Z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ca = [
  wa
];
function Sa(e, t, n, a, o, l) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1141 1024",
    role: "presentation"
  }, Ca, 6);
}
const Ta = /* @__PURE__ */ ye(ka, [["render", Sa]]);
R("play-circle-fill");
R("play-double-back");
R("play-double-forward");
R("play-start");
R("play-stop");
const Na = R("plus"), Da = /* @__PURE__ */ h("path", {
  d: "M345.6 460.8h409.6q51.2 0 51.2 51.2t-51.2 51.2H345.6q-51.2 0-51.2-51.2t51.2-51.2zM550.4 256q51.2 0 51.2 51.2v409.6q0 51.2-51.2 51.2t-51.2-51.2V307.2q0-51.2 51.2-51.2z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ia = [
  Da
];
function _a(e, t, n, a, o, l) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ia, 6);
}
const Ba = /* @__PURE__ */ ye(Na, [["render", _a]]);
R("poweroff-circle-fill");
const Ma = R("rect-down"), La = /* @__PURE__ */ h("path", {
  d: "M515.072 778.24c-14.336 0-28.672-5.632-39.936-16.384L69.12 356.864c-22.016-22.016-22.016-57.856 0-79.872s57.856-22.016 79.872 0L515.584 642.56 880.64 275.968c22.016-22.016 57.856-22.016 79.872 0s22.016 57.856 0 79.872L555.008 762.368c-10.752 10.752-25.6 15.872-39.936 15.872z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ea = [
  La
];
function Pa(e, t, n, a, o, l) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ea, 6);
}
const Aa = /* @__PURE__ */ ye(Ma, [["render", Pa]]);
R("rect-left");
R("rect-right");
const za = R("rect-up"), Va = /* @__PURE__ */ h("path", {
  d: "M920.576 778.24c-14.336 0-28.672-5.632-39.936-16.384L515.072 395.264 148.48 760.832c-22.016 22.016-57.856 22.016-79.872 0s-22.016-57.856 0-79.872l406.528-405.504c22.016-22.016 57.856-22.016 79.872 0l405.504 406.528c22.016 22.016 22.016 57.856 0 79.872-11.264 11.264-25.6 16.384-39.936 16.384z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Oa = [
  Va
];
function Ha(e, t, n, a, o, l) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Oa, 6);
}
const Ra = /* @__PURE__ */ ye(za, [["render", Ha]]);
R("refresh");
const Fa = R("refresh2"), Wa = /* @__PURE__ */ h("path", {
  d: "M771.938 315.077h199.55L958.358 469.99 758.81 364.964c-13.128-7.877-18.38-23.63-10.502-36.759 2.625-7.877 13.128-13.128 23.63-13.128zm-535.63 393.846H44.636L57.764 554.01l191.672 105.026c13.128 7.877 18.38 23.63 10.502 36.759-5.25 7.877-15.753 13.128-23.63 13.128zM509.374 1024C257.313 1024 44.636 845.456 5.251 596.02 0 575.016 15.754 556.637 36.76 551.386c21.005-2.626 42.01 10.502 44.636 31.507 34.133 210.052 215.302 362.339 427.98 362.339 191.671 0 362.338-128.657 417.476-312.452 5.252-21.005 28.882-34.133 49.887-26.256 21.006 5.251 34.134 28.882 26.257 49.887C937.354 871.713 735.179 1024 509.375 1024zm467.364-551.385c-18.379 0-36.759-13.128-39.384-34.133C903.22 231.056 722.05 78.77 509.374 78.77c-191.671 0-362.338 128.657-414.85 312.452-5.252 21.005-28.883 34.133-49.888 26.256-21.005-5.251-34.133-28.882-26.257-49.887C81.395 152.287 283.57 0 509.374 0c252.062 0 464.739 178.544 504.123 427.98 2.626 21.005-10.502 42.01-31.507 44.635h-5.252z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ya = [
  Wa
];
function ja(e, t, n, a, o, l) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ya, 6);
}
const Ka = /* @__PURE__ */ ye(Fa, [["render", ja]]), Ua = R("retweet"), Xa = /* @__PURE__ */ h("path", {
  d: "M136 552h63.6c4.4 0 8-3.6 8-8V288.7h528.6v72.6c0 1.9.6 3.7 1.8 5.2 2.9 3.6 8.1 4.3 11.7 1.4L893 255.4c4.3-5 3.6-10.3 0-13.2L749.7 129.8c-1.5-1.2-3.3-1.8-5.2-1.8-4.6 0-8.4 3.8-8.4 8.4V209H199.7c-39.5 0-71.7 32.2-71.7 71.8V544c0 4.4 3.6 8 8 8zm752-80h-63.6c-4.4 0-8 3.6-8 8v255.3H287.8v-72.6c0-1.9-.6-3.7-1.8-5.2-2.9-3.6-8.1-4.3-11.7-1.4L131 768.6c-4.3 5-3.6 10.3 0 13.2l143.3 112.4c1.5 1.2 3.3 1.8 5.2 1.8 4.6 0 8.4-3.8 8.4-8.4V815h536.6c39.5 0 71.7-32.2 71.7-71.8V480c-.2-4.4-3.8-8-8.2-8z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), qa = [
  Xa
];
function Ga(e, t, n, a, o, l) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, qa, 6);
}
const Za = /* @__PURE__ */ ye(Ua, [["render", Ga]]), Ja = R("right"), Qa = /* @__PURE__ */ h("path", {
  d: "M381.262 1005.566c-16.132 21.51-45.708 24.198-67.217 8.066-21.51-16.132-24.198-45.708-8.066-67.217C413.526 806.604 518.384 666.792 625.932 529.67c8.066-10.755 8.066-24.198 0-34.953C518.384 354.906 413.526 215.094 305.979 77.972c-16.132-21.51-10.755-51.085 8.066-67.217C335.555-5.377 365.13 0 381.262 18.82c107.547 142.5 212.405 282.311 319.953 419.434 34.952 43.019 34.952 104.858 0 150.566-107.548 139.811-212.406 279.622-319.953 416.745",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), xa = [
  Qa
];
function ei(e, t, n, a, o, l) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, xa, 6);
}
const qt = /* @__PURE__ */ ye(Ja, [["render", ei]]);
R("s-follow");
R("scan");
R("scan2");
R("screen-little");
R("search");
R("search2");
const ti = R("service"), ni = /* @__PURE__ */ h("path", {
  d: "M1024 657.723H905.846v-126.03c0-228.431-177.23-413.54-393.846-413.54s-393.846 185.109-393.846 413.54v126.03H0v-126.03C0 236.307 228.43 0 512 0s512 236.308 512 531.692v126.031zM196.923 866.462C86.646 866.462 0 779.815 0 669.538s86.646-196.923 196.923-196.923 196.923 86.647 196.923 196.923S307.2 866.462 196.923 866.462zm0-275.693c-43.323 0-78.77 35.446-78.77 78.77s35.447 78.769 78.77 78.769 78.77-35.446 78.77-78.77-35.447-78.769-78.77-78.769zm630.154 275.693c-110.277 0-196.923-86.647-196.923-196.924S716.8 472.615 827.077 472.615 1024 559.262 1024 669.538s-86.646 196.924-196.923 196.924zm0-275.693c-43.323 0-78.77 35.446-78.77 78.77s35.447 78.769 78.77 78.769 78.77-35.446 78.77-78.77-35.447-78.769-78.77-78.769zm-149.662 429.293c-23.63 0-47.261-15.754-55.138-43.324-7.877-31.507 7.877-63.015 39.385-74.83 102.4-31.508 189.046-102.4 236.307-196.923 15.754-27.57 51.2-39.385 78.77-23.631s39.384 51.2 23.63 78.77c-63.015 122.091-177.23 216.614-307.2 256-3.938 3.938-11.815 3.938-15.754 3.938z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), oi = [
  ni
];
function li(e, t, n, a, o, l) {
  return u(), d("svg", {
    class: B(e.classes),
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
const ai = R("star-fill-n"), ii = /* @__PURE__ */ h("path", {
  d: "M1047.135 361.244 722.87 312.89 577.802 22.756c-2.844-8.534-11.378-14.223-19.911-17.067-19.911-8.533-45.511-2.845-54.045 17.067L358.78 312.889 34.513 358.4c-8.533 0-17.067 5.689-22.755 11.378-17.067 17.066-14.223 42.666 0 56.889l233.244 227.555-54.044 321.422c-2.845 8.534 0 17.067 2.844 25.6 11.378 19.912 34.133 28.445 54.044 17.067L537.98 867.556l290.133 150.755c8.533 2.845 17.067 5.689 25.6 2.845 22.756-2.845 36.978-25.6 34.133-45.512l-54.044-321.422 233.244-227.555c5.69-5.69 11.378-14.223 11.378-22.756 5.69-19.911-8.533-39.822-31.289-42.667z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ri = [
  ii
];
function ui(e, t, n, a, o, l) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1081 1024",
    role: "presentation"
  }, ri, 6);
}
const dn = /* @__PURE__ */ ye(ai, [["render", ui]]);
R("star-fill");
R("star-fill1");
R("star-fill2");
R("star-n");
R("star");
R("star1");
R("star11");
R("star2");
const ci = R("success"), di = /* @__PURE__ */ h("path", {
  d: "M762.311 391.396C655.36 466.489 566.613 552.96 491.52 659.91c-20.48 27.307-61.44 27.307-79.644-2.275-34.134-52.338-72.818-91.023-125.156-125.156-25.031-15.929-9.102-54.613 20.48-50.062 56.889 11.378 100.124 34.133 143.36 72.818 77.369-93.298 175.218-166.116 286.72-213.903 27.307-9.102 50.062 31.858 25.031 50.063M512 1024C229.831 1024 0 794.169 0 512S229.831 0 512 0s512 229.831 512 512-229.831 512-512 512zm0-955.733C266.24 68.267 68.267 266.24 68.267 512S266.24 955.733 512 955.733 955.733 757.76 955.733 512 757.76 68.267 512 68.267z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), fi = [
  di
];
function pi(e, t, n, a, o, l) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, fi, 6);
}
const mi = /* @__PURE__ */ ye(ci, [["render", pi]]), hi = R("tips"), gi = /* @__PURE__ */ h("path", {
  d: "M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512zm0-938.667c-234.667 0-426.667 192-426.667 426.667s192 426.667 426.667 426.667 426.667-192 426.667-426.667S746.667 85.333 512 85.333zM448 320a64 64 0 1 0 128 0 64 64 0 1 0-128 0Zm-17.067 149.333h51.2c12.8 0 21.334 8.534 21.334 21.334v8.533c0 12.8-8.534 21.333-21.334 21.333h-51.2c-12.8 0-25.6-12.8-25.6-25.6s12.8-25.6 25.6-25.6zm51.2 0H524.8c25.6 0 51.2 21.334 51.2 51.2v8.534L537.6 755.2c0 8.533-8.533 17.067-21.333 17.067H473.6c-25.6 0-51.2-21.334-51.2-51.2v-8.534L460.8 486.4c4.267-8.533 12.8-17.067 21.333-17.067zm8.534 251.734h76.8c12.8 0 25.6 12.8 25.6 25.6s-12.8 25.6-25.6 25.6h-76.8c-12.8 0-21.334-8.534-21.334-21.334v-12.8c4.267-12.8 12.8-17.066 21.334-17.066z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), yi = [
  gi
];
function vi(e, t, n, a, o, l) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, yi, 6);
}
const On = /* @__PURE__ */ ye(hi, [["render", vi]]), $i = R("top"), bi = /* @__PURE__ */ h("path", {
  d: "M136.533 540.444c-11.377 0-25.6-5.688-34.133-17.066-14.222-19.911-11.378-45.511 8.533-59.734L477.867 179.2c19.91-14.222 45.51-11.378 59.733 8.533s11.378 45.511-8.533 59.734L162.133 531.91c-5.689 5.689-14.222 8.533-25.6 8.533zm745.245 0c-8.534 0-17.067-2.844-25.6-8.533L489.244 247.467c-19.91-14.223-22.755-42.667-8.533-59.734 14.222-19.91 42.667-22.755 59.733-8.533l366.934 284.444c19.91 14.223 22.755 42.667 8.533 59.734-8.533 11.378-19.911 17.066-34.133 17.066zM512 1024c-22.756 0-42.667-19.911-42.667-42.667v-768c0-22.755 19.911-42.666 42.667-42.666s42.667 19.91 42.667 42.666v768c0 22.756-19.911 42.667-42.667 42.667zM884.622 85.333h-742.4c-22.755 0-42.666-19.91-42.666-42.666S119.466 0 142.222 0h742.4c22.756 0 42.667 19.911 42.667 42.667s-19.911 42.666-42.667 42.666z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ki = [
  bi
];
function wi(e, t, n, a, o, l) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ki, 6);
}
const Ci = /* @__PURE__ */ ye($i, [["render", wi]]), Si = R("triangle-down"), Ti = /* @__PURE__ */ h("path", {
  d: "m573.056 752 308.8-404.608A76.8 76.8 0 0 0 820.736 224H203.232a76.8 76.8 0 0 0-61.056 123.392L450.976 752a76.8 76.8 0 0 0 122.08 0z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ni = [
  Ti
];
function Di(e, t, n, a, o, l) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ni, 6);
}
const Ii = /* @__PURE__ */ ye(Si, [["render", Di]]), _i = R("triangle-up"), Bi = /* @__PURE__ */ h("path", {
  d: "m573.056 272 308.8 404.608A76.8 76.8 0 0 1 820.736 800H203.232a76.8 76.8 0 0 1-61.056-123.392L450.976 272a76.8 76.8 0 0 1 122.08 0z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Mi = [
  Bi
];
function Li(e, t, n, a, o, l) {
  return u(), d("svg", {
    class: B(e.classes),
    style: L(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Mi, 6);
}
const Ei = /* @__PURE__ */ ye(_i, [["render", Li]]);
R("uploader");
R("voice");
const { componentName: Pi, create: Ai } = Y("button"), zi = Ai({
  components: { Loading: Qe },
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
    const { type: n, size: a, shape: o, disabled: l, loading: s, color: i, plain: r, block: p } = he(e), f = (g) => {
      !s.value && !l.value && t("click", g);
    }, v = N(() => {
      const g = Pi;
      return {
        [g]: !0,
        [`${g}--${n.value}`]: n.value,
        [`${g}--${a.value}`]: a.value,
        [`${g}--${o.value}`]: o.value,
        [`${g}--plain`]: r.value,
        [`${g}--block`]: p.value,
        [`${g}--disabled`]: l.value,
        [`${g}--loading`]: s.value
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
  for (const [a, o] of t)
    n[a] = o;
  return n;
}, Vi = { class: "nut-button__wrap" };
function Oi(e, t, n, a, o, l) {
  const s = j("Loading");
  return u(), d("view", {
    class: B(e.classes),
    style: L(e.getStyle),
    onClick: t[0] || (t[0] = (...i) => e.handleClick && e.handleClick(...i))
  }, [
    h("view", Vi, [
      e.loading ? (u(), x(s, {
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
const Xe = /* @__PURE__ */ K(zi, [["render", Oi]]);
function Gt() {
  return Fe().proxy.$router || null;
}
const _e = (e) => {
  if (e !== void 0)
    return isNaN(Number(e)) ? String(e) : `${e}px`;
}, { componentName: Hi, create: Ri } = Y("cell"), Fi = Ri({
  components: { Right: qt },
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
      const i = Hi;
      return {
        [i]: !0,
        [`${i}--clickable`]: e.isLink || e.to,
        [`${i}--center`]: e.center,
        [`${i}--large`]: e.size == "large"
      };
    }), a = Gt(), o = N(() => ({
      borderRadius: _e(e.roundRadius)
    })), l = N(() => ({
      textAlign: e.descTextAlign
    }));
    return {
      handleClick: (i) => {
        t("click", i), e.to && a ? a[e.replace ? "replace" : "push"](e.to) : e.url && (e.replace ? location.replace(e.url) : location.href = e.url);
      },
      classes: n,
      baseStyle: o,
      descStyle: l
    };
  }
}), Wi = {
  key: 0,
  class: "nut-cell__icon"
}, Yi = {
  key: 1,
  class: "nut-cell__title"
}, ji = { class: "title" }, Ki = { class: "nut-cell__title-desc" };
function Ui(e, t, n, a, o, l) {
  const s = j("Right");
  return u(), d("view", {
    class: B(e.classes),
    style: L(e.baseStyle),
    onClick: t[0] || (t[0] = (...i) => e.handleClick && e.handleClick(...i))
  }, [
    D(e.$slots, "default", {}, () => [
      e.$slots.icon ? (u(), d("view", Wi, [
        D(e.$slots, "icon")
      ])) : S("", !0),
      e.title || e.subTitle || e.$slots.title ? (u(), d("view", Yi, [
        e.subTitle ? (u(), d(ee, { key: 0 }, [
          D(e.$slots, "title", {}, () => [
            h("view", ji, _(e.title), 1)
          ]),
          h("view", Ki, _(e.subTitle), 1)
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
        e.isLink || e.to ? (u(), x(s, {
          key: 0,
          class: "nut-cell__link"
        })) : S("", !0)
      ])
    ])
  ], 6);
}
const Hn = /* @__PURE__ */ K(Fi, [["render", Ui]]), { create: Xi } = Y("cell-group"), qi = Xi({
  props: {
    title: { type: String, default: "" },
    desc: { type: String, default: "" }
  }
}), Gi = { class: "nut-cell-group" }, Zi = {
  key: 1,
  class: "nut-cell-group__title"
}, Ji = {
  key: 3,
  class: "nut-cell-group__desc"
}, Qi = { class: "nut-cell-group__wrap" };
function xi(e, t, n, a, o, l) {
  return u(), d("view", Gi, [
    e.$slots.title ? D(e.$slots, "title", { key: 0 }) : e.title ? (u(), d("view", Zi, _(e.title), 1)) : S("", !0),
    e.$slots.desc ? D(e.$slots, "desc", { key: 2 }) : e.desc ? (u(), d("view", Ji, _(e.desc), 1)) : S("", !0),
    h("view", Qi, [
      D(e.$slots, "default")
    ])
  ]);
}
const Rn = /* @__PURE__ */ K(qi, [["render", xi]]);
let st = 0;
const fn = "nut-overflow-hidden", er = (e) => [() => {
  if (e())
    try {
      !st && un.classList.add(fn), st++;
    } catch (a) {
      console.warn("[NutUI] <useLockScroll>", a);
    }
}, () => {
  if (e() && st)
    try {
      st--, !st && un.classList.remove(fn);
    } catch (a) {
      console.warn("[NutUI] <unlock>", a);
    }
}], { componentName: tr, create: nr } = Y("overlay"), or = nr({
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
    const [n, a] = er(() => e.lockScroll), o = N(() => ({
      [tr]: !0,
      [e.overlayClass]: !0
    })), l = N(() => G({
      transitionDuration: `${e.duration}s`,
      zIndex: e.zIndex
    }, e.overlayStyle));
    return Ht(() => {
      e.visible ? n() : a();
    }), { classes: o, style: l, onClick: (i) => {
      t("click", i), e.closeOnClickOverlay && t("update:visible", !1);
    } };
  }
});
function lr(e, t, n, a, o, l) {
  return u(), x(Rt, { name: "overlay-fade" }, {
    default: te(() => [
      Se(h("view", {
        class: B(e.classes),
        style: L(e.style),
        onClick: t[0] || (t[0] = Ne((...s) => e.onClick && e.onClick(...s), ["stop"]))
      }, [
        D(e.$slots, "default")
      ], 6), [
        [De, e.visible]
      ])
    ]),
    _: 3
  });
}
const ht = /* @__PURE__ */ K(or, [["render", lr]]), gt = {
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
}, { componentName: sr, create: ar } = Y("popup"), Fn = 2e3;
let pn = Fn;
const ir = ar({
  components: {
    NutOverlay: ht,
    Close: Dt
  },
  props: gt,
  emits: ["clickPop", "clickCloseIcon", "open", "close", "opened", "closed", "clickOverlay", "update:visible"],
  setup(e, { emit: t }) {
    const n = ue({
      zIndex: e.zIndex,
      showSlot: !0,
      closed: e.closeable
    }), a = N(() => ({
      [sr]: !0,
      round: e.round,
      [`nut-popup--${e.position}`]: !0,
      [`nut-popup--${e.position}--safebottom`]: e.position === "bottom" && e.safeAreaInsetBottom,
      [e.popClass]: !0
    })), o = N(() => G({
      zIndex: n.zIndex,
      transitionDuration: `${e.duration}s`
    }, e.style)), l = N(() => e.transition ? e.transition : `nut-popup-slide-${e.position}`), s = () => {
      e.zIndex !== Fn && (pn = Number(e.zIndex)), t("update:visible", !0), n.zIndex = ++pn, e.destroyOnClose && (n.showSlot = !0), t("open");
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
        e.visible ? s() : i();
      }
    ), Ht(() => {
      n.closed = e.closeable;
    }), ce(G({}, he(n)), {
      popStyle: o,
      transitionName: l,
      classes: a,
      onClick: r,
      onClickCloseIcon: p,
      onClickOverlay: f,
      onOpened: v,
      onClosed: y
    });
  }
});
function rr(e, t, n, a, o, l) {
  const s = j("nut-overlay"), i = j("Close");
  return u(), x(Lo, {
    to: e.teleport,
    disabled: !e.teleportDisable
  }, [
    e.overlay ? (u(), x(s, dt({
      key: 0,
      visible: e.visible,
      "close-on-click-overlay": e.closeOnClickOverlay,
      "z-index": e.zIndex,
      "lock-scroll": e.lockScroll,
      duration: e.duration,
      "overlay-class": e.overlayClass,
      "overlay-style": e.overlayStyle
    }, e.$attrs, { onClick: e.onClickOverlay }), null, 16, ["visible", "close-on-click-overlay", "z-index", "lock-scroll", "duration", "overlay-class", "overlay-style", "onClick"])) : S("", !0),
    le(Rt, {
      name: e.transitionName,
      onAfterEnter: e.onOpened,
      onAfterLeave: e.onClosed
    }, {
      default: te(() => [
        Se(h("view", {
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
const Le = /* @__PURE__ */ K(ir, [["render", rr]]), ur = (e) => ({
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
    }, o = (i) => (i = i.replace(i.charAt(0), i.charAt(0).toLocaleLowerCase()), i.replace(/([a-z])([A-Z])/g, (r, p, f) => p + "-" + f.toLowerCase())), l = (i) => {
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
    }, s = N(() => l(t.themeVars));
    return () => {
      var i;
      return we(
        t.tag,
        {
          class: `nut-theme-${t.theme}`,
          style: s.value
        },
        (i = n.default) == null ? void 0 : i.call(n)
      );
    };
  }
}), { create: cr } = Y("config-provider"), dr = cr(ur("div")), { componentName: fr, create: pr } = Y("image"), mr = pr({
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
      slotLoding: Je().loading,
      slotError: Je().error
    }), a = N(() => {
      const g = fr;
      return {
        [g]: !0,
        [`${g}-round`]: e.round
      };
    }), o = P(null), l = P(!1), s = P(null), i = () => {
      const g = {
        threshold: [0],
        rootMargin: "0px"
      };
      o.value = new IntersectionObserver((b) => {
        b.forEach((k) => {
          k.isIntersecting && (l.value = !0, o.value.disconnect());
        });
      }, g), s.value && o.value.observe(s.value);
    };
    ve(() => {
      e.lazyLoad && i();
    }), Ft(() => {
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
    return ce(G({}, he(n)), { imageClick: y, classes: a, styles: p, stylebox: r, error: v, load: f, show: l, imgRef: s });
  }
}), hr = ["src", "date-src", "alt"], gr = {
  key: 0,
  class: "nut-img-loading"
}, yr = {
  key: 1,
  class: "nut-img-error"
};
function vr(e, t, n, a, o, l) {
  const s = j("Image"), i = j("ImageError");
  return u(), d("div", {
    class: B(e.classes),
    style: L(e.stylebox),
    onClick: t[2] || (t[2] = (...r) => e.imageClick && e.imageClick(...r))
  }, [
    h("img", {
      ref: "imgRef",
      class: "nut-img",
      src: e.lazyLoad ? e.show ? e.src : void 0 : e.src,
      "date-src": e.lazyLoad ? e.show ? void 0 : e.src : void 0,
      alt: e.alt,
      style: L(e.styles),
      onLoad: t[0] || (t[0] = (...r) => e.load && e.load(...r)),
      onError: t[1] || (t[1] = (...r) => e.error && e.error(...r))
    }, null, 44, hr),
    e.loading ? (u(), d("div", gr, [
      e.slotLoding ? S("", !0) : (u(), x(s, {
        key: 0,
        width: "16px",
        height: "20px",
        name: "image"
      })),
      D(e.$slots, "loading")
    ])) : S("", !0),
    e.isError && !e.loading ? (u(), d("div", yr, [
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
const $r = /* @__PURE__ */ K(mr, [["render", vr]]), { create: br } = Y("layout"), kr = br({}), Wn = Symbol("nut-layout"), { create: wr } = Y("col"), Cr = wr({
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
    const t = "nut-col", n = Be(Wn), a = N(() => ({
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
function Sr(e, t, n, a, o, l) {
  return u(), d("view", {
    class: B(e.classes),
    style: L(e.style)
  }, [
    D(e.$slots, "default")
  ], 6);
}
const Tr = /* @__PURE__ */ K(Cr, [["render", Sr]]), { create: Nr } = Y("row"), Dr = Nr({
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
    Me(Wn, e.gutter);
    const n = (o, l) => o ? l ? `nut-row-${o}-${l}` : "" : `nut-row-${l}`;
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
function Ir(e, t, n, a, o, l) {
  return u(), d("view", {
    class: B(e.classes)
  }, [
    D(e.$slots, "default")
  ], 2);
}
const _r = /* @__PURE__ */ K(Dr, [["render", Ir]]), Br = /scroll|auto|overlay/i, Yn = window;
function Mr(e) {
  return e.tagName !== "HTML" && e.tagName !== "BODY" && e.nodeType === 1;
}
function zt(e, t = Yn) {
  let n = e;
  for (; n && n !== t && Mr(n); ) {
    const { overflowY: a } = window.getComputedStyle(n);
    if (Br.test(a))
      return n;
    n = n.parentNode;
  }
  return t;
}
function jn(e, t = Yn) {
  const n = P();
  return ve(() => {
    e.value && (n.value = zt(e.value, t));
  }), n;
}
function Lr(e) {
  return e === window;
}
const Oe = (e) => {
  const t = Tn(e);
  if (Lr(t)) {
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
}, { create: Er } = Y("sticky"), Pr = Er({
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
    }), l = N(() => e.position === "top" ? Number(e.top) : Number(e.bottom)), s = N(() => o.fixed ? { height: `${o.height}px` } : {}), i = N(() => o.fixed ? {
      [e.position]: `${l.value}px`,
      height: `${o.height}px`,
      width: `${o.width}px`,
      transform: o.transform ? `translate3d(0, ${o.transform}px, 0)` : void 0,
      position: o.fixed ? "fixed" : void 0,
      zIndex: Number(e.zIndex)
    } : {}), r = () => {
      const p = e.container;
      if (!n.value && !p)
        return;
      const f = Oe(n), v = a.value, y = Oe(v), g = Oe(p);
      o.height = f.height, o.width = f.width;
      const b = () => {
        let c = !1;
        if (e.position === "top")
          c = p ? l.value > f.top && g.bottom > 0 : l.value > f.top;
        else {
          const $ = document.documentElement.clientHeight;
          c = p ? g.bottom > 0 && $ - l.value - y.height > g.top : $ - l.value < f.bottom;
        }
        return c;
      }, k = () => {
        if (p)
          if (e.position === "top") {
            const c = g.bottom - l.value - y.height;
            return c < 0 ? c : 0;
          } else {
            const c = document.documentElement.clientHeight, $ = g.bottom - (c - l.value);
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
      r(), zt(n.value).addEventListener("scroll", r, !0);
    }), je(() => {
      zt(n.value).removeEventListener("scroll", r);
    }), { rootRef: n, rootStyle: s, stickyRef: a, stickyStyle: i };
  }
});
function Ar(e, t, n, a, o, l) {
  return u(), d("div", {
    ref: "rootRef",
    class: "nut-sticky",
    style: L(e.rootStyle)
  }, [
    h("div", {
      ref: "stickyRef",
      class: "nut-sticky__box",
      style: L(e.stickyStyle)
    }, [
      D(e.$slots, "default")
    ], 4)
  ], 4);
}
const Kn = /* @__PURE__ */ K(Pr, [["render", Ar]]), { create: zr } = Y("divider"), Vr = zr({
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
      const a = "nut-divider";
      return e.direction === "horizontal" ? {
        [a]: !0,
        [`${a}-center`]: t.slots.default,
        [`${a}-left`]: e.contentPosition === "left",
        [`${a}-right`]: e.contentPosition === "right",
        [`${a}-dashed`]: e.dashed,
        [`${a}-hairline`]: e.hairline
      } : {
        [a]: !0,
        [`${a}-vertical`]: e.direction === "vertical"
      };
    }) };
  }
});
function Or(e, t, n, a, o, l) {
  return u(), d("view", {
    class: B(e.classes)
  }, [
    e.direction === "horizontal" ? D(e.$slots, "default", { key: 0 }) : S("", !0)
  ], 2);
}
const Hr = /* @__PURE__ */ K(Vr, [["render", Or]]);
function Rr(e, t) {
  const n = [], a = (o) => {
    Array.isArray(o) && o.forEach((l) => {
      var s;
      if (Po(l)) {
        if (t) {
          if (l.type && l.type.name === t) {
            n.push(l);
            return;
          }
        } else
          n.push(l);
        (s = l.component) != null && s.subTree && a(l.component.subTree.children), l.children && a(l.children);
      }
    });
  };
  return a(e), n;
}
function Fr(e, t, n) {
  const a = Rr(e.subTree.children, n);
  t.sort((o, l) => a.indexOf(o.vnode) - a.indexOf(l.vnode));
}
function Wr(e, t) {
  const n = Eo([]), a = Fe(), o = (i) => {
    i.proxy && (n.push(an(i)), Fr(a, n, t));
  }, l = (i) => {
    n.splice(n.indexOf(an(i)), 1);
  }, s = Object.assign;
  return (i) => (Me(
    e,
    s(
      {
        add: o,
        remove: l,
        internalChildren: n
      },
      i
    )
  ), {
    internalChildren: n
  });
}
const { componentName: Yr } = Y("grid"), Un = Symbol("grid"), jr = {
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
}, Kr = {
  props: jr,
  setup(e, { slots: t }) {
    Wr(Un, "NutGridItem")({ props: e });
    const n = N(() => {
      const o = Yr;
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
}, { create: Ur } = Y("grid"), Xr = Ur(Kr);
function qr(e) {
  const t = Be(e, null);
  if (t) {
    const n = Fe(), { add: a, remove: o, internalChildren: l } = t;
    a(n), je(() => o(n));
    const s = N(() => l.indexOf(n));
    return {
      parent: t,
      index: s
    };
  }
  return {
    parent: null,
    index: P(-1)
  };
}
const { create: Gr, componentName: mn } = Y("grid-item"), Zr = Gr({
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
    const n = qr(Un);
    if (!n.parent)
      return {};
    const a = n.index, o = n.parent.props, l = N(() => ({
      [mn]: !0
    })), s = N(() => {
      const f = {
        flexBasis: `${100 / +o.columnNum}%`
      };
      return o.square ? f.paddingTop = `${100 / +o.columnNum}%` : o.gutter && (f.paddingRight = _e(o.gutter), a.value >= +o.columnNum && (f.marginTop = _e(o.gutter))), f;
    }), i = N(() => {
      const f = `${mn}__content`;
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
    }), r = Gt();
    return {
      rootClass: l,
      rootStyle: s,
      contentClass: i,
      handleClick: (f) => {
        t("click", f), e.to && r ? r[e.replace ? "replace" : "push"](e.to) : e.url && (e.replace ? location.replace(e.url) : location.href = e.url);
      }
    };
  }
}), Jr = { class: "nut-grid-item__text" };
function Qr(e, t, n, a, o, l) {
  return u(), d("view", {
    class: B(e.rootClass),
    style: L(e.rootStyle),
    onClick: t[0] || (t[0] = (...s) => e.handleClick && e.handleClick(...s))
  }, [
    h("view", {
      class: B(e.contentClass)
    }, [
      D(e.$slots, "default"),
      h("view", Jr, [
        e.text ? (u(), d(ee, { key: 0 }, [
          ge(_(e.text), 1)
        ], 64)) : D(e.$slots, "text", { key: 1 })
      ])
    ], 2)
  ], 6);
}
const xr = /* @__PURE__ */ K(Zr, [["render", Qr]]), { create: eu, componentName: Ze } = Y("space"), tu = eu({
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
          return !(y && (y.type === Ao || y.type === ee && ((g = y.children) == null ? void 0 : g.length) === 0 || y.type === zo && y.children.trim() === ""));
        }
      );
    }, { direction: l, wrap: s, fill: i, justify: r, align: p } = e;
    return () => {
      var y;
      const f = o((y = t.default) == null ? void 0 : y.call(t)), v = () => f.map((g, b) => we(
        "div",
        {
          class: `${Ze}-item`,
          style: a(b === f.length - 1)
        },
        g
      ));
      return we(
        "div",
        {
          class: [
            Ze,
            l && `${Ze}-${l}`,
            p && `${Ze}-align-${p}`,
            r && `${Ze}-justify-${r}`,
            s && `${Ze}-wrap`,
            i && `${Ze}-fill`
          ]
        },
        v()
      );
    };
  }
}), { componentName: nu, create: ou } = Y("navbar"), lu = ou({
  components: { Left: Xt },
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
    const { border: n, fixed: a, safeAreaInsetTop: o, placeholder: l } = he(e), s = P("auto"), i = P(), r = N(() => {
      const k = nu;
      return {
        [k]: !0,
        [`${k}--border`]: n.value,
        [`${k}--fixed`]: a.value,
        [`${k}--safe-area-inset-top`]: o.value
      };
    }), p = N(() => a.value && l.value ? {
      height: s.value
    } : {}), f = () => {
      if (i.value) {
        const k = i.value.getBoundingClientRect();
        s.value = `${k.height}px`;
      }
    };
    return ve(() => {
      a.value && l.value && Te(() => {
        f();
      });
    }), {
      navbarRef: i,
      rootStyle: p,
      classes: r,
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
}), su = {
  key: 1,
  class: "nut-navbar__text"
}, au = { class: "nut-navbar__title" }, iu = {
  key: 0,
  class: "nut-navbar__text"
};
function ru(e, t, n, a, o, l) {
  const s = j("Left");
  return u(), d("view", {
    class: "nut-navbar--placeholder",
    style: L(e.rootStyle)
  }, [
    h("view", {
      ref: "navbarRef",
      class: B(e.classes),
      style: L({ zIndex: e.zIndex })
    }, [
      h("view", {
        class: "nut-navbar__left",
        onClick: t[0] || (t[0] = (...i) => e.handleLeft && e.handleLeft(...i))
      }, [
        e.leftShow ? D(e.$slots, "left-show", { key: 0 }, () => [
          le(s, {
            height: "12px",
            color: "#979797"
          })
        ]) : S("", !0),
        e.leftText ? (u(), d("view", su, _(e.leftText), 1)) : S("", !0),
        D(e.$slots, "left")
      ]),
      h("view", au, [
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
      h("view", {
        class: "nut-navbar__right",
        onClick: t[4] || (t[4] = (...i) => e.handleRight && e.handleRight(...i))
      }, [
        e.desc ? (u(), d("view", iu, _(e.desc), 1)) : S("", !0),
        D(e.$slots, "right")
      ])
    ], 6)
  ], 4);
}
const uu = /* @__PURE__ */ K(lu, [["render", ru]]), ke = (e = "") => (t, ...n) => {
  e = e.toLocaleLowerCase();
  const a = Ln.languages();
  let o = t;
  e && e.startsWith("nut") && (o = `${e.slice(3)}.${t}`);
  const l = Pt(a, o) || Pt(a, t);
  return Tt(l) ? l(...n) : l;
}, { create: cu } = Y("fixed-nav"), du = "NutFixedNav", fu = cu({
  components: {
    NutOverlay: ht,
    Left: Xt
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
    const n = ke(du), a = N(() => ({
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
}), pu = { class: "nut-fixed-nav__list" }, mu = ["onClick"], hu = ["src"], gu = { class: "span" }, yu = {
  key: 0,
  class: "b"
}, vu = { class: "text" };
function $u(e, t, n, a, o, l) {
  const s = j("nut-overlay"), i = j("Left");
  return u(), d("view", {
    class: B(e.classes),
    style: L(e.position)
  }, [
    e.overlay ? (u(), x(s, {
      key: 0,
      visible: e.visible,
      "z-index": 200,
      onClick: t[0] || (t[0] = (r) => e.updateValue(!1))
    }, null, 8, ["visible"])) : S("", !0),
    D(e.$slots, "list", {}, () => [
      h("view", pu, [
        (u(!0), d(ee, null, re(e.navList, (r, p) => (u(), d("view", {
          key: r.id || p,
          class: B(["nut-fixed-nav__list-item", { active: r.id == e.current }]),
          onClick: (f) => e.selected(r, f)
        }, [
          h("img", {
            src: r.icon
          }, null, 8, hu),
          h("view", gu, _(r.text), 1),
          r.num ? (u(), d("view", yu, _(r.num), 1)) : S("", !0)
        ], 10, mu))), 128))
      ])
    ]),
    h("div", {
      class: "nut-fixed-nav__btn",
      onClick: t[1] || (t[1] = (r) => e.updateValue())
    }, [
      D(e.$slots, "btn", {}, () => [
        le(i, { color: "#fff" }),
        h("view", vu, _(e.visible ? e.activeText || e.translate("activeText") : e.unActiveText || e.translate("unActiveText")), 1)
      ])
    ])
  ], 6);
}
const bu = /* @__PURE__ */ K(fu, [["render", $u]]), Xn = Symbol("nut-menu"), qn = (e) => {
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
}, Gn = (e) => {
  const t = Be(e, null);
  if (t) {
    const n = Fe(), { link: a, unlink: o } = t;
    a(n), je(() => {
      o(n);
    });
  }
  return { parent: t };
}, { componentName: ku, create: wu } = Y("menu"), Cu = wu({
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
    const t = P(), n = P(0), a = P(!1), { children: o, linkChildren: l } = qn(Xn), s = N(() => o.some((g) => g.state.showWrapper)), i = N(() => ({
      [ku]: !0,
      "scroll-fixed": a.value
    })), r = () => {
      if (t.value) {
        const g = Oe(t);
        e.direction === "down" ? n.value = g.bottom : n.value = window.innerHeight - g.top;
      }
    };
    l({ props: e, offset: n });
    const p = (g) => {
      o.forEach((b, k) => {
        k === g ? (r(), b.toggle()) : b.state.showPopup && b.toggle(!1, { immediate: !0 });
      });
    }, f = (g) => Math.max(0, "scrollTop" in g ? g.scrollTop : g.pageYOffset), v = () => {
      const { scrollFixed: g } = e, b = f(window);
      a.value = b > (typeof g == "boolean" ? 30 : Number(g));
    }, y = (g) => {
      let b = "";
      const { titleClass: k } = e;
      return g && (b += "active"), k && (b += ` ${k}`), b;
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
      opened: s,
      classes: i,
      barRef: t,
      getClasses: y
    };
  }
}), Su = ["onClick"], Tu = { class: "nut-menu__title-text" }, Nu = { class: "nut-menu__title-icon" };
function Du(e, t, n, a, o, l) {
  const s = j("RectUp"), i = j("RectDown");
  return u(), d("view", {
    class: B(e.classes)
  }, [
    h("view", {
      ref: "barRef",
      class: B(["nut-menu__bar", { opened: e.opened }])
    }, [
      (u(!0), d(ee, null, re(e.children, (r, p) => (u(), d("view", {
        key: p,
        class: B(["nut-menu__item", { disabled: r.disabled, active: r.state.showPopup }]),
        style: L({ color: r.state.showPopup ? e.activeColor : "" }),
        onClick: (f) => !r.disabled && e.toggleItem(p)
      }, [
        h("view", {
          class: B(["nut-menu__title", e.getClasses(r.state.showPopup)])
        }, [
          h("view", Tu, _(r.renderTitle()), 1),
          h("span", Nu, [
            D(e.$slots, "icon", {}, () => [
              e.direction === "up" ? (u(), x(s, { key: 0 })) : (u(), x(i, { key: 1 }))
            ])
          ])
        ], 2)
      ], 14, Su))), 128))
    ], 2),
    D(e.$slots, "default")
  ], 2);
}
const Iu = /* @__PURE__ */ K(Cu, [["render", Du]]), { create: _u } = Y("menu-item"), Bu = _u({
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
    Check: En
  },
  emits: ["update:modelValue", "change", "open", "close"],
  setup(e, { emit: t }) {
    const n = ue({
      showPopup: !1,
      showWrapper: !1
    }), { parent: a } = Gn(Xn), o = N(() => a.props.direction === "down" ? {
      top: a.offset.value + "px"
    } : {
      bottom: a.offset.value + "px"
    }), l = N(() => {
      const v = { height: a.offset.value + "px" };
      return a.props.direction === "down" ? ce(G({}, v), { top: "0px" }) : ce(G({}, v), { bottom: "0px" });
    });
    return {
      style: o,
      placeholderElementStyle: l,
      renderTitle: () => {
        var y;
        if (e.title)
          return e.title;
        const v = (y = e.options) == null ? void 0 : y.find((g) => g.value === e.modelValue);
        return v ? v.text : "";
      },
      state: n,
      parent: a,
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
}), Mu = { class: "nut-menu-item__content nut-menu-item__overflow" }, Lu = ["onClick"];
function Eu(e, t, n, a, o, l) {
  const s = j("Check"), i = j("nut-popup");
  return Se((u(), d("view", {
    class: "nut-menu-item",
    style: L(e.style)
  }, [
    Se(h("div", {
      class: "nut-menu-item-placeholder-element",
      style: L(e.placeholderElementStyle),
      onClick: t[0] || (t[0] = (...r) => e.handleClickOutside && e.handleClickOutside(...r))
    }, null, 4), [
      [De, e.state.showPopup]
    ]),
    le(i, dt(e.$attrs, {
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
        h("view", Mu, [
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
                le(s, dt(e.$attrs, {
                  color: e.parent.props.activeColor
                }), null, 16, ["color"])
              ])
            ], 2)) : S("", !0),
            h("view", {
              class: B([r.value === e.modelValue ? e.activeTitleClass : e.inactiveTitleClass]),
              style: L({ color: r.value === e.modelValue ? e.parent.props.activeColor : "" })
            }, _(r.text), 7)
          ], 14, Lu))), 128)),
          D(e.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["visible", "position", "duration", "overlay", "lock-scroll", "close-on-click-overlay", "onClosed"])
  ], 4)), [
    [De, e.state.showWrapper]
  ]);
}
const Pu = /* @__PURE__ */ K(Bu, [["render", Eu]]), Zn = Symbol("nut-tabbar"), { create: Au } = Y("tabbar"), zu = Au({
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
    const { bottom: n, placeholder: a } = he(e), o = P(), l = ue({
      val: e.modelValue,
      children: []
    }), s = P(null);
    function i(p, f) {
      t("update:modelValue", f), r.modelValue = f, t("tabSwitch", r.children[p], f);
    }
    const r = ue({
      children: l.children,
      modelValue: l.val,
      unactiveColor: e.unactiveColor,
      activeColor: e.activeColor,
      changeIndex: i
    });
    return Me(Zn, r), Q(
      () => e.modelValue,
      (p) => {
        r.modelValue = p;
      }
    ), ve(() => {
      n.value && a.value && Te(() => {
        var p;
        o.value = (p = s == null ? void 0 : s.value) == null ? void 0 : p.getBoundingClientRect().height;
      });
    }), {
      changeIndex: i,
      nutTabbar: s,
      height: o
    };
  }
});
function Vu(e, t, n, a, o, l) {
  return u(), d("div", {
    class: B({ "nut-tabbar__placeholder": e.bottom && e.placeholder }),
    style: L({ height: e.height + "px" })
  }, [
    h("view", {
      ref: "nutTabbar",
      class: B(["nut-tabbar", { "nut-tabbar-bottom": e.bottom, "nut-tabbar-safebottom": e.safeAreaInsetBottom }])
    }, [
      D(e.$slots, "default")
    ], 2)
  ], 6);
}
const Ou = /* @__PURE__ */ K(zu, [["render", Vu]]), { create: Hu } = Y("badge"), Ru = Hu({
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
      const o = e.value, l = e.max;
      return typeof o == "number" && typeof l == "number" && l < o ? `${l}+` : o;
    });
    return {
      state: t,
      stl: n,
      content: a
    };
  }
}), Fu = { class: "nut-badge" }, Wu = ["textContent"];
function Yu(e, t, n, a, o, l) {
  return u(), d("view", Fu, [
    Se(h("view", {
      class: "nut-badge__icon",
      style: L(e.stl)
    }, [
      D(e.$slots, "icon")
    ], 4), [
      [De, !e.hidden && !e.dot && e.$slots.icon]
    ]),
    D(e.$slots, "default"),
    Se(h("view", {
      class: B(["nut-badge__content nut-badge__content--sup", { "nut-badge__content--dot": e.dot, "nut-badge__content--bubble": !e.dot && e.bubble }]),
      style: L(e.stl),
      textContent: _(e.content)
    }, null, 14, Wu), [
      [De, !e.hidden && (e.content || e.dot)]
    ])
  ]);
}
const Jn = /* @__PURE__ */ K(Ru, [["render", Yu]]), { create: ju } = Y("tabbar-item"), Ku = ju({
  components: { NutBadge: Jn },
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
    const n = (p) => t[p], a = Be(Zn), o = ue({
      unactiveColor: a.unactiveColor,
      // 未选中的颜色
      activeColor: a.activeColor,
      // 选中的颜色
      index: 0
    }), l = Gt();
    ((p) => {
      var f;
      if (p.proxy) {
        a.children.push(p.proxy);
        const v = a.children.indexOf(p.proxy);
        o.index = (f = e.name) != null ? f : v;
      }
    })(Fe());
    const i = N(() => o.index === a.modelValue);
    function r() {
      var y, g, b;
      let p = (y = e.name) != null ? y : o.index, f = null;
      e.name && (f = a.children.findIndex((k) => k.name == p)), a.changeIndex(f != null ? f : p, o.index);
      let v = f != null ? f : p;
      if ((g = a.children[v]) != null && g.href) {
        window.location.href = a.children[v].href;
        return;
      }
      if ((b = a.children[v]) != null && b.to) {
        let k = a.children[v].to;
        k && l ? l.push(k) : location.replace(k);
      }
    }
    return {
      state: o,
      active: i,
      renderIcon: ot,
      isHaveSlot: n,
      change: r
    };
  }
}), Uu = { class: "nut-tabbar-item_icon-box" }, Xu = {
  key: 0,
  class: "nut-tabbar-item_icon-box_icon"
}, qu = { key: 1 }, Gu = { key: 0 };
function Zu(e, t, n, a, o, l) {
  const s = j("nut-badge");
  return u(), d("div", {
    class: B(["nut-tabbar-item", { "nut-tabbar-item__icon--unactive": !e.active }]),
    style: L({
      color: e.active ? e.state.activeColor : e.state.unactiveColor
    }),
    onClick: t[0] || (t[0] = (i) => e.change())
  }, [
    le(s, Vo(Oo(e.$attrs)), {
      default: te(() => [
        h("view", Uu, [
          e.isHaveSlot("icon") ? (u(), d("div", Xu, [
            D(e.$slots, "icon", { active: e.active })
          ])) : S("", !0),
          e.icon && !e.isHaveSlot("icon") ? (u(), d("view", qu, [
            (u(), x(Ae(e.renderIcon(e.icon)), { class: "nut-popover-item-img" }))
          ])) : S("", !0),
          h("view", {
            class: B([
              "nut-tabbar-item_icon-box_nav-word",
              { "nut-tabbar-item_icon-box_big-word": !e.icon && !e.isHaveSlot("icon") }
            ])
          }, [
            D(e.$slots, "default", {}, () => [
              e.tabTitle ? (u(), d("view", Gu, _(e.tabTitle), 1)) : S("", !0)
            ])
          ], 2)
        ])
      ]),
      _: 3
    }, 16)
  ], 6);
}
const Ju = /* @__PURE__ */ K(Ku, [["render", Zu]]), { create: Qu } = Y("elevator"), xu = Qu({
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
    }), l = N(() => a.value.clientHeight), s = (c, $) => {
      const m = "data-";
      return c.getAttribute(m + $);
    }, i = (c) => {
      Te(() => {
        !o.listGroup.includes(c) && c != null && o.listGroup.push(c);
      });
    }, r = () => {
      let c = 0;
      o.listHeight.push(c);
      for (let $ = 0; $ < o.listGroup.length; $++) {
        let m = o.listGroup[$];
        c += Math.floor(m.clientHeight), o.listHeight.push(c);
      }
    }, p = (c) => {
      !c && c !== 0 || (c < 0 && (c = 0), c > o.listHeight.length - 2 && (c = o.listHeight.length - 2), o.codeIndex = c, a.value.scrollTo(0, o.listHeight[c]));
    }, f = (c) => {
      o.scrollStart = !0;
      let $ = s(c.target, "index"), m = c.touches[0];
      o.touchState.y1 = m.pageY, o.anchorIndex = +$, o.codeIndex = +$, p(+$);
    }, v = (c) => {
      let $ = c.touches[0];
      o.touchState.y2 = $.pageY;
      let m = (o.touchState.y2 - o.touchState.y1) / e.spaceHeight | 0;
      o.codeIndex = o.anchorIndex + m, p(o.codeIndex);
    }, y = () => {
      o.scrollStart = !1;
    }, g = (c, $) => {
      t("clickItem", c, $), o.currentData = $, o.currentKey = c;
    }, b = (c) => {
      t("clickIndex", c);
    }, k = (c) => {
      let m = c.target.scrollTop;
      const w = o.listHeight;
      o.scrollY = m;
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
        let m = c > 0 && c < e.titleHeight ? c - e.titleHeight : 0;
        o.scrollY + l.value === $[$.length - 1] && m !== 0 && (m = 0), o.fixedTop !== m && (o.fixedTop = m);
      }
    ), Q(
      () => o.currentIndex,
      (c) => {
        t("change", c);
      }
    ), ce(G({}, he(o)), {
      clientHeight: l,
      setListGroup: i,
      listview: a,
      touchStart: f,
      touchMove: v,
      touchEnd: y,
      handleClickItem: g,
      handleClickIndex: b
    });
  }
}), ec = { class: "nut-elevator" }, tc = { class: "nut-elevator__list__item__code" }, nc = ["onClick"], oc = ["innerHTML"], lc = { class: "nut-elevator__list__fixed" }, sc = { class: "nut-elevator__list__fixed-title" }, ac = { class: "nut-elevator__bars__inner" }, ic = ["data-index", "onClick"];
function rc(e, t, n, a, o, l) {
  var s, i;
  return u(), d("view", ec, [
    h("view", {
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
        h("view", tc, _(r[e.acceptKey]), 1),
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
          }, null, 8, oc))
        ], 10, nc))), 128))
      ]))), 128))
    ], 4),
    Se(h("view", lc, [
      h("view", sc, _((i = (s = e.indexList) == null ? void 0 : s[e.currentIndex]) == null ? void 0 : i[e.acceptKey]), 1)
    ], 512), [
      [De, e.scrollY > 0 && e.isSticky]
    ]),
    e.indexList.length ? Se((u(), d("view", {
      key: 0,
      class: "nut-elevator__code--current"
    }, _(e.indexList[e.codeIndex][e.acceptKey]), 513)), [
      [De, e.scrollStart]
    ]) : S("", !0),
    h("view", {
      class: "nut-elevator__bars",
      onTouchstart: t[0] || (t[0] = (...r) => e.touchStart && e.touchStart(...r)),
      onTouchmove: t[1] || (t[1] = Ne((...r) => e.touchMove && e.touchMove(...r), ["stop", "prevent"])),
      onTouchend: t[2] || (t[2] = (...r) => e.touchEnd && e.touchEnd(...r))
    }, [
      h("view", ac, [
        (u(!0), d(ee, null, re(e.indexList, (r, p) => (u(), d("view", {
          key: r[e.acceptKey],
          class: B(["nut-elevator__bars__inner__item", { active: r[e.acceptKey] === e.indexList[e.currentIndex][e.acceptKey] }]),
          "data-index": p,
          onClick: (f) => e.handleClickIndex(r[e.acceptKey])
        }, _(r[e.acceptKey]), 11, ic))), 128))
      ])
    ], 32)
  ]);
}
const Qn = /* @__PURE__ */ K(xu, [["render", rc]]), { create: uc } = Y("pagination"), cc = "NutPagination", dc = uc({
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
    const n = ke(cc), { modelValue: a, mode: o, showPageSize: l, forceEllipses: s } = he(e), i = N(() => {
      const { pageCount: v, totalItems: y, itemsPerPage: g } = he(e), b = +v.value || Math.ceil(+y.value / +g.value);
      return Math.max(1, b);
    }), r = (v, y) => {
      v > i.value || v < 1 || (v != a.value && t("update:modelValue", v), y && t("change", v));
    }, p = (v, y, g = !1) => ({ number: v, text: y, active: g }), f = N(() => {
      if (o.value == "simple")
        return;
      let v = [];
      const y = i.value, g = +l.value;
      let b = 1, k = y;
      const c = y > g;
      c && (b = Math.max(a.value - Math.floor(g / 2), 1), k = b + +g - 1, k > y && (k = y, b = k - +g + 1));
      for (var $ = b; $ <= k; $++) {
        const m = p($, $, a.value == $);
        v.push(m);
      }
      if (c && g > 0 && s.value) {
        if (b > 1) {
          const m = p(b - 1, "...");
          v.unshift(m);
        }
        if (k < y) {
          const m = p(k + 1, "...");
          v.push(m);
        }
      }
      return v;
    });
    return Ht(() => {
      r(a.value, !1);
    }), {
      modelValue: a,
      select: r,
      countRef: i,
      mode: o,
      pages: f,
      forceEllipses: s,
      translate: n
    };
  }
}), fc = { class: "nut-pagination" }, pc = {
  key: 0,
  class: "nut-pagination-contain"
}, mc = ["onClick"], hc = {
  key: 1,
  class: "nut-pagination-contain"
}, gc = { class: "nut-pagination-simple" };
function yc(e, t, n, a, o, l) {
  return u(), d("view", fc, [
    h("view", {
      class: B(["nut-pagination-prev", e.mode == "multi" ? "" : "simple-border", e.modelValue == 1 ? "disabled" : ""]),
      onClick: t[0] || (t[0] = (s) => e.select(e.modelValue - 1, !0))
    }, [
      D(e.$slots, "prev-text", {}, () => [
        ge(_(e.prevText || e.translate("prev")), 1)
      ])
    ], 2),
    e.mode == "multi" ? (u(), d("view", pc, [
      (u(!0), d(ee, null, re(e.pages, (s, i) => (u(), d("view", {
        key: i + "pagination",
        class: B(["nut-pagination-item", s.active ? "active" : ""]),
        onClick: (r) => e.select(s.number, !0)
      }, [
        D(e.$slots, "page", { item: s }, () => [
          ge(_(s.text), 1)
        ])
      ], 10, mc))), 128))
    ])) : S("", !0),
    e.mode == "simple" ? (u(), d("view", hc, [
      h("view", gc, _(e.modelValue) + "/" + _(e.countRef), 1)
    ])) : S("", !0),
    h("view", {
      class: B(["nut-pagination-next", e.modelValue >= e.countRef ? "disabled" : ""]),
      onClick: t[1] || (t[1] = (s) => e.select(e.modelValue + 1, !0))
    }, [
      D(e.$slots, "next-text", {}, () => [
        ge(_(e.nextText || e.translate("next")), 1)
      ])
    ], 2)
  ]);
}
const vc = /* @__PURE__ */ K(dc, [["render", yc]]), bt = window, $c = typeof window != "undefined";
function bc() {
  return typeof bt != "undefined" ? bt.requestAnimationFrame || bt.webkitRequestAnimationFrame || function(e) {
    bt.setTimeout(e, 1e3 / 60);
  } : function(e) {
    setTimeout(e, 1e3 / 60);
  };
}
function kc(e) {
  $c ? cancelAnimationFrame(e) : clearTimeout(e);
}
const Ve = bc(), hn = 10;
function wc(e, t) {
  return e > t && e > hn ? "horizontal" : t > e && t > hn ? "vertical" : "";
}
function qe() {
  const e = P(0), t = P(0), n = P(0), a = P(0), o = P(0), l = P(0), s = P(0), i = P(0), r = P(""), p = () => r.value === "vertical", f = () => r.value === "horizontal", v = () => {
    o.value = 0, l.value = 0, s.value = 0, i.value = 0, r.value = "";
  };
  return {
    move: (b) => {
      const k = b.touches[0];
      o.value = k.clientX - e.value, l.value = k.clientY - t.value, n.value = k.clientX, a.value = k.clientY, s.value = Math.abs(o.value), i.value = Math.abs(l.value), r.value || (r.value = wc(s.value, i.value));
    },
    start: (b) => {
      v(), e.value = b.touches[0].clientX, t.value = b.touches[0].clientY;
    },
    reset: v,
    startX: e,
    startY: t,
    moveX: n,
    moveY: a,
    deltaX: o,
    deltaY: l,
    offsetX: s,
    offsetY: i,
    direction: r,
    isVertical: p,
    isHorizontal: f
  };
}
const Cc = (e, t, n, a) => {
  const o = P(), l = P({ width: 0, height: 0 }), s = () => Ke(void 0, null, function* () {
    var y, g;
    n && n.getEnv() !== n.ENV_TYPE.WEB ? a(o).then(
      (b) => {
        l.value.width = b.width || 0, l.value.height = b.height || 0;
      },
      () => {
      }
    ) : (l.value.width = ((y = o.value) == null ? void 0 : y.clientWidth) || 0, l.value.height = ((g = o.value) == null ? void 0 : g.clientHeight) || 0);
  });
  ve(() => {
    setTimeout(() => {
      s();
    }, 100);
  });
  const i = ue({
    offset: 0,
    moving: !1
  }), r = qe();
  let p = "";
  const f = (y, g) => {
    var k;
    let b = y;
    switch (e.direction == "horizontal" ? (p = y > 0 ? "right" : "left", b = Math.abs(b) / l.value.width * 100) : (p = g > 0 ? "bottom" : "top", b = g, b = Math.abs(b) / ((k = l.value) == null ? void 0 : k.height) * 100), b > 85 && (b = 85), p) {
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
class Sc {
  constructor() {
    z(this, "title", "");
    z(this, "titleSlot");
    z(this, "paneKey", "");
    z(this, "disabled", !1);
  }
}
const { create: Tc } = Y("tabs"), Nc = Tc({
  components: { NutSticky: Kn, JoySmile: Ns },
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
    const a = P(null);
    let o;
    Me("tabsOpiton", {
      activeKey: N(() => e.modelValue || "0"),
      autoHeight: N(() => e.autoHeight),
      animatedTime: N(() => e.animatedTime)
    });
    const l = P([]), s = (C) => {
      C.forEach((E, V) => {
        var Z, F, oe, q, H, ne, U, ae, de;
        let X = E.type;
        if (X = X.name || X, X == "NutTabPane") {
          let fe = new Sc();
          if ((Z = E.props) != null && Z.title || (F = E.props) != null && F["pane-key"] || (oe = E.props) != null && oe.paneKey) {
            let be = St((q = E.props) == null ? void 0 : q["pane-key"]), Ee = be == "number" || be == "string" ? String((H = E.props) == null ? void 0 : H["pane-key"]) : null, O = St((ne = E.props) == null ? void 0 : ne.paneKey), J = O == "number" || O == "string" ? String((U = E.props) == null ? void 0 : U.paneKey) : null;
            fe.title = (ae = E.props) == null ? void 0 : ae.title, fe.paneKey = Ee || J || String(V), fe.disabled = (de = E.props) == null ? void 0 : de.disabled;
          }
          l.value.push(fe);
        } else {
          if (E.children == " ")
            return;
          s(E.children);
        }
      });
    }, i = P(e.modelValue || 0), r = (C) => {
      let E = l.value.findIndex((V) => V.paneKey == C);
      l.value.length == 0 || E == -1 || (i.value = E);
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
      l.value = [], C = C == null ? void 0 : C.filter((V) => typeof V.children != "string"), C && C.length && s(C), r(e.modelValue), Te(() => {
        y();
      });
    }, k = (C) => {
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
          let E = Oe(a.value).top + c(), V = Math.ceil(E - e.top);
          window.scrollTo({
            top: V,
            behavior: "smooth"
          });
        }
      }
    ), ve(b), pt(b);
    const $ = {
      isBegin: () => i.value == 0,
      isEnd: () => i.value == l.value.length - 1,
      next: () => {
        i.value += 1;
        const C = l.value[i.value].disabled;
        if ($.isEnd() && C) {
          $.prev();
          return;
        }
        if (C && i.value < l.value.length - 1) {
          $.next();
          return;
        }
        $.updateValue(l.value[i.value]);
      },
      prev: () => {
        i.value -= 1;
        const C = l.value[i.value].disabled;
        if ($.isBegin() && C) {
          $.next();
          return;
        }
        if (C && i.value > 0) {
          $.prev();
          return;
        }
        $.updateValue(l.value[i.value]);
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
    }, { tabsContentRef: m, touchState: w, touchMethods: I } = Cc(e, $), T = N(() => {
      let C = i.value * 100;
      w.moving && (C += w.offset);
      let E = {
        transform: e.direction == "horizontal" ? `translate3d(-${C}%, 0, 0)` : `translate3d( 0,-${C}%, 0)`,
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
      const C = _e(e.titleGutter);
      return e.direction === "vertical" ? { marginTop: C, marginBottom: C } : { marginLeft: C, marginRight: C };
    });
    return G(G({
      navRef: f,
      tabsContentRef: m,
      titles: l,
      contentStyle: T,
      tabsNavStyle: W,
      titleStyle: A,
      tabsActiveStyle: M,
      container: a,
      getScrollY: p,
      onStickyScroll: k
    }, $), I);
  }
}), Dc = ["onClick"], Ic = ["onClick"];
function _c(e, t, n, a, o, l) {
  const s = j("JoySmile"), i = j("nut-sticky");
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
        h("view", {
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
              le(s, { color: e.color }, null, 8, ["color"])
            ], 4)) : S("", !0),
            h("view", {
              class: B(["nut-tabs__titles-item__text", { ellipsis: e.ellipsis }])
            }, _(r.title), 3)
          ], 14, Dc))), 128))
        ], 6)
      ]),
      _: 3
    }, 8, ["top", "container", "onScroll"])) : (u(), d("view", {
      key: 1,
      ref: "navRef",
      class: B(["nut-tabs__titles", { [e.type]: e.type, scrollable: e.titleScroll, "scroll-vertical": e.getScrollY, [e.size]: e.size }]),
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
          le(s, { color: e.color }, null, 8, ["color"])
        ], 4)) : S("", !0),
        h("view", {
          class: B(["nut-tabs__titles-item__text", { ellipsis: e.ellipsis }])
        }, _(r.title), 3)
      ], 14, Ic))), 128))
    ], 6)),
    h("view", {
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
const xn = /* @__PURE__ */ K(Nc, [["render", _c]]), { create: Bc } = Y("tab-pane"), Mc = Bc({
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
function Lc(e, t, n, a, o, l) {
  return u(), d("view", {
    class: B(["nut-tab-pane", { inactive: e.paneKey != e.activeKey && e.autoHeight }]),
    style: L(e.paneStyle)
  }, [
    D(e.$slots, "default")
  ], 6);
}
const eo = /* @__PURE__ */ K(Mc, [["render", Lc]]), { create: Ec } = Y("indicator"), Pc = Ec({
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
    }), padZero: Ue };
  }
}), Ac = {
  key: 0,
  class: "nut-indicator--number"
}, zc = {
  key: 1,
  class: "nut-indicator--dot"
};
function Vc(e, t, n, a, o, l) {
  return u(), d("view", {
    class: B(e.classes)
  }, [
    (u(!0), d(ee, null, re(e.size, (s) => (u(), d(ee, { key: s }, [
      s === e.current ? (u(), d("view", Ac, _(e.fillZero && e.padZero(s) || s), 1)) : (u(), d("view", zc))
    ], 64))), 128))
  ], 2);
}
const Oc = /* @__PURE__ */ K(Pc, [["render", Vc]]), { create: Hc } = Y("side-navbar"), Rc = Hc({
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
    }), a = (l, s = 1) => {
      var i;
      for (let r = 0; r < l.length; r++) {
        let p = l[r];
        (i = p == null ? void 0 : p.children) != null && i[0] && (p.children[0].style.paddingLeft = +e.offset * s + "px", p.className.includes("nut-side-navbar-item") || a(Array.from(p.children[1].children), ++n.count));
      }
      n.count--;
    }, o = () => {
      let l = t.value.childNodes;
      l.length && (l = Array.from(l).filter((s) => s.nodeType !== 3).map((s) => s), a(l));
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
    }), ce(G({}, he(n)), {
      list: t
    });
  }
}), Fc = { class: "nut-side-navbar" }, Wc = { class: "nut-side-navbar__content" }, Yc = {
  ref: "list",
  class: "nut-side-navbar__content__list"
};
function jc(e, t, n, a, o, l) {
  return u(), d("view", Fc, [
    h("view", Wc, [
      h("view", Yc, [
        D(e.$slots, "default")
      ], 512)
    ])
  ]);
}
const Kc = /* @__PURE__ */ K(Rc, [["render", jc]]), { create: Uc } = Y("side-navbar-item"), Xc = Uc({
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
}), qc = ["ikey"], Gc = { class: "nut-side-navbar-item__title" };
function Zc(e, t, n, a, o, l) {
  return u(), d("view", {
    class: "nut-side-navbar-item",
    ikey: e.ikey,
    onClick: t[0] || (t[0] = Ne((...s) => e.handleClick && e.handleClick(...s), ["stop"]))
  }, [
    h("span", Gc, _(e.title), 1)
  ], 8, qc);
}
const Jc = /* @__PURE__ */ K(Xc, [["render", Zc]]), { create: Qc } = Y("sub-side-navbar"), xc = Qc({
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
    }), a = N(() => ({
      height: n.direction ? "0px" : "auto"
    })), o = () => {
      t("titleClick"), n.direction = n.direction ? "" : "up";
    };
    return ve(() => {
      n.direction = e.open ? "" : "up";
    }), ce(G({}, he(n)), {
      style: a,
      handleClick: o
    });
  }
}), ed = ["ikey"], td = { class: "nut-sub-side-navbar__title__text" }, nd = { class: "nut-sub-side-navbar__title__icon" };
function od(e, t, n, a, o, l) {
  const s = j("ArrowDown2"), i = j("ArrowUp2");
  return u(), d("view", {
    class: "nut-sub-side-navbar",
    ikey: e.ikey
  }, [
    h("view", {
      class: "nut-sub-side-navbar__title",
      onClick: t[0] || (t[0] = Ne((...r) => e.handleClick && e.handleClick(...r), ["stop"]))
    }, [
      h("span", td, _(e.title), 1),
      h("span", nd, [
        e.direction ? (u(), x(i, { key: 1 })) : (u(), x(s, { key: 0 }))
      ])
    ]),
    Se(h("view", {
      class: B(["nut-sub-side-navbar__list", e.direction ? "nutFadeOut" : "nutFadeIn"]),
      style: L(e.style)
    }, [
      D(e.$slots, "default")
    ], 6), [
      [De, !e.direction]
    ])
  ], 8, ed);
}
const ld = /* @__PURE__ */ K(xc, [["render", od]]), { componentName: sd, create: ad } = Y("range"), id = ad({
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
    const l = P(), s = P(), i = qe(), r = N(() => {
      const { marks: F, max: oe, min: q } = e;
      return Object.keys(F).map(parseFloat).sort((U, ae) => U - ae).filter((U) => U >= +q && U <= +oe);
    }), p = N(() => Number(e.max) - Number(e.min)), f = N(() => {
      const F = sd;
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
      transition: s.value ? "none" : void 0
    } : {
      width: k(),
      left: c(),
      background: e.activeColor,
      transition: s.value ? "none" : void 0
    }), m = (F) => {
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
    }, C = (F) => {
      if (e.disabled)
        return;
      const { min: oe, modelValue: q } = e, H = Oe(l);
      let ne = F.clientX - H.left, U = H.width;
      e.vertical && (ne = F.clientY - H.top, U = H.height);
      const ae = Number(oe) + ne / U * p.value;
      if (b(q)) {
        const [de, fe] = q, be = (de + fe) / 2;
        ae <= be ? A([ae, fe], !0) : A([de, ae], !0);
      } else
        A(ae, !0);
    }, E = (F) => {
      e.disabled || (i.start(F), o = e.modelValue, b(o) ? a = o.map(T) : a = T(o), s.value = "start");
    }, V = (F) => {
      if (e.disabled)
        return;
      s.value === "start" && t("dragStart"), i.move(F), s.value = "draging";
      const oe = Oe(l);
      let q = i.deltaX.value, H = oe.width, ne = q / H * p.value;
      e.vertical && (q = i.deltaY.value, H = oe.height, ne = q / H * p.value), b(a) ? o[n.value] = a[n.value] + ne : o = a + ne, A(o);
    }, X = () => {
      e.disabled || (s.value === "draging" && (A(o, !0), t("dragEnd")), s.value = "");
    }, Z = (F) => jt(e.modelValue) && typeof F == "number" ? e.modelValue[F] : Number(e.modelValue);
    return ce(G({
      root: l,
      classes: f,
      wrapperStyle: y,
      buttonStyle: g,
      onClick: C,
      onTouchStart: E,
      onTouchMove: V,
      onTouchEnd: X
    }, he(e)), {
      barStyle: $,
      curValue: Z,
      buttonIndex: n,
      containerClasses: v,
      markClassName: m,
      marksStyle: w,
      marksList: r,
      tickStyle: I
    });
  }
}), rd = {
  key: 0,
  class: "nut-range-min"
}, ud = {
  key: 0,
  class: "nut-range-mark"
}, cd = ["tabindex", "aria-valuemin", "aria-valuenow", "aria-valuemax", "onTouchstart"], dd = {
  key: 0,
  class: "number"
}, fd = ["tabindex", "aria-valuemin", "aria-valuenow", "aria-valuemax"], pd = {
  key: 0,
  class: "number"
}, md = {
  key: 1,
  class: "nut-range-max"
};
function hd(e, t, n, a, o, l) {
  return u(), d("view", {
    class: B(e.containerClasses)
  }, [
    e.hiddenRange ? S("", !0) : (u(), d("view", rd, _(+e.min), 1)),
    h("view", {
      ref: "root",
      style: L(e.wrapperStyle),
      class: B(e.classes),
      onClick: t[9] || (t[9] = Ne((...s) => e.onClick && e.onClick(...s), ["stop"]))
    }, [
      e.marksList.length > 0 ? (u(), d("view", ud, [
        (u(!0), d(ee, null, re(e.marksList, (s) => (u(), d("span", {
          key: s,
          class: B(e.markClassName(s)),
          style: L(e.marksStyle(s))
        }, [
          ge(_(s) + " ", 1),
          h("span", {
            class: "nut-range-tick",
            style: L(e.tickStyle(s))
          }, null, 4)
        ], 6))), 128))
      ])) : S("", !0),
      h("view", {
        class: "nut-range-bar",
        style: L(e.barStyle)
      }, [
        e.range ? (u(), d(ee, { key: 0 }, re([0, 1], (s) => h("view", {
          key: s,
          role: "slider",
          class: B({
            "nut-range-button-wrapper-left": s == 0,
            "nut-range-button-wrapper-right": s == 1
          }),
          tabindex: e.disabled ? -1 : 0,
          "aria-valuemin": +e.min,
          "aria-valuenow": e.curValue(s),
          "aria-valuemax": +e.max,
          "aria-orientation": "horizontal",
          onTouchstart: Ne(
            (i) => {
              typeof s == "number" && (e.buttonIndex = s), e.onTouchStart(i);
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
            e.hiddenTag ? S("", !0) : (u(), d("view", dd, _(e.curValue(s)), 1))
          ], 4))
        ], 42, cd)), 64)) : (u(), d("view", {
          key: 1,
          role: "slider",
          class: "nut-range-button-wrapper",
          tabindex: e.disabled ? -1 : 0,
          "aria-valuemin": +e.min,
          "aria-valuenow": e.curValue(),
          "aria-valuemax": +e.max,
          "aria-orientation": "horizontal",
          onTouchstart: t[4] || (t[4] = Ne(
            (s) => {
              e.onTouchStart(s);
            },
            ["stop", "prevent"]
          )),
          onTouchmove: t[5] || (t[5] = Ne((...s) => e.onTouchMove && e.onTouchMove(...s), ["stop", "prevent"])),
          onTouchend: t[6] || (t[6] = Ne((...s) => e.onTouchEnd && e.onTouchEnd(...s), ["stop", "prevent"])),
          onTouchcancel: t[7] || (t[7] = Ne((...s) => e.onTouchEnd && e.onTouchEnd(...s), ["stop", "prevent"])),
          onClick: t[8] || (t[8] = (s) => s.stopPropagation())
        }, [
          e.$slots.button ? D(e.$slots, "button", { key: 0 }) : (u(), d("view", {
            key: 1,
            class: "nut-range-button",
            style: L(e.buttonStyle)
          }, [
            e.hiddenTag ? S("", !0) : (u(), d("view", pd, _(e.curValue()), 1))
          ], 4))
        ], 40, fd))
      ], 4)
    ], 6),
    e.hiddenRange ? S("", !0) : (u(), d("view", md, _(+e.max), 1))
  ], 2);
}
const to = /* @__PURE__ */ K(id, [["render", hd]]), { create: gd } = Y("searchbar"), yd = "NutSearchbar", vd = gd({
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
      default: () => Ut
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
    const n = ke(yd), a = ue({
      active: !1
    }), o = N(() => ({
      background: e.background
    })), l = N(() => ({
      background: e.inputBackground
    })), s = ($) => {
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
    }, v = () => {
      t("search", e.modelValue);
    }, y = ($) => {
      t("clickInput", $);
    }, g = ($) => {
      t("clickLeftIcon", e.modelValue, $);
    }, b = ($) => {
      t("clickRightIcon", e.modelValue, $);
    }, k = N(() => ({
      textAlign: e.inputAlign
    })), c = P(null);
    return ve(() => {
      e.autofocus && c.value.focus();
    }), ce(G({
      renderIcon: ot,
      inputsearch: c
    }, he(a)), {
      valueChange: s,
      valueFocus: r,
      valueBlur: p,
      handleClear: f,
      handleSubmit: v,
      searchbarStyle: o,
      inputSearchbarStyle: l,
      focusCss: i,
      translate: n,
      clickInput: y,
      leftIconClick: g,
      rightIconClick: b,
      styleSearchbar: k
    });
  }
}), $d = {
  key: 0,
  class: "nut-searchbar__search-label"
}, bd = {
  key: 1,
  class: "nut-searchbar__search-icon nut-searchbar__left-search-icon"
}, kd = ["type", "maxlength", "placeholder", "value", "disabled", "readonly"], wd = {
  key: 1,
  class: "nut-searchbar__search-icon nut-searchbar__iptright-search-icon"
}, Cd = {
  key: 2,
  class: "nut-searchbar__search-icon nut-searchbar__right-search-icon"
};
function Sd(e, t, n, a, o, l) {
  return u(), d("view", {
    class: B(["nut-searchbar", { "safe-area-inset-bottom": e.safeAreaInsetBottom }]),
    style: L(e.searchbarStyle)
  }, [
    e.label ? (u(), d("span", $d, _(e.label), 1)) : S("", !0),
    e.$slots.leftout ? (u(), d("view", bd, [
      D(e.$slots, "leftout")
    ])) : S("", !0),
    h("view", {
      class: B(["nut-searchbar__search-input", e.shape]),
      style: L(G(G({}, e.inputSearchbarStyle), e.focusCss))
    }, [
      e.$slots.leftin ? (u(), d("view", {
        key: 0,
        class: "nut-searchbar__search-icon nut-searchbar__iptleft-search-icon",
        onClick: t[0] || (t[0] = (...s) => e.leftIconClick && e.leftIconClick(...s))
      }, [
        D(e.$slots, "leftin")
      ])) : S("", !0),
      h("view", {
        class: B(["nut-searchbar__input-inner", e.$slots.rightin && "nut-searchbar__input-inner-absolute"])
      }, [
        h("form", {
          class: "nut-searchbar__input-form",
          action: "#",
          onSubmit: t[5] || (t[5] = Ne((...s) => e.handleSubmit && e.handleSubmit(...s), ["prevent"]))
        }, [
          h("input", {
            ref: "inputsearch",
            class: B(["nut-searchbar__input-bar", e.clearable && "nut-searchbar__input-bar_clear"]),
            type: e.inputType,
            maxlength: e.maxLength,
            placeholder: e.placeholder || e.translate("placeholder"),
            value: e.modelValue,
            disabled: e.disabled,
            readonly: e.readonly,
            style: L(e.styleSearchbar),
            onClick: t[1] || (t[1] = (...s) => e.clickInput && e.clickInput(...s)),
            onInput: t[2] || (t[2] = (...s) => e.valueChange && e.valueChange(...s)),
            onFocus: t[3] || (t[3] = (...s) => e.valueFocus && e.valueFocus(...s)),
            onBlur: t[4] || (t[4] = (...s) => e.valueBlur && e.valueBlur(...s))
          }, null, 46, kd)
        ], 32)
      ], 2),
      h("view", {
        class: B(["nut-searchbar__input-inner-icon", e.$slots.rightin && "nut-searchbar__input-inner-icon-absolute"])
      }, [
        e.clearable ? Se((u(), d("view", {
          key: 0,
          class: "nut-searchbar__search-icon nut-searchbar__input-clear",
          onClick: t[6] || (t[6] = (...s) => e.handleClear && e.handleClear(...s))
        }, [
          e.$slots["clear-icon"] ? D(e.$slots, "clear-icon", { key: 0 }) : (u(), x(Ae(e.renderIcon(e.clearIcon)), { key: 1 }))
        ], 512)), [
          [De, String(e.modelValue).length > 0]
        ]) : S("", !0),
        e.$slots.rightin ? (u(), d("view", wd, [
          D(e.$slots, "rightin")
        ])) : S("", !0)
      ], 2)
    ], 6),
    e.$slots.rightout ? (u(), d("view", Cd, [
      D(e.$slots, "rightout")
    ])) : S("", !0)
  ], 6);
}
const Td = /* @__PURE__ */ K(vd, [["render", Sd]]), wt = (e, t, n) => e.map((a) => {
  const { value: o = "value", text: l = "text", children: s = "children" } = n, y = a, { [o]: i, [l]: r, [s]: p } = y, f = Lt(y, [vt(o), vt(l), vt(s)]), v = ce(G({
    loading: !1
  }, f), {
    level: t ? (t && t.level || 0) + 1 : 0,
    value: i,
    text: r,
    children: p,
    _parent: t
  });
  return v.children && v.children.length && (v.children = wt(v.children, v, n)), v;
}), no = (e, t) => {
  let n = 0, a;
  for (; (a = e[n++]) && t(a) !== !0; )
    a.children && a.children.length && no(a.children, t);
}, Nd = {
  topId: null,
  idKey: "id",
  pidKey: "pid",
  sortKey: ""
}, Dd = (e, t) => {
  const n = G(G({}, Nd), t || {}), { topId: a, idKey: o, pidKey: l, sortKey: s } = n;
  let i = [], r = {};
  return e.forEach((p) => {
    p = G({}, p);
    const { [o]: f, [l]: v } = p, y = r[v] = r[v] || [];
    !i.length && v === a && (i = y), y.push(p), p.children = r[f] || (r[f] = []);
  }), s && Object.keys(r).forEach((p) => {
    r[p].length > 1 && r[p].sort((f, v) => f[s] - v[s]);
  }), r = null, i;
};
class gn {
  constructor(t, n) {
    z(this, "nodes");
    z(this, "config");
    this.config = G({
      value: "value",
      text: "text",
      children: "children"
    }, n || {}), this.nodes = wt(t, null, this.config);
  }
  updateChildren(t, n) {
    n ? n.children = wt(t, n, this.config) : this.nodes = wt(t, null, this.config);
  }
  // for test
  getNodeByValue(t) {
    let n;
    return no(this.nodes, (a) => {
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
      const o = a.find((l) => l.value === t[l.level]);
      if (!o)
        break;
      n.push(o), a = o.children;
    }
    return n;
  }
  isLeaf(t, n) {
    const { leaf: a, children: o } = t, l = Array.isArray(o) && !!o.length;
    return a || !l && !n;
  }
  hasChildren(t, n) {
    if (this.isLeaf(t, n))
      return !1;
    const { children: o } = t;
    return Array.isArray(o) && !!o.length;
  }
}
const { create: Id } = Y("cascader-item"), _d = Id({
  components: {
    Loading: Qe,
    Checklist: Bl,
    NutTabs: xn,
    NutTabPane: eo
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
    })), o = P(0), l = P(!1), s = P(e.modelValue), i = P(new gn([], {})), r = P([]), p = N(() => a.value.lazy && !!a.value.lazyLoad), f = /* @__PURE__ */ new Map();
    let v;
    const y = () => Ke(this, null, function* () {
      f.clear(), r.value = [], o.value = 0, l.value = !1, v = null;
      let { options: m } = e;
      a.value.convertConfig && (m = Dd(m, a.value.convertConfig)), i.value = new gn(m, {
        value: a.value.valueKey,
        text: a.value.textKey,
        children: a.value.childrenKey
      }), p.value && !i.value.nodes.length && (yield b({
        root: !0,
        loading: !0,
        text: "",
        value: ""
      })), r.value = [{ nodes: i.value.nodes, selectedNode: null }], g();
    }), g = () => Ke(this, null, function* () {
      const m = s.value;
      if (m === void 0 || !i.value.nodes.length)
        return;
      if (m.length === 0) {
        o.value = 0, r.value = [{ nodes: i.value.nodes, selectedNode: null }];
        return;
      }
      let w = m;
      if (p.value && Array.isArray(m) && m.length) {
        w = [];
        let I = i.value.nodes.find((T) => T.value === m[0]);
        if (I) {
          w = [I.value], l.value = !0;
          const T = yield m.slice(1).reduce((W, M) => Ke(this, null, function* () {
            var E;
            const A = yield W;
            yield b(A);
            const C = (E = A == null ? void 0 : A.children) == null ? void 0 : E.find((V) => V.value === M);
            return C && w.push(M), Promise.resolve(C);
          }), Promise.resolve(I));
          yield b(T), l.value = !1;
        }
      }
      w.length && m === e.modelValue && i.value.getPathNodesByValue(w).map((T, W) => {
        o.value = W, c.handleNode(T, !0);
      });
    }), b = (m) => Ke(this, null, function* () {
      if (!m)
        return;
      if (!a.value.lazyLoad) {
        m.leaf = !0;
        return;
      }
      if (i.value.isLeaf(m, p.value) || i.value.hasChildren(m, p.value))
        return;
      m.loading = !0;
      const w = m.root ? null : m;
      let I = f.get(m);
      I || (I = new Promise((W) => {
        var M, A;
        (A = (M = a.value).lazyLoad) == null || A.call(M, m, W);
      }), f.set(m, I));
      const T = yield I;
      Array.isArray(T) && T.length > 0 ? i.value.updateChildren(T, w) : m.leaf = !0, m.loading = !1, f.delete(m);
    }), k = (m) => {
      const w = m.map((I) => I.value);
      s.value = w, t("change", w, m), t("update:modelValue", w, m);
    }, c = {
      // 选中一个节点，静默模式不触发事件
      handleNode(m, w) {
        return Ke(this, null, function* () {
          const { disabled: I, loading: T } = m;
          if (!(!w && I || !r.value[o.value])) {
            if (i.value.isLeaf(m, p.value)) {
              if (m.leaf = !0, r.value[o.value].selectedNode = m, r.value = r.value.slice(0, m.level + 1), !w) {
                const W = r.value.map((M) => M.selectedNode);
                k(W), t("pathChange", W);
              }
              return;
            }
            if (i.value.hasChildren(m, p.value)) {
              const W = m.level + 1;
              if (r.value[o.value].selectedNode = m, r.value = r.value.slice(0, W), r.value.push({
                nodes: m.children || [],
                selectedNode: null
              }), o.value = W, !w) {
                const M = r.value.map((A) => A.selectedNode);
                t("pathChange", M);
              }
              return;
            }
            v = m, !T && (yield b(m), v === m && (r.value[o.value].selectedNode = m, c.handleNode(m, w)));
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
        var I;
        return ((I = m == null ? void 0 : m.selectedNode) == null ? void 0 : I.value) === w.value;
      }
    };
    return Q(
      [a, () => e.options],
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
        m !== s.value && (s.value = m, g());
      }
    ), Q(
      () => e.visible,
      (m) => {
        m && Array.isArray(s.value) && s.value.length > 0 && g();
      }
    ), G({ panes: r, initLoading: l, tabsCursor: o }, c);
  }
}), Bd = {
  role: "menu",
  class: "nut-cascader-pane"
}, Md = ["aria-checked", "aria-disabled", "onClick"], Ld = { class: "nut-cascader-item__title" }, Ed = /* @__PURE__ */ h("view", { class: "nut-cascader-pane" }, null, -1);
function Pd(e, t, n, a, o, l) {
  const s = j("Loading"), i = j("Checklist"), r = j("nut-tab-pane"), p = j("nut-tabs");
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
          h("view", Bd, [
            (u(!0), d(ee, null, re(f.nodes, (y) => (u(), d("view", {
              key: y.value,
              class: B(["nut-cascader-item", { active: e.isSelected(f, y), disabled: y.disabled }]),
              "aria-checked": e.isSelected(f, y),
              "aria-disabled": y.disabled || void 0,
              role: "menuitemradio",
              onClick: (g) => e.handleNode(y, !1)
            }, [
              h("view", Ld, _(y.text), 1),
              y.loading ? (u(), x(s, {
                key: 0,
                class: "nut-cascader-item__icon-loading",
                name: "loading"
              })) : (u(), x(i, {
                key: 1,
                class: "nut-cascader-item__icon-check",
                name: "checklist"
              }))
            ], 10, Md))), 128))
          ])
        ]),
        _: 2
      }, 1032, ["title"]))), 128)) : (u(), x(r, {
        key: 1,
        title: "Loading..."
      }, {
        default: te(() => [
          Ed
        ]),
        _: 1
      }))
    ]),
    _: 1
  }, 8, ["modelValue", "onClick"]);
}
const Ad = /* @__PURE__ */ K(_d, [["render", Pd]]), { create: zd } = Y("cascader"), Vd = zd({
  components: {
    NutCascaderItem: Ad,
    NutPopup: Le
  },
  props: ce(G({}, gt), {
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
      set(s) {
        t("update:visible", s);
      }
    }), o = (s, i) => {
      n.value = s, a.value = !1, t("change", s, i), t("update:modelValue", s);
    }, l = (s) => {
      t("pathChange", s);
    };
    return Q(
      () => e.modelValue,
      (s) => {
        s !== n.value && (n.value = s);
      }
    ), {
      onChange: o,
      onPathChange: l,
      innerValue: n,
      innerVisible: a
    };
  }
}), Od = ["innerHTML"];
function Hd(e, t, n, a, o, l) {
  const s = j("nut-cascader-item"), i = j("nut-popup");
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
      }, null, 8, Od)) : S("", !0),
      le(s, {
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
  }, 8, ["visible", "closeable", "close-icon-position", "z-index"])) : (u(), x(s, {
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
const Rd = /* @__PURE__ */ K(Vd, [["render", Hd]]), pe = {
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
    let l = o.getDay(), s = o.getDate(), i = 6 - l;
    return a !== 0 && (l = l == 0 ? 7 : l, i = 7 - l), Math.ceil((s + i) / 7);
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getYearWeek: function(e, t, n, a = 0) {
    const o = new Date(Number(e), parseInt(t) - 1, Number(n)), l = new Date(Number(e), 0, 1), s = Math.round((o.valueOf() - l.valueOf()) / 864e5);
    return Math.ceil((s + (l.getDay() + 1 - 1)) / 7);
  },
  getWeekDate: function(e, t, n, a = 0) {
    const o = new Date(Number(e), parseInt(t) - 1, Number(n)), l = o.getTime();
    let s = o.getDay();
    if (a === 0) {
      const r = l - s * 864e5, p = l + (6 - s) * 864e5, f = this.date2Str(new Date(r)), v = this.date2Str(new Date(p));
      return [f, v];
    } else {
      s = s == 0 ? 7 : s;
      const i = 24 * 60 * 60 * 1e3, r = l - (s - 1) * i, p = l + (7 - s) * i, f = this.date2Str(new Date(r)), v = this.date2Str(new Date(p));
      return [f, v];
    }
  },
  formatResultDate: function(e) {
    let t = [...e.split("-")];
    return t[2] = pe.getNumTwoBit(Number(t[2])), t[3] = `${t[0]}-${t[1]}-${t[2]}`, t[4] = pe.getWhatDay(+t[0], +t[1], +t[2]), t;
  }
}, { create: Fd } = Y("calendar-item"), Wd = "NutCalendarItem", Yd = Fd({
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
    const o = ke(Wd), l = o("weekdays").map((O, J) => ({
      day: O,
      weekend: J === 0 || J === 6
    })), s = P([...l.slice(e.firstDayOfWeek, 7), ...l.slice(0, e.firstDayOfWeek)]), i = P(null), r = P(null), p = P(null), f = P(null), v = P(0), y = N(() => c.monthsData.slice(c.defaultRange[0], c.defaultRange[1])), g = N(() => n.btn), b = N(() => n["top-info"]), k = N(() => n["bottom-info"]), c = ue({
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
    }), $ = (O) => O.split("-"), m = (O) => pe.isEqual(c.currDate[0], O), w = (O) => pe.isEqual(c.currDate[1], O), I = (O) => {
      var J, se;
      return ((J = c.currDate) == null ? void 0 : J.length) > 0 ? (se = c.currDate) == null ? void 0 : se.some((ie) => pe.isEqual(ie, O)) : !1;
    }, T = (O, J) => J.curData[0] + "-" + J.curData[1] + "-" + pe.getNumTwoBit(+O.day), W = (O, J, se) => {
      const ie = [];
      typeof se == "number" && ((se + 1 + e.firstDayOfWeek) % 7 === 0 || (se + e.firstDayOfWeek) % 7 === 0) && ie.push("weekend");
      const me = T(O, J), { type: Ie } = e;
      return O.type == "curr" ? pe.isEqual(c.currDate, me) || (Ie == "range" || Ie == "week") && (m(me) || w(me)) || Ie == "multiple" && I(me) ? ie.push(`${c.dayPrefix}--active`) : c.propStartDate && pe.compareDate(me, c.propStartDate) || c.propEndDate && pe.compareDate(c.propEndDate, me) || e.disabledDate && e.disabledDate(me) ? ie.push(`${c.dayPrefix}--disabled`) : (Ie == "range" || Ie == "week") && Array.isArray(c.currDate) && Object.values(c.currDate).length == 2 && pe.compareDate(c.currDate[0], me) && pe.compareDate(me, c.currDate[1]) && ie.push(`${c.dayPrefix}--choose`) : ie.push(`${c.dayPrefix}--disabled`), ie;
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
      var ie, me;
      if (!W(O, J).includes(`${c.dayPrefix}--disabled`)) {
        const { type: Ie } = e;
        let [He, We] = J.curData, $e = [...J.curData];
        if ($e[2] = pe.getNumTwoBit(Number(O.day)), $e[3] = `${$e[0]}-${$e[1]}-${$e[2]}`, $e[4] = pe.getWhatDay(+$e[0], +$e[1], +$e[2]), Ie == "multiple")
          if (((ie = c.currDate) == null ? void 0 : ie.length) > 0) {
            let Ce;
            (me = c.currDate) == null || me.forEach((Re, ze) => {
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
      let { year: ie, month: me } = se;
      return J == "prev" && O >= 7 && (O -= 7), Array.from(Array(O), (Ie, He) => ({
        day: String(He + 1),
        type: J,
        year: ie,
        month: me
      }));
    }, X = (O, J, se, ie) => {
      O = O - e.firstDayOfWeek;
      let { year: me, month: Ie } = se;
      return J == "prev" && O >= 7 && (O -= 7), Array.from(Array(ie), (We, $e) => ({
        day: String($e + 1),
        type: J,
        year: me,
        month: Ie
      })).slice(ie - O);
    }, Z = (O, J) => {
      const se = pe.getMonthPreDay(+O[0], +O[1]);
      let ie = Number(O[1]) - 1, me = Number(O[0]);
      ie <= 0 && (ie = 12, me += 1);
      const Ie = pe.getMonthDays(String(O[0]), String(O[1])), He = pe.getMonthDays(me + "", ie + ""), We = {
        year: O[0],
        month: O[1]
      }, $e = {
        curData: O,
        title: o("monthTitle", We.year, We.month),
        monthData: [
          ...X(
            se,
            "prev",
            { month: String(ie), year: String(me) },
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
      let me = ie.month - se.month;
      ie.year - se.year > 0 && (me = me + 12 * (ie.year - se.year)), me <= 0 && (me = 1), Z(c.startData, "next");
      let Ie = 1;
      do
        Z(E("next"), "next");
      while (Ie++ < me);
      if (c.monthsNum = me, e.type == "range" && Array.isArray(c.currDate))
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
          let [Re, ze, Ye] = $(c.currDate[0]), Bt = pe.getWeekDate(Re, ze, Ye, e.firstDayOfWeek);
          c.currDate = Bt, O && pe.compareDate(c.currDate[0], O) && c.currDate.splice(0, 1, O), J && pe.compareDate(J, c.currDate[1]) && c.currDate.splice(1, 1, J), c.defaultData = [...$(c.currDate[0]), ...$(c.currDate[1])];
        }
      } else
        c.currDate && (O && pe.compareDate(c.currDate, O) ? c.currDate = O : J && !pe.compareDate(c.currDate, J) && (c.currDate = J), c.defaultData = [...$(c.currDate)]);
      let He = 0, We = 0;
      c.defaultData.length > 0 && c.monthsData.forEach((Re, ze) => {
        Re.title == o("monthTitle", c.defaultData[0], c.defaultData[1]) && (He = ze), (e.type == "range" || e.type == "week") && Re.title == o("monthTitle", c.defaultData[3], c.defaultData[4]) && (We = ze);
      }), H(me, He), c.currentIndex = He, c.yearMonthTitle = c.monthsData[c.currentIndex].title, c.defaultData.length > 0 && (c.isRange ? (A({ day: c.defaultData[2], type: "curr" }, c.monthsData[c.currentIndex], !0), A({ day: c.defaultData[5], type: "curr" }, c.monthsData[We], !0)) : e.type == "week" ? A({ day: c.defaultData[2], type: "curr" }, c.monthsData[c.currentIndex], !0) : e.type == "multiple" ? [...c.currDate].forEach((Re) => {
        let ze = $(Re), Ye = c.currentIndex;
        c.monthsData.forEach((Bt, Do) => {
          Bt.title == o("monthTitle", ze[0], ze[1]) && (Ye = Do);
        }), A({ day: ze[2], type: "curr" }, c.monthsData[Ye], !0);
      }) : A({ day: c.defaultData[2], type: "curr" }, c.monthsData[c.currentIndex], !0));
      let $e = c.monthsData[c.monthsData.length - 1], Ce = $e.cssHeight + $e.cssScrollHeight;
      Ve(() => {
        i != null && i.value && (r != null && r.value) && (f != null && f.value) && (v.value = i.value.clientHeight, r.value.style.height = `${Ce}px`, i.value.scrollTop = c.monthsData[c.currentIndex].cssScrollHeight);
      }), c.avgHeight = Math.floor(Ce / (me + 1));
    };
    a({
      scrollToDate: (O) => {
        pe.compareDate(O, c.propStartDate) ? O = c.propStartDate : pe.compareDate(O, c.propEndDate) || (O = c.propEndDate);
        let J = $(O);
        c.monthsData.forEach((se, ie) => {
          if (se.title == o("monthTitle", J[0], J[1]) && i.value) {
            let me = c.monthsData[ie].cssScrollHeight - i.value.scrollTop;
            if (e.toDateAnimation) {
              let Ie = 0, He = setInterval(() => {
                if (Ie++, i.value) {
                  let We = me / 10;
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
    }, ne = (O, J) => (e.type == "range" || e.type == "week") && O.type == "curr" && W(O, J).includes("nut-calendar__day--active"), U = (O, J) => ne(O, J) && m(T(O, J)), ae = (O, J) => c.currDate.length >= 2 && w(T(O, J)) ? ne(O, J) : !1, de = () => {
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
      weeks: s,
      compConthsData: y,
      showTopBtn: g,
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
    }, he(c)), he(e)), {
      translate: o,
      monthsPanel: r,
      weeksPanel: p,
      viewArea: f
    });
  }
}), jd = { class: "nut-calendar__header" }, Kd = {
  key: 0,
  class: "nut-calendar__header-title"
}, Ud = {
  key: 1,
  class: "nut-calendar__header-slot"
}, Xd = {
  key: 2,
  class: "nut-calendar__header-subtitle"
}, qd = {
  ref: "weeksPanel",
  class: "nut-calendar__weekdays"
}, Gd = {
  ref: "monthsPanel",
  class: "nut-calendar__panel"
}, Zd = { class: "nut-calendar__month-title" }, Jd = { class: "nut-calendar__days" }, Qd = ["onClick"], xd = { class: "nut-calendar__day-value" }, ef = {
  key: 0,
  class: "nut-calendar__day-tips nut-calendar__day-tips--top"
}, tf = {
  key: 1,
  class: "nut-calendar__day-tips nut-calendar__day-tips--bottom"
}, nf = {
  key: 2,
  class: "nut-calendar__day-tips--curr"
}, of = {
  key: 4,
  class: "nut-calendar__day-tip"
}, lf = {
  key: 0,
  class: "nut-calendar__footer"
};
function sf(e, t, n, a, o, l) {
  return u(), d("view", {
    class: B(["nut-calendar", {
      "nut-calendar--nopop": !e.poppable,
      "nut-calendar--nofooter": e.isAutoBackFill
    }])
  }, [
    h("view", jd, [
      e.showTitle ? (u(), d("view", Kd, _(e.title || e.translate("title")), 1)) : S("", !0),
      e.showTopBtn ? (u(), d("view", Ud, [
        D(e.$slots, "btn")
      ])) : S("", !0),
      e.showSubTitle ? (u(), d("view", Xd, _(e.yearMonthTitle), 1)) : S("", !0),
      h("view", qd, [
        (u(!0), d(ee, null, re(e.weeks, (s, i) => (u(), d("view", {
          key: i,
          class: B(["nut-calendar__weekday", { weekend: s.weekend }])
        }, _(s.day), 3))), 128))
      ], 512)
    ]),
    h("view", {
      ref: "months",
      class: "nut-calendar__content",
      onScroll: t[0] || (t[0] = (...s) => e.mothsViewScroll && e.mothsViewScroll(...s))
    }, [
      h("view", Gd, [
        h("view", {
          ref: "viewArea",
          class: "nut-calendar__body",
          style: L({ transform: `translateY(${e.translateY}px)` })
        }, [
          (u(!0), d(ee, null, re(e.compConthsData, (s, i) => (u(), d("view", {
            key: i,
            class: "nut-calendar__month"
          }, [
            h("view", Zd, _(s.title), 1),
            h("view", Jd, [
              h("view", {
                class: B(["nut-calendar__days-item", e.type === "range" ? "nut-calendar__days-item--range" : ""])
              }, [
                (u(!0), d(ee, null, re(s.monthData, (r, p) => (u(), d("view", {
                  key: p,
                  class: B(["nut-calendar__day", e.getClass(r, s, p)]),
                  onClick: (f) => e.chooseDay(r, s)
                }, [
                  h("view", xd, [
                    D(e.$slots, "day", {
                      date: r.type == "curr" ? r : ""
                    }, () => [
                      ge(_(r.type == "curr" ? r.day : ""), 1)
                    ])
                  ]),
                  e.topInfo ? (u(), d("view", ef, [
                    D(e.$slots, "top-info", {
                      date: r.type == "curr" ? r : ""
                    })
                  ])) : S("", !0),
                  e.bottomInfo ? (u(), d("view", tf, [
                    D(e.$slots, "bottom-info", {
                      date: r.type == "curr" ? r : ""
                    })
                  ])) : S("", !0),
                  !e.bottomInfo && e.showToday && e.isCurrDay(r) ? (u(), d("view", nf, _(e.translate("today")), 1)) : S("", !0),
                  e.isStartTip(r, s) ? (u(), d("view", {
                    key: 3,
                    class: B(["nut-calendar__day-tip", { "nut-calendar__day-tips--top": e.rangeTip() }])
                  }, _(e.startText || e.translate("start")), 3)) : S("", !0),
                  e.isEndTip(r, s) ? (u(), d("view", of, _(e.endText || e.translate("end")), 1)) : S("", !0)
                ], 10, Qd))), 128))
              ], 2)
            ])
          ]))), 128))
        ], 4)
      ], 512)
    ], 544),
    e.poppable && !e.isAutoBackFill ? (u(), d("view", lf, [
      D(e.$slots, "footer-info", { date: e.chooseData }, () => [
        h("view", {
          class: "nut-calendar__confirm",
          onClick: t[1] || (t[1] = (...s) => e.confirm && e.confirm(...s))
        }, _(e.confirmText || e.translate("confirm")), 1)
      ])
    ])) : S("", !0)
  ], 2);
}
const oo = /* @__PURE__ */ K(Yd, [["render", sf]]), { create: af } = Y("calendar"), rf = af({
  components: {
    NutCalendarItem: oo,
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
  setup(e, { emit: t, slots: n, expose: a }) {
    const o = N(() => n.btn), l = N(() => n["top-info"]), s = N(() => n.day), i = N(() => n["bottom-info"]), r = N(() => n["footer-info"]), p = P(null);
    a({
      scrollToDate: ($) => {
        var m;
        (m = p.value) == null || m.scrollToDate($);
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
      topInfo: l,
      dayInfo: s,
      bottomInfo: i,
      footerInfo: r
    };
  }
});
function uf(e, t, n, a, o, l) {
  const s = j("nut-calendar-item"), i = j("nut-popup");
  return e.poppable ? (u(), x(i, dt({
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
      le(s, {
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
      }, ft({ _: 2 }, [
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
  }, 16, ["visible", "lock-scroll", "onClickOverlay", "onClickCloseIcon"])) : (u(), x(s, {
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
  }, ft({ _: 2 }, [
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
const cf = /* @__PURE__ */ K(rf, [["render", uf]]), lo = Symbol("nut-checkbox"), df = (e, t) => ({
  components: t,
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
  setup(n, { emit: a, slots: o }) {
    const l = Be(lo, null), s = ue({
      partialSelect: n.indeterminate
    }), i = N(() => !!l), r = N(() => i.value ? l.value.value.includes(n.label) : n.modelValue), p = N(() => i.value && l.disabled.value ? l.disabled.value : n.disabled), f = N(() => !!n.modelValue), v = N(() => p.value ? "nut-checkbox__icon--disable" : s.partialSelect ? "nut-checkbox__icon--indeterminate" : r.value ? "nut-checkbox__icon" : "nut-checkbox__icon--unchecked");
    let y = "";
    const g = (m, w) => {
      y = "click", a("update:modelValue", m), a("change", m, w);
    };
    Q(
      () => n.modelValue,
      (m) => {
        y == "click" ? y = "" : a("change", m);
      }
    );
    const b = () => {
      const { iconSize: m } = n, w = {
        CheckNormal: o.icon ? o.icon : t.CheckNormal,
        Checked: o.checkedIcon ? o.checkedIcon : t.Checked,
        CheckDisabled: o.indeterminate ? o.indeterminate : t.CheckDisabled
      }, I = s.partialSelect ? w.CheckDisabled : r.value ? w.Checked : w.CheckNormal, T = _e(m);
      return we(I, {
        width: T,
        height: T,
        size: T,
        class: v.value
      });
    }, k = () => {
      var m;
      return we(
        "view",
        {
          class: `${e}__label ${p.value ? `${e}__label--disabled` : ""}`
        },
        (m = o.default) == null ? void 0 : m.call(o)
      );
    }, c = () => {
      var m;
      return we(
        "view",
        {
          class: `${e}__button ${r.value && `${e}__button--active`} ${p.value ? `${e}__button--disabled` : ""}`
        },
        (m = o.default) == null ? void 0 : m.call(o)
      );
    }, $ = () => {
      var m, w;
      if (!p.value) {
        if (f.value && s.partialSelect) {
          s.partialSelect = !1, g(f.value, (m = o.default) == null ? void 0 : m.call(o)[0].children);
          return;
        }
        if (g(!f.value, (w = o.default) == null ? void 0 : w.call(o)[0].children), i.value) {
          const I = l.value.value, T = l.max.value, { label: W } = n, M = I.indexOf(W);
          M > -1 ? I.splice(M, 1) : M <= -1 && (I.length < T || !T) && I.push(W), l.updateValue(I);
        }
      }
    };
    return ve(() => {
      i.value && l.link(Fe());
    }), Ft(() => {
      i.value && l.unlink(Fe());
    }), Q(
      () => n.indeterminate,
      (m) => {
        s.partialSelect = m;
      }
    ), () => we(
      "view",
      {
        class: `${e} ${e}--${n.shape} ${n.textPosition === "left" ? `${e}--reverse` : ""}`,
        onClick: $
      },
      [n.shape == "button" ? c() : [b(), k()]]
    );
  }
}), { create: ff, componentName: pf } = Y("checkbox"), mf = ff(df(pf, { CheckNormal: At, Checked: Pn, CheckDisabled: pl })), { create: hf, componentName: gf } = Y("checkbox-group"), yf = hf({
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
    }), l = (f) => {
      f.proxy && o.children.push(f.proxy);
    }, s = (f) => {
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
    return Me(lo, {
      value: N(() => e.modelValue),
      disabled: N(() => e.disabled),
      max: N(() => e.max),
      updateValue: i,
      link: l,
      unlink: s
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
          class: gf
        },
        (f = t.default) == null ? void 0 : f.call(t)
      );
    };
  }
}), vf = {
  text: "text",
  value: "value",
  children: "children"
}, $f = (e, t) => {
  const n = ue({
    formattedColumns: e.columns
  }), a = N(() => G(G({}, vf), e.fieldNames)), o = P([]), l = N(() => {
    const c = a.value;
    return f.value.map(($, m) => {
      const w = $.findIndex((I) => I[c.value] === o.value[m]);
      return w === -1 ? 0 : w;
    });
  }), s = P([]), i = (c) => {
    c && s.value.length < f.value.length && s.value.push(c);
  }, r = N(() => {
    const c = a.value;
    return f.value.map(($, m) => $.find((w) => w[c.value] === o.value[m]) || $[0]);
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
    const m = [], w = a.value;
    let I = {
      text: "",
      value: "",
      [w.children]: c
    }, T = 0;
    for (; I && I[w.children]; ) {
      const W = I[w.children], M = $[T];
      let A = W.findIndex((C) => C[w.value] === M);
      A === -1 && (A = 0), I = I[w.children][A], T++, m.push(W);
    }
    return m;
  }, y = () => {
    t("cancel", {
      selectedValue: o.value,
      selectedOptions: r.value
    });
  }, g = (c, $) => {
    var w;
    const m = a.value;
    if ($ && Object.keys($).length) {
      if (o.value = o.value ? o.value : [], p.value === "cascade") {
        o.value[c] = (w = $[m.value]) != null ? w : "";
        let I = c, T = $;
        for (; T && T[m.children] && T[m.children][0]; )
          o.value[I + 1] = T[m.children][0][m.value], I++, T = T[m.children][0];
        T && T[m.children] && T[m.children].length === 0 && (o.value = o.value.slice(0, I + 1));
      } else
        o.value[c] = Object.prototype.hasOwnProperty.call($, m.value) ? $[m.value] : "";
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
  ), ce(G({}, he(n)), {
    columnsType: p,
    columnsList: f,
    columnFieldNames: a,
    cancel: y,
    changeHandler: g,
    confirm: b,
    defaultValues: o,
    defaultIndexes: l,
    pickerColumn: s,
    swipeRef: i,
    selectedOptions: r,
    isSameValue: k
  });
}, { create: bf } = Y("picker-column"), kf = bf({
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
    const n = qe(), a = ue({
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
    }), o = P(null), l = P(!1), s = P(0), i = P(0), r = 200, p = 300, f = 15, v = N(() => ({
      transition: `transform ${i.value}ms cubic-bezier(0.17, 0.89, 0.45, 1)`,
      transform: `rotate3d(1, 0, 0, ${s.value})`,
      top: `calc(50% - ${+e.optionHeight / 2}px)`
    })), y = N(() => {
      const { optionHeight: C } = e;
      return {
        transition: `transform ${i.value}ms cubic-bezier(0.17, 0.89, 0.45, 1)`,
        transform: `translate3d(0, ${a.scrollDistance}px, 0)`,
        top: `calc(50% - ${+C / 2}px)`,
        height: `${C}px`
      };
    }), g = (C) => `transform: rotate3d(1, 0, 0, ${-a.rotation * C}deg) translate3d(0px, 0px, 104px)`, b = N(() => ({
      backgroundSize: `100% ${(+e.visibleOptionNum - 1) * +e.optionHeight / 2}px`
    })), k = (C) => {
      if (n.start(C), l.value && !e.taro) {
        const E = o.value, { transform: V } = window.getComputedStyle(E);
        if (e.threeDimensional) {
          const X = Math.floor(parseInt(s.value) / 360), Z = +V.split(", ")[5], F = +V.split(", ")[6] < 0 ? 180 : 0, oe = X * 360 + Math.acos(Z) / Math.PI * 180 + F;
          a.scrollDistance = -Math.abs((oe / a.rotation - 1) * +e.optionHeight);
        } else
          a.scrollDistance = +V.slice(7, V.length - 1).split(", ")[5];
      }
      nt(C, !0), a.touchParams.startY = n.deltaY.value, a.touchParams.startTime = Date.now(), a.transformY = a.scrollDistance;
    }, c = (C) => {
      n.move(C), n.isVertical() && (l.value = !0, nt(C, !0)), a.touchParams.lastY = n.deltaY.value;
      let E = a.touchParams.lastY - a.touchParams.startY;
      T(E);
    }, $ = () => {
      a.touchParams.lastY = n.deltaY.value, a.touchParams.lastTime = Date.now();
      let C = a.touchParams.lastY - a.touchParams.startY, E = a.touchParams.lastTime - a.touchParams.startTime;
      if (E <= p && Math.abs(C) > f) {
        const V = m(C, E);
        T(V, "end", +e.swipeDuration);
        return;
      } else
        T(C, "end");
      setTimeout(() => {
        n.reset(), l.value = !1;
      }, 0);
    }, m = (C, E) => (C = Math.abs(C / E) / 3e-3 * (C < 0 ? -1 : 1), C), w = (C) => C >= a.currIndex + 8 || C <= a.currIndex - 8, I = (C = 0, E, V = r, X) => {
      E === "end" ? i.value = V : i.value = 0, s.value = X, a.scrollDistance = C;
    }, T = (C, E, V) => {
      const { optionHeight: X } = e;
      let Z = C + a.transformY;
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
    }, M = (C) => {
      const { column: E } = e;
      let V = E.findIndex((Z) => Z[e.fieldNames.value] === e.value);
      a.currIndex = V === -1 ? 1 : V + 1;
      let X = V === -1 ? 0 : V * +e.optionHeight;
      C && W(), T(-X);
    }, A = () => {
      l.value = !1, i.value = 0, W();
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
    }), ce(G(G({}, he(a)), he(e)), {
      setRollerStyle: g,
      isHidden: w,
      roller: o,
      onTouchStart: k,
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
function wf(e, t, n, a, o, l) {
  return u(), d("view", {
    class: "nut-picker__list",
    onTouchstart: t[1] || (t[1] = (...s) => e.onTouchStart && e.onTouchStart(...s)),
    onTouchmove: t[2] || (t[2] = (...s) => e.onTouchMove && e.onTouchMove(...s)),
    onTouchend: t[3] || (t[3] = (...s) => e.onTouchEnd && e.onTouchEnd(...s))
  }, [
    h("view", {
      ref: "roller",
      class: "nut-picker-roller",
      style: L(e.threeDimensional ? e.touchRollerStyle : e.touchTileStyle),
      onTransitionend: t[0] || (t[0] = (...s) => e.stopMomentum && e.stopMomentum(...s))
    }, [
      (u(!0), d(ee, null, re(e.column, (s, i) => {
        var r;
        return u(), d(ee, {
          key: (r = s[e.fieldNames.value]) != null ? r : i
        }, [
          s && s[e.fieldNames.text] && e.threeDimensional ? (u(), d("view", {
            key: 0,
            class: B(["nut-picker-roller-item", { "nut-picker-roller-item-hidden": e.isHidden(i + 1) }]),
            style: L(e.setRollerStyle(i + 1))
          }, _(s[e.fieldNames.text]), 7)) : S("", !0),
          s && s[e.fieldNames.text] && !e.threeDimensional ? (u(), d("view", {
            key: 1,
            class: "nut-picker-roller-item-tile",
            style: L({ height: e.pxCheck(e.optionHeight), lineHeight: e.pxCheck(e.optionHeight) })
          }, _(s[e.fieldNames.text]), 5)) : S("", !0)
        ], 64);
      }), 128))
    ], 36),
    h("view", {
      class: "nut-picker-roller-mask",
      style: L(e.maskStyles)
    }, null, 4)
  ], 32);
}
const Cf = /* @__PURE__ */ K(kf, [["render", wf]]), Sf = {
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
}, { create: Tf } = Y("picker"), Nf = "NutPicker", Df = Tf({
  components: {
    NutPickerColumn: Cf
  },
  props: Sf,
  emits: ["cancel", "change", "confirm", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = ke(Nf), { changeHandler: a, confirm: o, defaultValues: l, columnsList: s, columnsType: i, columnFieldNames: r, cancel: p } = $f(
      e,
      t
    ), f = P([]), v = (b) => {
      b && f.value.length < s.value.length && f.value.push(b);
    }, y = N(() => {
      const b = {};
      return b.height = `${+e.visibleOptionNum * +e.optionHeight}px`, b["--lineHeight"] = `${+e.optionHeight}px`, b;
    });
    return {
      columnsType: i,
      columnsList: s,
      columnFieldNames: r,
      cancel: p,
      changeHandler: a,
      confirmHandler: () => {
        f.value.length > 0 && f.value.forEach((b) => {
          b.stopMomentum();
        }), o();
      },
      defaultValues: l,
      translate: n,
      pickerColumn: f,
      swipeRef: v,
      columnStyle: y
    };
  }
}), If = { class: "nut-picker" }, _f = {
  key: 0,
  class: "nut-picker__bar"
}, Bf = { class: "nut-picker__title" };
function Mf(e, t, n, a, o, l) {
  const s = j("nut-picker-column");
  return u(), d("div", If, [
    e.showToolbar ? (u(), d("view", _f, [
      h("view", {
        class: "nut-picker__left",
        onClick: t[0] || (t[0] = (...i) => e.cancel && e.cancel(...i))
      }, _(e.cancelText || e.translate("cancel")), 1),
      h("view", Bf, _(e.title), 1),
      h("view", {
        class: "nut-picker__right",
        onClick: t[1] || (t[1] = (...i) => e.confirmHandler && e.confirmHandler(...i))
      }, _(e.okText || e.translate("confirm")), 1)
    ])) : S("", !0),
    D(e.$slots, "top"),
    h("view", {
      class: "nut-picker__column",
      style: L(e.columnStyle)
    }, [
      (u(!0), d(ee, null, re(e.columnsList, (i, r) => (u(), d("view", {
        key: r,
        class: "nut-picker__columnitem"
      }, [
        le(s, {
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
const so = /* @__PURE__ */ K(Df, [["render", Mf]]), { create: Lf } = Y("date-picker"), yn = (/* @__PURE__ */ new Date()).getFullYear();
function Et(e) {
  return Fo(e) && !isNaN(e.getTime());
}
const Ef = {
  day: "日",
  year: "年",
  month: "月",
  hour: "时",
  minute: "分",
  seconds: "秒"
}, Pf = Lf({
  components: {
    NutPicker: so
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
      default: () => new Date(yn - 10, 0, 1),
      validator: Et
    },
    maxDate: {
      type: Date,
      default: () => new Date(yn + 10, 11, 31),
      validator: Et
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
      Et(c) || (c = e.minDate);
      let $ = Math.max(c.getTime(), e.minDate.getTime());
      return $ = Math.min($, e.maxDate.getTime()), new Date($);
    };
    function o(c, $) {
      return 32 - new Date(c, $ - 1, 32).getDate();
    }
    const l = (c, $) => {
      const m = c == "min" ? e.minDate : e.maxDate, w = m.getFullYear();
      let I = 1, T = 1, W = 0, M = 0;
      c === "max" && (I = 12, T = o($.getFullYear(), $.getMonth() + 1), W = 23, M = 59);
      const A = M;
      return $.getFullYear() === w && (I = m.getMonth() + 1, $.getMonth() + 1 === I && (T = m.getDate(), $.getDate() === T && (W = m.getHours(), $.getHours() === W && (M = m.getMinutes())))), {
        [`${c}Year`]: w,
        [`${c}Month`]: I,
        [`${c}Date`]: T,
        [`${c}Hour`]: W,
        [`${c}Minute`]: M,
        [`${c}Seconds`]: A
      };
    }, s = N(() => {
      const { maxYear: c, maxDate: $, maxMonth: m, maxHour: w, maxMinute: I, maxSeconds: T } = l("max", n.currentDate), { minYear: W, minDate: M, minMonth: A, minHour: C, minMinute: E, minSeconds: V } = l("min", n.currentDate);
      return b([
        {
          type: "year",
          range: [W, c]
        },
        {
          type: "month",
          range: [A, m]
        },
        {
          type: "day",
          range: [M, $]
        },
        {
          type: "hour",
          range: [C, w]
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
    }), i = N(() => s.value.map(($, m) => f($.range[0], $.range[1], v($.type), $.type, m))), r = ({
      columnIndex: c,
      selectedValue: $,
      selectedOptions: m
    }) => {
      if (["date", "datetime", "datehour", "month-day", "year-month"].includes(e.type)) {
        let w = [];
        $.forEach((A) => {
          w.push(A);
        }), e.type == "month-day" && w.length < 3 && w.unshift(new Date(n.currentDate || e.minDate || e.maxDate).getFullYear()), e.type == "year-month" && w.length < 3 && w.push(new Date(n.currentDate || e.minDate || e.maxDate).getDate());
        const I = Number(w[0]), T = Number(w[1]) - 1, W = Math.min(Number(w[2]), o(Number(w[0]), Number(w[1])));
        let M = null;
        e.type === "date" || e.type === "month-day" || e.type === "year-month" ? M = new Date(I, T, W) : e.type === "datetime" ? M = new Date(I, T, W, Number(w[3]), Number(w[4])) : e.type === "datehour" && (M = new Date(I, T, W, Number(w[3]))), n.currentDate = a(M);
      }
      t("change", { columnIndex: c, selectedValue: $, selectedOptions: m });
    }, p = (c, $) => {
      const { formatter: m, isShowChinese: w } = e;
      let I = null;
      if (m)
        I = m(c, { text: Ue($, 2), value: Ue($, 2) });
      else {
        const T = Ue($, 2), W = w ? Ef[c] : "";
        I = { text: T + W, value: T };
      }
      return I;
    }, f = (c, $, m, w, I) => {
      const T = [];
      let W = 0;
      for (; c <= $; )
        T.push(p(w, c)), w === "minute" ? c += e.minuteStep : c++, c <= Number(m) && W++;
      return n.selectedValue[I] = T[W].value, e.filter ? e.filter(w, T) : T;
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
    }, k = (c) => {
      const $ = [
        c.getFullYear(),
        c.getMonth() + 1,
        c.getDate(),
        c.getHours(),
        c.getMinutes(),
        c.getSeconds()
      ];
      return b($.map((m) => String(m)));
    };
    return Nn(() => {
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
    ), ce(G({}, he(n)), {
      changeHandler: r,
      closeHandler: y,
      confirm: g,
      columns: i
    });
  }
});
function Af(e, t, n, a, o, l) {
  const s = j("nut-picker");
  return u(), x(s, {
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
const zf = /* @__PURE__ */ K(Pf, [["render", Af]]), { componentName: Vf, create: Of } = Y("input-number"), Hf = Of({
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
      const g = Vf;
      return {
        [g]: !0,
        [`${g}--disabled`]: e.disabled
      };
    }), a = (g) => Number(g).toFixed(Number(e.decimalPlaces)), o = (g) => {
      const b = g.target;
      t("update:modelValue", b.valueAsNumber, g);
    }, l = (g, b) => {
      let k = a(g);
      t("update:modelValue", k, b), Number(e.modelValue) !== Number(k) && t("change", k, b);
    }, s = (g = Number(e.modelValue)) => g < Number(e.max) && !e.disabled, i = (g = Number(e.modelValue)) => g > Number(e.min) && !e.disabled, r = (g) => {
      if (e.disabled)
        return;
      t("reduce", g);
      let b = Number(e.modelValue) - Number(e.step);
      i() && b >= Number(e.min) ? l(b, g) : (l(Number(e.min), g), t("overlimit", g, "reduce"));
    }, p = (g) => {
      if (e.disabled)
        return;
      t("add", g);
      let b = Number(e.modelValue) + Number(e.step);
      s() && b <= Number(e.max) ? l(b, g) : (l(Number(e.max), g), t("overlimit", g, "add"));
    }, f = (g) => {
      e.disabled || e.readonly || t("focus", g);
    }, v = (g) => {
      if (e.disabled || e.readonly)
        return;
      let k = g.target.valueAsNumber;
      k < Number(e.min) ? k = Number(e.min) : k > Number(e.max) && (k = Number(e.max)), l(k, g), t("blur", g);
    }, y = (g) => {
      let b = Number(g);
      return b < Number(e.min) ? b = Number(e.min) : b > Number(e.max) && (b = Number(e.max)), b;
    };
    return Q(
      () => [e.max, e.min],
      () => {
        Number(e.min) > Number(e.max) && console.warn("[NutUI] <InputNumber>", "props.max < props.min");
        const g = y(e.modelValue);
        g !== Number(e.modelValue) && l(g, {});
      }
    ), {
      classes: n,
      change: o,
      blur: v,
      focus: f,
      add: p,
      addAllow: s,
      reduce: r,
      reduceAllow: i,
      pxCheck: _e
    };
  }
}), Rf = ["min", "max", "disabled", "readonly", "value"];
function Ff(e, t, n, a, o, l) {
  const s = j("Minus"), i = j("Plus");
  return u(), d("view", {
    class: B(e.classes)
  }, [
    h("view", {
      class: B(["nut-input-number__icon nut-input-number__left", { "nut-input-number__icon--disabled": !e.reduceAllow() }]),
      onClick: t[0] || (t[0] = (...r) => e.reduce && e.reduce(...r))
    }, [
      D(e.$slots, "left-icon", {}, () => [
        le(s, {
          width: e.pxCheck(e.buttonSize),
          height: e.pxCheck(e.buttonSize)
        }, null, 8, ["width", "height"])
      ])
    ], 2),
    h("input", {
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
    }, null, 44, Rf),
    h("view", {
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
const Zt = /* @__PURE__ */ K(Hf, [["render", Ff]]);
function vn(e, t, n) {
  const a = e.indexOf(t);
  return a === -1 ? e : t === "-" && a !== 0 ? e.slice(0, a) : e.slice(0, a + 1) + e.slice(a).replace(n, "");
}
function Wf(e, t = !0, n = !0) {
  t ? e = vn(e, ".", /\./g) : e = e.split(".")[0], n ? e = vn(e, "-", /-/g) : e = e.replace(/-/, "");
  const a = t ? /[^-0-9.]/g : /[^-0-9]/g;
  return e.replace(a, "");
}
function Yf(e) {
  return e === "number" ? {
    type: "text",
    inputmode: "decimal"
  } : e === "digit" ? {
    type: "tel",
    inputmode: "numeric"
  } : { type: e };
}
const { componentName: jf, create: Kf } = Y("input"), Uf = Kf({
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
    const n = P(!1), a = P(), o = () => {
      var M;
      return String((M = e.modelValue) != null ? M : "");
    }, l = (M) => we("input", G({}, Yf(M))), s = ue({
      focused: !1,
      validateFailed: !1,
      // 校验失败
      validateMessage: ""
      // 校验信息
    }), i = N(() => {
      const M = jf;
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
        M = Wf(M, E, E);
      }
      e.formatter && A === e.formatTrigger && (M = e.formatter(M)), ((C = a == null ? void 0 : a.value) == null ? void 0 : C.value) !== M && (a.value.value = M), M !== e.modelValue && t("update:modelValue", M);
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
      s.validateFailed && (s.validateFailed = !1, s.validateMessage = "");
    }, k = (M) => {
      e.disabled || t("clickInput", M);
    }, c = (M) => {
      t("click", M);
    }, $ = ({ target: M }) => {
      M.composing = !0;
    }, m = ({ target: M }) => {
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
      renderInput: l,
      inputRef: a,
      active: n,
      classes: i,
      styles: r,
      onInput: p,
      onFocus: v,
      onBlur: y,
      clear: g,
      startComposing: $,
      endComposing: m,
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
}), Xf = { class: "nut-input-value" }, qf = { class: "nut-input-inner" }, Gf = {
  key: 0,
  class: "nut-input-left-box"
}, Zf = { class: "nut-input-box" }, Jf = {
  key: 0,
  class: "nut-input-word-limit"
}, Qf = { class: "nut-input-word-num" }, xf = { class: "nut-input-right-box" };
function ep(e, t, n, a, o, l) {
  const s = j("MaskClose");
  return u(), d("view", {
    class: B(e.classes),
    onClick: t[1] || (t[1] = (...i) => e.onClick && e.onClick(...i))
  }, [
    h("view", Xf, [
      h("view", qf, [
        e.$slots.left ? (u(), d("view", Gf, [
          D(e.$slots, "left")
        ])) : S("", !0),
        h("view", Zf, [
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
          e.showWordLimit && e.maxLength ? (u(), d("view", Jf, [
            h("span", Qf, _(e.getModelValue() ? e.getModelValue().length : 0), 1),
            ge("/" + _(e.maxLength), 1)
          ])) : S("", !0)
        ]),
        e.clearable && !e.readonly ? Se((u(), d("view", {
          key: 1,
          class: "nut-input-clear-box",
          onClick: t[0] || (t[0] = (...i) => e.clear && e.clear(...i))
        }, [
          D(e.$slots, "clear", {}, () => [
            le(s, dt({ class: "nut-input-clear" }, e.$attrs, {
              size: e.clearSize,
              width: e.clearSize,
              height: e.clearSize
            }), null, 16, ["size", "width", "height"])
          ])
        ], 512)), [
          [De, (e.active || e.showClearIcon) && e.getModelValue().length > 0]
        ]) : S("", !0),
        h("view", xf, [
          D(e.$slots, "right")
        ])
      ])
    ])
  ], 2);
}
const tp = /* @__PURE__ */ K(Uf, [["render", ep]]), ao = Symbol("nut-radio"), { componentName: Ge, create: np } = Y("radio"), io = np({
  components: {
    CheckNormal: At,
    CheckChecked: cn
  },
  props: {
    disabled: {
      type: Boolean,
      default: !1
    },
    shape: {
      type: String,
      default: "round"
      // button
    },
    label: {
      type: [String, Number, Boolean],
      default: ""
    },
    iconSize: {
      type: [String, Number],
      default: ""
    }
  },
  setup(e, { slots: t }) {
    let n = Be(ao, null);
    const a = N(() => n.label.value === e.label), o = N(() => e.disabled ? "nut-radio__icon--disable" : a.value ? "nut-radio__icon" : "nut-radio__icon--unchecked"), l = () => {
      const { iconSize: f } = e, v = {
        CheckNormal: t.icon ? t.icon : At,
        Checked: t.checkedIcon ? t.checkedIcon : cn
      }, y = a.value ? v.Checked : v.CheckNormal, g = _e(f);
      return we(y, {
        width: g,
        height: g,
        class: o.value
      });
    }, s = () => {
      var f;
      return we(
        "view",
        {
          class: `${Ge}__label ${e.disabled ? `${Ge}__label--disabled` : ""}`
        },
        (f = t.default) == null ? void 0 : f.call(t)
      );
    }, i = () => {
      var f;
      return we(
        "view",
        {
          class: `${Ge}__button ${a.value && `${Ge}__button--active`} ${e.disabled ? `${Ge}__button--disabled` : ""}`
        },
        (f = t.default) == null ? void 0 : f.call(t)
      );
    }, r = () => {
      a.value || e.disabled || n.updateValue(e.label);
    }, p = N(() => n.position.value === "left");
    return () => we(
      "view",
      {
        class: `${Ge} ${Ge}--${e.shape} ${p.value ? `${Ge}--reverse` : ""}`,
        onClick: r
      },
      [e.shape === "button" ? i() : [l(), s()]]
    );
  }
}), { componentName: $n, create: op } = Y("radio-group"), ro = op({
  props: {
    modelValue: {
      type: [Number, String, Boolean],
      default: ""
    },
    direction: {
      type: String,
      default: "vertical"
      //horizontal
    },
    textPosition: {
      type: String,
      default: "right"
    }
  },
  emits: ["change", "update:modelValue"],
  setup(e, { emit: t, slots: n }) {
    const a = (o) => t("update:modelValue", o);
    return Me(ao, {
      label: rn(N(() => e.modelValue)),
      position: rn(N(() => e.textPosition)),
      updateValue: a
    }), Q(
      () => e.modelValue,
      (o) => t("change", o)
    ), () => {
      var o;
      return we(
        "view",
        {
          class: `${$n} ${$n}--${e.direction}`
        },
        (o = n.default) == null ? void 0 : o.call(n)
      );
    };
  }
}), { create: lp } = Y("rate"), sp = lp({
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
      default: () => dn
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
  components: { StarFillN: dn },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t, slots: n }) {
    const a = P([]), o = (f) => {
      t("update:modelValue", f), t("change", f);
    }, l = (f, v) => {
      if (e.disabled || e.readonly)
        return;
      let y = 0;
      v === 1 && e.modelValue === v ? y = 0 : (y = v, e.allowHalf && f == 2 && (y -= 0.5)), o(y);
    }, s = (f, v, y) => {
      let g = 0;
      for (let b = v.value.length - 1; b >= 0; b--) {
        const k = v.value[b];
        if (f > k.offsetLeft) {
          y ? g = b + (f > k.offsetLeft + k.clientWidth / 2 ? 1 : 0.5) : g = b + 1;
          break;
        }
      }
      return g;
    }, i = qe(), r = {
      onTouchStart(f) {
        !e.touchable || e.readonly || i.start(f);
      },
      onTouchMove(f) {
        e.touchable && (i.move(f), i.isHorizontal() && a.value && (f.preventDefault(), o(s(i.moveX.value, a, e.allowHalf))));
      }
    }, p = Math.random().toString(36).slice(-8);
    return ce(G({}, r), {
      onClick: l,
      pxCheck: _e,
      rateRefs: a,
      refRandomId: p,
      renderIcon: ot,
      slots: n
    });
  }
}), ap = ["id"], ip = { class: "nut-rate-item__icon--full" }, rp = {
  key: 0,
  class: "nut-rate-item__icon--half"
}, up = {
  key: 1,
  class: "nut-rate-item__icon--half"
};
function cp(e, t, n, a, o, l) {
  return u(), d("view", {
    class: "nut-rate",
    onTouchstart: t[0] || (t[0] = (...s) => e.onTouchStart && e.onTouchStart(...s)),
    onTouchmove: t[1] || (t[1] = (...s) => e.onTouchMove && e.onTouchMove(...s))
  }, [
    (u(!0), d(ee, null, re(Number(e.count), (s) => (u(), d("view", {
      id: "rateRefs-" + e.refRandomId + s,
      key: s,
      ref_for: !0,
      ref: "rateRefs",
      class: "nut-rate-item",
      style: L(s < Number(e.count) ? { marginRight: e.pxCheck(e.spacing) } : {})
    }, [
      h("view", ip, [
        (u(), x(Ae(
          e.renderIcon(e.customIcon, {
            width: e.size,
            height: e.size,
            size: e.size,
            color: s <= Number(e.modelValue) ? e.activeColor : e.voidColor
          })
        ), {
          class: B(["nut-rate-item__icon", { "nut-rate-item__icon--disabled": e.disabled || s > Number(e.modelValue) }]),
          onClick: (i) => e.onClick(1, s)
        }, null, 8, ["class", "onClick"]))
      ]),
      e.allowHalf && Number(e.modelValue) + 1 > s ? (u(), d("view", rp, [
        (u(), x(Ae(
          e.renderIcon(e.customIcon, {
            width: e.size,
            height: e.size,
            size: e.size,
            color: s <= Number(e.modelValue) + 1 ? e.activeColor : e.voidColor
          })
        ), {
          class: "nut-rate-item__icon",
          onClick: (i) => e.onClick(2, s)
        }, null, 8, ["onClick"]))
      ])) : e.allowHalf && Number(e.modelValue) + 1 < s ? (u(), d("view", up, [
        (u(), x(Ae(e.renderIcon(e.customIcon, { width: e.size, height: e.size, size: e.size, color: e.voidColor })), {
          class: "nut-rate-item__icon nut-rate-item__icon--disabled",
          onClick: (i) => e.onClick(2, s)
        }, null, 8, ["onClick"]))
      ])) : S("", !0)
    ], 12, ap))), 128))
  ], 32);
}
const uo = /* @__PURE__ */ K(sp, [["render", cp]]), { create: dp } = Y("short-password"), fp = "NutShortPassword", pp = dp({
  components: {
    NutPopup: Le,
    Tips: On
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
    const n = ke(fp), a = P(e.modelValue), o = N(() => r(Number(e.length))), l = P(e.visible), s = (f) => {
      f.stopPropagation(), t("focus");
    };
    Q(
      () => e.visible,
      (f) => {
        l.value = f;
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
      onTouchStart: s,
      range: r,
      close: i,
      onTips: () => {
        t("tips");
      },
      show: l,
      translate: n
    };
  }
}), mp = { class: "nut-short-password-title" }, hp = { class: "nut-short-password-subtitle" }, gp = { class: "nut-short-password-wrapper" }, yp = {
  key: 0,
  class: "nut-short-password__item-icon"
}, vp = { class: "nut-short-password__message" }, $p = { class: "nut-short-password--error" }, bp = {
  key: 0,
  class: "nut-short-password--forget"
};
function kp(e, t, n, a, o, l) {
  const s = j("tips"), i = j("nut-popup");
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
        h("view", mp, _(e.title || e.translate("title")), 1),
        h("view", hp, _(e.desc || e.translate("desc")), 1),
        h("div", gp, [
          h("view", {
            class: "nut-short-password__list",
            onTouchstart: t[0] || (t[0] = (...r) => e.onTouchStart && e.onTouchStart(...r))
          }, [
            (u(!0), d(ee, null, re(new Array(e.comLen), (r, p) => (u(), d("view", {
              key: p,
              class: "nut-short-password__item"
            }, [
              String(e.realInput).length > p ? (u(), d("view", yp)) : S("", !0)
            ]))), 128))
          ], 32)
        ]),
        h("view", vp, [
          h("view", $p, _(e.errorMsg), 1),
          e.tips || e.translate("tips") ? (u(), d("view", bp, [
            le(s, {
              class: "icon",
              width: "11px",
              height: "11px"
            }),
            h("view", {
              onClick: t[1] || (t[1] = (...r) => e.onTips && e.onTips(...r))
            }, _(e.tips || e.translate("tips")), 1)
          ])) : S("", !0)
        ])
      ]),
      _: 1
    }, 8, ["visible", "close-on-click-overlay", "lock-scroll", "onClickCloseIcon", "onClickOverlay"])
  ]);
}
const wp = /* @__PURE__ */ K(pp, [["render", kp]]), { create: Cp } = Y("textarea"), Sp = "NutTextarea", Tp = Cp({
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
    const n = ke(Sp), a = P(), o = N(() => {
      const g = "nut-textarea";
      return {
        [g]: !0,
        [`${g}--disabled`]: e.disabled
      };
    });
    ve(() => {
      e.modelValue && i(String(e.modelValue)), e.autosize && Te(s);
    });
    const l = N(() => ({
      textAlign: e.textAlign
      // resize: props.autosize ? 'vertical' : 'none'
    })), s = () => {
      let g = a.value;
      g.style.height = "auto";
      let b = g.scrollHeight;
      if (typeof e.autosize == "object") {
        const { maxHeight: k, minHeight: c } = e.autosize;
        k !== void 0 && (b = Math.min(b, k)), c !== void 0 && (b = Math.max(b, c));
      }
      b && (g.style.height = b + "px");
    };
    Q(
      () => e.modelValue,
      () => {
        e.autosize && Te(s);
      }
    );
    const i = (g, b) => {
      e.maxLength && g.length > Number(e.maxLength) && (g = g.substring(0, Number(e.maxLength))), t("update:modelValue", g, b), t("change", g, b);
    };
    return {
      textareaRef: a,
      classes: o,
      styles: l,
      change: (g) => {
        if (!g.target.composing) {
          const b = g.target;
          let k = b.value;
          e.maxLength && k.length > Number(e.maxLength) && (k = k.slice(0, Number(e.maxLength))), i(b.value, g);
        }
      },
      focus: (g) => {
        e.disabled || e.readonly || t("focus", g);
      },
      blur: (g) => {
        if (e.disabled || e.readonly)
          return;
        let k = g.target.value;
        i(k, g), t("blur", { value: k, event: g });
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
}), Np = ["rows", "disabled", "readonly", "value", "maxlength", "placeholder", "autofocus"], Dp = {
  key: 0,
  class: "nut-textarea__limit"
};
function Ip(e, t, n, a, o, l) {
  return u(), d("view", {
    class: B(e.classes)
  }, [
    h("textarea", {
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
      onInput: t[0] || (t[0] = (...s) => e.change && e.change(...s)),
      onBlur: t[1] || (t[1] = (...s) => e.blur && e.blur(...s)),
      onFocus: t[2] || (t[2] = (...s) => e.focus && e.focus(...s)),
      onChange: t[3] || (t[3] = (...s) => e.endComposing && e.endComposing(...s)),
      onCompositionend: t[4] || (t[4] = (...s) => e.endComposing && e.endComposing(...s)),
      onCompositionstart: t[5] || (t[5] = (...s) => e.startComposing && e.startComposing(...s))
    }, null, 44, Np),
    e.limitShow ? (u(), d("view", Dp, _(e.modelValue ? e.modelValue.length : 0) + "/" + _(e.maxLength), 1)) : S("", !0)
  ], 2);
}
const _p = /* @__PURE__ */ K(Tp, [["render", Ip]]);
class Bp {
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
let Mp = class {
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
          var l;
          (l = t.onProgress) == null || l.call(t, o, t);
        },
        !1
      ), n.onreadystatechange = () => {
        var o, l;
        n.readyState === 4 && (n.status == t.xhrState ? (o = t.onSuccess) == null || o.call(t, n.responseText, t) : (l = t.onFailure) == null || l.call(t, n.responseText, t));
      }, n.withCredentials = t.withCredentials, n.open(t.method, t.url, !0);
      for (const [o, l] of Object.entries(t.headers))
        n.setRequestHeader(o, l);
      (a = t.onStart) == null || a.call(t, t), t.beforeXhrUpload ? t.beforeXhrUpload(n, t) : n.send(t.formData);
    } else
      console.warn("浏览器不支持 XMLHttpRequest");
  }
};
class Lp {
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
const { create: Ep } = Y("progress"), Pp = Ep({
  components: { Checked: Pn },
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
    })), l = N(() => ({
      color: e.textColor || ""
    }));
    return {
      height: n,
      percentage: a,
      bgStyle: o,
      textStyle: l,
      slotDefault: t
    };
  }
}), Ap = { class: "nut-progress" };
function zp(e, t, n, a, o, l) {
  const s = j("Checked");
  return u(), d("div", Ap, [
    h("div", {
      class: B(["nut-progress-outer", [e.showText && !e.textInside ? "nut-progress-outer-part" : "", e.size ? "nut-progress-" + e.size : ""]]),
      style: L({ height: e.height })
    }, [
      h("div", {
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
        h("span", {
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
        le(s, {
          width: "15px",
          height: "15px",
          color: "#439422"
        })
      ]) : S("", !0)
    ], 4)) : S("", !0)
  ]);
}
const co = /* @__PURE__ */ K(Pp, [["render", zp]]), { create: Vp } = Y("uploader"), Op = "NutUploader", Hp = Vp({
  components: {
    NutProgress: co,
    Photograph: Ta,
    Failure: Vn,
    Loading: Qe,
    Del: An,
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
    const n = ke(Op), a = P(e.fileList), o = P([]);
    Q(
      () => e.fileList,
      () => {
        a.value = e.fileList;
      }
    );
    const l = () => {
      let $ = {
        class: "nut-uploader__input",
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        name: e.name,
        disabled: e.disabled
      };
      return e.capture && ($.capture = "camera", $.accept || ($.accept = "image/*")), we("input", $);
    }, s = ($) => {
      $.value = "";
    }, i = ($) => {
      t("fileItemClick", { fileItem: $ });
    }, r = ($, m) => {
      const w = new Bp();
      w.url = e.url, w.formData = $.formData, w.timeout = e.timeout * 1, w.method = e.method, w.xhrState = e.xhrState, w.headers = e.headers, w.withCredentials = e.withCredentials, w.beforeXhrUpload = e.beforeXhrUpload;
      try {
        w.sourceFile = $.formData.get(e.name);
      } catch (T) {
        console.warn("[NutUI] <Uploader> formData.get(name)", T);
      }
      w.onStart = (T) => {
        $.status = "ready", $.message = n("readyUpload"), p(m), t("start", T);
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
      let I = new Mp(w);
      e.autoUpload ? I.upload() : o.value.push(
        new Promise((T) => {
          T(I);
        })
      );
    }, p = ($ = -1) => {
      $ > -1 ? o.value.splice($, 1) : (o.value = [], a.value = [], t("update:fileList", a.value));
    }, f = () => {
      Promise.all(o.value).then(($) => {
        $.forEach((m) => m.upload());
      });
    }, v = ($) => {
      $.forEach((m, w) => {
        const I = new FormData();
        for (const [W, M] of Object.entries(e.data))
          I.append(W, M);
        I.append(e.name, m);
        const T = ue(new Lp());
        if (T.name = m.name, T.status = "ready", T.type = m.type, T.formData = I, T.message = n("waitingUpload"), r(T, w), e.isPreview && m.type.includes("image")) {
          const W = new FileReader();
          W.onload = (M) => {
            T.url = M.target.result, a.value.push(T);
          }, W.readAsDataURL(m);
        } else
          a.value.push(T);
      });
    }, y = ($) => {
      const m = e.maximum * 1, w = e.maximize * 1, I = new Array();
      $ = $.filter((W) => W.size > w ? (I.push(W), !1) : !0), I.length && t("oversize", I);
      let T = $.length + a.value.length;
      return T > m && $.splice($.length - (T - m)), $;
    }, g = ($, m) => {
      a.value.splice(m, 1), t("delete", {
        file: $,
        fileList: a.value,
        index: m
      });
    }, b = ($, m) => {
      p(m), Yt(e.beforeDelete, {
        args: [$, a.value],
        done: () => g($, m)
      });
    }, k = ($) => {
      if (e.disabled)
        return;
      const m = $.target;
      let { files: w } = m;
      e.beforeUpload ? e.beforeUpload(w).then((I) => c(I)) : c(w), t("change", {
        fileList: a.value,
        event: $
      }), e.clearInput && s(m);
    }, c = ($) => {
      const m = y(new Array().slice.call($));
      v(m);
    };
    return {
      onChange: k,
      onDelete: b,
      fileList: a,
      fileItemClick: i,
      clearUploadQueue: p,
      submit: f,
      renderInput: l
    };
  }
}), Rp = { class: "nut-uploader" }, Fp = {
  key: 0,
  class: "nut-uploader__slot"
}, Wp = {
  key: 0,
  class: "nut-uploader__preview-img"
}, Yp = {
  key: 0,
  class: "nut-uploader__preview__progress"
}, jp = { class: "nut-uploader__preview__progress__msg" }, Kp = ["onClick"], Up = ["src", "onClick"], Xp = {
  key: 3,
  class: "nut-uploader__preview-img__file"
}, qp = ["onClick"], Gp = { class: "file__name_tips" }, Zp = { class: "tips" }, Jp = {
  key: 1,
  class: "nut-uploader__preview-list"
}, Qp = ["onClick"], xp = { class: "file__name_tips" };
function e1(e, t, n, a, o, l) {
  const s = j("Failure"), i = j("Loading"), r = j("Link"), p = j("Del"), f = j("nut-progress"), v = j("Photograph");
  return u(), d("view", Rp, [
    e.$slots.default ? (u(), d("view", Fp, [
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
        e.listType == "picture" && !e.$slots.default ? (u(), d("view", Wp, [
          y.status != "success" ? (u(), d("view", Yp, [
            y.status != "ready" ? (u(), d(ee, { key: 0 }, [
              y.status == "error" ? (u(), x(s, {
                key: 0,
                color: "#fff"
              })) : (u(), x(i, {
                key: 1,
                name: "loading",
                color: "#fff"
              }))
            ], 64)) : S("", !0),
            h("view", jp, _(y.message), 1)
          ])) : S("", !0),
          e.isDeletable ? (u(), d("view", {
            key: 1,
            class: "close",
            onClick: (k) => e.onDelete(y, g)
          }, [
            D(e.$slots, "delete-icon", {}, () => [
              le(s)
            ])
          ], 8, Kp)) : S("", !0),
          (b = y == null ? void 0 : y.type) != null && b.includes("image") && y.url ? (u(), d("img", {
            key: 2,
            class: "nut-uploader__preview-img__c",
            src: y.url,
            onClick: (k) => e.fileItemClick(y)
          }, null, 8, Up)) : (u(), d("view", Xp, [
            h("view", {
              class: "nut-uploader__preview-img__file__name",
              onClick: (k) => e.fileItemClick(y)
            }, [
              h("view", Gp, _(y.name), 1)
            ], 8, qp)
          ])),
          h("view", Zp, _(y.name), 1)
        ])) : e.listType == "list" ? (u(), d("view", Jp, [
          h("view", {
            class: B(["nut-uploader__preview-img__file__name", [y.status]]),
            onClick: (k) => e.fileItemClick(y)
          }, [
            le(r, { class: "nut-uploader__preview-img__file__link" }),
            h("view", xp, _(y.name), 1),
            e.isDeletable ? (u(), x(p, {
              key: 0,
              color: "#808080",
              class: "nut-uploader__preview-img__file__del",
              onClick: (k) => e.onDelete(y, g)
            }, null, 8, ["onClick"])) : S("", !0)
          ], 10, Qp),
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
const t1 = /* @__PURE__ */ K(Hp, [["render", e1]]), { create: n1 } = Y("number-keyboard"), o1 = "NutNumberKeyboard", l1 = n1({
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
    const n = ke(o1), a = P(void 0), o = P(e.visible), l = P();
    function s() {
      const { customKey: c } = e;
      let $ = {
        id: "lock",
        type: "lock"
      }, m = Array.isArray(c) ? c : [c];
      return m.length === 1 && ($ = {
        id: m[0],
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
      let m = Array.isArray($) ? $ : [$];
      return m.length > 2 && (m = [m[0], m[1]]), m.length == 2 && e.title && e.type != "rightColumn" && (m = [m[0]]), m.length === 1 ? e.title && e.type != "rightColumn" ? c.push({ id: m[0], type: "custom" }, { id: 0, type: "number" }, { id: "delete", type: "delete" }) : c.push({ id: 0, type: "number" }, { id: m[0], type: "custom" }) : m.length === 2 && c.push(
        { id: m[0], type: "custom" },
        { id: 0, type: "number" },
        { id: m[1], type: "custom" }
      ), c;
    }
    const p = N(() => e.type == "rightColumn" || e.title != "" ? r() : s()), f = () => {
      e.visible && t("blur");
    }, v = (c) => {
      const $ = l.value;
      $ && !$.contains(c.target) && f();
    };
    Q(
      () => e.visible,
      (c) => {
        o.value = c, c ? window.addEventListener("touchstart", v, !1) : window.removeEventListener("touchstart", v, !1);
      }
    );
    function y(c, $) {
      $.stopPropagation(), a.value = c.id, (c.type == "number" || c.type == "custom") && (t("input", c.id), e.modelValue.length < +e.maxlength && t("update:modelValue", e.modelValue + c.id)), c.type == "lock" && k(), c.type == "delete" && (t("delete"), t("update:modelValue", e.modelValue.slice(0, e.modelValue.length - 1)));
    }
    function g(c) {
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
      defaultKey: s,
      closeBoard: k,
      onTouchEnd: b,
      onTouchMove: g,
      onTouchstart: y,
      keysList: p,
      genCustomKeys: r,
      getBasicKeys: i,
      root: l,
      show: o,
      translate: n
    };
  }
}), s1 = { ref: "root" }, a1 = { class: "nut-number-keyboard" }, i1 = {
  key: 0,
  class: "nut-number-keyboard__header"
}, r1 = { class: "nut-number-keyboard__title" }, u1 = { class: "nut-number-keyboard__body" }, c1 = { class: "nut-number-keyboard__keys" }, d1 = ["onTouchstart"], f1 = {
  key: 1,
  src: "https://img11.360buyimg.com/imagetools/jfs/t1/146371/38/8485/738/5f606425Eca239740/14f4b4f5f20d8a68.png"
}, p1 = {
  key: 2,
  src: "https://img11.360buyimg.com/imagetools/jfs/t1/129395/8/12735/2030/5f61ac37E70cab338/fb477dc11f46056c.png"
}, m1 = {
  key: 0,
  class: "nut-number-keyboard__sidebar"
}, h1 = { class: "nut-key__wrapper" }, g1 = /* @__PURE__ */ h("img", { src: "https://img11.360buyimg.com/imagetools/jfs/t1/129395/8/12735/2030/5f61ac37E70cab338/fb477dc11f46056c.png" }, null, -1), y1 = [
  g1
];
function v1(e, t, n, a, o, l) {
  const s = j("nut-popup");
  return u(), d("div", s1, [
    le(s, {
      visible: e.show,
      "onUpdate:visible": t[7] || (t[7] = (i) => e.show = i),
      position: "bottom",
      "pop-class": e.popClass,
      overlay: !1,
      "lock-scroll": e.lockScroll,
      "teleport-disable": !1
    }, {
      default: te(() => [
        h("div", a1, [
          e.title ? (u(), d("div", i1, [
            h("h3", r1, _(e.title), 1),
            e.type == "default" ? (u(), d("span", {
              key: 0,
              class: "nut-number-keyboard__close",
              onClick: t[0] || (t[0] = (i) => e.closeBoard())
            }, _(e.translate("done")), 1)) : S("", !0)
          ])) : S("", !0),
          h("div", u1, [
            h("div", c1, [
              (u(!0), d(ee, null, re(e.keysList, (i) => (u(), d("div", {
                key: "key" + i.id,
                class: B([
                  "nut-key__wrapper",
                  {
                    "nut-key__wrapper--wider": i.id == 0 && e.type == "rightColumn" && Array.isArray(e.customKey) && e.customKey.length == 1
                  }
                ])
              }, [
                h("div", {
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
                  i.type == "lock" ? (u(), d("img", f1)) : S("", !0),
                  i.type == "delete" ? (u(), d("img", p1)) : S("", !0)
                ], 42, d1)
              ], 2))), 128))
            ]),
            e.type == "rightColumn" ? (u(), d("div", m1, [
              h("div", h1, [
                h("div", {
                  class: B(["nut-key", { active: e.clickKeyIndex == "delete" }]),
                  onTouchstart: t[3] || (t[3] = (i) => e.onTouchstart({ id: "delete", type: "delete" }, i)),
                  onTouchmove: t[4] || (t[4] = (i) => e.onTouchMove(i)),
                  onTouchend: t[5] || (t[5] = (...i) => e.onTouchEnd && e.onTouchEnd(...i))
                }, y1, 34)
              ]),
              h("div", {
                class: "nut-key__wrapper nut-key__wrapper--finish",
                onClick: t[6] || (t[6] = (i) => e.closeBoard())
              }, [
                h("div", {
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
const $1 = /* @__PURE__ */ K(l1, [["render", v1]]), fo = Symbol("nut-form"), b1 = (e) => ({
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
    const { children: a, linkChildren: o } = qn(fo);
    o({ props: t });
    const l = N(() => ue({}));
    Me("formErrorTip", l);
    const s = () => {
      Object.keys(l.value).forEach((g) => {
        l.value[g] = "";
      });
    }, i = () => {
      s();
    };
    Q(
      () => t.modelValue,
      () => {
        s();
      },
      { immediate: !0 }
    );
    const r = () => {
      const g = [];
      return a.forEach((b) => {
        g.push({
          prop: b == null ? void 0 : b.prop,
          rules: (b == null ? void 0 : b.rules) || []
        });
      }), g;
    }, p = (g) => {
      g.message && n("validate", g), l.value[g.prop] = g.message;
    }, f = (g) => Ke(this, null, function* () {
      const { rules: b, prop: k } = g, c = (T) => new Promise((W, M) => {
        try {
          p(T), W(T);
        } catch (A) {
          M(A);
        }
      });
      k || console.warn("[NutUI] <FormItem> 使用 rules 校验规则时 , 必须设置 prop 参数");
      const $ = Pt(t.modelValue, k || "");
      p({ prop: k, message: "" });
      const m = t.rules || {}, w = [...(m == null ? void 0 : m[k]) || [], ...b];
      for (; w.length; ) {
        const I = w.shift(), { validator: W } = I, M = Lt(I, ["validator"]), { required: A, regex: C, message: E } = M, V = { prop: k, message: E || "" };
        if (A && !$ && $ !== 0 || C && !C.test(String($)))
          return c(V);
        if (W) {
          const X = W($, M);
          if (_n(X))
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
    }), v = (g = "") => new Promise((b, k) => {
      try {
        const $ = r().map((m) => g && g !== m.prop ? Promise.resolve(!0) : f(m));
        Promise.all($).then((m) => {
          m = m.filter((I) => I !== !0);
          const w = { valid: !0, errors: [] };
          m.length && (w.valid = !1, w.errors = m), b(w);
        });
      } catch (c) {
        k(c);
      }
    });
    return { validate: v, reset: i, submit: () => (v(), !1), formErrorTip: l };
  }
}), { create: k1 } = Y("form"), w1 = k1(
  b1({
    NutCellGroup: Rn
  })
), C1 = ["onSubmit"];
function S1(e, t, n, a, o, l) {
  const s = j("nut-cell-group");
  return u(), d("form", {
    class: "nut-form",
    action: "#",
    onSubmit: Ne(() => !1, ["prevent"])
  }, [
    le(s, null, {
      default: te(() => [
        D(e.$slots, "default")
      ]),
      _: 3
    })
  ], 40, C1);
}
const po = /* @__PURE__ */ K(w1, [["render", S1]]), { create: T1 } = Y("form-item"), N1 = T1({
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
    NutCell: Hn
  },
  setup(e, { slots: t }) {
    const { parent: n } = Gn(fo), a = N(() => {
      var g;
      const v = (g = n.props) == null ? void 0 : g.rules;
      let y = !1;
      for (const b in v)
        Object.prototype.hasOwnProperty.call(v, b) && b === e.prop && Array.isArray(v[b]) && (y = v[b].some((k) => k.required));
      return e.required || e.rules.some((b) => b.required) || y;
    }), o = N(() => {
      const v = n.props.labelPosition, y = e.labelPosition ? e.labelPosition : v;
      return y !== "left" ? `nut-form-item__${y}` : "";
    }), l = N(() => {
      const v = n.props.starPosition, y = e.starPosition ? e.starPosition : v;
      return y !== "left" ? `nut-form-item__star-${y}` : "";
    }), s = Be("formErrorTip"), i = N(() => ({
      width: _e(e.labelWidth),
      textAlign: e.labelAlign
    })), r = N(() => ({
      textAlign: e.bodyAlign
    })), p = N(() => ({
      textAlign: e.errorMessageAlign
    }));
    return {
      parent: s,
      labelStyle: i,
      bodyStyle: r,
      errorMessageStyle: p,
      getSlots: (v) => t[v],
      isRequired: a,
      labelPositionClass: o,
      starPositionClass: l
    };
  }
}), D1 = { class: "nut-cell__value nut-form-item__body" };
function I1(e, t, n, a, o, l) {
  const s = j("nut-cell");
  return u(), x(s, {
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
      h("view", D1, [
        h("view", {
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
const mo = /* @__PURE__ */ K(N1, [["render", I1]]), ho = Symbol("nut-swipe"), { create: _1 } = Y("swipe"), B1 = _1({
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
    }, a = P(!1), o = P(), l = N(() => n(o)), s = P(), i = N(() => n(s)), r = Be(ho, null);
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
      r && r.update(e.name), p.value = !0, I && (y.offset = I === "left" ? -i.value : l.value), t("open", {
        name: e.name,
        position: f || I
      });
    }, b = () => {
      y.offset = 0, p.value && (p.value = !1, t("close", {
        name: e.name,
        position: f
      }));
    }, k = (I, T, W) => {
      W ? I.stopPropagation() : b(), t("click", T);
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
          p.value && v === f ? T = l.value : T = Math.abs(I) > l.value ? l.value : I;
          break;
      }
      y.offset = T;
    }, m = qe();
    return ce(G({
      touchStyle: c
    }, {
      onTouchStart(I) {
        e.disabled || m.start(I);
      },
      onTouchMove(I) {
        e.disabled || (m.move(I), m.isHorizontal() && (a.value = !0, y.moving = !0, $(m.deltaX.value), e.touchMovePreventDefault && I.preventDefault(), e.touchMoveStopPropagation && I.stopPropagation()));
      },
      onTouchEnd() {
        if (y.moving) {
          switch (y.moving = !1, v = f, f) {
            case "left":
              Math.abs(y.offset) <= i.value / 2 ? b() : (y.offset = -i.value, g());
              break;
            case "right":
              Math.abs(y.offset) <= l.value / 2 ? b() : (y.offset = l.value, g());
              break;
          }
          setTimeout(() => {
            a.value = !1;
          }, 0);
        }
      }
    }), {
      leftRef: o,
      rightRef: s,
      open: g,
      close: b,
      onClick: k,
      lockClick: a
    });
  }
});
function M1(e, t, n, a, o, l) {
  return u(), d("view", {
    class: "nut-swipe",
    style: L(e.touchStyle),
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
      D(e.$slots, "left")
    ], 512),
    h("view", {
      class: "nut-swipe__content",
      onClick: t[1] || (t[1] = (s) => e.onClick(s, "content", e.lockClick))
    }, [
      D(e.$slots, "default")
    ]),
    h("view", {
      ref: "rightRef",
      class: "nut-swipe__right",
      onClick: t[2] || (t[2] = (s) => e.onClick(s, "right", !0))
    }, [
      D(e.$slots, "right")
    ], 512)
  ], 36);
}
const go = /* @__PURE__ */ K(B1, [["render", M1]]), { create: L1 } = Y("swipe-group"), E1 = L1({
  props: {
    lock: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = P(null), n = P("");
    return Me(ho, {
      update: (o) => {
        n.value = o;
      },
      lock: e.lock,
      name: n
    }), { swipeGroupRef: t };
  }
}), P1 = {
  ref: "swipeGroupRef",
  class: "nut-swipe-group"
};
function A1(e, t, n, a, o, l) {
  return u(), d("div", P1, [
    D(e.$slots, "default")
  ], 512);
}
const z1 = /* @__PURE__ */ K(E1, [["render", A1]]), { create: V1 } = Y("action-sheet"), O1 = V1({
  components: {
    NutPopup: Le,
    Loading: Qe
  },
  props: ce(G({}, gt), {
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
}), H1 = { class: "nut-action-sheet" }, R1 = {
  key: 0,
  class: "nut-action-sheet__title"
}, F1 = { key: 1 }, W1 = {
  key: 0,
  class: "nut-action-sheet__item nut-action-sheet__desc"
}, Y1 = {
  key: 1,
  class: "nut-action-sheet__menu"
}, j1 = ["onClick"], K1 = { key: 1 }, U1 = { class: "nut-action-sheet__subdesc" };
function X1(e, t, n, a, o, l) {
  const s = j("Loading"), i = j("nut-popup");
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
      h("view", H1, [
        e.title ? (u(), d("view", R1, _(e.title), 1)) : S("", !0),
        D(e.$slots, "default"),
        e.slotDefault ? S("", !0) : (u(), d("view", F1, [
          e.description ? (u(), d("view", W1, _(e.description), 1)) : S("", !0),
          e.menuItems.length ? (u(), d("view", Y1, [
            (u(!0), d(ee, null, re(e.menuItems, (r, p) => (u(), d("view", {
              key: p,
              class: B(["nut-action-sheet__item", {
                "nut-action-sheet__item--disabled": r.disable,
                "nut-action-sheet__item--loading": r.loading
              }]),
              style: L({ color: e.isHighlight(r) || r.color }),
              onClick: (f) => e.chooseItem(r, p)
            }, [
              r.loading ? (u(), x(s, { key: 0 })) : (u(), d("view", K1, _(r[e.optionTag]), 1)),
              h("view", U1, _(r[e.optionSubTag]), 1)
            ], 14, j1))), 128))
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
const q1 = /* @__PURE__ */ K(O1, [["render", X1]]), { componentName: G1, create: Z1 } = Y("backtop"), J1 = Z1({
  components: {
    Top: Ci
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
      [G1]: !0,
      show: n.backTop
    })), o = N(() => ({
      right: `${e.right}px`,
      bottom: `${e.bottom}px`,
      zIndex: e.zIndex
    }));
    function l() {
      n.scrollEl instanceof Window ? n.scrollTop = n.scrollEl.pageYOffset : n.scrollTop = n.scrollEl.scrollTop, n.backTop = n.scrollTop >= e.distance;
    }
    function s(y = 0) {
      n.scrollEl instanceof Window ? window.scrollTo(0, y) : n.scrollEl.scrollTop = y;
    }
    function i() {
      let y = Ve(function g() {
        var b = e.duration - Math.max(0, n.startTime - +/* @__PURE__ */ new Date() + e.duration), k = b * -n.scrollTop / e.duration + n.scrollTop;
        s(k), y = Ve(g), (b == e.duration || k == 0) && kc(y);
      });
    }
    function r() {
      n.scrollEl.addEventListener("scroll", l, !1), n.scrollEl.addEventListener("resize", l, !1);
    }
    function p() {
      n.scrollEl.removeEventListener("scroll", l, !1), n.scrollEl.removeEventListener("resize", l, !1);
    }
    function f(y) {
      n.startTime = +/* @__PURE__ */ new Date(), e.isAnimation && e.duration > 0 ? i() : s(), t("click", y);
    }
    function v() {
      e.elId && document.getElementById(e.elId) && (n.scrollEl = document.getElementById(e.elId)), r();
    }
    return ve(() => {
      e.distance == 0 && (n.backTop = !0), v();
    }), je(() => {
      p();
    }), pt(() => {
      n.keepAlive && (n.keepAlive = !1, v());
    }), mt(() => {
      n.keepAlive = !0, p();
    }), {
      state: n,
      classes: a,
      style: o,
      click: f
    };
  }
});
function Q1(e, t, n, a, o, l) {
  const s = j("Top");
  return u(), d("div", {
    class: B(e.classes),
    style: L(e.style),
    onClick: t[0] || (t[0] = Ne((...i) => e.click && e.click(...i), ["stop"]))
  }, [
    D(e.$slots, "default", {}, () => [
      le(s, {
        width: "19px",
        height: "19px",
        class: "nut-backtop-main"
      })
    ])
  ], 6);
}
const x1 = /* @__PURE__ */ K(J1, [["render", Q1]]), { create: em } = Y("drag"), tm = em({
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
    function l(p, f) {
      f - parseInt(p.style.left.split("px")[0]) > 10 ? (p.style.left = parseInt(p.style.left.split("px")[0]) + 10 + "px", Ve(() => {
        l(p, f);
      })) : p.style.left = f + "px";
    }
    function s(p) {
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
        l(f, g);
      })), e.direction != "x" && (f.style.top = n.yPum + "px");
    }
    function r(p) {
      const f = p.currentTarget, v = p.touches[0], y = p.targetTouches[0];
      n.startTop = f.offsetTop, n.startLeft = f.offsetLeft, n.position.x = v.clientX, n.position.y = v.clientY, n.nx = y.clientX - n.position.x, n.ny = y.clientY - n.position.y, n.xPum = n.startLeft + n.nx, n.yPum = n.startTop + n.ny;
    }
    return ve(() => {
      a(), n.boundary = e.boundary;
    }), pt(() => {
      n.keepAlive && (n.keepAlive = !1);
    }), mt(() => {
      n.keepAlive = !0, t.value.removeEventListener("touchstart", r), t.value.removeEventListener("touchmove", s), t.value.removeEventListener("touchend", i);
    }), {
      myDrag: t,
      touchStart: r,
      touchMove: s,
      touchEnd: i
    };
  }
});
function nm(e, t, n, a, o, l) {
  return u(), d("view", {
    ref: "myDrag",
    class: "nut-drag",
    onTouchstart: t[0] || (t[0] = (s) => e.touchStart(s)),
    onTouchmove: t[1] || (t[1] = (s) => e.touchMove(s)),
    onTouchend: t[2] || (t[2] = (s) => e.touchEnd(s))
  }, [
    D(e.$slots, "default")
  ], 544);
}
const om = /* @__PURE__ */ K(tm, [["render", nm]]), { create: lm } = Y("dialog"), sm = "NutDialog", am = lm({
  inheritAttrs: !1,
  components: {
    NutPopup: Le,
    NutButton: Xe
  },
  props: ce(G({}, gt), {
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
    const n = ke(sm), a = P(e.visible);
    ve(() => {
      e.closeOnPopstate && window.addEventListener("popstate", function() {
        l("page");
      });
    }), Q(
      () => e.visible,
      (f) => {
        a.value = f, f && t("opened");
      }
    );
    const o = (f) => {
      t("update", f), t("update:visible", f);
    }, l = (f) => {
      Yt(e.beforeClose, {
        args: [f],
        done: () => {
          a.value = !1, o(!1), t("closed");
        }
      });
    }, s = () => {
      t("cancel"), e.cancelAutoClose && (a.value = !1, l("cancel"));
    }, i = () => {
      t("ok"), e.okAutoClose && l("ok");
    }, r = () => {
      e.closeOnClickOverlay && l("");
    }, p = N(() => ({
      textAlign: e.textAlign
    }));
    return {
      closed: l,
      onCancel: s,
      onOk: i,
      showPopup: a,
      onClickOverlay: r,
      contentStyle: p,
      translate: n
    };
  }
}), im = {
  key: 0,
  class: "nut-dialog__header"
}, rm = ["innerHTML"];
function um(e, t, n, a, o, l) {
  const s = j("nut-button"), i = j("nut-popup");
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
      h("view", {
        class: B(["nut-dialog", e.customClass])
      }, [
        e.$slots.header || e.title ? (u(), d("view", im, [
          e.$slots.header ? D(e.$slots, "header", { key: 0 }) : (u(), d(ee, { key: 1 }, [
            ge(_(e.title), 1)
          ], 64))
        ])) : S("", !0),
        h("view", {
          class: "nut-dialog__content",
          style: L(e.contentStyle)
        }, [
          e.$slots.default ? D(e.$slots, "default", { key: 0 }) : typeof e.content == "string" ? (u(), d("view", {
            key: 1,
            innerHTML: e.content
          }, null, 8, rm)) : (u(), x(Ae(e.content), { key: 2 }))
        ], 4),
        e.noFooter ? S("", !0) : (u(), d("view", {
          key: 1,
          class: B(["nut-dialog__footer", { [e.footerDirection]: e.footerDirection }])
        }, [
          e.$slots.footer ? D(e.$slots, "footer", { key: 0 }) : (u(), d(ee, { key: 1 }, [
            e.noCancelBtn ? S("", !0) : (u(), x(s, {
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
            e.noOkBtn ? S("", !0) : (u(), x(s, {
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
const Jt = /* @__PURE__ */ K(am, [["render", um]]);
class cm {
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
class dm {
  constructor(t) {
    z(this, "options", new cm());
    z(this, "instance");
    const n = Object.assign(this.options, t), { unmount: a } = Kt(n, {
      name: "dialog",
      components: [Le, Xe, ht],
      wrapper: (o, l) => ({
        setup() {
          return n.onUpdate = (s) => {
            s === !1 && Te(() => {
              a();
            });
          }, n != null && n.onOpened && (n == null || n.onOpened()), n.teleport = `#${l.id}`, () => we(Jt, n);
        }
      })
    });
  }
}
const fm = function(e) {
  return new dm(e);
};
fm.install = (e) => {
  e.use(Jt);
};
const { create: pm } = Y("infinite-loading"), mm = "NutInfiniteLoading", hm = pm({
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
    Loading: Qe
  },
  setup(e, { emit: t, slots: n }) {
    const a = ke(mm), o = P(), l = jn(o), s = ue({
      beforeScrollTop: 0,
      isInfiniting: !1,
      y: 0,
      x: 0,
      distance: 0
    }), i = (g) => g ? g.offsetTop + i(g.offsetParent) : 0, r = () => {
      let g = 0, b = 0, k = "down";
      if (l.value == window) {
        const c = Mn();
        o.value && (g = i(o.value) + o.value.offsetHeight - c - window.innerHeight), b = c;
      } else {
        const { scrollHeight: c, clientHeight: $, scrollTop: m } = l.value;
        g = c - $ - m, b = m;
      }
      return s.beforeScrollTop > b ? k = "up" : k = "down", s.beforeScrollTop = b, t("scrollChange", b), g <= e.threshold && k == "down";
    }, p = () => {
      Ve(() => {
        if (!r() || !e.hasMore || s.isInfiniting)
          return !1;
        s.isInfiniting = !0, t("update:modelValue", !0), Te(() => t("loadMore"));
      });
    }, f = () => {
      l.value && l.value.addEventListener("scroll", p, e.useCapture);
    }, v = () => {
      l.value && l.value.removeEventListener("scroll", p, e.useCapture);
    };
    ve(() => {
      f();
    }), je(() => {
      v();
    });
    const y = P(!1);
    return pt(() => {
      y.value && (y.value = !1, f());
    }), mt(() => {
      y.value = !0, v();
    }), Q(
      () => e.modelValue,
      (g) => {
        g || (s.isInfiniting = !1);
      }
    ), ce(G({
      scroller: o
    }, he(s)), {
      translate: a,
      slots: n
    });
  }
}), gm = {
  ref: "scroller",
  class: "nut-infinite-loading"
}, ym = { class: "nut-infinite__container" }, vm = { class: "nut-infinite__bottom" }, $m = {
  key: 0,
  class: "nut-infinite__bottom-box"
}, bm = { class: "nut-infinite__bottom-box__text" }, km = { class: "nut-infinite__bottom-tips" };
function wm(e, t, n, a, o, l) {
  const s = j("Loading");
  return u(), d("view", gm, [
    h("view", ym, [
      D(e.$slots, "default")
    ]),
    h("view", vm, [
      e.isInfiniting ? (u(), d("view", $m, [
        D(e.$slots, "loading", {}, () => [
          D(e.$slots, "loading-icon", {}, () => [
            le(s, { class: "nut-icon-loading nut-infinite__bottom-box__img" })
          ]),
          h("view", bm, _(e.loadTxt || e.translate("loading")), 1)
        ])
      ])) : e.hasMore ? S("", !0) : D(e.$slots, "finished", { key: 1 }, () => [
        h("view", km, _(e.loadMoreTxt || e.translate("loadMoreTxt")), 1)
      ])
    ])
  ], 512);
}
const Cm = /* @__PURE__ */ K(hm, [["render", wm]]), { create: Sm } = Y("pull-refresh"), Tm = "NutPullRefresh", Nm = Sm({
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
  components: { Loading: Qe },
  setup(e, { emit: t, slots: n }) {
    const a = ke(Tm), o = qe(), l = P(), s = jn(l), i = ue({
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
      const m = {};
      return e.headHeight != 50 && (m.height = _e(e.headHeight)), m;
    }), v = (m) => {
      const w = +(e.pullDistance || e.headHeight);
      let I = m;
      return m > w && (m < w * 2 ? I = (m + w) / 2 : I = w + m / 4), Math.round(I);
    }, y = (m, w, I) => {
      const T = +(e.pullDistance || e.headHeight);
      i.distance = m, w ? i.status = "loading" : I ? i.status = "complete" : m === 0 ? i.status = "normal" : m < T ? i.status = "pulling" : i.status = "loosing", t("change", { status: i.status, distance: m });
    }, g = () => i.status !== "loading" && i.status !== "complete", b = () => s.value == window ? Mn() == 0 : s.value && s.value.scrollTop == 0, k = (m) => {
      g() && (b() ? (o.start(m), i.isPullRefresh = !0) : (i.distance = 0, i.isPullRefresh = !1));
    }, c = (m) => {
      if (g()) {
        o.move(m);
        const { deltaY: w } = o;
        o.isVertical() && w.value > 0 && i.isPullRefresh && (m.preventDefault(), y(v(w.value)));
      }
    }, $ = () => {
      i.isPullRefresh && g() && o.deltaY.value && (i.status === "loosing" ? (y(+e.headHeight, !0), t("update:modelValue", !0), Te(() => t("refresh"))) : y(0)), setTimeout(() => {
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
    ), ce(G({
      scroller: l
    }, he(i)), {
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
}), Dm = { class: "nut-pull-refresh-container-topbox-text" };
function Im(e, t, n, a, o, l) {
  const s = j("Loading");
  return u(), d("div", {
    ref: "scroller",
    class: "nut-pull-refresh",
    onTouchstart: t[0] || (t[0] = (...i) => e.touchStart && e.touchStart(...i)),
    onTouchmove: t[1] || (t[1] = (...i) => e.touchMove && e.touchMove(...i)),
    onTouchend: t[2] || (t[2] = (...i) => e.touchEnd && e.touchEnd(...i))
  }, [
    h("div", {
      class: "nut-pull-refresh-container",
      style: L(e.getStyle)
    }, [
      h("div", {
        class: "nut-pull-refresh-container-topbox",
        style: L(e.getHeightStyle)
      }, [
        e.status == "loading" && !e.slots.loading ? (u(), x(s, {
          key: 0,
          class: "nut-icon-loading nut-pull-refresh-container-topbox-icon"
        })) : S("", !0),
        h("div", Dm, _(e.getPullStatus), 1),
        e.status == "pulling" ? D(e.$slots, "pulling", { key: 1 }) : S("", !0),
        e.status == "loosing" ? D(e.$slots, "loosing", { key: 2 }) : S("", !0),
        e.status == "loading" ? D(e.$slots, "loading", { key: 3 }) : S("", !0),
        e.status == "complete" ? D(e.$slots, "complete", { key: 4 }) : S("", !0)
      ], 4),
      D(e.$slots, "default")
    ], 4)
  ], 544);
}
const _m = /* @__PURE__ */ K(Nm, [["render", Im]]), { create: Bm } = Y("notify"), Mm = Bm({
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
    let a = null;
    const o = () => {
      a && clearTimeout(a), a = null;
    }, l = () => {
      t("update:visible", !1);
    }, s = P(!1), i = Q(
      () => e.visible,
      (p) => {
        s.value = e.visible;
        const f = e.duration;
        p && f && (a = setTimeout(() => {
          l();
        }, f));
      },
      { immediate: !0 }
    );
    return { onAfterLeave: () => {
      o(), i && i(), e.unmount && e.unmount(e.id), e.onClose && e.onClose();
    }, clickCover: n, isShowPopup: s };
  }
});
function Lm(e, t, n, a, o, l) {
  const s = j("nut-popup");
  return u(), x(s, {
    visible: e.isShowPopup,
    "onUpdate:visible": t[1] || (t[1] = (i) => e.isShowPopup = i),
    position: e.position,
    overlay: !1,
    "teleport-disable": e.teleportDisable
  }, {
    default: te(() => [
      h("div", {
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
const It = /* @__PURE__ */ K(Mm, [["render", Lm]]), Vt = {
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
let xe = [], ut = [];
const yo = (e) => {
  if (e) {
    const t = document.getElementById(e);
    ut = ut.filter((n) => n.id !== e), xe = xe.filter((n) => n !== e), t && document.body.removeChild(t);
  } else
    xe.forEach((t) => {
      const n = document.getElementById(t);
      n && document.body.removeChild(n);
    }), ut = [], xe = [];
}, Em = (e) => {
  const t = document.getElementById(e.id);
  if (t) {
    const n = ut.find((o) => o.id === e.id);
    n ? e = G(G(G({}, Vt), n), e) : e = G(G({}, Vt), e);
    const a = le(It, e);
    return Wt(a, t), a.component.data;
  }
}, at = (e) => {
  e.unmount = yo;
  let t;
  if (e.id) {
    if (t = e.id, xe.find((l) => l === e.id))
      return Em(e);
  } else
    t = (/* @__PURE__ */ new Date()).getTime() + "";
  e = G(G({}, Vt), e), e.id = t, xe.push(e.id), ut.push(e);
  const n = document.createElement("view");
  n.id = "notify-" + e.id;
  const o = le({
    setup() {
      return e.teleport = `#notify-${e.id}`, ve(() => {
        setTimeout(() => {
          e.onClose && e.onClose(), document.body.removeChild(n);
        }, e.duration);
      }), () => we(It, e);
    }
  });
  document.body.appendChild(n), Wt(o, n);
}, it = (e) => {
  if (!e) {
    console.warn("[NutUI Notify]: msg不能为空");
    return;
  }
}, f4 = {
  text(e, t = {}) {
    return it(e), at(ce(G({}, t), { msg: e }));
  },
  primary(e, t = {}) {
    return it(e), at(ce(G({}, t), { msg: e, type: "primary" }));
  },
  success(e, t = {}) {
    return it(e), at(ce(G({}, t), { msg: e, type: "success" }));
  },
  danger(e, t = {}) {
    return it(e), at(ce(G({}, t), { msg: e, type: "danger" }));
  },
  warn(e, t = {}) {
    return it(e), at(ce(G({}, t), { msg: e, type: "warning" }));
  },
  hide() {
    yo();
  },
  install(e) {
    e.use(It);
  }
}, { componentName: Pm, create: Am } = Y("switch"), zm = Am({
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
    const n = N(() => e.modelValue === e.activeValue), a = N(() => {
      const i = Pm;
      return {
        [i]: !0,
        [n.value ? "nut-switch-open" : "nut-switch-close"]: !0,
        [`${i}-disable`]: e.disable,
        [`${i}-base`]: !0
      };
    }), o = N(() => ({
      backgroundColor: n.value ? e.activeColor : e.inactiveColor
    }));
    let l = "";
    const s = (i) => {
      if (e.disable || e.loading)
        return;
      const r = n.value ? e.inactiveValue : e.activeValue;
      l = "click", t("update:modelValue", r), t("change", r, i);
    };
    return Q(
      () => e.modelValue,
      (i) => {
        l == "click" ? l = "" : t("change", i);
      }
    ), {
      classes: a,
      style: o,
      isActive: n,
      onClick: s
    };
  }
}), Vm = { class: "nut-switch-button" };
function Om(e, t, n, a, o, l) {
  const s = j("Loading1");
  return u(), d("view", {
    class: B(e.classes),
    style: L(e.style),
    onClick: t[0] || (t[0] = (...i) => e.onClick && e.onClick(...i))
  }, [
    h("view", Vm, [
      e.loading ? D(e.$slots, "icon", { key: 0 }, () => [
        le(s, {
          name: "loading",
          color: e.activeColor
        }, null, 8, ["color"])
      ]) : S("", !0),
      e.activeText ? (u(), d(ee, { key: 1 }, [
        Se(h("view", { class: "nut-switch-label open" }, _(e.activeText), 513), [
          [De, e.isActive]
        ]),
        Se(h("view", { class: "nut-switch-label close" }, _(e.inactiveText), 513), [
          [De, !e.isActive]
        ])
      ], 64)) : S("", !0)
    ])
  ], 6);
}
const Hm = /* @__PURE__ */ K(zm, [["render", Om]]), { create: Rm } = Y("toast"), Fm = Rm({
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
    }, l = () => {
      a.mounted = !1;
    }, s = () => {
      o(), e.duration && (n = setTimeout(() => {
        l();
      }, e.duration));
    }, i = () => {
      e.closeOnClickOverlay && (l(), t("close"));
    };
    e.duration && s(), Q(
      () => e.duration,
      (y) => {
        y && s();
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
      hide: l,
      clickCover: i,
      hasIcon: r,
      toastBodyClass: p,
      toastIconWrapperClass: f,
      onAfterLeave: () => {
        o(), e.unmount(e.id), e.onClose && e.onClose();
      },
      renderIcon: ot
    };
  }
}), Wm = {
  key: 1,
  class: "nut-toast-title"
}, Ym = ["innerHTML"];
function jm(e, t, n, a, o, l) {
  return u(), x(Rt, {
    name: "toast-fade",
    onAfterLeave: e.onAfterLeave
  }, {
    default: te(() => [
      Se(h("view", {
        class: B(e.toastBodyClass),
        style: L({
          bottom: e.center ? "auto" : e.bottom,
          "background-color": e.coverColor
        }),
        onClick: t[0] || (t[0] = (...s) => e.clickCover && e.clickCover(...s))
      }, [
        h("view", {
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
          e.title ? (u(), d("div", Wm, _(e.title), 1)) : S("", !0),
          h("view", {
            class: "nut-toast-text",
            innerHTML: e.msg
          }, null, 8, Ym)
        ], 4)
      ], 6), [
        [De, e.state.mounted]
      ])
    ]),
    _: 1
  }, 8, ["onAfterLeave"]);
}
const _t = /* @__PURE__ */ K(Fm, [["render", jm]]), Ot = {
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
}, Km = (e) => {
  const t = document.getElementById(e.id);
  if (t) {
    const n = ct.find((o) => o.id === e.id);
    n ? e = G(G(G({}, Ot), n), e) : e = G(G({}, Ot), e);
    const a = le(_t, e);
    return Wt(a, t), $o;
  }
}, rt = (e) => {
  e.unmount = vo;
  let t;
  if (e.id) {
    if (t = e.id, et.find((n) => n === e.id))
      return Km(e);
  } else
    t = (/* @__PURE__ */ new Date()).getTime() + "";
  return e = G(G({}, Ot), e), e.id = t, et.push(e.id), ct.push(e), Kt(e, {
    wrapper: _t
  }), $o;
}, kt = (e) => {
  if (!e) {
    console.warn("[NutUI Toast]: msg不能为空");
    return;
  }
}, $o = {
  text(e, t = {}) {
    return kt(e), rt(ce(G({}, t), { type: "text", msg: e }));
  },
  success(e, t = {}) {
    return kt(e), rt(ce(G({ icon: mi }, t), { msg: e, type: "success" }));
  },
  fail(e, t = {}) {
    return kt(e), rt(ce(G({ icon: Vn }, t), { msg: e, type: "fail" }));
  },
  warn(e, t = {}) {
    return kt(e), rt(ce(G({ icon: On }, t), { msg: e, type: "warn" }));
  },
  loading(e, t = {}) {
    return rt(ce(G({
      icon: Qe
    }, t), {
      msg: e,
      type: "loading"
    }));
  },
  hide(e) {
    vo(e);
  },
  install(e) {
    e.use(_t);
  }
}, { create: Um } = Y("audio"), Xm = Um({
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
    NutRange: to
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
    const l = (k) => {
      const c = a.value;
      e.autoplay && c && c.paused && c.play(), o.second = c.duration, o.duration = b(c.duration), t("canPlay", k);
    }, s = (k) => {
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
    }, v = () => {
      o.playing = !1, t("ended");
    }, y = (k) => {
      const c = a.value;
      c.currentTime = o.second * k / 100, t("changeProgress", c.currentTime);
    }, g = () => {
      o.hanMuted = !o.hanMuted, t("mute", o.hanMuted);
    }, b = (k) => {
      if (!k)
        return "00:00:00";
      let c = parseInt(k), $ = Math.floor(c / 3600), m = Math.floor((c - $ * 3600) / 60), w = c - $ * 3600 - m * 60, I = "";
      return I += ("0" + $.toString()).slice(-2) + ":", I += ("0" + m.toString()).slice(-2) + ":", I += ("0" + w.toString()).slice(-2), I;
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
      handleMute: g,
      forward: p,
      fastBack: i,
      changeStatus: r
    }), ce(G(G({}, he(e)), he(o)), {
      audioRef: a,
      fastBack: i,
      forward: p,
      changeStatus: r,
      progressChange: y,
      audioEnd: v,
      onTimeupdate: s,
      handleMute: g,
      onCanplay: l,
      slots: n
    });
  }
}), qm = { class: "nut-audio" }, Gm = {
  key: 0,
  class: "nut-audio__progress"
}, Zm = { class: "nut-audio__time" }, Jm = { class: "nut-audio__bar" }, Qm = /* @__PURE__ */ h("div", { class: "nut-audio__button--custom" }, null, -1), xm = { class: "nut-audio__time" }, eh = {
  key: 1,
  class: "nut-audio__icon"
}, th = ["controls", "src", "preload", "autoplay", "loop", "muted"];
function nh(e, t, n, a, o, l) {
  const s = j("nut-range"), i = j("Service");
  return u(), d("div", qm, [
    e.type == "progress" ? (u(), d("div", Gm, [
      h("div", Zm, _(e.currentDuration), 1),
      h("div", Jm, [
        le(s, {
          modelValue: e.percent,
          "onUpdate:modelValue": t[0] || (t[0] = (r) => e.percent = r),
          "hidden-range": "",
          "inactive-color": "#cccccc",
          "active-color": "#fa2c19",
          onChange: e.progressChange
        }, {
          button: te(() => [
            Qm
          ]),
          _: 1
        }, 8, ["modelValue", "onChange"])
      ]),
      h("div", xm, _(e.duration), 1)
    ])) : S("", !0),
    e.type == "icon" ? (u(), d("div", eh, [
      h("div", {
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
    h("audio", {
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
    }, null, 40, th)
  ]);
}
const oh = /* @__PURE__ */ K(Xm, [["render", nh]]), { create: lh } = Y("audio-operate"), sh = "NutAudioOperate", ah = lh({
  props: {
    // 展示的形式   back 倒退   play 开始 or 暂停  forward 快进 mute 静音
    type: {
      type: String,
      default: () => "play"
    }
  },
  components: {
    NutButton: Xe
  },
  emits: ["click"],
  setup(e) {
    const t = ke(sh), n = Be("audioParent"), a = ue(n), o = P(Je().default);
    return ce(G(G({}, he(e)), he(a)), { customSlot: o, translate: t });
  }
}), ih = { class: "nut-audio-operate" };
function rh(e, t, n, a, o, l) {
  const s = j("nut-button");
  return u(), d("div", ih, [
    e.type == "back" ? (u(), d("div", {
      key: 0,
      class: "nut-audio-operate-item",
      onClick: t[0] || (t[0] = (...i) => e.fastBack && e.fastBack(...i))
    }, [
      e.customSlot ? S("", !0) : (u(), x(s, {
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
      e.customSlot ? S("", !0) : (u(), x(s, {
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
      e.customSlot ? S("", !0) : (u(), x(s, {
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
      e.customSlot ? S("", !0) : (u(), x(s, {
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
const uh = /* @__PURE__ */ K(ah, [["render", rh]]), bo = Symbol("nut-avatar"), { create: ch } = Y("avatar"), dh = ch({
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
    const { size: t, shape: n, bgColor: a, color: o } = he(e), l = ["large", "normal", "small"], s = Be(bo, null), i = P(null), r = N(() => {
      var v, y;
      return {
        ["nut-avatar"]: !0,
        [`nut-avatar-${t.value || ((v = s == null ? void 0 : s.props) == null ? void 0 : v.size) || "normal"}`]: !0,
        [`nut-avatar-${n.value || ((y = s == null ? void 0 : s.props) == null ? void 0 : y.shape) || "round"}`]: !0
      };
    }), p = N(() => {
      var f, v;
      return {
        width: t.value in l ? "" : `${t.value}px`,
        height: t.value in l ? "" : `${t.value}px`,
        backgroundColor: `${a.value}`,
        color: `${o.value}`,
        marginLeft: (f = s == null ? void 0 : s.props) != null && f.span ? `${(v = s == null ? void 0 : s.props) == null ? void 0 : v.span}px` : ""
      };
    });
    return {
      classes: r,
      styles: p,
      avatarRef: i
    };
  }
});
function fh(e, t, n, a, o, l) {
  return u(), d("view", {
    ref: "avatarRef",
    style: L(e.styles),
    class: B(e.classes)
  }, [
    D(e.$slots, "default")
  ], 6);
}
const Qt = /* @__PURE__ */ K(dh, [["render", fh]]), { create: ph } = Y("avatar-group"), mh = ph({
  components: {
    NutAvatar: Qt
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
    })), l = (i) => {
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
    }, s = (i) => {
      const r = { attributes: !1, childList: !0, subtree: !0 }, p = function(v) {
        let y = !1;
        for (let g of v)
          if (g.type === "childList") {
            y = !0;
            break;
          }
        y && l(i);
      }, f = new MutationObserver(p);
      return f.observe(i, r), f;
    };
    return ve(() => {
      e.maxCount && Te(() => {
        let i = Tn(t);
        i && i.$el && (i = i.$el), l(i), a.value = s(i);
      });
    }), je(() => {
      var i;
      (i = a.value) == null || i.disconnect();
    }), Me(bo, {
      props: e,
      avatarGroupRef: t
    }), {
      styles: o,
      foldCount: n,
      avatarGroupRef: t
    };
  }
});
function hh(e, t, n, a, o, l) {
  const s = j("nut-avatar");
  return u(), d("view", {
    ref: "avatarGroupRef",
    class: "nut-avatar-group",
    style: L(e.styles)
  }, [
    D(e.$slots, "default"),
    e.foldCount > 0 ? (u(), x(s, {
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
const gh = /* @__PURE__ */ K(mh, [["render", hh]]);
var Ct = /* @__PURE__ */ ((e) => (e[e.eq = 1] = "eq", e[e.lt = 2] = "lt", e[e.gt = 3] = "gt", e))(Ct || {});
function yh(e, t, n) {
  let a = 0, o = e.length - 1, l = null;
  for (; a <= o; ) {
    l = Math.floor((a + o) / 2);
    const s = e[l], i = n(s, t);
    if (i === 1)
      return l;
    i === 2 ? a = l + 1 : i === 3 && (o = l - 1);
  }
  return l;
}
const { create: vh } = Y("list"), bn = document.documentElement.clientHeight || document.body.clientHeight || 667, $h = vh({
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
      default: bn
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
    const n = P(null), a = P(null), o = P(null), l = ue({
      start: 0,
      originStartIndex: 0,
      scrollTop: 0,
      list: e.listData.slice(),
      cachePositions: [],
      phantomHeight: e.height * e.listData.length
    }), s = N(() => Math.min(e.containerHeight, bn)), i = N(() => Math.ceil(s.value / e.height)), r = N(() => Math.min(l.originStartIndex + i.value + e.bufferSize, l.list.length)), p = N(() => l.list.slice(l.start, r.value)), f = () => {
      if (o.value)
        return `translate3d(0, ${l.start >= 1 ? l.cachePositions[l.start - 1].bottom : 0}px, 0)`;
    }, v = () => {
      l.cachePositions = [];
      for (let c = 0; c < l.list.length; ++c)
        l.cachePositions[c] = {
          index: c,
          height: e.height,
          top: c * e.height,
          bottom: (c + 1) * (e.height + e.margin),
          dValue: 0
        };
    }, y = () => {
      let c = o.value.childNodes;
      c = Array.from(c).filter((W) => W.nodeType === 1);
      const $ = c[0];
      c.forEach((W, M) => {
        if (!W)
          return;
        const A = Oe(W), { height: C } = A, V = l.cachePositions[M + l.start].height - C;
        V && (l.cachePositions[M + l.start].bottom -= V, l.cachePositions[M + l.start].height = C, l.cachePositions[M + l.start].dValue = V);
      });
      let m = 0;
      $ && (m = l.start);
      const w = l.cachePositions.length;
      let I = l.cachePositions[m].dValue;
      l.cachePositions[m].dValue = 0;
      for (let W = m + 1; W < w; ++W) {
        const M = l.cachePositions[W];
        l.cachePositions[W].top = l.cachePositions[W - 1].bottom, l.cachePositions[W].bottom = l.cachePositions[W].bottom - I, M.dValue !== 0 && (I += M.dValue, M.dValue = 0);
      }
      const T = l.cachePositions[w - 1].bottom;
      l.phantomHeight = T;
    }, g = (c = 0) => {
      let $ = yh(
        l.cachePositions,
        c,
        (w, I) => {
          const T = w.bottom;
          return T === I ? Ct.eq : T < I ? Ct.lt : Ct.gt;
        }
      );
      return l.cachePositions[$].bottom < c && ($ += 1), $;
    }, b = () => {
      l.originStartIndex = 0, l.start = 0, l.scrollTop = 0, n.value.scrollTop = 0, v(), l.phantomHeight = e.height * l.list.length;
    }, k = () => {
      var w;
      const c = (w = n.value) == null ? void 0 : w.scrollTop, { originStartIndex: $ } = l, m = g(c);
      m !== $ && (l.originStartIndex = m, l.start = Math.max(l.originStartIndex - e.bufferSize, 0), r.value >= l.list.length - 1 && t("scrollBottom")), t(c > l.scrollTop ? "scrollUp" : "scrollDown", c), l.scrollTop = c;
    };
    return v(), Q(
      () => e.listData,
      (c) => {
        if (l.list = c.slice(), l.list.length === c.length)
          v(), y();
        else {
          b();
          return;
        }
      }
    ), Q(
      () => l.start,
      () => {
        o.value && l.list.length > 0 && y();
      }
    ), ce(G({}, he(l)), {
      list: n,
      phantom: a,
      actualContent: o,
      getTransform: f,
      visibleData: p,
      getContainerHeight: s,
      handleScrollEvent: k
    });
  }
});
function bh(e, t, n, a, o, l) {
  return u(), d("div", {
    ref: "list",
    class: "nut-list",
    style: L({ height: `${e.getContainerHeight}px` }),
    onScrollPassive: t[0] || (t[0] = (...s) => e.handleScrollEvent && e.handleScrollEvent(...s))
  }, [
    h("div", {
      ref: "phantom",
      class: "nut-list-phantom",
      style: L({ height: e.phantomHeight + "px" })
    }, null, 4),
    h("div", {
      ref: "actualContent",
      class: "nut-list-container",
      style: L({ transform: e.getTransform() })
    }, [
      (u(!0), d(ee, null, re(e.visibleData, (s, i) => (u(), d("div", {
        key: s,
        class: "nut-list-item"
      }, [
        D(e.$slots, "default", {
          item: s,
          index: i + e.start
        })
      ]))), 128))
    ], 4)
  ], 36);
}
const kh = /* @__PURE__ */ K($h, [["render", bh]]), { create: wh } = Y("circle-progress"), Ch = wh({
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
    }), a = N(() => tt(e.color) ? `url(#${t})` : e.color), o = N(() => {
      let i = 283, r = i * Number(e.progress) / 100;
      return {
        stroke: tt(e.color) ? `url(#${t})` : e.color,
        strokeDasharray: `${r}px ${i}px`
      };
    }), l = N(() => ({
      stroke: e.pathColor
    })), s = N(() => {
      if (!tt(e.color))
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
      pathStyle: l,
      path: n,
      hoverColor: a,
      stop: s,
      refRandomId: t
    };
  }
}), Sh = { viewBox: "0 0 100 100" }, Th = ["id"], Nh = ["offset", "stop-color"], Dh = ["d", "stroke-width"], Ih = ["d", "stroke", "stroke-linecap", "stroke-width"], _h = { class: "nut-circle-progress__text" };
function Bh(e, t, n, a, o, l) {
  return u(), d("div", {
    class: "nut-circle-progress",
    style: L({ height: Number(e.radius) * 2 + "px", width: Number(e.radius) * 2 + "px" })
  }, [
    (u(), d("svg", Sh, [
      h("defs", null, [
        h("linearGradient", {
          id: e.refRandomId,
          x1: "100%",
          y1: "0%",
          x2: "0%",
          y2: "0%"
        }, [
          (u(!0), d(ee, null, re(e.stop, (s, i) => (u(), d("stop", {
            key: i,
            offset: s.key,
            "stop-color": s.value
          }, null, 8, Nh))), 128))
        ], 8, Th)
      ]),
      h("path", {
        class: "nut-circle-progress__path",
        style: L(e.pathStyle),
        d: e.path,
        fill: "none",
        "stroke-width": e.strokeWidth
      }, " > ", 12, Dh),
      h("path", {
        class: "nut-circle-progress__hover",
        style: L(e.hoverStyle),
        d: e.path,
        fill: "none",
        stroke: e.hoverColor,
        "stroke-linecap": e.strokeLinecap,
        "stroke-width": e.strokeWidth
      }, null, 12, Ih)
    ])),
    h("div", _h, [
      D(e.$slots, "default", {}, () => [
        h("div", null, _(e.progress) + "%", 1)
      ])
    ])
  ], 4);
}
const Mh = /* @__PURE__ */ K(Ch, [["render", Bh]]), { create: Lh } = Y("noticebar"), Eh = Lh({
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
    CircleClose: Ut
  },
  emits: ["click", "close", "acrossEnd"],
  setup(e, { emit: t, slots: n }) {
    const a = P(null), o = P(null), l = ue({
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
    }), s = N(() => l.isCanScroll == null ? e.wrapable : !l.isCanScroll && !e.wrapable), i = N(() => ({
      "nut-noticebar__page-wrap-content": !0,
      "nut-ellipsis": s.value,
      [l.animationClass]: !0
    })), r = N(() => {
      let M = {};
      return e.color && (M.color = e.color), e.background && (M.background = e.background), e.direction == "vertical" && (M.height = `${e.height}px`), M;
    }), p = N(() => ({
      animationDelay: (l.firstRound ? e.delay : 0) + "s",
      animationDuration: l.duration + "s",
      transform: `translateX(${l.firstRound ? 0 : l.wrapWidth + "px"})`
    })), f = N(() => {
      let M = {};
      if (e.complexAm)
        M = {
          transform: `translateY(${l.distance}px)`
        };
      else if (l.animate) {
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
        l.scrollList = [].concat(M);
      }
    );
    const v = () => {
      l.showNoticebar != !1 && setTimeout(() => {
        if (!a.value || !o.value)
          return;
        const M = a.value.getBoundingClientRect().width, A = o.value.getBoundingClientRect().width;
        l.isCanScroll = e.scrollable == null ? A > M : e.scrollable, l.isCanScroll ? (l.wrapWidth = M, l.offsetWidth = A, l.duration = A / e.speed, l.animationClass = "play") : l.animationClass = "";
      }, 0);
    }, y = (M) => {
      t("click", M);
    }, g = (M) => {
      e.closeMode && (l.showNoticebar = !e.closeMode), t("close", M);
    }, b = (M) => {
      l.firstRound = !1, t("acrossEnd", M), setTimeout(() => {
        l.duration = (l.offsetWidth + l.wrapWidth) / e.speed, l.animationClass = "play-infinite";
      }, 0);
    }, k = () => {
      c(), l.timer = setInterval(c, ~~(e.height / e.speed / 4 * 1e3) + e.standTime);
    }, c = () => {
      l.animate = !0, setTimeout(
        () => {
          l.scrollList.push(l.scrollList[0]), l.scrollList.shift(), l.animate = !1;
        },
        ~~(e.height / e.speed / 4 * 1e3)
      );
    }, $ = () => {
      l.timer = setInterval(
        () => {
          let M = 100;
          for (let A = 0; A < M; A++)
            m(A, !(A < M - 1));
        },
        e.standTime + 100 * e.speed
      );
    }, m = (M, A) => {
      setTimeout(() => {
        l.distance -= e.height / 100, A && (l.scrollList.push(l.scrollList[0]), l.scrollList.shift(), l.distance = 0);
      }, M * e.speed);
    }, w = (M) => {
      t("click", M);
    }, I = () => {
      e.closeMode && (l.showNoticebar = !e.closeMode), t("close", l.scrollList[0]);
    };
    ve(() => {
      e.direction == "vertical" ? (n.default ? (T(), W()) : l.scrollList = [].concat(e.list), setTimeout(() => {
        e.complexAm ? $() : k();
      }, e.standTime)) : v();
    });
    const T = () => {
      n.default && (l.scrollList = [].concat(n.default()[0].children));
    }, W = () => {
      setTimeout(() => {
        var M = new MutationObserver(() => {
          l.showNotica = !1, setTimeout(() => {
            l.showNotica = !0;
          }), T();
        });
        const A = document.getElementsByClassName("nut-noticebar-custom-item")[0];
        A && M.observe(A, {
          childList: !0,
          subtree: !0
        });
      }, 100);
    };
    return pt(() => {
      l.keepAlive && (l.keepAlive = !1);
    }), mt(() => {
      l.keepAlive = !0, clearInterval(l.timer);
    }), je(() => {
      clearInterval(l.timer);
    }), ce(G({}, he(l)), {
      isEllipsis: s,
      barStyle: r,
      contentStyle: p,
      horseLampStyle: f,
      wrap: a,
      content: o,
      handleClick: y,
      onClickIcon: g,
      onAnimationEnd: b,
      go: w,
      handleClickIcon: I,
      slots: n,
      pxCheck: _e,
      wrapContentClass: i
    });
  }
}), Ph = { class: "nut-noticebar" }, Ah = { class: "nut-noticebar__page-lefticon" }, zh = {
  ref: "wrap",
  class: "nut-noticebar__page-wrap"
}, Vh = { class: "showNotica" }, Oh = { class: "nut-noticebar-custom-item" }, Hh = ["onClick"];
function Rh(e, t, n, a, o, l) {
  const s = j("Notice"), i = j("CircleClose"), r = j("ScrollItem");
  return u(), d("view", Ph, [
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
      h("view", Ah, [
        D(e.$slots, "left-icon", {}, () => [
          e.leftIcon ? (u(), x(s, {
            key: 0,
            size: "16px"
          })) : S("", !0)
        ])
      ]),
      h("view", zh, [
        h("view", {
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
        h("view", {
          class: "nut-noticebar__vertical-list",
          style: L(e.horseLampStyle)
        }, [
          h("div", Vh, [
            (u(!0), d(ee, null, re(e.scrollList, (p, f) => (u(), x(r, {
              key: f,
              style: L({ height: e.height + "px", "line-height": e.height + "px" }),
              item: p
            }, null, 8, ["style", "item"]))), 128))
          ])
        ], 4),
        h("view", Oh, [
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
        }, _(p), 13, Hh))), 128))
      ], 4)),
      h("view", {
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
const Fh = /* @__PURE__ */ K(Eh, [["render", Rh]]), { create: Wh } = Y("empty"), Yh = "NutEmpty", jh = {
  empty: "https://static-ftcms.jd.com/p/files/61a9e3183985005b3958672b.png",
  error: "https://ftcms.jd.com/p/files/61a9e33ee7dcdbcc0ce62736.png",
  network: "https://static-ftcms.jd.com/p/files/61a9e31de7dcdbcc0ce62734.png"
}, Kh = Wh({
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
    const t = ke(Yh), n = N(() => e.imageSize ? {
      width: _e(e.imageSize),
      height: _e(e.imageSize)
    } : {});
    return { src: N(() => e.image.startsWith("https://") || e.image.startsWith("http://") || e.image.startsWith("//") ? e.image : jh[e.image]), style: n, translate: t };
  }
}), Uh = { class: "nut-empty" }, Xh = ["src"], qh = { class: "nut-empty__description" };
function Gh(e, t, n, a, o, l) {
  return u(), d("view", Uh, [
    h("view", {
      class: "nut-empty__box",
      style: L(e.style)
    }, [
      D(e.$slots, "image", {}, () => [
        e.src ? (u(), d("img", {
          key: 0,
          class: "nut-empty__box--img",
          src: e.src
        }, null, 8, Xh)) : S("", !0)
      ])
    ], 4),
    D(e.$slots, "description", {}, () => [
      h("view", qh, _(e.description || e.translate("noData")), 1)
    ]),
    D(e.$slots, "default")
  ]);
}
const Zh = /* @__PURE__ */ K(Kh, [["render", Gh]]);
function kn(e, t) {
  let n = null, a = Date.now();
  return function() {
    let o = Date.now(), l = t - (o - a);
    n && clearTimeout(n), l <= 0 ? (e.apply(null, arguments), a = Date.now()) : n = setTimeout(e, l);
  };
}
const { create: Jh } = Y("video"), Qh = "NutVideo", xh = Jh({
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
    const a = ke(Qh), o = ue({
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
    }), l = P(null), s = N(() => e.options.disabled);
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
      o.videoElm = l.value, e.options.autoplay && setTimeout(() => {
        o.videoElm.play();
      }, 200), e.options.touchPlay && (o.showTouchMask = !0), e.options.playsinline && (o.videoElm.setAttribute("playsinline", e.options.playsinline), o.videoElm.setAttribute("webkit-playsinline", e.options.playsinline), o.videoElm.setAttribute("x5-video-player-type", "h5-page"), o.videoElm.setAttribute("x5-video-player-fullscreen", !1)), k(), o.showToolbox ? r() : (o.videoElm.addEventListener("play", () => {
        o.state.playing = !0, t("play", o.videoElm);
      }), o.videoElm.addEventListener("pause", () => {
        o.state.playing = !1, t("pause", o.videoElm);
      }), o.videoElm.addEventListener("ended", g), o.videoElm.addEventListener("timeupdate", kn(y, 1e3)));
    }, r = () => {
      const V = l.value, X = l.value.getElementsByClassName("nut-video-controller__progress-value")[0];
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
            }), o.videoElm.addEventListener("timeupdate", kn(y, 1e3)), o.videoElm.addEventListener("ended", g), t("play", o.videoElm);
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
    }, k = () => {
      o.state.vol = e.options.volume;
    }, c = () => {
      o.state.isMuted = !o.state.isMuted, o.videoElm.muted = o.state.isMuted;
    }, $ = () => {
    }, m = (V) => {
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
      root: l
    }, he(e)), he(o)), {
      handleError: b,
      isDisabled: s,
      play: p,
      handleMuted: c,
      touchSlidSrart: $,
      touchSlidMove: m,
      touchSlidEnd: w,
      retry: T,
      fullScreen: W,
      translate: a
    });
  }
}), eg = {
  ref: "videocon",
  class: "nut-video"
}, tg = ["muted", "autoplay", "loop", "poster", "controls", "preload"], ng = ["src", "type"], og = { class: "nut-video-controller__now" }, lg = { class: "nut-video-controller__progress" }, sg = {
  ref: "progressBar",
  class: "nut-video-controller__progress-value"
}, ag = /* @__PURE__ */ h("div", { class: "nut-video-controller__ball-move" }, null, -1), ig = [
  ag
], rg = {
  ref: "playedBar",
  class: "nut-video-controller__played"
}, ug = { class: "nut-video-controller__total" }, cg = { class: "nut-video-error" }, dg = { class: "nut-video-error-tip" };
function fg(e, t, n, a, o, l) {
  return u(), d("div", eg, [
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
      }, null, 8, ng)
    ], 40, tg),
    e.showToolbox && !e.isDisabled ? (u(), d("div", {
      key: 0,
      ref: "touchMask",
      class: "nut-video-mask",
      onClick: t[1] || (t[1] = (...s) => e.play && e.play(...s))
    }, null, 512)) : S("", !0),
    e.showToolbox && !e.isDisabled ? Se((u(), d("div", {
      key: 1,
      ref: "palyBtn",
      class: "nut-video-play-btn",
      onClick: t[2] || (t[2] = (...s) => e.play && e.play(...s))
    }, null, 512)), [
      [De, !e.state.playing]
    ]) : S("", !0),
    Se(h("div", {
      class: B(["nut-video-controller", { "nut-video-controller--show": !e.state.playing, "nut-video-controller--hide": e.state.playing }])
    }, [
      h("div", {
        class: "nut-video-controller__playbtn",
        onClick: t[3] || (t[3] = (...s) => e.play && e.play(...s))
      }),
      h("div", og, _(e.videoSet.displayTime), 1),
      h("div", lg, [
        h("div", sg, [
          h("div", {
            class: "buffered",
            style: L({ width: `${e.videoSet.loaded}%` })
          }, null, 4),
          h("div", {
            class: "nut-video-controller__ball",
            style: L({
              transform: `translate3d(${e.videoSet.progress.current}px, -50%, 0)`
            }),
            onTouchmove: t[4] || (t[4] = Ne((s) => e.touchSlidMove(s), ["stop", "prevent"])),
            onTouchstart: t[5] || (t[5] = Ne((s) => e.touchSlidSrart(), ["stop"])),
            onTouchend: t[6] || (t[6] = Ne((s) => e.touchSlidEnd(s), ["stop"]))
          }, ig, 36),
          h("div", rg, null, 512)
        ], 512)
      ]),
      h("div", ug, _(e.videoSet.totalTime), 1),
      h("div", {
        class: B(["nut-video-controller__volume", { muted: e.state.isMuted }]),
        onClick: t[7] || (t[7] = (...s) => e.handleMuted && e.handleMuted(...s))
      }, null, 2),
      h("div", {
        class: "nut-video-controller__full",
        onClick: t[8] || (t[8] = (...s) => e.fullScreen && e.fullScreen(...s))
      })
    ], 2), [
      [De, e.showToolbox && !e.isDisabled]
    ]),
    Se(h("div", cg, [
      h("p", dg, _(e.translate("errorTip")), 1),
      h("p", {
        class: "nut-video-error-retry",
        onClick: t[9] || (t[9] = (...s) => e.retry && e.retry(...s))
      }, _(e.translate("clickRetry")), 1)
    ], 512), [
      [De, e.state.isError]
    ])
  ], 512);
}
const xt = /* @__PURE__ */ K(xh, [["render", fg]]), ko = Symbol("nut-steps"), { create: pg, componentName: mg } = Y("steps"), hg = pg({
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
      const i = mg;
      return {
        [i]: !0,
        [`${i}-${e.direction}`]: !0,
        [`${i}-dot`]: !!e.progressDot
      };
    });
    return Me(ko, {
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
}), { create: gg, componentName: yg } = Y("step"), vg = gg({
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
    const { proxy: e } = Fe(), t = Be(ko);
    t.relation(e);
    const n = ue({
      dot: t.props.progressDot
    }), a = N(() => t.state.children.indexOf(e) + 1), o = () => {
      const r = a.value;
      return r < +t.props.current ? "finish" : r === +t.props.current ? "process" : "wait";
    }, l = N(() => o()), s = N(() => {
      const r = yg;
      return {
        [r]: !0,
        [`${r}-${l.value}`]: !0
      };
    }), i = () => {
      t.onEmit(a.value);
    };
    return ce(G({}, he(n)), {
      index: a,
      classes: s,
      handleClickStep: i
    });
  }
}), $g = { class: "nut-step-head" }, bg = /* @__PURE__ */ h("view", { class: "nut-step-line" }, null, -1), kg = { class: "nut-step-icon-inner" }, wg = {
  key: 1,
  class: "nut-step-inner"
}, Cg = { class: "nut-step-main" }, Sg = { class: "nut-step-title" }, Tg = { key: 0 }, Ng = {
  key: 0,
  class: "nut-step-content"
}, Dg = ["innerHTML"];
function Ig(e, t, n, a, o, l) {
  return u(), d("view", {
    class: B(e.classes),
    onClick: t[0] || (t[0] = (...s) => e.handleClickStep && e.handleClickStep(...s))
  }, [
    h("view", $g, [
      bg,
      h("view", {
        class: B(["nut-step-icon", [e.dot ? "" : "is-icon"]])
      }, [
        h("view", kg, [
          D(e.$slots, "icon", {}, () => [
            e.dot ? (u(), d(ee, { key: 0 }, [], 64)) : (u(), d("view", wg, _(e.index), 1))
          ])
        ])
      ], 2)
    ]),
    h("view", Cg, [
      h("view", Sg, [
        e.$slots.title ? S("", !0) : (u(), d("span", Tg, _(e.title), 1)),
        D(e.$slots, "title")
      ]),
      e.content || e.$slots.content ? (u(), d("view", Ng, [
        e.$slots.content ? S("", !0) : (u(), d("span", {
          key: 0,
          innerHTML: e.content
        }, null, 8, Dg)),
        D(e.$slots, "content")
      ])) : S("", !0)
    ])
  ], 2);
}
const _g = /* @__PURE__ */ K(vg, [["render", Ig]]), wo = Symbol("nut-swiper"), { create: Bg, componentName: wn } = Y("swiper"), Mg = Bg({
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
  setup(e, { emit: t, slots: n, expose: a }) {
    const o = P(), l = ue({
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
    }), s = qe(), i = N(() => e.direction === "vertical"), r = N(() => {
      const H = wn;
      return {
        [`${H}-inner`]: !0,
        [`${H}-vertical`]: i.value
      };
    }), p = N(() => {
      const H = wn;
      return {
        [`${H}-pagination`]: !0,
        [`${H}-pagination-vertical`]: i.value
      };
    }), f = N(() => i.value ? s.deltaY.value : s.deltaX.value), v = N(() => s.direction.value === e.direction), y = N(() => l.children.length), g = N(() => l[i.value ? "height" : "width"]), b = N(() => y.value * g.value), k = N(() => l.rect ? (i.value ? l.rect.height : l.rect.width) - g.value * y.value : 0), c = N(() => (l.active + y.value) % y.value), $ = () => {
      let H = 0;
      H = l.offset, l.style = {
        transitionDuration: `${l.moving ? 0 : e.duration}ms`,
        transform: `translate${i.value ? "Y" : "X"}(${H}px)`,
        [i.value ? "height" : "width"]: `${g.value * y.value}px`,
        [i.value ? "width" : "height"]: `${i.value ? l.width : l.height}px`
      };
    }, m = (H) => {
      var de;
      let ne = [];
      const U = l.childrenVNode.length;
      let ae = (de = n == null ? void 0 : n.default) == null ? void 0 : de.call(n);
      if (ae = ae.filter((fe) => fe.children && Array.isArray(fe.children)), ae.forEach((fe) => {
        ne = ne.concat(fe.children);
      }), !U)
        l.childrenVNode = ne.slice(), H.proxy && l.children.push(H.proxy);
      else if (U > ne.length)
        l.children = l.children.filter((fe) => H.proxy !== fe);
      else if (U < ne.length) {
        for (let fe = 0; fe < U; fe++)
          if (ne[fe].key !== l.childrenVNode[fe].key) {
            H.proxy && l.children.splice(fe, 0, H.proxy), H.vnode && l.childrenVNode.splice(fe, 0, H.vnode);
            break;
          }
        U !== ne.length && (H.proxy && l.children.push(H.proxy), H.vnode && l.childrenVNode.push(H.vnode));
      } else
        l.childrenVNode = ne.slice(), H.proxy && l.children.push(H.proxy);
    }, w = (H, ne = 0) => {
      let U = H * g.value;
      e.loop || (U = Math.min(U, -k.value));
      let ae = ne - U;
      return e.loop || (ae = Pe(ae, k.value, 0)), ae;
    }, I = (H) => {
      const { active: ne } = l;
      return H ? e.loop ? Pe(ne + H, -1, y.value) : Pe(ne + H, 0, y.value - 1) : ne;
    }, T = ({ pace: H = 0, offset: ne = 0, isEmit: U = !1 }) => {
      if (y.value <= 1)
        return;
      const { active: ae } = l, de = I(H), fe = w(de, ne);
      if (e.loop) {
        if (l.children[0] && fe !== k.value) {
          const be = fe < k.value;
          l.children[0].setOffset(be ? b.value : 0);
        }
        if (l.children[y.value - 1] && fe !== 0) {
          const be = fe > 0;
          l.children[y.value - 1].setOffset(be ? -b.value : 0);
        }
      }
      l.active = de, l.offset = fe, U && ae !== l.active && t("change", c.value), $();
    }, W = () => {
      l.moving = !0, l.active <= -1 && T({ pace: y.value }), l.active >= y.value && T({ pace: -y.value });
    }, M = () => {
      l.autoplayTimer && clearTimeout(l.autoplayTimer);
    }, A = (H) => {
      W(), s.reset(), Ve(() => {
        Ve(() => {
          l.moving = !1, T({
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
      W(), s.reset(), Ve(() => {
        l.moving = !1;
        let ne;
        e.loop && y.value === H ? ne = l.active === 0 ? 0 : H : ne = H % y.value, T({
          pace: ne - l.active,
          isEmit: !0
        });
      });
    }, X = () => {
      +e.autoPlay <= 0 || y.value <= 1 || (M(), l.autoplayTimer = setTimeout(() => {
        E(), X();
      }, Number(e.autoPlay)));
    }, Z = (H = +e.initPage) => {
      M(), l.rect = o.value.getBoundingClientRect(), H = Math.min(y.value - 1, H), l.width = e.width ? +e.width : l.rect.width, l.height = e.height ? +e.height : l.rect.height, l.active = H, l.offset = w(l.active), l.moving = !0, $(), X();
    }, F = (H) => {
      e.isPreventDefault && H.preventDefault(), e.isStopPropagation && H.stopPropagation(), e.touchable && (s.start(H), l.touchTime = Date.now(), M(), W());
    }, oe = (H) => {
      e.touchable && l.moving && (s.move(H), v.value && T({
        offset: f.value
      }));
    }, q = () => {
      if (!e.touchable || !l.moving)
        return;
      const H = f.value / (Date.now() - l.touchTime);
      if ((Math.abs(H) > 0.3 || Math.abs(f.value) > +(g.value / 2).toFixed(2)) && v.value) {
        let U = 0;
        const ae = i.value ? s.offsetY.value : s.offsetX.value;
        e.loop ? U = ae > 0 ? f.value > 0 ? -1 : 1 : 0 : U = -Math[f.value > 0 ? "ceil" : "floor"](f.value / g.value), T({
          pace: U,
          isEmit: !0
        });
      } else
        f.value && T({ pace: 0 });
      l.moving = !1, $(), X();
    };
    return Me(wo, {
      props: e,
      size: g,
      relation: m
    }), a({
      prev: C,
      next: E,
      to: V
    }), mt(() => {
      M();
    }), Ft(() => {
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
      () => l.children.length,
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
      state: l,
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
function Lg(e, t, n, a, o, l) {
  return u(), d("view", {
    ref: "container",
    class: "nut-swiper",
    onTouchstart: t[0] || (t[0] = (...s) => e.onTouchStart && e.onTouchStart(...s)),
    onTouchmove: t[1] || (t[1] = (...s) => e.onTouchMove && e.onTouchMove(...s)),
    onTouchend: t[2] || (t[2] = (...s) => e.onTouchEnd && e.onTouchEnd(...s)),
    onTouchcancel: t[3] || (t[3] = (...s) => e.onTouchEnd && e.onTouchEnd(...s))
  }, [
    h("view", {
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
      (u(!0), d(ee, null, re(e.state.children.length, (s, i) => (u(), d("i", {
        key: i,
        style: L({
          backgroundColor: e.activePagination === i ? e.paginationColor : "#ddd"
        }),
        class: B({ active: e.activePagination === i })
      }, null, 6))), 128))
    ], 2)) : S("", !0)
  ], 544);
}
const en = /* @__PURE__ */ K(Mg, [["render", Lg]]);
function Eg(e) {
  const t = Fe();
  t && Object.assign(t.proxy, e);
}
const { create: Pg } = Y("swiper-item"), Ag = Pg({
  setup() {
    const e = Be(wo);
    e.relation(Fe());
    const t = ue({
      offset: 0
    }), n = N(() => {
      const o = {}, l = e == null ? void 0 : e.props.direction;
      return e != null && e.size.value && (o[l === "horizontal" ? "width" : "height"] = `${e == null ? void 0 : e.size.value}px`), t.offset && (o.transform = `translate${l === "horizontal" ? "X" : "Y"}(${t.offset}px)`), o;
    }), a = (o) => {
      t.offset = o;
    };
    return je(() => {
      e.relation(Fe(), "unmount");
    }), Eg({ setOffset: a }), {
      style: n
    };
  }
});
function zg(e, t, n, a, o, l) {
  return u(), d("view", {
    class: "nut-swiper-item",
    style: L(e.style)
  }, [
    D(e.$slots, "default")
  ], 4);
}
const tn = /* @__PURE__ */ K(Ag, [["render", zg]]), { componentName: Cn, create: Vg } = Y("price"), Og = Vg({
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
      [Cn]: !0,
      [`${Cn}--strike`]: e.strikeThrough
    })), n = N(() => e.needSymbol ? e.symbol : ""), a = (s) => String(s).indexOf(".") > 0;
    return {
      classes: t,
      showSymbol: n,
      checkPoint: a,
      formatThousands: (s) => (Number(s) == 0 && (s = 0), a(s) ? (s = Number(s).toFixed(e.decimalDigits), s = typeof s.split(".") == "string" ? s.split(".") : s.split(".")[0]) : s = s.toString(), e.thousands ? (s || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,") : s),
      formatDecimal: (s) => {
        Number(s) == 0 && (s = 0), a(s) ? (s = Number(s).toFixed(e.decimalDigits), s = typeof s.split(".") == "string" ? 0 : s.split(".")[1] ? s.split(".")[1] : 0) : s = 0;
        const i = "0." + s, r = Number(i).toFixed(e.decimalDigits);
        return String(r).substring(2, r.length);
      }
    };
  }
}), Hg = ["innerHTML"], Rg = ["innerHTML"];
function Fg(e, t, n, a, o, l) {
  return u(), d("view", {
    class: B(e.classes)
  }, [
    e.needSymbol && e.position === "before" ? (u(), d("view", {
      key: 0,
      class: B(["nut-price--symbol", `nut-price--symbol-${e.size}`]),
      innerHTML: e.showSymbol
    }, null, 10, Hg)) : S("", !0),
    h("view", {
      class: B(`nut-price--${e.size}`)
    }, _(e.formatThousands(e.price)), 3),
    e.decimalDigits != 0 ? (u(), d("view", {
      key: 1,
      class: B(`nut-price--decimal-${e.size}`)
    }, ".", 2)) : S("", !0),
    h("view", {
      class: B(`nut-price--decimal-${e.size}`)
    }, _(e.formatDecimal(e.price)), 3),
    e.needSymbol && e.position === "after" ? (u(), d("view", {
      key: 2,
      class: B(["nut-price--symbol", `nut-price--symbol-${e.size}`]),
      innerHTML: e.showSymbol
    }, null, 10, Rg)) : S("", !0)
  ], 2);
}
const nn = /* @__PURE__ */ K(Og, [["render", Fg]]), Co = {
  show: { type: Boolean, default: !1 },
  initNo: { type: Number, default: 0 },
  showIndex: { type: Boolean, default: !0 },
  minZoom: { type: Number, default: 1 / 3 },
  maxZoom: { type: Number, default: 3 }
}, { create: Wg } = Y("image-preview-item"), Yg = Wg({
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
    NutVideo: xt,
    NutSwiperItem: tn
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
    }), a = qe(), o = N(() => {
      const { rootWidth: C, rootHeight: E } = e, V = E / C;
      return n.imageRatio > V;
    }), l = N(() => {
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
    }), s = N(() => {
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
    }, y = (C) => Math.sqrt(lt(C[0].clientX - C[1].clientX, 2) + lt(C[0].clientY - C[1].clientY, 2));
    let g, b, k, c, $, m, w;
    const I = (C) => {
      const { touches: E } = C, { offsetX: V } = a;
      a.start(C), w = E.length, g = n.moveX, b = n.moveY, m = Date.now(), n.moving = w === 1 && n.scale !== 1, n.zooming = w === 2 && !V.value, n.zooming && (k = n.scale, c = y(C.touches));
    }, T = (C) => {
      const { touches: E } = C;
      if (a.move(C), (n.moving || n.zooming) && nt(C, !0), n.moving) {
        const { deltaX: V, deltaY: X } = a, Z = V.value + g, F = X.value + b;
        n.moveX = Pe(Z, -s.value, s.value), n.moveY = Pe(F, -i.value, i.value);
      }
      if (n.zooming && E.length === 2) {
        const V = y(E), X = k * V / c;
        f(X);
      }
    }, W = () => {
      if (w == 1 && e.video && e.video.source || w > 1)
        return;
      const { offsetX: C, offsetY: E } = a, V = Date.now() - m, X = 250, Z = 5;
      C.value < Z && E.value < Z && V < X && ($ ? (clearTimeout($), $ = null, v()) : $ = setTimeout(() => {
        e.contentClose && t("close"), $ = null;
      }, X));
    }, M = (C) => {
      let E = !1;
      (n.moving || n.zooming) && (E = !0, n.moving && g === n.moveX && b === n.moveY && (E = !1), C.touches.length || (n.zooming && (n.moveX = Pe(n.moveX, -s.value, s.value), n.moveY = Pe(n.moveY, -i.value, i.value), n.zooming = !1), n.moving = !1, g = 0, b = 0, k = 1, n.scale < 1 && p(), n.scale > e.maxZoom && (n.scale = +e.maxZoom))), nt(C, E), W(), a.reset();
    }, A = () => {
      t("close");
    };
    return Q(() => e.initNo, p), Q(
      () => e.show,
      (C) => {
        C || p();
      }
    ), ce(G({}, he(n)), {
      onTouchStart: I,
      onTouchMove: T,
      onTouchEnd: M,
      getDistance: y,
      imageStyle: l,
      imageLoad: r,
      closeSwiper: A
    });
  }
}), jg = ["src"];
function Kg(e, t, n, a, o, l) {
  const s = j("nut-video"), i = j("nut-swiper-item");
  return u(), x(i, { onClick: e.closeSwiper }, {
    default: te(() => [
      h("view", {
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
        }, null, 40, jg)) : S("", !0),
        e.video && e.video.source ? (u(), x(s, {
          key: 1,
          source: e.video.source,
          options: e.video.options
        }, null, 8, ["source", "options"])) : S("", !0)
      ], 36)
    ]),
    _: 1
  }, 8, ["onClick"]);
}
const Ug = /* @__PURE__ */ K(Yg, [["render", Kg]]), { create: Xg } = Y("image-preview"), qg = Xg({
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
    ImagePreviewItem: Ug,
    CircleClose: Ut,
    NutPopup: Le,
    NutSwiper: en
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
    }), l = N(() => jt(e.videos) ? [].concat(e.videos).concat(e.images) : e.images), s = (f) => {
      f !== a.active && (a.active = f, t("change", a.active));
    }, i = () => {
      Yt(e.beforeClose, {
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
        a.showPop = f, f && (s(e.initNo), Te(() => {
          p();
        }));
      }
    ), Q(
      () => e.initNo,
      (f) => {
        f != a.active && s(f);
      }
    ), ve(() => {
      s(e.initNo);
    }), ce(G({
      swipeRef: n
    }, he(a)), {
      onClose: i,
      mergeImages: l,
      setActive: s,
      iconClasses: o
    });
  }
}), Gg = {
  ref: "swipeRef",
  class: "nut-image-preview"
}, Zg = {
  key: 0,
  class: "nut-image-preview-index"
};
function Jg(e, t, n, a, o, l) {
  const s = j("image-preview-item"), i = j("nut-swiper"), r = j("CircleClose"), p = j("nut-popup");
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
      h("view", Gg, [
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
            (u(!0), d(ee, null, re(e.mergeImages, (f, v) => (u(), x(s, {
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
      e.showIndex ? (u(), d("view", Zg, _(e.active + 1) + " / " + _(e.mergeImages.length), 1)) : S("", !0),
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
const on = /* @__PURE__ */ K(qg, [["render", Jg]]);
class Qg {
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
class xg {
  constructor(t) {
    z(this, "options", new Qg());
    const n = Object.assign(this.options, t), { unmount: a } = Kt(n, {
      name: "image-preview",
      components: [Le, xt, en, tn, ht],
      wrapper: () => ({
        setup() {
          return () => (n.onClose = () => {
            n.show = !1, Te(() => {
              a();
            });
          }, we(on, n));
        }
      })
    });
  }
}
const e0 = (e) => new xg(e);
e0.install = (e) => {
  e.use(on);
};
function t0(e) {
  const t = Fe();
  t && Object.assign(t.proxy, e);
}
const { create: n0 } = Y("countup"), o0 = n0({
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
    }, l = ue({
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
    }), { startFlag: s, scrolling: i, customBgImg: r, type: p } = ue(e);
    Q(
      () => e.customChangeNum,
      () => {
        v(), c(0);
      }
    ), Q(
      () => e.machinePrizeLevel,
      (A) => {
        l.prizeLevelTrun = A;
      }
    ), Q(
      () => e.initNum,
      (A) => {
        l.current = A, l.valFlag = !1, f();
      }
    ), Q(
      () => e.endNum,
      () => {
        l.current = e.initNum, l.valFlag = !1, f();
      }
    );
    const f = () => {
      if (l.valFlag)
        return !1;
      s && (i || r ? p != "machine" && c() : (k(), setTimeout(() => {
        l.valFlag = !0;
      }, 300)));
    }, v = () => {
      clearInterval(Number(l.timer)), l.timer = null;
    }, y = (A, C, E) => {
      const V = (A.toString().split(".")[1] || "").length, X = (C.toString().split(".")[1] || "").length, Z = Math.pow(10, Math.max(V, X));
      return E == "-" ? Number((A * Z - C * Z).toFixed(0)) / Z : Number((A * Z + C * Z).toFixed(0)) / Z;
    }, g = (A) => {
      let { num_total_len: C, pointNum: E, initDigit1: V, initDigit2: X, sortFlag: Z } = l, F = Z == "add" || Z == "equal" ? String(X)[A - (C - E)] : 10 - Number(String(X)[A - (C - E)]), oe = Z == "add" || Z == "equal" ? String(V)[A] : 10 - Number(String(V)[A]), q = A > C - E - 1 ? -F * 100 + "%" : A <= String(V).length - 1 ? -oe * 100 + "%" : 0;
      return q == "-1000%" && (q = 0), q;
    }, b = (A) => {
      let { num_total_len: C, pointNum: E, initDigit1: V, initDigit2: X } = l, Z = String(X)[A - (C - E)];
      return A > C - E - 1 ? Z || 0 : A <= String(V).length - 1 ? String(V)[A] : 0;
    }, k = () => {
      let { endNum: A, initNum: C, speed: E, toFixed: V } = e, X = setInterval(() => {
        if (C > A)
          if (Number(l.current) <= A || Number(l.current) <= E)
            l.current = A.toFixed(V), clearInterval(X), t("scrollEnd"), l.valFlag = !1;
          else {
            let Z = parseFloat(String(l.current)) - parseFloat(String(E));
            l.current = Z.toFixed(V);
          }
        else if (Number(l.current) >= A)
          l.current = A.toFixed(V), clearInterval(X), t("scrollEnd"), l.valFlag = !1;
        else {
          let Z = parseFloat(String(l.current)) + parseFloat(String(E));
          l.current = Z.toFixed(V);
        }
      }, e.during);
    }, c = (A) => {
      let { initNum: C, endNum: E, toFixed: V, customBgImg: X } = e;
      X && (C = e.customChangeNum);
      let Z, F, oe, q;
      C != 0 ? (V != 0 && (C = Number(C.toFixed(V))), String(C).indexOf(".") > -1 ? (Z = String(C).split(".")[0].length, F = String(C).split(".")[1].length) : (Z = String(C).length, F = 0)) : (Z = 1, F = 0), E != 0 ? (V != 0 && (E = Number(E.toFixed(V))), String(E).indexOf(".") > -1 ? (oe = String(E).split(".")[0].length, q = String(E).split(".")[1].length) : (oe = String(E).length, q = 0)) : (oe = 1, q = 0);
      let H = Z >= oe ? Z : oe, ne = F >= q ? F : q;
      l.num_total_len = H + ne, l.pointNum = ne, C > E ? (l.sortFlag = "reduce", l.to0_10 = [0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], l.totalCount = y(C, E, "-"), l.numberVal = Number(String(C))) : C < E ? (l.sortFlag = "add", l.to0_10 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0], l.totalCount = y(E, C, "-"), l.numberVal = Number(String(E))) : l.sortFlag = "equal";
      var U = 1;
      for (let de = 0; de < l.pointNum; de++)
        U *= 10;
      var ae = l.numberVal * U;
      if (l.relNum = ae, V != 0 && (l.pointNum = String(l.numberVal).split(".")[1] ? String(l.numberVal).split(".")[1].length : 0, l.num_total_len = String(ae).length), String(C).indexOf(".") > -1) {
        let de = String(C).split(".");
        l.initDigit1 = Number(de[0]), l.initDigit2 = Number(de[1]);
      } else
        l.initDigit1 = C, l.initDigit2 = 0;
      i && !X ? Te(() => {
        if (l.sortFlag == "equal")
          return !1;
        let de = a.value[l.num_total_len - 1];
        $(de);
      }) : A !== 0 && I();
    }, $ = (A) => {
      v();
      var C = 1;
      l.pointNum != 0 && (C = 1 / Math.pow(10, l.pointNum)), l.timer = setInterval(() => {
        m(A), l.totalCount = y(l.totalCount, C, "-"), l.totalCount <= 0 && (v(), t("scrollEnd"), l.valFlag = !1);
      }, e.during);
    }, m = (A) => {
      let C = A.getAttribute("turn-number"), E;
      if (l.sortFlag == "add" ? E = parseInt(String(C)) + 1 : E = parseInt(String(C)) - 1 >= 0 ? parseInt(String(C)) - 1 : 9, A.setAttribute("turn-number", String(E)), (A.style.transition == "none 0s ease 0s" || E == 1 || !A.style.transition) && (A.style.transition = `all linear ${e.during}ms`), E == 10 || l.sortFlag == "reduce" && E == 0) {
        var V = null;
        A.style.top = `-${l.sortFlag == "add" ? E * 100 : (10 - E) * 100}%`, A.setAttribute("turn-number", "0"), V = setTimeout(() => {
          V && clearTimeout(V), A.style.transition = "none", A.style.top = "0", w(A, E);
        }, 0.975 * e.during);
      } else
        A.style.top = `-${l.sortFlag == "add" ? E * 100 : (10 - E) * 100}%`;
      A.style.top == "-100%" && l.sortFlag == "reduce" && m(A.previousSibling);
    }, w = (A, C) => {
      setTimeout(() => {
        C == 10 && A.previousSibling && m(A.previousSibling);
      }, 200);
    }, I = () => {
      Te(() => {
        n.value.addEventListener("webkitTransitionEnd", () => {
          t("scrollEnd"), l.valFlag = !1;
        });
      });
    }, T = () => {
      for (l.notPrize = []; l.notPrize.length < 3; ) {
        var A = Math.floor(Math.random() * e.machinePrizeNum + 1);
        l.notPrize.indexOf(A) == -1 && l.notPrize.push(A);
      }
    };
    t0({ machineLuck: () => {
      const A = e.machineTurnMore < 0 ? 0 : e.machineTurnMore;
      let C = e.numHeight * e.machinePrizeNum;
      l.prizeLevelTrun < 0 && T();
      for (let E = 0; E < e.machineNum; E++)
        setTimeout(() => {
          let V = C * (E + 1 + parseFloat(String(A)));
          l.prizeYPrev.length != 0 && (l.prizeY[E] = l.prizeYPrev[E]);
          let X = l.prizeYPrev[E] ? l.prizeYPrev[E] : 0, Z = V + X + (e.machinePrizeNum - l.prizeLevelTrun + 1) * e.numHeight + (C - X);
          l.prizeLevelTrun < 0 && (Z += e.numHeight * l.notPrize[E]), M(
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
          E += 10, l.prizeY[A] = parseFloat(String(E));
        else if (clearInterval(V), V = null, l.finshMachine += 1, l.prizeY[A] = C, l.finshMachine == e.machineNum) {
          let X = e.numHeight * e.machinePrizeNum;
          l.prizeYPrev = [], JSON.parse(JSON.stringify(l.prizeY)).forEach((F) => {
            let oe = F;
            for (; oe > X; )
              oe -= X;
            l.prizeYPrev.push(oe);
          }), setTimeout(() => {
            l.finshMachine = 0, l.prizeLevelTrun < 0 ? (t("scrollEnd", !1), l.valFlag = !1) : (t("scrollEnd", !0), l.valFlag = !1);
          }, 130);
        }
      }, 30);
    };
    return ve(() => {
      l.current = e.initNum, Te(() => {
        f();
      });
    }), je(() => {
      v(), l.timer = null;
    }), ce(G(G({}, he(l)), he(ue(e))), {
      runNumberImg: n,
      setRef: o,
      topNumber: g,
      turnNumber: b
    });
  }
}), l0 = { class: "nut-countup" }, s0 = ["turn-number"];
function a0(e, t, n, a, o, l) {
  return u(), d("view", l0, [
    e.customBgImg != "" ? (u(), d(ee, { key: 0 }, [
      e.type == "machine" ? (u(), d("view", {
        key: 0,
        class: "nut-countup__machine",
        style: L({ height: e.numHeight + "px" })
      }, [
        (u(!0), d(ee, null, re(e.machineNum, (s, i) => (u(), d("view", {
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
        (u(!0), d(ee, null, re(e.num_total_len, (s, i) => (u(), d("view", {
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
        (u(!0), d(ee, null, re(e.num_total_len, (s, i) => (u(), d("view", {
          ref_for: !0,
          ref: (r) => e.setRef(r),
          key: s,
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
        ], 12, s0))), 128)),
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
const i0 = /* @__PURE__ */ K(o0, [["render", a0]]), r0 = (e) => {
  if (!e)
    return Date.now();
  let t = e;
  return t = +t > 0 ? +t : t.toString().replace(/-/g, "/"), new Date(t).getTime();
}, { create: u0 } = Y("countdown"), c0 = "NutCountdown", d0 = u0({
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
    const a = ke(c0), o = ue({
      restTime: 0,
      // 倒计时剩余时间时间
      timer: null,
      counting: !e.paused && e.autoStart,
      // 是否处于倒计时中
      handleEndTime: Date.now(),
      // 最终截止时间
      diffTime: 0
      // 设置了 startTime 时，与 date.now() 的差异
    }), l = N(() => r(o.restTime)), s = () => {
      o.handleEndTime = e.endTime, o.diffTime = Date.now() - r0(e.startTime), o.counting || (o.counting = !0), i();
    }, i = () => {
      window !== void 0 && (o.timer = requestAnimationFrame(() => {
        if (o.counting) {
          const g = Date.now() - o.diffTime, b = Math.max(o.handleEndTime - g, 0);
          o.restTime = b, b || (o.counting = !1, v(), t("end"), t("onEnd")), b > 0 && i();
        }
      }));
    }, r = (g, b) => {
      const k = g;
      let c = {
        d: 0,
        h: 0,
        m: 0,
        s: 0,
        ms: 0
      };
      const $ = 1e3, m = 60 * $, w = 60 * m, I = 24 * w;
      return k > 0 && (c.d = k >= $ ? Math.floor(k / I) : 0, c.h = Math.floor(k % I / w), c.m = Math.floor(k % w / m), c.s = Math.floor(k % m / $), c.ms = Math.floor(k % $)), b == "custom" ? c : p(G({}, c));
    }, p = (g) => {
      let { d: b, h: k, m: c, s: $, ms: m } = g, w = e.format;
      if (w.includes("DD") ? w = w.replace("DD", Ue(b)) : k += Number(b) * 24, w.includes("HH") ? w = w.replace("HH", Ue(k)) : c += Number(k) * 60, w.includes("mm") ? w = w.replace("mm", Ue(c)) : $ += Number(c) * 60, w.includes("ss") ? w = w.replace("ss", Ue($)) : m += Number($) * 1e3, w.includes("S")) {
        const I = Ue(m, 3).toString();
        w.includes("SSS") ? w = w.replace("SSS", I) : w.includes("SS") ? w = w.replace("SS", I.slice(0, 2)) : w.includes("S") && (w = w.replace("S", I.slice(0, 1)));
      }
      return w;
    }, f = () => {
      !o.counting && !e.autoStart && (o.counting = !0, o.handleEndTime = Date.now() + Number(o.restTime), i(), t("restart", o.restTime), t("onRestart", o.restTime));
    }, v = () => {
      cancelAnimationFrame(o.timer), o.counting = !1, t("paused", o.restTime), t("onPaused", o.restTime);
    }, y = () => {
      e.autoStart || (v(), o.restTime = e.time);
    };
    return Nn(() => {
      e.autoStart ? s() : o.restTime = e.time;
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
        s();
      }
    ), Q(
      () => e.startTime,
      () => {
        s();
      }
    ), ce(G({}, he(e)), {
      slots: n,
      start: f,
      pause: v,
      renderTime: l,
      translate: a,
      reset: y
    });
  }
}), f0 = { class: "nut-countdown" }, p0 = ["innerHTML"];
function m0(e, t, n, a, o, l) {
  return u(), d("view", f0, [
    e.slots.default ? D(e.$slots, "default", { key: 0 }) : (u(), d("view", {
      key: 1,
      class: "nut-countdown__content",
      innerHTML: e.renderTime
    }, null, 8, p0))
  ]);
}
const h0 = /* @__PURE__ */ K(d0, [["render", m0]]), { create: g0 } = Y("tag"), y0 = g0({
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
    Close: Dt
  },
  emits: ["close", "click"],
  setup(e, { emit: t }) {
    const n = N(() => {
      const s = "nut-tag";
      return {
        [s]: !0,
        [`${s}--${e.type}`]: e.type,
        [`${s}--plain`]: e.plain,
        [`${s}--round`]: e.round,
        [`${s}--mark`]: e.mark
      };
    }), a = N(() => {
      const s = {};
      return e.textColor ? s.color = e.textColor : e.color && e.plain && (s.color = e.color), e.plain ? (s.background = "#fff", s["border-color"] = e.color) : e.color && (s.background = e.color), s;
    });
    return {
      classes: n,
      style: a,
      onClose: (s) => {
        s.stopPropagation(), t("close", s);
      },
      onClick: (s) => {
        t("click", s);
      }
    };
  }
});
function v0(e, t, n, a, o, l) {
  const s = j("Close");
  return u(), d("view", {
    class: B(e.classes),
    style: L(e.style),
    onClick: t[0] || (t[0] = (...i) => e.onClick && e.onClick(...i))
  }, [
    D(e.$slots, "default"),
    e.closeable ? (u(), x(s, {
      key: 0,
      class: "nut-tag--close",
      width: "12px",
      height: "12px",
      onClick: e.onClose
    }, null, 8, ["onClick"])) : S("", !0)
  ], 6);
}
const So = /* @__PURE__ */ K(y0, [["render", v0]]), { create: $0 } = Y("popover"), b0 = $0({
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
    const n = P(), a = P(), o = P(e.visible);
    let l = P(), s = P();
    const i = N(() => {
      const m = "nut-popover-arrow", w = e.location, I = w.split("-")[0];
      return `${m} ${m}-${I} ${m}--${w}`;
    }), r = N(() => {
      const m = {}, { bgColor: w, arrowOffset: I, location: T } = e, W = T.split("-")[0], M = T.split("-")[1], A = 16;
      return w && (m[`border${p(W)}Color`] = w), e.arrowOffset != 0 && (["bottom", "top"].includes(W) && (M || (m.left = `calc(50% + ${I}px)`), M == "start" && (m.left = `${A + I}px`), M == "end" && (m.right = `${A - I}px`)), ["left", "right"].includes(W) && (M || (m.top = `calc(50% - ${I}px)`), M == "start" && (m.top = `${A - I}px`), M == "end" && (m.bottom = `${A + I}px`))), m;
    }), p = (m) => (m = m.toLowerCase(), m = m.replace(/\b\w+\b/g, (w) => w.substring(0, 1).toUpperCase() + w.substring(1)), m), f = N(() => {
      let m = {};
      if (!l.value || !s.value)
        return {};
      const w = s.value.width, I = s.value.height, { width: T, height: W, left: M, top: A } = l.value, { location: C, offset: E } = e, V = C.split("-")[0], X = C.split("-")[1];
      let Z = 0, F = 0;
      if (jt(E) && E.length == 2 && (Z += Number(E[1]), F += Number(E[0])), T) {
        if (["bottom", "top"].includes(V)) {
          const oe = V == "bottom" ? W + Z : -(I + Z);
          m.top = `${A + oe}px`, X || (m.left = `${-(w - T) / 2 + M + F}px`), X == "start" && (m.left = `${M + F}px`), X == "end" && (m.left = `${l.value.right + F}px`);
        }
        if (["left", "right"].includes(V)) {
          const oe = V == "left" ? -(w + Z) : T + Z;
          m.left = `${M + oe}px`, X || (m.top = `${A - I / 2 + W / 2 - 4 + F}px`), X == "start" && (m.top = `${A + F}px`), X == "end" && (m.top = `${A + W + F}px`);
        }
      }
      return m;
    }), v = N(() => {
      const m = {};
      return e.bgColor && (m.background = e.bgColor), m;
    }), y = () => {
      let m = Oe(n.value);
      e.targetId && (m = Oe(document.querySelector(`#${e.targetId}`))), l.value = m, setTimeout(() => {
        s.value = {
          height: a.value.clientHeight,
          width: a.value.clientWidth
        };
      }, 0);
    };
    ve(() => {
      setTimeout(() => {
        y();
      }, 200);
    }), Q(
      () => e.visible,
      (m) => {
        o.value = m, m ? (window.addEventListener("touchstart", $, !0), y()) : window.removeEventListener("touchstart", $, !0);
      }
    );
    const g = (m) => {
      t("update", m), t("update:visible", m);
    }, b = () => {
      g(!e.visible), t("open");
    }, k = () => {
      t("update:visible", !1), t("close");
    }, c = (m, w) => {
      !m.disabled && t("choose", m, w), e.closeOnClickAction && k();
    }, $ = (m) => {
      const w = n.value, I = a.value;
      let T = w && !w.contains(m.target);
      if (e.targetId) {
        const W = document.querySelector(`#${e.targetId}`);
        T = W && !W.contains(m.target);
      }
      T && I && !I.contains(m.target) && e.closeOnClickOutside && k();
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
      customStyle: v,
      popoverArrowStyle: r,
      renderIcon: ot
    };
  }
}), k0 = {
  ref: "popoverContentRef",
  class: "nut-popover-content-group"
}, w0 = ["onClick"], C0 = { class: "nut-popover-menu-item-name" };
function S0(e, t, n, a, o, l) {
  const s = j("nut-popup");
  return u(), d(ee, null, [
    e.targetId ? S("", !0) : (u(), d("div", {
      key: 0,
      ref: "popoverRef",
      class: "nut-popover-wrapper",
      onClick: t[0] || (t[0] = (...i) => e.openPopover && e.openPopover(...i))
    }, [
      D(e.$slots, "reference")
    ], 512)),
    h("view", {
      class: B(["nut-popover", `nut-popover--${e.theme}`, `${e.customClass}`]),
      style: L(e.getRootPosition)
    }, [
      le(s, {
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
          h("view", k0, [
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
              h("view", C0, _(i.name), 1)
            ], 10, w0))), 128))
          ], 512)
        ]),
        _: 3
      }, 8, ["visible", "pop-class", "style", "overlay", "duration", "overlay-style", "overlay-class", "close-on-click-overlay"])
    ], 6)
  ], 64);
}
const To = /* @__PURE__ */ K(b0, [["render", S0]]), { create: T0 } = Y("skeleton"), N0 = T0({
  components: {
    NutAvatar: Qt
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
    const { avatarShape: t, round: n, avatarSize: a } = he(e), o = N(() => {
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
}), D0 = { key: 0 }, I0 = {
  key: 1,
  class: "nut-skeleton"
}, _0 = {
  key: 0,
  class: "nut-skeleton-animation"
}, B0 = { class: "nut-skeleton-content" };
function M0(e, t, n, a, o, l) {
  const s = j("nut-avatar");
  return e.loading ? (u(), d("view", I0, [
    e.animated ? (u(), d("view", _0)) : S("", !0),
    h("view", B0, [
      e.avatar ? (u(), x(s, {
        key: 0,
        class: B(e.avatarClass),
        shape: e.avatarShape,
        style: L(e.getStyle())
      }, null, 8, ["class", "shape", "style"])) : S("", !0),
      h("view", {
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
  ])) : (u(), d("view", D0, [
    D(e.$slots, "default")
  ]));
}
const L0 = /* @__PURE__ */ K(N0, [["render", M0]]), No = Symbol("nut-collapse"), { create: E0 } = Y("collapse"), P0 = E0({
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
    return Me(No, {
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
}), A0 = {
  ref: "nutCollapseRef",
  class: "nut-collapse"
};
function z0(e, t, n, a, o, l) {
  return u(), d("view", A0, [
    D(e.$slots, "default")
  ], 512);
}
const V0 = /* @__PURE__ */ K(P0, [["render", z0]]), { create: O0 } = Y("collapse-item"), H0 = O0({
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
      default: () => zn
    },
    rotate: {
      type: [String, Number],
      default: 180
    }
  },
  setup(e) {
    const t = P(null), n = P(null), a = Be(No), o = N(() => {
      const v = "nut-collapse-item";
      return {
        [v]: !0,
        [v + "__border"]: e.border
      };
    }), l = N(() => a ? a.isExpanded(e.name) : !1), s = P(l.value ? "auto" : "0px"), i = () => {
      a && a.updateVal(e.name);
    }, r = () => {
      l.value && (s.value = "auto");
    }, p = () => {
      s.value = "0px", requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          var y;
          const v = (y = n.value) == null ? void 0 : y.offsetHeight;
          s.value = v ? `${v}px` : "auto";
        });
      });
    }, f = () => {
      var y;
      const v = (y = n.value) == null ? void 0 : y.offsetHeight;
      s.value = v ? `${v}px` : "auto", requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          s.value = "0px";
        });
      });
    };
    return Q(l, (v) => {
      v ? p() : f();
    }), {
      classes: o,
      renderIcon: ot,
      wrapperRef: t,
      contentRef: n,
      open: p,
      toggle: i,
      wrapperHeight: s,
      expanded: l,
      onTransitionEnd: r
    };
  }
}), R0 = { class: "nut-collapse-item__title-main" }, F0 = { class: "nut-collapse-item__title-main-value" }, W0 = ["innerHTML"], Y0 = {
  key: 2,
  class: "nut-collapse-item__title-label"
}, j0 = {
  key: 0,
  class: "nut-collapse-item__title-sub"
}, K0 = ["innerHTML"], U0 = {
  key: 0,
  class: "nut-collapse__item-extraWrapper"
}, X0 = { class: "nut-collapse__item-extraWrapper__extraRender" }, q0 = {
  ref: "contentRef",
  class: "nut-collapse__item-wrapper__content"
};
function G0(e, t, n, a, o, l) {
  return u(), d("view", {
    class: B(e.classes)
  }, [
    h("view", {
      class: B(["nut-collapse-item__title", { "nut-collapse-item__title--disabled": e.disabled }]),
      onClick: t[0] || (t[0] = (...s) => e.toggle && e.toggle(...s))
    }, [
      h("view", R0, [
        h("view", F0, [
          e.$slots.title ? D(e.$slots, "title", { key: 0 }) : (u(), d("view", {
            key: 1,
            class: "nut-collapse-item__title-mtitle",
            innerHTML: e.title
          }, null, 8, W0)),
          e.label ? (u(), d("view", Y0, _(e.label), 1)) : S("", !0)
        ])
      ]),
      e.$slots.value ? (u(), d("view", j0, [
        D(e.$slots, "value")
      ])) : (u(), d("view", {
        key: 1,
        class: "nut-collapse-item__title-sub",
        innerHTML: e.value
      }, null, 8, K0)),
      h("view", {
        class: B(["nut-collapse-item__title-icon", { "nut-collapse-item__title-icon--expanded": e.expanded }]),
        style: L({ transform: "rotate(" + (e.expanded ? e.rotate : 0) + "deg)" })
      }, [
        e.$slots.icon ? D(e.$slots, "icon", { key: 0 }) : (u(), x(Ae(e.renderIcon(e.icon)), { key: 1 }))
      ], 6)
    ], 2),
    e.$slots.extra ? (u(), d("view", U0, [
      h("div", X0, [
        D(e.$slots, "extra")
      ])
    ])) : S("", !0),
    h("view", {
      ref: "wrapperRef",
      class: "nut-collapse__item-wrapper",
      style: L({
        willChange: "height",
        height: e.wrapperHeight
      }),
      onTransitionend: t[1] || (t[1] = (...s) => e.onTransitionEnd && e.onTransitionEnd(...s))
    }, [
      h("view", q0, [
        D(e.$slots, "default")
      ], 512)
    ], 36)
  ], 2);
}
const Z0 = /* @__PURE__ */ K(H0, [["render", G0]]), J0 = Nt({
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
}), { create: Q0 } = Y("table"), x0 = "NutTable", ey = Q0({
  components: {
    RenderColumn: J0,
    DownArrow: zn
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
    const n = ke(x0), a = ue({
      curData: e.data
    }), o = (v) => ({
      "nut-table__main__head__tr--border": e.bordered,
      [`nut-table__main__head__tr--align${v.align ? v.align : ""}`]: !0
    }), l = (v) => v.stylehead ? v.stylehead : "", s = (v) => v.stylecolumn ? v.stylecolumn : "", i = (v) => e.columns.filter((y) => y.key === v)[0], r = (v) => {
      const y = e.columns.filter((g) => g.key === v);
      return y[0].stylecolumn ? y[0].stylecolumn : "";
    }, p = (v) => {
      v.sorter && (t("sorter", v), a.curData = typeof v.sorter == "function" ? a.curData.sort(v.sorter) : v.sorter === "default" ? a.curData.sort() : a.curData);
    }, f = () => e.columns.map((v) => [v.key, v.render]);
    return Q(
      () => e.data,
      (v) => {
        a.curData = v.slice();
      }
    ), ce(G({}, he(a)), {
      cellClasses: o,
      getColumnItem: i,
      getColumnItemStyle: r,
      handleSorterClick: p,
      sortDataItem: f,
      translate: n,
      stylehead: l,
      stylecolumn: s
    });
  }
}), ty = { class: "nut-table" }, ny = { class: "nut-table__main__head" }, oy = { class: "nut-table__main__head__tr" }, ly = ["onClick"], sy = { class: "nut-table__main__body" }, ay = { key: 1 }, iy = {
  key: 0,
  class: "nut-table__nodata"
}, ry = {
  key: 0,
  class: "nut-table__nodata__text"
}, uy = {
  key: 1,
  class: "nut-table__summary"
}, cy = ["innerHTML"];
function dy(e, t, n, a, o, l) {
  const s = j("DownArrow"), i = j("RenderColumn");
  return u(), d("view", ty, [
    h("view", {
      class: B(["nut-table__main", { "nut-table__main--striped": e.striped }])
    }, [
      h("view", ny, [
        h("view", oy, [
          (u(!0), d(ee, null, re(e.columns, (r) => (u(), d("span", {
            key: r.key,
            class: B(["nut-table__main__head__tr__th", e.cellClasses(r)]),
            style: L(r.stylehead),
            onClick: (p) => e.handleSorterClick(r)
          }, [
            ge(_(r.title) + " ", 1),
            D(e.$slots, "icon"),
            !e.$slots.icon && r.sorter ? (u(), x(s, {
              key: 0,
              width: "12px",
              height: "12px"
            })) : S("", !0)
          ], 14, ly))), 128))
        ])
      ]),
      h("view", sy, [
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
            }, null, 8, ["slots", "record"])) : (u(), d("view", ay, _(r[p]), 1))
          ], 6))), 128))
        ]))), 128))
      ])
    ], 2),
    e.curData.length ? S("", !0) : (u(), d("view", iy, [
      h("div", {
        class: B(["nut-table__nodata", { "nut-table__nodata--border": e.bordered }])
      }, [
        D(e.$slots, "nodata"),
        e.$slots.nodata ? S("", !0) : (u(), d("div", ry, _(e.translate("noData")), 1))
      ], 2)
    ])),
    e.summary ? (u(), d("view", uy, [
      h("span", {
        class: "nut-table__summary__text",
        innerHTML: e.summary().value
      }, null, 8, cy)
    ])) : S("", !0)
  ]);
}
const fy = /* @__PURE__ */ K(ey, [["render", dy]]), { create: py } = Y("animate"), my = py({
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
    }, l = (s) => {
      e.action === "click" && (o(), t("click", s), t("animate"));
    };
    return Q(
      () => e.show,
      (s) => {
        s && (o(), t("animate"));
      }
    ), { classes: a, handleClick: l };
  }
}), hy = { class: "nut-animate" };
function gy(e, t, n, a, o, l) {
  return u(), d("view", hy, [
    h("view", {
      class: B(e.classes),
      style: L({
        animationDuration: e.duration ? `${e.duration}ms` : void 0
      }),
      onClick: t[0] || (t[0] = (...s) => e.handleClick && e.handleClick(...s))
    }, [
      D(e.$slots, "default")
    ], 6)
  ]);
}
const yy = /* @__PURE__ */ K(my, [["render", gy]]), { create: vy } = Y("ellipsis"), $y = vy({
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
    const l = P(), s = ue({
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
      const c = v(b.lineHeight === "normal" ? e.lineHeight : b.lineHeight);
      o = Math.floor(
        c * (Number(e.rows) + 0.5) + v(b.paddingTop) + v(b.paddingBottom)
      ), a.innerText = e.content, document.body.appendChild(a), r();
    }, r = () => {
      if (a.offsetHeight <= o)
        s.exceeded = !1, document.body.removeChild(a);
      else {
        s.exceeded = !0;
        const b = e.content.length, k = Math.floor((0 + b) / 2), c = e.direction === "middle" ? f([0, k], [k, b]) : p(0, b);
        l.value = c, document.body.removeChild(a);
      }
    }, p = (b, k) => {
      const c = s.expanded ? e.collapseText : e.expandText, $ = e.content.length;
      if (k - b <= 1)
        return e.direction === "end" ? {
          leading: e.content.slice(0, b) + e.symbol
        } : {
          tailing: e.symbol + e.content.slice(k, $)
        };
      const m = Math.round((b + k) / 2);
      return e.direction === "end" ? a.innerText = e.content.slice(0, m) + e.symbol + c : a.innerText = c + e.symbol + e.content.slice(m, $), a.offsetHeight <= o ? e.direction === "end" ? p(m, k) : p(b, m) : e.direction === "end" ? p(b, m) : p(m, k);
    }, f = (b, k) => {
      const c = s.expanded ? e.collapseText : e.expandText, $ = e.content.length;
      if (b[1] - b[0] <= 1 && k[1] - k[0] <= 1)
        return {
          leading: e.content.slice(0, b[0]) + e.symbol,
          tailing: e.symbol + e.content.slice(k[1], $)
        };
      const m = Math.floor((b[0] + b[1]) / 2), w = Math.ceil((k[0] + k[1]) / 2);
      return a.innerText = e.content.slice(0, m) + e.symbol + c + e.symbol + e.content.slice(w, $), a.offsetHeight <= o ? f([m, b[1]], [k[0], w]) : f([b[0], m], [w, k[1]]);
    }, v = (b) => {
      if (!b)
        return 0;
      const k = b.match(/^\d*(\.\d*)?/);
      return k ? Number(k[0]) : 0;
    }, y = (b) => {
      b == 1 ? (s.expanded = !0, t("change", "expand")) : (s.expanded = !1, t("change", "collapse"));
    }, g = () => {
      t("click");
    };
    return ce(G({}, he(s)), { root: n, ellipsis: l, clickHandle: y, handleClick: g });
  }
}), by = { key: 0 }, ky = { key: 1 }, wy = { key: 2 };
function Cy(e, t, n, a, o, l) {
  return u(), d("view", {
    ref: "root",
    class: "nut-ellipsis",
    onClick: t[2] || (t[2] = (...s) => e.handleClick && e.handleClick(...s))
  }, [
    e.exceeded ? S("", !0) : (u(), d("view", by, _(e.content), 1)),
    e.exceeded && !e.expanded ? (u(), d("view", ky, [
      ge(_(e.ellipsis && e.ellipsis.leading), 1),
      e.expandText ? (u(), d("span", {
        key: 0,
        class: "nut-ellipsis__text",
        onClick: t[0] || (t[0] = Ne((s) => e.clickHandle(1), ["stop"]))
      }, _(e.expandText), 1)) : S("", !0),
      ge(_(e.ellipsis && e.ellipsis.tailing), 1)
    ])) : S("", !0),
    e.exceeded && e.expanded ? (u(), d("view", wy, [
      ge(_(e.content) + " ", 1),
      e.expandText ? (u(), d("span", {
        key: 0,
        class: "nut-ellipsis__text",
        onClick: t[1] || (t[1] = Ne((s) => e.clickHandle(2), ["stop"]))
      }, _(e.collapseText), 1)) : S("", !0)
    ])) : S("", !0)
  ], 512);
}
const Sy = /* @__PURE__ */ K($y, [["render", Cy]]), { componentName: Ty, create: Ny } = Y("watermark"), Dy = Ny({
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
      type: String,
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
      width: l,
      height: s,
      rotate: i,
      image: r,
      imageWidth: p,
      imageHeight: f,
      content: v,
      fontStyle: y,
      fontWeight: g,
      fontColor: b,
      fontSize: k,
      fontFamily: c
    } = e, $ = () => {
      const w = document.createElement("canvas"), I = window.devicePixelRatio, T = w.getContext("2d"), W = `${(a + l) * I}px`, M = `${(o + s) * I}px`, A = l * I, C = s * I;
      if (w.setAttribute("width", W), w.setAttribute("height", M), T) {
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
            ), T.restore(), t.base64Url = w.toDataURL();
          };
        } else if (v) {
          T.textBaseline = "middle", T.textAlign = "center", T.translate(A / 2, C / 2), T.rotate(Math.PI / 180 * Number(i));
          const E = Number(k) * I;
          T.font = `${y} normal ${g} ${E}px/${C}px ${c}`, T.fillStyle = b, T.fillText(v, 0, 0), T.restore(), t.base64Url = w.toDataURL();
        }
      } else
        throw new Error("当前环境不支持Canvas");
    };
    $(), Q(
      () => [
        n,
        a,
        o,
        l,
        s,
        i,
        r,
        p,
        f,
        v,
        y,
        g,
        b,
        k,
        c
      ],
      () => {
        $();
      }
    );
    const m = N(() => {
      const w = Ty;
      return {
        [w]: !0,
        [`${w}-full-page`]: e.fullPage
      };
    });
    return ce(G({}, he(t)), { classes: m });
  }
});
function Iy(e, t, n, a, o, l) {
  return u(), d("view", {
    class: B(e.classes),
    style: L({
      zIndex: e.zIndex,
      backgroundSize: `${e.gapX + e.width}px`,
      backgroundImage: `url('${e.base64Url}')`
    })
  }, null, 6);
}
const _y = /* @__PURE__ */ K(Dy, [["render", Iy]]), { create: By } = Y("trend-arrow"), My = By({
  components: { TriangleUp: Ei, TriangleDown: Ii },
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
      const { rate: o, digits: l, showSign: s, showZero: i } = e;
      t.rateTrend = o > 0;
      const r = Math.abs(o);
      return !i && o === 0 ? "--" : `${s && o !== 0 ? t.rateTrend ? "+" : "-" : ""}${Ko(
        Number(r),
        l
      )}%`;
    }), a = N(() => {
      const { dropColor: o, riseColor: l, syncTextColor: s, textColor: i, rate: r } = e;
      return {
        color: r === 0 ? i : s ? t.rateTrend ? l : o : i
      };
    });
    return ce(G({}, he(t)), { calcRate: n, calcStyle: a });
  }
}), Ly = { class: "nut-trend-arrow" };
function Ey(e, t, n, a, o, l) {
  const s = j("TriangleUp"), i = j("TriangleDown");
  return u(), d("view", Ly, [
    e.arrowLeft ? S("", !0) : (u(), d("span", {
      key: 0,
      class: "nut-trend-arrow-icon-before nut-trend-arrow-rate",
      style: L(e.calcStyle)
    }, _(e.calcRate), 5)),
    Number(e.rate) !== 0 && e.rateTrend ? D(e.$slots, "up-icon", { key: 1 }, () => [
      le(s, { color: e.riseColor }, null, 8, ["color"])
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
const Py = /* @__PURE__ */ K(My, [["render", Ey]]), { create: Ay } = Y("tour"), zy = Ay({
  components: {
    NutPopover: To,
    Close: Dt
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
    }), a = P({}), o = N(() => "nut-tour"), l = N(() => {
      const { offset: f, maskWidth: v, maskHeight: y } = e, { width: g, height: b, left: k, top: c } = a.value, $ = [k + g / 2, c + b / 2], m = Number(v || g), w = Number(y || b);
      return {
        width: `${m + +f[1] * 2}px`,
        height: `${w + +f[0] * 2}px`,
        top: `${$[1] - w / 2 - +f[0]}px`,
        left: `${$[0] - m / 2 - +f[1]}px`
      };
    }), s = (f) => {
      f == "next" ? n.active = n.active + 1 : n.active = n.active - 1, n.showPopup = !1, Te(() => {
        n.showPopup = !0, i();
      }), t("change", n.active);
    }, i = () => {
      const f = document.querySelector(`#${e.steps[n.active].target}`), v = Oe(f);
      a.value = v;
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
    ), ce(G({}, he(n)), {
      classes: o,
      maskStyle: l,
      changeStep: s,
      close: r,
      handleClickMask: p
    });
  }
}), Vy = {
  key: 0,
  class: "nut-tour-content"
}, Oy = {
  key: 0,
  class: "nut-tour-content-top"
}, Hy = { class: "nut-tour-content-inner" }, Ry = { class: "nut-tour-content-bottom" }, Fy = { class: "nut-tour-content-bottom-init" }, Wy = { class: "nut-tour-content-bottom-operate" }, Yy = {
  key: 1,
  class: "nut-tour-content nut-tour-content-tile"
}, jy = { class: "nut-tour-content-inner" };
function Ky(e, t, n, a, o, l) {
  const s = j("Close"), i = j("nut-popover");
  return u(), d("div", {
    class: B(e.classes)
  }, [
    Se(h("div", {
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
              e.type == "step" ? (u(), d("div", Vy, [
                e.showTitleBar ? (u(), d("div", Oy, [
                  h("div", {
                    onClick: t[1] || (t[1] = (...f) => e.close && e.close(...f))
                  }, [
                    le(s, { class: "nut-tour-content-top-close" })
                  ])
                ])) : S("", !0),
                h("div", Hy, _(r.content), 1),
                h("div", Ry, [
                  h("div", Fy, _(e.active + 1) + "/" + _(e.steps.length), 1),
                  h("div", Wy, [
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
              e.type == "tile" ? (u(), d("div", Yy, [
                h("div", jy, _(r.content), 1)
              ])) : S("", !0)
            ])
          ]),
          _: 2
        }, 1032, ["visible", "location", "bg-color", "theme", "offset", "arrow-offset"])
      ], 64)) : S("", !0)
    ]))), 128))
  ], 2);
}
const Uy = /* @__PURE__ */ K(zy, [["render", Ky]]), { create: Xy } = Y("address"), qy = "NutAddress", Gy = Xy({
  components: {
    NutPopup: Le,
    NutElevator: Qn,
    Location: Gs,
    Location2: ea,
    Check: En,
    Close: Dt,
    Left: Xt
  },
  inheritAttrs: !1,
  props: ce(G({}, gt), {
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
    const n = ke(qy), a = P(null), o = P(null), l = P(e.visible), s = P(e.type), i = P(0), r = P(0), p = P(["province", "city", "country", "town"]), f = P(null), v = P([0, 0, 0, 0]), y = ue([]), g = N(() => {
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
    const $ = P("self"), m = P(20), w = () => {
      y[0] = e.province || [], y[1] = e.city || [], y[2] = e.country || [], y[3] = e.town || [];
      const q = e.modelValue, H = q.length;
      if (H > 0) {
        if (i.value = H - 1, g.value.length == 0) {
          i.value = 0;
          return;
        }
        for (let ne = 0; ne < H; ne++) {
          let U = y[ne];
          k.value[ne] = U.filter((ae) => ae.id == q[ne])[0];
        }
        T();
      }
    }, I = (q, H) => q && q.name || i.value < H && q ? q.name : e.columnsPlaceholder[H] || n("select"), T = () => {
      A(), Te(() => {
        const q = o.value && o.value.getElementsByClassName("active")[0];
        if (q) {
          const H = q.offsetLeft;
          m.value = H || 20;
        }
      });
    }, W = (q) => {
      var U;
      const H = i.value;
      r.value = i.value;
      const ne = {
        custom: p.value[H]
      };
      k.value[H] = q, k.value.splice(H + 1, k.value.length - (H + 1)), ne.value = q, ((U = y[H + 1]) == null ? void 0 : U.length) > 0 ? (i.value = H + 1, T(), ne.next = p.value[i.value]) : (V(), t("update:modelValue")), t("change", ne);
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
      k.value = [], i.value = 0, T();
    }, V = (q = "self") => {
      $.value = q == "cross" ? "cross" : "self", l.value = !1;
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
        type: s.value
      };
      ["custom", "custom2"].includes(s.value) ? ([0, 1, 2, 3].forEach((ne) => {
        const U = k.value[ne];
        q.addressIdStr += `${ne ? "_" : ""}${U && U.id || 0}`, q.addressStr += U && U.name || "";
      }), H.data = q) : H.data = c, E(), $.value == "self" ? t("close", H) : t("closeMask", { closeWay: $ }), t("update:visible", !1);
    }, F = () => {
      const q = s.value;
      s.value = q == "exist" ? "custom" : "exist", E(), t("switchModule", { type: s.value });
    }, oe = (q, H) => {
      W(H);
    };
    return Q(
      () => e.visible,
      (q) => {
        l.value = q;
      }
    ), Q(
      () => l.value,
      (q) => {
        q && w();
      }
    ), ce(G({
      showPopup: l,
      privateType: s,
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
      lineDistance: m,
      changeRegionTab: M,
      selectedExist: C,
      clickOverlay: X,
      handClose: V,
      handleElevatorItem: oe,
      initCustomSelected: w
    }, he(e)), {
      translate: n,
      regionList: g,
      transformData: b,
      scrollDom: f
    });
  }
}), Zy = { class: "nut-address" }, Jy = { class: "nut-address__header" }, Qy = { class: "nut-address__header__title" }, xy = {
  key: 0,
  class: "nut-address__custom"
}, ev = {
  ref: "tabRegion",
  class: "nut-address__region"
}, tv = ["onClick"], nv = {
  key: 0,
  class: "active nut-address__region-item"
}, ov = {
  key: 0,
  class: "nut-address__detail"
}, lv = {
  ref: "scrollDom",
  class: "nut-address__detail-list"
}, sv = ["onClick"], av = {
  key: 1,
  class: "nut-address__elevator-group"
}, iv = {
  key: 1,
  class: "nut-address__exist"
}, rv = { class: "nut-address__exist-group" }, uv = { class: "nut-address__exist-group-list" }, cv = ["onClick"], dv = { class: "nut-address__exist-item-info" }, fv = {
  key: 0,
  class: "nut-address__exist-item-info-name"
}, pv = {
  key: 1,
  class: "nut-address__exist-item-info-phone"
}, mv = { class: "nut-address__exist-item-info-bottom" }, hv = { class: "nut-address__exist-choose-btn" };
function gv(e, t, n, a, o, l) {
  const s = j("Left"), i = j("Close"), r = j("Check"), p = j("nut-elevator"), f = j("Location2"), v = j("nut-popup");
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
      h("view", Zy, [
        h("view", Jy, [
          h("view", {
            class: "nut-address__header-back",
            onClick: t[0] || (t[0] = (...y) => e.switchModule && e.switchModule(...y))
          }, [
            D(e.$slots, "back-icon", {}, () => [
              Se(le(s, { size: "14px" }, null, 512), [
                [De, e.type == "exist" && e.privateType == "custom"]
              ])
            ])
          ]),
          h("view", Qy, _(e.privateType == "custom" ? e.customAddressTitle || e.translate("selectRegion") : e.existAddressTitle || e.translate("deliveryTo")), 1),
          h("view", {
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
        ["custom", "custom2"].includes(e.privateType) ? (u(), d("view", xy, [
          h("view", ev, [
            (u(!0), d(ee, null, re(e.selectedRegion, (y, g) => (u(), d("view", {
              key: g,
              class: B(["nut-address__region-item", g == e.tabIndex ? "active" : ""]),
              onClick: (b) => e.changeRegionTab(y, g)
            }, [
              h("view", null, _(e.getTabName(y, g)), 1)
            ], 10, tv))), 128)),
            e.tabIndex == e.selectedRegion.length ? (u(), d("view", nv, [
              h("view", null, _(e.getTabName(null, e.selectedRegion.length)), 1)
            ])) : S("", !0),
            h("view", {
              ref: "regionLine",
              class: "nut-address__region-line",
              style: L({ left: e.lineDistance + "px" })
            }, null, 4)
          ], 512),
          e.privateType == "custom" ? (u(), d("view", ov, [
            h("ul", lv, [
              (u(!0), d(ee, null, re(e.regionList, (y, g) => {
                var b, k;
                return u(), d("li", {
                  key: g,
                  class: B(["nut-address__detail-item", ((b = e.selectedRegion[e.tabIndex]) == null ? void 0 : b.id) == y.id ? "active" : ""]),
                  onClick: (c) => e.nextAreaList(y)
                }, [
                  h("div", null, [
                    ((k = e.selectedRegion[e.tabIndex]) == null ? void 0 : k.id) == y.id ? D(e.$slots, "icon", { key: 0 }, () => [
                      le(r, {
                        class: "nut-address-select-icon",
                        size: "13px"
                      })
                    ]) : S("", !0),
                    ge(_(y.name), 1)
                  ])
                ], 10, sv);
              }), 128))
            ], 512)
          ])) : (u(), d("view", av, [
            le(p, {
              height: e.height,
              "index-list": e.transformData(e.regionList),
              onClickItem: e.handleElevatorItem
            }, null, 8, ["height", "index-list", "onClickItem"])
          ]))
        ])) : (u(), d("view", iv, [
          h("div", rv, [
            h("ul", uv, [
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
                h("div", dv, [
                  y.name ? (u(), d("div", fv, _(y.name), 1)) : S("", !0),
                  y.phone ? (u(), d("div", pv, _(y.phone), 1)) : S("", !0),
                  h("div", mv, [
                    h("view", null, _(y.provinceName + y.cityName + y.countyName + y.townName + y.addressDetail), 1)
                  ])
                ])
              ], 10, cv))), 128))
            ])
          ]),
          e.isShowCustomAddress ? (u(), d("div", {
            key: 0,
            class: "nut-address__exist-choose",
            onClick: t[2] || (t[2] = (...y) => e.switchModule && e.switchModule(...y))
          }, [
            h("div", hv, _(e.customAndExistTitle || e.translate("chooseAnotherAddress")), 1)
          ])) : S("", !0)
        ])),
        D(e.$slots, "bottom")
      ])
    ]),
    _: 3
  }, 8, ["visible", "lock-scroll", "round", "teleport-disable", "teleport", "z-index", "onClose", "onClickOverlay"]);
}
const yv = /* @__PURE__ */ K(Gy, [["render", gv]]), { create: vv } = Y("barrage"), $v = vv({
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
    let a = P(document.createElement("div")), o = P(document.createElement("div")), l = null;
    const s = P(e.danmu), i = P(e.rows), r = P(e.top), p = P(0), f = e.speeds, v = P(0);
    ve(() => {
      y(), n && document.addEventListener("visibilitychange", function() {
        document.visibilityState === "hidden" ? (b(), p.value = 0, g("hidden")) : document.visibilityState === "visible" && y();
      });
    }), je(() => {
      s.value = [], b();
    });
    const y = () => {
      v.value = a.value.offsetWidth, n && g("init"), setTimeout(() => {
        var m;
        (m = a.value) == null || m.style.setProperty("--move-distance", `-${v.value}px`), c();
      }, 300);
    }, g = (m) => {
      var W;
      const w = document.getElementsByClassName("slotBody" + t);
      let I = ((W = w == null ? void 0 : w[0]) == null ? void 0 : W.children) || [];
      const T = [];
      I && Array.from(I).forEach((M) => {
        m == "init" ? (M.style.opacity = "0", T.push(M)) : (M.classList = "", M.style = {});
      }), m == "init" && (s.value = T);
    }, b = () => {
      l && (clearTimeout(l), l = null);
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
    }, c = () => {
      b(), l = setTimeout(() => {
        $();
      }, e.frequency);
    }, $ = () => {
      var I;
      const m = e.loop ? p.value % s.value.length : p.value;
      let w = document.createElement("view");
      n && typeof s.value[m] == "object" ? (w = s.value[m], (I = w == null ? void 0 : w.classList) == null || I.add("nut-barrage__item")) : (w.innerHTML = s.value[m], w.classList.add("nut-barrage__item"), o.value.appendChild(w)), Te(() => {
        var W;
        const T = w.offsetHeight;
        if ((W = w == null ? void 0 : w.classList) == null || W.add("move"), w.style.animationDuration = `${f}ms`, w.style.top = m % i.value * (T + r.value) + 20 + "px", w.style.opacity = "1", !n) {
          const M = w.offsetWidth;
          w.style.width = M + 20 + "px";
        }
        w.addEventListener("animationend", () => {
          n ? w.classList.remove("move") : o.value.removeChild(w);
        }), !(!e.loop && p.value >= s.value.length - 1) && (p.value++, p.value >= s.value.length && (p.value = 0), w.removeEventListener("animationend", () => {
        }), c());
      });
    };
    return { classTime: t, danmuList: s, dmBody: a, dmContainer: o, add: k };
  }
}), bv = {
  ref: "dmBody",
  class: "nut-barrage"
};
function kv(e, t, n, a, o, l) {
  return u(), d("div", bv, [
    h("div", {
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
const wv = /* @__PURE__ */ K($v, [["render", kv]]), { create: Cv } = Y("signature"), Sv = "NutSignature", Tv = Cv({
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
    NutButton: Xe
  },
  emits: ["start", "end", "signing", "confirm", "clear"],
  setup(e, { emit: t }) {
    const n = ke(Sv), a = P(null), o = P(null), l = N(() => ({
      ["nut-signature"]: !0,
      [`${e.customClass}`]: e.customClass
    })), s = ue({
      canvasHeight: 0,
      canvasWidth: 0,
      ctx: null,
      isSupportTouch: "ontouchstart" in window,
      events: "ontouchstart" in window ? ["touchstart", "touchmove", "touchend", "touchleave"] : ["mousedown", "mousemove", "mouseup", "mouseleave"]
    }), i = () => {
      let $ = document.createElement("canvas");
      return !!($.getContext && $.getContext("2d"));
    }, r = () => {
      a.value.addEventListener(s.events[0], p, !1);
    }, p = ($) => {
      $.preventDefault(), s.ctx.beginPath(), s.ctx.lineWidth = e.lineWidth, s.ctx.strokeStyle = e.strokeStyle, t("start"), a.value.addEventListener(s.events[1], f, !1), a.value.addEventListener(s.events[2], v, !1), a.value.addEventListener(s.events[3], y, !1);
    }, f = ($) => {
      $.preventDefault();
      let m = s.isSupportTouch ? $.touches[0] : $;
      t("signing", m);
      let w = a.value.getBoundingClientRect(), I = m.clientX - w.left, T = m.clientY - w.top;
      s.ctx.lineTo(I, T), s.ctx.stroke();
    }, v = ($) => {
      $.preventDefault(), t("end"), a.value.removeEventListener(s.events[1], f, !1), a.value.removeEventListener(s.events[2], v, !1);
    }, y = ($) => {
      $.preventDefault(), a.value.removeEventListener(s.events[1], f, !1), a.value.removeEventListener(s.events[2], v, !1);
    }, g = () => {
      a.value.addEventListener(s.events[2], v, !1), s.ctx.clearRect(0, 0, s.canvasWidth, s.canvasHeight), s.ctx.closePath(), t("clear");
    }, b = () => {
      c(a.value);
    }, k = ($) => {
      if (!$)
        return !0;
      var m = document.createElement("canvas");
      return m.width = $.width, m.height = $.height, ($ == null ? void 0 : $.toDataURL()) == m.toDataURL();
    }, c = ($) => {
      let m;
      switch (e.type) {
        case "png":
          m = $.toDataURL("image/png");
          break;
        case "jpg":
          m = $.toDataURL("image/jpeg", 0.8);
          break;
      }
      const w = k($) ? "请绘制签名" : $, I = k($) ? "" : m;
      t("confirm", w, I);
    };
    return ve(() => {
      i() && (s.ctx = a.value.getContext("2d"), s.canvasWidth = o.value.offsetWidth, s.canvasHeight = o.value.offsetHeight, r());
    }), ce(G({}, he(s)), { canvas: a, wrap: o, isCanvasSupported: i, confirm: b, clear: g, classes: l, translate: n });
  }
}), Nv = {
  ref: "wrap",
  class: "nut-signature-inner"
}, Dv = ["height", "width"], Iv = {
  key: 0,
  class: "nut-signature-unsopport"
};
function _v(e, t, n, a, o, l) {
  const s = j("nut-button");
  return u(), d("div", {
    class: B(e.classes)
  }, [
    h("div", Nv, [
      Se(h("canvas", {
        ref: "canvas",
        height: e.canvasHeight,
        width: e.canvasWidth
      }, null, 8, Dv), [
        [De, e.isCanvasSupported()]
      ]),
      e.isCanvasSupported() ? S("", !0) : (u(), d("p", Iv, _(e.unSupportTpl || e.translate("unSupportTpl")), 1))
    ], 512),
    le(s, {
      class: "nut-signature-btn",
      type: "default",
      onClick: t[0] || (t[0] = (i) => e.clear())
    }, {
      default: te(() => [
        ge(_(e.translate("reSign")), 1)
      ]),
      _: 1
    }),
    le(s, {
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
const Bv = /* @__PURE__ */ K(Tv, [["render", _v]]), { create: Mv } = Y("time-select"), Lv = "NutTimeSelect", Ev = Mv({
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
    const n = ke(Lv), a = N(() => ({
      width: "100%",
      height: e.height
    })), o = N(() => e.currentKey), l = N(() => e.currentTime), s = () => {
      t("update:visible", !1), t("select", l.value);
    };
    return Me("currentKey", o), Me("currentTime", l), {
      popStyle: a,
      close: s,
      translate: n
    };
  }
}), Pv = { class: "nut-time-select" }, Av = { class: "nut-time-select__title" }, zv = { class: "nut-time-select__title__fixed" }, Vv = { key: 0 }, Ov = { class: "nut-time-select__content" }, Hv = { class: "nut-time-select__content__pannel" }, Rv = { class: "nut-time-select__content__detail" };
function Fv(e, t, n, a, o, l) {
  const s = j("nut-popup");
  return u(), x(s, {
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
      h("view", Pv, [
        h("view", Av, [
          h("view", zv, [
            e.$slots.title ? D(e.$slots, "title", { key: 1 }) : (u(), d("span", Vv, _(e.title || e.translate("pickupTime")), 1))
          ])
        ]),
        h("view", Ov, [
          h("view", Hv, [
            D(e.$slots, "pannel")
          ]),
          h("view", Rv, [
            D(e.$slots, "detail")
          ])
        ])
      ])
    ]),
    _: 3
  }, 8, ["teleport-disable", "visible", "style", "lock-scroll", "onClickOverlay", "onClickCloseIcon"]);
}
const Wv = /* @__PURE__ */ K(Ev, [["render", Fv]]), { componentName: Yv, create: jv } = Y("time-pannel"), Kv = jv({
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
      [Yv]: !0,
      "nut-time-pannel--curr": a.currentKey == e.pannelKey
    })), l = (s) => {
      t.emit("change", s);
    };
    return ce(G({}, he(a)), {
      classes: o,
      handlePannel: l
    });
  }
});
function Uv(e, t, n, a, o, l) {
  return u(), d("view", {
    class: B(e.classes),
    onClick: t[0] || (t[0] = (s) => e.handlePannel(e.pannelKey))
  }, _(e.name), 3);
}
const Xv = /* @__PURE__ */ K(Kv, [["render", Uv]]), { create: qv } = Y("time-detail"), Gv = qv({
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
    }), l = (r) => {
      let p = o.currentTime.find((f) => f.key == o.currentKey);
      if (p)
        return {
          "nut-time-detail__detail__list__item": !0,
          "nut-time-detail__detail__list__item--curr": p.list.filter((f) => f === r).length > 0
        };
    }, s = N(() => e.times.find((r) => r.key == o.currentKey).list), i = (r) => {
      t("select", r);
    };
    return ce(G({}, he(o)), {
      getClass: l,
      renderData: s,
      handleTime: i
    });
  }
}), Zv = { class: "nut-time-detail" }, Jv = { class: "nut-time-detail__detail nut-time-detail__detail--moring" }, Qv = { class: "nut-time-detail__detail__list" }, xv = ["onClick"];
function e2(e, t, n, a, o, l) {
  return u(), d("view", Zv, [
    h("view", Jv, [
      h("view", Qv, [
        (u(!0), d(ee, null, re(e.renderData, (s) => (u(), d("view", {
          key: s,
          class: B(e.getClass(s)),
          onClick: (i) => e.handleTime(s)
        }, _(s), 11, xv))), 128))
      ])
    ])
  ]);
}
const t2 = /* @__PURE__ */ K(Gv, [["render", e2]]), { create: n2 } = Y("sku-header"), o2 = "NutSkuHeader", l2 = n2({
  props: {
    goods: {
      type: Object,
      default: {}
    }
  },
  components: {
    NutPrice: nn
  },
  setup(e, { slots: t }) {
    const n = ke(o2);
    return {
      getSlots: (o) => t[o],
      translate: n
    };
  }
}), s2 = { class: "nut-sku-header" }, a2 = ["src"], i2 = { class: "nut-sku-header-right" }, r2 = {
  key: 3,
  class: "nut-sku-header-right-extra"
};
function u2(e, t, n, a, o, l) {
  const s = j("nut-price");
  return u(), d("view", s2, [
    h("img", {
      class: "nut-sku-header-img",
      src: e.goods.imagePath
    }, null, 8, a2),
    h("view", i2, [
      e.getSlots("sku-header-price") ? D(e.$slots, "sku-header-price", { key: 0 }) : (u(), x(s, {
        key: 1,
        price: e.goods.price,
        "need-symbol": !0,
        thousands: !1
      }, null, 8, ["price"])),
      e.getSlots("sku-header-extra") ? D(e.$slots, "sku-header-extra", { key: 2 }) : S("", !0),
      e.goods.skuId && !e.getSlots("sku-header-extra") ? (u(), d("view", r2, _(e.translate("skuId")) + " : " + _(e.goods.skuId), 1)) : S("", !0)
    ])
  ]);
}
const c2 = /* @__PURE__ */ K(l2, [["render", u2]]), { create: d2 } = Y("sku-select"), f2 = d2({
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
      changeSaleChild: (o, l, s, i) => {
        o.checkFlag || o.disable || t("selectSku", {
          sku: o,
          skuIndex: l,
          parentSku: s,
          parentIndex: i
        });
      }
    };
  }
}), p2 = { class: "nut-sku-select" }, m2 = { class: "nut-sku-select-item-title" }, h2 = { class: "nut-sku-select-item-skus" }, g2 = ["onClick"];
function y2(e, t, n, a, o, l) {
  return u(), d("view", p2, [
    (u(!0), d(ee, null, re(e.skuInfo, (s, i) => (u(), d("view", {
      key: s.id,
      class: "nut-sku-select-item"
    }, [
      h("view", m2, _(s.name), 1),
      h("view", h2, [
        (u(!0), d(ee, null, re(s.list, (r, p) => (u(), d("view", {
          key: r.name,
          class: B(["nut-sku-select-item-skus-sku", [{ active: !r.disable && r.active }, { disable: r.disable }]]),
          onClick: (f) => e.changeSaleChild(r, p, s, i)
        }, _(r.name), 11, g2))), 128))
      ])
    ]))), 128))
  ]);
}
const v2 = /* @__PURE__ */ K(f2, [["render", y2]]), { create: $2 } = Y("sku-stepper"), b2 = $2({
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
    NutInputNumber: Zt
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
        return r && St(r) == "function" ? r() : "";
      },
      changeStepper: (r) => {
        n.value = r, t("changeStepper", r);
      }
    };
  }
}), k2 = { class: "nut-sku-stepper" }, w2 = { class: "nut-sku-stepper-title" }, C2 = ["innerHTML"], S2 = { class: "nut-sku-stepper-count" };
function T2(e, t, n, a, o, l) {
  const s = j("nut-input-number");
  return u(), d("view", k2, [
    h("view", w2, _(e.stepperTitle), 1),
    h("view", {
      class: "nut-sku-stepper-limit",
      innerHTML: e.getExtraText()
    }, null, 8, C2),
    h("view", S2, [
      le(s, {
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
const N2 = /* @__PURE__ */ K(b2, [["render", T2]]), { create: D2 } = Y("sku-operate"), I2 = D2({
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
}), _2 = {
  key: 0,
  class: "nut-sku-operate"
}, B2 = {
  key: 0,
  class: "nut-sku-operate-desc"
}, M2 = {
  key: 1,
  class: "nut-sku-operate-btn"
}, L2 = ["onClick"];
function E2(e, t, n, a, o, l) {
  return e.btnOptions.length > 0 ? (u(), d("view", _2, [
    e.btnExtraText ? (u(), d("view", B2, _(e.btnExtraText), 1)) : S("", !0),
    D(e.$slots, "operate-btn"),
    e.getSlots("operate-btn") ? S("", !0) : (u(), d("view", M2, [
      (u(!0), d(ee, null, re(e.btnOptions, (s, i) => (u(), d("view", {
        key: i,
        class: B([`nut-sku-operate-btn-${s}`, "nut-sku-operate-btn-item"]),
        onClick: (r) => e.clickBtnOperate(s)
      }, _(e.getBtnDesc(s)), 11, L2))), 128))
    ]))
  ])) : S("", !0);
}
const P2 = /* @__PURE__ */ K(I2, [["render", E2]]), { create: A2 } = Y("sku"), z2 = "NutSku", V2 = A2({
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
    SkuHeader: c2,
    SkuSelect: v2,
    SkuStepper: N2,
    SkuOperate: P2,
    NutPopup: Le
  },
  setup(e, { emit: t, slots: n }) {
    const a = ke(z2), o = P(e.visible), l = P(e.stepperMin);
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
    const s = (k) => n[k], i = (k) => {
      t("selectSku", k);
    }, r = (k) => {
      l.value = k, t("changeStepper", k);
    }, p = (k) => {
      t("add", k);
    }, f = (k) => {
      t("reduce", k);
    }, v = (k) => {
      t("overLimit", k);
    }, y = (k) => {
      t("clickBtnOperate", {
        type: k,
        value: l.value
      });
    }, g = (k) => {
      k == "icon" && t("clickCloseIcon"), k == "overlay" && t("clickOverlay"), k == "close" && t("close"), o.value = !1;
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
      getSlots: s,
      translate: a
    };
  }
}), O2 = { class: "nut-sku" }, H2 = { class: "nut-sku-content" };
function R2(e, t, n, a, o, l) {
  const s = j("sku-header"), i = j("SkuSelect"), r = j("sku-stepper"), p = j("sku-operate"), f = j("nut-popup");
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
      h("view", O2, [
        D(e.$slots, "sku-header"),
        e.getSlots("sku-header") ? S("", !0) : (u(), x(s, {
          key: 0,
          goods: e.goods
        }, ft({ _: 2 }, [
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
        h("view", H2, [
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
        }, ft({ _: 2 }, [
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
const F2 = /* @__PURE__ */ K(V2, [["render", R2]]), { create: W2 } = Y("card"), Y2 = W2({
  components: {
    NutPrice: nn,
    NutTag: So
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
}), j2 = { class: "nut-card" }, K2 = { class: "nut-card__left" }, U2 = ["src"], X2 = { class: "nut-card__right" }, q2 = { class: "nut-card__right__title" }, G2 = {
  key: 0,
  class: "nut-card__right__price"
}, Z2 = { class: "nut-card__right__other" }, J2 = { class: "nut-card__right__shop" }, Q2 = { class: "nut-card__right__shop__name" };
function x2(e, t, n, a, o, l) {
  const s = j("nut-price"), i = j("nut-tag");
  return u(), d("div", j2, [
    h("div", K2, [
      h("img", {
        src: e.imgUrl,
        alt: ""
      }, null, 8, U2)
    ]),
    h("div", X2, [
      h("div", q2, _(e.title), 1),
      D(e.$slots, "prolist"),
      e.isNeedPrice ? (u(), d("div", G2, [
        D(e.$slots, "price", {}, () => [
          le(s, { price: e.price }, null, 8, ["price"])
        ]),
        D(e.$slots, "origin", {}, () => [
          le(s, {
            class: "nut-card__right__price__origin",
            price: e.vipPrice
          }, null, 8, ["price"])
        ])
      ])) : S("", !0),
      h("div", Z2, [
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
      h("div", J2, [
        h("div", Q2, _(e.shopName), 1),
        D(e.$slots, "footer")
      ])
    ])
  ]);
}
const e3 = /* @__PURE__ */ K(Y2, [["render", x2]]), { create: t3 } = Y("ecard"), n3 = "NutEcard", o3 = t3({
  components: {
    NutInputNumber: Zt
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
    const n = ke(n3), a = P(null), o = P(null), l = P(""), s = P(e.cardAmountMin), i = P(e.modelValue), r = (y, g) => {
      a.value = g, s.value = e.cardAmountMin, o.value = y.price, t("change", y), t("update:modelValue", y.price);
    }, p = (y) => {
      let b = y.target.value.replace(/[^\d]/g, "");
      l.value = b, o.value = b, Number(b) > e.cardAmountMax && (l.value = e.cardAmountMax, o.value = e.cardAmountMax), Number(b) < e.cardAmountMin && (l.value = e.cardAmountMin, o.value = e.cardAmountMin), t("inputChange", Number(l.value)), t("update:modelValue", Number(l.value));
    }, f = () => {
      a.value = "input", s.value = e.cardAmountMin, o.value = l.value, t("update:modelValue", l.value), t("inputClick");
    }, v = (y) => {
      s.value = y, t("changeStep", s.value, o.value);
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
      stepValue: s,
      currentIndex: a,
      inputValue: l,
      money: i,
      translate: n
    };
  }
}), l3 = { class: "nut-ecard" }, s3 = { class: "nut-ecard__title" }, a3 = { class: "nut-ecard__list" }, i3 = ["onClick"], r3 = { class: "nut-ecard__list__input--con" }, u3 = ["placeholder"], c3 = { class: "nut-ecard__list__step" };
function d3(e, t, n, a, o, l) {
  const s = j("nut-input-number");
  return u(), d("view", l3, [
    h("view", s3, _(e.chooseText || e.translate("chooseText")), 1),
    h("view", a3, [
      (u(!0), d(ee, null, re(e.dataList, (i, r) => (u(), d("view", {
        key: r,
        class: B(["nut-ecard__list__item", e.currentIndex == r ? "active" : ""]),
        onClick: (p) => e.handleClick(i, r)
      }, _(i.price), 11, i3))), 128)),
      h("view", {
        class: B(["nut-ecard__list__input", e.currentIndex == "input" ? "active" : ""]),
        onClick: t[2] || (t[2] = (...i) => e.inputClick && e.inputClick(...i))
      }, [
        h("view", null, _(e.otherValueText || e.translate("otherValueText")), 1),
        h("view", r3, [
          Se(h("input", {
            "onUpdate:modelValue": t[0] || (t[0] = (i) => e.inputValue = i),
            class: "nut-ecard__list__input--input",
            type: "text",
            placeholder: e.placeholder || e.translate("placeholder"),
            onInput: t[1] || (t[1] = (...i) => e.change && e.change(...i))
          }, null, 40, u3), [
            [Dn, e.inputValue]
          ]),
          ge(" " + _(e.suffix), 1)
        ])
      ], 2),
      h("view", c3, [
        h("view", null, _(e.suffix) + _(e.money), 1),
        le(s, {
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
const f3 = /* @__PURE__ */ K(o3, [["render", d3]]), { create: p3 } = Y("address-list-item"), m3 = "NutAddressList", h3 = p3({
  components: { Del: An, Edit: ns },
  props: {
    item: {
      type: Object,
      default: {}
    }
  },
  emits: ["delIcon", "editIcon", "clickItem"],
  setup(e, { emit: t }) {
    const n = ke(m3);
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
}), g3 = { class: "nut-address-list-item__info" }, y3 = { class: "nut-address-list-item__info-contact" }, v3 = { class: "nut-address-list-item__info-contact-name" }, $3 = { class: "nut-address-list-item__info-contact-tel" }, b3 = {
  key: 0,
  class: "nut-address-list-item__info-contact-default"
}, k3 = { class: "nut-address-list-item__info-handle" }, w3 = { class: "nut-address-list-item__addr" };
function C3(e, t, n, a, o, l) {
  const s = j("Del"), i = j("Edit");
  return u(), d("div", {
    class: "nut-address-list-item",
    onClick: t[0] || (t[0] = (...r) => e.contentsClick && e.contentsClick(...r))
  }, [
    h("div", g3, [
      h("div", y3, [
        D(e.$slots, "content-top", {}, () => [
          h("div", v3, _(e.item.addressName), 1),
          h("div", $3, _(e.item.phone), 1),
          e.item.defaultAddress ? (u(), d("div", b3, _(e.translate("default")), 1)) : S("", !0)
        ])
      ]),
      h("div", k3, [
        D(e.$slots, "content-icon", {}, () => [
          le(s, {
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
    h("div", w3, [
      D(e.$slots, "content-addr", {}, () => [
        ge(_(e.item.fullAddress), 1)
      ])
    ])
  ]);
}
const Sn = /* @__PURE__ */ K(h3, [["render", C3]]), { create: S3 } = Y("address-list-general"), T3 = S3({
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
    ItemContents: Sn,
    NutButton: Xe,
    NutSwipe: go
  },
  setup(e, { emit: t }) {
    const n = () => we(Sn, {
      item: e.item,
      onDelIcon(T) {
        s(T);
      },
      onEditIcon(T) {
        i(T);
      },
      onClickItem(T) {
        r(T);
      }
    });
    let a = null;
    const o = P(!1), l = P(!1), s = (T) => {
      t("delIcon", T, e.item), T.stopPropagation();
    }, i = (T) => {
      t("editIcon", T, e.item), T.stopPropagation();
    }, r = (T) => {
      o.value || (t("clickItem", T, e.item), T.stopPropagation());
    }, p = (T) => {
      t("longDel", T, e.item), T.stopPropagation();
    }, f = (T) => {
      a = 0, l.value = !0, t("longDown", T, e.item);
    };
    return {
      renderCompontent: n,
      showMaskRef: l,
      clickItem: r,
      editClick: i,
      delClick: s,
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
        l.value = !1;
      },
      setDefault: (T) => {
        t("longSet", T, e.item), T.stopPropagation();
      },
      maskClick: (T) => {
        a != 0 && (l.value = !1), T.stopPropagation(), T.preventDefault();
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
}), N3 = {
  key: 0,
  class: "nut-address-list-general"
}, D3 = { class: "nut-address-list-swipe" };
function I3(e, t, n, a, o, l) {
  const s = j("nut-button"), i = j("nut-swipe");
  return e.swipeEdition ? (u(), x(i, { key: 1 }, {
    right: te(() => [
      D(e.$slots, "swipe-right-btn", {}, () => [
        le(s, {
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
      h("div", D3, [
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
  })) : (u(), d("div", N3, [
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
        h("div", {
          class: "nut-address-list-general__mask-copy",
          onClick: t[0] || (t[0] = (...r) => e.copyCLick && e.copyCLick(...r))
        }, " 复制地址 "),
        h("div", {
          class: "nut-address-list-general__mask-set",
          onClick: t[1] || (t[1] = (...r) => e.setDefault && e.setDefault(...r))
        }, " 设置默认 "),
        h("div", {
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
const _3 = /* @__PURE__ */ K(T3, [["render", I3]]), { create: B3 } = Y("address-list"), M3 = "NutAddressList", L3 = B3({
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
    GeneralShell: _3,
    NutButton: Xe
  },
  emits: ["delIcon", "editIcon", "clickItem", "longCopy", "longSet", "longDel", "swipeDel", "add"],
  setup(e, { emit: t }) {
    const n = ke(M3), a = P([]), o = ue({
      id: 2,
      addressName: "姓名",
      phone: "123****4567",
      defaultAddress: !1,
      fullAddress: "北京市通州区测试测试测试测试测试测试测试测试测试"
    }), l = () => {
      Object.keys(e.dataOptions).length > 0 && (a.value = e.data.map((b) => jo(o, b, e.dataOptions)));
    };
    Q(
      () => e.data,
      () => l(),
      { deep: !0 }
    );
    const s = (b, k) => {
      t("delIcon", b, k), b.stopPropagation();
    }, i = (b, k) => {
      t("editIcon", b, k), b.stopPropagation();
    }, r = (b, k) => {
      t("clickItem", b, k), b.stopPropagation();
    }, p = (b, k) => {
      t("longCopy", b, k), b.stopPropagation();
    }, f = (b, k) => {
      t("longSet", b, k), b.stopPropagation();
    }, v = (b, k) => {
      t("longDel", b, k), b.stopPropagation();
    }, y = (b, k) => {
      t("swipeDel", b, k), b.stopPropagation();
    }, g = (b) => {
      t("add", b), b.stopPropagation();
    };
    return ve(() => {
      l();
    }), {
      clickDelIcon: s,
      clickEditIcon: i,
      clickContentItem: r,
      clickLongCopy: p,
      clickLongSet: f,
      clickLongDel: v,
      clickSwipeDel: y,
      addAddress: g,
      dataArray: a,
      translate: n
    };
  }
}), E3 = { class: "nut-address-list" };
function P3(e, t, n, a, o, l) {
  const s = j("general-shell"), i = j("nut-button");
  return u(), d("div", E3, [
    (u(!0), d(ee, null, re(e.dataArray, (r, p) => (u(), x(s, {
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
    }, ft({
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
const A3 = /* @__PURE__ */ K(L3, [["render", P3]]), { create: z3 } = Y("category"), V3 = z3({
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
      getChildList: (l) => {
        n.value = l, t("change", l);
      },
      checkIndex: n,
      categoryLeft: a
    };
  }
}), O3 = { class: "nut-category" }, H3 = { class: "nut-category__cateList" }, R3 = { key: 0 }, F3 = ["onClick"];
function W3(e, t, n, a, o, l) {
  return u(), d("div", O3, [
    h("div", H3, [
      e.type == "classify" || e.type == "text" ? (u(), d("div", R3, [
        (u(!0), d(ee, null, re(e.category, (s, i) => (u(), d("div", {
          key: i,
          class: "nut-category__cateListLeft"
        }, [
          h("div", {
            class: B([e.checkIndex == i ? "nut-category__cateListItemChecked" : "nut-category__cateListItem"]),
            onClick: (r) => e.getChildList(i)
          }, _(s.catName), 11, F3)
        ]))), 128))
      ])) : S("", !0),
      D(e.$slots, "default")
    ])
  ]);
}
const Y3 = /* @__PURE__ */ K(V3, [["render", W3]]), { create: j3 } = Y("category-pane"), K3 = j3({
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
}), U3 = { class: "nut-category-pane" }, X3 = {
  key: 0,
  class: "nut-category-pane__cateListRight"
}, q3 = { class: "nut-category-pane__childTitle" }, G3 = {
  key: 0,
  class: "nut-category-pane__childItemList"
}, Z3 = ["onClick"], J3 = ["src"], Q3 = { class: "nut-category-pane__skuImg" }, x3 = {
  key: 1,
  class: "nut-category-pane__cateListRight"
}, e5 = { class: "nut-category-pane__childTitle" }, t5 = {
  key: 0,
  class: "nut-category-pane__childItemList"
}, n5 = ["onClick"], o5 = { class: "nut-category-pane__skuName" }, l5 = {
  key: 2,
  class: "nut-category-pane__selfItemList"
}, s5 = ["onClick"];
function a5(e, t, n, a, o, l) {
  return u(), d("div", U3, [
    e.type == "classify" ? (u(), d("div", X3, [
      (u(!0), d(ee, null, re(e.categoryChild, (s, i) => (u(), d("div", { key: i }, [
        h("div", q3, _(s == null ? void 0 : s.catName), 1),
        (s == null ? void 0 : s.catType) == 1 ? (u(), d("div", G3, [
          (u(!0), d(ee, null, re(s.childCateList, (r, p) => (u(), d("div", {
            key: p,
            class: "nut-category-pane__childItem",
            onClick: (f) => e.onChange(r)
          }, [
            h("img", {
              class: "nut-category-pane__childImg",
              src: r.backImg
            }, null, 8, J3),
            h("div", Q3, _(r == null ? void 0 : r.catName), 1)
          ], 8, Z3))), 128))
        ])) : S("", !0)
      ]))), 128))
    ])) : S("", !0),
    e.type == "text" ? (u(), d("div", x3, [
      (u(!0), d(ee, null, re(e.categoryChild, (s, i) => (u(), d("div", { key: i }, [
        h("div", e5, _(s == null ? void 0 : s.catName), 1),
        (s == null ? void 0 : s.catType) == 1 ? (u(), d("div", t5, [
          (u(!0), d(ee, null, re(s.childCateList, (r, p) => (u(), d("div", {
            key: p,
            class: "nut-category-pane__childItem",
            onClick: (f) => e.onChange(r)
          }, [
            h("div", o5, _(r == null ? void 0 : r.catName), 1)
          ], 8, n5))), 128))
        ])) : S("", !0)
      ]))), 128))
    ])) : S("", !0),
    e.type == "custom" ? (u(), d("div", l5, [
      (u(!0), d(ee, null, re(e.customCategory, (s, i) => (u(), d("div", {
        key: i,
        class: "nut-category-pane__skuName",
        onClick: (r) => e.onChange(s)
      }, _(s == null ? void 0 : s.catName), 9, s5))), 128))
    ])) : S("", !0)
  ]);
}
const i5 = /* @__PURE__ */ K(K3, [["render", a5]]), { create: r5 } = Y("comment-header"), u5 = r5({
  components: {
    NutRate: uo
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
}), c5 = { class: "nut-comment-header__user" }, d5 = { class: "nut-comment-header__user-avter" }, f5 = ["src"], p5 = { class: "nut-comment-header__user-score" }, m5 = {
  key: 0,
  class: "nut-comment-header__time"
};
function h5(e, t, n, a, o, l) {
  const s = j("nut-rate");
  return u(), d("view", null, [
    e.info ? (u(), d("view", {
      key: 0,
      class: "nut-comment-header",
      onClick: t[1] || (t[1] = (...i) => e.handleClick && e.handleClick(...i))
    }, [
      h("view", c5, [
        h("view", d5, [
          e.info.avatar ? (u(), d("img", {
            key: 0,
            src: e.info.avatar
          }, null, 8, f5)) : S("", !0)
        ]),
        e.type == "default" ? (u(), d("view", {
          key: 0,
          class: B([`nut-comment-header__user-${e.type}`])
        }, [
          h("view", {
            class: B([`nut-comment-header__user-${e.type}-name`])
          }, [
            h("span", null, _(e.info.nickName), 1),
            D(e.$slots, "labels")
          ], 2),
          h("view", p5, [
            le(s, {
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
          h("span", {
            class: B([`nut-comment-header__user-${e.type}-name`])
          }, _(e.info.nickName), 3),
          D(e.$slots, "labels")
        ], 2))
      ]),
      e.info.time ? (u(), d("view", m5, _(e.info.time), 1)) : S("", !0)
    ])) : S("", !0),
    e.type == "complex" ? (u(), d("view", {
      key: 1,
      class: B([`nut-comment-header__${e.type}-score`])
    }, [
      le(s, {
        modelValue: e.info.score,
        "onUpdate:modelValue": t[2] || (t[2] = (i) => e.info.score = i),
        size: "12",
        spacing: "3",
        readonly: ""
      }, null, 8, ["modelValue"]),
      h("i", {
        class: B([`nut-comment-header__${e.type}-score-i`])
      }, null, 2),
      h("view", {
        class: B([`nut-comment-header__${e.type}-score-size`])
      }, _(e.info.size), 3)
    ], 2)) : S("", !0)
  ]);
}
const g5 = /* @__PURE__ */ K(u5, [["render", h5]]), { create: y5 } = Y("comment-images"), v5 = y5({
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
  components: { Right: qt },
  emits: ["click", "clickImages"],
  setup(e, { emit: t }) {
    const n = P(!1), a = P(1), o = P([]);
    return Q(
      () => [e.videos, e.images],
      (s) => {
        s[0].length > 0 && s[0].forEach((i) => {
          i.type = "video";
        }), o.value = s[0].concat(s[1]);
      },
      { deep: !0 }
    ), ve(() => {
      e.videos.length > 0 && e.videos.forEach((s) => {
        s.type = "video";
      }), o.value = e.videos.concat(e.images);
    }), { isShowImage: n, initIndex: a, showImages: (s, i) => {
      const { videos: r, images: p } = e, f = s == "img" ? i - r.length : i;
      t("clickImages", {
        type: s,
        index: f,
        value: s == "img" ? p[f] : r[f]
      });
    }, totalImages: o };
  }
}), $5 = ["onClick"], b5 = ["src"], k5 = /* @__PURE__ */ h("view", { class: "nut-comment-images__play" }, null, -1), w5 = ["onClick"], C5 = ["src"], S5 = {
  key: 0,
  class: "nut-comment-images__mask"
};
function T5(e, t, n, a, o, l) {
  const s = j("Right");
  return u(), d("view", {
    class: B(`nut-comment-images nut-comment-images--${e.type}`)
  }, [
    (u(!0), d(ee, null, re(e.videos, (i, r) => (u(), d("view", {
      key: i.id,
      class: "nut-comment-images__item nut-comment-images__item--video",
      onClick: (p) => e.showImages("video", r)
    }, [
      h("img", {
        src: i.mainUrl
      }, null, 8, b5),
      k5
    ], 8, $5))), 128)),
    (u(!0), d(ee, null, re(e.images, (i, r) => (u(), d(ee, {
      key: i.id
    }, [
      e.type == "multi" && e.videos.length + r < 9 || e.type != "multi" ? (u(), d("view", {
        key: 0,
        class: "nut-comment-images__item nut-comment-images__item--imgbox",
        onClick: (p) => e.showImages("img", r + e.videos.length)
      }, [
        h("img", {
          src: i.smallImgUrl ? i.smallImgUrl : i.imgUrl
        }, null, 8, C5),
        e.type == "multi" && e.totalImages.length > 9 && e.videos.length + r > 7 ? (u(), d("view", S5, [
          h("span", null, "共 " + _(e.totalImages.length) + " 张", 1),
          le(s, { style: { width: "12px" } })
        ])) : S("", !0)
      ], 8, w5)) : S("", !0)
    ], 64))), 128))
  ], 2);
}
const N5 = /* @__PURE__ */ K(v5, [["render", T5]]), { create: D5 } = Y("comment-bottom"), I5 = "NutComment", _5 = D5({
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
    const n = ke(I5), a = P(!1), o = P([]);
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
}), B5 = { class: "nut-comment-bottom" }, M5 = { key: 0 }, L5 = { class: "nut-comment-bottom__cpx" }, E5 = ["onClick"];
function P5(e, t, n, a, o, l) {
  const s = j("Fabulous"), i = j("Comment"), r = j("MoreX");
  return u(), d("view", B5, [
    h("view", {
      class: "nut-comment-bottom__lable",
      onClick: t[0] || (t[0] = (...p) => e.handleClick && e.handleClick(...p))
    }, [
      e.type != "complex" ? (u(), d("span", M5, _(e.info.size), 1)) : S("", !0)
    ]),
    h("view", L5, [
      (u(!0), d(ee, null, re(e.mergeOp, (p, f) => (u(), d("view", {
        key: f,
        class: B(["nut-comment-bottom__cpx-item", `nut-comment-bottom__cpx-item--${p}`]),
        onClick: (v) => e.operate(p)
      }, [
        p != "more" ? (u(), d(ee, { key: 0 }, [
          h("span", null, _(e.info[p]), 1),
          p == "like" ? (u(), x(s, { key: 0 })) : (u(), x(i, { key: 1 }))
        ], 64)) : S("", !0),
        p == "more" ? (u(), d(ee, { key: 1 }, [
          le(r),
          e.showPopver ? (u(), d("view", {
            key: 0,
            class: "nut-comment-bottom__cpx-item-popover",
            onClick: t[1] || (t[1] = (v) => e.operate("popover"))
          }, _(e.translate("complaintsText")), 1)) : S("", !0)
        ], 64)) : S("", !0)
      ], 10, E5))), 128))
    ])
  ]);
}
const A5 = /* @__PURE__ */ K(_5, [["render", P5]]), { create: z5 } = Y("comment"), V5 = "NutComment", O5 = z5({
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
    CommentHeader: g5,
    CommentImages: N5,
    CommentBottom: A5,
    Right: qt
  },
  emits: ["click", "clickImages", "clickOperate"],
  setup(e, { emit: t }) {
    const n = ke(V5);
    return { conEllipsis: N(() => e.ellipsis ? e.ellipsis : e.headerType == "complex" ? 6 : 2), clickOperate: (i) => {
      t("clickOperate", i);
    }, handleClick: () => {
      t("click", e.info);
    }, clickImages: (i) => {
      t("clickImages", i);
    }, translate: n };
  }
}), H5 = {
  key: 0,
  class: "nut-comment"
}, R5 = ["innerHTML"], F5 = { class: "nut-comment__follow-title" }, W5 = { class: "nut-comment__follow-com" };
function Y5(e, t, n, a, o, l) {
  const s = j("comment-header"), i = j("comment-images"), r = j("Right"), p = j("comment-bottom");
  return e.info && Object.keys(e.info) ? (u(), d("view", H5, [
    le(s, {
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
    h("view", {
      class: "nut-comment__main",
      style: L(`-webkit-line-clamp:${e.conEllipsis}`),
      onClick: t[0] || (t[0] = (...f) => e.handleClick && e.handleClick(...f)),
      innerHTML: e.info.content
    }, null, 12, R5),
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
      h("view", F5, _(e.translate("additionalReview", e.follow.days)), 1),
      h("view", W5, _(e.follow.content), 1),
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
const j5 = /* @__PURE__ */ K(O5, [["render", Y5]]), { componentName: K5, create: U5 } = Y("invoice"), X5 = U5({
  components: {
    NutForm: po,
    NutFormItem: mo,
    NutRadio: io,
    NutRadioGroup: ro,
    NutButton: Xe
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
    }), l = N(() => ({
      [K5]: !0
    }));
    ve(() => {
      s();
    });
    const s = () => {
      a.value = e.data;
    }, i = () => {
      n.value.validate().then(({ valid: r, errors: p }) => {
        t("submit", r, p), t("onSubmit", r, p);
      });
    };
    return Q(
      () => e.data,
      () => s(),
      { deep: !0 }
    ), ce(G({}, he(o)), {
      classes: l,
      formRef: n,
      list: a,
      submitFun: i
    });
  }
}), q5 = ["onUpdate:modelValue", "placeholder"], G5 = {
  key: 0,
  class: "nut-invoice__submit"
};
function Z5(e, t, n, a, o, l) {
  const s = j("nut-radio"), i = j("nut-radio-group"), r = j("nut-form-item"), p = j("nut-form"), f = j("nut-button");
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
                (u(!0), d(ee, null, re(v.radioLabel, (g, b) => (u(), x(s, {
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
            }, null, 8, q5)), [
              [Dn, e.formValue[v.formItemProp]]
            ])
          ]),
          _: 2
        }, 1032, ["label", "required", "rules", "prop"]))), 128))
      ]),
      _: 1
    }, 8, ["model-value"]),
    e.submit ? (u(), d("div", G5, [
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
const J5 = /* @__PURE__ */ K(X5, [["render", Z5]]), { create: Q5 } = Y("avatar-cropper"), x5 = Q5({
  components: {
    NutButton: Xe,
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
    }, l = P(G({}, o)), s = P(), i = P(), r = P(), p = window.devicePixelRatio || 1, f = qe(), v = N(() => a.angle === 90 || a.angle === 270), y = N(() => {
      const { swidth: U } = l.value, ae = U / p + "px";
      return {
        width: ae,
        height: ae
      };
    }), g = N(() => {
      const { displayWidth: U, scale: ae } = a, { swidth: de, height: fe } = l.value;
      return v.value ? Math.max(0, (fe * ae - de) / 2) : Math.max(0, (U * ae - de) / 2);
    }), b = N(() => {
      const { displayWidth: U, scale: ae } = a, { swidth: de, height: fe } = l.value;
      return v.value ? Math.max(0, (U * ae - de) / 2) : Math.max(0, (fe * ae - de) / 2);
    }), k = (U) => new Promise((ae) => {
      const de = new FileReader();
      de.onloadend = (fe) => ae(fe.target.result), de.readAsDataURL(U);
    }), c = (U) => new Promise((ae) => {
      const de = new Image();
      de.onload = () => ae(de), de.src = U;
    }), $ = () => {
      const { img: U, width: ae, height: de, x: fe, y: be, swidth: Ee } = l.value, { moveX: O, moveY: J, scale: se } = a, ie = i.value;
      if (!ie)
        return;
      const me = ie.getContext("2d");
      ie.width = a.displayWidth, ie.height = a.displayHeight, me.clearRect(0, 0, ie.width, ie.height), me.fillStyle = "#666", me.fillRect(0, 0, ie.width, ie.height), me.fillStyle = "#000", me.fillRect(e.space * p, (ie.height - Ee) / 2, Ee, Ee), me.translate(ie.width / 2 + O, ie.height / 2 + J), me.rotate(Math.PI / 180 * a.angle), me.scale(se, se), me.drawImage(U, fe, be, ae, de);
    }, m = (U) => {
      const ae = Oe(s.value), { width: de, height: fe } = ae, be = a.displayWidth = de * p, Ee = a.displayHeight = fe * p;
      let O = G({}, o);
      const { width: J, height: se } = U;
      O.img = U;
      const ie = se > J, me = ie ? J / se : se / J;
      O.width = be, O.height = ie ? be / me : be * me, O.x = -O.width / 2, O.y = -O.height / 2, O.swidth = be - e.space * 2 * p, O.sheight = ie ? O.swidth / me : O.swidth * me, O.sx = e.space * p, O.sy = (Ee - O.swidth) / 2, l.value = O, a.defScale = O.swidth / (ie ? O.width : O.height), I();
    }, w = (U) => Ke(this, null, function* () {
      a.visible = !0;
      const ae = U.target;
      let { files: de } = ae;
      if (!(de != null && de.length))
        return;
      const fe = yield k(de[0]), be = yield c(fe);
      m(be), $();
    }), I = () => {
      T(a.defScale), a.moveX = 0, a.moveY = 0, a.angle = 0;
    }, T = (U) => {
      U = Pe(U, 0.3, +e.maxZoom + 1), U !== a.scale && (a.scale = U);
    }, W = (U) => Math.sqrt(lt(U[0].clientX - U[1].clientX, 2) + lt(U[0].clientY - U[1].clientY, 2));
    let M, A, C, E, V;
    const X = (U) => {
      const { touches: ae } = U, { offsetX: de } = f;
      f.start(U), V = ae.length, M = a.moveX, A = a.moveY, a.moving = V === 1, a.zooming = V === 2 && !de.value, a.zooming && (C = a.scale, E = W(U.touches));
    }, Z = (U) => {
      const { touches: ae } = U;
      if (f.move(U), (a.moving || a.zooming) && nt(U, !0), a.moving) {
        const { deltaX: de, deltaY: fe } = f, be = de.value * a.scale + M, Ee = fe.value * a.scale + A;
        a.moveX = Pe(be, -g.value, g.value), a.moveY = Pe(Ee, -b.value, b.value);
      }
      if (a.zooming && ae.length === 2) {
        const de = W(ae), fe = C * de / E;
        T(fe);
      }
    }, F = (U) => {
      let ae = !1;
      (a.moving || a.zooming) && (ae = !(a.moving && M === a.moveX && A === a.moveY), U.touches.length || (a.zooming && (a.moveX = Pe(a.moveX, -g.value, g.value), a.moveY = Pe(a.moveY, -b.value, b.value), a.zooming = !1), a.moving = !1, M = 0, A = 0, C = a.defScale, a.scale < a.defScale && I(), a.scale > e.maxZoom && (a.scale = +e.maxZoom))), nt(U, ae), f.reset();
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
      const U = i.value, { sx: ae, sy: de, swidth: fe } = l.value, be = fe, Ee = fe, O = document.createElement("canvas"), J = O.getContext("2d");
      O.width = be, O.height = Ee, U && J.drawImage(U, ae, de, be, Ee, 0, 0, be, Ee);
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
        Math.abs(a.moveX) > g.value && (a.moveX = g.value), Math.abs(a.moveY) > b.value && (a.moveY = b.value), $();
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
    }), ce(G({}, he(a)), {
      cropperPopupRef: s,
      canvasRef: i,
      inputImageRef: r,
      highlightStyle: y,
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
function l4(e, t, n, a, o, l) {
  const s = j("nut-button"), i = j("Refresh2"), r = j("Retweet");
  return u(), d(ee, null, [
    h("div", {
      class: "nut-avatar-cropper",
      "data-edit-text": e.editText
    }, [
      D(e.$slots, "default"),
      h("input", {
        ref: "inputImageRef",
        type: "file",
        accept: "image/*",
        class: "nut-avatar-cropper__input",
        onChange: t[0] || (t[0] = (...p) => e.inputImageChange && e.inputImageChange(...p))
      }, null, 544)
    ], 8, e4),
    Se(h("div", t4, [
      h("canvas", n4, null, 512),
      h("div", {
        class: "nut-cropper-popup__highlight",
        onTouchstart: t[1] || (t[1] = (...p) => e.onTouchStart && e.onTouchStart(...p)),
        onTouchmove: t[2] || (t[2] = (...p) => e.onTouchMove && e.onTouchMove(...p)),
        onTouchend: t[3] || (t[3] = (...p) => e.onTouchEnd && e.onTouchEnd(...p)),
        onTouchcancel: t[4] || (t[4] = (...p) => e.onTouchEnd && e.onTouchEnd(...p))
      }, [
        h("div", {
          class: "highlight",
          style: L(e.highlightStyle)
        }, null, 4)
      ], 32),
      h("div", {
        class: B(["nut-cropper-popup__toolbar", [e.toolbarPosition]])
      }, [
        e.$slots.toolbar ? D(e.$slots, "toolbar", { key: 0 }) : (u(), d("div", o4, [
          h("div", {
            class: "nut-cropper-popup__toolbar-item",
            onClick: t[5] || (t[5] = (p) => e.cancel())
          }, [
            le(s, { type: "danger" }, {
              default: te(() => [
                ge(_(e.cancelText), 1)
              ]),
              _: 1
            })
          ]),
          h("div", {
            class: "nut-cropper-popup__toolbar-item",
            onClick: t[6] || (t[6] = (...p) => e.reset && e.reset(...p))
          }, [
            le(i, { color: "#fff" })
          ]),
          h("div", {
            class: "nut-cropper-popup__toolbar-item",
            onClick: t[7] || (t[7] = (...p) => e.rotate && e.rotate(...p))
          }, [
            le(r, { color: "#fff" })
          ]),
          h("div", {
            class: "nut-cropper-popup__toolbar-item",
            onClick: t[8] || (t[8] = (...p) => e.confirm && e.confirm(...p))
          }, [
            le(s, { type: "success" }, {
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
const s4 = /* @__PURE__ */ K(x5, [["render", l4]]);
function a4(e) {
  [Xe, Hn, Rn, ht, Le, dr, $r, kr, Tr, _r, Kn, Hr, Xr, xr, tu, uu, bu, Iu, Pu, Ou, Ju, Qn, vc, xn, eo, Oc, Kc, Jc, ld, to, Td, Rd, cf, mf, yf, zf, Zt, tp, io, ro, uo, oo, so, wp, _p, t1, $1, po, mo, go, z1, q1, x1, om, Jt, Cm, _m, It, Hm, _t, oh, uh, Qt, gh, kh, co, Mh, Fh, Zh, xt, hg, _g, en, tn, nn, on, i0, h0, Jn, So, To, L0, V0, Z0, fy, yy, Sy, _y, Py, Uy, yv, wv, Bv, Wv, Xv, t2, F2, e3, f3, A3, Y3, i5, j5, J5, s4].forEach((n) => {
    n.install ? e.use(n) : n.name && e.component(n.name, n);
  });
}
const i4 = "4.2.3", p4 = { install: a4, version: i4 };
export {
  q1 as ActionSheet,
  yv as Address,
  A3 as AddressList,
  yy as Animate,
  oh as Audio,
  uh as AudioOperate,
  Qt as Avatar,
  s4 as AvatarCropper,
  gh as AvatarGroup,
  x1 as Backtop,
  Jn as Badge,
  wv as Barrage,
  Xe as Button,
  cf as Calendar,
  oo as CalendarItem,
  e3 as Card,
  Rd as Cascader,
  Y3 as Category,
  i5 as CategoryPane,
  Hn as Cell,
  Rn as CellGroup,
  mf as Checkbox,
  yf as CheckboxGroup,
  Mh as CircleProgress,
  Tr as Col,
  V0 as Collapse,
  Z0 as CollapseItem,
  j5 as Comment,
  dr as ConfigProvider,
  h0 as Countdown,
  i0 as Countup,
  zf as DatePicker,
  Jt as Dialog,
  Hr as Divider,
  om as Drag,
  f3 as Ecard,
  Qn as Elevator,
  Sy as Ellipsis,
  Zh as Empty,
  bu as FixedNav,
  po as Form,
  mo as FormItem,
  Xr as Grid,
  xr as GridItem,
  $r as Image,
  on as ImagePreview,
  Oc as Indicator,
  Cm as InfiniteLoading,
  tp as Input,
  Zt as InputNumber,
  J5 as Invoice,
  kr as Layout,
  kh as List,
  Ln as Locale,
  Iu as Menu,
  Pu as MenuItem,
  uu as Navbar,
  Fh as Noticebar,
  It as Notify,
  $1 as NumberKeyboard,
  ht as Overlay,
  vc as Pagination,
  so as Picker,
  To as Popover,
  Le as Popup,
  nn as Price,
  co as Progress,
  _m as PullRefresh,
  io as Radio,
  ro as RadioGroup,
  to as Range,
  uo as Rate,
  _r as Row,
  Td as Searchbar,
  wp as ShortPassword,
  Kc as SideNavbar,
  Jc as SideNavbarItem,
  Bv as Signature,
  L0 as Skeleton,
  F2 as Sku,
  tu as Space,
  _g as Step,
  hg as Steps,
  Kn as Sticky,
  ld as SubSideNavbar,
  go as Swipe,
  z1 as SwipeGroup,
  en as Swiper,
  tn as SwiperItem,
  Hm as Switch,
  eo as TabPane,
  Ou as Tabbar,
  Ju as TabbarItem,
  fy as Table,
  xn as Tabs,
  So as Tag,
  _p as Textarea,
  t2 as TimeDetail,
  Xv as TimePannel,
  Wv as TimeSelect,
  _t as Toast,
  Uy as Tour,
  Py as TrendArrow,
  t1 as Uploader,
  xt as Video,
  _y as Watermark,
  p4 as default,
  a4 as install,
  fm as showDialog,
  e0 as showImagePreview,
  f4 as showNotify,
  $o as showToast,
  i4 as version
};
