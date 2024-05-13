# watermark

### Intro

### Install

```js
import { createApp } from 'vue'
import { Watermark } from '@nutui/nutui'

const app = createApp()
app.use(Watermark)
```

### Basic Usage

> demo: watermark basic

### Part Usage

> demo: watermark part

### Multiline Watermark v4.2.5

The content attribute is passed into a string array, showing a multi-line watermark

> demo: watermark multi

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| width | Width of watermark | number | `120` |
| height | Height of watermark | number | `64` |
| rotate | Rotation angle when drawing watermark | number | `-22` |
| image | Image source, it is recommended to export 2x or 3x images, and the image rendering watermark is preferred | string | - |
| image-width | Width of image | number | `120` |
| image-height | Height of image | number | `64` |
| z-index | Z-index of the appended watermark element | number | `2000` |
| content | Watermark text content | string \| string[] | - |
| font-color | Watermark text color | string | `rgba(0, 0, 0, .15)` |
| font-size | Watermark text font size | string \| number | `16` |
| gap-x | Horizontal spacing between watermarks | number | `24` |
| gap-y | Vertical spacing between watermarks | number | `48` |
| full-page | Overwrite entire page | boolean | `true` |
| font-family | Watermark text font family | string | `PingFang SC` |

### Types v4.3.8

The component exports the following type definitions:

```js
import type {
  WatermarkProps,
  WatermarkInstance
} from '@nutui/nutui'
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nut-watermark-z-index | _2000_ |
