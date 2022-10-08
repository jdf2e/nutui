# Divider

### Intro
    
Separate content into multiple areas.

### Install
``` javascript
import { createApp } from 'vue';
// vue
import { Divider } from '@nutui/nutui';
// taro
import { Divider } from '@nutui/nutui-taro';

const app = createApp();
app.use(Divider);
```


### Basic Usage

Default render one horizontal divider line.

:::demo

``` html
<template>
  <nut-divider />
</template>
```

:::

### With Text

Insert text into divider with default slot.

:::demo

``` html
<template>
  <nut-divider>text</nut-divider>
</template>
```

:::

### Content Position

Set Content Position with content-position attribute.

:::demo

``` html
<template>
  <nut-divider content-position="left">text</nut-divider>
  <nut-divider content-position="right">text</nut-divider>
</template>
```

:::

### Dashed

Render dashed divider line with dashed attribute.


:::demo

``` html
<template>
  <nut-divider dashed>text</nut-divider>
</template>
```

:::

### Custom Style

User can custom divider style with style attribute.

:::demo

``` html
<template>
  <nut-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">text</nut-divider>
</template>
```

:::

### Vertical Divider

:::demo

``` html
<template>
  <nut-cell>
    <div :style="{fontSize: '14px'}">
      Text
      <nut-divider direction="vertical" />
      <a href="#" :style="{ color: '#1989fa' }">Link</a>
      <nut-divider direction="vertical" />
      <a href="#" :style="{ color: '#1989fa' }">Link</a>
    </div>
  </nut-cell>
</template>
```

:::

## API

### Props

| Attribute         | Description                             | Type   | Default           |
|--------------|----------------------------------|--------|------------------|
| dashed         | 	Whether to use dashed border             | Boolean | false                |
| hairline        | Whether to use hairline                         | Boolean | true                |
| content-position        | Content position, can be set to left or right                       | String | center                |
| direction `v3.1.21`         | The direction of divider             | String | 'horizontal'                |

### Slots

| Name | Description           | 
|--------|----------------|
| default  | Default slot | 
    