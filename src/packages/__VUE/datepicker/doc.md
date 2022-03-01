#  DatePicker 日期选择器

### 介绍
    
时间选择器，支持日期、年月、时分等维度，通常与弹出层组件配合使用。
    
### 安装
    
```javascript
import { createApp } from 'vue';
// vue
import { DatePicker, Picker } from '@nutui/nutui';
// taro
import { DatePicker, Picker } from '@nutui/nutui-taro';

const app = createApp();
app.use(DatePicker);
```
    
## 代码演示
    
### 每列不显示中文
:::demo

```html
<template>
  <nut-cell title="日期选择" :desc="desc" @click="open"></nut-cell>
  <nut-datepicker
      v-model="currentDate"
      @confirm="confirm"
      v-model:visible="show"
      :is-show-chinese="false"
  ></nut-datepicker> 
</template>

<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      const show = ref(false);
      const desc = ref('2020-1-1');
      const currentDate = new Date(2020, 0, 1);
      const open = ()=>{
        show.value = true;
      }
      const confirm = (val)=>{
        desc.value = val.join('-');
      }
      return {
        currentDate,
        show,
        desc,
        open,
        confirm
      };
    }
  };
</script>

```
:::

### 限制开始结束时间
:::demo

```html
<template>
  <nut-cell title="日期选择" :desc="desc" @click="open"></nut-cell>
  <nut-datepicker
      v-model="currentDate"
      :min-date="minDate"
      :max-date="maxDate"
      @confirm="confirm"
      v-model:visible="show"
      :is-show-chinese="false"
  ></nut-datepicker> 
</template>

<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      const show = ref(false);
      const desc = ref('2020-1-1');
      const currentDate = new Date(2020, 0, 1);
      return {
        show,
        desc,
        currentDate,
        minDate: new Date(2020, 0, 1),
        maxDate: new Date(2025, 10, 1),
        open: (index) => {
          show.value = true;
        },
        confirm: (res) => {
          desc.value = val.join('-');
        }
      };
    }
  };
</script>
```
:::
### 限制开始结束时间（有默认值）
:::demo

```html
<template>
  <nut-cell title="日期选择" :desc="desc" @click="open"></nut-cell>
  <nut-datepicker
      v-model="currentDate"
      :min-date="minDate"
      :max-date="maxDate"
      type="datetime"
      @confirm="confirm"
      v-model:visible="show" 
  ></nut-datepicker> 
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      const show = ref(false);
      const desc = ref('2020年-1月-1日-0时-0分');
      const currentDate = new Date(2020, 0, 1);
      return {
        show,
        desc,
        currentDate,
        minDate: new Date(2020, 0, 1),
        maxDate: new Date(2025, 10, 1),
        open: (index) => {
          show.value = true;
        },
        confirm: (res) => {
          desc.value = val.join('-');
        }
      };
    }
  };
</script>
```
:::

### 限制开始结束小时
:::demo
```html
<template>
  <nut-cell title="日期选择" :desc="desc" @click="open"></nut-cell>
  <nut-datepicker
      v-model="currentDate"
      type="time"
      :min-date="minDate"
      :max-date="maxDate"
      :is-use12-hours="true"
      @confirm="confirm"
      v-model:visible="show"
  ></nut-datepicker>
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      const show = ref(false);
      const desc = ref('0时-0分-0秒');

      return {
        show,
        desc,
        minDate: new Date(2020, 0, 1),
        maxDate: new Date(2025, 10, 1),
        open: (index) => {
          show.value = true;
        },
        confirm: (res) => {
          desc.value = val.join('-');
        }
      };
    }
  };
</script>
```
:::
### 分钟数递增步长设置
:::demo
```html
<template>
  <nut-cell title="日期选择" :desc="desc" @click="open"></nut-cell>
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
      const desc = ref('0时-0分-0秒');

      return {
        show,
        desc,
        minDate: new Date(2020, 0, 1),
        maxDate: new Date(2025, 10, 1),
        open: (index) => {
          show.value = true;
        },
        confirm: (res) => {
          desc.value = val.join('-');
        }
      };
    }
  };
</script>
```
:::

## API
    
### Props
    
| 参数            | 说明                                              | 类型    | 默认值   |
|-----------------|---------------------------------------------------|---------|----------|
| v-model         | 初始值                                            | Date    | `null`   |
| v-model:visible | 是否可见                                          | Boolean | `false`  |
| type            | 类型，日期'date'， 日期时间'datetime'，时间'time' | String  | `'date'` |
| minute-step     | 分钟步进值                                        | Number  | `1`      |
| is-show-chinese | 每列是否展示中文                                  | Boolean | `false`  |
| title           | 设置标题                                          | String  | `null`   |
| min-date        | 开始日期                                          | Date    | `十年前` |
| max-date        | 结束日期                                          | Date    | `十年后` |



### Events
    
| 事件名  | 说明               | 回调参数     |
|---------|--------------------|--------------|
| confirm | 点击确定按钮时触发 | event: Event |
| close   | 关闭时触发         | event: Event |