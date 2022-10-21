# NumberKeyboard

### Intro

Virtual numeric keypad, used for scenarios where payment passwords are entered.

### Install

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


### Default Keyboard
For online debugging, please change the browser to mobile mode
:::demo
```html
<template>
    <nut-cell :isLink="true" @click="showKeyBoard" :showIcon="true" title="Default Keyboard"></nut-cell>
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
      Toast.text(`enter：${number}`);
    }
    function onDelete() {
      Toast.text('delete');
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
### Keyboard With Sidebar

:::demo
```html
<template>
    <nut-cell :isLink="true" @click="showKeyBoard" :showIcon="true" title="Keyboard With Sidebar"></nut-cell>
     <nut-numberkeyboard
      type="rightColumn"
      v-model:visible="visible"
      :custom-key="customKey"
      confirm-text="pay"
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
      Toast.text(`enter${number}`);
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
### Random Key Order

:::demo
```html
<template>
    <nut-cell :isLink="true" @click="showKeyBoard" :showIcon="true" title="Random Key Order"></nut-cell>
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
      Toast.text(`enter：${number}`);
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
### Show Keyboard With Title

:::demo
```html
<template>
     <nut-cell :isLink="true" @click="showKeyBoard(4)" :showIcon="true" title="Show Keyboard With Title"></nut-cell>
    <nut-numberkeyboard
      title="title"
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
      Toast.text(`enter：${number}`);
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
### Show IdNumber Keyboard

:::demo
```html
<template>
     <nut-cell :isLink="true" @click="showKeyBoard(4)" :showIcon="true" title="IdNumber Keyboard"></nut-cell>
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
      Toast.text(`enter：${number}`);
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

### Bind Value

:::demo
```html
<template>
      <nut-cell
      :isLink="true"
      desc-text-align="left"
      @click="showKeyBoard"
      :desc="value"
      :showIcon="true"
      title="Bind Value"
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

| Attribute | Description | Type | Default |
|----- | ----- | ----- | ----- |
| v-model:visible | Whether to show keyboard | Boolean | false | 
| v-model:value | 	Current value		 | String | - |
| title | Keyboard title | String | - |
| type | Keyboard type  can be set to `rightColumn`   | String | `default` |
| random-keys | Whether to shuffle the order of keys  | Boolean | false |
| custom-key | Content of bottom left key  | String [] | Array form supports adding up to two |
| overlay | Whether to show the mask  | Boolean| true |
| maxlength  | Value maxlength，Use with v-model | Number ｜ String| 6 |
| confirm-text  | Custom done button text,Such as "pay", "next", "submit" | String | done |
| teleport    | Specify the mount node `(not supported by miniProgram)`  | String         | `"body"`      |
| pop-class    | Custom bullet box classname     | String         | -             |


### Events

| Event | Description | Arguments
|----- | ----- | -----
| input  | Emitted when a key is pressed                 | key: string |
| delete | 	Emitted when the delete key is pressed               | -             |
| close  | Emitted when the close button or non-keyboard area is clicked is clicked  | -             |

