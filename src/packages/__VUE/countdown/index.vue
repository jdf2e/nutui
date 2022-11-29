<template>
  <view :class="classes">
    <template v-if="slots.default">
      <slot></slot>
    </template>
    <template v-else>
      <view class="nut-cd-block" v-html="renderTime"></view>
    </template>
  </view>
</template>
<script lang="ts">
import { toRefs, computed, watch, reactive, onBeforeMount, onMounted } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { getTimeStamp } from './util';
import { padZero } from '@/packages/utils/util';
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
    // 是否开启毫秒
    millisecond: {
      default: false,
      type: Boolean
    },
    // 时间格式化
    format: {
      type: String,
      default: 'HH:mm:ss'
    },
    autoStart: {
      type: Boolean,
      default: true
    },

    // 倒计时时长，单位毫秒
    time: {
      type: [Number, String],
      default: 0
    }
  },
  emits: ['input', 'on-end', 'on-restart', 'on-paused', 'update:modelValue'],

  setup(props: any, { emit, slots }) {
    const state = reactive({
      restTime: 0, // 倒计时剩余时间时间
      timer: null,
      counting: !props.paused && props.autoStart, // 是否处于倒计时中
      handleEndTime: Date.now(), // 最终截止时间
      diffTime: 0 // 设置了 startTime 时，与 date.now() 的差异
    });

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    const renderTime = computed(() => {
      return formatRemainTime(state.restTime);
    });

    // 倒计时 interval
    const initTime = () => {
      state.handleEndTime = props.endTime;
      state.diffTime = Date.now() - getTimeStamp(props.startTime); // 时间差
      if (!state.counting) state.counting = true;
      tick();
    };

    const tick = () => {
      if (window !== undefined) {
        (state.timer as any) = requestAnimationFrame(() => {
          if (state.counting) {
            const currentTime = Date.now() - state.diffTime;
            const remainTime = Math.max(state.handleEndTime - currentTime, 0);

            state.restTime = remainTime;

            if (!remainTime) {
              state.counting = false;
              pause();
              emit('on-end');
            }

            if (remainTime > 0) {
              tick();
            }
          }
        });
      }
    };

    // 将倒计时剩余时间格式化   参数： t  时间戳  type custom 自定义类型
    const formatRemainTime = (t: number, type?: string) => {
      const ts = t;
      let rest = {
        d: 0,
        h: 0,
        m: 0,
        s: 0,
        ms: 0
      };

      const SECOND = 1000;
      const MINUTE = 60 * SECOND;
      const HOUR = 60 * MINUTE;
      const DAY = 24 * HOUR;

      if (ts > 0) {
        rest.d = ts >= SECOND ? Math.floor(ts / DAY) : 0;
        rest.h = Math.floor((ts % DAY) / HOUR);
        rest.m = Math.floor((ts % HOUR) / MINUTE);
        rest.s = Math.floor((ts % MINUTE) / SECOND);
        rest.ms = Math.floor(ts % SECOND);
      }

      return type == 'custom' ? rest : parseFormat({ ...rest });
    };

    const parseFormat = (time: { d: number; h: number; m: number; s: number; ms: number }) => {
      let { d, h, m, s, ms } = time;
      let format = props.format;

      if (format.includes('DD')) {
        format = format.replace('DD', padZero(d));
      } else {
        h += Number(d) * 24;
      }

      if (format.includes('HH')) {
        format = format.replace('HH', padZero(h));
      } else {
        m += Number(h) * 60;
      }

      if (format.includes('mm')) {
        format = format.replace('mm', padZero(m));
      } else {
        s += Number(m) * 60;
      }

      if (format.includes('ss')) {
        format = format.replace('ss', padZero(s));
      } else {
        ms += Number(s) * 1000;
      }

      if (format.includes('S')) {
        const msC = padZero(ms, 3).toString();

        if (format.includes('SSS')) {
          format = format.replace('SSS', msC);
        } else if (format.includes('SS')) {
          format = format.replace('SS', msC.slice(0, 2));
        } else if (format.includes('S')) {
          format = format.replace('SS', msC.slice(0, 1));
        }
      }
      return format;
    };

    // 开始
    const start = () => {
      if (!state.counting && !props.autoStart) {
        state.counting = true;
        state.handleEndTime = Date.now() + Number(state.restTime);
        tick();
        emit('on-restart', state.restTime);
      }
    };
    // 暂定
    const pause = () => {
      cancelAnimationFrame(state.timer as any);
      state.counting = false;
      emit('on-paused', state.restTime);
    };

    //重置
    const reset = () => {
      if (!props.autoStart) {
        pause();
        state.restTime = props.time;
      }
    };

    onBeforeMount(() => {
      if (props.autoStart) {
        initTime();
      } else {
        state.restTime = props.time;
      }
    });

    watch(
      () => state.restTime,
      (value) => {
        let tranTime = formatRemainTime(value, 'custom');
        emit('update:modelValue', tranTime);
        emit('input', tranTime);
      }
    );

    watch(
      () => props.paused,
      (v, ov) => {
        if (!ov) {
          if (state.counting) {
            pause();
          }
        } else {
          if (!state.counting) {
            state.counting = true;
            state.handleEndTime = Date.now() + Number(state.restTime);
            tick();
          }
          emit('on-restart', state.restTime);
        }
      }
    );

    watch(
      () => props.endTime,
      (value) => {
        initTime();
      }
    );

    watch(
      () => props.startTime,
      (value) => {
        initTime();
      }
    );

    return {
      ...toRefs(props),
      slots,
      classes,
      start,
      pause,
      renderTime,
      translate,
      reset
    };
  }
});
</script>
