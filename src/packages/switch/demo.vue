<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-cell>
      开
      <nut-switch></nut-switch>
    </nut-cell>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('switch');
export default createDemo({
  props: {},
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.nut-temp {
}
</style>
