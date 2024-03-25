<template>
  <div class="doc-demo-preview">
    <iframe :src="url" frameborder="0"></iframe>
  </div>
</template>
<script setup lang="ts">
defineProps({
  url: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss">
.doc-demo-preview {
  position: fixed;
  z-index: 99;
  height: calc(100vh - 100px);
  width: 375px;
  right: 30px;
  box-shadow: #ebedf0 0 4px 12px;
  border-radius: 12px;
  overflow: hidden;
  iframe {
    height: 100%;
    width: 100%;
  }
}
</style>
