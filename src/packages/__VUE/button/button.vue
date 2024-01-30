<template>
  <view :class="classes" :style="getStyle" @click="handleClick">
    <view class="nut-button__wrap">
      <Loading v-if="loading" class="nut-icon-loading" />
      <slot v-if="$slots.icon && !loading" name="icon"></slot>
      <view v-if="$slots.default" :class="{ 'nut-button__text': $slots.icon || loading }">
        <slot></slot>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { CSSProperties, toRefs, computed } from 'vue';
import type { ButtonShape, ButtonType, ButtonSize } from './types';
import { Loading } from '@nutui/icons-vue';

defineOptions({
  name: 'NutButton'
});

export type ButtonProps = Partial<{
  color: string;
  shape: ButtonShape;
  plain: boolean;
  loading: boolean;
  disabled: boolean;
  type: ButtonType;
  size: ButtonSize;
  block: boolean;
}>;

const props = withDefaults(defineProps<ButtonProps>(), {
  color: '',
  shape: 'round',
  plain: false,
  loading: false,
  disabled: false,
  type: 'default',
  size: 'normal',
  block: false
});

const emit = defineEmits(['click']);

const { type, size, shape, disabled, loading, color, plain, block } = toRefs(props);

const handleClick = (event: MouseEvent) => {
  if (!loading.value && !disabled.value) {
    emit('click', event);
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
  let style: CSSProperties = {};
  if (color?.value) {
    style = {
      color: plain.value ? color.value : '#fff',
      background: plain.value ? '#fff' : `border-box ${color.value}`
    };
    if (color.value.includes('gradient')) {
      style.borderColor = 'transparent';
    } else {
      style.borderColor = color.value;
    }
  }
  return style;
});
</script>
