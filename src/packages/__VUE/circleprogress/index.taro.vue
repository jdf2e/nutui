<template>
  <div :class="classes" :style="pieStyle">
    <div :style="mobileStyle" v-if="!isMobile">
      <div class="nut-circleprogress__right">
        <div class="nut-circleprogress__line nut-circleprogress__r">
          <div class="nut-circleprogress__line__c" :style="RightStyle"></div>
        </div>
      </div>
      <div class="nut-circleprogress__progress">
        <template v-if="!isAuto">
          <slot>{{ progress }}%</slot>
        </template>
        <template v-else><slot></slot></template>
      </div>

      <div class="nut-circleprogress__left">
        <div class="nut-circleprogress__line nut-circleprogress__l">
          <div class="nut-circleprogress__line__c" :style="LeftStyle"></div>
        </div>
      </div>
    </div>
    <div v-else>
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
      <div class="nut-circleprogress__progress">
        <template v-if="!isAuto">
          <slot>{{ progress }}%</slot>
        </template>
        <template v-else><slot></slot></template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Taro from '@tarojs/taro';
import { computed, nextTick, onMounted, reactive, ref, watch } from 'vue';
import { createComponent } from '../../utils/create';
const { componentName, create } = createComponent('circleprogress');

interface progressOption {
  radius: string | number;
  strokeOutWidth: string | number;
  backColor: string;
  progressColor: string;
}

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
    const rotateLeft = ref();
    const rotateRight = ref();
    const InnerWidth = ref(props.strokeInnerWidth);
    const isMobile = ref(false);
    const cricleData = reactive({
      radius: 50,
      strokeOutWidth: 10,
      backColor: '#d9d9d9',
      progressColor: 'red'
    });
    const loadPercent = (x: number, y: number) => {
      let rotate = (x / y) * 360;
      let rotateRc = 0;
      let rotateLc = 0;
      if (rotate < 180) {
        rotateRc = rotate + -45;
      } else {
        rotateRc = 135;
        rotateLc = rotate - 180 - 45;
        rotateLeft.value = rotateLc;
      }
      rotateRight.value = rotateRc;
    };
    watch(
      () => props.progress,
      (value) => {
        loadPercent(value as number, 100);
      }
    );
    onMounted(() => {
      if (Taro.getEnv() === 'WEB') {
        isMobile.value = true;
      } else {
        isMobile.value = false;
        loadPercent(props.progress as number, 100);
        Object.assign(cricleData, props.progressOption as progressOption);
      }
    });
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });
    const pieStyle = computed(() => {
      return {
        width: (cricleData.radius + cricleData.strokeOutWidth) * 2 + 'px',
        height: (cricleData.radius + cricleData.strokeOutWidth) * 2 + 'px'
      };
    });
    const mobileStyle = computed(() => {
      return {
        width: '100%',
        height: '100%'
      };
    });
    const RightStyle = computed(() => {
      // taro转的h5不支持使用border-top这种边框属性，目前解决方案，taro转的h5使用svg实现
      return {
        transform: `rotate(${rotateRight.value + 'deg'})`,
        transition: `all 0.3s`,
        borderTop: `${InnerWidth.value + 'px'} solid ${cricleData.backColor};`,
        borderLeft: `${InnerWidth.value + 'px'} solid  ${cricleData.backColor};`,
        borderBottom: `${InnerWidth.value + 'px'} solid ${cricleData.progressColor};`,
        borderRight: `${InnerWidth.value + 'px'} solid ${cricleData.progressColor};`
      };
    });
    const LeftStyle = computed(() => {
      // taro转的h5不支持使用border-top这种边框属性
      return {
        transform: `rotate(${rotateLeft.value + 'deg'})`,
        transition: `all 0.3s`,
        borderTop: `${InnerWidth.value + 'px'} solid ${cricleData.backColor};`,
        borderLeft: `${InnerWidth.value + 'px'} solid  ${cricleData.backColor};`,
        borderBottom: `${InnerWidth.value + 'px'} solid ${cricleData.progressColor};`,
        borderRight: `${InnerWidth.value + 'px'} solid ${cricleData.progressColor};`
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
      isMobile,
      rotateLeft,
      InnerWidth,
      rotateRight,
      classes,
      pieStyle,
      RightStyle,
      LeftStyle,
      option,
      arcLength,
      mobileStyle
    };
  }
});
</script>
