# Input 输入框

### 介绍

用户可以在文本框里输入内容。

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

### 基础用法

:::demo

```html
<template>
  <nut-input 
    v-model="state.text" 
    label="文本" 
    placeholder="文本" 
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

:::demo

```html
<template>
  <nut-input 
    label="文本" 
    placeholder="文本" 
    v-model="state.text" 
  />
  <nut-input 
    label="密码" 
    placeholder="密码" 
    v-model="state.password" 
    type="password" 
  />
  <nut-input 
    label="数字" 
    placeholder="数字" 
    v-model="state.number" 
    type="number" 
  />
  <nut-input 
    label="整数" 
    placeholder="整数" 
    v-model="state.digit" 
    type="digit" 
  />
  <nut-input 
    label="手机号" 
    placeholder="手机号" 
    v-model="state.tel" 
    type="tel" 
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
        tel: ''
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

:::demo

```html
<template>
  <nut-input 
    label="文本" 
    placeholder="只读" 
    v-model="state.readonly" 
    readonly 
  />
  <nut-input 
    label="文本" 
    placeholder="禁用" 
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

### 显示图标

通过 `left-icon` 和 `right-icon` 配置输入框两侧的图标，通过设置 `clearable` 在输入过程中展示清除图标。需要引用 `Icon` 组件

:::demo

```html
<template>
  <nut-input 
    v-model="state.showIcon" 
    label="文本" 
    placeholder="显示图标" 
    left-icon="dongdong" 
    right-icon="ask2" 
  />
  <nut-input 
    v-model="state.clear" 
    label="文本" 
    placeholder="显示清除图标" 
    clearable
    clearSize="14" 
  />
</template>
<script lang="ts">
  import { reactive } from 'vue';
  export default {
    setup() {
      const state = reactive({
        showIcon: '',
        required: '',
      });
      return {
        state
      };
    }
  }
</script>
```

:::

### 错误提示

:::demo

```html
<template>
  <nut-input 
    v-model="state.required" 
    label="文本" 
    placeholder="必填项" 
    required 
  />
  <nut-input 
    v-model="state.error1" 
    label="文本" 
    placeholder="输入内容标红" 
    error 
  />
  <nut-input 
    v-model="state.error2" 
    label="文本" 
    placeholder="底部错误提示文案" 
    error-message="底部错误提示文案" 
  />
</template>
<script lang="ts">
  import { reactive } from 'vue';
  export default {
    setup() {
      const state = reactive({
        required: '',
        error1: '',
        error2: '',
      });
      return {
        state
      };
    }
  }
</script>
```

:::

### 插入按钮

:::demo

```html
<template>
  <nut-input 
    v-model="state.buttonVal" 
    label="短信验证码"
    placeholder="请输入短信验证码"
    clearable 
    center 
  >
    <template #button>
      <nut-button size="small" type="primary">发送验证码</nut-button>
    </template>
  </nut-input>
</template>
<script lang="ts">
  import { reactive } from 'vue';
  export default {
    setup() {
      const state = reactive({
        buttonVal: ''
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

:::demo

```html
<template>
  <nut-input 
    v-model="state.format1" 
    label="文本" 
    placeholder="在输入时执行格式化" 
    :formatter="formatter" 
  />
  <nut-input
    v-model="state.format2"
    label="文本"
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

:::demo

```html
<template>
  <nut-input
    v-model="state.textarea"
    label="留言"
    type="textarea"
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
        textarea: ''
      });
      return {
        state
      };
    }
  }
</script>
```

:::

### 对齐方式

:::demo

```html
<template>
  <nut-input 
    v-model="state.align1" 
    label="文本" 
    label-align="right" 
    placeholder="文本内容对齐" 
  />
  <nut-input 
    v-model="state.align2" 
    label="文本" 
    input-align="right" 
    placeholder="输入框内容对齐"
   />
</template>
<script lang="ts">
  import { reactive } from 'vue';
  export default {
    setup() {
      const state = reactive({
        align1: '',
        align2: ''
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

:::demo

```html
<template>
  <nut-input 
    v-model="state.noBorder1" 
    :border="false" 
    label="无边框" 
  />
  <nut-input 
    v-model="state.noBorder2" 
    :border="false" 
    label="无边框" 
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
### 点击事件

:::demo

```html
<template>
  <nut-input
    v-model="state.event"
    label="点击"
    left-icon="dongdong"
    right-icon="ask2"
    clearable
    placeholder="点击"
    @update:model-value="change"
    @focus="focus"
    @blur="blur"
    @clear="clear"
    @click="click"
    @click-input="clickInput"
    @click-left-icon="clickLeftIcon"
    @click-right-icon="clickRightIcon"
  />
</template>
<script lang="ts">
  import { reactive } from 'vue';
  export default {
    setup() {
      const state = reactive({
        event: ''
      });
      const change = (value: string | number) => {
        console.log('change: ', value);
      };
      const focus = (value: string | number, event: Event) => {
        console.log('focus:', value, event);
      };
      const blur = (value: string | number, event: Event) => {
        console.log('blur:', value, event);
      };
      const clear = (value: string | number, event: Event) => {
        console.log('clear:', value, event);
      };
      const click = (value: string | number) => {
        console.log('click:', value);
      };
      const clickInput = (value: string | number) => {
        console.log('clickInput:', value);
      };
      const clickLeftIcon = (value: string | number) => {
        console.log('clickLeftIcon:', value);
      };
      const clickRightIcon = (value: string | number) => {
        console.log('clickRightIcon:', value);
      };

      return {
        state,
        change,
        blur,
        clear,
        focus,
        click,
        clickInput,
        clickLeftIcon,
        clickRightIcon
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
| max-length      | 限制最长输入字符                       | String、Number  | -       |
| clearable    | 展示清除 Icon                         | Boolean        | `false`  |
| clear-icon   | 清除图标 Icon 名称或图片链接，[可参考 Icon 组件的 name 属性](#/icon)   | String        | `mask-close`  |
| clear-size   | 清除图标的 `font-size` 大小           | String        | `14`  |
| left-icon    | 左侧 Icon 名称或图片链接，[可参考 Icon 组件的 name 属性](#/icon) | String        | - |
| right-icon   | 右侧 Icon 名称或图片链接，[可参考 Icon 组件的 name 属性](#/icon) | String        | - |
| left-icon-size    | 左侧 Icon 的 `font-size` 大小           | String        | `14`  |
| right-icon-size   | 右侧 Icon 的 `font-size` 大小           | String        | `14`  |
| show-word-limit | 是否显示限制最长输入字符，需要设置 `max-length` 属性 | Boolean | `false`  |
| error         | 是否标红                                | Boolean | `false`  |
| error-message | 底部错误提示文案，为空时不展示            | String、Number | - |
| error-message-align | 底部错误提示文案对齐方式，可选值 `left`、`center`、`right`          | String | - |
| formatter      | 输入内容格式化函数    | `(val: string) => string` | - |
| format-trigger | 格式化函数触发的时机，可选值为 `onChange`、`onBlur` | String | - |
| confirm-type   | 键盘右下角按钮的文字（`仅支持小程序`），仅在`type='text'`时生效,可选值 `send`：发送、`search`：搜索、`next`：下一个、`go`：前往、`done`：完成 | String |   `done`   |
| adjust-position| 键盘弹起时，是否自动上推页面，仅支持原生     | Boolean | `true` |

### Events

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

### Slots
| 名称  | 说明     | 
|-------|----------|
| button | 自定义输入框尾部按钮 |
| input `v3.1.22` | 自定义输入框，使用此插槽后，与输入框相关的属性和事件将失效 |







