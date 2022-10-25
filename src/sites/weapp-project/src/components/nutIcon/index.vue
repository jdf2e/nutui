<template>
  <view>
    <i :class="classes" :style="styled"></i>
  </view>
</template>

<script lang="ts" setup>
import { PropType, defineEmits, defineProps, computed } from 'vue';
import { pxCheck } from '@/packages/utils/pxCheck';
const props = defineProps({
  name: { type: String, default: 'loading' },
  size: { type: [String, Number], default: '' },
  classPrefix: { type: String, default: 'nut-icon' },
  fontClassName: { type: String, default: 'nutui-iconfont' },
  color: { type: String, default: '' },
  tag: { type: String as PropType<keyof HTMLElementTagNameMap>, default: 'i' }
});

const emit = defineEmits(['click']);
const componentName = 'nut-icon';

const isImage = () => {
  return props.name ? props.name.indexOf('/') !== -1 : false;
};

const classes = computed(() => {
  const _isImage = isImage();
  return _isImage
    ? `${componentName}__img`
    : `${props.fontClassName} ${componentName} ${props.classPrefix}-${props.name}`;
});

const styled = computed(() => {
  return {
    color: props.color,
    fontSize: pxCheck(props.size),
    width: pxCheck(props.size),
    height: pxCheck(props.size)
  };
});

const srcUrl = computed(() => {
  const _isImage = isImage();
  return _isImage ? props.name : '';
});
</script>

<style lang="scss">
@import '../icon/index.scss';
</style>
