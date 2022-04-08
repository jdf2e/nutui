<template>
  <view :class="classes">
    <slot></slot>
  </view>
</template>
<script lang="ts">
import { toRefs, computed } from 'vue';
import { createComponent } from '../../utils/create';
const { componentName, create } = createComponent('avatar-group');
export default create({
  props: {
    cascading: {
      type: String,
      default: 'normal'
    },
    maxCount: {
      type: String,
      default: 'normal'
    },
    maxPopoverPlacement: {
      type: String,
      default: 'round'
    },
    maxPopoverTrigger: {
      type: String,
      default: '#eee'
    },
    maxStyle: {
      type: String,
      default: '#666'
    },
    size: {
      type: String,
      default: ''
    }
  },
  setup(props, { emit, slots }) {
    const { size, maxCount, maxPopoverPlacement, maxPopoverTrigger, maxStyle } = toRefs(props);
    const sizeValue = ['large', 'normal', 'small'];
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    const styles = computed(() => {
      return {
        width: sizeValue.indexOf(size.value) > -1 ? '' : `${size.value}px`,
        height: sizeValue.indexOf(size.value) > -1 ? '' : `${size.value}px`
      };
    });

    const isShowText = computed(() => {
      return slots.default;
    });

    return {
      classes,
      styles,
      isShowText
    };
  }
});
</script>
