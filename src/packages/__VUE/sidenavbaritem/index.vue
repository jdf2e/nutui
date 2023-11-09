<template>
  <view class="nut-side-navbar-item" :ikey="ikey" @click.stop="handleClick">
    <span class="nut-side-navbar-item__title">
      {{ title }}
    </span>
  </view>
</template>
<script lang="ts">
import { createComponent } from '@/packages/utils/create';
const { create } = createComponent('side-navbar-item');
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
  setup: (props, { emit }) => {
    const handleClick = () => {
      emit('click');
    };

    return {
      handleClick
    };
  }
});
</script>
