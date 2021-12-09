<template>
  <div class="demo">
    <h2>基础用法</h2>
    <div class="base">
      <nut-empty description="haha">
        <template #description>www</template>
        <template>haha </template>
      </nut-empty>
    </div>
    <h2>自定义图片</h2>
    <div class="base">
      <nut-empty description="haha">
        <template #image>
          <img src="https://static-ftcms.jd.com/p/files/5f2b72b90176532196773d95.png" />
        </template>
      </nut-empty>
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent } from '../../utils/create';
const { createDemo } = createComponent('empty');
export default createDemo({
  props: {},
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.demo {
  .base {
    background: #ffffff;
  }
}
</style>
