<template>
  <view :class="classes" @click="handleClick">
    <view>{{ name }}</view>
    <view>{{ txt }}</view>
  </view>
</template>
<script lang="ts">
import { toRefs } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('temp');

export default create({
  props: {
    name: {
      type: String,
      default: ''
    },
    txt: {
      type: String,
      default: ''
    }
  },
  emits: ['click'],

  setup(props, { emit }) {
    // console.log('componentName', componentName);

    const { name, txt } = toRefs(props);

    const handleClick = (event: Event) => {
      emit('click', event);
    };

    return { name, txt, handleClick };
  }
});
</script>
