#  CountDown 倒计时

### 介绍
用于实时展示倒计时数值，支持毫秒精度。

### 安装


``` javascript
import { createApp } from 'vue';
// vue
import { CountDown } from '@nutui/nutui';
// taro
import { CountDown } from '@nutui/nutui-taro';

const app = createApp();
app.use(CountDown);
```

### 基础用法

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

通过设置 format 属性可实现不同的倒计时展示文本

:::demo
```html
<template>
  <nut-cell>
    <nut-countdown :endTime="end" format="DD 天 HH 时 mm 分 ss 秒" />
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

### 毫秒级渲染

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

### 以服务端的时间为准

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

### 异步更新结束时间

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

### 控制开始和暂停倒计时

通过 paused 属性实现倒计时的暂停和重启

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

### 自定义展示样式

:::demo
```html
<template>
  <nut-cell>
      <nut-countdown v-model="resetTime" :endTime="end">
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

### 手动控制

通过 ref 获取到组件实例后，可以调用 start、pause、reset 方法。在使用手动控制时，通过 time 属性实现倒计时总时长，单位为毫秒。startTime、endTime 属性失效

:::demo
```html
<template>
  <nut-cell>
      <nut-countdown time="20000" ref="CountDown" :autoStart="false" format="ss:SS"/>
  </nut-cell>
  <nut-grid :column-num="3">
    <nut-grid-item><nut-button type="primary" @click="start">开始</nut-button></nut-grid-item>
    <nut-grid-item><nut-button type="primary" @click="pause">暂停</nut-button></nut-grid-item>
    <nut-grid-item><nut-button type="primary" @click="reset">重置</nut-button></nut-grid-item>
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

| 字段 | 说明 | 类型 | 默认值
| ----- | ----- | ----- | -----
| v-model | 当前时间，自定义展示内容时生效 | Object | {}
| start-time | 开始时间 | String, Number | Date.now()
| end-time | 结束时间 | String, Number | Date.now()
| format `v3.1.20` |  时间格式 | String | HH:mm:ss
| millisecond `v3.1.20` |  是否开启毫秒级渲染 | Boolean | false
| auto-start `v3.1.20` |  是否自动开始倒计时 | Boolean | true
| time `v3.1.20` | 倒计时显示时间，单位是毫秒。autoStart 为 false 时生效 | String，Number | 0
| paused | 是否暂停 | Boolean | false
| show-days | 是否显示天`v3.1.20(废弃)` | Boolean | false
| show-plain-text | 显示为纯文本`v3.1.20(废弃)` | Boolean | false

### format 格式

| 格式 | 说明 | 
| ----- | ----- | 
| DD | 天数 | 
| HH | 小时 | 
| mm | 分钟 | 
| ss | 秒数 | 
| S | 毫秒（1位） | 
| SS | 毫秒（2位） | 
| SSS | 毫秒（3位） | 

### Events

| 字段 | 说明 | 回调参数
| ----- | ----- | ----- 
| on-end | 倒计时结束时 | 剩余时间戳
| on-paused | 暂停时 | 剩余时间戳
| on-restart | 暂停时 | 剩余时间戳

### 方法

通过 ref 可以获取到 CountDown 实例并调用实例方法。

| 方法明 | 说明 |
| ----- | ----- | 
| start | 开始倒计时 | 
| pause | 暂停倒计时 | 
| reset | 重设倒计时，若 auto-start 为 true，重设后会自动开始倒计时 | 