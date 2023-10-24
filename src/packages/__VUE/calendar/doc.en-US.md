# Calendar

### Intro

Calendar, tileable/pop-up display

### Install

```javascript
import { createApp } from 'vue';
import { Calendar } from '@nutui/nutui';

const app = createApp();
app.use(Calendar);
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
    :start-date="`2022-01-11`"
    :end-date="`2022-11-30`"
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
      const openSwitch = (param) => {
        state[`${param}`] = true;
      };
      const closeSwitch = (param) => {
        state[`${param}`] = false;
      };
      const setChooseValue = (param) => {
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
    :desc="date && date[0] ? `${date[0]}-${date[1]}` : 'Please Select Date'"
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
      const openSwitch = (param) => {
        state[`${param}`] = true;
      };
      const closeSwitch = (param) => {
        state[`${param}`] = false;
      };
      const setChooseValue = (param) => {
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
        select
      };
    }
  };
</script>
<style>
  .nut-cell__value {
    flex: initial;
  }
</style>
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
      const openSwitch = (param) => {
        state[`${param}`] = true;
      };
      const closeSwitch = (param) => {
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
        setChooseValue7,
        select
      };
    }
  };
</script>
```

:::

### Select Week

When set to week selection, the start and end dates of the week will be determined according to `first-day-of-week`. For example, when `first-day-of-week` is 0, the start date of a week is Sunday. In other cases, the start date of the week is Monday.
:::demo

```html
<template>
  <nut-cell
    :showIcon="true"
    title="Select Week"
    :desc="date && date[0] ? `${date[0]}-${date[1]}` : 'Please Select Date'"
    @click="openSwitch('isVisible')"
  >
  </nut-cell>
  <nut-calendar
    v-model:visible="isVisible"
    :default-value="date"
    type="week"
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
      const openSwitch = (param) => {
        state[`${param}`] = true;
      };
      const closeSwitch = (param) => {
        state[`${param}`] = false;
      };
      const setChooseValue = (param) => {
        let { weekDate } = param;
        state.date = [weekDate[0].date[3], weekDate[1].date[3]];
      };
      const select = (param: string) => {
        console.log(param);
      };
      return {
        ...toRefs(state),
        openSwitch,
        closeSwitch,
        setChooseValue,
        select
      };
    }
  };
</script>
<style>
  .nut-cell__value {
    flex: initial;
  }
</style>
```

:::

### Customize the disable date

By configuring the `disabled-date` function callback, you can customize to disable certain dates from being selected.
When the type is `range`, if this function is set, you need to filter out the disabled date after selecting the result

:::demo

```html
<template>
  <nut-cell
    :showIcon="true"
    title="Customize the disable date"
    :desc="date ? `${date}` : 'Please Select Date'"
    @click="openSwitch('isVisible')"
  >
  </nut-cell>
  <nut-calendar
    v-model:visible="isVisible"
    :default-value="date"
    @close="closeSwitch('isVisible')"
    @choose="setChooseValue"
    :start-date="`2022-01-01`"
    :end-date="`2022-11-30`"
    :disabled-date="disabledDate"
  >
  </nut-calendar>
</template>
<script>
  import { reactive, toRefs } from 'vue';
  export default {
    setup() {
      const state = reactive({
        isVisible: false,
        date: ''
      });
      const openSwitch = (param) => {
        state[`${param}`] = true;
      };
      const closeSwitch = (param) => {
        state[`${param}`] = false;
      };
      const setChooseValue = (param) => {
        state.date = param[3];
      };
      const disabledDate = (date) => {
        const disabledDate = {
          '2022-01-05': true,
          '2022-01-06': true,
          '2022-01-10': true,
          '2022-01-11': true,
          '2022-01-12': true,
          '2022-01-13': true,
          '2022-01-14': true
        };
        return disabledDate[date];
      };
      return {
        ...toRefs(state),
        openSwitch,
        closeSwitch,
        setChooseValue,
        disabledDate
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
      const openSwitch = (param) => {
        state[`${param}`] = true;
      };
      const closeSwitch = (param) => {
        state[`${param}`] = false;
      };
      const setChooseValue = (param) => {
        state.date = param[3];
      };
      return {
        ...toRefs(state),
        setChooseValue,
        openSwitch,
        closeSwitch
      };
    }
  };
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
    :desc="date && date[0] ? `${date[0]}-${date[1]}` : 'Please Select Date'"
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
      const openSwitch = (param) => {
        state[`${param}`] = true;
      };
      const closeSwitch = (param) => {
        state[`${param}`] = false;
      };
      const setChooseValue = (param) => {
        state.date = [...[param[0][3], param[1][3]]];
      };
      return {
        ...toRefs(state),
        setChooseValue,
        openSwitch,
        closeSwitch
      };
    }
  };
</script>
<style>
  .nut-cell__value {
    flex: initial;
  }
</style>
```

:::

