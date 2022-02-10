<template>
  <view :class="classes" @click="handleClick">
    <template v-if="slots.default">
      <slot></slot>
    </template>
    <template v-else-if="showPlainText">
      <view class="nut-cd-block">{{ plainText }}</view>
    </template>
    <template v-else>
      <template v-if="resttime.d >= 0 && showDays">
        <view class="nut-cd-block">{{ resttime.d }}</view>
        <view class="nut-cd-dot">天</view>
      </template>
      <view class="nut-cd-block">{{ resttime.h }}</view
      ><view class="nut-cd-dot">:</view><view class="nut-cd-block">{{ resttime.m }}</view
      ><view class="nut-cd-dot">:</view><view class="nut-cd-block">{{ resttime.s }}</view>
    </template>
  </view>
</template>
<script lang="ts">
import {
  toRefs,
  onMounted,
  onUnmounted,
  reactive,
  computed,
  CSSProperties,
  onActivated,
  onDeactivated,
  ref,
  watch,
  vModelText
} from 'vue';
import { createComponent } from '../../utils/create';
const { componentName, create } = createComponent('countdown');

export default create({
  props: {
    modelValue: {
      type: Object,
      default: () => {
        return {};
      }
    },
    paused: {
      default: false,
      type: Boolean
    },
    showDays: {
      default: false,
      type: Boolean
    },
    showPlainText: {
      default: false,
      type: Boolean
    },
    startTime: {
      // 可以是服务器当前时间
      type: [Number, String],
      validator(v) {
        const dateStr = new Date(v).toString().toLowerCase();
        return dateStr !== 'invalid date';
      }
    },
    endTime: {
      type: [Number, String],
      validator(v) {
        const dateStr = new Date(v).toString().toLowerCase();
        return dateStr !== 'invalid date';
      }
    }
  },
  components: {},
  emits: ['input', 'on-end', 'on-restart', 'on-paused'],

  setup(props, { emit, slots }) {
    // console.log('componentName', componentName);

    const state = reactive({
      restTime: 0,
      p: 0,
      _curr: 0,
      timer: null
    });

    const resttime = computed(() => {
      const rest = restTime(state.restTime);
      const { d, h, m, s } = rest;
      if (!props.showDays && d > 0) {
        rest.h = fill2(Number(rest.h) + d * 24);
        rest.d = 0;
      }
      return rest;
    });

    const plainText = computed(() => {
      const { d, h, m, s } = resttime.value;

      return `${d > 0 && props.showDays ? d + '天' + h : h}小时${m}分${s}秒`;
    });

    watch(
      () => props.value,
      (value) => {}
    );

    watch(
      () => state.restTime,
      (value) => {
        let tranTime = restTime(value);
        emit('update:modelValue', tranTime);
        emit('input', tranTime);
      }
    );

    watch(
      () => props.paused,
      (v, ov) => {
        if (!ov) {
          state._curr = getTimeStamp();
          emit('on-paused', state.restTime);
        } else {
          state.p += getTimeStamp() - state._curr;
          emit('on-restart', state.restTime);
        }
      }
    );

    watch(
      () => props.endTime,
      (value) => {
        initTimer();
      }
    );

    watch(
      () => props.startTime,
      (value) => {
        initTimer();
      }
    );

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    const getTimeStamp = (timeStr?: string | number) => {
      if (!timeStr) return Date.now();
      let t = timeStr;
      t = t > 0 ? +t : t.toString().replace(/\-/g, '/');
      return new Date(t).getTime();
    };

    const initTimer = () => {
      const delay = 1000;
      const curr = Date.now();
      const start = getTimeStamp(props.startTime || curr);
      const end = getTimeStamp(props.endTime || curr);
      const diffTime = curr - start;

      state.restTime = end - (start + diffTime);
      (state.timer as any) = setInterval(() => {
        if (!props.paused) {
          let restTime = end - (Date.now() - state.p + diffTime);
          state.restTime = restTime;
          if (restTime < delay) {
            state.restTime = 0;
            emit('on-end');
            clearInterval(state.timer as any);
          }
        } else {
          // 暂停
        }
      }, delay);
    };

    const fill2 = (v: any) => {
      v += '';
      while (v.length < 2) {
        v = '0' + v;
      }
      return v;
    };
    const restTime = (t: any) => {
      const ts = t;
      let rest = {
        d: '-',
        h: '--',
        m: '--',
        s: '--'
      };
      if (ts === 0) {
        rest = {
          d: '0',
          h: '00',
          m: '00',
          s: '00'
        };
      }
      if (ts) {
        const ds = 24 * 60 * 60 * 1000;
        const hs = 60 * 60 * 1000;
        const ms = 60 * 1000;

        const d = ts >= ds ? parseInt(ts / ds) : 0;
        const h = ts - d * ds >= hs ? parseInt((ts - d * ds) / hs) : 0;
        const m = ts - d * ds - h * hs >= ms ? parseInt((ts - d * ds - h * hs) / ms) : 0;
        const s = Math.round((ts - d * ds - h * hs - m * ms) / 1000);

        if (d >= 0) rest.d = d + '';
        if (h >= 0) rest.h = fill2(h);
        if (m >= 0) rest.m = fill2(m);
        if (s >= 0) rest.s = fill2(s);
      }
      return rest;
    };

    initTimer();

    return {
      ...toRefs(props),
      slots,
      classes,
      getTimeStamp,
      initTimer,
      resttime,
      plainText
    };
  }
});
</script>
