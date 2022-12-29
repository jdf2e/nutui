<template>
  <view :class="classes" @click="handleClick">
    <view>{{ data }}</view>
  </view>
</template>
<script lang="ts">
import { reactive, toRefs, computed } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('image');
export default create({
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  emits: ['click'],

  setup(props, { emit }) {
    const state = reactive({
      data: 'Welcome to developing components'
    });

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    const handleClick = (event: Event) => {
      emit('click', event);
    };

    return { ...toRefs(state), classes, handleClick };
  }
});
</script>
