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
### 选择日期区间
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
    @select="select"
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
    const select = (param: string) => {
      console.log(param);
    };
    return {
      ...toRefs(state),
      openSwitch,
      closeSwitch,
      setChooseValue,
      select,
    };
  }  
};
</script>
```
:::

### 选择多个日期
:::demo
```html
<template>
 <nut-cell
    :show-icon="true"
    title="选择多个日期"
    :desc="date7 && date7.length ? `已选择${date7.length}个日期` : '请选择'"
    @click="openSwitch('isVisible7')"
  >
  </nut-cell>
  <nut-calendar
    v-model:visible="isVisible7"
    :default-value="date7"
    type="multiple"
    :start-date="`2022-01-01`"
    :end-date="`2022-09-10`"
    @close="closeSwitch('isVisible7')"
    @choose="setChooseValue7"
  >
  </nut-calendar>
</template>
<script lang="ts">
import { reactive, toRefs } from 'vue';
export default {
  setup() {
    const state = reactive({
      date7: [],
      isVisible7: false
    });
    const openSwitch = param => {
      state[`${param}`] = true;
    };
    const closeSwitch = param => {
      state[`${param}`] = false;
    };
     const setChooseValue7 = (chooseData: any) => {
      let dateArr = chooseData.map((item: any) => {
        return item[3];
      });
      state.date7 = [...dateArr];
    };
    const select = (param: string) => {
      console.log(param);
    };
    return {
      ...toRefs(state),
      openSwitch,
      closeSwitch,
      setChooseValue,
      select,
    };
  }  
};
</script>
```
:::
### 快捷选择-单选
:::demo
```html
<template>
  <nut-cell
    :showIcon="true"
    title="选择单个日期"
    :desc="date ? date : '请选择'"
    @click="openSwitch('isVisible')"
  >
  </nut-cell>
  <nut-calendar
    v-model:visible="isVisible"
    @close="closeSwitch('isVisible')"
    @choose="setChooseValue"
    :default-value="date"
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

### 快捷选择-范围选择
:::demo
```html
<template>
  <nut-cell
    :showIcon="true"
    title="选择日期范围"
    :desc="date ? `${date[0]}至${date[1]}` : '请选择'"
    @click="openSwitch('isVisible')"
  >
  </nut-cell>
  <nut-calendar
    v-model:visible="isVisible"
    :default-value="date"
    type="range"
    :start-date="`2022-01-01`"
    :end-date="`2022-12-31`"
    @close="closeSwitch('isVisible')"
    @choose="setChooseValue"
    :is-auto-back-fill="true"
  >
  </nut-calendar>
</template>
<script lang="ts">
import { reactive, toRefs } from 'vue';
export default {
  setup() {
    const state = reactive({
      date: ['2021-12-23', '2021-12-26'],
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

### 自定义日历按钮
:::demo
```html
<template>
  <nut-cell
    :showIcon="true"
    title="自定义按钮"
    :desc="date ? `${date[0]}至${date[1]}` : '请选择'"
    @click="openSwitch('isVisible')"
  >
  </nut-cell>
  <nut-calendar
    v-model:visible="isVisible"
    :default-value="date"
    type="range"
    :start-date="`2021-12-22`"
    :end-date="`2022-12-31`"
    @close="closeSwitch('isVisible')"
    @choose="setChooseValue"
  >
    <template v-slot:btn>
      <div class="wrapper">
        <div class="d_div"> <span class="d_btn" @click="clickBtn">最近七天</span></div>
        <div class="d_div"> <span class="d_btn" @click="clickBtn1">当月</span></div>
      </div>
    </template>
    <template v-slot:day="date">
      <span>{{ date.date.day }}</span>
    </template>
  </nut-calendar>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';
export default {
  setup() {
    const state = reactive({
      date: ['2021-12-23', '2021-12-26'],
      isVisible: false
    });
    const getNumTwoBit = function(n: number): string {
      n = Number(n);
      return (n > 9 ? '' : '0') + n;
    };
    const date2Str =  function(date: Date, split?: string): string {
      split = split || '-';
      const y = date.getFullYear();
      const m = getNumTwoBit(date.getMonth() + 1);
      const d = getNumTwoBit(date.getDate());
      return [y, m, d].join(split);
    };
    const getDay = function(i: number): string {
      i = i || 0;
      let date = new Date();
      const diff = i * (1000 * 60 * 60 * 24);
      date = new Date(date.getTime() + diff);
      return date2Str(date);
    };
    const isLeapYear= function(y: number): boolean {
      return (y % 4 == 0 && y % 100 != 0) || y % 400 == 0;
    };
    const getMonthDays= function(year: string, month: string): number {
      if (/^0/.test(month)) {
        month = month.split('')[1];
      }
      return ([
        0,
        31,
        isLeapYear(Number(year)) ? 29 : 28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
      ] as number[])[month as any];
    };
    const openSwitch = param => {
      state[`${param}`] = true;
    };
    const closeSwitch = param => {
      state[`${param}`] = false;
    };
     const setChooseValue = param => {
      state.date= param[3];
    };
    const clickBtn = (param: string) => {
      let date = [date2Str(new Date()), getDay(6)];
      state.date5 = date;
    };
    const clickBtn1 = (param: string) => {
      let date = new Date();
      let year = date.getFullYear();
      let month: any = date.getMonth() + 1;
      month = month < 10 ? '0' + month : month + '';
      let yearMonth = `${year}-${month}`;
      let currMonthDays = getMonthDays(year + '', month + '');
      state.date5 = [`${yearMonth}-01`, `${yearMonth}-${currMonthDays}`];
    };
    return {
      ...toRefs(state),
      setChooseValue,
      openSwitch,
      closeSwitch,
      clickBtn,
      clickBtn1
    };
  }
}
</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  padding: 0 40px;
  justify-content: center;
}
.d_div {
  margin: 0px 5px;
  .d_btn {
    background: #fa3f19;
    color: #fff;
    font-size: 12px;
    padding: 2px 8px;
    border-radius: 4px;
    display: inline-block;
    height: 16px;
  }
}

