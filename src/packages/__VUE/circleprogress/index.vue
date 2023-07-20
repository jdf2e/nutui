<template>
  <div class="nut-circle-progress" :style="{ height: Number(radius) * 2 + 'px', width: Number(radius) * 2 + 'px' }">
    <svg viewBox="0 0 100 100">
      <defs>
        <linearGradient :id="refRandomId" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop v-for="(item, index) in stop" :key="index" :offset="item.key" :stop-color="item.value"></stop>
        </linearGradient>
      </defs>
      <path class="nut-circle-progress__path" :style="pathStyle" :d="path" fill="none" :stroke-width="strokeWidth">
        >
      </path>
      <path
        class="nut-circle-progress__hover"
        :style="hoverStyle"
        :d="path"
        fill="none"
        :stroke="hoverColor"
        :stroke-linecap="strokeLinecap"
        :stroke-width="strokeWidth"
      ></path>
    </svg>
    <div class="nut-circle-progress__text">
      <slot>
        <div>{{ progress }}%</div>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, PropType } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { isObject } from '@/packages/utils/util';
const { create } = createComponent('circle-progress');
import { CircleProgressStrokeLinecap } from './types';
export interface stopArr {
  key: string;
  value: string;
}

export default create({
  props: {
    progress: {
      type: [Number, String],
      defualt: 0
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
      type: String as PropType<CircleProgressStrokeLinecap>,
      default: 'round'
    },
    color: {
      type: [String, Object],
      default: ''
    },
    pathColor: {
      type: String,
      default: ''
    },
    clockwise: {
      type: Boolean,
      default: true
    }
  },

  setup(props) {
    const refRandomId = Math.random().toString(36).slice(-8);
    const path = computed(() => {
      const isWise = props.clockwise ? 1 : 0;
      return `M 50 50 m 0 -45 a 45 45 0 1 ${isWise} 0 90 a 45 45 0 1, ${isWise} 0 -90`;
    });
    const hoverColor = computed(() => {
      return isObject(props.color) ? `url(#${refRandomId})` : props.color;
    });
    const hoverStyle = computed(() => {
      let perimeter = 283;
      let offset = (perimeter * Number(props.progress)) / 100;
      return {
        stroke: isObject(props.color) ? `url(#${refRandomId})` : props.color,
        strokeDasharray: `${offset}px ${perimeter}px`
      };
    });
    const pathStyle = computed(() => {
      return {
        stroke: props.pathColor
      };
    });
    const stop = computed(() => {
      if (!isObject(props.color)) {
        return;
      }
      let color = props.color;
      const colorArr = Object.keys(color).sort((a, b) => parseFloat(a) - parseFloat(b));
      let stopArr: stopArr[] = [];
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
    });

    return {
      hoverStyle,
      pathStyle,
      path,
      hoverColor,
      stop,
      refRandomId
    };
  }
});
</script>
