<template>
  <view :style="styles" :class="classes" @click="activeAvatar(e)">
    <template v-if="url">
      <img :src="url" :alt="alt" @error="onError" />
    </template>
    <template v-else-if="icon">
      <nut-icon class="icon" :name="iconStyles"></nut-icon>
    </template>
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
    color: {
      type: String,
      default: '#666'
    },
    url: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  },
  emits: ['active-avatar', 'onError'],
  setup(props, { emit, slots }) {
    const { size, shape, bgColor, color, icon } = toRefs(props);
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
        backgroundColor: `${bgColor.value}`,
        color: `${color.value}`
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

    const onError = (event: any) => {
      emit('onError', event);
    };

    return {
      classes,
      styles,
      iconStyles,
      isShowText,
      activeAvatar,
      onError
    };
  }
});
</script>
