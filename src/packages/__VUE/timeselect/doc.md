# TimeSelect 配送时间

### 介绍

用于配送时间选择

### 安装

``` javascript
import { createApp } from 'vue';
// vue
import { TimeSelect, TimePannel, TimeDetail, Popup, Icon, OverLay } from '@nutui/nutui';
// taro
import { TimeSelect, TimePannel, TimeDetail, Popup, Icon, Overlay } from '@nutui/nutui-taro';

const app = createApp();
app.use(TimeSelect);
app.use(TimePannel);
app.use(TimeDetail);
app.use(Popup);
app.use(Icon);
app.use(Overlay);
```

### 基础用法

:::demo

``` html
<template>
  <nut-cell @click="handleClick1">
    <span><label>请选择配送时间</label></span>
  </nut-cell>
  <nut-timeselect v-model:visible="visible1" height="50%" :current-key="currentKey1" :current-time="currentTime1" @select="handleSelected1">
    <template #pannel>
      <nut-timepannel name="2月23日(今天)" pannel-key="0" @change="handleChange1"></nut-timepannel>
      <nut-timepannel name="2月24日(星期三)" pannel-key="1" @change="handleChange1"></nut-timepannel>
    </template>
    <template #detail>
      <nut-timedetail :times="times1" @select="selectTime1"></nut-timedetail>
    </template>
  </nut-timeselect>
</template>
<script lang="ts">
  import { reactive, toRefs, getCurrentInstance, onMounted } from 'vue';
  export default {
    props: {},
    setup() {
      const { proxy } = getCurrentInstance() as any;
      const state = reactive({
        visible1: false,
        currentKey1: 0,
        currentTime1: [] as any[],
        times1: [
          {
            key: 0,
            list: ['9:00-10:00', '10:00-11:00', '11:00-12:00']
          },
          {
            key: 1,
            list: ['9:00-10:00', '10:00-11:00']
          },
        ],
      });

      const handleChange1 = (pannelKey: number) => {
        state.currentKey1 = pannelKey;
        state.currentTime1 = [];
        state.currentTime1.push({
          key: state.currentKey1,
          list: []
        });
      };

      const handleClick1 = () => {
        state.visible1 = true;
      };

      const selectTime1 = (item: string) => {
        let curTimeIndex = state.currentTime1[0]['list'].findIndex((time: string) => time === item);
        if(curTimeIndex === -1) {
          state.currentTime1[0]['list'].push(item);
        } else {
          state.currentTime1[0]['list'].splice(curTimeIndex, 1);
        }
      };

      const handleSelected1 = (obj: any) => {
        proxy.$toast.text(`您选择了：${JSON.stringify(obj)}`);
      };

      onMounted(() => {
        state.currentTime1.push({
          key: state.currentKey1,
          list: []
        });
      });

      return { 
        ...toRefs(state), 
        handleChange1,
        handleSelected1,
        selectTime1,
        handleClick1, 
      };
    }
  };
</script>
```

:::

### 可选择多个日期时间

:::demo

``` html
<template>
  <nut-cell @click="handleClick2">
    <span><label>请选择配送时间</label></span>
  </nut-cell>
  <nut-timeselect v-model:visible="visible2" height="50%" :current-key="currentKey2" :current-time="currentTime2" @select="handleSelected2">
    <template #pannel>
      <nut-timepannel name="2月23日(今天)" pannel-key="0" @change="handleChange2"></nut-timepannel>
      <nut-timepannel name="2月24日(星期三)" pannel-key="1" @change="handleChange2"></nut-timepannel>
    </template>
    <template #detail>
      <nut-timedetail :times="times2" @select="selectTime2"></nut-timedetail>
    </template>
  </nut-timeselect>
</template>
<script lang="ts">
  import { reactive, toRefs, getCurrentInstance, onMounted } from 'vue';
  export default {
    props: {},
    setup() {
      const { proxy } = getCurrentInstance() as any;
      const state = reactive({
        visible2: false,
        currentKey2: 0,
        currentTime2: [] as any[],
        times2: [
          {
            key: 0,
            list: ['9:00-10:00', '10:00-11:00', '11:00-12:00']
          },
          {
            key: 1,
            list: ['9:00-10:00', '10:00-11:00']
          },
        ]
      });

      const handleChange2 = (pannelKey: number) => {
        state.currentKey2 = pannelKey;
        let curTime = state.currentTime2.find((item: any) => item.key == pannelKey);
        if(!curTime) {
          state.currentTime2.push({
            key: pannelKey,
            list: []
          });
        }
      };

      const handleClick2 = () => {
        state.visible2 = true;
      };

      const selectTime2 = (item: string) => {
        let findIndex = state.currentTime2.findIndex((item: any) => item.key == state.currentKey2);
        let curTimeIndex = state.currentTime2[findIndex]['list'].findIndex((time: string) => time === item);
        if(curTimeIndex === -1) {
          state.currentTime2[findIndex]['list'].push(item);
        } else {
          state.currentTime2[findIndex]['list'].splice(curTimeIndex, 1);
        }
      };

      const handleSelected2 = (obj: any) => {
        proxy.$toast.text(`您选择了：${JSON.stringify(obj)}`);
      };

      onMounted(() => {
        state.currentTime2.push({
          key: state.currentKey2,
          list: []
        });
      });

      return { 
        ...toRefs(state), 
        handleChange2,
        handleSelected2,
        selectTime2,
        handleClick2, 
      };
    }
  };
</script>
```

