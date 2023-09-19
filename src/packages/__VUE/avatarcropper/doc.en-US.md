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

### Clipping region toolbar slots

Customize the clipping area toolbar, and toolbar-position controls the toolbar position

:::demo

```vue
<template>
  <nut-avatar-cropper ref="avatarCropperRef" toolbar-position="top" edit-text="修改" @confirm="cutImage">
    <nut-avatar size="large">
      <img :src="imageUrl" />
    </nut-avatar>
    <template #toolbar>
      <div class="toolbar">
        <nut-button type="primary" @click="avatarCropperRef.cancel()">cancel</nut-button>
        <nut-button type="primary" @click="avatarCropperRef.reset()">reset</nut-button>
        <nut-button type="primary" @click="avatarCropperRef.rotate()">spin</nut-button>
        <nut-button type="primary" @click="avatarCropperRef.confirm()">confirm</nut-button>
      </div>
    </template>
  </nut-avatar-cropper>
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

<style lang="scss">
.toolbar {
  display: flex;
  justify-content: space-between;
}
</style>
```

:::

## API

### AvatarCropper Props

| Attribute        | Description                                                                         | Type   | Default |
| ---------------- | ----------------------------------------------------------------------------------- | ------ | ------- |
| max-zoom         | Maximum zoom                                                                        | number | 3       |
| space            | The gap reserved on both sides of the clipping area                                 | number | 20      |
| toolbar-position | Location of the toolbar in the clipping area. The optional value is：`top` `bottom` | string | bottom  |
| edit-text        | The text content in the middle                                                      | string | 编辑    |
| cancel-text      | Cancel button text                                                                  | string | 取消    |
| cancel-confirm   | Confirm button text                                                                 | string | 确认    |

### AvatarCropper Slots

| Name    | Description                                                                                                                                  |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| default | The default slot for placing elements such as images, ICONS, and text                                                                        |
| toolbar | After selecting the file, crop the bottom element of the pop-up window can be customized, and invoke the method of the component through ref |

### AvatarCropper Events

| Name    | Description                             | Callback Arguments     |
| ------- | --------------------------------------- | ---------------------- |
| confirm | Click Confirm to trigger after cropping | url:The trimmed base64 |
| cancel  | Click cancel trigger                    | -                      |

### AvatarCropper Ref

| Event   | Explain            |
| ------- | ------------------ |
| cancel  | uncrop             |
| reset   | Reset to 0 degrees |
| rotate  | Rotate 90 degrees  |
| confirm | Definite cut       |
