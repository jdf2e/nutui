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


### Global Usage
:::demo
``` html
<template>
</template>
<script>
import { getCurrentInstance } from 'vue';
export default {
  setup() {
   const { proxy } = getCurrentInstance();
    proxy.$toast.text('global usage');
    return {};
  }
}
</script>
```
:::

### Text
:::demo
```html
<template>
  <nut-cell title="Text" is-link @click="textToast('text message~')"></nut-cell>
</template>
<script>
import { Toast } from '@nutui/nutui';
export default {
  setup() {
     const textToast = (msg) => {
      Toast.text(msg);
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
import { Toast } from '@nutui/nutui';
export default {
  setup() {
     const textToast = (msg) => {
      Toast.text(msg, {
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
import { Toast } from '@nutui/nutui';
export default {
  setup() {
     const textToast = (msg) => {
       Toast.success(msg);
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
import { Toast } from '@nutui/nutui';
export default {
  setup() {
     const textToast = (msg) => {
      Toast.fail(msg);
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
import { Toast } from '@nutui/nutui';
export default {
  setup() {
     const textToast = (msg) => {
      Toast.warn(msg);
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
import { Toast } from '@nutui/nutui';
export default {
  setup() {
     const textToast = (msg) => {
      Toast.loading(msg);
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
import { Toast } from '@nutui/nutui';
export default {
  setup() {
     const textToast = (msg) => {
     Toast.text(msg, {
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
import { Toast } from '@nutui/nutui';
export default {
  setup() {
     const textToast = (msg) => {
      Toast.text(msg, {
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
import { Toast } from '@nutui/nutui';
export default {
  setup() {
     const textToast = (msg) => {
       Toast.loading(msg, {
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
import { Toast } from "@nutui/nutui";
Toast.text('use in js module');
// Return the instance, you can manually call the hide method in the instance to close the prompt
const toast = Toast.loading('use in js module');
toast.hide();
```


## API
### Methods
| Methods                    | Description              | Attribute          | Return value     |
| ------------------------- | ----------------------------------------------------------------------- | --------------- | ---------- |
| Toast.text                | Show text toast   |  message｜ options | toast instance(message support incoming HTML) |
| Toast.success             | Show success toast     | message｜ options| toast instance |
| Toast.fail                | Show fail toast   | message｜ options| toast instance|
| Toast.warn                | Show warn toast    | message｜ options | toast instance |
| Toast.hide                | Close toast     | clearAll: boolean   | void       |
| Toast.loading             | Show loading toast      | message｜ options | toast instance |

### ToastOptions

| 字段                | 说明                                                                          | 类型          | 默认值                        |
| ------------------- | ----------------------------------------------------------------------------- | ------------- | ----------------------------- |
| id                  | Identifier, share one instance at the same time, default to multiple instances| String/Number | -            |
| duration            | Toast duration(ms), won't disappear if value is 0      | Number        | 2000                          |
| title            | title     | String        |           -             |
| center  | Whether to display in the middle of the page (display at the bottom when false) | Boolean| true                          |
| bottom | The distance from the bottom of the page (px or %), which takes effect when option.center is false | String| 30px       |
| text-align-center     | Whether the multi-line copy is centered           | Boolean       | true                          |
| bgColor             | background color (transparency) | String        | rgba(0, 0, 0, 0.8)      |
| custom-class         |   Custom Class          | String        |          -                   |
| icon                | Custom Icon        | String        |         -                   |
| icon-size    | Custom iconSize      | String        | 20                           |
| size        | Text Size **small**/**base**/**large**          | String        | base      |
| cover      | Whether to show the mask layer     | Boolean       | false |
| cover-color   | Cover Color   | String        | rgba(0,0,0,0)             |
| loading-rotate  | Whether the loading icon is rotated, only valid for the loading type  | Boolean | true                          |
| close             | Callback function after close                   | function      | null                          |
| close-on-click-overlay | 	Whether to close when overlay is clicked                  | Boolean       | false                         |
| custom-class          | Custom Class                      | String       |               -          |

