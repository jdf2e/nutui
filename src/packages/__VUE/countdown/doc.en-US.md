#  Countdown 倒计时

### 介绍
Used to display the countdown value in real time, and precision supports milliseconds.

### Install

``` javascript
import { createApp } from 'vue';
import { Countdown } from '@nutui/nutui';

const app = createApp();
app.use(Countdown);
```

### Basic Usage

:::demo
```html
<template>
  <nut-cell>
    <nut-countdown :end-time="end" ></nut-countdown>
  </nut-cell>
</template>

<script>
  import { ref,reactive,toRefs } from 'vue';
  export default {
    setup(props) {
      const state = reactive({
        end: Date.now() + 60 * 1000,
      });
      return {
        ...toRefs(state)
      };
    }
  }
</script>

```
:::

### 自定义格式

Different countdown display text can be realized by setting the `format` attribute.

:::demo
```html
<template>
  <nut-cell>
    <nut-countdown :endTime="end" format="DD Day HH : mm : ss" />
  </nut-cell>
</template>
<script>
  import { ref,reactive,toRefs } from 'vue';
  export default {
    setup(props) {
      const state = reactive({
        end: Date.now() + 60 * 1000,
      });
      return {
        ...toRefs(state)
      };
    }
  }
</script>
```
:::

### Millisecond

:::demo
```html
<template>
  <nut-cell>
    <nut-countdown :endTime="end" millisecond format="HH:mm:ss:SS" />
  </nut-cell>
</template>
<script>
  import { ref,reactive,toRefs } from 'vue';
  export default {
    setup(props) {
      const state = reactive({
        end: Date.now() + 60 * 1000,
      });
      return {
        ...toRefs(state)
      };
    }
  }
</script>
```
:::

### Server Time Prevails

:::demo
```html
<template>
  <nut-cell>
    <nut-countdown  :startTime="serverTime" :endTime="end" ></nut-countdown>
  </nut-cell>
</template>

<script>
  import { ref,reactive,toRefs } from 'vue';
  export default {
    setup(props) {
      const state = reactive({
          serverTime: Date.now() - 20 * 1000,
          end: Date.now() + 60 * 1000,
        });
      return {
        ...toRefs(state)
      };
    }
  }
</script>
```
:::

### End-Time of Asyn Update

:::demo
```html
<template>
  <nut-cell>
    <nut-countdown :end-time="asyncEnd" ></nut-countdown>
  </nut-cell>
</template>

<script>
  import { ref,reactive,toRefs } from 'vue';
  export default {
    setup(props) {
      const state = reactive({
          asyncEnd: 0,
      });
      // 模拟异步时间
      setTimeout(() => {
        state.asyncEnd = Date.now() + 30 * 1000;
      }, 3000);
      return {
        ...toRefs(state)
      };
    }
  }
</script>
```
:::

### Manual Control

Paused and restarted the countdown with the `paused` attribute

:::demo
```html
<template>
  <nut-cell>
      <nut-countdown  :endTime="end" :paused="paused" @on-paused="onpaused" @on-restart="onrestart" />
      <div style="position:absolute;right:10px;top:9px">
          <nut-button type="primary" size='small' @click="toggle">{{ paused ? 'start' : 'stop' }}</nut-button>
      </div>
  </nut-cell>
</template>
<script>
  import { ref,reactive,toRefs } from 'vue';
  export default {
    setup(props) {
      const state = reactive({
        paused: false,
        end: Date.now() + 60 * 1000,
      });

      const toggle = ()=> {
        state.paused = !state.paused;
      }
      const onpaused = (v)=> {
        console.log('paused: ', v);
      }
      const onrestart = (v)=> {
        console.log('restart: ', v);
      }
      return {
          toggle,
          onpaused,
          onrestart,
        ...toRefs(state)
      };
    }
  }
</script>

```
:::

### Custom Style

:::demo
```html
<template>
  <nut-cell>
      <nut-countdown v-model="resetTime" :endTime="end">
          <div class="countdown-part-box">
              <div class="part-item-symbol">{{ resetTime.d }}Day</div>
            <div class="part-item h">{{ resetTime.h }}</div>
            <span class="part-item-symbol">:</span>
            <div class="part-item m">{{ resetTime.m }}</div>
            <span class="part-item-symbol">:</span>
            <div class="part-item s">{{ resetTime.s }}</div>
          </div>
      </nut-countdown>
  </nut-cell>
</template>
<script>
  import { ref,reactive,toRefs } from 'vue';
  export default {
    setup(props) {
      const state = reactive({
          end: Date.now() + 60 * 1000,
          resetTime: {
            d: '1',
            h: '00',
            m: '00',
            s: '00'
          }
        });
      return {
        ...toRefs(state)
      };
    }
  }
</script>
<style lang="scss" scoped>
.countdown-part-box {
  display: flex;
  align-items: center;

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
}
</style>

```
:::

### Handle Control

:::demo
```html
<template>
  <nut-cell>
      <nut-countdown time="20000" ref="Countdown" :autoStart="false" format="ss:SS"/>
  </nut-cell>
  <nut-grid :column-num="3">
    <nut-grid-item><nut-button type="primary" @click="start">Start</nut-button></nut-grid-item>
    <nut-grid-item><nut-button type="primary" @click="pause">Pause</nut-button></nut-grid-item>
    <nut-grid-item><nut-button type="primary" @click="reset">Reset</nut-button></nut-grid-item>
  </nut-grid>
</template>
<script>
  import { ref,reactive,toRefs } from 'vue';
  export default {
    setup(props) {
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
      return {
          toggle,
          onpaused,
          onrestart,
        ...toRefs(state)
      };
    }
  }
</script>

```
:::
## API

### Props

| Attribute | Description | Type | Default |
| ----- | ----- | ----- | ----- |  
| v-model | Current Time | object | `{}` |
| start-time | Start Time | string \| number | `Date.now()` |
| end-time | End Time | string \| number | `Date.now()` |
| format |  Format Time | string | `HH:mm:ss` |
| millisecond |  Whether to enable millisecond render | boolean | `false` |
| auto-start |  Whether to auto start count down | boolean | `true` |
| time | Total time, unit milliseconds | string \| number | `0` |
| paused | Paused | boolean | `false` |
| show-days | Show Text Day | boolean | `false` |
| show-plain-text | Show Text | boolean | `false` |

### Format

| Name | Description | 
| ----- | ----- | 
| DD | Day | 
| HH | Hour | 
| mm | Minute | 
| ss | Second | 
| S | Millisecond, 1-digit | 
| SS | Millisecond, 2-digits | 
| SSS | Millisecond, 3-digits | 

### Events

| Event | Description | Arguments
| ----- | ----- | ----- 
| on-end | Emitted when count down end | Residual Timestamp
| on-paused | Emitted when count down paused | Residual Timestamp
| on-restart | Emitted when count down restart | Residual Timestamp

### Methods

| Name | Description |
| ----- | ----- | 
| start | Count Down Start | 
| pause | Count Down Pause | 
| reset | Count Down Reset | 
## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value | 
| --------------------------------------- | -------------------------- | 
| --nut-countdown-display| _flex_ | 
| --nut-countdown-color| _inherit_ | 
| --nut-countdown-font-size| _initial_ | 