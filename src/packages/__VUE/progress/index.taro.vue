<template>
  <div class="nut-progress">
    <div
      class="nut-progress-outer"
      :id="'nut-progress-outer-taro-' + randRef"
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
            background: textBackground || strokeColor
          }"
          v-if="showText && textInside && !slotDefault"
        >
          <span :style="textStyle">{{ percentage }}{{ isShowPercentage ? '%' : '' }}</span>
        </div>
        <div
          ref="insideText"
          :style="{
            position: `absolute`,
            top: `50%`,
            left: `${percentage}%`,
            transform: `translate(-${+percentage}%,-50%)`
          }"
          v-if="showText && textInside && slotDefault"
        >
          <slot></slot>
        </div>
      </div>
    </div>
    <div class="nut-progress-text" :style="{ lineHeight: height }" v-if="showText && !textInside">
      <template v-if="status == 'text' || status == 'active'">
        <span :style="textStyle">{{ percentage }}{{ isShowPercentage ? '%' : '' }} </span>
      </template>
      <template v-else-if="status == 'icon'">
        <nut-icon v-bind="$attrs" size="16px" :name="iconName" :color="iconColor"></nut-icon>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, useSlots, ref, watch } from 'vue';
import { createComponent } from '@/packages/utils/create';
import Taro, { eventCenter, getCurrentInstance } from '@tarojs/taro';
import { log } from 'lzutf8';
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
    const slotDefault = !!useSlots().default;
    const height = ref(props.strokeWidth + 'px');
    const progressOuter = ref<any>();
    const insideText = ref();
    const refRandomId = Math.random().toString(36).slice(-8);
    const randRef = ref(refRandomId);
    const bgStyle = computed(() => {
      return {
        width: props.percentage + '%',
        background: props.strokeColor || ''
      };
    });
    const textStyle = computed(() => {
      return {
        color: props.textColor || ''
      };
    });

    onMounted(() => {
      eventCenter.once((getCurrentInstance() as any).router.onReady, () => {});
    });
    return {
      height,
      bgStyle,
      textStyle,
      progressOuter,
      insideText,
      randRef,
      slotDefault
    };
  }
});
</script>
