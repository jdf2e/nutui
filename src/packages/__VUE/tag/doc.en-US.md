# Tag

### Intro

Labels for tagging and classification.

### Install

```javascript

import { createApp } from 'vue';
import { Tag } from '@nutui/nutui';

const app = createApp();
app.use(Tag);

```

### Basic Usage

:::demo
```html
<template>
 <nut-cell-group title="Basic Usage">
    <nut-cell title="primary">
      <template v-slot:link>
        <nut-tag type="primary">Tag</nut-tag>
      </template>
    </nut-cell>
    <nut-cell title="success">
      <template v-slot:link>
        <nut-tag type="success">Tag</nut-tag>
      </template>
    </nut-cell>
    <nut-cell title="danger">
      <template v-slot:link>
        <nut-tag type="danger">Tag</nut-tag>
      </template>
    </nut-cell>
    <nut-cell title="warning">
      <template v-slot:link>
        <nut-tag type="warning">Tag</nut-tag>
      </template>
    </nut-cell>
  </nut-cell-group>
</template>

```
:::

### Style 

:::demo
```html
<template>
  <nut-cell-group title="Style">
    <nut-cell title="plain">
      <template v-slot:link>
        <nut-tag plain>Tag</nut-tag>
      </template>
    </nut-cell>
    <nut-cell title="round">
      <template v-slot:link>
        <nut-tag round type="primary">Tag</nut-tag>
      </template>
    </nut-cell>
    <nut-cell title="mark">
      <template v-slot:link>
        <nut-tag mark type="primary">Tag</nut-tag>
      </template>
    </nut-cell>
    <nut-cell title="closeable">
      <template v-slot:link>
        <nut-tag v-if="show" closeable @close="close" type="primary">Tag</nut-tag>
      </template>
    </nut-cell>
  </nut-cell-group>
</template>


<script lang="ts">
import { ref } from 'vue';

export default {
  setup() {
    const show = ref(true);
    const close = () => {
      show.value = false;
    };

    return {
      close,
      show
    };
  }
};
</script>



```
:::


### Custom Color

:::demo
```html
<template>
  <nut-cell-group title="Custom Color">
    <nut-cell title="background color">
      <template v-slot:link>
        <nut-tag color="#FA685D">Tag</nut-tag>
      </template>
    </nut-cell>
    <nut-cell title="text color">
      <template v-slot:link>
        <nut-tag color="#E9E9E9" textColor="#999999">Tag</nut-tag>
      </template>
    </nut-cell>
    <nut-cell title="plain color">
      <template v-slot:link>
        <nut-tag color="#FA2400" plain>Tag</nut-tag>
      </template>
    </nut-cell>
  </nut-cell-group>
</template>

```
:::


## API
### Props  

| Attribute | Description | Type | Default |
|------------|--------------------------------------------------|---------|-----------|
| type       | Label type，can be set `primary` `success` `danger` `warning` | String  | `default` |
| color      | Label color                                         | String  | -         |
| text-color | Text color, which takes precedence over the color attribute| String  | `white`   |
| plain      | Whether it is plain | Boolean | `false`   |
| round      | Whether it is round                                   | Boolean | `false`   |
| mark       | Whether it is mark                                   | Boolean | `false`   |
| closeable  | Whether it is a closeable tag       | Boolean | `false`   |


### Slots

| Name   | Description           |
|---------|--------------|
| default | Label display content |

### Events

| Event             | Description                     | Arguments        |
|----------|----------|----------|
| click    | click event | event    |
| close    | close event | event    |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --------------------------------------- | -------------------------- | ---- |
| --nut-tag-font-size| _12px_ | -  |
| --nut-tag-default-border-radius| _4px_ | -  |
| --nut-tag-round-border-radius| _8px_ | -  |
| --nut-tag-default-background-color| _#000000_ | -  |
| --nut-tag-primary-background-color| _#3460fa_ | -  |
| --nut-tag-success-background-color| _#4fc08d_ | -  |
| --nut-tag-danger-background-color| _linear-gradient(135deg,rgba(242, 20, 12, 1) 0%,rgba(232, 34, 14, 1) 69.83950099728881%,rgba(242, 77, 12, 1) 100%)_ | -  |
| --nut-tag-danger-background-color-plain| _#df3526_ | -  |
| --nut-tag-warning-background-color| _#f3812e_ | -  |
| --nut-tag-default-color| _#ffffff_ | -  |
| --nut-tag-border-width| _1px_ | -  |
| --nut-tag-plain-background-color| _#fff_ | -  |
| --nut-tag-height| _auto_ | -  |
