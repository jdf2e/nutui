<template>
  <div class="demo full bg-w">
    <h2>基础用法</h2>
    <nut-divider />
    <h2>展示文本</h2>
    <nut-divider>文本</nut-divider>
    <h2>内容位置</h2>
    <nut-divider content-position="left">文本</nut-divider>
    <nut-divider content-position="right">文本</nut-divider>
    <h2>虚线</h2>
    <nut-divider dashed>文本</nut-divider>
    <h2>自定义样式</h2>
    <nut-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">文本</nut-divider>
  </div>
</template>

<script lang="ts">
export default {
  props: {},
  setup() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.demo {
}
</style>