### Custom Button

:::demo

```html
<template>
  <nut-cell
    :showIcon="true"
    title="Custom Button"
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
  >
    <template #btn>
      <div class="wrapper">
        <div class="d_div"> <span class="d_btn" @click="goDate">Go Date</span></div>
        <div class="d_div"> <span class="d_btn" @click="clickBtn">Last Seven Days</span></div>
        <div class="d_div"> <span class="d_btn" @click="clickBtn1">This Month</span></div>
      </div>
    </template>
    <template #day="date">
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
      const getNumTwoBit = function (n: number): string {
        n = Number(n);
        return (n > 9 ? '' : '0') + n;
      };
      const date2Str = function (date: Date, split?: string): string {
        split = split || '-';
        const y = date.getFullYear();
        const m = getNumTwoBit(date.getMonth() + 1);
        const d = getNumTwoBit(date.getDate());
        return [y, m, d].join(split);
      };
      const getDay = function (i: number): string {
        i = i || 0;
        let date = new Date();
        const diff = i * (1000 * 60 * 60 * 24);
        date = new Date(date.getTime() + diff);
        return date2Str(date);
      };
      const isLeapYear = function (y: number): boolean {
        return (y % 4 == 0 && y % 100 != 0) || y % 400 == 0;
      };
      const getMonthDays = function (year: string, month: string): number {
        if (/^0/.test(month)) {
          month = month.split('')[1];
        }
        return ([0, 31, isLeapYear(Number(year)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] as number[])[
          month as any
        ];
      };
      const openSwitch = (param) => {
        state[`${param}`] = true;
      };
      const closeSwitch = (param) => {
        state[`${param}`] = false;
      };
      const setChooseValue = (param) => {
        state.date = param[3];
      };
      const clickBtn = () => {
        let date = [date2Str(new Date()), getDay(6)];
        state.date5 = date;
      };
      const clickBtn1 = () => {
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
          var date1 = new Date();
          date1.setDate(date1.getDate() + 30);
          calendarRef.value.scrollToDate(date2Str(date1));
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
  };
</script>
<style>
  .nut-cell__value {
    flex: initial;
  }
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
    <template #day="date">
      <span>{{ date.date.day <= 9 ? '0' + date.date.day : date.date.day }}</span>
    </template>
    <template #bottom-info="date">
      <span class="info">{{ date.date ? (date.date.day == 10 ? '十' : '') : '' }}</span>
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
      const openSwitch = (param) => {
        state[`${param}`] = true;
      };
      const closeSwitch = (param) => {
        state[`${param}`] = false;
      };
      const setChooseValue = (param) => {
        state.date = param[3];
      };
      return {
        ...toRefs(state),
        setChooseValue,
        openSwitch,
        closeSwitch
      };
    }
  };
</script>
<style>
  .nut-cell__value {
    flex: initial;
  }
</style>
```

:::

### Custom First Day Of Week

:::demo

```html
<template>
  <nut-cell
    :showIcon="true"
    title="Custom First Day Of Week"
    :desc="date ? `${date}` : 'Please Select Date'"
    @click="openSwitch('isVisible')"
  >
  </nut-cell>
  <nut-calendar
    v-model:visible="isVisible"
    :default-value="date"
    @close="closeSwitch('isVisible')"
    @choose="setChooseValue"
    :first-day-of-week="2"
  >
  </nut-calendar>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    setup() {
      const state = reactive({
        isVisible: false,
        date: ''
      });
      const openSwitch = (param) => {
        state[`${param}`] = true;
      };
      const closeSwitch = (param) => {
        state[`${param}`] = false;
      };
      const setChooseValue = (param) => {
        state.date = param[3];
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

### Custom Footer v4.1.6

:::demo

```html
<template>
  <nut-cell
    :show-icon="true"
    title="Custom Footer"
    :desc="date ? `${date}` : 'Please Select Date'"
    @click="openSwitch('isVisible')"
  >
  </nut-cell>
  <nut-calendar
    v-model:visible="isVisible"
    :default-value="date"
    :poppable="true"
    :is-auto-back-fill="false"
    @close="closeSwitch('isVisible')"
    @select="setSelectalue"
  >
    <template #footer-info="dateInfo">
      <nut-button size="large" block round type="primary" :disabled="disabled" @click="clickBtn(dateInfo)"
        >{{ disabled?'Even dates cannot be selected':'Odd dates can be selected' }}</nut-button
      >
    </template>
  </nut-calendar>
</template>

<script lang="ts">
  import { reactive, toRefs, ref } from 'vue';
  export default {
    setup() {
      const state = reactive({
        date: '2023-09-03',
        isVisible: false,
        disabled: false
      });
      const openSwitch = (param) => {
        state[`${param}`] = true;
      };
      const closeSwitch = (param) => {
        state[`${param}`] = false;
      };
      const setSelectalue = (param: any) => {
        state.disabled = param[2] % 2 === 0;
      };
      const clickBtn = (dateInfo: any) => {
        state.date = dateInfo.date[3];
        state.isVisible = false;
      };
      return {
        ...toRefs(state),
        setSelectalue,
        openSwitch,
        closeSwitch,
        clickBtn
      };
    }
  };
