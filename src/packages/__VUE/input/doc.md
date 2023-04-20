# Input 输入框

### 介绍

用户可以在文本框里输入内容。

### 安装

``` javascript
import { createApp } from 'vue';
import { Input,Button } from '@nutui/nutui';

const app = createApp();
app.use(Input);
app.use(Button);
```

### 基础用法

可以通过 `v-model` 双向绑定输入框的值，通过 `placeholder` 设置占位提示文字。

:::demo

```html
<template>
  <nut-input 
    v-model="state.text" 
    placeholder="请输入文本" 
  />
</template>
<script lang="ts">
  import { reactive } from 'vue';
  export default {
    setup() {
      const state = reactive({
        text: ''
      });
      return {
        state
      };
    }
  }
</script>
```

:::

### 自定义类型

根据 `type` 属性定义不同类型的输入框，默认值为 `text`。

:::demo

```html
<template>
  <nut-input 
    placeholder="请输入文本" 
    v-model="state.text" 
  />
  <nut-input 
    placeholder="请输入密码" 
    v-model="state.password" 
    type="password" 
  />
  <nut-input 
    placeholder="请输入数字" 
    v-model="state.number" 
    type="number" 
  />
  <nut-input 
    placeholder="请输入整数" 
    v-model="state.digit" 
    type="digit" 
  />
</template>
<script lang="ts">
  import { reactive } from 'vue';
  export default {
    setup() {
      const state = reactive({
        text: '',
        password: '',
        number: '',
        digit: '',
      });
      return {
        state
      };
    }
  }
</script>
```

:::

### 禁用和只读

通过 `readonly` 将输入框设置为只读状态，通过 `disabled` 将输入框设置为禁用状态。

:::demo

```html
<template>
  <nut-input 
    placeholder="输入框只读" 
    v-model="state.readonly" 
    readonly 
  />
  <nut-input 
    placeholder="输入框已禁用" 
    v-model="state.disabled" 
    disabled 
  />
</template>
<script lang="ts">
  import { reactive } from 'vue';
  export default {
    setup() {
      const state = reactive({
        readonly: '',
        disabled: ''
      });
      return {
        state
      };
    }
  }
</script>
```

:::

### 显示清除图标

通过设置 `clearable` 在输入过程中展示清除图标。清除按钮，在失去焦点后将隐藏,可通过 `showClearIcon` 设置失去焦点后继续展示清除按钮。

:::demo

```html
<template>
  <nut-input 
    v-model="state.clear" 
    placeholder="显示清除图标" 
    clearable
    clearSize="14" 
  />
  <nut-input
    v-model="state.clear2"
    placeholder="自定义清除图标"
    clearable
    clearSize="14"
    show-word-limit
    max-length="50"
    :showClearIcon="true"
  >
    <template #clear>
      <Close width="12" height="12" @click="clearValue"></Close>
    </template>
  </nut-input>
</template>
<script lang="ts">
  import { reactive } from 'vue';
  import { Close } from "@nutui/icons-vue"
  export default {
    components:{
      Close
    },
    setup() {
      const state = reactive({
        clear:'',
        clear2:''
      });
      const clearValue = () => {
        state.clear2 = '';
      };
      return {
        state, clearValue
      };
    }
  }
</script>
```

:::

### 配合表单使用

结合 `nut-form` 与 `nut-form-item` 使用

:::demo

```html
<template>
  <nut-form :model-value="state">
    <nut-form-item label="文本" label-align="center">
      <nut-input v-model="state.val1" placeholder="请输入文本" :border="false" />
    </nut-form-item>
  </nut-form>
</template>
<script lang="ts">
  import { reactive } from 'vue';
  export default {
    setup() {
      const state = reactive({
        val1: '',
      });
      return {
        state
      };
    }
  }
</script>
```

:::


### 格式化输入内容

通过 `formatter` 属性可以对输入的内容进行格式化，通过 `format-trigger` 属性可以指定执行格式化的时机。例如只允许输入非数字的字符：

:::demo

```html
<template>
  <nut-input 
    v-model="state.format1" 
    placeholder="在输入时执行格式化" 
    :formatter="formatter" 
    format-trigger="onChange"
  />
  <nut-input
    v-model="state.format2"
    placeholder="在失焦时执行格式化"
    :formatter="formatter"
    format-trigger="onBlur"
  />
</template>
<script lang="ts">
  import { reactive } from 'vue';
  export default {
    setup() {
      const state = reactive({
        format1: '',
        format2: ''
      });
      const formatter = (value: string) => value.replace(/\d/g, '');
      return {
        state,
        formatter
      };
    }
  }
</script>
```

:::

### 显示字数统计

设置 `maxlength` 和 `show-word-limit` 属性后会在底部显示字数统计。

:::demo

```html
<template>
  <nut-input
    v-model="state.text"
    type="text"
    show-word-limit
    rows="2"
    max-length="50"
    placeholder="请输入留言"
  />
</template>
<script lang="ts">
  import { reactive } from 'vue';
  export default {
    setup() {
      const state = reactive({
        text: ''
      });
      return {
        state
      };
    }
  }
</script>
```

