import { ref, computed, resolveComponent, openBlock, createElementBlock, normalizeClass, createElementVNode, Fragment, renderList, normalizeStyle, toDisplayString, createTextVNode, renderSlot, createBlock } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import Taro, { usePageScroll } from "@tarojs/taro";
import { u as useTaroRect } from "../index-m0Wcof-q.js";
import { RectUp, RectDown } from "@nutui/icons-vue-taro";
import { u as useChildren } from "../useChildren-BZ4-J79J.js";
import { M as MENU_KEY } from "../types-CkPfROfI.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
const { componentName, create } = createComponent("menu");
const _sfc_main = create({
  components: {
    RectUp,
    RectDown
  },
  props: {
    activeColor: {
      type: String,
      default: ""
    },
    overlay: {
      type: Boolean,
      default: true
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
    duration: {
      type: [Number, String],
      default: 0.3
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    direction: {
      type: String,
      default: "down"
    },
    scrollFixed: {
      type: [Boolean, String, Number],
      default: false
    },
    titleClass: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    const barRef = ref();
    const refRandomId = Math.random().toString(36).slice(-8);
    const offset = ref(0);
    const isScrollFixed = ref(false);
    const { children, linkChildren } = useChildren(MENU_KEY);
    const opened = computed(() => children.some((item) => item.state.showWrapper));
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        "scroll-fixed": isScrollFixed.value
      };
    });
    const updateOffset = (children2) => {
      if (barRef.value) {
        setTimeout(() => {
          useTaroRect(barRef).then(
            (rect) => {
              if (props.direction === "down") {
                offset.value = rect.bottom;
              } else {
                offset.value = Taro.getSystemInfoSync().windowHeight - rect.top;
              }
              children2.toggle();
            },
            () => {
            }
          );
        }, 100);
      }
    };
    linkChildren({ props, offset });
    const toggleItem = (active) => {
      children.forEach((item, index) => {
        if (index === active) {
          updateOffset(item);
        } else if (item.state.showPopup) {
          item.toggle(false, { immediate: true });
        }
      });
    };
    const onScroll = (res) => {
      const { scrollFixed } = props;
      const scrollTop = res.scrollTop;
      isScrollFixed.value = scrollTop > (typeof scrollFixed === "boolean" ? 30 : Number(scrollFixed));
    };
    const getClasses = (showPopup) => {
      let str = "";
      const { titleClass } = props;
      if (showPopup) {
        str += "active";
      }
      if (titleClass) {
        str += ` ${titleClass}`;
      }
      return str;
    };
    usePageScroll((res) => {
      const { scrollFixed } = props;
      if (scrollFixed) {
        onScroll(res);
      }
    });
    return {
      toggleItem,
      children,
      opened,
      classes,
      barRef,
      refRandomId,
      getClasses
    };
  }
});
const _hoisted_1 = ["id"];
const _hoisted_2 = ["onClick"];
const _hoisted_3 = { class: "nut-menu__title-text" };
const _hoisted_4 = { class: "nut-menu__title-icon" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_RectUp = resolveComponent("RectUp");
  const _component_RectDown = resolveComponent("RectDown");
  return openBlock(), createElementBlock("view", {
    class: normalizeClass(_ctx.classes)
  }, [
    createElementVNode("view", {
      id: "nut-menu__bar" + _ctx.refRandomId,
      ref: "barRef",
      class: normalizeClass(["nut-menu__bar", { opened: _ctx.opened }])
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.children, (item, index) => {
        return openBlock(), createElementBlock("view", {
          key: index,
          class: normalizeClass(["nut-menu__item", { disabled: item.disabled, active: item.state.showPopup }]),
          style: normalizeStyle({ color: item.state.showPopup ? _ctx.activeColor : "" }),
          onClick: ($event) => !item.disabled && _ctx.toggleItem(index)
        }, [
          createElementVNode("view", {
            class: normalizeClass(["nut-menu__title", _ctx.getClasses(item.state.showPopup)])
          }, [
            createElementVNode("view", _hoisted_3, toDisplayString(item.renderTitle()), 1),
            createTextVNode(),
            createElementVNode("span", _hoisted_4, [
              renderSlot(_ctx.$slots, "icon", {}, () => [
                _ctx.direction === "up" ? (openBlock(), createBlock(_component_RectUp, { key: 0 })) : (openBlock(), createBlock(_component_RectDown, { key: 1 }))
              ])
            ])
          ], 2)
        ], 14, _hoisted_2);
      }), 128))
    ], 10, _hoisted_1),
    createTextVNode(),
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
const index_taro = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index_taro as default
};
