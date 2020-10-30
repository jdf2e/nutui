<template>
  <div class="demo">
    <h2>基本用法</h2>
    <nut-cell title="我是标题" desc="描述文字"></nut-cell>
    <nut-cell title="我是标题" sub-title="副标题描述" desc="描述文字"></nut-cell>
    <h2>链接</h2>
    <nut-cell title="链接" is-link></nut-cell>
    <nut-cell title="URL 跳转" desc="https://jd.com" is-link url="https://jd.com"></nut-cell>
    <nut-cell title="路由跳转 ’/‘ " to="/"></nut-cell>
  </div>
</template>

<script lang="ts">
import Cell from '@/packages/cell/index.vue';
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('cell');
export default createDemo({
  props: {},
  components: { [Cell.name]: Cell },
  emits: ['click']
});
</script>

<style lang="scss" scoped></style>
