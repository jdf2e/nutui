<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-cell @click="handleClick1">
      <span><label>时间配送</label></span>
      <div> {{ val1 }} </div>
    </nut-cell>
    <div class="timeselect-wrapper">
      <nut-time-select :visible="visible1"></nut-time-select>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, defineComponent } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { defineComponent } = createComponent('time-select');
export default defineComponent({
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
