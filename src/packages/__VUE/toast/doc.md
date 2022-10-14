# Toast 吐司

### 介绍

用于轻提示。

### 安装

``` javascript
import { createApp } from 'vue';
import { Toast } from '@nutui/nutui';

const app = createApp();
app.use(Toast);
```


### 全局使用方式
:::demo
``` html
<template>
</template>
<script>
import { getCurrentInstance } from 'vue';
export default {
  setup() {
   const { proxy } = getCurrentInstance();
    proxy.$toast.text('全局使用方式');
    return {};
  }
}
</script>
```
:::

### 文字提示
:::demo
```html
<template>
  <nut-cell title="Text 文字提示" is-link @click="textToast('网络失败，请稍后再试~')"></nut-cell>
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
### 标题提示

:::demo
```html
<template>
  <nut-cell title="Toast 标题展示" is-link @click="textToast('网络失败，请稍后再试~')"></nut-cell>
</template>
<script>
import { Toast } from '@nutui/nutui';
export default {
  setup() {
     const textToast = (msg) => {
      Toast.text(msg, {
        title: '标题文字'
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
### 成功提示

:::demo
```html
<template>
  <nut-cell title="Toast 成功提示" is-link @click="textToast('成功提示')"></nut-cell>
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

### 失败提示

:::demo
```html
<template>
  <nut-cell title="Toast 失败提示" is-link @click="textToast('失败提示')"></nut-cell>
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

### 警告提示

:::demo
```html
<template>
  <nut-cell title="Toast 警告提示" is-link @click="textToast('警告提示')"></nut-cell>
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

### 加载提示

:::demo
```html
<template>
  <nut-cell title="Toast 加载提示" is-link @click="textToast('加载中')"></nut-cell>
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

### Toast不消失

:::demo
```html
<template>
  <nut-cell title="Toast不消失" is-link @click="textToast('Toast不消失')"></nut-cell>
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
### Toast自定义底部高度

:::demo
```html
<template>
  <nut-cell title="Toast 自定义底部高度" is-link @click="textToast('自定义距离')"></nut-cell>
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

### Loading带透明罩
:::demo
```html
<template>
  <nut-cell title="Loading带透明罩" is-link @click="textToast('加载中')"></nut-cell>
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


###  支持在JS模块中导入使用
``` javascript
import { Toast } from "@nutui/nutui";
Toast.text('在js模块中使用');
// 返回实例，可以手动调用实例中的hide方法关闭提示
const toast = Toast.loading('在js模块中使用');
toast.hide();
```


## API
### 方法
| 方法名                    | 说明                                                                    | 参数            | 返回值     |
| ------------------------- | ----------------------------------------------------------------------- | --------------- | ---------- |
| Toast.text                | 展示文字提示                                                            |  message｜ options | toast 实例(message支持传入HTML) |
| Toast.success             | 展示成功提示                                                            | message｜ options| toast 实例 |
| Toast.fail                | 展示失败提示                                                            | message｜ options| toast 实例 |
| Toast.warn                | 展示警告提示                                                            | message｜ options | toast 实例 |
| Toast.hide                | 关闭提示                                                                | 默认关闭所有实例，可传id关闭指定实例   | void       |
| Toast.loading             | 展示加载提示                                                            | message｜ options | toast 实例 |

### ToastOptions 数据结构

| 字段                | 说明                                                                          | 类型          | 默认值                        |
| ------------------- | ----------------------------------------------------------------------------- | ------------- | ----------------------------- |
| id                  | 标识符，相同时共用一个实例，默认为多个实例 | String/Number | -                       |
| duration            | 展示时长（毫秒）<br>值为 0 时，toast 不会自动消失      | Number        | 2000                          |
| title            | 标题     | String        |           -             |
| center              | 是否展示在页面中部（为false时展示在底部）                                     | Boolean       | true                          |
| bottom              | 距页面底部的距离（像素或者百分比），option.center为false时生效                          | String       | 30px                    |
| text-align-center     | 多行文案是否居中                                                              | Boolean       | true                          |
| bg-color             | 背景颜色（透明度）                                                            | String        | rgba(0, 0, 0, 0.8)      |
| custom-class         | 自定义类名                                                                    | String        |          -                   |
| icon                | 自定义图标，**支持图片链接或base64格式**                                        | String        |         -                   |
| icon-size                | 自定义图标尺寸                                      | String        | 20                           |
| size                | 文案尺寸，**small**/**base**/**large**三选一                                                  | String        | base                      |
| cover               | 是否显示遮罩层                                          | Boolean       | false |
| cover-color          | 遮罩层颜色，默认透明                                                          | String        | rgba(0,0,0,0)             |
| loading-rotate       | loading图标是否旋转，仅对loading类型生效                                      | Boolean       | true                          |
| close             | 关闭时触发的事件                                                              | function      | null                          |
| close-on-click-overlay | 是否在点击遮罩层后关闭提示                                                    | Boolean       | false                         |
| custom-class          | 提示框class                                                        | String       |               -          |

