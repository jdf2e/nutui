import { computed, ref, resolveComponent, openBlock, createBlock, mergeProps, withCtx, createVNode, createSlots, renderSlot } from "vue";
import { c as createComponent } from "../component-TCzwHGVq.js";
import { N as NutCalendarItem, U as Utils } from "../index-NLe0VBkN.js";
import { N as NutPopup } from "../index-rbZsBckW.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-yVxbj29m.js";
import "../raf-MQjoO-Ag.js";
import "../index-s3RgMhc7.js";
import "@nutui/nutui/dist/packages/locale/lang";
import "../util-4Jkyw4BJ.js";
import "@nutui/icons-vue";
import "../overlay/Overlay.js";
const { create } = createComponent("calendar");
const _sfc_main = create({
  components: {
    NutCalendarItem,
    NutPopup
  },
  props: {
    type: {
      type: String,
      default: "one"
    },
    isAutoBackFill: {
      type: Boolean,
      default: false
    },
    toDateAnimation: {
      type: Boolean,
      default: true
    },
    poppable: {
      type: Boolean,
      default: true
    },
    showTitle: {
      type: Boolean,
      default: true
    },
    showSubTitle: {
      type: Boolean,
      default: true
    },
    visible: {
      type: Boolean,
      default: false
    },
    showToday: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ""
    },
    confirmText: {
      type: String,
      default: ""
    },
    startText: {
      type: String,
      default: ""
    },
    endText: {
      type: String,
      default: ""
    },
    defaultValue: {
      type: [String, Array]
    },
    startDate: {
      type: String,
      default: Utils.getDay(0)
    },
    endDate: {
      type: String,
      default: Utils.getDay(365)
    },
    firstDayOfWeek: {
      type: Number,
      default: 0,
      validator: (val) => val >= 0 && val <= 6
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
    disabledDate: Function
  },
  emits: ["choose", "close", "update:visible", "select"],
  setup(props, { emit, slots, expose }) {
    const showTopBtn = computed(() => {
      return slots.btn;
    });
    const topInfo = computed(() => {
      return slots["top-info"];
    });
    const dayInfo = computed(() => {
      return slots.day;
    });
    const bottomInfo = computed(() => {
      return slots["bottom-info"];
    });
    const footerInfo = computed(() => {
      return slots["footer-info"];
    });
    const calendarRef = ref(null);
    const scrollToDate = (date) => {
      var _a;
      (_a = calendarRef.value) == null ? void 0 : _a.scrollToDate(date);
    };
    const initPosition = () => {
      var _a;
      (_a = calendarRef.value) == null ? void 0 : _a.initPosition();
    };
    expose({
      scrollToDate,
      initPosition
    });
    const update = () => {
      emit("update:visible", false);
    };
    const close = () => {
      emit("close");
      emit("update:visible", false);
    };
    const choose = (param) => {
      close();
      emit("choose", param);
    };
    const closePopup = () => {
      close();
    };
    const select = (param) => {
      emit("select", param);
    };
    return {
      closePopup,
      update,
      close,
      select,
      choose,
      calendarRef,
      showTopBtn,
      topInfo,
      dayInfo,
      bottomInfo,
      footerInfo
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_nut_calendar_item = resolveComponent("nut-calendar-item");
  const _component_nut_popup = resolveComponent("nut-popup");
  return _ctx.poppable ? (openBlock(), createBlock(_component_nut_popup, mergeProps({
    key: 0,
    visible: _ctx.visible,
    position: "bottom",
    round: "",
    closeable: ""
  }, _ctx.$attrs, {
    style: { height: "85vh" },
    "lock-scroll": _ctx.lockScroll,
    onClickOverlay: _ctx.closePopup,
    onClickCloseIcon: _ctx.closePopup
  }), {
    default: withCtx(() => [
      createVNode(_component_nut_calendar_item, {
        ref: "calendarRef",
        type: _ctx.type,
        "is-auto-back-fill": _ctx.isAutoBackFill,
        poppable: _ctx.poppable,
        title: _ctx.title,
        "default-value": _ctx.defaultValue,
        "start-date": _ctx.startDate,
        "end-date": _ctx.endDate,
        "confirm-text": _ctx.confirmText,
        "start-text": _ctx.startText,
        "end-text": _ctx.endText,
        "show-today": _ctx.showToday,
        "show-title": _ctx.showTitle,
        "show-sub-title": _ctx.showSubTitle,
        "to-date-animation": _ctx.toDateAnimation,
        "first-day-of-week": _ctx.firstDayOfWeek,
        "disabled-date": _ctx.disabledDate,
        onUpdate: _ctx.update,
        onClose: _ctx.close,
        onChoose: _ctx.choose,
        onSelect: _ctx.select
      }, createSlots({ _: 2 }, [
        _ctx.showTopBtn ? {
          name: "btn",
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, "btn")
          ]),
          key: "0"
        } : void 0,
        _ctx.dayInfo ? {
          name: "day",
          fn: withCtx((date) => [
            renderSlot(_ctx.$slots, "day", {
              date: date.date
            })
          ]),
          key: "1"
        } : void 0,
        _ctx.topInfo ? {
          name: "top-info",
          fn: withCtx((date) => [
            renderSlot(_ctx.$slots, "top-info", {
              date: date.date
            })
          ]),
          key: "2"
        } : void 0,
        _ctx.bottomInfo ? {
          name: "bottom-info",
          fn: withCtx((date) => [
            renderSlot(_ctx.$slots, "bottom-info", {
              date: date.date
            })
          ]),
          key: "3"
        } : void 0,
        _ctx.footerInfo ? {
          name: "footer-info",
          fn: withCtx((date) => [
            renderSlot(_ctx.$slots, "footer-info", {
              date: date.date
            })
          ]),
          key: "4"
        } : void 0
      ]), 1032, ["type", "is-auto-back-fill", "poppable", "title", "default-value", "start-date", "end-date", "confirm-text", "start-text", "end-text", "show-today", "show-title", "show-sub-title", "to-date-animation", "first-day-of-week", "disabled-date", "onUpdate", "onClose", "onChoose", "onSelect"])
    ]),
    _: 3
  }, 16, ["visible", "lock-scroll", "onClickOverlay", "onClickCloseIcon"])) : (openBlock(), createBlock(_component_nut_calendar_item, {
    key: 1,
    ref: "calendarRef",
    type: _ctx.type,
    "is-auto-back-fill": _ctx.isAutoBackFill,
    poppable: _ctx.poppable,
    title: _ctx.title,
    "confirm-text": _ctx.confirmText,
    "start-text": _ctx.startText,
    "end-text": _ctx.endText,
    "default-value": _ctx.defaultValue,
    "start-date": _ctx.startDate,
    "end-date": _ctx.endDate,
    "show-title": _ctx.showTitle,
    "show-sub-title": _ctx.showSubTitle,
    "to-date-animation": _ctx.toDateAnimation,
    "show-today": _ctx.showToday,
    "first-day-of-week": _ctx.firstDayOfWeek,
    "disabled-date": _ctx.disabledDate,
    onUpdate: _ctx.update,
    onClose: _ctx.close,
    onChoose: _ctx.choose,
    onSelect: _ctx.select
  }, createSlots({ _: 2 }, [
    _ctx.showTopBtn ? {
      name: "btn",
      fn: withCtx(() => [
        renderSlot(_ctx.$slots, "btn")
      ]),
      key: "0"
    } : void 0,
    _ctx.dayInfo ? {
      name: "day",
      fn: withCtx((date) => [
        renderSlot(_ctx.$slots, "day", {
          date: date.date
        })
      ]),
      key: "1"
    } : void 0,
    _ctx.topInfo ? {
      name: "top-info",
      fn: withCtx((date) => [
        renderSlot(_ctx.$slots, "top-info", {
          date: date.date
        })
      ]),
      key: "2"
    } : void 0,
    _ctx.bottomInfo ? {
      name: "bottom-info",
      fn: withCtx((date) => [
        renderSlot(_ctx.$slots, "bottom-info", {
          date: date.date
        })
      ]),
      key: "3"
    } : void 0
  ]), 1032, ["type", "is-auto-back-fill", "poppable", "title", "confirm-text", "start-text", "end-text", "default-value", "start-date", "end-date", "show-title", "show-sub-title", "to-date-animation", "show-today", "first-day-of-week", "disabled-date", "onUpdate", "onClose", "onChoose", "onSelect"]));
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index as default
};
