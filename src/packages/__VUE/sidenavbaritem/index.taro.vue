<template>
  <view :class="classes" @click.stop="handleClick" :ikey="ikey">
    <span class="nut-side-navbar-item__title">
      {{ title }}
    </span>
  </view>
</template>
<script lang="ts">
import { computed } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('side-navbar-item');
export default create({
  props: {
    title: {
      type: String,
      default: ''
    },
    ikey: {
      type: String,
      default: ''
    }
  },
  emits: ['click'],
  setup: (props: any, context: any) => {
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    const handleClick = () => {
      context.emit('click');
    };

    return {
      classes,
      handleClick
    };
  }
});
</script>
