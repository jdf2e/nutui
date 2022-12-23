# ShortPassword 短密码

### 介绍

短密码输入框，可用于输入密码、短信验证码等
### 安装

``` javascript
import { createApp } from 'vue';
import { ShortPassword,NumberKeyboard } from '@nutui/nutui-taro';

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
import { Toast } from '@nutui/nutui';
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
        Toast.text('执行忘记密码逻辑');
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


| 字段                   | 说明                | 类型           | 默认值                       |
|------------------------|---------------------|----------------|------------------------------|
| v-model                | 密码初始值          | String         |                              |
| v-model:visible        | 是否展示短密码框    | Boolean        | false                        |
| title                  | 标题                | String         | 请输入密码                   |
| desc                   | 密码框描述          | String         | 您使用了虚拟资产，请进行验证 |
| tips                   | 提示语              | String         | 忘记密码                     |
| close-on-click-overlay | 是否点击遮罩关闭    | Boolean        | true                         |
| length                 | 密码长度，取值为4~6 | String、Number | 6                            |
| error-msg              | 错误信息提示        | String         | ''                           |


### Events

| 事件名称 | 说明                   | 回调参数 |
|----------|------------------------|----------|
| close    | 点击关闭图标或者遮罩时触发事件 | -    |
| complete | 输入完成的回调         | 当前输入框值value    |
| focus | 输入框聚焦时触发	         | -    |