:::


### 无边框

通过 `border` 属性可以设置输入框的边框。

:::demo

```html
<template>
  <nut-input 
    v-model="state.noBorder1" 
    :border="false" 
    placeholder="输入框无边框" 
  />
  <nut-input 
    v-model="state.noBorder2" 
    :border="false" 
    placeholder="输入框无边框" 
  />
</template>
<script lang="ts">
  import { reactive } from 'vue';
  export default {
    setup() {
      const state = reactive({
        noBorder1: '',
        noBorder2: ''
      });
      return {
        state
      };
    }
  }
</script>
```

:::
### 事件演示

:::demo

```html
<template>
  <nut-input
    v-model="state.event"
    clearable
    placeholder="事件演示"
    @clear="clear"
    @click-input="clickInput"
  />
</template>
<script lang="ts">
  import { reactive } from 'vue';
  import { showToast } from '@nutui/nutui';
  export default {
    setup() {
      const state = reactive({
        event: ''
      });
      const clear = (event: Event) => {
        showToast.text('clear');
        console.log('clear:', event);
      };
      const clickInput = (event: Event) => {
        showToast.text('clickInput');
        console.log('clickInput:', event);
      };

      return {
        state,
        clear,
        clickInput,
      };
    }
  }
</script>
```

:::

### 插槽演示

:::demo

```html
<template>
  <nut-input
    v-model="state.slotValue"
    placeholder="插槽演示"
    clearable
  >
    <template #left> <Ask></Ask> </template>
    <template #right> <nut-button type='primary' size="small">获取验证码</nut-button> </template>
  </nut-input>
</template>
<script lang="ts">
  import { reactive } from 'vue';
  import { Ask } from '@nutui/icons-vue';

  export default {
    components:{
      Ask
    },
    setup() {
      const state = reactive({
        slotValue: ''
      });
      return {
        state,
      };
    }
  }
</script>
```
:::
## API
### Props

| 参数         | 说明                                   | 类型           | 默认值  |
|--------------|----------------------------------------|----------------|---------|
| v-model      | 输入值，双向绑定                       | string         | -       |
| type         | 输入框类型，支持原生 `input` 标签的所有 `type` 属性，另外还支持 `number` `digit`     | string         | `text`  |
| placeholder  | 输入框为空时占位符                      | string         | -       |
| input-align  | 输入框内容对齐方式，可选值 `left`、`center`、`right` | string | `left` |
| border       | 是否显示下边框                         | boolean        | `true` |
| disabled     | 是否禁用                              | boolean        | `false` |
| readonly     | 是否只读                              | boolean        | `false` |
| autofocus    | 是否自动获得焦点，`iOS` 系统不支持该属性     | boolean        | `false` |
| max-length   | 限制最长输入字符                       | string ｜ number | - |
| clearable    | 展示清除 `Icon`                         | boolean        | `false`  |
| showClearIcon `4.0.2` | 是否在失去焦点后，继续展示清除按钮，在设置 `clearable` 时生效 | boolean        | `false`  |
| clear-size   | 清除图标的 `font-size` 大小           | string        | `14`  |
| show-word-limit | 是否显示限制最长输入字符，需要设置 `max-length` 属性 | boolean | `false`  |
| error         | 是否标红                                | boolean | `false`  |
| formatter      | 输入内容格式化函数    | `(val: string) => string` | - |
| format-trigger | 格式化函数触发的时机，可选值为 `onChange`、`onBlur` | string | `onChange` |
| confirm-type | 键盘右下角按钮的文字，仅在`type='text'`时生效,可选值 `send`：发送、`search`：搜索、`next`：下一个、`go`：前往、`done`：完成 | string |   `done`   |

### Events

| 事件名   | 说明           | 回调参数    |
|--------|----------------|-------------|
| update:model-value | 输入框内容变化时触发 | `val`  |
| focus  | 输入框聚焦时触发     | `event` |
| blur   | 输入框失焦时触发     | `event`  |
| clear  | 点击清除按钮时触发   | `event`  |
| click  | 点击组件时触发      | `event`  |
| click-input      | 点击输入区域时触发      | `event`  |

### Slots
| 名称  | 说明     | 
|-------|----------|
| clear | 自定义输入框尾部清除按钮 |
| left `4.0.1` | 自定义输入框左侧插槽内容 |
| right `4.0.1`| 自定义输入框右侧插槽内容 |

### Ref
| 名称  | 说明     | 
|-------|----------|
| focus `4.0.6` | 获取焦点 |
| blur `4.0.6` | 失去焦点 |
| select `4.0.6`| 选择文字 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称                                    | 默认值                     |
| --------------------------------------- | -------------------------- | 
| --nut-input-border-bottom| _#eaf0fb_  | 
| --nut-input-disabled-color| _#c8c9cc_  | 
| --nut-input-required-color| _var(--nut-required-color)_  | 
| --nut-input-font-size| _var(--nut-font-size-2)_  | 








