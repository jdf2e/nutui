import { ref, computed, onMounted, watch, nextTick, resolveComponent, openBlock, createElementBlock, Fragment, renderSlot, createCommentVNode, createBlock, Teleport, createElementVNode, normalizeClass, normalizeStyle, createVNode, withCtx, renderList, withModifiers, resolveDynamicComponent, toDisplayString } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { r as renderIcon } from "../renderIcon-BfOvhG7i.js";
import { u as useRect } from "../index-B1qsj2XR.js";
import { N as NutPopup } from "../index-wLaOjIn1.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
const { create } = createComponent("popover");
const _sfc_main = create({
  components: {
    NutPopup
  },
  props: {
    visible: { type: Boolean, default: false },
    list: { type: Array, default: [] },
    theme: { type: String, default: "light" },
    location: { type: String, default: "bottom" },
    offset: { type: Array, default: [0, 12] },
    arrowOffset: { type: Number, default: 0 },
    customClass: { type: String, default: "" },
    showArrow: { type: Boolean, default: true },
    duration: { type: [Number, String], default: 0.3 },
    overlay: { type: Boolean, default: false },
    overlayClass: { type: String, default: "" },
    overlayStyle: { type: Object },
    closeOnClickOverlay: { type: Boolean, default: true },
    closeOnClickAction: { type: Boolean, default: true },
    closeOnClickOutside: { type: Boolean, default: true },
    targetId: { type: String, default: "" },
    bgColor: { type: String, default: "" }
  },
  emits: ["update", "update:visible", "close", "choose", "open"],
  setup(props, { emit }) {
    const popoverRef = ref();
    const popoverContentRef = ref();
    const showPopup = ref(props.visible);
    const rootPosition = ref();
    const elRect = ref({
      width: 0,
      height: 0
    });
    const popoverArrow = computed(() => {
      const prefixCls = "nut-popover-arrow";
      const loca = props.location;
      const direction = loca.split("-")[0];
      return `${prefixCls} ${prefixCls}-${direction} ${prefixCls}--${loca}`;
    });
    const popoverArrowStyle = computed(() => {
      const styles = {};
      const { bgColor, arrowOffset, location } = props;
      const direction = location.split("-")[0];
      const skew = location.split("-")[1];
      const base = 16;
      if (bgColor) {
        styles[`border${upperCaseFirst(direction)}Color`] = bgColor;
      }
      if (props.arrowOffset != 0) {
        if (["bottom", "top"].includes(direction)) {
          if (!skew) {
            styles.left = `calc(50% + ${arrowOffset}px)`;
          }
          if (skew == "start") {
            styles.left = `${base + arrowOffset}px`;
          }
          if (skew == "end") {
            styles.right = `${base - arrowOffset}px`;
          }
        }
        if (["left", "right"].includes(direction)) {
          if (!skew) {
            styles.top = `calc(50% - ${arrowOffset}px)`;
          }
          if (skew == "start") {
            styles.top = `${base - arrowOffset}px`;
          }
          if (skew == "end") {
            styles.bottom = `${base + arrowOffset}px`;
          }
        }
      }
      return styles;
    });
    const upperCaseFirst = (str) => {
      str = str.toLowerCase();
      str = str.replace(/\b\w+\b/g, (word) => word.substring(0, 1).toUpperCase() + word.substring(1));
      return str;
    };
    const getRootPosition = computed(() => {
      const styles = {};
      if (!rootPosition.value)
        return {};
      const contentWidth = elRect.value.width;
      const contentHeight = elRect.value.height;
      const { width, height, left, top, right } = rootPosition.value;
      const { location, offset } = props;
      const direction = location == null ? void 0 : location.split("-")[0];
      const skew = location == null ? void 0 : location.split("-")[1];
      let cross = 0;
      let parallel = 0;
      if (Array.isArray(offset) && (offset == null ? void 0 : offset.length) === 2) {
        cross += Number(offset[1]);
        parallel += Number(offset[0]);
      }
      if (width) {
        if (["bottom", "top"].includes(direction)) {
          const h = direction === "bottom" ? height + cross : -(contentHeight + cross);
          styles.top = `${top + h}px`;
          if (!skew) {
            styles.left = `${-(contentWidth - width) / 2 + left + parallel}px`;
          }
          if (skew === "start") {
            styles.left = `${left + parallel}px`;
          }
          if (skew === "end") {
            styles.left = `${right + parallel}px`;
          }
        }
        if (["left", "right"].includes(direction)) {
          const contentW = direction === "left" ? -(contentWidth + cross) : width + cross;
          styles.left = `${left + contentW}px`;
          if (!skew) {
            styles.top = `${top - contentHeight / 2 + height / 2 - 4 + parallel}px`;
          }
          if (skew === "start") {
            styles.top = `${top + parallel}px`;
          }
          if (skew === "end") {
            styles.top = `${top + height + parallel}px`;
          }
        }
      }
      return styles;
    });
    const getContentWidth = () => {
      var _a, _b, _c, _d;
      const rect = useRect(
        props.targetId ? document.querySelector(`#${props.targetId}`) : popoverRef.value
      );
      rootPosition.value = {
        width: rect.width,
        height: rect.height,
        left: rect.left,
        top: rect.top + Math.max(((_a = document.documentElement) == null ? void 0 : _a.scrollTop) || 0, ((_b = document.body) == null ? void 0 : _b.scrollTop) || 0),
        right: rect.right
      };
      elRect.value = {
        height: (_c = popoverContentRef.value) == null ? void 0 : _c.clientHeight,
        width: (_d = popoverContentRef.value) == null ? void 0 : _d.clientWidth
      };
    };
    onMounted(() => {
      setTimeout(() => {
        getContentWidth();
      }, 300);
    });
    watch(
      () => props.visible,
      (value) => {
        showPopup.value = value;
        if (value) {
          window.addEventListener("touchstart", clickAway, true);
          nextTick(() => {
            getContentWidth();
          });
        } else {
          window.removeEventListener("touchstart", clickAway, true);
        }
      }
    );
    const update = (val) => {
      emit("update", val);
      emit("update:visible", val);
    };
    const openPopover = () => {
      update(!props.visible);
      emit("open");
    };
    const closePopover = () => {
      emit("update:visible", false);
      emit("close");
    };
    const chooseItem = (item, index) => {
      !item.disabled && emit("choose", item, index);
      if (props.closeOnClickAction) {
        closePopover();
      }
    };
    const clickAway = (event) => {
      const element = popoverRef.value;
      const elContent = popoverContentRef.value;
      let el = element && !element.contains(event.target);
      if (props.targetId) {
        const dom = document.querySelector(`#${props.targetId}`);
        el = dom && !dom.contains(event.target);
      }
      if (el && elContent && !elContent.contains(event.target) && props.closeOnClickOutside) {
        closePopover();
      }
    };
    return {
      showPopup,
      openPopover,
      popoverArrow,
      closePopover,
      chooseItem,
      popoverRef,
      popoverContentRef,
      getRootPosition,
      popoverArrowStyle,
      renderIcon
    };
  }
});
const _hoisted_1 = {
  ref: "popoverContentRef",
  class: "nut-popover-content-group"
};
const _hoisted_2 = ["onClick"];
const _hoisted_3 = { class: "nut-popover-menu-item-name" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_nut_popup = resolveComponent("nut-popup");
  return openBlock(), createElementBlock(Fragment, null, [
    !_ctx.targetId ? (openBlock(), createElementBlock("div", {
      key: 0,
      ref: "popoverRef",
      class: "nut-popover-wrapper",
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.openPopover && _ctx.openPopover(...args))
    }, [
      renderSlot(_ctx.$slots, "reference")
    ], 512)) : createCommentVNode("", true),
    (openBlock(), createBlock(Teleport, { to: "body" }, [
      createElementVNode("div", {
        class: normalizeClass(["nut-popover", `nut-popover--${_ctx.theme}`, `${_ctx.customClass}`]),
        style: normalizeStyle(_ctx.getRootPosition)
      }, [
        createVNode(_component_nut_popup, {
          visible: _ctx.showPopup,
          "onUpdate:visible": _cache[1] || (_cache[1] = ($event) => _ctx.showPopup = $event),
          "pop-class": `nut-popover-content nut-popover-content--${_ctx.location}`,
          style: normalizeStyle({ background: _ctx.bgColor }),
          position: "",
          transition: "nut-popover",
          overlay: _ctx.overlay,
          duration: _ctx.duration,
          "overlay-style": _ctx.overlayStyle,
          "overlay-class": _ctx.overlayClass,
          "close-on-click-overlay": _ctx.closeOnClickOverlay
        }, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_1, [
              _ctx.showArrow ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.popoverArrow),
                style: normalizeStyle(_ctx.popoverArrowStyle)
              }, null, 6)) : createCommentVNode("", true),
              renderSlot(_ctx.$slots, "content"),
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.list, (item, index) => {
                return openBlock(), createElementBlock("div", {
                  key: index,
                  class: normalizeClass([item.className, item.disabled && "nut-popover-menu-disabled", "nut-popover-menu-item"]),
                  onClick: withModifiers(($event) => _ctx.chooseItem(item, index), ["stop"])
                }, [
                  item.icon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.renderIcon(item.icon)), {
                    key: 0,
                    class: "nut-popover-item-img"
                  })) : createCommentVNode("", true),
                  createElementVNode("div", _hoisted_3, toDisplayString(item.name), 1)
                ], 10, _hoisted_2);
              }), 128))
            ], 512)
          ]),
          _: 3
        }, 8, ["visible", "pop-class", "style", "overlay", "duration", "overlay-style", "overlay-class", "close-on-click-overlay"])
      ], 6)
    ]))
  ], 64);
}
const NutPopover = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  NutPopover as default
};