:::

### 更改标题

:::demo

``` html
<template>
  <nut-cell @click="handleClick2">
    <span><label>请选择配送时间</label></span>
  </nut-cell>
  <nut-timeselect v-model:visible="visible2" height="50%" :current-key="currentKey2" :current-time="currentTime2" @select="handleSelected2">
    <template #title>
      <div class="timeselect-title">
        <p class="title">我是标题</p>
        <p class="subtitle">我是副标题</p>
      </div>
    </template>
    <template #pannel>
      <nut-timepannel name="2月23日(今天)" pannel-key="0" @change="handleChange2"></nut-timepannel>
      <nut-timepannel name="2月24日(星期三)" pannel-key="1" @change="handleChange2"></nut-timepannel>
    </template>
    <template #detail>
      <nut-timedetail :times="times2" @select="selectTime2"></nut-timedetail>
    </template>
  </nut-timeselect>
</template>
<script lang="ts">
  import { reactive, toRefs, getCurrentInstance, onMounted } from 'vue';
  export default {
    props: {},
    setup() {
      const { proxy } = getCurrentInstance() as any;
      const state = reactive({
        visible2: false,
        currentKey2: 0,
        currentTime2: [] as any[],
        times2: [
          {
            key: 0,
            list: ['9:00-10:00', '10:00-11:00', '11:00-12:00']
          },
          {
            key: 1,
            list: ['9:00-10:00', '10:00-11:00']
          },
        ]
      });

      const handleChange2 = (pannelKey: number) => {
        state.currentKey2 = pannelKey;
        let curTime = state.currentTime2.find((item: any) => item.key == pannelKey);
        if(!curTime) {
          state.currentTime2.push({
            key: pannelKey,
            list: []
          });
        }
      };

      const handleClick2 = () => {
        state.visible2 = true;
      };

      const selectTime2 = (item: string) => {
        let findIndex = state.currentTime2.findIndex((item: any) => item.key == state.currentKey2);
        let curTimeIndex = state.currentTime2[findIndex]['list'].findIndex((time: string) => time === item);
        if(curTimeIndex === -1) {
          state.currentTime2[findIndex]['list'].push(item);
        } else {
          state.currentTime2[findIndex]['list'].splice(curTimeIndex, 1);
        }
      };

      const handleSelected2 = (obj: any) => {
        proxy.$toast.text(`您选择了：${JSON.stringify(obj)}`);
      };

      onMounted(() => {
        state.currentTime2.push({
          key: state.currentKey2,
          list: []
        });
      });

      return { 
        ...toRefs(state), 
        handleChange2,
        handleSelected2,
        selectTime2,
        handleClick2, 
      };
    }
  };
</script>
<style lang="scss" scoped>
.timeselect-title {
  height: 50px;
  p {
    line-height: 1;
    padding: 0;
    margin: 0;
    &.title {
      margin: 10px 0;
      font-size: 16px;
      font-weight: bold;
    }
    &.subtitle {
      color: #999;
    }
  }
}
</style>
```

:::

## API

### TimeSelect Props

| 字段                   | 说明                                                             | 类型    | 默认值 |
|------------------------|----------------------------------------------------------------|---------|------|
| visible                 | 是否显示弹层                                                    | Boolean  | `false`
| height                 | 弹层的高度                                                    | String  | `20%`
| title                 | 弹层标题                                                    | String  | `取件时间`
| current-key                 | 唯一标识                                                    | String、Number  | `0`
| current-time                 | 当前选择的时间，数组元素包含:key: string; list: string[]      | Array  | `[]`
| lock-scroll            | 背景是否锁定                                                | Boolean        | `false`       |

### Slots

| 字段                   | 说明                                                             |
|------------------------|----------------------------------------------------------------|
| title                 | 更改标题                                                    |
| pannel                 | 左侧列表                                                    |
| detail                 | 右侧详细内容                                                    |

### TimePannel Props

| 字段                   | 说明                                                             | 类型    | 默认值 |
|------------------------|----------------------------------------------------------------|---------|------|
| name                 | 显示的名称                                                    | String  | ``
| pannel-key           | 唯一标识，和 current-key一起标识当前选择的天                      | Number、String  | `0`

### TimeDetail Props

| 字段                   | 说明                                                             | 类型    | 默认值 |
|------------------------|----------------------------------------------------------------|---------|------|
| times                 | 可选择的时间，数组元素同 `current-time`                              | Array  | `[]`


### TimeSelect Event

| 名称  | 说明     | 回调参数    |
|-------|----------|-------------|
| select | 关闭遮罩之后的回调 | key: string | number, list: [] |

### TimePannel Event

| 名称  | 说明     | 回调参数    |
|-------|----------|-------------|
| change | 点击内容的回调 | pannelKey: string ｜ number |

### TimeDetail Event

| 名称  | 说明     | 回调参数    |
|-------|----------|-------------|
| select | 点击时间的回调 | time: string |


