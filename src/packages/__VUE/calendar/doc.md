# Calendar 日历

### 介绍

日历，可平铺/弹窗展示

### 安装

```javascript
import { createApp } from 'vue';
// vue
import { Calendar,Popup } from '@nutui/nutui';
// taro
import { Calendar,Popup } from '@nutui/nutui-taro';

const app = createApp();
app.use(Calendar);
app.use(Popup);

```

## 代码演示

### 基础用法
:::demo
```html
<template>
  <nut-cell
    :showIcon="true"
    title="选择单个日期"
    :desc="date ? `${date} ${dateWeek}` : '请选择'"
    @click="openSwitch('isVisible')"
  >
  </nut-cell>
  <nut-calendar
    v-model:visible="isVisible"
    :default-value="date"
    @close="closeSwitch('isVisible')"
    @choose="setChooseValue"
    :start-date="`2019-10-11`"
    :end-date="`2022-11-11`"
  >
  </nut-calendar>
</template>
<script lang="ts">
import { reactive, toRefs } from 'vue';
export default {
  setup() {
    const state = reactive({
      isVisible: false,
      date: '',
      dateWeek: ''
    });
    const openSwitch = param => {
      state[`${param}`] = true;
    };
    const closeSwitch = param => {
      state[`${param}`] = false;
    };
    const setChooseValue = param => {
      state.date = param[3];
      state.dateWeek = param[4];
    };
    return {
      ...toRefs(state),
      openSwitch,
      closeSwitch,
      setChooseValue
    };
  }
};
</script>
```
:::
### 区间选择
:::demo
```html
<template>
  <nut-cell
    :showIcon="true"
    title="选择日期区间"
    :desc="date ? `${date[0]}至${date[1]}` : '请选择'"
    @click="openSwitch('isVisible')"
  >
  </nut-cell>
  <nut-calendar
    v-model:visible="isVisible"
    :default-value="date"
    type="range"
    :start-date="`2019-12-22`"
    :end-date="`2021-01-08`"
    @close="closeSwitch('isVisible')"
    @choose="setChooseValue"
  >
  </nut-calendar>
</template>
<script lang="ts">
import { reactive, toRefs } from 'vue';
export default {
  setup() {
    const state = reactive({
      date: ['2019-12-23', '2019-12-26'],
      isVisible: false
    });
    const openSwitch = param => {
      state[`${param}`] = true;
    };
    const closeSwitch = param => {
      state[`${param}`] = false;
    };
    const setChooseValue= param => {
      state.date = [...[param[0][3], param[1][3]]];
    };
    return {
      ...toRefs(state),
      openSwitch,
      closeSwitch,
      setChooseValue,
    };
  }  
};
</script>
```
:::
### 自定义日历-自动回填
:::demo
```html
<template>
  <nut-cell
    :showIcon="true"
    title="选择日期"
    :desc="date ? date : '请选择'"
    @click="openSwitch('isVisible')"
  >
  </nut-cell>
  <nut-calendar
    v-model:visible="isVisible"
    @close="closeSwitch('isVisible')"
    @choose="setChooseValue"
    :start-date="null"
    :end-date="null"
    :is-auto-back-fill="true"
  >
  </nut-calendar>
</template>
<script lang="ts">
import { reactive, toRefs } from 'vue';
export default {
  setup() {
    const state = reactive({
      date: '',
      isVisible: false
    });
    const openSwitch = param => {
      state[`${param}`] = true;
    };
    const closeSwitch = param => {
      state[`${param}`] = false;
    };
     const setChooseValue = param => {
      state.date= param[3];
    };
    return {
      ...toRefs(state),
      setChooseValue,
      openSwitch,
      closeSwitch
    };
  }
}
</script>
```
:::
### 平铺展示
:::demo
```html
<template>
  <div class="test-calendar-wrapper">
    <nut-calendar
        :poppable="false"
        :default-value="date"
        :is-auto-back-fill="true"
        @choose="setChooseValue"
    >
    </nut-calendar>
  </div>
</template>
<script lang="ts">
import { reactive, toRefs } from 'vue';
export default {
  setup() {
    const state = reactive({
      date: '2022-07-08'
    });
    const setChooseValue = param => {
      state.date = param[3];
    };
    return {
      ...toRefs(state),
      setChooseValue
    };
  }
}
</script>
```
:::


## API

### Props

| 字段              | 说明                                              | 类型            | 默认值          |
|-------------------|---------------------------------------------------|-----------------|-----------------|
| v-model:visible   | 是否可见                                          | Boolean         | false           |
| type              | 类型，日期选择'one'，区间选择'range'              | String          | 'one'           |
| poppable          | 是否弹窗状态展示                                  | Boolean         | true            |
| is-auto-back-fill | 自动回填                                          | Boolean         | false           |
| title             | 显示标题                                          | String          | ‘日期选择’      |
| default-value     | 默认值，日期选择 String 格式，区间选择 Array 格式 | String 、 Array | null            |
| start-date        | 开始日期， 如果不限制开始日期传 null              | String          | 今天            |
| end-date          | 结束日期，如果不限制结束日期传 null               | String          | 距离今天 365 天 |

### Events

| 事件名 | 说明                         | 回调参数                     |
|--------|------------------------------|------------------------------|
| choose | 选择之后或是点击确认按钮触发 | 日期数组（包含年月日和星期） |
| close  | 关闭时触发                   | -                            |
