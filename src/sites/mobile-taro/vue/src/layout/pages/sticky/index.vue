<template>
  <div class="demo sticky-demo">
    <h2>基础用法</h2>
    <nut-cell>
      <nut-sticky top="0" :parent-height="1200">
        <nut-button type="primary">吸顶按钮</nut-button>
      </nut-sticky>
    </nut-cell>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  props: {},
  setup() {
    const container = ref(null);
    return {
      container
    };
  }
});
</script>
<style lang="scss">
.sticky-container {
  width: 100%;
  height: 300px;
  background-color: #fff;
}
</style>
