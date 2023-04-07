#  DatePicker

### Intro
    
Used to select time, support date and time dimensions, usually used with the Popup component.
    
### Install
    
```javascript
import { createApp } from 'vue';
import { DatePicker } from '@nutui/nutui';

const app = createApp();
app.use(DatePicker);
```
    
### Choose Date
:::demo

```html
<template>
  <nut-date-picker
      v-model="currentDate"
      :min-date="minDate"
      :max-date="maxDate"
      :is-show-chinese="true"
      :three-dimensional="false"
      @confirm="confirm"
  ></nut-date-picker> 
</template>

<script lang="ts">
  import { ref } from 'vue';
  import { showToast } from '@nutui/nutui';
  import '@nutui/nutui/dist/packages/toast/style';
  export default {
    setup(props) {
      const minDate = new Date(2020, 0, 1);
      const maxDate = new Date(2025, 10, 1);
      const currentDate = new Date(2022, 4, 10, 10, 10);
      const confirm = ({ selectedValue, selectedOptions })=>{
        showToast.text(selectedOptions.map((val: any) => val.text).join(''));
      }
      return {
        currentDate,
        minDate,
        maxDate,
        confirm
      };
    }
  };
</script>

```
:::

### With popup

:::demo

```html
<template>
  <nut-cell title="选择日期" :desc="popupDesc" @click="show = true"></nut-cell>
  <nut-popup position="bottom" v-model:visible="show">
    <nut-date-picker
      v-model="currentDate"
      :min-date="minDate"
      :max-date="maxDate"
      @confirm="popupConfirm"
      :is-show-chinese="true"
      :threeDimensional="false"
    >
      <nut-button block type="primary" @click="alwaysFun">Always</nut-button>
    </nut-date-picker>
  </nut-popup>
</template>

<script lang="ts">
  import { ref } from 'vue';
  export default {
    setup(props) {
       const show = ref(false);
      const popupDesc = ref();
      const minDate = new Date(2020, 0, 1);
      const maxDate = new Date(2025, 10, 1);
      const currentDate = new Date(2022, 4, 10, 10, 10);
      const popupConfirm = ({ selectedValue, selectedOptions })=>{
        popupDesc.value = selectedOptions.map((val: any) => val.text).join('');
        show.value = false;
      }
      const alwaysFun = ()=>{
        popupDesc.value = 'Always'
        show.value = false;
      }
      return {
        show,
        popupDesc,
        currentDate,
        minDate,
        maxDate,
        alwaysFun,
        popupConfirm
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
  <nut-date-picker
      v-model="currentDate"
      type="month-day"
      title="Choose Time"
      :min-date="new Date(2022, 0, 1)"
      :max-date="new Date(2022, 7, 1)"
      @confirm="confirm"
  ></nut-date-picker> 
</template>

<script lang="ts">
  import { ref } from 'vue';
  import { showToast } from '@nutui/nutui';
  import '@nutui/nutui/dist/packages/toast/style';
  export default {
    setup(props) {
      const currentDate = new Date(2022, 4, 10, 10, 10);
      const confirm = ( { selectedValue, selectedOptions } )=>{
        showToast.text(selectedOptions.map((val: any) => val.text).join('-'));
      }
      return {
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
  <nut-date-picker
      v-model="currentDate"
      title="Choose Time"
      type="datetime"
      :min-date="minDate"
      :max-date="maxDate"
      @confirm="confirm"
  ></nut-date-picker> 
</template>
<script lang="ts">
  import { ref } from 'vue';
  import { showToast } from '@nutui/nutui';
  import '@nutui/nutui/dist/packages/toast/style';
  export default {
    setup() {
      const currentDate = new Date(2022, 4, 10, 10, 10);
      const confirm = ( { selectedValue, selectedOptions } )=>{
        date = selectedValue.slice(0, 3).join('-');
        time = selectedValue.slice(3).join(':');
        showToast.text(date + ' ' + time) ;
      }
      return {
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
  <nut-date-picker
      v-model="currentDate"
      title="Choose Time"
      type="time"
      :min-date="minDate"
      :max-date="maxDate"
      @confirm="confirm"
  ></nut-date-picker>
</template>
<script lang="ts">
  import { ref } from 'vue';
  import { showToast } from '@nutui/nutui';
  import '@nutui/nutui/dist/packages/toast/style';
  export default {
    setup(props) {
      const currentDate = new Date(2022, 4, 10, 10, 10);
      const confirm = ( { selectedValue, selectedOptions } )=>{
        showToast.text(selectedValue.join(':'));
      }
      return {
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

### Choose Hour-Minute v4.0.5
:::demo
```html
<template>
  <nut-date-picker
    v-model="currentDate"
    title="Choose Hour-Minute"
    type="hour-minute"
    :min-date="minDate"
    :max-date="maxDate"
    @confirm="confirm"
  ></nut-date-picker>
