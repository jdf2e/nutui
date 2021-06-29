<template>
  <div class="demo">
    <h2>日期选择器</h2>
    <nut-datepicker @onChange="onChange">
      <nut-cell title="请选择日期" :desc="desc"></nut-cell>
    </nut-datepicker>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue';
export default {
  props: {},
  setup() {
    const desc = ref();

    const onChange = (value: any) => {
      desc.value = value;
    };

    return {
      desc,
      onChange
    };
  }
};
</script>
