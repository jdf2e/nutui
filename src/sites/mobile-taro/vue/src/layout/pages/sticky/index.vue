<template>
  <div class="demo sticky-demo">
    <h2>基础用法</h2>
    <nut-cell>
      <nut-sticky top="0">
        <nut-button type="primary">吸顶按钮</nut-button>
      </nut-sticky>
    </nut-cell>
    <h2>吸顶距离</h2>
    <nut-cell>
      <nut-sticky top="50">
        <nut-button type="primary">吸顶距离50px</nut-button>
      </nut-sticky>
    </nut-cell>
    <h2>指定容器</h2>
    <div class="sticky-container" ref="container" id="container">
      <nut-sticky top="0" :container="container" z-index="1">
        <nut-button type="info">指定容器</nut-button>
      </nut-sticky>
    </div>
    <h2>吸底距离</h2>
    <nut-cell>
      <nut-sticky bottom="100" position="bottom">
        <nut-button type="primary">吸底距离100px</nut-button>
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
.sticky-demo {
  height: 200vh !important;
}
.sticky-container {
  width: 100%;
  height: 300px;
  background-color: #fff;
}
#app {
  height: auto !important;
}
</style>
