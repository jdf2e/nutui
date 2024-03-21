import { useSlots, ref, onMounted, onUnmounted, watch, nextTick, openBlock, createElementBlock, createElementVNode, normalizeClass, renderSlot, createCommentVNode } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
const { create } = createComponent("barrage");
const _sfc_main = create({
  name: "barrage",
  props: {
    danmu: {
      type: Array,
      default: () => []
    },
    frequency: {
      type: Number,
      default: 500
    },
    speeds: {
      type: Number,
      default: 5e3
    },
    rows: {
      type: Number,
      default: 3
    },
    top: {
      type: Number,
      default: 10
    },
    loop: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const classTime = (/* @__PURE__ */ new Date()).getTime();
    const slotDefault = !!useSlots().default;
    let dmBody = ref(document.createElement("div"));
    let dmContainer = ref(document.createElement("div"));
    let timer = null;
    const danmuList = ref(props.danmu);
    const rows = ref(props.rows);
    const top = ref(props.top);
    const index2 = ref(0);
    const speeds = props.speeds;
    const danmuCWidth = ref(0);
    onMounted(() => {
      init();
      if (slotDefault) {
        document.addEventListener("visibilitychange", function() {
          if (document.visibilityState === "hidden") {
            clearTime();
            index2.value = 0;
            eleSlot("hidden");
          } else if (document.visibilityState === "visible") {
            init();
          }
        });
      }
    });
    onUnmounted(() => {
      danmuList.value = [];
      clearTime();
    });
    const init = () => {
      danmuCWidth.value = dmBody.value.offsetWidth;
      if (slotDefault) {
        eleSlot("init");
      }
      setTimeout(() => {
        var _a;
        (_a = dmBody.value) == null ? void 0 : _a.style.setProperty("--move-distance", `-${danmuCWidth.value}px`);
        run();
      }, 300);
    };
    const eleSlot = (flag) => {
      var _a;
      const list = document.getElementsByClassName("slotBody" + classTime);
      let childrens = ((_a = list == null ? void 0 : list[0]) == null ? void 0 : _a.children) || [];
      const dmList = [];
      if (childrens) {
        Array.from(childrens).forEach((item) => {
          if (flag == "init") {
            item.style.opacity = "0";
            dmList.push(item);
          } else {
            item.classList = "";
            item.style = {};
          }
        });
      }
      if (flag == "init") {
        danmuList.value = dmList;
      }
    };
    const clearTime = () => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    };
    watch(
      () => props.danmu,
      (newValue) => {
        if (props.danmu.length > 0) {
          danmuList.value = [...newValue];
        }
      }
    );
    const add = (word) => {
      const _index = index2.value % danmuList.value.length;
      if (!props.loop && index2.value === danmuList.value.length) {
        danmuList.value.splice(danmuList.value.length, 0, word);
      } else {
        danmuList.value.splice(_index, 0, word);
      }
    };
    const run = () => {
      clearTime();
      timer = setTimeout(() => {
        play();
      }, props.frequency);
    };
    const play = () => {
      var _a;
      const _index = props.loop ? index2.value % danmuList.value.length : index2.value;
      let el = document.createElement(`view`);
      if (slotDefault && typeof danmuList.value[_index] == "object") {
        el = danmuList.value[_index];
        (_a = el == null ? void 0 : el.classList) == null ? void 0 : _a.add("nut-barrage__item");
      } else {
        el.innerHTML = danmuList.value[_index];
        el.classList.add("nut-barrage__item");
        dmContainer.value.appendChild(el);
      }
      nextTick(() => {
        var _a2;
        const height = el.offsetHeight;
        (_a2 = el == null ? void 0 : el.classList) == null ? void 0 : _a2.add("move");
        el.style.animationDuration = `${speeds}ms`;
        el.style.top = _index % rows.value * (height + top.value) + 20 + "px";
        el.style.opacity = "1";
        if (!slotDefault) {
          const width = el.offsetWidth;
          el.style.width = width + 20 + "px";
        }
        el.addEventListener("animationend", () => {
          if (slotDefault) {
            el.classList.remove("move");
          } else {
            dmContainer.value.removeChild(el);
          }
        });
        if (!props.loop && index2.value >= danmuList.value.length - 1) {
          return;
        }
        index2.value++;
        if (index2.value >= danmuList.value.length) {
          index2.value = 0;
        }
        el.removeEventListener("animationend", () => {
        });
        run();
      });
    };
    return { classTime, danmuList, dmBody, dmContainer, add };
  }
});
const _hoisted_1 = {
  ref: "dmBody",
  class: "nut-barrage"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("div", {
      ref: "dmContainer",
      class: normalizeClass(["dmContainer", _ctx.$slots.default && "slotContainer"])
    }, [
      _ctx.$slots.default ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["slotBody", "slotBody" + _ctx.classTime])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2)) : createCommentVNode("", true)
    ], 2)
  ], 512);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index as default
};
