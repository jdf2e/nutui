<template>
  <view :class="classes" :style="getStyle" @click="handleClick">
    <view class="nut-button__warp">
      <nutIcon class="nut-icon-loading" v-if="loading"></nutIcon>
      <!-- <Article v-if="loading" name="loading"></Article> -->
      <view :class="{ text: icon || loading }">
        <native-slot />
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { CSSProperties, computed, toRefs, defineProps } from 'vue';
import Article from '../article/index.vue';
import nutIcon from '../nutIcon/index.vue';
const props = defineProps({
  color: String,
  shape: {
    type: String,
    default: 'round'
  },
  plain: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'default'
  },
  size: {
    type: String,
    default: 'normal'
  },
  block: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ''
  },
  iconClassPrefix: {
    type: String,
    default: 'nut-icon'
  },
  iconFontClassName: {
    type: String,
    default: 'nutui-iconfont'
  }
});

const { type, size, shape, disabled, loading, color, plain, block } = toRefs(props);

const handleClick = () => {
  if (!loading.value && !disabled.value) {
  }
};

const classes = computed(() => {
  const prefixCls = 'nut-button';
  return {
    [prefixCls]: true,
    [`${prefixCls}--${type.value}`]: type.value,
    [`${prefixCls}--${size.value}`]: size.value,
    [`${prefixCls}--${shape.value}`]: shape.value,
    [`${prefixCls}--plain`]: plain.value,
    [`${prefixCls}--block`]: block.value,
    [`${prefixCls}--disabled`]: disabled.value,
    [`${prefixCls}--loading`]: loading.value
  };
});

const getStyle = computed(() => {
  const style: CSSProperties = {};
  if (color?.value) {
    if (plain.value) {
      style.color = color.value;
      style.background = '#fff';
      if (!color.value?.includes('gradient')) {
        style.borderColor = color.value;
      }
    } else {
      style.color = '#fff';
      style.background = color.value;
    }
  }

  return style;
});
</script>

<style lang="scss">
@import './index.scss';
</style>
