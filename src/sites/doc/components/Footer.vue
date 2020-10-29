<template>
  <div class="doc-footer">
    2020 JDRD-FEB 前端开发部.All Rights Reserved.
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'doc-footer'
});
</script>

<style lang="scss">
.doc {
  &-footer {
    background: $doc-default-primary-bg;
    height: $doc-footer-height;
    line-height: $doc-footer-height;
    text-align: center;
    font-size: 16px;
    color: $white;
  }
}
</style>
