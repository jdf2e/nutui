# ShortPassword

### Intro

Short password input box, which can be used to enter passwords, SMS verification codes, etc.
### Install

``` javascript
import { createApp } from 'vue';
//vue
import { ShortPassword,Popup } from '@nutui/nutui';
//taro
import { ShortPassword,Popup } from '@nutui/nutui-taro';

const app = createApp();
app.use(ShortPassword);
app.use(Popup);

```


### Basic Usage
:::demo
```html
<template>
<nut-cell title="Basic Usage" is-link @click="state.visible = true;"></nut-cell>
 <nut-shortpassword
      v-model="state.value"
      v-model:visible="state.visible"
      @change="methods.onChange"
      @close="methods.close"
      @cancel="methods.cancel"
    >
    </nut-shortpassword>
</template>
<script>
import { reactive } from 'vue';
import { Toast } from '@nutui/nutui';
export default{
  setup() {
    const state = reactive({
      visible: false,
      value: '',
    });
    const methods = {
      onChange(val) {
        val && Toast.text(val);
      },
      close() {
        Toast.text('Click the icon to close the popup');
      },
      cancel() {
        Toast.text('Click the overlay to close the popup');
      }
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

### Show Button Group
:::demo
```html
<template>
<nut-cell title="Show Button Group" is-link @click="state.visible = true;"></nut-cell>
 <nut-shortpassword
      v-model="state.value"
      v-model:visible="state.visible"
      :no-button="false"
      @change="methods.onChange"
      @ok="methods.onOk"
      @close="methods.close"
      @cancel="methods.cancel"
    >
    </nut-shortpassword>
</template>
<script>
import { reactive } from 'vue';
import { Toast } from '@nutui/nutui';
export default{
  setup() {
    const state = reactive({
      visible: false,
      noButton: true,
      value: '',
      errorMsg: '',
      length: 6
    });
    const methods = {
      onChange(val) {
        val && Toast.text(val);
      },
      onOk(val) {
        val && Toast.text(val);
        state.visible = false;
      },
       close() {
        Toast.text('Click the icon to close the popup');
      },
      cancel() {
        Toast.text('Click the overlay to close the popup');
      }
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

### Custom Password Length

:::demo
```html
<template>
<nut-cell title="Custom Password Length" is-link @click="state.visible = true;"></nut-cell>
 <nut-shortpassword
      v-model="state.value"
      v-model:visible="state.visible"
      :length="state.length"
      @change="methods.onChange"
      @close="methods.close"
      @cancel="methods.cancel"
    >
    </nut-shortpassword>
</template>
<script>
import { reactive } from 'vue';
import { Toast } from '@nutui/nutui';
export default{
  setup() {
    const state = reactive({
      visible: false,
      value: '',
      length: 4
    });
    const methods = {
      onChange(val) {
        val && Toast.text(val);
      },
      onOk(val) {
        val && Toast.text(val);
        state.visible = false;
      },
       close() {
        Toast.text('Click the icon to close the popup');
      },
      cancel() {
        Toast.text('Click the overlay to close the popup');
      }
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
<nut-cell title="Forget password" is-link @click="state.visible = true;"></nut-cell>
 <nut-shortpassword
      v-model="state.value"
      v-model:visible="state.visible"
      @change="methods.onChange"
      @close="methods.close"
      @tips="methods.onTips"
      @cancel="methods.cancel"
    >
    </nut-shortpassword>
</template>
<script>
import { reactive } from 'vue';
import { Toast } from '@nutui/nutui';
export default{
  setup() {
    const state = reactive({
      visible: false,
      value: '',
    });
    const methods = {
      onChange(val) {
        val && Toast.text(val);
      },
      onTips() {
        Toast.text('Execute forgotten password logic');
      },
      close() {
        Toast.text('Click the icon to close the popup');
      },
      cancel() {
        Toast.text('Click the overlay to close the popup');
      }
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
<nut-cell title="Error Message" is-link @click="state.visible = true;"></nut-cell>
 <nut-shortpassword
      v-model="state.value"
      v-model:visible="state.visible"
      :error-msg="state.errorMsg"
      @change="methods.onChange"
      @close="methods.close"
      @tips="methods.onTips"
      @cancel="methods.cancel"
    >
    </nut-shortpassword>
</template>
<script>
import { reactive } from 'vue';
import { Toast } from '@nutui/nutui';
export default{
  setup() {
    const state = reactive({
      visible: false,
      value: '',
      errorMsg: 'Please enter correct password',
    });
    const methods = {
      onChange(val) {
        val && Toast.text(val);
      },
      onTips() {
        Toast.text('Execute forgotten password logic');
      },
      close() {
        Toast.text('Click the icon to close the popup');
      },
      cancel() {
        Toast.text('Click the overlay to close the popup');
      }
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
| v-model                | Current value        | String         |                              |
| v-model:visible        | Whether to show shortpassword    | Boolean        | false                        |
| title                  | title                | String         | Please enter password                   |
| desc                   | description          | String         | Verify |
| tips                   | Bottom right prompt              | String         | Forget password                     |
| close-on-click-overlay | Click to close the mask    | Boolean        | true                         |
| no-button              | whether to hide the bottom button    | Boolean        | true                         |
| length                 | ShortPassword lenght The value is 4~6| String、Number | 6                            |
| error-msg              | Error message        | String         | ''                           |


### Events

| Event | Description                  | Arguments    |
|----------|------------------------|----------|
| change   | Trigger event when password is entered     |  value    |
| ok       | Trigger event when true is clicked     | value    |
| cancel   | Trigger an event when the popup layer is clicked or canceled     | -    |
| close    | Trigger an event when the close icon is clicked | -    |
| complete | Input complete callback         | value    |

