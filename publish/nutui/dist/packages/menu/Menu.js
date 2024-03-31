import { ref, computed, onMounted, onUnmounted, resolveComponent, openBlock, createElementBlock, normalizeClass, createElementVNode, Fragment, renderList, normalizeStyle, toDisplayString, renderSlot, createBlock } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { u as useRect } from "../index-B1qsj2XR.js";
import { RectUp, RectDown } from "@nutui/icons-vue";
import { M as MENU_KEY } from "../types-CkPfROfI.js";
import { u as useChildren } from "../useChildren-BZ4-J79J.js";
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
    const updateOffset = () => {
      if (barRef.value) {
        const rect = useRect(barRef);
        if (props.direction === "down") {
          offset.value = rect.bottom;
        } else {
          offset.value = window.innerHeight - rect.top;
        }
      }
    };
    linkChildren({ props, offset });
    const toggleItem = (active) => {
      children.forEach((item, index2) => {
        if (index2 === active) {
          updateOffset();
          item.toggle();
        } else if (item.state.showPopup) {
          item.toggle(false, { immediate: true });
        }
      });
    };
    const getScrollTop = (el) => {
      return Math.max(0, "scrollTop" in el ? el.scrollTop : el.pageYOffset);
    };
    const onScroll = () => {
      const { scrollFixed } = props;
      const scrollTop = getScrollTop(window);
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
    onMounted(() => {
      const { scrollFixed } = props;
      if (scrollFixed) {
        window.addEventListener("scroll", onScroll);
      }
    });
    onUnmounted(() => {
      const { scrollFixed } = props;
      if (scrollFixed) {
        window.removeEventListener("scroll", onScroll);
      }
    });
    return {
      toggleItem,
      children,
      opened,
      classes,
      barRef,
      getClasses
    };
  }
});
const _hoisted_1 = ["onClick"];
const _hoisted_2 = { class: "nut-menu__title-text" };
const _hoisted_3 = { class: "nut-menu__title-icon" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_RectUp = resolveComponent("RectUp");
  const _component_RectDown = resolveComponent("RectDown");
  return openBlock(), createElementBlock("view", {
    class: normalizeClass(_ctx.classes)
  }, [
    createElementVNode("view", {
      ref: "barRef",
      class: normalizeClass(["nut-menu__bar", { opened: _ctx.opened }])
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.children, (item, index2) => {
        return openBlock(), createElementBlock("view", {
          key: index2,
          class: normalizeClass(["nut-menu__item", { disabled: item.disabled, active: item.state.showPopup }]),
          style: normalizeStyle({ color: item.state.showPopup ? _ctx.activeColor : "" }),
          onClick: ($event) => !item.disabled && _ctx.toggleItem(index2)
        }, [
          createElementVNode("view", {
            class: normalizeClass(["nut-menu__title", _ctx.getClasses(item.state.showPopup)])
          }, [
            createElementVNode("view", _hoisted_2, toDisplayString(item.renderTitle()), 1),
            createElementVNode("span", _hoisted_3, [
              renderSlot(_ctx.$slots, "icon", {}, () => [
                _ctx.direction === "up" ? (openBlock(), createBlock(_component_RectUp, { key: 0 })) : (openBlock(), createBlock(_component_RectDown, { key: 1 }))
              ])
            ])
          ], 2)
        ], 14, _hoisted_1);
      }), 128))
    ], 2),
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index as default
};
