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
import { ref, reactive, onMounted, watch, provide, toRefs, resolveComponent, openBlock, createElementBlock, createElementVNode, toDisplayString, createVNode, withCtx, createCommentVNode, normalizeClass, createBlock, renderSlot } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { Service } from "@nutui/icons-vue";
import NutRange from "../range/Range.js";
import { A as AUDIO_KEY } from "../types-BMA1Y94E.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
const { create } = createComponent("audio");
const _sfc_main = create({
  props: {
    url: {
      type: String,
      default: ""
    },
    // 静音
    muted: {
      type: Boolean,
      default: false
    },
    // 自动播放
    autoplay: {
      type: Boolean,
      default: false
    },
    // 循环播放
    loop: {
      type: Boolean,
      default: false
    },
    // 是否预加载音频
    preload: {
      type: String,
      default: "auto"
    },
    /* 总时长秒数 */
    second: {
      type: Number,
      default: 0
    },
    // 展示的形式   controls 控制面板   progress 进度条  icon 图标 none 自定义
    type: {
      type: String,
      default: "progress"
    }
  },
  components: {
    Service,
    NutRange
  },
  emits: ["fastBack", "play", "forward", "ended", "changeProgress", "mute", "canPlay"],
  setup(props, { emit, slots }) {
    const audioRef = ref(null);
    const audioData = reactive({
      currentTime: 0,
      currentDuration: "00:00:00",
      percent: 0,
      duration: "00:00:00",
      second: 0,
      hanMuted: props.muted,
      playing: props.autoplay,
      handPlaying: false
    });
    onMounted(() => {
      var arr = ["webkitVisibilityState", "visibilitychange"];
      try {
        for (let i = 0; i < arr.length; i++) {
          document.addEventListener(arr[i], () => {
            if (document.hidden) {
              audioRef.value.pause();
            } else {
              if (audioData.playing) {
                setTimeout(() => {
                  audioRef.value.play();
                }, 200);
              }
            }
          });
        }
      } catch (e) {
        console.log(e.message);
      }
    });
    const onCanplay = (e) => {
      const audioR = audioRef.value;
      if (props.autoplay) {
        if (audioR && audioR.paused) {
          audioR.play();
        }
      }
      audioData.second = audioR.duration;
      audioData.duration = formatSeconds(audioR.duration);
      emit("canPlay", e);
    };
    const onTimeupdate = (e) => {
      audioData.currentTime = parseInt(e.target.currentTime);
    };
    const fastBack = () => {
      if (audioData.currentTime > 0) {
        audioData.currentTime--;
      }
      audioRef.value.currentTime = audioData.currentTime;
      emit("fastBack", audioData.currentTime);
    };
    const changeStatus = () => {
      const audioR = audioRef.value;
      if (audioData.playing) {
        audioR.pause();
        audioData.handPlaying = false;
      } else {
        audioR.play();
        audioData.handPlaying = true;
      }
      audioData.playing = !audioData.playing;
      emit("play", audioData.playing);
    };
    const forward = () => {
      audioData.currentTime++;
      audioRef.value.currentTime = audioData.currentTime;
      emit("forward", audioData.currentTime);
    };
    const handle = (val) => {
      audioData.currentDuration = formatSeconds(val);
      audioData.percent = val / audioData.second * 100;
    };
    const audioEnd = () => {
      audioData.playing = false;
      emit("ended");
    };
    const progressChange = (val) => {
      const ar = audioRef.value;
      ar.currentTime = audioData.second * val / 100;
      emit("changeProgress", ar.currentTime);
    };
    const handleMute = () => {
      audioData.hanMuted = !audioData.hanMuted;
      emit("mute", audioData.hanMuted);
    };
    const formatSeconds = (value) => {
      if (!value) {
        return "00:00:00";
      }
      let time = parseInt(value);
      let hours = Math.floor(time / 3600);
      let minutes = Math.floor((time - hours * 3600) / 60);
      let seconds = time - hours * 3600 - minutes * 60;
      let result = "";
      result += ("0" + hours.toString()).slice(-2) + ":";
      result += ("0" + minutes.toString()).slice(-2) + ":";
      result += ("0" + seconds.toString()).slice(-2);
      return result;
    };
    watch(
      () => audioData.currentTime,
      (value) => {
        handle(value);
      }
    );
    provide(AUDIO_KEY, {
      children: [],
      props,
      audioData,
      handleMute,
      forward,
      fastBack,
      changeStatus
    });
    return __spreadProps(__spreadValues(__spreadValues({}, toRefs(props)), toRefs(audioData)), {
      audioRef,
      fastBack,
      forward,
      changeStatus,
      progressChange,
      audioEnd,
      onTimeupdate,
      handleMute,
      onCanplay,
      slots
    });
  }
});
const _hoisted_1 = { class: "nut-audio" };
const _hoisted_2 = {
  key: 0,
  class: "nut-audio__progress"
};
const _hoisted_3 = { class: "nut-audio__time" };
const _hoisted_4 = { class: "nut-audio__bar" };
const _hoisted_5 = /* @__PURE__ */ createElementVNode("div", { class: "nut-audio__button--custom" }, null, -1);
const _hoisted_6 = { class: "nut-audio__time" };
const _hoisted_7 = {
  key: 1,
  class: "nut-audio__icon"
};
const _hoisted_8 = ["controls", "src", "preload", "autoplay", "loop", "muted"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_nut_range = resolveComponent("nut-range");
  const _component_Service = resolveComponent("Service");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _ctx.type == "progress" ? (openBlock(), createElementBlock("div", _hoisted_2, [
      createElementVNode("div", _hoisted_3, toDisplayString(_ctx.currentDuration), 1),
      createElementVNode("div", _hoisted_4, [
        createVNode(_component_nut_range, {
          modelValue: _ctx.percent,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.percent = $event),
          "hidden-range": "",
          "inactive-color": "#cccccc",
          "active-color": "#fa2c19",
          onChange: _ctx.progressChange
        }, {
          button: withCtx(() => [
            _hoisted_5
          ]),
          _: 1
        }, 8, ["modelValue", "onChange"])
      ]),
      createElementVNode("div", _hoisted_6, toDisplayString(_ctx.duration), 1)
    ])) : createCommentVNode("", true),
    _ctx.type == "icon" ? (openBlock(), createElementBlock("div", _hoisted_7, [
      createElementVNode("div", {
        class: normalizeClass(["nut-audio__icon--box", _ctx.playing ? "nut-audio__icon--play" : "nut-audio__icon--stop"]),
        onClick: _cache[1] || (_cache[1] = (...args) => _ctx.changeStatus && _ctx.changeStatus(...args))
      }, [
        _ctx.playing ? (openBlock(), createBlock(_component_Service, {
          key: 0,
          class: "nut-icon-am-rotate nut-icon-am-infinite"
        })) : (openBlock(), createBlock(_component_Service, { key: 1 }))
      ], 2)
    ])) : createCommentVNode("", true),
    _ctx.type == "none" ? (openBlock(), createElementBlock("div", {
      key: 2,
      onClick: _cache[2] || (_cache[2] = (...args) => _ctx.changeStatus && _ctx.changeStatus(...args))
    }, [
      renderSlot(_ctx.$slots, "default")
    ])) : createCommentVNode("", true),
    _ctx.type != "none" ? renderSlot(_ctx.$slots, "default", { key: 3 }) : createCommentVNode("", true),
    createElementVNode("audio", {
      ref: "audioRef",
      class: "audioMain",
      controls: _ctx.type == "controls",
      src: _ctx.url,
      preload: _ctx.preload,
      autoplay: _ctx.autoplay,
      loop: _ctx.loop,
      muted: _ctx.hanMuted,
      onTimeupdate: _cache[3] || (_cache[3] = (...args) => _ctx.onTimeupdate && _ctx.onTimeupdate(...args)),
      onCanplay: _cache[4] || (_cache[4] = (...args) => _ctx.onCanplay && _ctx.onCanplay(...args)),
      onEnded: _cache[5] || (_cache[5] = (...args) => _ctx.audioEnd && _ctx.audioEnd(...args))
    }, null, 40, _hoisted_8)
  ]);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index as default
};
