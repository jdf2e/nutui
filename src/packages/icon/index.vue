<template>
  <view :class="classes" @click="handleClick">
    >
  </view>
</template>

<script lang="ts">
import { toRefs, computed } from 'vue';
import { createComponent } from '@/utils/create';
const { componentName, create } = createComponent('icon');

export default create({
  props: {
    name: { type: String, default: '' }
  },
  components: {},
  emits: ['click'],
  setup(props, { emit, slots }) {
    const { name } = toRefs(props);
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    const handleClick = (event: Event) => {
      emit('click', event);
    };

    return {
      handleClick,
      name,

      classes
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
