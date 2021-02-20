<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-cell class="cell">
      <nut-range v-model="value" @change="onChange"></nut-range>
    </nut-cell>
    <h2>指定选择范围</h2>
    <nut-cell class="cell">
      <nut-range
        v-model="value2"
        max="10"
        min="-10"
        @change="onChange2"
      ></nut-range>
    </nut-cell>
    <h2>设置步长</h2>
    <nut-cell class="cell">
      <nut-range v-model="value3" step="5" @change="onChange3"></nut-range>
    </nut-cell>
    <h2>禁用</h2>
    <nut-cell class="cell">
      <nut-range disabled v-model="value4"></nut-range>
    </nut-cell>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { createComponent } from '@/utils/create';
import { Toast } from '../toast';

const { createDemo } = createComponent('range');
export default createDemo({
  props: {},
  setup() {
    const value = ref(50);
    const value2 = ref(5);
    const value3 = ref(50);
    const value4 = ref(50);
    const onChange = value => Toast.text('当前值：' + value);
    const onChange2 = value2 => Toast.text('当前值：' + value2);
    const onChange3 = value3 => Toast.text('当前值：' + value3);
    return {
      value,
      value2,
      value3,
      value4,
      onChange,
      onChange2,
      onChange3
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
