<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-cell>
      <nut-temp name="wifi"></nut-temp>
      <nut-temp name="mail" txt="test txt"></nut-temp>
    </nut-cell>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/packages/utils/create';
const { createDemo } = createComponent('temp');
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
