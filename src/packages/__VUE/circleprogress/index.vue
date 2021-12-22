<template>
  <div :class="classes" :style="{ height: option.size + 'px', width: option.size + 'px' }">
    <svg :height="option.size" :width="option.size" x-mlns="http://www.w3.org/200/svg">
      <circle
        :r="option.radius"
        :cx="option.cx"
        :cy="option.cy"
        :stroke="option.backColor"
        :stroke-width="option.strokeOutWidth"
        fill="none"
      />
      <circle
        :r="option.radius"
        :cx="option.cx"
        :cy="option.cy"
        :stroke="option.progressColor"
        :stroke-dasharray="arcLength"
        :stroke-width="strokeInnerWidth"
        fill="none"
        :transform="option.startPosition"
        stroke-linecap="round"
        style="transition: stroke-dasharray 0.6s ease 0s, stroke 0.6s ease 0s"
      />
    </svg>
    <div class="nut-circleprogress-content">
      <template v-if="!isAuto">
        <slot>{{ progress }}%</slot>
      </template>
      <template v-else><slot></slot></template>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { createComponent } from '../../utils/create';
const { componentName, create } = createComponent('circleprogress');
export default create({
  props: {
    progress: {
      type: [Number, String],
      required: true
    },
    strokeInnerWidth: {
      type: [Number, String],
      default: 10
    },
    isAuto: {
      tyep: Boolean,
      default: false
    },
    progressOption: {
      type: Object,
      default: () => {}
    }
  },
  setup(props, { emit }) {
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });
    const option = computed(() => {
      // 所有进度条的可配置项
      let baseOption = {
        radius: 50,
        strokeOutWidth: 10,
        backColor: '#d9d9d9',
        progressColor: 'red',
        cy: 1,
        cx: 1,
        size: 1,
        startPosition: ''
      };
      Object.assign(baseOption, props.progressOption);
      // 圆心位置自动生成
      baseOption.cy = baseOption.cx = baseOption.radius + baseOption.strokeOutWidth;
      baseOption.size = (baseOption.radius + baseOption.strokeOutWidth) * 2;
      baseOption.startPosition = 'rotate(-90,' + baseOption.cx + ',' + baseOption.cy + ')';
      return baseOption;
    });
    const arcLength = computed(() => {
      let circleLength = Math.floor(2 * Math.PI * option.value.radius);
      let progressLength = ((props as any).progress / 100) * circleLength;
      return `${progressLength},${circleLength}`;
    });

    return {
      classes,
      option,
      arcLength
    };
  }
});
</script>
