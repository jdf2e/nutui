# Divider

### Intro
    
Separate content into multiple areas.

### Install
``` javascript
import { createApp } from 'vue';
import { Divider } from '@nutui/nutui';

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
  <div :style="{ fontSize: '14px', marginLeft: '27px', color: '#909ca4' }">
    Text
    <nut-divider direction="vertical" />
    <a href="#" :style="{ color: '#1989fa' }">Link</a>
    <nut-divider direction="vertical" />
    <a href="#" :style="{ color: '#1989fa' }">Link</a>
  </div>
</template>
```

:::

## API

### Props

| Attribute         | Description                             | Type   | Default           |
|--------------|----------------------------------|--------|------------------|
| dashed         | 	Whether to use dashed border             | boolean | `false`                |
| hairline        | Whether to use hairline                         | boolean | `true`                |
| content-position        | Content position, can be set to `left` or `right`                       | string | `center`                |
| direction         | The direction of divider             | string | `horizontal`                |

### Slots

| Name | Description           | 
|--------|----------------|
| default  | Default slot | 
    

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --------------------------------------- | -------------------------- |
| --nut-divider-margin | _16px 0_ |
| --nut-divider-text-font-size | _var(--nut-font-size-2)_ |
| --nut-divider-text-color | _#909ca4_ |
| --nut-divider-line-height | _2px_ |
| --nut-divider-before-margin-right | _16px_ |
| --nut-divider-after-margin-left | _16px_ |
| --nut-divider-vertical-height | _12px_ |
| --nut-divider-vertical-top | _2px_ |
| --nut-divider-vertical-border-left | _rgba(0, 0, 0, 0.06)_ |
| --nut-divider-vertical-margin | _0 8px_ |