<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-cell class="cell">
      <nut-range v-model="value" @change="onChange"></nut-range>
    </nut-cell>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('range');
export default createDemo({
  props: {},
  setup() {
    const value = ref(50);
    const onChange = value => console.log('当前值：' + value);
    return {
      value,
      onChange
    };
  }
});
</script>

<style lang="scss" scoped>
.cell {
  padding: 30px 18px;
}
.nut-range {
}
</style>
