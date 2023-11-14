# Countdown 倒计时

### 介绍

Used to display the countdown value in real time, and precision supports milliseconds.

### Install

```js
import { createApp } from 'vue';
import { Countdown } from '@nutui/nutui';

const app = createApp();
app.use(Countdown);
```

### Basic Usage

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

Different countdown display text can be realized by setting the `format` attribute.

:::demo

```vue
<template>
  <nut-countdown :end-time="end" format="DD Day HH : mm : ss" />
</template>

<script setup>
import { ref } from 'vue';
const end = ref(Date.now() + 60 * 1000);
</script>
```

:::

### Millisecond

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

### Server Time Prevails

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

### End-Time of Asyn Update

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

### Manual Control

Paused and restarted the countdown with the `paused` attribute

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

### Custom Style

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

### Handle Control

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

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Current Time | object | `{}` |
| start-time | Start Time | string \| number | `Date.now()` |
| end-time | End Time | string \| number | `Date.now()` |
| format | Format Time | string | `HH:mm:ss` |
| millisecond | Whether to enable millisecond render | boolean | `false` |
| auto-start | Whether to auto start count down | boolean | `true` |
| time | Total time, unit milliseconds | string \| number | `0` |
| paused | Paused | boolean | `false` |
| show-days | Show Text Day | boolean | `false` |
| show-plain-text | Show Text | boolean | `false` |

### Format

| Name | Description |
| --- | --- |
| DD | Day |
| HH | Hour |
| mm | Minute |
| ss | Second |
| S | Millisecond, 1-digit |
| SS | Millisecond, 2-digits |
| SSS | Millisecond, 3-digits |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| end`v4.1.5` | Emitted when count down end | Residual Timestamp |
| paused`v4.1.5` | Emitted when count down paused | Residual Timestamp |
| restart`v4.1.5` | Emitted when count down restart | Residual Timestamp |
| on-end | Emitted when count down end | Residual Timestamp |
| on-paused | Emitted when count down paused | Residual Timestamp |
| on-restart | Emitted when count down restart | Residual Timestamp |

### Methods

| Name | Description |
| --- | --- |
| start | Count Down Start |
| pause | Count Down Pause |
| reset | Count Down Reset |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nut-countdown-display | _flex_ |
| --nut-countdown-color | _inherit_ |
| --nut-countdown-font-size | _initial_ |
