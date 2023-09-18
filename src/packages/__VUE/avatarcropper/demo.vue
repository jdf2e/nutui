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
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const imageUrl = ref(
  'https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png'
);
const cutImage = (url: string) => {
  imageUrl.value = url;
};
</script>
