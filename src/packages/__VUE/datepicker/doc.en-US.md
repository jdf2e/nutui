#  DatePicker

### Intro
    
Used to select time, support date and time dimensions, usually used with the Popup component.
    
### Install
    
```javascript
import { createApp } from 'vue';
// vue
import { DatePicker, Picker, Popup, OverLay } from '@nutui/nutui';
// taro
import { DatePicker, Picker, Popup, OverLay } from '@nutui/nutui-taro';

const app = createApp();
app.use(DatePicker);
app.use(Picker);
app.use(Popup);
app.use(OverLay);
```
    
### Choose Date
:::demo

```html
<template>
  <nut-cell title="Show Chinese" :desc="desc" @click="show = true"></nut-cell>
  <nut-datepicker
      v-model="currentDate"
      v-model:visible="show"
      :min-date="minDate"
      :max-date="maxDate"
      :is-show-chinese="true"
      @confirm="confirm"
  ></nut-datepicker> 
</template>

<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      const show = ref(false);
      const desc = ref('2022-05-10');
      const minDate = new Date(2020, 0, 1),
      const maxDate = new Date(2025, 10, 1),
      const currentDate = new Date(2022, 4, 10, 10, 10);
      const confirm = ({ selectedValue, selectedOptions })=>{
        desc.value = selectedOptions.map((option) => option.text).join('');
      }
      return {
        currentDate,
        show,
        desc,
        minDate,
        maxDate,
        confirm
      };
    }
  };
</script>

```
:::

### Choose Month-Day

:::demo
```html
<template>
  <nut-cell title="Limit the start and end time" :desc="desc" @click="show = true"></nut-cell>
  <nut-datepicker
      v-model="currentDate"
      type="month-day"
      title="Choose Time"
      :min-date="new Date(2022, 0, 1)"
      :max-date="new Date(2022, 7, 1)"
      @confirm="confirm"
      v-model:visible="show"
  ></nut-datepicker> 
</template>

<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      const show = ref(false);
      const desc = ref('05-10');
      const currentDate = new Date(2022, 4, 10, 10, 10);
      const confirm = ( { selectedValue, selectedOptions } )=>{
        desc.value = selectedValue.join('-');
      }
      return {
        show,
        desc,
        currentDate,
        confirm
      };
    }
  };
</script>
```
:::
### Choose DateTime

:::demo

```html
<template>
  <nut-cell title="Choose Time" :desc="desc" @click="show = true"></nut-cell>
  <nut-datepicker
      v-model="currentDate"
      title="Choose Time"
      type="datetime"
      :min-date="minDate"
      :max-date="maxDate"
      @confirm="confirm"
      v-model:visible="show" 
  ></nut-datepicker> 
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      const show = ref(false);
      const desc = ref('2022-05-10 10:10');
      const currentDate = new Date(2022, 4, 10, 10, 10);
      const confirm = ( { selectedValue, selectedOptions } )=>{
        date = selectedValue.slice(0, 3).join('-');
        time = selectedValue.slice(3).join(':');
        desc.value = date + ' ' + time;
      }
      return {
        show,
        desc,
        currentDate,
        minDate: new Date(2020, 0, 1),
        maxDate: new Date(2025, 10, 1),
        confirm
      };
    }
  };
</script>
```
:::

### Choose Time
:::demo
```html
<template>
  <nut-cell title="Choose Time" :desc="desc" @click="show = true"></nut-cell>
  <nut-datepicker
      v-model="currentDate"
      title="Choose Time"
      type="time"
      :min-date="minDate"
      :max-date="maxDate"
      @confirm="confirm"
      v-model:visible="show"
  ></nut-datepicker>
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      const show = ref(false);
      const desc = ref('10:10:00');
      const currentDate = new Date(2022, 4, 10, 10, 10);
      const confirm = ( { selectedValue, selectedOptions } )=>{
        desc.value = selectedValue.join(':');
      }
      return {
        show,
        desc,
        currentDate,
        minDate: new Date(2020, 0, 1),
        maxDate: new Date(2025, 10, 1),
        confirm
      };
    }
  };
</script>
```
:::

