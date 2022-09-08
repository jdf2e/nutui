# Calendar

### Intro

Calendar, tileable/pop-up display

### Install

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


### Basic Usage
:::demo
```html
<template>
  <nut-cell
    :showIcon="true"
    title="Select Single Date"
    :desc="date ? `${date} ${dateWeek}` : 'Please Select Date'"
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
### Select Date Range
:::demo
```html
<template>
  <nut-cell
    :showIcon="true"
    title="Select Date Range"
    :desc="date ? `${date[0]}-${date[1]}` : 'Please Select Date'"
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

### Select Multiple Date
:::demo
```html
<template>
 <nut-cell
    :show-icon="true"
    title="Select Multiple Date"
    :desc="date7 && date7.length ? `${date7.length} dates selected` : 'Please Select Date'"
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

### Quick Select Single Date
:::demo
```html
<template>
  <nut-cell
    :showIcon="true"
    title="Select Single Date"
    :desc="date ? date : 'Please Select Date'"
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

### Quick Select Date Range
:::demo
```html
<template>
  <nut-cell
    :showIcon="true"
    title="Select Date Range"
    :desc="date ? `${date[0]}-${date[1]}` : 'Please Select Date'"
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

### Custom Button
:::demo
```html
<template>
  <nut-cell
    :showIcon="true"
    title="Custom Button"
    :desc="date ? `${date[0]}-${date[1]}` : 'Please Select Date'"
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
        <div class="d_div"> <span class="d_btn" @click="goDate">Go Date</span></div>
        <div class="d_div"> <span class="d_btn" @click="clickBtn">Last Seven Days</span></div>
        <div class="d_div"> <span class="d_btn" @click="clickBtn1">This Month</span></div>
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
    const calendarRef = ref(null);
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
    const goDate = () => {
      if (calendarRef.value) {
        calendarRef.value.scrollToDate('2022-04-01');
      }
    };
    return {
      ...toRefs(state),
      setChooseValue,
      openSwitch,
      closeSwitch,
      clickBtn,
      clickBtn1,
      goDate
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

### Custom Date Text
:::demo
```html
<template>
  <nut-cell
    :showIcon="true"
    title="Custom Date Text"
    :desc="date && date[0] ? `${date[0]}-${date[1]}` : 'Please Select Date'"
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
    confirm-text="submit"
    start-text="Enter"
    end-text="Leave"
    title="Select Date"
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
### Tiled Display
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



### Props

| Attribute              | Description                                  | Type            | Default  |
|-------------------|---------------------------------------------------|-----------------|-----------------|
| v-model:visible   | whether to show                  | Boolean         | false           |
| type              | Calendar type ：'one' 'range' 'multiple'    | String          | 'one'           |
| poppable          | Whether to display the pop-up window                                  | Boolean         | true            |
| is-auto-back-fill | Automatic backfill                                          | Boolean         | false           |
| title             | whether to show title                                          | String          | ‘Calendar’      |
| default-value     | Default value, select single date : `String`，other: `Array` | String 、 Array | null            |
| start-date        | The start date            | String          | Today            |
| end-date          | The end date            | String          | 365 days from today |
| show-today          | Whether to show today's mark               | Boolean          | true |
| start-text         | Range selection, start part of the text              | String          | Start |
| end-text         | Range selection, end part of the text            | String          | End |
| confirm-text          | Bottom confirm button text               | String          | ’Confirm‘ |
| show-title          | Whether to show the calendar title               | Boolean          | true |
| show-sub-title          | Whether to display the date title              | Boolean          | true |
| to-date-animation          | Whether to use scroll animation              | Boolean          | true |

### Events

| Event | Description                         | Arguments                     |
|--------|------------------------------|------------------------------|
| choose | Triggered after selection or by clicking the confirm button | Array of dates (including year, month, day and week) |
| close  | Triggered when closed                   | -                            |
| select  | Triggered after click/select             |  Day:object                          |



### Slots

| Name    | Description         |
|---------|--------------|
| btn | 	Below the custom calendar header, you can add custom actions |
| day | 	Date information |
| topInfo | 	Date top information |
| bottomInfo | 	Date bottom information |

### Methods

Through [ref](https://vuejs.org/guide/essentials/template-refs.html), you can get the Calendar instance and call the instance method.


| Name | Description             | Arguments          |
|--------|------------------|---------------|
| scrollToDate   | Scroll to the month of the specified date | string:'2021-12-30' |
