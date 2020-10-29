<template>
  <div class="doc-header">
    NutUI
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'doc-header'
});
</script>

<style lang="scss">
.doc {
  &-header {
    background: $doc-default-primary-bg;
    height: $doc-header-height;
    line-height: $doc-header-height;
    text-align: left;
    padding: 0 50px;
    font-size: 20px;
    color: $white;
  }
}
</style>
