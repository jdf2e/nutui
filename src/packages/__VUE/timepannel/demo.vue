<template>
  <div class="demo">
    <h2>基本用法</h2>
    <nut-cell @click="handleClick1">
      <span><label>时间配送</label></span>
      <div class="selected-option"> {{ val1 }} </div>
    </nut-cell>
    <div class="timeselect-wrapper">
      <nut-timeselect :visible="visible1"></nut-timeselect>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { createDemo } = createComponent('timeselect');
export default createDemo({
  setup() {
    const state = reactive({
      visible1: false,
      val1: ''
    });

    const handleClick1 = () => {
      state.visible1 = true;
    };

    return {
      ...toRefs(state),
      handleClick1
    };
  }
});
</script>
