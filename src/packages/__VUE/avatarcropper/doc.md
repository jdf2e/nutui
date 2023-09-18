# AvatarCropper 头像剪切

### 介绍

用来对头像进行剪切生成一张新的图片。

### 安装

```js
import { createApp } from 'vue';
import { AvatarCropper } from '@nutui/nutui';

const app = createApp();
app.use(AvatarCropper);
```

### 基础用法

中间直接使用avatar组件，裁剪后图片内容会被替换为新的。

:::demo

```vue
<template>
  <nut-avatar-cropper>
    <nut-avatar size="large" @confirm="cutImage">
      <img :src="imageUrl" />
    </nut-avatar>
  </nut-avatar-cropper>
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
```

:::

## API

### AvatarCropper Props

| 参数    | 说明                   | 类型   | 默认值 |
| ------- | ---------------------- | ------ | ------ |
| maxZoom | 最大缩放倍数           | number | 3      |
| space   | 裁剪区域两边预留的间隙 | number | 20     |

### AvatarCropper Slots

| 名称    | 描述                                   |
| ------- | -------------------------------------- |
| default | 默认插槽，可放置图片、图标、文本等元素 |

### AvatarCropper Events

| 名称    | 描述               | 回调参数           |
| ------- | ------------------ | ------------------ |
| confirm | 裁剪后点击确认触发 | url:裁剪后的base64 |
| cancel  | 点击取消触发       | -                  |
