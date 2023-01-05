# Toast

### Intro

for light tips.

### Install

``` javascript
import { createApp } from 'vue';
import { Toast } from '@nutui/nutui';

const app = createApp();
app.use(Toast);
```

### Text
:::demo
```html
<template>
  <nut-cell title="Text" is-link @click="textToast('text message~')"></nut-cell>
</template>
<script>
import { showToast } from '@nutui/nutui';
import '@nutui/nutui/dist/packages/toast/style';
export default {
  setup() {
    const textToast = (msg) => {
      showToast.text(msg);
    };
    return {
      textToast,
    };
  }
}
</script>
```
:::
### Title

:::demo
```html
<template>
  <nut-cell title="Toast Title" is-link @click="textToast('title message~')"></nut-cell>
</template>
<script>
import { showToast } from '@nutui/nutui';
import '@nutui/nutui/dist/packages/toast/style';
export default {
  setup() {
    const textToast = (msg) => {
      showToast.text(msg, {
        title: 'title'
      });
    };
    return {
      textToast,
    };
  }
}
</script>
```
:::
### Success

:::demo
```html
<template>
  <nut-cell title="Toast Success" is-link @click="textToast('Success')"></nut-cell>
</template>
<script>
import { showToast } from '@nutui/nutui';
import '@nutui/nutui/dist/packages/toast/style';
export default {
  setup() {
    const textToast = (msg) => {
      showToast.success(msg);
    };
    return {
      textToast,
    };
  }
}
</script>
```
:::

### Fail

:::demo
```html
<template>
  <nut-cell title="Toast Fail" is-link @click="textToast('Fail')"></nut-cell>
</template>
<script>
import { showToast } from '@nutui/nutui';
import '@nutui/nutui/dist/packages/toast/style';
export default {
  setup() {
    const textToast = (msg) => {
      showToast.fail(msg);
    };
    return {
      textToast,
    };
  }
}
</script>
```
:::

### Warn

:::demo
```html
<template>
  <nut-cell title="Toast Warn" is-link @click="textToast('Warn')"></nut-cell>
</template>
<script>
import { showToast } from '@nutui/nutui';
import '@nutui/nutui/dist/packages/toast/style';
export default {
  setup() {
    const textToast = (msg) => {
      showToast.warn(msg);
    };
    return {
      textToast,
    };
  }
}
</script>
```
:::

### Loading

:::demo
```html
<template>
  <nut-cell title="Toast Loading" is-link @click="textToast('Loading')"></nut-cell>
</template>
<script>
import { showToast } from '@nutui/nutui';
import '@nutui/nutui/dist/packages/toast/style';
export default {
  setup() {
    const textToast = (msg) => {
      showToast.loading(msg);
    };
    return {
      textToast,
    };
  }
}
</script>
```
:::

### Not Disappear

:::demo
```html
<template>
  <nut-cell title="Toast Not Disappear" is-link @click="textToast('Toast Not Disappear')"></nut-cell>
</template>
<script>
import { showToast } from '@nutui/nutui';
import '@nutui/nutui/dist/packages/toast/style';
export default {
  setup() {
    const textToast = (msg) => {
      showToast.text(msg, {
        duration: 0
      });
    };
    return {
      textToast,
    };
  }
}
</script>
```
:::
### Custom Bottom Height

:::demo
```html
<template>
  <nut-cell title="Custom Bottom Height" is-link @click="textToast('Custom Bottom Height')"></nut-cell>
</template>
<script>
import { showToast } from '@nutui/nutui';
import '@nutui/nutui/dist/packages/toast/style';
export default {
  setup() {
    const textToast = (msg) => {
      showToast.text(msg, {
        center: false,
        bottom: '10%'
      });
    };
    return {
      textToast,
    };
  }
}
</script>
```
:::

### Loading with transparent cover
:::demo
```html
<template>
  <nut-cell title="Loading with transparent cover" is-link @click="textToast('Loading')"></nut-cell>
</template>
<script>
import { showToast } from '@nutui/nutui';
import '@nutui/nutui/dist/packages/toast/style';
export default {
  setup() {
    const textToast = (msg) => {
      showToast.loading(msg, {
        cover: true
      });
    };
    return {
      textToast,
    };
  }
}
</script>
```
:::


###  Support import and use in JS modules
``` javascript
import { showToast } from "@nutui/nutui";
import '@nutui/nutui/dist/packages/toast/style';
showToast.text('use in js module');
// Return the instance, you can manually call the hide method in the instance to close the prompt
const toast = showToast.loading('use in js module');
toast.hide();
```


## API
### Methods
| Methods           | Description        | Attribute         | Return value                                  |
|-------------------|--------------------|-------------------|-----------------------------------------------|
| showToast.text    | Show text toast    | message｜ options | toast instance(message support incoming HTML) |
| showToast.success | Show success toast | message｜ options | toast instance                                |
| showToast.fail    | Show fail toast    | message｜ options | toast instance                                |
| showToast.warn    | Show warn toast    | message｜ options | toast instance                                |
| showToast.hide    | Close toast        | clearAll: boolean | void                                          |
| showToast.loading | Show loading toast | message｜ options | toast instance                                |

### ToastOptions

| 字段                   | 说明                                                                                               | 类型             | 默认值             |
|------------------------|----------------------------------------------------------------------------------------------------|------------------|--------------------|
| id                     | Identifier, share one instance at the same time, default to multiple instances                     | string \| number | -                  |
| duration               | Toast duration(ms), won't disappear if value is 0                                                  | number           | `2000`               |
| title                  | title                                                                                              | string           | -                  |
| center                 | Whether to display in the middle of the page (display at the bottom when false)                    | boolean          | `true`               |
| bottom                 | The distance from the bottom of the page (px or %), which takes effect when option.center is false | string           | `30px`               |
| text-align-center      | Whether the multi-line copy is centered                                                            | boolean          | `true`               |
| bgColor                | background color (transparency)                                                                    | string           | `rgba(0, 0, 0, 0.8)` |
| custom-class           | Custom Class                                                                                       | string           | -                  |
| icon                   | Custom Icon                                                                                        | Component        | -                  |
| size                   | Text Size **small**/**base**/**large**                                                             | string           | `base`               |
| cover                  | Whether to show the mask layer                                                                     | boolean          | `false`              |
| cover-color            | Cover Color                                                                                        | string           | `rgba(0,0,0,0)`      |
| loading-rotate         | Whether the loading icon is rotated, only valid for the loading type                               | boolean          | `true`               |
| close                  | Callback function after close                                                                      | function         | `null`               |
| close-on-click-overlay | Whether to close when overlay is clicked                                                           | boolean          | `false`              |
| custom-class           | Custom Class                                                                                       | string           | -                  |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name                            | Default Value        |
|---------------------------------|----------------------|
| --nut-toast-title-font-size     | _16px_               |
| --nut-toast-text-font-size      | _14px_               |
| --nut-toast-font-color          | _var(--nut-white)_   |
| --nut-toast-inner-padding       | _24px 30px_          |
| --nut-toast-inner-bg-color      | _rgba(0, 0, 0, 0.8)_ |
| --nut-toast-inner-border-radius | _12px_               |
| --nut-toast-cover-bg-color      | _rgba(0, 0, 0, 0)_   |

