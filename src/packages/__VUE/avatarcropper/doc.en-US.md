# AvatarCropper Head cropping

### introduce

Used to cut the profile picture to create a new image.

### install

```js
import { createApp } from 'vue';
import { AvatarCropper } from '@nutui/nutui';

const app = createApp();
app.use(AvatarCropper);
```

### 基础用法

Use the avatar component directly in the middle, and the image content will be replaced with the new one after cropping.

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

| Attribute | Description                                         | Type   | Default |
| --------- | --------------------------------------------------- | ------ | ------- |
| maxZoom   | Maximum zoom                                        | number | 3       |
| space     | The gap reserved on both sides of the clipping area | number | 20      |

### AvatarCropper Slots

| Name    | Description                                                           |
| ------- | --------------------------------------------------------------------- |
| default | The default slot for placing elements such as images, ICONS, and text |

### AvatarCropper Events

| Name    | Description                             | Callback Arguments     |
| ------- | --------------------------------------- | ---------------------- |
| confirm | Click Confirm to trigger after cropping | url:The trimmed base64 |
| cancel  | Click cancel trigger                    | -                      |
