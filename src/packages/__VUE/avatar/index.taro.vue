<template>
  <view :style="styles" :class="classes" @click="activeAvatar(e)">
    <nut-icon class="icon" :name="iconStyles"></nut-icon>
    <view class="text" v-if="isShowText">
      <slot></slot>
    </view>
  </view>
</template>
<script lang="ts">
import { toRefs, computed } from 'vue';
import { createComponent } from '../../utils/create';
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
    }
  },
  emits: ['active-avatar'],
  setup(props, { emit, slots }) {
    const { size, shape, bgColor, icon } = toRefs(props);
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
        backgroundColor: `${bgColor.value}`
      };
    });

    const iconStyles = computed(() => {
      return !!icon.value ? icon.value : '';
    });

    const isShowText = computed(() => {
      return slots.default;
    });

    const activeAvatar = (event: any) => {
      emit('active-avatar', event);
    };

    return {
      classes,
      styles,
      iconStyles,
      isShowText,
      activeAvatar
    };
  }
});
</script>
