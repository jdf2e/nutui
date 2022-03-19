# Input 输入框

### 介绍

单行输入框

### 安装

``` javascript
import { createApp } from 'vue';
// vue
import { Input,Icon } from '@nutui/nutui';
// taro
import { Input,Icon } from '@nutui/nutui-taro';

const app = createApp();
app.use(Input);
app.use(Icon);

```
## 代码演示

### 基础用法

双向绑定

:::demo

```html
<template>
  <nut-input
        v-model="state.val0"
        @change="change"
        @focus="focus"
        @blur="blur"
        label="文本"
      />
  <nut-input placeholder="请输入文本"
        @change="change"
        v-model="state.val1"
        :require-show="true"
        label="文本"
        @clear="clear"
      />
</template>
<script lang="ts">
  import { reactive } from 'vue';
  export default {
    setup() {
      const state = reactive({
        val0: '初始数据',
        val1: ''
      });
      setTimeout(function() {
        state.val0 = '异步数据';
      }, 2000);
      const change = (value: string | number,event:Event) => {
        console.log('change: ', value,event);
      };
      const focus = (value: string | number,event:Event) => {
        console.log('focus:', value,event);
      };
      const blur = (value: string | number,event:Event) => {
        console.log('blur:', value,event);
      };
      const clear = (value: string | number) => {
        console.log('clear:', value);
      };

      return {
        state,
        change,
        blur,
        clear,
        focus
      };
    }
  }
</script>
```

:::

### 禁用和只读

:::demo

```html
<template>
  <nut-input v-model="state.val2" @change="change"  disabled="true" label="标题："/>
  <nut-input v-model="state.val3" @change="change" readonly="true"  label="标题："/>
</template>
<script lang="ts">
  import { reactive } from 'vue';
  export default {
    setup() {
      const state = reactive({
        val2: '禁止修改',
        val3: 'readonly 只读'
      });
      const change = (value: string | number,event:Event) => {
        console.log('change: ', value,event);
      };

      return {
        state,
        change
      };
    }
  }
</script>
```

:::

### 限制输入长度

:::demo

```html
<template>
  <nut-input v-model="state.val4" @change="change" max-length="7" label="限制7" />
</template>
<script lang="ts">
  import { reactive } from 'vue';
  export default {
    setup() {
      const state = reactive({
        val4: ''
      });
      const change = (value: string | number,event:Event) => {
        console.log('change: ', value,event);
      };

      return {
        state,
        change
      };
    }
  }
</script>
```

:::
### 其他类型

:::demo

```html
<template>
  <nut-input v-model="state.val5" @change="change" type="password" label="密码"/>
  <nut-input v-model="state.val6" @change="change" type="number" label="整数" />
  <nut-input v-model="state.val7" @change="change" type="digit" placeholder="支持小数点的输入" label="数字"/>
</template>
<script lang="ts">
  import { reactive } from 'vue';
  export default {
    setup() {
      const state = reactive({
        val5: '',
        val6: '',
        val7: ''
      });
      const change = (value: string | number,event:Event) => {
        console.log('change: ', value,event);
      };

      return {
        state,
        change
      };
    }
  }
</script>
```

:::

### 无边框

:::demo

```html
<template>
  <nut-input v-model="state.val8" @change="change" :hasBorder="false" label="无边框" />
  <nut-input v-model="state.val9" @change="change" :hasBorder="false" label="无边框" />
</template>
<script lang="ts">
  import { reactive } from 'vue';
  export default {
    setup() {
      const state = reactive({
        val8: '',
        val9: ''
      });
      const change = (value: string | number,event:Event) => {
        console.log('change: ', value,event);
      };

      return {
        state,
        change
      };
    }
  }
</script>
```

:::

### Prop

| 参数         | 说明                                   | 类型           | 默认值  |
|--------------|----------------------------------------|----------------|---------|
| v-model      | 输入值，双向绑定                       | String         | -       |
| type         | 输入框类型，支持原生 `input` 标签的所有 `type` 属性，另外还支持 `textarea` `number` `digit`     | String         | `text`  |
| placeholder  | 输入框为空时占位符                      | String         | -       |
| label        | 左侧文本                              | String         | -       |
| label-class  | 左侧文本额外类名                        | String | -  |
| label-width  | 左侧文本宽度，默认单位为 `px`            | String、Number | `80`    |
| label-align  | 左侧文本对齐方式，可选值 `left`、`center`、`right`   | String | `left` |
| input-align  | 输入框内容对齐方式，可选值 `left`、`center`、`right` | String | `left` |
| colon        | 是否在 label 后面添加冒号               | Boolean        | `false` |
| required     | 左侧*号是否展示                        | Boolean        | `false` |
| border       | 是否显示下边框                         | Boolean        | `true` |
| disabled     | 是否禁用                              | Boolean        | `false` |
| readonly     | 是否只读                              | Boolean        | `false` |
| autofocus    | 是否自动获得焦点，iOS 系统不支持该属性     | Boolean        | `false` |
| max-num      | 限制最长输入字符                       | String、Number  | -       |
| clearable    | 展示清除 Icon                         | Boolean        | `false`  |
| clear-icon   | 清除图标 Icon 名称或图片链接，可参考 Icon 组件的 name 属性           | String        | `mask-close`  |
| clear-size   | 清除图标的 `font-size` 大小           | String        | `14`  |
| left-icon    | 左侧 Icon 名称或图片链接，可参考 Icon 组件的 name 属性 | String        | - |
| right-icon   | 右侧 Icon 名称或图片链接，可参考 Icon 组件的 name 属性 | String        | - |
| left-size    | 左侧 Icon 的 `font-size` 大小           | String        | `14`  |
| right-size   | 右侧 Icon 的 `font-size` 大小           | String        | `14`  |
| show-word-limit | 是否显示限制最长输入字符，需要设置 `max-num` 属性 | Boolean | `false`  |
| error         | 是否标红                                | Boolean | `false`  |
| error-message | 底部错误提示文案，为空时不展示            | String、Number | - |
| error-message-align | 底部错误提示文案对齐方式，可选值 `left`、`center`、`right`          | String | - |
| formatter      | 输入内容格式化函数    | `(val: string) => string` | - |
| format-trigger | 格式化函数触发的时机，可选值为 `onChange`、`onBlur` | String | - |

### Event

| 名称   | 说明           | 回调参数    |
|--------|----------------|-------------|
| update:model-value | 输入框内容变化时触发 | val  |
| focus  | 输入框聚焦时触发     | val  ,event |
| blur   | 输入框失焦时触发     | val ,event  |
| clear  | 点击清除按钮时触发   | val ,event  |
| click  | 点击组件时触发      | val ,event  |
| click-input      | 点击输入区域时触发      | val ,event  |
| click-left-icon  | 点击左侧图标时触发      | val ,event  |
| click-right-icon | 点击右侧图标时触发      | val ,event  |









