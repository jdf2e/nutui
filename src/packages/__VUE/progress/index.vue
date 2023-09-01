<template>
  <div class="nut-progress">
    <div
      class="nut-progress-outer"
      :class="[showText && !textInside ? 'nut-progress-outer-part' : '', size ? 'nut-progress-' + size : '']"
      :style="{ height: height }"
    >
      <div :class="['nut-progress-inner', status === 'active' ? 'nut-active' : '']" :style="bgStyle"></div>
      <div
        v-if="showText && textInside && !slotDefault"
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
        v-if="showText && textInside && slotDefault"
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

<script lang="ts">
import { computed, useSlots, PropType } from 'vue';
import { Checked } from '@nutui/icons-vue';
import type { ProgressSize, ProgressStatus } from './types';
import { createComponent } from '@/packages/utils/create';
const { create } = createComponent('progress');
export default create({
  components: { Checked },
  props: {
    percentage: {
      type: [Number, String],
      default: 0,
      required: true
    },
    size: {
      type: String as PropType<ProgressSize>,
      default: 'base'
    },
    status: {
      type: String as PropType<ProgressStatus>,
      default: 'text'
    },
    strokeWidth: {
      type: [Number, String],
      default: ''
    },
    textInside: {
      type: Boolean,
      default: false
    },
    showText: {
      type: Boolean,
      default: true
    },
    strokeColor: {
      type: String,
      default: ''
    },
    textColor: {
      type: String,
      default: ''
    },
    textBackground: {
      type: String,
      default: ''
    },
    isShowPercentage: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const slotDefault = !!useSlots().default;
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
    return {
      height,
      percentage,
      bgStyle,
      textStyle,
      slotDefault
    };
  }
});
</script>
