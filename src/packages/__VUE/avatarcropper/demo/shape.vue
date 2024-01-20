<template>
  <nut-space>
    <nut-avatar-cropper shape="round" @confirm="confirm">
      <nut-avatar size="large" shape="round">
        <img v-if="imageUrl" :src="imageUrl" />
      </nut-avatar>
    </nut-avatar-cropper>

    <nut-avatar-cropper shape="square" @confirm="confirm">
      <nut-avatar size="large" shape="square">
        <img v-if="imageUrl" :src="imageUrl" />
      </nut-avatar>
    </nut-avatar-cropper>
  </nut-space>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const imageUrl = ref('');
const confirm = (url: string) => {
  imageUrl.value = url;
};
</script>