### Option Formatter
:::demo
```html
<template>
  <nut-cell title="Choose Time" :desc="desc" @click="show = true"></nut-cell>
  <nut-datepicker
      v-model="currentDate"
      title="Choose Time"
      type="datetime"
      :min-date="new Date(2022, 0, 1)"
      :max-date="new Date(2022, 10, 1)"
      :formatter="formatter"
      @confirm="confirm"
      v-model:visible="show"
  ><nut-button block type="primary" @click="alwaysFun">Forever</nut-button></nut-datepicker>
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      const show = ref(false);
      const desc = ref('10:10:00');
      const currentDate = new Date(2022, 4, 10, 10, 10);
      const confirm = ( { selectedValue, selectedOptions } )=>{
        date = selectedOptions.slice(1, 3).map((op) => op.text).join('');
        time = selectedOptions.slice(3).map((op) => op.value).join(':');
        desc.value = selectedOptions[0].text + 'Year' + date + ' ' + time;
      }
      const formatter = (type: string, option) => {
        switch (type) {
          case 'year':
            option.text += '';
            break;
          case 'month':
            option.text += 'Month';
            break;
          case 'day':
            option.text += 'Day';
            break;
          case 'hour':
            option.text += 'Hour';
            break;
          case 'minute':
            option.text += 'Minute';
            break;
          default:
            option.text += '';
        }
        return option;
      };
      const alwaysFun = () => {
        show.value = false;
        desc.value = 'Forever';
      };
      return {
        show,
        desc,
        currentDate,
        confirm,
        formatter,
        alwaysFun
      };
    }
  };
</script>
```
:::

### Option Steps

:::demo
```html
<template>
  <nut-cell title="Choose Time" :desc="desc" @click="show = true"></nut-cell>
  <nut-datepicker
      v-model="currentDate"
      type="time"
      :minute-step="5"
      :min-date="minDate"
      :max-date="maxDate"
      @confirm="confirm"
      v-model:visible="show"
  ></nut-datepicker>
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      const show = ref(false);
      const desc = ref('10:10:00');
      const currentDate = new Date(2022, 4, 10, 10, 10);
      const confirm = ( { selectedValue, selectedOptions } )=>{
        desc.value = selectedValue.join(':');
      }
      return {
        show,
        desc,
        minDate: new Date(2020, 0, 1),
        maxDate: new Date(2025, 10, 1),
        confirm
      };
    }
  };
</script>
```
:::

### Option Filter

:::demo
```html
<template>
  <nut-cell title="Choose Time" :desc="desc" @click="show = true"></nut-cell>
  <nut-datepicker
      v-model="currentDate"
      title="Choose Time"
      type="datehour"
      :min-date="minDate"
      :max-date="maxDate"
      :filter="filter"
      :formatter="formatter"
      @confirm="confirm"
      v-model:visible="show"
  ></nut-datepicker>
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      const show = ref(false);
      const desc = ref('2022-05-10 00');
      const currentDate = new Date(2022, 4, 10, 0, 0);
      const formatter = (type: string, option) => {
        switch (type) {
          case 'year':
            option.text += 'Year';
            break;
          case 'month':
            option.text += 'Month';
            break;
          case 'day':
            option.text += 'Day';
            break;
          case 'hour':
            option.text += 'Hour';
            break;
          default:
            option.text += '';
        }
        return option;
      };

      const filter = (type: string, options) => {
        if (type == 'hour') {
          return options.filter((option) => Number(option.value) % 6 === 0);
        }
        return options;
      };
      const confirm = ( { selectedValue, selectedOptions } )=>{
        descList[index].value = selectedOptions.map((option) => option.text).join('');
      }
      return {
        show,
        desc,
        minDate: new Date(2020, 0, 1),
        maxDate: new Date(2025, 10, 1),
        confirm,
        formatter,
        filter
      };
    }
  };
</script>
```
:::

## API
    
### Props
    
| Attribute         | Description                             | Type   | Default           |
|-----------------|---------------------------------------------------|---------|----------|
| v-model         | Default Date                                            | Date    | `null`   |
| v-model:visible | Is Show                    | Boolean | `false`  |
| type            | Can be set to date time year-month month-day datehour | String  | `'date'` |
| minute-step     | Option minute step                                        | Number  | `1`      |
| is-show-chinese | Show Chinese                                  | Boolean | `false`  |
| min-date        | Start date                                         | Date    | `Ten years ago on January 1` |
| max-date        | End date                                          | Date    | `Ten years later on December 31` |
| formatter `v3.1.18`  | Option text formatter                                          | (type: string, option: PickerOption) => PickerOption    |  |
| filter  `v3.1.18`  | Option filter                                         | (type: string, option: PickerOption) => PickerOption[]    |  |
| title           | Title                                          | String  | `null`   |
| ok-text           | Text of confirm button                                      | String  | confirm   |
| cancel-text           | Text of cancel button                                          | String  | cancel   |
| three-dimensional  `v3.1.23`          | Turn on 3D effects               | Boolean  | true   |

### Events

| Event | Description           | Arguments     |
|---------|--------------------|--------------|
| confirm | Emitted when click confirm button. | 	{ selectedValue, selectedOptions } |
| close   | Emitted when click close button.       | 	{ selectedValue, selectedOptions } |
| change   |  Emitted when current option changed.       | { columnIndex, selectedValue, selectedOptions } |

### Slots

| Event | Description           |
|--------|----------------|
| default  | Custom content bottom columns |
| top  | Custom content top columns |