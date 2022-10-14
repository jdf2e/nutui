#  Notify 消息通知

### 介绍
    
在页面顶部展示消息提示
    
### 安装
``` javascript
import { createApp } from 'vue';
import { Notify } from '@nutui/nutui';

const app = createApp();
app.use(Notify);
```    
### 基础用法
:::demo
```html
<template>
  <nut-cell is-Link @click="baseNotify('基础用法')">基础用法</nut-cell>
</template>
<script lang="ts">
import { ref } from 'vue';
import { Notify } from '@nutui/nutui';
export default {
  setup() {
    const baseNotify = (msg: string) => {
      Notify.text(msg, {
        onClose: () => {
          console.log('close');
        },
        onClick: () => {
          console.log('click');
        }
      });
    };
    return {
      baseNotify
    }
  }
}
</script>
```
:::
### 通知类型
:::demo
```html
<template>
   <nut-cell-group title="通知类型">
      <nut-cell is-Link @click="primaryNotify('主要通知')">主要通知</nut-cell>
      <nut-cell is-Link @click="successNotify('成功通知')">成功通知</nut-cell>
      <nut-cell is-Link @click="errorNotify('危险通知')">危险通知</nut-cell>
      <nut-cell is-Link @click="warningNotify('警告通知')">警告通知</nut-cell>
    </nut-cell-group>
</template>
<script lang="ts">
import { ref } from 'vue';
import { Notify } from '@nutui/nutui';
export default {
  setup() {
    const primaryNotify = (msg: string) => {
      Notify.primary(msg);
    };
    const successNotify = (msg: string) => {
      Notify.success(msg);
    };
    const errorNotify = (msg: string) => {
      Notify.danger(msg);
    };
    const warningNotify = (msg: string) => {
      Notify.warn(msg);
    };
    return {
      primaryNotify,
      successNotify,
      errorNotify,
      warningNotify,
    }
  }
}
</script>
```
:::
### 自定义
:::demo
```html
<template>
  <nut-cell-group title="自定义背景色和字体颜色">
    <nut-cell is-Link @click="cusBgNotify('自定义背景色和字体颜色')">自定义背景色和字体颜色</nut-cell>
  </nut-cell-group>
  <nut-cell-group title="自定义时长">
    <nut-cell is-Link @click="timeNotify('自定义时长')">自定义时长</nut-cell>
  </nut-cell-group>
  <nut-cell-group title="自定义位置">
    <nut-cell is-Link @click="positionNotify('自定义位置')">自定义位置</nut-cell>
  </nut-cell-group>
</template>
<script lang="ts">
import { ref } from 'vue';
import { Notify } from '@nutui/nutui';
export default {
  setup() {
    const cusBgNotify = (msg: string) => {
      Notify.text(msg, { color: '#ad0000', background: '#ffe1e1' });
    };
    const timeNotify = (msg: string) => {
      Notify.text(msg, { duration: 10000 });
    };
    const positionNotify = (msg: string) => {
      Notify.text(msg, { position: 'bottom' });
    };
    return {
      cusBgNotify,
      timeNotify,
      positionNotify
    };
  }
}
</script>
```
:::

### 组件调用
:::demo
```html
<template>
  <nut-cell-group title="组件调用">
    <nut-cell is-Link @click="showNotify">组件调用</nut-cell>
    <nut-notify v-model:visible="show">
      <span>Content</span>
    </nut-notify>
  </nut-cell-group>
</template>
<script lang="ts">
import { ref } from 'vue';
import { Notify } from '@nutui/nutui';
export default {
  setup() {
    const show = ref(false);
    const showNotify = () => {
      show.value = true;
      setTimeout(() => {
        show.value = false;
      }, 2000);
    };
    return {
      show,
      showNotify
    };
  }
}
</script>
```
:::
    
### API
    
### Props
    
| 字段       | 说明                                                  | 类型          | 默认值   |
|------------|-------------------------------------------------------|---------------|----------|
| type       | 提示的信息类型（primary，success  ，danger，warning） | String        | 'danger' |
| message    | 展示文案，支持通过\n换行                              | Boolean       | false    |
| duration   | 展示时长(ms)，值为 0 时，notify 不会消失              | String        | 3000     |
| color      | 字体颜色                                              | String        | 空       |
| background | 背景颜色                                              | String        | 空       |
| class-name | 自定义类名                                            | String/Number | 1        |
| position | 自定义位置                                           | String | 'top'        |

> 组件式调用在 `v3.1.20` 版本后支持。
### Events

| 事件名 | 说明         | 回调参数 |
|--------|--------------|----------|
| click  | 点击事件回调 | 无       |
| closed | 关闭事件回调 | 无       |
    