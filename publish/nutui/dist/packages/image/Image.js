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
import { reactive, useSlots, computed, ref, onMounted, onBeforeUnmount, watch, toRefs, resolveComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, createBlock, createCommentVNode, renderSlot } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { p as pxCheck } from "../pxCheck-DN6FYV6q.js";
import { Image, ImageError } from "@nutui/icons-vue";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
const { componentName, create } = createComponent("image");
const _sfc_main = create({
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
      default: false
    },
    radius: [String, Number],
    showError: {
      type: Boolean,
      default: true
    },
    showLoading: {
      type: Boolean,
      default: true
    },
    lazyLoad: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Image,
    ImageError
  },
  emits: ["click", "load", "error"],
  setup(props, { emit }) {
    const state = reactive({
      loading: true,
      isError: false,
      slotLoding: useSlots().loading,
      slotError: useSlots().error
    });
    const classes = computed(() => {
      const prefixCls = componentName;
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
      if (props.width)
        style.width = pxCheck(props.width);
      if (props.height)
        style.height = pxCheck(props.height);
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
        state.isError = false, state.loading = true;
      }
    );
    const load = () => {
      state.isError = false;
      state.loading = false;
      emit("load");
    };
    const error = () => {
      state.isError = true;
      state.loading = false;
      emit("error");
    };
    const imageClick = (event) => {
      emit("click", event);
    };
    return __spreadProps(__spreadValues({}, toRefs(state)), { imageClick, classes, styles, stylebox, error, load, show, imgRef });
  }
});
const _hoisted_1 = ["src", "date-src", "alt"];
const _hoisted_2 = {
  key: 0,
  class: "nut-img-loading"
};
const _hoisted_3 = {
  key: 1,
  class: "nut-img-error"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Image = resolveComponent("Image");
  const _component_ImageError = resolveComponent("ImageError");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.classes),
    style: normalizeStyle(_ctx.stylebox),
    onClick: _cache[2] || (_cache[2] = (...args) => _ctx.imageClick && _ctx.imageClick(...args))
  }, [
    createElementVNode("img", {
      ref: "imgRef",
      class: "nut-img",
      src: _ctx.lazyLoad ? _ctx.show ? _ctx.src : void 0 : _ctx.src,
      "date-src": _ctx.lazyLoad ? _ctx.show ? void 0 : _ctx.src : void 0,
      alt: _ctx.alt,
      style: normalizeStyle(_ctx.styles),
      onLoad: _cache[0] || (_cache[0] = (...args) => _ctx.load && _ctx.load(...args)),
      onError: _cache[1] || (_cache[1] = (...args) => _ctx.error && _ctx.error(...args))
    }, null, 44, _hoisted_1),
    _ctx.loading ? (openBlock(), createElementBlock("div", _hoisted_2, [
      !_ctx.slotLoding ? (openBlock(), createBlock(_component_Image, {
        key: 0,
        width: "16px",
        height: "20px",
        name: "image"
      })) : createCommentVNode("", true),
      renderSlot(_ctx.$slots, "loading")
    ])) : createCommentVNode("", true),
    _ctx.isError && !_ctx.loading ? (openBlock(), createElementBlock("div", _hoisted_3, [
      !_ctx.slotError ? (openBlock(), createBlock(_component_ImageError, {
        key: 0,
        width: "16px",
        height: "20px",
        name: "imageError"
      })) : createCommentVNode("", true),
      renderSlot(_ctx.$slots, "error")
    ])) : createCommentVNode("", true)
  ], 6);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index as default
};
