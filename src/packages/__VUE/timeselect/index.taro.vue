<template>
  <nut-popup
    position="bottom"
    closeable
    round
    :visible="visible"
    :style="popStyle"
    @click-overlay="close"
    @click-close-icon="close"
  >
    <view :class="classes">
      <view class="nut-timeselect__title">
        <view class="nut-timeselect__title__fixed">
          {{ title }}
        </view>
      </view>
      <view class="nut-timeselect__content">
        <view class="nut-timeselect__content__pannel">
          <slot name="pannel"></slot>
        </view>
        <view class="nut-timeselect__content__detail">
          <slot name="detail"></slot>
        </view>
      </view>
    </view>
  </nut-popup>
</template>
<script lang="ts">
import { computed, provide } from 'vue';
import { createComponent } from '../../utils/create';
const { componentName, create } = createComponent('timeselect');
export default create({
  props: {
    visible: {
      type: Boolean,
      defalut: false
    },
    height: {
      type: [String],
      default: '20%'
    },
    title: {
      type: String,
      default: '取件时间'
    },
    currentKey: {
      type: [Number, String],
      default: 0
    },
    currentTime: {
      type: Array,
      default: () => {
        return [];
      }
    },
    muti: {
      type: [Boolean],
      default: false
    }
  },
  emits: ['update:visible', 'select'],
  setup: (props: any, context: any) => {
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    const popStyle = computed(() => {
      return {
        width: '100%',
        height: props.height
      };
    });

    const currentKey = computed(() => props.currentKey);

    const currentTime = computed(() => props.currentTime);

    const muti = computed(() => props.muti);

    const close = () => {
      context.emit('update:visible', false);
      context.emit('select', currentTime.value);
    };

    provide('currentKey', currentKey);
    provide('currentTime', currentTime);
    provide('muti', muti);

    return {
      classes,
      popStyle,
      close
    };
  }
});
</script>
