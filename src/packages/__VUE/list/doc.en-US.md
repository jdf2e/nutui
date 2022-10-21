# List

### Intro
In normal list show and pull-up loading, we usually use the [InfiniteLoading](#/en-US/infiniteloading) component provided by `NutUI`. If we load a large amount of data, serious performance problems may occur, resulting in the view unable to respond to the operation for a period of time. At this time, we use the virtual list component `list`, which can ensure that only the current visual area is rendered, Other parts are rendered after the user scrolls to the visible area. Ensure page flow and improve performance.

### Install

```javascript

import { createApp } from 'vue';
// vue
import { List } from '@nutui/nutui';
// taro
import { List } from '@nutui/nutui-taro';

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
      <nut-list :height="50" :listData="count" @scroll-bottom="handleScroll">
        <template v-slot="{ item }">
          <div class="list-item">
            {{ item }}
          </div>
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
    })

    return { ...toRefs(state), handleScroll };
  }
};
</script>
<style lang="scss">
body {
  width: 100%;
  height: 100vh;
}
#app {
  width: 100%;
  height: 100%;
}
.demo {
  height: 100%;
  .nut-cell {
    height: 100%;
  }
  .list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    margin-bottom: 10px;
    background-color: #f4a8b6;
    border-radius: 10px;
  }
}
</style>
```

:::

## API

### Props

| Attribute         | Description                             | Type   | Default           |
|--------------|----------------------------------|--------|------------------|
| height         | The height of the list item               | Number | `50`                |
| list-data         | List data               | any[] | `[]`                |
| container-height `v3.1.19`        | Container height(The maximum value cannot exceed the viewable area)              | Number | `Visual area height`                |

### Slots

| Attribute         | Description                             | Type   |
|--------------|----------------------------------|--------|
| item         | List item data               | Object |
| index         | Indexes               | Number |

### Events

| Event | Description           | Arguments     |
|--------|----------------|--------------|
| scroll(Will be abandoned), `scroll-bottom` replaced  | Triggered when scrolling to the bottom | - |
| scroll-bottom `v3.1.21`   | Triggered when scrolling to the bottom | - |