# Countdown 倒计时

### 介绍

用于实时展示倒计时数值，支持毫秒精度。

### 安装

```js
import { createApp } from 'vue';
import { Countdown } from '@nutui/nutui';

const app = createApp();
app.use(Countdown);
```

### 基础用法

:::demo

```vue
<template>
  <nut-countdown :end-time="end"></nut-countdown>
</template>

<script setup>
import { ref } from 'vue';
const end = ref(Date.now() + 60 * 1000);
</script>
```

:::

### 自定义格式

通过设置 `format` 属性可实现不同的倒计时展示文本

:::demo

```vue
<template>
  <nut-countdown :end-time="end" format="DD 天 HH 时 mm 分 ss 秒" />
</template>

<script setup>
import { ref } from 'vue';
const end = ref(Date.now() + 60 * 1000);
</script>
```

:::

### 毫秒级渲染

:::demo

```vue
<template>
  <nut-countdown :end-time="end" millisecond format="HH:mm:ss:SS" />
</template>

<script setup>
import { ref } from 'vue';
const end = ref(Date.now() + 60 * 1000);
</script>
```

:::

### 以服务端的时间为准

:::demo

```vue
<template>
  <nut-countdown :start-time="serverTime" :end-time="end" />
</template>

<script setup>
import { ref } from 'vue';
const serverTime = ref(Date.now() - 20 * 1000);
const end = ref(Date.now() + 60 * 1000);
</script>
```

:::

### 异步更新结束时间

:::demo

```vue
<template>
  <nut-countdown :end-time="asyncEnd" />
</template>

<script setup>
import { ref, onMounted } from 'vue';
const asyncEnd = ref(0);
onMounted(() => {
  setTimeout(() => {
    asyncEnd.value = Date.now() + 30 * 1000;
  }, 3000);
});
</script>
```

:::

### 控制开始和暂停倒计时

通过 `paused` 属性实现倒计时的暂停和重启

:::demo

```vue
<template>
  <nut-cell>
    <nut-countdown :end-time="end" :paused="paused" @paused="onPaused" @restart="onRestart" />
    <div style="position:absolute;right:10px;top:9px">
      <nut-button type="primary" size="small" @click="toggle">{{ paused ? 'start' : 'stop' }}</nut-button>
    </div>
  </nut-cell>
</template>
<script setup>
import { ref } from 'vue';
const paused = ref(false);
const end = ref(Date.now() + 60 * 1000);

const toggle = () => {
  paused.value = !paused.value;
};
const onPaused = (v) => {
  console.log('paused: ', v);
};
const onRestart = (v) => {
  console.log('restart: ', v);
};
</script>
```

:::

### 自定义展示样式

:::demo

```vue
<template>
  <nut-cell>
    <nut-countdown v-model="resetTime" :end-time="end">
      <div class="countdown-part-box">
        <div class="part-item-symbol">{{ resetTime.d }}天</div>
        <div class="part-item h">{{ resetTime.h }}</div>
        <span class="part-item-symbol">:</span>
        <div class="part-item m">{{ resetTime.m }}</div>
        <span class="part-item-symbol">:</span>
        <div class="part-item s">{{ resetTime.s }}</div>
      </div>
    </nut-countdown>
  </nut-cell>
</template>
<script setup>
import { ref } from 'vue';
const end = ref(Date.now() + 60 * 1000);
const resetTime = ref({
  d: '1',
  h: '00',
  m: '00',
  s: '00'
});
</script>
<style>
.countdown-part-box {
  display: flex;
  align-items: center;
}
.part-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 25px;
  background: #e8220e;
  color: #fff;
  font-size: 14px;
  border-radius: 6px;
}

.part-item-symbol {
  margin: 0 5px;
}
</style>
```

:::

### 手动控制

通过 `ref` 获取到组件实例后，可以调用 `start`、`pause`、`reset` 方法。在使用手动控制时，通过 `time` 属性实现倒计时总时长，单位为毫秒。`start-time`、`end-time` 属性失效

:::demo

```vue
<template>
  <nut-cell>
    <nut-countdown time="20000" ref="Countdown" :auto-start="false" format="ss:SS" />
  </nut-cell>
  <nut-grid :column-num="3">
    <nut-grid-item><nut-button type="primary" @click="start">开始</nut-button></nut-grid-item>
    <nut-grid-item><nut-button type="primary" @click="pause">暂停</nut-button></nut-grid-item>
    <nut-grid-item><nut-button type="primary" @click="reset">重置</nut-button></nut-grid-item>
  </nut-grid>
</template>
<script setup>
import { ref } from 'vue';
const Countdown = ref(null);
const start = () => {
  Countdown.value.start();
};
const pause = () => {
  Countdown.value.pause();
};
const reset = () => {
  Countdown.value.reset();
};
</script>
```

:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 当前时间，自定义展示内容时生效 | object | `{}` |
| start-time | 开始时间 | string \| number | `Date.now()` |
| end-time | 结束时间 | string \| number | `Date.now()` |
| format | 时间格式 | string | `HH:mm:ss` |
| millisecond | 是否开启毫秒级渲染 | boolean | `false` |
| auto-start | 是否自动开始倒计时 | boolean | `true` |
| time | 倒计时显示时间，单位是毫秒。`auto-start` 为 `false` 时生效 | string \| number | `0` |
| paused | 是否暂停 | boolean | `false` |

### format 格式

| 格式 | 说明 |
| --- | --- |
| DD | 天数 |
| HH | 小时 |
| mm | 分钟 |
| ss | 秒数 |
| S | 毫秒（1 位） |
| SS | 毫秒（2 位） |
| SSS | 毫秒（3 位） |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| end`v4.1.5` | 倒计时结束时 | 剩余时间戳 |
| paused`v4.1.5` | 暂停时 | 剩余时间戳 |
| restart`v4.1.5` | 暂停时 | 剩余时间戳 |
| on-end | 倒计时结束时 | 剩余时间戳 |
| on-paused | 暂停时 | 剩余时间戳 |
| on-restart | 暂停时 | 剩余时间戳 |

### Methods

通过 `ref` 可以获取到 `Countdown` 实例并调用实例方法。

| 方法名 | 说明 |
| --- | --- |
| start | 开始倒计时 |
| pause | 暂停倒计时 |
| reset | 重设倒计时，若 `auto-start`为 `true`，重设后会自动开始倒计时 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nut-countdown-display | _flex_ |
| --nut-countdown-color | _inherit_ |
| --nut-countdown-font-size | _initial_ |
