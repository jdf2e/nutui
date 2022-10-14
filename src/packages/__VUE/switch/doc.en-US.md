#  Switch 开关

### 介绍

Used to turn options on or off.

### 安装

``` javascript
import { createApp } from 'vue';
//vue
import { Switch } from '@nutui/nutui';
//taro
import { Switch } from '@nutui/nutui-taro';

const app = createApp();
app.use(Switch);

```


### 基础用法
:::demo
``` html
<template>
  <nut-switch v-model="checked" />
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    setup() {
      const checked = ref(true);
      return { checked };
    }
  };
</script>
```
:::

### 禁用状态
:::demo
``` html
<template>
  <nut-switch v-model="checked" disable />
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    setup() {
      const checked = ref(true);
      return { checked };
    }
  };
</script>
```
:::

### 加载状态
:::demo
``` html
<template>
  <nut-switch v-model="checked" loading color="red" />
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    setup() {
      const checked = ref(true);
      return { checked };
    }
  };
</script>
```
:::

### change事件
:::demo
``` html
<template>
  <nut-switch v-model="checked" @change="change" />
</template>
<script lang="ts">
  import { ref, getCurrentInstance } from 'vue';
  export default {
    setup() {
      let { proxy } = getCurrentInstance() as any;
      const checked = ref(true);
      const change = (value: boolean, event: Event) => {
        proxy.$toast.text(`value：${value}`);
      };
      return {
        checked,
        change
      };
    }
  };
</script>
```
:::
### 异步控制
:::demo
``` html
<template>
  <nut-switch :model-value="checkedAsync" @change="changeAsync" />
</template>
<script lang="ts">
  import { ref, getCurrentInstance } from 'vue';
  export default {
    setup() {
      let { proxy } = getCurrentInstance() as any;
      const checkedAsync = ref(true);
      const changeAsync = (value: boolean, event: Event) => {
        proxy.$toast.text(`after 2 second： ${value}`);
        setTimeout(() => {
          checkedAsync.value = value;
        }, 2000);
      };
      
      return {
        checkedAsync,
        changeAsync
      };
    }
  };
</script>
```
:::
### 自定义颜色
:::demo
``` html
<template>
  <nut-switch v-model="checked" active-color="blue" />
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    setup() {
      const checked = ref(true);
      return { checked };
    }
  };
</script>
```
:::
### 支持文字
:::demo
``` html
<template>
  <nut-switch v-model="checked" active-text="Open" inactive-text="Closed" />
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    setup() {
      const checked = ref(true);
      return { checked };
    }
  };
</script>
```
:::

## API

### Props

| Attribute           | Description      | Type    | Default        |
|----------------|------------------|---------|-----------------------|
| v-model        | Status of Switch       | Boolean ｜ String ｜ Number | `false`  |
| disable        | Disable status         | Boolean | `false`               |
| loading        | Loading status         | Boolean | `false`               |
| name           | [Name of icon](#/icon) | String | `loading`               |
| color          | [Color of icon](#/icon)，only takes effect in `loading` state | String | -     |
| size           | [Size of icon](#/icon)，only takes effect in `loading` state  | String ｜ Number | `12px`   |
| active-color   | Background color when active | String  | `#fa2c19`    |
| inactive-color | Background color when inactive | String  | `#ebebeb` | 
| active-text    | Word description when active   | String  | -         |
| inactive-text  | Word description when inactive   | String  | -        |
| active-value   | Value when active   | Boolean ｜ String ｜ Number  | `true`  |
| inactive-value | Value when inactive   | Boolean ｜ String ｜ Number  | `false`  |


### Events

| Event | Description    | Arguments                 |
|--------|----------------|-------------------------------|
| change | Emitted when check status changed | (value: boolean,event: Event) |
    