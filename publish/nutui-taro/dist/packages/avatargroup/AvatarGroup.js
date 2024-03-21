import { ref, computed, onMounted, nextTick, unref, onUnmounted, provide, resolveComponent, openBlock, createElementBlock, normalizeStyle, renderSlot, createTextVNode, createBlock, withCtx, toDisplayString, createCommentVNode } from "vue";
import Taro from "@tarojs/taro";
import { c as createComponent } from "../component-DQf3CENX.js";
import { N as NutAvatar, A as AVATAR_KEY } from "../index.taro-Do4_KY74.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
const { create } = createComponent("avatar-group");
const _sfc_main = create({
  components: {
    NutAvatar
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
  setup(props) {
    const avatarGroupRef = ref(null);
    const foldCount = ref(99);
    const observer = ref();
    const styles = computed(() => {
      return {
        marginLeft: -1 * Number(props.span) + "px"
      };
    });
    const foldAvatar = (element) => {
      let count = 0;
      const children = element.children;
      if (props.zIndex === "right") {
        for (let i = 0; i < Number(props.maxCount); i++) {
          const child = children[i];
          child.style.zIndex = `${99 - i}`;
        }
      }
      for (let i = Number(props.maxCount); i < children.length; i++) {
        const child = children[i];
        let className;
        if (Taro.getEnv() === "WEB") {
          className = child.className;
        } else {
          className = child.props.class;
        }
        if (className.includes("avater-fold")) {
          continue;
        }
        child.style.display = "none";
        count++;
      }
      foldCount.value = count;
    };
    const watchDefaultSlot = (element) => {
      const config = { attributes: false, childList: true, subtree: true };
      const callback = function(mutations) {
        let sig = false;
        for (let mutation of mutations) {
          if (mutation.type === "childList") {
            sig = true;
            break;
          }
        }
        if (sig)
          foldAvatar(element);
      };
      const observer2 = new MutationObserver(callback);
      observer2.observe(element, config);
      return observer2;
    };
    onMounted(() => {
      if (props.maxCount) {
        nextTick(() => {
          let element = unref(avatarGroupRef);
          if (Taro.getEnv() === "WEB") {
            if (element && element.$el) {
              element = element.$el;
            }
          }
          foldAvatar(element);
          observer.value = watchDefaultSlot(element);
        });
      }
    });
    onUnmounted(() => {
      var _a;
      (_a = observer.value) == null ? void 0 : _a.disconnect();
    });
    provide(AVATAR_KEY, {
      props,
      avatarGroupRef
    });
    return {
      styles,
      foldCount,
      avatarGroupRef
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_nut_avatar = resolveComponent("nut-avatar");
  return openBlock(), createElementBlock("view", {
    ref: "avatarGroupRef",
    class: "nut-avatar-group",
    style: normalizeStyle(_ctx.styles)
  }, [
    renderSlot(_ctx.$slots, "default"),
    createTextVNode(),
    _ctx.foldCount > 0 ? (openBlock(), createBlock(_component_nut_avatar, {
      key: 0,
      class: "avater-fold",
      color: _ctx.maxColor,
      "bg-color": _ctx.maxBgColor,
      size: _ctx.size,
      shape: _ctx.shape,
      style: normalizeStyle({ magrinLeft: `${_ctx.span}px` })
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString(_ctx.maxContent || _ctx.foldCount), 1)
      ]),
      _: 1
    }, 8, ["color", "bg-color", "size", "shape", "style"])) : createCommentVNode("", true)
  ], 4);
}
const index_taro = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index_taro as default
};
