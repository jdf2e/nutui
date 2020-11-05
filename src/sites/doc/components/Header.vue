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
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    background: $doc-header-bg;
    background-size: cover;
    background-position: center;
    height: $doc-header-height;
    line-height: $doc-header-height;
    text-align: left;
    padding: 0 50px;
    font-size: 20px;
    color: $white;
  }
}
</style>
