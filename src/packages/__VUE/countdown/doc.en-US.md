#  CountDown 倒计时

### 介绍
Used to display the countdown value in real time, and precision supports milliseconds.

### Install

``` javascript
import { createApp } from 'vue';
// vue
import { CountDown } from '@nutui/nutui';
// taro
import { CountDown } from '@nutui/nutui-taro';

const app = createApp();
app.use(CountDown);
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

Paused and restarted the countdown with the paused attribute

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
      <nut-countdown time="20000" ref="CountDown" :autoStart="false" format="ss:SS"/>
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
      const CountDown = ref(null);
      const start = () => {
        CountDown.value.start();
      };
      const pause = () => {
        CountDown.value.pause();
      };
      const reset = () => {
        CountDown.value.reset();
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

| Attribute | Description | Type | Default
| ----- | ----- | ----- | -----
| v-model | Current Time | Object | {}
| start-time | Start Time | String, Number | Date.now()
| end-time | End Time | String, Number | Date.now()
| format `v3.1.20` |  Format Time | String | HH:mm:ss
| millisecond `v3.1.20` |  Whether to enable millisecond render | Boolean | false
| auto-start `v3.1.20` |  Whether to auto start count down | Boolean | true
| time `v3.1.20` | Total time, unit milliseconds | String，Number | 0
| paused | Paused | Boolean | false
| show-days | Show Text Day `v3.1.20(Abandon)` | Boolean | false
| show-plain-text | Show Text `v3.1.20(Abandon)` | Boolean | false

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

### Ref

| Name | Description |
| ----- | ----- | 
| start | Count Down Start | 
| pause | Count Down Pause | 
| reset | Count Down Reset | 