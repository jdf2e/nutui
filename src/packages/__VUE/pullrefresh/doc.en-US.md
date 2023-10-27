# PullRefresh

### Intro

Used to provide interactive operations for pull-down refresh.

### Install

```js
import { createApp } from 'vue';
import { PullRefresh } from '@nutui/nutui';

const app = createApp();
app.use(PullRefresh);
```

### Basic Usage

The refresh event will be Emitted when pull refresh, you should set v-model to false to reset loading status after process refresh event.

:::demo

```vue
<template>
  <nut-pull-refresh v-model="refresh" @refresh="refreshFun">
    <div>Try to pull down!</div>
    <div v-for="(item, index) in 24" class="test">{{ index }}</div>
  </nut-pull-refresh>
</template>

<script setup>
import { ref } from 'vue';
const refresh = ref(false);
const refreshFun = () => {
  setTimeout(() => {
    refresh.value = false;
  }, 3000);
};
</script>

<style>
.test {
  padding: 12px 0 12px 20px;
  border-top: 1px solid #eee;
}
</style>
```

:::

### Custom Tips

The pull-down refresh has four states:`'loading' | 'loosing' | 'pulling' `，respectively corresponding to the attribute `pullingTxt、loosingTxt、loadingTxt` ，Complex styles can be implemented through slots。

:::demo

```vue
<template>
  <nut-pull-refresh v-model="refresh2" loosing-txt="Relax" loading-txt="Desperate loading..." @refresh="refreshFun">
    <template #pulling-txt>
      <div>Pull</div>
    </template>
    <div>Try to pull down!</div>
    <div v-for="(item, index) in 24" class="test">{{ index }}</div>
  </nut-pull-refresh>
</template>

<script setup>
import { ref } from 'vue';
const refresh = ref(false);
const refreshFun = () => {
  setTimeout(() => {
    refresh.value = false;
  }, 3000);
};
</script>

<style>
.test {
  padding: 12px 0 12px 20px;
  border-top: 1px solid #eee;
}
</style>
```

:::

### Customize the listener

The trigger conditions for PullRefresh are: The parent position of the scroll bar at the top of the rolling Element, the parent of rolling Element to determine whether through the parent set `overflowY: scroll | auto | overlay`, if the parent Element for ` `, trigger conditions for `Element. The scrollTop` = = = 0.

:::demo

```vue
<template>
  <div class="parentpage">
    <nut-pull-refresh v-model="refresh" @refresh="refreshFun">
      <div v-for="(item, index) in 24" class="test">{{ index }}</div>
    </nut-pull-refresh>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const refresh = ref(false);
const refreshFun = () => {
  setTimeout(() => {
    refresh.value = false;
  }, 3000);
};
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
|  ---  |  ---  |  ---  |  ---  |
| v-model | Loading status | boolean | `false` |
| pull-distance | The distance to trigger the pull refresh | number \| string | `50` |
| head-height | Height of head | number \| string | `50` |
| loading-icon | Loading icon | string | `loading` |
| pulling-txt | Text to show when pulling | string | `Pull to refresh...` |
| loosing-txt | Text to show when loosing | string | `Loose to refresh...` |
| loading-txt | Text to show when loading | string | `Loading...` |
| duration | Pull down animation duration | number | `0.3` |

### Events

| Event | Description | Arguments |
|  ---  |  ---  |  ---  |
| change | Emitted when draging or status changed | {status:string,distance:number} |
| refresh | Emitted after pulling refresh | - |

### Slots

| Name | Description |
|  ---  |  ---  |
| pulling | Content of head when at pulling |
| loosing | Content of head when at loosing |
| loading | Content of head when at loading |
| default | Default slot |
