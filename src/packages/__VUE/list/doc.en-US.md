# List

### Intro

It is recommended to use the [Scrolling Loading](#/zh-CN/component/infiniteloading) component provided by `NutUI` first.

This component is a **virtual list** component, which can only render the current visible area, and other parts will be rendered after the user scrolls into the visible area.

In most scenarios, you don't need to use this component. It may have problems such as sliding white screen, inaccurate calculation position, etc.

### Install

```javascript
import { createApp } from 'vue';
import { List } from '@nutui/nutui';

const app = createApp();
app.use();
```

### Basic Usage

:::demo

```html
<template>
  <div class="demo">
    <h2>Basic Usage</h2>
    <nut-cell>
      <nut-list :listData="count" @scroll-bottom="handleScroll">
        <template v-slot="{ item. index }">
          <div class="list-item"> {{ index }} </div>
        </template>
      </nut-list>
    </nut-cell>
  </div>
</template>
<script lang="ts">
  import { onMounted, reactive, toRefs } from 'vue';
  export default {
    props: {},
    setup() {
      const state = reactive({
        count: new Array(100).fill(0)
      });

      const handleScroll = () => {
        let arr = new Array(100).fill(0);
        const len = state.count.length;
        state.count = state.count.concat(arr.map((item: number, index: number) => len + index + 1));
      };

      onMounted(() => {
        state.count = state.count.map((item: number, index: number) => index + 1);
      });

      return { ...toRefs(state), handleScroll };
    }
  };
</script>
<style>
  body {
    width: 100%;
    height: 100vh;
  }
  #app {
    width: 100%;
    height: 100%;
  }
  .nut-cell {
    height: 100%;
  }
  .nut-list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 10px;
    height: 50px;
    background-color: #f4a8b6;
    border-radius: 10px;
  }
</style>
```

:::

## API

### Props

| Attribute        | Description                                                           | Type   | Default              |
| ---------------- | --------------------------------------------------------------------- | ------ | -------------------- |
| height           | The height/estimated height of the list item, supports unfixed height | Number | `80`                 |
| list-data        | List data                                                             | any[]  | `[]`                 |
| container-height | Container height(The maximum value cannot exceed the viewable area)   | Number | `Visual area height` |
| buffer-size      | data buffer length                                                    | Number | `5`                  |
| margin           | The gap between the lists is consistent with the custom style         | Number | `10`                 |

### Slots

| Attribute | Description    | Type   |
| --------- | -------------- | ------ |
| item      | List item data | Object |
| index     | Indexes        | Number |

### Events

| Event         | Description                            | Arguments |
| ------------- | -------------------------------------- | --------- |
| scroll-bottom | Triggered when scrolling to the bottom | -         |
| scroll-up     | scroll up                              | -         |
| scroll-down   | scroll down                            | -         |
