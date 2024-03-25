# image

### Intro

Enhanced img tag with multiple image fill modes, support for loading hint, loading failure hint.

### Install

```js
import { createApp } from 'vue'
import { Image } from '@nutui/nutui'

const app = createApp()
app.use()
```

### Basic Usage

The basic usage is the same as that of the native IMG tag. You can set the native attributes such as SRC, width, height, and Alt.

> demo: image basic

### Object Fill

The `fit` attribute is used to set the image filling mode, which is equivalent to the original `Object-fit` attribute.

> demo: image fit

### Object Position

The position property can be used to set the position of the picture, which is equivalent to the original `Object-position` property when combined with the FIT property.

> demo: image position

### Round

The round attribute allows you to set the image to be round. Note that if the image is not contained and fit is contained or scale-down, a full circle cannot be contained.

> demo: image round

### Loading

The Image component provides a default `loading` prompt and supports custom content through the loading slot.

> demo: image loading

### Error

The Image component provides a default loading failure warning and supports custom content through the `error` slot.

> demo: image error

### LazyLoad

> demo: image lazy

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| src | Src | string | - |
| fit | Fit mode, same as object-fit | ImageFit | `fill` |
| position | Position, same as object-position | ImagePosition | `center` |
| alt | Alt | string | - |
| width | Width，Default unit `px` | string | - |
| height | Height，Default unit `px` | string | - |
| round | Whether to be round | boolean | `false` |
| radius | Border Raduis | string \| number | - |
| show-error | Whether to show error placeholder | boolean | `false` |
| show-loading | Whether to show loading placeholder | boolean | `true` |
| lazy-load`4.0.8` | lazy load | boolean | `false` |

### ImageFit

| Attribute | Description |
| --- | --- |
| contain | Keep aspect ratio, fully display the long side of the image |
| cover | Keep aspect ratio, fully display the short side of the image, cutting the long side |
| fill | Stretch and resize image to fill the content box |
| none | Not resize image |
| scale-down | Take the smaller of none or contain |

### ImagePosition

| Attribute | Description |
| --- | --- |
| center | Align Center |
| top | Align Top |
| right | Align Right |
| bottom | Align Bottom |
| left | Align Left |

### Slots

| Name | Description |
| --- | --- |
| loading | Custom loading placeholder |
| error | Custom error placeholder |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| click | Emitted when image is clicked | event: Event |
| load | Emitted when image loaded | - |
| error | Emitted when image load failed | - |
