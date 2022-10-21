# NumberKeyboard 数字键盘

### 介绍

虚拟数字键盘，用于输入支付密码的场景。

### 安装

``` javascript
import { createApp } from 'vue';
//vue
import { NumberKeyboard,Popup } from '@nutui/nutui';
//taro
import { NumberKeyboard,Popup } from '@nutui/nutui-taro';

const app = createApp();
app.use(NumberKeyboard);
app.use(Popup);

```


### 基础用法 默认键盘
在线调试请将浏览器变为手机模式
:::demo
```html
<template>
    <nut-cell :isLink="true" @click="showKeyBoard" :showIcon="true" title="默认键盘"></nut-cell>
    <nut-numberkeyboard v-model:visible="visible" @input="input" @delete="onDelete" @close="close"> </nut-numberkeyboard>
</template>
<script>
import { ref } from 'vue';
import { Toast } from '@nutui/nutui';
export default{
  setup() {
    const visible = ref(false);
    function showKeyBoard() {
      visible.value = true;
    }
    function input(number) {
      Toast.text(`输入：${number}`);
    }
    function onDelete() {
      Toast.text('删除');
    }
    function close() {
      visible.value = false;
    }
    return {
      visible,
      input,
      showKeyBoard,
      close,
      onDelete

    };
  }
  }
</script>
```
:::
### 带右侧栏键盘

:::demo
```html
<template>
    <nut-cell :isLink="true" @click="showKeyBoard" :showIcon="true" title="带右侧栏键盘"></nut-cell>
     <nut-numberkeyboard
      type="rightColumn"
      v-model:visible="visible"
      :custom-key="customKey"
      confirm-text="支付"
      @input="input"
      @close="close"
    >
    </nut-numberkeyboard>
</template>
<script>
import { ref,reactive } from 'vue';
import { Toast } from '@nutui/nutui';
export default{
  setup() {
    const visible = ref(false);
    const customKey = reactive(['.']);
    function showKeyBoard() {
      visible.value = true;
    }
    function input(number) {
      Toast.text(`输入：${number}`);
    }
    function close() {
      visible.value = false;
    }
    return {
      visible,
    customKey,
      input,
      showKeyBoard,
      close,
     

    };
  }
  }
</script>
```
:::
### 随机数键盘

:::demo
```html
<template>
    <nut-cell :isLink="true" @click="showKeyBoard" :showIcon="true" title="随机数键盘"></nut-cell>
    <nut-numberkeyboard
      type="rightColumn"
      v-model:visible="visible"
      :randomKeys="true"
      :custom-key="customKey"
      @input="input"
      @close="close"
    >
    </nut-numberkeyboard>
</template>
<script>
import { ref,reactive } from 'vue';
import { Toast } from '@nutui/nutui';
export default{
  setup() {
    const visible = ref(false);
    const customKey = reactive(['.']);
    function showKeyBoard() {
      visible.value = true;
    }
    function input(number) {
      Toast.text(`输入：${number}`);
    }
    function close() {
      visible.value = false;
    }
    return {
      visible,
    customKey,
      input,
      showKeyBoard,
      close,
    };
  }
  }
</script>
```
:::
### 带标题栏键盘

:::demo
```html
<template>
     <nut-cell :isLink="true" @click="showKeyBoard(4)" :showIcon="true" title="带标题栏键盘"></nut-cell>
    <nut-numberkeyboard
      title="默认键盘"
      v-model:visible="visible"
      :custom-key="customKey"
      @input="input"
      @close="close"
    >
    </nut-numberkeyboard>
</template>
<script>
import { ref,reactive } from 'vue';
import { Toast } from '@nutui/nutui';
export default{
  setup() {
    const visible = ref(false);
    const customKey = reactive(['.']);
    function showKeyBoard() {
      visible.value = true;
    }
    function input(number) {
      Toast.text(`输入：${number}`);
    }
    function close() {
      visible.value = false;
    }
    return {
      visible,
      customKey,
      input,
      showKeyBoard,
      close,
    };
  }
  }
</script>
```
:::
### 身份证键盘

:::demo
```html
<template>
     <nut-cell :isLink="true" @click="showKeyBoard(4)" :showIcon="true" title="身份证键盘"></nut-cell>
    <nut-numberkeyboard
      v-model:visible="visible"
      :custom-key="customKey"
      @input="input"
      @close="close"
    >
    </nut-numberkeyboard>
</template>
<script>
import { ref,reactive } from 'vue';
import { Toast } from '@nutui/nutui';
export default{
  setup() {
    const visible = ref(false);
    const customKey = reactive(['X']);
    function showKeyBoard() {
      visible.value = true;
    }
    function input(number) {
      Toast.text(`输入：${number}`);
    }
    function close() {
      visible.value = false;
    }
    return {
      visible,
      customKey,
      input,
      showKeyBoard,
      close,
    };
  }
  }
</script>
```
:::

### 双向绑定：

:::demo
```html
<template>
      <nut-cell
      :isLink="true"
      desc-text-align="left"
      @click="showKeyBoard"
      :desc="value"
      :showIcon="true"
      title="双向绑定："
    ></nut-cell>
     <nut-numberkeyboard 
       v-model:visible="visible" 
       v-model:value="value" 
       maxlength="6" 
       @close="close">
    </nut-numberkeyboard>
</template>
<script>
import { ref,reactive } from 'vue';
import { Toast } from '@nutui/nutui';
export default{
  setup() {
    const visible = ref(false);
     const value = ref('');
    const customKey = reactive(['.']);
    function showKeyBoard() {
      visible.value = true;
    }
    function close() {
      visible.value = false;
    }
    return {
      visible,
      customKey,
      value,
      showKeyBoard,
      close,
    };
  }
  }
</script>
```
:::

## API
### Props

| 字段 | 说明 | 类型 | 默认值 |
|----- | ----- | ----- | ----- |
| v-model:visible | 是否显示键盘 | Boolean | false | 
| title | 键盘标题 | String | - |
| type | 键盘模式  | String | `default`：默认样式<br>`rightColumn`：带右侧栏 |
| random-keys | 随机数  | Boolean | false |
| custom-key | 自定义键盘额外的键  | String [] | 数组形式最多支持添加2个,超出默认取前2项 |
| overlay | 是否显示遮罩  | Boolean| true |
| v-model:value | 当前输入值		 | String | - |
| maxlength  | 输入值最大长度，结合 v-model 使用 | Number ｜ String| 6 |
| confirm-text  | 自定义完成按钮文字，如"支付"，"下一步"，"提交"等 | String | 完成 |
| teleport    | 指定挂载节点(`小程序不支持`)   | String         | `"body"`      |
| pop-class    | 自定义弹框类名     | String         | -             |


### Events

| 字段 | 说明 | 回调参数
|----- | ----- | -----
| input  | 点击按键时触发                 | 按键内容 |
| delete | 点击删除键时触发               | -             |
| close  | 点击关闭按钮或非键盘区域时触发  | -             |

