<template>
  <view :class="classes">
    <template v-if="slots.default">
      <slot></slot>
    </template>
    <template v-else-if="showPlainText">
      <view class="nut-cd-block">{{ plainText }}</view>
    </template>
    <template v-else>
      <template v-if="resttime.d >= 0 && showDays">
        <view class="nut-cd-block">{{ resttime.d }}</view>
        <view class="nut-cd-dot">{{ translate('day') }}</view>
      </template>
      <view class="nut-cd-block">{{ resttime.h }}</view
      ><view class="nut-cd-dot">:</view><view class="nut-cd-block">{{ resttime.m }}</view
      ><view class="nut-cd-dot">:</view><view class="nut-cd-block">{{ resttime.s }}</view>
    </template>
  </view>
</template>
<script lang="ts">
<<<<<<< HEAD
import { toRefs, computed, watch, reactive, onMounted } from 'vue';
import { createComponent } from '../../utils/create';
=======
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
import { createComponent } from '@/packages/utils/create';
>>>>>>> abf7f1ee595464adcf3cc3ec79b1b412b65e52a7
const { componentName, create, translate } = createComponent('countdown');

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
    },
    millisecond: {
      default: false,
      type: Boolean
    }
  },
  components: {},
  emits: ['input', 'on-end', 'on-restart', 'on-paused', 'update:modelValue'],

  setup(props, { emit, slots }) {
    const state = reactive({
      restTime: 0,
      p: 0,
      _curr: 0,
      timer: null
    });

    const resttime = computed(() => {
      const rest = restTimeFun(state.restTime);
      const { d, h, m, s } = rest;
      if (!props.showDays && d > 0) {
        rest.h = fillZero(Number(rest.h) + d * 24);
        rest.d = 0;
      }
      return rest;
    });

    const plainText = computed(() => {
      const { d, h, m, s } = resttime.value;

      return `${d > 0 && props.showDays ? d + translate('day') + h : h}${translate('hour')}${m}${translate(
        'minute'
      )}${s}${translate('second')}`;
    });

    watch(
      () => props.value,
      (value) => {}
    );

    watch(
      () => state.restTime,
      (value) => {
        let tranTime = restTimeFun(value);
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
      const diffTime = curr - start; // 时间差
      state.restTime = end - (start + diffTime); // 倒计时时间
      if (state.timer) clearInterval(state.timer);
      state.timer = null;
      (state.timer as any) = setInterval(() => {
        if (!props.paused) {
          let restTime = end - (Date.now() - state.p + diffTime);
          state.restTime = restTime;
          if (restTime < 0) {
            state.restTime = 0;
            emit('on-end');
            clearInterval(state.timer as any);
          }
        }
      }, delay);
    };

    const fillZero = (v: number | string) => {
      v += '';
      while ((v as string).length < 2) {
        v = '0' + v;
      }
      return v.toString();
    };
    const restTimeFun = (t: number) => {
      const ts = t;
      let rest = {
        d: '--',
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
        const SECOND = 1000;
        const MINUTE = 60 * SECOND;
        const HOUR = 60 * MINUTE;
        const DAY = 24 * HOUR;

        const d = ts >= SECOND ? Math.floor(ts / DAY) : 0;
        const h = Math.floor((ts % DAY) / HOUR);
        const m = Math.floor((ts % HOUR) / MINUTE);
        const s = Math.floor((ts % MINUTE) / SECOND);
        const ms = Math.floor(ts % SECOND);

        if (d >= 0) rest.d = d + '';
        if (h >= 0) rest.h = fillZero(h);
        if (m >= 0) rest.m = fillZero(m);
        if (s >= 0) rest.s = fillZero(s);
      }
      return rest;
    };

    onMounted(() => {
      initTimer();
    });

    return {
      ...toRefs(props),
      slots,
      classes,
      getTimeStamp,
      initTimer,
      resttime,
      plainText,
      translate
    };
  }
});
</script>
