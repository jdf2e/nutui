# Tag

### Intro

Labels for tagging and classification.

### Install

```javascript

import { createApp } from 'vue';
// vue
import { Tag } from '@nutui/nutui';
// taro
import { Tag } from '@nutui/nutui-taro';

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
