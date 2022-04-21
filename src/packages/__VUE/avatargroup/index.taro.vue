<template>
  <view :class="classes" ref="avatarGroupRef">
    <slot></slot>
  </view>
</template>
<script lang="ts">
import { toRefs, onMounted, computed, provide, ref } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('avatar-group');
export default create({
  props: {
    maxContent: {
      type: String,
      default: ''
    },
    maxCount: {
      type: [Number, String],
      default: ''
    },
    maxBgColor: {
      type: String,
      default: '#eee'
    },
    maxColor: {
      type: String,
      default: '#666'
    },
    size: {
      type: String,
      default: ''
    },
    shape: {
      type: String,
      default: ''
    },
    span: {
      type: String,
      default: '-8'
    },
    zIndex: {
      type: String,
      default: 'left'
    }
  },
  setup(props, { emit, slots }) {
    const { size } = toRefs(props);

    const avatarGroupRef = ref(null);

    const index = ref(0);

    // const sizeValue = ['large', 'normal', 'small'];
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    onMounted(() => {});

    provide('avatarGroup', {
      props,
      avatarGroupRef,
      index
    });

    return {
      classes,
      // styles,
      avatarGroupRef
    };
  }
});
</script>
