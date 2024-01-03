<template>
  <div class="demo full">
    <h2>基础用法</h2>
    <nut-cell>
      <nut-avatar-cropper @confirm="cutImage">
        <nut-avatar size="large">
          <img :src="imageUrl" />
        </nut-avatar>
      </nut-avatar-cropper>
    </nut-cell>
    <h2>裁剪圆形形状</h2>
    <nut-cell>
      <nut-avatar-cropper cut-shape="round" @confirm="cutImage">
        <nut-avatar size="large">
          <img :src="imageUrl" />
        </nut-avatar>
      </nut-avatar-cropper>
    </nut-cell>
    <h2>裁剪区域toolbar插槽</h2>
    <nut-cell>
      <nut-avatar-cropper ref="avatarCropperRef" toolbar-position="top" edit-text="修改" @confirm="cutImage">
        <nut-avatar size="large">
          <img :src="imageUrl" />
        </nut-avatar>
        <template #toolbar>
          <div class="toolbar">
            <nut-button type="primary" @click="avatarCropperRef.cancel()">取消</nut-button>
            <nut-button type="primary" @click="avatarCropperRef.reset()">重置</nut-button>
            <nut-button type="primary" @click="avatarCropperRef.rotate()">旋转</nut-button>
            <nut-button type="primary" @click="avatarCropperRef.confirm()">确认</nut-button>
          </div>
        </template>
      </nut-avatar-cropper>
    </nut-cell>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const imageUrl = ref(
  'https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png'
);
const avatarCropperRef = ref();
const cutImage = (url: string) => {
  imageUrl.value = url;
};
</script>

<style>
.toolbar {
  display: flex;
  justify-content: space-between;
}
</style>
