<template>
  <nut-button type="primary" @click="show = true">close-on-click-overlay</nut-button>
  <nut-overlay v-model:visible="show" :close-on-click-overlay="false">
    <div class="overlay-body">
      <div class="overlay-content" @click.stop="show = false">close</div>
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
