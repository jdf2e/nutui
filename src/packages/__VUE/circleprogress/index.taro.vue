<template>
  <div :class="classes" :style="{ height: radius * 2 + 'px', width: radius * 2 + 'px' }">
    <div :style="style"></div>
    <div class="nut-circleprogress-text">
      <slot></slot>
      <span v-if="!slotDefault">{{ progress }}%</span>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, ref, watch, useSlots } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('circleprogress');
interface Item {
  key?: string;
  value?: string;
}
export default create({
  props: {
    progress: {
      type: [Number, String],
      required: true
    },
    strokeWidth: {
      type: [Number, String],
      default: 5
    },
    radius: {
      type: [Number, String],
      default: 50
    },
    strokeLinecap: {
      type: String,
      default: 'round'
    },
    color: {
      type: [String, Object],
      default: '#FF673E'
    },
    pathColor: {
      type: String,
      default: '#d9d9d9'
    },
    clockwise: {
      type: Boolean,
      default: true
    }
  },
  emits: ['update:progress'],
  setup(props, { emit }) {
    const slotDefault = !!useSlots().default;
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });
    const currentRate = ref(props.progress);
    const refRandomId = Math.random().toString(36).slice(-8);
    const isObject = (val: unknown): val is Record<any, any> => val !== null && typeof val === 'object';

    const transColor = (color: string | undefined) => {
      return color && color.replace('#', '%23');
    };
    const stop = () => {
      if (!isObject(props.color)) {
        return [];
      }
      let color = props.color;
      const colorArr = Object.keys(color).sort((a, b) => parseFloat(a) - parseFloat(b));

      let stopArr: object[] = [];
      colorArr.map((item) => {
        let obj = {
          key: '',
          value: ''
        };
        obj.key = item;
        obj.value = color[item];
        stopArr.push(obj);
      });
      return stopArr;
    };

    const style = computed(() => {
      let { strokeWidth } = props;

      let stopArr: Array<object> = stop();
      let stopDom: string[] = [];
      if (stopArr) {
        stopArr.map((item: Item) => {
          let obj = '';
          obj = `%3Cstop offset='${item.key}' stop-color='${transColor(item.value)}'/%3E`;
          stopDom.push(obj);
        });
      }
      let perimeter = 283;
      let progress = +currentRate.value;
      let offset = (perimeter * Number(format(parseFloat(progress.toFixed(1))))) / 100;
      const isWise = props.clockwise ? 1 : 0;
      const color = isObject(props.color) ? `url(%23${refRandomId})` : transColor(props.color);
      let d = `M 50 50 m 0 -45 a 45 45 0 1 ${isWise} 0 90 a 45 45 0 1, ${isWise} 0 -90`;
      const pa = `%3Cdefs%3E%3ClinearGradient id='${refRandomId}' x1='100%25' y1='0%25' x2='0%25' y2='0%25'%3E${stopDom}%3C/linearGradient%3E%3C/defs%3E`;
      const path = `%3Cpath d='${d}' stroke-width='${strokeWidth}' stroke='${transColor(
        props.pathColor
      )}' fill='none'/%3E`;
      const path1 = `%3Cpath d='${d}' stroke-width='${strokeWidth}' stroke-dasharray='${offset},${perimeter}' stroke-linecap='round' stroke='${color}' fill='none'/%3E`;

      return {
        background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100'  xmlns='http://www.w3.org/2000/svg'%3E${pa}${path}${path1}%3C/svg%3E")`,
        width: '100%',
        height: '100%',
        transition: ' background-image .3s ease 0s,stroke .3s ease 0s'
      };
    });
    const format = (progress: string | number) => Math.min(Math.max(+progress, 0), 100);

    watch(
      () => props.progress,
      (value, oldvalue) => {
        currentRate.value = Math.min(Math.max(+value, 0), 100);
        emit('update:progress', format(parseFloat(Number(value).toFixed(1))));
      }
    );
    return {
      slotDefault,
      style,
      currentRate,
      refRandomId,
      classes,
      stop
    };
  }
});
</script>
