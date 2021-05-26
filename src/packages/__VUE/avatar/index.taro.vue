<template>
  <view :style="styles" :class="classes" @click="activeAvatar">
    <nut-icon class="icon" :name="iconStyles"></nut-icon>
    <view class="text" v-if="isShowText">
      <slot></slot>
    </view>
  </view>
</template>
<script lang="ts">
import { toRefs, computed } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('avatar');
export default create({
  props: {
    size: {
      type: String,
      default: 'normal'
    },
    shape: {
      type: String,
      default: 'round'
    },
    bgColor: {
      type: String,
      default: '#eee'
    },
    icon: {
      type: String,
      default: ''
    },
    src: {
      type: String,
      default: ''
    }
  },
  emits: ['on-error'],
  setup(props, { emit, slots }) {
    const { size, shape, bgColor, icon, src } = toRefs(props);
    const sizeValue = ['large', 'normal', 'small'];
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        ['avatar-' + size.value]: true,
        ['avatar-' + shape.value]: true
      };
    });

    const styles = computed(() => {
      return {
        width: sizeValue.indexOf(size.value) > -1 ? '' : `${size.value}px`,
        height: sizeValue.indexOf(size.value) > -1 ? '' : `${size.value}px`,
        backgroundImage: src.value ? `url(${src.value})` : null,
        backgroundColor: `${bgColor.value}`
      };
    });

    const iconStyles = computed(() => {
      return !!icon.value && !src.value ? icon.value : '';
    });

    const isShowText = computed(() => {
      return slots.default;
    });

    let image = new Image();
    image.src = props.src;
    image.onerror = event => {
      emit('on-error', event);
    };

    return {
      classes,
      styles,
      iconStyles,
      isShowText
    };
  }
});
</script>
<style lang="scss">
@import 'index.scss';
</style>
