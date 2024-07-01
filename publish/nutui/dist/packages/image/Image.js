var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { defineComponent, ref, computed, onMounted, onBeforeUnmount, watch, openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, renderSlot, createVNode, unref, createCommentVNode } from "vue";
import { p as pxCheck } from "../pxCheck-DN6FYV6q.js";
import { Image, ImageError } from "@nutui/icons-vue";
import { w as withInstall } from "../with-install-Ch3FF0uS.js";
const _hoisted_1 = ["src", "data-src", "alt"];
const _hoisted_2 = {
  key: 0,
  class: "nut-img-loading"
};
const _hoisted_3 = {
  key: 1,
  class: "nut-img-error"
};
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, {
  name: "NutImage"
}), {
  __name: "image",
  props: {
    src: {},
    fit: { default: "fill" },
    position: { default: "center" },
    alt: { default: "" },
    width: { default: "" },
    height: { default: "" },
    round: { type: Boolean, default: false },
    radius: {},
    showError: { type: Boolean, default: true },
    showLoading: { type: Boolean, default: true },
    lazyLoad: { type: Boolean, default: false }
  },
  emits: ["click", "load", "error"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const loading = ref(true);
    const isError = ref(false);
    const classes = computed(() => {
      const prefixCls = "nut-image";
      return {
        [prefixCls]: true,
        [`${prefixCls}-round`]: props.round
      };
    });
    const observer = ref(null);
    const show = ref(false);
    const imgRef = ref(null);
    const initObserver = () => {
      const options = {
        threshold: [0],
        rootMargin: "0px"
      };
      observer.value = new IntersectionObserver((entires) => {
        entires.forEach((item) => {
          if (item.isIntersecting) {
            show.value = true;
            observer.value.disconnect();
          }
        });
      }, options);
      imgRef.value && observer.value.observe(imgRef.value);
    };
    onMounted(() => {
      props.lazyLoad && initObserver();
    });
    onBeforeUnmount(() => {
      observer.value && observer.value.disconnect();
    });
    const stylebox = computed(() => {
      let style = {};
      if (props.width) style.width = pxCheck(props.width);
      if (props.height) style.height = pxCheck(props.height);
      if (props.radius !== void 0 && props.radius !== null) {
        style.overflow = "hidden";
        style.borderRadius = pxCheck(props.radius);
      }
      return style;
    });
    const styles = computed(() => {
      let styless = {
        objectFit: props.fit,
        objectPosition: props.position
      };
      return styless;
    });
    watch(
      () => props.src,
      () => {
        isError.value = false;
        loading.value = true;
      }
    );
    const load = () => {
      isError.value = false;
      loading.value = false;
      emit("load");
    };
    const error = () => {
      isError.value = true;
      loading.value = false;
      emit("error");
    };
    const imageClick = (event) => {
      emit("click", event);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(classes.value),
        style: normalizeStyle(stylebox.value),
        onClick: imageClick
      }, [
        createElementVNode("img", {
          ref_key: "imgRef",
          ref: imgRef,
          class: "nut-img",
          src: _ctx.lazyLoad ? show.value ? _ctx.src : void 0 : _ctx.src,
          "data-src": _ctx.lazyLoad ? show.value ? void 0 : _ctx.src : void 0,
          alt: _ctx.alt,
          style: normalizeStyle(styles.value),
          onLoad: load,
          onError: error
        }, null, 44, _hoisted_1),
        loading.value ? (openBlock(), createElementBlock("div", _hoisted_2, [
          renderSlot(_ctx.$slots, "loading", {}, () => [
            createVNode(unref(Image), {
              width: "16px",
              height: "20px",
              name: "image"
            })
          ])
        ])) : createCommentVNode("", true),
        isError.value && !loading.value ? (openBlock(), createElementBlock("div", _hoisted_3, [
          renderSlot(_ctx.$slots, "error", {}, () => [
            createVNode(unref(ImageError), {
              width: "16px",
              height: "20px",
              name: "imageError"
            })
          ])
        ])) : createCommentVNode("", true)
      ], 6);
    };
  }
}));
withInstall(_sfc_main);
export {
  _sfc_main as Image,
  _sfc_main as default
};
