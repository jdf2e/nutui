var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { h, ref, reactive, computed, watch, onMounted, onActivated, onDeactivated, onUnmounted, toRefs, resolveComponent, openBlock, createElementBlock, withDirectives, normalizeClass, normalizeStyle, renderSlot, createVNode, createCommentVNode, createTextVNode, createElementVNode, toDisplayString, withModifiers, vShow, Fragment, renderList, createBlock } from "vue";
import { Notice, CircleClose } from "@nutui/icons-vue-taro";
import { c as createComponent } from "../component-DQf3CENX.js";
import { r as renderIcon } from "../renderIcon-CfE94nuJ.js";
import { p as pxCheck } from "../pxCheck-DN6FYV6q.js";
import Taro from "@tarojs/taro";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
const { create } = createComponent("noticebar");
const _sfc_main = create({
  props: {
    direction: {
      type: String,
      default: "across"
    },
    list: {
      type: Array,
      default: () => []
    },
    standTime: {
      type: Number,
      default: 1e3
    },
    complexAm: {
      type: Boolean,
      default: false
    },
    height: {
      type: Number,
      default: 40
    },
    text: {
      type: String,
      default: ""
    },
    closeMode: {
      type: Boolean,
      default: false
    },
    wrapable: {
      type: Boolean,
      default: false
    },
    leftIcon: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: ""
    },
    background: {
      type: String,
      default: ""
    },
    delay: {
      type: [String, Number],
      default: 1
    },
    scrollable: {
      type: Boolean,
      default: null
    },
    speed: {
      type: Number,
      default: 50
    }
  },
  components: {
    ScrollItem: function(props) {
      props.item.props.style = props.style;
      return h(props.item);
    },
    Notice,
    CircleClose
  },
  emits: ["click", "close", "acrossEnd"],
  setup(props, { emit, slots }) {
    const wrap = ref(null);
    const content = ref(null);
    const state = reactive({
      wrapWidth: 0,
      firstRound: true,
      duration: 0,
      offsetWidth: 0,
      showNoticebar: true,
      animationClass: "",
      animate: false,
      scrollList: [],
      distance: 0,
      timer: null,
      keepAlive: false,
      isCanScroll: null,
      showNotica: true,
      id: Math.round(Math.random() * 1e5)
    });
    const isEllipsis = computed(() => {
      if (state.isCanScroll == null) {
        return false;
      } else {
        return !state.isCanScroll && !props.wrapable;
      }
    });
    const wrapContentClass = computed(() => {
      return {
        "nut-noticebar__page-wrap-content": true,
        "nut-ellipsis": isEllipsis.value,
        [`content${state.id}`]: true,
        [state.animationClass]: true
      };
    });
    const barStyle = computed(() => {
      let style = {};
      props.color && (style.color = props.color);
      props.background && (style.background = props.background);
      if (props.direction == "vertical") {
        style.height = `${props.height}px`;
      }
      return style;
    });
    const contentStyle = computed(() => {
      return {
        animationDelay: (state.firstRound ? props.delay : 0) + "s",
        animationDuration: state.duration + "s",
        transform: `translateX(${state.firstRound ? 0 : state.wrapWidth + "px"})`
      };
    });
    const horseLampStyle = computed(() => {
      let styles = {};
      if (props.complexAm) {
        styles = {
          transform: `translateY(${state.distance}px)`
        };
      } else {
        if (state.animate) {
          styles = {
            transition: `all ${~~(props.height / props.speed / 4)}s`,
            "margin-top": `-${props.height}px`
          };
        }
      }
      return styles;
    });
    watch(
      () => props.text,
      () => {
        initScrollWrap();
      }
    );
    watch(
      () => props.list,
      (value) => {
        state.scrollList = [].concat(value);
      }
    );
    const getRect = (selector) => {
      return new Promise((resolve) => {
        Taro.createSelectorQuery().select(selector).boundingClientRect().exec((rect = []) => {
          resolve(rect[0]);
        });
      });
    };
    const initScrollWrap = () => {
      if (state.showNoticebar == false) {
        return;
      }
      setTimeout(() => {
        if (!wrap.value || !content.value) {
          return;
        }
        let wrapWidth = 0;
        let offsetWidth = 0;
        getRect(`.wrap${state.id}`).then((rect) => {
          if ((rect == null ? void 0 : rect.width) > 0) wrapWidth = rect.width;
          getRect(`.content${state.id}`).then((rect2) => {
            if ((rect2 == null ? void 0 : rect2.width) > 0) offsetWidth = rect2.width;
            state.isCanScroll = props.scrollable == null ? offsetWidth > wrapWidth : props.scrollable;
            if (state.isCanScroll) {
              state.wrapWidth = wrapWidth;
              state.offsetWidth = offsetWidth;
              state.duration = offsetWidth / props.speed;
              state.animationClass = "play";
            } else {
              state.animationClass = "";
            }
          });
        });
      }, 100);
    };
    const handleClick = (event) => {
      emit("click", event);
    };
    const onClickIcon = (event) => {
      if (props.closeMode) {
        state.showNoticebar = !props.closeMode;
      }
      emit("close", event);
    };
    const onAnimationEnd = (event) => {
      state.firstRound = false;
      emit("acrossEnd", event);
      setTimeout(() => {
        state.duration = (state.offsetWidth + state.wrapWidth) / props.speed;
        state.animationClass = "play-infinite";
      }, 0);
    };
    const startRollEasy = () => {
      showhorseLamp();
      state.timer = setInterval(showhorseLamp, ~~(props.height / props.speed / 4) * 1e3 + props.standTime);
    };
    const showhorseLamp = () => {
      state.animate = true;
      setTimeout(
        () => {
          state.scrollList.push(state.scrollList[0]);
          state.scrollList.shift();
          state.animate = false;
        },
        ~~(props.height / props.speed / 4) * 1e3
      );
    };
    const startRoll = () => {
      state.timer = setInterval(
        () => {
          let chunk = 100;
          for (let i = 0; i < chunk; i++) {
            scroll(i, i < chunk - 1 ? false : true);
          }
        },
        props.standTime + 100 * props.speed
      );
    };
    const scroll = (n, last) => {
      setTimeout(() => {
        state.distance -= props.height / 100;
        if (last) {
          state.scrollList.push(state.scrollList[0]);
          state.scrollList.shift();
          state.distance = 0;
        }
      }, n * props.speed);
    };
    const go = (item) => {
      emit("click", item);
    };
    const handleClickIcon = () => {
      if (props.closeMode) {
        state.showNoticebar = !props.closeMode;
      }
      emit("close", state.scrollList[0]);
    };
    onMounted(() => {
      if (props.direction == "vertical") {
        if (slots.default) {
          updateSlotChild();
          watchSlots();
        } else {
          state.scrollList = [].concat(props.list);
        }
        setTimeout(() => {
          props.complexAm ? startRoll() : startRollEasy();
        }, props.standTime);
      } else {
        initScrollWrap();
      }
    });
    const updateSlotChild = () => {
      if (slots.default) state.scrollList = [].concat(slots.default()[0].children);
    };
    const watchSlots = () => {
      setTimeout(() => {
        var observer = new MutationObserver(() => {
          state.showNotica = false;
          setTimeout(() => {
            state.showNotica = true;
          });
          updateSlotChild();
        });
        const ele = document.getElementsByClassName("nut-noticebar-custom-item")[0];
        if (ele) {
          observer.observe(ele, {
            childList: true,
            subtree: true
          });
        }
      }, 100);
    };
    onActivated(() => {
      if (state.keepAlive) {
        state.keepAlive = false;
      }
    });
    onDeactivated(() => {
      state.keepAlive = true;
      clearInterval(state.timer);
    });
    onUnmounted(() => {
      clearInterval(state.timer);
    });
    return __spreadProps(__spreadValues({}, toRefs(state)), {
      isEllipsis,
      barStyle,
      contentStyle,
      horseLampStyle,
      wrap,
      content,
      handleClick,
      onClickIcon,
      onAnimationEnd,
      go,
      handleClickIcon,
      slots,
      pxCheck,
      wrapContentClass,
      renderIcon
    });
  }
});
const _hoisted_1 = { class: "nut-noticebar" };
const _hoisted_2 = {
  key: 0,
  class: "nut-noticebar__page-lefticon"
};
const _hoisted_3 = { class: "showNotica" };
const _hoisted_4 = { class: "nut-noticebar-custom-item" };
const _hoisted_5 = ["onClick"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Notice = resolveComponent("Notice");
  const _component_CircleClose = resolveComponent("CircleClose");
  const _component_ScrollItem = resolveComponent("ScrollItem");
  return openBlock(), createElementBlock("view", _hoisted_1, [
    _ctx.direction == "across" ? withDirectives((openBlock(), createElementBlock("view", {
      key: 0,
      class: normalizeClass(["nut-noticebar__page", {
        "nut-noticebar__page--withicon": _ctx.closeMode,
        "nut-noticebar__page--close": _ctx.closeMode,
        "nut-noticebar__page--wrapable": _ctx.wrapable
      }]),
      style: normalizeStyle(_ctx.barStyle),
      onClick: _cache[3] || (_cache[3] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
    }, [
      _ctx.leftIcon ? (openBlock(), createElementBlock("view", _hoisted_2, [
        renderSlot(_ctx.$slots, "left-icon", {}, () => [
          createVNode(_component_Notice, { size: "16px" })
        ])
      ])) : createCommentVNode("", true),
      createTextVNode(),
      createElementVNode("view", {
        ref: "wrap",
        class: normalizeClass(`nut-noticebar__page-wrap wrap${_ctx.id}`)
      }, [
        createElementVNode("view", {
          ref: "content",
          class: normalizeClass(_ctx.wrapContentClass),
          style: normalizeStyle(_ctx.contentStyle),
          onAnimationend: _cache[0] || (_cache[0] = (...args) => _ctx.onAnimationEnd && _ctx.onAnimationEnd(...args)),
          onWebkitAnimationEnd: _cache[1] || (_cache[1] = (...args) => _ctx.onAnimationEnd && _ctx.onAnimationEnd(...args))
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(_ctx.text), 1)
          ])
        ], 38)
      ], 2),
      createTextVNode(),
      _ctx.closeMode || _ctx.$slots["right-icon"] ? (openBlock(), createElementBlock("view", {
        key: 1,
        class: "nut-noticebar__page-righticon",
        onClick: _cache[2] || (_cache[2] = withModifiers((...args) => _ctx.onClickIcon && _ctx.onClickIcon(...args), ["stop"]))
      }, [
        renderSlot(_ctx.$slots, "right-icon", {}, () => [
          createVNode(_component_CircleClose)
        ])
      ])) : createCommentVNode("", true)
    ], 6)), [
      [vShow, _ctx.showNoticebar]
    ]) : createCommentVNode("", true),
    createTextVNode(),
    _ctx.scrollList.length > 0 && _ctx.direction == "vertical" && _ctx.showNoticebar ? (openBlock(), createElementBlock("view", {
      key: 1,
      class: "nut-noticebar__vertical",
      style: normalizeStyle(_ctx.barStyle)
    }, [
      _ctx.slots.default ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createElementVNode("view", {
          class: "nut-noticebar__vertical-list",
          style: normalizeStyle(_ctx.horseLampStyle)
        }, [
          createElementVNode("view", _hoisted_3, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.scrollList, (item, index) => {
              return openBlock(), createBlock(_component_ScrollItem, {
                key: index,
                style: normalizeStyle({ height: _ctx.height + "px", "line-height": _ctx.height + "px" }),
                item
              }, null, 8, ["style", "item"]);
            }), 128))
          ])
        ], 4),
        createTextVNode(),
        createElementVNode("view", _hoisted_4, [
          renderSlot(_ctx.$slots, "default")
        ])
      ], 64)) : (openBlock(), createElementBlock("ul", {
        key: 1,
        class: "nut-noticebar__vertical-list",
        style: normalizeStyle(_ctx.horseLampStyle)
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.scrollList, (item, index) => {
          return openBlock(), createElementBlock("li", {
            key: index,
            class: "nut-noticebar__vertical-item",
            style: normalizeStyle({ height: _ctx.pxCheck(_ctx.height), lineHeight: _ctx.pxCheck(_ctx.height) }),
            onClick: ($event) => _ctx.go(item)
          }, toDisplayString(item), 13, _hoisted_5);
        }), 128))
      ], 4)),
      createTextVNode(),
      createElementVNode("view", {
        class: "go",
        onClick: _cache[4] || (_cache[4] = ($event) => _ctx.handleClickIcon())
      }, [
        renderSlot(_ctx.$slots, "right-icon", {}, () => [
          _ctx.closeMode ? (openBlock(), createBlock(_component_CircleClose, {
            key: 0,
            color: _ctx.color,
            size: "11px"
          }, null, 8, ["color"])) : createCommentVNode("", true)
        ])
      ])
    ], 4)) : createCommentVNode("", true)
  ]);
}
const index_taro = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index_taro as default
};
