# ShortPassword

### Intro

Short password input box, which can be used to enter passwords, SMS verification codes, etc.
### Install

``` javascript
import { createApp } from 'vue';
import { ShortPassword, NumberKeyboard } from '@nutui/nutui';

const app = createApp();
app.use(ShortPassword);
app.use(NumberKeyboard);
```


### Basic Usage
:::demo
```html
<template>
  <nut-cell title="Basic Usage" is-link @click="state.visible1 = true;"></nut-cell>
  <nut-short-password 
    v-model="state.value1" 
    v-model:visible="state.visible1" 
    @focus="state.showKeyboard1 = true">
  </nut-short-password>
  <nut-number-keyboard
    v-model="state.value1" 
    v-model:visible="state.showKeyboard1"
    @blur="state.showKeyboard1 = false"
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
### Custom Password Length

:::demo
```html
<template>
  <nut-cell title="Custom Password Length" is-link @click="state.visible2 = true;"></nut-cell>
  <nut-short-password 
    v-model="state.value2" 
    v-model:visible="state.visible2" 
    @focus="state.showKeyboard2 = true"
    :length="state.length"
    @complete="methods.complete"
  >
  </nut-short-password>
  <nut-number-keyboard 
    v-model="state.value2"
    v-model:visible="state.showKeyboard2" 
    @blur="state.showKeyboard2 = false"
  >
  </nut-number-keyboard>
</template>
<script>
import { reactive } from 'vue';
import { showToast } from '@nutui/nutui';
import '@nutui/nutui/dist/packages/toast/style';
export default{
  setup() {
    const state = reactive({
      visible2: false,
      showKeyboard2: false,
      value2: '',
      length: 4
    });
    const methods = {
      complete(value: string) {
        showToast.text(value);
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
### Forget password


:::demo
```html
<template>
  <nut-cell title="Forget password" is-link @click="state.visible3 = true;"></nut-cell>
  <nut-short-password 
    v-model="state.value3" 
    v-model:visible="state.visible3" 
    @focus="state.showKeyboard3 = true"
    @complete="methods.complete"
    @tips="methods.onTips"
  >
  </nut-short-password>
  <nut-number-keyboard 
    v-model="state.value3"
    v-model:visible="state.showKeyboard3" 
    @blur="state.showKeyboard3 = false"
  >
  </nut-number-keyboard>
</template>
<script>
import { reactive } from 'vue';
import { showToast } from '@nutui/nutui';
import '@nutui/nutui/dist/packages/toast/style';
export default{
  setup() {
    const state = reactive({
      visible3: false,
      showKeyboard3:false,
      value3: '',
    });
    const methods = {
      complete(value: string) {
        showToast.text(value);
      },
      onTips() {
        showToast.text('Execute forgotten password logic');
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

### Error Message
:::demo
```html
<template>
  <nut-cell title="Error Message" is-link @click="state.visible4 = true;"></nut-cell>
  <nut-short-password 
    v-model="state.value4" 
    v-model:visible="state.visible4" 
    @focus="state.showKeyboard4 = true"
    :error-msg="state.errorMsg"
    @complete="methods.complete"
    @tips="methods.onTips"
  >
  </nut-short-password>
  <nut-number-keyboard 
    v-model="state.value4"
    v-model:visible="state.showKeyboard4" 
    @blur="state.showKeyboard4 = false"
    >
  </nut-number-keyboard>
</template>
<script>
import { reactive } from 'vue';
import { showToast } from '@nutui/nutui';
import '@nutui/nutui/dist/packages/toast/style';
export default{
  setup() {
    const state = reactive({
      visible4: false,
      showKeyboard4: false,
      value4: '',
      errorMsg: 'Please enter correct password',
    });
    const methods = {
      complete(value: string) {
        showToast.text(value);
      },
      onTips() {
        showToast.text('Execute forgotten password logic');
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


| Attribute      | Description                                      | Type   | Default |
|------------------------|---------------------|----------------|------------------------------|
| v-model                | Current value        | string         |                              |
| v-model:visible        | Whether to show shortpassword    | boolean        | `false`                        |
| title                  | title                | string         | `Please enter password  `                 |
| desc                   | description          | string         | `Verify` |
| tips                   | Bottom right prompt              | string         | `Forget password  `                   |
| close-on-click-overlay | Click to close the mask    | boolean        | `true`                         |
| length                 | ShortPassword lenght The value is 4~6| string \| number | `6`                            |
| error-msg              | Error message        | string         | `''`                           |


### Events

| Event | Description                  | Arguments    |
|----------|------------------------|----------|
| close    | Trigger an event when the close icon is clicked | -    |
| complete | Input complete callback         | `value:string`    |
| focus | 	Emitted when input is focused	         | -    |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value | Description |

| 名称                                    | 默认值                     |
| --------------------------------------- | -------------------------- |
| --nut-shortpassword-background-color| _rgba(245, 245, 245, 1)_  |
| --nut-shortpassword-border-color| _#ddd_  |
| --nut-shortpassword-error| _var(--nut-primary-color)_  |
| --nut-shortpassword-forget| _rgba(128, 128, 128, 1)_  |

