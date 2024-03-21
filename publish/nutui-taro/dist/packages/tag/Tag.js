var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a2, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a2, prop, b[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b) => __defProps(a2, __getOwnPropDescs(b));
import { defineComponent, useSlots, h as h$1, openBlock, createBlock, computed, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, renderSlot, createTextVNode, unref, withModifiers, createCommentVNode } from "vue";
import { w as withInstall } from "../with-install-Ch3FF0uS.js";
const h = /* @__PURE__ */ defineComponent({
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
    var c;
    const t = e, a2 = "nut-icon", o = useSlots(), s = () => t.name ? t.name.indexOf("/") !== -1 : false, r = (n) => {
      if (n)
        return isNaN(Number(n)) ? String(n) : n + "px";
    }, i2 = s();
    let l2 = h$1(
      i2 ? "img" : t.tag,
      {
        class: i2 ? `${a2}__img` : `${t.fontClassName} ${a2} ${t.classPrefix}-${t.name}`,
        style: {
          color: t.color,
          fontSize: r(t.size),
          width: r(t.width || t.size),
          height: r(t.height || t.size)
        },
        src: i2 ? t.name : ""
      },
      (c = o.default) == null ? void 0 : c.call(o)
    );
    const u = () => l2;
    return (n, y) => (openBlock(), createBlock(u));
  }
});
function S(e) {
  return e.name = "IconFont", e.install = (t) => {
    t.component("IconFont", e);
  }, e;
}
S(h);
const a$1 = (r) => defineComponent({
  props: {
    class: { type: String, default: "" },
    name: { type: String, default: r },
    color: { type: String, default: "" },
    width: { type: [String, Number], default: "" },
    height: { type: [String, Number], default: "" }
  },
  setup(e) {
    const n = (t) => {
      if (t)
        return isNaN(Number(t)) ? String(t) : t + "px";
    }, o = computed(() => {
      const t = "nut-icon";
      return {
        [e.class]: e.class,
        [t]: true,
        [t + "-" + e.name]: e.name
      };
    }), c = computed(() => {
      const t = {};
      return t.height = n(e.height), t.width = n(e.width), t.color = e.color, t;
    });
    return { classes: o, style: c };
  }
}), l = (r, e) => {
  const n = r.__vccOpts || r;
  for (const [o, c] of e)
    n[o] = c;
  return n;
};
a$1("add");
a$1("addfollow");
a$1("arrow-down");
a$1("arrow-down2");
a$1("arrow-right");
a$1("arrow-right2");
a$1("arrow-up");
a$1("arrow-up2");
a$1("ask");
a$1("ask2");
a$1("cart");
a$1("cart2");
a$1("category");
a$1("check-checked");
a$1("check-disabled");
a$1("check-normal");
a$1("Check");
a$1("checked");
a$1("checklist");
a$1("circle-close");
a$1("clock");
a$1("close-little");
const a = a$1("close"), i = /* @__PURE__ */ createElementVNode("path", {
  d: "M981.577 1024c-11.703 0-23.406-2.926-32.183-11.703L13.166 76.07c-14.629-17.555-14.629-46.812 0-64.366 17.554-14.629 46.811-14.629 64.365 0L1013.76 947.93c17.554 17.555 17.554 43.886 0 61.44-8.777 11.703-20.48 14.629-32.183 14.629zm-936.228 0c-11.703 0-23.406-2.926-32.183-11.703-17.555-17.554-17.555-43.886 0-61.44L949.394 14.63c17.555-17.555 43.886-17.555 61.44 0 17.555 17.554 17.555 43.885 0 61.44L74.606 1012.297C68.754 1021.074 57.05 1024 45.349 1024z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), p = [
  i
];
function m(e, _, d, f, u, h2) {
  return openBlock(), createElementBlock("svg", {
    class: normalizeClass(e.classes),
    style: normalizeStyle(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1026 1024",
    role: "presentation"
  }, p, 6);
}
const g = /* @__PURE__ */ l(a, [["render", m]]);
a$1("comment");
a$1("date");
a$1("del");
a$1("del2");
a$1("dongdong");
a$1("dou-arrow-up");
a$1("down-arrow");
a$1("download");
a$1("dshop");
a$1("edit");
a$1("eye");
a$1("fabulous");
a$1("failure");
a$1("find");
a$1("follow");
a$1("footprint");
a$1("github");
a$1("heart-fill-n");
a$1("heart-fill");
a$1("heart-fill1");
a$1("heart-fill2");
a$1("heart-fill3");
a$1("heart-n");
a$1("heart");
a$1("heart1");
a$1("heart2");
a$1("home");
a$1("horizontal-n");
a$1("horizontal");
a$1("image-error");
a$1("image");
a$1("issue");
a$1("JD");
a$1("jdl");
a$1("JIMI40");
a$1("joy-smile");
a$1("left");
a$1("link");
a$1("loading");
a$1("loading1");
a$1("location");
a$1("location2");
a$1("locationg3");
a$1("lower");
a$1("marshalling");
a$1("mask-close");
a$1("message");
a$1("microphone");
a$1("minus");
a$1("more-s");
a$1("more-x");
a$1("more");
a$1("my");
a$1("my2");
a$1("notice");
a$1("order");
a$1("people");
a$1("photograph");
a$1("play-circle-fill");
a$1("play-double-back");
a$1("play-double-forward");
a$1("play-start");
a$1("play-stop");
a$1("plus");
a$1("poweroff-circle-fill");
a$1("rect-down");
a$1("rect-left");
a$1("rect-right");
a$1("rect-up");
a$1("refresh");
a$1("refresh2");
a$1("retweet");
a$1("right");
a$1("s-follow");
a$1("scan");
a$1("scan2");
a$1("screen-little");
a$1("search");
a$1("search2");
a$1("service");
a$1("setting");
a$1("share-n");
a$1("share");
a$1("share1");
a$1("shop");
a$1("shop3");
a$1("star-fill-n");
a$1("star-fill");
a$1("star-fill1");
a$1("star-fill2");
a$1("star-n");
a$1("star");
a$1("star1");
a$1("star11");
a$1("star2");
a$1("success");
a$1("tips");
a$1("top");
a$1("triangle-down");
a$1("triangle-up");
a$1("uploader");
a$1("voice");
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, {
  name: "NutTag"
}), {
  __name: "tag.taro",
  props: {
    color: { default: "" },
    textColor: { default: "" },
    type: { default: "default" },
    plain: { type: Boolean, default: false },
    round: { type: Boolean, default: false },
    mark: { type: Boolean, default: false },
    closeable: { type: Boolean, default: false }
  },
  emits: ["close", "click"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const classes = computed(() => {
      const prefixCls = "nut-tag";
      return {
        [prefixCls]: true,
        [`${prefixCls}--${props.type}`]: props.type,
        [`${prefixCls}--plain`]: props.plain,
        [`${prefixCls}--round`]: props.round,
        [`${prefixCls}--mark`]: props.mark
      };
    });
    const style = computed(() => {
      const style2 = {};
      if (props.textColor) {
        style2.color = props.textColor;
      } else if (props.color && props.plain) {
        style2.color = props.color;
      }
      if (props.plain) {
        style2.background = "#fff";
        style2.borderColor = props.color;
      } else if (props.color) {
        style2.background = props.color;
      }
      return style2;
    });
    const onClose = (event) => {
      emits("close", event);
    };
    const onClick = (event) => {
      emits("click", event);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("view", {
        class: normalizeClass(classes.value),
        style: normalizeStyle(style.value),
        onClick
      }, [
        renderSlot(_ctx.$slots, "default"),
        createTextVNode(),
        _ctx.closeable ? (openBlock(), createBlock(unref(g), {
          key: 0,
          class: "nut-tag--close",
          width: "12px",
          height: "12px",
          onClick: withModifiers(onClose, ["stop"])
        })) : createCommentVNode("", true)
      ], 6);
    };
  }
}));
withInstall(_sfc_main);
export {
  _sfc_main as Tag,
  _sfc_main as default
};
