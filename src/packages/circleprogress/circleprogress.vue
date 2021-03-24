<template>
  <div class="nut-circleprogress" :style="{ height: option.size + 'px', width: option.size + 'px' }">
    <svg :height="option.size" :width="option.size" x-mlns="http://www.w3.org/200/svg">
      <circle :r="option.radius" :cx="option.cx" :cy="option.cy" :stroke="option.backColor" :stroke-width="option.strokeOutWidth" fill="none" />
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
        style="transition: stroke-dasharray 0.6s ease 0s, stroke 0.6s ease 0s;"
      />
    </svg>
    <div class="nut-circleprogress-content">
      <template v-if="!isAuto"
        ><slot>{{ progress }}%</slot></template
      >
      <template v-else><slot></slot></template>
    </div>
  </div>
</template>
<script>
export default {
  name: 'nut-circleprogress',
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
  data() {
    return {};
  },
  computed: {
    arcLength() {
      let circleLength = Math.floor(2 * Math.PI * this.option.radius);
      let progressLength = (this.progress / 100) * circleLength;
      // console.log(this.progress,progressLength)
      return `${progressLength},${circleLength}`;
    },
    // :stroke-dashoffset="dashOffset"
    // dashOffset() {
    //   // 偏移初始值为dashArray长度，随着percent增大逐渐减小
    //   return (1 - this.progress) *Math.floor(2 * Math.PI * this.option.radius);
    // },
    option() {
      // 所有进度条的可配置项
      let baseOption = {
        radius: 50,
        strokeOutWidth: 10,
        backColor: '#d9d9d9',
        progressColor: 'red'
      };
      Object.assign(baseOption, this.progressOption);
      // 圆心位置自动生成
      baseOption.cy = baseOption.cx = baseOption.radius + baseOption.strokeOutWidth;
      baseOption.size = (baseOption.radius + baseOption.strokeOutWidth) * 2;
      baseOption.startPosition = 'rotate(-90,' + baseOption.cx + ',' + baseOption.cy + ')';
      return baseOption;
    }
  }
};
</script>