</style>
```
:::

### 自定义时间文案
:::demo
```html
<template>
  <nut-cell
    :showIcon="true"
    title="自定义时间文案"
    :desc="date && date[0] ? `${date[0]}至${date[1]}` : '请选择'"
    @click="openSwitch('isVisible')"
  >
  </nut-cell>
  <nut-calendar
    v-model:visible="isVisible"
    :default-value="date"
    type="range"
    @close="closeSwitch('isVisible')"
    @choose="setChooseValue"
    :start-date="`2022-01-01`"
    :end-date="`2022-12-31`"
    confirm-text="提交"
    start-text="入店"
    end-text="离店"
    title="日期选择"
  >
    <template v-slot:day="date">
      <span>{{ date.date.day <= 9 ? '0' + date.date.day : date.date.day }}</span>
    </template>
    <template v-slot:bottomInfo="date">
      <span class="info" style="fontSize:12px;lineHeight:14px">{{
        date.date ? (date.date.day == 10 ? '十' :  '') : ''
      }}</span>
    </template>
  </nut-calendar>
</template>
<script lang="ts">
import { reactive, toRefs } from 'vue';
export default {
  setup() {
    const state = reactive({
      date: [],
      isVisible: false
    });
    const openSwitch = param => {
      state[`${param}`] = true;
    };
    const closeSwitch = param => {
      state[`${param}`] = false;
    };
     const setChooseValue = param => {
      state.date = param[3];
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
  <div class="test-calendar-wrapper" >
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
<style lang="scss" scoped>
.test-calendar-wrapper {
  display: flex;
  width: 100%;
  height: 560px;
  overflow: hidden;
}
</style>

```
:::


## API

### Props

| 字段              | 说明                                              | 类型            | 默认值          |
|-------------------|---------------------------------------------------|-----------------|-----------------|
| v-model:visible   | 是否可见                                          | Boolean         | false           |
| type              | 类型，日期单择'one'，区间选择'range',日期多选'multiple'    | String          | 'one'           |
| poppable          | 是否弹窗状态展示                                  | Boolean         | true            |
| is-auto-back-fill | 自动回填                                          | Boolean         | false           |
| title             | 显示标题                                          | String          | ‘日期选择’      |
| default-value     | 默认值，单个日期选择 String，其他为 Array  | String 、 Array | null            |
| start-date        | 开始日期         | String          | 今天            |
| end-date          | 结束日期              | String          | 距离今天 365 天 |
| show-today          | 是否展示今天标记               | Boolean          | true |
| start-text         | 范围选择，开始信息文案               | String          | ’开始‘ |
| end-text         | 范围选择，结束信息文案               | String          | ‘结束’ |
| confirm-text          | 底部确认按钮文案               | String          | ’确认‘ |
| show-title          | 是否在展示日历标题               | Boolean          | true |
| show-sub-title          | 是否展示日期标题              | Boolean          | true |
| to-date-animation          | 是否启动滚动动画              | Boolean          | true |

### Events

| 事件名 | 说明                         | 回调参数                     |
|--------|------------------------------|------------------------------|
| choose | 选择之后或是点击确认按钮触发 | 日期数组（包含年月日和星期） |
| close  | 关闭时触发                   | -                            |
| select  | 点击/选择后触发              |  Day:object                          |



### Slots

| 名称    | 说明         |
|---------|--------------|
| btn | 	自定义日历标题下部，可用以添加自定义操作 |
| day | 	日期信息 |
| topInfo | 	日期顶部信息 |
| bottomInfo | 	日期底部信息 |

### Methods

通过 [ref](https://vuejs.org/guide/essentials/template-refs.html) 可以获取到 Calendar 实例并调用实例方法。


| 方法名 | 说明             | 参数          |
|--------|------------------|---------------|
| scrollToDate   | 滚动到指定日期所在月 | string:'2021-12-30' |
