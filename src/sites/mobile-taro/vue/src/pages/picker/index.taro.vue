<template>
  <picker mode="selector" :range="listData" @change="onChange">
    <slot></slot>
  </picker>
</template>

<script lang="ts">
const { create } = createComponent('picker');
import { commonProps } from '../../../../../../packages/__VUE/picker/commonProps';
import { createComponent } from './../../../../../../packages/utils/create';
export default create({
  props: {
    ...commonProps
  },
  emits: ['confirm'],
  setup(props, { emit }) {
    const onChange = (e: any) => {
      emit('confirm', props.listData[e.detail.value]);
    };

    return {
      confirm,
      onChange
    };
  }
});
</script>

<style lang="scss" scoped></style>
