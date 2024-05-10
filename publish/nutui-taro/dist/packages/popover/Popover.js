var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import { ref, computed, onMounted, watch, resolveComponent, openBlock, createElementBlock, Fragment, renderSlot, createCommentVNode, createTextVNode, createElementVNode, normalizeClass, normalizeStyle, createVNode, withCtx, renderList, withModifiers, createBlock, resolveDynamicComponent, toDisplayString } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { r as renderIcon } from "../renderIcon-BfOvhG7i.js";
import { a as useTaroRectById, u as useTaroRect } from "../index-m0Wcof-q.js";
import { N as NutPopup } from "../index.taro-V9Ta96_T.js";
import Taro from "@tarojs/taro";
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
      if (!rootPosition.value) {
        styles.visibility = "hidden";
        return styles;
      }
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
      if (elRect.value.width === 0) {
        styles.visibility = "hidden";
      } else {
        styles.visibility = "initial";
      }
      return styles;
    });
    const getPopoverContentW = () => __async(this, null, function* () {
      useTaroRect(popoverContentRef).then(
        (rect) => {
          elRect.value = {
            height: rect.height,
            width: rect.width
          };
        },
        () => {
        }
      );
    });
    const getContentWidth = () => {
      Taro.createSelectorQuery().selectViewport().scrollOffset((res) => {
        const distance = res.scrollTop;
        if (props.targetId) {
          useTaroRectById(props.targetId).then(
            (rect) => {
              rootPosition.value = {
                width: rect == null ? void 0 : rect.width,
                height: rect == null ? void 0 : rect.height,
                left: rect == null ? void 0 : rect.left,
                top: (rect == null ? void 0 : rect.top) + distance,
                right: rect == null ? void 0 : rect.right
              };
            },
            () => {
            }
          );
        } else {
          useTaroRect(popoverRef).then(
            (rect) => {
              rootPosition.value = {
                width: rect == null ? void 0 : rect.width,
                height: rect == null ? void 0 : rect.height,
                left: rect == null ? void 0 : rect.left,
                top: (rect == null ? void 0 : rect.top) + distance,
                right: rect == null ? void 0 : rect.right
              };
            },
            () => {
            }
          );
        }
      }).exec();
      setTimeout(() => {
        getPopoverContentW();
      }, 300);
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
          Taro.nextTick(() => {
            getContentWidth();
          });
        }
      }
    );
    watch(
      () => props.location,
      () => {
        getContentWidth();
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
    const clickAway = () => {
      props.closeOnClickOutside && closePopover();
    };
    const refRandomId = Math.random().toString(36).slice(-8);
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
      renderIcon,
      refRandomId,
      clickAway
    };
  }
});
const _hoisted_1 = ["id"];
const _hoisted_2 = ["id"];
const _hoisted_3 = ["onClick"];
const _hoisted_4 = { class: "nut-popover-menu-item-name" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_nut_popup = resolveComponent("nut-popup");
  return openBlock(), createElementBlock(Fragment, null, [
    !_ctx.targetId ? (openBlock(), createElementBlock("view", {
      key: 0,
      id: "popoverRef" + _ctx.refRandomId,
      ref: "popoverRef",
      class: "nut-popover-wrapper",
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.openPopover && _ctx.openPopover(...args))
    }, [
      renderSlot(_ctx.$slots, "reference")
    ], 8, _hoisted_1)) : createCommentVNode("", true),
    createTextVNode(),
    createElementVNode("view", {
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
          createElementVNode("view", {
            id: "popoverContentRef" + _ctx.refRandomId,
            ref: "popoverContentRef",
            class: "nut-popover-content-group"
          }, [
            _ctx.showArrow ? (openBlock(), createElementBlock("view", {
              key: 0,
              class: normalizeClass(_ctx.popoverArrow),
              style: normalizeStyle(_ctx.popoverArrowStyle)
            }, null, 6)) : createCommentVNode("", true),
            createTextVNode(),
            renderSlot(_ctx.$slots, "content"),
            createTextVNode(),
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.list, (item, index) => {
              return openBlock(), createElementBlock("view", {
                key: index,
                class: normalizeClass([item.className, item.disabled && "nut-popover-menu-disabled", "nut-popover-menu-item"]),
                onClick: withModifiers(($event) => _ctx.chooseItem(item, index), ["stop"])
              }, [
                item.icon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.renderIcon(item.icon)), {
                  key: 0,
                  class: "nut-popover-item-img"
                })) : createCommentVNode("", true),
                createTextVNode(),
                createElementVNode("view", _hoisted_4, toDisplayString(item.name), 1)
              ], 10, _hoisted_3);
            }), 128))
          ], 8, _hoisted_2)
        ]),
        _: 3
      }, 8, ["visible", "pop-class", "style", "overlay", "duration", "overlay-style", "overlay-class", "close-on-click-overlay"]),
      createTextVNode(),
      _ctx.showPopup ? (openBlock(), createElementBlock("view", {
        key: 0,
        class: "nut-popover-content-bg",
        onTouchmove: _cache[2] || (_cache[2] = (...args) => _ctx.clickAway && _ctx.clickAway(...args)),
        onClick: _cache[3] || (_cache[3] = (...args) => _ctx.clickAway && _ctx.clickAway(...args))
      }, null, 32)) : createCommentVNode("", true)
    ], 6)
  ], 64);
}
const NutPopover = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  NutPopover as default
};
