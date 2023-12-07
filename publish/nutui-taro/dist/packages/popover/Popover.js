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
import { ref, computed, watch, onMounted, resolveComponent, openBlock, createElementBlock, Fragment, renderSlot, createCommentVNode, createTextVNode, createElementVNode, normalizeClass, normalizeStyle, createVNode, withCtx, renderList, withModifiers, createBlock, resolveDynamicComponent, toDisplayString } from "vue";
import { c as createComponent } from "../component-TCzwHGVq.js";
import { r as renderIcon } from "../renderIcon--EgZu5_5.js";
import { e as isArray } from "../util-WZB3Ltgx.js";
import { a as useTaroRectById, u as useTaroRect } from "../index-Isui2_f6.js";
import { N as NutPopup } from "../index.taro-vH2b6ZpB.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-yVxbj29m.js";
import "@tarojs/taro";
import "@nutui/icons-vue-taro";
import "../overlay/Overlay.js";
const { create } = createComponent("popover");
const _sfc_main = create({
  inheritAttrs: false,
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
    duration: { type: [Number, String], default: 0.2 },
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
    const popoverContentRefCopy = ref();
    const popoverbox = ref();
    const showPopup = ref(props.visible);
    const popoverstyles = ref({});
    let rootRect = ref();
    let conentRootRect;
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
    const getRootPosition = () => {
      if (!rootRect.value || !conentRootRect)
        return {};
      const conentWidth = conentRootRect.width;
      const conentHeight = conentRootRect.height;
      const { width, height, left, top } = rootRect.value;
      const { location, offset } = props;
      const direction = location.split("-")[0];
      const skew = location.split("-")[1];
      let cross = 0;
      let parallel = 0;
      if (isArray(offset) && offset.length == 2) {
        cross += Number(offset[1]);
        parallel += Number(offset[0]);
      }
      if (width) {
        if (["bottom", "top"].includes(direction)) {
          const h = direction == "bottom" ? height + cross : -(conentHeight + cross);
          popoverstyles.value.top = `${top + h}px`;
          if (!skew) {
            popoverstyles.value.left = `${-(conentWidth - width) / 2 + left + parallel}px`;
          }
          if (skew == "start") {
            popoverstyles.value.left = `${left + parallel}px`;
          }
          if (skew == "end") {
            popoverstyles.value.left = `${rootRect.value.right + parallel}px`;
          }
        }
        if (["left", "right"].includes(direction)) {
          const contentW = direction == "left" ? -(conentWidth + cross) : width + cross;
          popoverstyles.value.left = `${left + contentW}px`;
          if (!skew) {
            popoverstyles.value.top = `${top - conentHeight / 2 + height / 2 - 4 + parallel}px`;
          }
          if (skew == "start") {
            popoverstyles.value.top = `${top + parallel}px`;
          }
          if (skew == "end") {
            popoverstyles.value.top = `${top + height + parallel}px`;
          }
        }
      }
    };
    const customStyle = computed(() => {
      const styles = {};
      if (props.bgColor) {
        styles.background = props.bgColor;
      }
      return styles;
    });
    const getContentWidth = () => __async(this, null, function* () {
      const solve = (rect) => {
        if (!(rootRect.value && rect.top == rootRect.value.top && rect.width == rootRect.value.width)) {
          setTimeout(() => {
            getContentWidth();
          }, 100);
        }
        rootRect.value = rect;
        getRootPosition();
      };
      if (props.targetId) {
        useTaroRectById(props.targetId).then(
          (rect) => {
            solve(rect);
          },
          () => {
          }
        );
      } else {
        useTaroRect(popoverRef).then(
          (rect) => {
            solve(rect);
          },
          () => {
          }
        );
      }
    });
    const getPopoverContentW = (type = 1) => __async(this, null, function* () {
      const el = type == 1 ? popoverContentRef : popoverContentRefCopy;
      useTaroRect(el).then(
        (rect) => {
          conentRootRect = {
            height: rect.height || 0,
            width: rect.width || 0
          };
          getRootPosition();
        },
        () => {
        }
      );
    });
    watch(
      () => props.visible,
      (value) => {
        showPopup.value = value;
        if (value) {
          getContentWidth();
          setTimeout(() => {
            getPopoverContentW();
          }, 300);
        }
      }
    );
    watch(
      () => props.location,
      () => {
        getRootPosition();
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
      emit("choose", item, index);
      if (props.closeOnClickAction) {
        closePopover();
      }
    };
    const clickAway = () => {
      props.closeOnClickOutside && closePopover();
    };
    onMounted(() => {
      setTimeout(() => {
        getContentWidth();
        getPopoverContentW(0);
      }, 600);
    });
    const refRandomId = Math.random().toString(36).slice(-8);
    return {
      showPopup,
      openPopover,
      popoverArrow,
      closePopover,
      chooseItem,
      popoverRef,
      popoverContentRef,
      popoverContentRefCopy,
      refRandomId,
      clickAway,
      popoverArrowStyle,
      customStyle,
      getRootPosition,
      renderIcon,
      popoverbox,
      popoverstyles
    };
  }
});
const _hoisted_1 = ["id"];
const _hoisted_2 = ["id"];
const _hoisted_3 = ["onClick"];
const _hoisted_4 = { class: "nut-popover-menu-item-name" };
const _hoisted_5 = {
  class: /* @__PURE__ */ normalizeClass(`nut-popover-content nut-popover-content-copy`)
};
const _hoisted_6 = ["id"];
const _hoisted_7 = { class: "nut-popover-menu-item-name" };
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
      ref: "popoverbox",
      class: normalizeClass(["nut-popover", `nut-popover--${_ctx.theme}`, `${_ctx.customClass}`]),
      style: normalizeStyle(_ctx.popoverstyles)
    }, [
      createVNode(_component_nut_popup, {
        visible: _ctx.showPopup,
        "onUpdate:visible": _cache[1] || (_cache[1] = ($event) => _ctx.showPopup = $event),
        "pop-class": `nut-popover-content nut-popover-content--${_ctx.location}`,
        style: normalizeStyle(_ctx.customStyle),
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
                class: normalizeClass([
                  item.className,
                  item.disabled && "nut-popover-menu-disabled",
                  "nut-popover-menu-item",
                  "nut-popover-menu-taroitem"
                ]),
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
    ], 6),
    createTextVNode(),
    createElementVNode("view", _hoisted_5, [
      createElementVNode("view", {
        id: "popoverContentRefCopy" + _ctx.refRandomId,
        ref: "popoverContentRefCopy",
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
            class: normalizeClass([
              item.className,
              item.disabled && "nut-popover-menu-disabled",
              "nut-popover-menu-item",
              "nut-popover-menu-taroitem"
            ])
          }, [
            item.icon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.renderIcon(item.icon)), {
              key: 0,
              class: "nut-popover-item-img"
            })) : createCommentVNode("", true),
            createTextVNode(),
            createElementVNode("view", _hoisted_7, toDisplayString(item.name), 1)
          ], 2);
        }), 128))
      ], 8, _hoisted_6)
    ])
  ], 64);
}
const NutPopover = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  NutPopover as default
};
