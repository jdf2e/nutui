# ShortPassword 短密码

### 介绍

短密码输入框，可用于输入密码、短信验证码等
### 安装

``` javascript
import { createApp } from 'vue';
import { ShortPassword, NumberKeyboard } from '@nutui/nutui-taro';

const app = createApp();
app.use(ShortPassword);
app.use(NumberKeyboard);
```


### 基础用法
:::demo
```html
<template>
  <nut-cell title="基础用法" is-link @click="state.visible1 = true;"></nut-cell>
  <nut-short-password
    v-model="state.value1"
    v-model:visible="state.visible1"
    @focus="state.showKeyboard1=!state.showKeyboard1"
    @close="state.showKeyboard1=false"
  >
  </nut-short-password>
  <nut-number-keyboard 
    v-model="state.value1"
    v-model:visible="state.showKeyboard1" 
  >
  </nut-number-keyboard>
</template>
<script>
import { reactive } from 'vue';
export default{
  setup() {
    const state = reactive({
      visible1: false,
      showKeyboard1: false,
      value1: '',
    });
    return {
      state,
    };
  }
  }
</script>
```
:::


### 自定义密码长度4

:::demo
```html
<template>
  <nut-cell
    title="自定义密码长度4"
    is-link
    @click="
      state.visible2 = true;
    "
  ></nut-cell>
  <nut-short-password
    v-model="state.value2"
    v-model:visible="state.visible2"
    :length="state.length"
    @focus="state.showKeyboard2=!state.showKeyboard2"
    @close="state.showKeyboard2=false"
    @complete="methods.complete"
  >
  </nut-short-password>
  <nut-number-keyboard 
    v-model="state.value2"
    v-model:visible="state.showKeyboard2" 
    maxlength="4" 
  >
  </nut-number-keyboard>
</template>
<script>
import { reactive } from 'vue';
export default{
  setup() {
     const state = reactive({
      visible2: false,
      showKeyboard2: false,
      value2: '',
      length:'4'
    });
    const methods = {
      complete(val) {
        console.log(val)
      },
    };
    return {
      state,
      methods
    };
  }
  }
</script>
```
:::
### 忘记密码提示语事件回调


:::demo
```html
<template>
  <nut-cell
    title="忘记密码提示语事件回调"
    is-link
    @click="
      state.visible3= true;
    "
  ></nut-cell>
  <nut-short-password
    v-model="state.value3"
    v-model:visible="state.visible3"
    @focus="state.showKeyboard3=!state.showKeyboard3"
    @close="state.showKeyboard3=false"
    @tips="methods.onTips"
  >
  </nut-short-password>
  <nut-number-keyboard 
    v-model="state.value3"
    v-model:visible="state.showKeyboard3" 
  >
  </nut-number-keyboard>
</template>
<script>
import { reactive } from 'vue';
export default{
  setup() {
    const state = reactive({
      visible3: false,
      showKeyboard3: false,
      value3: '',
    });
    const methods = {
      onTips() {
        console.log('忘记密码')
      },
    };
    return {
      state,
      methods
    };
  }
  }
</script>
```
:::

### 错误提示语
:::demo
```html
<template>
  <nut-cell
    title="错误提示语"
    is-link
    @click="
      state.visible4 = true;
    "
  ></nut-cell>
  <nut-short-password
    v-model="state.value4"
    v-model:visible="state.visible4"
    :error-msg="state.errorMsg"
    @focus="state.showKeyboard4=!state.showKeyboard4"
    @close="state.showKeyboard4=false"
    @tips="methods.onTips"
  >
  </nut-short-password>
  <nut-number-keyboard 
    v-model="state.value4"
    v-model:visible="state.showKeyboard4" 
  >
  </nut-number-keyboard>
</template>
<script>
import { reactive } from 'vue';
export default{
  setup() {
    const state = reactive({
      visible4: false,
      showKeyboard4: false,
      value4: '',
      errorMsg: '请输入正确密码',
    });
    const methods = {
      onTips() {
        console.log('执行忘记密码逻辑');
      },
    };
    return {
      state,
      methods
    };
  }
  }
</script>
```
:::
## API
### Props


| 参数                   | 说明                | 类型           | 默认值                       |
|------------------------|---------------------|----------------|------------------------------|
| v-model                | 密码初始值          | string         |                              |
| v-model:visible        | 是否展示短密码框    | boolean        | `false`                        |
| title                  | 标题                | string         | `请输入密码`                   |
| desc                   | 密码框描述          | string         | `您使用了虚拟资产，请进行验证` |
| tips                   | 提示语              | string         | `忘记密码`                     |
| close-on-click-overlay | 是否点击遮罩关闭    | boolean        | `true`                         |
| length                 | 密码长度，取值为4~6 | string \| number | `6`                            |
| error-msg              | 错误信息提示        | string         | `''`                           |


### Events

| 事件名 | 说明                   | 回调参数 |
|----------|------------------------|----------|
| close    | 点击关闭图标或者遮罩时触发事件 | -    |
| complete | 输入完成的回调         | 当前输入框值value    |
| focus | 输入框聚焦时触发	         | -    |


## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                                    | 默认值                     |
| --------------------------------------- | -------------------------- |
| --nut-shortpassword-background-color| _rgba(245, 245, 245, 1)_  |
| --nut-shortpassword-border-color| _#ddd_  |
| --nut-shortpassword-error| _var(--nut-primary-color)_  |
| --nut-shortpassword-forget| _rgba(128, 128, 128, 1)_  |

