# AvatarCropper Head cropping

### introduce

Used to cut the profile picture to create a new image. Available in `NutUI` >= 4.2.0.

### install

```js
import { createApp } from 'vue'
import { AvatarCropper } from '@nutui/nutui'

const app = createApp()
app.use(AvatarCropper)
```

### Basic Usage

Use the avatar component directly in the middle, and the image content will be replaced with the new one after cropping.

> demo: avatarcropper basic

### Shape v4.2.8

shape: `square`, `round`

> demo: avatarcropper shape

### Clipping region toolbar slots

Customize the clipping area toolbar, and toolbar-position controls the toolbar position

> demo: avatarcropper toolbar

## API

### AvatarCropper Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| max-zoom | Maximum zoom | number | 3 |
| space | The gap reserved on both sides of the clipping area | number | 20 |
| toolbar-position | Location of the toolbar in the clipping area. The optional value is：`top` `bottom` | string | bottom |
| edit-text | The text content in the middle | string | 编辑 |
| cancel-text | Cancel button text | string | 取消 |
| cancel-confirm | Confirm button text | string | 确认 |
| shape`v4.2.8` | Shape of avatar. The optional value is： `square`、`round ` | string | square |

### AvatarCropper Slots

| Name | Description |
| --- | --- |
| default | The default slot for placing elements such as images, ICONS, and text |
| toolbar | After selecting the file, crop the bottom element of the pop-up window can be customized, and invoke the method of the component through ref |

### AvatarCropper Events

| Name | Description | Callback Arguments |
| --- | --- | --- |
| confirm | Click Confirm to trigger after cropping | url:The trimmed base64 |
| cancel | Click cancel trigger | - |

### AvatarCropper Ref

| Event | Explain |
| --- | --- |
| cancel | uncrop |
| reset | Reset to 0 degrees |
| rotate | Rotate 90 degrees |
| confirm | Definite cut |
