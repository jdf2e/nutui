<template>
  <nut-space>
    <nut-avatar-cropper ref="avatarCropperRef" toolbar-position="top" edit-text="修改" @confirm="confirm">
      <nut-avatar size="large" shape="square">
        <img v-if="imageUrl" :src="imageUrl" />
      </nut-avatar>
      <template #toolbar>
        <div class="demo-toolbar">
          <nut-button type="primary" @click="avatarCropperRef.cancel()">取消</nut-button>
          <nut-button type="primary" @click="avatarCropperRef.reset()">重置</nut-button>
          <nut-button type="primary" @click="avatarCropperRef.rotate()">旋转</nut-button>
          <nut-button type="primary" @click="avatarCropperRef.confirm()">确认</nut-button>
        </div>
      </template>
    </nut-avatar-cropper>
  </nut-space>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const avatarCropperRef = ref();
const imageUrl = ref('');
const confirm = (url: string) => {
  imageUrl.value = url;
};
</script>

<style>
.demo-toolbar {
  display: flex;
  justify-content: space-between;
}
</style>
