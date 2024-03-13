<template>
  <div class="nut-progress">
    <div
      class="nut-progress-outer"
      :class="[showText && !textInside ? 'nut-progress-outer-part' : '', size ? 'nut-progress-' + size : '']"
      :style="{ height: height }"
    >
      <div :class="['nut-progress-inner', status === 'active' ? 'nut-active' : '']" :style="bgStyle"></div>
      <div
        v-if="showText && textInside && !$slots.default"
        class="nut-progress-text nut-progress-insidetext"
        :style="{
          lineHeight: height,
          left: `${percentage}%`,
          transform: `translate(-${+percentage}%,-50%)`,
          background: textBackground || strokeColor
        }"
      >
        <span :style="textStyle">{{ percentage }}{{ isShowPercentage ? '%' : '' }} </span>
      </div>
      <div
        v-if="showText && textInside && $slots.default"
        class="nut-progress-slot"
        :style="{
          position: `absolute`,
          top: `50%`,
          left: `${percentage}%`,
          transform: `translate(-${+percentage}%,-50%)`
        }"
      >
        <slot></slot>
      </div>
    </div>
    <div v-if="showText && !textInside" class="nut-progress-text" :style="{ lineHeight: height }">
      <template v-if="status === 'text' || status === 'active'">
        <span :style="textStyle">{{ percentage }}{{ isShowPercentage ? '%' : '' }} </span>
      </template>
      <template v-else-if="status === 'icon'">
        <slot name="icon-name">
          <Checked width="15px" height="15px" color="#439422"></Checked>
        </slot>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Checked } from '@nutui/icons-vue';
import type { ProgressSize, ProgressStatus } from './types';

defineOptions({
  name: 'NutProgress'
});

export type ProgressProps = Partial<{
  percentage: string | number;
  size: ProgressSize;
  status: ProgressStatus;
  strokeWidth: string | number;
  textInside: boolean;
  showText: boolean;
  strokeColor: string;
  textColor: string;
  textBackground: string;
  isShowPercentage: boolean;
}>;

const props = withDefaults(defineProps<ProgressProps>(), {
  percentage: 0,
  size: 'base',
  status: 'text',
  textInside: false,
  showText: true,
  isShowPercentage: true
});

const height = computed(() => {
  if (props.strokeWidth) {
    return props.strokeWidth + 'px';
  }
  return undefined;
});
const percentage = computed(() => {
  return Number(props.percentage) >= 100 ? 100 : Number(props.percentage);
});
const bgStyle = computed(() => {
  return {
    width: percentage.value + '%',
    background: props.strokeColor || ''
  };
});
const textStyle = computed(() => {
  return {
    color: props.textColor || ''
  };
});
</script>
