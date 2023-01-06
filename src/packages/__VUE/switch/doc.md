#  Switch 开关

### 介绍

用来打开或关闭选项。

### 安装

``` javascript
import { createApp } from 'vue';
import { Switch } from '@nutui/nutui';

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
  <nut-switch v-model="checked" loading />
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
  import { ref } from 'vue';
  import { showToast } from '@nutui/nutui';
  import '@nutui/nutui/dist/packages/toast/style';

  export default {
    setup() {
      const checked = ref(true);
      const change = (value: boolean, event: Event) => {
        showToast.text(`value：${value}`);
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
  import { ref } from 'vue';
  import { showToast } from '@nutui/nutui';
  import '@nutui/nutui/dist/packages/toast/style';

  export default {
    setup() {
      const checkedAsync = ref(true);
      const changeAsync = (value: boolean, event: Event) => {
        showToast.text(`2秒后异步触发 ${value}`);
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
  <nut-switch v-model="checked" active-text="开" inactive-text="关" />
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

### 自定义加载图标
:::demo
``` html
<template>
  <nut-switch v-model="checked" loading>
    <template #icon><Loading name="loading" /></template>
  </nut-switch>
</template>
<script lang="ts">
  import { ref } from 'vue';
  import { Loading } from '@nutui/icons-vue';
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

| 参数           | 说明             | 类型    | 默认值                |
|----------------|------------------|---------|-----------------------|
| v-model        | 开关状态         | boolean \| string \| number | `false`               |
| disable        | 禁用状态         | boolean | `false`               |
| loading        | 加载状态         | boolean | `false`               |
| active-color   | 打开时的背景颜色 | string  | `#fa2c19`    |
| inactive-color | 关闭时的背景颜色 | string  | `#ebebeb` |
| active-text    | 打开时文字描述   | string  | -                     |
| inactive-text  | 关闭时文字描述   | string  | -                     |
| active-value  | 打开时组件的值   | boolean ｜ string ｜ number  | `true`  |
| inactive-value  | 关闭组件的值   | boolean ｜ string ｜ number  | `false`  |

### Slots

|名称|描述|
|-|-|
|icon|loading 状态图标|

### Events

| 事件名 | 说明           | 回调参数                      |
|--------|----------------|-------------------------------|
| change | 切换开关时触发 | (value: boolean,event: Event) |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称                                    | 默认值                     | 
| --------------------------------------- | -------------------------- | 
| --nut-switch-close-bg-color|  _#ebebeb_ |
| --nut-switch-close-cline-bg-color|  _#f0f0f0_ |
| --nut-switch-width|  _36px_ |
| --nut-switch-height|  _21px_ |
| --nut-switch-line-height|  _21px_ |
| --nut-switch-border-radius|  _21px_ |
| --nut-switch-inside-width|  _13px_ |
| --nut-switch-inside-height|  _13px_ |
| --nut-switch-inside-open-transform|  _translateX(146%)_ |
| --nut-switch-inside-close-transform|  _translateX(30%)_ |
    