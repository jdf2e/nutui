<template>
  <nut-button type="success" @click="show = true">content</nut-button>
  <nut-overlay v-model:visible="show">
    <div class="overlay-body">
      <div class="overlay-content">text</div>
    </div>
  </nut-overlay>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const show = ref(false);
</script>
<style>
.overlay-body {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
}
.overlay-content {
  display: flex;
  width: 150px;
  height: 150px;
  background: #fff;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  color: red;
}
</style>
