<template>
  <div class="demo bg-w">
    <h2>基础用法</h2>
    <nut-uploader></nut-uploader>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('uploader');
export default createDemo({
  props: {}
});
</script>

<style lang="scss" scoped></style>