</template>
<script lang="ts">
  import { ref } from 'vue';
  import { showToast } from '@nutui/nutui';
  import '@nutui/nutui/dist/packages/toast/style';
  export default {
    setup(props) {
      const currentDate = new Date(2022, 4, 10, 10, 10);
      const confirm = ( { selectedValue, selectedOptions } )=>{
        showToast.text(selectedValue.join(':'));
      }
      return {
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
  <nut-date-picker
      v-model="currentDate"
      title="Choose Time"
      type="datetime"
      :min-date="new Date(2022, 0, 1)"
      :max-date="new Date(2022, 10, 1)"
      :formatter="formatter"
      @confirm="confirm"
  ></nut-date-picker>
</template>
<script lang="ts">
  import { ref } from 'vue';
  import { showToast } from '@nutui/nutui';
  import '@nutui/nutui/dist/packages/toast/style';
  export default {
    setup(props) {
      const currentDate = new Date(2022, 4, 10, 10, 10);
      const confirm = ( { selectedValue, selectedOptions } )=>{
        const date = selectedOptions.slice(1, 3).map((op) => op.text).join('');
        const time = selectedOptions.slice(3).map((op) => op.value).join(':');
        showToast.text(selectedOptions[0].text + 'Year' + date + ' ' + time);
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
     
      return {
        currentDate,
        confirm,
        formatter
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
  <nut-date-picker
      v-model="currentDate"
      type="time"
      :minute-step="5"
      :min-date="minDate"
      :max-date="maxDate"
      @confirm="confirm"
  ></nut-date-picker>
</template>
<script lang="ts">
  import { ref } from 'vue';
  import { showToast } from '@nutui/nutui';
  import '@nutui/nutui/dist/packages/toast/style';
  export default {
    setup(props) {
      const currentDate = new Date(2022, 4, 10, 10, 10);
      const confirm = ( { selectedValue, selectedOptions } )=>{
        showToast.text(selectedValue.join(':')) ;
      }
      return {
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

### Option Filter

:::demo
```html
<template>
  <nut-date-picker
      v-model="currentDate"
      title="Choose Time"
      type="datehour"
      :min-date="minDate"
      :max-date="maxDate"
      :filter="filter"
      :formatter="formatter"
      @confirm="confirm"
  ></nut-date-picker>
</template>
<script lang="ts">
  import { ref } from 'vue';
  import { showToast } from '@nutui/nutui';
  import '@nutui/nutui/dist/packages/toast/style';
  export default {
    setup(props) {
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
         showToast.text(selectedOptions.map((option) => option.text).join(''));
      }
      return {
        currentDate,
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
| v-model         | Default Date                                            | date    | `null`   |
| type            | Can be set to `date` `time` `year-month` `month-day` `datehour` `hour-minute`(`v4.0.5`) | string  | `date` |
| minute-step     | Option minute step                                        | number  | `1`      |
| is-show-chinese | Show Chinese                                  | boolean | `false`  |
| min-date        | Start date                                         | date    | `Ten years ago on January 1` |
| max-date        | End date                                          | date    | `Ten years later on December 31` |
| formatter   | Option text formatter                                          | (type: string, option: PickerOption) => PickerOption    |  |
| filter   | Option filter                                         | (type: string, option: PickerOption) => PickerOption[]    |  |
| title           | Title                                          | string  | `null`   |
| ok-text           | Text of confirm button                                      | string  | `confirm`   |
| cancel-text           | Text of cancel button                                          | string  | `cancel`   |
| three-dimensional          | Turn on 3D effects               | boolean  | `true`   |
| swipe-duration           | Duration of the momentum animation        | number \| string  | `1000`  |
| visible-option-num          | Count of visible columns       | number \| string | `7`               |
| option-height         | Option height             | number \| string | `36`     |
| show-toolbar         | Whether to show toolbar             | boolean | `true`    |

### Events

| Event | Description           | Arguments     |
|---------|--------------------|--------------|
| confirm | Emitted when click confirm button. | 	`{ selectedValue, selectedOptions }` |
| cancel   | Emitted when click cancel button.       | 	`{ selectedValue, selectedOptions }` |
| change   |  Emitted when current option changed.       | `{ columnIndex, selectedValue, selectedOptions }` |

### Slots

| Name | Description           |
|--------|----------------|
| default  | Custom content bottom columns |
| top  | Custom content top columns |


### Data Structure of PickerOption

| Key         | Description                             | Type   | Default           |
|--------------|----------------------------------|--------|------------------|
| text        | Text of column              | string \| number | -             |
| value          | Value of column               | string \| number |   -        |
| children         | Cascader Option              | Array | -                |
| className                  | Extra CalssName                   | string  |  -    |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --------------------------------------- | -------------------------- | 
| --nut-picker-cancel-color| _#808080_  | 
| --nut-picker-ok-color| _var(--nut-primary-color)_  | 
| --nut-picker-bar-cancel-font-size| _14px_  | 
| --nut-picker-bar-ok-font-size| _14px_  | 
| --nut-picker-bar-button-padding| _0 15px_  | 
| --nut-picker-bar-title-font-size| _16px_  | 
| --nut-picker-bar-title-color| _var(--nut-title-color)_  | 
| --nut-picker-bar-title-font-weight| _normal_  | 
| --nut-picker-item-height| _36px_  | 
| --nut-picker-item-text-color| _var(--nut-title-color)_  | 
| --nut-picker-item-text-font-size| _14px_  | 
| --nut-picker-item-active-line-border| _1px solid #d8d8d8_  | 