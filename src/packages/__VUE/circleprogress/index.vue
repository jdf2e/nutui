<template>
  <div :class="classes" :style="{ height: radius * 2 + 'px', width: radius * 2 + 'px' }">
    <svg viewBox="0 0 100 100">
      <defs>
        <linearGradient :id="refRandomId" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop v-for="(item, index) in stop" :key="index" :offset="item.key" :stop-color="item.value"></stop>
        </linearGradient>
      </defs>
      <path class="nut-circleprogress-path" :style="pathStyle" :d="path" fill="none" :stroke-width="strokeWidth">
        >
      </path>
      <path
        class="nut-circleprogress-hover"
        :style="hoverStyle"
        :d="path"
        fill="none"
        :stroke="hoverColor"
        :stroke-linecap="strokeLinecap"
        :stroke-width="strokeWidth"
      ></path>
    </svg>
    <div class="nut-circleprogress-text">
      <slot></slot>
      <div v-if="!slotDefault">{{ progress }}%</div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, useSlots } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { isObject } from '@/packages/utils/util';
const { componentName, create } = createComponent('circleprogress');
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
    const slotDefault = !!useSlots().default;
    const refRandomId = Math.random().toString(36).slice(-8);
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });
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
    });

    return {
      classes,
      hoverStyle,
      pathStyle,
      path,
      hoverColor,
      stop,
      slotDefault,
      refRandomId
    };
  }
});
</script>
