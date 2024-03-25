# InfiniteLoading

### Intro

Scrolling to the bottom of the list automatically loads more data.

### Install

```js
import { createApp } from 'vue'
import { InfiniteLoading } from '@nutui/nutui'

const app = createApp()
app.use(InfiniteLoading)
```

### Basic Usage

:::demo

```vue
<template>
  <nut-infinite-loading v-model="infinityValue" :has-more="hasMore" @load-more="loadMore">
    <div class="test" v-for="(item, index) in sum" :key="index">{{ index }}</div>
  </nut-infinite-loading>
</template>

<script setup>
import { ref } from 'vue'
const cycle = ref(0)
const tabsValue = ref(0)
const sum = ref(24)
const infinityValue = ref(false)
const hasMore = ref(true)
const loadMore = (done) => {
  setTimeout(() => {
    sum.value = sum.value + 24
    cycle.value++
    if (cycle.value > 2) hasMore.value = false
    infinityValue.value = false
  }, 1000)
}
</script>

<style>
.test {
  padding: 12px 0 12px 20px;
  border-top: 1px solid #eee;
}
</style>
```

:::

### Custom loading copywriting

:::demo

```vue
<template>
  <nut-infinite-loading
    v-model="infinityValue"
    load-txt="Loading..."
    load-more-txt="End~"
    :has-more="hasMore"
    @load-more="loadMore"
  >
    <div class="test" v-for="(item, index) in sum" :key="index">{{ index }}</div>
  </nut-infinite-loading>
</template>

<script setup>
import { ref } from 'vue'
const cycle = ref(0)
const tabsValue = ref(0)
const sum = ref(24)
const infinityValue = ref(false)
const hasMore = ref(true)
const loadMore = (done) => {
  setTimeout(() => {
    sum.value = sum.value + 24
    cycle.value++
    if (cycle.value > 2) hasMore.value = false
    infinityValue.value = false
  }, 1000)
}
</script>

<style>
.test {
  padding: 12px 0 12px 20px;
  border-top: 1px solid #eee;
}
</style>
```

:::

### Use with PullRefresh

:::demo

```vue
<template>
  <nut-infinite-loading v-model="infinityValue" :has-more="hasMore" @load-more="loadMore">
    <nut-pull-refresh v-model="refresh" @refresh="refreshFun">
      <div class="test" v-for="(item, index) in sum" :key="index">{{ index }}</div>
    </nut-pull-refresh>
  </nut-infinite-loading>
</template>

<script setup>
import { ref } from 'vue'
const cycle = ref(0)
const tabsValue = ref(0)
const sum = ref(24)
const infinityValue = ref(false)
const hasMore = ref(true)
const loadMore = (done) => {
  setTimeout(() => {
    sum.value = sum.value + 24
    cycle.value++
    if (cycle.value > 2) hasMore.value = false
    infinityValue.value = false
  }, 1000)
}
const refresh = ref(false)
const refreshFun = () => {
  setTimeout(() => {
    refresh.value = false
    sum.value = 24
  }, 3000)
}
</script>

<style>
.test {
  padding: 12px 0 12px 20px;
  border-top: 1px solid #eee;
}
</style>
```

:::

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Loading status | boolean | `false` |
| has-more | Has more data | boolean | `true` |
| threshold | The loadMore event will be Emitted when the distance between the scrollbar and the bottom is less than threshold | number | `200` |
| use-capture | Whether to use capture mode | boolean | `false` |
| load-more-txt | "No more" text | string | `Oops, this is the bottom` |
| load-txt | Pull on loading text | string | `Loading...` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| load-more | Emitted when continues to load | - |
| scroll-change | Real-time monitoring of roll height | height |

### Slots

| Name | Description |
| --- | --- |
| default | Custom content |
| loading | Loading text |
| loading-icon | Custom loading icon |
| finished | Finished text |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nut-infiniteloading-bottom-color | _#c8c8c8_ |
