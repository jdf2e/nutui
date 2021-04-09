<template>
  <div class="demo">
    <h2>基本用法</h2>
    <nut-steps> </nut-steps>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('steps');
export default createDemo({
  props: {},
  setup() {
    return {
      // ...toRefs(state)
    };
  }
});
</script>

<style lang="scss" scoped>
.demo-box {
}
</style>
