# image 

### Intro

Enhanced img tag with multiple image fill modes, support for loading hint, loading failure hint.

### Install

```javascript

import { createApp } from 'vue';
import { Image } from '@nutui/nutui';

const app = createApp();
app.use();

```

### Basic Usage


The basic usage is the same as that of the native IMG tag. You can set the native attributes such as SRC, width, height, and Alt.

:::demo

```html
<template>
  <nut-image src="//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg" width="100" height="100"></nut-image>
</template>
```

:::

### Object Fill

The `fit` attribute is used to set the image filling mode, which is equivalent to the original `Object-fit` attribute.

:::demo

```html
<template>
  <nut-image 
    src="//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg" 
    width="100" 
    height="100"
    fit="contain"/>
</template>
```

:::

### Object Position

The position property can be used to set the position of the picture, which is equivalent to the original Object-position property when combined with the FIT property.

:::demo

```html
<template>
  <nut-image 
    src="//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg" 
    width="100" 
    height="100"
    fit="contain"
    postion="left"/>
</template>
```

:::

### Round

The round attribute allows you to set the image to be round. Note that if the image is not contained and fit is contained or scale-down, a full circle cannot be contained.

:::demo

```html
<template>
  <nut-image 
    src="//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg" 
    width="100" 
    height="100"
    round/>
</template>
```

:::

### Loading

The Image component provides a default loading prompt and supports custom content through the loading slot.

:::demo

```html
<template>
  <nut-image width="100" height="100" showLoading>
    <template #loading>
      <nut-icon name="loading"></nut-icon>
    </template>
  </nut-image>
</template>
```

:::

### Error

The Image component provides a default loading failure warning and supports custom content through the error slot.

:::demo

```html
<template>
  <nut-image src="https://x" width="100" height="100" showLoading>
    <template #error> <nut-icon name="circle-close"></nut-icon> </template>
  </nut-image>
</template>
```

:::

## API

### Props

| Attribute         | Description                             | Type   | Default           |
|--------------|----------------------------------|--------|------------------|
| src         | Src               | String | -                |
| fit         | Fit mode, same as object-fit     | ImageFit | 'fill'                |
| position    | Position, same as object-position  | ImagePosition | 'center'              |
| alt         | Alt               | String | -                |
| width         | Width，Default unit px             | String | -                |
| height         | Height，Default unit px              | String | -                |
| round         | Whether to be round               | Boolean | false              |
| radius         | Border Raduis               | String \| Numer | -                |
| show-error         | Whether to show error placeholder | Boolean | false              |
| show-loading         | Whether to show loading placeholder | Boolean | true              |

### ImageFit 

| Attribute         | Description                             |
|--------------|----------------------------------|
| contain         | Keep aspect ratio, fully display the long side of the image    |
| cover         | Keep aspect ratio, fully display the short side of the image, cutting the long side     |
| fill    | Stretch and resize image to fill the content box  |
| none    | Not resize image  |
| scale-down    | Take the smaller of none or contain  |

### ImagePosition 

| Attribute         | Description                             |
|--------------|----------------------------------|
| center         | Align Center    |
| top         | Align Top     |
| right    | Align Right  |
| bottom    | Align Bottom  |
| left   | Align Left  |

### Slots
| Attribute         | Description                             |
|--------------|----------------------------------|
| loading      | Custom loading placeholder     |
| error    | Custom error placeholder  |

### Events

| Event | Description           | Arguments     |
|--------|----------------|--------------|
| click  | Emitted when image is clicked | event: Event |
| load  | Emitted when image loaded | - |
| error  | Emitted when image load failed | event: Event |

