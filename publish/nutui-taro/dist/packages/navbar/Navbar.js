import { toRefs, ref, computed, onMounted, resolveComponent, openBlock, createElementBlock, normalizeStyle, createElementVNode, normalizeClass, renderSlot, createVNode, createCommentVNode, createTextVNode, toDisplayString } from "vue";
import { c as createComponent } from "../component-TCzwHGVq.js";
import { Left } from "@nutui/icons-vue-taro";
import { u as useTaroRect } from "../index-Isui2_f6.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-yVxbj29m.js";
import "@tarojs/taro";
const { componentName, create } = createComponent("navbar");
const _sfc_main = create({
  components: { Left },
  props: {
    leftShow: { type: Boolean, default: false },
    //左侧  是否显示返回icon
    title: { type: String, default: "" },
    //中间  文字标题
    titleIcon: { type: Boolean, default: false },
    //中间
    leftText: { type: String, default: "" },
    //左侧文字
    desc: { type: String, default: "" },
    //右侧   按钮文字
    fixed: {
      type: Boolean,
      default: false
    },
    safeAreaInsetTop: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    },
    placeholder: {
      // 生成一个等高的占位元素
      type: Boolean,
      default: true
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
  setup(props, { emit }) {
    const { border, fixed, safeAreaInsetTop, placeholder } = toRefs(props);
    const refRandomId = Math.random().toString(36).slice(-8);
    const navHeight = ref("auto");
    const navbarRef = ref(null);
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [`${prefixCls}--border`]: border.value,
        [`${prefixCls}--fixed`]: fixed.value,
        [`${prefixCls}--safe-area-inset-top`]: safeAreaInsetTop.value
      };
    });
    const rootStyle = computed(() => {
      if (fixed.value && placeholder.value) {
        return {
          height: navHeight.value
        };
      }
      return {};
    });
    const getNavHeight = () => {
      useTaroRect(navbarRef).then(
        (rect) => {
          navHeight.value = `${rect.height}px`;
        },
        () => {
        }
      );
    };
    onMounted(() => {
      if (fixed.value && placeholder.value) {
        setTimeout(() => {
          getNavHeight();
        }, 100);
      }
    });
    const handleLeft = () => {
      emit("clickBack");
      emit("onClickBack");
    };
    const handleCenter = () => {
      emit("clickTitle");
      emit("onClickTitle");
    };
    const handleCenterIcon = () => {
      emit("clickIcon");
      emit("onClickIcon");
    };
    const handleRight = () => {
      emit("clickRight");
      emit("onClickRight");
    };
    return {
      refRandomId,
      navbarRef,
      rootStyle,
      classes,
      navHeight,
      handleLeft,
      handleCenter,
      handleCenterIcon,
      handleRight
    };
  }
});
const _hoisted_1 = ["id"];
const _hoisted_2 = {
  key: 1,
  class: "nut-navbar__text"
};
const _hoisted_3 = { class: "nut-navbar__title" };
const _hoisted_4 = {
  key: 0,
  class: "nut-navbar__text"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Left = resolveComponent("Left");
  return openBlock(), createElementBlock("view", {
    class: "nut-navbar--placeholder",
    style: normalizeStyle(_ctx.rootStyle)
  }, [
    createElementVNode("view", {
      id: "navbarRef-" + _ctx.refRandomId,
      ref: "navbarRef",
      class: normalizeClass(_ctx.classes),
      style: normalizeStyle({ zIndex: _ctx.zIndex })
    }, [
      createElementVNode("view", {
        class: "nut-navbar__left",
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleLeft && _ctx.handleLeft(...args))
      }, [
        _ctx.leftShow ? renderSlot(_ctx.$slots, "left-show", { key: 0 }, () => [
          createVNode(_component_Left, {
            height: "12px",
            color: "#979797"
          })
        ]) : createCommentVNode("", true),
        createTextVNode(),
        _ctx.leftText ? (openBlock(), createElementBlock("view", _hoisted_2, toDisplayString(_ctx.leftText), 1)) : createCommentVNode("", true),
        createTextVNode(),
        renderSlot(_ctx.$slots, "left")
      ]),
      createTextVNode(),
      createElementVNode("view", _hoisted_3, [
        _ctx.title ? (openBlock(), createElementBlock("view", {
          key: 0,
          class: "title",
          onClick: _cache[1] || (_cache[1] = (...args) => _ctx.handleCenter && _ctx.handleCenter(...args))
        }, toDisplayString(_ctx.title), 1)) : createCommentVNode("", true),
        createTextVNode(),
        _ctx.titleIcon ? (openBlock(), createElementBlock("view", {
          key: 1,
          class: "icon",
          onClick: _cache[3] || (_cache[3] = (...args) => _ctx.handleCenterIcon && _ctx.handleCenterIcon(...args))
        }, [
          renderSlot(_ctx.$slots, "title-icon", {
            onClick: _cache[2] || (_cache[2] = (...args) => _ctx.handleCenterIcon && _ctx.handleCenterIcon(...args))
          })
        ])) : createCommentVNode("", true),
        createTextVNode(),
        renderSlot(_ctx.$slots, "content")
      ]),
      createTextVNode(),
      createElementVNode("view", {
        class: "nut-navbar__right",
        onClick: _cache[4] || (_cache[4] = (...args) => _ctx.handleRight && _ctx.handleRight(...args))
      }, [
        _ctx.desc ? (openBlock(), createElementBlock("view", _hoisted_4, toDisplayString(_ctx.desc), 1)) : createCommentVNode("", true),
        createTextVNode(),
        renderSlot(_ctx.$slots, "right")
      ])
    ], 14, _hoisted_1)
  ], 4);
}
const index_taro = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index_taro as default
};
