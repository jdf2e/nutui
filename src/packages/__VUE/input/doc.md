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
| type         | 类型，可选值为 `text` `number`  等     | String         | `text`  |
| placeholder  | 为空时占位符                           | String         | -       |
| label        | 左侧文案                               | String         | -       |
| require-show | 左侧*号是否展示                        | Boolean        | `false` |
| has-border   | 下边框是否展示                         | Boolean        | `true` |
| disabled     | 是否禁用                               | Boolean        | `false` |
| readonly     | 是否只读                               | Boolean        | `false` |
| max-length   | 限制最长输入字符                       | String、Number | -       |
| clearable    | 展示清除icon                           | Boolean        | `true`  |
| text-align   | 文本位置,可选值`left`,`center`,`right` | String         | `left`  |

### Event

| 名称   | 说明           | 回调参数    |
|--------|----------------|-------------|
| change | 输入内容时触发 | val ,event  |
| focus  | 聚焦时触发     | val  ,event |
| blur   | 失焦时触发     | val ,event  |
| clear  | 点击清空时触发 | val         |








