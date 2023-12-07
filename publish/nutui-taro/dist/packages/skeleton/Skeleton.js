import { c as createComponent } from "../component-TCzwHGVq.js";
import { toRefs, computed, resolveComponent, openBlock, createElementBlock, renderSlot, createCommentVNode, createTextVNode, createElementVNode, createBlock, normalizeClass, normalizeStyle, Fragment, renderList } from "vue";
import { N as NutAvatar } from "../index.taro--uVlasFu.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-yVxbj29m.js";
const { create } = createComponent("skeleton");
const _sfc_main = create({
  components: {
    NutAvatar
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
      default: false
    },
    //头像
    avatar: {
      type: Boolean,
      default: false
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
      default: true
    },
    //标题/段落 圆角风格
    round: {
      type: Boolean,
      default: false
    },
    //显示段落行数
    row: {
      type: String,
      default: "1"
    },
    //是否显示段落标题
    title: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const { avatarShape, round, avatarSize } = toRefs(props);
    const avatarClass = computed(() => {
      const prefixCls = "avatarClass";
      return {
        [prefixCls]: true,
        [`${prefixCls}--${avatarShape.value}`]: avatarShape.value
      };
    });
    const getBlockClass = (prefixCls) => {
      return {
        [prefixCls]: true,
        [`${prefixCls}--round`]: round.value
      };
    };
    const getStyle = () => {
      if (avatarSize.value) {
        return {
          width: avatarSize.value,
          height: avatarSize.value
        };
      }
      return {
        width: "50px",
        height: "50px"
      };
    };
    return {
      avatarShape,
      avatarClass,
      getBlockClass,
      getStyle
    };
  }
});
const _hoisted_1 = { key: 0 };
const _hoisted_2 = {
  key: 1,
  class: "nut-skeleton"
};
const _hoisted_3 = {
  key: 0,
  class: "nut-skeleton-animation"
};
const _hoisted_4 = { class: "nut-skeleton-content" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_nut_avatar = resolveComponent("nut-avatar");
  return !_ctx.loading ? (openBlock(), createElementBlock("view", _hoisted_1, [
    renderSlot(_ctx.$slots, "default")
  ])) : (openBlock(), createElementBlock("view", _hoisted_2, [
    _ctx.animated ? (openBlock(), createElementBlock("view", _hoisted_3)) : createCommentVNode("", true),
    createTextVNode(),
    createElementVNode("view", _hoisted_4, [
      _ctx.avatar ? (openBlock(), createBlock(_component_nut_avatar, {
        key: 0,
        class: normalizeClass(_ctx.avatarClass),
        shape: _ctx.avatarShape,
        style: normalizeStyle(_ctx.getStyle())
      }, null, 8, ["class", "shape", "style"])) : createCommentVNode("", true),
      createTextVNode(),
      createElementVNode("view", {
        class: "nut-skeleton-content__line",
        style: normalizeStyle({ width: _ctx.width })
      }, [
        _ctx.title ? (openBlock(), createElementBlock("view", {
          key: 0,
          class: normalizeClass(_ctx.getBlockClass("nut-skeleton-blockTitle")),
          style: normalizeStyle({ height: _ctx.height })
        }, null, 6)) : createCommentVNode("", true),
        createTextVNode(),
        (openBlock(true), createElementBlock(Fragment, null, renderList(Number(_ctx.row), (_) => {
          return openBlock(), createElementBlock("view", {
            key: _,
            class: normalizeClass(_ctx.getBlockClass("nut-skeleton-blockLine")),
            style: normalizeStyle({ height: _ctx.height })
          }, null, 6);
        }), 128))
      ], 4)
    ])
  ]));
}
const index_taro = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index_taro as default
};
