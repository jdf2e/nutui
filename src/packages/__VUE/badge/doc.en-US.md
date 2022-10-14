# Badge

### Intro

A red dot, number or text appearing in the upper right corner of the icon or text indicates that there is new content or pending information.

### Install

```javascript

import { createApp } from 'vue';
// vue
import { Badge } from '@nutui/nutui';
// taro
import { Badge } from '@nutui/nutui-taro';

const app = createApp();
app.use(Badge);

```


### Basic Usage

:::demo
```html
<template>
  <div class="demo">
    <nut-badge :value="8">
      <nut-avatar icon="my" shape="square"></nut-avatar>
    </nut-badge>
    <nut-badge :value="76">
      <nut-avatar icon="my" shape="square"></nut-avatar>
    </nut-badge>
    <nut-badge value="NEW">
      <nut-avatar icon="my" shape="square"></nut-avatar>
    </nut-badge>
    <nut-badge dot>
      <nut-avatar icon="my" shape="square"></nut-avatar>
    </nut-badge>
  </div>
</template>

<style lang="scss" scoped>
.demo{
  padding: 30px 17px 0 17px;
}
.nut-badge {
  margin-right: 40px;
}
</style>

```
:::

### Max

:::demo
```html
<template>
  <div class="demo">
    <nut-badge :value="200" :max="9">
      <nut-avatar icon="my" shape="square"></nut-avatar>
    </nut-badge>
    <nut-badge :value="200" :max="20">
      <nut-avatar icon="my" shape="square"></nut-avatar>
    </nut-badge>
    <nut-badge :value="200" :max="99">
      <nut-avatar icon="my" shape="square"></nut-avatar>
    </nut-badge>
  </div>
</template>

<style lang="scss" scoped>
.demo{
  padding: 30px 17px 0 17px;
}
.nut-badge {
  margin-right: 40px;
}
</style>

```
:::

### Custom Color

:::demo
```html
<template>
  <div class="demo">
    <nut-badge :value="8" color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)">
      <nut-avatar icon="my" shape="square"></nut-avatar>
    </nut-badge>
    <nut-badge :value="76" color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)">
      <nut-avatar icon="my" shape="square"></nut-avatar>
    </nut-badge>
    <nut-badge value="NEW" color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)">
      <nut-avatar icon="my" shape="square"></nut-avatar>
    </nut-badge>
    <nut-badge dot color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)">
      <nut-avatar icon="my" shape="square"></nut-avatar>
    </nut-badge>
  </div>
</template>

<style lang="scss" scoped>
.demo{
  padding: 30px 17px 0 17px;
}
.nut-badge {
  margin-right: 40px;
}
</style>

```
:::

### Custom Content

:::demo
```html
<template>
  <div class="demo">
    <nut-badge>
      <template #icons>
        <nut-icon name="Check" color="#ffffff" size="12"></nut-icon>
      </template>
      <nut-avatar icon="my" shape="square"></nut-avatar>
    </nut-badge>
    <nut-badge>
      <template #icons>
        <nut-icon name="link" color="#ffffff" size="12"></nut-icon>
      </template>
      <nut-avatar icon="my" shape="square"></nut-avatar>
    </nut-badge>
    <nut-badge>
      <template #icons>
        <nut-icon name="download" color="#ffffff" size="12"></nut-icon>
      </template>
      <nut-avatar icon="my" shape="square"></nut-avatar>
    </nut-badge>
  </div>
</template>

<style lang="scss" scoped>
.demo{
  padding: 30px 17px 0 17px;
}
.nut-badge {
  margin-right: 40px;
}
</style>

```
:::

### Custom Position 

:::demo
```html
<template>
  <div class="demo">
    <nut-badge :value="8" top="5" right="5">
      <nut-avatar icon="my" shape="square"></nut-avatar>
    </nut-badge>
    <nut-badge :value="76" top="10" right="10">
      <nut-avatar icon="my" shape="square"></nut-avatar>
    </nut-badge>
    <nut-badge value="NEW">
      <nut-avatar icon="my" shape="square"></nut-avatar>
    </nut-badge>
   </div>
</template>

<style lang="scss" scoped>
.demo{
  padding: 30px 17px 0 17px;
}
.nut-badge {
  margin-right: 40px;
}
</style>

```
:::

### Standalone

:::demo
```html
<template>
  <div class="demo">
    <nut-badge :value="8"> </nut-badge>
    <nut-badge :value="76"> </nut-badge>
    <nut-badge value="NEW"> </nut-badge>
  </div>
</template>

<style lang="scss" scoped>
.demo{
  padding: 30px 17px 0 17px;
}
.nut-badge {
  margin-right: 40px;
}
</style>

```
:::

## API
### Props 

| Attribute | Description | Type | Default |
|---------|--------------------------------------------|---------|-----------|
| value   | content                                 | String  | -         |
| max     | When value is a numeric value, the maximum value                     | Number  | `10000`   |
| z-index | badge z-index                          | Number  | `10`      |
| dot     | whether to dot                                 | Boolean | `false`   |
| hidden  | whether to hide                                   | Boolean | `false`   |
| top     | Up and down offset, support unit setting, for example: 5px | Number  | `0`       |
| right   | Left and right offset, support unit setting, for example: 5px | Number  | `0`       |
| color   |  badge background color    | String  | `#fa2c19` |

### Slots

| Name   | Description           |
|---------|--------------|
| default | Default slot |
| icons | 	Icon slot |
