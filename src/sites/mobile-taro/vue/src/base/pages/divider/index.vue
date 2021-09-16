<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-cell>
      <nut-divider />
    </nut-cell>
    <h2>展示文本</h2>
    <nut-cell>
      <nut-divider>文本</nut-divider>
    </nut-cell>
    <h2>内容位置</h2>
    <nut-cell>
      <nut-divider content-position="left">文本</nut-divider>
    </nut-cell>
    <nut-cell>
      <nut-divider content-position="right">文本</nut-divider>
    </nut-cell>
    <h2>虚线</h2>
    <nut-cell>
      <nut-divider dashed>文本</nut-divider>
    </nut-cell>
    <h2>自定义样式</h2>
    <nut-cell>
      <nut-divider
        :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
        >文本</nut-divider
      >
    </nut-cell>
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
