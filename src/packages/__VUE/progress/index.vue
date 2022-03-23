<template>
  <div class="nut-progress">
    <div
      class="nut-progress-outer"
      ref="progressOuter"
      :class="[showText && !textInside ? 'nut-progress-outer-part' : '', size ? 'nut-progress-' + size : '']"
      :style="{ height: height }"
    >
      <div :class="['nut-progress-inner', status == 'active' ? 'nut-active' : '']" :style="bgStyle">
        <div
          class="nut-progress-text nut-progress-insidetext"
          ref="insideText"
          :style="{
            lineHeight: height,
            left: `${percentage}%`,
            transform: `translate(-${+percentage}%,-50%)`,
            background: bgStyle.textInsideBackground || bgStyle.background || ''
          }"
          v-if="showText && textInside"
        >
          <span :style="textStyle">{{ percentage }}{{ isShowPercentage ? '%' : '' }} </span>
        </div>
      </div>
    </div>
    <div class="nut-progress-text" :style="{ lineHeight: height }" v-if="showText && !textInside">
      <template v-if="status == 'active' || status == ''">
        <span :style="textStyle">{{ percentage }}{{ isShowPercentage ? '%' : '' }}</span>
      </template>
      <template v-else-if="status == 'icon'">
        <nut-icon size="16px" :name="iconName" :color="iconColor"></nut-icon>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { log } from 'lzutf8';
import { computed, onMounted, provide, reactive, nextTick, ref, watch } from 'vue';
import { createComponent } from '../../utils/create';
const { create } = createComponent('progress');
export default create({
  props: {
    percentage: {
      type: [Number, String],
      default: 0,
      required: true
    },
    size: {
      type: String,
      default: 'base'
    },
    status: {
      type: String,
      default: ''
    },
    strokeWidth: {
      type: [Number, String],
      default: ''
    },
    textInside: {
      type: Boolean,
      default: false
    },
    textInsideBackground: {
      type: String,
      default: ''
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
      tyep: String,
      default: ''
    },
    iconName: {
      type: String,
      default: 'checked'
    },
    iconColor: {
      type: String,
      default: '#439422'
    },
    isShowPercentage: {
      type: Boolean,
      default: true
    }
  },
  setup(props, { emit }) {
    const height = ref(props.strokeWidth + 'px');
    const progressOuter = ref();
    const insideText = ref();
    const bgStyle = computed(() => {
      return {
        width: props.percentage + '%',
        background: props.strokeColor || '',
        textInsideBackground: props.textInsideBackground || props.strokeColor || ''
      };
    });
    const textStyle = computed(() => {
      return {
        color: props.textColor || ''
      };
    });
    onMounted(() => {});
    return {
      height,
      bgStyle,
      textStyle,
      progressOuter,
      insideText
    };
  }
});
</script>