</script>
```

:::

### Tiled Display

:::demo

```html
<template>
  <div class="test-calendar-wrapper">
    <nut-calendar
      :poppable="false"
      :default-value="date"
      :is-auto-back-fill="true"
      @choose="setChooseValue"
      :start-date="`2020-02-01`"
      :end-date="`2020-12-30`"
    >
    </nut-calendar>
  </div>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    setup() {
      const state = reactive({
        date: '2020-07-08'
      });
      const setChooseValue = (param) => {
        state.date = param[3];
      };
      return {
        ...toRefs(state),
        setChooseValue
      };
    }
  };
</script>
<style>
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

| Attribute         | Description                                                                                                                              | Type               | Default               |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | --------------------- |
| v-model:visible   | whether to show                                                                                                                          | boolean            | `false`               |
| type              | Calendar type ：`one` `range` `multiple` `week(V4.0.1)`                                                                                  | string             | `one`                 |
| poppable          | Whether to display the pop-up window                                                                                                     | boolean            | `true`                |
| is-auto-back-fill | Automatic backfill                                                                                                                       | boolean            | `false`               |
| title             | whether to show title                                                                                                                    | string             | `Calendar`            |
| default-value     | Default value, select single date : `string`，other: `string[]`                                                                          | string \| string[] | `null`                |
| start-date        | The start date                                                                                                                           | string             | `Today`               |
| end-date          | The end date                                                                                                                             | string             | `365 days from today` |
| show-today        | Whether to show today's mark                                                                                                             | boolean            | `true`                |
| start-text        | Range selection, start part of the text                                                                                                  | string             | `Start`               |
| end-text          | Range selection, end part of the text                                                                                                    | string             | `End`                 |
| confirm-text      | Bottom confirm button text                                                                                                               | string             | `Confirm`             |
| show-title        | Whether to show the calendar title                                                                                                       | boolean            | `true`                |
| show-sub-title    | Whether to display the date title                                                                                                        | boolean            | `true`                |
| to-date-animation | Whether to use scroll animation                                                                                                          | boolean            | `true`                |
| first-day-of-week | Set the start day of week                                                                                                                | 0-6                | `0`                   |
| disabled-date     | A function that determines whether the date is disabled takes a `year - month - day` as an argument. A Boolean value should be returned. | function           | -                     |

### Events

| Event  | Description                                                                                                      | Arguments                |
| ------ | ---------------------------------------------------------------------------------------------------------------- | ------------------------ |
| choose | Triggered after selection or by clicking the confirm button,Array of dates (including year, month, day and week) | `(string \| string[])[]` |
| close  | Triggered when closed                                                                                            | -                        |
| select | Triggered after click/select                                                                                     | `(string \| string[])[]` |

### Slots

| Name                | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| btn                 | Below the custom calendar header, you can add custom actions |
| day                 | Date information                                             |
| top-info            | Date top information                                         |
| bottom-info         | Date bottom information                                      |
| footer-info`v4.1.6` | Custom calendar Footer, replace confirm btn                  |

### Methods

Through [ref](https://vuejs.org/guide/essentials/template-refs.html), you can get the Calendar instance and call the instance method.

| Name                  | Description                                            | Arguments |
| --------------------- | ------------------------------------------------------ | --------- |
| scrollToDate          | Scroll to the month of the specified date:'2021-12-30' | `string`  |
| initPosition `v4.0.1` | Initialize scroll position                             |           |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name                                    | Default Value              |
| --------------------------------------- | -------------------------- |
| --nut-calendar-primary-color            | _var(--nut-primary-color)_ |
| --nut-calendar-choose-color             | _var(--nut-primary-color)_ |
| --nut-calendar-choose-font-color        | _var(--nut-primary-color)_ |
| --nut-calendar-base-color               | _#333333_                  |
| --nut-calendar-disable-color            | _#d1d0d0_                  |
| --nut-calendar-base-font                | _var(--nut-font-size-3)_   |
| --nut-calendar-title-font               | _var(--nut-font-size-4)_   |
| --nut-calendar-title-font-weight        | _500_                      |
| --nut-calendar-sub-title-font           | _var(--nut-font-size-2)_   |
| --nut-calendar-text-font                | _var(--nut-font-size-1)_   |
| --nut-calendar-day-font                 | _16px_                     |
| --nut-calendar-day-active-border-radius | _0px_                      |
| --nut-calendar-day-font-weight          | _500_                      |
| --nut-calendar-day67-font-color         | _var(--nut-primary-color)_ |
| --nut-calendar-month-title-font-size    | _inherit_                  |
